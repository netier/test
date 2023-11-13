/*! Copyright (c) 2023 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [7205], {
        621733: (e, t) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e, t) {
                let n;
                if (e.size !== t.size) {
                    return false;
                }
                for (const [a, l] of e) {
                    n = t.get(a);
                    if (n !== l || n === undefined && !t.has(a)) {
                        return false;
                    }
                }
                return true;
            };
        },
        809991: (e, t) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.CHANNEL_LINK_SHARE_DIRECTION = undefined;
            const n = Object.freeze({
                WHATSAPP: 1,
                STATUS: 2,
                EXTERNAL: 3
            });
            t.CHANNEL_LINK_SHARE_DIRECTION = n;
        },
        476300: (e, t) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.CHANNEL_LINK_SHARE_SCREEN = undefined;
            const n = Object.freeze({
                CONTEXT_CARD: 1,
                CHANNEL_INFO: 2,
                CHANNEL_THREAD: 3,
                SHARE_LINK_SCREEN: 4
            });
            t.CHANNEL_LINK_SHARE_SCREEN = n;
        },
        542040: (e, t) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DISCLOSURE_ACTION = undefined;
            const n = Object.freeze({
                SCREEN_VIEW: 0,
                CLICK_ON_CONTINUE: 1,
                CANCEL: 2,
                BACK_BUTTON_TOOLBAR: 3,
                BACK_BUTTON_SYSTEM: 4,
                DISMISS: 5,
                DISCLOSURE_INFO_VIEW: 6
            });
            t.DISCLOSURE_ACTION = n;
        },
        753146: (e, t) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DISCLOSURE_TYPE = undefined;
            const n = Object.freeze({
                NON_BLOCKING: 0,
                BLOCKING: 1,
                INFO: 2
            });
            t.DISCLOSURE_TYPE = n;
        },
        428179: (e, t, n) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ChannelLinkShareWamEvent = undefined;
            var a = n(901032);
            var l = n(809991);
            var r = n(836507);
            var o = n(476300);
            const {
                STRING: i
            } = a.TYPES;
            const u = (0, a.defineEvents)({
                ChannelLinkShare: [4728, {
                        channelLinkShareDirection: [1, l.CHANNEL_LINK_SHARE_DIRECTION],
                        channelLinkShareEntryPoint: [2, r.CHANNEL_LINK_SHARE_ENTRY_POINT],
                        channelLinkShareScreen: [4, o.CHANNEL_LINK_SHARE_SCREEN],
                        cid: [3, i]
                    },
                    [1, 1, 1], "regular"
                ]
            });
            t.ChannelLinkShareWamEvent = u;
        },
        683188: (e, t, n) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.CtwaConsumerDisclosureWamEvent = undefined;
            var a = n(901032);
            var l = n(542040);
            var r = n(753146);
            const {
                INTEGER: o
            } = a.TYPES;
            const i = (0, a.defineEvents)({
                CtwaConsumerDisclosure: [4406, {
                        ctwaConsumerDisclosureVersion: [3, o],
                        disclosureAction: [1, l.DISCLOSURE_ACTION],
                        disclosureType: [2, r.DISCLOSURE_TYPE]
                    },
                    [1, 1, 1], "private", 0
                ]
            });
            t.CtwaConsumerDisclosureWamEvent = i;
        },
        600145: (e, t, n) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.GroupProfilePictureWamEvent = undefined;
            var a = n(901032);
            var l = n(970739);
            var r = n(900213);
            var o = n(978244);
            const {
                BOOLEAN: i,
                STRING: u
            } = a.TYPES;
            const s = (0, a.defineEvents)({
                GroupProfilePicture: [3652, {
                        groupCreationDs: [1, u],
                        groupProfileAction: [7, l.GROUP_PROFILE_ACTION_TYPE],
                        hasProfilePicture: [3, i],
                        isAdmin: [4, i],
                        preciseGroupSizeBucket: [5, r.PRECISE_SIZE_BUCKET],
                        profilePictureType: [6, o.PROFILE_PICTURE_TYPE]
                    },
                    [1, 1, 1], "regular"
                ]
            });
            t.GroupProfilePictureWamEvent = s;
        },
        853417: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                var t;
                const {
                    description: n
                } = (t = (0, u.useModelValues)(e.businessProfile, ["description"])) !== null && t !== undefined ? t : {};
                if (n == null) {
                    return null;
                }
                return i.default.createElement(l.ChatInfoDrawerSection, {
                    titleTestId: "section-about",
                    title: o.fbt._("About", null, {
                        hk: "1IJ9KC"
                    })
                }, i.default.createElement(r.TextSpan, {
                    theme: "title"
                }, n));
            };
            var l = n(464659);
            var r = n(180519);
            var o = n(548360);
            var i = a(n(667294));
            var u = n(655241);
        },
        973366: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                var t;
                const {
                    commands: n,
                    commandsDescription: a
                } = (t = (0, p.useModelValues)(e.businessProfile, ["commands", "commandsDescription"])) !== null && t !== undefined ? t : {};
                if (n == null || !n.length) {
                    return null;
                }
                return d.default.createElement(l.ChatInfoDrawerSection, {
                    titleTestId: "section-commands",
                    title: c.fbt._("Commands", null, {
                        hk: "GLKbo"
                    })
                }, Boolean(a) && d.default.createElement(i.TextSpan, {
                    theme: "title"
                }, a), d.default.createElement("div", {
                    className: (0, f.default)(m.commands, u.uiMargin.top8)
                }, n.map(e => {
                    let {
                        name: t,
                        description: n
                    } = e;
                    const a = `/${t} `;
                    return d.default.createElement(r.Clickable, {
                        key: t,
                        title: n,
                        onClick: () => {
                            o.ComposeBoxActions.paste(null, a, {
                                insertLeadingSpace: true
                            });
                        },
                        xstyle: [m.command, u.uiPadding.vert4, u.uiPadding.horiz10, u.uiMargin.end8, u.uiMargin.vert4]
                    }, d.default.createElement(s.WDSTextSmall, {
                        as: "span",
                        color: "primary"
                    }, a));
                })));
            };
            var l = n(464659);
            var r = n(950987);
            var o = n(877171);
            var i = n(180519);
            var u = n(676345);
            var s = n(851488);
            var c = n(548360);
            var d = a(n(667294));
            var f = a(n(156720));
            var p = n(655241);
            const m = {
                command: {
                    borderTopStartRadius: "bbr44loe",
                    borderTopEndRadius: "ooj5yc5b",
                    borderBottomEndRadius: "m8i16etx",
                    borderBottomStartRadius: "cw0ivh8j",
                    backgroundColor: "rnr876i8"
                },
                commands: {
                    display: "p357zi0d",
                    flexDirection: "sap93d0t",
                    flexWrap: "lkhkxwyq"
                }
            };
        },
        498692: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                var t;
                const [n] = (0, c.useContactValues)(e.contact.id, [o.getId]);
                const a = (t = l.BotProfileCollection.get(n)) === null || t === undefined ? undefined : t.description;
                if (a == null) {
                    return null;
                }
                return s.default.createElement(r.ChatInfoDrawerSection, {
                    titleTestId: "section-about",
                    title: u.fbt._("About", null, {
                        hk: "3eKeST"
                    })
                }, s.default.createElement(i.TextSpan, {
                    theme: "title"
                }, a));
            };
            var l = n(169437);
            var r = n(464659);
            var o = n(660666);
            var i = n(180519);
            var u = n(548360);
            var s = a(n(667294));
            var c = n(379811);
        },
        753602: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                let {
                    chat: t
                } = e;
                if (!(0, r.shouldShowConsumerTransparencyDisclosure)(t)) {
                    return null;
                }
                return p.default.createElement(s.default, {
                    xstyle: [m.businessAccount, d.uiMargin.top10]
                }, p.default.createElement(u.default, {
                    testid: "about-business-chat",
                    onClick: o.showConsumerTransparencyModalDialog,
                    side: p.default.createElement(l.ChevronRightAltIcon, {
                        height: 24,
                        width: 10,
                        xstyle: m.iconColour
                    })
                }, p.default.createElement(c.FlexRow, {
                    align: "center"
                }, p.default.createElement(i.DoubleChevronIcon, {
                    height: 24,
                    width: 24,
                    xstyle: [m.iconColour, d.uiMargin.end20]
                }), f.fbt._("About this business chat", null, {
                    hk: "PZHUK"
                }))));
            };
            var l = n(755782);
            var r = n(188131);
            var o = n(328232);
            var i = n(931663);
            var u = a(n(831269));
            var s = a(n(969358));
            var c = n(690495);
            var d = n(676345);
            var f = n(548360);
            var p = a(n(667294));
            a(n(156720));
            const m = {
                businessAccount: {
                    fontSize: "enbbiyaj"
                },
                iconColour: {
                    color: "n0kqff35"
                }
            };
        },
        328232: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ConsumerTransparencyModalDialog = w;
            t.showConsumerTransparencyModalDialog = function () {
                f.ModalManager.open(y.default.createElement(w, null));
            };
            var l = n(811026);
            var r = n(103440);
            var o = n(683188);
            var i = n(931663);
            var u = n(753233);
            var s = n(258105);
            var c = n(690495);
            var d = n(118612);
            var f = n(114850);
            var p = n(65034);
            var m = n(180519);
            var g = n(676345);
            var h = n(54052);
            var E = n(542040);
            var b = n(753146);
            var v = n(548360);
            var y = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var n = M(t);
                if (n && n.has(e)) {
                    return n.get(e);
                }
                var a = {};
                var l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e) {
                    if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                        if (o && (o.get || o.set)) {
                            Object.defineProperty(a, r, o);
                        } else {
                            a[r] = e[r];
                        }
                    }
                }
                a.default = e;
                if (n) {
                    n.set(e, a);
                }
                return a;
            }(n(667294));
            var C = a(n(156720));

            function M (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var n = new WeakMap();
                return (M = function (e) {
                    if (e) {
                        return n;
                    } else {
                        return t;
                    }
                })(e);
            }
            const k = {
                fullWidth: {
                    width: "ln8gz9je"
                },
                centeredText: {
                    textAlign: "qfejxiq4"
                },
                bulletIconColor: {
                    color: "i5443yhl"
                },
                illustrationWrapper: {
                    color: "bj5r3vhm",
                    backgroundColor: "jd3v83ju",
                    width: "cnprk2g9",
                    height: "j74n1y92",
                    borderTopStartRadius: "g9p5wyxn",
                    borderTopEndRadius: "i0tg5vk9",
                    borderBottomEndRadius: "aoogvgrq",
                    borderBottomStartRadius: "o2zu3hjb",
                    display: "p357zi0d",
                    justifyContent: "ac2vgrno",
                    alignItems: "gndfcl4n"
                }
            };
            const _ = () => y.default.createElement(c.FlexColumn, null, y.default.createElement(c.FlexRow, {
                justify: "center",
                xstyle: [k.fullWidth, g.uiMargin.bottom8]
            }, y.default.createElement("div", {
                className: (0, C.default)(k.illustrationWrapper)
            }, y.default.createElement(i.DoubleChevronIcon, {
                width: 66,
                height: 66
            }))), y.default.createElement(m.TextDiv, {
                size: "24",
                color: "dark",
                weight: "medium",
                xstyle: [k.centeredText, g.uiMargin.top36]
            }, v.fbt._("About chats that start from Facebook or Instagram ads", null, {
                hk: "2aZNno"
            })), y.default.createElement(m.TextDiv, {
                size: "14",
                weight: "normal",
                xstyle: [k.centeredText, g.uiMargin.top16]
            }, v.fbt._("When you start a chat with a business after interacting with their ad on Facebook or Instagram, WhatsApp's parent company Meta receives limited info. This helps improve Meta ads and your experience on those apps. {=m2}", [v.fbt._implicitParam("=m2", y.default.createElement(u.ExternalLink, {
                href: (0, s.getConsumerTransparencyHCAUrl)()
            }, v.fbt._("Learn more", null, {
                hk: "1aIT4P"
            })))], {
                hk: "3BDV9F"
            })), y.default.createElement(c.FlexRow, {
                justify: "center",
                align: "center",
                xstyle: g.uiMargin.top36
            }, y.default.createElement(h.VisibilityOffIcon, {
                height: 24,
                width: 24,
                xstyle: k.bulletIconColor
            }), y.default.createElement(m.TextSpan, {
                size: "13",
                color: "dark",
                xstyle: g.uiMargin.start24
            }, v.fbt._("WhatsApp never shares your message content or calls", null, {
                hk: "3F3S6a"
            }))), y.default.createElement(c.FlexRow, {
                justify: "center",
                align: "center",
                xstyle: g.uiMargin.top20
            }, y.default.createElement(l.BusinessDataSharingIcon, {
                height: 24,
                width: 24,
                xstyle: k.bulletIconColor
            }), y.default.createElement(m.TextSpan, {
                size: "13",
                color: "dark",
                xstyle: g.uiMargin.start24
            }, v.fbt._("Info Meta receives may include the number of interactions with a business", null, {
                hk: "47Hbwq"
            }))), y.default.createElement(c.FlexRow, {
                justify: "center",
                align: "center",
                xstyle: g.uiMargin.top20
            }, y.default.createElement(p.SettingsSecurityIcon, {
                height: 24,
                width: 24,
                xstyle: k.bulletIconColor
            }), y.default.createElement(m.TextSpan, {
                size: "13",
                color: "dark",
                xstyle: g.uiMargin.start24
            }, v.fbt._("You can always stop chatting with a business or block them", null, {
                hk: "1dF4Qk"
            }))));

            function w () {
                (0, y.useEffect)(() => {
                    new o.CtwaConsumerDisclosureWamEvent({
                        ctwaConsumerDisclosureVersion: 1,
                        disclosureAction: E.DISCLOSURE_ACTION.SCREEN_VIEW,
                        disclosureType: b.DISCLOSURE_TYPE.INFO
                    }).commit();
                }, []);
                const e = () => f.ModalManager.close();
                return y.default.createElement(r.ConfirmPopup, {
                    testid: "ctwa-consumer-transparency-modal-dialog",
                    type: d.ModalTheme.DataSharing,
                    onOK: e,
                    okText: v.fbt._("Close", null, {
                        hk: "Vnajg"
                    }),
                    onOverlayClick: e
                }, y.default.createElement(_, null));
            }
        },
        894629: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const {
                    adminFunnelLogger: t,
                    focusOnMount: n
                } = e;
                const [a, r] = (0, g.useState)(n != null && n);
                const s = (0, b.useModelValues)(e.chat, ["id", "isNewsletter", "newsletterMetadata"]);
                const c = (0, b.useOptionalModelValues)(s.newsletterMetadata, ["description", "creationTime", "membershipType"]);
                const f = (0, h.default)(c, ["change:description"], () => (c == null ? undefined : c.description) || "");
                (0, E.useListener)(u.Cmd, "edit_newsletter_description", () => {
                    r(true);
                });
                const [v, C] = (0, g.useState)(f);
                const M = (0, g.useRef)(f);
                const k = (0, g.useCallback)(() => {
                    if (v !== M.current) {
                        M.current = v;
                        t.logEvent(p.CHANNEL_ADMIN_ACTION.CHANNEL_DESCRIPTION_SET);
                    }
                }, [t, v]);
                const _ = (0, g.useCallback)(function () {
                    var e = (0, l.default)(function* () {
                        let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
                        k();
                        t.logEvent(p.CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_CONFIRMATION_TAP);
                        yield y({
                            chat: s,
                            desc: e,
                            adminFunnelLogger: t,
                            setIsEditing: r
                        });
                    });
                    return function () {
                        return e.apply(this, arguments);
                    };
                }(), [s, k, t]);
                if (c == null) {
                    return null;
                }
                const w = m.fbt._("Add channel description", null, {
                    hk: "4cBfrw"
                });
                const {
                    creationTime: S
                } = c;
                const P = S != null ? i.Clock.newsletterDescriptionCreatedStr(c.creationTime) : null;
                return g.default.createElement(o.default, {
                    description: f,
                    bulletPointsEnabled: false,
                    chat: e.chat,
                    showFullDescription: false,
                    testid: "newsletter-info-drawer-description-title-input",
                    containerTestId: "newsletter-info-drawer-description-container",
                    emptyValuePlaceholder: w,
                    creationString: P,
                    canSetDescription: (0, d.iAmOwner)(c),
                    setDescriptionAction: _,
                    onChange: C,
                    onBlur: () => {
                        k();
                        r(false);
                    },
                    setIsEditing: a,
                    focusOnMount: n
                });
            };
            var l = a(n(348926));
            var r = n(328620);
            var o = a(n(711367));
            var i = n(63014);
            var u = n(780549);
            var s = n(172365);
            var c = a(n(395767));
            var d = n(751460);
            var f = n(390737);
            var p = n(269430);
            var m = n(548360);
            var g = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var n = v(t);
                if (n && n.has(e)) {
                    return n.get(e);
                }
                var a = {};
                var l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e) {
                    if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                        if (o && (o.get || o.set)) {
                            Object.defineProperty(a, r, o);
                        } else {
                            a[r] = e[r];
                        }
                    }
                }
                a.default = e;
                if (n) {
                    n.set(e, a);
                }
                return a;
            }(n(667294));
            var h = a(n(524578));
            var E = n(808446);
            var b = n(655241);

            function v (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var n = new WeakMap();
                return (v = function (e) {
                    if (e) {
                        return n;
                    } else {
                        return t;
                    }
                })(e);
            }

            function y (e) {
                var t;
                let {
                    chat: n,
                    desc: a = "",
                    adminFunnelLogger: l,
                    setIsEditing: o,
                    toastId: i = (0, r.genId)()
                } = e;
                const u = (0, s.editNewsletterMetadataAction)(n, {
                    editDescription: true
                }, {
                    description: a
                });
                const d = (t = n.newsletterMetadata) === null || t === undefined ? undefined : t.description;
                const h = new r.ActionType(m.fbt._("Changing channel description", null, {
                    hk: "3QNpiW"
                }));
                const E = u.then(() => {
                    l.logEvent(p.CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_SUCCESS);
                    const e = Boolean(d) ? m.fbt._("Channel description changed", null, {
                        hk: "ATEd7"
                    }) : m.fbt._("Channel description added", null, {
                        hk: "2z54Ca"
                    });
                    return new r.ActionType(e, {
                        actionText: (0, c.default)("Undo"),
                        actionHandler: () => y({
                            chat: n,
                            desc: d,
                            adminFunnelLogger: l,
                            toastId: i
                        })
                    });
                }).catch(() => {
                    l.logEvent(p.CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_FAILURE);
                    __LOG__(3)`channel:handleEditDescription dropped`;
                    return new r.ActionType(m.fbt._("Channel description changed failed", null, {
                        hk: "1We4xJ"
                    }), {
                        actionText: (0, c.default)("Try again"),
                        actionHandler: () => y({
                            chat: n,
                            desc: d,
                            adminFunnelLogger: l,
                            toastId: i
                        })
                    });
                }).finally(() => {
                    if (o) {
                        o(false);
                    }
                });
                f.ToastManager.open(g.default.createElement(r.ActionToast, {
                    id: i,
                    initialAction: h,
                    pendingAction: E
                }));
                return u;
            }
        },
        751046: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = undefined;
            var l = n(775593);
            var r = n(54509);
            var o = a(n(306007));
            var i = n(464659);
            var u = n(780549);
            var s = n(949359);
            var c = n(841605);
            var d = a(n(908081));
            var f = a(n(324093));
            var p = n(626194);
            var m = n(114850);
            var g = a(n(832897));
            var h = a(n(894629));
            var E = n(73225);
            var b = n(280635);
            var v = n(683023);
            var y = a(n(664531));
            var C = n(751460);
            var M = a(n(156636));
            var k = n(620973);
            var _ = n(349372);
            var w = n(617058);
            var S = n(663149);
            var P = n(150103);
            var O = a(n(634152));
            var I = n(163139);
            var T = n(220584);
            var A = n(382117);
            var N = n(676345);
            var x = n(460416);
            var D = n(744976);
            var L = n(818674);
            var R = n(344575);
            var j = n(851488);
            var B = n(548360);
            var F = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var n = Y(t);
                if (n && n.has(e)) {
                    return n.get(e);
                }
                var a = {};
                var l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e) {
                    if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                        if (o && (o.get || o.set)) {
                            Object.defineProperty(a, r, o);
                        } else {
                            a[r] = e[r];
                        }
                    }
                }
                a.default = e;
                if (n) {
                    n.set(e, a);
                }
                return a;
            }(n(667294));
            var W = a(n(156720));
            var G = a(n(524578));
            var H = a(n(637660));
            var V = n(808446);
            var U = n(582661);
            var z = n(101395);
            var q = a(n(321201));

            function Y (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var n = new WeakMap();
                return (Y = function (e) {
                    if (e) {
                        return n;
                    } else {
                        return t;
                    }
                })(e);
            }
            const K = {
                flexShrink: "oq44ahr5",
                flexGrow: "tvf2evcx",
                flexBasis: "lb5m6g5c",
                paddingBottom: "s9fl9ege"
            };

            function X (e, t) {
                var n;
                var a;
                const {
                    chat: Y,
                    newsletterMetadata: X,
                    onClose: Z,
                    onDeleteNewsletter: Q,
                    onAdminCenter: $,
                    onSettings: J,
                    onShareLink: ee,
                    onVerification: te,
                    adminFunnelLogger: ne,
                    focusDescriptionOnMount: ae
                } = e;
                const le = (0, q.default)();
                const re = (0, F.useRef)(null);
                const oe = (0, G.default)(X, ["change:suspended"], () => (X == null ? undefined : X.suspended) === true);
                const ie = (0, G.default)(X, ["change:canBeMuted"], () => Boolean(X == null ? undefined : X.canBeMuted) && !oe);
                const ue = (n = (0, z.useNewsletterMessageDeliveryUpdates)(Y)) !== null && n !== undefined ? n : [];
                const se = (0, E.isNewsletterMessageDeliveryUpdatesEnabled)() && ue.length > 0;
                const ce = (a = (0, U.useNewsletterGeosuspendedCountries)(Y)) !== null && a !== undefined ? a : [];
                const de = (0, E.isNewsletterGeosuspendAdminAlertsEnabled)() && ce.length > 0;
                (0, V.useListener)(u.Cmd, "edit_newsletter_description", () => {
                    if (re.current) {
                        re.current.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        });
                    }
                });
                const fe = (0, H.default)(() => new A.UiActionWamEvent({
                    uiActionType: D.UI_ACTION_TYPE.CHANNEL_INFO_OPEN,
                    uiActionPreloaded: true
                }));
                const pe = oe ? null : F.default.createElement(h.default, {
                    chat: Y,
                    adminFunnelLogger: ne,
                    focusOnMount: ae
                });
                const me = (0, C.iAmAdminOrOwner)(X);
                const ge = ie && !me ? F.default.createElement(i.ChatInfoDrawerSection, {
                    xstyle: N.uiMargin.top10
                }, F.default.createElement(g.default, {
                    chat: Y,
                    mute: Y.mute,
                    settings: O.default
                })) : null;
                const he = (0, F.useCallback)(() => {
                    m.ModalManager.open(F.default.createElement(k.NewsletterPhoneNumberNux, null));
                }, []);
                const Ee = (0, F.useCallback)(() => {
                    m.ModalManager.open(F.default.createElement(w.NewsletterPublicChannelPrivacyNux, {
                        chat: Y
                    }));
                }, [Y]);
                const be = me && (0, E.isNewsletterReactionSettingsEnabled)() && !oe ? F.default.createElement(o.default, {
                    testid: "newsletter-info-channel-settings",
                    title: F.default.createElement(j.WDSTextTitle, null, B.fbt._("Channel settings", null, {
                        hk: "4xHSt"
                    })),
                    icon: F.default.createElement(P.SettingsIcon, {
                        color: T.SvgColorProp.SECONDARY,
                        height: 20
                    }),
                    onClick: J,
                    side: "chevron"
                }) : null;
                const ve = oe ? null : F.default.createElement(i.ChatInfoDrawerSection, {
                    xstyle: N.uiMargin.top10
                }, F.default.createElement(_.NewsletterPrivacyRow, {
                    onClick: me ? Ee : null,
                    title: B.fbt._("Public channel", null, {
                        hk: "1a60HF"
                    }),
                    text: me ? B.fbt._("What you share is visible to anyone, but your phone number isn't. Click to learn more.", null, {
                        hk: "4auNa3"
                    }) : B.fbt._("Anyone can find this channel and see what's been shared.", null, {
                        hk: "1T1Xsg"
                    }),
                    icon: F.default.createElement(r.BusinessWebsiteIcon, {
                        color: T.SvgColorProp.SECONDARY,
                        height: 20
                    })
                }), be, !me && F.default.createElement(_.NewsletterPrivacyRow, {
                    onClick: he,
                    title: B.fbt._("Profile privacy", null, {
                        hk: "fHnmE"
                    }),
                    text: (0, s.getNewsletterProfilePrivacyText)(),
                    icon: F.default.createElement(c.DialpadIcon, {
                        color: T.SvgColorProp.SECONDARY,
                        height: 20
                    })
                }));
                const ye = F.default.createElement(y.default, {
                    xstyle: N.uiMargin.top10,
                    chat: e.chat,
                    onDeleteNewsletter: Q
                });
                const Ce = se || de ? F.default.createElement(i.ChatInfoDrawerSection, {
                    xstyle: N.uiMargin.top10
                }, F.default.createElement(o.default, {
                    testid: "newsletter-info-admin-center-row",
                    icon: F.default.createElement(R.WarningIcon, {
                        color: T.SvgColorProp.SECONDARY,
                        height: 16
                    }),
                    onClick: $,
                    title: F.default.createElement(j.WDSTextTitle, null, B.fbt._("Channel Alerts", null, {
                        hk: "1NYThG"
                    }))
                })) : null;
                const Me = (0, E.isNewsletterSubscriberListEnabled)() && me && !oe ? F.default.createElement(S.NewsletterSubscriberList, {
                    newsletter: Y,
                    adminFunnelLogger: ne,
                    onShareLink: ee,
                    onVerification: te
                }) : null;
                const ke = (0, E.isNewsletterMultiAdminEnabled)() && (0, C.iAmOwner)(X) && !oe ? F.default.createElement(M.default, {
                    newsletter: Y,
                    onVerification: te
                }) : null;
                (0, F.useEffect)(() => {
                    const e = fe.current;
                    if (e) {
                        e.markUiActionT();
                        e.commit();
                        fe.current = undefined;
                    }
                    (0, L.logUiActionShadowPrivateStatsTestEvents)();
                    if (me && (0, E.isNewsletterAdminMetadataFetchingEnabled)()) {
                        (0, b.getIntegrityUpdatesAction)(Y.id, l.JOB_PRIORITY.UI_ACTION);
                    }
                }, []);
                return F.default.createElement(d.default, {
                    ref: t,
                    key: "newsletter-info-modal",
                    theme: "striped",
                    testid: "chat-info-drawer",
                    tsNavigationData: (0, E.isNewsletterTSLEnabled)() ? {
                        surface: "channel-profile",
                        extras: {
                            threadType: x.THREAD_TYPE.CHANNEL,
                            channelWid: Y.id
                        }
                    } : undefined
                }, F.default.createElement(p.DrawerHeader, {
                    title: B.fbt._("Channel info", null, {
                        hk: "2MU3nu"
                    }),
                    type: p.DRAWER_HEADER_TYPE.SMALL,
                    rtlFixIfOnDarwin: true,
                    onCancel: () => {
                        if (Z) {
                            Z();
                        } else if (!(le == null)) {
                            le.requestDismiss();
                        }
                    },
                    testid: "newsletter-info-header"
                }), F.default.createElement(f.default, {
                    ref: re
                }, F.default.createElement("section", {
                    className: (0, W.default)(K)
                }, F.default.createElement(v.NewsletterInfoTopCard, {
                    chat: (0, I.unproxy)(Y),
                    adminFunnelLogger: ne
                }), pe, Ce, ge, ve, ke, Me, ye, undefined)));
            }
            var Z = (0, F.forwardRef)(X);
            t.default = Z;
        },
        988149: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                let {
                    chat: t,
                    adminFunnelLogger: n
                } = e;
                const a = (0, y.useOptionalModelValues)(t.newsletterMetadata, ["name", "membershipType", "isSuspendedOrTerminated"]);
                const [r, i] = (0, b.useState)(t.formattedTitle);
                const m = (0, b.useRef)(t.formattedTitle);
                const C = (0, b.useCallback)(() => {
                    if (r !== m.current) {
                        m.current = r;
                        n.logEvent(h.CHANNEL_ADMIN_ACTION.CHANNEL_NAME_SET);
                    }
                }, [n, r]);
                const _ = (0, b.useCallback)(function () {
                    var e = (0, l.default)(function* (e) {
                        C();
                        if (e !== t.formattedTitle) {
                            n.logEvent(h.CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_CONFIRMATION_TAP);
                            yield k(t, e, n);
                        }
                    });
                    return function () {
                        return e.apply(this, arguments);
                    };
                }(), [t, C, n]);
                if (a == null) {
                    return null;
                }
                if (a.isSuspendedOrTerminated === true || !(0, f.iAmOwner)(a)) {
                    return b.default.createElement(p.TextHeader, {
                        className: (0, v.default)(g.uiMargin.vert6, M),
                        level: "2",
                        theme: "large"
                    }, b.default.createElement(d.Name, {
                        chat: t,
                        breakWord: true,
                        checkmarkLarge: true
                    }));
                }
                return b.default.createElement(s.default, {
                    subject: t.formattedTitle,
                    onSave: _,
                    editRestrictionInfo: () => {
                        c.ModalManager.open(b.default.createElement(o.ConfirmPopup, {
                            onOK: () => c.ModalManager.close(),
                            okText: (0, u.default)("OK")
                        }, E.fbt._("Only admins can edit this channel's info", null, {
                            hk: "Z6ACg"
                        })));
                    },
                    editable: true,
                    emptyErrorMessage: E.fbt._("Channel name can't be empty", null, {
                        hk: "2ep6gS"
                    }),
                    onChange: i,
                    onBlur: C,
                    direction: "ltr"
                });
            };
            var l = a(n(348926));
            var r = n(328620);
            var o = n(103440);
            var i = n(172365);
            var u = a(n(395767));
            var s = a(n(559719));
            var c = n(114850);
            var d = n(21645);
            var f = n(751460);
            var p = n(180519);
            var m = n(390737);
            var g = n(676345);
            var h = n(269430);
            var E = n(548360);
            var b = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var n = C(t);
                if (n && n.has(e)) {
                    return n.get(e);
                }
                var a = {};
                var l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e) {
                    if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                        if (o && (o.get || o.set)) {
                            Object.defineProperty(a, r, o);
                        } else {
                            a[r] = e[r];
                        }
                    }
                }
                a.default = e;
                if (n) {
                    n.set(e, a);
                }
                return a;
            }(n(667294));
            var v = a(n(156720));
            var y = n(655241);

            function C (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var n = new WeakMap();
                return (C = function (e) {
                    if (e) {
                        return n;
                    } else {
                        return t;
                    }
                })(e);
            }
            const M = {
                textAlign: "qfejxiq4"
            };

            function k (e, t, n) {
                let a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : (0, r.genId)();
                const l = (0, i.editNewsletterMetadataAction)(e, {
                    editName: true
                }, {
                    name: t
                });
                const o = e.name;
                const s = new r.ActionType(E.fbt._("Renaming channel", null, {
                    hk: "3xRXjW"
                }));
                const c = l.then(() => {
                    n.logEvent(h.CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_SUCCESS);
                    return new r.ActionType(E.fbt._("Channel renamed to {name}", [E.fbt._param("name", t)], {
                        hk: "JAzRN"
                    }), {
                        actionText: (0, u.default)("Undo"),
                        actionHandler: () => k(e, o, n, a)
                    });
                }).catch(() => {
                    n.logEvent(h.CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_FAILURE);
                    __LOG__(3)`newsletter:handleEditSubject dropped`;
                    return new r.ActionType(E.fbt._("Couldn't rename channel", null, {
                        hk: "3OWiwP"
                    }), {
                        actionText: (0, u.default)("Try again"),
                        actionHandler: () => k(e, t, n, a)
                    });
                });
                m.ToastManager.open(b.default.createElement(r.ActionToast, {
                    id: a,
                    initialAction: s,
                    pendingAction: c
                }));
                return l;
            }
        },
        683023: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NewsletterInfoTopCard = function (e) {
                const {
                    adminFunnelLogger: t
                } = e;
                const n = (0, A.useOptionalModelValues)(e.chat.newsletterMetadata, ["size", "privacy", "terminated", "isSuspendedOrTerminated", "membershipType", "inviteCode"]);
                let a = (n == null ? undefined : n.privacy) === o.NewsletterPrivacy.Private ? O.fbt._("Private Channel", null, {
                    hk: "4eaPAs"
                }) : O.fbt._("Channel", null, {
                    hk: "26BY5U"
                });
                if (n == null ? undefined : n.terminated) {
                    a = O.fbt._("Deleted channel", null, {
                        hk: "3S2eSl"
                    });
                }
                const l = (n == null ? undefined : n.size) != null ? (0, i.getNewsletterFollowersText)(n.size, true) : null;
                return I.default.createElement(s.default, {
                    theme: "padding-large"
                }, I.default.createElement(c.FlexColumn, {
                    align: "center"
                }, I.default.createElement(g.default, {
                    chat: e.chat,
                    xstyle: k.uiMargin.bottom7,
                    readOnly: (n == null ? undefined : n.isSuspendedOrTerminated) === true || !(0, E.iAmOwner)(n),
                    adminFunnelLogger: t,
                    showOutline: true
                }), I.default.createElement(h.default, {
                    chat: e.chat,
                    adminFunnelLogger: t
                }), I.default.createElement("div", {
                    className: (0, T.default)(D.newsletterSecondary)
                }, I.default.createElement(u.SelectableSpan, {
                    dir: "auto",
                    selectable: true
                }, I.default.createElement(M.TextSpan, {
                    size: "16",
                    color: "secondary"
                }, a, (n == null ? undefined : n.isSuspendedOrTerminated) ? null : I.default.createElement(I.default.Fragment, null, f.default.isRTL() ? " - " : " · ", l))))), (n == null ? undefined : n.isSuspendedOrTerminated) ? null : I.default.createElement(L, {
                    chat: e.chat
                }));
            };
            var l = a(n(348926));
            var r = n(731971);
            var o = n(927531);
            var i = n(949359);
            var u = n(306703);
            var s = a(n(969358));
            var c = n(690495);
            var d = n(596533);
            var f = a(n(932325));
            var p = n(406506);
            var m = n(114850);
            var g = a(n(501624));
            var h = a(n(988149));
            var E = n(751460);
            var b = n(405473);
            var v = n(259414);
            var y = n(956113);
            var C = n(163139);
            var M = n(180519);
            var k = n(676345);
            var _ = n(106645);
            var w = a(n(625903));
            var S = n(874806);
            var P = n(476300);
            var O = n(548360);
            var I = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var n = x(t);
                if (n && n.has(e)) {
                    return n.get(e);
                }
                var a = {};
                var l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e) {
                    if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                        if (o && (o.get || o.set)) {
                            Object.defineProperty(a, r, o);
                        } else {
                            a[r] = e[r];
                        }
                    }
                }
                a.default = e;
                if (n) {
                    n.set(e, a);
                }
                return a;
            }(n(667294));
            var T = a(n(156720));
            var A = n(655241);
            var N = n(671342);

            function x (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var n = new WeakMap();
                return (x = function (e) {
                    if (e) {
                        return n;
                    } else {
                        return t;
                    }
                })(e);
            }
            const D = {
                newsletterSecondary: {
                    lineHeight: "a4ywakfo",
                    marginTop: "ma4rpf0l",
                    textAlign: "qfejxiq4"
                },
                actionIcon: {
                    color: "fsk8o631"
                },
                infoAction: {
                    flexGrow: "ggj6brxn",
                    color: "fsk8o631",
                    fontWeight: "hnx8ox4h"
                },
                spinner: {
                    stroke: "mqe5ufcr"
                },
                infoActionBtn: {
                    fontSize: "ovllcyds",
                    minWidth: "pwaghgrf"
                }
            };

            function L (e) {
                let {
                    chat: t
                } = e;
                const [n, a] = (0, I.useState)(false);
                const o = t.newsletterMetadata;
                const u = (0, I.useCallback)((0, l.default)(function* () {
                    a(true);
                    yield(0, b.subscribeToNewsletter)((0, C.unproxy)(t), {
                        eventSurface: S.CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE
                    });
                    a(false);
                }), [t]);
                const s = (0, I.useCallback)(() => {
                    m.ModalManager.open(I.default.createElement(_.UnfollowNewsletterConfirmationModal, {
                        chat: t,
                        eventSurface: S.CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE
                    }));
                }, [t]);
                const f = [];
                if ((0, E.iAmGuest)(o)) {
                    f.push({
                        Icon: v.PlusLargeIcon,
                        onClick: u,
                        testid: "newsletter-info-follow-action",
                        title: O.fbt._("Follow", null, {
                            hk: "1MHfKq"
                        }),
                        isLoading: n
                    });
                } else if ((0, E.iAmSubscriber)(o)) {
                    f.push({
                        Icon: r.CheckmarkIcon,
                        onClick: s,
                        testid: "newsletter-info-unfollow-action",
                        title: O.fbt._("Following", null, {
                            hk: "4pSME4"
                        }),
                        isLoading: false
                    });
                }
                const [g, h, M] = (0, N.useNewsletterInviteLink)({
                    chat: t,
                    linkShareLoggingNavigationParams: {
                        linkShareScreen: P.CHANNEL_LINK_SHARE_SCREEN.CHANNEL_INFO
                    }
                });
                if (g != null) {
                    f.push({
                        Icon: d.ForwardIcon,
                        onClick: M,
                        testid: "newsletter-info-invite-action",
                        title: (0, i.getForwardNewsletterLinkText)(),
                        isLoading: false
                    });
                    if (document.queryCommandSupported("copy")) {
                        f.push({
                            Icon: p.LinkIcon,
                            onClick: h,
                            testid: "newsletter-info-copy-link-action",
                            title: (0, i.getCopyLinkText)(),
                            isLoading: false
                        });
                    }
                }
                return I.default.createElement(c.FlexRow, {
                    justify: "center",
                    align: "center",
                    xstyle: [k.uiMargin.top25, k.uiMargin.bottom10]
                }, f.map((e, t) => {
                    let {
                        testid: a,
                        Icon: l,
                        onClick: r,
                        title: o,
                        isLoading: i
                    } = e;
                    return I.default.createElement(w.default, {
                        key: t,
                        "aria-label": o,
                        testid: a,
                        onClick: r,
                        xstyle: D.infoActionBtn,
                        disabled: n
                    }, I.default.createElement(c.FlexColumn, {
                        align: "center",
                        xstyle: [D.infoAction, k.uiPadding.horiz15]
                    }, i ? I.default.createElement(y.Spinner, {
                        color: D.spinner,
                        size: 32,
                        xstyle: k.uiMargin.bottom15
                    }) : I.default.createElement(l, {
                        xstyle: [D.actionIcon, k.uiMargin.bottom15],
                        width: 24,
                        height: 24
                    }), o));
                }));
            }
        },
        664531: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                let {
                    chat: t,
                    xstyle: n,
                    onDeleteNewsletter: a
                } = e;
                const r = E.default.createElement(C, {
                    chat: t
                });
                const o = E.default.createElement(y, {
                    chat: t
                });
                const i = E.default.createElement(M, {
                    chat: t,
                    onDeleteNewsletter: a
                });
                return E.default.createElement(l.ChatInfoDrawerButtonsSection, {
                    xstyle: n
                }, r, o, i);
            };
            var l = n(464659);
            var r = n(184385);
            var o = n(36045);
            var i = n(69943);
            var u = n(114850);
            var s = n(73225);
            var c = n(751460);
            var d = a(n(726619));
            var f = n(453603);
            var p = n(647890);
            var m = n(106645);
            var g = n(874806);
            var h = n(548360);
            var E = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var n = v(t);
                if (n && n.has(e)) {
                    return n.get(e);
                }
                var a = {};
                var l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e) {
                    if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                        if (o && (o.get || o.set)) {
                            Object.defineProperty(a, r, o);
                        } else {
                            a[r] = e[r];
                        }
                    }
                }
                a.default = e;
                if (n) {
                    n.set(e, a);
                }
                return a;
            }(n(667294));
            var b = n(655241);

            function v (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var n = new WeakMap();
                return (v = function (e) {
                    if (e) {
                        return n;
                    } else {
                        return t;
                    }
                })(e);
            }

            function y (e) {
                let {
                    chat: t
                } = e;
                const n = (0, b.useOptionalModelValues)(t.newsletterMetadata, ["membershipType", "suspended", "terminated", "isSuspendedOrTerminated"]);
                if ((n == null ? undefined : n.isSuspendedOrTerminated) || (0, c.iAmOwner)(n) || (0, c.iAmAdmin)(n) || !(0, s.isNewsletterReportingEnabled)()) {
                    return null;
                }
                const a = h.fbt._("Report Channel", null, {
                    hk: "3DYeSq"
                });
                return E.default.createElement(o.DrawerButtonSimple, {
                    testid: "newsletter-integrity-report-button",
                    icon: E.default.createElement(p.ThumbsDownIcon, {
                        directional: true
                    }),
                    color: "danger",
                    theme: "chat-info",
                    onClick: () => {
                        u.ModalManager.open(E.default.createElement(d.default, {
                            chat: t,
                            spamFlow: f.SpamFlow.NewsletterInfoReport
                        }));
                    }
                }, a);
            }

            function C (e) {
                let {
                    chat: t
                } = e;
                const n = (0, b.useOptionalModelValues)(t.newsletterMetadata, ["membershipType"]);
                const a = h.fbt._("Unfollow", null, {
                    hk: "3NYOtp"
                });
                const l = (0, E.useCallback)(() => {
                    u.ModalManager.open(E.default.createElement(m.UnfollowNewsletterConfirmationModal, {
                        chat: t,
                        eventSurface: g.CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE
                    }));
                }, [t]);
                if ((0, c.iAmSubscriber)(n)) {
                    return E.default.createElement(o.DrawerButtonSimple, {
                        testid: "li-unfollow-newsletter",
                        icon: E.default.createElement(i.ExitIcon, {
                            directional: true
                        }),
                        color: "danger",
                        theme: "chat-info",
                        onClick: l
                    }, a);
                } else {
                    return null;
                }
            }

            function M (e) {
                let {
                    chat: t,
                    onDeleteNewsletter: n
                } = e;
                const a = (0, b.useOptionalModelValues)(t.newsletterMetadata, ["membershipType"]);
                const l = h.fbt._("Delete channel", null, {
                    hk: "2PQtz4"
                });
                if ((0, c.iAmOwner)(a)) {
                    return E.default.createElement(o.DrawerButtonSimple, {
                        testid: "li-delete-newsletter",
                        icon: E.default.createElement(r.DeleteIcon, {
                            directional: true
                        }),
                        color: "danger",
                        theme: "chat-info",
                        onClick: n
                    }, l);
                } else {
                    return null;
                }
            }
        },
        671342: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.useNewsletterInviteLink = function (e) {
                let {
                    chat: t,
                    linkShareLoggingNavigationParams: n
                } = e;
                const a = t.formattedTitle;
                const g = (0, m.useOptionalModelValues)(t.newsletterMetadata, ["membershipType", "inviteCode"]);
                const {
                    inviteCode: h
                } = g || {};
                const E = h != null ? `https://whatsapp.com/channel/${h}` : null;
                const b = (0, p.useCallback)(() => {
                    if (E == null) {
                        return;
                    }
                    (0, o.logNewsletterLinkShare)({
                        shareDirection: c.CHANNEL_LINK_SHARE_DIRECTION.WHATSAPP,
                        linkShareScreen: n.linkShareScreen,
                        newsletter: (0, d.toNewsletterWid)(t.id),
                        linkShareScreenEntryPoint: n.linkShareScreenEntryPoint
                    });
                    const e = f.fbt._("Follow the {newsletter_name} channel on WhatsApp: {link}", [f.fbt._param("newsletter_name", a), f.fbt._param("link", E)], {
                        hk: "2JUBPH"
                    });
                    const l = f.fbt._("", null, {
                        hk: "rzrsn"
                    });
                    r.ModalManager.open(p.default.createElement(i.default, {
                        title: l.toString(),
                        text: e.toString(),
                        origin: t.id
                    }), {
                        transition: "modal-flow"
                    });
                }, [E, n, t.id, a]);
                const v = (0, p.useCallback)(() => {
                    if (E == null) {
                        return;
                    }
                    if ((0, l.copyTextToClipboard)(E)) {
                        s.ToastManager.open(p.default.createElement(u.Toast, {
                            msg: f.fbt._("Link copied to clipboard.", null, {
                                hk: "24K2ka"
                            })
                        }));
                    } else {
                        s.ToastManager.open(p.default.createElement(u.Toast, {
                            msg: f.fbt._("Couldn't copy to clipboard.", null, {
                                hk: "2JI7CO"
                            })
                        }));
                    }
                }, [E]);
                return [E, v, b];
            };
            var l = n(985714);
            var r = n(114850);
            var o = n(215441);
            var i = a(n(210002));
            var u = n(625786);
            var s = n(390737);
            var c = n(809991);
            var d = n(669050);
            var f = n(548360);
            var p = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var n = g(t);
                if (n && n.has(e)) {
                    return n.get(e);
                }
                var a = {};
                var l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e) {
                    if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                        if (o && (o.get || o.set)) {
                            Object.defineProperty(a, r, o);
                        } else {
                            a[r] = e[r];
                        }
                    }
                }
                a.default = e;
                if (n) {
                    n.set(e, a);
                }
                return a;
            }(n(667294));
            var m = n(655241);

            function g (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var n = new WeakMap();
                return (g = function (e) {
                    if (e) {
                        return n;
                    } else {
                        return t;
                    }
                })(e);
            }
        },
        215441: (e, t, n) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.logNewsletterLinkShare = function (e) {
                let {
                    shareDirection: t,
                    linkShareScreenEntryPoint: n,
                    linkShareScreen: r,
                    newsletter: o
                } = e;
                if (!(0, l.isNewsletterLinkShareLoggingEnabled)()) {
                    return;
                }
                new a.ChannelLinkShareWamEvent({
                    channelLinkShareDirection: t,
                    channelLinkShareEntryPoint: n,
                    channelLinkShareScreen: r,
                    cid: o.user
                }).commit();
            };
            var a = n(428179);
            var l = n(73225);
        },
        933655: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NewsletterEmojiSettings = function (e) {
                let {
                    currentlySelected: t,
                    onClick: n
                } = e;
                const a = f.default.createElement("div", {
                    className: (0, p.default)([m.title, c.uiMargin.bottom15])
                }, d.fbt._("Which reactions can followers send", null, {
                    hk: "4fwuWS"
                }));
                return f.default.createElement(f.default.Fragment, null, a, h.map(e => {
                    if (e.value !== l.NewsletterReactionCodesSetting.None || (0, i.isNewsletterReactionSettingForNoneEnabled)()) {
                        return f.default.createElement(u.RadioWithLabel, {
                            theme: u.RadioWithLabelThemeEnum.LARGE,
                            key: e.value,
                            name: "newsletter-reaction-codes-setting",
                            value: e.value,
                            label: e.label,
                            checked: e.value === t,
                            onChange: n,
                            xstyle: m.radioLabel
                        });
                    }
                }));
            };
            var l = n(927531);
            var r = n(70354);
            var o = a(n(225148));
            var i = n(73225);
            var u = n(695431);
            var s = n(348538);
            var c = n(676345);
            var d = n(548360);
            var f = a(n(667294));
            var p = a(n(156720));
            const m = {
                radioLabel: {
                    color: "b40j3n3c"
                },
                title: {
                    color: "i8b0kslj"
                }
            };

            function g () {
                return f.default.createElement("span", null, s.REACTIONS_DEFAULT_SENDING_TRAY.map((e, t) => {
                    const n = r.EmojiUtil.normalizeEmojiFromString(e);
                    const a = t + 1 === s.REACTIONS_DEFAULT_SENDING_TRAY.length ? c.uiMargin.end0 : c.uiMargin.end4;
                    if (n != null) {
                        return f.default.createElement("span", {
                            className: (0, p.default)(a),
                            key: `newsletter-emoji-container-${t}`
                        }, f.default.createElement(o.default, {
                            key: `newsletter-emoji-${t}`,
                            emoji: n,
                            size: "small",
                            element: "span"
                        }));
                    } else {
                        return null;
                    }
                }));
            }
            const h = [{
                label: d.fbt._("Any emoji", null, {
                    hk: "PwBNc"
                }),
                value: l.NewsletterReactionCodesSetting.All
            }, {
                label: d.fbt._("Default only ({reaction-emojis})", [d.fbt._param("reaction-emojis", f.default.createElement(g, null))], {
                    hk: "YnzVd"
                }),
                value: l.NewsletterReactionCodesSetting.Basic
            }, {
                label: d.fbt._("None", null, {
                    hk: "vlKK9"
                }),
                value: l.NewsletterReactionCodesSetting.None
            }];
        },
        660508: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = undefined;
            var l = a(n(967154));
            var r = a(n(170206));
            var o = n(949359);
            var i = n(528259);
            var u = n(306703);
            var s = n(23641);
            var c = a(n(908081));
            var d = n(36045);
            var f = n(626194);
            var p = n(690495);
            var m = n(596533);
            var g = n(220584);
            var h = n(676345);
            var E = n(476300);
            var b = n(851488);
            var v = n(548360);
            var y = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var n = _(t);
                if (n && n.has(e)) {
                    return n.get(e);
                }
                var a = {};
                var l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e) {
                    if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                        if (o && (o.get || o.set)) {
                            Object.defineProperty(a, r, o);
                        } else {
                            a[r] = e[r];
                        }
                    }
                }
                a.default = e;
                if (n) {
                    n.set(e, a);
                }
                return a;
            }(n(667294));
            var C = a(n(156720));
            var M = n(655241);
            var k = n(671342);

            function _ (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var n = new WeakMap();
                return (_ = function (e) {
                    if (e) {
                        return n;
                    } else {
                        return t;
                    }
                })(e);
            }
            const w = {
                drawer: {
                    backgroundColor: "lkjmyc96"
                },
                header: {
                    width: "gofbmt1g",
                    borderTopStartRadius: "bbr44loe",
                    borderTopEndRadius: "ooj5yc5b",
                    borderBottomEndRadius: "m8i16etx",
                    borderBottomStartRadius: "cw0ivh8j",
                    backgroundColor: "f6ipylw5",
                    overflowX: "gfz4du6o",
                    overflowY: "r7fjleex"
                },
                optionsHeader: {
                    textAlign: "ljrqcn24"
                },
                divider: {
                    width: "ln8gz9je",
                    height: "kanlod6e",
                    backgroundColor: "i86xphuw"
                },
                mouseCursor: {
                    cursor: "ajgl1lbb"
                },
                link: {
                    wordBreak: "m1c2hokz"
                },
                newsletterName: {
                    wordBreak: "cw3vfol9",
                    maxHeight: "krcjiuu9"
                }
            };
            const S = (0, y.forwardRef)((e, t) => {
                var n;
                const a = (n = e.entryPoint) !== null && n !== undefined ? n : undefined;
                if (a === undefined) {
                    __LOG__(3, undefined, undefined, true, ["newsletter-logging"])`Encountered null link share screen entry point`;
                    SEND_LOGS("Null link share screen entry point in newsletter link share logging", 1, "newsletter-logging");
                }
                const [_, S, P] = (0, k.useNewsletterInviteLink)({
                    chat: e.newsletter,
                    linkShareLoggingNavigationParams: {
                        linkShareScreen: E.CHANNEL_LINK_SHARE_SCREEN.SHARE_LINK_SCREEN,
                        linkShareScreenEntryPoint: a
                    }
                });
                const O = (0, M.useOptionalModelValues)(e.newsletter.newsletterMetadata, ["name"]);
                const I = (0, M.useModelValues)(e.newsletter.contact, ["id", "profilePicThumb"]);
                const T = [];
                if (_ != null) {
                    T.push({
                        Icon: m.ForwardIcon,
                        onClick: P,
                        testid: "newsletter-info-invite-action",
                        title: (0, o.getSendLinkViaWhatsAppText)()
                    });
                    if (document.queryCommandSupported("copy")) {
                        T.push({
                            Icon: i.CopyIcon,
                            onClick: S,
                            testid: "newsletter-info-copy-link-action",
                            title: (0, o.getCopyLinkText)()
                        });
                    }
                }
                const A = y.default.createElement("div", {
                    className: (0, C.default)([w.header, h.uiMargin.all15])
                }, y.default.createElement(r.default, {
                    image: y.default.createElement(s.DetailImage, {
                        id: I.id,
                        size: 56,
                        shape: s.DetailImageShape.Circle,
                        quality: s.DetailImageQuality.High
                    }),
                    primary: y.default.createElement(b.WDSTextTitle, {
                        xstyle: w.newsletterName
                    }, O == null ? undefined : O.name),
                    secondary: y.default.createElement(u.SelectableLink, {
                        selectable: true,
                        onClick: S,
                        xstyle: w.mouseCursor
                    }, y.default.createElement(b.WDSTextMuted, {
                        color: "link",
                        textWrap: "wrap",
                        xstyle: w.link,
                        testid: "newsletter-link-drawer-copyable-link"
                    }, _)),
                    theme: "newsletter-link-cell",
                    className: (0, C.default)(h.uiMargin.vert4, h.uiMargin.horiz2)
                }));
                const N = y.default.createElement(b.WDSTextSectionTitle, {
                    xstyle: w.optionsHeader,
                    marginEnd: 32,
                    marginStart: 32,
                    marginTop: 16,
                    marginBottom: 20,
                    color: "primary"
                }, (0, o.getChannelLinkInformationText)());
                const x = y.default.createElement(p.FlexRow, {
                    xstyle: [h.uiMargin.vert4, h.uiMargin.horiz30]
                }, y.default.createElement("div", {
                    className: (0, C.default)(w.divider)
                }));
                const D = e.onBack ? {
                    onBack: e.onBack
                } : {
                    onCancel: e.onClose
                };
                return y.default.createElement(c.default, {
                    ref: t,
                    theme: "striped",
                    testid: "newsletter-link-drawer",
                    xstyle: w.drawer
                }, y.default.createElement(f.DrawerHeader, (0, l.default)({
                    title: v.fbt._("Channel Link", null, {
                        hk: "TovMA"
                    }),
                    type: f.DRAWER_HEADER_TYPE.SMALL
                }, D, {
                    rtlFixIfOnDarwin: true,
                    testid: "newsletter-link-drawer-header"
                })), A, N, x, T.map((e, t) => {
                    let {
                        testid: n,
                        Icon: a,
                        onClick: l,
                        title: r
                    } = e;
                    return y.default.createElement(d.DrawerButtonSimple, {
                        key: `${n}-${t}`,
                        testid: n,
                        icon: y.default.createElement(a, {
                            width: 24,
                            height: 24,
                            color: g.SvgColorProp.SECONDARY
                        }),
                        divider: false,
                        onClick: l
                    }, r);
                }));
            });
            S.displayName = "NewsletterLinkDrawer";
            var P = S;
            t.default = P;
        },
        156636: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                let {
                    newsletter: t,
                    onVerification: n
                } = e;
                const a = (0, v.useNewsletterPendingInvites)(t);
                const C = a.length;
                const M = (0, b.default)(() => new i.default());
                const k = (0, b.default)(() => new m.default([], e => e.id.toString()));
                const _ = a.slice(0, f.NEWSLETTER_INFO_SUBSCRIBER_DISPLAY_LIMIT).map(e => ({
                    itemKey: `pending-${e.id.toJid()}`,
                    contact: e,
                    height: 68,
                    role: null,
                    isPendingAdmin: true
                }));
                const [w, S] = (0, y.useNewsletterSubscribersContextMenu)({
                    isFullModal: false,
                    onVerification: n,
                    followerInformation: new Map(_.map(e => {
                        var t;
                        return [(t = e.contact) === null || t === undefined ? undefined : t.id, {
                            newsletterRole: null,
                            isPendingInvite: true
                        }];
                    })),
                    newsletterMetadata: t.newsletterMetadata
                });
                if (C === 0) {
                    return null;
                }
                const P = C > f.NEWSLETTER_INFO_SUBSCRIBER_DISPLAY_LIMIT ? E.default.createElement(r.default, {
                    numMore: C,
                    onClick: () => {
                        s.ModalManager.open(E.default.createElement(p.NewsletterSubscriberListModal, {
                            newsletter: t,
                            initialStep: p.FollowersFlowStep.PendingInvites,
                            onVerification: n
                        }), {
                            transition: "modal-flow"
                        });
                    },
                    fromNewsletter: true,
                    viewAll: true
                }) : null;
                return E.default.createElement(E.default.Fragment, null, E.default.createElement(l.ChatInfoDrawerListSection, {
                    testid: "newsletter-info-pending-invites-list",
                    title: (0, o.getAdminInvitesTitleText)(C),
                    xstyle: g.uiMargin.top10
                }, E.default.createElement(c.NavigableFlatList, {
                    ariaLabel: h.fbt._("Pending Invites List: {pending-invites-list-size}", [h.fbt._param("pending-invites-list-size", u.default.n(C))], {
                        hk: "fq0dT"
                    }),
                    flatListController: M.current,
                    listData: _,
                    onRenderItem: e => E.default.createElement(d.NewsletterSubscriber, {
                        subscriberData: e,
                        handleContactClick: () => {},
                        handleContactContextMenu: S,
                        active: k.current
                    }),
                    selection: k.current,
                    rotateList: true
                }), P), w);
            };
            var l = n(464659);
            var r = a(n(831584));
            var o = n(949359);
            var i = a(n(570834));
            var u = a(n(932325));
            var s = n(114850);
            var c = n(164406);
            var d = n(663149);
            var f = n(396802);
            var p = n(661991);
            var m = a(n(237889));
            var g = n(676345);
            var h = n(548360);
            var E = a(n(667294));
            var b = a(n(637660));
            var v = n(542534);
            var y = n(12579);
        },
        245272: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = undefined;
            var l = a(n(967154));
            var r = a(n(348926));
            var o = n(780549);
            var i = n(927531);
            var u = a(n(908081));
            var s = a(n(324093));
            var c = n(626194);
            var d = n(172365);
            var f = n(933655);
            var p = n(676345);
            var m = n(548360);
            var g = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var n = v(t);
                if (n && n.has(e)) {
                    return n.get(e);
                }
                var a = {};
                var l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e) {
                    if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                        if (o && (o.get || o.set)) {
                            Object.defineProperty(a, r, o);
                        } else {
                            a[r] = e[r];
                        }
                    }
                }
                a.default = e;
                if (n) {
                    n.set(e, a);
                }
                return a;
            }(n(667294));
            var h = a(n(156720));
            var E = n(808446);
            var b = n(655241);

            function v (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var n = new WeakMap();
                return (v = function (e) {
                    if (e) {
                        return n;
                    } else {
                        return t;
                    }
                })(e);
            }

            function y () {
                return (y = (0, r.default)(function* (e, t) {
                    try {
                        return yield(0, d.editNewsletterMetadataAction)(e, {
                            editReactionCodesSetting: true
                        }, {
                            reactionCodesSetting: t
                        });
                    } catch (t) {
                        __LOG__(4, undefined, new Error(), true, ["reactions", "newsletter"])`[handleReactionCodesSettingChange][editNewsletterMetadataAction] Error editing reaction settings for newsletter ${e.id}`;
                        SEND_LOGS("newsletter-edit-reaction-settings-failed", 1, "reactions", "newsletter");
                    }
                })).apply(this, arguments);
            }
            const C = {
                body: {
                    flexShrink: "oq44ahr5",
                    flexGrow: "ggj6brxn",
                    flexBasis: "lb5m6g5c",
                    paddingBottom: "s9fl9ege"
                },
                drawer: {
                    backgroundColor: "lkjmyc96"
                }
            };
            const M = (0, g.forwardRef)((e, t) => {
                var n;
                var a;
                const d = (0, g.useCallback)(function () {
                    var t = (0, r.default)(function* (t) {
                        var n;
                        const a = (n = i.NewsletterReactionCodesSetting.cast(Number(t.target.value))) !== null && n !== undefined ? n : i.NewsletterReactionCodesSetting.Basic;
                        e.adminFunnelLogger.logReactionSetting(a);
                        yield function () {
                            return y.apply(this, arguments);
                        }(e.newsletter, a);
                    });
                    return function () {
                        return t.apply(this, arguments);
                    };
                }(), [e.newsletter, e.adminFunnelLogger]);
                const v = (0, b.useOptionalModelValues)((n = e.newsletter) === null || n === undefined ? undefined : n.newsletterMetadata, ["reactionCodesSetting"]);
                (0, E.useListener)(o.Cmd, "edit_newsletter_description", () => e.onBack());
                const M = e.isFirstLevel === true ? {
                    onCancel: e.onBack
                } : {
                    onBack: e.onBack
                };
                return g.default.createElement(u.default, {
                    ref: t,
                    theme: "striped",
                    testid: "newsletter-settings-drawer",
                    xstyle: C.drawer
                }, g.default.createElement(c.DrawerHeader, (0, l.default)({
                    title: m.fbt._("Channel settings", null, {
                        hk: "2bWwDX"
                    }),
                    type: c.DRAWER_HEADER_TYPE.SMALL
                }, M, {
                    rtlFixIfOnDarwin: true,
                    testid: "newsletter-settings-drawer-header"
                })), g.default.createElement(s.default, null, g.default.createElement("section", {
                    className: (0, h.default)([C.body, p.uiMargin.horiz30, p.uiMargin.vert30])
                }, g.default.createElement(f.NewsletterEmojiSettings, {
                    onClick: d,
                    currentlySelected: (a = v == null ? undefined : v.reactionCodesSetting) !== null && a !== undefined ? a : i.NewsletterReactionCodesSetting.Basic
                }))));
            });
            M.displayName = "NewsletterSettingsDrawer";
            var k = M;
            t.default = k;
        },
        355793: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ExitedGroupQPSurface = function (e) {
                let {
                    group: t
                } = e;
                const n = (0, s.usePrivacyTipQuickPromotion)({
                    surfaceId: l.QP_SURFACE_ID_EXITED_GROUP,
                    group: t
                });
                if (n == null || !(0, i.groupsPrivacyTipsEnabled)()) {
                    return;
                }
                const {
                    promotion: a,
                    sanitizedText: c,
                    image: d,
                    dismiss: f,
                    primaryActionClick: p,
                    settingStep: m
                } = n;
                const g = a.promotion.data.primaryAction;
                return u.default.createElement(r.FlexRow, {
                    paddingTop: 8
                }, u.default.createElement(o.PrivacyTipBanner, {
                    text: c,
                    image: d,
                    actionText: g == null ? undefined : g.text,
                    onDismiss: f,
                    onAction: p,
                    settingStep: m
                }));
            };
            var l = n(312158);
            var r = n(690495);
            var o = n(959989);
            var i = n(753284);
            var u = a(n(667294));
            var s = n(179203);
        },
        371125: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const {
                    stickerPackId: t,
                    onStickerPackView: n,
                    stickerPackViewDelay: a,
                    sticker: g,
                    showViewPackButton: h
                } = e;
                const E = function (e) {
                    (0, p.useEffect)(() => {
                        if (e) {
                            d.StickerPackCollectionMd.fetchStickerPack(e);
                        }
                    }, [e]);
                    return (0, m.default)(d.StickerPackCollectionMd, "add remove reset", () => e != null ? d.StickerPackCollectionMd.get(e) : null);
                }(t);
                let b;
                if (t) {
                    const e = e => {
                        e.stopPropagation();
                        if (n) {
                            n();
                        }
                        if (a != null) {
                            self.setTimeout(() => r.Cmd.openStickerPack(t), a + 150);
                        } else {
                            r.Cmd.openStickerPack(t);
                        }
                    };
                    if ((0, s.isFavoriteStickersEnabled)()) {
                        if (g != null) {
                            b = p.default.createElement(u.FlexRow, null, h && p.default.createElement(l.default, {
                                onClick: e,
                                type: "secondary"
                            }, f.fbt._("View Pack", null, {
                                hk: "tAlU3"
                            })), i.FavoriteStickerCollection.get(g.filehash) ? p.default.createElement(l.default, {
                                onClick: () => (0, o.removeStickerFromFavorites)(g),
                                type: "secondary"
                            }, f.fbt._("Remove From Favorites", null, {
                                hk: "3YoUkP"
                            })) : p.default.createElement(l.default, {
                                onClick: () => (0, o.addStickerToFavorites)(g),
                                type: "secondary"
                            }, f.fbt._("Add to Favorites", null, {
                                hk: "3x4EBo"
                            })));
                        }
                    } else {
                        b = h ? p.default.createElement(l.default, {
                            onClick: e,
                            type: "secondary"
                        }, f.fbt._("View Pack", null, {
                            hk: "tAlU3"
                        })) : null;
                    }
                }
                return p.default.createElement(p.default.Fragment, null, p.default.createElement(c.StickerDetailsStickerPackInfo, {
                    name: E == null ? undefined : E.name,
                    publisher: E == null ? undefined : E.publisher,
                    theme: c.Theme.MediaViewer
                }), b);
            };
            var l = a(n(692629));
            var r = n(780549);
            var o = n(225446);
            var i = n(788788);
            var u = n(690495);
            var s = n(97858);
            var c = n(438543);
            var d = n(425192);
            var f = n(548360);
            var p = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var n = g(t);
                if (n && n.has(e)) {
                    return n.get(e);
                }
                var a = {};
                var l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e) {
                    if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                        if (o && (o.get || o.set)) {
                            Object.defineProperty(a, r, o);
                        } else {
                            a[r] = e[r];
                        }
                    }
                }
                a.default = e;
                if (n) {
                    n.set(e, a);
                }
                return a;
            }(n(667294));
            var m = a(n(524578));

            function g (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var n = new WeakMap();
                return (g = function (e) {
                    if (e) {
                        return n;
                    } else {
                        return t;
                    }
                })(e);
            }
        },
        565527: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = undefined;
            var l = a(n(348926));
            var r = n(637842);
            var o = n(778945);
            var i = n(87630);
            var u = a(n(908081));
            var s = a(n(324093));
            var c = n(626194);
            var d = n(548360);
            var f = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var n = p(t);
                if (n && n.has(e)) {
                    return n.get(e);
                }
                var a = {};
                var l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e) {
                    if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                        if (o && (o.get || o.set)) {
                            Object.defineProperty(a, r, o);
                        } else {
                            a[r] = e[r];
                        }
                    }
                }
                a.default = e;
                if (n) {
                    n.set(e, a);
                }
                return a;
            }(n(667294));

            function p (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var n = new WeakMap();
                return (p = function (e) {
                    if (e) {
                        return n;
                    } else {
                        return t;
                    }
                })(e);
            }
            const m = (e, t) => {
                const {
                    contactId: n
                } = e;
                const [a, p] = (0, f.useState)(undefined);
                const [m, g] = (0, f.useState)(true);
                (0, f.useEffect)(() => {
                    (function () {
                        var e = (0, l.default)(function* () {
                            const e = yield o.BusinessProfileCollection.update(n, {
                                getMerchantCompliance: true
                            });
                            const t = (Array.isArray(e) ? e[0] : e).serialize();
                            if (t) {
                                p(t.legalEntityDetails || undefined);
                                g(false);
                            } else {
                                __LOG__(3)`compliance: cannot fetch business details (${n.toString()})`;
                            }
                        });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })()();
                }, []);
                const {
                    entityName: h,
                    customerCareDetails: E,
                    grievanceOfficerDetails: b
                } = a != null ? a : {};
                const v = (0, r.getEntityTypeText)(a);
                return f.default.createElement(u.default, {
                    ref: t,
                    key: "merchant-details-modal",
                    theme: "striped"
                }, f.default.createElement(c.DrawerHeader, {
                    title: d.fbt._("Business details", null, {
                        hk: "m9xzp"
                    }),
                    type: c.DRAWER_HEADER_TYPE.SMALL,
                    onCancel: e.onClose
                }), f.default.createElement(s.default, {
                    theme: m ? "center-content" : undefined
                }, m ? f.default.createElement(i.ComplianceInfoLoading, null) : f.default.createElement(f.default.Fragment, null, f.default.createElement(i.ComplianceInfoGroup, null, f.default.createElement(i.ComplianceInfoPrimitiveField, {
                    value: h,
                    label: d.fbt._("Legal Name of Business", null, {
                        hk: "2s9jD"
                    })
                }), f.default.createElement(i.ComplianceInfoPrimitiveField, {
                    value: v,
                    label: d.fbt._("Business Type", null, {
                        hk: "48J73B"
                    })
                })), f.default.createElement(i.ComplianceInfoGroup, {
                    title: d.fbt._("Customer Care Information", null, {
                        hk: "qlYos"
                    })
                }, f.default.createElement(i.ComplianceInfoPrimitiveField, {
                    value: E == null ? undefined : E.mobileNumber,
                    label: d.fbt._("Mobile Phone Number", null, {
                        hk: "PMTTg"
                    }),
                    forceLTR: true
                }), f.default.createElement(i.ComplianceInfoPrimitiveField, {
                    value: E == null ? undefined : E.landlineNumber,
                    label: d.fbt._("Landline Phone Number", null, {
                        hk: "tXYaf"
                    }),
                    forceLTR: true
                }), f.default.createElement(i.ComplianceInfoPrimitiveField, {
                    value: E == null ? undefined : E.email,
                    label: d.fbt._("Email Address", null, {
                        hk: "2jYxR1"
                    })
                })), f.default.createElement(i.ComplianceInfoGroup, {
                    title: d.fbt._("Grievance Officer Information", null, {
                        hk: "3emd7I"
                    })
                }, f.default.createElement(i.ComplianceInfoPrimitiveField, {
                    value: b == null ? undefined : b.name,
                    label: d.fbt._("Name", null, {
                        hk: "2vEs6r"
                    })
                }), f.default.createElement(i.ComplianceInfoPrimitiveField, {
                    value: b == null ? undefined : b.mobileNumber,
                    label: d.fbt._("Mobile Phone Number", null, {
                        hk: "3kk5I"
                    }),
                    forceLTR: true
                }), f.default.createElement(i.ComplianceInfoPrimitiveField, {
                    value: b == null ? undefined : b.landlineNumber,
                    label: d.fbt._("Landline Phone Number", null, {
                        hk: "4GBzF0"
                    })
                }), f.default.createElement(i.ComplianceInfoPrimitiveField, {
                    value: b == null ? undefined : b.email,
                    label: d.fbt._("Email Address", null, {
                        hk: "3SvbLl"
                    })
                })))));
            };
            var g = (0, f.forwardRef)(m);
            t.default = g;
        },
        517729: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                let {
                    contact: t
                } = e;
                const [n, a] = (0, _.useContactValues)(t.id, [s.getVerifiedLevel, s.getVerifiedName]);
                const w = (0, f.getBusinessFaqUrl)();
                const P = !u.Conn.isSMB;
                (0, M.useEffect)(() => {
                    if (P) {
                        new l.BannerEventWamEvent({
                            bannerType: y.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                            bannerOperation: v.BANNER_OPERATIONS.SHOWN
                        }).commit();
                    }
                }, [P]);
                const O = n !== r.VERIFIED_LEVEL.HIGH || (0, m.isBlueEducationEnabled)() ? C.fbt._("This business uses WhatsApp Business, which allows them to add their opening hours, address, website and catalog of products or services.", null, {
                    hk: "82W5f"
                }) : C.fbt._("WhatsApp has verified that this is the official business account of \"{businessName}\". This business uses WhatsApp Business, which allows them to add their opening hours, address, website and catalog of products or services.", [C.fbt._param("businessName", a)], {
                    hk: "43yvU"
                });
                return M.default.createElement(i.ConfirmPopup, {
                    title: C.fbt._("About WhatsApp Business", null, {
                        hk: "3XF5gx"
                    }),
                    onOK: () => {
                        g.ModalManager.close();
                        if (P) {
                            new l.BannerEventWamEvent({
                                bannerType: y.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                                bannerOperation: v.BANNER_OPERATIONS.DISMISS
                            }).commit();
                        }
                    },
                    okText: (0, p.default)("OK")
                }, M.default.createElement(c.EmojiText, {
                    text: O
                }), " ", M.default.createElement(o.default, {
                    href: w,
                    onClick: e => {
                        e.preventDefault();
                        g.ModalManager.close();
                        self.setTimeout(() => (0, d.openExternalLink)(w), 10);
                    }
                }, C.fbt._("Learn more", null, {
                    hk: "1rcCLt"
                })), P && M.default.createElement("div", {
                    className: (0, k.default)(b.uiMargin.top16)
                }, M.default.createElement(E.TextSpan, {
                    theme: "muted",
                    size: "13"
                }, C.fbt._("If you're a business, the free WhatsApp Business app can help.", null, {
                    hk: "14W7ur"
                }), M.default.createElement("br", null), M.default.createElement(o.default, {
                    onClick: e => {
                        e.preventDefault();
                        g.ModalManager.close();
                        new l.BannerEventWamEvent({
                            bannerType: y.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                            bannerOperation: v.BANNER_OPERATIONS.CLICK
                        }).commit();
                        self.setTimeout(() => g.ModalManager.open(M.default.createElement(h.SmbAppUpsellModal, null)), 200);
                    },
                    className: (0, k.default)(S)
                }, C.fbt._("Learn about getting the app", null, {
                    hk: "3ncguo"
                })))));
            };
            var l = n(240045);
            var r = n(817649);
            var o = a(n(196554));
            var i = n(103440);
            var u = n(445729);
            var s = n(660666);
            var c = n(305521);
            var d = n(753233);
            var f = n(258105);
            var p = a(n(395767));
            var m = n(97858);
            var g = n(114850);
            var h = n(945270);
            var E = n(180519);
            var b = n(676345);
            var v = n(493885);
            var y = n(403602);
            var C = n(548360);
            var M = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var n = w(t);
                if (n && n.has(e)) {
                    return n.get(e);
                }
                var a = {};
                var l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e) {
                    if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                        if (o && (o.get || o.set)) {
                            Object.defineProperty(a, r, o);
                        } else {
                            a[r] = e[r];
                        }
                    }
                }
                a.default = e;
                if (n) {
                    n.set(e, a);
                }
                return a;
            }(n(667294));
            var k = a(n(156720));
            var _ = n(379811);

            function w (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var n = new WeakMap();
                return (w = function (e) {
                    if (e) {
                        return n;
                    } else {
                        return t;
                    }
                })(e);
            }
            const S = {
                color: "jq3rn4u7"
            };
        },
        945270: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SmbAppUpsellModal = function () {
                return g.default.createElement(o.ConfirmPopup, {
                    title: m.fbt._("WhatsApp Business app", null, {
                        hk: "4BfvOl"
                    }),
                    onOK: () => {
                        new l.BannerEventWamEvent({
                            bannerType: p.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                            bannerOperation: f.BANNER_OPERATIONS.DISMISS
                        }).commit();
                        c.ModalManager.close();
                    },
                    okText: (0, s.default)("Close")
                }, g.default.createElement(d.default, null), g.default.createElement("p", null, g.default.createElement(i.EmojiText, {
                    text: m.fbt._("If you're a business, you can benefit from switching to the free WhatsApp Business app. It has tools to connect with customers and manage messages.", null, {
                        hk: "2SAIXH"
                    })
                })), g.default.createElement("br", null), g.default.createElement("p", null, g.default.createElement(i.EmojiText, {
                    text: m.fbt._("Scan this code to get the WhatsApp Business App. Or, you can install it from the App Store or Google Play Store.", null, {
                        hk: "2840mD"
                    })
                }), " ", g.default.createElement(r.default, {
                    href: h,
                    onClick: e => {
                        e.preventDefault();
                        c.ModalManager.close();
                        self.setTimeout(() => (0, u.openExternalLink)(h), 10);
                    }
                }, m.fbt._("Learn more", null, {
                    hk: "1rcCLt"
                }))));
            };
            t.WHATSAPP_BUSINESS_URL = undefined;
            var l = n(240045);
            var r = a(n(196554));
            var o = n(103440);
            var i = n(305521);
            var u = n(753233);
            var s = a(n(395767));
            var c = n(114850);
            var d = a(n(345257));
            var f = n(493885);
            var p = n(403602);
            var m = n(548360);
            var g = a(n(667294));
            const h = "https://www.whatsapp.com/business";
            t.WHATSAPP_BUSINESS_URL = h;
        },
        345257: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function () {
                const {
                    theme: e
                } = (0, s.useContext)(i.ThemeContext);
                return s.default.createElement(l.FlexRow, {
                    align: "center",
                    justify: "center",
                    xstyle: u.uiMargin.vert15
                }, s.default.createElement(o.WAWebQRCode, {
                    data: "https://www.whatsapp.com/business/download",
                    colorDark: "#122e31",
                    size: r.QR_EDGE / 2
                }, t => s.default.createElement("div", {
                    ref: t,
                    className: (0, c.default)(e === "dark" && f.codeDarkMode, f.code, u.uiPadding.all12)
                }, s.default.createElement(p, {
                    theme: e
                }))));
            };
            var l = n(690495);
            var r = n(914368);
            var o = n(647781);
            var i = n(667738);
            var u = n(676345);
            var s = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var n = d(t);
                if (n && n.has(e)) {
                    return n.get(e);
                }
                var a = {};
                var l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e) {
                    if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                        if (o && (o.get || o.set)) {
                            Object.defineProperty(a, r, o);
                        } else {
                            a[r] = e[r];
                        }
                    }
                }
                a.default = e;
                if (n) {
                    n.set(e, a);
                }
                return a;
            }(n(667294));
            var c = a(n(156720));

            function d (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var n = new WeakMap();
                return (d = function (e) {
                    if (e) {
                        return n;
                    } else {
                        return t;
                    }
                })(e);
            }
            const f = {
                code: {
                    position: "g0rxnol2"
                },
                codeDarkMode: {
                    backgroundColor: "rfib67n1",
                    borderTopStartRadius: "boajuire",
                    borderTopEndRadius: "o93wvyfv",
                    borderBottomEndRadius: "i5w8n1e6",
                    borderBottomStartRadius: "cnpay6qi"
                },
                codeLogo: {
                    position: "lhggkp7q",
                    top: "myeiuhv9",
                    start: "m7kgcvyw",
                    zIndex: "b9fczbqn",
                    width: "tddarlmj",
                    height: "jbxl65f1",
                    color: "ep2u7qgo",
                    userSelect: "rkxvyd19",
                    transform: "qk2y3tb3"
                }
            };

            function p () {
                return s.default.createElement("div", {
                    className: (0, c.default)(f.codeLogo)
                }, s.default.createElement("svg", {
                    width: "100%",
                    viewBox: "0 0 64 64",
                    xmlns: "http://www.w3.org/2000/svg"
                }, s.default.createElement("path", {
                    fill: "#FFF",
                    d: "M6.525 43.936a29.596 29.596 0 0 1-3.039-13.075C3.494 14.568 16.755 1.313 33.05 1.313c7.904.004 15.328 3.082 20.91 8.666 5.581 5.586 8.653 13.01 8.65 20.907-.007 16.294-13.266 29.549-29.558 29.549a29.648 29.648 0 0 1-12.508-2.771L1.391 62.687l5.134-18.751z"
                }), s.default.createElement("g", {
                    transform: "translate(8 6)"
                }, s.default.createElement("path", {
                    d: "M42.6776 42.6779C37.9558 47.3997 31.6777 50.0001 24.9999 50.0001C21.0047 50.0001 17.0541 49.0389 13.5244 47.2141L0.601068 49.3339L2.72832 36.3645C0.941278 32.8647 0 28.9525 0 25.0001C0 18.3223 2.60042 12.0443 7.32229 7.32237C12.0442 2.6005 18.3221 0 24.9999 0C31.6777 0 37.9558 2.6005 42.6776 7.32237C47.3995 12.0443 50 18.3223 50 25.0001C50 31.678 47.3995 37.9558 42.6776 42.6779ZM24.9999 4.33778C13.6067 4.33778 4.33772 13.607 4.33772 25.0001C4.33772 28.4792 5.21935 31.9192 6.8868 34.9487L7.24853 35.6054L5.85915 44.0756L14.2959 42.6918L14.9565 43.0601C18.0107 44.7624 21.4837 45.6622 24.9999 45.6622C36.3932 45.6622 45.6622 36.3933 45.6622 25.0001C45.6622 13.607 36.3932 4.33778 24.9999 4.33778ZM31.1133 24.3614C32.4522 24.9804 34.1536 26.3725 34.1208 29.3117C34.0749 33.4266 31.2191 35.6542 27.2744 35.6542H19.4594H18.3042C17.5079 35.6542 16.8645 35.0053 16.8713 34.2092L17.0344 15.0573C17.041 14.2714 17.6794 13.6377 18.4652 13.6366L27.1493 13.6256C31.4651 13.6256 33.9598 16.039 33.9177 19.8134C33.8903 22.2579 32.2484 23.8355 31.1133 24.3614ZM26.766 17.4622H21.3643L21.3076 22.5361H26.7093C28.5347 22.5361 29.5672 21.5152 29.584 19.9992C29.6009 18.4831 28.5915 17.4622 26.766 17.4622ZM26.9444 26.4035H21.2643L21.2038 31.8178H26.884C28.8333 31.8178 29.7752 30.5802 29.792 29.0952C29.8085 27.6101 28.8939 26.4035 26.9444 26.4035Z",
                    fill: "#123033"
                }))));
            }
        },
        314810: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const {
                    active: t,
                    contact: n,
                    onClick: a,
                    contextMenu: l,
                    isPendingParticipant: u = false,
                    contextEnabled: s,
                    onContext: c,
                    theme: d,
                    showStatusRingAroundProfilePhoto: f,
                    participantCollection: p,
                    elevatedPushNamesEnabled: m
                } = e;
                const g = (0, o.useModelValues)(e.participant, ["isAdmin"]);
                return r.default.createElement(i, {
                    active: t,
                    contact: n,
                    admin: g.isAdmin,
                    onClick: u ? c : a,
                    theme: d || "drawer-list",
                    contextEnabled: () => s != null && s(n),
                    contextMenu: l,
                    onContext: e => c == null ? undefined : c(e, n),
                    isPendingParticipant: u,
                    showNotifyName: true,
                    elevatedPushNamesEnabled: m,
                    waitIdle: true,
                    showStatusRingAroundProfilePhoto: f,
                    participantCollection: p
                });
            };
            var l = n(822652);
            var r = a(n(667294));
            var o = n(655241);
            const i = (0, l.ContactFactory)();
        },
        321574: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const {
                    docMsgs: t,
                    chat: n,
                    isFilterEnabled: a = false,
                    filterText: h
                } = e;
                const E = (0, r.default)(e, g);
                const b = (0, m.default)();
                const v = (0, f.default)(() => new s.default(e => {
                    const t = [];
                    const n = (0, o.getText)(e);
                    if (n != null) {
                        t.push(n);
                    }
                    const a = e.mediaData.filename;
                    t.push(a);
                    return t.join(" ");
                }));
                (0, p.useListener)(t, "add", e => {
                    if (a) {
                        v.current.cacheMessageTokens(e);
                    }
                });
                (0, p.useListener)(t, "remove", e => {
                    if (a) {
                        v.current.removeMessageTokensFromCache(e);
                    }
                });
                (0, p.useListener)(t, "reset", () => {
                    if (a) {
                        v.current.clearTokensCache();
                    }
                });
                (0, d.useEffect)(() => {
                    if (a) {
                        t.forEach(e => {
                            v.current.cacheMessageTokens(e);
                        });
                    }
                }, [t, v, a]);
                const y = a ? (e, t) => v.current.filter(e, h, t) : undefined;
                return d.default.createElement(d.default.Fragment, null, d.default.createElement(u.default, (0, l.default)({
                    testid: "doc-gallery",
                    msgsCollection: t,
                    msgsCollectionUpdateEvents: ["add", "remove", "reset", "query_doc_before"],
                    queryCollection: e => {
                        if (t.hasDocBefore) {
                            b(() => {
                                t.queryDocs(n, e);
                            });
                        }
                    },
                    getHasBefore: () => t.hasDocBefore,
                    getQueryBefore: () => t.queryDocBefore,
                    emptyText: c.fbt._("No Docs", null, {
                        hk: "1MvZZl"
                    }),
                    chat: n,
                    filterMessages: y
                }, E)), d.default.createElement(i.HistorySyncGalleryPlaceholder, {
                    chat: n
                }));
            };
            var l = a(n(967154));
            var r = a(n(506479));
            var o = n(163755);
            var i = n(217714);
            var u = a(n(101760));
            var s = a(n(443461));
            var c = n(548360);
            var d = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var n = h(t);
                if (n && n.has(e)) {
                    return n.get(e);
                }
                var a = {};
                var l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e) {
                    if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                        if (o && (o.get || o.set)) {
                            Object.defineProperty(a, r, o);
                        } else {
                            a[r] = e[r];
                        }
                    }
                }
                a.default = e;
                if (n) {
                    n.set(e, a);
                }
                return a;
            }(n(667294));
            var f = a(n(637660));
            var p = n(808446);
            var m = a(n(940630));
            const g = ["docMsgs", "chat", "isFilterEnabled", "filterText"];

            function h (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var n = new WeakMap();
                return (h = function (e) {
                    if (e) {
                        return n;
                    } else {
                        return t;
                    }
                })(e);
            }
        },
        671597: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const {
                    linkMsgs: t,
                    chat: n,
                    selectedMessages: a,
                    selectable: C,
                    onMessageSelect: M,
                    isFilterEnabled: k = false,
                    filterText: _
                } = e;
                const w = (0, v.default)();
                const S = (0, E.default)(() => new p.default(e => (0, i.getText)(e)));
                (0, b.useListener)(t, "add", e => {
                    if (k) {
                        S.current.cacheMessageTokens(e);
                    }
                });
                (0, b.useListener)(t, "remove", e => {
                    S.current.removeMessageTokensFromCache(e);
                });
                (0, b.useListener)(t, "reset", () => {
                    if (k) {
                        S.current.clearTokensCache();
                    }
                });
                (0, h.useEffect)(() => {
                    if (k) {
                        t.forEach(e => {
                            S.current.cacheMessageTokens(e);
                        });
                    }
                }, [t, S, k]);
                (0, b.useListener)(n.msgs, "add bulk_add", e => {
                    if (!e) {
                        return;
                    }
                    const n = [];
                    const a = Array.isArray(e) ? e : [e];
                    Promise.all(a.map(e => {
                        if ((0, f.getLinksFromMsg)(e).length) {
                            n.push(e);
                        }
                        return Promise.resolve();
                    })).then(() => {
                        if (n.length) {
                            t.add(n);
                        }
                    });
                });
                const P = k ? (e, t) => S.current.filter(e, _, t) : undefined;
                const {
                    linkMsgs: O,
                    chat: I,
                    filterText: T,
                    isFilterEnabled: A
                } = e;
                const N = (0, r.default)(e, y);
                return h.default.createElement(h.default.Fragment, null, h.default.createElement(c.default, (0, l.default)({
                    testid: "link-gallery",
                    msgsCollection: t,
                    msgsCollectionUpdateEvents: ["add", "remove", "reset", "query_doc_before"],
                    queryCollection: e => {
                        if (t.hasLinkBefore) {
                            w(() => {
                                t.queryLinks(n, e);
                            });
                        }
                    },
                    getHasBefore: () => t.hasLinkBefore,
                    getQueryBefore: () => t.queryLinkBefore,
                    messageElements: (e, t) => ((e, t, n, a, l) => {
                        const r = [];
                        e.forEach(e => {
                            const i = !(0, d.getIsSentByMe)(e) && (0, d.getIsGroupMsg)(e);
                            let u = null;
                            if ((0, d.getLinkPreview)(e)) {
                                u = h.default.createElement(m.default, {
                                    testid: "link-gallery-msg",
                                    key: e.id.toString(),
                                    msg: e,
                                    selectable: n,
                                    selectedMessages: l,
                                    onMessageSelect: a,
                                    displayType: o.DISPLAY_TYPE.GALLERY_LINKS,
                                    onClickMsg: t
                                });
                            }
                            (0, f.getGalleryLinks)(e).forEach((o, c) => {
                                if (!(o.href === e.matchedText && u != null)) {
                                    r.push(h.default.createElement(s.default, {
                                        testid: "link-gallery-msg",
                                        key: `${e.id.toString()}-${c}`,
                                        msg: e.safe(),
                                        link: o,
                                        displayAuthor: i,
                                        selectable: n,
                                        selectedMessages: l,
                                        onMessageSelect: a,
                                        onClickMsg: t
                                    }));
                                }
                            });
                            if (u != null) {
                                r.push(u);
                            }
                        });
                        r.reverse();
                        return r;
                    })(e, t, C, M, a),
                    emptyText: g.fbt._("No Links", null, {
                        hk: "rFshX"
                    }),
                    chat: n,
                    filterMessages: P
                }, N)), h.default.createElement(u.HistorySyncGalleryPlaceholder, {
                    chat: e.chat
                }));
            };
            var l = a(n(967154));
            var r = a(n(506479));
            var o = n(356097);
            var i = n(163755);
            var u = n(217714);
            var s = a(n(318787));
            var c = a(n(101760));
            var d = n(787742);
            var f = n(44118);
            var p = a(n(443461));
            var m = a(n(565644));
            var g = n(548360);
            var h = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var n = C(t);
                if (n && n.has(e)) {
                    return n.get(e);
                }
                var a = {};
                var l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e) {
                    if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                        if (o && (o.get || o.set)) {
                            Object.defineProperty(a, r, o);
                        } else {
                            a[r] = e[r];
                        }
                    }
                }
                a.default = e;
                if (n) {
                    n.set(e, a);
                }
                return a;
            }(n(667294));
            var E = a(n(637660));
            var b = n(808446);
            var v = a(n(940630));
            const y = ["linkMsgs", "chat", "filterText", "isFilterEnabled"];

            function C (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var n = new WeakMap();
                return (C = function (e) {
                    if (e) {
                        return n;
                    } else {
                        return t;
                    }
                })(e);
            }
        },
        318787: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const {
                    msg: t,
                    link: n,
                    displayAuthor: a,
                    selectedMessages: w,
                    onMessageSelect: S,
                    onClickMsg: P,
                    testid: O
                } = e;
                const [I, T, A, N, x, D, L, R, j, B, F, W] = (0, _.useMsgValues)(e.msg.id, [h.getBody, h.getCaption, s.getDir, h.getId, h.getIsSentByMe, s.getMediaData, h.getType, s.getRtl, s.getSenderObj, h.getStar, s.getAsRevoked, h.getIsKept]);
                const [G, H] = (0, M.useState)(false);
                const [V, U] = (0, M.useState)(() => w.isSelected(t.unsafe()));
                (0, k.useListener)(w, N.toString(), e => {
                    if (V !== e) {
                        U(e);
                    }
                });
                const z = e.selectable || G ? M.default.createElement(g.default, {
                    checked: V,
                    onClick: e => {
                        if (e) {
                            e.stopPropagation();
                        }
                        S(t.unsafe(), !V);
                    },
                    msgTheme: "gallery"
                }) : null;
                const q = (0, u.Conversation)({
                    mentions: t.mentionMap(),
                    groupMentions: t.groupMentionMap(),
                    links: (0, E.getLinksFromMsg)(t.unsafe()),
                    phoneNumbers: (0, v.getPhoneNumbersFromMsg)(t.unsafe()),
                    selectable: true,
                    trusted: (0, b.isTrusted)(t.unsafe()),
                    fromMe: N.fromMe,
                    fromChatWid: N.remote
                });
                const Y = I && I.includes(n.url) ? I : T;
                const K = a ? M.default.createElement("div", {
                    className: f.default.author
                }, M.default.createElement(m.default, {
                    msg: t,
                    contact: j
                })) : null;
                const X = (0, E.getSuspiciousLinks)(t.unsafe()).length > 0;
                return M.default.createElement(c.default, {
                    hover: G,
                    onClick: () => {
                        P(t.unsafe(), !V);
                    },
                    onMouseEnter: G ? null : () => {
                        if (!G) {
                            H(true);
                        }
                    },
                    onMouseOver: G ? null : () => {
                        if (!G) {
                            H(true);
                        }
                    },
                    onMouseLeave: G ? () => {
                        if (G) {
                            H(false);
                        }
                    } : null,
                    testid: O
                }, M.default.createElement("div", {
                    className: f.default.msg
                }, M.default.createElement(y.default, {
                    transitionName: "delay-leave"
                }, z), M.default.createElement(C.MessageContainer, {
                    isSentByMe: x
                }, M.default.createElement("div", {
                    className: (0, r.classnamesConvertMeToStylexPlease)({
                        [f.default.hasAuthor]: a,
                        [f.default.hasSuspiciousLinks]: X,
                        [f.default.bubble]: true
                    })
                }, K, M.default.createElement(l.SuspiciousLabel, {
                    link: n,
                    displayType: o.DISPLAY_TYPE.GALLERY
                }), M.default.createElement(p.default, {
                    title: n.url,
                    isSentByMe: x,
                    canonicalUrl: n.domain,
                    displayType: o.DISPLAY_TYPE.GALLERY,
                    star: B,
                    kept: W,
                    isLoading: false
                }), M.default.createElement(i.EmojiText, {
                    text: Y,
                    selectable: true,
                    className: f.default.text,
                    dirMismatch: R !== d.default.isRTL(),
                    direction: A,
                    formatters: q
                })))));
            };
            var l = n(751349);
            var r = n(396574);
            var o = n(356097);
            var i = n(305521);
            var u = n(675886);
            var s = n(163755);
            var c = a(n(296518));
            var d = a(n(932325));
            var f = a(n(663945));
            var p = a(n(428543));
            var m = a(n(599664));
            var g = a(n(6323));
            var h = n(787742);
            var E = n(44118);
            var b = n(435711);
            var v = n(527530);
            var y = a(n(844453));
            var C = n(512873);
            var M = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var n = w(t);
                if (n && n.has(e)) {
                    return n.get(e);
                }
                var a = {};
                var l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e) {
                    if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                        if (o && (o.get || o.set)) {
                            Object.defineProperty(a, r, o);
                        } else {
                            a[r] = e[r];
                        }
                    }
                }
                a.default = e;
                if (n) {
                    n.set(e, a);
                }
                return a;
            }(n(667294));
            var k = n(808446);
            var _ = n(871210);

            function w (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var n = new WeakMap();
                return (w = function (e) {
                    if (e) {
                        return n;
                    } else {
                        return t;
                    }
                })(e);
            }
        },
        101760: (e, t, n) => {
            "use strict";

            var a = n(530066).default;
            var l = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const {
                    getHasBefore: t,
                    getQueryBefore: n,
                    msgsCollection: l,
                    msgsCollectionUpdateEvents: _,
                    emptyText: S,
                    scrollOffset: P = 0,
                    selectable: O,
                    onMessageSelect: I,
                    queryCollection: T,
                    selectedMessages: A,
                    messageElements: N,
                    onProductDetail: x,
                    setScrollOffset: D,
                    filterMessages: L,
                    testid: R
                } = e;
                const j = t();
                const B = n();
                const F = (0, h.useRef)(null);
                const W = (0, k.default)();
                const G = (0, M.default)(e => {
                    if (j) {
                        T(e);
                    }
                }, 100);
                const [H, V] = (0, h.useState)(() => l.toArray());
                const U = (0, M.default)(e => {
                    const t = e.scrollHeight - e.clientHeight - e.scrollTop;
                    if (j && t < f.SCROLL_FUDGE) {
                        G(l.head());
                    }
                    if (D) {
                        D(e.scrollTop);
                    }
                }, 100);
                (0, h.useEffect)(() => {
                    if (j) {
                        G();
                    }
                    const e = F.current;
                    if (e) {
                        e.scrollTop = P;
                    }
                    return () => {
                        U.cancel();
                    };
                }, []);
                const z = (e, t) => {
                    const n = (0, g.unproxy)(e);
                    if (O && t !== undefined) {
                        I(n, t);
                    } else {
                        u.Cmd.openChatAt((0, p.getChat)(n), (0, i.getSearchContext)((0, p.getChat)(n), n));
                    }
                };
                const q = (0, h.useRef)();
                const Y = (0, b.default)();
                const K = (0, h.useCallback)(function () {
                    var e = (0, r.default)(function* (e) {
                        var t;
                        if (!((t = q.current) === null || t === undefined)) {
                            t.abort();
                        }
                        if (e == null) {
                            V(l.toArray());
                            return void Y();
                        }
                        q.current = new a();
                        const n = q.current.signal;
                        try {
                            const t = yield e(l, n);
                            if (!(n.aborted || W.aborted)) {
                                V(t);
                                Y();
                            }
                        } catch (e) {
                            if (e.name !== o.ABORT_ERROR) {
                                throw e;
                            }
                        }
                    });
                    return function () {
                        return e.apply(this, arguments);
                    };
                }(), [l, Y, W]);
                (0, v.useListener)(l, _, () => K(L));
                (0, h.useEffect)(() => {
                    K(L);
                    return () => {
                        var e;
                        if ((e = q.current) === null || e === undefined) {
                            return undefined;
                        } else {
                            return e.abort();
                        }
                    };
                }, [K, L]);
                const [X, {
                    height: Z
                }] = (0, y.default)();
                const Q = (0, C.default)(X, F);
                (0, h.useEffect)(() => {
                    if (L != null && t() && !n() && F.current != null && F.current.scrollHeight < Z + f.SCROLL_FUDGE) {
                        G(l.head());
                    }
                });
                let $ = null;
                $ = N ? N(H, z) : H.map((e, t) => h.default.createElement(m.default, {
                    key: `${e.id.toString()}_${t}`,
                    msg: e,
                    selectable: O,
                    selectedMessages: A,
                    onMessageSelect: I,
                    displayType: s.DISPLAY_TYPE.GALLERY,
                    onClickMsg: z,
                    onProductClick: x
                })).reverse();
                if (B) {
                    if ($.length === 0) {
                        return h.default.createElement(c.Loading, null);
                    }
                    $.push(h.default.createElement(d.default, {
                        key: -1
                    }));
                }
                if ($.length === 0 && !B && !j) {
                    return h.default.createElement(c.Empty, {
                        text: S,
                        testid: "no-elements"
                    });
                }
                return h.default.createElement("div", {
                    ref: Q,
                    onScroll: e => {
                        U(e.currentTarget);
                    },
                    className: (0, E.default)(w)
                }, $);
            };
            var r = l(n(348926));
            var o = n(898817);
            var i = n(713105);
            var u = n(780549);
            var s = n(356097);
            var c = n(811720);
            var d = l(n(495012));
            var f = n(914368);
            var p = n(163755);
            var m = l(n(565644));
            var g = n(163139);
            var h = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var n = _(t);
                if (n && n.has(e)) {
                    return n.get(e);
                }
                var a = {};
                var l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e) {
                    if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                        if (o && (o.get || o.set)) {
                            Object.defineProperty(a, r, o);
                        } else {
                            a[r] = e[r];
                        }
                    }
                }
                a.default = e;
                if (n) {
                    n.set(e, a);
                }
                return a;
            }(n(667294));
            var E = l(n(156720));
            var b = l(n(969651));
            var v = n(808446);
            var y = l(n(695841));
            var C = l(n(38085));
            var M = l(n(286481));
            var k = l(n(895851));

            function _ (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var n = new WeakMap();
                return (_ = function (e) {
                    if (e) {
                        return n;
                    } else {
                        return t;
                    }
                })(e);
            }
            const w = {
                display: "p357zi0d",
                flexDirection: "f8m0rgwh",
                overflowX: "gfz4du6o",
                overflowY: "rpvcun8f",
                flexGrow: "ggj6brxn"
            };
        },
        285192: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const {
                    productMsgs: t,
                    chat: n
                } = e;
                const a = (0, r.default)(e, d);
                const f = (0, c.default)();
                return s.default.createElement(s.default.Fragment, null, s.default.createElement(i.default, (0, l.default)({
                    msgsCollection: t,
                    msgsCollectionUpdateEvents: ["add", "remove", "reset", "products_loaded"],
                    queryCollection: e => f(() => {
                        t.queryProducts(n, e);
                    }),
                    getHasBefore: () => t.hasProductBefore,
                    getQueryBefore: () => t.hasProductBefore ? Promise.resolve() : null,
                    emptyText: u.fbt._("No products", null, {
                        hk: "8o7dB"
                    }),
                    chat: n
                }, a)), s.default.createElement(o.HistorySyncGalleryPlaceholder, {
                    chat: n
                }));
            };
            var l = a(n(967154));
            var r = a(n(506479));
            var o = n(217714);
            var i = a(n(101760));
            var u = n(548360);
            var s = a(n(667294));
            var c = a(n(940630));
            const d = ["productMsgs", "chat"];
        },
        153316: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.getGeneralChatParticipantListText = function (e) {
                if (e) {
                    return l.fbt._("New community members will no longer be automatically added to this group because it is full.", null, {
                        hk: "4gQBxr"
                    });
                } else {
                    return l.fbt._("New community members will be automatically added to this group, until it is full.", null, {
                        hk: "2XFJsD"
                    });
                }
            };
            var l = n(548360);
            a(n(667294));
        },
        495346: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                let {
                    onEnd: t
                } = e;
                const [n, a] = (0, i.useFlow)(u.Chats, {
                    transitions: i.FlowTransitions.DrawerLeft,
                    onEnd: t
                });
                if (a.step == null) {
                    return null;
                }
                let s;
                switch (a.step) {
                    case u.Chats:
                        s = o.default.createElement(l.default, {
                            settings: r.default,
                            onClose: () => {
                                a.pop();
                            }
                        });
                }
                return o.default.createElement(n, {
                    flow: a
                }, s);
            };
            var l = a(n(854534));
            var r = a(n(634152));
            var o = a(n(667294));
            var i = n(839062);
            const u = n(76672).Mirrored(["Chats"]);
        },
        339257: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.InfoFlow = undefined;
            var l = a(n(348926));
            var r = a(n(81109));
            var o = n(898817);
            var i = n(418987);
            var u = a(n(670983));
            var s = a(n(229922));
            var c = n(72696);
            var d = a(n(55423));
            var f = a(n(791865));
            var p = n(374660);
            var m = n(780549);
            var g = n(927531);
            var h = n(473735);
            var E = n(260854);
            var b = n(174834);
            var v = n(355734);
            var y = n(355351);
            var C = n(103440);
            var M = a(n(655237));
            var k = n(834110);
            var _ = a(n(41493));
            var w = n(568550);
            var S = n(900316);
            var P = a(n(365889));
            var O = a(n(649391));
            var I = a(n(395767));
            var T = a(n(941943));
            var A = n(408256);
            var N = n(393609);
            var x = a(n(596090));
            var D = n(113269);
            var L = a(n(422325));
            var R = n(147550);
            var j = a(n(302112));
            var B = n(306472);
            var F = n(114850);
            var W = a(n(550506));
            var G = n(608637);
            var H = a(n(720406));
            var V = a(n(58880));
            var U = n(73225);
            var z = a(n(751046));
            var q = a(n(660508));
            var Y = a(n(245272));
            var K = n(95589);
            var X = a(n(386067));
            var Z = n(932523);
            var Q = n(77548);
            var $ = a(n(614058));
            var J = a(n(632289));
            var ee = n(559016);
            var te = a(n(898707));
            var ne = n(242677);
            var ae = a(n(559893));
            var le = n(977575);
            var re = n(316348);
            var oe = n(555622);
            var ie = n(126592);
            var ue = a(n(979588));
            var se = n(470824);
            var ce = n(111971);
            var de = n(238669);
            var fe = n(377773);
            var pe = a(n(804477));
            var me = n(684259);
            var ge = n(455915);
            var he = n(836507);
            var Ee = n(901952);
            var be = n(298187);
            var ve = a(n(556869));
            var ye = n(548360);
            var Ce = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var n = Oe(t);
                if (n && n.has(e)) {
                    return n.get(e);
                }
                var a = {};
                var l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e) {
                    if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                        if (o && (o.get || o.set)) {
                            Object.defineProperty(a, r, o);
                        } else {
                            a[r] = e[r];
                        }
                    }
                }
                a.default = e;
                if (n) {
                    n.set(e, a);
                }
                return a;
            }(n(667294));
            var Me = n(839062);
            var ke = n(584019);
            var _e = n(582661);
            var we = n(101395);
            var Se = a(n(17533));
            var Pe = a(n(895851));

            function Oe (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var n = new WeakMap();
                return (Oe = function (e) {
                    if (e) {
                        return n;
                    } else {
                        return t;
                    }
                })(e);
            }
            const Ie = R.InfoFlowStep;
            const Te = e => {
                var t;
                if (e.isGroup) {
                    return Ie.GroupInfo;
                }
                if (e.isBroadcast) {
                    return Ie.BroadcastInfo;
                }
                if (e.isUser) {
                    return Ie.ContactInfo;
                }
                if (e.isNewsletter) {
                    return Ie.NewsletterInfo;
                }
                const n = (t = e.kind) !== null && t !== undefined ? t : "undefined";
                throw (0, ve.default)(`Invalid chat provided of kind ${n}`);
            };
            const Ae = (0, Ce.forwardRef)((e, t) => {
                var n;
                var a;
                var R;
                const {
                    chat: ve,
                    initialStep: Oe = Te(ve),
                    showFullGroupDescription: Ae,
                    scrollToParticipantList: Ne,
                    profileEntryPoint: xe,
                    onEnd: De,
                    displayName: Le,
                    sourceGroupChatOrNewsletter: Re,
                    focusNewsletterDescriptionOnMount: je,
                    newsletterLinkShareScreenEntryPoint: Be
                } = e;
                const Fe = (0, Ce.useRef)(0);
                const We = (0, Se.default)(e => {
                    Fe.current = e;
                });
                const Ge = (0, Ce.useRef)(undefined);
                const He = (n = (0, _e.useNewsletterGeosuspendedCountries)(ve)) !== null && n !== undefined ? n : [];
                const Ve = (a = (0, we.useNewsletterMessageDeliveryUpdates)(ve)) !== null && a !== undefined ? a : [];
                const Ue = (0, ke.useNewsletterAlertScreenType)(Ve, He);
                const ze = (0, Ce.useContext)(w.DrawerContext);
                const [qe, Ye] = (0, Me.useFlow)(Oe, {
                    transitions: Me.FlowTransitions.DrawerRight,
                    onEnd: De
                });
                const Ke = (0, Ce.useRef)(new G.NewsletterAdminFunnelLogger(me.ADMIN_FLOW_TYPE.EDIT));
                const Xe = (0, Ce.useRef)(Be);
                const [Ze, Qe] = (0, Ce.useState)(null);
                const [$e, Je] = (0, Ce.useState)(undefined);
                const [et, tt] = (0, Ce.useState)(null);
                const [nt, at] = (0, Ce.useState)(null);
                const [lt, rt] = (0, Ce.useState)(null);
                const [ot, it] = (0, Ce.useState)(null);
                const [ut, st] = (0, Ce.useState)(null);
                (0, Ce.useEffect)(() => {
                    if (ve.isGroup) {
                        (0, D.queryAndUpdateGroupMetadataById)(ve.id, "interactive");
                    } else if (ve.isUser) {
                        if (ve.contact.isBusiness && (0, c.canSeeBizProfileV3)()) {
                            S.DrawerManager.setDrawerContext("right", (0, Z.buildProductCatalogContext)(new ne.ProductCatalogSession(), (0, k.getMaybeBizPlatformForLogging)(ve.contact.id.toString()), ge.CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_PROFILE));
                        }
                    } else if (ve.isNewsletter) {
                        var e;
                        (0, ie.queryAndUpdateNewsletterMetadataAction)((0, i.toNewsletterJid)(ve.id.toString()), {
                            fields: (0, r.default)({
                                name: true,
                                picture: true,
                                description: true,
                                inviteLink: true,
                                handle: true,
                                subscribers: true,
                                privacy: true,
                                verification: true,
                                state: true
                            }, !((e = ve.newsletterMetadata) === null || e === undefined ? undefined : e.isPreview) && {
                                muted: true,
                                membership: true
                            })
                        });
                    }
                }, []);
                const ct = (e, t) => {
                    Qe(e);
                    Je(t);
                    Ye.push(Ie.ProductDetail);
                };
                const dt = e => {
                    tt(e);
                    Ye.push(Ie.ProductCollection);
                };
                const ft = e => {
                    Qe(e);
                    Ye.push(Ie.ProductLink);
                };
                const pt = e => {
                    Qe(e);
                    Ye.push(Ie.ProductInfo);
                };
                const mt = (e, t) => {
                    at(e);
                    rt(t);
                    Ye.push(Ie.CatalogLink);
                };
                const gt = e => {
                    const t = (0, Z.getProductCatalogContext)(ze);
                    if ((0, d.default)(e, ve, t)) {
                        it(e);
                        Ye.push(Ie.Cart);
                    }
                };
                const ht = (e, t) => {
                    const n = ve.id;
                    oe.QPL.markerStart(re.QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW, {
                        annotations: {
                            string: {
                                EntryPoint: t
                            }
                        }
                    });
                    (0, Q.logCarouselViewMoreClick)({
                        catalogOwnerWid: n,
                        catalogContext: e
                    });
                    Ye.push(Ie.Catalog);
                };
                const Et = () => {
                    F.ModalManager.open(Ce.default.createElement(C.ConfirmPopup, {
                        onOK: () => F.ModalManager.close(),
                        okText: (0, I.default)("OK")
                    }, ye.fbt._("Only admins can edit this group's info", null, {
                        hk: "1a2ztg"
                    })));
                };
                const bt = (0, Pe.default)();
                const vt = function () {
                    var t = (0, l.default)(function* (t) {
                        yield(0, s.default)((0, se.setGroupSubject)(e.chat, t), bt).catch((0, o.catchAbort)(() => {})).catch(() => {
                            __LOG__(3)`name_group_modal:onSetSubject failed`;
                        });
                        F.ModalManager.close();
                        Ye.push(Ie.GroupInviteLink);
                    });
                    return function () {
                        return t.apply(this, arguments);
                    };
                }();
                const yt = () => {
                    var e;
                    if ((0, p.isInviteGrowthLockedGroup)(ve)) {
                        var t;
                        const e = !!((t = ve.groupMetadata) === null || t === undefined ? undefined : t.participants.iAmAdmin());
                        (0, N.openGrowthLockedModal)(e, true);
                    } else if ((e = ve.groupMetadata) === null || e === undefined ? undefined : e.isUnnamed) {
                        var n;
                        var a;
                        const e = ye.fbt._("This group was created without a name. Give it a name to share the group link.", null, {
                            hk: "1uQedr"
                        });
                        F.ModalManager.open(Ce.default.createElement(W.default, {
                            chat: ve,
                            subtext: e,
                            onCancel: () => F.ModalManager.close(),
                            onOK: vt,
                            editable: (n = ve.groupMetadata) === null || n === undefined ? undefined : n.canSetSubject(),
                            editRestrictionInfo: ((a = ve.groupMetadata) === null || a === undefined ? undefined : a.restrict) ? Et : undefined
                        }));
                    } else {
                        Ye.push(Ie.GroupInviteLink);
                    }
                };
                const Ct = e => {
                    rt(e || ve.contact);
                    Ye.push(Ie.Verification);
                };
                const Mt = () => {
                    if ((0, fe.shouldShowNUX)(K.NUX.EPHEMERAL)) {
                        F.ModalManager.open(Ce.default.createElement(O.default, {
                            chat: ve,
                            fromMe: true,
                            onOk: () => Ye.push(Ie.Ephemeral)
                        }));
                    } else {
                        Ye.push(Ie.Ephemeral);
                    }
                };
                const kt = () => {
                    var e;
                    const t = (e = ve.groupMetadata) === null || e === undefined ? undefined : e.parentGroup;
                    if (t) {
                        m.Cmd.openCommunityHome(t, true);
                    }
                };
                const _t = () => {
                    Ye.end(de.DismissReason.LIFECYCLE);
                };
                const wt = () => {
                    Ge.current = undefined;
                    Fe.current = 0;
                    Ye.push(Ie.MediaGallery);
                };
                const St = () => {
                    Ge.current = B.TABS.PRODUCTS;
                    Ye.pop();
                };
                if (!Ye.step) {
                    return null;
                }
                const Pt = Re != null ? Re : ve;
                let Ot;
                switch (Ye.step) {
                    case Ie.GroupInfo:
                        if ((0, p.isCommunityAnnouncementGroup)(Pt) && !(0, p.isDeactivatedCommunityAnnouncementGroup)(Pt) && ((R = Pt.groupMetadata) === null || R === undefined ? undefined : R.participants.iAmMember()) && (0, b.communityTabbedInfoEnabled)()) {
                            var It;
                            const e = (It = Pt.groupMetadata) === null || It === undefined ? undefined : It.parentGroup;
                            Ot = Ce.default.createElement(E.CommunityFlowLoadable, {
                                homeTheme: v.CommunityHomeTheme.TabbedInfo,
                                initialStep: h.CommunityFlowStep.CommunityHome,
                                initialTab: y.CommunityInfoTabs.Announcements,
                                jid: e,
                                onBack: () => Ye.pop()
                            });
                        } else {
                            Ot = Ce.default.createElement(T.default, {
                                chat: Pt,
                                showFullGroupDescription: Ae,
                                scrollToParticipantList: Ne,
                                groupMetadata: Pt.groupMetadata,
                                contact: Pt.contact,
                                profilePicThumb: Pt.contact.getProfilePicThumb(),
                                onVerification: Ct,
                                onStarred: () => Ye.push(Ie.Starred),
                                onKept: () => Ye.push(Ie.Kept),
                                onSentForAdminReview: () => Ye.push(Ie.SentForAdminReview),
                                onMediaGallery: wt,
                                onAdminSetting: () => Ye.push(Ie.GroupSettings),
                                onGroupInviteLink: yt,
                                onPendingParticipants: () => Ye.push(Ie.PendingParticipants),
                                onEphemeral: Mt,
                                onCommunityClick: kt,
                                onClose: () => {
                                    if (Re) {
                                        Ye.end();
                                    } else {
                                        Ye.pop();
                                    }
                                }
                            });
                        }
                        break;
                    case Ie.SentForAdminReview:
                        Ot = Ce.default.createElement(ue.default, {
                            chat: ve,
                            ref: t,
                            onClose: () => Ye.pop()
                        });
                        break;
                    case Ie.BroadcastInfo:
                        Ot = Ce.default.createElement(f.default, {
                            chat: ve,
                            contact: ve.contact,
                            onStarred: () => Ye.push(Ie.Starred),
                            onMediaGallery: wt,
                            onClose: () => Ye.pop()
                        });
                        break;
                    case Ie.ContactInfo:
                        Ot = Ce.default.createElement(M.default, {
                            contact: ve.contact,
                            onVerification: Ct,
                            onStarred: () => Ye.push(Ie.Starred),
                            onKept: () => Ye.push(Ie.Kept),
                            onMediaGallery: wt,
                            onProductCatalog: ht,
                            onProductDetail: ct,
                            onEphemeral: Mt,
                            onClose: () => Ye.pop(),
                            profileEntryPoint: xe,
                            onBack: Re ? () => {
                                if (Re.isNewsletter) {
                                    Ye.push(Ie.NewsletterInfo);
                                } else {
                                    Ye.push(Ie.GroupInfo);
                                }
                            } : null
                        });
                        break;
                    case Ie.NewsletterInfo:
                        if ((0, U.isNewsletterEnabled)()) {
                            Ot = Ce.default.createElement(z.default, {
                                chat: Pt,
                                newsletterMetadata: Pt.newsletterMetadata,
                                profilePicThumb: Pt.contact.getProfilePicThumb(),
                                adminFunnelLogger: Ke.current,
                                onClose: () => {
                                    Ye.end();
                                },
                                onDeleteNewsletter: () => Ye.push(Ie.DeleteNewsletter),
                                onAdminCenter: () => Ye.push(Ie.NewsletterAdminCenter),
                                onSettings: () => Ye.push(Ie.NewsletterSettings),
                                onShareLink: () => {
                                    Xe.current = he.CHANNEL_LINK_SHARE_ENTRY_POINT.CHANNEL_INFO_PAGE;
                                    Ye.push(Ie.NewsletterLink);
                                },
                                onVerification: Ct,
                                focusDescriptionOnMount: je
                            });
                        }
                        break;
                    case Ie.NewsletterSettings:
                        if ((0, U.isNewsletterReactionSettingsEnabled)()) {
                            Ot = Ce.default.createElement(Y.default, {
                                isFirstLevel: Oe === Ie.NewsletterSettings,
                                onBack: () => Ye.pop(),
                                newsletter: ve,
                                adminFunnelLogger: Ke.current
                            });
                        }
                        break;
                    case Ie.NewsletterLink:
                        if ((0, U.isNewsletterChannelLinkPageEnabled)(ve)) {
                            Ot = Ce.default.createElement(q.default, {
                                entryPoint: Xe.current,
                                onClose: () => {
                                    Ye.end();
                                },
                                onBack: Ye.previousStep === Ie.NewsletterInfo ? () => Ye.pop() : null,
                                newsletter: ve
                            });
                        }
                        break;
                    case Ie.DeleteNewsletter:
                        Ot = Ce.default.createElement(V.default, {
                            chat: ve,
                            onBack: () => Ye.pop()
                        });
                        break;
                    case Ie.NewsletterAdminCenter:
                        Ot = Ce.default.createElement(H.default, {
                            chat: ve,
                            onBack: () => Ye.pop(),
                            alertScreen: Ue,
                            entryPoint: g.AlertEntryPoint.INFO_DRAWER
                        });
                        break;
                    case Ie.ProductDetail:
                        Ot = Ce.default.createElement($.default, {
                            chat: ve,
                            collectionId: $e,
                            product: (0, u.default)(Ze, "product"),
                            onEnd: _t,
                            onBack: St,
                            refreshCarousel: false,
                            onProductLinkClick: ft,
                            onProductMoreInformation: pt,
                            onCartClick: gt
                        });
                        break;
                    case Ie.ProductCollection: {
                        const e = ve.id;
                        Ot = Ce.default.createElement(le.CollectionContentDrawer, {
                            contact: ve.contact,
                            onProductDetail: ct,
                            catalogId: e,
                            onBack: () => Ye.pop(),
                            onCatalogLinkClick: mt,
                            onCartClick: gt,
                            collection: (0, u.default)(et, "collection")
                        });
                        break;
                    }
                    case Ie.ProductLink:
                        Ot = Ce.default.createElement(J.default, {
                            product: (0, u.default)(Ze, "product"),
                            onBack: () => Ye.pop()
                        });
                        break;
                    case Ie.ProductInfo:
                        Ot = Ce.default.createElement(te.default, {
                            product: (0, u.default)(Ze, "product"),
                            onBack: St
                        });
                        break;
                    case Ie.CatalogLink:
                        Ot = Ce.default.createElement(X.default, {
                            catalog: (0, u.default)(nt, "catalog"),
                            contact: (0, u.default)(lt, "contact"),
                            onBack: () => Ye.pop()
                        });
                        break;
                    case Ie.Cart: {
                        const e = (0, Z.getProductCatalogContext)(ze);
                        const t = (0, d.default)((0, u.default)(ot, "cartId"), ve, e);
                        Ot = (0, u.default)(t, "cartFlow");
                        break;
                    }
                    case Ie.Catalog:
                        Ot = Ce.default.createElement(ae.default, {
                            contact: ve.contact,
                            onProductDetail: ct,
                            catalogId: ve.id,
                            onBack: () => Ye.pop(),
                            businessProfile: ve.contact.businessProfile,
                            onCatalogLinkClick: mt,
                            onCartClick: gt,
                            onCollectionSeeAll: dt
                        });
                        break;
                    case Ie.ProductList:
                        Ot = Ce.default.createElement(ee.ProductListDrawer, {
                            contact: ve.contact,
                            onProductDetail: ct,
                            catalogId: ve.id,
                            onBack: () => Ye.pop(),
                            businessProfile: ve.contact.businessProfile,
                            onCatalogLinkClick: mt,
                            onCartClick: gt
                        });
                        break;
                    case Ie.Starred:
                        Ot = Ce.default.createElement(ce.StarredDrawerLoadable, {
                            chat: ve,
                            starredMsgs: ve.getStarredMsgs(),
                            onClose: () => Ye.pop()
                        });
                        break;
                    case Ie.Kept:
                        Ot = Ce.default.createElement(j.default, {
                            chat: ve,
                            keptMsgs: ve.getKeptMsgs(),
                            onClose: () => Ye.pop()
                        });
                        break;
                    case Ie.GroupSettings:
                        Ot = Ce.default.createElement(L.default, {
                            chat: ve,
                            groupMetadata: ve.groupMetadata,
                            onClose: () => Ye.pop()
                        });
                        break;
                    case Ie.MediaGallery:
                        Ot = Ce.default.createElement(B.MediaGalleryDrawer, {
                            chat: ve,
                            onBack: () => Ye.pop(),
                            onProductDetail: ct,
                            setProductsScrollOffset: We,
                            initialTab: Ge.current,
                            productsScrollOffset: Fe.current
                        });
                        break;
                    case Ie.GroupInviteLink:
                        Ot = Ce.default.createElement(A.GroupInviteLinkDrawerLoadable, {
                            chat: ve,
                            groupMetadata: (0, u.default)(ve.groupMetadata, "chat.groupMetadata"),
                            onBack: () => Ye.pop(),
                            onGroupSettings: () => Ye.push(Ie.GroupSettings)
                        });
                        break;
                    case Ie.PendingParticipants:
                        Ot = Ce.default.createElement(x.default, {
                            chat: ve,
                            onBack: () => Ye.pop()
                        });
                        break;
                    case Ie.Verification:
                        Ot = Ce.default.createElement(pe.default.VerificationDrawerLoadable, {
                            contact: (0, u.default)(lt, "contact"),
                            onClose: () => Ye.pop(),
                            isFirstLevel: false
                        });
                        break;
                    case Ie.DefaultEphemerality:
                        Ot = Ce.default.createElement(_.default, {
                            onClose: () => Ye.pop(),
                            entryPoint: (0, u.default)(ut, "defaultEphemeralityEntryPoint")
                        });
                        break;
                    case Ie.Ephemeral: {
                        const e = ve.isGroup ? Ee.DISAPPEARING_MODE_ENTRY_POINT_TYPE.GROUP_CHAT_DISAPPEARING_MESSAGES_SETTING : Ee.DISAPPEARING_MODE_ENTRY_POINT_TYPE.INDIVIDUAL_CHAT_DISAPPEARING_MESSAGES_SETTING;
                        Ot = Ce.default.createElement(P.default, {
                            chat: ve,
                            showNux: (0, fe.shouldShowNUX)(K.NUX.EPHEMERAL),
                            entryPoint: be.EPHEMERAL_SETTING_ENTRY_POINT_TYPE.CHAT_INFO,
                            onClose: () => Ye.pop(),
                            onCloseNux: () => Ye.push(Ie.Ephemeral),
                            onDDMSettingsClick: () => {
                                st(e);
                                return void Ye.push(Ie.DefaultEphemerality);
                            }
                        });
                        break;
                    }
                }
                return Ce.default.createElement(qe, {
                    ref: t,
                    flow: Ye,
                    displayName: Le
                }, Ot);
            });
            t.InfoFlow = Ae;
            Ae.displayName = "InfoFlow";
        },
        600788: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                var t;
                const {
                    msg: n,
                    highlightedMsgIds: a
                } = e;
                const N = (0, A.default)();
                const D = (0, T.default)();
                const L = (0, _.default)();
                const R = (0, w.default)(() => n.type === g.MSG_TYPE.IMAGE ? new b.UiActionWamEvent({
                    uiActionType: y.UI_ACTION_TYPE.IMAGE_OPEN,
                    uiActionPreloaded: n.mediaData.mediaStage === c.MEDIA_DATA_STAGE.RESOLVED
                }) : null);
                const j = (0, w.default)(() => (0, o.constructMediaMsgs)((0, u.getChat)(n), n));
                const B = j.current.length;
                const F = (0, P.default)(B);
                const W = (0, k.useRef)(null);
                const G = (0, k.useRef)();
                const H = (0, k.useRef)();
                const V = (0, k.useRef)(null);
                const U = (0, k.useRef)(null);
                const z = (0, k.useRef)(null);
                const [q, Y] = (0, k.useState)(n);
                const [K, X] = (0, k.useState)(false);
                const [Z, Q] = (0, k.useState)(x(q));
                const $ = (0, P.default)(q);
                const J = function () {
                    let e = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
                    const t = U.current;
                    const n = z.current;
                    const a = V.current;
                    if (!t || !n || !a) {
                        return;
                    }
                    let l = 0;
                    if (a instanceof HTMLElement) {
                        l = a.clientWidth / 2 - t.clientWidth / 2;
                    }
                    (0, v.default)(n, "stop");
                    let r = 0;
                    if (e) {
                        r = 300;
                    }
                    (0, v.default)(a, "scroll", {
                        duration: r,
                        container: n,
                        offset: l,
                        axis: "x",
                        easing: [0.1, 0.82, 0.25, 1]
                    });
                };
                (0, k.useEffect)(() => {
                    var e;
                    J();
                    if (x(n) && (e = U.current)) {
                        (0, v.default)(e, {
                            opacity: [1, 0],
                            translateY: ["0%", "100%"]
                        }, {
                            duration: 300,
                            delay: 100,
                            easing: [0.1, 0.82, 0.25, 1]
                        }).then(() => {
                            if (!N.aborted) {
                                Q(false);
                            }
                        });
                    }
                }, []);
                (0, k.useEffect)(() => {
                    if (B > (F != null ? F : 0)) {
                        J();
                    }
                });
                const ee = e => {
                    D(() => {
                        j.current.loadMoreAroundIfNeeded(e);
                    });
                    Y(e);
                };
                const te = e => {
                    if (e) {
                        e.stopPropagation();
                    }
                    if (K) {
                        return;
                    }
                    const t = q;
                    if (!t) {
                        return;
                    }
                    let a = null;
                    a = j.current.getAfter(t);
                    if (a) {
                        ee(a);
                    } else if (j.current.hasMediaAfter) {
                        if (!G.current) {
                            G.current = j.current.queryMedia({
                                chat: (0, u.getChat)(n),
                                msg: n,
                                direction: "after"
                            }).then(e => {
                                if (!N.aborted) {
                                    if (typeof e.length == "number" && e.length > 0 && q === n) {
                                        te();
                                    }
                                }
                            }).catch(() => {
                                __LOG__(3)`query media msgs error: `;
                            }).finally(() => {
                                G.current = null;
                            });
                        }
                    }
                };
                const ne = e => {
                    if (e) {
                        e.stopPropagation();
                    }
                    if (K) {
                        return;
                    }
                    const t = q;
                    if (!t) {
                        return;
                    }
                    let a = null;
                    a = j.current.getBefore(t);
                    if (a) {
                        ee(a);
                    } else if (j.current.hasMediaBefore) {
                        if (!H.current) {
                            H.current = j.current.queryMedia({
                                chat: (0, u.getChat)(n),
                                msg: n,
                                direction: "before"
                            }).then(e => {
                                if (!N.aborted) {
                                    if (typeof e.length == "number" && e.length > 0 && q === n) {
                                        ne();
                                    }
                                }
                            }).catch(() => {
                                __LOG__(3)`query media msgs error: `;
                            }).finally(() => {
                                H.current = null;
                            });
                        }
                    }
                };
                let ae = null;
                if (n.type === g.MSG_TYPE.IMAGE) {
                    ae = () => {
                        const e = R.current;
                        var t;
                        if (e) {
                            Object.assign(e, (0, C.getGroupCountMetricsFromChatWid)((t = (0, u.getChat)(n)) === null || t === undefined ? undefined : t.id));
                            e.markUiActionT();
                            e.commit();
                            R.current = null;
                        }
                        (0, M.logUiActionShadowPrivateStatsTestEvents)();
                    };
                }
                const le = () => {
                    p.ModalManager.closeMedia();
                };
                const re = (0, O.default)(() => {
                    Y(null);
                    le();
                });
                (0, S.useListener)(x(q) ? null : q, "revoked", re);
                const oe = x(q) ? j.current : null;
                (0, S.useListener)(oe, "remove", (e, t, n) => {
                    const a = j.current;
                    const l = q;
                    if (a.includes(e) || l != null && l.id != null && l.id.toString() !== e.id.toString()) {
                        return void L();
                    }
                    const o = n.index;
                    if (a.length === 0) {
                        le();
                    } else if (a.length === o) {
                        ee((0, r.default)(a.at(o - 1), "mediaMsgs.at(index - 1)"));
                    } else {
                        ee((0, r.default)(a.at(o), "mediaMsgs.at(index)"));
                    }
                });
                (0, S.useListener)(oe, "reset", () => {
                    le();
                });
                (0, S.useListener)(oe, "query_media_after", () => {
                    L();
                });
                (0, S.useListener)(oe, "query_media_before", () => {
                    const e = z.current;
                    if (e) {
                        W.current = e.scrollWidth;
                        if (e instanceof HTMLElement) {
                            L();
                        }
                    }
                });
                (0, S.useListener)(window, "keydown", e => {
                    if (e.defaultPrevented) {
                        return;
                    }
                    if (q && !x(q)) {
                        return;
                    }
                    const t = s.default.isRTL();
                    if (e.keyCode === l.default.LEFT) {
                        if (t) {
                            te();
                        } else {
                            ne();
                        }
                    } else if (e.keyCode === l.default.RIGHT) {
                        if (t) {
                            ne();
                        } else {
                            te();
                        }
                    }
                });
                (0, k.useEffect)(() => {
                    D(() => {
                        if (q) {
                            j.current.loadMoreAroundIfNeeded(q);
                        }
                    });
                }, [q, j, D]);
                (0, k.useEffect)(() => {
                    if ($ !== q) {
                        J(true);
                    } else {
                        const e = z.current;
                        if (!e || W.current == null || W.current === 0) {
                            return;
                        }
                        if (e instanceof HTMLElement) {
                            e.scrollLeft += e.scrollWidth - W.current;
                        }
                        W.current = null;
                    }
                }, [q, $]);
                const ie = (0, I.default)((e, t, n) => {
                    if (t.length !== 0 && n != null) {
                        if (t.hasMediaBefore && n < e.clientWidth) {
                            const e = (0, r.default)(t.head(), "mediaMsgs.head()");
                            D(() => {
                                t.queryMedia({
                                    chat: (0, u.getChat)(e),
                                    msg: e
                                });
                                L();
                            });
                        }
                        if (t.hasMediaAfter && n + i.SCROLL_FUDGE > e.scrollWidth - e.clientWidth * 2) {
                            const e = (0, r.default)(t.last(), "mediaMsgs.last()");
                            D(() => {
                                t.queryMedia({
                                    chat: (0, u.getChat)(e),
                                    msg: e,
                                    direction: "after"
                                });
                                L();
                            });
                        }
                    }
                }, 100);
                if (!q) {
                    return null;
                }
                if ((0, u.getChat)(n).isSuspendedOrTerminated() && (0, f.isGroupSuspendV2Enabled)()) {
                    return void(0, h.openSuspendedGroupMediaDownloadFailureModal)();
                }
                const ue = j.current;
                const se = ue.last();
                const ce = ue.hasMediaAfter || q !== se ? te : null;
                const de = ue.head();
                const fe = ue.hasMediaBefore || q !== de ? ne : null;
                return k.default.createElement("div", {
                    className: K ? "img-zoomed-in" : null
                }, (0, m.getHasThumbList)(q) && k.default.createElement(E.default, {
                    activeMsg: q,
                    mediaMsgs: j.current,
                    highlightedMsgIds: e.highlightedMsgIds,
                    onSelectThumb: ee,
                    onSetActiveThumb: e => {
                        V.current = e;
                    },
                    onScroll: e => {
                        ie(e.currentTarget, j.current, e.currentTarget.scrollLeft);
                    },
                    setRefThumbsContainer: e => {
                        U.current = e;
                    },
                    setRefThumbs: e => {
                        z.current = e;
                    }
                }), k.default.createElement(d.default, {
                    msg: q,
                    mediaData: q.mediaData,
                    onBack: le,
                    onExitAnimation: () => {
                        var e;
                        if (x(n) && (e = U.current)) {
                            (0, v.default)(e, {
                                opacity: [0, 1],
                                translateY: ["100%", "0%"]
                            }, {
                                duration: 300,
                                easing: [0.1, 0.82, 0.25, 1]
                            });
                        }
                    },
                    onNext: ce,
                    onPrev: fe,
                    onImgZoomIn: e => {
                        X(e);
                    },
                    getZoomNode: e.getZoomNode,
                    startTime: e.startTime,
                    isAnimatingThumbs: Z,
                    onImageLoad: ae,
                    msgIndexInAlbum: (() => {
                        let e = -1;
                        if (!a || !q) {
                            return e;
                        }
                        const t = q.id.toString();
                        if (!a.has(t)) {
                            return e;
                        }
                        let n = 0;
                        a.forEach(a => {
                            if (a === t) {
                                e = n;
                            }
                            n++;
                        });
                        return e;
                    })(),
                    albumSize: ((t = e.highlightedMsgIds) === null || t === undefined ? undefined : t.size) || 0
                }));
            };
            var l = a(n(953268));
            var r = a(n(670983));
            var o = n(78810);
            var i = n(914368);
            var u = n(163755);
            var s = a(n(932325));
            var c = n(172259);
            var d = a(n(933147));
            var f = n(97858);
            var p = n(114850);
            var m = n(787742);
            var g = n(373070);
            var h = n(983271);
            var E = a(n(266648));
            var b = n(382117);
            var v = a(n(330619));
            var y = n(744976);
            var C = n(531737);
            var M = n(818674);
            var k = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var n = N(t);
                if (n && n.has(e)) {
                    return n.get(e);
                }
                var a = {};
                var l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e) {
                    if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                        if (o && (o.get || o.set)) {
                            Object.defineProperty(a, r, o);
                        } else {
                            a[r] = e[r];
                        }
                    }
                }
                a.default = e;
                if (n) {
                    n.set(e, a);
                }
                return a;
            }(n(667294));
            var _ = a(n(969651));
            var w = a(n(637660));
            var S = n(808446);
            var P = a(n(49710));
            var O = a(n(17533));
            var I = a(n(286481));
            var T = a(n(940630));
            var A = a(n(895851));

            function N (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var n = new WeakMap();
                return (N = function (e) {
                    if (e) {
                        return n;
                    } else {
                        return t;
                    }
                })(e);
            }

            function x (e) {
                return !e || (0, m.getHasThumbList)(e);
            }
        },
        340576: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.requireBundle = t.SendContactsModalLoadable = undefined;
            var l = a(n(348926));
            var r = a(n(114945));
            var o = a(n(97359));
            var i = a(n(205106));
            var u = a(n(261724));
            var s = n(548360);
            var c = a(n(667294));
            const d = (0, i.default)((0, l.default)(function* () {
                const e = yield Promise.all([n.e(8295), n.e(1702), n.e(9488), n.e(2790), n.e(275)]).then(n.bind(n, 915132));
                return (0, o.default)(e);
            }), "SendContactsModal");
            t.requireBundle = d;
            const f = (0, r.default)({
                loader: d,
                loading: e => c.default.createElement(u.default, {
                    title: s.fbt._("Send contacts", null, {
                        hk: "9ZMyz"
                    }),
                    error: Boolean(e.error)
                })
            });
            t.SendContactsModalLoadable = f;
        },
        854534: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = undefined;
            var l = n(35234);
            var r = n(700071);
            var o = n(351053);
            var i = n(394164);
            var u = n(780549);
            var s = n(174834);
            var c = n(877171);
            var d = a(n(908081));
            var f = a(n(324093));
            var p = n(626194);
            var m = n(811720);
            var g = n(512938);
            var h = a(n(570834));
            var E = a(n(335540));
            var b = n(81644);
            var v = n(97858);
            var y = a(n(237889));
            var C = n(180519);
            var M = n(454905);
            var k = n(548360);
            var _ = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var n = I(t);
                if (n && n.has(e)) {
                    return n.get(e);
                }
                var a = {};
                var l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e) {
                    if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                        if (o && (o.get || o.set)) {
                            Object.defineProperty(a, r, o);
                        } else {
                            a[r] = e[r];
                        }
                    }
                }
                a.default = e;
                if (n) {
                    n.set(e, a);
                }
                return a;
            }(n(667294));
            var w = a(n(156720));
            var S = a(n(637660));
            var P = n(808446);
            var O = n(655241);

            function I (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var n = new WeakMap();
                return (I = function (e) {
                    if (e) {
                        return n;
                    } else {
                        return t;
                    }
                })(e);
            }
            const T = {
                borderBottom: "qmxv8cnq",
                backgroundColor: "s9raicp8"
            };
            const A = {
                paddingTop: "n1yiu2zv",
                paddingEnd: "f9ovudaz",
                paddingBottom: "eb4rp10x",
                paddingStart: "gx1rr48f"
            };
            const N = {
                paddingTop: "n1yiu2zv",
                paddingEnd: "h5uqwbaf",
                paddingBottom: "eb4rp10x",
                paddingStart: "kjjye8e3",
                textAlign: "ljrqcn24"
            };
            const x = {
                overflowX: "gfz4du6o",
                overflowY: "r7fjleex"
            };
            const D = (0, r.ChatFactory)();
            const L = (0, g.FlatListFactory)();

            function R (e, t) {
                const {
                    onClose: n
                } = e;
                const a = () => o.ChatCollection.filter(e => e.archive && e.shouldAppearInList);
                const g = (0, O.useModelValues)(e.settings, ["showArchiveV2", "archive"]);
                const I = (0, S.default)(() => new h.default());
                const R = (0, S.default)(() => new y.default([], e => e.id.toString()));
                const j = (0, _.useRef)(null);
                const [B, F] = (0, _.useState)(a);
                const W = () => (0, v.archiveV2Supported)() && g.showArchiveV2;
                (0, P.useListener)(o.ChatCollection, [W() ? "sort" : null, "change:archive", "add", "remove"].filter(Boolean), () => {
                    F(a());
                });
                const G = e => {
                    R.current.setVal(e, false);
                };
                (0, P.useListener)(u.Cmd, "close_chat", e => {
                    if (e === R.current.getVal()) {
                        R.current.unset();
                    }
                });
                (0, P.useListener)(u.Cmd, "update_chatlist_selection", G);
                (0, _.useEffect)(() => {
                    if (W()) {
                        const e = a();
                        const t = new Map();
                        e.forEach(e => {
                            e.archiveAtMentionViewedInDrawer = true;
                            t.set(e.id.toString(), true);
                        });
                        (0, l.updateChatArchiveDrawer)(t);
                    }
                    if (j.current) {
                        E.default.focus(j.current);
                    }
                    const e = o.ChatCollection.toArray().find(e => e.active && e.archive);
                    if (e) {
                        G(e);
                    }
                }, []);
                const H = () => {
                    n();
                };
                const V = (e, t) => {
                    u.Cmd.openChatFromUnread(t).then(e => {
                        if (e) {
                            c.ComposeBoxActions.focus(t);
                        }
                    });
                    if (!((0, v.archiveV2Supported)() && g.archive.enabled)) {
                        H();
                    }
                };
                const U = e => {
                    e.preventDefault();
                    e.stopPropagation();
                    R.current.setNext(true);
                };
                const z = e => {
                    e.preventDefault();
                    e.stopPropagation();
                    R.current.setPrev(true);
                };
                let q;
                let Y;
                R.current.init(B, true);
                if ((() => {
                        const e = o.ChatCollection.some(e => e.archive);
                        return (0, v.archiveV2Supported)() && e;
                    })()) {
                    const e = k.fbt._("These chats stay archived when new messages are received. To change this experience, go to Settings > Chats on your phone.", null, {
                        hk: "2GTpJ"
                    });
                    const t = k.fbt._("These chats are unarchived when new messages are received. To change this experience, go to Settings > Chats on your phone.", null, {
                        hk: "2QaWm0"
                    });
                    q = _.default.createElement("div", {
                        className: (0, w.default)(T)
                    }, _.default.createElement("div", {
                        className: (0, w.default)(A)
                    }, _.default.createElement("div", {
                        className: (0, w.default)(N)
                    }, _.default.createElement(C.WDSTextMuted, {
                        as: "p"
                    }, g.showArchiveV2 ? e : t))));
                }
                Y = B.length > 0 ? _.default.createElement(b.HotKeys, {
                    ref: j,
                    handlers: {
                        down: U,
                        up: z
                    }
                }, q, _.default.createElement(L, {
                    className: (0, w.default)(x),
                    data: B.map(e => ({
                        itemKey: e.id.toString(),
                        chat: e,
                        height: (0, s.shouldShowNewSubgroupIdentity)(e.groupMetadata) ? i.SUBGROUP_V2_CHAT_CELL_HEIGHT : undefined
                    })),
                    flatListController: I.current,
                    direction: "vertical",
                    renderItem: e => _.default.createElement(D, {
                        chat: e.chat,
                        mode: r.Mode.LAST,
                        active: R.current,
                        onClick: V,
                        hideArchivedIcon: (0, v.archiveV2Supported)() && g.archive.enabled,
                        hideMuteIcon: W(),
                        hideMuteOption: W(),
                        ephemeralIcon: "chat-list",
                        showCommunityInfo: true
                    })
                })) : _.default.createElement(m.Archived, null);
                const K = (0, v.archiveV2Supported)() && g.archive.enabled ? k.fbt._("Archived", null, {
                    hk: "3HjzQg"
                }) : k.fbt._("Archived chats", null, {
                    hk: "23HH3O"
                });
                return _.default.createElement(d.default, {
                    ref: t,
                    theme: "archived"
                }, _.default.createElement(p.DrawerHeader, {
                    title: K,
                    onBack: H,
                    type: (0, M.topMenuRedesignEnabled)() ? p.DRAWER_HEADER_TYPE.TAB : p.DRAWER_HEADER_TYPE.LARGE,
                    menu: null
                }), _.default.createElement(f.default, {
                    flatListControllers: [I.current]
                }, Y));
            }
            var j = (0, _.forwardRef)(R);
            t.default = j;
        },
        201833: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ContactInfoBizBot1pSection = function () {
                const e = m.default.createElement(f.TextSpan, {
                    theme: "title"
                }, p.fbt._("AI from Meta", null, {
                    hk: "3vj17i"
                }));
                const t = m.default.createElement(f.TextDiv, {
                    theme: "muted"
                }, p.fbt._("AI from Meta receives chats and generates messages for this business. Click to learn more.", null, {
                    hk: "3iYvrS"
                }));
                const n = m.default.createElement(l.AiSignalIcon, {
                    color: d.SvgColorProp.SECONDARY,
                    width: 20,
                    height: 20
                });
                const a = m.default.createElement(f.TextSpan, {
                    theme: "title"
                }, p.fbt._("Manage AI chats", null, {
                    hk: "36q4IX"
                }));
                const g = m.default.createElement(f.TextDiv, {
                    theme: "muted"
                }, p.fbt._("Learn how to download or delete Meta's copy of your AI chats. Click to learn more.", null, {
                    hk: "3itwAo"
                }));
                const h = m.default.createElement(o.BotDataSharingIcon, {
                    color: d.SvgColorProp.SECONDARY,
                    width: 20,
                    height: 20
                });
                return m.default.createElement(m.default.Fragment, null, m.default.createElement(i.default, {
                    onClick: () => {
                        c.ModalManager.open(m.default.createElement(r.BizBot1pLearnMore, null));
                    },
                    icon: n,
                    title: e,
                    secondaryTitle: t
                }), m.default.createElement(i.default, {
                    onClick: () => {
                        (0, u.openExternalLink)((0, s.getBizBot1pLearnMoreUrl)());
                    },
                    icon: h,
                    title: a,
                    secondaryTitle: g
                }));
            };
            var l = n(321545);
            var r = n(461012);
            var o = n(279130);
            var i = a(n(306007));
            var u = n(753233);
            var s = n(258105);
            var c = n(114850);
            var d = n(220584);
            var f = n(180519);
            var p = n(548360);
            var m = a(n(667294));
        },
        551181: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ContactInfoBizBot3pSection = function () {
                const e = d.default.createElement(s.TextSpan, {
                    theme: "title"
                }, c.fbt._("About managing AI chats", null, {
                    hk: "31Ddga"
                }));
                const t = d.default.createElement(s.TextDiv, {
                    theme: "muted"
                }, c.fbt._("Learn about how to download and delete chats received by Meta and the developer", null, {
                    hk: "3TpyMa"
                }));
                const n = d.default.createElement(l.BotDataSharingIcon, {
                    color: u.SvgColorProp.SECONDARY,
                    width: 18,
                    height: 18
                });
                return d.default.createElement(r.default, {
                    onClick: () => {
                        (0, o.openExternalLink)((0, i.getBizBot3pDataSharingUrl)());
                    },
                    icon: n,
                    title: e,
                    secondaryTitle: t
                });
            };
            var l = n(279130);
            var r = a(n(306007));
            var o = n(753233);
            var i = n(258105);
            var u = n(220584);
            var s = n(180519);
            var c = n(548360);
            var d = a(n(667294));
        },
        302112: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = undefined;
            var l = a(n(348926));
            var r = n(698867);
            var o = n(751461);
            var i = n(356097);
            var u = n(811720);
            var s = n(978752);
            var c = a(n(75531));
            var d = n(281134);
            var f = n(982015);
            var p = n(280511);
            var m = n(548360);
            var g = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var n = E(t);
                if (n && n.has(e)) {
                    return n.get(e);
                }
                var a = {};
                var l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e) {
                    if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                        if (o && (o.get || o.set)) {
                            Object.defineProperty(a, r, o);
                        } else {
                            a[r] = e[r];
                        }
                    }
                }
                a.default = e;
                if (n) {
                    n.set(e, a);
                }
                return a;
            }(n(667294));
            var h = a(n(156720));

            function E (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var n = new WeakMap();
                return (E = function (e) {
                    if (e) {
                        return n;
                    } else {
                        return t;
                    }
                })(e);
            }
            const b = {
                paddingTop: "s7fqlky6",
                paddingEnd: "iffbo4e8",
                paddingBottom: "q1tx93la",
                paddingStart: "e8k79tju",
                fontSize: "ovllcyds",
                lineHeight: "durt31hz",
                color: "amgz1mtg"
            };

            function v (e, t) {
                const {
                    keptMsgs: n,
                    onClose: a,
                    chat: E
                } = e;
                const [v, y] = (0, s.useKicNux)(E);
                (0, g.useEffect)(() => {
                    if (v) {
                        y(p.TRIGGER_TYPE.KEPT_FOLDER_TAP_FIRST_TIME);
                    }
                }, []);
                (0, g.useEffect)(() => {
                    (0, l.default)(function* () {
                        const e = new o.DisappearingMessageKeepInChatWamEvent({
                            kicActionName: d.KIC_ACTION_NAME_TYPE.VIEW_KEPT_MESSAGES,
                            kicEntryPoint: f.KIC_ENTRY_POINT_TYPE.CHAT_INFO,
                            messagesInFolder: n.length,
                            isAGroup: E == null ? undefined : E.isGroup
                        });
                        var t;
                        if (E == null ? undefined : E.isGroup) {
                            e.set({
                                isAdmin: E == null || (t = E.groupMetadata) === null || t === undefined ? undefined : t.participants.iAmAdmin()
                            });
                        }
                        if (E) {
                            const t = yield(0, r.getChatThreadID)(E == null ? undefined : E.id.toJid());
                            if (t != null) {
                                e.set({
                                    threadId: t
                                });
                            }
                        }
                        e.commit();
                    })();
                }, []);
                const C = m.fbt._("Kept messages", null, {
                    hk: "iGco8"
                });
                const M = g.default.createElement(u.KeptMsgs, null);
                let k = null;
                var _;
                if (E == null ? undefined : E.isGroup) {
                    k = ((_ = E.groupMetadata) === null || _ === undefined ? undefined : _.restrict) ? g.default.createElement("div", {
                        className: (0, h.default)(b)
                    }, m.fbt._("These messages are kept in the chat for everyone. Only admins can keep or unkeep messages in this group.", null, {
                        hk: "2P8fIj"
                    })) : g.default.createElement("div", {
                        className: (0, h.default)(b)
                    }, m.fbt._("These messages are kept in the chat for everyone. Everyone can keep or unkeep a message. Group admins can limit this.", null, {
                        hk: "3VYBCh"
                    }));
                } else {
                    k = g.default.createElement("div", {
                        className: (0, h.default)(b)
                    }, m.fbt._("These messages are kept in the chat for everyone. Everyone can keep or unkeep a message.", null, {
                        hk: "3sFKOP"
                    }));
                }
                return g.default.createElement(c.default, {
                    testid: "kept-drawer",
                    ref: t,
                    msgCollection: n,
                    onClose: a,
                    chat: E,
                    title: C,
                    emptyListText: M,
                    descriptionSection: k,
                    displayType: i.DISPLAY_TYPE.KEPT_MSGS
                });
            }
            var y = (0, g.forwardRef)(v);
            t.default = y;
        },
        306472: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.TABS = t.MediaGalleryDrawer = undefined;
            var l = a(n(252628));
            var r = n(328620);
            var o = a(n(638938));
            var i = n(409623);
            var u = a(n(321574));
            var s = a(n(908081));
            var c = a(n(324093));
            var d = n(626194);
            var f = a(n(671597));
            var p = a(n(482530));
            var m = n(97858);
            var g = n(913257);
            var h = a(n(930440));
            var E = a(n(285192));
            var b = a(n(434377));
            var v = n(392632);
            var y = a(n(844453));
            var C = n(548360);
            var M = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var n = S(t);
                if (n && n.has(e)) {
                    return n.get(e);
                }
                var a = {};
                var l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e) {
                    if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                        if (o && (o.get || o.set)) {
                            Object.defineProperty(a, r, o);
                        } else {
                            a[r] = e[r];
                        }
                    }
                }
                a.default = e;
                if (n) {
                    n.set(e, a);
                }
                return a;
            }(n(667294));
            var k = a(n(156720));
            var _ = a(n(261716));
            var w = a(n(637660));

            function S (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var n = new WeakMap();
                return (S = function (e) {
                    if (e) {
                        return n;
                    } else {
                        return t;
                    }
                })(e);
            }
            const P = {
                display: "p357zi0d",
                flexGrow: "ggj6brxn",
                flexShrink: "m0h2a7mj",
                flexBasis: "rjo8vgbg",
                flexDirection: "f8m0rgwh",
                height: "ppled2lx"
            };
            const O = {
                position: "lhggkp7q",
                top: "qq0sjtgm",
                start: "tkdu00h0",
                width: "ln8gz9je",
                height: "ppled2lx"
            };
            const I = n(76672)({
                MEDIA: "media",
                DOCS: "docs",
                LINKS: "links",
                PRODUCTS: "products"
            });
            t.TABS = I;
            const T = e => {
                const {
                    selected: t,
                    onSearch: n
                } = e;
                switch (t) {
                    case I.MEDIA:
                    case I.LINKS:
                    case I.DOCS:
                        return M.default.createElement(i.ListSearch, {
                            onSearch: n,
                            loading: false,
                            listFilterEnabled: false,
                            chatlistFilterEnabled: false,
                            mode: o.default.Chatlist,
                            placeholder: C.fbt._("Search", null, {
                                hk: "418EDN"
                            })
                        });
                    default:
                        return null;
                }
            };
            const A = e => {
                switch (e.selectedTab) {
                    case I.MEDIA:
                        return M.default.createElement(p.default, {
                            chat: e.chat,
                            mediaMsgs: e.chat.getMediaMsgs(),
                            selectable: e.selectable,
                            onMessageSelect: e.onMessageSelect,
                            selectedMessages: e.selectedMessages,
                            fullCollection: true,
                            isFilterEnabled: e.isFilterEnabled,
                            filterText: e.filterText
                        });
                    case I.LINKS:
                        return M.default.createElement(f.default, {
                            chat: e.chat,
                            linkMsgs: e.chat.getLinkMsgs(),
                            selectable: e.selectable,
                            onMessageSelect: e.onMessageSelect,
                            selectedMessages: e.selectedMessages,
                            isFilterEnabled: e.isFilterEnabled,
                            filterText: e.filterText
                        });
                    case I.DOCS:
                        return M.default.createElement(u.default, {
                            chat: e.chat,
                            docMsgs: e.chat.getDocMsgs(),
                            selectable: e.selectable,
                            onMessageSelect: e.onMessageSelect,
                            selectedMessages: e.selectedMessages,
                            isFilterEnabled: e.isFilterEnabled,
                            filterText: e.filterText
                        });
                    case I.PRODUCTS:
                        return M.default.createElement(E.default, {
                            chat: e.chat,
                            productMsgs: e.chat.getProductMsgs(),
                            selectable: e.selectable,
                            onMessageSelect: e.onMessageSelect,
                            selectedMessages: e.selectedMessages,
                            onProductDetail: e.onProductDetail,
                            setScrollOffset: e.setScrollOffset,
                            scrollOffset: e.scrollOffset
                        });
                }
            };
            const N = (0, M.forwardRef)((e, t) => {
                const {
                    chat: n,
                    onProductDetail: a,
                    setProductsScrollOffset: o,
                    initialTab: i = I.MEDIA,
                    productsScrollOffset: u = 0
                } = e;
                const [f, p] = (0, M.useState)(i);
                const [E, S] = (0, M.useState)(null);
                const [N, x] = (0, M.useState)(false);
                const [D, L] = (0, _.default)();
                const R = (0, m.mediaLinksDocsFilteringEnabled)();
                const j = (0, w.default)(() => new h.default([], e => e.id.toString()));
                const B = () => {
                    if (N) {
                        j.current.unsetAll();
                        x(false);
                    }
                };
                const F = (0, M.useCallback)(e => {
                    const t = I.cast(e);
                    if (t == null) {
                        return;
                    }
                    const n = (0, l.default)(I).indexOf(f);
                    const a = (0, l.default)(I).indexOf(t);
                    if (n !== a) {
                        j.current.unsetAll();
                    }
                    p(t);
                    S(a > n ? "right" : "left");
                    x(false);
                }, [j, f]);
                const W = (0, M.useMemo)(() => {
                    const e = [{
                        id: I.MEDIA,
                        title: C.fbt._("Media", null, {
                            hk: "2BqnhF"
                        })
                    }, {
                        id: I.DOCS,
                        title: C.fbt._("Docs", null, {
                            hk: "M40SP"
                        })
                    }, {
                        id: I.LINKS,
                        title: C.fbt._("Links", null, {
                            hk: "3uaiIi"
                        })
                    }];
                    e.push({
                        id: I.PRODUCTS,
                        title: C.fbt._("Products", null, {
                            hk: "3Ky71N"
                        })
                    });
                    return M.default.createElement(b.default, {
                        tabConfigs: e,
                        selectedId: f,
                        onSelect: F,
                        testIdPrefix: "gallery-tab"
                    });
                }, [f, F]);
                const G = function (e) {
                    switch (e) {
                        case I.MEDIA:
                            return g.MultiSelectBarEntryPoint.MEDIA;
                        case I.DOCS:
                            return g.MultiSelectBarEntryPoint.DOCS;
                        case I.LINKS:
                            return g.MultiSelectBarEntryPoint.LINKS;
                        case I.PRODUCTS:
                            return g.MultiSelectBarEntryPoint.PRODUCTS;
                    }
                }(f);
                const H = [I.MEDIA, I.DOCS].includes(f);
                const V = N ? M.default.createElement(v.UIE, {
                    displayName: "MediaMultiSelect",
                    escapable: true,
                    requestDismiss: B
                }, M.default.createElement(g.MultiSelectBar, {
                    chat: n,
                    noSortOnForward: true,
                    theme: "mediaGallery",
                    toastPosition: r.ToastPosition.RIGHT,
                    downloadButton: H,
                    selectedMessages: j.current,
                    onCancel: B,
                    entryPoint: G
                })) : null;
                const U = E === "right" ? "slide-forward" : "slide-back";
                return M.default.createElement(s.default, {
                    ref: t,
                    theme: "gallery",
                    testid: "media-gallery-drawer",
                    tsNavigationData: {
                        surface: "media-drawer"
                    }
                }, M.default.createElement(d.DrawerHeader, {
                    title: " ",
                    onBack: e.onBack,
                    rtlFixIfOnDarwin: true,
                    type: d.DRAWER_HEADER_TYPE.MULTI_MEDIA_GALLERY,
                    focusBackOrCancel: true
                }), V, W, R ? M.default.createElement(T, {
                    selected: f,
                    onSearch: L
                }) : null, M.default.createElement(c.default, {
                    "data-list-scroll-container": true
                }, M.default.createElement(y.default, {
                    transitionName: U,
                    className: (0, k.default)(P)
                }, M.default.createElement("div", {
                    className: (0, k.default)(O),
                    key: f
                }, M.default.createElement("div", {
                    className: (0, k.default)(P)
                }, M.default.createElement(A, {
                    chat: n,
                    selectable: N,
                    onMessageSelect: (e, t) => {
                        if (!N) {
                            x(true);
                        }
                        j.current.setVal(e, t);
                        if (j.current.getSelected().length === 0) {
                            B();
                        }
                    },
                    selectedMessages: j.current,
                    fullCollection: true,
                    isFilterEnabled: R,
                    filterText: D,
                    onProductDetail: a,
                    setScrollOffset: o,
                    scrollOffset: u,
                    selectedTab: f,
                    mediaMsgs: n.getMediaMsgs(),
                    linkMsgs: n.getLinkMsgs(),
                    docMsgs: n.getDocMsgs(),
                    productMsgs: n.getProductMsgs()
                }))))));
            });
            t.MediaGalleryDrawer = N;
            N.displayName = "MediaGalleryDrawer";
        },
        266466: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const [t, n] = (0, s.useState)(false);
                let a;
                let d;
                if (e.isBusiness) {
                    a = u.fbt._("This message will be forwarded to WhatsApp. This business will not be notified.", null, {
                        hk: "1N7YEc"
                    });
                    d = u.fbt._("Block business", null, {
                        hk: "3hFIF3"
                    });
                } else if (e.isBizBot3p) {
                    a = u.fbt._("This message will be forwarded to WhatsApp. This AI will not be notified.", null, {
                        hk: "4uA7zj"
                    });
                    d = u.fbt._("Block AI", null, {
                        hk: "4znwe4"
                    });
                } else {
                    a = u.fbt._("This message will be forwarded to WhatsApp. This contact will not be notified.", null, {
                        hk: "2qS1tP"
                    });
                    d = u.fbt._("Block contact", null, {
                        hk: "41X9mL"
                    });
                }
                return s.default.createElement(r.ConfirmPopup, {
                    onOK: function () {
                        e.onReport(t);
                    },
                    okText: u.fbt._("Report", null, {
                        hk: "18ssTb"
                    }),
                    onCancel: e.onCancel,
                    title: e.title
                }, s.default.createElement("div", {
                    className: (0, c.default)(f.section, i.uiMargin.top12, i.uiMargin.end0, f.border)
                }, s.default.createElement(l.CheckBox, {
                    onChange: () => n(e => !e),
                    checked: t,
                    id: "menu-icon-report-spam"
                }), s.default.createElement(o.TextLabel, {
                    xstyle: f.checkboxLabel,
                    htmlFor: "menu-icon-report-spam"
                }, d)), s.default.createElement(o.TextParagraph, {
                    xstyle: f.section,
                    color: "muted"
                }, a));
            };
            var l = n(468926);
            var r = n(103440);
            var o = n(180519);
            var i = n(676345);
            var u = n(548360);
            var s = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var n = d(t);
                if (n && n.has(e)) {
                    return n.get(e);
                }
                var a = {};
                var l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e) {
                    if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                        if (o && (o.get || o.set)) {
                            Object.defineProperty(a, r, o);
                        } else {
                            a[r] = e[r];
                        }
                    }
                }
                a.default = e;
                if (n) {
                    n.set(e, a);
                }
                return a;
            }(n(667294));
            var c = a(n(156720));

            function d (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var n = new WeakMap();
                return (d = function (e) {
                    if (e) {
                        return n;
                    } else {
                        return t;
                    }
                })(e);
            }
            const f = {
                section: {
                    marginBottom: "t4zgqcuo"
                },
                checkboxLabel: {
                    marginStart: "fooq7fky"
                },
                border: {
                    paddingBottom: "dledyozo",
                    borderBottom: "j4zbmt6h"
                }
            };
        },
        755140: (e, t, n) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const t = a.ChatCollection.getActive();
                (0, p.useEffect)(() => {
                    if (e.entryPoint) {
                        (0, r.logPnhRequestRevealActionHelper)(c.PNH_CHAT_TYPE_TYPE.CTWA, d.PNH_MESSAGE_CHAT_PARTY.BIZ, s.PNH_ACTION_TYPE.REQUEST_DIALOG_APPEAR, e.entryPoint);
                    }
                }, [e.entryPoint]);
                const n = f.fbt._("Request phone number?", null, {
                    hk: "1BOtdo"
                });
                const m = f.fbt._("This person's phone number is not shared in this chat. You can request for their phone number if you'd like to save them to your contacts.", null, {
                    hk: "3SHZ6I"
                });
                const g = f.fbt._("Send Request", null, {
                    hk: "4tsuDY"
                });
                const h = f.fbt._("Cancel", null, {
                    hk: "37A1CY"
                });
                return p.default.createElement(l.ConfirmPopup, {
                    onOK: () => {
                        if (t) {
                            (0, i.sendRequestPhoneNumber)((0, u.unproxy)(t));
                            if (e.entryPoint != null) {
                                (0, r.logPnhRequestRevealActionHelper)(c.PNH_CHAT_TYPE_TYPE.CTWA, d.PNH_MESSAGE_CHAT_PARTY.BIZ, s.PNH_ACTION_TYPE.SEND_REQUEST, e.entryPoint);
                            }
                        }
                        o.ModalManager.close();
                    },
                    okText: g,
                    onCancel: () => o.ModalManager.close(),
                    cancelText: h,
                    title: n
                }, m);
            };
            var a = n(351053);
            var l = n(103440);
            var r = n(543081);
            var o = n(114850);
            var i = n(942319);
            var u = n(163139);
            var s = n(334724);
            var c = n(1373);
            var d = n(262553);
            var f = n(548360);
            var p = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var n = m(t);
                if (n && n.has(e)) {
                    return n.get(e);
                }
                var a = {};
                var l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e) {
                    if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                        if (o && (o.get || o.set)) {
                            Object.defineProperty(a, r, o);
                        } else {
                            a[r] = e[r];
                        }
                    }
                }
                a.default = e;
                if (n) {
                    n.set(e, a);
                }
                return a;
            }(n(667294));

            function m (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var n = new WeakMap();
                return (m = function (e) {
                    if (e) {
                        return n;
                    } else {
                        return t;
                    }
                })(e);
            }
        },
        735848: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function () {
                return y.default.createElement(r.ConfirmPopup, {
                    title: v.fbt._("About AI Support Assistant", null, {
                        hk: "13m6JU"
                    }),
                    okText: (0, u.default)("Ok"),
                    onOK: () => d.ModalManager.close(),
                    cancelText: (0, u.default)("Learn more"),
                    onCancel: () => {
                        (0, o.openExternalLink)((0, i.getSagaFaqUrl)());
                    }
                }, y.default.createElement(s.FlexColumn, {
                    align: "stretch"
                }, y.default.createElement(c.default, {
                    xstyle: h.uiMargin.vert10,
                    grow: 1
                }, y.default.createElement(E.WDSCell, {
                    interactive: false,
                    colorScheme: "lightest",
                    size: "medium",
                    detailLeft: y.default.createElement(f.SagaHelpIcon, {
                        color: g.SvgColorProp.TEAL_LIGHTER
                    }),
                    primary: y.default.createElement(b.WDSTextTitle, null, v.fbt._("AI uses official help content", null, {
                        hk: "gpKd"
                    })),
                    secondary: y.default.createElement(b.WDSTextMuted, {
                        textWrap: "wrap"
                    }, v.fbt._("AI assistant uses WhatsApp help content to generate answers for your questions.", null, {
                        hk: "1iUEXr"
                    }))
                })), y.default.createElement(c.default, {
                    xstyle: h.uiMargin.vert10,
                    grow: 1
                }, y.default.createElement(E.WDSCell, {
                    interactive: false,
                    colorScheme: "lightest",
                    size: "medium",
                    detailLeft: y.default.createElement(p.SagaMessageIcon, {
                        color: g.SvgColorProp.TEAL_LIGHTER
                    }),
                    primary: y.default.createElement(b.WDSTextTitle, null, v.fbt._("AI chats naturally with you", null, {
                        hk: "1ulA6D"
                    })),
                    secondary: y.default.createElement(b.WDSTextMuted, {
                        textWrap: "wrap"
                    }, v.fbt._("You can simply chat with AI assistant in a natural conversation to get your questions answered.", null, {
                        hk: "3EHsmT"
                    }))
                })), y.default.createElement(c.default, {
                    xstyle: h.uiMargin.top10,
                    grow: 1
                }, y.default.createElement(E.WDSCell, {
                    interactive: false,
                    colorScheme: "lightest",
                    size: "medium",
                    detailLeft: y.default.createElement(l.AiSignalIcon, {
                        color: g.SvgColorProp.TEAL_LIGHTER,
                        height: 24,
                        width: 24
                    }),
                    primary: y.default.createElement(b.WDSTextTitle, null, v.fbt._("This is a service from Meta", null, {
                        hk: "qUAif"
                    })),
                    secondary: y.default.createElement(b.WDSTextMuted, {
                        textWrap: "wrap"
                    }, v.fbt._("Some messages are generated by AI using a secure service from Meta. They are marked with {icon}.", [v.fbt._param("icon", y.default.createElement(m.default, {
                        height: 16,
                        width: 16
                    }))], {
                        hk: "jNDS3"
                    }))
                }))));
            };
            var l = n(321545);
            var r = n(103440);
            var o = n(753233);
            var i = n(258105);
            var u = a(n(395767));
            var s = n(690495);
            var c = a(n(469733));
            var d = n(114850);
            var f = n(217864);
            var p = n(373732);
            var m = a(n(61476));
            var g = n(220584);
            var h = n(676345);
            var E = n(219753);
            var b = n(851488);
            var v = n(548360);
            var y = a(n(667294));
        },
        9729: (e, t, n) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function () {
                return {
                    isVoiceCallEnabled: false,
                    isVideoCallEnabled: false,
                    canStartVoiceCall: false,
                    canStartVideoCall: false,
                    startVoiceCall: () => {},
                    startVideoCall: () => {}
                };
            };
            n(445729);
            n(660666);
            n(667294);
            n(808446);
        },
        791865: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = undefined;
            var l = a(n(896322));
            var r = a(n(35644));
            a(n(306007));
            var o = n(464659);
            var i = a(n(740681));
            var u = n(63014);
            var s = n(780549);
            var c = n(184385);
            var d = a(n(908081));
            var f = a(n(324093));
            var p = n(36045);
            var m = n(626194);
            var g = a(n(209064));
            var h = n(673509);
            var E = a(n(409558));
            var b = n(258105);
            var v = a(n(570834));
            var y = n(97858);
            var C = n(114850);
            var M = n(111367);
            n(407024);
            var k = n(163139);
            n(220584);
            var _ = n(180519);
            var w = n(521394);
            var S = n(548360);
            var P = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var n = D(t);
                if (n && n.has(e)) {
                    return n.get(e);
                }
                var a = {};
                var l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e) {
                    if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                        if (o && (o.get || o.set)) {
                            Object.defineProperty(a, r, o);
                        } else {
                            a[r] = e[r];
                        }
                    }
                }
                a.default = e;
                if (n) {
                    n.set(e, a);
                }
                return a;
            }(n(667294));
            var O = a(n(156720));
            var I = a(n(969651));
            var T = a(n(637660));
            var A = n(808446);
            var N = n(655241);
            var x = a(n(321201));

            function D (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var n = new WeakMap();
                return (D = function (e) {
                    if (e) {
                        return n;
                    } else {
                        return t;
                    }
                })(e);
            }
            const L = {
                flexGrow: "tvf2evcx",
                flexShrink: "oq44ahr5",
                flexBasis: "lb5m6g5c",
                paddingBottom: "s9fl9ege"
            };

            function R (e, t) {
                var n;
                var a;
                const {
                    onClose: D,
                    onMediaGallery: R
                } = e;
                const j = (0, I.default)();
                const B = (0, x.default)();
                const F = (0, T.default)(() => new v.default());
                const W = (0, N.useModelValues)(e.chat, ["id", "groupMetadata"]);
                (0, A.useListener)((n = W.groupMetadata) === null || n === undefined ? undefined : n.participants, ["add", "remove", "sort", "reset"], j);
                let G = null;
                if (R) {
                    G = P.default.createElement(i.default, {
                        onMediaGallery: R,
                        chat: (0, k.unproxy)(W)
                    });
                }
                const H = P.default.createElement(o.ChatInfoDrawerButtonsSection, null, P.default.createElement(p.DrawerButtonSimple, {
                    testid: "li-delete-broadcast",
                    icon: P.default.createElement(c.DeleteIcon, null),
                    color: "danger",
                    theme: "chat-info",
                    onClick: () => {
                        s.Cmd.deleteOrExitChat((0, k.unproxy)(W));
                    }
                }, S.fbt._("Delete broadcast list", null, {
                    hk: "3xAxXY"
                })));
                let V;
                if ((a = W.groupMetadata) === null || a === undefined ? undefined : a.creation) {
                    V = u.Clock.createdStr(W.groupMetadata.creation);
                    V = P.default.createElement(_.TextDiv, {
                        theme: "small"
                    }, V);
                } else {
                    V = null;
                }
                const U = P.default.createElement(E.default, {
                    highlightSurface: w.PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_BROADCAST,
                    onClick: () => {
                        if ((0, y.isPrivacyNarrativeV1Enabled)() && (0, M.shouldShowNewE2eInfoModal)((0, k.unproxy)(W))) {
                            const e = (0, b.getE2EFaqUrl)();
                            C.ModalManager.open(P.default.createElement(h.E2eInfoModalV2, {
                                highlightSurface: w.PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_BROADCAST,
                                url: e
                            }));
                        } else {
                            C.ModalManager.open(P.default.createElement(g.default, {
                                highlightSurface: w.PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_BROADCAST,
                                chatId: W.id,
                                e2eSubtype: "info_encrypted"
                            }));
                        }
                    },
                    text: S.fbt._("Messages are end-to-end encrypted. Click to learn more.", null, {
                        hk: "1iarlI"
                    })
                });
                return P.default.createElement(d.default, {
                    ref: t,
                    key: "contact-info-modal",
                    theme: "striped"
                }, P.default.createElement(m.DrawerHeader, {
                    type: m.DRAWER_HEADER_TYPE.SMALL,
                    rtlFixIfOnDarwin: true,
                    onCancel: () => {
                        if (D) {
                            D();
                        } else if (!(B == null)) {
                            B.requestDismiss();
                        }
                    }
                }, P.default.createElement(_.TextDiv, {
                    theme: "title"
                }, S.fbt._("Broadcast list info", null, {
                    hk: "3S4EgV"
                })), V), P.default.createElement(f.default, {
                    flatListControllers: [F.current]
                }, P.default.createElement("div", {
                    className: (0, O.default)(L)
                }, P.default.createElement(r.default, {
                    chat: (0, k.unproxy)(W)
                }), G, undefined, P.default.createElement(o.ChatInfoDrawerSection, null, U), P.default.createElement(l.default, {
                    chat: (0, k.unproxy)(W),
                    flatListController: F.current
                }), H)));
            }
            var j = (0, P.forwardRef)(R);
            t.default = j;
        },
        896322: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                var t;
                var n;
                const a = (0, m.default)();
                const c = (t = e.chat.groupMetadata) === null || t === undefined ? undefined : t.participants;
                (0, g.useListener)(c, "add remove reset", a);
                const h = (0, p.useMemo)(() => c ? c.map(e => ({
                    itemKey: e.id.toString(),
                    participant: e,
                    height: 68
                })) : [], [c]);
                const b = (e, t) => {
                    if (!(0, d.isMePrimary)(t.id)) {
                        (0, s.findChat)(t.id, "broadcastInfoRecipients").then(function (e) {
                            o.Cmd.openChatFromUnread(e).then(t => {
                                if (t) {
                                    i.ComposeBoxActions.focus(e);
                                }
                            });
                        });
                    }
                };
                const v = (n = c == null ? undefined : c.length) !== null && n !== undefined ? n : 0;
                const y = f.fbt._({
                    "*": "{count} recipients",
                    _1: "1 recipient"
                }, [f.fbt._plural(v, "count")], {
                    hk: "3Uwuzx"
                });
                return p.default.createElement(r.ChatInfoDrawerListSection, {
                    title: y
                }, p.default.createElement(E, {
                    flatListController: e.flatListController,
                    direction: "vertical",
                    forceConsistentRenderCount: false,
                    data: h,
                    renderItem: e => {
                        const {
                            participant: t
                        } = e;
                        const n = u.ContactCollection.gadd(t.id);
                        return p.default.createElement(l.Contact, {
                            contact: n,
                            theme: "chat-info",
                            admin: !!t.isAdmin,
                            onClick: b,
                            key: t.id.toString(),
                            waitIdle: true
                        });
                    }
                }));
            };
            var l = n(822652);
            var r = n(464659);
            var o = n(780549);
            var i = n(877171);
            var u = n(177938);
            var s = n(581354);
            var c = n(512938);
            var d = n(459857);
            var f = n(548360);
            var p = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var n = h(t);
                if (n && n.has(e)) {
                    return n.get(e);
                }
                var a = {};
                var l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e) {
                    if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                        if (o && (o.get || o.set)) {
                            Object.defineProperty(a, r, o);
                        } else {
                            a[r] = e[r];
                        }
                    }
                }
                a.default = e;
                if (n) {
                    n.set(e, a);
                }
                return a;
            }(n(667294));
            var m = a(n(969651));
            var g = n(808446);

            function h (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var n = new WeakMap();
                return (h = function (e) {
                    if (e) {
                        return n;
                    } else {
                        return t;
                    }
                })(e);
            }
            const E = (0, c.FlatListFactory)();
        },
        35644: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                var t;
                var n;
                const a = (t = e.chat.groupMetadata) === null || t === undefined ? undefined : t.participants;
                const b = (0, g.useModelValues)(e.chat.contact, ["name"]);
                const v = (0, p.default)();
                (0, m.useListener)(a, "add remove reset", v);
                const y = (n = a == null ? undefined : a.length) !== null && n !== undefined ? n : 0;
                const C = c.fbt._("Broadcast List", null, {
                    hk: "46AT9o"
                }).toString() + " · " + c.fbt._({
                    "*": "{count} recipients",
                    _1: "1 recipient"
                }, [c.fbt._plural(y, "count")], {
                    hk: "3Uwuzx"
                }).toString();
                const M = b.name ? d.default.createElement(u.Name, {
                    contact: e.chat.contact,
                    selectable: true
                }) : c.fbt._("Untitled List", null, {
                    hk: "fYALp"
                });
                return d.default.createElement(o.default, {
                    theme: "padding-large"
                }, d.default.createElement("div", {
                    className: (0, f.default)(h)
                }, d.default.createElement(r.DetailImage, {
                    id: e.chat.id,
                    size: r.DetailImageSize.Large
                })), d.default.createElement(i.FlexColumn, {
                    align: "center"
                }, d.default.createElement(s.TextHeader, {
                    level: "2",
                    size: "24"
                }, M), d.default.createElement("div", {
                    className: (0, f.default)(E)
                }, d.default.createElement(l.SelectableSpan, {
                    dir: "auto",
                    selectable: true
                }, d.default.createElement(s.TextSpan, {
                    size: "16",
                    color: "secondary"
                }, C)))));
            };
            var l = n(306703);
            var r = n(23641);
            var o = a(n(969358));
            var i = n(690495);
            var u = n(21645);
            var s = n(180519);
            var c = n(548360);
            var d = a(n(667294));
            var f = a(n(156720));
            var p = a(n(969651));
            var m = n(808446);
            var g = n(655241);
            const h = {
                display: "p357zi0d",
                justifyContent: "ac2vgrno",
                marginBottom: "du8bjn1j"
            };
            const E = {
                lineHeight: "a4ywakfo",
                marginTop: "g1eqewly"
            };
        },
        988808: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                let {
                    contact: t
                } = e;
                const n = t.getStatus();
                const {
                    status: a
                } = (0, E.useModelValues)(n, ["status"]);
                const [v, y, C, M, k] = (0, h.useContactValues)(t.id, [u.getTextStatusString, u.getTextStatusEmoji, u.getTextStatusLastUpdateTime, u.getTextStatusExpiryTs, u.getTextStatusEphemeralDuration]);
                const _ = (0, f.shouldDisplayTextStatus)(v, y, C, M, k);
                if (p.default.isPSA(t.id)) {
                    const e = (0, s.isBlueEnabled)() ? m.fbt._("Official chats from WhatsApp will always have a blue verified badge. And we'll never ask for your personal information.", null, {
                        hk: "Q5o0r"
                    }).toString() : m.fbt._("Official chats from WhatsApp will always have a green \"verified\" checkmark. And we'll never ask for your personal information.", null, {
                        hk: "8bwzI"
                    }).toString();
                    return g.default.createElement(l.ChatInfoDrawerSection, {
                        titleTestId: "section-about",
                        title: ""
                    }, g.default.createElement(c.TextSpan, {
                        theme: "title",
                        size: "16"
                    }, m.fbt._("Hi! Welcome to this official WhatsApp chat.", null, {
                        hk: "1fpFwJ"
                    }).toString(), g.default.createElement("br", null), m.fbt._("This is where you can get tips, see announcements, and hear about the newest features. Straight from us.", null, {
                        hk: "4gcJHK"
                    }).toString(), g.default.createElement("br", null), e), g.default.createElement("br", null), g.default.createElement("br", null), g.default.createElement(i.ExternalLink, {
                        href: "https://whatsapp.com/",
                        xstyle: b.whatsapp_url
                    }, "https://whatsapp.com/"));
                }
                if (!(0, d.receiveTextStatusEnabled)() && a === "") {
                    return null;
                }
                let w;
                if ((0, d.receiveTextStatusEnabled)()) {
                    if (_ === true) {
                        w = m.fbt._("", null, {
                            hk: "dWrS1"
                        });
                    } else if ((0, f.hasCustomAboutSet)(n)) {
                        w = m.fbt._("About", null, {
                            hk: "4qoAfH"
                        });
                    }
                } else {
                    w = m.fbt._("About", null, {
                        hk: "4qoAfH"
                    });
                }
                return g.default.createElement(l.ChatInfoDrawerSection, {
                    titleTestId: "section-about",
                    title: w
                }, g.default.createElement(c.TextSpan, {
                    theme: "title",
                    size: "16"
                }, (0, d.receiveTextStatusEnabled)() ? g.default.createElement(o.default, {
                    contactId: t.id
                }) : g.default.createElement(r.default, {
                    id: t.id
                })));
            };
            var l = n(464659);
            var r = a(n(203528));
            var o = a(n(675383));
            var i = n(753233);
            var u = n(714574);
            var s = n(97858);
            var c = n(180519);
            var d = n(491805);
            var f = n(596328);
            var p = a(n(124928));
            var m = n(548360);
            var g = a(n(667294));
            a(n(156720));
            var h = n(379811);
            var E = n(655241);
            const b = {
                whatsapp_url: {
                    color: "hafg4y3t"
                }
            };
        },
        876588: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const [t] = (0, E.useContactValues)(e.contact.id, [p.getCommonGroups]);
                const [n, a] = (0, h.useState)(true);
                (0, h.useEffect)(() => {
                    (0, d.findCommonGroups)(e.contact).catch(e => {
                        __LOG__(4, true, new Error(), true)`get from participants table failed`;
                        SEND_LOGS("get from participants table failed when finding common groups: " + e);
                        throw (0, m.default)("get from participants table failed");
                    });
                }, []);
                const f = (0, b.default)(t, ["add", "remove"], () => {
                    if (!t) {
                        return [];
                    }
                    let e = t;
                    if (e.length > o.INFO_DRAWER_MAX_ROWS && n) {
                        e = e.slice(0, o.INFO_DRAWER_MAX_ROWS);
                    }
                    return e.map(e => ({
                        itemKey: e.id.toString(),
                        chat: e,
                        height: (0, s.shouldShowNewSubgroupIdentity)(e.groupMetadata) ? r.SUBGROUP_V2_CHAT_CELL_HEIGHT : 68
                    }));
                }, [n]);
                const v = () => {
                    a(false);
                };
                const C = (t, n) => {
                    u.Cmd.openChatFromUnread(n).then(e => {
                        if (e) {
                            c.ComposeBoxActions.focus(n);
                        }
                    });
                    e.onClose();
                };
                if (!t || t.length === 0) {
                    return null;
                }
                let M;
                if (t.length > o.INFO_DRAWER_MAX_ROWS && n) {
                    const e = t.length - o.INFO_DRAWER_MAX_ROWS;
                    M = h.default.createElement(i.default, {
                        numMore: e,
                        onClick: v
                    });
                }
                const k = g.fbt._({
                    "*": "{number} groups in common",
                    _1: "1 group in common"
                }, [g.fbt._plural(t.length, "number")], {
                    hk: "2bl4a5"
                });
                return h.default.createElement(o.ChatInfoDrawerListSection, {
                    titleTestId: "section-common-groups",
                    title: k
                }, h.default.createElement(y, {
                    flatListController: e.flatListController,
                    direction: "vertical",
                    forceConsistentRenderCount: false,
                    data: f,
                    renderItem: e => {
                        const {
                            chat: t
                        } = e;
                        return h.default.createElement(l.Chat, {
                            chat: t,
                            theme: "chat-info",
                            mode: l.Mode.INFO,
                            onClick: C,
                            key: t.id.toString(),
                            showCommunityInfo: true
                        });
                    }
                }), M);
            };
            var l = n(700071);
            var r = n(394164);
            var o = n(464659);
            var i = a(n(831584));
            var u = n(780549);
            var s = n(174834);
            var c = n(877171);
            var d = n(701777);
            var f = n(512938);
            var p = n(714574);
            var m = a(n(556869));
            var g = n(548360);
            var h = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var n = v(t);
                if (n && n.has(e)) {
                    return n.get(e);
                }
                var a = {};
                var l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e) {
                    if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                        if (o && (o.get || o.set)) {
                            Object.defineProperty(a, r, o);
                        } else {
                            a[r] = e[r];
                        }
                    }
                }
                a.default = e;
                if (n) {
                    n.set(e, a);
                }
                return a;
            }(n(667294));
            var E = n(379811);
            var b = a(n(524578));

            function v (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var n = new WeakMap();
                return (v = function (e) {
                    if (e) {
                        return n;
                    } else {
                        return t;
                    }
                })(e);
            }
            const y = (0, f.FlatListFactory)();
        },
        655237: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = undefined;
            var l = a(n(967154));
            var r = a(n(81109));
            var o = n(122583);
            var i = n(15842);
            var u = n(632157);
            var s = n(174662);
            var c = n(984330);
            var d = a(n(853417));
            var f = a(n(973366));
            var p = n(72696);
            var m = n(354458);
            var g = a(n(498692));
            var h = a(n(983345));
            var E = a(n(463954));
            var b = a(n(753602));
            var v = a(n(906015));
            var y = n(815651);
            var C = n(745309);
            var M = n(542358);
            var k = a(n(718796));
            var _ = n(713464);
            var w = n(351053);
            var S = n(738501);
            var P = a(n(306007));
            var O = n(464659);
            var I = a(n(740681));
            var T = n(998123);
            var A = n(698867);
            var N = n(780549);
            var x = n(660666);
            var D = a(n(988808));
            var L = n(201833);
            var R = n(551181);
            var j = a(n(876588));
            var B = a(n(700829));
            var F = a(n(109007));
            var W = a(n(366773));
            var G = a(n(305122));
            var H = a(n(533159));
            var V = a(n(704714));
            var U = a(n(928008));
            var z = n(834110);
            var q = n(184385);
            var Y = a(n(908081));
            var K = a(n(324093));
            var X = n(36045);
            var Z = n(568550);
            var Q = n(626194);
            var $ = n(900316);
            var J = a(n(969358));
            var ee = n(71957);
            var te = a(n(570834));
            var ne = n(714574);
            var ae = n(769153);
            var le = a(n(344460));
            var re = n(917504);
            var oe = n(609181);
            var ie = n(114850);
            var ue = a(n(832897));
            var se = a(n(499717));
            var ce = a(n(213393));
            var de = n(932523);
            var fe = n(242677);
            var pe = a(n(335748));
            var me = n(10586);
            var ge = a(n(634152));
            var he = n(163139);
            var Ee = n(220584);
            var be = n(180519);
            var ve = n(625786);
            var ye = n(390737);
            var Ce = n(508228);
            var Me = n(459857);
            var ke = n(887222);
            var _e = n(455915);
            var we = a(n(124928));
            var Se = n(548360);
            var Pe = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var n = xe(t);
                if (n && n.has(e)) {
                    return n.get(e);
                }
                var a = {};
                var l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e) {
                    if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                        if (o && (o.get || o.set)) {
                            Object.defineProperty(a, r, o);
                        } else {
                            a[r] = e[r];
                        }
                    }
                }
                a.default = e;
                if (n) {
                    n.set(e, a);
                }
                return a;
            }(n(667294));
            var Oe = a(n(156720));
            var Ie = n(379811);
            var Te = a(n(637660));
            var Ae = a(n(558532));
            var Ne = a(n(321201));

            function xe (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var n = new WeakMap();
                return (xe = function (e) {
                    if (e) {
                        return n;
                    } else {
                        return t;
                    }
                })(e);
            }
            const De = {
                body: {
                    flexGrow: "tvf2evcx",
                    flexShrink: "oq44ahr5",
                    flexBasis: "lb5m6g5c",
                    paddingBottom: "s9fl9ege"
                },
                lastSectionRow: {
                    marginBottom: "brac1wpa"
                }
            };

            function Le (e) {
                let {
                    contact: t,
                    catalogContext: n,
                    onProductDetail: a,
                    onProductCatalog: l
                } = e;
                const r = _.CatalogCollection.get(t.id);
                if (!r) {
                    return null;
                }
                let o = "";
                let i = false;
                if ((0, p.canSeeBizProfileV3)()) {
                    o = Se.fbt._("See all", null, {
                        hk: "3dTwyT"
                    });
                    i = true;
                }
                const {
                    session: u
                } = n;
                if (u.isAccidental()) {
                    return null;
                } else if ((0, M.hasShop)(t.businessProfile)) {
                    if ((0, p.bannedShopsEnabled)() && (0, M.isShopBanned)(t.businessProfile)) {
                        return null;
                    } else {
                        return Pe.default.createElement(pe.default, {
                            businessProfile: t.businessProfile,
                            catalog: r,
                            subtitle: o,
                            hideIncompleteRows: i
                        });
                    }
                } else {
                    return Pe.default.createElement(ce.default, {
                        onProductDetail: a,
                        onProductCatalog: l,
                        catalog: r,
                        subtitle: o,
                        hideIncompleteRows: i,
                        shouldLog: true
                    });
                }
            }

            function Re (e, t) {
                const {
                    contact: n,
                    onVerification: a,
                    onClose: M,
                    onBack: ce,
                    onProductDetail: pe,
                    onProductCatalog: xe,
                    canLogQpl: Re = true
                } = e;
                const je = (0, Ne.default)();
                const Be = (0, Pe.useContext)(Z.DrawerContext);
                const [Fe, We, Ge, He, Ve, Ue, ze, qe, Ye, Ke, Xe, Ze, Qe, $e, Je, et] = (0, Ie.useContactValues)(e.contact.id, [x.getId, ne.getFormattedName, ne.getFormattedUser, ne.getFormattedShortName, x.getIsBusiness, x.getIsEnterprise, x.getIsMyContact, ne.getCommonGroups, x.getShowBusinessCheckmarkAsPrimary, x.getShowBusinessCheckmarkAsSecondary, x.getVerifiedName, x.getVerifiedLevel, x.getName, x.getNotifyName, x.getLabels, ne.getPhoneNumber]);
                const [tt, nt, at, lt, rt, ot, it, ut, st] = (0, Ie.useContactValues)(e.contact.id, [ne.getBusinessCatalog, x.getIsMe, x.getStatusMute, ne.getDisplayName, ne.getShareOwnPn, x.getRequestedPnTimestamp, x.getCanRequestPhoneNumber, x.getIsIAS, x.getIsCAPISupportAccount]);
                const ct = (0, Te.default)(() => new te.default());
                const dt = (0, Pe.useRef)(false);
                const [ft, pt] = (0, Pe.useState)(100);
                const mt = (0, Pe.useMemo)(() => w.ChatCollection.get(Fe), [Fe]);
                const gt = (0, Ce.useBusinessProfile)(Fe, ["isBizBot1p", "isBizBot3p", "stale", "isProfileLinked", "coverPhoto"]);
                const ht = (0, m.isBizBot3pEnabled)() && (gt == null ? undefined : gt.isBizBot3p) === true;
                const Et = (0, m.isBizBot1pEnabled)() && (gt == null ? undefined : gt.isBizBot1p) === true;
                const bt = nt;
                (0, Pe.useEffect)(() => {
                    if (gt && !gt.stale && tt) {
                        _.CatalogCollection.findCarouselCatalog(Fe).catch((0, o.filteredCatch)(c.ServerStatusCodeError, () => {
                            __LOG__(3)`Failed to fetch product catalog in contact drawer from server`;
                        }));
                    }
                    (0, me.getFanOutListJob)([Fe, (0, Me.assertGetMe)()]).then(e => {
                        (0, re.ensureE2ESessions)(e);
                    });
                    const {
                        session: t
                    } = (0, de.getProductCatalogContext)(Be);
                    if (t.isAccidental()) {
                        $.DrawerManager.setDrawerContext("right", (0, de.buildProductCatalogContext)(new fe.ProductCatalogSession(), (0, z.getMaybeBizPlatformForLogging)(Fe.toString()), _e.CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_PROFILE));
                    } else if (Ve && (0, p.canSeeBizProfileV3)()) {
                        const t = Fe === (0, Me.getMaybeMeUser)();
                        const {
                            profileEntryPoint: n
                        } = e;
                        if (!t && n) {
                            (0, y.logProfileImpression)((0, de.getProductCatalogSessionId)(Be), n, !!(gt == null ? undefined : gt.isProfileLinked), !!(gt == null ? undefined : gt.coverPhoto));
                        }
                    }
                    if (Re && gt) {
                        (0, oe.qplEndProfileView)(i.QuickLogActionType.SUCCESS);
                    }
                }, []);
                (0, Pe.useEffect)(() => {
                    if ((0, p.btmThreadsLoggingEnabled)()) {
                        var e;
                        const t = (e = (0, Me.getMaybeMeUser)()) === null || e === undefined ? undefined : e.equals(Fe);
                        const {
                            session: n
                        } = (0, de.getProductCatalogContext)(Be);
                        if (!(n.isAccidental() || t || !(mt == null ? undefined : mt.id))) {
                            (0, A.handleActivitiesForChatThreadLogging)([{
                                activityType: "profileViews",
                                ts: (0, u.unixTime)(),
                                chatId: mt.id
                            }]);
                        }
                    }
                }, []);
                (0, Ae.default)(() => {
                    const {
                        session: e
                    } = (0, de.getProductCatalogContext)(Be);
                    if (!e.isAccidental()) {
                        if (Ve && (0, p.canSeeBizProfileV3)()) {
                            (0, y.logProfileExit)((0, de.getProductCatalogSessionId)(Be), ft, gt == null ? undefined : gt.isProfileLinked, !!(gt == null ? undefined : gt.coverPhoto));
                        }
                    }
                });
                const vt = () => {
                    a();
                };
                const yt = () => {
                    if (M) {
                        M();
                    } else if (!(je == null)) {
                        je.requestDismiss();
                    }
                };
                const Ct = () => {
                    if (ce) {
                        ce();
                    }
                };
                const Mt = e => {
                    if (!dt.current && !we.default.isPSA(Fe)) {
                        return void ye.ToastManager.open(Pe.default.createElement(ve.Toast, {
                            msg: Se.fbt._("No profile photo", null, {
                                hk: "2bdeTO"
                            })
                        }));
                    }
                    const t = e.target;
                    ie.ModalManager.openMedia(Pe.default.createElement(se.default, {
                        contact: n,
                        profilePicThumb: n.getProfilePicThumb(),
                        animateBorderRadius: true,
                        getZoomNode: e => {
                            e(t);
                        }
                    }), {
                        transition: "profile-viewer",
                        uim: je
                    });
                };
                const kt = () => {
                    dt.current = true;
                };
                const _t = e => {
                    (0, ke.qplStartProductView)("ContactInfo");
                    pe(e);
                };
                const wt = e => {
                    const t = Math.floor((1 + e.currentTarget.scrollTop / e.currentTarget.offsetHeight) * 100);
                    if (t > ft) {
                        pt(t);
                    }
                };
                const St = Ue ? null : Pe.default.createElement(j.default, {
                    contact: n,
                    onClose: yt,
                    flatListController: ct.current
                });
                let Pt = null;
                if (e.onMediaGallery && mt) {
                    Pt = Pe.default.createElement(I.default, {
                        chat: mt,
                        onMediaGallery: e.onMediaGallery
                    });
                }
                let Ot = null;
                let It = null;
                if (n && Ve && gt && tt) {
                    const e = Pe.default.createElement(Le, {
                        contact: n,
                        catalogContext: (0, de.getProductCatalogContext)(Be),
                        onProductDetail: _t,
                        onProductCatalog: xe
                    });
                    if ((0, p.canSeeBizProfileV3)()) {
                        It = e;
                    } else {
                        Ot = e;
                    }
                }
                const Tt = mt && mt.mute.canMute() ? Pe.default.createElement(ue.default, {
                    chat: mt,
                    mute: mt.mute,
                    settings: ge.default
                }) : null;
                const At = st && (0, s.getIsSagaEnabled)() ? Pe.default.createElement(H.default, null) : null;
                let Nt;
                let xt;
                if (e.onStarred) {
                    Nt = Pe.default.createElement(G.default, {
                        onStarred: e.onStarred
                    });
                }
                if (mt && (mt.hasKeptMsgs() || (0, S.isEphemeralSettingOn)(mt))) {
                    const t = Pe.default.createElement(be.TextSpan, {
                        theme: "title",
                        size: "16"
                    }, Se.fbt._("Kept Messages", null, {
                        hk: "w8m3u"
                    }));
                    const n = Pe.default.createElement(ae.KeepInChatIcon, {
                        color: Ee.SvgColorProp.SECONDARY,
                        height: 20
                    });
                    xt = Pe.default.createElement(O.ChatInfoDrawerSection, {
                        titleTestId: "section-kept-messages",
                        xstyle: De.lastSectionRow
                    }, Pe.default.createElement(P.default, {
                        testid: "block-kept-messages",
                        side: "chevron",
                        icon: n,
                        onClick: e.onKept,
                        title: t
                    }));
                }
                const Dt = mt && (0, S.shouldShowEphemeralSetting)(mt) ? Pe.default.createElement(ee.EphemeralSettingRow, {
                    onClick: e.onEphemeral,
                    chat: mt,
                    testid: "contact-info-dm-setting-row"
                }) : null;
                let Lt = null;
                if (we.default.isPSA(Fe)) {
                    Lt = Pe.default.createElement(U.default, null);
                } else if (!(Fe.isBot() || ht)) {
                    Lt = Pe.default.createElement(B.default, {
                        contact: (0, he.unproxy)(n),
                        onVerificationClick: vt
                    });
                }
                const Rt = Fe.isLid() && et == null;
                const jt = Fe.isLid();
                const Bt = mt && jt ? Pe.default.createElement(T.PhoneNumberVisibilityIndicator1On1, {
                    chat: mt
                }) : null;
                let Ft;
                if (Et) {
                    Ft = Pe.default.createElement(L.ContactInfoBizBot1pSection, null);
                } else if (ht) {
                    Ft = Pe.default.createElement(R.ContactInfoBizBot3pSection, null);
                }
                const Wt = Pe.default.createElement(O.ChatInfoDrawerSection, null, Tt, At, Dt, Ft, Lt, Bt);
                const Gt = !Ve;
                const Ht = Gt || ut || st || Fe.isBot() || ht ? null : Pe.default.createElement(h.default, {
                    contact: (0, he.unproxy)(n)
                });
                let Vt = null;
                if (Fe.isBot()) {
                    Vt = Pe.default.createElement(g.default, {
                        contact: (0, he.unproxy)(n)
                    });
                } else if (Gt) {
                    Vt = Pe.default.createElement(D.default, {
                        contact: (0, he.unproxy)(n)
                    });
                }
                let Ut = null;
                if (ht && gt) {
                    Ut = Pe.default.createElement(d.default, {
                        businessProfile: (0, he.unproxy)(gt)
                    });
                }
                let zt = null;
                if ((0, m.isBizBot3pEnabled)() && gt) {
                    zt = Pe.default.createElement(f.default, {
                        businessProfile: (0, he.unproxy)(gt)
                    });
                }
                const qt = (0, p.canSeeBizProfileV3)() && Ve && gt ? Pe.default.createElement(k.default, {
                    contact: n,
                    onProfilePicLoad: kt,
                    onProfilePicClick: Mt,
                    onOpenStatus: () => {
                        (0, y.logStatusClick)((0, de.getProductCatalogSessionId)(Be), gt == null ? undefined : gt.isProfileLinked, !!(gt == null ? undefined : gt.coverPhoto));
                    },
                    businessProfile: (0, he.unproxy)(gt),
                    onProductCatalog: xe,
                    isPhoneNumberHidden: Rt
                }) : Pe.default.createElement(V.default, {
                    contact: n,
                    onDetailImageLoad: kt,
                    onDetailImageClick: Mt,
                    isMessageYourselfChat: bt,
                    isPhoneNumberHidden: Rt
                });
                let Yt;
                let Kt;
                let Xt;
                let Zt = null;
                var Qt;
                if (Ve && gt) {
                    if ((0, p.canSeeBizProfileV3)() && gt) {
                        Zt = Fe.isBot() ? null : Pe.default.createElement(v.default, {
                            businessProfile: (0, he.unproxy)(gt),
                            showDescription: !ht
                        });
                        Yt = ut || st ? null : Pe.default.createElement(E.default, {
                            contact: n
                        });
                        if (((Qt = Je == null ? undefined : Je.length) !== null && Qt !== undefined ? Qt : 0) > 0) {
                            Kt = Pe.default.createElement(J.default, {
                                theme: "padding"
                            }, Pe.default.createElement(le.default, {
                                labels: Je,
                                theme: "standalone"
                            }));
                        }
                        Xt = wt;
                    } else if (gt) {
                        Zt = Pe.default.createElement(C.BusinessProfile, {
                            contact: n,
                            businessProfile: (0, he.unproxy)(gt)
                        });
                    }
                }
                const $t = {
                    title: Se.fbt._("Contact info", null, {
                        hk: "LUJtH"
                    }),
                    type: Q.DRAWER_HEADER_TYPE.SMALL,
                    rtlFixIfOnDarwin: true,
                    focusBackOrCancel: true
                };
                let Jt;
                let en = {};
                en = ce ? (0, r.default)({
                    onBack: Ct
                }, $t) : (0, r.default)({
                    onCancel: yt
                }, $t);
                if (gt && gt.isProfileLinked === true && (0, p.bizLinkedAccountsEnabled)() && (0, p.canViewBizLinkedAccounts)()) {
                    Jt = Pe.default.createElement(W.default, {
                        businessProfile: (0, he.unproxy)(gt),
                        rowTheme: "linked-account-consumer"
                    });
                }
                return Pe.default.createElement(Y.default, {
                    ref: t,
                    key: "contact-info-modal",
                    theme: "striped",
                    testid: "chat-info-drawer",
                    tsNavigationData: {
                        surface: "contact-info-drawer"
                    }
                }, Pe.default.createElement(Q.DrawerHeader, (0, l.default)({}, en, {
                    testid: "contact-info-header"
                })), Pe.default.createElement(K.default, {
                    flatListControllers: [ct.current],
                    onScroll: Xt
                }, Pe.default.createElement("section", {
                    className: (0, Oe.default)(De.body)
                }, qt, Yt, mt ? Pe.default.createElement(b.default, {
                    chat: mt
                }) : null, Ut, zt, Kt, It, Zt, Jt, Ot, Vt, Pt, Nt, xt, Wt, Ht, undefined, !bt && St, !bt && Pe.default.createElement(F.default, {
                    contact: n
                }), Pe.default.createElement(O.ChatInfoDrawerButtonsSection, null, mt ? Pe.default.createElement(X.DrawerButtonSimple, {
                    testid: "li-delete-chat",
                    icon: Pe.default.createElement(q.DeleteIcon, null),
                    color: "danger",
                    onClick: () => {
                        const e = w.ChatCollection.assertGet(Fe);
                        N.Cmd.deleteOrExitChatFromEntryPoint(e, 12);
                    },
                    theme: "chat-info"
                }, Se.fbt._("Delete chat", null, {
                    hk: "3Vq9G4"
                })) : null))));
            }
            var je = (0, Pe.forwardRef)(Re);
            t.default = je;
        },
        700829: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const {
                    onVerificationClick: t
                } = e;
                const [n, a] = (0, g.useContactValues)(e.contact.id, [r.getId, r.getPrivacyMode]);
                const h = function (e, t) {
                    if ((0, l.default)(t.user)) {
                        return {
                            text: p.fbt._("Click to learn how messages and calls are secured.", null, {
                                hk: "1UxhjE"
                            }),
                            title: p.fbt._("Security", null, {
                                hk: "3j3j0a"
                            }),
                            onClick: () => {
                                (0, s.default)((0, d.SupportChatSecurityModalText)(), (0, i.getSupportChatSafetyFaqUrl)(), (0, d.SupportChatLearnMoreLinkText)());
                            }
                        };
                    }
                    switch (e) {
                        case c.ReducedPrivacyMode.E2EE:
                            return null;
                        case c.ReducedPrivacyMode.BSP:
                            return {
                                text: p.fbt._("This business works with other companies to manage this chat. Click to learn more.", null, {
                                        hk: "VbOOZ"
                                    }),
                                    title: p.fbt._("Security", null, {
                                        hk: "3j3j0a"
                                    }),
                                    onClick: () => {
                                        (0, s.default)((0, u.formatBspModalText)(), (0, i.getE2EEnterpriseFaqUrl)());
                                    }
                            };
                        case c.ReducedPrivacyMode.FB: {
                            let e;
                            e = t.isIAS() ? p.fbt._("WhatsApp Surveys uses a secure service from Meta to manage this chat. Click to learn more.", null, {
                                hk: "49GQ04"
                            }) : p.fbt._("This business uses a secure service from Meta to manage this chat. Click to learn more.", null, {
                                hk: "3wvGOC"
                            });
                            return {
                                text: e,
                                title: p.fbt._("Security", null, {
                                    hk: "3j3j0a"
                                }),
                                onClick: () => {
                                    (0, s.default)((0, u.formatFbModalText)(t.isIAS()), (0, i.getE2EEnterpriseFaqUrl)());
                                }
                            };
                        }
                    }
                }((0, c.getReducedPrivacyMode)(a), n);
                if (h) {
                    return m.default.createElement(o.default, {
                        title: h.title,
                        text: h.text,
                        onClick: h.onClick
                    });
                }
                const E = f.default.isVoiceCallEnabled() || f.default.isVideoCallEnabled() ? p.fbt._("Messages and calls are end-to-end encrypted. Click to verify.", null, {
                    hk: "GtGQH"
                }) : p.fbt._("Messages are end-to-end encrypted. Click to verify.", null, {
                    hk: "1AqhWR"
                });
                return m.default.createElement(o.default, {
                    onClick: t,
                    text: E
                });
            };
            var l = a(n(143589));
            var r = n(660666);
            var o = a(n(409558));
            var i = n(258105);
            var u = n(729763);
            var s = a(n(606037));
            var c = n(35109);
            var d = n(666836);
            var f = a(n(571256));
            var p = n(548360);
            var m = a(n(667294));
            var g = n(379811);
        },
        109007: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                var t;
                const {
                    contact: n
                } = e;
                const [a, I, T, A, N, x, D] = (0, O.useContactValues)(e.contact.id, [d.getId, m.getDisplayName, d.getIsBusiness, m.getIsContactBlocked, d.getIsIAS, d.getIsMyContact, d.getIsCAPISupportAccount]);
                const L = P.default.createElement(h.Name, {
                    contact: e.contact,
                    skipCheckMark: true
                });
                const {
                    isBizBot3p: R = false
                } = (t = (0, k.useBusinessProfile)(a, ["isBizBot3p"])) !== null && t !== undefined ? t : {};
                let j = null;
                if (!a.isBot()) {
                    if (A) {
                        const t = R ? S.fbt._("Unblock AI", null, {
                            hk: "1XpdlR"
                        }) : S.fbt._("Unblock {contact_name}", [S.fbt._param("contact_name", L)], {
                            hk: "1fZZEx"
                        });
                        j = P.default.createElement(f.DrawerButtonSimple, {
                            testid: "li-unblock",
                            color: "success",
                            icon: P.default.createElement(y.SettingsBlockedIcon, {
                                directional: true
                            }),
                            onClick: () => (0, o.handleUnblock)(e.contact, i.BlockEntryPoint.Profile),
                            theme: "chat-info"
                        }, t);
                    } else {
                        const t = R ? S.fbt._("Block AI", null, {
                            hk: "1YqRKh"
                        }) : S.fbt._("Block {contact_name}", [S.fbt._param("contact_name", L)], {
                            hk: "3lECdx"
                        });
                        j = P.default.createElement(f.DrawerButtonSimple, {
                            testid: "li-block",
                            color: "danger",
                            icon: P.default.createElement(y.SettingsBlockedIcon, {
                                directional: true
                            }),
                            onClick: () => {
                                const t = () => {
                                    const t = u.ChatCollection.get(a);
                                    if (t == null ? undefined : t.isPSA) {
                                        const e = t.msgs.last();
                                        (0, _.logChatPSARemove)(e, 1, 1);
                                    }
                                    (0, r.blockContact)({
                                        contact: e.contact,
                                        blockEntryPoint: i.BlockEntryPoint.Profile
                                    });
                                    g.ModalManager.close();
                                };
                                let o = P.default.createElement(c.ConfirmPopup, {
                                    onOK: t,
                                    okText: (0, p.default)("Block"),
                                    onCancel: () => g.ModalManager.close(),
                                    title: S.fbt._("Block {contact_name}?", [S.fbt._param("contact_name", L)], {
                                        hk: "26yDKy"
                                    })
                                }, S.fbt._("Blocked contacts will no longer be able to call you or send you messages.", null, {
                                    hk: "3ioCkx"
                                }));
                                if (w.default.isPSA(a)) {
                                    o = P.default.createElement(E.default, {
                                        onBlock: t,
                                        onCancel: () => g.ModalManager.close()
                                    });
                                } else if (T) {
                                    o = P.default.createElement(l.default, {
                                        contact: n,
                                        blockEntryPoint: i.BlockEntryPoint.Profile,
                                        withReport: false
                                    });
                                }
                                g.ModalManager.open(o);
                            },
                            theme: "chat-info"
                        }, t);
                    }
                }
                let B = N || D ? S.fbt._("Report", null, {
                    hk: "2SQkZ4"
                }) : S.fbt._("Report business", null, {
                    hk: "2Tvnn8"
                });
                if (!T) {
                    B = S.fbt._("Report {contact_name}", [S.fbt._param("contact_name", L)], {
                        hk: "3Dqyjo"
                    });
                }
                if (R) {
                    B = S.fbt._("Report AI", null, {
                        hk: "22W5Ky"
                    });
                }
                const F = w.default.isPSA(a) || a.isBot() ? null : P.default.createElement(f.DrawerButtonSimple, {
                    testid: "li-report-spam",
                    color: "danger",
                    icon: P.default.createElement(M.ThumbsDownIcon, null),
                    onClick: () => {
                        const t = () => {
                            const t = u.ChatCollection.get(e.contact.id);
                            if (t) {
                                (0, v.sendReport)({
                                    chat: t,
                                    spamFlow: C.SpamFlow.AccountInfoReport
                                });
                            }
                            g.ModalManager.close();
                        };
                        const n = () => {
                            const t = u.ChatCollection.get(e.contact.id);
                            if (t) {
                                (0, v.sendSpamBlockClear)(t, C.SpamFlow.AccountInfoReport);
                            }
                            g.ModalManager.close();
                        };
                        g.ModalManager.open(R ? P.default.createElement(b.default, {
                            isBizBot3p: true,
                            isMessage: false,
                            onReport: t,
                            onReportBlockClear: n,
                            onCancel: () => g.ModalManager.close()
                        }) : P.default.createElement(b.default, {
                            isMessage: false,
                            isBusiness: e.contact.isBusiness,
                            isGroupChat: false,
                            onReport: t,
                            onReportBlockClear: n,
                            onCancel: () => g.ModalManager.close()
                        }));
                    },
                    theme: "chat-info"
                }, B);
                return P.default.createElement(s.ChatInfoDrawerButtonsSection, null, j, F);
            };
            var l = a(n(208423));
            var r = n(547979);
            var o = n(923092);
            var i = n(400436);
            var u = n(351053);
            var s = n(464659);
            var c = n(103440);
            var d = n(660666);
            var f = n(36045);
            var p = a(n(395767));
            var m = n(714574);
            var g = n(114850);
            var h = n(21645);
            var E = a(n(179197));
            var b = a(n(338695));
            var v = n(383296);
            var y = n(290562);
            var C = n(453603);
            var M = n(647890);
            var k = n(508228);
            var _ = n(369084);
            var w = a(n(124928));
            var S = n(548360);
            var P = a(n(667294));
            var O = n(379811);
        },
        305122: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                let {
                    onStarred: t
                } = e;
                const n = c.default.createElement(u.TextSpan, {
                    theme: "title",
                    size: "16"
                }, s.fbt._("Starred messages", null, {
                    hk: "4wVbNG"
                }));
                const a = c.default.createElement(o.StarIcon, {
                    color: i.SvgColorProp.SECONDARY,
                    height: 20
                });
                return c.default.createElement(r.ChatInfoDrawerSection, {
                    titleTestId: "section-starred-messages"
                }, c.default.createElement(l.default, {
                    testid: "block-starred-messages",
                    side: "chevron",
                    icon: a,
                    onClick: t,
                    title: n
                }));
            };
            var l = a(n(306007));
            var r = n(464659);
            var o = n(407024);
            var i = n(220584);
            var u = n(180519);
            var s = n(548360);
            var c = a(n(667294));
        },
        836513: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function () {
                return f.default.createElement(u.FlexRow, {
                    xstyle: g.container
                }, f.default.createElement(u.FlexColumn, {
                    xstyle: g.item
                }, p), f.default.createElement(u.FlexColumn, {
                    xstyle: [g.text, g.item]
                }, f.default.createElement(c.TextSpan, {
                    testid: "contact-info-pnh-info"
                }, d.fbt._("This person's phone number is not shared in this chat. {=m2}", [d.fbt._implicitParam("=m2", f.default.createElement(l.default, {
                    testid: "contact-info-pnh-learn-more",
                    onClick: m
                }, d.fbt._("Learn more", null, {
                    hk: "t6HJf"
                })))], {
                    hk: "3CEKuh"
                }))));
            };
            var l = a(n(196554));
            var r = n(841605);
            var o = n(753233);
            var i = n(258105);
            var u = n(690495);
            var s = n(220584);
            var c = n(180519);
            var d = n(548360);
            var f = a(n(667294));
            a(n(156720));
            const p = f.default.createElement(r.DialpadIcon, {
                directional: true,
                color: s.SvgColorProp.SECONDARY
            });
            const m = () => {
                const e = (0, i.getPhoneNumberHidingFaqUrl)();
                (0, o.openExternalLink)(e);
            };
            const g = {
                container: {
                    alignItems: "gndfcl4n",
                    backgroundColor: "f6ipylw5",
                    borderTopStartRadius: "bbr44loe",
                    borderTopEndRadius: "ooj5yc5b",
                    borderBottomEndRadius: "m8i16etx",
                    borderBottomStartRadius: "cw0ivh8j",
                    display: "p357zi0d",
                    marginTop: "fgtikrv0",
                    marginEnd: "k1jo73ug",
                    marginBottom: "iyjcf3gk",
                    marginStart: "isfiuinm",
                    width: "c0boj6n4",
                    height: "q1n4p668",
                    maxWidth: "l2o74p5l",
                    paddingStart: "nu34rnf1",
                    paddingEnd: "ft2m32mm",
                    lineHeight: "erpdyial"
                },
                text: {
                    color: "pm5hny62",
                    marginTop: "m3ct2rho",
                    marginEnd: "k1jo73ug",
                    marginBottom: "ec1z5skj",
                    marginStart: "isfiuinm",
                    wordBreak: "cw3vfol9",
                    overflowWrap: "fd365im1"
                },
                item: {
                    marginStart: "p3lsiedt",
                    marginEnd: "q471nw87",
                    paddingTop: "qomlamqu",
                    paddingEnd: "lnjlmjd6",
                    paddingBottom: "bxcbqipq",
                    paddingStart: "mc6o24uu"
                }
            };
        },
        533159: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function () {
                return d.default.createElement(r.default, {
                    onClick: () => o.ModalManager.open(d.default.createElement(i.default, null)),
                    icon: d.default.createElement(l.AiSignalIcon, {
                        color: u.SvgColorProp.SECONDARY,
                        height: 20
                    }),
                    title: d.default.createElement(s.WDSTextTitle, null, c.fbt._("Meta AI", null, {
                        hk: "1xXGQM"
                    })),
                    secondaryTitle: d.default.createElement(s.WDSTextMuted, null, c.fbt._("WhatsApp Support uses Meta AI to generate some messages in this chat.", null, {
                        hk: "ApQaP"
                    }))
                });
            };
            var l = n(321545);
            var r = a(n(306007));
            var o = n(114850);
            var i = a(n(735848));
            var u = n(220584);
            var s = n(180519);
            var c = n(548360);
            var d = a(n(667294));
        },
        704714: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                let t;
                let {
                    contact: n,
                    onDetailImageLoad: a,
                    onDetailImageClick: l,
                    isMessageYourselfChat: r,
                    isPhoneNumberHidden: o
                } = e;
                const i = L.fbt._("Official WhatsApp Account", null, {
                    hk: "2cEUzF"
                });
                const u = n.phoneNumber != null ? f.ContactCollection.get(n.phoneNumber) : null;
                if (x.default.isPSA(n.id)) {
                    t = i;
                } else if ((0, p.getIsMyContact)(n)) {
                    t = (0, D.widToFormattedUser)(n.id);
                } else if (n.id.isLid() && u != null && (0, p.getIsMyContact)(u)) {
                    t = (0, D.widToFormattedUser)(n.phoneNumber);
                } else {
                    const e = (0, p.getNotifyName)(n);
                    if (e != null) {
                        t = `~${e}`;
                    }
                }
                const s = n.username != null && (n.id.isLid() && n.phoneNumber != null || !n.id.isLid()) ? R.default.createElement("div", {
                    className: (0, j.default)(B.secondaryWrapper)
                }, R.default.createElement(g.SelectableSpan, {
                    dir: "auto",
                    selectable: true
                }, R.default.createElement(P.TextSpan, {
                    size: "16",
                    color: "secondary"
                }, n.username != null && `@${n.username}`))) : null;
                return R.default.createElement(b.default, {
                    theme: "padding-large"
                }, R.default.createElement("div", {
                    className: (0, j.default)(B.avatar)
                }, R.default.createElement(h.DetailImage, {
                    id: n.id,
                    size: h.DetailImageSize.Large,
                    loader: true,
                    onLoad: a,
                    onClick: l,
                    quality: h.DetailImageQuality.High
                })), R.default.createElement(y.FlexColumn, {
                    align: "center"
                }, R.default.createElement(P.TextHeader, {
                    level: "2",
                    size: "24",
                    xstyle: B.contactName
                }, R.default.createElement(k.Name, {
                    testid: "contact-info-subtitle",
                    contact: n,
                    showMessageYourselfName: r,
                    selectable: true,
                    breakWord: true,
                    checkmarkLarge: true
                })), t != null && R.default.createElement("div", {
                    className: (0, j.default)(B.secondaryWrapper)
                }, R.default.createElement(g.SelectableSpan, {
                    dir: "auto",
                    selectable: true
                }, R.default.createElement(P.TextSpan, {
                    size: "16",
                    color: "secondary"
                }, t))), (0, I.usernameDisplayedEnabled)() && s), o && R.default.createElement(m.default, null), !r && R.default.createElement(F, {
                    contact: n,
                    displayRequestPnButton: o
                }), R.default.createElement(C.default, {
                    labels: n.labels
                }));
            };
            var l = n(287461);
            var r = n(351053);
            var o = n(404378);
            var i = a(n(983098));
            var u = a(n(9729));
            var s = n(757567);
            var c = n(780549);
            var d = n(877171);
            var f = n(177938);
            var p = n(660666);
            var m = a(n(836513));
            var g = n(306703);
            var h = n(23641);
            var E = n(861038);
            var b = a(n(969358));
            var v = n(581354);
            var y = n(690495);
            var C = a(n(344460));
            var M = n(114850);
            var k = n(21645);
            var _ = n(417016);
            var w = a(n(755140));
            var S = n(163139);
            var P = n(180519);
            var O = n(676345);
            var I = n(129417);
            var T = n(626261);
            var A = a(n(961745));
            var N = n(126246);
            var x = a(n(124928));
            var D = n(931019);
            var L = n(548360);
            var R = a(n(667294));
            var j = a(n(156720));
            const B = {
                avatar: {
                    display: "p357zi0d",
                    justifyContent: "ac2vgrno",
                    marginBottom: "pz0xruzv"
                },
                secondaryWrapper: {
                    lineHeight: "a4ywakfo",
                    marginTop: "qt60bha0"
                },
                contactName: {
                    textAlign: "qfejxiq4"
                }
            };

            function F (e) {
                let {
                    contact: t,
                    displayRequestPnButton: n
                } = e;
                const a = (0, u.default)((0, S.unproxy)(t));
                const f = () => {
                    (0, v.findChat)(t.id, "chatInfoTopCard").then(e => {
                        c.Cmd.openChatFromUnread(e).then(t => {
                            if (t) {
                                d.ComposeBoxActions.focus(e);
                            }
                        });
                    });
                };
                const m = !(!a.isVideoCallEnabled && !a.isVoiceCallEnabled || x.default.isPSA(t.id)) && R.default.createElement(R.default.Fragment, null, R.default.createElement(i.default, {
                    Icon: T.VoiceCallFilledIcon,
                    iconWidth: 19,
                    label: L.fbt._("Audio", null, {
                        hk: "1b375N"
                    }),
                    testid: "contact-action voice-call-button",
                    xstyle: [O.uiMargin.start16, O.uiMargin.end16],
                    disabled: !a.canStartVoiceCall,
                    onClick: () => {
                        const e = t.id.isLid() ? t.phoneNumber : t.id;
                        if ((0, _.shouldDisplayPhoneNumberHidingModal)(t)) {
                            (0, _.displayPhoneNumberHidingModal)(t, false);
                        } else if (e != null) {
                            var n;
                            if (!((n = A.default.Voip) === null || n === undefined)) {
                                n.callStart(e, false);
                            }
                        }
                    }
                }), R.default.createElement(i.default, {
                    Icon: s.ChatInfoVideoIcon,
                    label: L.fbt._("Video", null, {
                        hk: "3zMUsJ"
                    }),
                    testid: "contact-action video-call-button",
                    xstyle: [O.uiMargin.start16, O.uiMargin.end16],
                    disabled: !a.canStartVideoCall,
                    onClick: () => {
                        const e = t.id.isLid() ? t.phoneNumber : t.id;
                        if ((0, _.shouldDisplayPhoneNumberHidingModal)(t)) {
                            (0, _.displayPhoneNumberHidingModal)(t, true);
                        } else if (e != null) {
                            var n;
                            if (!((n = A.default.Voip) === null || n === undefined)) {
                                n.callStart(e, true);
                            }
                        }
                    }
                }));
                const g = L.fbt._("Request", null, {
                    hk: "1Qh451"
                });
                const h = L.fbt._("Requested", null, {
                    hk: "3GgAXn"
                });
                const b = (0, p.getCanRequestPhoneNumber)(t) ? g : h;
                const C = n && R.default.createElement(i.default, {
                    Icon: E.DialpadSmallIcon,
                    iconWidth: 19,
                    label: b,
                    xstyle: [O.uiMargin.start16, O.uiMargin.end16],
                    disabled: !(0, p.getCanRequestPhoneNumber)(t),
                    onClick: () => {
                        M.ModalManager.open(R.default.createElement(w.default, {
                            entryPoint: N.PNH_ENTRY_POINT_TYPE.CHAT_INFO_REQUEST
                        }));
                    },
                    testid: "request-phone-number-button-consumer"
                });
                let k = null;
                if ((0, l.getABPropConfigValue)("unified_user_profile_navigation_enabled")) {
                    const e = r.ChatCollection.getActive();
                    k = !(e == null ? undefined : e.id.equals(t.id)) && R.default.createElement(i.default, {
                        Icon: o.ChatIcon,
                        iconWidth: 19,
                        label: L.fbt._("Message", null, {
                            hk: "4gkjcu"
                        }),
                        testid: "contact-action chat-button",
                        xstyle: [O.uiMargin.start16, O.uiMargin.end16],
                        disabled: false,
                        onClick: f
                    });
                }
                return R.default.createElement(y.FlexRow, {
                    justify: "center",
                    xstyle: [O.uiMargin.top8, O.uiMargin.bottom4]
                }, C, k, m);
            }
        },
        928008: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function () {
                const e = {
                    text: u.fbt._("This is an official account of WhatsApp", null, {
                        hk: "2Av1mT"
                    }),
                    title: u.fbt._("Security", null, {
                        hk: "2jDPpv"
                    }),
                    onClick: () => {
                        (0, i.default)((0, o.formatWaChatSecurityModalText)(), (0, r.getWAChatFaqUrl)());
                    }
                };
                return s.default.createElement(l.default, {
                    title: e.title,
                    text: e.text,
                    onClick: e.onClick
                });
            };
            var l = a(n(409558));
            var r = n(258105);
            var o = n(729763);
            var i = a(n(606037));
            var u = n(548360);
            var s = a(n(667294));
        },
        983345: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const t = e.contact.getStatus();
                const [n, a] = (0, m.useContactValues)(e.contact.id, [i.getId, s.getPhoneNumber]);
                const {
                    status: E
                } = (0, g.useModelValues)(t, ["status"]);
                const b = E === "" ? null : p.default.createElement(l.default, {
                    multiline: true
                }, p.default.createElement(c.TextSpan, {
                    theme: "title"
                }, p.default.createElement(o.default, {
                    id: n
                })));
                let v;
                if (n.isLid()) {
                    if (a != null) {
                        v = a;
                    }
                } else {
                    v = n;
                }
                const y = v ? p.default.createElement(l.default, {
                    separator: true
                }, p.default.createElement(u.SelectableSpan, {
                    dir: "auto",
                    selectable: true
                }, p.default.createElement(c.TextSpan, {
                    theme: "title"
                }, (0, d.widToFormattedUser)(v)))) : null;
                const C = f.fbt._("About and phone number", null, {
                    hk: "3UEL3W"
                });
                return p.default.createElement(r.ChatInfoDrawerSection, {
                    xstyle: h.container,
                    titleTestId: "section-about-and-phone-number",
                    title: C
                }, b, y);
            };
            var l = a(n(355858));
            var r = n(464659);
            var o = a(n(203528));
            var i = n(660666);
            var u = n(306703);
            var s = n(714574);
            var c = n(180519);
            var d = n(931019);
            var f = n(548360);
            var p = a(n(667294));
            a(n(156720));
            var m = n(379811);
            var g = n(655241);
            const h = {
                container: {
                    paddingBottom: "przvwfww"
                }
            };
        },
        463954: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const {
                    contact: t
                } = e;
                const n = m.default.createElement(h, {
                    contact: t,
                    onClick: function () {
                        var e;
                        if ((0, r.isBotEnabled)() && (0, i.getId)(t).isBot()) {
                            d.ModalManager.open(m.default.createElement(o.default, {
                                fromInvoke: false
                            }));
                        } else if ((0, r.isBizBot3pEnabled)() && ((e = t.businessProfile) === null || e === undefined ? undefined : e.isBizBot3p)) {
                            d.ModalManager.open(m.default.createElement(l.default, null));
                        } else {
                            d.ModalManager.open(m.default.createElement(f.default, {
                                contact: t
                            }));
                        }
                    }
                });
                return m.default.createElement(s.default, {
                    xstyle: g.businessAccount
                }, n);
            };
            var l = a(n(210688));
            var r = n(354458);
            var o = a(n(341894));
            var i = n(660666);
            var u = a(n(831269));
            var s = a(n(969358));
            var c = n(975279);
            var d = n(114850);
            var f = a(n(517729));
            var p = n(548360);
            var m = a(n(667294));
            a(n(156720));
            const g = {
                businessAccount: {
                    borderTop: "mug5vpb7",
                    fontSize: "f8jlpxt4"
                },
                businessTitle: {
                    lineHeight: "hzeshm6i"
                },
                bannerSvgContainer: {
                    marginTop: "b9l0eqez",
                    marginEnd: "jnwc1y2a",
                    marginBottom: "mpdn4nr2",
                    marginStart: "svoq16ka"
                },
                bannerSvg: {
                    color: "jq3rn4u7",
                    width: "dh5rsm73"
                }
            };

            function h (e) {
                let {
                    onClick: t,
                    contact: n
                } = e;
                return m.default.createElement(u.default, {
                    testid: "business-title",
                    xstyle: g.businessTitle,
                    onClick: t,
                    side: m.default.createElement(c.InfoIcon, {
                        xstyle: g.bannerSvgContainer,
                        iconXstyle: g.bannerSvg,
                        displayInline: true
                    })
                }, function (e) {
                    var t;
                    if ((0, r.isBotEnabled)() && (0, i.getId)(e).isBot()) {
                        return p.fbt._("Messages are generated by AI from Meta.", null, {
                            hk: "WdHq5"
                        });
                    } else if ((0, r.isBizBot3pEnabled)() && ((t = e.businessProfile) === null || t === undefined ? undefined : t.isBizBot3p)) {
                        return p.fbt._("This AI is from a third-party developer.", null, {
                            hk: "1kQkmi"
                        });
                    } else {
                        return p.fbt._("This is a business account.", null, {
                            hk: "2x8QUJ"
                        });
                    }
                }(n));
            }
        },
        520228: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                var t;
                var n;
                const {
                    contact: a,
                    onProductCatalog: G
                } = e;
                const V = (0, W.useContext)(M.DrawerContext);
                const U = (0, T.getProductCatalogSessionId)(V);
                const z = (0, g.default)((0, D.unproxy)(e.contact));

                function q () {
                    return (q = (0, l.default)(function* () {
                        const e = yield(0, w.findChat)(a.id, "businessActions");
                        if (yield b.Cmd.openChatFromUnread(e)) {
                            k.DrawerManager.closeDrawerRight();
                            if ((0, i.btmThreadsLoggingEnabled)()) {
                                v.ComposeBoxActions.addMsgSendingLogAttributes(e, {
                                    handleMultiple () {
                                        (0, E.handleActivitiesForChatThreadLogging)([{
                                            activityType: "profileReplies",
                                            ts: (0, r.unixTime)(),
                                            chatId: e.id
                                        }]);
                                    }
                                });
                            }
                        }
                    })).apply(this, arguments);
                }
                let Y;
                const K = f.ChatCollection.getActive();
                if (!(K == null ? undefined : K.id.equals(a.id))) {
                    var X;
                    var Z;
                    (0, u.logMessageClick)(U, (X = a.businessProfile) === null || X === undefined ? undefined : X.isProfileLinked, !!((Z = a.businessProfile) === null || Z === undefined ? undefined : Z.coverPhoto));
                    Y = W.default.createElement(m.default, {
                        xstyle: L.uiMargin.horiz12,
                        Icon: (0, o.getABPropConfigValue)("unified_user_profile_navigation_enabled") ? p.ChatIcon : h.ChatMsgIcon,
                        label: (0, _.default)("Message"),
                        onClick: () => {
                            ! function () {
                                q.apply(this, arguments);
                            }();
                        },
                        testid: "business-action chat"
                    });
                }
                let Q;
                let $;
                let J;
                if (z.isVoiceCallEnabled) {
                    Q = W.default.createElement(m.default, {
                        xstyle: L.uiMargin.horiz12,
                        Icon: R.VoiceCallFilledIcon,
                        label: F.fbt._("Audio", null, {
                            hk: "rWU8D"
                        }),
                        disabled: !z.canStartVoiceCall,
                        onClick: () => {
                            var e;
                            var t;
                            (0, u.logVoiceCallClick)(U, (e = a.businessProfile) === null || e === undefined ? undefined : e.isProfileLinked, !!((t = a.businessProfile) === null || t === undefined ? undefined : t.coverPhoto));
                            const n = a.id.isLid() ? a.phoneNumber : a.id;
                            if ((0, I.shouldDisplayPhoneNumberHidingModal)(a)) {
                                (0, I.displayPhoneNumberHidingModal)(a, false);
                            } else if (n != null) {
                                var l;
                                if (!((l = j.default.Voip) === null || l === undefined)) {
                                    l.callStart(n, false);
                                }
                            }
                        },
                        testid: "business-action voice-call"
                    });
                }
                if (((t = a.businessProfile) === null || t === undefined || (n = t.profileOptions) === null || n === undefined ? undefined : n.commerceExperience) === s.COMMERCE_EXPERIENCE_TYPES.CATALOG) {
                    $ = W.default.createElement(m.default, {
                        xstyle: L.uiMargin.horiz12,
                        Icon: d.CatalogFilledIcon,
                        label: F.fbt._("Catalog", null, {
                            hk: "3QDkTE"
                        }),
                        onClick: () => {
                            var e;
                            var t;
                            (0, u.logCatalogClick)(U, (e = a.businessProfile) === null || e === undefined ? undefined : e.isProfileLinked, !!((t = a.businessProfile) === null || t === undefined ? undefined : t.coverPhoto));
                            G((0, T.getProductCatalogContext)(V), "ContactInfo");
                        },
                        testid: "business-action catalog"
                    });
                }
                if ((0, c.hasShop)(a.businessProfile)) {
                    if (!((0, i.bannedShopsEnabled)() && (0, c.isShopBanned)(a.businessProfile))) {
                        J = W.default.createElement(m.default, {
                            xstyle: L.uiMargin.horiz12,
                            Icon: x.ShopFilledIcon,
                            label: F.fbt._("Shop", null, {
                                hk: "3KsdlE"
                            }),
                            onClick: function () {
                                var e;
                                var t;
                                (0, u.logShopsClick)(U, (e = a.businessProfile) === null || e === undefined ? undefined : e.isProfileLinked, !!((t = a.businessProfile) === null || t === undefined ? undefined : t.coverPhoto));
                                (0, c.goToShop)(a.businessProfile);
                            },
                            testid: "business-action shop"
                        });
                    }
                }
                const ee = !(0, y.getIsIAS)(a) && !(0, y.getId)(a).isBot() && !(0, y.getIsCAPISupportAccount)(a) && W.default.createElement(m.default, {
                    xstyle: L.uiMargin.horiz12,
                    Icon: P.ForwardFilledIcon,
                    label: F.fbt._("Share", null, {
                        hk: "4F3c6E"
                    }).toString(),
                    onClick: function () {
                        var e;
                        var t;
                        (0, u.logForwardClick)(U, (e = a.businessProfile) === null || e === undefined ? undefined : e.isProfileLinked, !!((t = a.businessProfile) === null || t === undefined ? undefined : t.coverPhoto));
                        O.ModalManager.open(W.default.createElement(N.SendContactsModalLoadable, {
                            contacts: [(0, D.unproxy)(a)],
                            onContactsSent: e => {
                                b.Cmd.openChatFromUnread(e).then(() => {});
                            }
                        }));
                    },
                    testid: "business-action forward"
                });
                const te = F.fbt._("Request", null, {
                    hk: "1Qh451"
                });
                const ne = F.fbt._("Requested", null, {
                    hk: "3GgAXn"
                });
                const ae = (0, y.getCanRequestPhoneNumber)(a) ? te : ne;
                const le = e.displayRequestPnButton && W.default.createElement(m.default, {
                    Icon: C.DialpadSmallIcon,
                    xstyle: L.uiMargin.horiz12,
                    iconWidth: 19,
                    label: ae,
                    disabled: !(0, y.getCanRequestPhoneNumber)(a),
                    onClick: () => {
                        O.ModalManager.open(W.default.createElement(A.default, {
                            entryPoint: B.PNH_ENTRY_POINT_TYPE.CHAT_INFO_REQUEST
                        }));
                    },
                    testid: "request-phone-number-button-business"
                });
                return W.default.createElement(S.FlexRow, {
                    xstyle: H.actionsRow,
                    justify: "center"
                }, le, Y, Q, $, J, ee);
            };
            var l = a(n(348926));
            var r = n(632157);
            var o = n(287461);
            var i = n(72696);
            var u = n(815651);
            var s = n(817649);
            var c = n(542358);
            var d = n(211238);
            var f = n(351053);
            var p = n(404378);
            var m = a(n(983098));
            var g = a(n(9729));
            var h = n(155734);
            var E = n(698867);
            var b = n(780549);
            var v = n(877171);
            var y = n(660666);
            var C = n(861038);
            var M = n(568550);
            var k = n(900316);
            var _ = a(n(395767));
            var w = n(581354);
            var S = n(690495);
            var P = n(660476);
            var O = n(114850);
            var I = n(417016);
            var T = n(932523);
            var A = a(n(755140));
            var N = n(340576);
            var x = n(337951);
            var D = n(163139);
            var L = n(676345);
            var R = n(626261);
            var j = a(n(961745));
            var B = n(126246);
            var F = n(548360);
            var W = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var n = G(t);
                if (n && n.has(e)) {
                    return n.get(e);
                }
                var a = {};
                var l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e) {
                    if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                        if (o && (o.get || o.set)) {
                            Object.defineProperty(a, r, o);
                        } else {
                            a[r] = e[r];
                        }
                    }
                }
                a.default = e;
                if (n) {
                    n.set(e, a);
                }
                return a;
            }(n(667294));
            a(n(156720));

            function G (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var n = new WeakMap();
                return (G = function (e) {
                    if (e) {
                        return n;
                    } else {
                        return t;
                    }
                })(e);
            }
            const H = {
                actionsRow: {
                    marginTop: "c46o30wg",
                    marginEnd: "bsg2wrd4",
                    marginBottom: "brac1wpa",
                    marginStart: "f459d30t",
                    "@media (min-width: 1300px)": {
                        marginStart: "hfp8519b",
                        marginEnd: "acdu7ris"
                    }
                }
            };
        },
        450715: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const {
                    businessHours: t,
                    isProfileLinked: n,
                    hasCoverPhoto: a
                } = e;
                const o = (0, s.getProductCatalogSessionId)((0, m.useContext)(i.DrawerContext));
                const u = (0, r.getBusinessOpenState)(t);
                const [d, g] = (0, m.useState)(true);
                if (t == null) {
                    return null;
                }
                const h = (0, c.getBusinessHours)(t).map(e => {
                    const {
                        day: t,
                        hours: n,
                        first: a
                    } = e;
                    let l = t;
                    let o = n;
                    let i = false;
                    if (a) {
                        switch (u.status) {
                            case r.BUSINESS_OPEN_STATUS.OPEN_24H:
                                l = p.fbt._("Open now", null, {
                                    hk: "28hpHy"
                                });
                                o = p.fbt._("Open 24 hours", null, {
                                    hk: "1AlfF5"
                                });
                                i = true;
                                break;
                            case r.BUSINESS_OPEN_STATUS.OPEN_APPOINTMENT:
                                l = p.fbt._("Open now", null, {
                                    hk: "28hpHy"
                                });
                                o = p.fbt._("Open by appointment only", null, {
                                    hk: "1nxH9v"
                                });
                                i = true;
                                break;
                            case r.BUSINESS_OPEN_STATUS.OPEN:
                                l = p.fbt._("Open now", null, {
                                    hk: "28hpHy"
                                });
                                i = true;
                                break;
                            case r.BUSINESS_OPEN_STATUS.CLOSED_TODAY:
                                o = p.fbt._("Closed", null, {
                                    hk: "3IRgct"
                                });
                        }
                    }
                    if (!a && d) {
                        return null;
                    } else {
                        return m.default.createElement(b, {
                            day: l,
                            dayIsOpen: i,
                            key: t,
                            hours: o,
                            first: a,
                            collapsed: d
                        });
                    }
                });
                return m.default.createElement(f.default, {
                    xstyle: E.businessHours,
                    onClick: () => {
                        (0, l.logHoursClick)(o, n, !!a);
                        g(!d);
                    },
                    testid: "business-hours-expand"
                }, h);
            };
            var l = n(815651);
            var r = n(542358);
            var o = n(62388);
            var i = n(568550);
            var u = n(305521);
            var s = n(932523);
            var c = n(341463);
            var d = n(676345);
            var f = a(n(625903));
            var p = n(548360);
            var m = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var n = h(t);
                if (n && n.has(e)) {
                    return n.get(e);
                }
                var a = {};
                var l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e) {
                    if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                        if (o && (o.get || o.set)) {
                            Object.defineProperty(a, r, o);
                        } else {
                            a[r] = e[r];
                        }
                    }
                }
                a.default = e;
                if (n) {
                    n.set(e, a);
                }
                return a;
            }(n(667294));
            var g = a(n(156720));

            function h (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var n = new WeakMap();
                return (h = function (e) {
                    if (e) {
                        return n;
                    } else {
                        return t;
                    }
                })(e);
            }
            const E = {
                businessHours: {
                    display: "f804f6gw",
                    width: "ln8gz9je",
                    textAlign: "ljrqcn24"
                },
                businessHoursChevron: {
                    display: "lgkeaz1o",
                    color: "cs9t9or5",
                    verticalAlign: "fewfhwl7"
                },
                businessHoursHours: {
                    display: "lgkeaz1o",
                    width: "ln8gz9je",
                    lineHeight: "r5qsrrlp",
                    textAlign: "e65innqk",
                    whiteSpace: "bbv8nyr4",
                    verticalAlign: "fewfhwl7"
                },
                businessHoursRow: {
                    display: "plrz2mwq",
                    fontSize: "f8jlpxt4",
                    color: "sbs3osm6"
                },
                businessHoursDay: {
                    display: "lgkeaz1o",
                    whiteSpace: "le5p0ye3",
                    verticalAlign: "fewfhwl7"
                },
                firstRow: {
                    fontSize: "enbbiyaj",
                    color: "k2bacm8l"
                },
                flipSvg: {
                    transform: "b5u0g8pm",
                    transformOrigin: "sx61ek5s"
                },
                dayIsOpen: {
                    fontWeight: "hnx8ox4h",
                    color: "j5au4wul"
                }
            };

            function b (e) {
                if (e.first) {
                    return m.default.createElement("div", {
                        className: (0, g.default)(E.businessHoursRow, e.first && E.firstRow)
                    }, m.default.createElement("div", {
                        className: (0, g.default)(E.businessHoursDay, d.uiPadding.end15, e.dayIsOpen && E.dayIsOpen)
                    }, m.default.createElement(u.EmojiText, {
                        direction: "auto",
                        text: e.day
                    })), m.default.createElement("div", {
                        className: (0, g.default)(E.businessHoursHours, d.uiPadding.end5)
                    }, m.default.createElement(u.EmojiText, {
                        direction: "auto",
                        text: e.hours
                    })), m.default.createElement("div", {
                        className: (0, g.default)(E.businessHoursChevron, d.uiPadding.top4, d.uiPadding.start4),
                        role: "button"
                    }, m.default.createElement(o.ChevronDownAltIcon, {
                        xstyle: !e.collapsed && E.flipSvg,
                        displayInline: true
                    })));
                } else {
                    return m.default.createElement("div", {
                        className: (0, g.default)(E.businessHoursRow)
                    }, m.default.createElement("div", {
                        className: (0, g.default)(E.businessHoursDay, d.uiPadding.end15, d.uiPadding.top8)
                    }, m.default.createElement(u.EmojiText, {
                        direction: "auto",
                        text: e.day
                    })), m.default.createElement("div", {
                        className: (0, g.default)(E.businessHoursHours, d.uiPadding.end5, d.uiPadding.top8)
                    }, m.default.createElement(u.EmojiText, {
                        direction: "auto",
                        text: e.hours
                    })));
                }
            }
        },
        906015: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const {
                    businessProfile: t,
                    showDescription: n = true
                } = e;
                const {
                    description: a,
                    address: y,
                    latitude: M,
                    longitude: k,
                    website: _,
                    email: w,
                    businessHours: S,
                    isProfileLinked: P,
                    coverPhoto: O
                } = (0, v.useModelValues)(t, ["description", "address", "latitude", "longitude", "website", "email", "businessHours", "isProfileLinked", "coverPhoto"]);
                const I = (0, E.useContext)(u.DrawerContext);
                const T = (0, p.getProductCatalogSessionId)(I);
                let A = a;
                if (t.id.isCAPISupportAccount()) {
                    A = (0, m.SupportChatDescription)().toString();
                }
                const N = [];
                if (n && A != null) {
                    N.push(E.default.createElement("div", {
                        className: (0, b.default)(C.section)
                    }, E.default.createElement(c.ExpandableText, {
                        text: A,
                        textLimit: i.default.BUSINESS_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH
                    }, e => {
                        let {
                            textLimit: t
                        } = e;
                        return E.default.createElement(s.EmojiText, {
                            className: (0, b.default)(C.description),
                            selectable: true,
                            direction: "auto",
                            text: A,
                            textLimit: t,
                            ellipsify: true,
                            multiline: true,
                            inferLinesDirection: true
                        });
                    })));
                }
                if (S != null) {
                    N.push(E.default.createElement("div", {
                        className: (0, b.default)(C.section)
                    }, E.default.createElement(l.default, {
                        businessHours: S,
                        isProfileLinked: P,
                        hasCoverPhoto: !!O
                    })));
                }
                if (y != null) {
                    N.push(E.default.createElement("div", {
                        className: (0, b.default)(C.section)
                    }, E.default.createElement(s.EmojiText, {
                        selectable: true,
                        direction: "auto",
                        text: y
                    })));
                }
                if (M != null && k != null) {
                    N.push(E.default.createElement("div", {
                        className: (0, b.default)(C.section, C.map, g.uiMargin.bottom8, C.mapContainer)
                    }, E.default.createElement(f.default, {
                        lat: M,
                        lng: k,
                        name: y || "",
                        width: 590,
                        height: 132,
                        onClick: () => (0, r.logLocationClick)(T, P, !!O),
                        testid: "business-info-map"
                    })));
                }
                if (w != null) {
                    N.push(E.default.createElement("div", {
                        className: (0, b.default)(C.section)
                    }, E.default.createElement(d.ExternalLink, {
                        xstyle: C.sectionLink,
                        href: `mailto:${w}`,
                        onClick: () => (0, r.logEmailClick)(T, P, !!O),
                        testid: "business-info-email"
                    }, w)));
                }
                if (_ != null && _.length > 0) {
                    N.push(E.default.createElement("div", {
                        className: (0, b.default)(C.section)
                    }, _.map(e => E.default.createElement("div", {
                        key: e
                    }, E.default.createElement(d.ExternalLink, {
                        xstyle: C.sectionLink,
                        href: h.default.toMaliciousSiteRedirect(e),
                        onClick: () => (0, r.logWebsiteClick)(T, P, !!O),
                        testid: "business-info-website"
                    }, e)))));
                }
                if (N.length === 0) {
                    return null;
                }
                return E.default.createElement(o.ChatInfoDrawerSection, {
                    xstyle: g.uiPadding.vert16
                }, N.map((e, t) => E.default.createElement("div", {
                    key: t,
                    className: (0, b.default)(t !== 0 && g.uiMargin.top24)
                }, e)));
            };
            var l = a(n(450715));
            var r = n(815651);
            var o = n(464659);
            var i = a(n(846870));
            var u = n(568550);
            var s = n(305521);
            var c = n(999649);
            var d = n(753233);
            var f = a(n(459510));
            var p = n(932523);
            var m = n(666836);
            var g = n(676345);
            var h = a(n(79291));
            var E = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var n = y(t);
                if (n && n.has(e)) {
                    return n.get(e);
                }
                var a = {};
                var l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e) {
                    if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                        if (o && (o.get || o.set)) {
                            Object.defineProperty(a, r, o);
                        } else {
                            a[r] = e[r];
                        }
                    }
                }
                a.default = e;
                if (n) {
                    n.set(e, a);
                }
                return a;
            }(n(667294));
            var b = a(n(156720));
            var v = n(655241);

            function y (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var n = new WeakMap();
                return (y = function (e) {
                    if (e) {
                        return n;
                    } else {
                        return t;
                    }
                })(e);
            }
            const C = {
                description: {
                    lineHeight: "pvbam5uh"
                },
                section: {
                    fontSize: "enbbiyaj",
                    lineHeight: "erpdyial",
                    color: "tviruh8d"
                },
                sectionLink: {
                    color: "bsaq4yhm"
                },
                mapContainer: {
                    height: "qkegxuty"
                },
                map: {
                    position: "g0rxnol2",
                    display: "p357zi0d",
                    alignItems: "gndfcl4n",
                    justifyContent: "ac2vgrno",
                    overflowX: "gfz4du6o",
                    overflowY: "r7fjleex"
                }
            };
        },
        766491: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const {
                    contact: t,
                    businessProfile: n
                } = e;
                const a = (0, r.isBizBot3pEnabled)() && n.isBizBot3p;
                let v;
                let y;
                let C;
                const M = () => {
                    if ((0, c.isBlueEducationEnabled)()) {
                        (0, i.logClickProfileBadge)(t);
                        d.ModalManager.open(h.default.createElement(o.default, null));
                    }
                };
                if (n.customUrl != null) {
                    C = h.default.createElement("div", {
                        className: (0, E.default)(b.subtitle)
                    }, h.default.createElement(s.EmojiText, {
                        text: n.customUrl,
                        direction: "auto",
                        titlify: true,
                        breakWord: true,
                        inlineblock: true
                    }));
                }
                const k = (0, u.getShowBusinessCheckmarkAsPrimary)(t);
                const _ = (0, u.getShowBusinessCheckmarkAsSecondary)(t);
                if ((0, u.getIsMe)(t)) {
                    v = h.default.createElement(f.Name, {
                        contact: t,
                        showMessageYourselfName: true,
                        useVerifiedName: true,
                        breakWord: true,
                        selectable: true
                    });
                    if (t.name !== t.verifiedName) {
                        y = h.default.createElement(f.Name, {
                            contact: t,
                            selectable: true
                        });
                    }
                } else {
                    v = h.default.createElement(f.Name, {
                        contact: t,
                        showBusinessCheckmark: k,
                        onClick: k ? M : null,
                        makeCheckmarkClickable: k,
                        checkmarkLarge: true,
                        breakWord: true,
                        selectable: true
                    });
                    if ((0, u.getIsIAS)(t)) {
                        y = h.default.createElement("div", {
                            className: (0, E.default)(b.subtitle)
                        }, h.default.createElement(s.EmojiText, {
                            text: g.fbt._("Official WhatsApp Account", null, {
                                hk: "4oZMU1"
                            }),
                            direction: "auto",
                            ellipsify: true,
                            titlify: true,
                            breakWord: true,
                            selectable: true
                        }));
                    } else if ((0, u.getId)(t).isBot() || a) {
                        y = h.default.createElement("div", {
                            className: (0, E.default)(b.botSubtitle)
                        }, g.fbt._("AI", null, {
                            hk: "2Mphpa"
                        }), (0, u.getId)(t).isBot() && h.default.createElement(l.AiSignalIcon, {
                            width: 15,
                            height: 15,
                            xstyle: [m.uiMargin.top2, m.uiMargin.start2, b.botIcon]
                        }));
                    } else if ((0, u.getIsCAPISupportAccount)(t)) {
                        y = h.default.createElement("div", {
                            className: (0, E.default)(b.subtitle)
                        }, h.default.createElement(s.EmojiText, {
                            text: (0, p.SupportChatSubtitle)(),
                            direction: "auto",
                            ellipsify: true,
                            titlify: true,
                            breakWord: true,
                            selectable: true
                        }));
                    } else if (t.name && t.name !== t.verifiedName) {
                        y = h.default.createElement(f.Name, {
                            contact: t,
                            showBusinessCheckmark: _,
                            onClick: _ ? M : null,
                            makeCheckmarkClickable: _,
                            useVerifiedName: true,
                            breakWord: true,
                            selectable: true
                        });
                    }
                }
                return h.default.createElement("div", {
                    className: (0, E.default)(b.container)
                }, h.default.createElement("div", {
                    className: (0, E.default)(b.title)
                }, v), y, C);
            };
            var l = n(321545);
            var r = n(354458);
            var o = a(n(684625));
            var i = n(243224);
            var u = n(660666);
            var s = n(305521);
            var c = n(97858);
            var d = n(114850);
            var f = n(21645);
            var p = n(666836);
            var m = n(676345);
            var g = n(548360);
            var h = a(n(667294));
            var E = a(n(156720));
            const b = {
                container: {
                    marginTop: "tt8xd2xn",
                    marginEnd: "jnwc1y2a",
                    marginBottom: "ngycyvoj",
                    marginStart: "svoq16ka"
                },
                subtitle: {
                    color: "p6nhtbpp",
                    fontSize: "enbbiyaj",
                    lineHeight: "tkq7s68q",
                    marginTop: "tt8xd2xn",
                    marginEnd: "jnwc1y2a",
                    marginBottom: "inww9tbj",
                    marginStart: "svoq16ka"
                },
                botSubtitle: {
                    color: "i8b0kslj",
                    fontSize: "enbbiyaj",
                    lineHeight: "tkq7s68q",
                    display: "p357zi0d",
                    justifyContent: "ac2vgrno"
                },
                botIcon: {
                    color: "i8b0kslj"
                },
                title: {
                    fontSize: "iqrewfee",
                    fontWeight: "sy6s5v3r",
                    marginTop: "tt8xd2xn",
                    marginEnd: "jnwc1y2a",
                    marginBottom: "or9x5nie",
                    marginStart: "svoq16ka"
                }
            };
        },
        449397: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.BusinessOpenHours = function (e) {
                const {
                    hours: t
                } = e;
                const n = function (e) {
                    switch (e.status) {
                        case r.BUSINESS_OPEN_STATUS.OPEN_24H:
                            return i.fbt._("{open} 24 hours", [i.fbt._param("open", `<span class="${(0, s.default)(d)}">${i.fbt._("Open", null, {
              hk: "187rvw"
            }).toString()}</span>`)], {
                                hk: "1aA6f9"
                            });
                        case r.BUSINESS_OPEN_STATUS.OPEN_APPOINTMENT:
                            return i.fbt._("{open} by appointment only", [i.fbt._param("open", `<span class="${(0, s.default)(d)}">${i.fbt._("Open", null, {
              hk: "187rvw"
            }).toString()}</span>`)], {
                                hk: "z8CGT"
                            });
                        case r.BUSINESS_OPEN_STATUS.OPEN:
                            if (e.openUntil && e.additionalOpen && e.additionalClose) {
                                return i.fbt._("{open} until {time}, {additionalOpenTime} - {additionalCloseTime}", [i.fbt._param("open", `<span class="${(0, s.default)(d)}">${i.fbt._("Open", null, {
                hk: "187rvw"
              }).toString()}</span>`), i.fbt._param("time", p(e.openUntil)), i.fbt._param("additionalOpenTime", p(e.additionalOpen)), i.fbt._param("additionalCloseTime", p(e.additionalClose))], {
                                    hk: "2dJgLQ"
                                });
                            }
                            if (e.openUntil) {
                                return i.fbt._("{open} until {time}", [i.fbt._param("open", `<span class="${(0, s.default)(d)}">${i.fbt._("Open", null, {
                hk: "187rvw"
              }).toString()}</span>`), i.fbt._param("time", p(e.openUntil))], {
                                    hk: "3Dd8an"
                                });
                            }
                            break;
                        case r.BUSINESS_OPEN_STATUS.CLOSED:
                            if (e.opensAt) {
                                return i.fbt._("{closed}, opens at {time}", [i.fbt._param("closed", `<span class="${(0, s.default)(c)}">${i.fbt._("Closed now", null, {
                hk: "2oDK4r"
              }).toString()}</span>`), i.fbt._param("time", p(e.opensAt))], {
                                    hk: "LvVmY"
                                });
                            } else {
                                return `<span class="${(0, s.default)(c)}">${i.fbt._("Closed now", null, {
                hk: "2oDK4r"
              }).toString()}</span>`;
                            }
                        case r.BUSINESS_OPEN_STATUS.CLOSED_TODAY:
                            return `<span class="${(0, s.default)(c)}">${i.fbt._("Closed today", null, {
              hk: "3uCCvH"
            }).toString()}</span>`;
                    }
                    return null;
                }((0, r.getBusinessOpenState)(t));
                if (n == null) {
                    return null;
                }
                const a = l.default.sanitize(n.toString());
                return u.default.createElement("div", {
                    className: (0, s.default)(f),
                    dangerouslySetInnerHTML: {
                        __html: a
                    }
                });
            };
            var l = a(n(724843));
            var r = n(542358);
            var o = a(n(932325));
            var i = n(548360);
            var u = a(n(667294));
            var s = a(n(156720));
            const c = {
                color: "mvxzr2tb"
            };
            const d = {
                color: "j5au4wul"
            };
            const f = {
                color: "sbs3osm6",
                fontSize: "f8jlpxt4",
                marginTop: "tt8xd2xn",
                marginEnd: "jnwc1y2a",
                marginBottom: "g105fvfm",
                marginStart: "svoq16ka"
            };

            function p (e) {
                if (e == null) {
                    return "";
                } else {
                    return e.toLocaleTimeString(o.default.getLocale(), {
                        hour: "numeric",
                        minute: "2-digit"
                    });
                }
            }
        },
        745309: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.BusinessProfile = function (e) {
                const {
                    contact: t
                } = e;
                const [n, a, l, u] = (0, x.useContactValues)(e.contact.id, [p.getId, p.getVerifiedLevel, p.getName, p.getVerifiedName]);
                const s = (0, D.useModelValues)(e.businessProfile, ["description", "categories", "website", "email", "stale", "latitude", "longitude", "businessHours", "structuredAddress"]);
                (0, A.useEffect)(() => {
                    new O.ViewBusinessProfileWamEvent({
                        viewBusinessProfileAction: I.VIEW_BUSINESS_PROFILE_ACTION.ACTION_IMPRESSION
                    }).commit();
                }, []);
                const d = A.default.createElement(j, {
                    contact: t
                });
                let m;
                let v;
                let C;
                let M;
                let k;
                let _;
                const T = s;
                if (T.stale) {
                    m = A.default.createElement("div", {
                        className: (0, N.default)(R.contactBusinessInfoSpinner, P.uiMargin.top24, P.uiMargin.bottom12)
                    }, A.default.createElement(S.Spinner, {
                        size: 20,
                        stroke: 5
                    }));
                } else {
                    var L;
                    v = ((L = T.categories) === null || L === undefined ? undefined : L.length) ? A.default.createElement(G, {
                        icon: A.default.createElement(r.BusinessCategoryIcon, null)
                    }, A.default.createElement(h.EmojiText, {
                        selectable: true,
                        direction: "auto",
                        text: T.categories.map(e => e.localized_display_name).join(y.default.t(63))
                    })) : null;
                    C = T.description != null && T.description !== "" ? A.default.createElement(G, {
                        icon: A.default.createElement(o.BusinessDescriptionIcon, null)
                    }, A.default.createElement(E.ExpandableText, {
                        text: T.description,
                        textLimit: f.default.BUSINESS_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH
                    }, e => {
                        let {
                            textLimit: t
                        } = e;
                        return A.default.createElement(h.EmojiText, {
                            selectable: true,
                            direction: "auto",
                            breakWord: true,
                            text: T.description,
                            textLimit: t
                        });
                    })) : null;
                    if (T.website && Array.isArray(T.website) && T.website.length) {
                        M = T.website.map((e, t) => {
                            const n = (0, w.getWebsiteLink)(e);
                            return A.default.createElement(G, {
                                icon: A.default.createElement(c.BusinessWebsiteIcon, null),
                                key: t
                            }, A.default.createElement(b.ExternalLink, {
                                href: n
                            }, A.default.createElement(h.EmojiText, {
                                selectable: true,
                                direction: "auto",
                                text: e
                            })));
                        });
                    }
                    if (T.businessHours) {
                        k = A.default.createElement(B, {
                            businessHours: T.businessHours
                        });
                    }
                    const e = T.email;
                    if (e != null && e !== "") {
                        _ = A.default.createElement(G, {
                            icon: A.default.createElement(i.BusinessEmailIcon, null),
                            dir: "auto"
                        }, A.default.createElement(b.ExternalLink, {
                            href: `mailto:${e}`
                        }, A.default.createElement(h.EmojiText, {
                            selectable: true,
                            direction: "auto",
                            text: e
                        })));
                    }
                }
                const F = Boolean(T.latitude !== undefined && T.longitude !== undefined || T.structuredAddress);
                let H;
                if (m || F || v || C || k != null || _ || M) {
                    H = A.default.createElement(g.default, {
                        theme: "padding"
                    }, A.default.createElement("div", {
                        className: (0, N.default)(R.contactBusinessInfo)
                    }, m, A.default.createElement(W, {
                        contactName: l,
                        latitude: T.latitude,
                        longitude: T.longitude,
                        structuredAddress: T.structuredAddress
                    }), v, C, k, _, M));
                }
                return A.default.createElement(A.default.Fragment, null, A.default.createElement(g.default, null, d), H);
            };
            var l = n(335843);
            var r = n(942509);
            var o = n(672244);
            var i = n(556862);
            var u = n(979504);
            var s = n(817649);
            var c = n(54509);
            var d = n(62388);
            var f = a(n(846870));
            var p = n(660666);
            var m = a(n(831269));
            var g = a(n(969358));
            var h = n(305521);
            var E = n(999649);
            var b = n(753233);
            var v = n(975279);
            var y = a(n(932325));
            var C = a(n(459510));
            var M = n(300987);
            var k = n(114850);
            var _ = a(n(517729));
            var w = n(341463);
            var S = n(956113);
            var P = n(676345);
            var O = n(875302);
            var I = n(111540);
            var T = n(548360);
            var A = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var n = L(t);
                if (n && n.has(e)) {
                    return n.get(e);
                }
                var a = {};
                var l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e) {
                    if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                        if (o && (o.get || o.set)) {
                            Object.defineProperty(a, r, o);
                        } else {
                            a[r] = e[r];
                        }
                    }
                }
                a.default = e;
                if (n) {
                    n.set(e, a);
                }
                return a;
            }(n(667294));
            var N = a(n(156720));
            var x = n(379811);
            var D = n(655241);

            function L (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var n = new WeakMap();
                return (L = function (e) {
                    if (e) {
                        return n;
                    } else {
                        return t;
                    }
                })(e);
            }
            const R = {
                dataRow: {
                    display: "p357zi0d",
                    alignItems: "r15c9g6i"
                },
                flipSvg: {
                    transform: "b5u0g8pm",
                    transformOrigin: "sx61ek5s"
                },
                infoIcon: {
                    color: "jq3rn4u7"
                },
                contactBusinessInfoSpinner: {
                    display: "p357zi0d",
                    justifyContent: "ac2vgrno"
                },
                contactBusinessInfo: {
                    marginTop: "lx3vef7y",
                    marginStart: "bx0vhl82"
                },
                businessHoursChevron: {
                    display: "lgkeaz1o",
                    color: "cs9t9or5",
                    verticalAlign: "fewfhwl7"
                },
                businessHoursRow: {
                    display: "plrz2mwq"
                },
                businessHoursDay: {
                    display: "lgkeaz1o",
                    paddingEnd: "k3h23tga",
                    whiteSpace: "le5p0ye3",
                    verticalAlign: "fewfhwl7"
                },
                businessHoursHours: {
                    display: "lgkeaz1o",
                    width: "ln8gz9je",
                    whiteSpace: "bbv8nyr4",
                    verticalAlign: "fewfhwl7"
                },
                businessMap: {
                    position: "g0rxnol2",
                    display: "p357zi0d",
                    alignItems: "gndfcl4n",
                    justifyContent: "ac2vgrno",
                    overflowX: "gfz4du6o",
                    overflowY: "r7fjleex"
                },
                dataRowIcon: {
                    flexShrink: "oq44ahr5",
                    width: "i94gqilv",
                    marginEnd: "awqnedpp",
                    color: "cs9t9or5"
                },
                dataRowText: {
                    overflowX: "gfz4du6o",
                    overflowY: "r7fjleex",
                    fontSize: "f8jlpxt4",
                    lineHeight: "r5qsrrlp"
                }
            };

            function j (e) {
                let {
                    contact: t
                } = e;
                const n = t.verifiedLevel === s.VERIFIED_LEVEL.HIGH ? T.fbt._("Official business account", null, {
                    hk: "1KruJ"
                }) : T.fbt._("Business account", null, {
                    hk: "2lzdAg"
                });
                return A.default.createElement(m.default, {
                    testid: "business-title",
                    onClick: () => k.ModalManager.open(A.default.createElement(_.default, {
                        contact: t
                    })),
                    side: A.default.createElement(v.InfoIcon, {
                        xstyle: R.infoIcon,
                        displayInline: true
                    })
                }, n);
            }

            function B (e) {
                let {
                    businessHours: t
                } = e;
                const [n, a] = (0, A.useState)(true);
                const l = (0, w.getBusinessHours)(t).map(e => {
                    const {
                        day: t,
                        hours: a,
                        first: l
                    } = e;
                    if (!l && n) {
                        return null;
                    } else {
                        return A.default.createElement(F, {
                            day: t,
                            key: t,
                            hours: a,
                            first: l,
                            collapsed: n
                        });
                    }
                });
                return A.default.createElement(G, {
                    icon: A.default.createElement(u.BusinessHoursIcon, null),
                    onClick: () => a(!n)
                }, l);
            }
            const F = e => {
                const t = e.first ? A.default.createElement("div", {
                    className: (0, N.default)(R.businessHoursChevron, P.uiPadding.top4, P.uiPadding.start4),
                    role: "button"
                }, A.default.createElement(d.ChevronDownAltIcon, {
                    xstyle: e.collapsed && R.flipSvg,
                    displayInline: true
                })) : null;
                return A.default.createElement("div", {
                    className: (0, N.default)(R.businessHoursRow)
                }, A.default.createElement("div", {
                    className: (0, N.default)(R.businessHoursDay, !e.first && P.uiPadding.top8)
                }, A.default.createElement(h.EmojiText, {
                    direction: "auto",
                    text: e.day
                })), A.default.createElement("div", {
                    className: (0, N.default)(R.businessHoursHours, !e.first && P.uiPadding.top8)
                }, A.default.createElement(h.EmojiText, {
                    direction: "auto",
                    text: e.hours
                })), t);
            };
            const W = e => {
                let {
                    contactName: t,
                    latitude: n,
                    longitude: a,
                    structuredAddress: r
                } = e;
                const o = r ? function (e) {
                    const {
                        streetAddress: t,
                        localizedCityName: n,
                        zipCode: a
                    } = e;
                    if (t && n && a) {
                        return T.fbt._("{streetAddress}, {city} {zipCode}", [T.fbt._param("streetAddress", t), T.fbt._param("city", n), T.fbt._param("zipCode", a)], {
                            hk: "1McVXv"
                        }).toString();
                    } else if (t && n) {
                        return T.fbt._("{streetAddress}, {city}", [T.fbt._param("streetAddress", t), T.fbt._param("city", n)], {
                            hk: "1zyKhk"
                        }).toString();
                    } else {
                        return t;
                    }
                }(r) : null;
                let i;
                let u;
                if (o != null && o !== "") {
                    let e;
                    e = n != null && a != null ? (0, M.getMapUrl)(n, a, o) : (0, M.getSearchUrl)(o);
                    u = A.default.createElement("div", null, A.default.createElement(b.ExternalLink, {
                        href: e
                    }, A.default.createElement(h.EmojiText, {
                        selectable: true,
                        direction: "auto",
                        text: o
                    })));
                }
                if (n != null && a != null) {
                    i = A.default.createElement("div", {
                        style: {
                            height: 150
                        },
                        className: (0, N.default)(R.businessMap, P.uiMargin.bottom8, u != null && P.uiMargin.top8)
                    }, A.default.createElement(C.default, {
                        lat: n,
                        lng: a,
                        name: o || t,
                        width: 565,
                        height: 150
                    }));
                }
                if (u || i) {
                    return A.default.createElement(G, {
                        icon: A.default.createElement(l.BusinessAddressIcon, null)
                    }, u, i);
                } else {
                    return null;
                }
            };
            const G = e => A.default.createElement("div", {
                className: (0, N.default)(R.dataRow, P.uiMargin.bottom14, e.xstyle),
                onClick: e.onClick
            }, A.default.createElement("div", {
                className: (0, N.default)(R.dataRowIcon)
            }, e.icon), A.default.createElement("div", {
                className: (0, N.default)(R.dataRowText, P.uiPadding.top2)
            }, e.children));
        },
        718796: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                let {
                    contact: t,
                    businessProfile: n,
                    onOpenStatus: a,
                    onProductCatalog: b,
                    onProfilePicLoad: v,
                    onProfilePicClick: y,
                    isPhoneNumberHidden: C
                } = e;
                const {
                    businessHours: M,
                    categories: k
                } = (0, g.useModelValues)(n, ["businessHours", "categories"]);
                const _ = p.default.createElement(r.default, {
                    contact: t,
                    businessProfile: n
                });
                let w;
                if (!((0, u.getIsIAS)(t) || (0, u.getIsCAPISupportAccount)(t) || (0, u.getId)(t).isBot() || n.isBizBot3p || k == null || !(k.length > 0))) {
                    w = p.default.createElement("div", {
                        className: (0, m.default)(E)
                    }, k.map(e => e.localized_display_name).join(d.default.t(62)));
                }
                const S = M ? p.default.createElement(o.BusinessOpenHours, {
                    hours: M
                }) : null;
                const P = t.businessProfile ? p.default.createElement(i.default, {
                    contact: t,
                    businessProfile: t.businessProfile,
                    onClick: y,
                    onOpenStatus: a,
                    onLoad: v
                }) : null;
                const O = t.username != null && (t.id.isLid() && t.phoneNumber != null || !t.id.isLid()) ? p.default.createElement("div", {
                    className: (0, m.default)(E)
                }, t.username != null && `@${t.username}`) : null;
                return p.default.createElement(c.default, {
                    theme: "padding-no-margin"
                }, P, p.default.createElement("div", {
                    className: (0, m.default)(h)
                }, _, C && p.default.createElement(s.default, null), (0, f.usernameDisplayedEnabled)() && O, w, S, p.default.createElement(l.default, {
                    contact: t,
                    onProductCatalog: b,
                    displayRequestPnButton: C
                })));
            };
            var l = a(n(520228));
            var r = a(n(766491));
            var o = n(449397);
            var i = a(n(411019));
            var u = n(660666);
            var s = a(n(836513));
            var c = a(n(969358));
            var d = a(n(932325));
            var f = n(129417);
            var p = a(n(667294));
            var m = a(n(156720));
            var g = n(655241);
            const h = {
                textAlign: "qfejxiq4"
            };
            const E = {
                marginTop: "tt8xd2xn",
                marginEnd: "jnwc1y2a",
                marginBottom: "brac1wpa",
                marginStart: "svoq16ka",
                fontSize: "f8jlpxt4",
                color: "sbs3osm6",
                lineHeight: "jgi8eev7"
            };
        },
        855026: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ExitedGroupMemberSection = function (e) {
                let {
                    group: t
                } = e;
                if (!(0, i.groupsPrivacyTipsEnabled)()) {
                    return null;
                }
                return c.default.createElement(l.default, null, c.default.createElement(o.FlexColumn, {
                    padding: 16,
                    align: "center"
                }, c.default.createElement(u.WDSTextTitle, null, s.fbt._("You're no longer a participant in this group", null, {
                    hk: "1O1CWh"
                })), c.default.createElement(r.ExitedGroupQPSurface, {
                    group: t
                })));
            };
            var l = a(n(969358));
            var r = n(355793);
            var o = n(690495);
            var i = n(753284);
            var u = n(851488);
            var s = n(548360);
            var c = a(n(667294));
        },
        466488: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                let {
                    onClick: t,
                    parentGroupMetadata: n,
                    parentGroupChat: a
                } = e;
                const {
                    subgroupCount: b
                } = (0, h.default)(n);
                const {
                    name: v
                } = (0, E.useModelValues)(a.contact, ["name"]);
                const y = (0, r.isIntegritySuspendedCommunity)(a);
                (0, g.useEffect)(() => {
                    (0, d.queryAndUpdateSubgroupsMetadata)(n.id, n.joinedSubgroups);
                }, []);
                const C = m.fbt._("Community", null, {
                    hk: "2P4Qwb"
                });
                return g.default.createElement(u.default, {
                    theme: "no-padding"
                }, g.default.createElement(l.default, {
                    testid: "group-info-community-section",
                    image: g.default.createElement(i.DetailImage, {
                        id: n.id,
                        shape: i.DetailImageShape.Squircle,
                        size: 60
                    }),
                    primary: g.default.createElement(s.EmojiText, {
                        text: v,
                        ellipsify: true
                    }),
                    onClick: t,
                    theme: "community-home",
                    secondary: g.default.createElement(p.TextSpan, {
                        size: "16",
                        color: "secondary"
                    }, C, y ? null : g.default.createElement(g.default.Fragment, null, c.default.isRTL() ? " - " : " · ", m.fbt._({
                        "*": "{count} Groups",
                        _1: "1 Group"
                    }, [m.fbt._plural(b, "count")], {
                        hk: "38FdVG"
                    }))),
                    detail: g.default.createElement(o.ChevronRightAltIcon, {
                        color: f.SvgColorProp.SECONDARY,
                        directional: true
                    }),
                    focusable: true
                }));
            };
            var l = a(n(170206));
            var r = n(394164);
            var o = n(755782);
            var i = n(23641);
            var u = a(n(969358));
            var s = n(305521);
            var c = a(n(932325));
            var d = n(510900);
            var f = n(220584);
            var p = n(180519);
            var m = n(548360);
            var g = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var n = b(t);
                if (n && n.has(e)) {
                    return n.get(e);
                }
                var a = {};
                var l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e) {
                    if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                        if (o && (o.get || o.set)) {
                            Object.defineProperty(a, r, o);
                        } else {
                            a[r] = e[r];
                        }
                    }
                }
                a.default = e;
                if (n) {
                    n.set(e, a);
                }
                return a;
            }(n(667294));
            var h = a(n(847116));
            var E = n(655241);

            function b (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var n = new WeakMap();
                return (b = function (e) {
                    if (e) {
                        return n;
                    } else {
                        return t;
                    }
                })(e);
            }
        },
        483828: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                let {
                    chat: t,
                    groupMetadata: n
                } = e;
                const {
                    id: a,
                    parentGroup: x,
                    isUnnamed: D
                } = (0, T.useModelValues)(n, ["id", "parentGroup", "isUnnamed"]);
                const L = (0, I.default)(n.participants, "change:isAdmin", () => n.participants.iAmAdmin());
                const R = (0, I.default)(n.participants, ["bulk_add", "bulk_remove", "reset"], () => n.participants.length);
                const j = (0, i.getABPropConfigValue)("parent_group_min_participants_for_group_entry_point");
                const B = (0, A.default)();
                if (!(0, d.communitiesEnabled)() || !L || x != null || R < j || n.groupType === E.GroupType.LINKED_ANNOUNCEMENT_GROUP || !(0, d.communitiesCreationEnabled)()) {
                    return null;
                }
                const F = () => {
                    m.DrawerManager.openDrawerLeft(O.default.createElement(C.NewCommunityFlowLoadable, {
                        existingGroups: [a]
                    }), {
                        focusType: b.FocusType.TABBABLE
                    });
                    c.UiCommunityCreationAction.startSession(S.COMMUNITY_CREATION_ENTRYPOINT_TYPE.GROUP_INFO);
                    c.UiCommunityCreationAction.enter(w.COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.GROUP_INFO);
                };
                const W = function () {
                    var e = (0, l.default)(function* (e) {
                        yield(0, o.default)((0, M.setGroupSubject)(t, e), B).catch((0, r.catchAbort)(() => {})).catch(() => {
                            __LOG__(3)`name_group_modal:onSetSubject failed`;
                        });
                        v.ModalManager.close();
                        F();
                    });
                    return function () {
                        return e.apply(this, arguments);
                    };
                }();
                const G = () => {
                    v.ModalManager.open(O.default.createElement(p.ConfirmPopup, {
                        onOK: () => v.ModalManager.close(),
                        okText: (0, h.default)("OK")
                    }, P.fbt._("Only admins can edit this group's info", null, {
                        hk: "1a2ztg"
                    })));
                };
                return O.default.createElement(g.default, {
                    theme: "no-padding"
                }, O.default.createElement(u.default, {
                    testid: "group-info-create-community-section",
                    image: O.default.createElement(f.CommunitySquircleIcon, {
                        iconXstyle: N.communitySquircle,
                        width: 40,
                        height: 40
                    }),
                    primary: O.default.createElement(_.TextSpan, {
                        size: "16"
                    }, P.fbt._("Start a community", null, {
                        hk: "2hSyE2"
                    })),
                    onClick: () => {
                        if (D) {
                            var e;
                            var n;
                            const a = P.fbt._("This group was created without a name. Give it a name to create a community.", null, {
                                hk: "2BkS8"
                            });
                            v.ModalManager.open(O.default.createElement(y.default, {
                                chat: t,
                                subtext: a,
                                onCancel: () => v.ModalManager.close(),
                                onOK: W,
                                editable: (e = t.groupMetadata) === null || e === undefined ? undefined : e.canSetSubject(),
                                editRestrictionInfo: ((n = t.groupMetadata) === null || n === undefined ? undefined : n.restrict) ? G : undefined
                            }));
                        } else {
                            F();
                        }
                    },
                    theme: "community-create",
                    secondary: O.default.createElement(_.TextSpan, {
                        size: "14",
                        color: "secondary"
                    }, P.fbt._("Bring members together in topic-based groups", null, {
                        hk: "4mplI5"
                    })),
                    detail: O.default.createElement(s.ChevronRightAltIcon, {
                        color: k.SvgColorProp.SECONDARY,
                        directional: true
                    }),
                    focusable: true
                }));
            };
            var l = a(n(348926));
            var r = n(898817);
            var o = a(n(229922));
            var i = n(287461);
            var u = a(n(170206));
            var s = n(755782);
            var c = n(440067);
            var d = n(174834);
            var f = n(146281);
            var p = n(103440);
            var m = n(900316);
            var g = a(n(969358));
            var h = a(n(395767));
            var E = n(862159);
            var b = n(299950);
            var v = n(114850);
            var y = a(n(550506));
            var C = n(219548);
            var M = n(470824);
            var k = n(220584);
            var _ = n(180519);
            var w = n(135516);
            var S = n(909588);
            var P = n(548360);
            var O = a(n(667294));
            a(n(156720));
            var I = a(n(524578));
            var T = n(655241);
            var A = a(n(895851));
            const N = {
                communitySquircle: {
                    color: "fsk8o631"
                }
            };
        },
        20864: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const {
                    chat: t
                } = e;
                const n = (0, c.useOptionalModelValues)(t.groupMetadata, ["groupType"]);
                let a;
                a = (0, r.communitiesEnabled)() && (n == null ? undefined : n.groupType) === o.GroupType.LINKED_ANNOUNCEMENT_GROUP ? u.default.createElement("div", {
                    className: (0, s.default)(d)
                }, i.fbt._("", null, {
                    hk: "4kc4Kr"
                })) : i.fbt._("Add group description", null, {
                    hk: "BVsoQ"
                });
                return u.default.createElement(l.default, {
                    chat: e.chat,
                    showFullDescription: e.showFullDescription,
                    editRestrictionText: i.fbt._("Only admins can edit this group's info", null, {
                        hk: "1a2ztg"
                    }),
                    testid: "group-info-drawer-description-title-input",
                    containerTestId: "group-info-drawer-description-container",
                    emptyValuePlaceholder: a
                });
            };
            var l = a(n(707655));
            var r = n(174834);
            var o = n(862159);
            var i = n(548360);
            var u = a(n(667294));
            var s = a(n(156720));
            var c = n(655241);
            const d = {
                color: "tviruh8d",
                fontSize: "enbbiyaj"
            };
        },
        941943: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = undefined;
            var l = n(287461);
            var r = n(738501);
            var o = n(374660);
            var i = a(n(306007));
            var u = n(464659);
            var s = a(n(740681));
            var c = n(998123);
            var d = n(174834);
            var f = n(359198);
            var p = n(692310);
            var m = n(660666);
            var g = a(n(908081));
            var h = a(n(324093));
            var E = n(626194);
            var b = a(n(969358));
            var v = a(n(209064));
            var y = a(n(409558));
            var C = n(71957);
            var M = n(855026);
            var k = a(n(570834));
            var _ = n(714574);
            var w = a(n(466488));
            var S = a(n(483828));
            var P = a(n(20864));
            var O = a(n(299723));
            var I = n(767140);
            var T = n(951688);
            var A = a(n(453090));
            var N = n(503028);
            var x = a(n(483447));
            var D = n(862159);
            var L = n(769153);
            var R = n(97858);
            var j = n(114850);
            var B = a(n(832897));
            var F = n(111367);
            var W = n(474474);
            var G = n(150103);
            var H = a(n(634152));
            var V = n(407024);
            var U = n(163139);
            var z = n(428991);
            var q = n(983271);
            var Y = n(220584);
            var K = n(180519);
            var X = n(382117);
            var Z = n(676345);
            var Q = a(n(571256));
            var $ = n(571444);
            var J = n(521394);
            var ee = n(965927);
            var te = n(744976);
            var ne = n(869513);
            var ae = n(818674);
            var le = n(344575);
            var re = n(548360);
            var oe = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var n = ge(t);
                if (n && n.has(e)) {
                    return n.get(e);
                }
                var a = {};
                var l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e) {
                    if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                        if (o && (o.get || o.set)) {
                            Object.defineProperty(a, r, o);
                        } else {
                            a[r] = e[r];
                        }
                    }
                }
                a.default = e;
                if (n) {
                    n.set(e, a);
                }
                return a;
            }(n(667294));
            var ie = a(n(156720));
            var ue = n(379811);
            var se = a(n(401715));
            var ce = a(n(969651));
            var de = a(n(637660));
            var fe = n(808446);
            var pe = n(655241);
            var me = a(n(321201));

            function ge (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var n = new WeakMap();
                return (ge = function (e) {
                    if (e) {
                        return n;
                    } else {
                        return t;
                    }
                })(e);
            }
            const he = {
                body: {
                    flexShrink: "oq44ahr5",
                    flexGrow: "tvf2evcx",
                    flexBasis: "lb5m6g5c",
                    paddingBottom: "s9fl9ege"
                },
                announcementGroupDisclaimer: {
                    textAlign: "ljrqcn24",
                    paddingTop: "n1yiu2zv",
                    paddingBottom: "jd93c9cp",
                    paddingEnd: "bcymb0na",
                    paddingStart: "e8k79tju",
                    lineHeight: "jgi8eev7",
                    wordBreak: "cw3vfol9"
                },
                lastSectionRow: {
                    marginBottom: "brac1wpa"
                }
            };

            function Ee (e, t) {
                var n;
                var a;
                var ge;
                const {
                    onVerification: Ee,
                    onClose: be
                } = e;
                const ve = (0, me.default)();
                const ye = (0, ce.default)();
                const Ce = (0, se.default)();
                const Me = (0, pe.useModelValues)(e.chat, ["mute", "id", "pendingAction", "groupMetadata"]);
                const ke = (0, pe.useModelValues)(e.groupMetadata, ["id", "reportToAdminMode", "cachedDeviceCount", "cachedDeviceSizeBucket", "participants", "parentGroup", "pendingParticipants", "announce", "support", "incognito", "groupType", "restrict", "isIncognitoCag", "defaultSubgroup"]);
                const [_e, we, Se] = (0, ue.useContactValues)(e.contact.id, [m.getName, m.getId, _.getPendingAction]);
                const Pe = ke.groupType === D.GroupType.LINKED_ANNOUNCEMENT_GROUP;
                const Oe = (0, de.default)(() => new X.UiActionWamEvent({
                    uiActionType: Pe ? te.UI_ACTION_TYPE.DEFAULT_SUBGROUP_INFO_OPEN : te.UI_ACTION_TYPE.GROUP_INFO_OPEN,
                    uiActionPreloaded: true,
                    isLid: ke.isIncognitoCag
                }));
                const Ie = (0, de.default)(() => new k.default());
                const Te = (0, de.default)(() => new k.default());
                const Ae = (0, oe.useRef)(null);
                (0, fe.useListener)(ke.participants, ["bulk_add", "bulk_remove", "reset", "sort", "change:isAdmin", "change:isSuperAdmin"], ye);
                (0, fe.useListener)(ke.pendingParticipants, ["add", "remove", "reset"], ye);
                const Ne = () => {
                    var e;
                    const t = (e = ke.getParentGroupChat()) === null || e === undefined ? undefined : e.formattedTitle;
                    (0, p.groupOpenAddParticipantFlow)(ke, Me, t);
                };
                const xe = () => {
                    j.ModalManager.open(oe.default.createElement(v.default, {
                        chat: Me,
                        chatId: Me.id,
                        e2eSubtype: "info_encrypted"
                    }));
                };
                let De;
                (0, oe.useEffect)(() => {
                    if ((0, o.isIntegritySuspendedDefaultSubgroup)(Me)) {
                        (0, z.openTerminatedCommunityModal)();
                    } else if ((0, o.isTerminatedGroupOrNotMember)(Me)) {
                        if (!(0, o.isSupportGroup)(Me)) {
                            if ((0, R.isGroupSuspendV2Enabled)()) {
                                (0, q.openSuspendedGroupModalV2)(Me);
                            } else {
                                (0, q.openTerminatedGroupOrNotMemberModal)();
                            }
                        }
                    } else if ((0, o.isSuspendedGroup)(Me)) {
                        if ((0, R.isGroupSuspendV2Enabled)()) {
                            (0, q.openSuspendedGroupModalV2)(Me);
                        } else {
                            (0, q.openSuspendedGroupModal)((0, o.shouldIncludeEntityIdInAppealRequest)() === true ? ke.id.user.toString() : null);
                        }
                    }
                    if (ke.groupType !== D.GroupType.DEFAULT) {
                        new f.CommunityGroupJourneyEvent({
                            action: $.CHAT_FILTER_ACTION_TYPES.VIEW,
                            surface: ee.SURFACE_TYPE.GROUP_INFO,
                            chat: Me
                        }).commit();
                    }
                }, []);
                (0, oe.useEffect)(() => {
                    ke.participants.ensureSorted();
                    ke.pendingParticipants.ensureSorted();
                });
                (0, oe.useEffect)(() => {
                    const e = Oe.current;
                    if (e) {
                        const t = ke.cachedDeviceSizeBucket;
                        if (t != null) {
                            e.sizeBucket = t;
                        }
                        Object.assign(e, (0, ne.getGroupCountMetricsFromGroupMetadata)((0, U.unproxy)(ke)));
                        e.markUiActionT();
                        e.commit();
                        Oe.current = undefined;
                    }
                    (0, ae.logUiActionShadowPrivateStatsTestEvents)();
                }, []);
                if (ke.canSetGroupProperty()) {
                    const t = oe.default.createElement(K.TextSpan, {
                        theme: "title"
                    }, re.fbt._("Group settings", null, {
                        hk: "3sS0Vl"
                    }));
                    const n = oe.default.createElement(G.SettingsIcon, {
                        color: Y.SvgColorProp.SECONDARY,
                        height: 17
                    });
                    De = oe.default.createElement(i.default, {
                        testid: "group-settings-row",
                        side: "chevron",
                        icon: n,
                        onClick: e.onAdminSetting,
                        title: t,
                        spaced: true
                    });
                }
                let Le = null;
                if (!(0, o.isSuspendedGroup)(Me) && e.onMediaGallery) {
                    Le = oe.default.createElement(s.default, {
                        onMediaGallery: e.onMediaGallery,
                        chat: (0, U.unproxy)(Me)
                    });
                }
                const Re = Me && (0, r.shouldShowEphemeralSetting)(Me) ? oe.default.createElement(C.EphemeralSettingRow, {
                    onClick: e.onEphemeral,
                    chat: Me,
                    groupMetadata: ke,
                    testid: "contact-info-dm-setting-row"
                }) : null;
                let je = null;
                if ((0, d.communitiesEnabled)() && Me && ke.parentGroup && ke.participants.iAmMember()) {
                    const t = ke.getParentGroupChat();
                    if (t == null ? undefined : t.groupMetadata) {
                        je = oe.default.createElement(w.default, {
                            onClick: () => {
                                var t;
                                if (!((t = e.onCommunityClick) === null || t === undefined)) {
                                    t.call(e);
                                }
                            },
                            parentGroupMetadata: t.groupMetadata,
                            parentGroupChat: t
                        });
                    }
                }
                let Be = null;
                Be = oe.default.createElement(y.default, {
                    highlightSurface: J.PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_GROUP,
                    onClick: () => (0, F.showEncryptionInfoPopup)(Me),
                    text: Q.default.isGroupCallEnabled() ? re.fbt._("Messages and calls are end-to-end encrypted. Click to learn more.", null, {
                        hk: "1l9pwW"
                    }) : re.fbt._("Messages are end-to-end encrypted. Click to learn more.", null, {
                        hk: "2MtPh9"
                    }),
                    spaced: true
                });
                if ((0, o.isSupportGroup)(Me)) {
                    Be = oe.default.createElement(x.default, {
                        onClick: xe,
                        spaced: true
                    });
                }
                const Fe = Me.mute.canMute() ? oe.default.createElement(B.default, {
                    chat: Me,
                    mute: Me.mute,
                    settings: H.default
                }) : null;
                let We;
                let Ge = null;
                if (!(0, o.isSuspendedGroup)(Me) && e.onStarred) {
                    const t = oe.default.createElement(K.TextSpan, {
                        theme: "title",
                        size: "16"
                    }, re.fbt._("Starred messages", null, {
                        hk: "4wVbNG"
                    }));
                    const n = oe.default.createElement(V.StarIcon, {
                        color: Y.SvgColorProp.SECONDARY,
                        height: 20
                    });
                    Ge = oe.default.createElement(u.ChatInfoDrawerSection, {
                        titleTestId: "section-starred-messages",
                        xstyle: Z.uiPadding.horiz0
                    }, oe.default.createElement(i.default, {
                        testid: "block-starred-messages",
                        side: "chevron",
                        icon: n,
                        onClick: e.onStarred,
                        title: t,
                        spaced: true
                    }));
                }
                if (Me.hasKeptMsgs() || (0, r.isEphemeralSettingOn)(Me)) {
                    const t = oe.default.createElement(K.TextSpan, {
                        theme: "title",
                        size: "16"
                    }, re.fbt._("Kept Messages", null, {
                        hk: "41CBIy"
                    }));
                    const n = ke.restrict ? oe.default.createElement(K.TextDiv, {
                        theme: "muted"
                    }, re.fbt._("Only admins can keep or unkeep messages in this group.", null, {
                        hk: "2Uhjiy"
                    })) : null;
                    const a = oe.default.createElement(L.KeepInChatIcon, {
                        color: Y.SvgColorProp.SECONDARY,
                        height: 20
                    });
                    We = oe.default.createElement(u.ChatInfoDrawerSection, {
                        titleTestId: "section-kept-messages",
                        xstyle: [he.lastSectionRow, Z.uiPadding.horiz0]
                    }, oe.default.createElement(i.default, {
                        testid: "block-kept-messages",
                        side: "chevron",
                        icon: a,
                        onClick: e.onKept,
                        title: t,
                        secondaryTitle: n,
                        spaced: true
                    }));
                }
                const He = (0, W.isReactionsEnabledInCAG)(Me) ? oe.default.createElement(c.PhoneNumberVisibilityIndicatorCag, {
                    chat: Me
                }) : null;
                const Ve = (0, l.getABPropConfigValue)("report_to_admin_kill_switch") && ke.reportToAdminMode && ke.canSetGroupProperty() ? oe.default.createElement(i.default, {
                    testid: "block-rta-messages",
                    side: "chevron",
                    icon: oe.default.createElement(le.WarningIcon, {
                        color: Y.SvgColorProp.SECONDARY,
                        height: 16
                    }),
                    onClick: e.onSentForAdminReview,
                    title: oe.default.createElement(K.TextSpan, {
                        theme: "title",
                        size: "16"
                    }, re.fbt._("Sent for admin review", null, {
                        hk: "2gzsHo"
                    })),
                    spaced: true
                }) : null;
                let Ue = null;
                if (Fe || Be || Re) {
                    Ue = oe.default.createElement(u.ChatInfoDrawerSection, {
                        xstyle: [he.lastSectionRow, Z.uiPadding.horiz0]
                    }, Fe, Re, Ve, Be, De, He);
                }
                const ze = oe.default.createElement(O.default, {
                    chat: (0, U.unproxy)(Me)
                });
                const qe = {
                    surface: "group-info-drawer",
                    extras: {
                        groupSize: ke.participants.length,
                        typeOfGroup: (0, D.groupTypeToWamEnum)((0, D.getGroupTypeFromGroupMetadata)((0, U.unproxy)(ke)))
                    }
                };
                const Ye = Boolean((n = Me.groupMetadata) === null || n === undefined ? undefined : n.isIncognitoCag) && !((a = Me.groupMetadata) === null || a === undefined || (ge = a.participants) === null || ge === undefined ? undefined : ge.iAmAdmin()) ? oe.default.createElement(b.default, {
                    theme: "transparent",
                    shadow: false
                }, oe.default.createElement(K.TextParagraph, {
                    xstyle: he.announcementGroupDisclaimer,
                    color: "secondary"
                }, re.fbt._("Only admins can see all participants in this group", null, {
                    hk: "39jP44"
                }))) : null;
                return oe.default.createElement("div", {
                    role: "complementary",
                    ref: Ce,
                    tabIndex: "-1",
                    "aria-label": re.fbt._("Group Info", null, {
                        hk: "3P80cG"
                    })
                }, oe.default.createElement(g.default, {
                    ref: t,
                    key: "contact-info-modal",
                    theme: "striped",
                    testid: "chat-info-drawer",
                    tsNavigationData: qe
                }, oe.default.createElement(E.DrawerHeader, {
                    title: re.fbt._("Group info", null, {
                        hk: "2SfTUZ"
                    }),
                    type: E.DRAWER_HEADER_TYPE.SMALL,
                    rtlFixIfOnDarwin: true,
                    onCancel: () => {
                        if (be) {
                            be();
                        } else if (!(ve == null)) {
                            ve.requestDismiss();
                        }
                    },
                    testid: "group-info-header"
                }), oe.default.createElement(h.default, null, oe.default.createElement("section", {
                    className: (0, ie.default)(he.body)
                }, oe.default.createElement(A.default, {
                    chat: (0, U.unproxy)(Me),
                    onAdminSetting: e.onAdminSetting,
                    onAddParticipant: Ne,
                    onClickParticipantsCount: () => {
                        var e;
                        if (!((e = Ae.current) === null || e === undefined)) {
                            e.scrollIntoView();
                        }
                    }
                }), je, oe.default.createElement(P.default, {
                    chat: (0, U.unproxy)(Me),
                    showFullDescription: e.showFullGroupDescription
                }), Le, Ge, We, Ue, undefined, oe.default.createElement(S.default, {
                    chat: Me,
                    groupMetadata: ke
                }), !ke.participants.iAmMember() && oe.default.createElement(M.ExitedGroupMemberSection, {
                    group: Me
                }), oe.default.createElement(I.GroupInfoParticipantsSection, {
                    ref: Ae,
                    chat: (0, U.unproxy)(Me),
                    scrollToParticipantList: e.scrollToParticipantList,
                    flatListController: Ie.current,
                    onAddParticipant: Ne,
                    onOpenParticipantSearch: e => {
                        j.ModalManager.open(oe.default.createElement(N.GroupParticipantsFlow, {
                            chat: (0, U.unproxy)(Me),
                            onVerification: Ee,
                            initialStep: e
                        }), {
                            transition: "modal-flow"
                        });
                    },
                    onGroupInviteLink: e.onGroupInviteLink,
                    onPendingParticipants: e.onPendingParticipants,
                    onVerification: e.onVerification
                }), Ye, oe.default.createElement(T.GroupInfoPendingParticipantsSection, {
                    chat: (0, U.unproxy)(Me),
                    flatListController: Te.current
                }), ze))));
            }
            var be = (0, oe.forwardRef)(Ee);
            t.default = be;
        },
        767140: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.GroupInfoParticipantsSection = undefined;
            var l = a(n(670983));
            var r = n(632157);
            var o = n(287461);
            var i = n(570588);
            var u = n(72696);
            var s = a(n(170206));
            var c = n(374660);
            var d = n(464659);
            var f = a(n(831584));
            var p = a(n(314810));
            var m = n(698867);
            var g = n(780549);
            var h = n(474103);
            var E = n(174834);
            var b = n(877171);
            var v = n(103440);
            var y = n(660666);
            var C = n(465113);
            var M = n(675085);
            var k = n(235630);
            var _ = n(305521);
            var w = n(581354);
            var S = n(512938);
            var P = n(714574);
            var O = n(503028);
            var I = n(862159);
            var T = a(n(932325));
            var A = n(406506);
            var N = n(963950);
            var x = n(114850);
            var D = n(33014);
            var L = n(164406);
            var R = n(197988);
            var j = n(507877);
            var B = n(828720);
            var F = a(n(671401));
            var W = a(n(802211));
            var G = n(447514);
            var H = a(n(237889));
            var V = n(163139);
            var U = n(220584);
            var z = n(533426);
            var q = n(392632);
            var Y = a(n(37875));
            var K = n(459857);
            var X = n(788271);
            var Z = a(n(124928));
            var Q = n(548360);
            var $ = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var n = re(t);
                if (n && n.has(e)) {
                    return n.get(e);
                }
                var a = {};
                var l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e) {
                    if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                        if (o && (o.get || o.set)) {
                            Object.defineProperty(a, r, o);
                        } else {
                            a[r] = e[r];
                        }
                    }
                }
                a.default = e;
                if (n) {
                    n.set(e, a);
                }
                return a;
            }(n(667294));
            a(n(156720));
            var J = a(n(524578));
            var ee = a(n(969651));
            var te = a(n(426872));
            var ne = a(n(637660));
            var ae = n(808446);
            var le = n(655241);

            function re (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var n = new WeakMap();
                return (re = function (e) {
                    if (e) {
                        return n;
                    } else {
                        return t;
                    }
                })(e);
            }
            const oe = {
                pendingParticipantsIcon: {
                    backgroundColor: "k6px2m13",
                    color: "cwwc04gk"
                }
            };

            function ie (e) {
                let {
                    data: t,
                    participants: n,
                    handleParticipantClick: a,
                    menuEnabled: l,
                    handleParticipantMenu: r,
                    contextMenu: o,
                    active: i,
                    elevatedPushNamesEnabled: u = false
                } = e;
                const {
                    id: s
                } = t;
                const c = n.get(s);
                if (!c) {
                    throw new S.UnknownDataError(t);
                }
                const d = c.contact;
                const f = !!o && Z.default.equals(d.id, o.contactId);
                return $.default.createElement(p.default, {
                    active: i,
                    contact: d,
                    participant: c,
                    key: c.id.toString(),
                    onClick: a,
                    contextEnabled: () => l(d),
                    contextMenu: f,
                    onContext: e => r(e, d),
                    theme: "chat-info",
                    showNotifyName: true,
                    waitIdle: true,
                    showStatusRingAroundProfilePhoto: true,
                    participantCollection: n,
                    elevatedPushNamesEnabled: u
                });
            }
            const ue = (0, $.forwardRef)((e, t) => {
                var n;
                const a = (0, le.useModelValues)((0, l.default)(e.chat.groupMetadata, "props.chat.groupMetadata"), ["support", "size", "id", "membershipApprovalMode", "membershipApprovalRequests", "isUnnamed", "isLidAddressingMode", "participants"]);
                const {
                    membershipApprovalMode: p,
                    membershipApprovalRequests: S
                } = a;
                const Z = (0, ne.default)(() => new H.default([], e => e.id.toString()));
                const re = (0, l.default)(e.chat.groupMetadata, "props.chat.groupMetadata").participants;
                let ue = re.toArray();
                if ((0, h.hideCagMaskedParticipants)() && a.isLidAddressingMode !== true) {
                    ue = re.filter(e => {
                        let {
                            id: t
                        } = e;
                        return (0, K.isMeAccount)(t) || !t.isLid();
                    });
                }
                const ce = (0, c.getGroupParticipantsCount)(a);
                const de = (0, ee.default)();
                (0, ae.useListener)(re, "bulk_add bulk_remove reset sort change:isAdmin change:isSuperAdmin", de);
                const [fe, pe] = (0, $.useState)(true);
                const me = (0, $.useRef)();
                const [ge, he] = (0, $.useState)();
                const Ee = (0, c.isCommunityAnnouncementGroup)(e.chat);
                (0, $.useEffect)(() => {
                    if (e.scrollToParticipantList && me.current) {
                        (0, C.scrollIntoViewIfNeeded)(me.current, false);
                    }
                }, [e.scrollToParticipantList]);
                (0, $.useImperativeHandle)(t, () => ({
                    scrollIntoView () {
                        var e;
                        if (!((e = me.current) === null || e === undefined)) {
                            e.scrollIntoView();
                        }
                    }
                }));
                const [be, ve] = (0, te.default)(a);
                const ye = (0, J.default)(S, ["add", "remove", "reset"], () => S.length);
                const Ce = (0, X.useShowPastParticipants)(e.chat);
                const Me = (0, $.useMemo)(() => {
                    let e;
                    const t = [];
                    const n = [];
                    ue.forEach(a => {
                        if ((0, y.getIsMe)(a.contact)) {
                            e = a;
                        } else if (a.isAdmin) {
                            t.push(a);
                        } else {
                            n.push(a);
                        }
                    });
                    let a = [];
                    if (e) {
                        a.push(e);
                    }
                    a = a.concat(t, n);
                    if (se(ue) && fe) {
                        a = a.slice(0, d.INFO_DRAWER_MAX_ROWS);
                    }
                    Z.current.init(a.map(e => e.contact));
                    return a.map(e => ({
                        itemKey: e.id.toString(),
                        id: e.id,
                        height: 68
                    }));
                }, [fe, ue]);
                if (a.isSuspendedOrTerminated()) {
                    return null;
                }
                const ke = $.default.createElement(G.SearchIcon, {
                    color: U.SvgColorProp.SECONDARY
                });
                let _e;
                let we;
                let Se;
                let Pe;
                if (be && !a.support) {
                    const t = $.default.createElement(W.default, {
                        theme: "compact"
                    }, $.default.createElement(i.AddUserIcon, {
                        directional: true
                    }));
                    _e = $.default.createElement(s.default, {
                        testid: "add-user",
                        image: t,
                        theme: "chat-info",
                        primary: Q.fbt._("Add member", null, {
                            hk: "43EiHe"
                        }),
                        onClick: e.onAddParticipant,
                        focusable: true
                    });
                }
                if (re.iAmAdmin() && e.onGroupInviteLink && !a.support) {
                    const t = $.default.createElement(W.default, {
                        theme: "compact"
                    }, $.default.createElement(A.LinkIcon, null));
                    we = $.default.createElement(s.default, {
                        image: t,
                        theme: "chat-info",
                        primary: Q.fbt._("Invite to group via link", null, {
                            hk: "3vDtFL"
                        }),
                        onClick: e.onGroupInviteLink,
                        focusable: true
                    });
                }
                if (p && ye > 0 && (0, o.getABPropConfigValue)("group_join_request_m2") && ((0, o.getABPropConfigValue)("web_anyone_can_add_group_setting_enabled") && ve || re.iAmAdmin())) {
                    Se = $.default.createElement(s.default, {
                        image: $.default.createElement(W.default, {
                            xstyle: oe.pendingParticipantsIcon,
                            theme: "compact"
                        }, $.default.createElement(B.PendingParticipantsIcon, null)),
                        theme: "chat-info",
                        primary: (0, o.getABPropConfigValue)("group_join_request_m3") ? Q.fbt._("Pending requests", null, {
                            hk: "33VEuS"
                        }) : Q.fbt._("Pending members", null, {
                            hk: "4ihDNY"
                        }),
                        primaryDetail: $.default.createElement(z.Tag, {
                            round: true
                        }, ye),
                        onClick: e.onPendingParticipants,
                        focusable: true
                    });
                }
                if (se(ue) && fe) {
                    const t = ue.length <= 20;
                    const n = ue.length - d.INFO_DRAWER_MAX_ROWS;
                    Pe = $.default.createElement(f.default, {
                        numMore: n,
                        onClick: () => {
                            if (t) {
                                pe(false);
                            } else {
                                e.onOpenParticipantSearch(O.ParticipantsFlowStep.Participants);
                            }
                        },
                        viewAll: !t
                    });
                } else if (Ce) {
                    Pe = $.default.createElement(N.ListButton, {
                        onClick: () => {
                            e.onOpenParticipantSearch(O.ParticipantsFlowStep.PastParticipants);
                        },
                        testid: "row-past-participants"
                    }, Q.fbt._("View past members", null, {
                        hk: "4xycZf"
                    }));
                }
                const Oe = e => {
                    const t = re.get(e.id);
                    return !!t && (re.canPromote(t) || re.canDemote(t) || re.canRemove(t) || re.canVerifyIdentity(t));
                };
                const Ie = (t, n) => {
                    const a = re.assertGet(n.id);
                    if (!Oe(n)) {
                        return;
                    }
                    const l = [];
                    if (re.canPromote(a)) {
                        const t = () => {
                            const t = Q.fbt._("Make {member} an admin for \"{subject}\" group?", [Q.fbt._param("member", (0, P.getFormattedName)(a.contact)), Q.fbt._param("subject", e.chat.contact.name)], {
                                hk: "1toNN7"
                            });
                            x.ModalManager.open($.default.createElement(v.ConfirmPopup, {
                                onOK: () => {
                                    t = true;
                                    if (!a.isAdmin) {
                                        a.contact.pendingAction++;
                                        (0, D.promoteParticipants)(e.chat, [a]).finally(() => {
                                            a.contact.pendingAction--;
                                        });
                                    }
                                    return void(t && x.ModalManager.close());
                                    var t;
                                },
                                okText: Q.fbt._("Make group admin", null, {
                                    hk: "3SZmiM"
                                }),
                                onCancel: () => x.ModalManager.close(),
                                cancelText: Q.fbt._("Cancel", null, {
                                    hk: "H0gNq"
                                })
                            }, $.default.createElement(_.EmojiText, {
                                text: t
                            })));
                        };
                        let n;
                        if (Ee) {
                            var r;
                            n = Q.fbt._("Make admin", null, {
                                hk: "1cHVQ6"
                            });
                            const t = (r = e.chat.groupMetadata) === null || r === undefined ? undefined : r.getParentGroupChat();
                            l.push($.default.createElement(M.DropdownItem, {
                                testid: "mi-grp-promote-community-admin",
                                key: "promote",
                                action: () => {
                                    (0, j.openCommunityParticipantPromoteConfirmation)(t, a, re, a.contact);
                                }
                            }, n));
                        } else {
                            n = Q.fbt._("Make group admin", null, {
                                hk: "oCC4C"
                            });
                            l.push($.default.createElement(M.DropdownItem, {
                                testid: "mi-grp-promote-admin",
                                key: "promote",
                                action: t
                            }, n));
                        }
                    }
                    if (re.canRemove(a)) {
                        let t;
                        t = Ee === true && (0, E.communityAnnouncementImprovementM3Enabled)() ? Q.fbt._("Remove from community", null, {
                            hk: "WikVd"
                        }) : Q.fbt._("Remove", null, {
                            hk: "2Z8i6g"
                        });
                        l.push($.default.createElement(M.DropdownItem, {
                            testid: "mi-grp-remove-participant",
                            key: "remove",
                            action: () => {
                                var t;
                                const l = (t = e.chat.groupMetadata) === null || t === undefined ? undefined : t.getParentGroupChat();
                                if (Ee === true && l != null && (0, E.communityAnnouncementImprovementM3Enabled)()) {
                                    return void x.ModalManager.open($.default.createElement(F.default, {
                                        contact: n,
                                        parentGroupChat: l
                                    }));
                                }
                                const r = Q.fbt._("Remove {member} from \"{subject}\" group?", [Q.fbt._param("member", (0, P.getFormattedName)(a.contact)), Q.fbt._param("subject", e.chat.contact.name)], {
                                    hk: "223j9n"
                                });
                                x.ModalManager.open($.default.createElement(v.ConfirmPopup, {
                                    onOK: () => {
                                        t = true;
                                        a.contact.pendingAction++;
                                        (0, D.removeParticipants)(e.chat, [a]).finally(() => {
                                            a.contact.pendingAction--;
                                        });
                                        return void(t && x.ModalManager.close());
                                        var t;
                                    },
                                    okText: Q.fbt._("Remove", null, {
                                        hk: "2GRvdl"
                                    }),
                                    onCancel: () => x.ModalManager.close(),
                                    cancelText: Q.fbt._("Cancel", null, {
                                        hk: "H0gNq"
                                    })
                                }, $.default.createElement(_.EmojiText, {
                                    text: r
                                })));
                            }
                        }, t));
                    }
                    if (re.canDemote(a)) {
                        const t = () => {
                            if (a.isAdmin) {
                                a.contact.pendingAction++;
                                (0, D.demoteParticipants)(e.chat, [a]).finally(() => {
                                    a.contact.pendingAction--;
                                });
                            }
                        };
                        const n = Q.fbt._("Dismiss as admin", null, {
                            hk: "2YfmwL"
                        });
                        if (Ee) {
                            var o;
                            const t = (o = e.chat.groupMetadata) === null || o === undefined ? undefined : o.getParentGroupChat();
                            l.push($.default.createElement(M.DropdownItem, {
                                testid: "mi-grp-community-demote",
                                key: "demote-admin",
                                action: () => (0, R.openCommunityParticipantDemoteConfirmation)(a, t)
                            }, n));
                        } else {
                            l.push($.default.createElement(M.DropdownItem, {
                                testid: "mi-grp-demote",
                                key: "demote-admin",
                                action: t
                            }, n));
                        }
                    }
                    if (re.canVerifyIdentity(a)) {
                        const t = Q.fbt._("Verify Security Code", null, {
                            hk: "1vTVgt"
                        });
                        l.push($.default.createElement(M.DropdownItem, {
                            testid: "mi-grp-verify-identify",
                            key: "verify-identity",
                            action: () => {
                                if (e.onVerification) {
                                    e.onVerification(a.contact);
                                }
                            }
                        }, t));
                    }
                    he({
                        contactId: n.id,
                        menu: l,
                        anchor: t.anchor,
                        event: t.event
                    });
                };
                const Te = (t, n) => {
                    const a = (0, c.getOneToOneContactFromGroupContact)(n.id);
                    (0, w.findChat)(a, "groupInfoParticipants").then(t => {
                        if ((0, o.getABPropConfigValue)("unified_user_profile_navigation_enabled")) {
                            g.Cmd.chatInfoDrawer(t, {
                                showFullGroupDescription: false,
                                scrollToParticipantList: false,
                                sourceGroupChatOrNewsletter: (0, V.unproxy)(e.chat)
                            });
                        } else {
                            g.Cmd.openChatFromUnread(t).then(e => {
                                if (e) {
                                    if ((0, u.btmThreadsLoggingEnabled)()) {
                                        b.ComposeBoxActions.addMsgSendingLogAttributes(t, {
                                            handleMultiple () {
                                                (0, m.handleActivitiesForChatThreadLogging)([{
                                                    activityType: "groupMembershipReplies",
                                                    ts: (0, r.unixTime)(),
                                                    chatId: t.id
                                                }]);
                                            }
                                        });
                                    }
                                    b.ComposeBoxActions.focus(t);
                                }
                            });
                        }
                    });
                };
                const Ae = (0, k.elevatedPushNamesM2Enabled)(e.chat);
                const Ne = ((n = e.chat.groupMetadata) === null || n === undefined ? undefined : n.groupType) === I.GroupType.LINKED_ANNOUNCEMENT_GROUP ? ce : re.length;
                const xe = Q.fbt._({
                    "*": "Members list: {group-participants} members",
                    _1: "Members list: 1 member"
                }, [Q.fbt._plural(Ne, "group-participants")], {
                    hk: "3zW2fH"
                });
                const De = T.default.n(Ne);
                const Le = re.length ? $.default.createElement(d.ChatInfoDrawerListSection, {
                    ref: me,
                    titleTestId: "section-participants",
                    testid: "group-info-participants-section",
                    title: Q.fbt._({
                        "*": "{number-of-participants} members",
                        _1: "{number-of-participants} member"
                    }, [Q.fbt._plural(Ne), Q.fbt._param("number-of-participants", De)], {
                        hk: "2SJ8yz"
                    }),
                    titleOnClick: () => {
                        e.onOpenParticipantSearch(O.ParticipantsFlowStep.Participants);
                    },
                    subtitle: ke
                }, _e, we, Se, $.default.createElement(L.NavigableFlatList, {
                    ariaLabel: xe,
                    flatListController: e.flatListController,
                    listData: Me,
                    onRenderItem: e => $.default.createElement(ie, {
                        active: Z.current,
                        data: e,
                        participants: re,
                        handleParticipantClick: Te,
                        menuEnabled: Oe,
                        handleParticipantMenu: Ie,
                        contextMenu: ge,
                        elevatedPushNamesEnabled: Ae
                    }),
                    selection: Z.current,
                    rotateList: true
                }), Pe) : null;
                const Re = () => {
                    he(null);
                };
                let je;
                if (ge) {
                    je = $.default.createElement(q.UIE, {
                        displayName: "ChatContextMenu",
                        escapable: true,
                        popable: true,
                        dismissOnWindowResize: true,
                        requestDismiss: Re
                    }, $.default.createElement(Y.default, {
                        contextMenu: ge
                    }));
                }
                return $.default.createElement($.default.Fragment, null, Le, je);
            });

            function se (e) {
                return e.length > d.INFO_DRAWER_MAX_ROWS_IN_COLLAPSED_LIST;
            }
            t.GroupInfoParticipantsSection = ue;
            ue.displayName = "GroupInfoParticipantsSection";
        },
        951688: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.GroupInfoPendingParticipantsSection = function (e) {
                var t;
                var n;
                const a = (0, r.default)(e.chat.groupMetadata, "props.chat.groupMetadata");
                const u = (0, r.default)((t = e.chat.groupMetadata) === null || t === undefined ? undefined : t.participants, "props.chat.groupMetadata?.participants");
                const s = (0, r.default)((n = e.chat.groupMetadata) === null || n === undefined ? undefined : n.pendingParticipants, "props.chat.groupMetadata?.pendingParticipants");
                const c = s.toArray();
                const d = (0, _.default)();
                (0, S.useListener)(u, "change:isAdmin change:isSuperAdmin", d);
                (0, S.useListener)(s, "add remove reset", d);
                const [f, p] = (0, M.useState)(I(s));
                const m = (0, w.default)(() => new h.default([], e => e.id.toString()));
                const [E, b] = (0, M.useState)();
                (0, k.default)((0, l.default)(function* () {
                    yield a.queryGroupsV4PendingInvite();
                    p(I(a.pendingParticipants));
                }), [a]);
                const P = (0, M.useMemo)(() => {
                    let e = c;
                    if (I(c) && f) {
                        e = e.slice(0, o.INFO_DRAWER_MAX_ROWS);
                    }
                    m.current.init(e.map(e => e.contact));
                    return e.map(e => ({
                        itemKey: e.id.toString(),
                        id: e.id,
                        height: 68
                    }));
                }, [f, c]);
                if (a.isSuspendedOrTerminated()) {
                    return M.default.createElement(M.default.Fragment, null);
                }
                const T = (e, t, n) => {
                    const a = t.type === "click" ? undefined : t.target;
                    b({
                        contactId: n.id,
                        menu: e,
                        anchor: a,
                        event: t.anchor ? undefined : t
                    });
                };
                const A = C.fbt._({
                    "*": "Invited members list: {group-participants} members",
                    _1: "Invited members list: 1 member"
                }, [C.fbt._plural(s.length, "group-participants")], {
                    hk: "2QQhyt"
                });
                let N;
                let x;
                let D;
                if (s.length > 0) {
                    N = M.default.createElement(g.NavigableFlatList, {
                        ariaLabel: A,
                        flatListController: e.flatListController,
                        listData: P,
                        onRenderItem: e => M.default.createElement(O, {
                            active: m.current,
                            data: e,
                            onContextMenu: T,
                            pendingParticipants: s,
                            groupMetadata: a
                        }),
                        selection: m.current,
                        rotateList: true
                    });
                }
                if (I(s) && f) {
                    const e = s.length - o.INFO_DRAWER_MAX_ROWS;
                    x = M.default.createElement(i.default, {
                        numMore: e,
                        onClick: () => {
                            p(false);
                        }
                    });
                }
                if (u.iAmAdmin() && s.length > 0) {
                    D = M.default.createElement(o.ChatInfoDrawerListSection, {
                        titleTestId: "section-participants",
                        title: C.fbt._("{number} invited", [C.fbt._param("number", s.length)], {
                            hk: "2x0c1D"
                        })
                    }, N, x);
                }
                const L = () => {
                    b(null);
                };
                let R;
                if (E) {
                    R = M.default.createElement(v.UIE, {
                        displayName: "ChatContextMenu",
                        escapable: true,
                        popable: true,
                        dismissOnWindowResize: true,
                        requestDismiss: L
                    }, M.default.createElement(y.default, {
                        contextMenu: E
                    }));
                }
                return M.default.createElement(M.default.Fragment, null, D, R);
            };
            t.PendingParticipantItem = O;
            var l = a(n(348926));
            var r = a(n(670983));
            var o = n(464659);
            var i = a(n(831584));
            var u = a(n(314810));
            var s = n(103440);
            var c = n(675085);
            var d = n(305521);
            var f = n(512938);
            var p = n(714574);
            var m = n(114850);
            var g = n(164406);
            var h = a(n(237889));
            var E = n(625786);
            var b = n(390737);
            var v = n(392632);
            var y = a(n(37875));
            var C = n(548360);
            var M = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var n = P(t);
                if (n && n.has(e)) {
                    return n.get(e);
                }
                var a = {};
                var l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e) {
                    if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                        if (o && (o.get || o.set)) {
                            Object.defineProperty(a, r, o);
                        } else {
                            a[r] = e[r];
                        }
                    }
                }
                a.default = e;
                if (n) {
                    n.set(e, a);
                }
                return a;
            }(n(667294));
            var k = a(n(802145));
            var _ = a(n(969651));
            var w = a(n(637660));
            var S = n(808446);

            function P (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var n = new WeakMap();
                return (P = function (e) {
                    if (e) {
                        return n;
                    } else {
                        return t;
                    }
                })(e);
            }

            function O (e) {
                let {
                    data: t,
                    active: n,
                    pendingParticipants: a,
                    groupMetadata: l,
                    onContextMenu: r
                } = e;
                const {
                    id: o
                } = t;
                const i = a.get(o);
                if (!i) {
                    throw new f.UnknownDataError(t);
                }
                return M.default.createElement(u.default, {
                    active: n,
                    contact: i.contact,
                    participant: i,
                    key: i.id.toString(),
                    contextEnabled: () => false,
                    contextMenu: true,
                    onContext: e => (e => {
                        const t = [M.default.createElement(c.DropdownItem, {
                            testid: "mi-grp-promote-admin",
                            key: "promote",
                            action: () => {
                                m.ModalManager.open(M.default.createElement(s.ConfirmPopup, {
                                    onOK: () => {
                                        m.ModalManager.close();
                                        l.revokeGroupsV4AddInvite([i.id]).then(() => {
                                            b.ToastManager.open(M.default.createElement(E.Toast, {
                                                msg: C.fbt._("Invite reset", null, {
                                                    hk: "MgErr"
                                                })
                                            }));
                                        });
                                    },
                                    okText: C.fbt._("Reset link", null, {
                                        hk: "2Zb3R4"
                                    }),
                                    onCancel: () => m.ModalManager.close(),
                                    cancelText: C.fbt._("Cancel", null, {
                                        hk: "H0gNq"
                                    })
                                }, M.default.createElement(d.EmojiText, {
                                    text: C.fbt._("Reset invite for {member}? If you reset the invite, {member} won't be able to use it to join this group.", [C.fbt._param("member", (0, p.getFormattedName)(i.contact))], {
                                        hk: "2ShikS"
                                    })
                                })));
                            }
                        }, C.fbt._("Revoke invite", null, {
                            hk: "4on28q"
                        }))];
                        r(t, e, i.contact);
                    })(e),
                    theme: "chat-info",
                    showNotifyName: true,
                    isPendingParticipant: true,
                    waitIdle: true,
                    showStatusRingAroundProfilePhoto: true
                });
            }

            function I (e) {
                return e.length > o.INFO_DRAWER_MAX_ROWS_IN_COLLAPSED_LIST;
            }
        },
        453090: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                var t;
                var n;
                var a;
                var l;
                const r = (0, B.useModelValues)(e.chat, ["labels"]);
                const o = (0, B.useOptionalModelValues)(e.chat.groupMetadata, ["size", "creation"]);
                const i = (t = e.chat.groupMetadata) === null || t === undefined ? undefined : t.groupType;
                const u = (n = e.chat.groupMetadata) === null || n === undefined ? undefined : n.participants;
                const s = (0, R.default)();
                (0, j.useListener)(u, "bulk_add bulk_remove reset sort change:isAdmin change:isSuperAdmin", s);
                const c = (a = u == null ? undefined : u.length) !== null && a !== undefined ? a : 0;
                const d = (l = o == null ? undefined : o.size) !== null && l !== undefined ? l : 0;
                const f = (u == null ? undefined : u.iAmAdmin()) ? c : d;
                let g = x.fbt._("Group", null, {
                    hk: "DNiv2"
                });
                if (i === v.GroupType.LINKED_ANNOUNCEMENT_GROUP) {
                    g = x.fbt._("Announcements", null, {
                        hk: "GNIKa"
                    });
                }
                const E = x.fbt._({
                    "*": "{number} members",
                    _1: "1 member"
                }, [x.fbt._plural(i === v.GroupType.LINKED_ANNOUNCEMENT_GROUP ? f : c, "number")], {
                    hk: "16da9S"
                });
                return D.default.createElement(m.default, {
                    theme: "padding-large"
                }, D.default.createElement(h.FlexColumn, {
                    align: "center"
                }, D.default.createElement(V, {
                    chat: e.chat,
                    xstyle: H.photo,
                    sendGroupProfilePictureLoggingEvent: (t, n, a) => {
                        var l;
                        var r;
                        var o;
                        const i = (l = e.chat) === null || l === undefined || (r = l.groupMetadata) === null || r === undefined ? undefined : r.creation;
                        const s = new Date((i != null ? i : 0) * 1000);
                        const c = new Intl.DateTimeFormat("en", {
                            year: "numeric"
                        }).format(s);
                        const d = new Intl.DateTimeFormat("en", {
                            month: "2-digit"
                        }).format(s);
                        const p = new Intl.DateTimeFormat("en", {
                            day: "2-digit"
                        }).format(s);
                        const m = i != null ? `${c}-${d}-${p}` : "";
                        const g = (0, N.numberToPreciseSizeBucket)(f);
                        const h = (o = u == null ? undefined : u.iAmAdmin()) !== null && o !== undefined && o;
                        new b.GroupProfilePictureWamEvent({
                            groupCreationDs: m,
                            groupProfileAction: t,
                            preciseGroupSizeBucket: g,
                            isAdmin: h,
                            hasProfilePicture: n,
                            profilePictureType: a
                        }).commit();
                    }
                }), D.default.createElement(z, {
                    chat: e.chat
                }), D.default.createElement("div", {
                    className: (0, L.default)(H.groupSecondary)
                }, D.default.createElement(p.SelectableSpan, {
                    dir: "auto",
                    selectable: true
                }, D.default.createElement(T.TextSpan, {
                    size: "16",
                    color: "secondary"
                }, g, (o == null ? undefined : o.isSuspendedOrTerminated()) ? null : D.default.createElement(D.default.Fragment, null, y.default.isRTL() ? " - " : " · ", D.default.createElement(A.default, {
                    onClick: e.onClickParticipantsCount
                }, E))))), D.default.createElement(C.default, {
                    labels: r.labels
                })));
            };
            var l = a(n(348926));
            var r = n(898817);
            var o = n(122583);
            var i = a(n(670983));
            var u = a(n(229922));
            var s = n(287461);
            var c = n(374660);
            var d = n(174834);
            var f = n(103440);
            var p = n(306703);
            var m = a(n(969358));
            var g = a(n(395767));
            var h = n(690495);
            var E = a(n(559719));
            var b = n(600145);
            var v = n(862159);
            var y = a(n(932325));
            var C = a(n(344460));
            var M = G(n(288057));
            var k = n(114850);
            var _ = n(21645);
            var w = n(843337);
            var S = n(588792);
            var P = n(511696);
            var O = n(115948);
            var I = n(470824);
            var T = n(180519);
            var A = a(n(625903));
            var N = n(802027);
            var x = n(548360);
            var D = G(n(667294));
            var L = a(n(156720));
            var R = a(n(969651));
            var j = n(808446);
            var B = n(655241);
            var F = a(n(895851));

            function W (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var n = new WeakMap();
                return (W = function (e) {
                    if (e) {
                        return n;
                    } else {
                        return t;
                    }
                })(e);
            }

            function G (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var n = W(t);
                if (n && n.has(e)) {
                    return n.get(e);
                }
                var a = {};
                var l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e) {
                    if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                        if (o && (o.get || o.set)) {
                            Object.defineProperty(a, r, o);
                        } else {
                            a[r] = e[r];
                        }
                    }
                }
                a.default = e;
                if (n) {
                    n.set(e, a);
                }
                return a;
            }
            const H = {
                photo: {
                    marginBottom: "njub1g37"
                },
                groupSecondary: {
                    lineHeight: "a4ywakfo",
                    marginTop: "ma4rpf0l",
                    textAlign: "qfejxiq4"
                }
            };

            function V (e) {
                const t = (0, B.useModelValues)(e.chat, ["isReadOnly"]);
                const n = (0, B.useModelValues)(e.chat.contact, ["id", "profilePicThumb"]);
                const a = (0, B.useModelValues)(e.chat.contact.profilePicThumb, ["imgFull"]);
                const l = (0, B.useModelValues)((0, i.default)(e.chat.groupMetadata, "props.chat.groupMetadata"), ["groupType"]);
                const [s, f] = (0, D.useState)(false);
                const [p, m] = (0, D.useState)(false);
                const g = (0, F.default)();
                const h = l.groupType === v.GroupType.LINKED_ANNOUNCEMENT_GROUP;
                let E = S.PhotoPickerType.GROUP;
                if ((0, d.communitiesEnabled)()) {
                    if (h) {
                        E = S.PhotoPickerType.DEFAULT_ANNOUNCEMENT_GROUP;
                    } else if (l.groupType === v.GroupType.LINKED_GENERAL_GROUP && (0, d.communityGeneralChatUIEnabled)()) {
                        E = S.PhotoPickerType.GENERAL_GROUP;
                    }
                }
                const b = t.isReadOnly || !a.canDelete() && !a.canSet() || (0, c.isSupportGroup)(t) || h || l.isSuspendedOrTerminated();
                return D.default.createElement("div", {
                    className: (0, L.default)(e.xstyle)
                }, D.default.createElement(P.PhotoPickerLoadable, {
                    key: String(s),
                    type: E,
                    id: n.id,
                    attachToChat: true,
                    pending: p,
                    startImage: a.imgFull,
                    readOnly: b,
                    onImageSet: (e, t) => {
                        let n;
                        m(true);
                        n = e && t ? (0, O.setProfilePic)(a, e, t) : (0, O.deleteProfilePic)(a);
                        (0, u.default)(n, g).catch((0, r.catchAbort)(() => {})).catch((0, o.filteredCatch)(M.ActionError, () => {
                            __LOG__(3)`GroupInfoDrawer: failed to set/delete group image`;
                            f(!s);
                        })).finally(() => {
                            m(false);
                        });
                    },
                    sendGroupProfilePictureLoggingEvent: e.sendGroupProfilePictureLoggingEvent
                }));
            }
            const U = {
                marginTop: "hymafltn",
                marginEnd: "jnwc1y2a",
                marginBottom: "ngycyvoj",
                marginStart: "svoq16ka"
            };

            function z (e) {
                const t = (0, B.useModelValues)(e.chat.contact, ["name"]);
                const n = (0, B.useModelValues)((0, i.default)(e.chat.groupMetadata, "props.chat.groupMetadata"), ["creation", "restrict", "support", "isUnnamed", "participants"]);
                const a = (0, F.default)();
                const o = function () {
                    var n = (0, l.default)(function* (n) {
                        const l = n;
                        if (l !== t.name) {
                            yield(0, u.default)((0, I.setGroupSubject)(e.chat, l), a).catch((0, r.catchAbort)(() => {})).catch(() => {
                                __LOG__(3)`group_info_drawer:onSetSubject failed`;
                            });
                        }
                    });
                    return function () {
                        return n.apply(this, arguments);
                    };
                }();
                const c = () => {
                    k.ModalManager.open(D.default.createElement(f.ConfirmPopup, {
                        onOK: () => k.ModalManager.close(),
                        okText: (0, g.default)("OK")
                    }, x.fbt._("Only admins can edit this group's info", null, {
                        hk: "1a2ztg"
                    })));
                };
                if (n.support) {
                    return D.default.createElement(T.TextHeader, {
                        className: (0, L.default)(U),
                        level: "2",
                        theme: "large"
                    }, D.default.createElement(_.GroupName, {
                        chat: e.chat,
                        groupMetadata: n,
                        breakWord: true,
                        checkmarkLarge: true
                    }));
                } else if (n.isUnnamed && (0, s.getABPropConfigValue)("ugr_enabled")) {
                    return D.default.createElement(E.default, {
                        subject: (0, w.calculateUnnamedGroupParticipantsList)(n).toLocaleString(),
                        onSave: o,
                        editable: n.canSetSubject(),
                        editRestrictionInfo: n.restrict ? c : undefined
                    });
                } else {
                    return D.default.createElement(E.default, {
                        subject: t.name || e.chat.formattedTitle,
                        onSave: o,
                        editable: n.canSetSubject(),
                        editRestrictionInfo: n.restrict ? c : undefined
                    });
                }
            }
        },
        795767: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = undefined;
            var l = a(n(670983));
            var r = n(374660);
            var o = n(780549);
            var i = n(474103);
            var u = n(174834);
            var s = n(153316);
            var c = a(n(402085));
            var d = n(675085);
            var f = n(235630);
            var p = n(305521);
            var m = n(581354);
            var g = n(714574);
            var h = n(862159);
            var E = n(114850);
            var b = n(33014);
            var v = n(197988);
            var y = n(507877);
            var C = n(392632);
            var M = a(n(37875));
            var k = n(676345);
            var _ = n(459857);
            var w = n(788271);
            var S = n(851488);
            var P = n(548360);
            var O = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var n = N(t);
                if (n && n.has(e)) {
                    return n.get(e);
                }
                var a = {};
                var l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e) {
                    if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                        if (o && (o.get || o.set)) {
                            Object.defineProperty(a, r, o);
                        } else {
                            a[r] = e[r];
                        }
                    }
                }
                a.default = e;
                if (n) {
                    n.set(e, a);
                }
                return a;
            }(n(667294));
            var I = a(n(156720));
            var T = a(n(969651));
            var A = n(808446);

            function N (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var n = new WeakMap();
                return (N = function (e) {
                    if (e) {
                        return n;
                    } else {
                        return t;
                    }
                })(e);
            }
            const x = {
                dropdownText: {
                    display: "p357zi0d",
                    alignItems: "gndfcl4n"
                },
                generalChatContainer: {
                    backgroundColor: "ihvf49ua"
                }
            };

            function D (e, t) {
                var n;
                var a;
                const {
                    chat: o,
                    onVerification: m,
                    onPastParticipants: N
                } = e;
                const [D, R] = function (e, t) {
                    const [n, a] = (0, O.useState)(null);
                    const o = (t, n) => {
                        if (!t.isAdmin) {
                            t.contact.pendingAction++;
                            (0, b.promoteParticipants)(e, [t]).finally(() => {
                                t.contact.pendingAction--;
                            });
                        }
                        if (n) {
                            E.ModalManager.close();
                        }
                    };
                    const i = (t, n) => {
                        t.contact.pendingAction++;
                        (0, b.removeParticipants)(e, [t]).finally(() => {
                            t.contact.pendingAction--;
                        });
                        if (n) {
                            E.ModalManager.close();
                        }
                    };
                    const u = t => {
                        if (t.isAdmin) {
                            t.contact.pendingAction++;
                            (0, b.demoteParticipants)(e, [t]).finally(() => {
                                t.contact.pendingAction--;
                            });
                        }
                    };
                    const s = () => {
                        a(null);
                    };
                    let c;
                    if (n) {
                        c = O.default.createElement(C.UIE, {
                            displayName: "ChatContextMenu",
                            escapable: true,
                            popable: true,
                            dismissOnWindowResize: true,
                            requestDismiss: s
                        }, O.default.createElement(M.default, {
                            contextMenu: n
                        }));
                    }
                    return [c, (n, s) => {
                        const c = (0, l.default)(e.groupMetadata, "chat.groupMetadata").participants;
                        const f = c.assertGet(s.id.toString());
                        const m = [];
                        const h = (0, r.isCommunityAnnouncementGroup)(e);
                        if (c.canPromote(f)) {
                            let t;
                            if (h) {
                                var b;
                                t = P.fbt._("Make admin", null, {
                                    hk: "1cHVQ6"
                                });
                                const n = (b = e.groupMetadata) === null || b === undefined ? undefined : b.getParentGroupChat();
                                m.push(O.default.createElement(d.DropdownItem, {
                                    testid: "mi-grp-promote-community-admin",
                                    key: "promote",
                                    action: () => {
                                        (0, y.openCommunityParticipantPromoteConfirmation)(n, f, c, f.contact);
                                    }
                                }, t));
                            } else {
                                t = P.fbt._("Make group admin", null, {
                                    hk: "3SZmiM"
                                });
                                m.push(O.default.createElement(d.DropdownItem, {
                                    testid: "mi-grp-promote-admin",
                                    key: "promote",
                                    action: () => o(f, false)
                                }, t));
                            }
                        }
                        if (c.canRemove(f)) {
                            const e = P.fbt._("Remove", null, {
                                hk: "2Z8i6g"
                            });
                            m.push(O.default.createElement(d.DropdownItem, {
                                testid: "mi-grp-remove-participant",
                                key: "remove",
                                action: () => i(f, false)
                            }, e));
                        }
                        if (c.canDemote(f)) {
                            const t = () => u(f);
                            const n = P.fbt._("Dismiss as admin", null, {
                                hk: "243sNl"
                            });
                            if (h) {
                                var C;
                                const t = (C = e.groupMetadata) === null || C === undefined ? undefined : C.getParentGroupChat();
                                m.push(O.default.createElement(d.DropdownItem, {
                                    testid: "mi-grp-community-demote",
                                    key: "demote-admin",
                                    action: () => (0, v.openCommunityParticipantDemoteConfirmation)(f, t)
                                }, n));
                            } else {
                                m.push(O.default.createElement(d.DropdownItem, {
                                    testid: "mi-grp-demote",
                                    key: "demote-admin",
                                    action: t
                                }, n));
                            }
                        }
                        if (c.canVerifyIdentity(f)) {
                            const e = P.fbt._("Verify Security Code", null, {
                                hk: "1vTVgt"
                            });
                            m.push(O.default.createElement(d.DropdownItem, {
                                testid: "mi-grp-verify-identify",
                                key: "verify-identity",
                                action: () => {
                                    E.ModalManager.close();
                                    if (!(t == null)) {
                                        t(f.contact);
                                    }
                                }
                            }, e));
                        }
                        const M = (0, _.isMeAccount)(f.contact.id) ? P.fbt._("Message yourself", null, {
                            hk: "LDbjA"
                        }) : P.fbt._("Message {author}", [P.fbt._param("author", (0, g.getFormattedShortName)(f.contact))], {
                            hk: "1kM7Cg"
                        });
                        m.push(O.default.createElement(d.DropdownItem, {
                            key: "message author",
                            ariaLabel: M,
                            action: L.bind(null, f.contact.id),
                            addSpacing: true
                        }, O.default.createElement(p.EmojiText, {
                            text: M,
                            xstyle: x.dropdownText
                        })));
                        const k = n.type === "click" ? undefined : n.target;
                        a({
                            contactId: s.id,
                            menu: m,
                            anchor: k,
                            event: n.anchor ? undefined : n
                        });
                    }];
                }(o, m);
                const j = (0, T.default)();
                const B = (n = o.groupMetadata) === null || n === undefined ? undefined : n.participants;
                (0, A.useListener)(B, ["bulk_add", "bulk_remove", "reset"], j);
                const F = (0, w.useShowPastParticipants)(o);
                const W = (0, i.hideCagMaskedParticipants)();
                const G = B == null ? undefined : B.map(e => e.contact);
                let H;
                if (F) {
                    H = {
                        text: P.fbt._("View past participants", null, {
                            hk: "fYGd4"
                        }),
                        onClick: N
                    };
                }
                let V = null;
                if (((a = o.groupMetadata) === null || a === undefined ? undefined : a.groupType) === h.GroupType.LINKED_GENERAL_GROUP && (0, u.communityGeneralChatUIEnabled)()) {
                    var U;
                    const e = !!((U = o.groupMetadata) === null || U === undefined ? undefined : U.generalChatAutoAddDisabled);
                    V = O.default.createElement("div", {
                        className: (0, I.default)([x.generalChatContainer, k.uiPadding.vert12, k.uiPadding.horiz30])
                    }, O.default.createElement(S.WDSTextMuted, null, (0, s.getGeneralChatParticipantListText)(e)));
                }
                return O.default.createElement(O.default.Fragment, null, O.default.createElement(c.default, {
                    ref: t,
                    title: P.fbt._("Search Participants", null, {
                        hk: "M6lxB"
                    }),
                    filter: e => {
                        var t;
                        const n = B == null ? undefined : B.get(e.id.toString());
                        return n != null && (!W || ((t = o.groupMetadata) === null || t === undefined ? undefined : t.isLidAddressingMode) !== false || (0, _.isMeAccount)(n.id) || !n.id.isLid());
                    },
                    onCancel: () => {
                        E.ModalManager.close();
                    },
                    openContextOnClick: true,
                    contextEnabled: () => false,
                    contextMenu: e => !(0, _.isMeAccount)(e),
                    onContext: R,
                    showNotifyName: true,
                    elevatedPushNamesEnabled: (0, f.elevatedPushNamesM2Enabled)(o),
                    listenForAdminChange: true,
                    participantCollection: (0, l.default)(B, "participants"),
                    contacts: G,
                    button: H,
                    showStatusRingAroundProfilePhoto: true,
                    firstRows: [V]
                }), D);
            }
            const L = e => {
                const t = (0, r.getOneToOneContactFromGroupContact)(e);
                (0, m.findChat)(t, "groupParticipantSearch").then(e => {
                    E.ModalManager.close();
                    o.Cmd.openChatFromUnread(e);
                });
            };
            var R = (0, O.forwardRef)(D);
            t.default = R;
        },
        503028: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.GroupParticipantsFlow = function (e) {
                const {
                    chat: t,
                    onVerification: n,
                    initialStep: a
                } = e;
                const [s, c] = (0, i.useFlow)(a);
                if (!c.step) {
                    return null;
                }
                let d;
                switch (c.step) {
                    case u.Participants:
                        d = o.default.createElement(l.default, {
                            chat: t,
                            onVerification: n,
                            onPastParticipants: () => c.push(u.PastParticipants)
                        });
                        break;
                    case u.PastParticipants: {
                        const e = c.stackSize() > 1;
                        const n = () => c.pop();
                        d = e ? o.default.createElement(r.default, {
                            chat: t,
                            onBack: n
                        }) : o.default.createElement(r.default, {
                            chat: t,
                            onClose: n
                        });
                        break;
                    }
                }
                return o.default.createElement(s, {
                    flow: c
                }, d);
            };
            t.ParticipantsFlowStep = undefined;
            var l = a(n(795767));
            var r = a(n(795367));
            var o = a(n(667294));
            var i = n(839062);
            const u = n(76672).Mirrored(["Participants", "PastParticipants"]);
            t.ParticipantsFlowStep = u;
        },
        176809: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const {
                    participant: t,
                    elevatedPushNamesEnabled: n = false
                } = e;
                const {
                    contact: a
                } = t;
                const [h, E, b, v, y, C, M] = (0, g.useContactValues)(a.id, [o.getId, o.getShowBusinessCheckmarkAsPrimary, o.getName, o.getPushname, o.getNotifyName, s.getFormattedName, s.getFormattedPhone]);
                const k = m.default.createElement(d.Name, {
                    contact: a,
                    showBusinessCheckmark: E,
                    showLabel: true,
                    titlify: true,
                    ellipsify: true,
                    you: true,
                    showNotifyName: n,
                    elevatedPushNamesEnabled: n
                });
                const _ = r.Clock.pastParticipantOnDateAtTime(t.leaveTs, function (e) {
                    const t = e.id.equals((0, f.getMeUser)());
                    if (e.leaveReason === c.LeaveReason.Left) {
                        if (t) {
                            return p.fbt._("Left", null, {
                                hk: "3R2igg"
                            });
                        } else {
                            return p.fbt._("Left", null, {
                                hk: "3kbdqU"
                            });
                        }
                    }
                    if (t) {
                        return p.fbt._("Removed", null, {
                            hk: "4vPnHl"
                        });
                    } else {
                        return p.fbt._("Removed", null, {
                            hk: "3LiTU6"
                        });
                    }
                }(t));
                const w = (0, u.pushNameCanBeUsed)(a) && n ? M : null;
                return m.default.createElement(l.default, {
                    image: m.default.createElement(i.DetailImage, {
                        id: h
                    }),
                    primary: k,
                    secondary: _,
                    secondaryDetail: w
                });
            };
            var l = a(n(170206));
            var r = n(63014);
            var o = n(660666);
            var i = n(23641);
            var u = n(235630);
            var s = n(714574);
            var c = n(687352);
            var d = n(21645);
            var f = n(459857);
            var p = n(548360);
            var m = a(n(667294));
            var g = n(379811);
        },
        795367: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = undefined;
            var l = n(474103);
            var r = n(235630);
            var o = n(753233);
            var i = n(258105);
            var u = a(n(395767));
            var s = n(512938);
            var c = n(690495);
            var d = a(n(176809));
            var f = a(n(932325));
            var p = n(417696);
            var m = n(608456);
            var g = a(n(772549));
            var h = n(676345);
            var E = n(459857);
            var b = n(548360);
            var v = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var n = M(t);
                if (n && n.has(e)) {
                    return n.get(e);
                }
                var a = {};
                var l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e) {
                    if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                        if (o && (o.get || o.set)) {
                            Object.defineProperty(a, r, o);
                        } else {
                            a[r] = e[r];
                        }
                    }
                }
                a.default = e;
                if (n) {
                    n.set(e, a);
                }
                return a;
            }(n(667294));
            a(n(156720));
            var y = a(n(261716));
            var C = a(n(524578));

            function M (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var n = new WeakMap();
                return (M = function (e) {
                    if (e) {
                        return n;
                    } else {
                        return t;
                    }
                })(e);
            }
            const k = "HEADER";
            const _ = "ROW";
            const w = "DISCLAIMER";
            const S = (0, p.ListModalFactory)();

            function P (e, t) {
                var n;
                const {
                    chat: a,
                    onBack: o,
                    onClose: i
                } = e;
                const u = (n = a.groupMetadata) === null || n === undefined ? undefined : n.pastParticipants;
                const [s, c] = (0, y.default)();
                const d = (0, C.default)(u, ["buld_add", "bulk_remove", "reset"], () => {
                    var e;
                    const t = f.default.accentFold(s);
                    const n = (0, m.numberSearch)(t);
                    const a = (e = u == null ? undefined : u.getValidRecords().filter(e => {
                        const a = !t || e.contact.searchMatch(t, n);
                        if ((0, l.hideCagMaskedParticipants)()) {
                            return ((0, E.isMeAccount)(e.id) || !e.id.isLid()) && a;
                        } else {
                            return a;
                        }
                    })) !== null && e !== undefined ? e : [];
                    if (!a.length) {
                        return [];
                    }
                    const r = [];
                    r.push({
                        type: k,
                        header: b.fbt._("Past participants", null, {
                            hk: "2k91Dw"
                        }),
                        itemKey: "list_header"
                    });
                    a.forEach((e, t) => r.push({
                        type: _,
                        participant: e,
                        itemKey: `${e.id.toString()}_${t}`
                    }));
                    r.push({
                        type: w
                    });
                    return r;
                }, [s]);
                return v.default.createElement(S, {
                    ref: t,
                    title: b.fbt._("Search past participants", null, {
                        hk: "1d6pYh"
                    }),
                    data: d,
                    renderItem: e => v.default.createElement(O, {
                        data: e,
                        elevatedPushNamesEnabled: (0, r.elevatedPushNamesM2Enabled)(a)
                    }),
                    emptyState: v.default.createElement(A, null),
                    onSearch: c,
                    searchPlaceholder: b.fbt._("Search contacts", null, {
                        hk: "3gUOKZ"
                    }),
                    onBack: o,
                    onCancel: i
                });
            }

            function O (e) {
                var t;
                let {
                    data: n,
                    elevatedPushNamesEnabled: a
                } = e;
                switch (n.type) {
                    case k:
                        return v.default.createElement(g.default, {
                            header: (t = n.header) !== null && t !== undefined ? t : "",
                            uppercase: false
                        });
                    case _:
                        return v.default.createElement(d.default, {
                            participant: n.participant,
                            elevatedPushNamesEnabled: a
                        });
                    case w:
                        return v.default.createElement(T, null);
                    default:
                        throw new s.UnknownDataError(n);
                }
            }
            const I = {
                row: {
                    height: "graaj7av",
                    backgroundColor: "ihvf49ua"
                },
                disclaimer: {
                    fontSize: "f8jlpxt4",
                    color: "pm5hny62"
                },
                empty: {
                    fontSize: "enbbiyaj",
                    color: "eruf1vka"
                }
            };

            function T () {
                return v.default.createElement(c.FlexRow, {
                    xstyle: [I.row, I.disclaimer, h.uiPadding.horiz15],
                    align: "center",
                    justify: "center"
                }, v.default.createElement("span", null, b.fbt._("People who left or were removed in the last 60 days. {=m2}", [b.fbt._implicitParam("=m2", v.default.createElement(o.ExternalLink, {
                    href: (0, i.getHowToExitAndDeleteGroupsFaq)()
                }, b.fbt._("Learn More", null, {
                    hk: "44tT41"
                })))], {
                    hk: "gdXOy"
                })));
            }

            function A () {
                return v.default.createElement(v.default.Fragment, null, v.default.createElement(g.default, {
                    header: b.fbt._("Past participants", null, {
                        hk: "2k91Dw"
                    }),
                    uppercase: false
                }), v.default.createElement(c.FlexRow, {
                    xstyle: [I.row, I.empty],
                    align: "center",
                    justify: "center"
                }, v.default.createElement("span", null, (0, u.default)("No results found"))), v.default.createElement(T, null));
            }
            var N = (0, v.forwardRef)(P);
            t.default = N;
        },
        483447: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const {
                    onClick: t,
                    spaced: n
                } = e;
                const a = s.default.createElement(i.TextSpan, {
                    theme: "title"
                }, u.fbt._("Security", null, {
                    hk: "2BYJDI"
                }));
                const c = s.default.createElement(i.TextDiv, {
                    theme: "muted"
                }, u.fbt._("Click to learn how messages and calls are secured.", null, {
                    hk: "1UxhjE"
                }));
                const d = s.default.createElement(r.LockIcon, {
                    color: o.SvgColorProp.SECONDARY,
                    height: 20
                });
                return s.default.createElement(l.default, {
                    icon: d,
                    onClick: t,
                    title: a,
                    secondaryTitle: c,
                    spaced: n
                });
            };
            var l = a(n(306007));
            var r = n(821063);
            var o = n(220584);
            var i = n(180519);
            var u = n(548360);
            var s = a(n(667294));
        },
        788271: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.useShowPastParticipants = function (e) {
                const t = (0, o.useOptionalModelValues)(e.groupMetadata, ["participants", "pastParticipants", "groupType"]);
                const n = t == null ? undefined : t.pastParticipants;
                if (!(0, r.default)(n, ["bulk_add", "bulk_remove", "reset"], () => Boolean(n == null ? undefined : n.getValidRecords().length))) {
                    return false;
                }
                if ((t == null ? undefined : t.groupType) === l.GroupType.LINKED_ANNOUNCEMENT_GROUP) {
                    return Boolean(t == null ? undefined : t.participants.iAmAdmin());
                }
                return true;
            };
            var l = n(862159);
            var r = a(n(524578));
            var o = n(655241);
        },
        883537: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const t = (0, c.useModelValues)(e.mediaData, ["mediaStage", "renderableUrl"]);
                return s.default.createElement(o.default, {
                    mediaData: t,
                    placeholderRenderer: p
                }, t => s.default.createElement(f, {
                    url: t,
                    msg: e.msg
                }));
            };
            var l = n(396574);
            var r = a(n(936027));
            var o = a(n(674465));
            var i = n(782173);
            var u = n(548360);
            var s = a(n(667294));
            var c = n(655241);
            const d = e => {
                e.stopPropagation();
            };

            function f (e) {
                let {
                    url: t,
                    msg: n
                } = e;
                return s.default.createElement(i.AudioTag, {
                    url: t,
                    className: r.default.mediaViewerAudio,
                    onClick: d,
                    autoPlay: true,
                    msg: n,
                    controls: true,
                    testId: "media-audio"
                }, u.fbt._("Your browser doesn't support audio playback.", null, {
                    hk: "hvWWG"
                }));
            }

            function p () {
                return s.default.createElement("div", {
                    className: (0, l.classnamesConvertMeToStylexPlease)(r.default.imageAudio, r.default.mediaViewerPlaceholder),
                    onClick: d
                });
            }
        },
        548290: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                var t;
                const {
                    msg: n,
                    onHightlightCloseEnd: a,
                    msgIndexInAlbum: l,
                    onViewOnceInfoClick: r,
                    onClose: i
                } = e;
                const s = (0, ve.useRef)(null);
                const [c, d, f, p, m, h, E, v, M, _, w, P, O, I, N, x] = (0, ke.useMsgValues)(e.msg.id, [W.getId, W.getStar, W.getIsGroupMsg, W.getType, W.getIsGif, W.getIsViewOnce, W.getSender, S.getSenderObj, W.getT, W.getIsSentByMe, W.getIsStickerMsg, W.getBroadcastId, S.getIsUnsentMedia, W.getIsKept, W.getMessageSecret, W.getIsCarouselCard]);
                const L = (0, V.useWAWebLocalizedViewCount)(n.id);
                const j = (0, S.getChat)(n);
                const B = (0, Me.useModelValues)(e.mediaData, ["filehash", "mediaStage", "renderableUrl"]);
                const [G, H] = (0, ve.useState)(null);
                const [z, q] = (0, ve.useState)(null);
                const Y = (0, ve.useRef)(null);
                const K = () => {
                    H(null);
                };
                const Q = () => {
                    q(null);
                };
                const $ = (0, _e.default)(e => {
                    if ((0, Z.canReactToMessage)(e)) {
                        q({
                            dirY: b.DirY.BOTTOM,
                            dirX: b.DirX.CENTER,
                            type: b.MenuType.ReactionPicker,
                            menu: ve.default.createElement(X.ReactionsPanel, {
                                msgId: e.id.toString(),
                                onSelection: t => {
                                    (0, ae.sendReactionToMsg)(e, t).catch(() => {});
                                    Q();
                                }
                            }),
                            flipOnRTL: true,
                            anchor: Y.current
                        });
                    }
                });
                (0, Ce.useListener)(s.current, "animationend", () => {
                    a();
                });
                let J = n.displayName({
                    showShortName: true,
                    withPushName: true
                });
                if (f) {
                    J += " @ " + j.title();
                }
                const ee = ve.default.createElement(Ee.XViewerIcon, {
                    className_DONOTUSE: e.isHighlightClose ? T.default.highlightClose : null,
                    containerRef: s
                });
                let te;
                if (G) {
                    te = ve.default.createElement(ce.UIE, {
                        displayName: "MsgReaction",
                        escapable: true,
                        popable: true,
                        dismissOnWindowResize: true,
                        requestDismiss: K
                    }, ve.default.createElement(de.default, {
                        contextMenu: G
                    }));
                } else if (z) {
                    te = ve.default.createElement(ce.UIE, {
                        displayName: "MsgReactionPicker",
                        escapable: true,
                        popable: true,
                        dismissOnWindowResize: true,
                        requestDismiss: Q
                    }, ve.default.createElement(de.default, {
                        contextMenu: z
                    }));
                }
                const ne = (0, U.isNewsletterViewCountEnabled)(j == null || (t = j.newsletterMetadata) === null || t === undefined ? undefined : t.membershipType) && L != null ? ve.default.createElement(k.FlexRow, {
                    className: T.default.viewCount
                }, u.Clock.relativeDateAndTimeStr(M), ve.default.createElement(R.MetaBullet, null), ve.default.createElement("span", null, L)) : ve.default.createElement(ve.default.Fragment, null, u.Clock.relativeDateAndTimeStr(M));
                return ve.default.createElement("div", {
                    className: T.default.mediaPanelHeader
                }, ve.default.createElement("div", {
                    className: T.default.info
                }, ve.default.createElement(o.default, {
                    idle: true,
                    image: ve.default.createElement(g.DetailImage, {
                        id: E,
                        size: 40
                    }),
                    primary: ve.default.createElement(y.EmojiText, {
                        ellipsify: true,
                        text: J
                    }),
                    secondary: ne,
                    theme: "media"
                })), ve.default.createElement("div", {
                    className: T.default.mediaPanelTools
                }, ve.default.createElement(D.MenuBar, {
                    key: "media-panel-header",
                    theme: "strong"
                }, ve.default.createElement(Ve, {
                    isMediaDownloadable: () => !h && !!(0, F.canDownloadMsg)(n) && (!!B.renderableUrl || B.mediaStage === A.MEDIA_DATA_STAGE.RESOLVED),
                    msg: n,
                    msgIndexInAlbum: l,
                    onClose: i,
                    onViewOnceInfoClick: r,
                    openReactionTray: () => {
                        if (!(0, Z.canReactToMessage)(n)) {
                            return;
                        }
                        const e = {
                            dirY: b.DirY.BOTTOM,
                            dirX: b.DirX.CENTER,
                            type: b.MenuType.ReactionSendTray,
                            menu: ve.default.createElement(re.SendReactionsTrayContainer, {
                                msg: n,
                                selectedCallback: e => {
                                    if (e !== le.MORE_REACTIONS) {
                                        (0, ae.sendReactionToMsg)(n, e).catch(() => {});
                                    } else {
                                        self.setTimeout(() => {
                                            $(n);
                                        }, 150);
                                    }
                                    K();
                                }
                            }),
                            flipOnRTL: false,
                            anchor: Y.current
                        };
                        H(e);
                    },
                    sendReactionButtonRef: Y
                }), ve.default.createElement(D.MenuBarItem, {
                    testid: "btn-close",
                    icon: ee,
                    title: (0, C.default)("Close"),
                    onClick: e.onClose
                }))), te);
            };
            var l = n(8304);
            var r = n(765273);
            var o = a(n(170206));
            var i = n(713105);
            var u = n(63014);
            var s = n(780549);
            var c = n(385798);
            var d = n(877171);
            var f = n(103440);
            var p = n(184385);
            var m = a(n(804418));
            var g = n(23641);
            var h = n(784605);
            var E = n(900316);
            var b = n(664149);
            var v = n(675085);
            var y = n(305521);
            var C = a(n(395767));
            var M = n(821130);
            var k = n(690495);
            var _ = n(596533);
            var w = n(361483);
            var S = n(163755);
            var P = n(501532);
            var O = n(537036);
            var I = a(n(932325));
            var T = a(n(423359));
            var A = n(172259);
            var N = n(69315);
            var x = a(n(266466));
            var D = n(526795);
            var L = n(107600);
            var R = n(789955);
            var j = n(97858);
            var B = n(114850);
            var F = n(939716);
            var W = n(787742);
            var G = n(722119);
            var H = n(373070);
            var V = n(905797);
            var U = n(73225);
            var z = n(352740);
            var q = n(245474);
            var Y = n(533494);
            var K = n(764936);
            var X = n(400874);
            var Z = n(474474);
            var Q = n(173090);
            var $ = a(n(313014));
            var J = a(n(467201));
            var ee = n(774401);
            var te = a(n(774396));
            var ne = n(923743);
            var ae = n(594149);
            var le = n(948101);
            var re = n(708127);
            var oe = n(383296);
            var ie = n(453603);
            var ue = n(200915);
            var se = n(163139);
            var ce = n(392632);
            var de = a(n(37875));
            var fe = n(706775);
            var pe = n(135114);
            var me = n(172095);
            var ge = n(171221);
            var he = n(982015);
            var Ee = n(776770);
            var be = n(548360);
            var ve = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var n = we(t);
                if (n && n.has(e)) {
                    return n.get(e);
                }
                var a = {};
                var l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e) {
                    if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                        if (o && (o.get || o.set)) {
                            Object.defineProperty(a, r, o);
                        } else {
                            a[r] = e[r];
                        }
                    }
                }
                a.default = e;
                if (n) {
                    n.set(e, a);
                }
                return a;
            }(n(667294));
            var ye = a(n(135179));
            var Ce = n(808446);
            var Me = n(655241);
            var ke = n(871210);
            var _e = a(n(17533));

            function we (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var n = new WeakMap();
                return (we = function (e) {
                    if (e) {
                        return n;
                    } else {
                        return t;
                    }
                })(e);
            }
            const Se = n(76672).Mirrored(["MenuBar", "Dropdown"]);

            function Pe (e) {
                const t = (0, S.getChat)(e);
                t.composeQuotedMsg = e;
                d.ComposeBoxActions.focus(t);
            }

            function Oe (e) {
                return be.fbt._("Report {contact_name}", [be.fbt._param("contact_name", e.displayName())], {
                    hk: "3Dqyjo"
                });
            }

            function Ie (e) {
                let {
                    isMediaDownloadable: t,
                    msg: n,
                    onClose: a,
                    openReactionTray: l,
                    sendReactionButtonRef: r
                } = e;
                return ve.default.createElement(ve.default.Fragment, null, (0, G.canReplyMsg)(n) ? ve.default.createElement(Ne, {
                    msg: n,
                    onClose: a
                }) : null, (0, F.canStarMsg)(n) ? ve.default.createElement(je, {
                    msg: n
                }) : null, n.canShowKeepOrUnkeepOption() ? ve.default.createElement(Re, {
                    msg: n
                }) : null, (0, F.canPinMsg)(n) ? ve.default.createElement(Be, {
                    msg: n
                }) : null, (0, Z.canReactToMessage)(n) ? ve.default.createElement(Le, {
                    msg: n,
                    openReactionTray: l,
                    sendReactionButtonRef: r
                }) : null, ve.default.createElement(xe, {
                    msg: n,
                    onClose: a
                }), (0, F.canForwardMsg)(n) ? ve.default.createElement(Fe, {
                    msg: n
                }) : null, ve.default.createElement(Ue, {
                    isMediaDownloadable: t,
                    isAlbumMedia: true,
                    msg: n,
                    onClose: a
                }));
            }

            function Te (e) {
                let {
                    isMediaDownloadable: t,
                    msg: n,
                    onClose: a,
                    openReactionTray: l,
                    sendReactionButtonRef: r
                } = e;
                return ve.default.createElement(ve.default.Fragment, null, (0, W.getIsStickerMsg)(n) || (0, W.getIsCarouselCard)(n) ? null : ve.default.createElement(Ae, {
                    msg: n,
                    type: Se.MenuBar,
                    onClose: a
                }), !(0, W.getIsStickerMsg)(n) || (0, W.getIsCarouselCard)(n) || (0, W.getIsNewsletterMsg)(n) ? null : ve.default.createElement(Ne, {
                    msg: n,
                    onClose: a
                }), (0, F.canStarMsg)(n) ? ve.default.createElement(je, {
                    msg: n
                }) : null, (0, F.canPinMsg)(n) ? ve.default.createElement(Be, {
                    msg: n
                }) : null, n.canShowKeepOrUnkeepOption() ? ve.default.createElement(Re, {
                    msg: n
                }) : null, (0, W.getIsStickerMsg)(n) ? ve.default.createElement(xe, {
                    msg: n,
                    onClose: a
                }) : null, (0, Z.canReactToMessage)(n) ? ve.default.createElement(Le, {
                    msg: n,
                    openReactionTray: l,
                    sendReactionButtonRef: r
                }) : null, (0, F.canForwardMsg)(n) ? ve.default.createElement(Fe, {
                    msg: n
                }) : null, (0, W.getIsStickerMsg)(n) ? null : ve.default.createElement(De, {
                    isMediaDownloadable: t,
                    msg: n,
                    type: Se.MenuBar
                }), (0, F.canReportMsg)(n) && (0, j.messageLevelReportingEnabled)() ? ve.default.createElement(Ue, {
                    isMediaDownloadable: t,
                    isAlbumMedia: false,
                    msg: n,
                    onClose: a
                }) : null);
            }

            function Ae (e) {
                let {
                    msg: t,
                    type: n,
                    onClose: a
                } = e;
                const l = e => {
                    e.stopPropagation();
                    a();
                    E.DrawerManager.existsDrawerRight(e => {
                        if (e && c.Column.column === 2) {
                            E.DrawerManager.closeDrawerRight();
                        }
                    });
                    const n = (0, i.getSearchContext)((0, S.getChat)(t), (0, se.unproxy)(t));
                    s.Cmd.openChatAt((0, S.getChat)(t), n).then(e => {
                        if (e) {
                            d.ComposeBoxActions.focus((0, S.getChat)(t));
                        }
                    });
                };
                if (n === Se.Dropdown) {
                    return ve.default.createElement(v.DropdownItem, {
                        action: l
                    }, be.fbt._("Go to message", null, {
                        hk: "B1anG"
                    }));
                } else {
                    return ve.default.createElement(D.MenuBarItem, {
                        icon: ve.default.createElement(r.BubbleIcon, null),
                        title: be.fbt._("Go to message", null, {
                            hk: "B1anG"
                        }),
                        onClick: l
                    });
                }
            }

            function Ne (e) {
                let {
                    msg: t,
                    onClose: n
                } = e;
                return ve.default.createElement(D.MenuBarItem, {
                    icon: ve.default.createElement(Q.ReplyIcon, null),
                    title: be.fbt._("Reply", null, {
                        hk: "1C7DPa"
                    }),
                    onClick: () => {
                        n();
                        (0, l.delayMs)(N.CLOSE_ANIMATION_DURATION).then(Pe.bind(null, (0, se.unproxy)(t)));
                    }
                });
            }

            function xe (e) {
                let {
                    msg: t,
                    onClose: n
                } = e;
                return ve.default.createElement(D.MenuBarItem, {
                    icon: ve.default.createElement(p.DeleteIcon, null),
                    title: be.fbt._("Delete", null, {
                        hk: "2KhPUX"
                    }),
                    onClick: () => {
                        B.ModalManager.open(ve.default.createElement(m.default, {
                            chat: (0, S.getChat)(t),
                            msgList: [(0, se.unproxy)(t)],
                            onDelete: n
                        }));
                        ee.UiRevokeActionHelper.startSession();
                        ee.UiRevokeActionHelper.messageSelected();
                    }
                });
            }

            function De (e) {
                let {
                    msg: t,
                    type: n,
                    isMediaDownloadable: a
                } = e;
                const l = e => {
                    e.stopPropagation();
                    M.FileSaver.initDownload((0, se.unproxy)(t));
                };
                if (a()) {
                    if (n === Se.Dropdown) {
                        return ve.default.createElement(v.DropdownItem, {
                            action: l,
                            disabled: !a()
                        }, be.fbt._("Download", null, {
                            hk: "1g5Jix"
                        }));
                    } else {
                        return ve.default.createElement(D.MenuBarItem, {
                            icon: ve.default.createElement(h.DownloadIcon, null),
                            title: be.fbt._("Download", null, {
                                hk: "1g5Jix"
                            }),
                            disabled: !a(),
                            onClick: l
                        });
                    }
                } else {
                    return null;
                }
            }

            function Le (e) {
                let {
                    msg: t,
                    openReactionTray: n,
                    sendReactionButtonRef: a
                } = e;
                if (t.type === H.MSG_TYPE.STICKER) {
                    return null;
                } else {
                    return ve.default.createElement(D.MenuBarItem, {
                        testid: "reaction-entry-point",
                        icon: ve.default.createElement(K.ReactionsMediaIcon, {
                            containerRef: a,
                            width: 20
                        }),
                        title: be.fbt._("React", null, {
                            hk: "1mI4Nl"
                        }),
                        onClick: () => {
                            n();
                        }
                    });
                }
            }
            const Re = e => {
                let t;
                let n;
                let a;
                let {
                    msg: l
                } = e;
                const r = e => {
                    e.stopPropagation();
                    (0, P.runKeepInChatUX)((0, se.unproxy)(l), he.KIC_ENTRY_POINT_TYPE.MEDIA);
                };
                const o = e => {
                    e.stopPropagation();
                    (0, P.runUndoKeepInChatUX)((0, se.unproxy)(l), he.KIC_ENTRY_POINT_TYPE.MEDIA);
                };
                if ((0, W.getIsKept)(l) && l.canShowUnkeepOption()) {
                    t = ve.default.createElement(fe.UndoKeepInChatMediaIcon, null);
                    n = o;
                    a = be.fbt._("Unkeep", null, {
                        hk: "1eGZng"
                    });
                } else {
                    if ((0, W.getIsKept)(l) || !l.canShowKeepOption()) {
                        return null;
                    }
                    t = ve.default.createElement(O.KeepInChatMediaIcon, null);
                    n = r;
                    a = be.fbt._("Keep", null, {
                        hk: "1a48ae"
                    });
                }
                return ve.default.createElement(D.MenuBarItem, {
                    key: t,
                    icon: t,
                    title: a,
                    onClick: n
                });
            };

            function je (e) {
                let t;
                let n;
                let a;
                let {
                    msg: l
                } = e;
                if (l.star) {
                    t = e => {
                        e.stopPropagation();
                        s.Cmd.sendUnstarMsgs((0, S.getChat)(l), [(0, se.unproxy)(l)]);
                    };
                    n = ve.default.createElement(me.UnstarBtnIcon, null);
                    a = I.default.t(158);
                } else {
                    t = e => {
                        e.stopPropagation();
                        s.Cmd.sendStarMsgs((0, S.getChat)(l), [(0, se.unproxy)(l)]);
                    };
                    n = ve.default.createElement(ue.StarBtnIcon, null);
                    a = I.default.t(151);
                }
                return ve.default.createElement(D.MenuBarItem, {
                    key: a,
                    icon: n,
                    title: a,
                    onClick: t
                });
            }

            function Be (e) {
                let t;
                let n;
                let a;
                let {
                    msg: l
                } = e;
                if ((0, ye.default)(l.id)) {
                    t = e => {
                        e.stopPropagation();
                        (0, ne.sendPinInChatMsg)(l, Y.Message$PinInChatMessage$Type.UNPIN_FOR_ALL).catch(e => {
                            __LOG__(4, undefined, new Error())`Error while unpinning a message: ${e}`;
                        });
                    };
                    n = ve.default.createElement(pe.UnpinnedIcon, null);
                    a = be.fbt._("Unpin", null, {
                        hk: "3oWx14"
                    });
                } else {
                    t = e => {
                        e.stopPropagation();
                        B.ModalManager.open(ve.default.createElement(z.PinMessageModal, {
                            msg: l
                        }));
                    };
                    n = ve.default.createElement(q.Pinned3Icon, null);
                    a = be.fbt._("Pin", null, {
                        hk: "23jUX3"
                    });
                }
                return ve.default.createElement(D.MenuBarItem, {
                    key: a,
                    icon: n,
                    title: a,
                    onClick: t
                });
            }

            function Fe (e) {
                let {
                    msg: t
                } = e;
                return ve.default.createElement(D.MenuBarItem, {
                    icon: ve.default.createElement(_.ForwardIcon, null),
                    title: be.fbt._("Forward", null, {
                        hk: "2T1QOm"
                    }),
                    onClick: e => {
                        e.stopPropagation();
                        if ((0, S.getIsUnsentMedia)(t)) {
                            B.ModalManager.open(ve.default.createElement(f.ConfirmPopup, {
                                title: be.fbt._("Can't Forward", null, {
                                    hk: "3fgR0v"
                                }),
                                onOK: () => B.ModalManager.close(),
                                okText: (0, C.default)("OK")
                            }, be.fbt._({
                                "*": "Wait until the messages finish sending and displays a checkmark before forwarding.",
                                _1: "Wait until the message finishes sending and displays a checkmark before forwarding."
                            }, [be.fbt._plural(1)], {
                                hk: "Q1oiD"
                            })));
                        } else {
                            B.ModalManager.open(ve.default.createElement(w.ForwardMessageModalLoadable, {
                                msgs: [(0, se.unproxy)(t)],
                                onClose: () => B.ModalManager.close()
                            }), {
                                transition: "modal-flow"
                            });
                        }
                    }
                });
            }

            function We (e) {
                let {
                    msg: t
                } = e;
                return ve.default.createElement(v.DropdownItem, {
                    testid: "mi-msg-reply",
                    action: () => {
                        (0, $.default)(t);
                    }
                }, be.fbt._("Reply privately", null, {
                    hk: "1XQeK2"
                }));
            }

            function Ge (e) {
                let {
                    msg: t
                } = e;
                const n = e => {
                    if (e) {
                        (0, oe.sendMessageReportBlock)(t, ie.SpamFlow.MediaViewer);
                    } else {
                        (0, oe.sendMessageReport)(t, ie.SpamFlow.MediaViewer);
                    }
                    B.ModalManager.close();
                };
                return ve.default.createElement(v.DropdownItem, {
                    action: () => {
                        var e;
                        var a;
                        B.ModalManager.open(ve.default.createElement(x.default, {
                            isBusiness: t.senderObj.isBusiness,
                            isGroup: (0, S.getChat)(t).isGroup,
                            isBizBot3p: (e = (a = (0, S.getChat)(t).contact.businessProfile) === null || a === undefined ? undefined : a.isBizBot3p) !== null && e !== undefined && e,
                            onReport: n,
                            onCancel: () => B.ModalManager.close(),
                            title: Oe(t)
                        }));
                    }
                }, Oe(t));
            }

            function He (e) {
                let {
                    msg: t,
                    onClose: n
                } = e;
                return ve.default.createElement(v.DropdownItem, {
                    action: () => {
                        n();
                        (0, l.delayMs)(N.CLOSE_ANIMATION_DURATION + 250).then(s.Cmd.msgInfoDrawer.bind(s.Cmd, (0, se.unproxy)(t)));
                    }
                }, be.fbt._("Message info", null, {
                    hk: "2h2aKZ"
                }));
            }

            function Ve (e) {
                let {
                    isMediaDownloadable: t,
                    msg: n,
                    msgIndexInAlbum: a,
                    onClose: l,
                    onViewOnceInfoClick: r,
                    openReactionTray: o,
                    sendReactionButtonRef: i
                } = e;
                if (n.isViewOnce) {
                    return ve.default.createElement(ze, {
                        isMediaDownloadable: t,
                        msg: n,
                        onClose: l,
                        onViewOnceInfoClick: r
                    });
                } else if (a >= 0) {
                    return ve.default.createElement(Ie, {
                        isMediaDownloadable: t,
                        msg: n,
                        onClose: l,
                        openReactionTray: o,
                        sendReactionButtonRef: i
                    });
                } else {
                    return ve.default.createElement(Te, {
                        isMediaDownloadable: t,
                        msg: n,
                        onClose: l,
                        openReactionTray: o,
                        sendReactionButtonRef: i
                    });
                }
            }

            function Ue (e) {
                let {
                    isMediaDownloadable: t,
                    isAlbumMedia: n,
                    msg: a,
                    onClose: l
                } = e;
                const r = [];
                const o = (0, S.getChat)(a);
                if ((0, G.canPrivateReply)(a) || (0, G.canPrivateReplyInRestrictedGrp)(a)) {
                    r.push(ve.default.createElement(We, {
                        key: "private_reply",
                        msg: a
                    }));
                }
                if (n) {
                    if ((0, W.getIsSentByMe)(a)) {
                        r.push(ve.default.createElement(He, {
                            key: "dropdownMsgInfo",
                            msg: a,
                            onClose: l
                        }));
                    }
                    r.push(ve.default.createElement(Ae, {
                        key: "dropdownGoToMsg",
                        msg: a,
                        type: Se.Dropdown,
                        onClose: l
                    }), ve.default.createElement(De, {
                        key: "dropdownDownload",
                        isMediaDownloadable: t,
                        msg: a,
                        type: Se.Dropdown
                    }));
                }
                const i = !o.isNewsletter && (a.isViewOnce || (0, F.canReportMsg)(a) && (0, j.messageLevelReportingEnabled)());
                if (o.isNewsletter && (0, F.canReportMsg)(a) && (0, U.isNewsletterReportingEnabled)()) {
                    r.push(ve.default.createElement(J.default, {
                        key: "reportSpam",
                        msg: a
                    }));
                } else if (i) {
                    r.push(ve.default.createElement(Ge, {
                        key: "reportSpam",
                        msg: a
                    }));
                }
                if ((0, F.canReportToAdmin)(a)) {
                    r.push(ve.default.createElement(te.default, {
                        key: "report_to_admin",
                        msg: a
                    }));
                }
                return ve.default.createElement(D.MenuBarItem, {
                    icon: ve.default.createElement(L.MenuIcon, null),
                    title: be.fbt._("Menu", null, {
                        hk: "H0fkV"
                    })
                }, ve.default.createElement(b.Dropdown, {
                    type: b.MenuType.DropdownMenu,
                    flipOnRTL: true,
                    dirX: b.DirX.LEFT
                }, r));
            }

            function ze (e) {
                let {
                    isMediaDownloadable: t,
                    msg: n,
                    onClose: a,
                    onViewOnceInfoClick: l
                } = e;
                return ve.default.createElement(ve.default.Fragment, null, ve.default.createElement(D.MenuBarItem, {
                    icon: ve.default.createElement(ge.ViewOnceIcon, {
                        className_DONOTUSE: T.default.voIcon
                    }),
                    title: be.fbt._("View once info", null, {
                        hk: "47XkZ4"
                    }),
                    onClick: l
                }), ve.default.createElement(Ue, {
                    isMediaDownloadable: t,
                    isAlbumMedia: false,
                    msg: n,
                    onClose: a
                }));
            }
        },
        777361: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = undefined;
            var l = a(n(371125));
            var r = n(690495);
            var o = a(n(488922));
            var i = a(n(674465));
            var u = a(n(996513));
            var s = a(n(708126));
            var c = a(n(358533));
            var d = n(751460);
            var f = n(438543);
            var p = a(n(529727));
            var m = n(164832);
            var g = n(885313);
            var h = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var n = y(t);
                if (n && n.has(e)) {
                    return n.get(e);
                }
                var a = {};
                var l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e) {
                    if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                        if (o && (o.get || o.set)) {
                            Object.defineProperty(a, r, o);
                        } else {
                            a[r] = e[r];
                        }
                    }
                }
                a.default = e;
                if (n) {
                    n.set(e, a);
                }
                return a;
            }(n(667294));
            var E = a(n(156720));
            var b = a(n(38085));
            var v = n(655241);

            function y (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var n = new WeakMap();
                return (y = function (e) {
                    if (e) {
                        return n;
                    } else {
                        return t;
                    }
                })(e);
            }
            const C = {
                container: {
                    width: "ln8gz9je",
                    height: "ppled2lx"
                },
                stickerContainer: {
                    maxWidth: "mx6rw3sv",
                    maxHeight: "trnfqnf9",
                    marginBottom: "r2u2pyhj",
                    zIndex: "thghmljt"
                }
            };
            const M = (e, t) => {
                const {
                    msg: n
                } = e;
                const a = (0, v.useModelValues)(e.mediaData, ["encFilehash", "directPath", "filehash", "mediaKey", "mediaKeyTimestamp", "mediaStage", "mimetype", "fullWidth", "fullHeight", "isFirstParty", "isAvatar", "stickerPackId", "stickerPackName", "stickerPackPublisher"]);
                const y = (0, h.useRef)(null);
                const M = (0, b.default)(t, y);
                const k = e => {
                    var t;
                    if (!((t = y.current) === null || t === undefined)) {
                        t.onClick(e);
                    }
                };
                const _ = c.default.getActive();
                const w = (0, d.iAmAdminOrOwner)(_ == null ? undefined : _.newsletterMetadata);
                const S = a.isFirstParty ? h.default.createElement(l.default, {
                    stickerPackId: a.stickerPackId,
                    onStickerPackView: e.onStickerPackView,
                    stickerPackViewDelay: e.stickerPackViewDelay,
                    showViewPackButton: _ != null ? a.isAvatar !== true && w : a.isAvatar !== true,
                    sticker: new m.StickerModel({
                        id: a.filehash,
                        mimetype: a.mimetype,
                        width: a.fullWidth,
                        height: a.fullHeight,
                        filehash: a.filehash,
                        encFilehash: a.encFilehash,
                        directPath: a.directPath,
                        mediaKey: a.mediaKey,
                        mediaKeyTimestamp: a.mediaKeyTimestamp
                    })
                }) : h.default.createElement(f.StickerDetailsStickerPackInfo, {
                    name: a.stickerPackName,
                    publisher: a.stickerPackPublisher,
                    theme: f.Theme.MediaViewer,
                    sticker: new m.StickerModel({
                        id: a.filehash,
                        mimetype: a.mimetype,
                        width: a.fullWidth,
                        height: a.fullHeight,
                        filehash: a.filehash,
                        encFilehash: a.encFilehash,
                        directPath: a.directPath,
                        mediaKey: a.mediaKey,
                        mediaKeyTimestamp: a.mediaKeyTimestamp
                    })
                });
                return h.default.createElement(r.FlexColumn, {
                    align: "center",
                    justify: "center",
                    xstyle: C.container
                }, h.default.createElement("div", {
                    className: (0, E.default)(C.container, C.stickerContainer)
                }, h.default.createElement(s.default, {
                    ref: M,
                    width: a.fullWidth,
                    height: a.fullHeight,
                    onZoomIn: e.onImgZoomIn,
                    msg: n
                }, h.default.createElement(i.default, {
                    mediaData: a,
                    placeholderRenderer: () => h.default.createElement(p.default, {
                        size: 376
                    }),
                    downloadMedia: () => n == null ? undefined : n.downloadMedia({
                        downloadEvenIfExpensive: false,
                        rmrReason: g.WEBC_RMR_REASON_CODE.MEDIA_VIEWER,
                        isUserInitiated: false
                    })
                }, t => h.default.createElement(o.default, {
                    className: (0, E.default)(u.default.content),
                    onClick: k,
                    src: t,
                    onLoad: e.onLoad
                })))), S);
            };
            var k = (0, h.forwardRef)(M);
            t.default = k;
        },
        177046: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = undefined;
            var l = a(n(190643));
            var r = n(980518);
            var o = a(n(66985));
            var i = a(n(49677));
            var u = n(845582);
            var s = n(172259);
            var c = a(n(996513));
            var d = n(787742);
            var f = a(n(821384));
            var p = n(728);
            var m = n(31900);
            var g = n(277037);
            var h = n(541345);
            var E = n(474474);
            var b = a(n(439114));
            var v = n(885313);
            var y = n(548360);
            var C = n(113189);
            var M = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var n = w(t);
                if (n && n.has(e)) {
                    return n.get(e);
                }
                var a = {};
                var l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e) {
                    if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                        if (o && (o.get || o.set)) {
                            Object.defineProperty(a, r, o);
                        } else {
                            a[r] = e[r];
                        }
                    }
                }
                a.default = e;
                if (n) {
                    n.set(e, a);
                }
                return a;
            }(n(667294));
            var k = a(n(156720));
            var _ = n(655241);

            function w (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var n = new WeakMap();
                return (w = function (e) {
                    if (e) {
                        return n;
                    } else {
                        return t;
                    }
                })(e);
            }

            function S (e, t) {
                var n;
                const {
                    autoPlay: a,
                    msg: w,
                    onLoad: S,
                    onClose: P,
                    onLoadedData: I,
                    startTime: T = 0
                } = e;
                const A = (0, _.useModelValues)(e.mediaData, ["mediaStage", "fullWidth", "fullHeight", "isGif", "isViewOnce", "preview", "renderableUrl", "streamable"]);
                const [N, x] = (0, M.useState)(false);
                const [D, L] = (0, M.useState)(true);
                const R = (0, M.useRef)();
                const j = (0, M.useMemo)(() => (A.mediaStage === s.MEDIA_DATA_STAGE.RESOLVED || A.streamable && A.isStreamable()) && (0, C.isNonZeroNumber)(A.fullWidth) && (0, C.isNonZeroNumber)(A.fullHeight) ? function (e) {
                    if (e.isGif) {
                        const t = 330;
                        if (e.fullWidth >= t) {
                            return {
                                width: e.fullWidth,
                                height: e.fullHeight
                            };
                        } else {
                            return {
                                width: t,
                                height: e.fullHeight * t / e.fullWidth
                            };
                        }
                    }
                    if (e.fullWidth >= m.MIN_WIDTH) {
                        return {
                            width: e.fullWidth,
                            height: e.fullHeight
                        };
                    }
                    return {
                        width: m.MIN_WIDTH,
                        height: e.fullHeight
                    };
                }(A) : {
                    width: 0,
                    height: 0
                }, [A]);
                (0, M.useEffect)(() => {
                    if (!A.isStreamable()) {
                        w.downloadMedia({
                            downloadEvenIfExpensive: true,
                            rmrReason: v.WEBC_RMR_REASON_CODE.MEDIA_VIEWER,
                            isUserInitiated: true
                        });
                        return () => {
                            if (w.mediaObject) {
                                w.cancelDownload();
                            }
                        };
                    }
                }, []);
                const B = e => {
                    x(e);
                };
                (0, M.useImperativeHandle)(t, () => ({
                    getContainerElement: () => R.current,
                    closingMedia () {
                        L(false);
                    }
                }));
                const F = A.isGif;
                let W = A.mediaStage === s.MEDIA_DATA_STAGE.RESOLVED || A.streamable && A.isStreamable();
                W = W || w.isForcingRMR();
                let G = null;
                const H = (0, u.getDisplayType)(w);
                const V = r.AddOnBubbleType.MEDIA_VIEWER;
                if (w && (0, E.shouldShowReactionBubble)(w, V)) {
                    G = M.default.createElement(l.default, {
                        isOutgoingMsg: (0, d.getIsSentByMe)(w),
                        displayType: H,
                        bubbleType: V
                    }, M.default.createElement(h.ReactionBubbleContainer, {
                        msgIds: [w.id.toString()],
                        isOutgoingMsg: (0, d.getIsSentByMe)(w),
                        displayType: H,
                        reactionBubbleType: V,
                        reactionBubbleVisible: D
                    }));
                }
                if (W) {
                    const e = y.fbt._("Your browser doesn't support video playback.", null, {
                        hk: "2nHZKq"
                    });
                    let t;
                    let n;
                    if (!N && (w == null ? undefined : w.interactiveAnnotations) && w.interactiveAnnotations.length > 0) {
                        t = M.default.createElement(o.default, {
                            annotations: w.interactiveAnnotations
                        });
                    }
                    n = F ? M.default.createElement("div", {
                        className: (0, k.default)(c.default.content),
                        ref: R
                    }, M.default.createElement(b.default, {
                        src: A.renderableUrl,
                        onClick: O,
                        autoPlay: true,
                        loop: true,
                        onLoadedData: I
                    }, e), t) : M.default.createElement("div", {
                        ref: R,
                        className: (0, k.default)(c.default.content),
                        onClick: O
                    }, M.default.createElement(g.WrappedMsgVideoPlayer, {
                        msg: w,
                        mediaData: A,
                        startTime: T,
                        onClose: P,
                        onError: () => {},
                        onFullscreenToggle: B,
                        autoPlay: a,
                        type: p.PLAYER_TYPE.MEDIA_VIEWER,
                        overlays: t,
                        noPip: w.isViewOnce,
                        onLoadedData: I
                    }));
                    return M.default.createElement(f.default, {
                        type: "scaleDown",
                        position: "relative",
                        objectPosition: "relative",
                        size: j,
                        onObjectLoad: S
                    }, n, G);
                }
                return M.default.createElement(f.default, {
                    type: "scaleDown",
                    position: "relative",
                    objectPosition: "relative",
                    size: {
                        width: A.fullWidth,
                        height: A.fullHeight
                    }
                }, M.default.createElement(i.default, {
                    altText: (n = w.caption) !== null && n !== undefined ? n : "",
                    mediaData: A
                }), G);
            }
            var P = (0, M.forwardRef)(S);

            function O (e) {
                e.stopPropagation();
            }
            t.default = P;
        },
        933147: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const {
                    msg: t,
                    onImageLoad: n,
                    isAnimatingThumbs: a,
                    onImgZoomIn: r,
                    onExitAnimation: I,
                    onBack: H
                } = e;
                const [V, z, Y, K, X, Z, Q, $, J, ee] = (0, F.useMsgValues)(e.msg.id, [w.getId, w.getStar, c.getIsUnsentMedia, w.getIsViewOnce, w.getIsStickerMsg, w.getHasThumbList, w.getCaption, w.getInteractiveAnnotations, w.getType, w.getMessageSecret]);
                const te = (0, c.getChat)(t);
                const ne = (0, B.useModelValues)(e.mediaData, ["mediaStage", "type", "isGif"]);
                const ae = (0, j.useRef)(null);
                const le = (0, j.useRef)(null);
                const re = (0, j.useRef)(null);
                const oe = (0, j.useRef)(null);
                const ie = (0, j.useRef)();
                const ue = (0, j.useRef)(false);
                const se = (0, j.useRef)(false);
                const ce = (0, j.useRef)(false);
                const [de, fe] = (0, W.default)(O.NUX.EPHEMERAL_VIEW_ONCE_RECEIVER);
                const pe = K && de;
                const [me] = (0, j.useState)(() => ne.mediaStage === y.MEDIA_DATA_STAGE.RESOLVED && e.getZoomNode ? e.getZoomNode(V) : null);
                const [ge, he] = (0, j.useState)(false);
                const [Ee, be] = (0, j.useState)(false);
                const ve = [g.default.TYPE.IMAGE, g.default.TYPE.STICKER].includes(ne.type);
                const [ye, Ce] = (0, j.useState)(ve);
                const [Me, ke] = (0, j.useState)(!e.isAnimatingThumbs && !ye);
                const [_e, we] = (0, j.useState)(false);
                const [Se, Pe] = (0, j.useState)(false);
                const Oe = () => {
                    const e = j.default.createElement(L.default, {
                        isPhoto: ne.type === g.default.TYPE.IMAGE,
                        onOkClick: () => {
                            fe();
                            _.ModalManager.close();
                        }
                    });
                    _.ModalManager.open(e);
                };
                const Ie = (0, G.default)((e, t) => {
                    if (Ee) {
                        return;
                    }
                    const n = ae.current;
                    if (!n) {
                        return;
                    }
                    const a = n.getInsideContainer();
                    if (!(a && a instanceof HTMLElement)) {
                        return;
                    }
                    const l = n.getOutsideContainer();
                    if (!(l && l instanceof HTMLElement)) {
                        return;
                    }
                    const {
                        translateX: r,
                        translateY: o
                    } = n.getTranslatePosition(l, e, t);
                    (0, D.default)(a, "stop");
                    (0, D.default)(a, {
                        translateX: r,
                        translateY: o,
                        scale: C.ZOOM_IN_FACTOR
                    }, {
                        duration: 0
                    });
                });
                (0, j.useEffect)(() => {
                    __LOG__(2)`MediaViewerModal: Opened`;
                    if (pe) {
                        Oe();
                    }
                    u.default.focus(oe.current);
                    return () => {
                        __LOG__(2)`MediaViewerModal: Closed`;
                        Ie.cancel();
                    };
                }, []);
                const Te = () => {
                    if (K && (0, p.canMarkPlayed)(t)) {
                        (0, p.markPlayed)(t);
                    }
                };
                const Ae = e => {
                    Te();
                    if (n) {
                        n();
                    }
                    const t = me;
                    const a = e.target;
                    if (t && a && a instanceof HTMLElement) {
                        if (!ce.current) {
                            ce.current = true;
                            ((e, t) => {
                                var n;
                                const a = t.getBoundingClientRect();
                                const l = e.getBoundingClientRect();
                                let r = l.top - a.top;
                                let o = l.left - a.left;
                                const i = e.clientWidth / t.clientWidth;
                                r -= (t.clientHeight - e.clientHeight) / 2;
                                o -= (t.clientWidth - e.clientWidth) / 2;
                                (0, D.default)(t, {
                                    opacity: [1, 0],
                                    translateX: [0, o],
                                    translateY: [0, r],
                                    scale: [1, i]
                                }, {
                                    duration: C.ANIMATION_DURATION,
                                    easing: [0.1, 0.82, 0.25, 1]
                                }).then(() => Ce(false));
                                const u = (n = re.current) === null || n === undefined ? undefined : n.getElement();
                                if (u) {
                                    (0, D.default)(u, {
                                        opacity: [1, 0]
                                    }, {
                                        duration: C.ANIMATION_DURATION
                                    });
                                }
                            })(t, a);
                        }
                    }
                };
                const Ne = () => {
                    var t;
                    if (ue.current) {
                        return;
                    }
                    ue.current = true;
                    if ((0, l.isFunction)(I)) {
                        I();
                    }
                    const n = e.getZoomNode && e.getZoomNode(V);
                    if (!n) {
                        return H();
                    }
                    let a;
                    var r;
                    if (ve && ae.current) {
                        a = ae.current.getInsideContainer();
                        if (!((r = ae.current) === null || r === undefined)) {
                            r.closingMediaZoomable();
                        }
                    } else if (ne.isGif && le.current) {
                        var o;
                        a = le.current.getContainerElement();
                        if (!((o = le.current) === null || o === undefined)) {
                            o.closingMedia();
                        }
                    }
                    if (!a) {
                        return H();
                    }
                    const i = a;
                    const u = a.getBoundingClientRect();
                    const s = n.getBoundingClientRect();
                    let c = s.top - u.top;
                    let d = s.left - u.left;
                    const f = n.clientWidth / i.clientWidth;
                    c -= (i.clientHeight - n.clientHeight) / 2;
                    d -= (i.clientWidth - n.clientWidth) / 2;
                    (0, D.default)(a, {
                        translateX: [d, 0],
                        translateY: [c, 0],
                        scale: [f, 1]
                    }, {
                        duration: C.CLOSE_ANIMATION_DURATION,
                        easing: [0.1, 0.82, 0.25, 1]
                    }).then(() => {
                        H();
                    });
                    const p = (t = re.current) === null || t === undefined ? undefined : t.getElement();
                    if (p) {
                        (0, D.default)(p, {
                            opacity: [0, 1]
                        }, {
                            duration: C.CLOSE_ANIMATION_DURATION,
                            easing: [0.1, 0.82, 0.25, 1]
                        });
                    }
                };
                const xe = e => {
                    const t = ae.current;
                    if (e && t) {
                        se.current = t.getHeightOverflow() > 0 || t.getWidthOverflow() > 0;
                    }
                    he(e);
                    r(e);
                };
                const De = e => {
                    var t;
                    const n = (t = ae.current) === null || t === undefined ? undefined : t.getInsideContainer();
                    const l = Boolean(n == null ? undefined : n.contains(document.activeElement));
                    if (a || ye || !l) {
                        return;
                    }
                    Ie.cancel();
                    const r = ae.current;
                    if (r != null) {
                        r.onKeyboardZoom(e);
                    }
                };
                const Le = () => {
                    Pe(true);
                };
                const Re = () => {
                    be(true);
                };
                const je = () => {
                    be(false);
                };
                const Be = e => {
                    e.stopPropagation();
                    we(!_e);
                };
                let Fe;
                let We;
                (0, j.useEffect)(() => {
                    if (!(Me || a || ye)) {
                        ke(true);
                    }
                }, [a, Me, ye]);
                (0, A.useTsNavigation)({
                    surface: "media-viewer"
                });
                switch (ne.type) {
                    case g.default.TYPE.IMAGE:
                        Fe = j.default.createElement(h.default, {
                            key: V.toString(),
                            msg: t,
                            mediaData: ne,
                            onLoad: Ae,
                            onImgZoomIn: xe,
                            onAnnotationTooltipDisplay: Re,
                            onAnnotationTooltipDismiss: je,
                            preventDownload: K,
                            ref: ae
                        });
                        break;
                    case g.default.TYPE.STICKER:
                        Fe = j.default.createElement(v.default, {
                            key: V.toString(),
                            msg: t,
                            mediaData: ne,
                            onLoad: Ae,
                            onImgZoomIn: xe,
                            onStickerPackView: Ne,
                            stickerPackViewDelay: C.CLOSE_ANIMATION_DURATION,
                            ref: ae
                        });
                        break;
                    case g.default.TYPE.VIDEO:
                        Fe = j.default.createElement(M.default, {
                            key: V.toString(),
                            autoPlay: !pe,
                            msg: t,
                            mediaData: ne,
                            onLoadedData: ne.isGif ? Ae : Te,
                            startTime: e.startTime,
                            onClose: Ne,
                            ref: le
                        });
                        break;
                    case g.default.TYPE.AUDIO:
                        Fe = j.default.createElement(m.default, {
                            mediaData: ne,
                            key: V.toString(),
                            msg: t
                        });
                        break;
                    default:
                        __LOG__(4, undefined, new Error(), true)`type: ${ne.type}`;
                        SEND_LOGS("MediaViewerModal: unexpected media type");
                }
                const Ge = e.msgIndexInAlbum >= 0 && e.albumSize >= 0;
                if (Q || Ge) {
                    let n;
                    if (Ge) {
                        n = R.fbt._("{number} of {totalNumber}", [R.fbt._param("number", e.msgIndexInAlbum + 1), R.fbt._param("totalNumber", e.albumSize)], {
                            hk: "1hO6rM"
                        });
                    }
                    const a = s.Conversation({
                        mentions: t.mentionMap(),
                        groupMentions: t.groupMentionMap(),
                        phoneNumbers: (0, P.getPhoneNumbersFromMsg)(t),
                        links: (0, S.getLinksFromMsg)(t),
                        trusted: true,
                        fromMe: V.fromMe,
                        fromChatWid: V.remote
                    });
                    const l = ne.type === g.default.TYPE.IMAGE && !K;
                    const r = !Me && (ne.isGif || l);
                    We = j.default.createElement(j.default.Fragment, null, j.default.createElement("p", {
                        className: (0, o.classnamesConvertMeToStylexPlease)({
                            [k.default.captionWrapperExpandable]: ie.current === true,
                            [k.default.captionWrapper]: true
                        }),
                        onClick: ie.current ? Be : undefined,
                        title: ie.current ? R.fbt._("Read more", null, {
                            hk: "2DvSvh"
                        }) : undefined,
                        "aria-hidden": _e || undefined
                    }, j.default.createElement(i.EmojiText, {
                        className: (0, o.classnamesConvertMeToStylexPlease)({
                            [k.default.captionHidden]: r,
                            [k.default.expanded]: _e,
                            [k.default.mediaCaption]: true
                        }),
                        formatters: a,
                        ref: e => {
                            re.current = e;
                        },
                        text: Q || n
                    }), ie.current && j.default.createElement(x.default, {
                        xstyle: [U.captionReadMoreBtn, _e && U.captionReadMoreBtnExpanded, ge && U.captionReadMoreBtnZoomed],
                        onClick: Be
                    }, j.default.createElement(T.TextSpan, null, R.fbt._("Read more", null, {
                        hk: "2DvSvh"
                    })))), _e && j.default.createElement("p", {
                        className: (0, o.classnamesConvertMeToStylexPlease)(k.default.captionWrapper, k.default.captionWrapperExpandable, k.default.captionExpanded),
                        onClick: Be
                    }, j.default.createElement(i.EmojiText, {
                        className: (0, o.classnamesConvertMeToStylexPlease)(k.default.mediaCaption, k.default.mediaCaptionExpanded),
                        formatters: a,
                        text: Q
                    })));
                }
                const He = (0, o.classnamesConvertMeToStylexPlease)({
                    [k.default.mediaWithCaption]: !!We,
                    [k.default.media]: true
                });
                const Ve = (0, o.classnamesConvertMeToStylexPlease)({
                    [k.default.noThumbnails]: !Z,
                    [k.default.mediaViewerAnimate]: ye || a,
                    [k.default.cursorZoomOut]: ge,
                    overlay: true,
                    [k.default.mediaViewer]: true
                });
                const Ue = ge && se.current ? e => {
                    Ie(e.pageX, e.pageY);
                } : null;
                const ze = ge ? e => {
                    Ie.cancel();
                    const t = ae.current;
                    if (t && ge) {
                        t.onClick(e);
                    }
                } : null;
                let qe = ge ? null : Ne;
                if (qe != null && K) {
                    qe = Le;
                }
                return j.default.createElement(N.UIE, {
                    displayName: "MediaViewer",
                    escapable: true,
                    requestDismiss: Ne
                }, j.default.createElement(f.HotKeys, {
                    handlers: {
                        space: De,
                        enter: De
                    },
                    ref: oe
                }, j.default.createElement("div", {
                    className: Ve,
                    "data-animate-media-viewer": true,
                    onClick: ze,
                    onMouseMove: Ue
                }, j.default.createElement(E.default, {
                    isHighlightClose: Se,
                    msg: t,
                    mediaData: ne,
                    onClose: Ne,
                    onHightlightCloseEnd: () => {
                        Pe(false);
                    },
                    onViewOnceInfoClick: () => {
                        Oe();
                    },
                    msgIndexInAlbum: e.msgIndexInAlbum
                }), j.default.createElement("div", {
                    className: (0, o.classnamesConvertMeToStylexPlease)({
                        [k.default.sticker]: X,
                        [k.default.mediaContent]: true
                    }),
                    onClick: qe
                }, j.default.createElement(q, {
                    hasNavigationButtons: Z,
                    onNext: e.onNext,
                    onPrev: e.onPrev,
                    imgZoomed: ge
                }, j.default.createElement("div", {
                    className: He
                }, j.default.createElement(b.default, {
                    msg: t,
                    mediaData: ne
                }), Fe, j.default.createElement(d.default.Provider, {
                    value: te.groupMetadata
                }, We)))))));
            };
            var l = n(724976);
            var r = n(305989);
            var o = n(396574);
            var i = n(305521);
            var u = a(n(335540));
            var s = V(n(675886));
            var c = n(163755);
            var d = a(n(462824));
            var f = n(81644);
            var p = n(711735);
            var m = a(n(883537));
            var g = a(n(116253));
            var h = a(n(142958));
            var E = a(n(548290));
            var b = a(n(36886));
            var v = a(n(777361));
            var y = n(172259);
            var C = n(69315);
            var M = a(n(177046));
            var k = a(n(192639));
            var _ = n(114850);
            var w = n(787742);
            var S = n(44118);
            var P = n(527530);
            var O = n(95589);
            var I = n(435595);
            var T = n(180519);
            var A = n(717089);
            var N = n(392632);
            var x = a(n(625903));
            var D = a(n(330619));
            var L = a(n(25683));
            var R = n(548360);
            var j = V(n(667294));
            a(n(156720));
            var B = n(655241);
            var F = n(871210);
            var W = a(n(157558));
            var G = a(n(286481));

            function H (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var n = new WeakMap();
                return (H = function (e) {
                    if (e) {
                        return n;
                    } else {
                        return t;
                    }
                })(e);
            }

            function V (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var n = H(t);
                if (n && n.has(e)) {
                    return n.get(e);
                }
                var a = {};
                var l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e) {
                    if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                        if (o && (o.get || o.set)) {
                            Object.defineProperty(a, r, o);
                        } else {
                            a[r] = e[r];
                        }
                    }
                }
                a.default = e;
                if (n) {
                    n.set(e, a);
                }
                return a;
            }
            const U = {
                captionReadMoreBtn: {
                    position: "lhggkp7q",
                    end: "h223g3sc",
                    bottom: "jxacihee",
                    paddingTop: "ppypbuwx",
                    paddingEnd: "f9ovudaz",
                    paddingBottom: "przvwfww",
                    paddingStart: "nu34rnf1",
                    backgroundColor: "idmi9oma",
                    borderTopStartRadius: "ho9ovbg7",
                    borderTopEndRadius: "tcg15ap9",
                    borderBottomEndRadius: "c5wy1lv0",
                    borderBottomStartRadius: "bqysl6j9",
                    boxShadow: "a95fzlb5"
                },
                captionReadMoreBtnExpanded: {
                    visibility: "kojwoqec"
                },
                captionReadMoreBtnZoomed: {
                    visibility: "kqpkm0zi",
                    opacity: "lxctpz5v"
                }
            };

            function z (e) {
                if (!(e == null)) {
                    e.stopPropagation();
                }
            }

            function q (e) {
                var t;
                var n;
                var a;
                var l;
                return j.default.createElement(j.default.Fragment, null, e.hasNavigationButtons && j.default.createElement("div", {
                    className: (0, o.classnamesConvertMeToStylexPlease)(k.default.btnMediaPrev)
                }, j.default.createElement("div", {
                    onClick: e.onPrev ? null : z
                }, j.default.createElement(r.ChevronButton, {
                    type: r.ButtonType.Prev,
                    onClick: (t = e.onPrev) !== null && t !== undefined ? t : undefined,
                    onKeyDown: (n = e.onPrev) !== null && n !== undefined ? n : undefined,
                    disabled: !e.onPrev || e.imgZoomed,
                    theme: I.RoundTheme.Default
                }))), e.children, e.hasNavigationButtons && j.default.createElement("div", {
                    className: (0, o.classnamesConvertMeToStylexPlease)(k.default.btnMediaNext)
                }, j.default.createElement("div", {
                    onClick: e.onPrev ? null : z
                }, j.default.createElement(r.ChevronButton, {
                    type: r.ButtonType.Next,
                    onClick: (a = e.onNext) !== null && a !== undefined ? a : undefined,
                    onKeyDown: (l = e.onNext) !== null && l !== undefined ? l : undefined,
                    disabled: !e.onNext || e.imgZoomed,
                    theme: I.RoundTheme.Default
                }))));
            }
        },
        467201: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const {
                    msg: t
                } = e;
                const n = (0, r.getChat)(t);
                return c.default.createElement(l.DropdownItem, {
                    action: () => {
                        o.ModalManager.open(c.default.createElement(i.default, {
                            chat: n,
                            msg: t,
                            spamFlow: u.SpamFlow.MediaViewer
                        }));
                    }
                }, s.fbt._("Report", null, {
                    hk: "GPSDP"
                }));
            };
            var l = n(675085);
            var r = n(163755);
            var o = n(114850);
            var i = a(n(207511));
            var u = n(453603);
            var s = n(548360);
            var c = a(n(667294));
        },
        774396: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const {
                    msg: t
                } = e;
                return d.default.createElement(l.DropdownItem, {
                    action: () => {
                        (0, i.logRTAReportingEvent)({
                            reportToAdminInteraction: s.REPORT_TO_ADMIN_INTERACTION.CLICK_SEND_FOR_ADMIN_REVIEW,
                            groupId: (0, r.getChat)(t).id.user
                        });
                        o.ModalManager.open(d.default.createElement(u.default, {
                            msg: t
                        }));
                    }
                }, c.fbt._("Send for admin review", null, {
                    hk: "4ouSa6"
                }));
            };
            var l = n(675085);
            var r = n(163755);
            var o = n(114850);
            var i = n(554800);
            var u = a(n(286391));
            var s = n(328340);
            var c = n(548360);
            var d = a(n(667294));
        },
        266648: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const {
                    mediaMsgs: t,
                    onScroll: n,
                    activeMsg: a
                } = e;
                const r = (0, d.useRef)({});
                const o = (0, d.useRef)(null);
                const i = (0, d.useRef)(null);
                const u = (0, f.default)(a.id);
                const m = () => {
                    var e;
                    if (!((e = o.current) === null || e === undefined)) {
                        e.focusOnActive();
                    }
                };
                (0, d.useEffect)(() => {
                    var e;
                    if (((e = i.current) === null || e === undefined ? undefined : e.contains(document.activeElement)) && !a.id.equals(u)) {
                        m();
                    }
                }, [a, u]);
                const g = () => {
                    const e = new Map();
                    t.forEach(t => {
                        const n = t.id.toString();
                        e.set(n, (e => {
                            const t = r.current[e];
                            if (!t) {
                                return false;
                            }
                            const n = t.getBoundingClientRect();
                            const a = (n.left + n.right) / 2;
                            return !(a > window.innerWidth * -1 && a < window.innerWidth * 2);
                        })(n));
                    });
                    return e;
                };
                const [E, b] = (0, d.useState)(g);
                const v = (0, p.default)(() => {
                    const e = g();
                    if (!(0, l.default)(E, e)) {
                        b(e);
                    }
                }, 100);
                return d.default.createElement("div", {
                    className: s.default.thumbsContainer,
                    ref: e.setRefThumbsContainer
                }, d.default.createElement("div", {
                    ref: i,
                    className: s.default.scrollContainer,
                    dir: "ltr"
                }, d.default.createElement("div", {
                    role: "list",
                    "aria-label": c.fbt._("Media List", null, {
                        hk: "3dsEfq"
                    }),
                    tabIndex: 1,
                    onFocus: () => {
                        m();
                    },
                    onScroll: e => {
                        v();
                        n(e);
                    },
                    className: s.default.viewerThumbs,
                    ref: e.setRefThumbs
                }, d.default.createElement(h, {
                    ref: o,
                    mediaMsgs: t,
                    highlightedMsgIds: e.highlightedMsgIds,
                    activeMsg: e.activeMsg,
                    onSetActiveThumb: e.onSetActiveThumb,
                    onSelectThumb: e.onSelectThumb,
                    msgIdToPreferPreview: E
                }))));
            };
            var l = a(n(621733));
            var r = a(n(335540));
            var o = n(125922);
            var i = n(787742);
            var u = n(956113);
            var s = a(n(572028));
            var c = n(548360);
            var d = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var n = m(t);
                if (n && n.has(e)) {
                    return n.get(e);
                }
                var a = {};
                var l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e) {
                    if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = l ? Object.getOwnPropertyDescriptor(e, r) : null;
                        if (o && (o.get || o.set)) {
                            Object.defineProperty(a, r, o);
                        } else {
                            a[r] = e[r];
                        }
                    }
                }
                a.default = e;
                if (n) {
                    n.set(e, a);
                }
                return a;
            }(n(667294));
            var f = a(n(49710));
            var p = a(n(286481));

            function m (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var n = new WeakMap();
                return (m = function (e) {
                    if (e) {
                        return n;
                    } else {
                        return t;
                    }
                })(e);
            }

            function g (e, t) {
                let {
                    mediaMsgs: n,
                    highlightedMsgIds: a,
                    activeMsg: l,
                    onSetActiveThumb: c,
                    onSelectThumb: f,
                    msgIdToPreferPreview: p
                } = e;
                const m = (0, d.useRef)({});
                const g = () => {
                    const e = l.id.toString();
                    const t = m.current[e];
                    if (t) {
                        r.default.focus(t);
                    }
                };
                (0, d.useImperativeHandle)(t, () => ({
                    focusOnActive: g
                }));
                const h = a && a.size > 0 && a.has(l.id.toString());
                const E = [];
                n.forEach(e => {
                    if (e.mediaData == null) {
                        const t = l;
                        return void __LOG__(3, true)`MediaViewerFlow: attempted to render a msg without mediaData: ${JSON.stringify({
            type: e.type,
            isMedia: (0, i.getIsMedia)(e),
            startMsgType: t.type,
            startMsgIsMedia: (0, i.getIsMedia)(t)
          })}`;
                    }
                    const t = h && a && !a.has(e.id.toString()) ? "viewerFlowTransparent" : "viewerFlow";
                    E.push(d.default.createElement(o.MediaThumb, {
                        theme: t,
                        active: e === l,
                        msg: e,
                        containerRef: t => {
                            ((e, t) => {
                                m.current[t] = e;
                            })(t, e.id.toString());
                            if (e === l) {
                                c(t);
                            }
                        },
                        key: `media-${e.id.id}`,
                        onClick: () => {
                            f(e);
                        },
                        preferPreview: !!p.get(e.id.toString()),
                        showTooltip: (0, i.getIsGroupMsg)(e)
                    }));
                });
                E.push(d.default.createElement("div", {
                    className: s.default.mediaThumb,
                    key: "spinner-right"
                }, n.queryMediaAfter ? d.default.createElement(u.Spinner, {
                    stroke: 6,
                    size: 24
                }) : null));
                E.unshift(d.default.createElement("div", {
                    className: s.default.mediaThumb,
                    key: "spinner-left"
                }, n.queryMediaBefore ? d.default.createElement(u.Spinner, {
                    stroke: 6,
                    size: 24
                }) : null));
                E.push(d.default.createElement("div", {
                    className: s.default.thumbPadding,
                    key: "padding-right"
                }));
                E.unshift(d.default.createElement("div", {
                    className: s.default.thumbPadding,
                    key: "padding-left"
                }));
                return d.default.createElement(d.default.Fragment, null, E);
            }
            const h = (0, d.forwardRef)(g);
            h.displayName = "MediaThumbs";
        },
        25683: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const {
                    onOkClick: t
                } = e;
                return f.default.createElement(l.ConfirmPopup, {
                    onOK: t,
                    cancelText: d.fbt._("Learn more", null, {
                        hk: "1rcCLt"
                    }),
                    onCancel: () => {
                        (0, r.openExternalLink)((0, o.getViewOnceFaqUrl)());
                    }
                }, f.default.createElement(i.FlexColumn, null, f.default.createElement(u.default, {
                    xstyle: p.graphic,
                    align: "center"
                }, f.default.createElement(c.ViewOnceSenderNuxIcon, {
                    width: 195,
                    height: 177
                })), f.default.createElement(s.WDSTextLarge, null, e.isPhoto ? d.fbt._("This photo is set to view once", null, {
                    hk: "2H7aHc"
                }) : d.fbt._("This video is set to view once", null, {
                    hk: "1w8WFf"
                })), f.default.createElement(s.WDSTextMuted, null, e.isPhoto ? d.fbt._("For more privacy, this photo will disappear after you close it.", null, {
                    hk: "1XZPqi"
                }) : d.fbt._("For more privacy, this video will disappear after you close it.", null, {
                    hk: "3YgUHE"
                }))));
            };
            var l = n(103440);
            var r = n(753233);
            var o = n(258105);
            var i = n(690495);
            var u = a(n(469733));
            var s = n(180519);
            var c = n(555201);
            var d = n(548360);
            var f = a(n(667294));
            a(n(156720));
            const p = {
                graphic: {
                    marginBottom: "t4zgqcuo"
                }
            };
        },
        279130: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.BotDataSharingIcon = function (e) {
                var t;
                const {
                    iconXstyle: n,
                    height: a,
                    width: c,
                    viewBox: d
                } = e;
                const f = (0, r.default)(e, s);
                let p;
                if (d) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: a = 0
                    } = d;
                    p = [e, t, n, a].join(" ");
                }
                let m = 24;
                let g = 24;
                if (!(a == null && c == null)) {
                    m = a;
                    g = c;
                }
                return u.default.createElement(o.BaseSvgSpan, (0, l.default)({
                    name: "bot-data-sharing"
                }, f), u.default.createElement("svg", {
                    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 24",
                    height: m,
                    width: g,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(n),
                    fill: "none"
                }, u.default.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M5.081 12.9c.44 2.98 2.87 5.41 5.86 5.84 2.22.33 4.26-.38 5.73-1.72.5-.45 1.22-.56 1.8-.22.87.5 1 1.71.26 2.39-2.09 1.92-4.99 2.95-8.13 2.53-4.38-.59-7.92-4.13-8.51-8.51a10.02 10.02 0 0 1 6.98-10.96c.96-.29 1.93.44 1.93 1.44v.02c0 .67-.45 1.24-1.09 1.43a6.996 6.996 0 0 0-4.83 7.76Zm7.92-9.19v-.02c0-1 .97-1.73 1.92-1.44 4.1 1.25 7.08 5.07 7.08 9.57 0 .76-.09 1.51-.26 2.23-.23.96-1.35 1.41-2.21.91l-.01-.01c-.57-.34-.83-1-.69-1.64.11-.48.17-.97.17-1.49 0-3.14-2.07-5.79-4.92-6.68-.63-.2-1.08-.76-1.08-1.43Z",
                    fill: "#8696A0"
                })));
            };
            var l = a(n(967154));
            var r = a(n(506479));
            var o = n(220584);
            var i = a(n(156720));
            var u = a(n(667294));
            const s = ["iconXstyle", "height", "width", "viewBox"];
        },
        765273: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.BubbleIcon = function (e) {
                var t;
                const {
                    iconXstyle: n,
                    height: a,
                    width: c,
                    viewBox: d
                } = e;
                const f = (0, r.default)(e, s);
                let p;
                if (d) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: a = 0
                    } = d;
                    p = [e, t, n, a].join(" ");
                }
                let m = 24;
                let g = 24;
                if (!(a == null && c == null)) {
                    m = a;
                    g = c;
                }
                return u.default.createElement(o.BaseSvgSpan, (0, l.default)({
                    name: "bubble"
                }, f), u.default.createElement("svg", {
                    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 24",
                    height: m,
                    width: g,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(n),
                    version: "1.1",
                    x: "0px",
                    y: "0px",
                    enableBackground: "new 0 0 24 24"
                }, u.default.createElement("path", {
                    fill: "currentColor",
                    d: "M19.2,4H4.8C3.8,4,3,4.8,3,5.8V22l3.6-3.6h12.6c1,0,1.8-0.8,1.8-1.8V5.8C21,4.8,20.2,4,19.2,4z M19.2,16.6 H6.6l-1.8,1.8V5.8h14.4V16.6z"
                })));
            };
            var l = a(n(967154));
            var r = a(n(506479));
            var o = n(220584);
            var i = a(n(156720));
            var u = a(n(667294));
            const s = ["iconXstyle", "height", "width", "viewBox"];
        },
        757567: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ChatInfoVideoIcon = function (e) {
                var t;
                const {
                    iconXstyle: n,
                    height: a,
                    width: c,
                    viewBox: d
                } = e;
                const f = (0, r.default)(e, s);
                let p;
                if (d) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: a = 0
                    } = d;
                    p = [e, t, n, a].join(" ");
                }
                let m = 13;
                let g = 21;
                if (!(a == null && c == null)) {
                    m = a;
                    g = c;
                }
                return u.default.createElement(o.BaseSvgSpan, (0, l.default)({
                    name: "chat-info-video"
                }, f), u.default.createElement("svg", {
                    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 21 13",
                    height: m,
                    width: g,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(n),
                    fill: "none"
                }, u.default.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M13.17.5c1.11 0 2.009.9 2.009 2.009v8.482c0 1.11-.9 2.009-2.01 2.009H2.01C.899 13 0 12.1 0 10.991V2.51C0 1.399.9.5 2.009.5h11.16Zm7.17 1.746a.893.893 0 0 1 .196.558v7.892a.893.893 0 0 1-1.45.697l-3.015-2.41V4.517l3.014-2.411a.893.893 0 0 1 1.255.14Z",
                    fill: "#00A884"
                })));
            };
            var l = a(n(967154));
            var r = a(n(506479));
            var o = n(220584);
            var i = a(n(156720));
            var u = a(n(667294));
            const s = ["iconXstyle", "height", "width", "viewBox"];
        },
        931663: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DoubleChevronIcon = function (e) {
                var t;
                const {
                    iconXstyle: n,
                    height: a,
                    width: c,
                    viewBox: d
                } = e;
                const f = (0, r.default)(e, s);
                let p;
                if (d) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: a = 0
                    } = d;
                    p = [e, t, n, a].join(" ");
                }
                let m = 66;
                let g = 66;
                if (!(a == null && c == null)) {
                    m = a;
                    g = c;
                }
                return u.default.createElement(o.BaseSvgSpan, (0, l.default)({
                    name: "double-chevron"
                }, f), u.default.createElement("svg", {
                    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 66 66",
                    height: m,
                    width: g,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(n),
                    fill: "none"
                }, u.default.createElement("path", {
                    d: "M52.1731 31.43L41.2382 16.1374C40.3179 14.8382 38.8292 14.0532 37.2323 14.0532C33.1994 14.0532 30.8716 18.6004 33.1994 21.8755L41.1299 32.9999L33.1994 44.1243C30.8446 47.3994 33.1994 51.9466 37.2323 51.9466C38.8292 51.9466 40.345 51.1616 41.2652 49.8624L52.2002 34.5698C52.8498 33.6224 52.8498 32.3774 52.1731 31.43Z",
                    fill: "currentColor"
                }), u.default.createElement("path", {
                    d: "M33.2264 31.43L22.3186 16.1374C21.3712 14.8382 19.8826 14.0532 18.2856 14.0532C14.2527 14.0532 11.8979 18.6004 14.2527 21.8755L22.1832 32.9999L14.2527 44.1243C11.8979 47.3994 14.2527 51.9466 18.2856 51.9466C19.8826 51.9466 21.3983 51.1616 22.3186 49.8624L33.2535 34.5698C33.9031 33.6224 33.9031 32.3774 33.2264 31.43Z",
                    fill: "currentColor"
                })));
            };
            var l = a(n(967154));
            var r = a(n(506479));
            var o = n(220584);
            var i = a(n(156720));
            var u = a(n(667294));
            const s = ["iconXstyle", "height", "width", "viewBox"];
        },
        660476: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ForwardFilledIcon = function (e) {
                var t;
                const {
                    iconXstyle: n,
                    height: a,
                    width: c,
                    viewBox: d
                } = e;
                const f = (0, r.default)(e, s);
                let p;
                if (d) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: a = 0
                    } = d;
                    p = [e, t, n, a].join(" ");
                }
                let m = 16;
                let g = 21;
                if (!(a == null && c == null)) {
                    m = a;
                    g = c;
                }
                return u.default.createElement(o.BaseSvgSpan, (0, l.default)({
                    name: "forward-filled"
                }, f), u.default.createElement("svg", {
                    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 21 16",
                    height: m,
                    width: g,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(n),
                    fill: "none"
                }, u.default.createElement("path", {
                    d: "M12.778 1.31318C12.778 0.590175 13.651 0.228175 14.161 0.739175L20.206 6.79017C20.2813 6.8654 20.341 6.95472 20.3817 7.05304C20.4225 7.15136 20.4435 7.25675 20.4435 7.36317C20.4435 7.4696 20.4225 7.57499 20.3817 7.67331C20.341 7.77163 20.2813 7.86095 20.206 7.93617L14.161 13.9872C14.0476 14.1006 13.9032 14.1779 13.7459 14.2091C13.5886 14.2404 13.4256 14.2243 13.2775 14.1628C13.1294 14.1013 13.0028 13.9973 12.9139 13.8638C12.825 13.7304 12.7777 13.5735 12.778 13.4132V10.6812C7.68197 10.6812 3.94897 12.1362 1.17397 15.2922C0.927967 15.5712 0.471967 15.3342 0.571967 14.9762C2.00197 9.80317 5.49697 4.97218 12.778 3.93118V1.31318Z",
                    fill: "currentColor"
                })));
            };
            var l = a(n(967154));
            var r = a(n(506479));
            var o = n(220584);
            var i = a(n(156720));
            var u = a(n(667294));
            const s = ["iconXstyle", "height", "width", "viewBox"];
        },
        537036: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.KeepInChatMediaIcon = function (e) {
                var t;
                const {
                    iconXstyle: n,
                    height: a,
                    width: c,
                    viewBox: d
                } = e;
                const f = (0, r.default)(e, s);
                let p;
                if (d) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: a = 0
                    } = d;
                    p = [e, t, n, a].join(" ");
                }
                let m = 24;
                let g = 24;
                if (!(a == null && c == null)) {
                    m = a;
                    g = c;
                }
                return u.default.createElement(o.BaseSvgSpan, (0, l.default)({
                    name: "keep-in-chat-media"
                }, f), u.default.createElement("svg", {
                    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 24",
                    height: m,
                    width: g,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(n),
                    fill: "none"
                }, u.default.createElement("path", {
                    d: "m17 3h-10c-1.1 0-1.99.9-1.99 2l-.01 16 7-3 7 3v-16c0-1.1-.9-2-2-2z",
                    fill: "currentColor"
                })));
            };
            var l = a(n(967154));
            var r = a(n(506479));
            var o = n(220584);
            var i = a(n(156720));
            var u = a(n(667294));
            const s = ["iconXstyle", "height", "width", "viewBox"];
        },
        764936: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ReactionsMediaIcon = function (e) {
                var t;
                const {
                    iconXstyle: n,
                    height: a,
                    width: c,
                    viewBox: d
                } = e;
                const f = (0, r.default)(e, s);
                let p;
                if (d) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: a = 0
                    } = d;
                    p = [e, t, n, a].join(" ");
                }
                let m = 15;
                let g = 15;
                if (!(a == null && c == null)) {
                    m = a;
                    g = c;
                }
                return u.default.createElement(o.BaseSvgSpan, (0, l.default)({
                    name: "reactions-media"
                }, f), u.default.createElement("svg", {
                    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 15 15",
                    height: m,
                    width: g,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(n),
                    fill: "none"
                }, u.default.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M0 7.5C0 11.6305 3.36946 15 7.5 15C11.6527 15 15 11.6305 15 7.5C15 3.36946 11.6305 0 7.5 0C3.36946 0 0 3.36946 0 7.5ZM10.995 8.69333C11.1128 8.67863 11.2219 8.66503 11.3211 8.65309C11.61 8.63028 11.8076 8.91918 11.6784 9.13965C10.8573 10.6374 9.29116 11.793 7.50455 11.793C5.71794 11.793 4.15181 10.6602 3.33072 9.16246C3.18628 8.91918 3.37634 8.63028 3.66524 8.65309C3.79123 8.66749 3.93521 8.68511 4.09426 8.70457C4.94292 8.80842 6.22074 8.96479 7.48174 8.96479C8.81855 8.96479 10.1378 8.80025 10.995 8.69333ZM5.41405 7.37207C6.05761 7.37207 6.60923 6.72851 6.60923 6.02978C6.60923 5.30348 6.05761 4.6875 5.41405 4.6875C4.77048 4.6875 4.21886 5.33106 4.21886 6.02978C4.20967 6.75609 4.77048 7.37207 5.41405 7.37207ZM10.7807 6.05619C10.7807 6.74114 10.24 7.37201 9.60912 7.37201C8.97825 7.37201 8.4375 6.76818 8.4375 6.05619C8.4375 5.37124 8.97825 4.74037 9.60912 4.74037C10.24 4.74037 10.7807 5.34421 10.7807 6.05619Z",
                    fill: "currentColor"
                })));
            };
            var l = a(n(967154));
            var r = a(n(506479));
            var o = n(220584);
            var i = a(n(156720));
            var u = a(n(667294));
            const s = ["iconXstyle", "height", "width", "viewBox"];
        },
        217864: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SagaHelpIcon = function (e) {
                var t;
                const {
                    iconXstyle: n,
                    height: a,
                    width: c,
                    viewBox: d
                } = e;
                const f = (0, r.default)(e, s);
                let p;
                if (d) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: a = 0
                    } = d;
                    p = [e, t, n, a].join(" ");
                }
                let m = 24;
                let g = 24;
                if (!(a == null && c == null)) {
                    m = a;
                    g = c;
                }
                return u.default.createElement(o.BaseSvgSpan, (0, l.default)({
                    name: "saga-help"
                }, f), u.default.createElement("svg", {
                    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 24",
                    height: m,
                    width: g,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(n),
                    fill: "none"
                }, u.default.createElement("path", {
                    d: "M10.9501 18C11.3001 18 11.596 17.8792 11.8376 17.6375C12.0793 17.3958 12.2001 17.1 12.2001 16.75C12.2001 16.4 12.0793 16.1042 11.8376 15.8625C11.596 15.6208 11.3001 15.5 10.9501 15.5C10.6001 15.5 10.3043 15.6208 10.0626 15.8625C9.82097 16.1042 9.70014 16.4 9.70014 16.75C9.70014 17.1 9.82097 17.3958 10.0626 17.6375C10.3043 17.8792 10.6001 18 10.9501 18ZM11.1001 7.7C11.5168 7.7 11.8793 7.83333 12.1876 8.1C12.496 8.36667 12.6501 8.7 12.6501 9.1C12.6501 9.46667 12.5376 9.79167 12.3126 10.075C12.0876 10.3583 11.8335 10.625 11.5501 10.875C11.1668 11.2083 10.8293 11.575 10.5376 11.975C10.246 12.375 10.1001 12.825 10.1001 13.325C10.1001 13.5583 10.1876 13.7542 10.3626 13.9125C10.5376 14.0708 10.7418 14.15 10.9751 14.15C11.2251 14.15 11.4376 14.0667 11.6126 13.9C11.7876 13.7333 11.9001 13.525 11.9501 13.275C12.0168 12.925 12.1668 12.6125 12.4001 12.3375C12.6335 12.0625 12.8835 11.8 13.1501 11.55C13.5335 11.1833 13.8626 10.7833 14.1376 10.35C14.4126 9.91667 14.5501 9.43333 14.5501 8.9C14.5501 8.05 14.2043 7.35417 13.5126 6.8125C12.821 6.27083 12.0168 6 11.1001 6C10.4668 6 9.86264 6.13333 9.28764 6.4C8.71264 6.66667 8.27514 7.075 7.97514 7.625C7.85847 7.825 7.82097 8.0375 7.86264 8.2625C7.90431 8.4875 8.01681 8.65833 8.20014 8.775C8.43347 8.90833 8.67514 8.95 8.92514 8.9C9.17514 8.85 9.38347 8.70833 9.55014 8.475C9.73347 8.225 9.96264 8.03333 10.2376 7.9C10.5126 7.76667 10.8001 7.7 11.1001 7.7Z",
                    fill: "currentColor"
                }), u.default.createElement("path", {
                    d: "M15 3.93552C13.795 3.33671 12.4368 3 11 3C6.02944 3 2 7.02944 2 12C2 16.9706 6.02944 21 11 21C15.2832 21 18.8675 18.008 19.777 14",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    stroke: "currentColor"
                }), u.default.createElement("path", {
                    d: "M18.7259 3.85006C18.9265 3.38331 19.5899 3.38331 19.7904 3.85006L20.5568 5.63334C20.6154 5.7697 20.7242 5.87828 20.861 5.93673L22.649 6.70102C23.117 6.90103 23.117 7.56268 22.649 7.76269L20.861 8.52698C20.7242 8.58543 20.6154 8.69401 20.5568 8.83037L19.7749 10.65C19.5767 11.1112 18.9236 11.1183 18.7154 10.6615L17.8755 8.81882C17.8166 8.6895 17.7119 8.58635 17.5816 8.52917L15.8459 7.76749C15.3823 7.56407 15.3854 6.90698 15.851 6.70795L17.6554 5.93673C17.7921 5.87828 17.901 5.7697 17.9596 5.63334L18.7259 3.85006Z",
                    fill: "currentColor"
                })));
            };
            var l = a(n(967154));
            var r = a(n(506479));
            var o = n(220584);
            var i = a(n(156720));
            var u = a(n(667294));
            const s = ["iconXstyle", "height", "width", "viewBox"];
        },
        373732: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SagaMessageIcon = function (e) {
                var t;
                const {
                    iconXstyle: n,
                    height: a,
                    width: c,
                    viewBox: d
                } = e;
                const f = (0, r.default)(e, s);
                let p;
                if (d) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: a = 0
                    } = d;
                    p = [e, t, n, a].join(" ");
                }
                let m = 24;
                let g = 24;
                if (!(a == null && c == null)) {
                    m = a;
                    g = c;
                }
                return u.default.createElement(o.BaseSvgSpan, (0, l.default)({
                    name: "saga-message"
                }, f), u.default.createElement("svg", {
                    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 24",
                    height: m,
                    width: g,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(n),
                    fill: "none"
                }, u.default.createElement("path", {
                    d: "M21.9969 12V17.3333C21.9969 18.8061 20.803 20 19.3303 20H5.6636C4.19084 20 2.99693 18.8061 2.99693 17.3333V8.84848L0.941246 5.52617C0.529037 4.85997 1.00821 4 1.79162 4H13.9968C14.5491 4 14.9968 4.44772 14.9968 5C14.9968 5.55228 14.5491 6 13.9968 6H3.58632L4.99693 8.27977V17.3333C4.99693 17.7015 5.2954 18 5.6636 18H19.3303C19.6985 18 19.9969 17.7015 19.9969 17.3333V12.0158L19.9968 12C19.9968 11.4477 20.4445 11 20.9968 11C21.5491 11 21.9969 11.4477 21.9969 12Z",
                    fill: "currentColor"
                }), u.default.createElement("path", {
                    d: "M18.7872 4.35006C18.5867 3.88331 17.9233 3.88331 17.7227 4.35006L16.9564 6.13334C16.8978 6.2697 16.7889 6.37828 16.6522 6.43673L14.8478 7.20795C14.3823 7.40698 14.3791 8.06407 14.8427 8.26749L16.5784 9.02917C16.7087 9.08635 16.8134 9.1895 16.8723 9.31882L17.7122 11.1615C17.9204 11.6183 18.5735 11.6112 18.7717 11.15L19.5536 9.33037C19.6122 9.19401 19.721 9.08543 19.8578 9.02698L21.6458 8.26269C22.1138 8.06268 22.1138 7.40103 21.6458 7.20102L19.8578 6.43673C19.721 6.37828 19.6122 6.2697 19.5536 6.13334L18.7872 4.35006Z",
                    fill: "currentColor"
                })));
            };
            var l = a(n(967154));
            var r = a(n(506479));
            var o = n(220584);
            var i = a(n(156720));
            var u = a(n(667294));
            const s = ["iconXstyle", "height", "width", "viewBox"];
        },
        706775: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.UndoKeepInChatMediaIcon = function (e) {
                var t;
                const {
                    iconXstyle: n,
                    height: a,
                    width: c,
                    viewBox: d
                } = e;
                const f = (0, r.default)(e, s);
                let p;
                if (d) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: a = 0
                    } = d;
                    p = [e, t, n, a].join(" ");
                }
                let m = 24;
                let g = 25;
                if (!(a == null && c == null)) {
                    m = a;
                    g = c;
                }
                return u.default.createElement(o.BaseSvgSpan, (0, l.default)({
                    name: "undo-keep-in-chat-media"
                }, f), u.default.createElement("svg", {
                    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 25 24",
                    height: m,
                    width: g,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(n),
                    fill: "none"
                }, u.default.createElement("path", {
                    clipRule: "evenodd",
                    d: "m18 3h-10.00003c-1.1 0-1.99.9-1.99 2l-.0005.79529 13.99053 8.04121v-8.8365c0-1.1-.9-2-2-2zm2 14.9115 3.8749 2.2272.9967-1.734-22.97977-13.20787-.996627 1.73399 5.111727 2.93802-.00696 11.13116 7.00003-3 7 3z",
                    fill: "currentColor",
                    fillRule: "evenodd"
                })));
            };
            var l = a(n(967154));
            var r = a(n(506479));
            var o = n(220584);
            var i = a(n(156720));
            var u = a(n(667294));
            const s = ["iconXstyle", "height", "width", "viewBox"];
        },
        135114: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.UnpinnedIcon = function (e) {
                var t;
                const {
                    iconXstyle: n,
                    height: a,
                    width: c,
                    viewBox: d
                } = e;
                const f = (0, r.default)(e, s);
                let p;
                if (d) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: a = 0
                    } = d;
                    p = [e, t, n, a].join(" ");
                }
                let m = 24;
                let g = 24;
                if (!(a == null && c == null)) {
                    m = a;
                    g = c;
                }
                return u.default.createElement(o.BaseSvgSpan, (0, l.default)({
                    name: "unpinned"
                }, f), u.default.createElement("svg", {
                    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 24",
                    height: m,
                    width: g,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(n),
                    fill: "none"
                }, u.default.createElement("path", {
                    d: "M15.9984 10.6491V4.28906H16.9984V2.28906H7.64844L15.9984 10.6491Z",
                    fill: "currentColor"
                }), u.default.createElement("path", {
                    d: "M16 11.7291V4.28906H17V2.28906H7V2.71906L16 11.7291Z",
                    fill: "currentColor"
                }), u.default.createElement("path", {
                    d: "M21.21 19.7395L4.23 2.73945C4.03 2.53945 3.79 2.43945 3.52 2.43945C3.25 2.43945 3.01 2.53945 2.81 2.73945C2.61 2.93945 2.51 3.17945 2.5 3.44945C2.5 3.71945 2.59 3.95945 2.79 4.15945L8.01 9.36945V11.2795L6.00999 13.2795V15.2795H11.01V21.2795L12.01 22.2795L13.01 21.2795V15.2795H13.93L19.79 21.1295C19.99 21.3295 20.23 21.4295 20.5 21.4295C20.77 21.4295 21.01 21.3295 21.21 21.1295C21.41 20.9295 21.51 20.6995 21.51 20.4295C21.51 20.1595 21.41 19.9295 21.21 19.7295V19.7395Z",
                    fill: "currentColor"
                }), u.default.createElement("path", {
                    d: "M21.21 19.7395L4.23 2.73945C4.03 2.53945 3.79 2.43945 3.52 2.43945C3.25 2.43945 3.01 2.53945 2.81 2.73945C2.61 2.93945 2.51 3.17945 2.5 3.44945C2.5 3.71945 2.59 3.95945 2.79 4.15945L8.01 9.36945V11.2795L6.00999 13.2795V15.2795H11.01V21.2795L12.01 22.2795L13.01 21.2795V15.2795H13.93L19.79 21.1295C19.99 21.3295 20.23 21.4295 20.5 21.4295C20.77 21.4295 21.01 21.3295 21.21 21.1295C21.41 20.9295 21.51 20.6995 21.51 20.4295C21.51 20.1595 21.41 19.9295 21.21 19.7295V19.7395Z",
                    fill: "currentColor"
                })));
            };
            var l = a(n(967154));
            var r = a(n(506479));
            var o = n(220584);
            var i = a(n(156720));
            var u = a(n(667294));
            const s = ["iconXstyle", "height", "width", "viewBox"];
        },
        626261: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.VoiceCallFilledIcon = function (e) {
                var t;
                const {
                    iconXstyle: n,
                    height: a,
                    width: c,
                    viewBox: d
                } = e;
                const f = (0, r.default)(e, s);
                let p;
                if (d) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: a = 0
                    } = d;
                    p = [e, t, n, a].join(" ");
                }
                let m = 22;
                let g = 22;
                if (!(a == null && c == null)) {
                    m = a;
                    g = c;
                }
                return u.default.createElement(o.BaseSvgSpan, (0, l.default)({
                    name: "voice-call-filled"
                }, f), u.default.createElement("svg", {
                    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 22 22",
                    height: m,
                    width: g,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(n),
                    fill: "none"
                }, u.default.createElement("path", {
                    d: "M19.685 14.3869L16.7217 14.0486C16.0101 13.9669 15.3101 14.2119 14.8084 14.7136L12.6617 16.8602C9.36005 15.1802 6.65338 12.4852 4.97338 9.17188L7.13172 7.01355C7.63338 6.51188 7.87838 5.81188 7.79672 5.10022L7.45838 2.16022C7.31838 0.981882 6.32672 0.0952148 5.13672 0.0952148H3.11838C1.80005 0.0952148 0.703381 1.19188 0.785047 2.51022C1.40338 12.4736 9.37172 20.4302 19.3234 21.0486C20.6417 21.1302 21.7384 20.0336 21.7384 18.7152V16.6969C21.75 15.5186 20.8634 14.5269 19.685 14.3869Z",
                    fill: "currentColor"
                })));
            };
            var l = a(n(967154));
            var r = a(n(506479));
            var o = n(220584);
            var i = a(n(156720));
            var u = a(n(667294));
            const s = ["iconXstyle", "height", "width", "viewBox"];
        },
        663945: (e, t, n) => {
            "use strict";

            n.r(t);
            n.d(t, {
                default: () => a
            });
            const a = {
                msg: "_7Upvn",
                text: "_3Q6VG",
                bubble: "_3cupO",
                author: "LldYr",
                hasSuspiciousLinks: "_1BEFs",
                hasAuthor: "_28v58",
                suspiciousLabel: "_1kBNA"
            };
        },
        936027: (e, t, n) => {
            "use strict";

            n.r(t);
            n.d(t, {
                default: () => a
            });
            const a = {
                mediaViewerPlaceholder: "_2qUle",
                imageAudio: "_1leJw",
                mediaViewerAudio: "_17zHt"
            };
        },
        572028: (e, t, n) => {
            "use strict";

            n.r(t);
            n.d(t, {
                default: () => a
            });
            const a = {
                thumbsContainer: "_3GUJh",
                scrollContainer: "_27n9o",
                viewerThumbs: "_1P0Vh",
                mediaThumb: "_2nI8K",
                thumbPadding: "_1s0h2"
            };
        }
    }
]);
//# sourceMappingURL=https://web.whatsapp.com/lazy_loaded_high_priority_components.c80b81c46d01946aa1ab.js.map