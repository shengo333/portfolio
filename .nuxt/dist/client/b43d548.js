(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    193: function (e, t, r) {
      var content = r(195);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
      (0, r(88).default)("2ec5d14e", content, !0, { sourceMap: !1 });
    },
    194: function (e, t, r) {
      "use strict";
      r(193);
    },
    195: function (e, t, r) {
      var o = r(87)(!1);
      o.push([
        e.i,
        '#header-wrapper[data-v-4e6d3f6d]{background:hsla(0,0%,50.2%,.39);margin-bottom:1.5rem;margin-top:2rem;padding:0 2rem}#header-wrapper[data-v-4e6d3f6d],.routes[data-v-4e6d3f6d]{display:flex;justify-content:space-between}.route[data-v-4e6d3f6d]{padding:0 1rem;text-decoration:none}h1[data-v-4e6d3f6d]{font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:50px;font-weight:700;letter-spacing:-2.5px;line-height:50px;color:rgba(83,80,80,.73333)}h1[data-v-4e6d3f6d],h3[data-v-4e6d3f6d]{font-style:normal;text-transform:none}h3[data-v-4e6d3f6d]{font-family:Esteban,Georgia,"Times New Roman",serif;font-size:20px;font-weight:400;letter-spacing:normal;line-height:20px;color:#000}',
        "",
      ]),
        (e.exports = o);
    },
    196: function (e, t, r) {
      "use strict";
      r.r(t);
      var o = { name: "Header" },
        n = (r(194), r(31)),
        component = Object(n.a)(
          o,
          function () {
            var e = this,
              t = e.$createElement,
              r = e._self._c || t;
            return r("div", { attrs: { id: "header-wrapper" } }, [
              e._m(0),
              e._v(" "),
              r(
                "div",
                { staticClass: "routes" },
                [
                  r(
                    "router-link",
                    { staticClass: "route", attrs: { to: "/" } },
                    [r("h3", [e._v(" Home")])]
                  ),
                  e._v(" "),
                  r(
                    "router-link",
                    { staticClass: "route", attrs: { to: "/games" } },
                    [r("h3", [e._v(" Game page")])]
                  ),
                  e._v(" "),
                  r(
                    "router-link",
                    { staticClass: "route", attrs: { to: "/pages" } },
                    [r("h3", [e._v("Web pages")])]
                  ),
                  e._v(" "),
                  r(
                    "router-link",
                    { staticClass: "route", attrs: { to: "/projects" } },
                    [r("h3", [e._v("Check currency")])]
                  ),
                  e._v(" "),
                  r(
                    "router-link",
                    { staticClass: "route", attrs: { to: "/resume" } },
                    [r("h3", [e._v("Resume page")])]
                  ),
                ],
                1
              ),
            ]);
          },
          [
            function () {
              var e = this,
                t = e.$createElement,
                r = e._self._c || t;
              return r("div", [r("h2", [e._v("Beka Shengelia")])]);
            },
          ],
          !1,
          null,
          "4e6d3f6d",
          null
        );
      t.default = component.exports;
    },
  },
]);
