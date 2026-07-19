import {_ as De} from "./C2RDFO4F.js";
import {C as St, s as Z, n as q, d as p, p as g, i as M, e as E, f as B, h as S, k as X, l as N, m as Q, G as Le, H as Re, B as J, c as We, u as Ue, g as Fe, a as He, r as st, x as te, ab as tr, y as at, ac as Gn, T as $e, ad as xr, S as ho, o as Ee, U as gt, q as ge, A as xe, I as me, ae as Ts, K as de, L as he, v as It, b as pe, j as oe, t as ae, w as ct, J as Te, a8 as Dt, af as mo, N as $r, z as vt, O as es, M as Ft, ag as Oa, F as Ma, R as ts, ah as ja, aa as Ye} from "./DglaqbsG.js";
import {a as w, t as y, S as x, i as $, d as G, g as le, c as ie, m as z, b as U, e as W, r as Ba, f as we} from "./lVT7bpjj.js";
import {p as Na} from "./COaOEyNH.js";
import {d as Pt, r as Xt, w as nr} from "./FwP9yK4X.js";
const Da = typeof window != "undefined" ? window : typeof globalThis != "undefined" ? globalThis : global;
function Oe(r) {
    return (r == null ? void 0 : r.length) !== void 0 ? r : Array.from(r)
}
function La(r, e) {
    r.d(1),
    e.delete(r.key)
}
function go(r, e) {
    y(r, 1, 1, () => {
        e.delete(r.key)
    }
    )
}
function Kb(r, e) {
    r.f(),
    La(r, e)
}
function po(r, e, t, n, s, l, i, o, a, f, u, c) {
    let d = r.length
      , h = l.length
      , _ = d;
    const b = {};
    for (; _--; )
        b[r[_].key] = _;
    const m = []
      , v = new Map
      , k = new Map
      , A = [];
    for (_ = h; _--; ) {
        const O = c(s, l, _)
          , D = t(O);
        let I = i.get(D);
        I ? A.push( () => I.p(O, e)) : (I = f(D, O),
        I.c()),
        v.set(D, m[_] = I),
        D in b && k.set(D, Math.abs(_ - b[D]))
    }
    const j = new Set
      , P = new Set;
    function T(O) {
        w(O, 1),
        O.m(o, u),
        i.set(O.key, O),
        u = O.first,
        h--
    }
    for (; d && h; ) {
        const O = m[h - 1]
          , D = r[d - 1]
          , I = O.key
          , ee = D.key;
        O === D ? (u = O.first,
        d--,
        h--) : v.has(ee) ? !i.has(I) || j.has(I) ? T(O) : P.has(ee) ? d-- : k.get(I) > k.get(ee) ? (P.add(I),
        T(O)) : (j.add(ee),
        d--) : (a(D, i),
        d--)
    }
    for (; d--; ) {
        const O = r[d];
        v.has(O.key) || a(O, i)
    }
    for (; h; )
        T(m[h - 1]);
    return St(A),
    m
}
function et(r, e) {
    const t = {}
      , n = {}
      , s = {
        $$scope: 1
    };
    let l = r.length;
    for (; l--; ) {
        const i = r[l]
          , o = e[l];
        if (o) {
            for (const a in i)
                a in o || (n[a] = 1);
            for (const a in o)
                s[a] || (t[a] = o[a],
                s[a] = 1);
            r[l] = o
        } else
            for (const a in i)
                s[a] = 1
    }
    for (const i in n)
        i in t || (t[i] = void 0);
    return t
}
function ot(r) {
    return typeof r == "object" && r !== null ? r : {}
}
const Ra = (r, e) => {
    const t = r[e];
    return t ? typeof t == "function" ? t() : Promise.resolve(t) : new Promise( (n, s) => {
        (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(s.bind(null, new Error("Unknown variable dynamic import: " + e)))
    }
    )
}
;
async function Yb(r) {
    var t;
    if (!((t = r == null ? void 0 : r.body) != null && t.length))
        return r;
    const e = n => Promise.all(n.map(async s => {
        if (s.type === "section")
            return {
                ...s,
                value: await e(s.value)
            };
        if (s.type === "svelte") {
            let l = s.value.component;
            try {
                const {default: i} = await Ra(Object.assign({
                    "../../project/analyze-generated-games/index.svelte": () => De( () => import("./DFCQRslK.js"), __vite__mapDeps([0, 1, 2]), import.meta.url),
                    "../../project/bar-chart/index.svelte": () => De( () => import("./BzBuajsG.js"), __vite__mapDeps([3, 1, 2, 4]), import.meta.url),
                    "../../project/bot-help/index.svelte": () => De( () => import("./DSQPIb8D.js"), __vite__mapDeps([5, 1, 2, 6, 7, 8, 9]), import.meta.url),
                    "../../project/copy-checker/index.svelte": () => De( () => import("./gFYpRMCR.js"), __vite__mapDeps([10, 1, 2, 11, 12, 13]), import.meta.url),
                    "../../project/generate-plausible-games/index.svelte": () => De( () => import("./BIOL75Rf.js"), __vite__mapDeps([14, 1, 2]), import.meta.url),
                    "../../project/image-cropper/index.svelte": () => De( () => import("./DMp-kFd0.js"), __vite__mapDeps([15, 1, 2, 16]), import.meta.url),
                    "../../project/intro/index.svelte": () => De( () => import("./C13LeqmI.js"), __vite__mapDeps([17, 1, 2, 18, 19, 20, 21, 22, 15, 16, 23, 24, 6, 7, 25, 26]), import.meta.url),
                    "../../project/outro/index.svelte": () => De( () => import("./BdBPAh5D.js"), __vite__mapDeps([27, 1, 2, 28, 25, 23, 29]), import.meta.url),
                    "../../project/partition/index.svelte": () => De( () => import("./yGesxUia.js"), __vite__mapDeps([30, 1, 2, 11, 31]), import.meta.url),
                    "../../project/screenshot-uploader-button/index.svelte": () => De( () => import("./DoLZ0AjQ.js"), __vite__mapDeps([22, 1, 2, 15, 16, 23, 24]), import.meta.url),
                    "../../project/screenshot-uploader/index.svelte": () => De( () => import("./CAmaHURj.js"), __vite__mapDeps([32, 1, 2]), import.meta.url),
                    "../../project/settings/index.svelte": () => De( () => import("./B51zRgia.js"), __vite__mapDeps([33, 1, 2, 28, 34]), import.meta.url),
                    "../../project/tree-map/index.svelte": () => De( () => import("./19O7tHqi.js"), __vite__mapDeps([35, 1, 2, 36, 11, 28, 37, 19]), import.meta.url),
                    "../../project/tree-visualizer/index.svelte": () => De( () => import("./D6LtZ198.js"), __vite__mapDeps([38, 1, 2, 39]), import.meta.url),
                    "../../project/wordle-board/index.svelte": () => De( () => import("./B30tEZS2.js"), __vite__mapDeps([20, 1, 2, 21]), import.meta.url),
                    "../../project/wordle-bot/index.svelte": () => De( () => import("./DXlS5DSW.js"), __vite__mapDeps([6, 1, 2, 7]), import.meta.url),
                    "../../project/wordle-companion-app/index.svelte": () => De( () => import("./amsPdqmh.js"), __vite__mapDeps([40, 1, 2, 33, 28, 34, 5, 6, 7, 8, 9, 17, 18, 19, 20, 21, 22, 15, 16, 23, 24, 25, 26, 27, 29, 41, 11, 42, 43, 30, 31, 44, 45, 46, 47, 48, 49, 50, 35, 36, 37, 12, 51]), import.meta.url),
                    "../../project/wordle-loading-animation/index.svelte": () => De( () => import("./CW4H3xgU.js"), __vite__mapDeps([18, 1, 2, 19]), import.meta.url),
                    "../../project/wordle-past-overview/index.svelte": () => De( () => import("./Dhwahgyu.js"), __vite__mapDeps([49, 1, 2, 11, 6, 7, 50]), import.meta.url),
                    "../../project/wordle-past-wordles/index.svelte": () => De( () => import("./KkXc_DUJ.js"), __vite__mapDeps([47, 1, 2, 20, 21, 11, 48, 19, 9]), import.meta.url),
                    "../../project/wordle-rating-details/index.svelte": () => De( () => import("./CoZD6MNV.js"), __vite__mapDeps([43, 1, 2, 28, 11, 23, 30, 31, 20, 21, 44]), import.meta.url),
                    "../../project/wordle-rating-overview/index.svelte": () => De( () => import("./Blp0C3uG.js"), __vite__mapDeps([41, 1, 2, 11, 23, 28, 20, 21, 42, 9]), import.meta.url),
                    "../../project/wordle-solution-comparison/index.svelte": () => De( () => import("./iffbcJrS.js"), __vite__mapDeps([45, 1, 2, 20, 21, 46]), import.meta.url)
                }), `../../project/${l}/index.svelte`);
                return {
                    ...s,
                    component: i
                }
            } catch (i) {
                return {
                    type: "error",
                    value: {
                        message: `The svelte component failed to import <code>src/lib/project/${l}/index.svelte</code>. Please check that this file exists and is free of errors.`,
                        stack: i.stack
                    }
                }
            }
        }
        return s
    }
    ));
    return {
        ...r,
        body: await e(r.body)
    }
}
function Es(r) {
    let e, t;
    return {
        c() {
            e = N("p"),
            t = new Re(!1),
            this.h()
        },
        l(n) {
            e = B(n, "P", {
                class: !0
            });
            var s = S(e);
            t = Le(s, !1),
            s.forEach(p),
            this.h()
        },
        h() {
            t.a = null,
            g(e, "class", "g-caption svelte-cu2gla")
        },
        m(n, s) {
            M(n, e, s),
            t.m(r[0], e)
        },
        p(n, s) {
            s & 1 && t.p(n[0])
        },
        d(n) {
            n && p(e)
        }
    }
}
function Is(r) {
    let e, t;
    return {
        c() {
            e = N("p"),
            t = new Re(!1),
            this.h()
        },
        l(n) {
            e = B(n, "P", {
                class: !0
            });
            var s = S(e);
            t = Le(s, !1),
            s.forEach(p),
            this.h()
        },
        h() {
            t.a = null,
            g(e, "class", "g-source svelte-cu2gla")
        },
        m(n, s) {
            M(n, e, s),
            t.m(r[1], e)
        },
        p(n, s) {
            s & 2 && t.p(n[1])
        },
        d(n) {
            n && p(e)
        }
    }
}
function As(r) {
    let e, t;
    return {
        c() {
            e = N("p"),
            t = new Re(!1),
            this.h()
        },
        l(n) {
            e = B(n, "P", {
                class: !0
            });
            var s = S(e);
            t = Le(s, !1),
            s.forEach(p),
            this.h()
        },
        h() {
            t.a = null,
            g(e, "class", "g-note svelte-cu2gla")
        },
        m(n, s) {
            M(n, e, s),
            t.m(r[3], e)
        },
        p(n, s) {
            s & 8 && t.p(n[3])
        },
        d(n) {
            n && p(e)
        }
    }
}
function Cs(r) {
    let e, t;
    return {
        c() {
            e = N("p"),
            t = new Re(!1),
            this.h()
        },
        l(n) {
            e = B(n, "P", {
                class: !0
            });
            var s = S(e);
            t = Le(s, !1),
            s.forEach(p),
            this.h()
        },
        h() {
            t.a = null,
            g(e, "class", "g-credit svelte-cu2gla")
        },
        m(n, s) {
            M(n, e, s),
            t.m(r[2], e)
        },
        p(n, s) {
            s & 4 && t.p(n[2])
        },
        d(n) {
            n && p(e)
        }
    }
}
function Va(r) {
    let e, t, n, s, l, i = r[0] && Es(r), o = r[1] && Is(r), a = r[3] && As(r), f = r[2] && Cs(r);
    return {
        c() {
            e = N("div"),
            i && i.c(),
            t = Q(),
            o && o.c(),
            n = Q(),
            a && a.c(),
            s = Q(),
            f && f.c(),
            this.h()
        },
        l(u) {
            e = B(u, "DIV", {
                class: !0
            });
            var c = S(e);
            i && i.l(c),
            t = X(c),
            o && o.l(c),
            n = X(c),
            a && a.l(c),
            s = X(c),
            f && f.l(c),
            c.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", l = "g-wrapper_caption g-text-align-" + r[4] + " svelte-cu2gla")
        },
        m(u, c) {
            M(u, e, c),
            i && i.m(e, null),
            E(e, t),
            o && o.m(e, null),
            E(e, n),
            a && a.m(e, null),
            E(e, s),
            f && f.m(e, null)
        },
        p(u, [c]) {
            u[0] ? i ? i.p(u, c) : (i = Es(u),
            i.c(),
            i.m(e, t)) : i && (i.d(1),
            i = null),
            u[1] ? o ? o.p(u, c) : (o = Is(u),
            o.c(),
            o.m(e, n)) : o && (o.d(1),
            o = null),
            u[3] ? a ? a.p(u, c) : (a = As(u),
            a.c(),
            a.m(e, s)) : a && (a.d(1),
            a = null),
            u[2] ? f ? f.p(u, c) : (f = Cs(u),
            f.c(),
            f.m(e, null)) : f && (f.d(1),
            f = null),
            c & 16 && l !== (l = "g-wrapper_caption g-text-align-" + u[4] + " svelte-cu2gla") && g(e, "class", l)
        },
        i: q,
        o: q,
        d(u) {
            u && p(e),
            i && i.d(),
            o && o.d(),
            a && a.d(),
            f && f.d()
        }
    }
}
function Ga(r, e, t) {
    let {caption: n=""} = e
      , {source: s=""} = e
      , {credit: l=""} = e
      , {note: i=""} = e
      , {textAlign: o="left"} = e;
    return r.$$set = a => {
        "caption"in a && t(0, n = a.caption),
        "source"in a && t(1, s = a.source),
        "credit"in a && t(2, l = a.credit),
        "note"in a && t(3, i = a.note),
        "textAlign"in a && t(4, o = a.textAlign)
    }
    ,
    [n, s, l, i, o]
}
class _o extends x {
    constructor(e) {
        super(),
        $(this, e, Ga, Va, Z, {
            caption: 0,
            source: 1,
            credit: 2,
            note: 3,
            textAlign: 4
        })
    }
}
function Ss(r) {
    let e, t;
    return {
        c() {
            e = N("h3"),
            t = new Re(!1),
            this.h()
        },
        l(n) {
            e = B(n, "H3", {
                class: !0
            });
            var s = S(e);
            t = Le(s, !1),
            s.forEach(p),
            this.h()
        },
        h() {
            t.a = null,
            g(e, "class", "g-heading svelte-1so50ue"),
            J(e, "g-has-leadin", r[1])
        },
        m(n, s) {
            M(n, e, s),
            t.m(r[0], e)
        },
        p(n, s) {
            s & 1 && t.p(n[0]),
            s & 2 && J(e, "g-has-leadin", n[1])
        },
        d(n) {
            n && p(e)
        }
    }
}
function Ps(r) {
    let e, t;
    return {
        c() {
            e = N("p"),
            t = new Re(!1),
            this.h()
        },
        l(n) {
            e = B(n, "P", {
                class: !0
            });
            var s = S(e);
            t = Le(s, !1),
            s.forEach(p),
            this.h()
        },
        h() {
            t.a = null,
            g(e, "class", "g-leadin svelte-1so50ue")
        },
        m(n, s) {
            M(n, e, s),
            t.m(r[1], e)
        },
        p(n, s) {
            s & 2 && t.p(n[1])
        },
        d(n) {
            n && p(e)
        }
    }
}
function za(r) {
    let e, t, n, s = r[0] && Ss(r), l = r[1] && Ps(r);
    return {
        c() {
            e = N("div"),
            s && s.c(),
            t = Q(),
            l && l.c(),
            this.h()
        },
        l(i) {
            e = B(i, "DIV", {
                class: !0
            });
            var o = S(e);
            s && s.l(o),
            t = X(o),
            l && l.l(o),
            o.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", n = "g-wrapper_hed g-text-align-" + r[2] + " svelte-1so50ue")
        },
        m(i, o) {
            M(i, e, o),
            s && s.m(e, null),
            E(e, t),
            l && l.m(e, null)
        },
        p(i, [o]) {
            i[0] ? s ? s.p(i, o) : (s = Ss(i),
            s.c(),
            s.m(e, t)) : s && (s.d(1),
            s = null),
            i[1] ? l ? l.p(i, o) : (l = Ps(i),
            l.c(),
            l.m(e, null)) : l && (l.d(1),
            l = null),
            o & 4 && n !== (n = "g-wrapper_hed g-text-align-" + i[2] + " svelte-1so50ue") && g(e, "class", n)
        },
        i: q,
        o: q,
        d(i) {
            i && p(e),
            s && s.d(),
            l && l.d()
        }
    }
}
function Wa(r, e, t) {
    let {hed: n=""} = e
      , {leadin: s=""} = e
      , {textAlign: l="left"} = e;
    return r.$$set = i => {
        "hed"in i && t(0, n = i.hed),
        "leadin"in i && t(1, s = i.leadin),
        "textAlign"in i && t(2, l = i.textAlign)
    }
    ,
    [n, s, l]
}
class bo extends x {
    constructor(e) {
        super(),
        $(this, e, Wa, za, Z, {
            hed: 0,
            leadin: 1,
            textAlign: 2
        })
    }
}
const Ua = /^\d+(?:px|vw|%)$/
  , Fa = /^\d+(?:px|vh|%)$/
  , vo = (r, e="width") => {
    const t = e === "height" ? Fa : Ua;
    let n = "";
    return typeof r == "number" ? n = `${r}px` : typeof r == "string" && (r = r.trim(),
    t.test(r) ? n = `${r}` : /^\d+$/.test(r) && (n = `${r}px`)),
    n
}
  , bt = r => vo(r, "width")
  , hn = r => vo(r, "height")
  , wo = (r, e="width") => {
    const t = e === "height" ? hn : bt;
    let n = "";
    return typeof r == "number" && (r = `${r}`),
    typeof r == "string" && (n = r.trim().split(" ").filter( (s, l) => l < 2).map(t).join(" ")),
    n
}
  , Ha = r => wo(r, "width")
  , qa = r => wo(r, "height")
  , Os = r => Object.entries(r).map( ([e,t]) => (e = e.replace(/[A-Z]/g, n => `-${n.toLowerCase()}`),
`${e}:${t}`)).join(";")
  , yo = function(r=!0) {
    return (e, t, n, s) => {
        const l = n / s
          , i = e / t;
        let o = e
          , a = t;
        return (r ? l > i : l < i) ? a = o / l : o = a * l,
        {
            width: o,
            height: a,
            x: (e - o) / 2,
            y: (t - a) / 2
        }
    }
}
  , Ka = yo(!1)
  , Ya = yo(!0);
function Za(r) {
    let e, t, n, s;
    const l = r[6].default
      , i = We(l, r, r[5], null);
    return {
        c() {
            e = N("div"),
            t = N("div"),
            i && i.c(),
            this.h()
        },
        l(o) {
            e = B(o, "DIV", {
                class: !0,
                style: !0
            });
            var a = S(e);
            t = B(a, "DIV", {
                class: !0
            });
            var f = S(t);
            i && i.l(f),
            f.forEach(p),
            a.forEach(p),
            this.h()
        },
        h() {
            g(t, "class", n = "g-block-width g-max-width-" + r[0] + " svelte-xo8dvj"),
            st(t, "max-width", bt(r[0])),
            g(e, "class", "g-block g-block-margin svelte-xo8dvj"),
            g(e, "style", r[2]),
            J(e, "g-margin-inline", r[1])
        },
        m(o, a) {
            M(o, e, a),
            E(e, t),
            i && i.m(t, null),
            s = !0
        },
        p(o, [a]) {
            i && i.p && (!s || a & 32) && Ue(i, l, o, o[5], s ? He(l, o[5], a, null) : Fe(o[5]), null),
            (!s || a & 1 && n !== (n = "g-block-width g-max-width-" + o[0] + " svelte-xo8dvj")) && g(t, "class", n),
            a & 1 && st(t, "max-width", bt(o[0])),
            (!s || a & 4) && g(e, "style", o[2]),
            (!s || a & 2) && J(e, "g-margin-inline", o[1])
        },
        i(o) {
            s || (w(i, o),
            s = !0)
        },
        o(o) {
            y(i, o),
            s = !1
        },
        d(o) {
            o && p(e),
            i && i.d(o)
        }
    }
}
function Xa(r, e, t) {
    let n, s, l, {$$slots: i={}, $$scope: o} = e, {maxWidth: a="default"} = e, {marginInline: f=!0} = e;
    return r.$$set = u => {
        "maxWidth"in u && t(0, a = u.maxWidth),
        "marginInline"in u && t(1, f = u.marginInline),
        "$$scope"in u && t(5, o = u.$$scope)
    }
    ,
    r.$$.update = () => {
        r.$$.dirty & 2 && t(4, n = Ha(f)),
        r.$$.dirty & 16 && t(3, s = n ? n.split(" ") : []),
        r.$$.dirty & 24 && t(2, l = [{
            style: "--g-block_margin-inline",
            value: n
        }, {
            style: "--g-block_margin-left",
            value: s.length ? s[0] : ""
        }, {
            style: "--g-block_margin-right",
            value: s.length ? s.length > 1 ? s[1] : s[0] : ""
        }].filter(u => u.value).map(u => `${u.style}:${u.value}`).join(";"))
    }
    ,
    [a, f, l, s, n, o, i]
}
class Tn extends x {
    constructor(e) {
        super(),
        $(this, e, Xa, Za, Z, {
            maxWidth: 0,
            marginInline: 1
        })
    }
}
function Qa(r) {
    let e, t, n;
    return {
        c() {
            e = N("p"),
            t = new Re(!1),
            this.h()
        },
        l(s) {
            e = B(s, "P", {
                class: !0
            });
            var l = S(e);
            t = Le(l, !1),
            l.forEach(p),
            this.h()
        },
        h() {
            t.a = null,
            g(e, "class", n = "g-label g-position-" + r[1] + " g-theme-" + r[2] + " svelte-z1ti41")
        },
        m(s, l) {
            M(s, e, l),
            t.m(r[0], e)
        },
        p(s, [l]) {
            l & 1 && t.p(s[0]),
            l & 6 && n !== (n = "g-label g-position-" + s[1] + " g-theme-" + s[2] + " svelte-z1ti41") && g(e, "class", n)
        },
        i: q,
        o: q,
        d(s) {
            s && p(e)
        }
    }
}
function Ja(r, e, t) {
    let {label: n=""} = e
      , {position: s=""} = e
      , {theme: l=""} = e;
    return r.$$set = i => {
        "label"in i && t(0, n = i.label),
        "position"in i && t(1, s = i.position),
        "theme"in i && t(2, l = i.theme)
    }
    ,
    [n, s, l]
}
class xa extends x {
    constructor(e) {
        super(),
        $(this, e, Ja, Qa, Z, {
            label: 0,
            position: 1,
            theme: 2
        })
    }
}
const zn = {
    graphic: "graphic",
    scoopEmbeddedInteractive: "interactive",
    scoopVideo: "video",
    videotape: "video",
    localImage: "image",
    remoteImage: "image",
    localResponsiveImage: "image",
    scoopImage: "image",
    scoopSlideshow: "gallery",
    scrollingSlides: "scrolling gallery",
    slideshow: "gallery",
    grid: "media grid",
    gridItems: "media grid"
}
  , $a = r => ({})
  , Ms = r => ({});
function js(r) {
    let e, t;
    return e = new Tn({
        props: {
            marginInline: r[16],
            maxWidth: r[12],
            $$slots: {
                default: [e2]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, s) {
            const l = {};
            s[0] & 65536 && (l.marginInline = n[16]),
            s[0] & 4096 && (l.maxWidth = n[12]),
            s[0] & 67 | s[1] & 1 && (l.$$scope = {
                dirty: s,
                ctx: n
            }),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function e2(r) {
    let e, t;
    return e = new bo({
        props: {
            leadin: r[1],
            hed: r[0],
            textAlign: r[6]
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, s) {
            const l = {};
            s[0] & 2 && (l.leadin = n[1]),
            s[0] & 1 && (l.hed = n[0]),
            s[0] & 64 && (l.textAlign = n[6]),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function Bs(r) {
    let e, t;
    return e = new Tn({
        props: {
            maxWidth: r[14],
            $$slots: {
                default: [t2]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, s) {
            const l = {};
            s[0] & 16384 && (l.maxWidth = n[14]),
            s[1] & 1 && (l.$$scope = {
                dirty: s,
                ctx: n
            }),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function t2(r) {
    let e;
    const t = r[30].key
      , n = We(t, r, r[31], Ms);
    return {
        c() {
            n && n.c()
        },
        l(s) {
            n && n.l(s)
        },
        m(s, l) {
            n && n.m(s, l),
            e = !0
        },
        p(s, l) {
            n && n.p && (!e || l[1] & 1) && Ue(n, t, s, s[31], e ? He(t, s[31], l, $a) : Fe(s[31]), Ms)
        },
        i(s) {
            e || (w(n, s),
            e = !0)
        },
        o(s) {
            y(n, s),
            e = !1
        },
        d(s) {
            n && n.d(s)
        }
    }
}
function Ns(r) {
    let e, t;
    return e = new xa({
        props: {
            label: r[8]
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, s) {
            const l = {};
            s[0] & 256 && (l.label = n[8]),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function n2(r) {
    let e, t, n = r[8] && Ns(r);
    const s = r[30].default
      , l = We(s, r, r[31], null);
    return {
        c() {
            n && n.c(),
            e = Q(),
            l && l.c()
        },
        l(i) {
            n && n.l(i),
            e = X(i),
            l && l.l(i)
        },
        m(i, o) {
            n && n.m(i, o),
            M(i, e, o),
            l && l.m(i, o),
            t = !0
        },
        p(i, o) {
            i[8] ? n ? (n.p(i, o),
            o[0] & 256 && w(n, 1)) : (n = Ns(i),
            n.c(),
            w(n, 1),
            n.m(e.parentNode, e)) : n && (le(),
            y(n, 1, 1, () => {
                n = null
            }
            ),
            ie()),
            l && l.p && (!t || o[1] & 1) && Ue(l, s, i, i[31], t ? He(s, i[31], o, null) : Fe(i[31]), null)
        },
        i(i) {
            t || (w(n),
            w(l, i),
            t = !0)
        },
        o(i) {
            y(n),
            y(l, i),
            t = !1
        },
        d(i) {
            i && p(e),
            n && n.d(i),
            l && l.d(i)
        }
    }
}
function Ds(r) {
    let e, t;
    return e = new Tn({
        props: {
            marginInline: r[17],
            maxWidth: r[13],
            $$slots: {
                default: [r2]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, s) {
            const l = {};
            s[0] & 131072 && (l.marginInline = n[17]),
            s[0] & 8192 && (l.maxWidth = n[13]),
            s[0] & 524476 | s[1] & 1 && (l.$$scope = {
                dirty: s,
                ctx: n
            }),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function r2(r) {
    let e, t, n;
    var s = r[19];
    function l(i, o) {
        return {
            props: {
                caption: i[2],
                credit: i[4],
                note: i[5],
                source: i[3],
                textAlign: i[7]
            }
        }
    }
    return s && (e = $e(s, l(r))),
    {
        c() {
            e && W(e.$$.fragment),
            t = te()
        },
        l(i) {
            e && U(e.$$.fragment, i),
            t = te()
        },
        m(i, o) {
            e && z(e, i, o),
            M(i, t, o),
            n = !0
        },
        p(i, o) {
            if (o[0] & 524288 && s !== (s = i[19])) {
                if (e) {
                    le();
                    const a = e;
                    y(a.$$.fragment, 1, 0, () => {
                        G(a, 1)
                    }
                    ),
                    ie()
                }
                s ? (e = $e(s, l(i)),
                W(e.$$.fragment),
                w(e.$$.fragment, 1),
                z(e, t.parentNode, t)) : e = null
            } else if (s) {
                const a = {};
                o[0] & 4 && (a.caption = i[2]),
                o[0] & 16 && (a.credit = i[4]),
                o[0] & 32 && (a.note = i[5]),
                o[0] & 8 && (a.source = i[3]),
                o[0] & 128 && (a.textAlign = i[7]),
                e.$set(a)
            }
        },
        i(i) {
            n || (e && w(e.$$.fragment, i),
            n = !0)
        },
        o(i) {
            e && y(e.$$.fragment, i),
            n = !1
        },
        d(i) {
            i && p(t),
            e && G(e, i)
        }
    }
}
function Ar(r) {
    let e, t, n, s, l, i, o, a, f, u, c = (r[1] || r[0]) && js(r), d = r[23].key && Bs(r);
    s = new Tn({
        props: {
            maxWidth: r[11],
            marginInline: r[15],
            $$slots: {
                default: [n2]
            },
            $$scope: {
                ctx: r
            }
        }
    });
    let h = (r[2] || r[3] || r[4] || r[5]) && Ds(r)
      , _ = [{
        id: i = r[9] || void 0
    }, {
        class: o = "g-wrapper " + r[10] + " svelte-1tai0zr"
    }, {
        style: r[20]
    }, {
        role: a = r[22] === "figure" ? "group" : void 0
    }, {
        "aria-label": f = r[21] || void 0
    }]
      , b = {};
    for (let m = 0; m < _.length; m += 1)
        b = at(b, _[m]);
    return {
        c() {
            e = N(r[22]),
            c && c.c(),
            t = Q(),
            d && d.c(),
            n = Q(),
            W(s.$$.fragment),
            l = Q(),
            h && h.c(),
            this.h()
        },
        l(m) {
            e = B(m, (r[22] || "null").toUpperCase(), {
                id: !0,
                class: !0,
                style: !0,
                role: !0,
                "aria-label": !0
            });
            var v = S(e);
            c && c.l(v),
            t = X(v),
            d && d.l(v),
            n = X(v),
            U(s.$$.fragment, v),
            l = X(v),
            h && h.l(v),
            v.forEach(p),
            this.h()
        },
        h() {
            Gn(r[22])(e, b),
            J(e, "g-needs-margin-block", r[18])
        },
        m(m, v) {
            M(m, e, v),
            c && c.m(e, null),
            E(e, t),
            d && d.m(e, null),
            E(e, n),
            z(s, e, null),
            E(e, l),
            h && h.m(e, null),
            u = !0
        },
        p(m, v) {
            m[1] || m[0] ? c ? (c.p(m, v),
            v[0] & 3 && w(c, 1)) : (c = js(m),
            c.c(),
            w(c, 1),
            c.m(e, t)) : c && (le(),
            y(c, 1, 1, () => {
                c = null
            }
            ),
            ie()),
            m[23].key ? d ? (d.p(m, v),
            v[0] & 8388608 && w(d, 1)) : (d = Bs(m),
            d.c(),
            w(d, 1),
            d.m(e, n)) : d && (le(),
            y(d, 1, 1, () => {
                d = null
            }
            ),
            ie());
            const k = {};
            v[0] & 2048 && (k.maxWidth = m[11]),
            v[0] & 32768 && (k.marginInline = m[15]),
            v[0] & 256 | v[1] & 1 && (k.$$scope = {
                dirty: v,
                ctx: m
            }),
            s.$set(k),
            m[2] || m[3] || m[4] || m[5] ? h ? (h.p(m, v),
            v[0] & 60 && w(h, 1)) : (h = Ds(m),
            h.c(),
            w(h, 1),
            h.m(e, null)) : h && (le(),
            y(h, 1, 1, () => {
                h = null
            }
            ),
            ie()),
            Gn(m[22])(e, b = et(_, [(!u || v[0] & 512 && i !== (i = m[9] || void 0)) && {
                id: i
            }, (!u || v[0] & 1024 && o !== (o = "g-wrapper " + m[10] + " svelte-1tai0zr")) && {
                class: o
            }, (!u || v[0] & 1048576) && {
                style: m[20]
            }, (!u || v[0] & 4194304 && a !== (a = m[22] === "figure" ? "group" : void 0)) && {
                role: a
            }, (!u || v[0] & 2097152 && f !== (f = m[21] || void 0)) && {
                "aria-label": f
            }])),
            J(e, "g-needs-margin-block", m[18])
        },
        i(m) {
            u || (w(c),
            w(d),
            w(s.$$.fragment, m),
            w(h),
            u = !0)
        },
        o(m) {
            y(c),
            y(d),
            y(s.$$.fragment, m),
            y(h),
            u = !1
        },
        d(m) {
            m && p(e),
            c && c.d(),
            d && d.d(),
            G(s),
            h && h.d()
        }
    }
}
function s2(r) {
    let e = r[22], t, n, s = r[22] && Ar(r);
    return {
        c() {
            s && s.c(),
            t = te()
        },
        l(l) {
            s && s.l(l),
            t = te()
        },
        m(l, i) {
            s && s.m(l, i),
            M(l, t, i),
            n = !0
        },
        p(l, i) {
            l[22] ? e ? Z(e, l[22]) ? (s.d(1),
            s = Ar(l),
            e = l[22],
            s.c(),
            s.m(t.parentNode, t)) : s.p(l, i) : (s = Ar(l),
            e = l[22],
            s.c(),
            s.m(t.parentNode, t)) : e && (s.d(1),
            s = null,
            e = l[22])
        },
        i(l) {
            n || (w(s, l),
            n = !0)
        },
        o(l) {
            y(s, l),
            n = !1
        },
        d(l) {
            l && p(t),
            s && s.d(l)
        }
    }
}
function l2(r, e, t) {
    let n, s, l, i, o, {$$slots: a={}, $$scope: f} = e;
    const u = tr(a);
    let {hed: c=""} = e
      , {leadin: d=""} = e
      , {caption: h=""} = e
      , {source: _=""} = e
      , {credit: b=""} = e
      , {note: m=""} = e
      , {textAlign: v="left"} = e
      , {headerTextAlign: k=v} = e
      , {footerTextAlign: A=v} = e
      , {label: j=""} = e
      , {id: P=""} = e
      , {className: T=""} = e
      , {maxWidth: O="body"} = e
      , {headerMaxWidth: D="body"} = e
      , {footerMaxWidth: I="body"} = e
      , {keyWidth: ee="body"} = e
      , {marginInline: K=!1} = e
      , {headerMarginInline: ne=!0} = e
      , {footerMarginInline: R=!0} = e
      , {marginBlock: se=!1} = e
      , {captionComponent: F=_o} = e
      , {element: ue="figure"} = e
      , {ariaLabelType: fe=""} = e
      , {assetType: Y=""} = e;
    return r.$$set = L => {
        "hed"in L && t(0, c = L.hed),
        "leadin"in L && t(1, d = L.leadin),
        "caption"in L && t(2, h = L.caption),
        "source"in L && t(3, _ = L.source),
        "credit"in L && t(4, b = L.credit),
        "note"in L && t(5, m = L.note),
        "textAlign"in L && t(24, v = L.textAlign),
        "headerTextAlign"in L && t(6, k = L.headerTextAlign),
        "footerTextAlign"in L && t(7, A = L.footerTextAlign),
        "label"in L && t(8, j = L.label),
        "id"in L && t(9, P = L.id),
        "className"in L && t(10, T = L.className),
        "maxWidth"in L && t(11, O = L.maxWidth),
        "headerMaxWidth"in L && t(12, D = L.headerMaxWidth),
        "footerMaxWidth"in L && t(13, I = L.footerMaxWidth),
        "keyWidth"in L && t(14, ee = L.keyWidth),
        "marginInline"in L && t(15, K = L.marginInline),
        "headerMarginInline"in L && t(16, ne = L.headerMarginInline),
        "footerMarginInline"in L && t(17, R = L.footerMarginInline),
        "marginBlock"in L && t(18, se = L.marginBlock),
        "captionComponent"in L && t(19, F = L.captionComponent),
        "element"in L && t(25, ue = L.element),
        "ariaLabelType"in L && t(26, fe = L.ariaLabelType),
        "assetType"in L && t(27, Y = L.assetType),
        "$$scope"in L && t(31, f = L.$$scope)
    }
    ,
    r.$$.update = () => {
        r.$$.dirty[0] & 33554432 && t(22, n = ["figure", "div", "section", "aside"].includes(ue) ? ue : "figure"),
        r.$$.dirty[0] & 201326655 && t(21, s = c || d || h || _ || b || m ? fe ? zn[fe] : zn[Y] : ""),
        r.$$.dirty[0] & 262144 && t(29, l = qa(se)),
        r.$$.dirty[0] & 536870912 && t(28, i = l ? l.split(" ") : []),
        r.$$.dirty[0] & 805306368 && t(20, o = [{
            style: "--g-wrapper_margin-block",
            value: l
        }, {
            style: "--g-wrapper_margin-top",
            value: i.length ? i[0] : ""
        }, {
            style: "--g-wrapper_margin-bottom",
            value: i.length ? i.length > 1 ? i[1] : i[0] : ""
        }].filter(L => L.value).map(L => `${L.style}:${L.value}`).join(";"))
    }
    ,
    [c, d, h, _, b, m, k, A, j, P, T, O, D, I, ee, K, ne, R, se, F, o, s, n, u, v, ue, fe, Y, i, l, a, f]
}
let Qt = class extends x {
    constructor(e) {
        super(),
        $(this, e, l2, s2, Z, {
            hed: 0,
            leadin: 1,
            caption: 2,
            source: 3,
            credit: 4,
            note: 5,
            textAlign: 24,
            headerTextAlign: 6,
            footerTextAlign: 7,
            label: 8,
            id: 9,
            className: 10,
            maxWidth: 11,
            headerMaxWidth: 12,
            footerMaxWidth: 13,
            keyWidth: 14,
            marginInline: 15,
            headerMarginInline: 16,
            footerMarginInline: 17,
            marginBlock: 18,
            captionComponent: 19,
            element: 25,
            ariaLabelType: 26,
            assetType: 27
        }, null, [-1, -1])
    }
}
;
const Wn = (r => (e="") => `${e}${++r}`)(0)
  , i2 = (r, e) => r.filter(t => !e.includes(t))
  , Ht = r => (e, t) => e[r] > t[r] ? 1 : t[r] > e[r] ? -1 : 0
  , o2 = (r, e) => r.reduce(function(t, n) {
    return (t[n[e]] = t[n[e]] || []).push(n),
    t
}, {})
  , ko = (r, e, t=!1) => {
    var n, s = null;
    return function() {
        var l = this
          , i = arguments
          , o = function() {
            s = null,
            t || (n = r.apply(l, i))
        }
          , a = t && !s;
        return clearTimeout(s),
        s = setTimeout(o, e),
        a && (n = r.apply(l, i)),
        n
    }
}
  , a2 = r => Number.isSafeInteger(parseInt(r))
  , Je = (r, e=2) => {
    const t = 10 ** e;
    return Math.round((r + Number.EPSILON) * t) / t
}
  , f2 = (r, e=0, t=1, n=!0) => [r, e, t].some(s => typeof s != "number") ? !1 : n ? r >= e && r <= t : r > e && r < t
  , At = typeof window != "undefined" ? window.navigator.userAgent : ""
  , Ze = new Map
  , u2 = () => !!(window.location.href.indexOf("app.html") > 0 || window.location.search.indexOf("nytapp") > -1 || At.match(/nyt[-_]?(?:ios|android)/i) || At.match(/android/i) && window.__HYBRID__)
  , c2 = () => !!(/nyt_xwords_ios\//.test(At) || /Crosswords\//.test(At));
function d2() {
    return Ze.has("isIos") || Ze.set("isIos", /iP(hone|od|ad)/.test(At) || /_ios\//.test(At)),
    Ze.get("isIos")
}
function h2() {
    return Ze.has("isIpadOs") || Ze.set("isIpadOs", /(Mac_PowerPC)|(Macintosh)/i.test(At) && !!navigator.maxTouchPoints && navigator.maxTouchPoints === 5),
    Ze.get("isIpadOs")
}
function Xb() {
    return Ze.has("isAndroid") || Ze.set("isAndroid", /Android/.test(At)),
    Ze.get("isAndroid")
}
function m2() {
    return Ze.has("isApp") || Ze.set("isApp", u2()),
    Ze.get("isApp")
}
function Qb() {
    return Ze.has("isGamesApp") || Ze.set("isGamesApp", c2()),
    Ze.get("isGamesApp")
}
const En = {
    mobile: 0,
    desktop: 740
}
  , To = Object.keys(En)
  , g2 = new RegExp(`^(\\w+)-(\\d+px|${To.join("|")})$`)
  , p2 = r => {
    let e = 0;
    return typeof r == "number" ? e = Math.round(r) : typeof r == "string" && (To.includes(r.toLowerCase()) ? e = En[r.toLowerCase()] : (r = r.replace("px", ""),
    a2(r) && (e = parseInt(r)))),
    e
}
  , Rr = (r, e=void 0) => {
    const t = {}
      , n = (s, l, i=void 0) => {
        const o = typeof e == "object" ? e : t;
        o[s] === void 0 && (o[s] = {}),
        i ? (o[s][i] === void 0 && (o[s][i] = {}),
        o[s][i] = l) : o[s] = l
    }
    ;
    return Object.entries({
        ...r
    }).forEach( ([s,l]) => {
        const [,i,o] = g2.exec(s) || []
          , a = i || s
          , f = o || "mobile";
        if (typeof l == "object")
            if (Array.isArray(l)) {
                const u = l.map(c => typeof c == "object" ? Rr(c) : c);
                n(a, u, f)
            } else
                n(a, Rr(l), f);
        else
            n(a, l, f)
    }
    ),
    t
}
  , _2 = (r, e=0) => {
    const t = (n, s=void 0) => {
        const l = {}
          , i = (o, a) => {
            const f = typeof s == "object" ? s : l;
            f[o] = a
        }
        ;
        return Object.entries(n).forEach( ([o,a]) => {
            const f = Object.values(a).every(d => typeof d == "object");
            if (f && Object.values(a).every(d => Array.isArray(d))) {
                const d = {};
                Object.entries(a).forEach( ([h,_]) => {
                    const b = _.map(m => typeof m == "object" ? t(m) : m);
                    d[h] = b
                }
                ),
                a = d
            } else if (f) {
                const d = {};
                Object.entries(a).forEach( ([h,_]) => {
                    d[h] = t(_)
                }
                ),
                a = d
            }
            const c = Object.entries(a).reduce( (d, [h,_]) => (d.push({
                value: _,
                width: p2(h)
            }),
            d), []).concat().sort(Ht("width"));
            c.length && c[0].width !== 0 && i(o, c[0].value),
            c.forEach(function(d) {
                e >= d.width && i(o, d.value)
            })
        }
        ),
        l
    }
    ;
    return t(r)
}
  , Ls = (r, {windowWidth: e=0, ignoreProps: t=[], neededProps: n=[], propDefaults: s={}}={}) => {
    const l = ze(r, e)
      , i = n.reduce( (o, a) => (typeof l[a] != "undefined" && !t.includes(a) && (o[a] = l[a]),
    o), {});
    return Object.entries(s).forEach( ([o,a]) => {
        typeof i[o] == "undefined" && (i[o] = a)
    }
    ),
    i
}
  , ze = (r, e=0) => {
    const t = Rr(r);
    return _2(t, e)
}
  , Jt = ["cigar", "rebut", "sissy", "humph", "awake", "blush", "focal", "evade", "naval", "serve", "heath", "dwarf", "model", "karma", "stink", "grade", "quiet", "bench", "abate", "feign", "major", "death", "fresh", "crust", "stool", "colon", "abase", "marry", "react", "batty", "pride", "floss", "helix", "croak", "staff", "paper", "unfed", "whelp", "trawl", "outdo", "adobe", "crazy", "sower", "repay", "digit", "crate", "cluck", "spike", "mimic", "pound", "maxim", "linen", "unmet", "flesh", "booby", "forth", "first", "stand", "belly", "ivory", "seedy", "print", "yearn", "drain", "bribe", "stout", "panel", "crass", "flume", "offal", "agree", "error", "swirl", "argue", "bleed", "delta", "flick", "totem", "wooer", "front", "shrub", "parry", "biome", "lapel", "start", "greet", "goner", "golem", "lusty", "loopy", "round", "audit", "lying", "gamma", "labor", "islet", "civic", "forge", "corny", "moult", "basic", "salad", "agate", "spicy", "spray", "essay", "fjord", "spend", "kebab", "guild", "aback", "motor", "alone", "hatch", "hyper", "thumb", "dowry", "ought", "belch", "dutch", "pilot", "tweed", "comet", "jaunt", "enema", "steed", "abyss", "growl", "fling", "dozen", "boozy", "erode", "world", "gouge", "click", "briar", "great", "altar", "pulpy", "blurt", "coast", "duchy", "groin", "fixer", "group", "rogue", "badly", "smart", "pithy", "gaudy", "chill", "heron", "vodka", "finer", "surer", "radio", "rouge", "perch", "retch", "wrote", "clock", "tilde", "store", "prove", "bring", "solve", "cheat", "grime", "exult", "usher", "epoch", "triad", "break", "rhino", "viral", "conic", "masse", "sonic", "vital", "trace", "using", "peach", "champ", "baton", "brake", "pluck", "craze", "gripe", "weary", "picky", "acute", "ferry", "aside", "tapir", "troll", "unify", "rebus", "boost", "truss", "siege", "tiger", "banal", "slump", "crank", "gorge", "query", "drink", "favor", "abbey", "tangy", "panic", "solar", "shire", "proxy", "point", "robot", "prick", "wince", "crimp", "knoll", "sugar", "whack", "mount", "perky", "could", "wrung", "light", "those", "moist", "shard", "pleat", "aloft", "skill", "elder", "frame", "humor", "pause", "ulcer", "ultra", "robin", "cynic", "aroma", "caulk", "shake", "dodge", "swill", "tacit", "other", "thorn", "trove", "bloke", "vivid", "spill", "chant", "choke", "rupee", "nasty", "mourn", "ahead", "brine", "cloth", "hoard", "sweet", "month", "lapse", "watch", "today", "focus", "smelt", "tease", "cater", "movie", "saute", "allow", "renew", "their", "slosh", "purge", "chest", "depot", "epoxy", "nymph", "found", "shall", "stove", "lowly", "snout", "trope", "fewer", "shawl", "natal", "comma", "foray", "scare", "stair", "black", "squad", "royal", "chunk", "mince", "shame", "cheek", "ample", "flair", "foyer", "cargo", "oxide", "plant", "olive", "inert", "askew", "heist", "shown", "zesty", "trash", "larva", "forgo", "story", "hairy", "train", "homer", "badge", "midst", "canny", "shine", "gecko", "farce", "slung", "tipsy", "metal", "yield", "delve", "being", "scour", "glass", "gamer", "scrap", "money", "hinge", "album", "vouch", "asset", "tiara", "crept", "bayou", "atoll", "manor", "creak", "showy", "phase", "froth", "depth", "gloom", "flood", "trait", "girth", "piety", "goose", "float", "donor", "atone", "primo", "apron", "blown", "cacao", "loser", "input", "gloat", "awful", "brink", "smite", "beady", "rusty", "retro", "droll", "gawky", "hutch", "pinto", "egret", "lilac", "sever", "field", "fluff", "agape", "voice", "stead", "berth", "madam", "night", "bland", "liver", "wedge", "roomy", "wacky", "flock", "angry", "trite", "aphid", "tryst", "midge", "power", "elope", "cinch", "motto", "stomp", "upset", "bluff", "cramp", "quart", "coyly", "youth", "rhyme", "buggy", "alien", "smear", "unfit", "patty", "cling", "glean", "label", "hunky", "khaki", "poker", "gruel", "twice", "twang", "shrug", "treat", "waste", "merit", "woven", "needy", "clown", "irony", "ruder", "gauze", "chief", "onset", "prize", "fungi", "charm", "gully", "inter", "whoop", "taunt", "leery", "class", "theme", "lofty", "tibia", "booze", "alpha", "thyme", "doubt", "parer", "chute", "stick", "trice", "alike", "recap", "saint", "glory", "grate", "admit", "brisk", "soggy", "usurp", "scald", "scorn", "leave", "twine", "sting", "bough", "marsh", "sloth", "dandy", "vigor", "howdy", "enjoy", "valid", "ionic", "equal", "floor", "catch", "spade", "stein", "exist", "quirk", "denim", "grove", "spiel", "mummy", "fault", "foggy", "flout", "carry", "sneak", "libel", "waltz", "aptly", "piney", "inept", "aloud", "photo", "dream", "stale", "begin", "spell", "rainy", "unite", "medal", "valet", "inane", "maple", "snarl", "baker", "there", "glyph", "avert", "brave", "axiom", "prime", "drive", "feast", "itchy", "clean", "happy", "tepid", "undue", "study", "eject", "chafe", "torso", "adore", "woken", "amber", "joust", "infer", "braid", "knock", "naive", "apply", "spoke", "usual", "rival", "probe", "chord", "taper", "slate", "third", "lunar", "excel", "aorta", "poise", "extra", "judge", "condo", "impel", "havoc", "molar", "manly", "whine", "skirt", "antic", "layer", "sleek", "belie", "lemon", "opera", "pixie", "grimy", "sedan", "leapt", "human", "koala", "spire", "frock", "adopt", "chard", "mucky", "alter", "blurb", "matey", "elude", "count", "maize", "beefy", "worry", "flirt", "fishy", "crave", "cross", "scold", "shirk", "tasty", "unlit", "dance", "ninth", "apple", "flail", "stage", "heady", "debug", "giant", "usage", "sound", "salsa", "magic", "cache", "avail", "kiosk", "sweat", "ruddy", "riper", "vague", "arbor", "fifty", "syrup", "worse", "polka", "moose", "above", "squat", "trend", "toxic", "pinky", "horse", "regal", "where", "revel", "email", "birth", "blame", "surly", "sweep", "cider", "mealy", "yacht", "credo", "glove", "tough", "duvet", "staid", "grout", "voter", "untie", "guano", "hurry", "beset", "bread", "every", "march", "stock", "flora", "ratio", "smash", "leafy", "locus", "ledge", "snafu", "under", "qualm", "borax", "carat", "thief", "agony", "dwelt", "whiff", "hound", "thump", "plate", "kayak", "broke", "unzip", "ditto", "joker", "metro", "logic", "circa", "cedar", "plaza", "range", "sulky", "horde", "guppy", "below", "anger", "ghoul", "aglow", "cocoa", "ethic", "broom", "snack", "acrid", "scarf", "canoe", "latte", "plank", "shorn", "grief", "flask", "brash", "igloo", "clerk", "utter", "bagel", "swine", "ramen", "skimp", "mouse", "kneel", "agile", "jazzy", "humid", "nanny", "beast", "ennui", "scout", "hater", "crumb", "balsa", "again", "guard", "wrong", "plunk", "crime", "maybe", "strap", "ranch", "shyly", "kazoo", "frost", "crane", "taste", "covet", "grand", "rodeo", "guest", "about", "tract", "diner", "straw", "bleep", "mossy", "hotel", "irate", "venom", "windy", "donut", "cower", "enter", "folly", "earth", "whirl", "barge", "fiend", "crone", "topaz", "droop", "flyer", "tonic", "flank", "burly", "froze", "whale", "hobby", "wheel", "heart", "disco", "ethos", "curly", "bathe", "style", "tenth", "beget", "party", "chart", "anode", "polyp", "brook", "bully", "lover", "empty", "hello", "quick", "wrath", "snaky", "index", "scrub", "amiss", "exact", "magma", "quest", "beach", "spice", "verve", "wordy", "ocean", "choir", "peace", "write", "caper", "audio", "bride", "space", "onion", "await", "giddy", "birch", "gnash", "dwell", "rouse", "lucky", "quote", "older", "whisk", "clear", "rayon", "exert", "angel", "music", "frank", "close", "snare", "stone", "brush", "carol", "right", "rocky", "loyal", "smile", "coach", "azure", "daddy", "beret", "merry", "while", "spurt", "bunch", "chime", "viola", "binge", "truth", "snail", "skunk", "knelt", "uncle", "agent", "leaky", "graph", "adult", "mercy", "splat", "occur", "smirk", "given", "tempo", "cause", "retry", "pique", "noble", "mason", "phony", "grail", "bleak", "noise", "until", "ardor", "mania", "flare", "trade", "limit", "ninja", "glaze", "leash", "actor", "meant", "green", "sassy", "sight", "trust", "tardy", "think", "queue", "candy", "piano", "pixel", "queen", "throw", "guide", "solid", "tawny", "scope", "sushi", "resin", "taken", "genre", "adapt", "worst", "young", "woman", "sleep", "sharp", "shift", "chain", "house", "these", "spent", "would", "topic", "globe", "bacon", "funny", "table", "small", "built", "touch", "slope", "grace", "evoke", "phone", "daisy", "learn", "child", "three", "salty", "mural", "aging", "twirl", "scant", "lunge", "cable", "stony", "final", "liner", "threw", "brief", "route", "heard", "doing", "lunch", "blond", "court", "stole", "thing", "large", "north", "tweak", "still", "relic", "block", "aloof", "snake", "ember", "leggy", "expel", "bulky", "alive", "cleft", "micro", "verge", "repel", "which", "after", "place", "stiff", "fried", "never", "pasta", "scram", "talon", "ascot", "stash", "psalm", "ridge", "price", "match", "build", "heavy", "apart", "piper", "smith", "often", "sense", "devil", "image", "forty", "urban", "state", "flame", "hunch", "teary", "clone", "early", "cheer", "grasp", "pesky", "heave", "local", "since", "erupt", "toxin", "snort", "spelt", "abide", "lingo", "shade", "decay", "risen", "towel", "sally", "mayor", "stung", "speak", "realm", "force", "taboo", "frond", "serum", "plait", "climb", "wrist", "finch", "voila", "breed", "merge", "broth", "louse", "whiny", "steel", "blimp", "equip", "shank", "tithe", "facet", "raise", "lucid", "jolly", "laser", "rover", "overt", "intro", "vapid", "gleam", "prune", "craft", "prowl", "diary", "slice", "ebony", "value", "decal", "shave", "musty", "pious", "jerky", "media", "tidal", "outer", "cumin", "amass", "pinch", "stall", "tutor", "briny", "hitch", "nicer", "dingo", "exalt", "swish", "glide", "titan", "bevel", "skier", "minus", "papal", "gummy", "chaos", "basin", "bravo", "stark", "groom", "organ", "ether", "melon", "hence", "crowd", "manga", "swung", "deter", "angst", "vault", "proud", "grind", "prior", "cover", "terse", "scent", "paint", "edict", "bugle", "dolly", "savor", "knead", "order", "drove", "zebra", "buddy", "adage", "inlay", "thigh", "debut", "crush", "scoff", "canon", "shape", "blare", "gaunt", "cameo", "jiffy", "enact", "video", "swoon", "decoy", "quite", "nerdy", "refer", "shaft", "speck", "cadet", "prong", "forte", "porch", "awash", "juice", "smock", "super", "feral", "penne", "chalk", "flake", "scale", "lower", "ensue", "anvil", "macaw", "saucy", "ounce", "medic", "scone", "skiff", "neigh", "shore", "acorn", "brace", "storm", "lanky", "meter", "delay", "mulch", "brute", "leech", "filet", "skate", "stake", "crown", "lithe", "flunk", "knave", "spout", "mushy", "camel", "faint", "stern", "widen", "rerun", "owner", "drawn", "debit", "rebel", "aisle", "brass", "harsh", "broad", "recur", "honey", "beaut", "fully", "press", "smoke", "seven", "teach", "steam", "handy", "torch", "thank", "faith", "brain", "rider", "cloud", "modem", "shell", "wagon", "title", "miner", "lager", "flour", "joint", "mommy", "carve", "gusty", "stain", "prone", "gamut", "corer", "grant", "halve", "stint", "fiber", "dicey", "spoon", "shout", "goofy", "bossy", "frown", "wreak", "sandy", "bawdy", "tunic", "easel", "weird", "sixth", "snoop", "blaze", "vinyl", "octet", "truly", "event", "ready", "swell", "inner", "stoic", "flown", "primp", "uvula", "tacky", "visor", "tally", "frail", "going", "niche", "spine", "pearl", "jelly", "twist", "brown", "witch", "slang", "chock", "hippo", "dogma", "mauve", "guile", "shaky", "crypt", "endow", "shove", "hilly", "hyena", "flung", "patio", "plumb", "vying", "boxer", "drool", "funky", "boast", "scowl", "hefty", "stray", "flash", "blade", "brawn", "sauna", "eagle", "share", "affix", "grain", "decry", "mambo", "stare", "lemur", "nerve", "chose", "cheap", "relax", "cyber", "sprig", "atlas", "draft", "wafer", "crawl", "dingy", "total", "cloak", "fancy", "knack", "flint", "prose", "silly", "rower", "squid", "icing", "reach", "upper", "crepe", "crisp", "sunny", "shunt", "fever", "udder", "false", "toast", "rivet", "chore", "revue", "tooth", "pedal", "pupil", "swath", "steep", "bonus", "goody", "score", "rapid", "rumba", "ditty", "crook", "suave", "trail", "indie", "madly", "roach", "clove", "cream", "otter", "gland", "dryer", "award", "lodge", "fuzzy", "hover", "deity", "spear", "check", "scrum", "alert", "troop", "navel", "greed", "spite", "track", "mango", "chase", "piece", "ladle", "stamp", "lasso", "timer", "spark", "baste", "nudge", "amble", "dopey", "angle", "shelf", "elbow", "sheet", "verse", "sorry", "quota", "booty", "jewel", "curse", "shear", "krill", "foamy", "villa", "hazel", "spare", "wheat", "turbo", "arrow", "nurse", "laugh", "crest", "ashen", "moral", "stood", "dirge", "inbox", "patch", "spate", "artsy", "ozone", "genie", "known", "clash", "weedy", "dummy", "bliss", "idler", "adept", "whose", "patsy", "trout", "shush", "suite", "macho", "balmy", "tripe", "yeast", "dowel", "bicep", "aware", "bongo", "eager", "fifth", "grown", "livid", "pitch", "borne", "alarm", "folio", "shuck", "suede", "grift", "drone", "sport", "polar", "quash", "idiom", "habit", "rough", "preen", "admin", "cease", "datum", "edify", "reuse", "lease", "board", "taffy", "plaid", "vixen", "bilge", "ghost", "quail", "petty", "prank", "munch", "curio", "taupe", "glade", "thrum", "oddly", "elite", "comfy", "offer", "plain", "stump", "witty", "blink", "moldy", "incur", "poppy", "curve", "baler", "atria", "stilt", "dread", "novel", "jumpy", "brand", "exile", "gnome", "undid", "foist", "nervy", "modal", "loris", "sword", "blank", "tizzy", "burnt", "water", "quake", "gofer", "haunt", "whole", "savvy", "omega", "assay", "frill", "banjo", "daunt", "lumpy", "rigid", "stork", "groan", "coral", "imbue", "nasal", "minty", "south", "nomad", "kefir", "knell", "level", "matte", "lousy", "issue", "rowdy", "llama", "extol", "ratty", "union", "spore", "mirth", "annex", "tower", "split", "graft", "elate", "petal", "least", "might", "fetch", "blend", "drift", "bulge", "tenor", "chirp", "trick", "pouty", "chair", "throb", "nadir", "noisy", "along", "lefty", "teeth", "knife", "later", "defer", "coven", "quill", "mouth", "blunt", "drape", "dally", "fritz", "gooey", "civil", "geese", "spoil", "width", "spasm", "relay", "plane", "amuse", "nylon", "annoy", "hardy", "lever", "stack", "wound", "beard", "forum", "spoof", "catty", "gross", "haven", "ideal", "limbo", "detox", "stunt", "drill", "tuber", "gauge", "plump", "fetid", "holly", "glare", "lathe", "abhor", "motel", "rabid", "awoke", "venue", "short", "guise", "peril", "arise", "fugue", "tabby", "gizmo", "deuce", "tinge", "lurid", "clung", "wield", "clamp", "opine", "maker", "grave", "vowel", "thick", "bunny", "dough", "plead", "hovel", "remit", "colic", "gruff", "muggy", "leach", "cacti", "haste", "tulip", "among", "waist", "flute", "gravy", "snide", "erase", "guess", "truck", "miser", "swing", "dodgy", "segue", "grass", "rugby", "myrrh", "white", "quilt", "conch", "glint", "spool", "prism", "speed", "batch", "abbot", "fruit", "decor", "siren", "fable", "proof", "sitar", "posse", "filly", "oomph", "pecan", "blast", "eight", "manic", "quark", "trial", "gumbo", "avoid", "chasm", "racer", "fiery", "sumac", "waxen", "sully", "cubic", "clink", "baron", "cliff", "strut", "freak", "dusky", "cruel", "flaky", "jumbo", "allot", "spiny", "cigar", "weigh", "chide", "swoop", "gavel", "bleat", "embed", "cello", "scene", "vegan", "surge", "mooch", "bloom", "skull", "roost", "squad", "mogul", "hoist", "stank", "awake", "guava", "attic", "buyer", "shred", "lance", "dizzy", "hydra", "fluke", "slime", "linen", "theft", "sheep", "gunky", "vogue", "lobby", "hasty", "shoal", "teddy", "smell", "eaten", "ankle", "grade", "drama", "clasp", "amply", "rehab", "oasis", "slick", "basil", "serif", "brood", "wiser", "befit", "ivory", "afoot", "chump", "comet", "swamp", "fizzy", "sober", "singe", "sandy", "envoy", "sworn", "dense", "inlet", "laden", "carom", "prude", "alley", "elfin", "cycle", "begun", "cubit", "belle", "toady", "stand", "weave", "clump", "snore", "tweet", "drunk", "women", "gloss", "eerie", "quack", "rural", "crock", "plume", "bring", "puffy", "riser", "latch", "liken", "budge", "umbra", "satin", "parka", "newly", "clock", "dowdy", "waver", "creed", "mover", "bylaw", "loath", "dusty", "wreck", "agree", "vocal", "chuck", "niece", "visit", "couch", "stuff", "divot", "clang", "smile", "etude", "chili", "basis", "notch", "alloy", "nobly", "morph", "thumb", "mafia", "wharf", "align", "testy", "break", "quell", "sepia", "broil", "amaze", "token", "entry", "emoji", "drake", "alibi", "ovate", "curry", "queer", "unity", "acute", "scoop", "emcee", "crude", "puppy", "demur", "maven", "baton", "pizza", "swami", "toddy", "sling", "demon", "amend", "canal", "avian", "clack", "stout", "steak", "pshaw", "butte", "legal", "booth", "churn"]
  , qt = {
    "2021-06-19": 1,
    "2021-06-20": 2,
    "2021-06-21": 3,
    "2021-06-22": 4,
    "2021-06-23": 5,
    "2021-06-24": 6,
    "2021-06-25": 7,
    "2021-06-26": 8,
    "2021-06-27": 9,
    "2021-06-28": 10,
    "2021-06-29": 11,
    "2021-06-30": 12,
    "2021-07-01": 13,
    "2021-07-02": 14,
    "2021-07-03": 15,
    "2021-07-04": 16,
    "2021-07-05": 17,
    "2021-07-06": 18,
    "2021-07-07": 19,
    "2021-07-08": 20,
    "2021-07-09": 21,
    "2021-07-10": 22,
    "2021-07-11": 23,
    "2021-07-12": 24,
    "2021-07-13": 25,
    "2021-07-14": 26,
    "2021-07-15": 27,
    "2021-07-16": 28,
    "2021-07-17": 29,
    "2021-07-18": 30,
    "2021-07-19": 31,
    "2021-07-20": 32,
    "2021-07-21": 33,
    "2021-07-22": 34,
    "2021-07-23": 35,
    "2021-07-24": 36,
    "2021-07-25": 37,
    "2021-07-26": 38,
    "2021-07-27": 39,
    "2021-07-28": 40,
    "2021-07-29": 41,
    "2021-07-30": 42,
    "2021-07-31": 43,
    "2021-08-01": 44,
    "2021-08-02": 45,
    "2021-08-03": 46,
    "2021-08-04": 47,
    "2021-08-05": 48,
    "2021-08-06": 49,
    "2021-08-07": 50,
    "2021-08-08": 51,
    "2021-08-09": 52,
    "2021-08-10": 53,
    "2021-08-11": 54,
    "2021-08-12": 55,
    "2021-08-13": 56,
    "2021-08-14": 57,
    "2021-08-15": 58,
    "2021-08-16": 59,
    "2021-08-17": 60,
    "2021-08-18": 61,
    "2021-08-19": 62,
    "2021-08-20": 63,
    "2021-08-21": 64,
    "2021-08-22": 65,
    "2021-08-23": 66,
    "2021-08-24": 67,
    "2021-08-25": 68,
    "2021-08-26": 69,
    "2021-08-27": 70,
    "2021-08-28": 71,
    "2021-08-29": 72,
    "2021-08-30": 73,
    "2021-08-31": 74,
    "2021-09-01": 75,
    "2021-09-02": 76,
    "2021-09-03": 77,
    "2021-09-04": 78,
    "2021-09-05": 79,
    "2021-09-06": 80,
    "2021-09-07": 81,
    "2021-09-08": 82,
    "2021-09-09": 83,
    "2021-09-10": 84,
    "2021-09-11": 85,
    "2021-09-12": 86,
    "2021-09-13": 87,
    "2021-09-14": 88,
    "2021-09-15": 89,
    "2021-09-16": 90,
    "2021-09-17": 91,
    "2021-09-18": 92,
    "2021-09-19": 93,
    "2021-09-20": 94,
    "2021-09-21": 95,
    "2021-09-22": 96,
    "2021-09-23": 97,
    "2021-09-24": 98,
    "2021-09-25": 99,
    "2021-09-26": 100,
    "2021-09-27": 101,
    "2021-09-28": 102,
    "2021-09-29": 103,
    "2021-09-30": 104,
    "2021-10-01": 105,
    "2021-10-02": 106,
    "2021-10-03": 107,
    "2021-10-04": 108,
    "2021-10-05": 109,
    "2021-10-06": 110,
    "2021-10-07": 111,
    "2021-10-08": 112,
    "2021-10-09": 113,
    "2021-10-10": 114,
    "2021-10-11": 115,
    "2021-10-12": 116,
    "2021-10-13": 117,
    "2021-10-14": 118,
    "2021-10-15": 119,
    "2021-10-16": 120,
    "2021-10-17": 121,
    "2021-10-18": 122,
    "2021-10-19": 123,
    "2021-10-20": 124,
    "2021-10-21": 125,
    "2021-10-22": 126,
    "2021-10-23": 127,
    "2021-10-24": 128,
    "2021-10-25": 129,
    "2021-10-26": 130,
    "2021-10-27": 131,
    "2021-10-28": 132,
    "2021-10-29": 133,
    "2021-10-30": 134,
    "2021-10-31": 135,
    "2021-11-01": 136,
    "2021-11-02": 137,
    "2021-11-03": 138,
    "2021-11-04": 139,
    "2021-11-05": 140,
    "2021-11-06": 141,
    "2021-11-07": 142,
    "2021-11-08": 143,
    "2021-11-09": 144,
    "2021-11-10": 145,
    "2021-11-11": 146,
    "2021-11-12": 147,
    "2021-11-13": 148,
    "2021-11-14": 149,
    "2021-11-15": 150,
    "2021-11-16": 151,
    "2021-11-17": 152,
    "2021-11-18": 153,
    "2021-11-19": 154,
    "2021-11-20": 155,
    "2021-11-21": 156,
    "2021-11-22": 157,
    "2021-11-23": 158,
    "2021-11-24": 159,
    "2021-11-25": 160,
    "2021-11-26": 161,
    "2021-11-27": 162,
    "2021-11-28": 163,
    "2021-11-29": 164,
    "2021-11-30": 165,
    "2021-12-01": 166,
    "2021-12-02": 167,
    "2021-12-03": 168,
    "2021-12-04": 169,
    "2021-12-05": 170,
    "2021-12-06": 171,
    "2021-12-07": 172,
    "2021-12-08": 173,
    "2021-12-09": 174,
    "2021-12-10": 175,
    "2021-12-11": 176,
    "2021-12-12": 177,
    "2021-12-13": 178,
    "2021-12-14": 179,
    "2021-12-15": 180,
    "2021-12-16": 181,
    "2021-12-17": 182,
    "2021-12-18": 183,
    "2021-12-19": 184,
    "2021-12-20": 185,
    "2021-12-21": 186,
    "2021-12-22": 187,
    "2021-12-23": 188,
    "2021-12-24": 189,
    "2021-12-25": 190,
    "2021-12-26": 191,
    "2021-12-27": 192,
    "2021-12-28": 193,
    "2021-12-29": 194,
    "2021-12-30": 195,
    "2021-12-31": 196,
    "2022-01-01": 197,
    "2022-01-02": 198,
    "2022-01-03": 199,
    "2022-01-04": 200,
    "2022-01-05": 201,
    "2022-01-06": 202,
    "2022-01-07": 203,
    "2022-01-08": 204,
    "2022-01-09": 205,
    "2022-01-10": 206,
    "2022-01-11": 207,
    "2022-01-12": 208,
    "2022-01-13": 209,
    "2022-01-14": 210,
    "2022-01-15": 211,
    "2022-01-16": 212,
    "2022-01-17": 213,
    "2022-01-18": 214,
    "2022-01-19": 215,
    "2022-01-20": 216,
    "2022-01-21": 217,
    "2022-01-22": 218,
    "2022-01-23": 219,
    "2022-01-24": 220,
    "2022-01-25": 221,
    "2022-01-26": 222,
    "2022-01-27": 223,
    "2022-01-28": 224,
    "2022-01-29": 225,
    "2022-01-30": 226,
    "2022-01-31": 227,
    "2022-02-01": 228,
    "2022-02-02": 229,
    "2022-02-03": 230,
    "2022-02-04": 231,
    "2022-02-05": 232,
    "2022-02-06": 233,
    "2022-02-07": 234,
    "2022-02-08": 235,
    "2022-02-09": 236,
    "2022-02-10": 237,
    "2022-02-11": 238,
    "2022-02-12": 239,
    "2022-02-13": 240,
    "2022-02-14": 241,
    "2022-02-15": 242,
    "2022-02-16": 243,
    "2022-02-17": 244,
    "2022-02-18": 245,
    "2022-02-19": 246,
    "2022-02-20": 247,
    "2022-02-21": 248,
    "2022-02-22": 249,
    "2022-02-23": 250,
    "2022-02-24": 251,
    "2022-02-25": 252,
    "2022-02-26": 253,
    "2022-02-27": 254,
    "2022-02-28": 255,
    "2022-03-01": 256,
    "2022-03-02": 257,
    "2022-03-03": 258,
    "2022-03-04": 259,
    "2022-03-05": 260,
    "2022-03-06": 261,
    "2022-03-07": 262,
    "2022-03-08": 263,
    "2022-03-09": 264,
    "2022-03-10": 265,
    "2022-03-11": 266,
    "2022-03-12": 267,
    "2022-03-13": 268,
    "2022-03-14": 269,
    "2022-03-15": 270,
    "2022-03-16": 271,
    "2022-03-17": 272,
    "2022-03-18": 273,
    "2022-03-19": 274,
    "2022-03-20": 275,
    "2022-03-21": 276,
    "2022-03-22": 277,
    "2022-03-23": 278,
    "2022-03-24": 279,
    "2022-03-25": 280,
    "2022-03-26": 281,
    "2022-03-27": 282,
    "2022-03-28": 283,
    "2022-03-29": 284,
    "2022-03-30": 285,
    "2022-03-31": 286,
    "2022-04-01": 287,
    "2022-04-02": 288,
    "2022-04-03": 289,
    "2022-04-04": 290,
    "2022-04-05": 291,
    "2022-04-06": 292,
    "2022-04-07": 293,
    "2022-04-08": 294,
    "2022-04-09": 295,
    "2022-04-10": 296,
    "2022-04-11": 297,
    "2022-04-12": 298,
    "2022-04-13": 299,
    "2022-04-14": 300,
    "2022-04-15": 301,
    "2022-04-16": 302,
    "2022-04-17": 303,
    "2022-04-18": 304,
    "2022-04-19": 305,
    "2022-04-20": 306,
    "2022-04-21": 307,
    "2022-04-22": 308,
    "2022-04-23": 309,
    "2022-04-24": 310,
    "2022-04-25": 311,
    "2022-04-26": 312,
    "2022-04-27": 313,
    "2022-04-28": 314,
    "2022-04-29": 315,
    "2022-04-30": 316,
    "2022-05-01": 317,
    "2022-05-02": 318,
    "2022-05-03": 319,
    "2022-05-04": 320,
    "2022-05-05": 321,
    "2022-05-06": 322,
    "2022-05-07": 323,
    "2022-05-08": 324,
    "2022-05-09": 325,
    "2022-05-10": 326,
    "2022-05-11": 327,
    "2022-05-12": 328,
    "2022-05-13": 329,
    "2022-05-14": 330,
    "2022-05-15": 331,
    "2022-05-16": 332,
    "2022-05-17": 333,
    "2022-05-18": 334,
    "2022-05-19": 335,
    "2022-05-20": 336,
    "2022-05-21": 337,
    "2022-05-22": 338,
    "2022-05-23": 339,
    "2022-05-24": 340,
    "2022-05-25": 341,
    "2022-05-26": 342,
    "2022-05-27": 343,
    "2022-05-28": 344,
    "2022-05-29": 345,
    "2022-05-30": 346,
    "2022-05-31": 347,
    "2022-06-01": 348,
    "2022-06-02": 349,
    "2022-06-03": 350,
    "2022-06-04": 351,
    "2022-06-05": 352,
    "2022-06-06": 353,
    "2022-06-07": 354,
    "2022-06-08": 355,
    "2022-06-09": 356,
    "2022-06-10": 357,
    "2022-06-11": 358,
    "2022-06-12": 359,
    "2022-06-13": 360,
    "2022-06-14": 361,
    "2022-06-15": 362,
    "2022-06-16": 363,
    "2022-06-17": 364,
    "2022-06-18": 365,
    "2022-06-19": 366,
    "2022-06-20": 367,
    "2022-06-21": 368,
    "2022-06-22": 369,
    "2022-06-23": 370,
    "2022-06-24": 371,
    "2022-06-25": 372,
    "2022-06-26": 373,
    "2022-06-27": 374,
    "2022-06-28": 375,
    "2022-06-29": 376,
    "2022-06-30": 377,
    "2022-07-01": 378,
    "2022-07-02": 379,
    "2022-07-03": 380,
    "2022-07-04": 381,
    "2022-07-05": 382,
    "2022-07-06": 383,
    "2022-07-07": 384,
    "2022-07-08": 385,
    "2022-07-09": 386,
    "2022-07-10": 387,
    "2022-07-11": 388,
    "2022-07-12": 389,
    "2022-07-13": 390,
    "2022-07-14": 391,
    "2022-07-15": 392,
    "2022-07-16": 393,
    "2022-07-17": 394,
    "2022-07-18": 395,
    "2022-07-19": 396,
    "2022-07-20": 397,
    "2022-07-21": 398,
    "2022-07-22": 399,
    "2022-07-23": 400,
    "2022-07-24": 401,
    "2022-07-25": 402,
    "2022-07-26": 403,
    "2022-07-27": 404,
    "2022-07-28": 405,
    "2022-07-29": 406,
    "2022-07-30": 407,
    "2022-07-31": 408,
    "2022-08-01": 409,
    "2022-08-02": 410,
    "2022-08-03": 411,
    "2022-08-04": 412,
    "2022-08-05": 413,
    "2022-08-06": 414,
    "2022-08-07": 415,
    "2022-08-08": 416,
    "2022-08-09": 417,
    "2022-08-10": 418,
    "2022-08-11": 419,
    "2022-08-12": 420,
    "2022-08-13": 421,
    "2022-08-14": 422,
    "2022-08-15": 423,
    "2022-08-16": 424,
    "2022-08-17": 425,
    "2022-08-18": 426,
    "2022-08-19": 427,
    "2022-08-20": 428,
    "2022-08-21": 429,
    "2022-08-22": 430,
    "2022-08-23": 431,
    "2022-08-24": 432,
    "2022-08-25": 433,
    "2022-08-26": 434,
    "2022-08-27": 435,
    "2022-08-28": 436,
    "2022-08-29": 437,
    "2022-08-30": 438,
    "2022-08-31": 439,
    "2022-09-01": 440,
    "2022-09-02": 441,
    "2022-09-03": 442,
    "2022-09-04": 443,
    "2022-09-05": 444,
    "2022-09-06": 445,
    "2022-09-07": 446,
    "2022-09-08": 447,
    "2022-09-09": 448,
    "2022-09-10": 449,
    "2022-09-11": 450,
    "2022-09-12": 451,
    "2022-09-13": 452,
    "2022-09-14": 453,
    "2022-09-15": 454,
    "2022-09-16": 455,
    "2022-09-17": 456,
    "2022-09-18": 457,
    "2022-09-19": 458,
    "2022-09-20": 459,
    "2022-09-21": 460,
    "2022-09-22": 461,
    "2022-09-23": 462,
    "2022-09-24": 463,
    "2022-09-25": 464,
    "2022-09-26": 465,
    "2022-09-27": 466,
    "2022-09-28": 467,
    "2022-09-29": 468,
    "2022-09-30": 469,
    "2022-10-01": 470,
    "2022-10-02": 471,
    "2022-10-03": 472,
    "2022-10-04": 473,
    "2022-10-05": 474,
    "2022-10-06": 475,
    "2022-10-07": 476,
    "2022-10-08": 477,
    "2022-10-09": 478,
    "2022-10-10": 479,
    "2022-10-11": 480,
    "2022-10-12": 481,
    "2022-10-13": 482,
    "2022-10-14": 483,
    "2022-10-15": 484,
    "2022-10-16": 485,
    "2022-10-17": 486,
    "2022-10-18": 487,
    "2022-10-19": 488,
    "2022-10-20": 489,
    "2022-10-21": 490,
    "2022-10-22": 491,
    "2022-10-23": 492,
    "2022-10-24": 493,
    "2022-10-25": 494,
    "2022-10-26": 495,
    "2022-10-27": 496,
    "2022-10-28": 497,
    "2022-10-29": 498,
    "2022-10-30": 499,
    "2022-10-31": 500,
    "2022-11-01": 501,
    "2022-11-02": 502,
    "2022-11-03": 503,
    "2022-11-04": 504,
    "2022-11-05": 505,
    "2022-11-06": 506,
    "2022-11-07": 1623,
    "2022-11-08": 514,
    "2022-11-09": 530,
    "2022-11-10": 507,
    "2022-11-11": 1249,
    "2022-11-12": 537,
    "2022-11-13": 523,
    "2022-11-14": 1255,
    "2022-11-15": 508,
    "2022-11-16": 509,
    "2022-11-17": 510,
    "2022-11-18": 511,
    "2022-11-19": 539,
    "2022-11-20": 969,
    "2022-11-21": 1685,
    "2022-11-22": 929,
    "2022-11-23": 2166,
    "2022-11-24": 1438,
    "2022-11-25": 1680,
    "2022-11-26": 736,
    "2022-11-27": 2180,
    "2022-11-28": 2268,
    "2022-11-29": 559,
    "2022-11-30": 552,
    "2022-12-01": 2276,
    "2022-12-02": 1311,
    "2022-12-03": 2265,
    "2022-12-04": 1106,
    "2022-12-05": 849,
    "2022-12-06": 2008,
    "2022-12-07": 1246,
    "2022-12-08": 1149,
    "2022-12-09": 840,
    "2022-12-10": 2256,
    "2022-12-11": 923,
    "2022-12-12": 1168,
    "2022-12-13": 895,
    "2022-12-14": 621,
    "2022-12-15": 2278,
    "2022-12-16": 1591,
    "2022-12-17": 801,
    "2022-12-18": 962,
    "2022-12-19": 853,
    "2022-12-20": 1045,
    "2022-12-21": 694,
    "2022-12-22": 952,
    "2022-12-23": 2281,
    "2022-12-24": 1155,
    "2022-12-25": 2257,
    "2022-12-26": 2283,
    "2022-12-27": 2258,
    "2022-12-28": 2208,
    "2022-12-29": 1279,
    "2022-12-30": 771,
    "2022-12-31": 2251,
    "2023-01-01": 2191,
    "2023-01-02": 2263,
    "2023-01-03": 2117,
    "2023-01-04": 818,
    "2023-01-05": 2269,
    "2023-01-06": 1847,
    "2023-01-07": 2110,
    "2023-01-08": 1969,
    "2023-01-09": 1132,
    "2023-01-10": 2026,
    "2023-01-11": 560,
    "2023-01-12": 1836,
    "2023-01-13": 570,
    "2023-01-14": 1343,
    "2023-01-15": 1277,
    "2023-01-16": 1062,
    "2023-01-17": 965,
    "2023-01-18": 1686,
    "2023-01-19": 1332,
    "2023-01-20": 1483,
    "2023-01-21": 1049,
    "2023-01-22": 825,
    "2023-01-23": 713,
    "2023-01-24": 546,
    "2023-01-25": 1517,
    "2023-01-26": 1384,
    "2023-01-27": 1074,
    "2023-01-28": 1211,
    "2023-01-29": 1159,
    "2023-01-30": 525,
    "2023-01-31": 1007,
    "2023-02-01": 1502,
    "2023-02-02": 1182,
    "2023-02-03": 1075,
    "2023-02-04": 2301,
    "2023-02-05": 1556,
    "2023-02-06": 1245,
    "2023-02-07": 590,
    "2023-02-08": 1927,
    "2023-02-09": 730,
    "2023-02-10": 1129,
    "2023-02-11": 1873,
    "2023-02-12": 1717,
    "2023-02-13": 1154,
    "2023-02-14": 838,
    "2023-02-15": 1584,
    "2023-02-16": 776,
    "2023-02-17": 1312,
    "2023-02-18": 1207,
    "2023-02-19": 815,
    "2023-02-20": 1104,
    "2023-02-21": 1439,
    "2023-02-22": 1528,
    "2023-02-23": 1881,
    "2023-02-24": 805,
    "2023-02-25": 1715,
    "2023-02-26": 1462,
    "2023-02-27": 1805,
    "2023-02-28": 2261,
    "2023-03-01": 2116,
    "2023-03-02": 1852,
    "2023-03-03": 1240,
    "2023-03-04": 1834,
    "2023-03-05": 1795,
    "2023-03-06": 1879,
    "2023-03-07": 1977,
    "2023-03-08": 975,
    "2023-03-09": 1052,
    "2023-03-10": 1867,
    "2023-03-11": 2168,
    "2023-03-12": 1754,
    "2023-03-13": 2239,
    "2023-03-14": 1718,
    "2023-03-15": 883,
    "2023-03-16": 1342,
    "2023-03-17": 1922,
    "2023-03-18": 2022,
    "2023-03-19": 1172,
    "2023-03-20": 839,
    "2023-03-21": 566,
    "2023-03-22": 1344,
    "2023-03-23": 2221,
    "2023-03-24": 1471,
    "2023-03-25": 1738,
    "2023-03-26": 2279,
    "2023-03-27": 2312,
    "2023-03-28": 2104,
    "2023-03-29": 773,
    "2023-03-30": 1002,
    "2023-03-31": 977,
    "2023-04-01": 803,
    "2023-04-02": 1305,
    "2023-04-03": 1412,
    "2023-04-04": 1809,
    "2023-04-05": 1229,
    "2023-04-06": 887,
    "2023-04-07": 1307,
    "2023-04-08": 1895,
    "2023-04-09": 2317,
    "2023-04-10": 1648,
    "2023-04-11": 726,
    "2023-04-12": 699,
    "2023-04-13": 2010,
    "2023-04-14": 1271,
    "2023-04-15": 1025,
    "2023-04-16": 852,
    "2023-04-17": 1522,
    "2023-04-18": 2233,
    "2023-04-19": 798,
    "2023-04-20": 1216,
    "2023-04-21": 2075,
    "2023-04-22": 1782,
    "2023-04-23": 955,
    "2023-04-24": 618,
    "2023-04-25": 875,
    "2023-04-26": 2081,
    "2023-04-27": 1316,
    "2023-04-28": 1978,
    "2023-04-29": 1297,
    "2023-04-30": 1894,
    "2023-05-01": 785,
    "2023-05-02": 1333,
    "2023-05-03": 1300,
    "2023-05-04": 2121,
    "2023-05-05": 1389,
    "2023-05-06": 2165,
    "2023-05-07": 1663,
    "2023-05-08": 1265,
    "2023-05-09": 1530,
    "2023-05-10": 1660,
    "2023-05-11": 1476,
    "2023-05-12": 1858,
    "2023-05-13": 1128,
    "2023-05-14": 1441,
    "2023-05-15": 567,
    "2023-05-16": 2142,
    "2023-05-17": 1636,
    "2023-05-18": 2106,
    "2023-05-19": 1050,
    "2023-05-20": 2038,
    "2023-05-21": 1392,
    "2023-05-22": 1450,
    "2023-05-23": 1657,
    "2023-05-24": 1493,
    "2023-05-25": 1682,
    "2023-05-26": 562,
    "2023-05-27": 1146,
    "2023-05-28": 528,
    "2023-05-29": 1331,
    "2023-05-30": 755,
    "2023-05-31": 1222,
    "2023-06-01": 1714,
    "2023-06-02": 657,
    "2023-06-03": 613,
    "2023-06-04": 1491,
    "2023-06-05": 817,
    "2023-06-06": 1877,
    "2023-06-07": 682,
    "2023-06-08": 1459,
    "2023-06-09": 2310,
    "2023-06-10": 1480,
    "2023-06-11": 2246,
    "2023-06-12": 1536,
    "2023-06-13": 1218,
    "2023-06-14": 1875,
    "2023-06-15": 1823,
    "2023-06-16": 1117,
    "2023-06-17": 2108,
    "2023-06-18": 1268,
    "2023-06-19": 2313,
    "2023-06-20": 1888,
    "2023-06-21": 1704,
    "2023-06-22": 1694,
    "2023-06-23": 569,
    "2023-06-24": 2083,
    "2023-06-25": 2245,
    "2023-06-26": 976,
    "2023-06-27": 703,
    "2023-06-28": 1992,
    "2023-06-29": 633,
    "2023-06-30": 1041,
    "2023-07-01": 2171,
    "2023-07-02": 2220,
    "2023-07-03": 1546,
    "2023-07-04": 847,
    "2023-07-05": 674,
    "2023-07-06": 1447,
    "2023-07-07": 988,
    "2023-07-08": 1931,
    "2023-07-09": 963,
    "2023-07-10": 515,
    "2023-07-11": 959,
    "2023-07-12": 2162,
    "2023-07-13": 824,
    "2023-07-14": 1315,
    "2023-07-15": 2218,
    "2023-07-16": 1194,
    "2023-07-17": 1215,
    "2023-07-18": 765,
    "2023-07-19": 1948,
    "2023-07-20": 1252,
    "2023-07-21": 1378,
    "2023-07-22": 2113,
    "2023-07-23": 1454,
    "2023-07-24": 1490,
    "2023-07-25": 1190,
    "2023-07-26": 631,
    "2023-07-27": 1051,
    "2023-07-28": 1486,
    "2023-07-29": 1296,
    "2023-07-30": 926,
    "2023-07-31": 2115,
    "2023-08-01": 2056,
    "2023-08-02": 1189,
    "2023-08-03": 1091,
    "2023-08-04": 1784,
    "2023-08-05": 1874,
    "2023-08-06": 958,
    "2023-08-07": 1713,
    "2023-08-08": 1199,
    "2023-08-09": 553,
    "2023-08-10": 1354,
    "2023-08-11": 2252,
    "2023-08-12": 578,
    "2023-08-13": 1914,
    "2023-08-14": 1241,
    "2023-08-15": 723,
    "2023-08-16": 992,
    "2023-08-17": 1837,
    "2023-08-18": 2128,
    "2023-08-19": 2154,
    "2023-08-20": 1674,
    "2023-08-21": 1054,
    "2023-08-22": 1398,
    "2023-08-23": 792,
    "2023-08-24": 1786,
    "2023-08-25": 845,
    "2023-08-26": 893,
    "2023-08-27": 2272,
    "2023-08-28": 668,
    "2023-08-29": 1201,
    "2023-08-30": 1564,
    "2023-08-31": 1487,
    "2023-09-01": 1206,
    "2023-09-02": 635,
    "2023-09-03": 2209,
    "2023-09-04": 1954,
    "2023-09-05": 688,
    "2023-09-06": 2097,
    "2023-09-07": 1224,
    "2023-09-08": 862,
    "2023-09-09": 689,
    "2023-09-10": 1958,
    "2023-09-11": 1668,
    "2023-09-12": 786,
    "2023-09-13": 1338,
    "2023-09-14": 2262,
    "2023-09-15": 1983,
    "2023-09-16": 1819,
    "2023-09-17": 2169,
    "2023-09-18": 1995,
    "2023-09-19": 2055,
    "2023-09-20": 696,
    "2023-09-21": 1885,
    "2023-09-22": 1703,
    "2023-09-23": 1366,
    "2023-09-24": 2001,
    "2023-09-25": 1274,
    "2023-09-26": 1210,
    "2023-09-27": 641,
    "2023-09-28": 601,
    "2023-09-29": 835,
    "2023-09-30": 533,
    "2023-10-01": 1963,
    "2023-10-02": 1926,
    "2023-10-03": 1166,
    "2023-10-04": 1569,
    "2023-10-05": 2144,
    "2023-10-06": 2133,
    "2023-10-07": 1039,
    "2023-10-08": 1833,
    "2023-10-09": 2129,
    "2023-10-10": 745,
    "2023-10-11": 1339,
    "2023-10-12": 1870,
    "2023-10-13": 1284,
    "2023-10-14": 1599,
    "2023-10-15": 584,
    "2023-10-16": 1755,
    "2023-10-17": 2282,
    "2023-10-18": 2267,
    "2023-10-19": 764,
    "2023-10-20": 2087,
    "2023-10-21": 1535,
    "2023-10-22": 580,
    "2023-10-23": 1214,
    "2023-10-24": 1263,
    "2023-10-25": 1417,
    "2023-10-26": 532,
    "2023-10-27": 1485,
    "2023-10-28": 767,
    "2023-10-29": 1405,
    "2023-10-30": 2059,
    "2023-10-31": 1294,
    "2023-11-01": 1964,
    "2023-11-02": 961,
    "2023-11-03": 612,
    "2023-11-04": 683,
    "2023-11-05": 1972,
    "2023-11-06": 1077,
    "2023-11-07": 1630,
    "2023-11-08": 625,
    "2023-11-09": 2072,
    "2023-11-10": 1554,
    "2023-11-11": 1649,
    "2023-11-12": 906,
    "2023-11-13": 1698,
    "2023-11-14": 1053,
    "2023-11-15": 1781,
    "2023-11-16": 2003,
    "2023-11-17": 1107,
    "2023-11-18": 1808,
    "2023-11-19": 774,
    "2023-11-20": 800,
    "2023-11-21": 1140,
    "2023-11-22": 1544,
    "2023-11-23": 956,
    "2023-11-24": 1608,
    "2023-11-25": 1645,
    "2023-11-26": 855,
    "2023-11-27": 1436,
    "2023-11-28": 841,
    "2023-11-29": 793,
    "2023-11-30": 1541,
    "2023-12-01": 1731,
    "2023-12-02": 543,
    "2023-12-03": 2259,
    "2023-12-04": 882,
    "2023-12-05": 1113,
    "2023-12-06": 2156,
    "2023-12-07": 611,
    "2023-12-08": 1401,
    "2023-12-09": 1175,
    "2023-12-10": 2088,
    "2023-12-11": 698,
    "2023-12-12": 1494,
    "2023-12-13": 1525,
    "2023-12-14": 1021,
    "2023-12-15": 1701,
    "2023-12-16": 860,
    "2023-12-17": 1900,
    "2023-12-18": 556,
    "2023-12-19": 1534,
    "2023-12-20": 1724,
    "2023-12-21": 648,
    "2023-12-22": 1092,
    "2023-12-23": 1291,
    "2023-12-24": 617,
    "2023-12-25": 642,
    "2023-12-26": 1814,
    "2023-12-27": 912,
    "2023-12-28": 1253,
    "2023-12-29": 964,
    "2023-12-30": 1179,
    "2023-12-31": 1563,
    "2024-01-01": 1705,
    "2024-01-02": 536,
    "2024-01-03": 781,
    "2024-01-04": 1855,
    "2024-01-05": 1205,
    "2024-01-06": 1901,
    "2024-01-07": 953,
    "2024-01-08": 593,
    "2024-01-09": 1561,
    "2024-01-10": 520,
    "2024-01-11": 1328,
    "2024-01-12": 1400,
    "2024-01-13": 1818,
    "2024-01-14": 768,
    "2024-01-15": 572,
    "2024-01-16": 816,
    "2024-01-17": 1815,
    "2024-01-18": 1193,
    "2024-01-19": 2102,
    "2024-01-20": 1023,
    "2024-01-21": 1853,
    "2024-01-22": 1896,
    "2024-01-23": 677,
    "2024-01-24": 2183,
    "2024-01-25": 905,
    "2024-01-26": 1780,
    "2024-01-27": 1565,
    "2024-01-28": 1351,
    "2024-01-29": 1934,
    "2024-01-30": 1849,
    "2024-01-31": 1975,
    "2024-02-01": 867,
    "2024-02-02": 1887,
    "2024-02-03": 1250,
    "2024-02-04": 1637,
    "2024-02-05": 2145,
    "2024-02-06": 1017,
    "2024-02-07": 1349,
    "2024-02-08": 719,
    "2024-02-09": 1893,
    "2024-02-10": 2023,
    "2024-02-11": 1329,
    "2024-02-12": 1776,
    "2024-02-13": 2250,
    "2024-02-14": 1868,
    "2024-02-15": 1032,
    "2024-02-16": 2201,
    "2024-02-17": 1148,
    "2024-02-18": 738,
    "2024-02-19": 604,
    "2024-02-20": 2266,
    "2024-02-21": 1139,
    "2024-02-22": 1513,
    "2024-02-23": 1666,
    "2024-02-24": 1500,
    "2024-02-25": 2065,
    "2024-02-26": 872,
    "2024-02-27": 1716,
    "2024-02-28": 1959,
    "2024-03-06": 1783,
    "2024-02-29": 2125,
    "2024-03-01": 1282,
    "2024-03-02": 1035,
    "2024-03-03": 2031,
    "2024-03-04": 1778,
    "2024-03-05": 1543,
    "2024-03-07": 2060,
    "2024-03-08": 1574,
    "2024-03-09": 1681,
    "2024-03-10": 2032,
    "2024-03-11": 1482,
    "2024-03-12": 1999,
    "2024-03-13": 1076,
    "2024-03-14": 876,
    "2024-03-15": 602,
    "2024-03-16": 705,
    "2024-03-17": 1367,
    "2024-03-18": 600,
    "2024-03-19": 1038,
    "2024-03-20": 1293,
    "2024-03-21": 632,
    "2024-03-22": 731,
    "2024-03-23": 582,
    "2024-03-24": 1387,
    "2024-03-25": 1449,
    "2024-03-26": 1151,
    "2024-03-27": 812,
    "2024-03-28": 2214,
    "2024-03-29": 1119,
    "2024-03-30": 1594,
    "2024-03-31": 1956,
    "2024-04-01": 1116,
    "2024-04-02": 1178,
    "2024-04-03": 2194,
    "2024-04-04": 1654,
    "2024-04-05": 858,
    "2024-04-06": 1078,
    "2024-04-07": 1747,
    "2024-04-08": 1309,
    "2024-04-09": 1360,
    "2024-04-10": 2149,
    "2024-04-11": 516,
    "2024-04-12": 1507,
    "2024-04-13": 1067,
    "2024-04-14": 1313,
    "2024-04-15": 565,
    "2024-04-16": 1014,
    "2024-04-17": 1473,
    "2024-04-18": 1558,
    "2024-04-19": 1643,
    "2024-04-20": 1771,
    "2024-04-21": 859,
    "2024-04-22": 2321,
    "2024-04-23": 843,
    "2024-04-24": 1150,
    "2024-04-25": 2243,
    "2024-04-26": 1097,
    "2024-04-27": 1985,
    "2024-04-28": 1723,
    "2024-04-29": 1767,
    "2024-04-30": 1270,
    "2024-05-01": 1125,
    "2024-05-02": 1602,
    "2024-05-03": 1741,
    "2024-05-04": 1397,
    "2024-05-05": 1419,
    "2024-05-06": 2287,
    "2024-05-07": 531,
    "2024-05-08": 2325,
    "2024-05-09": 1382,
    "2024-05-10": 1335,
    "2024-05-11": 1444,
    "2024-05-12": 931,
    "2024-05-13": 1304,
    "2024-05-14": 1044,
    "2024-05-15": 2223,
    "2024-05-16": 1915,
    "2024-05-17": 1047,
    "2024-05-18": 1671,
    "2024-05-19": 1112,
    "2024-05-20": 700,
    "2024-05-21": 998,
    "2024-05-22": 702,
    "2024-05-23": 1285,
    "2024-05-24": 1153,
    "2024-05-25": 1770,
    "2024-05-26": 1288,
    "2024-05-27": 1937,
    "2024-05-28": 1768,
    "2024-05-29": 1928,
    "2024-05-30": 2179,
    "2024-05-31": 568,
    "2024-06-01": 802,
    "2024-06-02": 811,
    "2024-06-03": 1952,
    "2024-06-04": 1110,
    "2024-06-05": 2254,
    "2024-06-06": 1161,
    "2024-06-07": 1744,
    "2024-06-08": 2222,
    "2024-06-09": 804,
    "2024-06-10": 575,
    "2024-06-11": 1466,
    "2024-06-12": 551,
    "2024-06-13": 1100,
    "2024-06-14": 518,
    "2024-06-15": 1691,
    "2024-06-16": 585,
    "2024-06-17": 1869,
    "2024-06-18": 866,
    "2024-06-19": 1463,
    "2024-06-20": 1523,
    "2024-06-21": 1560,
    "2024-06-22": 780,
    "2024-06-23": 1435,
    "2024-06-24": 873,
    "2024-06-25": 1791,
    "2024-06-26": 2161,
    "2024-06-27": 1596,
    "2024-06-28": 1162,
    "2024-06-29": 823,
    "2024-06-30": 797,
    "2024-07-01": 1073,
    "2024-07-02": 708,
    "2024-07-03": 1970,
    "2024-07-04": 1595,
    "2024-07-05": 1988,
    "2024-07-06": 1726,
    "2024-07-07": 1174,
    "2024-07-08": 1188,
    "2024-07-09": 1588,
    "2024-07-10": 1081,
    "2024-07-11": 1647,
    "2024-07-12": 607,
    "2024-07-13": 1083,
    "2024-07-14": 1884,
    "2024-07-15": 1029,
    "2024-07-16": 1746,
    "2024-07-17": 1310,
    "2024-07-18": 1451,
    "2024-07-19": 1655,
    "2024-07-20": 734,
    "2024-07-21": 1086,
    "2024-07-22": 1828,
    "2024-07-23": 1065,
    "2024-07-24": 2189,
    "2024-07-25": 997,
    "2024-07-26": 1857,
    "2024-07-27": 1923,
    "2024-07-28": 1358,
    "2024-07-29": 1347,
    "2024-07-30": 2255,
    "2024-07-31": 1136,
    "2024-08-01": 1437,
    "2024-08-02": 1872,
    "2024-08-03": 1667,
    "2024-08-04": 1102,
    "2024-08-05": 878,
    "2024-08-06": 2146,
    "2024-08-07": 789,
    "2024-08-08": 1396,
    "2024-08-09": 1865,
    "2024-08-10": 1899,
    "2024-08-11": 1393,
    "2024-08-12": 1634,
    "2024-08-13": 1742,
    "2024-08-14": 2111,
    "2024-08-15": 678,
    "2024-08-16": 2092,
    "2024-08-17": 960,
    "2024-08-18": 710,
    "2024-08-19": 2148,
    "2024-08-20": 897,
    "2024-08-21": 542,
    "2024-08-22": 1933,
    "2024-08-23": 2054,
    "2024-08-24": 970,
    "2024-08-25": 1244,
    "2024-08-26": 1223,
    "2024-08-27": 1034,
    "2024-08-28": 1712,
    "2024-08-29": 1721,
    "2024-08-30": 1225,
    "2024-08-31": 791,
    "2024-09-01": 1750,
    "2024-09-02": 1816,
    "2024-09-03": 1369,
    "2024-09-04": 1272,
    "2024-09-05": 1600,
    "2024-09-06": 1673,
    "2024-09-07": 1350,
    "2024-09-08": 1678,
    "2024-09-09": 1242,
    "2024-09-10": 1251,
    "2024-09-11": 1633,
    "2024-09-12": 930,
    "2024-09-13": 1689,
    "2024-09-14": 1684,
    "2024-09-15": 1357,
    "2024-09-16": 592,
    "2024-09-17": 2318,
    "2024-09-18": 2079,
    "2024-09-19": 2210,
    "2024-09-20": 557,
    "2024-09-21": 1123,
    "2024-09-22": 1886,
    "2024-09-23": 1916,
    "2024-09-24": 616,
    "2024-09-25": 1478,
    "2024-09-26": 749,
    "2024-09-27": 2264,
    "2024-09-28": 796,
    "2024-09-29": 2172,
    "2024-09-30": 2052,
    "2024-10-01": 1943,
    "2024-10-02": 1020,
    "2024-10-03": 945,
    "2024-10-04": 813,
    "2024-10-05": 1697,
    "2024-10-06": 1407,
    "2024-10-07": 1371,
    "2024-10-08": 1510,
    "2024-10-09": 2322,
    "2024-10-10": 586,
    "2024-10-11": 564,
    "2024-10-12": 808,
    "2024-10-13": 629,
    "2024-10-14": 1465,
    "2024-10-15": 2011,
    "2024-10-16": 1898,
    "2024-10-17": 1068,
    "2024-10-18": 1165,
    "2024-10-19": 752,
    "2024-10-20": 1769,
    "2024-10-21": 1590,
    "2024-10-22": 1827,
    "2024-10-23": 2167,
    "2024-10-24": 1708,
    "2024-10-25": 654,
    "2024-10-26": 1866,
    "2024-10-27": 2036,
    "2024-10-28": 1402,
    "2024-10-29": 706,
    "2024-10-30": 1395,
    "2024-10-31": 1758,
    "2024-11-01": 1495,
    "2024-11-02": 1090,
    "2024-11-03": 1325,
    "2024-11-04": 1070,
    "2024-11-05": 581,
    "2024-11-06": 1281,
    "2024-11-07": 877,
    "2024-11-08": 1115,
    "2024-11-09": 1408,
    "2024-11-10": 983,
    "2024-11-11": 1381,
    "2024-11-12": 746,
    "2024-11-13": 2326,
    "2024-11-14": 2352,
    "2024-11-15": 1618,
    "2024-11-16": 2205,
    "2024-11-17": 1659,
    "2024-11-18": 1860,
    "2024-11-19": 2230,
    "2024-11-20": 1921,
    "2024-11-21": 1826,
    "2024-11-22": 995,
    "2024-11-23": 1098,
    "2024-11-24": 1891,
    "2024-11-25": 2198,
    "2024-11-26": 2143,
    "2024-11-27": 1169,
    "2024-11-28": 1882,
    "2024-11-29": 1431,
    "2024-11-30": 1422,
    "2024-12-01": 2020,
    "2024-12-02": 563,
    "2024-12-03": 1364,
    "2024-12-04": 1303,
    "2024-12-05": 2044,
    "2024-12-06": 1232,
    "2024-12-07": 1664,
    "2024-12-08": 1807,
    "2024-12-09": 2021,
    "2024-12-10": 655,
    "2024-12-11": 1797,
    "2024-12-12": 1428,
    "2024-12-13": 1203,
    "2024-12-14": 1301,
    "2024-12-15": 1793,
    "2024-12-16": 1909,
    "2024-12-17": 1859,
    "2024-12-18": 1503,
    "2024-12-19": 574,
    "2024-12-20": 1572,
    "2024-12-21": 2047,
    "2024-12-22": 685,
    "2024-12-23": 1055,
    "2024-12-24": 645,
    "2024-12-25": 979,
    "2024-12-26": 2014,
    "2024-12-27": 1982,
    "2024-12-28": 2202,
    "2024-12-29": 2e3,
    "2024-12-30": 890,
    "2024-12-31": 1289,
    "2025-01-01": 732,
    "2025-01-02": 610,
    "2025-01-03": 1317,
    "2025-01-04": 865,
    "2025-01-05": 1105,
    "2025-01-06": 1825,
    "2025-01-07": 2362,
    "2025-01-08": 1290,
    "2025-01-09": 1854,
    "2025-01-10": 1639,
    "2025-01-11": 1798,
    "2025-01-12": 548,
    "2025-01-13": 1567,
    "2025-01-14": 993,
    "2025-01-15": 1593,
    "2025-01-16": 861,
    "2025-01-17": 748,
    "2025-01-18": 996,
    "2025-01-19": 2284,
    "2025-01-20": 2353,
    "2025-01-21": 742,
    "2025-01-22": 1352,
    "2025-01-23": 1413,
    "2025-01-24": 1592,
    "2025-01-25": 1675,
    "2025-01-26": 669,
    "2025-01-27": 879,
    "2025-01-28": 1844,
    "2025-01-29": 571,
    "2025-01-30": 1320,
    "2025-01-31": 1394,
    "2025-02-01": 555,
    "2025-02-02": 1195,
    "2025-02-03": 1650,
    "2025-02-04": 1160,
    "2025-02-05": 1440,
    "2025-02-06": 951,
    "2025-02-07": 1164,
    "2025-02-08": 1221,
    "2025-02-09": 1134,
    "2025-02-10": 653,
    "2025-02-11": 821,
    "2025-02-12": 2163,
    "2025-02-13": 1550,
    "2025-02-14": 1295,
    "2025-02-15": 735,
    "2025-02-16": 1464,
    "2025-02-17": 1920,
    "2025-02-18": 2366,
    "2025-02-19": 2150,
    "2025-02-20": 1111,
    "2025-02-21": 1082,
    "2025-02-22": 620,
    "2025-02-23": 984,
    "2025-02-24": 1965,
    "2025-02-25": 1124,
    "2025-02-26": 650,
    "2025-02-27": 1142,
    "2025-02-28": 1624,
    "2025-03-01": 1365,
    "2025-03-02": 1283,
    "2025-03-03": 2131,
    "2025-03-04": 928,
    "2025-03-05": 1812,
    "2025-03-06": 1538,
    "2025-03-07": 1612,
    "2025-03-08": 1568,
    "2025-03-09": 1946,
    "2025-03-10": 526,
    "2025-03-11": 756,
    "2025-03-12": 1549,
    "2025-03-13": 627,
    "2025-03-14": 2238,
    "2025-03-15": 1765,
    "2025-03-16": 675,
    "2025-03-17": 1516,
    "2025-03-18": 1176,
    "2025-03-19": 1846,
    "2025-03-20": 2037,
    "2025-03-21": 947,
    "2025-03-22": 1e3,
    "2025-03-23": 2130,
    "2025-03-24": 624,
    "2025-03-25": 1141,
    "2025-03-26": 1458,
    "2025-03-27": 991,
    "2025-03-28": 782,
    "2025-03-29": 676,
    "2025-03-30": 938,
    "2025-03-31": 1890,
    "2025-04-01": 1452,
    "2025-04-02": 1690,
    "2025-04-03": 1010,
    "2025-04-04": 1804,
    "2025-04-05": 1794,
    "2025-04-06": 1013,
    "2025-04-07": 857,
    "2025-04-08": 1613,
    "2025-04-09": 1929,
    "2025-04-10": 2212,
    "2025-04-11": 1749,
    "2025-04-12": 697,
    "2025-04-13": 903,
    "2025-04-14": 1103,
    "2025-04-15": 1079,
    "2025-04-16": 1732,
    "2025-04-17": 894,
    "2025-04-18": 1298,
    "2025-04-19": 1980,
    "2025-04-20": 1625,
    "2025-04-21": 2328,
    "2025-04-22": 2285,
    "2025-04-23": 769,
    "2025-04-24": 837,
    "2025-04-25": 2153,
    "2025-04-26": 1604,
    "2025-04-27": 1576,
    "2025-04-28": 1475,
    "2025-04-29": 870,
    "2025-04-30": 1163,
    "2025-05-01": 1191,
    "2025-05-02": 2211,
    "2025-05-03": 1280,
    "2025-05-04": 957,
    "2025-05-05": 1533,
    "2025-05-06": 1679,
    "2025-05-07": 1632,
    "2025-05-08": 1571,
    "2025-05-09": 1801,
    "2025-05-10": 1337,
    "2025-05-11": 637,
    "2025-05-12": 1802,
    "2025-05-13": 1173,
    "2025-05-14": 833,
    "2025-05-15": 1753,
    "2025-05-16": 2070,
    "2025-05-17": 1299,
    "2025-05-18": 1951,
    "2025-05-19": 949,
    "2025-05-20": 2005,
    "2025-05-21": 1496,
    "2025-05-22": 2174,
    "2025-05-23": 1302,
    "2025-05-24": 2351,
    "2025-05-25": 2344,
    "2025-05-26": 1906,
    "2025-05-27": 778,
    "2025-05-28": 1545,
    "2025-05-29": 2177,
    "2025-05-30": 1492,
    "2025-05-31": 1707,
    "2025-06-01": 1762,
    "2025-06-02": 1287,
    "2025-06-03": 1628,
    "2025-06-04": 1752,
    "2025-06-05": 1138,
    "2025-06-06": 660,
    "2025-06-07": 1955,
    "2025-06-08": 1578,
    "2025-06-09": 1897,
    "2025-06-10": 1777,
    "2025-06-11": 1474,
    "2025-06-12": 919,
    "2025-06-13": 898,
    "2025-06-14": 692,
    "2025-06-15": 2024,
    "2025-06-16": 2192,
    "2025-06-17": 1158,
    "2025-06-18": 2099,
    "2025-06-19": 1562,
    "2025-06-20": 2329,
    "2025-06-21": 1524,
    "2025-06-22": 2199,
    "2025-06-23": 1472,
    "2025-06-24": 658,
    "2025-06-25": 1256,
    "2025-06-26": 1122,
    "2025-06-27": 1669,
    "2025-06-28": 1577,
    "2025-06-29": 1579,
    "2025-06-30": 724,
    "2025-07-01": 753,
    "2025-07-02": 547,
    "2025-07-03": 750,
    "2025-07-04": 2141,
    "2025-07-05": 1851,
    "2025-07-06": 2386,
    "2025-07-07": 989,
    "2025-07-08": 1359,
    "2025-07-09": 1379,
    "2025-07-10": 1939,
    "2025-07-11": 1796,
    "2025-07-12": 687,
    "2025-07-13": 740,
    "2025-07-14": 2242,
    "2025-07-15": 1646,
    "2025-07-16": 2324,
    "2025-07-17": 1080,
    "2025-07-18": 2365,
    "2025-07-19": 1547,
    "2025-07-20": 1012,
    "2025-07-21": 2331,
    "2025-07-22": 915,
    "2025-07-23": 1626,
    "2025-07-24": 1509,
    "2025-07-25": 2387,
    "2025-07-26": 1370,
    "2025-07-27": 1542,
    "2025-07-28": 704,
    "2025-07-29": 1629,
    "2025-07-30": 844,
    "2025-07-31": 1856,
    "2025-08-01": 2084,
    "2025-08-02": 2206,
    "2025-08-03": 1627,
    "2025-08-04": 1319,
    "2025-08-05": 925,
    "2025-08-06": 583,
    "2025-08-07": 1145,
    "2025-08-08": 1878,
    "2025-08-09": 2089,
    "2025-08-10": 596,
    "2025-08-11": 1096,
    "2025-08-12": 1429,
    "2025-08-13": 2378,
    "2025-08-14": 2346,
    "2025-08-15": 986,
    "2025-08-16": 2348,
    "2025-08-17": 1640,
    "2025-08-18": 1406,
    "2025-08-19": 1323,
    "2025-08-20": 783,
    "2025-08-21": 1488,
    "2025-08-22": 2185,
    "2025-08-23": 2122,
    "2025-08-24": 980,
    "2025-08-25": 2051,
    "2025-08-26": 1622,
    "2025-08-27": 1842,
    "2025-08-28": 1838,
    "2025-08-29": 2035,
    "2025-08-30": 1540,
    "2025-08-31": 1820,
    "2025-09-01": 1260,
    "2025-09-02": 661,
    "2025-09-03": 1262,
    "2025-09-04": 1583,
    "2025-09-05": 1861,
    "2025-09-06": 1790,
    "2025-09-07": 1803,
    "2025-09-08": 2188,
    "2025-09-09": 1046,
    "2025-09-10": 1821,
    "2025-09-11": 1372,
    "2025-09-12": 1822,
    "2025-09-13": 1254,
    "2025-09-14": 1537,
    "2025-09-15": 1236,
    "2025-09-16": 577,
    "2025-09-17": 1598,
    "2025-09-18": 1030,
    "2025-09-19": 848,
    "2025-09-20": 1424,
    "2025-09-21": 1911,
    "2025-09-22": 1006,
    "2025-09-23": 2232,
    "2025-09-24": 1183,
    "2025-09-25": 2069,
    "2025-09-26": 809,
    "2025-09-27": 779,
    "2025-09-28": 2090,
    "2025-09-29": 863,
    "2025-09-30": 2049,
    "2025-10-01": 630,
    "2025-10-02": 1840,
    "2025-10-03": 1998,
    "2025-10-04": 1037,
    "2025-10-05": 1033,
    "2025-10-06": 1026,
    "2025-10-07": 1924,
    "2025-10-08": 1292,
    "2025-10-09": 909,
    "2025-10-10": 2123,
    "2025-10-11": 609,
    "2025-10-12": 1973,
    "2025-10-13": 1226,
    "2025-10-14": 1905,
    "2025-10-15": 1581,
    "2025-10-16": 2274,
    "2025-10-17": 1944,
    "2025-10-18": 939,
    "2025-10-19": 899,
    "2025-10-20": 1862,
    "2025-10-21": 1373,
    "2025-10-22": 1192,
    "2025-10-23": 1800,
    "2025-10-24": 1009,
    "2025-10-25": 2138,
    "2025-10-26": 1925,
    "2025-10-27": 795,
    "2025-10-28": 1418,
    "2025-10-29": 1231,
    "2025-10-30": 2009,
    "2025-10-31": 2045,
    "2025-11-01": 1864,
    "2025-11-02": 747,
    "2025-11-03": 684,
    "2025-11-04": 1120,
    "2025-11-05": 1208,
    "2025-11-06": 2061,
    "2025-11-07": 2237,
    "2025-11-08": 535,
    "2025-11-09": 1457,
    "2025-11-10": 1631,
    "2025-11-11": 2343,
    "2025-11-12": 2030,
    "2025-11-13": 2330,
    "2025-11-14": 1066,
    "2025-11-15": 725,
    "2025-11-16": 1514,
    "2025-11-17": 1792,
    "2025-11-18": 1693,
    "2025-11-19": 1709,
    "2025-11-20": 522,
    "2025-11-21": 739,
    "2025-11-22": 1585,
    "2025-11-23": 1187,
    "2025-11-24": 943,
    "2025-11-25": 2096,
    "2025-11-26": 787,
    "2025-11-27": 1257,
    "2025-11-28": 2390,
    "2025-11-29": 1258,
    "2025-11-30": 2323,
    "2025-12-01": 2231,
    "2025-12-02": 1617,
    "2025-12-03": 1597,
    "2025-12-04": 916,
    "2025-12-05": 1018,
    "2025-12-06": 1276,
    "2025-12-07": 1430,
    "2025-12-08": 1306,
    "2025-12-09": 1036,
    "2025-12-10": 1497,
    "2025-12-11": 1683,
    "2025-12-12": 2074,
    "2025-12-13": 2050,
    "2025-12-14": 1692,
    "2025-12-15": 1830,
    "2025-12-16": 1345,
    "2025-12-17": 1420,
    "2025-12-18": 1237,
    "2025-12-19": 1839,
    "2025-12-20": 1974,
    "2025-12-21": 1388,
    "2025-12-22": 1213,
    "2025-12-23": 972,
    "2025-12-24": 1619,
    "2025-12-25": 1526,
    "2025-12-26": 1355,
    "2025-12-27": 2137,
    "2025-12-28": 1672,
    "2025-12-29": 1989,
    "2025-12-30": 1489,
    "2025-12-31": 647,
    "2026-01-01": 1566,
    "2026-01-02": 1817,
    "2026-01-03": 2388,
    "2026-01-04": 1327,
    "2026-01-05": 1552,
    "2026-01-06": 2397,
    "2026-01-07": 2057,
    "2026-01-08": 573,
    "2026-01-09": 874,
    "2026-01-10": 1587,
    "2026-01-11": 1377,
    "2026-01-12": 1411,
    "2026-01-13": 1696,
    "2026-01-14": 1957,
    "2026-01-15": 1699,
    "2026-01-16": 1269,
    "2026-01-17": 1334,
    "2026-01-18": 987,
    "2026-01-19": 1380,
    "2026-01-20": 2225,
    "2026-01-21": 1642,
    "2026-01-22": 728,
    "2026-01-23": 1843,
    "2026-01-24": 775,
    "2026-01-25": 914,
    "2026-01-26": 1016,
    "2026-01-27": 1710,
    "2026-01-28": 1442,
    "2026-01-29": 2098,
    "2026-01-30": 1204,
    "2026-01-31": 2073,
    "2026-02-01": 743,
    "2026-02-02": 2398,
    "2026-02-03": 1763,
    "2026-02-04": 1739,
    "2026-02-05": 1779,
    "2026-02-06": 944,
    "2026-02-07": 1443,
    "2026-02-08": 3035,
    "2026-02-09": 1871,
    "2026-02-10": 2152,
    "2026-02-11": 2119,
    "2026-02-12": 1984,
    "2026-02-13": 2396,
    "2026-02-14": 846,
    "2026-02-15": 1404,
    "2026-02-16": 2155,
    "2026-02-17": 4216,
    "2026-02-18": 1261,
    "2026-02-19": 981,
    "2026-02-20": 619,
    "2026-02-21": 2531,
    "2026-02-22": 2184,
    "2026-02-23": 2229,
    "2026-02-24": 1069,
    "2026-02-25": 2327,
    "2026-02-26": 644,
    "2026-02-27": 1711,
    "2026-02-28": 2359,
    "2026-03-01": 1196,
    "2026-03-02": 971,
    "2026-03-03": 3493,
    "2026-03-04": 2105,
    "2026-03-05": 2017,
    "2026-03-06": 4616,
    "2026-03-07": 1733,
    "2026-03-08": 720,
    "2026-03-09": 2293,
    "2026-03-10": 924,
    "2026-03-11": 2224,
    "2026-03-12": 1072,
    "2026-03-13": 784,
    "2026-03-14": 1748,
    "2026-03-15": 3257,
    "2026-03-16": 1806,
    "2026-03-17": 900,
    "2026-03-18": 770,
    "2026-03-19": 788,
    "2026-03-20": 2377,
    "2026-03-21": 597,
    "2026-03-22": 1811,
    "2026-03-23": 2068,
    "2026-03-24": 1008,
    "2026-03-25": 2203,
    "2026-03-26": 2570,
    "2026-03-27": 3406,
    "2026-03-28": 1197,
    "2026-03-29": 709,
    "2026-03-30": 2824,
    "2026-03-31": 1235,
    "2026-04-01": 1981,
    "2026-04-02": 1425,
    "2026-04-03": 603,
    "2026-04-04": 3978,
    "2026-04-05": 1326,
    "2026-04-06": 950,
    "2026-04-07": 1200,
    "2026-04-08": 2217,
    "2026-04-09": 656,
    "2026-04-10": 2728,
    "2026-04-11": 1512,
    "2026-04-12": 884,
    "2026-04-13": 1740,
    "2026-04-14": 714,
    "2026-04-15": 834,
    "2026-04-16": 2363,
    "2026-04-17": 1986,
    "2026-04-18": 2385,
    "2026-04-19": 4230,
    "2026-04-20": 4545,
    "2026-04-21": 2234,
    "2026-04-22": 2226,
    "2026-04-23": 1275,
    "2026-04-24": 1064,
    "2026-04-25": 1907,
    "2026-04-26": 1961,
    "2026-04-27": 595,
    "2026-04-28": 1239,
    "2026-04-29": 2286,
    "2026-04-30": 667,
    "2026-05-01": 544,
    "2026-05-02": 2672,
    "2026-05-03": 1551,
    "2026-05-04": 2270,
    "2026-05-05": 1414,
    "2026-05-06": 1960,
    "2026-05-07": 751,
    "2026-05-08": 1941,
    "2026-05-09": 1947,
    "2026-05-10": 1949,
    "2026-05-11": 2181,
    "2026-05-12": 2805,
    "2026-05-13": 754,
    "2026-05-14": 1845,
    "2026-05-15": 885,
    "2026-05-16": 1423,
    "2026-05-17": 1177,
    "2026-05-18": 670,
    "2026-05-19": 1448,
    "2026-05-20": 851,
    "2026-05-21": 2441,
    "2026-05-22": 871,
    "2026-05-23": 1157,
    "2026-05-24": 614,
    "2026-05-25": 663,
    "2026-05-26": 638,
    "2026-05-27": 2170,
    "2026-05-28": 2389,
    "2026-05-29": 2164,
    "2026-05-30": 4134,
    "2026-05-31": 1976,
    "2026-06-01": 1559,
    "2026-06-02": 1635,
    "2026-06-03": 1109,
    "2026-06-04": 2015,
    "2026-06-05": 1353,
    "2026-06-06": 1616,
    "2026-06-07": 4375,
    "2026-06-08": 1093,
    "2026-06-09": 4552,
    "2026-06-10": 1114,
    "2026-06-11": 2077,
    "2026-06-12": 2664,
    "2026-06-13": 758,
    "2026-06-14": 999,
    "2026-06-15": 1230,
    "2026-06-16": 856,
    "2026-06-17": 1735,
    "2026-06-18": 1736,
    "2026-06-19": 2354,
    "2026-06-20": 1467,
    "2026-06-21": 2190,
    "2026-06-22": 1557,
    "2026-06-23": 2082,
    "2026-06-24": 673,
    "2026-06-25": 1609,
    "2026-06-26": 2416,
    "2026-06-27": 1653,
    "2026-06-28": 1094,
    "2026-06-29": 1665,
    "2026-06-30": 1184,
    "2026-07-01": 937,
    "2026-07-02": 2395,
    "2026-07-03": 2559,
    "2026-07-04": 1212,
    "2026-07-05": 1108,
    "2026-07-06": 1910,
    "2026-07-07": 1967,
    "2026-07-08": 1620,
    "2026-07-09": 1137,
    "2026-07-10": 1506,
    "2026-07-11": 1945,
    "2026-07-12": 1760,
    "2026-07-13": 4269,
    "2026-07-14": 1180,
    "2026-07-15": 2372,
    "2026-07-16": 1799,
    "2026-07-17": 1719,
    "2026-07-18": 1737,
    "2026-07-19": 1575
};
function zt(r, e) {
    return r == null || e == null ? NaN : r < e ? -1 : r > e ? 1 : r >= e ? 0 : NaN
}
function b2(r, e) {
    return r == null || e == null ? NaN : e < r ? -1 : e > r ? 1 : e >= r ? 0 : NaN
}
function Eo(r) {
    let e, t, n;
    r.length !== 2 ? (e = zt,
    t = (o, a) => zt(r(o), a),
    n = (o, a) => r(o) - a) : (e = r === zt || r === b2 ? r : v2,
    t = r,
    n = r);
    function s(o, a, f=0, u=o.length) {
        if (f < u) {
            if (e(a, a) !== 0)
                return u;
            do {
                const c = f + u >>> 1;
                t(o[c], a) < 0 ? f = c + 1 : u = c
            } while (f < u)
        }
        return f
    }
    function l(o, a, f=0, u=o.length) {
        if (f < u) {
            if (e(a, a) !== 0)
                return u;
            do {
                const c = f + u >>> 1;
                t(o[c], a) <= 0 ? f = c + 1 : u = c
            } while (f < u)
        }
        return f
    }
    function i(o, a, f=0, u=o.length) {
        const c = s(o, a, f, u - 1);
        return c > f && n(o[c - 1], a) > -n(o[c], a) ? c - 1 : c
    }
    return {
        left: s,
        center: i,
        right: l
    }
}
function v2() {
    return 0
}
function w2(r) {
    return r === null ? NaN : +r
}
const Io = Eo(zt)
  , Jb = Io.right
  , y2 = Io.left;
Eo(w2).center;
function k2(r, e) {
    var t = 0
      , n = 0;
    return Float64Array.from(r, e === void 0 ? s => t += +s || 0 : s => t += +e(s, n++, r) || 0)
}
function Vr(r, e) {
    let t;
    if (e === void 0)
        for (const n of r)
            n != null && (t < n || t === void 0 && n >= n) && (t = n);
    else {
        let n = -1;
        for (let s of r)
            (s = e(s, ++n, r)) != null && (t < s || t === void 0 && s >= s) && (t = s)
    }
    return t
}
function T2(r, e) {
    let t = 0
      , n = 0;
    if (e === void 0)
        for (let s of r)
            s != null && (s = +s) >= s && (++t,
            n += s);
    else {
        let s = -1;
        for (let l of r)
            (l = e(l, ++s, r)) != null && (l = +l) >= l && (++t,
            n += l)
    }
    if (t)
        return n / t
}
function nt(r, e) {
    let t = 0;
    if (e === void 0)
        for (let n of r)
            (n = +n) && (t += n);
    else {
        let n = -1;
        for (let s of r)
            (s = +e(s, ++n, r)) && (t += s)
    }
    return t
}
var Kt = 0, mn = 0, fn = 0, Ao = 1e3, Un, gn, Fn = 0, Lt = 0, rr = 0, vn = typeof performance == "object" && performance.now ? performance : Date, Co = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(r) {
    setTimeout(r, 17)
}
;
function So() {
    return Lt || (Co(E2),
    Lt = vn.now() + rr)
}
function E2() {
    Lt = 0
}
function Gr() {
    this._call = this._time = this._next = null
}
Gr.prototype = Po.prototype = {
    constructor: Gr,
    restart: function(r, e, t) {
        if (typeof r != "function")
            throw new TypeError("callback is not a function");
        t = (t == null ? So() : +t) + (e == null ? 0 : +e),
        !this._next && gn !== this && (gn ? gn._next = this : Un = this,
        gn = this),
        this._call = r,
        this._time = t,
        zr()
    },
    stop: function() {
        this._call && (this._call = null,
        this._time = 1 / 0,
        zr())
    }
};
function Po(r, e, t) {
    var n = new Gr;
    return n.restart(r, e, t),
    n
}
function I2() {
    So(),
    ++Kt;
    for (var r = Un, e; r; )
        (e = Lt - r._time) >= 0 && r._call.call(void 0, e),
        r = r._next;
    --Kt
}
function Rs() {
    Lt = (Fn = vn.now()) + rr,
    Kt = mn = 0;
    try {
        I2()
    } finally {
        Kt = 0,
        C2(),
        Lt = 0
    }
}
function A2() {
    var r = vn.now()
      , e = r - Fn;
    e > Ao && (rr -= e,
    Fn = r)
}
function C2() {
    for (var r, e = Un, t, n = 1 / 0; e; )
        e._call ? (n > e._time && (n = e._time),
        r = e,
        e = e._next) : (t = e._next,
        e._next = null,
        e = r ? r._next = t : Un = t);
    gn = r,
    zr(n)
}
function zr(r) {
    if (!Kt) {
        mn && (mn = clearTimeout(mn));
        var e = r - Lt;
        e > 24 ? (r < 1 / 0 && (mn = setTimeout(Rs, r - vn.now() - rr)),
        fn && (fn = clearInterval(fn))) : (fn || (Fn = vn.now(),
        fn = setInterval(A2, Ao)),
        Kt = 1,
        Co(Rs))
    }
}
var Bn = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
function ns(r) {
    return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r
}
function S2() {
    this.__data__ = [],
    this.size = 0
}
var P2 = S2;
function O2(r, e) {
    return r === e || r !== r && e !== e
}
var Oo = O2
  , M2 = Oo;
function j2(r, e) {
    for (var t = r.length; t--; )
        if (M2(r[t][0], e))
            return t;
    return -1
}
var sr = j2
  , B2 = sr
  , N2 = Array.prototype
  , D2 = N2.splice;
function L2(r) {
    var e = this.__data__
      , t = B2(e, r);
    if (t < 0)
        return !1;
    var n = e.length - 1;
    return t == n ? e.pop() : D2.call(e, t, 1),
    --this.size,
    !0
}
var R2 = L2
  , V2 = sr;
function G2(r) {
    var e = this.__data__
      , t = V2(e, r);
    return t < 0 ? void 0 : e[t][1]
}
var z2 = G2
  , W2 = sr;
function U2(r) {
    return W2(this.__data__, r) > -1
}
var F2 = U2
  , H2 = sr;
function q2(r, e) {
    var t = this.__data__
      , n = H2(t, r);
    return n < 0 ? (++this.size,
    t.push([r, e])) : t[n][1] = e,
    this
}
var K2 = q2
  , Y2 = P2
  , Z2 = R2
  , X2 = z2
  , Q2 = F2
  , J2 = K2;
function xt(r) {
    var e = -1
      , t = r == null ? 0 : r.length;
    for (this.clear(); ++e < t; ) {
        var n = r[e];
        this.set(n[0], n[1])
    }
}
xt.prototype.clear = Y2;
xt.prototype.delete = Z2;
xt.prototype.get = X2;
xt.prototype.has = Q2;
xt.prototype.set = J2;
var lr = xt
  , x2 = lr;
function $2() {
    this.__data__ = new x2,
    this.size = 0
}
var e0 = $2;
function t0(r) {
    var e = this.__data__
      , t = e.delete(r);
    return this.size = e.size,
    t
}
var n0 = t0;
function r0(r) {
    return this.__data__.get(r)
}
var s0 = r0;
function l0(r) {
    return this.__data__.has(r)
}
var i0 = l0
  , o0 = typeof Bn == "object" && Bn && Bn.Object === Object && Bn
  , Mo = o0
  , a0 = Mo
  , f0 = typeof self == "object" && self && self.Object === Object && self
  , u0 = a0 || f0 || Function("return this")()
  , pt = u0
  , c0 = pt
  , d0 = c0.Symbol
  , rs = d0
  , Vs = rs
  , jo = Object.prototype
  , h0 = jo.hasOwnProperty
  , m0 = jo.toString
  , un = Vs ? Vs.toStringTag : void 0;
function g0(r) {
    var e = h0.call(r, un)
      , t = r[un];
    try {
        r[un] = void 0;
        var n = !0
    } catch (l) {}
    var s = m0.call(r);
    return n && (e ? r[un] = t : delete r[un]),
    s
}
var p0 = g0
  , _0 = Object.prototype
  , b0 = _0.toString;
function v0(r) {
    return b0.call(r)
}
var w0 = v0
  , Gs = rs
  , y0 = p0
  , k0 = w0
  , T0 = "[object Null]"
  , E0 = "[object Undefined]"
  , zs = Gs ? Gs.toStringTag : void 0;
function I0(r) {
    return r == null ? r === void 0 ? E0 : T0 : zs && zs in Object(r) ? y0(r) : k0(r)
}
var ir = I0;
function A0(r) {
    var e = typeof r;
    return r != null && (e == "object" || e == "function")
}
var In = A0
  , C0 = ir
  , S0 = In
  , P0 = "[object AsyncFunction]"
  , O0 = "[object Function]"
  , M0 = "[object GeneratorFunction]"
  , j0 = "[object Proxy]";
function B0(r) {
    if (!S0(r))
        return !1;
    var e = C0(r);
    return e == O0 || e == M0 || e == P0 || e == j0
}
var Bo = B0
  , N0 = pt
  , D0 = N0["__core-js_shared__"]
  , L0 = D0
  , Cr = L0
  , Ws = function() {
    var r = /[^.]+$/.exec(Cr && Cr.keys && Cr.keys.IE_PROTO || "");
    return r ? "Symbol(src)_1." + r : ""
}();
function R0(r) {
    return !!Ws && Ws in r
}
var V0 = R0
  , G0 = Function.prototype
  , z0 = G0.toString;
function W0(r) {
    if (r != null) {
        try {
            return z0.call(r)
        } catch (e) {}
        try {
            return r + ""
        } catch (e) {}
    }
    return ""
}
var No = W0
  , U0 = Bo
  , F0 = V0
  , H0 = In
  , q0 = No
  , K0 = /[\\^$.*+?()[\]{}|]/g
  , Y0 = /^\[object .+?Constructor\]$/
  , Z0 = Function.prototype
  , X0 = Object.prototype
  , Q0 = Z0.toString
  , J0 = X0.hasOwnProperty
  , x0 = RegExp("^" + Q0.call(J0).replace(K0, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function $0(r) {
    if (!H0(r) || F0(r))
        return !1;
    var e = U0(r) ? x0 : Y0;
    return e.test(q0(r))
}
var e1 = $0;
function t1(r, e) {
    return r == null ? void 0 : r[e]
}
var n1 = t1
  , r1 = e1
  , s1 = n1;
function l1(r, e) {
    var t = s1(r, e);
    return r1(t) ? t : void 0
}
var Rt = l1
  , i1 = Rt
  , o1 = pt
  , a1 = i1(o1, "Map")
  , ss = a1
  , f1 = Rt
  , u1 = f1(Object, "create")
  , or = u1
  , Us = or;
function c1() {
    this.__data__ = Us ? Us(null) : {},
    this.size = 0
}
var d1 = c1;
function h1(r) {
    var e = this.has(r) && delete this.__data__[r];
    return this.size -= e ? 1 : 0,
    e
}
var m1 = h1
  , g1 = or
  , p1 = "__lodash_hash_undefined__"
  , _1 = Object.prototype
  , b1 = _1.hasOwnProperty;
function v1(r) {
    var e = this.__data__;
    if (g1) {
        var t = e[r];
        return t === p1 ? void 0 : t
    }
    return b1.call(e, r) ? e[r] : void 0
}
var w1 = v1
  , y1 = or
  , k1 = Object.prototype
  , T1 = k1.hasOwnProperty;
function E1(r) {
    var e = this.__data__;
    return y1 ? e[r] !== void 0 : T1.call(e, r)
}
var I1 = E1
  , A1 = or
  , C1 = "__lodash_hash_undefined__";
function S1(r, e) {
    var t = this.__data__;
    return this.size += this.has(r) ? 0 : 1,
    t[r] = A1 && e === void 0 ? C1 : e,
    this
}
var P1 = S1
  , O1 = d1
  , M1 = m1
  , j1 = w1
  , B1 = I1
  , N1 = P1;
function $t(r) {
    var e = -1
      , t = r == null ? 0 : r.length;
    for (this.clear(); ++e < t; ) {
        var n = r[e];
        this.set(n[0], n[1])
    }
}
$t.prototype.clear = O1;
$t.prototype.delete = M1;
$t.prototype.get = j1;
$t.prototype.has = B1;
$t.prototype.set = N1;
var D1 = $t
  , Fs = D1
  , L1 = lr
  , R1 = ss;
function V1() {
    this.size = 0,
    this.__data__ = {
        hash: new Fs,
        map: new (R1 || L1),
        string: new Fs
    }
}
var G1 = V1;
function z1(r) {
    var e = typeof r;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? r !== "__proto__" : r === null
}
var W1 = z1
  , U1 = W1;
function F1(r, e) {
    var t = r.__data__;
    return U1(e) ? t[typeof e == "string" ? "string" : "hash"] : t.map
}
var ar = F1
  , H1 = ar;
function q1(r) {
    var e = H1(this, r).delete(r);
    return this.size -= e ? 1 : 0,
    e
}
var K1 = q1
  , Y1 = ar;
function Z1(r) {
    return Y1(this, r).get(r)
}
var X1 = Z1
  , Q1 = ar;
function J1(r) {
    return Q1(this, r).has(r)
}
var x1 = J1
  , $1 = ar;
function ef(r, e) {
    var t = $1(this, r)
      , n = t.size;
    return t.set(r, e),
    this.size += t.size == n ? 0 : 1,
    this
}
var tf = ef
  , nf = G1
  , rf = K1
  , sf = X1
  , lf = x1
  , of = tf;
function en(r) {
    var e = -1
      , t = r == null ? 0 : r.length;
    for (this.clear(); ++e < t; ) {
        var n = r[e];
        this.set(n[0], n[1])
    }
}
en.prototype.clear = nf;
en.prototype.delete = rf;
en.prototype.get = sf;
en.prototype.has = lf;
en.prototype.set = of;
var af = en
  , ff = lr
  , uf = ss
  , cf = af
  , df = 200;
function hf(r, e) {
    var t = this.__data__;
    if (t instanceof ff) {
        var n = t.__data__;
        if (!uf || n.length < df - 1)
            return n.push([r, e]),
            this.size = ++t.size,
            this;
        t = this.__data__ = new cf(n)
    }
    return t.set(r, e),
    this.size = t.size,
    this
}
var mf = hf
  , gf = lr
  , pf = e0
  , _f = n0
  , bf = s0
  , vf = i0
  , wf = mf;
function tn(r) {
    var e = this.__data__ = new gf(r);
    this.size = e.size
}
tn.prototype.clear = pf;
tn.prototype.delete = _f;
tn.prototype.get = bf;
tn.prototype.has = vf;
tn.prototype.set = wf;
var yf = tn;
function kf(r, e) {
    for (var t = -1, n = r == null ? 0 : r.length; ++t < n && e(r[t], t, r) !== !1; )
        ;
    return r
}
var Tf = kf
  , Ef = Rt
  , If = function() {
    try {
        var r = Ef(Object, "defineProperty");
        return r({}, "", {}),
        r
    } catch (e) {}
}()
  , Af = If
  , Hs = Af;
function Cf(r, e, t) {
    e == "__proto__" && Hs ? Hs(r, e, {
        configurable: !0,
        enumerable: !0,
        value: t,
        writable: !0
    }) : r[e] = t
}
var Do = Cf
  , Sf = Do
  , Pf = Oo
  , Of = Object.prototype
  , Mf = Of.hasOwnProperty;
function jf(r, e, t) {
    var n = r[e];
    (!(Mf.call(r, e) && Pf(n, t)) || t === void 0 && !(e in r)) && Sf(r, e, t)
}
var Lo = jf
  , Bf = Lo
  , Nf = Do;
function Df(r, e, t, n) {
    var s = !t;
    t || (t = {});
    for (var l = -1, i = e.length; ++l < i; ) {
        var o = e[l]
          , a = n ? n(t[o], r[o], o, t, r) : void 0;
        a === void 0 && (a = r[o]),
        s ? Nf(t, o, a) : Bf(t, o, a)
    }
    return t
}
var fr = Df;
function Lf(r, e) {
    for (var t = -1, n = Array(r); ++t < r; )
        n[t] = e(t);
    return n
}
var Rf = Lf;
function Vf(r) {
    return r != null && typeof r == "object"
}
var An = Vf
  , Gf = ir
  , zf = An
  , Wf = "[object Arguments]";
function Uf(r) {
    return zf(r) && Gf(r) == Wf
}
var Ff = Uf
  , qs = Ff
  , Hf = An
  , Ro = Object.prototype
  , qf = Ro.hasOwnProperty
  , Kf = Ro.propertyIsEnumerable
  , Yf = qs(function() {
    return arguments
}()) ? qs : function(r) {
    return Hf(r) && qf.call(r, "callee") && !Kf.call(r, "callee")
}
  , Zf = Yf
  , Xf = Array.isArray
  , ls = Xf
  , Hn = {
    exports: {}
};
function Qf() {
    return !1
}
var Jf = Qf;
Hn.exports;
(function(r, e) {
    var t = pt
      , n = Jf
      , s = e && !e.nodeType && e
      , l = s && !0 && r && !r.nodeType && r
      , i = l && l.exports === s
      , o = i ? t.Buffer : void 0
      , a = o ? o.isBuffer : void 0
      , f = a || n;
    r.exports = f
}
)(Hn, Hn.exports);
var Vo = Hn.exports
  , xf = 9007199254740991
  , $f = /^(?:0|[1-9]\d*)$/;
function eu(r, e) {
    var t = typeof r;
    return e = e == null ? xf : e,
    !!e && (t == "number" || t != "symbol" && $f.test(r)) && r > -1 && r % 1 == 0 && r < e
}
var tu = eu
  , nu = 9007199254740991;
function ru(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= nu
}
var Go = ru
  , su = ir
  , lu = Go
  , iu = An
  , ou = "[object Arguments]"
  , au = "[object Array]"
  , fu = "[object Boolean]"
  , uu = "[object Date]"
  , cu = "[object Error]"
  , du = "[object Function]"
  , hu = "[object Map]"
  , mu = "[object Number]"
  , gu = "[object Object]"
  , pu = "[object RegExp]"
  , _u = "[object Set]"
  , bu = "[object String]"
  , vu = "[object WeakMap]"
  , wu = "[object ArrayBuffer]"
  , yu = "[object DataView]"
  , ku = "[object Float32Array]"
  , Tu = "[object Float64Array]"
  , Eu = "[object Int8Array]"
  , Iu = "[object Int16Array]"
  , Au = "[object Int32Array]"
  , Cu = "[object Uint8Array]"
  , Su = "[object Uint8ClampedArray]"
  , Pu = "[object Uint16Array]"
  , Ou = "[object Uint32Array]"
  , je = {};
je[ku] = je[Tu] = je[Eu] = je[Iu] = je[Au] = je[Cu] = je[Su] = je[Pu] = je[Ou] = !0;
je[ou] = je[au] = je[wu] = je[fu] = je[yu] = je[uu] = je[cu] = je[du] = je[hu] = je[mu] = je[gu] = je[pu] = je[_u] = je[bu] = je[vu] = !1;
function Mu(r) {
    return iu(r) && lu(r.length) && !!je[su(r)]
}
var ju = Mu;
function Bu(r) {
    return function(e) {
        return r(e)
    }
}
var is = Bu
  , qn = {
    exports: {}
};
qn.exports;
(function(r, e) {
    var t = Mo
      , n = e && !e.nodeType && e
      , s = n && !0 && r && !r.nodeType && r
      , l = s && s.exports === n
      , i = l && t.process
      , o = function() {
        try {
            var a = s && s.require && s.require("util").types;
            return a || i && i.binding && i.binding("util")
        } catch (f) {}
    }();
    r.exports = o
}
)(qn, qn.exports);
var os = qn.exports
  , Nu = ju
  , Du = is
  , Ks = os
  , Ys = Ks && Ks.isTypedArray
  , Lu = Ys ? Du(Ys) : Nu
  , Ru = Lu
  , Vu = Rf
  , Gu = Zf
  , zu = ls
  , Wu = Vo
  , Uu = tu
  , Fu = Ru
  , Hu = Object.prototype
  , qu = Hu.hasOwnProperty;
function Ku(r, e) {
    var t = zu(r)
      , n = !t && Gu(r)
      , s = !t && !n && Wu(r)
      , l = !t && !n && !s && Fu(r)
      , i = t || n || s || l
      , o = i ? Vu(r.length, String) : []
      , a = o.length;
    for (var f in r)
        (e || qu.call(r, f)) && !(i && (f == "length" || s && (f == "offset" || f == "parent") || l && (f == "buffer" || f == "byteLength" || f == "byteOffset") || Uu(f, a))) && o.push(f);
    return o
}
var zo = Ku
  , Yu = Object.prototype;
function Zu(r) {
    var e = r && r.constructor
      , t = typeof e == "function" && e.prototype || Yu;
    return r === t
}
var as = Zu;
function Xu(r, e) {
    return function(t) {
        return r(e(t))
    }
}
var Wo = Xu
  , Qu = Wo
  , Ju = Qu(Object.keys, Object)
  , xu = Ju
  , $u = as
  , ec = xu
  , tc = Object.prototype
  , nc = tc.hasOwnProperty;
function rc(r) {
    if (!$u(r))
        return ec(r);
    var e = [];
    for (var t in Object(r))
        nc.call(r, t) && t != "constructor" && e.push(t);
    return e
}
var sc = rc
  , lc = Bo
  , ic = Go;
function oc(r) {
    return r != null && ic(r.length) && !lc(r)
}
var Uo = oc
  , ac = zo
  , fc = sc
  , uc = Uo;
function cc(r) {
    return uc(r) ? ac(r) : fc(r)
}
var fs = cc
  , dc = fr
  , hc = fs;
function mc(r, e) {
    return r && dc(e, hc(e), r)
}
var gc = mc;
function pc(r) {
    var e = [];
    if (r != null)
        for (var t in Object(r))
            e.push(t);
    return e
}
var _c = pc
  , bc = In
  , vc = as
  , wc = _c
  , yc = Object.prototype
  , kc = yc.hasOwnProperty;
function Tc(r) {
    if (!bc(r))
        return wc(r);
    var e = vc(r)
      , t = [];
    for (var n in r)
        n == "constructor" && (e || !kc.call(r, n)) || t.push(n);
    return t
}
var Ec = Tc
  , Ic = zo
  , Ac = Ec
  , Cc = Uo;
function Sc(r) {
    return Cc(r) ? Ic(r, !0) : Ac(r)
}
var us = Sc
  , Pc = fr
  , Oc = us;
function Mc(r, e) {
    return r && Pc(e, Oc(e), r)
}
var jc = Mc
  , Kn = {
    exports: {}
};
Kn.exports;
(function(r, e) {
    var t = pt
      , n = e && !e.nodeType && e
      , s = n && !0 && r && !r.nodeType && r
      , l = s && s.exports === n
      , i = l ? t.Buffer : void 0
      , o = i ? i.allocUnsafe : void 0;
    function a(f, u) {
        if (u)
            return f.slice();
        var c = f.length
          , d = o ? o(c) : new f.constructor(c);
        return f.copy(d),
        d
    }
    r.exports = a
}
)(Kn, Kn.exports);
var Bc = Kn.exports;
function Nc(r, e) {
    var t = -1
      , n = r.length;
    for (e || (e = Array(n)); ++t < n; )
        e[t] = r[t];
    return e
}
var Dc = Nc;
function Lc(r, e) {
    for (var t = -1, n = r == null ? 0 : r.length, s = 0, l = []; ++t < n; ) {
        var i = r[t];
        e(i, t, r) && (l[s++] = i)
    }
    return l
}
var Rc = Lc;
function Vc() {
    return []
}
var Fo = Vc
  , Gc = Rc
  , zc = Fo
  , Wc = Object.prototype
  , Uc = Wc.propertyIsEnumerable
  , Zs = Object.getOwnPropertySymbols
  , Fc = Zs ? function(r) {
    return r == null ? [] : (r = Object(r),
    Gc(Zs(r), function(e) {
        return Uc.call(r, e)
    }))
}
: zc
  , cs = Fc
  , Hc = fr
  , qc = cs;
function Kc(r, e) {
    return Hc(r, qc(r), e)
}
var Yc = Kc;
function Zc(r, e) {
    for (var t = -1, n = e.length, s = r.length; ++t < n; )
        r[s + t] = e[t];
    return r
}
var Ho = Zc
  , Xc = Wo
  , Qc = Xc(Object.getPrototypeOf, Object)
  , qo = Qc
  , Jc = Ho
  , xc = qo
  , $c = cs
  , ed = Fo
  , td = Object.getOwnPropertySymbols
  , nd = td ? function(r) {
    for (var e = []; r; )
        Jc(e, $c(r)),
        r = xc(r);
    return e
}
: ed
  , Ko = nd
  , rd = fr
  , sd = Ko;
function ld(r, e) {
    return rd(r, sd(r), e)
}
var id = ld
  , od = Ho
  , ad = ls;
function fd(r, e, t) {
    var n = e(r);
    return ad(r) ? n : od(n, t(r))
}
var Yo = fd
  , ud = Yo
  , cd = cs
  , dd = fs;
function hd(r) {
    return ud(r, dd, cd)
}
var md = hd
  , gd = Yo
  , pd = Ko
  , _d = us;
function bd(r) {
    return gd(r, _d, pd)
}
var vd = bd
  , wd = Rt
  , yd = pt
  , kd = wd(yd, "DataView")
  , Td = kd
  , Ed = Rt
  , Id = pt
  , Ad = Ed(Id, "Promise")
  , Cd = Ad
  , Sd = Rt
  , Pd = pt
  , Od = Sd(Pd, "Set")
  , Md = Od
  , jd = Rt
  , Bd = pt
  , Nd = jd(Bd, "WeakMap")
  , Dd = Nd
  , Wr = Td
  , Ur = ss
  , Fr = Cd
  , Hr = Md
  , qr = Dd
  , Zo = ir
  , nn = No
  , Xs = "[object Map]"
  , Ld = "[object Object]"
  , Qs = "[object Promise]"
  , Js = "[object Set]"
  , xs = "[object WeakMap]"
  , $s = "[object DataView]"
  , Rd = nn(Wr)
  , Vd = nn(Ur)
  , Gd = nn(Fr)
  , zd = nn(Hr)
  , Wd = nn(qr)
  , Bt = Zo;
(Wr && Bt(new Wr(new ArrayBuffer(1))) != $s || Ur && Bt(new Ur) != Xs || Fr && Bt(Fr.resolve()) != Qs || Hr && Bt(new Hr) != Js || qr && Bt(new qr) != xs) && (Bt = function(r) {
    var e = Zo(r)
      , t = e == Ld ? r.constructor : void 0
      , n = t ? nn(t) : "";
    if (n)
        switch (n) {
        case Rd:
            return $s;
        case Vd:
            return Xs;
        case Gd:
            return Qs;
        case zd:
            return Js;
        case Wd:
            return xs
        }
    return e
}
);
var ds = Bt
  , Ud = Object.prototype
  , Fd = Ud.hasOwnProperty;
function Hd(r) {
    var e = r.length
      , t = new r.constructor(e);
    return e && typeof r[0] == "string" && Fd.call(r, "index") && (t.index = r.index,
    t.input = r.input),
    t
}
var qd = Hd
  , Kd = pt
  , Yd = Kd.Uint8Array
  , Zd = Yd
  , el = Zd;
function Xd(r) {
    var e = new r.constructor(r.byteLength);
    return new el(e).set(new el(r)),
    e
}
var hs = Xd
  , Qd = hs;
function Jd(r, e) {
    var t = e ? Qd(r.buffer) : r.buffer;
    return new r.constructor(t,r.byteOffset,r.byteLength)
}
var xd = Jd
  , $d = /\w*$/;
function eh(r) {
    var e = new r.constructor(r.source,$d.exec(r));
    return e.lastIndex = r.lastIndex,
    e
}
var th = eh
  , tl = rs
  , nl = tl ? tl.prototype : void 0
  , rl = nl ? nl.valueOf : void 0;
function nh(r) {
    return rl ? Object(rl.call(r)) : {}
}
var rh = nh
  , sh = hs;
function lh(r, e) {
    var t = e ? sh(r.buffer) : r.buffer;
    return new r.constructor(t,r.byteOffset,r.length)
}
var ih = lh
  , oh = hs
  , ah = xd
  , fh = th
  , uh = rh
  , ch = ih
  , dh = "[object Boolean]"
  , hh = "[object Date]"
  , mh = "[object Map]"
  , gh = "[object Number]"
  , ph = "[object RegExp]"
  , _h = "[object Set]"
  , bh = "[object String]"
  , vh = "[object Symbol]"
  , wh = "[object ArrayBuffer]"
  , yh = "[object DataView]"
  , kh = "[object Float32Array]"
  , Th = "[object Float64Array]"
  , Eh = "[object Int8Array]"
  , Ih = "[object Int16Array]"
  , Ah = "[object Int32Array]"
  , Ch = "[object Uint8Array]"
  , Sh = "[object Uint8ClampedArray]"
  , Ph = "[object Uint16Array]"
  , Oh = "[object Uint32Array]";
function Mh(r, e, t) {
    var n = r.constructor;
    switch (e) {
    case wh:
        return oh(r);
    case dh:
    case hh:
        return new n(+r);
    case yh:
        return ah(r, t);
    case kh:
    case Th:
    case Eh:
    case Ih:
    case Ah:
    case Ch:
    case Sh:
    case Ph:
    case Oh:
        return ch(r, t);
    case mh:
        return new n;
    case gh:
    case bh:
        return new n(r);
    case ph:
        return fh(r);
    case _h:
        return new n;
    case vh:
        return uh(r)
    }
}
var jh = Mh
  , Bh = In
  , sl = Object.create
  , Nh = function() {
    function r() {}
    return function(e) {
        if (!Bh(e))
            return {};
        if (sl)
            return sl(e);
        r.prototype = e;
        var t = new r;
        return r.prototype = void 0,
        t
    }
}()
  , Dh = Nh
  , Lh = Dh
  , Rh = qo
  , Vh = as;
function Gh(r) {
    return typeof r.constructor == "function" && !Vh(r) ? Lh(Rh(r)) : {}
}
var zh = Gh
  , Wh = ds
  , Uh = An
  , Fh = "[object Map]";
function Hh(r) {
    return Uh(r) && Wh(r) == Fh
}
var qh = Hh
  , Kh = qh
  , Yh = is
  , ll = os
  , il = ll && ll.isMap
  , Zh = il ? Yh(il) : Kh
  , Xh = Zh
  , Qh = ds
  , Jh = An
  , xh = "[object Set]";
function $h(r) {
    return Jh(r) && Qh(r) == xh
}
var em = $h
  , tm = em
  , nm = is
  , ol = os
  , al = ol && ol.isSet
  , rm = al ? nm(al) : tm
  , sm = rm
  , lm = yf
  , im = Tf
  , om = Lo
  , am = gc
  , fm = jc
  , um = Bc
  , cm = Dc
  , dm = Yc
  , hm = id
  , mm = md
  , gm = vd
  , pm = ds
  , _m = qd
  , bm = jh
  , vm = zh
  , wm = ls
  , ym = Vo
  , km = Xh
  , Tm = In
  , Em = sm
  , Im = fs
  , Am = us
  , Cm = 1
  , Sm = 2
  , Pm = 4
  , Xo = "[object Arguments]"
  , Om = "[object Array]"
  , Mm = "[object Boolean]"
  , jm = "[object Date]"
  , Bm = "[object Error]"
  , Qo = "[object Function]"
  , Nm = "[object GeneratorFunction]"
  , Dm = "[object Map]"
  , Lm = "[object Number]"
  , Jo = "[object Object]"
  , Rm = "[object RegExp]"
  , Vm = "[object Set]"
  , Gm = "[object String]"
  , zm = "[object Symbol]"
  , Wm = "[object WeakMap]"
  , Um = "[object ArrayBuffer]"
  , Fm = "[object DataView]"
  , Hm = "[object Float32Array]"
  , qm = "[object Float64Array]"
  , Km = "[object Int8Array]"
  , Ym = "[object Int16Array]"
  , Zm = "[object Int32Array]"
  , Xm = "[object Uint8Array]"
  , Qm = "[object Uint8ClampedArray]"
  , Jm = "[object Uint16Array]"
  , xm = "[object Uint32Array]"
  , Pe = {};
Pe[Xo] = Pe[Om] = Pe[Um] = Pe[Fm] = Pe[Mm] = Pe[jm] = Pe[Hm] = Pe[qm] = Pe[Km] = Pe[Ym] = Pe[Zm] = Pe[Dm] = Pe[Lm] = Pe[Jo] = Pe[Rm] = Pe[Vm] = Pe[Gm] = Pe[zm] = Pe[Xm] = Pe[Qm] = Pe[Jm] = Pe[xm] = !0;
Pe[Bm] = Pe[Qo] = Pe[Wm] = !1;
function Rn(r, e, t, n, s, l) {
    var i, o = e & Cm, a = e & Sm, f = e & Pm;
    if (t && (i = s ? t(r, n, s, l) : t(r)),
    i !== void 0)
        return i;
    if (!Tm(r))
        return r;
    var u = wm(r);
    if (u) {
        if (i = _m(r),
        !o)
            return cm(r, i)
    } else {
        var c = pm(r)
          , d = c == Qo || c == Nm;
        if (ym(r))
            return um(r, o);
        if (c == Jo || c == Xo || d && !s) {
            if (i = a || d ? {} : vm(r),
            !o)
                return a ? hm(r, fm(i, r)) : dm(r, am(i, r))
        } else {
            if (!Pe[c])
                return s ? r : {};
            i = bm(r, c, o)
        }
    }
    l || (l = new lm);
    var h = l.get(r);
    if (h)
        return h;
    l.set(r, i),
    Em(r) ? r.forEach(function(m) {
        i.add(Rn(m, e, t, m, r, l))
    }) : km(r) && r.forEach(function(m, v) {
        i.set(v, Rn(m, e, t, v, r, l))
    });
    var _ = f ? a ? gm : mm : a ? Am : Im
      , b = u ? void 0 : _(r);
    return im(b || r, function(m, v) {
        b && (v = m,
        m = r[v]),
        om(i, v, Rn(m, e, t, v, r, l))
    }),
    i
}
var xo = Rn
  , $m = xo
  , eg = 4;
function tg(r) {
    return $m(r, eg)
}
var ng = tg;
const rg = ns(ng);
var sg = xo
  , lg = 1
  , ig = 4;
function og(r) {
    return sg(r, lg | ig)
}
var ag = og;
const Sr = ns(ag);
var $o = {
    exports: {}
};
(function(r) {
    var e = Object.prototype.hasOwnProperty
      , t = "~";
    function n() {}
    Object.create && (n.prototype = Object.create(null),
    new n().__proto__ || (t = !1));
    function s(a, f, u) {
        this.fn = a,
        this.context = f,
        this.once = u || !1
    }
    function l(a, f, u, c, d) {
        if (typeof u != "function")
            throw new TypeError("The listener must be a function");
        var h = new s(u,c || a,d)
          , _ = t ? t + f : f;
        return a._events[_] ? a._events[_].fn ? a._events[_] = [a._events[_], h] : a._events[_].push(h) : (a._events[_] = h,
        a._eventsCount++),
        a
    }
    function i(a, f) {
        --a._eventsCount === 0 ? a._events = new n : delete a._events[f]
    }
    function o() {
        this._events = new n,
        this._eventsCount = 0
    }
    o.prototype.eventNames = function() {
        var f = [], u, c;
        if (this._eventsCount === 0)
            return f;
        for (c in u = this._events)
            e.call(u, c) && f.push(t ? c.slice(1) : c);
        return Object.getOwnPropertySymbols ? f.concat(Object.getOwnPropertySymbols(u)) : f
    }
    ,
    o.prototype.listeners = function(f) {
        var u = t ? t + f : f
          , c = this._events[u];
        if (!c)
            return [];
        if (c.fn)
            return [c.fn];
        for (var d = 0, h = c.length, _ = new Array(h); d < h; d++)
            _[d] = c[d].fn;
        return _
    }
    ,
    o.prototype.listenerCount = function(f) {
        var u = t ? t + f : f
          , c = this._events[u];
        return c ? c.fn ? 1 : c.length : 0
    }
    ,
    o.prototype.emit = function(f, u, c, d, h, _) {
        var b = t ? t + f : f;
        if (!this._events[b])
            return !1;
        var m = this._events[b], v = arguments.length, k, A;
        if (m.fn) {
            switch (m.once && this.removeListener(f, m.fn, void 0, !0),
            v) {
            case 1:
                return m.fn.call(m.context),
                !0;
            case 2:
                return m.fn.call(m.context, u),
                !0;
            case 3:
                return m.fn.call(m.context, u, c),
                !0;
            case 4:
                return m.fn.call(m.context, u, c, d),
                !0;
            case 5:
                return m.fn.call(m.context, u, c, d, h),
                !0;
            case 6:
                return m.fn.call(m.context, u, c, d, h, _),
                !0
            }
            for (A = 1,
            k = new Array(v - 1); A < v; A++)
                k[A - 1] = arguments[A];
            m.fn.apply(m.context, k)
        } else {
            var j = m.length, P;
            for (A = 0; A < j; A++)
                switch (m[A].once && this.removeListener(f, m[A].fn, void 0, !0),
                v) {
                case 1:
                    m[A].fn.call(m[A].context);
                    break;
                case 2:
                    m[A].fn.call(m[A].context, u);
                    break;
                case 3:
                    m[A].fn.call(m[A].context, u, c);
                    break;
                case 4:
                    m[A].fn.call(m[A].context, u, c, d);
                    break;
                default:
                    if (!k)
                        for (P = 1,
                        k = new Array(v - 1); P < v; P++)
                            k[P - 1] = arguments[P];
                    m[A].fn.apply(m[A].context, k)
                }
        }
        return !0
    }
    ,
    o.prototype.on = function(f, u, c) {
        return l(this, f, u, c, !1)
    }
    ,
    o.prototype.once = function(f, u, c) {
        return l(this, f, u, c, !0)
    }
    ,
    o.prototype.removeListener = function(f, u, c, d) {
        var h = t ? t + f : f;
        if (!this._events[h])
            return this;
        if (!u)
            return i(this, h),
            this;
        var _ = this._events[h];
        if (_.fn)
            _.fn === u && (!d || _.once) && (!c || _.context === c) && i(this, h);
        else {
            for (var b = 0, m = [], v = _.length; b < v; b++)
                (_[b].fn !== u || d && !_[b].once || c && _[b].context !== c) && m.push(_[b]);
            m.length ? this._events[h] = m.length === 1 ? m[0] : m : i(this, h)
        }
        return this
    }
    ,
    o.prototype.removeAllListeners = function(f) {
        var u;
        return f ? (u = t ? t + f : f,
        this._events[u] && i(this, u)) : (this._events = new n,
        this._eventsCount = 0),
        this
    }
    ,
    o.prototype.off = o.prototype.removeListener,
    o.prototype.addListener = o.prototype.on,
    o.prefixed = t,
    o.EventEmitter = o,
    r.exports = o
}
)($o);
var fg = $o.exports;
const ug = ns(fg)
  , Cn = new ug
  , cg = (r, e) => (Cn.on(r, e),
e)
  , dg = (r, e) => (Cn.once(r, e),
e)
  , _t = (r, e) => {
    Cn.emit(r, e)
}
  , xb = (r, e) => {
    Cn.removeListener(r, e)
}
  , fl = r => {
    Cn.removeAllListeners(r)
}
  , hg = 500
  , mg = 10 * 1e3
  , Nn = function() {}
  , gg = (r, e, t) => {
    const n = e.split("")
      , s = t.split("")
      , l = {}
      , i = {};
    return s.forEach( (o, a) => {
        o === "G" ? l[a] = n[a] : o === "y" && (i[n[a]] = (i[n[a]] || 0) + 1)
    }
    ),
    r.filter(o => {
        const a = o.word.split("");
        return Object.keys(l).every(c => {
            const d = l[c] === a[c];
            return d && (a[c] = "-"),
            d
        }
        ) ? Object.keys(i).every(c => {
            const d = i[c];
            let h = 0;
            for (let _ = 0; _ < 5; _++)
                a[_] === c && (h += 1);
            return h >= d
        }
        ) : !1
    }
    )
}
  , pg = (r, e, t, n) => {
    let s = [...t || r]
      , i = r;
    Nn("legalGuesses init", Sr(i)),
    s = s.filter(m => m.solution);
    const o = s.length
      , a = n == "hard"
      , f = (m, v) => (s = Qr(s, m, e),
    {
        possibleWords: Sr(s)
    })
      , u = (m, v, k, A, j) => {
        const P = A[m]
          , T = j[m]
          , O = nt(P, I => I.prior);
        P.forEach(I => {
            I.p = I.prior / O
        }
        );
        const D = P.length;
        return new Promise( (I, ee) => {
            m == 0 && (i = i.filter(R => R.level == "0" || v.includes(R.word))),
            a && m > 0 && (i = gg(i, v[m - 1], k[m - 1]));
            let K = Sr(i)
              , ne = K.find(R => R.word == v[m]);
            if (ne.guessed = !0,
            K.forEach(R => {
                R.entropyBefore = T,
                R.numberOfCurrentPossibilities = D,
                R.roundidx = m
            }
            ),
            D === o)
                K.forEach(R => {
                    R.p = R.solution / o;
                    const se = R.precomputedAverage.split(",").map(F => +F);
                    R.score = a ? se[1] : se[0],
                    R.finished = !0
                }
                );
            else {
                const R = new Map(P.map(F => [F.word, F.p]))
                  , se = dn(T, P, ne.roundidx, a);
                Nn("roundidx", ne.roundidx),
                K.forEach(F => {
                    F.p = R.get(F.word) || 0,
                    F.score = se,
                    F.finished = !1
                }
                ),
                Nn(`totalProbability round ${m}`, nt(K, F => F.p)),
                h(ne, P)
            }
            m >= bn - 1 ? (K = K.filter(R => R.p > 0),
            K.forEach(R => {
                R.score = 1 - R.p
            }
            )) : (K.forEach(b),
            K.expectedStepsRequiredBefore = m == 0 ? 3.45 : dn(T, P, ne.roundidx - 1, a),
            K.expectedStepsRequiredBeforeNoPenalty = m == 0 ? 3.45 : dn(T, P, ne.roundidx - 1, a, 0)),
            I({
                item: ne,
                priorityQueue: K
            })
        }
        )
    }
      , c = (m, v, k, A) => {
        let j = 0;
        const P = [];
        return m.forEach( (T, O) => {
            const D = k[O]
              , I = rg(v[O])
              , ee = Po(K => {
                const ne = Date.now() + hg;
                do
                    d(I, D);
                while (I.length && Date.now() < ne);
                Nn(`index ${O}: ${I.length} guesses left to analyze (over ${D.length} possible solutions)`),
                _(O, v),
                (I.length == 0 || K > mg) && (ee.stop(),
                ++j == m.length && _t("solver-finished", "Finished all timers"))
            }
            );
            P.push(ee)
        }
        ),
        P
    }
      , d = (m, v) => {
        const k = m.shift();
        k.finished || h(k, v)
    }
      , h = (m, v) => {
        const k = {};
        m.groups = [],
        v.forEach(j => {
            k[j.word] || A(v, m.word, j.word)
        }
        ),
        m.expectedEntropy = nt(m.groups, j => j.entropy * j.probability),
        m.finished = !0,
        b(m);
        function A(j, P, T) {
            const O = Qr(j, P, T)
              , D = nt(O, I => I.p);
            m.groups.push({
                remainingPossibilities: O,
                probability: D,
                entropy: nt(O, I => (k[I.word] = !0,
                I.p / D * Math.log2(D / I.p)))
            })
        }
    }
      , _ = (m, v) => {
        v[m],
        v[m].sort( (k, A) => k.i - A.i).sort( (k, A) => k.score - A.score),
        _t("solver", {
            roundidx: m,
            priorityQueues: v
        })
    }
    ;
    function b(m) {
        if (!m.groups) {
            m.expectedAdditionalGuesses = +m.score - 1,
            m.expectedAdditionalGuessesNoPenalty = m.expectedAdditionalGuesses;
            return
        }
        m.groups.forEach(v => {
            v.estimatedGuesses = dn(v.entropy, v.remainingPossibilities, m.roundidx, a),
            v.estimatedGuessesNoPenalty = dn(v.entropy, v.remainingPossibilities, m.roundidx, a, 0)
        }
        ),
        m.expectedAdditionalGuesses = nt(m.groups, v => v.estimatedGuesses * v.probability),
        m.expectedAdditionalGuesses -= m.p,
        m.expectedAdditionalGuessesNoPenalty = nt(m.groups, v => v.estimatedGuessesNoPenalty * v.probability),
        m.expectedAdditionalGuessesNoPenalty -= m.p,
        m.score = m.roundidx == bn - 1 ? 1 - m.p : m.expectedAdditionalGuesses
    }
    return {
        getWordsExcluded: h,
        initializeQueue: u,
        replayRound: f,
        updateQueues: c
    }
}
;
let cn = null;
async function _g() {
    if (window.location.search.substring("cubby=true"))
        return console.log("using cubby because of query string"),
        !0;
    if (console.log("should use cubby", cn),
    cn === null) {
        console.log("fetching config");
        const e = await (await fetch("https://int.nyt.com/data/wordlebot/config.json")).json();
        Math.random() < e.pct ? cn = !0 : cn = !1
    }
    return cn
}
async function bg(r) {
    try {
        if (await _g()) {
            const t = JSON.parse(r)
              , n = {
                slug: "wordlebot",
                data: [{
                    elementId: 1,
                    correct: null,
                    projectVersion: t.gameNumber ? `${t.gameNumber}` : null,
                    content: {
                        efficiency: t.efficiency,
                        gameNumber: t.gameNumber,
                        guesses: t.guesses,
                        luck: t.luck,
                        mode: t.mode,
                        solution: t.solution,
                        solutionsRemaining: t.solutionsRemaining,
                        efficiencyByRound: t.efficiencyByRound,
                        luckByRound: t.luckByRound,
                        version: t.version
                    }
                }]
            }
              , s = await fetch("https://www.nytimes.com/svc/int/run/cubby/public-api/v1/submission-ingestion/save", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(n)
            })
        }
    } catch (e) {
        console.log("caught error sending to cubby", e)
    }
    return res.json()
}
function vg(r={}) {
    var e = JSON.stringify(r);
    return bg(e)
}
const Pr = new Date
  , Or = new Date;
function rn(r, e, t, n) {
    function s(l) {
        return r(l = arguments.length === 0 ? new Date : new Date(+l)),
        l
    }
    return s.floor = l => (r(l = new Date(+l)),
    l),
    s.ceil = l => (r(l = new Date(l - 1)),
    e(l, 1),
    r(l),
    l),
    s.round = l => {
        const i = s(l)
          , o = s.ceil(l);
        return l - i < o - l ? i : o
    }
    ,
    s.offset = (l, i) => (e(l = new Date(+l), i == null ? 1 : Math.floor(i)),
    l),
    s.range = (l, i, o) => {
        const a = [];
        if (l = s.ceil(l),
        o = o == null ? 1 : Math.floor(o),
        !(l < i) || !(o > 0))
            return a;
        let f;
        do
            a.push(f = new Date(+l)),
            e(l, o),
            r(l);
        while (f < l && l < i);
        return a
    }
    ,
    s.filter = l => rn(i => {
        if (i >= i)
            for (; r(i),
            !l(i); )
                i.setTime(i - 1)
    }
    , (i, o) => {
        if (i >= i)
            if (o < 0)
                for (; ++o <= 0; )
                    for (; e(i, -1),
                    !l(i); )
                        ;
            else
                for (; --o >= 0; )
                    for (; e(i, 1),
                    !l(i); )
                        ;
    }
    ),
    t && (s.count = (l, i) => (Pr.setTime(+l),
    Or.setTime(+i),
    r(Pr),
    r(Or),
    Math.floor(t(Pr, Or))),
    s.every = l => (l = Math.floor(l),
    !isFinite(l) || !(l > 0) ? null : l > 1 ? s.filter(n ? i => n(i) % l === 0 : i => s.count(0, i) % l === 0) : s)),
    s
}
const ea = 1e3
  , ms = ea * 60
  , wn = ms * 60
  , Yn = wn * 24
  , wg = rn(r => {
    r.setTime(r - r.getMilliseconds() - r.getSeconds() * ea - r.getMinutes() * ms)
}
, (r, e) => {
    r.setTime(+r + e * wn)
}
, (r, e) => (e - r) / wn, r => r.getHours());
wg.range;
const Kr = rn(r => {
    r.setUTCMinutes(0, 0, 0)
}
, (r, e) => {
    r.setTime(+r + e * wn)
}
, (r, e) => (e - r) / wn, r => r.getUTCHours());
Kr.range;
const Sn = rn(r => r.setHours(0, 0, 0, 0), (r, e) => r.setDate(r.getDate() + e), (r, e) => (e - r - (e.getTimezoneOffset() - r.getTimezoneOffset()) * ms) / Yn, r => r.getDate() - 1);
Sn.range;
const Yr = rn(r => {
    r.setUTCHours(0, 0, 0, 0)
}
, (r, e) => {
    r.setUTCDate(r.getUTCDate() + e)
}
, (r, e) => (e - r) / Yn, r => r.getUTCDate() - 1);
Yr.range;
const yg = rn(r => {
    r.setUTCHours(0, 0, 0, 0)
}
, (r, e) => {
    r.setUTCDate(r.getUTCDate() + e)
}
, (r, e) => (e - r) / Yn, r => Math.floor(r / Yn));
yg.range;
function kg(r) {
    return Math.abs(r = Math.round(r)) >= 1e21 ? r.toLocaleString("en").replace(/,/g, "") : r.toString(10)
}
function Zn(r, e) {
    if ((t = (r = e ? r.toExponential(e - 1) : r.toExponential()).indexOf("e")) < 0)
        return null;
    var t, n = r.slice(0, t);
    return [n.length > 1 ? n[0] + n.slice(2) : n, +r.slice(t + 1)]
}
function Tg(r) {
    return r = Zn(Math.abs(r)),
    r ? r[1] : NaN
}
function Eg(r, e) {
    return function(t, n) {
        for (var s = t.length, l = [], i = 0, o = r[0], a = 0; s > 0 && o > 0 && (a + o + 1 > n && (o = Math.max(1, n - a)),
        l.push(t.substring(s -= o, s + o)),
        !((a += o + 1) > n)); )
            o = r[i = (i + 1) % r.length];
        return l.reverse().join(e)
    }
}
function Ig(r) {
    return function(e) {
        return e.replace(/[0-9]/g, function(t) {
            return r[+t]
        })
    }
}
var Ag = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Zr(r) {
    if (!(e = Ag.exec(r)))
        throw new Error("invalid format: " + r);
    var e;
    return new gs({
        fill: e[1],
        align: e[2],
        sign: e[3],
        symbol: e[4],
        zero: e[5],
        width: e[6],
        comma: e[7],
        precision: e[8] && e[8].slice(1),
        trim: e[9],
        type: e[10]
    })
}
Zr.prototype = gs.prototype;
function gs(r) {
    this.fill = r.fill === void 0 ? " " : r.fill + "",
    this.align = r.align === void 0 ? ">" : r.align + "",
    this.sign = r.sign === void 0 ? "-" : r.sign + "",
    this.symbol = r.symbol === void 0 ? "" : r.symbol + "",
    this.zero = !!r.zero,
    this.width = r.width === void 0 ? void 0 : +r.width,
    this.comma = !!r.comma,
    this.precision = r.precision === void 0 ? void 0 : +r.precision,
    this.trim = !!r.trim,
    this.type = r.type === void 0 ? "" : r.type + ""
}
gs.prototype.toString = function() {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type
}
;
function Cg(r) {
    e: for (var e = r.length, t = 1, n = -1, s; t < e; ++t)
        switch (r[t]) {
        case ".":
            n = s = t;
            break;
        case "0":
            n === 0 && (n = t),
            s = t;
            break;
        default:
            if (!+r[t])
                break e;
            n > 0 && (n = 0);
            break
        }
    return n > 0 ? r.slice(0, n) + r.slice(s + 1) : r
}
var ta;
function Sg(r, e) {
    var t = Zn(r, e);
    if (!t)
        return r + "";
    var n = t[0]
      , s = t[1]
      , l = s - (ta = Math.max(-8, Math.min(8, Math.floor(s / 3))) * 3) + 1
      , i = n.length;
    return l === i ? n : l > i ? n + new Array(l - i + 1).join("0") : l > 0 ? n.slice(0, l) + "." + n.slice(l) : "0." + new Array(1 - l).join("0") + Zn(r, Math.max(0, e + l - 1))[0]
}
function ul(r, e) {
    var t = Zn(r, e);
    if (!t)
        return r + "";
    var n = t[0]
      , s = t[1];
    return s < 0 ? "0." + new Array(-s).join("0") + n : n.length > s + 1 ? n.slice(0, s + 1) + "." + n.slice(s + 1) : n + new Array(s - n.length + 2).join("0")
}
const cl = {
    "%": (r, e) => (r * 100).toFixed(e),
    b: r => Math.round(r).toString(2),
    c: r => r + "",
    d: kg,
    e: (r, e) => r.toExponential(e),
    f: (r, e) => r.toFixed(e),
    g: (r, e) => r.toPrecision(e),
    o: r => Math.round(r).toString(8),
    p: (r, e) => ul(r * 100, e),
    r: ul,
    s: Sg,
    X: r => Math.round(r).toString(16).toUpperCase(),
    x: r => Math.round(r).toString(16)
};
function dl(r) {
    return r
}
var hl = Array.prototype.map
  , ml = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Pg(r) {
    var e = r.grouping === void 0 || r.thousands === void 0 ? dl : Eg(hl.call(r.grouping, Number), r.thousands + "")
      , t = r.currency === void 0 ? "" : r.currency[0] + ""
      , n = r.currency === void 0 ? "" : r.currency[1] + ""
      , s = r.decimal === void 0 ? "." : r.decimal + ""
      , l = r.numerals === void 0 ? dl : Ig(hl.call(r.numerals, String))
      , i = r.percent === void 0 ? "%" : r.percent + ""
      , o = r.minus === void 0 ? "−" : r.minus + ""
      , a = r.nan === void 0 ? "NaN" : r.nan + "";
    function f(c) {
        c = Zr(c);
        var d = c.fill
          , h = c.align
          , _ = c.sign
          , b = c.symbol
          , m = c.zero
          , v = c.width
          , k = c.comma
          , A = c.precision
          , j = c.trim
          , P = c.type;
        P === "n" ? (k = !0,
        P = "g") : cl[P] || (A === void 0 && (A = 12),
        j = !0,
        P = "g"),
        (m || d === "0" && h === "=") && (m = !0,
        d = "0",
        h = "=");
        var T = b === "$" ? t : b === "#" && /[boxX]/.test(P) ? "0" + P.toLowerCase() : ""
          , O = b === "$" ? n : /[%p]/.test(P) ? i : ""
          , D = cl[P]
          , I = /[defgprs%]/.test(P);
        A = A === void 0 ? 6 : /[gprs]/.test(P) ? Math.max(1, Math.min(21, A)) : Math.max(0, Math.min(20, A));
        function ee(K) {
            var ne = T, R = O, se, F, ue;
            if (P === "c")
                R = D(K) + R,
                K = "";
            else {
                K = +K;
                var fe = K < 0 || 1 / K < 0;
                if (K = isNaN(K) ? a : D(Math.abs(K), A),
                j && (K = Cg(K)),
                fe && +K == 0 && _ !== "+" && (fe = !1),
                ne = (fe ? _ === "(" ? _ : o : _ === "-" || _ === "(" ? "" : _) + ne,
                R = (P === "s" ? ml[8 + ta / 3] : "") + R + (fe && _ === "(" ? ")" : ""),
                I) {
                    for (se = -1,
                    F = K.length; ++se < F; )
                        if (ue = K.charCodeAt(se),
                        48 > ue || ue > 57) {
                            R = (ue === 46 ? s + K.slice(se + 1) : K.slice(se)) + R,
                            K = K.slice(0, se);
                            break
                        }
                }
            }
            k && !m && (K = e(K, 1 / 0));
            var Y = ne.length + K.length + R.length
              , L = Y < v ? new Array(v - Y + 1).join(d) : "";
            switch (k && m && (K = e(L + K, L.length ? v - R.length : 1 / 0),
            L = ""),
            h) {
            case "<":
                K = ne + K + R + L;
                break;
            case "=":
                K = ne + L + K + R;
                break;
            case "^":
                K = L.slice(0, Y = L.length >> 1) + ne + K + R + L.slice(Y);
                break;
            default:
                K = L + ne + K + R;
                break
            }
            return l(K)
        }
        return ee.toString = function() {
            return c + ""
        }
        ,
        ee
    }
    function u(c, d) {
        var h = f((c = Zr(c),
        c.type = "f",
        c))
          , _ = Math.max(-8, Math.min(8, Math.floor(Tg(d) / 3))) * 3
          , b = Math.pow(10, -_)
          , m = ml[8 + _ / 3];
        return function(v) {
            return h(b * v) + m
        }
    }
    return {
        format: f,
        formatPrefix: u
    }
}
var Dn, na, Og;
Mg({
    thousands: ",",
    grouping: [3],
    currency: ["$", ""]
});
function Mg(r) {
    return Dn = Pg(r),
    na = Dn.format,
    Og = Dn.formatPrefix,
    Dn
}
const bn = 6
  , sn = new Date(2021,5,19,0,0,0,0)
  , Xr = new Date(Date.UTC(2021, 5, 19, 0, 0, 0, 0));
function dn(r, e, t, n, s=2) {
    if (r < 0)
        throw new Error;
    if (r == 0)
        return 1;
    const l = t == bn - 2;
    if (e.length == 2) {
        let c = e.map(h => h.p)
          , d = Vr(c) / nt(c);
        return t >= bn - 2 ? 2 - d + 3 * s * (1 - d) : 2 - d
    }
    if (l) {
        let c = e.map(h => h.p)
          , d = Vr(c) / nt(c);
        return 2 - d + 3 * s * (1 - d)
    }
    const i = n ? 2.5172585 : 2.4331083
      , o = n ? .6538521 : .7114494
      , a = n ? .4024986 : .3456398
      , f = r <= 1 ? 1 + .5 * Math.pow(r, i) : 1.5 + a * Math.pow(r - 1, o)
      , u = t + f >= bn - 1 ? s : 0;
    return f + u
}
function Qr(r, e, t) {
    if (e === t)
        return r.filter(l => l.word === e);
    const n = e.split("")
      , s = t.split("");
    return r.forEach(l => {
        l.letters = l.word.split("")
    }
    ),
    n.forEach( (l, i) => {
        l === s[i] ? (r = r.filter(o => o.letters[i] === l),
        n[i] = s[i] = "-",
        r.forEach(o => o.letters[i] = "-")) : r = r.filter(o => o.letters[i] !== l)
    }
    ),
    n.forEach( (l, i) => {
        if (l !== "-")
            if (s.includes(l)) {
                r = r.filter(o => o.letters.includes(l) && o.letters[i] != l),
                s[s.indexOf(l)] = "-",
                r.forEach(o => o.letters[o.letters.indexOf(l)] = "-");
                return
            } else
                r = r.filter(o => !o.letters.includes(l))
    }
    ),
    r
}
function ra(r, e) {
    let t = [".", ".", ".", ".", "."]
      , n = e.split("")
      , s = r.split("");
    return t.forEach( (l, i) => {
        s[i] === n[i] && (t[i] = "G",
        n[i] = "-",
        s[i] = "-")
    }
    ),
    s.forEach( (l, i) => {
        if (l === "-")
            return;
        const o = n.indexOf(l);
        o > -1 && (t[i] = "y",
        n[o] = "-")
    }
    ),
    t.join("")
}
function sa() {
    return e(sn, new Date);
    function e(t, n) {
        var s = new Date(t)
          , l = new Date(n).setHours(0, 0, 0, 0) - s.setHours(0, 0, 0, 0);
        return Math.round(l / 864e5)
    }
}
function gl(r) {
    return r.split(",").map(e => +e)
}
const Et = function() {}
  , pl = Date.now || function() {
    return new Date().getTime()
}
  , $b = async r => new Promise( (e, t) => {
    var n = document.createElement("textarea");
    n.style.position = "fixed",
    n.style.top = 0,
    n.style.left = 0,
    n.style.width = "2em",
    n.style.height = "2em",
    n.style.padding = 0,
    n.style.border = "none",
    n.style.outline = "none",
    n.style.boxShadow = "none",
    n.style.background = "transparent",
    n.value = r,
    document.body.appendChild(n),
    n.focus(),
    n.select();
    try {
        var s = document.execCommand("copy")
          , l = s ? "successful" : "unsuccessful";
        return Et("Copying text command was " + l),
        document.body.removeChild(n),
        s ? e() : t()
    } catch (i) {
        return document.body.removeChild(n),
        t(i)
    }
}
)
  , _l = (r, e, t) => e > r.length - 1 ? r : r.substring(0, e) + t + r.substring(e + 1)
  , la = (r, e, t, n) => {
    const s = Xn[n];
    return s.efficiency = ia(s)
}
  , bl = r => {
    const e = nt(r, t => t.prior);
    return r.forEach(t => {
        t.p = t.prior / e
    }
    ),
    nt(r, t => t.p * Math.log2(1 / t.p))
}
  , ia = r => {
    try {
        if (!r)
            return 0;
        if (r.p == 1)
            return 1;
        let e = Kg(r.roundidx);
        if (r.roundidx == 5)
            return r.p / e[0].p;
        r.finished || ua.getWordsExcluded(r, ca(r.roundidx));
        const t = e[0].score;
        let n = r.roundidx == 0 ? t + 1 : e.expectedStepsRequiredBefore;
        return n = Math.max(n, r.score),
        Et("esrb", e.expectedStepsRequiredBefore.toFixed(3)),
        Et("calculateItemEfficiency", r, r.roundidx, r.word, r.score.toFixed(3), t.toFixed(3), n.toFixed(3)),
        1 - (r.score - t) / Math.max(.5, n - t)
    } catch (e) {
        return console.warn(e, r),
        .5
    }
}
  , jg = (r, e, t, n) => {
    try {
        let s = Tt[n];
        const l = r[n].toLowerCase()
          , i = s.find(k => k.word === l)
          , o = e[n];
        if (Et("getting luck for idx ", n, l, s, i),
        !i)
            return "—";
        const a = qg(n)
          , f = ps(n)
          , u = Pn(r, e)
          , c = i.entropyBefore;
        let d = Fg(n);
        if (a == 1)
            return "—";
        let h, _, b, m, v;
        if (n > 0) {
            if (a == f || !i.groups)
                return "—";
            const k = [];
            i.groups.forEach(P => {
                P.isGuess = P.remainingPossibilities[0].word == i.word,
                P.remainingWords = P.remainingPossibilities.map(T => T.word),
                P.roundedGuesses = Math.round(1e3 * P.estimatedGuesses),
                k.push(Object.assign({}, P))
            }
            ),
            k.sort( (P, T) => zt(P.estimatedGuesses, T.estimatedGuesses)).sort( (P, T) => zt(T.isGuess, P.isGuess));
            const A = k[0].isGuess ? 1 : 0;
            let j;
            i.luckGroups = [],
            k.forEach( (P, T) => {
                T > A && j.roundedGuesses == P.roundedGuesses ? (j.probability += P.probability,
                j.remainingWords = j.remainingWords.concat(P.remainingWords)) : (j = P,
                i.luckGroups.push(P)),
                Et(i.luckGroups.map(O => O.remainingWords.join("-")))
            }
            ),
            _ = k2(i.luckGroups, P => P.probability).map(P => 100 * P),
            b = i.luckGroups.findIndex(P => P.remainingWords.includes(u))
        } else {
            if (o == "GGGGG")
                return 1;
            h = gl(i.entropyVec),
            _ = gl(i.percentileVec),
            b = y2(h, Math.round(100 * d) / 100)
        }
        return m = _[b - 1] || 0,
        v = _[b] || 100,
        Et(`LUCK INDEX ${n}`, i, h, _, d, b, m, v),
        1 - (m + v) / 200
    } catch (s) {
        return console.warn(s),
        .5
    }
}
  , Bg = r => isNaN(r) || r == null ? "—" : Math.round(99.499999 * r)
  , e6 = r => na(",")(r)
  , t6 = r => {
    let e = Sn.offset(sn, r).toLocaleDateString("en-us", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });
    return r < sa() - 1 ? `Archive: ${e}
` : ""
}
  , Ng = r => {
    const e = Wt(r);
    return oa(Sn.offset(sn, e))
}
  , Dg = r => oa(Sn.offset(sn, r));
function oa(r) {
    const e = r.getFullYear()
      , t = String(r.getMonth() + 1).padStart(2, "0")
      , n = String(r.getDate()).padStart(2, "0");
    return `${e}-${t}-${n}`
}
const n6 = (r, e, t) => {
    const n = aa(r, e, t);
    return Sn.offset(sn, n)
}
  , aa = (r, e, t) => {
    if (t)
        return Wt(t);
    const n = e.findIndex(s => s === "GGGGG");
    if (n > -1)
        return Wt(r[n]);
    {
        const s = (i, o, a) => {
            let f = !0;
            return a.split("").forEach( (u, c) => {
                u === "G" ? (f = f && i[c] === o[c],
                i = _l(i, i.indexOf(o[c]), "-")) : u === "y" ? (f = f && i.includes(o[c]) && i[c] !== o[c],
                i = _l(i, i.indexOf(o[c]), "-")) : f = f && !i.includes(o[c])
            }
            ),
            f
        }
        ;
        let l = [...Jt];
        return e.forEach( (i, o) => {
            l = l.filter(a => s(a, r[o], i))
        }
        ),
        l.length === 1 ? Wt(l[0]) : -1
    }
}
  , Wt = r => Jt.findLastIndex(e => e === r)
  , vl = r => Jt.findLastIndex(e => e === r)
  , Lg = r => Jt[r]
  , Rg = r => {
    const e = Jt.findIndex(n => n === r)
      , t = Object.keys(qt)[e];
    return qt[t]
}
  , Vg = r => {
    const t = Object.keys(qt).find(l => qt[l] == r);
    if (!t)
        return -1;
    const n = new Date(t).getTime() - Xr.getTime();
    return Math.round(n / (1e3 * 3600 * 24))
}
  , r6 = (r, e) => {
    const t = (l, i, o) => {
        const a = i.split("")
          , f = o.split("")
          , u = {}
          , c = {};
        f.forEach( (b, m) => {
            b === "G" ? u[m] = a[m] : b === "y" && (c[a[m]] = (c[a[m]] || 0) + 1)
        }
        );
        const d = l.split("");
        return Object.keys(u).every(b => {
            const m = u[b] === d[b];
            return m && (d[b] = "-"),
            m
        }
        ) ? Object.keys(c).every(b => {
            const m = c[b];
            let v = 0;
            for (let k = 0; k < 5; k++)
                d[k] === b && (v += 1);
            return v >= m
        }
        ) : !1
    }
    ;
    let n, s;
    for (let l in r) {
        const i = r[l];
        if (l > 0 && !t(i, n, s))
            return "normal";
        n = i,
        s = e[l]
    }
    return "hard"
}
;
let Yt;
const Pn = (r, e, t) => {
    if (!Yt || t) {
        const n = aa(r, e);
        return Jt[n]
    }
    return Yt
}
  , s6 = (r, e=!1) => {
    try {
        return localStorage.getItem(r) || e
    } catch (t) {
        return e
    }
}
  , Mr = (r, e) => {
    try {
        return localStorage.setItem(r, JSON.stringify(e))
    } catch (t) {
        return !1
    }
}
  , Gg = (r, e) => {
    const t = e.findIndex(n => n === "GGGGG");
    return t > -1 ? t + 1 : -1
}
;
let fa, Nt, Xn, Tt, rt, Ct, ua, jr = [];
const zg = async (r, e, t, n, s) => {
    Yt = null;
    const l = n || Pn(r, e);
    if (!l)
        throw new Error("Could not determine Wordle solution.");
    Yt = l,
    _t("processing-message", `Identified correct answer as ${l.toUpperCase()}`),
    jr.forEach(u => u.stop()),
    jr = [],
    fl("solver"),
    fl("solver-finished"),
    Nt = [],
    Xn = [],
    Tt = [],
    rt = [],
    Ct = {
        efficiency: [],
        luck: []
    };
    const {initializeQueue: i, replayRound: o, updateQueues: a} = ua = pg(s, l, s, t);
    fa = t,
    rt.push(s.filter(u => u.solution)),
    Nt.push(bl(rt[0])),
    r.forEach( (u, c) => {
        const {possibleWords: d} = o(u, c);
        rt.push(d),
        Nt.push(bl(d))
    }
    );
    let f = 0;
    await r.reduce(async (u, c) => {
        await u;
        const {item: d, priorityQueue: h} = await i(f, r, e, rt, Nt);
        Xn.push(d),
        Tt.push(h),
        ++f
    }
    , Promise.resolve()),
    window.priorityQueues = Tt,
    Wg(r, e, t),
    r.forEach( (u, c) => {}
    ),
    _t("processing-message", "Calculating efficiency scores..."),
    jr = a(r, Tt, rt, Nt),
    cg("solver", ({roundidx: u, priorityQueues: c}) => {
        Ct.efficiency[u] = la(r, e, t, u),
        _t(`solver-${u}`, "data-update"),
        _t("solver-all", u)
    }
    ),
    dg("solver-finished", () => {
        _t("solver-analysis-completed", {})
    }
    ),
    _t("processing-message", "Finished processing data.")
}
  , l6 = function(r) {
    return r.forEach(e => {
        e.expectedAdditionalGuesses = +e.expectedAdditionalGuesses,
        e.expectedEntropy = +e.expectedEntropy,
        e.expectedWordsRemaining = +e.expectedWordsRemaining,
        e.maxWordsRemaining = +e.maxWordsRemaining,
        e.prior = +e.prior,
        e.solution = e.prior > 0
    }
    ),
    r
}
  , Wg = (r, e, t) => {
    Yt || Pn(r, e),
    r.forEach( (n, s) => {
        Tt[s].sort( (l, i) => l.score - i.score),
        Ct.efficiency[s] = la(r, e, t, s),
        Ct.luck[s] = jg(r, e, t, s)
    }
    )
}
  , wl = (r, e) => {
    let t = Ug(r);
    if (t)
        return e === void 0 || e === -1 ? (r == "efficiency" && t.length > 1 && (t = t.slice(1)),
        T2(t)) : t[e]
}
  , Ug = r => (Et("score", r, Ct[r]),
Ct[r])
  , i6 = () => Nt
  , Fg = r => Nt[r + 1]
  , Hg = () => Xn
  , qg = r => {
    try {
        return Math.max(1, rt[r].length)
    } catch (e) {
        return 1
    }
}
  , ps = (r, e) => {
    try {
        return e ? Qr(rt[r], e, Yt).length : Math.max(1, rt[r + 1].length)
    } catch (t) {
        return 1
    }
}
  , o6 = r => {
    try {
        return rt[r].length - rt[r + 1].length
    } catch (e) {
        return 0
    }
}
  , a6 = r => Tt[r + 1]
  , Kg = r => Tt[r]
  , ca = r => rt[r]
  , f6 = r => rt[r + 1] || []
  , u6 = (r, e, t, n) => {
    const s = n ? `${e}-simple-ps` : `${e}-simple`
      , l = t[s];
    if (!l)
        return [];
    const i = l.guesses[r][0].split("-").filter(o => o.length);
    return i.length < 5 && i.push(r),
    r != l.starting_word && i.unshift(l.starting_word),
    i
}
  , c6 = (r, e, t, n) => {
    const s = n ? `${e}-simple-ps` : `${e}-simple`
      , l = t[s];
    return l && l && l.guesses && l.guesses[r] ? l.guesses[r][1] : "—"
}
  , d6 = (r, e, t, n={}) => {
    const s = r || Hg().map(b => b.word)
      , l = e || Pn()
      , i = t || fa
      , o = s[s.length - 1] == l
      , a = s.concat(["", "", "", "", "", ""]).slice(0, 6)
      , f = Wt(l)
      , u = o ? "WIN" : s.length >= 6 ? "FAIL" : "IN_PROGRESS"
      , c = Object.assign(n, {
        hardMode: i == "hard"
    })
      , d = {
        game: {
            boardState: a,
            dayOffset: f,
            status: u
        },
        settings: c
    }
      , h = {
        states: [{
            data: {
                boardState: a,
                status: u
            },
            puzzleId: Rg(l)
        }]
    }
      , _ = {
        states: [{
            puzzleId: "settings",
            data: c
        }]
    };
    Mr("nyt-wordle-moogle/ANON", d),
    Mr("games-state-wordleV2/ANON", h),
    Mr("games-settings-wordleV2/ANON", _)
}
  , h6 = async r => {
    const e = qt[r];
    if (!e)
        return !1;
    const t = location.hostname.indexOf("localhost") > -1 ? "" : "https://www.nytimes.com"
      , n = t + `/svc/games/state/wordleV2/latest?puzzle_id=${e}`
      , s = t + "/svc/games/settings/wordleV2"
      , l = await fetch(n, {
        method: "GET",
        credentials: "include"
    });
    if (!l.ok)
        return !1;
    const i = await l.json()
      , a = {
        ...(await (await fetch(s, {
            method: "GET",
            credentials: "include"
        })).json()).settings,
        hardMode: i.game_data.hardMode
    };
    return Et("settings", a || i.settings),
    {
        ...i,
        game_data: {
            game: {
                ...i.game_data,
                dayOffset: Vg(e)
            },
            settings: a || i.settings,
            stats: i.game_data.setLegacyStats
        }
    }
}
  , m6 = ({analyzedGameData: r, maxSlide: e, nSlides: t}) => {
    if (!(r && r.solution))
        return;
    const s = {
        maxSlide: e,
        nSlides: t,
        ts: +new Date
    };
    if (r) {
        const l = ps(5);
        Object.assign(s, {
            gameNumber: r.gameNumber,
            solution: r.solution,
            guesses: r.guesses.join("-"),
            efficiency: yl(wl("efficiency"), 5),
            luck: yl(wl("luck"), 5),
            method: r.method,
            mode: r.mode,
            solutionsRemaining: l,
            version: r.version,
            efficiencyByRound: Ct.efficiency,
            luckByRound: Ct.luck
        })
    }
    !s.efficiency || !s.luck || vg(s).then(l => {}
    ).catch(l => {}
    )
}
  , g6 = function(r, e, t) {
    var n, s, l, i, o = 0;
    t || (t = {});
    var a = function() {
        o = t.leading === !1 ? 0 : pl(),
        n = null,
        i = r.apply(s, l),
        n || (s = l = null)
    }
      , f = function() {
        var u = pl();
        !o && t.leading === !1 && (o = u);
        var c = e - (u - o);
        return s = this,
        l = arguments,
        c <= 0 || c > e ? (n && (clearTimeout(n),
        n = null),
        o = u,
        i = r.apply(s, l),
        n || (s = l = null)) : !n && t.trailing !== !1 && (n = setTimeout(a, c)),
        i
    };
    return f.cancel = function() {
        clearTimeout(n),
        o = 0,
        n = s = l = null
    }
    ,
    f
}
  , p6 = function(r, e, t) {
    if (!r)
        return;
    r.efficiency = ia(r),
    r.currentPossibilities = r.currentPossibilities || ca(t).map(s => s.word),
    r.solutionsAfter = r.solutionsAfter || ps(t, r.word),
    r.expectedTotalGuesses = r.roundidx + r.expectedAdditionalGuessesNoPenalty + 1,
    r.botPick = Bg(r.efficiency) == 99,
    r.clinched = r.wordsRemaining && r.wordsRemaining.every(s => s == 1),
    r.information = r.entropyBefore - r.expectedEntropy,
    r.groups && (r.groups.forEach(s => {
        s.result
    }
    ),
    r.expectedWordsRemaining = nt(r.groups, s => s.probability * s.remainingPossibilities.length) / nt(r.groups, s => s.probability),
    r.maxWordsRemaining = Vr(r.groups, s => s.remainingPossibilities.length),
    r.numberOfGroups = r.groups.length),
    r.userGuesses = "-",
    r.userPercent = 0;
    const n = e && e.links && e.links.get(r.word);
    n && (r.userGuesses = (n.futureGuesses + n.unsolved) / n.value,
    r.userPercent = n.value / e.value)
};
function yl(r, e=0) {
    const t = Math.pow(10, e);
    return Math.round(r * t) / t
}
const Jr = typeof window != "undefined" ? window.navigator.userAgent : ""
  , _6 = () => !!(window.location.href.indexOf("app.html") > 0 || window.location.search.indexOf("nytapp") > -1 || Jr.match(/nyt[-_]?(?:ios|android)/i) || Jr.match(/android/i) && window.__HYBRID__);
function b6() {
    return /android/i.test(Jr)
}
const v6 = (r, e="", t="", n="") => {
    const s = {
        module: {
            name: "interactive",
            context: "",
            label: "",
            region: "",
            element: {
                name: e,
                label: t,
                context: n
            }
        }
    };
    window.UnifiedTracking && window.UnifiedTracking.sendAnalytic(r, s)
}
  , Yg = r => {
    r || (r = 14);
    let e = sa()
      , t = [];
    for (var n = e; n >= e - (r - 1); n--)
        t.push(n);
    return t
}
  , w6 = r => {
    (!r || r && r.length == 0) && (r = Yg());
    let e = Math.min.apply(null, r)
      , t = Math.max.apply(null, r)
      , n = Kr.offset(Yr.offset(Xr, e), -14)
      , s = Kr.offset(Yr.offset(Xr, t), 36);
    return [n, s]
}
  , y6 = () => {
    var r = new Date
      , e = "" + (r.getMonth() + 1)
      , t = "" + r.getDate()
      , n = r.getFullYear();
    e.length < 2 && (e = "0" + e),
    t.length < 2 && (t = "0" + t);
    let s = [n, e, t].join("-");
    return qt[s]
}
  , k6 = r => {
    const e = Zg()
      , t = Xg(r);
    return e[t]
}
  , Zg = () => ({
    0xa7810f90b5b: !0,
    0x95d7bf2c0a7: !0,
    0x5eb041bc2ff1: !0,
    0x6998d433e499: !0,
    0x5b0f4305f5bb: !0,
    0x68b0b26e74d3: !0,
    99108105116115: !0,
    9810511699104: !0,
    99117110116115: !0,
    0x9499ea8862b: !0,
    0xa03958e4bfd: !0,
    0x65f84cd1d671: !0,
    0x68afc34c31c5: !0,
    0x68afc34c31d3: !0,
    0xae94b7c7beb: !0,
    0x6c53163bf775: !0,
    0x9d4ecdc9e1f: !0,
    0xa74e14860ec: !0,
    0x616959dcc5bb: !0,
    0xa78299e62cb: !0,
    0x5dc76d26622b: !0,
    0x95d7bd44013: !0,
    0xa74e14860fb: !0,
    0x95d7b2c3491: !0,
    0x65f492d8c41b: !0,
    0xa74e14860fa: !0,
    0x91ac6342a2b: !0
})
  , Xg = r => {
    let e = "";
    for (var t = 0; t <= 4; t++)
        e += String(r.charCodeAt(t)).padStart("0", 3);
    return e
}
  , Qg = new Set(["abyss", "adios", "aegis", "alias", "amass", "amiss", "atlas", "basis", "bless", "bliss", "bogus", "bolus", "bonus", "brass", "chaos", "chess", "class", "corps", "crass", "cress", "cross", "dress", "dross", "ethos", "feces", "fetus", "ficus", "floss", "focus", "glass", "gloss", "grass", "gross", "guess", "hocus", "humus", "judas", "kudos", "lexis", "locus", "loess", "loris", "lotus", "lupus", "minus", "modus", "mucus", "nexus", "oasis", "pious", "polis", "press", "priss", "pubis", "rebus", "sinus", "talus", "telos", "torus", "trans", "tress", "truss", "vegas", "venus", "virus", "genus", "dufus", "lapis", "psoas"]);
function Jg(r) {
    return r = r.toLowerCase().trim(),
    !(r.length !== 5 || !r.endsWith("s") || Qg.has(r))
}
const xg = new Set(["arbor", "ardor", "armor", "color", "favor", "fiber", "fibre", "honor", "labor", "liter", "litre", "meter", "metre", "moult", "odour", "rigor", "saber", "sabre", "savor", "tonne", "tumor", "valor", "vigor"]);
function $g(r) {
    return xg.has(r.toLowerCase())
}
function T6(r, e) {
    return !Jg(r) && !tp(r) && !$g(r)
}
function E6(r, e, t) {
    const s = r[t].toLowerCase().split("")
      , l = []
      , i = new Set
      , o = (a, f, u, c, d) => {
        const h = `${a}-${f}-${u}-${c}`;
        i.has(h) || (i.add(h),
        l.push({
            letter: a,
            position: f,
            color: u,
            type: c,
            allowed: d
        }))
    }
    ;
    for (let a = 0; a < t; a++) {
        const f = r[a].toLowerCase()
          , u = e[a]
          , c = f.split("")
          , d = {};
        for (let h = 0; h < 5; h++) {
            const _ = c[h];
            d[_] || (d[_] = 0),
            (u[h] === "G" || u[h] === "y") && d[_]++
        }
        for (let h = 0; h < 5; h++) {
            const _ = c[h]
              , b = u[h];
            if (b === "G")
                s[h] !== _ && o(_, h, "green", "position");
            else if (b === "y")
                s[h] === _ && o(_, h, "yellow", "position"),
                s.includes(_) || o(_, h, "yellow", "missing");
            else {
                const m = s.filter(v => v === _).length;
                d[_] > 0 ? m > d[_] && o(_, h, "gray", "count", d[_]) : m > 0 && o(_, h, "gray", "absent")
            }
        }
    }
    return l
}
const ep = new Set(["biped", "bleed", "breed", "creed", "embed", "freed", "greed", "jaded", "naked", "shred", "speed", "steed", "tweed", "unfed", "unwed", "armed", "baked", "bored", "domed", "famed", "gated", "moped", "tired", "cried", "dried", "fried", "ivied", "pried", "shied", "spied", "tried"]);
function tp(r) {
    return r = r.toLowerCase().trim(),
    !(r.length !== 5 || !r.endsWith("ed") || ep.has(r))
}
const Br = 1e6
  , da = "newsgraphics/2022/wordlebot/uniqueness-sharded"
  , np = "emoji-base3-v1"
  , pn = new Map;
var uo;
const rp = typeof window != "undefined" && (window.location.search.includes("uniquenessDebug=1") || ((uo = window.localStorage) == null ? void 0 : uo.getItem("uniquenessDebug")) === "1");
function ut(...r) {
    rp && console.log("[uniqueness]", ...r)
}
function I6(r, e) {
    var c, d, h, _;
    const t = e == null ? void 0 : e.manifest
      , n = Number((c = t == null ? void 0 : t.meta) == null ? void 0 : c.totalGames) || 0;
    if (!t)
        return ut("missing manifest, using fallback", {
            totalGames: n
        }),
        Nr(n, 0);
    const s = ha(r, t);
    if (!s)
        return ut("empty uniqueness path, using fallback", {
            gameString: r
        }),
        Nr(n, 0);
    const {encodedFullPath: l, prefix: i} = s
      , o = Number((h = (d = e == null ? void 0 : e.shardCache) == null ? void 0 : d[i]) == null ? void 0 : h[l]) || 0
      , a = `${t.runId || "no-run"}:${i}`
      , f = pn.has(a);
    return !!!((_ = e == null ? void 0 : e.shardCache) != null && _[i]) && f ? (ut("shard still loading, deferring uniqueness fallback", {
        prefix: i,
        encodedFullPath: l
    }),
    null) : (o || ut("count missing from shard cache, using fallback", {
        encodedFullPath: l,
        prefix: i,
        cachedPrefixes: Object.keys((e == null ? void 0 : e.shardCache) || {})
    }),
    Nr(n, o))
}
function A6({guesses: r, results: e, solution: t}) {
    const n = Array.isArray(r) ? r.map(l => `${l || ""}`.trim().toLowerCase()).filter(Boolean) : [];
    if (!n.length)
        return [];
    const s = Array.isArray(e) ? e.map(l => `${l || ""}`.trim()).filter(Boolean) : [];
    return s.length ? s : t ? n.map(l => ra(l, t)) : []
}
async function sp(r, e, t, n=[]) {
    var _, b;
    const s = `${r || ""}`.trim().toLowerCase()
      , l = `${e || ""}`.trim()
      , i = `${t || "normal"}`.trim().toLowerCase();
    if (!s || !l)
        throw new Error("downloadUniquenessJson requires solution and date");
    if (!["normal", "hard"].includes(i))
        throw new Error(`Unsupported mode: ${t}`);
    const o = ma()
      , a = `uniqueness-emoji-routing-${s}-${l}-${i}.json`
      , f = `${o}/${da}/${a}`;
    ut("fetching routing manifest", {
        routingUrl: f
    });
    const u = await fetch(f);
    if (!u.ok)
        throw ut("routing manifest fetch failed", {
            routingUrl: f,
            status: u.status
        }),
        new Error(`Failed to download routing manifest ${a} (${u.status})`);
    const c = await u.json();
    if (ut("loaded routing manifest", {
        runId: c == null ? void 0 : c.runId,
        format: c == null ? void 0 : c.format,
        prefixes: (_ = c == null ? void 0 : c.prefixes) == null ? void 0 : _.length,
        totalGames: (b = c == null ? void 0 : c.meta) == null ? void 0 : b.totalGames
    }),
    (c == null ? void 0 : c.encoding) !== np)
        throw new Error(`Unsupported emoji encoding in routing manifest: ${c == null ? void 0 : c.encoding}`);
    const d = {
        manifest: c,
        shardCache: {}
    };
    it.setKey("emoji", d),
    it.setKey("date", l),
    it.setKey("mode", i);
    const h = ip(n);
    return await Promise.all(h.map(m => lp(m))),
    {
        emoji: it.getKey("emoji"),
        date: l,
        mode: i
    }
}
async function lp(r) {
    var u, c, d;
    const e = ma()
      , t = (u = it.getKey("emoji")) == null ? void 0 : u.manifest
      , n = ha(r, t);
    if (!t || !n)
        return !1;
    const {encodedFullPath: s, prefix: l} = n
      , i = it.getKey("emoji");
    if ((c = i == null ? void 0 : i.shardCache) != null && c[l])
        return ut("shard already cached", {
            prefix: l,
            encodedKey: s
        }),
        !0;
    const o = (d = t.shards) == null ? void 0 : d[l];
    if (!o)
        return !1;
    const a = `${t.runId || "no-run"}:${l}`;
    if (pn.has(a))
        return await pn.get(a),
        !0;
    const f = (async () => {
        const h = `${e}/${da}/${o}`;
        ut("fetching shard", {
            prefix: l,
            shardUrl: h
        });
        const _ = await fetch(h);
        if (!_.ok) {
            ut("shard fetch failed", {
                prefix: l,
                shardUrl: h,
                status: _.status
            });
            return
        }
        const b = await cp(_);
        ut("loaded shard", {
            prefix: l,
            keyCount: Object.keys(b).length
        });
        const m = it.getKey("emoji");
        if (!(m != null && m.manifest))
            return;
        const v = {
            ...m.shardCache || {},
            [l]: b
        };
        it.setKey("emoji", {
            ...m,
            shardCache: v
        })
    }
    )();
    pn.set(a, f);
    try {
        await f
    } finally {
        pn.delete(a)
    }
    return !0
}
function ip(r) {
    return Array.isArray(r) ? r.length === 0 ? [] : Array.isArray(r[0]) ? r : [r] : [r]
}
function ha(r, e) {
    if (!e)
        return null;
    const t = Array.isArray(r) ? r : op(r);
    if (!t.length)
        return null;
    const n = ap(t);
    if (!n)
        return null;
    const s = up(n, e.prefixes || []);
    return s === null ? null : {
        encodedFullPath: n,
        prefix: s
    }
}
function op(r) {
    return Array.isArray(r) ? r.map(e => kl(`${e || ""}`)).filter(e => e.length > 0) : `${r || ""}`.split(/[,\s|>]+/).map(e => kl(e)).filter(e => e.length > 0)
}
function kl(r) {
    const e = `${r || ""}`.trim();
    return /^[GgYy.]{5}$/.test(e) ? e.split("").map(t => t === "." ? "." : t.toLowerCase() === "g" ? "G" : "y").join("") : /^[a-zA-Z]{5}$/.test(e) ? e.toLowerCase() : e
}
function ap(r) {
    let e = "";
    for (const t of r) {
        const n = fp(t);
        if (!n)
            return "";
        e += n
    }
    return e
}
function fp(r) {
    if (`${r || ""}`.length !== 5)
        return "";
    let e = 0;
    for (const t of `${r}`) {
        const n = t === "G" ? 0 : t === "y" ? 1 : t === "." ? 2 : -1;
        if (n < 0)
            return "";
        e = e * 3 + n
    }
    return e.toString(36).padStart(2, "0")
}
function up(r, e) {
    let t = null;
    for (const n of e)
        r.startsWith(n) && (t === null || n.length > t.length) && (t = n);
    return t
}
function ma() {
    return "https://static01.nyt.com"
}
async function cp(r) {
    const e = await r.text()
      , t = e.includes(`\r
`) ? `\r
` : `
`
      , n = e.split(t).filter(Boolean);
    if (n.length <= 1)
        return {};
    const s = {};
    for (let l = 1; l < n.length; l++) {
        const [i,o] = n[l].split(",");
        i && (s[i] = Number(o) || 0)
    }
    return s
}
function Nr(r, e) {
    let t;
    if (e > 0)
        t = Math.min(Br, Math.max(1, Math.round(r / e)));
    else {
        const n = Number(r) > 0 ? Math.round(Number(r)) : Br;
        t = Math.min(Br, Math.max(1, n))
    }
    return `1 in ${t.toLocaleString("en-US")}`
}
const qe = typeof window != "undefined"
  , dp = qe && window.location.host && (window.location.host.indexOf("runway.nyt.net") > -1 || window.location.host.indexOf("alpha-preview.nytimes.com") > -1 || window.location.host.indexOf("localhost") > -1)
  , hp = d2() && m2()
  , mp = []
  , gp = () => {
    var r;
    return qe ? ((r = window == null ? void 0 : window.visualViewport) == null ? void 0 : r.width) || document.documentElement.clientWidth : 0
}
  , pp = () => {
    var r;
    return qe ? ((r = window == null ? void 0 : window.visualViewport) == null ? void 0 : r.height) || document.documentElement.clientHeight : 0
}
  , _p = Xt(0, function(e) {
    const t = () => {
        e(gp())
    }
    ;
    return qe && (window.addEventListener("resize", t),
    Promise.resolve(ho).then( () => {
        t()
    }
    )),
    function() {
        qe && window.removeEventListener("resize", t)
    }
})
  , Ve = Pt(_p, r => qe && r ? Math.max(window.innerWidth, r) : 0)
  , ga = Xt(0, function(e) {
    const t = () => {
        e(pp())
    }
    ;
    return qe && (window.addEventListener("resize", t),
    Promise.resolve(ho).then( () => {
        t()
    }
    )),
    function() {
        qe && window.removeEventListener("resize", t)
    }
})
  , bp = Pt(ga, r => qe && r ? Math.max(window.innerHeight, r) : 0)
  , pa = Pt(Ve, r => !(qe && r >= En.desktop && !h2()))
  , C6 = Pt(pa, r => !r);
Pt(Ve, r => {
    const e = Object.entries(En).map( ([n,s]) => ({
        name: n,
        width: s
    })).concat().sort(Ht("width"));
    let t = e[0].name;
    return e.forEach(n => {
        r >= n.width && (t = n.name)
    }
    ),
    t
}
);
const _s = Pt(ga, (r, e) => {
    let t, n = 0;
    return qe && (t || (t = document.createElement("div"),
    t.id = "g-freebird-100vh-placeholder",
    Object.assign(t.style, {
        position: "absolute",
        height: "100vh",
        width: 0,
        left: "-300vh",
        top: 0
    }),
    document.body.append(t)),
    n = hp ? r : t.clientHeight),
    e(n),
    () => {
        t && t.remove()
    }
}
)
  , _a = Xt(qe);
var co;
const vp = Xt(qe && ((co = window == null ? void 0 : window.matchMedia("(prefers-reduced-motion)")) == null ? void 0 : co.matches));
Xt({
    dockHeight: 0,
    dockVisible: !1,
    dockExpanded: !1
}, function(e) {
    const t = s => {
        e({
            dockHeight: s.detail.dockHeight,
            dockVisible: s.detail.dockVisible,
            dockExpanded: s.detail.dockExpanded
        })
    }
      , n = s => t(s);
    return qe && window.addEventListener("dockInfo", n),
    function() {
        qe && window.removeEventListener("dockInfo", n)
    }
});
const S6 = Xt(null, function(e) {
    let t = !1;
    const n = () => {
        var o;
        if (!qe)
            return;
        if (dp && !(window.location.host.indexOf("alpha-preview.nytimes.com") > -1)) {
            e(mp),
            t = !0;
            return
        }
        const l = JSON.parse(window.userXhrObject.response).data
          , i = (o = l == null ? void 0 : l.user) == null ? void 0 : o.userInfo;
        l._typeName === "User" && (t = !0),
        e(i.entitlements)
    }
    ;
    let s = setInterval( () => {
        t ? clearInterval(s) : n()
    }
    , 250);
    return function() {
        clearInterval(s)
    }
})
  , wp = nr(!1)
  , bs = r => {
    const e = nr(r)
      , {subscribe: t, set: n, update: s} = e;
    return {
        subscribe: t,
        set: n,
        update: s,
        setKey: (l, i) => {
            s(o => ({
                ...o,
                [l]: i
            }))
        }
        ,
        getKey: l => {
            var i;
            return (i = xr(e)) == null ? void 0 : i[l]
        }
    }
}
  , yp = bs({
    all: [],
    ps: [],
    psDate: ""
})
  , ba = bs({
    game: void 0,
    settings: void 0
})
  , it = bs({
    emoji: void 0,
    date: void 0,
    mode: void 0
})
  , kp = Pt([yp, wp, ba], ([r,e,t], n) => {
    const {game: s, settings: l} = t;
    if (!s || !r.psDate) {
        n(e ? r.ps : r.all);
        return
    }
    let i = s.dayOffset || vl(s.solution)
      , o = sn
      , a = new Date(r.psDate);
    o.setHours(0, 0, 0, 0),
    a.setHours(0, 0, 0, 0);
    let f = Math.round((a - o) / (1e3 * 60 * 60 * 24));
    if (e) {
        if (f > i) {
            n(r.ps);
            return
        }
        let u = Math.min(...r.ps.map(d => d.prior))
          , c = r.ps.map(d => {
            let h = vl(d.word);
            return h > f && h < i ? {
                ...d,
                prior: u
            } : d
        }
        );
        n(c);
        return
    } else {
        n(r.all);
        return
    }
}
)
  , Vn = {
    LOADING: "loading",
    NO_GAMES_PLAYED: "no-games-found",
    FOUND_LOCAL_STORAGE_GAME: "found-local-storage-game",
    FOUND_LOCAL_STORAGE_GAME_FAILED: "found-local-storage-game-failed",
    FOUND_LOCAL_STORAGE_GAME_UNFINISHED: "found-local-storage-game-unfinished",
    ANALYZING_GAME: "analyzing-game",
    RECOGNIZER_ERROR: "recognizer-error",
    GAME_ANALYZED: "game-analyzed",
    SCREENSHOT_UPLOADED: "screenshot-uploaded"
}
  , Dr = nr(Vn.LOADING);
let Tl = 0;
const P6 = Pt([kp, ba], ([r,e], t) => {
    const {game: n, settings: s} = e;
    if (!r) {
        t({});
        return
    }
    if (!n || !s) {
        t({});
        return
    }
    n.guesses && !n.boardState && (n.boardState = n.guesses);
    const l = n.boardState.filter(h => h.length == 5);
    let i = n.solution;
    n.status == "WIN" ? i = l[l.length - 1] : n.solution || (i = Lg(n.dayOffset));
    let o = n.results || l.map(h => ra(h, i))
      , a = null;
    n && n.timestamps && n.timestamps.version && (a = n.timestamps.version);
    const f = s && s.hardMode ? "hard" : "normal"
      , u = s && s.colorblindMode
      , c = ++Tl
      , d = setTimeout(async () => {
        const h = () => c !== Tl;
        if (h())
            return;
        Dr.set(Vn.ANALYZING_GAME);
        let _ = {
            guesses: l,
            results: o,
            mode: f,
            cbmode: u,
            solution: i,
            method: s && s.method ? s.method : "storage",
            version: a
        };
        _.solution = _.solution || Pn(_.guesses, _.results),
        _.stepsToSolve = Gg(_.guesses, _.results);
        const b = Number.isInteger(n.dayOffset) && n.dayOffset >= 0;
        _.gameNumber = b ? n.dayOffset : Wt(_.solution),
        _.gameDate = b ? Dg(n.dayOffset) : Ng(_.solution);
        const m = it.getKey("date");
        if ((it.getKey("mode") !== f || m !== _.gameDate) && qe && _.solution && _.gameDate)
            try {
                if (await sp(_.solution, _.gameDate, f, _.results),
                h())
                    return
            } catch (A) {
                if (h())
                    return;
                console.warn("Unable to download uniqueness JSON", A),
                it.set({
                    ...xr(it),
                    emoji: void 0,
                    date: void 0,
                    mode: void 0
                })
            }
        if (!h()) {
            try {
                if (await zg(l, o, f, i, r),
                h())
                    return;
                Dr.set(Vn.GAME_ANALYZED)
            } catch (A) {
                if (h())
                    return;
                console.log("ERROR", A),
                Dr.set(Vn.RECOGNIZER_ERROR)
            }
            h() || (t(_),
            _t("game-analysis-completed", _))
        }
    }
    , 0);
    return () => clearTimeout(d)
}
, {});
function Tp(r) {
    return {
        c: q,
        l: q,
        m: q,
        p: q,
        i: q,
        o: q,
        d: q
    }
}
function Ep(r) {
    let e;
    const t = r[2].default
      , n = We(t, r, r[1], null);
    return {
        c() {
            n && n.c()
        },
        l(s) {
            n && n.l(s)
        },
        m(s, l) {
            n && n.m(s, l),
            e = !0
        },
        p(s, l) {
            n && n.p && (!e || l & 2) && Ue(n, t, s, s[1], e ? He(t, s[1], l, null) : Fe(s[1]), null)
        },
        i(s) {
            e || (w(n, s),
            e = !0)
        },
        o(s) {
            y(n, s),
            e = !1
        },
        d(s) {
            n && n.d(s)
        }
    }
}
function Ip(r) {
    let e, t, n, s;
    const l = [Ep, Tp]
      , i = [];
    function o(a, f) {
        return a[0] ? 0 : 1
    }
    return e = o(r),
    t = i[e] = l[e](r),
    {
        c() {
            t.c(),
            n = te()
        },
        l(a) {
            t.l(a),
            n = te()
        },
        m(a, f) {
            i[e].m(a, f),
            M(a, n, f),
            s = !0
        },
        p(a, [f]) {
            let u = e;
            e = o(a),
            e === u ? i[e].p(a, f) : (le(),
            y(i[u], 1, 1, () => {
                i[u] = null
            }
            ),
            ie(),
            t = i[e],
            t ? t.p(a, f) : (t = i[e] = l[e](a),
            t.c()),
            w(t, 1),
            t.m(n.parentNode, n))
        },
        i(a) {
            s || (w(t),
            s = !0)
        },
        o(a) {
            y(t),
            s = !1
        },
        d(a) {
            a && p(n),
            i[e].d(a)
        }
    }
}
function Ap(r, e, t) {
    let n;
    Ee(r, _a, i => t(0, n = i));
    let {$$slots: s={}, $$scope: l} = e;
    return r.$$set = i => {
        "$$scope"in i && t(1, l = i.$$scope)
    }
    ,
    [n, l, s]
}
class Cp extends x {
    constructor(e) {
        super(),
        $(this, e, Ap, Ip, Z, {})
    }
}
function Sp(r) {
    let e, t, n, s, l = !1, i, o = !0, a, f;
    function u() {
        cancelAnimationFrame(i),
        e.paused || (i = Ba(u),
        l = !0),
        r[20].call(e)
    }
    return {
        c() {
            e = N("video"),
            this.h()
        },
        l(c) {
            e = B(c, "VIDEO", {
                class: !0,
                src: !0,
                poster: !0,
                width: !0,
                height: !0,
                preload: !0,
                "aria-label": !0,
                disableremoteplayback: !0
            }),
            S(e).forEach(p),
            this.h()
        },
        h() {
            g(e, "class", t = r[18] + " readystate-" + (r[2] || 0) + " svelte-1d6mogr"),
            gt(e.src, n = r[8]) || g(e, "src", n),
            e.autoplay = r[12],
            g(e, "poster", r[9]),
            g(e, "width", r[10]),
            g(e, "height", r[11]),
            e.controls = r[13],
            e.loop = r[14],
            e.playsInline = r[15],
            g(e, "preload", r[16]),
            g(e, "aria-label", s = r[17] || void 0),
            g(e, "disableremoteplayback", ""),
            (r[3] === void 0 || r[6] === void 0) && xe(u),
            r[1] === void 0 && xe( () => r[21].call(e)),
            r[6] === void 0 && xe( () => r[24].call(e)),
            r[7] === void 0 && xe( () => r[25].call(e)),
            r[7] === void 0 && xe( () => r[26].call(e)),
            r[2] === void 0 && xe( () => r[27].call(e))
        },
        m(c, d) {
            M(c, e, d),
            r[19](e),
            e.muted = r[4],
            a || (f = [ge(e, "timeupdate", u), ge(e, "durationchange", r[21]), ge(e, "volumechange", r[22]), ge(e, "play", r[23]), ge(e, "pause", r[23]), ge(e, "ended", r[24]), ge(e, "progress", r[25]), ge(e, "loadedmetadata", r[26]), ge(e, "loadedmetadata", r[27]), ge(e, "loadeddata", r[27]), ge(e, "canplay", r[27]), ge(e, "canplaythrough", r[27]), ge(e, "playing", r[27]), ge(e, "waiting", r[27]), ge(e, "emptied", r[27])],
            a = !0)
        },
        p(c, d) {
            d & 262148 && t !== (t = c[18] + " readystate-" + (c[2] || 0) + " svelte-1d6mogr") && g(e, "class", t),
            d & 256 && !gt(e.src, n = c[8]) && g(e, "src", n),
            d & 4096 && (e.autoplay = c[12]),
            d & 512 && g(e, "poster", c[9]),
            d & 1024 && g(e, "width", c[10]),
            d & 2048 && g(e, "height", c[11]),
            d & 8192 && (e.controls = c[13]),
            d & 16384 && (e.loop = c[14]),
            d & 32768 && (e.playsInline = c[15]),
            d & 65536 && g(e, "preload", c[16]),
            d & 131072 && s !== (s = c[17] || void 0) && g(e, "aria-label", s),
            !l && d & 8 && !isNaN(c[3]) && (e.currentTime = c[3]),
            l = !1,
            d & 16 && (e.muted = c[4]),
            d & 32 && o !== (o = c[5]) && e[o ? "pause" : "play"]()
        },
        d(c) {
            c && p(e),
            r[19](null),
            a = !1,
            St(f)
        }
    }
}
function Pp(r) {
    let e, t;
    return e = new Cp({
        props: {
            $$slots: {
                default: [Sp]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, [s]) {
            const l = {};
            s & 268959743 && (l.$$scope = {
                dirty: s,
                ctx: n
            }),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function Op(r, e, t) {
    let {src: n=""} = e
      , {poster: s=""} = e
      , {width: l=""} = e
      , {height: i=""} = e
      , {autoplay: o=!1} = e
      , {controls: a=!0} = e
      , {loop: f=!1} = e
      , {playsinline: u=!0} = e
      , {preload: c="auto"} = e
      , {altText: d=""} = e
      , {className: h="g-video"} = e
      , {videoEl: _=null} = e
      , {currentTime: b=null} = e
      , {duration: m=null} = e
      , {muted: v=!1} = e
      , {paused: k=null} = e
      , {ended: A=null} = e
      , {buffered: j=null} = e
      , {readyState: P=null} = e;
    function T(F) {
        me[F ? "unshift" : "push"]( () => {
            _ = F,
            t(0, _)
        }
        )
    }
    function O() {
        b = this.currentTime,
        A = this.ended,
        t(3, b),
        t(6, A)
    }
    function D() {
        m = this.duration,
        t(1, m),
        t(2, P),
        t(0, _)
    }
    function I() {
        v = this.muted,
        t(4, v)
    }
    function ee() {
        k = this.paused,
        t(5, k)
    }
    function K() {
        A = this.ended,
        t(6, A)
    }
    function ne() {
        j = Ts(this.buffered),
        t(7, j)
    }
    function R() {
        j = Ts(this.buffered),
        t(7, j)
    }
    function se() {
        P = this.readyState,
        t(2, P)
    }
    return r.$$set = F => {
        "src"in F && t(8, n = F.src),
        "poster"in F && t(9, s = F.poster),
        "width"in F && t(10, l = F.width),
        "height"in F && t(11, i = F.height),
        "autoplay"in F && t(12, o = F.autoplay),
        "controls"in F && t(13, a = F.controls),
        "loop"in F && t(14, f = F.loop),
        "playsinline"in F && t(15, u = F.playsinline),
        "preload"in F && t(16, c = F.preload),
        "altText"in F && t(17, d = F.altText),
        "className"in F && t(18, h = F.className),
        "videoEl"in F && t(0, _ = F.videoEl),
        "currentTime"in F && t(3, b = F.currentTime),
        "duration"in F && t(1, m = F.duration),
        "muted"in F && t(4, v = F.muted),
        "paused"in F && t(5, k = F.paused),
        "ended"in F && t(6, A = F.ended),
        "buffered"in F && t(7, j = F.buffered),
        "readyState"in F && t(2, P = F.readyState)
    }
    ,
    r.$$.update = () => {
        r.$$.dirty & 7 && P && !m && _ != null && _.duration && t(1, m = _.duration)
    }
    ,
    [_, m, P, b, v, k, A, j, n, s, l, i, o, a, f, u, c, d, h, T, O, D, I, ee, K, ne, R, se]
}
let va = class extends x {
    constructor(e) {
        super(),
        $(this, e, Op, Pp, Z, {
            src: 8,
            poster: 9,
            width: 10,
            height: 11,
            autoplay: 12,
            controls: 13,
            loop: 14,
            playsinline: 15,
            preload: 16,
            altText: 17,
            className: 18,
            videoEl: 0,
            currentTime: 3,
            duration: 1,
            muted: 4,
            paused: 5,
            ended: 6,
            buffered: 7,
            readyState: 2
        })
    }
}
;
function Mp(r) {
    let e, t;
    return {
        c() {
            e = he("svg"),
            t = he("path"),
            this.h()
        },
        l(n) {
            e = de(n, "svg", {
                version: !0,
                xmlns: !0,
                "xmlns:xlink": !0,
                x: !0,
                y: !0,
                viewBox: !0,
                style: !0,
                "xml:space": !0
            });
            var s = S(e);
            t = de(s, "path", {
                class: !0,
                d: !0
            }),
            S(t).forEach(p),
            s.forEach(p),
            this.h()
        },
        h() {
            g(t, "class", "st0 svelte-1orhcas"),
            g(t, "d", `M59.6,12.2l6.3-10.4L36.9,4.3L48.2,31l6.7-11.1c9.6,7.3,13.3,20.5,8,31.9c-6,13.2-21.7,19.1-34.9,13
		C14.8,58.9,9,43.2,15,29.9l-8.2-3.7C-1.3,44,6.6,65,24.3,73.1c4.7,2.2,9.7,3.2,14.6,3.2c13.4,0,26.3-7.7,32.2-20.7
		C78.3,40,73.1,21.8,59.6,12.2z`),
            g(e, "version", "1.1"),
            g(e, "xmlns", "http://www.w3.org/2000/svg"),
            g(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"),
            g(e, "x", "0px"),
            g(e, "y", "0px"),
            g(e, "viewBox", "0 0 78 78"),
            st(e, "enable-background", "new 0 0 78 78"),
            g(e, "xml:space", "preserve")
        },
        m(n, s) {
            M(n, e, s),
            E(e, t)
        },
        p: q,
        i: q,
        o: q,
        d(n) {
            n && p(e)
        }
    }
}
class jp extends x {
    constructor(e) {
        super(),
        $(this, e, null, Mp, Z, {})
    }
}
function Bp(r) {
    let e, t, n, s, l, i, o = "Play again", a, f, u;
    return s = new jp({}),
    {
        c() {
            e = N("div"),
            t = N("button"),
            n = N("span"),
            W(s.$$.fragment),
            l = Q(),
            i = N("span"),
            i.textContent = o,
            this.h()
        },
        l(c) {
            e = B(c, "DIV", {
                class: !0
            });
            var d = S(e);
            t = B(d, "BUTTON", {
                class: !0
            });
            var h = S(t);
            n = B(h, "SPAN", {
                class: !0
            });
            var _ = S(n);
            U(s.$$.fragment, _),
            _.forEach(p),
            l = X(h),
            i = B(h, "SPAN", {
                class: !0,
                "data-svelte-h": !0
            }),
            It(i) !== "svelte-1fxk2b7" && (i.textContent = o),
            h.forEach(p),
            d.forEach(p),
            this.h()
        },
        h() {
            g(n, "class", "icon-wrapper svelte-1yk6v22"),
            g(i, "class", "play-again-label svelte-1yk6v22"),
            g(t, "class", "svelte-1yk6v22"),
            g(e, "class", "play-again svelte-1yk6v22")
        },
        m(c, d) {
            M(c, e, d),
            E(e, t),
            E(t, n),
            z(s, n, null),
            E(t, l),
            E(t, i),
            a = !0,
            f || (u = ge(t, "click", r[0]),
            f = !0)
        },
        p: q,
        i(c) {
            a || (w(s.$$.fragment, c),
            a = !0)
        },
        o(c) {
            y(s.$$.fragment, c),
            a = !1
        },
        d(c) {
            c && p(e),
            G(s),
            f = !1,
            u()
        }
    }
}
function Np(r, e, t) {
    let {active: n} = e
      , {currentTime: s} = e;
    function l() {
        t(2, s = 0),
        t(1, n = !0)
    }
    return r.$$set = i => {
        "active"in i && t(1, n = i.active),
        "currentTime"in i && t(2, s = i.currentTime)
    }
    ,
    [l, n, s]
}
class Dp extends x {
    constructor(e) {
        super(),
        $(this, e, Np, Bp, Z, {
            active: 1,
            currentTime: 2
        })
    }
}
function Lp(r) {
    let e, t;
    return {
        c() {
            e = he("svg"),
            t = he("path"),
            this.h()
        },
        l(n) {
            e = de(n, "svg", {
                xmlns: !0,
                viewBox: !0
            });
            var s = S(e);
            t = de(s, "path", {
                class: !0,
                d: !0
            }),
            S(t).forEach(p),
            s.forEach(p),
            this.h()
        },
        h() {
            g(t, "class", "cls-1 svelte-wl5d35"),
            g(t, "d", "m13.3,31.5c-.9.6-1.7.1-1.7-1V9.5c0-1.1.8-1.5,1.7-1l17.4,10.5c.9.6.9,1.5,0,2.1l-17.4,10.4Z"),
            g(e, "xmlns", "http://www.w3.org/2000/svg"),
            g(e, "viewBox", "0 0 40 40")
        },
        m(n, s) {
            M(n, e, s),
            E(e, t)
        },
        p: q,
        i: q,
        o: q,
        d(n) {
            n && p(e)
        }
    }
}
class wa extends x {
    constructor(e) {
        super(),
        $(this, e, null, Lp, Z, {})
    }
}
function Rp(r) {
    let e, t, n;
    return {
        c() {
            e = he("svg"),
            t = he("path"),
            n = he("path"),
            this.h()
        },
        l(s) {
            e = de(s, "svg", {
                xmlns: !0,
                viewBox: !0
            });
            var l = S(e);
            t = de(l, "path", {
                class: !0,
                d: !0
            }),
            S(t).forEach(p),
            n = de(l, "path", {
                class: !0,
                d: !0
            }),
            S(n).forEach(p),
            l.forEach(p),
            this.h()
        },
        h() {
            g(t, "class", "cls-1 svelte-1orhcas"),
            g(t, "d", "m10.8,9.2c0-.6.4-1,1-1h4.3c.6,0,1,.4,1,1v22c0,.5-.4,1-1,1h-4.3c-.6,0-1-.5-1-1V9.2Z"),
            g(n, "class", "cls-1 svelte-1orhcas"),
            g(n, "d", "m22.5,9.2c0-.6.5-1,1-1h4.3c.6,0,1,.4,1,1v22c0,.5-.4,1-1,1h-4.3c-.5,0-1-.5-1-1V9.2Z"),
            g(e, "xmlns", "http://www.w3.org/2000/svg"),
            g(e, "viewBox", "0 0 40 40")
        },
        m(s, l) {
            M(s, e, l),
            E(e, t),
            E(e, n)
        },
        p: q,
        i: q,
        o: q,
        d(s) {
            s && p(e)
        }
    }
}
class Vp extends x {
    constructor(e) {
        super(),
        $(this, e, null, Rp, Z, {})
    }
}
function Gp(r) {
    let e, t, n, s, l, i, o, a, f;
    return n = new wa({}),
    i = new Vp({}),
    {
        c() {
            e = N("button"),
            t = N("span"),
            W(n.$$.fragment),
            s = Q(),
            l = N("span"),
            W(i.$$.fragment),
            this.h()
        },
        l(u) {
            e = B(u, "BUTTON", {
                class: !0
            });
            var c = S(e);
            t = B(c, "SPAN", {
                class: !0
            });
            var d = S(t);
            U(n.$$.fragment, d),
            d.forEach(p),
            s = X(c),
            l = B(c, "SPAN", {
                class: !0
            });
            var h = S(l);
            U(i.$$.fragment, h),
            h.forEach(p),
            c.forEach(p),
            this.h()
        },
        h() {
            g(t, "class", "icon-wrapper svelte-mjzpr"),
            J(t, "active", r[0] || r[0] === null),
            g(l, "class", "icon-wrapper svelte-mjzpr"),
            J(l, "active", r[0] === !1),
            g(e, "class", "svelte-mjzpr")
        },
        m(u, c) {
            M(u, e, c),
            E(e, t),
            z(n, t, null),
            E(e, s),
            E(e, l),
            z(i, l, null),
            o = !0,
            a || (f = ge(e, "click", r[1]),
            a = !0)
        },
        p(u, [c]) {
            (!o || c & 1) && J(t, "active", u[0] || u[0] === null),
            (!o || c & 1) && J(l, "active", u[0] === !1)
        },
        i(u) {
            o || (w(n.$$.fragment, u),
            w(i.$$.fragment, u),
            o = !0)
        },
        o(u) {
            y(n.$$.fragment, u),
            y(i.$$.fragment, u),
            o = !1
        },
        d(u) {
            u && p(e),
            G(n),
            G(i),
            a = !1,
            f()
        }
    }
}
function zp(r, e, t) {
    let {active: n} = e
      , {paused: s} = e;
    function l(i) {
        i.stopPropagation(),
        t(2, n = !n)
    }
    return r.$$set = i => {
        "active"in i && t(2, n = i.active),
        "paused"in i && t(0, s = i.paused)
    }
    ,
    [s, l, n]
}
class Wp extends x {
    constructor(e) {
        super(),
        $(this, e, zp, Gp, Z, {
            active: 2,
            paused: 0
        })
    }
}
function El(r) {
    let e, t, n, s, l, i;
    return {
        c() {
            e = N("progress"),
            n = Q(),
            s = N("button"),
            this.h()
        },
        l(o) {
            e = B(o, "PROGRESS", {
                max: !0,
                class: !0
            }),
            S(e).forEach(p),
            n = X(o),
            s = B(o, "BUTTON", {
                class: !0
            }),
            S(s).forEach(p),
            this.h()
        },
        h() {
            e.value = t = r[0] / r[1] * 100 || 0,
            g(e, "max", "100"),
            g(e, "class", "svelte-1kmxewa"),
            g(s, "class", "svelte-1kmxewa")
        },
        m(o, a) {
            M(o, e, a),
            M(o, n, a),
            M(o, s, a),
            l || (i = [ge(s, "mousedown", r[2]), ge(s, "touchstart", r[3])],
            l = !0)
        },
        p(o, a) {
            a & 3 && t !== (t = o[0] / o[1] * 100 || 0) && (e.value = t)
        },
        d(o) {
            o && (p(e),
            p(n),
            p(s)),
            l = !1,
            St(i)
        }
    }
}
function Up(r) {
    let e, t = r[0] && r[1] && El(r);
    return {
        c() {
            e = N("div"),
            t && t.c(),
            this.h()
        },
        l(n) {
            e = B(n, "DIV", {
                class: !0
            });
            var s = S(e);
            t && t.l(s),
            s.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", "g-progress-bar svelte-1kmxewa")
        },
        m(n, s) {
            M(n, e, s),
            t && t.m(e, null)
        },
        p(n, [s]) {
            n[0] && n[1] ? t ? t.p(n, s) : (t = El(n),
            t.c(),
            t.m(e, null)) : t && (t.d(1),
            t = null)
        },
        i: q,
        o: q,
        d(n) {
            n && p(e),
            t && t.d()
        }
    }
}
function Fp(r, e, t) {
    let {currentTime: n} = e, {duration: s} = e, l;
    function i(u, c) {
        l = u.target.getBoundingClientRect(),
        o(c)
    }
    function o(u) {
        if (!s)
            return;
        const {left: c, right: d} = l;
        t(0, n = s * (u - c) / (d - c))
    }
    function a(u) {
        u.preventDefault(),
        i(u, u.clientX);
        function c(h) {
            o(h.clientX)
        }
        function d() {
            window.removeEventListener("mousemove", c),
            window.removeEventListener("mouseup", d)
        }
        window.addEventListener("mousemove", c),
        window.addEventListener("mouseup", d)
    }
    function f(u) {
        if (u.preventDefault(),
        u.touches.length !== 1)
            return;
        const c = u.touches[0]
          , d = c.identifier;
        i(u, c.clientX);
        function h(b) {
            if (b.touches.length !== 1)
                return;
            const m = b.touches[0];
            m.identifier === d && o(m.clientX)
        }
        function _() {
            window.removeEventListener("touchmove", h),
            window.removeEventListener("touchend", _)
        }
        window.addEventListener("touchmove", h),
        window.addEventListener("touchend", _)
    }
    return r.$$set = u => {
        "currentTime"in u && t(0, n = u.currentTime),
        "duration"in u && t(1, s = u.duration)
    }
    ,
    [n, s, a, f]
}
class Hp extends x {
    constructor(e) {
        super(),
        $(this, e, Fp, Up, Z, {
            currentTime: 0,
            duration: 1
        })
    }
}
function qp(r) {
    let e, t = Ln(r[0]) + "", n, s, l = Ln(r[1]) + "", i;
    return {
        c() {
            e = N("span"),
            n = ae(t),
            s = ae(" / "),
            i = ae(l),
            this.h()
        },
        l(o) {
            e = B(o, "SPAN", {
                class: !0
            });
            var a = S(e);
            n = oe(a, t),
            s = oe(a, " / "),
            i = oe(a, l),
            a.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", "time svelte-1dxohh3")
        },
        m(o, a) {
            M(o, e, a),
            E(e, n),
            E(e, s),
            E(e, i)
        },
        p(o, [a]) {
            a & 1 && t !== (t = Ln(o[0]) + "") && pe(n, t),
            a & 2 && l !== (l = Ln(o[1]) + "") && pe(i, l)
        },
        i: q,
        o: q,
        d(o) {
            o && p(e)
        }
    }
}
function Ln(r) {
    if (isNaN(r))
        return "...";
    const e = Math.floor(r / 60);
    return r = Math.floor(r % 60),
    r < 10 && (r = "0" + r),
    `${e}:${r}`
}
function Kp(r, e, t) {
    let {currentTime: n} = e
      , {duration: s} = e;
    return r.$$set = l => {
        "currentTime"in l && t(0, n = l.currentTime),
        "duration"in l && t(1, s = l.duration)
    }
    ,
    [n, s]
}
class Yp extends x {
    constructor(e) {
        super(),
        $(this, e, Kp, qp, Z, {
            currentTime: 0,
            duration: 1
        })
    }
}
function Zp(r) {
    let e, t, n;
    return {
        c() {
            e = he("svg"),
            t = he("path"),
            n = he("path"),
            this.h()
        },
        l(s) {
            e = de(s, "svg", {
                xmlns: !0,
                viewBox: !0
            });
            var l = S(e);
            t = de(l, "path", {
                class: !0,
                d: !0
            }),
            S(t).forEach(p),
            n = de(l, "path", {
                class: !0,
                d: !0
            }),
            S(n).forEach(p),
            l.forEach(p),
            this.h()
        },
        h() {
            g(t, "class", "cls-1 svelte-1orhcas"),
            g(t, "d", "m34.43,20.09c0-3.56-1.39-6.91-3.91-9.43l-1.78,1.78c2.04,2.04,3.17,4.76,3.17,7.65,0,2.47-.83,4.8-2.34,6.7l-2.38-2.38c2.07-2.93,1.82-7.01-.8-9.63l-1.78,1.78c1.64,1.63,1.88,4.12.76,6.03l-4.29-4.29v-8.82c0-1.24-1.51-1.87-2.39-.99l-3.71,3.71-4.89-4.89-1.78,1.78,23.09,23.09,1.78-1.78-1.82-1.82c1.98-2.39,3.06-5.36,3.06-8.5Z"),
            g(n, "class", "cls-1 svelte-1orhcas"),
            g(n, "d", "m8.51,13.11c-.77,0-1.4.63-1.4,1.4v11.18c0,.77.63,1.4,1.4,1.4h5.59l4.6,4.6c.88.88,2.39.26,2.39-.99v-5.3l-12.29-12.29h-.29Z"),
            g(e, "xmlns", "http://www.w3.org/2000/svg"),
            g(e, "viewBox", "0 0 40 40")
        },
        m(s, l) {
            M(s, e, l),
            E(e, t),
            E(e, n)
        },
        p: q,
        i: q,
        o: q,
        d(s) {
            s && p(e)
        }
    }
}
class Xp extends x {
    constructor(e) {
        super(),
        $(this, e, null, Zp, Z, {})
    }
}
function Qp(r) {
    let e, t, n, s;
    return {
        c() {
            e = he("svg"),
            t = he("path"),
            n = he("path"),
            s = he("path"),
            this.h()
        },
        l(l) {
            e = de(l, "svg", {
                xmlns: !0,
                viewBox: !0
            });
            var i = S(e);
            t = de(i, "path", {
                class: !0,
                d: !0
            }),
            S(t).forEach(p),
            n = de(i, "path", {
                class: !0,
                d: !0
            }),
            S(n).forEach(p),
            s = de(i, "path", {
                class: !0,
                d: !0
            }),
            S(s).forEach(p),
            i.forEach(p),
            this.h()
        },
        h() {
            g(t, "class", "cls-1 svelte-1orhcas"),
            g(t, "d", "m18.71,8.41l-4.6,4.6h-5.59c-.77,0-1.4.63-1.4,1.4v11.18c0,.77.63,1.4,1.4,1.4h5.59l4.6,4.6c.88.88,2.39.26,2.39-.99V9.4c0-1.24-1.51-1.87-2.39-.99Z"),
            g(n, "class", "cls-1 svelte-1orhcas"),
            g(n, "d", "m30.52,29.43l-1.78-1.78c2.04-2.04,3.17-4.76,3.17-7.65s-1.13-5.61-3.17-7.65l1.78-1.78c2.52,2.52,3.91,5.87,3.91,9.43s-1.39,6.91-3.91,9.43Z"),
            g(s, "class", "cls-1 svelte-1orhcas"),
            g(s, "d", "m26.39,25.3l-1.78-1.78c1.94-1.94,1.94-5.11,0-7.05l1.78-1.78c2.92,2.92,2.92,7.68,0,10.61Z"),
            g(e, "xmlns", "http://www.w3.org/2000/svg"),
            g(e, "viewBox", "0 0 40 40")
        },
        m(l, i) {
            M(l, e, i),
            E(e, t),
            E(e, n),
            E(e, s)
        },
        p: q,
        i: q,
        o: q,
        d(l) {
            l && p(e)
        }
    }
}
class Jp extends x {
    constructor(e) {
        super(),
        $(this, e, null, Qp, Z, {})
    }
}
function xp(r) {
    let e, t, n, s = r[0] ? "Muted" : "Unmuted", l, i, o, a, f, u, c, d, h, _;
    return a = new Xp({}),
    c = new Jp({}),
    {
        c() {
            e = N("div"),
            t = N("button"),
            n = N("span"),
            l = ae(s),
            i = Q(),
            o = N("span"),
            W(a.$$.fragment),
            f = Q(),
            u = N("span"),
            W(c.$$.fragment),
            this.h()
        },
        l(b) {
            e = B(b, "DIV", {
                class: !0
            });
            var m = S(e);
            t = B(m, "BUTTON", {
                class: !0
            });
            var v = S(t);
            n = B(v, "SPAN", {
                class: !0
            });
            var k = S(n);
            l = oe(k, s),
            k.forEach(p),
            i = X(v),
            o = B(v, "SPAN", {
                class: !0
            });
            var A = S(o);
            U(a.$$.fragment, A),
            A.forEach(p),
            f = X(v),
            u = B(v, "SPAN", {
                class: !0
            });
            var j = S(u);
            U(c.$$.fragment, j),
            j.forEach(p),
            v.forEach(p),
            m.forEach(p),
            this.h()
        },
        h() {
            g(n, "class", "label"),
            g(o, "class", "icon-wrapper svelte-8zr9nv"),
            J(o, "active", r[0]),
            g(u, "class", "icon-wrapper svelte-8zr9nv"),
            J(u, "active", !r[0]),
            g(t, "class", "svelte-8zr9nv"),
            g(e, "class", "g-video_toggle-mute svelte-8zr9nv")
        },
        m(b, m) {
            M(b, e, m),
            E(e, t),
            E(t, n),
            E(n, l),
            E(t, i),
            E(t, o),
            z(a, o, null),
            E(t, f),
            E(t, u),
            z(c, u, null),
            d = !0,
            h || (_ = ge(t, "click", r[1]),
            h = !0)
        },
        p(b, [m]) {
            (!d || m & 1) && s !== (s = b[0] ? "Muted" : "Unmuted") && pe(l, s),
            (!d || m & 1) && J(o, "active", b[0]),
            (!d || m & 1) && J(u, "active", !b[0])
        },
        i(b) {
            d || (w(a.$$.fragment, b),
            w(c.$$.fragment, b),
            d = !0)
        },
        o(b) {
            y(a.$$.fragment, b),
            y(c.$$.fragment, b),
            d = !1
        },
        d(b) {
            b && p(e),
            G(a),
            G(c),
            h = !1,
            _()
        }
    }
}
function $p(r, e, t) {
    let {muted: n} = e;
    function s(l) {
        l.stopPropagation(),
        t(0, n = !n)
    }
    return r.$$set = l => {
        "muted"in l && t(0, n = l.muted)
    }
    ,
    [n, s]
}
class e_ extends x {
    constructor(e) {
        super(),
        $(this, e, $p, xp, Z, {
            muted: 0
        })
    }
}
function t_(r) {
    let e, t, n, s, l;
    return {
        c() {
            e = he("svg"),
            t = he("g"),
            n = he("path"),
            s = he("path"),
            l = he("path"),
            this.h()
        },
        l(i) {
            e = de(i, "svg", {
                version: !0,
                xmlns: !0,
                "xmlns:xlink": !0,
                x: !0,
                y: !0,
                viewBox: !0,
                style: !0,
                "xml:space": !0
            });
            var o = S(e);
            t = de(o, "g", {});
            var a = S(t);
            n = de(a, "path", {
                d: !0,
                class: !0
            }),
            S(n).forEach(p),
            s = de(a, "path", {
                d: !0,
                class: !0
            }),
            S(s).forEach(p),
            a.forEach(p),
            l = de(o, "path", {
                d: !0,
                class: !0
            }),
            S(l).forEach(p),
            o.forEach(p),
            this.h()
        },
        h() {
            g(n, "d", `M63.6,57.2c-2.3,9.4-8.3,13-15.9,13c-4.8,0-9.2-2.1-12.3-6.2c-2.7-3.6-4-7.7-4-13.5c0-6.4,1.6-11.1,5.1-15
		c3-3.2,7.1-5,12-5c8.8,0,13.8,6,14.7,13.4l-9.1,0.9c-0.2-3.4-1.5-6.6-5.8-6.6c-3.1,0-5,2.1-5.9,5.3c-0.5,1.7-0.7,4.2-0.7,6.9
		c0,2.8,0.3,5.6,0.7,6.8c1,3.6,3.4,5.2,6.4,5.2c3.6,0,6.2-2.6,7.3-6.9L63.6,57.2z`),
            g(n, "class", "svelte-1orhcas"),
            g(s, "d", `M100.2,57.2c-2.3,9.4-8.3,13-15.9,13c-4.8,0-9.2-2.1-12.3-6.2c-2.7-3.6-4-7.7-4-13.5c0-6.4,1.6-11.1,5.1-15
		c3-3.2,7.1-5,12-5c8.8,0,13.8,6,14.7,13.4l-9.1,0.9c-0.2-3.4-1.5-6.6-5.8-6.6c-3.1,0-5,2.1-5.9,5.3c-0.5,1.7-0.7,4.2-0.7,6.9
		c0,2.8,0.3,5.6,0.7,6.8c1,3.6,3.4,5.2,6.4,5.2c3.6,0,6.2-2.6,7.3-6.9L100.2,57.2z`),
            g(s, "class", "svelte-1orhcas"),
            g(l, "d", `M108.1,24.7v51.6H23.6V24.7H108.1 M111.2,16.1H20.5c-3,0-5.5,2.4-5.5,5.5v57.8c0,3,2.4,5.5,5.5,5.5h90.7
	c3,0,5.5-2.4,5.5-5.5V21.5C116.6,18.5,114.2,16.1,111.2,16.1L111.2,16.1z`),
            g(l, "class", "svelte-1orhcas"),
            g(e, "version", "1.1"),
            g(e, "xmlns", "http://www.w3.org/2000/svg"),
            g(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"),
            g(e, "x", "0px"),
            g(e, "y", "0px"),
            g(e, "viewBox", "0 0 132 100"),
            st(e, "enable-background", "new 0 0 132 100"),
            g(e, "xml:space", "preserve")
        },
        m(i, o) {
            M(i, e, o),
            E(e, t),
            E(t, n),
            E(t, s),
            E(e, l)
        },
        p: q,
        i: q,
        o: q,
        d(i) {
            i && p(e)
        }
    }
}
class n_ extends x {
    constructor(e) {
        super(),
        $(this, e, null, t_, Z, {})
    }
}
function r_(r) {
    let e, t, n, s, l, i;
    return n = new n_({}),
    {
        c() {
            e = N("button"),
            t = N("span"),
            W(n.$$.fragment),
            this.h()
        },
        l(o) {
            e = B(o, "BUTTON", {
                class: !0
            });
            var a = S(e);
            t = B(a, "SPAN", {
                class: !0
            });
            var f = S(t);
            U(n.$$.fragment, f),
            f.forEach(p),
            a.forEach(p),
            this.h()
        },
        h() {
            g(t, "class", "icon-wrapper svelte-82azv6"),
            g(e, "class", "svelte-82azv6"),
            J(e, "active", r[0])
        },
        m(o, a) {
            M(o, e, a),
            E(e, t),
            z(n, t, null),
            s = !0,
            l || (i = ge(e, "click", r[1]),
            l = !0)
        },
        p(o, [a]) {
            (!s || a & 1) && J(e, "active", o[0])
        },
        i(o) {
            s || (w(n.$$.fragment, o),
            s = !0)
        },
        o(o) {
            y(n.$$.fragment, o),
            s = !1
        },
        d(o) {
            o && p(e),
            G(n),
            l = !1,
            i()
        }
    }
}
function s_(r, e, t) {
    let {showCC: n} = e;
    function s(l) {
        l.stopPropagation(),
        t(0, n = !n)
    }
    return r.$$set = l => {
        "showCC"in l && t(0, n = l.showCC)
    }
    ,
    [n, s]
}
class l_ extends x {
    constructor(e) {
        super(),
        $(this, e, s_, r_, Z, {
            showCC: 0
        })
    }
}
function i_(r) {
    let e, t;
    return {
        c() {
            e = N("p"),
            t = new Re(!1),
            this.h()
        },
        l(n) {
            e = B(n, "P", {});
            var s = S(e);
            t = Le(s, !1),
            s.forEach(p),
            this.h()
        },
        h() {
            t.a = null
        },
        m(n, s) {
            M(n, e, s),
            t.m(r[0], e)
        },
        p(n, s) {
            s & 1 && t.p(n[0])
        },
        i: q,
        o: q,
        d(n) {
            n && p(e)
        }
    }
}
function o_(r) {
    let e;
    const t = r[4].default
      , n = We(t, r, r[3], null);
    return {
        c() {
            n && n.c()
        },
        l(s) {
            n && n.l(s)
        },
        m(s, l) {
            n && n.m(s, l),
            e = !0
        },
        p(s, l) {
            n && n.p && (!e || l & 8) && Ue(n, t, s, s[3], e ? He(t, s[3], l, null) : Fe(s[3]), null)
        },
        i(s) {
            e || (w(n, s),
            e = !0)
        },
        o(s) {
            y(n, s),
            e = !1
        },
        d(s) {
            n && n.d(s)
        }
    }
}
function a_(r) {
    let e, t, n, s;
    const l = [o_, i_]
      , i = [];
    function o(a, f) {
        return a[2].default ? 0 : 1
    }
    return t = o(r),
    n = i[t] = l[t](r),
    {
        c() {
            e = N("section"),
            n.c(),
            this.h()
        },
        l(a) {
            e = B(a, "SECTION", {
                "data-birdkit-publish-validation-error": !0,
                class: !0
            });
            var f = S(e);
            n.l(f),
            f.forEach(p),
            this.h()
        },
        h() {
            g(e, "data-birdkit-publish-validation-error", r[1]),
            g(e, "class", "svelte-58mo38")
        },
        m(a, f) {
            M(a, e, f),
            i[t].m(e, null),
            s = !0
        },
        p(a, [f]) {
            let u = t;
            t = o(a),
            t === u ? i[t].p(a, f) : (le(),
            y(i[u], 1, 1, () => {
                i[u] = null
            }
            ),
            ie(),
            n = i[t],
            n ? n.p(a, f) : (n = i[t] = l[t](a),
            n.c()),
            w(n, 1),
            n.m(e, null))
        },
        i(a) {
            s || (w(n),
            s = !0)
        },
        o(a) {
            y(n),
            s = !1
        },
        d(a) {
            a && p(e),
            i[t].d()
        }
    }
}
function f_(r, e, t) {
    let {$$slots: n={}, $$scope: s} = e;
    const l = tr(n);
    let {message: i=""} = e
      , o = i.length > 0 ? i : "Unknown birdkit error (view the project page for more details)";
    return r.$$set = a => {
        "message"in a && t(0, i = a.message),
        "$$scope"in a && t(3, s = a.$$scope)
    }
    ,
    [i, o, l, s, n]
}
let ln = class extends x {
    constructor(e) {
        super(),
        $(this, e, f_, a_, Z, {
            message: 0
        })
    }
}
;
function Il(r, e, t) {
    const n = r.slice();
    return n[2] = e[t].text,
    n[3] = e[t].start,
    n[4] = e[t].end,
    n
}
function u_(r) {
    let e, t;
    return e = new ln({
        props: {
            message: `There was an error processing your subtitles file <code>_public/${r[0]}</code>. Check if the file exists and it’s not corrupted.`
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, s) {
            const l = {};
            s & 1 && (l.message = `There was an error processing your subtitles file <code>_public/${n[0]}</code>. Check if the file exists and it’s not corrupted.`),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function c_(r) {
    let e, t = Oe(r[0]), n = [];
    for (let s = 0; s < t.length; s += 1)
        n[s] = Al(Il(r, t, s));
    return {
        c() {
            e = N("div");
            for (let s = 0; s < n.length; s += 1)
                n[s].c();
            this.h()
        },
        l(s) {
            e = B(s, "DIV", {
                class: !0
            });
            var l = S(e);
            for (let i = 0; i < n.length; i += 1)
                n[i].l(l);
            l.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", "g-video_subtitles svelte-1q7s0p2")
        },
        m(s, l) {
            M(s, e, l);
            for (let i = 0; i < n.length; i += 1)
                n[i] && n[i].m(e, null)
        },
        p(s, l) {
            if (l & 3) {
                t = Oe(s[0]);
                let i;
                for (i = 0; i < t.length; i += 1) {
                    const o = Il(s, t, i);
                    n[i] ? n[i].p(o, l) : (n[i] = Al(o),
                    n[i].c(),
                    n[i].m(e, null))
                }
                for (; i < n.length; i += 1)
                    n[i].d(1);
                n.length = t.length
            }
        },
        i: q,
        o: q,
        d(s) {
            s && p(e),
            ct(n, s)
        }
    }
}
function Al(r) {
    let e, t, n, s = r[2] + "", l;
    return {
        c() {
            e = N("p"),
            t = N("span"),
            n = new Re(!1),
            l = Q(),
            this.h()
        },
        l(i) {
            e = B(i, "P", {
                class: !0
            });
            var o = S(e);
            t = B(o, "SPAN", {
                class: !0
            });
            var a = S(t);
            n = Le(a, !1),
            a.forEach(p),
            l = X(o),
            o.forEach(p),
            this.h()
        },
        h() {
            n.a = null,
            g(t, "class", "svelte-1q7s0p2"),
            g(e, "class", "g-subtitle svelte-1q7s0p2"),
            J(e, "active", r[3] < r[1] && r[1] < r[4])
        },
        m(i, o) {
            M(i, e, o),
            E(e, t),
            n.m(s, t),
            E(e, l)
        },
        p(i, o) {
            o & 1 && s !== (s = i[2] + "") && n.p(s),
            o & 3 && J(e, "active", i[3] < i[1] && i[1] < i[4])
        },
        d(i) {
            i && p(e)
        }
    }
}
function d_(r) {
    let e, t, n, s, l;
    const i = [c_, u_]
      , o = [];
    function a(f, u) {
        return u & 1 && (e = null),
        e == null && (e = !!Array.isArray(f[0])),
        e ? 0 : 1
    }
    return t = a(r, -1),
    n = o[t] = i[t](r),
    {
        c() {
            n.c(),
            s = te()
        },
        l(f) {
            n.l(f),
            s = te()
        },
        m(f, u) {
            o[t].m(f, u),
            M(f, s, u),
            l = !0
        },
        p(f, [u]) {
            let c = t;
            t = a(f, u),
            t === c ? o[t].p(f, u) : (le(),
            y(o[c], 1, 1, () => {
                o[c] = null
            }
            ),
            ie(),
            n = o[t],
            n ? n.p(f, u) : (n = o[t] = i[t](f),
            n.c()),
            w(n, 1),
            n.m(s.parentNode, s))
        },
        i(f) {
            l || (w(n),
            l = !0)
        },
        o(f) {
            y(n),
            l = !1
        },
        d(f) {
            f && p(s),
            o[t].d(f)
        }
    }
}
function h_(r, e, t) {
    let {subtitles: n} = e
      , {currentTime: s} = e;
    return r.$$set = l => {
        "subtitles"in l && t(0, n = l.subtitles),
        "currentTime"in l && t(1, s = l.currentTime)
    }
    ,
    [n, s]
}
class m_ extends x {
    constructor(e) {
        super(),
        $(this, e, h_, d_, Z, {
            subtitles: 0,
            currentTime: 1
        })
    }
}
function Cl(r) {
    let e, t, n, s, l;
    function i(f) {
        r[15](f)
    }
    function o(f) {
        r[16](f)
    }
    let a = {};
    return r[2] !== void 0 && (a.currentTime = r[2]),
    r[1] !== void 0 && (a.active = r[1]),
    t = new Dp({
        props: a
    }),
    me.push( () => we(t, "currentTime", i)),
    me.push( () => we(t, "active", o)),
    {
        c() {
            e = N("div"),
            W(t.$$.fragment),
            this.h()
        },
        l(f) {
            e = B(f, "DIV", {
                class: !0
            });
            var u = S(e);
            U(t.$$.fragment, u),
            u.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", "g-controls_play-again svelte-17mnl29")
        },
        m(f, u) {
            M(f, e, u),
            z(t, e, null),
            l = !0
        },
        p(f, u) {
            const c = {};
            !n && u & 4 && (n = !0,
            c.currentTime = f[2],
            Te( () => n = !1)),
            !s && u & 2 && (s = !0,
            c.active = f[1],
            Te( () => s = !1)),
            t.$set(c)
        },
        i(f) {
            l || (w(t.$$.fragment, f),
            l = !0)
        },
        o(f) {
            y(t.$$.fragment, f),
            l = !1
        },
        d(f) {
            f && p(e),
            G(t)
        }
    }
}
function Sl(r) {
    let e, t, n;
    function s(i) {
        r[17](i)
    }
    let l = {};
    return r[4] !== void 0 && (l.muted = r[4]),
    e = new e_({
        props: l
    }),
    me.push( () => we(e, "muted", s)),
    {
        c() {
            W(e.$$.fragment)
        },
        l(i) {
            U(e.$$.fragment, i)
        },
        m(i, o) {
            z(e, i, o),
            n = !0
        },
        p(i, o) {
            const a = {};
            !t && o & 16 && (t = !0,
            a.muted = i[4],
            Te( () => t = !1)),
            e.$set(a)
        },
        i(i) {
            n || (w(e.$$.fragment, i),
            n = !0)
        },
        o(i) {
            y(e.$$.fragment, i),
            n = !1
        },
        d(i) {
            G(e, i)
        }
    }
}
function Pl(r) {
    let e, t, n;
    return t = new m_({
        props: {
            currentTime: r[2],
            subtitles: r[5]
        }
    }),
    {
        c() {
            e = N("div"),
            W(t.$$.fragment),
            this.h()
        },
        l(s) {
            e = B(s, "DIV", {
                class: !0
            });
            var l = S(e);
            U(t.$$.fragment, l),
            l.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", "g-controls_cc svelte-17mnl29")
        },
        m(s, l) {
            M(s, e, l),
            z(t, e, null),
            n = !0
        },
        p(s, l) {
            const i = {};
            l & 4 && (i.currentTime = s[2]),
            l & 32 && (i.subtitles = s[5]),
            t.$set(i)
        },
        i(s) {
            n || (w(t.$$.fragment, s),
            n = !0)
        },
        o(s) {
            y(t.$$.fragment, s),
            n = !1
        },
        d(s) {
            s && p(e),
            G(t)
        }
    }
}
function Ol(r) {
    let e, t, n, s = r[6] && Ml(r), l = r[7] && jl(r);
    return {
        c() {
            e = N("div"),
            s && s.c(),
            t = Q(),
            l && l.c(),
            this.h()
        },
        l(i) {
            e = B(i, "DIV", {
                class: !0
            });
            var o = S(e);
            s && s.l(o),
            t = X(o),
            l && l.l(o),
            o.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", "g-controls_play-pause-time svelte-17mnl29")
        },
        m(i, o) {
            M(i, e, o),
            s && s.m(e, null),
            E(e, t),
            l && l.m(e, null),
            n = !0
        },
        p(i, o) {
            i[6] ? s ? (s.p(i, o),
            o & 64 && w(s, 1)) : (s = Ml(i),
            s.c(),
            w(s, 1),
            s.m(e, t)) : s && (le(),
            y(s, 1, 1, () => {
                s = null
            }
            ),
            ie()),
            i[7] ? l ? (l.p(i, o),
            o & 128 && w(l, 1)) : (l = jl(i),
            l.c(),
            w(l, 1),
            l.m(e, null)) : l && (le(),
            y(l, 1, 1, () => {
                l = null
            }
            ),
            ie())
        },
        i(i) {
            n || (w(s),
            w(l),
            n = !0)
        },
        o(i) {
            y(s),
            y(l),
            n = !1
        },
        d(i) {
            i && p(e),
            s && s.d(),
            l && l.d()
        }
    }
}
function Ml(r) {
    let e, t, n, s;
    function l(a) {
        r[18](a)
    }
    function i(a) {
        r[19](a)
    }
    let o = {};
    return r[3] !== void 0 && (o.paused = r[3]),
    r[1] !== void 0 && (o.active = r[1]),
    e = new Wp({
        props: o
    }),
    me.push( () => we(e, "paused", l)),
    me.push( () => we(e, "active", i)),
    {
        c() {
            W(e.$$.fragment)
        },
        l(a) {
            U(e.$$.fragment, a)
        },
        m(a, f) {
            z(e, a, f),
            s = !0
        },
        p(a, f) {
            const u = {};
            !t && f & 8 && (t = !0,
            u.paused = a[3],
            Te( () => t = !1)),
            !n && f & 2 && (n = !0,
            u.active = a[1],
            Te( () => n = !1)),
            e.$set(u)
        },
        i(a) {
            s || (w(e.$$.fragment, a),
            s = !0)
        },
        o(a) {
            y(e.$$.fragment, a),
            s = !1
        },
        d(a) {
            G(e, a)
        }
    }
}
function jl(r) {
    let e, t;
    return e = new Yp({
        props: {
            currentTime: r[2],
            duration: r[12]
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, s) {
            const l = {};
            s & 4 && (l.currentTime = n[2]),
            s & 4096 && (l.duration = n[12]),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function Bl(r) {
    let e, t, n, s;
    function l(o) {
        r[20](o)
    }
    let i = {
        duration: r[12]
    };
    return r[2] !== void 0 && (i.currentTime = r[2]),
    t = new Hp({
        props: i
    }),
    me.push( () => we(t, "currentTime", l)),
    {
        c() {
            e = N("div"),
            W(t.$$.fragment),
            this.h()
        },
        l(o) {
            e = B(o, "DIV", {
                class: !0
            });
            var a = S(e);
            U(t.$$.fragment, a),
            a.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", "g-controls_progress-bar svelte-17mnl29")
        },
        m(o, a) {
            M(o, e, a),
            z(t, e, null),
            s = !0
        },
        p(o, a) {
            const f = {};
            a & 4096 && (f.duration = o[12]),
            !n && a & 4 && (n = !0,
            f.currentTime = o[2],
            Te( () => n = !1)),
            t.$set(f)
        },
        i(o) {
            s || (w(t.$$.fragment, o),
            s = !0)
        },
        o(o) {
            y(t.$$.fragment, o),
            s = !1
        },
        d(o) {
            o && p(e),
            G(t)
        }
    }
}
function Nl(r) {
    let e, t, n, s;
    function l(o) {
        r[21](o)
    }
    let i = {};
    return r[0] !== void 0 && (i.showCC = r[0]),
    t = new l_({
        props: i
    }),
    me.push( () => we(t, "showCC", l)),
    {
        c() {
            e = N("div"),
            W(t.$$.fragment),
            this.h()
        },
        l(o) {
            e = B(o, "DIV", {
                class: !0
            });
            var a = S(e);
            U(t.$$.fragment, a),
            a.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", "g-controls_cc-button svelte-17mnl29")
        },
        m(o, a) {
            M(o, e, a),
            z(t, e, null),
            s = !0
        },
        p(o, a) {
            const f = {};
            !n && a & 1 && (n = !0,
            f.showCC = o[0],
            Te( () => n = !1)),
            t.$set(f)
        },
        i(o) {
            s || (w(t.$$.fragment, o),
            s = !0)
        },
        o(o) {
            y(t.$$.fragment, o),
            s = !1
        },
        d(o) {
            o && p(e),
            G(t)
        }
    }
}
function g_(r) {
    let e, t, n, s, l, i, o, a, f, u, c, d = !r[14] && r[9] && r[13] && Cl(r), h = r[8] && Sl(r), _ = r[5] && r[0] && Pl(r), b = (r[6] || r[7]) && Ol(r), m = r[10] && Bl(r), v = r[11] && Nl(r);
    return {
        c() {
            e = N("div"),
            d && d.c(),
            t = Q(),
            n = N("div"),
            s = N("div"),
            h && h.c(),
            l = Q(),
            i = N("div"),
            _ && _.c(),
            o = Q(),
            a = N("div"),
            b && b.c(),
            f = Q(),
            m && m.c(),
            u = Q(),
            v && v.c(),
            this.h()
        },
        l(k) {
            e = B(k, "DIV", {
                class: !0
            });
            var A = S(e);
            d && d.l(A),
            t = X(A),
            n = B(A, "DIV", {
                class: !0
            });
            var j = S(n);
            s = B(j, "DIV", {
                class: !0
            });
            var P = S(s);
            h && h.l(P),
            P.forEach(p),
            l = X(j),
            i = B(j, "DIV", {
                class: !0
            });
            var T = S(i);
            _ && _.l(T),
            o = X(T),
            a = B(T, "DIV", {
                class: !0
            });
            var O = S(a);
            b && b.l(O),
            f = X(O),
            m && m.l(O),
            u = X(O),
            v && v.l(O),
            O.forEach(p),
            T.forEach(p),
            j.forEach(p),
            A.forEach(p),
            this.h()
        },
        h() {
            g(s, "class", "g-controls_top svelte-17mnl29"),
            g(a, "class", "g-controls_main-ui svelte-17mnl29"),
            g(i, "class", "g-controls_bottom svelte-17mnl29"),
            g(n, "class", "g-custom-controls_overlay svelte-17mnl29"),
            g(e, "class", "g-custom-controls svelte-17mnl29")
        },
        m(k, A) {
            M(k, e, A),
            d && d.m(e, null),
            E(e, t),
            E(e, n),
            E(n, s),
            h && h.m(s, null),
            E(n, l),
            E(n, i),
            _ && _.m(i, null),
            E(i, o),
            E(i, a),
            b && b.m(a, null),
            E(a, f),
            m && m.m(a, null),
            E(a, u),
            v && v.m(a, null),
            c = !0
        },
        p(k, [A]) {
            !k[14] && k[9] && k[13] ? d ? (d.p(k, A),
            A & 25088 && w(d, 1)) : (d = Cl(k),
            d.c(),
            w(d, 1),
            d.m(e, t)) : d && (le(),
            y(d, 1, 1, () => {
                d = null
            }
            ),
            ie()),
            k[8] ? h ? (h.p(k, A),
            A & 256 && w(h, 1)) : (h = Sl(k),
            h.c(),
            w(h, 1),
            h.m(s, null)) : h && (le(),
            y(h, 1, 1, () => {
                h = null
            }
            ),
            ie()),
            k[5] && k[0] ? _ ? (_.p(k, A),
            A & 33 && w(_, 1)) : (_ = Pl(k),
            _.c(),
            w(_, 1),
            _.m(i, o)) : _ && (le(),
            y(_, 1, 1, () => {
                _ = null
            }
            ),
            ie()),
            k[6] || k[7] ? b ? (b.p(k, A),
            A & 192 && w(b, 1)) : (b = Ol(k),
            b.c(),
            w(b, 1),
            b.m(a, f)) : b && (le(),
            y(b, 1, 1, () => {
                b = null
            }
            ),
            ie()),
            k[10] ? m ? (m.p(k, A),
            A & 1024 && w(m, 1)) : (m = Bl(k),
            m.c(),
            w(m, 1),
            m.m(a, u)) : m && (le(),
            y(m, 1, 1, () => {
                m = null
            }
            ),
            ie()),
            k[11] ? v ? (v.p(k, A),
            A & 2048 && w(v, 1)) : (v = Nl(k),
            v.c(),
            w(v, 1),
            v.m(a, null)) : v && (le(),
            y(v, 1, 1, () => {
                v = null
            }
            ),
            ie())
        },
        i(k) {
            c || (w(d),
            w(h),
            w(_),
            w(b),
            w(m),
            w(v),
            c = !0)
        },
        o(k) {
            y(d),
            y(h),
            y(_),
            y(b),
            y(m),
            y(v),
            c = !1
        },
        d(k) {
            k && p(e),
            d && d.d(),
            h && h.d(),
            _ && _.d(),
            b && b.d(),
            m && m.d(),
            v && v.d()
        }
    }
}
function p_(r, e, t) {
    let {subtitles: n=null} = e
      , {showPlayPauseButton: s=!0} = e
      , {showTime: l=!0} = e
      , {showToggleMuteButton: i=!0} = e
      , {showPlayAgainButton: o=!0} = e
      , {showProgressBar: a=!0} = e
      , {showCC: f=!0} = e
      , {showCCButton: u=!0} = e
      , {active: c} = e
      , {currentTime: d} = e
      , {duration: h} = e
      , {paused: _} = e
      , {ended: b} = e
      , {muted: m} = e
      , {loop: v} = e;
    function k(I) {
        d = I,
        t(2, d)
    }
    function A(I) {
        c = I,
        t(1, c)
    }
    function j(I) {
        m = I,
        t(4, m)
    }
    function P(I) {
        _ = I,
        t(3, _)
    }
    function T(I) {
        c = I,
        t(1, c)
    }
    function O(I) {
        d = I,
        t(2, d)
    }
    function D(I) {
        f = I,
        t(0, f)
    }
    return r.$$set = I => {
        "subtitles"in I && t(5, n = I.subtitles),
        "showPlayPauseButton"in I && t(6, s = I.showPlayPauseButton),
        "showTime"in I && t(7, l = I.showTime),
        "showToggleMuteButton"in I && t(8, i = I.showToggleMuteButton),
        "showPlayAgainButton"in I && t(9, o = I.showPlayAgainButton),
        "showProgressBar"in I && t(10, a = I.showProgressBar),
        "showCC"in I && t(0, f = I.showCC),
        "showCCButton"in I && t(11, u = I.showCCButton),
        "active"in I && t(1, c = I.active),
        "currentTime"in I && t(2, d = I.currentTime),
        "duration"in I && t(12, h = I.duration),
        "paused"in I && t(3, _ = I.paused),
        "ended"in I && t(13, b = I.ended),
        "muted"in I && t(4, m = I.muted),
        "loop"in I && t(14, v = I.loop)
    }
    ,
    [f, c, d, _, m, n, s, l, i, o, a, u, h, b, v, k, A, j, P, T, O, D]
}
class __ extends x {
    constructor(e) {
        super(),
        $(this, e, p_, g_, Z, {
            subtitles: 5,
            showPlayPauseButton: 6,
            showTime: 7,
            showToggleMuteButton: 8,
            showPlayAgainButton: 9,
            showProgressBar: 10,
            showCC: 0,
            showCCButton: 11,
            active: 1,
            currentTime: 2,
            duration: 12,
            paused: 3,
            ended: 13,
            muted: 4,
            loop: 14
        })
    }
}
function b_(r) {
    let e, t, n, s, l, i, o, a, f, u, c, d, h, _, b, m, v;
    return {
        c() {
            e = he("svg"),
            t = he("defs"),
            n = he("linearGradient"),
            s = he("stop"),
            l = he("stop"),
            i = he("stop"),
            o = he("stop"),
            a = he("stop"),
            f = he("stop"),
            u = he("stop"),
            c = he("stop"),
            d = he("mask"),
            h = he("rect"),
            _ = he("g"),
            b = he("path"),
            m = he("path"),
            v = he("path"),
            this.h()
        },
        l(k) {
            e = de(k, "svg", {
                xmlns: !0,
                "xmlns:xlink": !0,
                viewBox: !0
            });
            var A = S(e);
            t = de(A, "defs", {});
            var j = S(t);
            n = de(j, "linearGradient", {
                id: !0,
                x1: !0,
                y1: !0,
                x2: !0,
                y2: !0,
                gradientTransform: !0,
                gradientUnits: !0
            });
            var P = S(n);
            s = de(P, "stop", {
                offset: !0,
                "stop-color": !0
            }),
            S(s).forEach(p),
            l = de(P, "stop", {
                offset: !0,
                "stop-color": !0
            }),
            S(l).forEach(p),
            i = de(P, "stop", {
                offset: !0,
                "stop-color": !0
            }),
            S(i).forEach(p),
            o = de(P, "stop", {
                offset: !0,
                "stop-color": !0
            }),
            S(o).forEach(p),
            a = de(P, "stop", {
                offset: !0,
                "stop-color": !0
            }),
            S(a).forEach(p),
            f = de(P, "stop", {
                offset: !0,
                "stop-color": !0
            }),
            S(f).forEach(p),
            u = de(P, "stop", {
                offset: !0,
                "stop-color": !0
            }),
            S(u).forEach(p),
            c = de(P, "stop", {
                offset: !0,
                "stop-color": !0
            }),
            S(c).forEach(p),
            P.forEach(p),
            d = de(j, "mask", {
                id: !0,
                x: !0,
                y: !0,
                width: !0,
                height: !0,
                maskUnits: !0
            });
            var T = S(d);
            h = de(T, "rect", {
                fill: !0,
                x: !0,
                y: !0,
                width: !0,
                height: !0,
                transform: !0
            }),
            S(h).forEach(p),
            T.forEach(p),
            j.forEach(p),
            _ = de(A, "g", {
                mask: !0
            });
            var O = S(_);
            b = de(O, "path", {
                d: !0,
                class: !0
            }),
            S(b).forEach(p),
            O.forEach(p),
            m = de(A, "path", {
                d: !0,
                class: !0
            }),
            S(m).forEach(p),
            v = de(A, "path", {
                d: !0,
                class: !0
            }),
            S(v).forEach(p),
            A.forEach(p),
            this.h()
        },
        h() {
            g(s, "offset", "0.17"),
            g(s, "stop-color", "#fff"),
            g(l, "offset", "0.18"),
            g(l, "stop-color", "#fefdfd"),
            g(i, "offset", "0.35"),
            g(i, "stop-color", "#bcbbbb"),
            g(o, "offset", "0.52"),
            g(o, "stop-color", "#858384"),
            g(a, "offset", "0.67"),
            g(a, "stop-color", "#5b5859"),
            g(f, "offset", "0.81"),
            g(f, "stop-color", "#3c393a"),
            g(u, "offset", "0.92"),
            g(u, "stop-color", "#2a2627"),
            g(c, "offset", "1"),
            g(c, "stop-color", "#231f20"),
            g(n, "id", r[0]),
            g(n, "x1", "37.18"),
            g(n, "y1", "35"),
            g(n, "x2", "72.18"),
            g(n, "y2", "70"),
            g(n, "gradientTransform", "translate(-2.18)"),
            g(n, "gradientUnits", "userSpaceOnUse"),
            g(h, "fill", "url(#" + r[0] + ")"),
            g(h, "x", "35"),
            g(h, "y", "35"),
            g(h, "width", "35"),
            g(h, "height", "35"),
            g(h, "transform", "translate(0 105) rotate(-90)"),
            g(d, "id", r[1]),
            g(d, "x", "35"),
            g(d, "y", "35"),
            g(d, "width", "35"),
            g(d, "height", "35"),
            g(d, "maskUnits", "userSpaceOnUse"),
            g(b, "d", "M70,35H60A25,25,0,0,1,35,60V70A35,35,0,0,0,70,35Z"),
            g(b, "class", "svelte-2rohmp"),
            g(_, "mask", "url(#" + r[1] + ")"),
            g(m, "d", "M70,35h0v1.56C70,36,70,35.52,70,35Z"),
            g(m, "class", "svelte-2rohmp"),
            g(v, "d", "M35,70V60a25,25,0,0,1,0-50V0a35,35,0,0,0,0,70c.52,0,1,0,1.56,0Z"),
            g(v, "class", "svelte-2rohmp"),
            g(e, "xmlns", "http://www.w3.org/2000/svg"),
            g(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"),
            g(e, "viewBox", "0 0 70 70")
        },
        m(k, A) {
            M(k, e, A),
            E(e, t),
            E(t, n),
            E(n, s),
            E(n, l),
            E(n, i),
            E(n, o),
            E(n, a),
            E(n, f),
            E(n, u),
            E(n, c),
            E(t, d),
            E(d, h),
            E(e, _),
            E(_, b),
            E(e, m),
            E(e, v)
        },
        p: q,
        i: q,
        o: q,
        d(k) {
            k && p(e)
        }
    }
}
function v_(r) {
    const e = Wn("g-videoplayer-loading-gradient-")
      , t = Wn("g-videoplayer-loading-mask-");
    return [e, t]
}
let w_ = class extends x {
    constructor(e) {
        super(),
        $(this, e, v_, b_, Z, {})
    }
}
;
function y_(r) {
    let e, t, n;
    return t = new w_({}),
    {
        c() {
            e = N("div"),
            W(t.$$.fragment),
            this.h()
        },
        l(s) {
            e = B(s, "DIV", {
                class: !0
            });
            var l = S(e);
            U(t.$$.fragment, l),
            l.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", "g-videoplayer_loading svelte-3bo0pu"),
            J(e, "active", r[0])
        },
        m(s, l) {
            M(s, e, l),
            z(t, e, null),
            n = !0
        },
        p(s, [l]) {
            (!n || l & 1) && J(e, "active", s[0])
        },
        i(s) {
            n || (w(t.$$.fragment, s),
            n = !0)
        },
        o(s) {
            y(t.$$.fragment, s),
            n = !1
        },
        d(s) {
            s && p(e),
            G(t)
        }
    }
}
function k_(r, e, t) {
    let {active: n} = e;
    return r.$$set = s => {
        "active"in s && t(0, n = s.active)
    }
    ,
    [n]
}
class T_ extends x {
    constructor(e) {
        super(),
        $(this, e, k_, y_, Z, {
            active: 0
        })
    }
}
const E_ = ["🎥", "📺", "📰"].map(r => ({
    type: "text",
    value: r
}))
  , vs = (r, e) => ({
    index: e,
    id: `${r}-item-${e}`,
    active: !1,
    previousActive: !1,
    text: "",
    props: {},
    offset: 0
})
  , I_ = () => "@@"
  , Dl = r => {
    const {slug: e, width: t, extension: n, retina: s=!1} = r
      , l = s ? "@x2" : "";
    return `${e}-${I_()}-${t}${l}.${n}`
}
  , Ll = r => r.fileUrl
  , yn = (r, e="MASTER") => {
    let t = []
      , n = Array.isArray(e) ? e : [...e.trim().split(" ")];
    return n = n.map(s => s.toLowerCase().trim()),
    r == null || r.crops.filter(s => n.includes(s == null ? void 0 : s.name.toLowerCase())).forEach(s => {
        const l = s.name;
        s.renditions.forEach(i => {
            t.push({
                ...i,
                cropName: l
            })
        }
        )
    }
    ),
    t
}
  , Qn = r => r.url
  , Rl = r => r.url
  , Vl = r => {
    const {outputPath: e, slug: t, ratio: n, hasRetina: s, extensions: l} = r
      , i = [];
    return r.widths.forEach(o => {
        l.forEach(a => {
            const f = {
                url: `${e}/${Dl({
                    slug: t,
                    width: o,
                    extension: a,
                    retina: !1
                })}`,
                height: Math.round(o * (1 / n)),
                width: o
            };
            s && (f.retinaUrl = `${e}/${Dl({
                slug: t,
                width: o,
                extension: a,
                retina: !0
            })}`),
            i.push(f)
        }
        )
    }
    ),
    i
}
  , Jn = (r, {mobileRendition: e=!1}={
    mobileRendition: !1
}) => r.renditions.filter(t => e ? t.type.includes("p_mp4_mobile") : t.type.includes("p_mp4") && !t.type.includes("p_mp4_mobile")).sort(Ht("width"))
  , xn = r => {
    var e;
    return (e = r == null ? void 0 : r.promotionalImage) != null && e.image ? yn(r.promotionalImage.image) : []
}
  , kn = (r, {widths: e=[320, 640, 900, 1254], aspectRatio: t=16 / 9}={}) => {
    const n = []
      , s = /https:\/\/int.nyt.com\/data\/videotape\/finished\/.+\/[\w,-]+-(\d+w).(?:mp4|webm)/;
    if (s.test(r.assetSlug)) {
        const l = s.exec(r.assetSlug);
        if (Array.isArray(l)) {
            const i = l[1];
            e.forEach(o => {
                n.push({
                    width: o,
                    height: Math.round(o * 1 / t),
                    url: r.assetSlug.replace(i, `${o}w`)
                })
            }
            )
        }
    } else
        n.push({
            url: r.assetSlug,
            width: 0,
            height: 0
        });
    return n
}
  , $n = r => kn(r).map(e => (e.url = e.url.replace(".mp4", ".jpg").replace(".webm", ".jpg"),
e))
  , Ut = (r, e=320) => {
    const t = r.concat().sort(Ht("width"));
    let n = t.length - 1
      , s = t.length;
    for (; s--; )
        e <= t[s].width && (n = s);
    return t[n]
}
  , Gl = r => {
    const e = r.assetSlug;
    return {
        id: e,
        items: r.slides.map( (n, s) => {
            const {image: l} = n
              , {caption: i, credit: o} = l;
            return Object.assign({}, vs(e, s), {
                caption: i.text,
                credit: o,
                media: Object.assign({
                    assetType: "scoopImage",
                    assetSlug: e,
                    mediaComponent: "ImageLoader",
                    assetErrors: []
                }, n.image)
            })
        }
        )
    }
}
  , zl = (r="") => `${["a", "e", "i", "o", "u"].includes(r.charAt(0).toLowerCase()) ? "an" : "a"} ${r}`
  , ws = r => {
    let {altText: e, credit: t, caption: n, media: s} = r
      , l = e
      , i = t
      , o = n;
    return [{
        name: "altText",
        value: e
    }, {
        name: "credit",
        value: t
    }, {
        name: "caption",
        value: n
    }].forEach(a => {
        var f, u, c;
        (f = s == null ? void 0 : s.assetType) != null && f.includes("scoop") && a.value === void 0 ? (a.name === "altText" && (s != null && s.altText) && (l = s.altText),
        a.name === "credit" && (s != null && s.credit) && (i = s.credit),
        a.name === "caption" && ((u = s == null ? void 0 : s.caption) != null && u.text) && (o = (c = s == null ? void 0 : s.caption) == null ? void 0 : c.text)) : (a.name === "altText" && (l = a.value),
        a.name === "credit" && (i = a.value),
        a.name === "caption" && (o = a.value))
    }
    ),
    {
        ...r,
        altText: l,
        credit: i,
        caption: o
    }
}
;
function A_(r, e) {
    let t;
    const n = o => {
        const {intersectionRatio: a, boundingClientRect: f, intersectionRect: u, isIntersecting: c, rootBounds: d, target: h, time: _} = o[0]
          , b = c ? "enter" : "exit";
        r.dispatchEvent(new CustomEvent(b,{
            detail: {
                intersectionRatio: a,
                boundingClientRect: f,
                intersectionRect: u,
                isIntersecting: c,
                rootBounds: d,
                target: h,
                time: _
            }
        }))
    }
      , s = o => {
        let a = {
            root: document
        };
        if (o) {
            const f = o.top ? l(o.top) : "0px"
              , u = o.bottom ? l(o.bottom) : "0px";
            a.rootMargin = o.rootMargin ? o.rootMargin : `${f} 0px ${u} 0px`,
            o.threshold && (a.threshold = i(o.threshold)),
            o.root && (a.root = o.root)
        }
        t && t.disconnect(),
        t = new IntersectionObserver(n,a),
        t.observe(r)
    }
    ;
    function l(o) {
        const a = /(-?\d+)(px|%)/g
          , f = o.match(a);
        let u, c;
        if (f)
            for (const d of f) {
                const [h,_] = d.match(/(-?\d+)(px|%)/).slice(1);
                u = h,
                c = _
            }
        else
            u = o,
            c = "px";
        return `${u * -1}${c}`
    }
    function i(o) {
        return o.map(a => typeof a == "string" && a.includes("%") ? parseInt(a.slice(0, -1)) / 100 : a)
    }
    return s(e),
    {
        update(o) {
            s(o)
        },
        destroy() {
            t && t.disconnect()
        }
    }
}
function Wl(r) {
    let e, t, n, s, l;
    return t = new wa({}),
    {
        c() {
            e = N("button"),
            W(t.$$.fragment),
            this.h()
        },
        l(i) {
            e = B(i, "BUTTON", {
                class: !0
            });
            var o = S(e);
            U(t.$$.fragment, o),
            o.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", "g-videoplayer_play-fallback svelte-3kpmvj"),
            J(e, "active", !r[11])
        },
        m(i, o) {
            M(i, e, o),
            z(t, e, null),
            n = !0,
            s || (l = ge(e, "click", r[33]),
            s = !0)
        },
        p(i, o) {
            (!n || o[0] & 2048) && J(e, "active", !i[11])
        },
        i(i) {
            n || (w(t.$$.fragment, i),
            n = !0)
        },
        o(i) {
            y(t.$$.fragment, i),
            n = !1
        },
        d(i) {
            i && p(e),
            G(t),
            s = !1,
            l()
        }
    }
}
function Ul(r) {
    let e, t, n, s, l, i;
    function o(d) {
        r[55](d)
    }
    function a(d) {
        r[56](d)
    }
    function f(d) {
        r[57](d)
    }
    function u(d) {
        r[58](d)
    }
    let c = {
        ended: r[13],
        duration: r[18],
        loop: r[4],
        subtitles: r[24],
        showPlayPauseButton: r[25],
        showTime: r[26],
        showToggleMuteButton: r[27],
        showPlayAgainButton: r[28],
        showProgressBar: r[30],
        showCC: r[31],
        showCCButton: r[32]
    };
    return r[11] !== void 0 && (c.currentTime = r[11]),
    r[12] !== void 0 && (c.paused = r[12]),
    r[2] !== void 0 && (c.muted = r[2]),
    r[0] !== void 0 && (c.active = r[0]),
    e = new __({
        props: c
    }),
    me.push( () => we(e, "currentTime", o)),
    me.push( () => we(e, "paused", a)),
    me.push( () => we(e, "muted", f)),
    me.push( () => we(e, "active", u)),
    {
        c() {
            W(e.$$.fragment)
        },
        l(d) {
            U(e.$$.fragment, d)
        },
        m(d, h) {
            z(e, d, h),
            i = !0
        },
        p(d, h) {
            const _ = {};
            h[0] & 8192 && (_.ended = d[13]),
            h[0] & 262144 && (_.duration = d[18]),
            h[0] & 16 && (_.loop = d[4]),
            !t && h[0] & 2048 && (t = !0,
            _.currentTime = d[11],
            Te( () => t = !1)),
            !n && h[0] & 4096 && (n = !0,
            _.paused = d[12],
            Te( () => n = !1)),
            !s && h[0] & 4 && (s = !0,
            _.muted = d[2],
            Te( () => s = !1)),
            !l && h[0] & 1 && (l = !0,
            _.active = d[0],
            Te( () => l = !1)),
            e.$set(_)
        },
        i(d) {
            i || (w(e.$$.fragment, d),
            i = !0)
        },
        o(d) {
            y(e.$$.fragment, d),
            i = !1
        },
        d(d) {
            G(e, d)
        }
    }
}
function Fl(r) {
    let e, t;
    const n = r[46].default
      , s = We(n, r, r[45], null);
    return {
        c() {
            e = N("div"),
            s && s.c(),
            this.h()
        },
        l(l) {
            e = B(l, "DIV", {
                class: !0
            });
            var i = S(e);
            s && s.l(i),
            i.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", "g-videoplayer_overlay svelte-3kpmvj")
        },
        m(l, i) {
            M(l, e, i),
            s && s.m(e, null),
            t = !0
        },
        p(l, i) {
            s && s.p && (!t || i[1] & 16384) && Ue(s, n, l, l[45], t ? He(n, l[45], i, null) : Fe(l[45]), null)
        },
        i(l) {
            t || (w(s, l),
            t = !0)
        },
        o(l) {
            y(s, l),
            t = !1
        },
        d(l) {
            l && p(e),
            s && s.d(l)
        }
    }
}
function C_(r) {
    let e, t, n, s, l, i, o, a, f, u, c, d, h, _, b, m, v, k, A, j, P, T;
    function O(L) {
        r[47](L)
    }
    function D(L) {
        r[48](L)
    }
    function I(L) {
        r[49](L)
    }
    function ee(L) {
        r[50](L)
    }
    function K(L) {
        r[51](L)
    }
    function ne(L) {
        r[52](L)
    }
    function R(L) {
        r[53](L)
    }
    function se(L) {
        r[54](L)
    }
    let F = {
        src: r[15],
        poster: r[16],
        className: "g-videoplayer",
        controls: r[8],
        autoplay: r[1],
        loop: r[4],
        playsinline: r[5],
        preload: r[6],
        altText: r[7]
    };
    r[10] !== void 0 && (F.videoEl = r[10]),
    r[11] !== void 0 && (F.currentTime = r[11]),
    r[18] !== void 0 && (F.duration = r[18]),
    r[2] !== void 0 && (F.muted = r[2]),
    r[12] !== void 0 && (F.paused = r[12]),
    r[13] !== void 0 && (F.ended = r[13]),
    r[19] !== void 0 && (F.buffered = r[19]),
    r[20] !== void 0 && (F.readyState = r[20]),
    t = new va({
        props: F
    }),
    me.push( () => we(t, "videoEl", O)),
    me.push( () => we(t, "currentTime", D)),
    me.push( () => we(t, "duration", I)),
    me.push( () => we(t, "muted", ee)),
    me.push( () => we(t, "paused", K)),
    me.push( () => we(t, "ended", ne)),
    me.push( () => we(t, "buffered", R)),
    me.push( () => we(t, "readyState", se));
    let ue = r[29] && !(r[21] && r[23]) && Wl(r)
      , fe = r[22] && !(r[21] && r[23]) && Ul(r);
    v = new T_({
        props: {
            active: r[12] === !1 && !r[19]
        }
    });
    let Y = r[34].default && Fl(r);
    return {
        c() {
            e = N("div"),
            W(t.$$.fragment),
            c = Q(),
            d = N("img"),
            _ = Q(),
            ue && ue.c(),
            b = Q(),
            fe && fe.c(),
            m = Q(),
            W(v.$$.fragment),
            k = Q(),
            Y && Y.c(),
            this.h()
        },
        l(L) {
            e = B(L, "DIV", {
                id: !0,
                class: !0,
                style: !0
            });
            var re = S(e);
            U(t.$$.fragment, re),
            c = X(re),
            d = B(re, "IMG", {
                alt: !0,
                class: !0,
                src: !0
            }),
            _ = X(re),
            ue && ue.l(re),
            b = X(re),
            fe && fe.l(re),
            m = X(re),
            U(v.$$.fragment, re),
            k = X(re),
            Y && Y.l(re),
            re.forEach(p),
            this.h()
        },
        h() {
            g(d, "alt", r[7]),
            g(d, "class", "g-videoplayer_poster svelte-3kpmvj"),
            gt(d.src, h = r[16]) || g(d, "src", h),
            J(d, "active", !r[11] && r[21]),
            g(e, "id", r[3]),
            g(e, "class", "g-videoplayer_wrapper svelte-3kpmvj"),
            g(e, "style", r[17]),
            xe( () => r[59].call(e))
        },
        m(L, re) {
            M(L, e, re),
            z(t, e, null),
            E(e, c),
            E(e, d),
            E(e, _),
            ue && ue.m(e, null),
            E(e, b),
            fe && fe.m(e, null),
            E(e, m),
            z(v, e, null),
            E(e, k),
            Y && Y.m(e, null),
            A = Dt(e, r[59].bind(e)),
            j = !0,
            P || (T = [mo(A_.call(null, e)), ge(e, "enter", r[60]), ge(e, "exit", r[61])],
            P = !0)
        },
        p(L, re) {
            const ce = {};
            re[0] & 32768 && (ce.src = L[15]),
            re[0] & 65536 && (ce.poster = L[16]),
            re[0] & 256 && (ce.controls = L[8]),
            re[0] & 2 && (ce.autoplay = L[1]),
            re[0] & 16 && (ce.loop = L[4]),
            re[0] & 32 && (ce.playsinline = L[5]),
            re[0] & 64 && (ce.preload = L[6]),
            re[0] & 128 && (ce.altText = L[7]),
            !n && re[0] & 1024 && (n = !0,
            ce.videoEl = L[10],
            Te( () => n = !1)),
            !s && re[0] & 2048 && (s = !0,
            ce.currentTime = L[11],
            Te( () => s = !1)),
            !l && re[0] & 262144 && (l = !0,
            ce.duration = L[18],
            Te( () => l = !1)),
            !i && re[0] & 4 && (i = !0,
            ce.muted = L[2],
            Te( () => i = !1)),
            !o && re[0] & 4096 && (o = !0,
            ce.paused = L[12],
            Te( () => o = !1)),
            !a && re[0] & 8192 && (a = !0,
            ce.ended = L[13],
            Te( () => a = !1)),
            !f && re[0] & 524288 && (f = !0,
            ce.buffered = L[19],
            Te( () => f = !1)),
            !u && re[0] & 1048576 && (u = !0,
            ce.readyState = L[20],
            Te( () => u = !1)),
            t.$set(ce),
            (!j || re[0] & 128) && g(d, "alt", L[7]),
            (!j || re[0] & 65536 && !gt(d.src, h = L[16])) && g(d, "src", h),
            (!j || re[0] & 2099200) && J(d, "active", !L[11] && L[21]),
            L[29] && !(L[21] && L[23]) ? ue ? (ue.p(L, re),
            re[0] & 2097152 && w(ue, 1)) : (ue = Wl(L),
            ue.c(),
            w(ue, 1),
            ue.m(e, b)) : ue && (le(),
            y(ue, 1, 1, () => {
                ue = null
            }
            ),
            ie()),
            L[22] && !(L[21] && L[23]) ? fe ? (fe.p(L, re),
            re[0] & 6291456 && w(fe, 1)) : (fe = Ul(L),
            fe.c(),
            w(fe, 1),
            fe.m(e, m)) : fe && (le(),
            y(fe, 1, 1, () => {
                fe = null
            }
            ),
            ie());
            const Ce = {};
            re[0] & 528384 && (Ce.active = L[12] === !1 && !L[19]),
            v.$set(Ce),
            L[34].default ? Y ? (Y.p(L, re),
            re[1] & 8 && w(Y, 1)) : (Y = Fl(L),
            Y.c(),
            w(Y, 1),
            Y.m(e, null)) : Y && (le(),
            y(Y, 1, 1, () => {
                Y = null
            }
            ),
            ie()),
            (!j || re[0] & 8) && g(e, "id", L[3]),
            (!j || re[0] & 131072) && g(e, "style", L[17])
        },
        i(L) {
            j || (w(t.$$.fragment, L),
            w(ue),
            w(fe),
            w(v.$$.fragment, L),
            w(Y),
            j = !0)
        },
        o(L) {
            y(t.$$.fragment, L),
            y(ue),
            y(fe),
            y(v.$$.fragment, L),
            y(Y),
            j = !1
        },
        d(L) {
            L && p(e),
            G(t),
            ue && ue.d(),
            fe && fe.d(),
            G(v),
            Y && Y.d(),
            A(),
            P = !1,
            St(T)
        }
    }
}
function S_(r, e) {
    e && (r || e.pause())
}
function P_(r, e) {
    e && (e.volume = r)
}
function O_(r, e, t) {
    let n, s, l, i;
    Ee(r, vp, C => t(44, l = C)),
    Ee(r, _a, C => t(22, i = C));
    let {$$slots: o={}, $$scope: a} = e;
    const f = tr(o);
    let {renditions: u=[]} = e
      , {posters: c=[]} = e
      , {src: d=""} = e
      , {poster: h=""} = e
      , {ratio: _=""} = e
      , b = d
      , m = h
      , v = _
      , k = ""
      , {id: A=""} = e
      , {autoplay: j=!1} = e
      , {loop: P=!1} = e
      , {muted: T=!1} = e
      , {playsinline: O=!0} = e
      , {preload: D="auto"} = e
      , {altText: I=""} = e
      , {controls: ee=!1} = e
      , {videoPlayerOptions: K={}} = e;
    const R = {
        ...{
            playOnlyWhenInView: !!(j && T),
            treatAsImageIfCantAutoplay: !1,
            showPlayPauseButton: !0,
            showTime: !0,
            showToggleMuteButton: !0,
            showPlayAgainButton: !0,
            showProgressBar: !0,
            showPlayCenterButton: !0,
            showCC: !!K.subtitles,
            showCCButton: !!K.subtitles
        },
        ...K
    };
    let se = R.playOnlyWhenInView;
    const F = R.treatAsImageIfCantAutoplay
      , ue = R.subtitles
      , fe = R.showPlayPauseButton
      , Y = R.showTime
      , L = R.showToggleMuteButton
      , re = R.showPlayAgainButton
      , ce = R.showPlayCenterButton
      , Ce = R.showProgressBar;
    let Ge = R.showCC;
    const Se = R.showCCButton;
    let {active: ye=j} = e
      , {volume: V=1} = e
      , Be = se;
    const H = $r();
    let ke, _e, Ke, Ie, Xe, Me, be, ve = 0, tt;
    l && (j = !1,
    se = !1,
    ye = !1);
    function Ne() {
        d ? t(15, b = d) : u.length && t(15, b = Ut(u, ve).url)
    }
    function dt() {
        h ? t(16, m = h) : c.length && t(16, m = Ut(c, ve).url)
    }
    function Ot() {
        if (_)
            v = _;
        else if (u.length) {
            const Ae = Ut(u, ve);
            Ae.width && Ae.height && (v = `${Ae.width}:${Ae.height}`)
        }
        const C = v.split(":");
        if (C.every(Ae => !!parseInt(Ae))) {
            const Ae = parseInt(C[0]) / parseInt(C[1]);
            t(17, k = `--g-aspect-ratio: ${Ae}`)
        } else
            console.warn(`Could not determine aspect ratio for video ${u[0] || d}, please pass in a ratio prop manually.`)
    }
    function yt() {
        Ne(),
        dt(),
        Ot()
    }
    function kt(C) {
        H("video_current_time", C)
    }
    function ft(C) {
        C && H("video_paused")
    }
    function Mt(C) {
        C && H("video_ended")
    }
    function jt(C) {
        !se || s || !j && n || t(0, ye = C)
    }
    function ht(C, Ae) {
        if (Ae && C) {
            const Qe = Ae.play();
            Qe !== void 0 && Qe.catch(lt => {
                console.log(lt),
                jn()
            }
            )
        }
    }
    function cr(C) {
        C.stopPropagation(),
        t(0, ye = !0)
    }
    function Mn() {
        ye || t(0, ye = !0)
    }
    function an() {
        ye && t(0, ye = !1)
    }
    function jn() {
        ye && n && (t(42, tt = !0),
        t(0, ye = !1))
    }
    vt( () => {
        ke.addEventListener("playing", Mn),
        ke.addEventListener("pause", an)
    }
    ),
    es( () => {
        ke && (ke.removeEventListener("playing", Mn),
        ke.removeEventListener("pause", an))
    }
    );
    function Gt(C) {
        ke = C,
        t(10, ke)
    }
    function dr(C) {
        _e = C,
        t(11, _e)
    }
    function hr(C) {
        Ke = C,
        t(18, Ke)
    }
    function mr(C) {
        T = C,
        t(2, T)
    }
    function gr(C) {
        Ie = C,
        t(12, Ie)
    }
    function pr(C) {
        Xe = C,
        t(13, Xe)
    }
    function _r(C) {
        Me = C,
        t(19, Me)
    }
    function br(C) {
        be = C,
        t(20, be)
    }
    function vr(C) {
        _e = C,
        t(11, _e)
    }
    function wr(C) {
        Ie = C,
        t(12, Ie)
    }
    function yr(C) {
        T = C,
        t(2, T)
    }
    function kr(C) {
        ye = C,
        t(0, ye)
    }
    function Tr() {
        ve = this.clientWidth,
        t(14, ve)
    }
    const Er = () => t(9, Be = !0)
      , Ir = () => t(9, Be = !1);
    return r.$$set = C => {
        "renditions"in C && t(35, u = C.renditions),
        "posters"in C && t(36, c = C.posters),
        "src"in C && t(37, d = C.src),
        "poster"in C && t(38, h = C.poster),
        "ratio"in C && t(39, _ = C.ratio),
        "id"in C && t(3, A = C.id),
        "autoplay"in C && t(1, j = C.autoplay),
        "loop"in C && t(4, P = C.loop),
        "muted"in C && t(2, T = C.muted),
        "playsinline"in C && t(5, O = C.playsinline),
        "preload"in C && t(6, D = C.preload),
        "altText"in C && t(7, I = C.altText),
        "controls"in C && t(8, ee = C.controls),
        "videoPlayerOptions"in C && t(40, K = C.videoPlayerOptions),
        "active"in C && t(0, ye = C.active),
        "volume"in C && t(41, V = C.volume),
        "$$scope"in C && t(45, a = C.$$scope)
    }
    ,
    r.$$.update = () => {
        r.$$.dirty[0] & 16384 | r.$$.dirty[1] & 240 && yt(),
        r.$$.dirty[0] & 2048 && kt(_e),
        r.$$.dirty[0] & 4096 && ft(Ie),
        r.$$.dirty[0] & 8192 && Mt(Xe),
        r.$$.dirty[0] & 6144 && t(43, n = !_e && Ie !== !1),
        r.$$.dirty[1] & 14336 && t(21, s = tt && n || l),
        r.$$.dirty[0] & 512 && jt(Be),
        r.$$.dirty[0] & 1025 && ht(ye, ke),
        r.$$.dirty[0] & 1025 && S_(ye, ke),
        r.$$.dirty[0] & 1024 | r.$$.dirty[1] & 1024 && P_(V, ke)
    }
    ,
    [ye, j, T, A, P, O, D, I, ee, Be, ke, _e, Ie, Xe, ve, b, m, k, Ke, Me, be, s, i, F, ue, fe, Y, L, re, ce, Ce, Ge, Se, cr, f, u, c, d, h, _, K, V, tt, n, l, a, o, Gt, dr, hr, mr, gr, pr, _r, br, vr, wr, yr, kr, Tr, Er, Ir]
}
class M_ extends x {
    constructor(e) {
        super(),
        $(this, e, O_, C_, Z, {
            renditions: 35,
            posters: 36,
            src: 37,
            poster: 38,
            ratio: 39,
            id: 3,
            autoplay: 1,
            loop: 4,
            muted: 2,
            playsinline: 5,
            preload: 6,
            altText: 7,
            controls: 8,
            videoPlayerOptions: 40,
            active: 0,
            volume: 41
        }, null, [-1, -1, -1])
    }
}
function j_(r) {
    let e, t, n;
    return {
        c() {
            e = N("img"),
            this.h()
        },
        l(s) {
            e = B(s, "IMG", {
                alt: !0,
                loading: !0,
                decoding: !0,
                width: !0,
                height: !0,
                src: !0,
                class: !0
            }),
            this.h()
        },
        h() {
            g(e, "alt", r[2]),
            g(e, "loading", r[8]),
            g(e, "decoding", "async"),
            g(e, "width", r[3]),
            g(e, "height", r[4]),
            gt(e.src, t = r[1]) || g(e, "src", t),
            g(e, "class", n = Ft(r[5]) + " svelte-z1ymna"),
            J(e, "js", r[6]),
            J(e, "nojs", !r[6]),
            J(e, "loaded", r[0])
        },
        m(s, l) {
            M(s, e, l),
            r[10](e)
        },
        p(s, [l]) {
            l & 4 && g(e, "alt", s[2]),
            l & 8 && g(e, "width", s[3]),
            l & 16 && g(e, "height", s[4]),
            l & 2 && !gt(e.src, t = s[1]) && g(e, "src", t),
            l & 32 && n !== (n = Ft(s[5]) + " svelte-z1ymna") && g(e, "class", n),
            l & 96 && J(e, "js", s[6]),
            l & 96 && J(e, "nojs", !s[6]),
            l & 33 && J(e, "loaded", s[0])
        },
        i: q,
        o: q,
        d(s) {
            s && p(e),
            r[10](null)
        }
    }
}
function B_(r, e, t) {
    let {src: n} = e, {lazy: s=!1} = e, {altText: l=""} = e, {width: i=""} = e, {height: o=""} = e, {loaded: a=!1} = e, f = s ? "lazy" : "eager", {className: u="g-image"} = e, c = !1, d;
    const h = () => {
        t(0, a = !0)
    }
    ;
    vt( () => {
        t(6, c = !0),
        d && d.complete && d.naturalHeight !== 0 ? h() : t(7, d.onload = h, d)
    }
    );
    function _(b) {
        me[b ? "unshift" : "push"]( () => {
            d = b,
            t(7, d)
        }
        )
    }
    return r.$$set = b => {
        "src"in b && t(1, n = b.src),
        "lazy"in b && t(9, s = b.lazy),
        "altText"in b && t(2, l = b.altText),
        "width"in b && t(3, i = b.width),
        "height"in b && t(4, o = b.height),
        "loaded"in b && t(0, a = b.loaded),
        "className"in b && t(5, u = b.className)
    }
    ,
    [a, n, l, i, o, u, c, d, f, s, _]
}
let ys = class extends x {
    constructor(e) {
        super(),
        $(this, e, B_, j_, Z, {
            src: 1,
            lazy: 9,
            altText: 2,
            width: 3,
            height: 4,
            loaded: 0,
            className: 5
        })
    }
}
;
const Hl = En.desktop
  , N_ = typeof window != "undefined"
  , D_ = r => {
    const e = []
      , t = r.filter(o => (o == null ? void 0 : o.cropName) && o.cropName.toLowerCase().includes("mobile")).sort(Ht("width"))
      , n = i2(r, t).sort(Ht("width"))
      , s = t.length
      , l = n.length
      , i = (o, a=!1) => {
        const f = o2([...o], "width")
          , u = Object.keys(f).map(d => parseInt(d))
          , c = Object.values(u).length;
        Object.entries(f).forEach( ([d,h], _) => {
            const b = e.length
              , m = a ? 2 : 1
              , v = parseInt(`${d}`) / m
              , k = b === 0
              , A = ( () => {
                let T;
                return a && !l && b === c - 1 ? T = !0 : a && l ? T = !1 : _ === c - 1 ? T = !0 : T = !1,
                T
            }
            )();
            let j, P = !0;
            if (k)
                j = `(max-width: ${a ? Math.max(v, Hl - 1) : v}px)`;
            else {
                const T = function() {
                    let O;
                    if (a)
                        O = Math.max(e[b - 1].width + 1, v);
                    else {
                        const D = e.filter(I => !I.isMobileRendition);
                        O = D.length ? D[D.length - 1].width + 1 : Hl
                    }
                    return O
                }();
                if (A)
                    j = `(min-width: ${T}px)`;
                else {
                    const O = u[_];
                    j = `(min-width: ${T}px) and (max-width: ${O}px)`,
                    P = O >= T
                }
            }
            h.forEach(T => {
                const {url: O, retinaUrl: D, width: I, height: ee} = T;
                P && e.push({
                    ...T,
                    srcSetUrl: D ? `${O}, ${D} 2x` : O,
                    ratio: I / ee,
                    aspectRatio: `${I}/${ee}`,
                    mediaQuery: j,
                    isMobileRendition: a
                })
            }
            )
        }
        )
    }
    ;
    return s && i(t, !0),
    i(n),
    e
}
  , ql = r => {
    let e = "auto";
    if (r != null && r.length) {
        const t = r[0];
        if (r.length === 1)
            e = t.aspectRatio;
        else if (r.length > 1) {
            const n = r.find(i => i.isMobileRendition)
              , s = r.find(i => !i.isMobileRendition);
            !!n && !!s && Math.abs(n.ratio - s.ratio) > .02 ? (e = "auto;",
            N_ && (xr(pa) ? e = n.aspectRatio : e = s.aspectRatio)) : e = t.aspectRatio
        }
    }
    return e
}
;
function Kl(r, e, t) {
    const n = r.slice();
    return n[10] = e[t],
    n
}
function L_(r) {
    let e, t;
    return e = new ln({
        props: {
            message: "No default image rendition found. Check that your <code>renditions[]</code> is correct, and if using Scoop Images you're using a <code>cropName</code> that exist in Scoop."
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p: q,
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function R_(r) {
    let e, t, n, s, l, i = r[2].length > 1 && Yl(r);
    function o(f) {
        r[9](f)
    }
    let a = {
        src: r[5].url,
        altText: r[1],
        lazy: r[0],
        width: r[5].width,
        height: r[5].height
    };
    return r[3] !== void 0 && (a.loaded = r[3]),
    n = new ys({
        props: a
    }),
    me.push( () => we(n, "loaded", o)),
    {
        c() {
            e = N("picture"),
            i && i.c(),
            t = Q(),
            W(n.$$.fragment),
            this.h()
        },
        l(f) {
            e = B(f, "PICTURE", {
                style: !0,
                class: !0
            });
            var u = S(e);
            i && i.l(u),
            t = X(u),
            U(n.$$.fragment, u),
            u.forEach(p),
            this.h()
        },
        h() {
            st(e, "--g-picture-ratio", r[4]),
            g(e, "class", "svelte-1bbwgvj"),
            J(e, "loaded", r[3])
        },
        m(f, u) {
            M(f, e, u),
            i && i.m(e, null),
            E(e, t),
            z(n, e, null),
            l = !0
        },
        p(f, u) {
            f[2].length > 1 ? i ? i.p(f, u) : (i = Yl(f),
            i.c(),
            i.m(e, t)) : i && (i.d(1),
            i = null);
            const c = {};
            u & 32 && (c.src = f[5].url),
            u & 2 && (c.altText = f[1]),
            u & 1 && (c.lazy = f[0]),
            u & 32 && (c.width = f[5].width),
            u & 32 && (c.height = f[5].height),
            !s && u & 8 && (s = !0,
            c.loaded = f[3],
            Te( () => s = !1)),
            n.$set(c),
            (!l || u & 16) && st(e, "--g-picture-ratio", f[4]),
            (!l || u & 8) && J(e, "loaded", f[3])
        },
        i(f) {
            l || (w(n.$$.fragment, f),
            l = !0)
        },
        o(f) {
            y(n.$$.fragment, f),
            l = !1
        },
        d(f) {
            f && p(e),
            i && i.d(),
            G(n)
        }
    }
}
function Yl(r) {
    let e, t = Oe(r[2]), n = [];
    for (let s = 0; s < t.length; s += 1)
        n[s] = Zl(Kl(r, t, s));
    return {
        c() {
            for (let s = 0; s < n.length; s += 1)
                n[s].c();
            e = te()
        },
        l(s) {
            for (let l = 0; l < n.length; l += 1)
                n[l].l(s);
            e = te()
        },
        m(s, l) {
            for (let i = 0; i < n.length; i += 1)
                n[i] && n[i].m(s, l);
            M(s, e, l)
        },
        p(s, l) {
            if (l & 4) {
                t = Oe(s[2]);
                let i;
                for (i = 0; i < t.length; i += 1) {
                    const o = Kl(s, t, i);
                    n[i] ? n[i].p(o, l) : (n[i] = Zl(o),
                    n[i].c(),
                    n[i].m(e.parentNode, e))
                }
                for (; i < n.length; i += 1)
                    n[i].d(1);
                n.length = t.length
            }
        },
        d(s) {
            s && p(e),
            ct(n, s)
        }
    }
}
function Zl(r) {
    let e, t, n;
    return {
        c() {
            e = N("source"),
            this.h()
        },
        l(s) {
            e = B(s, "SOURCE", {
                media: !0,
                srcset: !0
            }),
            this.h()
        },
        h() {
            g(e, "media", t = r[10].mediaQuery),
            Oa(e, n = r[10].srcSetUrl) || g(e, "srcset", n)
        },
        m(s, l) {
            M(s, e, l)
        },
        p(s, l) {
            l & 4 && t !== (t = s[10].mediaQuery) && g(e, "media", t),
            l & 4 && n !== (n = s[10].srcSetUrl) && g(e, "srcset", n)
        },
        d(s) {
            s && p(e)
        }
    }
}
function V_(r) {
    let e, t, n, s;
    const l = [R_, L_]
      , i = [];
    function o(a, f) {
        return a[5] ? 0 : 1
    }
    return e = o(r),
    t = i[e] = l[e](r),
    {
        c() {
            t.c(),
            n = te()
        },
        l(a) {
            t.l(a),
            n = te()
        },
        m(a, f) {
            i[e].m(a, f),
            M(a, n, f),
            s = !0
        },
        p(a, [f]) {
            let u = e;
            e = o(a),
            e === u ? i[e].p(a, f) : (le(),
            y(i[u], 1, 1, () => {
                i[u] = null
            }
            ),
            ie(),
            t = i[e],
            t ? t.p(a, f) : (t = i[e] = l[e](a),
            t.c()),
            w(t, 1),
            t.m(n.parentNode, n))
        },
        i(a) {
            s || (w(t),
            s = !0)
        },
        o(a) {
            y(t),
            s = !1
        },
        d(a) {
            a && p(n),
            i[e].d(a)
        }
    }
}
function G_(r, e, t) {
    let n, s, l;
    Ee(r, Ve, h => t(8, l = h));
    let {renditions: i=[]} = e
      , {lazy: o=!0} = e
      , {altText: a=""} = e
      , f = !1
      , u = !1
      , c = ql(n);
    vt( () => {
        t(7, u = !0)
    }
    );
    function d(h) {
        f = h,
        t(3, f)
    }
    return r.$$set = h => {
        "renditions"in h && t(6, i = h.renditions),
        "lazy"in h && t(0, o = h.lazy),
        "altText"in h && t(1, a = h.altText)
    }
    ,
    r.$$.update = () => {
        r.$$.dirty & 64 && t(2, n = D_(i)),
        r.$$.dirty & 4 && t(5, s = n[0]),
        r.$$.dirty & 388 && t(4, c = ql(n))
    }
    ,
    [o, a, n, f, c, s, i, u, l, d]
}
class ya extends x {
    constructor(e) {
        super(),
        $(this, e, G_, V_, Z, {
            renditions: 6,
            lazy: 0,
            altText: 1
        })
    }
}
function Xl(r, e, t) {
    const n = r.slice();
    return n[8] = e[t],
    n[10] = t,
    n
}
function z_(r) {
    let e;
    return {
        c() {
            e = N("div"),
            this.h()
        },
        l(t) {
            e = B(t, "DIV", {
                class: !0
            }),
            S(e).forEach(p),
            this.h()
        },
        h() {
            g(e, "class", "g-stepper_step svelte-p3vdj4"),
            J(e, "active", r[8].active)
        },
        m(t, n) {
            M(t, e, n)
        },
        p(t, n) {
            n & 2 && J(e, "active", t[8].active)
        },
        d(t) {
            t && p(e)
        }
    }
}
function W_(r) {
    let e, t, n;
    function s() {
        return r[6](r[10])
    }
    return {
        c() {
            e = N("button"),
            this.h()
        },
        l(l) {
            e = B(l, "BUTTON", {
                class: !0,
                "data-newindex": !0
            }),
            S(e).forEach(p),
            this.h()
        },
        h() {
            g(e, "class", "g-stepper_step svelte-p3vdj4"),
            g(e, "data-newindex", r[10]),
            J(e, "active", r[8].active)
        },
        m(l, i) {
            M(l, e, i),
            t || (n = ge(e, "click", Ma(s)),
            t = !0)
        },
        p(l, i) {
            r = l,
            i & 2 && J(e, "active", r[8].active)
        },
        d(l) {
            l && p(e),
            t = !1,
            n()
        }
    }
}
function Ql(r) {
    let e;
    function t(l, i) {
        return l[2] ? W_ : z_
    }
    let n = t(r)
      , s = n(r);
    return {
        c() {
            s.c(),
            e = te()
        },
        l(l) {
            s.l(l),
            e = te()
        },
        m(l, i) {
            s.m(l, i),
            M(l, e, i)
        },
        p(l, i) {
            n === (n = t(l)) && s ? s.p(l, i) : (s.d(1),
            s = n(l),
            s && (s.c(),
            s.m(e.parentNode, e)))
        },
        d(l) {
            l && p(e),
            s.d(l)
        }
    }
}
function U_(r) {
    let e, t, n = Oe(r[1]), s = [];
    for (let l = 0; l < n.length; l += 1)
        s[l] = Ql(Xl(r, n, l));
    return {
        c() {
            e = N("div");
            for (let l = 0; l < s.length; l += 1)
                s[l].c();
            this.h()
        },
        l(l) {
            e = B(l, "DIV", {
                class: !0,
                style: !0
            });
            var i = S(e);
            for (let o = 0; o < s.length; o += 1)
                s[o].l(i);
            i.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", t = "g-stepper g-position-" + r[3] + " g-theme-" + r[4] + " svelte-p3vdj4"),
            g(e, "style", r[5])
        },
        m(l, i) {
            M(l, e, i);
            for (let o = 0; o < s.length; o += 1)
                s[o] && s[o].m(e, null)
        },
        p(l, [i]) {
            if (i & 7) {
                n = Oe(l[1]);
                let o;
                for (o = 0; o < n.length; o += 1) {
                    const a = Xl(l, n, o);
                    s[o] ? s[o].p(a, i) : (s[o] = Ql(a),
                    s[o].c(),
                    s[o].m(e, null))
                }
                for (; o < s.length; o += 1)
                    s[o].d(1);
                s.length = n.length
            }
            i & 24 && t !== (t = "g-stepper g-position-" + l[3] + " g-theme-" + l[4] + " svelte-p3vdj4") && g(e, "class", t),
            i & 32 && g(e, "style", l[5])
        },
        i: q,
        o: q,
        d(l) {
            l && p(e),
            ct(s, l)
        }
    }
}
function F_(r, e, t) {
    let n, {items: s} = e, {stepperClick: l=!1} = e, {stepperPosition: i="right"} = e, {stepperTheme: o="standard"} = e, {index: a} = e;
    const f = {
        standard: {
            inactive: {
                "background-color": "#c7c7c7",
                border: "1px solid rgba(0, 0, 0, 0.1)"
            },
            active: {
                "background-color": "#121212",
                border: "1px solid rgba(0, 0, 0, 0.1)"
            }
        },
        semiTransparent: {
            inactive: {
                "background-color": "rgba(255, 255, 255, 0.4)",
                border: "1px solid rgba(0, 0, 0, 0.1)"
            },
            active: {
                "background-color": "rgb(255, 255, 255)",
                border: "1px solid rgb(255, 255, 255"
            }
        }
    }
      , u = c => {
        t(0, a = c)
    }
    ;
    return r.$$set = c => {
        "items"in c && t(1, s = c.items),
        "stepperClick"in c && t(2, l = c.stepperClick),
        "stepperPosition"in c && t(3, i = c.stepperPosition),
        "stepperTheme"in c && t(4, o = c.stepperTheme),
        "index"in c && t(0, a = c.index)
    }
    ,
    r.$$.update = () => {
        r.$$.dirty & 16 && t(5, n = (c => {
            const d = [];
            return Object.entries(c).forEach( ([h,_]) => {
                Object.entries(_).forEach( ([b,m]) => {
                    d.push(`--g-stepper-${h}-${b}: ${m}`)
                }
                )
            }
            ),
            d.join(";")
        }
        )(f[o] || f.standard))
    }
    ,
    [a, s, l, i, o, n, u]
}
class ka extends x {
    constructor(e) {
        super(),
        $(this, e, F_, U_, Z, {
            items: 1,
            stepperClick: 2,
            stepperPosition: 3,
            stepperTheme: 4,
            index: 0
        })
    }
}
function H_(r) {
    let e, t, n, s, l, i, o, a, f, u, c, d;
    return {
        c() {
            e = N("div"),
            t = N("button"),
            n = he("svg"),
            s = he("path"),
            i = Q(),
            o = N("button"),
            a = he("svg"),
            f = he("path"),
            this.h()
        },
        l(h) {
            e = B(h, "DIV", {
                class: !0
            });
            var _ = S(e);
            t = B(_, "BUTTON", {
                "aria-label": !0,
                class: !0
            });
            var b = S(t);
            n = de(b, "svg", {
                width: !0,
                height: !0,
                viewBox: !0,
                class: !0
            });
            var m = S(n);
            s = de(m, "path", {
                d: !0
            }),
            S(s).forEach(p),
            m.forEach(p),
            b.forEach(p),
            i = X(_),
            o = B(_, "BUTTON", {
                "aria-label": !0,
                class: !0
            });
            var v = S(o);
            a = de(v, "svg", {
                width: !0,
                height: !0,
                viewBox: !0,
                style: !0,
                class: !0
            });
            var k = S(a);
            f = de(k, "path", {
                d: !0
            }),
            S(f).forEach(p),
            k.forEach(p),
            v.forEach(p),
            _.forEach(p),
            this.h()
        },
        h() {
            g(s, "d", "M6.60156 11.2002L1.40156 6.0002L6.60156 0.800197"),
            g(n, "width", "10"),
            g(n, "height", "12"),
            g(n, "viewBox", "0 0 10 12"),
            g(n, "class", "svelte-5lms6q"),
            g(t, "aria-label", "previous slide"),
            t.disabled = l = !r[2],
            g(t, "class", "g-slideshow_button g-previous svelte-5lms6q"),
            J(t, "active", r[2]),
            g(f, "d", "M6.60156 11.2002L1.40156 6.0002L6.60156 0.800197"),
            g(a, "width", "10"),
            g(a, "height", "12"),
            g(a, "viewBox", "0 0 10 12"),
            st(a, "transform", "scaleX(-1)"),
            g(a, "class", "svelte-5lms6q"),
            g(o, "aria-label", "next slide"),
            o.disabled = u = !r[1],
            g(o, "class", "g-slideshow_button g-next svelte-5lms6q"),
            J(o, "active", r[1]),
            g(e, "class", "g-slideshow_buttons svelte-5lms6q")
        },
        m(h, _) {
            M(h, e, _),
            E(e, t),
            E(t, n),
            E(n, s),
            E(e, i),
            E(e, o),
            E(o, a),
            E(a, f),
            c || (d = [ge(t, "click", r[5]), ge(o, "click", r[6])],
            c = !0)
        },
        p(h, [_]) {
            _ & 4 && l !== (l = !h[2]) && (t.disabled = l),
            _ & 4 && J(t, "active", h[2]),
            _ & 2 && u !== (u = !h[1]) && (o.disabled = u),
            _ & 2 && J(o, "active", h[1])
        },
        i: q,
        o: q,
        d(h) {
            h && p(e),
            c = !1,
            St(d)
        }
    }
}
function q_(r, e, t) {
    let n, s, {index: l=0} = e, {items: i} = e;
    const o = u => {
        u >= 0 && u <= i.length - 1 && t(0, l = u)
    }
      , a = () => {
        o(l - 1)
    }
      , f = () => o(l + 1);
    return r.$$set = u => {
        "index"in u && t(0, l = u.index),
        "items"in u && t(4, i = u.items)
    }
    ,
    r.$$.update = () => {
        r.$$.dirty & 1 && t(2, n = l > 0),
        r.$$.dirty & 17 && t(1, s = l < i.length - 1)
    }
    ,
    [l, s, n, o, i, a, f]
}
class K_ extends x {
    constructor(e) {
        super(),
        $(this, e, q_, H_, Z, {
            index: 0,
            items: 4
        })
    }
}
function Jl(r, e, t) {
    const n = r.slice();
    return n[41] = e[t],
    n[43] = t,
    n
}
function Y_(r) {
    let e, t;
    return e = new ur({
        props: {
            props: r[41]
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, s) {
            const l = {};
            s[0] & 1 && (l.props = n[41]),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function xl(r, e) {
    var u, c;
    let t, n, s, l, i, o;
    const a = [{
        captionComponent: e[9]
    }, {
        headerMarginInline: e[15]
    }, {
        footerMarginInline: e[15]
    }, Ls(e[41], {
        neededProps: ["hed", "leadin", "caption", "source", "credit", "note", "label", "maxWidth", "headerMaxWidth", "footerMaxWidth"],
        propDefaults: {
            maxWidth: "default",
            headerMaxWidth: "body",
            footerMaxWidth: "body"
        }
    }), {
        assetType: (c = (u = e[41]) == null ? void 0 : u.media) == null ? void 0 : c.assetType
    }];
    let f = {
        $$slots: {
            default: [Y_]
        },
        $$scope: {
            ctx: e
        }
    };
    for (let d = 0; d < a.length; d += 1)
        f = at(f, a[d]);
    return n = new Qt({
        props: f
    }),
    {
        key: r,
        first: null,
        c() {
            t = N("div"),
            W(n.$$.fragment),
            s = Q(),
            this.h()
        },
        l(d) {
            t = B(d, "DIV", {
                class: !0,
                "aria-hidden": !0
            });
            var h = S(t);
            U(n.$$.fragment, h),
            s = X(h),
            h.forEach(p),
            this.h()
        },
        h() {
            var d, h, _;
            g(t, "class", l = "g-slide g-slide-" + e[43] + " g-slide-" + e[41].id + " g-slide-type-" + ((_ = (h = (d = e[41]) == null ? void 0 : d.media) == null ? void 0 : h.mediaComponent) == null ? void 0 : _.toLowerCase()) + " svelte-7fde2a"),
            g(t, "aria-hidden", i = e[41].index !== e[1]),
            J(t, "g-active", e[41].index === e[1]),
            this.first = t
        },
        m(d, h) {
            M(d, t, h),
            z(n, t, null),
            E(t, s),
            o = !0
        },
        p(d, h) {
            var b, m, v, k, A;
            e = d;
            const _ = h[0] & 33281 ? et(a, [h[0] & 512 && {
                captionComponent: e[9]
            }, h[0] & 32768 && {
                headerMarginInline: e[15]
            }, h[0] & 32768 && {
                footerMarginInline: e[15]
            }, h[0] & 1 && ot(Ls(e[41], {
                neededProps: ["hed", "leadin", "caption", "source", "credit", "note", "label", "maxWidth", "headerMaxWidth", "footerMaxWidth"],
                propDefaults: {
                    maxWidth: "default",
                    headerMaxWidth: "body",
                    footerMaxWidth: "body"
                }
            })), h[0] & 1 && {
                assetType: (m = (b = e[41]) == null ? void 0 : b.media) == null ? void 0 : m.assetType
            }]) : {};
            h[0] & 1 | h[1] & 8192 && (_.$$scope = {
                dirty: h,
                ctx: e
            }),
            n.$set(_),
            (!o || h[0] & 1 && l !== (l = "g-slide g-slide-" + e[43] + " g-slide-" + e[41].id + " g-slide-type-" + ((A = (k = (v = e[41]) == null ? void 0 : v.media) == null ? void 0 : k.mediaComponent) == null ? void 0 : A.toLowerCase()) + " svelte-7fde2a")) && g(t, "class", l),
            (!o || h[0] & 3 && i !== (i = e[41].index !== e[1])) && g(t, "aria-hidden", i),
            (!o || h[0] & 3) && J(t, "g-active", e[41].index === e[1])
        },
        i(d) {
            o || (w(n.$$.fragment, d),
            o = !0)
        },
        o(d) {
            y(n.$$.fragment, d),
            o = !1
        },
        d(d) {
            d && p(t),
            G(n)
        }
    }
}
function $l(r) {
    let e, t, n, s = r[4] && ei(r), l = r[2] && ti(r);
    return {
        c() {
            e = N("div"),
            s && s.c(),
            t = Q(),
            l && l.c(),
            this.h()
        },
        l(i) {
            e = B(i, "DIV", {
                class: !0
            });
            var o = S(e);
            s && s.l(o),
            t = X(o),
            l && l.l(o),
            o.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", "g-overlay svelte-7fde2a")
        },
        m(i, o) {
            M(i, e, o),
            s && s.m(e, null),
            E(e, t),
            l && l.m(e, null),
            n = !0
        },
        p(i, o) {
            i[4] ? s ? (s.p(i, o),
            o[0] & 16 && w(s, 1)) : (s = ei(i),
            s.c(),
            w(s, 1),
            s.m(e, t)) : s && (le(),
            y(s, 1, 1, () => {
                s = null
            }
            ),
            ie()),
            i[2] ? l ? (l.p(i, o),
            o[0] & 4 && w(l, 1)) : (l = ti(i),
            l.c(),
            w(l, 1),
            l.m(e, null)) : l && (le(),
            y(l, 1, 1, () => {
                l = null
            }
            ),
            ie())
        },
        i(i) {
            n || (w(s),
            w(l),
            n = !0)
        },
        o(i) {
            y(s),
            y(l),
            n = !1
        },
        d(i) {
            i && p(e),
            s && s.d(),
            l && l.d()
        }
    }
}
function ei(r) {
    let e, t, n, s;
    function l(a) {
        r[35](a)
    }
    var i = r[10];
    function o(a, f) {
        let u = {
            items: a[0]
        };
        return a[1] !== void 0 && (u.index = a[1]),
        {
            props: u
        }
    }
    return i && (e = $e(i, o(r)),
    me.push( () => we(e, "index", l))),
    {
        c() {
            e && W(e.$$.fragment),
            n = te()
        },
        l(a) {
            e && U(e.$$.fragment, a),
            n = te()
        },
        m(a, f) {
            e && z(e, a, f),
            M(a, n, f),
            s = !0
        },
        p(a, f) {
            if (f[0] & 1024 && i !== (i = a[10])) {
                if (e) {
                    le();
                    const u = e;
                    y(u.$$.fragment, 1, 0, () => {
                        G(u, 1)
                    }
                    ),
                    ie()
                }
                i ? (e = $e(i, o(a)),
                me.push( () => we(e, "index", l)),
                W(e.$$.fragment),
                w(e.$$.fragment, 1),
                z(e, n.parentNode, n)) : e = null
            } else if (i) {
                const u = {};
                f[0] & 1 && (u.items = a[0]),
                !t && f[0] & 2 && (t = !0,
                u.index = a[1],
                Te( () => t = !1)),
                e.$set(u)
            }
        },
        i(a) {
            s || (e && w(e.$$.fragment, a),
            s = !0)
        },
        o(a) {
            e && y(e.$$.fragment, a),
            s = !1
        },
        d(a) {
            a && p(n),
            e && G(e, a)
        }
    }
}
function ti(r) {
    let e, t, n;
    function s(i) {
        r[36](i)
    }
    let l = {
        items: r[0],
        stepperPosition: r[18],
        stepperTheme: r[6],
        stepperClick: r[3]
    };
    return r[1] !== void 0 && (l.index = r[1]),
    e = new ka({
        props: l
    }),
    me.push( () => we(e, "index", s)),
    {
        c() {
            W(e.$$.fragment)
        },
        l(i) {
            U(e.$$.fragment, i)
        },
        m(i, o) {
            z(e, i, o),
            n = !0
        },
        p(i, o) {
            const a = {};
            o[0] & 1 && (a.items = i[0]),
            o[0] & 262144 && (a.stepperPosition = i[18]),
            o[0] & 64 && (a.stepperTheme = i[6]),
            o[0] & 8 && (a.stepperClick = i[3]),
            !t && o[0] & 2 && (t = !0,
            a.index = i[1],
            Te( () => t = !1)),
            e.$set(a)
        },
        i(i) {
            n || (w(e.$$.fragment, i),
            n = !0)
        },
        o(i) {
            y(e.$$.fragment, i),
            n = !1
        },
        d(i) {
            G(e, i)
        }
    }
}
function Z_(r) {
    let e, t, n = [], s = new Map, l, i, o, a, f, u, c, d, h, _ = Oe(r[0]);
    const b = v => v[41].id;
    for (let v = 0; v < _.length; v += 1) {
        let k = Jl(r, _, v)
          , A = b(k);
        s.set(A, n[v] = xl(A, k))
    }
    let m = r[19] && $l(r);
    return {
        c() {
            e = N("div"),
            t = N("div");
            for (let v = 0; v < n.length; v += 1)
                n[v].c();
            i = Q(),
            m && m.c(),
            this.h()
        },
        l(v) {
            e = B(v, "DIV", {
                class: !0,
                style: !0,
                role: !0,
                "aria-label": !0
            });
            var k = S(e);
            t = B(k, "DIV", {
                class: !0,
                "aria-hidden": !0
            });
            var A = S(t);
            for (let j = 0; j < n.length; j += 1)
                n[j].l(A);
            A.forEach(p),
            i = X(k),
            m && m.l(k),
            k.forEach(p),
            this.h()
        },
        h() {
            g(t, "class", "g-slides svelte-7fde2a"),
            g(t, "aria-hidden", r[8]),
            xe( () => r[34].call(t)),
            g(e, "class", o = "g-slideshow g-transition-type-" + r[5] + " svelte-7fde2a"),
            g(e, "style", r[17]),
            g(e, "role", a = r[16] || void 0),
            g(e, "aria-label", f = r[7] || void 0),
            xe( () => r[37].call(e)),
            J(e, "js", r[12])
        },
        m(v, k) {
            M(v, e, k),
            E(e, t);
            for (let A = 0; A < n.length; A += 1)
                n[A] && n[A].m(t, null);
            l = Dt(t, r[34].bind(t)),
            E(e, i),
            m && m.m(e, null),
            u = Dt(e, r[37].bind(e)),
            c = !0,
            d || (h = mo(r[20].call(null, t)),
            d = !0)
        },
        p(v, k) {
            k[0] & 33283 && (_ = Oe(v[0]),
            le(),
            n = po(n, k, b, 1, v, _, s, t, go, xl, null, Jl),
            ie()),
            (!c || k[0] & 256) && g(t, "aria-hidden", v[8]),
            v[19] ? m ? (m.p(v, k),
            k[0] & 524288 && w(m, 1)) : (m = $l(v),
            m.c(),
            w(m, 1),
            m.m(e, null)) : m && (le(),
            y(m, 1, 1, () => {
                m = null
            }
            ),
            ie()),
            (!c || k[0] & 32 && o !== (o = "g-slideshow g-transition-type-" + v[5] + " svelte-7fde2a")) && g(e, "class", o),
            (!c || k[0] & 131072) && g(e, "style", v[17]),
            (!c || k[0] & 65536 && a !== (a = v[16] || void 0)) && g(e, "role", a),
            (!c || k[0] & 128 && f !== (f = v[7] || void 0)) && g(e, "aria-label", f),
            (!c || k[0] & 4128) && J(e, "js", v[12])
        },
        i(v) {
            if (!c) {
                for (let k = 0; k < _.length; k += 1)
                    w(n[k]);
                w(m),
                c = !0
            }
        },
        o(v) {
            for (let k = 0; k < n.length; k += 1)
                y(n[k]);
            y(m),
            c = !1
        },
        d(v) {
            v && p(e);
            for (let k = 0; k < n.length; k += 1)
                n[k].d();
            l(),
            m && m.d(),
            u(),
            d = !1,
            h()
        }
    }
}
function X_(r, e, t) {
    let n, s, l, i, o;
    Ee(r, Ve, H => t(33, o = H));
    const a = H => {}
    ;
    let {items: f} = e
      , {id: u=Wn("g-slideshow_")} = e
      , {stepper: c=!1} = e
      , {stepperClick: d=!1} = e
      , {enabled: h=!0} = e
      , {lazy: _=!0} = e
      , {autoAdvanceTime: b=0} = e
      , {showButtons: m=!0} = e
      , {processItem: v=a} = e
      , {onItemActive: k=a} = e
      , {onItemBlur: A=a} = e
      , {transitionType: j="fade"} = e
      , {transitionDuration: P=.5} = e
      , {transitionEasing: T="ease"} = e
      , {stepperTheme: O=j === "horizontal" ? "standard" : "semiTransparent"} = e
      , {altText: D=""} = e
      , {hideInactiveSlidesFromScreenReader: I=!1} = e
      , {captionComponent: ee=_o} = e
      , {buttonComponent: K=K_} = e
      , {activeIndex: ne=0} = e
      , R = !1
      , se = "0px"
      , F = "0px"
      , ue = 0
      , fe = 0
      , Y = 0
      , L = "auto";
    function re(H) {
        const ke = H.querySelectorAll(".g-slide")
          , _e = () => {
            setTimeout(function() {
                const Ie = [...ke].map(Xe => Xe.getBoundingClientRect());
                if (Ie.length) {
                    const Xe = Math.max(...Ie.map(Me => Me.height));
                    t(32, L = `${Xe}px`)
                }
            }, 0)
        }
        ;
        H.addEventListener("load", _e, !0),
        H.addEventListener("loadedmetadata", _e, !0);
        const Ke = new ResizeObserver(_e);
        return Ke.observe(H),
        {
            destroy() {
                Ke.disconnect()
            }
        }
    }
    const ce = () => {
        h && f.length && (t(0, f = f.map(H => {
            const ke = !!H.active;
            let _e = H.index === ne;
            return H.active = _e,
            !_e && ke ? (A(H),
            H.previousActive = !0) : H.previousActive = !1,
            _e && !ke && k(H),
            H
        }
        )),
        j === "horizontal" ? (t(31, F = "0px"),
        t(30, se = `${Math.round(-1 * (fe * ne))}px`)) : j === "vertical" ? (t(30, se = "0px"),
        t(31, F = `${Math.round(-1 * (Y * ne))}px`)) : (t(30, se = "0px"),
        t(31, F = "0px")))
    }
    ;
    let Ce = !1, Ge;
    vt(function() {
        return t(12, R = !0),
        b && (Ge = setInterval( () => {
            ne + 1 < f.length ? t(1, ne = ne + 1) : t(1, ne = 0)
        }
        , b)),
        () => {
            Ge && clearInterval(Ge)
        }
    });
    function Se() {
        fe = this.clientWidth,
        Y = this.clientHeight,
        t(13, fe),
        t(14, Y)
    }
    function ye(H) {
        ne = H,
        t(1, ne)
    }
    function V(H) {
        ne = H,
        t(1, ne)
    }
    function Be() {
        ue = this.clientWidth,
        t(11, ue)
    }
    return r.$$set = H => {
        "items"in H && t(0, f = H.items),
        "id"in H && t(21, u = H.id),
        "stepper"in H && t(2, c = H.stepper),
        "stepperClick"in H && t(3, d = H.stepperClick),
        "enabled"in H && t(22, h = H.enabled),
        "lazy"in H && t(23, _ = H.lazy),
        "autoAdvanceTime"in H && t(24, b = H.autoAdvanceTime),
        "showButtons"in H && t(4, m = H.showButtons),
        "processItem"in H && t(25, v = H.processItem),
        "onItemActive"in H && t(26, k = H.onItemActive),
        "onItemBlur"in H && t(27, A = H.onItemBlur),
        "transitionType"in H && t(5, j = H.transitionType),
        "transitionDuration"in H && t(28, P = H.transitionDuration),
        "transitionEasing"in H && t(29, T = H.transitionEasing),
        "stepperTheme"in H && t(6, O = H.stepperTheme),
        "altText"in H && t(7, D = H.altText),
        "hideInactiveSlidesFromScreenReader"in H && t(8, I = H.hideInactiveSlidesFromScreenReader),
        "captionComponent"in H && t(9, ee = H.captionComponent),
        "buttonComponent"in H && t(10, K = H.buttonComponent),
        "activeIndex"in H && t(1, ne = H.activeIndex)
    }
    ,
    r.$$.update = () => {
        r.$$.dirty[0] & 44040193 && t(0, f = f.map( (H, ke) => (H = Object.assign({}, vs(u, ke), H),
        H.props = H.props || {},
        H.caption = typeof H.caption == "string" ? H.caption : H.text ? H.text : "",
        H.lazy = typeof H.lazy == "boolean" ? H.lazy : _,
        v(H),
        H))),
        r.$$.dirty[0] & 2 && ce(),
        r.$$.dirty[0] & 20 && t(19, n = m || c),
        r.$$.dirty[0] & 32 && t(18, s = j === "horizontal" ? "bottom" : "right"),
        r.$$.dirty[0] & 2048 | r.$$.dirty[1] & 4 && t(15, Ce = ue + 1 >= Math.round(o)),
        r.$$.dirty[0] & 1879048192 | r.$$.dirty[1] & 3 && t(17, l = [`--g-slideshow-boundheight: ${L}`, `--g-slideshow-transition-duration: ${P}s`, `--g-slideshow-transition-easing: ${T}`, `--g-slideshow-transform-x: ${se}`, `--g-slideshow-transform-y: ${F}`].join(";")),
        r.$$.dirty[0] & 128 && t(16, i = D ? "group" : "")
    }
    ,
    [f, ne, c, d, m, j, O, D, I, ee, K, ue, R, fe, Y, Ce, i, l, s, n, re, u, h, _, b, v, k, A, P, T, se, F, L, o, Se, ye, V, Be]
}
class On extends x {
    constructor(e) {
        super(),
        $(this, e, X_, Z_, Z, {
            items: 0,
            id: 21,
            stepper: 2,
            stepperClick: 3,
            enabled: 22,
            lazy: 23,
            autoAdvanceTime: 24,
            showButtons: 4,
            processItem: 25,
            onItemActive: 26,
            onItemBlur: 27,
            transitionType: 5,
            transitionDuration: 28,
            transitionEasing: 29,
            stepperTheme: 6,
            altText: 7,
            hideInactiveSlidesFromScreenReader: 8,
            captionComponent: 9,
            buttonComponent: 10,
            activeIndex: 1
        }, null, [-1, -1])
    }
}
function ni(r) {
    let e, t;
    return {
        c() {
            e = new Re(!1),
            t = te(),
            this.h()
        },
        l(n) {
            e = Le(n, !1),
            t = te(),
            this.h()
        },
        h() {
            e.a = t
        },
        m(n, s) {
            e.m(r[0], n, s),
            M(n, t, s)
        },
        p(n, s) {
            s & 1 && e.p(n[0])
        },
        d(n) {
            n && (p(t),
            e.d())
        }
    }
}
function ri(r) {
    let e, t;
    return {
        c() {
            e = new Re(!1),
            t = te(),
            this.h()
        },
        l(n) {
            e = Le(n, !1),
            t = te(),
            this.h()
        },
        h() {
            e.a = t
        },
        m(n, s) {
            e.m(r[2], n, s),
            M(n, t, s)
        },
        p(n, s) {
            s & 4 && e.p(n[2])
        },
        d(n) {
            n && (p(t),
            e.d())
        }
    }
}
function Q_(r) {
    let e, t, n, s, l = r[0] && ni(r), i = r[2] && ri(r);
    return {
        c() {
            e = N("div"),
            l && l.c(),
            t = Q(),
            n = new Re(!1),
            s = Q(),
            i && i.c(),
            this.h()
        },
        l(o) {
            e = B(o, "DIV", {});
            var a = S(e);
            l && l.l(a),
            t = X(a),
            n = Le(a, !1),
            s = X(a),
            i && i.l(a),
            a.forEach(p),
            this.h()
        },
        h() {
            n.a = s
        },
        m(o, a) {
            M(o, e, a),
            l && l.m(e, null),
            E(e, t),
            n.m(r[1], e),
            E(e, s),
            i && i.m(e, null),
            r[4](e)
        },
        p(o, [a]) {
            o[0] ? l ? l.p(o, a) : (l = ni(o),
            l.c(),
            l.m(e, t)) : l && (l.d(1),
            l = null),
            a & 2 && n.p(o[1]),
            o[2] ? i ? i.p(o, a) : (i = ri(o),
            i.c(),
            i.m(e, null)) : i && (i.d(1),
            i = null)
        },
        i: q,
        o: q,
        d(o) {
            o && p(e),
            l && l.d(),
            i && i.d(),
            r[4](null)
        }
    }
}
function J_(r, e, t) {
    let {css: n} = e, {html: s} = e, {js: l} = e, i;
    ts( () => {
        Array.from(i.querySelectorAll("script")).forEach(a => {
            const f = document.createElement("script");
            Array.from(a.attributes).forEach(c => {
                f.setAttribute(c.name, c.value)
            }
            );
            const u = document.createTextNode(a.innerHTML);
            f.appendChild(u),
            a.parentNode.replaceChild(f, a)
        }
        )
    }
    );
    function o(a) {
        me[a ? "unshift" : "push"]( () => {
            i = a,
            t(3, i)
        }
        )
    }
    return r.$$set = a => {
        "css"in a && t(0, n = a.css),
        "html"in a && t(1, s = a.html),
        "js"in a && t(2, l = a.js)
    }
    ,
    [n, s, l, i, o]
}
let x_ = class extends x {
    constructor(e) {
        super(),
        $(this, e, J_, Q_, Z, {
            css: 0,
            html: 1,
            js: 2
        })
    }
}
;
const $_ = nr([]);
function si(r) {
    let e, t;
    return {
        c() {
            e = N("script"),
            this.h()
        },
        l(n) {
            e = B(n, "SCRIPT", {
                src: !0
            });
            var s = S(e);
            s.forEach(p),
            this.h()
        },
        h() {
            gt(e.src, t = r[0]) || g(e, "src", t)
        },
        m(n, s) {
            M(n, e, s)
        },
        p(n, s) {
            s & 1 && !gt(e.src, t = n[0]) && g(e, "src", t)
        },
        d(n) {
            n && p(e)
        }
    }
}
function li(r) {
    let e, t;
    return {
        c() {
            e = N("script"),
            this.h()
        },
        l(n) {
            e = B(n, "SCRIPT", {
                src: !0
            });
            var s = S(e);
            s.forEach(p),
            this.h()
        },
        h() {
            gt(e.src, t = r[0]) || g(e, "src", t)
        },
        m(n, s) {
            M(n, e, s)
        },
        p(n, s) {
            s & 1 && !gt(e.src, t = n[0]) && g(e, "src", t)
        },
        d(n) {
            n && p(e)
        }
    }
}
function e3(r) {
    let e, t, n, s = r[2] && !r[1] && si(r), l = r[2] && r[1] && li(r);
    return {
        c() {
            s && s.c(),
            e = te(),
            t = Q(),
            l && l.c(),
            n = te()
        },
        l(i) {
            const o = ja("svelte-vx0mfj", document.head);
            s && s.l(o),
            e = te(),
            o.forEach(p),
            t = X(i),
            l && l.l(i),
            n = te()
        },
        m(i, o) {
            s && s.m(document.head, null),
            E(document.head, e),
            M(i, t, o),
            l && l.m(i, o),
            M(i, n, o)
        },
        p(i, [o]) {
            i[2] && !i[1] ? s ? s.p(i, o) : (s = si(i),
            s.c(),
            s.m(e.parentNode, e)) : s && (s.d(1),
            s = null),
            i[2] && i[1] ? l ? l.p(i, o) : (l = li(i),
            l.c(),
            l.m(n.parentNode, n)) : l && (l.d(1),
            l = null)
        },
        i: q,
        o: q,
        d(i) {
            i && (p(t),
            p(n)),
            s && s.d(i),
            p(e),
            l && l.d(i)
        }
    }
}
function t3(r, e, t) {
    let n;
    Ee(r, $_, o => t(3, n = o));
    let {src: s} = e
      , {inline: l=!1} = e;
    const i = !n.includes(s);
    return n.push(s),
    es( () => {
        n.splice(n.indexOf(s), 1)
    }
    ),
    r.$$set = o => {
        "src"in o && t(0, s = o.src),
        "inline"in o && t(1, l = o.inline)
    }
    ,
    [s, l, i]
}
class n3 extends x {
    constructor(e) {
        super(),
        $(this, e, t3, e3, Z, {
            src: 0,
            inline: 1
        })
    }
}
function r3(r) {
    let e, t, n, s;
    return e = new n3({
        props: {
            src: s3,
            inline: !0
        }
    }),
    {
        c() {
            W(e.$$.fragment),
            t = Q(),
            n = N("div"),
            this.h()
        },
        l(l) {
            U(e.$$.fragment, l),
            t = X(l),
            n = B(l, "DIV", {
                class: !0
            }),
            S(n).forEach(p),
            this.h()
        },
        h() {
            g(n, "class", "g-vhs-video svelte-rohdkl"),
            J(n, "player-ready", r[3]),
            J(n, "player-playing", r[0]),
            J(n, "player-active", r[2]),
            J(n, "player-visible", r[4]),
            J(n, "player-fullscreen", r[1])
        },
        m(l, i) {
            z(e, l, i),
            M(l, t, i),
            M(l, n, i),
            r[27](n),
            s = !0
        },
        p(l, i) {
            (!s || i[0] & 8) && J(n, "player-ready", l[3]),
            (!s || i[0] & 1) && J(n, "player-playing", l[0]),
            (!s || i[0] & 4) && J(n, "player-active", l[2]),
            (!s || i[0] & 16) && J(n, "player-visible", l[4]),
            (!s || i[0] & 2) && J(n, "player-fullscreen", l[1])
        },
        i(l) {
            s || (w(e.$$.fragment, l),
            s = !0)
        },
        o(l) {
            y(e.$$.fragment, l),
            s = !1
        },
        d(l) {
            l && (p(t),
            p(n)),
            G(e, l),
            r[27](null)
        }
    }
}
const s3 = "https://static01.nyt.com/video-static/vhs3/vhs.min.js";
function l3(r) {
    return r && r.match(/^[0-9]+$/) != null
}
function i3(r) {
    return r && r.match(/\.(mp3|wav|ogg|flac|aac|m4a)$/) != null
}
function o3(r, e, t) {
    const n = $r();
    let {vhs_options: s={}} = e, l, i = !1, o, a = !0, {player: f=void 0} = e, {src: u=""} = e, c = u, {sources: d=[]} = e, {currentTime: h=0} = e, _ = h, {volume: b=1} = e, m = b, {autoplay: v=!1} = e, {playing: k=!1} = e, A = k, {muted: j} = e, {is_muted: P=j} = e, {fullscreen: T=!1} = e, {is_fullscreen: O=T} = e, {mediaType: D="video"} = e, {fullbleed: I=!1} = e, {loop: ee=!1} = e, {poster: K=""} = e, {ratio: ne="16:9"} = e, {ads: R=!1} = e, {controls: se=!0} = e, {headline: F=""} = e, {duration: ue} = e, {allowMultiplePlayers: fe=!1} = e, {isEnded: Y=!1} = e, {isActive: L=!1} = e, {isReady: re=!1} = e, {is_visible: ce=!1} = e;
    ts( () => {
        re && (c !== u && (f.load(u, k),
        c = u),
        A !== k && (A = k,
        k ? f.play() : f.pause()),
        m !== b && (f.setVolume(b),
        m = b),
        P !== j && (f.mute(j),
        t(11, P = j)),
        _ !== h && f.seek(h),
        O !== T && (f.fullscreen(T),
        t(12, O = T)))
    }
    ),
    vt( () => (a = window.location.host === "www.nytimes.com",
    setTimeout( () => {
        if (l = window.VHS,
        !l) {
            console.error("VHS library not loaded before VHS video component.");
            return
        }
        fe && (l.config.allowMultiplePlayers = !0),
        F || (console.warn('VHS Component: property "headline" is required for tracking'),
        D === "audio" ? t(14, F = "Graphics Audio " + u) : t(14, F = "Graphics Video " + u)),
        D === "audio" ? t(7, f = Ce()) : t(7, f = Ge()),
        Se(f)
    }
    , 500),
    () => {
        var V;
        (V = f == null ? void 0 : f.destroy) == null || V.call(f)
    }
    ));
    function Ce() {
        const V = Object.assign({
            id: 1234,
            container: o,
            src: u,
            headline: F,
            disableAudioDeeplinkInApps: !0,
            ads: !1,
            width: "100%",
            height: "100%",
            analytics: a,
            audioControls: {
                version: 2,
                suppressDurationPlaceholder: !0
            }
        }, s);
        return l.audio(V)
    }
    function Ge() {
        const V = Object.assign({
            id: i ? "nonscoop_video" : u,
            nytd: i ? "nonscoop_video" : u,
            headline: F,
            container: o,
            api: !i,
            controls: se,
            autoplay: v,
            preload: "auto",
            ratio: I ? "none" : ne,
            width: "100%",
            height: "100%",
            embeddedOnly: !0,
            posterUrl: K,
            muted: v || j,
            ads: R,
            env: "production",
            dataEnv: "production",
            captionsDefaultOn: !0,
            type: "interactive",
            sources: i ? d : null,
            cover: !1,
            pauseOtherPlayers: !0,
            loop: ee,
            copySlate: !1,
            endSlate: !1,
            sharetools: !1,
            tagx: !1,
            viewabilityTracker: !1,
            viewportIntersectionObserver: !0,
            comscore: a && !i,
            analytics: a
        }, s);
        return l(V)
    }
    function Se(V) {
        V.on(V.events.READY, () => {
            t(3, re = !0),
            n("ready", {
                player: V
            }),
            V.on(V.events.PLAY, () => {
                A = t(0, k = !0),
                t(16, Y = !1),
                n("play", {
                    player: V
                })
            }
            ),
            V.on(V.events.PROGRESS, () => {
                var Be;
                t(15, ue = (Be = V == null ? void 0 : V.video) == null ? void 0 : Be.duration),
                n("progress", {
                    player: V
                })
            }
            ),
            V.on(V.events.PAUSE, () => {
                A = t(0, k = !1),
                n("pause", {
                    player: V
                })
            }
            ),
            V.on(V.events.ACTIVE, () => {
                t(2, L = !0),
                n("active", {
                    player: V
                })
            }
            ),
            V.on(V.events.IDLE, () => {
                t(2, L = !1),
                n("idle", {
                    player: V
                })
            }
            ),
            V.on(V.events.ENDED, () => {
                t(16, Y = !0),
                n("ended", {
                    player: V
                })
            }
            ),
            V.on(V.events.MUTE, () => {
                t(11, P = t(10, j = V.isMuted())),
                n("mute", {
                    player: V
                })
            }
            ),
            V.on(V.events.VOLUME_CHANGE, () => {
                m = t(9, b = V.getVolume()),
                n("volumechange", {
                    player: V
                })
            }
            ),
            V.on(V.events.TIME_UPDATE, () => {
                _ = t(8, h = V.getCurrentTime()),
                n("timeupdate", {
                    player: V
                })
            }
            ),
            V.on(V.events.GO_FULLSCREEN, () => {
                t(12, O = t(1, T = !0)),
                n("gofullscreen", {
                    player: V
                })
            }
            ),
            V.on(V.events.EXIT_FULLSCREEN, () => {
                t(12, O = t(1, T = !1)),
                n("exitfullscreen", {
                    player: V
                })
            }
            ),
            V.on(V.events.IN_VIEWPORT, () => {
                n("inviewport", {
                    player: V
                }),
                t(4, ce = !0)
            }
            ),
            V.on(V.events.OUT_VIEWPORT, () => {
                n("outviewport", {
                    player: V
                }),
                t(4, ce = !1)
            }
            ),
            V.on(V.events.PLAYER_SIZE_CHANGE, () => {
                n("resize", {
                    player: V
                })
            }
            )
        }
        )
    }
    function ye(V) {
        me[V ? "unshift" : "push"]( () => {
            o = V,
            t(5, o)
        }
        )
    }
    return r.$$set = V => {
        "vhs_options"in V && t(17, s = V.vhs_options),
        "player"in V && t(7, f = V.player),
        "src"in V && t(18, u = V.src),
        "sources"in V && t(6, d = V.sources),
        "currentTime"in V && t(8, h = V.currentTime),
        "volume"in V && t(9, b = V.volume),
        "autoplay"in V && t(19, v = V.autoplay),
        "playing"in V && t(0, k = V.playing),
        "muted"in V && t(10, j = V.muted),
        "is_muted"in V && t(11, P = V.is_muted),
        "fullscreen"in V && t(1, T = V.fullscreen),
        "is_fullscreen"in V && t(12, O = V.is_fullscreen),
        "mediaType"in V && t(13, D = V.mediaType),
        "fullbleed"in V && t(20, I = V.fullbleed),
        "loop"in V && t(21, ee = V.loop),
        "poster"in V && t(22, K = V.poster),
        "ratio"in V && t(23, ne = V.ratio),
        "ads"in V && t(24, R = V.ads),
        "controls"in V && t(25, se = V.controls),
        "headline"in V && t(14, F = V.headline),
        "duration"in V && t(15, ue = V.duration),
        "allowMultiplePlayers"in V && t(26, fe = V.allowMultiplePlayers),
        "isEnded"in V && t(16, Y = V.isEnded),
        "isActive"in V && t(2, L = V.isActive),
        "isReady"in V && t(3, re = V.isReady),
        "is_visible"in V && t(4, ce = V.is_visible)
    }
    ,
    r.$$.update = () => {
        r.$$.dirty[0] & 262208 && u && !l3(u) && !(d != null && d.length) && t(6, d = [{
            height: 360,
            url: u
        }]),
        r.$$.dirty[0] & 262144 && u && i3(u) && t(13, D = "audio"),
        r.$$.dirty[0] & 64 && (i = !!(d != null && d.length))
    }
    ,
    [k, T, L, re, ce, o, d, f, h, b, j, P, O, D, F, ue, Y, s, u, v, I, ee, K, ne, R, se, fe, ye]
}
class Ta extends x {
    constructor(e) {
        super(),
        $(this, e, o3, r3, Z, {
            vhs_options: 17,
            player: 7,
            src: 18,
            sources: 6,
            currentTime: 8,
            volume: 9,
            autoplay: 19,
            playing: 0,
            muted: 10,
            is_muted: 11,
            fullscreen: 1,
            is_fullscreen: 12,
            mediaType: 13,
            fullbleed: 20,
            loop: 21,
            poster: 22,
            ratio: 23,
            ads: 24,
            controls: 25,
            headline: 14,
            duration: 15,
            allowMultiplePlayers: 26,
            isEnded: 16,
            isActive: 2,
            isReady: 3,
            is_visible: 4
        }, null, [-1, -1])
    }
}
const Zt = {
    localImage: "image",
    remoteImage: "image",
    localResponsiveImage: "image",
    scoopImage: "image",
    scoopSlideshow: "slideshow",
    scoopVideo: "video",
    videotape: "video",
    localVideo: "video",
    scoopAudio: "audio",
    remoteAudio: "audio",
    graphic: "graphic",
    scoopEmbeddedInteractive: "embed"
}
  , Ea = {
    localImage: ["Image"],
    remoteImage: ["Image"],
    localResponsiveImage: ["ImageLoader"],
    scoopImage: ["ImageLoader"],
    scoopSlideshow: ["Slideshow"],
    localVideo: ["VideoPlayer", "Video"],
    scoopVideo: ["VHS", "VideoPlayer", "Video"],
    videotape: ["VHS", "VideoPlayer", "Video"],
    graphic: ["Graphic"],
    scoopAudio: ["VHS"],
    remoteAudio: ["VHS"],
    scoopEmbeddedInteractive: ["Graphic"]
}
  , a3 = new Set(Object.keys(Zt))
  , f3 = Array.from(a3).reduce( (r, e) => (Ea[e].forEach(n => r.add(n)),
r), new Set)
  , u3 = new Set(Object.values(Zt))
  , c3 = Array.from(u3).reduce( (r, e) => {
    const t = new Set;
    Object.entries(Zt).forEach( ([s,l]) => {
        l === e && t.add(s)
    }
    );
    const n = new Set;
    return Object.entries(Ea).forEach( ([s,l]) => {
        t.has(s) && l.forEach(i => n.add(i))
    }
    ),
    r[e] = Array.from(n),
    r
}
, {});
function d3(r) {
    let e = r[21], t, n = r[21] && Lr(r);
    return {
        c() {
            n && n.c(),
            t = te()
        },
        l(s) {
            n && n.l(s),
            t = te()
        },
        m(s, l) {
            n && n.m(s, l),
            M(s, t, l)
        },
        p(s, l) {
            s[21] ? e ? Z(e, s[21]) ? (n.d(1),
            n = Lr(s),
            e = s[21],
            n.c(),
            n.m(t.parentNode, t)) : n.p(s, l) : (n = Lr(s),
            e = s[21],
            n.c(),
            n.m(t.parentNode, t)) : e && (n.d(1),
            n = null,
            e = s[21])
        },
        i: q,
        o(s) {
            y(n, s)
        },
        d(s) {
            s && p(t),
            n && n.d(s)
        }
    }
}
function h3(r) {
    let e, t;
    return e = new ln({
        props: {
            message: r[20]
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, s) {
            const l = {};
            s & 1048576 && (l.message = n[20]),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function ii(r) {
    let e, t, n = r[0].mediaComponent + "", s, l, i = r[0].assetType + "", o;
    return {
        c() {
            e = N("p"),
            t = ae("mediaComponent: "),
            s = ae(n),
            l = ae(" | Type: "),
            o = ae(i),
            this.h()
        },
        l(a) {
            e = B(a, "P", {
                class: !0
            });
            var f = S(e);
            t = oe(f, "mediaComponent: "),
            s = oe(f, n),
            l = oe(f, " | Type: "),
            o = oe(f, i),
            f.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", "g-media-debug svelte-1yaako2")
        },
        m(a, f) {
            M(a, e, f),
            E(e, t),
            E(e, s),
            E(e, l),
            E(e, o)
        },
        p(a, f) {
            f & 1 && n !== (n = a[0].mediaComponent + "") && pe(s, n),
            f & 1 && i !== (i = a[0].assetType + "") && pe(o, i)
        },
        d(a) {
            a && p(e)
        }
    }
}
function m3(r) {
    let e, t;
    return e = new ln({
        props: {
            $$slots: {
                default: [T3]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, s) {
            const l = {};
            s & 67108865 && (l.$$scope = {
                dirty: s,
                ctx: n
            }),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function g3(r) {
    let e, t;
    const n = [Gl(r[0])];
    let s = {};
    for (let l = 0; l < n.length; l += 1)
        s = at(s, n[l]);
    return e = new On({
        props: s
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(l) {
            U(e.$$.fragment, l)
        },
        m(l, i) {
            z(e, l, i),
            t = !0
        },
        p(l, i) {
            const o = i & 1 ? et(n, [ot(Gl(l[0]))]) : {};
            e.$set(o)
        },
        i(l) {
            t || (w(e.$$.fragment, l),
            t = !0)
        },
        o(l) {
            y(e.$$.fragment, l),
            t = !1
        },
        d(l) {
            G(e, l)
        }
    }
}
function p3(r) {
    let e, t;
    return e = new ya({
        props: {
            altText: r[2],
            lazy: r[1],
            renditions: yn(r[0])
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, s) {
            const l = {};
            s & 4 && (l.altText = n[2]),
            s & 2 && (l.lazy = n[1]),
            s & 1 && (l.renditions = yn(n[0])),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function _3(r) {
    let e, t;
    return e = new ya({
        props: {
            altText: r[2],
            lazy: r[1],
            renditions: r[0].assetType === "scoopImage" ? yn(r[0], r[3]) : Vl(r[0])
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, s) {
            const l = {};
            s & 4 && (l.altText = n[2]),
            s & 2 && (l.lazy = n[1]),
            s & 9 && (l.renditions = n[0].assetType === "scoopImage" ? yn(n[0], n[3]) : Vl(n[0])),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function b3(r) {
    let e, t;
    return e = new ys({
        props: {
            altText: r[2],
            lazy: r[1],
            src: Rl(r[0])
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, s) {
            const l = {};
            s & 4 && (l.altText = n[2]),
            s & 2 && (l.lazy = n[1]),
            s & 1 && (l.src = Rl(n[0])),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function v3(r) {
    let e, t, n, s;
    const l = [I3, E3]
      , i = [];
    function o(a, f) {
        return a[0].assetType === "scoopAudio" ? 0 : 1
    }
    return e = o(r),
    t = i[e] = l[e](r),
    {
        c() {
            t.c(),
            n = te()
        },
        l(a) {
            t.l(a),
            n = te()
        },
        m(a, f) {
            i[e].m(a, f),
            M(a, n, f),
            s = !0
        },
        p(a, f) {
            let u = e;
            e = o(a),
            e === u ? i[e].p(a, f) : (le(),
            y(i[u], 1, 1, () => {
                i[u] = null
            }
            ),
            ie(),
            t = i[e],
            t ? t.p(a, f) : (t = i[e] = l[e](a),
            t.c()),
            w(t, 1),
            t.m(n.parentNode, n))
        },
        i(a) {
            s || (w(t),
            s = !0)
        },
        o(a) {
            y(t),
            s = !1
        },
        d(a) {
            a && p(n),
            i[e].d(a)
        }
    }
}
function w3(r) {
    let e, t;
    return e = new va({
        props: {
            src: r[0].assetType === "localVideo" ? Qn(r[0]) : Ut(r[0].assetType === "scoopVideo" ? Jn(r[0]) : kn(r[0]), r[16]).url,
            poster: r[4] || r[0].assetType === "scoopVideo" ? r[22](xn, r[16]) : r[22]($n, r[16]),
            autoplay: r[5],
            controls: r[6],
            loop: r[7],
            muted: r[8],
            playsinline: r[9],
            preload: r[10],
            altText: r[2]
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, s) {
            const l = {};
            s & 65537 && (l.src = n[0].assetType === "localVideo" ? Qn(n[0]) : Ut(n[0].assetType === "scoopVideo" ? Jn(n[0]) : kn(n[0]), n[16]).url),
            s & 65553 && (l.poster = n[4] || n[0].assetType === "scoopVideo" ? n[22](xn, n[16]) : n[22]($n, n[16])),
            s & 32 && (l.autoplay = n[5]),
            s & 64 && (l.controls = n[6]),
            s & 128 && (l.loop = n[7]),
            s & 256 && (l.muted = n[8]),
            s & 512 && (l.playsinline = n[9]),
            s & 1024 && (l.preload = n[10]),
            s & 4 && (l.altText = n[2]),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function y3(r) {
    let e, t;
    return e = new M_({
        props: {
            renditions: r[0].assetType === "scoopVideo" ? Jn(r[0]) : r[0].assetType === "videotape" ? kn(r[0]) : [],
            posters: r[0].assetType === "scoopVideo" ? xn(r[0]) : r[0].assetType === "videotape" ? $n(r[0]) : [],
            src: r[0].assetType === "localVideo" ? Qn(r[0]) : "",
            poster: r[4],
            autoplay: r[5],
            loop: r[7],
            muted: r[8],
            playsinline: r[9],
            preload: r[10],
            altText: r[2],
            controls: r[6],
            ratio: r[11],
            videoPlayerOptions: r[12]
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, s) {
            const l = {};
            s & 1 && (l.renditions = n[0].assetType === "scoopVideo" ? Jn(n[0]) : n[0].assetType === "videotape" ? kn(n[0]) : []),
            s & 1 && (l.posters = n[0].assetType === "scoopVideo" ? xn(n[0]) : n[0].assetType === "videotape" ? $n(n[0]) : []),
            s & 1 && (l.src = n[0].assetType === "localVideo" ? Qn(n[0]) : ""),
            s & 16 && (l.poster = n[4]),
            s & 32 && (l.autoplay = n[5]),
            s & 128 && (l.loop = n[7]),
            s & 256 && (l.muted = n[8]),
            s & 512 && (l.playsinline = n[9]),
            s & 1024 && (l.preload = n[10]),
            s & 4 && (l.altText = n[2]),
            s & 64 && (l.controls = n[6]),
            s & 2048 && (l.ratio = n[11]),
            s & 4096 && (l.videoPlayerOptions = n[12]),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function k3(r) {
    var n, s, l;
    let e, t;
    return e = new x_({
        props: {
            html: (n = r[0]) == null ? void 0 : n.html,
            css: (s = r[0]) == null ? void 0 : s.css,
            js: (l = r[0]) == null ? void 0 : l.js
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(i) {
            U(e.$$.fragment, i)
        },
        m(i, o) {
            z(e, i, o),
            t = !0
        },
        p(i, o) {
            var f, u, c;
            const a = {};
            o & 1 && (a.html = (f = i[0]) == null ? void 0 : f.html),
            o & 1 && (a.css = (u = i[0]) == null ? void 0 : u.css),
            o & 1 && (a.js = (c = i[0]) == null ? void 0 : c.js),
            e.$set(a)
        },
        i(i) {
            t || (w(e.$$.fragment, i),
            t = !0)
        },
        o(i) {
            y(e.$$.fragment, i),
            t = !1
        },
        d(i) {
            G(e, i)
        }
    }
}
function T3(r) {
    let e, t = r[0].assetType + "", n;
    return {
        c() {
            e = ae("No media middleware available for "),
            n = ae(t)
        },
        l(s) {
            e = oe(s, "No media middleware available for "),
            n = oe(s, t)
        },
        m(s, l) {
            M(s, e, l),
            M(s, n, l)
        },
        p(s, l) {
            l & 1 && t !== (t = s[0].assetType + "") && pe(n, t)
        },
        d(s) {
            s && (p(e),
            p(n))
        }
    }
}
function E3(r) {
    let e, t;
    return e = new Ta({
        props: {
            src: r[0].assetSlug,
            poster: r[4],
            autoplay: r[5],
            controls: r[6],
            loop: r[7],
            muted: r[8],
            ratio: r[11],
            ads: r[13],
            vhs_options: r[14]
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, s) {
            const l = {};
            s & 1 && (l.src = n[0].assetSlug),
            s & 16 && (l.poster = n[4]),
            s & 32 && (l.autoplay = n[5]),
            s & 64 && (l.controls = n[6]),
            s & 128 && (l.loop = n[7]),
            s & 256 && (l.muted = n[8]),
            s & 2048 && (l.ratio = n[11]),
            s & 8192 && (l.ads = n[13]),
            s & 16384 && (l.vhs_options = n[14]),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function I3(r) {
    let e, t;
    return e = new Ta({
        props: {
            src: Ll(r[0]),
            autoplay: r[5],
            controls: r[6],
            loop: r[7],
            muted: r[8],
            vhs_options: r[14]
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, s) {
            const l = {};
            s & 1 && (l.src = Ll(n[0])),
            s & 32 && (l.autoplay = n[5]),
            s & 64 && (l.controls = n[6]),
            s & 128 && (l.loop = n[7]),
            s & 256 && (l.muted = n[8]),
            s & 16384 && (l.vhs_options = n[14]),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function Lr(r) {
    let e, t, n, s, l, i, o, a, f, u = r[15] && ii(r);
    const c = [k3, y3, w3, v3, b3, _3, p3, g3, m3]
      , d = [];
    function h(m, v) {
        return m[0].mediaComponent === "Graphic" ? 0 : m[0].mediaComponent === "VideoPlayer" ? 1 : m[0].mediaComponent === "Video" ? 2 : m[0].mediaComponent === "VHS" ? 3 : m[0].mediaComponent === "Image" ? 4 : m[0].mediaComponent === "ImageLoader" ? 5 : m[0].assetType === "scoopImage" ? 6 : m[0].assetType === "scoopSlideshow" ? 7 : 8
    }
    n = h(r),
    s = d[n] = c[n](r);
    let _ = [{
        class: "g-media"
    }, {
        role: l = r[17] || void 0
    }, {
        "aria-label": i = r[18] || void 0
    }, {
        "aria-hidden": o = r[19] || void 0
    }]
      , b = {};
    for (let m = 0; m < _.length; m += 1)
        b = at(b, _[m]);
    return {
        c() {
            e = N(r[21]),
            u && u.c(),
            t = Q(),
            s.c(),
            this.h()
        },
        l(m) {
            e = B(m, (r[21] || "null").toUpperCase(), {
                class: !0,
                role: !0,
                "aria-label": !0,
                "aria-hidden": !0
            });
            var v = S(e);
            u && u.l(v),
            t = X(v),
            s.l(v),
            v.forEach(p),
            this.h()
        },
        h() {
            Gn(r[21])(e, b),
            xe( () => r[25].call(e)),
            J(e, "g-debug", r[15])
        },
        m(m, v) {
            M(m, e, v),
            u && u.m(e, null),
            E(e, t),
            d[n].m(e, null),
            a = Dt(e, r[25].bind(e)),
            f = !0
        },
        p(m, v) {
            m[15] ? u ? u.p(m, v) : (u = ii(m),
            u.c(),
            u.m(e, t)) : u && (u.d(1),
            u = null);
            let k = n;
            n = h(m),
            n === k ? d[n].p(m, v) : (le(),
            y(d[k], 1, 1, () => {
                d[k] = null
            }
            ),
            ie(),
            s = d[n],
            s ? s.p(m, v) : (s = d[n] = c[n](m),
            s.c()),
            w(s, 1),
            s.m(e, null)),
            Gn(m[21])(e, b = et(_, [{
                class: "g-media"
            }, (!f || v & 131072 && l !== (l = m[17] || void 0)) && {
                role: l
            }, (!f || v & 262144 && i !== (i = m[18] || void 0)) && {
                "aria-label": i
            }, (!f || v & 524288 && o !== (o = m[19] || void 0)) && {
                "aria-hidden": o
            }])),
            J(e, "g-debug", m[15])
        },
        i(m) {
            f || (w(s),
            f = !0)
        },
        o(m) {
            y(s),
            f = !1
        },
        d(m) {
            m && p(e),
            u && u.d(),
            d[n].d(),
            a()
        }
    }
}
function A3(r) {
    let e, t, n, s;
    const l = [h3, d3]
      , i = [];
    function o(a, f) {
        return a[20] ? 0 : 1
    }
    return e = o(r),
    t = i[e] = l[e](r),
    {
        c() {
            t.c(),
            n = te()
        },
        l(a) {
            t.l(a),
            n = te()
        },
        m(a, f) {
            i[e].m(a, f),
            M(a, n, f),
            s = !0
        },
        p(a, [f]) {
            let u = e;
            e = o(a),
            e === u ? i[e].p(a, f) : (le(),
            y(i[u], 1, 1, () => {
                i[u] = null
            }
            ),
            ie(),
            t = i[e],
            t ? t.p(a, f) : (t = i[e] = l[e](a),
            t.c()),
            w(t, 1),
            t.m(n.parentNode, n))
        },
        i(a) {
            s || (w(t),
            s = !0)
        },
        o(a) {
            y(t),
            s = !1
        },
        d(a) {
            a && p(n),
            i[e].d(a)
        }
    }
}
function C3(r, e, t) {
    let n, s, {media: l} = e, {lazy: i=!0} = e, {role: o="img"} = e, {altText: a=""} = e, {cropName: f=["MASTER", "MOBILE_MASTER"]} = e, {poster: u=""} = e, {autoplay: c=!1} = e, {controls: d=!1} = e, {loop: h=!1} = e, {muted: _=!1} = e, {playsinline: b=!0} = e, {preload: m="auto"} = e, {ratio: v} = e, {videoPlayerOptions: k={}} = e, {ads: A=!1} = e, {vhsOptions: j={}} = e, {expectedType: P=""} = e, {debug: T=!1} = e;
    const O = (R, se) => {
        if (u)
            return u;
        const F = R(l);
        return F.length ? Ut(F, se).url : ""
    }
    ;
    let D = 0
      , I = ""
      , ee = ""
      , K = !1;
    function ne() {
        D = this.clientWidth,
        t(16, D)
    }
    return r.$$set = R => {
        "media"in R && t(0, l = R.media),
        "lazy"in R && t(1, i = R.lazy),
        "role"in R && t(23, o = R.role),
        "altText"in R && t(2, a = R.altText),
        "cropName"in R && t(3, f = R.cropName),
        "poster"in R && t(4, u = R.poster),
        "autoplay"in R && t(5, c = R.autoplay),
        "controls"in R && t(6, d = R.controls),
        "loop"in R && t(7, h = R.loop),
        "muted"in R && t(8, _ = R.muted),
        "playsinline"in R && t(9, b = R.playsinline),
        "preload"in R && t(10, m = R.preload),
        "ratio"in R && t(11, v = R.ratio),
        "videoPlayerOptions"in R && t(12, k = R.videoPlayerOptions),
        "ads"in R && t(13, A = R.ads),
        "vhsOptions"in R && t(14, j = R.vhsOptions),
        "expectedType"in R && t(24, P = R.expectedType),
        "debug"in R && t(15, T = R.debug)
    }
    ,
    r.$$.update = () => {
        r.$$.dirty & 8388608 && t(21, n = o === "img" ? "div" : "figure"),
        r.$$.dirty & 8388613 && (l == null ? void 0 : l.assetType) === "graphic" && (a ? (t(17, I = o === "img" ? o : ""),
        t(18, ee = a)) : t(19, K = !0)),
        r.$$.dirty & 16777217 && t(20, s = function(R) {
            const se = [];
            return typeof R == "string" ? se.push(`The value of the 'media' prop (${R}) should have been auto-processed into a "media middleware" object. If using a Freebird template, this is unexpected. Alert #preview. In a custom component, see https://runway.nyt.net/preview/2023-05-23-graphic-in-component/main/index for example uses.`) : R != null && R.assetType && (R != null && R.assetSlug) && R.mediaComponent && f3.has(R.mediaComponent) && Array.isArray(R == null ? void 0 : R.assetErrors) && R.assetErrors.length === 0 || (Array.isArray(R == null ? void 0 : R.assetErrors) && se.push(...R.assetErrors),
            se.length === 0 && se.push("Unknown 'media' error")),
            R != null && R.assetType && P && Zt[R == null ? void 0 : R.assetType] != P && se.push(`Expected it to be ${zl(P)} but it is ${zl(R.assetType)}.`),
            !(R != null && R.assetType) && P && se.push(`expectedType passed as "${P}", but that slug or file type appears unable to be rendered by the these supported component/s: ${c3[P].join("")}.`),
            se.length && (R != null && R.assetSlug) && se.unshift(`<code>"media:${R.assetSlug}"</code> failed.`),
            se.length ? se.join(" ") : ""
        }(l))
    }
    ,
    [l, i, a, f, u, c, d, h, _, b, m, v, k, A, j, T, D, I, ee, K, s, n, O, o, P, ne]
}
class S3 extends x {
    constructor(e) {
        super(),
        $(this, e, C3, A3, Z, {
            media: 0,
            lazy: 1,
            role: 23,
            altText: 2,
            cropName: 3,
            poster: 4,
            autoplay: 5,
            controls: 6,
            loop: 7,
            muted: 8,
            playsinline: 9,
            preload: 10,
            ratio: 11,
            videoPlayerOptions: 12,
            ads: 13,
            vhsOptions: 14,
            expectedType: 24,
            debug: 15
        })
    }
}
function P3(r) {
    let e, t;
    return e = new S3({
        props: {
            media: r[16],
            lazy: r[15],
            role: r[14],
            altText: r[1],
            poster: r[13],
            autoplay: r[12],
            controls: r[11],
            loop: r[10],
            muted: r[9],
            playsinline: r[8],
            preload: r[7],
            videoPlayerOptions: r[5],
            cropName: r[4],
            expectedType: r[0],
            ratio: r[6],
            ads: r[3],
            vhsOptions: r[2],
            debug: r[17]
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, [s]) {
            const l = {};
            s & 65536 && (l.media = n[16]),
            s & 32768 && (l.lazy = n[15]),
            s & 16384 && (l.role = n[14]),
            s & 2 && (l.altText = n[1]),
            s & 8192 && (l.poster = n[13]),
            s & 4096 && (l.autoplay = n[12]),
            s & 2048 && (l.controls = n[11]),
            s & 1024 && (l.loop = n[10]),
            s & 512 && (l.muted = n[9]),
            s & 256 && (l.playsinline = n[8]),
            s & 128 && (l.preload = n[7]),
            s & 32 && (l.videoPlayerOptions = n[5]),
            s & 16 && (l.cropName = n[4]),
            s & 1 && (l.expectedType = n[0]),
            s & 64 && (l.ratio = n[6]),
            s & 8 && (l.ads = n[3]),
            s & 4 && (l.vhsOptions = n[2]),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function O3(r, e, t) {
    let n, s, l, i, o, a, f, u, c, d, h, _, b, m, v, k, A;
    Ee(r, Ve, O => t(19, A = O));
    let {expectedType: j=""} = e
      , {props: P={}} = e;
    const {debug: T} = P;
    return r.$$set = O => {
        "expectedType"in O && t(0, j = O.expectedType),
        "props"in O && t(18, P = O.props)
    }
    ,
    r.$$.update = () => {
        r.$$.dirty & 786432 && t(16, {media: n, lazy: s, role: l, poster: i, autoplay: o, controls: a, loop: f, muted: u, playsinline: c, preload: d, ratio: h, videoPlayerOptions: _, cropName: b, ads: m, vhsOptions: v} = ze(P, A), n, (t(15, s),
        t(18, P),
        t(19, A)), (t(14, l),
        t(18, P),
        t(19, A)), (t(13, i),
        t(18, P),
        t(19, A)), (t(12, o),
        t(18, P),
        t(19, A)), (t(11, a),
        t(18, P),
        t(19, A)), (t(10, f),
        t(18, P),
        t(19, A)), (t(9, u),
        t(18, P),
        t(19, A)), (t(8, c),
        t(18, P),
        t(19, A)), (t(7, d),
        t(18, P),
        t(19, A)), (t(6, h),
        t(18, P),
        t(19, A)), (t(5, _),
        t(18, P),
        t(19, A)), (t(4, b),
        t(18, P),
        t(19, A)), (t(3, m),
        t(18, P),
        t(19, A)), (t(2, v),
        t(18, P),
        t(19, A))),
        r.$$.dirty & 786432 && t(1, {altText: k} = ws(ze(P, A)), k)
    }
    ,
    [j, k, v, m, b, _, h, d, c, u, f, a, o, i, l, s, n, T, P, A]
}
class ur extends x {
    constructor(e) {
        super(),
        $(this, e, O3, P3, Z, {
            expectedType: 0,
            props: 18
        })
    }
}
function M3(r) {
    let e, t;
    return e = new ur({
        props: {
            props: r[1],
            expectedType: r[0]
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, s) {
            const l = {};
            s & 2 && (l.props = n[1]),
            s & 1 && (l.expectedType = n[0]),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function j3(r) {
    var n;
    let e, t;
    return e = new Qt({
        props: {
            hed: r[13],
            leadin: r[17],
            textAlign: r[16],
            headerTextAlign: r[14],
            footerTextAlign: r[15],
            source: r[19],
            caption: r[2],
            credit: r[3],
            note: r[18],
            maxWidth: r[11],
            headerMaxWidth: r[10],
            footerMaxWidth: r[9],
            marginInline: r[8],
            marginBlock: r[7],
            headerMarginInline: r[6],
            footerMarginInline: r[5],
            label: r[12],
            id: r[21],
            className: r[20],
            assetType: (n = r[4]) == null ? void 0 : n.assetType,
            $$slots: {
                default: [M3]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(s) {
            U(e.$$.fragment, s)
        },
        m(s, l) {
            z(e, s, l),
            t = !0
        },
        p(s, [l]) {
            var o;
            const i = {};
            l & 8192 && (i.hed = s[13]),
            l & 131072 && (i.leadin = s[17]),
            l & 65536 && (i.textAlign = s[16]),
            l & 16384 && (i.headerTextAlign = s[14]),
            l & 32768 && (i.footerTextAlign = s[15]),
            l & 524288 && (i.source = s[19]),
            l & 4 && (i.caption = s[2]),
            l & 8 && (i.credit = s[3]),
            l & 262144 && (i.note = s[18]),
            l & 2048 && (i.maxWidth = s[11]),
            l & 1024 && (i.headerMaxWidth = s[10]),
            l & 512 && (i.footerMaxWidth = s[9]),
            l & 256 && (i.marginInline = s[8]),
            l & 128 && (i.marginBlock = s[7]),
            l & 64 && (i.headerMarginInline = s[6]),
            l & 32 && (i.footerMarginInline = s[5]),
            l & 4096 && (i.label = s[12]),
            l & 2097152 && (i.id = s[21]),
            l & 1048576 && (i.className = s[20]),
            l & 16 && (i.assetType = (o = s[4]) == null ? void 0 : o.assetType),
            l & 8388611 && (i.$$scope = {
                dirty: l,
                ctx: s
            }),
            e.$set(i)
        },
        i(s) {
            t || (w(e.$$.fragment, s),
            t = !0)
        },
        o(s) {
            y(e.$$.fragment, s),
            t = !1
        },
        d(s) {
            G(e, s)
        }
    }
}
function B3(r, e, t) {
    let n, s, l, i, o, a, f, u, c, d, h, _, b, m, v, k, A, j, P, T, O;
    Ee(r, Ve, ee => t(22, O = ee));
    let {expectedType: D=""} = e
      , {props: I} = e;
    return r.$$set = ee => {
        "expectedType"in ee && t(0, D = ee.expectedType),
        "props"in ee && t(1, I = ee.props)
    }
    ,
    r.$$.update = () => {
        r.$$.dirty & 4194306 && t(21, {id: n, className: s, source: l, note: i, leadin: o, textAlign: a, footerTextAlign: f, headerTextAlign: u, hed: c, label: d, maxWidth: h, headerMaxWidth: _, footerMaxWidth: b, marginInline: m, marginBlock: v, headerMarginInline: k, footerMarginInline: A, media: j} = ze(I, O), n, (t(20, s),
        t(1, I),
        t(22, O)), (t(19, l),
        t(1, I),
        t(22, O)), (t(18, i),
        t(1, I),
        t(22, O)), (t(17, o),
        t(1, I),
        t(22, O)), (t(16, a),
        t(1, I),
        t(22, O)), (t(15, f),
        t(1, I),
        t(22, O)), (t(14, u),
        t(1, I),
        t(22, O)), (t(13, c),
        t(1, I),
        t(22, O)), (t(12, d),
        t(1, I),
        t(22, O)), (t(11, h),
        t(1, I),
        t(22, O)), (t(10, _),
        t(1, I),
        t(22, O)), (t(9, b),
        t(1, I),
        t(22, O)), (t(8, m),
        t(1, I),
        t(22, O)), (t(7, v),
        t(1, I),
        t(22, O)), (t(6, k),
        t(1, I),
        t(22, O)), (t(5, A),
        t(1, I),
        t(22, O)), (t(4, j),
        t(1, I),
        t(22, O))),
        r.$$.dirty & 4194306 && t(3, {credit: P, caption: T} = ws(ze(I, O)), P, (t(2, T),
        t(1, I),
        t(22, O)))
    }
    ,
    [D, I, T, P, j, A, k, v, m, b, _, h, d, c, u, f, a, o, i, l, s, n, O]
}
class Vt extends x {
    constructor(e) {
        super(),
        $(this, e, B3, j3, Z, {
            expectedType: 0,
            props: 1
        })
    }
}
function oi(r) {
    let e, t = '<img src="https://static01.nyt.com/newsgraphics/upshot/upshot-logo.svg" alt="Upshot logo" width="122" height="24"/>';
    return {
        c() {
            e = N("a"),
            e.innerHTML = t,
            this.h()
        },
        l(n) {
            e = B(n, "A", {
                href: !0,
                "data-svelte-h": !0
            }),
            It(e) !== "svelte-1dj48bt" && (e.innerHTML = t),
            this.h()
        },
        h() {
            g(e, "href", "https://www.nytimes.com/section/upshot")
        },
        m(n, s) {
            M(n, e, s)
        },
        d(n) {
            n && p(e)
        }
    }
}
function N3(r) {
    let e, t = r[0] === "upshot" && oi();
    return {
        c() {
            t && t.c(),
            e = te()
        },
        l(n) {
            t && t.l(n),
            e = te()
        },
        m(n, s) {
            t && t.m(n, s),
            M(n, e, s)
        },
        p(n, [s]) {
            n[0] === "upshot" ? t || (t = oi(),
            t.c(),
            t.m(e.parentNode, e)) : t && (t.d(1),
            t = null)
        },
        i: q,
        o: q,
        d(n) {
            n && p(e),
            t && t.d(n)
        }
    }
}
function D3(r, e, t) {
    let {logo: n} = e;
    return r.$$set = s => {
        "logo"in s && t(0, n = s.logo)
    }
    ,
    [n]
}
class L3 extends x {
    constructor(e) {
        super(),
        $(this, e, D3, N3, Z, {
            logo: 0
        })
    }
}
function R3(r) {
    let e, t;
    return {
        c() {
            e = N("p"),
            t = new Re(!1),
            this.h()
        },
        l(n) {
            e = B(n, "P", {
                class: !0
            });
            var s = S(e);
            t = Le(s, !1),
            s.forEach(p),
            this.h()
        },
        h() {
            t.a = null,
            g(e, "class", "g-kicker svelte-g6hblk")
        },
        m(n, s) {
            M(n, e, s),
            t.m(r[0], e)
        },
        p(n, [s]) {
            s & 1 && t.p(n[0])
        },
        i: q,
        o: q,
        d(n) {
            n && p(e)
        }
    }
}
function V3(r, e, t) {
    let {kicker: n} = e;
    return r.$$set = s => {
        "kicker"in s && t(0, n = s.kicker)
    }
    ,
    [n]
}
class G3 extends x {
    constructor(e) {
        super(),
        $(this, e, V3, R3, Z, {
            kicker: 0
        })
    }
}
function z3(r) {
    let e, t;
    return {
        c() {
            e = N("h1"),
            t = new Re(!1),
            this.h()
        },
        l(n) {
            e = B(n, "H1", {
                class: !0
            });
            var s = S(e);
            t = Le(s, !1),
            s.forEach(p),
            this.h()
        },
        h() {
            t.a = null,
            g(e, "class", "g-heading svelte-cug3cs")
        },
        m(n, s) {
            M(n, e, s),
            t.m(r[0], e)
        },
        p(n, [s]) {
            s & 1 && t.p(n[0])
        },
        i: q,
        o: q,
        d(n) {
            n && p(e)
        }
    }
}
function W3(r, e, t) {
    let {headline: n} = e;
    return r.$$set = s => {
        "headline"in s && t(0, n = s.headline)
    }
    ,
    [n]
}
class U3 extends x {
    constructor(e) {
        super(),
        $(this, e, W3, z3, Z, {
            headline: 0
        })
    }
}
function ai(r) {
    let e, t;
    return {
        c() {
            e = N("p"),
            t = new Re(!1),
            this.h()
        },
        l(n) {
            e = B(n, "P", {
                class: !0
            });
            var s = S(e);
            t = Le(s, !1),
            s.forEach(p),
            this.h()
        },
        h() {
            t.a = null,
            g(e, "class", "g-interactive-leadin svelte-hkb3x3")
        },
        m(n, s) {
            M(n, e, s),
            t.m(r[0], e)
        },
        p(n, s) {
            s & 1 && t.p(n[0])
        },
        d(n) {
            n && p(e)
        }
    }
}
function F3(r) {
    let e, t = r[0] && ai(r);
    return {
        c() {
            t && t.c(),
            e = te()
        },
        l(n) {
            t && t.l(n),
            e = te()
        },
        m(n, s) {
            t && t.m(n, s),
            M(n, e, s)
        },
        p(n, [s]) {
            n[0] ? t ? t.p(n, s) : (t = ai(n),
            t.c(),
            t.m(e.parentNode, e)) : t && (t.d(1),
            t = null)
        },
        i: q,
        o: q,
        d(n) {
            n && p(e),
            t && t.d(n)
        }
    }
}
function H3(r, e, t) {
    let {leadin: n} = e;
    return r.$$set = s => {
        "leadin"in s && t(0, n = s.leadin)
    }
    ,
    [n]
}
class Ia extends x {
    constructor(e) {
        super(),
        $(this, e, H3, F3, Z, {
            leadin: 0
        })
    }
}
const q3 = r => ["Por", "Fotografías por"].includes(r) ? " y " : " and ";
function K3(r) {
    let e;
    const t = r[4].default
      , n = We(t, r, r[3], null);
    return {
        c() {
            n && n.c()
        },
        l(s) {
            n && n.l(s)
        },
        m(s, l) {
            n && n.m(s, l),
            e = !0
        },
        p(s, l) {
            n && n.p && (!e || l & 8) && Ue(n, t, s, s[3], e ? He(t, s[3], l, null) : Fe(s[3]), null)
        },
        i(s) {
            e || (w(n, s),
            e = !0)
        },
        o(s) {
            y(n, s),
            e = !1
        },
        d(s) {
            n && n.d(s)
        }
    }
}
function Y3(r) {
    let e, t;
    const n = r[4].default
      , s = We(n, r, r[3], null);
    return {
        c() {
            e = N("div"),
            s && s.c(),
            this.h()
        },
        l(l) {
            e = B(l, "DIV", {
                class: !0
            });
            var i = S(e);
            s && s.l(i),
            i.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", r[1])
        },
        m(l, i) {
            M(l, e, i),
            s && s.m(e, null),
            t = !0
        },
        p(l, i) {
            s && s.p && (!t || i & 8) && Ue(s, n, l, l[3], t ? He(n, l[3], i, null) : Fe(l[3]), null),
            (!t || i & 2) && g(e, "class", l[1])
        },
        i(l) {
            t || (w(s, l),
            t = !0)
        },
        o(l) {
            y(s, l),
            t = !1
        },
        d(l) {
            l && p(e),
            s && s.d(l)
        }
    }
}
function Z3(r) {
    let e, t;
    const n = r[4].default
      , s = We(n, r, r[3], null);
    return {
        c() {
            e = N("a"),
            s && s.c(),
            this.h()
        },
        l(l) {
            e = B(l, "A", {
                href: !0,
                class: !0
            });
            var i = S(e);
            s && s.l(i),
            i.forEach(p),
            this.h()
        },
        h() {
            g(e, "href", r[0]),
            g(e, "class", r[1])
        },
        m(l, i) {
            M(l, e, i),
            s && s.m(e, null),
            t = !0
        },
        p(l, i) {
            s && s.p && (!t || i & 8) && Ue(s, n, l, l[3], t ? He(n, l[3], i, null) : Fe(l[3]), null),
            (!t || i & 1) && g(e, "href", l[0]),
            (!t || i & 2) && g(e, "class", l[1])
        },
        i(l) {
            t || (w(s, l),
            t = !0)
        },
        o(l) {
            y(s, l),
            t = !1
        },
        d(l) {
            l && p(e),
            s && s.d(l)
        }
    }
}
function X3(r) {
    let e, t, n, s;
    const l = [Z3, Y3, K3]
      , i = [];
    function o(a, f) {
        return a[0] ? 0 : a[2] ? 1 : 2
    }
    return e = o(r),
    t = i[e] = l[e](r),
    {
        c() {
            t.c(),
            n = te()
        },
        l(a) {
            t.l(a),
            n = te()
        },
        m(a, f) {
            i[e].m(a, f),
            M(a, n, f),
            s = !0
        },
        p(a, [f]) {
            let u = e;
            e = o(a),
            e === u ? i[e].p(a, f) : (le(),
            y(i[u], 1, 1, () => {
                i[u] = null
            }
            ),
            ie(),
            t = i[e],
            t ? t.p(a, f) : (t = i[e] = l[e](a),
            t.c()),
            w(t, 1),
            t.m(n.parentNode, n))
        },
        i(a) {
            s || (w(t),
            s = !0)
        },
        o(a) {
            y(t),
            s = !1
        },
        d(a) {
            a && p(n),
            i[e].d(a)
        }
    }
}
function Q3(r, e, t) {
    let {$$slots: n={}, $$scope: s} = e
      , {href: l=void 0} = e
      , {className: i=void 0} = e
      , {wrapInDiv: o=!1} = e;
    return r.$$set = a => {
        "href"in a && t(0, l = a.href),
        "className"in a && t(1, i = a.className),
        "wrapInDiv"in a && t(2, o = a.wrapInDiv),
        "$$scope"in a && t(3, s = a.$$scope)
    }
    ,
    [l, i, o, s, n]
}
class J3 extends x {
    constructor(e) {
        super(),
        $(this, e, Q3, X3, Z, {
            href: 0,
            className: 1,
            wrapInDiv: 2
        })
    }
}
function fi(r, e, t) {
    const n = r.slice();
    return n[5] = e[t],
    n[7] = t,
    n
}
function ui(r) {
    let e, t = r[1].charAt(0).toUpperCase() + r[1].slice(1) + "", n;
    return {
        c() {
            e = N("span"),
            n = ae(t),
            this.h()
        },
        l(s) {
            e = B(s, "SPAN", {
                class: !0
            });
            var l = S(e);
            n = oe(l, t),
            l.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", "g-byline-prefix")
        },
        m(s, l) {
            M(s, e, l),
            E(e, n)
        },
        p: q,
        d(s) {
            s && p(e)
        }
    }
}
function x3(r) {
    let e, t = "By", n, s, l = "The New York Times";
    return {
        c() {
            e = N("span"),
            e.textContent = t,
            n = Q(),
            s = N("span"),
            s.textContent = l,
            this.h()
        },
        l(i) {
            e = B(i, "SPAN", {
                class: !0,
                "data-svelte-h": !0
            }),
            It(e) !== "svelte-1u2ky8q" && (e.textContent = t),
            n = X(i),
            s = B(i, "SPAN", {
                itemprop: !0,
                class: !0,
                "data-svelte-h": !0
            }),
            It(s) !== "svelte-1sfkvdz" && (s.textContent = l),
            this.h()
        },
        h() {
            g(e, "class", "g-byline-prefix"),
            g(s, "itemprop", "name"),
            g(s, "class", "g-last-byline svelte-jz3n1d")
        },
        m(i, o) {
            M(i, e, o),
            M(i, n, o),
            M(i, s, o)
        },
        p: q,
        i: q,
        o: q,
        d(i) {
            i && (p(e),
            p(n),
            p(s))
        }
    }
}
function $3(r) {
    let e, t, n = Oe(r[2]), s = [];
    for (let i = 0; i < n.length; i += 1)
        s[i] = ci(fi(r, n, i));
    const l = i => y(s[i], 1, 1, () => {
        s[i] = null
    }
    );
    return {
        c() {
            for (let i = 0; i < s.length; i += 1)
                s[i].c();
            e = te()
        },
        l(i) {
            for (let o = 0; o < s.length; o += 1)
                s[o].l(i);
            e = te()
        },
        m(i, o) {
            for (let a = 0; a < s.length; a += 1)
                s[a] && s[a].m(i, o);
            M(i, e, o),
            t = !0
        },
        p(i, o) {
            if (o & 12) {
                n = Oe(i[2]);
                let a;
                for (a = 0; a < n.length; a += 1) {
                    const f = fi(i, n, a);
                    s[a] ? (s[a].p(f, o),
                    w(s[a], 1)) : (s[a] = ci(f),
                    s[a].c(),
                    w(s[a], 1),
                    s[a].m(e.parentNode, e))
                }
                for (le(),
                a = n.length; a < s.length; a += 1)
                    l(a);
                ie()
            }
        },
        i(i) {
            if (!t) {
                for (let o = 0; o < n.length; o += 1)
                    w(s[o]);
                t = !0
            }
        },
        o(i) {
            s = s.filter(Boolean);
            for (let o = 0; o < s.length; o += 1)
                y(s[o]);
            t = !1
        },
        d(i) {
            i && p(e),
            ct(s, i)
        }
    }
}
function e4(r) {
    let e, t;
    return {
        c() {
            e = N("span"),
            t = new Re(!1),
            this.h()
        },
        l(n) {
            e = B(n, "SPAN", {
                class: !0
            });
            var s = S(e);
            t = Le(s, !1),
            s.forEach(p),
            this.h()
        },
        h() {
            t.a = null,
            g(e, "class", "g-last-byline svelte-jz3n1d")
        },
        m(n, s) {
            M(n, e, s),
            t.m(r[0], e)
        },
        p(n, s) {
            s & 1 && t.p(n[0])
        },
        i: q,
        o: q,
        d(n) {
            n && p(e)
        }
    }
}
function t4(r) {
    let e, t;
    return {
        c() {
            e = ae(r[3]),
            t = Q()
        },
        l(n) {
            e = oe(n, r[3]),
            t = X(n)
        },
        m(n, s) {
            M(n, e, s),
            M(n, t, s)
        },
        p: q,
        d(n) {
            n && (p(e),
            p(t))
        }
    }
}
function n4(r) {
    let e, t;
    return e = new J3({
        props: {
            href: r[5].bioUrl,
            $$slots: {
                default: [s4]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, s) {
            const l = {};
            s & 256 && (l.$$scope = {
                dirty: s,
                ctx: n
            }),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function r4(r) {
    let e, t = r[5].renderedRepresentation.value + "", n;
    return {
        c() {
            e = new Re(!1),
            n = Q(),
            this.h()
        },
        l(s) {
            e = Le(s, !1),
            n = X(s),
            this.h()
        },
        h() {
            e.a = n
        },
        m(s, l) {
            e.m(t, s, l),
            M(s, n, l)
        },
        p: q,
        i: q,
        o: q,
        d(s) {
            s && (e.d(),
            p(n))
        }
    }
}
function s4(r) {
    let e = r[5].displayName + "", t;
    return {
        c() {
            t = ae(e)
        },
        l(n) {
            t = oe(n, e)
        },
        m(n, s) {
            M(n, t, s)
        },
        p: q,
        d(n) {
            n && p(t)
        }
    }
}
function l4(r) {
    let e;
    return {
        c() {
            e = ae(", ")
        },
        l(t) {
            e = oe(t, ", ")
        },
        m(t, n) {
            M(t, e, n)
        },
        d(t) {
            t && p(e)
        }
    }
}
function ci(r) {
    let e, t, n, s, l, i = r[2].length > 1 && r[7] === r[2].length - 1 && t4(r);
    const o = [r4, n4]
      , a = [];
    function f(c, d) {
        var h;
        return (h = c[5].renderedRepresentation) != null && h.value ? 0 : 1
    }
    t = f(r),
    n = a[t] = o[t](r);
    let u = r[7] < r[2].length - 2 && l4();
    return {
        c() {
            i && i.c(),
            e = N("span"),
            n.c(),
            s = te(),
            u && u.c(),
            this.h()
        },
        l(c) {
            i && i.l(c),
            e = B(c, "SPAN", {
                itemprop: !0,
                class: !0
            });
            var d = S(e);
            n.l(d),
            s = te(),
            u && u.l(d),
            d.forEach(p),
            this.h()
        },
        h() {
            g(e, "itemprop", "name"),
            g(e, "class", "svelte-jz3n1d"),
            J(e, "g-last-byline", r[7] === r[2].length - 1)
        },
        m(c, d) {
            i && i.m(c, d),
            M(c, e, d),
            a[t].m(e, null),
            E(e, s),
            u && u.m(e, null),
            l = !0
        },
        p(c, d) {
            c[2].length > 1 && c[7] === c[2].length - 1 && i.p(c, d),
            n.p(c, d)
        },
        i(c) {
            l || (w(n),
            l = !0)
        },
        o(c) {
            y(n),
            l = !1
        },
        d(c) {
            c && p(e),
            i && i.d(c),
            a[t].d(),
            u && u.d()
        }
    }
}
function i4(r) {
    let e, t, n, s, l, i = r[1] && !r[0] && ui(r);
    const o = [e4, $3, x3]
      , a = [];
    function f(u, c) {
        return u[0] ? 0 : u[2] && u[2].length > 0 ? 1 : 2
    }
    return n = f(r),
    s = a[n] = o[n](r),
    {
        c() {
            e = N("p"),
            i && i.c(),
            t = Q(),
            s.c(),
            this.h()
        },
        l(u) {
            e = B(u, "P", {
                class: !0
            });
            var c = S(e);
            i && i.l(c),
            t = X(c),
            s.l(c),
            c.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", "g-byline svelte-jz3n1d")
        },
        m(u, c) {
            M(u, e, c),
            i && i.m(e, null),
            E(e, t),
            a[n].m(e, null),
            l = !0
        },
        p(u, [c]) {
            u[1] && !u[0] ? i ? i.p(u, c) : (i = ui(u),
            i.c(),
            i.m(e, t)) : i && (i.d(1),
            i = null);
            let d = n;
            n = f(u),
            n === d ? a[n].p(u, c) : (le(),
            y(a[d], 1, 1, () => {
                a[d] = null
            }
            ),
            ie(),
            s = a[n],
            s ? s.p(u, c) : (s = a[n] = o[n](u),
            s.c()),
            w(s, 1),
            s.m(e, null))
        },
        i(u) {
            l || (w(s),
            l = !0)
        },
        o(u) {
            y(s),
            l = !1
        },
        d(u) {
            u && p(e),
            i && i.d(),
            a[n].d()
        }
    }
}
function o4(r, e, t) {
    var a, f, u;
    let {bylines: n} = e
      , {customByline: s} = e;
    const l = (a = n[0]) == null ? void 0 : a.prefix
      , i = ((f = n[0]) == null ? void 0 : f.creatorSnapshots) || ((u = n[0]) == null ? void 0 : u.creators)
      , o = q3(l);
    return r.$$set = c => {
        "bylines"in c && t(4, n = c.bylines),
        "customByline"in c && t(0, s = c.customByline)
    }
    ,
    [s, l, i, o, n]
}
class Aa extends x {
    constructor(e) {
        super(),
        $(this, e, o4, i4, Z, {
            bylines: 4,
            customByline: 0
        })
    }
}
function a4(r) {
    let e, t;
    return {
        c() {
            e = N("time"),
            t = ae(r[2]),
            this.h()
        },
        l(n) {
            e = B(n, "TIME", {
                id: !0,
                class: !0,
                datetime: !0
            });
            var s = S(e);
            t = oe(s, r[2]),
            s.forEach(p),
            this.h()
        },
        h() {
            var n;
            g(e, "id", "g-interactive-timestamp"),
            g(e, "class", "g-interactive-timestamp svelte-8m6fr8"),
            g(e, "datetime", r[3]),
            J(e, "capitalize", ((n = r[0]) == null ? void 0 : n.code) === "en")
        },
        m(n, s) {
            M(n, e, s),
            E(e, t)
        },
        p(n, s) {
            var l;
            s & 4 && pe(t, n[2]),
            s & 8 && g(e, "datetime", n[3]),
            s & 1 && J(e, "capitalize", ((l = n[0]) == null ? void 0 : l.code) === "en")
        },
        d(n) {
            n && p(e)
        }
    }
}
function f4(r) {
    let e, t, n;
    return {
        c() {
            e = N("time"),
            t = ae(r[4]),
            n = ae(r[1]),
            this.h()
        },
        l(s) {
            e = B(s, "TIME", {
                id: !0,
                class: !0
            });
            var l = S(e);
            t = oe(l, r[4]),
            n = oe(l, r[1]),
            l.forEach(p),
            this.h()
        },
        h() {
            g(e, "id", "g-interactive-timestamp-updated"),
            g(e, "class", "g-interactive-timestamp-updated svelte-8m6fr8")
        },
        m(s, l) {
            M(s, e, l),
            E(e, t),
            E(e, n)
        },
        p(s, l) {
            l & 2 && pe(n, s[1])
        },
        d(s) {
            s && p(e)
        }
    }
}
function u4(r) {
    let e;
    function t(l, i) {
        if (l[1])
            return f4;
        if (l[2])
            return a4
    }
    let n = t(r)
      , s = n && n(r);
    return {
        c() {
            s && s.c(),
            e = te()
        },
        l(l) {
            s && s.l(l),
            e = te()
        },
        m(l, i) {
            s && s.m(l, i),
            M(l, e, i)
        },
        p(l, [i]) {
            n === (n = t(l)) && s ? s.p(l, i) : (s && s.d(1),
            s = n && n(l),
            s && (s.c(),
            s.m(e.parentNode, e)))
        },
        i: q,
        o: q,
        d(l) {
            l && p(e),
            s && s.d(l)
        }
    }
}
function c4(r, e, t) {
    let {language: n, updatedText: s, firstPublished: l, dateTime: i} = e;
    const o = {
        en: "Updated ",
        es: "Actualizado ",
        "zh-cn": "最后更新于"
    }
      , a = o[n == null ? void 0 : n.code] || o.en;
    return r.$$set = f => {
        "language"in f && t(0, n = f.language),
        "updatedText"in f && t(1, s = f.updatedText),
        "firstPublished"in f && t(2, l = f.firstPublished),
        "dateTime"in f && t(3, i = f.dateTime)
    }
    ,
    [n, s, l, i, a]
}
class Ca extends x {
    constructor(e) {
        super(),
        $(this, e, c4, u4, Z, {
            language: 0,
            updatedText: 1,
            firstPublished: 2,
            dateTime: 3
        })
    }
}
function di(r, e, t) {
    const n = r.slice();
    return n[1] = e[t],
    n
}
function hi(r) {
    let e, t, n = Oe(r[0]), s = [];
    for (let l = 0; l < n.length; l += 1)
        s[l] = mi(di(r, n, l));
    return {
        c() {
            e = N("div"),
            t = N("div");
            for (let l = 0; l < s.length; l += 1)
                s[l].c();
            this.h()
        },
        l(l) {
            e = B(l, "DIV", {
                class: !0
            });
            var i = S(e);
            t = B(i, "DIV", {
                class: !0
            });
            var o = S(t);
            for (let a = 0; a < s.length; a += 1)
                s[a].l(o);
            o.forEach(p),
            i.forEach(p),
            this.h()
        },
        h() {
            g(t, "class", "g-translations svelte-1bnaicd"),
            g(e, "class", "g-translations-container svelte-1bnaicd")
        },
        m(l, i) {
            M(l, e, i),
            E(e, t);
            for (let o = 0; o < s.length; o += 1)
                s[o] && s[o].m(t, null)
        },
        p(l, i) {
            if (i & 1) {
                n = Oe(l[0]);
                let o;
                for (o = 0; o < n.length; o += 1) {
                    const a = di(l, n, o);
                    s[o] ? s[o].p(a, i) : (s[o] = mi(a),
                    s[o].c(),
                    s[o].m(t, null))
                }
                for (; o < s.length; o += 1)
                    s[o].d(1);
                s.length = n.length
            }
        },
        d(l) {
            l && p(e),
            ct(s, l)
        }
    }
}
function mi(r) {
    let e, t = (r[1].translatedLinkText || r[1].linkText) + "", n, s, l, i;
    return {
        c() {
            e = N("a"),
            n = ae(t),
            this.h()
        },
        l(o) {
            e = B(o, "A", {
                href: !0,
                title: !0,
                "data-version": !0,
                class: !0
            });
            var a = S(e);
            n = oe(a, t),
            a.forEach(p),
            this.h()
        },
        h() {
            var o;
            g(e, "href", s = r[1].url),
            g(e, "title", l = r[1].linkText),
            g(e, "data-version", i = (o = r[1].language) == null ? void 0 : o.code),
            g(e, "class", "svelte-1bnaicd")
        },
        m(o, a) {
            M(o, e, a),
            E(e, n)
        },
        p(o, a) {
            var f;
            a & 1 && t !== (t = (o[1].translatedLinkText || o[1].linkText) + "") && pe(n, t),
            a & 1 && s !== (s = o[1].url) && g(e, "href", s),
            a & 1 && l !== (l = o[1].linkText) && g(e, "title", l),
            a & 1 && i !== (i = (f = o[1].language) == null ? void 0 : f.code) && g(e, "data-version", i)
        },
        d(o) {
            o && p(e)
        }
    }
}
function d4(r) {
    var n;
    let e, t = ((n = r[0]) == null ? void 0 : n.length) > 0 && hi(r);
    return {
        c() {
            t && t.c(),
            e = te()
        },
        l(s) {
            t && t.l(s),
            e = te()
        },
        m(s, l) {
            t && t.m(s, l),
            M(s, e, l)
        },
        p(s, [l]) {
            var i;
            ((i = s[0]) == null ? void 0 : i.length) > 0 ? t ? t.p(s, l) : (t = hi(s),
            t.c(),
            t.m(e.parentNode, e)) : t && (t.d(1),
            t = null)
        },
        i: q,
        o: q,
        d(s) {
            s && p(e),
            t && t.d(s)
        }
    }
}
function h4(r, e, t) {
    let {translations: n} = e;
    return r.$$set = s => {
        "translations"in s && t(0, n = s.translations)
    }
    ,
    [n]
}
class m4 extends x {
    constructor(e) {
        super(),
        $(this, e, h4, d4, Z, {
            translations: 0
        })
    }
}
function gi(r) {
    let e, t;
    return {
        c() {
            e = N("span"),
            this.h()
        },
        l(n) {
            e = B(n, "SPAN", {
                "data-place-component": !0,
                "data-dropshadow": !0,
                "data-theme": !0,
                "data-disable": !0
            }),
            S(e).forEach(p),
            this.h()
        },
        h() {
            g(e, "data-place-component", "sharetools"),
            g(e, "data-dropshadow", t = r[1] || void 0),
            g(e, "data-theme", r[0]),
            g(e, "data-disable", r[2])
        },
        m(n, s) {
            M(n, e, s)
        },
        p(n, s) {
            s & 2 && t !== (t = n[1] || void 0) && g(e, "data-dropshadow", t),
            s & 1 && g(e, "data-theme", n[0]),
            s & 4 && g(e, "data-disable", n[2])
        },
        d(n) {
            n && p(e)
        }
    }
}
function g4(r) {
    let e, t = r[3] && gi(r);
    return {
        c() {
            e = N("div"),
            t && t.c(),
            this.h()
        },
        l(n) {
            e = B(n, "DIV", {
                class: !0
            });
            var s = S(e);
            t && t.l(s),
            s.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", "svelte-1h7hdz1")
        },
        m(n, s) {
            M(n, e, s),
            t && t.m(e, null)
        },
        p(n, [s]) {
            n[3] ? t ? t.p(n, s) : (t = gi(n),
            t.c(),
            t.m(e, null)) : t && (t.d(1),
            t = null)
        },
        i: q,
        o: q,
        d(n) {
            n && p(e),
            t && t.d()
        }
    }
}
function p4(r, e, t) {
    let {theme: n="light-filled"} = e, {dropshadow: s=!1} = e, {disable: l=""} = e, i;
    function o() {
        setTimeout( () => {
            t(3, i = !0),
            window.dispatchEvent(new Event("nyt:hydrateInjectableComponents"))
        }
        , 500)
    }
    return vt(o),
    ts(o),
    r.$$set = a => {
        "theme"in a && t(0, n = a.theme),
        "dropshadow"in a && t(1, s = a.dropshadow),
        "disable"in a && t(2, l = a.disable)
    }
    ,
    [n, s, l, i]
}
class ks extends x {
    constructor(e) {
        super(),
        $(this, e, p4, g4, Z, {
            theme: 0,
            dropshadow: 1,
            disable: 2
        })
    }
}
function pi(r) {
    let e, t, n;
    return t = new L3({
        props: {
            logo: r[10]
        }
    }),
    {
        c() {
            e = N("div"),
            W(t.$$.fragment),
            this.h()
        },
        l(s) {
            e = B(s, "DIV", {
                class: !0
            });
            var l = S(e);
            U(t.$$.fragment, l),
            l.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", "g-logo-wrapper svelte-1ilhsvg")
        },
        m(s, l) {
            M(s, e, l),
            z(t, e, null),
            n = !0
        },
        p(s, l) {
            const i = {};
            l & 1024 && (i.logo = s[10]),
            t.$set(i)
        },
        i(s) {
            n || (w(t.$$.fragment, s),
            n = !0)
        },
        o(s) {
            y(t.$$.fragment, s),
            n = !1
        },
        d(s) {
            s && p(e),
            G(t)
        }
    }
}
function _i(r) {
    let e, t, n;
    return t = new G3({
        props: {
            kicker: r[11]
        }
    }),
    {
        c() {
            e = N("div"),
            W(t.$$.fragment),
            this.h()
        },
        l(s) {
            e = B(s, "DIV", {
                class: !0
            });
            var l = S(e);
            U(t.$$.fragment, l),
            l.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", "g-kicker-wrapper svelte-1ilhsvg")
        },
        m(s, l) {
            M(s, e, l),
            z(t, e, null),
            n = !0
        },
        p(s, l) {
            const i = {};
            l & 2048 && (i.kicker = s[11]),
            t.$set(i)
        },
        i(s) {
            n || (w(t.$$.fragment, s),
            n = !0)
        },
        o(s) {
            y(t.$$.fragment, s),
            n = !1
        },
        d(s) {
            s && p(e),
            G(t)
        }
    }
}
function bi(r) {
    let e, t, n;
    return t = new Ia({
        props: {
            leadin: r[2]
        }
    }),
    {
        c() {
            e = N("div"),
            W(t.$$.fragment),
            this.h()
        },
        l(s) {
            e = B(s, "DIV", {
                class: !0
            });
            var l = S(e);
            U(t.$$.fragment, l),
            l.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", "g-leadin-wrapper svelte-1ilhsvg")
        },
        m(s, l) {
            M(s, e, l),
            z(t, e, null),
            n = !0
        },
        p(s, l) {
            const i = {};
            l & 4 && (i.leadin = s[2]),
            t.$set(i)
        },
        i(s) {
            n || (w(t.$$.fragment, s),
            n = !0)
        },
        o(s) {
            y(t.$$.fragment, s),
            n = !1
        },
        d(s) {
            s && p(e),
            G(t)
        }
    }
}
function vi(r) {
    let e, t, n, s, l, i;
    return t = new Aa({
        props: {
            customByline: r[4],
            bylines: r[3]
        }
    }),
    l = new Ca({
        props: {
            language: r[9],
            updatedText: r[5],
            firstPublished: r[6],
            dateTime: r[7]
        }
    }),
    {
        c() {
            e = N("div"),
            W(t.$$.fragment),
            n = Q(),
            s = N("span"),
            W(l.$$.fragment),
            this.h()
        },
        l(o) {
            e = B(o, "DIV", {
                class: !0
            });
            var a = S(e);
            U(t.$$.fragment, a),
            n = X(a),
            s = B(a, "SPAN", {
                class: !0
            });
            var f = S(s);
            U(l.$$.fragment, f),
            f.forEach(p),
            a.forEach(p),
            this.h()
        },
        h() {
            g(s, "class", "g-timestamp-wrapper"),
            g(e, "class", "g-byline-wrapper svelte-1ilhsvg")
        },
        m(o, a) {
            M(o, e, a),
            z(t, e, null),
            E(e, n),
            E(e, s),
            z(l, s, null),
            i = !0
        },
        p(o, a) {
            const f = {};
            a & 16 && (f.customByline = o[4]),
            a & 8 && (f.bylines = o[3]),
            t.$set(f);
            const u = {};
            a & 512 && (u.language = o[9]),
            a & 32 && (u.updatedText = o[5]),
            a & 64 && (u.firstPublished = o[6]),
            a & 128 && (u.dateTime = o[7]),
            l.$set(u)
        },
        i(o) {
            i || (w(t.$$.fragment, o),
            w(l.$$.fragment, o),
            i = !0)
        },
        o(o) {
            y(t.$$.fragment, o),
            y(l.$$.fragment, o),
            i = !1
        },
        d(o) {
            o && p(e),
            G(t),
            G(l)
        }
    }
}
function wi(r) {
    let e, t;
    return e = new Ia({
        props: {
            leadin: r[2]
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, s) {
            const l = {};
            s & 4 && (l.leadin = n[2]),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function yi(r) {
    var s, l, i;
    let e, t, n;
    return t = new ks({
        props: {
            theme: (s = r[14]) == null ? void 0 : s.theme,
            dropshadow: (l = r[14]) == null ? void 0 : l.dropshadow,
            disable: (i = r[14]) == null ? void 0 : i.disable
        }
    }),
    {
        c() {
            e = N("div"),
            W(t.$$.fragment),
            this.h()
        },
        l(o) {
            e = B(o, "DIV", {
                class: !0
            });
            var a = S(e);
            U(t.$$.fragment, a),
            a.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", "g-sharetools svelte-1ilhsvg")
        },
        m(o, a) {
            M(o, e, a),
            z(t, e, null),
            n = !0
        },
        p(o, a) {
            var u, c, d;
            const f = {};
            a & 16384 && (f.theme = (u = o[14]) == null ? void 0 : u.theme),
            a & 16384 && (f.dropshadow = (c = o[14]) == null ? void 0 : c.dropshadow),
            a & 16384 && (f.disable = (d = o[14]) == null ? void 0 : d.disable),
            t.$set(f)
        },
        i(o) {
            n || (w(t.$$.fragment, o),
            n = !0)
        },
        o(o) {
            y(t.$$.fragment, o),
            n = !1
        },
        d(o) {
            o && p(e),
            G(t)
        }
    }
}
function _4(r) {
    var P;
    let e, t, n, s, l, i, o, a, f, u, c, d, h, _, b = r[10] && pi(r), m = r[11] && _i(r);
    i = new U3({
        props: {
            headline: r[1]
        }
    });
    let v = r[2] && r[15] === "aboveByline" && bi(r)
      , k = !r[16] && vi(r)
      , A = r[2] && r[15] === "belowByline" && wi(r);
    c = new m4({
        props: {
            translations: r[8]
        }
    });
    let j = ((P = r[14]) == null ? void 0 : P.show) && yi(r);
    return {
        c() {
            e = N("div"),
            t = N("header"),
            b && b.c(),
            n = Q(),
            m && m.c(),
            s = Q(),
            l = N("div"),
            W(i.$$.fragment),
            o = Q(),
            v && v.c(),
            a = Q(),
            k && k.c(),
            f = Q(),
            A && A.c(),
            u = Q(),
            W(c.$$.fragment),
            d = Q(),
            j && j.c(),
            this.h()
        },
        l(T) {
            e = B(T, "DIV", {
                id: !0,
                class: !0
            });
            var O = S(e);
            t = B(O, "HEADER", {
                class: !0
            });
            var D = S(t);
            b && b.l(D),
            n = X(D),
            m && m.l(D),
            s = X(D),
            l = B(D, "DIV", {
                class: !0
            });
            var I = S(l);
            U(i.$$.fragment, I),
            I.forEach(p),
            o = X(D),
            v && v.l(D),
            a = X(D),
            k && k.l(D),
            f = X(D),
            A && A.l(D),
            u = X(D),
            U(c.$$.fragment, D),
            d = X(D),
            j && j.l(D),
            D.forEach(p),
            O.forEach(p),
            this.h()
        },
        h() {
            g(l, "class", "g-heading-wrapper svelte-1ilhsvg"),
            st(l, "max-width", bt(r[17])),
            g(t, "class", "g-header svelte-1ilhsvg"),
            st(t, "max-width", bt(r[18])),
            g(e, "id", "g-header-container"),
            g(e, "class", h = "g-header-container g-theme-" + r[0] + " g-align-" + r[12] + " " + (r[13] ? `g-style-${r[13]}` : "") + " svelte-1ilhsvg")
        },
        m(T, O) {
            M(T, e, O),
            E(e, t),
            b && b.m(t, null),
            E(t, n),
            m && m.m(t, null),
            E(t, s),
            E(t, l),
            z(i, l, null),
            E(t, o),
            v && v.m(t, null),
            E(t, a),
            k && k.m(t, null),
            E(t, f),
            A && A.m(t, null),
            E(t, u),
            z(c, t, null),
            E(t, d),
            j && j.m(t, null),
            _ = !0
        },
        p(T, [O]) {
            var ee;
            T[10] ? b ? (b.p(T, O),
            O & 1024 && w(b, 1)) : (b = pi(T),
            b.c(),
            w(b, 1),
            b.m(t, n)) : b && (le(),
            y(b, 1, 1, () => {
                b = null
            }
            ),
            ie()),
            T[11] ? m ? (m.p(T, O),
            O & 2048 && w(m, 1)) : (m = _i(T),
            m.c(),
            w(m, 1),
            m.m(t, s)) : m && (le(),
            y(m, 1, 1, () => {
                m = null
            }
            ),
            ie());
            const D = {};
            O & 2 && (D.headline = T[1]),
            i.$set(D),
            O & 131072 && st(l, "max-width", bt(T[17])),
            T[2] && T[15] === "aboveByline" ? v ? (v.p(T, O),
            O & 32772 && w(v, 1)) : (v = bi(T),
            v.c(),
            w(v, 1),
            v.m(t, a)) : v && (le(),
            y(v, 1, 1, () => {
                v = null
            }
            ),
            ie()),
            T[16] ? k && (le(),
            y(k, 1, 1, () => {
                k = null
            }
            ),
            ie()) : k ? (k.p(T, O),
            O & 65536 && w(k, 1)) : (k = vi(T),
            k.c(),
            w(k, 1),
            k.m(t, f)),
            T[2] && T[15] === "belowByline" ? A ? (A.p(T, O),
            O & 32772 && w(A, 1)) : (A = wi(T),
            A.c(),
            w(A, 1),
            A.m(t, u)) : A && (le(),
            y(A, 1, 1, () => {
                A = null
            }
            ),
            ie());
            const I = {};
            O & 256 && (I.translations = T[8]),
            c.$set(I),
            (ee = T[14]) != null && ee.show ? j ? (j.p(T, O),
            O & 16384 && w(j, 1)) : (j = yi(T),
            j.c(),
            w(j, 1),
            j.m(t, null)) : j && (le(),
            y(j, 1, 1, () => {
                j = null
            }
            ),
            ie()),
            O & 262144 && st(t, "max-width", bt(T[18])),
            (!_ || O & 12289 && h !== (h = "g-header-container g-theme-" + T[0] + " g-align-" + T[12] + " " + (T[13] ? `g-style-${T[13]}` : "") + " svelte-1ilhsvg")) && g(e, "class", h)
        },
        i(T) {
            _ || (w(b),
            w(m),
            w(i.$$.fragment, T),
            w(v),
            w(k),
            w(A),
            w(c.$$.fragment, T),
            w(j),
            _ = !0)
        },
        o(T) {
            y(b),
            y(m),
            y(i.$$.fragment, T),
            y(v),
            y(k),
            y(A),
            y(c.$$.fragment, T),
            y(j),
            _ = !1
        },
        d(T) {
            T && p(e),
            b && b.d(),
            m && m.d(),
            G(i),
            v && v.d(),
            k && k.d(),
            A && A.d(),
            G(c),
            j && j.d()
        }
    }
}
function b4(r, e, t) {
    let {theme: n="news"} = e
      , {headline: s=""} = e
      , {leadin: l} = e
      , {bylines: i} = e
      , {customByline: o} = e
      , {updatedText: a} = e
      , {firstPublished: f} = e
      , {dateTime: u} = e
      , {translations: c} = e
      , {language: d} = e
      , {logo: h=n === "upshot" ? "upshot" : !1} = e
      , {kicker: _=n === "opinion" ? "Opinion" : !1} = e
      , {align: b="center"} = e
      , {style: m="default"} = e
      , {sharetools: v} = e
      , {leadinPosition: k="belowByline"} = e
      , {hideBylineAndTimestamp: A=!1} = e
      , {headlineMaxWidth: j} = e
      , {maxWidth: P} = e;
    return r.$$set = T => {
        "theme"in T && t(0, n = T.theme),
        "headline"in T && t(1, s = T.headline),
        "leadin"in T && t(2, l = T.leadin),
        "bylines"in T && t(3, i = T.bylines),
        "customByline"in T && t(4, o = T.customByline),
        "updatedText"in T && t(5, a = T.updatedText),
        "firstPublished"in T && t(6, f = T.firstPublished),
        "dateTime"in T && t(7, u = T.dateTime),
        "translations"in T && t(8, c = T.translations),
        "language"in T && t(9, d = T.language),
        "logo"in T && t(10, h = T.logo),
        "kicker"in T && t(11, _ = T.kicker),
        "align"in T && t(12, b = T.align),
        "style"in T && t(13, m = T.style),
        "sharetools"in T && t(14, v = T.sharetools),
        "leadinPosition"in T && t(15, k = T.leadinPosition),
        "hideBylineAndTimestamp"in T && t(16, A = T.hideBylineAndTimestamp),
        "headlineMaxWidth"in T && t(17, j = T.headlineMaxWidth),
        "maxWidth"in T && t(18, P = T.maxWidth)
    }
    ,
    [n, s, l, i, o, a, f, u, c, d, h, _, b, m, v, k, A, j, P]
}
class v4 extends x {
    constructor(e) {
        super(),
        $(this, e, b4, _4, Z, {
            theme: 0,
            headline: 1,
            leadin: 2,
            bylines: 3,
            customByline: 4,
            updatedText: 5,
            firstPublished: 6,
            dateTime: 7,
            translations: 8,
            language: 9,
            logo: 10,
            kicker: 11,
            align: 12,
            style: 13,
            sharetools: 14,
            leadinPosition: 15,
            hideBylineAndTimestamp: 16,
            headlineMaxWidth: 17,
            maxWidth: 18
        })
    }
}
function w4(r) {
    var n;
    let e, t;
    return e = new v4({
        props: {
            theme: r[0],
            headline: (n = r[7]) != null ? n : r[6],
            leadin: r[8],
            bylines: r[9],
            customByline: r[10],
            updatedText: r[11],
            firstPublished: r[12],
            dateTime: r[13],
            translations: r[14],
            language: r[15],
            logo: r[16],
            kicker: r[17],
            align: r[5],
            style: r[18],
            sharetools: r[4],
            leadinPosition: r[3],
            hideBylineAndTimestamp: r[19],
            headlineMaxWidth: r[2],
            maxWidth: r[1]
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(s) {
            U(e.$$.fragment, s)
        },
        m(s, l) {
            z(e, s, l),
            t = !0
        },
        p(s, [l]) {
            const i = {};
            l & 1 && (i.theme = s[0]),
            l & 32 && (i.align = s[5]),
            l & 16 && (i.sharetools = s[4]),
            l & 8 && (i.leadinPosition = s[3]),
            l & 4 && (i.headlineMaxWidth = s[2]),
            l & 2 && (i.maxWidth = s[1]),
            e.$set(i)
        },
        i(s) {
            t || (w(e.$$.fragment, s),
            t = !0)
        },
        o(s) {
            y(e.$$.fragment, s),
            t = !1
        },
        d(s) {
            G(e, s)
        }
    }
}
function y4(r, e, t) {
    let n, s, l, i, o, a;
    Ee(r, Ve, I => t(21, a = I));
    let {props: f} = e
      , {theme: u="news"} = e;
    const {headline: c, customHeadline: d, leadin: h, bylines: _, customByline: b, updatedText: m, firstPublished: v, dateTime: k, translations: A, language: j, logo: P, kicker: T, style: O, hideBylineAndTimestamp: D} = f;
    return r.$$set = I => {
        "props"in I && t(20, f = I.props),
        "theme"in I && t(0, u = I.theme)
    }
    ,
    r.$$.update = () => {
        r.$$.dirty & 3145728 && t(5, {align: n, sharetools: s, leadinPosition: l="aboveByline", headlineMaxWidth: i, maxWidth: o} = ze(f, a), n, (t(4, s),
        t(20, f),
        t(21, a)), (t(3, l),
        t(20, f),
        t(21, a)), (t(2, i),
        t(20, f),
        t(21, a)), (t(1, o),
        t(20, f),
        t(21, a)))
    }
    ,
    [u, o, i, l, s, n, c, d, h, _, b, m, v, k, A, j, P, T, O, D, f, a]
}
class k4 extends x {
    constructor(e) {
        super(),
        $(this, e, y4, w4, Z, {
            props: 20,
            theme: 0
        })
    }
}
function T4(r) {
    let e, t;
    return e = new Vt({
        props: {
            props: r[0],
            expectedType: "embed"
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, [s]) {
            const l = {};
            s & 1 && (l.props = n[0]),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function E4(r, e, t) {
    let {props: n={}} = e;
    return r.$$set = s => {
        "props"in s && t(0, n = s.props)
    }
    ,
    [n]
}
class D6 extends x {
    constructor(e) {
        super(),
        $(this, e, E4, T4, Z, {
            props: 0
        })
    }
}
function I4(r) {
    let e;
    const t = r[23].default
      , n = We(t, r, r[24], null);
    return {
        c() {
            n && n.c()
        },
        l(s) {
            n && n.l(s)
        },
        m(s, l) {
            n && n.m(s, l),
            e = !0
        },
        p(s, l) {
            n && n.p && (!e || l & 16777216) && Ue(n, t, s, s[24], e ? He(t, s[24], l, null) : Fe(s[24]), null)
        },
        i(s) {
            e || (w(n, s),
            e = !0)
        },
        o(s) {
            y(n, s),
            e = !1
        },
        d(s) {
            n && n.d(s)
        }
    }
}
function A4(r) {
    let e, t;
    return e = new Qt({
        props: {
            element: r[0],
            hed: r[12],
            leadin: r[16],
            caption: r[2],
            source: r[18],
            credit: r[3],
            note: r[17],
            textAlign: r[15],
            headerTextAlign: r[14],
            footerTextAlign: r[13],
            label: r[11],
            id: r[20],
            className: r[19],
            maxWidth: r[10],
            headerMaxWidth: r[9],
            footerMaxWidth: r[8],
            ariaLabelType: r[1],
            marginInline: r[7],
            marginBlock: r[6],
            headerMarginInline: r[5],
            footerMarginInline: r[4],
            $$slots: {
                default: [I4]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, [s]) {
            const l = {};
            s & 1 && (l.element = n[0]),
            s & 4096 && (l.hed = n[12]),
            s & 65536 && (l.leadin = n[16]),
            s & 4 && (l.caption = n[2]),
            s & 262144 && (l.source = n[18]),
            s & 8 && (l.credit = n[3]),
            s & 131072 && (l.note = n[17]),
            s & 32768 && (l.textAlign = n[15]),
            s & 16384 && (l.headerTextAlign = n[14]),
            s & 8192 && (l.footerTextAlign = n[13]),
            s & 2048 && (l.label = n[11]),
            s & 1048576 && (l.id = n[20]),
            s & 524288 && (l.className = n[19]),
            s & 1024 && (l.maxWidth = n[10]),
            s & 512 && (l.headerMaxWidth = n[9]),
            s & 256 && (l.footerMaxWidth = n[8]),
            s & 2 && (l.ariaLabelType = n[1]),
            s & 128 && (l.marginInline = n[7]),
            s & 64 && (l.marginBlock = n[6]),
            s & 32 && (l.headerMarginInline = n[5]),
            s & 16 && (l.footerMarginInline = n[4]),
            s & 16777216 && (l.$$scope = {
                dirty: s,
                ctx: n
            }),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function C4(r, e, t) {
    let n, s, l, i, o, a, f, u, c, d, h, _, b, m, v, k, A, j, P, T;
    Ee(r, Ve, ne => t(22, T = ne));
    let {$$slots: O={}, $$scope: D} = e
      , {props: I={}} = e
      , {element: ee="figure"} = e
      , {ariaLabelType: K=""} = e;
    return r.$$set = ne => {
        "props"in ne && t(21, I = ne.props),
        "element"in ne && t(0, ee = ne.element),
        "ariaLabelType"in ne && t(1, K = ne.ariaLabelType),
        "$$scope"in ne && t(24, D = ne.$$scope)
    }
    ,
    r.$$.update = () => {
        r.$$.dirty & 6291456 && t(20, {id: n, className: s, source: l, note: i, leadin: o, textAlign: a, headerTextAlign: f, footerTextAlign: u, hed: c, label: d, maxWidth: h, headerMaxWidth: _, footerMaxWidth: b, marginInline: m, marginBlock: v, headerMarginInline: k, footerMarginInline: A} = ze(I, T), n, (t(19, s),
        t(21, I),
        t(22, T)), (t(18, l),
        t(21, I),
        t(22, T)), (t(17, i),
        t(21, I),
        t(22, T)), (t(16, o),
        t(21, I),
        t(22, T)), (t(15, a),
        t(21, I),
        t(22, T)), (t(14, f),
        t(21, I),
        t(22, T)), (t(13, u),
        t(21, I),
        t(22, T)), (t(12, c),
        t(21, I),
        t(22, T)), (t(11, d),
        t(21, I),
        t(22, T)), (t(10, h),
        t(21, I),
        t(22, T)), (t(9, _),
        t(21, I),
        t(22, T)), (t(8, b),
        t(21, I),
        t(22, T)), (t(7, m),
        t(21, I),
        t(22, T)), (t(6, v),
        t(21, I),
        t(22, T)), (t(5, k),
        t(21, I),
        t(22, T)), (t(4, A),
        t(21, I),
        t(22, T))),
        r.$$.dirty & 6291456 && t(3, {credit: j, caption: P} = ws(ze(I, T)), j, (t(2, P),
        t(21, I),
        t(22, T)))
    }
    ,
    [ee, K, P, j, A, k, v, m, b, _, h, d, c, u, f, a, o, i, l, s, n, I, T, O, D]
}
class wt extends x {
    constructor(e) {
        super(),
        $(this, e, C4, A4, Z, {
            props: 21,
            element: 0,
            ariaLabelType: 1
        })
    }
}
function ki(r) {
    let e, t, n = "Details", s, l, i;
    return {
        c() {
            e = N("details"),
            t = N("summary"),
            t.textContent = n,
            s = Q(),
            l = N("code"),
            i = ae(r[1]),
            this.h()
        },
        l(o) {
            e = B(o, "DETAILS", {
                class: !0
            });
            var a = S(e);
            t = B(a, "SUMMARY", {
                class: !0,
                "data-svelte-h": !0
            }),
            It(t) !== "svelte-z0u0vu" && (t.textContent = n),
            s = X(a),
            l = B(a, "CODE", {});
            var f = S(l);
            i = oe(f, r[1]),
            f.forEach(p),
            a.forEach(p),
            this.h()
        },
        h() {
            g(t, "class", "svelte-f5bxoc"),
            g(e, "class", "svelte-f5bxoc")
        },
        m(o, a) {
            M(o, e, a),
            E(e, t),
            E(e, s),
            E(e, l),
            E(l, i)
        },
        p(o, a) {
            a & 2 && pe(i, o[1])
        },
        d(o) {
            o && p(e)
        }
    }
}
function S4(r) {
    let e, t, n, s, l = r[1] && ki(r);
    return {
        c() {
            e = N("p"),
            t = new Re(!1),
            n = Q(),
            l && l.c(),
            s = te(),
            this.h()
        },
        l(i) {
            e = B(i, "P", {});
            var o = S(e);
            t = Le(o, !1),
            o.forEach(p),
            n = X(i),
            l && l.l(i),
            s = te(),
            this.h()
        },
        h() {
            t.a = null
        },
        m(i, o) {
            M(i, e, o),
            t.m(r[0], e),
            M(i, n, o),
            l && l.m(i, o),
            M(i, s, o)
        },
        p(i, o) {
            o & 1 && t.p(i[0]),
            i[1] ? l ? l.p(i, o) : (l = ki(i),
            l.c(),
            l.m(s.parentNode, s)) : l && (l.d(1),
            l = null)
        },
        d(i) {
            i && (p(e),
            p(n),
            p(s)),
            l && l.d(i)
        }
    }
}
function P4(r) {
    let e, t;
    return e = new ln({
        props: {
            message: r[0],
            $$slots: {
                default: [S4]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, s) {
            const l = {};
            s & 1 && (l.message = n[0]),
            s & 7 && (l.$$scope = {
                dirty: s,
                ctx: n
            }),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function O4(r) {
    let e, t;
    return e = new wt({
        props: {
            $$slots: {
                default: [P4]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, [s]) {
            const l = {};
            s & 7 && (l.$$scope = {
                dirty: s,
                ctx: n
            }),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function M4(r, e, t) {
    let {message: n=""} = e
      , {stack: s=""} = e;
    return r.$$set = l => {
        "message"in l && t(0, n = l.message),
        "stack"in l && t(1, s = l.stack)
    }
    ,
    [n, s]
}
class j4 extends x {
    constructor(e) {
        super(),
        $(this, e, M4, O4, Z, {
            message: 0,
            stack: 1
        })
    }
}
function Ti(r) {
    var s, l, i;
    let e, t, n;
    return t = new ks({
        props: {
            theme: (s = r[2]) == null ? void 0 : s.theme,
            dropshadow: (l = r[2]) == null ? void 0 : l.dropshadow,
            disable: (i = r[2]) == null ? void 0 : i.disable
        }
    }),
    {
        c() {
            e = N("div"),
            W(t.$$.fragment),
            this.h()
        },
        l(o) {
            e = B(o, "DIV", {
                class: !0
            });
            var a = S(e);
            U(t.$$.fragment, a),
            a.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", "g-sharetools svelte-6ozdqx")
        },
        m(o, a) {
            M(o, e, a),
            z(t, e, null),
            n = !0
        },
        p(o, a) {
            var u, c, d;
            const f = {};
            a & 4 && (f.theme = (u = o[2]) == null ? void 0 : u.theme),
            a & 4 && (f.dropshadow = (c = o[2]) == null ? void 0 : c.dropshadow),
            a & 4 && (f.disable = (d = o[2]) == null ? void 0 : d.disable),
            t.$set(f)
        },
        i(o) {
            n || (w(t.$$.fragment, o),
            n = !0)
        },
        o(o) {
            y(t.$$.fragment, o),
            n = !1
        },
        d(o) {
            o && p(e),
            G(t)
        }
    }
}
function Ei(r) {
    let e, t, n = r[0].bio + "";
    return {
        c() {
            e = N("p"),
            t = new Re(!1),
            this.h()
        },
        l(s) {
            e = B(s, "P", {
                class: !0
            });
            var l = S(e);
            t = Le(l, !1),
            l.forEach(p),
            this.h()
        },
        h() {
            t.a = null,
            g(e, "class", "g-extended-bio svelte-6ozdqx")
        },
        m(s, l) {
            M(s, e, l),
            t.m(n, e)
        },
        p(s, l) {
            l & 1 && n !== (n = s[0].bio + "") && t.p(n)
        },
        d(s) {
            s && p(e)
        }
    }
}
function Ii(r) {
    var s, l, i;
    let e, t, n;
    return t = new ks({
        props: {
            theme: (s = r[2]) == null ? void 0 : s.theme,
            dropshadow: (l = r[2]) == null ? void 0 : l.dropshadow,
            disable: (i = r[2]) == null ? void 0 : i.disable
        }
    }),
    {
        c() {
            e = N("div"),
            W(t.$$.fragment),
            this.h()
        },
        l(o) {
            e = B(o, "DIV", {
                class: !0
            });
            var a = S(e);
            U(t.$$.fragment, a),
            a.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", "g-sharetools svelte-6ozdqx")
        },
        m(o, a) {
            M(o, e, a),
            z(t, e, null),
            n = !0
        },
        p(o, a) {
            var u, c, d;
            const f = {};
            a & 4 && (f.theme = (u = o[2]) == null ? void 0 : u.theme),
            a & 4 && (f.dropshadow = (c = o[2]) == null ? void 0 : c.dropshadow),
            a & 4 && (f.disable = (d = o[2]) == null ? void 0 : d.disable),
            t.$set(f)
        },
        i(o) {
            n || (w(t.$$.fragment, o),
            n = !0)
        },
        o(o) {
            y(t.$$.fragment, o),
            n = !1
        },
        d(o) {
            o && p(e),
            G(t)
        }
    }
}
function B4(r) {
    var _, b;
    let e, t, n, s, l, i, o, a, f, u, c = ((_ = r[2]) == null ? void 0 : _.show) && r[2].position === "aboveByline" && Ti(r);
    s = new Aa({
        props: {
            customByline: r[0].customByline,
            bylines: r[0].bylines
        }
    });
    let d = r[0].bio && Ei(r);
    o = new Ca({
        props: {
            language: r[0].language,
            updatedText: r[0].updatedText,
            firstPublished: r[0].firstPublished,
            dateTime: r[0].dateTime
        }
    });
    let h = ((b = r[2]) == null ? void 0 : b.show) && r[2].position === "belowByline" && Ii(r);
    return {
        c() {
            e = N("div"),
            c && c.c(),
            t = Q(),
            n = N("div"),
            W(s.$$.fragment),
            l = Q(),
            d && d.c(),
            i = Q(),
            W(o.$$.fragment),
            a = Q(),
            h && h.c(),
            this.h()
        },
        l(m) {
            e = B(m, "DIV", {
                class: !0
            });
            var v = S(e);
            c && c.l(v),
            t = X(v),
            n = B(v, "DIV", {
                class: !0
            });
            var k = S(n);
            U(s.$$.fragment, k),
            l = X(k),
            d && d.l(k),
            i = X(k),
            U(o.$$.fragment, k),
            k.forEach(p),
            a = X(v),
            h && h.l(v),
            v.forEach(p),
            this.h()
        },
        h() {
            g(n, "class", "g-extended-byline-container svelte-6ozdqx"),
            g(e, "class", f = "g-extended-byline-wrapper g-theme-" + r[1] + " svelte-6ozdqx")
        },
        m(m, v) {
            M(m, e, v),
            c && c.m(e, null),
            E(e, t),
            E(e, n),
            z(s, n, null),
            E(n, l),
            d && d.m(n, null),
            E(n, i),
            z(o, n, null),
            E(e, a),
            h && h.m(e, null),
            u = !0
        },
        p(m, [v]) {
            var j, P;
            (j = m[2]) != null && j.show && m[2].position === "aboveByline" ? c ? (c.p(m, v),
            v & 4 && w(c, 1)) : (c = Ti(m),
            c.c(),
            w(c, 1),
            c.m(e, t)) : c && (le(),
            y(c, 1, 1, () => {
                c = null
            }
            ),
            ie());
            const k = {};
            v & 1 && (k.customByline = m[0].customByline),
            v & 1 && (k.bylines = m[0].bylines),
            s.$set(k),
            m[0].bio ? d ? d.p(m, v) : (d = Ei(m),
            d.c(),
            d.m(n, i)) : d && (d.d(1),
            d = null);
            const A = {};
            v & 1 && (A.language = m[0].language),
            v & 1 && (A.updatedText = m[0].updatedText),
            v & 1 && (A.firstPublished = m[0].firstPublished),
            v & 1 && (A.dateTime = m[0].dateTime),
            o.$set(A),
            (P = m[2]) != null && P.show && m[2].position === "belowByline" ? h ? (h.p(m, v),
            v & 4 && w(h, 1)) : (h = Ii(m),
            h.c(),
            w(h, 1),
            h.m(e, null)) : h && (le(),
            y(h, 1, 1, () => {
                h = null
            }
            ),
            ie()),
            (!u || v & 2 && f !== (f = "g-extended-byline-wrapper g-theme-" + m[1] + " svelte-6ozdqx")) && g(e, "class", f)
        },
        i(m) {
            u || (w(c),
            w(s.$$.fragment, m),
            w(o.$$.fragment, m),
            w(h),
            u = !0)
        },
        o(m) {
            y(c),
            y(s.$$.fragment, m),
            y(o.$$.fragment, m),
            y(h),
            u = !1
        },
        d(m) {
            m && p(e),
            c && c.d(),
            G(s),
            d && d.d(),
            G(o),
            h && h.d()
        }
    }
}
function N4(r, e, t) {
    let n, s;
    Ee(r, Ve, o => t(3, s = o));
    let {props: l} = e
      , {theme: i} = e;
    return r.$$set = o => {
        "props"in o && t(0, l = o.props),
        "theme"in o && t(1, i = o.theme)
    }
    ,
    r.$$.update = () => {
        var o;
        r.$$.dirty & 9 && t(2, {sharetools: n} = ze(l, s), n),
        r.$$.dirty & 4 && n && t(2, n.position = (o = n.position) != null ? o : "belowByline", n)
    }
    ,
    [l, i, n, s]
}
class L6 extends x {
    constructor(e) {
        super(),
        $(this, e, N4, B4, Z, {
            props: 0,
            theme: 1
        })
    }
}
function D4(r) {
    let e, t;
    return e = new Vt({
        props: {
            props: r[0],
            expectedType: "graphic"
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, [s]) {
            const l = {};
            s & 1 && (l.props = n[0]),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function L4(r, e, t) {
    let {props: n} = e;
    return r.$$set = s => {
        "props"in s && t(0, n = s.props)
    }
    ,
    [n]
}
class R6 extends x {
    constructor(e) {
        super(),
        $(this, e, L4, D4, Z, {
            props: 0
        })
    }
}
function Ai(r, e, t) {
    const n = r.slice();
    return n[10] = e[t],
    n[12] = t,
    n
}
function R4(r) {
    let e, t;
    return e = new ur({
        props: {
            props: r[10].mediaProps,
            expectedType: Zt[r[10].media.assetType] || ""
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, s) {
            const l = {};
            s & 1 && (l.props = n[10].mediaProps),
            s & 1 && (l.expectedType = Zt[n[10].media.assetType] || ""),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function Ci(r) {
    let e, t, n, s, l;
    const i = [r[10].wrapperProps, {
        maxWidth: "default"
    }, {
        headerMaxWidth: "default"
    }, {
        footerMaxWidth: "default"
    }, {
        headerMarginInline: r[4]
    }, {
        footerMarginInline: r[4]
    }, {
        assetType: r[10].media.assetType
    }, {
        marginBlock: !1
    }, {
        marginInline: !1
    }];
    let o = {
        $$slots: {
            default: [R4]
        },
        $$scope: {
            ctx: r
        }
    };
    for (let a = 0; a < i.length; a += 1)
        o = at(o, i[a]);
    return t = new Qt({
        props: o
    }),
    {
        c() {
            e = N("div"),
            W(t.$$.fragment),
            n = Q(),
            this.h()
        },
        l(a) {
            e = B(a, "DIV", {
                class: !0,
                style: !0
            });
            var f = S(e);
            U(t.$$.fragment, f),
            n = X(f),
            f.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", "g-grid_item g-grid_item-" + r[12] + " svelte-2sihmf"),
            g(e, "style", s = (r[10].rowsCols.cols ? `--g-item-column: ${r[10].rowsCols.cols}` : "") + " " + (r[10].rowsCols.rows ? `--g-item-row: ${r[10].rowsCols.rows}` : ""))
        },
        m(a, f) {
            M(a, e, f),
            z(t, e, null),
            E(e, n),
            l = !0
        },
        p(a, f) {
            const u = f & 17 ? et(i, [f & 1 && ot(a[10].wrapperProps), i[1], i[2], i[3], f & 16 && {
                headerMarginInline: a[4]
            }, f & 16 && {
                footerMarginInline: a[4]
            }, f & 1 && {
                assetType: a[10].media.assetType
            }, i[7], i[8]]) : {};
            f & 8193 && (u.$$scope = {
                dirty: f,
                ctx: a
            }),
            t.$set(u),
            (!l || f & 1 && s !== (s = (a[10].rowsCols.cols ? `--g-item-column: ${a[10].rowsCols.cols}` : "") + " " + (a[10].rowsCols.rows ? `--g-item-row: ${a[10].rowsCols.rows}` : ""))) && g(e, "style", s)
        },
        i(a) {
            l || (w(t.$$.fragment, a),
            l = !0)
        },
        o(a) {
            y(t.$$.fragment, a),
            l = !1
        },
        d(a) {
            a && p(e),
            G(t)
        }
    }
}
function V4(r) {
    let e, t, n, s, l, i = Oe(r[0]), o = [];
    for (let f = 0; f < i.length; f += 1)
        o[f] = Ci(Ai(r, i, f));
    const a = f => y(o[f], 1, 1, () => {
        o[f] = null
    }
    );
    return {
        c() {
            e = N("figure");
            for (let f = 0; f < o.length; f += 1)
                o[f].c();
            this.h()
        },
        l(f) {
            e = B(f, "FIGURE", {
                class: !0,
                style: !0,
                "aria-label": !0
            });
            var u = S(e);
            for (let c = 0; c < o.length; c += 1)
                o[c].l(u);
            u.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", t = "g-grid g-grid-cols-" + r[3] + " g-grid-length-" + r[0].length + " svelte-2sihmf"),
            g(e, "style", r[5]),
            g(e, "aria-label", n = r[1] || zn.gridItems),
            xe( () => r[8].call(e))
        },
        m(f, u) {
            M(f, e, u);
            for (let c = 0; c < o.length; c += 1)
                o[c] && o[c].m(e, null);
            s = Dt(e, r[8].bind(e)),
            l = !0
        },
        p(f, [u]) {
            if (u & 17) {
                i = Oe(f[0]);
                let c;
                for (c = 0; c < i.length; c += 1) {
                    const d = Ai(f, i, c);
                    o[c] ? (o[c].p(d, u),
                    w(o[c], 1)) : (o[c] = Ci(d),
                    o[c].c(),
                    w(o[c], 1),
                    o[c].m(e, null))
                }
                for (le(),
                c = i.length; c < o.length; c += 1)
                    a(c);
                ie()
            }
            (!l || u & 9 && t !== (t = "g-grid g-grid-cols-" + f[3] + " g-grid-length-" + f[0].length + " svelte-2sihmf")) && g(e, "class", t),
            (!l || u & 32) && g(e, "style", f[5]),
            (!l || u & 2 && n !== (n = f[1] || zn.gridItems)) && g(e, "aria-label", n)
        },
        i(f) {
            if (!l) {
                for (let u = 0; u < i.length; u += 1)
                    w(o[u]);
                l = !0
            }
        },
        o(f) {
            o = o.filter(Boolean);
            for (let u = 0; u < o.length; u += 1)
                y(o[u]);
            l = !1
        },
        d(f) {
            f && p(e),
            ct(o, f),
            s()
        }
    }
}
function G4(r, e, t) {
    let n, s, l;
    Ee(r, Ve, h => t(7, l = h));
    let {items: i=[]} = e
      , {cols: o=1} = e
      , {altText: a=""} = e
      , f = 0;
    const u = () => {
        t(0, i = i.map(h => {
            let {caption: _, source: b, credit: m, note: v, leadin: k, hed: A, label: j, media: P, altText: T, lazy: O, cols: D, rows: I, cropName: ee} = ze(h, l);
            return {
                ...h,
                wrapperProps: {
                    caption: _,
                    source: b,
                    credit: m,
                    note: v,
                    leadin: k,
                    hed: A,
                    label: j
                },
                mediaProps: {
                    media: P,
                    altText: T,
                    lazy: O,
                    cropName: ee
                },
                rowsCols: {
                    cols: D,
                    rows: I
                }
            }
        }
        ))
    }
    ;
    let c = !1;
    function d() {
        f = this.clientWidth,
        t(2, f)
    }
    return r.$$set = h => {
        "items"in h && t(0, i = h.items),
        "cols"in h && t(6, o = h.cols),
        "altText"in h && t(1, a = h.altText)
    }
    ,
    r.$$.update = () => {
        r.$$.dirty & 64 && t(3, n = +o),
        r.$$.dirty & 132 && t(4, c = f + 1 >= Math.round(l)),
        r.$$.dirty & 9 && u(),
        r.$$.dirty & 8 && t(5, s = [`--g-grid-columns: ${n}`].join(";"))
    }
    ,
    [i, a, f, n, c, s, o, l, d]
}
class z4 extends x {
    constructor(e) {
        super(),
        $(this, e, G4, V4, Z, {
            items: 0,
            cols: 6,
            altText: 1
        })
    }
}
function W4(r) {
    let e, t;
    return e = new z4({
        props: {
            items: r[2],
            cols: r[1],
            altText: r[0].altText
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, s) {
            const l = {};
            s & 4 && (l.items = n[2]),
            s & 2 && (l.cols = n[1]),
            s & 1 && (l.altText = n[0].altText),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function U4(r) {
    let e, t;
    return e = new wt({
        props: {
            props: r[0],
            ariaLabelType: "grid",
            $$slots: {
                default: [W4]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, [s]) {
            const l = {};
            s & 1 && (l.props = n[0]),
            s & 23 && (l.$$scope = {
                dirty: s,
                ctx: n
            }),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function F4(r, e, t) {
    let n, s, l;
    Ee(r, Ve, o => t(3, l = o));
    let {props: i={}} = e;
    return r.$$set = o => {
        "props"in o && t(0, i = o.props)
    }
    ,
    r.$$.update = () => {
        r.$$.dirty & 9 && t(2, {items: n, cols: s} = ze(i, l), n, (t(1, s),
        t(0, i),
        t(3, l)))
    }
    ,
    [i, s, n, l]
}
class V6 extends x {
    constructor(e) {
        super(),
        $(this, e, F4, U4, Z, {
            props: 0
        })
    }
}
function H4(r) {
    let e, t;
    return e = new Vt({
        props: {
            props: r[0],
            expectedType: "image"
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, [s]) {
            const l = {};
            s & 1 && (l.props = n[0]),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function q4(r, e, t) {
    let {props: n} = e;
    return r.$$set = s => {
        "props"in s && t(0, n = s.props)
    }
    ,
    [n]
}
class G6 extends x {
    constructor(e) {
        super(),
        $(this, e, q4, H4, Z, {
            props: 0
        })
    }
}
function Si(r, e, t) {
    const n = r.slice();
    return n[4] = e[t].type,
    n[5] = e[t].value,
    n
}
function Pi(r) {
    let e, t;
    return {
        c() {
            e = N("p"),
            t = ae(r[0]),
            this.h()
        },
        l(n) {
            e = B(n, "P", {
                class: !0
            });
            var s = S(e);
            t = oe(s, r[0]),
            s.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", "methodology-hed svelte-7ih814")
        },
        m(n, s) {
            M(n, e, s),
            E(e, t)
        },
        p(n, s) {
            s & 1 && pe(t, n[0])
        },
        d(n) {
            n && p(e)
        }
    }
}
function Oi(r) {
    let e, t = r[5] + "", n;
    return {
        c() {
            e = new Re(!1),
            n = te(),
            this.h()
        },
        l(s) {
            e = Le(s, !1),
            n = te(),
            this.h()
        },
        h() {
            e.a = n
        },
        m(s, l) {
            e.m(t, s, l),
            M(s, n, l)
        },
        p(s, l) {
            l & 2 && t !== (t = s[5] + "") && e.p(t)
        },
        d(s) {
            s && (p(n),
            e.d())
        }
    }
}
function Mi(r) {
    let e, t, n = r[4] === "text" && Oi(r);
    return {
        c() {
            e = N("p"),
            n && n.c(),
            t = Q(),
            this.h()
        },
        l(s) {
            e = B(s, "P", {
                class: !0
            });
            var l = S(e);
            n && n.l(l),
            t = X(l),
            l.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", "svelte-7ih814")
        },
        m(s, l) {
            M(s, e, l),
            n && n.m(e, null),
            E(e, t)
        },
        p(s, l) {
            s[4] === "text" ? n ? n.p(s, l) : (n = Oi(s),
            n.c(),
            n.m(e, t)) : n && (n.d(1),
            n = null)
        },
        d(s) {
            s && p(e),
            n && n.d()
        }
    }
}
function K4(r) {
    let e, t, n = r[0] && Pi(r), s = Oe(r[1]), l = [];
    for (let i = 0; i < s.length; i += 1)
        l[i] = Mi(Si(r, s, i));
    return {
        c() {
            e = N("div"),
            n && n.c(),
            t = Q();
            for (let i = 0; i < l.length; i += 1)
                l[i].c();
            this.h()
        },
        l(i) {
            e = B(i, "DIV", {
                class: !0
            });
            var o = S(e);
            n && n.l(o),
            t = X(o);
            for (let a = 0; a < l.length; a += 1)
                l[a].l(o);
            o.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", "g-methodology svelte-7ih814")
        },
        m(i, o) {
            M(i, e, o),
            n && n.m(e, null),
            E(e, t);
            for (let a = 0; a < l.length; a += 1)
                l[a] && l[a].m(e, null)
        },
        p(i, o) {
            if (i[0] ? n ? n.p(i, o) : (n = Pi(i),
            n.c(),
            n.m(e, t)) : n && (n.d(1),
            n = null),
            o & 2) {
                s = Oe(i[1]);
                let a;
                for (a = 0; a < s.length; a += 1) {
                    const f = Si(i, s, a);
                    l[a] ? l[a].p(f, o) : (l[a] = Mi(f),
                    l[a].c(),
                    l[a].m(e, null))
                }
                for (; a < l.length; a += 1)
                    l[a].d(1);
                l.length = s.length
            }
        },
        d(i) {
            i && p(e),
            n && n.d(),
            ct(l, i)
        }
    }
}
function Y4(r) {
    let e, t;
    return e = new Qt({
        props: {
            marginInline: !0,
            $$slots: {
                default: [K4]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, [s]) {
            const l = {};
            s & 259 && (l.$$scope = {
                dirty: s,
                ctx: n
            }),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function Z4(r, e, t) {
    let n, s, l;
    Ee(r, Ve, o => t(3, l = o));
    let {props: i} = e;
    return r.$$set = o => {
        "props"in o && t(2, i = o.props)
    }
    ,
    r.$$.update = () => {
        r.$$.dirty & 12 && t(1, {text: n=[], hed: s="Methodology"} = ze(i, l), n, (t(0, s),
        t(2, i),
        t(3, l)))
    }
    ,
    [s, n, i, l]
}
class z6 extends x {
    constructor(e) {
        super(),
        $(this, e, Z4, Y4, Z, {
            props: 2
        })
    }
}
function X4(r) {
    let e, t;
    return e = new ln({
        props: {
            message: r[0]
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p: q,
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function Q4(r) {
    let e, t;
    return e = new wt({
        props: {
            $$slots: {
                default: [X4]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, [s]) {
            const l = {};
            s & 8 && (l.$$scope = {
                dirty: s,
                ctx: n
            }),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function J4(r, e, t) {
    let n;
    Ee(r, Na, i => t(2, n = i));
    let {type: s="unknown"} = e
      , l = `The ${s} component is missing. Please import it into <code>src/routes${n.route.id}/+page.svelte</code>.`;
    return r.$$set = i => {
        "type"in i && t(1, s = i.type)
    }
    ,
    [l, s]
}
class W6 extends x {
    constructor(e) {
        super(),
        $(this, e, J4, Q4, Z, {
            type: 1
        })
    }
}
function x4(r) {
    let e, t, n, s, l;
    return {
        c() {
            e = N("div"),
            t = N("div"),
            this.h()
        },
        l(i) {
            e = B(i, "DIV", {
                class: !0
            });
            var o = S(e);
            t = B(o, "DIV", {
                id: !0,
                class: !0,
                "data-position": !0,
                "data-size-key": !0
            }),
            S(t).forEach(p),
            o.forEach(p),
            this.h()
        },
        h() {
            g(t, "id", n = "mid" + r[0].id),
            g(t, "class", "place-ad"),
            g(t, "data-position", s = "mid" + r[0].id),
            g(t, "data-size-key", l = r[0].size || "default"),
            g(e, "class", "g-paid svelte-1va431l")
        },
        m(i, o) {
            M(i, e, o),
            E(e, t)
        },
        p(i, [o]) {
            o & 1 && n !== (n = "mid" + i[0].id) && g(t, "id", n),
            o & 1 && s !== (s = "mid" + i[0].id) && g(t, "data-position", s),
            o & 1 && l !== (l = i[0].size || "default") && g(t, "data-size-key", l)
        },
        i: q,
        o: q,
        d(i) {
            i && p(e)
        }
    }
}
function $4(r, e, t) {
    let {props: n} = e;
    return r.$$set = s => {
        "props"in s && t(0, n = s.props)
    }
    ,
    [n]
}
class U6 extends x {
    constructor(e) {
        super(),
        $(this, e, $4, x4, Z, {
            props: 0
        })
    }
}
function ji(r, e, t) {
    const n = r.slice();
    return n[12] = e[t],
    n
}
function Bi(r, e, t) {
    const n = r.slice();
    return n[15] = e[t],
    n
}
function Ni(r) {
    const e = r.slice()
      , t = e[0] < 740 ? e[12].thumbnail : e[12].thumbnailDesktop;
    return e[18] = t,
    e
}
function Di(r) {
    let e, t, n;
    return t = new bo({
        props: {
            leadin: r[4],
            hed: r[5],
            textAlign: r[3] || "left"
        }
    }),
    {
        c() {
            e = N("div"),
            W(t.$$.fragment),
            this.h()
        },
        l(s) {
            e = B(s, "DIV", {
                class: !0
            });
            var l = S(e);
            U(t.$$.fragment, l),
            l.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", "g-related-links_header svelte-7bmhyp")
        },
        m(s, l) {
            M(s, e, l),
            z(t, e, null),
            n = !0
        },
        p(s, l) {
            const i = {};
            l & 16 && (i.leadin = s[4]),
            l & 32 && (i.hed = s[5]),
            l & 8 && (i.textAlign = s[3] || "left"),
            t.$set(i)
        },
        i(s) {
            n || (w(t.$$.fragment, s),
            n = !0)
        },
        o(s) {
            y(t.$$.fragment, s),
            n = !1
        },
        d(s) {
            s && p(e),
            G(t)
        }
    }
}
function e5(r) {
    let e, t, n = r[12].thumbnail && r[12].thumbnailDesktop && t5(Ni(r));
    return {
        c() {
            n && n.c(),
            e = te()
        },
        l(s) {
            n && n.l(s),
            e = te()
        },
        m(s, l) {
            n && n.m(s, l),
            M(s, e, l),
            t = !0
        },
        p(s, l) {
            s[12].thumbnail && s[12].thumbnailDesktop && n.p(Ni(s), l)
        },
        i(s) {
            t || (w(n),
            t = !0)
        },
        o(s) {
            y(n),
            t = !1
        },
        d(s) {
            s && p(e),
            n && n.d(s)
        }
    }
}
function t5(r) {
    let e, t, n;
    const s = [r[18], {
        src: r[18].url
    }, {
        lazy: !0
    }];
    let l = {};
    for (let i = 0; i < s.length; i += 1)
        l = at(l, s[i]);
    return t = new ys({
        props: l
    }),
    {
        c() {
            e = N("div"),
            W(t.$$.fragment),
            this.h()
        },
        l(i) {
            e = B(i, "DIV", {
                class: !0
            });
            var o = S(e);
            U(t.$$.fragment, o),
            o.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", "g-related-links_thumb svelte-7bmhyp")
        },
        m(i, o) {
            M(i, e, o),
            z(t, e, null),
            n = !0
        },
        p(i, o) {
            const a = o & 65 ? et(s, [ot(i[18]), {
                src: i[18].url
            }, s[2]]) : {};
            t.$set(a)
        },
        i(i) {
            n || (w(t.$$.fragment, i),
            n = !0)
        },
        o(i) {
            y(t.$$.fragment, i),
            n = !1
        },
        d(i) {
            i && p(e),
            G(t)
        }
    }
}
function n5(r) {
    let e, t = r[12][r[15]] + "", n;
    return {
        c() {
            e = N("p"),
            n = ae(t),
            this.h()
        },
        l(s) {
            e = B(s, "P", {
                class: !0
            });
            var l = S(e);
            n = oe(l, t),
            l.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", "g-related-links_item-" + r[15] + " svelte-7bmhyp")
        },
        m(s, l) {
            M(s, e, l),
            E(e, n)
        },
        p: q,
        d(s) {
            s && p(e)
        }
    }
}
function r5(r) {
    let e, t = r[12][r[15]] + "", n;
    return {
        c() {
            e = N("time"),
            n = ae(t),
            this.h()
        },
        l(s) {
            e = B(s, "TIME", {
                class: !0
            });
            var l = S(e);
            n = oe(l, t),
            l.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", "g-related-links_item-" + r[15] + " svelte-7bmhyp")
        },
        m(s, l) {
            M(s, e, l),
            E(e, n)
        },
        p: q,
        d(s) {
            s && p(e)
        }
    }
}
function s5(r) {
    let e, t = r[12][r[15]] + "", n;
    return {
        c() {
            e = N("h4"),
            n = ae(t),
            this.h()
        },
        l(s) {
            e = B(s, "H4", {
                class: !0
            });
            var l = S(e);
            n = oe(l, t),
            l.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", "g-related-links_item-" + r[15] + " svelte-7bmhyp")
        },
        m(s, l) {
            M(s, e, l),
            E(e, n)
        },
        p: q,
        d(s) {
            s && p(e)
        }
    }
}
function Li(r) {
    let e;
    function t(l, i) {
        return l[15] === "headline" ? s5 : l[15] === "date" ? r5 : n5
    }
    let s = t(r)(r);
    return {
        c() {
            s.c(),
            e = te()
        },
        l(l) {
            s.l(l),
            e = te()
        },
        m(l, i) {
            s.m(l, i),
            M(l, e, i)
        },
        p(l, i) {
            s.p(l, i)
        },
        d(l) {
            l && p(e),
            s.d(l)
        }
    }
}
function Ri(r) {
    let e, t, n, s, l, i, o = r[7] === "standard" && e5(r), a = Oe(r[8]), f = [];
    for (let u = 0; u < a.length; u += 1)
        f[u] = Li(Bi(r, a, u));
    return {
        c() {
            e = N("div"),
            t = N("a"),
            o && o.c(),
            n = Q(),
            s = N("div");
            for (let u = 0; u < f.length; u += 1)
                f[u].c();
            l = Q(),
            this.h()
        },
        l(u) {
            e = B(u, "DIV", {
                class: !0
            });
            var c = S(e);
            t = B(c, "A", {
                href: !0,
                class: !0
            });
            var d = S(t);
            o && o.l(d),
            n = X(d),
            s = B(d, "DIV", {
                class: !0
            });
            var h = S(s);
            for (let _ = 0; _ < f.length; _ += 1)
                f[_].l(h);
            h.forEach(p),
            d.forEach(p),
            l = X(c),
            c.forEach(p),
            this.h()
        },
        h() {
            g(s, "class", "g-related-links_info svelte-7bmhyp"),
            g(t, "href", r[12].url),
            g(t, "class", "svelte-7bmhyp"),
            g(e, "class", "g-related-links_item svelte-7bmhyp")
        },
        m(u, c) {
            M(u, e, c),
            E(e, t),
            o && o.m(t, null),
            E(t, n),
            E(t, s);
            for (let d = 0; d < f.length; d += 1)
                f[d] && f[d].m(s, null);
            E(e, l),
            i = !0
        },
        p(u, c) {
            if (u[7] === "standard" && o.p(u, c),
            c & 320) {
                a = Oe(u[8]);
                let d;
                for (d = 0; d < a.length; d += 1) {
                    const h = Bi(u, a, d);
                    f[d] ? f[d].p(h, c) : (f[d] = Li(h),
                    f[d].c(),
                    f[d].m(s, null))
                }
                for (; d < f.length; d += 1)
                    f[d].d(1);
                f.length = a.length
            }
        },
        i(u) {
            i || (w(o),
            i = !0)
        },
        o(u) {
            y(o),
            i = !1
        },
        d(u) {
            u && p(e),
            o && o.d(),
            ct(f, u)
        }
    }
}
function l5(r) {
    let e, t, n, s, l = (r[4] || r[5]) && Di(r), i = Oe(r[6]), o = [];
    for (let f = 0; f < i.length; f += 1)
        o[f] = Ri(ji(r, i, f));
    const a = f => y(o[f], 1, 1, () => {
        o[f] = null
    }
    );
    return {
        c() {
            e = N("div"),
            l && l.c(),
            t = Q(),
            n = N("div");
            for (let f = 0; f < o.length; f += 1)
                o[f].c();
            this.h()
        },
        l(f) {
            e = B(f, "DIV", {
                class: !0
            });
            var u = S(e);
            l && l.l(u),
            t = X(u),
            n = B(u, "DIV", {
                class: !0
            });
            var c = S(n);
            for (let d = 0; d < o.length; d += 1)
                o[d].l(c);
            c.forEach(p),
            u.forEach(p),
            this.h()
        },
        h() {
            g(n, "class", "g-related-links_body"),
            g(e, "class", "g-related-links display-" + r[7] + " svelte-7bmhyp")
        },
        m(f, u) {
            M(f, e, u),
            l && l.m(e, null),
            E(e, t),
            E(e, n);
            for (let c = 0; c < o.length; c += 1)
                o[c] && o[c].m(n, null);
            s = !0
        },
        p(f, u) {
            if (f[4] || f[5] ? l ? (l.p(f, u),
            u & 48 && w(l, 1)) : (l = Di(f),
            l.c(),
            w(l, 1),
            l.m(e, t)) : l && (le(),
            y(l, 1, 1, () => {
                l = null
            }
            ),
            ie()),
            u & 449) {
                i = Oe(f[6]);
                let c;
                for (c = 0; c < i.length; c += 1) {
                    const d = ji(f, i, c);
                    o[c] ? (o[c].p(d, u),
                    w(o[c], 1)) : (o[c] = Ri(d),
                    o[c].c(),
                    w(o[c], 1),
                    o[c].m(n, null))
                }
                for (le(),
                c = i.length; c < o.length; c += 1)
                    a(c);
                ie()
            }
        },
        i(f) {
            if (!s) {
                w(l);
                for (let u = 0; u < i.length; u += 1)
                    w(o[u]);
                s = !0
            }
        },
        o(f) {
            y(l),
            o = o.filter(Boolean);
            for (let u = 0; u < o.length; u += 1)
                y(o[u]);
            s = !1
        },
        d(f) {
            f && p(e),
            l && l.d(),
            ct(o, f)
        }
    }
}
function i5(r) {
    let e, t;
    return e = new Tn({
        props: {
            marginInline: r[1] || !0,
            maxWidth: r[2] || "body",
            $$slots: {
                default: [l5]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, [s]) {
            const l = {};
            s & 2 && (l.marginInline = n[1] || !0),
            s & 4 && (l.maxWidth = n[2] || "body"),
            s & 524345 && (l.$$scope = {
                dirty: s,
                ctx: n
            }),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function o5(r, e, t) {
    let n, s, l, i, o, a;
    Ee(r, Ve, b => t(0, a = b));
    let {props: f} = e;
    const {links: u, display: c="standard"} = f;
    let {hideFields: d} = f;
    c === "compact" && (d += ", summary");
    const _ = ["headline", "summary", "byline", "date"].filter(b => d.indexOf(b) < 0);
    return r.$$set = b => {
        "props"in b && t(9, f = b.props)
    }
    ,
    r.$$.update = () => {
        r.$$.dirty & 513 && t(5, {hed: n, leadin: s, headerTextAlign: l, maxWidth: i, marginInline: o} = ze(f, a), n, (t(4, s),
        t(9, f),
        t(0, a)), (t(3, l),
        t(9, f),
        t(0, a)), (t(2, i),
        t(9, f),
        t(0, a)), (t(1, o),
        t(9, f),
        t(0, a)))
    }
    ,
    [a, o, i, l, s, n, u, c, _, f]
}
class F6 extends x {
    constructor(e) {
        super(),
        $(this, e, o5, i5, Z, {
            props: 9
        })
    }
}
const a5 = r => ({})
  , Vi = r => ({})
  , f5 = r => ({})
  , Gi = r => ({});
function u5(r) {
    let e, t, n, s, l, i, o;
    const a = r[21].background
      , f = We(a, r, r[20], Gi)
      , u = r[21].foreground
      , c = We(u, r, r[20], Vi);
    return {
        c() {
            e = N("svelte-scroller-outer"),
            t = N("svelte-scroller-background-container"),
            n = N("svelte-scroller-background"),
            f && f.c(),
            l = Q(),
            i = N("svelte-scroller-foreground"),
            c && c.c(),
            this.h()
        },
        l(d) {
            e = B(d, "SVELTE-SCROLLER-OUTER", {
                class: !0
            });
            var h = S(e);
            t = B(h, "SVELTE-SCROLLER-BACKGROUND-CONTAINER", {
                class: !0,
                style: !0
            });
            var _ = S(t);
            n = B(_, "SVELTE-SCROLLER-BACKGROUND", {
                class: !0
            });
            var b = S(n);
            f && f.l(b),
            b.forEach(p),
            _.forEach(p),
            l = X(h),
            i = B(h, "SVELTE-SCROLLER-FOREGROUND", {
                class: !0
            });
            var m = S(i);
            c && c.l(m),
            m.forEach(p),
            h.forEach(p),
            this.h()
        },
        h() {
            Ye(n, "class", "svelte-xdbafy"),
            Ye(t, "class", "background-container svelte-xdbafy"),
            Ye(t, "style", s = "" + (r[4] + r[3])),
            Ye(i, "class", "svelte-xdbafy"),
            Ye(e, "class", "svelte-xdbafy")
        },
        m(d, h) {
            M(d, e, h),
            E(e, t),
            E(t, n),
            f && f.m(n, null),
            r[22](n),
            E(e, l),
            E(e, i),
            c && c.m(i, null),
            r[23](i),
            r[24](e),
            o = !0
        },
        p(d, h) {
            f && f.p && (!o || h[0] & 1048576) && Ue(f, a, d, d[20], o ? He(a, d[20], h, f5) : Fe(d[20]), Gi),
            (!o || h[0] & 24 && s !== (s = "" + (d[4] + d[3]))) && Ye(t, "style", s),
            c && c.p && (!o || h[0] & 1048576) && Ue(c, u, d, d[20], o ? He(u, d[20], h, a5) : Fe(d[20]), Vi)
        },
        i(d) {
            o || (w(f, d),
            w(c, d),
            o = !0)
        },
        o(d) {
            y(f, d),
            y(c, d),
            o = !1
        },
        d(d) {
            d && p(e),
            f && f.d(d),
            r[22](null),
            c && c.d(d),
            r[23](null),
            r[24](null)
        }
    }
}
const mt = [];
let er;
if (typeof window != "undefined") {
    const r = () => mt.forEach(e => e());
    window.addEventListener("scroll", r),
    window.addEventListener("resize", r)
}
if (typeof IntersectionObserver != "undefined") {
    const r = new Map
      , e = new IntersectionObserver(t => {
        t.forEach(n => {
            const s = r.get(n.target)
              , l = mt.indexOf(s);
            n.isIntersecting ? l === -1 && mt.push(s) : (s(),
            l !== -1 && mt.splice(l, 1))
        }
        )
    }
    ,{
        rootMargin: "400px 0px"
    });
    er = {
        add: ({outer: t, update: n}) => {
            const {top: s, bottom: l} = t.getBoundingClientRect();
            s < window.innerHeight && l > 0 && mt.push(n),
            r.set(t, n),
            e.observe(t)
        }
        ,
        remove: ({outer: t, update: n}) => {
            const s = mt.indexOf(n);
            s !== -1 && mt.splice(s, 1),
            r.delete(t),
            e.unobserve(t)
        }
    }
} else
    er = {
        add: ({update: r}) => {
            mt.push(r)
        }
        ,
        remove: ({update: r}) => {
            const e = mt.indexOf(r);
            e !== -1 && mt.splice(e, 1)
        }
    };
function c5(r, e, t) {
    let n, s, l, i, o, a;
    Ee(r, _s, Y => t(19, a = Y));
    let {$$slots: f={}, $$scope: u} = e, {top: c=0} = e, {bottom: d=1} = e, {threshold: h=.5} = e, {query: _="section"} = e, {parallax: b=!1} = e, {index: m=0} = e, {count: v=0} = e, {offset: k=0} = e, {progress: A=0} = e, {visible: j=!1} = e, P, T, O, D, I, ee = 0, K, ne = 0, R = 1;
    vt( () => {
        I = T.querySelectorAll(_),
        t(6, v = I.length),
        se();
        const Y = {
            outer: P,
            update: se
        };
        return er.add(Y),
        () => er.remove(Y)
    }
    );
    function se() {
        if (!T)
            return;
        const Y = P.getBoundingClientRect();
        D = Y.left,
        t(18, R = Y.right - D);
        const L = T.getBoundingClientRect()
          , re = O.getBoundingClientRect();
        t(9, j = L.top < ee && L.bottom > 0);
        const ce = L.bottom - L.top
          , Ce = re.bottom - re.top
          , Ge = s - n;
        t(8, A = (n - L.top) / (ce - Ge)),
        A <= 0 ? (t(17, ne = 0),
        t(16, K = !1)) : A >= 1 ? (t(17, ne = b ? ce - Ce : ce - Ge),
        t(16, K = !1)) : (t(17, ne = b ? Math.round(n - A * (Ce - Ge)) : n),
        t(16, K = !0));
        for (let Se = 0; Se < I.length; Se++) {
            const ye = I[Se]
              , {top: V} = ye.getBoundingClientRect()
              , Be = I[Se + 1]
              , H = Be ? Be.getBoundingClientRect().top : L.bottom;
            if (t(7, k = (l - V) / (H - V)),
            H >= l) {
                t(5, m = Se);
                break
            }
        }
    }
    function F(Y) {
        me[Y ? "unshift" : "push"]( () => {
            O = Y,
            t(2, O)
        }
        )
    }
    function ue(Y) {
        me[Y ? "unshift" : "push"]( () => {
            T = Y,
            t(1, T)
        }
        )
    }
    function fe(Y) {
        me[Y ? "unshift" : "push"]( () => {
            P = Y,
            t(0, P)
        }
        )
    }
    return r.$$set = Y => {
        "top"in Y && t(10, c = Y.top),
        "bottom"in Y && t(11, d = Y.bottom),
        "threshold"in Y && t(12, h = Y.threshold),
        "query"in Y && t(13, _ = Y.query),
        "parallax"in Y && t(14, b = Y.parallax),
        "index"in Y && t(5, m = Y.index),
        "count"in Y && t(6, v = Y.count),
        "offset"in Y && t(7, k = Y.offset),
        "progress"in Y && t(8, A = Y.progress),
        "visible"in Y && t(9, j = Y.visible),
        "$$scope"in Y && t(20, u = Y.$$scope)
    }
    ,
    r.$$.update = () => {
        r.$$.dirty[0] & 524288 && t(15, ee = a),
        r.$$.dirty[0] & 33792 && (n = Math.round(c * ee)),
        r.$$.dirty[0] & 34816 && (s = Math.round(d * ee)),
        r.$$.dirty[0] & 36864 && (l = Math.round(h * ee)),
        r.$$.dirty[0] & 23552 && se(),
        r.$$.dirty[0] & 196608 && t(4, i = `
		position: ${K ? "fixed" : "absolute"};
		top: 0;
		transform: translate(0, ${ne}px);
		z-index: 1;
	`),
        r.$$.dirty[0] & 327680 && t(3, o = K ? `width:${R}px;` : "")
    }
    ,
    [P, T, O, o, i, m, v, k, A, j, c, d, h, _, b, ee, K, ne, R, a, u, f, F, ue, fe]
}
class d5 extends x {
    constructor(e) {
        super(),
        $(this, e, c5, u5, Z, {
            top: 10,
            bottom: 11,
            threshold: 12,
            query: 13,
            parallax: 14,
            index: 5,
            count: 6,
            offset: 7,
            progress: 8,
            visible: 9
        }, null, [-1, -1])
    }
}
function zi(r, e, t) {
    const n = r.slice();
    return n[8] = e[t],
    n
}
function h5(r) {
    let e, t = r[8] + "", n, s;
    return {
        c() {
            e = N("p"),
            n = ae(t),
            this.h()
        },
        l(l) {
            e = B(l, "P", {
                id: !0,
                class: !0
            });
            var i = S(e);
            n = oe(i, t),
            i.forEach(p),
            this.h()
        },
        h() {
            g(e, "id", r[0]),
            g(e, "class", s = Ft(r[3]) + " svelte-urmhfi")
        },
        m(l, i) {
            M(l, e, i),
            E(e, n)
        },
        p(l, i) {
            i & 4 && t !== (t = l[8] + "") && pe(n, t),
            i & 1 && g(e, "id", l[0]),
            i & 8 && s !== (s = Ft(l[3]) + " svelte-urmhfi") && g(e, "class", s)
        },
        d(l) {
            l && p(e)
        }
    }
}
function m5(r) {
    let e, t, n = r[8] + "", s;
    return {
        c() {
            e = N("p"),
            t = new Re(!1),
            this.h()
        },
        l(l) {
            e = B(l, "P", {
                id: !0,
                class: !0
            });
            var i = S(e);
            t = Le(i, !1),
            i.forEach(p),
            this.h()
        },
        h() {
            t.a = null,
            g(e, "id", r[0]),
            g(e, "class", s = Ft(r[3]) + " svelte-urmhfi")
        },
        m(l, i) {
            M(l, e, i),
            t.m(n, e)
        },
        p(l, i) {
            i & 4 && n !== (n = l[8] + "") && t.p(n),
            i & 1 && g(e, "id", l[0]),
            i & 8 && s !== (s = Ft(l[3]) + " svelte-urmhfi") && g(e, "class", s)
        },
        d(l) {
            l && p(e)
        }
    }
}
function Wi(r) {
    let e;
    function t(l, i) {
        return l[1] ? m5 : h5
    }
    let n = t(r)
      , s = n(r);
    return {
        c() {
            s.c(),
            e = te()
        },
        l(l) {
            s.l(l),
            e = te()
        },
        m(l, i) {
            s.m(l, i),
            M(l, e, i)
        },
        p(l, i) {
            n === (n = t(l)) && s ? s.p(l, i) : (s.d(1),
            s = n(l),
            s && (s.c(),
            s.m(e.parentNode, e)))
        },
        d(l) {
            l && p(e),
            s.d(l)
        }
    }
}
function g5(r) {
    let e, t = Oe(r[2]), n = [];
    for (let s = 0; s < t.length; s += 1)
        n[s] = Wi(zi(r, t, s));
    return {
        c() {
            for (let s = 0; s < n.length; s += 1)
                n[s].c();
            e = te()
        },
        l(s) {
            for (let l = 0; l < n.length; l += 1)
                n[l].l(s);
            e = te()
        },
        m(s, l) {
            for (let i = 0; i < n.length; i += 1)
                n[i] && n[i].m(s, l);
            M(s, e, l)
        },
        p(s, [l]) {
            if (l & 15) {
                t = Oe(s[2]);
                let i;
                for (i = 0; i < t.length; i += 1) {
                    const o = zi(s, t, i);
                    n[i] ? n[i].p(o, l) : (n[i] = Wi(o),
                    n[i].c(),
                    n[i].m(e.parentNode, e))
                }
                for (; i < n.length; i += 1)
                    n[i].d(1);
                n.length = t.length
            }
        },
        i: q,
        o: q,
        d(s) {
            s && p(e),
            ct(n, s)
        }
    }
}
function p5(r, e, t) {
    let n, {text: s=""} = e, {renderHtml: l=!0} = e, {generateParagraphs: i=!0} = e, {newLineToken: o=`

`} = e, {id: a=null} = e, {className: f=""} = e, u;
    return r.$$set = c => {
        "text"in c && t(4, s = c.text),
        "renderHtml"in c && t(1, l = c.renderHtml),
        "generateParagraphs"in c && t(5, i = c.generateParagraphs),
        "newLineToken"in c && t(6, o = c.newLineToken),
        "id"in c && t(0, a = c.id),
        "className"in c && t(7, f = c.className)
    }
    ,
    r.$$.update = () => {
        r.$$.dirty & 128 && t(3, n = ["g-text"].concat(f.split(/ +/)).filter(Boolean).join(" ")),
        r.$$.dirty & 112 && (Array.isArray(s) ? s[0].value ? t(2, u = s.map(c => c.value)) : t(2, u = s) : i ? t(2, u = s.split(o)) : t(2, u = [s])),
        r.$$.dirty & 5 && u.length > 1 && a && (console.warn(`shared/Text: id=${a} is not unique. The attribute will be ignored.`),
        t(0, a = null))
    }
    ,
    [a, l, u, n, s, i, o, f]
}
class on extends x {
    constructor(e) {
        super(),
        $(this, e, p5, g5, Z, {
            text: 4,
            renderHtml: 1,
            generateParagraphs: 5,
            newLineToken: 6,
            id: 0,
            className: 7
        })
    }
}
function _5(r) {
    let e, t, n;
    const s = r[1].default
      , l = We(s, r, r[0], null);
    return {
        c() {
            e = N("div"),
            t = N("span"),
            l && l.c(),
            this.h()
        },
        l(i) {
            e = B(i, "DIV", {
                class: !0
            });
            var o = S(e);
            t = B(o, "SPAN", {
                class: !0
            });
            var a = S(t);
            l && l.l(a),
            a.forEach(p),
            o.forEach(p),
            this.h()
        },
        h() {
            g(t, "class", "g-screenreader"),
            g(e, "class", "g-screenreader-only svelte-cfmrc5")
        },
        m(i, o) {
            M(i, e, o),
            E(e, t),
            l && l.m(t, null),
            n = !0
        },
        p(i, [o]) {
            l && l.p && (!n || o & 1) && Ue(l, s, i, i[0], n ? He(s, i[0], o, null) : Fe(i[0]), null)
        },
        i(i) {
            n || (w(l, i),
            n = !0)
        },
        o(i) {
            y(l, i),
            n = !1
        },
        d(i) {
            i && p(e),
            l && l.d(i)
        }
    }
}
function b5(r, e, t) {
    let {$$slots: n={}, $$scope: s} = e;
    return r.$$set = l => {
        "$$scope"in l && t(0, s = l.$$scope)
    }
    ,
    [s, n]
}
class Sa extends x {
    constructor(e) {
        super(),
        $(this, e, b5, _5, Z, {})
    }
}
const {setTimeout: Ui, window: _n} = Da;
function Fi(r, e, t) {
    const n = r.slice();
    return n[79] = e[t],
    n[81] = t,
    n
}
const v5 = r => ({
    enabled: r[0] & 2
})
  , Hi = r => ({
    enabled: r[1]
});
function w5(r) {
    let e, t, n, s, l = r[28].id + "", i, o;
    return {
        c() {
            e = N("p"),
            t = ae("no content provided. (Active: "),
            n = ae(r[5]),
            s = ae("/"),
            i = ae(l),
            o = ae(")"),
            this.h()
        },
        l(a) {
            e = B(a, "P", {
                class: !0
            });
            var f = S(e);
            t = oe(f, "no content provided. (Active: "),
            n = oe(f, r[5]),
            s = oe(f, "/"),
            i = oe(f, l),
            o = oe(f, ")"),
            f.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", "scrollstory-fallback svelte-84p710")
        },
        m(a, f) {
            M(a, e, f),
            E(e, t),
            E(e, n),
            E(e, s),
            E(e, i),
            E(e, o)
        },
        p(a, f) {
            f[0] & 32 && pe(n, a[5]),
            f[0] & 268435456 && l !== (l = a[28].id + "") && pe(i, l)
        },
        d(a) {
            a && p(e)
        }
    }
}
function qi(r) {
    let e, t, n;
    var s = r[11];
    function l(i, o) {
        return {
            props: {
                items: i[0],
                stepperTheme: i[9],
                stepperClick: i[8],
                stepperPosition: i[10]
            }
        }
    }
    return s && (e = $e(s, l(r)),
    e.$on("click", r[32])),
    {
        c() {
            e && W(e.$$.fragment),
            t = te()
        },
        l(i) {
            e && U(e.$$.fragment, i),
            t = te()
        },
        m(i, o) {
            e && z(e, i, o),
            M(i, t, o),
            n = !0
        },
        p(i, o) {
            if (o[0] & 2048 && s !== (s = i[11])) {
                if (e) {
                    le();
                    const a = e;
                    y(a.$$.fragment, 1, 0, () => {
                        G(a, 1)
                    }
                    ),
                    ie()
                }
                s ? (e = $e(s, l(i)),
                e.$on("click", i[32]),
                W(e.$$.fragment),
                w(e.$$.fragment, 1),
                z(e, t.parentNode, t)) : e = null
            } else if (s) {
                const a = {};
                o[0] & 1 && (a.items = i[0]),
                o[0] & 512 && (a.stepperTheme = i[9]),
                o[0] & 256 && (a.stepperClick = i[8]),
                o[0] & 1024 && (a.stepperPosition = i[10]),
                e.$set(a)
            }
        },
        i(i) {
            n || (e && w(e.$$.fragment, i),
            n = !0)
        },
        o(i) {
            e && y(e.$$.fragment, i),
            n = !1
        },
        d(i) {
            i && p(t),
            e && G(e, i)
        }
    }
}
function y5(r) {
    let e, t, n;
    const s = r[51].default
      , l = We(s, r, r[62], null)
      , i = l || w5(r);
    let o = r[7] && r[0].length && qi(r);
    return {
        c() {
            e = N("svelte-scrollstory-background"),
            i && i.c(),
            t = Q(),
            o && o.c(),
            this.h()
        },
        l(a) {
            e = B(a, "SVELTE-SCROLLSTORY-BACKGROUND", {
                slot: !0,
                class: !0
            });
            var f = S(e);
            i && i.l(f),
            t = X(f),
            o && o.l(f),
            f.forEach(p),
            this.h()
        },
        h() {
            Ye(e, "slot", "background"),
            Ye(e, "class", "svelte-84p710")
        },
        m(a, f) {
            M(a, e, f),
            i && i.m(e, null),
            E(e, t),
            o && o.m(e, null),
            r[53](e),
            n = !0
        },
        p(a, f) {
            l ? l.p && (!n || f[2] & 1) && Ue(l, s, a, a[62], n ? He(s, a[62], f, null) : Fe(a[62]), null) : i && i.p && (!n || f[0] & 268435488) && i.p(a, n ? f : [-1, -1, -1]),
            a[7] && a[0].length ? o ? (o.p(a, f),
            f[0] & 129 && w(o, 1)) : (o = qi(a),
            o.c(),
            w(o, 1),
            o.m(e, null)) : o && (le(),
            y(o, 1, 1, () => {
                o = null
            }
            ),
            ie())
        },
        i(a) {
            n || (w(i, a),
            w(o),
            n = !0)
        },
        o(a) {
            y(i, a),
            y(o),
            n = !1
        },
        d(a) {
            a && p(e),
            i && i.d(a),
            o && o.d(),
            r[53](null)
        }
    }
}
function Ki(r) {
    let e, t;
    return e = new Sa({
        props: {
            $$slots: {
                default: [k5]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, s) {
            const l = {};
            s[0] & 8192 | s[2] & 1 && (l.$$scope = {
                dirty: s,
                ctx: n
            }),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function k5(r) {
    let e;
    return {
        c() {
            e = ae(r[13])
        },
        l(t) {
            e = oe(t, r[13])
        },
        m(t, n) {
            M(t, e, n)
        },
        p(t, n) {
            n[0] & 8192 && pe(e, t[13])
        },
        d(t) {
            t && p(e)
        }
    }
}
function Yi(r) {
    let e, t = r[79].markup + "", n;
    return {
        c() {
            e = new Re(!1),
            n = te(),
            this.h()
        },
        l(s) {
            e = Le(s, !1),
            n = te(),
            this.h()
        },
        h() {
            e.a = n
        },
        m(s, l) {
            e.m(t, s, l),
            M(s, n, l)
        },
        p(s, l) {
            l[0] & 1 && t !== (t = s[79].markup + "") && e.p(t)
        },
        d(s) {
            s && (p(n),
            e.d())
        }
    }
}
function Zi(r) {
    let e, t, n;
    var s = r[79].component;
    function l(i, o) {
        return {
            props: {
                props: i[79].props || {},
                isActive: i[79].active,
                items: i[0],
                scrollProgress: i[19],
                activeIndex: i[5],
                activeItemOffset: i[18]
            }
        }
    }
    return s && (e = $e(s, l(r))),
    {
        c() {
            e && W(e.$$.fragment),
            t = te()
        },
        l(i) {
            e && U(e.$$.fragment, i),
            t = te()
        },
        m(i, o) {
            e && z(e, i, o),
            M(i, t, o),
            n = !0
        },
        p(i, o) {
            if (o[0] & 1 && s !== (s = i[79].component)) {
                if (e) {
                    le();
                    const a = e;
                    y(a.$$.fragment, 1, 0, () => {
                        G(a, 1)
                    }
                    ),
                    ie()
                }
                s ? (e = $e(s, l(i)),
                W(e.$$.fragment),
                w(e.$$.fragment, 1),
                z(e, t.parentNode, t)) : e = null
            } else if (s) {
                const a = {};
                o[0] & 1 && (a.props = i[79].props || {}),
                o[0] & 1 && (a.isActive = i[79].active),
                o[0] & 1 && (a.items = i[0]),
                o[0] & 524288 && (a.scrollProgress = i[19]),
                o[0] & 32 && (a.activeIndex = i[5]),
                o[0] & 262144 && (a.activeItemOffset = i[18]),
                e.$set(a)
            }
        },
        i(i) {
            n || (e && w(e.$$.fragment, i),
            n = !0)
        },
        o(i) {
            e && y(e.$$.fragment, i),
            n = !1
        },
        d(i) {
            i && p(t),
            e && G(e, i)
        }
    }
}
function Xi(r) {
    let e, t, n, s;
    const l = [E5, T5]
      , i = [];
    function o(a, f) {
        var u;
        return typeof a[79].text == "string" ? 0 : typeof a[79].text == "object" && ((u = a[79].text) != null && u.value) ? 1 : -1
    }
    return ~(e = o(r)) && (t = i[e] = l[e](r)),
    {
        c() {
            t && t.c(),
            n = te()
        },
        l(a) {
            t && t.l(a),
            n = te()
        },
        m(a, f) {
            ~e && i[e].m(a, f),
            M(a, n, f),
            s = !0
        },
        p(a, f) {
            let u = e;
            e = o(a),
            e === u ? ~e && i[e].p(a, f) : (t && (le(),
            y(i[u], 1, 1, () => {
                i[u] = null
            }
            ),
            ie()),
            ~e ? (t = i[e],
            t ? t.p(a, f) : (t = i[e] = l[e](a),
            t.c()),
            w(t, 1),
            t.m(n.parentNode, n)) : t = null)
        },
        i(a) {
            s || (w(t),
            s = !0)
        },
        o(a) {
            y(t),
            s = !1
        },
        d(a) {
            a && p(n),
            ~e && i[e].d(a)
        }
    }
}
function T5(r) {
    let e, t;
    const n = [{
        text: r[79].text.value
    }, r[79].text];
    let s = {};
    for (let l = 0; l < n.length; l += 1)
        s = at(s, n[l]);
    return e = new on({
        props: s
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(l) {
            U(e.$$.fragment, l)
        },
        m(l, i) {
            z(e, l, i),
            t = !0
        },
        p(l, i) {
            const o = i[0] & 1 ? et(n, [{
                text: l[79].text.value
            }, ot(l[79].text)]) : {};
            e.$set(o)
        },
        i(l) {
            t || (w(e.$$.fragment, l),
            t = !0)
        },
        o(l) {
            y(e.$$.fragment, l),
            t = !1
        },
        d(l) {
            G(e, l)
        }
    }
}
function E5(r) {
    let e, t;
    return e = new on({
        props: {
            text: r[79].text
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, s) {
            const l = {};
            s[0] & 1 && (l.text = n[79].text),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function Qi(r) {
    let e, t;
    return e = new Sa({
        props: {
            $$slots: {
                default: [I5]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, s) {
            const l = {};
            s[0] & 1 | s[2] & 1 && (l.$$scope = {
                dirty: s,
                ctx: n
            }),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function I5(r) {
    let e = r[79].altText + "", t;
    return {
        c() {
            t = ae(e)
        },
        l(n) {
            t = oe(n, e)
        },
        m(n, s) {
            M(n, t, s)
        },
        p(n, s) {
            s[0] & 1 && e !== (e = n[79].altText + "") && pe(t, e)
        },
        d(n) {
            n && p(t)
        }
    }
}
function Ji(r) {
    let e, t, n = r[30](r[79].component), s, l, i, o, a, f, u = r[79].markup && Yi(r), c = n && Zi(r), d = r[79].text && Xi(r), h = r[79].altText && Qi(r);
    return {
        c() {
            e = N("div"),
            u && u.c(),
            t = Q(),
            c && c.c(),
            s = Q(),
            d && d.c(),
            l = Q(),
            h && h.c(),
            i = Q(),
            this.h()
        },
        l(_) {
            e = B(_, "DIV", {
                id: !0,
                style: !0,
                class: !0
            });
            var b = S(e);
            u && u.l(b),
            t = X(b),
            c && c.l(b),
            s = X(b),
            d && d.l(b),
            l = X(b),
            h && h.l(b),
            i = X(b),
            b.forEach(p),
            this.h()
        },
        h() {
            g(e, "id", o = r[79].id),
            g(e, "style", a = r[79]._style),
            g(e, "class", "scrollstory-item scrollstory-item-" + r[81] + " svelte-84p710"),
            J(e, "active", r[1] && r[79].active)
        },
        m(_, b) {
            M(_, e, b),
            u && u.m(e, null),
            E(e, t),
            c && c.m(e, null),
            E(e, s),
            d && d.m(e, null),
            E(e, l),
            h && h.m(e, null),
            E(e, i),
            f = !0
        },
        p(_, b) {
            _[79].markup ? u ? u.p(_, b) : (u = Yi(_),
            u.c(),
            u.m(e, t)) : u && (u.d(1),
            u = null),
            b[0] & 1 && (n = _[30](_[79].component)),
            n ? c ? (c.p(_, b),
            b[0] & 1 && w(c, 1)) : (c = Zi(_),
            c.c(),
            w(c, 1),
            c.m(e, s)) : c && (le(),
            y(c, 1, 1, () => {
                c = null
            }
            ),
            ie()),
            _[79].text ? d ? (d.p(_, b),
            b[0] & 1 && w(d, 1)) : (d = Xi(_),
            d.c(),
            w(d, 1),
            d.m(e, l)) : d && (le(),
            y(d, 1, 1, () => {
                d = null
            }
            ),
            ie()),
            _[79].altText ? h ? (h.p(_, b),
            b[0] & 1 && w(h, 1)) : (h = Qi(_),
            h.c(),
            w(h, 1),
            h.m(e, i)) : h && (le(),
            y(h, 1, 1, () => {
                h = null
            }
            ),
            ie()),
            (!f || b[0] & 1 && o !== (o = _[79].id)) && g(e, "id", o),
            (!f || b[0] & 1 && a !== (a = _[79]._style)) && g(e, "style", a),
            (!f || b[0] & 3) && J(e, "active", _[1] && _[79].active)
        },
        i(_) {
            f || (w(c),
            w(d),
            w(h),
            f = !0)
        },
        o(_) {
            y(c),
            y(d),
            y(h),
            f = !1
        },
        d(_) {
            _ && p(e),
            u && u.d(),
            c && c.d(),
            d && d.d(),
            h && h.d()
        }
    }
}
function A5(r) {
    let e, t, n = Oe(r[0]), s = [];
    for (let i = 0; i < n.length; i += 1)
        s[i] = Ji(Fi(r, n, i));
    const l = i => y(s[i], 1, 1, () => {
        s[i] = null
    }
    );
    return {
        c() {
            for (let i = 0; i < s.length; i += 1)
                s[i].c();
            e = te()
        },
        l(i) {
            for (let o = 0; o < s.length; o += 1)
                s[o].l(i);
            e = te()
        },
        m(i, o) {
            for (let a = 0; a < s.length; a += 1)
                s[a] && s[a].m(i, o);
            M(i, e, o),
            t = !0
        },
        p(i, o) {
            if (o[0] & 1074528291) {
                n = Oe(i[0]);
                let a;
                for (a = 0; a < n.length; a += 1) {
                    const f = Fi(i, n, a);
                    s[a] ? (s[a].p(f, o),
                    w(s[a], 1)) : (s[a] = Ji(f),
                    s[a].c(),
                    w(s[a], 1),
                    s[a].m(e.parentNode, e))
                }
                for (le(),
                a = n.length; a < s.length; a += 1)
                    l(a);
                ie()
            }
        },
        i(i) {
            if (!t) {
                for (let o = 0; o < n.length; o += 1)
                    w(s[o]);
                t = !0
            }
        },
        o(i) {
            s = s.filter(Boolean);
            for (let o = 0; o < s.length; o += 1)
                y(s[o]);
            t = !1
        },
        d(i) {
            i && p(e),
            ct(s, i)
        }
    }
}
function C5(r) {
    let e, t, n, s, l = r[13] && Ki(r);
    const i = r[51].foreground
      , o = We(i, r, r[62], Hi)
      , a = o || A5(r);
    return {
        c() {
            e = N("svelte-scrollstory-foreground"),
            t = N("div"),
            l && l.c(),
            n = Q(),
            a && a.c(),
            this.h()
        },
        l(f) {
            e = B(f, "SVELTE-SCROLLSTORY-FOREGROUND", {
                slot: !0,
                class: !0
            });
            var u = S(e);
            t = B(u, "DIV", {
                class: !0
            });
            var c = S(t);
            l && l.l(c),
            n = X(c),
            a && a.l(c),
            c.forEach(p),
            u.forEach(p),
            this.h()
        },
        h() {
            g(t, "class", "scrollstory-items svelte-84p710"),
            J(t, "has-custom-foreground", r[34].foreground),
            Ye(e, "slot", "foreground"),
            Ye(e, "class", "svelte-84p710")
        },
        m(f, u) {
            M(f, e, u),
            E(e, t),
            l && l.m(t, null),
            E(t, n),
            a && a.m(t, null),
            s = !0
        },
        p(f, u) {
            f[13] ? l ? (l.p(f, u),
            u[0] & 8192 && w(l, 1)) : (l = Ki(f),
            l.c(),
            w(l, 1),
            l.m(t, n)) : l && (le(),
            y(l, 1, 1, () => {
                l = null
            }
            ),
            ie()),
            o ? o.p && (!s || u[0] & 2 | u[2] & 1) && Ue(o, i, f, f[62], s ? He(i, f[62], u, v5) : Fe(f[62]), Hi) : a && a.p && (!s || u[0] & 786467) && a.p(f, s ? u : [-1, -1, -1]),
            (!s || u[1] & 8) && J(t, "has-custom-foreground", f[34].foreground)
        },
        i(f) {
            s || (w(l),
            w(a, f),
            s = !0)
        },
        o(f) {
            y(l),
            y(a, f),
            s = !1
        },
        d(f) {
            f && p(e),
            l && l.d(),
            a && a.d(f)
        }
    }
}
function xi(r) {
    let e, t, n, s, l, i = "x", o, a, f, u, c = (typeof r[19] == "number" && r[19] > 0 ? r[19].toFixed(3) : 0) + "", d, h, _, b, m = (typeof r[19] == "number" && r[18] ? r[18].toFixed(3) : 0) + "", v, k, A, j, P, T, O, D, I, ee = r[0].length + "", K, ne, R, se, F, ue, fe, Y, L, re, ce, Ce, Ge, Se, ye, V, Be, H, ke = r[1] ? "Disable" : "Enable", _e, Ke, Ie, Xe, Me = r[28] && $i(r);
    return {
        c() {
            e = N("div"),
            t = N("div"),
            n = Q(),
            s = N("div"),
            l = N("button"),
            l.textContent = i,
            o = Q(),
            a = N("ul"),
            f = N("li"),
            u = ae("ScrollProgress: "),
            d = ae(c),
            h = Q(),
            _ = N("li"),
            b = ae("Active Item Offset: "),
            v = ae(m),
            k = Q(),
            Me && Me.c(),
            A = Q(),
            j = N("li"),
            P = ae("Visible: "),
            T = ae(r[20]),
            O = Q(),
            D = N("li"),
            I = ae("Item Count: "),
            K = ae(ee),
            ne = Q(),
            R = N("li"),
            se = ae("Background: "),
            F = ae(r[3]),
            ue = ae("px x "),
            fe = ae(r[2]),
            Y = ae("px"),
            L = Q(),
            re = N("li"),
            ce = ae("Threshold: "),
            Ce = ae(r[12]),
            Ge = Q(),
            Se = N("li"),
            ye = ae("Fixed state: "),
            V = ae(r[21]),
            Be = Q(),
            H = N("button"),
            _e = ae(ke),
            Ke = ae(" scrollstory"),
            this.h()
        },
        l(be) {
            e = B(be, "DIV", {
                class: !0,
                style: !0
            });
            var ve = S(e);
            t = B(ve, "DIV", {
                class: !0,
                style: !0
            }),
            S(t).forEach(p),
            n = X(ve),
            s = B(ve, "DIV", {
                class: !0,
                style: !0
            });
            var tt = S(s);
            l = B(tt, "BUTTON", {
                class: !0,
                "data-svelte-h": !0
            }),
            It(l) !== "svelte-1crkkes" && (l.textContent = i),
            o = X(tt),
            a = B(tt, "UL", {});
            var Ne = S(a);
            f = B(Ne, "LI", {
                class: !0
            });
            var dt = S(f);
            u = oe(dt, "ScrollProgress: "),
            d = oe(dt, c),
            dt.forEach(p),
            h = X(Ne),
            _ = B(Ne, "LI", {
                class: !0
            });
            var Ot = S(_);
            b = oe(Ot, "Active Item Offset: "),
            v = oe(Ot, m),
            Ot.forEach(p),
            k = X(Ne),
            Me && Me.l(Ne),
            A = X(Ne),
            j = B(Ne, "LI", {
                class: !0
            });
            var yt = S(j);
            P = oe(yt, "Visible: "),
            T = oe(yt, r[20]),
            yt.forEach(p),
            O = X(Ne),
            D = B(Ne, "LI", {
                class: !0
            });
            var kt = S(D);
            I = oe(kt, "Item Count: "),
            K = oe(kt, ee),
            kt.forEach(p),
            ne = X(Ne),
            R = B(Ne, "LI", {
                class: !0
            });
            var ft = S(R);
            se = oe(ft, "Background: "),
            F = oe(ft, r[3]),
            ue = oe(ft, "px x "),
            fe = oe(ft, r[2]),
            Y = oe(ft, "px"),
            ft.forEach(p),
            L = X(Ne),
            re = B(Ne, "LI", {
                class: !0
            });
            var Mt = S(re);
            ce = oe(Mt, "Threshold: "),
            Ce = oe(Mt, r[12]),
            Mt.forEach(p),
            Ge = X(Ne),
            Se = B(Ne, "LI", {
                class: !0
            });
            var jt = S(Se);
            ye = oe(jt, "Fixed state: "),
            V = oe(jt, r[21]),
            jt.forEach(p),
            Ne.forEach(p),
            Be = X(tt),
            H = B(tt, "BUTTON", {
                class: !0
            });
            var ht = S(H);
            _e = oe(ht, ke),
            Ke = oe(ht, " scrollstory"),
            ht.forEach(p),
            tt.forEach(p),
            ve.forEach(p),
            this.h()
        },
        h() {
            g(t, "class", "scrollstory-debug_threshold svelte-84p710"),
            st(t, "top", r[12] * 100 + "vh"),
            g(l, "class", "scrollstory-debug_close svelte-84p710"),
            g(f, "class", "svelte-84p710"),
            g(_, "class", "svelte-84p710"),
            g(j, "class", "svelte-84p710"),
            g(D, "class", "svelte-84p710"),
            g(R, "class", "svelte-84p710"),
            g(re, "class", "svelte-84p710"),
            g(Se, "class", "svelte-84p710"),
            g(H, "class", "scrollstory-debug_disable svelte-84p710"),
            g(s, "class", "scrollstory-debug_panel svelte-84p710"),
            g(s, "style", ""),
            g(e, "class", "scrollstory-debug svelte-84p710"),
            g(e, "style", r[29])
        },
        m(be, ve) {
            M(be, e, ve),
            E(e, t),
            E(e, n),
            E(e, s),
            E(s, l),
            E(s, o),
            E(s, a),
            E(a, f),
            E(f, u),
            E(f, d),
            E(a, h),
            E(a, _),
            E(_, b),
            E(_, v),
            E(a, k),
            Me && Me.m(a, null),
            E(a, A),
            E(a, j),
            E(j, P),
            E(j, T),
            E(a, O),
            E(a, D),
            E(D, I),
            E(D, K),
            E(a, ne),
            E(a, R),
            E(R, se),
            E(R, F),
            E(R, ue),
            E(R, fe),
            E(R, Y),
            E(a, L),
            E(a, re),
            E(re, ce),
            E(re, Ce),
            E(a, Ge),
            E(a, Se),
            E(Se, ye),
            E(Se, V),
            E(s, Be),
            E(s, H),
            E(H, _e),
            E(H, Ke),
            Ie || (Xe = [ge(l, "click", r[60]), ge(H, "click", r[61])],
            Ie = !0)
        },
        p(be, ve) {
            ve[0] & 4096 && st(t, "top", be[12] * 100 + "vh"),
            ve[0] & 524288 && c !== (c = (typeof be[19] == "number" && be[19] > 0 ? be[19].toFixed(3) : 0) + "") && pe(d, c),
            ve[0] & 786432 && m !== (m = (typeof be[19] == "number" && be[18] ? be[18].toFixed(3) : 0) + "") && pe(v, m),
            be[28] ? Me ? Me.p(be, ve) : (Me = $i(be),
            Me.c(),
            Me.m(a, A)) : Me && (Me.d(1),
            Me = null),
            ve[0] & 1048576 && pe(T, be[20]),
            ve[0] & 1 && ee !== (ee = be[0].length + "") && pe(K, ee),
            ve[0] & 8 && pe(F, be[3]),
            ve[0] & 4 && pe(fe, be[2]),
            ve[0] & 4096 && pe(Ce, be[12]),
            ve[0] & 2097152 && pe(V, be[21]),
            ve[0] & 2 && ke !== (ke = be[1] ? "Disable" : "Enable") && pe(_e, ke),
            ve[0] & 536870912 && g(e, "style", be[29])
        },
        d(be) {
            be && p(e),
            Me && Me.d(),
            Ie = !1,
            St(Xe)
        }
    }
}
function $i(r) {
    let e, t, n, s, l = r[28].id + "", i;
    return {
        c() {
            e = N("li"),
            t = ae("Active Item Index: "),
            n = ae(r[5]),
            s = ae(", ID: "),
            i = ae(l),
            this.h()
        },
        l(o) {
            e = B(o, "LI", {
                class: !0
            });
            var a = S(e);
            t = oe(a, "Active Item Index: "),
            n = oe(a, r[5]),
            s = oe(a, ", ID: "),
            i = oe(a, l),
            a.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", "svelte-84p710")
        },
        m(o, a) {
            M(o, e, a),
            E(e, t),
            E(e, n),
            E(e, s),
            E(e, i)
        },
        p(o, a) {
            a[0] & 32 && pe(n, o[5]),
            a[0] & 268435456 && l !== (l = o[28].id + "") && pe(i, l)
        },
        d(o) {
            o && p(e)
        }
    }
}
function S5(r) {
    let e = !1, t = () => {
        e = !1
    }
    , n, s, l, i, o, a, f, u, c, d, h, _, b, m;
    xe(r[52]);
    function v(D) {
        r[54](D)
    }
    function k(D) {
        r[55](D)
    }
    function A(D) {
        r[56](D)
    }
    function j(D) {
        r[57](D)
    }
    function P(D) {
        r[58](D)
    }
    let T = {
        query: P5,
        top: r[26],
        bottom: r[27],
        threshold: r[12],
        $$slots: {
            foreground: [C5],
            background: [y5]
        },
        $$scope: {
            ctx: r
        }
    };
    r[20] !== void 0 && (T.visible = r[20]),
    r[17] !== void 0 && (T.index = r[17]),
    r[18] !== void 0 && (T.offset = r[18]),
    r[19] !== void 0 && (T.progress = r[19]),
    r[23] !== void 0 && (T.count = r[23]),
    l = new d5({
        props: T
    }),
    me.push( () => we(l, "visible", v)),
    me.push( () => we(l, "index", k)),
    me.push( () => we(l, "offset", A)),
    me.push( () => we(l, "progress", j)),
    me.push( () => we(l, "count", P));
    let O = r[4] && xi(r);
    return {
        c() {
            s = N("svelte-scrollstory"),
            W(l.$$.fragment),
            d = Q(),
            O && O.c(),
            h = te(),
            this.h()
        },
        l(D) {
            s = B(D, "SVELTE-SCROLLSTORY", {
                id: !0,
                class: !0,
                style: !0
            });
            var I = S(s);
            U(l.$$.fragment, I),
            I.forEach(p),
            d = X(D),
            O && O.l(D),
            h = te(),
            this.h()
        },
        h() {
            Ye(s, "id", r[6]),
            Ye(s, "class", c = (r[1] && typeof r[5] == "number" ? `active-index-${r[5]} active-id-${r[28].id}` : "") + " state-" + r[21] + " svelte-84p710"),
            Ye(s, "style", r[29]),
            J(s, "debug", r[4]),
            J(s, "enabled", r[1]),
            J(s, "stepper", r[7]),
            J(s, "visible", r[20]),
            J(s, "enable-pointer-events", r[14])
        },
        m(D, I) {
            M(D, s, I),
            z(l, s, null),
            r[59](s),
            M(D, d, I),
            O && O.m(D, I),
            M(D, h, I),
            _ = !0,
            b || (m = [ge(_n, "resize", r[31]), ge(_n, "keydown", r[33]), ge(_n, "scroll", () => {
                e = !0,
                clearTimeout(n),
                n = Ui(t, 100),
                r[52]()
            }
            )],
            b = !0)
        },
        p(D, I) {
            I[0] & 16777216 && !e && (e = !0,
            clearTimeout(n),
            scrollTo(_n.pageXOffset, D[24]),
            n = Ui(t, 100));
            const ee = {};
            I[0] & 67108864 && (ee.top = D[26]),
            I[0] & 134217728 && (ee.bottom = D[27]),
            I[0] & 4096 && (ee.threshold = D[12]),
            I[0] & 302788515 | I[1] & 8 | I[2] & 1 && (ee.$$scope = {
                dirty: I,
                ctx: D
            }),
            !i && I[0] & 1048576 && (i = !0,
            ee.visible = D[20],
            Te( () => i = !1)),
            !o && I[0] & 131072 && (o = !0,
            ee.index = D[17],
            Te( () => o = !1)),
            !a && I[0] & 262144 && (a = !0,
            ee.offset = D[18],
            Te( () => a = !1)),
            !f && I[0] & 524288 && (f = !0,
            ee.progress = D[19],
            Te( () => f = !1)),
            !u && I[0] & 8388608 && (u = !0,
            ee.count = D[23],
            Te( () => u = !1)),
            l.$set(ee),
            (!_ || I[0] & 64) && Ye(s, "id", D[6]),
            (!_ || I[0] & 270532642 && c !== (c = (D[1] && typeof D[5] == "number" ? `active-index-${D[5]} active-id-${D[28].id}` : "") + " state-" + D[21] + " svelte-84p710")) && Ye(s, "class", c),
            (!_ || I[0] & 536870912) && Ye(s, "style", D[29]),
            (!_ || I[0] & 270532658) && J(s, "debug", D[4]),
            (!_ || I[0] & 270532642) && J(s, "enabled", D[1]),
            (!_ || I[0] & 270532770) && J(s, "stepper", D[7]),
            (!_ || I[0] & 271581218) && J(s, "visible", D[20]),
            (!_ || I[0] & 270549026) && J(s, "enable-pointer-events", D[14]),
            D[4] ? O ? O.p(D, I) : (O = xi(D),
            O.c(),
            O.m(h.parentNode, h)) : O && (O.d(1),
            O = null)
        },
        i(D) {
            _ || (w(l.$$.fragment, D),
            _ = !0)
        },
        o(D) {
            y(l.$$.fragment, D),
            _ = !1
        },
        d(D) {
            D && (p(s),
            p(d),
            p(h)),
            G(l),
            r[59](null),
            O && O.d(D),
            b = !1,
            St(m)
        }
    }
}
let P5 = ".scrollstory-item";
function O5(r, e, t) {
    let n, s, l, i, o;
    Ee(r, bp, C => t(63, i = C)),
    Ee(r, _s, C => t(64, o = C));
    let {$$slots: a={}, $$scope: f} = e;
    const u = tr(a)
      , c = $r()
      , d = C => {}
    ;
    let {items: h=E_} = e
      , {id: _=Wn("g-scrollstory_")} = e
      , {debug: b=!1} = e
      , {enabled: m=!0} = e
      , {keyboard: v=!0} = e
      , {stepper: k=!1} = e
      , {stepperClick: A=!1} = e
      , {stepperTheme: j="standard"} = e
      , {stepperPosition: P="right"} = e
      , {stepperComponent: T=ka} = e
      , {threshold: O=.75} = e
      , {debugColor: D="rgba(255, 0, 0, 0.8)"} = e
      , {itemSpacing: I="70vh"} = e
      , {showTextAfterGraphic: ee=!0} = e
      , {textStartPosition: K="1rem"} = e
      , {textTheme: ne="standard"} = e
      , {onItemActive: R=d} = e
      , {onItemBlur: se=d} = e
      , {processItem: F=d} = e
      , {altText: ue=""} = e
      , {enablePointerEvents: fe=!1} = e;
    const Y = typeof window != "undefined";
    let L, re = 0, ce = 0, Ce = 0, Ge = 0, Se = !1, ye, V = {
        left: 0
    }, Be, H = 0, ke = 0, {backgroundHeight: _e=0} = e, {backgroundWidth: Ke=0} = e, {activeIndex: Ie=0} = e, Xe = h[Ie];
    const Me = {
        semiTransparent: ["--g-body-color: #fff", "--g-body-background-color: rgba(71,74,80,1)", "--scrollstory-item-opacity: 0.65"],
        dark: ["--g-body-color: #fff", "--g-body-background-color: #121212"],
        standard: ["--g-body-background-color: #fff"]
    }
      , be = C => C && Y ? typeof C == "function" : typeof (C == null ? void 0 : C.render) == "function"
      , ve = () => ({
        activeIndex: Ie,
        activeItemOffset: ce,
        fixedState: n,
        scrollCount: Ge,
        scrollProgress: Ce,
        visible: Se,
        backgroundWidth: Ke,
        backgroundHeight: _e
    })
      , tt = () => h || []
      , Ne = C => {
        if (typeof C != "number")
            throw new Error(`Expected "index" to be a number, but instead got a ${typeof C}`);
        return tt()[C]
    }
      , dt = C => !!Ne(C)
      , Ot = () => typeof Ie == "number" ? Ne(Ie) : void 0
      , yt = () => {
        t(1, m = !0),
        ft()
    }
      , kt = () => {
        t(1, m = !1)
    }
      , ft = () => {
        m && h.length && (t(5, Ie = re),
        t(0, h = h.map(C => {
            const Ae = !!C.active;
            let Qe = C.index === Ie;
            return C.active = Qe,
            !Qe && Ae ? (se(C),
            C.previousActive = !0) : C.previousActive = !1,
            Qe && !Ae && (t(28, Xe = C),
            R(C),
            c("indexchange", {
                index: Ie,
                item: C
            })),
            C
        }
        )))
    }
      , Mt = () => {
        c("fixedstatechange", {
            fixedState: n
        })
    }
      , jt = () => {
        c("visiblechange", {
            visible: Se
        })
    }
      , ht = () => {
        jn()
    }
      , cr = () => {
        c("scrollprogress", ve())
    }
      , Mn = () => {
        t(0, h = h.map( (C, Ae) => (Ae === Ie && (C.offset = ce),
        C))),
        c("activeitemoffset", {
            activeItemOffset: ce
        })
    }
      , an = () => {
        Be && (t(2, _e = Be.clientHeight),
        t(3, Ke = Be.clientWidth),
        _e ? (t(26, H = (o - _e) / 2 / o),
        t(27, ke = 1 - (o - _e) / 2 / o)) : (t(26, H = 0),
        t(27, ke = 1)),
        setTimeout(function() {
            window.dispatchEvent(new Event("scroll"))
        }, 200))
    }
      , jn = ko(function() {
        Y && window.dispatchEvent(new Event("resize"))
    }, 200)
      , Gt = C => {
        var Ae;
        if (i && dt(C)) {
            const Qe = (Ae = Ne(C)) == null ? void 0 : Ae.id;
            if (Qe) {
                const lt = document.getElementById(Qe);
                if (lt) {
                    const Pa = lt.getBoundingClientRect().top + window.scrollY + 20;
                    window.scrollTo({
                        behavior: "smooth",
                        top: Pa - i * O
                    })
                }
            }
        }
    }
      , dr = C => {
        var Qe, lt;
        const Ae = (lt = (Qe = C.target) == null ? void 0 : Qe.dataset) == null ? void 0 : lt.newindex;
        Number.isSafeInteger(parseInt(Ae)) && Gt(parseInt(Ae))
    }
      , hr = () => {
        const C = Ie + 1;
        dt(C) && Gt(C)
    }
      , mr = () => {
        const C = Ie - 1;
        dt(C) && Gt(C)
    }
      , gr = C => {
        if (v && Se) {
            let Ae = !0;
            switch (C.keyCode) {
            case 37:
                if (C.metaKey)
                    return;
                mr();
                break;
            case 39:
                hr();
                break;
            default:
                Ae = !1
            }
            Ae && C.preventDefault()
        }
    }
    ;
    vt(function() {
        an(),
        L == null || L.addEventListener("load", ht, !0),
        L == null || L.addEventListener("loadstart", ht, !0),
        [0, 100, 1e3, 2e3].forEach(C => {
            setTimeout(function() {
                jn()
            }, C)
        }
        )
    }),
    es(function() {
        L == null || L.removeEventListener("load", ht, !0),
        L == null || L.removeEventListener("loadstart", ht, !0)
    });
    function pr() {
        t(24, ye = _n.pageYOffset)
    }
    function _r(C) {
        me[C ? "unshift" : "push"]( () => {
            Be = C,
            t(25, Be)
        }
        )
    }
    function br(C) {
        Se = C,
        t(20, Se)
    }
    function vr(C) {
        re = C,
        t(17, re)
    }
    function wr(C) {
        ce = C,
        t(18, ce)
    }
    function yr(C) {
        Ce = C,
        t(19, Ce)
    }
    function kr(C) {
        Ge = C,
        t(23, Ge)
    }
    function Tr(C) {
        me[C ? "unshift" : "push"]( () => {
            L = C,
            t(22, L)
        }
        )
    }
    const Er = () => {
        t(4, b = !1)
    }
      , Ir = () => {
        m ? kt() : yt()
    }
    ;
    return r.$$set = C => {
        "items"in C && t(0, h = C.items),
        "id"in C && t(6, _ = C.id),
        "debug"in C && t(4, b = C.debug),
        "enabled"in C && t(1, m = C.enabled),
        "keyboard"in C && t(35, v = C.keyboard),
        "stepper"in C && t(7, k = C.stepper),
        "stepperClick"in C && t(8, A = C.stepperClick),
        "stepperTheme"in C && t(9, j = C.stepperTheme),
        "stepperPosition"in C && t(10, P = C.stepperPosition),
        "stepperComponent"in C && t(11, T = C.stepperComponent),
        "threshold"in C && t(12, O = C.threshold),
        "debugColor"in C && t(36, D = C.debugColor),
        "itemSpacing"in C && t(37, I = C.itemSpacing),
        "showTextAfterGraphic"in C && t(38, ee = C.showTextAfterGraphic),
        "textStartPosition"in C && t(39, K = C.textStartPosition),
        "textTheme"in C && t(40, ne = C.textTheme),
        "onItemActive"in C && t(41, R = C.onItemActive),
        "onItemBlur"in C && t(42, se = C.onItemBlur),
        "processItem"in C && t(43, F = C.processItem),
        "altText"in C && t(13, ue = C.altText),
        "enablePointerEvents"in C && t(14, fe = C.enablePointerEvents),
        "backgroundHeight"in C && t(2, _e = C.backgroundHeight),
        "backgroundWidth"in C && t(3, Ke = C.backgroundWidth),
        "activeIndex"in C && t(5, Ie = C.activeIndex),
        "$$scope"in C && t(62, f = C.$$scope)
    }
    ,
    r.$$.update = () => {
        r.$$.dirty[0] & 65 | r.$$.dirty[1] & 4096 && t(0, h = h.map( (C, Ae) => {
            C = Object.assign({}, vs(_, Ae), C),
            F(C);
            const Qe = [{
                rule: "--scrollstory-item-spacing",
                value: hn(C.itemSpacing || "")
            }, {
                rule: "--scrollstory-item-opacity",
                value: f2(parseFloat(`${C.itemOpacity}` || ""), 0, 1) ? `${C.itemOpacity}` : ""
            }, {
                rule: "--g-body-color",
                value: C.itemColor || ""
            }, {
                rule: "--g-body-background-color",
                value: C.itemBackgroundColor || ""
            }, {
                rule: "--g-body-padding-top",
                value: hn(C.itemPaddingTop || "")
            }, {
                rule: "--g-body-padding-bottom",
                value: hn(C.itemPaddingBottom || "")
            }, {
                rule: "--g-body-padding-left",
                value: bt(C.itemPaddingLeft || "")
            }, {
                rule: "--g-body-padding-right",
                value: bt(C.itemPaddingRight || "")
            }];
            return C._style = Qe.filter(lt => !!lt.value).map(lt => `${lt.rule}:${lt.value};`).join(" "),
            C
        }
        )),
        r.$$.dirty[0] & 524288 && t(21, n = typeof Ce == "number" && Ce <= 0 ? "pre" : typeof Ce == "number" && Ce >= 1 ? "post" : "fixed"),
        r.$$.dirty[1] & 512 && t(50, s = Me[ne] ? ["--g-body-padding-top: 0.75rem", "--g-body-padding-bottom: 0.75rem", "--g-body-padding-left: 0.75rem", "--g-body-padding-right: 0.75rem", ...Me[ne]] : []),
        r.$$.dirty[0] & 4110 | r.$$.dirty[1] & 524768 && t(29, l = [`--scrollstory-threshold-top: ${O * 100}vh`, `--scrollstory-threshold-left: ${V.left + Ke}px`, `--scrollstory-debug-color: ${m ? D : "rgba(255, 0, 0, 0.8)"}`, `--scrollstory-debug-transformY: ${O * 100 > 80 ? "calc(-100% - 20px)" : "20px"}`, `--scrollstory-items-start-auto: ${ee && _e ? _e : 0}px`, `--scrollstory-item-spacing: ${hn(I)}`, `--scrollstory-text-start: ${K}`, ...s].join(";")),
        r.$$.dirty[0] & 131072 && ft(),
        r.$$.dirty[0] & 2097152 && Mt(),
        r.$$.dirty[0] & 1048576 && jt(),
        r.$$.dirty[0] & 524288 && cr(),
        r.$$.dirty[0] & 262144 && Mn()
    }
    ,
    [h, m, _e, Ke, b, Ie, _, k, A, j, P, T, O, ue, fe, yt, kt, re, ce, Ce, Se, n, L, Ge, ye, Be, H, ke, Xe, l, be, an, dr, gr, u, v, D, I, ee, K, ne, R, se, F, ve, tt, Ne, dt, Ot, Gt, s, a, pr, _r, br, vr, wr, yr, kr, Tr, Er, Ir, f]
}
class M5 extends x {
    constructor(e) {
        super(),
        $(this, e, O5, S5, Z, {
            items: 0,
            id: 6,
            debug: 4,
            enabled: 1,
            keyboard: 35,
            stepper: 7,
            stepperClick: 8,
            stepperTheme: 9,
            stepperPosition: 10,
            stepperComponent: 11,
            threshold: 12,
            debugColor: 36,
            itemSpacing: 37,
            showTextAfterGraphic: 38,
            textStartPosition: 39,
            textTheme: 40,
            onItemActive: 41,
            onItemBlur: 42,
            processItem: 43,
            altText: 13,
            enablePointerEvents: 14,
            backgroundHeight: 2,
            backgroundWidth: 3,
            activeIndex: 5,
            getState: 44,
            getItems: 45,
            getItemByIndex: 46,
            isValidIndex: 47,
            getActiveItem: 48,
            enable: 15,
            disable: 16,
            scrollToIndex: 49
        }, null, [-1, -1, -1])
    }
    get getState() {
        return this.$$.ctx[44]
    }
    get getItems() {
        return this.$$.ctx[45]
    }
    get getItemByIndex() {
        return this.$$.ctx[46]
    }
    get isValidIndex() {
        return this.$$.ctx[47]
    }
    get getActiveItem() {
        return this.$$.ctx[48]
    }
    get enable() {
        return this.$$.ctx[15]
    }
    get disable() {
        return this.$$.ctx[16]
    }
    get scrollToIndex() {
        return this.$$.ctx[49]
    }
}
function j5(r) {
    let e, t, n, s, l, i, o;
    const a = r[13].default
      , f = We(a, r, r[12], null);
    return {
        c() {
            e = N("div"),
            t = N("div"),
            n = N("div"),
            s = N("div"),
            f && f.c(),
            this.h()
        },
        l(u) {
            e = B(u, "DIV", {
                class: !0,
                style: !0
            });
            var c = S(e);
            t = B(c, "DIV", {
                class: !0
            });
            var d = S(t);
            n = B(d, "DIV", {
                class: !0
            });
            var h = S(n);
            s = B(h, "DIV", {
                class: !0
            });
            var _ = S(s);
            f && f.l(_),
            _.forEach(p),
            h.forEach(p),
            d.forEach(p),
            c.forEach(p),
            this.h()
        },
        h() {
            g(s, "class", "g-fullbleed_content"),
            xe( () => r[14].call(s)),
            g(n, "class", "g-fullbleed_inner svelte-1djl7nv"),
            g(t, "class", "g-fullbleed_outer svelte-1djl7nv"),
            g(e, "class", i = "g-fullbleed g-fittype-" + r[0] + " svelte-1djl7nv"),
            g(e, "style", r[1])
        },
        m(u, c) {
            M(u, e, c),
            E(e, t),
            E(t, n),
            E(n, s),
            f && f.m(s, null),
            l = Dt(s, r[14].bind(s)),
            o = !0
        },
        p(u, [c]) {
            f && f.p && (!o || c & 4096) && Ue(f, a, u, u[12], o ? He(a, u[12], c, null) : Fe(u[12]), null),
            (!o || c & 1 && i !== (i = "g-fullbleed g-fittype-" + u[0] + " svelte-1djl7nv")) && g(e, "class", i),
            (!o || c & 2) && g(e, "style", u[1])
        },
        i(u) {
            o || (w(f, u),
            o = !0)
        },
        o(u) {
            y(f, u),
            o = !1
        },
        d(u) {
            u && p(e),
            f && f.d(u),
            l()
        }
    }
}
function B5(r, e, t) {
    let n, s, l, i, o, a, f;
    Ee(r, _s, O => t(10, a = O)),
    Ee(r, Ve, O => t(11, f = O));
    let {$$slots: u={}, $$scope: c} = e;
    const d = {
        cover: Ka,
        contain: Ya
    };
    let {fitType: h="cover"} = e, {marginTop: _=0} = e, {marginRight: b=0} = e, {marginBottom: m=0} = e, {marginLeft: v=0} = e, k = "", A, j;
    const P = ko( () => {
        t(1, k = Os({
            "--g-fullbleed-target-width": "auto",
            "--g-fullbleed-target-top": "0px",
            "--g-fullbleed-target-left": "0px",
            "--g-fullbleed-margin-top": `${Je(_)}px`,
            "--g-fullbleed-margin-right": `${Je(b)}px`,
            "--g-fullbleed-margin-bottom": `${Je(m)}px`,
            "--g-fullbleed-margin-left": `${Je(v)}px`,
            "--g-fullbleed-height": `${Je(o)}px`
        })),
        setTimeout( () => {
            const {width: O, height: D, x: I, y: ee} = l(i - s, o - n, A, j)
              , K = `${Je(O)}px`
              , ne = `${Je(D)}px`
              , R = `${Je(ee)}px`
              , se = `${Je(I)}px`;
            t(1, k = Os({
                "--g-fullbleed-target-width": `${K}`,
                "--g-fullbleed-target-height": `${ne}`,
                "--g-fullbleed-target-top": `${R}`,
                "--g-fullbleed-target-left": `${se}`,
                "--g-fullbleed-margin-top": `${Je(_)}px`,
                "--g-fullbleed-margin-right": `${Je(b)}px`,
                "--g-fullbleed-margin-bottom": `${Je(m)}px`,
                "--g-fullbleed-margin-left": `${Je(v)}px`,
                "--g-fullbleed-height": `${Je(o)}px`
            }))
        }
        , 0)
    }
    , 1300);
    P(),
    vt(function() {
        P()
    });
    function T() {
        A = this.clientWidth,
        j = this.clientHeight,
        t(2, A),
        t(3, j)
    }
    return r.$$set = O => {
        "fitType"in O && t(0, h = O.fitType),
        "marginTop"in O && t(4, _ = O.marginTop),
        "marginRight"in O && t(5, b = O.marginRight),
        "marginBottom"in O && t(6, m = O.marginBottom),
        "marginLeft"in O && t(7, v = O.marginLeft),
        "$$scope"in O && t(12, c = O.$$scope)
    }
    ,
    r.$$.update = () => {
        r.$$.dirty & 80 && (n = _ + m),
        r.$$.dirty & 160 && (s = v + b),
        r.$$.dirty & 1 && (l = d[h] || d.cover),
        r.$$.dirty & 2048 && t(9, i = f),
        r.$$.dirty & 1024 && t(8, o = a),
        r.$$.dirty & 768 && o | P()
    }
    ,
    [h, k, A, j, _, b, m, v, o, i, a, f, c, u, T]
}
class N5 extends x {
    constructor(e) {
        super(),
        $(this, e, B5, j5, Z, {
            fitType: 0,
            marginTop: 4,
            marginRight: 5,
            marginBottom: 6,
            marginLeft: 7
        })
    }
}
function D5(r) {
    let e, t;
    const n = [r[3], {
        items: r[2]
    }];
    let s = {};
    for (let l = 0; l < n.length; l += 1)
        s = at(s, n[l]);
    return e = new On({
        props: s
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(l) {
            U(e.$$.fragment, l)
        },
        m(l, i) {
            z(e, l, i),
            t = !0
        },
        p(l, i) {
            const o = i & 12 ? et(n, [i & 8 && ot(l[3]), i & 4 && {
                items: l[2]
            }]) : {};
            e.$set(o)
        },
        i(l) {
            t || (w(e.$$.fragment, l),
            t = !0)
        },
        o(l) {
            y(e.$$.fragment, l),
            t = !1
        },
        d(l) {
            G(e, l)
        }
    }
}
function L5(r) {
    let e, t;
    return e = new N5({
        props: {
            fitType: r[11],
            $$slots: {
                default: [R5]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, s) {
            const l = {};
            s & 2048 && (l.fitType = n[11]),
            s & 2097164 && (l.$$scope = {
                dirty: s,
                ctx: n
            }),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function R5(r) {
    let e, t;
    const n = [r[3], {
        items: r[2]
    }];
    let s = {};
    for (let l = 0; l < n.length; l += 1)
        s = at(s, n[l]);
    return e = new On({
        props: s
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(l) {
            U(e.$$.fragment, l)
        },
        m(l, i) {
            z(e, l, i),
            t = !0
        },
        p(l, i) {
            const o = i & 12 ? et(n, [i & 8 && ot(l[3]), i & 4 && {
                items: l[2]
            }]) : {};
            e.$set(o)
        },
        i(l) {
            t || (w(e.$$.fragment, l),
            t = !0)
        },
        o(l) {
            y(e.$$.fragment, l),
            t = !1
        },
        d(l) {
            G(e, l)
        }
    }
}
function V5(r) {
    let e, t, n, s;
    const l = [L5, D5]
      , i = [];
    function o(a, f) {
        return a[12] ? 0 : 1
    }
    return t = o(r),
    n = i[t] = l[t](r),
    {
        c() {
            e = N("div"),
            n.c(),
            this.h()
        },
        l(a) {
            e = B(a, "DIV", {
                class: !0
            });
            var f = S(e);
            n.l(f),
            f.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", "g-scrollingslides"),
            J(e, "g-fullheight", r[12])
        },
        m(a, f) {
            M(a, e, f),
            i[t].m(e, null),
            s = !0
        },
        p(a, f) {
            let u = t;
            t = o(a),
            t === u ? i[t].p(a, f) : (le(),
            y(i[u], 1, 1, () => {
                i[u] = null
            }
            ),
            ie(),
            n = i[t],
            n ? n.p(a, f) : (n = i[t] = l[t](a),
            n.c()),
            w(n, 1),
            n.m(e, null)),
            (!s || f & 4096) && J(e, "g-fullheight", a[12])
        },
        i(a) {
            s || (w(n),
            s = !0)
        },
        o(a) {
            y(n),
            s = !1
        },
        d(a) {
            a && p(e),
            i[t].d()
        }
    }
}
function G5(r) {
    let e, t, n;
    function s(i) {
        r[20](i)
    }
    let l = {
        debug: r[9],
        items: r[2],
        stepper: r[10],
        itemSpacing: r[8],
        showTextAfterGraphic: r[7],
        enablePointerEvents: r[4],
        textStartPosition: r[6],
        textTheme: r[5],
        altText: r[0].altText,
        $$slots: {
            default: [V5]
        },
        $$scope: {
            ctx: r
        }
    };
    return r[1] !== void 0 && (l.activeIndex = r[1]),
    e = new M5({
        props: l
    }),
    me.push( () => we(e, "activeIndex", s)),
    {
        c() {
            W(e.$$.fragment)
        },
        l(i) {
            U(e.$$.fragment, i)
        },
        m(i, o) {
            z(e, i, o),
            n = !0
        },
        p(i, o) {
            const a = {};
            o & 512 && (a.debug = i[9]),
            o & 4 && (a.items = i[2]),
            o & 1024 && (a.stepper = i[10]),
            o & 256 && (a.itemSpacing = i[8]),
            o & 128 && (a.showTextAfterGraphic = i[7]),
            o & 16 && (a.enablePointerEvents = i[4]),
            o & 64 && (a.textStartPosition = i[6]),
            o & 32 && (a.textTheme = i[5]),
            o & 1 && (a.altText = i[0].altText),
            o & 2103308 && (a.$$scope = {
                dirty: o,
                ctx: i
            }),
            !t && o & 2 && (t = !0,
            a.activeIndex = i[1],
            Te( () => t = !1)),
            e.$set(a)
        },
        i(i) {
            n || (w(e.$$.fragment, i),
            n = !0)
        },
        o(i) {
            y(e.$$.fragment, i),
            n = !1
        },
        d(i) {
            G(e, i)
        }
    }
}
function z5(r) {
    let e, t;
    return e = new wt({
        props: {
            props: r[0],
            element: "section",
            ariaLabelType: "scrollingSlides",
            $$slots: {
                default: [G5]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, [s]) {
            const l = {};
            s & 1 && (l.props = n[0]),
            s & 2105343 && (l.$$scope = {
                dirty: s,
                ctx: n
            }),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function W5(r, e, t) {
    let n, s, l, i, o, a, f, u, c, d, h, _, b, m, v, k, A, j;
    Ee(r, Ve, D => t(19, j = D));
    let {props: P={}} = e
      , T = 0;
    function O(D) {
        T = D,
        t(1, T)
    }
    return r.$$set = D => {
        "props"in D && t(0, P = D.props)
    }
    ,
    r.$$.update = () => {
        r.$$.dirty & 524289 && t(12, {fullHeight: n, fitType: s, items: l, stepper: i, debug: o, itemSpacing: a, showTextAfterGraphic: f, textStartPosition: u, textTheme: c, enablePointerEvents: d, lazy: h, transitionType: _, transitionDuration: b, transitionEasing: m, stepperTheme: v} = ze(P, j), n, (t(11, s),
        t(0, P),
        t(19, j)), (t(2, l),
        t(0, P),
        t(19, j)), (t(10, i),
        t(0, P),
        t(19, j)), (t(9, o),
        t(0, P),
        t(19, j)), (t(8, a),
        t(0, P),
        t(19, j)), (t(7, f),
        t(0, P),
        t(19, j)), (t(6, u),
        t(0, P),
        t(19, j)), (t(5, c),
        t(0, P),
        t(19, j)), (t(4, d),
        t(0, P),
        t(19, j)), (t(18, h),
        t(0, P),
        t(19, j)), (t(17, _),
        t(0, P),
        t(19, j)), (t(16, b),
        t(0, P),
        t(19, j)), (t(15, m),
        t(0, P),
        t(19, j)), (t(14, v),
        t(0, P),
        t(19, j))),
        r.$$.dirty & 4 && l | l.forEach(D => {
            D.caption = D.caption ? D.caption : "",
            D._insertHeader && (D.component = k4)
        }
        ),
        r.$$.dirty & 507906 && t(13, k = {
            activeIndex: T,
            lazy: h,
            transitionType: _,
            transitionDuration: b,
            transitionEasing: m,
            stepperTheme: v,
            showButtons: !1,
            hideInactiveSlidesFromScreenReader: !1
        }),
        r.$$.dirty & 8192 && t(3, A = Object.keys(k).reduce( (D, I) => (k[I] !== void 0 && (D[I] = k[I]),
        D), {}))
    }
    ,
    [P, T, l, A, d, c, u, f, a, o, i, s, n, k, v, m, b, _, h, j, O]
}
class U5 extends x {
    constructor(e) {
        super(),
        $(this, e, W5, z5, Z, {
            props: 0
        })
    }
}
function F5(r) {
    let e, t;
    return e = new On({
        props: {
            altText: r[0].altText,
            items: r[10],
            stepper: r[9],
            lazy: r[8],
            transitionType: r[7],
            transitionDuration: r[6],
            transitionEasing: r[5],
            showButtons: r[4],
            autoAdvanceTime: r[3] ? +r[3] : void 0,
            stepperTheme: r[2],
            stepperClick: r[1]
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, s) {
            const l = {};
            s & 1 && (l.altText = n[0].altText),
            s & 1024 && (l.items = n[10]),
            s & 512 && (l.stepper = n[9]),
            s & 256 && (l.lazy = n[8]),
            s & 128 && (l.transitionType = n[7]),
            s & 64 && (l.transitionDuration = n[6]),
            s & 32 && (l.transitionEasing = n[5]),
            s & 16 && (l.showButtons = n[4]),
            s & 8 && (l.autoAdvanceTime = n[3] ? +n[3] : void 0),
            s & 4 && (l.stepperTheme = n[2]),
            s & 2 && (l.stepperClick = n[1]),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function H5(r) {
    let e, t;
    return e = new wt({
        props: {
            props: r[0],
            element: "section",
            ariaLabelType: "slideshow",
            $$slots: {
                default: [F5]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, [s]) {
            const l = {};
            s & 1 && (l.props = n[0]),
            s & 6143 && (l.$$scope = {
                dirty: s,
                ctx: n
            }),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function q5(r, e, t) {
    let n, s, l, i, o, a, f, u, c, d, h;
    Ee(r, Ve, b => t(11, h = b));
    let {props: _={}} = e;
    return r.$$set = b => {
        "props"in b && t(0, _ = b.props)
    }
    ,
    r.$$.update = () => {
        r.$$.dirty & 2049 && t(10, {items: n, stepper: s, lazy: l, transitionType: i, transitionDuration: o, transitionEasing: a, showButtons: f, autoAdvanceTime: u, stepperTheme: c, stepperClick: d} = ze(_, h), n, (t(9, s),
        t(0, _),
        t(11, h)), (t(8, l),
        t(0, _),
        t(11, h)), (t(7, i),
        t(0, _),
        t(11, h)), (t(6, o),
        t(0, _),
        t(11, h)), (t(5, a),
        t(0, _),
        t(11, h)), (t(4, f),
        t(0, _),
        t(11, h)), (t(3, u),
        t(0, _),
        t(11, h)), (t(2, c),
        t(0, _),
        t(11, h)), (t(1, d),
        t(0, _),
        t(11, h)))
    }
    ,
    [_, d, c, u, f, a, o, i, l, s, n, h]
}
class K5 extends x {
    constructor(e) {
        super(),
        $(this, e, q5, H5, Z, {
            props: 0
        })
    }
}
function Y5(r) {
    let e, t;
    return e = new Vt({
        props: {
            props: r[0],
            expectedType: "slideshow"
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, [s]) {
            const l = {};
            s & 1 && (l.props = n[0]),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function Z5(r, e, t) {
    let {props: n} = e;
    return r.$$set = s => {
        "props"in s && t(0, n = s.props)
    }
    ,
    [n]
}
class H6 extends x {
    constructor(e) {
        super(),
        $(this, e, Z5, Y5, Z, {
            props: 0
        })
    }
}
function eo(r) {
    let e, t;
    return {
        c() {
            e = N("p"),
            t = ae(r[0]),
            this.h()
        },
        l(n) {
            e = B(n, "P", {
                class: !0
            });
            var s = S(e);
            t = oe(s, r[0]),
            s.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", "g-caption svelte-16czdlb")
        },
        m(n, s) {
            M(n, e, s),
            E(e, t)
        },
        p(n, s) {
            s & 1 && pe(t, n[0])
        },
        d(n) {
            n && p(e)
        }
    }
}
function to(r) {
    let e, t, n, s = r[2] && no(r), l = r[3] && ro(r), i = r[1] && so(r);
    return {
        c() {
            e = N("p"),
            s && s.c(),
            t = Q(),
            l && l.c(),
            n = Q(),
            i && i.c(),
            this.h()
        },
        l(o) {
            e = B(o, "P", {
                class: !0
            });
            var a = S(e);
            s && s.l(a),
            t = X(a),
            l && l.l(a),
            n = X(a),
            i && i.l(a),
            a.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", "g-meta svelte-16czdlb")
        },
        m(o, a) {
            M(o, e, a),
            s && s.m(e, null),
            E(e, t),
            l && l.m(e, null),
            E(e, n),
            i && i.m(e, null)
        },
        p(o, a) {
            o[2] ? s ? s.p(o, a) : (s = no(o),
            s.c(),
            s.m(e, t)) : s && (s.d(1),
            s = null),
            o[3] ? l ? l.p(o, a) : (l = ro(o),
            l.c(),
            l.m(e, n)) : l && (l.d(1),
            l = null),
            o[1] ? i ? i.p(o, a) : (i = so(o),
            i.c(),
            i.m(e, null)) : i && (i.d(1),
            i = null)
        },
        d(o) {
            o && p(e),
            s && s.d(),
            l && l.d(),
            i && i.d()
        }
    }
}
function no(r) {
    let e, t;
    return {
        c() {
            e = N("span"),
            t = ae(r[2]),
            this.h()
        },
        l(n) {
            e = B(n, "SPAN", {
                class: !0
            });
            var s = S(e);
            t = oe(s, r[2]),
            s.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", "g-credit svelte-16czdlb")
        },
        m(n, s) {
            M(n, e, s),
            E(e, t)
        },
        p(n, s) {
            s & 4 && pe(t, n[2])
        },
        d(n) {
            n && p(e)
        }
    }
}
function ro(r) {
    let e, t;
    return {
        c() {
            e = N("span"),
            t = ae(r[3]),
            this.h()
        },
        l(n) {
            e = B(n, "SPAN", {
                class: !0
            });
            var s = S(e);
            t = oe(s, r[3]),
            s.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", "g-note svelte-16czdlb")
        },
        m(n, s) {
            M(n, e, s),
            E(e, t)
        },
        p(n, s) {
            s & 8 && pe(t, n[3])
        },
        d(n) {
            n && p(e)
        }
    }
}
function so(r) {
    let e, t;
    return {
        c() {
            e = N("span"),
            t = ae(r[1]),
            this.h()
        },
        l(n) {
            e = B(n, "SPAN", {
                class: !0
            });
            var s = S(e);
            t = oe(s, r[1]),
            s.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", "g-source svelte-16czdlb")
        },
        m(n, s) {
            M(n, e, s),
            E(e, t)
        },
        p(n, s) {
            s & 2 && pe(t, n[1])
        },
        d(n) {
            n && p(e)
        }
    }
}
function X5(r) {
    let e, t, n = r[0] && eo(r), s = (r[2] || r[3] || r[1]) && to(r);
    return {
        c() {
            e = N("figcaption"),
            n && n.c(),
            t = Q(),
            s && s.c(),
            this.h()
        },
        l(l) {
            e = B(l, "FIGCAPTION", {
                class: !0
            });
            var i = S(e);
            n && n.l(i),
            t = X(i),
            s && s.l(i),
            i.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", "svelte-16czdlb")
        },
        m(l, i) {
            M(l, e, i),
            n && n.m(e, null),
            E(e, t),
            s && s.m(e, null)
        },
        p(l, [i]) {
            l[0] ? n ? n.p(l, i) : (n = eo(l),
            n.c(),
            n.m(e, t)) : n && (n.d(1),
            n = null),
            l[2] || l[3] || l[1] ? s ? s.p(l, i) : (s = to(l),
            s.c(),
            s.m(e, null)) : s && (s.d(1),
            s = null)
        },
        i: q,
        o: q,
        d(l) {
            l && p(e),
            n && n.d(),
            s && s.d()
        }
    }
}
function Q5(r, e, t) {
    let {caption: n=""} = e
      , {source: s=""} = e
      , {credit: l=""} = e
      , {note: i=""} = e;
    return r.$$set = o => {
        "caption"in o && t(0, n = o.caption),
        "source"in o && t(1, s = o.source),
        "credit"in o && t(2, l = o.credit),
        "note"in o && t(3, i = o.note)
    }
    ,
    [n, s, l, i]
}
class J5 extends x {
    constructor(e) {
        super(),
        $(this, e, Q5, X5, Z, {
            caption: 0,
            source: 1,
            credit: 2,
            note: 3
        })
    }
}
function x5(r) {
    let e, t, n, s = "Previous", l, i, o, a, f = "Next", u, c, d;
    return {
        c() {
            e = N("div"),
            t = N("button"),
            n = N("p"),
            n.textContent = s,
            i = Q(),
            o = N("button"),
            a = N("p"),
            a.textContent = f,
            this.h()
        },
        l(h) {
            e = B(h, "DIV", {
                class: !0
            });
            var _ = S(e);
            t = B(_, "BUTTON", {
                "aria-label": !0,
                class: !0
            });
            var b = S(t);
            n = B(b, "P", {
                class: !0,
                "data-svelte-h": !0
            }),
            It(n) !== "svelte-5tfjjv" && (n.textContent = s),
            b.forEach(p),
            i = X(_),
            o = B(_, "BUTTON", {
                "aria-label": !0,
                class: !0
            });
            var m = S(o);
            a = B(m, "P", {
                class: !0,
                "data-svelte-h": !0
            }),
            It(a) !== "svelte-1h5utxv" && (a.textContent = f),
            m.forEach(p),
            _.forEach(p),
            this.h()
        },
        h() {
            g(n, "class", "svelte-12a5ikl"),
            g(t, "aria-label", "previous slide"),
            t.disabled = l = !r[2],
            g(t, "class", "g-tapstory_button g-previous svelte-12a5ikl"),
            J(t, "active", r[2]),
            g(a, "class", "svelte-12a5ikl"),
            g(o, "aria-label", "next slide"),
            o.disabled = u = !r[1],
            g(o, "class", "g-tapstory_button g-next svelte-12a5ikl"),
            J(o, "active", r[1]),
            g(e, "class", "g-tapstory_buttons svelte-12a5ikl")
        },
        m(h, _) {
            M(h, e, _),
            E(e, t),
            E(t, n),
            E(e, i),
            E(e, o),
            E(o, a),
            c || (d = [ge(t, "click", r[5]), ge(o, "click", r[6])],
            c = !0)
        },
        p(h, [_]) {
            _ & 4 && l !== (l = !h[2]) && (t.disabled = l),
            _ & 4 && J(t, "active", h[2]),
            _ & 2 && u !== (u = !h[1]) && (o.disabled = u),
            _ & 2 && J(o, "active", h[1])
        },
        i: q,
        o: q,
        d(h) {
            h && p(e),
            c = !1,
            St(d)
        }
    }
}
function $5(r, e, t) {
    let n, s, {index: l=0} = e, {items: i} = e;
    const o = u => {
        u >= 0 && u <= i.length - 1 && t(0, l = u)
    }
      , a = () => {
        o(l - 1)
    }
      , f = () => o(l + 1);
    return r.$$set = u => {
        "index"in u && t(0, l = u.index),
        "items"in u && t(4, i = u.items)
    }
    ,
    r.$$.update = () => {
        r.$$.dirty & 1 && t(2, n = l > 0),
        r.$$.dirty & 17 && t(1, s = l < i.length - 1)
    }
    ,
    [l, s, n, o, i, a, f]
}
class eb extends x {
    constructor(e) {
        super(),
        $(this, e, $5, x5, Z, {
            index: 0,
            items: 4
        })
    }
}
function tb(r) {
    let e, t;
    return e = new On({
        props: {
            activeIndex: rb,
            items: r[7],
            captionComponent: J5,
            buttonComponent: eb,
            showButtons: !0,
            lazy: r[5],
            transitionType: r[4],
            transitionDuration: r[3],
            transitionEasing: r[2],
            stepper: r[6],
            stepperTheme: r[1],
            altText: r[0].altText
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, s) {
            const l = {};
            s & 128 && (l.items = n[7]),
            s & 32 && (l.lazy = n[5]),
            s & 16 && (l.transitionType = n[4]),
            s & 8 && (l.transitionDuration = n[3]),
            s & 4 && (l.transitionEasing = n[2]),
            s & 64 && (l.stepper = n[6]),
            s & 2 && (l.stepperTheme = n[1]),
            s & 1 && (l.altText = n[0].altText),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function nb(r) {
    let e, t;
    return e = new wt({
        props: {
            props: r[0],
            $$slots: {
                default: [tb]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, [s]) {
            const l = {};
            s & 1 && (l.props = n[0]),
            s & 767 && (l.$$scope = {
                dirty: s,
                ctx: n
            }),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
let rb = 0;
function sb(r, e, t) {
    let n, s, l, i, o, a, f, u;
    Ee(r, Ve, d => t(8, u = d));
    let {props: c={}} = e;
    return r.$$set = d => {
        "props"in d && t(0, c = d.props)
    }
    ,
    r.$$.update = () => {
        r.$$.dirty & 257 && t(7, {items: n, stepper: s, lazy: l, transitionType: i, transitionDuration: o, transitionEasing: a, stepperTheme: f} = ze(c, u), n, (t(6, s),
        t(0, c),
        t(8, u)), (t(5, l),
        t(0, c),
        t(8, u)), (t(4, i),
        t(0, c),
        t(8, u)), (t(3, o),
        t(0, c),
        t(8, u)), (t(2, a),
        t(0, c),
        t(8, u)), (t(1, f),
        t(0, c),
        t(8, u)))
    }
    ,
    [c, f, a, o, i, l, s, n, u]
}
class lb extends x {
    constructor(e) {
        super(),
        $(this, e, sb, nb, Z, {
            props: 0
        })
    }
}
function lo(r, e, t) {
    const n = r.slice();
    return n[7] = e[t],
    n
}
function io(r) {
    let e, t, n;
    return t = new wt({
        props: {
            props: {
                ...r[7],
                maxWidth: r[3],
                marginInline: !1,
                headerMarginInline: r[2],
                footerMarginInline: r[2],
                marginBlock: "0 25px"
            },
            $$slots: {
                default: [ib]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    {
        c() {
            e = N("div"),
            W(t.$$.fragment),
            this.h()
        },
        l(s) {
            e = B(s, "DIV", {
                class: !0
            });
            var l = S(e);
            U(t.$$.fragment, l),
            l.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", "g-stack_media")
        },
        m(s, l) {
            M(s, e, l),
            z(t, e, null),
            n = !0
        },
        p(s, l) {
            const i = {};
            l & 28 && (i.props = {
                ...s[7],
                maxWidth: s[3],
                marginInline: !1,
                headerMarginInline: s[2],
                footerMarginInline: s[2],
                marginBlock: "0 25px"
            }),
            l & 1040 && (i.$$scope = {
                dirty: l,
                ctx: s
            }),
            t.$set(i)
        },
        i(s) {
            n || (w(t.$$.fragment, s),
            n = !0)
        },
        o(s) {
            y(t.$$.fragment, s),
            n = !1
        },
        d(s) {
            s && p(e),
            G(t)
        }
    }
}
function ib(r) {
    let e, t;
    return e = new ur({
        props: {
            props: r[7]
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, s) {
            const l = {};
            s & 16 && (l.props = n[7]),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function oo(r) {
    let e, t, n;
    return t = new on({
        props: {
            text: r[7].text,
            renderHtml: !0,
            generateParagraphs: !0
        }
    }),
    {
        c() {
            e = N("div"),
            W(t.$$.fragment),
            this.h()
        },
        l(s) {
            e = B(s, "DIV", {
                class: !0
            });
            var l = S(e);
            U(t.$$.fragment, l),
            l.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", "g-stack_text")
        },
        m(s, l) {
            M(s, e, l),
            z(t, e, null),
            n = !0
        },
        p(s, l) {
            const i = {};
            l & 16 && (i.text = s[7].text),
            t.$set(i)
        },
        i(s) {
            n || (w(t.$$.fragment, s),
            n = !0)
        },
        o(s) {
            y(t.$$.fragment, s),
            n = !1
        },
        d(s) {
            s && p(e),
            G(t)
        }
    }
}
function ao(r, e) {
    let t, n, s, l, i = e[7].media && io(e), o = e[7].text && oo(e);
    return {
        key: r,
        first: null,
        c() {
            t = N("div"),
            i && i.c(),
            n = Q(),
            o && o.c(),
            s = Q(),
            this.h()
        },
        l(a) {
            t = B(a, "DIV", {
                class: !0
            });
            var f = S(t);
            i && i.l(f),
            n = X(f),
            o && o.l(f),
            s = X(f),
            f.forEach(p),
            this.h()
        },
        h() {
            g(t, "class", "g-stack_item"),
            this.first = t
        },
        m(a, f) {
            M(a, t, f),
            i && i.m(t, null),
            E(t, n),
            o && o.m(t, null),
            E(t, s),
            l = !0
        },
        p(a, f) {
            e = a,
            e[7].media ? i ? (i.p(e, f),
            f & 16 && w(i, 1)) : (i = io(e),
            i.c(),
            w(i, 1),
            i.m(t, n)) : i && (le(),
            y(i, 1, 1, () => {
                i = null
            }
            ),
            ie()),
            e[7].text ? o ? (o.p(e, f),
            f & 16 && w(o, 1)) : (o = oo(e),
            o.c(),
            w(o, 1),
            o.m(t, s)) : o && (le(),
            y(o, 1, 1, () => {
                o = null
            }
            ),
            ie())
        },
        i(a) {
            l || (w(i),
            w(o),
            l = !0)
        },
        o(a) {
            y(i),
            y(o),
            l = !1
        },
        d(a) {
            a && p(t),
            i && i.d(),
            o && o.d()
        }
    }
}
function ob(r) {
    let e, t = [], n = new Map, s, l, i = Oe(r[4]);
    const o = a => a[7];
    for (let a = 0; a < i.length; a += 1) {
        let f = lo(r, i, a)
          , u = o(f);
        n.set(u, t[a] = ao(u, f))
    }
    return {
        c() {
            e = N("div");
            for (let a = 0; a < t.length; a += 1)
                t[a].c();
            this.h()
        },
        l(a) {
            e = B(a, "DIV", {
                class: !0
            });
            var f = S(e);
            for (let u = 0; u < t.length; u += 1)
                t[u].l(f);
            f.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", "g-stack"),
            xe( () => r[6].call(e))
        },
        m(a, f) {
            M(a, e, f);
            for (let u = 0; u < t.length; u += 1)
                t[u] && t[u].m(e, null);
            s = Dt(e, r[6].bind(e)),
            l = !0
        },
        p(a, f) {
            f & 28 && (i = Oe(a[4]),
            le(),
            t = po(t, f, o, 1, a, i, n, e, go, ao, null, lo),
            ie())
        },
        i(a) {
            if (!l) {
                for (let f = 0; f < i.length; f += 1)
                    w(t[f]);
                l = !0
            }
        },
        o(a) {
            for (let f = 0; f < t.length; f += 1)
                y(t[f]);
            l = !1
        },
        d(a) {
            a && p(e);
            for (let f = 0; f < t.length; f += 1)
                t[f].d();
            s()
        }
    }
}
function ab(r) {
    let e, t;
    return e = new wt({
        props: {
            props: r[0],
            $$slots: {
                default: [ob]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, [s]) {
            const l = {};
            s & 1 && (l.props = n[0]),
            s & 1054 && (l.$$scope = {
                dirty: s,
                ctx: n
            }),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function fb(r, e, t) {
    let n, s, l;
    Ee(r, Ve, u => t(5, l = u));
    let {props: i={}} = e
      , o = 0
      , a = !1;
    function f() {
        o = this.clientWidth,
        t(1, o)
    }
    return r.$$set = u => {
        "props"in u && t(0, i = u.props)
    }
    ,
    r.$$.update = () => {
        r.$$.dirty & 33 && t(4, {items: n, maxWidth: s} = ze(i, l), n, (t(3, s),
        t(0, i),
        t(5, l))),
        r.$$.dirty & 34 && t(2, a = o + 1 >= Math.round(l))
    }
    ,
    [i, o, a, s, n, l, f]
}
class ub extends x {
    constructor(e) {
        super(),
        $(this, e, fb, ab, Z, {
            props: 0
        })
    }
}
function cb(r) {
    let e, t, n;
    var s = r[1];
    function l(i, o) {
        return {
            props: {
                props: i[0]
            }
        }
    }
    return s && (e = $e(s, l(r))),
    {
        c() {
            e && W(e.$$.fragment),
            t = te()
        },
        l(i) {
            e && U(e.$$.fragment, i),
            t = te()
        },
        m(i, o) {
            e && z(e, i, o),
            M(i, t, o),
            n = !0
        },
        p(i, [o]) {
            if (o & 2 && s !== (s = i[1])) {
                if (e) {
                    le();
                    const a = e;
                    y(a.$$.fragment, 1, 0, () => {
                        G(a, 1)
                    }
                    ),
                    ie()
                }
                s ? (e = $e(s, l(i)),
                W(e.$$.fragment),
                w(e.$$.fragment, 1),
                z(e, t.parentNode, t)) : e = null
            } else if (s) {
                const a = {};
                o & 1 && (a.props = i[0]),
                e.$set(a)
            }
        },
        i(i) {
            n || (e && w(e.$$.fragment, i),
            n = !0)
        },
        o(i) {
            e && y(e.$$.fragment, i),
            n = !1
        },
        d(i) {
            i && p(t),
            e && G(e, i)
        }
    }
}
function db(r, e, t) {
    let n, s, l;
    Ee(r, Ve, a => t(3, l = a));
    let {props: i} = e;
    const o = {
        stack: ub,
        scrollingslides: U5,
        slideshow: K5,
        tapstory: lb
    };
    return r.$$set = a => {
        "props"in a && t(0, i = a.props)
    }
    ,
    r.$$.update = () => {
        r.$$.dirty & 9 && t(2, {slidesType: n} = ze(i, l), n),
        r.$$.dirty & 4 && t(1, s = o[n == null ? void 0 : n.toLowerCase()] || o.stack)
    }
    ,
    [i, s, n, l]
}
class q6 extends x {
    constructor(e) {
        super(),
        $(this, e, db, cb, Z, {
            props: 0
        })
    }
}
function hb(r) {
    let e, t, n, s;
    return {
        c() {
            e = N("h2"),
            t = new Re(!1),
            this.h()
        },
        l(l) {
            e = B(l, "H2", {
                id: !0,
                class: !0
            });
            var i = S(e);
            t = Le(i, !1),
            i.forEach(p),
            this.h()
        },
        h() {
            t.a = null,
            g(e, "id", n = r[3] || void 0),
            g(e, "class", s = "g-subhed theme-" + r[0] + " " + (r[2] || "") + " svelte-n635ph")
        },
        m(l, i) {
            M(l, e, i),
            t.m(r[1], e)
        },
        p(l, [i]) {
            i & 2 && t.p(l[1]),
            i & 8 && n !== (n = l[3] || void 0) && g(e, "id", n),
            i & 5 && s !== (s = "g-subhed theme-" + l[0] + " " + (l[2] || "") + " svelte-n635ph") && g(e, "class", s)
        },
        i: q,
        o: q,
        d(l) {
            l && p(e)
        }
    }
}
function mb(r, e, t) {
    let n, s, l, {props: i={}} = e, {theme: o="news"} = e;
    return r.$$set = a => {
        "props"in a && t(4, i = a.props),
        "theme"in a && t(0, o = a.theme)
    }
    ,
    r.$$.update = () => {
        r.$$.dirty & 16 && t(3, {id: n, className: s, value: l} = i, n, (t(2, s),
        t(4, i)), (t(1, l),
        t(4, i)))
    }
    ,
    [o, l, s, n, i]
}
class K6 extends x {
    constructor(e) {
        super(),
        $(this, e, mb, hb, Z, {
            props: 4,
            theme: 0
        })
    }
}
function gb(r) {
    let e, t;
    return e = new on({
        props: {
            id: r[2],
            className: r[1],
            text: r[0],
            renderHtml: !0,
            generateParagraphs: !1
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, [s]) {
            const l = {};
            s & 4 && (l.id = n[2]),
            s & 2 && (l.className = n[1]),
            s & 1 && (l.text = n[0]),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function pb(r, e, t) {
    let {props: n={}} = e, s, l, i;
    return r.$$set = o => {
        "props"in o && t(3, n = o.props)
    }
    ,
    r.$$.update = () => {
        r.$$.dirty & 8 && t(0, {value: s, className: l, id: i} = n, s, (t(1, l),
        t(3, n)), (t(2, i),
        t(3, n)))
    }
    ,
    [s, l, i, n]
}
class Y6 extends x {
    constructor(e) {
        super(),
        $(this, e, pb, gb, Z, {
            props: 3
        })
    }
}
function _b(r) {
    let e, t;
    return e = new Vt({
        props: {
            props: r[0],
            expectedType: "video"
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, [s]) {
            const l = {};
            s & 1 && (l.props = n[0]),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function bb(r, e, t) {
    let {props: n} = e;
    return r.$$set = s => {
        "props"in s && t(0, n = s.props)
    }
    ,
    [n]
}
class Z6 extends x {
    constructor(e) {
        super(),
        $(this, e, bb, _b, Z, {
            props: 0
        })
    }
}
function vb(r) {
    let e, t;
    return e = new Vt({
        props: {
            props: r[0],
            expectedType: "video"
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p: q,
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function wb(r, e, t) {
    let {props: n} = e;
    const s = {
        mediaComponent: "VHS",
        autoplay: !0,
        loop: !0,
        muted: !0,
        controls: !1,
        ...n
    };
    return r.$$set = l => {
        "props"in l && t(1, n = l.props)
    }
    ,
    [s, n]
}
class X6 extends x {
    constructor(e) {
        super(),
        $(this, e, wb, vb, Z, {
            props: 1
        })
    }
}
function yb(r) {
    let e, t;
    return e = new Vt({
        props: {
            props: r[0],
            expectedType: "audio"
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, [s]) {
            const l = {};
            s & 1 && (l.props = n[0]),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function kb(r, e, t) {
    let {props: n} = e;
    return r.$$set = s => {
        "props"in s && t(0, n = s.props)
    }
    ,
    [n]
}
class Q6 extends x {
    constructor(e) {
        super(),
        $(this, e, kb, yb, Z, {
            props: 0
        })
    }
}
function Tb(r) {
    let e, t;
    return e = new on({
        props: {
            text: r[0],
            generateParagraphs: !1,
            renderHtml: !0
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, [s]) {
            const l = {};
            s & 1 && (l.text = n[0]),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function Eb(r, e, t) {
    let {props: n} = e;
    const {paragraphs: s, lede: l} = n;
    return l && s.length && (s[0] = l + " " + s[0]),
    r.$$set = i => {
        "props"in i && t(1, n = i.props)
    }
    ,
    [s, n]
}
class J6 extends x {
    constructor(e) {
        super(),
        $(this, e, Eb, Tb, Z, {
            props: 1
        })
    }
}
function Ib(r) {
    let e, t, n;
    const s = [r[0], {
        data: r[1]
    }];
    var l = r[2];
    function i(o, a) {
        let f = {};
        if (a !== void 0 && a & 3)
            f = et(s, [a & 1 && ot(o[0]), a & 2 && {
                data: o[1]
            }]);
        else
            for (let u = 0; u < s.length; u += 1)
                f = at(f, s[u]);
        return {
            props: f
        }
    }
    return l && (e = $e(l, i(r))),
    {
        c() {
            e && W(e.$$.fragment),
            t = te()
        },
        l(o) {
            e && U(e.$$.fragment, o),
            t = te()
        },
        m(o, a) {
            e && z(e, o, a),
            M(o, t, a),
            n = !0
        },
        p(o, a) {
            if (a & 4 && l !== (l = o[2])) {
                if (e) {
                    le();
                    const f = e;
                    y(f.$$.fragment, 1, 0, () => {
                        G(f, 1)
                    }
                    ),
                    ie()
                }
                l ? (e = $e(l, i(o, a)),
                W(e.$$.fragment),
                w(e.$$.fragment, 1),
                z(e, t.parentNode, t)) : e = null
            } else if (l) {
                const f = a & 3 ? et(s, [a & 1 && ot(o[0]), a & 2 && {
                    data: o[1]
                }]) : {};
                e.$set(f)
            }
        },
        i(o) {
            n || (e && w(e.$$.fragment, o),
            n = !0)
        },
        o(o) {
            e && y(e.$$.fragment, o),
            n = !1
        },
        d(o) {
            o && p(t),
            e && G(e, o)
        }
    }
}
function Ab(r) {
    let e, t;
    return e = new wt({
        props: {
            props: r[0],
            $$slots: {
                default: [Cb]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, s) {
            const l = {};
            s & 1 && (l.props = n[0]),
            s & 15 && (l.$$scope = {
                dirty: s,
                ctx: n
            }),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function Cb(r) {
    let e, t, n;
    const s = [r[0], {
        data: r[1]
    }];
    var l = r[2];
    function i(o, a) {
        let f = {};
        if (a !== void 0 && a & 3)
            f = et(s, [a & 1 && ot(o[0]), a & 2 && {
                data: o[1]
            }]);
        else
            for (let u = 0; u < s.length; u += 1)
                f = at(f, s[u]);
        return {
            props: f
        }
    }
    return l && (e = $e(l, i(r))),
    {
        c() {
            e && W(e.$$.fragment),
            t = te()
        },
        l(o) {
            e && U(e.$$.fragment, o),
            t = te()
        },
        m(o, a) {
            e && z(e, o, a),
            M(o, t, a),
            n = !0
        },
        p(o, a) {
            if (a & 4 && l !== (l = o[2])) {
                if (e) {
                    le();
                    const f = e;
                    y(f.$$.fragment, 1, 0, () => {
                        G(f, 1)
                    }
                    ),
                    ie()
                }
                l ? (e = $e(l, i(o, a)),
                W(e.$$.fragment),
                w(e.$$.fragment, 1),
                z(e, t.parentNode, t)) : e = null
            } else if (l) {
                const f = a & 3 ? et(s, [a & 1 && ot(o[0]), a & 2 && {
                    data: o[1]
                }]) : {};
                e.$set(f)
            }
        },
        i(o) {
            n || (e && w(e.$$.fragment, o),
            n = !0)
        },
        o(o) {
            e && y(e.$$.fragment, o),
            n = !1
        },
        d(o) {
            o && p(t),
            e && G(e, o)
        }
    }
}
function Sb(r) {
    let e, t, n, s;
    const l = [Ab, Ib]
      , i = [];
    function o(a, f) {
        return a[0].wrapper ? 0 : 1
    }
    return e = o(r),
    t = i[e] = l[e](r),
    {
        c() {
            t.c(),
            n = te()
        },
        l(a) {
            t.l(a),
            n = te()
        },
        m(a, f) {
            i[e].m(a, f),
            M(a, n, f),
            s = !0
        },
        p(a, [f]) {
            let u = e;
            e = o(a),
            e === u ? i[e].p(a, f) : (le(),
            y(i[u], 1, 1, () => {
                i[u] = null
            }
            ),
            ie(),
            t = i[e],
            t ? t.p(a, f) : (t = i[e] = l[e](a),
            t.c()),
            w(t, 1),
            t.m(n.parentNode, n))
        },
        i(a) {
            s || (w(t),
            s = !0)
        },
        o(a) {
            y(t),
            s = !1
        },
        d(a) {
            a && p(n),
            i[e].d(a)
        }
    }
}
function Pb(r, e, t) {
    var i;
    let {data: n, props: s, component: l} = e;
    return s.wrapper = (i = s == null ? void 0 : s.wrapper) != null ? i : !0,
    r.$$set = o => {
        "data"in o && t(1, n = o.data),
        "props"in o && t(0, s = o.props),
        "component"in o && t(2, l = o.component)
    }
    ,
    [s, n, l]
}
class x6 extends x {
    constructor(e) {
        super(),
        $(this, e, Pb, Sb, Z, {
            data: 1,
            props: 0,
            component: 2
        })
    }
}
function Ob(r) {
    let e, t, n;
    return t = new on({
        props: {
            text: r[1]
        }
    }),
    {
        c() {
            e = N("div"),
            W(t.$$.fragment),
            this.h()
        },
        l(s) {
            e = B(s, "DIV", {
                class: !0
            });
            var l = S(e);
            U(t.$$.fragment, l),
            l.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", "g-alert svelte-13pn56q"),
            J(e, "g-warning", r[0] === "warning"),
            J(e, "g-refer", r[0] === "refer")
        },
        m(s, l) {
            M(s, e, l),
            z(t, e, null),
            n = !0
        },
        p(s, [l]) {
            const i = {};
            l & 2 && (i.text = s[1]),
            t.$set(i),
            (!n || l & 1) && J(e, "g-warning", s[0] === "warning"),
            (!n || l & 1) && J(e, "g-refer", s[0] === "refer")
        },
        i(s) {
            n || (w(t.$$.fragment, s),
            n = !0)
        },
        o(s) {
            y(t.$$.fragment, s),
            n = !1
        },
        d(s) {
            s && p(e),
            G(t)
        }
    }
}
function Mb(r, e, t) {
    let {type: n} = e
      , {text: s} = e;
    return r.$$set = l => {
        "type"in l && t(0, n = l.type),
        "text"in l && t(1, s = l.text)
    }
    ,
    [n, s]
}
class jb extends x {
    constructor(e) {
        super(),
        $(this, e, Mb, Ob, Z, {
            type: 0,
            text: 1
        })
    }
}
function Bb(r) {
    let e, t;
    return e = new jb({
        props: {
            type: r[4],
            text: r[3]
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, s) {
            const l = {};
            s & 16 && (l.type = n[4]),
            s & 8 && (l.text = n[3]),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function Nb(r) {
    let e, t;
    const n = [{
        marginInline: r[2] || !0
    }, {
        marginBlock: r[1] || !0
    }, r[0]];
    let s = {
        $$slots: {
            default: [Bb]
        },
        $$scope: {
            ctx: r
        }
    };
    for (let l = 0; l < n.length; l += 1)
        s = at(s, n[l]);
    return e = new Qt({
        props: s
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(l) {
            U(e.$$.fragment, l)
        },
        m(l, i) {
            z(e, l, i),
            t = !0
        },
        p(l, [i]) {
            const o = i & 7 ? et(n, [i & 4 && {
                marginInline: l[2] || !0
            }, i & 2 && {
                marginBlock: l[1] || !0
            }, i & 1 && ot(l[0])]) : {};
            i & 88 && (o.$$scope = {
                dirty: i,
                ctx: l
            }),
            e.$set(o)
        },
        i(l) {
            t || (w(e.$$.fragment, l),
            t = !0)
        },
        o(l) {
            y(e.$$.fragment, l),
            t = !1
        },
        d(l) {
            G(e, l)
        }
    }
}
function Db(r, e, t) {
    let n, s, l, i, o;
    Ee(r, Ve, f => t(5, o = f));
    let {props: a} = e;
    return r.$$set = f => {
        "props"in f && t(0, a = f.props)
    }
    ,
    r.$$.update = () => {
        r.$$.dirty & 33 && t(4, {type: n, text: s, marginInline: l, marginBlock: i} = ze(a, o), n, (t(3, s),
        t(0, a),
        t(5, o)), (t(2, l),
        t(0, a),
        t(5, o)), (t(1, i),
        t(0, a),
        t(5, o)))
    }
    ,
    [a, i, l, s, n, o]
}
class $6 extends x {
    constructor(e) {
        super(),
        $(this, e, Db, Nb, Z, {
            props: 0
        })
    }
}
const Lb = r => ({
    body: r & 1
})
  , fo = r => ({
    body: r[0].filter(r[8])
});
function Rb(r) {
    let e, t;
    const n = r[7].default
      , s = We(n, r, r[6], fo);
    return {
        c() {
            e = N("div"),
            s && s.c(),
            this.h()
        },
        l(l) {
            e = B(l, "DIV", {
                class: !0,
                id: !0
            });
            var i = S(e);
            s && s.l(i),
            i.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", r[2]),
            g(e, "id", r[1])
        },
        m(l, i) {
            M(l, e, i),
            s && s.m(e, null),
            t = !0
        },
        p(l, i) {
            s && s.p && (!t || i & 65) && Ue(s, n, l, l[6], t ? He(n, l[6], i, Lb) : Fe(l[6]), fo),
            (!t || i & 4) && g(e, "class", l[2]),
            (!t || i & 2) && g(e, "id", l[1])
        },
        i(l) {
            t || (w(s, l),
            t = !0)
        },
        o(l) {
            y(s, l),
            t = !1
        },
        d(l) {
            l && p(e),
            s && s.d(l)
        }
    }
}
function Vb(r) {
    let e, t;
    return e = new j4({
        props: {
            message: `You're trying to pass <code>${r[0].find(r[4]).type}</code> to a [.+section] block, but this block only accepts the properties <code>className</code> and <code>id</code>.`
        }
    }),
    {
        c() {
            W(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, s) {
            z(e, n, s),
            t = !0
        },
        p(n, s) {
            const l = {};
            s & 1 && (l.message = `You're trying to pass <code>${n[0].find(n[4]).type}</code> to a [.+section] block, but this block only accepts the properties <code>className</code> and <code>id</code>.`),
            e.$set(l)
        },
        i(n) {
            t || (w(e.$$.fragment, n),
            t = !0)
        },
        o(n) {
            y(e.$$.fragment, n),
            t = !1
        },
        d(n) {
            G(e, n)
        }
    }
}
function Gb(r) {
    let e, t, n, s, l;
    const i = [Vb, Rb]
      , o = [];
    function a(f, u) {
        return u & 1 && (e = null),
        e == null && (e = !!f[0].some(f[4])),
        e ? 0 : 1
    }
    return t = a(r, -1),
    n = o[t] = i[t](r),
    {
        c() {
            n.c(),
            s = te()
        },
        l(f) {
            n.l(f),
            s = te()
        },
        m(f, u) {
            o[t].m(f, u),
            M(f, s, u),
            l = !0
        },
        p(f, [u]) {
            let c = t;
            t = a(f, u),
            t === c ? o[t].p(f, u) : (le(),
            y(o[c], 1, 1, () => {
                o[c] = null
            }
            ),
            ie(),
            n = o[t],
            n ? n.p(f, u) : (n = o[t] = i[t](f),
            n.c()),
            w(n, 1),
            n.m(s.parentNode, s))
        },
        i(f) {
            l || (w(n),
            l = !0)
        },
        o(f) {
            y(n),
            l = !1
        },
        d(f) {
            f && p(s),
            o[t].d(f)
        }
    }
}
function zb(r, e, t) {
    let n, s, l;
    Ee(r, Ve, b => t(5, l = b));
    let {$$slots: i={}, $$scope: o} = e
      , {props: a} = e
      , f = b => {
        var m, v;
        return (b == null ? void 0 : b.type) == "className" || ((m = b == null ? void 0 : b.type) == null ? void 0 : m.startsWith("className-")) || (b == null ? void 0 : b.type) == "id" || ((v = b == null ? void 0 : b.type) == null ? void 0 : v.startsWith("id-"))
    }
      , u = a.filter(f)
      , c = Object.fromEntries(u.map( ({type: b, value: m}) => [b, m]))
      , d = ["maxWidth", "marginInline", "marginBlock"]
      , h = b => d.includes(b.type) || d.some(m => b.type.startsWith(m + "-"));
    const _ = b => !f(b);
    return r.$$set = b => {
        "props"in b && t(0, a = b.props),
        "$$scope"in b && t(6, o = b.$$scope)
    }
    ,
    r.$$.update = () => {
        r.$$.dirty & 32 && t(2, {className: n, id: s} = ze(c, l), n, (t(1, s),
        t(10, c),
        t(5, l)))
    }
    ,
    [a, s, n, f, h, l, o, i, _]
}
class e8 extends x {
    constructor(e) {
        super(),
        $(this, e, zb, Gb, Z, {
            props: 0
        })
    }
}
export {Mr as $, Vt as A, i6 as B, X6 as C, wl as D, D6 as E, Kg as F, R6 as G, k4 as H, G6 as I, Hg as J, p6 as K, J6 as L, z6 as M, qg as N, Bg as O, U6 as P, Da as Q, F6 as R, U5 as S, lb as T, cg as U, Z6 as V, m2 as W, Xg as X, Zg as Y, yp as Z, s6 as _, qe as a, Jb as a$, wp as a0, P6 as a1, xb as a2, g6 as a3, Dg as a4, Wt as a5, v6 as a6, Yg as a7, w6 as a8, Vg as a9, lp as aA, I6 as aB, t6 as aC, e6 as aD, Xb as aE, $b as aF, C6 as aG, it as aH, na as aI, k6 as aJ, f6 as aK, zt as aL, ca as aM, E6 as aN, T6 as aO, a6 as aP, Vr as aQ, tp as aR, Jg as aS, c6 as aT, T2 as aU, n6 as aV, ns as aW, Jt as aX, o6 as aY, ia as aZ, Tg as a_, Lg as aa, nt as ab, S6 as ac, _p as ad, pa as ae, Ug as af, m6 as ag, _t as ah, ba as ai, _6 as aj, Qb as ak, b6 as al, Sn as am, sn as an, y6 as ao, sp as ap, sa as aq, Dr as ar, u6 as as, Gg as at, h6 as au, r6 as av, Pn as aw, aa as ax, kp as ay, A6 as az, Yb as b, Zr as b0, Og as b1, Kb as b2, Q6 as c, L6 as d, Oe as e, V6 as f, K5 as g, H6 as h, dp as i, q6 as j, K6 as k, Y6 as l, x6 as m, $6 as n, dg as o, zg as p, e8 as q, j4 as r, et as s, ot as t, po as u, W6 as v, go as w, l6 as x, d6 as y, ra as z};
function __vite__mapDeps(indexes) {
    if (!__vite__mapDeps.viteFileDeps) {
        __vite__mapDeps.viteFileDeps = ["./DFCQRslK.js", "./DglaqbsG.js", "./lVT7bpjj.js", "./BzBuajsG.js", "../assets/index.CAbSeAil.css", "./DSQPIb8D.js", "./DXlS5DSW.js", "../assets/index.Cux-peEG.css", "../assets/index.D5m33_uu.css", "../assets/tip.q4G46hz0.css", "./gFYpRMCR.js", "./Brp_f91D.js", "./k4zClm7u.js", "../assets/index.CTFQYT9H.css", "./BIOL75Rf.js", "./DMp-kFd0.js", "../assets/index.CWrRhPHR.css", "./C13LeqmI.js", "./CW4H3xgU.js", "../assets/index.Doyfu8sW.css", "./B30tEZS2.js", "../assets/index.CToh2F1F.css", "./DoLZ0AjQ.js", "./DP50uc3n.js", "../assets/index.Cb643P3B.css", "./CLkNFwDq.js", "../assets/index.Bghwy696.css", "./BdBPAh5D.js", "./Dh-UnN3q.js", "../assets/index.wOFYUHJK.css", "./yGesxUia.js", "../assets/index.MEumDZ6Z.css", "./CAmaHURj.js", "./B51zRgia.js", "../assets/index.CpjmCAAm.css", "./19O7tHqi.js", "./FwP9yK4X.js", "../assets/index.eSvFaQeK.css", "./D6LtZ198.js", "../assets/index.B9GiM9f7.css", "./amsPdqmh.js", "./Blp0C3uG.js", "../assets/index.9gNRX1Wt.css", "./CoZD6MNV.js", "../assets/index.C7KgFdD_.css", "./iffbcJrS.js", "../assets/index.C_BBg_1g.css", "./KkXc_DUJ.js", "../assets/index.VQAgzwPt.css", "./Dhwahgyu.js", "../assets/index.BPIdglq8.css", "../assets/index.Bm0_Bdsv.css"]
    }
    return indexes.map( (i) => __vite__mapDeps.viteFileDeps[i])
}
