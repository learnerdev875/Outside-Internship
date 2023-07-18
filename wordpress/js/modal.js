/*! For license information please see modal.js.LICENSE.txt */
(() => {
  "use strict";
  var t = {
      d: (e, i) => {
        for (var n in i)
          t.o(i, n) &&
            !t.o(e, n) &&
            Object.defineProperty(e, n, { enumerable: !0, get: i[n] });
      },
      o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
      r: (t) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      },
    },
    e = {};
  t.r(e),
    t.d(e, {
      afterMain: () => w,
      afterRead: () => b,
      afterWrite: () => T,
      applyStyles: () => $,
      arrow: () => G,
      auto: () => r,
      basePlacements: () => a,
      beforeMain: () => v,
      beforeRead: () => m,
      beforeWrite: () => A,
      bottom: () => n,
      clippingParents: () => h,
      computeStyles: () => et,
      createPopper: () => Dt,
      createPopperBase: () => Lt,
      createPopperLite: () => $t,
      detectOverflow: () => mt,
      end: () => c,
      eventListeners: () => nt,
      flip: () => _t,
      hide: () => yt,
      left: () => o,
      main: () => y,
      modifierPhases: () => C,
      offset: () => wt,
      placements: () => g,
      popper: () => d,
      popperGenerator: () => kt,
      popperOffsets: () => At,
      preventOverflow: () => Et,
      read: () => _,
      reference: () => f,
      right: () => s,
      start: () => l,
      top: () => i,
      variationPlacements: () => p,
      viewport: () => u,
      write: () => E,
    });
  var i = "top",
    n = "bottom",
    s = "right",
    o = "left",
    r = "auto",
    a = [i, n, s, o],
    l = "start",
    c = "end",
    h = "clippingParents",
    u = "viewport",
    d = "popper",
    f = "reference",
    p = a.reduce(function (t, e) {
      return t.concat([e + "-" + l, e + "-" + c]);
    }, []),
    g = [].concat(a, [r]).reduce(function (t, e) {
      return t.concat([e, e + "-" + l, e + "-" + c]);
    }, []),
    m = "beforeRead",
    _ = "read",
    b = "afterRead",
    v = "beforeMain",
    y = "main",
    w = "afterMain",
    A = "beforeWrite",
    E = "write",
    T = "afterWrite",
    C = [m, _, b, v, y, w, A, E, T];
  function O(t) {
    return t ? (t.nodeName || "").toLowerCase() : null;
  }
  function x(t) {
    if (null == t) return window;
    if ("[object Window]" !== t.toString()) {
      var e = t.ownerDocument;
      return (e && e.defaultView) || window;
    }
    return t;
  }
  function k(t) {
    return t instanceof x(t).Element || t instanceof Element;
  }
  function L(t) {
    return t instanceof x(t).HTMLElement || t instanceof HTMLElement;
  }
  function D(t) {
    return (
      "undefined" != typeof ShadowRoot &&
      (t instanceof x(t).ShadowRoot || t instanceof ShadowRoot)
    );
  }
  const $ = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function (t) {
      var e = t.state;
      Object.keys(e.elements).forEach(function (t) {
        var i = e.styles[t] || {},
          n = e.attributes[t] || {},
          s = e.elements[t];
        L(s) &&
          O(s) &&
          (Object.assign(s.style, i),
          Object.keys(n).forEach(function (t) {
            var e = n[t];
            !1 === e
              ? s.removeAttribute(t)
              : s.setAttribute(t, !0 === e ? "" : e);
          }));
      });
    },
    effect: function (t) {
      var e = t.state,
        i = {
          popper: {
            position: e.options.strategy,
            left: "0",
            top: "0",
            margin: "0",
          },
          arrow: { position: "absolute" },
          reference: {},
        };
      return (
        Object.assign(e.elements.popper.style, i.popper),
        (e.styles = i),
        e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
        function () {
          Object.keys(e.elements).forEach(function (t) {
            var n = e.elements[t],
              s = e.attributes[t] || {},
              o = Object.keys(
                e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]
              ).reduce(function (t, e) {
                return (t[e] = ""), t;
              }, {});
            L(n) &&
              O(n) &&
              (Object.assign(n.style, o),
              Object.keys(s).forEach(function (t) {
                n.removeAttribute(t);
              }));
          });
        }
      );
    },
    requires: ["computeStyles"],
  };
  function S(t) {
    return t.split("-")[0];
  }
  var I = Math.max,
    N = Math.min,
    P = Math.round;
  function j() {
    var t = navigator.userAgentData;
    return null != t && t.brands
      ? t.brands
          .map(function (t) {
            return t.brand + "/" + t.version;
          })
          .join(" ")
      : navigator.userAgent;
  }
  function M() {
    return !/^((?!chrome|android).)*safari/i.test(j());
  }
  function H(t, e, i) {
    void 0 === e && (e = !1), void 0 === i && (i = !1);
    var n = t.getBoundingClientRect(),
      s = 1,
      o = 1;
    e &&
      L(t) &&
      ((s = (t.offsetWidth > 0 && P(n.width) / t.offsetWidth) || 1),
      (o = (t.offsetHeight > 0 && P(n.height) / t.offsetHeight) || 1));
    var r = (k(t) ? x(t) : window).visualViewport,
      a = !M() && i,
      l = (n.left + (a && r ? r.offsetLeft : 0)) / s,
      c = (n.top + (a && r ? r.offsetTop : 0)) / o,
      h = n.width / s,
      u = n.height / o;
    return {
      width: h,
      height: u,
      top: c,
      right: l + h,
      bottom: c + u,
      left: l,
      x: l,
      y: c,
    };
  }
  function W(t) {
    var e = H(t),
      i = t.offsetWidth,
      n = t.offsetHeight;
    return (
      Math.abs(e.width - i) <= 1 && (i = e.width),
      Math.abs(e.height - n) <= 1 && (n = e.height),
      { x: t.offsetLeft, y: t.offsetTop, width: i, height: n }
    );
  }
  function F(t, e) {
    var i = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return !0;
    if (i && D(i)) {
      var n = e;
      do {
        if (n && t.isSameNode(n)) return !0;
        n = n.parentNode || n.host;
      } while (n);
    }
    return !1;
  }
  function B(t) {
    return x(t).getComputedStyle(t);
  }
  function z(t) {
    return ["table", "td", "th"].indexOf(O(t)) >= 0;
  }
  function q(t) {
    return ((k(t) ? t.ownerDocument : t.document) || window.document)
      .documentElement;
  }
  function R(t) {
    return "html" === O(t)
      ? t
      : t.assignedSlot || t.parentNode || (D(t) ? t.host : null) || q(t);
  }
  function V(t) {
    return L(t) && "fixed" !== B(t).position ? t.offsetParent : null;
  }
  function K(t) {
    for (var e = x(t), i = V(t); i && z(i) && "static" === B(i).position; )
      i = V(i);
    return i &&
      ("html" === O(i) || ("body" === O(i) && "static" === B(i).position))
      ? e
      : i ||
          (function (t) {
            var e = /firefox/i.test(j());
            if (/Trident/i.test(j()) && L(t) && "fixed" === B(t).position)
              return null;
            var i = R(t);
            for (
              D(i) && (i = i.host);
              L(i) && ["html", "body"].indexOf(O(i)) < 0;

            ) {
              var n = B(i);
              if (
                "none" !== n.transform ||
                "none" !== n.perspective ||
                "paint" === n.contain ||
                -1 !== ["transform", "perspective"].indexOf(n.willChange) ||
                (e && "filter" === n.willChange) ||
                (e && n.filter && "none" !== n.filter)
              )
                return i;
              i = i.parentNode;
            }
            return null;
          })(t) ||
          e;
  }
  function Q(t) {
    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
  }
  function X(t, e, i) {
    return I(t, N(e, i));
  }
  function Y(t) {
    return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t);
  }
  function U(t, e) {
    return e.reduce(function (e, i) {
      return (e[i] = t), e;
    }, {});
  }
  const G = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function (t) {
      var e,
        r = t.state,
        l = t.name,
        c = t.options,
        h = r.elements.arrow,
        u = r.modifiersData.popperOffsets,
        d = S(r.placement),
        f = Q(d),
        p = [o, s].indexOf(d) >= 0 ? "height" : "width";
      if (h && u) {
        var g = (function (t, e) {
            return Y(
              "number" !=
                typeof (t =
                  "function" == typeof t
                    ? t(Object.assign({}, e.rects, { placement: e.placement }))
                    : t)
                ? t
                : U(t, a)
            );
          })(c.padding, r),
          m = W(h),
          _ = "y" === f ? i : o,
          b = "y" === f ? n : s,
          v =
            r.rects.reference[p] +
            r.rects.reference[f] -
            u[f] -
            r.rects.popper[p],
          y = u[f] - r.rects.reference[f],
          w = K(h),
          A = w ? ("y" === f ? w.clientHeight || 0 : w.clientWidth || 0) : 0,
          E = v / 2 - y / 2,
          T = g[_],
          C = A - m[p] - g[b],
          O = A / 2 - m[p] / 2 + E,
          x = X(T, O, C),
          k = f;
        r.modifiersData[l] = (((e = {})[k] = x), (e.centerOffset = x - O), e);
      }
    },
    effect: function (t) {
      var e = t.state,
        i = t.options.element,
        n = void 0 === i ? "[data-popper-arrow]" : i;
      null != n &&
        ("string" != typeof n || (n = e.elements.popper.querySelector(n))) &&
        F(e.elements.popper, n) &&
        (e.elements.arrow = n);
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
  };
  function J(t) {
    return t.split("-")[1];
  }
  var Z = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function tt(t) {
    var e,
      r = t.popper,
      a = t.popperRect,
      l = t.placement,
      h = t.variation,
      u = t.offsets,
      d = t.position,
      f = t.gpuAcceleration,
      p = t.adaptive,
      g = t.roundOffsets,
      m = t.isFixed,
      _ = u.x,
      b = void 0 === _ ? 0 : _,
      v = u.y,
      y = void 0 === v ? 0 : v,
      w = "function" == typeof g ? g({ x: b, y }) : { x: b, y };
    (b = w.x), (y = w.y);
    var A = u.hasOwnProperty("x"),
      E = u.hasOwnProperty("y"),
      T = o,
      C = i,
      O = window;
    if (p) {
      var k = K(r),
        L = "clientHeight",
        D = "clientWidth";
      k === x(r) &&
        "static" !== B((k = q(r))).position &&
        "absolute" === d &&
        ((L = "scrollHeight"), (D = "scrollWidth")),
        (l === i || ((l === o || l === s) && h === c)) &&
          ((C = n),
          (y -=
            (m && k === O && O.visualViewport
              ? O.visualViewport.height
              : k[L]) - a.height),
          (y *= f ? 1 : -1)),
        (l !== o && ((l !== i && l !== n) || h !== c)) ||
          ((T = s),
          (b -=
            (m && k === O && O.visualViewport ? O.visualViewport.width : k[D]) -
            a.width),
          (b *= f ? 1 : -1));
    }
    var $,
      S = Object.assign({ position: d }, p && Z),
      I =
        !0 === g
          ? (function (t) {
              var e = t.x,
                i = t.y,
                n = window.devicePixelRatio || 1;
              return { x: P(e * n) / n || 0, y: P(i * n) / n || 0 };
            })({ x: b, y })
          : { x: b, y };
    return (
      (b = I.x),
      (y = I.y),
      f
        ? Object.assign(
            {},
            S,
            ((($ = {})[C] = E ? "0" : ""),
            ($[T] = A ? "0" : ""),
            ($.transform =
              (O.devicePixelRatio || 1) <= 1
                ? "translate(" + b + "px, " + y + "px)"
                : "translate3d(" + b + "px, " + y + "px, 0)"),
            $)
          )
        : Object.assign(
            {},
            S,
            (((e = {})[C] = E ? y + "px" : ""),
            (e[T] = A ? b + "px" : ""),
            (e.transform = ""),
            e)
          )
    );
  }
  const et = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function (t) {
      var e = t.state,
        i = t.options,
        n = i.gpuAcceleration,
        s = void 0 === n || n,
        o = i.adaptive,
        r = void 0 === o || o,
        a = i.roundOffsets,
        l = void 0 === a || a,
        c = {
          placement: S(e.placement),
          variation: J(e.placement),
          popper: e.elements.popper,
          popperRect: e.rects.popper,
          gpuAcceleration: s,
          isFixed: "fixed" === e.options.strategy,
        };
      null != e.modifiersData.popperOffsets &&
        (e.styles.popper = Object.assign(
          {},
          e.styles.popper,
          tt(
            Object.assign({}, c, {
              offsets: e.modifiersData.popperOffsets,
              position: e.options.strategy,
              adaptive: r,
              roundOffsets: l,
            })
          )
        )),
        null != e.modifiersData.arrow &&
          (e.styles.arrow = Object.assign(
            {},
            e.styles.arrow,
            tt(
              Object.assign({}, c, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: l,
              })
            )
          )),
        (e.attributes.popper = Object.assign({}, e.attributes.popper, {
          "data-popper-placement": e.placement,
        }));
    },
    data: {},
  };
  var it = { passive: !0 };
  const nt = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: function (t) {
      var e = t.state,
        i = t.instance,
        n = t.options,
        s = n.scroll,
        o = void 0 === s || s,
        r = n.resize,
        a = void 0 === r || r,
        l = x(e.elements.popper),
        c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
      return (
        o &&
          c.forEach(function (t) {
            t.addEventListener("scroll", i.update, it);
          }),
        a && l.addEventListener("resize", i.update, it),
        function () {
          o &&
            c.forEach(function (t) {
              t.removeEventListener("scroll", i.update, it);
            }),
            a && l.removeEventListener("resize", i.update, it);
        }
      );
    },
    data: {},
  };
  var st = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function ot(t) {
    return t.replace(/left|right|bottom|top/g, function (t) {
      return st[t];
    });
  }
  var rt = { start: "end", end: "start" };
  function at(t) {
    return t.replace(/start|end/g, function (t) {
      return rt[t];
    });
  }
  function lt(t) {
    var e = x(t);
    return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
  }
  function ct(t) {
    return H(q(t)).left + lt(t).scrollLeft;
  }
  function ht(t) {
    var e = B(t),
      i = e.overflow,
      n = e.overflowX,
      s = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + s + n);
  }
  function ut(t) {
    return ["html", "body", "#document"].indexOf(O(t)) >= 0
      ? t.ownerDocument.body
      : L(t) && ht(t)
      ? t
      : ut(R(t));
  }
  function dt(t, e) {
    var i;
    void 0 === e && (e = []);
    var n = ut(t),
      s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
      o = x(n),
      r = s ? [o].concat(o.visualViewport || [], ht(n) ? n : []) : n,
      a = e.concat(r);
    return s ? a : a.concat(dt(R(r)));
  }
  function ft(t) {
    return Object.assign({}, t, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height,
    });
  }
  function pt(t, e, i) {
    return e === u
      ? ft(
          (function (t, e) {
            var i = x(t),
              n = q(t),
              s = i.visualViewport,
              o = n.clientWidth,
              r = n.clientHeight,
              a = 0,
              l = 0;
            if (s) {
              (o = s.width), (r = s.height);
              var c = M();
              (c || (!c && "fixed" === e)) &&
                ((a = s.offsetLeft), (l = s.offsetTop));
            }
            return { width: o, height: r, x: a + ct(t), y: l };
          })(t, i)
        )
      : k(e)
      ? (function (t, e) {
          var i = H(t, !1, "fixed" === e);
          return (
            (i.top = i.top + t.clientTop),
            (i.left = i.left + t.clientLeft),
            (i.bottom = i.top + t.clientHeight),
            (i.right = i.left + t.clientWidth),
            (i.width = t.clientWidth),
            (i.height = t.clientHeight),
            (i.x = i.left),
            (i.y = i.top),
            i
          );
        })(e, i)
      : ft(
          (function (t) {
            var e,
              i = q(t),
              n = lt(t),
              s = null == (e = t.ownerDocument) ? void 0 : e.body,
              o = I(
                i.scrollWidth,
                i.clientWidth,
                s ? s.scrollWidth : 0,
                s ? s.clientWidth : 0
              ),
              r = I(
                i.scrollHeight,
                i.clientHeight,
                s ? s.scrollHeight : 0,
                s ? s.clientHeight : 0
              ),
              a = -n.scrollLeft + ct(t),
              l = -n.scrollTop;
            return (
              "rtl" === B(s || i).direction &&
                (a += I(i.clientWidth, s ? s.clientWidth : 0) - o),
              { width: o, height: r, x: a, y: l }
            );
          })(q(t))
        );
  }
  function gt(t) {
    var e,
      r = t.reference,
      a = t.element,
      h = t.placement,
      u = h ? S(h) : null,
      d = h ? J(h) : null,
      f = r.x + r.width / 2 - a.width / 2,
      p = r.y + r.height / 2 - a.height / 2;
    switch (u) {
      case i:
        e = { x: f, y: r.y - a.height };
        break;
      case n:
        e = { x: f, y: r.y + r.height };
        break;
      case s:
        e = { x: r.x + r.width, y: p };
        break;
      case o:
        e = { x: r.x - a.width, y: p };
        break;
      default:
        e = { x: r.x, y: r.y };
    }
    var g = u ? Q(u) : null;
    if (null != g) {
      var m = "y" === g ? "height" : "width";
      switch (d) {
        case l:
          e[g] = e[g] - (r[m] / 2 - a[m] / 2);
          break;
        case c:
          e[g] = e[g] + (r[m] / 2 - a[m] / 2);
      }
    }
    return e;
  }
  function mt(t, e) {
    void 0 === e && (e = {});
    var o = e,
      r = o.placement,
      l = void 0 === r ? t.placement : r,
      c = o.strategy,
      p = void 0 === c ? t.strategy : c,
      g = o.boundary,
      m = void 0 === g ? h : g,
      _ = o.rootBoundary,
      b = void 0 === _ ? u : _,
      v = o.elementContext,
      y = void 0 === v ? d : v,
      w = o.altBoundary,
      A = void 0 !== w && w,
      E = o.padding,
      T = void 0 === E ? 0 : E,
      C = Y("number" != typeof T ? T : U(T, a)),
      x = y === d ? f : d,
      D = t.rects.popper,
      $ = t.elements[A ? x : y],
      S = (function (t, e, i, n) {
        var s =
            "clippingParents" === e
              ? (function (t) {
                  var e = dt(R(t)),
                    i =
                      ["absolute", "fixed"].indexOf(B(t).position) >= 0 && L(t)
                        ? K(t)
                        : t;
                  return k(i)
                    ? e.filter(function (t) {
                        return k(t) && F(t, i) && "body" !== O(t);
                      })
                    : [];
                })(t)
              : [].concat(e),
          o = [].concat(s, [i]),
          r = o[0],
          a = o.reduce(function (e, i) {
            var s = pt(t, i, n);
            return (
              (e.top = I(s.top, e.top)),
              (e.right = N(s.right, e.right)),
              (e.bottom = N(s.bottom, e.bottom)),
              (e.left = I(s.left, e.left)),
              e
            );
          }, pt(t, r, n));
        return (
          (a.width = a.right - a.left),
          (a.height = a.bottom - a.top),
          (a.x = a.left),
          (a.y = a.top),
          a
        );
      })(k($) ? $ : $.contextElement || q(t.elements.popper), m, b, p),
      P = H(t.elements.reference),
      j = gt({ reference: P, element: D, strategy: "absolute", placement: l }),
      M = ft(Object.assign({}, D, j)),
      W = y === d ? M : P,
      z = {
        top: S.top - W.top + C.top,
        bottom: W.bottom - S.bottom + C.bottom,
        left: S.left - W.left + C.left,
        right: W.right - S.right + C.right,
      },
      V = t.modifiersData.offset;
    if (y === d && V) {
      var Q = V[l];
      Object.keys(z).forEach(function (t) {
        var e = [s, n].indexOf(t) >= 0 ? 1 : -1,
          o = [i, n].indexOf(t) >= 0 ? "y" : "x";
        z[t] += Q[o] * e;
      });
    }
    return z;
  }
  const _t = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function (t) {
      var e = t.state,
        c = t.options,
        h = t.name;
      if (!e.modifiersData[h]._skip) {
        for (
          var u = c.mainAxis,
            d = void 0 === u || u,
            f = c.altAxis,
            m = void 0 === f || f,
            _ = c.fallbackPlacements,
            b = c.padding,
            v = c.boundary,
            y = c.rootBoundary,
            w = c.altBoundary,
            A = c.flipVariations,
            E = void 0 === A || A,
            T = c.allowedAutoPlacements,
            C = e.options.placement,
            O = S(C),
            x =
              _ ||
              (O !== C && E
                ? (function (t) {
                    if (S(t) === r) return [];
                    var e = ot(t);
                    return [at(t), e, at(e)];
                  })(C)
                : [ot(C)]),
            k = [C].concat(x).reduce(function (t, i) {
              return t.concat(
                S(i) === r
                  ? (function (t, e) {
                      void 0 === e && (e = {});
                      var i = e,
                        n = i.placement,
                        s = i.boundary,
                        o = i.rootBoundary,
                        r = i.padding,
                        l = i.flipVariations,
                        c = i.allowedAutoPlacements,
                        h = void 0 === c ? g : c,
                        u = J(n),
                        d = u
                          ? l
                            ? p
                            : p.filter(function (t) {
                                return J(t) === u;
                              })
                          : a,
                        f = d.filter(function (t) {
                          return h.indexOf(t) >= 0;
                        });
                      0 === f.length && (f = d);
                      var m = f.reduce(function (e, i) {
                        return (
                          (e[i] = mt(t, {
                            placement: i,
                            boundary: s,
                            rootBoundary: o,
                            padding: r,
                          })[S(i)]),
                          e
                        );
                      }, {});
                      return Object.keys(m).sort(function (t, e) {
                        return m[t] - m[e];
                      });
                    })(e, {
                      placement: i,
                      boundary: v,
                      rootBoundary: y,
                      padding: b,
                      flipVariations: E,
                      allowedAutoPlacements: T,
                    })
                  : i
              );
            }, []),
            L = e.rects.reference,
            D = e.rects.popper,
            $ = new Map(),
            I = !0,
            N = k[0],
            P = 0;
          P < k.length;
          P++
        ) {
          var j = k[P],
            M = S(j),
            H = J(j) === l,
            W = [i, n].indexOf(M) >= 0,
            F = W ? "width" : "height",
            B = mt(e, {
              placement: j,
              boundary: v,
              rootBoundary: y,
              altBoundary: w,
              padding: b,
            }),
            z = W ? (H ? s : o) : H ? n : i;
          L[F] > D[F] && (z = ot(z));
          var q = ot(z),
            R = [];
          if (
            (d && R.push(B[M] <= 0),
            m && R.push(B[z] <= 0, B[q] <= 0),
            R.every(function (t) {
              return t;
            }))
          ) {
            (N = j), (I = !1);
            break;
          }
          $.set(j, R);
        }
        if (I)
          for (
            var V = function (t) {
                var e = k.find(function (e) {
                  var i = $.get(e);
                  if (i)
                    return i.slice(0, t).every(function (t) {
                      return t;
                    });
                });
                if (e) return (N = e), "break";
              },
              K = E ? 3 : 1;
            K > 0 && "break" !== V(K);
            K--
          );
        e.placement !== N &&
          ((e.modifiersData[h]._skip = !0), (e.placement = N), (e.reset = !0));
      }
    },
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
  };
  function bt(t, e, i) {
    return (
      void 0 === i && (i = { x: 0, y: 0 }),
      {
        top: t.top - e.height - i.y,
        right: t.right - e.width + i.x,
        bottom: t.bottom - e.height + i.y,
        left: t.left - e.width - i.x,
      }
    );
  }
  function vt(t) {
    return [i, s, n, o].some(function (e) {
      return t[e] >= 0;
    });
  }
  const yt = {
      name: "hide",
      enabled: !0,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: function (t) {
        var e = t.state,
          i = t.name,
          n = e.rects.reference,
          s = e.rects.popper,
          o = e.modifiersData.preventOverflow,
          r = mt(e, { elementContext: "reference" }),
          a = mt(e, { altBoundary: !0 }),
          l = bt(r, n),
          c = bt(a, s, o),
          h = vt(l),
          u = vt(c);
        (e.modifiersData[i] = {
          referenceClippingOffsets: l,
          popperEscapeOffsets: c,
          isReferenceHidden: h,
          hasPopperEscaped: u,
        }),
          (e.attributes.popper = Object.assign({}, e.attributes.popper, {
            "data-popper-reference-hidden": h,
            "data-popper-escaped": u,
          }));
      },
    },
    wt = {
      name: "offset",
      enabled: !0,
      phase: "main",
      requires: ["popperOffsets"],
      fn: function (t) {
        var e = t.state,
          n = t.options,
          r = t.name,
          a = n.offset,
          l = void 0 === a ? [0, 0] : a,
          c = g.reduce(function (t, n) {
            return (
              (t[n] = (function (t, e, n) {
                var r = S(t),
                  a = [o, i].indexOf(r) >= 0 ? -1 : 1,
                  l =
                    "function" == typeof n
                      ? n(Object.assign({}, e, { placement: t }))
                      : n,
                  c = l[0],
                  h = l[1];
                return (
                  (c = c || 0),
                  (h = (h || 0) * a),
                  [o, s].indexOf(r) >= 0 ? { x: h, y: c } : { x: c, y: h }
                );
              })(n, e.rects, l)),
              t
            );
          }, {}),
          h = c[e.placement],
          u = h.x,
          d = h.y;
        null != e.modifiersData.popperOffsets &&
          ((e.modifiersData.popperOffsets.x += u),
          (e.modifiersData.popperOffsets.y += d)),
          (e.modifiersData[r] = c);
      },
    },
    At = {
      name: "popperOffsets",
      enabled: !0,
      phase: "read",
      fn: function (t) {
        var e = t.state,
          i = t.name;
        e.modifiersData[i] = gt({
          reference: e.rects.reference,
          element: e.rects.popper,
          strategy: "absolute",
          placement: e.placement,
        });
      },
      data: {},
    },
    Et = {
      name: "preventOverflow",
      enabled: !0,
      phase: "main",
      fn: function (t) {
        var e = t.state,
          r = t.options,
          a = t.name,
          c = r.mainAxis,
          h = void 0 === c || c,
          u = r.altAxis,
          d = void 0 !== u && u,
          f = r.boundary,
          p = r.rootBoundary,
          g = r.altBoundary,
          m = r.padding,
          _ = r.tether,
          b = void 0 === _ || _,
          v = r.tetherOffset,
          y = void 0 === v ? 0 : v,
          w = mt(e, {
            boundary: f,
            rootBoundary: p,
            padding: m,
            altBoundary: g,
          }),
          A = S(e.placement),
          E = J(e.placement),
          T = !E,
          C = Q(A),
          O = "x" === C ? "y" : "x",
          x = e.modifiersData.popperOffsets,
          k = e.rects.reference,
          L = e.rects.popper,
          D =
            "function" == typeof y
              ? y(Object.assign({}, e.rects, { placement: e.placement }))
              : y,
          $ =
            "number" == typeof D
              ? { mainAxis: D, altAxis: D }
              : Object.assign({ mainAxis: 0, altAxis: 0 }, D),
          P = e.modifiersData.offset
            ? e.modifiersData.offset[e.placement]
            : null,
          j = { x: 0, y: 0 };
        if (x) {
          if (h) {
            var M,
              H = "y" === C ? i : o,
              F = "y" === C ? n : s,
              B = "y" === C ? "height" : "width",
              z = x[C],
              q = z + w[H],
              R = z - w[F],
              V = b ? -L[B] / 2 : 0,
              Y = E === l ? k[B] : L[B],
              U = E === l ? -L[B] : -k[B],
              G = e.elements.arrow,
              Z = b && G ? W(G) : { width: 0, height: 0 },
              tt = e.modifiersData["arrow#persistent"]
                ? e.modifiersData["arrow#persistent"].padding
                : { top: 0, right: 0, bottom: 0, left: 0 },
              et = tt[H],
              it = tt[F],
              nt = X(0, k[B], Z[B]),
              st = T
                ? k[B] / 2 - V - nt - et - $.mainAxis
                : Y - nt - et - $.mainAxis,
              ot = T
                ? -k[B] / 2 + V + nt + it + $.mainAxis
                : U + nt + it + $.mainAxis,
              rt = e.elements.arrow && K(e.elements.arrow),
              at = rt
                ? "y" === C
                  ? rt.clientTop || 0
                  : rt.clientLeft || 0
                : 0,
              lt = null != (M = null == P ? void 0 : P[C]) ? M : 0,
              ct = z + ot - lt,
              ht = X(b ? N(q, z + st - lt - at) : q, z, b ? I(R, ct) : R);
            (x[C] = ht), (j[C] = ht - z);
          }
          if (d) {
            var ut,
              dt = "x" === C ? i : o,
              ft = "x" === C ? n : s,
              pt = x[O],
              gt = "y" === O ? "height" : "width",
              _t = pt + w[dt],
              bt = pt - w[ft],
              vt = -1 !== [i, o].indexOf(A),
              yt = null != (ut = null == P ? void 0 : P[O]) ? ut : 0,
              wt = vt ? _t : pt - k[gt] - L[gt] - yt + $.altAxis,
              At = vt ? pt + k[gt] + L[gt] - yt - $.altAxis : bt,
              Et =
                b && vt
                  ? (function (t, e, i) {
                      var n = X(t, e, i);
                      return n > i ? i : n;
                    })(wt, pt, At)
                  : X(b ? wt : _t, pt, b ? At : bt);
            (x[O] = Et), (j[O] = Et - pt);
          }
          e.modifiersData[a] = j;
        }
      },
      requiresIfExists: ["offset"],
    };
  function Tt(t, e, i) {
    void 0 === i && (i = !1);
    var n,
      s,
      o = L(e),
      r =
        L(e) &&
        (function (t) {
          var e = t.getBoundingClientRect(),
            i = P(e.width) / t.offsetWidth || 1,
            n = P(e.height) / t.offsetHeight || 1;
          return 1 !== i || 1 !== n;
        })(e),
      a = q(e),
      l = H(t, r, i),
      c = { scrollLeft: 0, scrollTop: 0 },
      h = { x: 0, y: 0 };
    return (
      (o || (!o && !i)) &&
        (("body" !== O(e) || ht(a)) &&
          (c =
            (n = e) !== x(n) && L(n)
              ? { scrollLeft: (s = n).scrollLeft, scrollTop: s.scrollTop }
              : lt(n)),
        L(e)
          ? (((h = H(e, !0)).x += e.clientLeft), (h.y += e.clientTop))
          : a && (h.x = ct(a))),
      {
        x: l.left + c.scrollLeft - h.x,
        y: l.top + c.scrollTop - h.y,
        width: l.width,
        height: l.height,
      }
    );
  }
  function Ct(t) {
    var e = new Map(),
      i = new Set(),
      n = [];
    function s(t) {
      i.add(t.name),
        []
          .concat(t.requires || [], t.requiresIfExists || [])
          .forEach(function (t) {
            if (!i.has(t)) {
              var n = e.get(t);
              n && s(n);
            }
          }),
        n.push(t);
    }
    return (
      t.forEach(function (t) {
        e.set(t.name, t);
      }),
      t.forEach(function (t) {
        i.has(t.name) || s(t);
      }),
      n
    );
  }
  var Ot = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function xt() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    return !e.some(function (t) {
      return !(t && "function" == typeof t.getBoundingClientRect);
    });
  }
  function kt(t) {
    void 0 === t && (t = {});
    var e = t,
      i = e.defaultModifiers,
      n = void 0 === i ? [] : i,
      s = e.defaultOptions,
      o = void 0 === s ? Ot : s;
    return function (t, e, i) {
      void 0 === i && (i = o);
      var s,
        r,
        a = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, Ot, o),
          modifiersData: {},
          elements: { reference: t, popper: e },
          attributes: {},
          styles: {},
        },
        l = [],
        c = !1,
        h = {
          state: a,
          setOptions: function (i) {
            var s = "function" == typeof i ? i(a.options) : i;
            u(),
              (a.options = Object.assign({}, o, a.options, s)),
              (a.scrollParents = {
                reference: k(t)
                  ? dt(t)
                  : t.contextElement
                  ? dt(t.contextElement)
                  : [],
                popper: dt(e),
              });
            var r,
              c,
              d = (function (t) {
                var e = Ct(t);
                return C.reduce(function (t, i) {
                  return t.concat(
                    e.filter(function (t) {
                      return t.phase === i;
                    })
                  );
                }, []);
              })(
                ((r = [].concat(n, a.options.modifiers)),
                (c = r.reduce(function (t, e) {
                  var i = t[e.name];
                  return (
                    (t[e.name] = i
                      ? Object.assign({}, i, e, {
                          options: Object.assign({}, i.options, e.options),
                          data: Object.assign({}, i.data, e.data),
                        })
                      : e),
                    t
                  );
                }, {})),
                Object.keys(c).map(function (t) {
                  return c[t];
                }))
              );
            return (
              (a.orderedModifiers = d.filter(function (t) {
                return t.enabled;
              })),
              a.orderedModifiers.forEach(function (t) {
                var e = t.name,
                  i = t.options,
                  n = void 0 === i ? {} : i,
                  s = t.effect;
                if ("function" == typeof s) {
                  var o = s({ state: a, name: e, instance: h, options: n });
                  l.push(o || function () {});
                }
              }),
              h.update()
            );
          },
          forceUpdate: function () {
            if (!c) {
              var t = a.elements,
                e = t.reference,
                i = t.popper;
              if (xt(e, i)) {
                (a.rects = {
                  reference: Tt(e, K(i), "fixed" === a.options.strategy),
                  popper: W(i),
                }),
                  (a.reset = !1),
                  (a.placement = a.options.placement),
                  a.orderedModifiers.forEach(function (t) {
                    return (a.modifiersData[t.name] = Object.assign(
                      {},
                      t.data
                    ));
                  });
                for (var n = 0; n < a.orderedModifiers.length; n++)
                  if (!0 !== a.reset) {
                    var s = a.orderedModifiers[n],
                      o = s.fn,
                      r = s.options,
                      l = void 0 === r ? {} : r,
                      u = s.name;
                    "function" == typeof o &&
                      (a =
                        o({ state: a, options: l, name: u, instance: h }) || a);
                  } else (a.reset = !1), (n = -1);
              }
            }
          },
          update:
            ((s = function () {
              return new Promise(function (t) {
                h.forceUpdate(), t(a);
              });
            }),
            function () {
              return (
                r ||
                  (r = new Promise(function (t) {
                    Promise.resolve().then(function () {
                      (r = void 0), t(s());
                    });
                  })),
                r
              );
            }),
          destroy: function () {
            u(), (c = !0);
          },
        };
      if (!xt(t, e)) return h;
      function u() {
        l.forEach(function (t) {
          return t();
        }),
          (l = []);
      }
      return (
        h.setOptions(i).then(function (t) {
          !c && i.onFirstUpdate && i.onFirstUpdate(t);
        }),
        h
      );
    };
  }
  var Lt = kt(),
    Dt = kt({ defaultModifiers: [nt, At, et, $, wt, _t, Et, G, yt] }),
    $t = kt({ defaultModifiers: [nt, At, et, $] });
  const St = "transitionend",
    It = (t) => {
      let e = t.getAttribute("data-bs-target");
      if (!e || "#" === e) {
        let i = t.getAttribute("href");
        if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
        i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`),
          (e = i && "#" !== i ? i.trim() : null);
      }
      return e;
    },
    Nt = (t) => {
      const e = It(t);
      return e && document.querySelector(e) ? e : null;
    },
    Pt = (t) => {
      const e = It(t);
      return e ? document.querySelector(e) : null;
    },
    jt = (t) => {
      t.dispatchEvent(new Event(St));
    },
    Mt = (t) =>
      !(!t || "object" != typeof t) &&
      (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
    Ht = (t) =>
      Mt(t)
        ? t.jquery
          ? t[0]
          : t
        : "string" == typeof t && t.length > 0
        ? document.querySelector(t)
        : null,
    Wt = (t) => {
      if (!Mt(t) || 0 === t.getClientRects().length) return !1;
      const e =
          "visible" === getComputedStyle(t).getPropertyValue("visibility"),
        i = t.closest("details:not([open])");
      if (!i) return e;
      if (i !== t) {
        const e = t.closest("summary");
        if (e && e.parentNode !== i) return !1;
        if (null === e) return !1;
      }
      return e;
    },
    Ft = (t) =>
      !t ||
      t.nodeType !== Node.ELEMENT_NODE ||
      !!t.classList.contains("disabled") ||
      (void 0 !== t.disabled
        ? t.disabled
        : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
    Bt = (t) => {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof t.getRootNode) {
        const e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      }
      return t instanceof ShadowRoot
        ? t
        : t.parentNode
        ? Bt(t.parentNode)
        : null;
    },
    zt = () => {},
    qt = (t) => {
      t.offsetHeight;
    },
    Rt = () =>
      window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
        ? window.jQuery
        : null,
    Vt = [],
    Kt = () => "rtl" === document.documentElement.dir,
    Qt = (t) => {
      var e;
      (e = () => {
        const e = Rt();
        if (e) {
          const i = t.NAME,
            n = e.fn[i];
          (e.fn[i] = t.jQueryInterface),
            (e.fn[i].Constructor = t),
            (e.fn[i].noConflict = () => ((e.fn[i] = n), t.jQueryInterface));
        }
      }),
        "loading" === document.readyState
          ? (Vt.length ||
              document.addEventListener("DOMContentLoaded", () => {
                for (const t of Vt) t();
              }),
            Vt.push(e))
          : e();
    },
    Xt = (t) => {
      "function" == typeof t && t();
    },
    Yt = (t, e, i = !0) => {
      if (!i) return void Xt(t);
      const n =
        ((t) => {
          if (!t) return 0;
          let { transitionDuration: e, transitionDelay: i } =
            window.getComputedStyle(t);
          const n = Number.parseFloat(e),
            s = Number.parseFloat(i);
          return n || s
            ? ((e = e.split(",")[0]),
              (i = i.split(",")[0]),
              1e3 * (Number.parseFloat(e) + Number.parseFloat(i)))
            : 0;
        })(e) + 5;
      let s = !1;
      const o = ({ target: i }) => {
        i === e && ((s = !0), e.removeEventListener(St, o), Xt(t));
      };
      e.addEventListener(St, o),
        setTimeout(() => {
          s || jt(e);
        }, n);
    },
    Ut = (t, e, i, n) => {
      const s = t.length;
      let o = t.indexOf(e);
      return -1 === o
        ? !i && n
          ? t[s - 1]
          : t[0]
        : ((o += i ? 1 : -1),
          n && (o = (o + s) % s),
          t[Math.max(0, Math.min(o, s - 1))]);
    },
    Gt = /[^.]*(?=\..*)\.|.*/,
    Jt = /\..*/,
    Zt = /::\d+$/,
    te = {};
  let ee = 1;
  const ie = { mouseenter: "mouseover", mouseleave: "mouseout" },
    ne = new Set([
      "click",
      "dblclick",
      "mouseup",
      "mousedown",
      "contextmenu",
      "mousewheel",
      "DOMMouseScroll",
      "mouseover",
      "mouseout",
      "mousemove",
      "selectstart",
      "selectend",
      "keydown",
      "keypress",
      "keyup",
      "orientationchange",
      "touchstart",
      "touchmove",
      "touchend",
      "touchcancel",
      "pointerdown",
      "pointermove",
      "pointerup",
      "pointerleave",
      "pointercancel",
      "gesturestart",
      "gesturechange",
      "gestureend",
      "focus",
      "blur",
      "change",
      "reset",
      "select",
      "submit",
      "focusin",
      "focusout",
      "load",
      "unload",
      "beforeunload",
      "resize",
      "move",
      "DOMContentLoaded",
      "readystatechange",
      "error",
      "abort",
      "scroll",
    ]);
  function se(t, e) {
    return (e && `${e}::${ee++}`) || t.uidEvent || ee++;
  }
  function oe(t) {
    const e = se(t);
    return (t.uidEvent = e), (te[e] = te[e] || {}), te[e];
  }
  function re(t, e, i = null) {
    return Object.values(t).find(
      (t) => t.callable === e && t.delegationSelector === i
    );
  }
  function ae(t, e, i) {
    const n = "string" == typeof e,
      s = n ? i : e || i;
    let o = ue(t);
    return ne.has(o) || (o = t), [n, s, o];
  }
  function le(t, e, i, n, s) {
    if ("string" != typeof e || !t) return;
    let [o, r, a] = ae(e, i, n);
    if (e in ie) {
      const t = (t) =>
        function (e) {
          if (
            !e.relatedTarget ||
            (e.relatedTarget !== e.delegateTarget &&
              !e.delegateTarget.contains(e.relatedTarget))
          )
            return t.call(this, e);
        };
      r = t(r);
    }
    const l = oe(t),
      c = l[a] || (l[a] = {}),
      h = re(c, r, o ? i : null);
    if (h) return void (h.oneOff = h.oneOff && s);
    const u = se(r, e.replace(Gt, "")),
      d = o
        ? (function (t, e, i) {
            return function n(s) {
              const o = t.querySelectorAll(e);
              for (let { target: r } = s; r && r !== this; r = r.parentNode)
                for (const a of o)
                  if (a === r)
                    return (
                      fe(s, { delegateTarget: r }),
                      n.oneOff && de.off(t, s.type, e, i),
                      i.apply(r, [s])
                    );
            };
          })(t, i, r)
        : (function (t, e) {
            return function i(n) {
              return (
                fe(n, { delegateTarget: t }),
                i.oneOff && de.off(t, n.type, e),
                e.apply(t, [n])
              );
            };
          })(t, r);
    (d.delegationSelector = o ? i : null),
      (d.callable = r),
      (d.oneOff = s),
      (d.uidEvent = u),
      (c[u] = d),
      t.addEventListener(a, d, o);
  }
  function ce(t, e, i, n, s) {
    const o = re(e[i], n, s);
    o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
  }
  function he(t, e, i, n) {
    const s = e[i] || {};
    for (const o of Object.keys(s))
      if (o.includes(n)) {
        const n = s[o];
        ce(t, e, i, n.callable, n.delegationSelector);
      }
  }
  function ue(t) {
    return (t = t.replace(Jt, "")), ie[t] || t;
  }
  const de = {
    on(t, e, i, n) {
      le(t, e, i, n, !1);
    },
    one(t, e, i, n) {
      le(t, e, i, n, !0);
    },
    off(t, e, i, n) {
      if ("string" != typeof e || !t) return;
      const [s, o, r] = ae(e, i, n),
        a = r !== e,
        l = oe(t),
        c = l[r] || {},
        h = e.startsWith(".");
      if (void 0 === o) {
        if (h) for (const i of Object.keys(l)) he(t, l, i, e.slice(1));
        for (const i of Object.keys(c)) {
          const n = i.replace(Zt, "");
          if (!a || e.includes(n)) {
            const e = c[i];
            ce(t, l, r, e.callable, e.delegationSelector);
          }
        }
      } else {
        if (!Object.keys(c).length) return;
        ce(t, l, r, o, s ? i : null);
      }
    },
    trigger(t, e, i) {
      if ("string" != typeof e || !t) return null;
      const n = Rt();
      let s = null,
        o = !0,
        r = !0,
        a = !1;
      e !== ue(e) &&
        n &&
        ((s = n.Event(e, i)),
        n(t).trigger(s),
        (o = !s.isPropagationStopped()),
        (r = !s.isImmediatePropagationStopped()),
        (a = s.isDefaultPrevented()));
      let l = new Event(e, { bubbles: o, cancelable: !0 });
      return (
        (l = fe(l, i)),
        a && l.preventDefault(),
        r && t.dispatchEvent(l),
        l.defaultPrevented && s && s.preventDefault(),
        l
      );
    },
  };
  function fe(t, e) {
    for (const [i, n] of Object.entries(e || {}))
      try {
        t[i] = n;
      } catch (e) {
        Object.defineProperty(t, i, { configurable: !0, get: () => n });
      }
    return t;
  }
  const pe = new Map(),
    ge = {
      set(t, e, i) {
        pe.has(t) || pe.set(t, new Map());
        const n = pe.get(t);
        n.has(e) || 0 === n.size
          ? n.set(e, i)
          : console.error(
              `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                Array.from(n.keys())[0]
              }.`
            );
      },
      get: (t, e) => (pe.has(t) && pe.get(t).get(e)) || null,
      remove(t, e) {
        if (!pe.has(t)) return;
        const i = pe.get(t);
        i.delete(e), 0 === i.size && pe.delete(t);
      },
    };
  function me(t) {
    if ("true" === t) return !0;
    if ("false" === t) return !1;
    if (t === Number(t).toString()) return Number(t);
    if ("" === t || "null" === t) return null;
    if ("string" != typeof t) return t;
    try {
      return JSON.parse(decodeURIComponent(t));
    } catch (e) {
      return t;
    }
  }
  function _e(t) {
    return t.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
  }
  const be = {
    setDataAttribute(t, e, i) {
      t.setAttribute(`data-bs-${_e(e)}`, i);
    },
    removeDataAttribute(t, e) {
      t.removeAttribute(`data-bs-${_e(e)}`);
    },
    getDataAttributes(t) {
      if (!t) return {};
      const e = {},
        i = Object.keys(t.dataset).filter(
          (t) => t.startsWith("bs") && !t.startsWith("bsConfig")
        );
      for (const n of i) {
        let i = n.replace(/^bs/, "");
        (i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
          (e[i] = me(t.dataset[n]));
      }
      return e;
    },
    getDataAttribute: (t, e) => me(t.getAttribute(`data-bs-${_e(e)}`)),
  };
  class ve {
    static get Default() {
      return {};
    }
    static get DefaultType() {
      return {};
    }
    static get NAME() {
      throw new Error(
        'You have to implement the static method "NAME", for each component!'
      );
    }
    _getConfig(t) {
      return (
        (t = this._mergeConfigObj(t)),
        (t = this._configAfterMerge(t)),
        this._typeCheckConfig(t),
        t
      );
    }
    _configAfterMerge(t) {
      return t;
    }
    _mergeConfigObj(t, e) {
      const i = Mt(e) ? be.getDataAttribute(e, "config") : {};
      return {
        ...this.constructor.Default,
        ...("object" == typeof i ? i : {}),
        ...(Mt(e) ? be.getDataAttributes(e) : {}),
        ...("object" == typeof t ? t : {}),
      };
    }
    _typeCheckConfig(t, e = this.constructor.DefaultType) {
      for (const n of Object.keys(e)) {
        const s = e[n],
          o = t[n],
          r = Mt(o)
            ? "element"
            : null == (i = o)
            ? `${i}`
            : Object.prototype.toString
                .call(i)
                .match(/\s([a-z]+)/i)[1]
                .toLowerCase();
        if (!new RegExp(s).test(r))
          throw new TypeError(
            `${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${s}".`
          );
      }
      var i;
    }
  }
  class ye extends ve {
    constructor(t, e) {
      super(),
        (t = Ht(t)) &&
          ((this._element = t),
          (this._config = this._getConfig(e)),
          ge.set(this._element, this.constructor.DATA_KEY, this));
    }
    dispose() {
      ge.remove(this._element, this.constructor.DATA_KEY),
        de.off(this._element, this.constructor.EVENT_KEY);
      for (const t of Object.getOwnPropertyNames(this)) this[t] = null;
    }
    _queueCallback(t, e, i = !0) {
      Yt(t, e, i);
    }
    _getConfig(t) {
      return (
        (t = this._mergeConfigObj(t, this._element)),
        (t = this._configAfterMerge(t)),
        this._typeCheckConfig(t),
        t
      );
    }
    static getInstance(t) {
      return ge.get(Ht(t), this.DATA_KEY);
    }
    static getOrCreateInstance(t, e = {}) {
      return (
        this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
      );
    }
    static get VERSION() {
      return "5.2.3";
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
    static eventName(t) {
      return `${t}${this.EVENT_KEY}`;
    }
  }
  const we = (t, e = "hide") => {
      const i = `click.dismiss${t.EVENT_KEY}`,
        n = t.NAME;
      de.on(document, i, `[data-bs-dismiss="${n}"]`, function (i) {
        if (
          (["A", "AREA"].includes(this.tagName) && i.preventDefault(), Ft(this))
        )
          return;
        const s = Pt(this) || this.closest(`.${n}`);
        t.getOrCreateInstance(s)[e]();
      });
    },
    Ae = ".bs.alert",
    Ee = `close${Ae}`,
    Te = `closed${Ae}`;
  class Ce extends ye {
    static get NAME() {
      return "alert";
    }
    close() {
      if (de.trigger(this._element, Ee).defaultPrevented) return;
      this._element.classList.remove("show");
      const t = this._element.classList.contains("fade");
      this._queueCallback(() => this._destroyElement(), this._element, t);
    }
    _destroyElement() {
      this._element.remove(), de.trigger(this._element, Te), this.dispose();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Ce.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  we(Ce, "close"), Qt(Ce);
  const Oe = '[data-bs-toggle="button"]';
  class xe extends ye {
    static get NAME() {
      return "button";
    }
    toggle() {
      this._element.setAttribute(
        "aria-pressed",
        this._element.classList.toggle("active")
      );
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = xe.getOrCreateInstance(this);
        "toggle" === t && e[t]();
      });
    }
  }
  de.on(document, "click.bs.button.data-api", Oe, (t) => {
    t.preventDefault();
    const e = t.target.closest(Oe);
    xe.getOrCreateInstance(e).toggle();
  }),
    Qt(xe);
  const ke = {
      find: (t, e = document.documentElement) =>
        [].concat(...Element.prototype.querySelectorAll.call(e, t)),
      findOne: (t, e = document.documentElement) =>
        Element.prototype.querySelector.call(e, t),
      children: (t, e) => [].concat(...t.children).filter((t) => t.matches(e)),
      parents(t, e) {
        const i = [];
        let n = t.parentNode.closest(e);
        for (; n; ) i.push(n), (n = n.parentNode.closest(e));
        return i;
      },
      prev(t, e) {
        let i = t.previousElementSibling;
        for (; i; ) {
          if (i.matches(e)) return [i];
          i = i.previousElementSibling;
        }
        return [];
      },
      next(t, e) {
        let i = t.nextElementSibling;
        for (; i; ) {
          if (i.matches(e)) return [i];
          i = i.nextElementSibling;
        }
        return [];
      },
      focusableChildren(t) {
        const e = [
          "a",
          "button",
          "input",
          "textarea",
          "select",
          "details",
          "[tabindex]",
          '[contenteditable="true"]',
        ]
          .map((t) => `${t}:not([tabindex^="-"])`)
          .join(",");
        return this.find(e, t).filter((t) => !Ft(t) && Wt(t));
      },
    },
    Le = ".bs.swipe",
    De = `touchstart${Le}`,
    $e = `touchmove${Le}`,
    Se = `touchend${Le}`,
    Ie = `pointerdown${Le}`,
    Ne = `pointerup${Le}`,
    Pe = { endCallback: null, leftCallback: null, rightCallback: null },
    je = {
      endCallback: "(function|null)",
      leftCallback: "(function|null)",
      rightCallback: "(function|null)",
    };
  class Me extends ve {
    constructor(t, e) {
      super(),
        (this._element = t),
        t &&
          Me.isSupported() &&
          ((this._config = this._getConfig(e)),
          (this._deltaX = 0),
          (this._supportPointerEvents = Boolean(window.PointerEvent)),
          this._initEvents());
    }
    static get Default() {
      return Pe;
    }
    static get DefaultType() {
      return je;
    }
    static get NAME() {
      return "swipe";
    }
    dispose() {
      de.off(this._element, Le);
    }
    _start(t) {
      this._supportPointerEvents
        ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX)
        : (this._deltaX = t.touches[0].clientX);
    }
    _end(t) {
      this._eventIsPointerPenTouch(t) &&
        (this._deltaX = t.clientX - this._deltaX),
        this._handleSwipe(),
        Xt(this._config.endCallback);
    }
    _move(t) {
      this._deltaX =
        t.touches && t.touches.length > 1
          ? 0
          : t.touches[0].clientX - this._deltaX;
    }
    _handleSwipe() {
      const t = Math.abs(this._deltaX);
      if (t <= 40) return;
      const e = t / this._deltaX;
      (this._deltaX = 0),
        e && Xt(e > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
    _initEvents() {
      this._supportPointerEvents
        ? (de.on(this._element, Ie, (t) => this._start(t)),
          de.on(this._element, Ne, (t) => this._end(t)),
          this._element.classList.add("pointer-event"))
        : (de.on(this._element, De, (t) => this._start(t)),
          de.on(this._element, $e, (t) => this._move(t)),
          de.on(this._element, Se, (t) => this._end(t)));
    }
    _eventIsPointerPenTouch(t) {
      return (
        this._supportPointerEvents &&
        ("pen" === t.pointerType || "touch" === t.pointerType)
      );
    }
    static isSupported() {
      return (
        "ontouchstart" in document.documentElement ||
        navigator.maxTouchPoints > 0
      );
    }
  }
  const He = ".bs.carousel",
    We = ".data-api",
    Fe = "next",
    Be = "prev",
    ze = "left",
    qe = "right",
    Re = `slide${He}`,
    Ve = `slid${He}`,
    Ke = `keydown${He}`,
    Qe = `mouseenter${He}`,
    Xe = `mouseleave${He}`,
    Ye = `dragstart${He}`,
    Ue = `load${He}${We}`,
    Ge = `click${He}${We}`,
    Je = "carousel",
    Ze = "active",
    ti = ".active",
    ei = ".carousel-item",
    ii = ti + ei,
    ni = { ArrowLeft: qe, ArrowRight: ze },
    si = {
      interval: 5e3,
      keyboard: !0,
      pause: "hover",
      ride: !1,
      touch: !0,
      wrap: !0,
    },
    oi = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      pause: "(string|boolean)",
      ride: "(boolean|string)",
      touch: "boolean",
      wrap: "boolean",
    };
  class ri extends ye {
    constructor(t, e) {
      super(t, e),
        (this._interval = null),
        (this._activeElement = null),
        (this._isSliding = !1),
        (this.touchTimeout = null),
        (this._swipeHelper = null),
        (this._indicatorsElement = ke.findOne(
          ".carousel-indicators",
          this._element
        )),
        this._addEventListeners(),
        this._config.ride === Je && this.cycle();
    }
    static get Default() {
      return si;
    }
    static get DefaultType() {
      return oi;
    }
    static get NAME() {
      return "carousel";
    }
    next() {
      this._slide(Fe);
    }
    nextWhenVisible() {
      !document.hidden && Wt(this._element) && this.next();
    }
    prev() {
      this._slide(Be);
    }
    pause() {
      this._isSliding && jt(this._element), this._clearInterval();
    }
    cycle() {
      this._clearInterval(),
        this._updateInterval(),
        (this._interval = setInterval(
          () => this.nextWhenVisible(),
          this._config.interval
        ));
    }
    _maybeEnableCycle() {
      this._config.ride &&
        (this._isSliding
          ? de.one(this._element, Ve, () => this.cycle())
          : this.cycle());
    }
    to(t) {
      const e = this._getItems();
      if (t > e.length - 1 || t < 0) return;
      if (this._isSliding)
        return void de.one(this._element, Ve, () => this.to(t));
      const i = this._getItemIndex(this._getActive());
      if (i === t) return;
      const n = t > i ? Fe : Be;
      this._slide(n, e[t]);
    }
    dispose() {
      this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
    }
    _configAfterMerge(t) {
      return (t.defaultInterval = t.interval), t;
    }
    _addEventListeners() {
      this._config.keyboard &&
        de.on(this._element, Ke, (t) => this._keydown(t)),
        "hover" === this._config.pause &&
          (de.on(this._element, Qe, () => this.pause()),
          de.on(this._element, Xe, () => this._maybeEnableCycle())),
        this._config.touch &&
          Me.isSupported() &&
          this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
      for (const t of ke.find(".carousel-item img", this._element))
        de.on(t, Ye, (t) => t.preventDefault());
      const t = {
        leftCallback: () => this._slide(this._directionToOrder(ze)),
        rightCallback: () => this._slide(this._directionToOrder(qe)),
        endCallback: () => {
          "hover" === this._config.pause &&
            (this.pause(),
            this.touchTimeout && clearTimeout(this.touchTimeout),
            (this.touchTimeout = setTimeout(
              () => this._maybeEnableCycle(),
              500 + this._config.interval
            )));
        },
      };
      this._swipeHelper = new Me(this._element, t);
    }
    _keydown(t) {
      if (/input|textarea/i.test(t.target.tagName)) return;
      const e = ni[t.key];
      e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
    }
    _getItemIndex(t) {
      return this._getItems().indexOf(t);
    }
    _setActiveIndicatorElement(t) {
      if (!this._indicatorsElement) return;
      const e = ke.findOne(ti, this._indicatorsElement);
      e.classList.remove(Ze), e.removeAttribute("aria-current");
      const i = ke.findOne(
        `[data-bs-slide-to="${t}"]`,
        this._indicatorsElement
      );
      i && (i.classList.add(Ze), i.setAttribute("aria-current", "true"));
    }
    _updateInterval() {
      const t = this._activeElement || this._getActive();
      if (!t) return;
      const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
      this._config.interval = e || this._config.defaultInterval;
    }
    _slide(t, e = null) {
      if (this._isSliding) return;
      const i = this._getActive(),
        n = t === Fe,
        s = e || Ut(this._getItems(), i, n, this._config.wrap);
      if (s === i) return;
      const o = this._getItemIndex(s),
        r = (e) =>
          de.trigger(this._element, e, {
            relatedTarget: s,
            direction: this._orderToDirection(t),
            from: this._getItemIndex(i),
            to: o,
          });
      if (r(Re).defaultPrevented) return;
      if (!i || !s) return;
      const a = Boolean(this._interval);
      this.pause(),
        (this._isSliding = !0),
        this._setActiveIndicatorElement(o),
        (this._activeElement = s);
      const l = n ? "carousel-item-start" : "carousel-item-end",
        c = n ? "carousel-item-next" : "carousel-item-prev";
      s.classList.add(c),
        qt(s),
        i.classList.add(l),
        s.classList.add(l),
        this._queueCallback(
          () => {
            s.classList.remove(l, c),
              s.classList.add(Ze),
              i.classList.remove(Ze, c, l),
              (this._isSliding = !1),
              r(Ve);
          },
          i,
          this._isAnimated()
        ),
        a && this.cycle();
    }
    _isAnimated() {
      return this._element.classList.contains("slide");
    }
    _getActive() {
      return ke.findOne(ii, this._element);
    }
    _getItems() {
      return ke.find(ei, this._element);
    }
    _clearInterval() {
      this._interval &&
        (clearInterval(this._interval), (this._interval = null));
    }
    _directionToOrder(t) {
      return Kt() ? (t === ze ? Be : Fe) : t === ze ? Fe : Be;
    }
    _orderToDirection(t) {
      return Kt() ? (t === Be ? ze : qe) : t === Be ? qe : ze;
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = ri.getOrCreateInstance(this, t);
        if ("number" != typeof t) {
          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
              throw new TypeError(`No method named "${t}"`);
            e[t]();
          }
        } else e.to(t);
      });
    }
  }
  de.on(document, Ge, "[data-bs-slide], [data-bs-slide-to]", function (t) {
    const e = Pt(this);
    if (!e || !e.classList.contains(Je)) return;
    t.preventDefault();
    const i = ri.getOrCreateInstance(e),
      n = this.getAttribute("data-bs-slide-to");
    return n
      ? (i.to(n), void i._maybeEnableCycle())
      : "next" === be.getDataAttribute(this, "slide")
      ? (i.next(), void i._maybeEnableCycle())
      : (i.prev(), void i._maybeEnableCycle());
  }),
    de.on(window, Ue, () => {
      const t = ke.find('[data-bs-ride="carousel"]');
      for (const e of t) ri.getOrCreateInstance(e);
    }),
    Qt(ri);
  const ai = ".bs.collapse",
    li = `show${ai}`,
    ci = `shown${ai}`,
    hi = `hide${ai}`,
    ui = `hidden${ai}`,
    di = `click${ai}.data-api`,
    fi = "show",
    pi = "collapse",
    gi = "collapsing",
    mi = `:scope .${pi} .${pi}`,
    _i = '[data-bs-toggle="collapse"]',
    bi = { parent: null, toggle: !0 },
    vi = { parent: "(null|element)", toggle: "boolean" };
  class yi extends ye {
    constructor(t, e) {
      super(t, e), (this._isTransitioning = !1), (this._triggerArray = []);
      const i = ke.find(_i);
      for (const t of i) {
        const e = Nt(t),
          i = ke.find(e).filter((t) => t === this._element);
        null !== e && i.length && this._triggerArray.push(t);
      }
      this._initializeChildren(),
        this._config.parent ||
          this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
        this._config.toggle && this.toggle();
    }
    static get Default() {
      return bi;
    }
    static get DefaultType() {
      return vi;
    }
    static get NAME() {
      return "collapse";
    }
    toggle() {
      this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (this._isTransitioning || this._isShown()) return;
      let t = [];
      if (
        (this._config.parent &&
          (t = this._getFirstLevelChildren(
            ".collapse.show, .collapse.collapsing"
          )
            .filter((t) => t !== this._element)
            .map((t) => yi.getOrCreateInstance(t, { toggle: !1 }))),
        t.length && t[0]._isTransitioning)
      )
        return;
      if (de.trigger(this._element, li).defaultPrevented) return;
      for (const e of t) e.hide();
      const e = this._getDimension();
      this._element.classList.remove(pi),
        this._element.classList.add(gi),
        (this._element.style[e] = 0),
        this._addAriaAndCollapsedClass(this._triggerArray, !0),
        (this._isTransitioning = !0);
      const i = `scroll${e[0].toUpperCase() + e.slice(1)}`;
      this._queueCallback(
        () => {
          (this._isTransitioning = !1),
            this._element.classList.remove(gi),
            this._element.classList.add(pi, fi),
            (this._element.style[e] = ""),
            de.trigger(this._element, ci);
        },
        this._element,
        !0
      ),
        (this._element.style[e] = `${this._element[i]}px`);
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) return;
      if (de.trigger(this._element, hi).defaultPrevented) return;
      const t = this._getDimension();
      (this._element.style[t] = `${
        this._element.getBoundingClientRect()[t]
      }px`),
        qt(this._element),
        this._element.classList.add(gi),
        this._element.classList.remove(pi, fi);
      for (const t of this._triggerArray) {
        const e = Pt(t);
        e && !this._isShown(e) && this._addAriaAndCollapsedClass([t], !1);
      }
      (this._isTransitioning = !0),
        (this._element.style[t] = ""),
        this._queueCallback(
          () => {
            (this._isTransitioning = !1),
              this._element.classList.remove(gi),
              this._element.classList.add(pi),
              de.trigger(this._element, ui);
          },
          this._element,
          !0
        );
    }
    _isShown(t = this._element) {
      return t.classList.contains(fi);
    }
    _configAfterMerge(t) {
      return (t.toggle = Boolean(t.toggle)), (t.parent = Ht(t.parent)), t;
    }
    _getDimension() {
      return this._element.classList.contains("collapse-horizontal")
        ? "width"
        : "height";
    }
    _initializeChildren() {
      if (!this._config.parent) return;
      const t = this._getFirstLevelChildren(_i);
      for (const e of t) {
        const t = Pt(e);
        t && this._addAriaAndCollapsedClass([e], this._isShown(t));
      }
    }
    _getFirstLevelChildren(t) {
      const e = ke.find(mi, this._config.parent);
      return ke.find(t, this._config.parent).filter((t) => !e.includes(t));
    }
    _addAriaAndCollapsedClass(t, e) {
      if (t.length)
        for (const i of t)
          i.classList.toggle("collapsed", !e),
            i.setAttribute("aria-expanded", e);
    }
    static jQueryInterface(t) {
      const e = {};
      return (
        "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1),
        this.each(function () {
          const i = yi.getOrCreateInstance(this, e);
          if ("string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
            i[t]();
          }
        })
      );
    }
  }
  de.on(document, di, _i, function (t) {
    ("A" === t.target.tagName ||
      (t.delegateTarget && "A" === t.delegateTarget.tagName)) &&
      t.preventDefault();
    const e = Nt(this),
      i = ke.find(e);
    for (const t of i) yi.getOrCreateInstance(t, { toggle: !1 }).toggle();
  }),
    Qt(yi);
  const wi = "dropdown",
    Ai = ".bs.dropdown",
    Ei = ".data-api",
    Ti = "ArrowUp",
    Ci = "ArrowDown",
    Oi = `hide${Ai}`,
    xi = `hidden${Ai}`,
    ki = `show${Ai}`,
    Li = `shown${Ai}`,
    Di = `click${Ai}${Ei}`,
    $i = `keydown${Ai}${Ei}`,
    Si = `keyup${Ai}${Ei}`,
    Ii = "show",
    Ni = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
    Pi = `${Ni}.${Ii}`,
    ji = ".dropdown-menu",
    Mi = Kt() ? "top-end" : "top-start",
    Hi = Kt() ? "top-start" : "top-end",
    Wi = Kt() ? "bottom-end" : "bottom-start",
    Fi = Kt() ? "bottom-start" : "bottom-end",
    Bi = Kt() ? "left-start" : "right-start",
    zi = Kt() ? "right-start" : "left-start",
    qi = {
      autoClose: !0,
      boundary: "clippingParents",
      display: "dynamic",
      offset: [0, 2],
      popperConfig: null,
      reference: "toggle",
    },
    Ri = {
      autoClose: "(boolean|string)",
      boundary: "(string|element)",
      display: "string",
      offset: "(array|string|function)",
      popperConfig: "(null|object|function)",
      reference: "(string|element|object)",
    };
  class Vi extends ye {
    constructor(t, e) {
      super(t, e),
        (this._popper = null),
        (this._parent = this._element.parentNode),
        (this._menu =
          ke.next(this._element, ji)[0] ||
          ke.prev(this._element, ji)[0] ||
          ke.findOne(ji, this._parent)),
        (this._inNavbar = this._detectNavbar());
    }
    static get Default() {
      return qi;
    }
    static get DefaultType() {
      return Ri;
    }
    static get NAME() {
      return wi;
    }
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (Ft(this._element) || this._isShown()) return;
      const t = { relatedTarget: this._element };
      if (!de.trigger(this._element, ki, t).defaultPrevented) {
        if (
          (this._createPopper(),
          "ontouchstart" in document.documentElement &&
            !this._parent.closest(".navbar-nav"))
        )
          for (const t of [].concat(...document.body.children))
            de.on(t, "mouseover", zt);
        this._element.focus(),
          this._element.setAttribute("aria-expanded", !0),
          this._menu.classList.add(Ii),
          this._element.classList.add(Ii),
          de.trigger(this._element, Li, t);
      }
    }
    hide() {
      if (Ft(this._element) || !this._isShown()) return;
      const t = { relatedTarget: this._element };
      this._completeHide(t);
    }
    dispose() {
      this._popper && this._popper.destroy(), super.dispose();
    }
    update() {
      (this._inNavbar = this._detectNavbar()),
        this._popper && this._popper.update();
    }
    _completeHide(t) {
      if (!de.trigger(this._element, Oi, t).defaultPrevented) {
        if ("ontouchstart" in document.documentElement)
          for (const t of [].concat(...document.body.children))
            de.off(t, "mouseover", zt);
        this._popper && this._popper.destroy(),
          this._menu.classList.remove(Ii),
          this._element.classList.remove(Ii),
          this._element.setAttribute("aria-expanded", "false"),
          be.removeDataAttribute(this._menu, "popper"),
          de.trigger(this._element, xi, t);
      }
    }
    _getConfig(t) {
      if (
        "object" == typeof (t = super._getConfig(t)).reference &&
        !Mt(t.reference) &&
        "function" != typeof t.reference.getBoundingClientRect
      )
        throw new TypeError(
          `${wi.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
        );
      return t;
    }
    _createPopper() {
      if (void 0 === e)
        throw new TypeError(
          "Bootstrap's dropdowns require Popper (https://popper.js.org)"
        );
      let t = this._element;
      "parent" === this._config.reference
        ? (t = this._parent)
        : Mt(this._config.reference)
        ? (t = Ht(this._config.reference))
        : "object" == typeof this._config.reference &&
          (t = this._config.reference);
      const i = this._getPopperConfig();
      this._popper = Dt(t, this._menu, i);
    }
    _isShown() {
      return this._menu.classList.contains(Ii);
    }
    _getPlacement() {
      const t = this._parent;
      if (t.classList.contains("dropend")) return Bi;
      if (t.classList.contains("dropstart")) return zi;
      if (t.classList.contains("dropup-center")) return "top";
      if (t.classList.contains("dropdown-center")) return "bottom";
      const e =
        "end" ===
        getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return t.classList.contains("dropup") ? (e ? Hi : Mi) : e ? Fi : Wi;
    }
    _detectNavbar() {
      return null !== this._element.closest(".navbar");
    }
    _getOffset() {
      const { offset: t } = this._config;
      return "string" == typeof t
        ? t.split(",").map((t) => Number.parseInt(t, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _getPopperConfig() {
      const t = {
        placement: this._getPlacement(),
        modifiers: [
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          { name: "offset", options: { offset: this._getOffset() } },
        ],
      };
      return (
        (this._inNavbar || "static" === this._config.display) &&
          (be.setDataAttribute(this._menu, "popper", "static"),
          (t.modifiers = [{ name: "applyStyles", enabled: !1 }])),
        {
          ...t,
          ...("function" == typeof this._config.popperConfig
            ? this._config.popperConfig(t)
            : this._config.popperConfig),
        }
      );
    }
    _selectMenuItem({ key: t, target: e }) {
      const i = ke
        .find(
          ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
          this._menu
        )
        .filter((t) => Wt(t));
      i.length && Ut(i, e, t === Ci, !i.includes(e)).focus();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Vi.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
    static clearMenus(t) {
      if (2 === t.button || ("keyup" === t.type && "Tab" !== t.key)) return;
      const e = ke.find(Pi);
      for (const i of e) {
        const e = Vi.getInstance(i);
        if (!e || !1 === e._config.autoClose) continue;
        const n = t.composedPath(),
          s = n.includes(e._menu);
        if (
          n.includes(e._element) ||
          ("inside" === e._config.autoClose && !s) ||
          ("outside" === e._config.autoClose && s)
        )
          continue;
        if (
          e._menu.contains(t.target) &&
          (("keyup" === t.type && "Tab" === t.key) ||
            /input|select|option|textarea|form/i.test(t.target.tagName))
        )
          continue;
        const o = { relatedTarget: e._element };
        "click" === t.type && (o.clickEvent = t), e._completeHide(o);
      }
    }
    static dataApiKeydownHandler(t) {
      const e = /input|textarea/i.test(t.target.tagName),
        i = "Escape" === t.key,
        n = [Ti, Ci].includes(t.key);
      if (!n && !i) return;
      if (e && !i) return;
      t.preventDefault();
      const s = this.matches(Ni)
          ? this
          : ke.prev(this, Ni)[0] ||
            ke.next(this, Ni)[0] ||
            ke.findOne(Ni, t.delegateTarget.parentNode),
        o = Vi.getOrCreateInstance(s);
      if (n) return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
      o._isShown() && (t.stopPropagation(), o.hide(), s.focus());
    }
  }
  de.on(document, $i, Ni, Vi.dataApiKeydownHandler),
    de.on(document, $i, ji, Vi.dataApiKeydownHandler),
    de.on(document, Di, Vi.clearMenus),
    de.on(document, Si, Vi.clearMenus),
    de.on(document, Di, Ni, function (t) {
      t.preventDefault(), Vi.getOrCreateInstance(this).toggle();
    }),
    Qt(Vi);
  const Ki = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    Qi = ".sticky-top",
    Xi = "padding-right",
    Yi = "margin-right";
  class Ui {
    constructor() {
      this._element = document.body;
    }
    getWidth() {
      const t = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - t);
    }
    hide() {
      const t = this.getWidth();
      this._disableOverFlow(),
        this._setElementAttributes(this._element, Xi, (e) => e + t),
        this._setElementAttributes(Ki, Xi, (e) => e + t),
        this._setElementAttributes(Qi, Yi, (e) => e - t);
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow"),
        this._resetElementAttributes(this._element, Xi),
        this._resetElementAttributes(Ki, Xi),
        this._resetElementAttributes(Qi, Yi);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"),
        (this._element.style.overflow = "hidden");
    }
    _setElementAttributes(t, e, i) {
      const n = this.getWidth();
      this._applyManipulationCallback(t, (t) => {
        if (t !== this._element && window.innerWidth > t.clientWidth + n)
          return;
        this._saveInitialAttribute(t, e);
        const s = window.getComputedStyle(t).getPropertyValue(e);
        t.style.setProperty(e, `${i(Number.parseFloat(s))}px`);
      });
    }
    _saveInitialAttribute(t, e) {
      const i = t.style.getPropertyValue(e);
      i && be.setDataAttribute(t, e, i);
    }
    _resetElementAttributes(t, e) {
      this._applyManipulationCallback(t, (t) => {
        const i = be.getDataAttribute(t, e);
        null !== i
          ? (be.removeDataAttribute(t, e), t.style.setProperty(e, i))
          : t.style.removeProperty(e);
      });
    }
    _applyManipulationCallback(t, e) {
      if (Mt(t)) e(t);
      else for (const i of ke.find(t, this._element)) e(i);
    }
  }
  const Gi = "backdrop",
    Ji = "show",
    Zi = `mousedown.bs.${Gi}`,
    tn = {
      className: "modal-backdrop",
      clickCallback: null,
      isAnimated: !1,
      isVisible: !0,
      rootElement: "body",
    },
    en = {
      className: "string",
      clickCallback: "(function|null)",
      isAnimated: "boolean",
      isVisible: "boolean",
      rootElement: "(element|string)",
    };
  class nn extends ve {
    constructor(t) {
      super(),
        (this._config = this._getConfig(t)),
        (this._isAppended = !1),
        (this._element = null);
    }
    static get Default() {
      return tn;
    }
    static get DefaultType() {
      return en;
    }
    static get NAME() {
      return Gi;
    }
    show(t) {
      if (!this._config.isVisible) return void Xt(t);
      this._append();
      const e = this._getElement();
      this._config.isAnimated && qt(e),
        e.classList.add(Ji),
        this._emulateAnimation(() => {
          Xt(t);
        });
    }
    hide(t) {
      this._config.isVisible
        ? (this._getElement().classList.remove(Ji),
          this._emulateAnimation(() => {
            this.dispose(), Xt(t);
          }))
        : Xt(t);
    }
    dispose() {
      this._isAppended &&
        (de.off(this._element, Zi),
        this._element.remove(),
        (this._isAppended = !1));
    }
    _getElement() {
      if (!this._element) {
        const t = document.createElement("div");
        (t.className = this._config.className),
          this._config.isAnimated && t.classList.add("fade"),
          (this._element = t);
      }
      return this._element;
    }
    _configAfterMerge(t) {
      return (t.rootElement = Ht(t.rootElement)), t;
    }
    _append() {
      if (this._isAppended) return;
      const t = this._getElement();
      this._config.rootElement.append(t),
        de.on(t, Zi, () => {
          Xt(this._config.clickCallback);
        }),
        (this._isAppended = !0);
    }
    _emulateAnimation(t) {
      Yt(t, this._getElement(), this._config.isAnimated);
    }
  }
  const sn = ".bs.focustrap",
    on = `focusin${sn}`,
    rn = `keydown.tab${sn}`,
    an = "backward",
    ln = { autofocus: !0, trapElement: null },
    cn = { autofocus: "boolean", trapElement: "element" };
  class hn extends ve {
    constructor(t) {
      super(),
        (this._config = this._getConfig(t)),
        (this._isActive = !1),
        (this._lastTabNavDirection = null);
    }
    static get Default() {
      return ln;
    }
    static get DefaultType() {
      return cn;
    }
    static get NAME() {
      return "focustrap";
    }
    activate() {
      this._isActive ||
        (this._config.autofocus && this._config.trapElement.focus(),
        de.off(document, sn),
        de.on(document, on, (t) => this._handleFocusin(t)),
        de.on(document, rn, (t) => this._handleKeydown(t)),
        (this._isActive = !0));
    }
    deactivate() {
      this._isActive && ((this._isActive = !1), de.off(document, sn));
    }
    _handleFocusin(t) {
      const { trapElement: e } = this._config;
      if (t.target === document || t.target === e || e.contains(t.target))
        return;
      const i = ke.focusableChildren(e);
      0 === i.length
        ? e.focus()
        : this._lastTabNavDirection === an
        ? i[i.length - 1].focus()
        : i[0].focus();
    }
    _handleKeydown(t) {
      "Tab" === t.key &&
        (this._lastTabNavDirection = t.shiftKey ? an : "forward");
    }
  }
  const un = ".bs.modal",
    dn = `hide${un}`,
    fn = `hidePrevented${un}`,
    pn = `hidden${un}`,
    gn = `show${un}`,
    mn = `shown${un}`,
    _n = `resize${un}`,
    bn = `click.dismiss${un}`,
    vn = `mousedown.dismiss${un}`,
    yn = `keydown.dismiss${un}`,
    wn = `click${un}.data-api`,
    An = "modal-open",
    En = "show",
    Tn = "modal-static",
    Cn = { backdrop: !0, focus: !0, keyboard: !0 },
    On = {
      backdrop: "(boolean|string)",
      focus: "boolean",
      keyboard: "boolean",
    };
  class xn extends ye {
    constructor(t, e) {
      super(t, e),
        (this._dialog = ke.findOne(".modal-dialog", this._element)),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        (this._isShown = !1),
        (this._isTransitioning = !1),
        (this._scrollBar = new Ui()),
        this._addEventListeners();
    }
    static get Default() {
      return Cn;
    }
    static get DefaultType() {
      return On;
    }
    static get NAME() {
      return "modal";
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      this._isShown ||
        this._isTransitioning ||
        de.trigger(this._element, gn, { relatedTarget: t }).defaultPrevented ||
        ((this._isShown = !0),
        (this._isTransitioning = !0),
        this._scrollBar.hide(),
        document.body.classList.add(An),
        this._adjustDialog(),
        this._backdrop.show(() => this._showElement(t)));
    }
    hide() {
      this._isShown &&
        !this._isTransitioning &&
        (de.trigger(this._element, dn).defaultPrevented ||
          ((this._isShown = !1),
          (this._isTransitioning = !0),
          this._focustrap.deactivate(),
          this._element.classList.remove(En),
          this._queueCallback(
            () => this._hideModal(),
            this._element,
            this._isAnimated()
          )));
    }
    dispose() {
      for (const t of [window, this._dialog]) de.off(t, un);
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }
    _initializeBackDrop() {
      return new nn({
        isVisible: Boolean(this._config.backdrop),
        isAnimated: this._isAnimated(),
      });
    }
    _initializeFocusTrap() {
      return new hn({ trapElement: this._element });
    }
    _showElement(t) {
      document.body.contains(this._element) ||
        document.body.append(this._element),
        (this._element.style.display = "block"),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        (this._element.scrollTop = 0);
      const e = ke.findOne(".modal-body", this._dialog);
      e && (e.scrollTop = 0),
        qt(this._element),
        this._element.classList.add(En),
        this._queueCallback(
          () => {
            this._config.focus && this._focustrap.activate(),
              (this._isTransitioning = !1),
              de.trigger(this._element, mn, { relatedTarget: t });
          },
          this._dialog,
          this._isAnimated()
        );
    }
    _addEventListeners() {
      de.on(this._element, yn, (t) => {
        if ("Escape" === t.key)
          return this._config.keyboard
            ? (t.preventDefault(), void this.hide())
            : void this._triggerBackdropTransition();
      }),
        de.on(window, _n, () => {
          this._isShown && !this._isTransitioning && this._adjustDialog();
        }),
        de.on(this._element, vn, (t) => {
          de.one(this._element, bn, (e) => {
            this._element === t.target &&
              this._element === e.target &&
              ("static" !== this._config.backdrop
                ? this._config.backdrop && this.hide()
                : this._triggerBackdropTransition());
          });
        });
    }
    _hideModal() {
      (this._element.style.display = "none"),
        this._element.setAttribute("aria-hidden", !0),
        this._element.removeAttribute("aria-modal"),
        this._element.removeAttribute("role"),
        (this._isTransitioning = !1),
        this._backdrop.hide(() => {
          document.body.classList.remove(An),
            this._resetAdjustments(),
            this._scrollBar.reset(),
            de.trigger(this._element, pn);
        });
    }
    _isAnimated() {
      return this._element.classList.contains("fade");
    }
    _triggerBackdropTransition() {
      if (de.trigger(this._element, fn).defaultPrevented) return;
      const t =
          this._element.scrollHeight > document.documentElement.clientHeight,
        e = this._element.style.overflowY;
      "hidden" === e ||
        this._element.classList.contains(Tn) ||
        (t || (this._element.style.overflowY = "hidden"),
        this._element.classList.add(Tn),
        this._queueCallback(() => {
          this._element.classList.remove(Tn),
            this._queueCallback(() => {
              this._element.style.overflowY = e;
            }, this._dialog);
        }, this._dialog),
        this._element.focus());
    }
    _adjustDialog() {
      const t =
          this._element.scrollHeight > document.documentElement.clientHeight,
        e = this._scrollBar.getWidth(),
        i = e > 0;
      if (i && !t) {
        const t = Kt() ? "paddingLeft" : "paddingRight";
        this._element.style[t] = `${e}px`;
      }
      if (!i && t) {
        const t = Kt() ? "paddingRight" : "paddingLeft";
        this._element.style[t] = `${e}px`;
      }
    }
    _resetAdjustments() {
      (this._element.style.paddingLeft = ""),
        (this._element.style.paddingRight = "");
    }
    static jQueryInterface(t, e) {
      return this.each(function () {
        const i = xn.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
          i[t](e);
        }
      });
    }
  }
  de.on(document, wn, '[data-bs-toggle="modal"]', function (t) {
    const e = Pt(this);
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
      de.one(e, gn, (t) => {
        t.defaultPrevented ||
          de.one(e, pn, () => {
            Wt(this) && this.focus();
          });
      });
    const i = ke.findOne(".modal.show");
    i && xn.getInstance(i).hide(), xn.getOrCreateInstance(e).toggle(this);
  }),
    we(xn),
    Qt(xn);
  const kn = ".bs.offcanvas",
    Ln = ".data-api",
    Dn = `load${kn}${Ln}`,
    $n = "show",
    Sn = "showing",
    In = "hiding",
    Nn = ".offcanvas.show",
    Pn = `show${kn}`,
    jn = `shown${kn}`,
    Mn = `hide${kn}`,
    Hn = `hidePrevented${kn}`,
    Wn = `hidden${kn}`,
    Fn = `resize${kn}`,
    Bn = `click${kn}${Ln}`,
    zn = `keydown.dismiss${kn}`,
    qn = { backdrop: !0, keyboard: !0, scroll: !1 },
    Rn = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      scroll: "boolean",
    };
  class Vn extends ye {
    constructor(t, e) {
      super(t, e),
        (this._isShown = !1),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        this._addEventListeners();
    }
    static get Default() {
      return qn;
    }
    static get DefaultType() {
      return Rn;
    }
    static get NAME() {
      return "offcanvas";
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      this._isShown ||
        de.trigger(this._element, Pn, { relatedTarget: t }).defaultPrevented ||
        ((this._isShown = !0),
        this._backdrop.show(),
        this._config.scroll || new Ui().hide(),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        this._element.classList.add(Sn),
        this._queueCallback(
          () => {
            (this._config.scroll && !this._config.backdrop) ||
              this._focustrap.activate(),
              this._element.classList.add($n),
              this._element.classList.remove(Sn),
              de.trigger(this._element, jn, { relatedTarget: t });
          },
          this._element,
          !0
        ));
    }
    hide() {
      this._isShown &&
        (de.trigger(this._element, Mn).defaultPrevented ||
          (this._focustrap.deactivate(),
          this._element.blur(),
          (this._isShown = !1),
          this._element.classList.add(In),
          this._backdrop.hide(),
          this._queueCallback(
            () => {
              this._element.classList.remove($n, In),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                this._config.scroll || new Ui().reset(),
                de.trigger(this._element, Wn);
            },
            this._element,
            !0
          )));
    }
    dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    _initializeBackDrop() {
      const t = Boolean(this._config.backdrop);
      return new nn({
        className: "offcanvas-backdrop",
        isVisible: t,
        isAnimated: !0,
        rootElement: this._element.parentNode,
        clickCallback: t
          ? () => {
              "static" !== this._config.backdrop
                ? this.hide()
                : de.trigger(this._element, Hn);
            }
          : null,
      });
    }
    _initializeFocusTrap() {
      return new hn({ trapElement: this._element });
    }
    _addEventListeners() {
      de.on(this._element, zn, (t) => {
        "Escape" === t.key &&
          (this._config.keyboard ? this.hide() : de.trigger(this._element, Hn));
      });
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Vn.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  de.on(document, Bn, '[data-bs-toggle="offcanvas"]', function (t) {
    const e = Pt(this);
    if ((["A", "AREA"].includes(this.tagName) && t.preventDefault(), Ft(this)))
      return;
    de.one(e, Wn, () => {
      Wt(this) && this.focus();
    });
    const i = ke.findOne(Nn);
    i && i !== e && Vn.getInstance(i).hide(),
      Vn.getOrCreateInstance(e).toggle(this);
  }),
    de.on(window, Dn, () => {
      for (const t of ke.find(Nn)) Vn.getOrCreateInstance(t).show();
    }),
    de.on(window, Fn, () => {
      for (const t of ke.find("[aria-modal][class*=show][class*=offcanvas-]"))
        "fixed" !== getComputedStyle(t).position &&
          Vn.getOrCreateInstance(t).hide();
    }),
    we(Vn),
    Qt(Vn);
  const Kn = new Set([
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ]),
    Qn = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
    Xn =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
    Yn = (t, e) => {
      const i = t.nodeName.toLowerCase();
      return e.includes(i)
        ? !Kn.has(i) || Boolean(Qn.test(t.nodeValue) || Xn.test(t.nodeValue))
        : e.filter((t) => t instanceof RegExp).some((t) => t.test(i));
    },
    Un = {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: [],
    },
    Gn = {
      allowList: Un,
      content: {},
      extraClass: "",
      html: !1,
      sanitize: !0,
      sanitizeFn: null,
      template: "<div></div>",
    },
    Jn = {
      allowList: "object",
      content: "object",
      extraClass: "(string|function)",
      html: "boolean",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      template: "string",
    },
    Zn = {
      entry: "(string|element|function|null)",
      selector: "(string|element)",
    };
  class ts extends ve {
    constructor(t) {
      super(), (this._config = this._getConfig(t));
    }
    static get Default() {
      return Gn;
    }
    static get DefaultType() {
      return Jn;
    }
    static get NAME() {
      return "TemplateFactory";
    }
    getContent() {
      return Object.values(this._config.content)
        .map((t) => this._resolvePossibleFunction(t))
        .filter(Boolean);
    }
    hasContent() {
      return this.getContent().length > 0;
    }
    changeContent(t) {
      return (
        this._checkContent(t),
        (this._config.content = { ...this._config.content, ...t }),
        this
      );
    }
    toHtml() {
      const t = document.createElement("div");
      t.innerHTML = this._maybeSanitize(this._config.template);
      for (const [e, i] of Object.entries(this._config.content))
        this._setContent(t, i, e);
      const e = t.children[0],
        i = this._resolvePossibleFunction(this._config.extraClass);
      return i && e.classList.add(...i.split(" ")), e;
    }
    _typeCheckConfig(t) {
      super._typeCheckConfig(t), this._checkContent(t.content);
    }
    _checkContent(t) {
      for (const [e, i] of Object.entries(t))
        super._typeCheckConfig({ selector: e, entry: i }, Zn);
    }
    _setContent(t, e, i) {
      const n = ke.findOne(i, t);
      n &&
        ((e = this._resolvePossibleFunction(e))
          ? Mt(e)
            ? this._putElementInTemplate(Ht(e), n)
            : this._config.html
            ? (n.innerHTML = this._maybeSanitize(e))
            : (n.textContent = e)
          : n.remove());
    }
    _maybeSanitize(t) {
      return this._config.sanitize
        ? (function (t, e, i) {
            if (!t.length) return t;
            if (i && "function" == typeof i) return i(t);
            const n = new window.DOMParser().parseFromString(t, "text/html"),
              s = [].concat(...n.body.querySelectorAll("*"));
            for (const t of s) {
              const i = t.nodeName.toLowerCase();
              if (!Object.keys(e).includes(i)) {
                t.remove();
                continue;
              }
              const n = [].concat(...t.attributes),
                s = [].concat(e["*"] || [], e[i] || []);
              for (const e of n) Yn(e, s) || t.removeAttribute(e.nodeName);
            }
            return n.body.innerHTML;
          })(t, this._config.allowList, this._config.sanitizeFn)
        : t;
    }
    _resolvePossibleFunction(t) {
      return "function" == typeof t ? t(this) : t;
    }
    _putElementInTemplate(t, e) {
      if (this._config.html) return (e.innerHTML = ""), void e.append(t);
      e.textContent = t.textContent;
    }
  }
  const es = new Set(["sanitize", "allowList", "sanitizeFn"]),
    is = "fade",
    ns = "show",
    ss = ".modal",
    os = "hide.bs.modal",
    rs = "hover",
    as = "focus",
    ls = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: Kt() ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: Kt() ? "right" : "left",
    },
    cs = {
      allowList: Un,
      animation: !0,
      boundary: "clippingParents",
      container: !1,
      customClass: "",
      delay: 0,
      fallbackPlacements: ["top", "right", "bottom", "left"],
      html: !1,
      offset: [0, 0],
      placement: "top",
      popperConfig: null,
      sanitize: !0,
      sanitizeFn: null,
      selector: !1,
      template:
        '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      title: "",
      trigger: "hover focus",
    },
    hs = {
      allowList: "object",
      animation: "boolean",
      boundary: "(string|element)",
      container: "(string|element|boolean)",
      customClass: "(string|function)",
      delay: "(number|object)",
      fallbackPlacements: "array",
      html: "boolean",
      offset: "(array|string|function)",
      placement: "(string|function)",
      popperConfig: "(null|object|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      selector: "(string|boolean)",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
    };
  class us extends ye {
    constructor(t, i) {
      if (void 0 === e)
        throw new TypeError(
          "Bootstrap's tooltips require Popper (https://popper.js.org)"
        );
      super(t, i),
        (this._isEnabled = !0),
        (this._timeout = 0),
        (this._isHovered = null),
        (this._activeTrigger = {}),
        (this._popper = null),
        (this._templateFactory = null),
        (this._newContent = null),
        (this.tip = null),
        this._setListeners(),
        this._config.selector || this._fixTitle();
    }
    static get Default() {
      return cs;
    }
    static get DefaultType() {
      return hs;
    }
    static get NAME() {
      return "tooltip";
    }
    enable() {
      this._isEnabled = !0;
    }
    disable() {
      this._isEnabled = !1;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle() {
      this._isEnabled &&
        ((this._activeTrigger.click = !this._activeTrigger.click),
        this._isShown() ? this._leave() : this._enter());
    }
    dispose() {
      clearTimeout(this._timeout),
        de.off(this._element.closest(ss), os, this._hideModalHandler),
        this._element.getAttribute("data-bs-original-title") &&
          this._element.setAttribute(
            "title",
            this._element.getAttribute("data-bs-original-title")
          ),
        this._disposePopper(),
        super.dispose();
    }
    show() {
      if ("none" === this._element.style.display)
        throw new Error("Please use show on visible elements");
      if (!this._isWithContent() || !this._isEnabled) return;
      const t = de.trigger(this._element, this.constructor.eventName("show")),
        e = (
          Bt(this._element) || this._element.ownerDocument.documentElement
        ).contains(this._element);
      if (t.defaultPrevented || !e) return;
      this._disposePopper();
      const i = this._getTipElement();
      this._element.setAttribute("aria-describedby", i.getAttribute("id"));
      const { container: n } = this._config;
      if (
        (this._element.ownerDocument.documentElement.contains(this.tip) ||
          (n.append(i),
          de.trigger(this._element, this.constructor.eventName("inserted"))),
        (this._popper = this._createPopper(i)),
        i.classList.add(ns),
        "ontouchstart" in document.documentElement)
      )
        for (const t of [].concat(...document.body.children))
          de.on(t, "mouseover", zt);
      this._queueCallback(
        () => {
          de.trigger(this._element, this.constructor.eventName("shown")),
            !1 === this._isHovered && this._leave(),
            (this._isHovered = !1);
        },
        this.tip,
        this._isAnimated()
      );
    }
    hide() {
      if (
        this._isShown() &&
        !de.trigger(this._element, this.constructor.eventName("hide"))
          .defaultPrevented
      ) {
        if (
          (this._getTipElement().classList.remove(ns),
          "ontouchstart" in document.documentElement)
        )
          for (const t of [].concat(...document.body.children))
            de.off(t, "mouseover", zt);
        (this._activeTrigger.click = !1),
          (this._activeTrigger[as] = !1),
          (this._activeTrigger[rs] = !1),
          (this._isHovered = null),
          this._queueCallback(
            () => {
              this._isWithActiveTrigger() ||
                (this._isHovered || this._disposePopper(),
                this._element.removeAttribute("aria-describedby"),
                de.trigger(
                  this._element,
                  this.constructor.eventName("hidden")
                ));
            },
            this.tip,
            this._isAnimated()
          );
      }
    }
    update() {
      this._popper && this._popper.update();
    }
    _isWithContent() {
      return Boolean(this._getTitle());
    }
    _getTipElement() {
      return (
        this.tip ||
          (this.tip = this._createTipElement(
            this._newContent || this._getContentForTemplate()
          )),
        this.tip
      );
    }
    _createTipElement(t) {
      const e = this._getTemplateFactory(t).toHtml();
      if (!e) return null;
      e.classList.remove(is, ns),
        e.classList.add(`bs-${this.constructor.NAME}-auto`);
      const i = ((t) => {
        do {
          t += Math.floor(1e6 * Math.random());
        } while (document.getElementById(t));
        return t;
      })(this.constructor.NAME).toString();
      return (
        e.setAttribute("id", i), this._isAnimated() && e.classList.add(is), e
      );
    }
    setContent(t) {
      (this._newContent = t),
        this._isShown() && (this._disposePopper(), this.show());
    }
    _getTemplateFactory(t) {
      return (
        this._templateFactory
          ? this._templateFactory.changeContent(t)
          : (this._templateFactory = new ts({
              ...this._config,
              content: t,
              extraClass: this._resolvePossibleFunction(
                this._config.customClass
              ),
            })),
        this._templateFactory
      );
    }
    _getContentForTemplate() {
      return { ".tooltip-inner": this._getTitle() };
    }
    _getTitle() {
      return (
        this._resolvePossibleFunction(this._config.title) ||
        this._element.getAttribute("data-bs-original-title")
      );
    }
    _initializeOnDelegatedTarget(t) {
      return this.constructor.getOrCreateInstance(
        t.delegateTarget,
        this._getDelegateConfig()
      );
    }
    _isAnimated() {
      return (
        this._config.animation || (this.tip && this.tip.classList.contains(is))
      );
    }
    _isShown() {
      return this.tip && this.tip.classList.contains(ns);
    }
    _createPopper(t) {
      const e =
          "function" == typeof this._config.placement
            ? this._config.placement.call(this, t, this._element)
            : this._config.placement,
        i = ls[e.toUpperCase()];
      return Dt(this._element, t, this._getPopperConfig(i));
    }
    _getOffset() {
      const { offset: t } = this._config;
      return "string" == typeof t
        ? t.split(",").map((t) => Number.parseInt(t, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _resolvePossibleFunction(t) {
      return "function" == typeof t ? t.call(this._element) : t;
    }
    _getPopperConfig(t) {
      const e = {
        placement: t,
        modifiers: [
          {
            name: "flip",
            options: { fallbackPlacements: this._config.fallbackPlacements },
          },
          { name: "offset", options: { offset: this._getOffset() } },
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          {
            name: "arrow",
            options: { element: `.${this.constructor.NAME}-arrow` },
          },
          {
            name: "preSetPlacement",
            enabled: !0,
            phase: "beforeMain",
            fn: (t) => {
              this._getTipElement().setAttribute(
                "data-popper-placement",
                t.state.placement
              );
            },
          },
        ],
      };
      return {
        ...e,
        ...("function" == typeof this._config.popperConfig
          ? this._config.popperConfig(e)
          : this._config.popperConfig),
      };
    }
    _setListeners() {
      const t = this._config.trigger.split(" ");
      for (const e of t)
        if ("click" === e)
          de.on(
            this._element,
            this.constructor.eventName("click"),
            this._config.selector,
            (t) => {
              this._initializeOnDelegatedTarget(t).toggle();
            }
          );
        else if ("manual" !== e) {
          const t =
              e === rs
                ? this.constructor.eventName("mouseenter")
                : this.constructor.eventName("focusin"),
            i =
              e === rs
                ? this.constructor.eventName("mouseleave")
                : this.constructor.eventName("focusout");
          de.on(this._element, t, this._config.selector, (t) => {
            const e = this._initializeOnDelegatedTarget(t);
            (e._activeTrigger["focusin" === t.type ? as : rs] = !0), e._enter();
          }),
            de.on(this._element, i, this._config.selector, (t) => {
              const e = this._initializeOnDelegatedTarget(t);
              (e._activeTrigger["focusout" === t.type ? as : rs] =
                e._element.contains(t.relatedTarget)),
                e._leave();
            });
        }
      (this._hideModalHandler = () => {
        this._element && this.hide();
      }),
        de.on(this._element.closest(ss), os, this._hideModalHandler);
    }
    _fixTitle() {
      const t = this._element.getAttribute("title");
      t &&
        (this._element.getAttribute("aria-label") ||
          this._element.textContent.trim() ||
          this._element.setAttribute("aria-label", t),
        this._element.setAttribute("data-bs-original-title", t),
        this._element.removeAttribute("title"));
    }
    _enter() {
      this._isShown() || this._isHovered
        ? (this._isHovered = !0)
        : ((this._isHovered = !0),
          this._setTimeout(() => {
            this._isHovered && this.show();
          }, this._config.delay.show));
    }
    _leave() {
      this._isWithActiveTrigger() ||
        ((this._isHovered = !1),
        this._setTimeout(() => {
          this._isHovered || this.hide();
        }, this._config.delay.hide));
    }
    _setTimeout(t, e) {
      clearTimeout(this._timeout), (this._timeout = setTimeout(t, e));
    }
    _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(!0);
    }
    _getConfig(t) {
      const e = be.getDataAttributes(this._element);
      for (const t of Object.keys(e)) es.has(t) && delete e[t];
      return (
        (t = { ...e, ...("object" == typeof t && t ? t : {}) }),
        (t = this._mergeConfigObj(t)),
        (t = this._configAfterMerge(t)),
        this._typeCheckConfig(t),
        t
      );
    }
    _configAfterMerge(t) {
      return (
        (t.container = !1 === t.container ? document.body : Ht(t.container)),
        "number" == typeof t.delay &&
          (t.delay = { show: t.delay, hide: t.delay }),
        "number" == typeof t.title && (t.title = t.title.toString()),
        "number" == typeof t.content && (t.content = t.content.toString()),
        t
      );
    }
    _getDelegateConfig() {
      const t = {};
      for (const e in this._config)
        this.constructor.Default[e] !== this._config[e] &&
          (t[e] = this._config[e]);
      return (t.selector = !1), (t.trigger = "manual"), t;
    }
    _disposePopper() {
      this._popper && (this._popper.destroy(), (this._popper = null)),
        this.tip && (this.tip.remove(), (this.tip = null));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = us.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  Qt(us);
  const ds = {
      ...us.Default,
      content: "",
      offset: [0, 8],
      placement: "right",
      template:
        '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      trigger: "click",
    },
    fs = { ...us.DefaultType, content: "(null|string|element|function)" };
  class ps extends us {
    static get Default() {
      return ds;
    }
    static get DefaultType() {
      return fs;
    }
    static get NAME() {
      return "popover";
    }
    _isWithContent() {
      return this._getTitle() || this._getContent();
    }
    _getContentForTemplate() {
      return {
        ".popover-header": this._getTitle(),
        ".popover-body": this._getContent(),
      };
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = ps.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  Qt(ps);
  const gs = ".bs.scrollspy",
    ms = `activate${gs}`,
    _s = `click${gs}`,
    bs = `load${gs}.data-api`,
    vs = "active",
    ys = "[href]",
    ws = ".nav-link",
    As = `${ws}, .nav-item > ${ws}, .list-group-item`,
    Es = {
      offset: null,
      rootMargin: "0px 0px -25%",
      smoothScroll: !1,
      target: null,
      threshold: [0.1, 0.5, 1],
    },
    Ts = {
      offset: "(number|null)",
      rootMargin: "string",
      smoothScroll: "boolean",
      target: "element",
      threshold: "array",
    };
  class Cs extends ye {
    constructor(t, e) {
      super(t, e),
        (this._targetLinks = new Map()),
        (this._observableSections = new Map()),
        (this._rootElement =
          "visible" === getComputedStyle(this._element).overflowY
            ? null
            : this._element),
        (this._activeTarget = null),
        (this._observer = null),
        (this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }),
        this.refresh();
    }
    static get Default() {
      return Es;
    }
    static get DefaultType() {
      return Ts;
    }
    static get NAME() {
      return "scrollspy";
    }
    refresh() {
      this._initializeTargetsAndObservables(),
        this._maybeEnableSmoothScroll(),
        this._observer
          ? this._observer.disconnect()
          : (this._observer = this._getNewObserver());
      for (const t of this._observableSections.values())
        this._observer.observe(t);
    }
    dispose() {
      this._observer.disconnect(), super.dispose();
    }
    _configAfterMerge(t) {
      return (
        (t.target = Ht(t.target) || document.body),
        (t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin),
        "string" == typeof t.threshold &&
          (t.threshold = t.threshold
            .split(",")
            .map((t) => Number.parseFloat(t))),
        t
      );
    }
    _maybeEnableSmoothScroll() {
      this._config.smoothScroll &&
        (de.off(this._config.target, _s),
        de.on(this._config.target, _s, ys, (t) => {
          const e = this._observableSections.get(t.target.hash);
          if (e) {
            t.preventDefault();
            const i = this._rootElement || window,
              n = e.offsetTop - this._element.offsetTop;
            if (i.scrollTo)
              return void i.scrollTo({ top: n, behavior: "smooth" });
            i.scrollTop = n;
          }
        }));
    }
    _getNewObserver() {
      const t = {
        root: this._rootElement,
        threshold: this._config.threshold,
        rootMargin: this._config.rootMargin,
      };
      return new IntersectionObserver((t) => this._observerCallback(t), t);
    }
    _observerCallback(t) {
      const e = (t) => this._targetLinks.get(`#${t.target.id}`),
        i = (t) => {
          (this._previousScrollData.visibleEntryTop = t.target.offsetTop),
            this._process(e(t));
        },
        n = (this._rootElement || document.documentElement).scrollTop,
        s = n >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = n;
      for (const o of t) {
        if (!o.isIntersecting) {
          (this._activeTarget = null), this._clearActiveClass(e(o));
          continue;
        }
        const t =
          o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
        if (s && t) {
          if ((i(o), !n)) return;
        } else s || t || i(o);
      }
    }
    _initializeTargetsAndObservables() {
      (this._targetLinks = new Map()), (this._observableSections = new Map());
      const t = ke.find(ys, this._config.target);
      for (const e of t) {
        if (!e.hash || Ft(e)) continue;
        const t = ke.findOne(e.hash, this._element);
        Wt(t) &&
          (this._targetLinks.set(e.hash, e),
          this._observableSections.set(e.hash, t));
      }
    }
    _process(t) {
      this._activeTarget !== t &&
        (this._clearActiveClass(this._config.target),
        (this._activeTarget = t),
        t.classList.add(vs),
        this._activateParents(t),
        de.trigger(this._element, ms, { relatedTarget: t }));
    }
    _activateParents(t) {
      if (t.classList.contains("dropdown-item"))
        ke.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(
          vs
        );
      else
        for (const e of ke.parents(t, ".nav, .list-group"))
          for (const t of ke.prev(e, As)) t.classList.add(vs);
    }
    _clearActiveClass(t) {
      t.classList.remove(vs);
      const e = ke.find(`${ys}.${vs}`, t);
      for (const t of e) t.classList.remove(vs);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Cs.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  de.on(window, bs, () => {
    for (const t of ke.find('[data-bs-spy="scroll"]'))
      Cs.getOrCreateInstance(t);
  }),
    Qt(Cs);
  const Os = ".bs.tab",
    xs = `hide${Os}`,
    ks = `hidden${Os}`,
    Ls = `show${Os}`,
    Ds = `shown${Os}`,
    $s = `click${Os}`,
    Ss = `keydown${Os}`,
    Is = `load${Os}`,
    Ns = "ArrowLeft",
    Ps = "ArrowRight",
    js = "ArrowUp",
    Ms = "ArrowDown",
    Hs = "active",
    Ws = "fade",
    Fs = "show",
    Bs = ":not(.dropdown-toggle)",
    zs =
      '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
    qs = `.nav-link${Bs}, .list-group-item${Bs}, [role="tab"]${Bs}, ${zs}`,
    Rs = `.${Hs}[data-bs-toggle="tab"], .${Hs}[data-bs-toggle="pill"], .${Hs}[data-bs-toggle="list"]`;
  class Vs extends ye {
    constructor(t) {
      super(t),
        (this._parent = this._element.closest(
          '.list-group, .nav, [role="tablist"]'
        )),
        this._parent &&
          (this._setInitialAttributes(this._parent, this._getChildren()),
          de.on(this._element, Ss, (t) => this._keydown(t)));
    }
    static get NAME() {
      return "tab";
    }
    show() {
      const t = this._element;
      if (this._elemIsActive(t)) return;
      const e = this._getActiveElem(),
        i = e ? de.trigger(e, xs, { relatedTarget: t }) : null;
      de.trigger(t, Ls, { relatedTarget: e }).defaultPrevented ||
        (i && i.defaultPrevented) ||
        (this._deactivate(e, t), this._activate(t, e));
    }
    _activate(t, e) {
      t &&
        (t.classList.add(Hs),
        this._activate(Pt(t)),
        this._queueCallback(
          () => {
            "tab" === t.getAttribute("role")
              ? (t.removeAttribute("tabindex"),
                t.setAttribute("aria-selected", !0),
                this._toggleDropDown(t, !0),
                de.trigger(t, Ds, { relatedTarget: e }))
              : t.classList.add(Fs);
          },
          t,
          t.classList.contains(Ws)
        ));
    }
    _deactivate(t, e) {
      t &&
        (t.classList.remove(Hs),
        t.blur(),
        this._deactivate(Pt(t)),
        this._queueCallback(
          () => {
            "tab" === t.getAttribute("role")
              ? (t.setAttribute("aria-selected", !1),
                t.setAttribute("tabindex", "-1"),
                this._toggleDropDown(t, !1),
                de.trigger(t, ks, { relatedTarget: e }))
              : t.classList.remove(Fs);
          },
          t,
          t.classList.contains(Ws)
        ));
    }
    _keydown(t) {
      if (![Ns, Ps, js, Ms].includes(t.key)) return;
      t.stopPropagation(), t.preventDefault();
      const e = [Ps, Ms].includes(t.key),
        i = Ut(
          this._getChildren().filter((t) => !Ft(t)),
          t.target,
          e,
          !0
        );
      i && (i.focus({ preventScroll: !0 }), Vs.getOrCreateInstance(i).show());
    }
    _getChildren() {
      return ke.find(qs, this._parent);
    }
    _getActiveElem() {
      return this._getChildren().find((t) => this._elemIsActive(t)) || null;
    }
    _setInitialAttributes(t, e) {
      this._setAttributeIfNotExists(t, "role", "tablist");
      for (const t of e) this._setInitialAttributesOnChild(t);
    }
    _setInitialAttributesOnChild(t) {
      t = this._getInnerElement(t);
      const e = this._elemIsActive(t),
        i = this._getOuterElement(t);
      t.setAttribute("aria-selected", e),
        i !== t && this._setAttributeIfNotExists(i, "role", "presentation"),
        e || t.setAttribute("tabindex", "-1"),
        this._setAttributeIfNotExists(t, "role", "tab"),
        this._setInitialAttributesOnTargetPanel(t);
    }
    _setInitialAttributesOnTargetPanel(t) {
      const e = Pt(t);
      e &&
        (this._setAttributeIfNotExists(e, "role", "tabpanel"),
        t.id &&
          this._setAttributeIfNotExists(e, "aria-labelledby", `#${t.id}`));
    }
    _toggleDropDown(t, e) {
      const i = this._getOuterElement(t);
      if (!i.classList.contains("dropdown")) return;
      const n = (t, n) => {
        const s = ke.findOne(t, i);
        s && s.classList.toggle(n, e);
      };
      n(".dropdown-toggle", Hs),
        n(".dropdown-menu", Fs),
        i.setAttribute("aria-expanded", e);
    }
    _setAttributeIfNotExists(t, e, i) {
      t.hasAttribute(e) || t.setAttribute(e, i);
    }
    _elemIsActive(t) {
      return t.classList.contains(Hs);
    }
    _getInnerElement(t) {
      return t.matches(qs) ? t : ke.findOne(qs, t);
    }
    _getOuterElement(t) {
      return t.closest(".nav-item, .list-group-item") || t;
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Vs.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  de.on(document, $s, zs, function (t) {
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
      Ft(this) || Vs.getOrCreateInstance(this).show();
  }),
    de.on(window, Is, () => {
      for (const t of ke.find(Rs)) Vs.getOrCreateInstance(t);
    }),
    Qt(Vs);
  const Ks = ".bs.toast",
    Qs = `mouseover${Ks}`,
    Xs = `mouseout${Ks}`,
    Ys = `focusin${Ks}`,
    Us = `focusout${Ks}`,
    Gs = `hide${Ks}`,
    Js = `hidden${Ks}`,
    Zs = `show${Ks}`,
    to = `shown${Ks}`,
    eo = "hide",
    io = "show",
    no = "showing",
    so = { animation: "boolean", autohide: "boolean", delay: "number" },
    oo = { animation: !0, autohide: !0, delay: 5e3 };
  class ro extends ye {
    constructor(t, e) {
      super(t, e),
        (this._timeout = null),
        (this._hasMouseInteraction = !1),
        (this._hasKeyboardInteraction = !1),
        this._setListeners();
    }
    static get Default() {
      return oo;
    }
    static get DefaultType() {
      return so;
    }
    static get NAME() {
      return "toast";
    }
    show() {
      de.trigger(this._element, Zs).defaultPrevented ||
        (this._clearTimeout(),
        this._config.animation && this._element.classList.add("fade"),
        this._element.classList.remove(eo),
        qt(this._element),
        this._element.classList.add(io, no),
        this._queueCallback(
          () => {
            this._element.classList.remove(no),
              de.trigger(this._element, to),
              this._maybeScheduleHide();
          },
          this._element,
          this._config.animation
        ));
    }
    hide() {
      this.isShown() &&
        (de.trigger(this._element, Gs).defaultPrevented ||
          (this._element.classList.add(no),
          this._queueCallback(
            () => {
              this._element.classList.add(eo),
                this._element.classList.remove(no, io),
                de.trigger(this._element, Js);
            },
            this._element,
            this._config.animation
          )));
    }
    dispose() {
      this._clearTimeout(),
        this.isShown() && this._element.classList.remove(io),
        super.dispose();
    }
    isShown() {
      return this._element.classList.contains(io);
    }
    _maybeScheduleHide() {
      this._config.autohide &&
        (this._hasMouseInteraction ||
          this._hasKeyboardInteraction ||
          (this._timeout = setTimeout(() => {
            this.hide();
          }, this._config.delay)));
    }
    _onInteraction(t, e) {
      switch (t.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = e;
          break;
        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = e;
      }
      if (e) return void this._clearTimeout();
      const i = t.relatedTarget;
      this._element === i ||
        this._element.contains(i) ||
        this._maybeScheduleHide();
    }
    _setListeners() {
      de.on(this._element, Qs, (t) => this._onInteraction(t, !0)),
        de.on(this._element, Xs, (t) => this._onInteraction(t, !1)),
        de.on(this._element, Ys, (t) => this._onInteraction(t, !0)),
        de.on(this._element, Us, (t) => this._onInteraction(t, !1));
    }
    _clearTimeout() {
      clearTimeout(this._timeout), (this._timeout = null);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = ro.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  we(ro), Qt(ro);
  new (class {
    constructor() {}
  })();
})();
