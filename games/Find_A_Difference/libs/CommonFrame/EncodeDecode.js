tywx.EncodeDecode = {
    base64Encode: function(r) {
        for (var e, o, t, n, a, c, h, d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", f = "", C = 0, i = (r = tywx.EncodeDecode.utf8Encode(r)).length; C < i; ) n = (e = r.charCodeAt(C++)) >> 2, 
        a = (3 & e) << 4 | (o = r.charCodeAt(C++)) >> 4, c = (15 & o) << 2 | (t = r.charCodeAt(C++)) >> 6, 
        h = 63 & t, isNaN(o) ? c = h = 64 : isNaN(t) && (h = 64), f = f + d.charAt(n) + d.charAt(a) + d.charAt(c) + d.charAt(h);
        return f;
    },
    base64Decode: function(r) {
        for (var e, o, t, n, a, c, h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", d = 0, f = (r = r.replace(/[^A-Za-z0-9\+\/\=]/g, "")).length, C = []; d < f; ) e = h.indexOf(r.charAt(d++)) << 2 | (n = h.indexOf(r.charAt(d++))) >> 4, 
        o = (15 & n) << 4 | (a = h.indexOf(r.charAt(d++))) >> 2, t = (3 & a) << 6 | (c = h.indexOf(r.charAt(d++))), 
        C.push(e), 64 != a && C.push(o), 64 != c && C.push(t);
        return C;
    },
    utf8Encode: function(r) {
        for (var e = "", o = 0, t = (r = r.replace(/\r\n/g, "\n")).length; o < t; o++) {
            var n = r.charCodeAt(o);
            n < 128 ? e += String.fromCharCode(n) : n > 127 && n < 2048 ? (e += String.fromCharCode(n >> 6 | 192), 
            e += String.fromCharCode(63 & n | 128)) : (e += String.fromCharCode(n >> 12 | 224), 
            e += String.fromCharCode(n >> 6 & 63 | 128), e += String.fromCharCode(63 & n | 128));
        }
        return e;
    },
    utf8Decode: function(r) {
        for (var e, o, t = "", n = 0, a = e = o = 0, c = r.length; n < c; ) (a = r[n]) < 128 ? (t += String.fromCharCode(a), 
        n++) : a > 191 && a < 224 ? (o = r[n + 1], t += String.fromCharCode((31 & a) << 6 | 63 & o), 
        n += 2) : (o = r[n + 1], c3 = r[n + 2], t += String.fromCharCode((15 & a) << 12 | (63 & o) << 6 | 63 & c3), 
        n += 3);
        return t;
    }
};