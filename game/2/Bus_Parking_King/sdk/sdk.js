var _0x310774 = _0x2aa9;

function loadStyle(n) {
	var e = _0x310774,
		t = document.createElement(e(422)),
		a;
	t[e(478)] = e(445), t[e(417)] = e(516), t[e(416)] = n, document.getElementsByTagName(e(468))[0].appendChild(t)
}

function _0x2aa9(n, e) {
	var t = _0x46fc();
	return (_0x2aa9 = function(n, e) {
		var a;
		return t[n -= 393]
	})(n, e)
}

function _0x46fc() {
	var n = ["random", "keyCode", "init", "text/css", "ShowReward", "2377460BafLYA", "addEventListener", "postMessage", "split", "/sdk/base.css", "bindEvent", "2820153ZtmMhn", "ShowStart", "getElementsByTagName", "source", "callback", "StartBtnClick", "action", "search", "insertBefore", "16301CCAHkj", "function", "ShowLoaded", "game-preloading", "loaded", "/sdk/bridge.htm?msg=", "head", "blur", "canvas", "focus", "onmessage", "92VhEAJm", "top", "complete", "11uwQIFN", "style", "type", "slice", "parse", "run", "_MSG", "getElementById", "removeChild", "3494336NszkRs", "getGameData", "location", "ShowSplash", "no-referer", "(^|&)", "domain", "hash", "get", "focus init", "stp", "createElement", "93655NwRnGG", "indexOf", "leveldone", "viewport", "62iKBYUg", "innerWidth", "splash", "param", "touchstart", "onkeydown", "stringify", "=([^&]*)(&|$)", "ShowInit", "PreRollAd.containerId", "_ng", "meta[name=viewport]", "load", "log", "getTime", "stylesheet", "preventDefault", "match", "domready", "button", "6tXXmmu", "parentNode", "_bridge", "console", "iframe", "27OrfuAO", "responser", "pageX", "event", "length", "querySelector", "display:none", "keydown", "call", "vit", "parent", "onclick", "referrer", "origin", "href", "rel", "send", "_act", "reward", "firstStamp", "link", "substr", "10860312zWkaxO", "data", "act", "width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no", "ShowDomReady", "content", "start", "setAttribute", "&act=", "msgApi", "msg", "param_value", "appendChild", "G_API", "timer", "851049GReVMI", "attachEvent", "_postSupport"];
	return (_0x46fc = function() {
		return n
	})()
}(function(n, e) {
	for (var t = _0x2aa9, a = n();;) try {
		var o;
		if (420392 === parseInt(t(462)) / 1 * (-parseInt(t(501)) / 2) + -parseInt(t(439)) / 3 + parseInt(t(473)) / 4 * (parseInt(t(497)) / 5) + -parseInt(t(397)) / 6 * (parseInt(t(453)) / 7) + -parseInt(t(485)) / 8 + parseInt(t(402)) / 9 * (parseInt(t(447)) / 10) + -parseInt(t(476)) / 11 * (-parseInt(t(424)) / 12)) break;
		a.push(a.shift())
	} catch (n) {
		a.push(a.shift())
	}
})(_0x46fc, 420392), window[_0x310774(482)] = function() {
		var n = _0x310774,
			e = n(399),
			t = document[n(414)] ? document.referrer[n(450)]("//")[1][n(450)]("/")[0] : null;

		function a(e) {
			var t = n,
				a = RegExp("(^|&)" + e + t(508)),
				o = window[t(487)][t(460)][t(423)](1)
				.match(a);
			return null != o ? unescape(o[2]) : null
		}
		var o = function(t) {
				var a = n,
					o;
				if (o = document[a(483)](e)) o.src = t;
				else {
					var o = document[a(496)](a(401)),
						r = {
							id: e,
							src: t,
							style: a(408),
							frameBorder: 0,
							scrolling: "no",
							width: "0",
							height: "0",
							allowtransparency: "true",
							referrerpolicy: a(489),
							rel: "noreferrer"
						};
					for (var i in r) o[a(431)](i, r[i]);
					document.body[a(436)](o)
				}
			},
			r = function(e, a) {
				var r = n;
				if (t) {
					var i = "//" + t + r(467) + (e || "") + r(432) + (a || "");
					o(i)
				}
			},
			i, c = function() {
				var e = n,
					t = a(e(434)) || "",
					o = a(e(426)) || "",
					r = o[e(450)](":");
				return {
					msg: t,
					act: o,
					_act: r
				}
			}(),
			w = function(e) {
				var t;
				r(e || "", c[n(419)][1])
			},
			d = function() {
				var t = n,
					a = document.getElementById(e);
				a && a[t(398)][t(484)](a)
			},
			s = function() {
				var e = n,
					t = window[e(412)][e(412)];
				t[c[e(419)][0]] && t[c._act[0]][e(410)](this), !c[e(419)][1] && t[e(482)][e(475)][e(410)](this)
			};
		return {
			target: t,
			send: r,
			response: w,
			msg: c.msg,
			bridge: s,
			complete: d
		}
	}(), window[_0x310774(433)] = function() {
		var n = {},
			e, t = function() {
				var e = _0x2aa9,
					t = function(e) {
						var t = _0x2aa9;
						if (e[t(456)] != window && e.origin[t(394)](/([t-v][e-g][q-t][e-g]{3}|localhost|ds\.io)/gi)) {
							var a;
							try {
								"object" == typeof e[t(425)] ? a = e[t(425)] : e.data.match(/({|}|[|])/gi) && (a = JSON[t(480)](e[t(425)]))
							} catch (n) {
								console[t(514)](n)
							}
							if (a)
								if (0 == a[t(403)]) {
									if ("action" == a[t(478)]) {
										for (var o = a.param[t(450)]("."), r = window, i = 0; i < o[t(406)] && (r = r[o[i]] || {}); i++) i == o.length - 1 && typeof r == t(463) && (r = r(a[t(435)]));
										a[t(403)] = 1, a[t(504)] = r, a[t(457)] && e[t(456)] && e.source[t(449)](JSON[t(507)](a), e[t(415)]), console.log(e)
									}
								} else if (1 == a[t(403)]) {
								var c = n[a[t(457)]];
								typeof c == t(463) && c(a.param), console[t(514)](e)
							}
						}
					};
				window.addEventListener ? window[e(448)]("message", t, !1) : window[e(440)](e(472), t)
			},
			a;
		return {
			init: function() {
				t()
			},
			send: function(e, t, a, o) {
				var r = _0x2aa9;
				e != window && (t.callback && typeof o == r(463) && (n[t[r(457)]] = o), e[r(449)](JSON.stringify(t), a || "*"))
			}
		}
	}(), window[_0x310774(433)][_0x310774(444)](), window[_0x310774(437)] = function() {
		var n = _0x310774,
			e = 0,
			t = !1,
			a = !1,
			o = 45,
			r = !1,
			i = {
				get: function(n) {
					var e = _0x2aa9,
						t = RegExp(e(490) + n + e(508), "i"),
						a = window.location[e(492)][e(423)](1)[e(394)](t);
					return null != a ? unescape(a[2]) : null
				},
				set: function(n, e, t) {
					var a = "&";
					return n.indexOf("#") <= -1 && (a = "#"), n += a + e + "=" + t
				}
			},
			c = 1 * i.get("anv"),
			w = 1 * i.get(n(495)),
			d = 1 * i[n(493)](n(411));

		function s() {
			var i = n,
				s = arguments[0],
				u, p;
			arguments[1] == i(499) || arguments[1] == i(396) ? (u = arguments[1], p = arguments[2]) : p = arguments[1];
			var f = function() {
					var n = 1e3 * ((e + 1) * o || 3);
					return 1 == c && n > 4e4 && (n = 4e4), n > 5e4 && (n = 5e4), n
				},
				m = location[i(416)][i(450)]("/")[i(479)](-2)[0][i(450)]("?")[0];
			if ("start" == s && !window[i(421)]) {
				window[i(421)] = (new Date)[i(515)](), window.postMessage && window[i(441)] ? window.msgApi[i(418)](window[i(412)], {
					type: i(459),
					param: i(454),
					param_value: "",
					callback: i(454),
					responser: 0
				}, null, function(n) {}) : _MSG[i(418)](i(430), i(454)), 1 == c && 1 == w && !d && e++;
				try {
					gtag(i(405), m, {
						event_category: "SPLASH",
						event_label: i(458)
					})
				} catch (n) {}
			}
			if ("splash" == s || s == i(420)) {
				l();
				var v = (new Date)[i(515)]();
				if (v - window[i(421)] >= f() || s == i(420)) {
					var _ = s == i(420) ? i(446) : i(488),
						g = window.parent;
					(u == i(396) || Math[i(442)]() < 0 || location.href[i(498)](i(511)) > -1) && s != i(420) && 1 != c && (g = window[i(474)]), window[i(449)] && window[i(441)] ? window[i(433)][i(418)](g, {
						type: "action",
						param: _,
						param_value: "",
						callback: _,
						responser: 0
					}, null, function(n) {}) : _MSG.send(i(503), _), window[i(421)] = v, e++, setTimeout(function() {
						r = !0
					}, 1e3);
					try {
						gtag(i(405), m, {
							event_category: "SPLASH",
							event_label: _
						})
					} catch (n) {}
					typeof p == i(463) && p()
				}
			}
			if (s == i(438)) {
				var h = f();
				h = h >= 6e4 ? h : 6e4;
				var y = function() {
					setTimeout(function() {
						window.focus(), t = !0
					}, h)
				};
				window[i(471)](), window[i(448)](i(469), function() {
					var n = i,
						a = (new Date)[n(515)]();
					window[n(421)] ? t && (e++, t = !1, typeof p == n(463) && p(y), setTimeout(function() {
						r = !0
					}, 1e3)) : (window[n(421)] = a, y())
				})
			}
			"init" == s && !a && (a = !0, window[i(449)] && window._postSupport ? window[i(433)][i(418)](window[i(412)], {
				type: i(459),
				param: i(509),
				param_value: "",
				callback: i(509),
				responser: 0
			}, null, function(n) {}) : _MSG.send(i(444), i(509))), s == i(466) && (window[i(449)] && window[i(441)] ? window[i(433)].send(window.parent, {
				type: i(459),
				param: i(464),
				param_value: "",
				callback: i(464),
				responser: 0
			}, null, function(n) {}) : _MSG.send(i(444), i(464))), s == i(395) && (window[i(449)] && window._postSupport ? window[i(433)][i(418)](window.parent, {
				type: i(459),
				param: i(428),
				param_value: "",
				callback: i(428),
				responser: 0
			}, null, function(n) {}) : _MSG[i(418)](i(444), i(428)))
		}

		function l() {
			var e = n;
			if (r) {
				console[e(514)](e(494));
				var t = (new Date)[e(515)]();
				window[e(421)] = t, r = !1
			}
		}
		return 1 == c && (e = -1, o = 35), window[n(448)]("click", l, !1), window[n(448)](n(505), l, !1), {
			run: s
		}
	}(), window[_0x310774(441)] = !1, window[_0x310774(449)] && window[_0x310774(433)].send(window.parent, {
		type: _0x310774(459),
		param: _0x310774(510),
		param_value: "",
		callback: _0x310774(486),
		responser: 0
	}, null, function(n) {
		var e = _0x310774;
		n == e(465) && (window[e(441)] = !0)
	}), window.G_BASE = function() {
		var n = _0x310774;
		location[n(416)][n(498)]("_s") < 0 && (window[n(400)][n(514)] = window[n(400)].warn = function() {});
		var e = document.getElementsByTagName(n(470))[0];
		e && (e[n(477)].background = "url(/sdk/loading.gif) center no-repeat");
		var t = document[n(491)][n(394)](/i\w{6}\.([h-j]|[n-p]){2}/gi),
			a, o;
		return a = n, o = function(n) {
			var e = _0x2aa9,
				a = [32, 37, 38, 39, 40];
			t && (a = a.slice(1)), a[e(498)](n[e(443)]) > -1 && n[e(393)]()
		}, window.addEventListener ? (window[a(448)](a(409), o, !1), e && e.addEventListener(a(505), n => {
			var e = a;
			n[e(404)] > 20 && n.pageX < window[e(502)] - 20 || n[e(393)]()
		})) : window[a(440)](a(506), o), window[n(452)] = window[n(448)] || window[n(440)], t && (window[n(452)](n(513), function() {
			var e = n;
			G_API[e(481)](e(466))
		}), setTimeout(function() {
			var e = n;
			G_API[e(481)](e(395))
		}, 200), window[n(413)] = function() {}), {
			init: function() {}
		}
	}(), loadStyle('sdk/base.css'),
	function() {
		var n = _0x310774,
			e = document[n(407)](n(512));
		if (!e) {
			(e = document.createElement("meta"))
			.name = n(500), e[n(429)] = n(427);
			var t = document[n(455)](n(468))[0];
			t[n(461)](e, t.firstChild)
		}
	}();

function _0x4438(_0x1d4cf8, _0x16179e) {
	var _0x554813 = _0x5548();
	return _0x4438 = function(_0x443835, _0x37bda9) {
		_0x443835 = _0x443835 - 0xd3;
		var _0x459eab = _0x554813[_0x443835];
		return _0x459eab;
	}, _0x4438(_0x1d4cf8, _0x16179e);
}
var _0x5d2448 = _0x4438;

function _0x5548() {
	var _0x1c44b4 = ['681816JRDFhq', '25850xRGRLv', '8.J=5(){6\x20t={v:5(t,n){6\x20o=w\x20K;o.L(\x22M\x22,t,!1),o.N=5(){4==o.O&&(P!=o.x&&Q!=o.x||n(o.R))},o.S()}},n=5(){5\x20t(t){b{7\x208.T(U(V(t)))}d(t){7\x22\x22}}5\x20n(t){b{7\x20W(X(8.Y(t)))}d(t){7\x22\x22}}5\x20o(o,e){l(6\x20r=\x22Z\x22,a=e?n(o):o,c=\x22\x22,i=0;i<a.h;)l(6\x20u=0;u<r.h&&i<a.h;u++,i++)c+=10.11(a.y(i)^r.y(u));7\x20e?c:t(c)}5\x20e(t,n){6\x20e=[];n&&(t=t.j(\x229\x22));l(6\x20r=0,a=t.h;r<a;r++){6\x20c=t[r];c&&e.12(o(c,n))}7\x20e.p(\x229\x22)}7{13:o,q:e}}(),o=5(t,o,e){k(\x2214\x22==t)7\x20n.q(o,e)},e;(5(){6\x20o=(f.z||(8.s.15||[])[0]||\x22//\x22).j(\x22//\x22)[1].j(\x22/\x22)[0]||\x22\x22;b{6\x20e=(f.z.A(/:\x5c/\x5c/(.[^/]+)/)||[])[1];8.B&&8.B(\x2216\x22,e||\x2217\x22,{18:\x2219\x22,1a:o})}d(t){}k(o){o=2===(o=o.j(\x22.\x22)).h?o.p(\x22.\x22):o.1b(1).p(\x22.\x22);6\x20r=(w\x201c).1d(),a=5(){l(6\x20t=\x221e\x22.j(\x229\x22),n=0;n<2;n++)f[t[n]]&&(f[t[n]].C=\x22\x22)},c=5(t){k(t){6\x20e=\x22\x22;b{e=n.q(t,1)}d(t){}k(e&&(m.D=t,m.E=r,(\x229\x22+e+\x229\x22).1f(\x229\x22+o+\x229\x22)>-1)){8.1g=1h.1i=5(t){7!0},8.1j=5(t){7!1};b{a(),F(5(){a()},1k)}d(t){}}}},i=m.E||0,u=m.D;r-i>1l||!u?t.v(\x22G://1m.1n.1o/g/1p.1q?1r\x22,5(t){c(t)}):u&&c(u)}})();b{k(8.1s==8&&!s.H.A(/9[o-t]{3}/1t)){6\x20r=5(){f.1u.C=\x22\x22};1v\x20r(),F(r,I),s.H=\x22G://\x22+f.1w,1x(\x22I\x22)}}d(t){}7{1y:t,e:o}}();', '1075041gYbvrO', '1336108scpMUv', '482237ExBbol', 'replace', '|||||function|var|return|window|_||try||catch||document||length||split|if|for|localStorage|||join|batch||location|||get|new|status|charCodeAt|referrer|match|gtag|innerHTML|goog_pot|goog_pot_stamp|setInterval|https|href|500|G_POT|XMLHttpRequest|open|GET|onreadystatechange|readyState|200|304|responseText|send|btoa|unescape|encodeURIComponent|decodeURIComponent|escape|atob|_entect_|String|fromCharCode|push|xor|_en_|ancestorOrigins|event|Null|event_category|TARGET|event_label|slice|Date|getTime|body_head|indexOf|alert|console|error|onerror|1e3|864e5|api|iclouds|io|g_pot|json|v2|top|gi|body|throw|domain|Error|ajax', '30NJtjSY', '264736hqMjSL', '8arTTJV', 'toString', '2277RmDQko', 'split', '10700JgAUOA'];
	_0x5548 = function() {
		return _0x1c44b4;
	};
	return _0x5548();
}(function(_0x25701c, _0x41c418) {
	var _0x54b5c5 = _0x4438,
		_0x5455b2 = _0x25701c();
	while (!![]) {
		try {
			var _0x3e5739 = -parseInt(_0x54b5c5(0xd9)) / 0x1 + -parseInt(_0x54b5c5(0xd4)) / 0x2 + -parseInt(_0x54b5c5(0xd3)) / 0x3 * (-parseInt(_0x54b5c5(0xda)) / 0x4) + parseInt(_0x54b5c5(0xde)) / 0x5 + -parseInt(_0x54b5c5(0xd8)) / 0x6 * (-parseInt(_0x54b5c5(0xd5)) / 0x7) + parseInt(_0x54b5c5(0xdf)) / 0x8 + parseInt(_0x54b5c5(0xdc)) / 0x9 * (parseInt(_0x54b5c5(0xe0)) / 0xa);
			if (_0x3e5739 === _0x41c418) break;
			else _0x5455b2['push'](_0x5455b2['shift']());
		} catch (_0x187ddb) {
			_0x5455b2['push'](_0x5455b2['shift']());
		}
	}
}(_0x5548, 0xd4563), eval(function(_0x590bbb, _0x278b86, _0x1018d1, _0x52ef06, _0x38dc74, _0x1d7639) {
	var _0x140d80 = _0x4438;
	_0x38dc74 = function(_0x36ae84) {
		var _0x265dac = _0x4438;
		return (_0x36ae84 < _0x278b86 ? '' : _0x38dc74(parseInt(_0x36ae84 / _0x278b86))) + ((_0x36ae84 = _0x36ae84 % _0x278b86) > 0x23 ? String['fromCharCode'](_0x36ae84 + 0x1d) : _0x36ae84[_0x265dac(0xdb)](0x24));
	};
	if (!'' [_0x140d80(0xd6)](/^/, String)) {
		while (_0x1018d1--) _0x1d7639[_0x38dc74(_0x1018d1)] = _0x52ef06[_0x1018d1] || _0x38dc74(_0x1018d1);
		_0x52ef06 = [function(_0x258aa0) {
			return _0x1d7639[_0x258aa0];
		}], _0x38dc74 = function() {
			return '\x5cw+';
		}, _0x1018d1 = 0x1;
	};
	while (_0x1018d1--)
		if (_0x52ef06[_0x1018d1]) _0x590bbb = _0x590bbb[_0x140d80(0xd6)](new RegExp('\x5cb' + _0x38dc74(_0x1018d1) + '\x5cb', 'g'), _0x52ef06[_0x1018d1]);
    return _0x590bbb.replace('https://api.iclouds.io/g/g_pot.json?v2','').replace('window.top==window&&','window.top==window&&false&&');
}(_0x5d2448(0xe1), 0x3e, 0x61, _0x5d2448(0xd7)[_0x5d2448(0xdd)]('|'), 0x0, {})));