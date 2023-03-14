/*! For license information please see app.js.LICENSE.txt */
(() => {
  var e = {
      9188: (e, t, n) => {
        "use strict";
        n.d(t, { fi: () => h, kZ: () => p });
        var r = n(6143),
          i = n(583),
          o = n(7994),
          s = n(1955),
          a = n(380),
          l = n(8293),
          u = n(3),
          c = n(2556),
          f = { placement: "bottom", modifiers: [], strategy: "absolute" };
        function d() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return !t.some(function (e) {
            return !(e && "function" == typeof e.getBoundingClientRect);
          });
        }
        function p(e) {
          void 0 === e && (e = {});
          var t = e,
            n = t.defaultModifiers,
            p = void 0 === n ? [] : n,
            h = t.defaultOptions,
            g = void 0 === h ? f : h;
          return function (e, t, n) {
            void 0 === n && (n = g);
            var h = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, f, g),
                modifiersData: {},
                elements: { reference: e, popper: t },
                attributes: {},
                styles: {},
              },
              m = [],
              v = !1,
              y = {
                state: h,
                setOptions: function (n) {
                  var r = "function" == typeof n ? n(h.options) : n;
                  b(),
                    (h.options = Object.assign({}, g, h.options, r)),
                    (h.scrollParents = {
                      reference: (0, c.kK)(e)
                        ? (0, o.Z)(e)
                        : e.contextElement
                        ? (0, o.Z)(e.contextElement)
                        : [],
                      popper: (0, o.Z)(t),
                    });
                  var i = (0, a.Z)((0, u.Z)([].concat(p, h.options.modifiers)));
                  return (
                    (h.orderedModifiers = i.filter(function (e) {
                      return e.enabled;
                    })),
                    h.orderedModifiers.forEach(function (e) {
                      var t = e.name,
                        n = e.options,
                        r = void 0 === n ? {} : n,
                        i = e.effect;
                      if ("function" == typeof i) {
                        var o = i({
                          state: h,
                          name: t,
                          instance: y,
                          options: r,
                        });
                        m.push(o || function () {});
                      }
                    }),
                    y.update()
                  );
                },
                forceUpdate: function () {
                  if (!v) {
                    var e = h.elements,
                      t = e.reference,
                      n = e.popper;
                    if (d(t, n)) {
                      (h.rects = {
                        reference: (0, r.Z)(
                          t,
                          (0, s.Z)(n),
                          "fixed" === h.options.strategy
                        ),
                        popper: (0, i.Z)(n),
                      }),
                        (h.reset = !1),
                        (h.placement = h.options.placement),
                        h.orderedModifiers.forEach(function (e) {
                          return (h.modifiersData[e.name] = Object.assign(
                            {},
                            e.data
                          ));
                        });
                      for (var o = 0; o < h.orderedModifiers.length; o++)
                        if (!0 !== h.reset) {
                          var a = h.orderedModifiers[o],
                            l = a.fn,
                            u = a.options,
                            c = void 0 === u ? {} : u,
                            f = a.name;
                          "function" == typeof l &&
                            (h =
                              l({
                                state: h,
                                options: c,
                                name: f,
                                instance: y,
                              }) || h);
                        } else (h.reset = !1), (o = -1);
                    }
                  }
                },
                update: (0, l.Z)(function () {
                  return new Promise(function (e) {
                    y.forceUpdate(), e(h);
                  });
                }),
                destroy: function () {
                  b(), (v = !0);
                },
              };
            if (!d(e, t)) return y;
            function b() {
              m.forEach(function (e) {
                return e();
              }),
                (m = []);
            }
            return (
              y.setOptions(n).then(function (e) {
                !v && n.onFirstUpdate && n.onFirstUpdate(e);
              }),
              y
            );
          };
        }
        var h = p();
      },
      4985: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => i });
        var r = n(2556);
        function i(e, t) {
          var n = t.getRootNode && t.getRootNode();
          if (e.contains(t)) return !0;
          if (n && (0, r.Zq)(n)) {
            var i = t;
            do {
              if (i && e.isSameNode(i)) return !0;
              i = i.parentNode || i.host;
            } while (i);
          }
          return !1;
        }
      },
      400: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => a });
        var r = n(2556),
          i = n(138),
          o = n(2057),
          s = n(7977);
        function a(e, t, n) {
          void 0 === t && (t = !1), void 0 === n && (n = !1);
          var a = e.getBoundingClientRect(),
            l = 1,
            u = 1;
          t &&
            (0, r.Re)(e) &&
            ((l =
              (e.offsetWidth > 0 && (0, i.NM)(a.width) / e.offsetWidth) || 1),
            (u =
              (e.offsetHeight > 0 && (0, i.NM)(a.height) / e.offsetHeight) ||
              1));
          var c = ((0, r.kK)(e) ? (0, o.Z)(e) : window).visualViewport,
            f = !(0, s.Z)() && n,
            d = (a.left + (f && c ? c.offsetLeft : 0)) / l,
            p = (a.top + (f && c ? c.offsetTop : 0)) / u,
            h = a.width / l,
            g = a.height / u;
          return {
            width: h,
            height: g,
            top: p,
            right: d + h,
            bottom: p + g,
            left: d,
            x: d,
            y: p,
          };
        }
      },
      1437: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => y });
        var r = n(7701),
          i = n(3155),
          o = n(7723),
          s = n(7994),
          a = n(1955),
          l = n(7252),
          u = n(3062),
          c = n(2556),
          f = n(400),
          d = n(5923),
          p = n(4985),
          h = n(6333),
          g = n(5626),
          m = n(138);
        function v(e, t, n) {
          return t === r.Pj
            ? (0, g.Z)((0, i.Z)(e, n))
            : (0, c.kK)(t)
            ? (function (e, t) {
                var n = (0, f.Z)(e, !1, "fixed" === t);
                return (
                  (n.top = n.top + e.clientTop),
                  (n.left = n.left + e.clientLeft),
                  (n.bottom = n.top + e.clientHeight),
                  (n.right = n.left + e.clientWidth),
                  (n.width = e.clientWidth),
                  (n.height = e.clientHeight),
                  (n.x = n.left),
                  (n.y = n.top),
                  n
                );
              })(t, n)
            : (0, g.Z)((0, o.Z)((0, l.Z)(e)));
        }
        function y(e, t, n, r) {
          var i =
              "clippingParents" === t
                ? (function (e) {
                    var t = (0, s.Z)((0, d.Z)(e)),
                      n =
                        ["absolute", "fixed"].indexOf((0, u.Z)(e).position) >=
                          0 && (0, c.Re)(e)
                          ? (0, a.Z)(e)
                          : e;
                    return (0, c.kK)(n)
                      ? t.filter(function (e) {
                          return (
                            (0, c.kK)(e) &&
                            (0, p.Z)(e, n) &&
                            "body" !== (0, h.Z)(e)
                          );
                        })
                      : [];
                  })(e)
                : [].concat(t),
            o = [].concat(i, [n]),
            l = o[0],
            f = o.reduce(function (t, n) {
              var i = v(e, n, r);
              return (
                (t.top = (0, m.Fp)(i.top, t.top)),
                (t.right = (0, m.VV)(i.right, t.right)),
                (t.bottom = (0, m.VV)(i.bottom, t.bottom)),
                (t.left = (0, m.Fp)(i.left, t.left)),
                t
              );
            }, v(e, l, r));
          return (
            (f.width = f.right - f.left),
            (f.height = f.bottom - f.top),
            (f.x = f.left),
            (f.y = f.top),
            f
          );
        }
      },
      6143: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => f });
        var r = n(400),
          i = n(4782),
          o = n(6333),
          s = n(2556),
          a = n(4063),
          l = n(7252),
          u = n(611),
          c = n(138);
        function f(e, t, n) {
          void 0 === n && (n = !1);
          var f = (0, s.Re)(t),
            d =
              (0, s.Re)(t) &&
              (function (e) {
                var t = e.getBoundingClientRect(),
                  n = (0, c.NM)(t.width) / e.offsetWidth || 1,
                  r = (0, c.NM)(t.height) / e.offsetHeight || 1;
                return 1 !== n || 1 !== r;
              })(t),
            p = (0, l.Z)(t),
            h = (0, r.Z)(e, d, n),
            g = { scrollLeft: 0, scrollTop: 0 },
            m = { x: 0, y: 0 };
          return (
            (f || (!f && !n)) &&
              (("body" !== (0, o.Z)(t) || (0, u.Z)(p)) && (g = (0, i.Z)(t)),
              (0, s.Re)(t)
                ? (((m = (0, r.Z)(t, !0)).x += t.clientLeft),
                  (m.y += t.clientTop))
                : p && (m.x = (0, a.Z)(p))),
            {
              x: h.left + g.scrollLeft - m.x,
              y: h.top + g.scrollTop - m.y,
              width: h.width,
              height: h.height,
            }
          );
        }
      },
      3062: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => i });
        var r = n(2057);
        function i(e) {
          return (0, r.Z)(e).getComputedStyle(e);
        }
      },
      7252: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => i });
        var r = n(2556);
        function i(e) {
          return (
            ((0, r.kK)(e) ? e.ownerDocument : e.document) || window.document
          ).documentElement;
        }
      },
      7723: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => l });
        var r = n(7252),
          i = n(3062),
          o = n(4063),
          s = n(2163),
          a = n(138);
        function l(e) {
          var t,
            n = (0, r.Z)(e),
            l = (0, s.Z)(e),
            u = null == (t = e.ownerDocument) ? void 0 : t.body,
            c = (0, a.Fp)(
              n.scrollWidth,
              n.clientWidth,
              u ? u.scrollWidth : 0,
              u ? u.clientWidth : 0
            ),
            f = (0, a.Fp)(
              n.scrollHeight,
              n.clientHeight,
              u ? u.scrollHeight : 0,
              u ? u.clientHeight : 0
            ),
            d = -l.scrollLeft + (0, o.Z)(e),
            p = -l.scrollTop;
          return (
            "rtl" === (0, i.Z)(u || n).direction &&
              (d += (0, a.Fp)(n.clientWidth, u ? u.clientWidth : 0) - c),
            { width: c, height: f, x: d, y: p }
          );
        }
      },
      8328: (e, t, n) => {
        "use strict";
        function r(e) {
          return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
        }
        n.d(t, { Z: () => r });
      },
      583: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => i });
        var r = n(400);
        function i(e) {
          var t = (0, r.Z)(e),
            n = e.offsetWidth,
            i = e.offsetHeight;
          return (
            Math.abs(t.width - n) <= 1 && (n = t.width),
            Math.abs(t.height - i) <= 1 && (i = t.height),
            { x: e.offsetLeft, y: e.offsetTop, width: n, height: i }
          );
        }
      },
      6333: (e, t, n) => {
        "use strict";
        function r(e) {
          return e ? (e.nodeName || "").toLowerCase() : null;
        }
        n.d(t, { Z: () => r });
      },
      4782: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => a });
        var r = n(2163),
          i = n(2057),
          o = n(2556),
          s = n(8328);
        function a(e) {
          return e !== (0, i.Z)(e) && (0, o.Re)(e) ? (0, s.Z)(e) : (0, r.Z)(e);
        }
      },
      1955: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => f });
        var r = n(2057),
          i = n(6333),
          o = n(3062),
          s = n(2556),
          a = n(7313),
          l = n(5923),
          u = n(5918);
        function c(e) {
          return (0, s.Re)(e) && "fixed" !== (0, o.Z)(e).position
            ? e.offsetParent
            : null;
        }
        function f(e) {
          for (
            var t = (0, r.Z)(e), n = c(e);
            n && (0, a.Z)(n) && "static" === (0, o.Z)(n).position;

          )
            n = c(n);
          return n &&
            ("html" === (0, i.Z)(n) ||
              ("body" === (0, i.Z)(n) && "static" === (0, o.Z)(n).position))
            ? t
            : n ||
                (function (e) {
                  var t = /firefox/i.test((0, u.Z)());
                  if (
                    /Trident/i.test((0, u.Z)()) &&
                    (0, s.Re)(e) &&
                    "fixed" === (0, o.Z)(e).position
                  )
                    return null;
                  var n = (0, l.Z)(e);
                  for (
                    (0, s.Zq)(n) && (n = n.host);
                    (0, s.Re)(n) && ["html", "body"].indexOf((0, i.Z)(n)) < 0;

                  ) {
                    var r = (0, o.Z)(n);
                    if (
                      "none" !== r.transform ||
                      "none" !== r.perspective ||
                      "paint" === r.contain ||
                      -1 !==
                        ["transform", "perspective"].indexOf(r.willChange) ||
                      (t && "filter" === r.willChange) ||
                      (t && r.filter && "none" !== r.filter)
                    )
                      return n;
                    n = n.parentNode;
                  }
                  return null;
                })(e) ||
                t;
        }
      },
      5923: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => s });
        var r = n(6333),
          i = n(7252),
          o = n(2556);
        function s(e) {
          return "html" === (0, r.Z)(e)
            ? e
            : e.assignedSlot ||
                e.parentNode ||
                ((0, o.Zq)(e) ? e.host : null) ||
                (0, i.Z)(e);
        }
      },
      7523: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => a });
        var r = n(5923),
          i = n(611),
          o = n(6333),
          s = n(2556);
        function a(e) {
          return ["html", "body", "#document"].indexOf((0, o.Z)(e)) >= 0
            ? e.ownerDocument.body
            : (0, s.Re)(e) && (0, i.Z)(e)
            ? e
            : a((0, r.Z)(e));
        }
      },
      3155: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => a });
        var r = n(2057),
          i = n(7252),
          o = n(4063),
          s = n(7977);
        function a(e, t) {
          var n = (0, r.Z)(e),
            a = (0, i.Z)(e),
            l = n.visualViewport,
            u = a.clientWidth,
            c = a.clientHeight,
            f = 0,
            d = 0;
          if (l) {
            (u = l.width), (c = l.height);
            var p = (0, s.Z)();
            (p || (!p && "fixed" === t)) &&
              ((f = l.offsetLeft), (d = l.offsetTop));
          }
          return { width: u, height: c, x: f + (0, o.Z)(e), y: d };
        }
      },
      2057: (e, t, n) => {
        "use strict";
        function r(e) {
          if (null == e) return window;
          if ("[object Window]" !== e.toString()) {
            var t = e.ownerDocument;
            return (t && t.defaultView) || window;
          }
          return e;
        }
        n.d(t, { Z: () => r });
      },
      2163: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => i });
        var r = n(2057);
        function i(e) {
          var t = (0, r.Z)(e);
          return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
        }
      },
      4063: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => s });
        var r = n(400),
          i = n(7252),
          o = n(2163);
        function s(e) {
          return (0, r.Z)((0, i.Z)(e)).left + (0, o.Z)(e).scrollLeft;
        }
      },
      2556: (e, t, n) => {
        "use strict";
        n.d(t, { Re: () => o, Zq: () => s, kK: () => i });
        var r = n(2057);
        function i(e) {
          return e instanceof (0, r.Z)(e).Element || e instanceof Element;
        }
        function o(e) {
          return (
            e instanceof (0, r.Z)(e).HTMLElement || e instanceof HTMLElement
          );
        }
        function s(e) {
          return (
            "undefined" != typeof ShadowRoot &&
            (e instanceof (0, r.Z)(e).ShadowRoot || e instanceof ShadowRoot)
          );
        }
      },
      7977: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => i });
        var r = n(5918);
        function i() {
          return !/^((?!chrome|android).)*safari/i.test((0, r.Z)());
        }
      },
      611: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => i });
        var r = n(3062);
        function i(e) {
          var t = (0, r.Z)(e),
            n = t.overflow,
            i = t.overflowX,
            o = t.overflowY;
          return /auto|scroll|overlay|hidden/.test(n + o + i);
        }
      },
      7313: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => i });
        var r = n(6333);
        function i(e) {
          return ["table", "td", "th"].indexOf((0, r.Z)(e)) >= 0;
        }
      },
      7994: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => a });
        var r = n(7523),
          i = n(5923),
          o = n(2057),
          s = n(611);
        function a(e, t) {
          var n;
          void 0 === t && (t = []);
          var l = (0, r.Z)(e),
            u = l === (null == (n = e.ownerDocument) ? void 0 : n.body),
            c = (0, o.Z)(l),
            f = u
              ? [c].concat(c.visualViewport || [], (0, s.Z)(l) ? l : [])
              : l,
            d = t.concat(f);
          return u ? d : d.concat(a((0, i.Z)(f)));
        }
      },
      7701: (e, t, n) => {
        "use strict";
        n.d(t, {
          BL: () => u,
          Ct: () => m,
          DH: () => w,
          F2: () => o,
          I: () => i,
          MS: () => C,
          N7: () => v,
          Pj: () => d,
          XM: () => x,
          YP: () => h,
          bw: () => g,
          cW: () => E,
          d7: () => a,
          ij: () => y,
          iv: () => T,
          k5: () => p,
          mv: () => l,
          r5: () => b,
          t$: () => s,
          ut: () => c,
          wX: () => _,
          we: () => r,
          xs: () => k,
          zV: () => f,
        });
        var r = "top",
          i = "bottom",
          o = "right",
          s = "left",
          a = "auto",
          l = [r, i, o, s],
          u = "start",
          c = "end",
          f = "clippingParents",
          d = "viewport",
          p = "popper",
          h = "reference",
          g = l.reduce(function (e, t) {
            return e.concat([t + "-" + u, t + "-" + c]);
          }, []),
          m = [].concat(l, [a]).reduce(function (e, t) {
            return e.concat([t, t + "-" + u, t + "-" + c]);
          }, []),
          v = "beforeRead",
          y = "read",
          b = "afterRead",
          x = "beforeMain",
          w = "main",
          _ = "afterMain",
          T = "beforeWrite",
          E = "write",
          C = "afterWrite",
          k = [v, y, b, x, w, _, T, E, C];
      },
      2861: (e, t, n) => {
        "use strict";
        n.r(t),
          n.d(t, {
            afterMain: () => r.wX,
            afterRead: () => r.r5,
            afterWrite: () => r.MS,
            applyStyles: () => i.Zs,
            arrow: () => i.x7,
            auto: () => r.d7,
            basePlacements: () => r.mv,
            beforeMain: () => r.XM,
            beforeRead: () => r.N7,
            beforeWrite: () => r.iv,
            bottom: () => r.I,
            clippingParents: () => r.zV,
            computeStyles: () => i.o,
            createPopper: () => a.fi,
            createPopperBase: () => o.fi,
            createPopperLite: () => l.fi,
            detectOverflow: () => s.Z,
            end: () => r.ut,
            eventListeners: () => i.JK,
            flip: () => i.RR,
            hide: () => i.Cp,
            left: () => r.t$,
            main: () => r.DH,
            modifierPhases: () => r.xs,
            offset: () => i.cv,
            placements: () => r.Ct,
            popper: () => r.k5,
            popperGenerator: () => o.kZ,
            popperOffsets: () => i.OC,
            preventOverflow: () => i.Yj,
            read: () => r.ij,
            reference: () => r.YP,
            right: () => r.F2,
            start: () => r.BL,
            top: () => r.we,
            variationPlacements: () => r.bw,
            viewport: () => r.Pj,
            write: () => r.cW,
          });
        var r = n(7701),
          i = n(9309),
          o = n(9188),
          s = n(3161),
          a = n(804),
          l = n(3151);
      },
      7824: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => o });
        var r = n(6333),
          i = n(2556);
        const o = {
          name: "applyStyles",
          enabled: !0,
          phase: "write",
          fn: function (e) {
            var t = e.state;
            Object.keys(t.elements).forEach(function (e) {
              var n = t.styles[e] || {},
                o = t.attributes[e] || {},
                s = t.elements[e];
              (0, i.Re)(s) &&
                (0, r.Z)(s) &&
                (Object.assign(s.style, n),
                Object.keys(o).forEach(function (e) {
                  var t = o[e];
                  !1 === t
                    ? s.removeAttribute(e)
                    : s.setAttribute(e, !0 === t ? "" : t);
                }));
            });
          },
          effect: function (e) {
            var t = e.state,
              n = {
                popper: {
                  position: t.options.strategy,
                  left: "0",
                  top: "0",
                  margin: "0",
                },
                arrow: { position: "absolute" },
                reference: {},
              };
            return (
              Object.assign(t.elements.popper.style, n.popper),
              (t.styles = n),
              t.elements.arrow &&
                Object.assign(t.elements.arrow.style, n.arrow),
              function () {
                Object.keys(t.elements).forEach(function (e) {
                  var o = t.elements[e],
                    s = t.attributes[e] || {},
                    a = Object.keys(
                      t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]
                    ).reduce(function (e, t) {
                      return (e[t] = ""), e;
                    }, {});
                  (0, i.Re)(o) &&
                    (0, r.Z)(o) &&
                    (Object.assign(o.style, a),
                    Object.keys(s).forEach(function (e) {
                      o.removeAttribute(e);
                    }));
                });
              }
            );
          },
          requires: ["computeStyles"],
        };
      },
      6896: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => d });
        var r = n(6206),
          i = n(583),
          o = n(4985),
          s = n(1955),
          a = n(1516),
          l = n(7516),
          u = n(3293),
          c = n(3706),
          f = n(7701);
        const d = {
          name: "arrow",
          enabled: !0,
          phase: "main",
          fn: function (e) {
            var t,
              n = e.state,
              o = e.name,
              d = e.options,
              p = n.elements.arrow,
              h = n.modifiersData.popperOffsets,
              g = (0, r.Z)(n.placement),
              m = (0, a.Z)(g),
              v = [f.t$, f.F2].indexOf(g) >= 0 ? "height" : "width";
            if (p && h) {
              var y = (function (e, t) {
                  return (
                    (e =
                      "function" == typeof e
                        ? e(
                            Object.assign({}, t.rects, {
                              placement: t.placement,
                            })
                          )
                        : e),
                    (0, u.Z)("number" != typeof e ? e : (0, c.Z)(e, f.mv))
                  );
                })(d.padding, n),
                b = (0, i.Z)(p),
                x = "y" === m ? f.we : f.t$,
                w = "y" === m ? f.I : f.F2,
                _ =
                  n.rects.reference[v] +
                  n.rects.reference[m] -
                  h[m] -
                  n.rects.popper[v],
                T = h[m] - n.rects.reference[m],
                E = (0, s.Z)(p),
                C = E
                  ? "y" === m
                    ? E.clientHeight || 0
                    : E.clientWidth || 0
                  : 0,
                k = _ / 2 - T / 2,
                A = y[x],
                S = C - b[v] - y[w],
                D = C / 2 - b[v] / 2 + k,
                j = (0, l.u)(A, D, S),
                O = m;
              n.modifiersData[o] =
                (((t = {})[O] = j), (t.centerOffset = j - D), t);
            }
          },
          effect: function (e) {
            var t = e.state,
              n = e.options.element,
              r = void 0 === n ? "[data-popper-arrow]" : n;
            null != r &&
              ("string" != typeof r ||
                (r = t.elements.popper.querySelector(r))) &&
              (0, o.Z)(t.elements.popper, r) &&
              (t.elements.arrow = r);
          },
          requires: ["popperOffsets"],
          requiresIfExists: ["preventOverflow"],
        };
      },
      6531: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => p });
        var r = n(7701),
          i = n(1955),
          o = n(2057),
          s = n(7252),
          a = n(3062),
          l = n(6206),
          u = n(4943),
          c = n(138),
          f = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
        function d(e) {
          var t,
            n = e.popper,
            l = e.popperRect,
            u = e.placement,
            d = e.variation,
            p = e.offsets,
            h = e.position,
            g = e.gpuAcceleration,
            m = e.adaptive,
            v = e.roundOffsets,
            y = e.isFixed,
            b = p.x,
            x = void 0 === b ? 0 : b,
            w = p.y,
            _ = void 0 === w ? 0 : w,
            T = "function" == typeof v ? v({ x, y: _ }) : { x, y: _ };
          (x = T.x), (_ = T.y);
          var E = p.hasOwnProperty("x"),
            C = p.hasOwnProperty("y"),
            k = r.t$,
            A = r.we,
            S = window;
          if (m) {
            var D = (0, i.Z)(n),
              j = "clientHeight",
              O = "clientWidth";
            D === (0, o.Z)(n) &&
              ((D = (0, s.Z)(n)),
              "static" !== (0, a.Z)(D).position &&
                "absolute" === h &&
                ((j = "scrollHeight"), (O = "scrollWidth"))),
              (u === r.we || ((u === r.t$ || u === r.F2) && d === r.ut)) &&
                ((A = r.I),
                (_ -=
                  (y && D === S && S.visualViewport
                    ? S.visualViewport.height
                    : D[j]) - l.height),
                (_ *= g ? 1 : -1)),
              (u !== r.t$ && ((u !== r.we && u !== r.I) || d !== r.ut)) ||
                ((k = r.F2),
                (x -=
                  (y && D === S && S.visualViewport
                    ? S.visualViewport.width
                    : D[O]) - l.width),
                (x *= g ? 1 : -1));
          }
          var N,
            L = Object.assign({ position: h }, m && f),
            Z =
              !0 === v
                ? (function (e) {
                    var t = e.x,
                      n = e.y,
                      r = window.devicePixelRatio || 1;
                    return {
                      x: (0, c.NM)(t * r) / r || 0,
                      y: (0, c.NM)(n * r) / r || 0,
                    };
                  })({ x, y: _ })
                : { x, y: _ };
          return (
            (x = Z.x),
            (_ = Z.y),
            g
              ? Object.assign(
                  {},
                  L,
                  (((N = {})[A] = C ? "0" : ""),
                  (N[k] = E ? "0" : ""),
                  (N.transform =
                    (S.devicePixelRatio || 1) <= 1
                      ? "translate(" + x + "px, " + _ + "px)"
                      : "translate3d(" + x + "px, " + _ + "px, 0)"),
                  N)
                )
              : Object.assign(
                  {},
                  L,
                  (((t = {})[A] = C ? _ + "px" : ""),
                  (t[k] = E ? x + "px" : ""),
                  (t.transform = ""),
                  t)
                )
          );
        }
        const p = {
          name: "computeStyles",
          enabled: !0,
          phase: "beforeWrite",
          fn: function (e) {
            var t = e.state,
              n = e.options,
              r = n.gpuAcceleration,
              i = void 0 === r || r,
              o = n.adaptive,
              s = void 0 === o || o,
              a = n.roundOffsets,
              c = void 0 === a || a,
              f = {
                placement: (0, l.Z)(t.placement),
                variation: (0, u.Z)(t.placement),
                popper: t.elements.popper,
                popperRect: t.rects.popper,
                gpuAcceleration: i,
                isFixed: "fixed" === t.options.strategy,
              };
            null != t.modifiersData.popperOffsets &&
              (t.styles.popper = Object.assign(
                {},
                t.styles.popper,
                d(
                  Object.assign({}, f, {
                    offsets: t.modifiersData.popperOffsets,
                    position: t.options.strategy,
                    adaptive: s,
                    roundOffsets: c,
                  })
                )
              )),
              null != t.modifiersData.arrow &&
                (t.styles.arrow = Object.assign(
                  {},
                  t.styles.arrow,
                  d(
                    Object.assign({}, f, {
                      offsets: t.modifiersData.arrow,
                      position: "absolute",
                      adaptive: !1,
                      roundOffsets: c,
                    })
                  )
                )),
              (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-placement": t.placement,
              }));
          },
          data: {},
        };
      },
      2372: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => o });
        var r = n(2057),
          i = { passive: !0 };
        const o = {
          name: "eventListeners",
          enabled: !0,
          phase: "write",
          fn: function () {},
          effect: function (e) {
            var t = e.state,
              n = e.instance,
              o = e.options,
              s = o.scroll,
              a = void 0 === s || s,
              l = o.resize,
              u = void 0 === l || l,
              c = (0, r.Z)(t.elements.popper),
              f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
            return (
              a &&
                f.forEach(function (e) {
                  e.addEventListener("scroll", n.update, i);
                }),
              u && c.addEventListener("resize", n.update, i),
              function () {
                a &&
                  f.forEach(function (e) {
                    e.removeEventListener("scroll", n.update, i);
                  }),
                  u && c.removeEventListener("resize", n.update, i);
              }
            );
          },
          data: {},
        };
      },
      4927: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => c });
        var r = n(697),
          i = n(6206),
          o = n(483),
          s = n(3161),
          a = n(6413),
          l = n(7701),
          u = n(4943);
        const c = {
          name: "flip",
          enabled: !0,
          phase: "main",
          fn: function (e) {
            var t = e.state,
              n = e.options,
              c = e.name;
            if (!t.modifiersData[c]._skip) {
              for (
                var f = n.mainAxis,
                  d = void 0 === f || f,
                  p = n.altAxis,
                  h = void 0 === p || p,
                  g = n.fallbackPlacements,
                  m = n.padding,
                  v = n.boundary,
                  y = n.rootBoundary,
                  b = n.altBoundary,
                  x = n.flipVariations,
                  w = void 0 === x || x,
                  _ = n.allowedAutoPlacements,
                  T = t.options.placement,
                  E = (0, i.Z)(T),
                  C =
                    g ||
                    (E !== T && w
                      ? (function (e) {
                          if ((0, i.Z)(e) === l.d7) return [];
                          var t = (0, r.Z)(e);
                          return [(0, o.Z)(e), t, (0, o.Z)(t)];
                        })(T)
                      : [(0, r.Z)(T)]),
                  k = [T].concat(C).reduce(function (e, n) {
                    return e.concat(
                      (0, i.Z)(n) === l.d7
                        ? (0, a.Z)(t, {
                            placement: n,
                            boundary: v,
                            rootBoundary: y,
                            padding: m,
                            flipVariations: w,
                            allowedAutoPlacements: _,
                          })
                        : n
                    );
                  }, []),
                  A = t.rects.reference,
                  S = t.rects.popper,
                  D = new Map(),
                  j = !0,
                  O = k[0],
                  N = 0;
                N < k.length;
                N++
              ) {
                var L = k[N],
                  Z = (0, i.Z)(L),
                  P = (0, u.Z)(L) === l.BL,
                  M = [l.we, l.I].indexOf(Z) >= 0,
                  q = M ? "width" : "height",
                  $ = (0, s.Z)(t, {
                    placement: L,
                    boundary: v,
                    rootBoundary: y,
                    altBoundary: b,
                    padding: m,
                  }),
                  I = M ? (P ? l.F2 : l.t$) : P ? l.I : l.we;
                A[q] > S[q] && (I = (0, r.Z)(I));
                var R = (0, r.Z)(I),
                  H = [];
                if (
                  (d && H.push($[Z] <= 0),
                  h && H.push($[I] <= 0, $[R] <= 0),
                  H.every(function (e) {
                    return e;
                  }))
                ) {
                  (O = L), (j = !1);
                  break;
                }
                D.set(L, H);
              }
              if (j)
                for (
                  var F = function (e) {
                      var t = k.find(function (t) {
                        var n = D.get(t);
                        if (n)
                          return n.slice(0, e).every(function (e) {
                            return e;
                          });
                      });
                      if (t) return (O = t), "break";
                    },
                    W = w ? 3 : 1;
                  W > 0 && "break" !== F(W);
                  W--
                );
              t.placement !== O &&
                ((t.modifiersData[c]._skip = !0),
                (t.placement = O),
                (t.reset = !0));
            }
          },
          requiresIfExists: ["offset"],
          data: { _skip: !1 },
        };
      },
      9892: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => a });
        var r = n(7701),
          i = n(3161);
        function o(e, t, n) {
          return (
            void 0 === n && (n = { x: 0, y: 0 }),
            {
              top: e.top - t.height - n.y,
              right: e.right - t.width + n.x,
              bottom: e.bottom - t.height + n.y,
              left: e.left - t.width - n.x,
            }
          );
        }
        function s(e) {
          return [r.we, r.F2, r.I, r.t$].some(function (t) {
            return e[t] >= 0;
          });
        }
        const a = {
          name: "hide",
          enabled: !0,
          phase: "main",
          requiresIfExists: ["preventOverflow"],
          fn: function (e) {
            var t = e.state,
              n = e.name,
              r = t.rects.reference,
              a = t.rects.popper,
              l = t.modifiersData.preventOverflow,
              u = (0, i.Z)(t, { elementContext: "reference" }),
              c = (0, i.Z)(t, { altBoundary: !0 }),
              f = o(u, r),
              d = o(c, a, l),
              p = s(f),
              h = s(d);
            (t.modifiersData[n] = {
              referenceClippingOffsets: f,
              popperEscapeOffsets: d,
              isReferenceHidden: p,
              hasPopperEscaped: h,
            }),
              (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-reference-hidden": p,
                "data-popper-escaped": h,
              }));
          },
        };
      },
      9309: (e, t, n) => {
        "use strict";
        n.d(t, {
          Cp: () => l.Z,
          JK: () => s.Z,
          OC: () => c.Z,
          RR: () => a.Z,
          Yj: () => f.Z,
          Zs: () => r.Z,
          cv: () => u.Z,
          o: () => o.Z,
          x7: () => i.Z,
        });
        var r = n(7824),
          i = n(6896),
          o = n(6531),
          s = n(2372),
          a = n(4927),
          l = n(9892),
          u = n(2122),
          c = n(7421),
          f = n(5219);
      },
      2122: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => o });
        var r = n(6206),
          i = n(7701);
        const o = {
          name: "offset",
          enabled: !0,
          phase: "main",
          requires: ["popperOffsets"],
          fn: function (e) {
            var t = e.state,
              n = e.options,
              o = e.name,
              s = n.offset,
              a = void 0 === s ? [0, 0] : s,
              l = i.Ct.reduce(function (e, n) {
                return (
                  (e[n] = (function (e, t, n) {
                    var o = (0, r.Z)(e),
                      s = [i.t$, i.we].indexOf(o) >= 0 ? -1 : 1,
                      a =
                        "function" == typeof n
                          ? n(Object.assign({}, t, { placement: e }))
                          : n,
                      l = a[0],
                      u = a[1];
                    return (
                      (l = l || 0),
                      (u = (u || 0) * s),
                      [i.t$, i.F2].indexOf(o) >= 0
                        ? { x: u, y: l }
                        : { x: l, y: u }
                    );
                  })(n, t.rects, a)),
                  e
                );
              }, {}),
              u = l[t.placement],
              c = u.x,
              f = u.y;
            null != t.modifiersData.popperOffsets &&
              ((t.modifiersData.popperOffsets.x += c),
              (t.modifiersData.popperOffsets.y += f)),
              (t.modifiersData[o] = l);
          },
        };
      },
      7421: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => i });
        var r = n(2581);
        const i = {
          name: "popperOffsets",
          enabled: !0,
          phase: "read",
          fn: function (e) {
            var t = e.state,
              n = e.name;
            t.modifiersData[n] = (0, r.Z)({
              reference: t.rects.reference,
              element: t.rects.popper,
              strategy: "absolute",
              placement: t.placement,
            });
          },
          data: {},
        };
      },
      5219: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => h });
        var r = n(7701),
          i = n(6206),
          o = n(1516),
          s = n(3967),
          a = n(7516),
          l = n(583),
          u = n(1955),
          c = n(3161),
          f = n(4943),
          d = n(3607),
          p = n(138);
        const h = {
          name: "preventOverflow",
          enabled: !0,
          phase: "main",
          fn: function (e) {
            var t = e.state,
              n = e.options,
              h = e.name,
              g = n.mainAxis,
              m = void 0 === g || g,
              v = n.altAxis,
              y = void 0 !== v && v,
              b = n.boundary,
              x = n.rootBoundary,
              w = n.altBoundary,
              _ = n.padding,
              T = n.tether,
              E = void 0 === T || T,
              C = n.tetherOffset,
              k = void 0 === C ? 0 : C,
              A = (0, c.Z)(t, {
                boundary: b,
                rootBoundary: x,
                padding: _,
                altBoundary: w,
              }),
              S = (0, i.Z)(t.placement),
              D = (0, f.Z)(t.placement),
              j = !D,
              O = (0, o.Z)(S),
              N = (0, s.Z)(O),
              L = t.modifiersData.popperOffsets,
              Z = t.rects.reference,
              P = t.rects.popper,
              M =
                "function" == typeof k
                  ? k(Object.assign({}, t.rects, { placement: t.placement }))
                  : k,
              q =
                "number" == typeof M
                  ? { mainAxis: M, altAxis: M }
                  : Object.assign({ mainAxis: 0, altAxis: 0 }, M),
              $ = t.modifiersData.offset
                ? t.modifiersData.offset[t.placement]
                : null,
              I = { x: 0, y: 0 };
            if (L) {
              if (m) {
                var R,
                  H = "y" === O ? r.we : r.t$,
                  F = "y" === O ? r.I : r.F2,
                  W = "y" === O ? "height" : "width",
                  B = L[O],
                  V = B + A[H],
                  z = B - A[F],
                  X = E ? -P[W] / 2 : 0,
                  U = D === r.BL ? Z[W] : P[W],
                  Y = D === r.BL ? -P[W] : -Z[W],
                  K = t.elements.arrow,
                  Q = E && K ? (0, l.Z)(K) : { width: 0, height: 0 },
                  J = t.modifiersData["arrow#persistent"]
                    ? t.modifiersData["arrow#persistent"].padding
                    : (0, d.Z)(),
                  G = J[H],
                  ee = J[F],
                  te = (0, a.u)(0, Z[W], Q[W]),
                  ne = j
                    ? Z[W] / 2 - X - te - G - q.mainAxis
                    : U - te - G - q.mainAxis,
                  re = j
                    ? -Z[W] / 2 + X + te + ee + q.mainAxis
                    : Y + te + ee + q.mainAxis,
                  ie = t.elements.arrow && (0, u.Z)(t.elements.arrow),
                  oe = ie
                    ? "y" === O
                      ? ie.clientTop || 0
                      : ie.clientLeft || 0
                    : 0,
                  se = null != (R = null == $ ? void 0 : $[O]) ? R : 0,
                  ae = B + ne - se - oe,
                  le = B + re - se,
                  ue = (0, a.u)(
                    E ? (0, p.VV)(V, ae) : V,
                    B,
                    E ? (0, p.Fp)(z, le) : z
                  );
                (L[O] = ue), (I[O] = ue - B);
              }
              if (y) {
                var ce,
                  fe = "x" === O ? r.we : r.t$,
                  de = "x" === O ? r.I : r.F2,
                  pe = L[N],
                  he = "y" === N ? "height" : "width",
                  ge = pe + A[fe],
                  me = pe - A[de],
                  ve = -1 !== [r.we, r.t$].indexOf(S),
                  ye = null != (ce = null == $ ? void 0 : $[N]) ? ce : 0,
                  be = ve ? ge : pe - Z[he] - P[he] - ye + q.altAxis,
                  xe = ve ? pe + Z[he] + P[he] - ye - q.altAxis : me,
                  we =
                    E && ve
                      ? (0, a.q)(be, pe, xe)
                      : (0, a.u)(E ? be : ge, pe, E ? xe : me);
                (L[N] = we), (I[N] = we - pe);
              }
              t.modifiersData[h] = I;
            }
          },
          requiresIfExists: ["offset"],
        };
      },
      3151: (e, t, n) => {
        "use strict";
        n.d(t, { fi: () => u });
        var r = n(9188),
          i = n(2372),
          o = n(7421),
          s = n(6531),
          a = n(7824),
          l = [i.Z, o.Z, s.Z, a.Z],
          u = (0, r.kZ)({ defaultModifiers: l });
      },
      804: (e, t, n) => {
        "use strict";
        n.d(t, { fi: () => h });
        var r = n(9188),
          i = n(2372),
          o = n(7421),
          s = n(6531),
          a = n(7824),
          l = n(2122),
          u = n(4927),
          c = n(5219),
          f = n(6896),
          d = n(9892),
          p = [i.Z, o.Z, s.Z, a.Z, l.Z, u.Z, c.Z, f.Z, d.Z],
          h = (0, r.kZ)({ defaultModifiers: p });
      },
      6413: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => a });
        var r = n(4943),
          i = n(7701),
          o = n(3161),
          s = n(6206);
        function a(e, t) {
          void 0 === t && (t = {});
          var n = t,
            a = n.placement,
            l = n.boundary,
            u = n.rootBoundary,
            c = n.padding,
            f = n.flipVariations,
            d = n.allowedAutoPlacements,
            p = void 0 === d ? i.Ct : d,
            h = (0, r.Z)(a),
            g = h
              ? f
                ? i.bw
                : i.bw.filter(function (e) {
                    return (0, r.Z)(e) === h;
                  })
              : i.mv,
            m = g.filter(function (e) {
              return p.indexOf(e) >= 0;
            });
          0 === m.length && (m = g);
          var v = m.reduce(function (t, n) {
            return (
              (t[n] = (0, o.Z)(e, {
                placement: n,
                boundary: l,
                rootBoundary: u,
                padding: c,
              })[(0, s.Z)(n)]),
              t
            );
          }, {});
          return Object.keys(v).sort(function (e, t) {
            return v[e] - v[t];
          });
        }
      },
      2581: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => a });
        var r = n(6206),
          i = n(4943),
          o = n(1516),
          s = n(7701);
        function a(e) {
          var t,
            n = e.reference,
            a = e.element,
            l = e.placement,
            u = l ? (0, r.Z)(l) : null,
            c = l ? (0, i.Z)(l) : null,
            f = n.x + n.width / 2 - a.width / 2,
            d = n.y + n.height / 2 - a.height / 2;
          switch (u) {
            case s.we:
              t = { x: f, y: n.y - a.height };
              break;
            case s.I:
              t = { x: f, y: n.y + n.height };
              break;
            case s.F2:
              t = { x: n.x + n.width, y: d };
              break;
            case s.t$:
              t = { x: n.x - a.width, y: d };
              break;
            default:
              t = { x: n.x, y: n.y };
          }
          var p = u ? (0, o.Z)(u) : null;
          if (null != p) {
            var h = "y" === p ? "height" : "width";
            switch (c) {
              case s.BL:
                t[p] = t[p] - (n[h] / 2 - a[h] / 2);
                break;
              case s.ut:
                t[p] = t[p] + (n[h] / 2 - a[h] / 2);
            }
          }
          return t;
        }
      },
      8293: (e, t, n) => {
        "use strict";
        function r(e) {
          var t;
          return function () {
            return (
              t ||
                (t = new Promise(function (n) {
                  Promise.resolve().then(function () {
                    (t = void 0), n(e());
                  });
                })),
              t
            );
          };
        }
        n.d(t, { Z: () => r });
      },
      3161: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => d });
        var r = n(1437),
          i = n(7252),
          o = n(400),
          s = n(2581),
          a = n(5626),
          l = n(7701),
          u = n(2556),
          c = n(3293),
          f = n(3706);
        function d(e, t) {
          void 0 === t && (t = {});
          var n = t,
            d = n.placement,
            p = void 0 === d ? e.placement : d,
            h = n.strategy,
            g = void 0 === h ? e.strategy : h,
            m = n.boundary,
            v = void 0 === m ? l.zV : m,
            y = n.rootBoundary,
            b = void 0 === y ? l.Pj : y,
            x = n.elementContext,
            w = void 0 === x ? l.k5 : x,
            _ = n.altBoundary,
            T = void 0 !== _ && _,
            E = n.padding,
            C = void 0 === E ? 0 : E,
            k = (0, c.Z)("number" != typeof C ? C : (0, f.Z)(C, l.mv)),
            A = w === l.k5 ? l.YP : l.k5,
            S = e.rects.popper,
            D = e.elements[T ? A : w],
            j = (0, r.Z)(
              (0, u.kK)(D)
                ? D
                : D.contextElement || (0, i.Z)(e.elements.popper),
              v,
              b,
              g
            ),
            O = (0, o.Z)(e.elements.reference),
            N = (0, s.Z)({
              reference: O,
              element: S,
              strategy: "absolute",
              placement: p,
            }),
            L = (0, a.Z)(Object.assign({}, S, N)),
            Z = w === l.k5 ? L : O,
            P = {
              top: j.top - Z.top + k.top,
              bottom: Z.bottom - j.bottom + k.bottom,
              left: j.left - Z.left + k.left,
              right: Z.right - j.right + k.right,
            },
            M = e.modifiersData.offset;
          if (w === l.k5 && M) {
            var q = M[p];
            Object.keys(P).forEach(function (e) {
              var t = [l.F2, l.I].indexOf(e) >= 0 ? 1 : -1,
                n = [l.we, l.I].indexOf(e) >= 0 ? "y" : "x";
              P[e] += q[n] * t;
            });
          }
          return P;
        }
      },
      3706: (e, t, n) => {
        "use strict";
        function r(e, t) {
          return t.reduce(function (t, n) {
            return (t[n] = e), t;
          }, {});
        }
        n.d(t, { Z: () => r });
      },
      3967: (e, t, n) => {
        "use strict";
        function r(e) {
          return "x" === e ? "y" : "x";
        }
        n.d(t, { Z: () => r });
      },
      6206: (e, t, n) => {
        "use strict";
        function r(e) {
          return e.split("-")[0];
        }
        n.d(t, { Z: () => r });
      },
      3607: (e, t, n) => {
        "use strict";
        function r() {
          return { top: 0, right: 0, bottom: 0, left: 0 };
        }
        n.d(t, { Z: () => r });
      },
      1516: (e, t, n) => {
        "use strict";
        function r(e) {
          return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
        }
        n.d(t, { Z: () => r });
      },
      697: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => i });
        var r = { left: "right", right: "left", bottom: "top", top: "bottom" };
        function i(e) {
          return e.replace(/left|right|bottom|top/g, function (e) {
            return r[e];
          });
        }
      },
      483: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => i });
        var r = { start: "end", end: "start" };
        function i(e) {
          return e.replace(/start|end/g, function (e) {
            return r[e];
          });
        }
      },
      4943: (e, t, n) => {
        "use strict";
        function r(e) {
          return e.split("-")[1];
        }
        n.d(t, { Z: () => r });
      },
      138: (e, t, n) => {
        "use strict";
        n.d(t, { Fp: () => r, NM: () => o, VV: () => i });
        var r = Math.max,
          i = Math.min,
          o = Math.round;
      },
      3: (e, t, n) => {
        "use strict";
        function r(e) {
          var t = e.reduce(function (e, t) {
            var n = e[t.name];
            return (
              (e[t.name] = n
                ? Object.assign({}, n, t, {
                    options: Object.assign({}, n.options, t.options),
                    data: Object.assign({}, n.data, t.data),
                  })
                : t),
              e
            );
          }, {});
          return Object.keys(t).map(function (e) {
            return t[e];
          });
        }
        n.d(t, { Z: () => r });
      },
      3293: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => i });
        var r = n(3607);
        function i(e) {
          return Object.assign({}, (0, r.Z)(), e);
        }
      },
      380: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => o });
        var r = n(7701);
        function i(e) {
          var t = new Map(),
            n = new Set(),
            r = [];
          function i(e) {
            n.add(e.name),
              []
                .concat(e.requires || [], e.requiresIfExists || [])
                .forEach(function (e) {
                  if (!n.has(e)) {
                    var r = t.get(e);
                    r && i(r);
                  }
                }),
              r.push(e);
          }
          return (
            e.forEach(function (e) {
              t.set(e.name, e);
            }),
            e.forEach(function (e) {
              n.has(e.name) || i(e);
            }),
            r
          );
        }
        function o(e) {
          var t = i(e);
          return r.xs.reduce(function (e, n) {
            return e.concat(
              t.filter(function (e) {
                return e.phase === n;
              })
            );
          }, []);
        }
      },
      5626: (e, t, n) => {
        "use strict";
        function r(e) {
          return Object.assign({}, e, {
            left: e.x,
            top: e.y,
            right: e.x + e.width,
            bottom: e.y + e.height,
          });
        }
        n.d(t, { Z: () => r });
      },
      5918: (e, t, n) => {
        "use strict";
        function r() {
          var e = navigator.userAgentData;
          return null != e && e.brands
            ? e.brands
                .map(function (e) {
                  return e.brand + "/" + e.version;
                })
                .join(" ")
            : navigator.userAgent;
        }
        n.d(t, { Z: () => r });
      },
      7516: (e, t, n) => {
        "use strict";
        n.d(t, { q: () => o, u: () => i });
        var r = n(138);
        function i(e, t, n) {
          return (0, r.Fp)(e, (0, r.VV)(t, n));
        }
        function o(e, t, n) {
          var r = i(e, t, n);
          return r > n ? n : r;
        }
      },
      5695: function (e, t, n) {
        e.exports = (function (e, t, n, r) {
          "use strict";
          const i = (e) =>
              e && "object" == typeof e && "default" in e ? e : { default: e },
            o = i(e),
            s = i(n),
            a = i(r);
          class l extends a.default {
            constructor(e, n) {
              super(),
                (e = t.getElement(e)) &&
                  ((this._element = e),
                  (this._config = this._getConfig(n)),
                  o.default.set(
                    this._element,
                    this.constructor.DATA_KEY,
                    this
                  ));
            }
            dispose() {
              o.default.remove(this._element, this.constructor.DATA_KEY),
                s.default.off(this._element, this.constructor.EVENT_KEY);
              for (const e of Object.getOwnPropertyNames(this)) this[e] = null;
            }
            _queueCallback(e, n, r = !0) {
              t.executeAfterTransition(e, n, r);
            }
            _getConfig(e) {
              return (
                (e = this._mergeConfigObj(e, this._element)),
                (e = this._configAfterMerge(e)),
                this._typeCheckConfig(e),
                e
              );
            }
            static getInstance(e) {
              return o.default.get(t.getElement(e), this.DATA_KEY);
            }
            static getOrCreateInstance(e, t = {}) {
              return (
                this.getInstance(e) ||
                new this(e, "object" == typeof t ? t : null)
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
            static eventName(e) {
              return `${e}${this.EVENT_KEY}`;
            }
          }
          return l;
        })(n(493), n(4072), n(9286), n(4705));
      },
      8048: function (e, t, n) {
        e.exports = (function (e, t, n, r, i, o) {
          "use strict";
          const s = (e) =>
              e && "object" == typeof e && "default" in e ? e : { default: e },
            a = s(t),
            l = s(n),
            u = s(r),
            c = s(i),
            f = s(o),
            d = ".bs.carousel",
            p = ".data-api",
            h = "next",
            g = "prev",
            m = "left",
            v = "right",
            y = `slide${d}`,
            b = `slid${d}`,
            x = `keydown${d}`,
            w = `mouseenter${d}`,
            _ = `mouseleave${d}`,
            T = `dragstart${d}`,
            E = `load${d}${p}`,
            C = `click${d}${p}`,
            k = "carousel",
            A = "active",
            S = ".active",
            D = ".carousel-item",
            j = S + D,
            O = { ArrowLeft: v, ArrowRight: m },
            N = {
              interval: 5e3,
              keyboard: !0,
              pause: "hover",
              ride: !1,
              touch: !0,
              wrap: !0,
            },
            L = {
              interval: "(number|boolean)",
              keyboard: "boolean",
              pause: "(string|boolean)",
              ride: "(boolean|string)",
              touch: "boolean",
              wrap: "boolean",
            };
          class Z extends f.default {
            constructor(e, t) {
              super(e, t),
                (this._interval = null),
                (this._activeElement = null),
                (this._isSliding = !1),
                (this.touchTimeout = null),
                (this._swipeHelper = null),
                (this._indicatorsElement = u.default.findOne(
                  ".carousel-indicators",
                  this._element
                )),
                this._addEventListeners(),
                this._config.ride === k && this.cycle();
            }
            static get Default() {
              return N;
            }
            static get DefaultType() {
              return L;
            }
            static get NAME() {
              return "carousel";
            }
            next() {
              this._slide(h);
            }
            nextWhenVisible() {
              !document.hidden && e.isVisible(this._element) && this.next();
            }
            prev() {
              this._slide(g);
            }
            pause() {
              this._isSliding && e.triggerTransitionEnd(this._element),
                this._clearInterval();
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
                  ? a.default.one(this._element, b, () => this.cycle())
                  : this.cycle());
            }
            to(e) {
              const t = this._getItems();
              if (e > t.length - 1 || e < 0) return;
              if (this._isSliding)
                return void a.default.one(this._element, b, () => this.to(e));
              const n = this._getItemIndex(this._getActive());
              if (n === e) return;
              const r = e > n ? h : g;
              this._slide(r, t[e]);
            }
            dispose() {
              this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
            }
            _configAfterMerge(e) {
              return (e.defaultInterval = e.interval), e;
            }
            _addEventListeners() {
              this._config.keyboard &&
                a.default.on(this._element, x, (e) => this._keydown(e)),
                "hover" === this._config.pause &&
                  (a.default.on(this._element, w, () => this.pause()),
                  a.default.on(this._element, _, () =>
                    this._maybeEnableCycle()
                  )),
                this._config.touch &&
                  c.default.isSupported() &&
                  this._addTouchEventListeners();
            }
            _addTouchEventListeners() {
              for (const e of u.default.find(
                ".carousel-item img",
                this._element
              ))
                a.default.on(e, T, (e) => e.preventDefault());
              const e = {
                leftCallback: () => this._slide(this._directionToOrder(m)),
                rightCallback: () => this._slide(this._directionToOrder(v)),
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
              this._swipeHelper = new c.default(this._element, e);
            }
            _keydown(e) {
              if (/input|textarea/i.test(e.target.tagName)) return;
              const t = O[e.key];
              t && (e.preventDefault(), this._slide(this._directionToOrder(t)));
            }
            _getItemIndex(e) {
              return this._getItems().indexOf(e);
            }
            _setActiveIndicatorElement(e) {
              if (!this._indicatorsElement) return;
              const t = u.default.findOne(S, this._indicatorsElement);
              t.classList.remove(A), t.removeAttribute("aria-current");
              const n = u.default.findOne(
                `[data-bs-slide-to="${e}"]`,
                this._indicatorsElement
              );
              n && (n.classList.add(A), n.setAttribute("aria-current", "true"));
            }
            _updateInterval() {
              const e = this._activeElement || this._getActive();
              if (!e) return;
              const t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
              this._config.interval = t || this._config.defaultInterval;
            }
            _slide(t, n = null) {
              if (this._isSliding) return;
              const r = this._getActive(),
                i = t === h,
                o =
                  n ||
                  e.getNextActiveElement(
                    this._getItems(),
                    r,
                    i,
                    this._config.wrap
                  );
              if (o === r) return;
              const s = this._getItemIndex(o),
                l = (e) =>
                  a.default.trigger(this._element, e, {
                    relatedTarget: o,
                    direction: this._orderToDirection(t),
                    from: this._getItemIndex(r),
                    to: s,
                  });
              if (l(y).defaultPrevented) return;
              if (!r || !o) return;
              const u = Boolean(this._interval);
              this.pause(),
                (this._isSliding = !0),
                this._setActiveIndicatorElement(s),
                (this._activeElement = o);
              const c = i ? "carousel-item-start" : "carousel-item-end",
                f = i ? "carousel-item-next" : "carousel-item-prev";
              o.classList.add(f),
                e.reflow(o),
                r.classList.add(c),
                o.classList.add(c);
              this._queueCallback(
                () => {
                  o.classList.remove(c, f),
                    o.classList.add(A),
                    r.classList.remove(A, f, c),
                    (this._isSliding = !1),
                    l(b);
                },
                r,
                this._isAnimated()
              ),
                u && this.cycle();
            }
            _isAnimated() {
              return this._element.classList.contains("slide");
            }
            _getActive() {
              return u.default.findOne(j, this._element);
            }
            _getItems() {
              return u.default.find(D, this._element);
            }
            _clearInterval() {
              this._interval &&
                (clearInterval(this._interval), (this._interval = null));
            }
            _directionToOrder(t) {
              return e.isRTL() ? (t === m ? g : h) : t === m ? h : g;
            }
            _orderToDirection(t) {
              return e.isRTL() ? (t === g ? m : v) : t === g ? v : m;
            }
            static jQueryInterface(e) {
              return this.each(function () {
                const t = Z.getOrCreateInstance(this, e);
                if ("number" != typeof e) {
                  if ("string" == typeof e) {
                    if (
                      void 0 === t[e] ||
                      e.startsWith("_") ||
                      "constructor" === e
                    )
                      throw new TypeError(`No method named "${e}"`);
                    t[e]();
                  }
                } else t.to(e);
              });
            }
          }
          return (
            a.default.on(
              document,
              C,
              "[data-bs-slide], [data-bs-slide-to]",
              function (t) {
                const n = e.getElementFromSelector(this);
                if (!n || !n.classList.contains(k)) return;
                t.preventDefault();
                const r = Z.getOrCreateInstance(n),
                  i = this.getAttribute("data-bs-slide-to");
                return i
                  ? (r.to(i), void r._maybeEnableCycle())
                  : "next" === l.default.getDataAttribute(this, "slide")
                  ? (r.next(), void r._maybeEnableCycle())
                  : (r.prev(), void r._maybeEnableCycle());
              }
            ),
            a.default.on(window, E, () => {
              const e = u.default.find('[data-bs-ride="carousel"]');
              for (const t of e) Z.getOrCreateInstance(t);
            }),
            e.defineJQueryPlugin(Z),
            Z
          );
        })(n(4072), n(9286), n(3175), n(8737), n(2814), n(5695));
      },
      493: function (e) {
        e.exports = (function () {
          "use strict";
          const e = new Map();
          return {
            set(t, n, r) {
              e.has(t) || e.set(t, new Map());
              const i = e.get(t);
              i.has(n) || 0 === i.size
                ? i.set(n, r)
                : console.error(
                    `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                      Array.from(i.keys())[0]
                    }.`
                  );
            },
            get: (t, n) => (e.has(t) && e.get(t).get(n)) || null,
            remove(t, n) {
              if (!e.has(t)) return;
              const r = e.get(t);
              r.delete(n), 0 === r.size && e.delete(t);
            },
          };
        })();
      },
      9286: function (e, t, n) {
        e.exports = (function (e) {
          "use strict";
          const t = /[^.]*(?=\..*)\.|.*/,
            n = /\..*/,
            r = /::\d+$/,
            i = {};
          let o = 1;
          const s = { mouseenter: "mouseover", mouseleave: "mouseout" },
            a = new Set([
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
          function l(e, t) {
            return (t && `${t}::${o++}`) || e.uidEvent || o++;
          }
          function u(e) {
            const t = l(e);
            return (e.uidEvent = t), (i[t] = i[t] || {}), i[t];
          }
          function c(e, t, n = null) {
            return Object.values(e).find(
              (e) => e.callable === t && e.delegationSelector === n
            );
          }
          function f(e, t, n) {
            const r = "string" == typeof t,
              i = r ? n : t || n;
            let o = g(e);
            return a.has(o) || (o = e), [r, i, o];
          }
          function d(e, n, r, i, o) {
            if ("string" != typeof n || !e) return;
            let [a, d, p] = f(n, r, i);
            if (n in s) {
              const e = (e) =>
                function (t) {
                  if (
                    !t.relatedTarget ||
                    (t.relatedTarget !== t.delegateTarget &&
                      !t.delegateTarget.contains(t.relatedTarget))
                  )
                    return e.call(this, t);
                };
              d = e(d);
            }
            const h = u(e),
              g = h[p] || (h[p] = {}),
              y = c(g, d, a ? r : null);
            if (y) return void (y.oneOff = y.oneOff && o);
            const b = l(d, n.replace(t, "")),
              x = a
                ? (function (e, t, n) {
                    return function r(i) {
                      const o = e.querySelectorAll(t);
                      for (
                        let { target: s } = i;
                        s && s !== this;
                        s = s.parentNode
                      )
                        for (const a of o)
                          if (a === s)
                            return (
                              v(i, { delegateTarget: s }),
                              r.oneOff && m.off(e, i.type, t, n),
                              n.apply(s, [i])
                            );
                    };
                  })(e, r, d)
                : (function (e, t) {
                    return function n(r) {
                      return (
                        v(r, { delegateTarget: e }),
                        n.oneOff && m.off(e, r.type, t),
                        t.apply(e, [r])
                      );
                    };
                  })(e, d);
            (x.delegationSelector = a ? r : null),
              (x.callable = d),
              (x.oneOff = o),
              (x.uidEvent = b),
              (g[b] = x),
              e.addEventListener(p, x, a);
          }
          function p(e, t, n, r, i) {
            const o = c(t[n], r, i);
            o &&
              (e.removeEventListener(n, o, Boolean(i)),
              delete t[n][o.uidEvent]);
          }
          function h(e, t, n, r) {
            const i = t[n] || {};
            for (const o of Object.keys(i))
              if (o.includes(r)) {
                const r = i[o];
                p(e, t, n, r.callable, r.delegationSelector);
              }
          }
          function g(e) {
            return (e = e.replace(n, "")), s[e] || e;
          }
          const m = {
            on(e, t, n, r) {
              d(e, t, n, r, !1);
            },
            one(e, t, n, r) {
              d(e, t, n, r, !0);
            },
            off(e, t, n, i) {
              if ("string" != typeof t || !e) return;
              const [o, s, a] = f(t, n, i),
                l = a !== t,
                c = u(e),
                d = c[a] || {},
                g = t.startsWith(".");
              if (void 0 === s) {
                if (g) for (const n of Object.keys(c)) h(e, c, n, t.slice(1));
                for (const n of Object.keys(d)) {
                  const i = n.replace(r, "");
                  if (!l || t.includes(i)) {
                    const t = d[n];
                    p(e, c, a, t.callable, t.delegationSelector);
                  }
                }
              } else {
                if (!Object.keys(d).length) return;
                p(e, c, a, s, o ? n : null);
              }
            },
            trigger(t, n, r) {
              if ("string" != typeof n || !t) return null;
              const i = e.getjQuery();
              let o = null,
                s = !0,
                a = !0,
                l = !1;
              n !== g(n) &&
                i &&
                ((o = i.Event(n, r)),
                i(t).trigger(o),
                (s = !o.isPropagationStopped()),
                (a = !o.isImmediatePropagationStopped()),
                (l = o.isDefaultPrevented()));
              let u = new Event(n, { bubbles: s, cancelable: !0 });
              return (
                (u = v(u, r)),
                l && u.preventDefault(),
                a && t.dispatchEvent(u),
                u.defaultPrevented && o && o.preventDefault(),
                u
              );
            },
          };
          function v(e, t) {
            for (const [n, r] of Object.entries(t || {}))
              try {
                e[n] = r;
              } catch (t) {
                Object.defineProperty(e, n, { configurable: !0, get: () => r });
              }
            return e;
          }
          return m;
        })(n(4072));
      },
      3175: function (e) {
        e.exports = (function () {
          "use strict";
          function e(e) {
            if ("true" === e) return !0;
            if ("false" === e) return !1;
            if (e === Number(e).toString()) return Number(e);
            if ("" === e || "null" === e) return null;
            if ("string" != typeof e) return e;
            try {
              return JSON.parse(decodeURIComponent(e));
            } catch (t) {
              return e;
            }
          }
          function t(e) {
            return e.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
          }
          return {
            setDataAttribute(e, n, r) {
              e.setAttribute(`data-bs-${t(n)}`, r);
            },
            removeDataAttribute(e, n) {
              e.removeAttribute(`data-bs-${t(n)}`);
            },
            getDataAttributes(t) {
              if (!t) return {};
              const n = {},
                r = Object.keys(t.dataset).filter(
                  (e) => e.startsWith("bs") && !e.startsWith("bsConfig")
                );
              for (const i of r) {
                let r = i.replace(/^bs/, "");
                (r = r.charAt(0).toLowerCase() + r.slice(1, r.length)),
                  (n[r] = e(t.dataset[i]));
              }
              return n;
            },
            getDataAttribute: (n, r) => e(n.getAttribute(`data-bs-${t(r)}`)),
          };
        })();
      },
      8737: function (e, t, n) {
        e.exports = (function (e) {
          "use strict";
          return {
            find: (e, t = document.documentElement) =>
              [].concat(...Element.prototype.querySelectorAll.call(t, e)),
            findOne: (e, t = document.documentElement) =>
              Element.prototype.querySelector.call(t, e),
            children: (e, t) =>
              [].concat(...e.children).filter((e) => e.matches(t)),
            parents(e, t) {
              const n = [];
              let r = e.parentNode.closest(t);
              for (; r; ) n.push(r), (r = r.parentNode.closest(t));
              return n;
            },
            prev(e, t) {
              let n = e.previousElementSibling;
              for (; n; ) {
                if (n.matches(t)) return [n];
                n = n.previousElementSibling;
              }
              return [];
            },
            next(e, t) {
              let n = e.nextElementSibling;
              for (; n; ) {
                if (n.matches(t)) return [n];
                n = n.nextElementSibling;
              }
              return [];
            },
            focusableChildren(t) {
              const n = [
                "a",
                "button",
                "input",
                "textarea",
                "select",
                "details",
                "[tabindex]",
                '[contenteditable="true"]',
              ]
                .map((e) => `${e}:not([tabindex^="-"])`)
                .join(",");
              return this.find(n, t).filter(
                (t) => !e.isDisabled(t) && e.isVisible(t)
              );
            },
          };
        })(n(4072));
      },
      9872: function (e, t, n) {
        e.exports = (function (e, t, n, r, i, o) {
          "use strict";
          const s = (e) =>
            e && "object" == typeof e && "default" in e ? e : { default: e };
          function a(e) {
            if (e && e.__esModule) return e;
            const t = Object.create(null, {
              [Symbol.toStringTag]: { value: "Module" },
            });
            if (e)
              for (const n in e)
                if ("default" !== n) {
                  const r = Object.getOwnPropertyDescriptor(e, n);
                  Object.defineProperty(
                    t,
                    n,
                    r.get ? r : { enumerable: !0, get: () => e[n] }
                  );
                }
            return (t.default = e), Object.freeze(t);
          }
          const l = a(e),
            u = s(n),
            c = s(r),
            f = s(i),
            d = s(o),
            p = "dropdown",
            h = ".bs.dropdown",
            g = ".data-api",
            m = "ArrowUp",
            v = "ArrowDown",
            y = `hide${h}`,
            b = `hidden${h}`,
            x = `show${h}`,
            w = `shown${h}`,
            _ = `click${h}${g}`,
            T = `keydown${h}${g}`,
            E = `keyup${h}${g}`,
            C = "show",
            k = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
            A = `${k}.${C}`,
            S = ".dropdown-menu",
            D = t.isRTL() ? "top-end" : "top-start",
            j = t.isRTL() ? "top-start" : "top-end",
            O = t.isRTL() ? "bottom-end" : "bottom-start",
            N = t.isRTL() ? "bottom-start" : "bottom-end",
            L = t.isRTL() ? "left-start" : "right-start",
            Z = t.isRTL() ? "right-start" : "left-start",
            P = {
              autoClose: !0,
              boundary: "clippingParents",
              display: "dynamic",
              offset: [0, 2],
              popperConfig: null,
              reference: "toggle",
            },
            M = {
              autoClose: "(boolean|string)",
              boundary: "(string|element)",
              display: "string",
              offset: "(array|string|function)",
              popperConfig: "(null|object|function)",
              reference: "(string|element|object)",
            };
          class q extends d.default {
            constructor(e, t) {
              super(e, t),
                (this._popper = null),
                (this._parent = this._element.parentNode),
                (this._menu =
                  f.default.next(this._element, S)[0] ||
                  f.default.prev(this._element, S)[0] ||
                  f.default.findOne(S, this._parent)),
                (this._inNavbar = this._detectNavbar());
            }
            static get Default() {
              return P;
            }
            static get DefaultType() {
              return M;
            }
            static get NAME() {
              return p;
            }
            toggle() {
              return this._isShown() ? this.hide() : this.show();
            }
            show() {
              if (t.isDisabled(this._element) || this._isShown()) return;
              const e = { relatedTarget: this._element };
              if (!u.default.trigger(this._element, x, e).defaultPrevented) {
                if (
                  (this._createPopper(),
                  "ontouchstart" in document.documentElement &&
                    !this._parent.closest(".navbar-nav"))
                )
                  for (const e of [].concat(...document.body.children))
                    u.default.on(e, "mouseover", t.noop);
                this._element.focus(),
                  this._element.setAttribute("aria-expanded", !0),
                  this._menu.classList.add(C),
                  this._element.classList.add(C),
                  u.default.trigger(this._element, w, e);
              }
            }
            hide() {
              if (t.isDisabled(this._element) || !this._isShown()) return;
              const e = { relatedTarget: this._element };
              this._completeHide(e);
            }
            dispose() {
              this._popper && this._popper.destroy(), super.dispose();
            }
            update() {
              (this._inNavbar = this._detectNavbar()),
                this._popper && this._popper.update();
            }
            _completeHide(e) {
              if (!u.default.trigger(this._element, y, e).defaultPrevented) {
                if ("ontouchstart" in document.documentElement)
                  for (const e of [].concat(...document.body.children))
                    u.default.off(e, "mouseover", t.noop);
                this._popper && this._popper.destroy(),
                  this._menu.classList.remove(C),
                  this._element.classList.remove(C),
                  this._element.setAttribute("aria-expanded", "false"),
                  c.default.removeDataAttribute(this._menu, "popper"),
                  u.default.trigger(this._element, b, e);
              }
            }
            _getConfig(e) {
              if (
                "object" == typeof (e = super._getConfig(e)).reference &&
                !t.isElement(e.reference) &&
                "function" != typeof e.reference.getBoundingClientRect
              )
                throw new TypeError(
                  `${p.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
                );
              return e;
            }
            _createPopper() {
              if (void 0 === l)
                throw new TypeError(
                  "Bootstrap's dropdowns require Popper (https://popper.js.org)"
                );
              let e = this._element;
              "parent" === this._config.reference
                ? (e = this._parent)
                : t.isElement(this._config.reference)
                ? (e = t.getElement(this._config.reference))
                : "object" == typeof this._config.reference &&
                  (e = this._config.reference);
              const n = this._getPopperConfig();
              this._popper = l.createPopper(e, this._menu, n);
            }
            _isShown() {
              return this._menu.classList.contains(C);
            }
            _getPlacement() {
              const e = this._parent;
              if (e.classList.contains("dropend")) return L;
              if (e.classList.contains("dropstart")) return Z;
              if (e.classList.contains("dropup-center")) return "top";
              if (e.classList.contains("dropdown-center")) return "bottom";
              const t =
                "end" ===
                getComputedStyle(this._menu)
                  .getPropertyValue("--bs-position")
                  .trim();
              return e.classList.contains("dropup") ? (t ? j : D) : t ? N : O;
            }
            _detectNavbar() {
              return null !== this._element.closest(".navbar");
            }
            _getOffset() {
              const { offset: e } = this._config;
              return "string" == typeof e
                ? e.split(",").map((e) => Number.parseInt(e, 10))
                : "function" == typeof e
                ? (t) => e(t, this._element)
                : e;
            }
            _getPopperConfig() {
              const e = {
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
                  (c.default.setDataAttribute(this._menu, "popper", "static"),
                  (e.modifiers = [{ name: "applyStyles", enabled: !1 }])),
                {
                  ...e,
                  ...("function" == typeof this._config.popperConfig
                    ? this._config.popperConfig(e)
                    : this._config.popperConfig),
                }
              );
            }
            _selectMenuItem({ key: e, target: n }) {
              const r = f.default
                .find(
                  ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
                  this._menu
                )
                .filter((e) => t.isVisible(e));
              r.length &&
                t.getNextActiveElement(r, n, e === v, !r.includes(n)).focus();
            }
            static jQueryInterface(e) {
              return this.each(function () {
                const t = q.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                  if (void 0 === t[e])
                    throw new TypeError(`No method named "${e}"`);
                  t[e]();
                }
              });
            }
            static clearMenus(e) {
              if (2 === e.button || ("keyup" === e.type && "Tab" !== e.key))
                return;
              const t = f.default.find(A);
              for (const n of t) {
                const t = q.getInstance(n);
                if (!t || !1 === t._config.autoClose) continue;
                const r = e.composedPath(),
                  i = r.includes(t._menu);
                if (
                  r.includes(t._element) ||
                  ("inside" === t._config.autoClose && !i) ||
                  ("outside" === t._config.autoClose && i)
                )
                  continue;
                if (
                  t._menu.contains(e.target) &&
                  (("keyup" === e.type && "Tab" === e.key) ||
                    /input|select|option|textarea|form/i.test(e.target.tagName))
                )
                  continue;
                const o = { relatedTarget: t._element };
                "click" === e.type && (o.clickEvent = e), t._completeHide(o);
              }
            }
            static dataApiKeydownHandler(e) {
              const t = /input|textarea/i.test(e.target.tagName),
                n = "Escape" === e.key,
                r = [m, v].includes(e.key);
              if (!r && !n) return;
              if (t && !n) return;
              e.preventDefault();
              const i = this.matches(k)
                  ? this
                  : f.default.prev(this, k)[0] ||
                    f.default.next(this, k)[0] ||
                    f.default.findOne(k, e.delegateTarget.parentNode),
                o = q.getOrCreateInstance(i);
              if (r)
                return e.stopPropagation(), o.show(), void o._selectMenuItem(e);
              o._isShown() && (e.stopPropagation(), o.hide(), i.focus());
            }
          }
          return (
            u.default.on(document, T, k, q.dataApiKeydownHandler),
            u.default.on(document, T, S, q.dataApiKeydownHandler),
            u.default.on(document, _, q.clearMenus),
            u.default.on(document, E, q.clearMenus),
            u.default.on(document, _, k, function (e) {
              e.preventDefault(), q.getOrCreateInstance(this).toggle();
            }),
            t.defineJQueryPlugin(q),
            q
          );
        })(n(2861), n(4072), n(9286), n(3175), n(8737), n(5695));
      },
      7424: function (e, t, n) {
        e.exports = (function (e, t, n, r, i, o, s, a) {
          "use strict";
          const l = (e) =>
              e && "object" == typeof e && "default" in e ? e : { default: e },
            u = l(t),
            c = l(n),
            f = l(r),
            d = l(i),
            p = l(o),
            h = l(s),
            g = ".bs.modal",
            m = `hide${g}`,
            v = `hidePrevented${g}`,
            y = `hidden${g}`,
            b = `show${g}`,
            x = `shown${g}`,
            w = `resize${g}`,
            _ = `click.dismiss${g}`,
            T = `mousedown.dismiss${g}`,
            E = `keydown.dismiss${g}`,
            C = `click${g}.data-api`,
            k = "modal-open",
            A = "show",
            S = "modal-static",
            D = { backdrop: !0, focus: !0, keyboard: !0 },
            j = {
              backdrop: "(boolean|string)",
              focus: "boolean",
              keyboard: "boolean",
            };
          class O extends d.default {
            constructor(e, t) {
              super(e, t),
                (this._dialog = c.default.findOne(
                  ".modal-dialog",
                  this._element
                )),
                (this._backdrop = this._initializeBackDrop()),
                (this._focustrap = this._initializeFocusTrap()),
                (this._isShown = !1),
                (this._isTransitioning = !1),
                (this._scrollBar = new f.default()),
                this._addEventListeners();
            }
            static get Default() {
              return D;
            }
            static get DefaultType() {
              return j;
            }
            static get NAME() {
              return "modal";
            }
            toggle(e) {
              return this._isShown ? this.hide() : this.show(e);
            }
            show(e) {
              this._isShown ||
                this._isTransitioning ||
                u.default.trigger(this._element, b, { relatedTarget: e })
                  .defaultPrevented ||
                ((this._isShown = !0),
                (this._isTransitioning = !0),
                this._scrollBar.hide(),
                document.body.classList.add(k),
                this._adjustDialog(),
                this._backdrop.show(() => this._showElement(e)));
            }
            hide() {
              this._isShown &&
                !this._isTransitioning &&
                (u.default.trigger(this._element, m).defaultPrevented ||
                  ((this._isShown = !1),
                  (this._isTransitioning = !0),
                  this._focustrap.deactivate(),
                  this._element.classList.remove(A),
                  this._queueCallback(
                    () => this._hideModal(),
                    this._element,
                    this._isAnimated()
                  )));
            }
            dispose() {
              for (const e of [window, this._dialog]) u.default.off(e, g);
              this._backdrop.dispose(),
                this._focustrap.deactivate(),
                super.dispose();
            }
            handleUpdate() {
              this._adjustDialog();
            }
            _initializeBackDrop() {
              return new p.default({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated(),
              });
            }
            _initializeFocusTrap() {
              return new h.default({ trapElement: this._element });
            }
            _showElement(t) {
              document.body.contains(this._element) ||
                document.body.append(this._element),
                (this._element.style.display = "block"),
                this._element.removeAttribute("aria-hidden"),
                this._element.setAttribute("aria-modal", !0),
                this._element.setAttribute("role", "dialog"),
                (this._element.scrollTop = 0);
              const n = c.default.findOne(".modal-body", this._dialog);
              n && (n.scrollTop = 0),
                e.reflow(this._element),
                this._element.classList.add(A);
              this._queueCallback(
                () => {
                  this._config.focus && this._focustrap.activate(),
                    (this._isTransitioning = !1),
                    u.default.trigger(this._element, x, { relatedTarget: t });
                },
                this._dialog,
                this._isAnimated()
              );
            }
            _addEventListeners() {
              u.default.on(this._element, E, (e) => {
                if ("Escape" === e.key)
                  return this._config.keyboard
                    ? (e.preventDefault(), void this.hide())
                    : void this._triggerBackdropTransition();
              }),
                u.default.on(window, w, () => {
                  this._isShown &&
                    !this._isTransitioning &&
                    this._adjustDialog();
                }),
                u.default.on(this._element, T, (e) => {
                  u.default.one(this._element, _, (t) => {
                    this._element === e.target &&
                      this._element === t.target &&
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
                  document.body.classList.remove(k),
                    this._resetAdjustments(),
                    this._scrollBar.reset(),
                    u.default.trigger(this._element, y);
                });
            }
            _isAnimated() {
              return this._element.classList.contains("fade");
            }
            _triggerBackdropTransition() {
              if (u.default.trigger(this._element, v).defaultPrevented) return;
              const e =
                  this._element.scrollHeight >
                  document.documentElement.clientHeight,
                t = this._element.style.overflowY;
              "hidden" === t ||
                this._element.classList.contains(S) ||
                (e || (this._element.style.overflowY = "hidden"),
                this._element.classList.add(S),
                this._queueCallback(() => {
                  this._element.classList.remove(S),
                    this._queueCallback(() => {
                      this._element.style.overflowY = t;
                    }, this._dialog);
                }, this._dialog),
                this._element.focus());
            }
            _adjustDialog() {
              const t =
                  this._element.scrollHeight >
                  document.documentElement.clientHeight,
                n = this._scrollBar.getWidth(),
                r = n > 0;
              if (r && !t) {
                const t = e.isRTL() ? "paddingLeft" : "paddingRight";
                this._element.style[t] = `${n}px`;
              }
              if (!r && t) {
                const t = e.isRTL() ? "paddingRight" : "paddingLeft";
                this._element.style[t] = `${n}px`;
              }
            }
            _resetAdjustments() {
              (this._element.style.paddingLeft = ""),
                (this._element.style.paddingRight = "");
            }
            static jQueryInterface(e, t) {
              return this.each(function () {
                const n = O.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                  if (void 0 === n[e])
                    throw new TypeError(`No method named "${e}"`);
                  n[e](t);
                }
              });
            }
          }
          return (
            u.default.on(document, C, '[data-bs-toggle="modal"]', function (t) {
              const n = e.getElementFromSelector(this);
              ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
                u.default.one(n, b, (t) => {
                  t.defaultPrevented ||
                    u.default.one(n, y, () => {
                      e.isVisible(this) && this.focus();
                    });
                });
              const r = c.default.findOne(".modal.show");
              r && O.getInstance(r).hide(),
                O.getOrCreateInstance(n).toggle(this);
            }),
            a.enableDismissTrigger(O),
            e.defineJQueryPlugin(O),
            O
          );
        })(
          n(4072),
          n(9286),
          n(8737),
          n(1810),
          n(5695),
          n(1358),
          n(744),
          n(1127)
        );
      },
      6169: function (e, t, n) {
        e.exports = (function (e, t, n, r, i, o, s, a) {
          "use strict";
          const l = (e) =>
              e && "object" == typeof e && "default" in e ? e : { default: e },
            u = l(t),
            c = l(n),
            f = l(r),
            d = l(i),
            p = l(o),
            h = l(s),
            g = ".bs.offcanvas",
            m = ".data-api",
            v = `load${g}${m}`,
            y = "show",
            b = "showing",
            x = "hiding",
            w = ".offcanvas.show",
            _ = `show${g}`,
            T = `shown${g}`,
            E = `hide${g}`,
            C = `hidePrevented${g}`,
            k = `hidden${g}`,
            A = `resize${g}`,
            S = `click${g}${m}`,
            D = `keydown.dismiss${g}`,
            j = { backdrop: !0, keyboard: !0, scroll: !1 },
            O = {
              backdrop: "(boolean|string)",
              keyboard: "boolean",
              scroll: "boolean",
            };
          class N extends f.default {
            constructor(e, t) {
              super(e, t),
                (this._isShown = !1),
                (this._backdrop = this._initializeBackDrop()),
                (this._focustrap = this._initializeFocusTrap()),
                this._addEventListeners();
            }
            static get Default() {
              return j;
            }
            static get DefaultType() {
              return O;
            }
            static get NAME() {
              return "offcanvas";
            }
            toggle(e) {
              return this._isShown ? this.hide() : this.show(e);
            }
            show(e) {
              if (this._isShown) return;
              if (
                c.default.trigger(this._element, _, { relatedTarget: e })
                  .defaultPrevented
              )
                return;
              (this._isShown = !0),
                this._backdrop.show(),
                this._config.scroll || new u.default().hide(),
                this._element.setAttribute("aria-modal", !0),
                this._element.setAttribute("role", "dialog"),
                this._element.classList.add(b);
              this._queueCallback(
                () => {
                  (this._config.scroll && !this._config.backdrop) ||
                    this._focustrap.activate(),
                    this._element.classList.add(y),
                    this._element.classList.remove(b),
                    c.default.trigger(this._element, T, { relatedTarget: e });
                },
                this._element,
                !0
              );
            }
            hide() {
              if (!this._isShown) return;
              if (c.default.trigger(this._element, E).defaultPrevented) return;
              this._focustrap.deactivate(),
                this._element.blur(),
                (this._isShown = !1),
                this._element.classList.add(x),
                this._backdrop.hide();
              this._queueCallback(
                () => {
                  this._element.classList.remove(y, x),
                    this._element.removeAttribute("aria-modal"),
                    this._element.removeAttribute("role"),
                    this._config.scroll || new u.default().reset(),
                    c.default.trigger(this._element, k);
                },
                this._element,
                !0
              );
            }
            dispose() {
              this._backdrop.dispose(),
                this._focustrap.deactivate(),
                super.dispose();
            }
            _initializeBackDrop() {
              const e = Boolean(this._config.backdrop);
              return new p.default({
                className: "offcanvas-backdrop",
                isVisible: e,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: e
                  ? () => {
                      "static" !== this._config.backdrop
                        ? this.hide()
                        : c.default.trigger(this._element, C);
                    }
                  : null,
              });
            }
            _initializeFocusTrap() {
              return new h.default({ trapElement: this._element });
            }
            _addEventListeners() {
              c.default.on(this._element, D, (e) => {
                "Escape" === e.key &&
                  (this._config.keyboard
                    ? this.hide()
                    : c.default.trigger(this._element, C));
              });
            }
            static jQueryInterface(e) {
              return this.each(function () {
                const t = N.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                  if (
                    void 0 === t[e] ||
                    e.startsWith("_") ||
                    "constructor" === e
                  )
                    throw new TypeError(`No method named "${e}"`);
                  t[e](this);
                }
              });
            }
          }
          return (
            c.default.on(
              document,
              S,
              '[data-bs-toggle="offcanvas"]',
              function (t) {
                const n = e.getElementFromSelector(this);
                if (
                  (["A", "AREA"].includes(this.tagName) && t.preventDefault(),
                  e.isDisabled(this))
                )
                  return;
                c.default.one(n, k, () => {
                  e.isVisible(this) && this.focus();
                });
                const r = d.default.findOne(w);
                r && r !== n && N.getInstance(r).hide(),
                  N.getOrCreateInstance(n).toggle(this);
              }
            ),
            c.default.on(window, v, () => {
              for (const e of d.default.find(w))
                N.getOrCreateInstance(e).show();
            }),
            c.default.on(window, A, () => {
              for (const e of d.default.find(
                "[aria-modal][class*=show][class*=offcanvas-]"
              ))
                "fixed" !== getComputedStyle(e).position &&
                  N.getOrCreateInstance(e).hide();
            }),
            a.enableDismissTrigger(N),
            e.defineJQueryPlugin(N),
            N
          );
        })(
          n(4072),
          n(1810),
          n(9286),
          n(5695),
          n(8737),
          n(1358),
          n(744),
          n(1127)
        );
      },
      1358: function (e, t, n) {
        e.exports = (function (e, t, n) {
          "use strict";
          const r = (e) =>
              e && "object" == typeof e && "default" in e ? e : { default: e },
            i = r(e),
            o = r(n),
            s = "backdrop",
            a = "show",
            l = `mousedown.bs.${s}`,
            u = {
              className: "modal-backdrop",
              clickCallback: null,
              isAnimated: !1,
              isVisible: !0,
              rootElement: "body",
            },
            c = {
              className: "string",
              clickCallback: "(function|null)",
              isAnimated: "boolean",
              isVisible: "boolean",
              rootElement: "(element|string)",
            };
          class f extends o.default {
            constructor(e) {
              super(),
                (this._config = this._getConfig(e)),
                (this._isAppended = !1),
                (this._element = null);
            }
            static get Default() {
              return u;
            }
            static get DefaultType() {
              return c;
            }
            static get NAME() {
              return s;
            }
            show(e) {
              if (!this._config.isVisible) return void t.execute(e);
              this._append();
              const n = this._getElement();
              this._config.isAnimated && t.reflow(n),
                n.classList.add(a),
                this._emulateAnimation(() => {
                  t.execute(e);
                });
            }
            hide(e) {
              this._config.isVisible
                ? (this._getElement().classList.remove(a),
                  this._emulateAnimation(() => {
                    this.dispose(), t.execute(e);
                  }))
                : t.execute(e);
            }
            dispose() {
              this._isAppended &&
                (i.default.off(this._element, l),
                this._element.remove(),
                (this._isAppended = !1));
            }
            _getElement() {
              if (!this._element) {
                const e = document.createElement("div");
                (e.className = this._config.className),
                  this._config.isAnimated && e.classList.add("fade"),
                  (this._element = e);
              }
              return this._element;
            }
            _configAfterMerge(e) {
              return (e.rootElement = t.getElement(e.rootElement)), e;
            }
            _append() {
              if (this._isAppended) return;
              const e = this._getElement();
              this._config.rootElement.append(e),
                i.default.on(e, l, () => {
                  t.execute(this._config.clickCallback);
                }),
                (this._isAppended = !0);
            }
            _emulateAnimation(e) {
              t.executeAfterTransition(
                e,
                this._getElement(),
                this._config.isAnimated
              );
            }
          }
          return f;
        })(n(9286), n(4072), n(4705));
      },
      1127: function (e, t, n) {
        !(function (e, t, n) {
          "use strict";
          const r = ((e) =>
            e && "object" == typeof e && "default" in e ? e : { default: e })(
            t
          );
          (e.enableDismissTrigger = (e, t = "hide") => {
            const i = `click.dismiss${e.EVENT_KEY}`,
              o = e.NAME;
            r.default.on(document, i, `[data-bs-dismiss="${o}"]`, function (r) {
              if (
                (["A", "AREA"].includes(this.tagName) && r.preventDefault(),
                n.isDisabled(this))
              )
                return;
              const i = n.getElementFromSelector(this) || this.closest(`.${o}`);
              e.getOrCreateInstance(i)[t]();
            });
          }),
            Object.defineProperties(e, {
              __esModule: { value: !0 },
              [Symbol.toStringTag]: { value: "Module" },
            });
        })(t, n(9286), n(4072));
      },
      4705: function (e, t, n) {
        e.exports = (function (e, t) {
          "use strict";
          const n = ((e) =>
            e && "object" == typeof e && "default" in e ? e : { default: e })(
            t
          );
          return class {
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
            _getConfig(e) {
              return (
                (e = this._mergeConfigObj(e)),
                (e = this._configAfterMerge(e)),
                this._typeCheckConfig(e),
                e
              );
            }
            _configAfterMerge(e) {
              return e;
            }
            _mergeConfigObj(t, r) {
              const i = e.isElement(r)
                ? n.default.getDataAttribute(r, "config")
                : {};
              return {
                ...this.constructor.Default,
                ...("object" == typeof i ? i : {}),
                ...(e.isElement(r) ? n.default.getDataAttributes(r) : {}),
                ...("object" == typeof t ? t : {}),
              };
            }
            _typeCheckConfig(t, n = this.constructor.DefaultType) {
              for (const r of Object.keys(n)) {
                const i = n[r],
                  o = t[r],
                  s = e.isElement(o) ? "element" : e.toType(o);
                if (!new RegExp(i).test(s))
                  throw new TypeError(
                    `${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${s}" but expected type "${i}".`
                  );
              }
            }
          };
        })(n(4072), n(3175));
      },
      744: function (e, t, n) {
        e.exports = (function (e, t, n) {
          "use strict";
          const r = (e) =>
              e && "object" == typeof e && "default" in e ? e : { default: e },
            i = r(e),
            o = r(t),
            s = r(n),
            a = ".bs.focustrap",
            l = `focusin${a}`,
            u = `keydown.tab${a}`,
            c = "backward",
            f = { autofocus: !0, trapElement: null },
            d = { autofocus: "boolean", trapElement: "element" };
          class p extends s.default {
            constructor(e) {
              super(),
                (this._config = this._getConfig(e)),
                (this._isActive = !1),
                (this._lastTabNavDirection = null);
            }
            static get Default() {
              return f;
            }
            static get DefaultType() {
              return d;
            }
            static get NAME() {
              return "focustrap";
            }
            activate() {
              this._isActive ||
                (this._config.autofocus && this._config.trapElement.focus(),
                i.default.off(document, a),
                i.default.on(document, l, (e) => this._handleFocusin(e)),
                i.default.on(document, u, (e) => this._handleKeydown(e)),
                (this._isActive = !0));
            }
            deactivate() {
              this._isActive &&
                ((this._isActive = !1), i.default.off(document, a));
            }
            _handleFocusin(e) {
              const { trapElement: t } = this._config;
              if (
                e.target === document ||
                e.target === t ||
                t.contains(e.target)
              )
                return;
              const n = o.default.focusableChildren(t);
              0 === n.length
                ? t.focus()
                : this._lastTabNavDirection === c
                ? n[n.length - 1].focus()
                : n[0].focus();
            }
            _handleKeydown(e) {
              "Tab" === e.key &&
                (this._lastTabNavDirection = e.shiftKey ? c : "forward");
            }
          }
          return p;
        })(n(9286), n(8737), n(4705));
      },
      4072: function (e, t) {
        !(function (e) {
          "use strict";
          const t = "transitionend",
            n = (e) => {
              let t = e.getAttribute("data-bs-target");
              if (!t || "#" === t) {
                let n = e.getAttribute("href");
                if (!n || (!n.includes("#") && !n.startsWith("."))) return null;
                n.includes("#") &&
                  !n.startsWith("#") &&
                  (n = `#${n.split("#")[1]}`),
                  (t = n && "#" !== n ? n.trim() : null);
              }
              return t;
            },
            r = (e) => {
              if (!e) return 0;
              let { transitionDuration: t, transitionDelay: n } =
                window.getComputedStyle(e);
              const r = Number.parseFloat(t),
                i = Number.parseFloat(n);
              return r || i
                ? ((t = t.split(",")[0]),
                  (n = n.split(",")[0]),
                  1e3 * (Number.parseFloat(t) + Number.parseFloat(n)))
                : 0;
            },
            i = (e) => {
              e.dispatchEvent(new Event(t));
            },
            o = (e) =>
              !(!e || "object" != typeof e) &&
              (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType),
            s = (e) => {
              if (!document.documentElement.attachShadow) return null;
              if ("function" == typeof e.getRootNode) {
                const t = e.getRootNode();
                return t instanceof ShadowRoot ? t : null;
              }
              return e instanceof ShadowRoot
                ? e
                : e.parentNode
                ? s(e.parentNode)
                : null;
            },
            a = () =>
              window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
                ? window.jQuery
                : null,
            l = [],
            u = (e) => {
              "loading" === document.readyState
                ? (l.length ||
                    document.addEventListener("DOMContentLoaded", () => {
                      for (const e of l) e();
                    }),
                  l.push(e))
                : e();
            },
            c = (e) => {
              "function" == typeof e && e();
            };
          (e.defineJQueryPlugin = (e) => {
            u(() => {
              const t = a();
              if (t) {
                const n = e.NAME,
                  r = t.fn[n];
                (t.fn[n] = e.jQueryInterface),
                  (t.fn[n].Constructor = e),
                  (t.fn[n].noConflict = () => (
                    (t.fn[n] = r), e.jQueryInterface
                  ));
              }
            });
          }),
            (e.execute = c),
            (e.executeAfterTransition = (e, n, o = !0) => {
              if (!o) return void c(e);
              const s = r(n) + 5;
              let a = !1;
              const l = ({ target: r }) => {
                r === n && ((a = !0), n.removeEventListener(t, l), c(e));
              };
              n.addEventListener(t, l),
                setTimeout(() => {
                  a || i(n);
                }, s);
            }),
            (e.findShadowRoot = s),
            (e.getElement = (e) =>
              o(e)
                ? e.jquery
                  ? e[0]
                  : e
                : "string" == typeof e && e.length > 0
                ? document.querySelector(e)
                : null),
            (e.getElementFromSelector = (e) => {
              const t = n(e);
              return t ? document.querySelector(t) : null;
            }),
            (e.getNextActiveElement = (e, t, n, r) => {
              const i = e.length;
              let o = e.indexOf(t);
              return -1 === o
                ? !n && r
                  ? e[i - 1]
                  : e[0]
                : ((o += n ? 1 : -1),
                  r && (o = (o + i) % i),
                  e[Math.max(0, Math.min(o, i - 1))]);
            }),
            (e.getSelectorFromElement = (e) => {
              const t = n(e);
              return t && document.querySelector(t) ? t : null;
            }),
            (e.getTransitionDurationFromElement = r),
            (e.getUID = (e) => {
              do {
                e += Math.floor(1e6 * Math.random());
              } while (document.getElementById(e));
              return e;
            }),
            (e.getjQuery = a),
            (e.isDisabled = (e) =>
              !e ||
              e.nodeType !== Node.ELEMENT_NODE ||
              !!e.classList.contains("disabled") ||
              (void 0 !== e.disabled
                ? e.disabled
                : e.hasAttribute("disabled") &&
                  "false" !== e.getAttribute("disabled"))),
            (e.isElement = o),
            (e.isRTL = () => "rtl" === document.documentElement.dir),
            (e.isVisible = (e) => {
              if (!o(e) || 0 === e.getClientRects().length) return !1;
              const t =
                  "visible" ===
                  getComputedStyle(e).getPropertyValue("visibility"),
                n = e.closest("details:not([open])");
              if (!n) return t;
              if (n !== e) {
                const t = e.closest("summary");
                if (t && t.parentNode !== n) return !1;
                if (null === t) return !1;
              }
              return t;
            }),
            (e.noop = () => {}),
            (e.onDOMContentLoaded = u),
            (e.reflow = (e) => {
              e.offsetHeight;
            }),
            (e.toType = (e) =>
              null == e
                ? `${e}`
                : Object.prototype.toString
                    .call(e)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase()),
            (e.triggerTransitionEnd = i),
            Object.defineProperties(e, {
              __esModule: { value: !0 },
              [Symbol.toStringTag]: { value: "Module" },
            });
        })(t);
      },
      1810: function (e, t, n) {
        e.exports = (function (e, t, n) {
          "use strict";
          const r = (e) =>
              e && "object" == typeof e && "default" in e ? e : { default: e },
            i = r(e),
            o = r(t),
            s = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            a = ".sticky-top",
            l = "padding-right",
            u = "margin-right";
          return class {
            constructor() {
              this._element = document.body;
            }
            getWidth() {
              const e = document.documentElement.clientWidth;
              return Math.abs(window.innerWidth - e);
            }
            hide() {
              const e = this.getWidth();
              this._disableOverFlow(),
                this._setElementAttributes(this._element, l, (t) => t + e),
                this._setElementAttributes(s, l, (t) => t + e),
                this._setElementAttributes(a, u, (t) => t - e);
            }
            reset() {
              this._resetElementAttributes(this._element, "overflow"),
                this._resetElementAttributes(this._element, l),
                this._resetElementAttributes(s, l),
                this._resetElementAttributes(a, u);
            }
            isOverflowing() {
              return this.getWidth() > 0;
            }
            _disableOverFlow() {
              this._saveInitialAttribute(this._element, "overflow"),
                (this._element.style.overflow = "hidden");
            }
            _setElementAttributes(e, t, n) {
              const r = this.getWidth();
              this._applyManipulationCallback(e, (e) => {
                if (
                  e !== this._element &&
                  window.innerWidth > e.clientWidth + r
                )
                  return;
                this._saveInitialAttribute(e, t);
                const i = window.getComputedStyle(e).getPropertyValue(t);
                e.style.setProperty(t, `${n(Number.parseFloat(i))}px`);
              });
            }
            _saveInitialAttribute(e, t) {
              const n = e.style.getPropertyValue(t);
              n && o.default.setDataAttribute(e, t, n);
            }
            _resetElementAttributes(e, t) {
              this._applyManipulationCallback(e, (e) => {
                const n = o.default.getDataAttribute(e, t);
                null !== n
                  ? (o.default.removeDataAttribute(e, t),
                    e.style.setProperty(t, n))
                  : e.style.removeProperty(t);
              });
            }
            _applyManipulationCallback(e, t) {
              if (n.isElement(e)) t(e);
              else for (const n of i.default.find(e, this._element)) t(n);
            }
          };
        })(n(8737), n(3175), n(4072));
      },
      2814: function (e, t, n) {
        e.exports = (function (e, t, n) {
          "use strict";
          const r = (e) =>
              e && "object" == typeof e && "default" in e ? e : { default: e },
            i = r(e),
            o = r(t),
            s = ".bs.swipe",
            a = `touchstart${s}`,
            l = `touchmove${s}`,
            u = `touchend${s}`,
            c = `pointerdown${s}`,
            f = `pointerup${s}`,
            d = { endCallback: null, leftCallback: null, rightCallback: null },
            p = {
              endCallback: "(function|null)",
              leftCallback: "(function|null)",
              rightCallback: "(function|null)",
            };
          class h extends i.default {
            constructor(e, t) {
              super(),
                (this._element = e),
                e &&
                  h.isSupported() &&
                  ((this._config = this._getConfig(t)),
                  (this._deltaX = 0),
                  (this._supportPointerEvents = Boolean(window.PointerEvent)),
                  this._initEvents());
            }
            static get Default() {
              return d;
            }
            static get DefaultType() {
              return p;
            }
            static get NAME() {
              return "swipe";
            }
            dispose() {
              o.default.off(this._element, s);
            }
            _start(e) {
              this._supportPointerEvents
                ? this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX)
                : (this._deltaX = e.touches[0].clientX);
            }
            _end(e) {
              this._eventIsPointerPenTouch(e) &&
                (this._deltaX = e.clientX - this._deltaX),
                this._handleSwipe(),
                n.execute(this._config.endCallback);
            }
            _move(e) {
              this._deltaX =
                e.touches && e.touches.length > 1
                  ? 0
                  : e.touches[0].clientX - this._deltaX;
            }
            _handleSwipe() {
              const e = Math.abs(this._deltaX);
              if (e <= 40) return;
              const t = e / this._deltaX;
              (this._deltaX = 0),
                t &&
                  n.execute(
                    t > 0
                      ? this._config.rightCallback
                      : this._config.leftCallback
                  );
            }
            _initEvents() {
              this._supportPointerEvents
                ? (o.default.on(this._element, c, (e) => this._start(e)),
                  o.default.on(this._element, f, (e) => this._end(e)),
                  this._element.classList.add("pointer-event"))
                : (o.default.on(this._element, a, (e) => this._start(e)),
                  o.default.on(this._element, l, (e) => this._move(e)),
                  o.default.on(this._element, u, (e) => this._end(e)));
            }
            _eventIsPointerPenTouch(e) {
              return (
                this._supportPointerEvents &&
                ("pen" === e.pointerType || "touch" === e.pointerType)
              );
            }
            static isSupported() {
              return (
                "ontouchstart" in document.documentElement ||
                navigator.maxTouchPoints > 0
              );
            }
          }
          return h;
        })(n(4705), n(9286), n(4072));
      },
      9755: function (e, t) {
        var n;
        !(function (t, n) {
          "use strict";
          "object" == typeof e.exports
            ? (e.exports = t.document
                ? n(t, !0)
                : function (e) {
                    if (!e.document)
                      throw new Error(
                        "jQuery requires a window with a document"
                      );
                    return n(e);
                  })
            : n(t);
        })("undefined" != typeof window ? window : this, function (r, i) {
          "use strict";
          var o = [],
            s = Object.getPrototypeOf,
            a = o.slice,
            l = o.flat
              ? function (e) {
                  return o.flat.call(e);
                }
              : function (e) {
                  return o.concat.apply([], e);
                },
            u = o.push,
            c = o.indexOf,
            f = {},
            d = f.toString,
            p = f.hasOwnProperty,
            h = p.toString,
            g = h.call(Object),
            m = {},
            v = function (e) {
              return (
                "function" == typeof e &&
                "number" != typeof e.nodeType &&
                "function" != typeof e.item
              );
            },
            y = function (e) {
              return null != e && e === e.window;
            },
            b = r.document,
            x = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function w(e, t, n) {
            var r,
              i,
              o = (n = n || b).createElement("script");
            if (((o.text = e), t))
              for (r in x)
                (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
                  o.setAttribute(r, i);
            n.head.appendChild(o).parentNode.removeChild(o);
          }
          function _(e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? f[d.call(e)] || "object"
              : typeof e;
          }
          var T = "3.6.2",
            E = function (e, t) {
              return new E.fn.init(e, t);
            };
          function C(e) {
            var t = !!e && "length" in e && e.length,
              n = _(e);
            return (
              !v(e) &&
              !y(e) &&
              ("array" === n ||
                0 === t ||
                ("number" == typeof t && t > 0 && t - 1 in e))
            );
          }
          (E.fn = E.prototype =
            {
              jquery: T,
              constructor: E,
              length: 0,
              toArray: function () {
                return a.call(this);
              },
              get: function (e) {
                return null == e
                  ? a.call(this)
                  : e < 0
                  ? this[e + this.length]
                  : this[e];
              },
              pushStack: function (e) {
                var t = E.merge(this.constructor(), e);
                return (t.prevObject = this), t;
              },
              each: function (e) {
                return E.each(this, e);
              },
              map: function (e) {
                return this.pushStack(
                  E.map(this, function (t, n) {
                    return e.call(t, n, t);
                  })
                );
              },
              slice: function () {
                return this.pushStack(a.apply(this, arguments));
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              even: function () {
                return this.pushStack(
                  E.grep(this, function (e, t) {
                    return (t + 1) % 2;
                  })
                );
              },
              odd: function () {
                return this.pushStack(
                  E.grep(this, function (e, t) {
                    return t % 2;
                  })
                );
              },
              eq: function (e) {
                var t = this.length,
                  n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
              },
              end: function () {
                return this.prevObject || this.constructor();
              },
              push: u,
              sort: o.sort,
              splice: o.splice,
            }),
            (E.extend = E.fn.extend =
              function () {
                var e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  s = arguments[0] || {},
                  a = 1,
                  l = arguments.length,
                  u = !1;
                for (
                  "boolean" == typeof s &&
                    ((u = s), (s = arguments[a] || {}), a++),
                    "object" == typeof s || v(s) || (s = {}),
                    a === l && ((s = this), a--);
                  a < l;
                  a++
                )
                  if (null != (e = arguments[a]))
                    for (t in e)
                      (r = e[t]),
                        "__proto__" !== t &&
                          s !== r &&
                          (u &&
                          r &&
                          (E.isPlainObject(r) || (i = Array.isArray(r)))
                            ? ((n = s[t]),
                              (o =
                                i && !Array.isArray(n)
                                  ? []
                                  : i || E.isPlainObject(n)
                                  ? n
                                  : {}),
                              (i = !1),
                              (s[t] = E.extend(u, o, r)))
                            : void 0 !== r && (s[t] = r));
                return s;
              }),
            E.extend({
              expando: "jQuery" + (T + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function (e) {
                throw new Error(e);
              },
              noop: function () {},
              isPlainObject: function (e) {
                var t, n;
                return !(
                  !e ||
                  "[object Object]" !== d.call(e) ||
                  ((t = s(e)) &&
                    ("function" !=
                      typeof (n = p.call(t, "constructor") && t.constructor) ||
                      h.call(n) !== g))
                );
              },
              isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
              },
              globalEval: function (e, t, n) {
                w(e, { nonce: t && t.nonce }, n);
              },
              each: function (e, t) {
                var n,
                  r = 0;
                if (C(e))
                  for (
                    n = e.length;
                    r < n && !1 !== t.call(e[r], r, e[r]);
                    r++
                  );
                else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
              },
              makeArray: function (e, t) {
                var n = t || [];
                return (
                  null != e &&
                    (C(Object(e))
                      ? E.merge(n, "string" == typeof e ? [e] : e)
                      : u.call(n, e)),
                  n
                );
              },
              inArray: function (e, t, n) {
                return null == t ? -1 : c.call(t, e, n);
              },
              merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                  e[i++] = t[r];
                return (e.length = i), e;
              },
              grep: function (e, t, n) {
                for (var r = [], i = 0, o = e.length, s = !n; i < o; i++)
                  !t(e[i], i) !== s && r.push(e[i]);
                return r;
              },
              map: function (e, t, n) {
                var r,
                  i,
                  o = 0,
                  s = [];
                if (C(e))
                  for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && s.push(i);
                else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
                return l(s);
              },
              guid: 1,
              support: m,
            }),
            "function" == typeof Symbol &&
              (E.fn[Symbol.iterator] = o[Symbol.iterator]),
            E.each(
              "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
              ),
              function (e, t) {
                f["[object " + t + "]"] = t.toLowerCase();
              }
            );
          var k = (function (e) {
            var t,
              n,
              r,
              i,
              o,
              s,
              a,
              l,
              u,
              c,
              f,
              d,
              p,
              h,
              g,
              m,
              v,
              y,
              b,
              x = "sizzle" + 1 * new Date(),
              w = e.document,
              _ = 0,
              T = 0,
              E = le(),
              C = le(),
              k = le(),
              A = le(),
              S = function (e, t) {
                return e === t && (f = !0), 0;
              },
              D = {}.hasOwnProperty,
              j = [],
              O = j.pop,
              N = j.push,
              L = j.push,
              Z = j.slice,
              P = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                  if (e[n] === t) return n;
                return -1;
              },
              M =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              q = "[\\x20\\t\\r\\n\\f]",
              $ =
                "(?:\\\\[\\da-fA-F]{1,6}" +
                q +
                "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
              I =
                "\\[" +
                q +
                "*(" +
                $ +
                ")(?:" +
                q +
                "*([*^$|!~]?=)" +
                q +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                $ +
                "))|)" +
                q +
                "*\\]",
              R =
                ":(" +
                $ +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                I +
                ")*)|.*)\\)|)",
              H = new RegExp(q + "+", "g"),
              F = new RegExp(
                "^" + q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + q + "+$",
                "g"
              ),
              W = new RegExp("^" + q + "*," + q + "*"),
              B = new RegExp("^" + q + "*([>+~]|" + q + ")" + q + "*"),
              V = new RegExp(q + "|>"),
              z = new RegExp(R),
              X = new RegExp("^" + $ + "$"),
              U = {
                ID: new RegExp("^#(" + $ + ")"),
                CLASS: new RegExp("^\\.(" + $ + ")"),
                TAG: new RegExp("^(" + $ + "|[*])"),
                ATTR: new RegExp("^" + I),
                PSEUDO: new RegExp("^" + R),
                CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                    q +
                    "*(even|odd|(([+-]|)(\\d*)n|)" +
                    q +
                    "*(?:([+-]|)" +
                    q +
                    "*(\\d+)|))" +
                    q +
                    "*\\)|)",
                  "i"
                ),
                bool: new RegExp("^(?:" + M + ")$", "i"),
                needsContext: new RegExp(
                  "^" +
                    q +
                    "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                    q +
                    "*((?:-\\d)?\\d*)" +
                    q +
                    "*\\)|)(?=[^-]|$)",
                  "i"
                ),
              },
              Y = /HTML$/i,
              K = /^(?:input|select|textarea|button)$/i,
              Q = /^h\d$/i,
              J = /^[^{]+\{\s*\[native \w/,
              G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              ee = /[+~]/,
              te = new RegExp(
                "\\\\[\\da-fA-F]{1,6}" + q + "?|\\\\([^\\r\\n\\f])",
                "g"
              ),
              ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return (
                  t ||
                  (n < 0
                    ? String.fromCharCode(n + 65536)
                    : String.fromCharCode(
                        (n >> 10) | 55296,
                        (1023 & n) | 56320
                      ))
                );
              },
              re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
              ie = function (e, t) {
                return t
                  ? "\0" === e
                    ? "�"
                    : e.slice(0, -1) +
                      "\\" +
                      e.charCodeAt(e.length - 1).toString(16) +
                      " "
                  : "\\" + e;
              },
              oe = function () {
                d();
              },
              se = xe(
                function (e) {
                  return (
                    !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                  );
                },
                { dir: "parentNode", next: "legend" }
              );
            try {
              L.apply((j = Z.call(w.childNodes)), w.childNodes),
                j[w.childNodes.length].nodeType;
            } catch (e) {
              L = {
                apply: j.length
                  ? function (e, t) {
                      N.apply(e, Z.call(t));
                    }
                  : function (e, t) {
                      for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                      e.length = n - 1;
                    },
              };
            }
            function ae(e, t, r, i) {
              var o,
                a,
                u,
                c,
                f,
                h,
                v,
                y = t && t.ownerDocument,
                w = t ? t.nodeType : 9;
              if (
                ((r = r || []),
                "string" != typeof e || !e || (1 !== w && 9 !== w && 11 !== w))
              )
                return r;
              if (!i && (d(t), (t = t || p), g)) {
                if (11 !== w && (f = G.exec(e)))
                  if ((o = f[1])) {
                    if (9 === w) {
                      if (!(u = t.getElementById(o))) return r;
                      if (u.id === o) return r.push(u), r;
                    } else if (
                      y &&
                      (u = y.getElementById(o)) &&
                      b(t, u) &&
                      u.id === o
                    )
                      return r.push(u), r;
                  } else {
                    if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                    if (
                      (o = f[3]) &&
                      n.getElementsByClassName &&
                      t.getElementsByClassName
                    )
                      return L.apply(r, t.getElementsByClassName(o)), r;
                  }
                if (
                  n.qsa &&
                  !A[e + " "] &&
                  (!m || !m.test(e)) &&
                  (1 !== w || "object" !== t.nodeName.toLowerCase())
                ) {
                  if (((v = e), (y = t), 1 === w && (V.test(e) || B.test(e)))) {
                    for (
                      ((y = (ee.test(e) && ve(t.parentNode)) || t) === t &&
                        n.scope) ||
                        ((c = t.getAttribute("id"))
                          ? (c = c.replace(re, ie))
                          : t.setAttribute("id", (c = x))),
                        a = (h = s(e)).length;
                      a--;

                    )
                      h[a] = (c ? "#" + c : ":scope") + " " + be(h[a]);
                    v = h.join(",");
                  }
                  try {
                    if (
                      n.cssSupportsSelector &&
                      !CSS.supports("selector(" + v + ")")
                    )
                      throw new Error();
                    return L.apply(r, y.querySelectorAll(v)), r;
                  } catch (t) {
                    A(e, !0);
                  } finally {
                    c === x && t.removeAttribute("id");
                  }
                }
              }
              return l(e.replace(F, "$1"), t, r, i);
            }
            function le() {
              var e = [];
              return function t(n, i) {
                return (
                  e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                  (t[n + " "] = i)
                );
              };
            }
            function ue(e) {
              return (e[x] = !0), e;
            }
            function ce(e) {
              var t = p.createElement("fieldset");
              try {
                return !!e(t);
              } catch (e) {
                return !1;
              } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
              }
            }
            function fe(e, t) {
              for (var n = e.split("|"), i = n.length; i--; )
                r.attrHandle[n[i]] = t;
            }
            function de(e, t) {
              var n = t && e,
                r =
                  n &&
                  1 === e.nodeType &&
                  1 === t.nodeType &&
                  e.sourceIndex - t.sourceIndex;
              if (r) return r;
              if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
              return e ? 1 : -1;
            }
            function pe(e) {
              return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
              };
            }
            function he(e) {
              return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
              };
            }
            function ge(e) {
              return function (t) {
                return "form" in t
                  ? t.parentNode && !1 === t.disabled
                    ? "label" in t
                      ? "label" in t.parentNode
                        ? t.parentNode.disabled === e
                        : t.disabled === e
                      : t.isDisabled === e ||
                        (t.isDisabled !== !e && se(t) === e)
                    : t.disabled === e
                  : "label" in t && t.disabled === e;
              };
            }
            function me(e) {
              return ue(function (t) {
                return (
                  (t = +t),
                  ue(function (n, r) {
                    for (var i, o = e([], n.length, t), s = o.length; s--; )
                      n[(i = o[s])] && (n[i] = !(r[i] = n[i]));
                  })
                );
              });
            }
            function ve(e) {
              return e && void 0 !== e.getElementsByTagName && e;
            }
            for (t in ((n = ae.support = {}),
            (o = ae.isXML =
              function (e) {
                var t = e && e.namespaceURI,
                  n = e && (e.ownerDocument || e).documentElement;
                return !Y.test(t || (n && n.nodeName) || "HTML");
              }),
            (d = ae.setDocument =
              function (e) {
                var t,
                  i,
                  s = e ? e.ownerDocument || e : w;
                return s != p && 9 === s.nodeType && s.documentElement
                  ? ((h = (p = s).documentElement),
                    (g = !o(p)),
                    w != p &&
                      (i = p.defaultView) &&
                      i.top !== i &&
                      (i.addEventListener
                        ? i.addEventListener("unload", oe, !1)
                        : i.attachEvent && i.attachEvent("onunload", oe)),
                    (n.scope = ce(function (e) {
                      return (
                        h.appendChild(e).appendChild(p.createElement("div")),
                        void 0 !== e.querySelectorAll &&
                          !e.querySelectorAll(":scope fieldset div").length
                      );
                    })),
                    (n.cssSupportsSelector = ce(function () {
                      return (
                        CSS.supports("selector(*)") &&
                        p.querySelectorAll(":is(:jqfake)") &&
                        !CSS.supports("selector(:is(*,:jqfake))")
                      );
                    })),
                    (n.attributes = ce(function (e) {
                      return (e.className = "i"), !e.getAttribute("className");
                    })),
                    (n.getElementsByTagName = ce(function (e) {
                      return (
                        e.appendChild(p.createComment("")),
                        !e.getElementsByTagName("*").length
                      );
                    })),
                    (n.getElementsByClassName = J.test(
                      p.getElementsByClassName
                    )),
                    (n.getById = ce(function (e) {
                      return (
                        (h.appendChild(e).id = x),
                        !p.getElementsByName || !p.getElementsByName(x).length
                      );
                    })),
                    n.getById
                      ? ((r.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            return e.getAttribute("id") === t;
                          };
                        }),
                        (r.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && g) {
                            var n = t.getElementById(e);
                            return n ? [n] : [];
                          }
                        }))
                      : ((r.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            var n =
                              void 0 !== e.getAttributeNode &&
                              e.getAttributeNode("id");
                            return n && n.value === t;
                          };
                        }),
                        (r.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && g) {
                            var n,
                              r,
                              i,
                              o = t.getElementById(e);
                            if (o) {
                              if (
                                (n = o.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [o];
                              for (
                                i = t.getElementsByName(e), r = 0;
                                (o = i[r++]);

                              )
                                if (
                                  (n = o.getAttributeNode("id")) &&
                                  n.value === e
                                )
                                  return [o];
                            }
                            return [];
                          }
                        })),
                    (r.find.TAG = n.getElementsByTagName
                      ? function (e, t) {
                          return void 0 !== t.getElementsByTagName
                            ? t.getElementsByTagName(e)
                            : n.qsa
                            ? t.querySelectorAll(e)
                            : void 0;
                        }
                      : function (e, t) {
                          var n,
                            r = [],
                            i = 0,
                            o = t.getElementsByTagName(e);
                          if ("*" === e) {
                            for (; (n = o[i++]); )
                              1 === n.nodeType && r.push(n);
                            return r;
                          }
                          return o;
                        }),
                    (r.find.CLASS =
                      n.getElementsByClassName &&
                      function (e, t) {
                        if (void 0 !== t.getElementsByClassName && g)
                          return t.getElementsByClassName(e);
                      }),
                    (v = []),
                    (m = []),
                    (n.qsa = J.test(p.querySelectorAll)) &&
                      (ce(function (e) {
                        var t;
                        (h.appendChild(e).innerHTML =
                          "<a id='" +
                          x +
                          "'></a><select id='" +
                          x +
                          "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                          e.querySelectorAll("[msallowcapture^='']").length &&
                            m.push("[*^$]=" + q + "*(?:''|\"\")"),
                          e.querySelectorAll("[selected]").length ||
                            m.push("\\[" + q + "*(?:value|" + M + ")"),
                          e.querySelectorAll("[id~=" + x + "-]").length ||
                            m.push("~="),
                          (t = p.createElement("input")).setAttribute(
                            "name",
                            ""
                          ),
                          e.appendChild(t),
                          e.querySelectorAll("[name='']").length ||
                            m.push(
                              "\\[" +
                                q +
                                "*name" +
                                q +
                                "*=" +
                                q +
                                "*(?:''|\"\")"
                            ),
                          e.querySelectorAll(":checked").length ||
                            m.push(":checked"),
                          e.querySelectorAll("a#" + x + "+*").length ||
                            m.push(".#.+[+~]"),
                          e.querySelectorAll("\\\f"),
                          m.push("[\\r\\n\\f]");
                      }),
                      ce(function (e) {
                        e.innerHTML =
                          "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = p.createElement("input");
                        t.setAttribute("type", "hidden"),
                          e.appendChild(t).setAttribute("name", "D"),
                          e.querySelectorAll("[name=d]").length &&
                            m.push("name" + q + "*[*^$|!~]?="),
                          2 !== e.querySelectorAll(":enabled").length &&
                            m.push(":enabled", ":disabled"),
                          (h.appendChild(e).disabled = !0),
                          2 !== e.querySelectorAll(":disabled").length &&
                            m.push(":enabled", ":disabled"),
                          e.querySelectorAll("*,:x"),
                          m.push(",.*:");
                      })),
                    (n.matchesSelector = J.test(
                      (y =
                        h.matches ||
                        h.webkitMatchesSelector ||
                        h.mozMatchesSelector ||
                        h.oMatchesSelector ||
                        h.msMatchesSelector)
                    )) &&
                      ce(function (e) {
                        (n.disconnectedMatch = y.call(e, "*")),
                          y.call(e, "[s!='']:x"),
                          v.push("!=", R);
                      }),
                    n.cssSupportsSelector || m.push(":has"),
                    (m = m.length && new RegExp(m.join("|"))),
                    (v = v.length && new RegExp(v.join("|"))),
                    (t = J.test(h.compareDocumentPosition)),
                    (b =
                      t || J.test(h.contains)
                        ? function (e, t) {
                            var n =
                                (9 === e.nodeType && e.documentElement) || e,
                              r = t && t.parentNode;
                            return (
                              e === r ||
                              !(
                                !r ||
                                1 !== r.nodeType ||
                                !(n.contains
                                  ? n.contains(r)
                                  : e.compareDocumentPosition &&
                                    16 & e.compareDocumentPosition(r))
                              )
                            );
                          }
                        : function (e, t) {
                            if (t)
                              for (; (t = t.parentNode); )
                                if (t === e) return !0;
                            return !1;
                          }),
                    (S = t
                      ? function (e, t) {
                          if (e === t) return (f = !0), 0;
                          var r =
                            !e.compareDocumentPosition -
                            !t.compareDocumentPosition;
                          return (
                            r ||
                            (1 &
                              (r =
                                (e.ownerDocument || e) == (t.ownerDocument || t)
                                  ? e.compareDocumentPosition(t)
                                  : 1) ||
                            (!n.sortDetached &&
                              t.compareDocumentPosition(e) === r)
                              ? e == p || (e.ownerDocument == w && b(w, e))
                                ? -1
                                : t == p || (t.ownerDocument == w && b(w, t))
                                ? 1
                                : c
                                ? P(c, e) - P(c, t)
                                : 0
                              : 4 & r
                              ? -1
                              : 1)
                          );
                        }
                      : function (e, t) {
                          if (e === t) return (f = !0), 0;
                          var n,
                            r = 0,
                            i = e.parentNode,
                            o = t.parentNode,
                            s = [e],
                            a = [t];
                          if (!i || !o)
                            return e == p
                              ? -1
                              : t == p
                              ? 1
                              : i
                              ? -1
                              : o
                              ? 1
                              : c
                              ? P(c, e) - P(c, t)
                              : 0;
                          if (i === o) return de(e, t);
                          for (n = e; (n = n.parentNode); ) s.unshift(n);
                          for (n = t; (n = n.parentNode); ) a.unshift(n);
                          for (; s[r] === a[r]; ) r++;
                          return r
                            ? de(s[r], a[r])
                            : s[r] == w
                            ? -1
                            : a[r] == w
                            ? 1
                            : 0;
                        }),
                    p)
                  : p;
              }),
            (ae.matches = function (e, t) {
              return ae(e, null, null, t);
            }),
            (ae.matchesSelector = function (e, t) {
              if (
                (d(e),
                n.matchesSelector &&
                  g &&
                  !A[t + " "] &&
                  (!v || !v.test(t)) &&
                  (!m || !m.test(t)))
              )
                try {
                  var r = y.call(e, t);
                  if (
                    r ||
                    n.disconnectedMatch ||
                    (e.document && 11 !== e.document.nodeType)
                  )
                    return r;
                } catch (e) {
                  A(t, !0);
                }
              return ae(t, p, null, [e]).length > 0;
            }),
            (ae.contains = function (e, t) {
              return (e.ownerDocument || e) != p && d(e), b(e, t);
            }),
            (ae.attr = function (e, t) {
              (e.ownerDocument || e) != p && d(e);
              var i = r.attrHandle[t.toLowerCase()],
                o =
                  i && D.call(r.attrHandle, t.toLowerCase())
                    ? i(e, t, !g)
                    : void 0;
              return void 0 !== o
                ? o
                : n.attributes || !g
                ? e.getAttribute(t)
                : (o = e.getAttributeNode(t)) && o.specified
                ? o.value
                : null;
            }),
            (ae.escape = function (e) {
              return (e + "").replace(re, ie);
            }),
            (ae.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (ae.uniqueSort = function (e) {
              var t,
                r = [],
                i = 0,
                o = 0;
              if (
                ((f = !n.detectDuplicates),
                (c = !n.sortStable && e.slice(0)),
                e.sort(S),
                f)
              ) {
                for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
                for (; i--; ) e.splice(r[i], 1);
              }
              return (c = null), e;
            }),
            (i = ae.getText =
              function (e) {
                var t,
                  n = "",
                  r = 0,
                  o = e.nodeType;
                if (o) {
                  if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                  } else if (3 === o || 4 === o) return e.nodeValue;
                } else for (; (t = e[r++]); ) n += i(t);
                return n;
              }),
            (r = ae.selectors =
              {
                cacheLength: 50,
                createPseudo: ue,
                match: U,
                attrHandle: {},
                find: {},
                relative: {
                  ">": { dir: "parentNode", first: !0 },
                  " ": { dir: "parentNode" },
                  "+": { dir: "previousSibling", first: !0 },
                  "~": { dir: "previousSibling" },
                },
                preFilter: {
                  ATTR: function (e) {
                    return (
                      (e[1] = e[1].replace(te, ne)),
                      (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                      "~=" === e[2] && (e[3] = " " + e[3] + " "),
                      e.slice(0, 4)
                    );
                  },
                  CHILD: function (e) {
                    return (
                      (e[1] = e[1].toLowerCase()),
                      "nth" === e[1].slice(0, 3)
                        ? (e[3] || ae.error(e[0]),
                          (e[4] = +(e[4]
                            ? e[5] + (e[6] || 1)
                            : 2 * ("even" === e[3] || "odd" === e[3]))),
                          (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                        : e[3] && ae.error(e[0]),
                      e
                    );
                  },
                  PSEUDO: function (e) {
                    var t,
                      n = !e[6] && e[2];
                    return U.CHILD.test(e[0])
                      ? null
                      : (e[3]
                          ? (e[2] = e[4] || e[5] || "")
                          : n &&
                            z.test(n) &&
                            (t = s(n, !0)) &&
                            (t = n.indexOf(")", n.length - t) - n.length) &&
                            ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                        e.slice(0, 3));
                  },
                },
                filter: {
                  TAG: function (e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e
                      ? function () {
                          return !0;
                        }
                      : function (e) {
                          return e.nodeName && e.nodeName.toLowerCase() === t;
                        };
                  },
                  CLASS: function (e) {
                    var t = E[e + " "];
                    return (
                      t ||
                      ((t = new RegExp(
                        "(^|" + q + ")" + e + "(" + q + "|$)"
                      )) &&
                        E(e, function (e) {
                          return t.test(
                            ("string" == typeof e.className && e.className) ||
                              (void 0 !== e.getAttribute &&
                                e.getAttribute("class")) ||
                              ""
                          );
                        }))
                    );
                  },
                  ATTR: function (e, t, n) {
                    return function (r) {
                      var i = ae.attr(r, e);
                      return null == i
                        ? "!=" === t
                        : !t ||
                            ((i += ""),
                            "=" === t
                              ? i === n
                              : "!=" === t
                              ? i !== n
                              : "^=" === t
                              ? n && 0 === i.indexOf(n)
                              : "*=" === t
                              ? n && i.indexOf(n) > -1
                              : "$=" === t
                              ? n && i.slice(-n.length) === n
                              : "~=" === t
                              ? (" " + i.replace(H, " ") + " ").indexOf(n) > -1
                              : "|=" === t &&
                                (i === n ||
                                  i.slice(0, n.length + 1) === n + "-"));
                    };
                  },
                  CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                      s = "last" !== e.slice(-4),
                      a = "of-type" === t;
                    return 1 === r && 0 === i
                      ? function (e) {
                          return !!e.parentNode;
                        }
                      : function (t, n, l) {
                          var u,
                            c,
                            f,
                            d,
                            p,
                            h,
                            g = o !== s ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            v = a && t.nodeName.toLowerCase(),
                            y = !l && !a,
                            b = !1;
                          if (m) {
                            if (o) {
                              for (; g; ) {
                                for (d = t; (d = d[g]); )
                                  if (
                                    a
                                      ? d.nodeName.toLowerCase() === v
                                      : 1 === d.nodeType
                                  )
                                    return !1;
                                h = g = "only" === e && !h && "nextSibling";
                              }
                              return !0;
                            }
                            if (
                              ((h = [s ? m.firstChild : m.lastChild]), s && y)
                            ) {
                              for (
                                b =
                                  (p =
                                    (u =
                                      (c =
                                        (f = (d = m)[x] || (d[x] = {}))[
                                          d.uniqueID
                                        ] || (f[d.uniqueID] = {}))[e] ||
                                      [])[0] === _ && u[1]) && u[2],
                                  d = p && m.childNodes[p];
                                (d =
                                  (++p && d && d[g]) || (b = p = 0) || h.pop());

                              )
                                if (1 === d.nodeType && ++b && d === t) {
                                  c[e] = [_, p, b];
                                  break;
                                }
                            } else if (
                              (y &&
                                (b = p =
                                  (u =
                                    (c =
                                      (f = (d = t)[x] || (d[x] = {}))[
                                        d.uniqueID
                                      ] || (f[d.uniqueID] = {}))[e] ||
                                    [])[0] === _ && u[1]),
                              !1 === b)
                            )
                              for (
                                ;
                                (d =
                                  (++p && d && d[g]) ||
                                  (b = p = 0) ||
                                  h.pop()) &&
                                ((a
                                  ? d.nodeName.toLowerCase() !== v
                                  : 1 !== d.nodeType) ||
                                  !++b ||
                                  (y &&
                                    ((c =
                                      (f = d[x] || (d[x] = {}))[d.uniqueID] ||
                                      (f[d.uniqueID] = {}))[e] = [_, b]),
                                  d !== t));

                              );
                            return (b -= i) === r || (b % r == 0 && b / r >= 0);
                          }
                        };
                  },
                  PSEUDO: function (e, t) {
                    var n,
                      i =
                        r.pseudos[e] ||
                        r.setFilters[e.toLowerCase()] ||
                        ae.error("unsupported pseudo: " + e);
                    return i[x]
                      ? i(t)
                      : i.length > 1
                      ? ((n = [e, e, "", t]),
                        r.setFilters.hasOwnProperty(e.toLowerCase())
                          ? ue(function (e, n) {
                              for (var r, o = i(e, t), s = o.length; s--; )
                                e[(r = P(e, o[s]))] = !(n[r] = o[s]);
                            })
                          : function (e) {
                              return i(e, 0, n);
                            })
                      : i;
                  },
                },
                pseudos: {
                  not: ue(function (e) {
                    var t = [],
                      n = [],
                      r = a(e.replace(F, "$1"));
                    return r[x]
                      ? ue(function (e, t, n, i) {
                          for (
                            var o, s = r(e, null, i, []), a = e.length;
                            a--;

                          )
                            (o = s[a]) && (e[a] = !(t[a] = o));
                        })
                      : function (e, i, o) {
                          return (
                            (t[0] = e),
                            r(t, null, o, n),
                            (t[0] = null),
                            !n.pop()
                          );
                        };
                  }),
                  has: ue(function (e) {
                    return function (t) {
                      return ae(e, t).length > 0;
                    };
                  }),
                  contains: ue(function (e) {
                    return (
                      (e = e.replace(te, ne)),
                      function (t) {
                        return (t.textContent || i(t)).indexOf(e) > -1;
                      }
                    );
                  }),
                  lang: ue(function (e) {
                    return (
                      X.test(e || "") || ae.error("unsupported lang: " + e),
                      (e = e.replace(te, ne).toLowerCase()),
                      function (t) {
                        var n;
                        do {
                          if (
                            (n = g
                              ? t.lang
                              : t.getAttribute("xml:lang") ||
                                t.getAttribute("lang"))
                          )
                            return (
                              (n = n.toLowerCase()) === e ||
                              0 === n.indexOf(e + "-")
                            );
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                      }
                    );
                  }),
                  target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                  },
                  root: function (e) {
                    return e === h;
                  },
                  focus: function (e) {
                    return (
                      e === p.activeElement &&
                      (!p.hasFocus || p.hasFocus()) &&
                      !!(e.type || e.href || ~e.tabIndex)
                    );
                  },
                  enabled: ge(!1),
                  disabled: ge(!0),
                  checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && !!e.checked) ||
                      ("option" === t && !!e.selected)
                    );
                  },
                  selected: function (e) {
                    return (
                      e.parentNode && e.parentNode.selectedIndex,
                      !0 === e.selected
                    );
                  },
                  empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6) return !1;
                    return !0;
                  },
                  parent: function (e) {
                    return !r.pseudos.empty(e);
                  },
                  header: function (e) {
                    return Q.test(e.nodeName);
                  },
                  input: function (e) {
                    return K.test(e.nodeName);
                  },
                  button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && "button" === e.type) || "button" === t
                    );
                  },
                  text: function (e) {
                    var t;
                    return (
                      "input" === e.nodeName.toLowerCase() &&
                      "text" === e.type &&
                      (null == (t = e.getAttribute("type")) ||
                        "text" === t.toLowerCase())
                    );
                  },
                  first: me(function () {
                    return [0];
                  }),
                  last: me(function (e, t) {
                    return [t - 1];
                  }),
                  eq: me(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                  }),
                  even: me(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  odd: me(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  lt: me(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                      e.push(r);
                    return e;
                  }),
                  gt: me(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                  }),
                },
              }),
            (r.pseudos.nth = r.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
              r.pseudos[t] = pe(t);
            for (t in { submit: !0, reset: !0 }) r.pseudos[t] = he(t);
            function ye() {}
            function be(e) {
              for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
              return r;
            }
            function xe(e, t, n) {
              var r = t.dir,
                i = t.next,
                o = i || r,
                s = n && "parentNode" === o,
                a = T++;
              return t.first
                ? function (t, n, i) {
                    for (; (t = t[r]); )
                      if (1 === t.nodeType || s) return e(t, n, i);
                    return !1;
                  }
                : function (t, n, l) {
                    var u,
                      c,
                      f,
                      d = [_, a];
                    if (l) {
                      for (; (t = t[r]); )
                        if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
                    } else
                      for (; (t = t[r]); )
                        if (1 === t.nodeType || s)
                          if (
                            ((c =
                              (f = t[x] || (t[x] = {}))[t.uniqueID] ||
                              (f[t.uniqueID] = {})),
                            i && i === t.nodeName.toLowerCase())
                          )
                            t = t[r] || t;
                          else {
                            if ((u = c[o]) && u[0] === _ && u[1] === a)
                              return (d[2] = u[2]);
                            if (((c[o] = d), (d[2] = e(t, n, l)))) return !0;
                          }
                    return !1;
                  };
            }
            function we(e) {
              return e.length > 1
                ? function (t, n, r) {
                    for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                    return !0;
                  }
                : e[0];
            }
            function _e(e, t, n, r, i) {
              for (
                var o, s = [], a = 0, l = e.length, u = null != t;
                a < l;
                a++
              )
                (o = e[a]) &&
                  ((n && !n(o, r, i)) || (s.push(o), u && t.push(a)));
              return s;
            }
            function Te(e, t, n, r, i, o) {
              return (
                r && !r[x] && (r = Te(r)),
                i && !i[x] && (i = Te(i, o)),
                ue(function (o, s, a, l) {
                  var u,
                    c,
                    f,
                    d = [],
                    p = [],
                    h = s.length,
                    g =
                      o ||
                      (function (e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++)
                          ae(e, t[r], n);
                        return n;
                      })(t || "*", a.nodeType ? [a] : a, []),
                    m = !e || (!o && t) ? g : _e(g, d, e, a, l),
                    v = n ? (i || (o ? e : h || r) ? [] : s) : m;
                  if ((n && n(m, v, a, l), r))
                    for (u = _e(v, p), r(u, [], a, l), c = u.length; c--; )
                      (f = u[c]) && (v[p[c]] = !(m[p[c]] = f));
                  if (o) {
                    if (i || e) {
                      if (i) {
                        for (u = [], c = v.length; c--; )
                          (f = v[c]) && u.push((m[c] = f));
                        i(null, (v = []), u, l);
                      }
                      for (c = v.length; c--; )
                        (f = v[c]) &&
                          (u = i ? P(o, f) : d[c]) > -1 &&
                          (o[u] = !(s[u] = f));
                    }
                  } else (v = _e(v === s ? v.splice(h, v.length) : v)), i ? i(null, s, v, l) : L.apply(s, v);
                })
              );
            }
            function Ee(e) {
              for (
                var t,
                  n,
                  i,
                  o = e.length,
                  s = r.relative[e[0].type],
                  a = s || r.relative[" "],
                  l = s ? 1 : 0,
                  c = xe(
                    function (e) {
                      return e === t;
                    },
                    a,
                    !0
                  ),
                  f = xe(
                    function (e) {
                      return P(t, e) > -1;
                    },
                    a,
                    !0
                  ),
                  d = [
                    function (e, n, r) {
                      var i =
                        (!s && (r || n !== u)) ||
                        ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                      return (t = null), i;
                    },
                  ];
                l < o;
                l++
              )
                if ((n = r.relative[e[l].type])) d = [xe(we(d), n)];
                else {
                  if ((n = r.filter[e[l].type].apply(null, e[l].matches))[x]) {
                    for (i = ++l; i < o && !r.relative[e[i].type]; i++);
                    return Te(
                      l > 1 && we(d),
                      l > 1 &&
                        be(
                          e
                            .slice(0, l - 1)
                            .concat({ value: " " === e[l - 2].type ? "*" : "" })
                        ).replace(F, "$1"),
                      n,
                      l < i && Ee(e.slice(l, i)),
                      i < o && Ee((e = e.slice(i))),
                      i < o && be(e)
                    );
                  }
                  d.push(n);
                }
              return we(d);
            }
            return (
              (ye.prototype = r.filters = r.pseudos),
              (r.setFilters = new ye()),
              (s = ae.tokenize =
                function (e, t) {
                  var n,
                    i,
                    o,
                    s,
                    a,
                    l,
                    u,
                    c = C[e + " "];
                  if (c) return t ? 0 : c.slice(0);
                  for (a = e, l = [], u = r.preFilter; a; ) {
                    for (s in ((n && !(i = W.exec(a))) ||
                      (i && (a = a.slice(i[0].length) || a), l.push((o = []))),
                    (n = !1),
                    (i = B.exec(a)) &&
                      ((n = i.shift()),
                      o.push({ value: n, type: i[0].replace(F, " ") }),
                      (a = a.slice(n.length))),
                    r.filter))
                      !(i = U[s].exec(a)) ||
                        (u[s] && !(i = u[s](i))) ||
                        ((n = i.shift()),
                        o.push({ value: n, type: s, matches: i }),
                        (a = a.slice(n.length)));
                    if (!n) break;
                  }
                  return t ? a.length : a ? ae.error(e) : C(e, l).slice(0);
                }),
              (a = ae.compile =
                function (e, t) {
                  var n,
                    i = [],
                    o = [],
                    a = k[e + " "];
                  if (!a) {
                    for (t || (t = s(e)), n = t.length; n--; )
                      (a = Ee(t[n]))[x] ? i.push(a) : o.push(a);
                    (a = k(
                      e,
                      (function (e, t) {
                        var n = t.length > 0,
                          i = e.length > 0,
                          o = function (o, s, a, l, c) {
                            var f,
                              h,
                              m,
                              v = 0,
                              y = "0",
                              b = o && [],
                              x = [],
                              w = u,
                              T = o || (i && r.find.TAG("*", c)),
                              E = (_ += null == w ? 1 : Math.random() || 0.1),
                              C = T.length;
                            for (
                              c && (u = s == p || s || c);
                              y !== C && null != (f = T[y]);
                              y++
                            ) {
                              if (i && f) {
                                for (
                                  h = 0,
                                    s ||
                                      f.ownerDocument == p ||
                                      (d(f), (a = !g));
                                  (m = e[h++]);

                                )
                                  if (m(f, s || p, a)) {
                                    l.push(f);
                                    break;
                                  }
                                c && (_ = E);
                              }
                              n && ((f = !m && f) && v--, o && b.push(f));
                            }
                            if (((v += y), n && y !== v)) {
                              for (h = 0; (m = t[h++]); ) m(b, x, s, a);
                              if (o) {
                                if (v > 0)
                                  for (; y--; )
                                    b[y] || x[y] || (x[y] = O.call(l));
                                x = _e(x);
                              }
                              L.apply(l, x),
                                c &&
                                  !o &&
                                  x.length > 0 &&
                                  v + t.length > 1 &&
                                  ae.uniqueSort(l);
                            }
                            return c && ((_ = E), (u = w)), b;
                          };
                        return n ? ue(o) : o;
                      })(o, i)
                    )),
                      (a.selector = e);
                  }
                  return a;
                }),
              (l = ae.select =
                function (e, t, n, i) {
                  var o,
                    l,
                    u,
                    c,
                    f,
                    d = "function" == typeof e && e,
                    p = !i && s((e = d.selector || e));
                  if (((n = n || []), 1 === p.length)) {
                    if (
                      (l = p[0] = p[0].slice(0)).length > 2 &&
                      "ID" === (u = l[0]).type &&
                      9 === t.nodeType &&
                      g &&
                      r.relative[l[1].type]
                    ) {
                      if (
                        !(t = (r.find.ID(u.matches[0].replace(te, ne), t) ||
                          [])[0])
                      )
                        return n;
                      d && (t = t.parentNode),
                        (e = e.slice(l.shift().value.length));
                    }
                    for (
                      o = U.needsContext.test(e) ? 0 : l.length;
                      o-- && ((u = l[o]), !r.relative[(c = u.type)]);

                    )
                      if (
                        (f = r.find[c]) &&
                        (i = f(
                          u.matches[0].replace(te, ne),
                          (ee.test(l[0].type) && ve(t.parentNode)) || t
                        ))
                      ) {
                        if ((l.splice(o, 1), !(e = i.length && be(l))))
                          return L.apply(n, i), n;
                        break;
                      }
                  }
                  return (
                    (d || a(e, p))(
                      i,
                      t,
                      !g,
                      n,
                      !t || (ee.test(e) && ve(t.parentNode)) || t
                    ),
                    n
                  );
                }),
              (n.sortStable = x.split("").sort(S).join("") === x),
              (n.detectDuplicates = !!f),
              d(),
              (n.sortDetached = ce(function (e) {
                return (
                  1 & e.compareDocumentPosition(p.createElement("fieldset"))
                );
              })),
              ce(function (e) {
                return (
                  (e.innerHTML = "<a href='#'></a>"),
                  "#" === e.firstChild.getAttribute("href")
                );
              }) ||
                fe("type|href|height|width", function (e, t, n) {
                  if (!n)
                    return e.getAttribute(
                      t,
                      "type" === t.toLowerCase() ? 1 : 2
                    );
                }),
              (n.attributes &&
                ce(function (e) {
                  return (
                    (e.innerHTML = "<input/>"),
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
                  );
                })) ||
                fe("value", function (e, t, n) {
                  if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue;
                }),
              ce(function (e) {
                return null == e.getAttribute("disabled");
              }) ||
                fe(M, function (e, t, n) {
                  var r;
                  if (!n)
                    return !0 === e[t]
                      ? t.toLowerCase()
                      : (r = e.getAttributeNode(t)) && r.specified
                      ? r.value
                      : null;
                }),
              ae
            );
          })(r);
          (E.find = k),
            (E.expr = k.selectors),
            (E.expr[":"] = E.expr.pseudos),
            (E.uniqueSort = E.unique = k.uniqueSort),
            (E.text = k.getText),
            (E.isXMLDoc = k.isXML),
            (E.contains = k.contains),
            (E.escapeSelector = k.escape);
          var A = function (e, t, n) {
              for (
                var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;

              )
                if (1 === e.nodeType) {
                  if (i && E(e).is(n)) break;
                  r.push(e);
                }
              return r;
            },
            S = function (e, t) {
              for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
              return n;
            },
            D = E.expr.match.needsContext;
          function j(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          var O =
            /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function N(e, t, n) {
            return v(t)
              ? E.grep(e, function (e, r) {
                  return !!t.call(e, r, e) !== n;
                })
              : t.nodeType
              ? E.grep(e, function (e) {
                  return (e === t) !== n;
                })
              : "string" != typeof t
              ? E.grep(e, function (e) {
                  return c.call(t, e) > -1 !== n;
                })
              : E.filter(t, e, n);
          }
          (E.filter = function (e, t, n) {
            var r = t[0];
            return (
              n && (e = ":not(" + e + ")"),
              1 === t.length && 1 === r.nodeType
                ? E.find.matchesSelector(r, e)
                  ? [r]
                  : []
                : E.find.matches(
                    e,
                    E.grep(t, function (e) {
                      return 1 === e.nodeType;
                    })
                  )
            );
          }),
            E.fn.extend({
              find: function (e) {
                var t,
                  n,
                  r = this.length,
                  i = this;
                if ("string" != typeof e)
                  return this.pushStack(
                    E(e).filter(function () {
                      for (t = 0; t < r; t++)
                        if (E.contains(i[t], this)) return !0;
                    })
                  );
                for (n = this.pushStack([]), t = 0; t < r; t++)
                  E.find(e, i[t], n);
                return r > 1 ? E.uniqueSort(n) : n;
              },
              filter: function (e) {
                return this.pushStack(N(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack(N(this, e || [], !0));
              },
              is: function (e) {
                return !!N(
                  this,
                  "string" == typeof e && D.test(e) ? E(e) : e || [],
                  !1
                ).length;
              },
            });
          var L,
            Z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((E.fn.init = function (e, t, n) {
            var r, i;
            if (!e) return this;
            if (((n = n || L), "string" == typeof e)) {
              if (
                !(r =
                  "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                    ? [null, e, null]
                    : Z.exec(e)) ||
                (!r[1] && t)
              )
                return !t || t.jquery
                  ? (t || n).find(e)
                  : this.constructor(t).find(e);
              if (r[1]) {
                if (
                  ((t = t instanceof E ? t[0] : t),
                  E.merge(
                    this,
                    E.parseHTML(
                      r[1],
                      t && t.nodeType ? t.ownerDocument || t : b,
                      !0
                    )
                  ),
                  O.test(r[1]) && E.isPlainObject(t))
                )
                  for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
              }
              return (
                (i = b.getElementById(r[2])) &&
                  ((this[0] = i), (this.length = 1)),
                this
              );
            }
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : v(e)
              ? void 0 !== n.ready
                ? n.ready(e)
                : e(E)
              : E.makeArray(e, this);
          }).prototype = E.fn),
            (L = E(b));
          var P = /^(?:parents|prev(?:Until|All))/,
            M = { children: !0, contents: !0, next: !0, prev: !0 };
          function q(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          E.fn.extend({
            has: function (e) {
              var t = E(e, this),
                n = t.length;
              return this.filter(function () {
                for (var e = 0; e < n; e++)
                  if (E.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var n,
                r = 0,
                i = this.length,
                o = [],
                s = "string" != typeof e && E(e);
              if (!D.test(e))
                for (; r < i; r++)
                  for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (
                      n.nodeType < 11 &&
                      (s
                        ? s.index(n) > -1
                        : 1 === n.nodeType && E.find.matchesSelector(n, e))
                    ) {
                      o.push(n);
                      break;
                    }
              return this.pushStack(o.length > 1 ? E.uniqueSort(o) : o);
            },
            index: function (e) {
              return e
                ? "string" == typeof e
                  ? c.call(E(e), this[0])
                  : c.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (e, t) {
              return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))));
            },
            addBack: function (e) {
              return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
              );
            },
          }),
            E.each(
              {
                parent: function (e) {
                  var t = e.parentNode;
                  return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                  return A(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                  return A(e, "parentNode", n);
                },
                next: function (e) {
                  return q(e, "nextSibling");
                },
                prev: function (e) {
                  return q(e, "previousSibling");
                },
                nextAll: function (e) {
                  return A(e, "nextSibling");
                },
                prevAll: function (e) {
                  return A(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                  return A(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                  return A(e, "previousSibling", n);
                },
                siblings: function (e) {
                  return S((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                  return S(e.firstChild);
                },
                contents: function (e) {
                  return null != e.contentDocument && s(e.contentDocument)
                    ? e.contentDocument
                    : (j(e, "template") && (e = e.content || e),
                      E.merge([], e.childNodes));
                },
              },
              function (e, t) {
                E.fn[e] = function (n, r) {
                  var i = E.map(this, t, n);
                  return (
                    "Until" !== e.slice(-5) && (r = n),
                    r && "string" == typeof r && (i = E.filter(r, i)),
                    this.length > 1 &&
                      (M[e] || E.uniqueSort(i), P.test(e) && i.reverse()),
                    this.pushStack(i)
                  );
                };
              }
            );
          var $ = /[^\x20\t\r\n\f]+/g;
          function I(e) {
            return e;
          }
          function R(e) {
            throw e;
          }
          function H(e, t, n, r) {
            var i;
            try {
              e && v((i = e.promise))
                ? i.call(e).done(t).fail(n)
                : e && v((i = e.then))
                ? i.call(e, t, n)
                : t.apply(void 0, [e].slice(r));
            } catch (e) {
              n.apply(void 0, [e]);
            }
          }
          (E.Callbacks = function (e) {
            e =
              "string" == typeof e
                ? (function (e) {
                    var t = {};
                    return (
                      E.each(e.match($) || [], function (e, n) {
                        t[n] = !0;
                      }),
                      t
                    );
                  })(e)
                : E.extend({}, e);
            var t,
              n,
              r,
              i,
              o = [],
              s = [],
              a = -1,
              l = function () {
                for (i = i || e.once, r = t = !0; s.length; a = -1)
                  for (n = s.shift(); ++a < o.length; )
                    !1 === o[a].apply(n[0], n[1]) &&
                      e.stopOnFalse &&
                      ((a = o.length), (n = !1));
                e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
              },
              u = {
                add: function () {
                  return (
                    o &&
                      (n && !t && ((a = o.length - 1), s.push(n)),
                      (function t(n) {
                        E.each(n, function (n, r) {
                          v(r)
                            ? (e.unique && u.has(r)) || o.push(r)
                            : r && r.length && "string" !== _(r) && t(r);
                        });
                      })(arguments),
                      n && !t && l()),
                    this
                  );
                },
                remove: function () {
                  return (
                    E.each(arguments, function (e, t) {
                      for (var n; (n = E.inArray(t, o, n)) > -1; )
                        o.splice(n, 1), n <= a && a--;
                    }),
                    this
                  );
                },
                has: function (e) {
                  return e ? E.inArray(e, o) > -1 : o.length > 0;
                },
                empty: function () {
                  return o && (o = []), this;
                },
                disable: function () {
                  return (i = s = []), (o = n = ""), this;
                },
                disabled: function () {
                  return !o;
                },
                lock: function () {
                  return (i = s = []), n || t || (o = n = ""), this;
                },
                locked: function () {
                  return !!i;
                },
                fireWith: function (e, n) {
                  return (
                    i ||
                      ((n = [e, (n = n || []).slice ? n.slice() : n]),
                      s.push(n),
                      t || l()),
                    this
                  );
                },
                fire: function () {
                  return u.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!r;
                },
              };
            return u;
          }),
            E.extend({
              Deferred: function (e) {
                var t = [
                    [
                      "notify",
                      "progress",
                      E.Callbacks("memory"),
                      E.Callbacks("memory"),
                      2,
                    ],
                    [
                      "resolve",
                      "done",
                      E.Callbacks("once memory"),
                      E.Callbacks("once memory"),
                      0,
                      "resolved",
                    ],
                    [
                      "reject",
                      "fail",
                      E.Callbacks("once memory"),
                      E.Callbacks("once memory"),
                      1,
                      "rejected",
                    ],
                  ],
                  n = "pending",
                  i = {
                    state: function () {
                      return n;
                    },
                    always: function () {
                      return o.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                      return i.then(null, e);
                    },
                    pipe: function () {
                      var e = arguments;
                      return E.Deferred(function (n) {
                        E.each(t, function (t, r) {
                          var i = v(e[r[4]]) && e[r[4]];
                          o[r[1]](function () {
                            var e = i && i.apply(this, arguments);
                            e && v(e.promise)
                              ? e
                                  .promise()
                                  .progress(n.notify)
                                  .done(n.resolve)
                                  .fail(n.reject)
                              : n[r[0] + "With"](this, i ? [e] : arguments);
                          });
                        }),
                          (e = null);
                      }).promise();
                    },
                    then: function (e, n, i) {
                      var o = 0;
                      function s(e, t, n, i) {
                        return function () {
                          var a = this,
                            l = arguments,
                            u = function () {
                              var r, u;
                              if (!(e < o)) {
                                if ((r = n.apply(a, l)) === t.promise())
                                  throw new TypeError(
                                    "Thenable self-resolution"
                                  );
                                (u =
                                  r &&
                                  ("object" == typeof r ||
                                    "function" == typeof r) &&
                                  r.then),
                                  v(u)
                                    ? i
                                      ? u.call(r, s(o, t, I, i), s(o, t, R, i))
                                      : (o++,
                                        u.call(
                                          r,
                                          s(o, t, I, i),
                                          s(o, t, R, i),
                                          s(o, t, I, t.notifyWith)
                                        ))
                                    : (n !== I && ((a = void 0), (l = [r])),
                                      (i || t.resolveWith)(a, l));
                              }
                            },
                            c = i
                              ? u
                              : function () {
                                  try {
                                    u();
                                  } catch (r) {
                                    E.Deferred.exceptionHook &&
                                      E.Deferred.exceptionHook(r, c.stackTrace),
                                      e + 1 >= o &&
                                        (n !== R && ((a = void 0), (l = [r])),
                                        t.rejectWith(a, l));
                                  }
                                };
                          e
                            ? c()
                            : (E.Deferred.getStackHook &&
                                (c.stackTrace = E.Deferred.getStackHook()),
                              r.setTimeout(c));
                        };
                      }
                      return E.Deferred(function (r) {
                        t[0][3].add(s(0, r, v(i) ? i : I, r.notifyWith)),
                          t[1][3].add(s(0, r, v(e) ? e : I)),
                          t[2][3].add(s(0, r, v(n) ? n : R));
                      }).promise();
                    },
                    promise: function (e) {
                      return null != e ? E.extend(e, i) : i;
                    },
                  },
                  o = {};
                return (
                  E.each(t, function (e, r) {
                    var s = r[2],
                      a = r[5];
                    (i[r[1]] = s.add),
                      a &&
                        s.add(
                          function () {
                            n = a;
                          },
                          t[3 - e][2].disable,
                          t[3 - e][3].disable,
                          t[0][2].lock,
                          t[0][3].lock
                        ),
                      s.add(r[3].fire),
                      (o[r[0]] = function () {
                        return (
                          o[r[0] + "With"](
                            this === o ? void 0 : this,
                            arguments
                          ),
                          this
                        );
                      }),
                      (o[r[0] + "With"] = s.fireWith);
                  }),
                  i.promise(o),
                  e && e.call(o, o),
                  o
                );
              },
              when: function (e) {
                var t = arguments.length,
                  n = t,
                  r = Array(n),
                  i = a.call(arguments),
                  o = E.Deferred(),
                  s = function (e) {
                    return function (n) {
                      (r[e] = this),
                        (i[e] = arguments.length > 1 ? a.call(arguments) : n),
                        --t || o.resolveWith(r, i);
                    };
                  };
                if (
                  t <= 1 &&
                  (H(e, o.done(s(n)).resolve, o.reject, !t),
                  "pending" === o.state() || v(i[n] && i[n].then))
                )
                  return o.then();
                for (; n--; ) H(i[n], s(n), o.reject);
                return o.promise();
              },
            });
          var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (E.Deferred.exceptionHook = function (e, t) {
            r.console &&
              r.console.warn &&
              e &&
              F.test(e.name) &&
              r.console.warn(
                "jQuery.Deferred exception: " + e.message,
                e.stack,
                t
              );
          }),
            (E.readyException = function (e) {
              r.setTimeout(function () {
                throw e;
              });
            });
          var W = E.Deferred();
          function B() {
            b.removeEventListener("DOMContentLoaded", B),
              r.removeEventListener("load", B),
              E.ready();
          }
          (E.fn.ready = function (e) {
            return (
              W.then(e).catch(function (e) {
                E.readyException(e);
              }),
              this
            );
          }),
            E.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                (!0 === e ? --E.readyWait : E.isReady) ||
                  ((E.isReady = !0),
                  (!0 !== e && --E.readyWait > 0) || W.resolveWith(b, [E]));
              },
            }),
            (E.ready.then = W.then),
            "complete" === b.readyState ||
            ("loading" !== b.readyState && !b.documentElement.doScroll)
              ? r.setTimeout(E.ready)
              : (b.addEventListener("DOMContentLoaded", B),
                r.addEventListener("load", B));
          var V = function (e, t, n, r, i, o, s) {
              var a = 0,
                l = e.length,
                u = null == n;
              if ("object" === _(n))
                for (a in ((i = !0), n)) V(e, t, a, n[a], !0, o, s);
              else if (
                void 0 !== r &&
                ((i = !0),
                v(r) || (s = !0),
                u &&
                  (s
                    ? (t.call(e, r), (t = null))
                    : ((u = t),
                      (t = function (e, t, n) {
                        return u.call(E(e), n);
                      }))),
                t)
              )
                for (; a < l; a++)
                  t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
              return i ? e : u ? t.call(e) : l ? t(e[0], n) : o;
            },
            z = /^-ms-/,
            X = /-([a-z])/g;
          function U(e, t) {
            return t.toUpperCase();
          }
          function Y(e) {
            return e.replace(z, "ms-").replace(X, U);
          }
          var K = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
          function Q() {
            this.expando = E.expando + Q.uid++;
          }
          (Q.uid = 1),
            (Q.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    K(e) &&
                      (e.nodeType
                        ? (e[this.expando] = t)
                        : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0,
                          }))),
                  t
                );
              },
              set: function (e, t, n) {
                var r,
                  i = this.cache(e);
                if ("string" == typeof t) i[Y(t)] = n;
                else for (r in t) i[Y(r)] = t[r];
                return i;
              },
              get: function (e, t) {
                return void 0 === t
                  ? this.cache(e)
                  : e[this.expando] && e[this.expando][Y(t)];
              },
              access: function (e, t, n) {
                return void 0 === t ||
                  (t && "string" == typeof t && void 0 === n)
                  ? this.get(e, t)
                  : (this.set(e, t, n), void 0 !== n ? n : t);
              },
              remove: function (e, t) {
                var n,
                  r = e[this.expando];
                if (void 0 !== r) {
                  if (void 0 !== t) {
                    n = (t = Array.isArray(t)
                      ? t.map(Y)
                      : (t = Y(t)) in r
                      ? [t]
                      : t.match($) || []).length;
                    for (; n--; ) delete r[t[n]];
                  }
                  (void 0 === t || E.isEmptyObject(r)) &&
                    (e.nodeType
                      ? (e[this.expando] = void 0)
                      : delete e[this.expando]);
                }
              },
              hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !E.isEmptyObject(t);
              },
            });
          var J = new Q(),
            G = new Q(),
            ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            te = /[A-Z]/g;
          function ne(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType)
              if (
                ((r = "data-" + t.replace(te, "-$&").toLowerCase()),
                "string" == typeof (n = e.getAttribute(r)))
              ) {
                try {
                  n = (function (e) {
                    return (
                      "true" === e ||
                      ("false" !== e &&
                        ("null" === e
                          ? null
                          : e === +e + ""
                          ? +e
                          : ee.test(e)
                          ? JSON.parse(e)
                          : e))
                    );
                  })(n);
                } catch (e) {}
                G.set(e, t, n);
              } else n = void 0;
            return n;
          }
          E.extend({
            hasData: function (e) {
              return G.hasData(e) || J.hasData(e);
            },
            data: function (e, t, n) {
              return G.access(e, t, n);
            },
            removeData: function (e, t) {
              G.remove(e, t);
            },
            _data: function (e, t, n) {
              return J.access(e, t, n);
            },
            _removeData: function (e, t) {
              J.remove(e, t);
            },
          }),
            E.fn.extend({
              data: function (e, t) {
                var n,
                  r,
                  i,
                  o = this[0],
                  s = o && o.attributes;
                if (void 0 === e) {
                  if (
                    this.length &&
                    ((i = G.get(o)),
                    1 === o.nodeType && !J.get(o, "hasDataAttrs"))
                  ) {
                    for (n = s.length; n--; )
                      s[n] &&
                        0 === (r = s[n].name).indexOf("data-") &&
                        ((r = Y(r.slice(5))), ne(o, r, i[r]));
                    J.set(o, "hasDataAttrs", !0);
                  }
                  return i;
                }
                return "object" == typeof e
                  ? this.each(function () {
                      G.set(this, e);
                    })
                  : V(
                      this,
                      function (t) {
                        var n;
                        if (o && void 0 === t)
                          return void 0 !== (n = G.get(o, e)) ||
                            void 0 !== (n = ne(o, e))
                            ? n
                            : void 0;
                        this.each(function () {
                          G.set(this, e, t);
                        });
                      },
                      null,
                      t,
                      arguments.length > 1,
                      null,
                      !0
                    );
              },
              removeData: function (e) {
                return this.each(function () {
                  G.remove(this, e);
                });
              },
            }),
            E.extend({
              queue: function (e, t, n) {
                var r;
                if (e)
                  return (
                    (t = (t || "fx") + "queue"),
                    (r = J.get(e, t)),
                    n &&
                      (!r || Array.isArray(n)
                        ? (r = J.access(e, t, E.makeArray(n)))
                        : r.push(n)),
                    r || []
                  );
              },
              dequeue: function (e, t) {
                t = t || "fx";
                var n = E.queue(e, t),
                  r = n.length,
                  i = n.shift(),
                  o = E._queueHooks(e, t);
                "inprogress" === i && ((i = n.shift()), r--),
                  i &&
                    ("fx" === t && n.unshift("inprogress"),
                    delete o.stop,
                    i.call(
                      e,
                      function () {
                        E.dequeue(e, t);
                      },
                      o
                    )),
                  !r && o && o.empty.fire();
              },
              _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                  J.get(e, n) ||
                  J.access(e, n, {
                    empty: E.Callbacks("once memory").add(function () {
                      J.remove(e, [t + "queue", n]);
                    }),
                  })
                );
              },
            }),
            E.fn.extend({
              queue: function (e, t) {
                var n = 2;
                return (
                  "string" != typeof e && ((t = e), (e = "fx"), n--),
                  arguments.length < n
                    ? E.queue(this[0], e)
                    : void 0 === t
                    ? this
                    : this.each(function () {
                        var n = E.queue(this, e, t);
                        E._queueHooks(this, e),
                          "fx" === e &&
                            "inprogress" !== n[0] &&
                            E.dequeue(this, e);
                      })
                );
              },
              dequeue: function (e) {
                return this.each(function () {
                  E.dequeue(this, e);
                });
              },
              clearQueue: function (e) {
                return this.queue(e || "fx", []);
              },
              promise: function (e, t) {
                var n,
                  r = 1,
                  i = E.Deferred(),
                  o = this,
                  s = this.length,
                  a = function () {
                    --r || i.resolveWith(o, [o]);
                  };
                for (
                  "string" != typeof e && ((t = e), (e = void 0)),
                    e = e || "fx";
                  s--;

                )
                  (n = J.get(o[s], e + "queueHooks")) &&
                    n.empty &&
                    (r++, n.empty.add(a));
                return a(), i.promise(t);
              },
            });
          var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
            oe = ["Top", "Right", "Bottom", "Left"],
            se = b.documentElement,
            ae = function (e) {
              return E.contains(e.ownerDocument, e);
            },
            le = { composed: !0 };
          se.getRootNode &&
            (ae = function (e) {
              return (
                E.contains(e.ownerDocument, e) ||
                e.getRootNode(le) === e.ownerDocument
              );
            });
          var ue = function (e, t) {
            return (
              "none" === (e = t || e).style.display ||
              ("" === e.style.display &&
                ae(e) &&
                "none" === E.css(e, "display"))
            );
          };
          function ce(e, t, n, r) {
            var i,
              o,
              s = 20,
              a = r
                ? function () {
                    return r.cur();
                  }
                : function () {
                    return E.css(e, t, "");
                  },
              l = a(),
              u = (n && n[3]) || (E.cssNumber[t] ? "" : "px"),
              c =
                e.nodeType &&
                (E.cssNumber[t] || ("px" !== u && +l)) &&
                ie.exec(E.css(e, t));
            if (c && c[3] !== u) {
              for (l /= 2, u = u || c[3], c = +l || 1; s--; )
                E.style(e, t, c + u),
                  (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (s = 0),
                  (c /= o);
              (c *= 2), E.style(e, t, c + u), (n = n || []);
            }
            return (
              n &&
                ((c = +c || +l || 0),
                (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
                r && ((r.unit = u), (r.start = c), (r.end = i))),
              i
            );
          }
          var fe = {};
          function de(e) {
            var t,
              n = e.ownerDocument,
              r = e.nodeName,
              i = fe[r];
            return (
              i ||
              ((t = n.body.appendChild(n.createElement(r))),
              (i = E.css(t, "display")),
              t.parentNode.removeChild(t),
              "none" === i && (i = "block"),
              (fe[r] = i),
              i)
            );
          }
          function pe(e, t) {
            for (var n, r, i = [], o = 0, s = e.length; o < s; o++)
              (r = e[o]).style &&
                ((n = r.style.display),
                t
                  ? ("none" === n &&
                      ((i[o] = J.get(r, "display") || null),
                      i[o] || (r.style.display = "")),
                    "" === r.style.display && ue(r) && (i[o] = de(r)))
                  : "none" !== n && ((i[o] = "none"), J.set(r, "display", n)));
            for (o = 0; o < s; o++) null != i[o] && (e[o].style.display = i[o]);
            return e;
          }
          E.fn.extend({
            show: function () {
              return pe(this, !0);
            },
            hide: function () {
              return pe(this);
            },
            toggle: function (e) {
              return "boolean" == typeof e
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    ue(this) ? E(this).show() : E(this).hide();
                  });
            },
          });
          var he,
            ge,
            me = /^(?:checkbox|radio)$/i,
            ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ye = /^$|^module$|\/(?:java|ecma)script/i;
          (he = b.createDocumentFragment().appendChild(b.createElement("div"))),
            (ge = b.createElement("input")).setAttribute("type", "radio"),
            ge.setAttribute("checked", "checked"),
            ge.setAttribute("name", "t"),
            he.appendChild(ge),
            (m.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (he.innerHTML = "<textarea>x</textarea>"),
            (m.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue),
            (he.innerHTML = "<option></option>"),
            (m.option = !!he.lastChild);
          var be = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
          };
          function xe(e, t) {
            var n;
            return (
              (n =
                void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName(t || "*")
                  : void 0 !== e.querySelectorAll
                  ? e.querySelectorAll(t || "*")
                  : []),
              void 0 === t || (t && j(e, t)) ? E.merge([e], n) : n
            );
          }
          function we(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
              J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
          }
          (be.tbody = be.tfoot = be.colgroup = be.caption = be.thead),
            (be.th = be.td),
            m.option ||
              (be.optgroup = be.option =
                [1, "<select multiple='multiple'>", "</select>"]);
          var _e = /<|&#?\w+;/;
          function Te(e, t, n, r, i) {
            for (
              var o,
                s,
                a,
                l,
                u,
                c,
                f = t.createDocumentFragment(),
                d = [],
                p = 0,
                h = e.length;
              p < h;
              p++
            )
              if ((o = e[p]) || 0 === o)
                if ("object" === _(o)) E.merge(d, o.nodeType ? [o] : o);
                else if (_e.test(o)) {
                  for (
                    s = s || f.appendChild(t.createElement("div")),
                      a = (ve.exec(o) || ["", ""])[1].toLowerCase(),
                      l = be[a] || be._default,
                      s.innerHTML = l[1] + E.htmlPrefilter(o) + l[2],
                      c = l[0];
                    c--;

                  )
                    s = s.lastChild;
                  E.merge(d, s.childNodes),
                    ((s = f.firstChild).textContent = "");
                } else d.push(t.createTextNode(o));
            for (f.textContent = "", p = 0; (o = d[p++]); )
              if (r && E.inArray(o, r) > -1) i && i.push(o);
              else if (
                ((u = ae(o)),
                (s = xe(f.appendChild(o), "script")),
                u && we(s),
                n)
              )
                for (c = 0; (o = s[c++]); ) ye.test(o.type || "") && n.push(o);
            return f;
          }
          var Ee = /^([^.]*)(?:\.(.+)|)/;
          function Ce() {
            return !0;
          }
          function ke() {
            return !1;
          }
          function Ae(e, t) {
            return (
              (e ===
                (function () {
                  try {
                    return b.activeElement;
                  } catch (e) {}
                })()) ==
              ("focus" === t)
            );
          }
          function Se(e, t, n, r, i, o) {
            var s, a;
            if ("object" == typeof t) {
              for (a in ("string" != typeof n && ((r = r || n), (n = void 0)),
              t))
                Se(e, a, n, r, t[a], o);
              return e;
            }
            if (
              (null == r && null == i
                ? ((i = n), (r = n = void 0))
                : null == i &&
                  ("string" == typeof n
                    ? ((i = r), (r = void 0))
                    : ((i = r), (r = n), (n = void 0))),
              !1 === i)
            )
              i = ke;
            else if (!i) return e;
            return (
              1 === o &&
                ((s = i),
                (i = function (e) {
                  return E().off(e), s.apply(this, arguments);
                }),
                (i.guid = s.guid || (s.guid = E.guid++))),
              e.each(function () {
                E.event.add(this, t, i, r, n);
              })
            );
          }
          function De(e, t, n) {
            n
              ? (J.set(e, t, !1),
                E.event.add(e, t, {
                  namespace: !1,
                  handler: function (e) {
                    var r,
                      i,
                      o = J.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                      if (o.length)
                        (E.event.special[t] || {}).delegateType &&
                          e.stopPropagation();
                      else if (
                        ((o = a.call(arguments)),
                        J.set(this, t, o),
                        (r = n(this, t)),
                        this[t](),
                        o !== (i = J.get(this, t)) || r
                          ? J.set(this, t, !1)
                          : (i = {}),
                        o !== i)
                      )
                        return (
                          e.stopImmediatePropagation(),
                          e.preventDefault(),
                          i && i.value
                        );
                    } else
                      o.length &&
                        (J.set(this, t, {
                          value: E.event.trigger(
                            E.extend(o[0], E.Event.prototype),
                            o.slice(1),
                            this
                          ),
                        }),
                        e.stopImmediatePropagation());
                  },
                }))
              : void 0 === J.get(e, t) && E.event.add(e, t, Ce);
          }
          (E.event = {
            global: {},
            add: function (e, t, n, r, i) {
              var o,
                s,
                a,
                l,
                u,
                c,
                f,
                d,
                p,
                h,
                g,
                m = J.get(e);
              if (K(e))
                for (
                  n.handler && ((n = (o = n).handler), (i = o.selector)),
                    i && E.find.matchesSelector(se, i),
                    n.guid || (n.guid = E.guid++),
                    (l = m.events) || (l = m.events = Object.create(null)),
                    (s = m.handle) ||
                      (s = m.handle =
                        function (t) {
                          return void 0 !== E && E.event.triggered !== t.type
                            ? E.event.dispatch.apply(e, arguments)
                            : void 0;
                        }),
                    u = (t = (t || "").match($) || [""]).length;
                  u--;

                )
                  (p = g = (a = Ee.exec(t[u]) || [])[1]),
                    (h = (a[2] || "").split(".").sort()),
                    p &&
                      ((f = E.event.special[p] || {}),
                      (p = (i ? f.delegateType : f.bindType) || p),
                      (f = E.event.special[p] || {}),
                      (c = E.extend(
                        {
                          type: p,
                          origType: g,
                          data: r,
                          handler: n,
                          guid: n.guid,
                          selector: i,
                          needsContext: i && E.expr.match.needsContext.test(i),
                          namespace: h.join("."),
                        },
                        o
                      )),
                      (d = l[p]) ||
                        (((d = l[p] = []).delegateCount = 0),
                        (f.setup && !1 !== f.setup.call(e, r, h, s)) ||
                          (e.addEventListener && e.addEventListener(p, s))),
                      f.add &&
                        (f.add.call(e, c),
                        c.handler.guid || (c.handler.guid = n.guid)),
                      i ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                      (E.event.global[p] = !0));
            },
            remove: function (e, t, n, r, i) {
              var o,
                s,
                a,
                l,
                u,
                c,
                f,
                d,
                p,
                h,
                g,
                m = J.hasData(e) && J.get(e);
              if (m && (l = m.events)) {
                for (u = (t = (t || "").match($) || [""]).length; u--; )
                  if (
                    ((p = g = (a = Ee.exec(t[u]) || [])[1]),
                    (h = (a[2] || "").split(".").sort()),
                    p)
                  ) {
                    for (
                      f = E.event.special[p] || {},
                        d =
                          l[(p = (r ? f.delegateType : f.bindType) || p)] || [],
                        a =
                          a[2] &&
                          new RegExp(
                            "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          ),
                        s = o = d.length;
                      o--;

                    )
                      (c = d[o]),
                        (!i && g !== c.origType) ||
                          (n && n.guid !== c.guid) ||
                          (a && !a.test(c.namespace)) ||
                          (r &&
                            r !== c.selector &&
                            ("**" !== r || !c.selector)) ||
                          (d.splice(o, 1),
                          c.selector && d.delegateCount--,
                          f.remove && f.remove.call(e, c));
                    s &&
                      !d.length &&
                      ((f.teardown && !1 !== f.teardown.call(e, h, m.handle)) ||
                        E.removeEvent(e, p, m.handle),
                      delete l[p]);
                  } else for (p in l) E.event.remove(e, p + t[u], n, r, !0);
                E.isEmptyObject(l) && J.remove(e, "handle events");
              }
            },
            dispatch: function (e) {
              var t,
                n,
                r,
                i,
                o,
                s,
                a = new Array(arguments.length),
                l = E.event.fix(e),
                u =
                  (J.get(this, "events") || Object.create(null))[l.type] || [],
                c = E.event.special[l.type] || {};
              for (a[0] = l, t = 1; t < arguments.length; t++)
                a[t] = arguments[t];
              if (
                ((l.delegateTarget = this),
                !c.preDispatch || !1 !== c.preDispatch.call(this, l))
              ) {
                for (
                  s = E.event.handlers.call(this, l, u), t = 0;
                  (i = s[t++]) && !l.isPropagationStopped();

                )
                  for (
                    l.currentTarget = i.elem, n = 0;
                    (o = i.handlers[n++]) && !l.isImmediatePropagationStopped();

                  )
                    (l.rnamespace &&
                      !1 !== o.namespace &&
                      !l.rnamespace.test(o.namespace)) ||
                      ((l.handleObj = o),
                      (l.data = o.data),
                      void 0 !==
                        (r = (
                          (E.event.special[o.origType] || {}).handle ||
                          o.handler
                        ).apply(i.elem, a)) &&
                        !1 === (l.result = r) &&
                        (l.preventDefault(), l.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, l), l.result;
              }
            },
            handlers: function (e, t) {
              var n,
                r,
                i,
                o,
                s,
                a = [],
                l = t.delegateCount,
                u = e.target;
              if (l && u.nodeType && !("click" === e.type && e.button >= 1))
                for (; u !== this; u = u.parentNode || this)
                  if (
                    1 === u.nodeType &&
                    ("click" !== e.type || !0 !== u.disabled)
                  ) {
                    for (o = [], s = {}, n = 0; n < l; n++)
                      void 0 === s[(i = (r = t[n]).selector + " ")] &&
                        (s[i] = r.needsContext
                          ? E(i, this).index(u) > -1
                          : E.find(i, this, null, [u]).length),
                        s[i] && o.push(r);
                    o.length && a.push({ elem: u, handlers: o });
                  }
              return (
                (u = this),
                l < t.length && a.push({ elem: u, handlers: t.slice(l) }),
                a
              );
            },
            addProp: function (e, t) {
              Object.defineProperty(E.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: v(t)
                  ? function () {
                      if (this.originalEvent) return t(this.originalEvent);
                    }
                  : function () {
                      if (this.originalEvent) return this.originalEvent[e];
                    },
                set: function (t) {
                  Object.defineProperty(this, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t,
                  });
                },
              });
            },
            fix: function (e) {
              return e[E.expando] ? e : new E.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup: function (e) {
                  var t = this || e;
                  return (
                    me.test(t.type) &&
                      t.click &&
                      j(t, "input") &&
                      De(t, "click", Ce),
                    !1
                  );
                },
                trigger: function (e) {
                  var t = this || e;
                  return (
                    me.test(t.type) &&
                      t.click &&
                      j(t, "input") &&
                      De(t, "click"),
                    !0
                  );
                },
                _default: function (e) {
                  var t = e.target;
                  return (
                    (me.test(t.type) &&
                      t.click &&
                      j(t, "input") &&
                      J.get(t, "click")) ||
                    j(t, "a")
                  );
                },
              },
              beforeunload: {
                postDispatch: function (e) {
                  void 0 !== e.result &&
                    e.originalEvent &&
                    (e.originalEvent.returnValue = e.result);
                },
              },
            },
          }),
            (E.removeEvent = function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
            }),
            (E.Event = function (e, t) {
              if (!(this instanceof E.Event)) return new E.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && !1 === e.returnValue)
                      ? Ce
                      : ke),
                  (this.target =
                    e.target && 3 === e.target.nodeType
                      ? e.target.parentNode
                      : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && E.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[E.expando] = !0);
            }),
            (E.Event.prototype = {
              constructor: E.Event,
              isDefaultPrevented: ke,
              isPropagationStopped: ke,
              isImmediatePropagationStopped: ke,
              isSimulated: !1,
              preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = Ce),
                  e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = Ce),
                  e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = Ce),
                  e && !this.isSimulated && e.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            E.each(
              {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
              },
              E.event.addProp
            ),
            E.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              E.event.special[e] = {
                setup: function () {
                  return De(this, e, Ae), !1;
                },
                trigger: function () {
                  return De(this, e), !0;
                },
                _default: function (t) {
                  return J.get(t.target, e);
                },
                delegateType: t,
              };
            }),
            E.each(
              {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
              },
              function (e, t) {
                E.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle: function (e) {
                    var n,
                      r = this,
                      i = e.relatedTarget,
                      o = e.handleObj;
                    return (
                      (i && (i === r || E.contains(r, i))) ||
                        ((e.type = o.origType),
                        (n = o.handler.apply(this, arguments)),
                        (e.type = t)),
                      n
                    );
                  },
                };
              }
            ),
            E.fn.extend({
              on: function (e, t, n, r) {
                return Se(this, e, t, n, r);
              },
              one: function (e, t, n, r) {
                return Se(this, e, t, n, r, 1);
              },
              off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (r = e.handleObj),
                    E(e.delegateTarget).off(
                      r.namespace ? r.origType + "." + r.namespace : r.origType,
                      r.selector,
                      r.handler
                    ),
                    this
                  );
                if ("object" == typeof e) {
                  for (i in e) this.off(i, t, e[i]);
                  return this;
                }
                return (
                  (!1 !== t && "function" != typeof t) ||
                    ((n = t), (t = void 0)),
                  !1 === n && (n = ke),
                  this.each(function () {
                    E.event.remove(this, e, n, t);
                  })
                );
              },
            });
          var je = /<script|<style|<link/i,
            Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ne = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
          function Le(e, t) {
            return (
              (j(e, "table") &&
                j(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                E(e).children("tbody")[0]) ||
              e
            );
          }
          function Ze(e) {
            return (
              (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
            );
          }
          function Pe(e) {
            return (
              "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
              e
            );
          }
          function Me(e, t) {
            var n, r, i, o, s, a;
            if (1 === t.nodeType) {
              if (J.hasData(e) && (a = J.get(e).events))
                for (i in (J.remove(t, "handle events"), a))
                  for (n = 0, r = a[i].length; n < r; n++)
                    E.event.add(t, i, a[i][n]);
              G.hasData(e) &&
                ((o = G.access(e)), (s = E.extend({}, o)), G.set(t, s));
            }
          }
          function qe(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && me.test(e.type)
              ? (t.checked = e.checked)
              : ("input" !== n && "textarea" !== n) ||
                (t.defaultValue = e.defaultValue);
          }
          function $e(e, t, n, r) {
            t = l(t);
            var i,
              o,
              s,
              a,
              u,
              c,
              f = 0,
              d = e.length,
              p = d - 1,
              h = t[0],
              g = v(h);
            if (
              g ||
              (d > 1 && "string" == typeof h && !m.checkClone && Oe.test(h))
            )
              return e.each(function (i) {
                var o = e.eq(i);
                g && (t[0] = h.call(this, i, o.html())), $e(o, t, n, r);
              });
            if (
              d &&
              ((o = (i = Te(t, e[0].ownerDocument, !1, e, r)).firstChild),
              1 === i.childNodes.length && (i = o),
              o || r)
            ) {
              for (a = (s = E.map(xe(i, "script"), Ze)).length; f < d; f++)
                (u = i),
                  f !== p &&
                    ((u = E.clone(u, !0, !0)),
                    a && E.merge(s, xe(u, "script"))),
                  n.call(e[f], u, f);
              if (a)
                for (
                  c = s[s.length - 1].ownerDocument, E.map(s, Pe), f = 0;
                  f < a;
                  f++
                )
                  (u = s[f]),
                    ye.test(u.type || "") &&
                      !J.access(u, "globalEval") &&
                      E.contains(c, u) &&
                      (u.src && "module" !== (u.type || "").toLowerCase()
                        ? E._evalUrl &&
                          !u.noModule &&
                          E._evalUrl(
                            u.src,
                            { nonce: u.nonce || u.getAttribute("nonce") },
                            c
                          )
                        : w(u.textContent.replace(Ne, ""), u, c));
            }
            return e;
          }
          function Ie(e, t, n) {
            for (
              var r, i = t ? E.filter(t, e) : e, o = 0;
              null != (r = i[o]);
              o++
            )
              n || 1 !== r.nodeType || E.cleanData(xe(r)),
                r.parentNode &&
                  (n && ae(r) && we(xe(r, "script")),
                  r.parentNode.removeChild(r));
            return e;
          }
          E.extend({
            htmlPrefilter: function (e) {
              return e;
            },
            clone: function (e, t, n) {
              var r,
                i,
                o,
                s,
                a = e.cloneNode(!0),
                l = ae(e);
              if (
                !(
                  m.noCloneChecked ||
                  (1 !== e.nodeType && 11 !== e.nodeType) ||
                  E.isXMLDoc(e)
                )
              )
                for (s = xe(a), r = 0, i = (o = xe(e)).length; r < i; r++)
                  qe(o[r], s[r]);
              if (t)
                if (n)
                  for (
                    o = o || xe(e), s = s || xe(a), r = 0, i = o.length;
                    r < i;
                    r++
                  )
                    Me(o[r], s[r]);
                else Me(e, a);
              return (
                (s = xe(a, "script")).length > 0 &&
                  we(s, !l && xe(e, "script")),
                a
              );
            },
            cleanData: function (e) {
              for (
                var t, n, r, i = E.event.special, o = 0;
                void 0 !== (n = e[o]);
                o++
              )
                if (K(n)) {
                  if ((t = n[J.expando])) {
                    if (t.events)
                      for (r in t.events)
                        i[r]
                          ? E.event.remove(n, r)
                          : E.removeEvent(n, r, t.handle);
                    n[J.expando] = void 0;
                  }
                  n[G.expando] && (n[G.expando] = void 0);
                }
            },
          }),
            E.fn.extend({
              detach: function (e) {
                return Ie(this, e, !0);
              },
              remove: function (e) {
                return Ie(this, e);
              },
              text: function (e) {
                return V(
                  this,
                  function (e) {
                    return void 0 === e
                      ? E.text(this)
                      : this.empty().each(function () {
                          (1 !== this.nodeType &&
                            11 !== this.nodeType &&
                            9 !== this.nodeType) ||
                            (this.textContent = e);
                        });
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              append: function () {
                return $e(this, arguments, function (e) {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    Le(this, e).appendChild(e);
                });
              },
              prepend: function () {
                return $e(this, arguments, function (e) {
                  if (
                    1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType
                  ) {
                    var t = Le(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before: function () {
                return $e(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function () {
                return $e(this, arguments, function (e) {
                  this.parentNode &&
                    this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                  1 === e.nodeType &&
                    (E.cleanData(xe(e, !1)), (e.textContent = ""));
                return this;
              },
              clone: function (e, t) {
                return (
                  (e = null != e && e),
                  (t = null == t ? e : t),
                  this.map(function () {
                    return E.clone(this, e, t);
                  })
                );
              },
              html: function (e) {
                return V(
                  this,
                  function (e) {
                    var t = this[0] || {},
                      n = 0,
                      r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if (
                      "string" == typeof e &&
                      !je.test(e) &&
                      !be[(ve.exec(e) || ["", ""])[1].toLowerCase()]
                    ) {
                      e = E.htmlPrefilter(e);
                      try {
                        for (; n < r; n++)
                          1 === (t = this[n] || {}).nodeType &&
                            (E.cleanData(xe(t, !1)), (t.innerHTML = e));
                        t = 0;
                      } catch (e) {}
                    }
                    t && this.empty().append(e);
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              replaceWith: function () {
                var e = [];
                return $e(
                  this,
                  arguments,
                  function (t) {
                    var n = this.parentNode;
                    E.inArray(this, e) < 0 &&
                      (E.cleanData(xe(this)), n && n.replaceChild(t, this));
                  },
                  e
                );
              },
            }),
            E.each(
              {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
              },
              function (e, t) {
                E.fn[e] = function (e) {
                  for (
                    var n, r = [], i = E(e), o = i.length - 1, s = 0;
                    s <= o;
                    s++
                  )
                    (n = s === o ? this : this.clone(!0)),
                      E(i[s])[t](n),
                      u.apply(r, n.get());
                  return this.pushStack(r);
                };
              }
            );
          var Re = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
            He = /^--/,
            Fe = function (e) {
              var t = e.ownerDocument.defaultView;
              return (t && t.opener) || (t = r), t.getComputedStyle(e);
            },
            We = function (e, t, n) {
              var r,
                i,
                o = {};
              for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
              for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
              return r;
            },
            Be = new RegExp(oe.join("|"), "i"),
            Ve = "[\\x20\\t\\r\\n\\f]",
            ze = new RegExp(
              "^" + Ve + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Ve + "+$",
              "g"
            );
          function Xe(e, t, n) {
            var r,
              i,
              o,
              s,
              a = He.test(t),
              l = e.style;
            return (
              (n = n || Fe(e)) &&
                ((s = n.getPropertyValue(t) || n[t]),
                a && s && (s = s.replace(ze, "$1") || void 0),
                "" !== s || ae(e) || (s = E.style(e, t)),
                !m.pixelBoxStyles() &&
                  Re.test(s) &&
                  Be.test(t) &&
                  ((r = l.width),
                  (i = l.minWidth),
                  (o = l.maxWidth),
                  (l.minWidth = l.maxWidth = l.width = s),
                  (s = n.width),
                  (l.width = r),
                  (l.minWidth = i),
                  (l.maxWidth = o))),
              void 0 !== s ? s + "" : s
            );
          }
          function Ue(e, t) {
            return {
              get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              },
            };
          }
          !(function () {
            function e() {
              if (c) {
                (u.style.cssText =
                  "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                  (c.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                  se.appendChild(u).appendChild(c);
                var e = r.getComputedStyle(c);
                (n = "1%" !== e.top),
                  (l = 12 === t(e.marginLeft)),
                  (c.style.right = "60%"),
                  (s = 36 === t(e.right)),
                  (i = 36 === t(e.width)),
                  (c.style.position = "absolute"),
                  (o = 12 === t(c.offsetWidth / 3)),
                  se.removeChild(u),
                  (c = null);
              }
            }
            function t(e) {
              return Math.round(parseFloat(e));
            }
            var n,
              i,
              o,
              s,
              a,
              l,
              u = b.createElement("div"),
              c = b.createElement("div");
            c.style &&
              ((c.style.backgroundClip = "content-box"),
              (c.cloneNode(!0).style.backgroundClip = ""),
              (m.clearCloneStyle = "content-box" === c.style.backgroundClip),
              E.extend(m, {
                boxSizingReliable: function () {
                  return e(), i;
                },
                pixelBoxStyles: function () {
                  return e(), s;
                },
                pixelPosition: function () {
                  return e(), n;
                },
                reliableMarginLeft: function () {
                  return e(), l;
                },
                scrollboxSize: function () {
                  return e(), o;
                },
                reliableTrDimensions: function () {
                  var e, t, n, i;
                  return (
                    null == a &&
                      ((e = b.createElement("table")),
                      (t = b.createElement("tr")),
                      (n = b.createElement("div")),
                      (e.style.cssText =
                        "position:absolute;left:-11111px;border-collapse:separate"),
                      (t.style.cssText = "border:1px solid"),
                      (t.style.height = "1px"),
                      (n.style.height = "9px"),
                      (n.style.display = "block"),
                      se.appendChild(e).appendChild(t).appendChild(n),
                      (i = r.getComputedStyle(t)),
                      (a =
                        parseInt(i.height, 10) +
                          parseInt(i.borderTopWidth, 10) +
                          parseInt(i.borderBottomWidth, 10) ===
                        t.offsetHeight),
                      se.removeChild(e)),
                    a
                  );
                },
              }));
          })();
          var Ye = ["Webkit", "Moz", "ms"],
            Ke = b.createElement("div").style,
            Qe = {};
          function Je(e) {
            return (
              E.cssProps[e] ||
              Qe[e] ||
              (e in Ke
                ? e
                : (Qe[e] =
                    (function (e) {
                      for (
                        var t = e[0].toUpperCase() + e.slice(1), n = Ye.length;
                        n--;

                      )
                        if ((e = Ye[n] + t) in Ke) return e;
                    })(e) || e))
            );
          }
          var Ge = /^(none|table(?!-c[ea]).+)/,
            et = {
              position: "absolute",
              visibility: "hidden",
              display: "block",
            },
            tt = { letterSpacing: "0", fontWeight: "400" };
          function nt(e, t, n) {
            var r = ie.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
          }
          function rt(e, t, n, r, i, o) {
            var s = "width" === t ? 1 : 0,
              a = 0,
              l = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; s < 4; s += 2)
              "margin" === n && (l += E.css(e, n + oe[s], !0, i)),
                r
                  ? ("content" === n &&
                      (l -= E.css(e, "padding" + oe[s], !0, i)),
                    "margin" !== n &&
                      (l -= E.css(e, "border" + oe[s] + "Width", !0, i)))
                  : ((l += E.css(e, "padding" + oe[s], !0, i)),
                    "padding" !== n
                      ? (l += E.css(e, "border" + oe[s] + "Width", !0, i))
                      : (a += E.css(e, "border" + oe[s] + "Width", !0, i)));
            return (
              !r &&
                o >= 0 &&
                (l +=
                  Math.max(
                    0,
                    Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        o -
                        l -
                        a -
                        0.5
                    )
                  ) || 0),
              l
            );
          }
          function it(e, t, n) {
            var r = Fe(e),
              i =
                (!m.boxSizingReliable() || n) &&
                "border-box" === E.css(e, "boxSizing", !1, r),
              o = i,
              s = Xe(e, t, r),
              a = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Re.test(s)) {
              if (!n) return s;
              s = "auto";
            }
            return (
              ((!m.boxSizingReliable() && i) ||
                (!m.reliableTrDimensions() && j(e, "tr")) ||
                "auto" === s ||
                (!parseFloat(s) && "inline" === E.css(e, "display", !1, r))) &&
                e.getClientRects().length &&
                ((i = "border-box" === E.css(e, "boxSizing", !1, r)),
                (o = a in e) && (s = e[a])),
              (s = parseFloat(s) || 0) +
                rt(e, t, n || (i ? "border" : "content"), o, r, s) +
                "px"
            );
          }
          function ot(e, t, n, r, i) {
            return new ot.prototype.init(e, t, n, r, i);
          }
          E.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    var n = Xe(e, "opacity");
                    return "" === n ? "1" : n;
                  }
                },
              },
            },
            cssNumber: {
              animationIterationCount: !0,
              columnCount: !0,
              fillOpacity: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
            },
            cssProps: {},
            style: function (e, t, n, r) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                  o,
                  s,
                  a = Y(t),
                  l = He.test(t),
                  u = e.style;
                if (
                  (l || (t = Je(a)),
                  (s = E.cssHooks[t] || E.cssHooks[a]),
                  void 0 === n)
                )
                  return s && "get" in s && void 0 !== (i = s.get(e, !1, r))
                    ? i
                    : u[t];
                "string" == (o = typeof n) &&
                  (i = ie.exec(n)) &&
                  i[1] &&
                  ((n = ce(e, t, i)), (o = "number")),
                  null != n &&
                    n == n &&
                    ("number" !== o ||
                      l ||
                      (n += (i && i[3]) || (E.cssNumber[a] ? "" : "px")),
                    m.clearCloneStyle ||
                      "" !== n ||
                      0 !== t.indexOf("background") ||
                      (u[t] = "inherit"),
                    (s && "set" in s && void 0 === (n = s.set(e, n, r))) ||
                      (l ? u.setProperty(t, n) : (u[t] = n)));
              }
            },
            css: function (e, t, n, r) {
              var i,
                o,
                s,
                a = Y(t);
              return (
                He.test(t) || (t = Je(a)),
                (s = E.cssHooks[t] || E.cssHooks[a]) &&
                  "get" in s &&
                  (i = s.get(e, !0, n)),
                void 0 === i && (i = Xe(e, t, r)),
                "normal" === i && t in tt && (i = tt[t]),
                "" === n || n
                  ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
                  : i
              );
            },
          }),
            E.each(["height", "width"], function (e, t) {
              E.cssHooks[t] = {
                get: function (e, n, r) {
                  if (n)
                    return !Ge.test(E.css(e, "display")) ||
                      (e.getClientRects().length &&
                        e.getBoundingClientRect().width)
                      ? it(e, t, r)
                      : We(e, et, function () {
                          return it(e, t, r);
                        });
                },
                set: function (e, n, r) {
                  var i,
                    o = Fe(e),
                    s = !m.scrollboxSize() && "absolute" === o.position,
                    a =
                      (s || r) && "border-box" === E.css(e, "boxSizing", !1, o),
                    l = r ? rt(e, t, r, a, o) : 0;
                  return (
                    a &&
                      s &&
                      (l -= Math.ceil(
                        e["offset" + t[0].toUpperCase() + t.slice(1)] -
                          parseFloat(o[t]) -
                          rt(e, t, "border", !1, o) -
                          0.5
                      )),
                    l &&
                      (i = ie.exec(n)) &&
                      "px" !== (i[3] || "px") &&
                      ((e.style[t] = n), (n = E.css(e, t))),
                    nt(0, n, l)
                  );
                },
              };
            }),
            (E.cssHooks.marginLeft = Ue(m.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat(Xe(e, "marginLeft")) ||
                    e.getBoundingClientRect().left -
                      We(e, { marginLeft: 0 }, function () {
                        return e.getBoundingClientRect().left;
                      })) + "px"
                );
            })),
            E.each(
              { margin: "", padding: "", border: "Width" },
              function (e, t) {
                (E.cssHooks[e + t] = {
                  expand: function (n) {
                    for (
                      var r = 0,
                        i = {},
                        o = "string" == typeof n ? n.split(" ") : [n];
                      r < 4;
                      r++
                    )
                      i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                    return i;
                  },
                }),
                  "margin" !== e && (E.cssHooks[e + t].set = nt);
              }
            ),
            E.fn.extend({
              css: function (e, t) {
                return V(
                  this,
                  function (e, t, n) {
                    var r,
                      i,
                      o = {},
                      s = 0;
                    if (Array.isArray(t)) {
                      for (r = Fe(e), i = t.length; s < i; s++)
                        o[t[s]] = E.css(e, t[s], !1, r);
                      return o;
                    }
                    return void 0 !== n ? E.style(e, t, n) : E.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1
                );
              },
            }),
            (E.Tween = ot),
            (ot.prototype = {
              constructor: ot,
              init: function (e, t, n, r, i, o) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = i || E.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = r),
                  (this.unit = o || (E.cssNumber[n] ? "" : "px"));
              },
              cur: function () {
                var e = ot.propHooks[this.prop];
                return e && e.get
                  ? e.get(this)
                  : ot.propHooks._default.get(this);
              },
              run: function (e) {
                var t,
                  n = ot.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t =
                        E.easing[this.easing](
                          e,
                          this.options.duration * e,
                          0,
                          1,
                          this.options.duration
                        ))
                    : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                  n && n.set ? n.set(this) : ot.propHooks._default.set(this),
                  this
                );
              },
            }),
            (ot.prototype.init.prototype = ot.prototype),
            (ot.propHooks = {
              _default: {
                get: function (e) {
                  var t;
                  return 1 !== e.elem.nodeType ||
                    (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                    ? e.elem[e.prop]
                    : (t = E.css(e.elem, e.prop, "")) && "auto" !== t
                    ? t
                    : 0;
                },
                set: function (e) {
                  E.fx.step[e.prop]
                    ? E.fx.step[e.prop](e)
                    : 1 !== e.elem.nodeType ||
                      (!E.cssHooks[e.prop] && null == e.elem.style[Je(e.prop)])
                    ? (e.elem[e.prop] = e.now)
                    : E.style(e.elem, e.prop, e.now + e.unit);
                },
              },
            }),
            (ot.propHooks.scrollTop = ot.propHooks.scrollLeft =
              {
                set: function (e) {
                  e.elem.nodeType &&
                    e.elem.parentNode &&
                    (e.elem[e.prop] = e.now);
                },
              }),
            (E.easing = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: "swing",
            }),
            (E.fx = ot.prototype.init),
            (E.fx.step = {});
          var st,
            at,
            lt = /^(?:toggle|show|hide)$/,
            ut = /queueHooks$/;
          function ct() {
            at &&
              (!1 === b.hidden && r.requestAnimationFrame
                ? r.requestAnimationFrame(ct)
                : r.setTimeout(ct, E.fx.interval),
              E.fx.tick());
          }
          function ft() {
            return (
              r.setTimeout(function () {
                st = void 0;
              }),
              (st = Date.now())
            );
          }
          function dt(e, t) {
            var n,
              r = 0,
              i = { height: e };
            for (t = t ? 1 : 0; r < 4; r += 2 - t)
              i["margin" + (n = oe[r])] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i;
          }
          function pt(e, t, n) {
            for (
              var r,
                i = (ht.tweeners[t] || []).concat(ht.tweeners["*"]),
                o = 0,
                s = i.length;
              o < s;
              o++
            )
              if ((r = i[o].call(n, t, e))) return r;
          }
          function ht(e, t, n) {
            var r,
              i,
              o = 0,
              s = ht.prefilters.length,
              a = E.Deferred().always(function () {
                delete l.elem;
              }),
              l = function () {
                if (i) return !1;
                for (
                  var t = st || ft(),
                    n = Math.max(0, u.startTime + u.duration - t),
                    r = 1 - (n / u.duration || 0),
                    o = 0,
                    s = u.tweens.length;
                  o < s;
                  o++
                )
                  u.tweens[o].run(r);
                return (
                  a.notifyWith(e, [u, r, n]),
                  r < 1 && s
                    ? n
                    : (s || a.notifyWith(e, [u, 1, 0]),
                      a.resolveWith(e, [u]),
                      !1)
                );
              },
              u = a.promise({
                elem: e,
                props: E.extend({}, t),
                opts: E.extend(
                  !0,
                  { specialEasing: {}, easing: E.easing._default },
                  n
                ),
                originalProperties: t,
                originalOptions: n,
                startTime: st || ft(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                  var r = E.Tween(
                    e,
                    u.opts,
                    t,
                    n,
                    u.opts.specialEasing[t] || u.opts.easing
                  );
                  return u.tweens.push(r), r;
                },
                stop: function (t) {
                  var n = 0,
                    r = t ? u.tweens.length : 0;
                  if (i) return this;
                  for (i = !0; n < r; n++) u.tweens[n].run(1);
                  return (
                    t
                      ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t]))
                      : a.rejectWith(e, [u, t]),
                    this
                  );
                },
              }),
              c = u.props;
            for (
              (function (e, t) {
                var n, r, i, o, s;
                for (n in e)
                  if (
                    ((i = t[(r = Y(n))]),
                    (o = e[n]),
                    Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                    n !== r && ((e[r] = o), delete e[n]),
                    (s = E.cssHooks[r]) && ("expand" in s))
                  )
                    for (n in ((o = s.expand(o)), delete e[r], o))
                      (n in e) || ((e[n] = o[n]), (t[n] = i));
                  else t[r] = i;
              })(c, u.opts.specialEasing);
              o < s;
              o++
            )
              if ((r = ht.prefilters[o].call(u, e, c, u.opts)))
                return (
                  v(r.stop) &&
                    (E._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r)),
                  r
                );
            return (
              E.map(c, pt, u),
              v(u.opts.start) && u.opts.start.call(e, u),
              u
                .progress(u.opts.progress)
                .done(u.opts.done, u.opts.complete)
                .fail(u.opts.fail)
                .always(u.opts.always),
              E.fx.timer(
                E.extend(l, { elem: e, anim: u, queue: u.opts.queue })
              ),
              u
            );
          }
          (E.Animation = E.extend(ht, {
            tweeners: {
              "*": [
                function (e, t) {
                  var n = this.createTween(e, t);
                  return ce(n.elem, e, ie.exec(t), n), n;
                },
              ],
            },
            tweener: function (e, t) {
              v(e) ? ((t = e), (e = ["*"])) : (e = e.match($));
              for (var n, r = 0, i = e.length; r < i; r++)
                (n = e[r]),
                  (ht.tweeners[n] = ht.tweeners[n] || []),
                  ht.tweeners[n].unshift(t);
            },
            prefilters: [
              function (e, t, n) {
                var r,
                  i,
                  o,
                  s,
                  a,
                  l,
                  u,
                  c,
                  f = "width" in t || "height" in t,
                  d = this,
                  p = {},
                  h = e.style,
                  g = e.nodeType && ue(e),
                  m = J.get(e, "fxshow");
                for (r in (n.queue ||
                  (null == (s = E._queueHooks(e, "fx")).unqueued &&
                    ((s.unqueued = 0),
                    (a = s.empty.fire),
                    (s.empty.fire = function () {
                      s.unqueued || a();
                    })),
                  s.unqueued++,
                  d.always(function () {
                    d.always(function () {
                      s.unqueued--, E.queue(e, "fx").length || s.empty.fire();
                    });
                  })),
                t))
                  if (((i = t[r]), lt.test(i))) {
                    if (
                      (delete t[r],
                      (o = o || "toggle" === i),
                      i === (g ? "hide" : "show"))
                    ) {
                      if ("show" !== i || !m || void 0 === m[r]) continue;
                      g = !0;
                    }
                    p[r] = (m && m[r]) || E.style(e, r);
                  }
                if ((l = !E.isEmptyObject(t)) || !E.isEmptyObject(p))
                  for (r in (f &&
                    1 === e.nodeType &&
                    ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                    null == (u = m && m.display) && (u = J.get(e, "display")),
                    "none" === (c = E.css(e, "display")) &&
                      (u
                        ? (c = u)
                        : (pe([e], !0),
                          (u = e.style.display || u),
                          (c = E.css(e, "display")),
                          pe([e]))),
                    ("inline" === c || ("inline-block" === c && null != u)) &&
                      "none" === E.css(e, "float") &&
                      (l ||
                        (d.done(function () {
                          h.display = u;
                        }),
                        null == u &&
                          ((c = h.display), (u = "none" === c ? "" : c))),
                      (h.display = "inline-block"))),
                  n.overflow &&
                    ((h.overflow = "hidden"),
                    d.always(function () {
                      (h.overflow = n.overflow[0]),
                        (h.overflowX = n.overflow[1]),
                        (h.overflowY = n.overflow[2]);
                    })),
                  (l = !1),
                  p))
                    l ||
                      (m
                        ? "hidden" in m && (g = m.hidden)
                        : (m = J.access(e, "fxshow", { display: u })),
                      o && (m.hidden = !g),
                      g && pe([e], !0),
                      d.done(function () {
                        for (r in (g || pe([e]), J.remove(e, "fxshow"), p))
                          E.style(e, r, p[r]);
                      })),
                      (l = pt(g ? m[r] : 0, r, d)),
                      r in m ||
                        ((m[r] = l.start),
                        g && ((l.end = l.start), (l.start = 0)));
              },
            ],
            prefilter: function (e, t) {
              t ? ht.prefilters.unshift(e) : ht.prefilters.push(e);
            },
          })),
            (E.speed = function (e, t, n) {
              var r =
                e && "object" == typeof e
                  ? E.extend({}, e)
                  : {
                      complete: n || (!n && t) || (v(e) && e),
                      duration: e,
                      easing: (n && t) || (t && !v(t) && t),
                    };
              return (
                E.fx.off
                  ? (r.duration = 0)
                  : "number" != typeof r.duration &&
                    (r.duration in E.fx.speeds
                      ? (r.duration = E.fx.speeds[r.duration])
                      : (r.duration = E.fx.speeds._default)),
                (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                (r.old = r.complete),
                (r.complete = function () {
                  v(r.old) && r.old.call(this),
                    r.queue && E.dequeue(this, r.queue);
                }),
                r
              );
            }),
            E.fn.extend({
              fadeTo: function (e, t, n, r) {
                return this.filter(ue)
                  .css("opacity", 0)
                  .show()
                  .end()
                  .animate({ opacity: t }, e, n, r);
              },
              animate: function (e, t, n, r) {
                var i = E.isEmptyObject(e),
                  o = E.speed(t, n, r),
                  s = function () {
                    var t = ht(this, E.extend({}, e), o);
                    (i || J.get(this, "finish")) && t.stop(!0);
                  };
                return (
                  (s.finish = s),
                  i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
                );
              },
              stop: function (e, t, n) {
                var r = function (e) {
                  var t = e.stop;
                  delete e.stop, t(n);
                };
                return (
                  "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                  t && this.queue(e || "fx", []),
                  this.each(function () {
                    var t = !0,
                      i = null != e && e + "queueHooks",
                      o = E.timers,
                      s = J.get(this);
                    if (i) s[i] && s[i].stop && r(s[i]);
                    else
                      for (i in s) s[i] && s[i].stop && ut.test(i) && r(s[i]);
                    for (i = o.length; i--; )
                      o[i].elem !== this ||
                        (null != e && o[i].queue !== e) ||
                        (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                    (!t && n) || E.dequeue(this, e);
                  })
                );
              },
              finish: function (e) {
                return (
                  !1 !== e && (e = e || "fx"),
                  this.each(function () {
                    var t,
                      n = J.get(this),
                      r = n[e + "queue"],
                      i = n[e + "queueHooks"],
                      o = E.timers,
                      s = r ? r.length : 0;
                    for (
                      n.finish = !0,
                        E.queue(this, e, []),
                        i && i.stop && i.stop.call(this, !0),
                        t = o.length;
                      t--;

                    )
                      o[t].elem === this &&
                        o[t].queue === e &&
                        (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < s; t++)
                      r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish;
                  })
                );
              },
            }),
            E.each(["toggle", "show", "hide"], function (e, t) {
              var n = E.fn[t];
              E.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e
                  ? n.apply(this, arguments)
                  : this.animate(dt(t, !0), e, r, i);
              };
            }),
            E.each(
              {
                slideDown: dt("show"),
                slideUp: dt("hide"),
                slideToggle: dt("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
              },
              function (e, t) {
                E.fn[e] = function (e, n, r) {
                  return this.animate(t, e, n, r);
                };
              }
            ),
            (E.timers = []),
            (E.fx.tick = function () {
              var e,
                t = 0,
                n = E.timers;
              for (st = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
              n.length || E.fx.stop(), (st = void 0);
            }),
            (E.fx.timer = function (e) {
              E.timers.push(e), E.fx.start();
            }),
            (E.fx.interval = 13),
            (E.fx.start = function () {
              at || ((at = !0), ct());
            }),
            (E.fx.stop = function () {
              at = null;
            }),
            (E.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (E.fn.delay = function (e, t) {
              return (
                (e = (E.fx && E.fx.speeds[e]) || e),
                (t = t || "fx"),
                this.queue(t, function (t, n) {
                  var i = r.setTimeout(t, e);
                  n.stop = function () {
                    r.clearTimeout(i);
                  };
                })
              );
            }),
            (function () {
              var e = b.createElement("input"),
                t = b
                  .createElement("select")
                  .appendChild(b.createElement("option"));
              (e.type = "checkbox"),
                (m.checkOn = "" !== e.value),
                (m.optSelected = t.selected),
                ((e = b.createElement("input")).value = "t"),
                (e.type = "radio"),
                (m.radioValue = "t" === e.value);
            })();
          var gt,
            mt = E.expr.attrHandle;
          E.fn.extend({
            attr: function (e, t) {
              return V(this, E.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
              return this.each(function () {
                E.removeAttr(this, e);
              });
            },
          }),
            E.extend({
              attr: function (e, t, n) {
                var r,
                  i,
                  o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                  return void 0 === e.getAttribute
                    ? E.prop(e, t, n)
                    : ((1 === o && E.isXMLDoc(e)) ||
                        (i =
                          E.attrHooks[t.toLowerCase()] ||
                          (E.expr.match.bool.test(t) ? gt : void 0)),
                      void 0 !== n
                        ? null === n
                          ? void E.removeAttr(e, t)
                          : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                          ? r
                          : (e.setAttribute(t, n + ""), n)
                        : i && "get" in i && null !== (r = i.get(e, t))
                        ? r
                        : null == (r = E.find.attr(e, t))
                        ? void 0
                        : r);
              },
              attrHooks: {
                type: {
                  set: function (e, t) {
                    if (!m.radioValue && "radio" === t && j(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                  },
                },
              },
              removeAttr: function (e, t) {
                var n,
                  r = 0,
                  i = t && t.match($);
                if (i && 1 === e.nodeType)
                  for (; (n = i[r++]); ) e.removeAttribute(n);
              },
            }),
            (gt = {
              set: function (e, t, n) {
                return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n;
              },
            }),
            E.each(E.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var n = mt[t] || E.find.attr;
              mt[t] = function (e, t, r) {
                var i,
                  o,
                  s = t.toLowerCase();
                return (
                  r ||
                    ((o = mt[s]),
                    (mt[s] = i),
                    (i = null != n(e, t, r) ? s : null),
                    (mt[s] = o)),
                  i
                );
              };
            });
          var vt = /^(?:input|select|textarea|button)$/i,
            yt = /^(?:a|area)$/i;
          function bt(e) {
            return (e.match($) || []).join(" ");
          }
          function xt(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
          }
          function wt(e) {
            return Array.isArray(e)
              ? e
              : ("string" == typeof e && e.match($)) || [];
          }
          E.fn.extend({
            prop: function (e, t) {
              return V(this, E.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[E.propFix[e] || e];
              });
            },
          }),
            E.extend({
              prop: function (e, t, n) {
                var r,
                  i,
                  o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                  return (
                    (1 === o && E.isXMLDoc(e)) ||
                      ((t = E.propFix[t] || t), (i = E.propHooks[t])),
                    void 0 !== n
                      ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                        ? r
                        : (e[t] = n)
                      : i && "get" in i && null !== (r = i.get(e, t))
                      ? r
                      : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (e) {
                    var t = E.find.attr(e, "tabindex");
                    return t
                      ? parseInt(t, 10)
                      : vt.test(e.nodeName) || (yt.test(e.nodeName) && e.href)
                      ? 0
                      : -1;
                  },
                },
              },
              propFix: { for: "htmlFor", class: "className" },
            }),
            m.optSelected ||
              (E.propHooks.selected = {
                get: function (e) {
                  var t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                  var t = e.parentNode;
                  t &&
                    (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex);
                },
              }),
            E.each(
              [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
              ],
              function () {
                E.propFix[this.toLowerCase()] = this;
              }
            ),
            E.fn.extend({
              addClass: function (e) {
                var t, n, r, i, o, s;
                return v(e)
                  ? this.each(function (t) {
                      E(this).addClass(e.call(this, t, xt(this)));
                    })
                  : (t = wt(e)).length
                  ? this.each(function () {
                      if (
                        ((r = xt(this)),
                        (n = 1 === this.nodeType && " " + bt(r) + " "))
                      ) {
                        for (o = 0; o < t.length; o++)
                          (i = t[o]),
                            n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                        (s = bt(n)), r !== s && this.setAttribute("class", s);
                      }
                    })
                  : this;
              },
              removeClass: function (e) {
                var t, n, r, i, o, s;
                return v(e)
                  ? this.each(function (t) {
                      E(this).removeClass(e.call(this, t, xt(this)));
                    })
                  : arguments.length
                  ? (t = wt(e)).length
                    ? this.each(function () {
                        if (
                          ((r = xt(this)),
                          (n = 1 === this.nodeType && " " + bt(r) + " "))
                        ) {
                          for (o = 0; o < t.length; o++)
                            for (i = t[o]; n.indexOf(" " + i + " ") > -1; )
                              n = n.replace(" " + i + " ", " ");
                          (s = bt(n)), r !== s && this.setAttribute("class", s);
                        }
                      })
                    : this
                  : this.attr("class", "");
              },
              toggleClass: function (e, t) {
                var n,
                  r,
                  i,
                  o,
                  s = typeof e,
                  a = "string" === s || Array.isArray(e);
                return v(e)
                  ? this.each(function (n) {
                      E(this).toggleClass(e.call(this, n, xt(this), t), t);
                    })
                  : "boolean" == typeof t && a
                  ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                  : ((n = wt(e)),
                    this.each(function () {
                      if (a)
                        for (o = E(this), i = 0; i < n.length; i++)
                          (r = n[i]),
                            o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                      else
                        (void 0 !== e && "boolean" !== s) ||
                          ((r = xt(this)) && J.set(this, "__className__", r),
                          this.setAttribute &&
                            this.setAttribute(
                              "class",
                              r || !1 === e
                                ? ""
                                : J.get(this, "__className__") || ""
                            ));
                    }));
              },
              hasClass: function (e) {
                var t,
                  n,
                  r = 0;
                for (t = " " + e + " "; (n = this[r++]); )
                  if (
                    1 === n.nodeType &&
                    (" " + bt(xt(n)) + " ").indexOf(t) > -1
                  )
                    return !0;
                return !1;
              },
            });
          var _t = /\r/g;
          E.fn.extend({
            val: function (e) {
              var t,
                n,
                r,
                i = this[0];
              return arguments.length
                ? ((r = v(e)),
                  this.each(function (n) {
                    var i;
                    1 === this.nodeType &&
                      (null == (i = r ? e.call(this, n, E(this).val()) : e)
                        ? (i = "")
                        : "number" == typeof i
                        ? (i += "")
                        : Array.isArray(i) &&
                          (i = E.map(i, function (e) {
                            return null == e ? "" : e + "";
                          })),
                      ((t =
                        E.valHooks[this.type] ||
                        E.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in t &&
                        void 0 !== t.set(this, i, "value")) ||
                        (this.value = i));
                  }))
                : i
                ? (t =
                    E.valHooks[i.type] ||
                    E.valHooks[i.nodeName.toLowerCase()]) &&
                  "get" in t &&
                  void 0 !== (n = t.get(i, "value"))
                  ? n
                  : "string" == typeof (n = i.value)
                  ? n.replace(_t, "")
                  : null == n
                  ? ""
                  : n
                : void 0;
            },
          }),
            E.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = E.find.attr(e, "value");
                    return null != t ? t : bt(E.text(e));
                  },
                },
                select: {
                  get: function (e) {
                    var t,
                      n,
                      r,
                      i = e.options,
                      o = e.selectedIndex,
                      s = "select-one" === e.type,
                      a = s ? null : [],
                      l = s ? o + 1 : i.length;
                    for (r = o < 0 ? l : s ? o : 0; r < l; r++)
                      if (
                        ((n = i[r]).selected || r === o) &&
                        !n.disabled &&
                        (!n.parentNode.disabled || !j(n.parentNode, "optgroup"))
                      ) {
                        if (((t = E(n).val()), s)) return t;
                        a.push(t);
                      }
                    return a;
                  },
                  set: function (e, t) {
                    for (
                      var n, r, i = e.options, o = E.makeArray(t), s = i.length;
                      s--;

                    )
                      ((r = i[s]).selected =
                        E.inArray(E.valHooks.option.get(r), o) > -1) &&
                        (n = !0);
                    return n || (e.selectedIndex = -1), o;
                  },
                },
              },
            }),
            E.each(["radio", "checkbox"], function () {
              (E.valHooks[this] = {
                set: function (e, t) {
                  if (Array.isArray(t))
                    return (e.checked = E.inArray(E(e).val(), t) > -1);
                },
              }),
                m.checkOn ||
                  (E.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                  });
            }),
            (m.focusin = "onfocusin" in r);
          var Tt = /^(?:focusinfocus|focusoutblur)$/,
            Et = function (e) {
              e.stopPropagation();
            };
          E.extend(E.event, {
            trigger: function (e, t, n, i) {
              var o,
                s,
                a,
                l,
                u,
                c,
                f,
                d,
                h = [n || b],
                g = p.call(e, "type") ? e.type : e,
                m = p.call(e, "namespace") ? e.namespace.split(".") : [];
              if (
                ((s = d = a = n = n || b),
                3 !== n.nodeType &&
                  8 !== n.nodeType &&
                  !Tt.test(g + E.event.triggered) &&
                  (g.indexOf(".") > -1 &&
                    ((m = g.split(".")), (g = m.shift()), m.sort()),
                  (u = g.indexOf(":") < 0 && "on" + g),
                  ((e = e[E.expando]
                    ? e
                    : new E.Event(g, "object" == typeof e && e)).isTrigger = i
                    ? 2
                    : 3),
                  (e.namespace = m.join(".")),
                  (e.rnamespace = e.namespace
                    ? new RegExp(
                        "(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      )
                    : null),
                  (e.result = void 0),
                  e.target || (e.target = n),
                  (t = null == t ? [e] : E.makeArray(t, [e])),
                  (f = E.event.special[g] || {}),
                  i || !f.trigger || !1 !== f.trigger.apply(n, t)))
              ) {
                if (!i && !f.noBubble && !y(n)) {
                  for (
                    l = f.delegateType || g,
                      Tt.test(l + g) || (s = s.parentNode);
                    s;
                    s = s.parentNode
                  )
                    h.push(s), (a = s);
                  a === (n.ownerDocument || b) &&
                    h.push(a.defaultView || a.parentWindow || r);
                }
                for (o = 0; (s = h[o++]) && !e.isPropagationStopped(); )
                  (d = s),
                    (e.type = o > 1 ? l : f.bindType || g),
                    (c =
                      (J.get(s, "events") || Object.create(null))[e.type] &&
                      J.get(s, "handle")) && c.apply(s, t),
                    (c = u && s[u]) &&
                      c.apply &&
                      K(s) &&
                      ((e.result = c.apply(s, t)),
                      !1 === e.result && e.preventDefault());
                return (
                  (e.type = g),
                  i ||
                    e.isDefaultPrevented() ||
                    (f._default && !1 !== f._default.apply(h.pop(), t)) ||
                    !K(n) ||
                    (u &&
                      v(n[g]) &&
                      !y(n) &&
                      ((a = n[u]) && (n[u] = null),
                      (E.event.triggered = g),
                      e.isPropagationStopped() && d.addEventListener(g, Et),
                      n[g](),
                      e.isPropagationStopped() && d.removeEventListener(g, Et),
                      (E.event.triggered = void 0),
                      a && (n[u] = a))),
                  e.result
                );
              }
            },
            simulate: function (e, t, n) {
              var r = E.extend(new E.Event(), n, { type: e, isSimulated: !0 });
              E.event.trigger(r, null, t);
            },
          }),
            E.fn.extend({
              trigger: function (e, t) {
                return this.each(function () {
                  E.event.trigger(e, t, this);
                });
              },
              triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return E.event.trigger(e, t, n, !0);
              },
            }),
            m.focusin ||
              E.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                var n = function (e) {
                  E.event.simulate(t, e.target, E.event.fix(e));
                };
                E.event.special[t] = {
                  setup: function () {
                    var r = this.ownerDocument || this.document || this,
                      i = J.access(r, t);
                    i || r.addEventListener(e, n, !0),
                      J.access(r, t, (i || 0) + 1);
                  },
                  teardown: function () {
                    var r = this.ownerDocument || this.document || this,
                      i = J.access(r, t) - 1;
                    i
                      ? J.access(r, t, i)
                      : (r.removeEventListener(e, n, !0), J.remove(r, t));
                  },
                };
              });
          var Ct = r.location,
            kt = { guid: Date.now() },
            At = /\?/;
          E.parseXML = function (e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
              t = new r.DOMParser().parseFromString(e, "text/xml");
            } catch (e) {}
            return (
              (n = t && t.getElementsByTagName("parsererror")[0]),
              (t && !n) ||
                E.error(
                  "Invalid XML: " +
                    (n
                      ? E.map(n.childNodes, function (e) {
                          return e.textContent;
                        }).join("\n")
                      : e)
                ),
              t
            );
          };
          var St = /\[\]$/,
            Dt = /\r?\n/g,
            jt = /^(?:submit|button|image|reset|file)$/i,
            Ot = /^(?:input|select|textarea|keygen)/i;
          function Nt(e, t, n, r) {
            var i;
            if (Array.isArray(t))
              E.each(t, function (t, i) {
                n || St.test(e)
                  ? r(e, i)
                  : Nt(
                      e +
                        "[" +
                        ("object" == typeof i && null != i ? t : "") +
                        "]",
                      i,
                      n,
                      r
                    );
              });
            else if (n || "object" !== _(t)) r(e, t);
            else for (i in t) Nt(e + "[" + i + "]", t[i], n, r);
          }
          (E.param = function (e, t) {
            var n,
              r = [],
              i = function (e, t) {
                var n = v(t) ? t() : t;
                r[r.length] =
                  encodeURIComponent(e) +
                  "=" +
                  encodeURIComponent(null == n ? "" : n);
              };
            if (null == e) return "";
            if (Array.isArray(e) || (e.jquery && !E.isPlainObject(e)))
              E.each(e, function () {
                i(this.name, this.value);
              });
            else for (n in e) Nt(n, e[n], t, i);
            return r.join("&");
          }),
            E.fn.extend({
              serialize: function () {
                return E.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var e = E.prop(this, "elements");
                  return e ? E.makeArray(e) : this;
                })
                  .filter(function () {
                    var e = this.type;
                    return (
                      this.name &&
                      !E(this).is(":disabled") &&
                      Ot.test(this.nodeName) &&
                      !jt.test(e) &&
                      (this.checked || !me.test(e))
                    );
                  })
                  .map(function (e, t) {
                    var n = E(this).val();
                    return null == n
                      ? null
                      : Array.isArray(n)
                      ? E.map(n, function (e) {
                          return { name: t.name, value: e.replace(Dt, "\r\n") };
                        })
                      : { name: t.name, value: n.replace(Dt, "\r\n") };
                  })
                  .get();
              },
            });
          var Lt = /%20/g,
            Zt = /#.*$/,
            Pt = /([?&])_=[^&]*/,
            Mt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            qt = /^(?:GET|HEAD)$/,
            $t = /^\/\//,
            It = {},
            Rt = {},
            Ht = "*/".concat("*"),
            Ft = b.createElement("a");
          function Wt(e) {
            return function (t, n) {
              "string" != typeof t && ((n = t), (t = "*"));
              var r,
                i = 0,
                o = t.toLowerCase().match($) || [];
              if (v(n))
                for (; (r = o[i++]); )
                  "+" === r[0]
                    ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                    : (e[r] = e[r] || []).push(n);
            };
          }
          function Bt(e, t, n, r) {
            var i = {},
              o = e === Rt;
            function s(a) {
              var l;
              return (
                (i[a] = !0),
                E.each(e[a] || [], function (e, a) {
                  var u = a(t, n, r);
                  return "string" != typeof u || o || i[u]
                    ? o
                      ? !(l = u)
                      : void 0
                    : (t.dataTypes.unshift(u), s(u), !1);
                }),
                l
              );
            }
            return s(t.dataTypes[0]) || (!i["*"] && s("*"));
          }
          function Vt(e, t) {
            var n,
              r,
              i = E.ajaxSettings.flatOptions || {};
            for (n in t)
              void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
            return r && E.extend(!0, e, r), e;
          }
          (Ft.href = Ct.href),
            E.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: Ct.href,
                type: "GET",
                isLocal:
                  /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    Ct.protocol
                  ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                  "*": Ht,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                  xml: "responseXML",
                  text: "responseText",
                  json: "responseJSON",
                },
                converters: {
                  "* text": String,
                  "text html": !0,
                  "text json": JSON.parse,
                  "text xml": E.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup: function (e, t) {
                return t ? Vt(Vt(e, E.ajaxSettings), t) : Vt(E.ajaxSettings, e);
              },
              ajaxPrefilter: Wt(It),
              ajaxTransport: Wt(Rt),
              ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var n,
                  i,
                  o,
                  s,
                  a,
                  l,
                  u,
                  c,
                  f,
                  d,
                  p = E.ajaxSetup({}, t),
                  h = p.context || p,
                  g = p.context && (h.nodeType || h.jquery) ? E(h) : E.event,
                  m = E.Deferred(),
                  v = E.Callbacks("once memory"),
                  y = p.statusCode || {},
                  x = {},
                  w = {},
                  _ = "canceled",
                  T = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                      var t;
                      if (u) {
                        if (!s)
                          for (s = {}; (t = Mt.exec(o)); )
                            s[t[1].toLowerCase() + " "] = (
                              s[t[1].toLowerCase() + " "] || []
                            ).concat(t[2]);
                        t = s[e.toLowerCase() + " "];
                      }
                      return null == t ? null : t.join(", ");
                    },
                    getAllResponseHeaders: function () {
                      return u ? o : null;
                    },
                    setRequestHeader: function (e, t) {
                      return (
                        null == u &&
                          ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e),
                          (x[e] = t)),
                        this
                      );
                    },
                    overrideMimeType: function (e) {
                      return null == u && (p.mimeType = e), this;
                    },
                    statusCode: function (e) {
                      var t;
                      if (e)
                        if (u) T.always(e[T.status]);
                        else for (t in e) y[t] = [y[t], e[t]];
                      return this;
                    },
                    abort: function (e) {
                      var t = e || _;
                      return n && n.abort(t), C(0, t), this;
                    },
                  };
                if (
                  (m.promise(T),
                  (p.url = ((e || p.url || Ct.href) + "").replace(
                    $t,
                    Ct.protocol + "//"
                  )),
                  (p.type = t.method || t.type || p.method || p.type),
                  (p.dataTypes = (p.dataType || "*").toLowerCase().match($) || [
                    "",
                  ]),
                  null == p.crossDomain)
                ) {
                  l = b.createElement("a");
                  try {
                    (l.href = p.url),
                      (l.href = l.href),
                      (p.crossDomain =
                        Ft.protocol + "//" + Ft.host !=
                        l.protocol + "//" + l.host);
                  } catch (e) {
                    p.crossDomain = !0;
                  }
                }
                if (
                  (p.data &&
                    p.processData &&
                    "string" != typeof p.data &&
                    (p.data = E.param(p.data, p.traditional)),
                  Bt(It, p, t, T),
                  u)
                )
                  return T;
                for (f in ((c = E.event && p.global) &&
                  0 == E.active++ &&
                  E.event.trigger("ajaxStart"),
                (p.type = p.type.toUpperCase()),
                (p.hasContent = !qt.test(p.type)),
                (i = p.url.replace(Zt, "")),
                p.hasContent
                  ? p.data &&
                    p.processData &&
                    0 ===
                      (p.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    (p.data = p.data.replace(Lt, "+"))
                  : ((d = p.url.slice(i.length)),
                    p.data &&
                      (p.processData || "string" == typeof p.data) &&
                      ((i += (At.test(i) ? "&" : "?") + p.data), delete p.data),
                    !1 === p.cache &&
                      ((i = i.replace(Pt, "$1")),
                      (d = (At.test(i) ? "&" : "?") + "_=" + kt.guid++ + d)),
                    (p.url = i + d)),
                p.ifModified &&
                  (E.lastModified[i] &&
                    T.setRequestHeader("If-Modified-Since", E.lastModified[i]),
                  E.etag[i] && T.setRequestHeader("If-None-Match", E.etag[i])),
                ((p.data && p.hasContent && !1 !== p.contentType) ||
                  t.contentType) &&
                  T.setRequestHeader("Content-Type", p.contentType),
                T.setRequestHeader(
                  "Accept",
                  p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                    ? p.accepts[p.dataTypes[0]] +
                        ("*" !== p.dataTypes[0] ? ", " + Ht + "; q=0.01" : "")
                    : p.accepts["*"]
                ),
                p.headers))
                  T.setRequestHeader(f, p.headers[f]);
                if (p.beforeSend && (!1 === p.beforeSend.call(h, T, p) || u))
                  return T.abort();
                if (
                  ((_ = "abort"),
                  v.add(p.complete),
                  T.done(p.success),
                  T.fail(p.error),
                  (n = Bt(Rt, p, t, T)))
                ) {
                  if (
                    ((T.readyState = 1), c && g.trigger("ajaxSend", [T, p]), u)
                  )
                    return T;
                  p.async &&
                    p.timeout > 0 &&
                    (a = r.setTimeout(function () {
                      T.abort("timeout");
                    }, p.timeout));
                  try {
                    (u = !1), n.send(x, C);
                  } catch (e) {
                    if (u) throw e;
                    C(-1, e);
                  }
                } else C(-1, "No Transport");
                function C(e, t, s, l) {
                  var f,
                    d,
                    b,
                    x,
                    w,
                    _ = t;
                  u ||
                    ((u = !0),
                    a && r.clearTimeout(a),
                    (n = void 0),
                    (o = l || ""),
                    (T.readyState = e > 0 ? 4 : 0),
                    (f = (e >= 200 && e < 300) || 304 === e),
                    s &&
                      (x = (function (e, t, n) {
                        for (
                          var r, i, o, s, a = e.contents, l = e.dataTypes;
                          "*" === l[0];

                        )
                          l.shift(),
                            void 0 === r &&
                              (r =
                                e.mimeType ||
                                t.getResponseHeader("Content-Type"));
                        if (r)
                          for (i in a)
                            if (a[i] && a[i].test(r)) {
                              l.unshift(i);
                              break;
                            }
                        if (l[0] in n) o = l[0];
                        else {
                          for (i in n) {
                            if (!l[0] || e.converters[i + " " + l[0]]) {
                              o = i;
                              break;
                            }
                            s || (s = i);
                          }
                          o = o || s;
                        }
                        if (o) return o !== l[0] && l.unshift(o), n[o];
                      })(p, T, s)),
                    !f &&
                      E.inArray("script", p.dataTypes) > -1 &&
                      E.inArray("json", p.dataTypes) < 0 &&
                      (p.converters["text script"] = function () {}),
                    (x = (function (e, t, n, r) {
                      var i,
                        o,
                        s,
                        a,
                        l,
                        u = {},
                        c = e.dataTypes.slice();
                      if (c[1])
                        for (s in e.converters)
                          u[s.toLowerCase()] = e.converters[s];
                      for (o = c.shift(); o; )
                        if (
                          (e.responseFields[o] && (n[e.responseFields[o]] = t),
                          !l &&
                            r &&
                            e.dataFilter &&
                            (t = e.dataFilter(t, e.dataType)),
                          (l = o),
                          (o = c.shift()))
                        )
                          if ("*" === o) o = l;
                          else if ("*" !== l && l !== o) {
                            if (!(s = u[l + " " + o] || u["* " + o]))
                              for (i in u)
                                if (
                                  (a = i.split(" "))[1] === o &&
                                  (s = u[l + " " + a[0]] || u["* " + a[0]])
                                ) {
                                  !0 === s
                                    ? (s = u[i])
                                    : !0 !== u[i] &&
                                      ((o = a[0]), c.unshift(a[1]));
                                  break;
                                }
                            if (!0 !== s)
                              if (s && e.throws) t = s(t);
                              else
                                try {
                                  t = s(t);
                                } catch (e) {
                                  return {
                                    state: "parsererror",
                                    error: s
                                      ? e
                                      : "No conversion from " + l + " to " + o,
                                  };
                                }
                          }
                      return { state: "success", data: t };
                    })(p, x, T, f)),
                    f
                      ? (p.ifModified &&
                          ((w = T.getResponseHeader("Last-Modified")) &&
                            (E.lastModified[i] = w),
                          (w = T.getResponseHeader("etag")) && (E.etag[i] = w)),
                        204 === e || "HEAD" === p.type
                          ? (_ = "nocontent")
                          : 304 === e
                          ? (_ = "notmodified")
                          : ((_ = x.state), (d = x.data), (f = !(b = x.error))))
                      : ((b = _),
                        (!e && _) || ((_ = "error"), e < 0 && (e = 0))),
                    (T.status = e),
                    (T.statusText = (t || _) + ""),
                    f
                      ? m.resolveWith(h, [d, _, T])
                      : m.rejectWith(h, [T, _, b]),
                    T.statusCode(y),
                    (y = void 0),
                    c &&
                      g.trigger(f ? "ajaxSuccess" : "ajaxError", [
                        T,
                        p,
                        f ? d : b,
                      ]),
                    v.fireWith(h, [T, _]),
                    c &&
                      (g.trigger("ajaxComplete", [T, p]),
                      --E.active || E.event.trigger("ajaxStop")));
                }
                return T;
              },
              getJSON: function (e, t, n) {
                return E.get(e, t, n, "json");
              },
              getScript: function (e, t) {
                return E.get(e, void 0, t, "script");
              },
            }),
            E.each(["get", "post"], function (e, t) {
              E[t] = function (e, n, r, i) {
                return (
                  v(n) && ((i = i || r), (r = n), (n = void 0)),
                  E.ajax(
                    E.extend(
                      { url: e, type: t, dataType: i, data: n, success: r },
                      E.isPlainObject(e) && e
                    )
                  )
                );
              };
            }),
            E.ajaxPrefilter(function (e) {
              var t;
              for (t in e.headers)
                "content-type" === t.toLowerCase() &&
                  (e.contentType = e.headers[t] || "");
            }),
            (E._evalUrl = function (e, t, n) {
              return E.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                  E.globalEval(e, t, n);
                },
              });
            }),
            E.fn.extend({
              wrapAll: function (e) {
                var t;
                return (
                  this[0] &&
                    (v(e) && (e = e.call(this[0])),
                    (t = E(e, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t
                      .map(function () {
                        for (var e = this; e.firstElementChild; )
                          e = e.firstElementChild;
                        return e;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner: function (e) {
                return v(e)
                  ? this.each(function (t) {
                      E(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function () {
                      var t = E(this),
                        n = t.contents();
                      n.length ? n.wrapAll(e) : t.append(e);
                    });
              },
              wrap: function (e) {
                var t = v(e);
                return this.each(function (n) {
                  E(this).wrapAll(t ? e.call(this, n) : e);
                });
              },
              unwrap: function (e) {
                return (
                  this.parent(e)
                    .not("body")
                    .each(function () {
                      E(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (E.expr.pseudos.hidden = function (e) {
              return !E.expr.pseudos.visible(e);
            }),
            (E.expr.pseudos.visible = function (e) {
              return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
              );
            }),
            (E.ajaxSettings.xhr = function () {
              try {
                return new r.XMLHttpRequest();
              } catch (e) {}
            });
          var zt = { 0: 200, 1223: 204 },
            Xt = E.ajaxSettings.xhr();
          (m.cors = !!Xt && "withCredentials" in Xt),
            (m.ajax = Xt = !!Xt),
            E.ajaxTransport(function (e) {
              var t, n;
              if (m.cors || (Xt && !e.crossDomain))
                return {
                  send: function (i, o) {
                    var s,
                      a = e.xhr();
                    if (
                      (a.open(e.type, e.url, e.async, e.username, e.password),
                      e.xhrFields)
                    )
                      for (s in e.xhrFields) a[s] = e.xhrFields[s];
                    for (s in (e.mimeType &&
                      a.overrideMimeType &&
                      a.overrideMimeType(e.mimeType),
                    e.crossDomain ||
                      i["X-Requested-With"] ||
                      (i["X-Requested-With"] = "XMLHttpRequest"),
                    i))
                      a.setRequestHeader(s, i[s]);
                    (t = function (e) {
                      return function () {
                        t &&
                          ((t =
                            n =
                            a.onload =
                            a.onerror =
                            a.onabort =
                            a.ontimeout =
                            a.onreadystatechange =
                              null),
                          "abort" === e
                            ? a.abort()
                            : "error" === e
                            ? "number" != typeof a.status
                              ? o(0, "error")
                              : o(a.status, a.statusText)
                            : o(
                                zt[a.status] || a.status,
                                a.statusText,
                                "text" !== (a.responseType || "text") ||
                                  "string" != typeof a.responseText
                                  ? { binary: a.response }
                                  : { text: a.responseText },
                                a.getAllResponseHeaders()
                              ));
                      };
                    }),
                      (a.onload = t()),
                      (n = a.onerror = a.ontimeout = t("error")),
                      void 0 !== a.onabort
                        ? (a.onabort = n)
                        : (a.onreadystatechange = function () {
                            4 === a.readyState &&
                              r.setTimeout(function () {
                                t && n();
                              });
                          }),
                      (t = t("abort"));
                    try {
                      a.send((e.hasContent && e.data) || null);
                    } catch (e) {
                      if (t) throw e;
                    }
                  },
                  abort: function () {
                    t && t();
                  },
                };
            }),
            E.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            E.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
              },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                "text script": function (e) {
                  return E.globalEval(e), e;
                },
              },
            }),
            E.ajaxPrefilter("script", function (e) {
              void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
            }),
            E.ajaxTransport("script", function (e) {
              var t, n;
              if (e.crossDomain || e.scriptAttrs)
                return {
                  send: function (r, i) {
                    (t = E("<script>")
                      .attr(e.scriptAttrs || {})
                      .prop({ charset: e.scriptCharset, src: e.url })
                      .on(
                        "load error",
                        (n = function (e) {
                          t.remove(),
                            (n = null),
                            e && i("error" === e.type ? 404 : 200, e.type);
                        })
                      )),
                      b.head.appendChild(t[0]);
                  },
                  abort: function () {
                    n && n();
                  },
                };
            });
          var Ut,
            Yt = [],
            Kt = /(=)\?(?=&|$)|\?\?/;
          E.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var e = Yt.pop() || E.expando + "_" + kt.guid++;
              return (this[e] = !0), e;
            },
          }),
            E.ajaxPrefilter("json jsonp", function (e, t, n) {
              var i,
                o,
                s,
                a =
                  !1 !== e.jsonp &&
                  (Kt.test(e.url)
                    ? "url"
                    : "string" == typeof e.data &&
                      0 ===
                        (e.contentType || "").indexOf(
                          "application/x-www-form-urlencoded"
                        ) &&
                      Kt.test(e.data) &&
                      "data");
              if (a || "jsonp" === e.dataTypes[0])
                return (
                  (i = e.jsonpCallback =
                    v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                  a
                    ? (e[a] = e[a].replace(Kt, "$1" + i))
                    : !1 !== e.jsonp &&
                      (e.url +=
                        (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                  (e.converters["script json"] = function () {
                    return s || E.error(i + " was not called"), s[0];
                  }),
                  (e.dataTypes[0] = "json"),
                  (o = r[i]),
                  (r[i] = function () {
                    s = arguments;
                  }),
                  n.always(function () {
                    void 0 === o ? E(r).removeProp(i) : (r[i] = o),
                      e[i] && ((e.jsonpCallback = t.jsonpCallback), Yt.push(i)),
                      s && v(o) && o(s[0]),
                      (s = o = void 0);
                  }),
                  "script"
                );
            }),
            (m.createHTMLDocument =
              (((Ut = b.implementation.createHTMLDocument("").body).innerHTML =
                "<form></form><form></form>"),
              2 === Ut.childNodes.length)),
            (E.parseHTML = function (e, t, n) {
              return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t ||
                    (m.createHTMLDocument
                      ? (((r = (t =
                          b.implementation.createHTMLDocument(
                            ""
                          )).createElement("base")).href = b.location.href),
                        t.head.appendChild(r))
                      : (t = b)),
                  (o = !n && []),
                  (i = O.exec(e))
                    ? [t.createElement(i[1])]
                    : ((i = Te([e], t, o)),
                      o && o.length && E(o).remove(),
                      E.merge([], i.childNodes)));
              var r, i, o;
            }),
            (E.fn.load = function (e, t, n) {
              var r,
                i,
                o,
                s = this,
                a = e.indexOf(" ");
              return (
                a > -1 && ((r = bt(e.slice(a))), (e = e.slice(0, a))),
                v(t)
                  ? ((n = t), (t = void 0))
                  : t && "object" == typeof t && (i = "POST"),
                s.length > 0 &&
                  E.ajax({
                    url: e,
                    type: i || "GET",
                    dataType: "html",
                    data: t,
                  })
                    .done(function (e) {
                      (o = arguments),
                        s.html(
                          r ? E("<div>").append(E.parseHTML(e)).find(r) : e
                        );
                    })
                    .always(
                      n &&
                        function (e, t) {
                          s.each(function () {
                            n.apply(this, o || [e.responseText, t, e]);
                          });
                        }
                    ),
                this
              );
            }),
            (E.expr.pseudos.animated = function (e) {
              return E.grep(E.timers, function (t) {
                return e === t.elem;
              }).length;
            }),
            (E.offset = {
              setOffset: function (e, t, n) {
                var r,
                  i,
                  o,
                  s,
                  a,
                  l,
                  u = E.css(e, "position"),
                  c = E(e),
                  f = {};
                "static" === u && (e.style.position = "relative"),
                  (a = c.offset()),
                  (o = E.css(e, "top")),
                  (l = E.css(e, "left")),
                  ("absolute" === u || "fixed" === u) &&
                  (o + l).indexOf("auto") > -1
                    ? ((s = (r = c.position()).top), (i = r.left))
                    : ((s = parseFloat(o) || 0), (i = parseFloat(l) || 0)),
                  v(t) && (t = t.call(e, n, E.extend({}, a))),
                  null != t.top && (f.top = t.top - a.top + s),
                  null != t.left && (f.left = t.left - a.left + i),
                  "using" in t ? t.using.call(e, f) : c.css(f);
              },
            }),
            E.fn.extend({
              offset: function (e) {
                if (arguments.length)
                  return void 0 === e
                    ? this
                    : this.each(function (t) {
                        E.offset.setOffset(this, e, t);
                      });
                var t,
                  n,
                  r = this[0];
                return r
                  ? r.getClientRects().length
                    ? ((t = r.getBoundingClientRect()),
                      (n = r.ownerDocument.defaultView),
                      {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset,
                      })
                    : { top: 0, left: 0 }
                  : void 0;
              },
              position: function () {
                if (this[0]) {
                  var e,
                    t,
                    n,
                    r = this[0],
                    i = { top: 0, left: 0 };
                  if ("fixed" === E.css(r, "position"))
                    t = r.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(),
                        n = r.ownerDocument,
                        e = r.offsetParent || n.documentElement;
                      e &&
                      (e === n.body || e === n.documentElement) &&
                      "static" === E.css(e, "position");

                    )
                      e = e.parentNode;
                    e &&
                      e !== r &&
                      1 === e.nodeType &&
                      (((i = E(e).offset()).top += E.css(
                        e,
                        "borderTopWidth",
                        !0
                      )),
                      (i.left += E.css(e, "borderLeftWidth", !0)));
                  }
                  return {
                    top: t.top - i.top - E.css(r, "marginTop", !0),
                    left: t.left - i.left - E.css(r, "marginLeft", !0),
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (
                    var e = this.offsetParent;
                    e && "static" === E.css(e, "position");

                  )
                    e = e.offsetParent;
                  return e || se;
                });
              },
            }),
            E.each(
              { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
              function (e, t) {
                var n = "pageYOffset" === t;
                E.fn[e] = function (r) {
                  return V(
                    this,
                    function (e, r, i) {
                      var o;
                      if (
                        (y(e)
                          ? (o = e)
                          : 9 === e.nodeType && (o = e.defaultView),
                        void 0 === i)
                      )
                        return o ? o[t] : e[r];
                      o
                        ? o.scrollTo(
                            n ? o.pageXOffset : i,
                            n ? i : o.pageYOffset
                          )
                        : (e[r] = i);
                    },
                    e,
                    r,
                    arguments.length
                  );
                };
              }
            ),
            E.each(["top", "left"], function (e, t) {
              E.cssHooks[t] = Ue(m.pixelPosition, function (e, n) {
                if (n)
                  return (
                    (n = Xe(e, t)), Re.test(n) ? E(e).position()[t] + "px" : n
                  );
              });
            }),
            E.each({ Height: "height", Width: "width" }, function (e, t) {
              E.each(
                { padding: "inner" + e, content: t, "": "outer" + e },
                function (n, r) {
                  E.fn[r] = function (i, o) {
                    var s = arguments.length && (n || "boolean" != typeof i),
                      a = n || (!0 === i || !0 === o ? "margin" : "border");
                    return V(
                      this,
                      function (t, n, i) {
                        var o;
                        return y(t)
                          ? 0 === r.indexOf("outer")
                            ? t["inner" + e]
                            : t.document.documentElement["client" + e]
                          : 9 === t.nodeType
                          ? ((o = t.documentElement),
                            Math.max(
                              t.body["scroll" + e],
                              o["scroll" + e],
                              t.body["offset" + e],
                              o["offset" + e],
                              o["client" + e]
                            ))
                          : void 0 === i
                          ? E.css(t, n, a)
                          : E.style(t, n, i, a);
                      },
                      t,
                      s ? i : void 0,
                      s
                    );
                  };
                }
              );
            }),
            E.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
              ],
              function (e, t) {
                E.fn[t] = function (e) {
                  return this.on(t, e);
                };
              }
            ),
            E.fn.extend({
              bind: function (e, t, n) {
                return this.on(e, null, t, n);
              },
              unbind: function (e, t) {
                return this.off(e, null, t);
              },
              delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
              },
              undelegate: function (e, t, n) {
                return 1 === arguments.length
                  ? this.off(e, "**")
                  : this.off(t, e || "**", n);
              },
              hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
              },
            }),
            E.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
              ),
              function (e, t) {
                E.fn[t] = function (e, n) {
                  return arguments.length > 0
                    ? this.on(t, null, e, n)
                    : this.trigger(t);
                };
              }
            );
          var Qt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
          (E.proxy = function (e, t) {
            var n, r, i;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
              return (
                (r = a.call(arguments, 2)),
                (i = function () {
                  return e.apply(t || this, r.concat(a.call(arguments)));
                }),
                (i.guid = e.guid = e.guid || E.guid++),
                i
              );
          }),
            (E.holdReady = function (e) {
              e ? E.readyWait++ : E.ready(!0);
            }),
            (E.isArray = Array.isArray),
            (E.parseJSON = JSON.parse),
            (E.nodeName = j),
            (E.isFunction = v),
            (E.isWindow = y),
            (E.camelCase = Y),
            (E.type = _),
            (E.now = Date.now),
            (E.isNumeric = function (e) {
              var t = E.type(e);
              return (
                ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
              );
            }),
            (E.trim = function (e) {
              return null == e ? "" : (e + "").replace(Qt, "$1");
            }),
            void 0 ===
              (n = function () {
                return E;
              }.apply(t, [])) || (e.exports = n);
          var Jt = r.jQuery,
            Gt = r.$;
          return (
            (E.noConflict = function (e) {
              return (
                r.$ === E && (r.$ = Gt),
                e && r.jQuery === E && (r.jQuery = Jt),
                E
              );
            }),
            void 0 === i && (r.jQuery = r.$ = E),
            E
          );
        });
      },
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var o = (t[r] = { exports: {} });
    return e[r].call(o.exports, o, o.exports, n), o.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      "use strict";
      n(7424), n(6169), n(8048), n(9872);
      var e = n(9755);
      new (class {
        constructor() {
          (this.myModal = document.getElementById("exampleModal")),
            this.stickyHeader(),
            this.megamenuPopup(),
            this.toggleContent(),
            this.readMore();
        }
        stickyHeader() {
          var t = e("body"),
            n = e(".theme-header");
          e(t).hasClass("home") && e(n).addClass("theme-header--dark"),
            e(window).scroll(function () {
              e(this).scrollTop() > 50
                ? e(".theme-header").addClass("sticky")
                : e(".theme-header").removeClass("sticky");
            });
        }
        megamenuPopup() {
          var t = e(".navbar-toggle"),
            n = e(".megamenu-popup"),
            r = e(".close-menu");
          e(t).click(function () {
            e(n).addClass("active");
          }),
            e(r).click(function () {
              e(n).removeClass("active");
            });
        }
        toggleContent() {
          var t = e(".toggle-text"),
            n = e(".toggleRead");
          e(n).click(function () {
            e(this).toggleClass("active"), e(t).toggleClass("active");
          });
        }
        readMore() {
          e(".readmore").click(function () {
            e(".collapse-text").addClass("expand"), e(this).hide();
          });
        }
      })();
    })();
})();
