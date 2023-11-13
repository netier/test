/*! Copyright (c) 2023 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [9821], {
        49090: e => {
            function t (e, t) {
                e.onload = function () {
                    this.onerror = this.onload = null;
                    t(null, e);
                };
                e.onerror = function () {
                    this.onerror = this.onload = null;
                    t(new Error("Failed to load " + this.src), e);
                };
            }

            function n (e, t) {
                e.onreadystatechange = function () {
                    if (!(this.readyState != "complete" && this.readyState != "loaded")) {
                        this.onreadystatechange = null;
                        t(null, e);
                    }
                };
            }
            e.exports = function (e, r, o) {
                var i = document.head || document.getElementsByTagName("head")[0];
                var a = document.createElement("script");
                if (typeof r == "function") {
                    o = r;
                    r = {};
                }
                r = r || {};
                o = o || function () {};
                a.type = r.type || "text/javascript";
                a.charset = r.charset || "utf8";
                a.async = !("async" in r) || !!r.async;
                a.src = e;
                if (r.attrs) {
                    (function (e, t) {
                        for (var n in t) {
                            e.setAttribute(n, t[n]);
                        }
                    })(a, r.attrs);
                }
                if (r.text) {
                    a.text = "" + r.text;
                }
                ("onload" in a ? t : n)(a, o);
                if (!a.onload) {
                    t(a, o);
                }
                i.appendChild(a);
            };
        },
        829750: e => {
            e.exports = function (e, t, n) {
                if (e == e) {
                    if (n !== undefined) {
                        e = e <= n ? e : n;
                    }
                    if (t !== undefined) {
                        e = e >= t ? e : t;
                    }
                }
                return e;
            };
        },
        105512: (e, t, n) => {
            var r = n(442118);
            e.exports = function (e, t) {
                for (var n = e.length; n-- && r(t, e[n], 0) > -1;);
                return n;
            };
        },
        389179: (e, t, n) => {
            var r = n(555639);
            var o = n(640554);
            var i = n(14841);
            var a = n(479833);
            var s = r.isFinite;
            var u = Math.min;
            e.exports = function (e) {
                var t = Math[e];
                return function (e, n) {
                    e = i(e);
                    if ((n = n == null ? 0 : u(o(n), 292)) && s(e)) {
                        var r = (a(e) + "e").split("e");
                        var c = t(r[0] + "e" + (+r[1] + n));
                        return +((r = (a(c) + "e").split("e"))[0] + "e" + (+r[1] - n));
                    }
                    return t(e);
                };
            };
        },
        974691: (e, t, n) => {
            var r = n(829750);
            var o = n(14841);
            e.exports = function (e, t, n) {
                if (n === undefined) {
                    n = t;
                    t = undefined;
                }
                if (n !== undefined) {
                    n = (n = o(n)) == n ? n : 0;
                }
                if (t !== undefined) {
                    t = (t = o(t)) == t ? t : 0;
                }
                return r(o(e), t, n);
            };
        },
        29521: (e, t, n) => {
            var r = n(920731);
            var o = n(121078);
            var i = n(105976);
            var a = n(229246);
            var s = n(610928);
            var u = i(function (e, t) {
                var n = s(t);
                if (a(n)) {
                    n = undefined;
                }
                if (a(e)) {
                    return r(e, o(t, 1, a, true), undefined, n);
                } else {
                    return [];
                }
            });
            e.exports = u;
        },
        705558: (e, t, n) => {
            var r = n(389179)("floor");
            e.exports = r;
        },
        133856: (e, t, n) => {
            var r = n(829932);
            var o = n(247556);
            var i = n(105976);
            var a = n(24387);
            var s = n(610928);
            var u = i(function (e) {
                var t = s(e);
                var n = r(e, a);
                if (t = typeof t == "function" ? t : undefined) {
                    n.pop();
                }
                if (n.length && n[0] === e[0]) {
                    return o(n, undefined, t);
                } else {
                    return [];
                }
            });
            e.exports = u;
        },
        59854: (e, t, n) => {
            var r = n(389179)("round");
            e.exports = r;
        },
        710691: (e, t, n) => {
            var r = n(880531);
            var o = n(440180);
            var i = n(105512);
            var a = n(683140);
            var s = n(479833);
            var u = n(567990);
            e.exports = function (e, t, n) {
                if ((e = s(e)) && (n || t === undefined)) {
                    return e.slice(0, u(e) + 1);
                }
                if (!e || !(t = r(t))) {
                    return e;
                }
                var c = a(e);
                var l = i(c, a(t)) + 1;
                return o(c, 0, l).join("");
            };
        },
        892703: (e, t, n) => {
            "use strict";

            var r = n(150414);

            function o () {}

            function i () {}
            i.resetWarningCache = o;
            e.exports = function () {
                function e (e, t, n, o, i, a) {
                    if (a !== r) {
                        var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        s.name = "Invariant Violation";
                        throw s;
                    }
                }

                function t () {
                    return e;
                }
                e.isRequired = e;
                var n = {
                    array: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: i,
                    resetWarningCache: o
                };
                n.PropTypes = n;
                return n;
            };
        },
        45697: (e, t, n) => {
            e.exports = n(892703)();
        },
        150414: e => {
            "use strict";

            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
        },
        803689: (e, t, n) => {
            "use strict";

            n.r(t);
            n.d(t, {
                ucs2decode: () => p,
                ucs2encode: () => h,
                decode: () => m,
                encode: () => g,
                toASCII: () => _,
                toUnicode: () => b,
                default: () => w
            });
            const r = 2147483647;
            const o = 36;
            const i = /^xn--/;
            const a = /[^\0-\x7E]/;
            const s = /[\x2E\u3002\uFF0E\uFF61]/g;
            const u = {
                overflow: "Overflow: input needs wider integers to process",
                "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                "invalid-input": "Invalid input"
            };
            const c = Math.floor;
            const l = String.fromCharCode;

            function f (e) {
                throw new RangeError(u[e]);
            }

            function d (e, t) {
                const n = e.split("@");
                let r = "";
                if (n.length > 1) {
                    r = n[0] + "@";
                    e = n[1];
                }
                const o = function (e, t) {
                    const n = [];
                    let r = e.length;
                    for (; r--;) {
                        n[r] = t(e[r]);
                    }
                    return n;
                }((e = e.replace(s, ".")).split("."), t).join(".");
                return r + o;
            }

            function p (e) {
                const t = [];
                let n = 0;
                const r = e.length;
                for (; n < r;) {
                    const o = e.charCodeAt(n++);
                    if (o >= 55296 && o <= 56319 && n < r) {
                        const r = e.charCodeAt(n++);
                        if ((r & 64512) == 56320) {
                            t.push(((o & 1023) << 10) + (r & 1023) + 65536);
                        } else {
                            t.push(o);
                            n--;
                        }
                    } else {
                        t.push(o);
                    }
                }
                return t;
            }
            const h = e => String.fromCodePoint(...e);
            const v = function (e, t) {
                return e + 22 + (e < 26) * 75 - ((t != 0) << 5);
            };
            const y = function (e, t, n) {
                let r = 0;
                e = n ? c(e / 700) : e >> 1;
                e += c(e / t);
                for (; e > 455; r += o) {
                    e = c(e / 35);
                }
                return c(r + e * 36 / (e + 38));
            };
            const m = function (e) {
                const t = [];
                const n = e.length;
                let i = 0;
                let a = 128;
                let s = 72;
                let u = e.lastIndexOf("-");
                if (u < 0) {
                    u = 0;
                }
                for (let n = 0; n < u; ++n) {
                    if (e.charCodeAt(n) >= 128) {
                        f("not-basic");
                    }
                    t.push(e.charCodeAt(n));
                }
                for (let d = u > 0 ? u + 1 : 0; d < n;) {
                    let u = i;
                    for (let t = 1, a = o;; a += o) {
                        if (d >= n) {
                            f("invalid-input");
                        }
                        const u = (l = e.charCodeAt(d++)) - 48 < 10 ? l - 22 : l - 65 < 26 ? l - 65 : l - 97 < 26 ? l - 97 : o;
                        if (u >= o || u > c((r - i) / t)) {
                            f("overflow");
                        }
                        i += u * t;
                        const p = a <= s ? 1 : a >= s + 26 ? 26 : a - s;
                        if (u < p) {
                            break;
                        }
                        const h = o - p;
                        if (t > c(r / h)) {
                            f("overflow");
                        }
                        t *= h;
                    }
                    const p = t.length + 1;
                    s = y(i - u, p, u == 0);
                    if (c(i / p) > r - a) {
                        f("overflow");
                    }
                    a += c(i / p);
                    i %= p;
                    t.splice(i++, 0, a);
                }
                var l;
                return String.fromCodePoint(...t);
            };
            const g = function (e) {
                const t = [];
                let n = (e = p(e)).length;
                let i = 128;
                let a = 0;
                let s = 72;
                for (const n of e) {
                    if (n < 128) {
                        t.push(l(n));
                    }
                }
                let u = t.length;
                let d = u;
                for (u && t.push("-"); d < n;) {
                    let n = r;
                    for (const t of e) {
                        if (t >= i && t < n) {
                            n = t;
                        }
                    }
                    const p = d + 1;
                    if (n - i > c((r - a) / p)) {
                        f("overflow");
                    }
                    a += (n - i) * p;
                    i = n;
                    for (const n of e) {
                        if (n < i && ++a > r) {
                            f("overflow");
                        }
                        if (n == i) {
                            let e = a;
                            for (let n = o;; n += o) {
                                const r = n <= s ? 1 : n >= s + 26 ? 26 : n - s;
                                if (e < r) {
                                    break;
                                }
                                const i = e - r;
                                const a = o - r;
                                t.push(l(v(r + i % a, 0)));
                                e = c(i / a);
                            }
                            t.push(l(v(e, 0)));
                            s = y(a, p, d == u);
                            a = 0;
                            ++d;
                        }
                    }
                    ++a;
                    ++i;
                }
                return t.join("");
            };
            const b = function (e) {
                return d(e, function (e) {
                    if (i.test(e)) {
                        return m(e.slice(4).toLowerCase());
                    } else {
                        return e;
                    }
                });
            };
            const _ = function (e) {
                return d(e, function (e) {
                    if (a.test(e)) {
                        return "xn--" + g(e);
                    } else {
                        return e;
                    }
                });
            };
            const w = {
                version: "2.1.0",
                ucs2: {
                    decode: p,
                    encode: h
                },
                decode: m,
                encode: g,
                toASCII: _,
                toUnicode: b
            };
        },
        268356: (e, t, n) => {
            "use strict";

            var r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
                return typeof e;
            } : function (e) {
                if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
                    return "symbol";
                } else {
                    return typeof e;
                }
            };

            function o (e, t) {
                if (!(e instanceof t)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function i (e, t) {
                if (!e) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                if (!t || typeof t != "object" && typeof t != "function") {
                    return e;
                } else {
                    return t;
                }
            }

            function a (e, t) {
                if (typeof t != "function" && t !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                }
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (t) {
                    if (Object.setPrototypeOf) {
                        Object.setPrototypeOf(e, t);
                    } else {
                        e.__proto__ = t;
                    }
                }
            }
            var s = n(667294);
            var u = n(45697);
            var c = [];
            var l = [];

            function f (e) {
                var t = e();
                var n = {
                    loading: true,
                    loaded: null,
                    error: null
                };
                n.promise = t.then(function (e) {
                    n.loading = false;
                    n.loaded = e;
                    return e;
                }).catch(function (e) {
                    n.loading = false;
                    n.error = e;
                    throw e;
                });
                return n;
            }

            function d (e) {
                var t = {
                    loading: false,
                    loaded: {},
                    error: null
                };
                var n = [];
                try {
                    Object.keys(e).forEach(function (r) {
                        var o = f(e[r]);
                        if (o.loading) {
                            t.loading = true;
                        } else {
                            t.loaded[r] = o.loaded;
                            t.error = o.error;
                        }
                        n.push(o.promise);
                        o.promise.then(function (e) {
                            t.loaded[r] = e;
                        }).catch(function (e) {
                            t.error = e;
                        });
                    });
                } catch (e) {
                    t.error = e;
                }
                t.promise = Promise.all(n).then(function (e) {
                    t.loading = false;
                    return e;
                }).catch(function (e) {
                    t.loading = false;
                    throw e;
                });
                return t;
            }

            function p (e, t) {
                return s.createElement((n = e) && n.__esModule ? n.default : n, t);
                var n;
            }

            function h (e, t) {
                var f;
                var d;
                if (!t.loading) {
                    throw new Error("react-loadable requires a `loading` component");
                }
                var h = Object.assign({
                    loader: null,
                    loading: null,
                    delay: 200,
                    timeout: null,
                    render: p,
                    webpack: null,
                    modules: null
                }, t);
                var v = null;

                function y () {
                    if (!v) {
                        v = e(h.loader);
                    }
                    return v.promise;
                }
                c.push(y);
                if (typeof h.webpack == "function") {
                    l.push(function () {
                        e = h.webpack;
                        if (r(n.m) === "object" && e().every(function (e) {
                                return e !== undefined && n.m[e] !== undefined;
                            })) {
                            return y();
                        }
                        var e;
                    });
                }
                d = f = function (t) {
                    function n (r) {
                        o(this, n);
                        var a = i(this, t.call(this, r));
                        a.retry = function () {
                            a.setState({
                                error: null,
                                loading: true,
                                timedOut: false
                            });
                            v = e(h.loader);
                            a._loadModule();
                        };
                        y();
                        a.state = {
                            error: v.error,
                            pastDelay: false,
                            timedOut: false,
                            loading: v.loading,
                            loaded: v.loaded
                        };
                        return a;
                    }
                    a(n, t);
                    n.preload = function () {
                        return y();
                    };
                    n.prototype.componentWillMount = function () {
                        this._mounted = true;
                        this._loadModule();
                    };
                    n.prototype._loadModule = function () {
                        var e = this;
                        if (this.context.loadable && Array.isArray(h.modules)) {
                            h.modules.forEach(function (t) {
                                e.context.loadable.report(t);
                            });
                        }
                        if (v.loading) {
                            if (typeof h.delay == "number") {
                                if (h.delay === 0) {
                                    this.setState({
                                        pastDelay: true
                                    });
                                } else {
                                    this._delay = setTimeout(function () {
                                        e.setState({
                                            pastDelay: true
                                        });
                                    }, h.delay);
                                }
                            }
                            if (typeof h.timeout == "number") {
                                this._timeout = setTimeout(function () {
                                    e.setState({
                                        timedOut: true
                                    });
                                }, h.timeout);
                            }
                            var t = function () {
                                if (e._mounted) {
                                    e.setState({
                                        error: v.error,
                                        loaded: v.loaded,
                                        loading: v.loading
                                    });
                                    e._clearTimeouts();
                                }
                            };
                            v.promise.then(function () {
                                t();
                            }).catch(function (e) {
                                t();
                            });
                        }
                    };
                    n.prototype.componentWillUnmount = function () {
                        this._mounted = false;
                        this._clearTimeouts();
                    };
                    n.prototype._clearTimeouts = function () {
                        clearTimeout(this._delay);
                        clearTimeout(this._timeout);
                    };
                    n.prototype.render = function () {
                        if (this.state.loading || this.state.error) {
                            return s.createElement(h.loading, {
                                isLoading: this.state.loading,
                                pastDelay: this.state.pastDelay,
                                timedOut: this.state.timedOut,
                                error: this.state.error,
                                retry: this.retry
                            });
                        } else if (this.state.loaded) {
                            return h.render(this.state.loaded, this.props);
                        } else {
                            return null;
                        }
                    };
                    return n;
                }(s.Component);
                f.contextTypes = {
                    loadable: u.shape({
                        report: u.func.isRequired
                    })
                };
                return d;
            }

            function v (e) {
                return h(f, e);
            }
            v.Map = function (e) {
                if (typeof e.render != "function") {
                    throw new Error("LoadableMap requires a `render(loaded, props)` function");
                }
                return h(d, e);
            };
            var y = function (e) {
                function t () {
                    o(this, t);
                    return i(this, e.apply(this, arguments));
                }
                a(t, e);
                t.prototype.getChildContext = function () {
                    return {
                        loadable: {
                            report: this.props.report
                        }
                    };
                };
                t.prototype.render = function () {
                    return s.Children.only(this.props.children);
                };
                return t;
            }(s.Component);

            function m (e) {
                for (var t = []; e.length;) {
                    var n = e.pop();
                    t.push(n());
                }
                return Promise.all(t).then(function () {
                    if (e.length) {
                        return m(e);
                    }
                });
            }
            y.propTypes = {
                report: u.func.isRequired
            };
            y.childContextTypes = {
                loadable: u.shape({
                    report: u.func.isRequired
                }).isRequired
            };
            v.Capture = y;
            v.preloadAll = function () {
                return new Promise(function (e, t) {
                    m(c).then(e, t);
                });
            };
            v.preloadReady = function () {
                return new Promise(function (e, t) {
                    m(l).then(e, e);
                });
            };
            e.exports = v;
        },
        391033: (e, t, n) => {
            "use strict";

            n.r(t);
            n.d(t, {
                default: () => x
            });
            var r = function () {
                if (typeof Map != "undefined") {
                    return Map;
                }

                function e (e, t) {
                    var n = -1;
                    e.some(function (e, r) {
                        return e[0] === t && (n = r, true);
                    });
                    return n;
                }
                return function () {
                    function t () {
                        this.__entries__ = [];
                    }
                    Object.defineProperty(t.prototype, "size", {
                        get: function () {
                            return this.__entries__.length;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    t.prototype.get = function (t) {
                        var n = e(this.__entries__, t);
                        var r = this.__entries__[n];
                        return r && r[1];
                    };
                    t.prototype.set = function (t, n) {
                        var r = e(this.__entries__, t);
                        if (~r) {
                            this.__entries__[r][1] = n;
                        } else {
                            this.__entries__.push([t, n]);
                        }
                    };
                    t.prototype.delete = function (t) {
                        var n = this.__entries__;
                        var r = e(n, t);
                        if (~r) {
                            n.splice(r, 1);
                        }
                    };
                    t.prototype.has = function (t) {
                        return !!~e(this.__entries__, t);
                    };
                    t.prototype.clear = function () {
                        this.__entries__.splice(0);
                    };
                    t.prototype.forEach = function (e, t) {
                        if (t === undefined) {
                            t = null;
                        }
                        for (var n = 0, r = this.__entries__; n < r.length; n++) {
                            var o = r[n];
                            e.call(t, o[1], o[0]);
                        }
                    };
                    return t;
                }();
            }();
            var o = typeof window != "undefined" && typeof document != "undefined" && window.document === document;
            var i = n.g !== undefined && n.g.Math === Math ? n.g : typeof self != "undefined" && self.Math === Math ? self : typeof window != "undefined" && window.Math === Math ? window : Function("return this")();
            var a = typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(i) : function (e) {
                return setTimeout(function () {
                    return e(Date.now());
                }, 1000 / 60);
            };
            var s = ["top", "right", "bottom", "left", "width", "height", "size", "weight"];
            var u = typeof MutationObserver != "undefined";
            var c = function () {
                function e () {
                    this.connected_ = false;
                    this.mutationEventsAdded_ = false;
                    this.mutationsObserver_ = null;
                    this.observers_ = [];
                    this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
                    this.refresh = function (e, t) {
                        var n = false;
                        var r = false;
                        var o = 0;

                        function i () {
                            if (n) {
                                n = false;
                                e();
                            }
                            if (r) {
                                u();
                            }
                        }

                        function s () {
                            a(i);
                        }

                        function u () {
                            var e = Date.now();
                            if (n) {
                                if (e - o < 2) {
                                    return;
                                }
                                r = true;
                            } else {
                                n = true;
                                r = false;
                                setTimeout(s, t);
                            }
                            o = e;
                        }
                        return u;
                    }(this.refresh.bind(this), 20);
                }
                e.prototype.addObserver = function (e) {
                    if (!~this.observers_.indexOf(e)) {
                        this.observers_.push(e);
                    }
                    if (!this.connected_) {
                        this.connect_();
                    }
                };
                e.prototype.removeObserver = function (e) {
                    var t = this.observers_;
                    var n = t.indexOf(e);
                    if (~n) {
                        t.splice(n, 1);
                    }
                    if (!t.length && this.connected_) {
                        this.disconnect_();
                    }
                };
                e.prototype.refresh = function () {
                    if (this.updateObservers_()) {
                        this.refresh();
                    }
                };
                e.prototype.updateObservers_ = function () {
                    var e = this.observers_.filter(function (e) {
                        e.gatherActive();
                        return e.hasActive();
                    });
                    e.forEach(function (e) {
                        return e.broadcastActive();
                    });
                    return e.length > 0;
                };
                e.prototype.connect_ = function () {
                    if (o && !this.connected_) {
                        document.addEventListener("transitionend", this.onTransitionEnd_);
                        window.addEventListener("resize", this.refresh);
                        if (u) {
                            this.mutationsObserver_ = new MutationObserver(this.refresh);
                            this.mutationsObserver_.observe(document, {
                                attributes: true,
                                childList: true,
                                characterData: true,
                                subtree: true
                            });
                        } else {
                            document.addEventListener("DOMSubtreeModified", this.refresh);
                            this.mutationEventsAdded_ = true;
                        }
                        this.connected_ = true;
                    }
                };
                e.prototype.disconnect_ = function () {
                    if (o && this.connected_) {
                        document.removeEventListener("transitionend", this.onTransitionEnd_);
                        window.removeEventListener("resize", this.refresh);
                        if (this.mutationsObserver_) {
                            this.mutationsObserver_.disconnect();
                        }
                        if (this.mutationEventsAdded_) {
                            document.removeEventListener("DOMSubtreeModified", this.refresh);
                        }
                        this.mutationsObserver_ = null;
                        this.mutationEventsAdded_ = false;
                        this.connected_ = false;
                    }
                };
                e.prototype.onTransitionEnd_ = function (e) {
                    var t = e.propertyName;
                    var n = t === undefined ? "" : t;
                    if (s.some(function (e) {
                            return !!~n.indexOf(e);
                        })) {
                        this.refresh();
                    }
                };
                e.getInstance = function () {
                    if (!this.instance_) {
                        this.instance_ = new e();
                    }
                    return this.instance_;
                };
                e.instance_ = null;
                return e;
            }();
            var l = function (e, t) {
                for (var n = 0, r = Object.keys(t); n < r.length; n++) {
                    var o = r[n];
                    Object.defineProperty(e, o, {
                        value: t[o],
                        enumerable: false,
                        writable: false,
                        configurable: true
                    });
                }
                return e;
            };
            var f = function (e) {
                return e && e.ownerDocument && e.ownerDocument.defaultView || i;
            };
            var d = g(0, 0, 0, 0);

            function p (e) {
                return parseFloat(e) || 0;
            }

            function h (e) {
                for (var t = [], n = 1; n < arguments.length; n++) {
                    t[n - 1] = arguments[n];
                }
                return t.reduce(function (t, n) {
                    return t + p(e["border-" + n + "-width"]);
                }, 0);
            }

            function v (e) {
                var t = e.clientWidth;
                var n = e.clientHeight;
                if (!t && !n) {
                    return d;
                }
                var r = f(e).getComputedStyle(e);
                var o = function (e) {
                    for (var t = {}, n = 0, r = ["top", "right", "bottom", "left"]; n < r.length; n++) {
                        var o = r[n];
                        var i = e["padding-" + o];
                        t[o] = p(i);
                    }
                    return t;
                }(r);
                var i = o.left + o.right;
                var a = o.top + o.bottom;
                var s = p(r.width);
                var u = p(r.height);
                if (r.boxSizing === "border-box") {
                    if (Math.round(s + i) !== t) {
                        s -= h(r, "left", "right") + i;
                    }
                    if (Math.round(u + a) !== n) {
                        u -= h(r, "top", "bottom") + a;
                    }
                }
                if (! function (e) {
                        return e === f(e).document.documentElement;
                    }(e)) {
                    var c = Math.round(s + i) - t;
                    var l = Math.round(u + a) - n;
                    if (Math.abs(c) !== 1) {
                        s -= c;
                    }
                    if (Math.abs(l) !== 1) {
                        u -= l;
                    }
                }
                return g(o.left, o.top, s, u);
            }
            var y = typeof SVGGraphicsElement != "undefined" ? function (e) {
                return e instanceof f(e).SVGGraphicsElement;
            } : function (e) {
                return e instanceof f(e).SVGElement && typeof e.getBBox == "function";
            };

            function m (e) {
                if (o) {
                    if (y(e)) {
                        return function (e) {
                            var t = e.getBBox();
                            return g(0, 0, t.width, t.height);
                        }(e);
                    } else {
                        return v(e);
                    }
                } else {
                    return d;
                }
            }

            function g (e, t, n, r) {
                return {
                    x: e,
                    y: t,
                    width: n,
                    height: r
                };
            }
            var b = function () {
                function e (e) {
                    this.broadcastWidth = 0;
                    this.broadcastHeight = 0;
                    this.contentRect_ = g(0, 0, 0, 0);
                    this.target = e;
                }
                e.prototype.isActive = function () {
                    var e = m(this.target);
                    this.contentRect_ = e;
                    return e.width !== this.broadcastWidth || e.height !== this.broadcastHeight;
                };
                e.prototype.broadcastRect = function () {
                    var e = this.contentRect_;
                    this.broadcastWidth = e.width;
                    this.broadcastHeight = e.height;
                    return e;
                };
                return e;
            }();
            var _ = function (e, t) {
                var n;
                var r;
                var o;
                var i;
                var a;
                var s;
                var u;
                r = (n = t).x;
                o = n.y;
                i = n.width;
                a = n.height;
                s = typeof DOMRectReadOnly != "undefined" ? DOMRectReadOnly : Object;
                u = Object.create(s.prototype);
                l(u, {
                    x: r,
                    y: o,
                    width: i,
                    height: a,
                    top: o,
                    right: r + i,
                    bottom: a + o,
                    left: r
                });
                var c = u;
                l(this, {
                    target: e,
                    contentRect: c
                });
            };
            var w = function () {
                function e (e, t, n) {
                    this.activeObservations_ = [];
                    this.observations_ = new r();
                    if (typeof e != "function") {
                        throw new TypeError("The callback provided as parameter 1 is not a function.");
                    }
                    this.callback_ = e;
                    this.controller_ = t;
                    this.callbackCtx_ = n;
                }
                e.prototype.observe = function (e) {
                    if (!arguments.length) {
                        throw new TypeError("1 argument required, but only 0 present.");
                    }
                    if (typeof Element != "undefined" && Element instanceof Object) {
                        if (!(e instanceof f(e).Element)) {
                            throw new TypeError("parameter 1 is not of type \"Element\".");
                        }
                        var t = this.observations_;
                        if (!t.has(e)) {
                            t.set(e, new b(e));
                            this.controller_.addObserver(this);
                            this.controller_.refresh();
                        }
                    }
                };
                e.prototype.unobserve = function (e) {
                    if (!arguments.length) {
                        throw new TypeError("1 argument required, but only 0 present.");
                    }
                    if (typeof Element != "undefined" && Element instanceof Object) {
                        if (!(e instanceof f(e).Element)) {
                            throw new TypeError("parameter 1 is not of type \"Element\".");
                        }
                        var t = this.observations_;
                        if (t.has(e)) {
                            t.delete(e);
                            if (!t.size) {
                                this.controller_.removeObserver(this);
                            }
                        }
                    }
                };
                e.prototype.disconnect = function () {
                    this.clearActive();
                    this.observations_.clear();
                    this.controller_.removeObserver(this);
                };
                e.prototype.gatherActive = function () {
                    var e = this;
                    this.clearActive();
                    this.observations_.forEach(function (t) {
                        if (t.isActive()) {
                            e.activeObservations_.push(t);
                        }
                    });
                };
                e.prototype.broadcastActive = function () {
                    if (this.hasActive()) {
                        var e = this.callbackCtx_;
                        var t = this.activeObservations_.map(function (e) {
                            return new _(e.target, e.broadcastRect());
                        });
                        this.callback_.call(e, t, e);
                        this.clearActive();
                    }
                };
                e.prototype.clearActive = function () {
                    this.activeObservations_.splice(0);
                };
                e.prototype.hasActive = function () {
                    return this.activeObservations_.length > 0;
                };
                return e;
            }();
            var E = typeof WeakMap != "undefined" ? new WeakMap() : new r();
            var O = function e (t) {
                if (!(this instanceof e)) {
                    throw new TypeError("Cannot call a class as a function.");
                }
                if (!arguments.length) {
                    throw new TypeError("1 argument required, but only 0 present.");
                }
                var n = c.getInstance();
                var r = new w(t, n, this);
                E.set(this, r);
            };
            ["observe", "unobserve", "disconnect"].forEach(function (e) {
                O.prototype[e] = function () {
                    var t;
                    return (t = E.get(this))[e].apply(t, arguments);
                };
            });
            const x = i.ResizeObserver !== undefined ? i.ResizeObserver : O;
        },
        733988: e => {
            "use strict";

            var t;
            /**
             * @link https://github.com/gajus/sister for the canonical source repository
             * @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
             */
            t = function () {
                var e = {};
                var t = {};
                e.on = function (e, n) {
                    var r = {
                        name: e,
                        handler: n
                    };
                    t[e] = t[e] || [];
                    t[e].unshift(r);
                    return r;
                };
                e.off = function (e) {
                    var n = t[e.name].indexOf(e);
                    if (n !== -1) {
                        t[e.name].splice(n, 1);
                    }
                };
                e.trigger = function (e, n) {
                    var r;
                    var o = t[e];
                    if (o) {
                        for (r = o.length; r--;) {
                            o[r].handler(n);
                        }
                    }
                };
                return e;
            };
            e.exports = t;
        },
        66006: (e, t, n) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            var r;
            var o = n(322275);
            var i = (r = o) && r.__esModule ? r : {
                default: r
            };
            t.default = {
                pauseVideo: {
                    acceptableStates: [i.default.ENDED, i.default.PAUSED],
                    stateChangeRequired: false
                },
                playVideo: {
                    acceptableStates: [i.default.ENDED, i.default.PLAYING],
                    stateChangeRequired: false
                },
                seekTo: {
                    acceptableStates: [i.default.ENDED, i.default.PLAYING, i.default.PAUSED],
                    stateChangeRequired: true,
                    timeout: 3000
                }
            };
            e.exports = t.default;
        },
        989125: (e, t, n) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            var r = s(n(409215));
            var o = s(n(28255));
            var i = s(n(165279));
            var a = s(n(66006));

            function s (e) {
                if (e && e.__esModule) {
                    return e;
                } else {
                    return {
                        default: e
                    };
                }
            }
            var u = (0, r.default)("youtube-player");
            var c = {
                proxyEvents: function (e) {
                    var t = {};
                    var n = function (n) {
                        var r = "on" + n.slice(0, 1).toUpperCase() + n.slice(1);
                        t[r] = function (t) {
                            u("event \"%s\"", r, t);
                            e.trigger(n, t);
                        };
                    };
                    var r = true;
                    var o = false;
                    var a = undefined;
                    try {
                        for (var s, c = i.default[Symbol.iterator](); !(r = (s = c.next()).done); r = true) {
                            n(s.value);
                        }
                    } catch (e) {
                        o = true;
                        a = e;
                    } finally {
                        try {
                            if (!r && c.return) {
                                c.return();
                            }
                        } finally {
                            if (o) {
                                throw a;
                            }
                        }
                    }
                    return t;
                },
                promisifyPlayer: function (e) {
                    var t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
                    var n = {};
                    var r = function (r) {
                        if (t && a.default[r]) {
                            n[r] = function () {
                                for (var t = arguments.length, n = Array(t), o = 0; o < t; o++) {
                                    n[o] = arguments[o];
                                }
                                return e.then(function (e) {
                                    var t = a.default[r];
                                    var o = e.getPlayerState();
                                    var i = e[r].apply(e, n);
                                    if (t.stateChangeRequired || Array.isArray(t.acceptableStates) && t.acceptableStates.indexOf(o) === -1) {
                                        return new Promise(function (n) {
                                            e.addEventListener("onStateChange", function r () {
                                                var o = e.getPlayerState();
                                                var i = undefined;
                                                if (typeof t.timeout == "number") {
                                                    i = setTimeout(function () {
                                                        e.removeEventListener("onStateChange", r);
                                                        n();
                                                    }, t.timeout);
                                                }
                                                if (Array.isArray(t.acceptableStates) && t.acceptableStates.indexOf(o) !== -1) {
                                                    e.removeEventListener("onStateChange", r);
                                                    clearTimeout(i);
                                                    n();
                                                }
                                            });
                                        }).then(function () {
                                            return i;
                                        });
                                    } else {
                                        return i;
                                    }
                                });
                            };
                        } else {
                            n[r] = function () {
                                for (var t = arguments.length, n = Array(t), o = 0; o < t; o++) {
                                    n[o] = arguments[o];
                                }
                                return e.then(function (e) {
                                    return e[r].apply(e, n);
                                });
                            };
                        }
                    };
                    var i = true;
                    var s = false;
                    var u = undefined;
                    try {
                        for (var c, l = o.default[Symbol.iterator](); !(i = (c = l.next()).done); i = true) {
                            var f = c.value;
                            r(f);
                        }
                    } catch (e) {
                        s = true;
                        u = e;
                    } finally {
                        try {
                            if (!i && l.return) {
                                l.return();
                            }
                        } finally {
                            if (s) {
                                throw u;
                            }
                        }
                    }
                    return n;
                }
            };
            t.default = c;
            e.exports = t.default;
        },
        322275: (e, t) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = {
                BUFFERING: 3,
                ENDED: 0,
                PAUSED: 2,
                PLAYING: 1,
                UNSTARTED: -1,
                VIDEO_CUED: 5
            };
            e.exports = t.default;
        },
        165279: (e, t) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = ["ready", "stateChange", "playbackQualityChange", "playbackRateChange", "error", "apiChange", "volumeChange"];
            e.exports = t.default;
        },
        28255: (e, t) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = ["cueVideoById", "loadVideoById", "cueVideoByUrl", "loadVideoByUrl", "playVideo", "pauseVideo", "stopVideo", "getVideoLoadedFraction", "cuePlaylist", "loadPlaylist", "nextVideo", "previousVideo", "playVideoAt", "setShuffle", "setLoop", "getPlaylist", "getPlaylistIndex", "setOption", "mute", "unMute", "isMuted", "setVolume", "getVolume", "seekTo", "getPlayerState", "getPlaybackRate", "setPlaybackRate", "getAvailablePlaybackRates", "getPlaybackQuality", "setPlaybackQuality", "getAvailableQualityLevels", "getCurrentTime", "getDuration", "removeEventListener", "getVideoUrl", "getVideoEmbedCode", "getOptions", "getOption", "addEventListener", "destroy", "setSize", "getIframe"];
            e.exports = t.default;
        },
        311062: (e, t, n) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            var r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
                return typeof e;
            } : function (e) {
                if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
                    return "symbol";
                } else {
                    return typeof e;
                }
            };
            var o = s(n(733988));
            var i = s(n(855900));
            var a = s(n(989125));

            function s (e) {
                if (e && e.__esModule) {
                    return e;
                } else {
                    return {
                        default: e
                    };
                }
            }
            var u = undefined;
            t.default = function (e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var n = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
                var s = (0, o.default)();
                if (!u) {
                    u = (0, i.default)(s);
                }
                if (t.events) {
                    throw new Error("Event handlers cannot be overwritten.");
                }
                if (typeof e == "string" && !document.getElementById(e)) {
                    throw new Error("Element \"" + e + "\" does not exist.");
                }
                t.events = a.default.proxyEvents(s);
                var c = new Promise(function (n) {
                    if ((e === undefined ? "undefined" : r(e)) === "object" && e.playVideo instanceof Function) {
                        n(e);
                    } else {
                        u.then(function (r) {
                            var o = new r.Player(e, t);
                            s.on("ready", function () {
                                n(o);
                            });
                            return null;
                        });
                    }
                });
                var l = a.default.promisifyPlayer(c, n);
                l.on = s.on;
                l.off = s.off;
                return l;
            };
            e.exports = t.default;
        },
        855900: (e, t, n) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            var r;
            var o = n(49090);
            var i = (r = o) && r.__esModule ? r : {
                default: r
            };
            t.default = function (e) {
                return new Promise(function (t) {
                    if (window.YT && window.YT.Player && window.YT.Player instanceof Function) {
                        t(window.YT);
                    } else {
                        var n = window.location.protocol === "http:" ? "http:" : "https:";
                        (0, i.default)(n + "//www.youtube.com/iframe_api", function (t) {
                            if (t) {
                                e.trigger("error", t);
                            }
                        });
                        var r = window.onYouTubeIframeAPIReady;
                        window.onYouTubeIframeAPIReady = function () {
                            if (r) {
                                r();
                            }
                            t(window.YT);
                        };
                    }
                });
            };
            e.exports = t.default;
        },
        409215: (e, t, n) => {
            function r () {
                var e;
                try {
                    e = t.storage.debug;
                } catch (e) {}
                if (!e && typeof process != "undefined" && "env" in process) {
                    e = process.env.DEBUG;
                }
                return e;
            }
            (t = e.exports = n(655046)).log = function () {
                return typeof console == "object" && console.log && Function.prototype.apply.call(console.log, console, arguments);
            };
            t.formatArgs = function (e) {
                var n = this.useColors;
                e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff);
                if (!n) {
                    return;
                }
                var r = "color: " + this.color;
                e.splice(1, 0, r, "color: inherit");
                var o = 0;
                var i = 0;
                e[0].replace(/%[a-zA-Z%]/g, function (e) {
                    if (e !== "%%") {
                        o++;
                        if (e === "%c") {
                            i = o;
                        }
                    }
                });
                e.splice(i, 0, r);
            };
            t.save = function (e) {
                try {
                    if (e == null) {
                        t.storage.removeItem("debug");
                    } else {
                        t.storage.debug = e;
                    }
                } catch (e) {}
            };
            t.load = r;
            t.useColors = function () {
                if (typeof window != "undefined" && window.process && window.process.type === "renderer") {
                    return true;
                }
                return typeof document != "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window != "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator != "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator != "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
            };
            t.storage = typeof chrome != "undefined" && chrome.storage !== undefined ? chrome.storage.local : function () {
                try {
                    return window.localStorage;
                } catch (e) {}
            }();
            t.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"];
            t.formatters.j = function (e) {
                try {
                    return JSON.stringify(e);
                } catch (e) {
                    return "[UnexpectedJSONParseError]: " + e.message;
                }
            };
            t.enable(r());
        },
        655046: (e, t, n) => {
            var r;

            function o (e) {
                function n () {
                    if (n.enabled) {
                        var e = n;
                        var o = +new Date();
                        var i = o - (r || o);
                        e.diff = i;
                        e.prev = r;
                        e.curr = o;
                        r = o;
                        for (var a = new Array(arguments.length), s = 0; s < a.length; s++) {
                            a[s] = arguments[s];
                        }
                        a[0] = t.coerce(a[0]);
                        if (typeof a[0] != "string") {
                            a.unshift("%O");
                        }
                        var u = 0;
                        a[0] = a[0].replace(/%([a-zA-Z%])/g, function (n, r) {
                            if (n === "%%") {
                                return n;
                            }
                            u++;
                            var o = t.formatters[r];
                            if (typeof o == "function") {
                                var i = a[u];
                                n = o.call(e, i);
                                a.splice(u, 1);
                                u--;
                            }
                            return n;
                        });
                        t.formatArgs.call(e, a);
                        var c = n.log || t.log || console.log.bind(console);
                        c.apply(e, a);
                    }
                }
                n.namespace = e;
                n.enabled = t.enabled(e);
                n.useColors = t.useColors();
                n.color = function (e) {
                    var n;
                    var r = 0;
                    for (n in e) {
                        r = (r << 5) - r + e.charCodeAt(n);
                        r |= 0;
                    }
                    return t.colors[Math.abs(r) % t.colors.length];
                }(e);
                if (typeof t.init == "function") {
                    t.init(n);
                }
                return n;
            }
            (t = e.exports = o.debug = o.default = o).coerce = function (e) {
                if (e instanceof Error) {
                    return e.stack || e.message;
                } else {
                    return e;
                }
            };
            t.disable = function () {
                t.enable("");
            };
            t.enable = function (e) {
                t.save(e);
                t.names = [];
                t.skips = [];
                for (var n = (typeof e == "string" ? e : "").split(/[\s,]+/), r = n.length, o = 0; o < r; o++) {
                    if (n[o]) {
                        if ((e = n[o].replace(/\*/g, ".*?"))[0] === "-") {
                            t.skips.push(new RegExp("^" + e.substr(1) + "$"));
                        } else {
                            t.names.push(new RegExp("^" + e + "$"));
                        }
                    }
                }
            };
            t.enabled = function (e) {
                var n;
                var r;
                n = 0;
                r = t.skips.length;
                for (; n < r; n++) {
                    if (t.skips[n].test(e)) {
                        return false;
                    }
                }
                n = 0;
                r = t.names.length;
                for (; n < r; n++) {
                    if (t.names[n].test(e)) {
                        return true;
                    }
                }
                return false;
            };
            t.humanize = n(674218);
            t.names = [];
            t.skips = [];
            t.formatters = {};
        }
    }
]);
//# sourceMappingURL=https://web.whatsapp.com/vendors~main.7e165df5f2eb091c4a6f.js.map