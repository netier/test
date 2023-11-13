/*! Copyright (c) 2023 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [9488], {
        282627: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.verifyPostcode = function (e, t) {
                return l.default.verifyAndSavePostcode(e, t);
            };
            var l = n(o(418950));
        },
        394480: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.uploadBizCoverPhoto = function () {
                return d.apply(this, arguments);
            };
            var l = n(o(348926));
            var i = o(698210);
            var a = o(791357);
            var r = o(708761);
            var s = n(o(92577));
            var c = o(130756);

            function d () {
                return (d = (0, l.default)(function* (e, t, o) {
                    const n = yield(0, i.blobToArrayBuffer)(e);
                    const l = yield s.default.uploadCoverPhoto({
                        file: n,
                        hash: t,
                        signal: o,
                        type: r.MEDIA_TYPES.BIZ_COVER_PHOTO,
                        uploadOrigin: c.UPLOAD_ORIGIN_TYPE.UNKNOWN,
                        isViewOnce: false
                    });
                    const {
                        fbid: d,
                        ts: u,
                        metaHmac: f
                    } = l;
                    if (d != null && u != null && f != null) {
                        return {
                            id: d,
                            ts: u,
                            metaHmac: f
                        };
                    }
                    throw new a.HttpInvalidResponseError("mmsUpload: missing fields in upload response");
                })).apply(this, arguments);
            }
        },
        22323: (e, t) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.createCatalogLink = function (e) {
                return `https://wa.me/c/${e}`;
            };
            t.createProductLink = function (e, t) {
                return `https://wa.me/p/${t}/${e}`;
            };
        },
        531737: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.getGroupCountMetricsFromChatWid = function (e) {
                if (e != null && e.isGroup()) {
                    const t = function (e) {
                        if (e.isGroup()) {
                            return (0, l.default)(o(667845)).get(e);
                        }
                        return null;
                    }(e);
                    if (t != null) {
                        return (0, i.getGroupCountMetricsFromGroupMetadata)(t);
                    }
                }
            };
            var l = n(o(97359));
            var i = o(869513);
        },
        462116: (e, t, o) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.EditBusinessProfileWamEvent = undefined;
            var n = o(901032);
            var l = o(130756);
            const {
                BOOLEAN: i,
                STRING: a
            } = n.TYPES;
            const r = (0, n.defineEvents)({
                EditBusinessProfile: [1466, {
                        businessProfileEntryPoint: [10, l.BUSINESS_PROFILE_ENTRY_POINT],
                        editBusinessProfileSessionId: [2, a],
                        editProfileAction: [1, l.EDIT_PROFILE_ACTION],
                        editProfileActionField: [9, l.BUSINESS_PROFILE_FIELD],
                        hasAddress: [5, i],
                        hasCategory: [4, i],
                        hasDescription: [3, i],
                        hasEmail: [7, i],
                        hasHours: [6, i],
                        hasWebsite: [8, i]
                    },
                    [1, 1, 1], "regular"
                ]
            });
            t.EditBusinessProfileWamEvent = r;
        },
        875302: (e, t, o) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ViewBusinessProfileWamEvent = undefined;
            var n = o(901032);
            var l = o(130756);
            const {
                BOOLEAN: i,
                INTEGER: a,
                STRING: r
            } = n.TYPES;
            const s = (0, n.defineEvents)({
                ViewBusinessProfile: [1522, {
                        bizFbSize: [9, l.TRUST_SIGNAL_BUCKETS],
                        bizIgSize: [10, l.TRUST_SIGNAL_BUCKETS],
                        businessProfileJid: [3, r],
                        catalogSessionId: [6, r],
                        hasCoverPhoto: [12, i],
                        isProfileLinked: [11, i],
                        isSelfView: [7, i],
                        linkedAccount: [5, l.BUSINESS_TOOLS_LINKED_ACCOUNT_TYPE],
                        profileEntryPoint: [8, l.PROFILE_ENTRY_POINT],
                        scrollDepth: [4, a],
                        viewBusinessProfileAction: [1, l.VIEW_BUSINESS_PROFILE_ACTION],
                        websiteSource: [2, l.WEBSITE_SOURCE_TYPE]
                    },
                    [1, 1, 1], "regular"
                ]
            });
            t.ViewBusinessProfileWamEvent = s;
        },
        438543: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.StickerDetailsStickerPackInfo = function (e) {
                const {
                    name: t,
                    publisher: o,
                    theme: n,
                    sticker: h
                } = e;
                let g;
                if ((0, s.isFavoriteStickersEnabled)() && h != null) {
                    g = r.default.get(h.filehash) ? (0, u.jsx)(l.default, {
                        onClick: () => (0, a.removeStickerFromFavorites)(h),
                        type: "secondary",
                        children: d.fbt._("Remove From Favorites", null, {
                            hk: "3YoUkP"
                        })
                    }) : (0, u.jsx)(l.default, {
                        onClick: () => (0, a.addStickerToFavorites)(h),
                        type: "secondary",
                        children: d.fbt._("Add to Favorites", null, {
                            hk: "3x4EBo"
                        })
                    });
                }
                return (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsxs)(c.TextDiv, {
                        theme: "plain",
                        xstyle: [f.container, n === p.StickerStore && f.stickerStore, n === p.MediaViewer && f.mediaViewer],
                        children: [t && (0, u.jsx)(i.EmojiText, {
                            xstyle: f.name,
                            text: t
                        }), t && o && (0, u.jsx)(i.EmojiText, {
                            text: " • "
                        }), o && (0, u.jsx)(i.EmojiText, {
                            text: o
                        })]
                    }), g]
                });
            };
            t.Theme = undefined;
            var l = n(o(692629));
            var i = o(305521);
            var a = o(225446);
            var r = n(o(788788));
            var s = o(97858);
            var c = o(180519);
            var d = o(548360);
            n(o(156720));
            var u = o(785893);
            const f = {
                container: {
                    color: "hp667wtd",
                    fontSize: "f8jlpxt4",
                    lineHeight: "jgi8eev7",
                    textAlign: "qfejxiq4"
                },
                stickerStore: {
                    marginBottom: "e2xccmyv"
                },
                mediaViewer: {
                    marginBottom: "r2u2pyhj"
                },
                name: {
                    fontSize: "enbbiyaj",
                    lineHeight: "l85iiqla",
                    color: "tl2vja3b"
                }
            };
            const p = o(76672).Mirrored(["StickerStore", "MediaViewer"]);
            t.Theme = p;
        },
        192081: (e, t, o) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.deleteCoverPhoto = function e (t) {
                let o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, l.genId)();
                const a = (0, r.deleteCoverPhoto)(t);
                const u = new l.ActionType(c.fbt._("Removing cover photo", null, {
                    hk: "1KJSi4"
                }));
                const f = c.fbt._("Cover photo removal failed", null, {
                    hk: "lbogl"
                });
                const p = a.catch(() => {
                    __LOG__(3)`actions:deleteCoverPhoto dropped`;
                    throw new l.ActionType(f);
                }).catch((0, n.filteredCatch)(i.ServerStatusCodeError, n => {
                    if (n.status >= 400) {
                        return new l.ActionType(f, {
                            actionText: c.fbt._("Try again", null, {
                                hk: "BVffp"
                            }),
                            actionHandler: () => e(t, o)
                        });
                    }
                })).then(() => new l.ActionType(c.fbt._("Cover photo removed", null, {
                    hk: "2jTL3n"
                })));
                s.ToastManager.open((0, d.jsx)(l.ActionToast, {
                    id: o,
                    initialAction: u,
                    pendingAction: p
                }));
                return a.then(() => {});
            };
            t.setCoverPhoto = function e (t, o, u) {
                let f = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : (0, l.genId)();
                const p = new l.ActionType(c.fbt._("Setting cover photo", null, {
                    hk: "1W6Cm8"
                }));
                const h = c.fbt._("Cover photo set failed", null, {
                    hk: "4jlUAI"
                });
                const g = (0, r.sendCoverPhoto)(t, o, u).catch(() => {
                    __LOG__(3)`action:setCoverPhoto dropped`;
                    throw new l.ActionType(h);
                }).catch((0, n.filteredCatch)(i.ServerStatusCodeError, n => {
                    __LOG__(3)`action:setCoverPhoto server error`;
                    if (n.status >= 400) {
                        return new l.ActionType(h, {
                            actionText: c.fbt._("Try again", null, {
                                hk: "BVffp"
                            }),
                            actionHandler: () => e(t, o, u, f)
                        });
                    }
                })).then(() => {
                    let e;
                    e = (0, a.coverPhotoPrivacyMessagingEnabled)() ? c.fbt._("Your cover photo is now public", null, {
                        hk: "zDyK5"
                    }) : c.fbt._("Cover photo set", null, {
                        hk: "zswp6"
                    });
                    return new l.ActionType(e);
                });
                s.ToastManager.open((0, d.jsx)(l.ActionToast, {
                    id: f,
                    initialAction: p,
                    pendingAction: g
                }));
                return g.then(() => {});
            };
            var n = o(122583);
            var l = o(328620);
            var i = o(984330);
            var a = o(72696);
            var r = o(761849);
            var s = o(390737);
            var c = o(548360);
            var d = o(785893);
        },
        946477: (e, t, o) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.verifyPostcode = undefined;
            var n = o(282627);
            t.verifyPostcode = (e, t) => (0, n.verifyPostcode)(e, t);
        },
        123490: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function () {
                return p.apply(this, arguments);
            };
            var l = n(o(348926));
            var i = o(122583);
            var a = o(328620);
            var r = o(984330);
            var s = o(351053);
            var c = o(650348);
            var d = o(390737);
            var u = o(548360);
            var f = o(785893);

            function p () {
                return (p = (0, l.default)(function* (e, t, o) {
                    const n = (0, c.sendUnlinkSubgroups)({
                        parentGroupId: e,
                        subgroupIds: t,
                        removeOrphanMembers: o
                    });
                    const p = (0, l.default)(function* () {
                        try {
                            const o = yield n;
                            if (o.failedGroups.length > 0) {
                                const t = o.failedGroups[0];
                                if (t.error === 530) {
                                    var e;
                                    const o = (e = s.ChatCollection.get(t.jid)) === null || e === undefined ? undefined : e.formattedTitle;
                                    return new a.ActionType(o != null ? u.fbt._("\"{group-name}\" was successfully removed, but not all of its participants were removed from the community.", [u.fbt._param("group-name", o)], {
                                        hk: "3IpDes"
                                    }) : u.fbt._("The group was successfully removed, but not all of its participants were removed from the community.", null, {
                                        hk: "1dNLoU"
                                    }));
                                }
                            }
                            return new a.ActionType(u.fbt._({
                                "*": "Groups unlinked",
                                _1: "Group unlinked"
                            }, [u.fbt._plural(t.length)], {
                                hk: "1t0149"
                            }));
                        } catch (e) {
                            __LOG__(3, true, undefined, true)`Subgroup unlinking failed`;
                            SEND_LOGS("subgroup-unlinking-failed");
                            return new a.ActionType(u.fbt._("Subgroup could not be unlinked. Please try again.", null, {
                                hk: "RMQfv"
                            }));
                        }
                    })();
                    const h = new a.ActionType(u.fbt._({
                        "*": "Unlinking groups",
                        _1: "Unlinking group"
                    }, [u.fbt._plural(t.length)], {
                        hk: "7pwnQ"
                    }));
                    d.ToastManager.open((0, f.jsx)(a.ActionToast, {
                        initialAction: h,
                        pendingAction: p
                    }));
                    try {
                        yield n;
                    } catch (e) {
                        (0, i.filteredCatch)(r.ServerStatusCodeError, () => {})(e);
                    }
                })).apply(this, arguments);
            }
        },
        411019: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                var t;
                let {
                    businessProfile: o,
                    contact: n,
                    editable: I,
                    profilePicThumb: O,
                    onClick: L,
                    onOpenStatus: A,
                    onLoad: w,
                    hideStatusV3: M
                } = e;
                const [R, N] = (0, P.useState)(window.innerWidth);
                const [D, B] = (0, P.useState)(null);
                const H = (0, T.useModelValues)(o, ["coverPhoto"]);
                const W = (0, j.default)();
                (0, P.useEffect)(() => {
                    function e () {
                        N(window.innerWidth);
                    }
                    window.addEventListener("resize", e);
                    e();
                    return () => window.removeEventListener("resize", e);
                }, []);
                const F = R > 1300 ? 152 : 122;
                const U = (0, C.isStatusV3ProfilePhotoRingEnabled)() || !(0, C.canSeeStatusV3OnContact)() || n.statusMute || M ? null : g.StatusV3Collection.get(n.id);

                function V () {
                    if (U) {
                        d.ModalManager.openMedia((0, k.jsx)(p.default, {
                            statusV3: U,
                            onClose: () => d.ModalManager.closeMedia()
                        }), {
                            transition: "status-v3-modal"
                        });
                        if (!(A == null)) {
                            A();
                        }
                    }
                }
                let z = null;
                if (D) {
                    z = (0, k.jsx)(v.UIE, {
                        displayName: "ContextMenu",
                        escapable: true,
                        popable: true,
                        dismissOnWindowResize: true,
                        requestDismiss: () => {
                            B(null);
                        },
                        children: (0, k.jsx)(x.default, {
                            contextMenu: D
                        })
                    });
                }
                let G;
                let q = null;
                let Y = S.default.noStatusBorder;
                if (U != null) {
                    const e = !(0, C.isStatusV3ProfilePhotoRingEnabled)();
                    q = (0, k.jsx)(m.StatusV3ImageRing, {
                        statusV3: U,
                        size: F + 24,
                        stroke: 3,
                        theme: m.RingTheme.BusinessContactInfo,
                        respectAppTheme: true,
                        breakRing: e
                    });
                    Y = S.default.hasStatusBorder;
                }
                G = I && O != null ? (0, k.jsx)(f.default, {
                    profilePicThumb: O,
                    size: F
                }) : (0, k.jsx)(r.DetailImage, {
                    id: n.id,
                    size: F,
                    loader: true,
                    onLoad: w,
                    onClick: function (e) {
                        if (L) {
                            if (U != null && U.totalCount > 0) {
                                e.stopPropagation();
                                e.preventDefault();
                                const t = [(0, k.jsx)(s.DropdownItem, {
                                    testid: "mi-view-photo",
                                    action: () => {
                                        L(e);
                                    },
                                    children: c.default.t(633)
                                }, "view-photo"), (0, k.jsx)(s.DropdownItem, {
                                    testid: "mi-view-status",
                                    action: V,
                                    children: b.fbt._("View status", null, {
                                        hk: "1QQMZy"
                                    })
                                }, "view-status")];
                                B({
                                    menu: t,
                                    event: e
                                });
                            } else {
                                L(e);
                            }
                        }
                    },
                    quality: r.DetailImageQuality.High
                });
                const K = (t = H.coverPhoto) === null || t === undefined ? undefined : t.url.toString();
                let Z;
                let Q;
                let X;
                if (I != null && (0, i.isBizCoverPhotoEditEnabled)()) {
                    Z = (0, k.jsx)(l.default, {
                        coverPhoto: H.coverPhoto != null ? H.coverPhoto : undefined,
                        signal: W
                    });
                    const e = (0, k.jsx)(u.PencilIcon, {
                        directional: true,
                        color: _.SvgColorProp.TEAL
                    });
                    Q = (0, k.jsx)("div", {
                        className: (0, y.default)(E),
                        "aria-hidden": true,
                        children: (0, k.jsx)(h.Round, {
                            inverted: true,
                            testid: "edit_cover_photo",
                            children: e
                        })
                    });
                }
                if (I == null && K != null && (0, i.isBizCoverPhotoViewEnabled)()) {
                    const e = b.fbt._("Business cover photo image", null, {
                        hk: "10WGS4"
                    });
                    const t = K !== "" ? {
                        backgroundImage: `url(${K})`
                    } : null;
                    X = (0, k.jsx)("div", {
                        className: S.default.coverPhotoImage,
                        style: t,
                        "data-testid": "cover-photo-img",
                        role: "img",
                        "aria-label": e
                    });
                }
                return (0, k.jsxs)(k.Fragment, {
                    children: [(0, k.jsxs)("div", {
                        className: (0, a.cx)({
                            [S.default.isEditable]: I,
                            [S.default.coverPhoto]: true
                        }),
                        children: [X, Z, Q]
                    }), (0, k.jsxs)("div", {
                        className: S.default.avatar,
                        children: [q, (0, k.jsx)("div", {
                            className: Y,
                            children: G
                        })]
                    }), z]
                });
            };
            var l = n(o(767938));
            var i = o(72696);
            var a = o(752253);
            var r = o(23641);
            var s = o(675085);
            var c = n(o(932325));
            var d = o(114850);
            var u = o(852584);
            var f = n(o(567439));
            var p = n(o(3470));
            var h = o(435595);
            var g = o(657694);
            var C = o(918715);
            var m = o(473016);
            var _ = o(220584);
            var v = o(392632);
            var x = n(o(37875));
            var S = n(o(463273));
            var b = o(548360);
            var P = o(667294);
            var y = n(o(156720));
            var T = o(655241);
            var j = n(o(895851));
            var k = o(785893);
            const E = {
                position: "lhggkp7q",
                end: "i7sa5vq0",
                bottom: "fcd3cnzj",
                zIndex: "jnl3jror",
                pointerEvents: "m62443ks"
            };
        },
        189024: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.getProfilePopulatedFields = r;
            t.logEditCoverPhoto = function () {
                new i.EditBusinessProfileWamEvent({
                    editProfileAction: a.EDIT_PROFILE_ACTION.ACTION_EDIT_COVER_PHOTO_CLICK,
                    businessProfileEntryPoint: a.BUSINESS_PROFILE_ENTRY_POINT.SETTINGS
                }).commit();
            };
            t.logProfileFieldDiscard = function (e, t, o) {
                new i.EditBusinessProfileWamEvent((0, l.default)({
                    editProfileAction: a.EDIT_PROFILE_ACTION.ACTION_PROFILE_FIELD_DISCARD,
                    businessProfileEntryPoint: a.BUSINESS_PROFILE_ENTRY_POINT.SETTINGS,
                    editProfileActionField: e,
                    editBusinessProfileSessionId: o
                }, r(t))).commit();
            };
            t.logProfileFieldOpen = function (e, t, o) {
                new i.EditBusinessProfileWamEvent((0, l.default)({
                    editProfileAction: a.EDIT_PROFILE_ACTION.ACTION_PROFILE_FIELD_OPEN,
                    businessProfileEntryPoint: a.BUSINESS_PROFILE_ENTRY_POINT.SETTINGS,
                    editProfileActionField: e,
                    editBusinessProfileSessionId: o
                }, r(t))).commit();
            };
            t.logProfileFieldSave = function (e, t, o) {
                new i.EditBusinessProfileWamEvent((0, l.default)({
                    editProfileAction: a.EDIT_PROFILE_ACTION.ACTION_PROFILE_FIELD_SAVE,
                    businessProfileEntryPoint: a.BUSINESS_PROFILE_ENTRY_POINT.SETTINGS,
                    editProfileActionField: e,
                    editBusinessProfileSessionId: o
                }, r(t))).commit();
            };
            t.logProfileOpen = function (e, t) {
                var o;
                new i.EditBusinessProfileWamEvent({
                    editProfileAction: a.EDIT_PROFILE_ACTION.ACTION_OPEN,
                    businessProfileEntryPoint: a.BUSINESS_PROFILE_ENTRY_POINT.SETTINGS,
                    editBusinessProfileSessionId: t,
                    hasDescription: e.description != null,
                    hasCategory: !!(e.categories && e.categories.length > 0),
                    hasHours: ((o = e.businessHours) === null || o === undefined ? undefined : o.config) != null,
                    hasEmail: e.email != null,
                    hasAddress: e.address != null,
                    hasWebsite: e.website != null
                }).commit();
            };
            t.logRemoveCoverPhoto = function () {
                new i.EditBusinessProfileWamEvent({
                    editProfileAction: a.EDIT_PROFILE_ACTION.ACTION_REMOVE_COVER_PHOTO,
                    businessProfileEntryPoint: a.BUSINESS_PROFILE_ENTRY_POINT.SETTINGS
                }).commit();
            };
            var l = n(o(81109));
            var i = o(462116);
            var a = o(130756);

            function r (e) {
                var t;
                return {
                    hasDescription: e.description != null,
                    hasCategory: !!(e.categories && e.categories.length > 0),
                    hasHours: ((t = e.businessHours) === null || t === undefined ? undefined : t.config) != null,
                    hasEmail: e.email != null,
                    hasAddress: e.address != null,
                    hasWebsite: e.website != null
                };
            }
        },
        934668: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                return (0, i.jsx)(l.ShoppingCartIcon, {
                    xstyle: [a.cartIcon, e.theme === "inherit-color" && a.inheritColor]
                });
            };
            var l = o(392936);
            n(o(156720));
            var i = o(785893);
            const a = {
                cartIcon: {
                    color: "svlsagor"
                },
                inheritColor: {
                    color: "gtscxtjd"
                }
            };
        },
        263755: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.CartIconMenuBarItem = undefined;
            var l = n(o(934668));
            var i = o(957256);
            var a = o(568550);
            var r = o(526795);
            var s = o(932523);
            var c = o(548360);
            var d = o(667294);
            var u = o(785893);
            const f = (0, d.forwardRef)((e, t) => {
                const {
                    cartIconTheme: o,
                    onClick: n,
                    cartCountText: f,
                    testid: p = "menu-bar-cart-link",
                    catalogOwnerJid: h
                } = e;
                const g = (0, d.useContext)(a.DrawerContext);
                return (0, u.jsx)(r.MenuBarItem, {
                    ref: t,
                    testid: p,
                    icon: (0, u.jsx)(l.default, {
                        theme: o
                    }),
                    text: f,
                    title: c.fbt._("Your cart", null, {
                        hk: "Sn66V"
                    }),
                    onClick: (0, i.getOnCartClickWithLog)(n, h, (0, s.getProductCatalogContext)(g))
                });
            });
            t.CartIconMenuBarItem = f;
            f.displayName = "CartIconMenuBarItem";
        },
        145302: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const {
                    catalog: t,
                    onSend: o
                } = e;
                const n = (0, l.createCatalogLink)(t.id.user);
                const c = t.id.equals((0, a.getMaybeMeUser)()) ? `${r.fbt._("Follow this link to view our catalog on WhatsApp:", null, {
        hk: "1bmMoC"
      }).toString()} ${n}` : n;
                return (0, s.jsx)(i.default, {
                    text: c,
                    onSend: o
                });
            };
            var l = o(22323);
            var i = n(o(210002));
            var a = o(459857);
            var r = o(548360);
            var s = o(785893);
        },
        688023: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const {
                    product: t,
                    onSend: o
                } = e;
                const n = (0, l.createProductLink)(t.catalogWid.user, t.id.toString());
                const c = (0, a.isMeAccount)(t.catalogWid) ? `${r.fbt._("Follow this link to view our item on WhatsApp:", null, {
        hk: "H5KuN"
      }).toString()} ${n}` : n;
                return (0, s.jsx)(i.default, {
                    text: c,
                    onSend: o
                });
            };
            var l = o(22323);
            var i = n(o(210002));
            var a = o(459857);
            var r = o(548360);
            var s = o(785893);
        },
        344460: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const {
                    labels: t,
                    theme: o
                } = e;
                if (!t || !(0, l.canDisplayLabel)()) {
                    return null;
                }
                const n = o === "standalone";
                return (0, s.jsx)("div", {
                    className: (0, i.cx)({
                        [r.default.standaloneLabelContainer]: n,
                        [r.default.labelContainer]: true
                    }),
                    children: t.map((e, t) => (0, s.jsx)(c, {
                        labelId: e,
                        isStandalone: n
                    }, t))
                });
            };
            var l = o(72696);
            var i = o(752253);
            var a = o(129363);
            var r = n(o(541783));
            var s = o(785893);

            function c (e) {
                let {
                    labelId: t,
                    isStandalone: o
                } = e;
                return (0, s.jsx)("div", {
                    className: (0, i.cx)({
                        [r.default.standaloneLabelRow]: o,
                        [r.default.labelRow]: true
                    }),
                    children: (0, s.jsx)(a.Labels, {
                        labels: [t],
                        showName: true
                    })
                });
            }
        },
        464624: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const {
                    collection: t
                } = e;
                const [o, n] = (0, v.useState)(false);
                const [S, b] = (0, v.useState)(false);
                const [P, y] = (0, v.useState)("");
                const T = () => {
                    u.ModalManager.close();
                };
                if (S) {
                    return (0, x.jsx)(r.ConfirmPopup, {
                        title: _.fbt._("Request review", null, {
                            hk: "1Rp2pL"
                        }),
                        onOK: T,
                        children: (0, x.jsx)(g.TextDiv, {
                            children: _.fbt._("We will review the collection and if it meets our guidelines, it will be added to your catalog.", null, {
                                hk: "y5vML"
                            })
                        })
                    });
                }
                const j = P.length < 1 || o;
                return (0, x.jsx)(r.ConfirmPopup, {
                    title: _.fbt._("Request review", null, {
                        hk: "1Rp2pL"
                    }),
                    onOK: () => {
                        n(true);
                        let e = true;
                        p.QPL.markerStart(f.QuickLogMarkerId.WHATSAPP_COLLECTION_APPEAL);
                        (0, d.handleCollectionAppeal)(t, P).then(() => {
                            n(false);
                            b(true);
                            e = false;
                            p.QPL.markerEnd(f.QuickLogMarkerId.WHATSAPP_COLLECTION_APPEAL, i.QuickLogActionType.SUCCESS);
                        }).catch((0, l.filteredCatch)(a.ServerStatusCodeError, () => {
                            m.ToastManager.open((0, x.jsx)(C.Toast, {
                                msg: _.fbt._("Something went wrong and your request wasn't submitted. Try again.", null, {
                                    hk: "3sAwQH"
                                }),
                                id: (0, C.genId)("catalog_collection_appeal_submission_failed")
                            }));
                            n(false);
                        })).finally(() => {
                            if (e) {
                                p.QPL.markerEnd(f.QuickLogMarkerId.WHATSAPP_COLLECTION_APPEAL, i.QuickLogActionType.FAIL);
                            }
                        });
                    },
                    onCancel: T,
                    okDisabled: j,
                    children: (0, x.jsxs)("form", {
                        children: [(0, x.jsx)(h.RichTextField, {
                            testid: "confirm-popup-text-input",
                            placeholder: _.fbt._("Enter reason for this request...", null, {
                                hk: "3U5nE7"
                            }),
                            onChange: e => {
                                let {
                                    text: t
                                } = e;
                                y(t);
                            },
                            value: P,
                            maxLength: 1000
                        }), (0, x.jsx)(c.ExternalLink, {
                            href: s.default.WA_COMMERCE_POLICY_URL,
                            children: _.fbt._("Learn More", null, {
                                hk: "FZuUT"
                            })
                        })]
                    })
                });
            };
            var l = o(122583);
            var i = o(15842);
            var a = o(984330);
            var r = o(103440);
            var s = n(o(846870));
            var c = o(753233);
            var d = o(491606);
            var u = o(114850);
            var f = o(316348);
            var p = o(555622);
            var h = o(202391);
            var g = o(180519);
            var C = o(625786);
            var m = o(390737);
            var _ = o(548360);
            var v = o(667294);
            var x = o(785893);
        },
        420165: (e, t, o) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = undefined;
            var n = o(103440);
            var l = o(114850);
            var i = o(548360);
            var a = o(785893);
            var r = e => {
                l.ModalManager.open((0, a.jsx)(n.ConfirmPopup, {
                    okText: i.fbt._("OK", null, {
                        hk: "4oTrfy"
                    }),
                    onOK: () => l.ModalManager.close(),
                    children: e
                }));
            };
            t.default = r;
        },
        767938: (e, t, o) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const {
                    coverPhoto: t,
                    signal: o
                } = e;
                const [h, g] = (0, f.useState)(false);
                const [C, m] = (0, f.useState)(t == null ? undefined : t.url);
                (0, f.useEffect)(() => {
                    if ((C == null ? undefined : C.pathname) !== (t == null ? undefined : t.url.pathname)) {
                        m(t == null ? undefined : t.url);
                    }
                }, [t, C]);
                return (0, p.jsx)(u.PhotoPickerLoadable, {
                    type: d.PhotoPickerType.COVER_PHOTO,
                    pending: h,
                    readOnly: false,
                    onImageSet: (e, d) => {
                        g(true);
                        if (d == null) {
                            return void((t == null ? undefined : t.id) && (0, l.deleteCoverPhoto)(t.id).finally(() => {
                                g(false);
                                (0, r.logRemoveCoverPhoto)();
                            }));
                        }
                        const u = (0, a.dataURLtoBlob)(d);
                        (0, i.calculateFilehashFromBlob)(u).then(e => {
                            (0, c.uploadBizCoverPhoto)(u, e, o).then(e => {
                                if (!o.aborted) {
                                    (0, l.setCoverPhoto)(e.id, e.ts, e.metaHmac);
                                    (0, r.logEditCoverPhoto)();
                                }
                            }).catch((0, n.filteredCatch)(s.HttpInvalidResponseError, () => {
                                __LOG__(3)`BizCoverPhotoPicker: failed to upload cover photo`;
                            })).catch(() => {
                                __LOG__(4, undefined, new Error(), true)`BizCoverPhotoPicker: unexpected error uploading cover photo`;
                                SEND_LOGS("biz_cover_photo_upload");
                            }).finally(() => {
                                g(false);
                            });
                        });
                    },
                    attachToChat: false,
                    startImage: C == null ? undefined : C.toString(),
                    theme: d.PhotoPickerThemeType.COVER_PHOTO
                });
            };
            var n = o(122583);
            var l = o(192081);
            var i = o(677332);
            var a = o(437362);
            var r = o(189024);
            var s = o(791357);
            var c = o(394480);
            var d = o(588792);
            var u = o(511696);
            var f = o(667294);
            var p = o(785893);
        },
        534885: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                return (0, s.jsx)(l.DrawerButton, {
                    testid: "li-share-link",
                    icon: (0, s.jsx)(i.ForwardIcon, {
                        className: (0, r.default)(c)
                    }),
                    onClick: e.onClick,
                    children: a.fbt._("Send product", null, {
                        hk: "1wkzue"
                    })
                });
            };
            var l = o(36045);
            var i = o(525110);
            var a = o(548360);
            var r = n(o(156720));
            var s = o(785893);
            const c = {
                color: "rahkaw8d"
            };
        },
        487011: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                let {
                    onOpenCollections: t
                } = e;
                const [o, n] = (0, s.useState)(false);
                const u = l.CatalogCollection.get((0, r.getMeUser)());
                (0, c.useListener)(u == null ? undefined : u.collections, "change", () => {
                    n(true);
                });
                return o && (0, d.jsx)(i.default, {
                    children: (0, d.jsx)(a.default, {
                        onClick: t
                    })
                });
            };
            var l = o(713464);
            var i = n(o(838536));
            var a = n(o(502742));
            var r = o(459857);
            var s = o(667294);
            var c = o(808446);
            var d = o(785893);
        },
        786399: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function () {
                const e = new d.CoolOffNux(C, {
                    COOL_OFF_START_STORAGE_KEY: c.CoolOffPeriodKeys.CATALOG,
                    MAX_VIEWS_IN_DAYS: 1,
                    COOL_OFF_DURATION_IN_DAYS: 1,
                    metricField: _
                });
                if (e.shouldShow()) {
                    const t = (0, g.jsx)(i.ConfirmPopup, {
                        onOK: () => {
                            e.dismiss();
                            s.ModalManager.close();
                        },
                        children: (0, g.jsxs)(a.FlexColumn, {
                            align: "center",
                            children: [(0, g.jsx)(r.default, {
                                xstyle: m.graphic,
                                children: (0, g.jsx)(l.CartInterstitialGraphicIcon, {})
                            }), (0, g.jsx)(u.TextHeader, {
                                theme: "popupTitle",
                                children: p.fbt._("New: Add to Cart", null, {
                                    hk: "34ysyY"
                                })
                            }), (0, g.jsx)(u.TextParagraph, {
                                color: "secondary",
                                className: (0, h.default)(m.description),
                                children: p.fbt._("Simpler for you to keep track of order inquiries, manage requests, and close sales.", null, {
                                    hk: "25ZM2y"
                                })
                            })]
                        })
                    });
                    s.ModalManager.open(t);
                    e.show();
                    e.startCoolOffToday();
                }
            };
            var l = o(626513);
            var i = o(103440);
            var a = o(690495);
            var r = n(o(469733));
            var s = o(114850);
            var c = o(95589);
            var d = o(316488);
            var u = o(180519);
            var f = o(130756);
            var p = o(548360);
            var h = n(o(156720));
            var g = o(785893);
            const C = c.NuxKeyTypes.COOL_OFF_NUX.CART_INTERSTITIAL;
            const m = {
                graphic: {
                    marginTop: "nylzjxre",
                    marginEnd: "lfum0007",
                    marginBottom: "bvhm1occ",
                    marginStart: "r6x3u63k",
                    color: "bc38n4nm"
                },
                description: {
                    marginTop: "opp68qpq",
                    textAlign: "qfejxiq4"
                }
            };
            const _ = f.BANNER_TYPES.SMB_CATALOG_CART_INTERSTITIAL;
        },
        502742: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = undefined;
            var l = o(287461);
            var i = o(713464);
            var a = o(445729);
            var r = n(o(760932));
            var s = o(95589);
            var c = o(182908);
            var d = o(316488);
            var u = o(459857);
            var f = o(130756);
            var p = o(548360);
            var h = o(667294);
            var g = n(o(156720));
            var C = o(785893);
            const m = {
                color: "o0rubyzf"
            };
            const _ = s.NuxKeyTypes.COOL_OFF_NUX.COLLECTIONS;
            const v = {
                COOL_OFF_DURATION_IN_DAYS: 2,
                VIEWS_BEFORE_COOL_OFF_IN_DAYS: 1,
                CLICKS_BEFORE_COOL_OFF: 1,
                MAX_VIEWS_IN_DAYS: 2,
                COOL_OFF_START_STORAGE_KEY: s.CoolOffPeriodKeys.CATALOG,
                metricField: f.BANNER_TYPES.SMB_COLLECTION_CREATION
            };
            class x extends c.NuxBanner {
                constructor() {
                    super(...arguments);
                    this._refContainer = (0, h.createRef)();
                    this.getElement = () => this._refContainer.current;
                }
                render() {
                    const {
                        onClick: e
                    } = this.props;
                    const t = new d.CoolOffNux(_, v);
                    const o = (0, C.jsx)("span", {
                        className: (0, g.default)(m),
                        children: p.fbt._("Get started", null, {
                            hk: "m7Zf5"
                        })
                    });
                    return (0, C.jsx)(r.default, {
                        ref: this._refContainer,
                        title: p.fbt._("Create new collection", null, {
                            hk: "19zBCQ"
                        }),
                        subtitle: p.fbt._("Group items into collections to stay organized.", null, {
                            hk: "1sDPK6"
                        }),
                        actionText: o,
                        onClick: e,
                        nuxManager: t,
                        theme: "nuxBlue"
                    });
                }
                static shouldShow() {
                    return (0, l.getABPropConfigValue)("web_abprop_collections_nux_banner") && a.Conn.isSMB && function () {
                        const e = i.CatalogCollection.get((0, u.getMeUser)());
                        if (e == null || e.collections == null) {
                            return false;
                        }
                        const t = e.collections.getCollectionModels(true);
                        return e.productCollection.getProductModels(true).some(e => !e.isHidden && e.reviewStatus !== "REJECTED") && t.length === 0;
                    }() && (0, d.shouldShowNUX)(_, v);
                }
            }
            t.default = x;
            x.displayName = "CollectionsBanner";
        },
        795068: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.getCatalogDrawerMenu = function (e) {
                const {
                    onCartClick: t,
                    cartCount: o,
                    catalogId: n,
                    canManageCatalog: i,
                    onSendCatalog: r,
                    onOpenCollections: s,
                    onOpenMerchantDetailsForm: c,
                    onOpenSettings: d,
                    cartIconTheme: u
                } = e;
                const f = t && n != null ? (0, C.jsx)(a.CartIconMenuBarItem, {
                    cartCountText: (0, l.isNumber)(o) && o > 0 ? o.toString() : undefined,
                    onClick: t,
                    catalogOwnerJid: n,
                    cartIconTheme: u
                }) : null;
                return [f, (0, C.jsx)(m, {
                    canManageCatalog: i,
                    onSendCatalog: r,
                    onOpenCollections: s,
                    onOpenMerchantDetailsForm: c,
                    onOpenSettings: d
                })];
            };
            var l = o(724976);
            var i = o(72696);
            var a = o(263755);
            var r = o(664149);
            var s = o(675085);
            var c = n(o(932325));
            var d = o(526795);
            var u = o(784424);
            var f = n(o(500210));
            var p = o(459857);
            var h = o(548360);
            var g = o(667294);
            var C = o(785893);
            const m = (0, g.forwardRef)((e, t) => {
                let {
                    canManageCatalog: o,
                    onSendCatalog: n,
                    onOpenCollections: l,
                    onOpenMerchantDetailsForm: a,
                    onOpenSettings: g
                } = e;
                if (o) {
                    return (0, C.jsx)(d.MenuBarItem, {
                        ref: t,
                        testid: "menu-bar-menu",
                        icon: (0, C.jsx)(u.MenuIcon, {}),
                        title: c.default.t(430),
                        children: (0, C.jsxs)(r.Dropdown, {
                            type: r.MenuType.DropdownMenu,
                            flipOnRTL: true,
                            dirX: r.DirX.LEFT,
                            children: [(0, C.jsx)(s.DropdownItem, {
                                testid: "mi-foward menu-item",
                                action: n,
                                children: c.default.t(311)
                            }), l && (0, C.jsx)(s.DropdownItem, {
                                testid: "mi-collections menu-item",
                                action: l,
                                children: h.fbt._("Collections", null, {
                                    hk: "1VWu7A"
                                })
                            }), (0, i.canSeeECommerceComplianceIndiaCountryOriginExemptBusinessJourney)((0, p.getMeUser)()) && a && (0, C.jsx)(s.DropdownItem, {
                                testid: "merchant-details",
                                action: a,
                                children: h.fbt._("Business details", null, {
                                    hk: "m9xzp"
                                })
                            }, "merchantDetails"), g && (0, C.jsx)(s.DropdownItem, {
                                testid: "mi-settings menu-item",
                                action: g,
                                children: h.fbt._("Settings", null, {
                                    hk: "2RmHUB"
                                })
                            })]
                        }, "CatalogDetailHeader")
                    });
                } else {
                    return (0, C.jsx)(d.MenuBarItem, {
                        ref: t,
                        testid: "menu-bar-catalog-link",
                        icon: (0, C.jsx)(f.default, {}),
                        title: h.fbt._("Catalog link", null, {
                            hk: "M36Dw"
                        }),
                        onClick: n
                    });
                }
            });
            m.displayName = "MenuItems";
        },
        213393: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const {
                    onProductCatalog: t,
                    title: o,
                    subtitle: n,
                    animation: l,
                    sectionTheme: i = "padding",
                    shouldLog: c,
                    catalog: f,
                    onProductDetail: g,
                    filterProductId: C,
                    productsToShow: _ = 6,
                    hideIncompleteRows: S = false,
                    showProductPlaceholders: k,
                    seeMoreOverlay: E,
                    catalogEntryLabel: I,
                    showShopsLogo: O
                } = e;
                const L = (0, x.useContext)(r.DrawerContext);
                (0, x.useEffect)(() => {
                    if (c && f != null) {
                        (0, h.logBusinessProfileCatalogView)({
                            catalogOwnerWid: f.id,
                            catalogContext: (0, p.getProductCatalogContext)(L)
                        });
                    }
                }, []);
                const A = (0, b.jsx)(y, {
                    catalogEntryLabel: I,
                    onClick: () => t((0, p.getProductCatalogContext)(L), "ContactInfo")
                });
                const w = (0, b.jsx)(j, {
                    productsToShow: _,
                    catalog: f,
                    hideIncompleteRows: S,
                    filterProductId: C,
                    seeMoreOverlay: E,
                    showProductPlaceholders: k,
                    onProductThumbClick: (e, o) => e ? t((0, p.getProductCatalogContext)(L), "ContactInfo") : (e => {
                        if (c) {
                            (0, h.logProfileProductClick)({
                                product: (0, m.unproxy)(e),
                                catalogContext: (0, p.getProductCatalogContext)(L)
                            });
                        }
                        g(e);
                    })(o),
                    onProductImageClick: () => t((0, p.getProductCatalogContext)(L), "ContactInfo")
                });
                const M = n ? (0, b.jsx)(u.default, {
                    xstyle: P.subtitle,
                    children: n
                }) : null;
                const R = (0, b.jsxs)(d.FlexRow, {
                    align: "center",
                    children: [M, (0, b.jsx)(u.default, {
                        children: (0, b.jsx)(a.ChevronRightAltIcon, {
                            xstyle: P.chevron,
                            directional: true
                        })
                    })]
                });
                return (0, b.jsxs)(s.default, {
                    title: o || v.fbt._("Products", null, {
                        hk: "3Ky71N"
                    }),
                    titleOnClick: () => t((0, p.getProductCatalogContext)(L), "ContactInfo"),
                    subtitle: R,
                    theme: i,
                    animation: l,
                    children: [w, A, O === true ? (0, b.jsx)(T, {}) : null]
                });
            };
            var l = o(72696);
            var i = n(o(692629));
            var a = o(647276);
            var r = o(568550);
            var s = n(o(969358));
            var c = o(307476);
            var d = o(690495);
            var u = n(o(469733));
            var f = o(726195);
            var p = o(932523);
            var h = o(77548);
            var g = o(493770);
            var C = o(530485);
            var m = o(163139);
            var _ = n(o(625903));
            var v = o(548360);
            var x = o(667294);
            var S = n(o(156720));
            var b = o(785893);
            const P = {
                addIcon: {
                    position: "g0rxnol2",
                    width: "d0st09ow",
                    height: "bbl9m3t3",
                    paddingBottom: "aus7m8kn",
                    marginTop: "tt8xd2xn",
                    marginEnd: "bugiwsl0",
                    marginBottom: "or9x5nie",
                    marginStart: "svoq16ka",
                    borderTop: "rom324v9",
                    borderEnd: "na7ur5ty",
                    borderBottom: "gjeyj30g",
                    borderStart: "bmro6pka",
                    borderTopStartRadius: "l147y7tb",
                    borderTopEndRadius: "mjscftrx",
                    borderBottomEndRadius: "fqwk616h",
                    borderBottomStartRadius: "pkud3j3x",
                    ":before": {
                        position: "oxaw94s0",
                        top: "ijeufx4s",
                        left: "a9fxutt7",
                        display: "oa3lyrek",
                        width: "slvs4faj",
                        height: "jaq0b63r",
                        content: "lij4d1x3",
                        background: "nkmjymgc",
                        transform: "k95pjfv1"
                    },
                    ":after": {
                        position: "dkvli2l0",
                        top: "qi2a0yje",
                        left: "harwy2hg",
                        display: "b0f5vxaq",
                        width: "qbfuvgfc",
                        height: "i0r7mfoh",
                        content: "k15o3o4i",
                        background: "fji5f4ri",
                        transform: "cai600lj"
                    }
                },
                largeGallerySpacing: {
                    width: "b8z6cu80",
                    height: "bbl9m3t3",
                    marginEnd: "jnwc1y2a",
                    marginBottom: "qrsyb3yy"
                },
                placeholderThumb: {
                    width: "d0st09ow",
                    height: "fujac5jc",
                    paddingBottom: "lxvt2vq0",
                    marginTop: "tt8xd2xn",
                    marginEnd: "bugiwsl0",
                    marginBottom: "or9x5nie",
                    marginStart: "svoq16ka",
                    backgroundColor: "o27ac25e",
                    borderTopStartRadius: "l147y7tb",
                    borderTopEndRadius: "mjscftrx",
                    borderBottomEndRadius: "fqwk616h",
                    borderBottomStartRadius: "pkud3j3x"
                },
                subtitle: {
                    marginTop: "tt8xd2xn",
                    marginEnd: "q471nw87",
                    marginBottom: "mpdn4nr2",
                    marginStart: "svoq16ka",
                    fontSize: "f8jlpxt4",
                    color: "sbs3osm6"
                },
                catalogEntryButton: {
                    marginTop: "iin4x6c7",
                    marginEnd: "jnwc1y2a",
                    marginBottom: "mpdn4nr2",
                    marginStart: "svoq16ka",
                    textAlign: "qfejxiq4"
                },
                shopsLogo: {
                    marginTop: "qt60bha0",
                    textAlign: "qfejxiq4"
                },
                chevron: {
                    color: "cs9t9or5"
                }
            };

            function y (e) {
                let {
                    catalogEntryLabel: t,
                    onClick: o
                } = e;
                if (t == null) {
                    return null;
                } else {
                    return (0, b.jsx)("div", {
                        className: (0, S.default)(P.catalogEntryButton),
                        children: (0, b.jsx)(i.default, {
                            testid: "catalog-entry-button",
                            type: "secondary",
                            onClick: o,
                            children: t
                        })
                    });
                }
            }

            function T () {
                return (0, b.jsx)("div", {
                    className: (0, S.default)(P.shopsLogo),
                    children: (0, b.jsx)(c.FbshopsIcon, {
                        displayInline: true
                    })
                });
            }

            function j (e) {
                let t;
                let o;
                let {
                    productsToShow: n,
                    catalog: i,
                    hideIncompleteRows: a,
                    filterProductId: r,
                    seeMoreOverlay: s,
                    showProductPlaceholders: c,
                    onProductThumbClick: d,
                    onProductImageClick: u
                } = e;
                let p = [];
                let h = n;
                if ((0, l.canSeeBizProfileV3)()) {
                    o = "largeGallerySpacing";
                }
                if (i != null) {
                    t = i.productCollection;
                    const e = i.productCollection.getProductModels();
                    if (a && p.length > 3) {
                        h = Math.min(n, e.length - p.length % 3);
                    }
                    p = e.slice(0, h + 1).filter(e => e.id.toString() !== r).map((e, t) => {
                        var n;
                        const l = (n = e.getPreviewImage()) === null || n === undefined ? undefined : n.mediaData;
                        if (!l) {
                            return (0, b.jsx)(b.Fragment, {});
                        }
                        let a;
                        if (s && t === h - 1 && i.productCollection.length > h - 1) {
                            a = v.fbt._("See more", null, {
                                hk: "450jnd"
                            });
                        }
                        return (0, b.jsx)(g.ProductThumb, {
                            onClick: () => d(a != null, e),
                            mediaData: l,
                            overlayContent: a,
                            theme: o
                        }, e.id.toString());
                    }).slice(0, h);
                } else {
                    t = new C.ProductCollection();
                    t.add({
                        id: "_ph"
                    });
                }
                if (!p.length && !c) {
                    return null;
                }
                let m;
                let x = P.addIcon;
                for (; c && p.length < h;) {
                    p.push((0, b.jsx)(_.default, {
                        onClick: u,
                        title: v.fbt._("Add product", null, {
                            hk: "3gdovw"
                        }),
                        xstyle: [x, o === "largeGallerySpacing" && P.largeGallerySpacing],
                        children: (0, b.jsx)(b.Fragment, {})
                    }, `_ph${p.length}`));
                    x = P.placeholderThumb;
                }
                if ((0, l.canSeeBizProfileV3)()) {
                    m = "space-between";
                }
                return (0, b.jsx)(f.MediaGalleryView, {
                    productMedias: p,
                    mediaCollection: t,
                    justify: m
                });
            }
        },
        386067: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = undefined;
            var l = n(o(145302));
            var i = o(22323);
            var a = n(o(170206));
            var r = n(o(745699));
            var s = o(23641);
            var c = n(o(908081));
            var d = n(o(324093));
            var u = o(568550);
            var f = o(626194);
            var p = o(114850);
            var h = o(21645);
            var g = o(932523);
            var C = n(o(244381));
            var m = o(77548);
            var _ = n(o(338931));
            var v = o(548360);
            var x = o(667294);
            var S = n(o(156720));
            var b = o(785893);
            const P = {
                paddingTop: "i5tg98hk",
                paddingEnd: "iffbo4e8",
                paddingBottom: "aiput80m",
                paddingStart: "khscay3k",
                lineHeight: "qg52vu03"
            };
            const y = "catalog-link-anchor";

            function T (e, t) {
                const {
                    onBack: o,
                    onCancel: n,
                    catalog: T,
                    contact: j,
                    prompt: k,
                    centerDrawer: E,
                    onSend: I
                } = e;
                const O = (0, x.useContext)(u.DrawerContext);
                const L = () => {
                    p.ModalManager.open((0, b.jsx)(l.default, {
                        catalog: T,
                        onSend: I
                    }), {
                        transition: "modal-flow"
                    });
                    (0, m.logShareCatalogViaWALinkClick)({
                        catalogOwnerWid: T.id,
                        catalogContext: (0, g.getProductCatalogContext)(O)
                    });
                };
                const A = (0, b.jsx)(s.DetailImage, {
                    id: j.id,
                    size: 82,
                    quality: s.DetailImageQuality.High
                });
                let w;
                let M;
                if (E) {
                    w = "labels";
                    M = "center-column";
                }
                return (0, b.jsxs)(c.default, {
                    ref: t,
                    theme: w,
                    children: [(0, b.jsx)(f.DrawerHeader, {
                        testid: "catalog-link-title",
                        title: v.fbt._("Catalog link", null, {
                            hk: "M36Dw"
                        }),
                        onBack: o,
                        onCancel: n,
                        type: f.DRAWER_HEADER_TYPE.SMALL
                    }), (0, b.jsxs)(d.default, {
                        theme: M,
                        children: [(0, b.jsx)("div", {
                            className: (0, S.default)(P),
                            children: k
                        }), (0, b.jsx)(a.default, {
                            image: A,
                            primary: (0, b.jsx)(h.Name, {
                                contact: j,
                                useVerifiedName: true
                            }),
                            theme: "identity",
                            secondary: (0, b.jsx)(C.default, {
                                id: y,
                                href: (0, i.createCatalogLink)(T.id.user),
                                onClick: e => {
                                    e.preventDefault();
                                    L();
                                },
                                noHandle: true
                            })
                        }), (0, b.jsx)(_.default, {
                            onClick: L
                        }), (0, b.jsx)(r.default, {
                            elementId: y,
                            onClick: () => {
                                (0, m.logShareCatalogCopyLinkClick)({
                                    catalogOwnerWid: T.id,
                                    catalogContext: (0, g.getProductCatalogContext)(O)
                                });
                            }
                        })]
                    })]
                }, "catalog-link-drawer");
            }
            var j = (0, x.forwardRef)(T);
            t.default = j;
        },
        819543: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function () {
                return a.apply(this, arguments);
            };
            var l = n(o(348926));
            var i = o(778945);

            function a () {
                return (a = (0, l.default)(function* (e) {
                    var t;
                    let o = i.BusinessProfileCollection.get(e);
                    if (!o || o.stale) {
                        const t = yield i.BusinessProfileCollection.update(e);
                        o = Array.isArray(t) ? t[0] : t;
                    }
                    return ((t = o.profileOptions) === null || t === undefined ? undefined : t.cartEnabled) || false;
                })).apply(this, arguments);
            }
        },
        324480: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.getDetailDrawerMenu = function (e) {
                const {
                    contactId: t,
                    onSendProduct: o,
                    onReportProduct: n,
                    onProductLinkClick: g,
                    onProductMoreInformation: C,
                    onCartClick: m,
                    cartCount: _,
                    catalogId: v
                } = e;
                return [m && v != null ? (0, h.jsx)(a.CartIconMenuBarItem, {
                    cartCountText: (0, l.isNumber)(_) && _ > 0 ? _.toString() : undefined,
                    onClick: m,
                    catalogOwnerJid: v
                }) : null, (0, h.jsx)(d.MenuBarItem, {
                    testid: "menu-bar-product-link",
                    icon: (0, h.jsx)(f.default, {}),
                    title: p.fbt._("Product link", null, {
                        hk: "1RIlvV"
                    }),
                    onClick: g
                }, "link"), (0, h.jsx)(d.MenuBarItem, {
                    testid: "menu-bar-menu",
                    icon: (0, h.jsx)(u.MenuIcon, {}),
                    title: c.default.t(430),
                    children: (0, h.jsxs)(r.Dropdown, {
                        type: r.MenuType.DropdownMenu,
                        flipOnRTL: true,
                        dirX: r.DirX.LEFT,
                        children: [(0, h.jsx)(s.DropdownItem, {
                            testid: "mi-send menu-item",
                            action: o,
                            children: p.fbt._("Send product", null, {
                                hk: "1wkzue"
                            })
                        }), (0, i.canSeeECommerceComplianceIndiaSoftEnforcement)(t) && (0, h.jsx)(s.DropdownItem, {
                            testid: "mi-send menu-item",
                            action: C,
                            children: p.fbt._("More information", null, {
                                hk: "2JHvi1"
                            })
                        }), (0, h.jsx)(s.DropdownItem, {
                            testid: "mi-report menu-item",
                            action: n,
                            children: p.fbt._("Report product", null, {
                                hk: "1jgCyX"
                            })
                        })]
                    }, "ProductDetailHeader")
                }, "dropdown")];
            };
            var l = o(724976);
            var i = o(72696);
            var a = o(263755);
            var r = o(664149);
            var s = o(675085);
            var c = n(o(932325));
            var d = o(526795);
            var u = o(784424);
            var f = n(o(500210));
            var p = o(548360);
            var h = o(785893);
        },
        227604: (e, t, o) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.parseErrorState = function (e, t) {
                if (e instanceof l.Unmount);
                else {
                    if (!(e instanceof n.ServerStatusCodeError)) {
                        t("ERROR");
                        throw e;
                    }
                    if (e.status === "not_found" || e.status === 404) {
                        t("NOT_FOUND");
                    } else {
                        t("ERROR");
                        __LOG__(3)`parseErrorState:Failed to fetch from server`;
                    }
                }
            };
            var n = o(984330);
            var l = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var o = i(t);
                if (o && o.has(e)) {
                    return o.get(e);
                }
                var n = {};
                var l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e) {
                    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, a) : null;
                        if (r && (r.get || r.set)) {
                            Object.defineProperty(n, a, r);
                        } else {
                            n[a] = e[a];
                        }
                    }
                }
                n.default = e;
                if (o) {
                    o.set(e, n);
                }
                return n;
            }(o(288057));

            function i (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var o = new WeakMap();
                return (i = function (e) {
                    if (e) {
                        return o;
                    } else {
                        return t;
                    }
                })(e);
            }
        },
        568414: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                let {
                    fetchState: t
                } = e;
                switch (t) {
                    case "NONE":
                    case "SUCCESS":
                        return null;
                    case "PENDING":
                        return (0, c.jsxs)("div", {
                            className: (0, s.default)(d),
                            children: [(0, c.jsx)(l.Spinner, {
                                size: 14,
                                color: "highlight"
                            }), (0, c.jsx)(i.TextSpan, {
                                className: (0, s.default)(u, f),
                                theme: "small",
                                children: r.fbt._("Waiting for network", null, {
                                    hk: "3I2DtN"
                                })
                            })]
                        });
                    case "NOT_FOUND":
                    case "ERROR":
                        return (0, c.jsx)("div", {
                            className: (0, s.default)(d),
                            children: (0, c.jsx)(i.TextSpan, {
                                className: (0, s.default)(u),
                                theme: "small",
                                color: "danger",
                                children: t === "NOT_FOUND" ? r.fbt._("This product or service has been removed", null, {
                                    hk: "3mE1ld"
                                }) : r.fbt._("Something went wrong", null, {
                                    hk: "7C9hw"
                                })
                            })
                        });
                    default:
                        throw (0, a.default)(`invalid fetchState ${t}`);
                }
            };
            var l = o(956113);
            var i = o(180519);
            var a = n(o(556869));
            var r = o(548360);
            var s = n(o(156720));
            var c = o(785893);
            const d = {
                position: "lhggkp7q",
                zIndex: "nbczt5ty",
                boxSizing: "cm280p3y",
                display: "p357zi0d",
                alignItems: "gndfcl4n",
                justifyContent: "ac2vgrno",
                width: "ln8gz9je",
                paddingTop: "fbgy3m38",
                paddingEnd: "ft2m32mm",
                paddingBottom: "oq31bsqd",
                paddingStart: "nu34rnf1",
                backgroundColor: "ihvf49ua",
                boxShadow: "g07l9dru",
                opacity: "bs7a17vp",
                transitionDelay: "kji9i36c",
                transitionTimingFunction: "bkifpc9x"
            };
            const u = {
                marginTop: "tt8xd2xn",
                marginEnd: "spjzgwxb",
                marginBottom: "mpdn4nr2",
                marginStart: "a3oefunm",
                fontWeight: "hnx8ox4h"
            };
            const f = {
                color: "evzurl1e"
            };
        },
        500210: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                return (0, a.jsx)(l.LinkIcon, {
                    className: (0, i.default)(r.linkIcon, e.theme === "inherit-color" && r.inheritColor)
                });
            };
            var l = o(972989);
            var i = n(o(156720));
            var a = o(785893);
            const r = {
                linkIcon: {
                    color: "svlsagor"
                },
                inheritColor: {
                    color: "gtscxtjd"
                }
            };
        },
        244381: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                let {
                    id: t,
                    href: o,
                    onClick: n,
                    noHandle: c
                } = e;
                return (0, a.jsx)("span", {
                    className: (0, i.default)(r),
                    children: (0, a.jsx)(l.SelectableLink, {
                        id: t,
                        href: o,
                        className: (0, i.default)(s),
                        selectable: true,
                        onClick: n,
                        "data-nohandle": c,
                        children: o
                    })
                });
            };
            var l = o(306703);
            var i = n(o(156720));
            var a = o(785893);
            const r = {
                wordWrap: "b6f1x6w7",
                whiteSpace: "hmy10g0s"
            };
            const s = {
                color: "e1vllz7m"
            };
        },
        525897: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const {
                    onProductDetail: t,
                    onProductShare: o,
                    onCartOpen: n,
                    shareLinks: _,
                    canManageCatalog: v
                } = e;
                const [x, S] = (0, g.useState)(undefined);
                const b = (0, C.useModelValues)(e.catalog, ["productCollection", "afterCursor", "id", "index"]);
                const P = e => {
                    if (o) {
                        o(e);
                    }
                };
                if (!b.productCollection || !b.productCollection.getProductModels(e.canManageCatalog).length) {
                    return null;
                }
                return (0, m.jsx)(r.default, {
                    flatListControllers: [e.flatListController],
                    children: (0, m.jsx)(a.FlatList, {
                        flatListController: e.flatListController,
                        direction: "vertical",
                        forceConsistentRenderCount: false,
                        data: (() => {
                            const e = n !== undefined;
                            return b.productCollection.getProductModels(v).map(t => ({
                                itemKey: `${t.id.toString()}_${e.toString()}`,
                                product: t
                            }));
                        })(),
                        renderItem: e => {
                            let {
                                product: o
                            } = e;
                            return (0, m.jsx)(l.DrawerContext.Consumer, {
                                children: e => {
                                    const l = (0, u.getProductCatalogContext)(e);
                                    return (0, m.jsx)(f.default, {
                                        product: o,
                                        onCartOpen: n,
                                        onClick: () => ((e, o) => {
                                            (0, p.logCatalogListDetailClick)({
                                                product: (0, h.unproxy)(e),
                                                catalogContext: o
                                            });
                                            S(e.id.toString());
                                            return t(e);
                                        })(o, l),
                                        onProductShare: _ ? P : null,
                                        onProductDelete: e => ((e, t) => {
                                            (0, c.handleProductDelete)(b, e, t, "Catalog").then(() => {
                                                if (e.id === x) {
                                                    i.DrawerManager.closeDrawerMid();
                                                    S(undefined);
                                                }
                                            });
                                        })(e, l),
                                        onProductHideShow: e => ((e, t) => {
                                            (0, c.handleProductVisibilityChange)(b, e, t, "Catalog");
                                        })(e, l),
                                        canManageCatalog: v
                                    });
                                }
                            });
                        },
                        defaultItemHeight: d.PRODUCT_LIST_ITEM_HEIGHT,
                        keyOrder: s.KeyOrder.INVERSE
                    })
                });
            };
            var l = o(568550);
            var i = o(900316);
            var a = o(512938);
            var r = n(o(964223));
            var s = o(390185);
            var c = o(491606);
            var d = o(899841);
            var u = o(932523);
            var f = n(o(698690));
            var p = o(77548);
            var h = o(163139);
            var g = o(667294);
            var C = o(655241);
            var m = o(785893);
        },
        614058: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = undefined;
            var l = o(898817);
            var i = o(122583);
            var a = o(15842);
            var r = o(632157);
            var s = o(984330);
            var c = o(72696);
            var d = o(739071);
            var u = o(778945);
            var f = o(542358);
            var p = o(290895);
            var h = o(713464);
            var g = o(698867);
            var C = o(780549);
            var m = o(103440);
            var _ = o(263079);
            var v = n(o(908081));
            var x = n(o(324093));
            var S = o(568550);
            var b = o(626194);
            var P = o(114850);
            var y = n(o(213393));
            var T = n(o(819543));
            var j = o(932523);
            var k = o(324480);
            var E = o(77548);
            var I = n(o(791724));
            var O = o(366179);
            var L = n(o(557575));
            var A = n(o(237375));
            var w = o(530485);
            var M = o(694630);
            var R = o(956113);
            var N = o(163139);
            var D = o(180519);
            var B = o(459857);
            var H = o(887222);
            var W = o(548360);
            var F = o(667294);
            var U = n(o(156720));
            var V = n(o(969651));
            var z = n(o(637660));
            var G = o(808446);
            var q = o(655241);
            var Y = n(o(895851));
            var K = o(785893);
            const Z = {
                availabilityBanner: {
                    display: "p357zi0d",
                    paddingTop: "a71rq12o",
                    paddingEnd: "bcymb0na",
                    paddingBottom: "pcbmd69e",
                    paddingStart: "e8k79tju",
                    marginBottom: "mpdn4nr2",
                    lineHeight: "r5qsrrlp",
                    backgroundColor: "ronsgs3n"
                },
                text: {
                    marginTop: "tt8xd2xn",
                    marginEnd: "spjzgwxb",
                    marginBottom: "mpdn4nr2",
                    marginStart: "a3oefunm",
                    fontWeight: "hnx8ox4h"
                },
                loadingText: {
                    color: "evzurl1e"
                },
                loadingContainer: {
                    position: "lhggkp7q",
                    zIndex: "nbczt5ty",
                    boxSizing: "cm280p3y",
                    display: "p357zi0d",
                    alignItems: "gndfcl4n",
                    justifyContent: "ac2vgrno",
                    width: "ln8gz9je",
                    paddingTop: "fbgy3m38",
                    paddingEnd: "ft2m32mm",
                    paddingBottom: "oq31bsqd",
                    paddingStart: "nu34rnf1",
                    background: "kqm7f4gm",
                    boxShadow: "g07l9dru",
                    opacity: "bs7a17vp",
                    transitionProperty: "fx1ldmn8",
                    transitionDuration: "grkbsjmy",
                    transitionTimingFunction: "bkifpc9x"
                },
                shiftUp: {
                    position: "lhggkp7q",
                    zIndex: "pcpjcif5",
                    display: "p357zi0d",
                    alignItems: "gndfcl4n",
                    justifyContent: "ac2vgrno",
                    width: "ln8gz9je",
                    paddingTop: "fbgy3m38",
                    paddingEnd: "ft2m32mm",
                    paddingBottom: "oq31bsqd",
                    paddingStart: "nu34rnf1",
                    background: "kqm7f4gm",
                    boxShadow: "g07l9dru",
                    transitionProperty: "fx1ldmn8",
                    transitionDuration: "pa888v5w",
                    transitionTimingFunction: "bkifpc9x",
                    transform: "sihoqmp4"
                },
                body: {
                    flex: "kk3akd72",
                    paddingBottom: "s9fl9ege"
                }
            };

            function Q (e) {
                let t;
                let {
                    productFetchState: o,
                    productCatalogFetchState: n,
                    isAvailable: l
                } = e;
                t = o === "ERROR" ? (0, K.jsx)(D.TextSpan, {
                    className: (0, U.default)(Z.text),
                    theme: "small",
                    color: "danger",
                    children: W.fbt._("Something went wrong", null, {
                        hk: "7C9hw"
                    })
                }) : l ? [(0, K.jsx)(R.Spinner, {
                    size: 14,
                    color: "highlight"
                }, "DetailDrawer-loadingBar-spinner"), (0, K.jsx)(D.TextSpan, {
                    className: (0, U.default)(Z.text, Z.loadingText),
                    theme: "small",
                    children: W.fbt._("Waiting for network", null, {
                        hk: "3I2DtN"
                    })
                }, "DetailDrawer-loadingBar-msg")] : (0, K.jsx)(D.TextSpan, {
                    className: (0, U.default)(Z.text),
                    theme: "small",
                    color: "danger",
                    children: W.fbt._("This product or service has been removed", null, {
                        hk: "3mE1ld"
                    })
                });
                const i = o === "PENDING" || n === "PENDING" || !l;
                return (0, K.jsx)("div", {
                    className: (0, U.default)(i && Z.loadingContainer, !i && Z.shiftUp),
                    children: t
                });
            }

            function X (e) {
                let {
                    menu: t,
                    handleBack: o
                } = e;
                return (0, K.jsx)(b.DrawerHeader, {
                    title: W.fbt._("Details", null, {
                        hk: "1hLRT1"
                    }),
                    onBack: o,
                    type: b.DRAWER_HEADER_TYPE.SMALL,
                    menu: t
                });
            }

            function J (e, t) {
                var o;
                const {
                    collectionId: n,
                    onCartClick: b,
                    onProductLinkClick: R,
                    onProductMoreInformation: D,
                    onBack: J,
                    onProductCatalog: $,
                    onProductDetail: ee,
                    refreshCarousel: te,
                    chat: oe,
                    isPushed: ne = true
                } = e;
                const le = (0, V.default)();
                const ie = (0, Y.default)();
                const ae = (0, F.useContext)(S.DrawerContext);
                const re = (0, q.useModelValues)(e.product, ["id", "catalogWid", "productImageCollection", "fetchedFromServer", "name", "availability", "reviewStatus"]);
                const [se, ce] = (0, F.useState)(null);
                const [de, ue] = (0, F.useState)(false);
                const [fe, pe] = (0, F.useState)(null);
                const [he, ge] = (0, F.useState)("NONE");
                const [Ce, me] = (0, F.useState)("NONE");
                const _e = (0, z.default)(() => p.CartCollection.findCart(re.catalogWid.toString()));
                (0, G.useListener)(_e.current, "change:cartItemCollection", le);
                const ve = () => {
                    if (J) {
                        return J();
                    }
                };
                const xe = () => {
                    const e = re.catalogWid;
                    const t = re.id.toString();
                    return h.CatalogCollection.findProduct({
                        catalogWid: e,
                        productId: t,
                        productMsgMediaData: (0, N.unproxy)(re).productMsgMediaData,
                        canLogQpl: ne
                    });
                };
                const Se = () => {
                    const e = re.catalogWid;
                    const t = xe();
                    const o = u.BusinessProfileCollection.find(e);
                    let n = true;
                    return Promise.all([o, t]).then(e => {
                        let [t] = e;
                        if (ie.aborted) {
                            throw new l.AbortError();
                        }
                        n = false;
                        if (ne) {
                            (0, H.qplEndProductView)(a.QuickLogActionType.SUCCESS);
                        }
                        ce(t);
                        ge("SUCCESS");
                        return t;
                    }).then(e => {
                        me(t => {
                            if (t === "PENDING") {
                                if (!(0, f.hasCatalog)(e)) {
                                    return "NONE";
                                }
                                (() => {
                                    const e = re.catalogWid;
                                    h.CatalogCollection.findCarouselCatalog(e).then(e => {
                                        if (ie.aborted) {
                                            return;
                                        }
                                        const t = Array.isArray(e) ? e[0] : e;
                                        pe(t || null);
                                        me(t ? "SUCCESS" : "NONE");
                                    }).catch((0, i.filteredCatch)(s.ServerStatusCodeError, e => {
                                        if (e.status === "not_found" || e.status === 404) {
                                            pe(null);
                                            me("NOT_FOUND");
                                        } else {
                                            pe(null);
                                            me("ERROR");
                                            __LOG__(3)`Failed to fetch product catalog from server`;
                                        }
                                    }));
                                })();
                            }
                            return t;
                        });
                    }).catch((0, l.catchAbort)(() => {})).catch((0, i.filteredCatch)(s.E404, () => {
                        ve();
                        P.ModalManager.open((0, K.jsx)(m.ConfirmPopup, {
                            onOK: () => {
                                P.ModalManager.close();
                            },
                            okText: W.fbt._("OK", null, {
                                hk: "4oTrfy"
                            }),
                            children: W.fbt._("This product or service has been removed", null, {
                                hk: "3mE1ld"
                            })
                        }));
                        ge("NOT_FOUND");
                        n = false;
                        (0, H.qplDropProductView)();
                    })).catch((0, i.filteredCatch)(s.ServerStatusCodeError, () => {
                        ge("ERROR");
                        __LOG__(3)`Failed to fetch product from server`;
                    })).finally(() => {
                        if (ne && n) {
                            (0, H.qplEndProductView)(a.QuickLogActionType.FAIL);
                        }
                    });
                };
                (0, F.useEffect)(() => {
                    if ((0, c.commerceThreadsLoggingEnabled)() && oe) {
                        (0, g.handleActivitiesForChatThreadLogging)([{
                            activityType: "pdpViews",
                            ts: (0, r.unixTime)(),
                            chatId: oe.id
                        }]);
                    }
                    if (te) {
                        const e = h.CatalogCollection.get(re.catalogWid);
                        if ((e == null ? undefined : e.productCollection) && e.fetchedFromServer) {
                            me("SUCCESS");
                        } else {
                            me("PENDING");
                        }
                    }
                    const e = (0, B.getMaybeMeUser)();
                    if (ne) {
                        (0, H.qplAnnotateProductView)(!(e == null ? undefined : e.equals(re.catalogWid)));
                    }
                    const t = re.catalogWid;
                    const o = re.id.toString();
                    if (t && o) {
                        Se();
                        (0, T.default)(t).then(e => {
                            ue(e);
                            (0, E.logProductDetailView)({
                                product: (0, N.unproxy)(re),
                                catalogContext: (0, j.getProductCatalogContext)(ae),
                                cartToggle: e,
                                collectionId: n
                            });
                        });
                        return () => {
                            const e = re.catalogWid;
                            const t = re.id.toString();
                            if (!e || !t) {
                                return;
                            }
                            const o = h.CatalogCollection.get(e);
                            const n = o && o.msgProductCollection.get(t);
                            if ((n == null ? undefined : n.fetchedFromServer) && o) {
                                o.msgProductCollection.remove(n);
                            }
                        };
                    }
                    (0, H.qplDropProductView)();
                }, []);
                const be = () => {
                    (0, H.qplStartCartView)("Product");
                    if (!(b == null)) {
                        b(re.catalogWid.toString());
                    }
                };
                const Pe = () => {
                    P.ModalManager.open((0, K.jsx)(A.default, {
                        product: re,
                        sessionId: (0, j.getProductCatalogSessionId)(ae)
                    }));
                };
                const ye = () => {
                    (0, E.logProductShareLinkClick)({
                        product: re,
                        catalogContext: (0, j.getProductCatalogContext)(ae)
                    });
                    R(re);
                };
                const Te = function (e) {
                    let t = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1];
                    if ((0, c.commerceThreadsLoggingEnabled)() && oe) {
                        (0, g.handleActivitiesForChatThreadLogging)([{
                            activityType: e,
                            ts: (0, r.unixTime)(),
                            chatId: oe.id,
                            boolValue: t
                        }]);
                    }
                };
                const je = () => {
                    const e = re;
                    const {
                        catalogWid: t
                    } = e;
                    const o = h.CatalogCollection.get(t);
                    if (!o) {
                        return;
                    }
                    const n = o.productCollection.get(e.id);
                    C.Cmd.attachProduct({
                        product: n ? (0, N.unproxy)(n) : (0, N.unproxy)(e)
                    });
                };
                const ke = () => {
                    D(re);
                };
                const Ee = () => he !== "ERROR" && he !== "NOT_FOUND" && !(() => {
                    const {
                        reviewStatus: e
                    } = re;
                    return e === w.PRODUCT_REVIEW_STATUS.REJECTED;
                })();
                const Ie = Ee();
                const Oe = (0, f.hasCatalog)(se);
                const Le = () => {
                    xe().then(() => {
                        const e = h.CatalogCollection.get(re.catalogWid);
                        if (e) {
                            e.stale = true;
                        }
                    });
                };
                let Ae;
                if (Ee()) {
                    Ae = (0, k.getDetailDrawerMenu)({
                        onSendProduct: je,
                        onReportProduct: Pe,
                        onProductLinkClick: ye,
                        onProductMoreInformation: ke,
                        onCartClick: de ? be : undefined,
                        cartCount: _e.current.itemCount,
                        catalogId: re.catalogWid.toString(),
                        contactId: oe == null ? undefined : oe.contact.id
                    });
                }
                return (0, K.jsxs)(v.default, {
                    ref: t,
                    onDrop: ve,
                    theme: "striped",
                    children: [(0, K.jsx)(X, {
                        handleBack: ve,
                        menu: Ae
                    }), (0, K.jsx)(x.default, {
                        children: (0, K.jsxs)("div", {
                            "data-testid": "product-details",
                            className: (0, U.default)(Z.body),
                            children: [(0, K.jsx)(Q, {
                                productFetchState: he,
                                productCatalogFetchState: Ce,
                                isAvailable: Ie
                            }), (0, K.jsx)(L.default, {
                                product: re,
                                isAvailable: Ie,
                                fetching: he === "PENDING"
                            }), M.PRODUCT_AVAILABILITY_UNAVAILABLE_VALUES.includes(re.availability) ? (0, K.jsxs)("div", {
                                className: (0, U.default)(Z.availabilityBanner),
                                children: [re.availability === M.ProductAvailability.OUT_OF_STOCK ? W.fbt._("This item is out of stock.", null, {
                                    hk: "4gOwiz"
                                }) : null, re.availability === M.ProductAvailability.AVAILABLE_FOR_ANOTHER_POSTCODE && (0, _.enablePostcodeInCatalog)() ? (0, K.jsx)(O.ProductPostcodeChangeBanner, {
                                    catalogWid: re.catalogWid,
                                    postcodeChangeSuccess: Le
                                }) : null]
                            }) : null, (0, K.jsx)(I.default, {
                                product: re,
                                collectionId: n,
                                onSendChat: () => {
                                    const e = h.CatalogCollection.get(re.catalogWid);
                                    (0, d.sendProductToChat)(re, e, (0, j.getProductCatalogContext)(ae));
                                    Te("isCtaOnPdpClicked");
                                    (0, E.logProductMessageBusinessClick)(re, (0, j.getProductCatalogContext)(ae));
                                },
                                onAddToCart: () => {
                                    Te("isCartAddClicked");
                                },
                                isAvailable: Ie,
                                hideRetailerID: (o = e.chat) === null || o === undefined ? undefined : o.contact.isEnterprise
                            }), Oe && fe ? (0, K.jsx)(y.default, {
                                catalog: fe,
                                onProductCatalog: () => {
                                    if ($) {
                                        $(re.catalogWid, (0, j.getProductCatalogContext)(ae));
                                    }
                                },
                                onProductDetail: e => {
                                    (0, H.qplStartProductView)("Product");
                                    if (ee) {
                                        return ee(e);
                                    }
                                },
                                filterProductId: re.id.toString(),
                                title: W.fbt._("More", null, {
                                    hk: "2A3GqV"
                                }),
                                animation: false
                            }) : null]
                        })
                    })]
                }, "product-details-drawer");
            }
            var $ = (0, F.forwardRef)(J);
            t.default = $;
        },
        791724: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const {
                    collectionId: t,
                    onSendChat: o,
                    onAddToCart: n,
                    isAvailable: l
                } = e;
                const i = (0, E.useContext)(d.DrawerContext);
                const a = (0, L.useModelValues)(e.product, ["name", "url", "description", "availability", "currency", "priceAmount1000", "salePriceAmount1000", "salePriceStartDate", "salePriceEndDate", "fetchedFromServer", "retailerId", "catalogWid", "productImageCollection", "imageHash", "reviewStatus", "imageCdnUrl", "id", "maxAvailable"]);
                const [r, s] = (0, E.useState)(false);
                const [c, h] = (0, E.useState)(false);
                (0, E.useEffect)(() => {
                    (0, m.default)(a.catalogWid).then(e => {
                        h(e);
                    });
                }, []);
                return (0, A.jsxs)(u.default, {
                    theme: "padding-product",
                    animation: false,
                    children: [(0, A.jsx)(j.TextDiv, {
                        theme: "title",
                        className: (0, I.default)(R.name),
                        children: (0, A.jsx)(f.EmojiText, {
                            text: a.name,
                            selectable: true
                        })
                    }), a.priceAmount1000 != null ? (0, A.jsx)(j.TextDiv, {
                        className: (0, I.default)(R.price),
                        color: "dark",
                        theme: "plain",
                        children: (0, A.jsx)(x.default, {
                            product: a,
                            selectable: true,
                            direction: "inherit"
                        })
                    }) : null, (0, A.jsx)(H, {
                        product: a,
                        isAvailable: l,
                        isDescExpanded: r,
                        hideRetailerID: e.hideRetailerID,
                        onReadMore: () => {
                            s(true);
                        },
                        onClickUrl: (e, t) => {
                            e.stopPropagation();
                            (0, v.logDetailLinkClick)({
                                product: (0, T.unproxy)(a),
                                catalogContext: (0, _.getProductCatalogContext)(i)
                            });
                            const o = t && g.findLink(t);
                            if (o) {
                                (0, p.openExternalLink)(o.url);
                            }
                        }
                    }), (0, A.jsx)(N, {
                        onSendChat: () => {
                            if (!(o == null)) {
                                o();
                            }
                        },
                        isAvailable: l,
                        product: a
                    }), (0, A.jsx)(D, {
                        collectionId: t,
                        cartEnabled: c,
                        isAvailable: l,
                        product: a,
                        onClick: e => {
                            y.QPL.markerStart(P.QuickLogMarkerId.WHATSAPP_CART_ADD, {
                                annotations: {
                                    string: {
                                        EntryPoint: "Product"
                                    }
                                }
                            });
                            (0, C.addToCart)(a, (0, _.getProductCatalogContext)(i), t);
                            if (!(n == null)) {
                                n();
                            }
                            e.stopPropagation();
                        },
                        context: i
                    })]
                });
            };
            var l = n(o(327820));
            var i = o(72696);
            var a = n(o(539925));
            var r = n(o(692629));
            var s = n(o(894138));
            var c = n(o(846870));
            var d = o(568550);
            var u = n(o(969358));
            var f = o(305521);
            var p = o(753233);
            var h = M(o(675886));
            var g = M(o(446303));
            var C = o(758121);
            var m = n(o(819543));
            var _ = o(932523);
            var v = o(77548);
            var x = n(o(269261));
            var S = o(530485);
            var b = o(694630);
            var P = o(316348);
            var y = o(555622);
            var T = o(163139);
            var j = o(180519);
            var k = o(548360);
            var E = o(667294);
            var I = n(o(156720));
            var O = n(o(478636));
            var L = o(655241);
            var A = o(785893);

            function w (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var o = new WeakMap();
                return (w = function (e) {
                    if (e) {
                        return o;
                    } else {
                        return t;
                    }
                })(e);
            }

            function M (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var o = w(t);
                if (o && o.has(e)) {
                    return o.get(e);
                }
                var n = {};
                var l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var i in e) {
                    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
                        var a = l ? Object.getOwnPropertyDescriptor(e, i) : null;
                        if (a && (a.get || a.set)) {
                            Object.defineProperty(n, i, a);
                        } else {
                            n[i] = e[i];
                        }
                    }
                }
                n.default = e;
                if (o) {
                    o.set(e, n);
                }
                return n;
            }
            const R = {
                addToCartIconDisabled: {
                    color: "baku5n5n",
                    ":hover": {
                        color: "k3zau70k"
                    }
                },
                addToCartIcon: {
                    color: "o2v2jkg7",
                    ":hover": {
                        color: "oehg7oif"
                    }
                },
                addToCartBtnHoverIcon: {
                    color: "jk96mlgm",
                    ":hover": {
                        color: "dul83ws3"
                    }
                },
                buttonContainer: {
                    display: "p357zi0d",
                    marginBottom: "or9x5nie",
                    textAlign: "qfejxiq4"
                },
                addToCartContainer: {
                    display: "p357zi0d",
                    alignItems: "gndfcl4n",
                    justifyItems: "g3ty6e9x"
                },
                addToCartContainerWithIcon: {
                    marginTop: "kv6wexeh",
                    marginEnd: "jnwc1y2a",
                    marginBottom: "rkx9gk34",
                    marginStart: "svoq16ka"
                },
                more: {
                    color: "o0rubyzf"
                },
                description: {
                    marginBottom: "du8bjn1j",
                    overflowX: "gfz4du6o",
                    overflowY: "r7fjleex",
                    wordWrap: "b6f1x6w7"
                },
                name: {
                    marginBottom: "t4zgqcuo",
                    fontWeight: "hnx8ox4h",
                    wordWrap: "b6f1x6w7"
                },
                price: {
                    marginBottom: "t4zgqcuo"
                },
                quantityControls: {
                    justifyContent: "ac2vgrno",
                    marginTop: "kmqqq083",
                    marginBottom: "mpdn4nr2"
                }
            };

            function N (e) {
                let {
                    onSendChat: t,
                    isAvailable: o,
                    product: n
                } = e;
                if (!t || !n.fetchedFromServer || !o || n.reviewStatus !== S.PRODUCT_REVIEW_STATUS.APPROVED) {
                    return null;
                }
                const l = k.fbt._("Message Business", null, {
                    hk: "3jgAJS"
                });
                return (0, A.jsx)("div", {
                    className: (0, I.default)(R.buttonContainer),
                    title: l,
                    children: (0, A.jsx)(r.default, {
                        testid: "product-message-business-btn",
                        onClick: t,
                        type: "secondary",
                        stretch: true,
                        children: l
                    })
                });
            }

            function D (e) {
                let {
                    cartEnabled: t,
                    isAvailable: o,
                    product: n,
                    onClick: c,
                    context: d,
                    collectionId: u
                } = e;
                const {
                    isHovered: f,
                    onMouseEnter: p,
                    onMouseLeave: h
                } = (0, O.default)();
                if (!t || !n.fetchedFromServer || !o || n.reviewStatus !== S.PRODUCT_REVIEW_STATUS.APPROVED) {
                    return null;
                }
                const g = (0, i.isQuantityControlsFeatureEnabled)();
                const C = k.fbt._("Add to cart", null, {
                    hk: "2qbS08"
                });
                const m = b.PRODUCT_AVAILABILITY_UNAVAILABLE_VALUES.includes(n.availability);
                let _ = null;
                _ = m ? R.addToCartIconDisabled : f ? R.addToCartBtnHoverIcon : R.addToCartIcon;
                const v = (0, a.default)(n.id, n.catalogWid);
                const x = g ? null : (0, A.jsx)(l.default, {
                    colorXStyle: _
                });
                const P = g && v > 0 ? (0, A.jsx)(s.default, {
                    product: n,
                    context: d,
                    collectionId: u || ""
                }) : (0, A.jsx)(r.default, {
                    testid: "add-to-cart-btn",
                    onClick: c,
                    type: "secondary",
                    disabled: m,
                    stretch: true,
                    children: (0, A.jsxs)("span", {
                        className: (0, I.default)(R.addToCartContainer, x && R.addToCartContainerWithIcon),
                        children: [x, C]
                    })
                });
                return (0, A.jsx)("div", {
                    className: (0, I.default)(R.buttonContainer, g && R.quantityControls),
                    title: C,
                    onMouseEnter: p,
                    onMouseLeave: h,
                    children: P
                });
            }

            function B (e) {
                let {
                    isAvailable: t,
                    product: o,
                    onClick: n
                } = e;
                const {
                    url: l
                } = o;
                if (!o.fetchedFromServer || !l || !t) {
                    return null;
                }
                const i = h.TrustedGroupDesc({
                    links: g.findLinks(l)
                });
                return (0, A.jsx)("div", {
                    children: (0, A.jsx)(f.EmojiText, {
                        selectable: true,
                        formatters: i,
                        text: l,
                        onClick: e => n(e, l)
                    })
                });
            }

            function H (e) {
                let {
                    product: t,
                    isAvailable: o,
                    isDescExpanded: n,
                    hideRetailerID: l,
                    onReadMore: i,
                    onClickUrl: a
                } = e;
                if (!t.description && !t.url && !t.retailerId) {
                    return null;
                }
                const r = !!t.description && t.description.length > c.default.GROUP_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH;
                let s;
                if (t.description) {
                    s = (0, A.jsxs)("div", {
                        children: [(0, A.jsx)(f.EmojiText, {
                            selectable: true,
                            multiline: true,
                            text: t.description,
                            textLimit: n ? 1 / 0 : c.default.GROUP_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH
                        }), r && !n ? (0, A.jsxs)("span", {
                            className: (0, I.default)(R.more),
                            role: "button",
                            onClick: i,
                            children: [" ", k.fbt._("Read more", null, {
                                hk: "2DvSvh"
                            })]
                        }) : null]
                    });
                }
                return (0, A.jsxs)(j.TextDiv, {
                    theme: "plain",
                    className: (0, I.default)(R.description),
                    children: [s, (0, A.jsx)(B, {
                        isAvailable: o,
                        product: t,
                        onClick: a
                    }), t.retailerId && !l ? (0, A.jsx)("div", {
                        children: (0, A.jsx)(f.EmojiText, {
                            text: t.retailerId,
                            selectable: true,
                            direction: "inherit"
                        })
                    }) : null]
                });
            }
        },
        632289: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = undefined;
            var l = n(o(534885));
            var i = n(o(688023));
            var a = o(22323);
            var r = n(o(170206));
            var s = o(780549);
            var c = n(o(745699));
            var d = n(o(908081));
            var u = n(o(324093));
            var f = o(568550);
            var p = o(626194);
            var h = o(305521);
            var g = o(114850);
            var C = o(932523);
            var m = n(o(244381));
            var _ = o(77548);
            var v = o(493770);
            var x = n(o(338931));
            var S = o(163139);
            var b = n(o(886480));
            var P = o(548360);
            var y = n(o(261294));
            var T = o(667294);
            var j = o(785893);
            const k = "product-link-anchor";

            function E (e) {
                const t = e.getProductImageCollectionHead();
                if (t) {
                    return (0, j.jsx)(v.ProductThumb, {
                        className: (0, y.default)(b.default.productImage, b.default.productImageContainer),
                        mediaData: t.mediaData
                    });
                } else {
                    return (0, j.jsx)(v.ProductThumbPlaceholder, {
                        className: (0, y.default)(b.default.productThumb, b.default.productThumbContainer)
                    });
                }
            }

            function I (e, t) {
                const {
                    onBack: o,
                    onCancel: n,
                    product: v,
                    prompt: y,
                    centerDrawer: I,
                    sendProductMsg: O,
                    onSend: L
                } = e;
                const A = (0, T.useContext)(f.DrawerContext);
                const w = () => {
                    g.ModalManager.open((0, j.jsx)(i.default, {
                        product: v,
                        onSend: L
                    }), {
                        transition: "modal-flow"
                    });
                    (0, _.logShareProductViaWALinkClick)({
                        product: v,
                        catalogContext: (0, C.getProductCatalogContext)(A)
                    });
                };
                const M = () => {
                    s.Cmd.attachProduct({
                        product: (0, S.unproxy)(v),
                        onSend: L
                    });
                };
                const R = (0, a.createProductLink)(v.catalogWid.user, v.id.toString());
                let N;
                let D;
                let B;
                if (I) {
                    N = "labels";
                    D = "center-column";
                }
                B = O != null ? (0, j.jsx)(l.default, {
                    onClick: M
                }) : (0, j.jsx)(x.default, {
                    onClick: w
                });
                return (0, j.jsxs)(d.default, {
                    ref: t,
                    theme: N,
                    children: [(0, j.jsx)(p.DrawerHeader, {
                        testid: "product-link-title",
                        title: P.fbt._("Product link", null, {
                            hk: "1RIlvV"
                        }),
                        onBack: o,
                        onCancel: n,
                        type: p.DRAWER_HEADER_TYPE.SMALL,
                        focusBackOrCancel: true
                    }), (0, j.jsxs)(u.default, {
                        theme: D,
                        children: [(0, j.jsx)("div", {
                            className: b.default.prompt,
                            children: y
                        }), (0, j.jsx)(r.default, {
                            image: E(v),
                            primary: (0, j.jsx)(h.EmojiText, {
                                text: v.name,
                                direction: "auto"
                            }),
                            theme: "identity",
                            secondary: (0, j.jsx)(m.default, {
                                id: k,
                                href: R,
                                onClick: e => {
                                    e.preventDefault();
                                    w();
                                },
                                noHandle: true
                            })
                        }), B, (0, j.jsx)(c.default, {
                            elementId: k,
                            onClick: () => {
                                (0, _.logShareProductCopyLinkClick)({
                                    product: v,
                                    catalogContext: (0, C.getProductCatalogContext)(A)
                                });
                            }
                        })]
                    })]
                }, "product-link-drawer");
            }
            var O = (0, T.forwardRef)(I);
            t.default = O;
        },
        559016: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ProductListDrawer = undefined;
            var l = o(122583);
            var i = o(724976);
            var a = o(287461);
            var r = o(984330);
            var s = o(290895);
            var c = o(713464);
            var d = o(263755);
            var u = n(o(908081));
            var f = n(o(324093));
            var p = o(568550);
            var h = o(626194);
            var g = o(664149);
            var C = o(675085);
            var m = n(o(570834));
            var _ = n(o(495012));
            var v = o(914368);
            var x = n(o(932325));
            var S = n(o(468601));
            var b = o(526795);
            var P = o(784424);
            var y = n(o(786399));
            var T = o(899841);
            var j = n(o(819543));
            var k = o(932523);
            var E = o(227604);
            var I = n(o(568414));
            var O = n(o(500210));
            var L = n(o(525897));
            var A = o(77548);
            var w = n(o(944045));
            var M = o(548360);
            var R = o(667294);
            var N = n(o(156720));
            var D = n(o(710629));
            var B = n(o(969651));
            var H = n(o(637660));
            var W = o(808446);
            var F = o(655241);
            var U = n(o(286481));
            var V = n(o(895851));
            var z = o(785893);
            const G = {
                header: {
                    flex: "kk3akd72"
                },
                list: {
                    flex: "kk3akd72",
                    paddingBottom: "oq31bsqd",
                    overflowX: "gfz4du6o",
                    overflowY: "r7fjleex"
                },
                listMarginTop: {
                    marginTop: "dj1c3cmq"
                }
            };

            function q (e) {
                let t;
                let {
                    canManageCatalog: o,
                    onAddProduct: n,
                    businessProfile: l,
                    contact: i,
                    productCatalogList: a,
                    loadingMore: r
                } = e;
                if (o && n) {
                    t = (0, z.jsx)(S.default, {
                        onClick: () => n(),
                        theme: "in-list",
                        testid: "add-item"
                    });
                }
                return (0, z.jsxs)(z.Fragment, {
                    children: [l && (0, z.jsx)("div", {
                        "data-testid": "catalog-header",
                        className: (0, N.default)(G.header),
                        children: (0, z.jsx)(w.default, {
                            profilePicThumb: i.getProfilePicThumb(),
                            contact: i,
                            businessProfile: l
                        })
                    }), (0, z.jsxs)("div", {
                        "data-testid": "catalog-items",
                        className: (0, N.default)(G.list, l && G.listMarginTop),
                        children: [t, a, r && (0, z.jsx)(_.default, {})]
                    })]
                });
            }
            const Y = (0, R.forwardRef)((e, t) => {
                const {
                    catalogId: o,
                    canManageCatalog: n,
                    setScrollOffset: _,
                    onCartClick: S,
                    onCatalogLinkClick: w,
                    autoUpdate: N = false,
                    businessProfile: G,
                    onAddProduct: Y,
                    onProductDetail: K,
                    onProductShare: Z,
                    headerType: Q,
                    onOpenSettings: X,
                    blockCartInterstitialFn: J = () => false
                } = e;
                const $ = (0, V.default)();
                const ee = (0, R.useContext)(p.DrawerContext);
                const te = (0, B.default)();
                const oe = (0, D.default)(te, 100);
                const ne = (0, F.useModelValues)(e.contact, ["id"]);
                const le = (0, H.default)(() => new m.default());
                const ie = () => {
                    const e = c.CatalogCollection.get(o);
                    if (!e || e.stale) {
                        return null;
                    } else {
                        return e;
                    }
                };
                const ae = (0, R.useMemo)(() => s.CartCollection.findCart(ne.id.toString()), [ne.id]);
                const [re, se] = (0, R.useState)(false);
                const [ce, de] = (0, R.useState)(0);
                const [ue, fe] = (0, R.useState)(false);
                const [pe, he] = (0, R.useState)(false);
                const [ge, Ce] = (0, R.useState)(ie);
                const [me, _e] = (0, R.useState)(() => ae.itemCount);
                const [ve, xe] = (0, R.useState)(() => ie() ? "SUCCESS" : "NONE");
                (0, W.useListener)(ae, "all", () => {
                    const e = ae.itemCount;
                    if (me !== e) {
                        _e(e);
                    }
                });
                const Se = () => {
                    if (ue) {
                        return;
                    }
                    const e = c.CatalogCollection.assertGet(o);
                    if (!e.afterCursor) {
                        return;
                    }
                    const t = e.productCollection.getProductModels().length;
                    se(true);
                    de(t);
                    c.CatalogCollection.update(o).then(e => {
                        if ($.aborted) {
                            return;
                        }
                        se(false);
                        if ((Array.isArray(e) ? e[0] : e).productCollection.getProductModels().length === ce) {
                            fe(true);
                        }
                        if (t * T.PRODUCT_LIST_ITEM_HEIGHT < window.innerHeight) {
                            Se();
                        }
                    }).catch(() => {
                        se(false);
                        fe(true);
                    });
                };
                const be = (0, D.default)(() => {
                    var t;
                    if (!((t = e.onRemoveProduct) === null || t === undefined)) {
                        t.call(e);
                    }
                    te();
                }, 100);
                const Pe = N ? ge == null ? undefined : ge.productCollection : null;
                (0, W.useListener)(Pe, "add", oe);
                (0, W.useListener)(Pe, "remove", be);
                (0, R.useEffect)(() => {
                    if (ge) {
                        Se();
                    } else {
                        c.CatalogCollection.find(o).then(e => {
                            Ce(e);
                            xe("SUCCESS");
                            Se();
                        }).catch((0, l.filteredCatch)(r.ServerStatusCodeError, e => {
                            if (!(e.status !== 403 && e.status !== 404)) {
                                Ce(null);
                                xe("NOT_FOUND");
                            }
                        })).catch(e => {
                            (0, E.parseErrorState)(e, e => xe(e));
                        });
                    }
                    (0, j.default)(o).then(e => {
                        he(e);
                        (0, A.logCatalogListView)({
                            catalogOwnerWid: o,
                            catalogContext: (0, k.getProductCatalogContext)(ee),
                            cartToggle: e
                        });
                        if (n && pe && !J() && (0, a.getABPropConfigValue)("web_abprop_nux_cart_interstitial")) {
                            (0, y.default)();
                        }
                    });
                }, []);
                const ye = (0, U.default)(e => {
                    if (!re) {
                        if (e.scrollTop + v.SCROLL_FUDGE > e.scrollHeight - e.clientHeight) {
                            Se();
                        }
                    }
                }, 100);
                const Te = () => {
                    if (!(S == null)) {
                        S(ne.id.toString());
                    }
                };
                const je = pe && S ? Te : undefined;
                const ke = ge ? (0, z.jsx)(q, {
                    canManageCatalog: n,
                    onAddProduct: Y,
                    businessProfile: G,
                    contact: ne,
                    loadingMore: re,
                    productCatalogList: (0, z.jsx)(L.default, {
                        onCartOpen: je,
                        onProductDetail: K,
                        flatListController: le.current,
                        catalog: ge,
                        canManageCatalog: n,
                        shareLinks: n,
                        onProductShare: Z
                    })
                }) : (0, z.jsx)(I.default, {
                    fetchState: ve
                });
                const Ee = function (e) {
                    let {
                        canManageCatalog: t,
                        onOpenSettings: o,
                        headerType: n,
                        onCartClick: l,
                        catalogId: a,
                        handleCatalogLinkClick: r,
                        handleCartClick: s,
                        cartEnabled: c,
                        cartCount: u
                    } = e;
                    const f = t ? (0, z.jsx)(b.MenuBarItem, {
                        testid: "menu-bar-menu",
                        icon: (0, z.jsx)(P.MenuIcon, {}),
                        title: x.default.t(430),
                        children: (0, z.jsxs)(g.Dropdown, {
                            type: g.MenuType.DropdownMenu,
                            flipOnRTL: true,
                            dirX: g.DirX.LEFT,
                            children: [(0, z.jsx)(C.DropdownItem, {
                                testid: "mi-foward menu-item",
                                action: r,
                                children: x.default.t(311)
                            }), o && (0, z.jsx)(C.DropdownItem, {
                                testid: "mi-settings menu-item",
                                action: o,
                                children: M.fbt._("Settings", null, {
                                    hk: "2RmHUB"
                                })
                            })]
                        }, "CatalogDetailHeader")
                    }) : (0, z.jsx)(b.MenuBarItem, {
                        testid: "menu-bar-catalog-link",
                        icon: (0, z.jsx)(O.default, {
                            theme: n === h.DRAWER_HEADER_TYPE.LARGE ? "inherit-color" : null
                        }),
                        title: M.fbt._("Catalog link", null, {
                            hk: "M36Dw"
                        }),
                        onClick: r
                    });
                    return [c && l ? (0, z.jsx)(d.CartIconMenuBarItem, {
                        cartIconTheme: n === h.DRAWER_HEADER_TYPE.LARGE ? "inherit-color" : null,
                        cartCountText: (0, i.isNumber)(u) && u > 0 ? u.toString() : undefined,
                        onClick: s,
                        catalogOwnerJid: a.toString()
                    }) : null, f];
                }({
                    canManageCatalog: n,
                    handleCatalogLinkClick: () => {
                        if (ge) {
                            w(ge, ne);
                            (0, A.logCatalogShareLinkClick)({
                                catalogOwnerWid: o,
                                catalogContext: (0, k.getProductCatalogContext)(ee)
                            });
                        }
                    },
                    onOpenSettings: X,
                    headerType: Q,
                    cartEnabled: pe,
                    onCartClick: S,
                    cartCount: me,
                    handleCartClick: Te,
                    catalogId: o
                });
                return (0, z.jsxs)(u.default, {
                    ref: t,
                    theme: "products",
                    onDrop: e.onBack,
                    children: [(0, z.jsx)(h.DrawerHeader, {
                        title: M.fbt._("Catalog", null, {
                            hk: "3YVOSV"
                        }),
                        type: e.headerType || h.DRAWER_HEADER_TYPE.SMALL,
                        onBack: e.onBack,
                        menu: Ee,
                        focusBackOrCancel: true
                    }), (0, z.jsx)(f.default, {
                        onScroll: e => {
                            var t;
                            var o;
                            if (e.currentTarget) {
                                ye(e.currentTarget);
                            }
                            if (!(_ == null)) {
                                _((t = (o = e.currentTarget) === null || o === undefined ? undefined : o.scrollTop) !== null && t !== undefined ? t : 0);
                            }
                        },
                        flatListControllers: [le.current],
                        scrollOffset: e.scrollOffset,
                        children: ke
                    })]
                });
            });
            t.ProductListDrawer = Y;
            Y.displayName = "ProductListDrawer";
        },
        944045: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const {
                    profilePicThumb: t,
                    contact: o,
                    businessProfile: n
                } = e;
                return (0, d.jsxs)("div", {
                    className: s.default.header,
                    "data-testid": "product-list-header",
                    children: [(0, d.jsx)(f, {
                        profilePicThumb: t,
                        contact: o
                    }), (0, d.jsxs)("div", {
                        className: s.default.text,
                        children: [(0, d.jsx)(r.TextDiv, {
                            className: s.default.name,
                            theme: "large",
                            children: (0, d.jsx)(a.Name, {
                                contact: o,
                                selectable: true,
                                useVerifiedName: true
                            })
                        }), (0, d.jsx)(u, {
                            businessProfile: n
                        })]
                    })]
                });
            };
            var l = o(23641);
            var i = o(305521);
            var a = o(21645);
            var r = o(180519);
            var s = n(o(345697));
            var c = o(655241);
            var d = o(785893);

            function u (e) {
                const t = (0, c.useOptionalModelValues)(e.businessProfile, ["description"]);
                if (t && t.description) {
                    return (0, d.jsx)("div", {
                        className: s.default.description,
                        children: (0, d.jsx)(i.EmojiText, {
                            text: t.description,
                            direction: "auto",
                            selectable: true,
                            titlify: true
                        })
                    });
                } else {
                    return null;
                }
            }

            function f (e) {
                const t = (0, c.useOptionalModelValues)(e.profilePicThumb, ["imgFull"]);
                const o = (0, c.useModelValues)(e.contact, ["id", "isMe"]);
                if (!t) {
                    return null;
                }
                const n = (0, d.jsx)(l.DefaultIcon, {
                    id: o.id
                });
                return (0, d.jsx)("div", {
                    className: s.default.photo,
                    children: (0, d.jsx)(l.DetailImageCommon, {
                        profilePicThumb: t,
                        loader: true,
                        defaultIcon: n,
                        profilePicThumbImg: t.imgFull,
                        spinnerClassName: s.default.spinner,
                        imgClassName: s.default.img,
                        theme: "business"
                    })
                });
            }
        },
        898707: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = undefined;
            var l = n(o(81109));
            var i = n(o(348926));
            var a = n(o(670983));
            var r = o(713464);
            var s = o(676594);
            var c = o(87630);
            var d = o(537469);
            var u = n(o(908081));
            var f = n(o(324093));
            var p = o(626194);
            var h = o(163139);
            var g = o(741703);
            var C = o(548360);
            var m = o(667294);
            var _ = n(o(156720));
            var v = o(655241);
            var x = o(785893);
            const S = {
                marginBottom: "ngycyvoj"
            };

            function b (e, t) {
                const {
                    onBack: o
                } = e;
                const n = (0, v.useModelValues)(e.product, ["id", "catalogWid"]);
                const [b, P] = (0, m.useState)({});
                const [y, T] = (0, m.useState)("");
                const [j, k] = (0, m.useState)("");
                const [E, I] = (0, m.useState)(true);
                const O = e => {
                    var t;
                    var o;
                    if (((t = e.complianceInfo) === null || t === undefined ? undefined : t.countryCodeOrigin) === String(g.SyntheticCountryCode.NotApplicable)) {
                        return Promise.resolve((0, x.jsxs)("div", {
                            children: [(0, x.jsx)("div", {
                                className: (0, _.default)(S),
                                children: C.fbt._("Not Applicable", null, {
                                    hk: "2k1klN"
                                })
                            }), (0, x.jsx)("div", {
                                children: C.fbt._("Item is a service or non-physical good", null, {
                                    hk: "3uDBY7"
                                })
                            })]
                        }));
                    } else {
                        return (0, d.getCountryName)((o = e.complianceInfo) === null || o === undefined ? undefined : o.countryCodeOrigin, d.COUNTRY_FILTER_TYPE.META_RECOGNIZED);
                    }
                };
                (0, m.useEffect)(() => {
                    function e () {
                        return (e = (0, i.default)(function* () {
                            yield r.CatalogCollection.findProduct({
                                catalogWid: n.catalogWid,
                                productId: n.id.toString(),
                                productMsgMediaData: (0, h.unproxy)(n).productMsgMediaData,
                                shouldFetchComplianceFields: true
                            });
                            const e = r.CatalogCollection.get(n.catalogWid);
                            const t = (0, a.default)(e, "catalog").productCollection.get(n.id);
                            if (t) {
                                var o;
                                var l;
                                var i;
                                var s;
                                var c;
                                var u;
                                var f;
                                var p;
                                var g;
                                var C;
                                var m;
                                var _;
                                var v;
                                var x;
                                const e = yield O(t);
                                const n = yield(0, d.getCountryName)((o = t.complianceInfo) === null || o === undefined || (l = o.importerAddress) === null || l === undefined ? undefined : l.countryCode, d.COUNTRY_FILTER_TYPE.META_RECOGNIZED);
                                const a = {
                                    importerName: ((i = t.complianceInfo) === null || i === undefined ? undefined : i.importerName) || "",
                                    countryCodeOrigin: ((s = t.complianceInfo) === null || s === undefined ? undefined : s.countryCodeOrigin) || "",
                                    importerAddress: {
                                        street1: ((c = t.complianceInfo) === null || c === undefined || (u = c.importerAddress) === null || u === undefined ? undefined : u.street1) || "",
                                        street2: ((f = t.complianceInfo) === null || f === undefined || (p = f.importerAddress) === null || p === undefined ? undefined : p.street2) || "",
                                        city: ((g = t.complianceInfo) === null || g === undefined || (C = g.importerAddress) === null || C === undefined ? undefined : C.city) || "",
                                        region: ((m = t.complianceInfo) === null || m === undefined || (_ = m.importerAddress) === null || _ === undefined ? undefined : _.region) || "",
                                        postalCode: ((v = t.complianceInfo) === null || v === undefined || (x = v.importerAddress) === null || x === undefined ? undefined : x.postalCode) || ""
                                    }
                                };
                                P(a);
                                I(false);
                                T(e);
                                k(n);
                            } else {
                                __LOG__(3)`Unable to fetch compliance for product: ${n.id}`;
                            }
                        })).apply(this, arguments);
                    }! function () {
                        e.apply(this, arguments);
                    }();
                }, []);
                const L = () => {
                    if (o) {
                        return o();
                    }
                };
                const {
                    countryCodeOrigin: A,
                    importerName: w,
                    importerAddress: M
                } = b;
                return (0, x.jsxs)(u.default, {
                    ref: t,
                    onDrop: L,
                    theme: "striped",
                    children: [(0, x.jsx)(p.DrawerHeader, {
                        testid: "drawer-title-profile",
                        title: C.fbt._("More information", null, {
                            hk: "2JHvi1"
                        }),
                        onBack: L,
                        type: p.DRAWER_HEADER_TYPE.SMALL
                    }), (0, x.jsx)(f.default, {
                        theme: E ? "center-content" : undefined,
                        children: E ? (0, x.jsx)(c.ComplianceInfoLoading, {}) : (0, x.jsxs)(c.ComplianceInfoGroup, {
                            children: [(0, x.jsx)(c.ComplianceInfoPrimitiveField, {
                                value: y,
                                label: C.fbt._("Country of Origin", null, {
                                    hk: "2yl0F7"
                                })
                            }), A && ![s.COMPLIANCE_INFO_CODES.INDIA, g.SyntheticCountryCode.NotApplicable].includes(A) ? (0, x.jsxs)(x.Fragment, {
                                children: [(0, x.jsx)(c.ComplianceInfoPrimitiveField, {
                                    value: w,
                                    label: C.fbt._("Name of Importer", null, {
                                        hk: "3gfW35"
                                    })
                                }), (0, x.jsx)(c.ComplianceInfoStructuralField, {
                                    valuesMap: (0, l.default)({
                                        importerAddressCountryNameOrigin: j
                                    }, M),
                                    keys: ["street1", "street2", "city", "region", "postalCode", "importerAddressCountryNameOrigin"],
                                    label: C.fbt._("Address of Importer", null, {
                                        hk: "Kxo8I"
                                    })
                                })]
                            }) : null]
                        })
                    })]
                }, "product-details-drawer");
            }
            var P = (0, m.forwardRef)(b);
            t.default = P;
        },
        366179: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ProductPostcodeChangeBanner = function (e) {
                const {
                    catalogWid: t,
                    postcodeChangeSuccess: o
                } = e;
                const [n, a] = (0, d.useState)(null);
                const {
                    value: r,
                    set: s
                } = (0, u.default)(true);
                const c = (0, p.default)();
                (0, d.useEffect)(() => {
                    (function () {
                        var e = (0, l.default)(function* () {
                            try {
                                const e = yield i.default.getCypher(t);
                                if (c.aborted) {
                                    return;
                                }
                                a(e);
                            } catch (e) {
                                __LOG__(4, true, new Error(), true)`[direct-connection] Setting cypher failed in PDP ${e}`;
                                SEND_LOGS("direct-connection-setting-cypher-failed-in-pdp");
                            }
                            if (!c.aborted) {
                                s(false);
                            }
                        });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })()();
                }, [t, s, c]);
                if (r || n == null) {
                    return null;
                }
                return (0, h.jsx)(C, {
                    businessDirectConnection: n,
                    catalogWid: t,
                    postcodeChangeSuccess: o
                });
            };
            var l = n(o(348926));
            var i = n(o(418950));
            var a = n(o(196554));
            var r = o(114850);
            var s = n(o(803209));
            var c = o(548360);
            var d = o(667294);
            var u = n(o(505447));
            var f = o(655241);
            var p = n(o(895851));
            var h = o(785893);

            function g (e) {
                let {
                    catalogWid: t,
                    postcodeChangeSuccess: o,
                    postcode: n
                } = e;
                return (0, h.jsx)(a.default, {
                    onClick: () => {
                        r.ModalManager.open((0, h.jsx)(s.default, {
                            existingPostcode: n,
                            catalogId: t,
                            onCancel: () => r.ModalManager.close(),
                            onSuccess: () => {
                                r.ModalManager.close();
                                o();
                            }
                        }));
                    },
                    children: c.fbt._("Change", null, {
                        hk: "3d8zl4"
                    })
                });
            }

            function C (e) {
                let {
                    businessDirectConnection: t,
                    catalogWid: o,
                    postcodeChangeSuccess: n
                } = e;
                const {
                    postcode: l
                } = (0, f.useModelValues)(t, ["postcode"]);
                if (l == null) {
                    return null;
                } else {
                    return (0, h.jsxs)(h.Fragment, {
                        children: [c.fbt._("Not available in {area-postcode}.", [c.fbt._param("area-postcode", l)], {
                            hk: "4tHAo0"
                        }), " ", (0, h.jsx)(g, {
                            postcode: l,
                            catalogWid: o,
                            postcodeChangeSuccess: n
                        })]
                    });
                }
            }
        },
        557575: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const {
                    isAvailable: t,
                    fetching: o
                } = e;
                const n = (0, d.useContext)(i.DrawerContext);
                const g = (0, f.useModelValues)(e.product, ["productImageCollection", "productMsgMediaData", "catalogWid", "imageCdnUrl"]);
                const C = g.lazyloadProductImageCollection().toArray();
                return (0, p.jsx)("div", {
                    className: (0, u.default)(h),
                    children: (0, p.jsx)(a.default, {
                        images: C,
                        fetching: o,
                        onClick: t ? (e, t) => {
                            (0, s.logDetailImageClick)({
                                product: (0, c.unproxy)(g),
                                catalogContext: (0, r.getProductCatalogContext)(n)
                            });
                            const o = {
                                activeProductImage: t,
                                productImageCollection: g.lazyloadProductImageCollection(),
                                getZoomNode: () => e,
                                product: g
                            };
                            l.Cmd.productImageViewerModal(o, (0, r.getProductCatalogSessionId)(n));
                        } : null,
                        renderFallback: !t,
                        fallbackMediaData: g.productMsgMediaData
                    })
                });
            };
            var l = o(780549);
            var i = o(568550);
            var a = n(o(760157));
            var r = o(932523);
            var s = o(77548);
            var c = o(163139);
            var d = o(667294);
            var u = n(o(156720));
            var f = o(655241);
            var p = o(785893);
            const h = {
                width: "ln8gz9je"
            };
        },
        112155: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = undefined;
            var l = n(o(692629));
            var i = o(81644);
            var a = o(118612);
            var r = o(548360);
            var s = o(667294);
            var c = n(o(156720));
            var d = o(785893);
            const u = {
                display: "p357zi0d",
                flexDirection: "f8m0rgwh"
            };
            const f = {
                marginTop: "qt60bha0"
            };

            function p (e, t) {
                const {
                    onPopupCancel: o,
                    onReport: n
                } = e;
                const s = r.fbt._("Report this product?", null, {
                    hk: "3IDG0p"
                });
                const p = (0, d.jsx)("div", {
                    children: r.fbt._("We will review the product and if it does not meet our guidelines, it will be removed.", null, {
                        hk: "2CRdfl"
                    })
                }, "ReportProductChoicePopup-desc");
                const h = (0, d.jsx)(l.default, {
                    testid: "popup-controls-report",
                    type: "secondary",
                    onClick: () => n(),
                    children: r.fbt._("Report Product", null, {
                        hk: "3XLjyb"
                    })
                }, "ReportProductChoicePopup-reportBtn");
                const g = (0, d.jsx)(l.default, {
                    type: "secondary",
                    onClick: o,
                    children: r.fbt._("Cancel", null, {
                        hk: "H0gNq"
                    })
                }, 0);
                const C = (0, d.jsxs)("div", {
                    className: (0, c.default)(u),
                    children: [(0, d.jsx)("div", {
                        className: (0, c.default)(f),
                        children: h
                    }), (0, d.jsx)("div", {
                        className: (0, c.default)(f),
                        children: g
                    })]
                });
                return (0, d.jsx)(i.HotKeys, {
                    ref: t,
                    handlers: {
                        escape: o
                    },
                    children: (0, d.jsx)(a.Modal, {
                        title: s,
                        actions: C,
                        children: p
                    })
                });
            }
            var h = (0, s.forwardRef)(p);
            t.default = h;
        },
        237375: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = undefined;
            var l = o(15842);
            var i = o(328620);
            var a = o(739071);
            var r = n(o(329982));
            var s = o(77548);
            var c = n(o(112155));
            var d = n(o(484375));
            var u = o(316348);
            var f = o(555622);
            var p = o(163139);
            var h = o(390737);
            var g = o(548360);
            var C = o(785893);
            class m extends r.default {
                constructor() {
                    var e;
                    super(...arguments);
                    e = this;
                    this._submitReason = e => {
                        const {
                            product: t
                        } = this.props;
                        return (0, a.reportProduct)(t.catalogWid, t.id.toString(), e);
                    };
                    this._handleDelete = () => {
                        this.end();
                    };
                    this._handleTellUsMoreSubmit = e => {
                        f.QPL.markerStart(u.QuickLogMarkerId.WHATSAPP_PRODUCT_REPORT);
                        this._handleShowSubmittedToast(e);
                    };
                    this._handleReport = () => {
                        this.push((0, C.jsx)(d.default, {
                            onTellUsMoreSubmit: this._handleTellUsMoreSubmit,
                            onCancel: this._handleCancel
                        }), "none");
                    };
                    this._handlePopupCancel = () => {
                        this.end();
                    };
                    this._handleCancel = () => {
                        this.end();
                    };
                    this._handleReportSubmitted = () => {
                        this.end();
                    };
                    this._handleShowSubmittedToast = function (t) {
                        let o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, i.genId)();
                        const {
                            product: n,
                            sessionId: a
                        } = e.props;
                        const r = e._submitReason(t);
                        const c = new i.ActionType(g.fbt._("Reporting product", null, {
                            hk: "4qusYv"
                        }));
                        const d = r.then(() => {
                            (0, s.logReportProductSuccess)({
                                product: (0, p.unproxy)(n),
                                catalogSessionId: a,
                                reason: t || ""
                            });
                            f.QPL.markerEnd(u.QuickLogMarkerId.WHATSAPP_PRODUCT_REPORT, l.QuickLogActionType.SUCCESS);
                            return new i.ActionType(g.fbt._("Thanks for your feedback", null, {
                                hk: "1vRsPv"
                            }).toString() + ". " + g.fbt._("Your report has now been submitted.", null, {
                                hk: "40tL3T"
                            }).toString());
                        }).catch(() => {
                            (0, s.logReportProductFailure)({
                                product: (0, p.unproxy)(n),
                                catalogSessionId: a,
                                reason: t || ""
                            });
                            f.QPL.markerEnd(u.QuickLogMarkerId.WHATSAPP_PRODUCT_REPORT, l.QuickLogActionType.FAIL);
                            __LOG__(3)`error submitting product report`;
                            return new i.ActionType(g.fbt._("Couldn't report product", null, {
                                hk: "11JN2U"
                            }), {
                                actionText: g.fbt._("Retry", null, {
                                    hk: "2jS9Tg"
                                }),
                                actionHandler: () => e._handleShowSubmittedToast(t, o)
                            });
                        });
                        h.ToastManager.open((0, C.jsx)(i.ActionToast, {
                            id: o,
                            initialAction: c,
                            pendingAction: d
                        }));
                        e._handleReportSubmitted();
                        return r;
                    };
                }
                componentDidMount() {
                    this.push((0, C.jsx)(c.default, {
                        onReport: this._handleReport,
                        onPopupCancel: this._handlePopupCancel,
                        onCancel: this._handleCancel
                    }));
                }
            }
            t.default = m;
        },
        484375: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = undefined;
            var l = n(o(692629));
            var i = o(81644);
            var a = o(118612);
            var r = o(695431);
            var s = o(625786);
            var c = o(390737);
            var d = o(548360);
            var u = o(667294);
            var f = n(o(156720));
            var p = o(785893);
            const h = {
                display: "p357zi0d"
            };
            const g = {
                position: "g0rxnol2",
                flex: "a1m9qzja"
            };
            const C = {
                display: "l7jjieqr"
            };
            const m = ["NO_MATCH", "SPAM", "ILLEGAL", "SCAM", "KNOCKOFF", "OTHER"];

            function _ (e, t) {
                const {
                    onCancel: o,
                    onTellUsMoreSubmit: n
                } = e;
                const [_, x] = (0, u.useState)(null);
                const S = () => {
                    if (!(o == null)) {
                        o();
                    }
                };
                const b = d.fbt._("Tell us more", null, {
                    hk: "2fZHoO"
                });
                const P = (0, p.jsx)("div", {
                    className: (0, f.default)(h),
                    children: (0, p.jsx)("ul", {
                        className: (0, f.default)(g),
                        children: m.map(e => (0, p.jsx)("li", {
                            children: (0, p.jsx)(r.RadioWithLabel, {
                                name: e,
                                value: e,
                                label: (0, p.jsx)(v, {
                                    reason: e
                                }),
                                checked: _ === e,
                                onChange: () => {
                                    x(e);
                                }
                            })
                        }, `ReportProductReasonPopup-${e}-option`))
                    })
                });
                const y = (0, p.jsx)(l.default, {
                    testid: "popup-controls-submit",
                    type: "primary",
                    onClick: () => {
                        if (_) {
                            n(_);
                        } else {
                            c.ToastManager.open((0, p.jsx)(s.Toast, {
                                msg: d.fbt._("Please select a reason.", null, {
                                    hk: "3UgUaa"
                                })
                            }));
                        }
                    },
                    disabled: !_,
                    children: d.fbt._("Submit", null, {
                        hk: "3npRPm"
                    })
                }, "ReportProductReasonPopup-submitButton");
                const T = (0, p.jsx)(l.default, {
                    type: "secondary",
                    testid: "popup-controls-cancel",
                    onClick: S,
                    children: d.fbt._("Cancel", null, {
                        hk: "H0gNq"
                    })
                }, "ReportProductReasonPopup-cancelButton");
                const j = (0, p.jsxs)("div", {
                    className: (0, f.default)(C),
                    children: [T, y]
                });
                return (0, p.jsx)(i.HotKeys, {
                    ref: t,
                    handlers: {
                        escape: S
                    },
                    children: (0, p.jsx)(a.Modal, {
                        title: b,
                        actions: j,
                        children: P
                    })
                });
            }

            function v (e) {
                const {
                    reason: t
                } = e;
                switch (t) {
                    case "NO_MATCH":
                        return d.fbt._("The pictures or descriptions don't match the item", null, {
                            hk: "2ifaot"
                        });
                    case "SPAM":
                        return d.fbt._("This is spam", null, {
                            hk: "hjxQJ"
                        });
                    case "ILLEGAL":
                        return d.fbt._("This is abusive, harmful or illegal", null, {
                            hk: "3xz9jr"
                        });
                    case "SCAM":
                        return d.fbt._("This is fraud or a scam", null, {
                            hk: "2iFRd8"
                        });
                    case "KNOCKOFF":
                        return d.fbt._("This appears to be a knockoff or counterfeit item", null, {
                            hk: "UiFcs"
                        });
                    case "OTHER":
                        return d.fbt._("Other", null, {
                            hk: "1Kn4LY"
                        });
                }
            }
            var x = (0, u.forwardRef)(_);
            t.default = x;
        },
        335748: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                let {
                    isEditMode: t,
                    catalog: o,
                    subtitle: n,
                    hideIncompleteRows: h,
                    productsToShow: g,
                    businessProfile: C
                } = e;
                const m = (0, p.jsx)(i.default, {
                    onViewShopClick: () => {
                        (0, u.logShopsManagementEvent)(f.SHOPS_MANAGEMENT_ACTION.ACTION_CLICK_VIEW_SHOPS_FROM_EDIT_BIZ_PROFILE);
                    },
                    onCommerceManagerClick: () => {
                        (0, u.logShopsManagementEvent)(f.SHOPS_MANAGEMENT_ACTION.ACTION_CLICK_COMMERCE_MANAGER_FROM_EDIT_BIZ_PROFILE);
                    },
                    onCancelClick: () => {
                        (0, u.logShopsManagementEvent)(f.SHOPS_MANAGEMENT_ACTION.ACTION_CLICK_CANCEL_FROM_EDIT_BIZ_PROFILE);
                    }
                });
                return (0, p.jsx)(d.default, {
                    onProductDetail: function (e) {
                        if (t) {
                            s.ModalManager.open(m);
                            (0, u.logShopsManagementEvent)(f.SHOPS_MANAGEMENT_ACTION.ACTION_CLICK_SHOPS_PRODUCT_PREVIEW_TILE, {
                                shouldLogJid: false
                            });
                        } else {
                            const t = new URL((0, l.default)(e.url, "product.url"), `https://${c.HOSTNAME.FACEBOOK}`);
                            r.default.open(String(t));
                        }
                    },
                    onProductCatalog: function () {
                        if (t) {
                            s.ModalManager.open(m);
                            (0, u.logShopsManagementEvent)(f.SHOPS_MANAGEMENT_ACTION.ACTION_CLICK_MANAGE_SHOPS);
                        } else {
                            (0, a.goToShop)(C);
                        }
                    },
                    catalog: o,
                    subtitle: n,
                    hideIncompleteRows: h,
                    productsToShow: g,
                    showShopsLogo: true
                });
            };
            var l = n(o(670983));
            var i = n(o(883393));
            var a = o(542358);
            var r = n(o(524173));
            var s = o(114850);
            var c = o(728);
            var d = n(o(213393));
            var u = o(748483);
            var f = o(130756);
            var p = o(785893);
        },
        491606: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.handleCollectionAppeal = function () {
                return j.apply(this, arguments);
            };
            t.handleCollectionDelete = function (e, t, o) {
                return new Promise((n, l) => {
                    f.ModalManager.open((0, b.jsx)(d.ConfirmPopup, {
                        title: S.fbt._("Delete Collection", null, {
                            hk: "2y3JZ4"
                        }),
                        okText: S.fbt._("OK", null, {
                            hk: "4oTrfy"
                        }),
                        cancelText: S.fbt._("Cancel", null, {
                            hk: "H0gNq"
                        }),
                        onOK: () => {
                            f.ModalManager.close();
                            (function () {
                                return T.apply(this, arguments);
                            })(e, t, o).then(e => n(e)).catch(e => l(e));
                        },
                        onCancel: () => {
                            f.ModalManager.close();
                            n(false);
                        },
                        children: (0, b.jsx)("div", {
                            children: S.fbt._("When you delete this collection, items in the collection will not be deleted.", null, {
                                hk: "192Jcv"
                            })
                        })
                    }));
                });
            };
            t.handleCollectionReorder = function () {
                return I.apply(this, arguments);
            };
            t.handleCollectionSave = function (e, t, o, n, l, i) {
                let a;
                _.QPL.markerPoint(m.QuickLogMarkerId.WHATSAPP_COLLECTION_EDIT, "datasource_start");
                a = t ? (0, C.editCollection)(t.id.toString() || "", o === t.name ? undefined : o, false, n.map(e => e.id.toString()), l.map(e => e.id.toString()), i.session.toString()).then(i => {
                    _.QPL.markerPoint(m.QuickLogMarkerId.WHATSAPP_COLLECTION_EDIT, "datasource_end");
                    t.name = o;
                    t.reviewStatus = i.reviewStatus;
                    e.collections.replaceId(t.id, i.id);
                    if (!(n.length === 0 && l.length === 0)) {
                        t.productCollection.reset();
                        t.afterCursor = undefined;
                        e.collections.reset();
                        e.collections.afterCursor = "";
                    }
                    return true;
                }) : (0, C.createCollection)(o, n.map(e => e.id.toString()), i.session.toString()).then(t => {
                    _.QPL.markerPoint(m.QuickLogMarkerId.WHATSAPP_COLLECTION_EDIT, "datasource_end");
                    (0, g.logCollectionCreated)({
                        catalogContext: i,
                        collectionId: t.id,
                        productCount: n.length
                    });
                    e.collections.reset();
                    e.collections.afterCursor = "";
                    return true;
                });
                return a.catch(e => {
                    const t = e => {
                        x.ToastManager.open((0, b.jsx)(v.Toast, {
                            msg: e,
                            id: (0, v.genId)("catalog_save_collection_failed")
                        }));
                    };
                    let o = S.fbt._("Failed to save collection", null, {
                        hk: "3Chwhp"
                    });
                    if (e.text === "not-acceptable") {
                        if (e.fieldName === "products" && e.fieldReason === "duplicate") {
                            o = S.fbt._("You already have a collection with this group of items. Add or delete items to make a different group.", null, {
                                hk: "1fZXaY"
                            });
                        }
                        if (e.fieldName === "collection" && e.fieldReason === "empty") {
                            o = S.fbt._("A collection must have at least one item in it", null, {
                                hk: "39rLHR"
                            });
                        }
                        t(o);
                        return false;
                    }
                    __LOG__(4, true, new Error(), true)`Failed to save collection, error: ${e}`;
                    SEND_LOGS("Saving collection failed");
                    t(o);
                    throw e;
                });
            };
            t.handleProductDelete = function (e, t, o, n) {
                (0, p.logDeleteProductClick)(t, 1, o);
                return new Promise((l, i) => {
                    f.ModalManager.open((0, b.jsx)(d.ConfirmPopup, {
                        title: S.fbt._("Delete Item", null, {
                            hk: "20DBg1"
                        }),
                        okText: S.fbt._("OK", null, {
                            hk: "4oTrfy"
                        }),
                        cancelText: S.fbt._("Cancel", null, {
                            hk: "H0gNq"
                        }),
                        onOK: () => {
                            f.ModalManager.close();
                            _.QPL.markerStart(m.QuickLogMarkerId.WHATSAPP_PRODUCT_DELETE, {
                                annotations: {
                                    string: {
                                        EntryPoint: n
                                    }
                                }
                            });
                            (function () {
                                return P.apply(this, arguments);
                            })(e, t, o).then(e => {
                                _.QPL.markerEnd(m.QuickLogMarkerId.WHATSAPP_PRODUCT_DELETE, a.QuickLogActionType.SUCCESS);
                                l(e);
                            }).catch(e => {
                                _.QPL.markerEnd(m.QuickLogMarkerId.WHATSAPP_PRODUCT_DELETE, a.QuickLogActionType.FAIL);
                                i(e);
                            });
                        },
                        onCancel: () => {
                            f.ModalManager.close();
                            l(false);
                        },
                        children: (0, b.jsx)("div", {
                            children: S.fbt._("Are you sure you want to delete this item from your catalog?", null, {
                                hk: "2WwNSA"
                            })
                        })
                    }));
                });
            };
            t.handleProductVisibilityChange = function (e, t, o, n) {
                const l = t.id.toString();
                const i = !t.isHidden;
                if (i) {
                    (0, p.logCatalogProductHideClick)(l, o);
                } else {
                    (0, p.logCatalogProductShowClick)(l, o);
                }
                return new Promise((r, s) => {
                    const c = t.isHidden ? S.fbt._("Show item in your catalog?", null, {
                        hk: "VfDKM"
                    }) : S.fbt._("Hide item in your catalog?", null, {
                        hk: "1KmslI"
                    });
                    f.ModalManager.open((0, b.jsx)(d.ConfirmPopup, {
                        okText: S.fbt._("OK", null, {
                            hk: "4oTrfy"
                        }),
                        cancelText: S.fbt._("Cancel", null, {
                            hk: "H0gNq"
                        }),
                        onOK: () => {
                            _.QPL.markerStart(m.QuickLogMarkerId.WHATSAPP_PRODUCT_SET_VISIBLE, {
                                annotations: {
                                    string: {
                                        EntryPoint: n
                                    }
                                }
                            });
                            f.ModalManager.close();
                            (function () {
                                return y.apply(this, arguments);
                            })(e, t).then(() => {
                                _.QPL.markerEnd(m.QuickLogMarkerId.WHATSAPP_PRODUCT_SET_VISIBLE, a.QuickLogActionType.SUCCESS);
                                if (i) {
                                    (0, p.logCatalogProductHideSuccess)(l, o);
                                } else {
                                    (0, p.logCatalogProductShowSuccess)(l, o);
                                }
                                r(true);
                            }).catch(e => {
                                _.QPL.markerEnd(m.QuickLogMarkerId.WHATSAPP_PRODUCT_SET_VISIBLE, a.QuickLogActionType.FAIL);
                                if (i) {
                                    (0, p.logCatalogProductHideFailed)(l, o);
                                } else {
                                    (0, p.logCatalogProductShowFailed)(l, o);
                                }
                                s(e);
                            });
                        },
                        onCancel: () => {
                            f.ModalManager.close();
                            if (i) {
                                (0, p.logCatalogProductHideCancelled)(l, o);
                            } else {
                                (0, p.logCatalogProductShowCancelled)(l, o);
                            }
                            r(false);
                        },
                        children: (0, b.jsx)("div", {
                            children: c
                        })
                    }));
                });
            };
            var l = n(o(348926));
            var i = o(122583);
            var a = o(15842);
            var r = o(984330);
            var s = o(739071);
            var c = o(172949);
            var d = o(103440);
            var u = o(791357);
            var f = o(114850);
            var p = o(77548);
            var h = o(530485);
            var g = o(854682);
            var C = o(535190);
            var m = o(316348);
            var _ = o(555622);
            var v = o(625786);
            var x = o(390737);
            var S = o(548360);
            var b = o(785893);

            function P () {
                return (P = (0, l.default)(function* (e, t, o) {
                    try {
                        yield(0, s.deleteProducts)([t.id.toString()]);
                        (0, p.logDeleteProductSuccess)(t, 1, o);
                        e.productCollection.evictImagesFromCache(t.id.toString());
                        e.productCollection.remove(t.id.toString());
                        if (e.collections) {
                            e.collections.forEach(e => e.productCollection.remove(t.id.toString()));
                        }
                        return true;
                    } catch (e) {
                        return (0, i.filteredCatch)(r.ServerStatusCodeError, e => {
                            (0, p.logDeleteProductFailed)(t, 1, o, e.statusCode);
                            x.ToastManager.open((0, b.jsx)(v.Toast, {
                                msg: S.fbt._("Failed to delete product", null, {
                                    hk: "18E03X"
                                }),
                                id: (0, v.genId)("catalog_delete_product_failed")
                            }));
                            return false;
                        })(e);
                    }
                })).apply(this, arguments);
            }

            function y () {
                return (y = (0, l.default)(function* (e, t) {
                    yield(0, c.productVisibilitySet)([{
                        productId: t.id.toString(),
                        isHidden: !t.isHidden
                    }]);
                    t.isHidden = !t.isHidden;
                    [e.productCollection, ...(e.collections || []).map(e => e.productCollection)].forEach(e => {
                        const o = e.get(t.id);
                        if (o) {
                            o.isHidden = t.isHidden;
                        }
                    });
                })).apply(this, arguments);
            }

            function T () {
                return (T = (0, l.default)(function* (e, t, o) {
                    try {
                        yield(0, C.deleteCollection)(t.id.toString(), o.session.sessionId.toString());
                        e.collections.remove(t.id.toString());
                        (0, g.logCollectionDeleted)({
                            catalogContext: o,
                            collectionId: t.id
                        });
                        return true;
                    } catch (e) {
                        return (0, i.filteredCatch)(r.ServerStatusCodeError, e => {
                            __LOG__(4, true, new Error(), true)`Failed to delete collection, error: ${e}`;
                            SEND_LOGS("Deleteing collection failed");
                            x.ToastManager.open((0, b.jsx)(v.Toast, {
                                msg: S.fbt._("Failed to delete collection", null, {
                                    hk: "S7UrR"
                                }),
                                id: (0, v.genId)("catalog_delete_product_failed")
                            }));
                            return false;
                        })(e);
                    }
                })).apply(this, arguments);
            }

            function j () {
                return (j = (0, l.default)(function* (e, t) {
                    _.QPL.markerPoint(m.QuickLogMarkerId.WHATSAPP_COLLECTION_APPEAL, "datasource_start");
                    yield(0, C.appealCollection)(e.id.toString(), t);
                    e.set({
                        canAppeal: false,
                        reviewStatus: h.PRODUCT_REVIEW_STATUS.PENDING
                    });
                    _.QPL.markerPoint(m.QuickLogMarkerId.WHATSAPP_COLLECTION_APPEAL, "datasource_end");
                })).apply(this, arguments);
            }
            const k = {
                OUT_OF_SYNC: {
                    title: S.fbt._("Changes cannot be saved", null, {
                        hk: "2N3tQ7"
                    }),
                    description: S.fbt._("Please refresh and try again.", null, {
                        hk: "3gfRqz"
                    }),
                    okText: S.fbt._("Reload", null, {
                        hk: "3hzNTy"
                    })
                },
                SERVER_ERROR: {
                    title: S.fbt._("Error", null, {
                        hk: "1jfaqb"
                    }),
                    description: S.fbt._("Something went wrong. Please try again.", null, {
                        hk: "CZwf"
                    }),
                    okText: S.fbt._("OK", null, {
                        hk: "2jkNuT"
                    })
                },
                HTTP_NETWORK_ERROR: {
                    title: S.fbt._("No internet connection", null, {
                        hk: "4psTpe"
                    }),
                    description: S.fbt._("Check your internet connection and try again.", null, {
                        hk: "2QcT2T"
                    }),
                    okText: S.fbt._("OK", null, {
                        hk: "3si9C7"
                    })
                }
            };
            const E = e => e instanceof u.HttpNetworkError ? k.HTTP_NETWORK_ERROR : e instanceof C.CollectionReorderError ? k.OUT_OF_SYNC : k.SERVER_ERROR;

            function I () {
                return (I = (0, l.default)(function* (e, t) {
                    try {
                        const o = yield(0, C.reorderCollection)(e);
                        if (o) {
                            (0, g.logCollectionReorder)({
                                catalogContext: t,
                                movesCount: e.length
                            });
                        }
                        return o;
                    } catch (e) {
                        const {
                            title: t,
                            description: o,
                            okText: n
                        } = E(e);
                        return new Promise((l, i) => {
                            f.ModalManager.open((0, b.jsx)(d.ConfirmPopup, {
                                title: t,
                                okText: n,
                                onOK: () => {
                                    f.ModalManager.close();
                                    if (e instanceof u.HttpNetworkError) {
                                        i(e);
                                    } else {
                                        l(false);
                                    }
                                },
                                children: (0, b.jsx)("div", {
                                    children: o
                                })
                            }), {
                                blockClose: true
                            });
                        });
                    }
                })).apply(this, arguments);
            }
        },
        468601: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const {
                    onClick: t,
                    testid: o = "add-item"
                } = e;
                const n = (0, r.default)(c.addItemButton, e.theme === "default" && c.themeDefault, e.theme === "in-list" && c.themeInList, e.theme === "collections" && c.themeCollections);
                const d = (0, s.jsx)(i.default, {
                    title: a.fbt._("Add new item", null, {
                        hk: "2Tc6p3"
                    }),
                    onClick: () => {},
                    xstyle: c.addIcon,
                    children: (0, s.jsx)(s.Fragment, {})
                });
                return (0, s.jsx)(l.default, {
                    theme: "add-item",
                    image: d,
                    customImage: true,
                    primary: e.title || a.fbt._("Add new item", null, {
                        hk: "2Tc6p3"
                    }),
                    className: n,
                    onClick: t,
                    idle: e.idle,
                    testid: o
                });
            };
            var l = n(o(170206));
            var i = n(o(625903));
            var a = o(548360);
            var r = n(o(156720));
            var s = o(785893);
            const c = {
                addIcon: {
                    position: "g0rxnol2",
                    width: "o22r6p4i",
                    height: "dng4fqht",
                    borderTop: "btoh1681",
                    borderEnd: "sngpozrj",
                    borderBottom: "c2eze1zb",
                    borderStart: "bd2x2sk5",
                    borderTopStartRadius: "l147y7tb",
                    borderTopEndRadius: "mjscftrx",
                    borderBottomEndRadius: "fqwk616h",
                    borderBottomStartRadius: "pkud3j3x",
                    ":focus": {
                        borderTopStartRadius: "mmjxyicr",
                        borderTopEndRadius: "r1jx4bdh",
                        borderBottomEndRadius: "f9yclydc",
                        borderBottomStartRadius: "mtzt60z0",
                        boxShadow: "esbo3we0"
                    },
                    "::before": {
                        position: "jiaumjzp",
                        top: "iu8zqbur",
                        left: "c4kjmepz",
                        display: "chh99fau",
                        width: "ln1ej6zg",
                        height: "i0a739jv",
                        content: "ckfn5qle",
                        backgroundColor: "t4c1fkc8",
                        transform: "bsbo06yw"
                    },
                    "::after": {
                        position: "tkubpkrc",
                        top: "khfyavfg",
                        left: "nly7wueh",
                        display: "l1wvjj35",
                        width: "dbiwaw4z",
                        height: "l9a7srmz",
                        content: "lw9p9708",
                        backgroundColor: "sadoqatt",
                        transform: "n2obx7p9"
                    }
                },
                addItemButton: {
                    borderTop: "q4zabkcz"
                },
                themeDefault: {
                    paddingTop: "pxvlsfnc",
                    paddingEnd: "f9ovudaz",
                    paddingBottom: "n3bptxsn",
                    paddingStart: "gx1rr48f",
                    marginTop: "dj1c3cmq",
                    marginEnd: "jnwc1y2a",
                    marginBottom: "mpdn4nr2",
                    marginStart: "svoq16ka"
                },
                themeInList: {
                    paddingTop: "fbgy3m38",
                    paddingEnd: "kyc7k6mt",
                    paddingBottom: "oq31bsqd",
                    paddingStart: "f78eapp6"
                },
                themeCollections: {
                    paddingTop: "fbgy3m38",
                    paddingEnd: "kyc7k6mt",
                    paddingBottom: "oq31bsqd",
                    paddingStart: "f78eapp6",
                    marginBottom: "inogquss",
                    borderTop: "q4zabkcz",
                    borderBottom: "qmxv8cnq"
                }
            };
        },
        211185: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.CollectionIntegrityBanner = function (e) {
                const {
                    collection: t,
                    onEditCollection: o
                } = e;
                const n = () => {
                    if (!(o == null)) {
                        o(t);
                    }
                };
                const a = () => {
                    s.ModalManager.open((0, g.jsx)(l.default, {
                        collection: t
                    }));
                };
                switch (t.reviewStatus) {
                    case d.PRODUCT_REVIEW_STATUS.PENDING:
                        return (0, g.jsxs)("div", {
                            className: (0, h.default)(C.pendingBanner),
                            children: [p.fbt._("This collection is being reviewed. Once it's approved, your customers will see it in your catalog.", null, {
                                hk: "47RxvH"
                            }), (0, g.jsx)("div", {
                                className: (0, h.default)(C.iconContainerPending),
                                children: (0, g.jsx)(r.InfoIcon, {})
                            })]
                        });
                    case d.PRODUCT_REVIEW_STATUS.REJECTED:
                        if ((0, i.canAppealCollections)()) {
                            return (0, g.jsx)(v, {
                                collection: t,
                                onRename: n,
                                onAppeal: a
                            });
                        } else {
                            return (0, g.jsx)(_, {
                                onRename: n
                            });
                        }
                    default:
                        return null;
                }
            };
            t.getCollectionIntegrityHeight = function (e) {
                if ((0, i.canAppealCollections)() && e.reviewStatus === d.PRODUCT_REVIEW_STATUS.REJECTED) {
                    return c.PRODUCT_LIST_ITEM_HEIGHT * 2 + 10;
                } else {
                    return c.PRODUCT_LIST_ITEM_HEIGHT + 10;
                }
            };
            var l = n(o(464624));
            var i = o(72696);
            var a = n(o(196554));
            var r = o(731085);
            var s = o(114850);
            var c = o(899841);
            var d = o(530485);
            var u = o(737106);
            var f = o(667738);
            var p = o(548360);
            var h = n(o(156720));
            var g = o(785893);
            const C = {
                iconContainerRejected: {
                    position: "lhggkp7q",
                    end: "h223g3sc",
                    color: "mvxzr2tb",
                    wordBreak: "cw3vfol9"
                },
                iconContainerRejectedWithAppeal: {
                    end: "ku3lw4j3"
                },
                rejectedBanner: {
                    display: "p357zi0d",
                    alignItems: "gndfcl4n",
                    height: "m9lpqg3r",
                    minHeight: "gc15jzxb",
                    paddingTop: "i5tg98hk",
                    paddingEnd: "rmnzjp8r",
                    paddingBottom: "przvwfww",
                    paddingStart: "khscay3k",
                    marginTop: "o9i7y497",
                    marginBottom: "brac1wpa",
                    overflowX: "gfz4du6o",
                    overflowY: "r7fjleex",
                    fontSize: "dsh4tgtl",
                    lineHeight: "erpdyial",
                    color: "e7al1772",
                    backgroundColor: "io9pg0pp"
                },
                rejectedBannerWithAppeal: {
                    display: "p357zi0d",
                    flexDirection: "f8m0rgwh",
                    justifyContent: "ac2vgrno",
                    height: "g4tbm4ed",
                    minHeight: "gc15jzxb",
                    paddingTop: "i5tg98hk",
                    paddingEnd: "sjajxv0r",
                    paddingBottom: "przvwfww",
                    paddingStart: "khscay3k",
                    marginTop: "o9i7y497",
                    marginBottom: "brac1wpa",
                    overflowX: "gfz4du6o",
                    overflowY: "r7fjleex",
                    fontSize: "dsh4tgtl",
                    lineHeight: "erpdyial",
                    color: "e7al1772",
                    backgroundColor: "io9pg0pp"
                },
                rejectedBannerDarkBackground: {
                    backgroundColor: "og7unhan"
                },
                pendingBanner: {
                    display: "p357zi0d",
                    alignItems: "gndfcl4n",
                    height: "m9lpqg3r",
                    minHeight: "gc15jzxb",
                    paddingTop: "i5tg98hk",
                    paddingEnd: "rmnzjp8r",
                    paddingBottom: "przvwfww",
                    paddingStart: "khscay3k",
                    marginTop: "o9i7y497",
                    overflowX: "gfz4du6o",
                    overflowY: "r7fjleex",
                    fontSize: "dsh4tgtl",
                    lineHeight: "erpdyial",
                    color: "e7al1772",
                    wordBreak: "cw3vfol9",
                    backgroundColor: "a5fn8qve"
                },
                iconContainerPending: {
                    position: "lhggkp7q",
                    end: "h223g3sc"
                }
            };

            function m (e) {
                return (0, g.jsx)("div", {
                    className: (0, h.default)(C.iconContainerRejected, e.withAppeal && C.iconContainerRejectedWithAppeal),
                    children: (0, g.jsx)(r.InfoIcon, {})
                });
            }

            function _ (e) {
                let {
                    onRename: t
                } = e;
                const o = (0, f.useIsDarkTheme)();
                return (0, g.jsxs)("div", {
                    className: (0, h.default)(C.rejectedBanner, o && C.rejectedBannerDarkBackground),
                    children: [p.fbt._("This collection wasn't approved because it doesn't follow our guidelines.", null, {
                        hk: "1321OC"
                    }), (0, g.jsx)(a.default, {
                        onClick: t,
                        children: p.fbt._("Rename", null, {
                            hk: "2U6ctb"
                        })
                    }), (0, g.jsx)(m, {
                        withAppeal: false
                    })]
                });
            }

            function v (e) {
                let {
                    collection: t,
                    onRename: o,
                    onAppeal: n
                } = e;
                const l = (t.rejectReason || "other_violation").toLowerCase();
                const i = (0, u.getRejectedCollectionCopy)(l, t.commerceUrl);
                const r = (0, f.useIsDarkTheme)();
                const s = (0, g.jsx)(a.default, {
                    onClick: o,
                    children: p.fbt._("rename the collection", null, {
                        hk: "2j5eIB"
                    })
                });
                if (t.canAppeal) {
                    const e = (0, g.jsx)(a.default, {
                        onClick: n,
                        children: p.fbt._("request another review", null, {
                            hk: "2BSEoy"
                        })
                    });
                    const t = p.fbt._("You can {rename_collection_link} or {request_another_review_link}.", [p.fbt._param("rename_collection_link", s), p.fbt._param("request_another_review_link", e)], {
                        hk: "49Nar9"
                    });
                    return (0, g.jsxs)("div", {
                        className: (0, h.default)(C.rejectedBannerWithAppeal, r && C.rejectedBannerDarkBackground),
                        children: [i.first, (0, g.jsx)("br", {}), t, (0, g.jsx)(m, {
                            withAppeal: true
                        })]
                    });
                }
                const c = p.fbt._("You can {rename_collection_link}.", [p.fbt._param("rename_collection_link", s)], {
                    hk: "33lrOJ"
                });
                return (0, g.jsxs)("div", {
                    className: (0, h.default)(C.rejectedBannerWithAppeal, r && C.rejectedBannerDarkBackground),
                    children: [i.second, (0, g.jsx)("br", {}), c, (0, g.jsx)(m, {
                        withAppeal: true
                    })]
                });
            }
        },
        472234: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.CatalogCategoriesBanner = function (e) {
                let {
                    catalog: t
                } = e;
                const {
                    id: o,
                    hasCatalogCategories: n
                } = (0, c.useModelValues)(t, ["id", "hasCatalogCategories"]);
                (0, s.useEffect)(() => {
                    if (n == null) {
                        (0, l.queryCatalogHasCategories)(o).then(e => {
                            t.set({
                                hasCatalogCategories: e
                            });
                        });
                    }
                }, [n, o, t]);
                if (n === false || n == null) {
                    return null;
                }
                return (0, d.jsx)(i.TextDiv, {
                    xstyle: [u.banner, a.uiPadding.all16],
                    size: "13",
                    color: "dark",
                    children: r.fbt._("Use WhatsApp on your phone to browse product categories.", null, {
                        hk: "7z4dS"
                    })
                });
            };
            var l = o(172949);
            var i = o(180519);
            var a = o(676345);
            var r = o(548360);
            var s = o(667294);
            n(o(156720));
            var c = o(655241);
            var d = o(785893);
            const u = {
                banner: {
                    backgroundColor: "se2m7z6i",
                    display: "p357zi0d",
                    alignItems: "gndfcl4n",
                    borderBottom: "daad4uqs"
                }
            };
        },
        803209: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                var t;
                var o;
                const n = (0, p.default)();
                const [m, _] = (0, f.useState)({
                    state: g.NOT_STARTED
                });
                const [v, x] = (0, f.useState)(e.existingPostcode);
                const S = e.existingPostcode === v;
                const b = function () {
                    var t = (0, l.default)(function* () {
                        if (typeof v == "string") {
                            _({
                                state: g.IN_PROGRESS
                            });
                            try {
                                const t = yield(0, i.verifyPostcode)(e.catalogId, v);
                                if (!n.aborted) {
                                    _({
                                        state: g.COMPLETED,
                                        data: t
                                    });
                                }
                                if ((t == null ? undefined : t.resultCode) === "success") {
                                    e.onSuccess();
                                }
                            } catch (e) {
                                __LOG__(4, true, new Error(), true)`[direct-connection] Updating postcode failed ${e}`;
                                SEND_LOGS("[direct-connection] Updating postcode failed");
                                if (n.aborted) {
                                    return;
                                }
                                _({
                                    state: g.FAILED
                                });
                            }
                        }
                    });
                    return function () {
                        return t.apply(this, arguments);
                    };
                }();
                const P = (0, f.useCallback)(() => _({
                    state: g.NOT_STARTED
                }), []);
                const y = ((t = m.data) === null || t === undefined ? undefined : t.resultCode) === "unserviceable_location";
                let T = null;
                const j = u.fbt._("Enter a valid Pincode.", null, {
                    hk: "21I4U6"
                });
                if (((o = m.data) === null || o === undefined ? undefined : o.resultCode) === "invalid_postcode" || typeof v != "string" || v.length === 0 || v.search("^[0-9]{6}$") !== 0) {
                    T = j;
                }
                const k = m.state === g.IN_PROGRESS;
                const E = k || T != null || S;
                const I = () => {
                    if (!E) {
                        if (y) {
                            P();
                        } else {
                            b();
                        }
                    }
                };
                return (0, h.jsx)(a.ConfirmPopup, {
                    onOK: I,
                    title: y ? null : u.fbt._("Change Pincode", null, {
                        hk: "3R9hJZ"
                    }),
                    okDisabled: E,
                    okSpinner: k,
                    okText: y ? u.fbt._("OK", null, {
                        hk: "4oTrfy"
                    }) : u.fbt._("CONTINUE", null, {
                        hk: "3HQEmh"
                    }),
                    onCancel: y ? null : e.onCancel,
                    cancelDisabled: k,
                    children: y ? (0, h.jsx)(d.Text, {
                        as: "p",
                        testid: "catalog_postcode_change_modal__unservicable-alert",
                        children: u.fbt._("JioMart doesn't have items available in that area. You can try a different Pincode.", null, {
                            hk: "40eEp7"
                        })
                    }) : (0, h.jsxs)(h.Fragment, {
                        children: [(0, h.jsx)(d.Text, {
                            as: "p",
                            xstyle: C.infoText,
                            children: u.fbt._("To see JioMart items available in a different area, enter the area's Pincode.", null, {
                                hk: "3u35ZR"
                            })
                        }), (0, h.jsx)(c.RichTextField, {
                            testid: "catalog_postcode_change_modal__input",
                            onChange: e => {
                                let {
                                    text: t
                                } = e;
                                o = t;
                                P();
                                return void x(o);
                                var o;
                            },
                            value: v,
                            managed: true,
                            editable: !k,
                            managedError: true,
                            selectOnMount: true,
                            focusOnMount: true,
                            error: T,
                            onEnter: () => {
                                I();
                            }
                        }), (0, h.jsxs)(d.Text, {
                            as: "p",
                            theme: "muted",
                            xstyle: C.privacyText,
                            children: [u.fbt._("By continuing, you agree to share your Pincode and phone number with JioMart. Only JioMart can see your Pincode.", null, {
                                hk: "2XMhtN"
                            }), " ", (0, h.jsx)(r.ExternalLink, {
                                href: (0, s.getJioMartPostcodeChangeLearnMoreLink)(),
                                children: u.fbt._("Learn More", null, {
                                    hk: "27Rbeo"
                                })
                            })]
                        })]
                    })
                });
            };
            var l = n(o(348926));
            var i = o(946477);
            var a = o(103440);
            var r = o(753233);
            var s = o(258105);
            var c = o(202391);
            var d = o(180519);
            var u = o(548360);
            var f = o(667294);
            n(o(156720));
            var p = n(o(895851));
            var h = o(785893);
            const g = o(76672).Mirrored(["NOT_STARTED", "COMPLETED", "FAILED", "IN_PROGRESS"]);
            const C = {
                infoText: {
                    fontSize: "enbbiyaj",
                    lineHeight: "erpdyial",
                    marginBottom: "t4zgqcuo"
                },
                privacyText: {
                    fontSize: "f8jlpxt4",
                    lineHeight: "q5jc98e4",
                    marginTop: "iy2cu22y"
                }
            };
        },
        453241: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.CatalogPostcodeMenu = function (e) {
                const {
                    postcode: t,
                    postcodeLocationName: o,
                    postcodeSetByUser: n
                } = (0, S.useModelValues)(e.businessDirectConnection, ["postcode", "postcodeLocationName", "postcodeSetByUser"]);
                const {
                    id: j,
                    hasCatalogCategories: k
                } = (0, S.useModelValues)(e.catalog, ["id", "hasCatalogCategories"]);
                const E = n === true;
                const [I, O] = (0, v.useState)(false);
                const L = () => {
                    u.ModalManager.close();
                    O(false);
                };
                const A = () => {
                    u.ModalManager.open((0, y.jsx)(f.default, {
                        existingPostcode: t != null ? t : "",
                        catalogId: j,
                        onCancel: L,
                        onSuccess: () => {
                            L();
                            e.postcodeChangeSuccess();
                        }
                    }));
                    O(true);
                };
                const w = function () {
                    let e = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
                    (0, i.delayMs)(e ? p.CATALOG_POSTCODE_CHANGE_MODAL_OPEN_DELAY : 0).then(A);
                };
                const [M, R] = (0, v.useState)(null);
                const N = (0, v.useRef)(null);
                const D = (0, v.useRef)(null);
                const B = (0, v.useCallback)(() => R(null), []);
                const [H] = (0, P.useTimeout)(B, p.CATALOG_POSTCODE_MENU_TOOLTIP_DURATION);
                const W = (0, v.useCallback)(() => {
                    const e = D.current ? D.current.offsetWidth * 3 / 4 : null;
                    R({
                        menu: (0, y.jsx)("div", {
                            style: typeof e == "number" ? {
                                maxWidth: `${e}px`
                            } : null,
                            children: (0, y.jsx)(h.Text, {
                                as: "p",
                                children: _.fbt._("Click to change pincode to see items available in your area", null, {
                                    hk: "2p5qlf"
                                })
                            })
                        }),
                        anchor: N.current,
                        dirY: c.DirY.TOP,
                        type: c.MenuType.Tooltip,
                        horizontal: true,
                        tooltipColorScheme: c.TooltipColorScheme.Highlight
                    });
                }, []);
                const [F] = (0, P.useTimeout)(() => {
                    if (N.current) {
                        W();
                        H();
                    } else {
                        __LOG__(3)`[direct-connection] change postcode tooltip is not shown`;
                    }
                }, p.CATALOG_POSTCODE_MENU_TOOLTIP_DELAY);
                (0, v.useEffect)(() => {
                    if (!E) {
                        if ((0, s.editPostcodeByDefaultEnabled)()) {
                            if ((() => {
                                    if ((0, m.getPostcodeAutoOpenChangePostcodeDone)()) {
                                        return false;
                                    }
                                    const e = (0, m.getPostcodeAutoOpenChangePostcodeCount)();
                                    if (typeof e == "number" && e >= 2) {
                                        return false;
                                    }
                                    return true;
                                })()) {
                                w(true);
                                (0, m.setPostcodeAutoOpenChangePostcodeDone)(true);
                                (() => {
                                    const e = (0, m.getPostcodeAutoOpenChangePostcodeCount)();
                                    (0, m.setPostcodeAutoOpenChangePostcodeCount)(typeof e == "number" ? e + 1 : 1);
                                })();
                            }
                        } else if ((() => {
                                if ((0, m.getPostcodeTooltipViewedInSession)()) {
                                    return false;
                                }
                                const e = (0, m.getPostcodeTooltipViewCount)();
                                if (typeof e == "number" && e >= 5) {
                                    return false;
                                }
                                return true;
                            })()) {
                            (() => {
                                const e = (0, m.getPostcodeTooltipViewCount)();
                                (0, m.setPostcodeTooltipViewCount)(typeof e == "number" ? e + 1 : 1);
                            })();
                            (0, m.setPostcodeTooltipViewedInSession)(true);
                            F();
                        }
                    }
                }, []);
                (0, b.default)(() => {
                    if (I) {
                        L();
                    }
                });
                const [U, V] = (0, v.useState)(0);
                (0, v.useEffect)(() => {
                    if (k === true) {
                        V(e => e + 1);
                    }
                }, [k]);
                const z = M ? (0, y.jsx)(g.UIE, {
                    displayName: "CatalogPostcodeTooltip",
                    popable: true,
                    escapable: true,
                    requestDismiss: B,
                    dismissOnWindowResize: true,
                    children: (0, y.jsx)(C.default, {
                        tooltip: M
                    })
                }, U) : null;
                return (0, y.jsxs)("div", (0, l.default)((0, l.default)({
                    className: (0, x.default)(T.container)
                }, (0, a.accessibleClickableButtonProps)({
                    onClick: w
                })), {}, {
                    ref: D,
                    children: [(0, y.jsx)("span", {
                        className: (0, x.default)(T.svgWrapper),
                        children: (0, y.jsx)(r.BusinessAddressIcon, {})
                    }), (0, y.jsxs)(d.FlexColumn, {
                        ref: N,
                        children: [(0, y.jsx)(h.Text, {
                            as: "p",
                            xstyle: T.postcodeDescription,
                            children: _.fbt._("Deliver to {postcode-of-a-geographic-area}", [_.fbt._param("postcode-of-a-geographic-area", t)], {
                                hk: "1dDn6Y"
                            })
                        }), (0, y.jsx)(h.Text, {
                            as: "p",
                            xstyle: T.postcodeLocationName,
                            theme: "muted",
                            children: E ? o : _.fbt._("Click to change Pincode", null, {
                                hk: "37HAka"
                            })
                        }), z]
                    })]
                }));
            };
            t.MAX_TIMES_POSTCODE_CHANGE_TOOLTIP_TO_SHOW = t.MAX_TIMES_POSTCODE_CHANGE_MODAL_AUTO_OPEN = undefined;
            var l = n(o(81109));
            var i = o(8304);
            var a = o(464520);
            var r = o(115888);
            var s = o(263079);
            var c = o(664149);
            var d = o(690495);
            var u = o(114850);
            var f = n(o(803209));
            var p = o(740043);
            var h = o(180519);
            var g = o(392632);
            var C = n(o(733712));
            var m = o(757453);
            var _ = o(548360);
            var v = o(667294);
            var x = n(o(156720));
            var S = o(655241);
            var b = n(o(558532));
            var P = o(441673);
            var y = o(785893);
            const T = {
                container: {
                    display: "p357zi0d",
                    alignItems: "gndfcl4n",
                    backgroundColor: "ihvf49ua",
                    position: "cca4rwve",
                    top: "qq0sjtgm",
                    zIndex: "l355kaf8",
                    boxShadow: "i35u2c65",
                    ":hover": {
                        backgroundColor: "os03hap6"
                    }
                },
                svgWrapper: {
                    paddingTop: "nlnf8xo7",
                    paddingBottom: "r219jyu0",
                    paddingStart: "nntdgyy8",
                    paddingEnd: "igb3k0ri",
                    width: "i94gqilv",
                    color: "kv0r5hzt"
                },
                postcodeDescription: {
                    lineHeight: "erpdyial",
                    fontSize: "enbbiyaj"
                },
                postcodeLocationName: {
                    lineHeight: "r5qsrrlp",
                    fontSize: "f8jlpxt4"
                }
            };
            t.MAX_TIMES_POSTCODE_CHANGE_MODAL_AUTO_OPEN = 2;
            t.MAX_TIMES_POSTCODE_CHANGE_TOOLTIP_TO_SHOW = 5;
        },
        740043: (e, t) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.CATALOG_POSTCODE_MENU_TOOLTIP_DURATION = t.CATALOG_POSTCODE_MENU_TOOLTIP_DELAY = t.CATALOG_POSTCODE_CHANGE_MODAL_OPEN_DELAY = undefined;
            t.CATALOG_POSTCODE_CHANGE_MODAL_OPEN_DELAY = 500;
            t.CATALOG_POSTCODE_MENU_TOOLTIP_DELAY = 500;
            t.CATALOG_POSTCODE_MENU_TOOLTIP_DURATION = 3500;
        },
        559893: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = undefined;
            var l = n(o(348926));
            var i = o(15842);
            var a = o(287461);
            var r = o(477627);
            var s = o(72696);
            var c = n(o(418950));
            var d = o(937356);
            var u = o(290895);
            var f = o(713464);
            var p = n(o(487011));
            var h = o(263079);
            var g = n(o(908081));
            var C = n(o(324093));
            var m = o(568550);
            var _ = o(626194);
            var v = n(o(570834));
            var x = n(o(495012));
            var S = n(o(468601));
            var b = n(o(786399));
            var P = o(899841);
            var y = o(795068);
            var T = n(o(819543));
            var j = o(932523);
            var k = o(227604);
            var E = n(o(568414));
            var I = o(77548);
            var O = n(o(944045));
            var L = o(472234);
            var A = o(453241);
            var w = n(o(567105));
            var M = o(316348);
            var R = o(555622);
            var N = o(887222);
            var D = o(548360);
            var B = o(667294);
            var H = n(o(156720));
            var W = n(o(710629));
            var F = n(o(969651));
            var U = n(o(637660));
            var V = o(655241);
            var z = n(o(286481));
            var G = n(o(895851));
            var q = o(785893);
            const Y = {
                header: {
                    flex: "kk3akd72"
                },
                list: {
                    flex: "kk3akd72",
                    paddingBottom: "oq31bsqd",
                    overflowX: "gfz4du6o",
                    overflowY: "r7fjleex"
                },
                listTopMargin: {
                    marginTop: "dj1c3cmq"
                }
            };

            function K (e) {
                var t;
                const {
                    cartEnabled: o,
                    contact: n,
                    catalog: l,
                    dataSource: i,
                    handleCartClick: r,
                    onCartClick: c,
                    canManageCatalog: d,
                    businessProfile: u,
                    blockCartInterstitialFn: f,
                    onAddProduct: h,
                    onProductDetail: g,
                    onProductShare: C,
                    onCollectionSeeAll: m,
                    onEditCollection: _,
                    onOpenCollections: v,
                    catalogFlatListControllerRef: P,
                    catalogFetchState: y,
                    directConnectionPostcodeEnabled: T,
                    loadingDirectConnectionInfo: j,
                    businessDirectConnection: k,
                    loadingMore: I,
                    postcodeChangeSuccess: M
                } = e;
                const R = o && c ? r : undefined;
                let N;
                let B;
                let W;
                let F;
                if (d && h) {
                    N = (0, q.jsx)(S.default, {
                        onClick: () => h(),
                        theme: "collections",
                        testid: "add-item"
                    });
                }
                if (l && d && _) {
                    B = l.productCollection.getProductModels(true).some(e => !e.isHidden && e.reviewStatus !== "REJECTED") ? (0, q.jsx)(S.default, {
                        onClick: () => {
                            _(null);
                        },
                        theme: "collections",
                        title: D.fbt._("Add new collection", null, {
                            hk: "1DddmB"
                        }),
                        testid: "add-collection"
                    }) : null;
                }
                if (l && i) {
                    W = (0, q.jsx)(w.default, {
                        onCartOpen: R,
                        onProductDetail: g,
                        flatListController: P.current,
                        catalog: l,
                        canManageCatalog: d,
                        shareLinks: d,
                        onProductShare: C,
                        onCollectionSeeAll: m,
                        data: i.getData(),
                        onEditCollection: _
                    });
                    if (d) {
                        if ((0, a.getABPropConfigValue)("web_abprop_nux_cart_interstitial") && o && !f()) {
                            (0, b.default)();
                        }
                        F = (0, q.jsx)(p.default, {
                            onOpenCollections: v
                        });
                    }
                } else {
                    W = (0, q.jsx)(E.default, {
                        fetchState: y
                    });
                }
                return (0, q.jsxs)(q.Fragment, {
                    children: [u && (0, q.jsxs)(q.Fragment, {
                        children: [(0, q.jsx)("div", {
                            "data-testid": "catalog-header",
                            className: (0, H.default)(Y.header),
                            children: (0, q.jsx)(O.default, {
                                profilePicThumb: n.getProfilePicThumb(),
                                contact: n,
                                businessProfile: u
                            })
                        }), l && (0, s.catalogCategoriesEnabled)() && ((t = u.directConnection) === null || t === undefined ? undefined : t.enabled) ? (0, q.jsx)(L.CatalogCategoriesBanner, {
                            catalog: l
                        }) : null, l && T && !j && k && (0, q.jsx)(A.CatalogPostcodeMenu, {
                            catalog: l,
                            businessDirectConnection: k,
                            postcodeChangeSuccess: M
                        })]
                    }), (0, q.jsxs)("div", {
                        "data-testid": "catalog-items",
                        className: (0, H.default)(Y.list, u && Y.listTopMargin),
                        children: [F, N, B, W, I && (0, q.jsx)(x.default, {})]
                    })]
                });
            }

            function Z (e, t) {
                const {
                    catalogId: o,
                    setScrollOffset: n,
                    onCartClick: a,
                    onCatalogLinkClick: s,
                    canManageCatalog: p,
                    canLogQpl: x = true,
                    isPushed: S = true,
                    scrollOffset: b,
                    autoUpdate: E,
                    businessProfile: O,
                    blockCartInterstitialFn: L = () => false,
                    onAddProduct: A,
                    onProductDetail: w,
                    onProductShare: H,
                    onCollectionSeeAll: Y,
                    onEditCollection: Z,
                    onOpenCollections: Q,
                    onRemoveProduct: X,
                    onOpenSettings: J,
                    onOpenMerchantDetailsForm: $
                } = e;
                const ee = (0, B.useContext)(m.DrawerContext);
                const te = (0, h.enablePostcodeInCatalog)() && !!O && (0, d.businessSupportsPostcode)(O);
                const oe = (0, G.default)();
                const ne = (0, F.default)();
                const le = (0, W.default)(ne, 100);
                const ie = (0, U.default)(() => new v.default());
                const ae = (0, V.useModelValues)(e.contact, ["id"]);
                const re = (0, B.useMemo)(() => u.CartCollection.findCart(ae.id.toString()), [ae.id]);
                const [se, ce] = (0, B.useState)(false);
                const [de, ue] = (0, B.useState)(null);
                const [fe, pe] = (0, B.useState)(re.itemCount);
                const [he, ge] = (0, B.useState)("NONE");
                const [Ce, me] = (0, B.useState)(null);
                const [_e, ve] = (0, B.useState)(null);
                const [xe, Se] = (0, B.useState)(true);
                const be = function () {
                    var e = (0, l.default)(function* (e) {
                        yield e == null ? undefined : e.loadInitialItems();
                        Se(false);
                    });
                    return function () {
                        return e.apply(this, arguments);
                    };
                }();
                const Pe = (0, W.default)(() => {
                    ne();
                    if (!(X == null)) {
                        X();
                    }
                }, 100);
                const [ye, Te] = (0, B.useState)();
                const [je, ke] = (0, B.useState)(false);
                const Ee = () => {
                    const e = x && S;
                    const t = e ? M.QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW : undefined;
                    f.CatalogCollection.find(o, {
                        markerId: t
                    }).then(t => {
                        if (oe.aborted) {
                            return;
                        }
                        const o = new r.CatalogWithCollectionsDataSource(t, p || false, P.PRODUCT_LIST_ITEM_HEIGHT, e);
                        const n = new r.CatalogListItemScrollHelper(o);
                        ue(t);
                        me(o);
                        ve(n);
                        ge("SUCCESS");
                        be(o).then(() => {
                            if (e) {
                                R.QPL.markerEnd(M.QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW, i.QuickLogActionType.SUCCESS);
                            }
                        }).catch(() => {
                            if (e) {
                                R.QPL.markerEnd(M.QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW, i.QuickLogActionType.FAIL);
                            }
                        });
                        (e => {
                            if (E && e != null) {
                                e.productCollection.on("add", le);
                                e.productCollection.on("remove", Pe);
                                e.collections.on("add", le);
                                e.collections.on("remove", le);
                            }
                        })(t);
                        if (b !== undefined) {
                            ie.current.setScrollFromStart(b);
                        }
                    }).catch(t => {
                        if (e) {
                            R.QPL.markerEnd(M.QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW, i.QuickLogActionType.FAIL);
                        }
                        (0, k.parseErrorState)(t, e => {
                            ge(e);
                            Se(false);
                        });
                    });
                };
                const Ie = () => {
                    if (te) {
                        ke(true);
                        c.default.getCypher(o).then(e => {
                            Te(e);
                            ke(false);
                            Ee();
                        });
                    } else {
                        Ee();
                    }
                };
                (0, B.useEffect)(() => {
                    Ie();
                    (0, T.default)(o).then(e => {
                        ce(e);
                        if (e) {
                            re.on("change:cartItemCollection", () => pe(re.itemCount));
                        }
                        (0, I.logCatalogListView)({
                            catalogOwnerWid: o,
                            catalogContext: (0, j.getProductCatalogContext)(ee),
                            cartToggle: e
                        });
                    });
                }, []);
                const Oe = (0, z.default)((e, t) => {
                    if (!(n == null)) {
                        n(t.scrollTop);
                    }
                    if (_e == null ? undefined : _e.willLoadMore(t)) {
                        Se(true);
                    }
                    if (!(_e == null)) {
                        _e.onScroll(e, t).then(e => {
                            if (e) {
                                Se(false);
                            }
                        }).catch(e => {
                            Se(false);
                            throw e;
                        });
                    }
                }, 100);
                const Le = () => {
                    (0, N.qplStartCartView)("Catalog");
                    if (!(a == null)) {
                        a(ae.id.toString());
                    }
                };
                const Ae = (0, y.getCatalogDrawerMenu)({
                    onSendCatalog: () => {
                        if (de) {
                            s(de, ae);
                            (0, I.logCatalogShareLinkClick)({
                                catalogOwnerWid: o,
                                catalogContext: (0, j.getProductCatalogContext)(ee)
                            });
                        }
                    },
                    onCartClick: se ? Le : undefined,
                    cartCount: fe,
                    catalogId: o.toString(),
                    canManageCatalog: p,
                    onOpenCollections: Q,
                    onOpenMerchantDetailsForm: $,
                    onOpenSettings: J,
                    cartIconTheme: e.headerType === _.DRAWER_HEADER_TYPE.LARGE ? "inherit-color" : null
                });
                return (0, q.jsxs)(g.default, {
                    ref: t,
                    theme: "products",
                    onDrop: e.onBack,
                    children: [(0, q.jsx)(_.DrawerHeader, {
                        title: D.fbt._("Catalog", null, {
                            hk: "3YVOSV"
                        }),
                        type: e.headerType || _.DRAWER_HEADER_TYPE.SMALL,
                        onBack: e.onBack,
                        menu: Ae,
                        focusBackOrCancel: true
                    }), (0, q.jsx)(C.default, {
                        onScroll: e => {
                            Oe(e, e.currentTarget);
                        },
                        flatListControllers: [ie.current],
                        children: (0, q.jsx)(K, {
                            cartEnabled: se,
                            contact: ae,
                            handleCartClick: Le,
                            onProductDetail: w,
                            onCartClick: a,
                            catalog: de,
                            dataSource: Ce,
                            businessProfile: O,
                            canManageCatalog: p,
                            onAddProduct: A,
                            onProductShare: H,
                            onCollectionSeeAll: Y,
                            onOpenCollections: Q,
                            onEditCollection: Z,
                            blockCartInterstitialFn: L,
                            catalogFlatListControllerRef: ie,
                            catalogFetchState: he,
                            directConnectionPostcodeEnabled: te,
                            loadingDirectConnectionInfo: je,
                            businessDirectConnection: ye,
                            loadingMore: xe,
                            postcodeChangeSuccess: () => {
                                f.CatalogCollection.removeCatalog(o);
                                ue(null);
                                me(null);
                                ve(null);
                                ge("NONE");
                                Se(true);
                                Ie();
                            }
                        })
                    })]
                });
            }
            var Q = (0, B.forwardRef)(Z);
            t.default = Q;
        },
        977575: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.CollectionContentDrawer = undefined;
            var l = n(o(348926));
            var i = o(15842);
            var a = o(477627);
            var r = o(290895);
            var s = o(713464);
            var c = n(o(908081));
            var d = n(o(324093));
            var u = o(568550);
            var f = o(626194);
            var p = n(o(570834));
            var h = n(o(495012));
            var g = n(o(468601));
            var C = o(211185);
            var m = o(899841);
            var _ = o(795068);
            var v = n(o(819543));
            var x = o(932523);
            var S = o(227604);
            var b = n(o(568414));
            var P = o(854682);
            var y = n(o(567105));
            var T = o(316348);
            var j = o(555622);
            var k = o(887222);
            var E = o(548360);
            var I = o(667294);
            var O = n(o(156720));
            var L = n(o(710629));
            var A = n(o(969651));
            var w = n(o(637660));
            var M = o(808446);
            var R = o(655241);
            var N = n(o(895851));
            var D = o(785893);
            const B = {
                flex: "kk3akd72",
                paddingBottom: "oq31bsqd",
                overflowX: "gfz4du6o",
                overflowY: "r7fjleex"
            };
            const H = {
                paddingTop: "pxvlsfnc",
                paddingEnd: "kyc7k6mt",
                paddingBottom: "n3bptxsn",
                paddingStart: "f78eapp6",
                lineHeight: "qg52vu03"
            };

            function W (e) {
                const {
                    cartEnabled: t,
                    catalogFetchState: o,
                    collectionFlatListController: n,
                    loadingMore: l,
                    catalog: i,
                    dataSource: a,
                    canManageCatalog: r,
                    collection: s,
                    handleCartClick: c,
                    onProductDetail: d,
                    onCartClick: u,
                    onProductShare: f,
                    onEditCollection: p
                } = e;
                const m = t && u ? c : undefined;
                if (!i || !a) {
                    return (0, D.jsx)(b.default, {
                        fetchState: o
                    });
                }
                const _ = a.getData();
                if (_.length === 0 && !l && r && s) {
                    return (0, D.jsx)(D.Fragment, {
                        children: (0, D.jsxs)("div", {
                            className: (0, O.default)(B),
                            children: [(0, D.jsx)(g.default, {
                                theme: "collections",
                                onClick: () => {
                                    if (!(p == null)) {
                                        p(s);
                                    }
                                },
                                testid: "add-collection"
                            }), (0, D.jsx)("div", {
                                className: (0, O.default)(H),
                                children: E.fbt._("This collection won't be visible to customers until you add at least 1 item", null, {
                                    hk: "3XWBzM"
                                })
                            })]
                        })
                    });
                }
                const v = (0, D.jsx)(y.default, {
                    onCartOpen: m,
                    onProductDetail: d,
                    flatListController: n,
                    catalog: i,
                    canManageCatalog: r,
                    shareLinks: r,
                    onProductShare: f,
                    collectionId: s == null ? undefined : s.id.toString(),
                    data: _
                });
                const x = s ? (0, D.jsx)(C.CollectionIntegrityBanner, {
                    collection: s,
                    onEditCollection: p
                }) : undefined;
                return (0, D.jsx)(D.Fragment, {
                    children: (0, D.jsxs)("div", {
                        className: (0, O.default)(B),
                        children: [x, v, l && (0, D.jsx)(h.default, {})]
                    })
                });
            }
            const F = (0, I.forwardRef)((e, t) => {
                var o;
                const {
                    catalogId: n,
                    onCartClick: h,
                    onCatalogLinkClick: g,
                    setScrollOffset: C,
                    canManageCatalog: b,
                    scrollOffset: y,
                    collection: O,
                    onProductDetail: B,
                    onProductShare: H,
                    onEditCollection: F
                } = e;
                const U = (0, A.default)();
                const V = (0, N.default)();
                const z = (0, I.useContext)(u.DrawerContext);
                const G = (0, R.useModelValues)(e.contact, ["id"]);
                const q = (0, I.useMemo)(() => r.CartCollection.findCart(G.id.toString()), [G.id]);
                const Y = (0, w.default)(() => new p.default());
                const [K, Z] = (0, I.useState)(false);
                const [Q, X] = (0, I.useState)(null);
                const [J, $] = (0, I.useState)(q.itemCount);
                const [ee, te] = (0, I.useState)("NONE");
                const [oe, ne] = (0, I.useState)(null);
                const [le, ie] = (0, I.useState)(null);
                const [ae, re] = (0, I.useState)(true);
                (0, M.useListener)(O == null ? undefined : O.productCollection, ["add", "remove"], U);
                (0, M.useListener)(Q == null ? undefined : Q.productCollection, ["add", "remove"], U);
                (0, M.useListener)(Q == null ? undefined : Q.collections, ["add", "remove"], U);
                (0, M.useListener)(O, ["change:reviewStatus", "canAppeal"], U);
                const se = function () {
                    var e = (0, l.default)(function* (e) {
                        yield e == null ? undefined : e.loadInitialItems();
                        re(false);
                        (0, P.logCollectionSeeAllView)({
                            catalogOwnerJid: n.toString(),
                            catalogContext: (0, x.getProductCatalogContext)(z),
                            collectionId: e == null ? undefined : e.collectionId
                        });
                    });
                    return function () {
                        return e.apply(this, arguments);
                    };
                }();
                const ce = () => {
                    const e = q.itemCount;
                    if (J !== e) {
                        $(e);
                    }
                };
                (0, I.useEffect)(() => {
                    s.CatalogCollection.find(n).then(e => {
                        if (V.aborted) {
                            return;
                        }
                        X(e);
                        te("SUCCESS");
                        const t = new a.SingleCollectionDataSource(e, O == null ? undefined : O.id.toString(), b || false, m.PRODUCT_LIST_ITEM_HEIGHT);
                        const o = new a.CatalogListItemScrollHelper(t);
                        ne(t);
                        ie(o);
                        se(t).then(() => {
                            j.QPL.markerEnd(T.QuickLogMarkerId.WHATSAPP_COLLECTION_VIEW_ALL, i.QuickLogActionType.SUCCESS);
                        }).catch(() => {
                            j.QPL.markerEnd(T.QuickLogMarkerId.WHATSAPP_COLLECTION_VIEW_ALL, i.QuickLogActionType.FAIL);
                        });
                        if (y !== undefined) {
                            Y.current.setScrollFromStart(y);
                        }
                    }).catch(e => {
                        j.QPL.markerEnd(T.QuickLogMarkerId.WHATSAPP_COLLECTION_VIEW_ALL, i.QuickLogActionType.FAIL);
                        (0, S.parseErrorState)(e, e => {
                            te(e);
                            re(false);
                        });
                    });
                    (0, v.default)(n).then(e => {
                        Z(e);
                        if (e) {
                            q.on("all", ce);
                        }
                    });
                }, []);
                const de = () => {
                    (0, k.qplStartCartView)("Collection");
                    if (!(h == null)) {
                        h(G.id.toString());
                    }
                };
                const ue = (0, L.default)((e, t) => {
                    if (!(C == null)) {
                        C(t.scrollTop);
                    }
                    if (le == null ? undefined : le.willLoadMore(t)) {
                        re(true);
                    }
                    if (!(le == null)) {
                        le.onScroll(e, t).then(e => {
                            if (e) {
                                re(false);
                            }
                        }).catch(e => {
                            re(false);
                            throw e;
                        });
                    }
                }, 100);
                const fe = (0, _.getCatalogDrawerMenu)({
                    onSendCatalog: () => {
                        if (Q) {
                            g(Q, G);
                        }
                    },
                    onCartClick: K ? de : undefined,
                    cartCount: q.itemCount,
                    catalogId: n.toString(),
                    canManageCatalog: b
                });
                const pe = ((o = e.collection) === null || o === undefined ? undefined : o.name) || E.fbt._("All Items", null, {
                    hk: "2x8dE2"
                });
                return (0, D.jsxs)(c.default, {
                    ref: t,
                    theme: "products",
                    onDrop: e.onBack,
                    children: [(0, D.jsx)(f.DrawerHeader, {
                        title: pe,
                        type: e.headerType || f.DRAWER_HEADER_TYPE.SMALL,
                        onBack: e.onBack,
                        menu: fe
                    }), (0, D.jsx)(d.default, {
                        flatListControllers: [Y.current],
                        onScroll: e => {
                            ue(e, e.currentTarget);
                        },
                        children: (0, D.jsx)(W, {
                            cartEnabled: K,
                            onCartClick: h,
                            handleCartClick: de,
                            catalog: Q,
                            dataSource: oe,
                            catalogFetchState: ee,
                            loadingMore: ae,
                            canManageCatalog: b,
                            collection: O,
                            onProductDetail: B,
                            onProductShare: H,
                            onEditCollection: F,
                            collectionFlatListController: Y.current
                        })
                    })]
                });
            });
            t.CollectionContentDrawer = F;
            F.displayName = "CollectionContentDrawer";
        },
        73665: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const {
                    collection: t,
                    onSeeAll: o,
                    allItems: n
                } = e;
                let i;
                let h;
                if (t) {
                    ({
                        name: i,
                        id: h
                    } = t);
                } else if (n) {
                    i = d.fbt._("All Items", null, {
                        hk: "2x8dE2"
                    });
                }
                const _ = (0, f.jsx)(s.TextDiv, {
                    className: (0, u.default)(p),
                    theme: "title",
                    children: (0, f.jsx)(a.EmojiText, {
                        text: i,
                        ellipsify: true,
                        titlify: true
                    })
                });
                let v;
                if (t) {
                    switch (t.reviewStatus) {
                        case r.PRODUCT_REVIEW_STATUS.REJECTED:
                            v = (0, f.jsx)("span", {
                                className: (0, u.default)(g),
                                children: d.fbt._("rejected", null, {
                                    hk: "3f3H8P"
                                })
                            });
                    }
                }
                return (0, f.jsx)(l.default, {
                    primary: _,
                    secondary: v,
                    detail: (0, f.jsx)(m, {
                        name: i,
                        onClick: function (e) {
                            ! function (e) {
                                e.preventDefault();
                                e.stopPropagation();
                            }(e);
                            (0, c.qplStartCollectionViewAll)("Catalog");
                            if (o && t) {
                                o(t);
                            } else if (o) {
                                o();
                            }
                        }
                    }),
                    theme: "collection-header",
                    idle: true,
                    className: (0, u.default)(C)
                }, h);
            };
            var l = n(o(170206));
            var i = n(o(196554));
            var a = o(305521);
            var r = o(530485);
            var s = o(180519);
            var c = o(887222);
            var d = o(548360);
            var u = n(o(156720));
            var f = o(785893);
            const p = {
                lineHeight: "erpdyial"
            };
            const h = {
                lineHeight: "erpdyial"
            };
            const g = {
                color: "mvxzr2tb"
            };
            const C = {
                paddingStart: "f78eapp6",
                marginTop: "o9i7y497",
                borderTop: "swyb62mu"
            };
            const m = e => {
                let {
                    name: t,
                    onClick: o
                } = e;
                return (0, f.jsx)(i.default, {
                    onClick: o,
                    className: (0, u.default)(h),
                    title: d.fbt._("Collection {collectionName}, see all", [d.fbt._param("collectionName", t)], {
                        hk: "1kqerQ"
                    }),
                    tabIndex: 0,
                    children: d.fbt._("See all", null, {
                        hk: "UPjou"
                    })
                });
            };
        },
        737106: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.getRejectedCollectionCopy = function (e, t) {
                let o;
                switch (e) {
                    case "drugs":
                        o = s.fbt._("WhatsApp's Commerce Policy for prescription, recreational, or other types of Drugs", null, {
                            hk: "B27ED"
                        });
                        return {
                            first: s.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_drugs}", [s.fbt._param("collections_rejected_policy_drugs", d(o, t))], {
                                    hk: "1ZU364"
                                }),
                                second: s.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_drugs}.", [s.fbt._param("collections_rejected_policy_drugs", d(o, t))], {
                                    hk: "4pJPwW"
                                })
                        };
                    case "weapons":
                        o = s.fbt._("WhatsApp's Commerce Policy for Weapons, ammunition, or explosives", null, {
                            hk: "1X972I"
                        });
                        return {
                            first: s.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_weapons}", [s.fbt._param("collections_rejected_policy_weapons", d(o, t))], {
                                    hk: "1RUS3E"
                                }),
                                second: (0, c.jsx)(r.default, {
                                    id: 188,
                                    params: {
                                        collections_rejected_policy_weapons: d(o, t)
                                    }
                                })
                        };
                    case "animals":
                        o = s.fbt._("WhatsApp's Commerce Policy for Animals", null, {
                            hk: "3hxXr8"
                        });
                        return {
                            first: s.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_animals}", [s.fbt._param("collections_rejected_policy_animals", d(o, t))], {
                                    hk: "3pIJQl"
                                }),
                                second: s.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_animals}.", [s.fbt._param("collections_rejected_policy_animals", d(o, t))], {
                                    hk: "jmRZD"
                                })
                        };
                    case "alcohol":
                        o = s.fbt._("WhatsApp's Commerce Policy for Alcohol", null, {
                            hk: "1G8YGL"
                        });
                        return {
                            first: s.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_alcohol}", [s.fbt._param("collections_rejected_policy_alcohol", d(o, t))], {
                                    hk: "1K5gKG"
                                }),
                                second: s.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_alcohol}.", [s.fbt._param("collections_rejected_policy_alcohol", d(o, t))], {
                                    hk: "1BLaYk"
                                })
                        };
                    case "gambling":
                        o = s.fbt._("WhatsApp's Commerce Policy for Real money gambling services", null, {
                            hk: "1zQIeM"
                        });
                        return {
                            first: s.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_gambling}", [s.fbt._param("collections_rejected_policy_gambling", d(o, t))], {
                                    hk: "2sjwfv"
                                }),
                                second: s.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_gambling}.", [s.fbt._param("collections_rejected_policy_gambling", d(o, t))], {
                                    hk: "2N7wJa"
                                })
                        };
                    case "tobacco":
                        o = s.fbt._("WhatsApp's Commerce Policy for Tobacco items and related paraphernalia", null, {
                            hk: "EAQLL"
                        });
                        return {
                            first: s.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_tobacco}", [s.fbt._param("collections_rejected_policy_tobacco", d(o, t))], {
                                    hk: "49kjok"
                                }),
                                second: s.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_tobacco}.", [s.fbt._param("collections_rejected_policy_tobacco", d(o, t))], {
                                    hk: "1hYXEJ"
                                })
                        };
                    case "overtly_sexualized_positioning":
                        o = s.fbt._("WhatsApp's Commerce Policy for Overtly sexualized positioning", null, {
                            hk: "1oaFbX"
                        });
                        return {
                            first: s.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_overtly_sexualized_positioning}", [s.fbt._param("collections_rejected_policy_overtly_sexualized_positioning", d(o, t))], {
                                    hk: "2imNEe"
                                }),
                                second: s.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_overtly_sexualized_positioning}.", [s.fbt._param("collections_rejected_policy_overtly_sexualized_positioning", d(o, t))], {
                                    hk: "2Bi73E"
                                })
                        };
                    case "adult":
                        o = s.fbt._("WhatsApp's Commerce Policy for Adult products or service", null, {
                            hk: "Wf7q5"
                        });
                        return {
                            first: s.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_adult}", [s.fbt._param("collections_rejected_policy_adult", d(o, t))], {
                                    hk: "2sWh94"
                                }),
                                second: s.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_adult}.", [s.fbt._param("collections_rejected_policy_adult", d(o, t))], {
                                    hk: "4Fv5xc"
                                })
                        };
                    case "supplements":
                        o = s.fbt._("WhatsApp's Commerce Policy for Unsafe ingestible supplements", null, {
                            hk: "9a4Y2"
                        });
                        return {
                            first: s.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_supplements}", [s.fbt._param("collections_rejected_policy_supplements", d(o, t))], {
                                    hk: "3m5ayk"
                                }),
                                second: s.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_supplements}.", [s.fbt._param("collections_rejected_policy_supplements", d(o, t))], {
                                    hk: "4g93H8"
                                })
                        };
                    case "body_parts_fluids":
                        o = s.fbt._("WhatsApp's Commerce Policy for Body parts and fluids", null, {
                            hk: "2EAd21"
                        });
                        return {
                            first: s.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_body_parts_fluids}", [s.fbt._param("collections_rejected_policy_body_parts_fluids", d(o, t))], {
                                    hk: "1fH8mf"
                                }),
                                second: s.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_body_parts_fluids}.", [s.fbt._param("collections_rejected_policy_body_parts_fluids", d(o, t))], {
                                    hk: "2HB7OE"
                                })
                        };
                    case "healthcare":
                        o = s.fbt._("WhatsApp's Commerce Policy for Medical and healthcare products", null, {
                            hk: "3vvgOF"
                        });
                        return {
                            first: s.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_healthcare}", [s.fbt._param("collections_rejected_policy_healthcare", d(o, t))], {
                                    hk: "1o5Y8p"
                                }),
                                second: s.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_healthcare}.", [s.fbt._param("collections_rejected_policy_healthcare", d(o, t))], {
                                    hk: "18tOqv"
                                })
                        };
                    case "misleading":
                        o = s.fbt._("WhatsApp's Commerce Policy for Business models, goods, items, or services that may be or are fraudulent, misleading, offensive, or deceptive, or may be or are exploitative, inappropriate, or exert undue pressure on targeted groups", null, {
                            hk: "3TyOB"
                        });
                        return {
                            first: s.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_misleading}", [s.fbt._param("collections_rejected_policy_misleading", d(o, t))], {
                                    hk: "1icG7s"
                                }),
                                second: s.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_misleading}.", [s.fbt._param("collections_rejected_policy_misleading", d(o, t))], {
                                    hk: "4gURah"
                                })
                        };
                    case "real_fake_currency":
                        o = s.fbt._("WhatsApp's Commerce Policy for Real, virtual, or fake currency", null, {
                            hk: "2XnVq2"
                        });
                        return {
                            first: s.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_real_fake_currency}", [s.fbt._param("collections_rejected_policy_real_fake_currency", d(o, t))], {
                                    hk: "2F8xUp"
                                }),
                                second: s.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_real_fake_currency}.", [s.fbt._param("collections_rejected_policy_real_fake_currency", d(o, t))], {
                                    hk: "3mr0Qt"
                                })
                        };
                    case "digital_services_products":
                        o = s.fbt._("WhatsApp's Commerce Policy for Digital and subscription services", null, {
                            hk: "2mvwqB"
                        });
                        return {
                            first: s.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_digital_services_products}", [s.fbt._param("collections_rejected_policy_digital_services_products", d(o, t))], {
                                    hk: "W6Ct0"
                                }),
                                second: s.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_digital_services_products}.", [s.fbt._param("collections_rejected_policy_digital_services_products", d(o, t))], {
                                    hk: "4gcYAt"
                                })
                        };
                    case "thrid_party_infringements":
                        o = s.fbt._("WhatsApp's Commerce Policy for Third-Party Infringement", null, {
                            hk: "48SSD"
                        });
                        return {
                            first: s.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_thrid_party_infringements}", [s.fbt._param("collections_rejected_policy_thrid_party_infringements", d(o, t))], {
                                    hk: "2S7xKD"
                                }),
                                second: s.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_thrid_party_infringements}.", [s.fbt._param("collections_rejected_policy_thrid_party_infringements", d(o, t))], {
                                    hk: "1UXaIr"
                                })
                        };
                    case "unauthorized_media":
                        o = s.fbt._("WhatsApp's Commerce Policy for Products or items that facilitate or encourage unauthorized access to digital media", null, {
                            hk: "2ldhoF"
                        });
                        return {
                            first: s.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_unauthorized_media}", [s.fbt._param("collections_rejected_policy_unauthorized_media", d(o, t))], {
                                    hk: "2oPAST"
                                }),
                                second: (0, c.jsx)(r.default, {
                                    id: 187,
                                    params: {
                                        collections_rejected_policy_unauthorized_media: d(o, t)
                                    }
                                })
                        };
                    case "illegal_products":
                        o = s.fbt._("WhatsApp's Commerce Policy for Illegal products or services", null, {
                            hk: "c5Zjc"
                        });
                        return {
                            first: s.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_illegal_products}", [s.fbt._param("collections_rejected_policy_illegal_products", d(o, t))], {
                                    hk: "41Oqb6"
                                }),
                                second: s.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_illegal_products}.", [s.fbt._param("collections_rejected_policy_illegal_products", d(o, t))], {
                                    hk: "46TgAV"
                                })
                        };
                    case "hazardous_goods_and_materials":
                        o = s.fbt._("WhatsApp's Commerce Policy for Business models, goods, items, or services that may be or are fraudulent, misleading, offensive, or deceptive, or may be or are exploitative, inappropriate, or exert undue pressure on targeted groups", null, {
                            hk: "3TyOB"
                        });
                        return {
                            first: s.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_hazardous_goods_and_materials}", [s.fbt._param("collections_rejected_policy_hazardous_goods_and_materials", d(o, t))], {
                                    hk: "smMcx"
                                }),
                                second: s.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_hazardous_goods_and_materials}.", [s.fbt._param("collections_rejected_policy_hazardous_goods_and_materials", d(o, t))], {
                                    hk: "SdRo5"
                                })
                        };
                    case "stolen_goods":
                        o = s.fbt._("WhatsApp's Commerce Policy", null, {
                            hk: "1kuvvN"
                        });
                        return {
                            first: s.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_stolen_goods}", [s.fbt._param("collections_rejected_policy_stolen_goods", d(o, t))], {
                                    hk: "4mvVou"
                                }),
                                second: s.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_stolen_goods}.", [s.fbt._param("collections_rejected_policy_stolen_goods", d(o, t))], {
                                    hk: "1Zd6PC"
                                })
                        };
                    case "human_exploitation_and_sexual_services":
                        o = s.fbt._("WhatsApp's Commerce Policy", null, {
                            hk: "1kuvvN"
                        });
                        return {
                            first: s.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_human_exploitation_and_sexual_services}", [s.fbt._param("collections_rejected_policy_human_exploitation_and_sexual_services", d(o, t))], {
                                    hk: "4yXqyf"
                                }),
                                second: s.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_human_exploitation_and_sexual_services}.", [s.fbt._param("collections_rejected_policy_human_exploitation_and_sexual_services", d(o, t))], {
                                    hk: "3XImZQ"
                                })
                        };
                    case "community_standards":
                        o = s.fbt._("WhatsApp's Business Terms", null, {
                            hk: "1x5ZqO"
                        });
                        return {
                            first: s.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_community_standards}", [s.fbt._param("collections_rejected_policy_community_standards", d(o, t))], {
                                    hk: "2AoLET"
                                }),
                                second: s.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_community_standards}.", [s.fbt._param("collections_rejected_policy_community_standards", d(o, t))], {
                                    hk: "apmZF"
                                })
                        };
                    case "discrimination":
                        o = s.fbt._("WhatsApp's Business Terms", null, {
                            hk: "1x5ZqO"
                        });
                        return {
                            first: s.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_discrimination}", [s.fbt._param("collections_rejected_policy_discrimination", d(o, t))], {
                                    hk: "4gmrAW"
                                }),
                                second: s.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_discrimination}.", [s.fbt._param("collections_rejected_policy_discrimination", d(o, t))], {
                                    hk: "3j6FXO"
                                })
                        };
                    default:
                        o = s.fbt._("WhatsApp's Commerce Policy", null, {
                            hk: "1kuvvN"
                        });
                        return {
                            first: s.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_other_violation}", [s.fbt._param("collections_rejected_policy_other_violation", d(o, t))], {
                                    hk: "3AiJjt"
                                }),
                                second: s.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_other_violation}.", [s.fbt._param("collections_rejected_policy_other_violation", d(o, t))], {
                                    hk: "A2Pf5"
                                })
                        };
                }
            };
            var l = n(o(196554));
            var i = n(o(846870));
            var a = o(753233);
            var r = n(o(825158));
            var s = o(548360);
            var c = o(785893);

            function d (e, t) {
                const o = t || i.default.WA_COMMERCE_POLICY_URL;
                return (0, c.jsx)(l.default, {
                    href: o,
                    onClick: e => {
                        e.preventDefault();
                        (0, a.openExternalLink)(o);
                    },
                    children: e
                });
            }
        },
        854682: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.logCollectionCreateClicked = function (e) {
                new a.CatalogBizWamEvent({
                    catalogBizAction: c.CATALOG_BIZ_ACTION.ACTION_COLLECTION_CREATE_CLICKED,
                    catalogEntryPoint: e.entryPoint,
                    catalogSessionId: e.session.toString()
                }).commit();
            };
            t.logCollectionCreated = function (e) {
                let {
                    catalogContext: t,
                    collectionId: o,
                    productCount: n
                } = e;
                new a.CatalogBizWamEvent({
                    catalogBizAction: c.CATALOG_BIZ_ACTION.ACTION_COLLECTION_CREATED,
                    catalogEntryPoint: t.entryPoint,
                    catalogSessionId: t.session.toString(),
                    productCount: n
                }).commit();
            };
            t.logCollectionDeleted = function (e) {
                let {
                    catalogContext: t,
                    collectionId: o
                } = e;
                new a.CatalogBizWamEvent({
                    catalogBizAction: c.CATALOG_BIZ_ACTION.ACTION_COLLECTION_DELETED,
                    catalogEntryPoint: t.entryPoint,
                    catalogSessionId: t.session.toString(),
                    collectionId: o
                }).commit();
            };
            t.logCollectionItemsAssignment = function (e) {
                let {
                    catalogContext: t,
                    collectionId: o,
                    addedCount: n,
                    removedCount: l
                } = e;
                if (n > 0) {
                    new a.CatalogBizWamEvent({
                        catalogBizAction: c.CATALOG_BIZ_ACTION.ACTION_COLLECTION_ASSIGN_ITEMS,
                        catalogEntryPoint: t.entryPoint,
                        catalogSessionId: t.session.toString(),
                        productCount: n,
                        collectionId: o
                    }).commit();
                }
                if (l > 0) {
                    new a.CatalogBizWamEvent({
                        catalogBizAction: c.CATALOG_BIZ_ACTION.ACTION_COLLECTION_UNASSIGN_ITEMS,
                        catalogEntryPoint: t.entryPoint,
                        catalogSessionId: t.session.toString(),
                        productCount: l,
                        collectionId: o
                    }).commit();
                }
            };
            t.logCollectionMenuClicked = function (e) {
                new a.CatalogBizWamEvent({
                    catalogBizAction: c.CATALOG_BIZ_ACTION.ACTION_MENU_COLLECTIONS_CLICK,
                    catalogEntryPoint: e.entryPoint,
                    catalogSessionId: e.session.toString()
                }).commit();
            };
            t.logCollectionRenamed = function (e) {
                let {
                    catalogContext: t,
                    collectionId: o
                } = e;
                new a.CatalogBizWamEvent({
                    catalogBizAction: c.CATALOG_BIZ_ACTION.ACTION_COLLECTION_DELETED,
                    catalogEntryPoint: t.entryPoint,
                    catalogSessionId: t.session.toString(),
                    collectionId: o
                }).commit();
            };
            t.logCollectionReorder = function (e) {
                let {
                    catalogContext: t,
                    movesCount: o
                } = e;
                new a.CatalogBizWamEvent({
                    catalogBizAction: c.CATALOG_BIZ_ACTION.ACTION_COLLECTION_CHANGE_ORDER,
                    catalogEntryPoint: t.entryPoint,
                    catalogSessionId: t.session.toString(),
                    productCount: o
                }).commit();
            };
            t.logCollectionSeeAllView = function (e) {
                let {
                    catalogOwnerJid: t,
                    catalogContext: o,
                    collectionId: n
                } = e;
                const a = (0, i.getProductStatsInFetched)(t, n);
                const c = a == null ? undefined : a.productIndex;
                const d = a == null ? undefined : a.collectionIndex;
                (0, s.logCatalogViewOrBizEvent)((0, l.default)({
                    isOwner: (0, s.isCatalogOwner)({
                        catalogOwnerJid: t
                    }),
                    productIndex: c,
                    collectionIndex: d
                }, (0, r.toDataForCatalogViewEvents)(o)));
            };
            var l = n(o(81109));
            var i = o(477627);
            var a = o(104209);
            var r = o(932523);
            var s = o(537066);
            var c = o(130756);
        },
        567105: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const {
                    onProductDetail: t,
                    onProductShare: o,
                    onCartOpen: n,
                    shareLinks: T,
                    onEditCollection: j,
                    onCollectionSeeAll: k,
                    canManageCatalog: E
                } = e;
                const I = (0, x.default)();
                const O = (0, P.useModelValues)(e.catalog, ["productCollection", "collections", "afterCursor", "id", "index"]);
                const L = (0, v.useContext)(l.DrawerContext);
                const A = (0, S.default)(() => new Set());
                const w = (0, S.default)(() => new r.default());
                const M = e => {
                    if (!(o == null)) {
                        o(e);
                    }
                };
                const R = e => {
                    (0, c.handleProductDelete)(O, e, (0, f.getProductCatalogContext)(L), "Collection");
                };
                const N = e => {
                    (0, c.handleProductVisibilityChange)(O, e, (0, f.getProductCatalogContext)(L), "Collections");
                };
                (0, b.useListeners)(Array.from(A.current).map(e => ({
                    source: e,
                    eventOrEvents: ["change:reviewStatus", "canAppeal"],
                    callback: I
                })));
                return (0, y.jsx)(y.Fragment, {
                    children: (0, y.jsx)(a.default, {
                        flatListControllers: [w.current],
                        children: (0, y.jsx)(i.FlatList, {
                            flatListController: w.current,
                            direction: "vertical",
                            forceConsistentRenderCount: false,
                            data: (() => {
                                const t = n !== undefined;
                                const o = e.data || [];
                                const l = [];
                                o.forEach(o => {
                                    const n = o.collection;
                                    const i = o.product;
                                    const a = o.allItems;
                                    if (n && i) {
                                        const e = n.id;
                                        l.push({
                                            itemKey: `${e.toString()}_${i.id.toString()}_${t.toString()}`,
                                            product: i,
                                            collectionId: e
                                        });
                                    } else if (n) {
                                        if (!A.current.has(n)) {
                                            A.current.add(n);
                                        }
                                        l.push({
                                            itemKey: `${n.id.toString()}_${n.reviewStatus.toString()}`,
                                            collection: n
                                        });
                                        if (!(n.reviewStatus !== g.PRODUCT_REVIEW_STATUS.PENDING && n.reviewStatus !== g.PRODUCT_REVIEW_STATUS.REJECTED)) {
                                            l.push({
                                                itemKey: `${n.id.toString()}_reviewBanner`,
                                                collection: n,
                                                height: (0, d.getCollectionIntegrityHeight)(n),
                                                reviewBanner: true
                                            });
                                        }
                                    } else if (a) {
                                        l.push({
                                            itemKey: "view_all",
                                            allItems: a
                                        });
                                    } else if (i) {
                                        const o = e.collectionId || undefined;
                                        l.push({
                                            itemKey: `${i.id.toString()}_${t.toString()}`,
                                            product: i,
                                            collectionId: o
                                        });
                                    }
                                });
                                return l;
                            })(),
                            renderItem: e => {
                                const {
                                    collection: o,
                                    product: l,
                                    allItems: i,
                                    reviewBanner: a,
                                    collectionId: r
                                } = e;
                                if (o) {
                                    if (a) {
                                        return (0, y.jsx)(d.CollectionIntegrityBanner, {
                                            collection: o,
                                            onEditCollection: j
                                        });
                                    } else {
                                        return (0, y.jsx)(C.default, {
                                            collection: o,
                                            onSeeAll: k
                                        });
                                    }
                                } else if (i) {
                                    return (0, y.jsx)(C.default, {
                                        allItems: i,
                                        onSeeAll: k
                                    });
                                } else if (l) {
                                    return (0, y.jsx)(p.default, {
                                        collectionId: r,
                                        product: l,
                                        onCartOpen: n,
                                        onClick: () => ((e, o) => {
                                            (0, _.qplStartProductView)("Collection");
                                            (0, h.logCatalogListDetailClick)({
                                                product: (0, m.unproxy)(e),
                                                catalogContext: (0, f.getProductCatalogContext)(L)
                                            });
                                            return t(e, o);
                                        })(l, r),
                                        onProductShare: T ? M : null,
                                        onProductDelete: R,
                                        onProductHideShow: N,
                                        theme: "product-of-collection",
                                        canManageCatalog: E
                                    });
                                } else {
                                    return null;
                                }
                            },
                            defaultItemHeight: u.PRODUCT_LIST_ITEM_HEIGHT,
                            keyOrder: s.KeyOrder.INVERSE
                        })
                    })
                });
            };
            var l = o(568550);
            var i = o(512938);
            var a = n(o(964223));
            var r = n(o(570834));
            var s = o(390185);
            var c = o(491606);
            var d = o(211185);
            var u = o(899841);
            var f = o(932523);
            var p = n(o(698690));
            var h = o(77548);
            var g = o(530485);
            var C = n(o(73665));
            var m = o(163139);
            var _ = o(887222);
            var v = o(667294);
            var x = n(o(969651));
            var S = n(o(637660));
            var b = o(808446);
            var P = o(655241);
            var y = o(785893);
        },
        87630: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.handleGrievanceOfficerDetailsError = t.handleCustomerCareDetailsError = t.getLegalEntityDetails = t.ComplianceInfoStructuralField = t.ComplianceInfoPrimitiveField = t.ComplianceInfoLoading = t.ComplianceInfoHelpCenterBanner = t.ComplianceInfoGroup = undefined;
            var l = n(o(348926));
            var i = n(o(420165));
            var a = o(637842);
            var r = o(778945);
            var s = n(o(831269));
            var c = n(o(969358));
            var d = o(753233);
            var u = o(690495);
            var f = n(o(469733));
            var p = n(o(932325));
            var h = o(956113);
            var g = o(180519);
            var C = o(676345);
            var m = o(548360);
            var _ = n(o(156720));
            var v = o(785893);
            const x = {
                fieldLabel: {
                    display: "f804f6gw",
                    lineHeight: "gz7w46tb"
                },
                fieldValue: {
                    display: "f804f6gw",
                    wordBreak: "cw3vfol9",
                    whiteSpace: "c2jc77nu"
                },
                helpCenterBanner: {
                    fontSize: "f8jlpxt4",
                    lineHeight: "jgi8eev7"
                },
                displayRight: {
                    textAlign: "cb8ormfa"
                }
            };
            const S = () => m.fbt._("Not Provided", null, {
                hk: "43OpXI"
            });
            t.ComplianceInfoGroup = e => {
                let {
                    title: t,
                    children: o
                } = e;
                return (0, v.jsx)(c.default, {
                    title: t,
                    xstyle: C.uiPadding.vert8,
                    children: o
                });
            };
            t.ComplianceInfoPrimitiveField = e => {
                let {
                    value: t,
                    label: o,
                    forceLTR: n
                } = e;
                return (0, v.jsxs)(b, {
                    children: [(0, v.jsx)(T, {
                        value: t,
                        forceLTR: n
                    }), (0, v.jsx)(y, {
                        label: o
                    })]
                });
            };
            t.ComplianceInfoStructuralField = e => {
                let {
                    valuesMap: t = {},
                    keys: o = [],
                    label: n
                } = e;
                const l = o.reduce((e, o) => t[o] ? e.concat(t[o]) : e, []);
                const i = l.length ? l.join(", ") : S();
                return (0, v.jsxs)(b, {
                    children: [(0, v.jsx)(T, {
                        value: i
                    }), (0, v.jsx)(y, {
                        label: n
                    })]
                });
            };
            const b = e => {
                let {
                    children: t
                } = e;
                return (0, v.jsx)(s.default, {
                    multiline: true,
                    restrictSpacing: true,
                    children: (0, v.jsx)("div", {
                        className: (0, _.default)(C.uiPadding.vert8),
                        children: t
                    })
                });
            };
            t.ComplianceInfoLoading = () => (0, v.jsx)(u.FlexRow, {
                align: "center",
                justify: "center",
                testid: "compliance-info-loading",
                children: (0, v.jsx)(f.default, {
                    children: (0, v.jsx)(h.Spinner, {})
                })
            });
            t.ComplianceInfoHelpCenterBanner = e => {
                let {
                    xstyle: t
                } = e;
                return (0, v.jsxs)("div", {
                    className: (0, _.default)(x.helpCenterBanner, t),
                    "data-testid": "compliance-help-center-banner",
                    children: [m.fbt._("Indian law requires additional information from businesses selling online.", null, {
                        hk: "1zuHU2"
                    }), " ", (0, v.jsx)(d.ExternalLink, {
                        href: "https://faq.whatsapp.com/general/account-and-profile/how-to-comply-with-the-laws-for-selling-online-in-India",
                        children: m.fbt._("Learn more", null, {
                            hk: "1JNnQ1"
                        })
                    })]
                });
            };
            const P = function () {
                var e = (0, l.default)(function* (e) {
                    const t = (e => (Array.isArray(e) ? e[0] : e).serialize())(yield r.BusinessProfileCollection.update(e, {
                        getMerchantCompliance: true
                    }));
                    if (t) {
                        return t.legalEntityDetails || undefined;
                    }
                    __LOG__(3)`compliance: cannot fetch business details (${e.toString()})`;
                });
                return function () {
                    return e.apply(this, arguments);
                };
            }();
            t.getLegalEntityDetails = P;
            const y = e => {
                let {
                    label: t
                } = e;
                return (0, v.jsx)("div", {
                    className: (0, _.default)(x.fieldLabel),
                    "data-testid": "compliance-info-field-label",
                    children: (0, v.jsx)(g.TextSpan, {
                        theme: "muted",
                        children: t
                    })
                });
            };
            const T = e => {
                let {
                    value: t,
                    forceLTR: o = false
                } = e;
                const n = p.default.isRTL();
                return (0, v.jsx)("div", {
                    className: (0, _.default)(x.fieldValue, C.uiMargin.vert3, n && o && x.displayRight),
                    dir: o || !n ? "ltr" : "rtl",
                    "data-testid": "compliance-info-field-value",
                    children: t || S()
                });
            };
            t.handleCustomerCareDetailsError = (e, t, o, n) => {
                if (!(0, a.existsCustomerCareDetailsContact)(e, t, o, n)) {
                    (0, i.default)(m.fbt._("At least one phone number is required. Please provide another phone number before removing this.", null, {
                        hk: "2LGoJd"
                    }));
                }
            };
            t.handleGrievanceOfficerDetailsError = (e, t, o, n) => {
                if (!(0, a.existsGrievanceOfficerDetailsContact)(e, t, o, n)) {
                    (0, i.default)(m.fbt._("At least one contact method is required. Please provide another contact method first before removing this.", null, {
                        hk: "NXBiy"
                    }));
                }
            };
        },
        760157: (e, t, o) => {
            "use strict";

            var n = o(170315).default;
            var l = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const {
                    images: t,
                    renderFallback: o,
                    fallbackMediaData: l,
                    fetching: _,
                    onClick: x
                } = e;
                const S = (0, m.useRef)(null);
                const b = (0, m.useRef)(null);
                const P = (0, m.useRef)(null);
                const y = (0, m.useRef)(null);
                const T = (0, m.useRef)(null);
                const [j, k] = (0, m.useState)(null);
                const [E, I] = (0, m.useState)(t.filter(e => e.mediaData.mediaStage === d.MEDIA_DATA_STAGE.RESOLVED).length);
                const [O, L] = (0, m.useState)(false);
                const A = E === t.length;
                const w = () => I(e => e + 1);
                (0, m.useEffect)(() => {
                    let e = null;
                    if (!A && !o) {
                        var t;
                        var l;
                        const o = b.current;
                        if (!o) {
                            return;
                        }
                        if (!((t = P.current) === null || t === undefined)) {
                            t.controller.abort();
                        }
                        e = new n();
                        const r = e.signal;
                        const s = (((l = P.current) === null || l === undefined ? undefined : l.promise) || Promise.resolve()).then(() => (0, h.default)(o, {
                            opacity: [1, 0]
                        }, {
                            delay: 75,
                            duration: 50
                        }));
                        const c = (0, a.default)(s, r).then(() => {
                            if (r.aborted) {
                                throw new i.AbortError();
                            }
                            L(true);
                        }).catch((0, i.catchAbort)(() => {
                            (0, h.default)(o, "stop", true);
                        })).finally(() => {
                            P.current = null;
                        });
                        P.current = {
                            promise: c,
                            controller: e
                        };
                    }
                    return () => {
                        var t;
                        if (!((t = e) === null || t === undefined)) {
                            t.abort();
                        }
                    };
                }, [A, o]);
                const M = () => {
                    var e;
                    if ((e = S.current) === null || e === undefined ? undefined : e.children) {
                        if (S.current.scrollWidth === S.current.offsetWidth) {
                            return null;
                        } else if (S.current.scrollLeft === 0) {
                            return "next";
                        } else if (S.current.scrollWidth - 1 <= S.current.scrollLeft + S.current.offsetWidth) {
                            return "prev";
                        } else {
                            return "both";
                        }
                    } else {
                        return null;
                    }
                };
                (0, m.useEffect)(() => {
                    k(M());
                }, [A]);
                if (o && t.length === 0) {
                    return (0, v.jsx)("div", {
                        className: g.default.carousel,
                        dir: "ltr",
                        children: (0, v.jsx)("div", {
                            className: (0, C.default)(g.default.contentContainer, g.default.slidesContainer),
                            children: l && (0, v.jsx)(c.default, {
                                altText: "",
                                mediaData: l,
                                renderFallback: true,
                                singleSlide: true
                            })
                        })
                    });
                }
                let R;
                let N;
                let D;
                const B = () => {
                    y.current = null;
                    const e = M();
                    if (j !== e) {
                        k(e);
                    }
                };
                if (t.length > 1) {
                    const e = () => {
                        const e = S.current;
                        if (e != null && (j === "prev" || j === "both")) {
                            let t = 0;
                            const o = e.scrollLeft + Math.floor(e.offsetWidth / 2);
                            let n = e.lastElementChild;
                            for (; n instanceof HTMLElement && t === 0;) {
                                const e = n.offsetLeft + Math.floor(n.offsetWidth / 2);
                                if (e < o) {
                                    t = e - o;
                                }
                                n = n.previousElementSibling;
                            }
                            if (t !== 0) {
                                e.scrollBy({
                                    left: t,
                                    behavior: "smooth"
                                });
                            }
                        }
                    };
                    const t = () => {
                        const e = S.current;
                        if (e != null && (j === "next" || j === "both")) {
                            let t = 0;
                            const o = e.scrollLeft + Math.floor(e.offsetWidth / 2);
                            let n = e.firstElementChild;
                            for (; n instanceof HTMLElement && t === 0;) {
                                const e = n.offsetLeft + Math.floor(n.offsetWidth / 2);
                                if (o < e) {
                                    t = e - o;
                                }
                                n = n.nextElementSibling;
                            }
                            if (t !== 0) {
                                e.scrollBy({
                                    left: t,
                                    behavior: "smooth"
                                });
                            }
                        }
                    };
                    const o = () => {
                        T.current = null;
                        const e = M();
                        if (j !== e) {
                            k(e);
                        }
                    };
                    D = () => {
                        if (T.current == null) {
                            T.current = window.requestAnimationFrame(o);
                        }
                    };
                    if (A && j != null) {
                        R = (0, v.jsx)(r.ChevronButton, {
                            type: r.ButtonType.Prev,
                            onClick: e,
                            onKeyDown: e,
                            disabled: j !== "prev" && j !== "both",
                            theme: f.RoundTheme.Small,
                            overMedia: true
                        });
                        N = (0, v.jsx)(r.ChevronButton, {
                            type: r.ButtonType.Next,
                            onClick: t,
                            onKeyDown: t,
                            disabled: j !== "next" && j !== "both",
                            theme: f.RoundTheme.Small,
                            overMedia: true
                        });
                    }
                }
                const H = t.length === 1;
                const W = t.map((e, t) => (0, v.jsx)(c.default, {
                    altText: "",
                    image: e,
                    singleSlide: H,
                    mediaData: e.mediaData,
                    onClick: x,
                    onLoad: w
                }, t));
                const F = A ? null : (0, v.jsx)("div", {
                    className: (0, C.default)(g.default.contentContainer, g.default.spinnerContainer),
                    children: (0, v.jsx)("div", {
                        className: g.default.spinner,
                        ref: b,
                        children: (0, v.jsx)(p.Spinner, {
                            color: "default",
                            size: 50,
                            stroke: 4
                        })
                    })
                });
                const U = (0, s.cx)({
                    [g.default.loaded]: !_ && A,
                    [g.default.fadeIn]: O,
                    [g.default.carousel]: true
                });
                return (0, v.jsxs)("div", {
                    className: U,
                    dir: "ltr",
                    children: [F, (0, v.jsx)("div", {
                        ref: S,
                        className: (0, C.default)(g.default.contentContainer, g.default.slidesContainer),
                        onScroll: D,
                        children: W
                    }), R, N, (0, v.jsx)(u.default, {
                        onResize: () => {
                            if (y.current == null) {
                                y.current = window.requestAnimationFrame(B);
                            }
                        }
                    })]
                });
            };
            var i = o(898817);
            var a = l(o(229922));
            var r = o(305989);
            var s = o(752253);
            var c = l(o(585760));
            var d = o(172259);
            var u = l(o(929796));
            var f = o(435595);
            var p = o(956113);
            var h = l(o(330619));
            var g = l(o(851713));
            var C = l(o(261294));
            var m = o(667294);
            var _ = l(o(730523));
            var v = o(785893);
            _.default.polyfill();
        },
        585760: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = undefined;
            var l = o(172259);
            var i = n(o(897679));
            var a = o(667294);
            var r = o(655241);
            var s = o(785893);
            var c = e => {
                let {
                    mediaData: t,
                    altText: o,
                    image: n,
                    singleSlide: c,
                    renderFallback: d,
                    onClick: u,
                    onLoad: f,
                    forwardRef: p
                } = e;
                const {
                    fullHeight: h,
                    fullWidth: g,
                    mediaStage: C,
                    renderableUrl: m
                } = (0, r.useModelValues)(t, ["fullHeight", "fullWidth", "mediaStage", "renderableUrl"]);
                const _ = (0, a.useRef)(null);
                const v = (0, a.useRef)(C === l.MEDIA_DATA_STAGE.RESOLVED);
                (0, a.useEffect)(() => {
                    if (!(!f || v.current || d || C !== l.MEDIA_DATA_STAGE.RESOLVED)) {
                        f();
                        v.current = true;
                    }
                }, [f, d, C]);
                const x = !!c;
                let S = g && h ? g / h : 0.8;
                if (S < 0.8) {
                    S = 0.8;
                }
                if (S > 1.91) {
                    S = 1.91;
                }
                if (S > 1 && !x) {
                    S = 1;
                }
                const b = {
                    width: x && S < 1 ? S * 100 + "%" : S !== 1 || c ? null : "100%"
                };
                const P = {
                    paddingTop: `${Math.floor(100 / S)}%`
                };
                const y = {
                    cursor: "" + (u ? "pointer" : "auto")
                };
                return (0, s.jsx)("div", {
                    ref: p ? e => p(e) : null,
                    className: i.default.slide,
                    style: b,
                    children: (0, s.jsx)("div", {
                        className: i.default.slideInnerContainer,
                        style: P,
                        children: (0, s.jsx)("img", {
                            ref: _,
                            alt: o,
                            src: m,
                            className: i.default.image,
                            style: y,
                            draggable: "false",
                            onClick: () => {
                                if (u && _.current && n) {
                                    u(_.current, n);
                                }
                            }
                        })
                    })
                });
            };
            t.default = c;
        },
        115888: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.BusinessAddressIcon = function (e) {
                var t;
                const {
                    iconXstyle: o,
                    height: n,
                    width: d,
                    viewBox: u
                } = e;
                const f = (0, i.default)(e, c);
                let p;
                if (u) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: o = 0,
                        height: n = 0
                    } = u;
                    p = [e, t, o, n].join(" ");
                }
                let h = 24;
                let g = 24;
                if (!(n == null && d == null)) {
                    h = n;
                    g = d;
                }
                return (0, s.jsx)(a.BaseSvgSpan, (0, l.default)((0, l.default)({
                    name: "business-address"
                }, f), {}, {
                    children: (0, s.jsxs)("svg", {
                        viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 24",
                        height: h,
                        width: g,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, r.default)(o),
                        version: "1.1",
                        children: [(0, s.jsx)("title", {
                            children: "business-address"
                        }), (0, s.jsx)("desc", {
                            children: "Created with Sketch."
                        }), (0, s.jsx)("defs", {}), (0, s.jsxs)("g", {
                            stroke: "none",
                            strokeWidth: 1,
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, s.jsx)("path", {
                                d: "M12.0497571,11.9753826 C10.5804884,11.9753826 9.42411942,10.8207142 9.42411942,9.34974492 C9.42411942,7.88047615 10.5804884,6.72580776 12.0497571,6.72580776 C13.5190259,6.72580776 14.6753948,7.88047615 14.6753948,9.34974492 C14.6753948,10.8207142 13.5190259,11.9753826 12.0497571,11.9753826 M12.0497571,2 C7.95485066,2 4.70001221,5.25483845 4.70001221,9.34974492 C4.70001221,14.8101871 12.0497571,23 12.0497571,23 C12.0497571,23 19.399502,14.8101871 19.399502,9.34974492 C19.399502,5.25483845 16.1446636,2 12.0497571,2",
                                id: "Fill-1",
                                fill: "currentColor"
                            }), (0, s.jsx)("g", {
                                id: "slices"
                            })]
                        })]
                    })
                }));
            };
            var l = n(o(81109));
            var i = n(o(506479));
            var a = o(220584);
            var r = n(o(156720));
            var s = o(785893);
            const c = ["iconXstyle", "height", "width", "viewBox"];
        },
        624573: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.BusinessCategoryIcon = function (e) {
                var t;
                const {
                    iconXstyle: o,
                    height: n,
                    width: d,
                    viewBox: u
                } = e;
                const f = (0, i.default)(e, c);
                let p;
                if (u) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: o = 0,
                        height: n = 0
                    } = u;
                    p = [e, t, o, n].join(" ");
                }
                let h = 24;
                let g = 24;
                if (!(n == null && d == null)) {
                    h = n;
                    g = d;
                }
                return (0, s.jsx)(a.BaseSvgSpan, (0, l.default)((0, l.default)({
                    name: "business-category"
                }, f), {}, {
                    children: (0, s.jsxs)("svg", {
                        viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 24",
                        height: h,
                        width: g,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, r.default)(o),
                        version: "1.1",
                        children: [(0, s.jsx)("title", {
                            children: "business-category"
                        }), (0, s.jsx)("desc", {
                            children: "Created with Sketch."
                        }), (0, s.jsx)("defs", {}), (0, s.jsxs)("g", {
                            stroke: "none",
                            strokeWidth: 1,
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, s.jsx)("path", {
                                d: "M5.60860827,7.15515467 C4.78378352,7.15515467 4.06206187,6.43343302 4.06206187,5.60860827 C4.06206187,4.78378352 4.78378352,4.06206187 5.60860827,4.06206187 C6.43343302,4.06206187 7.15515467,4.78378352 7.15515467,5.60860827 C7.15515467,6.43343302 6.43343302,7.15515467 5.60860827,7.15515467 M22.0020001,11.897897 L12.7227217,2.61861856 C12.4134124,2.20620619 11.897897,2 11.2792784,2 L4.06206187,2 C2.92792784,2 2,2.92792784 2,4.06206187 L2,11.2792784 C2,11.897897 2.20620619,12.4134124 2.61861856,12.7227217 L11.897897,22.0020001 C12.3103093,22.4144125 12.8258248,22.6206187 13.3413403,22.6206187 C13.9599588,22.6206187 14.4754743,22.4144125 14.7847836,22.0020001 L22.0020001,14.7847836 C22.4144125,14.3723712 22.6206187,13.8568557 22.6206187,13.3413403 C22.6206187,12.7227217 22.4144125,12.2072063 22.0020001,11.897897",
                                id: "Page-1-Copy-2",
                                fill: "currentColor"
                            }), (0, s.jsx)("g", {
                                id: "slices",
                                transform: "translate(0.000000, -234.000000)"
                            })]
                        })]
                    })
                }));
            };
            var l = n(o(81109));
            var i = n(o(506479));
            var a = o(220584);
            var r = n(o(156720));
            var s = o(785893);
            const c = ["iconXstyle", "height", "width", "viewBox"];
        },
        423082: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.BusinessEmailIcon = function (e) {
                var t;
                const {
                    iconXstyle: o,
                    height: n,
                    width: d,
                    viewBox: u
                } = e;
                const f = (0, i.default)(e, c);
                let p;
                if (u) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: o = 0,
                        height: n = 0
                    } = u;
                    p = [e, t, o, n].join(" ");
                }
                let h = 24;
                let g = 24;
                if (!(n == null && d == null)) {
                    h = n;
                    g = d;
                }
                return (0, s.jsx)(a.BaseSvgSpan, (0, l.default)((0, l.default)({
                    name: "business-email"
                }, f), {}, {
                    children: (0, s.jsxs)("svg", {
                        viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 24",
                        height: h,
                        width: g,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, r.default)(o),
                        version: "1.1",
                        children: [(0, s.jsx)("title", {
                            children: "business-email"
                        }), (0, s.jsx)("desc", {
                            children: "Created with Sketch."
                        }), (0, s.jsx)("defs", {}), (0, s.jsxs)("g", {
                            stroke: "none",
                            strokeWidth: 1,
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, s.jsx)("path", {
                                d: "M20.9169216,8.25409863 L12.2871787,13.5717219 L3.65743574,8.25409863 L3.65743574,6.12704932 L12.2871787,11.4446726 L20.9169216,6.12704932 L20.9169216,8.25409863 Z M20.9169216,4 L3.65743574,4 C2.47084608,4 1.51078718,4.95717219 1.51078718,6.12704932 L1.5,18.8893452 C1.5,20.0592223 2.47084608,21.0163945 3.65743574,21.0163945 L20.9169216,21.0163945 C22.1035113,21.0163945 23.0743574,20.0592223 23.0743574,18.8893452 L23.0743574,6.12704932 C23.0743574,4.95717219 22.1035113,4 20.9169216,4 L20.9169216,4 Z",
                                fill: "currentColor"
                            }), (0, s.jsx)("g", {
                                id: "slices",
                                transform: "translate(0.000000, -480.000000)"
                            })]
                        })]
                    })
                }));
            };
            var l = n(o(81109));
            var i = n(o(506479));
            var a = o(220584);
            var r = n(o(156720));
            var s = o(785893);
            const c = ["iconXstyle", "height", "width", "viewBox"];
        },
        36409: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.BusinessWebsiteIcon = function (e) {
                var t;
                const {
                    iconXstyle: o,
                    height: n,
                    width: d,
                    viewBox: u
                } = e;
                const f = (0, i.default)(e, c);
                let p;
                if (u) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: o = 0,
                        height: n = 0
                    } = u;
                    p = [e, t, o, n].join(" ");
                }
                let h = 24;
                let g = 24;
                if (!(n == null && d == null)) {
                    h = n;
                    g = d;
                }
                return (0, s.jsx)(a.BaseSvgSpan, (0, l.default)((0, l.default)({
                    name: "business-website"
                }, f), {}, {
                    children: (0, s.jsx)("svg", {
                        viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 24",
                        height: h,
                        width: g,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, r.default)(o),
                        version: "1.1",
                        x: "0px",
                        y: "0px",
                        enableBackground: "new 0 0 24 24",
                        xmlSpace: "preserve",
                        children: (0, s.jsx)("path", {
                            id: "Fill-1-Copy",
                            fill: "currentColor",
                            enableBackground: "new    ",
                            d: "M18.4,17.7c-0.3-0.8-1-1.5-2-1.5h-1v-3.1 c0-0.6-0.4-1-1-1H8.2V10h2.1c0.6,0,1-0.4,1-1V6.9h2.1c1.1,0,2.1-0.9,2.1-2.1V4.4c3,1.3,5.2,4.3,5.2,7.7 C20.6,14.3,19.8,16.3,18.4,17.7L18.4,17.7z M11,20.6C6.8,20,3.4,16.4,3.4,12c0-0.7,0.1-1.3,0.2-1.9l5.2,5.2v1.1c0,1.2,1,2.2,2.2,2.2 V20.6z M12,1.5C6.2,1.5,1.5,6.2,1.5,12S6.2,22.5,12,22.5S22.5,17.8,22.5,12S17.8,1.5,12,1.5L12,1.5z"
                        })
                    })
                }));
            };
            var l = n(o(81109));
            var i = n(o(506479));
            var a = o(220584);
            var r = n(o(156720));
            var s = o(785893);
            const c = ["iconXstyle", "height", "width", "viewBox"];
        },
        626513: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.CartInterstitialGraphicIcon = function (e) {
                var t;
                const {
                    iconXstyle: o,
                    height: n,
                    width: d,
                    viewBox: u
                } = e;
                const f = (0, i.default)(e, c);
                let p;
                if (u) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: o = 0,
                        height: n = 0
                    } = u;
                    p = [e, t, o, n].join(" ");
                }
                let h = 116;
                let g = 117;
                if (!(n == null && d == null)) {
                    h = n;
                    g = d;
                }
                return (0, s.jsx)(a.BaseSvgSpan, (0, l.default)((0, l.default)({
                    name: "cart-interstitial-graphic"
                }, f), {}, {
                    children: (0, s.jsxs)("svg", {
                        viewBox: (t = p) !== null && t !== undefined ? t : "0 0 117 116",
                        height: h,
                        width: g,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, r.default)(o),
                        fill: "none",
                        children: [(0, s.jsx)("path", {
                            opacity: 0.15,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M10.7538 28.8194L1.11733 25.7279L10.7538 22.6365L13.8452 13L16.9367 22.6365L26.5732 25.7279L16.9367 28.8194L13.8453 38.4558L10.7538 28.8194Z",
                            fill: "currentColor"
                        }), (0, s.jsx)("path", {
                            opacity: 0.6,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M85.568 105.137L78.0729 102.733L85.568 100.329L87.9724 92.8335L90.3769 100.329L97.8719 102.733L90.3769 105.137L87.9724 112.632L85.568 105.137Z",
                            fill: "currentColor"
                        }), (0, s.jsx)("path", {
                            opacity: 0.38,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M18.1989 86.9097L13.3807 85.364L18.1989 83.8182L19.7447 79L21.2904 83.8182L26.1086 85.364L21.2904 86.9097L19.7447 91.7279L18.1989 86.9097Z",
                            fill: "currentColor"
                        }), (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M94.8452 58C94.8452 77.8823 78.7274 94 58.8452 94C38.9629 94 22.8452 77.8823 22.8452 58C22.8452 38.1177 38.9629 22 58.8452 22C66.1124 22 72.8767 24.1533 78.5348 27.8568C77.4618 29.6538 76.8452 31.7549 76.8452 34C76.8452 40.6274 82.2178 46 88.8452 46C90.1496 46 91.4054 45.7919 92.5812 45.407C94.0449 49.3267 94.8452 53.5699 94.8452 58ZM95 32.5H90.5V28H87.5V32.5H83V35.5H87.5V40H90.5V35.5H95V32.5ZM48.3602 70C48.3602 68.35 49.6952 67 51.3452 67C52.9952 67 54.3452 68.35 54.3452 70C54.3452 71.65 52.9952 73 51.3452 73C49.6952 73 48.3602 71.65 48.3602 70ZM42.3452 46V43H47.2502L48.6602 46H70.8452C71.6702 46 72.3452 46.675 72.3452 47.5C72.3452 47.755 72.2852 48.01 72.1652 48.22L66.7952 57.955C66.2852 58.885 65.2952 59.5 64.1702 59.5H52.9952L51.6452 61.945L51.6002 62.125C51.6002 62.335 51.7652 62.5 51.9752 62.5H69.3452V65.5H51.3452C49.6952 65.5 48.3452 64.15 48.3452 62.5C48.3452 61.975 48.4802 61.48 48.7202 61.06L50.7452 57.385L45.3452 46H42.3452ZM63.3602 70C63.3602 68.35 64.6952 67 66.3452 67C67.9952 67 69.3452 68.35 69.3452 70C69.3452 71.65 67.9952 73 66.3452 73C64.6952 73 63.3602 71.65 63.3602 70Z",
                            fill: "currentColor"
                        })]
                    })
                }));
            };
            var l = n(o(81109));
            var i = n(o(506479));
            var a = o(220584);
            var r = n(o(156720));
            var s = o(785893);
            const c = ["iconXstyle", "height", "width", "viewBox"];
        },
        307476: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.FbshopsIcon = function (e) {
                var t;
                const {
                    iconXstyle: o,
                    height: n,
                    width: d,
                    viewBox: u
                } = e;
                const f = (0, i.default)(e, c);
                let p;
                if (u) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: o = 0,
                        height: n = 0
                    } = u;
                    p = [e, t, o, n].join(" ");
                }
                let h = 12;
                let g = 120;
                if (!(n == null && d == null)) {
                    h = n;
                    g = d;
                }
                return (0, s.jsx)(a.BaseSvgSpan, (0, l.default)((0, l.default)({
                    name: "fbshops"
                }, f), {}, {
                    children: (0, s.jsxs)("svg", {
                        viewBox: (t = p) !== null && t !== undefined ? t : "0 0 120 12",
                        height: h,
                        width: g,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, r.default)(o),
                        fill: "none",
                        children: [(0, s.jsx)("path", {
                            fill: "currentColor",
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M92.8438 9.10606V0.387207H93.7769V4.29277C93.9935 3.90261 94.273 3.59506 94.6155 3.37013C94.958 3.1452 95.3537 3.03272 95.8025 3.03272H95.9206C96.6018 3.03272 97.1215 3.25667 97.4798 3.70456C97.838 4.15244 98.0172 4.79242 98.0172 5.6245V9.10606H97.0841V5.76184C97.0841 5.14873 96.9719 4.68692 96.7475 4.37638C96.523 4.06584 96.1707 3.91058 95.6903 3.91058H95.5782C95.1411 3.91058 94.7681 4.0539 94.459 4.34056C94.15 4.6272 93.9226 4.98749 93.7769 5.42145V9.10606H92.8438ZM87.576 9.23744C86.8358 9.23744 86.1872 9.10009 85.6301 8.82538C85.0729 8.55068 84.6074 8.14859 84.2334 7.61908L84.9715 6.96217C85.629 7.86193 86.4972 8.31182 87.576 8.31182H87.7C88.3812 8.31182 88.8949 8.1874 89.2413 7.93858C89.5878 7.68975 89.761 7.35035 89.761 6.92038C89.761 6.62178 89.6853 6.37893 89.5337 6.19181C89.3821 6.00469 89.1873 5.8574 88.9491 5.7499C88.7109 5.64241 88.4599 5.5608 88.196 5.50506L86.6664 5.18258C86.32 5.11092 85.9814 4.99248 85.6507 4.82726C85.32 4.66204 85.0464 4.43312 84.8298 4.14049C84.6133 3.84788 84.505 3.47463 84.505 3.02078C84.505 2.53905 84.63 2.11804 84.88 1.75774C85.1301 1.39744 85.4804 1.11677 85.9313 0.915713C86.3821 0.714661 86.9106 0.614136 87.5169 0.614136H87.6468C88.9461 0.614136 89.9402 1.12174 90.6292 2.13694L89.9027 2.74011C89.5839 2.30217 89.2404 1.99263 88.8722 1.81149C88.5041 1.63034 88.0897 1.53977 87.6291 1.53977H87.5051C86.9146 1.53977 86.4372 1.66717 86.073 1.92196C85.7088 2.17676 85.5267 2.51715 85.5267 2.94314C85.5267 3.32932 85.6695 3.61795 85.9549 3.80906C86.2404 4.00015 86.6016 4.14149 87.0386 4.23306L88.515 4.54359C88.759 4.59535 89.013 4.67199 89.2769 4.77351C89.5406 4.87503 89.7867 5.01338 90.015 5.18855C90.2434 5.36373 90.4284 5.58567 90.5701 5.8544C90.7118 6.12314 90.7827 6.45059 90.7827 6.83677C90.7827 7.57728 90.5101 8.16251 89.9648 8.59248C89.4195 9.02246 88.6666 9.23744 87.7059 9.23744H87.576ZM101.265 8.83733C101.694 9.10408 102.202 9.23744 102.789 9.23744H102.907C103.494 9.23744 104.002 9.10408 104.431 8.83733C104.86 8.57059 105.192 8.20432 105.426 7.73851C105.66 7.27272 105.777 6.73923 105.777 6.13807C105.777 5.53292 105.66 4.99745 105.426 4.53165C105.192 4.06584 104.86 3.69958 104.431 3.43284C104.002 3.16609 103.494 3.03272 102.907 3.03272H102.789C102.202 3.03272 101.694 3.16609 101.265 3.43284C100.836 3.69958 100.504 4.06584 100.27 4.53165C100.036 4.99745 99.9188 5.53292 99.9188 6.13807C99.9188 6.73923 100.036 7.27272 100.27 7.73851C100.504 8.20432 100.836 8.57059 101.265 8.83733ZM102.795 8.36555H102.901C103.488 8.36555 103.952 8.16251 104.295 7.75642C104.637 7.35034 104.809 6.81088 104.809 6.13806C104.809 5.46126 104.637 4.9208 104.295 4.51671C103.952 4.11261 103.488 3.91057 102.901 3.91057H102.795C102.208 3.91057 101.744 4.11261 101.401 4.51671C101.059 4.9208 100.887 5.46126 100.887 6.13806C100.887 6.81088 101.059 7.35034 101.401 7.75642C101.744 8.16251 102.208 8.36555 102.795 8.36555ZM107.773 3.1641V11.6142H108.706V8.10279C108.927 8.48102 109.214 8.76468 109.569 8.95378C109.923 9.14289 110.313 9.23744 110.738 9.23744H110.856C111.376 9.23744 111.829 9.10607 112.214 8.8433C112.6 8.58054 112.9 8.21627 113.115 7.75046C113.33 7.28466 113.437 6.7472 113.437 6.13807C113.437 5.52496 113.33 4.98551 113.115 4.51971C112.9 4.0539 112.6 3.68962 112.214 3.42686C111.829 3.1641 111.376 3.03272 110.856 3.03272H110.738C110.301 3.03272 109.906 3.13326 109.554 3.3343C109.202 3.53535 108.919 3.83493 108.706 4.23306V3.1641H107.773ZM110.525 8.37152H110.638C111.201 8.37152 111.646 8.17644 111.975 7.78628C112.304 7.39612 112.468 6.84672 112.468 6.13806C112.468 5.42941 112.304 4.88001 111.975 4.48984C111.646 4.09968 111.201 3.90461 110.638 3.90461H110.525C110.088 3.90461 109.715 4.03399 109.406 4.29277C109.097 4.55155 108.864 4.88796 108.706 5.30201V6.96815C108.864 7.3822 109.098 7.71959 109.409 7.98037C109.72 8.24114 110.092 8.37152 110.525 8.37152ZM114.943 8.07294C115.47 8.84927 116.321 9.23744 117.494 9.23744H117.618C118.339 9.23744 118.899 9.07521 119.299 8.75075C119.698 8.42627 119.897 8.00327 119.897 7.48173C119.897 7.00797 119.751 6.63374 119.457 6.35902C119.164 6.08432 118.756 5.89124 118.232 5.77976L117.069 5.53491C116.711 5.45927 116.455 5.35875 116.301 5.23334C116.148 5.10793 116.071 4.93973 116.071 4.72872C116.071 4.458 116.196 4.246 116.446 4.09272C116.696 3.93945 117.024 3.86281 117.429 3.86281H117.535C117.882 3.86281 118.187 3.92651 118.451 4.0539C118.715 4.18131 118.945 4.38634 119.142 4.669L119.791 4.13751C119.295 3.40099 118.547 3.03272 117.547 3.03272H117.429C116.744 3.03272 116.192 3.19496 115.773 3.51943C115.353 3.8439 115.144 4.27287 115.144 4.80636C115.144 5.63843 115.707 6.16992 116.833 6.40083L117.972 6.63814C118.322 6.71641 118.573 6.82244 118.725 6.95621C118.889 7.09953 118.97 7.29063 118.97 7.5295C118.97 7.80819 118.849 8.02417 118.607 8.17744C118.365 8.33072 118.027 8.40736 117.594 8.40736H117.488C116.642 8.40736 116.01 8.10479 115.592 7.49964L114.943 8.07294Z"
                        }), (0, s.jsx)("path", {
                            fill: "currentColor",
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14.7972 9.18846H16.0799C16.1622 9.18846 16.209 9.1404 16.1884 9.05598C15.4415 6.36173 14.3061 3.39664 13.1708 0.872397C13.1352 0.777286 13.0408 0.719606 12.9424 0.732885H11.2714C11.1696 0.727073 11.0764 0.791175 11.043 0.889988C9.90078 3.39079 8.77119 6.35939 8.02992 9.05598C8.00707 9.1404 8.05389 9.18846 8.13613 9.18846H9.37197C9.43729 9.19366 9.49573 9.14691 9.50674 9.0806C9.67235 8.38534 9.87795 7.65493 10.1132 6.91746H14.0492C14.2844 7.65493 14.4911 8.38534 14.6614 9.0806C14.6734 9.14678 14.7319 9.19318 14.7972 9.18846ZM12.2194 2.06241C12.7082 3.1727 13.1845 4.3932 13.6139 5.61371H10.5427C10.9721 4.3932 11.4541 3.1727 11.943 2.06241H12.2194ZM6.29128 1.96269V0.848619C6.28292 0.807134 6.27132 0.779014 6.25648 0.764251C6.23422 0.742099 6.20415 0.73015 6.17315 0.730999H0.217229C0.153887 0.730999 0.102539 0.783713 0.102539 0.848619V9.07134C0.102539 9.13625 0.153887 9.18886 0.217229 9.18886H1.39052C1.45386 9.18886 1.50521 9.13625 1.50521 9.07134V5.70563H5.36113C5.42447 5.70563 5.47583 5.65301 5.47583 5.58811V4.47404C5.47583 4.40914 5.42447 4.35652 5.36113 4.35652H1.50521V2.0802H6.17659C6.23993 2.0802 6.29128 2.02758 6.29128 1.96269ZM18.4212 5.15414C18.4212 2.57591 20.1018 0.730993 22.5591 0.730993H22.7373C24.2639 0.730993 25.4445 1.51086 26.0765 2.6376C26.0948 2.66576 26.1 2.70049 26.0908 2.73284C26.0818 2.76519 26.0592 2.792 26.029 2.80638L24.9792 3.32785C24.9456 3.35012 24.9043 3.35761 24.8649 3.34862C24.8256 3.33961 24.7917 3.31487 24.7708 3.28013C24.33 2.50607 23.6678 2.09869 22.6875 2.09869H22.5093C21.0045 2.09869 19.9212 3.28594 19.9212 5.09711C19.9212 6.85938 20.9467 8.0711 22.5093 8.0711H22.691C23.6933 8.0711 24.2766 7.72888 24.7245 7.20742C24.7699 7.14495 24.8548 7.12687 24.9214 7.16551L26 7.6928C26.0337 7.70776 26.0567 7.73978 26.0603 7.77661C26.0577 7.80982 26.0451 7.84146 26.0244 7.8674C25.3624 8.83817 24.1725 9.43762 22.7153 9.43762H22.5359C19.9953 9.43529 18.4212 7.66021 18.4212 5.15414ZM35.5022 9.07149V7.95879C35.503 7.92643 35.4909 7.8951 35.4685 7.87221C35.4462 7.84934 35.4155 7.83691 35.3839 7.8379H30.4684V5.61485H34.3804C34.4437 5.61485 34.4951 5.56231 34.4951 5.49749V4.39653C34.4951 4.33171 34.4437 4.27917 34.3804 4.27917H30.4684V2.07843H35.2785C35.3417 2.07843 35.3931 2.02589 35.3931 1.96106V0.848364C35.3931 0.783542 35.3417 0.730993 35.2785 0.730993H29.1805C29.1172 0.730993 29.0659 0.783542 29.0659 0.848364V9.07149C29.0659 9.13631 29.1172 9.18885 29.1805 9.18885H35.3874C35.4507 9.18885 35.5022 9.13631 35.5022 9.07149ZM46.1468 6.8682C46.1468 8.33122 45.0333 9.18885 43.0014 9.18885H38.8377C38.7729 9.18885 38.7203 9.13632 38.7203 9.07152V0.848319C38.7203 0.783524 38.7729 0.730993 38.8377 0.730993H42.6314C44.6163 0.730993 45.6511 1.5288 45.6511 2.91908C45.6511 3.75324 45.2822 4.42434 44.2229 4.74464C45.5665 5.02504 46.1468 5.82871 46.1468 6.8682ZM42.602 2.04501H40.1567V4.31757H42.602C43.7389 4.31757 44.1994 3.93157 44.1994 3.18188C44.1994 2.43217 43.7389 2.04501 42.602 2.04501ZM44.6704 6.73796C44.6704 5.98826 44.2006 5.59523 43.0072 5.59523H40.1567V7.87014H43.0072C44.2287 7.87014 44.6704 7.49118 44.6704 6.74148V6.73796ZM53.1138 0.730993C50.5198 0.730993 48.8698 2.55963 48.8698 5.0843C48.8698 7.62413 50.5187 9.43762 53.1138 9.43762H53.29C55.884 9.43762 57.534 7.62063 57.534 5.0843C57.534 2.54798 55.884 0.730993 53.29 0.730993H53.1138ZM56.0488 5.0843C56.0488 6.88965 54.9767 8.07108 53.29 8.07108H53.1138C51.4157 8.07108 50.355 6.88848 50.355 5.0843C50.355 3.28013 51.4272 2.09868 53.1138 2.09868H53.29C54.988 2.09868 56.0488 3.27896 56.0488 5.0843ZM60.2571 5.0843C60.2571 2.55963 61.9069 0.730993 64.5005 0.730993H64.6767C67.2704 0.730993 68.9213 2.54798 68.9213 5.0843C68.9213 7.62063 67.2704 9.43762 64.6767 9.43762H64.5005C61.9069 9.43762 60.2571 7.62413 60.2571 5.0843ZM64.6767 8.07108C66.3631 8.07108 67.4351 6.88965 67.4351 5.0843C67.4351 3.27896 66.3746 2.09868 64.6767 2.09868H64.5005C62.8152 2.09868 61.7422 3.28013 61.7422 5.0843C61.7422 6.88848 62.8027 8.07108 64.5005 8.07108H64.6767ZM77.6431 9.18867H79.2185C79.3092 9.18867 79.3498 9.11715 79.2905 9.04328C78.0129 7.53073 76.6159 6.1249 75.1134 4.83959C76.481 3.6488 77.7362 2.33262 78.8627 0.907944C78.8868 0.883291 78.9016 0.850949 78.9045 0.816491C78.9045 0.768406 78.8685 0.732065 78.7965 0.732065H77.3119C77.2505 0.725018 77.1904 0.753064 77.1561 0.804758C76.2043 2.01796 75.1544 3.14945 74.0171 4.18764H73.3102V0.852836C73.3102 0.788081 73.2582 0.735583 73.194 0.735583H72.0082C71.9439 0.735583 71.8919 0.788081 71.8919 0.852836V9.0679C71.8919 9.13266 71.9439 9.18515 72.0082 9.18515H73.194C73.2582 9.18515 73.3102 9.13266 73.3102 9.0679V5.57714H74.0078C75.2511 6.66402 76.4123 7.843 77.4816 9.10425C77.5167 9.1594 77.5782 9.19156 77.6431 9.18867Z"
                        })]
                    })
                }));
            };
            var l = n(o(81109));
            var i = n(o(506479));
            var a = o(220584);
            var r = n(o(156720));
            var s = o(785893);
            const c = ["iconXstyle", "height", "width", "viewBox"];
        },
        955424: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.LogoInstagramColorIcon = function (e) {
                var t;
                const {
                    iconXstyle: o,
                    height: n,
                    width: d,
                    viewBox: u
                } = e;
                const f = (0, i.default)(e, c);
                let p;
                if (u) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: o = 0,
                        height: n = 0
                    } = u;
                    p = [e, t, o, n].join(" ");
                }
                let h = 22;
                let g = 24;
                if (!(n == null && d == null)) {
                    h = n;
                    g = d;
                }
                return (0, s.jsx)(a.BaseSvgSpan, (0, l.default)((0, l.default)({
                    name: "logo-instagram-color"
                }, f), {}, {
                    children: (0, s.jsxs)("svg", {
                        viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 22",
                        height: h,
                        width: g,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, r.default)(o),
                        fill: "none",
                        children: [(0, s.jsx)("path", {
                            d: "M17.9287 0H8.07107C4.72349 0 2 2.72362 2 6.07121V15.9288C2 19.2765 4.72349 22 8.07107 22H17.9287C21.2765 22 24 19.2764 24 15.9288V6.07121C24.0001 2.72362 21.2765 0 17.9287 0ZM22.0482 15.9288C22.0482 18.2002 20.2002 20.0481 17.9288 20.0481H8.07107C5.79979 20.0482 3.95195 18.2002 3.95195 15.9288V6.07121C3.95195 3.79992 5.79979 1.95195 8.07107 1.95195H17.9287C20.2001 1.95195 22.0481 3.79992 22.0481 6.07121V15.9288H22.0482Z",
                            fill: "url(#paint0_linear)"
                        }), (0, s.jsx)("path", {
                            d: "M12.9998 5.06152C9.72513 5.06152 7.06104 7.72561 7.06104 11.0003C7.06104 14.2749 9.72513 16.9388 12.9998 16.9388C16.2745 16.9388 18.9386 14.2749 18.9386 11.0003C18.9386 7.72561 16.2745 5.06152 12.9998 5.06152ZM12.9998 14.8938C10.8528 14.8938 9.10593 13.1472 9.10593 11.0002C9.10593 8.85303 10.8527 7.10628 12.9998 7.10628C15.147 7.10628 16.8937 8.85303 16.8937 11.0002C16.8937 13.1472 15.1468 14.8938 12.9998 14.8938Z",
                            fill: "url(#paint1_linear)"
                        }), (0, s.jsx)("path", {
                            d: "M19.1871 3.32764C18.7931 3.32764 18.4061 3.48714 18.1278 3.76661C17.8482 4.04471 17.6875 4.43188 17.6875 4.82723C17.6875 5.22135 17.8484 5.60838 18.1278 5.88785C18.4059 6.16595 18.7931 6.32682 19.1871 6.32682C19.5824 6.32682 19.9682 6.16595 20.2477 5.88785C20.5272 5.60838 20.6867 5.22121 20.6867 4.82723C20.6867 4.43188 20.5272 4.04471 20.2477 3.76661C19.9696 3.48714 19.5824 3.32764 19.1871 3.32764Z",
                            fill: "url(#paint2_linear)"
                        }), (0, s.jsxs)("defs", {
                            children: [(0, s.jsxs)("linearGradient", {
                                id: "paint0_linear",
                                x1: 24,
                                y1: 0,
                                x2: 2,
                                y2: 22,
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, s.jsx)("stop", {
                                    stopColor: "#B630A1"
                                }), (0, s.jsx)("stop", {
                                    offset: 0.494792,
                                    stopColor: "#DB2F76"
                                }), (0, s.jsx)("stop", {
                                    offset: 1,
                                    stopColor: "#FBB15B"
                                })]
                            }), (0, s.jsxs)("linearGradient", {
                                id: "paint1_linear",
                                x1: 21.9999,
                                y1: 1.5,
                                x2: 3.99988,
                                y2: 19.5,
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, s.jsx)("stop", {
                                    stopColor: "#DA2E7A"
                                }), (0, s.jsx)("stop", {
                                    offset: 1,
                                    stopColor: "#F06846"
                                })]
                            }), (0, s.jsxs)("linearGradient", {
                                id: "paint2_linear",
                                x1: 20.9998,
                                y1: 3,
                                x2: 17.4998,
                                y2: 6.5,
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, s.jsx)("stop", {
                                    stopColor: "#BE3099"
                                }), (0, s.jsx)("stop", {
                                    offset: 1,
                                    stopColor: "#E1406B"
                                })]
                            })]
                        })]
                    })
                }));
            };
            var l = n(o(81109));
            var i = n(o(506479));
            var a = o(220584);
            var r = n(o(156720));
            var s = o(785893);
            const c = ["iconXstyle", "height", "width", "viewBox"];
        },
        321566: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SecurityShieldIcon = function (e) {
                var t;
                const {
                    iconXstyle: o,
                    height: n,
                    width: d,
                    viewBox: u
                } = e;
                const f = (0, i.default)(e, c);
                let p;
                if (u) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: o = 0,
                        height: n = 0
                    } = u;
                    p = [e, t, o, n].join(" ");
                }
                let h = 74;
                let g = 64;
                if (!(n == null && d == null)) {
                    h = n;
                    g = d;
                }
                return (0, s.jsx)(a.BaseSvgSpan, (0, l.default)((0, l.default)({
                    name: "security-shield"
                }, f), {}, {
                    children: (0, s.jsx)("svg", {
                        viewBox: (t = p) !== null && t !== undefined ? t : "0 0 64 74",
                        height: h,
                        width: g,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, r.default)(o),
                        version: "1.1",
                        children: (0, s.jsx)("path", {
                            d: "M0,8.22222222 C12.057971,8.22222222 22.7246377,5.48148148 32,0 C41.2753623,5.48148148 51.942029,8.22222222 64,8.22222222 L64,32.8888889 C64,52.0740741 53.3333333,65.7777778 32,74 C10.6666667,65.7777778 0,52.0740741 0,32.8888889 C0,16.4444444 0,8.22222222 0,8.22222222 Z",
                            fill: "currentColor",
                            fillRule: "nonzero"
                        })
                    })
                }));
            };
            var l = n(o(81109));
            var i = n(o(506479));
            var a = o(220584);
            var r = n(o(156720));
            var s = o(785893);
            const c = ["iconXstyle", "height", "width", "viewBox"];
        },
        875602: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ViewOnceSenderNuxIcon = function (e) {
                var t;
                const {
                    iconXstyle: o,
                    height: n,
                    width: d,
                    viewBox: u
                } = e;
                const f = (0, i.default)(e, c);
                let p;
                if (u) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: o = 0,
                        height: n = 0
                    } = u;
                    p = [e, t, o, n].join(" ");
                }
                let h = 168;
                let g = 198;
                if (!(n == null && d == null)) {
                    h = n;
                    g = d;
                }
                return (0, s.jsx)(a.BaseSvgSpan, (0, l.default)((0, l.default)({
                    name: "view-once-sender-nux"
                }, f), {}, {
                    children: (0, s.jsxs)("svg", {
                        viewBox: (t = p) !== null && t !== undefined ? t : "0 0 198 168",
                        height: h,
                        width: g,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, r.default)(o),
                        fill: "none",
                        children: [(0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M182.166 57.7255C175.603 64.6681 166.307 69 156 69C139.711 69 125.949 58.1818 121.506 43.3383C112.644 40.1443 102.78 34.6399 86.1179 25.3418C84.3675 24.3651 82.5421 23.3465 80.635 22.2843C51.9895 6.3297 6.00593 19.7651 2.23678 73.9266C-0.243988 109.575 17.0718 134.232 39.9408 142.968C62.0404 151.411 110.667 158.989 162.477 140.97C190.944 131.069 198.637 111.677 196.725 89.4613C195.454 74.6999 189.899 64.4184 182.166 57.7255Z",
                            fill: "#CCEFEB"
                        }), (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M134.277 61.7099C125.603 55.1366 120 44.7226 120 33C120 29.0037 120.651 25.1594 121.853 21.5676L80.2307 15.7179C73.8904 14.8269 68.016 19.3544 67.11 25.8304L50.5682 144.067C49.6622 150.543 54.0676 156.515 60.4079 157.406L108.242 164.129C114.583 165.02 120.457 160.493 121.363 154.016L134.277 61.7099Z",
                            fill: "#42CBA5"
                        }), (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M122.943 18.7215L80.4885 12.755C73.9412 11.8348 67.8737 16.5197 66.9365 23.219L49.8245 145.531C48.8872 152.231 53.4351 158.407 59.9824 159.327L109.378 166.27C115.925 167.19 121.993 162.505 122.93 155.806L135.929 62.8902C135.129 62.3519 134.352 61.7824 133.599 61.1834L120.411 155.452C119.673 160.727 114.895 164.417 109.739 163.692L60.343 156.75C55.187 156.025 51.6056 151.161 52.3437 145.885L69.4557 23.573C70.1938 18.2974 74.9719 14.608 80.1279 15.3326L121.974 21.2137C122.266 20.3682 122.59 19.537 122.943 18.7215Z",
                            fill: "#316474"
                        }), (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M135.032 62.2669C125.93 55.7339 120 45.0594 120 33C120 27.0332 121.452 21.4055 124.021 16.4507L82.3684 10.5968C76.0897 9.71436 70.2654 14.2484 69.3594 20.7238L52.8193 138.948C51.9134 145.424 56.2689 151.388 62.5476 152.271L109.917 158.928C116.196 159.81 122.02 155.276 122.926 148.801L135.032 62.2669Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M124.376 15.7826L80.8832 9.67008C74.3203 8.74772 68.2607 13.2841 67.3488 19.8023L50.6993 138.809C49.7874 145.327 54.3684 151.359 60.9313 152.281L110.445 159.24C117.008 160.162 123.067 155.626 123.979 149.108L136.032 62.959C135.229 62.4232 134.45 61.856 133.695 61.2591L121.454 148.753C120.736 153.886 115.964 157.458 110.796 156.732L61.2822 149.773C56.1139 149.047 52.5063 144.297 53.2245 139.164L69.874 20.1572C70.5921 15.0241 75.364 11.4517 80.5323 12.1781L123.186 18.1726C123.554 17.3594 123.951 16.5623 124.376 15.7826Z",
                            fill: "#316474"
                        }), (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M121.759 21.8546L119.225 21.5025L88.5269 17.2367L81.6788 16.2851C76.9838 15.6327 72.6359 18.9334 71.9674 23.6575L56.0988 135.806C55.4304 140.53 58.6946 144.888 63.3896 145.541L107.784 151.71C112.479 152.362 116.827 149.061 117.495 144.337L129.762 57.6491C123.708 51.2078 120 42.5372 120 33.0005C120 29.1102 120.617 25.364 121.759 21.8546Z",
                            fill: "#EEFEFA"
                        }), (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M131.411 59.2946L119.092 146.356C118.408 151.187 113.925 154.558 109.079 153.885L63.2521 147.516C58.4056 146.843 55.031 142.38 55.7146 137.549L71.9439 22.852C72.6275 18.0206 77.1105 14.6499 81.957 15.3233L122.084 20.8994C121.801 21.6938 121.545 22.501 121.316 23.32L81.6063 17.802C78.133 17.3193 74.9202 19.735 74.4302 23.1975L58.201 137.895C57.711 141.357 60.1295 144.555 63.6028 145.038L109.429 151.406C112.903 151.889 116.116 149.473 116.605 146.01L129.195 57.0327C129.901 57.8186 130.64 58.5733 131.411 59.2946Z",
                            fill: "#316474"
                        }), (0, s.jsx)("path", {
                            d: "M76.7691 93.7377C76.4214 96.1974 78.1329 98.4706 80.5929 98.8163L111.741 103.194C114.202 103.54 116.481 101.824 116.83 99.3627L119.073 83.5207C119.421 81.0608 117.709 78.787 115.249 78.4413L73.6586 72.5961C73.183 72.5293 72.895 73.106 73.2346 73.4451L76.5525 76.7581C77.9966 78.2 78.6778 80.2374 78.3919 82.2594L76.7691 93.7377Z",
                            fill: "white",
                            stroke: "#00B39B",
                            strokeWidth: 3
                        }), (0, s.jsx)("path", {
                            d: "M107.679 93.8443L87.8798 91.0618C87.0681 90.9477 86.7049 90.084 87.2785 89.5941L91.8745 85.6237C92.3348 85.2215 93.1268 85.3328 93.4584 85.8463L96.5327 90.5489L102.507 85.389C102.968 84.9869 103.76 85.0982 104.091 85.6116L108.661 92.5992C109.078 93.2283 108.491 93.9584 107.679 93.8443Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M96.7971 88.6689L94.5062 85.1645C93.7607 84.0152 92.0887 83.7802 91.0553 84.6795L86.4635 88.6463C85.7435 89.2636 85.5901 90.1864 85.9046 90.9467C86.205 91.6728 86.8893 92.1848 87.7059 92.2996L107.505 95.0822C108.321 95.1969 109.12 94.8933 109.609 94.2782C110.121 93.6341 110.228 92.7048 109.706 91.913C109.705 91.9118 109.705 91.9106 109.704 91.9094L105.141 84.9334C105.14 84.9321 105.14 84.9309 105.139 84.9296C104.393 83.7805 102.721 83.5456 101.688 84.4449L96.7971 88.6689Z",
                            stroke: "#42CBA5",
                            strokeOpacity: 0.5,
                            strokeWidth: 2.5
                        }), (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M81 22.999C80.4477 22.999 80 23.4467 80 23.999C80 24.5513 80.4477 24.999 81 24.999C81.5523 24.999 82 24.5513 82 23.999C82 23.4467 81.5523 22.999 81 22.999ZM78 23.999C78 22.3422 79.3431 20.999 81 20.999C82.6569 20.999 84 22.3422 84 23.999C84 25.6559 82.6569 26.999 81 26.999C79.3431 26.999 78 25.6559 78 23.999Z",
                            fill: "#316474"
                        }), (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M155.502 62C156.019 62 156.532 61.9866 157.043 61.9603C158.421 61.8892 159.482 60.7138 159.41 59.3349C159.339 57.956 158.164 56.8958 156.785 56.967C156.36 56.9889 155.933 57 155.502 57V62ZM155.502 8C155.933 8.00003 156.36 8.01114 156.785 8.03304C158.164 8.10415 159.339 7.044 159.41 5.66512C159.482 4.28624 158.421 3.11079 157.043 3.03968C156.532 3.01336 156.019 3.00003 155.502 3V8ZM168.898 6.21114C167.668 5.58332 166.162 6.07124 165.534 7.30096C164.906 8.53067 165.394 10.0365 166.624 10.6643C167.388 11.0543 168.128 11.4832 168.844 11.9485C170.001 12.7016 171.549 12.3739 172.303 11.2167C173.056 10.0594 172.728 8.51077 171.571 7.75771C170.71 7.19753 169.818 6.68094 168.898 6.21114ZM180.243 16.4297C179.49 15.2724 177.941 14.9447 176.784 15.6978C175.626 16.4509 175.299 17.9995 176.052 19.1568C176.517 19.8719 176.946 20.6126 177.336 21.3764C177.964 22.6061 179.47 23.094 180.699 22.4662C181.929 21.8384 182.417 20.3325 181.789 19.1028C181.319 18.1826 180.803 17.2905 180.243 16.4297ZM184.961 30.9578C184.89 29.5789 183.714 28.5188 182.335 28.5899C180.956 28.661 179.896 29.8365 179.967 31.2153C179.989 31.6406 180 32.0689 180 32.5C180 32.9311 179.989 33.3594 179.967 33.7847C179.896 35.1635 180.956 36.339 182.335 36.4101C183.714 36.4812 184.89 35.4211 184.961 34.0422C184.987 33.5312 185 33.0171 185 32.5C185 31.9829 184.987 31.4688 184.961 30.9578ZM181.789 45.8972C182.417 44.6675 181.929 43.1616 180.699 42.5338C179.47 41.906 177.964 42.3939 177.336 43.6236C176.946 44.3874 176.517 45.1281 176.052 45.8432C175.299 47.0005 175.626 48.5491 176.784 49.3022C177.941 50.0553 179.49 49.7276 180.243 48.5703C180.803 47.7095 181.319 46.8174 181.789 45.8972ZM171.571 57.2423C172.728 56.4892 173.056 54.9406 172.303 53.7833C171.549 52.6261 170.001 52.2984 168.844 53.0515C168.128 53.5168 167.388 53.9457 166.624 54.3357C165.394 54.9635 164.906 56.4693 165.534 57.699C166.162 58.9288 167.668 59.4167 168.898 58.7889C169.818 58.3191 170.71 57.8025 171.571 57.2423Z",
                            fill: "#00B39B"
                        }), (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M155.501 3C155.5 3 155.5 3 155.5 3C139.208 3 126 16.2076 126 32.5C126 48.7924 139.208 62 155.5 62C155.5 62 155.5 62 155.501 62V57C155.5 57 155.5 57 155.5 57C141.969 57 131 46.031 131 32.5C131 18.969 141.969 8 155.5 8C155.5 8 155.5 8 155.501 8V3Z",
                            fill: "#00B39B"
                        }), (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M151.57 18.499C149.875 18.499 148.501 19.8727 148.501 21.5672C148.501 23.2617 149.875 24.6354 151.57 24.6354H154.502V42.499C154.502 44.1559 155.845 45.499 157.502 45.499C159.158 45.499 160.502 44.1559 160.502 42.499V21.499C160.502 19.8422 159.158 18.499 157.502 18.499C157.49 18.499 157.479 18.4991 157.468 18.4992C157.456 18.4991 157.445 18.499 157.433 18.499H151.57Z",
                            fill: "#00B39B"
                        })]
                    })
                }));
            };
            var l = n(o(81109));
            var i = n(o(506479));
            var a = o(220584);
            var r = n(o(156720));
            var s = o(785893);
            const c = ["iconXstyle", "height", "width", "viewBox"];
        },
        493678: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.handleTooFewSubgroups = t.handleRemoveSubgroup = undefined;
            var l = n(o(348926));
            var i = n(o(81109));
            var a = o(351053);
            var r = o(468926);
            var s = o(780549);
            var c = o(174834);
            var d = o(103440);
            var u = o(305521);
            var f = o(690495);
            var p = o(114850);
            var h = o(180519);
            var g = o(676345);
            var C = n(o(123490));
            var m = o(548360);
            var _ = n(o(156720));
            var v = n(o(305988));
            var x = o(785893);
            const S = {
                checkboxContainer: {
                    fontSize: "f8jlpxt4",
                    lineHeight: "e4qy2s3t",
                    borderTop: "ei53l81b"
                },
                checkbox: {
                    display: "l7jjieqr",
                    flex: "kk3akd72",
                    verticalAlign: "kbne4t5p",
                    transitionProperty: "cr6d9hz6",
                    transitionDuration: "p4t1lx4y",
                    transitionTimingFunction: "pu4k07i0"
                }
            };
            const b = e => {
                let {
                    removeDisclaimer: t,
                    removeParticipantOption: o = false,
                    handleRemove: n
                } = e;
                const [l, i] = (0, v.default)(false);
                let a;
                const s = m.fbt._("Remove group from community?", null, {
                    hk: "1kAakd"
                });
                if (o) {
                    const e = (0, x.jsx)("div", {
                        "data-testid": "checkbox-remove-orphan-members",
                        className: (0, _.default)(S.checkbox, g.uiMargin.end10),
                        children: (0, x.jsx)(r.CheckBox, {
                            onChange: i,
                            checked: l,
                            id: "checkbox-remove-orphan-members"
                        })
                    });
                    const o = m.fbt._("Remove group participants", null, {
                        hk: "2jEii2"
                    });
                    a = (0, x.jsxs)(x.Fragment, {
                        children: [(0, x.jsx)(h.TextDiv, {
                            xstyle: g.uiPadding.bottom20,
                            theme: "muted",
                            children: t
                        }), (0, x.jsxs)(f.FlexRow, {
                            xstyle: [S.checkboxContainer, g.uiPadding.top20, g.uiMargin.end0],
                            children: [e, o]
                        })]
                    });
                }
                return (0, x.jsx)(d.ConfirmPopup, {
                    onOK: () => n(l),
                    okText: m.fbt._("Remove", null, {
                        hk: "3xUR13"
                    }),
                    onCancel: () => p.ModalManager.close(),
                    title: s,
                    children: o ? a : t
                });
            };
            const P = (e, t, o, n) => {
                const l = m.fbt._("A community must have at least 1 group. You can remove \"{group_name}\" after adding another group to this community.", [m.fbt._param("group_name", (0, x.jsx)(u.EmojiText, {
                    text: e
                }))], {
                    hk: "1ci2bj"
                });
                const a = o != null ? m.fbt._("A community must have at least 1 group. You can remove \"{group_name}\" after a community admin from \"{community_name}\" adds another group to the community.", [m.fbt._param("group_name", (0, x.jsx)(u.EmojiText, {
                    text: e
                })), m.fbt._param("community_name", (0, x.jsx)(u.EmojiText, {
                    text: o
                }))], {
                    hk: "1amNJ1"
                }) : m.fbt._("A community must have at least 1 group. You can remove \"{group_name}\" after a community admin adds another group to this community.", [m.fbt._param("group_name", (0, x.jsx)(u.EmojiText, {
                    text: e
                }))], {
                    hk: "3BhBjQ"
                });
                p.ModalManager.open((0, x.jsx)(d.ConfirmPopup, (0, i.default)((0, i.default)({
                    testid: "min-subgroup-count-popup",
                    onOK: () => p.ModalManager.close()
                }, t && {
                    cancelText: m.fbt._("Add group", null, {
                        hk: "3Wkqmm"
                    }),
                    onCancel: n
                }), {}, {
                    title: m.fbt._("Cannot remove group from community", null, {
                        hk: "3AsH6T"
                    }),
                    children: t ? l : a
                })));
            };
            t.handleTooFewSubgroups = P;
            t.handleRemoveSubgroup = e => {
                var t;
                let {
                    parentId: o,
                    currentSubgroupCount: n,
                    removedSubgroupWid: i,
                    removedSubgroupTitle: r,
                    setLoading: d,
                    iAmCommunityAdmin: f = true
                } = e;
                const h = (t = a.ChatCollection.get(o)) === null || t === undefined ? undefined : t.formattedTitle;
                if (n <= 2 && !(0, c.noSubgroupRequirementEnabled)()) {
                    return void P(r, f, h, () => {
                        p.ModalManager.close();
                        s.Cmd.openCommunityHomeManageGroups(o);
                    });
                }
                let g;
                const _ = function () {
                    var e = (0, l.default)(function* () {
                        let e = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
                        p.ModalManager.close();
                        d(true);
                        yield(0, C.default)(o, [i], e);
                        d(false);
                    });
                    return function () {
                        return e.apply(this, arguments);
                    };
                }();
                if (f) {
                    g = m.fbt._("You can remove the \"{group_title}\" group from the community. You can also remove the group and its participants who aren't part of other groups.", [m.fbt._param("group_title", (0, x.jsx)(u.EmojiText, {
                        text: r
                    }))], {
                        hk: "2CXAM6"
                    });
                    return void p.ModalManager.open((0, x.jsx)(b, {
                        removeDisclaimer: g,
                        handleRemove: _,
                        removeParticipantOption: true
                    }));
                }
                g = h != null ? m.fbt._("\"{group_title}\" will no longer be a part of this community \"{community_title}.\" Anyone in this group will still be able to find it from their chats to send messages and make calls.", [m.fbt._param("group_title", (0, x.jsx)(u.EmojiText, {
                    text: r
                })), m.fbt._param("community_title", (0, x.jsx)(u.EmojiText, {
                    text: h
                }))], {
                    hk: "p3q2"
                }) : m.fbt._("\"{group_title}\" will no longer be a part of this community. Anyone in this group will still be able to find it from their chats to send messages and make calls.", [m.fbt._param("group_title", (0, x.jsx)(u.EmojiText, {
                    text: r
                }))], {
                    hk: "1iKEHi"
                });
                p.ModalManager.open((0, x.jsx)(b, {
                    removeDisclaimer: g,
                    handleRemove: _
                }));
            };
        },
        296518: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = undefined;
            var l = o(752253);
            var i = n(o(988410));
            var a = n(o(927327));
            var r = o(667294);
            var s = o(785893);

            function c (e, t) {
                const o = (0, r.useRef)(null);
                const n = (0, l.cx)({
                    [a.default.hover]: e.hover,
                    [a.default.current]: e.current,
                    [a.default.active]: e.active,
                    [a.default.msg]: true
                });
                const c = () => {
                    i.default.maybeIndicateFocus(o.current, a.default.focusAnimation);
                };
                (0, r.useImperativeHandle)(t, () => ({
                    indicateFocus: c
                }));
                return (0, s.jsx)("div", {
                    "data-testid": e.testid,
                    ref: o,
                    className: n,
                    onClick: e.onClick,
                    onMouseEnter: e.onMouseEnter,
                    onMouseOver: e.onMouseOver,
                    onMouseLeave: e.onMouseLeave,
                    children: e.children
                });
            }
            var d = (0, r.forwardRef)(c);
            t.default = d;
        },
        369058: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                let t;
                let {
                    msg: o
                } = e;
                const n = (0, i.getKicSender)(o);
                if ((0, i.getIsKept)(o) && n != null) {
                    t = (0, r.jsx)("div", {
                        className: (0, a.default)(s),
                        children: (0, l.getKeptByString)(n)
                    });
                }
                return (0, r.jsx)(r.Fragment, {
                    children: t
                });
            };
            var l = o(896971);
            var i = o(787742);
            var a = n(o(156720));
            var r = o(785893);
            const s = {
                fontSize: "f8jlpxt4",
                color: "pm5hny62",
                marginTop: "s11ka3oa",
                marginStart: "m4o8c6m0"
            };
        },
        565644: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = undefined;
            var l = n(o(670983));
            var i = o(647276);
            var a = o(63014);
            var r = o(177938);
            var s = o(23641);
            var c = o(356097);
            var d = o(465113);
            var u = o(305521);
            var f = n(o(335540));
            var p = o(163755);
            var h = n(o(296518));
            var g = o(81644);
            var C = n(o(932325));
            var m = n(o(369058));
            var _ = o(48794);
            var v = o(572946);
            var x = o(931019);
            var S = o(512873);
            var b = o(667294);
            var P = n(o(156720));
            var y = o(808446);
            var T = o(785893);
            const j = {
                title: {
                    display: "p357zi0d",
                    alignItems: "gndfcl4n",
                    marginBottom: "njub1g37",
                    fontSize: "f8jlpxt4",
                    fontWeight: "e1gr2w1z",
                    lineHeight: "tnjggqzj"
                },
                titleEmoji: {
                    verticalAlign: "h1r24yt8"
                },
                titleMain: {
                    display: "p357zi0d",
                    flexGrow: "tvf2evcx",
                    justifyContent: "fhf7t426",
                    overflowX: "gfz4du6o",
                    overflowY: "r7fjleex",
                    textOverflow: "lhj4utae",
                    whiteSpace: "le5p0ye3"
                },
                meta: {
                    flexGrow: "ggj6brxn",
                    flexShrink: "oq44ahr5",
                    marginStart: "oz0g9ue8",
                    fontSize: "dsh4tgtl",
                    lineHeight: "sb4iah7d",
                    color: "hp667wtd",
                    textAlign: "e65innqk",
                    verticalAlign: "md4apq9i"
                },
                chat: {
                    marginStart: "k6y3xtnu",
                    overflowX: "gfz4du6o",
                    overflowY: "r7fjleex",
                    textOverflow: "lhj4utae",
                    whiteSpace: "le5p0ye3"
                },
                divider: {
                    position: "g0rxnol2",
                    flex: "kk3akd72",
                    width: "htlq5l20",
                    "::before": {
                        position: "jiaumjzp",
                        top: "beenm9b3",
                        start: "fx6vfo4m",
                        width: "evuypb09",
                        height: "flcm9zni",
                        fontSize: "m6pf2udp",
                        lineHeight: "ndbp8nzn",
                        color: "n49nndap",
                        content: "aka0iiqh"
                    }
                },
                chevron: {
                    flex: "kk3akd72",
                    marginTop: "o9i7y497",
                    marginStart: "oz0g9ue8",
                    color: "fe1tuj7z"
                },
                dividerRTL: {
                    transform: "n4o0o7gj"
                },
                avatar: {
                    flex: "kk3akd72",
                    marginEnd: "claouzo6"
                },
                author: {
                    marginEnd: "kjemk6od"
                }
            };

            function k (e, t) {
                const {
                    msg: o,
                    selectedMessages: n,
                    displayType: k,
                    currSelection: E,
                    activeSelection: I,
                    onClickMsg: O,
                    testid: L
                } = e;
                const A = (0, b.useRef)(null);
                const w = (0, b.useRef)(null);
                const M = (0, b.useRef)(null);
                const [R, N] = (0, b.useState)(false);
                const [D, B] = (0, b.useState)(() => !!E && E.value === o);
                const [H, W] = (0, b.useState)(() => !!I && I.value === o);
                const [F, U] = (0, b.useState)(false);
                (0, y.useListener)(E, o.id.toString(), (e, t) => {
                    const o = e === "focus";
                    if (o) {
                        const e = M.current;
                        if (e) {
                            f.default.focus(e);
                            if (t) {
                                (0, d.scrollIntoViewIfNeeded)(e);
                            }
                        }
                    }
                    B(o);
                });
                (0, y.useListener)(I, o.id.toString(), (e, t) => {
                    if (e === "focus") {
                        const e = M.current;
                        if (e) {
                            f.default.focus(e);
                            if (t) {
                                (0, d.scrollIntoViewIfNeeded)(e);
                            }
                        }
                    }
                    W(!!e);
                });
                const V = () => A.current;
                const z = () => (0, l.default)(M.current, "hotKeysRef.current");
                (0, b.useImperativeHandle)(t, () => ({
                    getElement: z,
                    getWrapperRef: V
                }));
                const G = o.senderObj.formattedName;
                const q = (0, p.getChat)(o).isUser ? r.ContactCollection.assertGet(o.to).formattedName ? r.ContactCollection.assertGet(o.to).formattedName : (0, x.widToFormattedUser)(o.to) : (0, p.getChat)(o).title();
                const Y = k === c.DISPLAY_TYPE.GALLERY ? null : (0, T.jsxs)("div", {
                    className: (0, P.default)(j.title, v.hasEmoji && j.titleEmoji),
                    children: [(0, T.jsxs)("div", {
                        className: (0, P.default)(j.titleMain),
                        children: [(0, T.jsx)("div", {
                            className: (0, P.default)(j.avatar),
                            children: (0, T.jsx)(s.DetailImage, {
                                id: o.senderObj.id,
                                size: 26
                            })
                        }), (0, T.jsx)(u.EmojiText, {
                            xstyle: j.author,
                            text: G,
                            direction: "auto",
                            titlify: true
                        }), (0, T.jsx)("span", {
                            className: (0, P.default)(j.divider, C.default.isRTL() && j.dividerRTL)
                        }), (0, T.jsx)(u.EmojiText, {
                            xstyle: j.chat,
                            text: q,
                            direction: "auto",
                            titlify: true
                        })]
                    }), (0, T.jsx)("div", {
                        className: (0, P.default)(j.meta),
                        dir: "auto",
                        children: a.Clock.relativeStr(o.t)
                    }), (0, T.jsx)("div", {
                        className: (0, P.default)(j.chevron),
                        children: (0, T.jsx)(i.ChevronRightAltIcon, {
                            directional: true
                        })
                    })]
                });
                const K = {
                    enter: e => {
                        e.stopPropagation();
                        e.preventDefault();
                        if (!(O == null)) {
                            O(o);
                        }
                    }
                };
                K[C.default.LR("right", "left")] = () => {
                    var e;
                    if (!((e = A.current) === null || e === undefined)) {
                        e.openContextMenu();
                    }
                };
                const Z = e.selectable || R && (k === c.DISPLAY_TYPE.GALLERY || k === c.DISPLAY_TYPE.GALLERY_LINKS);
                let Q;
                if (k === c.DISPLAY_TYPE.KEPT_MSGS) {
                    Q = (0, T.jsx)(m.default, {
                        msg: o
                    });
                }
                return (0, T.jsx)(g.HotKeys, {
                    ref: M,
                    handlers: K,
                    onFocus: () => {
                        var e;
                        U(true);
                        if (!((e = w.current) === null || e === undefined)) {
                            e.indicateFocus();
                        }
                    },
                    onBlur: () => {
                        U(false);
                    },
                    children: (0, T.jsxs)(h.default, {
                        ref: w,
                        hover: R,
                        current: D && F,
                        active: H,
                        onClick: () => e.onClickMsg && e.onClickMsg(o, n && !n.isSelected(o)),
                        onMouseEnter: R ? null : () => {
                            if (!R) {
                                N(true);
                            }
                        },
                        onMouseOver: R ? null : () => {
                            if (!R) {
                                N(true);
                            }
                        },
                        onMouseLeave: R ? () => {
                            if (R) {
                                N(false);
                            }
                        } : null,
                        testid: L,
                        children: [Y, (0, T.jsx)(S.Wrapper, {
                            msg: o,
                            ref: A,
                            current: D && F,
                            displayType: k || c.DISPLAY_TYPE.STARRED_MSGS,
                            isMsgVisible: e.isMsgVisible,
                            selectable: Z,
                            selectedMessages: n,
                            onMessageSelect: e.onMessageSelect,
                            position: _.MsgPosition.END,
                            tailOverride: "left",
                            onProductClick: e.onProductClick,
                            onMessageClick: e.onMessageClick
                        }, o.id.toString()), Q]
                    })
                });
            }
            var E = (0, b.forwardRef)(k);
            t.default = E;
        },
        210002: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const [t, o] = (0, m.useFlow)(v.Select);
                const n = (0, C.useRef)([]);
                const x = (0, C.useRef)([]);
                const S = function () {
                    var e = (0, l.default)(function* (e) {
                        if (e.isUser && e.contact.isContactBlocked) {
                            yield(0, i.unblockContact)(e.contact);
                        }
                    });
                    return function () {
                        return e.apply(this, arguments);
                    };
                }();
                if (o.step == null) {
                    return null;
                }
                let b;
                switch (o.step) {
                    case v.Select: {
                        const t = function () {
                            var e = (0, l.default)(function* (e, t) {
                                yield S(e);
                                if (e.active) {
                                    r.ComposeBoxActions.paste(e, t);
                                } else {
                                    e.setComposeContents({
                                        text: t
                                    });
                                    a.Cmd.openChatFromUnread(e).then(t => {
                                        if (t) {
                                            r.ComposeBoxActions.focus(e);
                                        }
                                    });
                                }
                            });
                            return function () {
                                return e.apply(this, arguments);
                            };
                        }();
                        const i = function () {
                            var n = (0, l.default)(function* (n) {
                                x.current = n;
                                if (n.length === 1) {
                                    const l = n[0];
                                    yield t(l, e.text);
                                    o.end();
                                    if (window.innerWidth <= c.LAYOUT_2COLUMNS_MAX_WIDTH) {
                                        s.DrawerManager.closeDrawerRight();
                                    }
                                } else {
                                    o.push(v.TextMessage);
                                }
                                if (e.onSend) {
                                    e.onSend();
                                }
                            });
                            return function () {
                                return n.apply(this, arguments);
                            };
                        }();
                        b = (0, _.jsx)(d.SelectModal, {
                            title: e.title || g.fbt._("Send message to", null, {
                                hk: "2kkuQs"
                            }),
                            listType: d.ListType.CHAT_SELECT_MODAL,
                            getInitialItems: () => n.current,
                            maxItems: p.MULTICAST_LIMIT_GLOBAL,
                            onConfirm: i,
                            onCancel: () => o.end(),
                            onSelectionChanged: (e, t, o) => {
                                n.current = o;
                            },
                            singleSelectionFooterType: u.FooterType.NEXT,
                            multipleSelectionFooterType: u.FooterType.NEXT
                        });
                        break;
                    }
                    case v.TextMessage: {
                        const t = (e, t, n) => {
                            e.forEach(function () {
                                var e = (0, l.default)(function* (e) {
                                    yield S(e);
                                    a.Cmd.once("ui_idle", () => {
                                        (0, f.sendTextMsgToChat)(e, t, {
                                            linkPreview: n
                                        });
                                    });
                                });
                                return function () {
                                    return e.apply(this, arguments);
                                };
                            }());
                            o.end();
                        };
                        b = (0, _.jsx)(h.default, {
                            defaultText: e.text,
                            title: e.title || g.fbt._("Send message to", null, {
                                hk: "2kkuQs"
                            }),
                            onSend: (e, o) => t(x.current, e, o),
                            onBack: () => o.pop()
                        });
                        break;
                    }
                }
                return (0, _.jsx)(t, {
                    flow: o,
                    children: b
                });
            };
            var l = n(o(348926));
            var i = o(547979);
            var a = o(780549);
            var r = o(877171);
            var s = o(900316);
            var c = o(914368);
            var d = o(61740);
            var u = o(792882);
            var f = o(498703);
            var p = o(962260);
            var h = n(o(155105));
            var g = o(548360);
            var C = o(667294);
            var m = o(839062);
            var _ = o(785893);
            const v = o(76672).Mirrored(["Select", "TextMessage"]);
        },
        75531: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = undefined;
            var l = o(713105);
            var i = o(780549);
            var a = o(292220);
            var r = n(o(272277));
            var s = o(356097);
            var c = n(o(908081));
            var d = n(o(324093));
            var u = o(626194);
            var f = o(811720);
            var p = o(914368);
            var h = o(163755);
            var g = o(81644);
            var C = n(o(932325));
            var m = o(48794);
            var _ = o(373070);
            var v = o(735510);
            var x = o(276051);
            var S = n(o(237889));
            var b = o(956113);
            var P = n(o(565644));
            var y = o(931109);
            var T = n(o(844453));
            var j = o(667294);
            var k = n(o(156720));
            var E = n(o(969651));
            var I = n(o(637660));
            var O = o(808446);
            var L = n(o(17533));
            var A = n(o(286481));
            var w = n(o(940630));
            var M = n(o(321201));
            var R = n(o(895851));
            var N = o(785893);
            const D = {
                display: "p357zi0d",
                flex: "kk3akd72",
                justifyContent: "ac2vgrno",
                paddingTop: "a4bywxmn",
                paddingBottom: "lzi2pvmc",
                color: "cs9t9or5"
            };
            const B = {
                position: "lhggkp7q",
                top: "qq0sjtgm",
                start: "tkdu00h0",
                display: "p357zi0d",
                flexDirection: "f8m0rgwh",
                width: "ln8gz9je",
                height: "ppled2lx",
                overflowX: "gfz4du6o",
                overflowY: "r7fjleex",
                pointerEvents: "jv8uhy2r"
            };

            function H (e, t) {
                const {
                    msgCollection: o,
                    chat: n = null,
                    onClose: H,
                    title: W,
                    emptyListText: F,
                    footerText: U,
                    headerMenu: V,
                    headerType: z = u.DRAWER_HEADER_TYPE.SMALL,
                    descriptionSection: G,
                    displayType: q,
                    testid: Y
                } = e;
                const K = (0, R.default)();
                const Z = (0, M.default)();
                const Q = (0, E.default)();
                const X = (0, w.default)();
                const J = (0, I.default)(() => new S.default([], e => e.id.toString()));
                const $ = (0, I.default)(() => new S.default([], e => e.id.toString()));
                const ee = (0, I.default)(() => new Set());
                const te = (0, j.useRef)(0);
                const oe = (0, j.useRef)({});
                const ne = (0, j.useRef)(null);
                const le = (0, j.useRef)(null);
                const ie = () => x.RenderCursor.create({
                    msgCollection: o,
                    type: x.RENDER_CURSOR.STARRED_DRAWER
                }).loadAfter(o, {
                    count: a.MSG_PRELOAD_THRESHOLD
                });
                const [ae, re] = (0, j.useState)(ie);
                const se = () => {
                    const e = o.toArray();
                    J.current.init(e, true);
                    $.current.init(e);
                };
                const ce = (0, L.default)(() => {
                    const e = n == null ? undefined : n.id;
                    if (ae.getEnd(o) < o.length) {
                        re(ae.loadAfter(o));
                    } else {
                        if (o.isSynced) {
                            return;
                        }
                        o.sync(e).then(() => {
                            if (!K.aborted) {
                                if (ae.hasAfter(o)) {
                                    re(ae.loadAfter(o));
                                }
                            }
                        }).catch(e => {
                            __LOG__(2)`MsgDrawer:loadEarlierMsgs failed\n${e}`;
                        });
                    }
                });
                const de = e => {
                    if (!ne.current) {
                        return;
                    }
                    if ((e ? e.target : document.activeElement) === ne.current) {
                        if (J.current.index < 0) {
                            J.current.setFirst(true);
                        } else {
                            J.current.reset(false);
                        }
                    }
                };
                const ue = e => {
                    J.current.setVal(e);
                    $.current.setVal(e);
                    i.Cmd.openChatAt((0, h.getChat)(e), (0, l.getSearchContext)((0, h.getChat)(e), e));
                };
                const fe = () => {
                    let e = o.toArray();
                    const t = o.isSynced ? ae.getEnd(o) : Math.min(ae.getEnd(o), e.length);
                    e = e.slice(ae.getStart(o), t);
                    te.current = e.length;
                    return e;
                };
                const pe = e => {
                    if (!e) {
                        return m.MSG_VISIBILITY.BELOW;
                    }
                    const t = le.current;
                    if (!t) {
                        return;
                    }
                    const o = t.previousSibling;
                    if (!(o && o instanceof HTMLElement)) {
                        return;
                    }
                    const n = o.clientHeight;
                    const l = t.scrollTop + n;
                    const i = l + t.clientHeight;
                    const a = e.getElement();
                    if (a) {
                        if (a.offsetTop + a.clientHeight <= l) {
                            return m.MSG_VISIBILITY.ABOVE;
                        } else if (a.offsetTop >= i) {
                            return m.MSG_VISIBILITY.BELOW;
                        } else {
                            return m.MSG_VISIBILITY.VISIBLE;
                        }
                    } else {
                        return m.MSG_VISIBILITY.BELOW;
                    }
                };
                const he = e => {
                    const t = oe.current[e.toString()];
                    if (!t) {
                        return;
                    }
                    const o = t.getWrapperRef();
                    if (o && typeof o.getMsgComponentRef == "function") {
                        return o.getMsgComponentRef();
                    } else {
                        return undefined;
                    }
                };
                const ge = function (e) {
                    let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
                    return ee.current.has(e.toString()) && (!!t || he(e));
                };
                const Ce = (0, A.default)(() => {
                    const e = fe();
                    const t = new Set();
                    let n = 0;
                    let l = te.current - 1;
                    for (; n < l;) {
                        const t = Math.floor((n + l) / 2);
                        const o = oe.current[e[t].id.toString()];
                        if (pe(o) === m.MSG_VISIBILITY.ABOVE) {
                            n = t + 1;
                        } else {
                            l = t;
                        }
                    }
                    for (let o = n; o < e.length; o++) {
                        const n = oe.current[e[o].id.toString()];
                        if (pe(n) !== m.MSG_VISIBILITY.VISIBLE) {
                            break;
                        }
                        t.add(e[o].id.toString());
                    }
                    var i;
                    var a;
                    i = ee.current;
                    a = t;
                    i.forEach(e => {
                        if (!a.has(e)) {
                            const t = o.get(e);
                            if (t == null ? undefined : t.isGif) {
                                const t = he(e);
                                if (t == null ? undefined : t.getPlayCount()) {
                                    if (!(t == null)) {
                                        t.pause();
                                    }
                                }
                            }
                        }
                    });
                    ee.current = t;
                }, 100);
                const me = (0, A.default)(e => {
                    var t;
                    Ce();
                    if (e.currentTarget && (t = e.currentTarget).scrollTop + p.SCROLL_FUDGE > t.scrollHeight - t.clientHeight) {
                        ce();
                    }
                }, 100);
                (0, j.useEffect)(() => {
                    se();
                    if (!o.isSynced && o.length < a.PAGE_SIZE) {
                        X(ce);
                    }
                }, []);
                (0, j.useEffect)(() => {
                    Ce();
                });
                (0, O.useListener)(window, "resize", Ce);
                (0, O.useListener)(o, ["reset", "sync"], () => {
                    se();
                    Q();
                });
                (0, O.useListener)(o, ["add", "remove"], () => {
                    se();
                    Q();
                });
                (0, O.useListener)(o, "reset", () => {
                    ee.current = new Set();
                    re(ie());
                    ce();
                });
                const {
                    isSynced: _e,
                    length: ve
                } = o;
                (0, j.useEffect)(() => {
                    if (!_e && ve < a.PAGE_SIZE) {
                        X(ce);
                    }
                }, [ce, X, _e, ve]);
                const xe = fe();
                let Se;
                let be;
                let Pe;
                be = o.isSynced && ae.getEnd(o) >= xe.length ? null : e.msgCollection.syncPromise ? (0, N.jsx)("div", {
                    className: (0, k.default)(D),
                    title: C.default.t(399),
                    children: (0, N.jsx)(b.Spinner, {
                        stroke: 6,
                        size: 24
                    })
                }) : (0, N.jsx)("div", {
                    className: (0, k.default)(D),
                    children: (0, N.jsx)("div", {
                        title: C.default.t(396),
                        onClick: ce,
                        children: (0, N.jsx)(v.RefreshIcon, {})
                    })
                });
                const ye = {
                    down: e => {
                        if (e) {
                            e.preventDefault();
                        }
                        const t = J.current.next();
                        if (J.current.index !== t) {
                            J.current.setNext(true);
                        }
                    },
                    up: e => {
                        if (e) {
                            e.preventDefault();
                        }
                        if (J.current.prev() > -1) {
                            J.current.setPrev(true);
                        }
                    }
                };
                if (xe.length > 0) {
                    const e = xe.map(e => {
                        const t = e.type === _.MSG_TYPE.IMAGE || e.type === _.MSG_TYPE.VIDEO || e.type === _.MSG_TYPE.AUDIO;
                        return (0, N.jsx)(P.default, {
                            ref: t => {
                                ((e, t) => {
                                    if (t) {
                                        oe.current[e.id.toString()] = t;
                                    } else {
                                        delete oe.current[e.id.toString()];
                                    }
                                })(e, t);
                            },
                            msg: e,
                            isMsgVisible: t ? ge : () => {},
                            currSelection: J.current,
                            activeSelection: $.current,
                            onClickMsg: ue,
                            displayType: q || s.DISPLAY_TYPE.STARRED_MSGS
                        }, e.id.toString());
                    });
                    Se = (0, N.jsx)(T.default, {
                        transitionName: "slide",
                        children: (0, N.jsx)(g.HotKeys, {
                            ref: ne,
                            onFocus: de,
                            tabIndex: 0,
                            "data-tab": y.TAB_ORDER.CHAT_STARRED_DRAWER,
                            handlers: ye,
                            children: e
                        })
                    });
                    Pe = G;
                } else if (e.msgCollection.isSynced) {
                    Se = F;
                } else {
                    Se = (0, N.jsx)(f.Loading, {});
                    be = null;
                }
                let Te;
                if (U != null) {
                    Te = (0, N.jsx)(r.default, {
                        theme: "md-chat-search-list",
                        children: U
                    });
                }
                return (0, N.jsx)(c.default, {
                    theme: "gallery",
                    ref: t,
                    testid: Y,
                    children: (0, N.jsxs)("div", {
                        className: (0, k.default)(B),
                        children: [(0, N.jsx)(u.DrawerHeader, {
                            title: W,
                            onBack: () => {
                                if (H) {
                                    H();
                                } else if (!(Z == null)) {
                                    Z.requestDismiss();
                                }
                            },
                            type: z,
                            menu: V,
                            focusBackOrCancel: true
                        }), (0, N.jsxs)(d.default, {
                            onScroll: me,
                            ref: le,
                            children: [Pe, Se, be, Te]
                        })]
                    })
                });
            }
            var W = (0, j.forwardRef)(H);
            t.default = W;
        },
        550506: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = undefined;
            var l = n(o(348926));
            var i = n(o(670983));
            var a = n(o(692629));
            var r = o(118612);
            var s = o(202391);
            var c = o(937001);
            var d = o(617425);
            var u = o(548360);
            var f = o(667294);
            var p = o(655241);
            var h = o(785893);
            const g = e => {
                const t = (0, p.useModelValues)((0, i.default)(e.chat.groupMetadata, "props.chat.groupMetadata"), ["subject"]);
                const [o, n] = (0, f.useState)(t.subject);
                const g = function () {
                    var t = (0, l.default)(function* (t) {
                        t.stopPropagation();
                        t.preventDefault();
                        try {
                            yield e.onOK(o, e.chat);
                        } finally {
                            n("");
                        }
                    });
                    return function () {
                        return t.apply(this, arguments);
                    };
                }();
                const C = o.trim().length > 0;
                const m = e.onOK ? (0, h.jsx)(a.default, {
                    testid: "popup-controls-ok",
                    type: "primary",
                    onClick: g,
                    disabled: !C,
                    children: u.fbt._("Save", null, {
                        hk: "3wTUdX"
                    })
                }) : null;
                const _ = e.onCancel ? (0, h.jsx)(a.default, {
                    testid: "popup-controls-cancel",
                    type: "secondary",
                    onClick: t => {
                        var o;
                        t.stopPropagation();
                        t.preventDefault();
                        if (!((o = e.onCancel) === null || o === undefined)) {
                            o.call(e);
                        }
                    },
                    children: u.fbt._("Cancel", null, {
                        hk: "H0gNq"
                    })
                }) : null;
                const v = (0, h.jsxs)(d.ButtonGroup, {
                    direction: "horizontal",
                    align: "end",
                    children: [_, m]
                });
                const x = (0, h.jsx)(s.RichTextField, {
                    testid: "text-message-modal-text-unput",
                    value: o,
                    maxLength: c.ServerProps.maxSubject,
                    onChange: e => {
                        let {
                            text: t
                        } = e;
                        n(t);
                    },
                    validate: e => !(!e || !e.trim()),
                    supportsEmoji: true,
                    multiline: true,
                    spellCheck: true,
                    showRemaining: true,
                    focusOnMount: true,
                    theme: "small",
                    textFormatEnabled: true,
                    editable: e.editable,
                    editRestrictionInfo: e.editRestrictionInfo
                });
                return (0, h.jsxs)(r.Modal, {
                    title: u.fbt._("Name Your Group", null, {
                        hk: "23gkmL"
                    }),
                    actions: v,
                    children: [e.subtext, x]
                });
            };
            var C = (0, f.forwardRef)(g);
            t.default = C;
        },
        499717: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const {
                    getZoomNode: t,
                    animateBorderRadius: o,
                    animateSquircle: n = false
                } = e;
                const T = (0, S.useModelValues)(e.contact, ["formattedUser", "id"]);
                const j = (0, S.useModelValues)(e.profilePicThumb, ["imgFull"]).imgFull;
                const [k, E] = (0, x.useState)(j);
                if (j != null && k !== j) {
                    E(j);
                }
                const [I, O] = (0, x.useState)(() => g.default.isPSA(e.contact.id) ? {
                    visibility: "visible",
                    transform: "translateX(0px) translateY(0px) scale(1)",
                    borderRadius: "0%",
                    transition: "transform 500ms cubic-bezier(.1,.82,.25,1),\n                  border-radius 500ms cubic-bezier(.1,.82,.25,1)"
                } : {
                    visibility: "hidden"
                });
                const [L, A] = (0, x.useState)(() => g.default.isPSA(e.contact.id) ? {
                    width: 640,
                    height: 641
                } : null);
                const w = (0, x.useRef)(false);
                const M = (0, x.useRef)();
                const R = (0, x.useRef)();
                (0, x.useEffect)(() => {
                    const e = R.current;
                    R.current = null;
                    if (!(e == null)) {
                        e();
                    }
                });
                const N = e => {
                    const n = e.currentTarget;
                    A({
                        width: n.naturalWidth,
                        height: n.naturalHeight
                    });
                    R.current = () => t(e => {
                        const t = n.getBoundingClientRect();
                        const l = e.getBoundingClientRect();
                        const i = l.top - t.top;
                        const a = {
                            visibility: "hidden",
                            transform: `translateX(${l.left - t.left}px) translateY(${i}px) scale(${e.clientWidth / n.clientWidth})`,
                            transition: "transform 0s",
                            borderRadius: undefined
                        };
                        if (o) {
                            a.borderRadius = "50%";
                        }
                        O(a);
                        R.current = () => {
                            let e = {
                                transform: "translateX(0px) translateY(0px) scale(1)",
                                transition: "transform 500ms cubic-bezier(.1,.82,.25,1)"
                            };
                            if (o) {
                                e = {
                                    transform: "translateX(0px) translateY(0px) scale(1)",
                                    borderRadius: "0%",
                                    transition: "transform 500ms cubic-bezier(.1,.82,.25,1),\n                                       border-radius 500ms cubic-bezier(.1,.82,.25,1)"
                                };
                            }
                            O(e);
                        };
                    });
                };
                const D = (0, b.default)(() => {
                    if (w.current) {
                        return;
                    }
                    let e;
                    w.current = true;
                    t(t => {
                        e = t;
                    });
                    if (!e) {
                        return c.ModalManager.closeMedia();
                    }
                    const i = M.current;
                    if (i) {
                        if (o || n) {
                            i.style.transition = (n ? "clip-path" : "border-radius") + " 500ms cubic-bezier(.1,.82,.25,1)";
                            if (n) {
                                i.style.clipPath = "var(--squircle-polygon)";
                            } else {
                                i.style.borderRadius = "50%";
                            }
                        }
                        const t = (0, l.default)(e, "start");
                        const a = i.getBoundingClientRect();
                        const r = t.getBoundingClientRect();
                        const s = r.top - a.top;
                        const d = r.left - a.left;
                        const u = t.clientWidth / i.clientWidth;
                        (0, p.default)(i, {
                            translateX: [d, 0],
                            translateY: [s, 0],
                            scale: [u, 1]
                        }, {
                            duration: 200,
                            easing: [0.1, 0.82, 0.25, 1]
                        }).then(() => {
                            c.ModalManager.closeMedia();
                        });
                    }
                });
                let B;
                let H;
                (0, x.useEffect)(() => {
                    if (!j) {
                        D();
                    }
                }, [j, D]);
                if (g.default.isPSA(T.id)) {
                    B = (0, P.jsx)(h.WaChatPsaIcon, {
                        iconXstyle: y.avatarDefaultPSALarge
                    });
                    H = (0, P.jsx)(h.WaChatPsaIcon, {
                        iconXstyle: y.avatarDefaultPSASmall
                    });
                } else if (k) {
                    B = (0, P.jsx)(r.default, {
                        src: k,
                        hasPrivacyChecks: true,
                        onLoad: N,
                        className: m.default.profileViewerImg
                    });
                    H = (0, P.jsx)(a.DetailImage, {
                        id: T.id,
                        size: 40,
                        shape: n ? a.DetailImageShape.Squircle : null
                    });
                }
                return (0, P.jsx)(f.UIE, {
                    displayName: "PhotoViewer",
                    escapable: true,
                    requestDismiss: D,
                    children: (0, P.jsxs)("div", {
                        className: (0, v.default)("overlay", m.default.container),
                        onWheel: e => {
                            if (Math.abs(e.deltaY) > 3) {
                                D();
                            }
                        },
                        onClick: D,
                        children: [(0, P.jsxs)("div", {
                            className: m.default.headerContainer,
                            children: [(0, P.jsx)("div", {
                                className: m.default.profileThumb,
                                children: (0, P.jsx)(i.default, {
                                    image: H,
                                    theme: "plain",
                                    primary: (0, P.jsx)(d.Name, {
                                        contact: T,
                                        selectable: true
                                    })
                                })
                            }), (0, P.jsx)("div", {
                                className: m.default.mediaPanelTools,
                                children: (0, P.jsx)(s.MenuBar, {
                                    theme: "strong",
                                    children: (0, P.jsx)(s.MenuBarItem, {
                                        testid: "btn-close",
                                        icon: (0, P.jsx)(C.XViewerIcon, {}),
                                        title: _.fbt._("Close", null, {
                                            hk: "19Jpec"
                                        }),
                                        onClick: D
                                    })
                                }, "media-panel-header")
                            })]
                        }), (0, P.jsx)("div", {
                            className: m.default.profileContainer,
                            dir: "ltr",
                            children: (0, P.jsx)("div", {
                                className: m.default.media,
                                children: (0, P.jsx)(u.default, {
                                    type: "scaleDown",
                                    size: L,
                                    children: (0, P.jsx)("div", {
                                        className: m.default.profileViewer,
                                        ref: M,
                                        style: I,
                                        children: B
                                    })
                                })
                            })
                        })]
                    })
                });
            };
            var l = n(o(670983));
            var i = n(o(170206));
            var a = o(23641);
            var r = n(o(488922));
            var s = o(526795);
            var c = o(114850);
            var d = o(21645);
            var u = n(o(821384));
            var f = o(392632);
            var p = n(o(330619));
            var h = o(709333);
            var g = n(o(124928));
            var C = o(356722);
            var m = n(o(949980));
            var _ = o(548360);
            var v = n(o(261294));
            var x = o(667294);
            n(o(156720));
            var S = o(655241);
            var b = n(o(17533));
            var P = o(785893);
            const y = {
                avatarDefaultPSASmall: {
                    borderTopStartRadius: "g9p5wyxn",
                    borderTopEndRadius: "i0tg5vk9",
                    borderBottomEndRadius: "aoogvgrq",
                    borderBottomStartRadius: "o2zu3hjb",
                    width: "qssinsw9",
                    height: "lniyxyh2"
                },
                avatarDefaultPSALarge: {
                    width: "tfhkdmxh",
                    height: "gw1xhhb9"
                }
            };
        },
        567439: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const {
                    profilePicThumb: t,
                    size: o
                } = e;
                const n = !t.canSet() && !t.canDelete();
                const [h, g] = (0, u.useState)(false);
                const C = (0, f.default)();
                return (0, p.jsx)(c.PhotoPickerLoadable, {
                    type: s.PhotoPickerType.PROFILE,
                    id: t.id,
                    attachToChat: false,
                    pending: h,
                    startImage: t.imgFull,
                    readOnly: n,
                    onImageSet: (t, o) => {
                        const n = e.profilePicThumb;
                        let s;
                        g(true);
                        s = t && o ? (0, d.setProfilePic)(n, t, o) : (0, d.deleteProfilePic)(n);
                        (0, a.default)(s, C).catch((0, i.filteredCatch)(r.ActionError, () => {
                            __LOG__(3)`ProfileDrawer: failed to set/delete profile image`;
                        })).catch((0, l.catchAbort)(() => {})).finally(() => {
                            g(false);
                        });
                    },
                    size: o
                });
            };
            var l = o(898817);
            var i = o(122583);
            var a = n(o(229922));
            var r = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var o = h(t);
                if (o && o.has(e)) {
                    return o.get(e);
                }
                var n = {};
                var l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var i in e) {
                    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
                        var a = l ? Object.getOwnPropertyDescriptor(e, i) : null;
                        if (a && (a.get || a.set)) {
                            Object.defineProperty(n, i, a);
                        } else {
                            n[i] = e[i];
                        }
                    }
                }
                n.default = e;
                if (o) {
                    o.set(e, n);
                }
                return n;
            }(o(288057));
            var s = o(588792);
            var c = o(511696);
            var d = o(115948);
            var u = o(667294);
            var f = n(o(895851));
            var p = o(785893);

            function h (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var o = new WeakMap();
                return (h = function (e) {
                    if (e) {
                        return o;
                    } else {
                        return t;
                    }
                })(e);
            }
        },
        155105: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = undefined;
            var l = n(o(330383));
            var i = n(o(846870));
            var a = n(o(908081));
            var r = n(o(324093));
            var s = o(626194);
            var c = o(305521);
            var d = o(81644);
            var u = n(o(428543));
            var f = o(118612);
            var p = o(202391);
            var h = o(435595);
            var g = o(430484);
            var C = o(392632);
            var m = o(667294);
            var _ = n(o(156720));
            var v = o(253155);
            var x = o(785893);
            const S = {
                display: "p357zi0d",
                flexDirection: "f8m0rgwh",
                height: "cctpw5f5",
                paddingBottom: "bxcbqipq",
                overflowX: "gfz4du6o",
                overflowY: "r7fjleex",
                backgroundColor: "rv6u8h8g"
            };
            const b = {
                flexGrow: "ggj6brxn",
                paddingTop: "mw9hwy0h",
                paddingEnd: "lk91ofgv",
                paddingBottom: "bxcbqipq",
                paddingStart: "s9xya5d7",
                overflowX: "i44ccddp",
                overflowY: "ag5g9lrv",
                backgroundColor: "rv6u8h8g"
            };
            const P = {
                position: "g0rxnol2",
                zIndex: "nbczt5ty",
                height: "noboit18",
                backgroundColor: "gulicvea"
            };
            const y = {
                position: "lhggkp7q",
                end: "druapeav",
                bottom: "k2umuq2k"
            };
            const T = (e, t) => {
                const {
                    defaultText: o,
                    title: n,
                    onSend: T,
                    onBack: j
                } = e;
                const [k, E] = (0, m.useState)(o);
                const I = (0, v.findFirstWebLink)(k);
                const {
                    linkPreview: O,
                    clearLinkPreview: L
                } = (0, v.useLinkPreview)(I);
                const A = n ? (0, x.jsx)(c.EmojiText, {
                    text: n,
                    direction: "auto",
                    titlify: true,
                    ellipsify: true
                }) : null;
                const {
                    title: w,
                    canonicalUrl: M,
                    description: R,
                    thumbnail: N
                } = O || {};
                const D = O ? (0, x.jsx)(C.UIE, {
                    displayName: "ComposeBoxLinkPreview",
                    escapable: true,
                    requestDismiss: L,
                    children: (0, x.jsx)(l.default, {
                        onOmit: L,
                        children: (0, x.jsx)(u.default, {
                            title: w,
                            compose: true,
                            canonicalUrl: M,
                            description: R,
                            thumbnailJpeg: N,
                            isLoading: false
                        })
                    })
                }) : null;
                return (0, x.jsx)(f.Modal, {
                    ref: t,
                    type: f.ModalTheme.Box,
                    children: (0, x.jsxs)(a.default, {
                        children: [(0, x.jsx)(s.DrawerHeader, {
                            type: s.DRAWER_HEADER_TYPE.POPUP,
                            onBack: j,
                            children: A
                        }), (0, x.jsx)(r.default, {
                            children: (0, x.jsxs)(d.HotKeys, {
                                className: (0, _.default)(S),
                                children: [(0, x.jsx)("div", {
                                    className: (0, _.default)(b),
                                    children: (0, x.jsx)(p.RichTextField, {
                                        testid: "text-message-modal-text-unput",
                                        value: k,
                                        maxLength: i.default.MAX_TXT_MSG_SIZE,
                                        onChange: e => {
                                            let {
                                                text: t
                                            } = e;
                                            E(t);
                                        },
                                        supportsEmoji: true,
                                        multiline: true,
                                        spellCheck: true,
                                        showRemaining: true,
                                        focusOnMount: true,
                                        theme: "small",
                                        textFormatEnabled: true
                                    })
                                }), D]
                            })
                        }), (0, x.jsx)("div", {
                            className: (0, _.default)(P),
                            children: (0, x.jsx)("div", {
                                className: (0, _.default)(y),
                                children: (0, x.jsx)(h.Round, {
                                    large: true,
                                    onClick: () => {
                                        if (k.length) {
                                            T(k, O);
                                        }
                                    },
                                    children: (0, x.jsx)(g.SendIcon, {
                                        directional: true
                                    })
                                })
                            })
                        })]
                    })
                });
            };
            var j = (0, m.forwardRef)(T);
            t.default = j;
        },
        983098: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                let {
                    testid: t,
                    Icon: o,
                    iconWidth: n,
                    iconHeight: u,
                    label: f,
                    disabled: p,
                    xstyle: h,
                    onClick: g
                } = e;
                const {
                    isHovered: C,
                    onMouseEnter: m,
                    onMouseLeave: _
                } = function () {
                    const [e, t] = (0, r.useState)(false);
                    const o = (0, r.useCallback)(() => {
                        t(true);
                    }, []);
                    const n = (0, r.useCallback)(() => {
                        t(false);
                    }, []);
                    return {
                        isHovered: e,
                        onMouseEnter: o,
                        onMouseLeave: n
                    };
                }();
                const v = (0, c.jsx)(o, {
                    directional: true,
                    color: i.SvgColorProp.TEAL,
                    width: n,
                    height: u
                });
                return (0, c.jsxs)("div", {
                    className: (0, s.default)(d.button, p && d.disabled, h),
                    onMouseEnter: m,
                    onMouseLeave: _,
                    children: [(0, c.jsx)(l.Round, {
                        inverted: true,
                        onClick: g,
                        disabled: p,
                        testid: t,
                        hideBackground: p || !C,
                        children: v
                    }), (0, c.jsx)(a.default, {
                        xstyle: d.label,
                        disabled: p,
                        testid: t,
                        onClick: g,
                        children: f
                    })]
                });
            };
            var l = o(435595);
            var i = o(220584);
            var a = n(o(625903));
            var r = o(667294);
            var s = n(o(156720));
            var c = o(785893);
            const d = {
                button: {
                    textAlign: "qfejxiq4"
                },
                label: {
                    marginEnd: "jnwc1y2a",
                    marginBottom: "mpdn4nr2",
                    marginStart: "svoq16ka",
                    fontSize: "ovllcyds",
                    marginTop: "qt60bha0",
                    color: "jq3rn4u7"
                },
                disabled: {
                    opacity: "ge6flnsz"
                }
            };
        },
        504838: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const {
                    text: t,
                    secondary: o,
                    Icon: n,
                    href: h,
                    linkedAccountType: g,
                    onClick: C,
                    rowTheme: m,
                    hasCoverPhoto: _
                } = e;
                const v = (0, u.useContext)(a.DrawerContext);
                const x = (0, s.getProductCatalogSessionId)(v);
                (0, u.useEffect)(() => {
                    (0, l.logLinkedAccountImpression)(x, g, _);
                }, [x, g, _]);
                return (0, f.jsx)(d.default, {
                    testid: "social-row",
                    onClick: () => {
                        if (h !== undefined) {
                            const e = (0, c.getWebsiteLink)(h);
                            r.default.open(e);
                            if (!(C == null)) {
                                C();
                            }
                        }
                    },
                    disabled: h === undefined,
                    xstyle: p.button,
                    children: (0, f.jsx)(i.default, {
                        image: n,
                        primary: t,
                        secondary: o,
                        theme: m,
                        idle: h === undefined
                    })
                });
            };
            var l = o(815651);
            var i = n(o(170206));
            var a = o(568550);
            var r = n(o(524173));
            var s = o(932523);
            var c = o(341463);
            var d = n(o(625903));
            var u = o(667294);
            n(o(156720));
            var f = o(785893);
            const p = {
                button: {
                    width: "ln8gz9je"
                }
            };
        },
        366773: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const {
                    showEditHint: t,
                    businessProfile: o,
                    sectionTheme: n = "no-padding",
                    rowTheme: _ = "linked-account"
                } = e;
                const {
                    fbPage: v,
                    igProfessional: x
                } = (0, g.useModelValues)(o, ["fbPage", "igProfessional"]);
                const S = (0, u.getProductCatalogSessionId)((0, h.useContext)(a.DrawerContext));
                const b = [];
                if (v == null ? undefined : v.displayName) {
                    const e = v.likes ? p.fbt._({
                        "*": "Facebook • {count} Likes",
                        _1: "Facebook • 1 Like"
                    }, [p.fbt._plural(v.likes, "count")], {
                        hk: "4fuveG"
                    }) : p.fbt._("Facebook", null, {
                        hk: "2PcUTa"
                    });
                    b.push((0, C.jsx)(i.default, {
                        Icon: (0, C.jsx)(c.LogoFacebookRoundIcon, {
                            iconXstyle: m.iconColor
                        }),
                        text: v.displayName,
                        secondary: e,
                        href: `https://www.facebook.com/${v.id}`,
                        rowTheme: _,
                        onClick: () => {
                            (0, l.logLinkedFbClick)(S, v.likes, !!o.coverPhoto);
                        },
                        linkedAccountType: f.BUSINESS_TOOLS_LINKED_ACCOUNT_TYPE.FACEBOOK,
                        hasCoverPhoto: !!o.coverPhoto
                    }, "fb"));
                }
                if (x == null ? undefined : x.handle) {
                    const e = x.followers ? p.fbt._({
                        "*": "Instagram • {count} Followers",
                        _1: "Instagram • 1 Follower"
                    }, [p.fbt._plural(x.followers, "count")], {
                        hk: "4gGhJG"
                    }) : p.fbt._("Instagram", null, {
                        hk: "4kjnWv"
                    });
                    b.push((0, C.jsx)(i.default, {
                        Icon: (0, C.jsx)(d.LogoInstagramColorIcon, {}),
                        text: `@${x.handle}`,
                        secondary: e,
                        href: `https://www.instagram.com/${x.handle}`,
                        rowTheme: _,
                        onClick: () => {
                            (0, l.logLinkedIgClick)(S, x.followers, !!o.coverPhoto);
                        },
                        linkedAccountType: f.BUSINESS_TOOLS_LINKED_ACCOUNT_TYPE.INSTAGRAM,
                        hasCoverPhoto: !!o.coverPhoto
                    }, "ig"));
                }
                if (b.length === 0) {
                    return null;
                }
                let P;
                if (t === true) {
                    const e = p.fbt._("Facebook and Instagram handles can only be edited from the app on your mobile device.", null, {
                        hk: "3JNYRt"
                    });
                    P = (0, C.jsx)(s.EmojiText, {
                        direction: "inherit",
                        xstyle: m.infoText,
                        text: e.toString()
                    });
                }
                return (0, C.jsxs)(r.default, {
                    theme: n,
                    children: [b.map(e => e), P]
                });
            };
            var l = o(815651);
            var i = n(o(504838));
            var a = o(568550);
            var r = n(o(969358));
            var s = o(305521);
            var c = o(416887);
            var d = o(955424);
            var u = o(932523);
            var f = o(130756);
            var p = o(548360);
            var h = o(667294);
            n(o(156720));
            var g = o(655241);
            var C = o(785893);
            const m = {
                infoText: {
                    fontSize: "dsh4tgtl",
                    lineHeight: "jgi8eev7",
                    color: "t35qvd06",
                    paddingStart: "nvib3uz4",
                    paddingEnd: "sjajxv0r",
                    display: "f804f6gw",
                    paddingBottom: "p9a4hubg",
                    paddingTop: "b7n2qyd4",
                    marginTop: "tt8xd2xn"
                },
                iconColor: {
                    color: "ekddkhd8"
                }
            };
        },
        815651: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.logCatalogClick = function (e, t, o) {
                s({
                    viewBusinessProfileAction: r.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_CATALOG_ICON,
                    catalogSessionId: e,
                    isProfileLinked: t,
                    hasCoverPhoto: o
                });
            };
            t.logEmailClick = function (e, t, o) {
                s({
                    viewBusinessProfileAction: r.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_EMAIL,
                    catalogSessionId: e,
                    isProfileLinked: t,
                    hasCoverPhoto: o
                });
            };
            t.logForwardClick = function (e, t, o) {
                s({
                    viewBusinessProfileAction: r.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_FORWARD,
                    catalogSessionId: e,
                    isProfileLinked: t,
                    hasCoverPhoto: o
                });
            };
            t.logHoursClick = function (e, t, o) {
                s({
                    viewBusinessProfileAction: r.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_HOURS,
                    catalogSessionId: e,
                    isProfileLinked: t,
                    hasCoverPhoto: o
                });
            };
            t.logLinkedAccountImpression = function (e, t, o) {
                s({
                    viewBusinessProfileAction: r.VIEW_BUSINESS_PROFILE_ACTION.ACTION_APP_IMPRESSION,
                    linkedAccount: t,
                    catalogSessionId: e,
                    isProfileLinked: true,
                    hasCoverPhoto: o
                });
            };
            t.logLinkedFbClick = function (e, t, o) {
                s({
                    viewBusinessProfileAction: r.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_APP_LINK,
                    linkedAccount: r.BUSINESS_TOOLS_LINKED_ACCOUNT_TYPE.FACEBOOK,
                    catalogSessionId: e,
                    bizFbSize: c(t),
                    isProfileLinked: true,
                    hasCoverPhoto: o
                });
            };
            t.logLinkedIgClick = function (e, t, o) {
                s({
                    viewBusinessProfileAction: r.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_APP_LINK,
                    linkedAccount: r.BUSINESS_TOOLS_LINKED_ACCOUNT_TYPE.INSTAGRAM,
                    catalogSessionId: e,
                    bizIgSize: c(t),
                    isProfileLinked: true,
                    hasCoverPhoto: o
                });
            };
            t.logLocationClick = function (e, t, o) {
                s({
                    viewBusinessProfileAction: r.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_LOCATION,
                    catalogSessionId: e,
                    isProfileLinked: t,
                    hasCoverPhoto: o
                });
            };
            t.logMessageClick = function (e, t, o) {
                s({
                    viewBusinessProfileAction: r.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_MESSAGE,
                    catalogSessionId: e,
                    hasCoverPhoto: o
                });
            };
            t.logProfileExit = function (e, t, o, n) {
                s({
                    viewBusinessProfileAction: r.VIEW_BUSINESS_PROFILE_ACTION.ACTION_EXIT,
                    catalogSessionId: e,
                    scrollDepth: t,
                    isProfileLinked: o,
                    hasCoverPhoto: n
                });
            };
            t.logProfileImpression = function (e, t, o, n) {
                if ((0, i.smbBizProfileLoggingEnabled)()) {
                    new a.ViewBusinessProfileWamEvent({
                        viewBusinessProfileAction: r.VIEW_BUSINESS_PROFILE_ACTION.ACTION_IMPRESSION,
                        catalogSessionId: e,
                        profileEntryPoint: t,
                        isProfileLinked: o,
                        hasCoverPhoto: n
                    }).commit();
                } else {
                    new a.ViewBusinessProfileWamEvent({
                        viewBusinessProfileAction: r.VIEW_BUSINESS_PROFILE_ACTION.ACTION_IMPRESSION,
                        catalogSessionId: e,
                        isProfileLinked: o,
                        hasCoverPhoto: n
                    }).commit();
                }
            };
            t.logShopsClick = function (e, t, o) {
                s({
                    viewBusinessProfileAction: r.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_SHOPS_ICON,
                    catalogSessionId: e,
                    isProfileLinked: t,
                    hasCoverPhoto: o
                });
            };
            t.logStatusClick = function (e, t, o) {
                s({
                    viewBusinessProfileAction: r.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_STATUS,
                    catalogSessionId: e,
                    isProfileLinked: t,
                    hasCoverPhoto: o
                });
            };
            t.logVoiceCallClick = function (e, t, o) {
                s({
                    viewBusinessProfileAction: r.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_VOICE_CALL,
                    catalogSessionId: e,
                    isProfileLinked: t,
                    hasCoverPhoto: o
                });
            };
            t.logWebsiteClick = function (e, t, o) {
                s({
                    viewBusinessProfileAction: r.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_WEBSITE,
                    catalogSessionId: e,
                    isProfileLinked: t,
                    hasCoverPhoto: o
                });
            };
            var l = n(o(81109));
            var i = o(72696);
            var a = o(875302);
            var r = o(130756);

            function s (e) {
                const t = new a.ViewBusinessProfileWamEvent((0, l.default)((0, l.default)({}, e), {}, {
                    isProfileLinked: !!e.isProfileLinked
                }));
                if (t) {
                    t.commit();
                }
            }

            function c (e) {
                if (e > 1000000) {
                    return r.TRUST_SIGNAL_BUCKETS.B1M;
                } else if (e >= 100000) {
                    return r.TRUST_SIGNAL_BUCKETS.B100K;
                } else if (e >= 10000) {
                    return r.TRUST_SIGNAL_BUCKETS.B10K;
                } else if (e >= 1000) {
                    return r.TRUST_SIGNAL_BUCKETS.B1K;
                } else if (e >= 501) {
                    return r.TRUST_SIGNAL_BUCKETS.B501;
                } else if (e >= 101) {
                    return r.TRUST_SIGNAL_BUCKETS.B101;
                } else if (e >= 51) {
                    return r.TRUST_SIGNAL_BUCKETS.B51;
                } else if (e >= 11) {
                    return r.TRUST_SIGNAL_BUCKETS.B11;
                } else if (e >= 2) {
                    return r.TRUST_SIGNAL_BUCKETS.B2;
                } else if (e === 1) {
                    return r.TRUST_SIGNAL_BUCKETS.B1;
                } else {
                    return r.TRUST_SIGNAL_BUCKETS.B0;
                }
            }
        },
        463273: (e, t, o) => {
            "use strict";

            o.r(t);
            o.d(t, {
                default: () => n
            });
            const n = {
                coverPhoto: "_28cxP",
                isEditable: "yToza",
                avatar: "qdD7y",
                noStatusBorder: "_3t0oP",
                hasStatusBorder: "yEzM-",
                coverPhotoImage: "_21f_k"
            };
        },
        541783: (e, t, o) => {
            "use strict";

            o.r(t);
            o.d(t, {
                default: () => n
            });
            const n = {
                labelRow: "htdK4",
                standaloneLabelRow: "DRoL5",
                labelContainer: "_3T1FS",
                standaloneLabelContainer: "_1oXnA"
            };
        },
        886480: (e, t, o) => {
            "use strict";

            o.r(t);
            o.d(t, {
                default: () => n
            });
            const n = {
                productImage: "mA2Mt",
                productImageContainer: "_1RPqI",
                productThumb: "_1GMgL",
                productThumbContainer: "_3vt25",
                prompt: "jtHAK"
            };
        },
        345697: (e, t, o) => {
            "use strict";

            o.r(t);
            o.d(t, {
                default: () => n
            });
            const n = {
                header: "_2v4WC",
                photo: "tbJSz",
                text: "_2hENW",
                name: "CbXK5",
                description: "_3fERT",
                spinner: "_2OegD",
                img: "_2YIih"
            };
        },
        851713: (e, t, o) => {
            "use strict";

            o.r(t);
            o.d(t, {
                default: () => n
            });
            const n = {
                carousel: "Zk5oU",
                contentContainer: "_2WuMQ",
                slidesContainer: "_3wjDO",
                loaded: "_2mJIF",
                fadeIn: "_1L5pR",
                spinnerContainer: "_2T83U",
                spinner: "_1AH7f"
            };
        },
        897679: (e, t, o) => {
            "use strict";

            o.r(t);
            o.d(t, {
                default: () => n
            });
            const n = {
                slide: "_1Z_Af",
                slideInnerContainer: "_1pPlm",
                image: "_3CLBm"
            };
        },
        927327: (e, t, o) => {
            "use strict";

            o.r(t);
            o.d(t, {
                default: () => n
            });
            const n = {
                msg: "_233fJ",
                hover: "_2LaqL",
                current: "_35H7R",
                active: "N4HIH",
                focusAnimation: "_1kXzr",
                focusAnimationKeyframes: "_1jP0D"
            };
        },
        949980: (e, t, o) => {
            "use strict";

            o.r(t);
            o.d(t, {
                default: () => n
            });
            const n = {
                mediaPanelTools: "_2oUO5",
                profileThumb: "_21bjq",
                profileContainer: "_21YBx",
                media: "_2cf2X",
                profileViewer: "QIsaf",
                profileViewerImg: "_1cXba",
                container: "_3_NRW",
                "media-viewer-animate": "MqTIU",
                mediaViewerAnimate: "MqTIU",
                headerContainer: "_Qn3D"
            };
        }
    }
]);
//# sourceMappingURL=https://web.whatsapp.com/lazy_loaded_high_priority_components~lazy_loaded_low_priority_components.cb12d86446ab816821a9.js.map