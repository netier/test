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
                return a.default.verifyAndSavePostcode(e, t);
            };
            var a = n(o(418950));
        },
        394480: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.uploadBizCoverPhoto = function () {
                return u.apply(this, arguments);
            };
            var a = n(o(348926));
            var l = o(698210);
            var r = o(791357);
            var i = o(708761);
            var c = n(o(92577));
            var d = o(495588);

            function u () {
                return (u = (0, a.default)(function* (e, t, o) {
                    const n = yield(0, l.blobToArrayBuffer)(e);
                    const a = yield c.default.uploadCoverPhoto({
                        file: n,
                        hash: t,
                        signal: o,
                        type: i.MEDIA_TYPES.BIZ_COVER_PHOTO,
                        uploadOrigin: d.UPLOAD_ORIGIN_TYPE.UNKNOWN,
                        isViewOnce: false
                    });
                    const {
                        fbid: u,
                        ts: s,
                        metaHmac: f
                    } = a;
                    if (u != null && s != null && f != null) {
                        return {
                            id: u,
                            ts: s,
                            metaHmac: f
                        };
                    }
                    throw new r.HttpInvalidResponseError("mmsUpload: missing fields in upload response");
                })).apply(this, arguments);
            }
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
                            return (0, a.default)(o(667845)).get(e);
                        }
                        return null;
                    }(e);
                    if (t != null) {
                        return (0, l.getGroupCountMetricsFromGroupMetadata)(t);
                    }
                }
            };
            var a = n(o(97359));
            var l = o(869513);
        },
        156806: (e, t) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.BUSINESS_OWNER_PLATFORM = undefined;
            const o = Object.freeze({
                SMBA: 1,
                SMBI: 2,
                ENT: 3
            });
            t.BUSINESS_OWNER_PLATFORM = o;
        },
        96010: (e, t) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.BUSINESS_PROFILE_ENTRY_POINT = undefined;
            const o = Object.freeze({
                REGISTRATION: 1,
                SETTINGS: 2,
                COMPLIANCE: 3,
                QUICK_REPLY_SMART_DEFAULT: 4,
                WA_PAGES: 5,
                PROFILE_COMPLETENESS: 6,
                DIRECTORY_ONBOARDING: 7
            });
            t.BUSINESS_PROFILE_ENTRY_POINT = o;
        },
        817908: (e, t) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.BUSINESS_PROFILE_FIELD = undefined;
            const o = Object.freeze({
                DESCRIPTION: 1,
                HOURS: 2,
                ADDRESS: 3,
                EMAIL: 4,
                WEBSITE: 5,
                CATEGORY: 6,
                PROFILE: 7
            });
            t.BUSINESS_PROFILE_FIELD = o;
        },
        413863: (e, t) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.BUSINESS_TOOLS_LINKED_ACCOUNT_TYPE = undefined;
            const o = Object.freeze({
                FACEBOOK: 0,
                INSTAGRAM: 1
            });
            t.BUSINESS_TOOLS_LINKED_ACCOUNT_TYPE = o;
        },
        789820: (e, t) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.EDIT_PROFILE_ACTION = undefined;
            const o = Object.freeze({
                ACTION_OPEN: 1,
                ACTION_SAVE: 2,
                ACTION_DISCARD: 3,
                ACTION_PROFILE_FIELD_OPEN: 4,
                ACTION_PROFILE_FIELD_SAVE: 5,
                ACTION_PROFILE_FIELD_DISCARD: 6,
                ACTION_FACEBOOK_ENABLED: 7,
                ACTION_FACEBOOK_DISABLED: 8,
                ACTION_INSTAGRAM_ENABLED: 9,
                ACTION_INSTAGRAM_DISABLED: 10,
                ACTION_FB_IG_POP_SHOWN: 11,
                ACTION_EDIT_COVER_PHOTO_CLICK: 12,
                ACTION_REMOVE_COVER_PHOTO: 13,
                UPGRADE_TO_CUSTOM_LINK_CLICK: 14,
                DIALOG_BOX_GEOCODE_IMPRESSION: 15,
                DIALOG_BOX_GEOCODE_ACCEPT: 16,
                DIALOG_BOX_GEOCODE_REVOKE: 17
            });
            t.EDIT_PROFILE_ACTION = o;
        },
        970739: (e, t) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.GROUP_PROFILE_ACTION_TYPE = undefined;
            const o = Object.freeze({
                CHANGE_PROFILE_PHOTO: 1,
                TAP_ACTION_ITEM_TAKE_PHOTO: 2,
                TAP_ACTION_ITEM_VIEW_PHOTO: 3,
                TAP_ACTION_ITEM_EMOJI_STICKER: 4,
                TAP_ACTION_ITEM_UPLOAD_PHOTO: 5,
                TAP_ACTION_ITEM_REMOVE_PHOTO: 6,
                TAP_ACTION_ITEM_WEB_SEARCH: 7,
                EMOJI_PANEL_OPEN: 8,
                STICKER_PANEL_OPEN: 9,
                PROFILE_PIC_UPDATED: 10
            });
            t.GROUP_PROFILE_ACTION_TYPE = o;
        },
        158248: (e, t) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.META_VERIFIED_INTERACTION_ACTION = undefined;
            const o = Object.freeze({
                MV_INTERACTION_ACTION_CLICK_MV_BADGE: 1,
                MV_INTERACTION_ACTION_VIEW_MV_EDUCATION_BOTTOM_SHEET: 2,
                MV_INTERACTION_ACTION_CLICK_MV_EDUCATION_LINK: 3,
                MV_INTERACTION_ACTION_VIEW_CROSS_SELL_PROFILE_INTERSTITIAL: 4,
                MV_INTERACTION_ACTION_CLICK_MV_MORE_LINK: 5,
                MV_INTERACTION_ACTION_CLICK_GET_WA_BUSINESS: 6,
                MV_INTERACTION_ACTION_CLICK_SUPPORT: 7,
                MV_INTERACTION_ACTION_CLICK_CUSTOM_WEBPAGE_AND_LINK: 8,
                MV_INTERACTION_ACTION_CLICK_MULTI_DEVICE: 9,
                MV_INTERACTION_ACTION_CLICK_MV_LEARN_MORE: 10,
                MV_INTERACTION_ACTION_CLICK_MV_HOME: 11
            });
            t.META_VERIFIED_INTERACTION_ACTION = o;
        },
        453396: (e, t) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.META_VERIFIED_INTERACTION_ASSET_TYPE = undefined;
            const o = Object.freeze({
                CHANNEL: 1,
                SMB: 2,
                ENT: 3,
                PERSONAL: 4
            });
            t.META_VERIFIED_INTERACTION_ASSET_TYPE = o;
        },
        711343: (e, t) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.META_VERIFIED_INTERACTION_REFERRAL = undefined;
            const o = Object.freeze({
                CHAT_PROFILE: 1,
                CONTACT_CARD: 2,
                SETTINGS: 3,
                BUSINESS_TOOLS: 4,
                NOTIFICATION: 5
            });
            t.META_VERIFIED_INTERACTION_REFERRAL = o;
        },
        167889: (e, t) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.META_VERIFIED_INTERACTION_SURFACE = undefined;
            const o = Object.freeze({
                BUSINESS_PROFILE: 1,
                MV_EDUCATION_BOTTOM_SHEET: 2,
                CROSS_SELL_PROFILE_INTERSTITIAL: 3,
                META_VERIFIED_HOME: 4,
                SETTINGS: 5,
                BUSINESS_TOOLS: 6
            });
            t.META_VERIFIED_INTERACTION_SURFACE = o;
        },
        978244: (e, t) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.PROFILE_PICTURE_TYPE = undefined;
            const o = Object.freeze({
                PHOTO_CAMERA: 1,
                PHOTO_UPLOAD: 2,
                WEB_SEARCH: 3,
                EMOJI: 4,
                STICKER: 5,
                REMOVE_PHOTO: 6
            });
            t.PROFILE_PICTURE_TYPE = o;
        },
        992968: (e, t) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.TRUST_SIGNAL_BUCKETS = undefined;
            const o = Object.freeze({
                B0: 1,
                B1: 2,
                B2: 3,
                B11: 4,
                B51: 5,
                B101: 6,
                B501: 7,
                B1K: 8,
                B10K: 9,
                B100K: 10,
                B1M: 11
            });
            t.TRUST_SIGNAL_BUCKETS = o;
        },
        111540: (e, t) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.VIEW_BUSINESS_PROFILE_ACTION = undefined;
            const o = Object.freeze({
                ACTION_IMPRESSION: 1,
                ACTION_CLICK_WEBSITE: 2,
                ACTION_CLICK_LOCATION: 3,
                ACTION_CLICK_HOURS: 4,
                ACTION_CLICK_DESCRIPTION: 5,
                ACTION_CLICK_EMAIL: 6,
                ACTION_CLICK_ADDTOCONTACT: 7,
                ACTION_CLICK_MORE_BIZ_PROFILE: 8,
                ACTION_CLICK_MESSAGE: 9,
                ACTION_CLICK_VOICE_CALL: 10,
                ACTION_CLICK_VIDEO_CALL: 11,
                ACTION_CLICK_FORWARD: 12,
                ACTION_CLICK_CATALOG_ICON: 13,
                ACTION_CLICK_SHOPS_ICON: 14,
                ACTION_CLICK_APP_LINK: 15,
                ACTION_APP_IMPRESSION: 16,
                ACTION_CLICK_STATUS: 17,
                ACTION_EXIT: 18,
                ACTION_COVER_PHOTO_IMPRESSION: 19
            });
            t.VIEW_BUSINESS_PROFILE_ACTION = o;
        },
        22904: (e, t) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.WEBSITE_SOURCE_TYPE = undefined;
            const o = Object.freeze({
                SOURCE_OTHER: 1,
                SOURCE_INSTAGRAM: 2
            });
            t.WEBSITE_SOURCE_TYPE = o;
        },
        462116: (e, t, o) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.EditBusinessProfileWamEvent = undefined;
            var n = o(901032);
            var a = o(96010);
            var l = o(817908);
            var r = o(789820);
            const {
                BOOLEAN: i,
                STRING: c
            } = n.TYPES;
            const d = (0, n.defineEvents)({
                EditBusinessProfile: [1466, {
                        businessProfileEntryPoint: [10, a.BUSINESS_PROFILE_ENTRY_POINT],
                        editBusinessProfileSessionId: [2, c],
                        editProfileAction: [1, r.EDIT_PROFILE_ACTION],
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
            t.EditBusinessProfileWamEvent = d;
        },
        340123: (e, t, o) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.MetaVerifiedInteractionWamEvent = undefined;
            var n = o(901032);
            var a = o(156806);
            var l = o(158248);
            var r = o(453396);
            var i = o(711343);
            var c = o(167889);
            const {
                STRING: d
            } = n.TYPES;
            const u = (0, n.defineEvents)({
                MetaVerifiedInteraction: [4870, {
                        businessOwnerJid: [1, d],
                        businessOwnerPlatform: [2, a.BUSINESS_OWNER_PLATFORM],
                        metaVerifiedInteractionAction: [3, l.META_VERIFIED_INTERACTION_ACTION],
                        metaVerifiedInteractionAssetType: [4, r.META_VERIFIED_INTERACTION_ASSET_TYPE],
                        metaVerifiedInteractionReferral: [5, i.META_VERIFIED_INTERACTION_REFERRAL],
                        metaVerifiedInteractionSurface: [6, c.META_VERIFIED_INTERACTION_SURFACE]
                    },
                    [1, 1, 1], "private", 113760892
                ]
            });
            t.MetaVerifiedInteractionWamEvent = u;
        },
        875302: (e, t, o) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ViewBusinessProfileWamEvent = undefined;
            var n = o(901032);
            var a = o(413863);
            var l = o(679281);
            var r = o(992968);
            var i = o(111540);
            var c = o(22904);
            const {
                BOOLEAN: d,
                INTEGER: u,
                STRING: s
            } = n.TYPES;
            const f = (0, n.defineEvents)({
                ViewBusinessProfile: [1522, {
                        bizFbSize: [9, r.TRUST_SIGNAL_BUCKETS],
                        bizIgSize: [10, r.TRUST_SIGNAL_BUCKETS],
                        businessProfileJid: [3, s],
                        catalogSessionId: [6, s],
                        hasCoverPhoto: [12, d],
                        isProfileLinked: [11, d],
                        isSelfView: [7, d],
                        linkedAccount: [5, a.BUSINESS_TOOLS_LINKED_ACCOUNT_TYPE],
                        profileEntryPoint: [8, l.PROFILE_ENTRY_POINT],
                        scrollDepth: [4, u],
                        viewBusinessProfileAction: [1, i.VIEW_BUSINESS_PROFILE_ACTION],
                        websiteSource: [2, c.WEBSITE_SOURCE_TYPE]
                    },
                    [1, 1, 1], "regular"
                ]
            });
            t.ViewBusinessProfileWamEvent = f;
        },
        726468: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SanitizedQuickPromotionText = function (e) {
                let {
                    dirty: t
                } = e;
                return l.default.createElement("span", {
                    dangerouslySetInnerHTML: {
                        __html: r(t)
                    }
                });
            };
            t.sanitizeQuickPromotionText = r;
            var a = n(o(724843));
            var l = n(o(667294));

            function r (e) {
                return a.default.sanitize(e, {
                    ALLOWED_TAGS: ["b", "i", "#text"],
                    KEEP_CONTENT: false
                });
            }
        },
        698034: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.useBestQuickPromotionForSurface = function (e, t) {
                let o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
                const {
                    surfaceId: n
                } = e;
                const u = t == null ? undefined : t.fireImpression;
                const f = (0, c.useCallback)(() => l.QuickPromotionCollection.bestPromotionForSurface(e), [n, ...o]);
                const p = (0, i.useIsDarkTheme)();
                const [m, C] = (0, c.useState)(f);
                (0, c.useEffect)(() => {
                    C(f());
                }, [C, f]);
                (0, c.useEffect)(() => {
                    if (m != null && u === true) {
                        m.impression();
                    }
                }, [n, m, u]);
                const _ = m == null ? undefined : m.promotion.data.image;
                const g = (0, c.useMemo)(() => {
                    if (_ != null) {
                        var e;
                        var t;
                        const o = p ? (e = _.dark) === null || e === undefined ? undefined : e.elementValue : (t = _.light) === null || t === undefined ? undefined : t.elementValue;
                        if (o != null) {
                            return window.URL.createObjectURL(new Blob([o]));
                        }
                    }
                }, [_, p]);
                (0, c.useEffect)(() => () => {
                    if (g != null) {
                        window.URL.revokeObjectURL(g);
                    }
                }, [g]);
                if (m == null) {
                    return;
                }
                let h;
                var E;
                if (g != null) {
                    h = c.default.createElement(a.default, {
                        src: g,
                        alt: (E = m.promotion.data.image) === null || E === undefined ? undefined : E.description,
                        className: (0, d.default)(s)
                    });
                }
                const v = c.default.createElement(r.SanitizedQuickPromotionText, {
                    dirty: m.promotion.data.textElementValue
                });
                const b = m.promotion.data.qpConfigDismissable === "true" ? () => {
                    m.dismiss();
                    C(f());
                } : null;
                return {
                    dismiss: b,
                    impression: () => {
                        m.impression();
                    },
                    primaryActionClick: () => {
                        m.primaryActionClick();
                        C(f());
                    },
                    sanitizedText: v,
                    image: h,
                    promotion: m
                };
            };
            var a = n(o(488922));
            var l = o(352224);
            var r = o(726468);
            var i = o(667738);
            var c = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var o = u(t);
                if (o && o.has(e)) {
                    return o.get(e);
                }
                var n = {};
                var a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e) {
                    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
                        var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                        if (r && (r.get || r.set)) {
                            Object.defineProperty(n, l, r);
                        } else {
                            n[l] = e[l];
                        }
                    }
                }
                n.default = e;
                if (o) {
                    o.set(e, n);
                }
                return n;
            }(o(667294));
            var d = n(o(156720));

            function u (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var o = new WeakMap();
                return (u = function (e) {
                    if (e) {
                        return o;
                    } else {
                        return t;
                    }
                })(e);
            }
            const s = {
                width: "ln8gz9je",
                height: "ppled2lx"
            };
        },
        179203: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.usePrivacyTipQuickPromotion = function (e, t) {
                var o;
                const n = (0, r.useBestQuickPromotionForSurface)(e, {
                    fireImpression: true
                }, t);
                if (n == null) {
                    return;
                }
                const {
                    promotion: i
                } = n;
                const {
                    primaryAction: c
                } = i.promotion.data;
                let d;
                if (c != null && c.deepLink != null) {
                    d = l.SettingsSteps.cast(c.deepLink);
                }
                return (0, a.default)((0, a.default)({}, n), {}, {
                    settingStep: (o = d) !== null && o !== undefined ? o : l.SettingsSteps.Settings
                });
            };
            var a = n(o(81109));
            var l = o(73016);
            var r = o(698034);
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
                    sticker: m
                } = e;
                let C;
                if ((0, c.isFavoriteStickersEnabled)() && m != null) {
                    C = i.FavoriteStickerCollection.get(m.filehash) ? s.default.createElement(a.default, {
                        onClick: () => (0, r.removeStickerFromFavorites)(m),
                        type: "secondary"
                    }, u.fbt._("Remove From Favorites", null, {
                        hk: "3YoUkP"
                    })) : s.default.createElement(a.default, {
                        onClick: () => (0, r.addStickerToFavorites)(m),
                        type: "secondary"
                    }, u.fbt._("Add to Favorites", null, {
                        hk: "3x4EBo"
                    }));
                }
                return s.default.createElement(s.default.Fragment, null, s.default.createElement(d.TextDiv, {
                    theme: "plain",
                    xstyle: [f.container, n === p.StickerStore && f.stickerStore, n === p.MediaViewer && f.mediaViewer]
                }, t && s.default.createElement(l.EmojiText, {
                    xstyle: f.name,
                    text: t
                }), t && o && s.default.createElement(l.EmojiText, {
                    text: " • "
                }), o && s.default.createElement(l.EmojiText, {
                    text: o
                })), C);
            };
            t.Theme = undefined;
            var a = n(o(692629));
            var l = o(305521);
            var r = o(225446);
            var i = o(788788);
            var c = o(97858);
            var d = o(180519);
            var u = o(548360);
            var s = n(o(667294));
            n(o(156720));
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

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.deleteCoverPhoto = function e (t) {
                let o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, l.genId)();
                const n = (0, c.deleteCoverPhoto)(t);
                const i = new l.ActionType(u.fbt._("Removing cover photo", null, {
                    hk: "1KJSi4"
                }));
                const f = u.fbt._("Cover photo removal failed", null, {
                    hk: "lbogl"
                });
                const p = n.catch(() => {
                    __LOG__(3)`actions:deleteCoverPhoto dropped`;
                    throw new l.ActionType(f);
                }).catch((0, a.filteredCatch)(r.ServerStatusCodeError, n => {
                    if (n.status >= 400) {
                        return new l.ActionType(f, {
                            actionText: u.fbt._("Try again", null, {
                                hk: "BVffp"
                            }),
                            actionHandler: () => e(t, o)
                        });
                    }
                })).then(() => new l.ActionType(u.fbt._("Cover photo removed", null, {
                    hk: "2jTL3n"
                })));
                d.ToastManager.open(s.default.createElement(l.ActionToast, {
                    id: o,
                    initialAction: i,
                    pendingAction: p
                }));
                return n.then(() => {});
            };
            t.setCoverPhoto = function e (t, o, n) {
                let f = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : (0, l.genId)();
                const p = new l.ActionType(u.fbt._("Setting cover photo", null, {
                    hk: "1W6Cm8"
                }));
                const m = u.fbt._("Cover photo set failed", null, {
                    hk: "4jlUAI"
                });
                const C = (0, c.sendCoverPhoto)(t, o, n).catch(() => {
                    __LOG__(3)`action:setCoverPhoto dropped`;
                    throw new l.ActionType(m);
                }).catch((0, a.filteredCatch)(r.ServerStatusCodeError, a => {
                    __LOG__(3)`action:setCoverPhoto server error`;
                    if (a.status >= 400) {
                        return new l.ActionType(m, {
                            actionText: u.fbt._("Try again", null, {
                                hk: "BVffp"
                            }),
                            actionHandler: () => e(t, o, n, f)
                        });
                    }
                })).then(() => {
                    let e;
                    e = (0, i.coverPhotoPrivacyMessagingEnabled)() ? u.fbt._("Your cover photo is now public", null, {
                        hk: "zDyK5"
                    }) : u.fbt._("Cover photo set", null, {
                        hk: "zswp6"
                    });
                    return new l.ActionType(e);
                });
                d.ToastManager.open(s.default.createElement(l.ActionToast, {
                    id: f,
                    initialAction: p,
                    pendingAction: C
                }));
                return C.then(() => {});
            };
            var a = o(122583);
            var l = o(328620);
            var r = o(984330);
            var i = o(72696);
            var c = o(761849);
            var d = o(390737);
            var u = o(548360);
            var s = n(o(667294));
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
        411019: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                var t;
                var o;
                let {
                    businessProfile: n,
                    contact: S,
                    editable: A,
                    profilePicThumb: w,
                    onClick: M,
                    onOpenStatus: L,
                    onLoad: N,
                    hideStatusV3: R
                } = e;
                const [j, D] = (0, P.useState)(window.innerWidth);
                const [x, B] = (0, P.useState)(null);
                const W = (0, I.useModelValues)(n, ["coverPhoto", "profileOptions"]);
                const F = (0, T.default)();
                (0, P.useEffect)(() => {
                    function e () {
                        D(window.innerWidth);
                    }
                    window.addEventListener("resize", e);
                    e();
                    return () => window.removeEventListener("resize", e);
                }, [W.profileOptions]);
                const H = (0, d.isBlueLockingEnabled)() && ((t = W.profileOptions) === null || t === undefined ? undefined : t.isProfileEditDisabled) === true;
                const V = j > 1300 ? 152 : 122;
                const U = (0, _.isStatusV3ProfilePhotoRingEnabled)() || !(0, _.canSeeStatusV3OnContact)() || S.statusMute || R ? null : C.StatusV3Collection.get(S.id);

                function z () {
                    if (U) {
                        u.ModalManager.openMedia(P.default.createElement(p.default, {
                            statusV3: U,
                            onClose: () => u.ModalManager.closeMedia()
                        }), {
                            transition: "status-v3-modal"
                        });
                        if (!(L == null)) {
                            L();
                        }
                    }
                }
                let G = null;
                if (x) {
                    G = P.default.createElement(E.UIE, {
                        displayName: "ContextMenu",
                        escapable: true,
                        popable: true,
                        dismissOnWindowResize: true,
                        requestDismiss: () => {
                            B(null);
                        }
                    }, P.default.createElement(v.default, {
                        contextMenu: x
                    }));
                }
                let q;
                let K = null;
                let Y = k.noStatusBorder;
                if (U != null) {
                    const e = !(0, _.isStatusV3ProfilePhotoRingEnabled)();
                    K = P.default.createElement(g.StatusV3ImageRing, {
                        statusV3: U,
                        size: V + 24,
                        stroke: 3,
                        theme: g.RingTheme.BusinessContactInfo,
                        respectAppTheme: true,
                        breakRing: e
                    });
                    Y = k.hasStatusBorder;
                }
                q = A !== true || w == null || H ? P.default.createElement(r.DetailImage, {
                    id: S.id,
                    size: V,
                    loader: true,
                    onLoad: N,
                    onClick: H ? null : function (e) {
                        if (M) {
                            if (U != null && U.totalCount > 0) {
                                e.stopPropagation();
                                e.preventDefault();
                                const t = [P.default.createElement(i.DropdownItem, {
                                    testid: "mi-view-photo",
                                    key: "view-photo",
                                    action: () => {
                                        M(e);
                                    }
                                }, O.fbt._("View photo", null, {
                                    hk: "2lAmqw"
                                })), P.default.createElement(i.DropdownItem, {
                                    testid: "mi-view-status",
                                    key: "view-status",
                                    action: z
                                }, O.fbt._("View status", null, {
                                    hk: "1QQMZy"
                                }))];
                                B({
                                    menu: t,
                                    event: e
                                });
                            } else {
                                M(e);
                            }
                        }
                    },
                    quality: r.DetailImageQuality.High
                }) : P.default.createElement(f.default, {
                    profilePicThumb: w,
                    size: V
                });
                const Q = (o = W.coverPhoto) === null || o === undefined ? undefined : o.url.toString();
                let Z;
                let X;
                let J;
                if (A != null && (0, l.isBizCoverPhotoEditEnabled)()) {
                    Z = P.default.createElement(a.default, {
                        coverPhoto: W.coverPhoto != null ? W.coverPhoto : undefined,
                        signal: F
                    });
                    const e = P.default.createElement(s.PencilIcon, {
                        color: h.SvgColorProp.TEAL
                    });
                    X = P.default.createElement("div", {
                        className: (0, y.default)(k.coverPhotoEditButton),
                        "aria-hidden": true
                    }, P.default.createElement(m.Round, {
                        inverted: true,
                        testid: "edit_cover_photo"
                    }, e));
                }
                if (A == null && Q != null && (0, l.isBizCoverPhotoViewEnabled)()) {
                    const e = O.fbt._("Business cover photo image", null, {
                        hk: "10WGS4"
                    });
                    const t = Q !== "" ? {
                        backgroundImage: `url(${Q})`
                    } : null;
                    J = P.default.createElement("div", {
                        className: (0, y.default)(k.coverPhotoImage),
                        style: t,
                        role: "img",
                        "aria-label": e
                    });
                }
                return P.default.createElement(P.default.Fragment, null, P.default.createElement("div", {
                    className: (0, y.default)(k.coverPhoto, Boolean(A) && k.coverPhotoIsEditable)
                }, J, Z, X), P.default.createElement(c.FlexRow, {
                    justify: "center",
                    className: (0, y.default)(k.avatar, b.uiMargin.bottom15, b.uiMargin.horizAuto)
                }, K, P.default.createElement("div", {
                    className: (0, y.default)(k.image, Y)
                }, q)), G);
            };
            var a = n(o(767938));
            var l = o(72696);
            var r = o(23641);
            var i = o(675085);
            var c = o(690495);
            var d = o(97858);
            var u = o(114850);
            var s = o(334672);
            var f = n(o(567439));
            var p = n(o(3470));
            var m = o(435595);
            var C = o(657694);
            var _ = o(918715);
            var g = o(473016);
            var h = o(220584);
            var E = o(392632);
            var v = n(o(37875));
            var b = o(676345);
            var O = o(548360);
            var P = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var o = S(t);
                if (o && o.has(e)) {
                    return o.get(e);
                }
                var n = {};
                var a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e) {
                    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
                        var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                        if (r && (r.get || r.set)) {
                            Object.defineProperty(n, l, r);
                        } else {
                            n[l] = e[l];
                        }
                    }
                }
                n.default = e;
                if (o) {
                    o.set(e, n);
                }
                return n;
            }(o(667294));
            var y = n(o(156720));
            var I = o(655241);
            var T = n(o(895851));

            function S (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var o = new WeakMap();
                return (S = function (e) {
                    if (e) {
                        return o;
                    } else {
                        return t;
                    }
                })(e);
            }
            const k = {
                coverPhotoEditButton: {
                    position: "lhggkp7q",
                    end: "i7sa5vq0",
                    bottom: "fcd3cnzj",
                    zIndex: "jnl3jror",
                    pointerEvents: "m62443ks"
                },
                coverPhotoImage: {
                    position: "lhggkp7q",
                    top: "qq0sjtgm",
                    end: "ebjesfe0",
                    bottom: "jxacihee",
                    start: "tkdu00h0",
                    backgroundRepeat: "sxl192xd",
                    backgroundSize: "qnwaluaf"
                },
                avatar: {
                    position: "g0rxnol2",
                    zIndex: "c6fxfv2p",
                    maxWidth: "cf33ckg6",
                    backgroundColor: "sjyhwr5o",
                    marginTop: "qxlgi08w",
                    "@media screen and (min-width: 1300px)": {
                        marginTop: "lvp0u6in"
                    }
                },
                coverPhoto: {
                    position: "lhggkp7q",
                    top: "qq0sjtgm",
                    start: "tkdu00h0",
                    width: "ln8gz9je",
                    height: "lgqobh8t",
                    overflowX: "gfz4du6o",
                    overflowY: "r7fjleex",
                    "@media screen and (min-width: 1024px)": {
                        height: "qhhg16yg"
                    },
                    "@media screen and (min-width: 1300px)": {
                        height: "r0y3w5wp"
                    }
                },
                coverPhotoIsEditable: {
                    backgroundColor: "inhfwwbr"
                },
                image: {
                    borderTopStyle: "d1poss59",
                    borderEndStyle: "gyj32ejw",
                    borderBottomStyle: "cmcp1to6",
                    borderStartStyle: "eg0col54",
                    borderTopColor: "is0s2vyk",
                    borderEndColor: "bqpwlx4t",
                    borderBottomColor: "j5tcbkoq",
                    borderStartColor: "hx27gwwv",
                    borderTopStartRadius: "ig3kka7n",
                    borderTopEndRadius: "a57u14ck",
                    borderBottomEndRadius: "a4bg1r4i",
                    borderBottomStartRadius: "h1a3x9ys"
                },
                noStatusBorder: {
                    borderTopWidth: "nf75xe5g",
                    borderEndWidth: "pvwszkuq",
                    borderBottomWidth: "a985gkl7",
                    borderStartWidth: "pp0mj9gn"
                },
                hasStatusBorder: {
                    borderTopWidth: "t59c020z",
                    borderEndWidth: "euc295e2",
                    borderBottomWidth: "g6f98ewo",
                    borderStartWidth: "lkd3izbu"
                }
            };
        },
        189024: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.getProfilePopulatedFields = c;
            t.logEditCoverPhoto = function () {
                new l.EditBusinessProfileWamEvent({
                    editProfileAction: i.EDIT_PROFILE_ACTION.ACTION_EDIT_COVER_PHOTO_CLICK,
                    businessProfileEntryPoint: r.BUSINESS_PROFILE_ENTRY_POINT.SETTINGS
                }).commit();
            };
            t.logProfileFieldDiscard = function (e, t, o) {
                new l.EditBusinessProfileWamEvent((0, a.default)({
                    editProfileAction: i.EDIT_PROFILE_ACTION.ACTION_PROFILE_FIELD_DISCARD,
                    businessProfileEntryPoint: r.BUSINESS_PROFILE_ENTRY_POINT.SETTINGS,
                    editProfileActionField: e,
                    editBusinessProfileSessionId: o
                }, c(t))).commit();
            };
            t.logProfileFieldOpen = function (e, t, o) {
                new l.EditBusinessProfileWamEvent((0, a.default)({
                    editProfileAction: i.EDIT_PROFILE_ACTION.ACTION_PROFILE_FIELD_OPEN,
                    businessProfileEntryPoint: r.BUSINESS_PROFILE_ENTRY_POINT.SETTINGS,
                    editProfileActionField: e,
                    editBusinessProfileSessionId: o
                }, c(t))).commit();
            };
            t.logProfileFieldSave = function (e, t, o) {
                new l.EditBusinessProfileWamEvent((0, a.default)({
                    editProfileAction: i.EDIT_PROFILE_ACTION.ACTION_PROFILE_FIELD_SAVE,
                    businessProfileEntryPoint: r.BUSINESS_PROFILE_ENTRY_POINT.SETTINGS,
                    editProfileActionField: e,
                    editBusinessProfileSessionId: o
                }, c(t))).commit();
            };
            t.logProfileOpen = function (e, t) {
                var o;
                new l.EditBusinessProfileWamEvent({
                    editProfileAction: i.EDIT_PROFILE_ACTION.ACTION_OPEN,
                    businessProfileEntryPoint: r.BUSINESS_PROFILE_ENTRY_POINT.SETTINGS,
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
                new l.EditBusinessProfileWamEvent({
                    editProfileAction: i.EDIT_PROFILE_ACTION.ACTION_REMOVE_COVER_PHOTO,
                    businessProfileEntryPoint: r.BUSINESS_PROFILE_ENTRY_POINT.SETTINGS
                }).commit();
            };
            var a = n(o(81109));
            var l = o(462116);
            var r = o(96010);
            var i = o(789820);

            function c (e) {
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
                return l.default.createElement(a.ShoppingCartIcon, {
                    xstyle: [r.cartIcon, e.theme === "inherit-color" && r.inheritColor]
                });
            };
            var a = o(142792);
            var l = n(o(667294));
            n(o(156720));
            const r = {
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
            var a = n(o(934668));
            var l = o(957256);
            var r = o(568550);
            var i = o(526795);
            var c = o(932523);
            var d = o(548360);
            var u = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var o = s(t);
                if (o && o.has(e)) {
                    return o.get(e);
                }
                var n = {};
                var a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e) {
                    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
                        var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                        if (r && (r.get || r.set)) {
                            Object.defineProperty(n, l, r);
                        } else {
                            n[l] = e[l];
                        }
                    }
                }
                n.default = e;
                if (o) {
                    o.set(e, n);
                }
                return n;
            }(o(667294));

            function s (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var o = new WeakMap();
                return (s = function (e) {
                    if (e) {
                        return o;
                    } else {
                        return t;
                    }
                })(e);
            }
            const f = (0, u.forwardRef)((e, t) => {
                const {
                    cartIconTheme: o,
                    onClick: n,
                    cartCountText: s,
                    testid: f = "menu-bar-cart-link",
                    catalogOwnerJid: p
                } = e;
                const m = (0, u.useContext)(r.DrawerContext);
                return u.default.createElement(i.MenuBarItem, {
                    ref: t,
                    testid: f,
                    icon: u.default.createElement(a.default, {
                        theme: o
                    }),
                    text: s,
                    title: d.fbt._("Your cart", null, {
                        hk: "Sn66V"
                    }),
                    onClick: (0, l.getOnCartClickWithLog)(n, p, (0, c.getProductCatalogContext)(m))
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
                const n = (0, a.createCatalogLink)(t.id.user);
                const d = t.id.equals((0, r.getMaybeMeUser)()) ? `${i.fbt._("Follow this link to view our catalog on WhatsApp:", null, {
        hk: "1bmMoC"
      }).toString()} ${n}` : n;
                return c.default.createElement(l.default, {
                    text: d,
                    onSend: o
                });
            };
            var a = o(22323);
            var l = n(o(210002));
            var r = o(459857);
            var i = o(548360);
            var c = n(o(667294));
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
                const n = (0, a.createProductLink)(t.catalogWid.user, t.id.toString());
                const d = (0, r.isMeAccount)(t.catalogWid) ? `${i.fbt._("Follow this link to view our item on WhatsApp:", null, {
        hk: "H5KuN"
      }).toString()} ${n}` : n;
                return c.default.createElement(l.default, {
                    text: d,
                    onSend: o
                });
            };
            var a = o(22323);
            var l = n(o(210002));
            var r = o(459857);
            var i = o(548360);
            var c = n(o(667294));
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
                if (!t || !(0, a.canDisplayLabel)()) {
                    return null;
                }
                const n = o === "standalone";
                return i.default.createElement("div", {
                    className: (0, c.default)(d.labelContainer, r.uiMargin.top3, n && r.uiMargin.top0)
                }, t.map((e, t) => i.default.createElement(u, {
                    key: t,
                    labelId: e,
                    isStandalone: n
                })));
            };
            var a = o(72696);
            var l = o(129363);
            var r = o(676345);
            var i = n(o(667294));
            var c = n(o(156720));
            const d = {
                labelRow: {
                    display: "l7jjieqr",
                    fontSize: "f8jlpxt4"
                },
                standaloneLabelRow: {
                    fontSize: "dsh4tgtl",
                    lineHeight: "i30vgaoj"
                },
                standaloneLabelRowIcon: {
                    width: "a2hqsskl",
                    height: "qgpfrw6h"
                },
                labelContainer: {
                    flexWrap: "lkhkxwyq"
                }
            };

            function u (e) {
                let {
                    labelId: t,
                    isStandalone: o
                } = e;
                return i.default.createElement("div", {
                    className: (0, c.default)(d.labelRow, r.uiPadding.top5, r.uiPadding.end5, r.uiPadding.bottom5, r.uiPadding.start0, r.uiMargin.end10, o && d.standaloneLabelRow, o && r.uiPadding.top8, o && r.uiPadding.end14, o && r.uiPadding.bottom8, o && r.uiPadding.start0)
                }, i.default.createElement(l.Labels, {
                    labels: [t],
                    showName: true,
                    iconXstyle: [d.standaloneLabelRowIcon, r.uiPadding.top1]
                }));
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
                const [o, n] = (0, E.useState)(false);
                const [v, b] = (0, E.useState)(false);
                const [O, P] = (0, E.useState)("");
                const y = () => {
                    s.ModalManager.close();
                };
                if (v) {
                    return E.default.createElement(i.ConfirmPopup, {
                        title: h.fbt._("Request review", null, {
                            hk: "1Rp2pL"
                        }),
                        onOK: y
                    }, E.default.createElement(C.TextDiv, null, h.fbt._("We will review the collection and if it meets our guidelines, it will be added to your catalog.", null, {
                        hk: "y5vML"
                    })));
                }
                const I = O.length < 1 || o;
                return E.default.createElement(i.ConfirmPopup, {
                    title: h.fbt._("Request review", null, {
                        hk: "1Rp2pL"
                    }),
                    onOK: () => {
                        n(true);
                        let e = true;
                        p.QPL.markerStart(f.QuickLogMarkerId.WHATSAPP_COLLECTION_APPEAL);
                        (0, u.handleCollectionAppeal)(t, O).then(() => {
                            n(false);
                            b(true);
                            e = false;
                            p.QPL.markerEnd(f.QuickLogMarkerId.WHATSAPP_COLLECTION_APPEAL, l.QuickLogActionType.SUCCESS);
                        }).catch((0, a.filteredCatch)(r.ServerStatusCodeError, () => {
                            g.ToastManager.open(E.default.createElement(_.Toast, {
                                msg: h.fbt._("Something went wrong and your request wasn't submitted. Try again.", null, {
                                    hk: "3sAwQH"
                                }),
                                id: (0, _.genId)("catalog_collection_appeal_submission_failed")
                            }));
                            n(false);
                        })).finally(() => {
                            if (e) {
                                p.QPL.markerEnd(f.QuickLogMarkerId.WHATSAPP_COLLECTION_APPEAL, l.QuickLogActionType.FAIL);
                            }
                        });
                    },
                    onCancel: y,
                    okDisabled: I
                }, E.default.createElement("form", null, E.default.createElement(m.RichTextField, {
                    testid: "confirm-popup-text-input",
                    placeholder: h.fbt._("Enter reason for this request...", null, {
                        hk: "3U5nE7"
                    }),
                    onChange: e => {
                        let {
                            text: t
                        } = e;
                        P(t);
                    },
                    value: O,
                    maxLength: 1000
                }), E.default.createElement(d.ExternalLink, {
                    href: c.default.WA_COMMERCE_POLICY_URL
                }, h.fbt._("Learn More", null, {
                    hk: "FZuUT"
                }))));
            };
            var a = o(122583);
            var l = o(15842);
            var r = o(984330);
            var i = o(103440);
            var c = n(o(846870));
            var d = o(753233);
            var u = o(491606);
            var s = o(114850);
            var f = o(316348);
            var p = o(555622);
            var m = o(202391);
            var C = o(180519);
            var _ = o(625786);
            var g = o(390737);
            var h = o(548360);
            var E = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var o = v(t);
                if (o && o.has(e)) {
                    return o.get(e);
                }
                var n = {};
                var a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e) {
                    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
                        var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                        if (r && (r.get || r.set)) {
                            Object.defineProperty(n, l, r);
                        } else {
                            n[l] = e[l];
                        }
                    }
                }
                n.default = e;
                if (o) {
                    o.set(e, n);
                }
                return n;
            }(o(667294));

            function v (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var o = new WeakMap();
                return (v = function (e) {
                    if (e) {
                        return o;
                    } else {
                        return t;
                    }
                })(e);
            }
        },
        420165: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = undefined;
            var a = o(103440);
            var l = n(o(395767));
            var r = o(114850);
            var i = n(o(667294));
            var c = e => {
                r.ModalManager.open(i.default.createElement(a.ConfirmPopup, {
                    okText: (0, l.default)("OK"),
                    onOK: () => r.ModalManager.close()
                }, e));
            };
            t.default = c;
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
                const [p, m] = (0, f.useState)(false);
                const [C, _] = (0, f.useState)(t == null ? undefined : t.url);
                (0, f.useEffect)(() => {
                    if ((C == null ? undefined : C.pathname) !== (t == null ? undefined : t.url.pathname)) {
                        _(t == null ? undefined : t.url);
                    }
                }, [t, C]);
                return f.default.createElement(s.PhotoPickerLoadable, {
                    type: u.PhotoPickerType.COVER_PHOTO,
                    pending: p,
                    readOnly: false,
                    onImageSet: (e, u) => {
                        m(true);
                        if (u == null) {
                            return void((t == null ? undefined : t.id) && (0, a.deleteCoverPhoto)(t.id).finally(() => {
                                m(false);
                                (0, i.logRemoveCoverPhoto)();
                            }));
                        }
                        const s = (0, r.dataURLtoBlob)(u);
                        (0, l.calculateFilehashFromBlob)(s).then(e => {
                            (0, d.uploadBizCoverPhoto)(s, e, o).then(e => {
                                if (!o.aborted) {
                                    (0, a.setCoverPhoto)(e.id, e.ts, e.metaHmac);
                                    (0, i.logEditCoverPhoto)();
                                }
                            }).catch((0, n.filteredCatch)(c.HttpInvalidResponseError, () => {
                                __LOG__(3)`BizCoverPhotoPicker: failed to upload cover photo`;
                            })).catch(() => {
                                __LOG__(4, undefined, new Error(), true)`BizCoverPhotoPicker: unexpected error uploading cover photo`;
                                SEND_LOGS("biz_cover_photo_upload");
                            }).finally(() => {
                                m(false);
                            });
                        });
                    },
                    attachToChat: false,
                    startImage: C == null ? undefined : C.toString(),
                    theme: u.PhotoPickerThemeType.COVER_PHOTO
                });
            };
            var n = o(122583);
            var a = o(192081);
            var l = o(677332);
            var r = o(437362);
            var i = o(189024);
            var c = o(791357);
            var d = o(394480);
            var u = o(588792);
            var s = o(511696);
            var f = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var o = p(t);
                if (o && o.has(e)) {
                    return o.get(e);
                }
                var n = {};
                var a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e) {
                    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
                        var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                        if (r && (r.get || r.set)) {
                            Object.defineProperty(n, l, r);
                        } else {
                            n[l] = e[l];
                        }
                    }
                }
                n.default = e;
                if (o) {
                    o.set(e, n);
                }
                return n;
            }(o(667294));

            function p (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var o = new WeakMap();
                return (p = function (e) {
                    if (e) {
                        return o;
                    } else {
                        return t;
                    }
                })(e);
            }
        },
        534885: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                return i.default.createElement(a.DrawerButtonSimple, {
                    testid: "li-share-link",
                    icon: i.default.createElement(l.ForwardIcon, {
                        xstyle: c.icon
                    }),
                    onClick: e.onClick
                }, r.fbt._("Send product", null, {
                    hk: "1wkzue"
                }));
            };
            var a = o(36045);
            var l = o(596533);
            var r = o(548360);
            var i = n(o(667294));
            n(o(156720));
            const c = {
                icon: {
                    color: "rahkaw8d"
                }
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
                const [o, n] = (0, c.useState)(false);
                const u = a.CatalogCollection.get((0, i.getMeUser)());
                (0, d.useListener)(u == null ? undefined : u.collections, "change", () => {
                    n(true);
                });
                return o && c.default.createElement(l.default, null, c.default.createElement(r.default, {
                    onClick: t
                }));
            };
            var a = o(713464);
            var l = n(o(838536));
            var r = n(o(502742));
            var i = o(459857);
            var c = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var o = u(t);
                if (o && o.has(e)) {
                    return o.get(e);
                }
                var n = {};
                var a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e) {
                    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
                        var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                        if (r && (r.get || r.set)) {
                            Object.defineProperty(n, l, r);
                        } else {
                            n[l] = e[l];
                        }
                    }
                }
                n.default = e;
                if (o) {
                    o.set(e, n);
                }
                return n;
            }(o(667294));
            var d = o(808446);

            function u (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var o = new WeakMap();
                return (u = function (e) {
                    if (e) {
                        return o;
                    } else {
                        return t;
                    }
                })(e);
            }
        },
        786399: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function () {
                const e = new u.CoolOffNux(_, {
                    COOL_OFF_START_STORAGE_KEY: d.CoolOffPeriodKeys.CATALOG,
                    MAX_VIEWS_IN_DAYS: 1,
                    COOL_OFF_DURATION_IN_DAYS: 1,
                    metricField: h
                });
                if (e.shouldShow()) {
                    const t = m.default.createElement(l.ConfirmPopup, {
                        onOK: () => {
                            e.dismiss();
                            c.ModalManager.close();
                        }
                    }, m.default.createElement(r.FlexColumn, {
                        align: "center"
                    }, m.default.createElement(i.default, {
                        xstyle: g.graphic
                    }, m.default.createElement(a.CartInterstitialGraphicIcon, null)), m.default.createElement(s.TextHeader, {
                        theme: "popupTitle"
                    }, p.fbt._("New: Add to Cart", null, {
                        hk: "34ysyY"
                    })), m.default.createElement(s.TextParagraph, {
                        color: "secondary",
                        className: (0, C.default)(g.description)
                    }, p.fbt._("Simpler for you to keep track of order inquiries, manage requests, and close sales.", null, {
                        hk: "25ZM2y"
                    }))));
                    c.ModalManager.open(t);
                    e.show();
                    e.startCoolOffToday();
                }
            };
            var a = o(349499);
            var l = o(103440);
            var r = o(690495);
            var i = n(o(469733));
            var c = o(114850);
            var d = o(95589);
            var u = o(316488);
            var s = o(180519);
            var f = o(403602);
            var p = o(548360);
            var m = n(o(667294));
            var C = n(o(156720));
            const _ = d.NuxKeyTypes.COOL_OFF_NUX.CART_INTERSTITIAL;
            const g = {
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
            const h = f.BANNER_TYPES.SMB_CATALOG_CART_INTERSTITIAL;
        },
        502742: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = undefined;
            var a = o(287461);
            var l = o(713464);
            var r = o(445729);
            var i = n(o(760932));
            var c = o(95589);
            var d = o(182908);
            var u = o(316488);
            var s = o(459857);
            var f = o(403602);
            var p = o(548360);
            var m = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var o = _(t);
                if (o && o.has(e)) {
                    return o.get(e);
                }
                var n = {};
                var a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e) {
                    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
                        var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                        if (r && (r.get || r.set)) {
                            Object.defineProperty(n, l, r);
                        } else {
                            n[l] = e[l];
                        }
                    }
                }
                n.default = e;
                if (o) {
                    o.set(e, n);
                }
                return n;
            }(o(667294));
            var C = n(o(156720));

            function _ (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var o = new WeakMap();
                return (_ = function (e) {
                    if (e) {
                        return o;
                    } else {
                        return t;
                    }
                })(e);
            }
            const g = {
                color: "o0rubyzf"
            };
            const h = c.NuxKeyTypes.COOL_OFF_NUX.COLLECTIONS;
            const E = {
                COOL_OFF_DURATION_IN_DAYS: 2,
                VIEWS_BEFORE_COOL_OFF_IN_DAYS: 1,
                CLICKS_BEFORE_COOL_OFF: 1,
                MAX_VIEWS_IN_DAYS: 2,
                COOL_OFF_START_STORAGE_KEY: c.CoolOffPeriodKeys.CATALOG,
                metricField: f.BANNER_TYPES.SMB_COLLECTION_CREATION
            };
            class v extends d.NuxBanner {
                constructor() {
                    super(...arguments);
                    this._refContainer = (0, m.createRef)();
                    this.getElement = () => this._refContainer.current;
                }
                render() {
                    const {
                        onClick: e
                    } = this.props;
                    const t = new u.CoolOffNux(h, E);
                    const o = m.default.createElement("span", {
                        className: (0, C.default)(g)
                    }, p.fbt._("Get started", null, {
                        hk: "m7Zf5"
                    }));
                    return m.default.createElement(i.default, {
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
                    return (0, a.getABPropConfigValue)("web_abprop_collections_nux_banner") && r.Conn.isSMB && function () {
                        const e = l.CatalogCollection.get((0, s.getMeUser)());
                        if (e == null || e.collections == null) {
                            return false;
                        }
                        const t = e.collections.getCollectionModels(true);
                        return e.productCollection.getProductModels(true).some(e => !e.isHidden && e.reviewStatus !== "REJECTED") && t.length === 0;
                    }() && (0, u.shouldShowNUX)(h, E);
                }
            }
            t.default = v;
            v.displayName = "CollectionsBanner";
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
                    canManageCatalog: l,
                    onSendCatalog: i,
                    onOpenCollections: c,
                    onOpenMerchantDetailsForm: d,
                    onOpenSettings: u,
                    cartIconTheme: s
                } = e;
                const f = t && n != null ? m.default.createElement(r.CartIconMenuBarItem, {
                    cartCountText: (0, a.isNumber)(o) && o > 0 ? o.toString() : undefined,
                    onClick: t,
                    catalogOwnerJid: n,
                    cartIconTheme: s
                }) : null;
                return [f, m.default.createElement(_, {
                    canManageCatalog: l,
                    onSendCatalog: i,
                    onOpenCollections: c,
                    onOpenMerchantDetailsForm: d,
                    onOpenSettings: u
                })];
            };
            var a = o(724976);
            var l = o(72696);
            var r = o(263755);
            var i = o(664149);
            var c = o(675085);
            var d = o(526795);
            var u = o(107600);
            var s = n(o(500210));
            var f = o(459857);
            var p = o(548360);
            var m = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var o = C(t);
                if (o && o.has(e)) {
                    return o.get(e);
                }
                var n = {};
                var a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e) {
                    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
                        var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                        if (r && (r.get || r.set)) {
                            Object.defineProperty(n, l, r);
                        } else {
                            n[l] = e[l];
                        }
                    }
                }
                n.default = e;
                if (o) {
                    o.set(e, n);
                }
                return n;
            }(o(667294));

            function C (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var o = new WeakMap();
                return (C = function (e) {
                    if (e) {
                        return o;
                    } else {
                        return t;
                    }
                })(e);
            }
            const _ = (0, m.forwardRef)((e, t) => {
                let {
                    canManageCatalog: o,
                    onSendCatalog: n,
                    onOpenCollections: a,
                    onOpenMerchantDetailsForm: r,
                    onOpenSettings: C
                } = e;
                if (o) {
                    return m.default.createElement(d.MenuBarItem, {
                        ref: t,
                        testid: "menu-bar-menu",
                        icon: m.default.createElement(u.MenuIcon, null),
                        title: p.fbt._("Menu", null, {
                            hk: "H0fkV"
                        })
                    }, m.default.createElement(i.Dropdown, {
                        type: i.MenuType.DropdownMenu,
                        flipOnRTL: true,
                        key: "CatalogDetailHeader",
                        dirX: i.DirX.LEFT
                    }, m.default.createElement(c.DropdownItem, {
                        testid: "mi-foward menu-item",
                        action: n
                    }, p.fbt._("Forward", null, {
                        hk: "2T1QOm"
                    })), a && m.default.createElement(c.DropdownItem, {
                        testid: "mi-collections menu-item",
                        action: a
                    }, p.fbt._("Collections", null, {
                        hk: "1VWu7A"
                    })), (0, l.canSeeECommerceComplianceIndiaCountryOriginExemptBusinessJourney)((0, f.getMeUser)()) && r && m.default.createElement(c.DropdownItem, {
                        key: "merchantDetails",
                        testid: "merchant-details",
                        action: r
                    }, p.fbt._("Business details", null, {
                        hk: "m9xzp"
                    })), C && m.default.createElement(c.DropdownItem, {
                        testid: "mi-settings menu-item",
                        action: C
                    }, p.fbt._("Settings", null, {
                        hk: "2RmHUB"
                    }))));
                } else {
                    return m.default.createElement(d.MenuBarItem, {
                        ref: t,
                        testid: "menu-bar-catalog-link",
                        icon: m.default.createElement(s.default, null),
                        title: p.fbt._("Catalog link", null, {
                            hk: "M36Dw"
                        }),
                        onClick: n
                    });
                }
            });
            _.displayName = "MenuItems";
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
                    animation: a,
                    sectionTheme: l = "padding",
                    shouldLog: d,
                    catalog: f,
                    onProductDetail: C,
                    filterProductId: _,
                    productsToShow: h = 6,
                    hideIncompleteRows: b = false,
                    showProductPlaceholders: O,
                    seeMoreOverlay: S,
                    catalogEntryLabel: k,
                    showShopsLogo: A
                } = e;
                const w = (0, v.useContext)(i.DrawerContext);
                (0, v.useEffect)(() => {
                    if (d === true && f != null) {
                        (0, m.logBusinessProfileCatalogView)({
                            catalogOwnerWid: f.id,
                            catalogContext: (0, p.getProductCatalogContext)(w)
                        });
                    }
                }, []);
                const M = v.default.createElement(y, {
                    catalogEntryLabel: k,
                    onClick: () => t((0, p.getProductCatalogContext)(w), "ContactInfo")
                });
                const L = v.default.createElement(T, {
                    productsToShow: h,
                    catalog: f,
                    hideIncompleteRows: b,
                    filterProductId: _,
                    seeMoreOverlay: S,
                    showProductPlaceholders: O,
                    onProductThumbClick: (e, o) => e ? t((0, p.getProductCatalogContext)(w), "ContactInfo") : (e => {
                        if (d === true) {
                            (0, m.logProfileProductClick)({
                                product: (0, g.unproxy)(e),
                                catalogContext: (0, p.getProductCatalogContext)(w)
                            });
                        }
                        C(e);
                    })(o),
                    onProductImageClick: () => t((0, p.getProductCatalogContext)(w), "ContactInfo")
                });
                const N = n != null && n !== "" ? v.default.createElement(s.default, {
                    xstyle: P.subtitle
                }, n) : null;
                const R = v.default.createElement(u.FlexRow, {
                    align: "center"
                }, N, v.default.createElement(s.default, null, v.default.createElement(r.ChevronRightAltIcon, {
                    xstyle: P.chevron,
                    directional: true
                })));
                return v.default.createElement(c.default, {
                    title: o != null && o !== "" ? o : E.fbt._("Products", null, {
                        hk: "3Ky71N"
                    }),
                    titleOnClick: () => t((0, p.getProductCatalogContext)(w), "ContactInfo"),
                    subtitle: R,
                    theme: l,
                    animation: a
                }, L, M, A === true ? v.default.createElement(I, null) : null);
            };
            var a = o(72696);
            var l = n(o(692629));
            var r = o(755782);
            var i = o(568550);
            var c = n(o(969358));
            var d = o(436127);
            var u = o(690495);
            var s = n(o(469733));
            var f = o(726195);
            var p = o(932523);
            var m = o(77548);
            var C = o(493770);
            var _ = o(530485);
            var g = o(163139);
            var h = n(o(625903));
            var E = o(548360);
            var v = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var o = O(t);
                if (o && o.has(e)) {
                    return o.get(e);
                }
                var n = {};
                var a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e) {
                    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
                        var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                        if (r && (r.get || r.set)) {
                            Object.defineProperty(n, l, r);
                        } else {
                            n[l] = e[l];
                        }
                    }
                }
                n.default = e;
                if (o) {
                    o.set(e, n);
                }
                return n;
            }(o(667294));
            var b = n(o(156720));

            function O (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var o = new WeakMap();
                return (O = function (e) {
                    if (e) {
                        return o;
                    } else {
                        return t;
                    }
                })(e);
            }
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
                    return v.default.createElement("div", {
                        className: (0, b.default)(P.catalogEntryButton)
                    }, v.default.createElement(l.default, {
                        testid: "catalog-entry-button",
                        type: "secondary",
                        onClick: o
                    }, t));
                }
            }

            function I () {
                return v.default.createElement("div", {
                    className: (0, b.default)(P.shopsLogo)
                }, v.default.createElement(d.FbshopsIcon, {
                    displayInline: true
                }));
            }

            function T (e) {
                let t;
                let o;
                let n;
                let {
                    productsToShow: l,
                    catalog: r,
                    hideIncompleteRows: i,
                    filterProductId: c,
                    seeMoreOverlay: d,
                    showProductPlaceholders: u,
                    onProductThumbClick: s,
                    onProductImageClick: p
                } = e;
                let m = l;
                if ((0, a.canSeeBizProfileV3)()) {
                    n = "largeGallerySpacing";
                }
                if (r != null) {
                    o = r.productCollection;
                    const e = r.productCollection.getProductModels();
                    if (i && e.length > 3) {
                        m = Math.min(l, e.length - e.length % 3);
                    }
                    t = e.slice(0, m + 1).filter(e => e.id.toString() !== c).map((e, t) => {
                        var o;
                        const a = (o = e.getPreviewImage()) === null || o === undefined ? undefined : o.mediaData;
                        if (!a) {
                            return v.default.createElement(v.default.Fragment, null);
                        }
                        let l;
                        if (d === true && t === m - 1 && r.productCollection.length > m - 1) {
                            l = E.fbt._("See more", null, {
                                hk: "450jnd"
                            });
                        }
                        return v.default.createElement(C.ProductThumb, {
                            key: e.id.toString(),
                            onClick: () => s(l != null, e),
                            mediaData: a,
                            overlayContent: l,
                            theme: n
                        });
                    }).slice(0, m);
                } else {
                    o = new _.ProductCollection();
                    o.add({
                        id: "_ph"
                    });
                }
                if ((t == null || t.length === 0) && u !== true) {
                    return null;
                }
                let g = P.addIcon;
                const b = [];
                if (u === true) {
                    for (let e = (O = (y = t) === null || y === undefined ? undefined : y.length) !== null && O !== undefined ? O : 0; e < m; e++) {
                        var O;
                        var y;
                        b.push(v.default.createElement(h.default, {
                            key: `_ph${e}`,
                            onClick: p,
                            title: E.fbt._("Add product", null, {
                                hk: "3gdovw"
                            }),
                            xstyle: [g, n === "largeGallerySpacing" && P.largeGallerySpacing]
                        }, v.default.createElement(v.default.Fragment, null)));
                        g = P.placeholderThumb;
                    }
                }
                let I;
                if ((0, a.canSeeBizProfileV3)()) {
                    I = "space-between";
                }
                const T = t != null ? [...t, ...b] : b;
                return v.default.createElement(f.MediaGalleryView, {
                    productMedias: T,
                    mediaCollection: o,
                    justify: I
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
            var a = n(o(145302));
            var l = o(22323);
            var r = n(o(170206));
            var i = n(o(745699));
            var c = o(23641);
            var d = n(o(908081));
            var u = n(o(324093));
            var s = o(568550);
            var f = o(626194);
            var p = o(114850);
            var m = o(21645);
            var C = o(932523);
            var _ = n(o(244381));
            var g = o(77548);
            var h = n(o(338931));
            var E = o(548360);
            var v = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var o = O(t);
                if (o && o.has(e)) {
                    return o.get(e);
                }
                var n = {};
                var a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e) {
                    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
                        var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                        if (r && (r.get || r.set)) {
                            Object.defineProperty(n, l, r);
                        } else {
                            n[l] = e[l];
                        }
                    }
                }
                n.default = e;
                if (o) {
                    o.set(e, n);
                }
                return n;
            }(o(667294));
            var b = n(o(156720));

            function O (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var o = new WeakMap();
                return (O = function (e) {
                    if (e) {
                        return o;
                    } else {
                        return t;
                    }
                })(e);
            }
            const P = {
                paddingTop: "i5tg98hk",
                paddingEnd: "iffbo4e8",
                paddingBottom: "aiput80m",
                paddingStart: "khscay3k",
                lineHeight: "qg52vu03"
            };
            const y = "catalog-link-anchor";

            function I (e, t) {
                const {
                    onBack: o,
                    onCancel: n,
                    catalog: O,
                    contact: I,
                    prompt: T,
                    centerDrawer: S,
                    onSend: k
                } = e;
                const A = (0, v.useContext)(s.DrawerContext);
                const w = () => {
                    p.ModalManager.open(v.default.createElement(a.default, {
                        catalog: O,
                        onSend: k
                    }), {
                        transition: "modal-flow"
                    });
                    (0, g.logShareCatalogViaWALinkClick)({
                        catalogOwnerWid: O.id,
                        catalogContext: (0, C.getProductCatalogContext)(A)
                    });
                };
                const M = v.default.createElement(c.DetailImage, {
                    id: I.id,
                    size: 82,
                    quality: c.DetailImageQuality.High
                });
                let L;
                let N;
                if (S) {
                    L = "labels";
                    N = "center-column";
                }
                return v.default.createElement(d.default, {
                    ref: t,
                    key: "catalog-link-drawer",
                    theme: L
                }, v.default.createElement(f.DrawerHeader, {
                    testid: "catalog-link-title",
                    title: E.fbt._("Catalog link", null, {
                        hk: "M36Dw"
                    }),
                    onBack: o,
                    onCancel: n,
                    type: f.DRAWER_HEADER_TYPE.SMALL
                }), v.default.createElement(u.default, {
                    theme: N
                }, v.default.createElement("div", {
                    className: (0, b.default)(P)
                }, T), v.default.createElement(r.default, {
                    image: M,
                    primary: v.default.createElement(m.Name, {
                        contact: I,
                        useVerifiedName: true
                    }),
                    theme: "identity",
                    secondary: v.default.createElement(_.default, {
                        id: y,
                        href: (0, l.createCatalogLink)(O.id.user),
                        onClick: e => {
                            e.preventDefault();
                            w();
                        },
                        noHandle: true
                    })
                }), v.default.createElement(h.default, {
                    onClick: w
                }), v.default.createElement(i.default, {
                    elementId: y,
                    onClick: () => {
                        (0, g.logShareCatalogCopyLinkClick)({
                            catalogOwnerWid: O.id,
                            catalogContext: (0, C.getProductCatalogContext)(A)
                        });
                    }
                })));
            }
            var T = (0, v.forwardRef)(I);
            t.default = T;
        },
        819543: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function () {
                return r.apply(this, arguments);
            };
            var a = n(o(348926));
            var l = o(778945);

            function r () {
                return (r = (0, a.default)(function* (e) {
                    var t;
                    let o = l.BusinessProfileCollection.get(e);
                    if (!o || o.stale) {
                        const t = yield l.BusinessProfileCollection.update(e);
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
                    onProductLinkClick: m,
                    onProductMoreInformation: C,
                    onCartClick: _,
                    cartCount: g,
                    catalogId: h
                } = e;
                return [_ && h != null ? p.default.createElement(r.CartIconMenuBarItem, {
                    cartCountText: (0, a.isNumber)(g) && g > 0 ? g.toString() : undefined,
                    onClick: _,
                    catalogOwnerJid: h
                }) : null, p.default.createElement(d.MenuBarItem, {
                    key: "link",
                    testid: "menu-bar-product-link",
                    icon: p.default.createElement(s.default, null),
                    title: f.fbt._("Product link", null, {
                        hk: "1RIlvV"
                    }),
                    onClick: m
                }), p.default.createElement(d.MenuBarItem, {
                    key: "dropdown",
                    testid: "menu-bar-menu",
                    icon: p.default.createElement(u.MenuIcon, null),
                    title: f.fbt._("Menu", null, {
                        hk: "H0fkV"
                    })
                }, p.default.createElement(i.Dropdown, {
                    type: i.MenuType.DropdownMenu,
                    flipOnRTL: true,
                    key: "ProductDetailHeader",
                    dirX: i.DirX.LEFT
                }, p.default.createElement(c.DropdownItem, {
                    testid: "mi-send menu-item",
                    action: o
                }, f.fbt._("Send product", null, {
                    hk: "1wkzue"
                })), (0, l.canSeeECommerceComplianceIndiaSoftEnforcement)(t) && p.default.createElement(c.DropdownItem, {
                    testid: "mi-send menu-item",
                    action: C
                }, f.fbt._("More information", null, {
                    hk: "2JHvi1"
                })), p.default.createElement(c.DropdownItem, {
                    testid: "mi-report menu-item",
                    action: n
                }, f.fbt._("Report product", null, {
                    hk: "1jgCyX"
                }))))];
            };
            var a = o(724976);
            var l = o(72696);
            var r = o(263755);
            var i = o(664149);
            var c = o(675085);
            var d = o(526795);
            var u = o(107600);
            var s = n(o(500210));
            var f = o(548360);
            var p = n(o(667294));
        },
        227604: (e, t, o) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.parseErrorState = function (e, t) {
                if (e instanceof a.Unmount);
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
            var a = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var o = l(t);
                if (o && o.has(e)) {
                    return o.get(e);
                }
                var n = {};
                var a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e) {
                    if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, r) : null;
                        if (i && (i.get || i.set)) {
                            Object.defineProperty(n, r, i);
                        } else {
                            n[r] = e[r];
                        }
                    }
                }
                n.default = e;
                if (o) {
                    o.set(e, n);
                }
                return n;
            }(o(288057));

            function l (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var o = new WeakMap();
                return (l = function (e) {
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
                        return c.default.createElement("div", {
                            className: (0, d.default)(u)
                        }, c.default.createElement(a.Spinner, {
                            size: 14,
                            color: "highlight"
                        }), c.default.createElement(l.TextSpan, {
                            className: (0, d.default)(s, f),
                            theme: "small"
                        }, i.fbt._("Waiting for network", null, {
                            hk: "3I2DtN"
                        })));
                    case "NOT_FOUND":
                    case "ERROR":
                        return c.default.createElement("div", {
                            className: (0, d.default)(u)
                        }, c.default.createElement(l.TextSpan, {
                            className: (0, d.default)(s),
                            theme: "small",
                            color: "danger"
                        }, t === "NOT_FOUND" ? i.fbt._("This product or service has been removed", null, {
                            hk: "3mE1ld"
                        }) : i.fbt._("Something went wrong", null, {
                            hk: "7C9hw"
                        })));
                    default:
                        throw (0, r.default)(`invalid fetchState ${t}`);
                }
            };
            var a = o(956113);
            var l = o(180519);
            var r = n(o(556869));
            var i = o(548360);
            var c = n(o(667294));
            var d = n(o(156720));
            const u = {
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
            const s = {
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
                return l.default.createElement(a.LinkIcon, {
                    xstyle: [r.linkIcon, e.theme === "inherit-color" && r.inheritColor]
                });
            };
            var a = o(406506);
            var l = n(o(667294));
            n(o(156720));
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
                    noHandle: d
                } = e;
                return l.default.createElement("span", {
                    className: (0, r.default)(i)
                }, l.default.createElement(a.SelectableLink, {
                    id: t,
                    href: o,
                    className: (0, r.default)(c),
                    selectable: true,
                    onClick: n,
                    "data-nohandle": d
                }, o));
            };
            var a = o(306703);
            var l = n(o(667294));
            var r = n(o(156720));
            const i = {
                wordWrap: "b6f1x6w7",
                whiteSpace: "hmy10g0s"
            };
            const c = {
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
                    shareLinks: r,
                    canManageCatalog: g
                } = e;
                const [E, v] = (0, C.useState)(undefined);
                const b = (0, _.useModelValues)(e.catalog, ["productCollection", "afterCursor", "id", "index"]);
                const O = e => {
                    if (o) {
                        o(e);
                    }
                };
                if (!b.productCollection || !b.productCollection.getProductModels(e.canManageCatalog).length) {
                    return null;
                }
                return C.default.createElement(i.default, {
                    flatListControllers: [e.flatListController]
                }, C.default.createElement(h, {
                    flatListController: e.flatListController,
                    direction: "vertical",
                    forceConsistentRenderCount: false,
                    data: (() => {
                        const e = n !== undefined;
                        return b.productCollection.getProductModels(g).map(t => ({
                            itemKey: `${t.id.toString()}_${e.toString()}`,
                            product: t
                        }));
                    })(),
                    renderItem: e => {
                        let {
                            product: o
                        } = e;
                        return C.default.createElement(a.DrawerContext.Consumer, null, e => {
                            const a = (0, s.getProductCatalogContext)(e);
                            return C.default.createElement(f.default, {
                                product: o,
                                onCartOpen: n,
                                onClick: () => ((e, o) => {
                                    (0, p.logCatalogListDetailClick)({
                                        product: (0, m.unproxy)(e),
                                        catalogContext: o
                                    });
                                    v(e.id.toString());
                                    return t(e);
                                })(o, a),
                                onProductShare: r ? O : null,
                                onProductDelete: e => ((e, t) => {
                                    (0, d.handleProductDelete)(b, e, t, "Catalog").then(() => {
                                        if (e.id === E) {
                                            l.DrawerManager.closeDrawerMid();
                                            v(undefined);
                                        }
                                    });
                                })(e, a),
                                onProductHideShow: e => ((e, t) => {
                                    (0, d.handleProductVisibilityChange)(b, e, t, "Catalog");
                                })(e, a),
                                canManageCatalog: g
                            });
                        });
                    },
                    defaultItemHeight: u.PRODUCT_LIST_ITEM_HEIGHT,
                    keyOrder: c.KeyOrder.INVERSE
                }));
            };
            var a = o(568550);
            var l = o(900316);
            var r = o(512938);
            var i = n(o(964223));
            var c = o(390185);
            var d = o(491606);
            var u = o(899841);
            var s = o(932523);
            var f = n(o(698690));
            var p = o(77548);
            var m = o(163139);
            var C = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var o = g(t);
                if (o && o.has(e)) {
                    return o.get(e);
                }
                var n = {};
                var a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e) {
                    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
                        var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                        if (r && (r.get || r.set)) {
                            Object.defineProperty(n, l, r);
                        } else {
                            n[l] = e[l];
                        }
                    }
                }
                n.default = e;
                if (o) {
                    o.set(e, n);
                }
                return n;
            }(o(667294));
            var _ = o(655241);

            function g (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var o = new WeakMap();
                return (g = function (e) {
                    if (e) {
                        return o;
                    } else {
                        return t;
                    }
                })(e);
            }
            const h = (0, r.FlatListFactory)();
        },
        614058: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = undefined;
            var a = o(898817);
            var l = o(122583);
            var r = o(15842);
            var i = o(632157);
            var c = o(984330);
            var d = o(72696);
            var u = o(739071);
            var s = o(778945);
            var f = o(542358);
            var p = o(290895);
            var m = o(713464);
            var C = o(698867);
            var _ = o(780549);
            var g = o(103440);
            var h = o(263079);
            var E = n(o(908081));
            var v = n(o(324093));
            var b = o(568550);
            var O = o(626194);
            var P = n(o(395767));
            var y = o(114850);
            var I = n(o(213393));
            var T = n(o(819543));
            var S = o(932523);
            var k = o(324480);
            var A = o(77548);
            var w = n(o(791724));
            var M = o(366179);
            var L = n(o(557575));
            var N = n(o(237375));
            var R = o(530485);
            var j = o(694630);
            var D = o(956113);
            var x = o(163139);
            var B = o(180519);
            var W = o(459857);
            var F = o(887222);
            var H = o(548360);
            var V = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var o = Q(t);
                if (o && o.has(e)) {
                    return o.get(e);
                }
                var n = {};
                var a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e) {
                    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
                        var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                        if (r && (r.get || r.set)) {
                            Object.defineProperty(n, l, r);
                        } else {
                            n[l] = e[l];
                        }
                    }
                }
                n.default = e;
                if (o) {
                    o.set(e, n);
                }
                return n;
            }(o(667294));
            var U = n(o(156720));
            var z = n(o(969651));
            var G = n(o(637660));
            var q = o(808446);
            var K = o(655241);
            var Y = n(o(895851));

            function Q (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var o = new WeakMap();
                return (Q = function (e) {
                    if (e) {
                        return o;
                    } else {
                        return t;
                    }
                })(e);
            }
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

            function X (e) {
                let t;
                let {
                    productFetchState: o,
                    productCatalogFetchState: n,
                    isAvailable: a
                } = e;
                t = o === "ERROR" ? V.default.createElement(B.TextSpan, {
                    className: (0, U.default)(Z.text),
                    theme: "small",
                    color: "danger"
                }, H.fbt._("Something went wrong", null, {
                    hk: "7C9hw"
                })) : a ? [V.default.createElement(D.Spinner, {
                    size: 14,
                    color: "highlight",
                    key: "DetailDrawer-loadingBar-spinner"
                }), V.default.createElement(B.TextSpan, {
                    className: (0, U.default)(Z.text, Z.loadingText),
                    theme: "small",
                    key: "DetailDrawer-loadingBar-msg"
                }, H.fbt._("Waiting for network", null, {
                    hk: "3I2DtN"
                }))] : V.default.createElement(B.TextSpan, {
                    className: (0, U.default)(Z.text),
                    theme: "small",
                    color: "danger"
                }, H.fbt._("This product or service has been removed", null, {
                    hk: "3mE1ld"
                }));
                const l = o === "PENDING" || n === "PENDING" || !a;
                return V.default.createElement("div", {
                    className: (0, U.default)(l && Z.loadingContainer, !l && Z.shiftUp)
                }, t);
            }

            function J (e) {
                let {
                    menu: t,
                    handleBack: o
                } = e;
                return V.default.createElement(O.DrawerHeader, {
                    title: H.fbt._("Details", null, {
                        hk: "1hLRT1"
                    }),
                    onBack: o,
                    type: O.DRAWER_HEADER_TYPE.SMALL,
                    menu: t
                });
            }

            function $ (e, t) {
                var o;
                const {
                    collectionId: n,
                    onCartClick: O,
                    onProductLinkClick: D,
                    onProductMoreInformation: B,
                    onBack: Q,
                    onProductCatalog: $,
                    onProductDetail: ee,
                    refreshCarousel: te,
                    chat: oe,
                    isPushed: ne = true
                } = e;
                const ae = (0, z.default)();
                const le = (0, Y.default)();
                const re = (0, V.useContext)(b.DrawerContext);
                const ie = (0, K.useModelValues)(e.product, ["id", "catalogWid", "productImageCollection", "fetchedFromServer", "name", "availability", "reviewStatus"]);
                const [ce, de] = (0, V.useState)(null);
                const [ue, se] = (0, V.useState)(false);
                const [fe, pe] = (0, V.useState)(null);
                const [me, Ce] = (0, V.useState)("NONE");
                const [_e, ge] = (0, V.useState)("NONE");
                const he = (0, G.default)(() => p.CartCollection.findCart(ie.catalogWid.toString()));
                (0, q.useListener)(he.current, "change:cartItemCollection", ae);
                const Ee = () => {
                    if (Q) {
                        return Q();
                    }
                };
                const ve = () => {
                    const e = ie.catalogWid;
                    const t = ie.id.toString();
                    return m.CatalogCollection.findProduct({
                        catalogWid: e,
                        productId: t,
                        productMsgMediaData: (0, x.unproxy)(ie).productMsgMediaData,
                        canLogQpl: ne
                    });
                };
                const be = () => {
                    const e = ie.catalogWid;
                    const t = ve();
                    const o = s.BusinessProfileCollection.find(e);
                    let n = true;
                    return Promise.all([o, t]).then(e => {
                        let [t] = e;
                        if (le.aborted) {
                            throw new a.AbortError();
                        }
                        n = false;
                        if (ne) {
                            (0, F.qplEndProductView)(r.QuickLogActionType.SUCCESS);
                        }
                        de(t);
                        Ce("SUCCESS");
                        return t;
                    }).then(e => {
                        ge(t => {
                            if (t === "PENDING") {
                                if (!(0, f.hasCatalog)(e)) {
                                    return "NONE";
                                }
                                (() => {
                                    const e = ie.catalogWid;
                                    m.CatalogCollection.findCarouselCatalog(e).then(e => {
                                        if (le.aborted) {
                                            return;
                                        }
                                        const t = Array.isArray(e) ? e[0] : e;
                                        pe(t || null);
                                        ge(t ? "SUCCESS" : "NONE");
                                    }).catch((0, l.filteredCatch)(c.ServerStatusCodeError, e => {
                                        if (e.status === "not_found" || e.status === 404) {
                                            pe(null);
                                            ge("NOT_FOUND");
                                        } else {
                                            pe(null);
                                            ge("ERROR");
                                            __LOG__(3)`Failed to fetch product catalog from server`;
                                        }
                                    }));
                                })();
                            }
                            return t;
                        });
                    }).catch((0, a.catchAbort)(() => {})).catch((0, l.filteredCatch)(c.E404, () => {
                        Ee();
                        y.ModalManager.open(V.default.createElement(g.ConfirmPopup, {
                            onOK: () => {
                                y.ModalManager.close();
                            },
                            okText: (0, P.default)("OK")
                        }, H.fbt._("This product or service has been removed", null, {
                            hk: "3mE1ld"
                        })));
                        Ce("NOT_FOUND");
                        n = false;
                        (0, F.qplDropProductView)();
                    })).catch((0, l.filteredCatch)(c.ServerStatusCodeError, () => {
                        Ce("ERROR");
                        __LOG__(3)`Failed to fetch product from server`;
                    })).finally(() => {
                        if (ne && n) {
                            (0, F.qplEndProductView)(r.QuickLogActionType.FAIL);
                        }
                    });
                };
                (0, V.useEffect)(() => {
                    if ((0, d.commerceThreadsLoggingEnabled)() && oe) {
                        (0, C.handleActivitiesForChatThreadLogging)([{
                            activityType: "pdpViews",
                            ts: (0, i.unixTime)(),
                            chatId: oe.id
                        }]);
                    }
                    if (te) {
                        const e = m.CatalogCollection.get(ie.catalogWid);
                        if ((e == null ? undefined : e.productCollection) && e.fetchedFromServer) {
                            ge("SUCCESS");
                        } else {
                            ge("PENDING");
                        }
                    }
                    const e = (0, W.getMaybeMeUser)();
                    if (ne) {
                        (0, F.qplAnnotateProductView)(!(e == null ? undefined : e.equals(ie.catalogWid)));
                    }
                    const t = ie.catalogWid;
                    const o = ie.id.toString();
                    if (t && o) {
                        be();
                        (0, T.default)(t).then(e => {
                            se(e);
                            (0, A.logProductDetailView)({
                                product: (0, x.unproxy)(ie),
                                catalogContext: (0, S.getProductCatalogContext)(re),
                                cartToggle: e,
                                collectionId: n
                            });
                        });
                        return () => {
                            const e = ie.catalogWid;
                            const t = ie.id.toString();
                            if (!e || !t) {
                                return;
                            }
                            const o = m.CatalogCollection.get(e);
                            const n = o && o.msgProductCollection.get(t);
                            if ((n == null ? undefined : n.fetchedFromServer) && o) {
                                o.msgProductCollection.remove(n);
                            }
                        };
                    }
                    (0, F.qplDropProductView)();
                }, []);
                const Oe = () => {
                    (0, F.qplStartCartView)("Product");
                    if (!(O == null)) {
                        O(ie.catalogWid.toString());
                    }
                };
                const Pe = () => {
                    y.ModalManager.open(V.default.createElement(N.default, {
                        product: ie,
                        sessionId: (0, S.getProductCatalogSessionId)(re)
                    }));
                };
                const ye = () => {
                    (0, A.logProductShareLinkClick)({
                        product: ie,
                        catalogContext: (0, S.getProductCatalogContext)(re)
                    });
                    D(ie);
                };
                const Ie = function (e) {
                    let t = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1];
                    if ((0, d.commerceThreadsLoggingEnabled)() && oe) {
                        (0, C.handleActivitiesForChatThreadLogging)([{
                            activityType: e,
                            ts: (0, i.unixTime)(),
                            chatId: oe.id,
                            boolValue: t
                        }]);
                    }
                };
                const Te = () => {
                    const e = ie;
                    const {
                        catalogWid: t
                    } = e;
                    const o = m.CatalogCollection.get(t);
                    if (!o) {
                        return;
                    }
                    const n = o.productCollection.get(e.id);
                    _.Cmd.attachProduct({
                        product: n ? (0, x.unproxy)(n) : (0, x.unproxy)(e)
                    });
                };
                const Se = () => {
                    B(ie);
                };
                const ke = () => me !== "ERROR" && me !== "NOT_FOUND" && !(() => {
                    const {
                        reviewStatus: e
                    } = ie;
                    return e === R.PRODUCT_REVIEW_STATUS.REJECTED;
                })();
                const Ae = ke();
                const we = (0, f.hasCatalog)(ce);
                const Me = () => {
                    ve().then(() => {
                        const e = m.CatalogCollection.get(ie.catalogWid);
                        if (e) {
                            e.stale = true;
                        }
                    });
                };
                let Le;
                if (ke()) {
                    Le = (0, k.getDetailDrawerMenu)({
                        onSendProduct: Te,
                        onReportProduct: Pe,
                        onProductLinkClick: ye,
                        onProductMoreInformation: Se,
                        onCartClick: ue ? Oe : undefined,
                        cartCount: he.current.itemCount,
                        catalogId: ie.catalogWid.toString(),
                        contactId: oe == null ? undefined : oe.contact.id
                    });
                }
                return V.default.createElement(E.default, {
                    ref: t,
                    onDrop: Ee,
                    theme: "striped",
                    key: "product-details-drawer"
                }, V.default.createElement(J, {
                    handleBack: Ee,
                    menu: Le
                }), V.default.createElement(v.default, null, V.default.createElement("div", {
                    className: (0, U.default)(Z.body)
                }, V.default.createElement(X, {
                    productFetchState: me,
                    productCatalogFetchState: _e,
                    isAvailable: Ae
                }), V.default.createElement(L.default, {
                    product: ie,
                    isAvailable: Ae,
                    fetching: me === "PENDING"
                }), j.PRODUCT_AVAILABILITY_UNAVAILABLE_VALUES.includes(ie.availability) ? V.default.createElement("div", {
                    className: (0, U.default)(Z.availabilityBanner)
                }, ie.availability === j.ProductAvailability.OUT_OF_STOCK ? H.fbt._("This item is out of stock.", null, {
                    hk: "4gOwiz"
                }) : null, ie.availability === j.ProductAvailability.AVAILABLE_FOR_ANOTHER_POSTCODE && (0, h.enablePostcodeInCatalog)() ? V.default.createElement(M.ProductPostcodeChangeBanner, {
                    catalogWid: ie.catalogWid,
                    postcodeChangeSuccess: Me
                }) : null) : null, V.default.createElement(w.default, {
                    product: ie,
                    collectionId: n,
                    onSendChat: () => {
                        const e = m.CatalogCollection.get(ie.catalogWid);
                        (0, u.sendProductToChat)(ie, e, (0, S.getProductCatalogContext)(re));
                        Ie("isCtaOnPdpClicked");
                        (0, A.logProductMessageBusinessClick)(ie, (0, S.getProductCatalogContext)(re));
                    },
                    onAddToCart: () => {
                        Ie("isCartAddClicked");
                    },
                    isAvailable: Ae,
                    hideRetailerID: (o = e.chat) === null || o === undefined ? undefined : o.contact.isEnterprise
                }), we && fe ? V.default.createElement(I.default, {
                    catalog: fe,
                    onProductCatalog: () => {
                        if ($) {
                            $(ie.catalogWid, (0, S.getProductCatalogContext)(re));
                        }
                    },
                    onProductDetail: e => {
                        (0, F.qplStartProductView)("Product");
                        if (ee) {
                            return ee(e);
                        }
                    },
                    filterProductId: ie.id.toString(),
                    title: H.fbt._("More", null, {
                        hk: "2A3GqV"
                    }),
                    animation: false
                }) : null)));
            }
            var ee = (0, V.forwardRef)($);
            t.default = ee;
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
                    isAvailable: a
                } = e;
                const l = (0, k.useContext)(u.DrawerContext);
                const r = (0, M.useModelValues)(e.product, ["name", "url", "description", "availability", "currency", "priceAmount1000", "salePriceAmount1000", "salePriceStartDate", "salePriceEndDate", "fetchedFromServer", "retailerId", "catalogWid", "productImageCollection", "imageHash", "reviewStatus", "imageCdnUrl", "id", "maxAvailable"]);
                const [i, c] = (0, k.useState)(false);
                const [d, m] = (0, k.useState)(false);
                (0, k.useEffect)(() => {
                    (0, g.default)(r.catalogWid).then(e => {
                        m(e);
                    });
                }, []);
                return k.default.createElement(s.default, {
                    theme: "padding-product",
                    animation: false
                }, k.default.createElement(T.TextDiv, {
                    theme: "title",
                    className: (0, A.default)(R.name)
                }, k.default.createElement(f.EmojiText, {
                    text: r.name,
                    selectable: true
                })), r.priceAmount1000 != null ? k.default.createElement(T.TextDiv, {
                    className: (0, A.default)(R.price),
                    color: "dark",
                    theme: "plain"
                }, k.default.createElement(v.default, {
                    product: r,
                    selectable: true,
                    direction: "inherit"
                })) : null, k.default.createElement(B, {
                    product: r,
                    isAvailable: a,
                    isDescExpanded: i,
                    hideRetailerID: e.hideRetailerID,
                    onReadMore: () => {
                        c(true);
                    },
                    onClickUrl: (e, t) => {
                        e.stopPropagation();
                        (0, E.logDetailLinkClick)({
                            product: (0, I.unproxy)(r),
                            catalogContext: (0, h.getProductCatalogContext)(l)
                        });
                        const o = t && C.findLink(t);
                        if (o) {
                            (0, p.openExternalLink)(o.url);
                        }
                    }
                }), k.default.createElement(j, {
                    onSendChat: () => {
                        if (!(o == null)) {
                            o();
                        }
                    },
                    isAvailable: a,
                    product: r
                }), k.default.createElement(D, {
                    collectionId: t,
                    cartEnabled: d,
                    isAvailable: a,
                    product: r,
                    onClick: e => {
                        y.QPL.markerStart(P.QuickLogMarkerId.WHATSAPP_CART_ADD, {
                            annotations: {
                                string: {
                                    EntryPoint: "Product"
                                }
                            }
                        });
                        (0, _.addToCart)(r, (0, h.getProductCatalogContext)(l), t);
                        if (!(n == null)) {
                            n();
                        }
                        e.stopPropagation();
                    },
                    context: l
                }));
            };
            var a = n(o(327820));
            var l = o(72696);
            var r = n(o(539925));
            var i = n(o(692629));
            var c = n(o(894138));
            var d = n(o(846870));
            var u = o(568550);
            var s = n(o(969358));
            var f = o(305521);
            var p = o(753233);
            var m = N(o(675886));
            var C = N(o(446303));
            var _ = o(758121);
            var g = n(o(819543));
            var h = o(932523);
            var E = o(77548);
            var v = n(o(269261));
            var b = o(530485);
            var O = o(694630);
            var P = o(316348);
            var y = o(555622);
            var I = o(163139);
            var T = o(180519);
            var S = o(548360);
            var k = N(o(667294));
            var A = n(o(156720));
            var w = n(o(478636));
            var M = o(655241);

            function L (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var o = new WeakMap();
                return (L = function (e) {
                    if (e) {
                        return o;
                    } else {
                        return t;
                    }
                })(e);
            }

            function N (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var o = L(t);
                if (o && o.has(e)) {
                    return o.get(e);
                }
                var n = {};
                var a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e) {
                    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
                        var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                        if (r && (r.get || r.set)) {
                            Object.defineProperty(n, l, r);
                        } else {
                            n[l] = e[l];
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

            function j (e) {
                let {
                    onSendChat: t,
                    isAvailable: o,
                    product: n
                } = e;
                if (!t || !n.fetchedFromServer || !o || n.reviewStatus !== b.PRODUCT_REVIEW_STATUS.APPROVED) {
                    return null;
                }
                const a = S.fbt._("Message Business", null, {
                    hk: "3jgAJS"
                });
                return k.default.createElement("div", {
                    className: (0, A.default)(R.buttonContainer),
                    title: a
                }, k.default.createElement(i.default, {
                    testid: "product-message-business-btn",
                    onClick: t,
                    type: "secondary",
                    stretch: true
                }, a));
            }

            function D (e) {
                let {
                    cartEnabled: t,
                    isAvailable: o,
                    product: n,
                    onClick: d,
                    context: u,
                    collectionId: s
                } = e;
                const {
                    isHovered: f,
                    onMouseEnter: p,
                    onMouseLeave: m
                } = (0, w.default)();
                if (!t || !n.fetchedFromServer || !o || n.reviewStatus !== b.PRODUCT_REVIEW_STATUS.APPROVED) {
                    return null;
                }
                const C = (0, l.isQuantityControlsFeatureEnabled)();
                const _ = S.fbt._("Add to cart", null, {
                    hk: "2qbS08"
                });
                const g = O.PRODUCT_AVAILABILITY_UNAVAILABLE_VALUES.includes(n.availability);
                let h = null;
                h = g ? R.addToCartIconDisabled : f ? R.addToCartBtnHoverIcon : R.addToCartIcon;
                const E = (0, r.default)(n.id, n.catalogWid);
                const v = C ? null : k.default.createElement(a.default, {
                    colorXStyle: h
                });
                const P = C && E > 0 ? k.default.createElement(c.default, {
                    product: n,
                    context: u,
                    collectionId: s || ""
                }) : k.default.createElement(i.default, {
                    testid: "add-to-cart-btn",
                    onClick: d,
                    type: "secondary",
                    disabled: g,
                    stretch: true
                }, k.default.createElement("span", {
                    className: (0, A.default)(R.addToCartContainer, v && R.addToCartContainerWithIcon)
                }, v, _));
                return k.default.createElement("div", {
                    className: (0, A.default)(R.buttonContainer, C && R.quantityControls),
                    title: _,
                    onMouseEnter: p,
                    onMouseLeave: m
                }, P);
            }

            function x (e) {
                let {
                    isAvailable: t,
                    product: o,
                    onClick: n
                } = e;
                const {
                    url: a
                } = o;
                if (!o.fetchedFromServer || !a || !t) {
                    return null;
                }
                const l = m.TrustedGroupDesc({
                    links: C.findLinks(a)
                });
                return k.default.createElement("div", null, k.default.createElement(f.EmojiText, {
                    selectable: true,
                    formatters: l,
                    text: a,
                    onClick: e => n(e, a)
                }));
            }

            function B (e) {
                let {
                    product: t,
                    isAvailable: o,
                    isDescExpanded: n,
                    hideRetailerID: a,
                    onReadMore: l,
                    onClickUrl: r
                } = e;
                if (!t.description && !t.url && !t.retailerId) {
                    return null;
                }
                const i = !!t.description && t.description.length > d.default.GROUP_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH;
                let c;
                if (t.description) {
                    c = k.default.createElement("div", null, k.default.createElement(f.EmojiText, {
                        selectable: true,
                        multiline: true,
                        text: t.description,
                        textLimit: n ? 1 / 0 : d.default.GROUP_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH
                    }), i && !n ? k.default.createElement("span", {
                        className: (0, A.default)(R.more),
                        role: "button",
                        onClick: l
                    }, " ", S.fbt._("Read more", null, {
                        hk: "2DvSvh"
                    })) : null);
                }
                return k.default.createElement(T.TextDiv, {
                    theme: "plain",
                    className: (0, A.default)(R.description)
                }, c, k.default.createElement(x, {
                    isAvailable: o,
                    product: t,
                    onClick: r
                }), t.retailerId && !a ? k.default.createElement("div", null, k.default.createElement(f.EmojiText, {
                    text: t.retailerId,
                    selectable: true,
                    direction: "inherit"
                })) : null);
            }
        },
        632289: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = undefined;
            var a = n(o(534885));
            var l = n(o(688023));
            var r = o(22323);
            var i = n(o(170206));
            var c = o(396574);
            var d = o(780549);
            var u = n(o(745699));
            var s = n(o(908081));
            var f = n(o(324093));
            var p = o(568550);
            var m = o(626194);
            var C = o(305521);
            var _ = o(114850);
            var g = o(932523);
            var h = n(o(244381));
            var E = o(77548);
            var v = n(o(886480));
            var b = o(493770);
            var O = n(o(338931));
            var P = o(163139);
            var y = o(548360);
            var I = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var o = T(t);
                if (o && o.has(e)) {
                    return o.get(e);
                }
                var n = {};
                var a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e) {
                    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
                        var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                        if (r && (r.get || r.set)) {
                            Object.defineProperty(n, l, r);
                        } else {
                            n[l] = e[l];
                        }
                    }
                }
                n.default = e;
                if (o) {
                    o.set(e, n);
                }
                return n;
            }(o(667294));

            function T (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var o = new WeakMap();
                return (T = function (e) {
                    if (e) {
                        return o;
                    } else {
                        return t;
                    }
                })(e);
            }
            const S = "product-link-anchor";

            function k (e) {
                const t = e.getProductImageCollectionHead();
                if (t) {
                    return I.default.createElement(b.ProductThumb, {
                        className: (0, c.classnamesConvertMeToStylexPlease)(v.default.productImage, v.default.productImageContainer),
                        mediaData: t.mediaData
                    });
                } else {
                    return I.default.createElement(b.ProductThumbPlaceholder, {
                        className: (0, c.classnamesConvertMeToStylexPlease)(v.default.productThumb, v.default.productThumbContainer)
                    });
                }
            }

            function A (e, t) {
                const {
                    onBack: o,
                    onCancel: n,
                    product: c,
                    prompt: b,
                    centerDrawer: T,
                    sendProductMsg: A,
                    onSend: w
                } = e;
                const M = (0, I.useContext)(p.DrawerContext);
                const L = () => {
                    _.ModalManager.open(I.default.createElement(l.default, {
                        product: c,
                        onSend: w
                    }), {
                        transition: "modal-flow"
                    });
                    (0, E.logShareProductViaWALinkClick)({
                        product: c,
                        catalogContext: (0, g.getProductCatalogContext)(M)
                    });
                };
                const N = () => {
                    d.Cmd.attachProduct({
                        product: (0, P.unproxy)(c),
                        onSend: w
                    });
                };
                const R = (0, r.createProductLink)(c.catalogWid.user, c.id.toString());
                let j;
                let D;
                let x;
                if (T) {
                    j = "labels";
                    D = "center-column";
                }
                x = A != null ? I.default.createElement(a.default, {
                    onClick: N
                }) : I.default.createElement(O.default, {
                    onClick: L
                });
                return I.default.createElement(s.default, {
                    ref: t,
                    key: "product-link-drawer",
                    theme: j
                }, I.default.createElement(m.DrawerHeader, {
                    testid: "product-link-title",
                    title: y.fbt._("Product link", null, {
                        hk: "1RIlvV"
                    }),
                    onBack: o,
                    onCancel: n,
                    type: m.DRAWER_HEADER_TYPE.SMALL,
                    focusBackOrCancel: true
                }), I.default.createElement(f.default, {
                    theme: D
                }, I.default.createElement("div", {
                    className: v.default.prompt
                }, b), I.default.createElement(i.default, {
                    image: k(c),
                    primary: I.default.createElement(C.EmojiText, {
                        text: c.name,
                        direction: "auto"
                    }),
                    theme: "identity",
                    secondary: I.default.createElement(h.default, {
                        id: S,
                        href: R,
                        onClick: e => {
                            e.preventDefault();
                            L();
                        },
                        noHandle: true
                    })
                }), x, I.default.createElement(u.default, {
                    elementId: S,
                    onClick: () => {
                        (0, E.logShareProductCopyLinkClick)({
                            product: c,
                            catalogContext: (0, g.getProductCatalogContext)(M)
                        });
                    }
                })));
            }
            var w = (0, I.forwardRef)(A);
            t.default = w;
        },
        559016: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ProductListDrawer = undefined;
            var a = o(122583);
            var l = o(724976);
            var r = o(287461);
            var i = o(984330);
            var c = o(290895);
            var d = o(713464);
            var u = o(263755);
            var s = o(660666);
            var f = n(o(908081));
            var p = n(o(324093));
            var m = o(568550);
            var C = o(626194);
            var _ = o(664149);
            var g = o(675085);
            var h = n(o(570834));
            var E = n(o(495012));
            var v = o(914368);
            var b = n(o(468601));
            var O = o(526795);
            var P = o(107600);
            var y = n(o(786399));
            var I = o(899841);
            var T = n(o(819543));
            var S = o(932523);
            var k = o(227604);
            var A = n(o(568414));
            var w = n(o(500210));
            var M = n(o(525897));
            var L = o(77548);
            var N = n(o(944045));
            var R = o(548360);
            var j = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var o = z(t);
                if (o && o.has(e)) {
                    return o.get(e);
                }
                var n = {};
                var a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e) {
                    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
                        var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                        if (r && (r.get || r.set)) {
                            Object.defineProperty(n, l, r);
                        } else {
                            n[l] = e[l];
                        }
                    }
                }
                n.default = e;
                if (o) {
                    o.set(e, n);
                }
                return n;
            }(o(667294));
            var D = n(o(156720));
            var x = o(379811);
            var B = n(o(710629));
            var W = n(o(969651));
            var F = n(o(637660));
            var H = o(808446);
            var V = n(o(286481));
            var U = n(o(895851));

            function z (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var o = new WeakMap();
                return (z = function (e) {
                    if (e) {
                        return o;
                    } else {
                        return t;
                    }
                })(e);
            }
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
                    businessProfile: a,
                    contact: l,
                    productCatalogList: r,
                    loadingMore: i
                } = e;
                if (o && n) {
                    t = j.default.createElement(b.default, {
                        onClick: () => n(),
                        theme: "in-list",
                        testid: "add-item"
                    });
                }
                return j.default.createElement(j.default.Fragment, null, a && j.default.createElement("div", {
                    className: (0, D.default)(G.header)
                }, j.default.createElement(N.default, {
                    profilePicThumb: l.getProfilePicThumb(),
                    contact: l,
                    businessProfile: a
                })), j.default.createElement("div", {
                    className: (0, D.default)(G.list, a && G.listMarginTop)
                }, t, r, i && j.default.createElement(E.default, null)));
            }
            const K = (0, j.forwardRef)((e, t) => {
                const {
                    contact: o,
                    catalogId: n,
                    canManageCatalog: E,
                    setScrollOffset: b,
                    onCartClick: N,
                    onCatalogLinkClick: D,
                    autoUpdate: z = false,
                    businessProfile: G,
                    onAddProduct: K,
                    onProductDetail: Y,
                    onProductShare: Q,
                    headerType: Z,
                    onOpenSettings: X,
                    blockCartInterstitialFn: J = () => false
                } = e;
                const $ = (0, U.default)();
                const ee = (0, j.useContext)(m.DrawerContext);
                const te = (0, W.default)();
                const oe = (0, B.default)(te, 100);
                const [ne] = (0, x.useContactValues)(o.id, [s.getId]);
                const ae = (0, F.default)(() => new h.default());
                const le = () => {
                    const e = d.CatalogCollection.get(n);
                    if (!e || e.stale) {
                        return null;
                    } else {
                        return e;
                    }
                };
                const re = (0, j.useMemo)(() => c.CartCollection.findCart(ne.toString()), [ne]);
                const [ie, ce] = (0, j.useState)(false);
                const [de, ue] = (0, j.useState)(0);
                const [se, fe] = (0, j.useState)(false);
                const [pe, me] = (0, j.useState)(false);
                const [Ce, _e] = (0, j.useState)(le);
                const [ge, he] = (0, j.useState)(() => re.itemCount);
                const [Ee, ve] = (0, j.useState)(() => le() ? "SUCCESS" : "NONE");
                (0, H.useListener)(re, "all", () => {
                    const e = re.itemCount;
                    if (ge !== e) {
                        he(e);
                    }
                });
                const be = () => {
                    if (se) {
                        return;
                    }
                    const e = d.CatalogCollection.assertGet(n);
                    if (!e.afterCursor) {
                        return;
                    }
                    const t = e.productCollection.getProductModels().length;
                    ce(true);
                    ue(t);
                    d.CatalogCollection.update(n).then(e => {
                        if ($.aborted) {
                            return;
                        }
                        ce(false);
                        if ((Array.isArray(e) ? e[0] : e).productCollection.getProductModels().length === de) {
                            fe(true);
                        }
                        if (t * I.PRODUCT_LIST_ITEM_HEIGHT < window.innerHeight) {
                            be();
                        }
                    }).catch(() => {
                        ce(false);
                        fe(true);
                    });
                };
                const Oe = (0, B.default)(() => {
                    var t;
                    if (!((t = e.onRemoveProduct) === null || t === undefined)) {
                        t.call(e);
                    }
                    te();
                }, 100);
                const Pe = z ? Ce == null ? undefined : Ce.productCollection : null;
                (0, H.useListener)(Pe, "add", oe);
                (0, H.useListener)(Pe, "remove", Oe);
                (0, j.useEffect)(() => {
                    if (Ce) {
                        be();
                    } else {
                        d.CatalogCollection.find(n).then(e => {
                            _e(e);
                            ve("SUCCESS");
                            be();
                        }).catch((0, a.filteredCatch)(i.ServerStatusCodeError, e => {
                            if (!(e.status !== 403 && e.status !== 404)) {
                                _e(null);
                                ve("NOT_FOUND");
                            }
                        })).catch(e => {
                            (0, k.parseErrorState)(e, e => ve(e));
                        });
                    }
                    (0, T.default)(n).then(e => {
                        me(e);
                        (0, L.logCatalogListView)({
                            catalogOwnerWid: n,
                            catalogContext: (0, S.getProductCatalogContext)(ee),
                            cartToggle: e
                        });
                        if (E && pe && !J() && (0, r.getABPropConfigValue)("web_abprop_nux_cart_interstitial")) {
                            (0, y.default)();
                        }
                    });
                }, []);
                const ye = (0, V.default)(e => {
                    if (!ie) {
                        if (e.scrollTop + v.SCROLL_FUDGE > e.scrollHeight - e.clientHeight) {
                            be();
                        }
                    }
                }, 100);
                const Ie = () => {
                    if (!(N == null)) {
                        N(ne.toString());
                    }
                };
                const Te = pe && N ? Ie : undefined;
                const Se = Ce ? j.default.createElement(q, {
                    canManageCatalog: E,
                    onAddProduct: K,
                    businessProfile: G,
                    contact: o,
                    loadingMore: ie,
                    productCatalogList: j.default.createElement(M.default, {
                        onCartOpen: Te,
                        onProductDetail: Y,
                        flatListController: ae.current,
                        catalog: Ce,
                        canManageCatalog: E,
                        shareLinks: E,
                        onProductShare: Q
                    })
                }) : j.default.createElement(A.default, {
                    fetchState: Ee
                });
                const ke = function (e) {
                    let {
                        canManageCatalog: t,
                        onOpenSettings: o,
                        headerType: n,
                        onCartClick: a,
                        catalogId: r,
                        handleCatalogLinkClick: i,
                        handleCartClick: c,
                        cartEnabled: d,
                        cartCount: s
                    } = e;
                    const f = t ? j.default.createElement(O.MenuBarItem, {
                        testid: "menu-bar-menu",
                        icon: j.default.createElement(P.MenuIcon, null),
                        title: R.fbt._("Menu", null, {
                            hk: "H0fkV"
                        })
                    }, j.default.createElement(_.Dropdown, {
                        type: _.MenuType.DropdownMenu,
                        flipOnRTL: true,
                        key: "CatalogDetailHeader",
                        dirX: _.DirX.LEFT
                    }, j.default.createElement(g.DropdownItem, {
                        testid: "mi-foward menu-item",
                        action: i
                    }, R.fbt._("Forward", null, {
                        hk: "2T1QOm"
                    })), o && j.default.createElement(g.DropdownItem, {
                        testid: "mi-settings menu-item",
                        action: o
                    }, R.fbt._("Settings", null, {
                        hk: "2RmHUB"
                    })))) : j.default.createElement(O.MenuBarItem, {
                        testid: "menu-bar-catalog-link",
                        icon: j.default.createElement(w.default, {
                            theme: n === C.DRAWER_HEADER_TYPE.LARGE ? "inherit-color" : null
                        }),
                        title: R.fbt._("Catalog link", null, {
                            hk: "M36Dw"
                        }),
                        onClick: i
                    });
                    return [d && a ? j.default.createElement(u.CartIconMenuBarItem, {
                        cartIconTheme: n === C.DRAWER_HEADER_TYPE.LARGE ? "inherit-color" : null,
                        cartCountText: (0, l.isNumber)(s) && s > 0 ? s.toString() : undefined,
                        onClick: c,
                        catalogOwnerJid: r.toString()
                    }) : null, f];
                }({
                    canManageCatalog: E,
                    handleCatalogLinkClick: () => {
                        if (Ce) {
                            D(Ce, o);
                            (0, L.logCatalogShareLinkClick)({
                                catalogOwnerWid: n,
                                catalogContext: (0, S.getProductCatalogContext)(ee)
                            });
                        }
                    },
                    onOpenSettings: X,
                    headerType: Z,
                    cartEnabled: pe,
                    onCartClick: N,
                    cartCount: ge,
                    handleCartClick: Ie,
                    catalogId: n
                });
                return j.default.createElement(f.default, {
                    ref: t,
                    theme: "products",
                    onDrop: e.onBack
                }, j.default.createElement(C.DrawerHeader, {
                    title: R.fbt._("Catalog", null, {
                        hk: "3YVOSV"
                    }),
                    type: e.headerType || C.DRAWER_HEADER_TYPE.SMALL,
                    onBack: e.onBack,
                    menu: ke,
                    focusBackOrCancel: true
                }), j.default.createElement(p.default, {
                    onScroll: e => {
                        var t;
                        var o;
                        if (e.currentTarget) {
                            ye(e.currentTarget);
                        }
                        if (!(b == null)) {
                            b((t = (o = e.currentTarget) === null || o === undefined ? undefined : o.scrollTop) !== null && t !== undefined ? t : 0);
                        }
                    },
                    flatListControllers: [ae.current],
                    scrollOffset: e.scrollOffset
                }, Se));
            });
            t.ProductListDrawer = K;
            K.displayName = "ProductListDrawer";
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
                return u.default.createElement("div", {
                    className: (0, s.default)(m.header)
                }, u.default.createElement(_, {
                    profilePicThumb: t,
                    contact: o
                }), u.default.createElement("div", {
                    className: (0, s.default)(m.text, d.uiPadding.horiz30)
                }, u.default.createElement(c.TextDiv, {
                    className: (0, s.default)(m.name),
                    theme: "large"
                }, u.default.createElement(i.Name, {
                    contact: o,
                    selectable: true,
                    useVerifiedName: true
                })), u.default.createElement(C, {
                    businessProfile: n
                })));
            };
            var a = o(660666);
            var l = o(23641);
            var r = o(305521);
            var i = o(21645);
            var c = o(180519);
            var d = o(676345);
            var u = n(o(667294));
            var s = n(o(156720));
            var f = o(379811);
            var p = o(655241);
            const m = {
                description: {
                    display: "c32ccnay",
                    maxHeight: "ih8khgda",
                    overflowX: "gfz4du6o",
                    overflowY: "r7fjleex",
                    lineHeight: "r5qsrrlp",
                    color: "k17s6i4e",
                    wordBreak: "cw3vfol9",
                    WebkitLineClamp: "s7u03v8d",
                    WebkitBoxOrient: "aoi073rw"
                },
                photo: {
                    position: "g0rxnol2",
                    zIndex: "jnl3jror",
                    display: "p357zi0d",
                    alignItems: "gndfcl4n",
                    justifyContent: "ac2vgrno",
                    width: "ln8gz9je",
                    height: "ppled2lx",
                    "::after": {
                        position: "tkubpkrc",
                        top: "m2ribxjb",
                        start: "ayog92vv",
                        zIndex: "a2vs0op0",
                        width: "dmpvfhqh",
                        height: "f2fkal8o",
                        content: "lw9p9708",
                        backgroundColor: "cbpgb5wy"
                    }
                },
                photoIcon: {
                    width: "gbtdc75f",
                    height: "fe3aadhc"
                },
                header: {
                    position: "g0rxnol2",
                    height: "m6k4hpz6",
                    overflowX: "gfz4du6o",
                    overflowY: "r7fjleex",
                    backgroundColor: "fr2082sw"
                },
                text: {
                    position: "lhggkp7q",
                    top: "qq0sjtgm",
                    end: "ebjesfe0",
                    bottom: "jxacihee",
                    start: "tkdu00h0",
                    zIndex: "mb8var44",
                    display: "p357zi0d",
                    flexDirection: "f8m0rgwh",
                    alignItems: "gndfcl4n",
                    justifyContent: "ac2vgrno",
                    textAlign: "qfejxiq4"
                },
                name: {
                    fontWeight: "hnx8ox4h",
                    color: "k17s6i4e"
                },
                spinner: {
                    borderTopStartRadius: "bi2mdrpt",
                    borderTopEndRadius: "hsk1pqkj",
                    borderBottomEndRadius: "e3yfz9gx",
                    borderBottomStartRadius: "a0vc5f8u"
                },
                img: {
                    height: "bvcnfjzh",
                    borderTopStartRadius: "bi2mdrpt",
                    borderTopEndRadius: "hsk1pqkj",
                    borderBottomEndRadius: "e3yfz9gx",
                    borderBottomStartRadius: "a0vc5f8u"
                }
            };

            function C (e) {
                const t = (0, p.useOptionalModelValues)(e.businessProfile, ["description"]);
                if (t && t.description) {
                    return u.default.createElement("div", {
                        className: (0, s.default)(m.description, d.uiMargin.top12)
                    }, u.default.createElement(r.EmojiText, {
                        text: t.description,
                        direction: "auto",
                        selectable: true,
                        titlify: true
                    }));
                } else {
                    return null;
                }
            }

            function _ (e) {
                const t = (0, p.useOptionalModelValues)(e.profilePicThumb, ["imgFull"]);
                const [o] = (0, f.useContactValues)(e.contact.id, [a.getId, a.getIsMe]);
                if (!t) {
                    return null;
                }
                const n = u.default.createElement(l.DefaultIcon, {
                    id: o,
                    xstyle: m.photoIcon
                });
                return u.default.createElement("div", {
                    className: (0, s.default)(m.photo)
                }, u.default.createElement(l.DetailImageCommon, {
                    profilePicThumb: t,
                    loader: true,
                    defaultIcon: n,
                    profilePicThumbImg: t.imgFull,
                    spinnerXstyle: m.spinner,
                    spinnerSize: 100,
                    imgXstyle: m.img,
                    theme: "business"
                }));
            }
        },
        898707: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = undefined;
            var a = n(o(81109));
            var l = n(o(348926));
            var r = n(o(670983));
            var i = o(713464);
            var c = o(676594);
            var d = o(87630);
            var u = o(537469);
            var s = n(o(908081));
            var f = n(o(324093));
            var p = o(626194);
            var m = o(163139);
            var C = o(741703);
            var _ = o(548360);
            var g = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var o = v(t);
                if (o && o.has(e)) {
                    return o.get(e);
                }
                var n = {};
                var a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e) {
                    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
                        var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                        if (r && (r.get || r.set)) {
                            Object.defineProperty(n, l, r);
                        } else {
                            n[l] = e[l];
                        }
                    }
                }
                n.default = e;
                if (o) {
                    o.set(e, n);
                }
                return n;
            }(o(667294));
            var h = n(o(156720));
            var E = o(655241);

            function v (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var o = new WeakMap();
                return (v = function (e) {
                    if (e) {
                        return o;
                    } else {
                        return t;
                    }
                })(e);
            }
            const b = {
                marginBottom: "ngycyvoj"
            };

            function O (e, t) {
                const {
                    onBack: o
                } = e;
                const n = (0, E.useModelValues)(e.product, ["id", "catalogWid"]);
                const [v, O] = (0, g.useState)({});
                const [P, y] = (0, g.useState)("");
                const [I, T] = (0, g.useState)("");
                const [S, k] = (0, g.useState)(true);
                const A = e => {
                    var t;
                    var o;
                    if (((t = e.complianceInfo) === null || t === undefined ? undefined : t.countryCodeOrigin) === String(C.SyntheticCountryCode.NotApplicable)) {
                        return Promise.resolve(g.default.createElement("div", null, g.default.createElement("div", {
                            className: (0, h.default)(b)
                        }, _.fbt._("Not Applicable", null, {
                            hk: "2k1klN"
                        })), g.default.createElement("div", null, _.fbt._("Item is a service or non-physical good", null, {
                            hk: "3uDBY7"
                        }))));
                    } else {
                        return (0, u.getCountryName)((o = e.complianceInfo) === null || o === undefined ? undefined : o.countryCodeOrigin, u.COUNTRY_FILTER_TYPE.META_RECOGNIZED);
                    }
                };
                (0, g.useEffect)(() => {
                    function e () {
                        return (e = (0, l.default)(function* () {
                            yield i.CatalogCollection.findProduct({
                                catalogWid: n.catalogWid,
                                productId: n.id.toString(),
                                productMsgMediaData: (0, m.unproxy)(n).productMsgMediaData,
                                shouldFetchComplianceFields: true
                            });
                            const e = i.CatalogCollection.get(n.catalogWid);
                            const t = (0, r.default)(e, "catalog").productCollection.get(n.id);
                            if (t) {
                                var o;
                                var a;
                                var l;
                                var c;
                                var d;
                                var s;
                                var f;
                                var p;
                                var C;
                                var _;
                                var g;
                                var h;
                                var E;
                                var v;
                                const e = yield A(t);
                                const n = yield(0, u.getCountryName)((o = t.complianceInfo) === null || o === undefined || (a = o.importerAddress) === null || a === undefined ? undefined : a.countryCode, u.COUNTRY_FILTER_TYPE.META_RECOGNIZED);
                                const r = {
                                    importerName: ((l = t.complianceInfo) === null || l === undefined ? undefined : l.importerName) || "",
                                    countryCodeOrigin: ((c = t.complianceInfo) === null || c === undefined ? undefined : c.countryCodeOrigin) || "",
                                    importerAddress: {
                                        street1: ((d = t.complianceInfo) === null || d === undefined || (s = d.importerAddress) === null || s === undefined ? undefined : s.street1) || "",
                                        street2: ((f = t.complianceInfo) === null || f === undefined || (p = f.importerAddress) === null || p === undefined ? undefined : p.street2) || "",
                                        city: ((C = t.complianceInfo) === null || C === undefined || (_ = C.importerAddress) === null || _ === undefined ? undefined : _.city) || "",
                                        region: ((g = t.complianceInfo) === null || g === undefined || (h = g.importerAddress) === null || h === undefined ? undefined : h.region) || "",
                                        postalCode: ((E = t.complianceInfo) === null || E === undefined || (v = E.importerAddress) === null || v === undefined ? undefined : v.postalCode) || ""
                                    }
                                };
                                O(r);
                                k(false);
                                y(e);
                                T(n);
                            } else {
                                __LOG__(3)`Unable to fetch compliance for product: ${n.id}`;
                            }
                        })).apply(this, arguments);
                    }! function () {
                        e.apply(this, arguments);
                    }();
                }, []);
                const w = () => {
                    if (o) {
                        return o();
                    }
                };
                const {
                    countryCodeOrigin: M,
                    importerName: L,
                    importerAddress: N
                } = v;
                return g.default.createElement(s.default, {
                    ref: t,
                    onDrop: w,
                    theme: "striped",
                    key: "product-details-drawer"
                }, g.default.createElement(p.DrawerHeader, {
                    testid: "drawer-title-profile",
                    title: _.fbt._("More information", null, {
                        hk: "2JHvi1"
                    }),
                    onBack: w,
                    type: p.DRAWER_HEADER_TYPE.SMALL
                }), g.default.createElement(f.default, {
                    theme: S ? "center-content" : undefined
                }, S ? g.default.createElement(d.ComplianceInfoLoading, null) : g.default.createElement(d.ComplianceInfoGroup, null, g.default.createElement(d.ComplianceInfoPrimitiveField, {
                    value: P,
                    label: _.fbt._("Country of Origin", null, {
                        hk: "2yl0F7"
                    })
                }), M && ![c.COMPLIANCE_INFO_CODES.INDIA, C.SyntheticCountryCode.NotApplicable].includes(M) ? g.default.createElement(g.default.Fragment, null, g.default.createElement(d.ComplianceInfoPrimitiveField, {
                    value: L,
                    label: _.fbt._("Name of Importer", null, {
                        hk: "3gfW35"
                    })
                }), g.default.createElement(d.ComplianceInfoStructuralField, {
                    valuesMap: (0, a.default)({
                        importerAddressCountryNameOrigin: I
                    }, N),
                    keys: ["street1", "street2", "city", "region", "postalCode", "importerAddressCountryNameOrigin"],
                    label: _.fbt._("Address of Importer", null, {
                        hk: "Kxo8I"
                    })
                })) : null)));
            }
            var P = (0, g.forwardRef)(O);
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
                const [n, r] = (0, u.useState)(null);
                const {
                    value: i,
                    set: c
                } = (0, s.default)(true);
                const d = (0, p.default)();
                (0, u.useEffect)(() => {
                    (function () {
                        var e = (0, a.default)(function* () {
                            try {
                                const e = yield l.default.getCypher(t);
                                if (d.aborted) {
                                    return;
                                }
                                r(e);
                            } catch (e) {
                                __LOG__(4, true, new Error(), true)`[direct-connection] Setting cypher failed in PDP ${e}`;
                                SEND_LOGS("direct-connection-setting-cypher-failed-in-pdp");
                            }
                            if (!d.aborted) {
                                c(false);
                            }
                        });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })()();
                }, [t, c, d]);
                if (i || n == null) {
                    return null;
                }
                return u.default.createElement(_, {
                    businessDirectConnection: n,
                    catalogWid: t,
                    postcodeChangeSuccess: o
                });
            };
            var a = n(o(348926));
            var l = n(o(418950));
            var r = n(o(196554));
            var i = o(114850);
            var c = n(o(803209));
            var d = o(548360);
            var u = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var o = m(t);
                if (o && o.has(e)) {
                    return o.get(e);
                }
                var n = {};
                var a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e) {
                    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
                        var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                        if (r && (r.get || r.set)) {
                            Object.defineProperty(n, l, r);
                        } else {
                            n[l] = e[l];
                        }
                    }
                }
                n.default = e;
                if (o) {
                    o.set(e, n);
                }
                return n;
            }(o(667294));
            var s = n(o(505447));
            var f = o(655241);
            var p = n(o(895851));

            function m (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var o = new WeakMap();
                return (m = function (e) {
                    if (e) {
                        return o;
                    } else {
                        return t;
                    }
                })(e);
            }

            function C (e) {
                let {
                    catalogWid: t,
                    postcodeChangeSuccess: o,
                    postcode: n
                } = e;
                return u.default.createElement(r.default, {
                    onClick: () => {
                        i.ModalManager.open(u.default.createElement(c.default, {
                            existingPostcode: n,
                            catalogId: t,
                            onCancel: () => i.ModalManager.close(),
                            onSuccess: () => {
                                i.ModalManager.close();
                                o();
                            }
                        }));
                    }
                }, d.fbt._("Change", null, {
                    hk: "3d8zl4"
                }));
            }

            function _ (e) {
                let {
                    businessDirectConnection: t,
                    catalogWid: o,
                    postcodeChangeSuccess: n
                } = e;
                const {
                    postcode: a
                } = (0, f.useModelValues)(t, ["postcode"]);
                if (a == null) {
                    return null;
                } else {
                    return u.default.createElement(u.default.Fragment, null, d.fbt._("Not available in {area-postcode}.", [d.fbt._param("area-postcode", a)], {
                        hk: "4tHAo0"
                    }), " ", u.default.createElement(C, {
                        postcode: a,
                        catalogWid: o,
                        postcodeChangeSuccess: n
                    }));
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
                const n = (0, u.useContext)(l.DrawerContext);
                const p = (0, f.useModelValues)(e.product, ["productImageCollection", "productMsgMediaData", "catalogWid", "imageCdnUrl"]);
                const C = p.lazyloadProductImageCollection().toArray();
                return u.default.createElement("div", {
                    className: (0, s.default)(m)
                }, u.default.createElement(r.default, {
                    images: C,
                    fetching: o,
                    onClick: t ? (e, t) => {
                        (0, c.logDetailImageClick)({
                            product: (0, d.unproxy)(p),
                            catalogContext: (0, i.getProductCatalogContext)(n)
                        });
                        const o = {
                            activeProductImage: t,
                            productImageCollection: p.lazyloadProductImageCollection(),
                            getZoomNode: () => e,
                            product: p
                        };
                        a.Cmd.productImageViewerModal(o, (0, i.getProductCatalogSessionId)(n));
                    } : null,
                    renderFallback: !t,
                    fallbackMediaData: p.productMsgMediaData
                }));
            };
            var a = o(780549);
            var l = o(568550);
            var r = n(o(760157));
            var i = o(932523);
            var c = o(77548);
            var d = o(163139);
            var u = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var o = p(t);
                if (o && o.has(e)) {
                    return o.get(e);
                }
                var n = {};
                var a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e) {
                    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
                        var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                        if (r && (r.get || r.set)) {
                            Object.defineProperty(n, l, r);
                        } else {
                            n[l] = e[l];
                        }
                    }
                }
                n.default = e;
                if (o) {
                    o.set(e, n);
                }
                return n;
            }(o(667294));
            var s = n(o(156720));
            var f = o(655241);

            function p (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var o = new WeakMap();
                return (p = function (e) {
                    if (e) {
                        return o;
                    } else {
                        return t;
                    }
                })(e);
            }
            const m = {
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
            var a = n(o(692629));
            var l = o(81644);
            var r = o(118612);
            var i = o(548360);
            var c = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var o = u(t);
                if (o && o.has(e)) {
                    return o.get(e);
                }
                var n = {};
                var a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e) {
                    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
                        var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                        if (r && (r.get || r.set)) {
                            Object.defineProperty(n, l, r);
                        } else {
                            n[l] = e[l];
                        }
                    }
                }
                n.default = e;
                if (o) {
                    o.set(e, n);
                }
                return n;
            }(o(667294));
            var d = n(o(156720));

            function u (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var o = new WeakMap();
                return (u = function (e) {
                    if (e) {
                        return o;
                    } else {
                        return t;
                    }
                })(e);
            }
            const s = {
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
                const u = i.fbt._("Report this product?", null, {
                    hk: "3IDG0p"
                });
                const p = c.default.createElement("div", {
                    key: "ReportProductChoicePopup-desc"
                }, i.fbt._("We will review the product and if it does not meet our guidelines, it will be removed.", null, {
                    hk: "2CRdfl"
                }));
                const m = c.default.createElement(a.default, {
                    testid: "popup-controls-report",
                    type: "secondary",
                    onClick: () => n(),
                    key: "ReportProductChoicePopup-reportBtn"
                }, i.fbt._("Report Product", null, {
                    hk: "3XLjyb"
                }));
                const C = c.default.createElement(a.default, {
                    type: "secondary",
                    onClick: o,
                    key: 0
                }, i.fbt._("Cancel", null, {
                    hk: "H0gNq"
                }));
                const _ = c.default.createElement("div", {
                    className: (0, d.default)(s)
                }, c.default.createElement("div", {
                    className: (0, d.default)(f)
                }, m), c.default.createElement("div", {
                    className: (0, d.default)(f)
                }, C));
                return c.default.createElement(l.HotKeys, {
                    ref: t,
                    handlers: {
                        escape: o
                    }
                }, c.default.createElement(r.Modal, {
                    title: u,
                    actions: _,
                    children: p
                }));
            }
            var m = (0, c.forwardRef)(p);
            t.default = m;
        },
        237375: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = undefined;
            var a = o(15842);
            var l = o(328620);
            var r = o(739071);
            var i = n(o(329982));
            var c = o(77548);
            var d = n(o(112155));
            var u = n(o(484375));
            var s = o(316348);
            var f = o(555622);
            var p = o(163139);
            var m = o(390737);
            var C = o(548360);
            var _ = n(o(667294));
            class g extends i.default {
                constructor() {
                    var e;
                    super(...arguments);
                    e = this;
                    this._submitReason = e => {
                        const {
                            product: t
                        } = this.props;
                        return (0, r.reportProduct)(t.catalogWid, t.id.toString(), e);
                    };
                    this._handleDelete = () => {
                        this.end();
                    };
                    this._handleTellUsMoreSubmit = e => {
                        f.QPL.markerStart(s.QuickLogMarkerId.WHATSAPP_PRODUCT_REPORT);
                        this._handleShowSubmittedToast(e);
                    };
                    this._handleReport = () => {
                        this.push(_.default.createElement(u.default, {
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
                        let o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, l.genId)();
                        const {
                            product: n,
                            sessionId: r
                        } = e.props;
                        const i = e._submitReason(t);
                        const d = new l.ActionType(C.fbt._("Reporting product", null, {
                            hk: "4qusYv"
                        }));
                        const u = i.then(() => {
                            (0, c.logReportProductSuccess)({
                                product: (0, p.unproxy)(n),
                                catalogSessionId: r,
                                reason: t || ""
                            });
                            f.QPL.markerEnd(s.QuickLogMarkerId.WHATSAPP_PRODUCT_REPORT, a.QuickLogActionType.SUCCESS);
                            return new l.ActionType(C.fbt._("Thanks for your feedback", null, {
                                hk: "1vRsPv"
                            }).toString() + ". " + C.fbt._("Your report has now been submitted.", null, {
                                hk: "40tL3T"
                            }).toString());
                        }).catch(() => {
                            (0, c.logReportProductFailure)({
                                product: (0, p.unproxy)(n),
                                catalogSessionId: r,
                                reason: t || ""
                            });
                            f.QPL.markerEnd(s.QuickLogMarkerId.WHATSAPP_PRODUCT_REPORT, a.QuickLogActionType.FAIL);
                            __LOG__(3)`error submitting product report`;
                            return new l.ActionType(C.fbt._("Couldn't report product", null, {
                                hk: "11JN2U"
                            }), {
                                actionText: C.fbt._("Retry", null, {
                                    hk: "2jS9Tg"
                                }),
                                actionHandler: () => e._handleShowSubmittedToast(t, o)
                            });
                        });
                        m.ToastManager.open(_.default.createElement(l.ActionToast, {
                            id: o,
                            initialAction: d,
                            pendingAction: u
                        }));
                        e._handleReportSubmitted();
                        return i;
                    };
                }
                componentDidMount() {
                    this.push(_.default.createElement(d.default, {
                        onReport: this._handleReport,
                        onPopupCancel: this._handlePopupCancel,
                        onCancel: this._handleCancel
                    }));
                }
            }
            t.default = g;
        },
        484375: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = undefined;
            var a = n(o(692629));
            var l = o(81644);
            var r = o(118612);
            var i = o(695431);
            var c = o(625786);
            var d = o(390737);
            var u = o(548360);
            var s = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var o = p(t);
                if (o && o.has(e)) {
                    return o.get(e);
                }
                var n = {};
                var a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e) {
                    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
                        var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                        if (r && (r.get || r.set)) {
                            Object.defineProperty(n, l, r);
                        } else {
                            n[l] = e[l];
                        }
                    }
                }
                n.default = e;
                if (o) {
                    o.set(e, n);
                }
                return n;
            }(o(667294));
            var f = n(o(156720));

            function p (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var o = new WeakMap();
                return (p = function (e) {
                    if (e) {
                        return o;
                    } else {
                        return t;
                    }
                })(e);
            }
            const m = {
                display: "p357zi0d"
            };
            const C = {
                position: "g0rxnol2",
                flex: "a1m9qzja"
            };
            const _ = {
                display: "l7jjieqr"
            };
            const g = ["NO_MATCH", "SPAM", "ILLEGAL", "SCAM", "KNOCKOFF", "OTHER"];

            function h (e, t) {
                const {
                    onCancel: o,
                    onTellUsMoreSubmit: n
                } = e;
                const [p, h] = (0, s.useState)(null);
                const v = () => {
                    if (!(o == null)) {
                        o();
                    }
                };
                const b = u.fbt._("Tell us more", null, {
                    hk: "2fZHoO"
                });
                const O = s.default.createElement("div", {
                    className: (0, f.default)(m)
                }, s.default.createElement("ul", {
                    className: (0, f.default)(C)
                }, g.map(e => s.default.createElement("li", {
                    key: `ReportProductReasonPopup-${e}-option`
                }, s.default.createElement(i.RadioWithLabel, {
                    name: e,
                    value: e,
                    label: s.default.createElement(E, {
                        reason: e
                    }),
                    checked: p === e,
                    onChange: () => {
                        h(e);
                    }
                })))));
                const P = s.default.createElement(a.default, {
                    testid: "popup-controls-submit",
                    type: "primary",
                    onClick: () => {
                        if (p) {
                            n(p);
                        } else {
                            d.ToastManager.open(s.default.createElement(c.Toast, {
                                msg: u.fbt._("Please select a reason.", null, {
                                    hk: "3UgUaa"
                                })
                            }));
                        }
                    },
                    key: "ReportProductReasonPopup-submitButton",
                    disabled: !p
                }, u.fbt._("Submit", null, {
                    hk: "3npRPm"
                }));
                const y = s.default.createElement(a.default, {
                    type: "secondary",
                    testid: "popup-controls-cancel",
                    onClick: v,
                    key: "ReportProductReasonPopup-cancelButton"
                }, u.fbt._("Cancel", null, {
                    hk: "H0gNq"
                }));
                const I = s.default.createElement("div", {
                    className: (0, f.default)(_)
                }, y, P);
                return s.default.createElement(l.HotKeys, {
                    ref: t,
                    handlers: {
                        escape: v
                    }
                }, s.default.createElement(r.Modal, {
                    title: b,
                    actions: I,
                    children: O
                }));
            }

            function E (e) {
                const {
                    reason: t
                } = e;
                switch (t) {
                    case "NO_MATCH":
                        return u.fbt._("The pictures or descriptions don't match the item", null, {
                            hk: "2ifaot"
                        });
                    case "SPAM":
                        return u.fbt._("This is spam", null, {
                            hk: "hjxQJ"
                        });
                    case "ILLEGAL":
                        return u.fbt._("This is abusive, harmful or illegal", null, {
                            hk: "3xz9jr"
                        });
                    case "SCAM":
                        return u.fbt._("This is fraud or a scam", null, {
                            hk: "2iFRd8"
                        });
                    case "KNOCKOFF":
                        return u.fbt._("This appears to be a knockoff or counterfeit item", null, {
                            hk: "UiFcs"
                        });
                    case "OTHER":
                        return u.fbt._("Other", null, {
                            hk: "1Kn4LY"
                        });
                }
            }
            var v = (0, s.forwardRef)(h);
            t.default = v;
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
                    hideIncompleteRows: m,
                    productsToShow: C,
                    businessProfile: _
                } = e;
                const g = p.default.createElement(l.default, {
                    onViewShopClick: () => {
                        (0, s.logShopsManagementEvent)(f.SHOPS_MANAGEMENT_ACTION.ACTION_CLICK_VIEW_SHOPS_FROM_EDIT_BIZ_PROFILE);
                    },
                    onCommerceManagerClick: () => {
                        (0, s.logShopsManagementEvent)(f.SHOPS_MANAGEMENT_ACTION.ACTION_CLICK_COMMERCE_MANAGER_FROM_EDIT_BIZ_PROFILE);
                    },
                    onCancelClick: () => {
                        (0, s.logShopsManagementEvent)(f.SHOPS_MANAGEMENT_ACTION.ACTION_CLICK_CANCEL_FROM_EDIT_BIZ_PROFILE);
                    }
                });
                return p.default.createElement(u.default, {
                    onProductDetail: function (e) {
                        if (t) {
                            c.ModalManager.open(g);
                            (0, s.logShopsManagementEvent)(f.SHOPS_MANAGEMENT_ACTION.ACTION_CLICK_SHOPS_PRODUCT_PREVIEW_TILE, {
                                shouldLogJid: false
                            });
                        } else {
                            const t = new URL((0, a.default)(e.url, "product.url"), `https://${d.HOSTNAME.FACEBOOK}`);
                            i.default.open(String(t));
                        }
                    },
                    onProductCatalog: function () {
                        if (t) {
                            c.ModalManager.open(g);
                            (0, s.logShopsManagementEvent)(f.SHOPS_MANAGEMENT_ACTION.ACTION_CLICK_MANAGE_SHOPS);
                        } else {
                            (0, r.goToShop)(_);
                        }
                    },
                    catalog: o,
                    subtitle: n,
                    hideIncompleteRows: m,
                    productsToShow: C,
                    showShopsLogo: true
                });
            };
            var a = n(o(670983));
            var l = n(o(586406));
            var r = o(542358);
            var i = n(o(524173));
            var c = o(114850);
            var d = o(728);
            var u = n(o(213393));
            var s = o(748483);
            var f = o(896492);
            var p = n(o(667294));
        },
        491606: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.handleCollectionAppeal = function () {
                return S.apply(this, arguments);
            };
            t.handleCollectionDelete = function (e, t, o) {
                return new Promise((n, a) => {
                    p.ModalManager.open(P.default.createElement(u.ConfirmPopup, {
                        title: O.fbt._("Delete Collection", null, {
                            hk: "2y3JZ4"
                        }),
                        okText: (0, s.default)("OK"),
                        cancelText: O.fbt._("Cancel", null, {
                            hk: "H0gNq"
                        }),
                        onOK: () => {
                            p.ModalManager.close();
                            (function () {
                                return T.apply(this, arguments);
                            })(e, t, o).then(e => n(e)).catch(e => a(e));
                        },
                        onCancel: () => {
                            p.ModalManager.close();
                            n(false);
                        }
                    }, P.default.createElement("div", null, O.fbt._("When you delete this collection, items in the collection will not be deleted.", null, {
                        hk: "192Jcv"
                    }))));
                });
            };
            t.handleCollectionReorder = function () {
                return w.apply(this, arguments);
            };
            t.handleCollectionSave = function (e, t, o, n, a, l) {
                let r;
                E.QPL.markerPoint(h.QuickLogMarkerId.WHATSAPP_COLLECTION_EDIT, "datasource_start");
                r = t ? (0, g.editCollection)(t.id.toString() || "", o === t.name ? undefined : o, false, n.map(e => e.id.toString()), a.map(e => e.id.toString()), l.session.toString()).then(l => {
                    E.QPL.markerPoint(h.QuickLogMarkerId.WHATSAPP_COLLECTION_EDIT, "datasource_end");
                    t.name = o;
                    t.reviewStatus = l.reviewStatus;
                    e.collections.replaceId(t.id, l.id);
                    if (!(n.length === 0 && a.length === 0)) {
                        t.productCollection.reset();
                        t.afterCursor = undefined;
                        e.collections.reset();
                        e.collections.afterCursor = "";
                    }
                    return true;
                }) : (0, g.createCollection)(o, n.map(e => e.id.toString()), l.session.toString()).then(t => {
                    E.QPL.markerPoint(h.QuickLogMarkerId.WHATSAPP_COLLECTION_EDIT, "datasource_end");
                    (0, _.logCollectionCreated)({
                        catalogContext: l,
                        collectionId: t.id,
                        productCount: n.length
                    });
                    e.collections.reset();
                    e.collections.afterCursor = "";
                    return true;
                });
                return r.catch(e => {
                    const t = e => {
                        b.ToastManager.open(P.default.createElement(v.Toast, {
                            msg: e,
                            id: (0, v.genId)("catalog_save_collection_failed")
                        }));
                    };
                    let o = O.fbt._("Failed to save collection", null, {
                        hk: "3Chwhp"
                    });
                    if (e.text === "not-acceptable") {
                        if (e.fieldName === "products" && e.fieldReason === "duplicate") {
                            o = O.fbt._("You already have a collection with this group of items. Add or delete items to make a different group.", null, {
                                hk: "1fZXaY"
                            });
                        }
                        if (e.fieldName === "collection" && e.fieldReason === "empty") {
                            o = O.fbt._("A collection must have at least one item in it", null, {
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
                (0, m.logDeleteProductClick)(t, 1, o);
                return new Promise((a, l) => {
                    p.ModalManager.open(P.default.createElement(u.ConfirmPopup, {
                        title: O.fbt._("Delete Item", null, {
                            hk: "20DBg1"
                        }),
                        okText: (0, s.default)("OK"),
                        cancelText: O.fbt._("Cancel", null, {
                            hk: "H0gNq"
                        }),
                        onOK: () => {
                            p.ModalManager.close();
                            E.QPL.markerStart(h.QuickLogMarkerId.WHATSAPP_PRODUCT_DELETE, {
                                annotations: {
                                    string: {
                                        EntryPoint: n
                                    }
                                }
                            });
                            (function () {
                                return y.apply(this, arguments);
                            })(e, t, o).then(e => {
                                E.QPL.markerEnd(h.QuickLogMarkerId.WHATSAPP_PRODUCT_DELETE, r.QuickLogActionType.SUCCESS);
                                a(e);
                            }).catch(e => {
                                E.QPL.markerEnd(h.QuickLogMarkerId.WHATSAPP_PRODUCT_DELETE, r.QuickLogActionType.FAIL);
                                l(e);
                            });
                        },
                        onCancel: () => {
                            p.ModalManager.close();
                            a(false);
                        }
                    }, P.default.createElement("div", null, O.fbt._("Are you sure you want to delete this item from your catalog?", null, {
                        hk: "2WwNSA"
                    }))));
                });
            };
            t.handleProductVisibilityChange = function (e, t, o, n) {
                const a = t.id.toString();
                const l = !t.isHidden;
                if (l) {
                    (0, m.logCatalogProductHideClick)(a, o);
                } else {
                    (0, m.logCatalogProductShowClick)(a, o);
                }
                return new Promise((i, c) => {
                    const d = t.isHidden ? O.fbt._("Show item in your catalog?", null, {
                        hk: "VfDKM"
                    }) : O.fbt._("Hide item in your catalog?", null, {
                        hk: "1KmslI"
                    });
                    p.ModalManager.open(P.default.createElement(u.ConfirmPopup, {
                        okText: (0, s.default)("OK"),
                        cancelText: O.fbt._("Cancel", null, {
                            hk: "H0gNq"
                        }),
                        onOK: () => {
                            E.QPL.markerStart(h.QuickLogMarkerId.WHATSAPP_PRODUCT_SET_VISIBLE, {
                                annotations: {
                                    string: {
                                        EntryPoint: n
                                    }
                                }
                            });
                            p.ModalManager.close();
                            (function () {
                                return I.apply(this, arguments);
                            })(e, t).then(() => {
                                E.QPL.markerEnd(h.QuickLogMarkerId.WHATSAPP_PRODUCT_SET_VISIBLE, r.QuickLogActionType.SUCCESS);
                                if (l) {
                                    (0, m.logCatalogProductHideSuccess)(a, o);
                                } else {
                                    (0, m.logCatalogProductShowSuccess)(a, o);
                                }
                                i(true);
                            }).catch(e => {
                                E.QPL.markerEnd(h.QuickLogMarkerId.WHATSAPP_PRODUCT_SET_VISIBLE, r.QuickLogActionType.FAIL);
                                if (l) {
                                    (0, m.logCatalogProductHideFailed)(a, o);
                                } else {
                                    (0, m.logCatalogProductShowFailed)(a, o);
                                }
                                c(e);
                            });
                        },
                        onCancel: () => {
                            p.ModalManager.close();
                            if (l) {
                                (0, m.logCatalogProductHideCancelled)(a, o);
                            } else {
                                (0, m.logCatalogProductShowCancelled)(a, o);
                            }
                            i(false);
                        }
                    }, P.default.createElement("div", null, d)));
                });
            };
            var a = n(o(348926));
            var l = o(122583);
            var r = o(15842);
            var i = o(984330);
            var c = o(739071);
            var d = o(172949);
            var u = o(103440);
            var s = n(o(395767));
            var f = o(791357);
            var p = o(114850);
            var m = o(77548);
            var C = o(530485);
            var _ = o(854682);
            var g = o(535190);
            var h = o(316348);
            var E = o(555622);
            var v = o(625786);
            var b = o(390737);
            var O = o(548360);
            var P = n(o(667294));

            function y () {
                return (y = (0, a.default)(function* (e, t, o) {
                    try {
                        yield(0, c.deleteProducts)([t.id.toString()]);
                        (0, m.logDeleteProductSuccess)(t, 1, o);
                        e.productCollection.evictImagesFromCache(t.id.toString());
                        e.productCollection.remove(t.id.toString());
                        if (e.collections) {
                            e.collections.forEach(e => e.productCollection.remove(t.id.toString()));
                        }
                        return true;
                    } catch (e) {
                        return (0, l.filteredCatch)(i.ServerStatusCodeError, e => {
                            (0, m.logDeleteProductFailed)(t, 1, o, e.statusCode);
                            b.ToastManager.open(P.default.createElement(v.Toast, {
                                msg: O.fbt._("Failed to delete product", null, {
                                    hk: "18E03X"
                                }),
                                id: (0, v.genId)("catalog_delete_product_failed")
                            }));
                            return false;
                        })(e);
                    }
                })).apply(this, arguments);
            }

            function I () {
                return (I = (0, a.default)(function* (e, t) {
                    yield(0, d.productVisibilitySet)([{
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
                return (T = (0, a.default)(function* (e, t, o) {
                    try {
                        yield(0, g.deleteCollection)(t.id.toString(), o.session.sessionId.toString());
                        e.collections.remove(t.id.toString());
                        (0, _.logCollectionDeleted)({
                            catalogContext: o,
                            collectionId: t.id
                        });
                        return true;
                    } catch (e) {
                        return (0, l.filteredCatch)(i.ServerStatusCodeError, e => {
                            __LOG__(4, true, new Error(), true)`Failed to delete collection, error: ${e}`;
                            SEND_LOGS("Deleteing collection failed");
                            b.ToastManager.open(P.default.createElement(v.Toast, {
                                msg: O.fbt._("Failed to delete collection", null, {
                                    hk: "S7UrR"
                                }),
                                id: (0, v.genId)("catalog_delete_product_failed")
                            }));
                            return false;
                        })(e);
                    }
                })).apply(this, arguments);
            }

            function S () {
                return (S = (0, a.default)(function* (e, t) {
                    E.QPL.markerPoint(h.QuickLogMarkerId.WHATSAPP_COLLECTION_APPEAL, "datasource_start");
                    yield(0, g.appealCollection)(e.id.toString(), t);
                    e.set({
                        canAppeal: false,
                        reviewStatus: C.PRODUCT_REVIEW_STATUS.PENDING
                    });
                    E.QPL.markerPoint(h.QuickLogMarkerId.WHATSAPP_COLLECTION_APPEAL, "datasource_end");
                })).apply(this, arguments);
            }
            const k = {
                OUT_OF_SYNC: {
                    title: O.fbt._("Changes cannot be saved", null, {
                        hk: "2N3tQ7"
                    }),
                    description: O.fbt._("Please refresh and try again.", null, {
                        hk: "3gfRqz"
                    }),
                    okText: O.fbt._("Reload", null, {
                        hk: "3hzNTy"
                    })
                },
                SERVER_ERROR: {
                    title: O.fbt._("Error", null, {
                        hk: "1jfaqb"
                    }),
                    description: O.fbt._("Something went wrong. Please try again.", null, {
                        hk: "CZwf"
                    }),
                    okText: O.fbt._("OK", null, {
                        hk: "2jkNuT"
                    })
                },
                HTTP_NETWORK_ERROR: {
                    title: O.fbt._("No internet connection", null, {
                        hk: "4psTpe"
                    }),
                    description: O.fbt._("Check your internet connection and try again.", null, {
                        hk: "2QcT2T"
                    }),
                    okText: O.fbt._("OK", null, {
                        hk: "3si9C7"
                    })
                }
            };
            const A = e => e instanceof f.HttpNetworkError ? k.HTTP_NETWORK_ERROR : e instanceof g.CollectionReorderError ? k.OUT_OF_SYNC : k.SERVER_ERROR;

            function w () {
                return (w = (0, a.default)(function* (e, t) {
                    try {
                        const o = yield(0, g.reorderCollection)(e);
                        if (o) {
                            (0, _.logCollectionReorder)({
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
                        } = A(e);
                        return new Promise((a, l) => {
                            p.ModalManager.open(P.default.createElement(u.ConfirmPopup, {
                                title: t,
                                okText: n,
                                onOK: () => {
                                    p.ModalManager.close();
                                    if (e instanceof f.HttpNetworkError) {
                                        l(e);
                                    } else {
                                        a(false);
                                    }
                                }
                            }, P.default.createElement("div", null, o)), {
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
                const n = (0, c.default)(d.addItemButton, e.theme === "default" && d.themeDefault, e.theme === "in-list" && d.themeInList, e.theme === "collections" && d.themeCollections);
                const u = i.default.createElement(l.default, {
                    title: r.fbt._("Add new item", null, {
                        hk: "2Tc6p3"
                    }),
                    onClick: () => {},
                    xstyle: d.addIcon
                }, i.default.createElement(i.default.Fragment, null));
                return i.default.createElement(a.default, {
                    theme: "add-item",
                    image: u,
                    customImage: true,
                    primary: e.title || r.fbt._("Add new item", null, {
                        hk: "2Tc6p3"
                    }),
                    className: n,
                    onClick: t,
                    idle: e.idle,
                    testid: o
                });
            };
            var a = n(o(170206));
            var l = n(o(625903));
            var r = o(548360);
            var i = n(o(667294));
            var c = n(o(156720));
            const d = {
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
                const r = () => {
                    c.ModalManager.open(m.default.createElement(a.default, {
                        collection: t
                    }));
                };
                switch (t.reviewStatus) {
                    case u.PRODUCT_REVIEW_STATUS.PENDING:
                        return m.default.createElement("div", {
                            className: (0, C.default)(_.pendingBanner)
                        }, p.fbt._("This collection is being reviewed. Once it's approved, your customers will see it in your catalog.", null, {
                            hk: "47RxvH"
                        }), m.default.createElement("div", {
                            className: (0, C.default)(_.iconContainerPending)
                        }, m.default.createElement(i.InfoIcon, null)));
                    case u.PRODUCT_REVIEW_STATUS.REJECTED:
                        if ((0, l.canAppealCollections)()) {
                            return m.default.createElement(E, {
                                collection: t,
                                onRename: n,
                                onAppeal: r
                            });
                        } else {
                            return m.default.createElement(h, {
                                onRename: n
                            });
                        }
                    default:
                        return null;
                }
            };
            t.getCollectionIntegrityHeight = function (e) {
                if ((0, l.canAppealCollections)() && e.reviewStatus === u.PRODUCT_REVIEW_STATUS.REJECTED) {
                    return d.PRODUCT_LIST_ITEM_HEIGHT * 2 + 10;
                } else {
                    return d.PRODUCT_LIST_ITEM_HEIGHT + 10;
                }
            };
            var a = n(o(464624));
            var l = o(72696);
            var r = n(o(196554));
            var i = o(975279);
            var c = o(114850);
            var d = o(899841);
            var u = o(530485);
            var s = o(737106);
            var f = o(667738);
            var p = o(548360);
            var m = n(o(667294));
            var C = n(o(156720));
            const _ = {
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

            function g (e) {
                return m.default.createElement("div", {
                    className: (0, C.default)(_.iconContainerRejected, e.withAppeal && _.iconContainerRejectedWithAppeal)
                }, m.default.createElement(i.InfoIcon, null));
            }

            function h (e) {
                let {
                    onRename: t
                } = e;
                const o = (0, f.useIsDarkTheme)();
                return m.default.createElement("div", {
                    className: (0, C.default)(_.rejectedBanner, o && _.rejectedBannerDarkBackground)
                }, p.fbt._("This collection wasn't approved because it doesn't follow our guidelines.", null, {
                    hk: "1321OC"
                }), m.default.createElement(r.default, {
                    onClick: t
                }, p.fbt._("Rename", null, {
                    hk: "2U6ctb"
                })), m.default.createElement(g, {
                    withAppeal: false
                }));
            }

            function E (e) {
                let {
                    collection: t,
                    onRename: o,
                    onAppeal: n
                } = e;
                const a = (t.rejectReason || "other_violation").toLowerCase();
                const l = (0, s.getRejectedCollectionCopy)(a, t.commerceUrl);
                const i = (0, f.useIsDarkTheme)();
                const c = m.default.createElement(r.default, {
                    onClick: o
                }, p.fbt._("rename the collection", null, {
                    hk: "2j5eIB"
                }));
                if (t.canAppeal) {
                    const e = m.default.createElement(r.default, {
                        onClick: n
                    }, p.fbt._("request another review", null, {
                        hk: "2BSEoy"
                    }));
                    const t = p.fbt._("You can {rename_collection_link} or {request_another_review_link}.", [p.fbt._param("rename_collection_link", c), p.fbt._param("request_another_review_link", e)], {
                        hk: "49Nar9"
                    });
                    return m.default.createElement("div", {
                        className: (0, C.default)(_.rejectedBannerWithAppeal, i && _.rejectedBannerDarkBackground)
                    }, l.first, m.default.createElement("br", null), t, m.default.createElement(g, {
                        withAppeal: true
                    }));
                }
                const d = p.fbt._("You can {rename_collection_link}.", [p.fbt._param("rename_collection_link", c)], {
                    hk: "33lrOJ"
                });
                return m.default.createElement("div", {
                    className: (0, C.default)(_.rejectedBannerWithAppeal, i && _.rejectedBannerDarkBackground)
                }, l.second, m.default.createElement("br", null), d, m.default.createElement(g, {
                    withAppeal: true
                }));
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
                } = (0, d.useModelValues)(t, ["id", "hasCatalogCategories"]);
                (0, c.useEffect)(() => {
                    if (n == null) {
                        (0, a.queryCatalogHasCategories)(o).then(e => {
                            t.set({
                                hasCatalogCategories: e
                            });
                        });
                    }
                }, [n, o, t]);
                if (n === false || n == null) {
                    return null;
                }
                return c.default.createElement(l.TextDiv, {
                    xstyle: [s.banner, r.uiPadding.all16],
                    size: "13",
                    color: "dark"
                }, i.fbt._("Use WhatsApp on your phone to browse product categories.", null, {
                    hk: "7z4dS"
                }));
            };
            var a = o(172949);
            var l = o(180519);
            var r = o(676345);
            var i = o(548360);
            var c = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var o = u(t);
                if (o && o.has(e)) {
                    return o.get(e);
                }
                var n = {};
                var a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e) {
                    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
                        var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                        if (r && (r.get || r.set)) {
                            Object.defineProperty(n, l, r);
                        } else {
                            n[l] = e[l];
                        }
                    }
                }
                n.default = e;
                if (o) {
                    o.set(e, n);
                }
                return n;
            }(o(667294));
            n(o(156720));
            var d = o(655241);

            function u (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var o = new WeakMap();
                return (u = function (e) {
                    if (e) {
                        return o;
                    } else {
                        return t;
                    }
                })(e);
            }
            const s = {
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
                const n = (0, m.default)();
                const [C, h] = (0, p.useState)({
                    state: _.NOT_STARTED
                });
                const [E, v] = (0, p.useState)(e.existingPostcode);
                const b = e.existingPostcode === E;
                const O = function () {
                    var t = (0, a.default)(function* () {
                        if (typeof E == "string") {
                            h({
                                state: _.IN_PROGRESS
                            });
                            try {
                                const t = yield(0, l.verifyPostcode)(e.catalogId, E);
                                if (!n.aborted) {
                                    h({
                                        state: _.COMPLETED,
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
                                h({
                                    state: _.FAILED
                                });
                            }
                        }
                    });
                    return function () {
                        return t.apply(this, arguments);
                    };
                }();
                const P = (0, p.useCallback)(() => h({
                    state: _.NOT_STARTED
                }), []);
                const y = ((t = C.data) === null || t === undefined ? undefined : t.resultCode) === "unserviceable_location";
                let I = null;
                const T = f.fbt._("Enter a valid Pincode.", null, {
                    hk: "21I4U6"
                });
                if (((o = C.data) === null || o === undefined ? undefined : o.resultCode) === "invalid_postcode" || typeof E != "string" || E.length === 0 || E.search("^[0-9]{6}$") !== 0) {
                    I = T;
                }
                const S = C.state === _.IN_PROGRESS;
                const k = S || I != null || b;
                const A = () => {
                    if (!k) {
                        if (y) {
                            P();
                        } else {
                            O();
                        }
                    }
                };
                return p.default.createElement(r.ConfirmPopup, {
                    onOK: A,
                    title: y ? null : f.fbt._("Change Pincode", null, {
                        hk: "3R9hJZ"
                    }),
                    okDisabled: k,
                    okSpinner: S,
                    okText: y ? (0, d.default)("OK") : f.fbt._("CONTINUE", null, {
                        hk: "3HQEmh"
                    }),
                    onCancel: y ? null : e.onCancel,
                    cancelDisabled: S
                }, y ? p.default.createElement(s.Text, {
                    as: "p",
                    testid: "catalog_postcode_change_modal__unservicable-alert"
                }, f.fbt._("JioMart doesn't have items available in that area. You can try a different Pincode.", null, {
                    hk: "40eEp7"
                })) : p.default.createElement(p.default.Fragment, null, p.default.createElement(s.Text, {
                    as: "p",
                    xstyle: g.infoText
                }, f.fbt._("To see JioMart items available in a different area, enter the area's Pincode.", null, {
                    hk: "3u35ZR"
                })), p.default.createElement(u.RichTextField, {
                    testid: "catalog_postcode_change_modal__input",
                    onChange: e => {
                        let {
                            text: t
                        } = e;
                        o = t;
                        P();
                        return void v(o);
                        var o;
                    },
                    value: E,
                    managed: true,
                    editable: !S,
                    managedError: true,
                    selectOnMount: true,
                    focusOnMount: true,
                    error: I,
                    onEnter: () => {
                        A();
                    }
                }), p.default.createElement(s.Text, {
                    as: "p",
                    theme: "muted",
                    xstyle: g.privacyText
                }, f.fbt._("By continuing, you agree to share your Pincode and phone number with JioMart. Only JioMart can see your Pincode.", null, {
                    hk: "2XMhtN"
                }), " ", p.default.createElement(i.ExternalLink, {
                    href: (0, c.getJioMartPostcodeChangeLearnMoreLink)()
                }, f.fbt._("Learn More", null, {
                    hk: "27Rbeo"
                })))));
            };
            var a = n(o(348926));
            var l = o(946477);
            var r = o(103440);
            var i = o(753233);
            var c = o(258105);
            var d = n(o(395767));
            var u = o(202391);
            var s = o(180519);
            var f = o(548360);
            var p = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var o = C(t);
                if (o && o.has(e)) {
                    return o.get(e);
                }
                var n = {};
                var a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e) {
                    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
                        var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                        if (r && (r.get || r.set)) {
                            Object.defineProperty(n, l, r);
                        } else {
                            n[l] = e[l];
                        }
                    }
                }
                n.default = e;
                if (o) {
                    o.set(e, n);
                }
                return n;
            }(o(667294));
            n(o(156720));
            var m = n(o(895851));

            function C (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var o = new WeakMap();
                return (C = function (e) {
                    if (e) {
                        return o;
                    } else {
                        return t;
                    }
                })(e);
            }
            const _ = o(76672).Mirrored(["NOT_STARTED", "COMPLETED", "FAILED", "IN_PROGRESS"]);
            const g = {
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
                } = (0, b.useModelValues)(e.businessDirectConnection, ["postcode", "postcodeLocationName", "postcodeSetByUser"]);
                const {
                    id: y,
                    hasCatalogCategories: T
                } = (0, b.useModelValues)(e.catalog, ["id", "hasCatalogCategories"]);
                const S = n === true;
                const [k, A] = (0, E.useState)(false);
                const w = () => {
                    s.ModalManager.close();
                    A(false);
                };
                const M = () => {
                    s.ModalManager.open(E.default.createElement(f.default, {
                        existingPostcode: t != null ? t : "",
                        catalogId: y,
                        onCancel: w,
                        onSuccess: () => {
                            w();
                            e.postcodeChangeSuccess();
                        }
                    }));
                    A(true);
                };
                const L = function () {
                    let e = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
                    (0, l.delayMs)(e ? p.CATALOG_POSTCODE_CHANGE_MODAL_OPEN_DELAY : 0).then(M);
                };
                const [N, R] = (0, E.useState)(null);
                const j = (0, E.useRef)(null);
                const D = (0, E.useRef)(null);
                const x = (0, E.useCallback)(() => R(null), []);
                const [B] = (0, P.useTimeout)(x, p.CATALOG_POSTCODE_MENU_TOOLTIP_DURATION);
                const W = (0, E.useCallback)(() => {
                    const e = D.current ? D.current.offsetWidth * 3 / 4 : null;
                    R({
                        menu: E.default.createElement("div", {
                            style: typeof e == "number" ? {
                                maxWidth: `${e}px`
                            } : null
                        }, E.default.createElement(m.Text, {
                            as: "p"
                        }, h.fbt._("Click to change pincode to see items available in your area", null, {
                            hk: "2p5qlf"
                        }))),
                        anchor: j.current,
                        dirY: d.DirY.TOP,
                        type: d.MenuType.Tooltip,
                        horizontal: true,
                        tooltipColorScheme: d.TooltipColorScheme.Highlight
                    });
                }, []);
                const [F] = (0, P.useTimeout)(() => {
                    if (j.current) {
                        W();
                        B();
                    } else {
                        __LOG__(3)`[direct-connection] change postcode tooltip is not shown`;
                    }
                }, p.CATALOG_POSTCODE_MENU_TOOLTIP_DELAY);
                (0, E.useEffect)(() => {
                    if (!S) {
                        if ((0, c.editPostcodeByDefaultEnabled)()) {
                            if ((() => {
                                    if ((0, g.getPostcodeAutoOpenChangePostcodeDone)()) {
                                        return false;
                                    }
                                    if ((0, g.getPostcodeAutoOpenChangePostcodeCount)() >= 2) {
                                        return false;
                                    }
                                    return true;
                                })()) {
                                L(true);
                                (0, g.setPostcodeAutoOpenChangePostcodeDone)(true);
                                (() => {
                                    const e = (0, g.getPostcodeAutoOpenChangePostcodeCount)();
                                    (0, g.setPostcodeAutoOpenChangePostcodeCount)(e + 1);
                                })();
                            }
                        } else if ((() => {
                                if ((0, g.getPostcodeTooltipViewedInSession)()) {
                                    return false;
                                }
                                if ((0, g.getPostcodeTooltipViewCount)() >= 5) {
                                    return false;
                                }
                                return true;
                            })()) {
                            (() => {
                                const e = (0, g.getPostcodeTooltipViewCount)();
                                (0, g.setPostcodeTooltipViewCount)(e + 1);
                            })();
                            (0, g.setPostcodeTooltipViewedInSession)(true);
                            F();
                        }
                    }
                }, []);
                (0, O.default)(() => {
                    if (k) {
                        w();
                    }
                });
                const [H, V] = (0, E.useState)(0);
                (0, E.useEffect)(() => {
                    if (T === true) {
                        V(e => e + 1);
                    }
                }, [T]);
                const U = N ? E.default.createElement(C.UIE, {
                    key: H,
                    displayName: "CatalogPostcodeTooltip",
                    popable: true,
                    escapable: true,
                    requestDismiss: x,
                    dismissOnWindowResize: true
                }, E.default.createElement(_.default, {
                    tooltip: N
                })) : null;
                return E.default.createElement("div", (0, a.default)({
                    className: (0, v.default)(I.container)
                }, (0, r.accessibleClickableButtonProps)({
                    onClick: L
                }), {
                    ref: D
                }), E.default.createElement("span", {
                    className: (0, v.default)(I.svgWrapper)
                }, E.default.createElement(i.BusinessAddressIcon, null)), E.default.createElement(u.FlexColumn, {
                    ref: j
                }, E.default.createElement(m.Text, {
                    as: "p",
                    xstyle: I.postcodeDescription
                }, h.fbt._("Deliver to {postcode-of-a-geographic-area}", [h.fbt._param("postcode-of-a-geographic-area", t)], {
                    hk: "1dDn6Y"
                })), E.default.createElement(m.Text, {
                    as: "p",
                    xstyle: I.postcodeLocationName,
                    theme: "muted"
                }, S ? o : h.fbt._("Click to change Pincode", null, {
                    hk: "37HAka"
                })), U));
            };
            t.MAX_TIMES_POSTCODE_CHANGE_TOOLTIP_TO_SHOW = t.MAX_TIMES_POSTCODE_CHANGE_MODAL_AUTO_OPEN = undefined;
            var a = n(o(967154));
            var l = o(8304);
            var r = o(464520);
            var i = o(335843);
            var c = o(263079);
            var d = o(664149);
            var u = o(690495);
            var s = o(114850);
            var f = n(o(803209));
            var p = o(740043);
            var m = o(180519);
            var C = o(392632);
            var _ = n(o(733712));
            var g = o(757453);
            var h = o(548360);
            var E = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var o = y(t);
                if (o && o.has(e)) {
                    return o.get(e);
                }
                var n = {};
                var a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e) {
                    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
                        var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                        if (r && (r.get || r.set)) {
                            Object.defineProperty(n, l, r);
                        } else {
                            n[l] = e[l];
                        }
                    }
                }
                n.default = e;
                if (o) {
                    o.set(e, n);
                }
                return n;
            }(o(667294));
            var v = n(o(156720));
            var b = o(655241);
            var O = n(o(558532));
            var P = o(441673);

            function y (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var o = new WeakMap();
                return (y = function (e) {
                    if (e) {
                        return o;
                    } else {
                        return t;
                    }
                })(e);
            }
            const I = {
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
            var a = n(o(348926));
            var l = o(15842);
            var r = o(287461);
            var i = o(477627);
            var c = o(72696);
            var d = n(o(418950));
            var u = o(937356);
            var s = o(290895);
            var f = o(713464);
            var p = n(o(487011));
            var m = o(660666);
            var C = o(263079);
            var _ = n(o(908081));
            var g = n(o(324093));
            var h = o(568550);
            var E = o(626194);
            var v = n(o(570834));
            var b = n(o(495012));
            var O = n(o(468601));
            var P = n(o(786399));
            var y = o(899841);
            var I = o(795068);
            var T = n(o(819543));
            var S = o(932523);
            var k = o(227604);
            var A = n(o(568414));
            var w = o(77548);
            var M = n(o(944045));
            var L = o(472234);
            var N = o(453241);
            var R = n(o(567105));
            var j = o(316348);
            var D = o(555622);
            var x = o(887222);
            var B = o(548360);
            var W = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var o = K(t);
                if (o && o.has(e)) {
                    return o.get(e);
                }
                var n = {};
                var a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e) {
                    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
                        var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                        if (r && (r.get || r.set)) {
                            Object.defineProperty(n, l, r);
                        } else {
                            n[l] = e[l];
                        }
                    }
                }
                n.default = e;
                if (o) {
                    o.set(e, n);
                }
                return n;
            }(o(667294));
            var F = n(o(156720));
            var H = o(379811);
            var V = n(o(710629));
            var U = n(o(969651));
            var z = n(o(637660));
            var G = n(o(286481));
            var q = n(o(895851));

            function K (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var o = new WeakMap();
                return (K = function (e) {
                    if (e) {
                        return o;
                    } else {
                        return t;
                    }
                })(e);
            }
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

            function Q (e) {
                var t;
                const {
                    cartEnabled: o,
                    contact: n,
                    catalog: a,
                    dataSource: l,
                    handleCartClick: i,
                    onCartClick: d,
                    canManageCatalog: u,
                    businessProfile: s,
                    blockCartInterstitialFn: f,
                    onAddProduct: m,
                    onProductDetail: C,
                    onProductShare: _,
                    onCollectionSeeAll: g,
                    onEditCollection: h,
                    onOpenCollections: E,
                    catalogFlatListControllerRef: v,
                    catalogFetchState: y,
                    directConnectionPostcodeEnabled: I,
                    loadingDirectConnectionInfo: T,
                    businessDirectConnection: S,
                    loadingMore: k,
                    postcodeChangeSuccess: w
                } = e;
                const j = o && d ? i : undefined;
                let D;
                let x;
                let H;
                let V;
                if (u && m) {
                    D = W.default.createElement(O.default, {
                        onClick: () => m(),
                        theme: "collections",
                        testid: "add-item"
                    });
                }
                if (a && u && h) {
                    x = a.productCollection.getProductModels(true).some(e => !e.isHidden && e.reviewStatus !== "REJECTED") ? W.default.createElement(O.default, {
                        onClick: () => {
                            h(null);
                        },
                        theme: "collections",
                        title: B.fbt._("Add new collection", null, {
                            hk: "1DddmB"
                        }),
                        testid: "add-collection"
                    }) : null;
                }
                if (a && l) {
                    H = W.default.createElement(R.default, {
                        onCartOpen: j,
                        onProductDetail: C,
                        flatListController: v.current,
                        catalog: a,
                        canManageCatalog: u,
                        shareLinks: u,
                        onProductShare: _,
                        onCollectionSeeAll: g,
                        data: l.getData(),
                        onEditCollection: h
                    });
                    if (u) {
                        if ((0, r.getABPropConfigValue)("web_abprop_nux_cart_interstitial") && o && !f()) {
                            (0, P.default)();
                        }
                        V = W.default.createElement(p.default, {
                            onOpenCollections: E
                        });
                    }
                } else {
                    H = W.default.createElement(A.default, {
                        fetchState: y
                    });
                }
                return W.default.createElement(W.default.Fragment, null, s && W.default.createElement(W.default.Fragment, null, W.default.createElement("div", {
                    className: (0, F.default)(Y.header)
                }, W.default.createElement(M.default, {
                    profilePicThumb: n.getProfilePicThumb(),
                    contact: n,
                    businessProfile: s
                })), a && (0, c.catalogCategoriesEnabled)() && ((t = s.directConnection) === null || t === undefined ? undefined : t.enabled) ? W.default.createElement(L.CatalogCategoriesBanner, {
                    catalog: a
                }) : null, a && I && !T && S && W.default.createElement(N.CatalogPostcodeMenu, {
                    catalog: a,
                    businessDirectConnection: S,
                    postcodeChangeSuccess: w
                })), W.default.createElement("div", {
                    className: (0, F.default)(Y.list, s && Y.listTopMargin)
                }, V, D, x, H, k && W.default.createElement(b.default, null)));
            }

            function Z (e, t) {
                const {
                    contact: o,
                    catalogId: n,
                    setScrollOffset: r,
                    onCartClick: c,
                    onCatalogLinkClick: p,
                    canManageCatalog: b,
                    canLogQpl: O = true,
                    isPushed: P = true,
                    scrollOffset: A,
                    autoUpdate: M,
                    businessProfile: L,
                    blockCartInterstitialFn: N = () => false,
                    onAddProduct: R,
                    onProductDetail: F,
                    onProductShare: K,
                    onCollectionSeeAll: Y,
                    onEditCollection: Z,
                    onOpenCollections: X,
                    onRemoveProduct: J,
                    onOpenSettings: $,
                    onOpenMerchantDetailsForm: ee
                } = e;
                const te = (0, W.useContext)(h.DrawerContext);
                const oe = (0, C.enablePostcodeInCatalog)() && !!L && (0, u.businessSupportsPostcode)(L);
                const ne = (0, q.default)();
                const ae = (0, U.default)();
                const le = (0, V.default)(ae, 100);
                const re = (0, z.default)(() => new v.default());
                const [ie] = (0, H.useContactValues)(o.id, [m.getId]);
                const ce = (0, W.useMemo)(() => s.CartCollection.findCart(ie.toString()), [ie]);
                const [de, ue] = (0, W.useState)(false);
                const [se, fe] = (0, W.useState)(null);
                const [pe, me] = (0, W.useState)(ce.itemCount);
                const [Ce, _e] = (0, W.useState)("NONE");
                const [ge, he] = (0, W.useState)(null);
                const [Ee, ve] = (0, W.useState)(null);
                const [be, Oe] = (0, W.useState)(true);
                const Pe = function () {
                    var e = (0, a.default)(function* (e) {
                        yield e == null ? undefined : e.loadInitialItems();
                        Oe(false);
                    });
                    return function () {
                        return e.apply(this, arguments);
                    };
                }();
                const ye = (0, V.default)(() => {
                    ae();
                    if (!(J == null)) {
                        J();
                    }
                }, 100);
                const [Ie, Te] = (0, W.useState)();
                const [Se, ke] = (0, W.useState)(false);
                const Ae = () => {
                    const e = O && P;
                    const t = e ? j.QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW : undefined;
                    f.CatalogCollection.find(n, {
                        markerId: t
                    }).then(t => {
                        if (ne.aborted) {
                            return;
                        }
                        const o = new i.CatalogWithCollectionsDataSource(t, b || false, y.PRODUCT_LIST_ITEM_HEIGHT, e);
                        const n = new i.CatalogListItemScrollHelper(o);
                        fe(t);
                        he(o);
                        ve(n);
                        _e("SUCCESS");
                        Pe(o).then(() => {
                            if (e) {
                                D.QPL.markerEnd(j.QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW, l.QuickLogActionType.SUCCESS);
                            }
                        }).catch(() => {
                            if (e) {
                                D.QPL.markerEnd(j.QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW, l.QuickLogActionType.FAIL);
                            }
                        });
                        (e => {
                            if (M && e != null) {
                                e.productCollection.on("add", le);
                                e.productCollection.on("remove", ye);
                                e.collections.on("add", le);
                                e.collections.on("remove", le);
                            }
                        })(t);
                        if (A !== undefined) {
                            re.current.setScrollFromStart(A);
                        }
                    }).catch(t => {
                        if (e) {
                            D.QPL.markerEnd(j.QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW, l.QuickLogActionType.FAIL);
                        }
                        (0, k.parseErrorState)(t, e => {
                            _e(e);
                            Oe(false);
                        });
                    });
                };
                const we = () => {
                    if (oe) {
                        ke(true);
                        d.default.getCypher(n).then(e => {
                            Te(e);
                            ke(false);
                            Ae();
                        });
                    } else {
                        Ae();
                    }
                };
                (0, W.useEffect)(() => {
                    we();
                    (0, T.default)(n).then(e => {
                        ue(e);
                        if (e) {
                            ce.on("change:cartItemCollection", () => me(ce.itemCount));
                        }
                        (0, w.logCatalogListView)({
                            catalogOwnerWid: n,
                            catalogContext: (0, S.getProductCatalogContext)(te),
                            cartToggle: e
                        });
                    });
                }, []);
                const Me = (0, G.default)((e, t) => {
                    if (!(r == null)) {
                        r(t.scrollTop);
                    }
                    if (Ee == null ? undefined : Ee.willLoadMore(t)) {
                        Oe(true);
                    }
                    if (!(Ee == null)) {
                        Ee.onScroll(e, t).then(e => {
                            if (e) {
                                Oe(false);
                            }
                        }).catch(e => {
                            Oe(false);
                            throw e;
                        });
                    }
                }, 100);
                const Le = () => {
                    (0, x.qplStartCartView)("Catalog");
                    if (!(c == null)) {
                        c(ie.toString());
                    }
                };
                const Ne = (0, I.getCatalogDrawerMenu)({
                    onSendCatalog: () => {
                        if (se) {
                            p(se, o);
                            (0, w.logCatalogShareLinkClick)({
                                catalogOwnerWid: n,
                                catalogContext: (0, S.getProductCatalogContext)(te)
                            });
                        }
                    },
                    onCartClick: de ? Le : undefined,
                    cartCount: pe,
                    catalogId: n.toString(),
                    canManageCatalog: b,
                    onOpenCollections: X,
                    onOpenMerchantDetailsForm: ee,
                    onOpenSettings: $,
                    cartIconTheme: e.headerType === E.DRAWER_HEADER_TYPE.LARGE ? "inherit-color" : null
                });
                return W.default.createElement(_.default, {
                    ref: t,
                    theme: "products",
                    onDrop: e.onBack
                }, W.default.createElement(E.DrawerHeader, {
                    title: B.fbt._("Catalog", null, {
                        hk: "3YVOSV"
                    }),
                    type: e.headerType || E.DRAWER_HEADER_TYPE.SMALL,
                    onBack: e.onBack,
                    menu: Ne,
                    focusBackOrCancel: true
                }), W.default.createElement(g.default, {
                    onScroll: e => {
                        Me(e, e.currentTarget);
                    },
                    flatListControllers: [re.current]
                }, W.default.createElement(Q, {
                    cartEnabled: de,
                    contact: o,
                    handleCartClick: Le,
                    onProductDetail: F,
                    onCartClick: c,
                    catalog: se,
                    dataSource: ge,
                    businessProfile: L,
                    canManageCatalog: b,
                    onAddProduct: R,
                    onProductShare: K,
                    onCollectionSeeAll: Y,
                    onOpenCollections: X,
                    onEditCollection: Z,
                    blockCartInterstitialFn: N,
                    catalogFlatListControllerRef: re,
                    catalogFetchState: Ce,
                    directConnectionPostcodeEnabled: oe,
                    loadingDirectConnectionInfo: Se,
                    businessDirectConnection: Ie,
                    loadingMore: be,
                    postcodeChangeSuccess: () => {
                        f.CatalogCollection.removeCatalog(n);
                        fe(null);
                        he(null);
                        ve(null);
                        _e("NONE");
                        Oe(true);
                        we();
                    }
                })));
            }
            var X = (0, W.forwardRef)(Z);
            t.default = X;
        },
        977575: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.CollectionContentDrawer = undefined;
            var a = n(o(348926));
            var l = o(15842);
            var r = o(477627);
            var i = o(290895);
            var c = o(713464);
            var d = o(660666);
            var u = n(o(908081));
            var s = n(o(324093));
            var f = o(568550);
            var p = o(626194);
            var m = n(o(570834));
            var C = n(o(495012));
            var _ = n(o(468601));
            var g = o(211185);
            var h = o(899841);
            var E = o(795068);
            var v = n(o(819543));
            var b = o(932523);
            var O = o(227604);
            var P = n(o(568414));
            var y = o(854682);
            var I = n(o(567105));
            var T = o(316348);
            var S = o(555622);
            var k = o(887222);
            var A = o(548360);
            var w = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var o = B(t);
                if (o && o.has(e)) {
                    return o.get(e);
                }
                var n = {};
                var a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e) {
                    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
                        var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                        if (r && (r.get || r.set)) {
                            Object.defineProperty(n, l, r);
                        } else {
                            n[l] = e[l];
                        }
                    }
                }
                n.default = e;
                if (o) {
                    o.set(e, n);
                }
                return n;
            }(o(667294));
            var M = n(o(156720));
            var L = o(379811);
            var N = n(o(710629));
            var R = n(o(969651));
            var j = n(o(637660));
            var D = o(808446);
            var x = n(o(895851));

            function B (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var o = new WeakMap();
                return (B = function (e) {
                    if (e) {
                        return o;
                    } else {
                        return t;
                    }
                })(e);
            }
            const W = {
                flex: "kk3akd72",
                paddingBottom: "oq31bsqd",
                overflowX: "gfz4du6o",
                overflowY: "r7fjleex"
            };
            const F = {
                paddingTop: "pxvlsfnc",
                paddingEnd: "kyc7k6mt",
                paddingBottom: "n3bptxsn",
                paddingStart: "f78eapp6",
                lineHeight: "qg52vu03"
            };

            function H (e) {
                const {
                    cartEnabled: t,
                    catalogFetchState: o,
                    collectionFlatListController: n,
                    loadingMore: a,
                    catalog: l,
                    dataSource: r,
                    canManageCatalog: i,
                    collection: c,
                    handleCartClick: d,
                    onProductDetail: u,
                    onCartClick: s,
                    onProductShare: f,
                    onEditCollection: p
                } = e;
                const m = t && s ? d : undefined;
                if (!l || !r) {
                    return w.default.createElement(P.default, {
                        fetchState: o
                    });
                }
                const h = r.getData();
                if (h.length === 0 && !a && i && c) {
                    return w.default.createElement("div", {
                        className: (0, M.default)(W)
                    }, w.default.createElement(_.default, {
                        theme: "collections",
                        onClick: () => {
                            if (!(p == null)) {
                                p(c);
                            }
                        },
                        testid: "add-collection"
                    }), w.default.createElement("div", {
                        className: (0, M.default)(F)
                    }, A.fbt._("This collection won't be visible to customers until you add at least 1 item", null, {
                        hk: "3XWBzM"
                    })));
                }
                const E = w.default.createElement(I.default, {
                    onCartOpen: m,
                    onProductDetail: u,
                    flatListController: n,
                    catalog: l,
                    canManageCatalog: i,
                    shareLinks: i,
                    onProductShare: f,
                    collectionId: c == null ? undefined : c.id.toString(),
                    data: h
                });
                const v = c ? w.default.createElement(g.CollectionIntegrityBanner, {
                    collection: c,
                    onEditCollection: p
                }) : undefined;
                return w.default.createElement("div", {
                    className: (0, M.default)(W)
                }, v, E, a && w.default.createElement(C.default, null));
            }
            const V = (0, w.forwardRef)((e, t) => {
                var o;
                const {
                    contact: n,
                    catalogId: C,
                    onCartClick: _,
                    onCatalogLinkClick: g,
                    setScrollOffset: P,
                    canManageCatalog: I,
                    scrollOffset: M,
                    collection: B,
                    onProductDetail: W,
                    onProductShare: F,
                    onEditCollection: V
                } = e;
                const U = (0, R.default)();
                const z = (0, x.default)();
                const G = (0, w.useContext)(f.DrawerContext);
                const [q] = (0, L.useContactValues)(n.id, [d.getId]);
                const K = (0, w.useMemo)(() => i.CartCollection.findCart(q.toString()), [q]);
                const Y = (0, j.default)(() => new m.default());
                const [Q, Z] = (0, w.useState)(false);
                const [X, J] = (0, w.useState)(null);
                const [$, ee] = (0, w.useState)(K.itemCount);
                const [te, oe] = (0, w.useState)("NONE");
                const [ne, ae] = (0, w.useState)(null);
                const [le, re] = (0, w.useState)(null);
                const [ie, ce] = (0, w.useState)(true);
                (0, D.useListener)(B == null ? undefined : B.productCollection, ["add", "remove"], U);
                (0, D.useListener)(X == null ? undefined : X.productCollection, ["add", "remove"], U);
                (0, D.useListener)(X == null ? undefined : X.collections, ["add", "remove"], U);
                (0, D.useListener)(B, ["change:reviewStatus", "canAppeal"], U);
                const de = function () {
                    var e = (0, a.default)(function* (e) {
                        yield e == null ? undefined : e.loadInitialItems();
                        ce(false);
                        (0, y.logCollectionSeeAllView)({
                            catalogOwnerJid: C.toString(),
                            catalogContext: (0, b.getProductCatalogContext)(G),
                            collectionId: e == null ? undefined : e.collectionId
                        });
                    });
                    return function () {
                        return e.apply(this, arguments);
                    };
                }();
                const ue = () => {
                    const e = K.itemCount;
                    if ($ !== e) {
                        ee(e);
                    }
                };
                (0, w.useEffect)(() => {
                    c.CatalogCollection.find(C).then(e => {
                        if (z.aborted) {
                            return;
                        }
                        J(e);
                        oe("SUCCESS");
                        const t = new r.SingleCollectionDataSource(e, B == null ? undefined : B.id.toString(), I || false, h.PRODUCT_LIST_ITEM_HEIGHT);
                        const o = new r.CatalogListItemScrollHelper(t);
                        ae(t);
                        re(o);
                        de(t).then(() => {
                            S.QPL.markerEnd(T.QuickLogMarkerId.WHATSAPP_COLLECTION_VIEW_ALL, l.QuickLogActionType.SUCCESS);
                        }).catch(() => {
                            S.QPL.markerEnd(T.QuickLogMarkerId.WHATSAPP_COLLECTION_VIEW_ALL, l.QuickLogActionType.FAIL);
                        });
                        if (M !== undefined) {
                            Y.current.setScrollFromStart(M);
                        }
                    }).catch(e => {
                        S.QPL.markerEnd(T.QuickLogMarkerId.WHATSAPP_COLLECTION_VIEW_ALL, l.QuickLogActionType.FAIL);
                        (0, O.parseErrorState)(e, e => {
                            oe(e);
                            ce(false);
                        });
                    });
                    (0, v.default)(C).then(e => {
                        Z(e);
                        if (e) {
                            K.on("all", ue);
                        }
                    });
                }, []);
                const se = () => {
                    (0, k.qplStartCartView)("Collection");
                    if (!(_ == null)) {
                        _(q.toString());
                    }
                };
                const fe = (0, N.default)((e, t) => {
                    if (!(P == null)) {
                        P(t.scrollTop);
                    }
                    if (le == null ? undefined : le.willLoadMore(t)) {
                        ce(true);
                    }
                    if (!(le == null)) {
                        le.onScroll(e, t).then(e => {
                            if (e) {
                                ce(false);
                            }
                        }).catch(e => {
                            ce(false);
                            throw e;
                        });
                    }
                }, 100);
                const pe = (0, E.getCatalogDrawerMenu)({
                    onSendCatalog: () => {
                        if (X) {
                            g(X, n);
                        }
                    },
                    onCartClick: Q ? se : undefined,
                    cartCount: K.itemCount,
                    catalogId: C.toString(),
                    canManageCatalog: I,
                    cartIconTheme: "inherit-color"
                });
                const me = ((o = e.collection) === null || o === undefined ? undefined : o.name) || A.fbt._("All Items", null, {
                    hk: "2x8dE2"
                });
                return w.default.createElement(u.default, {
                    ref: t,
                    theme: "products",
                    onDrop: e.onBack
                }, w.default.createElement(p.DrawerHeader, {
                    title: me,
                    type: e.headerType || p.DRAWER_HEADER_TYPE.SMALL,
                    onBack: e.onBack,
                    menu: pe
                }), w.default.createElement(s.default, {
                    flatListControllers: [Y.current],
                    onScroll: e => {
                        fe(e, e.currentTarget);
                    }
                }, w.default.createElement(H, {
                    cartEnabled: Q,
                    onCartClick: _,
                    handleCartClick: se,
                    catalog: X,
                    dataSource: ne,
                    catalogFetchState: te,
                    loadingMore: ie,
                    canManageCatalog: I,
                    collection: B,
                    onProductDetail: W,
                    onProductShare: F,
                    onEditCollection: V,
                    collectionFlatListController: Y.current
                })));
            });
            t.CollectionContentDrawer = V;
            V.displayName = "CollectionContentDrawer";
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
                let l;
                let C;
                if (t) {
                    ({
                        name: l,
                        id: C
                    } = t);
                } else if (n) {
                    l = s.fbt._("All Items", null, {
                        hk: "2x8dE2"
                    });
                }
                const E = f.default.createElement(d.TextDiv, {
                    className: (0, p.default)(m),
                    theme: "title"
                }, f.default.createElement(r.EmojiText, {
                    text: l,
                    ellipsify: true,
                    titlify: true
                }));
                let v;
                if (t) {
                    switch (t.reviewStatus) {
                        case i.PRODUCT_REVIEW_STATUS.REJECTED:
                            v = f.default.createElement("span", {
                                className: (0, p.default)(_)
                            }, s.fbt._("rejected", null, {
                                hk: "3f3H8P"
                            }));
                    }
                }
                return f.default.createElement(a.default, {
                    key: C,
                    primary: E,
                    secondary: v,
                    detail: f.default.createElement(h, {
                        name: l,
                        onClick: function (e) {
                            (0, c.stopEvent)(e);
                            (0, u.qplStartCollectionViewAll)("Catalog");
                            if (o && t) {
                                o(t);
                            } else if (o) {
                                o();
                            }
                        }
                    }),
                    theme: "collection-header",
                    idle: true,
                    className: (0, p.default)(g)
                });
            };
            var a = n(o(170206));
            var l = n(o(196554));
            var r = o(305521);
            var i = o(530485);
            var c = o(414493);
            var d = o(180519);
            var u = o(887222);
            var s = o(548360);
            var f = n(o(667294));
            var p = n(o(156720));
            const m = {
                lineHeight: "erpdyial"
            };
            const C = {
                lineHeight: "erpdyial"
            };
            const _ = {
                color: "mvxzr2tb"
            };
            const g = {
                paddingStart: "f78eapp6",
                marginTop: "o9i7y497",
                borderTop: "swyb62mu"
            };
            const h = e => {
                let {
                    name: t,
                    onClick: o
                } = e;
                return f.default.createElement(l.default, {
                    onClick: o,
                    className: (0, p.default)(C),
                    title: s.fbt._("Collection {collectionName}, see all", [s.fbt._param("collectionName", t)], {
                        hk: "1kqerQ"
                    }),
                    tabIndex: 0
                }, s.fbt._("See all", null, {
                    hk: "UPjou"
                }));
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
                        o = i.fbt._("WhatsApp's Commerce Policy for prescription, recreational, or other types of Drugs", null, {
                            hk: "B27ED"
                        });
                        return {
                            first: i.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_drugs}", [i.fbt._param("collections_rejected_policy_drugs", d(o, t))], {
                                    hk: "1ZU364"
                                }),
                                second: i.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_drugs}.", [i.fbt._param("collections_rejected_policy_drugs", d(o, t))], {
                                    hk: "4pJPwW"
                                })
                        };
                    case "weapons":
                        o = i.fbt._("WhatsApp's Commerce Policy for Weapons, ammunition, or explosives", null, {
                            hk: "1X972I"
                        });
                        return {
                            first: i.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_weapons}", [i.fbt._param("collections_rejected_policy_weapons", d(o, t))], {
                                    hk: "1RUS3E"
                                }),
                                second: i.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_weapons}.", [i.fbt._param("collections_rejected_policy_weapons", d(o, t))], {
                                    hk: "4caF44"
                                })
                        };
                    case "animals":
                        o = i.fbt._("WhatsApp's Commerce Policy for Animals", null, {
                            hk: "3hxXr8"
                        });
                        return {
                            first: i.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_animals}", [i.fbt._param("collections_rejected_policy_animals", d(o, t))], {
                                    hk: "3pIJQl"
                                }),
                                second: i.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_animals}.", [i.fbt._param("collections_rejected_policy_animals", d(o, t))], {
                                    hk: "jmRZD"
                                })
                        };
                    case "alcohol":
                        o = i.fbt._("WhatsApp's Commerce Policy for Alcohol", null, {
                            hk: "1G8YGL"
                        });
                        return {
                            first: i.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_alcohol}", [i.fbt._param("collections_rejected_policy_alcohol", d(o, t))], {
                                    hk: "1K5gKG"
                                }),
                                second: i.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_alcohol}.", [i.fbt._param("collections_rejected_policy_alcohol", d(o, t))], {
                                    hk: "1BLaYk"
                                })
                        };
                    case "gambling":
                        o = i.fbt._("WhatsApp's Commerce Policy for Real money gambling services", null, {
                            hk: "1zQIeM"
                        });
                        return {
                            first: i.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_gambling}", [i.fbt._param("collections_rejected_policy_gambling", d(o, t))], {
                                    hk: "2sjwfv"
                                }),
                                second: i.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_gambling}.", [i.fbt._param("collections_rejected_policy_gambling", d(o, t))], {
                                    hk: "2N7wJa"
                                })
                        };
                    case "tobacco":
                        o = i.fbt._("WhatsApp's Commerce Policy for Tobacco items and related paraphernalia", null, {
                            hk: "EAQLL"
                        });
                        return {
                            first: i.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_tobacco}", [i.fbt._param("collections_rejected_policy_tobacco", d(o, t))], {
                                    hk: "49kjok"
                                }),
                                second: i.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_tobacco}.", [i.fbt._param("collections_rejected_policy_tobacco", d(o, t))], {
                                    hk: "1hYXEJ"
                                })
                        };
                    case "overtly_sexualized_positioning":
                        o = i.fbt._("WhatsApp's Commerce Policy for Overtly sexualized positioning", null, {
                            hk: "1oaFbX"
                        });
                        return {
                            first: i.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_overtly_sexualized_positioning}", [i.fbt._param("collections_rejected_policy_overtly_sexualized_positioning", d(o, t))], {
                                    hk: "2imNEe"
                                }),
                                second: i.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_overtly_sexualized_positioning}.", [i.fbt._param("collections_rejected_policy_overtly_sexualized_positioning", d(o, t))], {
                                    hk: "2Bi73E"
                                })
                        };
                    case "adult":
                        o = i.fbt._("WhatsApp's Commerce Policy for Adult products or service", null, {
                            hk: "Wf7q5"
                        });
                        return {
                            first: i.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_adult}", [i.fbt._param("collections_rejected_policy_adult", d(o, t))], {
                                    hk: "2sWh94"
                                }),
                                second: i.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_adult}.", [i.fbt._param("collections_rejected_policy_adult", d(o, t))], {
                                    hk: "4Fv5xc"
                                })
                        };
                    case "supplements":
                        o = i.fbt._("WhatsApp's Commerce Policy for Unsafe ingestible supplements", null, {
                            hk: "9a4Y2"
                        });
                        return {
                            first: i.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_supplements}", [i.fbt._param("collections_rejected_policy_supplements", d(o, t))], {
                                    hk: "3m5ayk"
                                }),
                                second: i.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_supplements}.", [i.fbt._param("collections_rejected_policy_supplements", d(o, t))], {
                                    hk: "4g93H8"
                                })
                        };
                    case "body_parts_fluids":
                        o = i.fbt._("WhatsApp's Commerce Policy for Body parts and fluids", null, {
                            hk: "2EAd21"
                        });
                        return {
                            first: i.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_body_parts_fluids}", [i.fbt._param("collections_rejected_policy_body_parts_fluids", d(o, t))], {
                                    hk: "1fH8mf"
                                }),
                                second: i.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_body_parts_fluids}.", [i.fbt._param("collections_rejected_policy_body_parts_fluids", d(o, t))], {
                                    hk: "2HB7OE"
                                })
                        };
                    case "healthcare":
                        o = i.fbt._("WhatsApp's Commerce Policy for Medical and healthcare products", null, {
                            hk: "3vvgOF"
                        });
                        return {
                            first: i.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_healthcare}", [i.fbt._param("collections_rejected_policy_healthcare", d(o, t))], {
                                    hk: "1o5Y8p"
                                }),
                                second: i.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_healthcare}.", [i.fbt._param("collections_rejected_policy_healthcare", d(o, t))], {
                                    hk: "18tOqv"
                                })
                        };
                    case "misleading":
                        o = i.fbt._("WhatsApp's Commerce Policy for Business models, goods, items, or services that may be or are fraudulent, misleading, offensive, or deceptive, or may be or are exploitative, inappropriate, or exert undue pressure on targeted groups", null, {
                            hk: "3TyOB"
                        });
                        return {
                            first: i.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_misleading}", [i.fbt._param("collections_rejected_policy_misleading", d(o, t))], {
                                    hk: "1icG7s"
                                }),
                                second: i.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_misleading}.", [i.fbt._param("collections_rejected_policy_misleading", d(o, t))], {
                                    hk: "4gURah"
                                })
                        };
                    case "real_fake_currency":
                        o = i.fbt._("WhatsApp's Commerce Policy for Real, virtual, or fake currency", null, {
                            hk: "2XnVq2"
                        });
                        return {
                            first: i.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_real_fake_currency}", [i.fbt._param("collections_rejected_policy_real_fake_currency", d(o, t))], {
                                    hk: "2F8xUp"
                                }),
                                second: i.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_real_fake_currency}.", [i.fbt._param("collections_rejected_policy_real_fake_currency", d(o, t))], {
                                    hk: "3mr0Qt"
                                })
                        };
                    case "digital_services_products":
                        o = i.fbt._("WhatsApp's Commerce Policy for Digital and subscription services", null, {
                            hk: "2mvwqB"
                        });
                        return {
                            first: i.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_digital_services_products}", [i.fbt._param("collections_rejected_policy_digital_services_products", d(o, t))], {
                                    hk: "W6Ct0"
                                }),
                                second: i.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_digital_services_products}.", [i.fbt._param("collections_rejected_policy_digital_services_products", d(o, t))], {
                                    hk: "4gcYAt"
                                })
                        };
                    case "thrid_party_infringements":
                        o = i.fbt._("WhatsApp's Commerce Policy for Third-Party Infringement", null, {
                            hk: "48SSD"
                        });
                        return {
                            first: i.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_thrid_party_infringements}", [i.fbt._param("collections_rejected_policy_thrid_party_infringements", d(o, t))], {
                                    hk: "2S7xKD"
                                }),
                                second: i.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_thrid_party_infringements}.", [i.fbt._param("collections_rejected_policy_thrid_party_infringements", d(o, t))], {
                                    hk: "1UXaIr"
                                })
                        };
                    case "unauthorized_media":
                        o = i.fbt._("WhatsApp's Commerce Policy for Products or items that facilitate or encourage unauthorized access to digital media", null, {
                            hk: "2ldhoF"
                        });
                        return {
                            first: i.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_unauthorized_media}", [i.fbt._param("collections_rejected_policy_unauthorized_media", d(o, t))], {
                                    hk: "2oPAST"
                                }),
                                second: i.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_unauthorized_media}.", [i.fbt._param("collections_rejected_policy_unauthorized_media", d(o, t))], {
                                    hk: "NVM4H"
                                })
                        };
                    case "illegal_products":
                        o = i.fbt._("WhatsApp's Commerce Policy for Illegal products or services", null, {
                            hk: "c5Zjc"
                        });
                        return {
                            first: i.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_illegal_products}", [i.fbt._param("collections_rejected_policy_illegal_products", d(o, t))], {
                                    hk: "41Oqb6"
                                }),
                                second: i.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_illegal_products}.", [i.fbt._param("collections_rejected_policy_illegal_products", d(o, t))], {
                                    hk: "46TgAV"
                                })
                        };
                    case "hazardous_goods_and_materials":
                        o = i.fbt._("WhatsApp's Commerce Policy for Business models, goods, items, or services that may be or are fraudulent, misleading, offensive, or deceptive, or may be or are exploitative, inappropriate, or exert undue pressure on targeted groups", null, {
                            hk: "3TyOB"
                        });
                        return {
                            first: i.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_hazardous_goods_and_materials}", [i.fbt._param("collections_rejected_policy_hazardous_goods_and_materials", d(o, t))], {
                                    hk: "smMcx"
                                }),
                                second: i.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_hazardous_goods_and_materials}.", [i.fbt._param("collections_rejected_policy_hazardous_goods_and_materials", d(o, t))], {
                                    hk: "SdRo5"
                                })
                        };
                    case "stolen_goods":
                        o = i.fbt._("WhatsApp's Commerce Policy", null, {
                            hk: "1kuvvN"
                        });
                        return {
                            first: i.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_stolen_goods}", [i.fbt._param("collections_rejected_policy_stolen_goods", d(o, t))], {
                                    hk: "4mvVou"
                                }),
                                second: i.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_stolen_goods}.", [i.fbt._param("collections_rejected_policy_stolen_goods", d(o, t))], {
                                    hk: "1Zd6PC"
                                })
                        };
                    case "human_exploitation_and_sexual_services":
                        o = i.fbt._("WhatsApp's Commerce Policy", null, {
                            hk: "1kuvvN"
                        });
                        return {
                            first: i.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_human_exploitation_and_sexual_services}", [i.fbt._param("collections_rejected_policy_human_exploitation_and_sexual_services", d(o, t))], {
                                    hk: "4yXqyf"
                                }),
                                second: i.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_human_exploitation_and_sexual_services}.", [i.fbt._param("collections_rejected_policy_human_exploitation_and_sexual_services", d(o, t))], {
                                    hk: "3XImZQ"
                                })
                        };
                    case "community_standards":
                        o = i.fbt._("WhatsApp's Business Terms", null, {
                            hk: "1x5ZqO"
                        });
                        return {
                            first: i.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_community_standards}", [i.fbt._param("collections_rejected_policy_community_standards", d(o, t))], {
                                    hk: "2AoLET"
                                }),
                                second: i.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_community_standards}.", [i.fbt._param("collections_rejected_policy_community_standards", d(o, t))], {
                                    hk: "apmZF"
                                })
                        };
                    case "discrimination":
                        o = i.fbt._("WhatsApp's Business Terms", null, {
                            hk: "1x5ZqO"
                        });
                        return {
                            first: i.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_discrimination}", [i.fbt._param("collections_rejected_policy_discrimination", d(o, t))], {
                                    hk: "4gmrAW"
                                }),
                                second: i.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_discrimination}.", [i.fbt._param("collections_rejected_policy_discrimination", d(o, t))], {
                                    hk: "3j6FXO"
                                })
                        };
                    default:
                        o = i.fbt._("WhatsApp's Commerce Policy", null, {
                            hk: "1kuvvN"
                        });
                        return {
                            first: i.fbt._("This collection wasn't approved because its name violates {collections_rejected_policy_other_violation}", [i.fbt._param("collections_rejected_policy_other_violation", d(o, t))], {
                                    hk: "3AiJjt"
                                }),
                                second: i.fbt._("We reviewed this collection again and confirmed its name violates {collections_rejected_policy_other_violation}.", [i.fbt._param("collections_rejected_policy_other_violation", d(o, t))], {
                                    hk: "A2Pf5"
                                })
                        };
                }
            };
            var a = n(o(196554));
            var l = n(o(846870));
            var r = o(753233);
            var i = o(548360);
            var c = n(o(667294));

            function d (e, t) {
                const o = t || l.default.WA_COMMERCE_POLICY_URL;
                return c.default.createElement(a.default, {
                    href: o,
                    onClick: e => {
                        e.preventDefault();
                        (0, r.openExternalLink)(o);
                    }
                }, e);
            }
        },
        854682: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.logCollectionCreateClicked = function (e) {
                new r.CatalogBizWamEvent({
                    catalogBizAction: d.CATALOG_BIZ_ACTION.ACTION_COLLECTION_CREATE_CLICKED,
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
                new r.CatalogBizWamEvent({
                    catalogBizAction: d.CATALOG_BIZ_ACTION.ACTION_COLLECTION_CREATED,
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
                new r.CatalogBizWamEvent({
                    catalogBizAction: d.CATALOG_BIZ_ACTION.ACTION_COLLECTION_DELETED,
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
                    removedCount: a
                } = e;
                if (n > 0) {
                    new r.CatalogBizWamEvent({
                        catalogBizAction: d.CATALOG_BIZ_ACTION.ACTION_COLLECTION_ASSIGN_ITEMS,
                        catalogEntryPoint: t.entryPoint,
                        catalogSessionId: t.session.toString(),
                        productCount: n,
                        collectionId: o
                    }).commit();
                }
                if (a > 0) {
                    new r.CatalogBizWamEvent({
                        catalogBizAction: d.CATALOG_BIZ_ACTION.ACTION_COLLECTION_UNASSIGN_ITEMS,
                        catalogEntryPoint: t.entryPoint,
                        catalogSessionId: t.session.toString(),
                        productCount: a,
                        collectionId: o
                    }).commit();
                }
            };
            t.logCollectionMenuClicked = function (e) {
                new r.CatalogBizWamEvent({
                    catalogBizAction: d.CATALOG_BIZ_ACTION.ACTION_MENU_COLLECTIONS_CLICK,
                    catalogEntryPoint: e.entryPoint,
                    catalogSessionId: e.session.toString()
                }).commit();
            };
            t.logCollectionRenamed = function (e) {
                let {
                    catalogContext: t,
                    collectionId: o
                } = e;
                new r.CatalogBizWamEvent({
                    catalogBizAction: d.CATALOG_BIZ_ACTION.ACTION_COLLECTION_DELETED,
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
                new r.CatalogBizWamEvent({
                    catalogBizAction: d.CATALOG_BIZ_ACTION.ACTION_COLLECTION_CHANGE_ORDER,
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
                const r = (0, l.getProductStatsInFetched)(t, n);
                const d = r == null ? undefined : r.productIndex;
                const u = r == null ? undefined : r.collectionIndex;
                (0, c.logCatalogViewOrBizEvent)((0, a.default)((0, a.default)({
                    isOwner: (0, c.isCatalogOwner)({
                        catalogOwnerJid: t
                    }),
                    productIndex: d,
                    collectionIndex: u
                }, (0, i.toDataForCatalogViewEvents)(o)), {}, {
                    catalogOwnerJid: t
                }));
            };
            var a = n(o(81109));
            var l = o(477627);
            var r = o(104209);
            var i = o(932523);
            var c = o(537066);
            var d = o(937789);
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
                    shareLinks: l = false,
                    onEditCollection: y,
                    onCollectionSeeAll: T,
                    canManageCatalog: S
                } = e;
                const k = (0, v.default)();
                const A = (0, P.useModelValues)(e.catalog, ["productCollection", "collections", "afterCursor", "id", "index"]);
                const w = (0, E.useContext)(a.DrawerContext);
                const M = (0, b.default)(() => new Set());
                const L = (0, b.default)(() => new i.default());
                const N = e => {
                    if (!(o == null)) {
                        o(e);
                    }
                };
                const R = e => {
                    (0, d.handleProductDelete)(A, e, (0, f.getProductCatalogContext)(w), "Collection");
                };
                const j = e => {
                    (0, d.handleProductVisibilityChange)(A, e, (0, f.getProductCatalogContext)(w), "Collections");
                };
                (0, O.useListeners)(Array.from(M.current).map(e => ({
                    source: e,
                    eventOrEvents: ["change:reviewStatus", "canAppeal"],
                    callback: k
                })));
                return E.default.createElement(r.default, {
                    flatListControllers: [L.current]
                }, E.default.createElement(I, {
                    flatListController: L.current,
                    direction: "vertical",
                    forceConsistentRenderCount: false,
                    data: (() => {
                        const t = n !== undefined;
                        const o = e.data || [];
                        const a = [];
                        o.forEach(o => {
                            const n = o.collection;
                            const l = o.product;
                            const r = o.allItems;
                            if (n && l) {
                                const e = n.id;
                                a.push({
                                    itemKey: `${e.toString()}_${l.id.toString()}_${t.toString()}`,
                                    product: l,
                                    collectionId: e
                                });
                            } else if (n) {
                                if (!M.current.has(n)) {
                                    M.current.add(n);
                                }
                                a.push({
                                    itemKey: `${n.id.toString()}_${n.reviewStatus.toString()}`,
                                    collection: n
                                });
                                if (!(n.reviewStatus !== C.PRODUCT_REVIEW_STATUS.PENDING && n.reviewStatus !== C.PRODUCT_REVIEW_STATUS.REJECTED)) {
                                    a.push({
                                        itemKey: `${n.id.toString()}_reviewBanner`,
                                        collection: n,
                                        height: (0, u.getCollectionIntegrityHeight)(n),
                                        reviewBanner: true
                                    });
                                }
                            } else if (r) {
                                a.push({
                                    itemKey: "view_all",
                                    allItems: r
                                });
                            } else if (l) {
                                const o = e.collectionId || undefined;
                                a.push({
                                    itemKey: `${l.id.toString()}_${t.toString()}`,
                                    product: l,
                                    collectionId: o
                                });
                            }
                        });
                        return a;
                    })(),
                    renderItem: e => {
                        let {
                            collection: o,
                            product: a,
                            allItems: r,
                            reviewBanner: i = false,
                            collectionId: c
                        } = e;
                        if (o) {
                            if (i) {
                                return E.default.createElement(u.CollectionIntegrityBanner, {
                                    collection: o,
                                    onEditCollection: y
                                });
                            } else {
                                return E.default.createElement(_.default, {
                                    collection: o,
                                    onSeeAll: T
                                });
                            }
                        } else if (r) {
                            return E.default.createElement(_.default, {
                                allItems: r,
                                onSeeAll: T
                            });
                        } else if (a) {
                            return E.default.createElement(p.default, {
                                collectionId: c,
                                product: a,
                                onCartOpen: n,
                                onClick: () => ((e, o) => {
                                    (0, h.qplStartProductView)("Collection");
                                    (0, m.logCatalogListDetailClick)({
                                        product: (0, g.unproxy)(e),
                                        catalogContext: (0, f.getProductCatalogContext)(w)
                                    });
                                    return t(e, o);
                                })(a, c),
                                onProductShare: l ? N : null,
                                onProductDelete: R,
                                onProductHideShow: j,
                                theme: "product-of-collection",
                                canManageCatalog: S
                            });
                        } else {
                            return null;
                        }
                    },
                    defaultItemHeight: s.PRODUCT_LIST_ITEM_HEIGHT,
                    keyOrder: c.KeyOrder.INVERSE
                }));
            };
            var a = o(568550);
            var l = o(512938);
            var r = n(o(964223));
            var i = n(o(570834));
            var c = o(390185);
            var d = o(491606);
            var u = o(211185);
            var s = o(899841);
            var f = o(932523);
            var p = n(o(698690));
            var m = o(77548);
            var C = o(530485);
            var _ = n(o(73665));
            var g = o(163139);
            var h = o(887222);
            var E = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var o = y(t);
                if (o && o.has(e)) {
                    return o.get(e);
                }
                var n = {};
                var a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e) {
                    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
                        var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                        if (r && (r.get || r.set)) {
                            Object.defineProperty(n, l, r);
                        } else {
                            n[l] = e[l];
                        }
                    }
                }
                n.default = e;
                if (o) {
                    o.set(e, n);
                }
                return n;
            }(o(667294));
            var v = n(o(969651));
            var b = n(o(637660));
            var O = o(808446);
            var P = o(655241);

            function y (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var o = new WeakMap();
                return (y = function (e) {
                    if (e) {
                        return o;
                    } else {
                        return t;
                    }
                })(e);
            }
            const I = (0, l.FlatListFactory)();
        },
        87630: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ComplianceInfoPrimitiveField = t.ComplianceInfoLoading = t.ComplianceInfoHelpCenterBanner = t.ComplianceInfoGroup = undefined;
            t.ComplianceInfoStructuralField = function (e) {
                let {
                    valuesMap: t,
                    keys: o,
                    label: n
                } = e;
                const a = o.reduce((e, o) => t[o] ? e.concat(t[o]) : e, []);
                const l = a.length ? a.join(", ") : O();
                return E.default.createElement(P, null, E.default.createElement(T, {
                    value: l
                }), E.default.createElement(I, {
                    label: n
                }));
            };
            t.handleGrievanceOfficerDetailsError = t.handleCustomerCareDetailsError = t.getLegalEntityDetails = undefined;
            var a = n(o(348926));
            var l = n(o(420165));
            var r = o(637842);
            var i = o(778945);
            var c = n(o(831269));
            var d = n(o(969358));
            var u = o(753233);
            var s = o(258105);
            var f = o(690495);
            var p = n(o(469733));
            var m = n(o(932325));
            var C = o(956113);
            var _ = o(180519);
            var g = o(676345);
            var h = o(548360);
            var E = n(o(667294));
            var v = n(o(156720));
            const b = {
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
            const O = () => h.fbt._("Not Provided", null, {
                hk: "43OpXI"
            });
            t.ComplianceInfoGroup = e => {
                let {
                    title: t,
                    children: o
                } = e;
                return E.default.createElement(d.default, {
                    title: t,
                    xstyle: g.uiPadding.vert8
                }, o);
            };
            t.ComplianceInfoPrimitiveField = e => {
                let {
                    value: t,
                    label: o,
                    forceLTR: n
                } = e;
                return E.default.createElement(P, null, E.default.createElement(T, {
                    value: t,
                    forceLTR: n
                }), E.default.createElement(I, {
                    label: o
                }));
            };
            const P = e => {
                let {
                    children: t
                } = e;
                return E.default.createElement(c.default, {
                    multiline: true,
                    restrictSpacing: true
                }, E.default.createElement("div", {
                    className: (0, v.default)(g.uiPadding.vert8)
                }, t));
            };
            t.ComplianceInfoLoading = () => E.default.createElement(f.FlexRow, {
                align: "center",
                justify: "center",
                testid: "compliance-info-loading"
            }, E.default.createElement(p.default, null, E.default.createElement(C.Spinner, null)));
            t.ComplianceInfoHelpCenterBanner = e => {
                let {
                    xstyle: t
                } = e;
                return E.default.createElement("div", {
                    className: (0, v.default)(b.helpCenterBanner, t)
                }, h.fbt._("Indian law requires additional information from businesses selling online.", null, {
                    hk: "1zuHU2"
                }), " ", E.default.createElement(u.ExternalLink, {
                    href: (0, s.getIndiaEcommerceComplianceFaqUrl)()
                }, h.fbt._("Learn more", null, {
                    hk: "1JNnQ1"
                })));
            };
            const y = function () {
                var e = (0, a.default)(function* (e) {
                    const t = (e => (Array.isArray(e) ? e[0] : e).serialize())(yield i.BusinessProfileCollection.update(e, {
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
            t.getLegalEntityDetails = y;
            const I = e => {
                let {
                    label: t
                } = e;
                return E.default.createElement("div", {
                    className: (0, v.default)(b.fieldLabel)
                }, E.default.createElement(_.TextSpan, {
                    theme: "muted"
                }, t));
            };
            const T = e => {
                let {
                    value: t,
                    forceLTR: o = false
                } = e;
                const n = m.default.isRTL();
                return E.default.createElement("div", {
                    className: (0, v.default)(b.fieldValue, g.uiMargin.vert3, n && o && b.displayRight),
                    dir: o || !n ? "ltr" : "rtl"
                }, t || O());
            };
            t.handleCustomerCareDetailsError = (e, t, o, n) => {
                if (!(0, r.existsCustomerCareDetailsContact)(e, t, o, n)) {
                    (0, l.default)(h.fbt._("At least one phone number is required. Please provide another phone number before removing this.", null, {
                        hk: "2LGoJd"
                    }));
                }
            };
            t.handleGrievanceOfficerDetailsError = (e, t, o, n) => {
                if (!(0, r.existsGrievanceOfficerDetailsContact)(e, t, o, n)) {
                    (0, l.default)(h.fbt._("At least one contact method is required. Please provide another contact method first before removing this.", null, {
                        hk: "NXBiy"
                    }));
                }
            };
        },
        760157: (e, t, o) => {
            "use strict";

            var n = o(530066).default;
            var a = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const {
                    images: t,
                    renderFallback: o,
                    fallbackMediaData: a,
                    fetching: g,
                    onClick: h
                } = e;
                const E = (0, _.useRef)(null);
                const v = (0, _.useRef)(null);
                const b = (0, _.useRef)(null);
                const O = (0, _.useRef)(null);
                const P = (0, _.useRef)(null);
                const [y, I] = (0, _.useState)(null);
                const [T, S] = (0, _.useState)(t.filter(e => e.mediaData.mediaStage === s.MEDIA_DATA_STAGE.RESOLVED).length);
                const [k, A] = (0, _.useState)(false);
                const w = T === t.length;
                const M = () => S(e => e + 1);
                (0, _.useEffect)(() => {
                    let e = null;
                    if (!w && !o) {
                        var t;
                        var a;
                        const o = v.current;
                        if (!o) {
                            return;
                        }
                        if (!((t = b.current) === null || t === undefined)) {
                            t.controller.abort();
                        }
                        e = new n();
                        const i = e.signal;
                        const c = (((a = b.current) === null || a === undefined ? undefined : a.promise) || Promise.resolve()).then(() => (0, C.default)(o, {
                            opacity: [1, 0]
                        }, {
                            delay: 75,
                            duration: 50
                        }));
                        const d = (0, r.default)(c, i).then(() => {
                            if (i.aborted) {
                                throw new l.AbortError();
                            }
                            A(true);
                        }).catch((0, l.catchAbort)(() => {
                            (0, C.default)(o, "stop", true);
                        })).finally(() => {
                            b.current = null;
                        });
                        b.current = {
                            promise: d,
                            controller: e
                        };
                    }
                    return () => {
                        var t;
                        if (!((t = e) === null || t === undefined)) {
                            t.abort();
                        }
                    };
                }, [w, o]);
                const L = () => {
                    var e;
                    if ((e = E.current) === null || e === undefined ? undefined : e.children) {
                        if (E.current.scrollWidth === E.current.offsetWidth) {
                            return null;
                        } else if (E.current.scrollLeft === 0) {
                            return "next";
                        } else if (E.current.scrollWidth - 1 <= E.current.scrollLeft + E.current.offsetWidth) {
                            return "prev";
                        } else {
                            return "both";
                        }
                    } else {
                        return null;
                    }
                };
                (0, _.useEffect)(() => {
                    I(L());
                }, [w]);
                if (o && t.length === 0) {
                    return _.default.createElement("div", {
                        className: d.default.carousel,
                        dir: "ltr"
                    }, _.default.createElement("div", {
                        className: (0, c.classnamesConvertMeToStylexPlease)(d.default.contentContainer, d.default.slidesContainer)
                    }, a && _.default.createElement(u.default, {
                        altText: "",
                        mediaData: a,
                        renderFallback: true,
                        singleSlide: true
                    })));
                }
                let N;
                let R;
                let j;
                const D = () => {
                    O.current = null;
                    const e = L();
                    if (y !== e) {
                        I(e);
                    }
                };
                if (t.length > 1) {
                    const e = () => {
                        const e = E.current;
                        if (e != null && (y === "prev" || y === "both")) {
                            const t = e.scrollLeft + e.offsetWidth / 2;
                            let o = 0;
                            let n = e.lastElementChild;
                            for (; n instanceof HTMLElement && o === 0;) {
                                const e = n.offsetLeft + n.offsetWidth / 2;
                                if (e < t) {
                                    o = Math.floor(e - t);
                                }
                                n = n.previousElementSibling;
                            }
                            if (o !== 0) {
                                e.scrollBy({
                                    left: o,
                                    behavior: "smooth"
                                });
                            }
                        }
                    };
                    const t = () => {
                        const e = E.current;
                        if (e != null && (y === "next" || y === "both")) {
                            const t = e.scrollLeft + e.offsetWidth / 2;
                            let o = 0;
                            let n = e.firstElementChild;
                            for (; n instanceof HTMLElement && o === 0;) {
                                const e = n.offsetLeft + n.offsetWidth / 2;
                                if (t < e) {
                                    o = Math.floor(e - t);
                                }
                                n = n.nextElementSibling;
                            }
                            if (o !== 0) {
                                e.scrollBy({
                                    left: o,
                                    behavior: "smooth"
                                });
                            }
                        }
                    };
                    const o = () => {
                        P.current = null;
                        const e = L();
                        if (y !== e) {
                            I(e);
                        }
                    };
                    j = () => {
                        if (P.current == null) {
                            P.current = window.requestAnimationFrame(o);
                        }
                    };
                    if (w && y != null) {
                        N = _.default.createElement(i.ChevronButton, {
                            type: i.ButtonType.Prev,
                            onClick: e,
                            onKeyDown: e,
                            disabled: y !== "prev" && y !== "both",
                            theme: p.RoundTheme.Small,
                            overMedia: true
                        });
                        R = _.default.createElement(i.ChevronButton, {
                            type: i.ButtonType.Next,
                            onClick: t,
                            onKeyDown: t,
                            disabled: y !== "next" && y !== "both",
                            theme: p.RoundTheme.Small,
                            overMedia: true
                        });
                    }
                }
                const x = t.length === 1;
                const B = t.map((e, t) => _.default.createElement(u.default, {
                    key: t,
                    altText: "",
                    image: e,
                    singleSlide: x,
                    mediaData: e.mediaData,
                    onClick: h,
                    onLoad: M
                }));
                const W = w ? null : _.default.createElement("div", {
                    className: (0, c.classnamesConvertMeToStylexPlease)(d.default.contentContainer, d.default.spinnerContainer)
                }, _.default.createElement("div", {
                    className: d.default.spinner,
                    ref: v
                }, _.default.createElement(m.Spinner, {
                    color: "default",
                    size: 50,
                    stroke: 4
                })));
                const F = (0, c.classnamesConvertMeToStylexPlease)({
                    [d.default.loaded]: !g && w,
                    [d.default.fadeIn]: k,
                    [d.default.carousel]: true
                });
                return _.default.createElement("div", {
                    className: F,
                    dir: "ltr"
                }, W, _.default.createElement("div", {
                    ref: E,
                    className: (0, c.classnamesConvertMeToStylexPlease)(d.default.contentContainer, d.default.slidesContainer),
                    onScroll: j
                }, B), N, R, _.default.createElement(f.default, {
                    onResize: () => {
                        if (O.current == null) {
                            O.current = window.requestAnimationFrame(D);
                        }
                    }
                }));
            };
            var l = o(898817);
            var r = a(o(229922));
            var i = o(305989);
            var c = o(396574);
            var d = a(o(851713));
            var u = a(o(585760));
            var s = o(172259);
            var f = a(o(929796));
            var p = o(435595);
            var m = o(956113);
            var C = a(o(330619));
            var _ = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var o = g(t);
                if (o && o.has(e)) {
                    return o.get(e);
                }
                var n = {};
                var a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e) {
                    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
                        var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                        if (r && (r.get || r.set)) {
                            Object.defineProperty(n, l, r);
                        } else {
                            n[l] = e[l];
                        }
                    }
                }
                n.default = e;
                if (o) {
                    o.set(e, n);
                }
                return n;
            }(o(667294));

            function g (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var o = new WeakMap();
                return (g = function (e) {
                    if (e) {
                        return o;
                    } else {
                        return t;
                    }
                })(e);
            }
            a(o(730523)).default.polyfill();
        },
        585760: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = undefined;
            var a = n(o(897679));
            var l = o(172259);
            var r = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var o = c(t);
                if (o && o.has(e)) {
                    return o.get(e);
                }
                var n = {};
                var a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e) {
                    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
                        var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                        if (r && (r.get || r.set)) {
                            Object.defineProperty(n, l, r);
                        } else {
                            n[l] = e[l];
                        }
                    }
                }
                n.default = e;
                if (o) {
                    o.set(e, n);
                }
                return n;
            }(o(667294));
            var i = o(655241);

            function c (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var o = new WeakMap();
                return (c = function (e) {
                    if (e) {
                        return o;
                    } else {
                        return t;
                    }
                })(e);
            }
            var d = e => {
                let {
                    mediaData: t,
                    altText: o,
                    image: n,
                    singleSlide: c,
                    renderFallback: d,
                    onClick: u,
                    onLoad: s,
                    forwardRef: f
                } = e;
                const {
                    fullHeight: p,
                    fullWidth: m,
                    mediaStage: C,
                    renderableUrl: _
                } = (0, i.useModelValues)(t, ["fullHeight", "fullWidth", "mediaStage", "renderableUrl"]);
                const g = (0, r.useRef)(null);
                const h = (0, r.useRef)(C === l.MEDIA_DATA_STAGE.RESOLVED);
                (0, r.useEffect)(() => {
                    if (!(!s || h.current || d || C !== l.MEDIA_DATA_STAGE.RESOLVED)) {
                        s();
                        h.current = true;
                    }
                }, [s, d, C]);
                const E = !!c;
                let v = m && p ? m / p : 0.8;
                if (v < 0.8) {
                    v = 0.8;
                }
                if (v > 1.91) {
                    v = 1.91;
                }
                if (v > 1 && !E) {
                    v = 1;
                }
                const b = {
                    width: E && v < 1 ? v * 100 + "%" : v !== 1 || c ? null : "100%"
                };
                const O = {
                    paddingTop: `${Math.floor(100 / v)}%`
                };
                const P = {
                    cursor: "" + (u ? "pointer" : "auto")
                };
                return r.default.createElement("div", {
                    ref: f ? e => f(e) : null,
                    className: a.default.slide,
                    style: b
                }, r.default.createElement("div", {
                    className: a.default.slideInnerContainer,
                    style: O
                }, r.default.createElement("img", {
                    ref: g,
                    alt: o,
                    src: _,
                    className: a.default.image,
                    style: P,
                    draggable: "false",
                    onClick: () => {
                        if (u && g.current && n) {
                            u(g.current, n);
                        }
                    }
                })));
            };
            t.default = d;
        },
        210002: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const [t, o] = (0, v.useFlow)(O.Select);
                const n = (0, E.useRef)([]);
                const b = (0, E.useRef)([]);
                const P = function () {
                    var e = (0, a.default)(function* (e) {
                        if (e.isUser && e.contact.isContactBlocked) {
                            yield(0, r.unblockContact)(e.contact);
                        }
                    });
                    return function () {
                        return e.apply(this, arguments);
                    };
                }();
                if (o.step == null) {
                    return null;
                }
                let y;
                switch (o.step) {
                    case O.Select: {
                        const t = function () {
                            var e = (0, a.default)(function* (e, t) {
                                yield P(e);
                                if (e.active) {
                                    c.ComposeBoxActions.paste(e, t);
                                } else {
                                    e.setComposeContents({
                                        text: t,
                                        timestamp: (0, l.unixTime)()
                                    });
                                    i.Cmd.openChatFromUnread(e).then(t => {
                                        if (t) {
                                            c.ComposeBoxActions.focus(e);
                                        }
                                    });
                                }
                            });
                            return function () {
                                return e.apply(this, arguments);
                            };
                        }();
                        const r = function () {
                            var n = (0, a.default)(function* (n) {
                                b.current = n;
                                if (n.length === 1) {
                                    const a = n[0];
                                    yield t(a, e.text);
                                    o.end();
                                    if (window.innerWidth <= u.LAYOUT_2COLUMNS_MAX_WIDTH) {
                                        d.DrawerManager.closeDrawerRight();
                                    }
                                } else {
                                    o.push(O.TextMessage);
                                }
                                if (e.onSend) {
                                    e.onSend();
                                }
                            });
                            return function () {
                                return n.apply(this, arguments);
                            };
                        }();
                        y = E.default.createElement(f.SelectModal, {
                            title: e.title || h.fbt._("Send message to", null, {
                                hk: "2kkuQs"
                            }),
                            tsNavigationData: g.default.isNewsletter(e.origin) && (0, s.isNewsletterTSLEnabled)() ? {
                                surface: "channel-forward",
                                extras: {
                                    channelWid: e.origin
                                }
                            } : undefined,
                            listType: f.ListType.ChatSelectModal,
                            getInitialItems: () => n.current,
                            maxItems: C.MULTICAST_LIMIT_GLOBAL,
                            onConfirm: r,
                            onCancel: () => o.end(),
                            onSelectionChanged: (e, t, o) => {
                                n.current = o;
                            },
                            singleSelectionFooterType: p.FooterType.NEXT,
                            multipleSelectionFooterType: p.FooterType.NEXT
                        });
                        break;
                    }
                    case O.TextMessage: {
                        const t = (e, t, n) => {
                            e.forEach(function () {
                                var e = (0, a.default)(function* (e) {
                                    yield P(e);
                                    i.Cmd.once("ui_idle", () => {
                                        (0, m.sendTextMsgToChat)(e, t, {
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
                        y = E.default.createElement(_.default, {
                            defaultText: e.text,
                            title: e.title || h.fbt._("Send message to", null, {
                                hk: "2kkuQs"
                            }),
                            onSend: (e, o) => t(b.current, e, o),
                            onBack: () => o.pop()
                        });
                        break;
                    }
                }
                return E.default.createElement(t, {
                    flow: o
                }, y);
            };
            var a = n(o(348926));
            var l = o(632157);
            var r = o(547979);
            var i = o(780549);
            var c = o(877171);
            var d = o(900316);
            var u = o(914368);
            var s = o(73225);
            var f = o(61740);
            var p = o(792882);
            var m = o(498703);
            var C = o(962260);
            var _ = n(o(155105));
            var g = n(o(124928));
            var h = o(548360);
            var E = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var o = b(t);
                if (o && o.has(e)) {
                    return o.get(e);
                }
                var n = {};
                var a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e) {
                    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
                        var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                        if (r && (r.get || r.set)) {
                            Object.defineProperty(n, l, r);
                        } else {
                            n[l] = e[l];
                        }
                    }
                }
                n.default = e;
                if (o) {
                    o.set(e, n);
                }
                return n;
            }(o(667294));
            var v = o(839062);

            function b (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var o = new WeakMap();
                return (b = function (e) {
                    if (e) {
                        return o;
                    } else {
                        return t;
                    }
                })(e);
            }
            const O = o(76672).Mirrored(["Select", "TextMessage"]);
        },
        550506: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const t = (0, p.useModelValues)((0, l.default)(e.chat.groupMetadata, "props.chat.groupMetadata"), ["subject"]);
                const [o, n] = (0, f.useState)(t.subject);
                const m = function () {
                    var t = (0, a.default)(function* (t) {
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
                const _ = e.onOK ? f.default.createElement(r.default, {
                    testid: "popup-controls-ok",
                    type: "primary",
                    onClick: m,
                    disabled: !C
                }, s.fbt._("Save", null, {
                    hk: "3wTUdX"
                })) : null;
                const g = e.onCancel ? f.default.createElement(r.default, {
                    testid: "popup-controls-cancel",
                    type: "secondary",
                    onClick: t => {
                        var o;
                        t.stopPropagation();
                        t.preventDefault();
                        if (!((o = e.onCancel) === null || o === undefined)) {
                            o.call(e);
                        }
                    }
                }, s.fbt._("Cancel", null, {
                    hk: "H0gNq"
                })) : null;
                const h = f.default.createElement(u.ButtonGroup, {
                    direction: "horizontal",
                    align: "end"
                }, g, _);
                const E = f.default.createElement(c.RichTextField, {
                    testid: "text-message-modal-text-unput",
                    value: o,
                    maxLength: d.ServerProps.maxSubject,
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
                return f.default.createElement(i.Modal, {
                    title: s.fbt._("Name Your Group", null, {
                        hk: "23gkmL"
                    }),
                    actions: h
                }, e.subtext, E);
            };
            var a = n(o(348926));
            var l = n(o(670983));
            var r = n(o(692629));
            var i = o(118612);
            var c = o(202391);
            var d = o(937001);
            var u = o(617425);
            var s = o(548360);
            var f = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var o = m(t);
                if (o && o.has(e)) {
                    return o.get(e);
                }
                var n = {};
                var a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e) {
                    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
                        var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                        if (r && (r.get || r.set)) {
                            Object.defineProperty(n, l, r);
                        } else {
                            n[l] = e[l];
                        }
                    }
                }
                n.default = e;
                if (o) {
                    o.set(e, n);
                }
                return n;
            }(o(667294));
            var p = o(655241);

            function m (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var o = new WeakMap();
                return (m = function (e) {
                    if (e) {
                        return o;
                    } else {
                        return t;
                    }
                })(e);
            }
        },
        499717: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const {
                    contact: t,
                    getZoomNode: o,
                    animateBorderRadius: n,
                    animateSquircle: T = false
                } = e;
                const [k, A] = (0, P.useContactValues)(e.contact.id, [u.getFormattedUser, i.getId]);
                const w = (0, y.useModelValues)(e.profilePicThumb, ["imgFull"]).imgFull;
                const [M, L] = (0, O.useState)(w);
                if (w != null && M !== w) {
                    L(w);
                }
                const [N, R] = (0, O.useState)(() => v.default.isPSA(e.contact.id) ? {
                    visibility: "visible",
                    transform: "translateX(0px) translateY(0px) scale(1)",
                    borderRadius: "0%",
                    transition: "transform 500ms cubic-bezier(.1,.82,.25,1),\n                  border-radius 500ms cubic-bezier(.1,.82,.25,1)"
                } : {
                    visibility: "hidden"
                });
                const [j, D] = (0, O.useState)(() => v.default.isPSA(e.contact.id) ? {
                    width: 640,
                    height: 641
                } : null);
                const x = (0, O.useRef)(false);
                const B = (0, O.useRef)();
                const W = (0, O.useRef)();
                (0, O.useEffect)(() => {
                    const e = W.current;
                    W.current = null;
                    if (!(e == null)) {
                        e();
                    }
                });
                const F = e => {
                    const t = e.currentTarget;
                    D({
                        width: t.naturalWidth,
                        height: t.naturalHeight
                    });
                    W.current = () => o(e => {
                        const o = t.getBoundingClientRect();
                        const a = e.getBoundingClientRect();
                        const l = a.top - o.top;
                        const r = {
                            visibility: "hidden",
                            transform: `translateX(${a.left - o.left}px) translateY(${l}px) scale(${e.clientWidth / t.clientWidth})`,
                            transition: "transform 0s",
                            borderRadius: undefined
                        };
                        if (n) {
                            r.borderRadius = "50%";
                        }
                        R(r);
                        W.current = () => {
                            let e = {
                                transform: "translateX(0px) translateY(0px) scale(1)",
                                transition: "transform 500ms cubic-bezier(.1,.82,.25,1)"
                            };
                            if (n) {
                                e = {
                                    transform: "translateX(0px) translateY(0px) scale(1)",
                                    borderRadius: "0%",
                                    transition: "transform 500ms cubic-bezier(.1,.82,.25,1),\n                                       border-radius 500ms cubic-bezier(.1,.82,.25,1)"
                                };
                            }
                            R(e);
                        };
                    });
                };
                const H = (0, I.default)(() => {
                    if (x.current) {
                        return;
                    }
                    let e;
                    x.current = true;
                    o(t => {
                        e = t;
                    });
                    if (!e) {
                        return p.ModalManager.closeMedia();
                    }
                    const t = B.current;
                    if (t) {
                        if (n || T) {
                            t.style.transition = (T ? "clip-path" : "border-radius") + " 500ms cubic-bezier(.1,.82,.25,1)";
                            if (T) {
                                t.style.clipPath = "var(--squircle-polygon)";
                            } else {
                                t.style.borderRadius = "50%";
                            }
                        }
                        const o = (0, a.default)(e, "start");
                        const l = t.getBoundingClientRect();
                        const r = o.getBoundingClientRect();
                        const i = r.top - l.top;
                        const c = r.left - l.left;
                        const d = o.clientWidth / t.clientWidth;
                        (0, h.default)(t, {
                            translateX: [c, 0],
                            translateY: [i, 0],
                            scale: [d, 1]
                        }, {
                            duration: 200,
                            easing: [0.1, 0.82, 0.25, 1]
                        }).then(() => {
                            p.ModalManager.closeMedia();
                        });
                    }
                });
                let V;
                let U;
                (0, O.useEffect)(() => {
                    if (!w) {
                        H();
                    }
                }, [w, H]);
                if (v.default.isPSA(A)) {
                    V = O.default.createElement(E.WaChatPsaIcon, {
                        iconXstyle: S.avatarDefaultPSALarge
                    });
                    U = O.default.createElement(E.WaChatPsaIcon, {
                        iconXstyle: S.avatarDefaultPSASmall
                    });
                } else if (M) {
                    V = O.default.createElement(s.default, {
                        src: M,
                        hasPrivacyChecks: true,
                        onLoad: F,
                        crossOrigin: false,
                        className: _.default.profileViewerImg
                    });
                    U = O.default.createElement(c.DetailImage, {
                        id: A,
                        size: 40,
                        shape: T ? c.DetailImageShape.Squircle : null
                    });
                }
                return O.default.createElement(g.UIE, {
                    displayName: "PhotoViewer",
                    escapable: true,
                    requestDismiss: H
                }, O.default.createElement("div", {
                    className: (0, r.classnamesConvertMeToStylexPlease)("overlay", _.default.container),
                    onWheel: e => {
                        if (Math.abs(e.deltaY) > 3) {
                            H();
                        }
                    },
                    onClick: H
                }, O.default.createElement("div", {
                    className: _.default.headerContainer
                }, O.default.createElement("div", {
                    className: _.default.profileThumb
                }, O.default.createElement(l.default, {
                    image: U,
                    theme: "plain",
                    primary: O.default.createElement(m.Name, {
                        contact: t,
                        selectable: true
                    })
                })), O.default.createElement("div", {
                    className: _.default.mediaPanelTools
                }, O.default.createElement(f.MenuBar, {
                    key: "media-panel-header",
                    theme: "strong"
                }, O.default.createElement(f.MenuBarItem, {
                    testid: "btn-close",
                    icon: O.default.createElement(b.XViewerIcon, null),
                    title: (0, d.default)("Close"),
                    onClick: H
                })))), O.default.createElement("div", {
                    className: _.default.profileContainer,
                    dir: "ltr"
                }, O.default.createElement("div", {
                    className: _.default.media
                }, O.default.createElement(C.default, {
                    type: "scaleDown",
                    size: j
                }, O.default.createElement("div", {
                    className: _.default.profileViewer,
                    ref: B,
                    style: N
                }, V))))));
            };
            var a = n(o(670983));
            var l = n(o(170206));
            var r = o(396574);
            var i = o(660666);
            var c = o(23641);
            var d = n(o(395767));
            var u = o(714574);
            var s = n(o(488922));
            var f = o(526795);
            var p = o(114850);
            var m = o(21645);
            var C = n(o(821384));
            var _ = n(o(949980));
            var g = o(392632);
            var h = n(o(330619));
            var E = o(633947);
            var v = n(o(124928));
            var b = o(776770);
            var O = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var o = T(t);
                if (o && o.has(e)) {
                    return o.get(e);
                }
                var n = {};
                var a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e) {
                    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
                        var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                        if (r && (r.get || r.set)) {
                            Object.defineProperty(n, l, r);
                        } else {
                            n[l] = e[l];
                        }
                    }
                }
                n.default = e;
                if (o) {
                    o.set(e, n);
                }
                return n;
            }(o(667294));
            n(o(156720));
            var P = o(379811);
            var y = o(655241);
            var I = n(o(17533));

            function T (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var o = new WeakMap();
                return (T = function (e) {
                    if (e) {
                        return o;
                    } else {
                        return t;
                    }
                })(e);
            }
            const S = {
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
                    size: o,
                    tabIndex: n
                } = e;
                const C = !t.canSet() && !t.canDelete();
                const [_, g] = (0, p.useState)(false);
                const h = (0, m.default)();
                return p.default.createElement(u.PhotoPickerLoadable, {
                    tabIndex: n,
                    type: d.PhotoPickerType.PROFILE,
                    id: t.id,
                    attachToChat: false,
                    pending: _,
                    startImage: t.imgFull,
                    readOnly: C,
                    onImageSet: (t, o) => {
                        const n = e.profilePicThumb;
                        let d;
                        g(true);
                        let u = false;
                        if (t != null && o != null) {
                            d = (0, s.setProfilePic)(n, t, o);
                        } else {
                            u = true;
                            d = (0, s.deleteProfilePic)(n);
                        }
                        (0, r.default)(d, h).catch((0, l.filteredCatch)(c.ActionError, () => {
                            __LOG__(3)`ProfileDrawer: failed to set/delete profile image`;
                        })).catch((0, a.catchAbort)(() => {})).finally(() => {
                            g(false);
                            if (u) {
                                (0, f.setLastProfilePicThumbUpdate)((0, i.unixTime)());
                            }
                        });
                    },
                    size: o
                });
            };
            var a = o(898817);
            var l = o(122583);
            var r = n(o(229922));
            var i = o(632157);
            var c = _(o(288057));
            var d = o(588792);
            var u = o(511696);
            var s = o(115948);
            var f = o(757453);
            var p = _(o(667294));
            var m = n(o(895851));

            function C (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var o = new WeakMap();
                return (C = function (e) {
                    if (e) {
                        return o;
                    } else {
                        return t;
                    }
                })(e);
            }

            function _ (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var o = C(t);
                if (o && o.has(e)) {
                    return o.get(e);
                }
                var n = {};
                var a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e) {
                    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
                        var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                        if (r && (r.get || r.set)) {
                            Object.defineProperty(n, l, r);
                        } else {
                            n[l] = e[l];
                        }
                    }
                }
                n.default = e;
                if (o) {
                    o.set(e, n);
                }
                return n;
            }
        },
        155105: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = undefined;
            var a = n(o(330383));
            var l = n(o(846870));
            var r = n(o(908081));
            var i = n(o(324093));
            var c = o(626194);
            var d = o(305521);
            var u = o(81644);
            var s = n(o(428543));
            var f = o(118612);
            var p = o(202391);
            var m = o(435595);
            var C = o(848605);
            var _ = o(392632);
            var g = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var o = v(t);
                if (o && o.has(e)) {
                    return o.get(e);
                }
                var n = {};
                var a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e) {
                    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
                        var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                        if (r && (r.get || r.set)) {
                            Object.defineProperty(n, l, r);
                        } else {
                            n[l] = e[l];
                        }
                    }
                }
                n.default = e;
                if (o) {
                    o.set(e, n);
                }
                return n;
            }(o(667294));
            var h = n(o(156720));
            var E = o(253155);

            function v (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var o = new WeakMap();
                return (v = function (e) {
                    if (e) {
                        return o;
                    } else {
                        return t;
                    }
                })(e);
            }
            const b = {
                display: "p357zi0d",
                flexDirection: "f8m0rgwh",
                height: "cctpw5f5",
                paddingBottom: "bxcbqipq",
                overflowX: "gfz4du6o",
                overflowY: "r7fjleex",
                backgroundColor: "rv6u8h8g"
            };
            const O = {
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
            const I = (e, t) => {
                const {
                    defaultText: o,
                    title: n,
                    onSend: v,
                    onBack: I
                } = e;
                const [T, S] = (0, g.useState)(o);
                const k = (0, E.findFirstWebLink)(T);
                const {
                    linkPreview: A,
                    clearLinkPreview: w
                } = (0, E.useLinkPreview)(k);
                const M = n ? g.default.createElement(d.EmojiText, {
                    text: n,
                    direction: "auto",
                    titlify: true,
                    ellipsify: true
                }) : null;
                const {
                    title: L,
                    canonicalUrl: N,
                    description: R,
                    thumbnail: j
                } = A || {};
                const D = A ? g.default.createElement(_.UIE, {
                    displayName: "ComposeBoxLinkPreview",
                    escapable: true,
                    requestDismiss: w
                }, g.default.createElement(a.default, {
                    onOmit: w
                }, g.default.createElement(s.default, {
                    title: L,
                    compose: true,
                    canonicalUrl: N,
                    description: R,
                    thumbnailJpeg: j,
                    isLoading: false
                }))) : null;
                return g.default.createElement(f.Modal, {
                    ref: t,
                    type: f.ModalTheme.Box
                }, g.default.createElement(r.default, null, g.default.createElement(c.DrawerHeader, {
                    type: c.DRAWER_HEADER_TYPE.POPUP,
                    onBack: I
                }, M), g.default.createElement(i.default, null, g.default.createElement(u.HotKeys, {
                    className: (0, h.default)(b)
                }, g.default.createElement("div", {
                    className: (0, h.default)(O)
                }, g.default.createElement(p.RichTextField, {
                    testid: "text-message-modal-text-unput",
                    value: T,
                    maxLength: l.default.MAX_TXT_MSG_SIZE,
                    onChange: e => {
                        let {
                            text: t
                        } = e;
                        S(t);
                    },
                    supportsEmoji: true,
                    multiline: true,
                    spellCheck: true,
                    showRemaining: true,
                    focusOnMount: true,
                    theme: "small",
                    textFormatEnabled: true
                })), D)), g.default.createElement("div", {
                    className: (0, h.default)(P)
                }, g.default.createElement("div", {
                    className: (0, h.default)(y)
                }, g.default.createElement(m.Round, {
                    large: true,
                    onClick: () => {
                        if (T.length) {
                            v(T, A);
                        }
                    }
                }, g.default.createElement(C.SendIcon, {
                    directional: true
                }))))));
            };
            var T = (0, g.forwardRef)(I);
            t.default = T;
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
                    iconHeight: d,
                    label: s,
                    disabled: f,
                    xstyle: p,
                    onClick: m
                } = e;
                const {
                    isHovered: C,
                    onMouseEnter: _,
                    onMouseLeave: g
                } = function () {
                    const [e, t] = (0, i.useState)(false);
                    const o = (0, i.useCallback)(() => {
                        t(true);
                    }, []);
                    const n = (0, i.useCallback)(() => {
                        t(false);
                    }, []);
                    return {
                        isHovered: e,
                        onMouseEnter: o,
                        onMouseLeave: n
                    };
                }();
                const h = i.default.createElement(o, {
                    directional: true,
                    color: l.SvgColorProp.TEAL,
                    width: n,
                    height: d
                });
                return i.default.createElement("div", {
                    className: (0, c.default)(u.button, f && u.disabled, p),
                    onMouseEnter: _,
                    onMouseLeave: g
                }, i.default.createElement(a.Round, {
                    inverted: true,
                    onClick: m,
                    disabled: f,
                    testid: t,
                    hideBackground: f || !C
                }, h), i.default.createElement(r.default, {
                    xstyle: u.label,
                    disabled: f,
                    testid: t,
                    onClick: m
                }, s));
            };
            var a = o(435595);
            var l = o(220584);
            var r = n(o(625903));
            var i = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var o = d(t);
                if (o && o.has(e)) {
                    return o.get(e);
                }
                var n = {};
                var a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e) {
                    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
                        var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                        if (r && (r.get || r.set)) {
                            Object.defineProperty(n, l, r);
                        } else {
                            n[l] = e[l];
                        }
                    }
                }
                n.default = e;
                if (o) {
                    o.set(e, n);
                }
                return n;
            }(o(667294));
            var c = n(o(156720));

            function d (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var o = new WeakMap();
                return (d = function (e) {
                    if (e) {
                        return o;
                    } else {
                        return t;
                    }
                })(e);
            }
            const u = {
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
        684625: (e, t, o) => {
            "use strict";

            var n = o(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function () {
                const e = (0, d.getBlueFaqUrl)();
                const t = (0, a.getABPropConfigValue)("blue_education_v2_enabled") ? f.fbt._("WhatsApp's parent company Meta has authenticated details of this account with trusted documentation.", null, {
                    hk: "2dldpe"
                }) : f.fbt._("WhatsApp's parent company Meta has authenticated business details of this account. Some verified accounts are owned by a notable person or business and others are Meta Verified subscribers.", null, {
                    hk: "1uaSm1"
                });
                return p.default.createElement(r.ConfirmPopup, {
                    title: f.fbt._("Verified", null, {
                        hk: "cNJrO"
                    }),
                    onOK: () => {
                        s.ModalManager.close();
                    },
                    okText: (0, u.default)("Close")
                }, p.default.createElement(i.EmojiText, {
                    text: t
                }), p.default.createElement("br", null), p.default.createElement("br", null), p.default.createElement(l.default, {
                    href: e,
                    onClick: t => {
                        t.preventDefault();
                        s.ModalManager.close();
                        self.setTimeout(() => (0, c.openExternalLink)(e), 10);
                    }
                }, f.fbt._("Learn more about verified accounts", null, {
                    hk: "3MnT4o"
                })));
            };
            var a = o(287461);
            var l = n(o(196554));
            var r = o(103440);
            var i = o(305521);
            var c = o(753233);
            var d = o(258105);
            var u = n(o(395767));
            var s = o(114850);
            var f = o(548360);
            var p = n(o(667294));
        },
        243224: (e, t, o) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.logClickProfileBadge = function (e) {
                if (!(0, r.isBlueP0LoggingEnabled)()) {
                    return;
                }
                const t = (0, n.getId)(e).toJid();
                const o = {
                    businessOwnerJid: t,
                    metaVerifiedInteractionAction: c.META_VERIFIED_INTERACTION_ACTION.MV_INTERACTION_ACTION_CLICK_MV_BADGE,
                    metaVerifiedInteractionReferral: u.META_VERIFIED_INTERACTION_REFERRAL.CHAT_PROFILE,
                    metaVerifiedInteractionSurface: s.META_VERIFIED_INTERACTION_SURFACE.BUSINESS_PROFILE
                };
                const f = (0, a.getMaybeBizPlatformForLogging)(t);
                if (f === i.BIZ_PLATFORM.ENT) {
                    o.metaVerifiedInteractionAssetType = d.META_VERIFIED_INTERACTION_ASSET_TYPE.ENT;
                } else if (f === i.BIZ_PLATFORM.SMB) {
                    o.metaVerifiedInteractionAssetType = d.META_VERIFIED_INTERACTION_ASSET_TYPE.SMB;
                }
                new l.MetaVerifiedInteractionWamEvent(o).commit();
            };
            var n = o(660666);
            var a = o(834110);
            var l = o(340123);
            var r = o(97858);
            var i = o(618112);
            var c = o(158248);
            var d = o(453396);
            var u = o(711343);
            var s = o(167889);
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
                    href: f,
                    linkedAccountType: m,
                    onClick: C,
                    rowTheme: _,
                    hasCoverPhoto: g
                } = e;
                const h = (0, s.useContext)(r.DrawerContext);
                const E = (0, c.getProductCatalogSessionId)(h);
                (0, s.useEffect)(() => {
                    (0, a.logLinkedAccountImpression)(E, m, g);
                }, [E, m, g]);
                return s.default.createElement(u.default, {
                    testid: "social-row",
                    onClick: () => {
                        if (f !== undefined) {
                            const e = (0, d.getWebsiteLink)(f);
                            i.default.open(e);
                            if (!(C == null)) {
                                C();
                            }
                        }
                    },
                    disabled: f === undefined,
                    xstyle: p.button
                }, s.default.createElement(l.default, {
                    image: n,
                    primary: t,
                    secondary: o,
                    theme: _,
                    idle: f === undefined
                }));
            };
            var a = o(815651);
            var l = n(o(170206));
            var r = o(568550);
            var i = n(o(524173));
            var c = o(932523);
            var d = o(341463);
            var u = n(o(625903));
            var s = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var o = f(t);
                if (o && o.has(e)) {
                    return o.get(e);
                }
                var n = {};
                var a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e) {
                    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
                        var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                        if (r && (r.get || r.set)) {
                            Object.defineProperty(n, l, r);
                        } else {
                            n[l] = e[l];
                        }
                    }
                }
                n.default = e;
                if (o) {
                    o.set(e, n);
                }
                return n;
            }(o(667294));
            n(o(156720));

            function f (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var o = new WeakMap();
                return (f = function (e) {
                    if (e) {
                        return o;
                    } else {
                        return t;
                    }
                })(e);
            }
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
                    fbPage: h,
                    igProfessional: E
                } = (0, C.useModelValues)(o, ["fbPage", "igProfessional"]);
                const v = (0, s.getProductCatalogSessionId)((0, m.useContext)(r.DrawerContext));
                const b = [];
                if (h == null ? undefined : h.displayName) {
                    const e = h.likes ? p.fbt._({
                        "*": "Facebook • {count} Likes",
                        _1: "Facebook • 1 Like"
                    }, [p.fbt._plural(h.likes, "count")], {
                        hk: "4fuveG"
                    }) : p.fbt._("Facebook", null, {
                        hk: "2PcUTa"
                    });
                    b.push(m.default.createElement(l.default, {
                        key: "fb",
                        Icon: m.default.createElement(d.LogoFacebookRoundIcon, {
                            iconXstyle: g.iconColor
                        }),
                        text: h.displayName,
                        secondary: e,
                        href: `https://www.facebook.com/${h.id}`,
                        rowTheme: _,
                        onClick: () => {
                            (0, a.logLinkedFbClick)(v, h.likes, !!o.coverPhoto);
                        },
                        linkedAccountType: f.BUSINESS_TOOLS_LINKED_ACCOUNT_TYPE.FACEBOOK,
                        hasCoverPhoto: !!o.coverPhoto
                    }));
                }
                if (E == null ? undefined : E.handle) {
                    const e = E.followers ? p.fbt._({
                        "*": "Instagram • {count} Followers",
                        _1: "Instagram • 1 Follower"
                    }, [p.fbt._plural(E.followers, "count")], {
                        hk: "4gGhJG"
                    }) : p.fbt._("Instagram", null, {
                        hk: "4kjnWv"
                    });
                    b.push(m.default.createElement(l.default, {
                        key: "ig",
                        Icon: m.default.createElement(u.LogoInstagramColorIcon, null),
                        text: `@${E.handle}`,
                        secondary: e,
                        href: `https://www.instagram.com/${E.handle}`,
                        rowTheme: _,
                        onClick: () => {
                            (0, a.logLinkedIgClick)(v, E.followers, !!o.coverPhoto);
                        },
                        linkedAccountType: f.BUSINESS_TOOLS_LINKED_ACCOUNT_TYPE.INSTAGRAM,
                        hasCoverPhoto: !!o.coverPhoto
                    }));
                }
                if (b.length === 0) {
                    return null;
                }
                let O;
                if (t === true) {
                    const e = p.fbt._("Facebook and Instagram handles can only be edited from the app on your mobile device.", null, {
                        hk: "3JNYRt"
                    });
                    O = m.default.createElement(c.EmojiText, {
                        direction: "inherit",
                        xstyle: g.infoText,
                        text: e.toString()
                    });
                }
                return m.default.createElement(i.default, {
                    theme: n
                }, b.map(e => e), O);
            };
            var a = o(815651);
            var l = n(o(504838));
            var r = o(568550);
            var i = n(o(969358));
            var c = o(305521);
            var d = o(286975);
            var u = o(200592);
            var s = o(932523);
            var f = o(413863);
            var p = o(548360);
            var m = function (e, t) {
                if (!t && e && e.__esModule) {
                    return e;
                }
                if (e === null || typeof e != "object" && typeof e != "function") {
                    return {
                        default: e
                    };
                }
                var o = _(t);
                if (o && o.has(e)) {
                    return o.get(e);
                }
                var n = {};
                var a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e) {
                    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
                        var r = a ? Object.getOwnPropertyDescriptor(e, l) : null;
                        if (r && (r.get || r.set)) {
                            Object.defineProperty(n, l, r);
                        } else {
                            n[l] = e[l];
                        }
                    }
                }
                n.default = e;
                if (o) {
                    o.set(e, n);
                }
                return n;
            }(o(667294));
            n(o(156720));
            var C = o(655241);

            function _ (e) {
                if (typeof WeakMap != "function") {
                    return null;
                }
                var t = new WeakMap();
                var o = new WeakMap();
                return (_ = function (e) {
                    if (e) {
                        return o;
                    } else {
                        return t;
                    }
                })(e);
            }
            const g = {
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
                u({
                    viewBusinessProfileAction: d.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_CATALOG_ICON,
                    catalogSessionId: e,
                    isProfileLinked: t,
                    hasCoverPhoto: o
                });
            };
            t.logEmailClick = function (e, t, o) {
                u({
                    viewBusinessProfileAction: d.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_EMAIL,
                    catalogSessionId: e,
                    isProfileLinked: t,
                    hasCoverPhoto: o
                });
            };
            t.logForwardClick = function (e, t, o) {
                u({
                    viewBusinessProfileAction: d.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_FORWARD,
                    catalogSessionId: e,
                    isProfileLinked: t,
                    hasCoverPhoto: o
                });
            };
            t.logHoursClick = function (e, t, o) {
                u({
                    viewBusinessProfileAction: d.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_HOURS,
                    catalogSessionId: e,
                    isProfileLinked: t,
                    hasCoverPhoto: o
                });
            };
            t.logLinkedAccountImpression = function (e, t, o) {
                u({
                    viewBusinessProfileAction: d.VIEW_BUSINESS_PROFILE_ACTION.ACTION_APP_IMPRESSION,
                    linkedAccount: t,
                    catalogSessionId: e,
                    isProfileLinked: true,
                    hasCoverPhoto: o
                });
            };
            t.logLinkedFbClick = function (e, t, o) {
                u({
                    viewBusinessProfileAction: d.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_APP_LINK,
                    linkedAccount: i.BUSINESS_TOOLS_LINKED_ACCOUNT_TYPE.FACEBOOK,
                    catalogSessionId: e,
                    bizFbSize: s(t),
                    isProfileLinked: true,
                    hasCoverPhoto: o
                });
            };
            t.logLinkedIgClick = function (e, t, o) {
                u({
                    viewBusinessProfileAction: d.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_APP_LINK,
                    linkedAccount: i.BUSINESS_TOOLS_LINKED_ACCOUNT_TYPE.INSTAGRAM,
                    catalogSessionId: e,
                    bizIgSize: s(t),
                    isProfileLinked: true,
                    hasCoverPhoto: o
                });
            };
            t.logLocationClick = function (e, t, o) {
                u({
                    viewBusinessProfileAction: d.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_LOCATION,
                    catalogSessionId: e,
                    isProfileLinked: t,
                    hasCoverPhoto: o
                });
            };
            t.logMessageClick = function (e, t, o) {
                u({
                    viewBusinessProfileAction: d.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_MESSAGE,
                    catalogSessionId: e,
                    hasCoverPhoto: o
                });
            };
            t.logProfileExit = function (e, t, o, n) {
                u({
                    viewBusinessProfileAction: d.VIEW_BUSINESS_PROFILE_ACTION.ACTION_EXIT,
                    catalogSessionId: e,
                    scrollDepth: t,
                    isProfileLinked: o,
                    hasCoverPhoto: n
                });
            };
            t.logProfileImpression = function (e, t, o, n) {
                if ((0, l.smbBizProfileLoggingEnabled)()) {
                    new r.ViewBusinessProfileWamEvent({
                        viewBusinessProfileAction: d.VIEW_BUSINESS_PROFILE_ACTION.ACTION_IMPRESSION,
                        catalogSessionId: e,
                        profileEntryPoint: t,
                        isProfileLinked: o,
                        hasCoverPhoto: n
                    }).commit();
                } else {
                    new r.ViewBusinessProfileWamEvent({
                        viewBusinessProfileAction: d.VIEW_BUSINESS_PROFILE_ACTION.ACTION_IMPRESSION,
                        catalogSessionId: e,
                        isProfileLinked: o,
                        hasCoverPhoto: n
                    }).commit();
                }
            };
            t.logShopsClick = function (e, t, o) {
                u({
                    viewBusinessProfileAction: d.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_SHOPS_ICON,
                    catalogSessionId: e,
                    isProfileLinked: t,
                    hasCoverPhoto: o
                });
            };
            t.logStatusClick = function (e, t, o) {
                u({
                    viewBusinessProfileAction: d.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_STATUS,
                    catalogSessionId: e,
                    isProfileLinked: t,
                    hasCoverPhoto: o
                });
            };
            t.logVoiceCallClick = function (e, t, o) {
                u({
                    viewBusinessProfileAction: d.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_VOICE_CALL,
                    catalogSessionId: e,
                    isProfileLinked: t,
                    hasCoverPhoto: o
                });
            };
            t.logWebsiteClick = function (e, t, o) {
                u({
                    viewBusinessProfileAction: d.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_WEBSITE,
                    catalogSessionId: e,
                    isProfileLinked: t,
                    hasCoverPhoto: o
                });
            };
            var a = n(o(81109));
            var l = o(72696);
            var r = o(875302);
            var i = o(413863);
            var c = o(992968);
            var d = o(111540);

            function u (e) {
                new r.ViewBusinessProfileWamEvent((0, a.default)((0, a.default)({}, e), {}, {
                    isProfileLinked: !!e.isProfileLinked
                })).commit();
            }

            function s (e) {
                if (e > 1000000) {
                    return c.TRUST_SIGNAL_BUCKETS.B1M;
                } else if (e >= 100000) {
                    return c.TRUST_SIGNAL_BUCKETS.B100K;
                } else if (e >= 10000) {
                    return c.TRUST_SIGNAL_BUCKETS.B10K;
                } else if (e >= 1000) {
                    return c.TRUST_SIGNAL_BUCKETS.B1K;
                } else if (e >= 501) {
                    return c.TRUST_SIGNAL_BUCKETS.B501;
                } else if (e >= 101) {
                    return c.TRUST_SIGNAL_BUCKETS.B101;
                } else if (e >= 51) {
                    return c.TRUST_SIGNAL_BUCKETS.B51;
                } else if (e >= 11) {
                    return c.TRUST_SIGNAL_BUCKETS.B11;
                } else if (e >= 2) {
                    return c.TRUST_SIGNAL_BUCKETS.B2;
                } else if (e === 1) {
                    return c.TRUST_SIGNAL_BUCKETS.B1;
                } else {
                    return c.TRUST_SIGNAL_BUCKETS.B0;
                }
            }
        },
        335843: (e, t, o) => {
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
                    width: u,
                    viewBox: s
                } = e;
                const f = (0, l.default)(e, d);
                let p;
                if (s) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: o = 0,
                        height: n = 0
                    } = s;
                    p = [e, t, o, n].join(" ");
                }
                let m = 24;
                let C = 24;
                if (!(n == null && u == null)) {
                    m = n;
                    C = u;
                }
                return c.default.createElement(r.BaseSvgSpan, (0, a.default)({
                    name: "business-address"
                }, f), c.default.createElement("svg", {
                    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 24",
                    height: m,
                    width: C,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(o),
                    version: "1.1"
                }, c.default.createElement("title", null, "business-address"), c.default.createElement("desc", null, "Created with Sketch."), c.default.createElement("defs", null), c.default.createElement("g", {
                    stroke: "none",
                    strokeWidth: 1,
                    fill: "none",
                    fillRule: "evenodd"
                }, c.default.createElement("path", {
                    d: "M12.0497571,11.9753826 C10.5804884,11.9753826 9.42411942,10.8207142 9.42411942,9.34974492 C9.42411942,7.88047615 10.5804884,6.72580776 12.0497571,6.72580776 C13.5190259,6.72580776 14.6753948,7.88047615 14.6753948,9.34974492 C14.6753948,10.8207142 13.5190259,11.9753826 12.0497571,11.9753826 M12.0497571,2 C7.95485066,2 4.70001221,5.25483845 4.70001221,9.34974492 C4.70001221,14.8101871 12.0497571,23 12.0497571,23 C12.0497571,23 19.399502,14.8101871 19.399502,9.34974492 C19.399502,5.25483845 16.1446636,2 12.0497571,2",
                    id: "Fill-1",
                    fill: "currentColor"
                }), c.default.createElement("g", {
                    id: "slices"
                }))));
            };
            var a = n(o(967154));
            var l = n(o(506479));
            var r = o(220584);
            var i = n(o(156720));
            var c = n(o(667294));
            const d = ["iconXstyle", "height", "width", "viewBox"];
        },
        942509: (e, t, o) => {
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
                    width: u,
                    viewBox: s
                } = e;
                const f = (0, l.default)(e, d);
                let p;
                if (s) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: o = 0,
                        height: n = 0
                    } = s;
                    p = [e, t, o, n].join(" ");
                }
                let m = 24;
                let C = 24;
                if (!(n == null && u == null)) {
                    m = n;
                    C = u;
                }
                return c.default.createElement(r.BaseSvgSpan, (0, a.default)({
                    name: "business-category"
                }, f), c.default.createElement("svg", {
                    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 24",
                    height: m,
                    width: C,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(o),
                    version: "1.1"
                }, c.default.createElement("title", null, "business-category"), c.default.createElement("desc", null, "Created with Sketch."), c.default.createElement("defs", null), c.default.createElement("g", {
                    stroke: "none",
                    strokeWidth: 1,
                    fill: "none",
                    fillRule: "evenodd"
                }, c.default.createElement("path", {
                    d: "M5.60860827,7.15515467 C4.78378352,7.15515467 4.06206187,6.43343302 4.06206187,5.60860827 C4.06206187,4.78378352 4.78378352,4.06206187 5.60860827,4.06206187 C6.43343302,4.06206187 7.15515467,4.78378352 7.15515467,5.60860827 C7.15515467,6.43343302 6.43343302,7.15515467 5.60860827,7.15515467 M22.0020001,11.897897 L12.7227217,2.61861856 C12.4134124,2.20620619 11.897897,2 11.2792784,2 L4.06206187,2 C2.92792784,2 2,2.92792784 2,4.06206187 L2,11.2792784 C2,11.897897 2.20620619,12.4134124 2.61861856,12.7227217 L11.897897,22.0020001 C12.3103093,22.4144125 12.8258248,22.6206187 13.3413403,22.6206187 C13.9599588,22.6206187 14.4754743,22.4144125 14.7847836,22.0020001 L22.0020001,14.7847836 C22.4144125,14.3723712 22.6206187,13.8568557 22.6206187,13.3413403 C22.6206187,12.7227217 22.4144125,12.2072063 22.0020001,11.897897",
                    id: "Page-1-Copy-2",
                    fill: "currentColor"
                }), c.default.createElement("g", {
                    id: "slices",
                    transform: "translate(0.000000, -234.000000)"
                }))));
            };
            var a = n(o(967154));
            var l = n(o(506479));
            var r = o(220584);
            var i = n(o(156720));
            var c = n(o(667294));
            const d = ["iconXstyle", "height", "width", "viewBox"];
        },
        556862: (e, t, o) => {
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
                    width: u,
                    viewBox: s
                } = e;
                const f = (0, l.default)(e, d);
                let p;
                if (s) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: o = 0,
                        height: n = 0
                    } = s;
                    p = [e, t, o, n].join(" ");
                }
                let m = 24;
                let C = 24;
                if (!(n == null && u == null)) {
                    m = n;
                    C = u;
                }
                return c.default.createElement(r.BaseSvgSpan, (0, a.default)({
                    name: "business-email"
                }, f), c.default.createElement("svg", {
                    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 24",
                    height: m,
                    width: C,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(o),
                    version: "1.1"
                }, c.default.createElement("title", null, "business-email"), c.default.createElement("desc", null, "Created with Sketch."), c.default.createElement("defs", null), c.default.createElement("g", {
                    stroke: "none",
                    strokeWidth: 1,
                    fill: "none",
                    fillRule: "evenodd"
                }, c.default.createElement("path", {
                    d: "M20.9169216,8.25409863 L12.2871787,13.5717219 L3.65743574,8.25409863 L3.65743574,6.12704932 L12.2871787,11.4446726 L20.9169216,6.12704932 L20.9169216,8.25409863 Z M20.9169216,4 L3.65743574,4 C2.47084608,4 1.51078718,4.95717219 1.51078718,6.12704932 L1.5,18.8893452 C1.5,20.0592223 2.47084608,21.0163945 3.65743574,21.0163945 L20.9169216,21.0163945 C22.1035113,21.0163945 23.0743574,20.0592223 23.0743574,18.8893452 L23.0743574,6.12704932 C23.0743574,4.95717219 22.1035113,4 20.9169216,4 L20.9169216,4 Z",
                    fill: "currentColor"
                }), c.default.createElement("g", {
                    id: "slices",
                    transform: "translate(0.000000, -480.000000)"
                }))));
            };
            var a = n(o(967154));
            var l = n(o(506479));
            var r = o(220584);
            var i = n(o(156720));
            var c = n(o(667294));
            const d = ["iconXstyle", "height", "width", "viewBox"];
        },
        349499: (e, t, o) => {
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
                    width: u,
                    viewBox: s
                } = e;
                const f = (0, l.default)(e, d);
                let p;
                if (s) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: o = 0,
                        height: n = 0
                    } = s;
                    p = [e, t, o, n].join(" ");
                }
                let m = 116;
                let C = 117;
                if (!(n == null && u == null)) {
                    m = n;
                    C = u;
                }
                return c.default.createElement(r.BaseSvgSpan, (0, a.default)({
                    name: "cart-interstitial-graphic"
                }, f), c.default.createElement("svg", {
                    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 117 116",
                    height: m,
                    width: C,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(o),
                    fill: "none"
                }, c.default.createElement("path", {
                    opacity: 0.15,
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M10.7538 28.8194L1.11733 25.7279L10.7538 22.6365L13.8452 13L16.9367 22.6365L26.5732 25.7279L16.9367 28.8194L13.8453 38.4558L10.7538 28.8194Z",
                    fill: "currentColor"
                }), c.default.createElement("path", {
                    opacity: 0.6,
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M85.568 105.137L78.0729 102.733L85.568 100.329L87.9724 92.8335L90.3769 100.329L97.8719 102.733L90.3769 105.137L87.9724 112.632L85.568 105.137Z",
                    fill: "currentColor"
                }), c.default.createElement("path", {
                    opacity: 0.38,
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M18.1989 86.9097L13.3807 85.364L18.1989 83.8182L19.7447 79L21.2904 83.8182L26.1086 85.364L21.2904 86.9097L19.7447 91.7279L18.1989 86.9097Z",
                    fill: "currentColor"
                }), c.default.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M94.8452 58C94.8452 77.8823 78.7274 94 58.8452 94C38.9629 94 22.8452 77.8823 22.8452 58C22.8452 38.1177 38.9629 22 58.8452 22C66.1124 22 72.8767 24.1533 78.5348 27.8568C77.4618 29.6538 76.8452 31.7549 76.8452 34C76.8452 40.6274 82.2178 46 88.8452 46C90.1496 46 91.4054 45.7919 92.5812 45.407C94.0449 49.3267 94.8452 53.5699 94.8452 58ZM95 32.5H90.5V28H87.5V32.5H83V35.5H87.5V40H90.5V35.5H95V32.5ZM48.3602 70C48.3602 68.35 49.6952 67 51.3452 67C52.9952 67 54.3452 68.35 54.3452 70C54.3452 71.65 52.9952 73 51.3452 73C49.6952 73 48.3602 71.65 48.3602 70ZM42.3452 46V43H47.2502L48.6602 46H70.8452C71.6702 46 72.3452 46.675 72.3452 47.5C72.3452 47.755 72.2852 48.01 72.1652 48.22L66.7952 57.955C66.2852 58.885 65.2952 59.5 64.1702 59.5H52.9952L51.6452 61.945L51.6002 62.125C51.6002 62.335 51.7652 62.5 51.9752 62.5H69.3452V65.5H51.3452C49.6952 65.5 48.3452 64.15 48.3452 62.5C48.3452 61.975 48.4802 61.48 48.7202 61.06L50.7452 57.385L45.3452 46H42.3452ZM63.3602 70C63.3602 68.35 64.6952 67 66.3452 67C67.9952 67 69.3452 68.35 69.3452 70C69.3452 71.65 67.9952 73 66.3452 73C64.6952 73 63.3602 71.65 63.3602 70Z",
                    fill: "currentColor"
                })));
            };
            var a = n(o(967154));
            var l = n(o(506479));
            var r = o(220584);
            var i = n(o(156720));
            var c = n(o(667294));
            const d = ["iconXstyle", "height", "width", "viewBox"];
        },
        436127: (e, t, o) => {
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
                    width: u,
                    viewBox: s
                } = e;
                const f = (0, l.default)(e, d);
                let p;
                if (s) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: o = 0,
                        height: n = 0
                    } = s;
                    p = [e, t, o, n].join(" ");
                }
                let m = 12;
                let C = 120;
                if (!(n == null && u == null)) {
                    m = n;
                    C = u;
                }
                return c.default.createElement(r.BaseSvgSpan, (0, a.default)({
                    name: "fbshops"
                }, f), c.default.createElement("svg", {
                    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 120 12",
                    height: m,
                    width: C,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(o),
                    fill: "none"
                }, c.default.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M92.8438 9.10606V0.387207H93.7769V4.29277C93.9935 3.90261 94.273 3.59506 94.6155 3.37013C94.958 3.1452 95.3537 3.03272 95.8025 3.03272H95.9206C96.6018 3.03272 97.1215 3.25667 97.4798 3.70456C97.838 4.15244 98.0172 4.79242 98.0172 5.6245V9.10606H97.0841V5.76184C97.0841 5.14873 96.9719 4.68692 96.7475 4.37638C96.523 4.06584 96.1707 3.91058 95.6903 3.91058H95.5782C95.1411 3.91058 94.7681 4.0539 94.459 4.34056C94.15 4.6272 93.9226 4.98749 93.7769 5.42145V9.10606H92.8438ZM87.576 9.23744C86.8358 9.23744 86.1872 9.10009 85.6301 8.82538C85.0729 8.55068 84.6074 8.14859 84.2334 7.61908L84.9715 6.96217C85.629 7.86193 86.4972 8.31182 87.576 8.31182H87.7C88.3812 8.31182 88.8949 8.1874 89.2413 7.93858C89.5878 7.68975 89.761 7.35035 89.761 6.92038C89.761 6.62178 89.6853 6.37893 89.5337 6.19181C89.3821 6.00469 89.1873 5.8574 88.9491 5.7499C88.7109 5.64241 88.4599 5.5608 88.196 5.50506L86.6664 5.18258C86.32 5.11092 85.9814 4.99248 85.6507 4.82726C85.32 4.66204 85.0464 4.43312 84.8298 4.14049C84.6133 3.84788 84.505 3.47463 84.505 3.02078C84.505 2.53905 84.63 2.11804 84.88 1.75774C85.1301 1.39744 85.4804 1.11677 85.9313 0.915713C86.3821 0.714661 86.9106 0.614136 87.5169 0.614136H87.6468C88.9461 0.614136 89.9402 1.12174 90.6292 2.13694L89.9027 2.74011C89.5839 2.30217 89.2404 1.99263 88.8722 1.81149C88.5041 1.63034 88.0897 1.53977 87.6291 1.53977H87.5051C86.9146 1.53977 86.4372 1.66717 86.073 1.92196C85.7088 2.17676 85.5267 2.51715 85.5267 2.94314C85.5267 3.32932 85.6695 3.61795 85.9549 3.80906C86.2404 4.00015 86.6016 4.14149 87.0386 4.23306L88.515 4.54359C88.759 4.59535 89.013 4.67199 89.2769 4.77351C89.5406 4.87503 89.7867 5.01338 90.015 5.18855C90.2434 5.36373 90.4284 5.58567 90.5701 5.8544C90.7118 6.12314 90.7827 6.45059 90.7827 6.83677C90.7827 7.57728 90.5101 8.16251 89.9648 8.59248C89.4195 9.02246 88.6666 9.23744 87.7059 9.23744H87.576ZM101.265 8.83733C101.694 9.10408 102.202 9.23744 102.789 9.23744H102.907C103.494 9.23744 104.002 9.10408 104.431 8.83733C104.86 8.57059 105.192 8.20432 105.426 7.73851C105.66 7.27272 105.777 6.73923 105.777 6.13807C105.777 5.53292 105.66 4.99745 105.426 4.53165C105.192 4.06584 104.86 3.69958 104.431 3.43284C104.002 3.16609 103.494 3.03272 102.907 3.03272H102.789C102.202 3.03272 101.694 3.16609 101.265 3.43284C100.836 3.69958 100.504 4.06584 100.27 4.53165C100.036 4.99745 99.9188 5.53292 99.9188 6.13807C99.9188 6.73923 100.036 7.27272 100.27 7.73851C100.504 8.20432 100.836 8.57059 101.265 8.83733ZM102.795 8.36555H102.901C103.488 8.36555 103.952 8.16251 104.295 7.75642C104.637 7.35034 104.809 6.81088 104.809 6.13806C104.809 5.46126 104.637 4.9208 104.295 4.51671C103.952 4.11261 103.488 3.91057 102.901 3.91057H102.795C102.208 3.91057 101.744 4.11261 101.401 4.51671C101.059 4.9208 100.887 5.46126 100.887 6.13806C100.887 6.81088 101.059 7.35034 101.401 7.75642C101.744 8.16251 102.208 8.36555 102.795 8.36555ZM107.773 3.1641V11.6142H108.706V8.10279C108.927 8.48102 109.214 8.76468 109.569 8.95378C109.923 9.14289 110.313 9.23744 110.738 9.23744H110.856C111.376 9.23744 111.829 9.10607 112.214 8.8433C112.6 8.58054 112.9 8.21627 113.115 7.75046C113.33 7.28466 113.437 6.7472 113.437 6.13807C113.437 5.52496 113.33 4.98551 113.115 4.51971C112.9 4.0539 112.6 3.68962 112.214 3.42686C111.829 3.1641 111.376 3.03272 110.856 3.03272H110.738C110.301 3.03272 109.906 3.13326 109.554 3.3343C109.202 3.53535 108.919 3.83493 108.706 4.23306V3.1641H107.773ZM110.525 8.37152H110.638C111.201 8.37152 111.646 8.17644 111.975 7.78628C112.304 7.39612 112.468 6.84672 112.468 6.13806C112.468 5.42941 112.304 4.88001 111.975 4.48984C111.646 4.09968 111.201 3.90461 110.638 3.90461H110.525C110.088 3.90461 109.715 4.03399 109.406 4.29277C109.097 4.55155 108.864 4.88796 108.706 5.30201V6.96815C108.864 7.3822 109.098 7.71959 109.409 7.98037C109.72 8.24114 110.092 8.37152 110.525 8.37152ZM114.943 8.07294C115.47 8.84927 116.321 9.23744 117.494 9.23744H117.618C118.339 9.23744 118.899 9.07521 119.299 8.75075C119.698 8.42627 119.897 8.00327 119.897 7.48173C119.897 7.00797 119.751 6.63374 119.457 6.35902C119.164 6.08432 118.756 5.89124 118.232 5.77976L117.069 5.53491C116.711 5.45927 116.455 5.35875 116.301 5.23334C116.148 5.10793 116.071 4.93973 116.071 4.72872C116.071 4.458 116.196 4.246 116.446 4.09272C116.696 3.93945 117.024 3.86281 117.429 3.86281H117.535C117.882 3.86281 118.187 3.92651 118.451 4.0539C118.715 4.18131 118.945 4.38634 119.142 4.669L119.791 4.13751C119.295 3.40099 118.547 3.03272 117.547 3.03272H117.429C116.744 3.03272 116.192 3.19496 115.773 3.51943C115.353 3.8439 115.144 4.27287 115.144 4.80636C115.144 5.63843 115.707 6.16992 116.833 6.40083L117.972 6.63814C118.322 6.71641 118.573 6.82244 118.725 6.95621C118.889 7.09953 118.97 7.29063 118.97 7.5295C118.97 7.80819 118.849 8.02417 118.607 8.17744C118.365 8.33072 118.027 8.40736 117.594 8.40736H117.488C116.642 8.40736 116.01 8.10479 115.592 7.49964L114.943 8.07294Z"
                }), c.default.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M14.7972 9.18846H16.0799C16.1622 9.18846 16.209 9.1404 16.1884 9.05598C15.4415 6.36173 14.3061 3.39664 13.1708 0.872397C13.1352 0.777286 13.0408 0.719606 12.9424 0.732885H11.2714C11.1696 0.727073 11.0764 0.791175 11.043 0.889988C9.90078 3.39079 8.77119 6.35939 8.02992 9.05598C8.00707 9.1404 8.05389 9.18846 8.13613 9.18846H9.37197C9.43729 9.19366 9.49573 9.14691 9.50674 9.0806C9.67235 8.38534 9.87795 7.65493 10.1132 6.91746H14.0492C14.2844 7.65493 14.4911 8.38534 14.6614 9.0806C14.6734 9.14678 14.7319 9.19318 14.7972 9.18846ZM12.2194 2.06241C12.7082 3.1727 13.1845 4.3932 13.6139 5.61371H10.5427C10.9721 4.3932 11.4541 3.1727 11.943 2.06241H12.2194ZM6.29128 1.96269V0.848619C6.28292 0.807134 6.27132 0.779014 6.25648 0.764251C6.23422 0.742099 6.20415 0.73015 6.17315 0.730999H0.217229C0.153887 0.730999 0.102539 0.783713 0.102539 0.848619V9.07134C0.102539 9.13625 0.153887 9.18886 0.217229 9.18886H1.39052C1.45386 9.18886 1.50521 9.13625 1.50521 9.07134V5.70563H5.36113C5.42447 5.70563 5.47583 5.65301 5.47583 5.58811V4.47404C5.47583 4.40914 5.42447 4.35652 5.36113 4.35652H1.50521V2.0802H6.17659C6.23993 2.0802 6.29128 2.02758 6.29128 1.96269ZM18.4212 5.15414C18.4212 2.57591 20.1018 0.730993 22.5591 0.730993H22.7373C24.2639 0.730993 25.4445 1.51086 26.0765 2.6376C26.0948 2.66576 26.1 2.70049 26.0908 2.73284C26.0818 2.76519 26.0592 2.792 26.029 2.80638L24.9792 3.32785C24.9456 3.35012 24.9043 3.35761 24.8649 3.34862C24.8256 3.33961 24.7917 3.31487 24.7708 3.28013C24.33 2.50607 23.6678 2.09869 22.6875 2.09869H22.5093C21.0045 2.09869 19.9212 3.28594 19.9212 5.09711C19.9212 6.85938 20.9467 8.0711 22.5093 8.0711H22.691C23.6933 8.0711 24.2766 7.72888 24.7245 7.20742C24.7699 7.14495 24.8548 7.12687 24.9214 7.16551L26 7.6928C26.0337 7.70776 26.0567 7.73978 26.0603 7.77661C26.0577 7.80982 26.0451 7.84146 26.0244 7.8674C25.3624 8.83817 24.1725 9.43762 22.7153 9.43762H22.5359C19.9953 9.43529 18.4212 7.66021 18.4212 5.15414ZM35.5022 9.07149V7.95879C35.503 7.92643 35.4909 7.8951 35.4685 7.87221C35.4462 7.84934 35.4155 7.83691 35.3839 7.8379H30.4684V5.61485H34.3804C34.4437 5.61485 34.4951 5.56231 34.4951 5.49749V4.39653C34.4951 4.33171 34.4437 4.27917 34.3804 4.27917H30.4684V2.07843H35.2785C35.3417 2.07843 35.3931 2.02589 35.3931 1.96106V0.848364C35.3931 0.783542 35.3417 0.730993 35.2785 0.730993H29.1805C29.1172 0.730993 29.0659 0.783542 29.0659 0.848364V9.07149C29.0659 9.13631 29.1172 9.18885 29.1805 9.18885H35.3874C35.4507 9.18885 35.5022 9.13631 35.5022 9.07149ZM46.1468 6.8682C46.1468 8.33122 45.0333 9.18885 43.0014 9.18885H38.8377C38.7729 9.18885 38.7203 9.13632 38.7203 9.07152V0.848319C38.7203 0.783524 38.7729 0.730993 38.8377 0.730993H42.6314C44.6163 0.730993 45.6511 1.5288 45.6511 2.91908C45.6511 3.75324 45.2822 4.42434 44.2229 4.74464C45.5665 5.02504 46.1468 5.82871 46.1468 6.8682ZM42.602 2.04501H40.1567V4.31757H42.602C43.7389 4.31757 44.1994 3.93157 44.1994 3.18188C44.1994 2.43217 43.7389 2.04501 42.602 2.04501ZM44.6704 6.73796C44.6704 5.98826 44.2006 5.59523 43.0072 5.59523H40.1567V7.87014H43.0072C44.2287 7.87014 44.6704 7.49118 44.6704 6.74148V6.73796ZM53.1138 0.730993C50.5198 0.730993 48.8698 2.55963 48.8698 5.0843C48.8698 7.62413 50.5187 9.43762 53.1138 9.43762H53.29C55.884 9.43762 57.534 7.62063 57.534 5.0843C57.534 2.54798 55.884 0.730993 53.29 0.730993H53.1138ZM56.0488 5.0843C56.0488 6.88965 54.9767 8.07108 53.29 8.07108H53.1138C51.4157 8.07108 50.355 6.88848 50.355 5.0843C50.355 3.28013 51.4272 2.09868 53.1138 2.09868H53.29C54.988 2.09868 56.0488 3.27896 56.0488 5.0843ZM60.2571 5.0843C60.2571 2.55963 61.9069 0.730993 64.5005 0.730993H64.6767C67.2704 0.730993 68.9213 2.54798 68.9213 5.0843C68.9213 7.62063 67.2704 9.43762 64.6767 9.43762H64.5005C61.9069 9.43762 60.2571 7.62413 60.2571 5.0843ZM64.6767 8.07108C66.3631 8.07108 67.4351 6.88965 67.4351 5.0843C67.4351 3.27896 66.3746 2.09868 64.6767 2.09868H64.5005C62.8152 2.09868 61.7422 3.28013 61.7422 5.0843C61.7422 6.88848 62.8027 8.07108 64.5005 8.07108H64.6767ZM77.6431 9.18867H79.2185C79.3092 9.18867 79.3498 9.11715 79.2905 9.04328C78.0129 7.53073 76.6159 6.1249 75.1134 4.83959C76.481 3.6488 77.7362 2.33262 78.8627 0.907944C78.8868 0.883291 78.9016 0.850949 78.9045 0.816491C78.9045 0.768406 78.8685 0.732065 78.7965 0.732065H77.3119C77.2505 0.725018 77.1904 0.753064 77.1561 0.804758C76.2043 2.01796 75.1544 3.14945 74.0171 4.18764H73.3102V0.852836C73.3102 0.788081 73.2582 0.735583 73.194 0.735583H72.0082C71.9439 0.735583 71.8919 0.788081 71.8919 0.852836V9.0679C71.8919 9.13266 71.9439 9.18515 72.0082 9.18515H73.194C73.2582 9.18515 73.3102 9.13266 73.3102 9.0679V5.57714H74.0078C75.2511 6.66402 76.4123 7.843 77.4816 9.10425C77.5167 9.1594 77.5782 9.19156 77.6431 9.18867Z"
                })));
            };
            var a = n(o(967154));
            var l = n(o(506479));
            var r = o(220584);
            var i = n(o(156720));
            var c = n(o(667294));
            const d = ["iconXstyle", "height", "width", "viewBox"];
        },
        200592: (e, t, o) => {
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
                    width: u,
                    viewBox: s
                } = e;
                const f = (0, l.default)(e, d);
                let p;
                if (s) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: o = 0,
                        height: n = 0
                    } = s;
                    p = [e, t, o, n].join(" ");
                }
                let m = 22;
                let C = 24;
                if (!(n == null && u == null)) {
                    m = n;
                    C = u;
                }
                return c.default.createElement(r.BaseSvgSpan, (0, a.default)({
                    name: "logo-instagram-color"
                }, f), c.default.createElement("svg", {
                    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 22",
                    height: m,
                    width: C,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(o),
                    fill: "none"
                }, c.default.createElement("path", {
                    d: "M17.9287 0H8.07107C4.72349 0 2 2.72362 2 6.07121V15.9288C2 19.2765 4.72349 22 8.07107 22H17.9287C21.2765 22 24 19.2764 24 15.9288V6.07121C24.0001 2.72362 21.2765 0 17.9287 0ZM22.0482 15.9288C22.0482 18.2002 20.2002 20.0481 17.9288 20.0481H8.07107C5.79979 20.0482 3.95195 18.2002 3.95195 15.9288V6.07121C3.95195 3.79992 5.79979 1.95195 8.07107 1.95195H17.9287C20.2001 1.95195 22.0481 3.79992 22.0481 6.07121V15.9288H22.0482Z",
                    fill: "url(#paint0_linear)"
                }), c.default.createElement("path", {
                    d: "M12.9998 5.06152C9.72513 5.06152 7.06104 7.72561 7.06104 11.0003C7.06104 14.2749 9.72513 16.9388 12.9998 16.9388C16.2745 16.9388 18.9386 14.2749 18.9386 11.0003C18.9386 7.72561 16.2745 5.06152 12.9998 5.06152ZM12.9998 14.8938C10.8528 14.8938 9.10593 13.1472 9.10593 11.0002C9.10593 8.85303 10.8527 7.10628 12.9998 7.10628C15.147 7.10628 16.8937 8.85303 16.8937 11.0002C16.8937 13.1472 15.1468 14.8938 12.9998 14.8938Z",
                    fill: "url(#paint1_linear)"
                }), c.default.createElement("path", {
                    d: "M19.1871 3.32764C18.7931 3.32764 18.4061 3.48714 18.1278 3.76661C17.8482 4.04471 17.6875 4.43188 17.6875 4.82723C17.6875 5.22135 17.8484 5.60838 18.1278 5.88785C18.4059 6.16595 18.7931 6.32682 19.1871 6.32682C19.5824 6.32682 19.9682 6.16595 20.2477 5.88785C20.5272 5.60838 20.6867 5.22121 20.6867 4.82723C20.6867 4.43188 20.5272 4.04471 20.2477 3.76661C19.9696 3.48714 19.5824 3.32764 19.1871 3.32764Z",
                    fill: "url(#paint2_linear)"
                }), c.default.createElement("defs", null, c.default.createElement("linearGradient", {
                    id: "paint0_linear",
                    x1: 24,
                    y1: 0,
                    x2: 2,
                    y2: 22,
                    gradientUnits: "userSpaceOnUse"
                }, c.default.createElement("stop", {
                    stopColor: "#B630A1"
                }), c.default.createElement("stop", {
                    offset: 0.494792,
                    stopColor: "#DB2F76"
                }), c.default.createElement("stop", {
                    offset: 1,
                    stopColor: "#FBB15B"
                })), c.default.createElement("linearGradient", {
                    id: "paint1_linear",
                    x1: 21.9999,
                    y1: 1.5,
                    x2: 3.99988,
                    y2: 19.5,
                    gradientUnits: "userSpaceOnUse"
                }, c.default.createElement("stop", {
                    stopColor: "#DA2E7A"
                }), c.default.createElement("stop", {
                    offset: 1,
                    stopColor: "#F06846"
                })), c.default.createElement("linearGradient", {
                    id: "paint2_linear",
                    x1: 20.9998,
                    y1: 3,
                    x2: 17.4998,
                    y2: 6.5,
                    gradientUnits: "userSpaceOnUse"
                }, c.default.createElement("stop", {
                    stopColor: "#BE3099"
                }), c.default.createElement("stop", {
                    offset: 1,
                    stopColor: "#E1406B"
                })))));
            };
            var a = n(o(967154));
            var l = n(o(506479));
            var r = o(220584);
            var i = n(o(156720));
            var c = n(o(667294));
            const d = ["iconXstyle", "height", "width", "viewBox"];
        },
        555201: (e, t, o) => {
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
                    width: u,
                    viewBox: s
                } = e;
                const f = (0, l.default)(e, d);
                let p;
                if (s) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: o = 0,
                        height: n = 0
                    } = s;
                    p = [e, t, o, n].join(" ");
                }
                let m = 168;
                let C = 198;
                if (!(n == null && u == null)) {
                    m = n;
                    C = u;
                }
                return c.default.createElement(r.BaseSvgSpan, (0, a.default)({
                    name: "view-once-sender-nux"
                }, f), c.default.createElement("svg", {
                    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 198 168",
                    height: m,
                    width: C,
                    preserveAspectRatio: "xMidYMid meet",
                    className: (0, i.default)(o),
                    fill: "none"
                }, c.default.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M182.166 57.7255C175.603 64.6681 166.307 69 156 69C139.711 69 125.949 58.1818 121.506 43.3383C112.644 40.1443 102.78 34.6399 86.1179 25.3418C84.3675 24.3651 82.5421 23.3465 80.635 22.2843C51.9895 6.3297 6.00593 19.7651 2.23678 73.9266C-0.243988 109.575 17.0718 134.232 39.9408 142.968C62.0404 151.411 110.667 158.989 162.477 140.97C190.944 131.069 198.637 111.677 196.725 89.4613C195.454 74.6999 189.899 64.4184 182.166 57.7255Z",
                    fill: "#CCEFEB"
                }), c.default.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M134.277 61.7099C125.603 55.1366 120 44.7226 120 33C120 29.0037 120.651 25.1594 121.853 21.5676L80.2307 15.7179C73.8904 14.8269 68.016 19.3544 67.11 25.8304L50.5682 144.067C49.6622 150.543 54.0676 156.515 60.4079 157.406L108.242 164.129C114.583 165.02 120.457 160.493 121.363 154.016L134.277 61.7099Z",
                    fill: "#42CBA5"
                }), c.default.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M122.943 18.7215L80.4885 12.755C73.9412 11.8348 67.8737 16.5197 66.9365 23.219L49.8245 145.531C48.8872 152.231 53.4351 158.407 59.9824 159.327L109.378 166.27C115.925 167.19 121.993 162.505 122.93 155.806L135.929 62.8902C135.129 62.3519 134.352 61.7824 133.599 61.1834L120.411 155.452C119.673 160.727 114.895 164.417 109.739 163.692L60.343 156.75C55.187 156.025 51.6056 151.161 52.3437 145.885L69.4557 23.573C70.1938 18.2974 74.9719 14.608 80.1279 15.3326L121.974 21.2137C122.266 20.3682 122.59 19.537 122.943 18.7215Z",
                    fill: "#316474"
                }), c.default.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M135.032 62.2669C125.93 55.7339 120 45.0594 120 33C120 27.0332 121.452 21.4055 124.021 16.4507L82.3684 10.5968C76.0897 9.71436 70.2654 14.2484 69.3594 20.7238L52.8193 138.948C51.9134 145.424 56.2689 151.388 62.5476 152.271L109.917 158.928C116.196 159.81 122.02 155.276 122.926 148.801L135.032 62.2669Z",
                    fill: "white"
                }), c.default.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M124.376 15.7826L80.8832 9.67008C74.3203 8.74772 68.2607 13.2841 67.3488 19.8023L50.6993 138.809C49.7874 145.327 54.3684 151.359 60.9313 152.281L110.445 159.24C117.008 160.162 123.067 155.626 123.979 149.108L136.032 62.959C135.229 62.4232 134.45 61.856 133.695 61.2591L121.454 148.753C120.736 153.886 115.964 157.458 110.796 156.732L61.2822 149.773C56.1139 149.047 52.5063 144.297 53.2245 139.164L69.874 20.1572C70.5921 15.0241 75.364 11.4517 80.5323 12.1781L123.186 18.1726C123.554 17.3594 123.951 16.5623 124.376 15.7826Z",
                    fill: "#316474"
                }), c.default.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M121.759 21.8546L119.225 21.5025L88.5269 17.2367L81.6788 16.2851C76.9838 15.6327 72.6359 18.9334 71.9674 23.6575L56.0988 135.806C55.4304 140.53 58.6946 144.888 63.3896 145.541L107.784 151.71C112.479 152.362 116.827 149.061 117.495 144.337L129.762 57.6491C123.708 51.2078 120 42.5372 120 33.0005C120 29.1102 120.617 25.364 121.759 21.8546Z",
                    fill: "#EEFEFA"
                }), c.default.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M131.411 59.2946L119.092 146.356C118.408 151.187 113.925 154.558 109.079 153.885L63.2521 147.516C58.4056 146.843 55.031 142.38 55.7146 137.549L71.9439 22.852C72.6275 18.0206 77.1105 14.6499 81.957 15.3233L122.084 20.8994C121.801 21.6938 121.545 22.501 121.316 23.32L81.6063 17.802C78.133 17.3193 74.9202 19.735 74.4302 23.1975L58.201 137.895C57.711 141.357 60.1295 144.555 63.6028 145.038L109.429 151.406C112.903 151.889 116.116 149.473 116.605 146.01L129.195 57.0327C129.901 57.8186 130.64 58.5733 131.411 59.2946Z",
                    fill: "#316474"
                }), c.default.createElement("path", {
                    d: "M76.7691 93.7377C76.4214 96.1974 78.1329 98.4706 80.5929 98.8163L111.741 103.194C114.202 103.54 116.481 101.824 116.83 99.3627L119.073 83.5207C119.421 81.0608 117.709 78.787 115.249 78.4413L73.6586 72.5961C73.183 72.5293 72.895 73.106 73.2346 73.4451L76.5525 76.7581C77.9966 78.2 78.6778 80.2374 78.3919 82.2594L76.7691 93.7377Z",
                    fill: "white",
                    stroke: "#00B39B",
                    strokeWidth: 3
                }), c.default.createElement("path", {
                    d: "M107.679 93.8443L87.8798 91.0618C87.0681 90.9477 86.7049 90.084 87.2785 89.5941L91.8745 85.6237C92.3348 85.2215 93.1268 85.3328 93.4584 85.8463L96.5327 90.5489L102.507 85.389C102.968 84.9869 103.76 85.0982 104.091 85.6116L108.661 92.5992C109.078 93.2283 108.491 93.9584 107.679 93.8443Z",
                    fill: "white"
                }), c.default.createElement("path", {
                    d: "M96.7971 88.6689L94.5062 85.1645C93.7607 84.0152 92.0887 83.7802 91.0553 84.6795L86.4635 88.6463C85.7435 89.2636 85.5901 90.1864 85.9046 90.9467C86.205 91.6728 86.8893 92.1848 87.7059 92.2996L107.505 95.0822C108.321 95.1969 109.12 94.8933 109.609 94.2782C110.121 93.6341 110.228 92.7048 109.706 91.913C109.705 91.9118 109.705 91.9106 109.704 91.9094L105.141 84.9334C105.14 84.9321 105.14 84.9309 105.139 84.9296C104.393 83.7805 102.721 83.5456 101.688 84.4449L96.7971 88.6689Z",
                    stroke: "#42CBA5",
                    strokeOpacity: 0.5,
                    strokeWidth: 2.5
                }), c.default.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M81 22.999C80.4477 22.999 80 23.4467 80 23.999C80 24.5513 80.4477 24.999 81 24.999C81.5523 24.999 82 24.5513 82 23.999C82 23.4467 81.5523 22.999 81 22.999ZM78 23.999C78 22.3422 79.3431 20.999 81 20.999C82.6569 20.999 84 22.3422 84 23.999C84 25.6559 82.6569 26.999 81 26.999C79.3431 26.999 78 25.6559 78 23.999Z",
                    fill: "#316474"
                }), c.default.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M155.502 62C156.019 62 156.532 61.9866 157.043 61.9603C158.421 61.8892 159.482 60.7138 159.41 59.3349C159.339 57.956 158.164 56.8958 156.785 56.967C156.36 56.9889 155.933 57 155.502 57V62ZM155.502 8C155.933 8.00003 156.36 8.01114 156.785 8.03304C158.164 8.10415 159.339 7.044 159.41 5.66512C159.482 4.28624 158.421 3.11079 157.043 3.03968C156.532 3.01336 156.019 3.00003 155.502 3V8ZM168.898 6.21114C167.668 5.58332 166.162 6.07124 165.534 7.30096C164.906 8.53067 165.394 10.0365 166.624 10.6643C167.388 11.0543 168.128 11.4832 168.844 11.9485C170.001 12.7016 171.549 12.3739 172.303 11.2167C173.056 10.0594 172.728 8.51077 171.571 7.75771C170.71 7.19753 169.818 6.68094 168.898 6.21114ZM180.243 16.4297C179.49 15.2724 177.941 14.9447 176.784 15.6978C175.626 16.4509 175.299 17.9995 176.052 19.1568C176.517 19.8719 176.946 20.6126 177.336 21.3764C177.964 22.6061 179.47 23.094 180.699 22.4662C181.929 21.8384 182.417 20.3325 181.789 19.1028C181.319 18.1826 180.803 17.2905 180.243 16.4297ZM184.961 30.9578C184.89 29.5789 183.714 28.5188 182.335 28.5899C180.956 28.661 179.896 29.8365 179.967 31.2153C179.989 31.6406 180 32.0689 180 32.5C180 32.9311 179.989 33.3594 179.967 33.7847C179.896 35.1635 180.956 36.339 182.335 36.4101C183.714 36.4812 184.89 35.4211 184.961 34.0422C184.987 33.5312 185 33.0171 185 32.5C185 31.9829 184.987 31.4688 184.961 30.9578ZM181.789 45.8972C182.417 44.6675 181.929 43.1616 180.699 42.5338C179.47 41.906 177.964 42.3939 177.336 43.6236C176.946 44.3874 176.517 45.1281 176.052 45.8432C175.299 47.0005 175.626 48.5491 176.784 49.3022C177.941 50.0553 179.49 49.7276 180.243 48.5703C180.803 47.7095 181.319 46.8174 181.789 45.8972ZM171.571 57.2423C172.728 56.4892 173.056 54.9406 172.303 53.7833C171.549 52.6261 170.001 52.2984 168.844 53.0515C168.128 53.5168 167.388 53.9457 166.624 54.3357C165.394 54.9635 164.906 56.4693 165.534 57.699C166.162 58.9288 167.668 59.4167 168.898 58.7889C169.818 58.3191 170.71 57.8025 171.571 57.2423Z",
                    fill: "#00B39B"
                }), c.default.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M155.501 3C155.5 3 155.5 3 155.5 3C139.208 3 126 16.2076 126 32.5C126 48.7924 139.208 62 155.5 62C155.5 62 155.5 62 155.501 62V57C155.5 57 155.5 57 155.5 57C141.969 57 131 46.031 131 32.5C131 18.969 141.969 8 155.5 8C155.5 8 155.5 8 155.501 8V3Z",
                    fill: "#00B39B"
                }), c.default.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M151.57 18.499C149.875 18.499 148.501 19.8727 148.501 21.5672C148.501 23.2617 149.875 24.6354 151.57 24.6354H154.502V42.499C154.502 44.1559 155.845 45.499 157.502 45.499C159.158 45.499 160.502 44.1559 160.502 42.499V21.499C160.502 19.8422 159.158 18.499 157.502 18.499C157.49 18.499 157.479 18.4991 157.468 18.4992C157.456 18.4991 157.445 18.499 157.433 18.499H151.57Z",
                    fill: "#00B39B"
                })));
            };
            var a = n(o(967154));
            var l = n(o(506479));
            var r = o(220584);
            var i = n(o(156720));
            var c = n(o(667294));
            const d = ["iconXstyle", "height", "width", "viewBox"];
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
//# sourceMappingURL=https://web.whatsapp.com/lazy_loaded_high_priority_components~lazy_loaded_low_priority_components.ad1ae8461a90849af065.js.map