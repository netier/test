/*! Copyright (c) 2023 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [8295], {
        730523: o => {
            ! function () {
                "use strict";

                o.exports = {
                    polyfill: function () {
                        var o = window;
                        var t = document;
                        if (!("scrollBehavior" in t.documentElement.style) || o.__forceSmoothScrollPolyfill__ === true) {
                            var l;
                            var e = o.HTMLElement || o.Element;
                            var r = {
                                scroll: o.scroll || o.scrollTo,
                                scrollBy: o.scrollBy,
                                elementScroll: e.prototype.scroll || c,
                                scrollIntoView: e.prototype.scrollIntoView
                            };
                            var i = o.performance && o.performance.now ? o.performance.now.bind(o.performance) : Date.now;
                            l = o.navigator.userAgent;
                            var s = new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(l) ? 1 : 0;
                            o.scroll = o.scrollTo = function () {
                                if (arguments[0] !== undefined) {
                                    if (n(arguments[0]) !== true) {
                                        v.call(o, t.body, arguments[0].left !== undefined ? ~~arguments[0].left : o.scrollX || o.pageXOffset, arguments[0].top !== undefined ? ~~arguments[0].top : o.scrollY || o.pageYOffset);
                                    } else {
                                        r.scroll.call(o, arguments[0].left !== undefined ? arguments[0].left : typeof arguments[0] != "object" ? arguments[0] : o.scrollX || o.pageXOffset, arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : o.scrollY || o.pageYOffset);
                                    }
                                }
                            };
                            o.scrollBy = function () {
                                if (arguments[0] !== undefined) {
                                    if (n(arguments[0])) {
                                        r.scrollBy.call(o, arguments[0].left !== undefined ? arguments[0].left : typeof arguments[0] != "object" ? arguments[0] : 0, arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : 0);
                                    } else {
                                        v.call(o, t.body, ~~arguments[0].left + (o.scrollX || o.pageXOffset), ~~arguments[0].top + (o.scrollY || o.pageYOffset));
                                    }
                                }
                            };
                            e.prototype.scroll = e.prototype.scrollTo = function () {
                                if (arguments[0] !== undefined) {
                                    if (n(arguments[0]) !== true) {
                                        var o = arguments[0].left;
                                        var t = arguments[0].top;
                                        v.call(this, this, o === undefined ? this.scrollLeft : ~~o, t === undefined ? this.scrollTop : ~~t);
                                    } else {
                                        if (typeof arguments[0] == "number" && arguments[1] === undefined) {
                                            throw new SyntaxError("Value could not be converted");
                                        }
                                        r.elementScroll.call(this, arguments[0].left !== undefined ? ~~arguments[0].left : typeof arguments[0] != "object" ? ~~arguments[0] : this.scrollLeft, arguments[0].top !== undefined ? ~~arguments[0].top : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop);
                                    }
                                }
                            };
                            e.prototype.scrollBy = function () {
                                if (arguments[0] !== undefined) {
                                    if (n(arguments[0]) !== true) {
                                        this.scroll({
                                            left: ~~arguments[0].left + this.scrollLeft,
                                            top: ~~arguments[0].top + this.scrollTop,
                                            behavior: arguments[0].behavior
                                        });
                                    } else {
                                        r.elementScroll.call(this, arguments[0].left !== undefined ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, arguments[0].top !== undefined ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop);
                                    }
                                }
                            };
                            e.prototype.scrollIntoView = function () {
                                if (n(arguments[0]) !== true) {
                                    var l = h(this);
                                    var e = l.getBoundingClientRect();
                                    var i = this.getBoundingClientRect();
                                    if (l !== t.body) {
                                        v.call(this, l, l.scrollLeft + i.left - e.left, l.scrollTop + i.top - e.top);
                                        if (o.getComputedStyle(l).position !== "fixed") {
                                            o.scrollBy({
                                                left: e.left,
                                                top: e.top,
                                                behavior: "smooth"
                                            });
                                        }
                                    } else {
                                        o.scrollBy({
                                            left: i.left,
                                            top: i.top,
                                            behavior: "smooth"
                                        });
                                    }
                                } else {
                                    r.scrollIntoView.call(this, arguments[0] === undefined || arguments[0]);
                                }
                            };
                        }

                        function c (o, t) {
                            this.scrollLeft = o;
                            this.scrollTop = t;
                        }

                        function n (o) {
                            if (o === null || typeof o != "object" || o.behavior === undefined || o.behavior === "auto" || o.behavior === "instant") {
                                return true;
                            }
                            if (typeof o == "object" && o.behavior === "smooth") {
                                return false;
                            }
                            throw new TypeError("behavior member of ScrollOptions " + o.behavior + " is not a valid value for enumeration ScrollBehavior.");
                        }

                        function f (o, t) {
                            if (t === "Y") {
                                return o.clientHeight + s < o.scrollHeight;
                            } else if (t === "X") {
                                return o.clientWidth + s < o.scrollWidth;
                            } else {
                                return undefined;
                            }
                        }

                        function a (t, l) {
                            var e = o.getComputedStyle(t, null)["overflow" + l];
                            return e === "auto" || e === "scroll";
                        }

                        function p (o) {
                            var t = f(o, "Y") && a(o, "Y");
                            var l = f(o, "X") && a(o, "X");
                            return t || l;
                        }

                        function h (o) {
                            for (; o !== t.body && p(o) === false;) {
                                o = o.parentNode || o.host;
                            }
                            return o;
                        }

                        function d (t) {
                            var l;
                            var e;
                            var r;
                            var s;
                            var c = (i() - t.startTime) / 468;
                            s = c = c > 1 ? 1 : c;
                            l = (1 - Math.cos(Math.PI * s)) * 0.5;
                            e = t.startX + (t.x - t.startX) * l;
                            r = t.startY + (t.y - t.startY) * l;
                            t.method.call(t.scrollable, e, r);
                            if (!(e === t.x && r === t.y)) {
                                o.requestAnimationFrame(d.bind(o, t));
                            }
                        }

                        function v (l, e, s) {
                            var n;
                            var f;
                            var a;
                            var p;
                            var h = i();
                            if (l === t.body) {
                                n = o;
                                f = o.scrollX || o.pageXOffset;
                                a = o.scrollY || o.pageYOffset;
                                p = r.scroll;
                            } else {
                                n = l;
                                f = l.scrollLeft;
                                a = l.scrollTop;
                                p = c;
                            }
                            d({
                                scrollable: n,
                                method: p,
                                startTime: h,
                                startX: f,
                                startY: a,
                                x: e,
                                y: s
                            });
                        }
                    }
                };
            }();
        }
    }
]);
//# sourceMappingURL=https://web.whatsapp.com/vendors~lazy_loaded_high_priority_components~lazy_loaded_low_priority_components.e4bc397bdb594c85b9eb.js.map