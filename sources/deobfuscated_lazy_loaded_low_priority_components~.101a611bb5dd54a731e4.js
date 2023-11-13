/*! Copyright (c) 2023 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [2790], {
        20356: (e, t) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.stringify = function (e) {
                return JSON.stringify(e);
            };
        },
        919175: (e, t, n) => {
            "use strict";

            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.sendOrderDetailsMessageAsMerchant = function () {
                return O.apply(this, arguments);
            };
            t.sendOrderPaymentStatusMessageAsMerchant = function () {
                return T.apply(this, arguments);
            };
            t.sendOrderStatusMessageAsMerchant = function () {
                return I.apply(this, arguments);
            };
            var a = r(n(81109));
            var i = r(n(348926));
            var l = n(632157);
            var o = n(402994);
            var d = k(n(395557));
            var s = r(n(873969));
            var u = k(n(20356));
            var c = n(713464);
            var f = r(n(753110));
            var p = r(n(182394));
            var h = r(n(756680));
            var m = r(n(565754));
            var g = n(373070);
            var v = n(458103);
            var x = n(620982);
            var b = n(918602);
            var y = n(693741);
            var j = n(459857);
            var C = n(669050);
            var S = r(n(556869));

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

            function k (e, t) {
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
                var r = {};
                var a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var i in e) {
                    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
                        var l = a ? Object.getOwnPropertyDescriptor(e, i) : null;
                        if (l && (l.get || l.set)) {
                            Object.defineProperty(r, i, l);
                        } else {
                            r[i] = e[i];
                        }
                    }
                }
                r.default = e;
                if (n) {
                    n.set(e, r);
                }
                return r;
            }

            function P (e, t) {
                var n;
                var r;
                if (t == null) {
                    return "";
                }
                const a = c.CatalogCollection.get((0, C.createWid)(e));
                const i = a == null ? undefined : a.productCollection.get(t);
                const l = i == null || (n = i.getProductImageCollectionHead()) === null || n === undefined ? undefined : n.mediaData.preview;
                if (l instanceof h.default && (r = l.getBase64()) !== null && r !== undefined) {
                    return r;
                } else {
                    return "";
                }
            }

            function w () {
                return M.apply(this, arguments);
            }

            function M () {
                return (M = (0, i.default)(function* (e) {
                    const {
                        caption: t,
                        chat: n,
                        nativeFlowName: r,
                        buttonParamsJson: i,
                        errorMessage: d,
                        thumbnail: s,
                        buttonName: u,
                        contextInfo: c
                    } = e;
                    const f = (0, j.getMaybeMeUser)();
                    const h = s ? {
                        title: undefined,
                        subtitle: undefined,
                        mediaType: undefined,
                        hasMediaAttachment: false,
                        thumbnail: s
                    } : undefined;
                    const v = (0, a.default)({
                        type: g.MSG_TYPE.INTERACTIVE,
                        ack: o.ACK.CLOCK,
                        from: f,
                        id: new m.default({
                            from: f,
                            to: n.id,
                            id: yield m.default.newId(),
                            participant: undefined,
                            selfDir: "out"
                        }),
                        local: true,
                        isNewMsg: true,
                        self: "out",
                        t: (0, l.unixTime)(),
                        to: n.id,
                        caption: t,
                        nativeFlowName: r,
                        interactiveHeader: h,
                        interactiveType: p.default.NATIVE_FLOW,
                        interactivePayload: {
                            buttons: [{
                                name: u,
                                buttonParamsJson: i
                            }],
                            messageVersion: 1
                        }
                    }, c);
                    if ((0, j.isMeAccount)(n.id)) {
                        try {
                            return void(yield(0, b.addAndSendMsgToChat)(n, v)[0]);
                        } catch (e) {
                            __LOG__(3)`${d}: ${e}`;
                            throw e;
                        }
                    }
                    try {
                        const e = yield(0, b.addAndSendMsgToChat)(n, v)[1];
                        if (!e || e !== y.SendMsgResult.OK) {
                            throw (0, S.default)("Order message SendMsgResult failure status");
                        }
                    } catch (e) {
                        __LOG__(3)`${d}: ${e}`;
                        throw e;
                    }
                })).apply(this, arguments);
            }

            function O () {
                return (O = (0, i.default)(function* (e) {
                    var t;
                    const {
                        order: n,
                        chat: r,
                        orderNote: a,
                        discount: i,
                        shipping: l,
                        tax: o,
                        total: u,
                        offset: c
                    } = e;
                    const p = (t = n.orderItemCollection.head()) === null || t === undefined ? undefined : t.id;
                    const h = P(n.sellerJid, p);
                    const m = n.orderItemCollection.map(e => ({
                        retailer_id: e.id,
                        name: e.name,
                        amount: {
                            value: e.price,
                            offset: c
                        },
                        quantity: e.quantity,
                        isCustomItem: e.isCustomItem,
                        isQuantitySet: e.isQuantitySet
                    }));
                    const g = {
                        reference_id: (0, s.default)(),
                        type: "physical-goods",
                        payment_configuration: "merchant_categorization_code",
                        currency: n.currency,
                        total_amount: {
                            value: u,
                            offset: c
                        },
                        order: {
                            status: (0, x.getDefaultOrderStatus)(),
                            items: m,
                            subtotal: {
                                value: Number(n.subtotal),
                                offset: c
                            },
                            tax: o == null ? undefined : {
                                value: o,
                                offset: c
                            },
                            shipping: l == null ? undefined : {
                                value: l,
                                offset: c
                            },
                            discount: i == null ? undefined : {
                                value: i,
                                offset: c
                            }
                        }
                    };
                    yield w({
                        caption: a,
                        chat: r,
                        nativeFlowName: f.default.ORDER_DETAILS,
                        buttonParamsJson: d.stringify(g),
                        errorMessage: "Order message send to chat failure",
                        thumbnail: h,
                        buttonName: "review_and_pay"
                    });
                })).apply(this, arguments);
            }

            function I () {
                return (I = (0, i.default)(function* (e) {
                    const {
                        chat: t,
                        sellerJid: n,
                        orderInfo: r,
                        orderNote: a,
                        orderStatus: i
                    } = e;
                    const l = r.items;
                    const o = r.referenceId;
                    const d = P(n, l[0].id);
                    const s = (0, x.findOrderDetailsMessage)(t, o);
                    const c = s == null ? undefined : s.msgContextInfo(t.id);
                    yield w({
                        caption: a,
                        chat: t,
                        nativeFlowName: f.default.ORDER_STATUS,
                        buttonParamsJson: u.stringify({
                            reference_id: o,
                            order: {
                                status: i
                            }
                        }),
                        errorMessage: "Order message sent to chat failure",
                        thumbnail: d,
                        buttonName: "review_order",
                        contextInfo: c
                    });
                })).apply(this, arguments);
            }

            function T () {
                return (T = (0, i.default)(function* (e) {
                    var t;
                    let n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : v.OrderPaymentStatus.Captured;
                    const {
                        chat: r,
                        orderInfo: a,
                        orderStatus: i,
                        sellerJid: o,
                        offset: s,
                        orderNote: u
                    } = e;
                    const c = a.referenceId;
                    const p = (t = a.items.at(0)) === null || t === undefined ? undefined : t.id;
                    const h = P(o, p);
                    const m = a.items.map(e => {
                        var t;
                        return {
                            retailer_id: e.id,
                            name: e.name,
                            amount: {
                                value: (t = e.amount) !== null && t !== undefined ? t : 0,
                                offset: s
                            },
                            quantity: e.quantity,
                            isCustomItem: e.isCustomItem,
                            isQuantitySet: e.isQuantitySet
                        };
                    });
                    const g = {
                        reference_id: c,
                        payment_status: n,
                        payment_timestamp: (0, l.unixTime)(),
                        currency: a.currency,
                        total_amount: {
                            value: a.totalAmount,
                            offset: s
                        },
                        order: {
                            status: i,
                            items: m,
                            subtotal: {
                                value: Number(a.subtotal),
                                offset: s
                            },
                            tax: a.tax == null ? undefined : {
                                value: a.tax,
                                offset: s
                            },
                            shipping: a.shipping == null ? undefined : {
                                value: a.shipping,
                                offset: s
                            },
                            discount: a.discount == null ? undefined : {
                                value: a.discount,
                                offset: s
                            }
                        }
                    };
                    const b = (0, x.findOrderDetailsMessage)(r, c);
                    const y = b == null ? undefined : b.msgContextInfo(r.id);
                    yield w({
                        caption: u,
                        chat: r,
                        nativeFlowName: f.default.PAYMENT_STATUS,
                        buttonParamsJson: d.stringifyPaymentStatus(g),
                        errorMessage: "Order message send to chat failure",
                        thumbnail: h,
                        buttonName: "payment_status",
                        contextInfo: y
                    });
                })).apply(this, arguments);
            }
        },
        305160: (e, t, n) => {
            "use strict";

            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                return (0, o.jsx)(i.default, {
                    "aria-label": l.fbt._("Remove from cart", null, {
                        hk: "9voCj"
                    }),
                    Icon: a.DeleteIcon,
                    title: l.fbt._("Remove from cart", null, {
                        hk: "9voCj"
                    }),
                    xstyle: d.deleteIcon,
                    onClick: e.onClick
                });
            };
            var a = n(419000);
            var i = r(n(397778));
            var l = n(548360);
            r(n(156720));
            var o = n(785893);
            const d = {
                deleteIcon: {
                    color: "svlsagor",
                    ":hover": {
                        color: "kbf8aj4n"
                    }
                }
            };
        },
        359162: (e, t, n) => {
            "use strict";

            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.AddOrderItem = function (e) {
                let {
                    title: t,
                    onClick: n
                } = e;
                return (0, l.jsx)(a.default, {
                    testid: "add-order-item-button",
                    image: (0, l.jsx)(i.AddItemIcon, {}),
                    primary: t,
                    theme: "add-order-item",
                    onClick: n
                });
            };
            var a = r(n(170206));
            var i = n(114459);
            var l = n(785893);
        },
        730952: (e, t, n) => {
            "use strict";

            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.CatalogProductPrice = function (e) {
                let {
                    orderItem: t,
                    price: n,
                    priceStage: r,
                    currency: p,
                    onPriceChange: h,
                    onPriceStageChange: m,
                    onEnter: g
                } = e;
                switch (r) {
                    case f.Editing:
                        return (0, c.jsx)("div", {
                            role: "textbox",
                            onClick: e => e.stopPropagation(),
                            "data-testid": "catalog-product-price-editing",
                            children: (0, c.jsxs)(i.FlexRow, {
                                align: "center",
                                children: [(0, c.jsx)("span", {
                                    className: (0, u.default)(d.uiPadding.end3),
                                    children: (0, a.formatAmount1000ToParts)(p, 0).symbol
                                }), (0, c.jsx)(l.default, {
                                    currency: p,
                                    value: n != null ? String(n / 1000) : "",
                                    onSave: e => {
                                        m(f.EditableFilled);
                                        h((0, a.valueFromString)(p, e));
                                    },
                                    onCancel: () => {
                                        m(n == null ? f.EditableBlank : f.EditableFilled);
                                    }
                                })]
                            })
                        });
                    case f.EditableFilled:
                        return (0, c.jsx)("div", {
                            role: "button",
                            className: (0, u.default)(o.default.clickableText),
                            onClick: e => {
                                m(f.Editing);
                                e.stopPropagation();
                            },
                            "data-testid": "catalog-product-price-editable-filled",
                            children: (0, a.formatAmount1000)(p, Number(n))
                        });
                    case f.EditableBlank:
                        return (0, c.jsx)("span", {
                            role: "button",
                            className: (0, u.default)(o.default.clickableText),
                            onClick: e => {
                                m(f.Editing);
                                e.stopPropagation();
                            },
                            "data-testid": "catalog-product-price-editable-blank",
                            children: s.fbt._("Enter price", null, {
                                hk: "1Bd2B6"
                            })
                        });
                    default:
                        return (0, c.jsx)("div", {
                            "data-testid": "catalog-product-price-readonly",
                            children: (0, a.formatAmount1000)(p, t.price)
                        });
                }
            };
            t.PriceStage = undefined;
            var a = n(27578);
            var i = n(690495);
            var l = r(n(169256));
            var o = r(n(496254));
            var d = n(676345);
            var s = n(548360);
            var u = r(n(156720));
            var c = n(785893);
            const f = n(76672).Mirrored(["Readonly", "EditableBlank", "EditableFilled", "Editing"]);
            t.PriceStage = f;
        },
        169256: (e, t, n) => {
            "use strict";

            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                let {
                    currency: t,
                    value: n,
                    onSave: r,
                    onCancel: a
                } = e;
                const [l, h] = (0, s.useState)(null);
                const [m, g] = (0, s.useState)(n);
                (0, i.useShowToastErrors)({
                    productPriceError: l
                });
                return (0, c.jsx)("div", {
                    className: (0, u.default)(p),
                    children: (0, c.jsx)(o.RichTextField, {
                        managed: true,
                        constrainedWidth: true,
                        hideFloatingLabel: true,
                        focusOnMount: true,
                        editable: true,
                        lockable: true,
                        startActive: true,
                        placeholder: d.fbt._("Price", null, {
                            hk: "3OsKht"
                        }),
                        value: m,
                        theme: "default",
                        maxLength: 12,
                        customStyleThemes: ["disabledLabel", "noErrorInfo"],
                        testid: "order-detail-amount-input",
                        validate: e => {
                            const n = f(e, t);
                            h(n);
                            return !n;
                        },
                        onChange: e => {
                            const n = e.text;
                            g(n);
                            h(f(n, t));
                        },
                        onSave: () => {
                            r(m);
                        },
                        onCancel: a,
                        error: l
                    })
                });
            };
            var a = n(27578);
            var i = n(353950);
            var l = n(238977);
            var o = n(202391);
            var d = n(548360);
            var s = n(667294);
            var u = r(n(156720));
            var c = n(785893);

            function f (e, t) {
                if (e == null || !e.length || !(0, a.validatePriceString)(t, e)) {
                    return d.fbt._("Enter a valid price", null, {
                        hk: "1WZB7p"
                    });
                }
                if ((0, a.valueFromString)(t, e) / l.DEFAULT_OFFSET < 0) {
                    return d.fbt._("Enter a positive price", null, {
                        hk: "1goGAM"
                    });
                } else {
                    return undefined;
                }
            }
            const p = {
                textAlign: "ljrqcn24",
                width: "h4dw90qs",
                overflowX: "gfz4du6o",
                overflowY: "r7fjleex",
                marginTop: "obt84bhp",
                paddingEnd: "fhfm09ip"
            };
        },
        353950: (e, t, n) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.additionalChargeErrorHandler = function (e) {
                let {
                    label: t,
                    currency: n,
                    fieldType: l,
                    maxFlatValue: o,
                    enablePercentValueCheck: d,
                    value: s
                } = e;
                if (!(0, a.validatePriceString)(n, s)) {
                    return c();
                }
                const u = (0, a.valueFromString)(n, s) / i.DEFAULT_OFFSET;
                if (u < 0) {
                    return f();
                }
                if (l === i.PERCENTAGE_SYMBOL) {
                    if (Boolean(d) && u > 100) {
                        return p(t != null ? t : "");
                    }
                } else if ((0, r.isNumber)(o) && u > o) {
                    return h(t != null ? t : "");
                }
                return "";
            };
            t.errorMessageBigPercentageValue = t.errorMessageBigFlatValue = undefined;
            t.getOrderDetailInvalidNumberErrorMessage = c;
            t.getOrderDetailNegativeNumberErrorMessage = f;
            t.useShowToastErrors = function (e) {
                (0, s.useEffect)(() => {
                    for (const t in e) {
                        const n = e[t];
                        if (n != null) {
                            o.ToastManager.open((0, u.jsx)(l.Toast, {
                                duration: 10000,
                                id: t + n.toString(),
                                msg: n,
                                action: {
                                    actionText: d.fbt._("OKAY", null, {
                                        hk: "3RIrWh"
                                    }),
                                    dismiss: true,
                                    theme: "success"
                                }
                            }));
                        }
                    }
                }, [e]);
            };
            var r = n(724976);
            var a = n(27578);
            var i = n(238977);
            var l = n(625786);
            var o = n(390737);
            var d = n(548360);
            var s = n(667294);
            var u = n(785893);

            function c () {
                return d.fbt._("Enter a valid number", null, {
                    hk: "34R7Hv"
                });
            }

            function f () {
                return d.fbt._("Enter a positive number", null, {
                    hk: "3UMjdw"
                });
            }
            const p = e => d.fbt._("{input_label} cannot be more than 100%", [d.fbt._param("input_label", e)], {
                hk: "1WMDbw"
            });
            t.errorMessageBigPercentageValue = p;
            const h = e => d.fbt._("{input_label} cannot be more than subtotal", [d.fbt._param("input_label", e)], {
                hk: "3IRSWP"
            });
            t.errorMessageBigFlatValue = h;
        },
        453823: (e, t, n) => {
            "use strict";

            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                let {
                    details: t,
                    currency: n,
                    priceMap: r,
                    items: j,
                    onDeleteItem: C,
                    onAddItem: S,
                    onPriceChange: _,
                    onItemQuantityChange: k
                } = e;
                const [P, w] = (0, v.useState)(null);
                const [M, O] = (0, v.useState)({});
                const I = (0, v.useCallback)(e => e.price != null ? p.PriceStage.Readonly : (r == null ? undefined : r[e.id]) != null ? p.PriceStage.EditableFilled : p.PriceStage.EditableBlank, [r]);
                const T = (0, v.useCallback)((e, t) => {
                    O(n => (0, a.default)((0, a.default)({}, n), {}, {
                        [t.id]: e
                    }));
                }, []);
                const E = Boolean(t);
                const N = (e, t) => {
                    var a;
                    var i;
                    return (0, b.jsxs)("div", {
                        className: (0, x.default)(y.productDeleteWrapper),
                        children: [(0, b.jsx)(p.CatalogProductPrice, {
                            price: (a = r == null ? undefined : r[e.id]) !== null && a !== undefined ? a : null,
                            priceStage: (i = M[e.id]) !== null && i !== undefined ? i : I(e),
                            currency: n,
                            orderItem: e,
                            onPriceChange: t => _ == null ? undefined : _(t, e.id),
                            onPriceStageChange: t => {
                                T(t, e);
                            },
                            onEnter: () => {
                                w(null);
                            }
                        }), t === P && (0, b.jsx)("div", {
                            className: (0, x.default)(m.uiMargin.start5),
                            children: (0, b.jsx)(l.default, {
                                onClick: n => {
                                    var r;
                                    var a;
                                    n.stopPropagation();
                                    r = () => C == null ? undefined : C(t);
                                    a = e.name;
                                    c.ModalManager.open((0, b.jsx)(s.ConfirmPopup, {
                                        title: g.fbt._("Delete {order_item_name} from order?", [g.fbt._param("order_item_name", a)], {
                                            hk: "2Na2JW"
                                        }),
                                        okText: g.fbt._("Delete", null, {
                                            hk: "4m6dzv"
                                        }),
                                        onOK: () => {
                                            if (!(r == null)) {
                                                r();
                                            }
                                            c.ModalManager.close();
                                        },
                                        cancelText: g.fbt._("Cancel", null, {
                                            hk: "15AkJV"
                                        }),
                                        onCancel: () => {
                                            c.ModalManager.close();
                                        }
                                    }));
                                }
                            })
                        })]
                    });
                };
                return (0, b.jsxs)(u.FlexColumn, {
                    align: "stretch",
                    xstyle: [y.orderItemsContainer],
                    children: [!E && ((0, i.orderDetailsFromCatalogEnabled)() || (0, i.orderDetailsCustomItemEnabled)()) && (0, b.jsx)(f.AddOrderItem, {
                        title: g.fbt._("Add items", null, {
                            hk: "M4YqU"
                        }),
                        onClick: () => S == null ? undefined : S()
                    }), j.map((e, t) => {
                        const n = g.fbt._("Quantity {item-quantity}", [g.fbt._param("item-quantity", e.quantity)], {
                            hk: "3ESE8k"
                        });
                        return (0, b.jsx)(o.default, (0, a.default)({
                            testid: "order-item-cell",
                            className: (0, x.default)(t > 0 && m.uiPadding.top10),
                            disabled: true,
                            image: (0, b.jsx)(h.OrderItemIcon, {
                                mediaData: e.thumbnailUrl ? e.mediaData : null,
                                useCustomIcon: e.isCustomItem
                            }),
                            primary: (0, b.jsx)("span", {
                                className: (0, x.default)(y.orderItemName),
                                title: e.name,
                                children: e.name
                            }),
                            secondary: E ? n : (0, b.jsx)(d.default, {
                                quantity: e.quantity,
                                onAddOneClick: () => k == null ? undefined : k(t, e.quantity + 1),
                                onRemoveOneClick: () => k == null ? undefined : k(t, e.quantity - 1)
                            }),
                            theme: "add-order-item",
                            detail: N(e, t)
                        }, E ? undefined : {
                            onMouseEnter: () => w(t),
                            onMouseLeave: () => w(null)
                        }), t);
                    })]
                });
            };
            var a = r(n(81109));
            var i = n(72696);
            var l = r(n(305160));
            var o = r(n(170206));
            var d = r(n(763879));
            var s = n(103440);
            var u = n(690495);
            var c = n(114850);
            var f = n(359162);
            var p = n(730952);
            var h = n(114459);
            var m = n(676345);
            var g = n(548360);
            var v = n(667294);
            var x = r(n(156720));
            var b = n(785893);
            const y = {
                orderItemsContainer: {
                    marginTop: "jdreu547",
                    marginEnd: "jnwc1y2a",
                    marginBottom: "n5a6z3tu",
                    marginStart: "svoq16ka"
                },
                orderItemName: {
                    color: "tviruh8d",
                    whiteSpace: "le5p0ye3",
                    overflowX: "gfz4du6o",
                    overflowY: "r7fjleex",
                    textOverflow: "lhj4utae"
                },
                productDeleteWrapper: {
                    display: "p357zi0d",
                    alignItems: "gndfcl4n"
                }
            };
        },
        238977: (e, t, n) => {
            "use strict";

            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.PERCENTAGE_SYMBOL = t.DEFAULT_OFFSET = undefined;
            t.calculateFlatAmounts = function (e) {
                let {
                    orderSubtotal: t,
                    discountType: n,
                    discountText: r,
                    taxType: o,
                    taxText: d,
                    shippingText: s
                } = e;
                const u = l({
                    type: n,
                    value: r,
                    total: t
                });
                const c = l({
                    type: o,
                    value: d,
                    total: t - (u != null ? u : 0)
                });
                const f = i(s);
                const p = t - (u != null ? u : 0) + (f != null ? f : 0) + (c != null ? c : 0);
                return {
                    total: Math.trunc(p * a),
                    tax: c == null ? null : Math.trunc(c * a),
                    shipping: f == null ? null : Math.trunc(f * a),
                    discount: u == null ? null : Math.trunc(u * a)
                };
            };
            var r = n(27578);
            t.PERCENTAGE_SYMBOL = "%";
            const a = 1000;

            function i (e) {
                if (e === "") {
                    return null;
                }
                const t = (0, r.valueFromString)("USD", e) / a;
                if (Number.isNaN(t)) {
                    return 0;
                } else {
                    return t;
                }
            }

            function l (e) {
                let {
                    type: t,
                    value: n,
                    total: r
                } = e;
                const a = i(n);
                if (a == null) {
                    return null;
                } else if (t === "%") {
                    return a / 100 * r;
                } else {
                    return a;
                }
            }
            t.DEFAULT_OFFSET = a;
        },
        535407: (e, t, n) => {
            "use strict";

            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                let {
                    children: t
                } = e;
                return (0, o.jsx)(a.FlexColumn, {
                    xstyle: d.container,
                    align: "stretch",
                    children: i.Children.map(t, (e, t) => (0, o.jsxs)(o.Fragment, {
                        children: [t !== 0 ? (0, o.jsx)("div", {
                            className: (0, l.default)(d.separator)
                        }) : null, e]
                    }))
                });
            };
            var a = n(690495);
            var i = n(667294);
            var l = r(n(156720));
            var o = n(785893);
            const d = {
                container: {
                    gap: "mqqyhd6v"
                },
                separator: {
                    height: "bbl9m3t3",
                    borderTop: "iupwfssi"
                }
            };
        },
        210762: (e, t, n) => {
            "use strict";

            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                let {
                    orderId: t,
                    orderStatus: n,
                    sellerWid: r,
                    testid: h
                } = e;
                const m = a.ContactCollection.get(r);
                const g = m ? (0, f.jsxs)(f.Fragment, {
                    children: [(0, f.jsx)(l.FlexRow, {
                        children: (0, f.jsx)(i.DetailImage, {
                            id: r,
                            size: 48
                        })
                    }), (0, f.jsxs)(l.FlexColumn, {
                        align: "center",
                        children: [(0, f.jsx)(o.Name, {
                            className: (0, c.default)(p.sellerName),
                            useDisplayName: true,
                            contact: m
                        }), t != null ? (0, f.jsx)(d.TextDiv, {
                            color: "secondary",
                            weight: "medium",
                            className: (0, c.default)(p.uppercase, s.uiMargin.top4),
                            children: u.fbt._("order #{order-id}", [u.fbt._param("order-id", t)], {
                                hk: "1JaZPw"
                            })
                        }) : null]
                    })]
                }) : null;
                return (0, f.jsxs)(l.FlexColumn, {
                    align: "center",
                    xstyle: [p.container, s.uiPadding.horiz16],
                    testid: h,
                    children: [g, n]
                });
            };
            var a = n(177938);
            var i = n(23641);
            var l = n(690495);
            var o = n(21645);
            var d = n(180519);
            var s = n(676345);
            var u = n(548360);
            var c = r(n(156720));
            var f = n(785893);
            const p = {
                container: {
                    gap: "nypubj7v"
                },
                uppercase: {
                    textTransform: "ofejerhi"
                },
                sellerName: {
                    fontSize: "p9fp32ui",
                    lineHeight: "tkq7s68q",
                    fontWeight: "hnx8ox4h",
                    color: "tl2vja3b"
                }
            };
        },
        496254: (e, t, n) => {
            "use strict";

            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = undefined;
            r(n(156720));
            t.default = {
                clickableText: {
                    color: "o0rubyzf",
                    cursor: "ajgl1lbb",
                    fontWeight: "m1e7cby3",
                    lineHeight: "iq0m558w",
                    letterSpacing: "ysae3w6m",
                    ":hover": {
                        textDecoration: "edeob0r2"
                    }
                }
            };
        },
        697944: (e, t, n) => {
            "use strict";

            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                let {
                    orderStatus: t = (0, o.getDefaultOrderStatus)()
                } = e;
                return (0, c.jsxs)(s.TextDiv, {
                    color: h(t),
                    theme: "small",
                    xstyle: f.container,
                    children: [m(t), p(t)]
                });
            };
            var a = n(836529);
            var i = n(35257);
            var l = n(6689);
            var o = n(620982);
            var d = n(25192);
            var s = n(180519);
            var u = n(548360);
            r(n(156720));
            var c = n(785893);
            const f = {
                container: {
                    backgroundColor: "i16jpgpt",
                    display: "i86elurf",
                    alignItems: "gndfcl4n",
                    fontSize: "dsh4tgtl",
                    paddingTop: "i5tg98hk",
                    paddingEnd: "ft2m32mm",
                    paddingBottom: "przvwfww",
                    paddingStart: "k4wy2cgb",
                    borderTopStartRadius: "g130k69c",
                    borderTopEndRadius: "k1a7joe8",
                    borderBottomEndRadius: "dc5qina8",
                    borderBottomStartRadius: "kfr1vweg"
                },
                icon: {
                    marginEnd: "mw4yctpw"
                },
                iconCipherText: {
                    marginTop: "dwvzf427"
                }
            };

            function p (e) {
                switch (e) {
                    case o.OrderStatus.Pending:
                        return u.fbt._("Order pending", null, {
                            hk: "G8dLv"
                        });
                    case o.OrderStatus.Processing:
                        return u.fbt._("Order processing", null, {
                            hk: "4vPHTW"
                        });
                    case o.OrderStatus.PartiallyShipped:
                        return u.fbt._("Order partially shipped", null, {
                            hk: "3MR9kU"
                        });
                    case o.OrderStatus.Shipped:
                        return u.fbt._("Order shipped", null, {
                            hk: "1jZ5aa"
                        });
                    case o.OrderStatus.Canceled:
                        return u.fbt._("Order canceled", null, {
                            hk: "3veVcK"
                        });
                    case o.OrderStatus.Complete:
                        return u.fbt._("Order complete", null, {
                            hk: "30XhC7"
                        });
                }
            }

            function h (e) {
                switch (e) {
                    case o.OrderStatus.Pending:
                    case o.OrderStatus.Processing:
                    case o.OrderStatus.PartiallyShipped:
                    case o.OrderStatus.Shipped:
                        return;
                    case o.OrderStatus.Canceled:
                        return "danger";
                    case o.OrderStatus.Complete:
                        return "success";
                }
            }

            function m (e) {
                switch (e) {
                    case o.OrderStatus.Pending:
                    case o.OrderStatus.Processing:
                        return (0, c.jsx)(d.StatusClockIcon, {
                            width: 12,
                            displayInline: true,
                            xstyle: [f.icon, f.iconCipherText]
                        });
                    case o.OrderStatus.PartiallyShipped:
                    case o.OrderStatus.Shipped:
                        return (0, c.jsx)(l.LocalShippingIcon, {
                            width: 12,
                            displayInline: true,
                            xstyle: f.icon
                        });
                    case o.OrderStatus.Canceled:
                        return (0, c.jsx)(i.AlertErrorIcon, {
                            width: 12,
                            displayInline: true,
                            xstyle: f.icon
                        });
                    case o.OrderStatus.Complete:
                        return (0, c.jsx)(a.ActionCheckCircleIcon, {
                            width: 12,
                            displayInline: true,
                            xstyle: f.icon
                        });
                }
            }
        },
        392432: (e, t, n) => {
            "use strict";

            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                let {
                    chat: t,
                    onSubmit: n
                } = e;
                const r = t.contact.getFormattedUser();
                const [g, v] = (0, c.useState)(false);
                return (0, p.jsxs)(i.ConfirmPopup, {
                    testid: "order-ephemeral-exemption-confirm-popup",
                    title: u.fbt._("Disappearing messages are turned on", null, {
                        hk: "22mxJR"
                    }),
                    onOK: () => {
                        if (g) {
                            s.userPreferencesStore.set(d.KEYS.DISAPPEARING_MSG_DISCLAIMER_DIMISSED, true);
                        }
                        l.ModalManager.close();
                        n();
                    },
                    onCancel: () => {
                        l.ModalManager.close();
                    },
                    children: [(0, p.jsx)(o.WDSTextSectionTitle, {
                        children: u.fbt._("Disappearing messages are turned on in your chat with {contact-name}, but this order will not disappear.", [u.fbt._param("contact-name", r)], {
                            hk: "4kgj97"
                        })
                    }), (0, p.jsx)("div", {
                        children: (0, p.jsxs)("div", {
                            className: (0, f.default)(h),
                            children: [(0, p.jsx)(a.CheckBox, {
                                testid: "order-ephemeral-exemption-popup-skip-checkbox",
                                id: "order-ephemeral-exemption-popup-skip-checkbox-id",
                                checked: g,
                                onChange: () => {
                                    v(!g);
                                }
                            }), (0, p.jsx)("label", {
                                htmlFor: "order-ephemeral-exemption-popup-skip-checkbox-id",
                                className: (0, f.default)(m),
                                children: u.fbt._("Don't show me this again", null, {
                                    hk: "2g9ZnR"
                                })
                            })]
                        })
                    })]
                });
            };
            var a = n(468926);
            var i = n(103440);
            var l = n(114850);
            var o = n(180519);
            var d = n(94872);
            var s = n(53575);
            var u = n(548360);
            var c = n(667294);
            var f = r(n(156720));
            var p = n(785893);
            const h = {
                paddingTop: "n1yiu2zv",
                paddingEnd: "f9ovudaz",
                paddingBottom: "eb4rp10x",
                paddingStart: "gx1rr48f"
            };
            const m = {
                marginStart: "fooq7fky"
            };
        },
        114459: (e, t, n) => {
            "use strict";

            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.AddItemIcon = function () {
                return (0, d.jsx)("div", {
                    className: (0, o.default)(s),
                    children: (0, d.jsx)(a.AddItemIcon, {
                        className: (0, o.default)(c)
                    })
                });
            };
            t.OrderItemIcon = function (e) {
                let {
                    mediaData: t,
                    useCustomIcon: n
                } = e;
                if (n || t == null) {
                    return (0, d.jsx)(f, {});
                } else {
                    return (0, d.jsx)(l.ProductThumb, {
                        mediaData: t,
                        theme: "orderSquareThumb"
                    });
                }
            };
            var a = n(177322);
            var i = n(862201);
            var l = n(493770);
            var o = r(n(156720));
            var d = n(785893);
            const s = {
                display: "p357zi0d",
                alignItems: "gndfcl4n",
                width: "dyxdk6fi",
                height: "m3o1wsh7",
                borderTopStartRadius: "bbr44loe",
                borderTopEndRadius: "ooj5yc5b",
                borderBottomEndRadius: "m8i16etx",
                borderBottomStartRadius: "cw0ivh8j",
                backgroundColor: "osuelnrh",
                boxShadow: "gnkxn0la"
            };
            const u = {
                marginTop: "m3ct2rho",
                marginEnd: "k1jo73ug",
                marginBottom: "ec1z5skj",
                marginStart: "isfiuinm",
                color: "s4recxw2"
            };
            const c = {
                marginTop: "m3ct2rho",
                marginEnd: "k1jo73ug",
                marginBottom: "ec1z5skj",
                marginStart: "isfiuinm",
                color: "s4recxw2"
            };

            function f () {
                return (0, d.jsx)("div", {
                    className: (0, o.default)(s),
                    children: (0, d.jsx)(i.ListMsgIconIcon, {
                        className: (0, o.default)(u)
                    })
                });
            }
        },
        832545: (e, t, n) => {
            "use strict";

            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.OrderSummaryDrawer = function (e) {
                let {
                    chat: t,
                    currency: n,
                    priceMap: r,
                    orderItems: l,
                    orderSubtotal: f,
                    additionalCharges: m,
                    flatAmounts: x,
                    onBack: C,
                    onSubmit: M,
                    onAddItem: N,
                    onDeleteItem: A,
                    onPriceChange: D,
                    onAdditionalCharges: R,
                    onItemQuantityChange: F,
                    entryPoint: B = null,
                    onDeclineOrder: z = null
                } = e;
                const q = l.every(e => {
                    var t;
                    return Number.isInteger((t = e.price) !== null && t !== undefined ? t : r[e.id]);
                });
                const L = l.length !== 0;
                let W = M;
                if (P.userPreferencesStore.get(_.KEYS.DISAPPEARING_MSG_DISCLAIMER_DIMISSED) !== true && (0, a.inOrderMessagesEphemeralExceptionEnabled)() && (0, i.isEphemeralSettingOn)(t)) {
                    W = () => {
                        p.ModalManager.open((0, O.jsx)(y.default, {
                            chat: t,
                            onSubmit: M
                        }));
                    };
                }
                return (0, O.jsxs)(d.default, {
                    children: [(0, O.jsx)(u.DrawerHeader, {
                        title: w.fbt._("Create order", null, {
                            hk: "3snLWG"
                        }),
                        onBack: C,
                        type: u.DRAWER_HEADER_TYPE.SMALL
                    }), (0, O.jsxs)(s.default, {
                        children: [(0, O.jsx)(c.default, {
                            xstyle: [I.orderItemsContainer, S.uiPadding.top20, S.uiPadding.bottom20],
                            theme: "refresh-padding-title",
                            children: (0, O.jsxs)(g.default, {
                                children: [(0, O.jsx)(v.default, {
                                    sellerWid: (0, k.getMeUser)(),
                                    orderStatus: (0, O.jsx)(b.default, {})
                                }), (0, O.jsx)(h.default, {
                                    currency: n,
                                    priceMap: r,
                                    items: l,
                                    onDeleteItem: A,
                                    onPriceChange: D,
                                    onAddItem: N,
                                    onItemQuantityChange: F
                                }), (0, O.jsx)(E, {
                                    tax: x.tax,
                                    discount: x.discount,
                                    shipping: x.shipping,
                                    currency: n,
                                    subtotal: f,
                                    additionalCharges: m,
                                    canDisplayAdditionalCharges: L,
                                    canChangeAdditionalCharges: L,
                                    onAdditionalCharges: R
                                })]
                            })
                        }), (l.length, null), (0, O.jsx)(j.OrderTotalPrice, {
                            xstyle: S.uiPadding.all16,
                            visible: L,
                            disabled: !q,
                            testid: "send-order-button",
                            totalPrice: (0, o.formatAmount1000)(n, x.total),
                            title: w.fbt._("Total", null, {
                                hk: "qKqct"
                            }),
                            onConfirm: W,
                            confirmTitle: w.fbt._("Send Order", null, {
                                hk: "dGwCV"
                            }),
                            error: T(q, x.total, n),
                            entryPoint: B,
                            onDeclineOrder: z
                        })]
                    })]
                });
            };
            t.OrderValues = E;
            var a = n(72696);
            var i = n(738501);
            var l = r(n(196554));
            var o = n(27578);
            var d = r(n(908081));
            var s = r(n(324093));
            var u = n(626194);
            var c = r(n(969358));
            var f = n(690495);
            var p = n(114850);
            var h = r(n(453823));
            var m = n(238977);
            var g = r(n(535407));
            var v = r(n(210762));
            var x = r(n(496254));
            var b = r(n(697944));
            var y = r(n(392432));
            var j = n(208160);
            var C = n(180519);
            var S = n(676345);
            var _ = n(94872);
            var k = n(459857);
            var P = n(53575);
            var w = n(548360);
            var M = r(n(156720));
            var O = n(785893);
            const I = {
                orderFieldsContainer: {
                    gap: "sxkbojvh"
                },
                orderItemsContainer: {
                    flexShrink: "m0h2a7mj",
                    overflowY: "ag5g9lrv"
                }
            };
            const T = (e, t, n) => {
                if (!e) {
                    return w.fbt._("Items must all have a price", null, {
                        hk: "1PvX8G"
                    }).toString();
                }
                const r = (0, a.orderDetailsTotalOrderMinimumValue)() * 1000;
                const i = (0, a.orderDetailsTotalMaxValue)() * 1000;
                if (t <= r) {
                    return w.fbt._("Total must be more than {order_min_allowed_amount}", [w.fbt._param("order_min_allowed_amount", (0, o.formatAmount1000)(n, r))], {
                        hk: "1TzgFB"
                    }).toString();
                } else if (t > i) {
                    return w.fbt._("Total cannot be more than {order_max_allowed_amount}", [w.fbt._param("order_max_allowed_amount", (0, o.formatAmount1000)(n, i))], {
                        hk: "2eOboQ"
                    }).toString();
                } else {
                    return null;
                }
            };

            function E (e) {
                let {
                    tax: t,
                    discount: n,
                    shipping: r,
                    currency: a,
                    subtotal: i,
                    additionalCharges: d,
                    canDisplayAdditionalCharges: s,
                    canChangeAdditionalCharges: u,
                    onAdditionalCharges: c
                } = e;
                const p = (d == null ? undefined : d.discountText) && d.discountType === m.PERCENTAGE_SYMBOL ? w.fbt._("{discount_percent}% off", [w.fbt._param("discount_percent", d.discountText)], {
                    hk: "4yt64k"
                }) : null;
                const h = (d == null ? undefined : d.taxText) && d.taxType === m.PERCENTAGE_SYMBOL ? ` (${d.taxText}%)` : null;
                return (0, O.jsxs)(f.FlexColumn, {
                    align: "stretch",
                    xstyle: [I.orderFieldsContainer, S.uiPadding.horiz16],
                    children: [(0, O.jsxs)(f.FlexRow, {
                        justify: "all",
                        testid: "order-details-subtotal-row",
                        children: [(0, O.jsx)(C.TextSpan, {
                            color: "secondary",
                            size: "16",
                            children: w.fbt._("Subtotal", null, {
                                hk: "3XD55n"
                            })
                        }), (0, O.jsx)(C.TextSpan, {
                            color: "secondary",
                            size: "16",
                            children: (0, o.formatAmount1000)(a, i)
                        })]
                    }), Boolean(s) && (0, O.jsxs)(O.Fragment, {
                        children: [n != null && (0, O.jsxs)(f.FlexRow, {
                            justify: "all",
                            testid: "order-details-discount-row",
                            children: [(0, O.jsxs)(C.TextSpan, {
                                color: "secondary",
                                size: "16",
                                children: [w.fbt._("Discount", null, {
                                    hk: "1ZzkHY"
                                }), " ", p]
                            }), (0, O.jsx)(C.TextSpan, {
                                color: "secondary",
                                size: "16",
                                children: (0, o.formatAmount1000)(a, -n)
                            })]
                        }), r != null && (0, O.jsxs)(f.FlexRow, {
                            justify: "all",
                            testid: "order-details-shipping-row",
                            children: [(0, O.jsx)(C.TextSpan, {
                                color: "secondary",
                                size: "16",
                                children: w.fbt._("Shipping", null, {
                                    hk: "1pvvuy"
                                })
                            }), (0, O.jsx)(C.TextSpan, {
                                color: "secondary",
                                size: "16",
                                children: (0, o.formatAmount1000)(a, r)
                            })]
                        }), t != null && (0, O.jsxs)(f.FlexRow, {
                            justify: "all",
                            testid: "order-details-tax-row",
                            children: [(0, O.jsxs)(C.TextSpan, {
                                color: "secondary",
                                size: "16",
                                children: [w.fbt._("Tax", null, {
                                    hk: "OjxE4"
                                }), h]
                            }), (0, O.jsx)(C.TextSpan, {
                                color: "secondary",
                                size: "16",
                                children: (0, o.formatAmount1000)(a, t)
                            })]
                        }), Boolean(u) && (0, O.jsx)(f.FlexRow, {
                            justify: "all",
                            align: "center",
                            children: (0, O.jsx)(l.default, {
                                onClick: () => c == null ? undefined : c(),
                                testid: "order-details-additional-charges-button",
                                className: (0, M.default)(x.default.clickableText, S.uiMargin.bottom0),
                                children: (0, O.jsx)("span", {
                                    children: w.fbt._("Add discount, shipping or tax", null, {
                                        hk: "3GTNs0"
                                    })
                                })
                            })
                        })]
                    })]
                });
            }
        },
        208160: (e, t, n) => {
            "use strict";

            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.OrderApplyChangesButton = h;
            t.OrderDeclineButton = m;
            t.OrderTotalPrice = function (e) {
                let {
                    title: t,
                    xstyle: n,
                    visible: r,
                    disabled: a,
                    totalPrice: i,
                    confirmTitle: o,
                    testid: s,
                    onConfirm: u,
                    error: g = null,
                    entryPoint: v = null,
                    onDeclineOrder: x = null
                } = e;
                if (r) {
                    return (0, f.jsxs)(l.default, {
                        xstyle: n,
                        children: [g == null ? (0, f.jsxs)("div", {
                            className: (0, c.default)(p.priceContainer),
                            "data-testid": "total-price-container",
                            children: [t, (0, f.jsx)("p", {
                                children: i
                            })]
                        }) : (0, f.jsx)(d.TextDiv, {
                            color: "danger",
                            size: "16",
                            xstyle: p.errorLabel,
                            children: g
                        }), (0, f.jsx)(h, {
                            title: o,
                            onClick: u,
                            disabled: a || Boolean(g),
                            testid: s
                        }), (0, f.jsx)(m, {
                            entryPoint: v,
                            onClick: x
                        })]
                    });
                } else {
                    return null;
                }
            };
            var a = r(n(120162));
            var i = r(n(692629));
            var l = r(n(969358));
            var o = n(272493);
            var d = n(180519);
            var s = n(676345);
            var u = n(548360);
            var c = r(n(156720));
            var f = n(785893);
            const p = {
                buttonWrapper: {
                    display: "p357zi0d",
                    flexDirection: "f8m0rgwh",
                    alignItems: "gndfcl4n"
                },
                priceContainer: {
                    display: "p357zi0d",
                    flexDirection: "sap93d0t",
                    justifyContent: "o4u7okr9",
                    fontWeight: "nbipi2bn"
                },
                errorLabel: {
                    textAlign: "qfejxiq4"
                }
            };

            function h (e) {
                let {
                    title: t,
                    disabled: n,
                    onClick: r,
                    testid: a
                } = e;
                return (0, f.jsx)("div", {
                    className: (0, c.default)(p.buttonWrapper, s.uiMargin.top16),
                    children: (0, f.jsx)(i.default, {
                        type: "primary",
                        disabled: n,
                        onClick: r,
                        testid: a,
                        children: t
                    })
                });
            }

            function m (e) {
                let {
                    entryPoint: t = null,
                    onClick: n = null
                } = e;
                if (t === a.default.FROM_CART && n != null && (0, o.isOrderExpansionEnabled)()) {
                    return (0, f.jsx)("div", {
                        className: (0, c.default)(p.buttonWrapper, s.uiMargin.top16),
                        children: (0, f.jsx)(i.default, {
                            type: "secondary",
                            onClick: n,
                            testid: "decline-cart-order-button",
                            children: u.fbt._("Decline cart", null, {
                                hk: "4dIEiB"
                            })
                        })
                    });
                } else {
                    return null;
                }
            }
        },
        407284: (e, t, n) => {
            "use strict";

            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = function (e) {
                const {
                    onClick: t,
                    label: n,
                    PrefixIcon: r,
                    PostfixIcon: u,
                    xstyle: c
                } = e;
                const f = e.iconTheme === "padded-svg";
                const p = [s.iconSvg, f ? s.paddedSvg : i.uiPadding.all4];
                const h = {
                    width: f ? 20 : 16,
                    height: f ? 20 : 16
                };
                return (0, d.jsxs)(l.default, {
                    xstyle: [s.container, i.uiPadding.vert8, i.uiPadding.horiz12, r != null && i.uiPadding.start36, u != null && i.uiPadding.end36, c],
                    onClick: t,
                    "aria-label": e["aria-label"],
                    children: [r && (0, d.jsx)(r, (0, a.default)({
                        xstyle: [s.icon, s.prefixIcon, i.uiMargin.start5],
                        iconXstyle: p
                    }, h)), (0, d.jsx)("div", {
                        className: (0, o.default)(s.content),
                        children: n
                    }), u && (0, d.jsx)(u, (0, a.default)({
                        xstyle: [s.icon, i.uiMargin.start5],
                        iconXstyle: p
                    }, h))]
                });
            };
            var a = r(n(81109));
            var i = n(676345);
            var l = r(n(625903));
            var o = r(n(156720));
            var d = n(785893);
            const s = {
                container: {
                    position: "g0rxnol2",
                    color: "nuiuantz",
                    backgroundColor: "jvy3y6qh",
                    borderTopStartRadius: "g130k69c",
                    borderTopEndRadius: "k1a7joe8",
                    borderBottomEndRadius: "dc5qina8",
                    borderBottomStartRadius: "kfr1vweg"
                },
                content: {
                    display: "l7jjieqr"
                },
                icon: {
                    display: "l7jjieqr",
                    position: "lhggkp7q",
                    right: "rsmgdaqi",
                    top: "mvf5n2qr"
                },
                iconSvg: {
                    color: "nuiuantz"
                },
                prefixIcon: {
                    left: "lidbxt4q"
                },
                paddedSvg: {
                    paddingTop: "qbqilfqo",
                    paddingEnd: "iqx13udk",
                    paddingBottom: "a15vwmim",
                    paddingStart: "qiohso4h"
                }
            };
        },
        745170: (e, t, n) => {
            "use strict";

            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SearchInput = function (e) {
                const {
                    placeholder: t,
                    spellCheck: n,
                    onSearch: r,
                    onClick: j,
                    searchInputA11yLabel: C,
                    initialValue: S,
                    focusOnMount: _,
                    colorScheme: k
                } = e;
                const P = (0, f.useRef)(null);
                const [w, M] = (0, f.useState)("");
                const [O, I] = (0, f.useState)(false);
                const T = (0, m.default)(() => {
                    (() => {
                        const e = P.current;
                        if (e) {
                            e.reset();
                            M("");
                        }
                    })();
                });
                (0, h.default)(() => {
                    T();
                });
                const E = () => {
                    (0, a.default)(P.current, "inputRef.current").focus();
                    I(true);
                };
                let N;
                switch (k) {
                    case "darker":
                        N = b;
                        break;
                    case "default":
                    default:
                        N = x;
                }
                let A = null;
                if (O && Boolean(w)) {
                    A = (0, g.jsx)("button", {
                        "aria-label": c.fbt._("Cancel search", null, {
                            hk: "16SlG4"
                        }),
                        className: (0, p.default)([v.iconCloseSearch, N.iconCloseSearch]),
                        onClick: () => {
                            T();
                            E();
                        },
                        children: (0, g.jsx)(u.XAltIcon, {})
                    }, "icon-clear-search");
                }
                const D = (0, p.default)(d.uiMargin.vert10, d.uiMargin.horiz0, d.uiPadding.top0, d.uiPadding.end12, d.uiPadding.bottom8, d.uiPadding.start12, v.container);
                return (0, g.jsx)("div", {
                    className: D,
                    "data-testid": "chat-list-search-container",
                    children: (0, g.jsx)("div", {
                        className: (0, p.default)(v.inputContainer),
                        children: (0, g.jsxs)("div", {
                            className: (0, p.default)([v.inputWrapper, N.inputWrapper]),
                            children: [(0, g.jsx)("div", {
                                className: (0, p.default)([d.uiPadding.vert0, d.uiPadding.horiz8, v.iconSearch, N.iconSearch]),
                                children: (0, g.jsx)(o.SearchIcon, {})
                            }), (0, g.jsxs)(i.FlexRow, {
                                align: "center",
                                xstyle: v.innerInputWrapper,
                                children: [(0, g.jsx)(s.default, {
                                    transitionName: "pop",
                                    children: A
                                }), (0, g.jsx)("div", {
                                    "data-testid": "input-placeholder",
                                    className: (0, p.default)(v.inputPlaceholder, N.inputPlaceholder, !(!w && !O) && v.inputPlaceholderHidden),
                                    children: t
                                }), (0, g.jsx)(l.RichTextInput, {
                                    initialText: S,
                                    testid: "search-input",
                                    title: C,
                                    ref: P,
                                    spellCheck: n,
                                    lineWrap: false,
                                    focusOnMount: _,
                                    onBlur: t => {
                                        I(false);
                                        if (e.onBlur != null) {
                                            e.onBlur(t);
                                        }
                                    },
                                    onFocus: O ? y : t => {
                                        E();
                                        if (e.onFocus != null) {
                                            e.onFocus(t);
                                        }
                                    },
                                    onChange: O ? e => {
                                        let {
                                            text: t
                                        } = e;
                                        M(t);
                                        r(t);
                                    } : y,
                                    onEnter: e.onEnter,
                                    onClick: j
                                })]
                            })]
                        })
                    })
                });
            };
            var a = r(n(670983));
            var i = n(690495);
            var l = n(150610);
            var o = n(46351);
            var d = n(676345);
            var s = r(n(844453));
            var u = n(992934);
            var c = n(548360);
            var f = n(667294);
            var p = r(n(156720));
            var h = r(n(558532));
            var m = r(n(17533));
            var g = n(785893);
            const v = {
                container: {
                    position: "g0rxnol2",
                    zIndex: "mb8var44",
                    boxSizing: "cm280p3y",
                    display: "p357zi0d",
                    flexGrow: "tvf2evcx",
                    flexShrink: "oq44ahr5",
                    flexBasis: "lb5m6g5c",
                    alignItems: "gndfcl4n"
                },
                inputContainer: {
                    position: "g0rxnol2",
                    boxSizing: "cm280p3y",
                    flexGrow: "ggj6brxn",
                    overflowX: "gfz4du6o",
                    overflowY: "r7fjleex"
                },
                iconSearch: {
                    zIndex: "mb8var44",
                    width: "i94gqilv",
                    height: "bmot90v7"
                },
                iconCloseSearch: {
                    position: "lhggkp7q",
                    zIndex: "mb8var44",
                    top: "qq0sjtgm",
                    end: "fz4q5utg"
                },
                inputWrapper: {
                    boxSizing: "cm280p3y",
                    display: "p357zi0d",
                    flexDirection: "sap93d0t",
                    alignItems: "gndfcl4n",
                    height: "j8e73hjv",
                    borderTopStartRadius: "bbr44loe",
                    borderTopEndRadius: "ooj5yc5b",
                    borderBottomEndRadius: "m8i16etx",
                    borderBottomStartRadius: "cw0ivh8j"
                },
                inputPlaceholder: {
                    position: "lhggkp7q",
                    zIndex: "mb8var44",
                    width: "ln8gz9je",
                    height: "jdwybkuq",
                    overflowX: "gfz4du6o",
                    overflowY: "r7fjleex",
                    fontSize: "f8jlpxt4",
                    lineHeight: "jgi8eev7",
                    textOverflow: "lhj4utae",
                    whiteSpace: "le5p0ye3",
                    pointerEvents: "m62443ks",
                    transitionProperty: "cr6d9hz6",
                    transitionDuration: "fvowycgw",
                    transitionTimingFunction: "lu2z1zfr"
                },
                inputPlaceholderHidden: {
                    opacity: "axi1ht8l"
                },
                innerInputWrapper: {
                    position: "g0rxnol2",
                    flexGrow: "ggj6brxn"
                }
            };
            const x = {
                inputWrapper: {
                    backgroundColor: "s5iwbdjo"
                },
                inputPlaceholder: {
                    color: "t35qvd06"
                },
                iconSearch: {
                    color: "t35qvd06"
                },
                iconCloseSearch: {
                    color: "t35qvd06"
                }
            };
            const b = {
                inputWrapper: {
                    backgroundColor: "dim55e0e"
                },
                inputPlaceholder: {
                    color: "t35qvd06"
                },
                iconSearch: {
                    color: "t35qvd06"
                },
                iconCloseSearch: {
                    color: "t35qvd06"
                }
            };
            const y = () => {};
        },
        739783: (e, t, n) => {
            "use strict";

            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.useNavigatableList = function (e) {
                const [t, n] = (0, l.useState)(null);
                const r = (0, l.useMemo)(() => new i.default(e), [e]);
                (0, l.useEffect)(() => {
                    n(r.getVal());
                }, [e, r]);
                (0, o.useListener)(r, "change", e => {
                    let {
                        current: t
                    } = e;
                    n(t);
                });
                return {
                    activeItem: t,
                    listSelection: r,
                    NavigatableList: a.NavigatableList
                };
            };
            var a = n(611644);
            var i = r(n(237889));
            var l = n(667294);
            var o = n(808446);
        },
        611644: (e, t, n) => {
            "use strict";

            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NavigatableList = function (e) {
                const {
                    children: t,
                    items: n,
                    onSelect: r,
                    forceSelection: u = false,
                    rotate: c = false,
                    handlers: f
                } = e;
                const p = (0, i.default)(e, s);
                (0, o.useEffect)(() => {
                    if (u === true && n.index < 0) {
                        n.setFirst(false);
                    }
                }, [n, u]);
                const {
                    down: h,
                    up: m,
                    enter: g
                } = f || {};
                const v = (0, a.default)((0, a.default)({}, f), {}, {
                    down: e => {
                        if ((h == null ? undefined : h(e)) !== false) {
                            if (c && n.index === n.list.length - 1) {
                                n.setFirst(false);
                            } else {
                                n.setNext(false);
                            }
                        }
                    },
                    up: e => {
                        if ((m == null ? undefined : m(e)) !== false) {
                            if (n.index === 0) {
                                if (c) {
                                    return void n.setLast(false);
                                }
                                if (u) {
                                    return;
                                }
                            }
                            n.setPrev(false);
                            e.preventDefault();
                        }
                    },
                    enter: e => {
                        if ((g == null ? undefined : g(e)) === false) {
                            return;
                        }
                        const t = n.getVal();
                        if (t != null && r != null && (t == null ? undefined : t.disabled) !== true) {
                            r(t);
                        }
                    }
                });
                return (0, d.jsx)(l.HotKeys, (0, a.default)((0, a.default)({
                    handlers: v
                }, p), {}, {
                    children: t
                }));
            };
            var a = r(n(81109));
            var i = r(n(506479));
            var l = n(81644);
            var o = n(667294);
            var d = n(785893);
            const s = ["children", "items", "onSelect", "forceSelection", "rotate", "handlers"];
        },
        177322: (e, t, n) => {
            "use strict";

            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.AddItemIcon = function (e) {
                var t;
                const {
                    iconXstyle: n,
                    height: r,
                    width: u,
                    viewBox: c
                } = e;
                const f = (0, i.default)(e, s);
                let p;
                if (c) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: r = 0
                    } = c;
                    p = [e, t, n, r].join(" ");
                }
                let h = 20;
                let m = 20;
                if (!(r == null && u == null)) {
                    h = r;
                    m = u;
                }
                return (0, d.jsx)(l.BaseSvgSpan, (0, a.default)((0, a.default)({
                    name: "add-item"
                }, f), {}, {
                    children: (0, d.jsx)("svg", {
                        viewBox: (t = p) !== null && t !== undefined ? t : "0 0 20 20",
                        height: h,
                        width: m,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, o.default)(n),
                        version: "1.1",
                        x: "0px",
                        y: "0px",
                        enableBackground: "new 0 0 24 24",
                        xmlSpace: "preserve",
                        children: (0, d.jsx)("path", {
                            fill: "currentColor",
                            d: "M10 5C9.45 5 9 5.45 9 6V9H6C5.45 9 5 9.45 5 10C5 10.55 5.45 11 6 11H9V14C9     14.55 9.45 15 10 15C10.55 15 11 14.55 11 14V11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14     9H11V6C11 5.45 10.55 5 10 5ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52     20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18     10C18 14.41 14.41 18 10 18Z"
                        })
                    })
                }));
            };
            var a = r(n(81109));
            var i = r(n(506479));
            var l = n(220584);
            var o = r(n(156720));
            var d = n(785893);
            const s = ["iconXstyle", "height", "width", "viewBox"];
        },
        6689: (e, t, n) => {
            "use strict";

            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.LocalShippingIcon = function (e) {
                var t;
                const {
                    iconXstyle: n,
                    height: r,
                    width: u,
                    viewBox: c
                } = e;
                const f = (0, i.default)(e, s);
                let p;
                if (c) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: r = 0
                    } = c;
                    p = [e, t, n, r].join(" ");
                }
                let h = 8;
                let m = 12;
                if (!(r == null && u == null)) {
                    h = r;
                    m = u;
                }
                return (0, d.jsx)(l.BaseSvgSpan, (0, a.default)((0, a.default)({
                    name: "local-shipping"
                }, f), {}, {
                    children: (0, d.jsx)("svg", {
                        viewBox: (t = p) !== null && t !== undefined ? t : "0 0 12 8",
                        height: h,
                        width: m,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, o.default)(n),
                        fill: "none",
                        children: (0, d.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M8.5 2H9.75C9.905 2 10.055 2.075 10.15 2.2L11.3 3.735C11.43 3.91 11.5 4.12 11.5 4.335V6C11.5 6.275 11.275 6.5 11 6.5H10.5C10.5 7.33 9.83 8 9 8C8.17 8 7.5 7.33 7.5 6.5H4.5C4.5 7.33 3.83 8 3 8C2.17 8 1.5 7.33 1.5 6.5C0.95 6.5 0.5 6.05 0.5 5.5V1C0.5 0.45 0.95 0 1.5 0H7.5C8.05 0 8.5 0.45 8.5 1V2ZM2.5 6.5C2.5 6.775 2.725 7 3 7C3.275 7 3.5 6.775 3.5 6.5C3.5 6.225 3.275 6 3 6C2.725 6 2.5 6.225 2.5 6.5ZM9.75 2.75L10.73 4H8.5V2.75H9.75ZM8.5 6.5C8.5 6.775 8.725 7 9 7C9.275 7 9.5 6.775 9.5 6.5C9.5 6.225 9.275 6 9 6C8.725 6 8.5 6.225 8.5 6.5Z",
                            fill: "#667781"
                        })
                    })
                }));
            };
            var a = r(n(81109));
            var i = r(n(506479));
            var l = n(220584);
            var o = r(n(156720));
            var d = n(785893);
            const s = ["iconXstyle", "height", "width", "viewBox"];
        },
        25192: (e, t, n) => {
            "use strict";

            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.StatusClockIcon = function (e) {
                var t;
                const {
                    iconXstyle: n,
                    height: r,
                    width: u,
                    viewBox: c
                } = e;
                const f = (0, i.default)(e, s);
                let p;
                if (c) {
                    const {
                        x: e = 0,
                        y: t = 0,
                        width: n = 0,
                        height: r = 0
                    } = c;
                    p = [e, t, n, r].join(" ");
                }
                let h = 20;
                let m = 20;
                if (!(r == null && u == null)) {
                    h = r;
                    m = u;
                }
                return (0, d.jsx)(l.BaseSvgSpan, (0, a.default)((0, a.default)({
                    name: "status-clock"
                }, f), {}, {
                    children: (0, d.jsx)("svg", {
                        viewBox: (t = p) !== null && t !== undefined ? t : "0 0 20 20",
                        height: h,
                        width: m,
                        preserveAspectRatio: "xMidYMid meet",
                        className: (0, o.default)(n),
                        fill: "none",
                        children: (0, d.jsx)("path", {
                            d: "M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18ZM9.78 5H9.72C9.32 5 9 5.32 9 5.72V10.44C9 10.79 9.18 11.12 9.49 11.3L13.64 13.79C13.98 13.99 14.42 13.89 14.62 13.55C14.83 13.21 14.72 12.76 14.37 12.56L10.5 10.26V5.72C10.5 5.32 10.18 5 9.78 5Z",
                            fill: "currentColor"
                        })
                    })
                }));
            };
            var a = r(n(81109));
            var i = r(n(506479));
            var l = n(220584);
            var o = r(n(156720));
            var d = n(785893);
            const s = ["iconXstyle", "height", "width", "viewBox"];
        },
        522519: (e, t, n) => {
            "use strict";

            var r = n(595318);
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.filterPaginate = function (e, t, n) {
                if (n == null) {
                    return e.filter(t);
                }
                const r = [];
                const {
                    page: a = 0,
                    pageLength: i = e.length
                } = n;
                for (let n = 0; n < e.length && r.length !== (a + 1) * i; n++) {
                    const a = e[n];
                    if (t(a)) {
                        r.push(a);
                    }
                }
                return r.slice(a * i);
            };
            t.normalizeString = function (e) {
                return a.default.accentFold(e.trim().toLowerCase());
            };
            var a = r(n(932325));
        }
    }
]);
//# sourceMappingURL=https://web.whatsapp.com/lazy_loaded_low_priority_components~.101a611bb5dd54a731e4.js.map