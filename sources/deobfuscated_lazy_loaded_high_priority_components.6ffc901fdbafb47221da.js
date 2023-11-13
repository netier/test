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
                for (const [a, i] of e) {
                    n = t.get(a);
                    if (n !== i || n === undefined && !t.has(a)) {
                        return false;
                    }
                }
                return true;
            };
        },
        600145: (e, t, n) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.GroupProfilePictureWamEvent = undefined;
            var a = n(901032);
            var i = n(130756);
            const {
                BOOLEAN: o,
                STRING: l
            } = a.TYPES;
            const s = (0, a.defineEvents)({
                GroupProfilePicture: [3652, {
                        groupCreationDs: [1, l],
                        groupProfileAction: [7, i.GROUP_PROFILE_ACTION_TYPE],
                        hasProfilePicture: [3, o],
                        isAdmin: [4, o],
                        preciseGroupSizeBucket: [5, i.PRECISE_SIZE_BUCKET],
                        profilePictureType: [6, i.PROFILE_PICTURE_TYPE]
                    },
                    [1, 1, 1], "regular"
                ]
            });
            t.GroupProfilePictureWamEvent = s;
        },
        894629: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const t = (0, h.useModelValues)(e.chat, ["id", "isNewsletter", "newsletterMetadata"]);
                const n = (0, h.useOptionalModelValues)(t.newsletterMetadata, ["description", "creationTime", "membershipType"]);
                const a = (0, p.default)(n, ["change:description"], () => (n == null ? undefined : n.description) || "");
                const o = (0, f.useCallback)(function () {
                    var e = (0, i.default)(function* () {
                        let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
                        yield g(t, e);
                    });
                    return function () {
                        return e.apply(this, arguments);
                    };
                }(), [t]);
                if (n == null) {
                    return null;
                }
                const r = u.fbt._("Add channel description", null, {
                    hk: "4cBfrw"
                });
                const {
                    creationTime: d
                } = n;
                const x = d != null ? s.Clock.createdStr(n.creationTime) : null;
                return (0, m.jsx)(l.default, {
                    description: a,
                    bulletPointsEnabled: false,
                    chat: e.chat,
                    showFullDescription: false,
                    editRestrictionText: u.fbt._("Only admins can edit this channel's info", null, {
                        hk: "Z6ACg"
                    }),
                    testid: "newsletter-info-drawer-description-title-input",
                    containerTestId: "newsletter-info-drawer-description-container",
                    emptyValuePlaceholder: r,
                    creationString: x,
                    canSetDescription: (0, c.iAmOwner)(n),
                    setDescriptionAction: o
                });
            };
            var i = a(n(348926));
            var o = n(328620);
            var l = a(n(711367));
            var s = n(63014);
            var r = n(172365);
            var c = n(751460);
            var d = n(390737);
            var u = n(548360);
            var f = n(667294);
            var p = a(n(524578));
            var h = n(655241);
            var m = n(785893);

            function g (e) {
                var t;
                let n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
                let a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0, o.genId)();
                const i = (0, r.editNewsletterMetadataAction)(e, {
                    editDescription: true
                }, {
                    description: n
                });
                const l = (t = e.newsletterMetadata) === null || t === undefined ? undefined : t.description;
                const s = new o.ActionType(u.fbt._("Changing channel description", null, {
                    hk: "3QNpiW"
                }));
                const c = i.then(() => new o.ActionType(u.fbt._("Channel description changed", null, {
                    hk: "ATEd7"
                }), {
                    actionText: u.fbt._("Undo", null, {
                        hk: "3r3mP7"
                    }),
                    actionHandler: () => g(e, l, a)
                })).catch(() => {
                    __LOG__(3)`channel:handleEditDescription dropped`;
                    return new o.ActionType(u.fbt._("Channel description changed failed", null, {
                        hk: "1We4xJ"
                    }), {
                        actionText: u.fbt._("Try again", null, {
                            hk: "3qJDe7"
                        }),
                        actionHandler: () => g(e, n, a)
                    });
                });
                d.ToastManager.open((0, m.jsx)(o.ActionToast, {
                    id: a,
                    initialAction: s,
                    pendingAction: c
                }));
                return i;
            }
        },
        751046: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = undefined;
            var i = n(36409);
            var o = n(464659);
            var l = n(949359);
            var s = n(136858);
            var r = a(n(908081));
            var c = a(n(324093));
            var d = n(626194);
            var u = n(114850);
            var f = a(n(832897));
            var p = a(n(894629));
            var h = a(n(683023));
            var m = a(n(664531));
            var g = n(751460);
            var x = n(620973);
            var v = n(349372);
            var b = n(617058);
            var C = a(n(634152));
            var M = n(163139);
            var j = n(220584);
            var _ = n(382117);
            var y = n(676345);
            var S = n(130756);
            var k = n(818674);
            var P = n(548360);
            var w = n(667294);
            var T = a(n(156720));
            var E = a(n(524578));
            var I = a(n(637660));
            var A = a(n(321201));
            var N = n(785893);
            const R = {
                flexShrink: "oq44ahr5",
                flexGrow: "tvf2evcx",
                flexBasis: "lb5m6g5c",
                paddingBottom: "s9fl9ege"
            };

            function O (e, t) {
                const {
                    chat: n,
                    newsletterMetadata: a,
                    onClose: O,
                    onDeleteNewsletter: D
                } = e;
                const L = (0, A.default)();
                const B = (0, E.default)(a, ["change:suspended"], () => (a == null ? undefined : a.suspended) === true);
                const G = (0, I.default)(() => new _.UiActionWamEvent({
                    uiActionType: S.UI_ACTION_TYPE.CHANNEL_INFO_OPEN,
                    uiActionPreloaded: true
                }));
                const F = B ? null : (0, N.jsx)(p.default, {
                    chat: n
                });
                const V = n.mute.canMute() && !B ? (0, N.jsx)(o.ChatInfoDrawerSection, {
                    xstyle: y.uiMargin.top10,
                    children: (0, N.jsx)(f.default, {
                        chat: n,
                        mute: n.mute,
                        settings: C.default
                    })
                }) : null;
                const H = (0, g.iAmOwner)(a) || (0, g.iAmAdmin)(a);
                const U = (0, w.useCallback)(() => {
                    u.ModalManager.open((0, N.jsx)(x.NewsletterPhoneNumberNux, {}));
                }, []);
                const W = (0, w.useCallback)(() => {
                    if (H) {
                        u.ModalManager.open((0, N.jsx)(b.NewsletterPublicChannelPrivacyNux, {}));
                    } else {
                        U();
                    }
                }, [H, U]);
                const Y = (0, N.jsxs)(o.ChatInfoDrawerSection, {
                    xstyle: y.uiMargin.top10,
                    children: [(0, N.jsx)(v.NewsletterPrivacyRow, {
                        onClick: W,
                        title: P.fbt._("Public channel", null, {
                            hk: "1a60HF"
                        }),
                        text: H ? P.fbt._("What you share is visible to anyone, but your phone number isn't. Click to learn more.", null, {
                            hk: "4auNa3"
                        }) : P.fbt._("Anyone can find this channel and see what's been shared.", null, {
                            hk: "1T1Xsg"
                        }),
                        icon: (0, N.jsx)(i.BusinessWebsiteIcon, {
                            color: j.SvgColorProp.SECONDARY,
                            height: 20
                        })
                    }), !H && (0, N.jsx)(v.NewsletterPrivacyRow, {
                        onClick: U,
                        title: P.fbt._("Profile privacy", null, {
                            hk: "fHnmE"
                        }),
                        text: (0, l.getNewsletterProfilePrivacyText)(),
                        icon: (0, N.jsx)(s.DialpadIcon, {
                            color: j.SvgColorProp.SECONDARY,
                            height: 20
                        })
                    })]
                });
                const z = (0, N.jsx)(m.default, {
                    xstyle: y.uiMargin.top10,
                    chat: e.chat,
                    onDeleteNewsletter: D
                });
                (0, w.useEffect)(() => {
                    const e = G.current;
                    if (e) {
                        e.markUiActionT();
                        e.commit();
                        G.current = undefined;
                    }
                    (0, k.logUiActionShadowPrivateStatsTestEvents)();
                }, []);
                return (0, N.jsxs)(r.default, {
                    ref: t,
                    theme: "striped",
                    testid: "chat-info-drawer",
                    children: [(0, N.jsx)(d.DrawerHeader, {
                        title: P.fbt._("Channel info", null, {
                            hk: "2MU3nu"
                        }),
                        type: d.DRAWER_HEADER_TYPE.SMALL,
                        rtlFixIfOnDarwin: true,
                        onCancel: () => {
                            if (O) {
                                O();
                            } else if (!(L == null)) {
                                L.requestDismiss();
                            }
                        },
                        testid: "newsletter-info-header"
                    }), (0, N.jsx)(c.default, {
                        children: (0, N.jsxs)("section", {
                            className: (0, T.default)(R),
                            "data-testid": "group-info-drawer-body",
                            children: [(0, N.jsx)(h.default, {
                                chat: (0, M.unproxy)(n)
                            }), F, V, Y, z]
                        })
                    })]
                }, "newsletter-info-modal");
            }
            var D = (0, w.forwardRef)(O);
            t.default = D;
        },
        501624: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const {
                    chat: t,
                    xstyle: n,
                    readOnly: a
                } = e;
                const [i, o] = (0, d.useState)(false);
                const r = (0, f.useModelValues)(t.contact, ["id", "profilePicThumb"]);
                const c = (0, f.useModelValues)(t.contact.profilePicThumb, ["imgFull"]);
                const m = (0, d.useCallback)((e, n) => {
                    o(true);
                    h(t, n).finally(() => {
                        o(false);
                    });
                }, [t]);
                return (0, p.jsx)("div", {
                    className: (0, u.default)(n),
                    children: (0, p.jsx)(s.PhotoPickerLoadable, {
                        type: l.PhotoPickerType.NEWSLETTER,
                        id: r.id,
                        attachToChat: true,
                        startImage: c.imgFull,
                        readOnly: a,
                        onImageSet: m,
                        pending: i
                    })
                });
            };
            var i = n(328620);
            var o = n(172365);
            var l = n(588792);
            var s = n(511696);
            var r = n(390737);
            var c = n(548360);
            var d = n(667294);
            var u = a(n(156720));
            var f = n(655241);
            var p = n(785893);

            function h (e, t) {
                let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0, i.genId)();
                const a = (0, o.editNewsletterMetadataAction)(e, {
                    editPicture: true
                }, {
                    picture: t != null ? t : null
                });
                const l = new i.ActionType(t != null ? c.fbt._("Setting channel icon", null, {
                    hk: "3qGzgv"
                }) : c.fbt._("Removing channel icon", null, {
                    hk: "3KXsMC"
                }));
                const s = a.then(() => new i.ActionType(t != null ? c.fbt._("Channel icon set", null, {
                    hk: "M0iEh"
                }) : c.fbt._("Channel icon removed", null, {
                    hk: "31cA0l"
                }))).catch(() => {
                    __LOG__(3)`newsletter:handleEditPhoto dropped`;
                    return new i.ActionType(t != null ? c.fbt._("Couldn't set channel icon", null, {
                        hk: "GsVmy"
                    }) : c.fbt._("Couldn't remove channel icon", null, {
                        hk: "2pGDJs"
                    }), {
                        actionText: c.fbt._("Try again", null, {
                            hk: "3qJDe7"
                        }),
                        actionHandler: () => h(e, t, n)
                    });
                });
                r.ToastManager.open((0, p.jsx)(i.ActionToast, {
                    id: n,
                    initialAction: l,
                    pendingAction: s
                }));
                return a;
            }
        },
        988149: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                let {
                    chat: t
                } = e;
                const n = (0, v.useOptionalModelValues)(t.newsletterMetadata, ["name", "membershipType", "isSuspendedOrTerminated"]);
                const a = (0, g.useCallback)(function () {
                    var e = (0, i.default)(function* (e) {
                        if (e !== t.formattedTitle) {
                            yield C(t, e);
                        }
                    });
                    return function () {
                        return e.apply(this, arguments);
                    };
                }(), [t]);
                if (n == null) {
                    return null;
                }
                if (n.isSuspendedOrTerminated === true || !(0, u.iAmOwner)(n)) {
                    return (0, b.jsx)(f.TextHeader, {
                        className: (0, x.default)(h.uiMargin.vert6),
                        level: "2",
                        theme: "large",
                        children: (0, b.jsx)(d.Name, {
                            chat: t,
                            breakWord: true
                        })
                    });
                }
                return (0, b.jsx)(r.default, {
                    subject: t.formattedTitle,
                    onSave: a,
                    editRestrictionInfo: () => {
                        c.ModalManager.open((0, b.jsx)(l.ConfirmPopup, {
                            onOK: () => c.ModalManager.close(),
                            okText: m.fbt._("OK", null, {
                                hk: "4oTrfy"
                            }),
                            children: m.fbt._("Only admins can edit this channel's info", null, {
                                hk: "Z6ACg"
                            })
                        }));
                    },
                    editable: true,
                    emptyErrorMessage: m.fbt._("Channel name can't be empty", null, {
                        hk: "2ep6gS"
                    })
                });
            };
            var i = a(n(348926));
            var o = n(328620);
            var l = n(103440);
            var s = n(172365);
            var r = a(n(559719));
            var c = n(114850);
            var d = n(21645);
            var u = n(751460);
            var f = n(180519);
            var p = n(390737);
            var h = n(676345);
            var m = n(548360);
            var g = n(667294);
            var x = a(n(156720));
            var v = n(655241);
            var b = n(785893);

            function C (e, t) {
                let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0, o.genId)();
                const a = (0, s.editNewsletterMetadataAction)(e, {
                    editName: true
                }, {
                    name: t
                });
                const i = e.name;
                const l = new o.ActionType(m.fbt._("Renaming channel", null, {
                    hk: "3xRXjW"
                }));
                const r = a.then(() => new o.ActionType(m.fbt._("Channel renamed to {name}", [m.fbt._param("name", t)], {
                    hk: "JAzRN"
                }), {
                    actionText: m.fbt._("Undo", null, {
                        hk: "3r3mP7"
                    }),
                    actionHandler: () => C(e, i, n)
                })).catch(() => {
                    __LOG__(3)`newsletter:handleEditSubject dropped`;
                    return new o.ActionType(m.fbt._("Couldn't rename channel", null, {
                        hk: "3OWiwP"
                    }), {
                        actionText: m.fbt._("Try again", null, {
                            hk: "3qJDe7"
                        }),
                        actionHandler: () => C(e, t, n)
                    });
                });
                p.ToastManager.open((0, b.jsx)(o.ActionToast, {
                    id: n,
                    initialAction: l,
                    pendingAction: r
                }));
                return a;
            }
        },
        683023: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const t = (0, k.useOptionalModelValues)(e.chat.newsletterMetadata, ["size", "privacy", "terminated", "isSuspendedOrTerminated", "membershipType", "inviteCode"]);
                let n = (t == null ? undefined : t.privacy) === g.NewsletterPrivacy.Private ? _.fbt._("Private Channel", null, {
                    hk: "4eaPAs"
                }) : _.fbt._("Channel", null, {
                    hk: "26BY5U"
                });
                if (t == null ? undefined : t.terminated) {
                    n = _.fbt._("Deleted channel", null, {
                        hk: "3S2eSl"
                    });
                }
                const a = (t == null ? undefined : t.size) != null ? (0, i.getNewsletterFollowersText)(t.size) : null;
                return (0, P.jsxs)(s.default, {
                    theme: "padding-large",
                    children: [(0, P.jsxs)(r.FlexColumn, {
                        align: "center",
                        children: [(0, P.jsx)(p.default, {
                            chat: e.chat,
                            xstyle: M.uiMargin.bottom7,
                            readOnly: (t == null ? undefined : t.isSuspendedOrTerminated) === true || !(0, m.iAmOwner)(t)
                        }), (0, P.jsx)(h.default, {
                            chat: e.chat
                        }), (0, P.jsx)("div", {
                            "data-testid": "newsletter-info-top-card-subtitle",
                            className: (0, S.default)(w.newsletterSecondary),
                            children: (0, P.jsx)(o.SelectableSpan, {
                                dir: "auto",
                                selectable: true,
                                children: (0, P.jsxs)(v.TextSpan, {
                                    size: "16",
                                    color: "secondary",
                                    children: [n, (t == null ? undefined : t.isSuspendedOrTerminated) ? null : (0, P.jsxs)(P.Fragment, {
                                        children: [d.default.isRTL() ? " - " : " · ", a]
                                    })]
                                })
                            })
                        })]
                    }), (t == null ? undefined : t.isSuspendedOrTerminated) ? null : (0, P.jsx)(T, {
                        name: e.chat.formattedTitle,
                        inviteCode: t == null ? undefined : t.inviteCode
                    })]
                });
            };
            var i = n(949359);
            var o = n(306703);
            var l = n(985714);
            var s = a(n(969358));
            var r = n(690495);
            var c = n(525110);
            var d = a(n(932325));
            var u = n(972989);
            var f = n(114850);
            var p = a(n(501624));
            var h = a(n(988149));
            var m = n(751460);
            var g = n(705080);
            var x = a(n(210002));
            var v = n(180519);
            var b = n(625786);
            var C = n(390737);
            var M = n(676345);
            var j = a(n(625903));
            var _ = n(548360);
            var y = n(667294);
            var S = a(n(156720));
            var k = n(655241);
            var P = n(785893);
            const w = {
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
                infoActionBtn: {
                    fontSize: "ovllcyds"
                }
            };

            function T (e) {
                let {
                    name: t,
                    inviteCode: n
                } = e;
                const a = n != null ? `https://whatsapp.com/channel/${n}` : null;
                const i = (0, y.useCallback)(() => {
                    if (a == null) {
                        return;
                    }
                    const e = _.fbt._("Follow the {newsletter_name} channel on WhatsApp: {link}", [_.fbt._param("newsletter_name", t), _.fbt._param("link", a)], {
                        hk: "2JUBPH"
                    });
                    const n = _.fbt._("", null, {
                        hk: "rzrsn"
                    });
                    f.ModalManager.open((0, P.jsx)(x.default, {
                        title: n.toString(),
                        text: e.toString()
                    }), {
                        transition: "modal-flow"
                    });
                }, [t, a]);
                const o = (0, y.useCallback)(() => {
                    if (a == null) {
                        return;
                    }
                    if ((0, l.copyTextToClipboard)(a)) {
                        C.ToastManager.open((0, P.jsx)(b.Toast, {
                            msg: _.fbt._("Link copied to clipboard.", null, {
                                hk: "24K2ka"
                            })
                        }));
                    } else {
                        C.ToastManager.open((0, P.jsx)(b.Toast, {
                            msg: _.fbt._("Couldn't copy to clipboard.", null, {
                                hk: "2JI7CO"
                            })
                        }));
                    }
                }, [a]);
                const s = [];
                if (n != null) {
                    s.push({
                        Icon: c.ForwardIcon,
                        onClick: i,
                        testid: "newsletter-info-invite-action",
                        title: _.fbt._("Forward", null, {
                            hk: "46L1pk"
                        })
                    });
                    if (document.queryCommandSupported("copy")) {
                        s.push({
                            Icon: u.LinkIcon,
                            onClick: o,
                            testid: "newsletter-info-copy-link-action",
                            title: _.fbt._("Copy link", null, {
                                hk: "3jv6Pn"
                            })
                        });
                    }
                }
                return (0, P.jsx)(r.FlexRow, {
                    justify: "center",
                    align: "center",
                    xstyle: [M.uiMargin.top25, M.uiMargin.bottom10],
                    children: s.map((e, t) => {
                        let {
                            testid: n,
                            Icon: a,
                            onClick: i,
                            title: o
                        } = e;
                        return (0, P.jsx)(j.default, {
                            "aria-label": o,
                            testid: n,
                            onClick: i,
                            xstyle: w.infoActionBtn,
                            children: (0, P.jsxs)(r.FlexColumn, {
                                align: "center",
                                xstyle: [w.infoAction, M.uiPadding.horiz15],
                                children: [(0, P.jsx)(a, {
                                    xstyle: [w.actionIcon, M.uiMargin.bottom15],
                                    width: 32,
                                    height: 32
                                }), o]
                            })
                        }, t);
                    })
                });
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
                const o = (0, v.jsx)(C, {
                    chat: t
                });
                const l = (0, v.jsx)(b, {
                    chat: t
                });
                const s = (0, v.jsx)(M, {
                    chat: t,
                    onDeleteNewsletter: a
                });
                return (0, v.jsxs)(i.ChatInfoDrawerButtonsSection, {
                    xstyle: n,
                    children: [o, l, s]
                });
            };
            var i = n(464659);
            var o = n(419000);
            var l = n(36045);
            var s = n(90989);
            var r = n(114850);
            var c = n(73225);
            var d = n(751460);
            var u = a(n(726619));
            var f = n(453603);
            var p = n(21698);
            var h = n(106645);
            var m = n(548360);
            var g = n(667294);
            var x = n(655241);
            var v = n(785893);

            function b (e) {
                let {
                    chat: t
                } = e;
                const n = (0, x.useOptionalModelValues)(t.newsletterMetadata, ["membershipType", "suspended", "terminated", "isSuspendedOrTerminated"]);
                if ((n == null ? undefined : n.isSuspendedOrTerminated) || (0, d.iAmOwner)(n) || (0, d.iAmAdmin)(n) || !(0, c.isNewsletterReportingEnabled)()) {
                    return null;
                }
                const a = m.fbt._("", null, {
                    hk: "2JTAk8"
                });
                return (0, v.jsx)(l.DrawerButton, {
                    testid: "newsletter-integrity-report-button",
                    icon: (0, v.jsx)(p.ThumbsDownIcon, {
                        directional: true
                    }),
                    color: "danger",
                    theme: "chat-info",
                    onClick: () => {
                        r.ModalManager.open((0, v.jsx)(u.default, {
                            chat: t,
                            spamFlow: f.SpamFlow.NewsletterInfoReport
                        }));
                    },
                    children: a
                });
            }

            function C (e) {
                let {
                    chat: t
                } = e;
                const n = (0, x.useOptionalModelValues)(t.newsletterMetadata, ["membershipType"]);
                const a = m.fbt._("Unfollow", null, {
                    hk: "3NYOtp"
                });
                const i = (0, g.useCallback)(() => {
                    r.ModalManager.open((0, v.jsx)(h.UnfollowNewsletterConfirmationModal, {
                        chat: t
                    }));
                }, [t]);
                if ((0, d.iAmSubscriber)(n)) {
                    return (0, v.jsx)(l.DrawerButton, {
                        testid: "li-unfollow-newsletter",
                        icon: (0, v.jsx)(s.ExitIcon, {
                            directional: true
                        }),
                        color: "danger",
                        theme: "chat-info",
                        onClick: i,
                        children: a
                    });
                } else {
                    return null;
                }
            }

            function M (e) {
                let {
                    chat: t,
                    onDeleteNewsletter: n
                } = e;
                const a = (0, x.useOptionalModelValues)(t.newsletterMetadata, ["membershipType"]);
                const i = m.fbt._("Delete channel", null, {
                    hk: "2PQtz4"
                });
                if ((0, d.iAmOwner)(a)) {
                    return (0, v.jsx)(l.DrawerButton, {
                        testid: "li-delete-newsletter",
                        icon: (0, v.jsx)(o.DeleteIcon, {
                            directional: true
                        }),
                        color: "danger",
                        theme: "chat-info",
                        onClick: n,
                        children: i
                    });
                } else {
                    return null;
                }
            }
        },
        617058: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NewsletterPublicChannelPrivacyNux = function () {
                const e = m.fbt._("About this channel", null, {
                    hk: "3Ig3Nc"
                });
                const t = (0, x.jsx)(o.SelectableLink, {
                    className: (0, g.default)(v),
                    id: "data-sharing-learn-more-link",
                    selectable: true,
                    onClick: () => (0, l.openExternalLink)((0, s.getNewsletterGuidelinesFaqUrl)()),
                    children: m.fbt._("guidelines", null, {
                        hk: "vpHHG"
                    })
                });
                const n = (0, x.jsxs)(x.Fragment, {
                    children: [(0, x.jsx)(c.NewsletterPrivacyRow, {
                        icon: (0, x.jsx)(i.BusinessWebsiteIcon, {
                            color: f.SvgColorProp.TEAL,
                            height: 20
                        }),
                        title: m.fbt._("Anyone can discover your channel", null, {
                            hk: "3Mv6pP"
                        }),
                        text: m.fbt._("Channels are public, so anyone can find them and see 30 days of history.", null, {
                            hk: "1e8ufO"
                        })
                    }), (0, x.jsx)(c.NewsletterPrivacyRow, {
                        icon: (0, x.jsx)(h.VisibilityOffIcon, {
                            color: f.SvgColorProp.TEAL,
                            height: 20
                        }),
                        title: m.fbt._("People see your channel, not you", null, {
                            hk: "LlDn3"
                        }),
                        text: m.fbt._("Your phone number, profile picture and name aren't shown to followers.", null, {
                            hk: "21oJXn"
                        })
                    }), (0, x.jsx)(c.NewsletterPrivacyRow, {
                        icon: (0, x.jsx)(u.SecurityShieldIcon, {
                            color: f.SvgColorProp.TEAL,
                            height: 20
                        }),
                        title: m.fbt._("You're responsible for your channel", null, {
                            hk: "2daxA5"
                        }),
                        text: m.fbt._("Your channel needs to follow our {guidelines_link} and is reviewed against them.", [m.fbt._param("guidelines_link", t)], {
                            hk: "1O1H5q"
                        })
                    })]
                });
                return (0, x.jsx)(d.PhoneNumberPrivacyNux, {
                    testid: "public_channel__newsletter",
                    onOK: () => r.ModalManager.close(),
                    okText: m.fbt._("Ok", null, {
                        hk: "RJ838"
                    }),
                    onCancel: () => (0, l.openExternalLink)((0, s.getNewsletterPrivacyFaqUrl)()),
                    cancelText: m.fbt._("Learn more", null, {
                        hk: "1L9NkE"
                    }),
                    displayName: (0, p.getMeDisplayName)(),
                    title: e,
                    customContent: n
                });
            };
            var i = n(36409);
            var o = n(306703);
            var l = n(753233);
            var s = n(258105);
            var r = n(114850);
            var c = n(349372);
            var d = n(14509);
            var u = n(321566);
            var f = n(220584);
            var p = n(459857);
            var h = n(700848);
            var m = n(548360);
            var g = a(n(156720));
            var x = n(785893);
            const v = {
                cursor: "ajgl1lbb"
            };
        },
        172365: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.editNewsletterMetadataAction = function () {
                return c.apply(this, arguments);
            };
            var i = a(n(348926));
            var o = n(418987);
            var l = n(787671);
            var s = n(14291);
            var r = n(126592);

            function c () {
                return (c = (0, i.default)(function* (e, t, n) {
                    if (!e.isNewsletter) {
                        __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletters][editNewsletterMetadataAction] called with a non-newsletter chat`;
                        return void SEND_LOGS("edit-metadata-action-not-a-newsletter", 1, "newsletter");
                    }
                    const a = (0, o.toNewsletterJid)(e.id.toJid());
                    try {
                        const e = yield(0, l.editNewsletterMetadata)(a, t, n);
                        if (e == null) {
                            return;
                        }
                        const {
                            chat: i,
                            metadata: o,
                            pic: c
                        } = (0, s.mapNewsletterToModels)(e);
                        yield(0, r.updateCollections)({
                            chats: [i],
                            metadata: [o],
                            pics: [c]
                        });
                    } catch (e) {
                        __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletter][editNewsletterMetadataAction] Failed to edit newsletter metadata`;
                        SEND_LOGS("edit-metadata-action-failed", 1, "newsletter");
                        throw e;
                    }
                })).apply(this, arguments);
            }
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
                    sticker: g
                } = e;
                const x = function (e) {
                    (0, p.useEffect)(() => {
                        if (e) {
                            u.StickerPackCollectionMd.fetchStickerPack(e);
                        }
                    }, [e]);
                    return (0, h.default)(u.StickerPackCollectionMd, "add remove reset", () => e != null ? u.StickerPackCollectionMd.get(e) : null);
                }(t);
                let v;
                if (t) {
                    const e = e => {
                        e.stopPropagation();
                        if (n) {
                            n();
                        }
                        if (a != null) {
                            self.setTimeout(() => o.Cmd.openStickerPack(t), a + 150);
                        } else {
                            o.Cmd.openStickerPack(t);
                        }
                    };
                    if ((0, c.isFavoriteStickersEnabled)()) {
                        if (g != null) {
                            v = (0, m.jsxs)(r.FlexRow, {
                                children: [(0, m.jsx)(i.default, {
                                    onClick: e,
                                    type: "secondary",
                                    children: f.fbt._("View Pack", null, {
                                        hk: "tAlU3"
                                    })
                                }), s.default.get(g.filehash) ? (0, m.jsx)(i.default, {
                                    onClick: () => (0, l.removeStickerFromFavorites)(g),
                                    type: "secondary",
                                    children: f.fbt._("Remove From Favorites", null, {
                                        hk: "3YoUkP"
                                    })
                                }) : (0, m.jsx)(i.default, {
                                    onClick: () => (0, l.addStickerToFavorites)(g),
                                    type: "secondary",
                                    children: f.fbt._("Add to Favorites", null, {
                                        hk: "3x4EBo"
                                    })
                                })]
                            });
                        }
                    } else {
                        v = (0, m.jsx)(i.default, {
                            onClick: e,
                            type: "secondary",
                            children: f.fbt._("View Pack", null, {
                                hk: "tAlU3"
                            })
                        });
                    }
                }
                return (0, m.jsxs)(m.Fragment, {
                    children: [(0, m.jsx)(d.StickerDetailsStickerPackInfo, {
                        name: x == null ? undefined : x.name,
                        publisher: x == null ? undefined : x.publisher,
                        theme: d.Theme.MediaViewer
                    }), v]
                });
            };
            var i = a(n(692629));
            var o = n(780549);
            var l = n(225446);
            var s = a(n(788788));
            var r = n(690495);
            var c = n(97858);
            var d = n(438543);
            var u = n(425192);
            var f = n(548360);
            var p = n(667294);
            var h = a(n(524578));
            var m = n(785893);
        },
        120236: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = undefined;
            var i = a(n(348926));
            var o = n(637842);
            var l = n(778945);
            var s = n(87630);
            var r = a(n(908081));
            var c = a(n(324093));
            var d = n(626194);
            var u = a(n(329982));
            var f = n(548360);
            var p = n(667294);
            var h = n(785893);
            class m extends u.default {
                componentDidMount() {
                    this.push((0, h.jsx)(g, {
                        contactId: this.props.contactId,
                        onClose: this.pop
                    }));
                }
            }
            t.default = m;
            const g = (0, p.forwardRef)((e, t) => {
                const {
                    contactId: n
                } = e;
                const [a, u] = (0, p.useState)(undefined);
                const [m, g] = (0, p.useState)(true);
                (0, p.useEffect)(() => {
                    (function () {
                        var e = (0, i.default)(function* () {
                            const e = yield l.BusinessProfileCollection.update(n, {
                                getMerchantCompliance: true
                            });
                            const t = (Array.isArray(e) ? e[0] : e).serialize();
                            if (t) {
                                u(t.legalEntityDetails || undefined);
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
                    entityName: x,
                    customerCareDetails: v,
                    grievanceOfficerDetails: b
                } = a != null ? a : {};
                const C = (0, o.getEntityTypeText)(a);
                return (0, h.jsxs)(r.default, {
                    ref: t,
                    theme: "striped",
                    children: [(0, h.jsx)(d.DrawerHeader, {
                        title: f.fbt._("Business details", null, {
                            hk: "m9xzp"
                        }),
                        type: d.DRAWER_HEADER_TYPE.SMALL,
                        onCancel: e.onClose
                    }), (0, h.jsx)(c.default, {
                        theme: m ? "center-content" : undefined,
                        children: m ? (0, h.jsx)(s.ComplianceInfoLoading, {}) : (0, h.jsxs)(h.Fragment, {
                            children: [(0, h.jsxs)(s.ComplianceInfoGroup, {
                                children: [(0, h.jsx)(s.ComplianceInfoPrimitiveField, {
                                    value: x,
                                    label: f.fbt._("Legal Name of Business", null, {
                                        hk: "2s9jD"
                                    })
                                }), (0, h.jsx)(s.ComplianceInfoPrimitiveField, {
                                    value: C,
                                    label: f.fbt._("Business Type", null, {
                                        hk: "48J73B"
                                    })
                                })]
                            }), (0, h.jsxs)(s.ComplianceInfoGroup, {
                                title: f.fbt._("Customer Care Information", null, {
                                    hk: "qlYos"
                                }),
                                children: [(0, h.jsx)(s.ComplianceInfoPrimitiveField, {
                                    value: v == null ? undefined : v.mobileNumber,
                                    label: f.fbt._("Mobile Phone Number", null, {
                                        hk: "PMTTg"
                                    }),
                                    forceLTR: true
                                }), (0, h.jsx)(s.ComplianceInfoPrimitiveField, {
                                    value: v == null ? undefined : v.landlineNumber,
                                    label: f.fbt._("Landline Phone Number", null, {
                                        hk: "tXYaf"
                                    }),
                                    forceLTR: true
                                }), (0, h.jsx)(s.ComplianceInfoPrimitiveField, {
                                    value: v == null ? undefined : v.email,
                                    label: f.fbt._("Email Address", null, {
                                        hk: "2jYxR1"
                                    })
                                })]
                            }), (0, h.jsxs)(s.ComplianceInfoGroup, {
                                title: f.fbt._("Grievance Officer Information", null, {
                                    hk: "3emd7I"
                                }),
                                children: [(0, h.jsx)(s.ComplianceInfoPrimitiveField, {
                                    value: b == null ? undefined : b.name,
                                    label: f.fbt._("Name", null, {
                                        hk: "2vEs6r"
                                    })
                                }), (0, h.jsx)(s.ComplianceInfoPrimitiveField, {
                                    value: b == null ? undefined : b.mobileNumber,
                                    label: f.fbt._("Mobile Phone Number", null, {
                                        hk: "3kk5I"
                                    }),
                                    forceLTR: true
                                }), (0, h.jsx)(s.ComplianceInfoPrimitiveField, {
                                    value: b == null ? undefined : b.landlineNumber,
                                    label: f.fbt._("Landline Phone Number", null, {
                                        hk: "4GBzF0"
                                    })
                                }), (0, h.jsx)(s.ComplianceInfoPrimitiveField, {
                                    value: b == null ? undefined : b.email,
                                    label: f.fbt._("Email Address", null, {
                                        hk: "3SvbLl"
                                    })
                                })]
                            })]
                        })
                    })]
                }, "merchant-details-modal");
            });
            g.displayName = "MerchantDetails";
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
                const {
                    verifiedLevel: n,
                    verifiedName: a
                } = (0, C.useModelValues)(t, ["verifiedLevel", "verifiedName"]);
                const j = (0, u.getBusinessFaqUrl)();
                const _ = !r.Conn.isSMB;
                (0, b.useEffect)(() => {
                    if (_) {
                        new i.BannerEventWamEvent({
                            bannerType: g.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                            bannerOperation: g.BANNER_OPERATIONS.SHOWN
                        }).commit();
                    }
                }, [_]);
                const y = n === o.VERIFIED_LEVEL.HIGH ? f.default.t(777, {
                    businessName: a
                }) : v.fbt._("This business uses WhatsApp Business, which allows them to add their opening hours, address, website and catalog of products or services.", null, {
                    hk: "82W5f"
                });
                return (0, M.jsxs)(s.ConfirmPopup, {
                    title: v.fbt._("About WhatsApp Business", null, {
                        hk: "3XF5gx"
                    }),
                    onOK: () => {
                        p.ModalManager.close();
                        if (_) {
                            new i.BannerEventWamEvent({
                                bannerType: g.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                                bannerOperation: g.BANNER_OPERATIONS.DISMISS
                            }).commit();
                        }
                    },
                    okText: v.fbt._("OK", null, {
                        hk: "4oTrfy"
                    }),
                    children: [(0, M.jsx)(c.EmojiText, {
                        text: y
                    }), " ", (0, M.jsx)(l.default, {
                        href: j,
                        onClick: e => {
                            e.preventDefault();
                            p.ModalManager.close();
                            self.setTimeout(() => (0, d.openExternalLink)(j), 10);
                        },
                        children: f.default.t(393)
                    }), _ && (0, M.jsx)("div", {
                        className: x.default.footerNote,
                        children: (0, M.jsxs)(m.TextSpan, {
                            theme: "muted",
                            size: "13",
                            children: [v.fbt._("If you're a business, the free WhatsApp Business app can help.", null, {
                                hk: "14W7ur"
                            }), (0, M.jsx)("br", {}), (0, M.jsx)(l.default, {
                                onClick: e => {
                                    e.preventDefault();
                                    p.ModalManager.close();
                                    new i.BannerEventWamEvent({
                                        bannerType: g.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                                        bannerOperation: g.BANNER_OPERATIONS.CLICK
                                    }).commit();
                                    self.setTimeout(() => p.ModalManager.open((0, M.jsx)(h.SmbAppUpsellModal, {})), 200);
                                },
                                className: x.default.getTheAppLink,
                                children: v.fbt._("Learn about getting the app", null, {
                                    hk: "3ncguo"
                                })
                            })]
                        })
                    })]
                });
            };
            var i = n(240045);
            var o = n(817649);
            var l = a(n(196554));
            var s = n(103440);
            var r = n(445729);
            var c = n(305521);
            var d = n(753233);
            var u = n(258105);
            var f = a(n(932325));
            var p = n(114850);
            var h = n(945270);
            var m = n(180519);
            var g = n(130756);
            var x = a(n(986458));
            var v = n(548360);
            var b = n(667294);
            var C = n(655241);
            var M = n(785893);
        },
        945270: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SmbAppUpsellModal = function () {
                return (0, h.jsxs)(l.ConfirmPopup, {
                    title: p.fbt._("WhatsApp Business app", null, {
                        hk: "4BfvOl"
                    }),
                    onOK: () => {
                        new i.BannerEventWamEvent({
                            bannerType: f.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                            bannerOperation: f.BANNER_OPERATIONS.DISMISS
                        }).commit();
                        d.ModalManager.close();
                    },
                    okText: p.fbt._("Close", null, {
                        hk: "19Jpec"
                    }),
                    children: [(0, h.jsx)(u.default, {}), (0, h.jsx)("p", {
                        children: (0, h.jsx)(s.EmojiText, {
                            text: p.fbt._("If you're a business, you can benefit from switching to the free WhatsApp Business app. It has tools to connect with customers and manage messages.", null, {
                                hk: "2SAIXH"
                            })
                        })
                    }), (0, h.jsx)("br", {}), (0, h.jsxs)("p", {
                        children: [(0, h.jsx)(s.EmojiText, {
                            text: p.fbt._("Scan this code to get the WhatsApp Business App. Or, you can install it from the App Store or Google Play Store.", null, {
                                hk: "2840mD"
                            })
                        }), " ", (0, h.jsx)(o.default, {
                            href: m,
                            onClick: e => {
                                e.preventDefault();
                                d.ModalManager.close();
                                self.setTimeout(() => (0, r.openExternalLink)(m), 10);
                            },
                            children: c.default.t(393)
                        })]
                    })]
                });
            };
            t.WHATSAPP_BUSINESS_URL = undefined;
            var i = n(240045);
            var o = a(n(196554));
            var l = n(103440);
            var s = n(305521);
            var r = n(753233);
            var c = a(n(932325));
            var d = n(114850);
            var u = a(n(345257));
            var f = n(130756);
            var p = n(548360);
            var h = n(785893);
            const m = "https://www.whatsapp.com/business";
            t.WHATSAPP_BUSINESS_URL = m;
        },
        345257: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function () {
                const e = (0, c.useRef)(null);
                const t = (0, c.useRef)(null);
                const {
                    theme: n
                } = (0, c.useContext)(s.ThemeContext);
                const a = n === "dark";
                (0, c.useEffect)(() => {
                    if (e.current != null) {
                        t.current = new i.default(e.current, {
                            text: "https://www.whatsapp.com/business/download",
                            colorDark: "#122e31",
                            colorLight: "#ffffff",
                            width: l.QR_EDGE / 2,
                            height: l.QR_EDGE / 2,
                            typeNumber: 4,
                            correctLevel: i.default.CorrectLevel.H
                        });
                    }
                    return () => {
                        if (t.current != null) {
                            t.current.clear();
                            t.current = null;
                            e.current = null;
                        }
                    };
                }, [a]);
                return (0, d.jsx)("div", {
                    className: r.default.wrapper,
                    children: (0, d.jsx)("div", {
                        ref: e,
                        className: (0, o.cx)({
                            [r.default.codeDarkMode]: a,
                            [r.default.code]: true
                        }),
                        children: (0, d.jsx)(u, {
                            theme: n
                        })
                    })
                });
            };
            var i = a(n(478000));
            var o = n(752253);
            var l = n(914368);
            var s = n(667738);
            var r = a(n(750478));
            var c = n(667294);
            var d = n(785893);

            function u () {
                return (0, d.jsx)("div", {
                    className: r.default.codeLogo,
                    children: (0, d.jsx)("svg", {
                        width: "100%",
                        viewBox: "0 0 50 50",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, d.jsx)("path", {
                            d: "M42.6776 42.6779C37.9558 47.3997 31.6777 50.0001 24.9999 50.0001C21.0047 50.0001 17.0541 49.0389 13.5244 47.2141L0.601068 49.3339L2.72832 36.3645C0.941278 32.8647 0 28.9525 0 25.0001C0 18.3223 2.60042 12.0443 7.32229 7.32237C12.0442 2.6005 18.3221 0 24.9999 0C31.6777 0 37.9558 2.6005 42.6776 7.32237C47.3995 12.0443 50 18.3223 50 25.0001C50 31.678 47.3995 37.9558 42.6776 42.6779ZM24.9999 4.33778C13.6067 4.33778 4.33772 13.607 4.33772 25.0001C4.33772 28.4792 5.21935 31.9192 6.8868 34.9487L7.24853 35.6054L5.85915 44.0756L14.2959 42.6918L14.9565 43.0601C18.0107 44.7624 21.4837 45.6622 24.9999 45.6622C36.3932 45.6622 45.6622 36.3933 45.6622 25.0001C45.6622 13.607 36.3932 4.33778 24.9999 4.33778ZM31.1133 24.3614C32.4522 24.9804 34.1536 26.3725 34.1208 29.3117C34.0749 33.4266 31.2191 35.6542 27.2744 35.6542H19.4594H18.3042C17.5079 35.6542 16.8645 35.0053 16.8713 34.2092L17.0344 15.0573C17.041 14.2714 17.6794 13.6377 18.4652 13.6366L27.1493 13.6256C31.4651 13.6256 33.9598 16.039 33.9177 19.8134C33.8903 22.2579 32.2484 23.8355 31.1133 24.3614ZM26.766 17.4622H21.3643L21.3076 22.5361H26.7093C28.5347 22.5361 29.5672 21.5152 29.584 19.9992C29.6009 18.4831 28.5915 17.4622 26.766 17.4622ZM26.9444 26.4035H21.2643L21.2038 31.8178H26.884C28.8333 31.8178 29.7752 30.5802 29.792 29.0952C29.8085 27.6101 28.8939 26.4035 26.9444 26.4035Z",
                            fill: "currentColor"
                        })
                    })
                });
            }
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
                    filterText: x
                } = e;
                const v = (0, o.default)(e, g);
                const b = (0, h.default)();
                const C = (0, f.default)(() => new d.default(e => {
                    const t = [];
                    const n = (0, l.getText)(e);
                    if (n != null) {
                        t.push(n);
                    }
                    const a = e.mediaData.filename;
                    t.push(a);
                    return t.join(" ");
                }));
                (0, p.useListener)(t, "add", e => {
                    if (a) {
                        C.current.cacheMessageTokens(e);
                    }
                });
                (0, p.useListener)(t, "remove", e => {
                    if (a) {
                        C.current.removeMessageTokensFromCache(e);
                    }
                });
                (0, p.useListener)(t, "reset", () => {
                    if (a) {
                        C.current.clearTokensCache();
                    }
                });
                (0, u.useEffect)(() => {
                    if (a) {
                        t.forEach(e => {
                            C.current.cacheMessageTokens(e);
                        });
                    }
                }, [t, C, a]);
                const M = a ? (e, t) => C.current.filter(e, x, t) : undefined;
                return (0, m.jsxs)(m.Fragment, {
                    children: [(0, m.jsx)(c.default, (0, i.default)({
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
                        emptyText: r.default.t(497),
                        chat: n,
                        filterMessages: M
                    }, v)), (0, m.jsx)(s.HistorySyncGalleryPlaceholder, {
                        chat: n
                    })]
                });
            };
            var i = a(n(81109));
            var o = a(n(506479));
            var l = n(163755);
            var s = n(217714);
            var r = a(n(932325));
            var c = a(n(101760));
            var d = a(n(443461));
            var u = n(667294);
            var f = a(n(637660));
            var p = n(808446);
            var h = a(n(940630));
            var m = n(785893);
            const g = ["docMsgs", "chat", "isFilterEnabled", "filterText"];
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
                    selectable: j,
                    onMessageSelect: _,
                    isFilterEnabled: y = false,
                    filterText: S
                } = e;
                const k = (0, b.default)();
                const P = (0, x.default)(() => new h.default(e => (0, s.getText)(e)));
                (0, v.useListener)(t, "add", e => {
                    if (y) {
                        P.current.cacheMessageTokens(e);
                    }
                });
                (0, v.useListener)(t, "remove", e => {
                    P.current.removeMessageTokensFromCache(e);
                });
                (0, v.useListener)(t, "reset", () => {
                    if (y) {
                        P.current.clearTokensCache();
                    }
                });
                (0, g.useEffect)(() => {
                    if (y) {
                        t.forEach(e => {
                            P.current.cacheMessageTokens(e);
                        });
                    }
                }, [t, P, y]);
                (0, v.useListener)(n.msgs, "add bulk_add", e => {
                    if (!e) {
                        return;
                    }
                    const n = [];
                    const a = Array.isArray(e) ? e : [e];
                    Promise.all(a.map(e => {
                        if ((0, p.getLinksFromMsg)(e).length) {
                            n.push(e);
                        }
                        return Promise.resolve();
                    })).then(() => {
                        if (n.length) {
                            t.add(n);
                        }
                    });
                });
                const w = y ? (e, t) => P.current.filter(e, S, t) : undefined;
                const {
                    linkMsgs: T,
                    chat: E,
                    filterText: I,
                    isFilterEnabled: A
                } = e;
                const N = (0, o.default)(e, M);
                return (0, C.jsxs)(C.Fragment, {
                    children: [(0, C.jsx)(u.default, (0, i.default)({
                        testid: "link-gallery",
                        msgsCollection: t,
                        msgsCollectionUpdateEvents: ["add", "remove", "reset", "query_doc_before"],
                        queryCollection: e => {
                            if (t.hasLinkBefore) {
                                k(() => {
                                    t.queryLinks(n, e);
                                });
                            }
                        },
                        getHasBefore: () => t.hasLinkBefore,
                        getQueryBefore: () => t.queryLinkBefore,
                        messageElements: (e, t) => ((e, t, n, a, i) => {
                            const o = [];
                            e.forEach(e => {
                                const s = !(0, f.getIsSentByMe)(e) && (0, f.getIsGroupMsg)(e);
                                let r = null;
                                if ((0, f.getLinkPreview)(e)) {
                                    r = (0, C.jsx)(m.default, {
                                        testid: "link-gallery-msg",
                                        msg: e,
                                        selectable: n,
                                        selectedMessages: i,
                                        onMessageSelect: a,
                                        displayType: l.DISPLAY_TYPE.GALLERY_LINKS,
                                        onClickMsg: t
                                    }, e.id.toString());
                                }
                                (0, p.getGalleryLinks)(e).forEach((l, c) => {
                                    if (!(l.href === e.matchedText && r != null)) {
                                        o.push((0, C.jsx)(d.default, {
                                            testid: "link-gallery-msg",
                                            msg: e.safe(),
                                            link: l,
                                            displayAuthor: s,
                                            selectable: n,
                                            selectedMessages: i,
                                            onMessageSelect: a,
                                            onClickMsg: t
                                        }, `${e.id.toString()}-${c}`));
                                    }
                                });
                                if (r != null) {
                                    o.push(r);
                                }
                            });
                            o.reverse();
                            return o;
                        })(e, t, j, _, a),
                        emptyText: c.default.t(499),
                        chat: n,
                        filterMessages: w
                    }, N)), (0, C.jsx)(r.HistorySyncGalleryPlaceholder, {
                        chat: e.chat
                    })]
                });
            };
            var i = a(n(81109));
            var o = a(n(506479));
            var l = n(356097);
            var s = n(163755);
            var r = n(217714);
            var c = a(n(932325));
            var d = a(n(318787));
            var u = a(n(101760));
            var f = n(787742);
            var p = n(44118);
            var h = a(n(443461));
            var m = a(n(565644));
            var g = n(667294);
            var x = a(n(637660));
            var v = n(808446);
            var b = a(n(940630));
            var C = n(785893);
            const M = ["linkMsgs", "chat", "filterText", "isFilterEnabled"];
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
                    selectedMessages: k,
                    onMessageSelect: P,
                    onClickMsg: w,
                    testid: T
                } = e;
                const [E, I, A, N, R, O, D, L, B, G, F, V] = (0, y.useMsgValues)(e.msg.id, [m.getBody, m.getCaption, c.getDir, m.getId, m.getIsSentByMe, c.getMediaData, m.getType, c.getRtl, c.getSenderObj, m.getStar, c.getAsRevoked, m.getIsKept]);
                const [H, U] = (0, j.useState)(false);
                const [W, Y] = (0, j.useState)(() => k.isSelected(t.unsafe()));
                (0, _.useListener)(k, N.toString(), e => {
                    if (W !== e) {
                        Y(e);
                    }
                });
                const z = e.selectable || H ? (0, S.jsx)(h.default, {
                    checked: W,
                    onClick: e => {
                        if (e) {
                            e.stopPropagation();
                        }
                        P(t.unsafe(), !W);
                    },
                    msgTheme: "gallery"
                }) : null;
                const q = (0, r.Conversation)({
                    mentions: t.mentionMap(),
                    groupMentions: t.groupMentionMap(),
                    links: (0, g.getLinksFromMsg)(t.unsafe()),
                    phoneNumbers: (0, v.getPhoneNumbersFromMsg)(t.unsafe()),
                    selectable: true,
                    trusted: (0, x.isTrusted)(t.unsafe()),
                    fromMe: N.fromMe
                });
                const K = E && E.includes(n.url) ? E : I;
                const X = a ? (0, S.jsx)("div", {
                    className: M.default.author,
                    children: (0, S.jsx)(p.default, {
                        msg: t,
                        contact: B
                    })
                }) : null;
                const Z = (0, g.getSuspiciousLinks)(t.unsafe()).length > 0;
                return (0, S.jsx)(d.default, {
                    hover: H,
                    onClick: () => {
                        w(t.unsafe(), !W);
                    },
                    onMouseEnter: H ? null : () => {
                        if (!H) {
                            U(true);
                        }
                    },
                    onMouseOver: H ? null : () => {
                        if (!H) {
                            U(true);
                        }
                    },
                    onMouseLeave: H ? () => {
                        if (H) {
                            U(false);
                        }
                    } : null,
                    testid: T,
                    children: (0, S.jsxs)("div", {
                        className: M.default.msg,
                        "data-testid": "link-msg",
                        children: [(0, S.jsx)(b.default, {
                            transitionName: "delay-leave",
                            children: z
                        }), (0, S.jsx)(C.MessageContainer, {
                            isSentByMe: R,
                            children: (0, S.jsxs)("div", {
                                className: (0, o.cx)({
                                    [M.default.hasAuthor]: a,
                                    [M.default.hasSuspiciousLinks]: Z,
                                    [M.default.bubble]: true
                                }),
                                children: [X, (0, S.jsx)(i.SuspiciousLabel, {
                                    link: n,
                                    displayType: l.DISPLAY_TYPE.GALLERY
                                }), (0, S.jsx)(f.default, {
                                    title: n.url,
                                    isSentByMe: R,
                                    canonicalUrl: n.domain,
                                    displayType: l.DISPLAY_TYPE.GALLERY,
                                    star: G,
                                    kept: V,
                                    isLoading: false
                                }), (0, S.jsx)(s.EmojiText, {
                                    text: K,
                                    selectable: true,
                                    className: M.default.text,
                                    dirMismatch: L !== u.default.isRTL(),
                                    direction: A,
                                    formatters: q
                                })]
                            })
                        })]
                    })
                });
            };
            var i = n(751349);
            var o = n(752253);
            var l = n(356097);
            var s = n(305521);
            var r = n(675886);
            var c = n(163755);
            var d = a(n(296518));
            var u = a(n(932325));
            var f = a(n(428543));
            var p = a(n(599664));
            var h = a(n(6323));
            var m = n(787742);
            var g = n(44118);
            var x = n(435711);
            var v = n(527530);
            var b = a(n(844453));
            var C = n(512873);
            var M = a(n(663945));
            var j = n(667294);
            var _ = n(808446);
            var y = n(871210);
            var S = n(785893);
        },
        101760: (e, t, n) => {
            "use strict";

            var a = n(170315).default;
            var i = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const {
                    getHasBefore: t,
                    getQueryBefore: n,
                    msgsCollection: i,
                    msgsCollectionUpdateEvents: k,
                    emptyText: P,
                    scrollOffset: w = 0,
                    selectable: T,
                    onMessageSelect: E,
                    queryCollection: I,
                    selectedMessages: A,
                    messageElements: N,
                    onProductDetail: R,
                    setScrollOffset: O,
                    filterMessages: D,
                    testid: L
                } = e;
                const B = t();
                const G = n();
                const F = (0, g.useRef)(null);
                const V = (0, _.default)();
                const H = (0, j.default)(e => {
                    if (B) {
                        I(e);
                    }
                }, 100);
                const [U, W] = (0, g.useState)(() => i.toArray());
                const Y = (0, j.default)(e => {
                    const t = e.scrollHeight - e.clientHeight - e.scrollTop;
                    if (B && t < f.SCROLL_FUDGE) {
                        H(i.head());
                    }
                    if (O) {
                        O(e.scrollTop);
                    }
                }, 100);
                (0, g.useEffect)(() => {
                    if (B) {
                        H();
                    }
                    const e = F.current;
                    if (e) {
                        e.scrollTop = w;
                    }
                    return () => {
                        Y.cancel();
                    };
                }, []);
                const z = (e, t) => {
                    const n = (0, m.unproxy)(e);
                    if (T && t !== undefined) {
                        E(n, t);
                    } else {
                        r.Cmd.openChatAt((0, p.getChat)(n), (0, s.getSearchContext)((0, p.getChat)(n), n));
                    }
                };
                const q = (0, g.useRef)();
                const K = (0, v.default)();
                const X = (0, g.useCallback)(function () {
                    var e = (0, o.default)(function* (e) {
                        var t;
                        if (!((t = q.current) === null || t === undefined)) {
                            t.abort();
                        }
                        if (e == null) {
                            W(i.toArray());
                            return void K();
                        }
                        q.current = new a();
                        const n = q.current.signal;
                        try {
                            const t = yield e(i, n);
                            if (!(n.aborted || V.aborted)) {
                                W(t);
                                K();
                            }
                        } catch (e) {
                            if (e.name !== l.ABORT_ERROR) {
                                throw e;
                            }
                        }
                    });
                    return function () {
                        return e.apply(this, arguments);
                    };
                }(), [i, K, V]);
                (0, b.useListener)(i, k, () => X(D));
                (0, g.useEffect)(() => {
                    X(D);
                    return () => {
                        var e;
                        if ((e = q.current) === null || e === undefined) {
                            return undefined;
                        } else {
                            return e.abort();
                        }
                    };
                }, [X, D]);
                const [Z, {
                    height: J
                }] = (0, C.default)();
                const Q = (0, M.default)(Z, F);
                (0, g.useEffect)(() => {
                    if (D != null && t() && !n() && F.current != null && F.current.scrollHeight < J + f.SCROLL_FUDGE) {
                        H(i.head());
                    }
                });
                let $ = null;
                $ = N ? N(U, z) : U.map((e, t) => (0, y.jsx)(h.default, {
                    msg: e,
                    selectable: T,
                    selectedMessages: A,
                    onMessageSelect: E,
                    displayType: c.DISPLAY_TYPE.GALLERY,
                    onClickMsg: z,
                    onProductClick: R
                }, `${e.id.toString()}_${t}`)).reverse();
                if (G) {
                    if ($.length === 0) {
                        return (0, y.jsx)(d.Loading, {});
                    }
                    $.push((0, y.jsx)(u.default, {}, -1));
                }
                if ($.length === 0 && !G && !B) {
                    return (0, y.jsx)(d.Empty, {
                        text: P,
                        testid: "no-elements"
                    });
                }
                return (0, y.jsx)("div", {
                    "data-testid": L,
                    ref: Q,
                    onScroll: e => {
                        Y(e.target);
                    },
                    className: (0, x.default)(S),
                    children: $
                });
            };
            var o = i(n(348926));
            var l = n(898817);
            var s = n(713105);
            var r = n(780549);
            var c = n(356097);
            var d = n(811720);
            var u = i(n(495012));
            var f = n(914368);
            var p = n(163755);
            var h = i(n(565644));
            var m = n(163139);
            var g = n(667294);
            var x = i(n(156720));
            var v = i(n(969651));
            var b = n(808446);
            var C = i(n(695841));
            var M = i(n(38085));
            var j = i(n(286481));
            var _ = i(n(895851));
            var y = n(785893);
            const S = {
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
                const a = (0, o.default)(e, u);
                const f = (0, c.default)();
                return (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)(s.default, (0, i.default)({
                        msgsCollection: t,
                        msgsCollectionUpdateEvents: ["add", "remove", "reset", "products_loaded"],
                        queryCollection: e => f(() => {
                            t.queryProducts(n, e);
                        }),
                        getHasBefore: () => t.hasProductBefore,
                        getQueryBefore: () => t.hasProductBefore ? Promise.resolve() : null,
                        emptyText: r.fbt._("No products", null, {
                            hk: "8o7dB"
                        }),
                        chat: n
                    }, a)), (0, d.jsx)(l.HistorySyncGalleryPlaceholder, {
                        chat: n
                    })]
                });
            };
            var i = a(n(81109));
            var o = a(n(506479));
            var l = n(217714);
            var s = a(n(101760));
            var r = n(548360);
            var c = a(n(940630));
            var d = n(785893);
            const u = ["productMsgs", "chat"];
        },
        268167: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.BubbleIcon = function (e) {
                const {
                    iconXstyle: t,
                    height: n,
                    width: a,
                    viewBox: d
                } = e;
                const u = (0, o.default)(e, c);
                let f;
                if (d) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: a = 0
                    } = d;
                    f = [e, t, n, a].join(" ");
                } {
                    var p;
                    let e = 24;
                    let o = 24;
                    if (!(n == null && a == null)) {
                        e = n;
                        o = a;
                    }
                    return (0, r.jsx)(l.BaseSvgSpan, (0, i.default)((0, i.default)({
                        name: "bubble"
                    }, u), {}, {
                        children: (0, r.jsx)("svg", {
                            viewBox: (p = f) !== null && p !== undefined ? p : "0 0 24 24",
                            height: e,
                            width: o,
                            preserveAspectRatio: "xMidYMid meet",
                            className: (0, s.default)(t),
                            version: "1.1",
                            x: "0px",
                            y: "0px",
                            enableBackground: "new 0 0 24 24",
                            xmlSpace: "preserve",
                            children: (0, r.jsx)("path", {
                                fill: "currentColor",
                                d: "M19.2,4H4.8C3.8,4,3,4.8,3,5.8V22l3.6-3.6h12.6c1,0,1.8-0.8,1.8-1.8V5.8C21,4.8,20.2,4,19.2,4z M19.2,16.6 H6.6l-1.8,1.8V5.8h14.4V16.6z"
                            })
                        })
                    }));
                }
            };
            var i = a(n(81109));
            var o = a(n(506479));
            var l = n(220584);
            var s = a(n(156720));
            var r = n(785893);
            const c = ["iconXstyle", "height", "width", "viewBox"];
        },
        230255: (e, t, n) => {
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
                    width: d,
                    viewBox: u
                } = e;
                const f = (0, o.default)(e, c);
                let p;
                if (u) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: a = 0
                    } = u;
                    p = [e, t, n, a].join(" ");
                }
                let h = 13;
                let m = 21;
                if (!(a == null && d == null)) {
                    h = a;
                    m = d;
                }
                return (0, r.jsx)(l.BaseSvgSpan, (0, i.default)((0, i.default)({
                    name: "chat-info-video"
                }, f), {}, {
                    children: (0, r.jsx)("svg", {
                        viewBox: (t = p) !== null && t !== undefined ? t : "0 0 21 13",
                        height: h,
                        width: m,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, s.default)(n),
                        fill: "none",
                        children: (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M13.17.5c1.11 0 2.009.9 2.009 2.009v8.482c0 1.11-.9 2.009-2.01 2.009H2.01C.899 13 0 12.1 0 10.991V2.51C0 1.399.9.5 2.009.5h11.16Zm7.17 1.746a.893.893 0 0 1 .196.558v7.892a.893.893 0 0 1-1.45.697l-3.015-2.41V4.517l3.014-2.411a.893.893 0 0 1 1.255.14Z",
                            fill: "#00A884"
                        })
                    })
                }));
            };
            var i = a(n(81109));
            var o = a(n(506479));
            var l = n(220584);
            var s = a(n(156720));
            var r = n(785893);
            const c = ["iconXstyle", "height", "width", "viewBox"];
        },
        672185: (e, t, n) => {
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
                    width: d,
                    viewBox: u
                } = e;
                const f = (0, o.default)(e, c);
                let p;
                if (u) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: a = 0
                    } = u;
                    p = [e, t, n, a].join(" ");
                }
                let h = 16;
                let m = 21;
                if (!(a == null && d == null)) {
                    h = a;
                    m = d;
                }
                return (0, r.jsx)(l.BaseSvgSpan, (0, i.default)((0, i.default)({
                    name: "forward-filled"
                }, f), {}, {
                    children: (0, r.jsx)("svg", {
                        viewBox: (t = p) !== null && t !== undefined ? t : "0 0 21 16",
                        height: h,
                        width: m,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, s.default)(n),
                        fill: "none",
                        children: (0, r.jsx)("path", {
                            d: "M12.778 1.31318C12.778 0.590175 13.651 0.228175 14.161 0.739175L20.206 6.79017C20.2813 6.8654 20.341 6.95472 20.3817 7.05304C20.4225 7.15136 20.4435 7.25675 20.4435 7.36317C20.4435 7.4696 20.4225 7.57499 20.3817 7.67331C20.341 7.77163 20.2813 7.86095 20.206 7.93617L14.161 13.9872C14.0476 14.1006 13.9032 14.1779 13.7459 14.2091C13.5886 14.2404 13.4256 14.2243 13.2775 14.1628C13.1294 14.1013 13.0028 13.9973 12.9139 13.8638C12.825 13.7304 12.7777 13.5735 12.778 13.4132V10.6812C7.68197 10.6812 3.94897 12.1362 1.17397 15.2922C0.927967 15.5712 0.471967 15.3342 0.571967 14.9762C2.00197 9.80317 5.49697 4.97218 12.778 3.93118V1.31318Z",
                            fill: "currentColor"
                        })
                    })
                }));
            };
            var i = a(n(81109));
            var o = a(n(506479));
            var l = n(220584);
            var s = a(n(156720));
            var r = n(785893);
            const c = ["iconXstyle", "height", "width", "viewBox"];
        },
        328150: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.KeepInChatMediaIcon = function (e) {
                const {
                    iconXstyle: t,
                    height: n,
                    width: a,
                    viewBox: d
                } = e;
                const u = (0, o.default)(e, c);
                let f;
                if (d) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: a = 0
                    } = d;
                    f = [e, t, n, a].join(" ");
                } {
                    var p;
                    let e = 24;
                    let o = 24;
                    if (!(n == null && a == null)) {
                        e = n;
                        o = a;
                    }
                    return (0, r.jsx)(l.BaseSvgSpan, (0, i.default)((0, i.default)({
                        name: "keep-in-chat-media"
                    }, u), {}, {
                        children: (0, r.jsx)("svg", {
                            viewBox: (p = f) !== null && p !== undefined ? p : "0 0 24 24",
                            height: e,
                            width: o,
                            preserveAspectRatio: "xMidYMid meet",
                            className: (0, s.default)(t),
                            fill: "none",
                            children: (0, r.jsx)("path", {
                                d: "m17 3h-10c-1.1 0-1.99.9-1.99 2l-.01 16 7-3 7 3v-16c0-1.1-.9-2-2-2z",
                                fill: "currentColor"
                            })
                        })
                    }));
                }
            };
            var i = a(n(81109));
            var o = a(n(506479));
            var l = n(220584);
            var s = a(n(156720));
            var r = n(785893);
            const c = ["iconXstyle", "height", "width", "viewBox"];
        },
        247442: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ReactionsMediaIcon = function (e) {
                const {
                    iconXstyle: t,
                    height: n,
                    width: a,
                    viewBox: d
                } = e;
                const u = (0, o.default)(e, c);
                let f;
                if (d) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: a = 0
                    } = d;
                    f = [e, t, n, a].join(" ");
                } {
                    var p;
                    let e = 15;
                    let o = 15;
                    if (!(n == null && a == null)) {
                        e = n;
                        o = a;
                    }
                    return (0, r.jsx)(l.BaseSvgSpan, (0, i.default)((0, i.default)({
                        name: "reactions-media"
                    }, u), {}, {
                        children: (0, r.jsx)("svg", {
                            viewBox: (p = f) !== null && p !== undefined ? p : "0 0 15 15",
                            height: e,
                            width: o,
                            preserveAspectRatio: "xMidYMid meet",
                            className: (0, s.default)(t),
                            fill: "none",
                            children: (0, r.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M0 7.5C0 11.6305 3.36946 15 7.5 15C11.6527 15 15 11.6305 15 7.5C15 3.36946 11.6305 0 7.5 0C3.36946 0 0 3.36946 0 7.5ZM10.995 8.69333C11.1128 8.67863 11.2219 8.66503 11.3211 8.65309C11.61 8.63028 11.8076 8.91918 11.6784 9.13965C10.8573 10.6374 9.29116 11.793 7.50455 11.793C5.71794 11.793 4.15181 10.6602 3.33072 9.16246C3.18628 8.91918 3.37634 8.63028 3.66524 8.65309C3.79123 8.66749 3.93521 8.68511 4.09426 8.70457C4.94292 8.80842 6.22074 8.96479 7.48174 8.96479C8.81855 8.96479 10.1378 8.80025 10.995 8.69333ZM5.41405 7.37207C6.05761 7.37207 6.60923 6.72851 6.60923 6.02978C6.60923 5.30348 6.05761 4.6875 5.41405 4.6875C4.77048 4.6875 4.21886 5.33106 4.21886 6.02978C4.20967 6.75609 4.77048 7.37207 5.41405 7.37207ZM10.7807 6.05619C10.7807 6.74114 10.24 7.37201 9.60912 7.37201C8.97825 7.37201 8.4375 6.76818 8.4375 6.05619C8.4375 5.37124 8.97825 4.74037 9.60912 4.74037C10.24 4.74037 10.7807 5.34421 10.7807 6.05619Z",
                                fill: "currentColor"
                            })
                        })
                    }));
                }
            };
            var i = a(n(81109));
            var o = a(n(506479));
            var l = n(220584);
            var s = a(n(156720));
            var r = n(785893);
            const c = ["iconXstyle", "height", "width", "viewBox"];
        },
        604668: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ReplyIcon = function (e) {
                const {
                    iconXstyle: t,
                    height: n,
                    width: a,
                    viewBox: d
                } = e;
                const u = (0, o.default)(e, c);
                let f;
                if (d) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: a = 0
                    } = d;
                    f = [e, t, n, a].join(" ");
                } {
                    var p;
                    let e = 24;
                    let o = 24;
                    if (!(n == null && a == null)) {
                        e = n;
                        o = a;
                    }
                    return (0, r.jsx)(l.BaseSvgSpan, (0, i.default)((0, i.default)({
                        name: "reply"
                    }, u), {}, {
                        children: (0, r.jsx)("svg", {
                            viewBox: (p = f) !== null && p !== undefined ? p : "0 0 24 24",
                            height: e,
                            width: o,
                            preserveAspectRatio: "xMidYMid meet",
                            className: (0, s.default)(t),
                            version: "1.1",
                            x: "0px",
                            y: "0px",
                            xmlSpace: "preserve",
                            children: (0, r.jsx)("path", {
                                fill: "currentColor",
                                d: "M9.72,7.43C17,8.47,20.5,13.3,21.93,18.48 c0.1,0.36-0.36,0.59-0.6,0.32c-2.77-3.16-6.51-4.61-11.6-4.61v2.73c0,0.72-0.87,1.08-1.38,0.57l-6.05-6.05 c-0.32-0.32-0.32-0.83,0-1.15l6.05-6.05c0.51-0.51,1.38-0.15,1.38,0.57V7.43z"
                            })
                        })
                    }));
                }
            };
            var i = a(n(81109));
            var o = a(n(506479));
            var l = n(220584);
            var s = a(n(156720));
            var r = n(785893);
            const c = ["iconXstyle", "height", "width", "viewBox"];
        },
        220279: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.UndoKeepInChatMediaIcon = function (e) {
                const {
                    iconXstyle: t,
                    height: n,
                    width: a,
                    viewBox: d
                } = e;
                const u = (0, o.default)(e, c);
                let f;
                if (d) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: a = 0
                    } = d;
                    f = [e, t, n, a].join(" ");
                } {
                    var p;
                    let e = 24;
                    let o = 24;
                    if (!(n == null && a == null)) {
                        e = n;
                        o = a;
                    }
                    return (0, r.jsx)(l.BaseSvgSpan, (0, i.default)((0, i.default)({
                        name: "undo-keep-in-chat-media"
                    }, u), {}, {
                        children: (0, r.jsx)("svg", {
                            viewBox: (p = f) !== null && p !== undefined ? p : "0 0 25 24",
                            height: e,
                            width: o,
                            preserveAspectRatio: "xMidYMid meet",
                            className: (0, s.default)(t),
                            fill: "none",
                            children: (0, r.jsx)("path", {
                                clipRule: "evenodd",
                                d: "m18 3h-10.00003c-1.1 0-1.99.9-1.99 2l-.0005.79529 13.99053 8.04121v-8.8365c0-1.1-.9-2-2-2zm2 14.9115 3.8749 2.2272.9967-1.734-22.97977-13.20787-.996627 1.73399 5.111727 2.93802-.00696 11.13116 7.00003-3 7 3z",
                                fill: "currentColor",
                                fillRule: "evenodd"
                            })
                        })
                    }));
                }
            };
            var i = a(n(81109));
            var o = a(n(506479));
            var l = n(220584);
            var s = a(n(156720));
            var r = n(785893);
            const c = ["iconXstyle", "height", "width", "viewBox"];
        },
        677658: (e, t, n) => {
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
                    width: d,
                    viewBox: u
                } = e;
                const f = (0, o.default)(e, c);
                let p;
                if (u) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: a = 0
                    } = u;
                    p = [e, t, n, a].join(" ");
                }
                let h = 24;
                let m = 24;
                if (!(a == null && d == null)) {
                    h = a;
                    m = d;
                }
                return (0, r.jsx)(l.BaseSvgSpan, (0, i.default)((0, i.default)({
                    name: "unpinned"
                }, f), {}, {
                    children: (0, r.jsxs)("svg", {
                        viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 24",
                        height: h,
                        width: m,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, s.default)(n),
                        fill: "none",
                        children: [(0, r.jsx)("path", {
                            d: "M15.9984 10.6491V4.28906H16.9984V2.28906H7.64844L15.9984 10.6491Z",
                            fill: "currentColor"
                        }), (0, r.jsx)("path", {
                            d: "M16 11.7291V4.28906H17V2.28906H7V2.71906L16 11.7291Z",
                            fill: "currentColor"
                        }), (0, r.jsx)("path", {
                            d: "M21.21 19.7395L4.23 2.73945C4.03 2.53945 3.79 2.43945 3.52 2.43945C3.25 2.43945 3.01 2.53945 2.81 2.73945C2.61 2.93945 2.51 3.17945 2.5 3.44945C2.5 3.71945 2.59 3.95945 2.79 4.15945L8.01 9.36945V11.2795L6.00999 13.2795V15.2795H11.01V21.2795L12.01 22.2795L13.01 21.2795V15.2795H13.93L19.79 21.1295C19.99 21.3295 20.23 21.4295 20.5 21.4295C20.77 21.4295 21.01 21.3295 21.21 21.1295C21.41 20.9295 21.51 20.6995 21.51 20.4295C21.51 20.1595 21.41 19.9295 21.21 19.7295V19.7395Z",
                            fill: "currentColor"
                        }), (0, r.jsx)("path", {
                            d: "M21.21 19.7395L4.23 2.73945C4.03 2.53945 3.79 2.43945 3.52 2.43945C3.25 2.43945 3.01 2.53945 2.81 2.73945C2.61 2.93945 2.51 3.17945 2.5 3.44945C2.5 3.71945 2.59 3.95945 2.79 4.15945L8.01 9.36945V11.2795L6.00999 13.2795V15.2795H11.01V21.2795L12.01 22.2795L13.01 21.2795V15.2795H13.93L19.79 21.1295C19.99 21.3295 20.23 21.4295 20.5 21.4295C20.77 21.4295 21.01 21.3295 21.21 21.1295C21.41 20.9295 21.51 20.6995 21.51 20.4295C21.51 20.1595 21.41 19.9295 21.21 19.7295V19.7395Z",
                            fill: "currentColor"
                        })]
                    })
                }));
            };
            var i = a(n(81109));
            var o = a(n(506479));
            var l = n(220584);
            var s = a(n(156720));
            var r = n(785893);
            const c = ["iconXstyle", "height", "width", "viewBox"];
        },
        190848: (e, t, n) => {
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
                    width: d,
                    viewBox: u
                } = e;
                const f = (0, o.default)(e, c);
                let p;
                if (u) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: a = 0
                    } = u;
                    p = [e, t, n, a].join(" ");
                }
                let h = 22;
                let m = 22;
                if (!(a == null && d == null)) {
                    h = a;
                    m = d;
                }
                return (0, r.jsx)(l.BaseSvgSpan, (0, i.default)((0, i.default)({
                    name: "voice-call-filled"
                }, f), {}, {
                    children: (0, r.jsx)("svg", {
                        viewBox: (t = p) !== null && t !== undefined ? t : "0 0 22 22",
                        height: h,
                        width: m,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, s.default)(n),
                        fill: "none",
                        children: (0, r.jsx)("path", {
                            d: "M19.685 14.3869L16.7217 14.0486C16.0101 13.9669 15.3101 14.2119 14.8084 14.7136L12.6617 16.8602C9.36005 15.1802 6.65338 12.4852 4.97338 9.17188L7.13172 7.01355C7.63338 6.51188 7.87838 5.81188 7.79672 5.10022L7.45838 2.16022C7.31838 0.981882 6.32672 0.0952148 5.13672 0.0952148H3.11838C1.80005 0.0952148 0.703381 1.19188 0.785047 2.51022C1.40338 12.4736 9.37172 20.4302 19.3234 21.0486C20.6417 21.1302 21.7384 20.0336 21.7384 18.7152V16.6969C21.75 15.5186 20.8634 14.5269 19.685 14.3869Z",
                            fill: "currentColor"
                        })
                    })
                }));
            };
            var i = a(n(81109));
            var o = a(n(506479));
            var l = n(220584);
            var s = a(n(156720));
            var r = n(785893);
            const c = ["iconXstyle", "height", "width", "viewBox"];
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
                const [n, a] = (0, l.useFlow)(r.Chats, {
                    transitions: l.FlowTransitions.DrawerLeft,
                    onEnd: t
                });
                if (a.step == null) {
                    return null;
                }
                let c;
                switch (a.step) {
                    case r.Chats:
                        c = (0, s.jsx)(i.default, {
                            settings: o.default,
                            onClose: () => {
                                a.pop();
                            }
                        });
                }
                return (0, s.jsx)(n, {
                    flow: a,
                    children: c
                });
            };
            var i = a(n(854534));
            var o = a(n(634152));
            var l = n(839062);
            var s = n(785893);
            const r = n(76672).Mirrored(["Chats"]);
        },
        339257: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.InfoFlow = undefined;
            var i = a(n(348926));
            var o = n(898817);
            var l = a(n(670983));
            var s = a(n(229922));
            var r = n(72696);
            var c = a(n(55423));
            var d = a(n(791865));
            var u = n(374660);
            var f = n(780549);
            var p = n(103440);
            var h = a(n(655237));
            var m = n(834110);
            var g = a(n(41493));
            var x = n(568550);
            var v = n(900316);
            var b = a(n(365889));
            var C = n(56884);
            var M = a(n(649391));
            var j = a(n(941943));
            var _ = n(408256);
            var y = n(393609);
            var S = a(n(596090));
            var k = n(113269);
            var P = a(n(422325));
            var w = n(147550);
            var T = a(n(302112));
            var E = n(306472);
            var I = n(114850);
            var A = a(n(550506));
            var N = a(n(58880));
            var R = n(73225);
            var O = a(n(751046));
            var D = n(95589);
            var L = a(n(386067));
            var B = n(932523);
            var G = n(77548);
            var F = a(n(614058));
            var V = a(n(632289));
            var H = n(559016);
            var U = a(n(898707));
            var W = n(242677);
            var Y = a(n(559893));
            var z = n(977575);
            var q = n(316348);
            var K = n(555622);
            var X = a(n(87979));
            var Z = n(470824);
            var J = n(111971);
            var Q = n(238669);
            var $ = n(377773);
            var ee = n(804477);
            var te = n(130756);
            var ne = a(n(556869));
            var ae = n(548360);
            var ie = n(667294);
            var oe = n(839062);
            var le = a(n(17533));
            var se = a(n(895851));
            var re = n(785893);
            const ce = w.InfoFlowStep;
            const de = e => {
                var t;
                if (e.isGroup) {
                    return ce.GroupInfo;
                }
                if (e.isBroadcast) {
                    return ce.BroadcastInfo;
                }
                if (e.isUser) {
                    return ce.ContactInfo;
                }
                if (e.isNewsletter) {
                    return ce.NewsletterInfo;
                }
                const n = (t = e.kind) !== null && t !== undefined ? t : "undefined";
                throw (0, ne.default)(`Invalid chat provided of kind ${n}`);
            };
            const ue = (0, ie.forwardRef)((e, t) => {
                const {
                    chat: n,
                    initialStep: a = de(n),
                    showFullGroupDescription: w,
                    scrollToParticipantList: ne,
                    profileEntryPoint: ue,
                    onEnd: fe,
                    displayName: pe,
                    sourceGroupChat: he
                } = e;
                const me = (0, ie.useRef)(0);
                const ge = (0, le.default)(e => {
                    me.current = e;
                });
                const xe = (0, ie.useRef)(undefined);
                const ve = (0, ie.useContext)(x.DrawerContext);
                const [be, Ce] = (0, oe.useFlow)(a, {
                    transitions: oe.FlowTransitions.DrawerRight,
                    onEnd: fe
                });
                const [Me, je] = (0, ie.useState)(null);
                const [_e, ye] = (0, ie.useState)(undefined);
                const [Se, ke] = (0, ie.useState)(null);
                const [Pe, we] = (0, ie.useState)(null);
                const [Te, Ee] = (0, ie.useState)(null);
                const [Ie, Ae] = (0, ie.useState)(null);
                const [Ne, Re] = (0, ie.useState)(null);
                (0, ie.useEffect)(() => {
                    if (n.isGroup) {
                        (0, k.queryAndUpdateGroupMetadataById)(n.id, "interactive");
                    } else if (n.isUser && n.contact.isBusiness && (0, r.canSeeBizProfileV3)()) {
                        v.DrawerManager.setDrawerContext("right", (0, B.buildProductCatalogContext)(new W.ProductCatalogSession(), (0, m.getMaybeBizPlatformForLogging)(n.contact.id.toString()), te.CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_PROFILE));
                    }
                }, []);
                const Oe = (e, t) => {
                    je(e);
                    ye(t);
                    Ce.push(ce.ProductDetail);
                };
                const De = e => {
                    ke(e);
                    Ce.push(ce.ProductCollection);
                };
                const Le = e => {
                    je(e);
                    Ce.push(ce.ProductLink);
                };
                const Be = e => {
                    je(e);
                    Ce.push(ce.ProductInfo);
                };
                const Ge = (e, t) => {
                    we(e);
                    Ee(t);
                    Ce.push(ce.CatalogLink);
                };
                const Fe = e => {
                    const t = (0, B.getProductCatalogContext)(ve);
                    if ((0, c.default)(e, n, t)) {
                        Ae(e);
                        Ce.push(ce.Cart);
                    }
                };
                const Ve = (e, t) => {
                    const a = n.id;
                    K.QPL.markerStart(q.QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW, {
                        annotations: {
                            string: {
                                EntryPoint: t
                            }
                        }
                    });
                    (0, G.logCarouselViewMoreClick)({
                        catalogOwnerWid: a,
                        catalogContext: e
                    });
                    Ce.push(ce.Catalog);
                };
                const He = () => {
                    I.ModalManager.open((0, re.jsx)(p.ConfirmPopup, {
                        onOK: () => I.ModalManager.close(),
                        okText: ae.fbt._("OK", null, {
                            hk: "4oTrfy"
                        }),
                        children: ae.fbt._("Only admins can edit this group's info", null, {
                            hk: "1a2ztg"
                        })
                    }));
                };
                const Ue = (0, se.default)();
                const We = function () {
                    var t = (0, i.default)(function* (t) {
                        yield(0, s.default)((0, Z.setGroupSubject)(e.chat, t), Ue).catch((0, o.catchAbort)(() => {})).catch(() => {
                            __LOG__(3)`name_group_modal:onSetSubject failed`;
                        });
                        I.ModalManager.close();
                        Ce.push(ce.GroupInviteLink);
                    });
                    return function () {
                        return t.apply(this, arguments);
                    };
                }();
                const Ye = () => {
                    var e;
                    if ((0, u.isInviteGrowthLockedGroup)(n)) {
                        var t;
                        const e = !!((t = n.groupMetadata) === null || t === undefined ? undefined : t.participants.iAmAdmin());
                        (0, y.openGrowthLockedModal)(e, true);
                    } else if ((e = n.groupMetadata) === null || e === undefined ? undefined : e.isUnnamed) {
                        var a;
                        var i;
                        const e = ae.fbt._("This group was created without a name. Give it a name to share the group link.", null, {
                            hk: "1uQedr"
                        });
                        I.ModalManager.open((0, re.jsx)(A.default, {
                            chat: n,
                            subtext: e,
                            onCancel: () => I.ModalManager.close(),
                            onOK: We,
                            editable: (a = n.groupMetadata) === null || a === undefined ? undefined : a.canSetSubject(),
                            editRestrictionInfo: ((i = n.groupMetadata) === null || i === undefined ? undefined : i.restrict) ? He : undefined
                        }));
                    } else {
                        Ce.push(ce.GroupInviteLink);
                    }
                };
                const ze = e => {
                    Ee(e || n.contact);
                    Ce.push(ce.Verification);
                };
                const qe = () => {
                    if ((0, $.shouldShowNUX)(D.NUX.EPHEMERAL) && (0, C.isKeepInChatVisibleUIEnabled)()) {
                        I.ModalManager.open((0, re.jsx)(M.default, {
                            chat: n,
                            fromMe: true,
                            onOk: () => Ce.push(ce.Ephemeral)
                        }));
                    } else {
                        Ce.push(ce.Ephemeral);
                    }
                };
                const Ke = () => {
                    var e;
                    const t = (e = n.groupMetadata) === null || e === undefined ? undefined : e.parentGroup;
                    if (t) {
                        f.Cmd.openCommunityHome(t, true);
                    }
                };
                const Xe = () => {
                    Ce.end(Q.DismissReason.LIFECYCLE);
                };
                const Ze = () => {
                    xe.current = undefined;
                    me.current = 0;
                    Ce.push(ce.MediaGallery);
                };
                const Je = () => {
                    xe.current = E.TABS.PRODUCTS;
                    Ce.pop();
                };
                if (!Ce.step) {
                    return null;
                }
                const Qe = he != null ? he : n;
                let $e;
                switch (Ce.step) {
                    case ce.GroupInfo:
                        $e = (0, re.jsx)(j.default, {
                            chat: Qe,
                            showFullGroupDescription: w,
                            scrollToParticipantList: ne,
                            groupMetadata: Qe.groupMetadata,
                            contact: Qe.contact,
                            profilePicThumb: Qe.contact.getProfilePicThumb(),
                            onVerification: ze,
                            onStarred: () => Ce.push(ce.Starred),
                            onKept: () => Ce.push(ce.Kept),
                            onSentForAdminReview: () => Ce.push(ce.SentForAdminReview),
                            onMediaGallery: Ze,
                            onAdminSetting: () => Ce.push(ce.GroupSettings),
                            onGroupInviteLink: Ye,
                            onPendingParticipants: () => Ce.push(ce.PendingParticipants),
                            onEphemeral: qe,
                            onCommunityClick: Ke,
                            onClose: () => {
                                if (he) {
                                    Ce.end();
                                } else {
                                    Ce.pop();
                                }
                            }
                        });
                        break;
                    case ce.SentForAdminReview:
                        $e = (0, re.jsx)(X.default, {
                            chat: n,
                            onClose: () => Ce.pop()
                        });
                        break;
                    case ce.BroadcastInfo:
                        $e = (0, re.jsx)(d.default, {
                            chat: n,
                            contact: n.contact,
                            onStarred: () => Ce.push(ce.Starred),
                            onMediaGallery: Ze,
                            onClose: () => Ce.pop()
                        });
                        break;
                    case ce.ContactInfo:
                        $e = (0, re.jsx)(h.default, {
                            contact: n.contact,
                            onVerification: ze,
                            onStarred: () => Ce.push(ce.Starred),
                            onKept: () => Ce.push(ce.Kept),
                            onMediaGallery: Ze,
                            onProductCatalog: Ve,
                            onProductDetail: Oe,
                            onEphemeral: qe,
                            onClose: () => Ce.pop(),
                            profileEntryPoint: ue,
                            onBack: he ? () => {
                                Ce.push(ce.GroupInfo);
                            } : null
                        });
                        break;
                    case ce.NewsletterInfo:
                        if ((0, R.isNewsletterEnabled)()) {
                            $e = (0, re.jsx)(O.default, {
                                chat: n,
                                newsletterMetadata: n.newsletterMetadata,
                                profilePicThumb: n.contact.getProfilePicThumb(),
                                onClose: () => Ce.pop(),
                                onDeleteNewsletter: () => Ce.push(ce.DeleteNewsletter)
                            });
                        }
                        break;
                    case ce.DeleteNewsletter:
                        $e = (0, re.jsx)(N.default, {
                            chat: n,
                            onBack: () => Ce.pop()
                        });
                        break;
                    case ce.ProductDetail:
                        $e = (0, re.jsx)(F.default, {
                            chat: n,
                            collectionId: _e,
                            product: (0, l.default)(Me, "product"),
                            onEnd: Xe,
                            onBack: Je,
                            refreshCarousel: false,
                            onProductLinkClick: Le,
                            onProductMoreInformation: Be,
                            onCartClick: Fe
                        });
                        break;
                    case ce.ProductCollection: {
                        const e = n.id;
                        $e = (0, re.jsx)(z.CollectionContentDrawer, {
                            contact: n.contact,
                            onProductDetail: Oe,
                            catalogId: e,
                            onBack: () => Ce.pop(),
                            onCatalogLinkClick: Ge,
                            onCartClick: Fe,
                            collection: (0, l.default)(Se, "collection")
                        });
                        break;
                    }
                    case ce.ProductLink:
                        $e = (0, re.jsx)(V.default, {
                            product: (0, l.default)(Me, "product"),
                            onBack: () => Ce.pop()
                        });
                        break;
                    case ce.ProductInfo:
                        $e = (0, re.jsx)(U.default, {
                            product: (0, l.default)(Me, "product"),
                            onBack: Je
                        });
                        break;
                    case ce.CatalogLink:
                        $e = (0, re.jsx)(L.default, {
                            catalog: (0, l.default)(Pe, "catalog"),
                            contact: (0, l.default)(Te, "contact"),
                            onBack: () => Ce.pop()
                        });
                        break;
                    case ce.Cart: {
                        const e = (0, B.getProductCatalogContext)(ve);
                        const t = (0, c.default)((0, l.default)(Ie, "cartId"), n, e);
                        $e = (0, l.default)(t, "cartFlow");
                        break;
                    }
                    case ce.Catalog:
                        $e = (0, re.jsx)(Y.default, {
                            contact: n.contact,
                            onProductDetail: Oe,
                            catalogId: n.id,
                            onBack: () => Ce.pop(),
                            businessProfile: n.contact.businessProfile,
                            onCatalogLinkClick: Ge,
                            onCartClick: Fe,
                            onCollectionSeeAll: De
                        });
                        break;
                    case ce.ProductList:
                        $e = (0, re.jsx)(H.ProductListDrawer, {
                            contact: n.contact,
                            onProductDetail: Oe,
                            catalogId: n.id,
                            onBack: () => Ce.pop(),
                            businessProfile: n.contact.businessProfile,
                            onCatalogLinkClick: Ge,
                            onCartClick: Fe
                        });
                        break;
                    case ce.Starred:
                        $e = (0, re.jsx)(J.StarredDrawerLoadable, {
                            chat: n,
                            starredMsgs: n.getStarredMsgs(),
                            onClose: () => Ce.pop()
                        });
                        break;
                    case ce.Kept:
                        $e = (0, re.jsx)(T.default, {
                            chat: n,
                            keptMsgs: n.getKeptMsgs(),
                            onClose: () => Ce.pop()
                        });
                        break;
                    case ce.GroupSettings:
                        $e = (0, re.jsx)(P.default, {
                            chat: n,
                            groupMetadata: n.groupMetadata,
                            onClose: () => Ce.pop()
                        });
                        break;
                    case ce.MediaGallery:
                        $e = (0, re.jsx)(E.MediaGalleryDrawer, {
                            chat: n,
                            onBack: () => Ce.pop(),
                            onProductDetail: Oe,
                            setProductsScrollOffset: ge,
                            initialTab: xe.current,
                            productsScrollOffset: me.current
                        });
                        break;
                    case ce.GroupInviteLink:
                        $e = (0, re.jsx)(_.GroupInviteLinkDrawerLoadable, {
                            chat: n,
                            groupMetadata: (0, l.default)(n.groupMetadata, "chat.groupMetadata"),
                            onBack: () => Ce.pop(),
                            onGroupSettings: () => Ce.push(ce.GroupSettings)
                        });
                        break;
                    case ce.PendingParticipants:
                        $e = (0, re.jsx)(S.default, {
                            chat: n,
                            onBack: () => Ce.pop()
                        });
                        break;
                    case ce.Verification:
                        $e = (0, re.jsx)(ee.VerificationDrawerLoadable, {
                            contact: (0, l.default)(Te, "contact"),
                            onClose: () => Ce.pop(),
                            isFirstLevel: false
                        });
                        break;
                    case ce.DefaultEphemerality:
                        $e = (0, re.jsx)(g.default, {
                            onClose: () => Ce.pop(),
                            entryPoint: (0, l.default)(Ne, "defaultEphemeralityEntryPoint")
                        });
                        break;
                    case ce.Ephemeral: {
                        const e = n.isGroup ? te.DISAPPEARING_MODE_ENTRY_POINT_TYPE.GROUP_CHAT_DISAPPEARING_MESSAGES_SETTING : te.DISAPPEARING_MODE_ENTRY_POINT_TYPE.INDIVIDUAL_CHAT_DISAPPEARING_MESSAGES_SETTING;
                        $e = (0, re.jsx)(b.default, {
                            chat: n,
                            showNux: (0, $.shouldShowNUX)(D.NUX.EPHEMERAL),
                            entryPoint: te.EPHEMERAL_SETTING_ENTRY_POINT_TYPE.CHAT_INFO,
                            onClose: () => Ce.pop(),
                            onCloseNux: () => Ce.push(ce.Ephemeral),
                            onDDMSettingsClick: () => {
                                Re(e);
                                return void Ce.push(ce.DefaultEphemerality);
                            }
                        });
                        break;
                    }
                }
                return (0, re.jsx)(be, {
                    ref: t,
                    flow: Ce,
                    displayName: pe,
                    children: $e
                });
            });
            t.InfoFlow = ue;
            ue.displayName = "InfoFlow";
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
                const N = (0, I.default)();
                const R = (0, E.default)();
                const O = (0, y.default)();
                const D = (0, S.default)(() => n.type === m.MSG_TYPE.IMAGE ? new v.UiActionWamEvent({
                    uiActionType: C.UI_ACTION_TYPE.IMAGE_OPEN,
                    uiActionPreloaded: n.mediaData.mediaStage === d.MEDIA_DATA_STAGE.RESOLVED
                }) : null);
                const L = (0, S.default)(() => (0, l.constructMediaMsgs)((0, r.getChat)(n), n));
                const B = L.current.length;
                const G = (0, P.default)(B);
                const F = (0, _.useRef)(null);
                const V = (0, _.useRef)();
                const H = (0, _.useRef)();
                const U = (0, _.useRef)(null);
                const W = (0, _.useRef)(null);
                const Y = (0, _.useRef)(null);
                const [z, q] = (0, _.useState)(n);
                const [K, X] = (0, _.useState)(false);
                const [Z, J] = (0, _.useState)(true);
                const Q = (0, P.default)(z);
                const $ = function () {
                    let e = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
                    const t = W.current;
                    const n = Y.current;
                    const a = U.current;
                    if (!t || !n || !a) {
                        return;
                    }
                    let i = 0;
                    if (a instanceof HTMLElement) {
                        i = a.clientWidth / 2 - t.clientWidth / 2;
                    }
                    (0, b.default)(n, "stop");
                    let o = 0;
                    if (e) {
                        o = 300;
                    }
                    (0, b.default)(a, "scroll", {
                        duration: o,
                        container: n,
                        offset: i,
                        axis: "x",
                        easing: [0.1, 0.82, 0.25, 1]
                    });
                };
                const ee = e => {
                    if (!e) {
                        return true;
                    }
                    const {
                        isViewOnce: t
                    } = e;
                    const n = (0, h.getIsStickerMsg)(e);
                    return !t && !n;
                };
                (0, _.useEffect)(() => {
                    var e;
                    $();
                    if (ee(n) && (e = W.current)) {
                        (0, b.default)(e, {
                            opacity: [1, 0],
                            translateY: ["0%", "100%"]
                        }, {
                            duration: 300,
                            delay: 100,
                            easing: [0.1, 0.82, 0.25, 1]
                        }).then(() => {
                            if (!N.aborted) {
                                J(false);
                            }
                        });
                    }
                }, []);
                (0, _.useEffect)(() => {
                    if (B > (G != null ? G : 0)) {
                        $();
                    }
                });
                const te = e => {
                    R(() => {
                        L.current.loadMoreAroundIfNeeded(e);
                    });
                    q(e);
                };
                const ne = e => {
                    if (e) {
                        e.stopPropagation();
                    }
                    if (K) {
                        return;
                    }
                    const t = z;
                    if (!t) {
                        return;
                    }
                    let a = null;
                    a = L.current.getAfter(t);
                    if (a) {
                        te(a);
                    } else if (L.current.hasMediaAfter) {
                        if (!V.current) {
                            V.current = L.current.queryMedia({
                                chat: (0, r.getChat)(n),
                                msg: n,
                                direction: "after"
                            }).then(e => {
                                if (!N.aborted) {
                                    if (typeof e.length == "number" && e.length > 0 && z === n) {
                                        ne();
                                    }
                                }
                            }).catch(() => {
                                __LOG__(3)`query media msgs error: `;
                            }).finally(() => {
                                V.current = null;
                            });
                        }
                    }
                };
                const ae = e => {
                    if (e) {
                        e.stopPropagation();
                    }
                    if (K) {
                        return;
                    }
                    const t = z;
                    if (!t) {
                        return;
                    }
                    let a = null;
                    a = L.current.getBefore(t);
                    if (a) {
                        te(a);
                    } else if (L.current.hasMediaBefore) {
                        if (!H.current) {
                            H.current = L.current.queryMedia({
                                chat: (0, r.getChat)(n),
                                msg: n,
                                direction: "before"
                            }).then(e => {
                                if (!N.aborted) {
                                    if (typeof e.length == "number" && e.length > 0 && z === n) {
                                        ae();
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
                let ie = null;
                if (n.type === m.MSG_TYPE.IMAGE) {
                    ie = () => {
                        const e = D.current;
                        var t;
                        if (e) {
                            Object.assign(e, (0, M.getGroupCountMetricsFromChatWid)((t = (0, r.getChat)(n)) === null || t === undefined ? undefined : t.id));
                            e.markUiActionT();
                            e.commit();
                            D.current = null;
                        }
                        (0, j.logUiActionShadowPrivateStatsTestEvents)();
                    };
                }
                const oe = () => {
                    p.ModalManager.closeMedia();
                };
                const le = (0, w.default)(() => {
                    q(null);
                    oe();
                });
                const se = (z == null ? undefined : z.isViewOnce) || z && (0, h.getIsStickerMsg)(z);
                (0, k.useListener)(se ? z : null, "revoked", le);
                const re = se ? null : L.current;
                (0, k.useListener)(re, "remove", (e, t, a) => {
                    const i = L.current;
                    const l = z;
                    if (i.includes(n) || l != null && l.id != null && l.id.toString() !== e.id.toString()) {
                        return void O();
                    }
                    const s = a.index;
                    if (i.length === 0) {
                        oe();
                    } else if (i.length === s) {
                        te((0, o.default)(i.at(s - 1), "mediaMsgs.at(index - 1)"));
                    } else {
                        te((0, o.default)(i.at(s), "mediaMsgs.at(index)"));
                    }
                });
                (0, k.useListener)(re, "reset", () => {
                    oe();
                });
                (0, k.useListener)(re, "query_media_after", () => {
                    O();
                });
                (0, k.useListener)(re, "query_media_before", () => {
                    const e = Y.current;
                    if (e) {
                        F.current = e.scrollWidth;
                        if (e instanceof HTMLElement) {
                            O();
                        }
                    }
                });
                (0, k.useListener)(window, "keydown", e => {
                    if (e.defaultPrevented) {
                        return;
                    }
                    const t = c.default.isRTL();
                    if (e.keyCode === i.default.LEFT) {
                        if (t) {
                            ne();
                        } else {
                            ae();
                        }
                    } else if (e.keyCode === i.default.RIGHT) {
                        if (t) {
                            ae();
                        } else {
                            ne();
                        }
                    }
                });
                (0, _.useEffect)(() => {
                    R(() => {
                        if (z) {
                            L.current.loadMoreAroundIfNeeded(z);
                        }
                    });
                }, [z, L, R]);
                (0, _.useEffect)(() => {
                    if (Q !== z) {
                        $(true);
                    } else {
                        const e = Y.current;
                        if (!e || F.current == null || F.current === 0) {
                            return;
                        }
                        if (e instanceof HTMLElement) {
                            e.scrollLeft += e.scrollWidth - F.current;
                        }
                        F.current = null;
                    }
                }, [z, Q]);
                const ce = (0, T.default)((e, t, n) => {
                    if (t.length !== 0 && n != null) {
                        if (t.hasMediaBefore && n < e.clientWidth) {
                            const e = (0, o.default)(t.head(), "mediaMsgs.head()");
                            R(() => {
                                t.queryMedia({
                                    chat: (0, r.getChat)(e),
                                    msg: e
                                });
                                O();
                            });
                        }
                        if (t.hasMediaAfter && n + s.SCROLL_FUDGE > e.scrollWidth - e.clientWidth * 2) {
                            const e = (0, o.default)(t.last(), "mediaMsgs.last()");
                            R(() => {
                                t.queryMedia({
                                    chat: (0, r.getChat)(e),
                                    msg: e,
                                    direction: "after"
                                });
                                O();
                            });
                        }
                    }
                }, 100);
                if (!z) {
                    return null;
                }
                if ((0, r.getChat)(n).isSuspendedOrTerminated() && (0, f.isGroupSuspendV2Enabled)()) {
                    return void(0, g.openSuspendedGroupMediaDownloadFailureModal)();
                }
                const de = L.current;
                const ue = de.last();
                const fe = de.hasMediaAfter || z !== ue ? ne : null;
                const pe = de.head();
                let he = null;
                he = de.hasMediaBefore || z !== pe ? ae : null;
                he = de.hasMediaBefore || z !== pe ? ae : null;
                return (0, A.jsxs)("div", {
                    className: K ? "img-zoomed-in" : null,
                    children: [ee(z) && (0, A.jsx)(x.default, {
                        activeMsg: z,
                        mediaMsgs: L.current,
                        highlightedMsgIds: e.highlightedMsgIds,
                        onSelectThumb: te,
                        onSetActiveThumb: e => {
                            U.current = e;
                        },
                        onScroll: e => {
                            ce(e.currentTarget, L.current, e.currentTarget.scrollLeft);
                        },
                        setRefThumbsContainer: e => {
                            W.current = e;
                        },
                        setRefThumbs: e => {
                            Y.current = e;
                        }
                    }), (0, A.jsx)(u.default, {
                        msg: z,
                        mediaData: z.mediaData,
                        onBack: oe,
                        onExitAnimation: () => {
                            var e;
                            if (ee(n) && (e = W.current)) {
                                (0, b.default)(e, {
                                    opacity: [0, 1],
                                    translateY: ["100%", "0%"]
                                }, {
                                    duration: 300,
                                    easing: [0.1, 0.82, 0.25, 1]
                                });
                            }
                        },
                        onNext: fe,
                        onPrev: he,
                        onImgZoomIn: e => {
                            X(e);
                        },
                        getZoomNode: e.getZoomNode,
                        startTime: e.startTime,
                        isAnimatingIn: Z,
                        onImageLoad: ie,
                        msgIndexInAlbum: (() => {
                            let e = -1;
                            if (!a || !z) {
                                return e;
                            }
                            const t = z.id.toString();
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
                    })]
                });
            };
            var i = a(n(953268));
            var o = a(n(670983));
            var l = n(78810);
            var s = n(914368);
            var r = n(163755);
            var c = a(n(932325));
            var d = n(172259);
            var u = a(n(933147));
            var f = n(97858);
            var p = n(114850);
            var h = n(787742);
            var m = n(373070);
            var g = n(983271);
            var x = a(n(266648));
            var v = n(382117);
            var b = a(n(330619));
            var C = n(130756);
            var M = n(531737);
            var j = n(818674);
            var _ = n(667294);
            var y = a(n(969651));
            var S = a(n(637660));
            var k = n(808446);
            var P = a(n(49710));
            var w = a(n(17533));
            var T = a(n(286481));
            var E = a(n(940630));
            var I = a(n(895851));
            var A = n(785893);
        },
        340576: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.requireBundle = t.SendContactsModalLoadable = undefined;
            var i = a(n(348926));
            var o = a(n(114945));
            var l = a(n(97359));
            var s = a(n(205106));
            var r = a(n(261724));
            var c = n(548360);
            var d = n(785893);
            const u = (0, s.default)((0, i.default)(function* () {
                const e = yield Promise.all([n.e(8295), n.e(1702), n.e(9488), n.e(2790), n.e(275)]).then(n.bind(n, 915132));
                return (0, l.default)(e);
            }), "SendContactsModal");
            t.requireBundle = u;
            const f = (0, o.default)({
                loader: u,
                loading: e => (0, d.jsx)(r.default, {
                    title: c.fbt._("Send contacts", null, {
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
            var i = n(35234);
            var o = n(700071);
            var l = n(351053);
            var s = n(394164);
            var r = n(780549);
            var c = n(174834);
            var d = n(877171);
            var u = a(n(908081));
            var f = a(n(324093));
            var p = n(626194);
            var h = n(811720);
            var m = n(512938);
            var g = a(n(570834));
            var x = a(n(335540));
            var v = n(81644);
            var b = a(n(932325));
            var C = n(97858);
            var M = a(n(237889));
            var j = n(180519);
            var _ = n(548360);
            var y = n(667294);
            var S = a(n(156720));
            var k = a(n(637660));
            var P = n(808446);
            var w = n(655241);
            var T = n(785893);
            const E = {
                borderBottom: "qmxv8cnq",
                backgroundColor: "s9raicp8"
            };
            const I = {
                paddingTop: "n1yiu2zv",
                paddingEnd: "f9ovudaz",
                paddingBottom: "eb4rp10x",
                paddingStart: "gx1rr48f"
            };
            const A = {
                paddingTop: "n1yiu2zv",
                paddingEnd: "h5uqwbaf",
                paddingBottom: "eb4rp10x",
                paddingStart: "kjjye8e3",
                textAlign: "ljrqcn24"
            };
            const N = {
                overflowX: "gfz4du6o",
                overflowY: "r7fjleex"
            };

            function R (e, t) {
                const {
                    onClose: n
                } = e;
                const a = () => l.ChatCollection.filter(e => e.archive && e.shouldAppearInList);
                const R = (0, w.useModelValues)(e.settings, ["showArchiveV2", "archive"]);
                const O = (0, k.default)(() => new g.default());
                const D = (0, k.default)(() => new M.default([], e => e.id.toString()));
                const L = (0, y.useRef)(null);
                const [B, G] = (0, y.useState)(a);
                const F = () => (0, C.archiveV2Supported)() && R.showArchiveV2;
                (0, P.useListener)(l.ChatCollection, [F() ? "sort" : null, "change:archive", "add", "remove"].filter(Boolean), () => {
                    G(a());
                });
                const V = e => {
                    D.current.setVal(e, false);
                };
                (0, P.useListener)(r.Cmd, "close_chat", e => {
                    if (e === D.current.getVal()) {
                        D.current.unset();
                    }
                });
                (0, P.useListener)(r.Cmd, "update_chatlist_selection", V);
                (0, y.useEffect)(() => {
                    if (F()) {
                        const e = a();
                        const t = new Map();
                        e.forEach(e => {
                            e.archiveAtMentionViewedInDrawer = true;
                            t.set(e.id.toString(), true);
                        });
                        (0, i.updateChatArchiveDrawer)(t);
                    }
                    if (L.current) {
                        x.default.focus(L.current);
                    }
                    const e = l.ChatCollection.toArray().find(e => e.active && e.archive);
                    if (e) {
                        V(e);
                    }
                }, []);
                const H = () => {
                    n();
                };
                const U = (e, t) => {
                    r.Cmd.openChatFromUnread(t).then(e => {
                        if (e) {
                            d.ComposeBoxActions.focus(t);
                        }
                    });
                    if (!((0, C.archiveV2Supported)() && R.archive.enabled)) {
                        H();
                    }
                };
                const W = e => {
                    e.preventDefault();
                    e.stopPropagation();
                    D.current.setNext(true);
                };
                const Y = e => {
                    e.preventDefault();
                    e.stopPropagation();
                    D.current.setPrev(true);
                };
                let z;
                let q;
                D.current.init(B, true);
                if ((() => {
                        const e = l.ChatCollection.some(e => e.archive);
                        return (0, C.archiveV2Supported)() && e;
                    })()) {
                    const e = _.fbt._("These chats stay archived when new messages are received. To change this experience, go to Settings > Chats on your phone.", null, {
                        hk: "2GTpJ"
                    });
                    const t = _.fbt._("These chats are unarchived when new messages are received. To change this experience, go to Settings > Chats on your phone.", null, {
                        hk: "2QaWm0"
                    });
                    z = (0, T.jsx)("div", {
                        className: (0, S.default)(E),
                        children: (0, T.jsx)("div", {
                            className: (0, S.default)(I),
                            children: (0, T.jsx)("div", {
                                className: (0, S.default)(A),
                                children: (0, T.jsx)(j.WDSTextMuted, {
                                    as: "p",
                                    children: R.showArchiveV2 ? e : t
                                })
                            })
                        })
                    });
                }
                q = B.length > 0 ? (0, T.jsxs)(v.HotKeys, {
                    ref: L,
                    handlers: {
                        down: W,
                        up: Y
                    },
                    children: [z, (0, T.jsx)(m.FlatList, {
                        className: (0, S.default)(N),
                        data: B.map(e => ({
                            itemKey: e.id.toString(),
                            chat: e,
                            height: (0, c.shouldShowNewSubgroupIdentity)(e.groupMetadata) ? s.SUBGROUP_V2_CHAT_CELL_HEIGHT : undefined
                        })),
                        flatListController: O.current,
                        direction: "vertical",
                        renderItem: e => (0, T.jsx)(o.Chat, {
                            chat: e.chat,
                            mode: o.Mode.LAST,
                            active: D.current,
                            onClick: U,
                            hideArchivedIcon: (0, C.archiveV2Supported)() && R.archive.enabled,
                            hideMuteIcon: F(),
                            hideMuteOption: F(),
                            ephemeralIcon: "chat-list",
                            showCommunityInfo: true
                        })
                    })]
                }) : (0, T.jsx)(h.Archived, {});
                const K = (0, C.archiveV2Supported)() && R.archive.enabled ? _.fbt._("Archived", null, {
                    hk: "3HjzQg"
                }) : b.default.t(136);
                return (0, T.jsxs)(u.default, {
                    ref: t,
                    theme: "archived",
                    children: [(0, T.jsx)(p.DrawerHeader, {
                        title: K,
                        onBack: H,
                        type: p.DRAWER_HEADER_TYPE.LARGE,
                        menu: null
                    }), (0, T.jsx)(f.default, {
                        flatListControllers: [O.current],
                        children: q
                    })]
                });
            }
            var O = (0, y.forwardRef)(R);
            t.default = O;
        },
        302112: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = undefined;
            var i = a(n(348926));
            var o = n(698867);
            var l = n(751461);
            var s = n(356097);
            var r = n(811720);
            var c = n(978752);
            var d = a(n(75531));
            var u = n(130756);
            var f = n(548360);
            var p = n(667294);
            var h = a(n(156720));
            var m = n(785893);
            const g = {
                paddingTop: "s7fqlky6",
                paddingEnd: "iffbo4e8",
                paddingBottom: "q1tx93la",
                paddingStart: "e8k79tju",
                fontSize: "ovllcyds",
                lineHeight: "durt31hz",
                color: "amgz1mtg"
            };

            function x (e, t) {
                const {
                    keptMsgs: n,
                    onClose: a,
                    chat: x
                } = e;
                const [v, b] = (0, c.useKicNux)(x);
                (0, p.useEffect)(() => {
                    if (v) {
                        b(u.TRIGGER_TYPE.KEPT_FOLDER_TAP_FIRST_TIME);
                    }
                }, []);
                (0, p.useEffect)(() => {
                    (0, i.default)(function* () {
                        const e = new l.DisappearingMessageKeepInChatWamEvent({
                            kicActionName: u.KIC_ACTION_NAME_TYPE.VIEW_KEPT_MESSAGES,
                            kicEntryPoint: u.KIC_ENTRY_POINT_TYPE.CHAT_INFO,
                            messagesInFolder: n.length,
                            isAGroup: x == null ? undefined : x.isGroup
                        });
                        var t;
                        if (x == null ? undefined : x.isGroup) {
                            e.set({
                                isAdmin: x == null || (t = x.groupMetadata) === null || t === undefined ? undefined : t.participants.iAmAdmin()
                            });
                        }
                        if (x) {
                            const t = yield(0, o.getChatThreadID)(x == null ? undefined : x.id.toJid());
                            if (t != null) {
                                e.set({
                                    threadId: t
                                });
                            }
                        }
                        e.commit();
                    })();
                }, []);
                const C = f.fbt._("Kept messages", null, {
                    hk: "iGco8"
                });
                const M = (0, m.jsx)(r.KeptMsgs, {});
                let j = null;
                var _;
                if (x == null ? undefined : x.isGroup) {
                    j = ((_ = x.groupMetadata) === null || _ === undefined ? undefined : _.restrict) ? (0, m.jsx)("div", {
                        className: (0, h.default)(g),
                        children: f.fbt._("These messages are kept in the chat for everyone. Only admins can keep or unkeep messages in this group.", null, {
                            hk: "2P8fIj"
                        })
                    }) : (0, m.jsx)("div", {
                        className: (0, h.default)(g),
                        children: f.fbt._("These messages are kept in the chat for everyone. Everyone can keep or unkeep a message. Group admins can limit this.", null, {
                            hk: "3VYBCh"
                        })
                    });
                } else {
                    j = (0, m.jsx)("div", {
                        className: (0, h.default)(g),
                        children: f.fbt._("These messages are kept in the chat for everyone. Everyone can keep or unkeep a message.", null, {
                            hk: "3sFKOP"
                        })
                    });
                }
                return (0, m.jsx)(d.default, {
                    testid: "kept-drawer",
                    ref: t,
                    msgCollection: n,
                    onClose: a,
                    chat: x,
                    title: C,
                    emptyListText: M,
                    descriptionSection: j,
                    displayType: s.DISPLAY_TYPE.KEPT_MSGS
                });
            }
            var v = (0, p.forwardRef)(x);
            t.default = v;
        },
        306472: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.TABS = t.MediaGalleryDrawer = undefined;
            var i = a(n(252628));
            var o = n(328620);
            var l = a(n(638938));
            var s = n(409623);
            var r = a(n(321574));
            var c = a(n(908081));
            var d = a(n(324093));
            var u = n(626194);
            var f = a(n(932325));
            var p = a(n(671597));
            var h = a(n(482530));
            var m = n(97858);
            var g = n(913257);
            var x = a(n(930440));
            var v = a(n(285192));
            var b = a(n(434377));
            var C = n(392632);
            var M = a(n(844453));
            var j = n(548360);
            var _ = n(667294);
            var y = a(n(156720));
            var S = a(n(261716));
            var k = a(n(637660));
            var P = n(785893);
            const w = {
                display: "p357zi0d",
                flexGrow: "ggj6brxn",
                flexShrink: "m0h2a7mj",
                flexBasis: "rjo8vgbg",
                flexDirection: "f8m0rgwh",
                height: "ppled2lx"
            };
            const T = {
                position: "lhggkp7q",
                top: "qq0sjtgm",
                start: "tkdu00h0",
                width: "ln8gz9je",
                height: "ppled2lx"
            };
            const E = n(76672)({
                MEDIA: "media",
                DOCS: "docs",
                LINKS: "links",
                PRODUCTS: "products"
            });
            t.TABS = E;
            const I = e => {
                const {
                    selected: t,
                    onSearch: n
                } = e;
                switch (t) {
                    case E.MEDIA:
                    case E.LINKS:
                    case E.DOCS:
                        return (0, P.jsx)(s.ListSearch, {
                            onSearch: n,
                            loading: false,
                            listFilterEnabled: false,
                            chatlistFilterEnabled: false,
                            mode: l.default.Chatlist,
                            placeholder: j.fbt._("Search", null, {
                                hk: "418EDN"
                            })
                        });
                    default:
                        return null;
                }
            };
            const A = (0, _.forwardRef)((e, t) => {
                const {
                    chat: n,
                    onProductDetail: a,
                    setProductsScrollOffset: l,
                    initialTab: s = E.MEDIA,
                    productsScrollOffset: A = 0
                } = e;
                const [N, R] = (0, _.useState)(s);
                const [O, D] = (0, _.useState)(null);
                const [L, B] = (0, _.useState)(false);
                const [G, F] = (0, S.default)();
                const V = (0, m.mediaLinksDocsFilteringEnabled)();
                const H = (0, k.default)(() => new x.default([], e => e.id.toString()));
                const U = () => {
                    if (L) {
                        H.current.unsetAll();
                        B(false);
                    }
                };
                const W = (e, t) => {
                    if (!L) {
                        B(true);
                    }
                    H.current.setVal(e, t);
                    if (H.current.getSelected().length === 0) {
                        U();
                    }
                };
                const Y = (0, _.useCallback)(e => {
                    const t = E.cast(e);
                    if (t == null) {
                        return;
                    }
                    const n = (0, i.default)(E).indexOf(N);
                    const a = (0, i.default)(E).indexOf(t);
                    if (n !== a) {
                        H.current.unsetAll();
                    }
                    R(t);
                    D(a > n ? "right" : "left");
                    B(false);
                }, [H, N]);
                const z = (0, _.useMemo)(() => {
                    const e = [{
                        id: E.MEDIA,
                        title: f.default.t(416)
                    }, {
                        id: E.DOCS,
                        title: f.default.t(243)
                    }, {
                        id: E.LINKS,
                        title: f.default.t(394)
                    }];
                    e.push({
                        id: E.PRODUCTS,
                        title: j.fbt._("Products", null, {
                            hk: "3Ky71N"
                        })
                    });
                    return (0, P.jsx)(b.default, {
                        tabConfigs: e,
                        selectedId: N,
                        onSelect: Y,
                        testIdPrefix: "gallery-tab"
                    });
                }, [N, Y]);
                const q = function (e) {
                    switch (e) {
                        case E.MEDIA:
                            return g.MultiSelectBarEntryPoint.MEDIA;
                        case E.DOCS:
                            return g.MultiSelectBarEntryPoint.DOCS;
                        case E.LINKS:
                            return g.MultiSelectBarEntryPoint.LINKS;
                        case E.PRODUCTS:
                            return g.MultiSelectBarEntryPoint.PRODUCTS;
                    }
                }(N);
                const K = (() => {
                    let e;
                    switch (N) {
                        case E.MEDIA:
                            e = (0, P.jsx)(h.default, {
                                chat: n,
                                mediaMsgs: n.getMediaMsgs(),
                                selectable: L,
                                onMessageSelect: W,
                                selectedMessages: H.current,
                                fullCollection: true,
                                isFilterEnabled: V,
                                filterText: G
                            });
                            break;
                        case E.LINKS:
                            e = (0, P.jsx)(p.default, {
                                chat: n,
                                linkMsgs: n.getLinkMsgs(),
                                selectable: L,
                                onMessageSelect: W,
                                selectedMessages: H.current,
                                isFilterEnabled: V,
                                filterText: G
                            });
                            break;
                        case E.DOCS:
                            e = (0, P.jsx)(r.default, {
                                chat: n,
                                docMsgs: n.getDocMsgs(),
                                selectable: L,
                                onMessageSelect: W,
                                selectedMessages: H.current,
                                isFilterEnabled: V,
                                filterText: G
                            });
                            break;
                        case E.PRODUCTS:
                            e = (0, P.jsx)(v.default, {
                                chat: n,
                                productMsgs: n.getProductMsgs(),
                                selectable: L,
                                onMessageSelect: W,
                                selectedMessages: H.current,
                                onProductDetail: a,
                                setScrollOffset: l,
                                scrollOffset: A
                            });
                    }
                    return e;
                })();
                const X = [E.MEDIA, E.DOCS].includes(N);
                const Z = L ? (0, P.jsx)(C.UIE, {
                    displayName: "MediaMultiSelect",
                    escapable: true,
                    requestDismiss: U,
                    children: (0, P.jsx)(g.MultiSelectBar, {
                        chat: n,
                        noSortOnForward: true,
                        theme: "mediaGallery",
                        toastPosition: o.ToastPosition.RIGHT,
                        downloadButton: X,
                        selectedMessages: H.current,
                        onCancel: U,
                        entryPoint: q
                    })
                }) : null;
                const J = O === "right" ? "slide-forward" : "slide-back";
                return (0, P.jsxs)(c.default, {
                    ref: t,
                    theme: "gallery",
                    testid: "media-gallery-drawer",
                    children: [(0, P.jsx)(u.DrawerHeader, {
                        title: " ",
                        onBack: e.onBack,
                        rtlFixIfOnDarwin: true,
                        type: u.DRAWER_HEADER_TYPE.MULTI_MEDIA_GALLERY
                    }), Z, z, V ? (0, P.jsx)(I, {
                        selected: N,
                        onSearch: F
                    }) : null, (0, P.jsx)(d.default, {
                        "data-list-scroll-container": true,
                        children: (0, P.jsx)(M.default, {
                            transitionName: J,
                            className: (0, y.default)(w),
                            children: (0, P.jsx)("div", {
                                className: (0, y.default)(T),
                                children: (0, P.jsx)("div", {
                                    className: (0, y.default)(w),
                                    children: K
                                })
                            }, N)
                        })
                    })]
                });
            });
            t.MediaGalleryDrawer = A;
            A.displayName = "MediaGalleryDrawer";
        },
        266466: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const [t, n] = (0, c.useState)(false);
                let a;
                let p;
                if (e.isBusiness) {
                    a = r.fbt._("This message will be forwarded to WhatsApp. This business will not be notified.", null, {
                        hk: "1N7YEc"
                    });
                    p = r.fbt._("Block business", null, {
                        hk: "3hFIF3"
                    });
                } else {
                    a = r.fbt._("This message will be forwarded to WhatsApp. This contact will not be notified.", null, {
                        hk: "2qS1tP"
                    });
                    p = r.fbt._("Block contact", null, {
                        hk: "41X9mL"
                    });
                }
                return (0, u.jsxs)(o.ConfirmPopup, {
                    onOK: function () {
                        e.onReport(t);
                    },
                    okText: r.fbt._("Report", null, {
                        hk: "18ssTb"
                    }),
                    onCancel: e.onCancel,
                    title: e.title,
                    children: [(0, u.jsxs)("div", {
                        className: (0, d.default)(f.section, s.uiMargin.top12, s.uiMargin.end0, f.border),
                        children: [(0, u.jsx)(i.CheckBox, {
                            onChange: () => n(e => !e),
                            checked: t,
                            id: "menu-icon-report-spam"
                        }), (0, u.jsx)(l.TextLabel, {
                            xstyle: f.checkboxLabel,
                            htmlFor: "menu-icon-report-spam",
                            children: p
                        })]
                    }), (0, u.jsx)(l.TextParagraph, {
                        xstyle: f.section,
                        color: "muted",
                        children: a
                    })]
                });
            };
            var i = n(468926);
            var o = n(103440);
            var l = n(180519);
            var s = n(676345);
            var r = n(548360);
            var c = n(667294);
            var d = a(n(156720));
            var u = n(785893);
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
                (0, u.useEffect)(() => {
                    if (e.entryPoint) {
                        (0, o.logPnhRequestRevealActionHelper)(c.PNH_CHAT_TYPE_TYPE.CTWA, c.PNH_MESSAGE_CHAT_PARTY.BIZ, c.PNH_ACTION_TYPE.REQUEST_DIALOG_APPEAR, e.entryPoint);
                    }
                }, [e.entryPoint]);
                const n = d.fbt._("Request phone number?", null, {
                    hk: "1BOtdo"
                });
                const p = d.fbt._("This person's phone number is not shared in this chat. You can request for their phone number if you'd like to save them to your contacts.", null, {
                    hk: "3SHZ6I"
                });
                const h = d.fbt._("Send Request", null, {
                    hk: "4tsuDY"
                });
                const m = d.fbt._("Cancel", null, {
                    hk: "37A1CY"
                });
                return (0, f.jsx)(i.ConfirmPopup, {
                    onOK: () => {
                        if (t) {
                            (0, s.sendRequestPhoneNumber)((0, r.unproxy)(t));
                            if (e.entryPoint != null) {
                                (0, o.logPnhRequestRevealActionHelper)(c.PNH_CHAT_TYPE_TYPE.CTWA, c.PNH_MESSAGE_CHAT_PARTY.BIZ, c.PNH_ACTION_TYPE.SEND_REQUEST, e.entryPoint);
                            }
                        }
                        l.ModalManager.close();
                    },
                    okText: h,
                    onCancel: () => l.ModalManager.close(),
                    cancelText: m,
                    title: n,
                    children: p
                });
            };
            var a = n(351053);
            var i = n(103440);
            var o = n(543081);
            var l = n(114850);
            var s = n(942319);
            var r = n(163139);
            var c = n(130756);
            var d = n(548360);
            var u = n(667294);
            var f = n(785893);
        },
        87979: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = undefined;
            var i = n(356097);
            var o = n(811720);
            var l = a(n(75531));
            var s = n(490141);
            var r = n(802703);
            var c = n(548360);
            var d = n(667294);
            var u = n(785893);

            function f (e, t) {
                const {
                    onClose: n,
                    chat: a
                } = e;
                const d = c.fbt._("Sent for admin review", null, {
                    hk: "20UoUM"
                });
                (0, s.getReportedMsgs)(a.id);
                const f = (0, u.jsx)(o.SentForAdminReview, {});
                const p = new r.StarredMsgCollection();
                return (0, u.jsx)(l.default, {
                    testid: "sent-for-admin-review-drawer",
                    ref: t,
                    msgCollection: p,
                    onClose: n,
                    chat: a,
                    title: d,
                    emptyListText: f,
                    displayType: i.DISPLAY_TYPE.STARRED_MSGS
                });
            }
            var p = (0, d.forwardRef)(f);
            t.default = p;
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
            var i = a(n(896322));
            var o = a(n(35644));
            a(n(306007));
            var l = n(464659);
            var s = a(n(740681));
            var r = n(63014);
            var c = n(780549);
            var d = n(419000);
            var u = a(n(908081));
            var f = a(n(324093));
            var p = n(36045);
            var h = n(626194);
            var m = a(n(209064));
            var g = n(673509);
            var x = a(n(409558));
            var v = n(258105);
            var b = a(n(570834));
            var C = a(n(932325));
            var M = n(97858);
            var j = n(114850);
            var _ = n(111367);
            n(227341);
            var y = n(163139);
            n(220584);
            var S = n(180519);
            var k = n(130756);
            var P = n(548360);
            var w = n(667294);
            var T = a(n(156720));
            var E = a(n(969651));
            var I = a(n(637660));
            var A = n(808446);
            var N = n(655241);
            var R = a(n(321201));
            var O = n(785893);
            const D = {
                flexGrow: "tvf2evcx",
                flexShrink: "oq44ahr5",
                flexBasis: "lb5m6g5c",
                paddingBottom: "s9fl9ege"
            };

            function L (e, t) {
                var n;
                var a;
                const {
                    onClose: w,
                    onMediaGallery: L
                } = e;
                const B = (0, E.default)();
                const G = (0, R.default)();
                const F = (0, I.default)(() => new b.default());
                const V = (0, N.useModelValues)(e.chat, ["id", "groupMetadata"]);
                (0, A.useListener)((n = V.groupMetadata) === null || n === undefined ? undefined : n.participants, ["add", "remove", "sort", "reset"], B);
                let H = null;
                if (L) {
                    H = (0, O.jsx)(s.default, {
                        onMediaGallery: L,
                        chat: (0, y.unproxy)(V)
                    });
                }
                const U = (0, O.jsx)(l.ChatInfoDrawerButtonsSection, {
                    children: (0, O.jsx)(p.DrawerButton, {
                        testid: "li-delete-broadcast",
                        icon: (0, O.jsx)(d.DeleteIcon, {}),
                        color: "danger",
                        theme: "chat-info",
                        onClick: () => {
                            c.Cmd.deleteOrExitChat((0, y.unproxy)(V));
                        },
                        children: C.default.t(692)
                    })
                });
                let W;
                if ((a = V.groupMetadata) === null || a === undefined ? undefined : a.creation) {
                    W = r.Clock.createdStr(V.groupMetadata.creation);
                    W = (0, O.jsx)(S.TextDiv, {
                        theme: "small",
                        children: W
                    });
                } else {
                    W = null;
                }
                let Y = null;
                Y = (0, O.jsx)(x.default, {
                    highlightSurface: k.PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_BROADCAST,
                    onClick: () => {
                        if ((0, M.isPrivacyNarrativeV1Enabled)() && (0, _.shouldShowNewE2eInfoModal)((0, y.unproxy)(V))) {
                            const e = (0, v.getE2EFaqUrl)();
                            j.ModalManager.open((0, O.jsx)(g.E2eInfoModalV2, {
                                highlightSurface: k.PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_BROADCAST,
                                url: e
                            }));
                        } else {
                            j.ModalManager.open((0, O.jsx)(m.default, {
                                highlightSurface: k.PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_BROADCAST,
                                chatId: V.id,
                                e2eSubtype: "info_encrypted"
                            }));
                        }
                    },
                    text: P.fbt._("Messages are end-to-end encrypted. Click to learn more.", null, {
                        hk: "1iarlI"
                    })
                });
                let z = null;
                if (Y) {
                    z = (0, O.jsxs)(l.ChatInfoDrawerSection, {
                        children: [null, Y]
                    });
                }
                return (0, O.jsxs)(u.default, {
                    ref: t,
                    theme: "striped",
                    children: [(0, O.jsxs)(h.DrawerHeader, {
                        type: h.DRAWER_HEADER_TYPE.SMALL,
                        rtlFixIfOnDarwin: true,
                        onCancel: () => {
                            if (w) {
                                w();
                            } else if (!(G == null)) {
                                G.requestDismiss();
                            }
                        },
                        children: [(0, O.jsx)(S.TextDiv, {
                            theme: "title",
                            children: P.fbt._("Broadcast list info", null, {
                                hk: "3S4EgV"
                            })
                        }), W]
                    }), (0, O.jsx)(f.default, {
                        flatListControllers: [F.current],
                        children: (0, O.jsxs)("div", {
                            className: (0, T.default)(D),
                            children: [(0, O.jsx)(o.default, {
                                chat: (0, y.unproxy)(V)
                            }), H, undefined, z, (0, O.jsx)(i.default, {
                                chat: (0, y.unproxy)(V),
                                flatListController: F.current
                            }), U]
                        })
                    })]
                }, "contact-info-modal");
            }
            var B = (0, w.forwardRef)(L);
            t.default = B;
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
                const a = (0, h.default)();
                const x = (t = e.chat.groupMetadata) === null || t === undefined ? undefined : t.participants;
                (0, m.useListener)(x, "add remove reset", a);
                const v = (0, p.useMemo)(() => x ? x.map(e => ({
                    itemKey: e.id.toString(),
                    participant: e,
                    height: 68
                })) : [], [x]);
                const b = (e, t) => {
                    if (!(0, f.isMePrimary)(t.id)) {
                        (0, c.findChat)(t.id, "broadcastInfoRecipients").then(function (e) {
                            l.Cmd.openChatFromUnread(e).then(t => {
                                if (t) {
                                    s.ComposeBoxActions.focus(e);
                                }
                            });
                        });
                    }
                };
                const C = (n = x == null ? undefined : x.length) !== null && n !== undefined ? n : 0;
                const M = u.default.t(770, {
                    count: C,
                    _plural: C
                });
                return (0, g.jsx)(o.ChatInfoDrawerListSection, {
                    title: M,
                    children: (0, g.jsx)(d.FlatList, {
                        flatListController: e.flatListController,
                        direction: "vertical",
                        forceConsistentRenderCount: false,
                        data: v,
                        renderItem: e => {
                            const {
                                participant: t
                            } = e;
                            const n = r.ContactCollection.gadd(t.id);
                            return (0, g.jsx)(i.Contact, {
                                contact: n,
                                theme: "chat-info",
                                admin: !!t.isAdmin,
                                onClick: b,
                                waitIdle: true
                            }, t.id.toString());
                        }
                    })
                });
            };
            var i = n(822652);
            var o = n(464659);
            var l = n(780549);
            var s = n(877171);
            var r = n(177938);
            var c = n(581354);
            var d = n(512938);
            var u = a(n(932325));
            var f = n(459857);
            var p = n(667294);
            var h = a(n(969651));
            var m = n(808446);
            var g = n(785893);
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
                const b = (0, m.useModelValues)(e.chat.contact, ["name"]);
                const C = (0, p.default)();
                (0, h.useListener)(a, "add remove reset", C);
                const M = (n = a == null ? undefined : a.length) !== null && n !== undefined ? n : 0;
                const j = u.fbt._("Broadcast List", null, {
                    hk: "46AT9o"
                }).toString() + " · " + r.default.t(770, {
                    count: M,
                    _plural: M
                });
                const _ = b.name ? (0, g.jsx)(c.Name, {
                    contact: e.chat.contact,
                    selectable: true
                }) : u.fbt._("Untitled List", null, {
                    hk: "fYALp"
                });
                return (0, g.jsxs)(l.default, {
                    theme: "padding-large",
                    children: [(0, g.jsx)("div", {
                        className: (0, f.default)(x),
                        children: (0, g.jsx)(o.DetailImage, {
                            id: e.chat.id,
                            size: o.DetailImageSize.Large
                        })
                    }), (0, g.jsxs)(s.FlexColumn, {
                        align: "center",
                        children: [(0, g.jsx)(d.TextHeader, {
                            level: "2",
                            size: "24",
                            children: _
                        }), (0, g.jsx)("div", {
                            className: (0, f.default)(v),
                            children: (0, g.jsx)(i.SelectableSpan, {
                                dir: "auto",
                                selectable: true,
                                children: (0, g.jsx)(d.TextSpan, {
                                    size: "16",
                                    color: "secondary",
                                    children: j
                                })
                            })
                        })]
                    })]
                });
            };
            var i = n(306703);
            var o = n(23641);
            var l = a(n(969358));
            var s = n(690495);
            var r = a(n(932325));
            var c = n(21645);
            var d = n(180519);
            var u = n(548360);
            var f = a(n(156720));
            var p = a(n(969651));
            var h = n(808446);
            var m = n(655241);
            var g = n(785893);
            const x = {
                display: "p357zi0d",
                justifyContent: "ac2vgrno",
                marginBottom: "du8bjn1j"
            };
            const v = {
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
                const {
                    status: n
                } = (0, d.useModelValues)(t.getStatus(), ["status"]);
                if (r.default.isPSA(t.id)) {
                    return (0, u.jsxs)(i.ChatInfoDrawerSection, {
                        titleTestId: "section-about",
                        title: "",
                        children: [(0, u.jsxs)(s.TextSpan, {
                            theme: "title",
                            size: "16",
                            children: [c.fbt._("Hi! Welcome to this official WhatsApp chat.", null, {
                                hk: "1fpFwJ"
                            }).toString(), (0, u.jsx)("br", {}), c.fbt._("This is where you can get tips, see announcements, and hear about the newest features. Straight from us.", null, {
                                hk: "4gcJHK"
                            }).toString(), (0, u.jsx)("br", {}), c.fbt._("Official chats from WhatsApp will always have a green \"verified\" checkmark. And we'll never ask for your personal information.", null, {
                                hk: "8bwzI"
                            }).toString()]
                        }), (0, u.jsx)("br", {}), (0, u.jsx)("br", {}), (0, u.jsx)(l.ExternalLink, {
                            href: "https://whatsapp.com/",
                            xstyle: f.whatsapp_url,
                            children: "https://whatsapp.com/"
                        })]
                    });
                }
                if (n === "") {
                    return null;
                }
                return (0, u.jsx)(i.ChatInfoDrawerSection, {
                    titleTestId: "section-about",
                    title: c.fbt._("About", null, {
                        hk: "4qoAfH"
                    }),
                    children: (0, u.jsx)(s.TextSpan, {
                        theme: "title",
                        size: "16",
                        children: (0, u.jsx)(o.default, {
                            id: t.id
                        })
                    })
                });
            };
            var i = n(464659);
            var o = a(n(203528));
            var l = n(753233);
            var s = n(180519);
            var r = a(n(124928));
            var c = n(548360);
            a(n(156720));
            var d = n(655241);
            var u = n(785893);
            const f = {
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
                const t = (0, x.useModelValues)(e.contact, ["commonGroups"]).commonGroups;
                const [n, a] = (0, m.useState)(true);
                (0, m.useEffect)(() => {
                    (0, u.findCommonGroups)(e.contact).catch(e => {
                        __LOG__(4, true, new Error(), true)`get from participants table failed`;
                        SEND_LOGS("get from participants table failed when finding common groups: " + e);
                        throw (0, p.default)("get from participants table failed");
                    });
                }, []);
                const b = (0, g.default)(t, ["add", "remove"], () => {
                    if (!t) {
                        return [];
                    }
                    let e = t;
                    if (e.length > l.INFO_DRAWER_MAX_ROWS && n) {
                        e = e.slice(0, l.INFO_DRAWER_MAX_ROWS);
                    }
                    return e.map(e => ({
                        itemKey: e.id.toString(),
                        chat: e,
                        height: (0, c.shouldShowNewSubgroupIdentity)(e.groupMetadata) ? o.SUBGROUP_V2_CHAT_CELL_HEIGHT : 68
                    }));
                }, [n]);
                const C = () => {
                    a(false);
                };
                const M = (t, n) => {
                    r.Cmd.openChatFromUnread(n).then(e => {
                        if (e) {
                            d.ComposeBoxActions.focus(n);
                        }
                    });
                    e.onClose();
                };
                if (!t || t.length === 0) {
                    return null;
                }
                let j;
                if (t.length > l.INFO_DRAWER_MAX_ROWS && n) {
                    const e = t.length - l.INFO_DRAWER_MAX_ROWS;
                    j = (0, v.jsx)(s.default, {
                        numMore: e,
                        onClick: C
                    });
                }
                const _ = h.fbt._({
                    "*": "{number} groups in common",
                    _1: "1 group in common"
                }, [h.fbt._plural(t.length, "number")], {
                    hk: "2bl4a5"
                });
                return (0, v.jsxs)(l.ChatInfoDrawerListSection, {
                    titleTestId: "section-common-groups",
                    title: _,
                    children: [(0, v.jsx)(f.FlatList, {
                        flatListController: e.flatListController,
                        direction: "vertical",
                        forceConsistentRenderCount: false,
                        data: b,
                        renderItem: e => {
                            const {
                                chat: t
                            } = e;
                            return (0, v.jsx)(i.Chat, {
                                chat: t,
                                theme: "chat-info",
                                mode: i.Mode.INFO,
                                onClick: M,
                                showCommunityInfo: true,
                                showStackedCircles: true
                            }, t.id.toString());
                        }
                    }), j]
                });
            };
            var i = n(700071);
            var o = n(394164);
            var l = n(464659);
            var s = a(n(831584));
            var r = n(780549);
            var c = n(174834);
            var d = n(877171);
            var u = n(701777);
            var f = n(512938);
            var p = a(n(556869));
            var h = n(548360);
            var m = n(667294);
            var g = a(n(524578));
            var x = n(655241);
            var v = n(785893);
        },
        655237: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = undefined;
            var i = a(n(81109));
            var o = n(122583);
            var l = n(15842);
            var s = n(632157);
            var r = n(984330);
            var c = n(72696);
            var d = a(n(983345));
            var u = a(n(463954));
            var f = a(n(906015));
            var p = n(815651);
            var h = n(745309);
            var m = n(542358);
            var g = a(n(718796));
            var x = n(713464);
            var v = n(351053);
            var b = n(738501);
            var C = a(n(306007));
            var M = n(464659);
            var j = a(n(740681));
            var _ = n(998123);
            var y = n(698867);
            var S = n(780549);
            var k = a(n(988808));
            var P = a(n(876588));
            var w = a(n(700829));
            var T = a(n(109007));
            var E = a(n(366773));
            var I = a(n(305122));
            var A = a(n(704714));
            var N = a(n(928008));
            var R = n(834110);
            var O = n(419000);
            var D = a(n(908081));
            var L = a(n(324093));
            var B = n(36045);
            var G = n(568550);
            var F = n(626194);
            var V = n(900316);
            var H = a(n(969358));
            var U = n(56884);
            var W = n(71957);
            var Y = a(n(570834));
            var z = n(95576);
            var q = a(n(932325));
            var K = a(n(344460));
            var X = n(917504);
            var Z = n(609181);
            var J = n(114850);
            var Q = a(n(832897));
            var $ = a(n(499717));
            var ee = a(n(213393));
            var te = n(932523);
            var ne = n(242677);
            var ae = a(n(335748));
            var ie = n(10586);
            var oe = a(n(634152));
            var le = n(163139);
            var se = n(220584);
            var re = n(180519);
            var ce = n(717089);
            var de = n(625786);
            var ue = n(390737);
            var fe = n(459857);
            var pe = n(887222);
            var he = n(130756);
            var me = a(n(124928));
            var ge = n(548360);
            var xe = n(667294);
            var ve = a(n(156720));
            var be = a(n(637660));
            var Ce = n(655241);
            var Me = a(n(558532));
            var je = a(n(321201));
            var _e = n(785893);
            const ye = {
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

            function Se (e) {
                let {
                    contact: t,
                    catalogContext: n,
                    onProductDetail: a,
                    onProductCatalog: i
                } = e;
                const o = x.CatalogCollection.get(t.id);
                if (!o) {
                    return null;
                }
                let l = "";
                let s = false;
                if ((0, c.canSeeBizProfileV3)()) {
                    l = ge.fbt._("See all", null, {
                        hk: "3dTwyT"
                    });
                    s = true;
                }
                const {
                    session: r
                } = n;
                if (r.isAccidental()) {
                    return null;
                } else if ((0, m.hasShop)(t.businessProfile)) {
                    if ((0, c.bannedShopsEnabled)() && (0, m.isShopBanned)(t.businessProfile)) {
                        return null;
                    } else {
                        return (0, _e.jsx)(ae.default, {
                            businessProfile: t.businessProfile,
                            catalog: o,
                            subtitle: l,
                            hideIncompleteRows: s
                        });
                    }
                } else {
                    return (0, _e.jsx)(ee.default, {
                        onProductDetail: a,
                        onProductCatalog: i,
                        catalog: o,
                        subtitle: l,
                        hideIncompleteRows: s,
                        shouldLog: true
                    });
                }
            }

            function ke (e, t) {
                const {
                    onVerification: n,
                    onClose: a,
                    onBack: m,
                    onProductDetail: ee,
                    onProductCatalog: ae,
                    canLogQpl: ke = true
                } = e;
                const Pe = (0, je.default)();
                const we = (0, xe.useContext)(G.DrawerContext);
                (0, ce.useTsNavigation)({
                    surface: "contact-info-drawer"
                });
                const Te = (0, Ce.useModelValues)(e.contact, ["id", "formattedName", "formattedUser", "formattedShortName", "isBusiness", "isEnterprise", "isMyContact", "commonGroups", "businessProfile", "showBusinessCheckmarkAsPrimary", "showBusinessCheckmarkAsSecondary", "verifiedName", "verifiedLevel", "name", "notifyName", "labels", "phoneNumber", "businessCatalog", "isMe", "statusMute", "displayName", "shareOwnPn", "requestedPnTimestamp", "canRequestPhoneNumber", "phoneNumber", "isIAS"]);
                const Ee = (0, be.default)(() => new Y.default());
                const Ie = (0, xe.useRef)(false);
                const [Ae, Ne] = (0, xe.useState)(100);
                const Re = (0, xe.useMemo)(() => v.ChatCollection.get(Te.id), [Te.id]);
                const Oe = Te.isMe;
                (0, xe.useEffect)(() => {
                    if (Te.businessProfile && !Te.businessProfile.stale && Te.businessCatalog) {
                        x.CatalogCollection.findCarouselCatalog(Te.id).catch((0, o.filteredCatch)(r.ServerStatusCodeError, () => {
                            __LOG__(3)`Failed to fetch product catalog in contact drawer from server`;
                        }));
                    }
                    (0, ie.getFanOutListJob)([Te.id, (0, fe.assertGetMe)()]).then(e => {
                        (0, X.ensureE2ESessions)(e);
                    });
                    const {
                        session: t
                    } = (0, te.getProductCatalogContext)(we);
                    if (t.isAccidental()) {
                        V.DrawerManager.setDrawerContext("right", (0, te.buildProductCatalogContext)(new ne.ProductCatalogSession(), (0, R.getMaybeBizPlatformForLogging)(Te.id.toString()), he.CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_PROFILE));
                    } else if (Te.isBusiness && (0, c.canSeeBizProfileV3)()) {
                        const t = Te.id === (0, fe.getMaybeMeUser)();
                        const {
                            profileEntryPoint: i
                        } = e;
                        var n;
                        var a;
                        if (!t && i) {
                            (0, p.logProfileImpression)((0, te.getProductCatalogSessionId)(we), i, !!((n = Te.businessProfile) === null || n === undefined ? undefined : n.isProfileLinked), !!((a = Te.businessProfile) === null || a === undefined ? undefined : a.coverPhoto));
                        }
                    }
                    if (ke && Te.businessProfile) {
                        (0, Z.qplEndProfileView)(l.QuickLogActionType.SUCCESS);
                    }
                }, []);
                (0, xe.useEffect)(() => {
                    if ((0, c.btmThreadsLoggingEnabled)()) {
                        var e;
                        const t = (e = (0, fe.getMaybeMeUser)()) === null || e === undefined ? undefined : e.equals(Te.id);
                        const {
                            session: n
                        } = (0, te.getProductCatalogContext)(we);
                        if (!(n.isAccidental() || t || !(Re == null ? undefined : Re.id))) {
                            (0, y.handleActivitiesForChatThreadLogging)([{
                                activityType: "profileViews",
                                ts: (0, s.unixTime)(),
                                chatId: Re.id
                            }]);
                        }
                    }
                }, []);
                (0, Me.default)(() => {
                    const {
                        session: e
                    } = (0, te.getProductCatalogContext)(we);
                    var t;
                    var n;
                    if (!e.isAccidental()) {
                        if (Te.isBusiness && (0, c.canSeeBizProfileV3)()) {
                            (0, p.logProfileExit)((0, te.getProductCatalogSessionId)(we), Ae, (t = Te.businessProfile) === null || t === undefined ? undefined : t.isProfileLinked, !!((n = Te.businessProfile) === null || n === undefined ? undefined : n.coverPhoto));
                        }
                    }
                });
                const De = () => {
                    if (a) {
                        a();
                    } else if (!(Pe == null)) {
                        Pe.requestDismiss();
                    }
                };
                const Le = () => {
                    if (m) {
                        m();
                    }
                };
                const Be = e => {
                    if (!Ie.current && !me.default.isPSA(Te.id)) {
                        return void ue.ToastManager.open((0, _e.jsx)(de.Toast, {
                            msg: ge.fbt._("No profile photo", null, {
                                hk: "2bdeTO"
                            })
                        }));
                    }
                    const t = e.target;
                    J.ModalManager.openMedia((0, _e.jsx)($.default, {
                        contact: Te,
                        profilePicThumb: Te.getProfilePicThumb(),
                        animateBorderRadius: true,
                        getZoomNode: e => {
                            e(t);
                        }
                    }), {
                        transition: "profile-viewer",
                        uim: Pe
                    });
                };
                const Ge = () => {
                    Ie.current = true;
                };
                const Fe = e => {
                    (0, pe.qplStartProductView)("ContactInfo");
                    ee(e);
                };
                const Ve = e => {
                    const t = Math.floor((1 + e.currentTarget.scrollTop / e.currentTarget.offsetHeight) * 100);
                    if (t > Ae) {
                        Ne(t);
                    }
                };
                const He = Te.isEnterprise ? null : (0, _e.jsx)(P.default, {
                    contact: Te,
                    onClose: De,
                    flatListController: Ee.current
                });
                let Ue = null;
                if (e.onMediaGallery && Re) {
                    Ue = (0, _e.jsx)(j.default, {
                        chat: Re,
                        onMediaGallery: e.onMediaGallery
                    });
                }
                let We = null;
                let Ye = null;
                if (Te && Te.isBusiness && Te.businessProfile && Te.businessCatalog) {
                    const e = (0, _e.jsx)(Se, {
                        contact: Te,
                        catalogContext: (0, te.getProductCatalogContext)(we),
                        onProductDetail: Fe,
                        onProductCatalog: ae
                    });
                    if ((0, c.canSeeBizProfileV3)()) {
                        Ye = e;
                    } else {
                        We = e;
                    }
                }
                const ze = Re && Re.mute.canMute() ? (0, _e.jsx)(Q.default, {
                    chat: Re,
                    mute: Re.mute,
                    settings: oe.default
                }) : null;
                let qe;
                let Ke;
                if (e.onStarred) {
                    qe = (0, _e.jsx)(I.default, {
                        onStarred: e.onStarred
                    });
                }
                if ((0, U.isKeepInChatReadAndUIEnabled)() && Re && (Re.hasKeptMsgs() || (0, b.isEphemeralSettingOn)(Re))) {
                    const t = (0, _e.jsx)(re.TextSpan, {
                        theme: "title",
                        size: "16",
                        children: ge.fbt._("Kept Messages", null, {
                            hk: "w8m3u"
                        })
                    });
                    const n = (0, _e.jsx)(z.KeepInChatIcon, {
                        color: se.SvgColorProp.SECONDARY,
                        height: 20
                    });
                    Ke = (0, _e.jsx)(M.ChatInfoDrawerSection, {
                        titleTestId: "section-kept-messages",
                        xstyle: ye.lastSectionRow,
                        children: (0, _e.jsx)(C.default, {
                            testid: "block-kept-messages",
                            side: "chevron",
                            icon: n,
                            onClick: e.onKept,
                            title: t
                        })
                    });
                }
                const Xe = Re && (0, b.shouldShowEphemeralSetting)(Re) ? (0, _e.jsx)(W.EphemeralSettingRow, {
                    onClick: e.onEphemeral,
                    chat: Re,
                    testid: "contact-info-dm-setting-row"
                }) : null;
                const Ze = me.default.isPSA(Te.id) ? (0, _e.jsx)(N.default, {}) : (0, _e.jsx)(w.default, {
                    contact: (0, le.unproxy)(Te),
                    onVerificationClick: () => {
                        n();
                    }
                });
                const Je = Te.id.isLid() && Te.phoneNumber == null;
                const Qe = Te.id.isLid();
                const $e = (0, _e.jsxs)(M.ChatInfoDrawerSection, {
                    children: [ze, Xe, Ze, Re && Qe ? (0, _e.jsx)(_.PhoneNumberVisibilityIndicator1On1, {
                        chat: Re
                    }) : null]
                });
                const et = !Te.isBusiness;
                const tt = et || Te.isIAS ? null : (0, _e.jsx)(d.default, {
                    contact: (0, le.unproxy)(Te)
                });
                const nt = et ? (0, _e.jsx)(k.default, {
                    contact: (0, le.unproxy)(Te)
                }) : null;
                const at = (0, c.canSeeBizProfileV3)() && Te.isBusiness && Te.businessProfile ? (0, _e.jsx)(g.default, {
                    contact: Te,
                    onProfilePicLoad: Ge,
                    onProfilePicClick: Be,
                    onOpenStatus: () => {
                        var e;
                        var t;
                        (0, p.logStatusClick)((0, te.getProductCatalogSessionId)(we), (e = Te.businessProfile) === null || e === undefined ? undefined : e.isProfileLinked, !!((t = Te.businessProfile) === null || t === undefined ? undefined : t.coverPhoto));
                    },
                    businessProfile: Te.businessProfile,
                    onProductCatalog: ae,
                    isMessageYourselfChat: Oe,
                    isPhoneNumberHidden: Je
                }) : (0, _e.jsx)(A.default, {
                    contact: Te,
                    onDetailImageLoad: Ge,
                    onDetailImageClick: Be,
                    isMessageYourselfChat: Oe,
                    isPhoneNumberHidden: Je
                });
                let it;
                let ot;
                let lt;
                let st = null;
                var rt;
                var ct;
                if (Te.isBusiness && Te.businessProfile) {
                    if ((0, c.canSeeBizProfileV3)() && Te.businessProfile) {
                        st = (0, _e.jsx)(f.default, {
                            businessProfile: Te.businessProfile
                        });
                        it = Te.isIAS ? null : (0, _e.jsx)(u.default, {
                            contact: Te
                        });
                        if (((rt = (ct = Te.labels) === null || ct === undefined ? undefined : ct.length) !== null && rt !== undefined ? rt : 0) > 0) {
                            ot = (0, _e.jsx)(H.default, {
                                theme: "padding",
                                children: (0, _e.jsx)(K.default, {
                                    labels: Te.labels,
                                    theme: "standalone"
                                })
                            });
                        }
                        lt = Ve;
                    } else if (Te.businessProfile) {
                        st = (0, _e.jsx)(h.BusinessProfile, {
                            contact: Te,
                            businessProfile: Te.businessProfile
                        });
                    }
                }
                const dt = {
                    title: ge.fbt._("Contact info", null, {
                        hk: "LUJtH"
                    }),
                    type: F.DRAWER_HEADER_TYPE.SMALL,
                    rtlFixIfOnDarwin: true,
                    focusBackOrCancel: true
                };
                let ut;
                let ft = {};
                ft = m ? (0, i.default)({
                    onBack: Le
                }, dt) : (0, i.default)({
                    onCancel: De
                }, dt);
                if (Te.businessProfile && Te.businessProfile.isProfileLinked === true && (0, c.bizLinkedAccountsEnabled)() && (0, c.canViewBizLinkedAccounts)()) {
                    ut = (0, _e.jsx)(E.default, {
                        businessProfile: Te.businessProfile,
                        rowTheme: "linked-account-consumer"
                    });
                }
                return (0, _e.jsxs)(D.default, {
                    ref: t,
                    theme: "striped",
                    testid: "chat-info-drawer",
                    children: [(0, _e.jsx)(F.DrawerHeader, (0, i.default)((0, i.default)({}, ft), {}, {
                        testid: "contact-info-header"
                    })), (0, _e.jsx)(L.default, {
                        flatListControllers: [Ee.current],
                        onScroll: lt,
                        children: (0, _e.jsxs)("section", {
                            className: (0, ve.default)(ye.body),
                            children: [at, it, ot, Ye, st, ut, We, nt, Ue, qe, Ke, $e, tt, undefined, !Oe && He, !Oe && (0, _e.jsx)(T.default, {
                                contact: Te
                            }), (0, _e.jsx)(M.ChatInfoDrawerButtonsSection, {
                                children: Re ? (0, _e.jsx)(B.DrawerButton, {
                                    testid: "li-delete-chat",
                                    icon: (0, _e.jsx)(O.DeleteIcon, {}),
                                    color: "danger",
                                    onClick: () => {
                                        const e = v.ChatCollection.assertGet(Te.id);
                                        S.Cmd.deleteOrExitChatFromEntryPoint(e, 12);
                                    },
                                    theme: "chat-info",
                                    children: q.default.t(221)
                                }) : null
                            })]
                        })
                    })]
                }, "contact-info-modal");
            }
            var Pe = (0, xe.forwardRef)(ke);
            t.default = Pe;
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
                const n = (0, p.useModelValues)(e.contact, ["id", "privacyMode"]);
                const a = function (e, t) {
                    if ((0, i.default)(t.user)) {
                        return {
                            text: f.fbt._("Click to learn how messages and calls are secured.", null, {
                                hk: "1UxhjE"
                            }),
                            title: f.fbt._("Security", null, {
                                hk: "3j3j0a"
                            }),
                            onClick: () => {
                                (0, r.default)(f.fbt._("WhatsApp secures your messages and calls with this account.", null, {
                                    hk: "18Ci1q"
                                }), (0, l.getSupportChatSafetyFaqUrl)(), f.fbt._("Learn more about chats with WhatsApp Support.", null, {
                                    hk: "1an25A"
                                }));
                            }
                        };
                    }
                    switch (e) {
                        case c.ReducedPrivacyMode.E2EE:
                            return null;
                        case c.ReducedPrivacyMode.BSP:
                            return {
                                text: f.fbt._("This business works with other companies to manage this chat. Click to learn more.", null, {
                                        hk: "VbOOZ"
                                    }),
                                    title: f.fbt._("Security", null, {
                                        hk: "3j3j0a"
                                    }),
                                    onClick: () => {
                                        (0, r.default)((0, s.formatBspModalText)(), (0, l.getE2EEnterpriseFaqUrl)());
                                    }
                            };
                        case c.ReducedPrivacyMode.FB: {
                            let e;
                            e = t.isIAS() ? f.fbt._("WhatsApp Surveys uses a secure service from Meta to manage this chat. Click to learn more.", null, {
                                hk: "49GQ04"
                            }) : f.fbt._("This business uses a secure service from Meta to manage this chat. Click to learn more.", null, {
                                hk: "3wvGOC"
                            });
                            return {
                                text: e,
                                title: f.fbt._("Security", null, {
                                    hk: "3j3j0a"
                                }),
                                onClick: () => {
                                    (0, r.default)((0, s.formatFbModalText)(t.isIAS()), (0, l.getE2EEnterpriseFaqUrl)());
                                }
                            };
                        }
                    }
                }((0, c.getReducedPrivacyMode)(n.privacyMode), n.id);
                if (a) {
                    return (0, h.jsx)(o.default, {
                        highlightSurface: u.PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_CONTACT,
                        title: a.title,
                        text: a.text,
                        onClick: a.onClick
                    });
                }
                const m = (0, d.isVoiceCallEnabled)() || (0, d.isVideoCallEnabled)() ? f.fbt._("Messages and calls are end-to-end encrypted. Click to verify.", null, {
                    hk: "GtGQH"
                }) : f.fbt._("Messages are end-to-end encrypted. Click to verify.", null, {
                    hk: "1AqhWR"
                });
                return (0, h.jsx)(o.default, {
                    highlightSurface: u.PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_CONTACT,
                    onClick: t,
                    text: m
                });
            };
            var i = a(n(143589));
            var o = a(n(409558));
            var l = n(258105);
            var s = n(729763);
            var r = a(n(606037));
            var c = n(35109);
            var d = n(571256);
            var u = n(130756);
            var f = n(548360);
            var p = n(655241);
            var h = n(785893);
        },
        109007: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const t = (0, _.useModelValues)(e.contact, ["id", "displayName", "isBusiness", "isContactBlocked", "isIAS", "isMyContact"]);
                const n = (0, y.jsx)(p.Name, {
                    contact: e.contact,
                    skipCheckMark: true
                });
                let a = null;
                a = t.isContactBlocked ? (0, y.jsx)(u.DrawerButton, {
                    testid: "li-unblock",
                    color: "success",
                    icon: (0, y.jsx)(x.SettingsBlockedIcon, {
                        directional: true
                    }),
                    onClick: () => (0, l.handleUnblock)(e.contact, s.BlockEntryPoint.Profile),
                    theme: "chat-info",
                    children: j.fbt._("Unblock {contact_name}", [j.fbt._param("contact_name", n)], {
                        hk: "1fZZEx"
                    })
                }) : (0, y.jsx)(u.DrawerButton, {
                    testid: "li-block",
                    color: "danger",
                    icon: (0, y.jsx)(x.SettingsBlockedIcon, {
                        directional: true
                    }),
                    onClick: () => {
                        const a = () => {
                            const n = r.ChatCollection.get(t.id);
                            if (n == null ? undefined : n.isPSA) {
                                const e = n.msgs.last();
                                (0, C.logChatPSARemove)(e, 1, 1);
                            }
                            (0, o.blockContact)({
                                contact: e.contact,
                                blockEntryPoint: s.BlockEntryPoint.Profile
                            });
                            f.ModalManager.close();
                        };
                        let l = (0, y.jsx)(d.ConfirmPopup, {
                            onOK: a,
                            okText: j.fbt._("Block", null, {
                                hk: "9s17C"
                            }),
                            onCancel: () => f.ModalManager.close(),
                            title: j.fbt._("Block {contact_name}?", [j.fbt._param("contact_name", n)], {
                                hk: "26yDKy"
                            }),
                            children: j.fbt._("Blocked contacts will no longer be able to call you or send you messages.", null, {
                                hk: "3ioCkx"
                            })
                        });
                        if (M.default.isPSA(t.id)) {
                            l = (0, y.jsx)(h.default, {
                                onBlock: a,
                                onCancel: () => f.ModalManager.close()
                            });
                        } else if (t.isBusiness) {
                            l = (0, y.jsx)(i.default, {
                                contact: t,
                                blockEntryPoint: s.BlockEntryPoint.Profile,
                                withReport: false
                            });
                        }
                        f.ModalManager.open(l);
                    },
                    theme: "chat-info",
                    children: j.fbt._("Block {contact_name}", [j.fbt._param("contact_name", n)], {
                        hk: "laDqJ"
                    })
                });
                let S = t.isIAS ? j.fbt._("Report", null, {
                    hk: "2SQkZ4"
                }) : j.fbt._("Report business", null, {
                    hk: "2Tvnn8"
                });
                if (!t.isBusiness) {
                    S = j.fbt._("Report {contact_name}", [j.fbt._param("contact_name", n)], {
                        hk: "3Dqyjo"
                    });
                }
                const k = M.default.isPSA(t.id) ? null : (0, y.jsx)(u.DrawerButton, {
                    testid: "li-report-spam",
                    color: "danger",
                    icon: (0, y.jsx)(b.ThumbsDownIcon, {}),
                    onClick: () => {
                        f.ModalManager.open((0, y.jsx)(m.default, {
                            isMessage: false,
                            isBusiness: e.contact.isBusiness,
                            isGroupChat: false,
                            onReport: () => {
                                const t = r.ChatCollection.get(e.contact.id);
                                if (t) {
                                    (0, g.sendReport)({
                                        chat: t,
                                        spamFlow: v.SpamFlow.AccountInfoReport
                                    });
                                }
                                f.ModalManager.close();
                            },
                            onReportBlockClear: () => {
                                const t = r.ChatCollection.get(e.contact.id);
                                if (t) {
                                    (0, g.sendSpamBlockClear)(t, v.SpamFlow.AccountInfoReport);
                                }
                                f.ModalManager.close();
                            },
                            onCancel: () => f.ModalManager.close()
                        }));
                    },
                    theme: "chat-info",
                    children: S
                });
                return (0, y.jsxs)(c.ChatInfoDrawerButtonsSection, {
                    children: [a, k]
                });
            };
            var i = a(n(208423));
            var o = n(547979);
            var l = n(923092);
            var s = n(400436);
            var r = n(351053);
            var c = n(464659);
            var d = n(103440);
            var u = n(36045);
            var f = n(114850);
            var p = n(21645);
            var h = a(n(179197));
            var m = a(n(338695));
            var g = n(383296);
            var x = n(226017);
            var v = n(453603);
            var b = n(21698);
            var C = n(369084);
            var M = a(n(124928));
            var j = n(548360);
            var _ = n(655241);
            var y = n(785893);
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
                const n = (0, d.jsx)(r.TextSpan, {
                    theme: "title",
                    size: "16",
                    children: c.fbt._("Starred messages", null, {
                        hk: "4wVbNG"
                    })
                });
                const a = (0, d.jsx)(l.StarIcon, {
                    color: s.SvgColorProp.SECONDARY,
                    height: 20
                });
                return (0, d.jsx)(o.ChatInfoDrawerSection, {
                    titleTestId: "section-starred-messages",
                    children: (0, d.jsx)(i.default, {
                        testid: "block-starred-messages",
                        side: "chevron",
                        icon: a,
                        onClick: t,
                        title: n
                    })
                });
            };
            var i = a(n(306007));
            var o = n(464659);
            var l = n(227341);
            var s = n(220584);
            var r = n(180519);
            var c = n(548360);
            var d = n(785893);
        },
        836513: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function () {
                return (0, f.jsxs)(r.FlexRow, {
                    xstyle: m.container,
                    children: [(0, f.jsx)(r.FlexColumn, {
                        xstyle: [m.item],
                        children: p
                    }), (0, f.jsx)(r.FlexColumn, {
                        xstyle: [m.text, m.item],
                        children: (0, f.jsx)(d.TextSpan, {
                            testid: "contact-info-pnh-info",
                            children: u.fbt._("This person's phone number is not shared in this chat. {=m2}", [u.fbt._implicitParam("=m2", (0, f.jsx)(i.default, {
                                testid: "contact-info-pnh-learn-more",
                                onClick: h,
                                children: u.fbt._("Learn more", null, {
                                    hk: "t6HJf"
                                })
                            }))], {
                                hk: "3CEKuh"
                            })
                        })
                    })]
                });
            };
            var i = a(n(196554));
            var o = n(136858);
            var l = n(753233);
            var s = n(258105);
            var r = n(690495);
            var c = n(220584);
            var d = n(180519);
            var u = n(548360);
            a(n(156720));
            var f = n(785893);
            const p = (0, f.jsx)(o.DialpadIcon, {
                directional: true,
                color: c.SvgColorProp.SECONDARY
            });
            const h = () => {
                const e = (0, s.getPhoneNumberHidingFaqUrl)();
                (0, l.openExternalLink)(e);
            };
            const m = {
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
        704714: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                var t;
                let n;
                let {
                    contact: a,
                    onDetailImageLoad: i,
                    onDetailImageClick: o,
                    isMessageYourselfChat: l,
                    isPhoneNumberHidden: s
                } = e;
                const r = N.fbt._("Official WhatsApp Account", null, {
                    hk: "2cEUzF"
                });
                if (I.default.isPSA(a.id)) {
                    n = r;
                } else if (a.isMyContact) {
                    n = (0, A.widToFormattedUser)(a.id);
                } else if (a.id.isLid() && a.phoneNumber != null && ((t = f.ContactCollection.get(a.phoneNumber)) === null || t === undefined ? undefined : t.isMyContact)) {
                    n = (0, A.widToFormattedUser)(a.phoneNumber);
                } else {
                    const e = a.notifyName;
                    if (e != null) {
                        n = `~${e}`;
                    }
                }
                return (0, O.jsxs)(x.default, {
                    theme: "padding-large",
                    children: [(0, O.jsx)("div", {
                        className: (0, R.default)(D.avatar),
                        children: (0, O.jsx)(m.DetailImage, {
                            id: a.id,
                            size: m.DetailImageSize.Large,
                            loader: true,
                            onLoad: i,
                            onClick: o,
                            quality: m.DetailImageQuality.High
                        })
                    }), (0, O.jsxs)(b.FlexColumn, {
                        align: "center",
                        children: [(0, O.jsx)(k.TextHeader, {
                            level: "2",
                            size: "24",
                            xstyle: D.contactName,
                            children: (0, O.jsx)(j.Name, {
                                contact: a,
                                showMessageYourselfName: l,
                                selectable: true,
                                breakWord: true
                            })
                        }), n != null && (0, O.jsx)("div", {
                            className: (0, R.default)(D.secondaryWrapper),
                            children: (0, O.jsx)(h.SelectableSpan, {
                                dir: "auto",
                                selectable: true,
                                children: (0, O.jsx)(k.TextSpan, {
                                    size: "16",
                                    color: "secondary",
                                    children: n
                                })
                            })
                        })]
                    }), s && (0, O.jsx)(p.default, {}), !l && (0, O.jsx)(L, {
                        contact: a,
                        displayRequestPnButton: s
                    }), (0, O.jsx)(C.default, {
                        labels: a.labels
                    })]
                });
            };
            var i = n(287461);
            var o = n(351053);
            var l = n(164777);
            var s = a(n(983098));
            var r = a(n(9729));
            var c = n(230255);
            var d = n(780549);
            var u = n(877171);
            var f = n(177938);
            var p = a(n(836513));
            var h = n(306703);
            var m = n(23641);
            var g = n(521332);
            var x = a(n(969358));
            var v = n(581354);
            var b = n(690495);
            var C = a(n(344460));
            var M = n(114850);
            var j = n(21645);
            var _ = n(417016);
            var y = a(n(755140));
            var S = n(163139);
            var k = n(180519);
            var P = n(676345);
            var w = n(190848);
            var T = n(961745);
            var E = n(130756);
            var I = a(n(124928));
            var A = n(931019);
            var N = n(548360);
            var R = a(n(156720));
            var O = n(785893);
            const D = {
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

            function L (e) {
                let {
                    contact: t,
                    displayRequestPnButton: n
                } = e;
                const a = (0, r.default)((0, S.unproxy)(t));
                const f = () => {
                    (0, v.findChat)(t.id, "chatInfoTopCard").then(e => {
                        d.Cmd.openChatFromUnread(e).then(t => {
                            if (t) {
                                u.ComposeBoxActions.focus(e);
                            }
                        });
                    });
                };
                const p = !(!a.isVideoCallEnabled && !a.isVoiceCallEnabled || I.default.isPSA(t.id)) && (0, O.jsxs)(O.Fragment, {
                    children: [(0, O.jsx)(s.default, {
                        Icon: w.VoiceCallFilledIcon,
                        iconWidth: 19,
                        label: N.fbt._("Audio", null, {
                            hk: "1b375N"
                        }),
                        testid: "contact-action voice-call-button",
                        xstyle: [P.uiMargin.start16, P.uiMargin.end16],
                        disabled: !a.canStartVoiceCall,
                        onClick: () => {
                            const e = t.id.isLid() ? t.phoneNumber : t.id;
                            if ((0, _.shouldDisplayPhoneNumberHidingModal)(t)) {
                                (0, _.displayPhoneNumberHidingModal)(t, false);
                            } else if (e != null) {
                                if (!(T.Voip === null || T.Voip === undefined)) {
                                    T.Voip.callStart(e, false);
                                }
                            }
                        }
                    }), (0, O.jsx)(s.default, {
                        Icon: c.ChatInfoVideoIcon,
                        label: N.fbt._("Video", null, {
                            hk: "3zMUsJ"
                        }),
                        testid: "contact-action video-call-button",
                        xstyle: [P.uiMargin.start16, P.uiMargin.end16],
                        disabled: !a.canStartVideoCall,
                        onClick: () => {
                            const e = t.id.isLid() ? t.phoneNumber : t.id;
                            if ((0, _.shouldDisplayPhoneNumberHidingModal)(t)) {
                                (0, _.displayPhoneNumberHidingModal)(t, true);
                            } else if (e != null) {
                                if (!(T.Voip === null || T.Voip === undefined)) {
                                    T.Voip.callStart(e, true);
                                }
                            }
                        }
                    })]
                });
                const h = N.fbt._("Request", null, {
                    hk: "1Qh451"
                });
                const m = N.fbt._("Requested", null, {
                    hk: "3GgAXn"
                });
                const x = t.canRequestPhoneNumber ? h : m;
                const C = n && (0, O.jsx)(s.default, {
                    Icon: g.DialpadSmallIcon,
                    iconWidth: 19,
                    label: x,
                    xstyle: [P.uiMargin.start16, P.uiMargin.end16],
                    disabled: !t.canRequestPhoneNumber,
                    onClick: () => {
                        M.ModalManager.open((0, O.jsx)(y.default, {
                            entryPoint: E.PNH_ENTRY_POINT_TYPE.CHAT_INFO_REQUEST
                        }));
                    },
                    testid: "request-phone-number-button-consumer"
                });
                let j = null;
                if ((0, i.getABPropConfigValue)("unified_user_profile_navigation_enabled")) {
                    const e = o.ChatCollection.getActive();
                    j = !(e == null ? undefined : e.id.equals(t.id)) && (0, O.jsx)(s.default, {
                        Icon: l.ChatIcon,
                        iconWidth: 19,
                        label: N.fbt._("Message", null, {
                            hk: "4gkjcu"
                        }),
                        testid: "contact-action chat-button",
                        xstyle: [P.uiMargin.start16, P.uiMargin.end16],
                        disabled: false,
                        onClick: f
                    });
                }
                return (0, O.jsxs)(b.FlexRow, {
                    justify: "center",
                    xstyle: [P.uiMargin.top8, P.uiMargin.bottom4],
                    children: [C, j, p]
                });
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
                    text: c.fbt._("This is an official account of WhatsApp", null, {
                        hk: "2Av1mT"
                    }),
                    title: c.fbt._("Security", null, {
                        hk: "2jDPpv"
                    }),
                    onClick: () => {
                        (0, s.default)((0, l.formatWaChatSecurityModalText)(), (0, o.getWAChatFaqUrl)());
                    }
                };
                return (0, d.jsx)(i.default, {
                    highlightSurface: r.PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_CONTACT,
                    title: e.title,
                    text: e.text,
                    onClick: e.onClick
                });
            };
            var i = a(n(409558));
            var o = n(258105);
            var l = n(729763);
            var s = a(n(606037));
            var r = n(130756);
            var c = n(548360);
            var d = n(785893);
        },
        983345: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const t = e.contact.getStatus();
                const n = (0, u.useModelValues)(e.contact, ["id", "phoneNumber"]);
                const {
                    status: a
                } = (0, u.useModelValues)(t, ["status"]);
                const h = a === "" ? null : (0, f.jsx)(i.default, {
                    multiline: true,
                    children: (0, f.jsx)(c.TextSpan, {
                        theme: "title",
                        children: (0, f.jsx)(l.default, {
                            id: n.id
                        })
                    })
                });
                let m;
                if (n.id.isLid()) {
                    if (n.phoneNumber != null) {
                        m = n.phoneNumber;
                    }
                } else {
                    m = n.id;
                }
                const g = m ? (0, f.jsx)(i.default, {
                    separator: true,
                    children: (0, f.jsx)(s.SelectableSpan, {
                        dir: "auto",
                        selectable: true,
                        children: (0, f.jsx)(c.TextSpan, {
                            theme: "title",
                            children: (0, d.widToFormattedUser)(m)
                        })
                    })
                }) : null;
                return (0, f.jsxs)(o.ChatInfoDrawerSection, {
                    xstyle: p.container,
                    titleTestId: "section-about-and-phone-number",
                    title: r.default.t(211),
                    children: [h, g]
                });
            };
            var i = a(n(355858));
            var o = n(464659);
            var l = a(n(203528));
            var s = n(306703);
            var r = a(n(932325));
            var c = n(180519);
            var d = n(931019);
            a(n(156720));
            var u = n(655241);
            var f = n(785893);
            const p = {
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
                const n = (0, d.jsx)(f, {
                    onClick: function () {
                        s.ModalManager.open((0, d.jsx)(r.default, {
                            contact: t
                        }));
                    }
                });
                return (0, d.jsx)(o.default, {
                    xstyle: u.businessAccount,
                    children: n
                });
            };
            var i = a(n(831269));
            var o = a(n(969358));
            var l = n(731085);
            var s = n(114850);
            var r = a(n(517729));
            var c = n(548360);
            a(n(156720));
            var d = n(785893);
            const u = {
                businessAccount: {
                    borderTop: "mug5vpb7",
                    fontSize: "f8jlpxt4"
                },
                businessTitleWithSMBUpsell: {
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

            function f (e) {
                let {
                    onClick: t
                } = e;
                return (0, d.jsx)(i.default, {
                    testid: "business-title",
                    xstyle: u.businessTitleWithSMBUpsell,
                    onClick: t,
                    side: (0, d.jsx)(l.InfoIcon, {
                        xstyle: u.bannerSvgContainer,
                        iconXstyle: u.bannerSvg,
                        displayInline: true
                    }),
                    children: c.fbt._("This is a business account.", null, {
                        hk: "2x8QUJ"
                    })
                });
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
                    onProductCatalog: V
                } = e;
                const H = (0, B.useContext)(M.DrawerContext);
                const U = (0, w.getProductCatalogSessionId)(H);
                const W = (0, m.default)((0, A.unproxy)(e.contact));

                function Y () {
                    return (Y = (0, i.default)(function* () {
                        const e = yield(0, _.findChat)(a.id, "businessActions");
                        if (yield v.Cmd.openChatFromUnread(e)) {
                            j.DrawerManager.closeDrawerRight();
                            if ((0, s.btmThreadsLoggingEnabled)()) {
                                b.ComposeBoxActions.addMsgSendingLogAttributes(e, {
                                    handleMultiple () {
                                        (0, x.handleActivitiesForChatThreadLogging)([{
                                            activityType: "profileReplies",
                                            ts: (0, o.unixTime)(),
                                            chatId: e.id
                                        }]);
                                    }
                                });
                            }
                        }
                    })).apply(this, arguments);
                }
                let z;
                const q = f.ChatCollection.getActive();
                if (!(q == null ? undefined : q.id.equals(a.id))) {
                    var K;
                    var X;
                    (0, r.logMessageClick)(U, (K = a.businessProfile) === null || K === undefined ? undefined : K.isProfileLinked, !!((X = a.businessProfile) === null || X === undefined ? undefined : X.coverPhoto));
                    z = (0, G.jsx)(h.default, {
                        xstyle: [N.uiMargin.horiz12],
                        Icon: (0, l.getABPropConfigValue)("unified_user_profile_navigation_enabled") ? p.ChatIcon : g.ChatMsgIcon,
                        label: L.fbt._("Message", null, {
                            hk: "mZ5DE"
                        }),
                        onClick: () => {
                            ! function () {
                                Y.apply(this, arguments);
                            }();
                        },
                        testid: "business-action chat"
                    });
                }
                let Z;
                let J;
                let Q;
                if (W.isVoiceCallEnabled) {
                    Z = (0, G.jsx)(h.default, {
                        xstyle: [N.uiMargin.horiz12],
                        Icon: R.VoiceCallFilledIcon,
                        label: L.fbt._("Audio", null, {
                            hk: "rWU8D"
                        }),
                        disabled: !W.canStartVoiceCall,
                        onClick: () => {
                            var e;
                            var t;
                            (0, r.logVoiceCallClick)(U, (e = a.businessProfile) === null || e === undefined ? undefined : e.isProfileLinked, !!((t = a.businessProfile) === null || t === undefined ? undefined : t.coverPhoto));
                            const n = a.id.isLid() ? a.phoneNumber : a.id;
                            if ((0, P.shouldDisplayPhoneNumberHidingModal)(a)) {
                                (0, P.displayPhoneNumberHidingModal)(a, false);
                            } else if (n != null) {
                                if (!(O.Voip === null || O.Voip === undefined)) {
                                    O.Voip.callStart(n, false);
                                }
                            }
                        },
                        testid: "business-action voice-call"
                    });
                }
                if (((t = a.businessProfile) === null || t === undefined || (n = t.profileOptions) === null || n === undefined ? undefined : n.commerceExperience) === c.COMMERCE_EXPERIENCE_TYPES.CATALOG) {
                    J = (0, G.jsx)(h.default, {
                        xstyle: [N.uiMargin.horiz12],
                        Icon: u.CatalogFilledIcon,
                        label: L.fbt._("Catalog", null, {
                            hk: "3QDkTE"
                        }),
                        onClick: () => {
                            var e;
                            var t;
                            (0, r.logCatalogClick)(U, (e = a.businessProfile) === null || e === undefined ? undefined : e.isProfileLinked, !!((t = a.businessProfile) === null || t === undefined ? undefined : t.coverPhoto));
                            V((0, w.getProductCatalogContext)(H), "ContactInfo");
                        },
                        testid: "business-action catalog"
                    });
                }
                if ((0, d.hasShop)(a.businessProfile)) {
                    if (!((0, s.bannedShopsEnabled)() && (0, d.isShopBanned)(a.businessProfile))) {
                        Q = (0, G.jsx)(h.default, {
                            xstyle: [N.uiMargin.horiz12],
                            Icon: I.ShopFilledIcon,
                            label: L.fbt._("Shop", null, {
                                hk: "3KsdlE"
                            }),
                            onClick: function () {
                                var e;
                                var t;
                                (0, r.logShopsClick)(U, (e = a.businessProfile) === null || e === undefined ? undefined : e.isProfileLinked, !!((t = a.businessProfile) === null || t === undefined ? undefined : t.coverPhoto));
                                (0, d.goToShop)(a.businessProfile);
                            },
                            testid: "business-action shop"
                        });
                    }
                }
                const $ = !a.isIAS && (0, G.jsx)(h.default, {
                    xstyle: [N.uiMargin.horiz12],
                    Icon: S.ForwardFilledIcon,
                    label: L.fbt._("Share", null, {
                        hk: "4F3c6E"
                    }).toString(),
                    onClick: function () {
                        var e;
                        var t;
                        (0, r.logForwardClick)(U, (e = a.businessProfile) === null || e === undefined ? undefined : e.isProfileLinked, !!((t = a.businessProfile) === null || t === undefined ? undefined : t.coverPhoto));
                        k.ModalManager.open((0, G.jsx)(E.SendContactsModalLoadable, {
                            contacts: [(0, A.unproxy)(a)],
                            onContactsSent: e => {
                                v.Cmd.openChatFromUnread(e).then(() => {});
                            }
                        }));
                    },
                    testid: "business-action forward"
                });
                const ee = L.fbt._("Request", null, {
                    hk: "1Qh451"
                });
                const te = L.fbt._("Requested", null, {
                    hk: "3GgAXn"
                });
                const ne = a.canRequestPhoneNumber ? ee : te;
                const ae = e.displayRequestPnButton && (0, G.jsx)(h.default, {
                    Icon: C.DialpadSmallIcon,
                    xstyle: [N.uiMargin.horiz12],
                    iconWidth: 19,
                    label: ne,
                    disabled: !a.canRequestPhoneNumber,
                    onClick: () => {
                        k.ModalManager.open((0, G.jsx)(T.default, {
                            entryPoint: D.PNH_ENTRY_POINT_TYPE.CHAT_INFO_REQUEST
                        }));
                    },
                    testid: "request-phone-number-button-business"
                });
                return (0, G.jsxs)(y.FlexRow, {
                    xstyle: F.actionsRow,
                    justify: "center",
                    children: [ae, z, Z, J, Q, $]
                });
            };
            var i = a(n(348926));
            var o = n(632157);
            var l = n(287461);
            var s = n(72696);
            var r = n(815651);
            var c = n(817649);
            var d = n(542358);
            var u = n(623282);
            var f = n(351053);
            var p = n(164777);
            var h = a(n(983098));
            var m = a(n(9729));
            var g = n(174571);
            var x = n(698867);
            var v = n(780549);
            var b = n(877171);
            var C = n(521332);
            var M = n(568550);
            var j = n(900316);
            var _ = n(581354);
            var y = n(690495);
            var S = n(672185);
            var k = n(114850);
            var P = n(417016);
            var w = n(932523);
            var T = a(n(755140));
            var E = n(340576);
            var I = n(76104);
            var A = n(163139);
            var N = n(676345);
            var R = n(190848);
            var O = n(961745);
            var D = n(130756);
            var L = n(548360);
            var B = n(667294);
            a(n(156720));
            var G = n(785893);
            const F = {
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
                const l = (0, d.getProductCatalogSessionId)((0, m.useContext)(r.DrawerContext));
                const s = (0, o.getBusinessOpenState)(t);
                const [c, p] = (0, m.useState)(true);
                if (t == null) {
                    return null;
                }
                const b = (0, u.getBusinessHours)(t).map(e => {
                    const {
                        day: t,
                        hours: n,
                        first: a
                    } = e;
                    let i = t;
                    let l = n;
                    let r = false;
                    if (a) {
                        switch (s.status) {
                            case o.BUSINESS_OPEN_STATUS.OPEN_24H:
                                i = h.fbt._("Open now", null, {
                                    hk: "28hpHy"
                                });
                                l = h.fbt._("Open 24 hours", null, {
                                    hk: "1AlfF5"
                                });
                                r = true;
                                break;
                            case o.BUSINESS_OPEN_STATUS.OPEN_APPOINTMENT:
                                i = h.fbt._("Open now", null, {
                                    hk: "28hpHy"
                                });
                                l = h.fbt._("Open by appointment only", null, {
                                    hk: "1nxH9v"
                                });
                                r = true;
                                break;
                            case o.BUSINESS_OPEN_STATUS.OPEN:
                                i = h.fbt._("Open now", null, {
                                    hk: "28hpHy"
                                });
                                r = true;
                                break;
                            case o.BUSINESS_OPEN_STATUS.CLOSED_TODAY:
                                l = h.fbt._("Closed", null, {
                                    hk: "3IRgct"
                                });
                        }
                    }
                    if (!a && c) {
                        return null;
                    } else {
                        return (0, g.jsx)(v, {
                            day: i,
                            dayIsOpen: r,
                            hours: l,
                            first: a,
                            collapsed: c
                        }, t);
                    }
                });
                return (0, g.jsx)(f.default, {
                    xstyle: x.businessHours,
                    onClick: () => {
                        (0, i.logHoursClick)(l, n, !!a);
                        p(!c);
                    },
                    testid: "business-hours-expand",
                    children: b
                });
            };
            var i = n(815651);
            var o = n(542358);
            var l = n(592362);
            var s = n(752253);
            var r = n(568550);
            var c = n(305521);
            var d = n(932523);
            var u = n(341463);
            var f = a(n(625903));
            var p = a(n(363467));
            var h = n(548360);
            var m = n(667294);
            a(n(156720));
            var g = n(785893);
            const x = {
                businessHours: {
                    display: "f804f6gw",
                    width: "ln8gz9je",
                    textAlign: "ml4r5409"
                }
            };

            function v (e) {
                if (e.first) {
                    const t = (0, g.jsx)("div", {
                        className: p.default.businessHoursChevron,
                        role: "button",
                        children: (0, g.jsx)(l.ChevronDownAltIcon, {
                            className: e.collapsed ? "" : p.default.flipSvg,
                            displayInline: true
                        })
                    });
                    return (0, g.jsxs)("div", {
                        className: (0, s.cx)({
                            [p.default.firstRow]: e.first,
                            [p.default.businessHoursRow]: true
                        }),
                        children: [(0, g.jsx)("div", {
                            className: (0, s.cx)({
                                [p.default.dayIsOpen]: e.dayIsOpen,
                                [p.default.businessHoursDay]: true
                            }),
                            children: (0, g.jsx)(c.EmojiText, {
                                direction: "auto",
                                text: e.day
                            })
                        }), (0, g.jsx)("div", {
                            className: p.default.businessHoursHours,
                            children: (0, g.jsx)(c.EmojiText, {
                                direction: "auto",
                                text: e.hours
                            })
                        }), t]
                    });
                }
                return (0, g.jsxs)("div", {
                    className: p.default.businessHoursRow,
                    children: [(0, g.jsx)("div", {
                        className: p.default.businessHoursDay,
                        children: (0, g.jsx)(c.EmojiText, {
                            direction: "auto",
                            text: e.day
                        })
                    }), (0, g.jsx)("div", {
                        className: p.default.businessHoursHours,
                        children: (0, g.jsx)(c.EmojiText, {
                            direction: "auto",
                            text: e.hours
                        })
                    })]
                });
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
                    businessProfile: t
                } = e;
                const {
                    description: n,
                    address: a,
                    latitude: M,
                    longitude: j,
                    website: _,
                    email: y,
                    businessHours: S,
                    isProfileLinked: k,
                    coverPhoto: P
                } = (0, v.useModelValues)(t, ["description", "address", "latitude", "longitude", "website", "email", "businessHours", "isProfileLinked", "coverPhoto"]);
                const w = (0, x.useContext)(r.DrawerContext);
                const T = (0, p.getProductCatalogSessionId)(w);
                let E;
                let I;
                let A;
                let N;
                let R;
                let O;
                if (n != null) {
                    E = (0, b.jsx)("div", {
                        className: m.default.section,
                        children: (0, b.jsx)(d.ExpandableText, {
                            text: n,
                            textLimit: s.default.BUSINESS_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH,
                            children: e => {
                                let {
                                    textLimit: t
                                } = e;
                                return (0, b.jsx)(c.EmojiText, {
                                    className: m.default.description,
                                    selectable: true,
                                    direction: "auto",
                                    text: n,
                                    textLimit: t,
                                    breakWord: true
                                });
                            }
                        })
                    });
                }
                if (S != null) {
                    I = (0, b.jsx)("div", {
                        className: m.default.section,
                        children: (0, b.jsx)(i.default, {
                            businessHours: S,
                            isProfileLinked: k,
                            hasCoverPhoto: !!P
                        })
                    });
                }
                if (a != null) {
                    A = (0, b.jsx)("div", {
                        className: m.default.section,
                        children: (0, b.jsx)(c.EmojiText, {
                            selectable: true,
                            direction: "auto",
                            text: a
                        })
                    });
                }
                if (M != null && j != null) {
                    N = (0, b.jsx)("div", {
                        style: {
                            height: 132
                        },
                        className: (0, g.default)(m.default.section, m.default.map),
                        children: (0, b.jsx)(f.default, {
                            lat: M,
                            lng: j,
                            name: a || "",
                            width: 590,
                            height: 132,
                            onClick: () => (0, o.logLocationClick)(T, k, !!P),
                            testid: "business-info-map"
                        })
                    });
                }
                if (y != null) {
                    R = (0, b.jsx)("div", {
                        className: m.default.section,
                        children: (0, b.jsx)(u.ExternalLink, {
                            href: `mailto:${y}`,
                            onClick: () => (0, o.logEmailClick)(T, k, !!P),
                            testid: "business-info-email",
                            children: y
                        })
                    });
                }
                if (_ != null && _.length > 0) {
                    O = (0, b.jsx)("div", {
                        className: m.default.section,
                        children: _.map(e => (0, b.jsx)("div", {
                            children: (0, b.jsx)(u.ExternalLink, {
                                href: h.default.toMaliciousSiteRedirect(e),
                                onClick: () => (0, o.logWebsiteClick)(T, k, !!P),
                                testid: "business-info-website",
                                children: e
                            })
                        }, e))
                    });
                }
                if (E == null && I == null && A == null && N == null && R == null && O == null) {
                    return null;
                }
                return (0, b.jsxs)(l.ChatInfoDrawerSection, {
                    xstyle: C.container,
                    children: [E, I, A, N, R, O]
                });
            };
            var i = a(n(450715));
            var o = n(815651);
            var l = n(464659);
            var s = a(n(846870));
            var r = n(568550);
            var c = n(305521);
            var d = n(999649);
            var u = n(753233);
            var f = a(n(459510));
            var p = n(932523);
            var h = a(n(79291));
            var m = a(n(850858));
            var g = a(n(261294));
            var x = n(667294);
            a(n(156720));
            var v = n(655241);
            var b = n(785893);
            const C = {
                container: {
                    paddingTop: "i4pc7asj",
                    paddingBottom: "q1nnjopg"
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
                var t;
                const {
                    contact: n,
                    isMessageYourselfChat: a
                } = e;
                let g;
                let x;
                let v;
                var b;
                if (((t = n.businessProfile) === null || t === undefined ? undefined : t.customUrl) != null) {
                    v = (0, c.jsx)("div", {
                        className: (0, r.default)(f),
                        children: (0, c.jsx)(i.EmojiText, {
                            text: (b = n.businessProfile) === null || b === undefined ? undefined : b.customUrl,
                            direction: "auto",
                            titlify: true,
                            breakWord: true,
                            inlineblock: true
                        })
                    });
                }
                if (n.isMe) {
                    if (a) {
                        g = (0, c.jsx)(o.Name, {
                            contact: n,
                            showBusinessCheckmark: n.showBusinessCheckmarkAsPrimary,
                            showMessageYourselfName: true,
                            useVerifiedName: true,
                            breakWord: true,
                            selectable: true
                        });
                        x = (0, c.jsx)(o.Name, {
                            contact: n,
                            showBusinessCheckmark: n.showBusinessCheckmarkAsPrimary,
                            selectable: true
                        });
                    } else if (n.name !== n.verifiedName) {
                        let e;
                        if (n.showBusinessCheckmarkAsSecondary) {
                            e = (0, c.jsx)("div", {
                                className: (0, r.default)(u),
                                children: (0, c.jsx)(l.PsaVerifiedIcon, {})
                            });
                        }
                        g = (0, c.jsx)(o.Name, {
                            contact: n,
                            breakWord: true,
                            selectable: true
                        });
                        x = (0, c.jsx)("div", {
                            className: (0, r.default)(f),
                            children: (0, c.jsxs)("div", {
                                className: (0, r.default)(m),
                                children: [(0, c.jsx)(i.EmojiText, {
                                    text: `~${n.verifiedName}`,
                                    className: (0, r.default)(h),
                                    direction: "auto",
                                    ellipsify: true,
                                    titlify: true,
                                    selectable: true
                                }), e]
                            })
                        });
                    } else {
                        g = (0, c.jsx)(o.Name, {
                            contact: n,
                            showBusinessCheckmark: n.showBusinessCheckmarkAsPrimary,
                            breakWord: true,
                            selectable: true
                        });
                    }
                } else {
                    g = n.isIAS ? (0, c.jsx)("span", {
                        children: (0, c.jsx)(o.Name, {
                            contact: n
                        })
                    }) : (0, c.jsx)(i.EmojiText, {
                        text: n.verifiedName,
                        direction: "auto",
                        ellipsify: true,
                        titlify: true,
                        breakWord: true,
                        selectable: true
                    });
                    x = n.isIAS ? (0, c.jsx)("div", {
                        className: (0, r.default)(f),
                        children: (0, c.jsx)(i.EmojiText, {
                            text: s.fbt._("Official WhatsApp Account", null, {
                                hk: "4oZMU1"
                            }),
                            direction: "auto",
                            ellipsify: true,
                            titlify: true,
                            breakWord: true,
                            selectable: true
                        })
                    }) : (0, c.jsx)("div", {
                        className: (0, r.default)(f),
                        children: (0, c.jsx)(o.Name, {
                            testid: "contact-info-subtitle",
                            contact: n,
                            showBusinessCheckmark: n.showBusinessCheckmarkAsPrimary,
                            selectable: true
                        })
                    });
                }
                return (0, c.jsxs)("div", {
                    className: (0, r.default)(d),
                    children: [(0, c.jsx)("div", {
                        className: (0, r.default)(p),
                        children: g
                    }), x, v]
                });
            };
            var i = n(305521);
            var o = n(21645);
            var l = n(376355);
            var s = n(548360);
            var r = a(n(156720));
            var c = n(785893);
            const d = {
                marginTop: "tt8xd2xn",
                marginEnd: "jnwc1y2a",
                marginBottom: "ngycyvoj",
                marginStart: "svoq16ka"
            };
            const u = {
                display: "ew8mgplc",
                marginTop: "o9i7y497",
                marginEnd: "jnwc1y2a",
                marginBottom: "mpdn4nr2",
                marginStart: "k6y3xtnu"
            };
            const f = {
                color: "p6nhtbpp",
                fontSize: "enbbiyaj",
                lineHeight: "tkq7s68q",
                marginTop: "tt8xd2xn",
                marginEnd: "jnwc1y2a",
                marginBottom: "inww9tbj",
                marginStart: "svoq16ka"
            };
            const p = {
                fontSize: "iqrewfee",
                fontWeight: "sy6s5v3r",
                marginTop: "tt8xd2xn",
                marginEnd: "jnwc1y2a",
                marginBottom: "or9x5nie",
                marginStart: "svoq16ka"
            };
            const h = {
                flexGrow: "tvf2evcx"
            };
            const m = {
                display: "p357zi0d",
                justifyContent: "ac2vgrno"
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
                        case o.BUSINESS_OPEN_STATUS.OPEN_24H:
                            return s.fbt._("{open} 24 hours", [s.fbt._param("open", `<span class="${(0, r.default)(u)}">${s.fbt._("Open", null, {
              hk: "187rvw"
            }).toString()}</span>`)], {
                                hk: "1aA6f9"
                            });
                        case o.BUSINESS_OPEN_STATUS.OPEN_APPOINTMENT:
                            return s.fbt._("{open} by appointment only", [s.fbt._param("open", `<span class="${(0, r.default)(u)}">${s.fbt._("Open", null, {
              hk: "187rvw"
            }).toString()}</span>`)], {
                                hk: "z8CGT"
                            });
                        case o.BUSINESS_OPEN_STATUS.OPEN:
                            if (e.openUntil && e.additionalOpen && e.additionalClose) {
                                return s.fbt._("{open} until {time}, {additionalOpenTime} - {additionalCloseTime}", [s.fbt._param("open", `<span class="${(0, r.default)(u)}">${s.fbt._("Open", null, {
                hk: "187rvw"
              }).toString()}</span>`), s.fbt._param("time", p(e.openUntil)), s.fbt._param("additionalOpenTime", p(e.additionalOpen)), s.fbt._param("additionalCloseTime", p(e.additionalClose))], {
                                    hk: "2dJgLQ"
                                });
                            }
                            if (e.openUntil) {
                                return s.fbt._("{open} until {time}", [s.fbt._param("open", `<span class="${(0, r.default)(u)}">${s.fbt._("Open", null, {
                hk: "187rvw"
              }).toString()}</span>`), s.fbt._param("time", p(e.openUntil))], {
                                    hk: "3Dd8an"
                                });
                            }
                            break;
                        case o.BUSINESS_OPEN_STATUS.CLOSED:
                            if (e.opensAt) {
                                return s.fbt._("{closed}, opens at {time}", [s.fbt._param("closed", `<span class="${(0, r.default)(d)}">${s.fbt._("Closed now", null, {
                hk: "2oDK4r"
              }).toString()}</span>`), s.fbt._param("time", p(e.opensAt))], {
                                    hk: "LvVmY"
                                });
                            } else {
                                return `<span class="${(0, r.default)(d)}">${s.fbt._("Closed now", null, {
                hk: "2oDK4r"
              }).toString()}</span>`;
                            }
                        case o.BUSINESS_OPEN_STATUS.CLOSED_TODAY:
                            return `<span class="${(0, r.default)(d)}">${s.fbt._("Closed today", null, {
              hk: "3uCCvH"
            }).toString()}</span>`;
                    }
                    return null;
                }((0, o.getBusinessOpenState)(t));
                if (n == null) {
                    return null;
                }
                const a = i.default.sanitize(n.toString());
                return (0, c.jsx)("div", {
                    className: (0, r.default)(f),
                    dangerouslySetInnerHTML: {
                        __html: a
                    }
                });
            };
            var i = a(n(724843));
            var o = n(542358);
            var l = a(n(932325));
            var s = n(548360);
            var r = a(n(156720));
            var c = n(785893);
            const d = {
                color: "mvxzr2tb"
            };
            const u = {
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
                    return e.toLocaleTimeString(l.default.getLocale(), {
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
                const t = (0, A.useModelValues)(e.contact, ["id", "verifiedLevel", "name", "verifiedName"]);
                const n = (0, A.useModelValues)(e.businessProfile, ["description", "categories", "website", "email", "stale", "latitude", "longitude", "businessHours", "structuredAddress"]);
                (0, I.useEffect)(() => {
                    new k.ViewBusinessProfileWamEvent({
                        viewBusinessProfileAction: P.VIEW_BUSINESS_PROFILE_ACTION.ACTION_IMPRESSION
                    }).commit();
                }, []);
                const a = (0, N.jsx)(R, {
                    contact: t
                });
                let i;
                let r;
                let c;
                let u;
                let p;
                let v;
                const C = n;
                if (C.stale) {
                    i = (0, N.jsx)("div", {
                        className: w.default.contactBusinessInfoSpinner,
                        children: (0, N.jsx)(S.Spinner, {
                            size: 20,
                            stroke: 5
                        })
                    });
                } else {
                    var M;
                    r = ((M = C.categories) === null || M === undefined ? undefined : M.length) ? (0, N.jsx)(B, {
                        icon: (0, N.jsx)(o.BusinessCategoryIcon, {}),
                        children: (0, N.jsx)(m.EmojiText, {
                            selectable: true,
                            direction: "auto",
                            text: C.categories.map(e => e.localized_display_name).join(b.default.t(253))
                        })
                    }) : null;
                    c = C.description ? (0, N.jsx)(B, {
                        icon: (0, N.jsx)(l.BusinessDescriptionIcon, {}),
                        children: (0, N.jsx)(g.ExpandableText, {
                            text: C.description,
                            textLimit: f.default.BUSINESS_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH,
                            children: e => {
                                let {
                                    textLimit: t
                                } = e;
                                return (0, N.jsx)(m.EmojiText, {
                                    selectable: true,
                                    direction: "auto",
                                    breakWord: true,
                                    text: C.description,
                                    textLimit: t
                                });
                            }
                        })
                    }) : null;
                    if (C.website && Array.isArray(C.website) && C.website.length) {
                        u = C.website.map((e, t) => {
                            const n = (0, y.getWebsiteLink)(e);
                            const a = (0, N.jsx)(m.EmojiText, {
                                selectable: true,
                                direction: "auto",
                                text: e
                            });
                            const i = (0, N.jsx)(x.ExternalLink, {
                                className: w.default.link,
                                href: n,
                                children: a
                            });
                            return (0, N.jsx)(B, {
                                icon: (0, N.jsx)(d.BusinessWebsiteIcon, {}),
                                children: i
                            }, t);
                        });
                    }
                    if (C.businessHours) {
                        p = (0, N.jsx)(O, {
                            businessHours: C.businessHours
                        });
                    }
                    const e = C.email;
                    if (e) {
                        const t = (0, N.jsx)(m.EmojiText, {
                            selectable: true,
                            direction: "auto",
                            text: e
                        });
                        const n = (0, N.jsx)(x.ExternalLink, {
                            className: w.default.link,
                            href: `mailto:${e}`,
                            children: t
                        });
                        v = (0, N.jsx)(B, {
                            icon: (0, N.jsx)(s.BusinessEmailIcon, {}),
                            dir: "auto",
                            children: n
                        });
                    }
                }
                const j = C.latitude !== undefined && C.longitude !== undefined || C.structuredAddress;
                let _;
                if (i || j || r || c || p != null || v || u) {
                    _ = (0, N.jsx)(h.default, {
                        theme: "padding",
                        children: (0, N.jsxs)("div", {
                            className: w.default.contactBusinessInfo,
                            children: [i, (0, N.jsx)(L, {
                                contactName: t.name,
                                latitude: C.latitude,
                                longitude: C.longitude,
                                structuredAddress: C.structuredAddress
                            }), r, c, p, v, u]
                        })
                    });
                }
                return (0, N.jsxs)(N.Fragment, {
                    children: [(0, N.jsx)(h.default, {
                        children: a
                    }), _]
                });
            };
            var i = n(115888);
            var o = n(624573);
            var l = n(718620);
            var s = n(423082);
            var r = n(675305);
            var c = n(817649);
            var d = n(36409);
            var u = n(592362);
            var f = a(n(846870));
            var p = a(n(831269));
            var h = a(n(969358));
            var m = n(305521);
            var g = n(999649);
            var x = n(753233);
            var v = n(731085);
            var b = a(n(932325));
            var C = a(n(459510));
            var M = n(300987);
            var j = n(114850);
            var _ = a(n(517729));
            var y = n(341463);
            var S = n(956113);
            var k = n(875302);
            var P = n(130756);
            var w = a(n(161160));
            var T = n(548360);
            var E = a(n(261294));
            var I = n(667294);
            var A = n(655241);
            var N = n(785893);

            function R (e) {
                let {
                    contact: t
                } = e;
                const n = t.verifiedLevel === c.VERIFIED_LEVEL.HIGH ? T.fbt._("Official business account", null, {
                    hk: "1KruJ"
                }) : T.fbt._("Business account", null, {
                    hk: "2lzdAg"
                });
                return (0, N.jsx)(p.default, {
                    testid: "business-title",
                    onClick: j.ModalManager.open((0, N.jsx)(_.default, {
                        contact: t
                    })),
                    side: (0, N.jsx)(v.InfoIcon, {
                        className: w.default.infoIcon,
                        displayInline: true
                    }),
                    children: n
                });
            }

            function O (e) {
                let {
                    businessHours: t
                } = e;
                const [n, a] = (0, I.useState)(true);
                const i = (0, y.getBusinessHours)(t).map(e => {
                    const {
                        day: t,
                        hours: a,
                        first: i
                    } = e;
                    if (!i && n) {
                        return null;
                    } else {
                        return (0, N.jsx)(D, {
                            day: t,
                            hours: a,
                            first: i,
                            collapsed: n
                        }, t);
                    }
                });
                return (0, N.jsx)(B, {
                    icon: (0, N.jsx)(r.BusinessHoursIcon, {}),
                    onClick: () => a(!n),
                    children: i
                });
            }
            const D = e => {
                const t = e.first ? (0, N.jsx)("div", {
                    className: w.default.businessHoursChevron,
                    role: "button",
                    children: (0, N.jsx)(u.ChevronDownAltIcon, {
                        className: e.collapsed ? "" : w.default.flipSvg,
                        displayInline: true
                    })
                }) : null;
                return (0, N.jsxs)("div", {
                    className: w.default.businessHoursRow,
                    children: [(0, N.jsx)("div", {
                        className: w.default.businessHoursDay,
                        children: (0, N.jsx)(m.EmojiText, {
                            direction: "auto",
                            text: e.day
                        })
                    }), (0, N.jsx)("div", {
                        className: w.default.businessHoursHours,
                        children: (0, N.jsx)(m.EmojiText, {
                            direction: "auto",
                            text: e.hours
                        })
                    }), t]
                });
            };
            const L = e => {
                let {
                    contactName: t,
                    latitude: n,
                    longitude: a,
                    structuredAddress: o
                } = e;
                const l = o ? function (e) {
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
                }(o) : null;
                let s;
                let r;
                if (n != null && a != null) {
                    s = (0, N.jsx)("div", {
                        style: {
                            height: 150
                        },
                        className: w.default.businessMap,
                        children: (0, N.jsx)(C.default, {
                            lat: n,
                            lng: a,
                            name: l || t,
                            width: 565,
                            height: 150
                        })
                    });
                }
                if (l) {
                    let e;
                    e = n != null && a != null ? (0, M.getMapUrl)(n, a, l) : (0, M.getSearchUrl)(l);
                    r = (0, N.jsx)("div", {
                        className: w.default.address,
                        children: (0, N.jsx)(x.ExternalLink, {
                            href: e,
                            children: (0, N.jsx)(m.EmojiText, {
                                selectable: true,
                                direction: "auto",
                                text: l
                            })
                        })
                    });
                }
                if (r || s) {
                    return (0, N.jsxs)(B, {
                        icon: (0, N.jsx)(i.BusinessAddressIcon, {}),
                        children: [r, s]
                    });
                } else {
                    return null;
                }
            };
            const B = e => (0, N.jsxs)("div", {
                className: (0, E.default)(w.default.dataRow, e.className),
                onClick: e.onClick,
                children: [(0, N.jsx)("div", {
                    className: w.default.dataRowIcon,
                    children: e.icon
                }), (0, N.jsx)("div", {
                    className: w.default.dataRowText,
                    children: e.children
                })]
            });
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
                    onProductCatalog: g,
                    onProfilePicLoad: x,
                    onProfilePicClick: v,
                    isMessageYourselfChat: b,
                    isPhoneNumberHidden: C
                } = e;
                const {
                    businessHours: M,
                    categories: j
                } = (0, f.useModelValues)(n, ["businessHours", "categories"]);
                const _ = (0, p.jsx)(o.default, {
                    contact: t,
                    isMessageYourselfChat: b
                });
                let y;
                if (j != null && j.length > 0) {
                    y = t.isIAS ? null : (0, p.jsx)("div", {
                        className: (0, u.default)(m),
                        children: j.map(e => e.localized_display_name).join(d.default.t(252))
                    });
                }
                const S = M ? (0, p.jsx)(l.BusinessOpenHours, {
                    hours: M
                }) : null;
                const k = t.businessProfile ? (0, p.jsx)(s.default, {
                    contact: t,
                    businessProfile: t.businessProfile,
                    onClick: v,
                    onOpenStatus: a,
                    onLoad: x
                }) : null;
                return (0, p.jsxs)(c.default, {
                    theme: "padding-no-margin",
                    children: [k, (0, p.jsxs)("div", {
                        className: (0, u.default)(h),
                        children: [_, C && (0, p.jsx)(r.default, {}), y, S, (0, p.jsx)(i.default, {
                            contact: t,
                            onProductCatalog: g,
                            displayRequestPnButton: C
                        })]
                    })]
                });
            };
            var i = a(n(520228));
            var o = a(n(766491));
            var l = n(449397);
            var s = a(n(411019));
            var r = a(n(836513));
            var c = a(n(969358));
            var d = a(n(932325));
            var u = a(n(156720));
            var f = n(655241);
            var p = n(785893);
            const h = {
                textAlign: "qfejxiq4"
            };
            const m = {
                marginTop: "tt8xd2xn",
                marginEnd: "jnwc1y2a",
                marginBottom: "brac1wpa",
                marginStart: "svoq16ka",
                fontSize: "f8jlpxt4",
                color: "sbs3osm6",
                lineHeight: "jgi8eev7"
            };
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
                } = (0, g.default)(n);
                const {
                    name: C
                } = (0, x.useModelValues)(a.contact, ["name"]);
                const M = (0, o.isIntegritySuspendedCommunity)(a);
                (0, m.useEffect)(() => {
                    (0, u.queryAndUpdateSubgroupsMetadata)(n.id, n.joinedSubgroups);
                }, []);
                const j = h.fbt._("Community", null, {
                    hk: "2P4Qwb"
                });
                return (0, v.jsx)(r.default, {
                    theme: "no-padding",
                    children: (0, v.jsx)(i.default, {
                        testid: "group-info-community-section",
                        image: (0, v.jsx)(s.DetailImage, {
                            id: n.id,
                            shape: s.DetailImageShape.Squircle,
                            size: 60
                        }),
                        primary: (0, v.jsx)(c.EmojiText, {
                            text: C,
                            ellipsify: true
                        }),
                        onClick: t,
                        theme: "community-home",
                        secondary: (0, v.jsxs)(p.TextSpan, {
                            size: "16",
                            color: "secondary",
                            children: [j, M ? null : (0, v.jsxs)(v.Fragment, {
                                children: [d.default.isRTL() ? " - " : " · ", h.fbt._({
                                    "*": "{count} Groups",
                                    _1: "1 Group"
                                }, [h.fbt._plural(b, "count")], {
                                    hk: "38FdVG"
                                })]
                            })]
                        }),
                        detail: (0, v.jsx)(l.ChevronRightAltIcon, {
                            color: f.SvgColorProp.SECONDARY,
                            directional: true
                        }),
                        focusable: true
                    })
                });
            };
            var i = a(n(170206));
            var o = n(394164);
            var l = n(647276);
            var s = n(23641);
            var r = a(n(969358));
            var c = n(305521);
            var d = a(n(932325));
            var u = n(510900);
            var f = n(220584);
            var p = n(180519);
            var h = n(548360);
            var m = n(667294);
            var g = a(n(847116));
            var x = n(655241);
            var v = n(785893);
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
                    parentGroup: E,
                    isUnnamed: I
                } = (0, k.useModelValues)(n, ["id", "parentGroup", "isUnnamed"]);
                const A = (0, S.default)(n.participants, "change:isAdmin", () => n.participants.iAmAdmin());
                const N = (0, S.default)(n.participants, ["bulk_add", "bulk_remove", "reset"], () => n.participants.length);
                const R = (0, s.getABPropConfigValue)("parent_group_min_participants_for_group_entry_point");
                const O = (0, P.default)();
                if (!(0, u.communitiesEnabled)() || !A || E != null || N < R) {
                    return null;
                }
                const D = () => {
                    h.DrawerManager.openDrawerLeft((0, w.jsx)(b.NewCommunityFlowLoadable, {
                        existingGroups: [a]
                    }), {
                        focusType: g.FocusType.TABBABLE
                    });
                    d.UiCommunityCreationAction.startSession(_.COMMUNITY_CREATION_ENTRYPOINT_TYPE.GROUP_INFO);
                    d.UiCommunityCreationAction.enter(_.COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.GROUP_INFO);
                };
                const L = function () {
                    var e = (0, i.default)(function* (e) {
                        yield(0, l.default)((0, C.setGroupSubject)(t, e), O).catch((0, o.catchAbort)(() => {})).catch(() => {
                            __LOG__(3)`name_group_modal:onSetSubject failed`;
                        });
                        x.ModalManager.close();
                        D();
                    });
                    return function () {
                        return e.apply(this, arguments);
                    };
                }();
                const B = () => {
                    x.ModalManager.open((0, w.jsx)(p.ConfirmPopup, {
                        onOK: () => x.ModalManager.close(),
                        okText: y.fbt._("OK", null, {
                            hk: "4oTrfy"
                        }),
                        children: y.fbt._("Only admins can edit this group's info", null, {
                            hk: "1a2ztg"
                        })
                    }));
                };
                return (0, w.jsx)(m.default, {
                    theme: "no-padding",
                    children: (0, w.jsx)(r.default, {
                        testid: "group-info-create-community-section",
                        image: (0, w.jsx)(f.CommunitySquircleIcon, {
                            iconXstyle: T.communitySquircle,
                            width: 40,
                            height: 40
                        }),
                        primary: (0, w.jsx)(j.TextSpan, {
                            size: "16",
                            children: y.fbt._("Start a community", null, {
                                hk: "2hSyE2"
                            })
                        }),
                        onClick: () => {
                            if (I) {
                                var e;
                                var n;
                                const a = y.fbt._("This group was created without a name. Give it a name to create a community.", null, {
                                    hk: "2BkS8"
                                });
                                x.ModalManager.open((0, w.jsx)(v.default, {
                                    chat: t,
                                    subtext: a,
                                    onCancel: () => x.ModalManager.close(),
                                    onOK: L,
                                    editable: (e = t.groupMetadata) === null || e === undefined ? undefined : e.canSetSubject(),
                                    editRestrictionInfo: ((n = t.groupMetadata) === null || n === undefined ? undefined : n.restrict) ? B : undefined
                                }));
                            } else {
                                D();
                            }
                        },
                        theme: "community-create",
                        secondary: (0, w.jsx)(j.TextSpan, {
                            size: "14",
                            color: "secondary",
                            children: y.fbt._("Organize related groups and easily reach them at once", null, {
                                hk: "6BbTr"
                            })
                        }),
                        detail: (0, w.jsx)(c.ChevronRightAltIcon, {
                            color: M.SvgColorProp.SECONDARY,
                            directional: true
                        }),
                        focusable: true
                    })
                });
            };
            var i = a(n(348926));
            var o = n(898817);
            var l = a(n(229922));
            var s = n(287461);
            var r = a(n(170206));
            var c = n(647276);
            var d = n(198933);
            var u = n(174834);
            var f = n(247365);
            var p = n(103440);
            var h = n(900316);
            var m = a(n(969358));
            var g = n(299950);
            var x = n(114850);
            var v = a(n(550506));
            var b = n(219548);
            var C = n(470824);
            var M = n(220584);
            var j = n(180519);
            var _ = n(130756);
            var y = n(548360);
            a(n(156720));
            var S = a(n(524578));
            var k = n(655241);
            var P = a(n(895851));
            var w = n(785893);
            const T = {
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
                a = (0, o.communitiesEnabled)() && (n == null ? undefined : n.groupType) === l.GroupType.DEFAULT_ANNOUNCEMENT_GROUP ? (0, d.jsx)("div", {
                    className: (0, r.default)(u),
                    children: s.fbt._("", null, {
                        hk: "4kc4Kr"
                    })
                }) : s.fbt._("Add group description", null, {
                    hk: "BVsoQ"
                });
                return (0, d.jsx)(i.default, {
                    chat: e.chat,
                    showFullDescription: e.showFullDescription,
                    editRestrictionText: s.fbt._("Only admins can edit this group's info", null, {
                        hk: "1a2ztg"
                    }),
                    testid: "group-info-drawer-description-title-input",
                    containerTestId: "group-info-drawer-description-container",
                    emptyValuePlaceholder: a
                });
            };
            var i = a(n(707655));
            var o = n(174834);
            var l = n(862159);
            var s = n(548360);
            var r = a(n(156720));
            var c = n(655241);
            var d = n(785893);
            const u = {
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
            var i = n(287461);
            var o = a(n(775025));
            var l = n(738501);
            var s = n(374660);
            var r = a(n(306007));
            var c = n(464659);
            var d = a(n(740681));
            var u = n(998123);
            var f = n(174834);
            var p = a(n(908081));
            var h = a(n(324093));
            var m = n(626194);
            var g = a(n(969358));
            var x = a(n(209064));
            var v = n(673509);
            var b = a(n(409558));
            var C = n(56884);
            var M = n(71957);
            var j = n(258105);
            var _ = a(n(570834));
            var y = a(n(466488));
            var S = a(n(483828));
            var k = a(n(20864));
            var P = a(n(299723));
            var w = n(767140);
            var T = n(951688);
            var E = a(n(453090));
            var I = n(503028);
            var A = a(n(483447));
            var N = n(862159);
            var R = n(95576);
            var O = a(n(932325));
            var D = n(97858);
            var L = n(114850);
            var B = a(n(832897));
            var G = n(111367);
            var F = n(962647);
            var V = n(126671);
            var H = a(n(634152));
            var U = n(227341);
            var W = n(163139);
            var Y = n(428991);
            var z = n(983271);
            var q = n(220584);
            var K = n(180519);
            var X = n(717089);
            var Z = n(625786);
            var J = n(390737);
            var Q = n(382117);
            var $ = n(676345);
            var ee = n(571256);
            var te = n(130756);
            var ne = n(869513);
            var ae = n(818674);
            var ie = n(609392);
            var oe = n(548360);
            var le = n(667294);
            var se = a(n(156720));
            var re = a(n(401715));
            var ce = a(n(969651));
            var de = a(n(637660));
            var ue = n(808446);
            var fe = n(655241);
            var pe = a(n(321201));
            var he = n(785893);
            const me = {
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
            const ge = (0, Z.genId)("max_participant_toast");

            function xe (e, t) {
                var n;
                var a;
                var xe;
                const {
                    onVerification: ve,
                    onClose: be
                } = e;
                const Ce = (0, pe.default)();
                const Me = (0, ce.default)();
                const je = (0, re.default)();
                const _e = (0, fe.useModelValues)(e.chat, ["mute", "id", "pendingAction", "groupMetadata"]);
                const ye = (0, fe.useModelValues)(e.groupMetadata, ["id", "reportToAdminMode", "cachedDeviceCount", "cachedDeviceSizeBucket", "participants", "parentGroup", "pendingParticipants", "announce", "support", "incognito", "groupType", "restrict", "isIncognitoCag", "defaultSubgroup"]);
                (0, fe.useModelValues)(e.contact, ["name", "id", "pendingAction"]);
                const Se = ye.groupType === N.GroupType.DEFAULT_ANNOUNCEMENT_GROUP;
                const ke = (0, de.default)(() => new Q.UiActionWamEvent({
                    uiActionType: Se ? te.UI_ACTION_TYPE.DEFAULT_SUBGROUP_INFO_OPEN : te.UI_ACTION_TYPE.GROUP_INFO_OPEN,
                    uiActionPreloaded: true,
                    isLid: ye.isIncognitoCag
                }));
                const Pe = (0, de.default)(() => new _.default());
                const we = (0, de.default)(() => new _.default());
                const Te = (0, le.useRef)(null);
                (0, ue.useListener)(ye.participants, ["bulk_add", "bulk_remove", "reset", "sort", "change:isAdmin", "change:isSuperAdmin"], Me);
                (0, ue.useListener)(ye.pendingParticipants, ["add", "remove", "reset"], Me);
                (0, X.useTsNavigation)({
                    surface: "group-info-drawer",
                    extras: {
                        groupSize: ye.participants.length,
                        typeOfGroup: (0, N.groupTypeToWamEnum)((0, N.getGroupTypeFromGroupMetadata)((0, W.unproxy)(ye)))
                    }
                });
                const Ee = () => {
                    var e;
                    const t = (0, D.getGroupSizeLimit)(ye.groupType);
                    const n = (e = ye.getParentGroupChat()) === null || e === undefined ? undefined : e.formattedTitle;
                    if (ye.participants.length >= t) {
                        const e = O.default.t(48, {
                            max: t
                        });
                        J.ToastManager.open((0, he.jsx)(Z.Toast, {
                            msg: e,
                            id: ge
                        }));
                    } else {
                        const e = (0, he.jsx)(o.default, {
                            chat: (0, W.unproxy)(_e),
                            pushTransition: "none",
                            popTransition: "none",
                            communityName: n
                        });
                        L.ModalManager.open(e, {
                            transition: "modal-flow"
                        });
                    }
                };
                const Ie = () => {
                    L.ModalManager.open((0, he.jsx)(x.default, {
                        chat: _e,
                        chatId: _e.id,
                        e2eSubtype: "info_encrypted"
                    }));
                };
                let Ae;
                (0, le.useEffect)(() => {
                    if ((0, s.isIntegritySuspendedDefaultSubgroup)(_e)) {
                        (0, Y.openTerminatedCommunityModal)();
                    } else if ((0, s.isTerminatedGroupOrNotMember)(_e)) {
                        if ((0, D.isGroupSuspendV2Enabled)()) {
                            (0, z.openSuspendedGroupModalV2)(_e);
                        } else {
                            (0, z.openTerminatedGroupOrNotMemberModal)();
                        }
                    } else if ((0, s.isSuspendedGroup)(_e)) {
                        if ((0, D.isGroupSuspendV2Enabled)()) {
                            (0, z.openSuspendedGroupModalV2)(_e);
                        } else {
                            (0, z.openSuspendedGroupModal)((0, s.shouldIncludeEntityIdInAppealRequest)() === true ? ye.id.user.toString() : null);
                        }
                    }
                }, []);
                (0, le.useEffect)(() => {
                    ye.participants.ensureSorted();
                    ye.pendingParticipants.ensureSorted();
                });
                (0, le.useEffect)(() => {
                    const e = ke.current;
                    if (e) {
                        const t = ye.cachedDeviceSizeBucket;
                        if (t != null) {
                            e.sizeBucket = t;
                        }
                        Object.assign(e, (0, ne.getGroupCountMetricsFromGroupMetadata)((0, W.unproxy)(ye)));
                        e.markUiActionT();
                        e.commit();
                        ke.current = undefined;
                    }
                    (0, ae.logUiActionShadowPrivateStatsTestEvents)();
                }, []);
                if (ye.canSetGroupProperty()) {
                    const t = (0, he.jsx)(K.TextSpan, {
                        theme: "title",
                        children: oe.fbt._("Group settings", null, {
                            hk: "3sS0Vl"
                        })
                    });
                    const n = (0, he.jsx)(V.SettingsIcon, {
                        color: q.SvgColorProp.SECONDARY,
                        height: 17
                    });
                    Ae = (0, he.jsx)(r.default, {
                        testid: "group-settings-row",
                        side: "chevron",
                        icon: n,
                        onClick: e.onAdminSetting,
                        title: t,
                        spaced: true
                    });
                }
                let Ne = null;
                if (e.onMediaGallery) {
                    Ne = (0, he.jsx)(d.default, {
                        onMediaGallery: e.onMediaGallery,
                        chat: (0, W.unproxy)(_e)
                    });
                }
                const Re = _e && (0, l.shouldShowEphemeralSetting)(_e) ? (0, he.jsx)(M.EphemeralSettingRow, {
                    onClick: e.onEphemeral,
                    chat: _e,
                    groupMetadata: ye,
                    testid: "contact-info-dm-setting-row"
                }) : null;
                let Oe = null;
                if ((0, f.communitiesEnabled)() && _e && ye.parentGroup && ye.participants.iAmMember()) {
                    const t = ye.getParentGroupChat();
                    if (t == null ? undefined : t.groupMetadata) {
                        Oe = (0, he.jsx)(y.default, {
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
                let De = null;
                De = (0, he.jsx)(b.default, {
                    highlightSurface: te.PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_GROUP,
                    onClick: () => {
                        if ((0, D.isPrivacyNarrativeV1Enabled)() && (0, G.shouldShowNewE2eInfoModal)((0, W.unproxy)(_e))) {
                            const e = (0, j.getE2EFaqUrl)();
                            L.ModalManager.open((0, he.jsx)(v.E2eInfoModalV2, {
                                highlightSurface: te.PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_GROUP,
                                url: e
                            }));
                        } else {
                            L.ModalManager.open((0, he.jsx)(x.default, {
                                highlightSurface: te.PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_GROUP,
                                chatId: _e.id,
                                e2eSubtype: "info_encrypted"
                            }));
                        }
                    },
                    text: (0, ee.isGroupCallEnabled)() ? oe.fbt._("Messages and calls are end-to-end encrypted. Click to learn more.", null, {
                        hk: "1l9pwW"
                    }) : oe.fbt._("Messages are end-to-end encrypted. Click to learn more.", null, {
                        hk: "2MtPh9"
                    }),
                    spaced: true
                });
                if ((0, s.isSupportGroup)(_e)) {
                    De = (0, he.jsx)(A.default, {
                        onClick: Ie,
                        spaced: true
                    });
                }
                const Le = _e.mute.canMute() ? (0, he.jsx)(B.default, {
                    chat: _e,
                    mute: _e.mute,
                    settings: H.default
                }) : null;
                let Be;
                let Ge = null;
                if (e.onStarred) {
                    const t = (0, he.jsx)(K.TextSpan, {
                        theme: "title",
                        size: "16",
                        children: oe.fbt._("Starred messages", null, {
                            hk: "4wVbNG"
                        })
                    });
                    const n = (0, he.jsx)(U.StarIcon, {
                        color: q.SvgColorProp.SECONDARY,
                        height: 20
                    });
                    Ge = (0, he.jsx)(c.ChatInfoDrawerSection, {
                        titleTestId: "section-starred-messages",
                        xstyle: $.uiPadding.horiz0,
                        children: (0, he.jsx)(r.default, {
                            testid: "block-starred-messages",
                            side: "chevron",
                            icon: n,
                            onClick: e.onStarred,
                            title: t,
                            spaced: true
                        })
                    });
                }
                if ((0, C.isKeepInChatReadAndUIEnabled)() && (_e.hasKeptMsgs() || (0, l.isEphemeralSettingOn)(_e))) {
                    const t = (0, he.jsx)(K.TextSpan, {
                        theme: "title",
                        size: "16",
                        children: oe.fbt._("Kept Messages", null, {
                            hk: "41CBIy"
                        })
                    });
                    const n = ye.restrict ? (0, he.jsx)(K.TextDiv, {
                        theme: "muted",
                        children: oe.fbt._("Only admins can keep or unkeep messages in this group.", null, {
                            hk: "2Uhjiy"
                        })
                    }) : null;
                    const a = (0, he.jsx)(R.KeepInChatIcon, {
                        color: q.SvgColorProp.SECONDARY,
                        height: 20
                    });
                    Be = (0, he.jsx)(c.ChatInfoDrawerSection, {
                        titleTestId: "section-kept-messages",
                        xstyle: [me.lastSectionRow, $.uiPadding.horiz0],
                        children: (0, he.jsx)(r.default, {
                            testid: "block-kept-messages",
                            side: "chevron",
                            icon: a,
                            onClick: e.onKept,
                            title: t,
                            secondaryTitle: n,
                            spaced: true
                        })
                    });
                }
                const Fe = (0, F.isReactionsEnabledInCAG)(_e) ? (0, he.jsx)(u.PhoneNumberVisibilityIndicatorCag, {
                    chat: _e
                }) : null;
                const Ve = (0, i.getABPropConfigValue)("report_to_admin_kill_switch") && ye.reportToAdminMode && ye.canSetGroupProperty() ? (0, he.jsx)(r.default, {
                    testid: "block-rta-messages",
                    side: "chevron",
                    icon: (0, he.jsx)(ie.WarningIcon, {
                        color: q.SvgColorProp.SECONDARY,
                        height: 16
                    }),
                    onClick: e.onSentForAdminReview,
                    title: (0, he.jsx)(K.TextSpan, {
                        theme: "title",
                        size: "16",
                        children: oe.fbt._("Sent for admin review", null, {
                            hk: "2gzsHo"
                        })
                    }),
                    spaced: true
                }) : null;
                let He = null;
                if (Le || De || Re) {
                    He = (0, he.jsxs)(c.ChatInfoDrawerSection, {
                        xstyle: [me.lastSectionRow, $.uiPadding.horiz0],
                        children: [Le, Re, Ve, De, Ae, Fe]
                    });
                }
                const Ue = (0, he.jsx)(P.default, {
                    chat: (0, W.unproxy)(_e)
                });
                const We = Boolean((n = _e.groupMetadata) === null || n === undefined ? undefined : n.isIncognitoCag) && !((a = _e.groupMetadata) === null || a === undefined || (xe = a.participants) === null || xe === undefined ? undefined : xe.iAmAdmin()) ? (0, he.jsx)(g.default, {
                    theme: "transparent",
                    shadow: false,
                    children: (0, he.jsx)(K.TextParagraph, {
                        xstyle: me.announcementGroupDisclaimer,
                        color: "secondary",
                        children: oe.fbt._("Only admins can see all participants in this group", null, {
                            hk: "39jP44"
                        })
                    })
                }) : null;
                return (0, he.jsx)("div", {
                    role: "complementary",
                    ref: je,
                    tabIndex: "-1",
                    "aria-label": oe.fbt._("Group Info", null, {
                        hk: "3P80cG"
                    }),
                    children: (0, he.jsxs)(p.default, {
                        ref: t,
                        theme: "striped",
                        testid: "chat-info-drawer",
                        children: [(0, he.jsx)(m.DrawerHeader, {
                            title: oe.fbt._("Group info", null, {
                                hk: "2SfTUZ"
                            }),
                            type: m.DRAWER_HEADER_TYPE.SMALL,
                            rtlFixIfOnDarwin: true,
                            onCancel: () => {
                                if (be) {
                                    be();
                                } else if (!(Ce == null)) {
                                    Ce.requestDismiss();
                                }
                            },
                            testid: "group-info-header"
                        }), (0, he.jsx)(h.default, {
                            children: (0, he.jsxs)("section", {
                                className: (0, se.default)(me.body),
                                "data-testid": "group-info-drawer-body",
                                children: [(0, he.jsx)(E.default, {
                                    chat: (0, W.unproxy)(_e),
                                    onAdminSetting: e.onAdminSetting,
                                    onAddParticipant: Ee,
                                    onClickParticipantsCount: () => {
                                        var e;
                                        if (!((e = Te.current) === null || e === undefined)) {
                                            e.scrollIntoView();
                                        }
                                    }
                                }), Oe, (0, he.jsx)(k.default, {
                                    chat: (0, W.unproxy)(_e),
                                    showFullDescription: e.showFullGroupDescription
                                }), Ne, Ge, Be, He, undefined, (0, he.jsx)(S.default, {
                                    chat: _e,
                                    groupMetadata: ye
                                }), (0, he.jsx)(w.GroupInfoParticipantsSection, {
                                    ref: Te,
                                    chat: (0, W.unproxy)(_e),
                                    scrollToParticipantList: e.scrollToParticipantList,
                                    flatListController: Pe.current,
                                    onAddParticipant: Ee,
                                    onOpenParticipantSearch: e => {
                                        L.ModalManager.open((0, he.jsx)(I.GroupParticipantsFlow, {
                                            chat: (0, W.unproxy)(_e),
                                            onVerification: ve,
                                            initialStep: e
                                        }), {
                                            transition: "modal-flow"
                                        });
                                    },
                                    onGroupInviteLink: e.onGroupInviteLink,
                                    onPendingParticipants: e.onPendingParticipants,
                                    onVerification: e.onVerification
                                }), We, (0, he.jsx)(T.GroupInfoPendingParticipantsSection, {
                                    chat: (0, W.unproxy)(_e),
                                    flatListController: we.current
                                }), Ue]
                            })
                        })]
                    }, "contact-info-modal")
                });
            }
            var ve = (0, le.forwardRef)(xe);
            t.default = ve;
        },
        299723: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                var t;
                let {
                    chat: n
                } = e;
                const {
                    participants: a,
                    parentGroup: l
                } = (t = (0, y.useOptionalModelValues)(n.groupMetadata, ["parentGroup", "participants"])) !== null && t !== undefined ? t : {};
                const r = (a == null ? undefined : a.iAmAdmin()) && (0, i.isCommunityAnnouncementGroup)(n);
                const c = (0, k.jsx)(w, {
                    chat: n
                });
                const d = (0, i.isTerminatedGroup)(n) ? null : (0, k.jsx)(P, {
                    chat: n,
                    showAdditionalAction: !r
                });
                const u = !(0, s.communitiesEnabled)() || (0, i.isCommunityAnnouncementGroup)(n) || l == null ? null : (0, k.jsx)(T, {
                    chat: n,
                    parentGroup: l
                });
                return (0, k.jsxs)(o.ChatInfoDrawerButtonsSection, {
                    children: [u, c, d]
                });
            };
            var i = n(374660);
            var o = n(464659);
            var l = n(780549);
            var s = n(174834);
            var r = n(493678);
            var c = n(36045);
            var d = n(90989);
            var u = a(n(667845));
            var f = n(736371);
            var p = n(97858);
            var h = n(114850);
            var m = a(n(338695));
            var g = n(383296);
            var x = n(453603);
            var v = n(983271);
            var b = n(21698);
            var C = n(548360);
            var M = n(667294);
            var j = a(n(847116));
            var _ = a(n(524578));
            var y = n(655241);
            var S = a(n(895851));
            var k = n(785893);

            function P (e) {
                let {
                    chat: t,
                    showAdditionalAction: n
                } = e;
                return (0, k.jsx)(c.DrawerButton, {
                    testid: "li-report-spam",
                    color: "danger",
                    icon: (0, k.jsx)(b.ThumbsDownIcon, {}),
                    theme: "chat-info",
                    onClick: () => {
                        h.ModalManager.open((0, k.jsx)(m.default, {
                            isMessage: false,
                            isGroupChat: true,
                            showAdditionalActionCheckbox: n,
                            onReport: () => {
                                (0, g.sendReport)({
                                    chat: t,
                                    spamFlow: x.SpamFlow.GroupInfoReport
                                });
                                h.ModalManager.close();
                            },
                            onReportExitClear: () => {
                                (0, g.sendSpamExitClear)(t, x.SpamFlow.GroupInfoReport);
                                h.ModalManager.close();
                            },
                            onCancel: () => h.ModalManager.close()
                        }));
                    },
                    children: C.fbt._("Report group", null, {
                        hk: "23NLqw"
                    })
                });
            }

            function w (e) {
                const t = () => {
                    (0, v.openExitAndDeleteGroupModal)(e.chat);
                };
                const n = (0, y.useModelValues)(e.chat, ["isReadOnly"]);
                let a;
                let o = () => {
                    var t;
                    const n = (t = e.chat.groupMetadata) === null || t === undefined ? undefined : t.getParentGroupChat();
                    if (n != null && (0, i.isCommunityAnnouncementGroup)(e.chat) && (0, s.communityAnnouncementImprovementM3Enabled)()) {
                        h.ModalManager.open((0, k.jsx)(f.LeaveCommunityModal, {
                            chat: n
                        }));
                    } else {
                        l.Cmd.deleteOrExitChat(e.chat);
                    }
                };
                if (n.isReadOnly) {
                    a = C.fbt._("Delete group", null, {
                        hk: "2MKJYs"
                    });
                } else if (!(0, i.isCommunityAnnouncementGroup)(n) && (0, i.isSuspendedGroup)(n) && (0, p.isGroupSuspendV2Enabled)()) {
                    a = C.fbt._("Exit group and delete", null, {
                        hk: "1Szubg"
                    });
                    o = t;
                } else {
                    a = (0, i.isCommunityAnnouncementGroup)(n) && (0, s.communityAnnouncementImprovementM3Enabled)() ? C.fbt._("Exit community", null, {
                        hk: "3KaKZa"
                    }) : C.fbt._("Exit group", null, {
                        hk: "3EOkxm"
                    });
                }
                return (0, k.jsx)(c.DrawerButton, {
                    testid: "li-delete-group",
                    icon: (0, k.jsx)(d.ExitIcon, {
                        directional: true
                    }),
                    color: "danger",
                    theme: "chat-info",
                    onClick: o,
                    children: a
                });
            }

            function T (e) {
                let {
                    chat: t,
                    parentGroup: n
                } = e;
                const a = (0, S.default)();
                const {
                    groupMetadata: i,
                    isReadOnly: o,
                    id: l,
                    formattedTitle: s
                } = (0, y.useModelValues)(t, ["groupMetadata", "isReadOnly", "id", "formattedTitle"]);
                const f = u.default.get(n.toString());
                const p = Boolean((0, _.default)(f == null ? undefined : f.participants, ["bulk_add", "bulk_remove"], () => f == null ? undefined : f.participants.iAmAdmin()));
                const h = Boolean((0, _.default)(i == null ? undefined : i.participants, ["bulk_add", "bulk_remove"], () => i == null ? undefined : i.participants.iAmAdmin()));
                const {
                    joinedSubgroups: m,
                    unjoinedSubgroups: g,
                    subgroupCount: x
                } = (0, j.default)(f);
                const [v, b] = (0, M.useState)(false);
                if (o || m == null || g == null || !p && !h) {
                    return null;
                }
                return (0, k.jsx)(c.DrawerButton, {
                    testid: "li-remove-group-from-community",
                    icon: (0, k.jsx)(d.ExitIcon, {
                        directional: true
                    }),
                    disabled: v,
                    color: "danger",
                    theme: "chat-info",
                    onClick: () => {
                        if (!(v || a.aborted)) {
                            (0, r.handleRemoveSubgroup)({
                                parentId: n,
                                currentSubgroupCount: x,
                                removedSubgroupWid: l,
                                removedSubgroupTitle: s,
                                setLoading: b,
                                iAmCommunityAdmin: p
                            });
                            a.aborted;
                        }
                    },
                    children: C.fbt._("Remove from community", null, {
                        hk: "3xZmj5"
                    })
                });
            }
        },
        767140: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.GroupInfoParticipantsSection = undefined;
            var i = a(n(670983));
            var o = n(632157);
            var l = n(287461);
            var s = n(414268);
            var r = n(72696);
            var c = a(n(170206));
            var d = n(374660);
            var u = n(464659);
            var f = a(n(831584));
            var p = a(n(314810));
            var h = n(698867);
            var m = n(780549);
            var g = n(474103);
            var x = n(174834);
            var v = n(877171);
            var b = n(103440);
            var C = n(465113);
            var M = n(675085);
            var j = n(235630);
            var _ = n(305521);
            var y = n(581354);
            var S = n(512938);
            var k = n(503028);
            var P = n(862159);
            var w = a(n(932325));
            var T = n(972989);
            var E = n(963950);
            var I = n(114850);
            var A = n(33014);
            var N = n(164406);
            var R = n(197988);
            var O = n(507877);
            var D = n(12792);
            var L = a(n(671401));
            var B = a(n(802211));
            var G = n(46351);
            var F = a(n(237889));
            var V = n(163139);
            var H = n(220584);
            var U = n(533426);
            var W = n(392632);
            var Y = a(n(37875));
            var z = n(459857);
            var q = n(788271);
            var K = a(n(124928));
            var X = n(548360);
            var Z = n(667294);
            a(n(156720));
            var J = a(n(524578));
            var Q = a(n(969651));
            var $ = a(n(637660));
            var ee = n(808446);
            var te = n(655241);
            var ne = n(785893);
            const ae = {
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
                    menuEnabled: i,
                    handleParticipantMenu: o,
                    contextMenu: l,
                    active: s,
                    elevatedPushNamesEnabled: r = false
                } = e;
                const {
                    id: c
                } = t;
                const d = n.get(c);
                if (!d) {
                    throw new S.UnknownDataError(t);
                }
                const u = d.contact;
                const f = !!l && K.default.equals(u.id, l.contactId);
                return (0, ne.jsx)(p.default, {
                    active: s,
                    contact: u,
                    participant: d,
                    onClick: a,
                    contextEnabled: () => i(u),
                    contextMenu: f,
                    onContext: e => o(e, u),
                    theme: "chat-info",
                    showNotifyName: true,
                    waitIdle: true,
                    showStatusRingAroundProfilePhoto: true,
                    participantCollection: n,
                    elevatedPushNamesEnabled: r
                }, d.id.toString());
            }
            const oe = (0, Z.forwardRef)((e, t) => {
                var n;
                var a;
                var p;
                const S = (0, te.useModelValues)((0, i.default)(e.chat.groupMetadata, "props.chat.groupMetadata"), ["support", "size", "id", "membershipApprovalMode", "membershipApprovalRequests", "isUnnamed", "isLidAddressingMode"]);
                const {
                    membershipApprovalMode: K,
                    membershipApprovalRequests: oe
                } = S;
                const se = (0, $.default)(() => new F.default([], e => e.id.toString()));
                const re = (0, i.default)((n = e.chat.groupMetadata) === null || n === undefined ? undefined : n.participants, "props.chat.groupMetadata?.participants");
                let ce = re.toArray();
                if ((0, g.hideCagMaskedParticipants)() && S.isLidAddressingMode !== true) {
                    ce = re.filter(e => {
                        let {
                            id: t
                        } = e;
                        return (0, z.isMeAccount)(t) || !t.isLid();
                    });
                }
                const de = (a = S == null ? undefined : S.size) !== null && a !== undefined ? a : 0;
                const ue = (re == null ? undefined : re.iAmAdmin()) ? re.length : de;
                const fe = (0, Q.default)();
                (0, ee.useListener)(re, "bulk_add bulk_remove reset sort change:isAdmin change:isSuperAdmin", fe);
                const [pe, he] = (0, Z.useState)(true);
                const me = (0, Z.useRef)();
                const [ge, xe] = (0, Z.useState)();
                const ve = (0, d.isCommunityAnnouncementGroup)(e.chat);
                (0, Z.useEffect)(() => {
                    if (e.scrollToParticipantList && me.current) {
                        (0, C.scrollIntoViewIfNeeded)(me.current, false);
                    }
                }, [e.scrollToParticipantList]);
                (0, Z.useImperativeHandle)(t, () => ({
                    scrollIntoView () {
                        var e;
                        if (!((e = me.current) === null || e === undefined)) {
                            e.scrollIntoView();
                        }
                    }
                }));
                const be = (0, J.default)(oe, ["add", "remove", "reset"], () => oe.length);
                const Ce = (0, q.useShowPastParticipants)(e.chat);
                const Me = (0, Z.useMemo)(() => {
                    let e;
                    const t = [];
                    const n = [];
                    ce.forEach(a => {
                        if (a.contact.isMe) {
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
                    if (le(ce) && pe) {
                        a = a.slice(0, u.INFO_DRAWER_MAX_ROWS);
                    }
                    se.current.init(a.map(e => e.contact));
                    return a.map(e => ({
                        itemKey: e.id.toString(),
                        id: e.id,
                        height: 68
                    }));
                }, [pe, ce]);
                if (S.isSuspendedOrTerminated()) {
                    return null;
                }
                const je = (0, ne.jsx)(G.SearchIcon, {
                    color: H.SvgColorProp.SECONDARY
                });
                let _e;
                let ye;
                let Se;
                let ke;
                if (re.canAdd() && !S.support) {
                    const t = (0, ne.jsx)(B.default, {
                        theme: "compact",
                        children: (0, ne.jsx)(s.AddUserIcon, {
                            directional: true
                        })
                    });
                    _e = (0, ne.jsx)(c.default, {
                        testid: "add-user",
                        image: t,
                        theme: "chat-info",
                        primary: X.fbt._("Add participant", null, {
                            hk: "48ECfz"
                        }),
                        onClick: e.onAddParticipant,
                        focusable: true
                    });
                }
                if (re.iAmAdmin() && e.onGroupInviteLink && !S.support) {
                    const t = (0, ne.jsx)(B.default, {
                        theme: "compact",
                        children: (0, ne.jsx)(T.LinkIcon, {})
                    });
                    ye = (0, ne.jsx)(c.default, {
                        image: t,
                        theme: "chat-info",
                        primary: X.fbt._("Invite to group via link", null, {
                            hk: "3vDtFL"
                        }),
                        onClick: e.onGroupInviteLink,
                        focusable: true
                    });
                }
                if (re.iAmAdmin() && K && be > 0 && (0, l.getABPropConfigValue)("group_join_request_m2")) {
                    Se = (0, ne.jsx)(c.default, {
                        image: (0, ne.jsx)(B.default, {
                            xstyle: ae.pendingParticipantsIcon,
                            theme: "compact",
                            children: (0, ne.jsx)(D.PendingParticipantsIcon, {})
                        }),
                        theme: "chat-info",
                        primary: X.fbt._("Pending participants", null, {
                            hk: "3aWcdI"
                        }),
                        primaryDetail: (0, ne.jsx)(U.Tag, {
                            round: true,
                            children: be
                        }),
                        onClick: e.onPendingParticipants,
                        focusable: true
                    });
                }
                if (le(ce) && pe) {
                    const t = ce.length <= 20;
                    const n = ce.length - u.INFO_DRAWER_MAX_ROWS;
                    ke = (0, ne.jsx)(f.default, {
                        numMore: n,
                        onClick: () => {
                            if (t) {
                                he(false);
                            } else {
                                e.onOpenParticipantSearch(k.ParticipantsFlowStep.Participants);
                            }
                        },
                        viewAll: !t
                    });
                } else if (Ce) {
                    ke = (0, ne.jsx)(E.ListButton, {
                        onClick: () => {
                            e.onOpenParticipantSearch(k.ParticipantsFlowStep.PastParticipants);
                        },
                        testid: "row-past-participants",
                        children: X.fbt._("View past participants", null, {
                            hk: "fYGd4"
                        })
                    });
                }
                const Pe = e => {
                    const t = re.get(e.id);
                    return !!t && (re.canPromote(t) || re.canDemote(t) || re.canRemove(t) || re.canVerifyIdentity(t));
                };
                const we = (t, n) => {
                    const a = re.assertGet(n.id);
                    if (!Pe(n)) {
                        return;
                    }
                    const i = [];
                    if (re.canPromote(a)) {
                        const t = () => {
                            const t = w.default.t(198, {
                                participant: a.contact.formattedName,
                                subject: e.chat.contact.name
                            });
                            I.ModalManager.open((0, ne.jsx)(b.ConfirmPopup, {
                                onOK: () => {
                                    t = true;
                                    if (!a.isAdmin) {
                                        a.contact.pendingAction++;
                                        (0, A.promoteParticipants)(e.chat, [a]).finally(() => {
                                            a.contact.pendingAction--;
                                        });
                                    }
                                    return void(t && I.ModalManager.close());
                                    var t;
                                },
                                okText: w.default.t(423),
                                onCancel: () => I.ModalManager.close(),
                                cancelText: X.fbt._("Cancel", null, {
                                    hk: "H0gNq"
                                }),
                                children: (0, ne.jsx)(_.EmojiText, {
                                    text: t
                                })
                            }));
                        };
                        let n;
                        if (ve) {
                            var o;
                            n = X.fbt._("Make admin", null, {
                                hk: "1cHVQ6"
                            });
                            const t = (o = e.chat.groupMetadata) === null || o === undefined ? undefined : o.getParentGroupChat();
                            i.push((0, ne.jsx)(M.DropdownItem, {
                                testid: "mi-grp-promote-community-admin",
                                action: () => {
                                    (0, O.openCommunityParticipantPromoteConfirmation)(t, a, re, a.contact);
                                },
                                children: n
                            }, "promote"));
                        } else {
                            n = X.fbt._("Make group admin", null, {
                                hk: "oCC4C"
                            });
                            i.push((0, ne.jsx)(M.DropdownItem, {
                                testid: "mi-grp-promote-admin",
                                action: t,
                                children: n
                            }, "promote"));
                        }
                    }
                    if (re.canRemove(a)) {
                        let t;
                        t = ve === true && (0, x.communityAnnouncementImprovementM3Enabled)() ? X.fbt._("Remove from community", null, {
                            hk: "WikVd"
                        }) : w.default.t(427);
                        i.push((0, ne.jsx)(M.DropdownItem, {
                            testid: "mi-grp-remove-participant",
                            action: () => {
                                var t;
                                const i = (t = e.chat.groupMetadata) === null || t === undefined ? undefined : t.getParentGroupChat();
                                if (ve === true && i != null && (0, x.communityAnnouncementImprovementM3Enabled)()) {
                                    return void I.ModalManager.open((0, ne.jsx)(L.default, {
                                        contact: n,
                                        parentGroupChat: i
                                    }));
                                }
                                const o = w.default.t(199, {
                                    participant: a.contact.formattedName,
                                    subject: e.chat.contact.name
                                });
                                I.ModalManager.open((0, ne.jsx)(b.ConfirmPopup, {
                                    onOK: () => {
                                        t = true;
                                        a.contact.pendingAction++;
                                        (0, A.removeParticipants)(e.chat, [a]).finally(() => {
                                            a.contact.pendingAction--;
                                        });
                                        return void(t && I.ModalManager.close());
                                        var t;
                                    },
                                    okText: w.default.t(531),
                                    onCancel: () => I.ModalManager.close(),
                                    cancelText: X.fbt._("Cancel", null, {
                                        hk: "H0gNq"
                                    }),
                                    children: (0, ne.jsx)(_.EmojiText, {
                                        text: o
                                    })
                                }));
                            },
                            children: t
                        }, "remove"));
                    }
                    if (re.canDemote(a)) {
                        const t = () => {
                            if (a.isAdmin) {
                                a.contact.pendingAction++;
                                (0, A.demoteParticipants)(e.chat, [a]).finally(() => {
                                    a.contact.pendingAction--;
                                });
                            }
                        };
                        const n = X.fbt._("Dismiss as admin", null, {
                            hk: "2YfmwL"
                        });
                        if (ve) {
                            var l;
                            const t = (l = e.chat.groupMetadata) === null || l === undefined ? undefined : l.getParentGroupChat();
                            i.push((0, ne.jsx)(M.DropdownItem, {
                                testid: "mi-grp-community-demote",
                                action: () => (0, R.openCommunityParticipantDemoteConfirmation)(a, t),
                                children: n
                            }, "demote-admin"));
                        } else {
                            i.push((0, ne.jsx)(M.DropdownItem, {
                                testid: "mi-grp-demote",
                                action: t,
                                children: n
                            }, "demote-admin"));
                        }
                    }
                    if (re.canVerifyIdentity(a)) {
                        const t = X.fbt._("Verify Security Code", null, {
                            hk: "1vTVgt"
                        });
                        i.push((0, ne.jsx)(M.DropdownItem, {
                            testid: "mi-grp-verify-identify",
                            action: () => {
                                if (e.onVerification) {
                                    e.onVerification(a.contact);
                                }
                            },
                            children: t
                        }, "verify-identity"));
                    }
                    xe({
                        contactId: n.id,
                        menu: i,
                        anchor: t.anchor,
                        event: t.event
                    });
                };
                const Te = (t, n) => {
                    const a = (0, d.getOneToOneContactFromGroupContact)(n.id);
                    (0, y.findChat)(a, "groupInfoParticipants").then(t => {
                        if ((0, l.getABPropConfigValue)("unified_user_profile_navigation_enabled")) {
                            m.Cmd.chatInfoDrawer(t, false, false, (0, V.unproxy)(e.chat));
                        } else {
                            m.Cmd.openChatFromUnread(t).then(e => {
                                if (e) {
                                    if ((0, r.btmThreadsLoggingEnabled)()) {
                                        v.ComposeBoxActions.addMsgSendingLogAttributes(t, {
                                            handleMultiple () {
                                                (0, h.handleActivitiesForChatThreadLogging)([{
                                                    activityType: "groupMembershipReplies",
                                                    ts: (0, o.unixTime)(),
                                                    chatId: t.id
                                                }]);
                                            }
                                        });
                                    }
                                    v.ComposeBoxActions.focus(t);
                                }
                            });
                        }
                    });
                };
                const Ee = (0, j.elevatedPushNamesM2Enabled)(e.chat);
                const Ie = ((p = e.chat.groupMetadata) === null || p === undefined ? undefined : p.groupType) === P.GroupType.DEFAULT_ANNOUNCEMENT_GROUP ? ue : re.length;
                const Ae = X.fbt._({
                    "*": "Participants list: {group-participants} participants",
                    _1: "Participants list: 1 participant"
                }, [X.fbt._plural(Ie, "group-participants")], {
                    hk: "3CCjNY"
                });
                const Ne = re.length ? (0, ne.jsxs)(u.ChatInfoDrawerListSection, {
                    ref: me,
                    titleTestId: "section-participants",
                    testid: "group-info-participants-section",
                    title: X.fbt._({
                        "*": "{number} participants",
                        _1: "1 participant"
                    }, [X.fbt._plural(Ie, "number")], {
                        hk: "bcYCT"
                    }),
                    titleOnClick: () => {
                        e.onOpenParticipantSearch(k.ParticipantsFlowStep.Participants);
                    },
                    subtitle: je,
                    children: [_e, ye, Se, (0, ne.jsx)(N.NavigableFlatList, {
                        ariaLabel: Ae,
                        flatListController: e.flatListController,
                        listData: Me,
                        onRenderItem: e => (0, ne.jsx)(ie, {
                            active: se.current,
                            data: e,
                            participants: re,
                            handleParticipantClick: Te,
                            menuEnabled: Pe,
                            handleParticipantMenu: we,
                            contextMenu: ge,
                            elevatedPushNamesEnabled: Ee
                        }),
                        selection: se.current,
                        rotateList: true
                    }), ke]
                }) : null;
                const Re = () => {
                    xe(null);
                };
                let Oe;
                if (ge) {
                    Oe = (0, ne.jsx)(W.UIE, {
                        displayName: "ChatContextMenu",
                        escapable: true,
                        popable: true,
                        dismissOnWindowResize: true,
                        requestDismiss: Re,
                        children: (0, ne.jsx)(Y.default, {
                            contextMenu: ge
                        })
                    });
                }
                return (0, ne.jsxs)(ne.Fragment, {
                    children: [Ne, Oe]
                });
            });

            function le (e) {
                return e.length > u.INFO_DRAWER_MAX_ROWS_IN_COLLAPSED_LIST;
            }
            t.GroupInfoParticipantsSection = oe;
            oe.displayName = "GroupInfoParticipantsSection";
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
                var i;
                const o = (0, L.useModelValues)(e.chat, ["labels"]);
                const l = (0, L.useOptionalModelValues)(e.chat.groupMetadata, ["size", "creation"]);
                const s = (t = e.chat.groupMetadata) === null || t === undefined ? undefined : t.groupType;
                const r = (n = e.chat.groupMetadata) === null || n === undefined ? undefined : n.participants;
                const c = (0, O.default)();
                (0, D.useListener)(r, "bulk_add bulk_remove reset sort change:isAdmin change:isSuperAdmin", c);
                const d = (a = r == null ? undefined : r.length) !== null && a !== undefined ? a : 0;
                const f = (i = l == null ? undefined : l.size) !== null && i !== undefined ? i : 0;
                const g = (r == null ? undefined : r.iAmAdmin()) ? d : f;
                let M = A.fbt._("Group", null, {
                    hk: "DNiv2"
                });
                if (s === v.GroupType.DEFAULT_ANNOUNCEMENT_GROUP) {
                    M = (0, u.communityAnnouncementImprovementM2Enabled)() ? A.fbt._("Announcements", null, {
                        hk: "GNIKa"
                    }) : A.fbt._("Announcement group", null, {
                        hk: "80s42"
                    });
                }
                const j = A.fbt._({
                    "*": "{number} participants",
                    _1: "1 participant"
                }, [A.fbt._plural(s === v.GroupType.DEFAULT_ANNOUNCEMENT_GROUP ? g : d, "number")], {
                    hk: "bcYCT"
                });
                return (0, G.jsx)(h.default, {
                    theme: "padding-large",
                    children: (0, G.jsxs)(m.FlexColumn, {
                        align: "center",
                        children: [(0, G.jsx)(H, {
                            chat: e.chat,
                            xstyle: V.photo,
                            sendGroupProfilePictureLoggingEvent: (t, n, a) => {
                                var i;
                                var o;
                                var l;
                                const s = (i = e.chat) === null || i === undefined || (o = i.groupMetadata) === null || o === undefined ? undefined : o.creation;
                                const c = new Date((s != null ? s : 0) * 1000);
                                const d = new Intl.DateTimeFormat("en", {
                                    year: "numeric"
                                }).format(c);
                                const u = new Intl.DateTimeFormat("en", {
                                    month: "2-digit"
                                }).format(c);
                                const f = new Intl.DateTimeFormat("en", {
                                    day: "2-digit"
                                }).format(c);
                                const p = s != null ? `${d}-${u}-${f}` : "";
                                const h = (0, I.numberToPreciseSizeBucket)(g);
                                const m = (l = r == null ? undefined : r.iAmAdmin()) !== null && l !== undefined && l;
                                new x.GroupProfilePictureWamEvent({
                                    groupCreationDs: p,
                                    groupProfileAction: t,
                                    preciseGroupSizeBucket: h,
                                    isAdmin: m,
                                    hasProfilePicture: n,
                                    profilePictureType: a
                                }).commit();
                            }
                        }), (0, G.jsx)(W, {
                            chat: e.chat
                        }), (0, G.jsx)("div", {
                            "data-testid": "group-info-top-card-subtitle",
                            className: (0, R.default)(V.groupSecondary),
                            children: (0, G.jsx)(p.SelectableSpan, {
                                dir: "auto",
                                selectable: true,
                                children: (0, G.jsxs)(T.TextSpan, {
                                    size: "16",
                                    color: "secondary",
                                    children: [M, (l == null ? undefined : l.isSuspendedOrTerminated()) ? null : (0, G.jsxs)(G.Fragment, {
                                        children: [b.default.isRTL() ? " - " : " · ", (0, G.jsx)(E.default, {
                                            onClick: e.onClickParticipantsCount,
                                            children: j
                                        })]
                                    })]
                                })
                            })
                        }), (0, G.jsx)(C.default, {
                            labels: o.labels
                        })]
                    })
                });
            };
            var i = a(n(348926));
            var o = n(898817);
            var l = n(122583);
            var s = a(n(670983));
            var r = a(n(229922));
            var c = n(287461);
            var d = n(374660);
            var u = n(174834);
            var f = n(103440);
            var p = n(306703);
            var h = a(n(969358));
            var m = n(690495);
            var g = a(n(559719));
            var x = n(600145);
            var v = n(862159);
            var b = a(n(932325));
            var C = a(n(344460));
            var M = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var n = F(t);
                if (n && n.has(e)) {
                    return n.get(e);
                }
                var a = {};
                var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e) {
                    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                        var l = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                        if (l && (l.get || l.set)) {
                            Object.defineProperty(a, o, l);
                        } else {
                            a[o] = e[o];
                        }
                    }
                }
                a.default = e;
                if (n) {
                    n.set(e, a);
                }
                return a;
            }(n(288057));
            var j = n(114850);
            var _ = n(21645);
            var y = n(843337);
            var S = n(588792);
            var k = n(511696);
            var P = n(115948);
            var w = n(470824);
            var T = n(180519);
            var E = a(n(625903));
            var I = n(802027);
            var A = n(548360);
            var N = n(667294);
            var R = a(n(156720));
            var O = a(n(969651));
            var D = n(808446);
            var L = n(655241);
            var B = a(n(895851));
            var G = n(785893);

            function F (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var n = new WeakMap();
                return (F = function (e) {
                    if (e) {
                        return n;
                    } else {
                        return t;
                    }
                })(e);
            }
            const V = {
                photo: {
                    marginBottom: "njub1g37"
                },
                groupSecondary: {
                    lineHeight: "a4ywakfo",
                    marginTop: "ma4rpf0l",
                    textAlign: "qfejxiq4"
                }
            };

            function H (e) {
                const t = (0, L.useModelValues)(e.chat, ["isReadOnly"]);
                const n = (0, L.useModelValues)(e.chat.contact, ["id", "profilePicThumb"]);
                const a = (0, L.useModelValues)(e.chat.contact.profilePicThumb, ["imgFull"]);
                const i = (0, L.useModelValues)((0, s.default)(e.chat.groupMetadata, "props.chat.groupMetadata"), ["groupType"]);
                const [c, f] = (0, N.useState)(false);
                const [p, h] = (0, N.useState)(false);
                const m = (0, B.default)();
                const g = i.groupType === v.GroupType.DEFAULT_ANNOUNCEMENT_GROUP;
                const x = (0, u.communitiesEnabled)() && g ? S.PhotoPickerType.DEFAULT_ANNOUNCEMENT_GROUP : S.PhotoPickerType.GROUP;
                const b = t.isReadOnly || !a.canDelete() && !a.canSet() || (0, d.isSupportGroup)(t) || g || i.isSuspendedOrTerminated();
                return (0, G.jsx)("div", {
                    className: (0, R.default)(e.xstyle),
                    children: (0, G.jsx)(k.PhotoPickerLoadable, {
                        type: x,
                        id: n.id,
                        attachToChat: true,
                        pending: p,
                        startImage: a.imgFull,
                        readOnly: b,
                        onImageSet: (e, t) => {
                            let n;
                            h(true);
                            n = e && t ? (0, P.setProfilePic)(a, e, t) : (0, P.deleteProfilePic)(a);
                            (0, r.default)(n, m).catch((0, o.catchAbort)(() => {})).catch((0, l.filteredCatch)(M.ActionError, () => {
                                __LOG__(3)`GroupInfoDrawer: failed to set/delete group image`;
                                f(!c);
                            })).finally(() => {
                                h(false);
                            });
                        },
                        sendGroupProfilePictureLoggingEvent: e.sendGroupProfilePictureLoggingEvent
                    }, String(c))
                });
            }
            const U = {
                marginTop: "hymafltn",
                marginEnd: "jnwc1y2a",
                marginBottom: "ngycyvoj",
                marginStart: "svoq16ka"
            };

            function W (e) {
                const t = (0, L.useModelValues)(e.chat.contact, ["name"]);
                const n = (0, L.useModelValues)((0, s.default)(e.chat.groupMetadata, "props.chat.groupMetadata"), ["creation", "restrict", "support", "isUnnamed", "participants"]);
                const a = (0, B.default)();
                const l = function () {
                    var n = (0, i.default)(function* (n) {
                        const i = n;
                        if (i !== t.name) {
                            yield(0, r.default)((0, w.setGroupSubject)(e.chat, i), a).catch((0, o.catchAbort)(() => {})).catch(() => {
                                __LOG__(3)`group_info_drawer:onSetSubject failed`;
                            });
                        }
                    });
                    return function () {
                        return n.apply(this, arguments);
                    };
                }();
                const d = () => {
                    j.ModalManager.open((0, G.jsx)(f.ConfirmPopup, {
                        onOK: () => j.ModalManager.close(),
                        okText: A.fbt._("OK", null, {
                            hk: "4oTrfy"
                        }),
                        children: A.fbt._("Only admins can edit this group's info", null, {
                            hk: "1a2ztg"
                        })
                    }));
                };
                if (n.support) {
                    return (0, G.jsx)(T.TextHeader, {
                        className: (0, R.default)(U),
                        level: "2",
                        theme: "large",
                        children: (0, G.jsx)(_.GroupName, {
                            chat: e.chat,
                            groupMetadata: n,
                            breakWord: true
                        })
                    });
                } else if (n.isUnnamed && (0, c.getABPropConfigValue)("ugr_enabled")) {
                    return (0, G.jsx)(g.default, {
                        subject: (0, y.calculateUnnamedGroupParticipantsList)(n).toLocaleString(),
                        onSave: l,
                        editable: n.canSetSubject(),
                        editRestrictionInfo: n.restrict ? d : undefined
                    });
                } else {
                    return (0, G.jsx)(g.default, {
                        subject: t.name || e.chat.formattedTitle,
                        onSave: l,
                        editable: n.canSetSubject(),
                        editRestrictionInfo: n.restrict ? d : undefined
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
            var i = a(n(670983));
            var o = n(374660);
            var l = n(780549);
            var s = n(474103);
            var r = a(n(402085));
            var c = n(675085);
            var d = n(235630);
            var u = n(305521);
            var f = n(581354);
            var p = a(n(932325));
            var h = n(114850);
            var m = n(33014);
            var g = n(197988);
            var x = n(507877);
            var v = n(392632);
            var b = a(n(37875));
            var C = n(459857);
            var M = n(788271);
            var j = n(548360);
            var _ = n(667294);
            a(n(156720));
            var y = a(n(969651));
            var S = n(808446);
            var k = n(785893);
            const P = {
                dropdownText: {
                    display: "p357zi0d",
                    alignItems: "gndfcl4n"
                }
            };

            function w (e, t) {
                var n;
                const {
                    chat: a,
                    onVerification: l,
                    onPastParticipants: f
                } = e;
                const [w, E] = function (e, t) {
                    const [n, a] = (0, _.useState)(null);
                    const l = (t, n) => {
                        if (!t.isAdmin) {
                            t.contact.pendingAction++;
                            (0, m.promoteParticipants)(e, [t]).finally(() => {
                                t.contact.pendingAction--;
                            });
                        }
                        if (n) {
                            h.ModalManager.close();
                        }
                    };
                    const s = (t, n) => {
                        t.contact.pendingAction++;
                        (0, m.removeParticipants)(e, [t]).finally(() => {
                            t.contact.pendingAction--;
                        });
                        if (n) {
                            h.ModalManager.close();
                        }
                    };
                    const r = t => {
                        if (t.isAdmin) {
                            t.contact.pendingAction++;
                            (0, m.demoteParticipants)(e, [t]).finally(() => {
                                t.contact.pendingAction--;
                            });
                        }
                    };
                    const d = () => {
                        a(null);
                    };
                    let f;
                    if (n) {
                        f = (0, k.jsx)(v.UIE, {
                            displayName: "ChatContextMenu",
                            escapable: true,
                            popable: true,
                            dismissOnWindowResize: true,
                            requestDismiss: d,
                            children: (0, k.jsx)(b.default, {
                                contextMenu: n
                            })
                        });
                    }
                    return [f, (n, d) => {
                        const f = (0, i.default)(e.groupMetadata, "chat.groupMetadata").participants;
                        const m = f.assertGet(d.id.toString());
                        const v = [];
                        const b = (0, o.isCommunityAnnouncementGroup)(e);
                        if (f.canPromote(m)) {
                            let t;
                            if (b) {
                                var M;
                                t = j.fbt._("Make admin", null, {
                                    hk: "1cHVQ6"
                                });
                                const n = (M = e.groupMetadata) === null || M === undefined ? undefined : M.getParentGroupChat();
                                v.push((0, k.jsx)(c.DropdownItem, {
                                    testid: "mi-grp-promote-community-admin",
                                    action: () => {
                                        (0, x.openCommunityParticipantPromoteConfirmation)(n, m, f, m.contact);
                                    },
                                    children: t
                                }, "promote"));
                            } else {
                                t = p.default.t(423);
                                v.push((0, k.jsx)(c.DropdownItem, {
                                    testid: "mi-grp-promote-admin",
                                    action: () => l(m, false),
                                    children: t
                                }, "promote"));
                            }
                        }
                        if (f.canRemove(m)) {
                            const e = p.default.t(427);
                            v.push((0, k.jsx)(c.DropdownItem, {
                                testid: "mi-grp-remove-participant",
                                action: () => s(m, false),
                                children: e
                            }, "remove"));
                        }
                        if (f.canDemote(m)) {
                            const t = () => r(m);
                            const n = j.fbt._("Dismiss as admin", null, {
                                hk: "243sNl"
                            });
                            if (b) {
                                var _;
                                const t = (_ = e.groupMetadata) === null || _ === undefined ? undefined : _.getParentGroupChat();
                                v.push((0, k.jsx)(c.DropdownItem, {
                                    testid: "mi-grp-community-demote",
                                    action: () => (0, g.openCommunityParticipantDemoteConfirmation)(m, t),
                                    children: n
                                }, "demote-admin"));
                            } else {
                                v.push((0, k.jsx)(c.DropdownItem, {
                                    testid: "mi-grp-demote",
                                    action: t,
                                    children: n
                                }, "demote-admin"));
                            }
                        }
                        if (f.canVerifyIdentity(m)) {
                            const e = j.fbt._("Verify Security Code", null, {
                                hk: "1vTVgt"
                            });
                            v.push((0, k.jsx)(c.DropdownItem, {
                                testid: "mi-grp-verify-identify",
                                action: () => {
                                    h.ModalManager.close();
                                    if (!(t == null)) {
                                        t(m.contact);
                                    }
                                },
                                children: e
                            }, "verify-identity"));
                        }
                        const y = (0, C.isMeAccount)(m.contact.id) ? j.fbt._("Message yourself", null, {
                            hk: "LDbjA"
                        }) : j.fbt._("Message {author}", [j.fbt._param("author", m.contact.formattedShortName)], {
                            hk: "1kM7Cg"
                        });
                        v.push((0, k.jsx)(c.DropdownItem, {
                            ariaLabel: y,
                            action: T.bind(null, m.contact.id),
                            addSpacing: true,
                            children: (0, k.jsx)(u.EmojiText, {
                                text: y,
                                xstyle: P.dropdownText
                            })
                        }, "message author"));
                        const S = n.type === "click" ? undefined : n.target;
                        a({
                            contactId: d.id,
                            menu: v,
                            anchor: S,
                            event: n.anchor ? undefined : n
                        });
                    }];
                }(a, l);
                const I = (0, y.default)();
                const A = (n = a.groupMetadata) === null || n === undefined ? undefined : n.participants;
                (0, S.useListener)(A, ["bulk_add", "bulk_remove", "reset"], I);
                const N = (0, M.useShowPastParticipants)(a);
                const R = (0, s.hideCagMaskedParticipants)();
                const O = A == null ? undefined : A.map(e => e.contact);
                let D;
                if (N) {
                    D = {
                        text: j.fbt._("View past participants", null, {
                            hk: "fYGd4"
                        }),
                        onClick: f
                    };
                }
                return (0, k.jsxs)(k.Fragment, {
                    children: [(0, k.jsx)(r.default, {
                        ref: t,
                        title: j.fbt._("Search Participants", null, {
                            hk: "M6lxB"
                        }),
                        filter: e => {
                            var t;
                            const n = A == null ? undefined : A.get(e.id.toString());
                            return n != null && (!R || ((t = a.groupMetadata) === null || t === undefined ? undefined : t.isLidAddressingMode) !== false || (0, C.isMeAccount)(n.id) || !n.id.isLid());
                        },
                        onCancel: () => {
                            h.ModalManager.close();
                        },
                        openContextOnClick: true,
                        contextEnabled: () => false,
                        contextMenu: e => !(0, C.isMeAccount)(e),
                        onContext: E,
                        showNotifyName: true,
                        elevatedPushNamesEnabled: (0, d.elevatedPushNamesM2Enabled)(a),
                        listenForAdminChange: true,
                        participantCollection: (0, i.default)(A, "participants"),
                        contacts: O,
                        button: D,
                        showStatusRingAroundProfilePhoto: true
                    }), w]
                });
            }
            const T = e => {
                const t = (0, o.getOneToOneContactFromGroupContact)(e);
                (0, f.findChat)(t, "groupParticipantSearch").then(e => {
                    h.ModalManager.close();
                    l.Cmd.openChatFromUnread(e);
                });
            };
            var E = (0, _.forwardRef)(w);
            t.default = E;
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
                const [c, d] = (0, l.useFlow)(a);
                if (!d.step) {
                    return null;
                }
                let u;
                switch (d.step) {
                    case r.Participants:
                        u = (0, s.jsx)(i.default, {
                            chat: t,
                            onVerification: n,
                            onPastParticipants: () => d.push(r.PastParticipants)
                        });
                        break;
                    case r.PastParticipants: {
                        const e = d.stackSize() > 1;
                        const n = () => d.pop();
                        u = e ? (0, s.jsx)(o.default, {
                            chat: t,
                            onBack: n
                        }) : (0, s.jsx)(o.default, {
                            chat: t,
                            onClose: n
                        });
                        break;
                    }
                }
                return (0, s.jsx)(c, {
                    flow: d,
                    children: u
                });
            };
            t.ParticipantsFlowStep = undefined;
            var i = a(n(795767));
            var o = a(n(795367));
            var l = n(839062);
            var s = n(785893);
            const r = n(76672).Mirrored(["Participants", "PastParticipants"]);
            t.ParticipantsFlowStep = r;
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
                const a = (0, f.useModelValues)(t.contact, ["id", "showBusinessCheckmarkAsPrimary", "name", "pushname", "notifyName", "formattedName", "formattedPhone"]);
                const h = (0, p.jsx)(c.Name, {
                    contact: a,
                    showBusinessCheckmark: a.showBusinessCheckmarkAsPrimary,
                    showLabel: true,
                    titlify: true,
                    ellipsify: true,
                    you: true,
                    showNotifyName: n,
                    elevatedPushNamesEnabled: n
                });
                const m = o.Clock.pastParticipantOnDateAtTime(t.leaveTs, function (e) {
                    const t = e.id.equals((0, d.getMeUser)());
                    if (e.leaveReason === r.LeaveReason.Left) {
                        if (t) {
                            return u.fbt._("Left", null, {
                                hk: "3R2igg"
                            });
                        } else {
                            return u.fbt._("Left", null, {
                                hk: "3kbdqU"
                            });
                        }
                    }
                    if (t) {
                        return u.fbt._("Removed", null, {
                            hk: "4vPnHl"
                        });
                    } else {
                        return u.fbt._("Removed", null, {
                            hk: "3LiTU6"
                        });
                    }
                }(t));
                const g = (0, s.pushNameCanBeUsed)(a) && n ? a.formattedPhone : null;
                return (0, p.jsx)(i.default, {
                    image: (0, p.jsx)(l.DetailImage, {
                        id: a.id
                    }),
                    primary: h,
                    secondary: m,
                    secondaryDetail: g
                });
            };
            var i = a(n(170206));
            var o = n(63014);
            var l = n(23641);
            var s = n(235630);
            var r = n(687352);
            var c = n(21645);
            var d = n(459857);
            var u = n(548360);
            var f = n(655241);
            var p = n(785893);
        },
        795367: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = undefined;
            var i = n(474103);
            var o = n(235630);
            var l = n(753233);
            var s = n(258105);
            var r = n(512938);
            var c = n(690495);
            var d = a(n(176809));
            var u = a(n(932325));
            var f = a(n(417696));
            var p = n(608456);
            var h = a(n(772549));
            var m = n(676345);
            var g = n(459857);
            var x = n(548360);
            var v = n(667294);
            a(n(156720));
            var b = a(n(261716));
            var C = a(n(524578));
            var M = n(785893);
            const j = "HEADER";
            const _ = "ROW";
            const y = "DISCLAIMER";

            function S (e, t) {
                var n;
                const {
                    chat: a,
                    onBack: l,
                    onClose: s
                } = e;
                const r = (n = a.groupMetadata) === null || n === undefined ? undefined : n.pastParticipants;
                const [c, d] = (0, b.default)();
                const h = (0, C.default)(r, ["buld_add", "bulk_remove", "reset"], () => {
                    var e;
                    const t = u.default.accentFold(c);
                    const n = (0, p.numberSearch)(t);
                    const a = (e = r == null ? undefined : r.getValidRecords().filter(e => {
                        const a = !t || e.contact.searchMatch(t, n);
                        if ((0, i.hideCagMaskedParticipants)()) {
                            return ((0, g.isMeAccount)(e.id) || !e.id.isLid()) && a;
                        } else {
                            return a;
                        }
                    })) !== null && e !== undefined ? e : [];
                    if (!a.length) {
                        return [];
                    }
                    const o = [];
                    o.push({
                        type: j,
                        header: x.fbt._("Past participants", null, {
                            hk: "2k91Dw"
                        }),
                        itemKey: "list_header"
                    });
                    a.forEach((e, t) => o.push({
                        type: _,
                        participant: e,
                        itemKey: `${e.id.toString()}_${t}`
                    }));
                    o.push({
                        type: y
                    });
                    return o;
                }, [c]);
                return (0, M.jsx)(f.default, {
                    ref: t,
                    title: x.fbt._("Search past participants", null, {
                        hk: "1d6pYh"
                    }),
                    data: h,
                    renderItem: e => (0, M.jsx)(k, {
                        data: e,
                        elevatedPushNamesEnabled: (0, o.elevatedPushNamesM2Enabled)(a)
                    }),
                    emptyState: (0, M.jsx)(T, {}),
                    onSearch: d,
                    searchPlaceholder: u.default.t(545),
                    onBack: l,
                    onCancel: s
                });
            }

            function k (e) {
                var t;
                let {
                    data: n,
                    elevatedPushNamesEnabled: a
                } = e;
                switch (n.type) {
                    case j:
                        return (0, M.jsx)(h.default, {
                            header: (t = n.header) !== null && t !== undefined ? t : "",
                            uppercase: false
                        });
                    case _:
                        return (0, M.jsx)(d.default, {
                            participant: n.participant,
                            elevatedPushNamesEnabled: a
                        });
                    case y:
                        return (0, M.jsx)(w, {});
                    default:
                        throw new r.UnknownDataError(n);
                }
            }
            const P = {
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

            function w () {
                return (0, M.jsx)(c.FlexRow, {
                    xstyle: [P.row, P.disclaimer, m.uiPadding.horiz15],
                    align: "center",
                    justify: "center",
                    children: (0, M.jsx)("span", {
                        children: x.fbt._("People who left or were removed in the last 60 days. {=m2}", [x.fbt._implicitParam("=m2", (0, M.jsx)(l.ExternalLink, {
                            href: (0, s.getHowToExitAndDeleteGroupsFaq)(),
                            children: x.fbt._("Learn More", null, {
                                hk: "44tT41"
                            })
                        }))], {
                            hk: "gdXOy"
                        })
                    })
                });
            }

            function T () {
                return (0, M.jsxs)(M.Fragment, {
                    children: [(0, M.jsx)(h.default, {
                        header: x.fbt._("Past participants", null, {
                            hk: "2k91Dw"
                        }),
                        uppercase: false
                    }), (0, M.jsx)(c.FlexRow, {
                        xstyle: [P.row, P.empty],
                        align: "center",
                        justify: "center",
                        children: (0, M.jsx)("span", {
                            children: x.fbt._("No results found", null, {
                                hk: "1Wo2fc"
                            })
                        })
                    }), (0, M.jsx)(w, {})]
                });
            }
            var E = (0, v.forwardRef)(S);
            t.default = E;
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
                const a = (0, c.jsx)(s.TextSpan, {
                    theme: "title",
                    children: r.fbt._("Security", null, {
                        hk: "2BYJDI"
                    })
                });
                const d = (0, c.jsx)(s.TextDiv, {
                    theme: "muted",
                    children: r.fbt._("Click to learn how messages and calls are secured.", null, {
                        hk: "1UxhjE"
                    })
                });
                const u = (0, c.jsx)(o.LockIcon, {
                    color: l.SvgColorProp.SECONDARY,
                    height: 20
                });
                return (0, c.jsx)(i.default, {
                    icon: u,
                    onClick: t,
                    title: a,
                    secondaryTitle: d,
                    spaced: n
                });
            };
            var i = a(n(306007));
            var o = n(341462);
            var l = n(220584);
            var s = n(180519);
            var r = n(548360);
            var c = n(785893);
        },
        788271: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.useShowPastParticipants = function (e) {
                const t = (0, l.useOptionalModelValues)(e.groupMetadata, ["participants", "pastParticipants", "groupType"]);
                const n = t == null ? undefined : t.pastParticipants;
                if (!(0, o.default)(n, ["bulk_add", "bulk_remove", "reset"], () => Boolean(n == null ? undefined : n.getValidRecords().length))) {
                    return false;
                }
                if ((t == null ? undefined : t.groupType) === i.GroupType.DEFAULT_ANNOUNCEMENT_GROUP) {
                    return Boolean(t == null ? undefined : t.participants.iAmAdmin());
                }
                return true;
            };
            var i = n(862159);
            var o = a(n(524578));
            var l = n(655241);
        },
        883537: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const t = (0, c.useModelValues)(e.mediaData, ["mediaStage", "renderableUrl"]);
                return (0, d.jsx)(o.default, {
                    mediaData: t,
                    placeholderRenderer: p,
                    children: t => (0, d.jsx)(f, {
                        url: t,
                        msg: e.msg
                    })
                });
            };
            var i = a(n(932325));
            var o = a(n(674465));
            var l = n(782173);
            var s = a(n(936027));
            var r = a(n(261294));
            var c = n(655241);
            var d = n(785893);
            const u = e => {
                e.stopPropagation();
            };

            function f (e) {
                let {
                    url: t,
                    msg: n
                } = e;
                return (0, d.jsx)(l.AudioTag, {
                    url: t,
                    className: s.default.mediaViewerAudio,
                    onClick: u,
                    autoPlay: true,
                    msg: n,
                    controls: true,
                    testId: "media-audio",
                    children: i.default.t(141)
                });
            }

            function p () {
                return (0, d.jsx)("div", {
                    className: (0, r.default)(s.default.imageAudio, s.default.mediaViewerPlaceholder),
                    onClick: u
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
                const {
                    msg: t,
                    onHightlightCloseEnd: n,
                    msgIndexInAlbum: a,
                    onViewOnceInfoClick: i,
                    onClose: o
                } = e;
                const s = (0, he.useRef)(null);
                const [c, d, u, f, p, h, g, x, b, M, j, _, S, k, P] = (0, ve.useMsgValues)(e.msg.id, [D.getId, D.getStar, D.getIsGroupMsg, D.getType, D.getIsGif, D.getIsViewOnce, D.getSender, y.getSenderObj, D.getT, D.getIsSentByMe, D.getIsStickerMsg, D.getBroadcastId, y.getIsUnsentMedia, D.getIsKept, D.getMessageSecret]);
                const T = (0, y.getChat)(t);
                const E = (0, xe.useModelValues)(e.mediaData, ["filehash", "mediaStage", "renderableUrl"]);
                const [A, N] = (0, he.useState)(null);
                const [R, L] = (0, he.useState)(null);
                const B = (0, he.useRef)(null);
                const G = () => {
                    N(null);
                };
                const F = () => {
                    L(null);
                };
                const V = (0, be.default)(e => {
                    if ((0, W.canReactToMessage)(e)) {
                        L({
                            dirY: v.DirY.BOTTOM,
                            dirX: v.DirX.CENTER,
                            type: v.MenuType.ReactionPicker,
                            menu: (0, Ce.jsx)(U.ReactionsPanel, {
                                msgId: e.id.toString(),
                                onSelection: t => {
                                    (0, Z.sendReactionToMsg)(e, t).catch(() => {});
                                    F();
                                }
                            }),
                            flipOnRTL: true,
                            anchor: B.current
                        });
                    }
                });
                (0, ge.useListener)(s.current, "animationend", () => {
                    n();
                });
                let H = t.displayName({
                    showShortName: true,
                    withPushName: true
                });
                if (u) {
                    H += " @ " + T.title();
                }
                let Y;
                let z = (0, Ce.jsx)(ue.XViewerIcon, {
                    className: e.isHighlightClose ? fe.default.highlightClose : null,
                    containerRef: s
                });
                if (A) {
                    Y = (0, Ce.jsx)(ae.UIE, {
                        displayName: "MsgReaction",
                        escapable: true,
                        popable: true,
                        dismissOnWindowResize: true,
                        requestDismiss: G,
                        children: (0, Ce.jsx)(ie.default, {
                            contextMenu: A
                        })
                    });
                } else if (R) {
                    Y = (0, Ce.jsx)(ae.UIE, {
                        displayName: "MsgReactionPicker",
                        escapable: true,
                        popable: true,
                        dismissOnWindowResize: true,
                        requestDismiss: F,
                        children: (0, Ce.jsx)(ie.default, {
                            contextMenu: R
                        })
                    });
                }
                return (0, Ce.jsxs)("div", {
                    className: fe.default.mediaPanelHeader,
                    children: [(0, Ce.jsx)("div", {
                        className: fe.default.info,
                        children: (0, Ce.jsx)(l.default, {
                            idle: true,
                            image: (0, Ce.jsx)(m.DetailImage, {
                                id: g,
                                size: 40
                            }),
                            primary: (0, Ce.jsx)(C.EmojiText, {
                                ellipsify: true,
                                text: H
                            }),
                            secondary: r.Clock.relativeDateAndTimeStr(b),
                            theme: "media"
                        })
                    }), (0, Ce.jsx)("div", {
                        className: fe.default.mediaPanelTools,
                        children: (0, Ce.jsxs)(I.MenuBar, {
                            theme: "strong",
                            children: [(0, Ce.jsx)(Be, {
                                isMediaDownloadable: () => !h && !!(0, O.canDownloadMsg)(t) && (!!E.renderableUrl || E.mediaStage === w.MEDIA_DATA_STAGE.RESOLVED),
                                msg: t,
                                msgIndexInAlbum: a,
                                onClose: o,
                                onViewOnceInfoClick: i,
                                openReactionTray: () => {
                                    if (!(0, W.canReactToMessage)(t)) {
                                        return;
                                    }
                                    const e = {
                                        dirY: v.DirY.BOTTOM,
                                        dirX: v.DirX.CENTER,
                                        type: v.MenuType.ReactionSendTray,
                                        menu: (0, Ce.jsx)(Q.SendReactionsTrayContainer, {
                                            msg: t,
                                            selectedCallback: e => {
                                                if (e !== J.MORE_REACTIONS) {
                                                    (0, Z.sendReactionToMsg)(t, e).catch(() => {});
                                                } else {
                                                    self.setTimeout(() => {
                                                        V(t);
                                                    }, 150);
                                                }
                                                G();
                                            }
                                        }),
                                        flipOnRTL: false,
                                        anchor: B.current
                                    };
                                    N(e);
                                },
                                sendReactionButtonRef: B
                            }), (0, Ce.jsx)(I.MenuBarItem, {
                                testid: "btn-close",
                                icon: z,
                                title: pe.fbt._("Close", null, {
                                    hk: "19Jpec"
                                }),
                                onClick: e.onClose
                            })]
                        }, "media-panel-header")
                    }), Y]
                });
            };
            var i = n(8304);
            var o = n(268167);
            var l = a(n(170206));
            var s = n(713105);
            var r = n(63014);
            var c = n(780549);
            var d = n(385798);
            var u = n(877171);
            var f = n(103440);
            var p = n(419000);
            var h = a(n(804418));
            var m = n(23641);
            var g = n(126333);
            var x = n(900316);
            var v = n(664149);
            var b = n(675085);
            var C = n(305521);
            var M = n(821130);
            var j = n(525110);
            var _ = n(361483);
            var y = n(163755);
            var S = n(501532);
            var k = n(328150);
            var P = a(n(932325));
            var w = n(172259);
            var T = n(69315);
            var E = a(n(266466));
            var I = n(526795);
            var A = n(784424);
            var N = n(97858);
            var R = n(114850);
            var O = n(939716);
            var D = n(787742);
            var L = n(722119);
            var B = n(373070);
            var G = n(73225);
            var F = n(352740);
            var V = n(990625);
            var H = n(247442);
            var U = n(400874);
            var W = n(962647);
            var Y = n(604668);
            var z = a(n(313014));
            var q = a(n(467201));
            var K = n(774401);
            var X = a(n(774396));
            var Z = n(594149);
            var J = n(948101);
            var Q = n(708127);
            var $ = n(383296);
            var ee = n(453603);
            var te = n(995946);
            var ne = n(163139);
            var ae = n(392632);
            var ie = a(n(37875));
            var oe = n(220279);
            var le = n(680641);
            var se = n(677658);
            var re = n(241572);
            var ce = n(923655);
            var de = n(130756);
            n(341386);
            var ue = n(356722);
            var fe = a(n(423359));
            var pe = n(548360);
            var he = n(667294);
            var me = a(n(135179));
            var ge = n(808446);
            var xe = n(655241);
            var ve = n(871210);
            var be = a(n(17533));
            var Ce = n(785893);
            const Me = n(76672).Mirrored(["MenuBar", "Dropdown"]);

            function je (e) {
                const t = (0, y.getChat)(e);
                t.composeQuotedMsg = e;
                u.ComposeBoxActions.focus(t);
            }

            function _e (e) {
                return pe.fbt._("Report {contact_name}", [pe.fbt._param("contact_name", e.displayName())], {
                    hk: "3Dqyjo"
                });
            }

            function ye (e) {
                let {
                    isMediaDownloadable: t,
                    msg: n,
                    onClose: a,
                    openReactionTray: i,
                    sendReactionButtonRef: o
                } = e;
                return (0, Ce.jsxs)(Ce.Fragment, {
                    children: [(0, L.canReplyMsg)(n) ? (0, Ce.jsx)(Pe, {
                        msg: n,
                        onClose: a
                    }) : null, (0, O.canStarMsg)(n) ? (0, Ce.jsx)(Ae, {
                        msg: n
                    }) : null, n.canShowKeepOrUnkeepOption() ? (0, Ce.jsx)(Ie, {
                        msg: n
                    }) : null, (0, O.canPinMsg)(n) ? (0, Ce.jsx)(Ne, {
                        msg: n
                    }) : null, (0, W.canReactToMessage)(n) ? (0, Ce.jsx)(Ee, {
                        msg: n,
                        openReactionTray: i,
                        sendReactionButtonRef: o
                    }) : null, (0, Ce.jsx)(we, {
                        msg: n,
                        onClose: a
                    }), (0, O.canForwardMsg)(n) ? (0, Ce.jsx)(Re, {
                        msg: n
                    }) : null, (0, Ce.jsx)(Ge, {
                        isMediaDownloadable: t,
                        isAlbumMedia: true,
                        msg: n,
                        onClose: a
                    })]
                });
            }

            function Se (e) {
                let {
                    isMediaDownloadable: t,
                    msg: n,
                    onClose: a,
                    openReactionTray: i,
                    sendReactionButtonRef: o
                } = e;
                return (0, Ce.jsxs)(Ce.Fragment, {
                    children: [(0, D.getIsStickerMsg)(n) ? null : (0, Ce.jsx)(ke, {
                        msg: n,
                        type: Me.MenuBar,
                        onClose: a
                    }), (0, D.getIsStickerMsg)(n) ? (0, Ce.jsx)(Pe, {
                        msg: n,
                        onClose: a
                    }) : null, (0, O.canStarMsg)(n) ? (0, Ce.jsx)(Ae, {
                        msg: n
                    }) : null, (0, O.canPinMsg)(n) ? (0, Ce.jsx)(Ne, {
                        msg: n
                    }) : null, n.canShowKeepOrUnkeepOption() ? (0, Ce.jsx)(Ie, {
                        msg: n
                    }) : null, (0, D.getIsStickerMsg)(n) ? (0, Ce.jsx)(we, {
                        msg: n,
                        onClose: a
                    }) : null, (0, W.canReactToMessage)(n) ? (0, Ce.jsx)(Ee, {
                        msg: n,
                        openReactionTray: i,
                        sendReactionButtonRef: o
                    }) : null, (0, O.canForwardMsg)(n) ? (0, Ce.jsx)(Re, {
                        msg: n
                    }) : null, (0, D.getIsStickerMsg)(n) ? null : (0, Ce.jsx)(Te, {
                        isMediaDownloadable: t,
                        msg: n,
                        type: Me.MenuBar
                    }), (0, O.canReportMsg)(n) && (0, N.messageLevelReportingEnabled)() ? (0, Ce.jsx)(Ge, {
                        isMediaDownloadable: t,
                        isAlbumMedia: false,
                        msg: n,
                        onClose: a
                    }) : null]
                });
            }

            function ke (e) {
                let {
                    msg: t,
                    type: n,
                    onClose: a
                } = e;
                const i = e => {
                    e.stopPropagation();
                    a();
                    x.DrawerManager.existsDrawerRight(e => {
                        if (e && d.Column.column === 2) {
                            x.DrawerManager.closeDrawerRight();
                        }
                    });
                    const n = (0, s.getSearchContext)((0, y.getChat)(t), (0, ne.unproxy)(t));
                    c.Cmd.openChatAt((0, y.getChat)(t), n).then(e => {
                        if (e) {
                            u.ComposeBoxActions.focus((0, y.getChat)(t));
                        }
                    });
                };
                if (n === Me.Dropdown) {
                    return (0, Ce.jsx)(b.DropdownItem, {
                        action: i,
                        children: pe.fbt._("Go to message", null, {
                            hk: "B1anG"
                        })
                    });
                } else {
                    return (0, Ce.jsx)(I.MenuBarItem, {
                        icon: (0, Ce.jsx)(o.BubbleIcon, {}),
                        title: pe.fbt._("Go to message", null, {
                            hk: "B1anG"
                        }),
                        onClick: i
                    });
                }
            }

            function Pe (e) {
                let {
                    msg: t,
                    onClose: n
                } = e;
                return (0, Ce.jsx)(I.MenuBarItem, {
                    icon: (0, Ce.jsx)(Y.ReplyIcon, {}),
                    title: pe.fbt._("Reply", null, {
                        hk: "1C7DPa"
                    }),
                    onClick: () => {
                        n();
                        (0, i.delayMs)(T.CLOSE_ANIMATION_DURATION).then(je.bind(null, (0, ne.unproxy)(t)));
                    }
                });
            }

            function we (e) {
                let {
                    msg: t,
                    onClose: n
                } = e;
                return (0, Ce.jsx)(I.MenuBarItem, {
                    icon: (0, Ce.jsx)(p.DeleteIcon, {}),
                    title: pe.fbt._("Delete", null, {
                        hk: "2KhPUX"
                    }),
                    onClick: () => {
                        R.ModalManager.open((0, Ce.jsx)(h.default, {
                            chat: (0, y.getChat)(t),
                            msgList: [(0, ne.unproxy)(t)],
                            onDelete: n
                        }));
                        K.UiRevokeActionHelper.startSession();
                        K.UiRevokeActionHelper.messageSelected();
                    }
                });
            }

            function Te (e) {
                let {
                    msg: t,
                    type: n,
                    isMediaDownloadable: a
                } = e;
                const i = e => {
                    e.stopPropagation();
                    M.FileSaver.initDownload((0, ne.unproxy)(t));
                };
                if (a()) {
                    if (n === Me.Dropdown) {
                        return (0, Ce.jsx)(b.DropdownItem, {
                            action: i,
                            disabled: !a(),
                            children: pe.fbt._("Download", null, {
                                hk: "1g5Jix"
                            })
                        });
                    } else {
                        return (0, Ce.jsx)(I.MenuBarItem, {
                            icon: (0, Ce.jsx)(g.DownloadIcon, {}),
                            title: pe.fbt._("Download", null, {
                                hk: "1g5Jix"
                            }),
                            disabled: !a(),
                            onClick: i
                        });
                    }
                } else {
                    return null;
                }
            }

            function Ee (e) {
                let {
                    msg: t,
                    openReactionTray: n,
                    sendReactionButtonRef: a
                } = e;
                if (t.type === B.MSG_TYPE.STICKER) {
                    return null;
                } else {
                    return (0, Ce.jsx)(I.MenuBarItem, {
                        testid: "reaction-entry-point",
                        icon: (0, Ce.jsx)(H.ReactionsMediaIcon, {
                            containerRef: a,
                            width: 20
                        }),
                        title: pe.fbt._("React", null, {
                            hk: "1mI4Nl"
                        }),
                        onClick: () => {
                            n();
                        }
                    });
                }
            }
            const Ie = e => {
                let t;
                let n;
                let a;
                let {
                    msg: i
                } = e;
                const o = e => {
                    e.stopPropagation();
                    (0, S.runKeepInChatUX)((0, ne.unproxy)(i), de.KIC_ENTRY_POINT_TYPE.MEDIA);
                };
                const l = e => {
                    e.stopPropagation();
                    (0, S.runUndoKeepInChatUX)((0, ne.unproxy)(i), de.KIC_ENTRY_POINT_TYPE.MEDIA);
                };
                if ((0, D.getIsKept)(i) && i.canShowUnkeepOption()) {
                    t = (0, Ce.jsx)(oe.UndoKeepInChatMediaIcon, {});
                    n = l;
                    a = pe.fbt._("Unkeep", null, {
                        hk: "1eGZng"
                    });
                } else {
                    if ((0, D.getIsKept)(i) || !i.canShowKeepOption()) {
                        return null;
                    }
                    t = (0, Ce.jsx)(k.KeepInChatMediaIcon, {});
                    n = o;
                    a = pe.fbt._("Keep", null, {
                        hk: "1a48ae"
                    });
                }
                return (0, Ce.jsx)(I.MenuBarItem, {
                    icon: t,
                    title: a,
                    onClick: n
                }, t);
            };

            function Ae (e) {
                let t;
                let n;
                let a;
                let {
                    msg: i
                } = e;
                if (i.star) {
                    t = e => {
                        e.stopPropagation();
                        c.Cmd.sendUnstarMsgs((0, y.getChat)(i), [(0, ne.unproxy)(i)]);
                    };
                    n = (0, Ce.jsx)(re.UnstarBtnIcon, {});
                    a = P.default.t(607);
                } else {
                    t = e => {
                        e.stopPropagation();
                        c.Cmd.sendStarMsgs((0, y.getChat)(i), [(0, ne.unproxy)(i)]);
                    };
                    n = (0, Ce.jsx)(te.StarBtnIcon, {});
                    a = P.default.t(585);
                }
                return (0, Ce.jsx)(I.MenuBarItem, {
                    icon: n,
                    title: a,
                    onClick: t
                }, a);
            }

            function Ne (e) {
                let t;
                let n;
                let a;
                let {
                    msg: i
                } = e;
                if ((0, me.default)(i.id)) {
                    t = e => {
                        e.stopPropagation();
                        R.ModalManager.open((0, Ce.jsx)(le.UnpinMessageModal, {
                            msg: i
                        }));
                    };
                    n = (0, Ce.jsx)(se.UnpinnedIcon, {});
                    a = pe.fbt._("Unpin", null, {
                        hk: "3oWx14"
                    });
                } else {
                    t = e => {
                        e.stopPropagation();
                        R.ModalManager.open((0, Ce.jsx)(F.PinMessageModal, {
                            msg: i
                        }));
                    };
                    n = (0, Ce.jsx)(V.Pinned3Icon, {});
                    a = pe.fbt._("Pin", null, {
                        hk: "23jUX3"
                    });
                }
                return (0, Ce.jsx)(I.MenuBarItem, {
                    icon: n,
                    title: a,
                    onClick: t
                }, a);
            }

            function Re (e) {
                let {
                    msg: t
                } = e;
                return (0, Ce.jsx)(I.MenuBarItem, {
                    icon: (0, Ce.jsx)(j.ForwardIcon, {}),
                    title: P.default.t(311),
                    onClick: e => {
                        e.stopPropagation();
                        if ((0, y.getIsUnsentMedia)(t)) {
                            R.ModalManager.open((0, Ce.jsx)(f.ConfirmPopup, {
                                title: P.default.t(301),
                                onOK: () => R.ModalManager.close(),
                                okText: pe.fbt._("OK", null, {
                                    hk: "4oTrfy"
                                }),
                                children: P.default.t(298)
                            }));
                        } else {
                            R.ModalManager.open((0, Ce.jsx)(_.ForwardMessageModalLoadable, {
                                msgs: [(0, ne.unproxy)(t)],
                                onClose: () => R.ModalManager.close()
                            }), {
                                transition: "modal-flow"
                            });
                        }
                    }
                });
            }

            function Oe (e) {
                let {
                    msg: t
                } = e;
                return (0, Ce.jsx)(b.DropdownItem, {
                    testid: "mi-msg-reply",
                    action: () => {
                        (0, z.default)(t);
                    },
                    children: pe.fbt._("Reply privately", null, {
                        hk: "1XQeK2"
                    })
                });
            }

            function De (e) {
                let {
                    msg: t
                } = e;
                const n = e => {
                    if (e) {
                        (0, $.sendMessageReportBlock)(t, ee.SpamFlow.MediaViewer);
                    } else {
                        (0, $.sendMessageReport)(t, ee.SpamFlow.MediaViewer);
                    }
                    R.ModalManager.close();
                };
                return (0, Ce.jsx)(b.DropdownItem, {
                    action: () => {
                        R.ModalManager.open((0, Ce.jsx)(E.default, {
                            isBusiness: t.senderObj.isBusiness,
                            isGroup: (0, y.getChat)(t).isGroup,
                            onReport: n,
                            onCancel: () => R.ModalManager.close(),
                            title: _e(t)
                        }));
                    },
                    children: _e(t)
                });
            }

            function Le (e) {
                let {
                    msg: t,
                    onClose: n
                } = e;
                return (0, Ce.jsx)(b.DropdownItem, {
                    action: () => {
                        n();
                        (0, i.delayMs)(T.CLOSE_ANIMATION_DURATION + 250).then(c.Cmd.msgInfoDrawer.bind(c.Cmd, (0, ne.unproxy)(t)));
                    },
                    children: P.default.t(435)
                });
            }

            function Be (e) {
                let {
                    isMediaDownloadable: t,
                    msg: n,
                    msgIndexInAlbum: a,
                    onClose: i,
                    onViewOnceInfoClick: o,
                    openReactionTray: l,
                    sendReactionButtonRef: s
                } = e;
                if (n.isViewOnce) {
                    return (0, Ce.jsx)(Fe, {
                        isMediaDownloadable: t,
                        msg: n,
                        onClose: i,
                        onViewOnceInfoClick: o
                    });
                } else if (a >= 0) {
                    return (0, Ce.jsx)(ye, {
                        isMediaDownloadable: t,
                        msg: n,
                        onClose: i,
                        openReactionTray: l,
                        sendReactionButtonRef: s
                    });
                } else {
                    return (0, Ce.jsx)(Se, {
                        isMediaDownloadable: t,
                        msg: n,
                        onClose: i,
                        openReactionTray: l,
                        sendReactionButtonRef: s
                    });
                }
            }

            function Ge (e) {
                let {
                    isMediaDownloadable: t,
                    isAlbumMedia: n,
                    msg: a,
                    onClose: i
                } = e;
                const o = [];
                const l = (0, y.getChat)(a);
                if ((0, L.canPrivateReply)(a) || (0, L.canPrivateReplyInRestrictedGrp)(a)) {
                    o.push((0, Ce.jsx)(Oe, {
                        msg: a
                    }, "private_reply"));
                }
                if (n) {
                    if ((0, D.getIsSentByMe)(a)) {
                        o.push((0, Ce.jsx)(Le, {
                            msg: a,
                            onClose: i
                        }, "dropdownMsgInfo"));
                    }
                    o.push((0, Ce.jsx)(ke, {
                        msg: a,
                        type: Me.Dropdown,
                        onClose: i
                    }, "dropdownGoToMsg"), (0, Ce.jsx)(Te, {
                        isMediaDownloadable: t,
                        msg: a,
                        type: Me.Dropdown
                    }, "dropdownDownload"));
                }
                const s = !l.isNewsletter && (a.isViewOnce || (0, O.canReportMsg)(a) && (0, N.messageLevelReportingEnabled)());
                if (l.isNewsletter && (0, O.canReportMsg)(a) && (0, G.isNewsletterReportingEnabled)()) {
                    o.push((0, Ce.jsx)(q.default, {
                        msg: a
                    }, "reportSpam"));
                } else if (s) {
                    o.push((0, Ce.jsx)(De, {
                        msg: a
                    }, "reportSpam"));
                }
                if ((0, O.canReportToAdmin)(a)) {
                    o.push((0, Ce.jsx)(X.default, {
                        msg: a
                    }, "report_to_admin"));
                }
                return (0, Ce.jsx)(I.MenuBarItem, {
                    icon: (0, Ce.jsx)(A.MenuIcon, {}),
                    title: P.default.t(430),
                    children: (0, Ce.jsx)(v.Dropdown, {
                        type: v.MenuType.DropdownMenu,
                        flipOnRTL: true,
                        dirX: v.DirX.LEFT,
                        children: o
                    })
                });
            }

            function Fe (e) {
                let {
                    isMediaDownloadable: t,
                    msg: n,
                    onClose: a,
                    onViewOnceInfoClick: i
                } = e;
                return (0, Ce.jsxs)(Ce.Fragment, {
                    children: [(0, Ce.jsx)(I.MenuBarItem, {
                        icon: (0, Ce.jsx)(ce.ViewOnceIcon, {
                            className: fe.default.voIcon
                        }),
                        title: pe.fbt._("View once info", null, {
                            hk: "47XkZ4"
                        }),
                        onClick: i
                    }), (0, Ce.jsx)(Ge, {
                        isMediaDownloadable: t,
                        isAlbumMedia: false,
                        msg: n,
                        onClose: a
                    })]
                });
            }
        },
        777361: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = undefined;
            var i = a(n(371125));
            var o = n(690495);
            var l = a(n(488922));
            var s = a(n(674465));
            var r = a(n(996513));
            var c = a(n(708126));
            var d = n(438543);
            var u = a(n(529727));
            var f = n(164832);
            var p = n(130756);
            var h = n(667294);
            var m = a(n(156720));
            var g = a(n(38085));
            var x = n(655241);
            var v = n(785893);
            const b = {
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
            const C = (e, t) => {
                const {
                    msg: n
                } = e;
                const a = (0, x.useModelValues)(e.mediaData, ["encFilehash", "directPath", "filehash", "mediaKey", "mediaKeyTimestamp", "mediaStage", "mimetype", "fullWidth", "fullHeight", "isFirstParty", "stickerPackId", "stickerPackName", "stickerPackPublisher"]);
                const C = (0, h.useRef)(null);
                const M = (0, g.default)(t, C);
                const j = e => {
                    var t;
                    if (!((t = C.current) === null || t === undefined)) {
                        t.onClick(e);
                    }
                };
                const _ = a.isFirstParty ? (0, v.jsx)(i.default, {
                    stickerPackId: a.stickerPackId,
                    onStickerPackView: e.onStickerPackView,
                    stickerPackViewDelay: e.stickerPackViewDelay,
                    sticker: new f.StickerModel({
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
                }) : (0, v.jsx)(d.StickerDetailsStickerPackInfo, {
                    name: a.stickerPackName,
                    publisher: a.stickerPackPublisher,
                    theme: d.Theme.MediaViewer,
                    sticker: new f.StickerModel({
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
                return (0, v.jsxs)(o.FlexColumn, {
                    align: "center",
                    justify: "center",
                    xstyle: b.container,
                    children: [(0, v.jsx)("div", {
                        className: (0, m.default)(b.container, b.stickerContainer),
                        "data-testid": "media-sticker",
                        children: (0, v.jsx)(c.default, {
                            ref: M,
                            width: a.fullWidth,
                            height: a.fullHeight,
                            onZoomIn: e.onImgZoomIn,
                            msg: n,
                            children: (0, v.jsx)(s.default, {
                                mediaData: a,
                                placeholderRenderer: () => (0, v.jsx)(u.default, {
                                    size: 376
                                }),
                                downloadMedia: () => n == null ? undefined : n.downloadMedia({
                                    downloadEvenIfExpensive: false,
                                    rmrReason: p.WEBC_RMR_REASON_CODE.MEDIA_VIEWER,
                                    isUserInitiated: false
                                }),
                                children: t => (0, v.jsx)(l.default, {
                                    className: (0, m.default)(r.default.content),
                                    onClick: j,
                                    src: t,
                                    onLoad: e.onLoad
                                })
                            })
                        })
                    }), _]
                });
            };
            var M = (0, h.forwardRef)(C);
            t.default = M;
        },
        177046: (e, t, n) => {
            "use strict";

            var a = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = undefined;
            var i = a(n(66985));
            var o = a(n(49677));
            var l = a(n(932325));
            var s = n(172259);
            var r = a(n(996513));
            var c = a(n(821384));
            var d = n(728);
            var u = n(31900);
            var f = n(277037);
            var p = n(541345);
            var h = n(244186);
            var m = n(962647);
            var g = a(n(439114));
            var x = n(130756);
            var v = n(113189);
            var b = n(667294);
            var C = a(n(156720));
            var M = n(655241);
            var j = n(785893);

            function _ (e, t) {
                var n;
                const {
                    autoPlay: a,
                    msg: _,
                    onLoad: y,
                    onClose: k,
                    onLoadedData: P,
                    startTime: w = 0
                } = e;
                const T = (0, M.useModelValues)(e.mediaData, ["mediaStage", "fullWidth", "fullHeight", "isGif", "isViewOnce", "preview", "renderableUrl", "streamable"]);
                const [E, I] = (0, b.useState)(false);
                const [A, N] = (0, b.useState)(true);
                const R = (0, b.useRef)();
                const O = (0, b.useMemo)(() => (T.mediaStage === s.MEDIA_DATA_STAGE.RESOLVED || T.streamable && T.isStreamable()) && (0, v.isNonZeroNumber)(T.fullWidth) && (0, v.isNonZeroNumber)(T.fullHeight) ? function (e) {
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
                    if (e.fullWidth >= u.MIN_WIDTH) {
                        return {
                            width: e.fullWidth,
                            height: e.fullHeight
                        };
                    }
                    return {
                        width: u.MIN_WIDTH,
                        height: e.fullHeight
                    };
                }(T) : {
                    width: 0,
                    height: 0
                }, [T]);
                (0, b.useEffect)(() => {
                    if (!T.isStreamable()) {
                        _.downloadMedia({
                            downloadEvenIfExpensive: true,
                            rmrReason: x.WEBC_RMR_REASON_CODE.MEDIA_VIEWER,
                            isUserInitiated: true
                        });
                        return () => {
                            if (_.mediaObject) {
                                _.cancelDownload();
                            }
                        };
                    }
                }, []);
                const D = e => {
                    I(e);
                };
                (0, b.useImperativeHandle)(t, () => ({
                    getContainerElement: () => R.current,
                    closingMedia () {
                        N(false);
                    }
                }));
                const L = T.isGif;
                let B = T.mediaStage === s.MEDIA_DATA_STAGE.RESOLVED || T.streamable && T.isStreamable();
                B = B || _.isForcingRMR();
                let G = null;
                const F = h.ReactionBubbleType.MEDIA_ITEM;
                if (_ && (0, m.shouldShowReactionBubble)(_, F)) {
                    G = (0, j.jsx)(p.ReactionBubbleContainer, {
                        msgIds: [_.id.toString()],
                        reactionBubbleType: F,
                        reactionBubbleVisible: A
                    });
                }
                if (B) {
                    const e = l.default.t(628);
                    let t;
                    let n;
                    if (!E && (_ == null ? undefined : _.interactiveAnnotations) && _.interactiveAnnotations.length > 0) {
                        t = (0, j.jsx)(i.default, {
                            annotations: _.interactiveAnnotations
                        });
                    }
                    n = L ? (0, j.jsxs)("div", {
                        className: (0, C.default)(r.default.content),
                        ref: R,
                        "data-testid": "media-gif",
                        children: [(0, j.jsx)(g.default, {
                            src: T.renderableUrl,
                            onClick: S,
                            autoPlay: true,
                            loop: true,
                            onLoadedData: P,
                            children: e
                        }), t]
                    }) : (0, j.jsx)("div", {
                        ref: R,
                        className: (0, C.default)(r.default.content),
                        onClick: S,
                        "data-testid": "media-video",
                        children: (0, j.jsx)(f.WrappedMsgVideoPlayer, {
                            msg: _,
                            mediaData: T,
                            startTime: w,
                            onClose: k,
                            onError: () => {},
                            onFullscreenToggle: D,
                            autoPlay: a,
                            type: d.PLAYER_TYPE.MEDIA_VIEWER,
                            overlays: t,
                            noPip: _.isViewOnce,
                            onLoadedData: P
                        })
                    });
                    return (0, j.jsxs)(c.default, {
                        type: "scaleDown",
                        position: "relative",
                        objectPosition: "relative",
                        size: O,
                        onObjectLoad: y,
                        children: [n, G]
                    });
                }
                return (0, j.jsxs)(c.default, {
                    type: "scaleDown",
                    position: "relative",
                    objectPosition: "relative",
                    size: {
                        width: T.fullWidth,
                        height: T.fullHeight
                    },
                    children: [(0, j.jsx)(o.default, {
                        altText: (n = _.caption) !== null && n !== undefined ? n : "",
                        mediaData: T
                    }), G]
                });
            }
            var y = (0, b.forwardRef)(_);

            function S (e) {
                e.stopPropagation();
            }
            t.default = y;
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
                    isAnimatingIn: a,
                    onImgZoomIn: o,
                    onExitAnimation: T,
                    onBack: Y
                } = e;
                const [q, X, Z, J, Q, $, ee, te, ne] = (0, F.useMsgValues)(e.msg.id, [S.getId, S.getStar, d.getIsUnsentMedia, S.getIsViewOnce, S.getIsStickerMsg, S.getCaption, S.getInteractiveAnnotations, S.getType, S.getMessageSecret]);
                const ae = (0, d.getChat)(t);
                const ie = (0, G.useModelValues)(e.mediaData, ["mediaStage", "type", "isGif"]);
                const oe = (0, H.default)(a);
                const le = (0, B.useRef)(null);
                const se = (0, B.useRef)(null);
                const re = (0, B.useRef)(null);
                const ce = (0, B.useRef)(null);
                const de = (0, B.useRef)();
                const ue = (0, B.useRef)(false);
                const fe = (0, B.useRef)(false);
                const pe = (0, B.useRef)(false);
                const [he, me] = (0, V.default)(w.NUX.EPHEMERAL_VIEW_ONCE_RECEIVER);
                const ge = J && he;
                const [xe] = (0, B.useState)(() => ie.mediaStage === M.MEDIA_DATA_STAGE.RESOLVED && e.isAnimatingIn && e.getZoomNode ? e.getZoomNode(q) : null);
                const [ve, be] = (0, B.useState)(false);
                const [Ce, Me] = (0, B.useState)(false);
                const [je, _e] = (0, B.useState)(!e.isAnimatingIn);
                const [ye, Se] = (0, B.useState)(false);
                const [ke, Pe] = (0, B.useState)(false);
                const we = () => {
                    const e = (0, W.jsx)(R.default, {
                        isPhoto: ie.type === g.default.TYPE.IMAGE,
                        onOkClick: () => {
                            me();
                            y.ModalManager.close();
                        }
                    });
                    y.ModalManager.open(e);
                };
                const Te = (0, U.default)((e, t) => {
                    if (Ce) {
                        return;
                    }
                    const n = le.current;
                    if (!n) {
                        return;
                    }
                    const a = n.getInsideContainer();
                    if (!(a && a instanceof HTMLElement)) {
                        return;
                    }
                    const i = n.getOutsideContainer();
                    if (!(i && i instanceof HTMLElement)) {
                        return;
                    }
                    const {
                        translateX: o,
                        translateY: l
                    } = n.getTranslatePosition(i, e, t);
                    (0, N.default)(a, "stop");
                    (0, N.default)(a, {
                        translateX: o,
                        translateY: l,
                        scale: j.ZOOM_IN_FACTOR
                    }, {
                        duration: 0
                    });
                });
                (0, B.useEffect)(() => {
                    __LOG__(2)`MediaViewerModal: Opened`;
                    if (ge) {
                        we();
                    }
                    r.default.focus(ce.current);
                    return () => {
                        __LOG__(2)`MediaViewerModal: Closed`;
                        Te.cancel();
                    };
                }, []);
                const Ee = () => {
                    if (J && (0, h.canMarkPlayed)(t)) {
                        (0, h.markPlayed)(t);
                    }
                };
                const Ie = e => {
                    Ee();
                    if (n) {
                        n();
                    }
                    const t = xe;
                    const i = e.target;
                    if (t && i && a && i instanceof HTMLElement) {
                        if (!pe.current) {
                            pe.current = true;
                            ((e, t) => {
                                var n;
                                const a = t.getBoundingClientRect();
                                const i = e.getBoundingClientRect();
                                let o = i.top - a.top;
                                let l = i.left - a.left;
                                const s = e.clientWidth / t.clientWidth;
                                o -= (t.clientHeight - e.clientHeight) / 2;
                                l -= (t.clientWidth - e.clientWidth) / 2;
                                (0, N.default)(t, {
                                    opacity: [1, 0],
                                    translateX: [0, l],
                                    translateY: [0, o],
                                    scale: [1, s]
                                }, {
                                    duration: j.ANIMATION_DURATION,
                                    easing: [0.1, 0.82, 0.25, 1]
                                });
                                const r = (n = re.current) === null || n === undefined ? undefined : n.getElement();
                                if (r) {
                                    (0, N.default)(r, {
                                        opacity: [1, 0]
                                    }, {
                                        duration: j.ANIMATION_DURATION
                                    });
                                }
                            })(t, i);
                        }
                    }
                };
                const Ae = () => {
                    var t;
                    if (ue.current) {
                        return;
                    }
                    ue.current = true;
                    if ((0, i.isFunction)(T)) {
                        T();
                    }
                    const n = e.getZoomNode && e.getZoomNode(q);
                    if (!n) {
                        return Y();
                    }
                    let a;
                    var o;
                    if ([g.default.TYPE.IMAGE, g.default.TYPE.STICKER].includes(ie.type) && le.current) {
                        a = le.current.getInsideContainer();
                        if (!((o = le.current) === null || o === undefined)) {
                            o.closingMediaZoomable();
                        }
                    } else if (ie.isGif && se.current) {
                        var l;
                        a = se.current.getContainerElement();
                        if (!((l = se.current) === null || l === undefined)) {
                            l.closingMedia();
                        }
                    }
                    if (!a) {
                        return Y();
                    }
                    const s = a;
                    const r = a.getBoundingClientRect();
                    const c = n.getBoundingClientRect();
                    let d = c.top - r.top;
                    let u = c.left - r.left;
                    const f = n.clientWidth / s.clientWidth;
                    d -= (s.clientHeight - n.clientHeight) / 2;
                    u -= (s.clientWidth - n.clientWidth) / 2;
                    (0, N.default)(a, {
                        translateX: [u, 0],
                        translateY: [d, 0],
                        scale: [f, 1]
                    }, {
                        duration: j.CLOSE_ANIMATION_DURATION,
                        easing: [0.1, 0.82, 0.25, 1]
                    }).then(() => {
                        Y();
                    });
                    const p = (t = re.current) === null || t === undefined ? undefined : t.getElement();
                    if (p) {
                        (0, N.default)(p, {
                            opacity: [0, 1]
                        }, {
                            duration: j.CLOSE_ANIMATION_DURATION,
                            easing: [0.1, 0.82, 0.25, 1]
                        });
                    }
                };
                const Ne = e => {
                    const t = le.current;
                    if (e && t) {
                        fe.current = t.getHeightOverflow() > 0 || t.getWidthOverflow() > 0;
                    }
                    be(e);
                    o(e);
                };
                const Re = e => {
                    var t;
                    const n = (t = le.current) === null || t === undefined ? undefined : t.getInsideContainer();
                    const i = Boolean(n == null ? undefined : n.contains(document.activeElement));
                    if (a || !i) {
                        return;
                    }
                    Te.cancel();
                    const o = le.current;
                    if (o != null) {
                        o.onKeyboardZoom(e);
                    }
                };
                const Oe = () => {
                    Pe(true);
                };
                const De = () => {
                    Me(true);
                };
                const Le = () => {
                    Me(false);
                };
                const Be = e => {
                    e.stopPropagation();
                    Se(!ye);
                };
                let Ge;
                let Fe;
                (0, B.useEffect)(() => {
                    if (!(a || je || !oe)) {
                        _e(true);
                    }
                }, [a, je, oe]);
                switch (ie.type) {
                    case g.default.TYPE.IMAGE:
                        Ge = (0, W.jsx)(x.default, {
                            msg: t,
                            mediaData: ie,
                            onLoad: Ie,
                            onImgZoomIn: Ne,
                            onAnnotationTooltipDisplay: De,
                            onAnnotationTooltipDismiss: Le,
                            preventDownload: J,
                            ref: le
                        }, q.toString());
                        break;
                    case g.default.TYPE.STICKER:
                        Ge = (0, W.jsx)(C.default, {
                            msg: t,
                            mediaData: ie,
                            onLoad: Ie,
                            onImgZoomIn: Ne,
                            onStickerPackView: Ae,
                            stickerPackViewDelay: j.CLOSE_ANIMATION_DURATION,
                            ref: le
                        }, q.toString());
                        break;
                    case g.default.TYPE.VIDEO:
                        Ge = (0, W.jsx)(_.default, {
                            autoPlay: !ge,
                            msg: t,
                            mediaData: ie,
                            onLoadedData: ie.isGif ? Ie : Ee,
                            startTime: e.startTime,
                            onClose: Ae,
                            ref: se
                        }, q.toString());
                        break;
                    case g.default.TYPE.AUDIO:
                        Ge = (0, W.jsx)(m.default, {
                            mediaData: ie,
                            msg: t
                        }, q.toString());
                        break;
                    default:
                        __LOG__(4, undefined, new Error(), true)`type: ${ie.type}`;
                        SEND_LOGS("MediaViewerModal: unexpected media type");
                }
                const Ve = e.msgIndexInAlbum >= 0 && e.albumSize >= 0;
                if ($ || Ve) {
                    let n;
                    if (Ve) {
                        n = p.default.t(505, {
                            number: e.msgIndexInAlbum + 1,
                            totalNumber: e.albumSize
                        });
                    }
                    const a = c.Conversation({
                        mentions: t.mentionMap(),
                        groupMentions: t.groupMentionMap(),
                        phoneNumbers: (0, P.getPhoneNumbersFromMsg)(t),
                        links: (0, k.getLinksFromMsg)(t),
                        trusted: true,
                        fromMe: q.fromMe
                    });
                    const i = ie.type === g.default.TYPE.IMAGE && !J;
                    const o = !je && (ie.isGif || i);
                    Fe = (0, W.jsxs)(W.Fragment, {
                        children: [(0, W.jsxs)("p", {
                            className: (0, l.cx)({
                                [O.default.captionWrapperExpandable]: de.current === true,
                                [O.default.captionWrapper]: true
                            }),
                            onClick: de.current ? Be : undefined,
                            title: de.current ? D.fbt._("Read more", null, {
                                hk: "2DvSvh"
                            }) : undefined,
                            "aria-hidden": ye || undefined,
                            children: [(0, W.jsx)(s.EmojiText, {
                                className: (0, l.cx)({
                                    [O.default.captionHidden]: o,
                                    [O.default.expanded]: ye,
                                    [O.default.mediaCaption]: true
                                }),
                                formatters: a,
                                ref: e => {
                                    re.current = e;
                                },
                                text: $ || n
                            }), de.current && (0, W.jsx)(A.default, {
                                xstyle: [z.captionReadMoreBtn, ye && z.captionReadMoreBtnExpanded, ve && z.captionReadMoreBtnZoomed],
                                onClick: Be,
                                children: (0, W.jsx)(E.TextSpan, {
                                    children: D.fbt._("Read more", null, {
                                        hk: "2DvSvh"
                                    })
                                })
                            })]
                        }), ye && (0, W.jsx)("p", {
                            className: (0, L.default)(O.default.captionWrapper, O.default.captionWrapperExpandable, O.default.captionExpanded),
                            onClick: Be,
                            children: (0, W.jsx)(s.EmojiText, {
                                className: (0, L.default)(O.default.mediaCaption, O.default.mediaCaptionExpanded),
                                formatters: a,
                                text: $
                            })
                        })]
                    });
                }
                const He = (0, l.cx)({
                    [O.default.mediaWithCaption]: !!Fe,
                    [O.default.media]: true
                });
                const Ue = (0, l.cx)({
                    [O.default.noThumbnails]: J || Q,
                    [O.default.mediaViewerAnimate]: e.isAnimatingIn,
                    [O.default.cursorZoomOut]: ve,
                    overlay: true,
                    [O.default.mediaViewer]: true
                });
                const We = ve && fe.current ? e => {
                    Te(e.pageX, e.pageY);
                } : null;
                const Ye = ve ? e => {
                    Te.cancel();
                    const t = le.current;
                    if (t && ve) {
                        t.onClick(e);
                    }
                } : null;
                let ze = ve ? null : Ae;
                if (ze != null && J) {
                    ze = Oe;
                }
                return (0, W.jsx)(I.UIE, {
                    displayName: "MediaViewer",
                    escapable: true,
                    requestDismiss: Ae,
                    children: (0, W.jsx)(f.HotKeys, {
                        handlers: {
                            space: Re,
                            enter: Re
                        },
                        ref: ce,
                        children: (0, W.jsxs)("div", {
                            className: Ue,
                            "data-animate-media-viewer": true,
                            "data-testid": "media-viewer-modal",
                            onClick: Ye,
                            onMouseMove: We,
                            children: [(0, W.jsx)(v.default, {
                                isHighlightClose: ke,
                                msg: t,
                                mediaData: ie,
                                onClose: Ae,
                                onHightlightCloseEnd: () => {
                                    Pe(false);
                                },
                                onViewOnceInfoClick: () => {
                                    we();
                                },
                                msgIndexInAlbum: e.msgIndexInAlbum
                            }), (0, W.jsx)("div", {
                                className: (0, l.cx)({
                                    [O.default.sticker]: Q,
                                    [O.default.mediaContent]: true
                                }),
                                onClick: ze,
                                children: (0, W.jsx)(K, {
                                    hasNavigationButtons: !J && !Q,
                                    onNext: e.onNext,
                                    onPrev: e.onPrev,
                                    imgZoomed: ve,
                                    children: (0, W.jsxs)("div", {
                                        className: He,
                                        children: [(0, W.jsx)(b.default, {
                                            msg: t,
                                            mediaData: ie
                                        }), Ge, (0, W.jsx)(u.default.Provider, {
                                            value: ae.groupMetadata,
                                            children: Fe
                                        })]
                                    })
                                })
                            })]
                        })
                    })
                });
            };
            var i = n(724976);
            var o = n(305989);
            var l = n(752253);
            var s = n(305521);
            var r = a(n(335540));
            var c = function (e, t) {
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
                var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e) {
                    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                        var l = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                        if (l && (l.get || l.set)) {
                            Object.defineProperty(a, o, l);
                        } else {
                            a[o] = e[o];
                        }
                    }
                }
                a.default = e;
                if (n) {
                    n.set(e, a);
                }
                return a;
            }(n(675886));
            var d = n(163755);
            var u = a(n(462824));
            var f = n(81644);
            var p = a(n(932325));
            var h = n(711735);
            var m = a(n(883537));
            var g = a(n(116253));
            var x = a(n(142958));
            var v = a(n(548290));
            var b = a(n(36886));
            var C = a(n(777361));
            var M = n(172259);
            var j = n(69315);
            var _ = a(n(177046));
            var y = n(114850);
            var S = n(787742);
            var k = n(44118);
            var P = n(527530);
            var w = n(95589);
            var T = n(435595);
            var E = n(180519);
            var I = n(392632);
            var A = a(n(625903));
            var N = a(n(330619));
            var R = a(n(25683));
            var O = a(n(192639));
            var D = n(548360);
            var L = a(n(261294));
            var B = n(667294);
            a(n(156720));
            var G = n(655241);
            var F = n(871210);
            var V = a(n(157558));
            var H = a(n(49710));
            var U = a(n(286481));
            var W = n(785893);

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
            const z = {
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

            function q (e) {
                if (!(e == null)) {
                    e.stopPropagation();
                }
            }

            function K (e) {
                var t;
                var n;
                var a;
                var i;
                return (0, W.jsxs)(W.Fragment, {
                    children: [e.hasNavigationButtons && (0, W.jsx)("div", {
                        className: (0, L.default)(O.default.btnMediaPrev),
                        children: (0, W.jsx)("div", {
                            onClick: e.onPrev ? null : q,
                            children: (0, W.jsx)(o.ChevronButton, {
                                type: o.ButtonType.Prev,
                                onClick: (t = e.onPrev) !== null && t !== undefined ? t : undefined,
                                onKeyDown: (n = e.onPrev) !== null && n !== undefined ? n : undefined,
                                disabled: !e.onPrev || e.imgZoomed,
                                theme: T.RoundTheme.Default
                            })
                        })
                    }), e.children, e.hasNavigationButtons && (0, W.jsx)("div", {
                        className: (0, L.default)(O.default.btnMediaNext),
                        children: (0, W.jsx)("div", {
                            onClick: e.onPrev ? null : q,
                            children: (0, W.jsx)(o.ChevronButton, {
                                type: o.ButtonType.Next,
                                onClick: (a = e.onNext) !== null && a !== undefined ? a : undefined,
                                onKeyDown: (i = e.onNext) !== null && i !== undefined ? i : undefined,
                                disabled: !e.onNext || e.imgZoomed,
                                theme: T.RoundTheme.Default
                            })
                        })
                    })]
                });
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
                const n = (0, o.getChat)(t);
                return (0, d.jsx)(i.DropdownItem, {
                    action: () => {
                        l.ModalManager.open((0, d.jsx)(s.default, {
                            chat: n,
                            msg: t,
                            spamFlow: r.SpamFlow.MediaViewer
                        }));
                    },
                    children: c.fbt._("", null, {
                        hk: "2TFyS0"
                    })
                });
            };
            var i = n(675085);
            var o = n(163755);
            var l = n(114850);
            var s = a(n(207511));
            var r = n(453603);
            var c = n(548360);
            var d = n(785893);
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
                return (0, u.jsx)(i.DropdownItem, {
                    action: () => {
                        (0, s.logRTAReportingEvent)({
                            reportToAdminInteraction: c.REPORT_TO_ADMIN_INTERACTION.CLICK_SEND_FOR_ADMIN_REVIEW,
                            groupId: (0, o.getChat)(t).id.user
                        });
                        l.ModalManager.open((0, u.jsx)(r.default, {
                            msg: t
                        }));
                    },
                    children: d.fbt._("Send for admin review", null, {
                        hk: "4ouSa6"
                    })
                });
            };
            var i = n(675085);
            var o = n(163755);
            var l = n(114850);
            var s = n(554800);
            var r = a(n(286391));
            var c = n(130756);
            var d = n(548360);
            var u = n(785893);
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
                const o = (0, u.useRef)({});
                const l = (0, u.useRef)(null);
                const s = (0, u.useRef)(null);
                const r = (0, f.default)(a.id);
                const m = () => {
                    var e;
                    if (!((e = l.current) === null || e === undefined)) {
                        e.focusOnActive();
                    }
                };
                (0, u.useEffect)(() => {
                    var e;
                    if (((e = s.current) === null || e === undefined ? undefined : e.contains(document.activeElement)) && !a.id.equals(r)) {
                        m();
                    }
                }, [a, r]);
                const x = () => {
                    const e = new Map();
                    t.forEach(t => {
                        const n = t.id.toString();
                        e.set(n, (e => {
                            const t = o.current[e];
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
                const [v, b] = (0, u.useState)(x);
                const C = (0, p.default)(() => {
                    const e = x();
                    if (!(0, i.default)(v, e)) {
                        b(e);
                    }
                }, 100);
                return (0, h.jsx)("div", {
                    className: c.default.thumbsContainer,
                    ref: e.setRefThumbsContainer,
                    children: (0, h.jsx)("div", {
                        ref: s,
                        className: c.default.scrollContainer,
                        dir: "ltr",
                        children: (0, h.jsx)("div", {
                            role: "list",
                            "aria-label": d.fbt._("Media List", null, {
                                hk: "3dsEfq"
                            }),
                            tabIndex: 1,
                            onFocus: () => {
                                m();
                            },
                            onScroll: e => {
                                C();
                                n(e);
                            },
                            className: c.default.viewerThumbs,
                            ref: e.setRefThumbs,
                            children: (0, h.jsx)(g, {
                                ref: l,
                                mediaMsgs: t,
                                highlightedMsgIds: e.highlightedMsgIds,
                                activeMsg: e.activeMsg,
                                onSetActiveThumb: e.onSetActiveThumb,
                                onSelectThumb: e.onSelectThumb,
                                msgIdToPreferPreview: v
                            })
                        })
                    })
                });
            };
            var i = a(n(621733));
            var o = a(n(335540));
            var l = n(125922);
            var s = n(787742);
            var r = n(956113);
            var c = a(n(572028));
            var d = n(548360);
            var u = n(667294);
            var f = a(n(49710));
            var p = a(n(286481));
            var h = n(785893);

            function m (e, t) {
                let {
                    mediaMsgs: n,
                    highlightedMsgIds: a,
                    activeMsg: i,
                    onSetActiveThumb: d,
                    onSelectThumb: f,
                    msgIdToPreferPreview: p
                } = e;
                const m = (0, u.useRef)({});
                const g = () => {
                    const e = i.id.toString();
                    const t = m.current[e];
                    if (t) {
                        o.default.focus(t);
                    }
                };
                (0, u.useImperativeHandle)(t, () => ({
                    focusOnActive: g
                }));
                const x = a && a.size > 0 && a.has(i.id.toString());
                const v = [];
                n.forEach(e => {
                    if (e.mediaData == null) {
                        const t = i;
                        return void __LOG__(3, true)`MediaViewerFlow: attempted to render a msg without mediaData: ${JSON.stringify({
            type: e.type,
            isMedia: (0, s.getIsMedia)(e),
            startMsgType: t.type,
            startMsgIsMedia: (0, s.getIsMedia)(t)
          })}`;
                    }
                    const t = x && a && !a.has(e.id.toString()) ? "viewerFlowTransparent" : "viewerFlow";
                    v.push((0, h.jsx)(l.MediaThumb, {
                        theme: t,
                        active: e === i,
                        msg: e,
                        containerRef: t => {
                            ((e, t) => {
                                m.current[t] = e;
                            })(t, e.id.toString());
                            if (e === i) {
                                d(t);
                            }
                        },
                        onClick: () => {
                            f(e);
                        },
                        preferPreview: !!p.get(e.id.toString()),
                        showTooltip: (0, s.getIsGroupMsg)(e)
                    }, `media-${e.id.id}`));
                });
                v.push((0, h.jsx)("div", {
                    className: c.default.mediaThumb,
                    children: n.queryMediaAfter ? (0, h.jsx)(r.Spinner, {
                        stroke: 6,
                        size: 24
                    }) : null
                }, "spinner-right"));
                v.unshift((0, h.jsx)("div", {
                    className: c.default.mediaThumb,
                    children: n.queryMediaBefore ? (0, h.jsx)(r.Spinner, {
                        stroke: 6,
                        size: 24
                    }) : null
                }, "spinner-left"));
                v.push((0, h.jsx)("div", {
                    className: c.default.thumbPadding
                }, "padding-right"));
                v.unshift((0, h.jsx)("div", {
                    className: c.default.thumbPadding
                }, "padding-left"));
                return (0, h.jsx)(h.Fragment, {
                    children: v
                });
            }
            const g = (0, u.forwardRef)(m);
            g.displayName = "MediaThumbs";
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
                return (0, p.jsx)(i.ConfirmPopup, {
                    onOK: t,
                    cancelText: c.default.t(393),
                    onCancel: () => {
                        (0, o.openExternalLink)((0, l.getViewOnceFaqUrl)());
                    },
                    children: (0, p.jsxs)(s.FlexColumn, {
                        children: [(0, p.jsx)(r.default, {
                            xstyle: h.graphic,
                            align: "center",
                            children: (0, p.jsx)(u.ViewOnceSenderNuxIcon, {
                                width: 195,
                                height: 177
                            })
                        }), (0, p.jsx)(d.WDSTextLarge, {
                            children: e.isPhoto ? f.fbt._("This photo is set to view once", null, {
                                hk: "2H7aHc"
                            }) : f.fbt._("This video is set to view once", null, {
                                hk: "1w8WFf"
                            })
                        }), (0, p.jsx)(d.WDSTextMuted, {
                            children: e.isPhoto ? f.fbt._("For more privacy, this photo will disappear after you close it.", null, {
                                hk: "1XZPqi"
                            }) : f.fbt._("For more privacy, this video will disappear after you close it.", null, {
                                hk: "3YgUHE"
                            })
                        })]
                    })
                });
            };
            var i = n(103440);
            var o = n(753233);
            var l = n(258105);
            var s = n(690495);
            var r = a(n(469733));
            var c = a(n(932325));
            var d = n(180519);
            var u = n(875602);
            var f = n(548360);
            a(n(156720));
            var p = n(785893);
            const h = {
                graphic: {
                    marginBottom: "t4zgqcuo"
                }
            };
        },
        986458: (e, t, n) => {
            "use strict";

            n.r(t);
            n.d(t, {
                default: () => a
            });
            const a = {
                footerNote: "_3Ii0U",
                getTheAppLink: "_2uO1h"
            };
        },
        750478: (e, t, n) => {
            "use strict";

            n.r(t);
            n.d(t, {
                default: () => a
            });
            const a = {
                wrapper: "_1HfA2",
                code: "_25NCw",
                codeDarkMode: "_3p_Xc",
                codeLogo: "_3cy64"
            };
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
        363467: (e, t, n) => {
            "use strict";

            n.r(t);
            n.d(t, {
                default: () => a
            });
            const a = {
                businessHoursRow: "_3sfEB",
                firstRow: "_2sBkJ",
                businessHoursDay: "_2pvvT",
                businessHoursHours: "_3kLLJ",
                dayIsOpen: "_29-HA",
                businessHoursChevron: "_2XvVc",
                flipSvg: "_3fNaY"
            };
        },
        850858: (e, t, n) => {
            "use strict";

            n.r(t);
            n.d(t, {
                default: () => a
            });
            const a = {
                section: "_1we7x",
                description: "_2JSHQ",
                map: "mSpzh"
            };
        },
        161160: (e, t, n) => {
            "use strict";

            n.r(t);
            n.d(t, {
                default: () => a
            });
            const a = {
                contactBusinessInfo: "vXoia",
                contactBusinessInfoSpinner: "_3sbaB",
                dataRow: "_2hU95",
                businessHoursRow: "_229jY",
                businessHoursDay: "_2Ue47",
                businessHoursHours: "_150zM",
                businessHoursChevron: "_1Biw6",
                flipSvg: "_2McRc",
                dataRowIcon: "XiT7h",
                dataRowText: "_1jydV",
                businessMap: "_2WOiM",
                address: "_2LXal",
                link: "_3mxhI",
                infoIcon: "_3TfXM"
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
//# sourceMappingURL=https://web.whatsapp.com/lazy_loaded_high_priority_components.6ffc901fdbafb47221da.js.map