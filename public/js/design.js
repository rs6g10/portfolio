(function() {
    var e, f = this;

    function aa() {}

    function ba(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" ==
            b && "undefined" == typeof a.call) return "object";
        return b
    }

    function l(a) {
        return void 0 !== a
    }

    function m(a) {
        return "array" == ba(a)
    }

    function ca(a) {
        var b = ba(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function n(a) {
        return "string" == typeof a
    }

    function q(a) {
        return "number" == typeof a
    }

    function da(a) {
        return "function" == ba(a)
    }

    function ea(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function fa(a) {
        return a[ga] || (a[ga] = ++ha)
    }
    var ga = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ha = 0;

    function ia(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ja(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function r(a, b, c) {
        r = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ia : ja;
        return r.apply(null, arguments)
    }

    function s(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    }
    var t = Date.now || function() {
            return +new Date
        };

    function ka(a) {
        var b = {}, c;
        for (c in b) {
            var d = ("" + b[c]).replace(/\$/g, "$$$$");
            a = a.replace(new RegExp("\\{\\$" + c + "\\}", "gi"), d)
        }
        return a
    }

    function u(a, b) {
        var c = a.split("."),
            d = f;
        c[0] in d || !d.execScript || d.execScript("var " + c[0]);
        for (var g; c.length && (g = c.shift());) c.length || void 0 === b ? d = d[g] ? d[g] : d[g] = {} : d[g] = b
    }

    function v(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.d = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Fg = function(a, c, h) {
            return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2))
        }
    }
    Function.prototype.bind = Function.prototype.bind || function(a, b) {
        if (1 < arguments.length) {
            var c = Array.prototype.slice.call(arguments, 1);
            c.unshift(this, a);
            return r.apply(null, c)
        }
        return r(this, a)
    };

    function la(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, la);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    v(la, Error);
    la.prototype.name = "CustomError";
    var w = {};

    function ma(a, b) {
        for (var c = a.split("%s"), d = "", g = Array.prototype.slice.call(arguments, 1); g.length && 1 < c.length;) d += c.shift() + g.shift();
        return d + c.join("%s")
    }

    function na(a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    }

    function oa(a) {
        if (!pa.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(qa, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(ra, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(sa, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(ta, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(ua, "&#39;"));
        return a
    }
    var qa = /&/g,
        ra = /</g,
        sa = />/g,
        ta = /"/g,
        ua = /'/g,
        pa = /[&<>"']/;

    function va(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }

    function wa(a) {
        return String(a).replace(/\-([a-z])/g, function(a, c) {
            return c.toUpperCase()
        })
    }

    function xa(a) {
        return String(a).replace(/([A-Z])/g, "-$1").toLowerCase()
    }

    function ya(a) {
        var b = n(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
        return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, g) {
            return b + g.toUpperCase()
        })
    };

    function za(a, b) {
        b.unshift(a);
        la.call(this, ma.apply(null, b));
        b.shift()
    }
    v(za, la);
    za.prototype.name = "AssertionError";

    function Aa(a, b) {
        throw new za("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    };
    var x = Array.prototype,
        Ba = x.indexOf ? function(a, b, c) {
            return x.indexOf.call(a, b, c)
        } : function(a, b, c) {
            c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (n(a)) return n(b) && 1 == b.length ? a.indexOf(b, c) : -1;
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        }, Ca = x.forEach ? function(a, b, c) {
            x.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, g = n(a) ? a.split("") : a, h = 0; h < d; h++) h in g && b.call(c, g[h], h, a)
        }, Da = x.filter ? function(a, b, c) {
            return x.filter.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, g = [], h = 0, k = n(a) ?
                a.split("") : a, p = 0; p < d; p++)
                if (p in k) {
                    var E = k[p];
                    b.call(c, E, p, a) && (g[h++] = E)
                }
            return g
        }, Ea = x.map ? function(a, b, c) {
            return x.map.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, g = Array(d), h = n(a) ? a.split("") : a, k = 0; k < d; k++) k in h && (g[k] = b.call(c, h[k], k, a));
            return g
        };

    function Fa(a, b) {
        return 0 <= Ba(a, b)
    }

    function Ga(a, b) {
        var c = Ba(a, b),
            d;
        (d = 0 <= c) && x.splice.call(a, c, 1);
        return d
    }

    function Ha(a) {
        return x.concat.apply(x, arguments)
    }

    function Ia(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function Ja(a, b, c, d) {
        x.splice.apply(a, Ka(arguments, 1))
    }

    function Ka(a, b, c) {
        return 2 >= arguments.length ? x.slice.call(a, b) : x.slice.call(a, b, c)
    };

    function La(a, b) {
        for (var c in a) b.call(void 0, a[c], c, a)
    }

    function Ma(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = d;
        return b
    }

    function Na(a) {
        for (var b in a) return !1;
        return !0
    }
    var Oa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Pa(a, b) {
        for (var c, d, g = 1; g < arguments.length; g++) {
            d = arguments[g];
            for (c in d) a[c] = d[c];
            for (var h = 0; h < Oa.length; h++) c = Oa[h], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }

    function Qa(a) {
        var b = arguments.length;
        if (1 == b && m(arguments[0])) return Qa.apply(null, arguments[0]);
        for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
        return c
    };

    function Ra(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };

    function Ta(a, b) {
        this.la = {};
        this.l = [];
        this.s = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else a && this.Ia(a)
    }
    e = Ta.prototype;
    e.Na = function() {
        Ua(this);
        for (var a = [], b = 0; b < this.l.length; b++) a.push(this.la[this.l[b]]);
        return a
    };
    e.jb = function() {
        Ua(this);
        return this.l.concat()
    };
    e.cb = function(a) {
        return Va(this.la, a)
    };
    e.remove = function(a) {
        return Va(this.la, a) ? (delete this.la[a], this.s--, this.l.length > 2 * this.s && Ua(this), !0) : !1
    };

    function Ua(a) {
        if (a.s != a.l.length) {
            for (var b = 0, c = 0; b < a.l.length;) {
                var d = a.l[b];
                Va(a.la, d) && (a.l[c++] = d);
                b++
            }
            a.l.length = c
        }
        if (a.s != a.l.length) {
            for (var g = {}, c = b = 0; b < a.l.length;) d = a.l[b], Va(g, d) || (a.l[c++] = d, g[d] = 1), b++;
            a.l.length = c
        }
    }
    e.get = function(a, b) {
        return Va(this.la, a) ? this.la[a] : b
    };
    e.set = function(a, b) {
        Va(this.la, a) || (this.s++, this.l.push(a));
        this.la[a] = b
    };
    e.Ia = function(a) {
        var b;
        if (a instanceof Ta) b = a.jb(), a = a.Na();
        else {
            b = Ma(a);
            var c = [],
                d = 0,
                g;
            for (g in a) c[d++] = a[g];
            a = c
        }
        for (c = 0; c < b.length; c++) this.set(b[c], a[c])
    };
    e.forEach = function(a, b) {
        for (var c = this.jb(), d = 0; d < c.length; d++) {
            var g = c[d],
                h = this.get(g);
            a.call(b, h, g, this)
        }
    };
    e.ga = function() {
        return new Ta(this)
    };

    function Va(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var y;
    a: {
        var Wa = f.navigator;
        if (Wa) {
            var Xa = Wa.userAgent;
            if (Xa) {
                y = Xa;
                break a
            }
        }
        y = ""
    };
    var z;

    function Ya() {
        return f.navigator || null
    }
    var Za = -1 != y.indexOf("Opera") || -1 != y.indexOf("OPR"),
        A = -1 != y.indexOf("Trident") || -1 != y.indexOf("MSIE"),
        B = -1 != y.indexOf("Gecko") && -1 == y.toLowerCase().indexOf("webkit") && !(-1 != y.indexOf("Trident") || -1 != y.indexOf("MSIE")),
        C = -1 != y.toLowerCase().indexOf("webkit"),
        $a = C && -1 != y.indexOf("Mobile"),
        ab = Ya();
    z = -1 != (ab && ab.platform || "").indexOf("Mac");
    var bb = !! Ya() && -1 != (Ya().appVersion || "").indexOf("X11");

    function cb() {
        var a = f.document;
        return a ? a.documentMode : void 0
    }
    var db = function() {
            var a = "",
                b;
            if (Za && f.opera) return a = f.opera.version, da(a) ? a() : a;
            B ? b = /rv\:([^\);]+)(\)|;)/ : A ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : C && (b = /WebKit\/(\S+)/);
            b && (a = (a = b.exec(y)) ? a[1] : "");
            return A && (b = cb(), b > parseFloat(a)) ? String(b) : a
        }(),
        eb = {};

    function D(a) {
        var b;
        if (!(b = eb[a])) {
            b = 0;
            for (var c = na(String(db)).split("."), d = na(String(a)).split("."), g = Math.max(c.length, d.length), h = 0; 0 == b && h < g; h++) {
                var k = c[h] || "",
                    p = d[h] || "",
                    E = RegExp("(\\d*)(\\D*)", "g"),
                    lb = RegExp("(\\d*)(\\D*)", "g");
                do {
                    var S = E.exec(k) || ["", "", ""],
                        Sa = lb.exec(p) || ["", "", ""];
                    if (0 == S[0].length && 0 == Sa[0].length) break;
                    b = va(0 == S[1].length ? 0 : parseInt(S[1], 10), 0 == Sa[1].length ? 0 : parseInt(Sa[1], 10)) || va(0 == S[2].length, 0 == Sa[2].length) || va(S[2], Sa[2])
                } while (0 == b)
            }
            b = eb[a] = 0 <= b
        }
        return b
    }

    function F(a) {
        return A && fb >= a
    }
    var gb = f.document,
        fb = gb && A ? cb() || ("CSS1Compat" == gb.compatMode ? parseInt(db, 10) : 5) : void 0;

    function G(a, b) {
        this.x = l(a) ? a : 0;
        this.y = l(b) ? b : 0
    }
    e = G.prototype;
    e.ga = function() {
        return new G(this.x, this.y)
    };
    e.toString = function() {
        return "(" + this.x + ", " + this.y + ")"
    };
    e.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    e.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    e.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    e.scale = function(a, b) {
        var c = q(b) ? b : a;
        this.x *= a;
        this.y *= c;
        return this
    };

    function H() {
        0 != hb && (ib[fa(this)] = this)
    }
    var hb = 0,
        ib = {};
    H.prototype.fb = !1;
    H.prototype.ha = function() {
        if (!this.fb && (this.fb = !0, this.f(), 0 != hb)) {
            var a = fa(this);
            delete ib[a]
        }
    };
    H.prototype.f = function() {
        if (this.rb)
            for (; this.rb.length;) this.rb.shift()()
    };

    function jb(a) {
        a && "function" == typeof a.ha && a.ha()
    };
    var kb = !A || F(9),
        mb = !A || F(9),
        nb = A && !D("9");
    !C || D("528");
    B && D("1.9b") || A && D("8") || Za && D("9.5") || C && D("528");
    B && !D("8") || A && D("9");

    function I(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.Ea = !1;
        this.We = !0
    }
    I.prototype.f = function() {};
    I.prototype.ha = function() {};
    I.prototype.stopPropagation = function() {
        this.Ea = !0
    };
    I.prototype.preventDefault = function() {
        this.defaultPrevented = !0;
        this.We = !1
    };

    function ob(a) {
        a.preventDefault()
    };

    function pb(a) {
        pb[" "](a);
        return a
    }
    pb[" "] = aa;

    function J(a, b) {
        I.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.R = this.state = null;
        a && this.sa(a, b)
    }
    v(J, I);
    var qb = [1, 4, 2];
    J.prototype.sa = function(a, b) {
        var c = this.type = a.type;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var d = a.relatedTarget;
        if (d) {
            if (B) {
                var g;
                a: {
                    try {
                        pb(d.nodeName);
                        g = !0;
                        break a
                    } catch (h) {}
                    g = !1
                }
                g || (d = null)
            }
        } else "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
        this.relatedTarget = d;
        this.offsetX = C || void 0 !== a.offsetX ? a.offsetX : a.layerX;
        this.offsetY = C || void 0 !== a.offsetY ? a.offsetY : a.layerY;
        this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
        this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
        this.screenX = a.screenX || 0;
        this.screenY = a.screenY || 0;
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.state = a.state;
        this.R = a;
        a.defaultPrevented && this.preventDefault()
    };
    J.prototype.stopPropagation = function() {
        J.d.stopPropagation.call(this);
        this.R.stopPropagation ? this.R.stopPropagation() : this.R.cancelBubble = !0
    };
    J.prototype.preventDefault = function() {
        J.d.preventDefault.call(this);
        var a = this.R;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, nb) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    J.prototype.f = function() {};
    var rb = "closure_listenable_" + (1E6 * Math.random() | 0);

    function sb(a) {
        try {
            return !(!a || !a[rb])
        } catch (b) {
            return !1
        }
    }
    var tb = 0;

    function ub(a, b, c, d, g) {
        this.Da = a;
        this.nc = null;
        this.src = b;
        this.type = c;
        this.Gb = !! d;
        this.$b = g;
        this.key = ++tb;
        this.Ta = this.Fb = !1
    }

    function vb(a) {
        a.Ta = !0;
        a.Da = null;
        a.nc = null;
        a.src = null;
        a.$b = null
    };

    function wb(a) {
        this.src = a;
        this.t = {};
        this.Ab = 0
    }
    wb.prototype.add = function(a, b, c, d, g) {
        var h = a.toString();
        a = this.t[h];
        a || (a = this.t[h] = [], this.Ab++);
        var k = xb(a, b, d, g); - 1 < k ? (b = a[k], c || (b.Fb = !1)) : (b = new ub(b, this.src, h, !! d, g), b.Fb = c, a.push(b));
        return b
    };
    wb.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.t)) return !1;
        var g = this.t[a];
        b = xb(g, b, c, d);
        return -1 < b ? (vb(g[b]), x.splice.call(g, b, 1), 0 == g.length && (delete this.t[a], this.Ab--), !0) : !1
    };

    function yb(a, b) {
        var c = b.type;
        if (!(c in a.t)) return !1;
        var d = Ga(a.t[c], b);
        d && (vb(b), 0 == a.t[c].length && (delete a.t[c], a.Ab--));
        return d
    }
    wb.prototype.$ = function(a) {
        a = a && a.toString();
        var b = 0,
            c;
        for (c in this.t)
            if (!a || c == a) {
                for (var d = this.t[c], g = 0; g < d.length; g++)++b, vb(d[g]);
                delete this.t[c];
                this.Ab--
            }
        return b
    };
    wb.prototype.kb = function(a, b, c, d) {
        a = this.t[a.toString()];
        var g = -1;
        a && (g = xb(a, b, c, d));
        return -1 < g ? a[g] : null
    };

    function xb(a, b, c, d) {
        for (var g = 0; g < a.length; ++g) {
            var h = a[g];
            if (!h.Ta && h.Da == b && h.Gb == !! c && h.$b == d) return g
        }
        return -1
    };
    var zb = "closure_lm_" + (1E6 * Math.random() | 0),
        Ab = {}, Bb = 0;

    function K(a, b, c, d, g) {
        if (m(b)) {
            for (var h = 0; h < b.length; h++) K(a, b[h], c, d, g);
            return null
        }
        c = Cb(c);
        return sb(a) ? a.r(b, c, d, g) : Db(a, b, c, !1, d, g)
    }

    function Db(a, b, c, d, g, h) {
        if (!b) throw Error("Invalid event type");
        var k = !! g,
            p = Eb(a);
        p || (a[zb] = p = new wb(a));
        c = p.add(b, c, d, g, h);
        if (c.nc) return c;
        d = Fb();
        c.nc = d;
        d.src = a;
        d.Da = c;
        a.addEventListener ? a.addEventListener(b.toString(), d, k) : a.attachEvent(Gb(b.toString()), d);
        Bb++;
        return c
    }

    function Fb() {
        var a = Hb,
            b = mb ? function(c) {
                return a.call(b.src, b.Da, c)
            } : function(c) {
                c = a.call(b.src, b.Da, c);
                if (!c) return c
            };
        return b
    }

    function Ib(a, b, c, d, g) {
        if (m(b)) {
            for (var h = 0; h < b.length; h++) Ib(a, b[h], c, d, g);
            return null
        }
        c = Cb(c);
        return sb(a) ? a.Ke(b, c, d, g) : Db(a, b, c, !0, d, g)
    }

    function Jb(a, b, c, d, g) {
        if (m(b))
            for (var h = 0; h < b.length; h++) Jb(a, b[h], c, d, g);
        else c = Cb(c), sb(a) ? a.Xa(b, c, d, g) : a && (a = Eb(a)) && (b = a.kb(b, c, !! d, g)) && L(b)
    }

    function L(a) {
        if (q(a) || !a || a.Ta) return !1;
        var b = a.src;
        if (sb(b)) return yb(b.Q, a);
        var c = a.type,
            d = a.nc;
        b.removeEventListener ? b.removeEventListener(c, d, a.Gb) : b.detachEvent && b.detachEvent(Gb(c), d);
        Bb--;
        (c = Eb(b)) ? (yb(c, a), 0 == c.Ab && (c.src = null, b[zb] = null)) : vb(a);
        return !0
    }

    function Gb(a) {
        return a in Ab ? Ab[a] : Ab[a] = "on" + a
    }

    function Kb(a, b, c, d) {
        var g = 1;
        if (a = Eb(a))
            if (b = a.t[b.toString()])
                for (b = Ia(b), a = 0; a < b.length; a++) {
                    var h = b[a];
                    h && h.Gb == c && !h.Ta && (g &= !1 !== Lb(h, d))
                }
        return Boolean(g)
    }

    function Lb(a, b) {
        var c = a.Da,
            d = a.$b || a.src;
        a.Fb && L(a);
        return c.call(d, b)
    }

    function Hb(a, b) {
        if (a.Ta) return !0;
        if (!mb) {
            var c;
            if (!(c = b)) a: {
                c = ["window", "event"];
                for (var d = f, g; g = c.shift();)
                    if (null != d[g]) d = d[g];
                    else {
                        c = null;
                        break a
                    }
                c = d
            }
            g = c;
            c = new J(g, this);
            d = !0;
            if (!(0 > g.keyCode || void 0 != g.returnValue)) {
                a: {
                    var h = !1;
                    if (0 == g.keyCode) try {
                        g.keyCode = -1;
                        break a
                    } catch (k) {
                        h = !0
                    }
                    if (h || void 0 == g.returnValue) g.returnValue = !0
                }
                g = [];
                for (h = c.currentTarget; h; h = h.parentNode) g.push(h);
                for (var h = a.type, p = g.length - 1; !c.Ea && 0 <= p; p--) c.currentTarget = g[p], d &= Kb(g[p], h, !0, c);
                for (p = 0; !c.Ea && p < g.length; p++) c.currentTarget =
                    g[p], d &= Kb(g[p], h, !1, c)
            }
            return d
        }
        return Lb(a, new J(b, this))
    }

    function Eb(a) {
        a = a[zb];
        return a instanceof wb ? a : null
    }
    var Mb = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

    function Cb(a) {
        return da(a) ? a : a[Mb] || (a[Mb] = function(b) {
            return a.handleEvent(b)
        })
    };

    function M() {
        H.call(this);
        this.Q = new wb(this);
        this.rf = this
    }
    v(M, H);
    M.prototype[rb] = !0;
    e = M.prototype;
    e.kc = null;
    e.sd = function(a) {
        this.kc = a
    };
    e.addEventListener = function(a, b, c, d) {
        K(this, a, b, c, d)
    };
    e.removeEventListener = function(a, b, c, d) {
        Jb(this, a, b, c, d)
    };
    e.dispatchEvent = function(a) {
        var b, c = this.kc;
        if (c)
            for (b = []; c; c = c.kc) b.push(c);
        var c = this.rf,
            d = a.type || a;
        if (n(a)) a = new I(a, c);
        else if (a instanceof I) a.target = a.target || c;
        else {
            var g = a;
            a = new I(d, c);
            Pa(a, g)
        }
        var g = !0,
            h;
        if (b)
            for (var k = b.length - 1; !a.Ea && 0 <= k; k--) h = a.currentTarget = b[k], g = Nb(h, d, !0, a) && g;
        a.Ea || (h = a.currentTarget = c, g = Nb(h, d, !0, a) && g, a.Ea || (g = Nb(h, d, !1, a) && g));
        if (b)
            for (k = 0; !a.Ea && k < b.length; k++) h = a.currentTarget = b[k], g = Nb(h, d, !1, a) && g;
        return g
    };
    e.f = function() {
        M.d.f.call(this);
        this.Q && this.Q.$(void 0);
        this.kc = null
    };
    e.r = function(a, b, c, d) {
        return this.Q.add(String(a), b, !1, c, d)
    };
    e.Ke = function(a, b, c, d) {
        return this.Q.add(String(a), b, !0, c, d)
    };
    e.Xa = function(a, b, c, d) {
        return this.Q.remove(String(a), b, c, d)
    };

    function Nb(a, b, c, d) {
        b = a.Q.t[String(b)];
        if (!b) return !0;
        b = Ia(b);
        for (var g = !0, h = 0; h < b.length; ++h) {
            var k = b[h];
            if (k && !k.Ta && k.Gb == c) {
                var p = k.Da,
                    E = k.$b || k.src;
                k.Fb && yb(a.Q, k);
                g = !1 !== p.call(E, d) && g
            }
        }
        return g && !1 != d.We
    }
    e.kb = function(a, b, c, d) {
        return this.Q.kb(String(a), b, c, d)
    };

    function Ob(a, b) {
        M.call(this);
        this.Oa = a || 1;
        this.Va = b || f;
        this.Ac = r(this.zg, this);
        this.ed = t()
    }
    v(Ob, M);
    e = Ob.prototype;
    e.Nb = !1;
    e.ba = null;
    e.zg = function() {
        if (this.Nb) {
            var a = t() - this.ed;
            0 < a && a < 0.8 * this.Oa ? this.ba = this.Va.setTimeout(this.Ac, this.Oa - a) : (this.ba && (this.Va.clearTimeout(this.ba), this.ba = null), this.dispatchEvent(Pb), this.Nb && (this.ba = this.Va.setTimeout(this.Ac, this.Oa), this.ed = t()))
        }
    };
    e.start = function() {
        this.Nb = !0;
        this.ba || (this.ba = this.Va.setTimeout(this.Ac, this.Oa), this.ed = t())
    };
    e.stop = function() {
        this.Nb = !1;
        this.ba && (this.Va.clearTimeout(this.ba), this.ba = null)
    };
    e.f = function() {
        Ob.d.f.call(this);
        this.stop();
        delete this.Va
    };
    var Pb = "tick";

    function Qb(a, b, c) {
        if (da(a)) c && (a = r(a, c));
        else if (a && "function" == typeof a.handleEvent) a = r(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < b ? -1 : f.setTimeout(a, b || 0)
    };
    var Rb = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");

    function Sb(a) {
        if (Tb) {
            Tb = !1;
            var b = f.location;
            if (b) {
                var c = b.href;
                if (c && (c = (c = Sb(c)[3] || null) && decodeURIComponent(c)) && c != b.hostname) throw Tb = !0, Error();
            }
        }
        return a.match(Rb)
    }
    var Tb = C;

    function Ub(a, b) {
        var c;
        if (a instanceof Ub) this.O = l(b) ? b : a.O, Vb(this, a.Ua), c = a.wc, N(this), this.wc = c, c = a.ya, N(this), this.ya = c, Wb(this, a.lc), c = a.Qa, N(this), this.Qa = c, Xb(this, a.Z.ga()), c = a.hb, N(this), this.hb = c;
        else if (a && (c = Sb(String(a)))) {
            this.O = !! b;
            Vb(this, c[1] || "", !0);
            var d = c[2] || "";
            N(this);
            this.wc = Yb(d);
            d = c[3] || "";
            N(this);
            this.ya = Yb(d);
            Wb(this, c[4]);
            d = c[5] || "";
            N(this);
            this.Qa = Yb(d);
            Xb(this, c[6] || "", !0);
            c = c[7] || "";
            N(this);
            this.hb = Yb(c)
        } else this.O = !! b, this.Z = new Zb(null, 0, this.O)
    }
    e = Ub.prototype;
    e.Ua = "";
    e.wc = "";
    e.ya = "";
    e.lc = null;
    e.Qa = "";
    e.hb = "";
    e.Zf = !1;
    e.O = !1;
    e.toString = function() {
        var a = [],
            b = this.Ua;
        b && a.push($b(b, ac), ":");
        if (b = this.ya) {
            a.push("//");
            var c = this.wc;
            c && a.push($b(c, ac), "@");
            a.push(encodeURIComponent(String(b)));
            b = this.lc;
            null != b && a.push(":", String(b))
        }
        if (b = this.Qa) this.ya && "/" != b.charAt(0) && a.push("/"), a.push($b(b, "/" == b.charAt(0) ? bc : cc));
        (b = this.Z.toString()) && a.push("?", b);
        (b = this.hb) && a.push("#", $b(b, dc));
        return a.join("")
    };
    e.ga = function() {
        return new Ub(this)
    };

    function Vb(a, b, c) {
        N(a);
        a.Ua = c ? Yb(b) : b;
        a.Ua && (a.Ua = a.Ua.replace(/:$/, ""))
    }

    function Wb(a, b) {
        N(a);
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
            a.lc = b
        } else a.lc = null
    }

    function Xb(a, b, c) {
        N(a);
        b instanceof Zb ? (a.Z = b, a.Z.qd(a.O)) : (c || (b = $b(b, ec)), a.Z = new Zb(b, 0, a.O))
    }

    function N(a) {
        if (a.Zf) throw Error("Tried to modify a read-only Uri");
    }
    e.qd = function(a) {
        this.O = a;
        this.Z && this.Z.qd(a);
        return this
    };

    function fc(a) {
        return a instanceof Ub ? a.ga() : new Ub(a, void 0)
    }

    function Yb(a) {
        return a ? decodeURIComponent(a) : ""
    }

    function $b(a, b) {
        return n(a) ? encodeURI(a).replace(b, gc) : null
    }

    function gc(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }
    var ac = /[#\/\?@]/g,
        cc = /[\#\?:]/g,
        bc = /[\#\?]/g,
        ec = /[\#\?@]/g,
        dc = /#/g;

    function Zb(a, b, c) {
        this.L = a || null;
        this.O = !! c
    }

    function hc(a) {
        if (!a.k && (a.k = new Ta, a.s = 0, a.L))
            for (var b = a.L.split("&"), c = 0; c < b.length; c++) {
                var d = b[c].indexOf("="),
                    g = null,
                    h = null;
                0 <= d ? (g = b[c].substring(0, d), h = b[c].substring(d + 1)) : g = b[c];
                g = decodeURIComponent(g.replace(/\+/g, " "));
                g = ic(a, g);
                a.add(g, h ? decodeURIComponent(h.replace(/\+/g, " ")) : "")
            }
    }
    e = Zb.prototype;
    e.k = null;
    e.s = null;
    e.add = function(a, b) {
        hc(this);
        this.L = null;
        a = ic(this, a);
        var c = this.k.get(a);
        c || this.k.set(a, c = []);
        c.push(b);
        this.s++;
        return this
    };
    e.remove = function(a) {
        hc(this);
        a = ic(this, a);
        return this.k.cb(a) ? (this.L = null, this.s -= this.k.get(a).length, this.k.remove(a)) : !1
    };
    e.cb = function(a) {
        hc(this);
        a = ic(this, a);
        return this.k.cb(a)
    };
    e.jb = function() {
        hc(this);
        for (var a = this.k.Na(), b = this.k.jb(), c = [], d = 0; d < b.length; d++)
            for (var g = a[d], h = 0; h < g.length; h++) c.push(b[d]);
        return c
    };
    e.Na = function(a) {
        hc(this);
        var b = [];
        if (n(a)) this.cb(a) && (b = Ha(b, this.k.get(ic(this, a))));
        else {
            a = this.k.Na();
            for (var c = 0; c < a.length; c++) b = Ha(b, a[c])
        }
        return b
    };
    e.set = function(a, b) {
        hc(this);
        this.L = null;
        a = ic(this, a);
        this.cb(a) && (this.s -= this.k.get(a).length);
        this.k.set(a, [b]);
        this.s++;
        return this
    };
    e.get = function(a, b) {
        var c = a ? this.Na(a) : [];
        return 0 < c.length ? String(c[0]) : b
    };
    e.toString = function() {
        if (this.L) return this.L;
        if (!this.k) return "";
        for (var a = [], b = this.k.jb(), c = 0; c < b.length; c++)
            for (var d = b[c], g = encodeURIComponent(String(d)), d = this.Na(d), h = 0; h < d.length; h++) {
                var k = g;
                "" !== d[h] && (k += "=" + encodeURIComponent(String(d[h])));
                a.push(k)
            }
        return this.L = a.join("&")
    };
    e.ga = function() {
        var a = new Zb;
        a.L = this.L;
        this.k && (a.k = this.k.ga(), a.s = this.s);
        return a
    };

    function ic(a, b) {
        var c = String(b);
        a.O && (c = c.toLowerCase());
        return c
    }
    e.qd = function(a) {
        a && !this.O && (hc(this), this.L = null, this.k.forEach(function(a, c) {
            var d = c.toLowerCase();
            c != d && (this.remove(c), this.remove(d), 0 < a.length && (this.L = null, this.k.set(ic(this, d), Ia(a)), this.s += a.length))
        }, this));
        this.O = a
    };
    var jc = !A || F(9),
        kc = !B && !A || A && F(9) || B && D("1.9.1"),
        lc = A && !D("9"),
        mc = A || Za || C;
    w.e = {};
    w.e.set = function(a, b) {
        a.className = b
    };
    w.e.get = function(a) {
        a = a.className;
        return n(a) && a.match(/\S+/g) || []
    };
    w.e.add = function(a, b) {
        var c = w.e.get(a),
            d = Ka(arguments, 1),
            g = c.length + d.length;
        w.e.Dd(c, d);
        w.e.set(a, c.join(" "));
        return c.length == g
    };
    w.e.remove = function(a, b) {
        var c = w.e.get(a),
            d = Ka(arguments, 1),
            g = w.e.de(c, d);
        w.e.set(a, g.join(" "));
        return g.length == c.length - d.length
    };
    w.e.Dd = function(a, b) {
        for (var c = 0; c < b.length; c++) Fa(a, b[c]) || a.push(b[c])
    };
    w.e.de = function(a, b) {
        return Da(a, function(a) {
            return !Fa(b, a)
        })
    };
    w.e.yg = function(a, b, c) {
        for (var d = w.e.get(a), g = !1, h = 0; h < d.length; h++) d[h] == b && (Ja(d, h--, 1), g = !0);
        g && (d.push(c), w.e.set(a, d.join(" ")));
        return g
    };
    w.e.sf = function(a, b, c) {
        var d = w.e.get(a);
        n(b) ? Ga(d, b) : m(b) && (d = w.e.de(d, b));
        n(c) && !Fa(d, c) ? d.push(c) : m(c) && w.e.Dd(d, c);
        w.e.set(a, d.join(" "))
    };
    w.e.ac = function(a, b) {
        return Fa(w.e.get(a), b)
    };
    w.e.enable = function(a, b, c) {
        c ? w.e.add(a, b) : w.e.remove(a, b)
    };
    w.e.toggle = function(a, b) {
        var c = !w.e.ac(a, b);
        w.e.enable(a, b, c);
        return c
    };

    function O(a, b) {
        this.width = a;
        this.height = b
    }
    e = O.prototype;
    e.ga = function() {
        return new O(this.width, this.height)
    };
    e.toString = function() {
        return "(" + this.width + " x " + this.height + ")"
    };
    e.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    e.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    e.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    e.scale = function(a, b) {
        var c = q(b) ? b : a;
        this.width *= a;
        this.height *= c;
        return this
    };
    w.kf = !1;
    w.zd = !1;
    w.mf = w.kf || w.zd;
    w.g = function(a) {
        return a ? new nc(w.A(a)) : w.xf || (w.xf = new nc)
    };
    w.H = function() {
        return document
    };
    w.a = function(a) {
        return w.Oc(document, a)
    };
    w.Oc = function(a, b) {
        return n(b) ? a.getElementById(b) : b
    };
    w.Kf = function(a) {
        return w.re(document, a)
    };
    w.re = function(a, b) {
        return w.Oc(a, b)
    };
    w.gf = w.a;
    w.ib = function(a, b, c) {
        return w.Vb(document, a, b, c)
    };
    w.Aa = function(a, b) {
        var c = b || document;
        return w.Bc(c) ? c.querySelectorAll("." + a) : w.Vb(document, "*", a, b)
    };
    w.ra = function(a, b) {
        var c = b || document,
            d = null;
        return (d = w.Bc(c) ? c.querySelector("." + a) : w.Vb(document, "*", a, b)[0]) || null
    };
    w.Rc = function(a, b) {
        return w.ra(a, b)
    };
    w.Bc = function(a) {
        return !(!a.querySelectorAll || !a.querySelector)
    };
    w.Vb = function(a, b, c, d) {
        a = d || a;
        b = b && "*" != b ? b.toUpperCase() : "";
        if (w.Bc(a) && (b || c)) return a.querySelectorAll(b + (c ? "." + c : ""));
        if (c && a.getElementsByClassName) {
            a = a.getElementsByClassName(c);
            if (b) {
                d = {};
                for (var g = 0, h = 0, k; k = a[h]; h++) b == k.nodeName && (d[g++] = k);
                d.length = g;
                return d
            }
            return a
        }
        a = a.getElementsByTagName(b || "*");
        if (c) {
            d = {};
            for (h = g = 0; k = a[h]; h++) b = k.className, "function" == typeof b.split && Fa(b.split(/\s+/), c) && (d[g++] = k);
            d.length = g;
            return d
        }
        return a
    };
    w.hf = w.ib;
    w.td = function(a, b) {
        La(b, function(b, d) {
            "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in w.Ad ? a.setAttribute(w.Ad[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
        })
    };
    w.Ad = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };
    w.ka = function(a) {
        return w.te(a || window)
    };
    w.te = function(a) {
        a = a.document;
        a = w.nb(a) ? a.documentElement : a.body;
        return new O(a.clientWidth, a.clientHeight)
    };
    w.Hf = function() {
        return w.fe(window)
    };
    w.fe = function(a) {
        var b = a.document,
            c = 0;
        if (b) {
            a = w.te(a).height;
            var c = b.body,
                d = b.documentElement;
            if (w.nb(b) && d.scrollHeight) c = d.scrollHeight != a ? d.scrollHeight : d.offsetHeight;
            else {
                var b = d.scrollHeight,
                    g = d.offsetHeight;
                d.clientHeight != g && (b = c.scrollHeight, g = c.offsetHeight);
                c = b > a ? b > g ? b : g : b < g ? b : g
            }
        }
        return c
    };
    w.Kg = function(a) {
        return w.g((a || f || window).document).Y()
    };
    w.Y = function() {
        return w.ge(document)
    };
    w.ge = function(a) {
        var b = w.Nc(a);
        a = w.Uc(a);
        return A && D("10") && a.pageYOffset != b.scrollTop ? new G(b.scrollLeft, b.scrollTop) : new G(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    };
    w.If = function() {
        return w.Nc(document)
    };
    w.Nc = function(a) {
        return !C && w.nb(a) ? a.documentElement : a.body || a.documentElement
    };
    w.M = function(a) {
        return a ? w.Uc(a) : window
    };
    w.Uc = function(a) {
        return a.parentWindow || a.defaultView
    };
    w.h = function(a, b, c) {
        return w.Md(document, arguments)
    };
    w.Md = function(a, b) {
        var c = b[0],
            d = b[1];
        if (!jc && d && (d.name || d.type)) {
            c = ["<", c];
            d.name && c.push(' name="', oa(d.name), '"');
            if (d.type) {
                c.push(' type="', oa(d.type), '"');
                var g = {};
                Pa(g, d);
                delete g.type;
                d = g
            }
            c.push(">");
            c = c.join("")
        }
        c = a.createElement(c);
        d && (n(d) ? c.className = d : m(d) ? w.e.add.apply(null, [c].concat(d)) : w.td(c, d));
        2 < b.length && w.Eb(a, c, b, 2);
        return c
    };
    w.Eb = function(a, b, c, d) {
        function g(c) {
            c && b.appendChild(n(c) ? a.createTextNode(c) : c)
        }
        for (; d < c.length; d++) {
            var h = c[d];
            ca(h) && !w.ad(h) ? Ca(w.bd(h) ? Ia(h) : h, g) : g(h)
        }
    };
    w.jf = w.h;
    w.createElement = function(a) {
        return document.createElement(a)
    };
    w.createTextNode = function(a) {
        return document.createTextNode(String(a))
    };
    w.wf = function(a, b, c) {
        return w.Nd(document, a, b, !! c)
    };
    w.Nd = function(a, b, c, d) {
        for (var g = ["<tr>"], h = 0; h < c; h++) g.push(d ? "<td>&nbsp;</td>" : "<td></td>");
        g.push("</tr>");
        g = g.join("");
        c = ["<table>"];
        for (h = 0; h < b; h++) c.push(g);
        c.push("</table>");
        a = a.createElement("DIV");
        a.innerHTML = c.join("");
        return a.removeChild(a.firstChild)
    };
    w.Vf = function(a) {
        return w.ze(document, a)
    };
    w.ze = function(a, b) {
        var c = a.createElement("div");
        A ? (c.innerHTML = "<br>" + b, c.removeChild(c.firstChild)) : c.innerHTML = b;
        if (1 == c.childNodes.length) return c.removeChild(c.firstChild);
        for (var d = a.createDocumentFragment(); c.firstChild;) d.appendChild(c.firstChild);
        return d
    };
    w.Ge = function() {
        return w.nb(document)
    };
    w.nb = function(a) {
        return w.mf ? w.zd : "CSS1Compat" == a.compatMode
    };
    w.canHaveChildren = function(a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };
    w.appendChild = function(a, b) {
        a.appendChild(b)
    };
    w.append = function(a, b) {
        w.Eb(w.A(a), a, arguments, 1)
    };
    w.tb = function(a) {
        for (var b; b = a.firstChild;) a.removeChild(b)
    };
    w.bc = function(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b)
    };
    w.Yc = function(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
    };
    w.Ee = function(a, b, c) {
        a.insertBefore(b, a.childNodes[c] || null)
    };
    w.removeNode = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    };
    w.Ue = function(a, b) {
        var c = b.parentNode;
        c && c.replaceChild(a, b)
    };
    w.Zd = function(a) {
        var b, c = a.parentNode;
        if (c && 11 != c.nodeType) {
            if (a.removeNode) return a.removeNode(!1);
            for (; b = a.firstChild;) c.insertBefore(b, a);
            return w.removeNode(a)
        }
    };
    w.ce = function(a) {
        return kc && void 0 != a.children ? a.children : Da(a.childNodes, function(a) {
            return 1 == a.nodeType
        })
    };
    w.Pc = function(a) {
        return void 0 != a.firstElementChild ? a.firstElementChild : w.Xb(a.firstChild, !0)
    };
    w.ie = function(a) {
        return void 0 != a.lastElementChild ? a.lastElementChild : w.Xb(a.lastChild, !1)
    };
    w.je = function(a) {
        return void 0 != a.nextElementSibling ? a.nextElementSibling : w.Xb(a.nextSibling, !0)
    };
    w.pe = function(a) {
        return void 0 != a.previousElementSibling ? a.previousElementSibling : w.Xb(a.previousSibling, !1)
    };
    w.Xb = function(a, b) {
        for (; a && 1 != a.nodeType;) a = b ? a.nextSibling : a.previousSibling;
        return a
    };
    w.ke = function(a) {
        if (!a) return null;
        if (a.firstChild) return a.firstChild;
        for (; a && !a.nextSibling;) a = a.parentNode;
        return a ? a.nextSibling : null
    };
    w.qe = function(a) {
        if (!a) return null;
        if (!a.previousSibling) return a.parentNode;
        for (a = a.previousSibling; a && a.lastChild;) a = a.lastChild;
        return a
    };
    w.ad = function(a) {
        return ea(a) && 0 < a.nodeType
    };
    w.Zc = function(a) {
        return ea(a) && 1 == a.nodeType
    };
    w.Je = function(a) {
        return ea(a) && a.window == a
    };
    w.Qc = function(a) {
        if (mc && !(A && D("9") && !D("10") && f.SVGElement && a instanceof f.SVGElement)) return a.parentElement;
        a = a.parentNode;
        return w.Zc(a) ? a : null
    };
    w.contains = function(a, b) {
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    w.Hd = function(a, b) {
        if (a == b) return 0;
        if (a.compareDocumentPosition) return a.compareDocumentPosition(b) & 2 ? 1 : -1;
        if (A && !F(9)) {
            if (9 == a.nodeType) return -1;
            if (9 == b.nodeType) return 1
        }
        if ("sourceIndex" in a || a.parentNode && "sourceIndex" in a.parentNode) {
            var c = 1 == a.nodeType,
                d = 1 == b.nodeType;
            if (c && d) return a.sourceIndex - b.sourceIndex;
            var g = a.parentNode,
                h = b.parentNode;
            return g == h ? w.Jd(a, b) : !c && w.contains(g, b) ? -1 * w.Id(a, b) : !d && w.contains(h, a) ? w.Id(b, a) : (c ? a.sourceIndex : g.sourceIndex) - (d ? b.sourceIndex : h.sourceIndex)
        }
        d =
            w.A(a);
        c = d.createRange();
        c.selectNode(a);
        c.collapse(!0);
        d = d.createRange();
        d.selectNode(b);
        d.collapse(!0);
        return c.compareBoundaryPoints(f.Range.START_TO_END, d)
    };
    w.Id = function(a, b) {
        var c = a.parentNode;
        if (c == b) return -1;
        for (var d = b; d.parentNode != c;) d = d.parentNode;
        return w.Jd(d, a)
    };
    w.Jd = function(a, b) {
        for (var c = b; c = c.previousSibling;)
            if (c == a) return -1;
        return 1
    };
    w.Wd = function(a) {
        var b, c = arguments.length;
        if (!c) return null;
        if (1 == c) return arguments[0];
        var d = [],
            g = Infinity;
        for (b = 0; b < c; b++) {
            for (var h = [], k = arguments[b]; k;) h.unshift(k), k = k.parentNode;
            d.push(h);
            g = Math.min(g, h.length)
        }
        h = null;
        for (b = 0; b < g; b++) {
            for (var k = d[0][b], p = 1; p < c; p++)
                if (k != d[p][b]) return h;
            h = k
        }
        return h
    };
    w.A = function(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    };
    w.Wb = function(a) {
        return a.contentDocument || a.contentWindow.document
    };
    w.he = function(a) {
        return a.contentWindow || w.M(w.Wb(a))
    };
    w.af = function(a, b) {
        if ("textContent" in a) a.textContent = b;
        else if (3 == a.nodeType) a.data = b;
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
            a.firstChild.data = b
        } else {
            w.tb(a);
            var c = w.A(a);
            a.appendChild(c.createTextNode(String(b)))
        }
    };
    w.oe = function(a) {
        if ("outerHTML" in a) return a.outerHTML;
        var b = w.A(a).createElement("div");
        b.appendChild(a.cloneNode(!0));
        return b.innerHTML
    };
    w.Xd = function(a, b) {
        var c = [];
        return w.Kc(a, b, c, !0) ? c[0] : void 0
    };
    w.Yd = function(a, b) {
        var c = [];
        w.Kc(a, b, c, !1);
        return c
    };
    w.Kc = function(a, b, c, d) {
        if (null != a)
            for (a = a.firstChild; a;) {
                if (b(a) && (c.push(a), d) || w.Kc(a, b, c, d)) return !0;
                a = a.nextSibling
            }
        return !1
    };
    w.Bd = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
    };
    w.Cb = {
        IMG: " ",
        BR: "\n"
    };
    w.$c = function(a) {
        return w.we(a) && w.Ie(a)
    };
    w.vb = function(a, b) {
        b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))
    };
    w.He = function(a) {
        var b;
        return (b = w.bg(a) ? !a.disabled && (!w.we(a) || w.Ie(a)) : w.$c(a)) && A ? w.Tf(a) : b
    };
    w.we = function(a) {
        a = a.getAttributeNode("tabindex");
        return null != a && a.specified
    };
    w.Ie = function(a) {
        a = a.tabIndex;
        return q(a) && 0 <= a && 32768 > a
    };
    w.bg = function(a) {
        return "A" == a.tagName || "INPUT" == a.tagName || "TEXTAREA" == a.tagName || "SELECT" == a.tagName || "BUTTON" == a.tagName
    };
    w.Tf = function(a) {
        a = da(a.getBoundingClientRect) ? a.getBoundingClientRect() : {
            height: a.offsetHeight,
            width: a.offsetWidth
        };
        return null != a && 0 < a.height && 0 < a.width
    };
    w.Yb = function(a) {
        if (lc && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
        else {
            var b = [];
            w.Sc(a, b, !0);
            a = b.join("")
        }
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        lc || (a = a.replace(/ +/g, " "));
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    };
    w.Og = function(a) {
        var b = [];
        w.Sc(a, b, !1);
        return b.join("")
    };
    w.Sc = function(a, b, c) {
        if (!(a.nodeName in w.Bd))
            if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in w.Cb) b.push(w.Cb[a.nodeName]);
            else
                for (a = a.firstChild; a;) w.Sc(a, b, c), a = a.nextSibling
    };
    w.me = function(a) {
        return w.Yb(a).length
    };
    w.ne = function(a, b) {
        for (var c = b || w.A(a).body, d = []; a && a != c;) {
            for (var g = a; g = g.previousSibling;) d.unshift(w.Yb(g));
            a = a.parentNode
        }
        return d.join("").replace(/^[\s\xa0]+/, "").replace(/ +/g, " ").length
    };
    w.le = function(a, b, c) {
        a = [a];
        for (var d = 0, g = null; 0 < a.length && d < b;)
            if (g = a.pop(), !(g.nodeName in w.Bd))
                if (3 == g.nodeType) var h = g.nodeValue.replace(/(\r\n|\r|\n)/g, "").replace(/ +/g, " "),
                    d = d + h.length;
                else if (g.nodeName in w.Cb) d += w.Cb[g.nodeName].length;
                else
                    for (h = g.childNodes.length - 1; 0 <= h; h--) a.push(g.childNodes[h]);
        ea(c) && (c.Tg = g ? g.nodeValue.length + b - d - 1 : 0, c.Sg = g);
        return g
    };
    w.bd = function(a) {
        if (a && "number" == typeof a.length) {
            if (ea(a)) return "function" == typeof a.item || "string" == typeof a.item;
            if (da(a)) return "function" == typeof a.item
        }
        return !1
    };
    w.Sb = function(a, b, c) {
        if (!b && !c) return null;
        var d = b ? b.toUpperCase() : null;
        return w.Mc(a, function(a) {
            return (!d || a.nodeName == d) && (!c || w.e.ac(a, c))
        }, !0)
    };
    w.be = function(a, b) {
        return w.Sb(a, null, b)
    };
    w.Mc = function(a, b, c, d) {
        c || (a = a.parentNode);
        c = null == d;
        for (var g = 0; a && (c || g <= d);) {
            if (b(a)) return a;
            a = a.parentNode;
            g++
        }
        return null
    };
    w.ae = function(a) {
        try {
            return a && a.activeElement
        } catch (b) {}
        return null
    };
    w.Lg = Ra(function() {
        var a = w.M(),
            b = B && $a;
        return l(a.devicePixelRatio) && !b ? a.devicePixelRatio : a.matchMedia ? w.gc(0.75) || w.gc(1.5) || w.gc(2) || w.gc(3) || 1 : 1
    });
    w.gc = function(a) {
        return w.M().matchMedia("(-webkit-min-device-pixel-ratio: " + a + "),(min--moz-device-pixel-ratio: " + a + "),(min-resolution: " + a + "dppx)").matches ? a : 0
    };

    function nc(a) {
        this.i = a || f.document || document
    }
    e = nc.prototype;
    e.g = w.g;
    e.H = function() {
        return this.i
    };
    e.a = function(a) {
        return w.Oc(this.i, a)
    };
    e.Kf = function(a) {
        return w.re(this.i, a)
    };
    e.gf = nc.prototype.a;
    e.ib = function(a, b, c) {
        return w.Vb(this.i, a, b, c)
    };
    e.Aa = function(a, b) {
        return w.Aa(a, b || this.i)
    };
    e.ra = function(a, b) {
        return w.ra(a, b || this.i)
    };
    e.Rc = function(a, b) {
        return w.Rc(a, b || this.i)
    };
    e.hf = nc.prototype.ib;
    e.td = w.td;
    e.ka = function(a) {
        return w.ka(a || this.M())
    };
    e.Hf = function() {
        return w.fe(this.M())
    };
    e.h = function(a, b, c) {
        return w.Md(this.i, arguments)
    };
    e.jf = nc.prototype.h;
    e.createElement = function(a) {
        return this.i.createElement(a)
    };
    e.createTextNode = function(a) {
        return this.i.createTextNode(String(a))
    };
    e.wf = function(a, b, c) {
        return w.Nd(this.i, a, b, !! c)
    };
    e.Vf = function(a) {
        return w.ze(this.i, a)
    };
    e.Ge = function() {
        return w.nb(this.i)
    };
    e.M = function() {
        return w.Uc(this.i)
    };
    e.If = function() {
        return w.Nc(this.i)
    };
    e.Y = function() {
        return w.ge(this.i)
    };
    e.ae = function(a) {
        return w.ae(a || this.i)
    };
    e.appendChild = w.appendChild;
    e.append = w.append;
    e.canHaveChildren = w.canHaveChildren;
    e.tb = w.tb;
    e.bc = w.bc;
    e.Yc = w.Yc;
    e.Ee = w.Ee;
    e.removeNode = w.removeNode;
    e.Ue = w.Ue;
    e.Zd = w.Zd;
    e.ce = w.ce;
    e.Pc = w.Pc;
    e.ie = w.ie;
    e.je = w.je;
    e.pe = w.pe;
    e.ke = w.ke;
    e.qe = w.qe;
    e.ad = w.ad;
    e.Zc = w.Zc;
    e.Je = w.Je;
    e.Qc = w.Qc;
    e.contains = w.contains;
    e.Hd = w.Hd;
    e.Wd = w.Wd;
    e.A = w.A;
    e.Wb = w.Wb;
    e.he = w.he;
    e.af = w.af;
    e.oe = w.oe;
    e.Xd = w.Xd;
    e.Yd = w.Yd;
    e.$c = w.$c;
    e.vb = w.vb;
    e.He = w.He;
    e.Yb = w.Yb;
    e.me = w.me;
    e.ne = w.ne;
    e.le = w.le;
    e.bd = w.bd;
    e.Sb = w.Sb;
    e.be = w.be;
    e.Mc = w.Mc;
    w.dataset = {};
    w.dataset.Ha = "data-";
    w.dataset.set = function(a, b, c) {
        a.dataset ? a.dataset[b] = c : a.setAttribute(w.dataset.Ha + xa(b), c)
    };
    w.dataset.get = function(a, b) {
        return a.dataset ? b in a.dataset ? a.dataset[b] : null : a.getAttribute(w.dataset.Ha + xa(b))
    };
    w.dataset.remove = function(a, b) {
        a.dataset ? delete a.dataset[b] : a.removeAttribute(w.dataset.Ha + xa(b))
    };
    w.dataset.ac = function(a, b) {
        return a.dataset ? b in a.dataset : a.hasAttribute ? a.hasAttribute(w.dataset.Ha + xa(b)) : !! a.getAttribute(w.dataset.Ha + xa(b))
    };
    w.dataset.Jg = function(a) {
        if (a.dataset) return a.dataset;
        var b = {};
        a = a.attributes;
        for (var c = 0; c < a.length; ++c) {
            var d = a[c];
            if (0 == d.name.lastIndexOf(w.dataset.Ha, 0)) {
                var g = wa(d.name.substr(5));
                b[g] = d.value
            }
        }
        return b
    };
    w.N = {};
    w.N.lf = 'javascript:""';
    w.N.Eg = A ? 'javascript:""' : "javascript:undefined";
    w.N.pf = "border:0;vertical-align:bottom;";
    w.N.Fc = function(a, b) {
        return a.h("iframe", {
            frameborder: 0,
            style: w.N.pf + (b || ""),
            src: w.N.lf
        })
    };
    w.N.Dg = function(a, b) {
        var c = w.Wb(a);
        c.open();
        c.write(b);
        c.close()
    };
    w.N.Gg = function(a, b, c, d, g) {
        var h = w.g(a),
            k = [];
        g || k.push("<!DOCTYPE html>");
        k.push("<html><head>", b, "</head><body>", c, "</body></html>");
        b = w.N.Fc(h, d);
        a.appendChild(b);
        w.N.Dg(b, k.join(""));
        return b
    };

    function oc(a, b, c, d, g) {
        if (!(A || C && D("525"))) return !0;
        if (z && g) return pc(a);
        if (g && !d) return !1;
        q(b) && (b = qc(b));
        if (!c && (17 == b || 18 == b || z && 91 == b)) return !1;
        if (C && d && c) switch (a) {
            case 220:
            case 219:
            case 221:
            case 192:
            case 186:
            case 189:
            case 187:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
                return !1
        }
        if (A && d && b == a) return !1;
        switch (a) {
            case 13:
                return !(A && F(9));
            case 27:
                return !C
        }
        return pc(a)
    }

    function pc(a) {
        if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || C && 0 == a) return !0;
        switch (a) {
            case 32:
            case 63:
            case 107:
            case 109:
            case 110:
            case 111:
            case 186:
            case 59:
            case 189:
            case 187:
            case 61:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
            case 219:
            case 220:
            case 221:
                return !0;
            default:
                return !1
        }
    }

    function qc(a) {
        if (B) a = rc(a);
        else if (z && C) a: switch (a) {
            case 93:
                a = 91;
                break a
        }
        return a
    }

    function rc(a) {
        switch (a) {
            case 61:
                return 187;
            case 59:
                return 186;
            case 173:
                return 189;
            case 224:
                return 91;
            case 0:
                return 224;
            default:
                return a
        }
    };

    function sc(a, b) {
        M.call(this);
        a && (this.dc && this.detach(), this.b = a, this.cc = K(this.b, "keypress", this, b), this.dd = K(this.b, "keydown", this.Nf, b, this), this.dc = K(this.b, "keyup", this.Pf, b, this))
    }
    v(sc, M);
    e = sc.prototype;
    e.b = null;
    e.cc = null;
    e.dd = null;
    e.dc = null;
    e.J = -1;
    e.ta = -1;
    e.xc = !1;
    var tc = {
            3: 13,
            12: 144,
            63232: 38,
            63233: 40,
            63234: 37,
            63235: 39,
            63236: 112,
            63237: 113,
            63238: 114,
            63239: 115,
            63240: 116,
            63241: 117,
            63242: 118,
            63243: 119,
            63244: 120,
            63245: 121,
            63246: 122,
            63247: 123,
            63248: 44,
            63272: 46,
            63273: 36,
            63275: 35,
            63276: 33,
            63277: 34,
            63289: 144,
            63302: 45
        }, uc = {
            Up: 38,
            Down: 40,
            Left: 37,
            Right: 39,
            Enter: 13,
            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F7: 118,
            F8: 119,
            F9: 120,
            F10: 121,
            F11: 122,
            F12: 123,
            "U+007F": 46,
            Home: 36,
            End: 35,
            PageUp: 33,
            PageDown: 34,
            Insert: 45
        }, vc = A || C && D("525"),
        wc = z && B;
    e = sc.prototype;
    e.Nf = function(a) {
        C && (17 == this.J && !a.ctrlKey || 18 == this.J && !a.altKey || z && 91 == this.J && !a.metaKey) && (this.ta = this.J = -1); - 1 == this.J && (a.ctrlKey && 17 != a.keyCode ? this.J = 17 : a.altKey && 18 != a.keyCode ? this.J = 18 : a.metaKey && 91 != a.keyCode && (this.J = 91));
        vc && !oc(a.keyCode, this.J, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.ta = qc(a.keyCode), wc && (this.xc = a.altKey))
    };
    e.Pf = function(a) {
        this.ta = this.J = -1;
        this.xc = a.altKey
    };
    e.handleEvent = function(a) {
        var b = a.R,
            c, d, g = b.altKey;
        A && "keypress" == a.type ? (c = this.ta, d = 13 != c && 27 != c ? b.keyCode : 0) : C && "keypress" == a.type ? (c = this.ta, d = 0 <= b.charCode && 63232 > b.charCode && pc(c) ? b.charCode : 0) : Za ? (c = this.ta, d = pc(c) ? b.keyCode : 0) : (c = b.keyCode || this.ta, d = b.charCode || 0, wc && (g = this.xc), z && 63 == d && 224 == c && (c = 191));
        var h = c = qc(c),
            k = b.keyIdentifier;
        c ? 63232 <= c && c in tc ? h = tc[c] : 25 == c && a.shiftKey && (h = 9) : k && k in uc && (h = uc[k]);
        a = h == this.J;
        this.J = h;
        b = new xc(h, d, a, b);
        b.altKey = g;
        this.dispatchEvent(b)
    };
    e.a = function() {
        return this.b
    };
    e.detach = function() {
        this.cc && (L(this.cc), L(this.dd), L(this.dc), this.dc = this.dd = this.cc = null);
        this.b = null;
        this.ta = this.J = -1
    };
    e.f = function() {
        sc.d.f.call(this);
        this.detach()
    };

    function xc(a, b, c, d) {
        J.call(this, d);
        this.type = "key";
        this.keyCode = a;
        this.charCode = b;
        this.repeat = c
    }
    v(xc, J);

    function P() {
        M.call(this);
        this.V = yc;
        this.Ic = this.startTime = null
    }
    v(P, M);
    var yc = 0;
    P.prototype.T = function() {
        return 1 == this.V
    };
    P.prototype.hc = function() {
        this.K("begin")
    };
    P.prototype.sb = function() {
        this.K("end")
    };
    P.prototype.K = function(a) {
        this.dispatchEvent(a)
    };

    function zc(a, b, c) {
        H.call(this);
        this.gd = a;
        this.Oa = b || 0;
        this.I = c;
        this.tf = r(this.Bf, this)
    }
    v(zc, H);
    e = zc.prototype;
    e.S = 0;
    e.f = function() {
        zc.d.f.call(this);
        this.stop();
        delete this.gd;
        delete this.I
    };
    e.start = function(a) {
        this.stop();
        this.S = Qb(this.tf, l(a) ? a : this.Oa)
    };
    e.stop = function() {
        0 != this.S && f.clearTimeout(this.S);
        this.S = 0
    };
    e.Bf = function() {
        this.S = 0;
        this.gd && this.gd.call(this.I)
    };
    var Ac = {}, Bc = null;

    function Cc(a) {
        a = fa(a);
        delete Ac[a];
        Na(Ac) && Bc && Bc.stop()
    }

    function Dc() {
        Bc || (Bc = new zc(function() {
            Ec()
        }, 20));
        var a = Bc;
        0 != a.S || a.start()
    }

    function Ec() {
        var a = t();
        La(Ac, function(b) {
            Fc(b, a)
        });
        Na(Ac) || Dc()
    };

    function Gc(a, b, c, d) {
        P.call(this);
        if (!m(a) || !m(b)) throw Error("Start and end parameters must be arrays");
        if (a.length != b.length) throw Error("Start and end points must be the same length");
        this.zb = a;
        this.Ef = b;
        this.duration = c;
        this.Cd = d;
        this.coords = [];
        this.vc = !1
    }
    v(Gc, P);
    e = Gc.prototype;
    e.P = 0;
    e.play = function(a) {
        if (a || this.V == yc) this.P = 0, this.coords = this.zb;
        else if (this.T()) return !1;
        Cc(this);
        this.startTime = a = t(); - 1 == this.V && (this.startTime -= this.duration * this.P);
        this.Ic = this.startTime + this.duration;
        this.P || this.hc();
        this.K("play"); - 1 == this.V && this.K("resume");
        this.V = 1;
        var b = fa(this);
        b in Ac || (Ac[b] = this);
        Dc();
        Fc(this, a);
        return !0
    };
    e.stop = function(a) {
        Cc(this);
        this.V = yc;
        a && (this.P = 1);
        Hc(this, this.P);
        this.K("stop");
        this.sb()
    };
    e.f = function() {
        this.V == yc || this.stop(!1);
        this.K("destroy");
        Gc.d.f.call(this)
    };

    function Fc(a, b) {
        a.P = (b - a.startTime) / (a.Ic - a.startTime);
        1 <= a.P && (a.P = 1);
        Hc(a, a.P);
        1 == a.P ? (a.V = yc, Cc(a), a.K("finish"), a.sb()) : a.T() && a.kd()
    }

    function Hc(a, b) {
        da(a.Cd) && (b = a.Cd(b));
        a.coords = Array(a.zb.length);
        for (var c = 0; c < a.zb.length; c++) a.coords[c] = (a.Ef[c] - a.zb[c]) * b + a.zb[c]
    }
    e.kd = function() {
        this.K("animate")
    };
    e.K = function(a) {
        this.dispatchEvent(new Ic(a, this))
    };

    function Ic(a, b) {
        I.call(this, a);
        this.coords = b.coords;
        this.x = b.coords[0];
        this.y = b.coords[1];
        this.z = b.coords[2];
        this.duration = b.duration;
        this.P = b.P;
        this.state = b.V;
        this.Ja = b
    }
    v(Ic, I);
    w.vendor = {};
    w.vendor.Tc = function() {
        return C ? "Webkit" : B ? "Moz" : A ? "ms" : Za ? "O" : null
    };
    w.vendor.Lf = function() {
        return C ? "-webkit" : B ? "-moz" : A ? "-ms" : Za ? "-o" : null
    };
    w.vendor.Ng = function(a, b) {
        if (b && a in b) return a;
        var c = w.vendor.Tc();
        return c ? (c = c.toLowerCase(), c += ya(a), !l(b) || c in b ? c : null) : null
    };
    w.vendor.Mg = function(a) {
        return ((w.vendor.Tc() || "") + a).toLowerCase()
    };

    function Jc(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    e = Jc.prototype;
    e.ga = function() {
        return new Jc(this.top, this.right, this.bottom, this.left)
    };
    e.toString = function() {
        return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
    };
    e.contains = function(a) {
        return this && a ? a instanceof Jc ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    e.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    e.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    e.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    e.scale = function(a, b) {
        var c = q(b) ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= c;
        this.bottom *= c;
        return this
    };

    function Kc(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }
    e = Kc.prototype;
    e.ga = function() {
        return new Kc(this.left, this.top, this.width, this.height)
    };
    e.toString = function() {
        return "(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)"
    };
    e.contains = function(a) {
        return a instanceof Kc ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
    };
    e.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    e.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    e.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    e.scale = function(a, b) {
        var c = q(b) ? b : a;
        this.left *= a;
        this.width *= a;
        this.top *= c;
        this.height *= c;
        return this
    };

    function Lc(a, b, c) {
        n(b) ? Mc(a, c, b) : La(b, s(Mc, a))
    }

    function Mc(a, b, c) {
        (c = Nc(a, c)) && (a.style[c] = b)
    }

    function Nc(a, b) {
        var c = wa(b);
        if (void 0 === a.style[c]) {
            var d = w.vendor.Tc() + ya(b);
            if (void 0 !== a.style[d]) return d
        }
        return c
    }

    function Oc(a, b) {
        var c = w.A(a);
        return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : ""
    }

    function Pc(a, b) {
        return Oc(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function Qc(a) {
        return Pc(a, "position")
    }

    function Rc(a, b, c) {
        var d, g = B && (z || bb) && D("1.9");
        b instanceof G ? (d = b.x, b = b.y) : (d = b, b = c);
        a.style.left = Sc(d, g);
        a.style.top = Sc(b, g)
    }

    function Tc(a) {
        var b;
        try {
            b = a.getBoundingClientRect()
        } catch (c) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
        A && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    }

    function Uc(a) {
        if (A && !F(8)) return a.offsetParent;
        var b = w.A(a),
            c = Pc(a, "position"),
            d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (c = Pc(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
        return null
    }

    function Vc(a) {
        var b, c = w.A(a),
            d = Pc(a, "position"),
            g = B && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY),
            h = new G(0, 0),
            k;
        b = c ? w.A(c) : w.H();
        k = !A || F(9) || w.g(b).Ge() ? b.documentElement : b.body;
        if (a == k) return h;
        if (a.getBoundingClientRect) b = Tc(a), a = w.g(c).Y(), h.x = b.left + a.x, h.y = b.top + a.y;
        else if (c.getBoxObjectFor && !g) b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(k), h.x = b.screenX - a.screenX, h.y = b.screenY - a.screenY;
        else {
            b = a;
            do {
                h.x += b.offsetLeft;
                h.y +=
                    b.offsetTop;
                b != a && (h.x += b.clientLeft || 0, h.y += b.clientTop || 0);
                if (C && "fixed" == Qc(b)) {
                    h.x += c.body.scrollLeft;
                    h.y += c.body.scrollTop;
                    break
                }
                b = b.offsetParent
            } while (b && b != a);
            if (Za || C && "absolute" == d) h.y -= c.body.offsetTop;
            for (b = a;
                 (b = Uc(b)) && b != c.body && b != k;) h.x -= b.scrollLeft, Za && "TR" == b.tagName || (h.y -= b.scrollTop)
        }
        return h
    }

    function Q(a, b, c) {
        if (b instanceof O) c = b.height, b = b.width;
        else if (void 0 == c) throw Error("missing height argument");
        a.style.width = Sc(b, !0);
        a.style.height = Sc(c, !0)
    }

    function Sc(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    }

    function R(a) {
        var b = Wc;
        if ("none" != Pc(a, "display")) return b(a);
        var c = a.style,
            d = c.display,
            g = c.visibility,
            h = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = h;
        c.visibility = g;
        return a
    }

    function Wc(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = C && !b && !c;
        return l(b) && !d || !a.getBoundingClientRect ? new O(b, c) : (a = Tc(a), new O(a.right - a.left, a.bottom - a.top))
    }

    function Xc(a, b) {
        var c = a.style;
        "opacity" in c ? c.opacity = b : "MozOpacity" in c ? c.MozOpacity = b : "filter" in c && (c.filter = "" === b ? "" : "alpha(opacity=" + 100 * b + ")")
    }

    function T(a, b) {
        a.style.display = b ? "" : "none"
    }
    var Yc = {
        thin: 2,
        medium: 4,
        thick: 6
    };

    function Zc(a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
        var c = a.currentStyle ? a.currentStyle[b + "Width"] : null,
            d;
        if (c in Yc) d = Yc[c];
        else if (/^\d+px?$/.test(c)) d = parseInt(c, 10);
        else {
            d = a.style.left;
            var g = a.runtimeStyle.left;
            a.runtimeStyle.left = a.currentStyle.left;
            a.style.left = c;
            c = a.style.pixelLeft;
            a.style.left = d;
            a.runtimeStyle.left = g;
            d = c
        }
        return d
    }

    function $c(a) {
        if (A && !F(9)) {
            var b = Zc(a, "borderLeft"),
                c = Zc(a, "borderRight"),
                d = Zc(a, "borderTop");
            a = Zc(a, "borderBottom");
            return new Jc(d, c, a, b)
        }
        b = Oc(a, "borderLeftWidth");
        c = Oc(a, "borderRightWidth");
        d = Oc(a, "borderTopWidth");
        a = Oc(a, "borderBottomWidth");
        return new Jc(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
    };

    function U(a, b, c, d, g) {
        Gc.call(this, b, c, d, g);
        this.element = a
    }
    v(U, Gc);
    U.prototype.Bb = aa;
    U.prototype.kd = function() {
        this.Bb();
        U.d.kd.call(this)
    };
    U.prototype.sb = function() {
        this.Bb();
        U.d.sb.call(this)
    };
    U.prototype.hc = function() {
        this.Bb();
        U.d.hc.call(this)
    };

    function ad(a, b, c, d, g) {
        q(b) && (b = [b]);
        q(c) && (c = [c]);
        U.call(this, a, b, c, d, g);
        if (1 != b.length || 1 != c.length) throw Error("Start and end points must be 1D");
    }
    v(ad, U);
    ad.prototype.Bb = function() {
        Xc(this.element, this.coords[0])
    };

    function bd(a, b, c) {
        ad.call(this, a, 1, 0, b, c)
    }
    v(bd, ad);

    function cd(a, b, c) {
        ad.call(this, a, 0, 1, b, c)
    }
    v(cd, ad);

    function dd(a) {
        return 1 - Math.pow(1 - a, 3)
    };

    function ed(a) {
        H.call(this);
        this.I = a;
        this.l = {}
    }
    v(ed, H);
    var fd = [];
    e = ed.prototype;
    e.r = function(a, b, c, d) {
        m(b) || (b && (fd[0] = b.toString()), b = fd);
        for (var g = 0; g < b.length; g++) {
            var h = K(a, b[g], c || this.handleEvent, d || !1, this.I || this);
            if (!h) break;
            this.l[h.key] = h
        }
        return this
    };
    e.Ke = function(a, b, c, d) {
        return gd(this, a, b, c, d)
    };

    function gd(a, b, c, d, g, h) {
        if (m(c))
            for (var k = 0; k < c.length; k++) gd(a, b, c[k], d, g, h);
        else {
            b = Ib(b, c, d || a.handleEvent, g, h || a.I || a);
            if (!b) return a;
            a.l[b.key] = b
        }
        return a
    }
    e.Xa = function(a, b, c, d, g) {
        if (m(b))
            for (var h = 0; h < b.length; h++) this.Xa(a, b[h], c, d, g);
        else c = c || this.handleEvent, g = g || this.I || this, c = Cb(c), d = !! d, b = sb(a) ? a.kb(b, c, d, g) : a ? (a = Eb(a)) ? a.kb(b, c, d, g) : null : null, b && (L(b), delete this.l[b.key]);
        return this
    };
    e.$ = function() {
        La(this.l, L);
        this.l = {}
    };
    e.f = function() {
        ed.d.f.call(this);
        this.$()
    };
    e.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };

    function hd(a) {
        M.call(this);
        this.mb = {};
        this.lb = {};
        this.I = new ed(this);
        this.ma = a
    }
    v(hd, M);
    var id = [A && !D("11") ? "readystatechange" : "load", "abort", "error"];

    function jd(a, b, c) {
        (c = n(c) ? c : c.src) && (a.mb[b] = {
            src: c,
            Ld: l(void 0) ? void 0 : null
        })
    }
    hd.prototype.start = function() {
        var a = this.mb;
        Ca(Ma(a), function(b) {
            var c = a[b];
            if (c && (delete a[b], !this.fb)) {
                var d;
                d = this.ma ? w.g(this.ma).h("img") : new Image;
                c.Ld && (d.crossOrigin = c.Ld);
                this.I.r(d, id, this.Re);
                this.lb[b] = d;
                d.id = b;
                d.src = c.src
            }
        }, this)
    };
    hd.prototype.Re = function(a) {
        var b = a.currentTarget;
        if (b) {
            if ("readystatechange" == a.type)
                if ("complete" == b.readyState) a.type = "load";
                else return;
            "undefined" == typeof b.naturalWidth && ("load" == a.type ? (b.naturalWidth = b.width, b.naturalHeight = b.height) : (b.naturalWidth = 0, b.naturalHeight = 0));
            this.dispatchEvent({
                type: a.type,
                target: b
            });
            !this.fb && (a = b.id, delete this.mb[a], b = this.lb[a]) && (delete this.lb[a], this.I.Xa(b, id, this.Re), Na(this.lb) && Na(this.mb) && this.dispatchEvent("complete"))
        }
    };
    hd.prototype.f = function() {
        delete this.mb;
        delete this.lb;
        jb(this.I);
        hd.d.f.call(this)
    };
    var kd;

    function ld(a, b) {
        b ? a.setAttribute("role", b) : a.removeAttribute("role")
    }

    function md(a, b, c) {
        ca(c) && (c = c.join(" "));
        var d = "aria-" + b;
        "" === c || void 0 == c ? (kd || (kd = {
            atomic: !1,
            autocomplete: "none",
            dropeffect: "none",
            haspopup: !1,
            live: "off",
            multiline: !1,
            multiselectable: !1,
            orientation: "vertical",
            readonly: !1,
            relevant: "additions text",
            required: !1,
            sort: "none",
            busy: !1,
            disabled: !1,
            hidden: !1,
            invalid: "false"
        }), c = kd, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
    };
    w.c = {};
    w.c.Ga = !1;
    w.c.get = function(a) {
        if (w.c.Ga || a.classList) return a.classList;
        a = a.className;
        return n(a) && a.match(/\S+/g) || []
    };
    w.c.set = function(a, b) {
        a.className = b
    };
    w.c.contains = function(a, b) {
        return w.c.Ga || a.classList ? a.classList.contains(b) : Fa(w.c.get(a), b)
    };
    w.c.add = function(a, b) {
        w.c.Ga || a.classList ? a.classList.add(b) : w.c.contains(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
    };
    w.c.Ia = function(a, b) {
        if (w.c.Ga || a.classList) Ca(b, function(b) {
            w.c.add(a, b)
        });
        else {
            var c = {};
            Ca(w.c.get(a), function(a) {
                c[a] = !0
            });
            Ca(b, function(a) {
                c[a] = !0
            });
            a.className = "";
            for (var d in c) a.className += 0 < a.className.length ? " " + d : d
        }
    };
    w.c.remove = function(a, b) {
        w.c.Ga || a.classList ? a.classList.remove(b) : w.c.contains(a, b) && (a.className = Da(w.c.get(a), function(a) {
            return a != b
        }).join(" "))
    };
    w.c.$ = function(a, b) {
        w.c.Ga || a.classList ? Ca(b, function(b) {
            w.c.remove(a, b)
        }) : a.className = Da(w.c.get(a), function(a) {
            return !Fa(b, a)
        }).join(" ")
    };
    w.c.enable = function(a, b, c) {
        c ? w.c.add(a, b) : w.c.remove(a, b)
    };
    w.c.Ig = function(a, b, c) {
        (c ? w.c.Ia : w.c.$)(a, b)
    };
    w.c.yg = function(a, b, c) {
        return w.c.contains(a, b) ? (w.c.remove(a, b), w.c.add(a, c), !0) : !1
    };
    w.c.toggle = function(a, b) {
        var c = !w.c.contains(a, b);
        w.c.enable(a, b, c);
        return c
    };
    w.c.sf = function(a, b, c) {
        w.c.remove(a, b);
        w.c.add(a, c)
    };
    w.wd = {};
    w.wd.qf = Qa("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
    w.wd.Qg = function(a) {
        return !0 === w.wd.qf[a]
    };

    function V() {
        this.na = "";
        this.of = nd
    }
    V.prototype.Wc = !0;
    V.prototype.Ce = !0;
    V.prototype.ee = function() {
        return 1
    };
    V.prototype.toString = function() {
        return "SafeUrl{" + this.na + "}"
    };

    function od(a) {
        if (a instanceof V && a.constructor === V && a.of === nd) return a.na;
        Aa("expected object of type SafeUrl, got '" + a + "'");
        return "type_error:SafeUrl"
    }
    var pd = /^(?:(?:https?|mailto):|[^&:/?#]*(?:[/?#]|$))/i;

    function qd(a) {
        if (a instanceof V) return a;
        a = a.Wc ? a.na : String(a);
        a = pd.test(a) ? rd(a) : "about:invalid#zClosurez";
        var b = new V;
        b.na = a;
        return b
    }

    function rd(a) {
        try {
            var b = encodeURI(a)
        } catch (c) {
            return "about:invalid#zClosurez"
        }
        return b.replace(sd, function(a) {
            return td[a]
        })
    }
    var sd = /[()']|%5B|%5D|%25/g,
        td = {
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "%5B": "[",
            "%5D": "]",
            "%25": "%"
        }, nd = {};

    function ud() {
        this.na = "";
        this.nf = vd;
        this.Qd = null
    }
    ud.prototype.Ce = !0;
    ud.prototype.ee = function() {
        return this.Qd
    };
    ud.prototype.Wc = !0;
    ud.prototype.toString = function() {
        return "SafeHtml{" + this.na + "}"
    };

    function wd(a) {
        if (a instanceof ud && a.constructor === ud && a.nf === vd) return a.na;
        Aa("expected object of type SafeHtml, got '" + a + "'");
        return "type_error:SafeHtml"
    }
    Qa("action", "cite", "data", "formaction", "href", "manifest", "poster", "src");
    Qa("link", "script", "style");
    var vd = {}, xd = null;
    "".Ce && (xd = "".ee());
    var yd = oa("".Wc ? "".na : ""),
        zd = xd,
        Ad = new ud;
    Ad.na = yd;
    Ad.Qd = zd;
    w.Fa = {};
    w.Fa.rd = function(a, b) {
        a.innerHTML = wd(b)
    };
    w.Fa.Hg = function(a, b) {
        a.write(wd(b))
    };
    w.Fa.Ug = function(a, b) {
        var c;
        c = b instanceof V ? b : qd(b);
        a.href = od(c)
    };
    w.Fa.Vg = function(a, b) {
        var c;
        c = b instanceof V ? b : qd(b);
        a.href = od(c)
    };

    function Bd(a, b, c) {
        M.call(this);
        this.target = a;
        this.handle = b || a;
        this.ec = c || new Kc(NaN, NaN, NaN, NaN);
        this.i = w.A(a);
        this.G = new ed(this);
        a = s(jb, this.G);
        this.rb || (this.rb = []);
        this.rb.push(r(a, void 0));
        K(this.handle, ["touchstart", "mousedown"], this.bf, !1, this)
    }
    v(Bd, M);
    var Cd = A || B && D("1.9.3");
    e = Bd.prototype;
    e.clientX = 0;
    e.clientY = 0;
    e.screenX = 0;
    e.screenY = 0;
    e.cf = 0;
    e.df = 0;
    e.Ka = 0;
    e.La = 0;
    e.Ud = !0;
    e.za = !1;
    e.Ae = 0;
    e.Wf = !1;
    e.vc = !1;
    e.Ba = function() {
        return this.G
    };
    e.f = function() {
        Bd.d.f.call(this);
        Jb(this.handle, ["touchstart", "mousedown"], this.bf, !1, this);
        this.G.$();
        Cd && this.i.releaseCapture();
        this.handle = this.target = null
    };

    function Dd(a) {
        l(a.qc) || (a.qc = "rtl" == Pc(a.target, "direction"));
        return a.qc
    }
    e.bf = function(a) {
        var b = "mousedown" == a.type;
        if (!this.Ud || this.za || b && (!(kb ? 0 == a.R.button : "click" == a.type || a.R.button & qb[0]) || C && z && a.ctrlKey)) this.dispatchEvent("earlycancel");
        else {
            Ed(a);
            if (0 == this.Ae)
                if (this.dispatchEvent(new Fd("start", this, a.clientX, a.clientY))) this.za = !0, a.preventDefault();
                else return;
            else a.preventDefault();
            var b = this.i,
                c = b.documentElement,
                d = !Cd;
            this.G.r(b, ["touchmove", "mousemove"], this.Qf, d);
            this.G.r(b, ["touchend", "mouseup"], this.Ob, d);
            Cd ? (c.setCapture(!1), this.G.r(c, "losecapture",
                this.Ob)) : this.G.r(w.M(b), "blur", this.Ob);
            A && this.Wf && this.G.r(b, "dragstart", ob);
            this.ng && this.G.r(this.ng, "scroll", this.eg, d);
            this.clientX = this.cf = a.clientX;
            this.clientY = this.df = a.clientY;
            this.screenX = a.screenX;
            this.screenY = a.screenY;
            this.vc ? (a = this.target, b = a.offsetLeft, c = a.offsetParent, c || "fixed" != Qc(a) || (c = w.A(a).documentElement), c ? (B ? (d = $c(c), b += d.left) : F(8) && (d = $c(c), b -= d.left), a = "rtl" == Pc(c, "direction") ? c.clientWidth - (b + a.offsetWidth) : b) : a = b) : a = this.target.offsetLeft;
            this.Ka = a;
            this.La = this.target.offsetTop;
            this.ld = w.g(this.i).Y();
            t()
        }
    };
    e.Ob = function(a) {
        this.G.$();
        Cd && this.i.releaseCapture();
        if (this.za) {
            Ed(a);
            this.za = !1;
            var b = Gd(this, this.Ka),
                c = Hd(this, this.La);
            this.dispatchEvent(new Fd("end", this, a.clientX, a.clientY, 0, b, c))
        } else this.dispatchEvent("earlycancel")
    };

    function Ed(a) {
        var b = a.type;
        "touchstart" == b || "touchmove" == b ? a.sa(a.R.targetTouches[0], a.currentTarget) : "touchend" != b && "touchcancel" != b || a.sa(a.R.changedTouches[0], a.currentTarget)
    }
    e.Qf = function(a) {
        if (this.Ud) {
            Ed(a);
            var b = (this.vc && Dd(this) ? -1 : 1) * (a.clientX - this.clientX),
                c = a.clientY - this.clientY;
            this.clientX = a.clientX;
            this.clientY = a.clientY;
            this.screenX = a.screenX;
            this.screenY = a.screenY;
            if (!this.za) {
                var d = this.cf - this.clientX,
                    g = this.df - this.clientY;
                if (d * d + g * g > this.Ae)
                    if (this.dispatchEvent(new Fd("start", this, a.clientX, a.clientY))) this.za = !0;
                    else {
                        this.fb || this.Ob(a);
                        return
                    }
            }
            c = Id(this, b, c);
            b = c.x;
            c = c.y;
            this.za && this.dispatchEvent(new Fd("beforedrag", this, a.clientX, a.clientY, 0, b,
                c)) && (Jd(this, a, b, c), a.preventDefault())
        }
    };

    function Id(a, b, c) {
        var d = w.g(a.i).Y();
        b += d.x - a.ld.x;
        c += d.y - a.ld.y;
        a.ld = d;
        a.Ka += b;
        a.La += c;
        b = Gd(a, a.Ka);
        a = Hd(a, a.La);
        return new G(b, a)
    }
    e.eg = function(a) {
        var b = Id(this, 0, 0);
        a.clientX = this.clientX;
        a.clientY = this.clientY;
        Jd(this, a, b.x, b.y)
    };

    function Jd(a, b, c, d) {
        a.vc && Dd(a) ? a.target.style.right = c + "px" : a.target.style.left = c + "px";
        a.target.style.top = d + "px";
        a.dispatchEvent(new Fd("drag", a, b.clientX, b.clientY, 0, c, d))
    }

    function Gd(a, b) {
        var c = a.ec,
            d = isNaN(c.left) ? null : c.left,
            c = isNaN(c.width) ? 0 : c.width;
        return Math.min(null != d ? d + c : Infinity, Math.max(null != d ? d : -Infinity, b))
    }

    function Hd(a, b) {
        var c = a.ec,
            d = isNaN(c.top) ? null : c.top,
            c = isNaN(c.height) ? 0 : c.height;
        return Math.min(null != d ? d + c : Infinity, Math.max(null != d ? d : -Infinity, b))
    }

    function Fd(a, b, c, d, g, h, k) {
        I.call(this, a);
        this.clientX = c;
        this.clientY = d;
        this.left = l(h) ? h : b.Ka;
        this.top = l(k) ? k : b.La
    }
    v(Fd, I);

    function Kd(a) {
        M.call(this);
        this.b = a;
        a = A ? "focusout" : "blur";
        this.$f = K(this.b, A ? "focusin" : "focus", this, !A);
        this.ag = K(this.b, a, this, !A)
    }
    v(Kd, M);
    Kd.prototype.handleEvent = function(a) {
        var b = new J(a.R);
        b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
        this.dispatchEvent(b)
    };
    Kd.prototype.f = function() {
        Kd.d.f.call(this);
        L(this.$f);
        L(this.ag);
        delete this.b
    };

    function Ld() {}
    Ld.Jf = function() {
        return Ld.Fe ? Ld.Fe : Ld.Fe = new Ld
    };
    Ld.prototype.Pe = 0;

    function W(a) {
        M.call(this);
        this.ia = a || w.g();
        this.qc = Md
    }
    v(W, M);
    W.prototype.Be = Ld.Jf();
    var Md = null;
    e = W.prototype;
    e.S = null;
    e.C = !1;
    e.b = null;
    e.qc = null;
    e.ma = null;
    e.oa = null;
    e.Hb = null;
    e.Cg = !1;
    e.a = function() {
        return this.b
    };
    e.Aa = function(a) {
        return this.b ? this.ia.Aa(a, this.b) : []
    };
    e.ra = function(a) {
        return this.b ? this.ia.ra(a, this.b) : null
    };
    e.Rc = function(a) {
        return this.ra(a)
    };
    e.Ba = function() {
        this.Ca || (this.Ca = new ed(this));
        return this.Ca
    };
    e.sd = function(a) {
        if (this.ma && this.ma != a) throw Error("Method not supported");
        W.d.sd.call(this, a)
    };
    e.g = function() {
        return this.ia
    };
    e.h = function() {
        this.b = this.ia.createElement("div")
    };
    e.va = function(a) {
        if (this.C) throw Error("Component already rendered");
        this.b || this.h();
        a ? a.insertBefore(this.b, null) : this.ia.H().body.appendChild(this.b);
        this.ma && !this.ma.C || this.qa()
    };
    e.qa = function() {
        this.C = !0;
        Nd(this, function(a) {
            !a.C && a.a() && a.qa()
        })
    };
    e.ja = function() {
        Nd(this, function(a) {
            a.C && a.ja()
        });
        this.Ca && this.Ca.$();
        this.C = !1
    };
    e.f = function() {
        this.C && this.ja();
        this.Ca && (this.Ca.ha(), delete this.Ca);
        Nd(this, function(a) {
            a.ha()
        });
        !this.Cg && this.b && w.removeNode(this.b);
        this.ma = this.b = this.Hb = this.oa = null;
        W.d.f.call(this)
    };

    function Nd(a, b) {
        a.oa && Ca(a.oa, b, void 0)
    }
    e.removeChild = function(a, b) {
        if (a) {
            var c = n(a) ? a : a.S || (a.S = ":" + (a.Be.Pe++).toString(36)),
                d;
            this.Hb && c ? (d = this.Hb, d = (c in d ? d[c] : void 0) || null) : d = null;
            a = d;
            if (c && a) {
                d = this.Hb;
                c in d && delete d[c];
                Ga(this.oa, a);
                b && (a.ja(), a.b && w.removeNode(a.b));
                c = a;
                if (null == c) throw Error("Unable to set parent component");
                c.ma = null;
                W.d.sd.call(c, null)
            }
        }
        if (!a) throw Error("Child is not in parent component");
        return a
    };
    e.tb = function(a) {
        for (var b = []; this.oa && 0 != this.oa.length;) b.push(this.removeChild(this.oa ? this.oa[0] || null : null, a));
        return b
    };

    function Od(a, b) {
        W.call(this, b);
        this.Bg = !! a;
        this.ob = null
    }
    v(Od, W);
    e = Od.prototype;
    e.Lc = null;
    e.ea = !1;
    e.w = null;
    e.u = null;
    e.W = null;
    e.zc = !1;
    e.Ub = function() {
        return "goog-modalpopup"
    };
    e.Tb = function() {
        return this.w
    };
    e.h = function() {
        Od.d.h.call(this);
        var a = this.a(),
            b = na(this.Ub()).split(" ");
        w.c.Ia(a, b);
        w.vb(a, !0);
        T(a, !1);
        this.Bg && !this.u && (this.u = w.N.Fc(this.g()), this.u.className = this.Ub() + "-bg", T(this.u, !1), Xc(this.u, 0));
        this.w || (this.w = this.g().h("div", this.Ub() + "-bg"), T(this.w, !1));
        this.W || (this.W = this.g().createElement("span"), T(this.W, !1), w.vb(this.W, !0), this.W.style.position = "absolute")
    };
    e.Ve = function() {
        this.zc = !1
    };
    e.qa = function() {
        this.u && w.bc(this.u, this.a());
        w.bc(this.w, this.a());
        Od.d.qa.call(this);
        w.Yc(this.W, this.a());
        this.Lc = new Kd(this.g().H());
        this.Ba().r(this.Lc, "focusin", this.dg);
        Pd(this, !1)
    };
    e.ja = function() {
        this.ea && this.U(!1);
        jb(this.Lc);
        Od.d.ja.call(this);
        w.removeNode(this.u);
        w.removeNode(this.w);
        w.removeNode(this.W)
    };
    e.U = function(a) {
        if (a != this.ea)
            if (this.Sa && this.Sa.stop(), this.Za && this.Za.stop(), this.Ra && this.Ra.stop(), this.Ya && this.Ya.stop(), this.C && Pd(this, a), a) {
                if (this.dispatchEvent("beforeshow")) {
                    try {
                        this.ob = this.g().H().activeElement
                    } catch (b) {}
                    this.nd();
                    this.aa();
                    this.Ba().r(this.g().M(), "resize", this.nd);
                    Qd(this, !0);
                    this.focus();
                    this.ea = !0;
                    this.Sa && this.Za ? (Ib(this.Sa, "end", this.jc, !1, this), this.Za.play(), this.Sa.play()) : this.jc()
                }
            } else if (this.dispatchEvent("beforehide")) {
                this.Ba().Xa(this.g().M(), "resize",
                    this.nd);
                this.ea = !1;
                this.Ra && this.Ya ? (Ib(this.Ra, "end", this.ic, !1, this), this.Ya.play(), this.Ra.play()) : this.ic();
                try {
                    var c = this.g().H().body,
                        d = this.g().H().activeElement || c;
                    this.ob && d == c && this.ob != c && this.ob.focus()
                } catch (g) {}
                this.ob = null
            }
    };

    function Pd(a, b) {
        for (var c = a.g().H().body.firstChild; c; c = c.nextSibling)
            if (1 == c.nodeType) {
                var d = c;
                b ? md(d, "hidden", b) : d.removeAttribute("aria-hidden")
            }
        c = a.b;
        (d = !b) ? md(c, "hidden", d) : c.removeAttribute("aria-hidden")
    }

    function Qd(a, b) {
        a.u && T(a.u, b);
        a.w && T(a.w, b);
        T(a.a(), b);
        T(a.W, b)
    }
    e.jc = function() {
        this.dispatchEvent("show")
    };
    e.ic = function() {
        Qd(this, !1);
        this.dispatchEvent("hide")
    };
    e.focus = function() {
        this.$d()
    };
    e.nd = function() {
        this.u && T(this.u, !1);
        this.w && T(this.w, !1);
        var a = this.g().H(),
            b = w.ka(w.M(a) || window),
            c = Math.max(b.width, Math.max(a.body.scrollWidth, a.documentElement.scrollWidth)),
            a = Math.max(b.height, Math.max(a.body.scrollHeight, a.documentElement.scrollHeight));
        this.u && (T(this.u, !0), Q(this.u, c, a));
        this.w && (T(this.w, !0), Q(this.w, c, a))
    };
    e.aa = function() {
        var a = this.g().H(),
            b = w.M(a) || window;
        if ("fixed" == Qc(this.a())) var c = a = 0;
        else c = this.g().Y(), a = c.x, c = c.y;
        var d = R(this.a()),
            b = w.ka(b),
            a = Math.max(a + b.width / 2 - d.width / 2, 0),
            c = Math.max(c + b.height / 2 - d.height / 2, 0);
        Rc(this.a(), a, c);
        Rc(this.W, a, c)
    };
    e.dg = function(a) {
        this.zc ? this.Ve() : a.target == this.W && Qb(this.$d, 0, this)
    };
    e.$d = function() {
        try {
            A && this.g().H().body.focus(), this.a().focus()
        } catch (a) {}
    };
    e.f = function() {
        jb(this.Sa);
        this.Sa = null;
        jb(this.Ra);
        this.Ra = null;
        jb(this.Za);
        this.Za = null;
        jb(this.Ya);
        this.Ya = null;
        Od.d.f.call(this)
    };

    function X(a, b, c) {
        Od.call(this, b, c);
        this.fa = a || "modal-dialog";
        this.D = Y(Y(new Rd, Sd, !0), Td, !1, !0)
    }
    v(X, Od);
    e = X.prototype;
    e.Jc = !0;
    e.xe = !0;
    e.Me = !0;
    e.Cf = !0;
    e.yc = 0.5;
    e.xd = "";
    e.Kd = null;
    e.pa = null;
    e.Af = !1;
    e.da = null;
    e.Wa = null;
    e.ff = null;
    e.ca = null;
    e.eb = null;
    e.p = null;
    e.Te = "dialog";
    e.Ub = function() {
        return this.fa
    };
    e.se = function() {
        return this.xd
    };
    e.Tb = function() {
        this.a() || this.va();
        return X.d.Tb.call(this)
    };

    function Ud(a, b) {
        a.yc = b;
        if (a.a()) {
            var c = a.Tb();
            c && Xc(c, a.yc)
        }
    }

    function Vd(a, b) {
        var c = na(a.fa + "-title-draggable").split(" ");
        a.a() && (b ? w.c.Ia(a.da, c) : w.c.$(a.da, c));
        b && !a.pa ? (a.pa = new Bd(a.a(), a.da), w.c.Ia(a.da, c), K(a.pa, "start", a.pg, !1, a)) : !b && a.pa && (a.pa.ha(), a.pa = null)
    }
    e.h = function() {
        X.d.h.call(this);
        var a = this.a(),
            b = this.g();
        this.da = b.h("div", this.fa + "-title", this.Wa = b.h("span", {
            className: this.fa + "-title-text",
            id: this.S || (this.S = ":" + (this.Be.Pe++).toString(36))
        }, this.xd), this.ca = b.h("span", this.fa + "-title-close"));
        w.append(a, this.da, this.eb = b.h("div", this.fa + "-content"), this.p = b.h("div", this.fa + "-buttons"));
        ld(this.ca, "button");
        w.vb(this.ca, !0);
        md(this.ca, "label", Wd);
        this.ff = this.Wa.id;
        ld(a, this.Te);
        md(a, "labelledby", this.ff || "");
        this.Kd && w.Fa.rd(this.eb, this.Kd);
        T(this.ca, this.xe);
        this.D && (a = this.D, a.b = this.p, a.va());
        T(this.p, !! this.D);
        Ud(this, this.yc)
    };
    e.qa = function() {
        X.d.qa.call(this);
        this.Ba().r(this.a(), "keydown", this.Qe).r(this.a(), "keypress", this.Qe);
        this.Ba().r(this.p, "click", this.cg);
        Vd(this, this.Cf);
        this.Ba().r(this.ca, "click", this.fg);
        var a = this.a();
        ld(a, this.Te);
        "" !== this.Wa.id && md(a, "labelledby", this.Wa.id);
        if (!this.Me) {
            this.Me = !1;
            if (this.C) {
                var a = this.g(),
                    b = this.Tb();
                a.removeNode(this.u);
                a.removeNode(b)
            }
            this.ea && Pd(this, !1)
        }
    };
    e.ja = function() {
        this.ea && this.U(!1);
        Vd(this, !1);
        X.d.ja.call(this)
    };
    e.U = function(a) {
        a != this.ea && (this.C || this.va(), X.d.U.call(this, a))
    };
    e.jc = function() {
        X.d.jc.call(this);
        this.dispatchEvent(Xd)
    };
    e.ic = function() {
        X.d.ic.call(this);
        this.dispatchEvent(Yd);
        this.Af && this.ha()
    };
    e.pg = function() {
        var a = this.g().H(),
            b = w.ka(w.M(a) || window),
            c = Math.max(a.body.scrollWidth, b.width),
            a = Math.max(a.body.scrollHeight, b.height),
            d = R(this.a());
        "fixed" == Qc(this.a()) ? (b = new Kc(0, 0, Math.max(0, b.width - d.width), Math.max(0, b.height - d.height)), this.pa.ec = b || new Kc(NaN, NaN, NaN, NaN)) : this.pa.ec = new Kc(0, 0, c - d.width, a - d.height) || new Kc(NaN, NaN, NaN, NaN)
    };
    e.fg = function() {
        Zd(this)
    };

    function Zd(a) {
        if (a.xe) {
            var b = a.D,
                c = b && b.Cc;
            c ? (b = b.get(c), a.dispatchEvent(new $d(c, b)) && a.U(!1)) : a.U(!1)
        }
    }
    e.f = function() {
        this.p = this.ca = null;
        X.d.f.call(this)
    };

    function ae(a) {
        a.D = null;
        if (a.p) {
            if (a.D) {
                var b = a.D;
                b.b = a.p;
                b.va()
            } else w.Fa.rd(a.p, Ad);
            T(a.p, !! a.D)
        }
    }
    e.cg = function(a) {
        a: {
            for (a = a.target; null != a && a != this.p;) {
                if ("BUTTON" == a.tagName) break a;
                a = a.parentNode
            }
            a = null
        }
        if (a && !a.disabled) {
            a = a.name;
            var b = this.D.get(a);
            this.dispatchEvent(new $d(a, b)) && this.U(!1)
        }
    };
    e.Qe = function(a) {
        var b = !1,
            c = !1,
            d = this.D,
            g = a.target;
        if ("keydown" == a.type)
            if (this.Jc && 27 == a.keyCode) {
                var h = d && d.Cc,
                    g = "SELECT" == g.tagName && !g.disabled;
                h && !g ? (c = !0, b = d.get(h), b = this.dispatchEvent(new $d(h, b))) : g || (b = !0)
            } else {
                if (9 == a.keyCode && a.shiftKey && g == this.a()) {
                    this.zc = !0;
                    try {
                        this.W.focus()
                    } catch (k) {}
                    Qb(this.Ve, 0, this)
                }
            } else if (13 == a.keyCode) {
            if ("BUTTON" == g.tagName && !g.disabled) h = g.name;
            else if (g == this.ca) Zd(this);
            else if (d) {
                var p = d.Hc,
                    E;
                if (E = p) a: {
                    E = d.b.getElementsByTagName("BUTTON");
                    for (var lb =
                        0, S; S = E[lb]; lb++)
                        if (S.name == p || S.id == p) {
                            E = S;
                            break a
                        }
                    E = null
                }
                g = ("TEXTAREA" == g.tagName || "SELECT" == g.tagName || "A" == g.tagName) && !g.disabled;
                !E || E.disabled || g || (h = p)
            }
            h && d && (c = !0, b = this.dispatchEvent(new $d(h, String(d.get(h)))))
        } else g == this.ca && 32 == a.keyCode && Zd(this); if (b || c) a.stopPropagation(), a.preventDefault();
        b && this.U(!1)
    };

    function $d(a, b) {
        this.type = be;
        this.key = a;
        this.caption = b
    }
    v($d, I);
    var be = "dialogselect",
        Yd = "afterhide",
        Xd = "aftershow";

    function Rd(a) {
        this.ia = a || w.g();
        Ta.call(this)
    }
    v(Rd, Ta);
    e = Rd.prototype;
    e.fa = "goog-buttonset";
    e.Hc = null;
    e.b = null;
    e.Cc = null;
    e.set = function(a, b, c, d) {
        Ta.prototype.set.call(this, a, b);
        c && (this.Hc = a);
        d && (this.Cc = a);
        return this
    };

    function Y(a, b, c, d) {
        return a.set(b.key, b.caption, c, d)
    }
    e.va = function() {
        if (this.b) {
            w.Fa.rd(this.b, Ad);
            var a = w.g(this.b);
            this.forEach(function(b, c) {
                var d = a.h("button", {
                    name: c
                }, b);
                c == this.Hc && (d.className = this.fa + "-default");
                this.b.appendChild(d)
            }, this)
        }
    };
    e.a = function() {
        return this.b
    };
    e.g = function() {
        return this.ia
    };
    var ce = ka("OK"),
        de = ka("Cancel"),
        ee = ka("Yes"),
        fe = ka("No"),
        ge = ka("Save"),
        he = ka("Continue"),
        Wd = ka("Close"),
        Sd = {
            key: "ok",
            caption: ce
        }, Td = {
            key: "cancel",
            caption: de
        }, ie = {
            key: "yes",
            caption: ee
        }, je = {
            key: "no",
            caption: fe
        }, ke = {
            key: "save",
            caption: ge
        }, le = {
            key: "continue",
            caption: he
        };
    "undefined" != typeof document && (Y(new Rd, Sd, !0, !0), Y(Y(new Rd, Sd, !0), Td, !1, !0), Y(Y(new Rd, ie, !0), je, !1, !0), Y(Y(Y(new Rd, ie), je, !0), Td, !1, !0), Y(Y(Y(new Rd, le), ke), Td, !0, !0));

    function me(a, b) {
        m(b) || (b = [b]);
        var c = Ea(b, function(a) {
            return n(a) ? a : a.mc + " " + a.duration + "s " + a.timing + " " + a.Lb + "s"
        });
        Lc(a, "transition", c.join(","))
    }
    var ne = Ra(function() {
        if (A) return D("10.0");
        var a = document.createElement("div"),
            b = w.vendor.Lf();
        a.innerHTML = '<div style="' + (b ? b + "-transition:opacity 1s linear;" : "") + 'transition:opacity 1s linear;">';
        a = a.firstChild;
        b = a.style[wa("transition")];
        return "" != ("undefined" !== typeof b ? b : a.style[Nc(a, "transition")] || "")
    });

    function oe(a, b, c, d, g) {
        P.call(this);
        this.b = a;
        this.Df = b;
        this.Yf = c;
        this.Vd = d;
        this.Ag = m(g) ? g : [g]
    }
    v(oe, P);
    e = oe.prototype;
    e.play = function() {
        if (this.T()) return !1;
        this.hc();
        this.K("play");
        this.startTime = t();
        this.V = 1;
        if (ne()) return Lc(this.b, this.Yf), this.ef = Qb(this.hg, void 0, this), !0;
        this.ud(!1);
        return !1
    };
    e.hg = function() {
        me(this.b, this.Ag);
        Lc(this.b, this.Vd);
        this.ef = Qb(r(this.ud, this, !1), 1E3 * this.Df)
    };
    e.stop = function() {
        this.T() && this.ud(!0)
    };
    e.ud = function(a) {
        Lc(this.b, "transition", "");
        f.clearTimeout(this.ef);
        Lc(this.b, this.Vd);
        this.Ic = t();
        this.V = yc;
        a ? this.K("stop") : this.K("finish");
        this.sb()
    };
    e.f = function() {
        this.stop();
        oe.d.f.call(this)
    };

    function pe(a, b) {
        M.call(this);
        this.b = a;
        this.ue = b;
        this[rb] = !1
    }
    v(pe, M);
    e = pe.prototype;
    e.ue = null;
    e.b = null;
    e.a = function() {
        return this.b
    };
    e.addEventListener = function(a, b, c, d) {
        K(this.b, a, b, c, d)
    };
    e.removeEventListener = function(a, b, c, d) {
        Jb(this.b, a, b, c, d)
    };
    e.f = function() {
        pe.d.f.call(this);
        var a = this.b;
        if (a)
            if (sb(a)) a.Q && a.Q.$(void 0);
            else if (a = Eb(a)) {
                var b = 0,
                    c;
                for (c in a.t)
                    for (var d = Ia(a.t[c]), g = 0; g < d.length; ++g) L(d[g]) && ++b
            }
    };

    function qe(a, b, c, d) {
        pe.call(this, a, b);
        a = this.ue;
        b = this.a();
        c ? (b.setAttribute("stroke", c.Gd), c = c.Pg(), n(c) && -1 != c.indexOf("px") ? b.setAttribute("stroke-width", parseFloat(c) / re(a)) : b.setAttribute("stroke-width", c)) : b.setAttribute("stroke", "none");
        this.fill = d;
        se(this, d)
    }
    v(qe, pe);
    qe.prototype.fill = null;

    function te(a, b, c, d) {
        qe.call(this, a, b, c, d)
    }
    v(te, qe);

    function ue(a, b) {
        pe.call(this, a, b)
    }
    v(ue, pe);

    function ve(a, b) {
        pe.call(this, a, b)
    }
    v(ve, ue);

    function we(a, b, c, d) {
        qe.call(this, a, b, c, d)
    }
    v(we, te);

    function xe(a, b, c, d, g) {
        W.call(this, g);
        this.width = a;
        this.height = b;
        this.wa = c || null;
        this.Ec = d || null
    }
    v(xe, W);
    xe.prototype.$a = null;
    xe.prototype.Jb = 0;
    xe.prototype.Kb = 0;
    xe.prototype.Ma = function() {
        return this.C ? R(this.a()) : q(this.width) && q(this.height) ? new O(this.width, this.height) : null
    };

    function re(a) {
        var b = a.Ma();
        return b ? b.width / (a.wa ? new O(a.wa, a.Ec) : a.Ma()).width : 0
    };

    function ye() {};

    function ze(a, b) {
        this.Gd = a;
        this.gg = null == b ? 1 : b
    }
    v(ze, ye);

    function Ae(a, b, c, d, g) {
        xe.call(this, a, b, c, d, g);
        this.yf = {};
        this.yd = C && !D(526);
        this.I = new ed(this)
    }
    var Be;
    v(Ae, xe);

    function Ce(a, b, c) {
        a = a.ia.H().createElementNS("http://www.w3.org/2000/svg", b);
        c && De(a, c);
        return a
    }

    function De(a, b) {
        for (var c in b) a.setAttribute(c, b[c])
    }
    e = Ae.prototype;
    e.Eb = function(a, b) {
        (b || this.$a).a().appendChild(a.a())
    };

    function se(a, b) {
        var c = a.a();
        b instanceof ze ? (c.setAttribute("fill", b.Gd), c.setAttribute("fill-opacity", b.gg)) : c.setAttribute("fill", "none")
    }
    e.h = function() {
        var a = Ce(this, "svg", {
                width: this.width,
                height: this.height,
                overflow: "hidden"
            }),
            b = Ce(this, "g");
        this.Pd = Ce(this, "defs");
        this.$a = new ve(b, this);
        a.appendChild(this.Pd);
        a.appendChild(b);
        this.b = a;
        if (this.wa || this.Jb || this.Kb) this.a().setAttribute("preserveAspectRatio", "none"), this.yd ? this.uc() : this.a().setAttribute("viewBox", this.Jb + " " + this.Kb + " " + (this.wa ? this.wa + " " + this.Ec : ""))
    };
    e.uc = function() {
        if (this.C && (this.wa || this.Jb || !this.Kb)) {
            var a = this.Ma();
            0 == a.width ? this.a().style.visibility = "hidden" : (this.a().style.visibility = "", this.$a.a().setAttribute("transform", "scale(" + a.width / this.wa + " " + a.height / this.Ec + ") translate(" + -this.Jb + " " + -this.Kb + ")"))
        }
    };
    e.Ma = function() {
        if (!B) return this.C ? R(this.a()) : Ae.d.Ma.call(this);
        var a = this.width,
            b = this.height,
            c = n(a) && -1 != a.indexOf("%"),
            d = n(b) && -1 != b.indexOf("%");
        if (!this.C && (c || d)) return null;
        var g, h;
        c && (g = this.a().parentNode, h = R(g), a = parseFloat(a) * h.width / 100);
        d && (g = g || this.a().parentNode, h = h || R(g), b = parseFloat(b) * h.height / 100);
        return new O(a, b)
    };
    e.qa = function() {
        var a = this.Ma();
        Ae.d.qa.call(this);
        a || this.dispatchEvent("resize");
        if (this.yd) {
            var a = this.width,
                b = this.height;
            "string" == typeof a && -1 != a.indexOf("%") && "string" == typeof b && -1 != b.indexOf("%") && this.I.r(Ee(), Pb, this.uc);
            this.uc()
        }
    };
    e.ja = function() {
        Ae.d.ja.call(this);
        this.yd && this.I.Xa(Ee(), Pb, this.uc)
    };
    e.f = function() {
        delete this.yf;
        delete this.Pd;
        delete this.$a;
        Ae.d.f.call(this)
    };

    function Ee() {
        Be || (Be = new Ob(400), Be.start());
        return Be
    };
    var Fe;
    Fe = !1;
    var Ge = y;
    Ge && (-1 != Ge.indexOf("Firefox") || -1 != Ge.indexOf("Camino") || -1 != Ge.indexOf("iPhone") || -1 != Ge.indexOf("iPod") || -1 != Ge.indexOf("iPad") || -1 != Ge.indexOf("Chrome") && (Fe = !0));
    var He = Fe;
    var Ie = /Mac OS X.+Silk\//,
        Je = /iPhone|iPod|iPad/.test(navigator.userAgent) || -1 != navigator.userAgent.indexOf("Android") || Ie.test(navigator.userAgent),
        Ke = window.navigator.msPointerEnabled;

    function Z(a, b) {
        X.call(this, Le, !0);
        this.Dc = a || Me;
        this.pb = Le + "-" + this.Dc;
        this.Vc = this.pb + "-iframe";
        this.xd = b || "";
        this.j = [];
        this.F = null;
        this.gb = !0;
        this.m = this.b;
        this.cd = this.q = this.hd = this.jd = this.v = this.X = this.o = this.B = null;
        this.n = 0;
        this.Pa = !1;
        this.yb = !0;
        this.Db = this.Xe = !1;
        this.Oe = Ne;
        this.Ne = Oe;
        this.Fd = Pe;
        this.ye = !1;
        this.ua = -1;
        this.qb = !1;
        this.fc = new hd;
        this.xa = this.tc = !1;
        this.Ed = !0;
        this.Mb = !1;
        this.Td = Qe;
        this.oc = null
    }
    v(Z, X);
    u("gweb.ui.LightBox", Z);
    var Le = "gweb-lightbox",
        Re = Je ? "touchstart" : Ke ? "MSPointerDown" : "click",
        Pe = "\u00d7",
        Ne = "\u2039",
        Oe = "\u203a",
        Se = /\.(gif|jpg|jpeg|png|webp)$/i,
        Te = /^#/,
        Ue = /\/\/(www\.)?youtube\.com\//,
        Ve = /\/\/(www\.)?youtube\.com\/watch/,
        Me = "lb",
        Qe = 767;
    Z.prototype.wg = function(a) {
        this.Pa = a
    };
    u("gweb.ui.LightBox.prototype.setOverlayCaption", Z.prototype.wg);
    Z.prototype.rg = function(a) {
        this.yb = a
    };
    u("gweb.ui.LightBox.prototype.setItemCount", Z.prototype.rg);
    Z.prototype.xg = function(a) {
        this.Xe = a
    };
    u("gweb.ui.LightBox.prototype.setScaleImages", Z.prototype.xg);
    Z.prototype.pd = function(a) {
        this.Db = a
    };
    u("gweb.ui.LightBox.prototype.setAnimate", Z.prototype.pd);
    Z.prototype.ug = function(a) {
        this.Oe = a
    };
    u("gweb.ui.LightBox.prototype.setNavTextPrev", Z.prototype.ug);
    Z.prototype.tg = function(a) {
        this.Ne = a
    };
    u("gweb.ui.LightBox.prototype.setNavTextNext", Z.prototype.tg);
    Z.prototype.Ze = function(a) {
        this.Fd = a
    };
    u("gweb.ui.LightBox.prototype.setCloseText", Z.prototype.Ze);
    Z.prototype.qg = function(a) {
        this.ye = a
    };
    u("gweb.ui.LightBox.prototype.setHideNav", Z.prototype.qg);
    Z.prototype.vg = function(a) {
        this.ua = a ? 1 : 0
    };
    u("gweb.ui.LightBox.prototype.setOutsideNav", Z.prototype.vg);
    Z.prototype.sg = function(a) {
        this.qb = a
    };
    u("gweb.ui.LightBox.prototype.setLoop", Z.prototype.sg);
    Z.prototype.$e = function(a) {
        this.Td = a || Qe
    };
    u("gweb.ui.LightBox.prototype.setMobileWidthThreshold", Z.prototype.$e);
    Z.prototype.Rd = function() {
        this.yb = !1;
        this.xa = !0
    };
    u("gweb.ui.LightBox.prototype.disableNav", Z.prototype.Rd);
    Z.prototype.Sd = function() {
        this.Mb = !0
    };
    u("gweb.ui.LightBox.prototype.disableOnMobile", Z.prototype.Sd);
    Z.prototype.Ye = function(a) {
        this.Ed = a
    };
    u("gweb.ui.LightBox.prototype.setBackgroundClickable", Z.prototype.Ye);
    Z.prototype.sa = function() {
        if (We(this)) {
            for (var a = w.Aa(this.Dc), b = 0, c = a.length; b < c; b++) {
                var d = a[b],
                    g = new Xe(d);
                g.fd = K(d, Re, s(this.ve, d), !1, this);
                this.j.push(g);
                w.dataset.set(d, "lightboxIndex", this.j.length - 1); - 1 == this.ua && Ue.test(g.href) && (this.ua = 1)
            }
            Ud(this, 0.8);
            this.Jc = !0;
            ae(this);
            this.va();
            1 == this.ua && w.e.add(this.m, "gweb-lightbox-outside-nav");
            this.n = Math.ceil(2 * $c(this.m).top);
            this.xa || Ye(this);
            Ze(this);
            "opacity" in window.document.body.style && (this.tc = !0)
        }
        K(window, "resize", s(this.Od, 250), !1, this)
    };
    u("gweb.ui.LightBox.prototype.init", Z.prototype.sa);
    e = Z.prototype;
    e.Od = function(a) {
        this.oc || (this.oc = Qb(s(this.Rf), a, this))
    };

    function We(a, b) {
        var c = w.ka().width <= a.Td;
        return a.Mb && !c || !a.Mb && !b || !a.Mb && b && !c
    }
    e.h = function() {
        Z.d.h.call(this);
        w.appendChild(this.ca, w.createTextNode(this.Fd));
        this.b.setAttribute("id", this.pb);
        this.p && (this.v = w.h("div", "gweb-lightbox-caption gweb-lightbox-hide"), w.appendChild(this.p, this.v));
        this.yb && 1 < this.j.length && this.Wa ? (this.cd = w.h("span"), w.appendChild(this.Wa, this.cd)) : this.yb = !1;
        this.m = this.b;
        this.xa ? T(this.p, !0) : (this.jd = $e(this, "gweb-lightbox-prev"), this.hd = $e(this, "gweb-lightbox-next"));
        for (var a = 0, b = this.j.length; a < b; a++) {
            var c = this.j[a];
            this.o || "IMG" != c.type ?
                this.B || "IFRAME" != c.type ? this.X || "A" != c.type || (this.X = w.h("div", {
                    id: this.pb + "-fragment",
                    "class": Le + "-fragment"
                }), w.append(this.eb, this.X)) : (this.B = w.N.Fc(w), this.B.id = this.Vc, this.B.name = this.Vc, w.append(this.eb, this.B)) : (this.o = w.h("img", {
                id: this.pb + "-image",
                src: "//www.google.com/images/cleardot.gif"
            }), Q(this.o, 200, 200), w.appendChild(this.eb, this.o))
        }
    };

    function Ze(a) {
        K(a, "imageloaded", s(a.Ib, a.o), !1, a);
        K(a, "iframeloaded", s(a.Ib, a.B), !1, a);
        K(a, "fragmentloaded", s(a.Ib, a.X), !1, a);
        a.Ed && K(a.w, Re, s(a.U, !1), !1, a);
        K(a, Yd, a.bb, !1, a);
        K(a, "navigateprev", s(a.wb, a.jd), !1, a);
        K(a, "navigatenext", s(a.wb, a.hd), !1, a)
    }

    function Ye(a) {
        var b = new sc(document);
        K(b, "key", a.Of, !1, a)
    }
    e.ve = function(a, b) {
        var c = this.j[af(a)].zf;
        We(this, c) && (b.preventDefault(), this.wb(a))
    };
    e.Rf = function() {
        f.clearTimeout(this.oc);
        this.oc = null;
        var a = We(this);
        if (!this.a() && a) this.sa();
        else if (this.a())
            if (a) this.aa(this.md);
            else {
                for (a = this.j.length - 1; 0 <= a; a--) L(this.j[a].fd);
                this.j = [];
                this.ha()
            }
    };
    e.Of = function(a) {
        if (this.ea && !this.xa) switch (a.keyCode) {
            case 37:
                (this.qb || 0 != this.F) && this.dispatchEvent("navigateprev");
                break;
            case 39:
                (this.qb || this.F != this.j.length - 1) && this.dispatchEvent("navigatenext")
        }
    };
    e.ub = function(a) {
        a ? (w.e.remove(this.v, "gweb-lightbox-hide"), this.v.innerHTML = a, this.Pa && w.e.add(this.v, "gweb-lightbox-overlay")) : (this.v.innerHTML = "", w.e.add(this.v, "gweb-lightbox-hide"));
        T(this.v, !1)
    };
    u("gweb.ui.LightBox.prototype.setCaption", Z.prototype.ub);
    e = Z.prototype;
    e.sc = function() {
        T(this.v, !0);
        this.Db && (new cd(this.v, 200)).play()
    };

    function af(a) {
        a = w.dataset.get(a, "lightboxIndex");
        return parseInt(a, 10)
    }

    function $e(a, b) {
        var c = w.h("span", "", "gweb-lightbox-next" == b ? a.Ne : a.Oe),
            d = w.h("img", {
                src: "//www.google.com/images/cleardot.gif",
                alt: ""
            }),
            c = w.h("a", {
                "class": "gweb-lightbox-nav " + b,
                href: "#"
            }, [c, d]);
        T(c, !1);
        w.appendChild(a.p, c);
        T(a.p, !0);
        K(c, Re, function(a) {
            a.preventDefault();
            "gweb-lightbox-next" == b ? this.dispatchEvent("navigatenext") : this.dispatchEvent("navigateprev")
        }, !1, a);
        return c
    }

    function bf(a) {
        var b = a.j.length,
            c = w.ra("gweb-lightbox-prev", a.p),
            d = w.ra("gweb-lightbox-next", a.p),
            g = w.ib("img", null, a.p);
        0 == a.F ? a.qb ? (T(c, !0), w.dataset.set(c, "lightboxIndex", b - 1)) : T(c, !1) : (T(c, !0), w.dataset.set(c, "lightboxIndex", a.F - 1));
        a.F + 1 == b ? a.qb ? (T(d, !0), w.dataset.set(d, "lightboxIndex", 0)) : T(d, !1) : (T(d, !0), w.dataset.set(d, "lightboxIndex", a.F + 1));
        a.ye && a.gb && a.tc && (cf(a, d, "gweb-lightbox-next"), cf(a, c, "gweb-lightbox-prev"));
        var b = R(a.v).height,
            h = R(a.da).height + "px";
        Lc(c, "top", h);
        Lc(d, "top", h);
        c = a.Pa ? a.q.height - b : a.q.height;
        d = 0.35 * a.q.width;
        for (b = g.length - 1; 0 <= b; b--) Q(g[b], d, c);
        a.gb = !1
    }

    function cf(a, b, c) {
        b = w.Pc(b);
        b.style.visibility = "visible";
        "gweb-lightbox-prev" == c ? b.style.left = "0" : "gweb-lightbox-next" == c && (b.style.right = "0");
        Qb(s(a.Ff, b), 2E3, a)
    }
    e.Ff = function(a) {
        a = new bd(a, 500);
        K(a, "end", this.Uf, !1, this);
        a.play()
    };
    e.Uf = function(a) {
        a = a.target.element;
        a.style.visibility = "hidden";
        a.style.opacity = 1;
        a.style.filter = ""
    };
    e.wb = function(a) {
        this.xb(af(a))
    };
    e.xb = function(a) {
        if (this.j && a <= this.j.length - 1) {
            this.F = a;
            a = this.j[this.F];
            this.ub("");
            if (!this.ea) {
                this.U(!0);
                var b = new cd(this.m, 200);
                this.tc || K(b, "end", s(Lc, this.m, "filter", ""), !1, this);
                b.play()
            }
            this.yb && (this.cd.innerHTML = this.F + 1 + "/" + this.j.length);
            this.md = R(this.m);
            switch (a.type) {
                case "A":
                    this.bb("A");
                    df(this, !0, this.X);
                    Q(this.X, a.width, a.height);
                    this.q = new O(a.width, a.height);
                    b = a.href.split("#");
                    if (1 < b.length) a = w.a(b[1]).cloneNode(!0), w.append(this.X, a.childNodes), this.dispatchEvent("fragmentloaded");
                    else throw Error("Invalid url:" + a.href);
                    break;
                case "IFRAME":
                    ef(this, a);
                    break;
                case "IMG":
                    this.Le(a)
            }
        }
    };
    u("gweb.ui.LightBox.prototype.showContentByIndex", Z.prototype.xb);

    function ff(a, b) {
        try {
            var c = window.frames[a.Vc];
            c && c.location.replace(b)
        } catch (d) {}
    }
    Z.prototype.bb = function(a) {
        this.B && ("IFRAME" != a && ff(this, "//www.google.com/images/cleardot.gif"), T(this.B, !a || "IFRAME" == a));
        this.o && ("IMG" != a && (this.o.src = "//www.google.com/images/cleardot.gif"), T(this.o, !a || "IMG" == a));
        this.X && (w.tb(this.X), T(this.X, !a || "A" == a))
    };

    function df(a, b, c) {
        w.e.enable(a.m, "gweb-lightbox-loading", b);
        a.tc && c && (b ? Xc(c, 0.5) : (new cd(c, 500)).play())
    }

    function ef(a, b) {
        a.bb("IFRAME");
        df(a, !0, a.o);
        Ib(a.B, "load", function(a) {
            a.preventDefault();
            this.B.width = b.width;
            this.B.height = b.height;
            this.q = new O(b.width, b.height);
            this.dispatchEvent("iframeloaded")
        }, !1, a);
        ff(a, gf(b))
    }
    Z.prototype.Le = function(a) {
        var b = w.ka(window),
            c = this.pb + "-image";
        this.bb("IMG");
        this.fc && (jd(this.fc, c, a.href), this.fc.start());
        df(this, !0, this.o);
        Ib(this.fc, "load", function(a) {
            a = a.target;
            this.o.src = a.src;
            if (this.Xe) {
                var c = this.da,
                    c = (new O(c.offsetWidth, c.offsetHeight)).height,
                    h = R(this.v).height + this.n,
                    c = this.Pa ? b.height - this.n - c : b.height - this.n - c - h,
                    h = 1 == this.ua ? b.width - 3 * this.n : b.width - this.n;
                a.height > c || a.width > h ? (h = Math.min(h / a.width - 0.1, c / a.height - 0.05), c = Math.floor(a.width * h), a = Math.floor(a.height *
                h), Q(this.o, c, a), this.q = new O(c, a)) : (Q(this.o, a.width, a.height), this.q = new O(a.width, a.height))
            } else Q(this.o, a.width, a.height), this.q = new O(a.width, a.height);
            this.dispatchEvent("imageloaded")
        }, !1, this)
    };

    function hf(a) {
        var b = 200 < a.q.width ? a.q.width : 200;
        a.m.style.width = Sc(b, !0);
        a.v.style.width = Sc(b, !0)
    }
    Z.prototype.Ib = function(a) {
        var b = this.j[this.F];
        hf(this);
        this.ub(b.title);
        this.aa(this.md);
        this.xa || bf(this);
        df(this, !1, a)
    };
    Z.prototype.aa = function(a) {
        if (a) {
            var b = w.ka(window),
                c = w.Y(),
                d = R(this.da),
                g = R(this.v),
                h = [],
                k = 200 <= this.q.width ? this.q.width : 200,
                d = this.q.height + d.height;
            this.Pa || (d += g.height);
            g = Math.floor(c.x + b.width / 2 - k / 2) - this.n / 2;
            b = Math.floor(c.y + b.height / 2 - d / 2) - this.n / 2;
            this.Db ? (h = [a.width - this.n, a.height - this.n, Vc(this.m).x, Vc(this.m).y], a = new jf(this.m, h, [k, d, g, b], 800, dd), K(a, "end", this.sc, !1, this), a.play()) : (Z.d.aa.call(this), this.sc())
        } else Z.d.aa.call(this)
    };

    function jf(a, b, c, d, g) {
        U.apply(this, arguments)
    }
    v(jf, U);
    jf.prototype.Bb = function() {
        Q(this.element, this.coords[0], this.coords[1]);
        Rc(this.element, this.coords[2], this.coords[3])
    };

    function Xe(a) {
        var b = a.href,
            c = b.match(/[^\?#]*(?=[\?#])/);
        this.type = (c && c[0] || b).match(Se) ? "IMG" : a.getAttribute("href", 2).match(Te) ? "A" : "IFRAME";
        this.href = a.href || "";
        this.title = this.se(a);
        this.width = "IMG" == this.type ? 0 : parseInt(w.dataset.get(a, kf), 10) || 200;
        this.height = "IMG" == this.type ? 0 : parseInt(w.dataset.get(a, lf), 10) || 200;
        this.zf = w.dataset.ac(a, mf);
        this.fd = null
    }
    var lf = "lightboxHeight",
        mf = "lightboxMobile",
        kf = "lightboxWidth";
    Xe.prototype.se = function(a) {
        return w.dataset.get(a, "lightboxCaption") || a.getAttribute("title") || ""
    };

    function gf(a) {
        if (Ve.test(a.href)) {
            a = new Ub(a.href);
            var b;
            b = a.Z.get("v");
            N(a);
            a.Z.remove("v");
            return "//www.youtube.com/embed/" + b + "?" + Yb(a.Z.toString())
        }
        return a.href
    }

    function nf() {
        M.call(this);
        this.kg = 600;
        this.mg = 1;
        this.og = dd;
        this.lg = new G(0, 0);
        this.Gc = w.Y();
        this.ia = new w.g;
        this.G = new ed(this)
    }
    v(nf, M);
    nf.prototype.scrollTo = function(a, b) {
        this.Gc = w.Y();
        var c = b || this.lg;
        a = new G(c.x + a.x, c.y + a.y);
        c = new Gc([this.Gc.x, this.Gc.y], [a.x, a.y], this.mg * this.kg, this.og);
        this.G.r(c, ["begin", "finish", "animate"], this.Sf);
        c.play()
    };
    nf.prototype.Sf = function(a) {
        switch (a.type) {
            case "begin":
                this.dispatchEvent("b");
                break;
            case "finish":
                window.scrollTo(a.x, a.y);
                this.dispatchEvent("a");
                a.ha();
                break;
            case "animate":
                window.scrollTo(a.x, a.y)
        }
    };
    nf.prototype.Mf = function(a) {
        a.preventDefault();
        a = a.target;
        var b = w.Sb(a, "A", "gweb-smoothscroll-control");
        b && (a = b);
        a = a.href.match(/(#)(.*)/)[2];
        b = w.a(a);
        of(b, !0);
        var c = Vc(b);
        this.scrollTo(c, void 0);
        window.location.hash = a;
        of(b, !1)
    };

    function of(a, b) {
        var c = a.id.match("_temp");
        b != c && (a.id = b ? a.id + "_temp" : a.id.replace("_temp", ""))
    }

    function $(a, b) {
        Z.call(this, a, b);
        this.rc = null;
        this.Qb = this.Rb = 0
    }
    v($, Z);
    u("design.ui.LightBox", $);
    $.prototype.sa = function() {
        if (We(this)) {
            for (var a = w.Aa(this.Dc), b = 0, c = a.length; b < c; b++) {
                var d = a[b],
                    g = new Xe(d);
                g.fd = K(d, "click", s(this.ve, d), !1, this);
                this.j.push(g);
                w.dataset.set(d, "lightboxIndex", this.j.length - 1); - 1 == this.ua && Ue.test(g.href) && (this.ua = 1)
            }
            Je && pf.Ye(!1);
            Ud(this, 0.8);
            this.Jc = !0;
            ae(this);
            this.va();
            1 == this.ua && w.e.add(this.m, "gweb-lightbox-outside-nav");
            this.n = Math.ceil(2 * $c(this.m).top);
            this.xa || (Ye(this), this.hd.href = "javascript:void(0)", this.jd.href = "javascript:void(0)");
            Ze(this);
            K(this,
                Yd, function() {
                    this.gb = !0;
                    this.m.style.overflow = ""
                }, !1, this)
        }
        K(window, "resize", s(this.Od, 250), !1, this)
    };
    $.prototype.wb = function(a) {
        this.rc = a;
        this.Rb = parseInt(w.dataset.get(a, kf), 10);
        this.Qb = parseInt(w.dataset.get(a, lf), 10);
        $.d.wb.call(this, a)
    };
    $.prototype.xb = function(a) {
        this.F = a;
        if (this.rc) {
            var b = R(this.rc),
                c = Vc(this.rc);
            Q(this.m, b.width - this.n, b.height - this.n);
            Rc(this.m, c.x, c.y);
            this.md = new O(1 * b.width - this.n, 1 * b.height - this.n);
            this.B ? (this.B.width = this.Rb, this.B.height = this.Qb) : this.o && (this.o.width = this.Rb, this.o.height = this.Qb);
            this.pd(!0);
            this.U(!0);
            this.q = new O(this.Rb, this.Qb);
            this.gb ? this.aa(b) : this.aa(this.q);
            this.pd(!1)
        }
        $.d.xb.call(this, a)
    };
    u("design.ui.LightBox.prototype.showContentByIndex", $.prototype.xb);
    $.prototype.Le = function(a) {
        this.bb("IMG");
        Q(this.o, "", "");
        this.o.src = a.href;
        this.dispatchEvent("imageloaded")
    };
    $.prototype.aa = function(a) {
        if (this.ea) {
            var b = w.ka(window),
                c = w.Y(),
                d = R(this.da),
                g = 200 <= this.q.width ? this.q.width : 200,
                d = this.q.height + d.height;
            if (!this.Pa) {
                var h = this.j[this.F].title;
                h && 1 < this.j.length && (this.ub(h), h = R(this.v), d += h.height + this.n / 4)
            }
            h = Math.floor(c.x + b.width / 2 - g / 2) - this.n / 2;
            b = Math.floor(c.y + b.height / 2 - d / 2) - this.n / 2;
            this.Db ? (c = [a.width - this.n, a.height - this.n, Vc(this.m).x, Vc(this.m).y], a = {
                width: a.width + "px",
                height: a.height + "px",
                left: c[2] + "px",
                top: c[3] + "px"
            }, g = {
                width: g + "px",
                height: d + "px",
                left: h + "px",
                top: b + "px"
            }, this.gb && (a.opacity = 0, g.opacity = 1), g = new oe(this.m, 200, a, g, {
                mc: "all",
                duration: 0.25,
                timing: "cubic-bezier(.4,0,.2,1)",
                Lb: 0
            }), this.sc(), g.play()) : (this.n = Math.ceil(2 * $c(this.m).top), $.d.aa.call(this), this.sc())
        }
    };
    Z.prototype.Ib = function() {
        var a = this.j[this.F];
        hf(this);
        this.ub(a.title);
        this.xa || bf(this);
        this.m.style.overflow = "visible"
    };

    function qf(a, b) {
        this.className = a;
        this.fillColor = b;
        this.Xf = 20;
        this.D = [];
        this.pc = void 0 !== document.createElement("div").style.MozTransformOrigin ? !0 : !1;
        this.od = {};
        this.Xc()
    }
    e = qf.prototype;
    e.Xc = function() {
        if (He && document.createElement("svg").getAttributeNS) {
            this.D = w.Aa(this.className);
            for (var a = 0, b; b = this.D[a]; a++) this.od[b.id] = new rf(b, 20, this.pc), K(b, "mousedown", this.jg, !0, this), K(b, "mouseup", this.Gf, !0, this)
        }
    };
    e.jg = function(a) {
        var b = this.od[a.currentTarget.id];
        if (!b.Ja || !b.T) {
            var c = b.ab,
                d = this.pc ? "transform" : "-webkit-transform",
                g = a.currentTarget.getBoundingClientRect(),
                h = a.clientX - g.left,
                g = a.clientY - g.top;
            this.pc ? w.Qc(b.Zb.a()).style.transform = "translate(" + h + "px, " + g + "px)" : De(c.a(), {
                cx: h,
                cy: g
            });
            h = new ze(this.fillColor, 0.5);
            c.fill = h;
            se(c, h);
            a = R(a.currentTarget);
            b.scale = Math.sqrt(Math.pow(a.width, 2) + Math.pow(a.height, 2)) / this.Xf;
            a = "scale(" + b.scale + ")";
            b.Ja = new oe(this.pc ? b.Zb.a() : c.a(), 0.68, {
                transform: "scale(1)",
                webkitTransform: "scale(1)",
                opacity: ".1"
            }, {
                transform: a,
                webkitTransform: a,
                opacity: ".5"
            }, [{
                mc: "opacity",
                duration: 0.15,
                timing: "ease-in",
                Lb: 0
            }, {
                mc: d,
                duration: 0.5,
                timing: "cubic-bezier(.4,0,.2,1)",
                Lb: 0.1
            }]);
            b.Ja.play();
            b.T = !0;
            b.Pb = null
        }
    };
    e.Gf = function(a) {
        a = this.od[a.currentTarget.id];
        !a.Ja.T() && a.T ? this.Se(a) : a.T && !a.Pb && (a.Pb = K(a.Ja, "end", s(this.Se, a), !1, this))
    };
    e.Se = function(a) {
        var b = new oe(a.ab.a(), 0.3, {
            opacity: ".5"
        }, {
            opacity: "0"
        }, {
            mc: "opacity",
            duration: 0.3,
            timing: "ease-in",
            Lb: 0
        });
        K(b, "end", s(this.uf, a), !1, this);
        b.play()
    };
    e.uf = function(a) {
        a.T = !1;
        a.Pb = null;
        a = a.ab.a();
        a.style.webkitTransform = "scale(1)";
        a.style.Rg = "scale(1)"
    };

    function rf(a, b, c) {
        this.vf = a;
        this.vd = new Ae("100%", "100%");
        this.ab = this.Zb = null;
        this.T = !1;
        this.scale = 1;
        this.ig = c;
        this.Pb = this.Ja = null;
        this.De = b;
        this.Xc()
    }
    rf.prototype.Xc = function() {
        this.vd.va(this.vf);
        var a;
        if (this.ig) {
            a = this.vd;
            var b = Ce(a, "g");
            a.$a.a().appendChild(b);
            a = new ve(b, a)
        } else a = null;
        this.Zb = a;
        a = this.vd;
        var b = this.Zb,
            c = Ce(a, "ellipse", {
                cx: "50%",
                cy: "50%",
                rx: this.De,
                ry: this.De
            }),
            c = new we(c, a, null, null);
        a.Eb(c, b);
        this.ab = c;
        this.ab.a().setAttribute("class", "ripple")
    };
    var sf = new nf,
        tf = w.ib("a", "gweb-smoothscroll-control", null);
    if (tf)
        for (var uf = 0, vf; vf = tf[uf]; uf++) {
            var wf, xf = fc(vf.href),
                yf = xf.ya + xf.Qa,
                zf = fc(window.location.hostname + window.location.pathname);
            if (yf == zf.ya + zf.Qa && xf.hb) {
                wf = vf.href.match(/(#)(.*)/)[2];
                var Af = w.a(wf)
            }
            Af && sf.G.r(vf, "click", sf.Mf)
        }
    var pf = new $("video-link");
    pf.Sd();
    pf.$e(720);
    pf.Ze(" ");
    pf.Rd();
    pf.sa();
    new qf("paper-ripple", "white");
})();
/**
 * Created by RAHULSHARMA on 03/04/2015.
 */
