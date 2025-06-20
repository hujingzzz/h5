/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 p2.js authors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
!function (a) { if ("object" == typeof exports)
    module.exports = a();
else if ("function" == typeof define && false)
    define(a);
else {
    var b;
    "undefined" != typeof window ? b = window : "undefined" != typeof global ? b = global : "undefined" != typeof self && (b = self), b.p2 = a();
} }(function () {
    return function a(b, c, d) { function e(g, h) { if (!c[g]) {
        if (!b[g]) {
            var i = "function" == typeof require && require;
            if (!h && i)
                return i(g, !0);
            if (f)
                return f(g, !0);
            throw new Error("Cannot find module '" + g + "'");
        }
        var j = c[g] = { exports: {} };
        b[g][0].call(j.exports, function (a) { var c = b[g][1][a]; return e(c ? c : a); }, j, j.exports, a, b, c, d);
    } return c[g].exports; } for (var f = "function" == typeof require && require, g = 0; g < d.length; g++)
        e(d[g]); return e; }({ 1: [function (a, b, c) { function d() { } var e = a("./Scalar"); b.exports = d, d.lineInt = function (a, b, c) { c = c || 0; var d, f, g, h, i, j, k, l = [0, 0]; return d = a[1][1] - a[0][1], f = a[0][0] - a[1][0], g = d * a[0][0] + f * a[0][1], h = b[1][1] - b[0][1], i = b[0][0] - b[1][0], j = h * b[0][0] + i * b[0][1], k = d * i - h * f, e.eq(k, 0, c) || (l[0] = (i * g - f * j) / k, l[1] = (d * j - h * g) / k), l; }, d.segmentsIntersect = function (a, b, c, d) { var e = b[0] - a[0], f = b[1] - a[1], g = d[0] - c[0], h = d[1] - c[1]; if (g * f - h * e == 0)
                return !1; var i = (e * (c[1] - a[1]) + f * (a[0] - c[0])) / (g * f - h * e), j = (g * (a[1] - c[1]) + h * (c[0] - a[0])) / (h * e - g * f); return i >= 0 && 1 >= i && j >= 0 && 1 >= j; }; }, { "./Scalar": 4 }], 2: [function (a, b, c) { function d() { } b.exports = d, d.area = function (a, b, c) { return (b[0] - a[0]) * (c[1] - a[1]) - (c[0] - a[0]) * (b[1] - a[1]); }, d.left = function (a, b, c) { return d.area(a, b, c) > 0; }, d.leftOn = function (a, b, c) { return d.area(a, b, c) >= 0; }, d.right = function (a, b, c) { return d.area(a, b, c) < 0; }, d.rightOn = function (a, b, c) { return d.area(a, b, c) <= 0; }; var e = [], f = []; d.collinear = function (a, b, c, g) { if (g) {
                var h = e, i = f;
                h[0] = b[0] - a[0], h[1] = b[1] - a[1], i[0] = c[0] - b[0], i[1] = c[1] - b[1];
                var j = h[0] * i[0] + h[1] * i[1], k = Math.sqrt(h[0] * h[0] + h[1] * h[1]), l = Math.sqrt(i[0] * i[0] + i[1] * i[1]), m = Math.acos(j / (k * l));
                return g > m;
            } return 0 == d.area(a, b, c); }, d.sqdist = function (a, b) { var c = b[0] - a[0], d = b[1] - a[1]; return c * c + d * d; }; }, {}], 3: [function (a, b, c) { function d() { this.vertices = []; } function e(a, b, c, d, e) { e = e || 0; var f = b[1] - a[1], g = a[0] - b[0], i = f * a[0] + g * a[1], j = d[1] - c[1], k = c[0] - d[0], l = j * c[0] + k * c[1], m = f * k - j * g; return h.eq(m, 0, e) ? [0, 0] : [(k * i - g * l) / m, (f * l - j * i) / m]; } var f = a("./Line"), g = a("./Point"), h = a("./Scalar"); b.exports = d, d.prototype.at = function (a) { var b = this.vertices, c = b.length; return b[0 > a ? a % c + c : a % c]; }, d.prototype.first = function () { return this.vertices[0]; }, d.prototype.last = function () { return this.vertices[this.vertices.length - 1]; }, d.prototype.clear = function () { this.vertices.length = 0; }, d.prototype.append = function (a, b, c) { if ("undefined" == typeof b)
                throw new Error("From is not given!"); if ("undefined" == typeof c)
                throw new Error("To is not given!"); if (b > c - 1)
                throw new Error("lol1"); if (c > a.vertices.length)
                throw new Error("lol2"); if (0 > b)
                throw new Error("lol3"); for (var d = b; c > d; d++)
                this.vertices.push(a.vertices[d]); }, d.prototype.makeCCW = function () { for (var a = 0, b = this.vertices, c = 1; c < this.vertices.length; ++c)
                (b[c][1] < b[a][1] || b[c][1] == b[a][1] && b[c][0] > b[a][0]) && (a = c); g.left(this.at(a - 1), this.at(a), this.at(a + 1)) || this.reverse(); }, d.prototype.reverse = function () { for (var a = [], b = 0, c = this.vertices.length; b !== c; b++)
                a.push(this.vertices.pop()); this.vertices = a; }, d.prototype.isReflex = function (a) { return g.right(this.at(a - 1), this.at(a), this.at(a + 1)); }; var i = [], j = []; d.prototype.canSee = function (a, b) { var c, d, e = i, h = j; if (g.leftOn(this.at(a + 1), this.at(a), this.at(b)) && g.rightOn(this.at(a - 1), this.at(a), this.at(b)))
                return !1; d = g.sqdist(this.at(a), this.at(b)); for (var k = 0; k !== this.vertices.length; ++k)
                if ((k + 1) % this.vertices.length !== a && k !== a && g.leftOn(this.at(a), this.at(b), this.at(k + 1)) && g.rightOn(this.at(a), this.at(b), this.at(k)) && (e[0] = this.at(a), e[1] = this.at(b), h[0] = this.at(k), h[1] = this.at(k + 1), c = f.lineInt(e, h), g.sqdist(this.at(a), c) < d))
                    return !1; return !0; }, d.prototype.copy = function (a, b, c) { var e = c || new d; if (e.clear(), b > a)
                for (var f = a; b >= f; f++)
                    e.vertices.push(this.vertices[f]);
            else {
                for (var f = 0; b >= f; f++)
                    e.vertices.push(this.vertices[f]);
                for (var f = a; f < this.vertices.length; f++)
                    e.vertices.push(this.vertices[f]);
            } return e; }, d.prototype.getCutEdges = function () { for (var a = [], b = [], c = [], e = new d, f = Number.MAX_VALUE, g = 0; g < this.vertices.length; ++g)
                if (this.isReflex(g))
                    for (var h = 0; h < this.vertices.length; ++h)
                        if (this.canSee(g, h)) {
                            b = this.copy(g, h, e).getCutEdges(), c = this.copy(h, g, e).getCutEdges();
                            for (var i = 0; i < c.length; i++)
                                b.push(c[i]);
                            b.length < f && (a = b, f = b.length, a.push([this.at(g), this.at(h)]));
                        } return a; }, d.prototype.decomp = function () { var a = this.getCutEdges(); return a.length > 0 ? this.slice(a) : [this]; }, d.prototype.slice = function (a) { if (0 == a.length)
                return [this]; if (a instanceof Array && a.length && a[0] instanceof Array && 2 == a[0].length && a[0][0] instanceof Array) {
                for (var b = [this], c = 0; c < a.length; c++)
                    for (var d = a[c], e = 0; e < b.length; e++) {
                        var f = b[e], g = f.slice(d);
                        if (g) {
                            b.splice(e, 1), b.push(g[0], g[1]);
                            break;
                        }
                    }
                return b;
            } var d = a, c = this.vertices.indexOf(d[0]), e = this.vertices.indexOf(d[1]); return -1 != c && -1 != e ? [this.copy(c, e), this.copy(e, c)] : !1; }, d.prototype.isSimple = function () { for (var a = this.vertices, b = 0; b < a.length - 1; b++)
                for (var c = 0; b - 1 > c; c++)
                    if (f.segmentsIntersect(a[b], a[b + 1], a[c], a[c + 1]))
                        return !1; for (var b = 1; b < a.length - 2; b++)
                if (f.segmentsIntersect(a[0], a[a.length - 1], a[b], a[b + 1]))
                    return !1; return !0; }, d.prototype.quickDecomp = function (a, b, c, f, h, i) { h = h || 100, i = i || 0, f = f || 25, a = "undefined" != typeof a ? a : [], b = b || [], c = c || []; var j = [0, 0], k = [0, 0], l = [0, 0], m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = new d, u = new d, v = this, w = this.vertices; if (w.length < 3)
                return a; if (i++, i > h)
                return console.warn("quickDecomp: max level (" + h + ") reached."), a; for (var x = 0; x < this.vertices.length; ++x)
                if (v.isReflex(x)) {
                    b.push(v.vertices[x]), m = n = Number.MAX_VALUE;
                    for (var y = 0; y < this.vertices.length; ++y)
                        g.left(v.at(x - 1), v.at(x), v.at(y)) && g.rightOn(v.at(x - 1), v.at(x), v.at(y - 1)) && (l = e(v.at(x - 1), v.at(x), v.at(y), v.at(y - 1)), g.right(v.at(x + 1), v.at(x), l) && (o = g.sqdist(v.vertices[x], l), n > o && (n = o, k = l, r = y))), g.left(v.at(x + 1), v.at(x), v.at(y + 1)) && g.rightOn(v.at(x + 1), v.at(x), v.at(y)) && (l = e(v.at(x + 1), v.at(x), v.at(y), v.at(y + 1)), g.left(v.at(x - 1), v.at(x), l) && (o = g.sqdist(v.vertices[x], l), m > o && (m = o, j = l, q = y)));
                    if (r == (q + 1) % this.vertices.length)
                        l[0] = (k[0] + j[0]) / 2, l[1] = (k[1] + j[1]) / 2, c.push(l), q > x ? (t.append(v, x, q + 1), t.vertices.push(l), u.vertices.push(l), 0 != r && u.append(v, r, v.vertices.length), u.append(v, 0, x + 1)) : (0 != x && t.append(v, x, v.vertices.length), t.append(v, 0, q + 1), t.vertices.push(l), u.vertices.push(l), u.append(v, r, x + 1));
                    else {
                        if (r > q && (q += this.vertices.length), p = Number.MAX_VALUE, r > q)
                            return a;
                        for (var y = r; q >= y; ++y)
                            g.leftOn(v.at(x - 1), v.at(x), v.at(y)) && g.rightOn(v.at(x + 1), v.at(x), v.at(y)) && (o = g.sqdist(v.at(x), v.at(y)), p > o && (p = o, s = y % this.vertices.length));
                        s > x ? (t.append(v, x, s + 1), 0 != s && u.append(v, s, w.length), u.append(v, 0, x + 1)) : (0 != x && t.append(v, x, w.length), t.append(v, 0, s + 1), u.append(v, s, x + 1));
                    }
                    return t.vertices.length < u.vertices.length ? (t.quickDecomp(a, b, c, f, h, i), u.quickDecomp(a, b, c, f, h, i)) : (u.quickDecomp(a, b, c, f, h, i), t.quickDecomp(a, b, c, f, h, i)), a;
                } return a.push(this), a; }, d.prototype.removeCollinearPoints = function (a) { for (var b = 0, c = this.vertices.length - 1; this.vertices.length > 3 && c >= 0; --c)
                g.collinear(this.at(c - 1), this.at(c), this.at(c + 1), a) && (this.vertices.splice(c % this.vertices.length, 1), c--, b++); return b; }; }, { "./Line": 1, "./Point": 2, "./Scalar": 4 }], 4: [function (a, b, c) { function d() { } b.exports = d, d.eq = function (a, b, c) { return c = c || 0, Math.abs(a - b) < c; }; }, {}], 5: [function (a, b, c) { b.exports = { Polygon: a("./Polygon"), Point: a("./Point") }; }, { "./Point": 2, "./Polygon": 3 }], 6: [function (a, b, c) { b.exports = { name: "p2", version: "0.7.0", description: "A JavaScript 2D physics engine.", author: "Stefan Hedman <schteppe@gmail.com> (http://steffe.se)", keywords: ["p2.js", "p2", "physics", "engine", "2d"], main: "./src/p2.js", engines: { node: "*" }, repository: { type: "git", url: "" }, bugs: { url: "" }, licenses: [{ type: "MIT" }], devDependencies: { grunt: "^0.4.5", "grunt-contrib-jshint": "^0.11.2", "grunt-contrib-nodeunit": "^0.4.1", "grunt-contrib-uglify": "~0.4.0", "grunt-contrib-watch": "~0.5.0", "grunt-browserify": "~2.0.1", "grunt-contrib-concat": "^0.4.0" }, dependencies: { "poly-decomp": "0.1.0" } }; }, {}], 7: [function (a, b, c) { function d(a) { this.lowerBound = e.create(), a && a.lowerBound && e.copy(this.lowerBound, a.lowerBound), this.upperBound = e.create(), a && a.upperBound && e.copy(this.upperBound, a.upperBound); } var e = a("../math/vec2"); a("../utils/Utils"); b.exports = d; var f = e.create(); d.prototype.setFromPoints = function (a, b, c, d) { var g = this.lowerBound, h = this.upperBound; "number" != typeof c && (c = 0), 0 !== c ? e.rotate(g, a[0], c) : e.copy(g, a[0]), e.copy(h, g); for (var i = Math.cos(c), j = Math.sin(c), k = 1; k < a.length; k++) {
                var l = a[k];
                if (0 !== c) {
                    var m = l[0], n = l[1];
                    f[0] = i * m - j * n, f[1] = j * m + i * n, l = f;
                }
                for (var o = 0; 2 > o; o++)
                    l[o] > h[o] && (h[o] = l[o]), l[o] < g[o] && (g[o] = l[o]);
            } b && (e.add(this.lowerBound, this.lowerBound, b), e.add(this.upperBound, this.upperBound, b)), d && (this.lowerBound[0] -= d, this.lowerBound[1] -= d, this.upperBound[0] += d, this.upperBound[1] += d); }, d.prototype.copy = function (a) { e.copy(this.lowerBound, a.lowerBound), e.copy(this.upperBound, a.upperBound); }, d.prototype.extend = function (a) { for (var b = 2; b--;) {
                var c = a.lowerBound[b];
                this.lowerBound[b] > c && (this.lowerBound[b] = c);
                var d = a.upperBound[b];
                this.upperBound[b] < d && (this.upperBound[b] = d);
            } }, d.prototype.overlaps = function (a) { var b = this.lowerBound, c = this.upperBound, d = a.lowerBound, e = a.upperBound; return (d[0] <= c[0] && c[0] <= e[0] || b[0] <= e[0] && e[0] <= c[0]) && (d[1] <= c[1] && c[1] <= e[1] || b[1] <= e[1] && e[1] <= c[1]); }, d.prototype.containsPoint = function (a) { var b = this.lowerBound, c = this.upperBound; return b[0] <= a[0] && a[0] <= c[0] && b[1] <= a[1] && a[1] <= c[1]; }, d.prototype.overlapsRay = function (a) { var b = 1 / a.direction[0], c = 1 / a.direction[1], d = (this.lowerBound[0] - a.from[0]) * b, e = (this.upperBound[0] - a.from[0]) * b, f = (this.lowerBound[1] - a.from[1]) * c, g = (this.upperBound[1] - a.from[1]) * c, h = Math.max(Math.max(Math.min(d, e), Math.min(f, g))), i = Math.min(Math.min(Math.max(d, e), Math.max(f, g))); return 0 > i ? -1 : h > i ? -1 : h; }; }, { "../math/vec2": 30, "../utils/Utils": 57 }], 8: [function (a, b, c) { function d(a) { this.type = a, this.result = [], this.world = null, this.boundingVolumeType = d.AABB; } var e = a("../math/vec2"), f = a("../objects/Body"); b.exports = d, d.AABB = 1, d.BOUNDING_CIRCLE = 2, d.prototype.setWorld = function (a) { this.world = a; }, d.prototype.getCollisionPairs = function (a) { }; var g = e.create(); d.boundingRadiusCheck = function (a, b) { e.sub(g, a.position, b.position); var c = e.squaredLength(g), d = a.boundingRadius + b.boundingRadius; return d * d >= c; }, d.aabbCheck = function (a, b) { return a.getAABB().overlaps(b.getAABB()); }, d.prototype.boundingVolumeCheck = function (a, b) { var c; switch (this.boundingVolumeType) {
                case d.BOUNDING_CIRCLE:
                    c = d.boundingRadiusCheck(a, b);
                    break;
                case d.AABB:
                    c = d.aabbCheck(a, b);
                    break;
                default: throw new Error("Bounding volume type not recognized: " + this.boundingVolumeType);
            } return c; }, d.canCollide = function (a, b) { var c = f.KINEMATIC, d = f.STATIC; return a.type === d && b.type === d ? !1 : a.type === c && b.type === d || a.type === d && b.type === c ? !1 : a.type === c && b.type === c ? !1 : a.sleepState === f.SLEEPING && b.sleepState === f.SLEEPING ? !1 : a.sleepState === f.SLEEPING && b.type === d || b.sleepState === f.SLEEPING && a.type === d ? !1 : !0; }, d.NAIVE = 1, d.SAP = 2; }, { "../math/vec2": 30, "../objects/Body": 31 }], 9: [function (a, b, c) { function d() { e.call(this, e.NAIVE); } var e = (a("../shapes/Circle"), a("../shapes/Plane"), a("../shapes/Shape"), a("../shapes/Particle"), a("../collision/Broadphase")); a("../math/vec2"); b.exports = d, d.prototype = new e, d.prototype.constructor = d, d.prototype.getCollisionPairs = function (a) { var b = a.bodies, c = this.result; c.length = 0; for (var d = 0, f = b.length; d !== f; d++)
                for (var g = b[d], h = 0; d > h; h++) {
                    var i = b[h];
                    e.canCollide(g, i) && this.boundingVolumeCheck(g, i) && c.push(g, i);
                } return c; }, d.prototype.aabbQuery = function (a, b, c) { c = c || []; for (var d = a.bodies, e = 0; e < d.length; e++) {
                var f = d[e];
                f.aabbNeedsUpdate && f.updateAABB(), f.aabb.overlaps(b) && c.push(f);
            } return c; }; }, { "../collision/Broadphase": 8, "../math/vec2": 30, "../shapes/Circle": 39, "../shapes/Particle": 43, "../shapes/Plane": 44, "../shapes/Shape": 45 }], 10: [function (a, b, c) {
                function d() { this.contactEquations = [], this.frictionEquations = [], this.enableFriction = !0, this.enabledEquations = !0, this.slipForce = 10, this.frictionCoefficient = .3, this.surfaceVelocity = 0, this.contactEquationPool = new k({ size: 32 }), this.frictionEquationPool = new l({ size: 64 }), this.restitution = 0, this.stiffness = n.DEFAULT_STIFFNESS, this.relaxation = n.DEFAULT_RELAXATION, this.frictionStiffness = n.DEFAULT_STIFFNESS, this.frictionRelaxation = n.DEFAULT_RELAXATION, this.enableFrictionReduction = !0, this.collidingBodiesLastStep = new m, this.contactSkinSize = .01; }
                function e(a, b) { g.set(a.vertices[0], .5 * -b.length, -b.radius), g.set(a.vertices[1], .5 * b.length, -b.radius), g.set(a.vertices[2], .5 * b.length, b.radius), g.set(a.vertices[3], .5 * -b.length, b.radius); }
                function f(a, b, c, d) { for (var e = T, f = U, j = V, k = W, l = a, m = b.vertices, n = null, o = 0; o !== m.length + 1; o++) {
                    var p = m[o % m.length], q = m[(o + 1) % m.length];
                    g.rotate(e, p, d), g.rotate(f, q, d), i(e, e, c), i(f, f, c), h(j, e, l), h(k, f, l);
                    var r = g.crossLength(j, k);
                    if (null === n && (n = r), 0 >= r * n)
                        return !1;
                    n = r;
                } return !0; }
                var g = a("../math/vec2"), h = g.sub, i = g.add, j = g.dot, k = (a("../utils/Utils"), a("../utils/ContactEquationPool")), l = a("../utils/FrictionEquationPool"), m = a("../utils/TupleDictionary"), n = a("../equations/Equation"), o = (a("../equations/ContactEquation"), a("../equations/FrictionEquation"), a("../shapes/Circle")), p = a("../shapes/Convex"), q = a("../shapes/Shape"), r = (a("../objects/Body"), a("../shapes/Box"));
                b.exports = d;
                var s = g.fromValues(0, 1), t = g.fromValues(0, 0), u = g.fromValues(0, 0), v = g.fromValues(0, 0), w = g.fromValues(0, 0), x = g.fromValues(0, 0), y = g.fromValues(0, 0), z = g.fromValues(0, 0), A = g.fromValues(0, 0), B = g.fromValues(0, 0), C = g.fromValues(0, 0), D = g.fromValues(0, 0), E = g.fromValues(0, 0), F = g.fromValues(0, 0), G = g.fromValues(0, 0), H = g.fromValues(0, 0), I = g.fromValues(0, 0), J = g.fromValues(0, 0), K = g.fromValues(0, 0), L = [], M = g.create(), N = g.create();
                d.prototype.bodiesOverlap = function (a, b) { for (var c = M, d = N, e = 0, f = a.shapes.length; e !== f; e++) {
                    var g = a.shapes[e];
                    a.toWorldFrame(c, g.position);
                    for (var h = 0, i = b.shapes.length; h !== i; h++) {
                        var j = b.shapes[h];
                        if (b.toWorldFrame(d, j.position), this[g.type | j.type](a, g, c, g.angle + a.angle, b, j, d, j.angle + b.angle, !0))
                            return !0;
                    }
                } return !1; }, d.prototype.collidedLastStep = function (a, b) { var c = 0 | a.id, d = 0 | b.id; return !!this.collidingBodiesLastStep.get(c, d); }, d.prototype.reset = function () { this.collidingBodiesLastStep.reset(); for (var a = this.contactEquations, b = a.length; b--;) {
                    var c = a[b], d = c.bodyA.id, e = c.bodyB.id;
                    this.collidingBodiesLastStep.set(d, e, !0);
                } for (var f = this.contactEquations, g = this.frictionEquations, h = 0; h < f.length; h++)
                    this.contactEquationPool.release(f[h]); for (var h = 0; h < g.length; h++)
                    this.frictionEquationPool.release(g[h]); this.contactEquations.length = this.frictionEquations.length = 0; }, d.prototype.createContactEquation = function (a, b, c, d) { var e = this.contactEquationPool.get(); return e.bodyA = a, e.bodyB = b, e.shapeA = c, e.shapeB = d, e.restitution = this.restitution, e.firstImpact = !this.collidedLastStep(a, b), e.stiffness = this.stiffness, e.relaxation = this.relaxation, e.needsUpdate = !0, e.enabled = this.enabledEquations, e.offset = this.contactSkinSize, e; }, d.prototype.createFrictionEquation = function (a, b, c, d) { var e = this.frictionEquationPool.get(); return e.bodyA = a, e.bodyB = b, e.shapeA = c, e.shapeB = d, e.setSlipForce(this.slipForce), e.frictionCoefficient = this.frictionCoefficient, e.relativeVelocity = this.surfaceVelocity, e.enabled = this.enabledEquations, e.needsUpdate = !0, e.stiffness = this.frictionStiffness, e.relaxation = this.frictionRelaxation, e.contactEquations.length = 0, e; }, d.prototype.createFrictionFromContact = function (a) { var b = this.createFrictionEquation(a.bodyA, a.bodyB, a.shapeA, a.shapeB); return g.copy(b.contactPointA, a.contactPointA), g.copy(b.contactPointB, a.contactPointB), g.rotate90cw(b.t, a.normalA), b.contactEquations.push(a), b; }, d.prototype.createFrictionFromAverage = function (a) { var b = this.contactEquations[this.contactEquations.length - 1], c = this.createFrictionEquation(b.bodyA, b.bodyB, b.shapeA, b.shapeB), d = b.bodyA; b.bodyB; g.set(c.contactPointA, 0, 0), g.set(c.contactPointB, 0, 0), g.set(c.t, 0, 0); for (var e = 0; e !== a; e++)
                    b = this.contactEquations[this.contactEquations.length - 1 - e], b.bodyA === d ? (g.add(c.t, c.t, b.normalA), g.add(c.contactPointA, c.contactPointA, b.contactPointA), g.add(c.contactPointB, c.contactPointB, b.contactPointB)) : (g.sub(c.t, c.t, b.normalA), g.add(c.contactPointA, c.contactPointA, b.contactPointB), g.add(c.contactPointB, c.contactPointB, b.contactPointA)), c.contactEquations.push(b); var f = 1 / a; return g.scale(c.contactPointA, c.contactPointA, f), g.scale(c.contactPointB, c.contactPointB, f), g.normalize(c.t, c.t), g.rotate90cw(c.t, c.t), c; }, d.prototype[q.LINE | q.CONVEX] = d.prototype.convexLine = function (a, b, c, d, e, f, g, h, i) { return i ? !1 : 0; }, d.prototype[q.LINE | q.BOX] = d.prototype.lineBox = function (a, b, c, d, e, f, g, h, i) { return i ? !1 : 0; };
                var O = new r({ width: 1, height: 1 }), P = g.create();
                d.prototype[q.CAPSULE | q.CONVEX] = d.prototype[q.CAPSULE | q.BOX] = d.prototype.convexCapsule = function (a, b, c, d, f, h, i, j, k) { var l = P; g.set(l, h.length / 2, 0), g.rotate(l, l, j), g.add(l, l, i); var m = this.circleConvex(f, h, l, j, a, b, c, d, k, h.radius); g.set(l, -h.length / 2, 0), g.rotate(l, l, j), g.add(l, l, i); var n = this.circleConvex(f, h, l, j, a, b, c, d, k, h.radius); if (k && (m || n))
                    return !0; var o = O; e(o, h); var p = this.convexConvex(a, b, c, d, f, o, i, j, k); return p + m + n; }, d.prototype[q.CAPSULE | q.LINE] = d.prototype.lineCapsule = function (a, b, c, d, e, f, g, h, i) { return i ? !1 : 0; };
                var Q = g.create(), R = g.create(), S = new r({ width: 1, height: 1 });
                d.prototype[q.CAPSULE | q.CAPSULE] = d.prototype.capsuleCapsule = function (a, b, c, d, f, h, i, j, k) { for (var l, m = Q, n = R, o = 0, p = 0; 2 > p; p++) {
                    g.set(m, (0 === p ? -1 : 1) * b.length / 2, 0), g.rotate(m, m, d), g.add(m, m, c);
                    for (var q = 0; 2 > q; q++) {
                        g.set(n, (0 === q ? -1 : 1) * h.length / 2, 0), g.rotate(n, n, j), g.add(n, n, i), this.enableFrictionReduction && (l = this.enableFriction, this.enableFriction = !1);
                        var r = this.circleCircle(a, b, m, d, f, h, n, j, k, b.radius, h.radius);
                        if (this.enableFrictionReduction && (this.enableFriction = l), k && r)
                            return !0;
                        o += r;
                    }
                } this.enableFrictionReduction && (l = this.enableFriction, this.enableFriction = !1); var s = S; e(s, b); var t = this.convexCapsule(a, s, c, d, f, h, i, j, k); if (this.enableFrictionReduction && (this.enableFriction = l), k && t)
                    return !0; if (o += t, this.enableFrictionReduction) {
                    var l = this.enableFriction;
                    this.enableFriction = !1;
                } e(s, h); var u = this.convexCapsule(f, s, i, j, a, b, c, d, k); return this.enableFrictionReduction && (this.enableFriction = l), k && u ? !0 : (o += u, this.enableFrictionReduction && o && this.enableFriction && this.frictionEquations.push(this.createFrictionFromAverage(o)), o); }, d.prototype[q.LINE | q.LINE] = d.prototype.lineLine = function (a, b, c, d, e, f, g, h, i) { return i ? !1 : 0; }, d.prototype[q.PLANE | q.LINE] = d.prototype.planeLine = function (a, b, c, d, e, f, k, l, m) { var n = t, o = u, p = v, q = w, r = x, C = y, D = z, E = A, F = B, G = L, H = 0; g.set(n, -f.length / 2, 0), g.set(o, f.length / 2, 0), g.rotate(p, n, l), g.rotate(q, o, l), i(p, p, k), i(q, q, k), g.copy(n, p), g.copy(o, q), h(r, o, n), g.normalize(C, r), g.rotate90cw(F, C), g.rotate(E, s, d), G[0] = n, G[1] = o; for (var I = 0; I < G.length; I++) {
                    var J = G[I];
                    h(D, J, c);
                    var K = j(D, E);
                    if (0 > K) {
                        if (m)
                            return !0;
                        var M = this.createContactEquation(a, e, b, f);
                        H++, g.copy(M.normalA, E), g.normalize(M.normalA, M.normalA), g.scale(D, E, K), h(M.contactPointA, J, D), h(M.contactPointA, M.contactPointA, a.position), h(M.contactPointB, J, k), i(M.contactPointB, M.contactPointB, k), h(M.contactPointB, M.contactPointB, e.position), this.contactEquations.push(M), this.enableFrictionReduction || this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(M));
                    }
                } return m ? !1 : (this.enableFrictionReduction || H && this.enableFriction && this.frictionEquations.push(this.createFrictionFromAverage(H)), H); }, d.prototype[q.PARTICLE | q.CAPSULE] = d.prototype.particleCapsule = function (a, b, c, d, e, f, g, h, i) { return this.circleLine(a, b, c, d, e, f, g, h, i, f.radius, 0); }, d.prototype[q.CIRCLE | q.LINE] = d.prototype.circleLine = function (a, b, c, d, e, f, k, l, m, n, o) { var n = n || 0, o = "undefined" != typeof o ? o : b.radius, p = t, q = u, r = v, s = w, H = x, I = y, J = z, K = A, M = B, N = C, O = D, P = E, Q = F, R = G, S = L; g.set(K, -f.length / 2, 0), g.set(M, f.length / 2, 0), g.rotate(N, K, l), g.rotate(O, M, l), i(N, N, k), i(O, O, k), g.copy(K, N), g.copy(M, O), h(I, M, K), g.normalize(J, I), g.rotate90cw(H, J), h(P, c, K); var T = j(P, H); h(s, K, k), h(Q, c, k); var U = o + n; if (Math.abs(T) < U) {
                    g.scale(p, H, T), h(r, c, p), g.scale(q, H, j(H, Q)), g.normalize(q, q), g.scale(q, q, n), i(r, r, q);
                    var V = j(J, r), W = j(J, K), X = j(J, M);
                    if (V > W && X > V) {
                        if (m)
                            return !0;
                        var Y = this.createContactEquation(a, e, b, f);
                        return g.scale(Y.normalA, p, -1), g.normalize(Y.normalA, Y.normalA), g.scale(Y.contactPointA, Y.normalA, o), i(Y.contactPointA, Y.contactPointA, c), h(Y.contactPointA, Y.contactPointA, a.position), h(Y.contactPointB, r, k), i(Y.contactPointB, Y.contactPointB, k), h(Y.contactPointB, Y.contactPointB, e.position), this.contactEquations.push(Y), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(Y)), 1;
                    }
                } S[0] = K, S[1] = M; for (var Z = 0; Z < S.length; Z++) {
                    var $ = S[Z];
                    if (h(P, $, c), g.squaredLength(P) < Math.pow(U, 2)) {
                        if (m)
                            return !0;
                        var Y = this.createContactEquation(a, e, b, f);
                        return g.copy(Y.normalA, P), g.normalize(Y.normalA, Y.normalA), g.scale(Y.contactPointA, Y.normalA, o), i(Y.contactPointA, Y.contactPointA, c), h(Y.contactPointA, Y.contactPointA, a.position), h(Y.contactPointB, $, k), g.scale(R, Y.normalA, -n), i(Y.contactPointB, Y.contactPointB, R), i(Y.contactPointB, Y.contactPointB, k), h(Y.contactPointB, Y.contactPointB, e.position), this.contactEquations.push(Y), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(Y)), 1;
                    }
                } return 0; }, d.prototype[q.CIRCLE | q.CAPSULE] = d.prototype.circleCapsule = function (a, b, c, d, e, f, g, h, i) { return this.circleLine(a, b, c, d, e, f, g, h, i, f.radius); }, d.prototype[q.CIRCLE | q.CONVEX] = d.prototype[q.CIRCLE | q.BOX] = d.prototype.circleConvex = function (a, b, c, d, e, j, k, l, m, n) { for (var n = "number" == typeof n ? n : b.radius, o = t, p = u, q = v, r = w, s = x, y = C, z = D, A = F, B = G, E = H, J = I, K = !1, L = Number.MAX_VALUE, M = j.vertices, N = 0; N !== M.length + 1; N++) {
                    var O = M[N % M.length], P = M[(N + 1) % M.length];
                    if (g.rotate(o, O, l), g.rotate(p, P, l), i(o, o, k), i(p, p, k), h(q, p, o), g.normalize(r, q), g.rotate90cw(s, r), g.scale(B, s, -b.radius), i(B, B, c), f(B, j, k, l)) {
                        g.sub(E, o, B);
                        var Q = Math.abs(g.dot(E, s));
                        L > Q && (g.copy(J, B), L = Q, g.scale(A, s, Q), g.add(A, A, B), K = !0);
                    }
                } if (K) {
                    if (m)
                        return !0;
                    var R = this.createContactEquation(a, e, b, j);
                    return g.sub(R.normalA, J, c), g.normalize(R.normalA, R.normalA), g.scale(R.contactPointA, R.normalA, n), i(R.contactPointA, R.contactPointA, c), h(R.contactPointA, R.contactPointA, a.position), h(R.contactPointB, A, k), i(R.contactPointB, R.contactPointB, k), h(R.contactPointB, R.contactPointB, e.position), this.contactEquations.push(R), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(R)), 1;
                } if (n > 0)
                    for (var N = 0; N < M.length; N++) {
                        var S = M[N];
                        if (g.rotate(z, S, l), i(z, z, k), h(y, z, c), g.squaredLength(y) < Math.pow(n, 2)) {
                            if (m)
                                return !0;
                            var R = this.createContactEquation(a, e, b, j);
                            return g.copy(R.normalA, y), g.normalize(R.normalA, R.normalA), g.scale(R.contactPointA, R.normalA, n), i(R.contactPointA, R.contactPointA, c), h(R.contactPointA, R.contactPointA, a.position), h(R.contactPointB, z, k), i(R.contactPointB, R.contactPointB, k), h(R.contactPointB, R.contactPointB, e.position), this.contactEquations.push(R), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(R)), 1;
                        }
                    } return 0; };
                var T = g.create(), U = g.create(), V = g.create(), W = g.create();
                d.prototype[q.PARTICLE | q.CONVEX] = d.prototype[q.PARTICLE | q.BOX] = d.prototype.particleConvex = function (a, b, c, d, e, k, l, m, n) { var o = t, p = u, q = v, r = w, s = x, A = y, B = z, D = C, E = F, G = J, H = K, I = Number.MAX_VALUE, L = !1, M = k.vertices; if (!f(c, k, l, m))
                    return 0; if (n)
                    return !0; for (var N = 0; N !== M.length + 1; N++) {
                    var O = M[N % M.length], P = M[(N + 1) % M.length];
                    g.rotate(o, O, m), g.rotate(p, P, m), i(o, o, l), i(p, p, l), h(q, p, o), g.normalize(r, q), g.rotate90cw(s, r), h(D, c, o);
                    j(D, s);
                    h(A, o, l), h(B, c, l), g.sub(G, o, c);
                    var Q = Math.abs(g.dot(G, s));
                    I > Q && (I = Q, g.scale(E, s, Q), g.add(E, E, c), g.copy(H, s), L = !0);
                } if (L) {
                    var R = this.createContactEquation(a, e, b, k);
                    return g.scale(R.normalA, H, -1), g.normalize(R.normalA, R.normalA), g.set(R.contactPointA, 0, 0), i(R.contactPointA, R.contactPointA, c), h(R.contactPointA, R.contactPointA, a.position), h(R.contactPointB, E, l), i(R.contactPointB, R.contactPointB, l), h(R.contactPointB, R.contactPointB, e.position), this.contactEquations.push(R), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(R)), 1;
                } return 0; }, d.prototype[q.CIRCLE] = d.prototype.circleCircle = function (a, b, c, d, e, f, j, k, l, m, n) { var o = t, m = m || b.radius, n = n || f.radius; h(o, c, j); var p = m + n; if (g.squaredLength(o) > Math.pow(p, 2))
                    return 0; if (l)
                    return !0; var q = this.createContactEquation(a, e, b, f); return h(q.normalA, j, c), g.normalize(q.normalA, q.normalA), g.scale(q.contactPointA, q.normalA, m), g.scale(q.contactPointB, q.normalA, -n), i(q.contactPointA, q.contactPointA, c), h(q.contactPointA, q.contactPointA, a.position), i(q.contactPointB, q.contactPointB, j), h(q.contactPointB, q.contactPointB, e.position), this.contactEquations.push(q), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(q)), 1; }, d.prototype[q.PLANE | q.CONVEX] = d.prototype[q.PLANE | q.BOX] = d.prototype.planeConvex = function (a, b, c, d, e, f, k, l, m) { var n = t, o = u, p = v, q = 0; g.rotate(o, s, d); for (var r = 0; r !== f.vertices.length; r++) {
                    var w = f.vertices[r];
                    if (g.rotate(n, w, l), i(n, n, k), h(p, n, c), j(p, o) <= 0) {
                        if (m)
                            return !0;
                        q++;
                        var x = this.createContactEquation(a, e, b, f);
                        h(p, n, c), g.copy(x.normalA, o);
                        var y = j(p, x.normalA);
                        g.scale(p, x.normalA, y), h(x.contactPointB, n, e.position), h(x.contactPointA, n, p), h(x.contactPointA, x.contactPointA, a.position), this.contactEquations.push(x), this.enableFrictionReduction || this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(x));
                    }
                } return this.enableFrictionReduction && this.enableFriction && q && this.frictionEquations.push(this.createFrictionFromAverage(q)), q; }, d.prototype[q.PARTICLE | q.PLANE] = d.prototype.particlePlane = function (a, b, c, d, e, f, i, k, l) { var m = t, n = u; k = k || 0, h(m, c, i), g.rotate(n, s, k); var o = j(m, n); if (o > 0)
                    return 0; if (l)
                    return !0; var p = this.createContactEquation(e, a, f, b); return g.copy(p.normalA, n), g.scale(m, p.normalA, o), h(p.contactPointA, c, m), h(p.contactPointA, p.contactPointA, e.position), h(p.contactPointB, c, a.position), this.contactEquations.push(p), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(p)), 1; }, d.prototype[q.CIRCLE | q.PARTICLE] = d.prototype.circleParticle = function (a, b, c, d, e, f, j, k, l) { var m = t; if (h(m, j, c), g.squaredLength(m) > Math.pow(b.radius, 2))
                    return 0; if (l)
                    return !0; var n = this.createContactEquation(a, e, b, f); return g.copy(n.normalA, m), g.normalize(n.normalA, n.normalA), g.scale(n.contactPointA, n.normalA, b.radius), i(n.contactPointA, n.contactPointA, c), h(n.contactPointA, n.contactPointA, a.position), h(n.contactPointB, j, e.position), this.contactEquations.push(n), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(n)), 1; };
                var X = new o({ radius: 1 }), Y = g.create(), Z = g.create();
                g.create();
                d.prototype[q.PLANE | q.CAPSULE] = d.prototype.planeCapsule = function (a, b, c, d, e, f, h, j, k) { var l = Y, m = Z, n = X; g.set(l, -f.length / 2, 0), g.rotate(l, l, j), i(l, l, h), g.set(m, f.length / 2, 0), g.rotate(m, m, j), i(m, m, h), n.radius = f.radius; var o; this.enableFrictionReduction && (o = this.enableFriction, this.enableFriction = !1); var p = this.circlePlane(e, n, l, 0, a, b, c, d, k), q = this.circlePlane(e, n, m, 0, a, b, c, d, k); if (this.enableFrictionReduction && (this.enableFriction = o), k)
                    return p || q; var r = p + q; return this.enableFrictionReduction && r && this.frictionEquations.push(this.createFrictionFromAverage(r)), r; }, d.prototype[q.CIRCLE | q.PLANE] = d.prototype.circlePlane = function (a, b, c, d, e, f, k, l, m) { var n = a, o = b, p = c, q = e, r = k, w = l; w = w || 0; var x = t, y = u, z = v; h(x, p, r), g.rotate(y, s, w); var A = j(y, x); if (A > o.radius)
                    return 0; if (m)
                    return !0; var B = this.createContactEquation(q, n, f, b); return g.copy(B.normalA, y), g.scale(B.contactPointB, B.normalA, -o.radius), i(B.contactPointB, B.contactPointB, p), h(B.contactPointB, B.contactPointB, n.position), g.scale(z, B.normalA, A), h(B.contactPointA, x, z), i(B.contactPointA, B.contactPointA, r), h(B.contactPointA, B.contactPointA, q.position), this.contactEquations.push(B), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(B)), 1; }, d.prototype[q.CONVEX] = d.prototype[q.CONVEX | q.BOX] = d.prototype[q.BOX] = d.prototype.convexConvex = function (a, b, c, e, f, k, l, m, n, o) { var p = t, q = u, r = v, s = w, y = x, C = z, D = A, E = B, F = 0, o = "number" == typeof o ? o : 0, G = d.findSeparatingAxis(b, c, e, k, l, m, p); if (!G)
                    return 0; h(D, l, c), j(p, D) > 0 && g.scale(p, p, -1); var H = d.getClosestEdge(b, e, p, !0), I = d.getClosestEdge(k, m, p); if (-1 === H || -1 === I)
                    return 0; for (var J = 0; 2 > J; J++) {
                    var K = H, L = I, M = b, N = k, O = c, P = l, Q = e, R = m, S = a, T = f;
                    if (0 === J) {
                        var U;
                        U = K, K = L, L = U, U = M, M = N, N = U, U = O, O = P, P = U, U = Q, Q = R, R = U, U = S, S = T, T = U;
                    }
                    for (var V = L; L + 2 > V; V++) {
                        var W = N.vertices[(V + N.vertices.length) % N.vertices.length];
                        g.rotate(q, W, R), i(q, q, P);
                        for (var X = 0, Y = K - 1; K + 2 > Y; Y++) {
                            var Z = M.vertices[(Y + M.vertices.length) % M.vertices.length], $ = M.vertices[(Y + 1 + M.vertices.length) % M.vertices.length];
                            g.rotate(r, Z, Q), g.rotate(s, $, Q), i(r, r, O), i(s, s, O), h(y, s, r), g.rotate90cw(E, y), g.normalize(E, E), h(D, q, r);
                            var _ = j(E, D);
                            (Y === K && o >= _ || Y !== K && 0 >= _) && X++;
                        }
                        if (X >= 3) {
                            if (n)
                                return !0;
                            var aa = this.createContactEquation(S, T, M, N);
                            F++;
                            var Z = M.vertices[K % M.vertices.length], $ = M.vertices[(K + 1) % M.vertices.length];
                            g.rotate(r, Z, Q), g.rotate(s, $, Q), i(r, r, O), i(s, s, O), h(y, s, r), g.rotate90cw(aa.normalA, y), g.normalize(aa.normalA, aa.normalA), h(D, q, r);
                            var _ = j(aa.normalA, D);
                            g.scale(C, aa.normalA, _), h(aa.contactPointA, q, O), h(aa.contactPointA, aa.contactPointA, C), i(aa.contactPointA, aa.contactPointA, O), h(aa.contactPointA, aa.contactPointA, S.position), h(aa.contactPointB, q, P), i(aa.contactPointB, aa.contactPointB, P), h(aa.contactPointB, aa.contactPointB, T.position), this.contactEquations.push(aa), this.enableFrictionReduction || this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(aa));
                        }
                    }
                } return this.enableFrictionReduction && this.enableFriction && F && this.frictionEquations.push(this.createFrictionFromAverage(F)), F; };
                var $ = g.fromValues(0, 0);
                d.projectConvexOntoAxis = function (a, b, c, d, e) { var f, h, i = null, k = null, l = $; g.rotate(l, d, -c); for (var m = 0; m < a.vertices.length; m++)
                    f = a.vertices[m], h = j(f, l), (null === i || h > i) && (i = h), (null === k || k > h) && (k = h); if (k > i) {
                    var n = k;
                    k = i, i = n;
                } var o = j(b, d); g.set(e, k + o, i + o); };
                var _ = g.fromValues(0, 0), aa = g.fromValues(0, 0), ba = g.fromValues(0, 0), ca = g.fromValues(0, 0), da = g.fromValues(0, 0), ea = g.fromValues(0, 0);
                d.findSeparatingAxis = function (a, b, c, e, f, i, j) { var k = null, l = !1, m = !1, n = _, o = aa, p = ba, q = ca, s = da, t = ea; if (a instanceof r && e instanceof r)
                    for (var u = 0; 2 !== u; u++) {
                        var v = a, w = c;
                        1 === u && (v = e, w = i);
                        for (var x = 0; 2 !== x; x++) {
                            0 === x ? g.set(q, 0, 1) : 1 === x && g.set(q, 1, 0), 0 !== w && g.rotate(q, q, w), d.projectConvexOntoAxis(a, b, c, q, s), d.projectConvexOntoAxis(e, f, i, q, t);
                            var y = s, z = t, A = !1;
                            s[0] > t[0] && (z = s, y = t, A = !0);
                            var B = z[0] - y[1];
                            l = 0 >= B, (null === k || B > k) && (g.copy(j, q), k = B, m = l);
                        }
                    }
                else
                    for (var u = 0; 2 !== u; u++) {
                        var v = a, w = c;
                        1 === u && (v = e, w = i);
                        for (var x = 0; x !== v.vertices.length; x++) {
                            g.rotate(o, v.vertices[x], w), g.rotate(p, v.vertices[(x + 1) % v.vertices.length], w), h(n, p, o), g.rotate90cw(q, n), g.normalize(q, q), d.projectConvexOntoAxis(a, b, c, q, s), d.projectConvexOntoAxis(e, f, i, q, t);
                            var y = s, z = t, A = !1;
                            s[0] > t[0] && (z = s, y = t, A = !0);
                            var B = z[0] - y[1];
                            l = 0 >= B, (null === k || B > k) && (g.copy(j, q), k = B, m = l);
                        }
                    } return m; };
                var fa = g.fromValues(0, 0), ga = g.fromValues(0, 0), ha = g.fromValues(0, 0);
                d.getClosestEdge = function (a, b, c, d) { var e = fa, f = ga, i = ha; g.rotate(e, c, -b), d && g.scale(e, e, -1); for (var k = -1, l = a.vertices.length, m = -1, n = 0; n !== l; n++) {
                    h(f, a.vertices[(n + 1) % l], a.vertices[n % l]), g.rotate90cw(i, f), g.normalize(i, i);
                    var o = j(i, e);
                    (-1 === k || o > m) && (k = n % l, m = o);
                } return k; };
                var ia = g.create(), ja = g.create(), ka = g.create(), la = g.create(), ma = g.create(), na = g.create(), oa = g.create();
                d.prototype[q.CIRCLE | q.HEIGHTFIELD] = d.prototype.circleHeightfield = function (a, b, c, d, e, f, j, k, l, m) {
                    var n = f.heights, m = m || b.radius, o = f.elementWidth, p = ja, q = ia, r = ma, s = oa, t = na, u = ka, v = la, w = Math.floor((c[0] - m - j[0]) / o), x = Math.ceil((c[0] + m - j[0]) / o);
                    0 > w && (w = 0), x >= n.length && (x = n.length - 1);
                    for (var y = n[w], z = n[x], A = w; x > A; A++)
                        n[A] < z && (z = n[A]), n[A] > y && (y = n[A]);
                    if (c[1] - m > y)
                        return l ? !1 : 0;
                    for (var B = !1, A = w; x > A; A++) {
                        g.set(u, A * o, n[A]), g.set(v, (A + 1) * o, n[A + 1]), g.add(u, u, j), g.add(v, v, j), g.sub(t, v, u), g.rotate(t, t, Math.PI / 2), g.normalize(t, t), g.scale(q, t, -m), g.add(q, q, c), g.sub(p, q, u);
                        var C = g.dot(p, t);
                        if (q[0] >= u[0] && q[0] < v[0] && 0 >= C) {
                            if (l)
                                return !0;
                            B = !0, g.scale(p, t, -C), g.add(r, q, p), g.copy(s, t);
                            var D = this.createContactEquation(e, a, f, b);
                            g.copy(D.normalA, s), g.scale(D.contactPointB, D.normalA, -m), i(D.contactPointB, D.contactPointB, c), h(D.contactPointB, D.contactPointB, a.position), g.copy(D.contactPointA, r), g.sub(D.contactPointA, D.contactPointA, e.position), this.contactEquations.push(D), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(D));
                        }
                    }
                    if (B = !1, m > 0)
                        for (var A = w; x >= A; A++)
                            if (g.set(u, A * o, n[A]), g.add(u, u, j), g.sub(p, c, u), g.squaredLength(p) < Math.pow(m, 2)) {
                                if (l)
                                    return !0;
                                B = !0;
                                var D = this.createContactEquation(e, a, f, b);
                                g.copy(D.normalA, p), g.normalize(D.normalA, D.normalA), g.scale(D.contactPointB, D.normalA, -m), i(D.contactPointB, D.contactPointB, c), h(D.contactPointB, D.contactPointB, a.position), h(D.contactPointA, u, j), i(D.contactPointA, D.contactPointA, j), h(D.contactPointA, D.contactPointA, e.position), this.contactEquations.push(D), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(D));
                            }
                    return B ? 1 : 0;
                };
                var pa = g.create(), qa = g.create(), ra = g.create(), sa = new p({ vertices: [g.create(), g.create(), g.create(), g.create()] });
                d.prototype[q.BOX | q.HEIGHTFIELD] = d.prototype[q.CONVEX | q.HEIGHTFIELD] = d.prototype.convexHeightfield = function (a, b, c, d, e, f, h, i, j) { var k = f.heights, l = f.elementWidth, m = pa, n = qa, o = ra, p = sa, q = Math.floor((a.aabb.lowerBound[0] - h[0]) / l), r = Math.ceil((a.aabb.upperBound[0] - h[0]) / l); 0 > q && (q = 0), r >= k.length && (r = k.length - 1); for (var s = k[q], t = k[r], u = q; r > u; u++)
                    k[u] < t && (t = k[u]), k[u] > s && (s = k[u]); if (a.aabb.lowerBound[1] > s)
                    return j ? !1 : 0; for (var v = 0, u = q; r > u; u++) {
                    g.set(m, u * l, k[u]), g.set(n, (u + 1) * l, k[u + 1]), g.add(m, m, h), g.add(n, n, h);
                    var w = 100;
                    g.set(o, .5 * (n[0] + m[0]), .5 * (n[1] + m[1] - w)), g.sub(p.vertices[0], n, o), g.sub(p.vertices[1], m, o), g.copy(p.vertices[2], p.vertices[1]), g.copy(p.vertices[3], p.vertices[0]), p.vertices[2][1] -= w, p.vertices[3][1] -= w, v += this.convexConvex(a, b, c, d, e, p, o, 0, j);
                } return v; };
            }, { "../equations/ContactEquation": 21, "../equations/Equation": 22, "../equations/FrictionEquation": 23, "../math/vec2": 30, "../objects/Body": 31, "../shapes/Box": 37, "../shapes/Circle": 39, "../shapes/Convex": 40, "../shapes/Shape": 45, "../utils/ContactEquationPool": 48, "../utils/FrictionEquationPool": 49, "../utils/TupleDictionary": 56, "../utils/Utils": 57 }], 11: [function (a, b, c) { function d(a) { a = a || {}, this.from = a.from ? f.fromValues(a.from[0], a.from[1]) : f.create(), this.to = a.to ? f.fromValues(a.to[0], a.to[1]) : f.create(), this.checkCollisionResponse = void 0 !== a.checkCollisionResponse ? a.checkCollisionResponse : !0, this.skipBackfaces = !!a.skipBackfaces, this.collisionMask = void 0 !== a.collisionMask ? a.collisionMask : -1, this.collisionGroup = void 0 !== a.collisionGroup ? a.collisionGroup : -1, this.mode = void 0 !== a.mode ? a.mode : d.ANY, this.callback = a.callback || function (a) { }, this.direction = f.create(), this.length = 1, this.update(); } function e(a, b, c) { f.sub(h, c, a); var d = f.dot(h, b); return f.scale(i, b, d), f.add(i, i, a), f.squaredDistance(c, i); } b.exports = d; var f = a("../math/vec2"); a("../collision/RaycastResult"), a("../shapes/Shape"), a("../collision/AABB"); d.prototype.constructor = d, d.CLOSEST = 1, d.ANY = 2, d.ALL = 4, d.prototype.update = function () { var a = this.direction; f.sub(a, this.to, this.from), this.length = f.length(a), f.normalize(a, a); }, d.prototype.intersectBodies = function (a, b) { for (var c = 0, d = b.length; !a.shouldStop(this) && d > c; c++) {
                var e = b[c], f = e.getAABB();
                (f.overlapsRay(this) >= 0 || f.containsPoint(this.from)) && this.intersectBody(a, e);
            } }; var g = f.create(); d.prototype.intersectBody = function (a, b) { var c = this.checkCollisionResponse; if (!c || b.collisionResponse)
                for (var d = g, e = 0, h = b.shapes.length; h > e; e++) {
                    var i = b.shapes[e];
                    if ((!c || i.collisionResponse) && 0 !== (this.collisionGroup & i.collisionMask) && 0 !== (i.collisionGroup & this.collisionMask)) {
                        f.rotate(d, i.position, b.angle), f.add(d, d, b.position);
                        var j = i.angle + b.angle;
                        if (this.intersectShape(a, i, j, d, b), a.shouldStop(this))
                            break;
                    }
                } }, d.prototype.intersectShape = function (a, b, c, d, f) { var g = this.from, h = e(g, this.direction, d); h > b.boundingRadius * b.boundingRadius || (this._currentBody = f, this._currentShape = b, b.raycast(a, this, d, c), this._currentBody = this._currentShape = null); }, d.prototype.getAABB = function (a) { var b = this.to, c = this.from; f.set(a.lowerBound, Math.min(b[0], c[0]), Math.min(b[1], c[1])), f.set(a.upperBound, Math.max(b[0], c[0]), Math.max(b[1], c[1])); }; f.create(); d.prototype.reportIntersection = function (a, b, c, e) { var g = (this.from, this.to, this._currentShape), h = this._currentBody; if (!(this.skipBackfaces && f.dot(c, this.direction) > 0))
                switch (this.mode) {
                    case d.ALL:
                        a.set(c, g, h, b, e), this.callback(a);
                        break;
                    case d.CLOSEST:
                        (b < a.fraction || !a.hasHit()) && a.set(c, g, h, b, e);
                        break;
                    case d.ANY: a.set(c, g, h, b, e);
                } }; var h = f.create(), i = f.create(); }, { "../collision/AABB": 7, "../collision/RaycastResult": 12, "../math/vec2": 30, "../shapes/Shape": 45 }], 12: [function (a, b, c) { function d() { this.normal = e.create(), this.shape = null, this.body = null, this.faceIndex = -1, this.fraction = -1, this.isStopped = !1; } var e = a("../math/vec2"), f = a("../collision/Ray"); b.exports = d, d.prototype.reset = function () { e.set(this.normal, 0, 0), this.shape = null, this.body = null, this.faceIndex = -1, this.fraction = -1, this.isStopped = !1; }, d.prototype.getHitDistance = function (a) { return e.distance(a.from, a.to) * this.fraction; }, d.prototype.hasHit = function () { return -1 !== this.fraction; }, d.prototype.getHitPoint = function (a, b) { e.lerp(a, b.from, b.to, this.fraction); }, d.prototype.stop = function () { this.isStopped = !0; }, d.prototype.shouldStop = function (a) { return this.isStopped || -1 !== this.fraction && a.mode === f.ANY; }, d.prototype.set = function (a, b, c, d, f) { e.copy(this.normal, a), this.shape = b, this.body = c, this.fraction = d, this.faceIndex = f; }; }, { "../collision/Ray": 11, "../math/vec2": 30 }], 13: [function (a, b, c) { function d() { f.call(this, f.SAP), this.axisList = [], this.axisIndex = 0; var a = this; this._addBodyHandler = function (b) { a.axisList.push(b.body); }, this._removeBodyHandler = function (b) { var c = a.axisList.indexOf(b.body); -1 !== c && a.axisList.splice(c, 1); }; } var e = a("../utils/Utils"), f = a("../collision/Broadphase"); b.exports = d, d.prototype = new f, d.prototype.constructor = d, d.prototype.setWorld = function (a) { this.axisList.length = 0, e.appendArray(this.axisList, a.bodies), a.off("addBody", this._addBodyHandler).off("removeBody", this._removeBodyHandler), a.on("addBody", this._addBodyHandler).on("removeBody", this._removeBodyHandler), this.world = a; }, d.sortAxisList = function (a, b) { b = 0 | b; for (var c = 1, d = a.length; d > c; c++) {
                for (var e = a[c], f = c - 1; f >= 0 && !(a[f].aabb.lowerBound[b] <= e.aabb.lowerBound[b]); f--)
                    a[f + 1] = a[f];
                a[f + 1] = e;
            } return a; }, d.prototype.sortList = function () { var a = this.axisList, b = this.axisIndex; d.sortAxisList(a, b); }, d.prototype.getCollisionPairs = function (a) { var b = this.axisList, c = this.result, d = this.axisIndex; c.length = 0; for (var e = b.length; e--;) {
                var g = b[e];
                g.aabbNeedsUpdate && g.updateAABB();
            } this.sortList(); for (var h = 0, i = 0 | b.length; h !== i; h++)
                for (var j = b[h], k = h + 1; i > k; k++) {
                    var l = b[k], m = l.aabb.lowerBound[d] <= j.aabb.upperBound[d];
                    if (!m)
                        break;
                    f.canCollide(j, l) && this.boundingVolumeCheck(j, l) && c.push(j, l);
                } return c; }, d.prototype.aabbQuery = function (a, b, c) { c = c || [], this.sortList(); var d = this.axisIndex, e = "x"; 1 === d && (e = "y"), 2 === d && (e = "z"); for (var f = this.axisList, g = (b.lowerBound[e], b.upperBound[e], 0); g < f.length; g++) {
                var h = f[g];
                h.aabbNeedsUpdate && h.updateAABB(), h.aabb.overlaps(b) && c.push(h);
            } return c; }; }, { "../collision/Broadphase": 8, "../utils/Utils": 57 }], 14: [function (a, b, c) { function d(a, b, c, d) { this.type = c, d = e.defaults(d, { collideConnected: !0, wakeUpBodies: !0 }), this.equations = [], this.bodyA = a, this.bodyB = b, this.collideConnected = d.collideConnected, d.wakeUpBodies && (a && a.wakeUp(), b && b.wakeUp()); } b.exports = d; var e = a("../utils/Utils"); d.prototype.update = function () { throw new Error("method update() not implmemented in this Constraint subclass!"); }, d.DISTANCE = 1, d.GEAR = 2, d.LOCK = 3, d.PRISMATIC = 4, d.REVOLUTE = 5, d.prototype.setStiffness = function (a) { for (var b = this.equations, c = 0; c !== b.length; c++) {
                var d = b[c];
                d.stiffness = a, d.needsUpdate = !0;
            } }, d.prototype.setRelaxation = function (a) { for (var b = this.equations, c = 0; c !== b.length; c++) {
                var d = b[c];
                d.relaxation = a, d.needsUpdate = !0;
            } }; }, { "../utils/Utils": 57 }], 15: [function (a, b, c) { function d(a, b, c) { c = h.defaults(c, { localAnchorA: [0, 0], localAnchorB: [0, 0] }), e.call(this, a, b, e.DISTANCE, c), this.localAnchorA = g.fromValues(c.localAnchorA[0], c.localAnchorA[1]), this.localAnchorB = g.fromValues(c.localAnchorB[0], c.localAnchorB[1]); var d = this.localAnchorA, i = this.localAnchorB; if (this.distance = 0, "number" == typeof c.distance)
                this.distance = c.distance;
            else {
                var j = g.create(), k = g.create(), l = g.create();
                g.rotate(j, d, a.angle), g.rotate(k, i, b.angle), g.add(l, b.position, k), g.sub(l, l, j), g.sub(l, l, a.position), this.distance = g.length(l);
            } var m; m = "undefined" == typeof c.maxForce ? Number.MAX_VALUE : c.maxForce; var n = new f(a, b, -m, m); this.equations = [n], this.maxForce = m; var l = g.create(), o = g.create(), p = g.create(), q = this; n.computeGq = function () { var a = this.bodyA, b = this.bodyB, c = a.position, e = b.position; return g.rotate(o, d, a.angle), g.rotate(p, i, b.angle), g.add(l, e, p), g.sub(l, l, o), g.sub(l, l, c), g.length(l) - q.distance; }, this.setMaxForce(m), this.upperLimitEnabled = !1, this.upperLimit = 1, this.lowerLimitEnabled = !1, this.lowerLimit = 0, this.position = 0; } var e = a("./Constraint"), f = a("../equations/Equation"), g = a("../math/vec2"), h = a("../utils/Utils"); b.exports = d, d.prototype = new e, d.prototype.constructor = d; var i = g.create(), j = g.create(), k = g.create(); d.prototype.update = function () { var a = this.equations[0], b = this.bodyA, c = this.bodyB, d = (this.distance, b.position), e = c.position, f = this.equations[0], h = a.G; g.rotate(j, this.localAnchorA, b.angle), g.rotate(k, this.localAnchorB, c.angle), g.add(i, e, k), g.sub(i, i, j), g.sub(i, i, d), this.position = g.length(i); var l = !1; if (this.upperLimitEnabled && this.position > this.upperLimit && (f.maxForce = 0, f.minForce = -this.maxForce, this.distance = this.upperLimit, l = !0), this.lowerLimitEnabled && this.position < this.lowerLimit && (f.maxForce = this.maxForce, f.minForce = 0, this.distance = this.lowerLimit, l = !0), (this.lowerLimitEnabled || this.upperLimitEnabled) && !l)
                return void (f.enabled = !1); f.enabled = !0, g.normalize(i, i); var m = g.crossLength(j, i), n = g.crossLength(k, i); h[0] = -i[0], h[1] = -i[1], h[2] = -m, h[3] = i[0], h[4] = i[1], h[5] = n; }, d.prototype.setMaxForce = function (a) { var b = this.equations[0]; b.minForce = -a, b.maxForce = a; }, d.prototype.getMaxForce = function () { var a = this.equations[0]; return a.maxForce; }; }, { "../equations/Equation": 22, "../math/vec2": 30, "../utils/Utils": 57, "./Constraint": 14 }], 16: [function (a, b, c) { function d(a, b, c) { c = c || {}, e.call(this, a, b, e.GEAR, c), this.ratio = void 0 !== c.ratio ? c.ratio : 1, this.angle = void 0 !== c.angle ? c.angle : b.angle - this.ratio * a.angle, c.angle = this.angle, c.ratio = this.ratio, this.equations = [new f(a, b, c)], void 0 !== c.maxTorque && this.setMaxTorque(c.maxTorque); } var e = a("./Constraint"), f = (a("../equations/Equation"), a("../equations/AngleLockEquation")); a("../math/vec2"); b.exports = d, d.prototype = new e, d.prototype.constructor = d, d.prototype.update = function () { var a = this.equations[0]; a.ratio !== this.ratio && a.setRatio(this.ratio), a.angle = this.angle; }, d.prototype.setMaxTorque = function (a) { this.equations[0].setMaxTorque(a); }, d.prototype.getMaxTorque = function (a) { return this.equations[0].maxForce; }; }, { "../equations/AngleLockEquation": 20, "../equations/Equation": 22, "../math/vec2": 30, "./Constraint": 14 }], 17: [function (a, b, c) { function d(a, b, c) { c = c || {}, e.call(this, a, b, e.LOCK, c); var d = "undefined" == typeof c.maxForce ? Number.MAX_VALUE : c.maxForce, h = (c.localAngleB || 0, new g(a, b, -d, d)), i = new g(a, b, -d, d), j = new g(a, b, -d, d), k = f.create(), l = f.create(), m = this; h.computeGq = function () { return f.rotate(k, m.localOffsetB, a.angle), f.sub(l, b.position, a.position), f.sub(l, l, k), l[0]; }, i.computeGq = function () { return f.rotate(k, m.localOffsetB, a.angle), f.sub(l, b.position, a.position), f.sub(l, l, k), l[1]; }; var n = f.create(), o = f.create(); j.computeGq = function () { return f.rotate(n, m.localOffsetB, b.angle - m.localAngleB), f.scale(n, n, -1), f.sub(l, a.position, b.position), f.add(l, l, n), f.rotate(o, n, -Math.PI / 2), f.normalize(o, o), f.dot(l, o); }, this.localOffsetB = f.create(), c.localOffsetB ? f.copy(this.localOffsetB, c.localOffsetB) : (f.sub(this.localOffsetB, b.position, a.position), f.rotate(this.localOffsetB, this.localOffsetB, -a.angle)), this.localAngleB = 0, "number" == typeof c.localAngleB ? this.localAngleB = c.localAngleB : this.localAngleB = b.angle - a.angle, this.equations.push(h, i, j), this.setMaxForce(d); } var e = a("./Constraint"), f = a("../math/vec2"), g = a("../equations/Equation"); b.exports = d, d.prototype = new e, d.prototype.constructor = d, d.prototype.setMaxForce = function (a) { for (var b = this.equations, c = 0; c < this.equations.length; c++)
                b[c].maxForce = a, b[c].minForce = -a; }, d.prototype.getMaxForce = function () { return this.equations[0].maxForce; }; var h = f.create(), i = f.create(), j = f.create(), k = f.fromValues(1, 0), l = f.fromValues(0, 1); d.prototype.update = function () { var a = this.equations[0], b = this.equations[1], c = this.equations[2], d = this.bodyA, e = this.bodyB; f.rotate(h, this.localOffsetB, d.angle), f.rotate(i, this.localOffsetB, e.angle - this.localAngleB), f.scale(i, i, -1), f.rotate(j, i, Math.PI / 2), f.normalize(j, j), a.G[0] = -1, a.G[1] = 0, a.G[2] = -f.crossLength(h, k), a.G[3] = 1, b.G[0] = 0, b.G[1] = -1, b.G[2] = -f.crossLength(h, l), b.G[4] = 1, c.G[0] = -j[0], c.G[1] = -j[1], c.G[3] = j[0], c.G[4] = j[1], c.G[5] = f.crossLength(i, j); }; }, { "../equations/Equation": 22, "../math/vec2": 30, "./Constraint": 14 }], 18: [function (a, b, c) { function d(a, b, c) { c = c || {}, e.call(this, a, b, e.PRISMATIC, c); var d = h.fromValues(0, 0), j = h.fromValues(1, 0), k = h.fromValues(0, 0); c.localAnchorA && h.copy(d, c.localAnchorA), c.localAxisA && h.copy(j, c.localAxisA), c.localAnchorB && h.copy(k, c.localAnchorB), this.localAnchorA = d, this.localAnchorB = k, this.localAxisA = j; var l = this.maxForce = "undefined" != typeof c.maxForce ? c.maxForce : Number.MAX_VALUE, m = new g(a, b, -l, l), n = new h.create, o = new h.create, p = new h.create, q = new h.create; if (m.computeGq = function () { return h.dot(p, q); }, m.updateJacobian = function () { var c = this.G, e = a.position, f = b.position; h.rotate(n, d, a.angle), h.rotate(o, k, b.angle), h.add(p, f, o), h.sub(p, p, e), h.sub(p, p, n), h.rotate(q, j, a.angle + Math.PI / 2), c[0] = -q[0], c[1] = -q[1], c[2] = -h.crossLength(n, q) + h.crossLength(q, p), c[3] = q[0], c[4] = q[1], c[5] = h.crossLength(o, q); }, this.equations.push(m), !c.disableRotationalLock) {
                var r = new i(a, b, -l, l);
                this.equations.push(r);
            } this.position = 0, this.velocity = 0, this.lowerLimitEnabled = "undefined" != typeof c.lowerLimit ? !0 : !1, this.upperLimitEnabled = "undefined" != typeof c.upperLimit ? !0 : !1, this.lowerLimit = "undefined" != typeof c.lowerLimit ? c.lowerLimit : 0, this.upperLimit = "undefined" != typeof c.upperLimit ? c.upperLimit : 1, this.upperLimitEquation = new f(a, b), this.lowerLimitEquation = new f(a, b), this.upperLimitEquation.minForce = this.lowerLimitEquation.minForce = 0, this.upperLimitEquation.maxForce = this.lowerLimitEquation.maxForce = l, this.motorEquation = new g(a, b), this.motorEnabled = !1, this.motorSpeed = 0; var s = this, t = this.motorEquation; t.computeGW; t.computeGq = function () { return 0; }, t.computeGW = function () { var a = this.G, b = this.bodyA, c = this.bodyB, d = b.velocity, e = c.velocity, f = b.angularVelocity, g = c.angularVelocity; return this.gmult(a, d, f, e, g) + s.motorSpeed; }; } var e = a("./Constraint"), f = a("../equations/ContactEquation"), g = a("../equations/Equation"), h = a("../math/vec2"), i = a("../equations/RotationalLockEquation"); b.exports = d, d.prototype = new e, d.prototype.constructor = d; var j = h.create(), k = h.create(), l = h.create(), m = h.create(), n = h.create(), o = h.create(); d.prototype.update = function () { var a = this.equations, b = a[0], c = this.upperLimit, d = this.lowerLimit, e = this.upperLimitEquation, f = this.lowerLimitEquation, g = this.bodyA, i = this.bodyB, p = this.localAxisA, q = this.localAnchorA, r = this.localAnchorB; b.updateJacobian(), h.rotate(j, p, g.angle), h.rotate(m, q, g.angle), h.add(k, m, g.position), h.rotate(n, r, i.angle), h.add(l, n, i.position); var s = this.position = h.dot(l, j) - h.dot(k, j); if (this.motorEnabled) {
                var t = this.motorEquation.G;
                t[0] = j[0], t[1] = j[1], t[2] = h.crossLength(j, n), t[3] = -j[0], t[4] = -j[1], t[5] = -h.crossLength(j, m);
            } if (this.upperLimitEnabled && s > c)
                h.scale(e.normalA, j, -1), h.sub(e.contactPointA, k, g.position), h.sub(e.contactPointB, l, i.position), h.scale(o, j, c), h.add(e.contactPointA, e.contactPointA, o), -1 === a.indexOf(e) && a.push(e);
            else {
                var u = a.indexOf(e);
                -1 !== u && a.splice(u, 1);
            } if (this.lowerLimitEnabled && d > s)
                h.scale(f.normalA, j, 1), h.sub(f.contactPointA, k, g.position), h.sub(f.contactPointB, l, i.position), h.scale(o, j, d), h.sub(f.contactPointB, f.contactPointB, o), -1 === a.indexOf(f) && a.push(f);
            else {
                var u = a.indexOf(f);
                -1 !== u && a.splice(u, 1);
            } }, d.prototype.enableMotor = function () { this.motorEnabled || (this.equations.push(this.motorEquation), this.motorEnabled = !0); }, d.prototype.disableMotor = function () { if (this.motorEnabled) {
                var a = this.equations.indexOf(this.motorEquation);
                this.equations.splice(a, 1), this.motorEnabled = !1;
            } }, d.prototype.setLimits = function (a, b) { "number" == typeof a ? (this.lowerLimit = a, this.lowerLimitEnabled = !0) : (this.lowerLimit = a, this.lowerLimitEnabled = !1), "number" == typeof b ? (this.upperLimit = b, this.upperLimitEnabled = !0) : (this.upperLimit = b, this.upperLimitEnabled = !1); }; }, { "../equations/ContactEquation": 21, "../equations/Equation": 22, "../equations/RotationalLockEquation": 24, "../math/vec2": 30, "./Constraint": 14 }], 19: [function (a, b, c) { function d(a, b, c) { c = c || {}, e.call(this, a, b, e.REVOLUTE, c); var d = this.maxForce = "undefined" != typeof c.maxForce ? c.maxForce : Number.MAX_VALUE; this.pivotA = i.create(), this.pivotB = i.create(), c.worldPivot ? (i.sub(this.pivotA, c.worldPivot, a.position), i.sub(this.pivotB, c.worldPivot, b.position), i.rotate(this.pivotA, this.pivotA, -a.angle), i.rotate(this.pivotB, this.pivotB, -b.angle)) : (i.copy(this.pivotA, c.localPivotA), i.copy(this.pivotB, c.localPivotB)); var o = this.equations = [new f(a, b, -d, d), new f(a, b, -d, d)], p = o[0], q = o[1], r = this; p.computeGq = function () { return i.rotate(j, r.pivotA, a.angle), i.rotate(k, r.pivotB, b.angle), i.add(n, b.position, k), i.sub(n, n, a.position), i.sub(n, n, j), i.dot(n, l); }, q.computeGq = function () { return i.rotate(j, r.pivotA, a.angle), i.rotate(k, r.pivotB, b.angle), i.add(n, b.position, k), i.sub(n, n, a.position), i.sub(n, n, j), i.dot(n, m); }, q.minForce = p.minForce = -d, q.maxForce = p.maxForce = d, this.motorEquation = new g(a, b), this.motorEnabled = !1, this.angle = 0, this.lowerLimitEnabled = !1, this.upperLimitEnabled = !1, this.lowerLimit = 0, this.upperLimit = 0, this.upperLimitEquation = new h(a, b), this.lowerLimitEquation = new h(a, b), this.upperLimitEquation.minForce = 0, this.lowerLimitEquation.maxForce = 0; } var e = a("./Constraint"), f = a("../equations/Equation"), g = a("../equations/RotationalVelocityEquation"), h = a("../equations/RotationalLockEquation"), i = a("../math/vec2"); b.exports = d; var j = i.create(), k = i.create(), l = i.fromValues(1, 0), m = i.fromValues(0, 1), n = i.create(); d.prototype = new e, d.prototype.constructor = d, d.prototype.setLimits = function (a, b) { "number" == typeof a ? (this.lowerLimit = a, this.lowerLimitEnabled = !0) : (this.lowerLimit = a, this.lowerLimitEnabled = !1), "number" == typeof b ? (this.upperLimit = b, this.upperLimitEnabled = !0) : (this.upperLimit = b, this.upperLimitEnabled = !1); }, d.prototype.update = function () { var a = this.bodyA, b = this.bodyB, c = this.pivotA, d = this.pivotB, e = this.equations, f = (e[0], e[1], e[0]), g = e[1], h = this.upperLimit, n = this.lowerLimit, o = this.upperLimitEquation, p = this.lowerLimitEquation, q = this.angle = b.angle - a.angle; if (this.upperLimitEnabled && q > h)
                o.angle = h, -1 === e.indexOf(o) && e.push(o);
            else {
                var r = e.indexOf(o);
                -1 !== r && e.splice(r, 1);
            } if (this.lowerLimitEnabled && n > q)
                p.angle = n, -1 === e.indexOf(p) && e.push(p);
            else {
                var r = e.indexOf(p);
                -1 !== r && e.splice(r, 1);
            } i.rotate(j, c, a.angle), i.rotate(k, d, b.angle), f.G[0] = -1, f.G[1] = 0, f.G[2] = -i.crossLength(j, l), f.G[3] = 1, f.G[4] = 0, f.G[5] = i.crossLength(k, l), g.G[0] = 0, g.G[1] = -1, g.G[2] = -i.crossLength(j, m), g.G[3] = 0, g.G[4] = 1, g.G[5] = i.crossLength(k, m); }, d.prototype.enableMotor = function () { this.motorEnabled || (this.equations.push(this.motorEquation), this.motorEnabled = !0); }, d.prototype.disableMotor = function () { if (this.motorEnabled) {
                var a = this.equations.indexOf(this.motorEquation);
                this.equations.splice(a, 1), this.motorEnabled = !1;
            } }, d.prototype.motorIsEnabled = function () { return !!this.motorEnabled; }, d.prototype.setMotorSpeed = function (a) { if (this.motorEnabled) {
                var b = this.equations.indexOf(this.motorEquation);
                this.equations[b].relativeVelocity = a;
            } }, d.prototype.getMotorSpeed = function () { return this.motorEnabled ? this.motorEquation.relativeVelocity : !1; }; }, { "../equations/Equation": 22, "../equations/RotationalLockEquation": 24, "../equations/RotationalVelocityEquation": 25, "../math/vec2": 30, "./Constraint": 14 }], 20: [function (a, b, c) { function d(a, b, c) { c = c || {}, e.call(this, a, b, -Number.MAX_VALUE, Number.MAX_VALUE), this.angle = c.angle || 0, this.ratio = "number" == typeof c.ratio ? c.ratio : 1, this.setRatio(this.ratio); } var e = a("./Equation"); a("../math/vec2"); b.exports = d, d.prototype = new e, d.prototype.constructor = d, d.prototype.computeGq = function () { return this.ratio * this.bodyA.angle - this.bodyB.angle + this.angle; }, d.prototype.setRatio = function (a) { var b = this.G; b[2] = a, b[5] = -1, this.ratio = a; }, d.prototype.setMaxTorque = function (a) { this.maxForce = a, this.minForce = -a; }; }, { "../math/vec2": 30, "./Equation": 22 }], 21: [function (a, b, c) { function d(a, b) { e.call(this, a, b, 0, Number.MAX_VALUE), this.contactPointA = f.create(), this.penetrationVec = f.create(), this.contactPointB = f.create(), this.normalA = f.create(), this.restitution = 0, this.firstImpact = !1, this.shapeA = null, this.shapeB = null; } var e = a("./Equation"), f = a("../math/vec2"); b.exports = d, d.prototype = new e, d.prototype.constructor = d, d.prototype.computeB = function (a, b, c) { var d = this.bodyA, e = this.bodyB, g = this.contactPointA, h = this.contactPointB, i = d.position, j = e.position, k = this.penetrationVec, l = this.normalA, m = this.G, n = f.crossLength(g, l), o = f.crossLength(h, l); m[0] = -l[0], m[1] = -l[1], m[2] = -n, m[3] = l[0], m[4] = l[1], m[5] = o, f.add(k, j, h), f.sub(k, k, i), f.sub(k, k, g); var p, q; this.firstImpact && 0 !== this.restitution ? (q = 0, p = 1 / b * (1 + this.restitution) * this.computeGW()) : (q = f.dot(l, k) + this.offset, p = this.computeGW()); var r = this.computeGiMf(), s = -q * a - p * b - c * r; return s; }; }, { "../math/vec2": 30, "./Equation": 22 }], 22: [function (a, b, c) { function d(a, b, c, e) { this.minForce = "undefined" == typeof c ? -Number.MAX_VALUE : c, this.maxForce = "undefined" == typeof e ? Number.MAX_VALUE : e, this.bodyA = a, this.bodyB = b, this.stiffness = d.DEFAULT_STIFFNESS, this.relaxation = d.DEFAULT_RELAXATION, this.G = new f.ARRAY_TYPE(6); for (var g = 0; 6 > g; g++)
                this.G[g] = 0; this.offset = 0, this.a = 0, this.b = 0, this.epsilon = 0, this.timeStep = 1 / 60, this.needsUpdate = !0, this.multiplier = 0, this.relativeVelocity = 0, this.enabled = !0; } b.exports = d; var e = a("../math/vec2"), f = a("../utils/Utils"); a("../objects/Body"); d.prototype.constructor = d, d.DEFAULT_STIFFNESS = 1e6, d.DEFAULT_RELAXATION = 4, d.prototype.update = function () { var a = this.stiffness, b = this.relaxation, c = this.timeStep; this.a = 4 / (c * (1 + 4 * b)), this.b = 4 * b / (1 + 4 * b), this.epsilon = 4 / (c * c * a * (1 + 4 * b)), this.needsUpdate = !1; }, d.prototype.gmult = function (a, b, c, d, e) { return a[0] * b[0] + a[1] * b[1] + a[2] * c + a[3] * d[0] + a[4] * d[1] + a[5] * e; }, d.prototype.computeB = function (a, b, c) { var d = this.computeGW(), e = this.computeGq(), f = this.computeGiMf(); return -e * a - d * b - f * c; }; var g = e.create(), h = e.create(); d.prototype.computeGq = function () { var a = this.G, b = this.bodyA, c = this.bodyB, d = (b.position, c.position, b.angle), e = c.angle; return this.gmult(a, g, d, h, e) + this.offset; }, d.prototype.computeGW = function () { var a = this.G, b = this.bodyA, c = this.bodyB, d = b.velocity, e = c.velocity, f = b.angularVelocity, g = c.angularVelocity; return this.gmult(a, d, f, e, g) + this.relativeVelocity; }, d.prototype.computeGWlambda = function () { var a = this.G, b = this.bodyA, c = this.bodyB, d = b.vlambda, e = c.vlambda, f = b.wlambda, g = c.wlambda; return this.gmult(a, d, f, e, g); }; var i = e.create(), j = e.create(); d.prototype.computeGiMf = function () { var a = this.bodyA, b = this.bodyB, c = a.force, d = a.angularForce, f = b.force, g = b.angularForce, h = a.invMassSolve, k = b.invMassSolve, l = a.invInertiaSolve, m = b.invInertiaSolve, n = this.G; return e.scale(i, c, h), e.multiply(i, a.massMultiplier, i), e.scale(j, f, k), e.multiply(j, b.massMultiplier, j), this.gmult(n, i, d * l, j, g * m); }, d.prototype.computeGiMGt = function () { var a = this.bodyA, b = this.bodyB, c = a.invMassSolve, d = b.invMassSolve, e = a.invInertiaSolve, f = b.invInertiaSolve, g = this.G; return g[0] * g[0] * c * a.massMultiplier[0] + g[1] * g[1] * c * a.massMultiplier[1] + g[2] * g[2] * e + g[3] * g[3] * d * b.massMultiplier[0] + g[4] * g[4] * d * b.massMultiplier[1] + g[5] * g[5] * f; }; var k = e.create(), l = e.create(), m = e.create(); e.create(), e.create(), e.create(); d.prototype.addToWlambda = function (a) { var b = this.bodyA, c = this.bodyB, d = k, f = l, g = m, h = b.invMassSolve, i = c.invMassSolve, j = b.invInertiaSolve, n = c.invInertiaSolve, o = this.G; f[0] = o[0], f[1] = o[1], g[0] = o[3], g[1] = o[4], e.scale(d, f, h * a), e.multiply(d, d, b.massMultiplier), e.add(b.vlambda, b.vlambda, d), b.wlambda += j * o[2] * a, e.scale(d, g, i * a), e.multiply(d, d, c.massMultiplier), e.add(c.vlambda, c.vlambda, d), c.wlambda += n * o[5] * a; }, d.prototype.computeInvC = function (a) { return 1 / (this.computeGiMGt() + a); }; }, { "../math/vec2": 30, "../objects/Body": 31, "../utils/Utils": 57 }], 23: [function (a, b, c) { function d(a, b, c) { f.call(this, a, b, -c, c), this.contactPointA = e.create(), this.contactPointB = e.create(), this.t = e.create(), this.contactEquations = [], this.shapeA = null, this.shapeB = null, this.frictionCoefficient = .3; } var e = a("../math/vec2"), f = a("./Equation"); a("../utils/Utils"); b.exports = d, d.prototype = new f, d.prototype.constructor = d, d.prototype.setSlipForce = function (a) { this.maxForce = a, this.minForce = -a; }, d.prototype.getSlipForce = function () { return this.maxForce; }, d.prototype.computeB = function (a, b, c) { var d = (this.bodyA, this.bodyB, this.contactPointA), f = this.contactPointB, g = this.t, h = this.G; h[0] = -g[0], h[1] = -g[1], h[2] = -e.crossLength(d, g), h[3] = g[0], h[4] = g[1], h[5] = e.crossLength(f, g); var i = this.computeGW(), j = this.computeGiMf(), k = -i * b - c * j; return k; }; }, { "../math/vec2": 30, "../utils/Utils": 57, "./Equation": 22 }], 24: [function (a, b, c) { function d(a, b, c) { c = c || {}, e.call(this, a, b, -Number.MAX_VALUE, Number.MAX_VALUE), this.angle = c.angle || 0; var d = this.G; d[2] = 1, d[5] = -1; } var e = a("./Equation"), f = a("../math/vec2"); b.exports = d, d.prototype = new e, d.prototype.constructor = d; var g = f.create(), h = f.create(), i = f.fromValues(1, 0), j = f.fromValues(0, 1); d.prototype.computeGq = function () { return f.rotate(g, i, this.bodyA.angle + this.angle), f.rotate(h, j, this.bodyB.angle), f.dot(g, h); }; }, { "../math/vec2": 30, "./Equation": 22 }], 25: [function (a, b, c) { function d(a, b) { e.call(this, a, b, -Number.MAX_VALUE, Number.MAX_VALUE), this.relativeVelocity = 1, this.ratio = 1; } var e = a("./Equation"); a("../math/vec2"); b.exports = d, d.prototype = new e, d.prototype.constructor = d, d.prototype.computeB = function (a, b, c) { var d = this.G; d[2] = -1, d[5] = this.ratio; var e = this.computeGiMf(), f = this.computeGW(), g = -f * b - c * e; return g; }; }, { "../math/vec2": 30, "./Equation": 22 }], 26: [function (a, b, c) { var d = function () { }; b.exports = d, d.prototype = { constructor: d, on: function (a, b, c) { b.context = c || this, void 0 === this._listeners && (this._listeners = {}); var d = this._listeners; return void 0 === d[a] && (d[a] = []), -1 === d[a].indexOf(b) && d[a].push(b), this; }, has: function (a, b) { if (void 0 === this._listeners)
                    return !1; var c = this._listeners; if (b) {
                    if (void 0 !== c[a] && -1 !== c[a].indexOf(b))
                        return !0;
                }
                else if (void 0 !== c[a])
                    return !0; return !1; }, off: function (a, b) { if (void 0 === this._listeners)
                    return this; var c = this._listeners, d = c[a].indexOf(b); return -1 !== d && c[a].splice(d, 1), this; }, emit: function (a) { if (void 0 === this._listeners)
                    return this; var b = this._listeners, c = b[a.type]; if (void 0 !== c) {
                    a.target = this;
                    for (var d = 0, e = c.length; e > d; d++) {
                        var f = c[d];
                        f.call(f.context, a);
                    }
                } return this; } }; }, {}], 27: [function (a, b, c) { function d(a, b, c) { if (c = c || {}, !(a instanceof e && b instanceof e))
                throw new Error("First two arguments must be Material instances."); this.id = d.idCounter++, this.materialA = a, this.materialB = b, this.friction = "undefined" != typeof c.friction ? Number(c.friction) : .3, this.restitution = "undefined" != typeof c.restitution ? Number(c.restitution) : 0, this.stiffness = "undefined" != typeof c.stiffness ? Number(c.stiffness) : f.DEFAULT_STIFFNESS, this.relaxation = "undefined" != typeof c.relaxation ? Number(c.relaxation) : f.DEFAULT_RELAXATION, this.frictionStiffness = "undefined" != typeof c.frictionStiffness ? Number(c.frictionStiffness) : f.DEFAULT_STIFFNESS, this.frictionRelaxation = "undefined" != typeof c.frictionRelaxation ? Number(c.frictionRelaxation) : f.DEFAULT_RELAXATION, this.surfaceVelocity = "undefined" != typeof c.surfaceVelocity ? Number(c.surfaceVelocity) : 0, this.contactSkinSize = .005; } var e = a("./Material"), f = a("../equations/Equation"); b.exports = d, d.idCounter = 0; }, { "../equations/Equation": 22, "./Material": 28 }], 28: [function (a, b, c) { function d(a) { this.id = a || d.idCounter++; } b.exports = d, d.idCounter = 0; }, {}], 29: [function (a, b, c) { var d = {}; d.GetArea = function (a) { if (a.length < 6)
                return 0; for (var b = a.length - 2, c = 0, d = 0; b > d; d += 2)
                c += (a[d + 2] - a[d]) * (a[d + 1] + a[d + 3]); return c += (a[0] - a[b]) * (a[b + 1] + a[1]), .5 * -c; }, d.Triangulate = function (a) { var b = a.length >> 1; if (3 > b)
                return []; for (var c = [], e = [], f = 0; b > f; f++)
                e.push(f); for (var f = 0, g = b; g > 3;) {
                var h = e[(f + 0) % g], i = e[(f + 1) % g], j = e[(f + 2) % g], k = a[2 * h], l = a[2 * h + 1], m = a[2 * i], n = a[2 * i + 1], o = a[2 * j], p = a[2 * j + 1], q = !1;
                if (d._convex(k, l, m, n, o, p)) {
                    q = !0;
                    for (var r = 0; g > r; r++) {
                        var s = e[r];
                        if (s != h && s != i && s != j && d._PointInTriangle(a[2 * s], a[2 * s + 1], k, l, m, n, o, p)) {
                            q = !1;
                            break;
                        }
                    }
                }
                if (q)
                    c.push(h, i, j), e.splice((f + 1) % g, 1), g--, f = 0;
                else if (f++ > 3 * g)
                    break;
            } return c.push(e[0], e[1], e[2]), c; }, d._PointInTriangle = function (a, b, c, d, e, f, g, h) { var i = g - c, j = h - d, k = e - c, l = f - d, m = a - c, n = b - d, o = i * i + j * j, p = i * k + j * l, q = i * m + j * n, r = k * k + l * l, s = k * m + l * n, t = 1 / (o * r - p * p), u = (r * q - p * s) * t, v = (o * s - p * q) * t; return u >= 0 && v >= 0 && 1 > u + v; }, d._convex = function (a, b, c, d, e, f) { return (b - d) * (e - c) + (c - a) * (f - d) >= 0; }, b.exports = d; }, {}], 30: [function (a, b, c) { var d = b.exports = {}, e = a("../utils/Utils"); d.crossLength = function (a, b) { return a[0] * b[1] - a[1] * b[0]; }, d.crossVZ = function (a, b, c) { return d.rotate(a, b, -Math.PI / 2), d.scale(a, a, c), a; }, d.crossZV = function (a, b, c) { return d.rotate(a, c, Math.PI / 2), d.scale(a, a, b), a; }, d.rotate = function (a, b, c) { if (0 !== c) {
                var d = Math.cos(c), e = Math.sin(c), f = b[0], g = b[1];
                a[0] = d * f - e * g, a[1] = e * f + d * g;
            }
            else
                a[0] = b[0], a[1] = b[1]; }, d.rotate90cw = function (a, b) { var c = b[0], d = b[1]; a[0] = d, a[1] = -c; }, d.toLocalFrame = function (a, b, c, e) { d.copy(a, b), d.sub(a, a, c), d.rotate(a, a, -e); }, d.toGlobalFrame = function (a, b, c, e) { d.copy(a, b), d.rotate(a, a, e), d.add(a, a, c); }, d.vectorToLocalFrame = function (a, b, c) { d.rotate(a, b, -c); }, d.vectorToGlobalFrame = function (a, b, c) { d.rotate(a, b, c); }, d.centroid = function (a, b, c, e) { return d.add(a, b, c), d.add(a, a, e), d.scale(a, a, 1 / 3), a; }, d.create = function () { var a = new e.ARRAY_TYPE(2); return a[0] = 0, a[1] = 0, a; }, d.clone = function (a) { var b = new e.ARRAY_TYPE(2); return b[0] = a[0], b[1] = a[1], b; }, d.fromValues = function (a, b) { var c = new e.ARRAY_TYPE(2); return c[0] = a, c[1] = b, c; }, d.copy = function (a, b) { return a[0] = b[0], a[1] = b[1], a; }, d.set = function (a, b, c) { return a[0] = b, a[1] = c, a; }, d.add = function (a, b, c) { return a[0] = b[0] + c[0], a[1] = b[1] + c[1], a; }, d.subtract = function (a, b, c) { return a[0] = b[0] - c[0], a[1] = b[1] - c[1], a; }, d.sub = d.subtract, d.multiply = function (a, b, c) { return a[0] = b[0] * c[0], a[1] = b[1] * c[1], a; }, d.mul = d.multiply, d.divide = function (a, b, c) { return a[0] = b[0] / c[0], a[1] = b[1] / c[1], a; }, d.div = d.divide, d.scale = function (a, b, c) { return a[0] = b[0] * c, a[1] = b[1] * c, a; }, d.distance = function (a, b) { var c = b[0] - a[0], d = b[1] - a[1]; return Math.sqrt(c * c + d * d); }, d.dist = d.distance, d.squaredDistance = function (a, b) { var c = b[0] - a[0], d = b[1] - a[1]; return c * c + d * d; }, d.sqrDist = d.squaredDistance, d.length = function (a) { var b = a[0], c = a[1]; return Math.sqrt(b * b + c * c); }, d.len = d.length, d.squaredLength = function (a) { var b = a[0], c = a[1]; return b * b + c * c; }, d.sqrLen = d.squaredLength, d.negate = function (a, b) { return a[0] = -b[0], a[1] = -b[1], a; }, d.normalize = function (a, b) { var c = b[0], d = b[1], e = c * c + d * d; return e > 0 && (e = 1 / Math.sqrt(e), a[0] = b[0] * e, a[1] = b[1] * e), a; }, d.dot = function (a, b) { return a[0] * b[0] + a[1] * b[1]; }, d.str = function (a) { return "vec2(" + a[0] + ", " + a[1] + ")"; }, d.lerp = function (a, b, c, d) { var e = b[0], f = b[1]; return a[0] = e + d * (c[0] - e), a[1] = f + d * (c[1] - f), a; }, d.reflect = function (a, b, c) { var d = b[0] * c[0] + b[1] * c[1]; a[0] = b[0] - 2 * c[0] * d, a[1] = b[1] - 2 * c[1] * d; }, d.getLineSegmentsIntersection = function (a, b, c, e, f) { var g = d.getLineSegmentsIntersectionFraction(b, c, e, f); return 0 > g ? !1 : (a[0] = b[0] + g * (c[0] - b[0]), a[1] = b[1] + g * (c[1] - b[1]), !0); }, d.getLineSegmentsIntersectionFraction = function (a, b, c, d) { var e, f, g = b[0] - a[0], h = b[1] - a[1], i = d[0] - c[0], j = d[1] - c[1]; return e = (-h * (a[0] - c[0]) + g * (a[1] - c[1])) / (-i * h + g * j), f = (i * (a[1] - c[1]) - j * (a[0] - c[0])) / (-i * h + g * j), e >= 0 && 1 >= e && f >= 0 && 1 >= f ? f : -1; }; }, { "../utils/Utils": 57 }], 31: [function (a, b, c) {
                function d(a) {
                    a = a || {}, k.call(this), this.id = a.id || ++d._idCounter, this.world = null, this.shapes = [], this.mass = a.mass || 0, this.invMass = 0, this.inertia = 0, this.invInertia = 0, this.invMassSolve = 0, this.invInertiaSolve = 0, this.fixedRotation = !!a.fixedRotation, this.fixedX = !!a.fixedX, this.fixedY = !!a.fixedY, this.massMultiplier = e.create(), this.position = e.fromValues(0, 0), a.position && e.copy(this.position, a.position), this.interpolatedPosition = e.fromValues(0, 0), this.interpolatedAngle = 0, this.previousPosition = e.fromValues(0, 0), this.previousAngle = 0, this.velocity = e.fromValues(0, 0), a.velocity && e.copy(this.velocity, a.velocity), this.vlambda = e.fromValues(0, 0), this.wlambda = 0, this.angle = a.angle || 0, this.angularVelocity = a.angularVelocity || 0, this.force = e.create(), a.force && e.copy(this.force, a.force), this.angularForce = a.angularForce || 0, this.damping = "number" == typeof a.damping ? a.damping : .1, this.angularDamping = "number" == typeof a.angularDamping ? a.angularDamping : .1, this.type = d.STATIC, "undefined" != typeof a.type ? this.type = a.type : a.mass ? this.type = d.DYNAMIC : this.type = d.STATIC, this.boundingRadius = 0, this.aabb = new j, this.aabbNeedsUpdate = !0,
                        this.allowSleep = void 0 !== a.allowSleep ? a.allowSleep : !0, this.wantsToSleep = !1, this.sleepState = d.AWAKE, this.sleepSpeedLimit = void 0 !== a.sleepSpeedLimit ? a.sleepSpeedLimit : .2, this.sleepTimeLimit = void 0 !== a.sleepTimeLimit ? a.sleepTimeLimit : 1, this.gravityScale = void 0 !== a.gravityScale ? a.gravityScale : 1, this.collisionResponse = void 0 !== a.collisionResponse ? a.collisionResponse : !0, this.idleTime = 0, this.timeLastSleepy = 0, this.ccdSpeedThreshold = void 0 !== a.ccdSpeedThreshold ? a.ccdSpeedThreshold : -1, this.ccdIterations = void 0 !== a.ccdIterations ? a.ccdIterations : 10, this.concavePath = null, this._wakeUpAfterNarrowphase = !1, this.updateMassProperties();
                }
                var e = a("../math/vec2"), f = a("poly-decomp"), g = a("../shapes/Convex"), h = a("../collision/RaycastResult"), i = a("../collision/Ray"), j = a("../collision/AABB"), k = a("../events/EventEmitter");
                b.exports = d, d.prototype = new k, d.prototype.constructor = d, d._idCounter = 0, d.prototype.updateSolveMassProperties = function () { this.sleepState === d.SLEEPING || this.type === d.KINEMATIC ? (this.invMassSolve = 0, this.invInertiaSolve = 0) : (this.invMassSolve = this.invMass, this.invInertiaSolve = this.invInertia); }, d.prototype.setDensity = function (a) { var b = this.getArea(); this.mass = b * a, this.updateMassProperties(); }, d.prototype.getArea = function () { for (var a = 0, b = 0; b < this.shapes.length; b++)
                    a += this.shapes[b].area; return a; }, d.prototype.getAABB = function () { return this.aabbNeedsUpdate && this.updateAABB(), this.aabb; };
                var l = new j, m = e.create();
                d.prototype.updateAABB = function () { for (var a = this.shapes, b = a.length, c = m, d = this.angle, f = 0; f !== b; f++) {
                    var g = a[f], h = g.angle + d;
                    e.rotate(c, g.position, d), e.add(c, c, this.position), g.computeAABB(l, c, h), 0 === f ? this.aabb.copy(l) : this.aabb.extend(l);
                } this.aabbNeedsUpdate = !1; }, d.prototype.updateBoundingRadius = function () { for (var a = this.shapes, b = a.length, c = 0, d = 0; d !== b; d++) {
                    var f = a[d], g = e.length(f.position), h = f.boundingRadius;
                    g + h > c && (c = g + h);
                } this.boundingRadius = c; }, d.prototype.addShape = function (a, b, c) { if (a.body)
                    throw new Error("A shape can only be added to one body."); a.body = this, b ? e.copy(a.position, b) : e.set(a.position, 0, 0), a.angle = c || 0, this.shapes.push(a), this.updateMassProperties(), this.updateBoundingRadius(), this.aabbNeedsUpdate = !0; }, d.prototype.removeShape = function (a) { var b = this.shapes.indexOf(a); return -1 !== b ? (this.shapes.splice(b, 1), this.aabbNeedsUpdate = !0, a.body = null, !0) : !1; }, d.prototype.updateMassProperties = function () { if (this.type === d.STATIC || this.type === d.KINEMATIC)
                    this.mass = Number.MAX_VALUE, this.invMass = 0, this.inertia = Number.MAX_VALUE, this.invInertia = 0;
                else {
                    var a = this.shapes, b = a.length, c = this.mass / b, f = 0;
                    if (this.fixedRotation)
                        this.inertia = Number.MAX_VALUE, this.invInertia = 0;
                    else {
                        for (var g = 0; b > g; g++) {
                            var h = a[g], i = e.squaredLength(h.position), j = h.computeMomentOfInertia(c);
                            f += j + c * i;
                        }
                        this.inertia = f, this.invInertia = f > 0 ? 1 / f : 0;
                    }
                    this.invMass = 1 / this.mass, e.set(this.massMultiplier, this.fixedX ? 0 : 1, this.fixedY ? 0 : 1);
                } };
                e.create();
                d.prototype.applyForce = function (a, b) { if (e.add(this.force, this.force, a), b) {
                    var c = e.crossLength(b, a);
                    this.angularForce += c;
                } };
                var n = e.create(), o = e.create(), p = e.create();
                d.prototype.applyForceLocal = function (a, b) { b = b || p; var c = n, d = o; this.vectorToWorldFrame(c, a), this.vectorToWorldFrame(d, b), this.applyForce(c, d); };
                var q = e.create();
                d.prototype.applyImpulse = function (a, b) { if (this.type === d.DYNAMIC) {
                    var c = q;
                    if (e.scale(c, a, this.invMass), e.multiply(c, this.massMultiplier, c), e.add(this.velocity, c, this.velocity), b) {
                        var f = e.crossLength(b, a);
                        f *= this.invInertia, this.angularVelocity += f;
                    }
                } };
                var r = e.create(), s = e.create(), t = e.create();
                d.prototype.applyImpulseLocal = function (a, b) { b = b || t; var c = r, d = s; this.vectorToWorldFrame(c, a), this.vectorToWorldFrame(d, b), this.applyImpulse(c, d); }, d.prototype.toLocalFrame = function (a, b) { e.toLocalFrame(a, b, this.position, this.angle); }, d.prototype.toWorldFrame = function (a, b) { e.toGlobalFrame(a, b, this.position, this.angle); }, d.prototype.vectorToLocalFrame = function (a, b) { e.vectorToLocalFrame(a, b, this.angle); }, d.prototype.vectorToWorldFrame = function (a, b) { e.vectorToGlobalFrame(a, b, this.angle); }, d.prototype.fromPolygon = function (a, b) { b = b || {}; for (var c = this.shapes.length; c >= 0; --c)
                    this.removeShape(this.shapes[c]); var d = new f.Polygon; if (d.vertices = a, d.makeCCW(), "number" == typeof b.removeCollinearPoints && d.removeCollinearPoints(b.removeCollinearPoints), "undefined" == typeof b.skipSimpleCheck && !d.isSimple())
                    return !1; this.concavePath = d.vertices.slice(0); for (var c = 0; c < this.concavePath.length; c++) {
                    var h = [0, 0];
                    e.copy(h, this.concavePath[c]), this.concavePath[c] = h;
                } var i; i = b.optimalDecomp ? d.decomp() : d.quickDecomp(); for (var j = e.create(), c = 0; c !== i.length; c++) {
                    for (var k = new g({ vertices: i[c].vertices }), l = 0; l !== k.vertices.length; l++) {
                        var h = k.vertices[l];
                        e.sub(h, h, k.centerOfMass);
                    }
                    e.scale(j, k.centerOfMass, 1), k.updateTriangles(), k.updateCenterOfMass(), k.updateBoundingRadius(), this.addShape(k, j);
                } return this.adjustCenterOfMass(), this.aabbNeedsUpdate = !0, !0; };
                var u = (e.fromValues(0, 0), e.fromValues(0, 0)), v = e.fromValues(0, 0), w = e.fromValues(0, 0);
                d.prototype.adjustCenterOfMass = function () { var a = u, b = v, c = w, d = 0; e.set(b, 0, 0); for (var f = 0; f !== this.shapes.length; f++) {
                    var g = this.shapes[f];
                    e.scale(a, g.position, g.area), e.add(b, b, a), d += g.area;
                } e.scale(c, b, 1 / d); for (var f = 0; f !== this.shapes.length; f++) {
                    var g = this.shapes[f];
                    e.sub(g.position, g.position, c);
                } e.add(this.position, this.position, c); for (var f = 0; this.concavePath && f < this.concavePath.length; f++)
                    e.sub(this.concavePath[f], this.concavePath[f], c); this.updateMassProperties(), this.updateBoundingRadius(); }, d.prototype.setZeroForce = function () { e.set(this.force, 0, 0), this.angularForce = 0; }, d.prototype.resetConstraintVelocity = function () { var a = this, b = a.vlambda; e.set(b, 0, 0), a.wlambda = 0; }, d.prototype.addConstraintVelocity = function () { var a = this, b = a.velocity; e.add(b, b, a.vlambda), a.angularVelocity += a.wlambda; }, d.prototype.applyDamping = function (a) { if (this.type === d.DYNAMIC) {
                    var b = this.velocity;
                    e.scale(b, b, Math.pow(1 - this.damping, a)), this.angularVelocity *= Math.pow(1 - this.angularDamping, a);
                } }, d.prototype.wakeUp = function () { var a = this.sleepState; this.sleepState = d.AWAKE, this.idleTime = 0, a !== d.AWAKE && this.emit(d.wakeUpEvent); }, d.prototype.sleep = function () { this.sleepState = d.SLEEPING, this.angularVelocity = 0, this.angularForce = 0, e.set(this.velocity, 0, 0), e.set(this.force, 0, 0), this.emit(d.sleepEvent); }, d.prototype.sleepTick = function (a, b, c) { if (this.allowSleep && this.type !== d.SLEEPING) {
                    this.wantsToSleep = !1;
                    var f = (this.sleepState, e.squaredLength(this.velocity) + Math.pow(this.angularVelocity, 2)), g = Math.pow(this.sleepSpeedLimit, 2);
                    f >= g ? (this.idleTime = 0, this.sleepState = d.AWAKE) : (this.idleTime += c, this.sleepState = d.SLEEPY), this.idleTime > this.sleepTimeLimit && (b ? this.wantsToSleep = !0 : this.sleep());
                } }, d.prototype.overlaps = function (a) { return this.world.overlapKeeper.bodiesAreOverlapping(this, a); };
                var x = e.create(), y = e.create();
                d.prototype.integrate = function (a) { var b = this.invMass, c = this.force, d = this.position, f = this.velocity; e.copy(this.previousPosition, this.position), this.previousAngle = this.angle, this.fixedRotation || (this.angularVelocity += this.angularForce * this.invInertia * a), e.scale(x, c, a * b), e.multiply(x, this.massMultiplier, x), e.add(f, x, f), this.integrateToTimeOfImpact(a) || (e.scale(y, f, a), e.add(d, d, y), this.fixedRotation || (this.angle += this.angularVelocity * a)), this.aabbNeedsUpdate = !0; };
                var z = new h, A = new i({ mode: i.ALL }), B = e.create(), C = e.create(), D = e.create(), E = e.create();
                d.prototype.integrateToTimeOfImpact = function (a) { if (this.ccdSpeedThreshold < 0 || e.squaredLength(this.velocity) < Math.pow(this.ccdSpeedThreshold, 2))
                    return !1; e.normalize(B, this.velocity), e.scale(C, this.velocity, a), e.add(C, C, this.position), e.sub(D, C, this.position); var b, c = this.angularVelocity * a, d = e.length(D), f = 1, g = this; if (z.reset(), A.callback = function (a) { a.body !== g && (b = a.body, a.getHitPoint(C, A), e.sub(D, C, g.position), f = e.length(D) / d, a.stop()); }, e.copy(A.from, this.position), e.copy(A.to, C), A.update(), this.world.raycast(z, A), !b)
                    return !1; var h = this.angle; e.copy(E, this.position); for (var i = 0, j = 0, k = 0, l = f; l >= j && i < this.ccdIterations;) {
                    i++, k = (l - j) / 2, e.scale(y, D, f), e.add(this.position, E, y), this.angle = h + c * f, this.updateAABB();
                    var m = this.aabb.overlaps(b.aabb) && this.world.narrowphase.bodiesOverlap(this, b);
                    m ? j = k : l = k;
                } return f = k, e.copy(this.position, E), this.angle = h, e.scale(y, D, f), e.add(this.position, this.position, y), this.fixedRotation || (this.angle += c * f), !0; }, d.prototype.getVelocityAtPoint = function (a, b) { return e.crossVZ(a, b, this.angularVelocity), e.subtract(a, this.velocity, a), a; }, d.sleepyEvent = { type: "sleepy" }, d.sleepEvent = { type: "sleep" }, d.wakeUpEvent = { type: "wakeup" }, d.DYNAMIC = 1, d.STATIC = 2, d.KINEMATIC = 4, d.AWAKE = 0, d.SLEEPY = 1, d.SLEEPING = 2;
            }, { "../collision/AABB": 7, "../collision/Ray": 11, "../collision/RaycastResult": 12, "../events/EventEmitter": 26, "../math/vec2": 30, "../shapes/Convex": 40, "poly-decomp": 5 }], 32: [function (a, b, c) { function d(a, b, c) { c = c || {}, f.call(this, a, b, c), this.localAnchorA = e.fromValues(0, 0), this.localAnchorB = e.fromValues(0, 0), c.localAnchorA && e.copy(this.localAnchorA, c.localAnchorA), c.localAnchorB && e.copy(this.localAnchorB, c.localAnchorB), c.worldAnchorA && this.setWorldAnchorA(c.worldAnchorA), c.worldAnchorB && this.setWorldAnchorB(c.worldAnchorB); var d = e.create(), g = e.create(); this.getWorldAnchorA(d), this.getWorldAnchorB(g); var h = e.distance(d, g); this.restLength = "number" == typeof c.restLength ? c.restLength : h; } var e = a("../math/vec2"), f = a("./Spring"); a("../utils/Utils"); b.exports = d, d.prototype = new f, d.prototype.constructor = d, d.prototype.setWorldAnchorA = function (a) { this.bodyA.toLocalFrame(this.localAnchorA, a); }, d.prototype.setWorldAnchorB = function (a) { this.bodyB.toLocalFrame(this.localAnchorB, a); }, d.prototype.getWorldAnchorA = function (a) { this.bodyA.toWorldFrame(a, this.localAnchorA); }, d.prototype.getWorldAnchorB = function (a) { this.bodyB.toWorldFrame(a, this.localAnchorB); }; var g = e.create(), h = e.create(), i = e.create(), j = e.create(), k = e.create(), l = e.create(), m = e.create(), n = e.create(), o = e.create(); d.prototype.applyForce = function () { var a = this.stiffness, b = this.damping, c = this.restLength, d = this.bodyA, f = this.bodyB, p = g, q = h, r = i, s = j, t = o, u = k, v = l, w = m, x = n; this.getWorldAnchorA(u), this.getWorldAnchorB(v), e.sub(w, u, d.position), e.sub(x, v, f.position), e.sub(p, v, u); var y = e.len(p); e.normalize(q, p), e.sub(r, f.velocity, d.velocity), e.crossZV(t, f.angularVelocity, x), e.add(r, r, t), e.crossZV(t, d.angularVelocity, w), e.sub(r, r, t), e.scale(s, q, -a * (y - c) - b * e.dot(r, q)), e.sub(d.force, d.force, s), e.add(f.force, f.force, s); var z = e.crossLength(w, s), A = e.crossLength(x, s); d.angularForce -= z, f.angularForce += A; }; }, { "../math/vec2": 30, "../utils/Utils": 57, "./Spring": 34 }], 33: [function (a, b, c) { function d(a, b, c) { c = c || {}, e.call(this, a, b, c), this.restAngle = "number" == typeof c.restAngle ? c.restAngle : b.angle - a.angle; } var e = (a("../math/vec2"), a("./Spring")); b.exports = d, d.prototype = new e, d.prototype.constructor = d, d.prototype.applyForce = function () { var a = this.stiffness, b = this.damping, c = this.restAngle, d = this.bodyA, e = this.bodyB, f = e.angle - d.angle, g = e.angularVelocity - d.angularVelocity, h = -a * (f - c) - b * g * 0; d.angularForce -= h, e.angularForce += h; }; }, { "../math/vec2": 30, "./Spring": 34 }], 34: [function (a, b, c) { function d(a, b, c) { c = e.defaults(c, { stiffness: 100, damping: 1 }), this.stiffness = c.stiffness, this.damping = c.damping, this.bodyA = a, this.bodyB = b; } var e = (a("../math/vec2"), a("../utils/Utils")); b.exports = d, d.prototype.applyForce = function () { }; }, { "../math/vec2": 30, "../utils/Utils": 57 }], 35: [function (a, b, c) { function d(a, b) { b = b || {}, this.chassisBody = a, this.wheels = [], this.groundBody = new i({ mass: 0 }), this.world = null; var c = this; this.preStepCallback = function () { c.update(); }; } function e(a, b) { b = b || {}, this.vehicle = a, this.forwardEquation = new h(a.chassisBody, a.groundBody), this.sideEquation = new h(a.chassisBody, a.groundBody), this.steerValue = 0, this.engineForce = 0, this.setSideFriction(void 0 !== b.sideFriction ? b.sideFriction : 5), this.localForwardVector = f.fromValues(0, 1), b.localForwardVector && f.copy(this.localForwardVector, b.localForwardVector), this.localPosition = f.fromValues(0, 0), b.localPosition && f.copy(this.localPosition, b.localPosition), g.apply(this, a.chassisBody, a.groundBody), this.equations.push(this.forwardEquation, this.sideEquation), this.setBrakeForce(0); } var f = a("../math/vec2"), g = (a("../utils/Utils"), a("../constraints/Constraint")), h = a("../equations/FrictionEquation"), i = a("../objects/Body"); b.exports = d, d.prototype.addToWorld = function (a) { this.world = a, a.addBody(this.groundBody), a.on("preStep", this.preStepCallback); for (var b = 0; b < this.wheels.length; b++) {
                var c = this.wheels[b];
                a.addConstraint(c);
            } }, d.prototype.removeFromWorld = function () { var a = this.world; a.removeBody(this.groundBody), a.off("preStep", this.preStepCallback); for (var b = 0; b < this.wheels.length; b++) {
                var c = this.wheels[b];
                a.removeConstraint(c);
            } this.world = null; }, d.prototype.addWheel = function (a) { var b = new e(this, a); return this.wheels.push(b), b; }, d.prototype.update = function () { for (var a = 0; a < this.wheels.length; a++)
                this.wheels[a].update(); }, e.prototype = new g, e.prototype.setBrakeForce = function (a) { this.forwardEquation.setSlipForce(a); }, e.prototype.setSideFriction = function (a) { this.sideEquation.setSlipForce(a); }; var j = f.create(), k = f.create(); e.prototype.getSpeed = function () { return this.vehicle.chassisBody.vectorToWorldFrame(k, this.localForwardVector), this.vehicle.chassisBody.getVelocityAtPoint(j, k), f.dot(j, k); }; var l = f.create(); e.prototype.update = function () { this.vehicle.chassisBody.vectorToWorldFrame(this.forwardEquation.t, this.localForwardVector), f.rotate(this.sideEquation.t, this.localForwardVector, Math.PI / 2), this.vehicle.chassisBody.vectorToWorldFrame(this.sideEquation.t, this.sideEquation.t), f.rotate(this.forwardEquation.t, this.forwardEquation.t, this.steerValue), f.rotate(this.sideEquation.t, this.sideEquation.t, this.steerValue), this.vehicle.chassisBody.toWorldFrame(this.forwardEquation.contactPointB, this.localPosition), f.copy(this.sideEquation.contactPointB, this.forwardEquation.contactPointB), this.vehicle.chassisBody.vectorToWorldFrame(this.forwardEquation.contactPointA, this.localPosition), f.copy(this.sideEquation.contactPointA, this.forwardEquation.contactPointA), f.normalize(l, this.forwardEquation.t), f.scale(l, l, this.engineForce), this.vehicle.chassisBody.applyForce(l, this.forwardEquation.contactPointA); }; }, { "../constraints/Constraint": 14, "../equations/FrictionEquation": 23, "../math/vec2": 30, "../objects/Body": 31, "../utils/Utils": 57 }], 36: [function (a, b, c) { var d = b.exports = { AABB: a("./collision/AABB"), AngleLockEquation: a("./equations/AngleLockEquation"), Body: a("./objects/Body"), Broadphase: a("./collision/Broadphase"), Capsule: a("./shapes/Capsule"), Circle: a("./shapes/Circle"), Constraint: a("./constraints/Constraint"), ContactEquation: a("./equations/ContactEquation"), ContactEquationPool: a("./utils/ContactEquationPool"), ContactMaterial: a("./material/ContactMaterial"), Convex: a("./shapes/Convex"), DistanceConstraint: a("./constraints/DistanceConstraint"), Equation: a("./equations/Equation"), EventEmitter: a("./events/EventEmitter"), FrictionEquation: a("./equations/FrictionEquation"), FrictionEquationPool: a("./utils/FrictionEquationPool"), GearConstraint: a("./constraints/GearConstraint"), GSSolver: a("./solver/GSSolver"), Heightfield: a("./shapes/Heightfield"), Line: a("./shapes/Line"), LockConstraint: a("./constraints/LockConstraint"), Material: a("./material/Material"), Narrowphase: a("./collision/Narrowphase"), NaiveBroadphase: a("./collision/NaiveBroadphase"), Particle: a("./shapes/Particle"), Plane: a("./shapes/Plane"), Pool: a("./utils/Pool"), RevoluteConstraint: a("./constraints/RevoluteConstraint"), PrismaticConstraint: a("./constraints/PrismaticConstraint"), Ray: a("./collision/Ray"), RaycastResult: a("./collision/RaycastResult"), Box: a("./shapes/Box"), RotationalVelocityEquation: a("./equations/RotationalVelocityEquation"), SAPBroadphase: a("./collision/SAPBroadphase"), Shape: a("./shapes/Shape"), Solver: a("./solver/Solver"), Spring: a("./objects/Spring"), TopDownVehicle: a("./objects/TopDownVehicle"), LinearSpring: a("./objects/LinearSpring"), RotationalSpring: a("./objects/RotationalSpring"), Utils: a("./utils/Utils"), World: a("./world/World"), vec2: a("./math/vec2"), version: a("../package.json").version }; Object.defineProperty(d, "Rectangle", { get: function () { return console.warn("The Rectangle class has been renamed to Box."), this.Box; } }); }, { "../package.json": 6, "./collision/AABB": 7, "./collision/Broadphase": 8, "./collision/NaiveBroadphase": 9, "./collision/Narrowphase": 10, "./collision/Ray": 11, "./collision/RaycastResult": 12, "./collision/SAPBroadphase": 13, "./constraints/Constraint": 14, "./constraints/DistanceConstraint": 15, "./constraints/GearConstraint": 16, "./constraints/LockConstraint": 17, "./constraints/PrismaticConstraint": 18, "./constraints/RevoluteConstraint": 19, "./equations/AngleLockEquation": 20, "./equations/ContactEquation": 21, "./equations/Equation": 22, "./equations/FrictionEquation": 23, "./equations/RotationalVelocityEquation": 25, "./events/EventEmitter": 26, "./material/ContactMaterial": 27, "./material/Material": 28, "./math/vec2": 30, "./objects/Body": 31, "./objects/LinearSpring": 32, "./objects/RotationalSpring": 33, "./objects/Spring": 34, "./objects/TopDownVehicle": 35, "./shapes/Box": 37, "./shapes/Capsule": 38, "./shapes/Circle": 39, "./shapes/Convex": 40, "./shapes/Heightfield": 41, "./shapes/Line": 42, "./shapes/Particle": 43, "./shapes/Plane": 44, "./shapes/Shape": 45, "./solver/GSSolver": 46, "./solver/Solver": 47, "./utils/ContactEquationPool": 48, "./utils/FrictionEquationPool": 49, "./utils/Pool": 55, "./utils/Utils": 57, "./world/World": 61 }], 37: [function (a, b, c) { function d(a) { "number" == typeof arguments[0] && "number" == typeof arguments[1] && (a = { width: arguments[0], height: arguments[1] }, console.warn("The Rectangle has been renamed to Box and its constructor signature has changed. Please use the following format: new Box({ width: 1, height: 1, ... })")), a = a || {}; var b = this.width = a.width || 1, c = this.height = a.height || 1, d = [e.fromValues(-b / 2, -c / 2), e.fromValues(b / 2, -c / 2), e.fromValues(b / 2, c / 2), e.fromValues(-b / 2, c / 2)], h = [e.fromValues(1, 0), e.fromValues(0, 1)]; a.vertices = d, a.axes = h, a.type = f.BOX, g.call(this, a); } var e = a("../math/vec2"), f = a("./Shape"), g = a("./Convex"); b.exports = d, d.prototype = new g, d.prototype.constructor = d, d.prototype.computeMomentOfInertia = function (a) { var b = this.width, c = this.height; return a * (c * c + b * b) / 12; }, d.prototype.updateBoundingRadius = function () { var a = this.width, b = this.height; this.boundingRadius = Math.sqrt(a * a + b * b) / 2; }; e.create(), e.create(), e.create(), e.create(); d.prototype.computeAABB = function (a, b, c) { a.setFromPoints(this.vertices, b, c, 0); }, d.prototype.updateArea = function () { this.area = this.width * this.height; }; }, { "../math/vec2": 30, "./Convex": 40, "./Shape": 45 }], 38: [function (a, b, c) { function d(a) { "number" == typeof arguments[0] && "number" == typeof arguments[1] && (a = { length: arguments[0], radius: arguments[1] }, console.warn("The Capsule constructor signature has changed. Please use the following format: new Capsule({ radius: 1, length: 1 })")), a = a || {}, this.length = a.length || 1, this.radius = a.radius || 1, a.type = e.CAPSULE, e.call(this, a); } var e = a("./Shape"), f = a("../math/vec2"); b.exports = d, d.prototype = new e, d.prototype.constructor = d, d.prototype.computeMomentOfInertia = function (a) { var b = this.radius, c = this.length + b, d = 2 * b; return a * (d * d + c * c) / 12; }, d.prototype.updateBoundingRadius = function () { this.boundingRadius = this.radius + this.length / 2; }, d.prototype.updateArea = function () { this.area = Math.PI * this.radius * this.radius + 2 * this.radius * this.length; }; var g = f.create(); d.prototype.computeAABB = function (a, b, c) { var d = this.radius; f.set(g, this.length / 2, 0), 0 !== c && f.rotate(g, g, c), f.set(a.upperBound, Math.max(g[0] + d, -g[0] + d), Math.max(g[1] + d, -g[1] + d)), f.set(a.lowerBound, Math.min(g[0] - d, -g[0] - d), Math.min(g[1] - d, -g[1] - d)), f.add(a.lowerBound, a.lowerBound, b), f.add(a.upperBound, a.upperBound, b); }; var h = f.create(), i = f.create(), j = f.create(), k = f.create(), l = f.fromValues(0, 1); d.prototype.raycast = function (a, b, c, d) { for (var e = b.from, g = b.to, m = (b.direction, h), n = i, o = j, p = k, q = this.length / 2, r = 0; 2 > r; r++) {
                var s = this.radius * (2 * r - 1);
                f.set(o, -q, s), f.set(p, q, s), f.toGlobalFrame(o, o, c, d), f.toGlobalFrame(p, p, c, d);
                var t = f.getLineSegmentsIntersectionFraction(e, g, o, p);
                if (t >= 0 && (f.rotate(n, l, d), f.scale(n, n, 2 * r - 1), b.reportIntersection(a, t, n, -1), a.shouldStop(b)))
                    return;
            } for (var u = Math.pow(this.radius, 2) + Math.pow(q, 2), r = 0; 2 > r; r++) {
                f.set(o, q * (2 * r - 1), 0), f.toGlobalFrame(o, o, c, d);
                var v = Math.pow(g[0] - e[0], 2) + Math.pow(g[1] - e[1], 2), w = 2 * ((g[0] - e[0]) * (e[0] - o[0]) + (g[1] - e[1]) * (e[1] - o[1])), x = Math.pow(e[0] - o[0], 2) + Math.pow(e[1] - o[1], 2) - Math.pow(this.radius, 2), t = Math.pow(w, 2) - 4 * v * x;
                if (!(0 > t))
                    if (0 === t) {
                        if (f.lerp(m, e, g, t), f.squaredDistance(m, c) > u && (f.sub(n, m, o), f.normalize(n, n), b.reportIntersection(a, t, n, -1), a.shouldStop(b)))
                            return;
                    }
                    else {
                        var y = Math.sqrt(t), z = 1 / (2 * v), A = (-w - y) * z, B = (-w + y) * z;
                        if (A >= 0 && 1 >= A && (f.lerp(m, e, g, A), f.squaredDistance(m, c) > u && (f.sub(n, m, o), f.normalize(n, n), b.reportIntersection(a, A, n, -1), a.shouldStop(b))))
                            return;
                        if (B >= 0 && 1 >= B && (f.lerp(m, e, g, B), f.squaredDistance(m, c) > u && (f.sub(n, m, o), f.normalize(n, n), b.reportIntersection(a, B, n, -1), a.shouldStop(b))))
                            return;
                    }
            } }; }, { "../math/vec2": 30, "./Shape": 45 }], 39: [function (a, b, c) { function d(a) { "number" == typeof arguments[0] && (a = { radius: arguments[0] }, console.warn("The Circle constructor signature has changed. Please use the following format: new Circle({ radius: 1 })")), a = a || {}, this.radius = a.radius || 1, a.type = e.CIRCLE, e.call(this, a); } var e = a("./Shape"), f = a("../math/vec2"); b.exports = d, d.prototype = new e, d.prototype.constructor = d, d.prototype.computeMomentOfInertia = function (a) { var b = this.radius; return a * b * b / 2; }, d.prototype.updateBoundingRadius = function () { this.boundingRadius = this.radius; }, d.prototype.updateArea = function () { this.area = Math.PI * this.radius * this.radius; }, d.prototype.computeAABB = function (a, b, c) { var d = this.radius; f.set(a.upperBound, d, d), f.set(a.lowerBound, -d, -d), b && (f.add(a.lowerBound, a.lowerBound, b), f.add(a.upperBound, a.upperBound, b)); }; var g = f.create(), h = f.create(); d.prototype.raycast = function (a, b, c, d) { var e = b.from, i = b.to, j = this.radius, k = Math.pow(i[0] - e[0], 2) + Math.pow(i[1] - e[1], 2), l = 2 * ((i[0] - e[0]) * (e[0] - c[0]) + (i[1] - e[1]) * (e[1] - c[1])), m = Math.pow(e[0] - c[0], 2) + Math.pow(e[1] - c[1], 2) - Math.pow(j, 2), n = Math.pow(l, 2) - 4 * k * m, o = g, p = h; if (!(0 > n))
                if (0 === n)
                    f.lerp(o, e, i, n), f.sub(p, o, c), f.normalize(p, p), b.reportIntersection(a, n, p, -1);
                else {
                    var q = Math.sqrt(n), r = 1 / (2 * k), s = (-l - q) * r, t = (-l + q) * r;
                    if (s >= 0 && 1 >= s && (f.lerp(o, e, i, s), f.sub(p, o, c), f.normalize(p, p), b.reportIntersection(a, s, p, -1), a.shouldStop(b)))
                        return;
                    t >= 0 && 1 >= t && (f.lerp(o, e, i, t), f.sub(p, o, c), f.normalize(p, p), b.reportIntersection(a, t, p, -1));
                } }; }, { "../math/vec2": 30, "./Shape": 45 }], 40: [function (a, b, c) { function d(a) { Array.isArray(arguments[0]) && (a = { vertices: arguments[0], axes: arguments[1] }, console.warn("The Convex constructor signature has changed. Please use the following format: new Convex({ vertices: [...], ... })")), a = a || {}, this.vertices = []; for (var b = void 0 !== a.vertices ? a.vertices : [], c = 0; c < b.length; c++) {
                var d = f.create();
                f.copy(d, b[c]), this.vertices.push(d);
            } if (this.axes = [], a.axes)
                for (var c = 0; c < a.axes.length; c++) {
                    var g = f.create();
                    f.copy(g, a.axes[c]), this.axes.push(g);
                }
            else
                for (var c = 0; c < this.vertices.length; c++) {
                    var h = this.vertices[c], i = this.vertices[(c + 1) % this.vertices.length], j = f.create();
                    f.sub(j, i, h), f.rotate90cw(j, j), f.normalize(j, j), this.axes.push(j);
                } if (this.centerOfMass = f.fromValues(0, 0), this.triangles = [], this.vertices.length && (this.updateTriangles(), this.updateCenterOfMass()), this.boundingRadius = 0, a.type = e.CONVEX, e.call(this, a), this.updateBoundingRadius(), this.updateArea(), this.area < 0)
                throw new Error("Convex vertices must be given in conter-clockwise winding."); } var e = a("./Shape"), f = a("../math/vec2"), g = a("../math/polyk"); a("poly-decomp"); b.exports = d, d.prototype = new e, d.prototype.constructor = d; var h = f.create(), i = f.create(); d.prototype.projectOntoLocalAxis = function (a, b) { for (var c, d, e = null, g = null, a = h, i = 0; i < this.vertices.length; i++)
                c = this.vertices[i], d = f.dot(c, a), (null === e || d > e) && (e = d), (null === g || g > d) && (g = d); if (g > e) {
                var j = g;
                g = e, e = j;
            } f.set(b, g, e); }, d.prototype.projectOntoWorldAxis = function (a, b, c, d) { var e = i; this.projectOntoLocalAxis(a, d), 0 !== c ? f.rotate(e, a, c) : e = a; var g = f.dot(b, e); f.set(d, d[0] + g, d[1] + g); }, d.prototype.updateTriangles = function () { this.triangles.length = 0; for (var a = [], b = 0; b < this.vertices.length; b++) {
                var c = this.vertices[b];
                a.push(c[0], c[1]);
            } for (var d = g.Triangulate(a), b = 0; b < d.length; b += 3) {
                var e = d[b], f = d[b + 1], h = d[b + 2];
                this.triangles.push([e, f, h]);
            } }; var j = f.create(), k = f.create(), l = f.create(), m = f.create(), n = f.create(); f.create(), f.create(), f.create(), f.create(); d.prototype.updateCenterOfMass = function () { var a = this.triangles, b = this.vertices, c = this.centerOfMass, e = j, g = l, h = m, i = n, o = k; f.set(c, 0, 0); for (var p = 0, q = 0; q !== a.length; q++) {
                var r = a[q], g = b[r[0]], h = b[r[1]], i = b[r[2]];
                f.centroid(e, g, h, i);
                var s = d.triangleArea(g, h, i);
                p += s, f.scale(o, e, s), f.add(c, c, o);
            } f.scale(c, c, 1 / p); }, d.prototype.computeMomentOfInertia = function (a) { for (var b = 0, c = 0, d = this.vertices.length, e = d - 1, g = 0; d > g; e = g, g++) {
                var h = this.vertices[e], i = this.vertices[g], j = Math.abs(f.crossLength(h, i)), k = f.dot(i, i) + f.dot(i, h) + f.dot(h, h);
                b += j * k, c += j;
            } return a / 6 * (b / c); }, d.prototype.updateBoundingRadius = function () { for (var a = this.vertices, b = 0, c = 0; c !== a.length; c++) {
                var d = f.squaredLength(a[c]);
                d > b && (b = d);
            } this.boundingRadius = Math.sqrt(b); }, d.triangleArea = function (a, b, c) { return .5 * ((b[0] - a[0]) * (c[1] - a[1]) - (c[0] - a[0]) * (b[1] - a[1])); }, d.prototype.updateArea = function () { this.updateTriangles(), this.area = 0; for (var a = this.triangles, b = this.vertices, c = 0; c !== a.length; c++) {
                var e = a[c], f = b[e[0]], g = b[e[1]], h = b[e[2]], i = d.triangleArea(f, g, h);
                this.area += i;
            } }, d.prototype.computeAABB = function (a, b, c) { a.setFromPoints(this.vertices, b, c, 0); }; var o = f.create(), p = f.create(), q = f.create(); d.prototype.raycast = function (a, b, c, d) { var e = o, g = p, h = q, i = this.vertices; f.toLocalFrame(e, b.from, c, d), f.toLocalFrame(g, b.to, c, d); for (var j = i.length, k = 0; j > k && !a.shouldStop(b); k++) {
                var l = i[k], m = i[(k + 1) % j], n = f.getLineSegmentsIntersectionFraction(e, g, l, m);
                n >= 0 && (f.sub(h, m, l), f.rotate(h, h, -Math.PI / 2 + d), f.normalize(h, h), b.reportIntersection(a, n, h, k));
            } }; }, { "../math/polyk": 29, "../math/vec2": 30, "./Shape": 45, "poly-decomp": 5 }], 41: [function (a, b, c) { function d(a) { if (Array.isArray(arguments[0])) {
                if (a = { heights: arguments[0] }, "object" == typeof arguments[1])
                    for (var b in arguments[1])
                        a[b] = arguments[1][b];
                console.warn("The Heightfield constructor signature has changed. Please use the following format: new Heightfield({ heights: [...], ... })");
            } a = a || {}, this.heights = a.heights ? a.heights.slice(0) : [], this.maxValue = a.maxValue || null, this.minValue = a.minValue || null, this.elementWidth = a.elementWidth || .1, (void 0 === a.maxValue || void 0 === a.minValue) && this.updateMaxMinValues(), a.type = e.HEIGHTFIELD, e.call(this, a); } var e = a("./Shape"), f = a("../math/vec2"); a("../utils/Utils"); b.exports = d, d.prototype = new e, d.prototype.constructor = d, d.prototype.updateMaxMinValues = function () { for (var a = this.heights, b = a[0], c = a[0], d = 0; d !== a.length; d++) {
                var e = a[d];
                e > b && (b = e), c > e && (c = e);
            } this.maxValue = b, this.minValue = c; }, d.prototype.computeMomentOfInertia = function (a) { return Number.MAX_VALUE; }, d.prototype.updateBoundingRadius = function () { this.boundingRadius = Number.MAX_VALUE; }, d.prototype.updateArea = function () { for (var a = this.heights, b = 0, c = 0; c < a.length - 1; c++)
                b += (a[c] + a[c + 1]) / 2 * this.elementWidth; this.area = b; }; var g = [f.create(), f.create(), f.create(), f.create()]; d.prototype.computeAABB = function (a, b, c) { f.set(g[0], 0, this.maxValue), f.set(g[1], this.elementWidth * this.heights.length, this.maxValue), f.set(g[2], this.elementWidth * this.heights.length, this.minValue), f.set(g[3], 0, this.minValue), a.setFromPoints(g, b, c); }, d.prototype.getLineSegment = function (a, b, c) { var d = this.heights, e = this.elementWidth; f.set(a, c * e, d[c]), f.set(b, (c + 1) * e, d[c + 1]); }, d.prototype.getSegmentIndex = function (a) { return Math.floor(a[0] / this.elementWidth); }, d.prototype.getClampedSegmentIndex = function (a) { var b = this.getSegmentIndex(a); return b = Math.min(this.heights.length, Math.max(b, 0)); }; var h = (f.create(), f.create()), i = f.create(), j = f.create(), k = f.create(), l = f.create(); f.fromValues(0, 1); d.prototype.raycast = function (a, b, c, d) { var e = b.from, g = b.to, m = (b.direction, h), n = i, o = j, p = k, q = l; f.toLocalFrame(p, e, c, d), f.toLocalFrame(q, g, c, d); var r = this.getClampedSegmentIndex(p), s = this.getClampedSegmentIndex(q); if (r > s) {
                var t = r;
                r = s, s = t;
            } for (var u = 0; u < this.heights.length - 1; u++) {
                this.getLineSegment(n, o, u);
                var v = f.getLineSegmentsIntersectionFraction(p, q, n, o);
                if (v >= 0 && (f.sub(m, o, n), f.rotate(m, m, d + Math.PI / 2), f.normalize(m, m), b.reportIntersection(a, v, m, -1), a.shouldStop(b)))
                    return;
            } }; }, { "../math/vec2": 30, "../utils/Utils": 57, "./Shape": 45 }], 42: [function (a, b, c) { function d(a) { "number" == typeof arguments[0] && (a = { length: arguments[0] }, console.warn("The Line constructor signature has changed. Please use the following format: new Line({ length: 1, ... })")), a = a || {}, this.length = a.length || 1, a.type = e.LINE, e.call(this, a); } var e = a("./Shape"), f = a("../math/vec2"); b.exports = d, d.prototype = new e, d.prototype.constructor = d, d.prototype.computeMomentOfInertia = function (a) { return a * Math.pow(this.length, 2) / 12; }, d.prototype.updateBoundingRadius = function () { this.boundingRadius = this.length / 2; }; var g = [f.create(), f.create()]; d.prototype.computeAABB = function (a, b, c) { var d = this.length / 2; f.set(g[0], -d, 0), f.set(g[1], d, 0), a.setFromPoints(g, b, c, 0); }; var h = (f.create(), f.create()), i = f.create(), j = f.create(), k = f.fromValues(0, 1); d.prototype.raycast = function (a, b, c, d) { var e = b.from, g = b.to, l = i, m = j, n = this.length / 2; f.set(l, -n, 0), f.set(m, n, 0), f.toGlobalFrame(l, l, c, d), f.toGlobalFrame(m, m, c, d); var o = f.getLineSegmentsIntersectionFraction(l, m, e, g); if (o >= 0) {
                var p = h;
                f.rotate(p, k, d), b.reportIntersection(a, o, p, -1);
            } }; }, { "../math/vec2": 30, "./Shape": 45 }], 43: [function (a, b, c) { function d(a) { a = a || {}, a.type = e.PARTICLE, e.call(this, a); } var e = a("./Shape"), f = a("../math/vec2"); b.exports = d, d.prototype = new e, d.prototype.constructor = d, d.prototype.computeMomentOfInertia = function (a) { return 0; }, d.prototype.updateBoundingRadius = function () { this.boundingRadius = 0; }, d.prototype.computeAABB = function (a, b, c) { f.copy(a.lowerBound, b), f.copy(a.upperBound, b); }; }, { "../math/vec2": 30, "./Shape": 45 }], 44: [function (a, b, c) { function d(a) { a = a || {}, a.type = e.PLANE, e.call(this, a); } var e = a("./Shape"), f = a("../math/vec2"); a("../utils/Utils"); b.exports = d, d.prototype = new e, d.prototype.constructor = d, d.prototype.computeMomentOfInertia = function (a) { return 0; }, d.prototype.updateBoundingRadius = function () { this.boundingRadius = Number.MAX_VALUE; }, d.prototype.computeAABB = function (a, b, c) { var d = c % (2 * Math.PI), e = f.set, g = Number.MAX_VALUE, h = a.lowerBound, i = a.upperBound; 0 === d ? (e(h, -g, -g), e(i, g, 0)) : d === Math.PI / 2 ? (e(h, 0, -g), e(i, g, g)) : d === Math.PI ? (e(h, -g, 0), e(i, g, g)) : d === 3 * Math.PI / 2 ? (e(h, -g, -g), e(i, 0, g)) : (e(h, -g, -g), e(i, g, g)), f.add(h, h, b), f.add(i, i, b); }, d.prototype.updateArea = function () { this.area = Number.MAX_VALUE; }; var g = f.create(), h = (f.create(), f.create(), f.create()), i = f.create(); d.prototype.raycast = function (a, b, c, d) { var e = b.from, j = b.to, k = b.direction, l = g, m = h, n = i; f.set(m, 0, 1), f.rotate(m, m, d), f.sub(n, e, c); var o = f.dot(n, m); f.sub(n, j, c); var p = f.dot(n, m); if (!(o * p > 0 || f.squaredDistance(e, j) < o * o)) {
                var q = f.dot(m, k);
                f.sub(l, e, c);
                var r = -f.dot(m, l) / q / b.length;
                b.reportIntersection(a, r, m, -1);
            } }; }, { "../math/vec2": 30, "../utils/Utils": 57, "./Shape": 45 }], 45: [function (a, b, c) { function d(a) { a = a || {}, this.body = null, this.position = e.fromValues(0, 0), a.position && e.copy(this.position, a.position), this.angle = a.angle || 0, this.type = a.type || 0, this.id = d.idCounter++, this.boundingRadius = 0, this.collisionGroup = void 0 !== a.collisionGroup ? a.collisionGroup : 1, this.collisionResponse = void 0 !== a.collisionResponse ? a.collisionResponse : !0, this.collisionMask = void 0 !== a.collisionMask ? a.collisionMask : 1, this.material = a.material || null, this.area = 0, this.sensor = void 0 !== a.sensor ? a.sensor : !1, this.type && this.updateBoundingRadius(), this.updateArea(); } b.exports = d; var e = a("../math/vec2"); d.idCounter = 0, d.CIRCLE = 1, d.PARTICLE = 2, d.PLANE = 4, d.CONVEX = 8, d.LINE = 16, d.BOX = 32, Object.defineProperty(d, "RECTANGLE", { get: function () { return console.warn("Shape.RECTANGLE is deprecated, use Shape.BOX instead."), d.BOX; } }), d.CAPSULE = 64, d.HEIGHTFIELD = 128, d.prototype.computeMomentOfInertia = function (a) { }, d.prototype.updateBoundingRadius = function () { }, d.prototype.updateArea = function () { }, d.prototype.computeAABB = function (a, b, c) { }, d.prototype.raycast = function (a, b, c, d) { }; }, { "../math/vec2": 30 }], 46: [function (a, b, c) {
                function d(a) {
                    g.call(this, a, g.GS), a = a || {}, this.iterations = a.iterations || 10, this.tolerance = a.tolerance || 1e-7, this.arrayStep = 30, this.lambda = new h.ARRAY_TYPE(this.arrayStep), this.Bs = new h.ARRAY_TYPE(this.arrayStep), this.invCs = new h.ARRAY_TYPE(this.arrayStep), this.useZeroRHS = !1, this.frictionIterations = 0, this.usedIterations = 0;
                }
                function e(a) { for (var b = a.length; b--;)
                    a[b] = 0; }
                var f = a("../math/vec2"), g = a("./Solver"), h = a("../utils/Utils"), i = a("../equations/FrictionEquation");
                b.exports = d, d.prototype = new g, d.prototype.constructor = d, d.prototype.solve = function (a, b) { this.sortEquations(); var c = 0, g = this.iterations, j = this.frictionIterations, k = this.equations, l = k.length, m = Math.pow(this.tolerance * l, 2), n = b.bodies, o = b.bodies.length, p = (f.add, f.set, this.useZeroRHS), q = this.lambda; if (this.usedIterations = 0, l)
                    for (var r = 0; r !== o; r++) {
                        var s = n[r];
                        s.updateSolveMassProperties();
                    } q.length < l && (q = this.lambda = new h.ARRAY_TYPE(l + this.arrayStep), this.Bs = new h.ARRAY_TYPE(l + this.arrayStep), this.invCs = new h.ARRAY_TYPE(l + this.arrayStep)), e(q); for (var t = this.invCs, u = this.Bs, q = this.lambda, r = 0; r !== k.length; r++) {
                    var v = k[r];
                    (v.timeStep !== a || v.needsUpdate) && (v.timeStep = a, v.update()), u[r] = v.computeB(v.a, v.b, a), t[r] = v.computeInvC(v.epsilon);
                } var v, w, r, x; if (0 !== l) {
                    for (r = 0; r !== o; r++) {
                        var s = n[r];
                        s.resetConstraintVelocity();
                    }
                    if (j) {
                        for (c = 0; c !== j; c++) {
                            for (w = 0, x = 0; x !== l; x++) {
                                v = k[x];
                                var y = d.iterateEquation(x, v, v.epsilon, u, t, q, p, a, c);
                                w += Math.abs(y);
                            }
                            if (this.usedIterations++, m >= w * w)
                                break;
                        }
                        for (d.updateMultipliers(k, q, 1 / a), x = 0; x !== l; x++) {
                            var z = k[x];
                            if (z instanceof i) {
                                for (var A = 0, B = 0; B !== z.contactEquations.length; B++)
                                    A += z.contactEquations[B].multiplier;
                                A *= z.frictionCoefficient / z.contactEquations.length, z.maxForce = A, z.minForce = -A;
                            }
                        }
                    }
                    for (c = 0; c !== g; c++) {
                        for (w = 0, x = 0; x !== l; x++) {
                            v = k[x];
                            var y = d.iterateEquation(x, v, v.epsilon, u, t, q, p, a, c);
                            w += Math.abs(y);
                        }
                        if (this.usedIterations++, m >= w * w)
                            break;
                    }
                    for (r = 0; r !== o; r++)
                        n[r].addConstraintVelocity();
                    d.updateMultipliers(k, q, 1 / a);
                } }, d.updateMultipliers = function (a, b, c) { for (var d = a.length; d--;)
                    a[d].multiplier = b[d] * c; }, d.iterateEquation = function (a, b, c, d, e, f, g, h, i) { var j = d[a], k = e[a], l = f[a], m = b.computeGWlambda(), n = b.maxForce, o = b.minForce; g && (j = 0); var p = k * (j - m - c * l), q = l + p; return o * h > q ? p = o * h - l : q > n * h && (p = n * h - l), f[a] += p, b.addToWlambda(p), p; };
            }, { "../equations/FrictionEquation": 23, "../math/vec2": 30, "../utils/Utils": 57, "./Solver": 47 }], 47: [function (a, b, c) { function d(a, b) { a = a || {}, e.call(this), this.type = b, this.equations = [], this.equationSortFunction = a.equationSortFunction || !1; } var e = (a("../utils/Utils"), a("../events/EventEmitter")); b.exports = d, d.prototype = new e, d.prototype.constructor = d, d.prototype.solve = function (a, b) { throw new Error("Solver.solve should be implemented by subclasses!"); }; var f = { bodies: [] }; d.prototype.solveIsland = function (a, b) { this.removeAllEquations(), b.equations.length && (this.addEquations(b.equations), f.bodies.length = 0, b.getBodies(f.bodies), f.bodies.length && this.solve(a, f)); }, d.prototype.sortEquations = function () { this.equationSortFunction && this.equations.sort(this.equationSortFunction); }, d.prototype.addEquation = function (a) { a.enabled && this.equations.push(a); }, d.prototype.addEquations = function (a) { for (var b = 0, c = a.length; b !== c; b++) {
                var d = a[b];
                d.enabled && this.equations.push(d);
            } }, d.prototype.removeEquation = function (a) { var b = this.equations.indexOf(a); -1 !== b && this.equations.splice(b, 1); }, d.prototype.removeAllEquations = function () { this.equations.length = 0; }, d.GS = 1, d.ISLAND = 2; }, { "../events/EventEmitter": 26, "../utils/Utils": 57 }], 48: [function (a, b, c) { function d() { f.apply(this, arguments); } var e = a("../equations/ContactEquation"), f = a("./Pool"); b.exports = d, d.prototype = new f, d.prototype.constructor = d, d.prototype.create = function () { return new e; }, d.prototype.destroy = function (a) { return a.bodyA = a.bodyB = null, this; }; }, { "../equations/ContactEquation": 21, "./Pool": 55 }], 49: [function (a, b, c) { function d() { f.apply(this, arguments); } var e = a("../equations/FrictionEquation"), f = a("./Pool"); b.exports = d, d.prototype = new f, d.prototype.constructor = d, d.prototype.create = function () { return new e; }, d.prototype.destroy = function (a) { return a.bodyA = a.bodyB = null, this; }; }, { "../equations/FrictionEquation": 23, "./Pool": 55 }], 50: [function (a, b, c) { function d() { f.apply(this, arguments); } var e = a("../world/IslandNode"), f = a("./Pool"); b.exports = d, d.prototype = new f, d.prototype.constructor = d, d.prototype.create = function () { return new e; }, d.prototype.destroy = function (a) { return a.reset(), this; }; }, { "../world/IslandNode": 60, "./Pool": 55 }], 51: [function (a, b, c) { function d() { f.apply(this, arguments); } var e = a("../world/Island"), f = a("./Pool"); b.exports = d, d.prototype = new f, d.prototype.constructor = d, d.prototype.create = function () { return new e; }, d.prototype.destroy = function (a) { return a.reset(), this; }; }, { "../world/Island": 58, "./Pool": 55 }], 52: [function (a, b, c) { function d() { this.overlappingShapesLastState = new e, this.overlappingShapesCurrentState = new e, this.recordPool = new f({ size: 16 }), this.tmpDict = new e, this.tmpArray1 = []; } var e = a("./TupleDictionary"), f = (a("./OverlapKeeperRecord"), a("./OverlapKeeperRecordPool")); a("./Utils"); b.exports = d, d.prototype.tick = function () { for (var a = this.overlappingShapesLastState, b = this.overlappingShapesCurrentState, c = a.keys.length; c--;) {
                var d = a.keys[c], e = a.getByKey(d);
                b.getByKey(d);
                e && this.recordPool.release(e);
            } a.reset(), a.copy(b), b.reset(); }, d.prototype.setOverlapping = function (a, b, c, d) { var e = (this.overlappingShapesLastState, this.overlappingShapesCurrentState); if (!e.get(b.id, d.id)) {
                var f = this.recordPool.get();
                f.set(a, b, c, d), e.set(b.id, d.id, f);
            } }, d.prototype.getNewOverlaps = function (a) { return this.getDiff(this.overlappingShapesLastState, this.overlappingShapesCurrentState, a); }, d.prototype.getEndOverlaps = function (a) { return this.getDiff(this.overlappingShapesCurrentState, this.overlappingShapesLastState, a); }, d.prototype.bodiesAreOverlapping = function (a, b) { for (var c = this.overlappingShapesCurrentState, d = c.keys.length; d--;) {
                var e = c.keys[d], f = c.data[e];
                if (f.bodyA === a && f.bodyB === b || f.bodyA === b && f.bodyB === a)
                    return !0;
            } return !1; }, d.prototype.getDiff = function (a, b, c) { var c = c || [], d = a, e = b; c.length = 0; for (var f = e.keys.length; f--;) {
                var g = e.keys[f], h = e.data[g];
                if (!h)
                    throw new Error("Key " + g + " had no data!");
                var i = d.data[g];
                i || c.push(h);
            } return c; }, d.prototype.isNewOverlap = function (a, b) { var c = 0 | a.id, d = 0 | b.id, e = this.overlappingShapesLastState, f = this.overlappingShapesCurrentState; return !e.get(c, d) && !!f.get(c, d); }, d.prototype.getNewBodyOverlaps = function (a) { this.tmpArray1.length = 0; var b = this.getNewOverlaps(this.tmpArray1); return this.getBodyDiff(b, a); }, d.prototype.getEndBodyOverlaps = function (a) { this.tmpArray1.length = 0; var b = this.getEndOverlaps(this.tmpArray1); return this.getBodyDiff(b, a); }, d.prototype.getBodyDiff = function (a, b) { b = b || []; for (var c = this.tmpDict, d = a.length; d--;) {
                var e = a[d];
                c.set(0 | e.bodyA.id, 0 | e.bodyB.id, e);
            } for (d = c.keys.length; d--;) {
                var e = c.getByKey(c.keys[d]);
                e && b.push(e.bodyA, e.bodyB);
            } return c.reset(), b; }; }, { "./OverlapKeeperRecord": 53, "./OverlapKeeperRecordPool": 54, "./TupleDictionary": 56, "./Utils": 57 }], 53: [function (a, b, c) { function d(a, b, c, d) { this.shapeA = b, this.shapeB = d, this.bodyA = a, this.bodyB = c; } b.exports = d, d.prototype.set = function (a, b, c, e) { d.call(this, a, b, c, e); }; }, {}], 54: [function (a, b, c) { function d() { f.apply(this, arguments); } var e = a("./OverlapKeeperRecord"), f = a("./Pool"); b.exports = d, d.prototype = new f, d.prototype.constructor = d, d.prototype.create = function () { return new e; }, d.prototype.destroy = function (a) { return a.bodyA = a.bodyB = a.shapeA = a.shapeB = null, this; }; }, { "./OverlapKeeperRecord": 53, "./Pool": 55 }], 55: [function (a, b, c) { function d(a) { a = a || {}, this.objects = [], void 0 !== a.size && this.resize(a.size); } b.exports = d, d.prototype.resize = function (a) { for (var b = this.objects; b.length > a;)
                b.pop(); for (; b.length < a;)
                b.push(this.create()); return this; }, d.prototype.get = function () { var a = this.objects; return a.length ? a.pop() : this.create(); }, d.prototype.release = function (a) { return this.destroy(a), this.objects.push(a), this; }; }, {}], 56: [function (a, b, c) { function d() { this.data = {}, this.keys = []; } var e = a("./Utils"); b.exports = d, d.prototype.getKey = function (a, b) { return a = 0 | a, b = 0 | b, (0 | a) === (0 | b) ? -1 : 0 | ((0 | a) > (0 | b) ? a << 16 | 65535 & b : b << 16 | 65535 & a); }, d.prototype.getByKey = function (a) { return a = 0 | a, this.data[a]; }, d.prototype.get = function (a, b) { return this.data[this.getKey(a, b)]; }, d.prototype.set = function (a, b, c) { if (!c)
                throw new Error("No data!"); var d = this.getKey(a, b); return this.data[d] || this.keys.push(d), this.data[d] = c, d; }, d.prototype.reset = function () { for (var a = this.data, b = this.keys, c = b.length; c--;)
                delete a[b[c]]; b.length = 0; }, d.prototype.copy = function (a) { this.reset(), e.appendArray(this.keys, a.keys); for (var b = a.keys.length; b--;) {
                var c = a.keys[b];
                this.data[c] = a.data[c];
            } }; }, { "./Utils": 57 }], 57: [function (a, b, c) { function d() { } b.exports = d, d.appendArray = function (a, b) { if (b.length < 15e4)
                a.push.apply(a, b);
            else
                for (var c = 0, d = b.length; c !== d; ++c)
                    a.push(b[c]); }, d.splice = function (a, b, c) { c = c || 1; for (var d = b, e = a.length - c; e > d; d++)
                a[d] = a[d + c]; a.length = e; }, "undefined" != typeof P2_ARRAY_TYPE ? d.ARRAY_TYPE = P2_ARRAY_TYPE : "undefined" != typeof Float32Array ? d.ARRAY_TYPE = Float32Array : d.ARRAY_TYPE = Array, d.extend = function (a, b) { for (var c in b)
                a[c] = b[c]; }, d.defaults = function (a, b) { a = a || {}; for (var c in b)
                c in a || (a[c] = b[c]); return a; }; }, {}], 58: [function (a, b, c) { function d() { this.equations = [], this.bodies = []; } var e = a("../objects/Body"); b.exports = d, d.prototype.reset = function () { this.equations.length = this.bodies.length = 0; }; var f = []; d.prototype.getBodies = function (a) { var b = a || [], c = this.equations; f.length = 0; for (var d = 0; d !== c.length; d++) {
                var e = c[d];
                -1 === f.indexOf(e.bodyA.id) && (b.push(e.bodyA), f.push(e.bodyA.id)), -1 === f.indexOf(e.bodyB.id) && (b.push(e.bodyB), f.push(e.bodyB.id));
            } return b; }, d.prototype.wantsToSleep = function () { for (var a = 0; a < this.bodies.length; a++) {
                var b = this.bodies[a];
                if (b.type === e.DYNAMIC && !b.wantsToSleep)
                    return !1;
            } return !0; }, d.prototype.sleep = function () { for (var a = 0; a < this.bodies.length; a++) {
                var b = this.bodies[a];
                b.sleep();
            } return !0; }; }, { "../objects/Body": 31 }], 59: [function (a, b, c) { function d(a) { this.nodePool = new e({ size: 16 }), this.islandPool = new f({ size: 8 }), this.equations = [], this.islands = [], this.nodes = [], this.queue = []; } var e = (a("../math/vec2"), a("./Island"), a("./IslandNode"), a("./../utils/IslandNodePool")), f = a("./../utils/IslandPool"), g = a("../objects/Body"); b.exports = d, d.getUnvisitedNode = function (a) { for (var b = a.length, c = 0; c !== b; c++) {
                var d = a[c];
                if (!d.visited && d.body.type === g.DYNAMIC)
                    return d;
            } return !1; }, d.prototype.visit = function (a, b, c) { b.push(a.body); for (var d = a.equations.length, e = 0; e !== d; e++) {
                var f = a.equations[e];
                -1 === c.indexOf(f) && c.push(f);
            } }, d.prototype.bfs = function (a, b, c) { var e = this.queue; for (e.length = 0, e.push(a), a.visited = !0, this.visit(a, b, c); e.length;)
                for (var f, h = e.pop(); f = d.getUnvisitedNode(h.neighbors);)
                    f.visited = !0, this.visit(f, b, c), f.body.type === g.DYNAMIC && e.push(f); }, d.prototype.split = function (a) { for (var b = a.bodies, c = this.nodes, e = this.equations; c.length;)
                this.nodePool.release(c.pop()); for (var f = 0; f !== b.length; f++) {
                var g = this.nodePool.get();
                g.body = b[f], c.push(g);
            } for (var h = 0; h !== e.length; h++) {
                var i = e[h], f = b.indexOf(i.bodyA), j = b.indexOf(i.bodyB), k = c[f], l = c[j];
                k.neighbors.push(l), l.neighbors.push(k), k.equations.push(i), l.equations.push(i);
            } for (var m = this.islands, f = 0; f < m.length; f++)
                this.islandPool.release(m[f]); m.length = 0; for (var n; n = d.getUnvisitedNode(c);) {
                var o = this.islandPool.get();
                this.bfs(n, o.bodies, o.equations), m.push(o);
            } return m; }; }, { "../math/vec2": 30, "../objects/Body": 31, "./../utils/IslandNodePool": 50, "./../utils/IslandPool": 51, "./Island": 58, "./IslandNode": 60 }], 60: [function (a, b, c) { function d(a) { this.body = a, this.neighbors = [], this.equations = [], this.visited = !1; } b.exports = d, d.prototype.reset = function () { this.equations.length = 0, this.neighbors.length = 0, this.visited = !1, this.body = null; }; }, {}], 61: [function (a, b, c) { function d(a) { l.apply(this), a = a || {}, this.springs = [], this.bodies = [], this.disabledBodyCollisionPairs = [], this.solver = a.solver || new e, this.narrowphase = new r(this), this.islandManager = new u, this.gravity = f.fromValues(0, -9.78), a.gravity && f.copy(this.gravity, a.gravity), this.frictionGravity = f.length(this.gravity) || 10, this.useWorldGravityAsFrictionGravity = !0, this.useFrictionGravityOnZeroGravity = !0, this.broadphase = a.broadphase || new q, this.broadphase.setWorld(this), this.constraints = [], this.defaultMaterial = new n, this.defaultContactMaterial = new o(this.defaultMaterial, this.defaultMaterial), this.lastTimeStep = 1 / 60, this.applySpringForces = !0, this.applyDamping = !0, this.applyGravity = !0, this.solveConstraints = !0, this.contactMaterials = [], this.time = 0, this.accumulator = 0, this.stepping = !1, this.bodiesToBeRemoved = [], this.islandSplit = "undefined" != typeof a.islandSplit ? !!a.islandSplit : !0, this.emitImpactEvent = !0, this._constraintIdCounter = 0, this._bodyIdCounter = 0, this.postStepEvent = { type: "postStep" }, this.addBodyEvent = { type: "addBody", body: null }, this.removeBodyEvent = { type: "removeBody", body: null }, this.addSpringEvent = { type: "addSpring", spring: null }, this.impactEvent = { type: "impact", bodyA: null, bodyB: null, shapeA: null, shapeB: null, contactEquation: null }, this.postBroadphaseEvent = { type: "postBroadphase", pairs: null }, this.sleepMode = d.NO_SLEEPING, this.beginContactEvent = { type: "beginContact", shapeA: null, shapeB: null, bodyA: null, bodyB: null, contactEquations: [] }, this.endContactEvent = { type: "endContact", shapeA: null, shapeB: null, bodyA: null, bodyB: null }, this.preSolveEvent = { type: "preSolve", contactEquations: null, frictionEquations: null }, this.overlappingShapesLastState = { keys: [] }, this.overlappingShapesCurrentState = { keys: [] }, this.overlapKeeper = new t; } var e = a("../solver/GSSolver"), f = (a("../solver/Solver"), a("../collision/Ray"), a("../math/vec2")), g = a("../shapes/Circle"), h = a("../shapes/Convex"), i = (a("../shapes/Line"), a("../shapes/Plane")), j = a("../shapes/Capsule"), k = a("../shapes/Particle"), l = a("../events/EventEmitter"), m = a("../objects/Body"), n = (a("../shapes/Shape"), a("../objects/LinearSpring"), a("../material/Material")), o = a("../material/ContactMaterial"), p = (a("../constraints/DistanceConstraint"), a("../constraints/Constraint"), a("../constraints/LockConstraint"), a("../constraints/RevoluteConstraint"), a("../constraints/PrismaticConstraint"), a("../constraints/GearConstraint"), a("../../package.json"), a("../collision/Broadphase"), a("../collision/AABB")), q = a("../collision/SAPBroadphase"), r = a("../collision/Narrowphase"), s = a("../utils/Utils"), t = a("../utils/OverlapKeeper"), u = a("./IslandManager"); a("../objects/RotationalSpring"); b.exports = d, d.prototype = new Object(l.prototype), d.prototype.constructor = d, d.NO_SLEEPING = 1, d.BODY_SLEEPING = 2, d.ISLAND_SLEEPING = 4, d.prototype.addConstraint = function (a) { this.constraints.push(a); }, d.prototype.addContactMaterial = function (a) { this.contactMaterials.push(a); }, d.prototype.removeContactMaterial = function (a) { var b = this.contactMaterials.indexOf(a); -1 !== b && s.splice(this.contactMaterials, b, 1); }, d.prototype.getContactMaterial = function (a, b) { for (var c = this.contactMaterials, d = 0, e = c.length; d !== e; d++) {
                var f = c[d];
                if (f.materialA.id === a.id && f.materialB.id === b.id || f.materialA.id === b.id && f.materialB.id === a.id)
                    return f;
            } return !1; }, d.prototype.removeConstraint = function (a) { var b = this.constraints.indexOf(a); -1 !== b && s.splice(this.constraints, b, 1); }; var v = (f.create(), f.create(), f.create(), f.create(), f.create(), f.create(), f.create()), w = f.fromValues(0, 0), x = f.fromValues(0, 0); f.fromValues(0, 0), f.fromValues(0, 0); d.prototype.step = function (a, b, c) { if (c = c || 10, b = b || 0, 0 === b)
                this.internalStep(a), this.time += a;
            else {
                this.accumulator += b;
                for (var d = 0; this.accumulator >= a && c > d;)
                    this.internalStep(a), this.time += a, this.accumulator -= a, d++;
                for (var e = this.accumulator % a / a, g = 0; g !== this.bodies.length; g++) {
                    var h = this.bodies[g];
                    f.lerp(h.interpolatedPosition, h.previousPosition, h.position, e), h.interpolatedAngle = h.previousAngle + e * (h.angle - h.previousAngle);
                }
            } }; var y = []; d.prototype.internalStep = function (a) { this.stepping = !0; var b = this.springs.length, c = this.springs, e = this.bodies, g = this.gravity, h = this.solver, i = this.bodies.length, j = this.broadphase, k = this.narrowphase, l = this.constraints, n = v, o = (f.scale, f.add), p = (f.rotate, this.islandManager); if (this.overlapKeeper.tick(), this.lastTimeStep = a, this.useWorldGravityAsFrictionGravity) {
                var q = f.length(this.gravity);
                0 === q && this.useFrictionGravityOnZeroGravity || (this.frictionGravity = q);
            } if (this.applyGravity)
                for (var r = 0; r !== i; r++) {
                    var t = e[r], u = t.force;
                    t.type === m.DYNAMIC && t.sleepState !== m.SLEEPING && (f.scale(n, g, t.mass * t.gravityScale), o(u, u, n));
                } if (this.applySpringForces)
                for (var r = 0; r !== b; r++) {
                    var w = c[r];
                    w.applyForce();
                } if (this.applyDamping)
                for (var r = 0; r !== i; r++) {
                    var t = e[r];
                    t.type === m.DYNAMIC && t.applyDamping(a);
                } for (var x = j.getCollisionPairs(this), z = this.disabledBodyCollisionPairs, r = z.length - 2; r >= 0; r -= 2)
                for (var A = x.length - 2; A >= 0; A -= 2)
                    (z[r] === x[A] && z[r + 1] === x[A + 1] || z[r + 1] === x[A] && z[r] === x[A + 1]) && x.splice(A, 2); var B = l.length; for (r = 0; r !== B; r++) {
                var C = l[r];
                if (!C.collideConnected)
                    for (var A = x.length - 2; A >= 0; A -= 2)
                        (C.bodyA === x[A] && C.bodyB === x[A + 1] || C.bodyB === x[A] && C.bodyA === x[A + 1]) && x.splice(A, 2);
            } this.postBroadphaseEvent.pairs = x, this.emit(this.postBroadphaseEvent), this.postBroadphaseEvent.pairs = null, k.reset(this); for (var r = 0, D = x.length; r !== D; r += 2)
                for (var E = x[r], F = x[r + 1], G = 0, H = E.shapes.length; G !== H; G++)
                    for (var I = E.shapes[G], J = I.position, K = I.angle, L = 0, M = F.shapes.length; L !== M; L++) {
                        var N = F.shapes[L], O = N.position, P = N.angle, Q = this.defaultContactMaterial;
                        if (I.material && N.material) {
                            var R = this.getContactMaterial(I.material, N.material);
                            R && (Q = R);
                        }
                        this.runNarrowphase(k, E, I, J, K, F, N, O, P, Q, this.frictionGravity);
                    } for (var r = 0; r !== i; r++) {
                var S = e[r];
                S._wakeUpAfterNarrowphase && (S.wakeUp(), S._wakeUpAfterNarrowphase = !1);
            } if (this.has("endContact")) {
                this.overlapKeeper.getEndOverlaps(y);
                for (var T = this.endContactEvent, L = y.length; L--;) {
                    var U = y[L];
                    T.shapeA = U.shapeA, T.shapeB = U.shapeB, T.bodyA = U.bodyA, T.bodyB = U.bodyB, this.emit(T);
                }
                y.length = 0;
            } var V = this.preSolveEvent; V.contactEquations = k.contactEquations, V.frictionEquations = k.frictionEquations, this.emit(V), V.contactEquations = V.frictionEquations = null; var B = l.length; for (r = 0; r !== B; r++)
                l[r].update(); if (k.contactEquations.length || k.frictionEquations.length || B)
                if (this.islandSplit) {
                    for (p.equations.length = 0, s.appendArray(p.equations, k.contactEquations), s.appendArray(p.equations, k.frictionEquations), r = 0; r !== B; r++)
                        s.appendArray(p.equations, l[r].equations);
                    p.split(this);
                    for (var r = 0; r !== p.islands.length; r++) {
                        var W = p.islands[r];
                        W.equations.length && h.solveIsland(a, W);
                    }
                }
                else {
                    for (h.addEquations(k.contactEquations), h.addEquations(k.frictionEquations), r = 0; r !== B; r++)
                        h.addEquations(l[r].equations);
                    this.solveConstraints && h.solve(a, this), h.removeAllEquations();
                } for (var r = 0; r !== i; r++) {
                var S = e[r];
                S.integrate(a);
            } for (var r = 0; r !== i; r++)
                e[r].setZeroForce(); if (this.emitImpactEvent && this.has("impact"))
                for (var X = this.impactEvent, r = 0; r !== k.contactEquations.length; r++) {
                    var Y = k.contactEquations[r];
                    Y.firstImpact && (X.bodyA = Y.bodyA, X.bodyB = Y.bodyB, X.shapeA = Y.shapeA, X.shapeB = Y.shapeB, X.contactEquation = Y, this.emit(X));
                } if (this.sleepMode === d.BODY_SLEEPING)
                for (r = 0; r !== i; r++)
                    e[r].sleepTick(this.time, !1, a);
            else if (this.sleepMode === d.ISLAND_SLEEPING && this.islandSplit) {
                for (r = 0; r !== i; r++)
                    e[r].sleepTick(this.time, !0, a);
                for (var r = 0; r < this.islandManager.islands.length; r++) {
                    var W = this.islandManager.islands[r];
                    W.wantsToSleep() && W.sleep();
                }
            } this.stepping = !1; for (var Z = this.bodiesToBeRemoved, r = 0; r !== Z.length; r++)
                this.removeBody(Z[r]); Z.length = 0, this.emit(this.postStepEvent); }, d.prototype.runNarrowphase = function (a, b, c, d, e, g, h, i, j, k, l) { if (0 !== (c.collisionGroup & h.collisionMask) && 0 !== (h.collisionGroup & c.collisionMask)) {
                f.rotate(w, d, b.angle), f.rotate(x, i, g.angle), f.add(w, w, b.position), f.add(x, x, g.position);
                var n = e + b.angle, o = j + g.angle;
                a.enableFriction = k.friction > 0, a.frictionCoefficient = k.friction;
                var p;
                p = b.type === m.STATIC || b.type === m.KINEMATIC ? g.mass : g.type === m.STATIC || g.type === m.KINEMATIC ? b.mass : b.mass * g.mass / (b.mass + g.mass), a.slipForce = k.friction * l * p, a.restitution = k.restitution, a.surfaceVelocity = k.surfaceVelocity, a.frictionStiffness = k.frictionStiffness, a.frictionRelaxation = k.frictionRelaxation, a.stiffness = k.stiffness, a.relaxation = k.relaxation, a.contactSkinSize = k.contactSkinSize, a.enabledEquations = b.collisionResponse && g.collisionResponse && c.collisionResponse && h.collisionResponse;
                var q = a[c.type | h.type], r = 0;
                if (q) {
                    var s = c.sensor || h.sensor, t = a.frictionEquations.length;
                    r = c.type < h.type ? q.call(a, b, c, w, n, g, h, x, o, s) : q.call(a, g, h, x, o, b, c, w, n, s);
                    var u = a.frictionEquations.length - t;
                    if (r) {
                        if (b.allowSleep && b.type === m.DYNAMIC && b.sleepState === m.SLEEPING && g.sleepState === m.AWAKE && g.type !== m.STATIC) {
                            var v = f.squaredLength(g.velocity) + Math.pow(g.angularVelocity, 2), y = Math.pow(g.sleepSpeedLimit, 2);
                            v >= 2 * y && (b._wakeUpAfterNarrowphase = !0);
                        }
                        if (g.allowSleep && g.type === m.DYNAMIC && g.sleepState === m.SLEEPING && b.sleepState === m.AWAKE && b.type !== m.STATIC) {
                            var z = f.squaredLength(b.velocity) + Math.pow(b.angularVelocity, 2), A = Math.pow(b.sleepSpeedLimit, 2);
                            z >= 2 * A && (g._wakeUpAfterNarrowphase = !0);
                        }
                        if (this.overlapKeeper.setOverlapping(b, c, g, h), this.has("beginContact") && this.overlapKeeper.isNewOverlap(c, h)) {
                            var B = this.beginContactEvent;
                            if (B.shapeA = c, B.shapeB = h, B.bodyA = b, B.bodyB = g, B.contactEquations.length = 0, "number" == typeof r)
                                for (var C = a.contactEquations.length - r; C < a.contactEquations.length; C++)
                                    B.contactEquations.push(a.contactEquations[C]);
                            this.emit(B);
                        }
                        if ("number" == typeof r && u > 1)
                            for (var C = a.frictionEquations.length - u; C < a.frictionEquations.length; C++) {
                                var D = a.frictionEquations[C];
                                D.setSlipForce(D.getSlipForce() / u);
                            }
                    }
                }
            } }, d.prototype.addSpring = function (a) { this.springs.push(a); var b = this.addSpringEvent; b.spring = a, this.emit(b), b.spring = null; }, d.prototype.removeSpring = function (a) { var b = this.springs.indexOf(a); -1 !== b && s.splice(this.springs, b, 1); }, d.prototype.addBody = function (a) { if (-1 === this.bodies.indexOf(a)) {
                this.bodies.push(a), a.world = this;
                var b = this.addBodyEvent;
                b.body = a, this.emit(b), b.body = null;
            } }, d.prototype.removeBody = function (a) { if (this.stepping)
                this.bodiesToBeRemoved.push(a);
            else {
                a.world = null;
                var b = this.bodies.indexOf(a);
                -1 !== b && (s.splice(this.bodies, b, 1), this.removeBodyEvent.body = a, a.resetConstraintVelocity(), this.emit(this.removeBodyEvent), this.removeBodyEvent.body = null);
            } }, d.prototype.getBodyById = function (a) { for (var b = this.bodies, c = 0; c < b.length; c++) {
                var d = b[c];
                if (d.id === a)
                    return d;
            } return !1; }, d.prototype.disableBodyCollision = function (a, b) { this.disabledBodyCollisionPairs.push(a, b); }, d.prototype.enableBodyCollision = function (a, b) { for (var c = this.disabledBodyCollisionPairs, d = 0; d < c.length; d += 2)
                if (c[d] === a && c[d + 1] === b || c[d + 1] === a && c[d] === b)
                    return void c.splice(d, 2); }, d.prototype.clear = function () { this.time = 0, this.solver && this.solver.equations.length && this.solver.removeAllEquations(); for (var a = this.constraints, b = a.length - 1; b >= 0; b--)
                this.removeConstraint(a[b]); for (var c = this.bodies, b = c.length - 1; b >= 0; b--)
                this.removeBody(c[b]); for (var e = this.springs, b = e.length - 1; b >= 0; b--)
                this.removeSpring(e[b]); for (var f = this.contactMaterials, b = f.length - 1; b >= 0; b--)
                this.removeContactMaterial(f[b]); d.apply(this); }; var z = f.create(), A = (f.fromValues(0, 0), f.fromValues(0, 0)); d.prototype.hitTest = function (a, b, c) { c = c || 0; var d = new m({ position: a }), e = new k, l = a, n = 0, o = z, p = A; d.addShape(e); for (var q = this.narrowphase, r = [], s = 0, t = b.length; s !== t; s++)
                for (var u = b[s], v = 0, w = u.shapes.length; v !== w; v++) {
                    var x = u.shapes[v];
                    f.rotate(o, x.position, u.angle), f.add(o, o, u.position);
                    var y = x.angle + u.angle;
                    (x instanceof g && q.circleParticle(u, x, o, y, d, e, l, n, !0) || x instanceof h && q.particleConvex(d, e, l, n, u, x, o, y, !0) || x instanceof i && q.particlePlane(d, e, l, n, u, x, o, y, !0) || x instanceof j && q.particleCapsule(d, e, l, n, u, x, o, y, !0) || x instanceof k && f.squaredLength(f.sub(p, o, a)) < c * c) && r.push(u);
                } return r; }, d.prototype.setGlobalStiffness = function (a) { for (var b = this.constraints, c = 0; c !== b.length; c++)
                for (var d = b[c], e = 0; e !== d.equations.length; e++) {
                    var f = d.equations[e];
                    f.stiffness = a, f.needsUpdate = !0;
                } for (var g = this.contactMaterials, c = 0; c !== g.length; c++) {
                var d = g[c];
                d.stiffness = d.frictionStiffness = a;
            } var d = this.defaultContactMaterial; d.stiffness = d.frictionStiffness = a; }, d.prototype.setGlobalRelaxation = function (a) { for (var b = 0; b !== this.constraints.length; b++)
                for (var c = this.constraints[b], d = 0; d !== c.equations.length; d++) {
                    var e = c.equations[d];
                    e.relaxation = a, e.needsUpdate = !0;
                } for (var b = 0; b !== this.contactMaterials.length; b++) {
                var c = this.contactMaterials[b];
                c.relaxation = c.frictionRelaxation = a;
            } var c = this.defaultContactMaterial; c.relaxation = c.frictionRelaxation = a; }; var B = new p, C = []; d.prototype.raycast = function (a, b) { return b.getAABB(B), this.broadphase.aabbQuery(this, B, C), b.intersectBodies(a, C), C.length = 0, a.hasHit(); }; }, { "../../package.json": 6, "../collision/AABB": 7, "../collision/Broadphase": 8, "../collision/Narrowphase": 10, "../collision/Ray": 11, "../collision/SAPBroadphase": 13, "../constraints/Constraint": 14, "../constraints/DistanceConstraint": 15, "../constraints/GearConstraint": 16, "../constraints/LockConstraint": 17, "../constraints/PrismaticConstraint": 18, "../constraints/RevoluteConstraint": 19, "../events/EventEmitter": 26, "../material/ContactMaterial": 27, "../material/Material": 28, "../math/vec2": 30, "../objects/Body": 31, "../objects/LinearSpring": 32, "../objects/RotationalSpring": 33, "../shapes/Capsule": 38, "../shapes/Circle": 39, "../shapes/Convex": 40, "../shapes/Line": 42, "../shapes/Particle": 43, "../shapes/Plane": 44, "../shapes/Shape": 45, "../solver/GSSolver": 46, "../solver/Solver": 47, "../utils/OverlapKeeper": 52, "../utils/Utils": 57, "./IslandManager": 59 }] }, {}, [36])(36);
});