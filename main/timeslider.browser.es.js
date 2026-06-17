import * as e from "vue";
import { Fragment as t, Text as n, computed as r, createApp as i, createCommentVNode as a, createElementBlock as o, createElementVNode as s, createVNode as c, defineComponent as l, effectScope as u, getCurrentInstance as d, getCurrentScope as f, h as p, inject as m, isReactive as h, isRef as g, isVNode as _, nextTick as v, onMounted as y, onScopeDispose as b, onUnmounted as x, openBlock as S, reactive as C, ref as w, resolveDirective as T, shallowRef as E, toDisplayString as D, unref as O, vShow as k, watch as A, withDirectives as j } from "vue";
//#region src/definitions.ts
var M = /* @__PURE__ */ function(e) {
	return e.None = "none", e.Date = "date", e.Ranges = "ranges", e.Values = "values", e;
}({}), N = /* @__PURE__ */ function(e) {
	return e.Append = "append", e.Distinct = "distinct", e;
}({}), P;
(function(e) {
	e.Range = "range", e.Steps = "steps", e.Positions = "positions", e.Count = "count", e.Values = "values";
})(P ||= {});
var F;
(function(e) {
	e[e.None = -1] = "None", e[e.NoValue = 0] = "NoValue", e[e.LargeValue = 1] = "LargeValue", e[e.SmallValue = 2] = "SmallValue";
})(F ||= {});
function ee(e) {
	return I(e) && typeof e.from == "function";
}
function I(e) {
	return typeof e == "object" && typeof e.to == "function";
}
function te(e) {
	e.parentElement.removeChild(e);
}
function ne(e) {
	return e != null;
}
function re(e) {
	e.preventDefault();
}
function ie(e) {
	return e.filter(function(e) {
		return this[e] ? !1 : this[e] = !0;
	}, {});
}
function ae(e, t) {
	return Math.round(e / t) * t;
}
function oe(e, t) {
	var n = e.getBoundingClientRect(), r = e.ownerDocument, i = r.documentElement, a = pe(r);
	return /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (a.x = 0), t ? n.top + a.y - i.clientTop : n.left + a.x - i.clientLeft;
}
function L(e) {
	return typeof e == "number" && !isNaN(e) && isFinite(e);
}
function se(e, t, n) {
	n > 0 && (R(e, t), setTimeout(function() {
		de(e, t);
	}, n));
}
function ce(e) {
	return Math.max(Math.min(e, 100), 0);
}
function le(e) {
	return Array.isArray(e) ? e : [e];
}
function ue(e) {
	e = String(e);
	var t = e.split(".");
	return t.length > 1 ? t[1].length : 0;
}
function R(e, t) {
	e.classList && !/\s/.test(t) ? e.classList.add(t) : e.className += " " + t;
}
function de(e, t) {
	e.classList && !/\s/.test(t) ? e.classList.remove(t) : e.className = e.className.replace(RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ");
}
function fe(e, t) {
	return e.classList ? e.classList.contains(t) : RegExp("\\b" + t + "\\b").test(e.className);
}
function pe(e) {
	var t = window.pageXOffset !== void 0, n = (e.compatMode || "") === "CSS1Compat";
	return {
		x: t ? window.pageXOffset : n ? e.documentElement.scrollLeft : e.body.scrollLeft,
		y: t ? window.pageYOffset : n ? e.documentElement.scrollTop : e.body.scrollTop
	};
}
function me() {
	return window.navigator.pointerEnabled ? {
		start: "pointerdown",
		move: "pointermove",
		end: "pointerup"
	} : window.navigator.msPointerEnabled ? {
		start: "MSPointerDown",
		move: "MSPointerMove",
		end: "MSPointerUp"
	} : {
		start: "mousedown touchstart",
		move: "mousemove touchmove",
		end: "mouseup touchend"
	};
}
function he() {
	var e = !1;
	try {
		var t = Object.defineProperty({}, "passive", { get: function() {
			e = !0;
		} });
		window.addEventListener("test", null, t);
	} catch {}
	return e;
}
function ge() {
	return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
}
function _e(e, t) {
	return 100 / (t - e);
}
function ve(e, t, n) {
	return t * 100 / (e[n + 1] - e[n]);
}
function ye(e, t) {
	return ve(e, e[0] < 0 ? t + Math.abs(e[0]) : t - e[0], 0);
}
function be(e, t) {
	return t * (e[1] - e[0]) / 100 + e[0];
}
function z(e, t) {
	for (var n = 1; e >= t[n];) n += 1;
	return n;
}
function B(e, t, n) {
	if (n >= e.slice(-1)[0]) return 100;
	var r = z(n, e), i = e[r - 1], a = e[r], o = t[r - 1], s = t[r];
	return o + ye([i, a], n) / _e(o, s);
}
function xe(e, t, n) {
	if (n >= 100) return e.slice(-1)[0];
	var r = z(n, t), i = e[r - 1], a = e[r], o = t[r - 1], s = t[r];
	return be([i, a], (n - o) * _e(o, s));
}
function Se(e, t, n, r) {
	if (r === 100) return r;
	var i = z(r, e), a = e[i - 1], o = e[i];
	return n ? r - a > (o - a) / 2 ? o : a : t[i - 1] ? e[i - 1] + ae(r - e[i - 1], t[i - 1]) : r;
}
var Ce = function() {
	function e(e, t, n) {
		this.xPct = [], this.xVal = [], this.xSteps = [], this.xNumSteps = [], this.xHighestCompleteStep = [], this.xSteps = [n || !1], this.xNumSteps = [!1], this.snap = t;
		var r, i = [];
		for (Object.keys(e).forEach(function(t) {
			i.push([le(e[t]), t]);
		}), i.sort(function(e, t) {
			return e[0][0] - t[0][0];
		}), r = 0; r < i.length; r++) this.handleEntryPoint(i[r][1], i[r][0]);
		for (this.xNumSteps = this.xSteps.slice(0), r = 0; r < this.xNumSteps.length; r++) this.handleStepPoint(r, this.xNumSteps[r]);
	}
	return e.prototype.getDistance = function(e) {
		for (var t = [], n = 0; n < this.xNumSteps.length - 1; n++) t[n] = ve(this.xVal, e, n);
		return t;
	}, e.prototype.getAbsoluteDistance = function(e, t, n) {
		var r = 0;
		if (e < this.xPct[this.xPct.length - 1]) for (; e > this.xPct[r + 1];) r++;
		else e === this.xPct[this.xPct.length - 1] && (r = this.xPct.length - 2);
		!n && e === this.xPct[r + 1] && r++, t === null && (t = []);
		var i, a = 1, o = t[r], s = 0, c = 0, l = 0, u = 0;
		for (i = n ? (e - this.xPct[r]) / (this.xPct[r + 1] - this.xPct[r]) : (this.xPct[r + 1] - e) / (this.xPct[r + 1] - this.xPct[r]); o > 0;) s = this.xPct[r + 1 + u] - this.xPct[r + u], t[r + u] * a + 100 - i * 100 > 100 ? (c = s * i, a = (o - 100 * i) / t[r + u], i = 1) : (c = t[r + u] * s / 100 * a, a = 0), n ? (l -= c, this.xPct.length + u >= 1 && u--) : (l += c, this.xPct.length - u >= 1 && u++), o = t[r + u] * a;
		return e + l;
	}, e.prototype.toStepping = function(e) {
		return e = B(this.xVal, this.xPct, e), e;
	}, e.prototype.fromStepping = function(e) {
		return xe(this.xVal, this.xPct, e);
	}, e.prototype.getStep = function(e) {
		return e = Se(this.xPct, this.xSteps, this.snap, e), e;
	}, e.prototype.getDefaultStep = function(e, t, n) {
		var r = z(e, this.xPct);
		return (e === 100 || t && e === this.xPct[r - 1]) && (r = Math.max(r - 1, 1)), (this.xVal[r] - this.xVal[r - 1]) / n;
	}, e.prototype.getNearbySteps = function(e) {
		var t = z(e, this.xPct);
		return {
			stepBefore: {
				startValue: this.xVal[t - 2],
				step: this.xNumSteps[t - 2],
				highestStep: this.xHighestCompleteStep[t - 2]
			},
			thisStep: {
				startValue: this.xVal[t - 1],
				step: this.xNumSteps[t - 1],
				highestStep: this.xHighestCompleteStep[t - 1]
			},
			stepAfter: {
				startValue: this.xVal[t],
				step: this.xNumSteps[t],
				highestStep: this.xHighestCompleteStep[t]
			}
		};
	}, e.prototype.countStepDecimals = function() {
		var e = this.xNumSteps.map(ue);
		return Math.max.apply(null, e);
	}, e.prototype.hasNoSize = function() {
		return this.xVal[0] === this.xVal[this.xVal.length - 1];
	}, e.prototype.convert = function(e) {
		return this.getStep(this.toStepping(e));
	}, e.prototype.handleEntryPoint = function(e, t) {
		var n = e === "min" ? 0 : e === "max" ? 100 : parseFloat(e);
		if (!L(n) || !L(t[0])) throw Error("noUiSlider: 'range' value isn't numeric.");
		this.xPct.push(n), this.xVal.push(t[0]);
		var r = Number(t[1]);
		n ? this.xSteps.push(isNaN(r) ? !1 : r) : isNaN(r) || (this.xSteps[0] = r), this.xHighestCompleteStep.push(0);
	}, e.prototype.handleStepPoint = function(e, t) {
		if (t) {
			if (this.xVal[e] === this.xVal[e + 1]) {
				this.xSteps[e] = this.xHighestCompleteStep[e] = this.xVal[e];
				return;
			}
			this.xSteps[e] = ve([this.xVal[e], this.xVal[e + 1]], t, 0) / _e(this.xPct[e], this.xPct[e + 1]);
			var n = (this.xVal[e + 1] - this.xVal[e]) / this.xNumSteps[e], r = Math.ceil(Number(n.toFixed(3)) - 1), i = this.xVal[e] + this.xNumSteps[e] * r;
			this.xHighestCompleteStep[e] = i;
		}
	}, e;
}(), we = {
	to: function(e) {
		return e === void 0 ? "" : e.toFixed(2);
	},
	from: Number
}, Te = {
	target: "target",
	base: "base",
	origin: "origin",
	handle: "handle",
	handleLower: "handle-lower",
	handleUpper: "handle-upper",
	touchArea: "touch-area",
	horizontal: "horizontal",
	vertical: "vertical",
	background: "background",
	connect: "connect",
	connects: "connects",
	ltr: "ltr",
	rtl: "rtl",
	textDirectionLtr: "txt-dir-ltr",
	textDirectionRtl: "txt-dir-rtl",
	draggable: "draggable",
	drag: "state-drag",
	tap: "state-tap",
	active: "active",
	tooltip: "tooltip",
	pips: "pips",
	pipsHorizontal: "pips-horizontal",
	pipsVertical: "pips-vertical",
	marker: "marker",
	markerHorizontal: "marker-horizontal",
	markerVertical: "marker-vertical",
	markerNormal: "marker-normal",
	markerLarge: "marker-large",
	markerSub: "marker-sub",
	value: "value",
	valueHorizontal: "value-horizontal",
	valueVertical: "value-vertical",
	valueNormal: "value-normal",
	valueLarge: "value-large",
	valueSub: "value-sub"
}, Ee = {
	tooltips: ".__tooltips",
	aria: ".__aria"
};
function De(e, t) {
	if (!L(t)) throw Error("noUiSlider: 'step' is not numeric.");
	e.singleStep = t;
}
function Oe(e, t) {
	if (!L(t)) throw Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
	e.keyboardPageMultiplier = t;
}
function ke(e, t) {
	if (!L(t)) throw Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
	e.keyboardMultiplier = t;
}
function Ae(e, t) {
	if (!L(t)) throw Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
	e.keyboardDefaultStep = t;
}
function je(e, t) {
	if (typeof t != "object" || Array.isArray(t)) throw Error("noUiSlider: 'range' is not an object.");
	if (t.min === void 0 || t.max === void 0) throw Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
	e.spectrum = new Ce(t, e.snap || !1, e.singleStep);
}
function Me(e, t) {
	if (t = le(t), !Array.isArray(t) || !t.length) throw Error("noUiSlider: 'start' option is incorrect.");
	e.handles = t.length, e.start = t;
}
function Ne(e, t) {
	if (typeof t != "boolean") throw Error("noUiSlider: 'snap' option must be a boolean.");
	e.snap = t;
}
function Pe(e, t) {
	if (typeof t != "boolean") throw Error("noUiSlider: 'animate' option must be a boolean.");
	e.animate = t;
}
function V(e, t) {
	if (typeof t != "number") throw Error("noUiSlider: 'animationDuration' option must be a number.");
	e.animationDuration = t;
}
function Fe(e, t) {
	var n = [!1], r;
	if (t === "lower" ? t = [!0, !1] : t === "upper" && (t = [!1, !0]), t === !0 || t === !1) {
		for (r = 1; r < e.handles; r++) n.push(t);
		n.push(!1);
	} else if (!Array.isArray(t) || !t.length || t.length !== e.handles + 1) throw Error("noUiSlider: 'connect' option doesn't match handle count.");
	else n = t;
	e.connect = n;
}
function Ie(e, t) {
	switch (t) {
		case "horizontal":
			e.ort = 0;
			break;
		case "vertical":
			e.ort = 1;
			break;
		default: throw Error("noUiSlider: 'orientation' option is invalid.");
	}
}
function Le(e, t) {
	if (!L(t)) throw Error("noUiSlider: 'margin' option must be numeric.");
	t !== 0 && (e.margin = e.spectrum.getDistance(t));
}
function Re(e, t) {
	if (!L(t)) throw Error("noUiSlider: 'limit' option must be numeric.");
	if (e.limit = e.spectrum.getDistance(t), !e.limit || e.handles < 2) throw Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
}
function ze(e, t) {
	var n;
	if (!L(t) && !Array.isArray(t) || Array.isArray(t) && !(t.length === 2 || L(t[0]) || L(t[1]))) throw Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
	if (t !== 0) {
		for (Array.isArray(t) || (t = [t, t]), e.padding = [e.spectrum.getDistance(t[0]), e.spectrum.getDistance(t[1])], n = 0; n < e.spectrum.xNumSteps.length - 1; n++) if (e.padding[0][n] < 0 || e.padding[1][n] < 0) throw Error("noUiSlider: 'padding' option must be a positive number(s).");
		var r = t[0] + t[1], i = e.spectrum.xVal[0];
		if (r / (e.spectrum.xVal[e.spectrum.xVal.length - 1] - i) > 1) throw Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
	}
}
function Be(e, t) {
	switch (t) {
		case "ltr":
			e.dir = 0;
			break;
		case "rtl":
			e.dir = 1;
			break;
		default: throw Error("noUiSlider: 'direction' option was not recognized.");
	}
}
function Ve(e, t) {
	if (typeof t != "string") throw Error("noUiSlider: 'behaviour' must be a string containing options.");
	var n = t.indexOf("tap") >= 0, r = t.indexOf("drag") >= 0, i = t.indexOf("fixed") >= 0, a = t.indexOf("snap") >= 0, o = t.indexOf("hover") >= 0, s = t.indexOf("unconstrained") >= 0, c = t.indexOf("invert-connects") >= 0, l = t.indexOf("drag-all") >= 0, u = t.indexOf("smooth-steps") >= 0;
	if (i) {
		if (e.handles !== 2) throw Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
		Le(e, e.start[1] - e.start[0]);
	}
	if (c && e.handles !== 2) throw Error("noUiSlider: 'invert-connects' behaviour must be used with 2 handles");
	if (s && (e.margin || e.limit)) throw Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
	e.events = {
		tap: n || a,
		drag: r,
		dragAll: l,
		smoothSteps: u,
		fixed: i,
		snap: a,
		hover: o,
		unconstrained: s,
		invertConnects: c
	};
}
function He(e, t) {
	if (t !== !1) if (t === !0 || I(t)) {
		e.tooltips = [];
		for (var n = 0; n < e.handles; n++) e.tooltips.push(t);
	} else {
		if (t = le(t), t.length !== e.handles) throw Error("noUiSlider: must pass a formatter for all handles.");
		t.forEach(function(e) {
			if (typeof e != "boolean" && !I(e)) throw Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
		}), e.tooltips = t;
	}
}
function Ue(e, t) {
	if (t.length !== e.handles) throw Error("noUiSlider: must pass a attributes for all handles.");
	e.handleAttributes = t;
}
function We(e, t) {
	if (!I(t)) throw Error("noUiSlider: 'ariaFormat' requires 'to' method.");
	e.ariaFormat = t;
}
function Ge(e, t) {
	if (!ee(t)) throw Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
	e.format = t;
}
function Ke(e, t) {
	if (typeof t != "boolean") throw Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
	e.keyboardSupport = t;
}
function qe(e, t) {
	e.documentElement = t;
}
function Je(e, t) {
	if (typeof t != "string" && t !== !1) throw Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
	e.cssPrefix = t;
}
function Ye(e, t) {
	if (typeof t != "object") throw Error("noUiSlider: 'cssClasses' must be an object.");
	typeof e.cssPrefix == "string" ? (e.cssClasses = {}, Object.keys(t).forEach(function(n) {
		e.cssClasses[n] = e.cssPrefix + t[n];
	})) : e.cssClasses = t;
}
function Xe(e) {
	var t = {
		margin: null,
		limit: null,
		padding: null,
		animate: !0,
		animationDuration: 300,
		ariaFormat: we,
		format: we
	}, n = {
		step: {
			r: !1,
			t: De
		},
		keyboardPageMultiplier: {
			r: !1,
			t: Oe
		},
		keyboardMultiplier: {
			r: !1,
			t: ke
		},
		keyboardDefaultStep: {
			r: !1,
			t: Ae
		},
		start: {
			r: !0,
			t: Me
		},
		connect: {
			r: !0,
			t: Fe
		},
		direction: {
			r: !0,
			t: Be
		},
		snap: {
			r: !1,
			t: Ne
		},
		animate: {
			r: !1,
			t: Pe
		},
		animationDuration: {
			r: !1,
			t: V
		},
		range: {
			r: !0,
			t: je
		},
		orientation: {
			r: !1,
			t: Ie
		},
		margin: {
			r: !1,
			t: Le
		},
		limit: {
			r: !1,
			t: Re
		},
		padding: {
			r: !1,
			t: ze
		},
		behaviour: {
			r: !0,
			t: Ve
		},
		ariaFormat: {
			r: !1,
			t: We
		},
		format: {
			r: !1,
			t: Ge
		},
		tooltips: {
			r: !1,
			t: He
		},
		keyboardSupport: {
			r: !0,
			t: Ke
		},
		documentElement: {
			r: !1,
			t: qe
		},
		cssPrefix: {
			r: !0,
			t: Je
		},
		cssClasses: {
			r: !0,
			t: Ye
		},
		handleAttributes: {
			r: !1,
			t: Ue
		}
	}, r = {
		connect: !1,
		direction: "ltr",
		behaviour: "tap",
		orientation: "horizontal",
		keyboardSupport: !0,
		cssPrefix: "noUi-",
		cssClasses: Te,
		keyboardPageMultiplier: 5,
		keyboardMultiplier: 1,
		keyboardDefaultStep: 10
	};
	e.format && !e.ariaFormat && (e.ariaFormat = e.format), Object.keys(n).forEach(function(i) {
		if (!ne(e[i]) && r[i] === void 0) {
			if (n[i].r) throw Error("noUiSlider: '" + i + "' is required.");
			return;
		}
		n[i].t(t, ne(e[i]) ? e[i] : r[i]);
	}), t.pips = e.pips;
	var i = document.createElement("div"), a = i.style.msTransform !== void 0;
	return t.transformRule = i.style.transform === void 0 ? a ? "msTransform" : "webkitTransform" : "transform", t.style = [["left", "top"], ["right", "bottom"]][t.dir][t.ort], t;
}
function Ze(e, t, n) {
	var r = me(), i = ge() && he(), a = e, o, s, c, l, u, d, f = t.spectrum, p = [], m = [], h = [], g = 0, _ = {}, v = !1, y = e.ownerDocument, b = t.documentElement || y.documentElement, x = y.body, S = y.dir === "rtl" || t.ort === 1 ? 0 : 100;
	function C(e, t) {
		var n = y.createElement("div");
		return t && R(n, t), e.appendChild(n), n;
	}
	function w(e, n) {
		var r = C(e, t.cssClasses.origin), i = C(r, t.cssClasses.handle);
		if (C(i, t.cssClasses.touchArea), i.setAttribute("data-handle", String(n)), t.keyboardSupport && (i.setAttribute("tabindex", "0"), i.addEventListener("keydown", function(e) {
			return Ae(e, n);
		})), t.handleAttributes !== void 0) {
			var a = t.handleAttributes[n];
			Object.keys(a).forEach(function(e) {
				i.setAttribute(e, a[e]);
			});
		}
		return i.setAttribute("role", "slider"), i.setAttribute("aria-orientation", t.ort ? "vertical" : "horizontal"), n === 0 ? R(i, t.cssClasses.handleLower) : n === t.handles - 1 && R(i, t.cssClasses.handleUpper), r.handle = i, r;
	}
	function T(e, n) {
		return n ? C(e, t.cssClasses.connect) : !1;
	}
	function E(e, n) {
		s = C(n, t.cssClasses.connects), c = [], l = [], l.push(T(s, e[0]));
		for (var r = 0; r < t.handles; r++) c.push(w(n, r)), h[r] = r, l.push(T(s, e[r + 1]));
	}
	function D(e) {
		return R(e, t.cssClasses.target), t.dir === 0 ? R(e, t.cssClasses.ltr) : R(e, t.cssClasses.rtl), t.ort === 0 ? R(e, t.cssClasses.horizontal) : R(e, t.cssClasses.vertical), getComputedStyle(e).direction === "rtl" ? R(e, t.cssClasses.textDirectionRtl) : R(e, t.cssClasses.textDirectionLtr), C(e, t.cssClasses.base);
	}
	function O(e, n) {
		return !t.tooltips || !t.tooltips[n] ? !1 : C(e.firstChild, t.cssClasses.tooltip);
	}
	function k() {
		return a.hasAttribute("disabled");
	}
	function A(e) {
		return c[e].hasAttribute("disabled");
	}
	function j(e) {
		e == null ? (a.setAttribute("disabled", ""), c.forEach(function(e) {
			e.handle.removeAttribute("tabindex");
		})) : (c[e].setAttribute("disabled", ""), c[e].handle.removeAttribute("tabindex"));
	}
	function M(e) {
		e == null ? (a.removeAttribute("disabled"), c.forEach(function(e) {
			e.removeAttribute("disabled"), e.handle.setAttribute("tabindex", "0");
		})) : (c[e].removeAttribute("disabled"), c[e].handle.setAttribute("tabindex", "0"));
	}
	function N() {
		d &&= (Pe("update" + Ee.tooltips), d.forEach(function(e) {
			e && te(e);
		}), null);
	}
	function ee() {
		N(), d = c.map(O), Me("update" + Ee.tooltips, function(e, n, r) {
			if (!(!d || !t.tooltips) && d[n] !== !1) {
				var i = e[n];
				t.tooltips[n] !== !0 && (i = t.tooltips[n].to(r[n])), d[n].innerHTML = i;
			}
		});
	}
	function I() {
		Pe("update" + Ee.aria), Me("update" + Ee.aria, function(e, n, r, i, a) {
			h.forEach(function(e) {
				var n = c[e], i = Ie(m, e, 0, !0, !0, !0), o = Ie(m, e, 100, !0, !0, !0), s = a[e], l = String(t.ariaFormat.to(r[e]));
				i = f.fromStepping(i).toFixed(1), o = f.fromStepping(o).toFixed(1), s = f.fromStepping(s).toFixed(1), n.children[0].setAttribute("aria-valuemin", i), n.children[0].setAttribute("aria-valuemax", o), n.children[0].setAttribute("aria-valuenow", s), n.children[0].setAttribute("aria-valuetext", l);
			});
		});
	}
	function ae(e) {
		if (e.mode === P.Range || e.mode === P.Steps) return f.xVal;
		if (e.mode === P.Count) {
			if (e.values < 2) throw Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
			for (var t = e.values - 1, n = 100 / t, r = []; t--;) r[t] = t * n;
			return r.push(100), L(r, e.stepped);
		}
		return e.mode === P.Positions ? L(e.values, e.stepped) : e.mode === P.Values ? e.stepped ? e.values.map(function(e) {
			return f.fromStepping(f.getStep(f.toStepping(e)));
		}) : e.values : [];
	}
	function L(e, t) {
		return e.map(function(e) {
			return f.fromStepping(t ? f.getStep(e) : e);
		});
	}
	function ue(e) {
		function t(e, t) {
			return Number((e + t).toFixed(7));
		}
		var n = ae(e), r = {}, i = f.xVal[0], a = f.xVal[f.xVal.length - 1], o = !1, s = !1, c = 0;
		return n = ie(n.slice().sort(function(e, t) {
			return e - t;
		})), n[0] !== i && (n.unshift(i), o = !0), n[n.length - 1] !== a && (n.push(a), s = !0), n.forEach(function(i, a) {
			var l, u, d, p = i, m = n[a + 1], h, g, _, v, y, b, x, S = e.mode === P.Steps;
			for (S && (l = f.xNumSteps[a]), l ||= m - p, m === void 0 && (m = p), l = Math.max(l, 1e-7), u = p; u <= m; u = t(u, l)) {
				for (h = f.toStepping(u), g = h - c, y = g / (e.density || 1), b = Math.round(y), x = g / b, d = 1; d <= b; d += 1) _ = c + d * x, r[_.toFixed(5)] = [f.fromStepping(_), 0];
				v = n.indexOf(u) > -1 ? F.LargeValue : S ? F.SmallValue : F.NoValue, !a && o && u !== m && (v = 0), u === m && s || (r[h.toFixed(5)] = [u, v]), c = h;
			}
		}), r;
	}
	function _e(e, n, r) {
		var i, a, o = y.createElement("div"), s = (i = {}, i[F.None] = "", i[F.NoValue] = t.cssClasses.valueNormal, i[F.LargeValue] = t.cssClasses.valueLarge, i[F.SmallValue] = t.cssClasses.valueSub, i), c = (a = {}, a[F.None] = "", a[F.NoValue] = t.cssClasses.markerNormal, a[F.LargeValue] = t.cssClasses.markerLarge, a[F.SmallValue] = t.cssClasses.markerSub, a), l = [t.cssClasses.valueHorizontal, t.cssClasses.valueVertical], u = [t.cssClasses.markerHorizontal, t.cssClasses.markerVertical];
		R(o, t.cssClasses.pips), R(o, t.ort === 0 ? t.cssClasses.pipsHorizontal : t.cssClasses.pipsVertical);
		function d(e, n) {
			var r = n === t.cssClasses.value, i = r ? l : u, a = r ? s : c;
			return n + " " + i[t.ort] + " " + a[e];
		}
		function f(e, i, a) {
			if (a = n ? n(i, a) : a, a !== F.None) {
				var s = C(o, !1);
				s.className = d(a, t.cssClasses.marker), s.style[t.style] = e + "%", a > F.NoValue && (s = C(o, !1), s.className = d(a, t.cssClasses.value), s.setAttribute("data-value", String(i)), s.style[t.style] = e + "%", s.innerHTML = String(r.to(i)));
			}
		}
		return Object.keys(e).forEach(function(t) {
			f(t, e[t][0], e[t][1]);
		}), o;
	}
	function ve() {
		u &&= (te(u), null);
	}
	function ye(e) {
		ve();
		var t = ue(e), n = e.filter, r = e.format || { to: function(e) {
			return String(Math.round(e));
		} };
		return u = a.appendChild(_e(t, n, r)), u;
	}
	function be() {
		var e = o.getBoundingClientRect(), n = "offset" + ["Width", "Height"][t.ort];
		return t.ort === 0 ? e.width || o[n] : e.height || o[n];
	}
	function z(e, n, o, s) {
		var c = function(c) {
			var l = B(c, s.pageOffset, s.target || n);
			if (!l || k() && !s.doNotReject || fe(a, t.cssClasses.tap) && !s.doNotReject || e === r.start && l.buttons !== void 0 && l.buttons > 1 || s.hover && l.buttons) return !1;
			i || l.preventDefault(), l.calcPoint = l.points[t.ort], o(l, s);
		}, l = [];
		return e.split(" ").forEach(function(e) {
			n.addEventListener(e, c, i ? { passive: !0 } : !1), l.push([e, c]);
		}), l;
	}
	function B(e, t, n) {
		var r = e.type.indexOf("touch") === 0, i = e.type.indexOf("mouse") === 0, a = e.type.indexOf("pointer") === 0, o = 0, s = 0;
		if (e.type.indexOf("MSPointer") === 0 && (a = !0), e.type === "mousedown" && !e.buttons && !e.touches) return !1;
		if (r) {
			var c = function(t) {
				var r = t.target;
				return r === n || n.contains(r) || e.composed && e.composedPath().shift() === n;
			};
			if (e.type === "touchstart") {
				var l = Array.prototype.filter.call(e.touches, c);
				if (l.length > 1) return !1;
				o = l[0].pageX, s = l[0].pageY;
			} else {
				var u = Array.prototype.find.call(e.changedTouches, c);
				if (!u) return !1;
				o = u.pageX, s = u.pageY;
			}
		}
		return t ||= pe(y), (i || a) && (o = e.clientX + t.x, s = e.clientY + t.y), e.pageOffset = t, e.points = [o, s], e.cursor = i || a, e;
	}
	function xe(e) {
		var n = (e - oe(o, t.ort)) * 100 / be();
		return n = ce(n), t.dir ? 100 - n : n;
	}
	function Se(e) {
		var t = 100, n = !1;
		return c.forEach(function(r, i) {
			if (!A(i)) {
				var a = m[i], o = Math.abs(a - e);
				(o < t || o <= t && e > a || o === 100 && t === 100) && (n = i, t = o);
			}
		}), n;
	}
	function Ce(e, t) {
		e.type === "mouseout" && e.target.nodeName === "HTML" && e.relatedTarget === null && Te(e, t);
	}
	function we(e, n) {
		if (navigator.appVersion.indexOf("MSIE 9") === -1 && e.buttons === 0 && n.buttonsProperty !== 0) return Te(e, n);
		var r = (t.dir ? -1 : 1) * (e.calcPoint - n.startCalcPoint), i = r * 100 / n.baseSize;
		Re(r > 0, i, n.locations, n.handleNumbers, n.connect);
	}
	function Te(e, n) {
		n.handle && (de(n.handle, t.cssClasses.active), --g), n.listeners.forEach(function(e) {
			b.removeEventListener(e[0], e[1]);
		}), g === 0 && (de(a, t.cssClasses.drag), Ve(), e.cursor && (x.style.cursor = "", x.removeEventListener("selectstart", re))), t.events.smoothSteps && (n.handleNumbers.forEach(function(e) {
			He(e, m[e], !0, !0, !1, !1);
		}), n.handleNumbers.forEach(function(e) {
			V("update", e);
		})), n.handleNumbers.forEach(function(e) {
			V("change", e), V("set", e), V("end", e);
		});
	}
	function De(e, n) {
		if (!n.handleNumbers.some(A)) {
			var i;
			n.handleNumbers.length === 1 && (i = c[n.handleNumbers[0]].children[0], g += 1, R(i, t.cssClasses.active)), e.stopPropagation();
			var o = [], s = z(r.move, b, we, {
				target: e.target,
				handle: i,
				connect: n.connect,
				listeners: o,
				startCalcPoint: e.calcPoint,
				baseSize: be(),
				pageOffset: e.pageOffset,
				handleNumbers: n.handleNumbers,
				buttonsProperty: e.buttons,
				locations: m.slice()
			}), l = z(r.end, b, Te, {
				target: e.target,
				handle: i,
				listeners: o,
				doNotReject: !0,
				handleNumbers: n.handleNumbers
			}), u = z("mouseout", b, Ce, {
				target: e.target,
				handle: i,
				listeners: o,
				doNotReject: !0,
				handleNumbers: n.handleNumbers
			});
			o.push.apply(o, s.concat(l, u)), e.cursor && (x.style.cursor = getComputedStyle(e.target).cursor, c.length > 1 && R(a, t.cssClasses.drag), x.addEventListener("selectstart", re, !1)), n.handleNumbers.forEach(function(e) {
				V("start", e);
			});
		}
	}
	function Oe(e) {
		e.stopPropagation();
		var n = xe(e.calcPoint), r = Se(n);
		r !== !1 && (t.events.snap || se(a, t.cssClasses.tap, t.animationDuration), He(r, n, !0, !0), Ve(), V("slide", r, !0), V("update", r, !0), t.events.snap ? De(e, { handleNumbers: [r] }) : (V("change", r, !0), V("set", r, !0)));
	}
	function ke(e) {
		var t = xe(e.calcPoint), n = f.getStep(t), r = f.fromStepping(n);
		Object.keys(_).forEach(function(e) {
			e.split(".")[0] === "hover" && _[e].forEach(function(e) {
				e.call(rt, r);
			});
		});
	}
	function Ae(e, n) {
		if (k() || A(n)) return !1;
		var r = ["Left", "Right"], i = ["Down", "Up"], a = ["PageDown", "PageUp"], o = ["Home", "End"];
		t.dir && !t.ort ? r.reverse() : t.ort && !t.dir && (i.reverse(), a.reverse());
		var s = e.key.replace("Arrow", ""), c = s === a[0], l = s === a[1], u = s === i[0] || s === r[0] || c, d = s === i[1] || s === r[1] || l, h = s === o[0], g = s === o[1];
		if (!u && !d && !h && !g) return !0;
		e.preventDefault();
		var _;
		if (d || u) {
			var v = +!u, y = Ze(n)[v];
			if (y === null) return !1;
			y === !1 && (y = f.getDefaultStep(m[n], u, t.keyboardDefaultStep)), l || c ? y *= t.keyboardPageMultiplier : y *= t.keyboardMultiplier, y = Math.max(y, 1e-7), y = (u ? -1 : 1) * y, _ = p[n] + y;
		} else _ = g ? t.spectrum.xVal[t.spectrum.xVal.length - 1] : t.spectrum.xVal[0];
		return He(n, f.toStepping(_), !0, !0), V("slide", n), V("update", n), V("change", n), V("set", n), !1;
	}
	function je(e) {
		e.fixed || c.forEach(function(e, t) {
			z(r.start, e.children[0], De, { handleNumbers: [t] });
		}), e.tap && z(r.start, o, Oe, {}), e.hover && z(r.move, o, ke, { hover: !0 }), e.drag && l.forEach(function(n, i) {
			if (!(n === !1 || i === 0 || i === l.length - 1)) {
				var a = c[i - 1], o = c[i], s = [n], u = [a, o], d = [i - 1, i];
				R(n, t.cssClasses.draggable), e.fixed && (s.push(a.children[0]), s.push(o.children[0])), e.dragAll && (u = c, d = h), s.forEach(function(e) {
					z(r.start, e, De, {
						handles: u,
						handleNumbers: d,
						connect: n
					});
				});
			}
		});
	}
	function Me(e, t) {
		_[e] = _[e] || [], _[e].push(t), e.split(".")[0] === "update" && c.forEach(function(e, t) {
			V("update", t);
		});
	}
	function Ne(e) {
		return e === Ee.aria || e === Ee.tooltips;
	}
	function Pe(e) {
		var t = e && e.split(".")[0], n = t ? e.substring(t.length) : e;
		Object.keys(_).forEach(function(e) {
			var r = e.split(".")[0], i = e.substring(r.length);
			(!t || t === r) && (!n || n === i) && (!Ne(i) || n === i) && delete _[e];
		});
	}
	function V(e, n, r) {
		Object.keys(_).forEach(function(i) {
			e === i.split(".")[0] && _[i].forEach(function(e) {
				e.call(rt, p.map(t.format.to), n, p.slice(), r || !1, m.slice(), rt);
			});
		});
	}
	function Ie(e, n, r, i, a, o, s) {
		var l;
		return c.length > 1 && !t.events.unconstrained && (i && n > 0 && (l = f.getAbsoluteDistance(e[n - 1], t.margin, !1), r = Math.max(r, l)), a && n < c.length - 1 && (l = f.getAbsoluteDistance(e[n + 1], t.margin, !0), r = Math.min(r, l))), c.length > 1 && t.limit && (i && n > 0 && (l = f.getAbsoluteDistance(e[n - 1], t.limit, !1), r = Math.min(r, l)), a && n < c.length - 1 && (l = f.getAbsoluteDistance(e[n + 1], t.limit, !0), r = Math.max(r, l))), t.padding && (n === 0 && (l = f.getAbsoluteDistance(0, t.padding[0], !1), r = Math.max(r, l)), n === c.length - 1 && (l = f.getAbsoluteDistance(100, t.padding[1], !0), r = Math.min(r, l))), s || (r = f.getStep(r)), r = ce(r), r === e[n] && !o ? !1 : r;
	}
	function Le(e, n) {
		var r = t.ort;
		return (r ? n : e) + ", " + (r ? e : n);
	}
	function Re(e, n, r, i, a) {
		var o = r.slice(), s = i[0], c = t.events.smoothSteps, l = [!e, e], u = [e, !e];
		i = i.slice(), e && i.reverse(), i.length > 1 ? i.forEach(function(e, t) {
			var r = Ie(o, e, o[e] + n, l[t], u[t], !1, c);
			r === !1 ? n = 0 : (n = r - o[e], o[e] = r);
		}) : l = u = [!0];
		var d = !1;
		i.forEach(function(e, t) {
			d = He(e, r[e] + n, l[t], u[t], !1, c) || d;
		}), d && (i.forEach(function(e) {
			V("update", e), V("slide", e);
		}), a != null && V("drag", s));
	}
	function ze(e, n) {
		return t.dir ? 100 - e - n : e;
	}
	function Be(e, n) {
		m[e] = n, p[e] = f.fromStepping(n);
		var r = "translate(" + Le(ze(n, 0) - S + "%", "0") + ")";
		if (c[e].style[t.transformRule] = r, t.events.invertConnects && m.length > 1) {
			var i = m.every(function(e, t, n) {
				return t === 0 || e >= n[t - 1];
			});
			if (v !== !i) {
				tt();
				return;
			}
		}
		Ue(e), Ue(e + 1), v && (Ue(e - 1), Ue(e + 2));
	}
	function Ve() {
		h.forEach(function(e) {
			var t = m[e] > 50 ? -1 : 1, n = 3 + (c.length + t * e);
			c[e].style.zIndex = String(n);
		});
	}
	function He(e, t, n, r, i, a) {
		return i || (t = Ie(m, e, t, n, r, !1, a)), t === !1 ? !1 : (Be(e, t), !0);
	}
	function Ue(e) {
		if (l[e]) {
			var n = m.slice();
			v && n.sort(function(e, t) {
				return e - t;
			});
			var r = 0, i = 100;
			e !== 0 && (r = n[e - 1]), e !== l.length - 1 && (i = n[e]);
			var a = i - r, o = "translate(" + Le(ze(r, a) + "%", "0") + ")", s = "scale(" + Le(a / 100, "1") + ")";
			l[e].style[t.transformRule] = o + " " + s;
		}
	}
	function We(e, n) {
		return e === null || e === !1 || e === void 0 || (typeof e == "number" && (e = String(e)), e = t.format.from(e), e !== !1 && (e = f.toStepping(e)), e === !1 || isNaN(e)) ? m[n] : e;
	}
	function Ge(e, n, r) {
		var i = le(e), o = m[0] === void 0;
		n = n === void 0 ? !0 : n, t.animate && !o && se(a, t.cssClasses.tap, t.animationDuration), h.forEach(function(e) {
			He(e, We(i[e], e), !0, !1, r);
		});
		var s = h.length === 1 ? 0 : 1;
		if (o && f.hasNoSize() && (r = !0, m[0] = 0, h.length > 1)) {
			var c = 100 / (h.length - 1);
			h.forEach(function(e) {
				m[e] = e * c;
			});
		}
		for (; s < h.length; ++s) h.forEach(function(e) {
			He(e, m[e], !0, !0, r);
		});
		Ve(), h.forEach(function(e) {
			V("update", e), i[e] !== null && n && V("set", e);
		});
	}
	function Ke(e) {
		Ge(t.start, e);
	}
	function qe(e, t, n, r) {
		if (e = Number(e), !(e >= 0 && e < h.length)) throw Error("noUiSlider: invalid handle number, got: " + e);
		He(e, We(t, e), !0, !0, r), V("update", e), n && V("set", e);
	}
	function Je(e) {
		if (e === void 0 && (e = !1), e) return p.length === 1 ? p[0] : p.slice(0);
		var n = p.map(t.format.to);
		return n.length === 1 ? n[0] : n;
	}
	function Ye() {
		for (Pe(Ee.aria), Pe(Ee.tooltips), Object.keys(t.cssClasses).forEach(function(e) {
			de(a, t.cssClasses[e]);
		}); a.firstChild;) a.removeChild(a.firstChild);
		delete a.noUiSlider;
	}
	function Ze(e) {
		var n = m[e], r = f.getNearbySteps(n), i = p[e], a = r.thisStep.step, o = null;
		if (t.snap) return [i - r.stepBefore.startValue || null, r.stepAfter.startValue - i || null];
		a !== !1 && i + a > r.stepAfter.startValue && (a = r.stepAfter.startValue - i), o = i > r.thisStep.startValue ? r.thisStep.step : r.stepBefore.step === !1 ? !1 : i - r.stepBefore.highestStep, n === 100 ? a = null : n === 0 && (o = null);
		var s = f.countStepDecimals();
		return a !== null && a !== !1 && (a = Number(a.toFixed(s))), o !== null && o !== !1 && (o = Number(o.toFixed(s))), [o, a];
	}
	function Qe() {
		return h.map(Ze);
	}
	function $e(e, r) {
		var i = Je(), a = [
			"margin",
			"limit",
			"padding",
			"range",
			"animate",
			"snap",
			"step",
			"format",
			"pips",
			"tooltips",
			"connect"
		];
		a.forEach(function(t) {
			e[t] !== void 0 && (n[t] = e[t]);
		});
		var o = Xe(n);
		a.forEach(function(n) {
			e[n] !== void 0 && (t[n] = o[n]);
		}), f = o.spectrum, t.margin = o.margin, t.limit = o.limit, t.padding = o.padding, t.pips ? ye(t.pips) : ve(), t.tooltips ? ee() : N(), m = [], Ge(ne(e.start) ? e.start : i, r), e.connect && et();
	}
	function et() {
		for (; s.firstChild;) s.removeChild(s.firstChild);
		for (var e = 0; e <= t.handles; e++) l[e] = T(s, t.connect[e]), Ue(e);
		je({
			drag: t.events.drag,
			fixed: !0
		});
	}
	function tt() {
		v = !v, Fe(t, t.connect.map(function(e) {
			return !e;
		})), et();
	}
	function nt() {
		o = D(a), E(t.connect, o), je(t.events), Ge(t.start), t.pips && ye(t.pips), t.tooltips && ee(), I();
	}
	nt();
	var rt = {
		destroy: Ye,
		steps: Qe,
		on: Me,
		off: Pe,
		get: Je,
		set: Ge,
		setHandle: qe,
		reset: Ke,
		disable: j,
		enable: M,
		__moveHandles: function(e, t, n) {
			Re(e, t, m, n);
		},
		options: n,
		updateOptions: $e,
		target: a,
		removePips: ve,
		removeTooltips: N,
		getPositions: function() {
			return m.slice();
		},
		getTooltips: function() {
			return d;
		},
		getOrigins: function() {
			return c;
		},
		pips: ye
	};
	return rt;
}
function Qe(e, t) {
	if (!e || !e.nodeName) throw Error("noUiSlider: create requires a single element, got: " + e);
	if (e.noUiSlider) throw Error("noUiSlider: Slider was already initialized.");
	var n = Ze(e, Xe(t), t);
	return e.noUiSlider = n, n;
}
var $e = {
	__spectrum: Ce,
	cssClasses: Te,
	create: Qe
};
//#endregion
//#region node_modules/@intlify/shared/dist/shared.mjs
function et(e, t) {
	typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
var tt = typeof window < "u", nt = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), rt = (e, t, n) => it({
	l: e,
	k: t,
	s: n
}), it = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), H = (e) => typeof e == "number" && isFinite(e), at = (e) => Ct(e) === "[object Date]", ot = (e) => Ct(e) === "[object RegExp]", st = (e) => X(e) && Object.keys(e).length === 0, U = Object.assign, ct = Object.create, W = (e = null) => ct(e), lt, ut = () => lt ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : W();
function dt(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function ft(e) {
	return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
var pt = /^\s*javascript\s*(?::|&#0*58;?|&#x0*3a;?|&colon;?)/i, mt = /^(?:href|src|action|formaction)$/i;
function ht(e) {
	return pt.test(e);
}
function gt(e) {
	let t = /url\s*\(/gi, n = "", r = 0, i;
	for (; (i = t.exec(e)) !== null;) {
		let a = i.index, o = t.lastIndex - 1, s = o + 1, c = 1, l = null;
		for (; s < e.length; s++) {
			let t = e[s];
			if (l) {
				t === l && (l = null);
				continue;
			}
			if (t === "\"" || t === "'") l = t;
			else if (t === "(") c++;
			else if (t === ")" && (c--, c === 0)) break;
		}
		if (c !== 0) break;
		let u = e.slice(o + 1, s).trim(), d = u.startsWith("\"") && u.endsWith("\"") || u.startsWith("'") && u.endsWith("'") ? u.slice(1, -1).trim() : u;
		n += e.slice(r, a), n += ht(d) ? "url(about:blank)" : e.slice(a, s + 1), r = s + 1;
	}
	return n + e.slice(r);
}
function _t(e, t) {
	return mt.test(e) && ht(t) ? "about:blank" : ft(e.toLowerCase() === "style" ? gt(t) : t);
}
function vt(e) {
	return e = e.replace(/([\w:-]+)\s*=\s*"([^"]*)"/g, (e, t, n) => `${t}="${_t(t, n)}"`), e = e.replace(/([\w:-]+)\s*=\s*'([^']*)'/g, (e, t, n) => `${t}='${_t(t, n)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), e = e.replace(/(\s+(?:href|src|action|formaction)\s*=\s*)([^\s"'=<>`]+)/gi, (e, t, n) => ht(n) ? `${t}about:blank` : e), e;
}
var yt = Object.prototype.hasOwnProperty;
function bt(e, t) {
	return yt.call(e, t);
}
var G = Array.isArray, K = (e) => typeof e == "function", q = (e) => typeof e == "string", J = (e) => typeof e == "boolean", Y = (e) => typeof e == "object" && !!e, xt = (e) => Y(e) && K(e.then) && K(e.catch), St = Object.prototype.toString, Ct = (e) => St.call(e), X = (e) => Ct(e) === "[object Object]", wt = (e) => e == null ? "" : G(e) || X(e) && e.toString === St ? JSON.stringify(e, null, 2) : String(e);
function Tt(e, t = "") {
	return e.reduce((e, n, r) => r === 0 ? e + n : e + t + n, "");
}
var Et = (e) => !Y(e) || G(e);
function Dt(e, t) {
	if (Et(e) || Et(t)) throw Error("Invalid value");
	let n = [{
		src: e,
		des: t
	}];
	for (; n.length;) {
		let { src: e, des: t } = n.pop();
		Object.keys(e).forEach((r) => {
			r !== "__proto__" && (Y(e[r]) && !Y(t[r]) && (t[r] = Array.isArray(e[r]) ? [] : W()), Et(t[r]) || Et(e[r]) ? t[r] = e[r] : n.push({
				src: e[r],
				des: t[r]
			}));
		});
	}
}
//#endregion
//#region node_modules/@intlify/message-compiler/dist/message-compiler.mjs
function Ot(e, t, n) {
	return {
		line: e,
		column: t,
		offset: n
	};
}
function kt(e, t, n) {
	let r = {
		start: e,
		end: t
	};
	return n != null && (r.source = n), r;
}
var Z = {
	EXPECTED_TOKEN: 1,
	INVALID_TOKEN_IN_PLACEHOLDER: 2,
	UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
	UNKNOWN_ESCAPE_SEQUENCE: 4,
	INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
	UNBALANCED_CLOSING_BRACE: 6,
	UNTERMINATED_CLOSING_BRACE: 7,
	EMPTY_PLACEHOLDER: 8,
	NOT_ALLOW_NEST_PLACEHOLDER: 9,
	INVALID_LINKED_FORMAT: 10,
	MUST_HAVE_MESSAGES_IN_PLURAL: 11,
	UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
	UNEXPECTED_EMPTY_LINKED_KEY: 13,
	UNEXPECTED_LEXICAL_ANALYSIS: 14,
	UNHANDLED_CODEGEN_NODE_TYPE: 15,
	UNHANDLED_MINIFIER_NODE_TYPE: 16
};
Z.EXPECTED_TOKEN, Z.INVALID_TOKEN_IN_PLACEHOLDER, Z.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, Z.UNKNOWN_ESCAPE_SEQUENCE, Z.INVALID_UNICODE_ESCAPE_SEQUENCE, Z.UNBALANCED_CLOSING_BRACE, Z.UNTERMINATED_CLOSING_BRACE, Z.EMPTY_PLACEHOLDER, Z.NOT_ALLOW_NEST_PLACEHOLDER, Z.INVALID_LINKED_FORMAT, Z.MUST_HAVE_MESSAGES_IN_PLURAL, Z.UNEXPECTED_EMPTY_LINKED_MODIFIER, Z.UNEXPECTED_EMPTY_LINKED_KEY, Z.UNEXPECTED_LEXICAL_ANALYSIS, Z.UNHANDLED_CODEGEN_NODE_TYPE, Z.UNHANDLED_MINIFIER_NODE_TYPE;
function At(e, t, n = {}) {
	let { domain: r, messages: i, args: a } = n, o = SyntaxError(String(e));
	return o.code = e, t && (o.location = t), o.domain = r, o;
}
function jt(e) {
	throw e;
}
var Mt = " ", Nt = "\r", Pt = "\n", Ft = "\u2028", It = "\u2029";
function Lt(e) {
	let t = e, n = 0, r = 1, i = 1, a = 0, o = (e) => t[e] === Nt && t[e + 1] === Pt, s = (e) => t[e] === Pt, c = (e) => t[e] === It, l = (e) => t[e] === Ft, u = (e) => o(e) || s(e) || c(e) || l(e), d = () => n, f = () => r, p = () => i, m = () => a, h = (e) => o(e) || c(e) || l(e) ? Pt : t[e], g = () => h(n), _ = () => h(n + a);
	function v() {
		return a = 0, u(n) && (r++, i = 0), o(n) && n++, n++, i++, t[n];
	}
	function y() {
		return o(n + a) && a++, a++, t[n + a];
	}
	function b() {
		n = 0, r = 1, i = 1, a = 0;
	}
	function x(e = 0) {
		a = e;
	}
	function S() {
		let e = n + a;
		for (; e !== n;) v();
		a = 0;
	}
	return {
		index: d,
		line: f,
		column: p,
		peekOffset: m,
		charAt: h,
		currentChar: g,
		currentPeek: _,
		next: v,
		peek: y,
		reset: b,
		resetPeek: x,
		skipToPeek: S
	};
}
var Rt = void 0, zt = "'", Bt = "tokenizer";
function Vt(e, t = {}) {
	let n = t.location !== !1, r = Lt(e), i = () => r.index(), a = () => Ot(r.line(), r.column(), r.index()), o = a(), s = i(), c = {
		currentType: 13,
		offset: s,
		startLoc: o,
		endLoc: o,
		lastType: 13,
		lastOffset: s,
		lastStartLoc: o,
		lastEndLoc: o,
		braceNest: 0,
		inLinked: !1,
		text: ""
	}, l = () => c, { onError: u } = t;
	function d(e, t, r, ...i) {
		let a = l();
		t.column += r, t.offset += r, u && u(At(e, n ? kt(a.startLoc, t) : null, {
			domain: Bt,
			args: i
		}));
	}
	function f(e, t, r) {
		e.endLoc = a(), e.currentType = t;
		let i = { type: t };
		return n && (i.loc = kt(e.startLoc, e.endLoc)), r != null && (i.value = r), i;
	}
	let p = (e) => f(e, 13);
	function m(e, t) {
		return e.currentChar() === t ? (e.next(), t) : (d(Z.EXPECTED_TOKEN, a(), 0, t), "");
	}
	function h(e) {
		let t = "";
		for (; e.currentPeek() === Mt || e.currentPeek() === Pt;) t += e.currentPeek(), e.peek();
		return t;
	}
	function g(e) {
		let t = h(e);
		return e.skipToPeek(), t;
	}
	function _(e) {
		if (e === Rt) return !1;
		let t = e.charCodeAt(0);
		return t >= 97 && t <= 122 || t >= 65 && t <= 90 || t === 95;
	}
	function v(e) {
		if (e === Rt) return !1;
		let t = e.charCodeAt(0);
		return t >= 48 && t <= 57;
	}
	function y(e, t) {
		let { currentType: n } = t;
		if (n !== 2) return !1;
		h(e);
		let r = _(e.currentPeek());
		return e.resetPeek(), r;
	}
	function b(e, t) {
		let { currentType: n } = t;
		if (n !== 2) return !1;
		h(e);
		let r = v(e.currentPeek() === "-" ? e.peek() : e.currentPeek());
		return e.resetPeek(), r;
	}
	function x(e, t) {
		let { currentType: n } = t;
		if (n !== 2) return !1;
		h(e);
		let r = e.currentPeek() === zt;
		return e.resetPeek(), r;
	}
	function S(e, t) {
		let { currentType: n } = t;
		if (n !== 7) return !1;
		h(e);
		let r = e.currentPeek() === ".";
		return e.resetPeek(), r;
	}
	function C(e, t) {
		let { currentType: n } = t;
		if (n !== 8) return !1;
		h(e);
		let r = _(e.currentPeek());
		return e.resetPeek(), r;
	}
	function w(e, t) {
		let { currentType: n } = t;
		if (!(n === 7 || n === 11)) return !1;
		h(e);
		let r = e.currentPeek() === ":";
		return e.resetPeek(), r;
	}
	function T(e, t) {
		let { currentType: n } = t;
		if (n !== 9) return !1;
		let r = () => {
			let t = e.currentPeek();
			return t === "{" ? _(e.peek()) : t === "@" || t === "|" || t === ":" || t === "." || t === Mt || !t ? !1 : t === Pt ? (e.peek(), r()) : D(e, !1);
		}, i = r();
		return e.resetPeek(), i;
	}
	function E(e) {
		h(e);
		let t = e.currentPeek() === "|";
		return e.resetPeek(), t;
	}
	function D(e, t = !0) {
		let n = (t = !1, r = "") => {
			let i = e.currentPeek();
			return i === "{" || i === "@" || !i ? t : i === "|" ? !(r === Mt || r === Pt) : i === Mt ? (e.peek(), n(!0, Mt)) : i === Pt ? (e.peek(), n(!0, Pt)) : !0;
		}, r = n();
		return t && e.resetPeek(), r;
	}
	function O(e, t) {
		let n = e.currentChar();
		if (n !== Rt) return t(n) ? (e.next(), n) : null;
	}
	function k(e) {
		let t = e.charCodeAt(0);
		return t >= 97 && t <= 122 || t >= 65 && t <= 90 || t >= 48 && t <= 57 || t === 95 || t === 36;
	}
	function A(e) {
		return O(e, k);
	}
	function j(e) {
		let t = e.charCodeAt(0);
		return t >= 97 && t <= 122 || t >= 65 && t <= 90 || t >= 48 && t <= 57 || t === 95 || t === 36 || t === 45;
	}
	function M(e) {
		return O(e, j);
	}
	function N(e) {
		let t = e.charCodeAt(0);
		return t >= 48 && t <= 57;
	}
	function P(e) {
		return O(e, N);
	}
	function F(e) {
		let t = e.charCodeAt(0);
		return t >= 48 && t <= 57 || t >= 65 && t <= 70 || t >= 97 && t <= 102;
	}
	function ee(e) {
		return O(e, F);
	}
	function I(e) {
		let t = "", n = "";
		for (; t = P(e);) n += t;
		return n;
	}
	function te(e) {
		let t = "";
		for (;;) {
			let n = e.currentChar();
			if (n === "\\") {
				let r = e.peek();
				r === "{" || r === "}" || r === "@" || r === "|" || r === "\\" ? (t += n + r, e.next(), e.next()) : (e.resetPeek(), t += n, e.next());
			} else if (n === "{" || n === "}" || n === "@" || n === "|" || !n) break;
			else if (n === Mt || n === Pt) if (D(e)) t += n, e.next();
			else if (E(e)) break;
			else t += n, e.next();
			else t += n, e.next();
		}
		return t;
	}
	function ne(e) {
		g(e);
		let t = "", n = "";
		for (; t = M(e);) n += t;
		let r = e.currentChar();
		if (r && r !== "}" && r !== Rt && r !== Mt && r !== Pt && r !== "　") {
			let t = ce(e);
			return d(Z.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, n + t), n + t;
		}
		return e.currentChar() === Rt && d(Z.UNTERMINATED_CLOSING_BRACE, a(), 0), n;
	}
	function re(e) {
		g(e);
		let t = "";
		return e.currentChar() === "-" ? (e.next(), t += `-${I(e)}`) : t += I(e), e.currentChar() === Rt && d(Z.UNTERMINATED_CLOSING_BRACE, a(), 0), t;
	}
	function ie(e) {
		return e !== zt && e !== Pt;
	}
	function ae(e) {
		g(e), m(e, "'");
		let t = "", n = "";
		for (; t = O(e, ie);) t === "\\" ? n += oe(e) : n += t;
		let r = e.currentChar();
		return r === Pt || r === Rt ? (d(Z.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), r === Pt && (e.next(), m(e, "'")), n) : (m(e, "'"), n);
	}
	function oe(e) {
		let t = e.currentChar();
		switch (t) {
			case "\\":
			case "'": return e.next(), `\\${t}`;
			case "u": return L(e, t, 4);
			case "U": return L(e, t, 6);
			default: return d(Z.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, t), "";
		}
	}
	function L(e, t, n) {
		m(e, t);
		let r = "";
		for (let i = 0; i < n; i++) {
			let n = ee(e);
			if (!n) {
				d(Z.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${t}${r}${e.currentChar()}`);
				break;
			}
			r += n;
		}
		return `\\${t}${r}`;
	}
	function se(e) {
		return e !== "{" && e !== "}" && e !== Mt && e !== Pt;
	}
	function ce(e) {
		g(e);
		let t = "", n = "";
		for (; t = O(e, se);) n += t;
		return n;
	}
	function le(e) {
		let t = "", n = "";
		for (; t = A(e);) n += t;
		return n;
	}
	function ue(e) {
		let t = (n) => {
			let r = e.currentChar();
			return r === "{" || r === "@" || r === "|" || r === "(" || r === ")" || !r || r === Mt ? n : (n += r, e.next(), t(n));
		};
		return t("");
	}
	function R(e) {
		g(e);
		let t = m(e, "|");
		return g(e), t;
	}
	function de(e, t) {
		let n = null;
		switch (e.currentChar()) {
			case "{": return t.braceNest >= 1 && d(Z.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), e.next(), n = f(t, 2, "{"), g(e), t.braceNest++, n;
			case "}": return t.braceNest > 0 && t.currentType === 2 && d(Z.EMPTY_PLACEHOLDER, a(), 0), e.next(), n = f(t, 3, "}"), t.braceNest--, t.braceNest > 0 && g(e), t.inLinked && t.braceNest === 0 && (t.inLinked = !1), n;
			case "@": return t.braceNest > 0 && d(Z.UNTERMINATED_CLOSING_BRACE, a(), 0), n = fe(e, t) || p(t), t.braceNest = 0, n;
			default: {
				let r = !0, i = !0, o = !0;
				if (E(e)) return t.braceNest > 0 && d(Z.UNTERMINATED_CLOSING_BRACE, a(), 0), n = f(t, 1, R(e)), t.braceNest = 0, t.inLinked = !1, n;
				if (t.braceNest > 0 && (t.currentType === 4 || t.currentType === 5 || t.currentType === 6)) return d(Z.UNTERMINATED_CLOSING_BRACE, a(), 0), t.braceNest = 0, pe(e, t);
				if (r = y(e, t)) return n = f(t, 4, ne(e)), g(e), n;
				if (i = b(e, t)) return n = f(t, 5, re(e)), g(e), n;
				if (o = x(e, t)) return n = f(t, 6, ae(e)), g(e), n;
				if (!r && !i && !o) return n = f(t, 12, ce(e)), d(Z.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, n.value), g(e), n;
				break;
			}
		}
		return n;
	}
	function fe(e, t) {
		let { currentType: n } = t, r = null, i = e.currentChar();
		switch ((n === 7 || n === 8 || n === 11 || n === 9) && (i === Pt || i === Mt) && d(Z.INVALID_LINKED_FORMAT, a(), 0), i) {
			case "@": return e.next(), r = f(t, 7, "@"), t.inLinked = !0, r;
			case ".": return g(e), e.next(), f(t, 8, ".");
			case ":": return g(e), e.next(), f(t, 9, ":");
			default: return E(e) ? (r = f(t, 1, R(e)), t.braceNest = 0, t.inLinked = !1, r) : S(e, t) || w(e, t) ? (g(e), fe(e, t)) : C(e, t) ? (g(e), f(t, 11, le(e))) : T(e, t) ? (g(e), i === "{" ? de(e, t) || r : f(t, 10, ue(e))) : (n === 7 && d(Z.INVALID_LINKED_FORMAT, a(), 0), t.braceNest = 0, t.inLinked = !1, pe(e, t));
		}
	}
	function pe(e, t) {
		let n = { type: 13 };
		if (t.braceNest > 0) return de(e, t) || p(t);
		if (t.inLinked) return fe(e, t) || p(t);
		switch (e.currentChar()) {
			case "{": return de(e, t) || p(t);
			case "}": return d(Z.UNBALANCED_CLOSING_BRACE, a(), 0), e.next(), f(t, 3, "}");
			case "@": return fe(e, t) || p(t);
			default:
				if (E(e)) return n = f(t, 1, R(e)), t.braceNest = 0, t.inLinked = !1, n;
				if (D(e)) return f(t, 0, te(e));
				break;
		}
		return n;
	}
	function me() {
		let { currentType: e, offset: t, startLoc: n, endLoc: o } = c;
		return c.lastType = e, c.lastOffset = t, c.lastStartLoc = n, c.lastEndLoc = o, c.offset = i(), c.startLoc = a(), r.currentChar() === Rt ? f(c, 13) : pe(r, c);
	}
	return {
		nextToken: me,
		currentOffset: i,
		currentPosition: a,
		context: l
	};
}
var Ht = "parser", Ut = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g, Wt = /\\([\\@{}|])/g;
function Gt(e, t) {
	return t;
}
function Kt(e, t, n) {
	switch (e) {
		case "\\\\": return "\\";
		case "\\'": return "'";
		default: {
			let e = parseInt(t || n, 16);
			return e <= 55295 || e >= 57344 ? String.fromCodePoint(e) : "�";
		}
	}
}
function qt(e = {}) {
	let t = e.location !== !1, { onError: n } = e;
	function r(e, r, i, a, ...o) {
		let s = e.currentPosition();
		s.offset += a, s.column += a, n && n(At(r, t ? kt(i, s) : null, {
			domain: Ht,
			args: o
		}));
	}
	function i(e, n, r) {
		let i = { type: e };
		return t && (i.start = n, i.end = n, i.loc = {
			start: r,
			end: r
		}), i;
	}
	function a(e, n, r, i) {
		t && (e.end = n, e.loc && (e.loc.end = r));
	}
	function o(e, t) {
		let n = e.context(), r = i(3, n.offset, n.startLoc);
		return r.value = t.replace(Wt, Gt), a(r, e.currentOffset(), e.currentPosition()), r;
	}
	function s(e, t) {
		let { lastOffset: n, lastStartLoc: r } = e.context(), o = i(5, n, r);
		return o.index = parseInt(t, 10), e.nextToken(), a(o, e.currentOffset(), e.currentPosition()), o;
	}
	function c(e, t) {
		let { lastOffset: n, lastStartLoc: r } = e.context(), o = i(4, n, r);
		return o.key = t, e.nextToken(), a(o, e.currentOffset(), e.currentPosition()), o;
	}
	function l(e, t) {
		let { lastOffset: n, lastStartLoc: r } = e.context(), o = i(9, n, r);
		return o.value = t.replace(Ut, Kt), e.nextToken(), a(o, e.currentOffset(), e.currentPosition()), o;
	}
	function u(e) {
		let t = e.nextToken(), n = e.context(), { lastOffset: o, lastStartLoc: s } = n, c = i(8, o, s);
		return t.type === 11 ? (t.value ?? r(e, Z.UNEXPECTED_LEXICAL_ANALYSIS, n.lastStartLoc, 0, Jt(t)), c.value = t.value || "", a(c, e.currentOffset(), e.currentPosition()), { node: c }) : (r(e, Z.UNEXPECTED_EMPTY_LINKED_MODIFIER, n.lastStartLoc, 0), c.value = "", a(c, o, s), {
			nextConsumeToken: t,
			node: c
		});
	}
	function d(e, t) {
		let n = e.context(), r = i(7, n.offset, n.startLoc);
		return r.value = t, a(r, e.currentOffset(), e.currentPosition()), r;
	}
	function f(e) {
		let t = e.context(), n = i(6, t.offset, t.startLoc), o = e.nextToken();
		if (o.type === 8) {
			let t = u(e);
			n.modifier = t.node, o = t.nextConsumeToken || e.nextToken();
		}
		switch (o.type !== 9 && r(e, Z.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, Jt(o)), o = e.nextToken(), o.type === 2 && (o = e.nextToken()), o.type) {
			case 10:
				o.value ?? r(e, Z.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, Jt(o)), n.key = d(e, o.value || "");
				break;
			case 4:
				o.value ?? r(e, Z.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, Jt(o)), n.key = c(e, o.value || "");
				break;
			case 5:
				o.value ?? r(e, Z.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, Jt(o)), n.key = s(e, o.value || "");
				break;
			case 6:
				o.value ?? r(e, Z.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, Jt(o)), n.key = l(e, o.value || "");
				break;
			default: {
				r(e, Z.UNEXPECTED_EMPTY_LINKED_KEY, t.lastStartLoc, 0);
				let s = e.context(), c = i(7, s.offset, s.startLoc);
				return c.value = "", a(c, s.offset, s.startLoc), n.key = c, a(n, s.offset, s.startLoc), {
					nextConsumeToken: o,
					node: n
				};
			}
		}
		return a(n, e.currentOffset(), e.currentPosition()), { node: n };
	}
	function p(e) {
		let t = e.context(), n = i(2, t.currentType === 1 ? e.currentOffset() : t.offset, t.currentType === 1 ? t.endLoc : t.startLoc);
		n.items = [];
		let u = null;
		do {
			let i = u || e.nextToken();
			switch (u = null, i.type) {
				case 0:
					i.value ?? r(e, Z.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, Jt(i)), n.items.push(o(e, i.value || ""));
					break;
				case 5:
					i.value ?? r(e, Z.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, Jt(i)), n.items.push(s(e, i.value || ""));
					break;
				case 4:
					i.value ?? r(e, Z.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, Jt(i)), n.items.push(c(e, i.value || ""));
					break;
				case 6:
					i.value ?? r(e, Z.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, Jt(i)), n.items.push(l(e, i.value || ""));
					break;
				case 7: {
					let t = f(e);
					n.items.push(t.node), u = t.nextConsumeToken || null;
					break;
				}
			}
		} while (t.currentType !== 13 && t.currentType !== 1);
		return a(n, t.currentType === 1 ? t.lastOffset : e.currentOffset(), t.currentType === 1 ? t.lastEndLoc : e.currentPosition()), n;
	}
	function m(e, t, n, o) {
		let s = e.context(), c = o.items.length === 0, l = i(1, t, n);
		l.cases = [], l.cases.push(o);
		do {
			let t = p(e);
			c ||= t.items.length === 0, l.cases.push(t);
		} while (s.currentType !== 13);
		return c && r(e, Z.MUST_HAVE_MESSAGES_IN_PLURAL, n, 0), a(l, e.currentOffset(), e.currentPosition()), l;
	}
	function h(e) {
		let t = e.context(), { offset: n, startLoc: r } = t, i = p(e);
		return t.currentType === 13 ? i : m(e, n, r, i);
	}
	function g(n) {
		let o = Vt(n, U({}, e)), s = o.context(), c = i(0, s.offset, s.startLoc);
		return t && c.loc && (c.loc.source = n), c.body = h(o), e.onCacheKey && (c.cacheKey = e.onCacheKey(n)), s.currentType !== 13 && r(o, Z.UNEXPECTED_LEXICAL_ANALYSIS, s.lastStartLoc, 0, n[s.offset] || ""), a(c, o.currentOffset(), o.currentPosition()), c;
	}
	return { parse: g };
}
function Jt(e) {
	if (e.type === 13) return "EOF";
	let t = (e.value || "").replace(/\r?\n/gu, "\\n");
	return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Yt(e, t = {}) {
	let n = {
		ast: e,
		helpers: /* @__PURE__ */ new Set()
	};
	return {
		context: () => n,
		helper: (e) => (n.helpers.add(e), e)
	};
}
function Xt(e, t) {
	for (let n = 0; n < e.length; n++) Zt(e[n], t);
}
function Zt(e, t) {
	switch (e.type) {
		case 1:
			Xt(e.cases, t), t.helper("plural");
			break;
		case 2:
			Xt(e.items, t);
			break;
		case 6:
			Zt(e.key, t), t.helper("linked"), t.helper("type");
			break;
		case 5:
			t.helper("interpolate"), t.helper("list");
			break;
		case 4:
			t.helper("interpolate"), t.helper("named");
			break;
	}
}
function Qt(e, t = {}) {
	let n = Yt(e);
	n.helper("normalize"), e.body && Zt(e.body, n);
	let r = n.context();
	e.helpers = Array.from(r.helpers);
}
function $t(e) {
	let t = e.body;
	return t.type === 2 ? en(t) : t.cases.forEach((e) => en(e)), e;
}
function en(e) {
	if (e.items.length === 1) {
		let t = e.items[0];
		(t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value);
	} else {
		let t = [];
		for (let n = 0; n < e.items.length; n++) {
			let r = e.items[n];
			if (!(r.type === 3 || r.type === 9) || r.value == null) break;
			t.push(r.value);
		}
		if (t.length === e.items.length) {
			e.static = Tt(t);
			for (let t = 0; t < e.items.length; t++) {
				let n = e.items[t];
				(n.type === 3 || n.type === 9) && delete n.value;
			}
		}
	}
}
function tn(e) {
	switch (e.t = e.type, e.type) {
		case 0: {
			let t = e;
			tn(t.body), t.b = t.body, delete t.body;
			break;
		}
		case 1: {
			let t = e, n = t.cases;
			for (let e = 0; e < n.length; e++) tn(n[e]);
			t.c = n, delete t.cases;
			break;
		}
		case 2: {
			let t = e, n = t.items;
			for (let e = 0; e < n.length; e++) tn(n[e]);
			t.i = n, delete t.items, t.static && (t.s = t.static, delete t.static);
			break;
		}
		case 3:
		case 9:
		case 8:
		case 7: {
			let t = e;
			t.value && (t.v = t.value, delete t.value);
			break;
		}
		case 6: {
			let t = e;
			tn(t.key), t.k = t.key, delete t.key, t.modifier && (tn(t.modifier), t.m = t.modifier, delete t.modifier);
			break;
		}
		case 5: {
			let t = e;
			t.i = t.index, delete t.index;
			break;
		}
		case 4: {
			let t = e;
			t.k = t.key, delete t.key;
			break;
		}
		default:
	}
	delete e.type;
}
function nn(e, t) {
	let { filename: n, breakLineCode: r, needIndent: i } = t, a = t.location !== !1, o = {
		filename: n,
		code: "",
		column: 1,
		line: 1,
		offset: 0,
		map: void 0,
		breakLineCode: r,
		needIndent: i,
		indentLevel: 0
	};
	a && e.loc && (o.source = e.loc.source);
	let s = () => o;
	function c(e, t) {
		o.code += e;
	}
	function l(e, t = !0) {
		let n = t ? r : "";
		c(i ? n + "  ".repeat(e) : n);
	}
	function u(e = !0) {
		let t = ++o.indentLevel;
		e && l(t);
	}
	function d(e = !0) {
		let t = --o.indentLevel;
		e && l(t);
	}
	function f() {
		l(o.indentLevel);
	}
	return {
		context: s,
		push: c,
		indent: u,
		deindent: d,
		newline: f,
		helper: (e) => `_${e}`,
		needIndent: () => o.needIndent
	};
}
function rn(e, t) {
	let { helper: n } = e;
	e.push(`${n("linked")}(`), cn(e, t.key), t.modifier ? (e.push(", "), cn(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function an(e, t) {
	let { helper: n, needIndent: r } = e;
	e.push(`${n("normalize")}([`), e.indent(r());
	let i = t.items.length;
	for (let n = 0; n < i && (cn(e, t.items[n]), n !== i - 1); n++) e.push(", ");
	e.deindent(r()), e.push("])");
}
function on(e, t) {
	let { helper: n, needIndent: r } = e;
	if (t.cases.length > 1) {
		e.push(`${n("plural")}([`), e.indent(r());
		let i = t.cases.length;
		for (let n = 0; n < i && (cn(e, t.cases[n]), n !== i - 1); n++) e.push(", ");
		e.deindent(r()), e.push("])");
	}
}
function sn(e, t) {
	t.body ? cn(e, t.body) : e.push("null");
}
function cn(e, t) {
	let { helper: n } = e;
	switch (t.type) {
		case 0:
			sn(e, t);
			break;
		case 1:
			on(e, t);
			break;
		case 2:
			an(e, t);
			break;
		case 6:
			rn(e, t);
			break;
		case 8:
			e.push(JSON.stringify(t.value), t);
			break;
		case 7:
			e.push(JSON.stringify(t.value), t);
			break;
		case 5:
			e.push(`${n("interpolate")}(${n("list")}(${t.index}))`, t);
			break;
		case 4:
			e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`, t);
			break;
		case 9:
			e.push(JSON.stringify(t.value), t);
			break;
		case 3:
			e.push(JSON.stringify(t.value), t);
			break;
		default:
	}
}
var ln = (e, t = {}) => {
	let n = q(t.mode) ? t.mode : "normal", r = q(t.filename) ? t.filename : "message.intl";
	t.sourceMap;
	let i = t.breakLineCode == null ? n === "arrow" ? ";" : "\n" : t.breakLineCode, a = t.needIndent ? t.needIndent : n !== "arrow", o = e.helpers || [], s = nn(e, {
		filename: r,
		breakLineCode: i,
		needIndent: a
	});
	s.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), s.indent(a), o.length > 0 && (s.push(`const { ${Tt(o.map((e) => `${e}: _${e}`), ", ")} } = ctx`), s.newline()), s.push("return "), cn(s, e), s.deindent(a), s.push("}"), delete e.helpers;
	let { code: c, map: l } = s.context();
	return {
		ast: e,
		code: c,
		map: l ? l.toJSON() : void 0
	};
};
function un(e, t = {}) {
	let n = U({}, t), r = !!n.jit, i = !!n.minify, a = n.optimize == null ? !0 : n.optimize, o = qt(n).parse(e);
	return r ? (a && $t(o), i && tn(o), {
		ast: o,
		code: ""
	}) : (Qt(o, n), ln(o, n));
}
//#endregion
//#region node_modules/@intlify/core-base/dist/core-base.mjs
function dn() {
	typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (ut().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (ut().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function fn(e) {
	return Y(e) && Sn(e) === 0 && (bt(e, "b") || bt(e, "body"));
}
var pn = ["b", "body"];
function mn(e) {
	return kn(e, pn);
}
var hn = ["c", "cases"];
function gn(e) {
	return kn(e, hn, []);
}
var _n = ["s", "static"];
function vn(e) {
	return kn(e, _n);
}
var yn = ["i", "items"];
function bn(e) {
	return kn(e, yn, []);
}
var xn = ["t", "type"];
function Sn(e) {
	return kn(e, xn);
}
var Cn = ["v", "value"];
function wn(e, t) {
	let n = kn(e, Cn);
	if (n != null) return n;
	throw jn(t);
}
var Tn = ["m", "modifier"];
function En(e) {
	return kn(e, Tn);
}
var Dn = ["k", "key"];
function On(e) {
	let t = kn(e, Dn);
	if (t) return t;
	throw jn(6);
}
function kn(e, t, n) {
	for (let n = 0; n < t.length; n++) {
		let r = t[n];
		if (bt(e, r) && e[r] != null) return e[r];
	}
	return n;
}
var An = [
	...pn,
	...hn,
	..._n,
	...yn,
	...Dn,
	...Tn,
	...Cn,
	...xn
];
function jn(e) {
	return /* @__PURE__ */ Error(`unhandled node type: ${e}`);
}
function Mn(e) {
	return (t) => Nn(t, e);
}
function Nn(e, t) {
	let n = mn(t);
	if (n == null) throw jn(0);
	if (Sn(n) === 1) {
		let t = gn(n);
		return e.plural(t.reduce((t, n) => [...t, Pn(e, n)], []));
	} else return Pn(e, n);
}
function Pn(e, t) {
	let n = vn(t);
	if (n != null) return e.type === "text" ? n : e.normalize([n]);
	{
		let n = bn(t).reduce((t, n) => [...t, Fn(e, n)], []);
		return e.normalize(n);
	}
}
function Fn(e, t) {
	let n = Sn(t);
	switch (n) {
		case 3: return wn(t, n);
		case 9: return wn(t, n);
		case 4: {
			let r = t;
			if (bt(r, "k") && r.k) return e.interpolate(e.named(r.k));
			if (bt(r, "key") && r.key) return e.interpolate(e.named(r.key));
			throw jn(n);
		}
		case 5: {
			let r = t;
			if (bt(r, "i") && H(r.i)) return e.interpolate(e.list(r.i));
			if (bt(r, "index") && H(r.index)) return e.interpolate(e.list(r.index));
			throw jn(n);
		}
		case 6: {
			let n = t, r = En(n), i = On(n);
			return e.linked(Fn(e, i), r ? Fn(e, r) : void 0, e.type);
		}
		case 7: return wn(t, n);
		case 8: return wn(t, n);
		default: throw Error(`unhandled node on format message part: ${n}`);
	}
}
var In = (e) => e, Ln = W();
function Rn(e, t = {}) {
	let n = !1, r = t.onError || jt;
	return t.onError = (e) => {
		n = !0, r(e);
	}, {
		...un(e, t),
		detectError: n
	};
}
/* #__NO_SIDE_EFFECTS__ */
function zn(e, t) {
	if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && q(e)) {
		J(t.warnHtmlMessage) && t.warnHtmlMessage;
		let n = (t.onCacheKey || In)(e), r = Ln[n];
		if (r) return r;
		let { ast: i, detectError: a } = Rn(e, {
			...t,
			location: !1,
			jit: !0
		}), o = Mn(i);
		return a ? o : Ln[n] = o;
	} else {
		let t = e.cacheKey;
		return t ? Ln[t] || (Ln[t] = Mn(e)) : Mn(e);
	}
}
var Bn = null;
function Vn(e) {
	Bn = e;
}
function Hn(e, t, n) {
	Bn && Bn.emit("i18n:init", {
		timestamp: Date.now(),
		i18n: e,
		version: t,
		meta: n
	});
}
var Un = /* #__PURE__*/ Wn("function:translate");
function Wn(e) {
	return (t) => Bn && Bn.emit(e, t);
}
var Gn = {
	INVALID_ARGUMENT: 17,
	INVALID_DATE_ARGUMENT: 18,
	INVALID_ISO_DATE_ARGUMENT: 19,
	NOT_SUPPORT_NON_STRING_MESSAGE: 20,
	NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
	NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
	NOT_SUPPORT_LOCALE_TYPE: 23
};
function Kn(e) {
	return At(e, null, void 0);
}
Gn.INVALID_ARGUMENT, Gn.INVALID_DATE_ARGUMENT, Gn.INVALID_ISO_DATE_ARGUMENT, Gn.NOT_SUPPORT_NON_STRING_MESSAGE, Gn.NOT_SUPPORT_LOCALE_PROMISE_VALUE, Gn.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION, Gn.NOT_SUPPORT_LOCALE_TYPE;
function qn(e, t) {
	return t.locale == null ? Yn(e.locale) : Yn(t.locale);
}
var Jn;
function Yn(e) {
	if (q(e)) return e;
	if (K(e)) {
		if (e.resolvedOnce && Jn != null) return Jn;
		if (e.constructor.name === "Function") {
			let t = e();
			if (xt(t)) throw Kn(Gn.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
			return Jn = t;
		} else throw Kn(Gn.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
	} else throw Kn(Gn.NOT_SUPPORT_LOCALE_TYPE);
}
function Xn(e, t, n) {
	return [...new Set([n, ...G(t) ? t : Y(t) ? Object.keys(t) : q(t) ? [t] : [n]])];
}
function Zn(e, t, n) {
	let r = q(n) ? n : pr, i = e;
	i.__localeChainCache ||= /* @__PURE__ */ new Map();
	let a = i.__localeChainCache.get(r);
	if (!a) {
		a = [];
		let e = [n];
		for (; G(e);) e = Qn(a, e, t);
		let o = G(t) || !X(t) ? t : t.default ? t.default : null;
		e = q(o) ? [o] : o, G(e) && Qn(a, e, !1), i.__localeChainCache.set(r, a);
	}
	return a;
}
function Qn(e, t, n) {
	let r = !0;
	for (let i = 0; i < t.length && J(r); i++) {
		let a = t[i];
		q(a) && (r = $n(e, t[i], n));
	}
	return r;
}
function $n(e, t, n) {
	let r, i = t.split("-");
	do
		r = er(e, i.join("-"), n), i.splice(-1, 1);
	while (i.length && r === !0);
	return r;
}
function er(e, t, n) {
	let r = !1;
	if (!e.includes(t) && (r = !0, t)) {
		r = t[t.length - 1] !== "!";
		let i = t.replace(/!/g, "");
		e.push(i), (G(n) || X(n)) && n[i] && (r = n[i]);
	}
	return r;
}
var tr = [];
tr[0] = {
	w: [0],
	i: [3, 0],
	"[": [4],
	o: [7]
}, tr[1] = {
	w: [1],
	".": [2],
	"[": [4],
	o: [7]
}, tr[2] = {
	w: [2],
	i: [3, 0],
	0: [3, 0]
}, tr[3] = {
	i: [3, 0],
	0: [3, 0],
	w: [1, 1],
	".": [2, 1],
	"[": [4, 1],
	o: [7, 1]
}, tr[4] = {
	"'": [5, 0],
	"\"": [6, 0],
	"[": [4, 2],
	"]": [1, 3],
	o: 8,
	l: [4, 0]
}, tr[5] = {
	"'": [4, 0],
	o: 8,
	l: [5, 0]
}, tr[6] = {
	"\"": [4, 0],
	o: 8,
	l: [6, 0]
};
var nr = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function rr(e) {
	return nr.test(e);
}
function ir(e) {
	let t = e.charCodeAt(0);
	return t === e.charCodeAt(e.length - 1) && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function ar(e) {
	if (e == null) return "o";
	switch (e.charCodeAt(0)) {
		case 91:
		case 93:
		case 46:
		case 34:
		case 39: return e;
		case 95:
		case 36:
		case 45: return "i";
		case 9:
		case 10:
		case 13:
		case 160:
		case 65279:
		case 8232:
		case 8233: return "w";
	}
	return "i";
}
function or(e) {
	let t = e.trim();
	return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : rr(t) ? ir(t) : "*" + t;
}
function sr(e) {
	let t = [], n = -1, r = 0, i = 0, a, o, s, c, l, u, d, f = [];
	f[0] = () => {
		o === void 0 ? o = s : o += s;
	}, f[1] = () => {
		o !== void 0 && (t.push(o), o = void 0);
	}, f[2] = () => {
		f[0](), i++;
	}, f[3] = () => {
		if (i > 0) i--, r = 4, f[0]();
		else {
			if (i = 0, o === void 0 || (o = or(o), o === !1)) return !1;
			f[1]();
		}
	};
	function p() {
		let t = e[n + 1];
		if (r === 5 && t === "'" || r === 6 && t === "\"") return n++, s = "\\" + t, f[0](), !0;
	}
	for (; r !== null;) if (n++, a = e[n], !(a === "\\" && p())) {
		if (c = ar(a), d = tr[r], l = d[c] || d.l || 8, l === 8 || (r = l[0], l[1] !== void 0 && (u = f[l[1]], u && (s = a, u() === !1)))) return;
		if (r === 7) return t;
	}
}
var cr = /* @__PURE__ */ new Map();
function lr(e, t) {
	return Y(e) ? e[t] : null;
}
function ur(e, t) {
	if (!Y(e)) return null;
	let n = cr.get(t);
	if (n || (n = sr(t), n && cr.set(t, n)), !n) return null;
	let r = n.length, i = e, a = 0;
	for (; a < r;) {
		let e = n[a];
		if (An.includes(e) && fn(i) || !Y(i) || !bt(i, e)) return null;
		let t = i[e];
		if (t === void 0 || K(i)) return null;
		i = t, a++;
	}
	return i;
}
var dr = {
	NOT_FOUND_KEY: 1,
	FALLBACK_TO_TRANSLATE: 2,
	CANNOT_FORMAT_NUMBER: 3,
	FALLBACK_TO_NUMBER_FORMAT: 4,
	CANNOT_FORMAT_DATE: 5,
	FALLBACK_TO_DATE_FORMAT: 6,
	EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7,
	INVALID_NUMBER_ARGUMENT: 8,
	INVALID_DATE_ARGUMENT: 9
};
dr.NOT_FOUND_KEY, dr.FALLBACK_TO_TRANSLATE, dr.CANNOT_FORMAT_NUMBER, dr.FALLBACK_TO_NUMBER_FORMAT, dr.CANNOT_FORMAT_DATE, dr.FALLBACK_TO_DATE_FORMAT, dr.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER, dr.INVALID_NUMBER_ARGUMENT, dr.INVALID_DATE_ARGUMENT;
var fr = "11.4.5", pr = "en-US", mr = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function hr() {
	return {
		upper: (e, t) => t === "text" && q(e) ? e.toUpperCase() : t === "vnode" && Y(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
		lower: (e, t) => t === "text" && q(e) ? e.toLowerCase() : t === "vnode" && Y(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
		capitalize: (e, t) => t === "text" && q(e) ? mr(e) : t === "vnode" && Y(e) && "__v_isVNode" in e ? mr(e.children) : e
	};
}
var gr;
function _r(e) {
	gr = e;
}
var vr;
function yr(e) {
	vr = e;
}
var br;
function xr(e) {
	br = e;
}
var Sr = null, Cr = /* @__NO_SIDE_EFFECTS__ */ () => Sr, wr = null, Tr = (e) => {
	wr = e;
}, Er = () => wr, Dr = 0;
function Or(e = {}) {
	let t = K(e.onWarn) ? e.onWarn : et, n = q(e.version) ? e.version : fr, r = q(e.locale) || K(e.locale) ? e.locale : pr, i = K(r) ? pr : r, a = G(e.fallbackLocale) || X(e.fallbackLocale) || q(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i, o = X(e.messages) ? e.messages : kr(i), s = X(e.datetimeFormats) ? e.datetimeFormats : kr(i), c = X(e.numberFormats) ? e.numberFormats : kr(i), l = U(W(), e.modifiers, hr()), u = e.pluralRules || W(), d = K(e.missing) ? e.missing : null, f = J(e.missingWarn) || ot(e.missingWarn) ? e.missingWarn : !0, p = J(e.fallbackWarn) || ot(e.fallbackWarn) ? e.fallbackWarn : !0, m = !!e.fallbackFormat, h = !!e.unresolving, g = K(e.postTranslation) ? e.postTranslation : null, _ = X(e.processor) ? e.processor : null, v = J(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, y = !!e.escapeParameter, b = K(e.messageCompiler) ? e.messageCompiler : gr, x = K(e.messageResolver) ? e.messageResolver : vr || lr, S = K(e.localeFallbacker) ? e.localeFallbacker : br || Xn, C = Y(e.fallbackContext) ? e.fallbackContext : void 0, w = e, T = Y(w.__datetimeFormatters) ? w.__datetimeFormatters : /* @__PURE__ */ new Map(), E = Y(w.__numberFormatters) ? w.__numberFormatters : /* @__PURE__ */ new Map(), D = Y(w.__meta) ? w.__meta : {};
	Dr++;
	let O = {
		version: n,
		cid: Dr,
		locale: r,
		fallbackLocale: a,
		messages: o,
		modifiers: l,
		pluralRules: u,
		missing: d,
		missingWarn: f,
		fallbackWarn: p,
		fallbackFormat: m,
		unresolving: h,
		postTranslation: g,
		processor: _,
		warnHtmlMessage: v,
		escapeParameter: y,
		messageCompiler: b,
		messageResolver: x,
		localeFallbacker: S,
		fallbackContext: C,
		onWarn: t,
		__meta: D
	};
	return O.datetimeFormats = s, O.numberFormats = c, O.__datetimeFormatters = T, O.__numberFormatters = E, __INTLIFY_PROD_DEVTOOLS__ && Hn(O, n, D), O;
}
var kr = (e) => ({ [e]: W() });
function Ar(e, t, n, r, i) {
	let { missing: a, onWarn: o } = e;
	if (a !== null) {
		let r = a(e, n, t, i);
		return q(r) ? r : t;
	} else return t;
}
function jr(e, t, n) {
	let r = e;
	r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Mr(e, t) {
	return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Nr(e, t) {
	let n = t.indexOf(e);
	if (n === -1) return !1;
	for (let r = n + 1; r < t.length; r++) if (Mr(e, t[r])) return !0;
	return !1;
}
var Pr = typeof Intl < "u";
Pr && Intl.DateTimeFormat, Pr && Intl.NumberFormat;
function Fr(e, ...t) {
	let { datetimeFormats: n, unresolving: r, fallbackLocale: i, onWarn: a, localeFallbacker: o } = e, { __datetimeFormatters: s } = e;
	if (!q(t[0]) && !at(t[0]) && !H(t[0])) return "";
	let [c, l, u, d] = Lr(...t), f = J(u.missingWarn) ? u.missingWarn : e.missingWarn;
	J(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
	let p = !!u.part, m = qn(e, u), h = o(e, i, m);
	if (!q(c) || c === "") {
		let e = new Intl.DateTimeFormat(m.replace(/!/g, ""), d);
		return p ? e.formatToParts(l) : e.format(l);
	}
	let g = {}, _, v = null;
	for (let t = 0; t < h.length && (_ = h[t], g = n[_] || {}, v = g[c], !X(v)); t++) Ar(e, c, _, f, "datetime format");
	if (!X(v) || !q(_)) return r ? -1 : c;
	let y = `${_}__${c}`;
	st(d) || (y = `${y}__${JSON.stringify(d)}`);
	let b = s.get(y);
	return b || (b = new Intl.DateTimeFormat(_, U({}, v, d)), s.set(y, b)), p ? b.formatToParts(l) : b.format(l);
}
var Ir = [
	"localeMatcher",
	"weekday",
	"era",
	"year",
	"month",
	"day",
	"hour",
	"minute",
	"second",
	"timeZoneName",
	"formatMatcher",
	"hour12",
	"timeZone",
	"dateStyle",
	"timeStyle",
	"calendar",
	"dayPeriod",
	"numberingSystem",
	"hourCycle",
	"fractionalSecondDigits"
];
function Lr(...e) {
	let [t, n, r, i] = e, a = W(), o = W(), s;
	if (q(t)) {
		let e = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
		if (!e) throw Kn(Gn.INVALID_ISO_DATE_ARGUMENT);
		let n = e[3] ? e[3].trim().startsWith("T") ? `${e[1].trim()}${e[3].trim()}` : `${e[1].trim()}T${e[3].trim()}` : e[1].trim();
		s = new Date(n);
		try {
			s.toISOString();
		} catch {
			throw Kn(Gn.INVALID_ISO_DATE_ARGUMENT);
		}
	} else if (at(t)) {
		if (isNaN(t.getTime())) throw Kn(Gn.INVALID_DATE_ARGUMENT);
		s = t;
	} else if (H(t)) s = t;
	else throw Kn(Gn.INVALID_ARGUMENT);
	return q(n) ? a.key = n : X(n) && Object.keys(n).forEach((e) => {
		Ir.includes(e) ? o[e] = n[e] : a[e] = n[e];
	}), q(r) ? a.locale = r : X(r) && (o = r), X(i) && (o = i), [
		a.key || "",
		s,
		a,
		o
	];
}
function Rr(e, t, n) {
	let r = e;
	for (let e in n) {
		let n = `${t}__${e}`;
		r.__datetimeFormatters.has(n) && r.__datetimeFormatters.delete(n);
	}
}
function zr(e, ...t) {
	let { numberFormats: n, unresolving: r, fallbackLocale: i, onWarn: a, localeFallbacker: o } = e, { __numberFormatters: s } = e;
	if (!H(t[0])) return "";
	let [c, l, u, d] = Vr(...t), f = J(u.missingWarn) ? u.missingWarn : e.missingWarn;
	J(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
	let p = !!u.part, m = qn(e, u), h = o(e, i, m);
	if (!q(c) || c === "") {
		let e = new Intl.NumberFormat(m.replace(/!/g, ""), d);
		return p ? e.formatToParts(l) : e.format(l);
	}
	let g = {}, _, v = null;
	for (let t = 0; t < h.length && (_ = h[t], g = n[_] || {}, v = g[c], !X(v)); t++) Ar(e, c, _, f, "number format");
	if (!X(v) || !q(_)) return r ? -1 : c;
	let y = `${_}__${c}`;
	st(d) || (y = `${y}__${JSON.stringify(d)}`);
	let b = s.get(y);
	return b || (b = new Intl.NumberFormat(_, U({}, v, d)), s.set(y, b)), p ? b.formatToParts(l) : b.format(l);
}
var Br = [
	"localeMatcher",
	"style",
	"currency",
	"currencyDisplay",
	"currencySign",
	"useGrouping",
	"minimumIntegerDigits",
	"minimumFractionDigits",
	"maximumFractionDigits",
	"minimumSignificantDigits",
	"maximumSignificantDigits",
	"compactDisplay",
	"notation",
	"signDisplay",
	"unit",
	"unitDisplay",
	"roundingMode",
	"roundingPriority",
	"roundingIncrement",
	"trailingZeroDisplay"
];
function Vr(...e) {
	let [t, n, r, i] = e, a = W(), o = W();
	if (!H(t)) throw Kn(Gn.INVALID_ARGUMENT);
	let s = t;
	return q(n) ? a.key = n : X(n) && Object.keys(n).forEach((e) => {
		Br.includes(e) ? o[e] = n[e] : a[e] = n[e];
	}), q(r) ? a.locale = r : X(r) && (o = r), X(i) && (o = i), [
		a.key || "",
		s,
		a,
		o
	];
}
function Hr(e, t, n) {
	let r = e;
	for (let e in n) {
		let n = `${t}__${e}`;
		r.__numberFormatters.has(n) && r.__numberFormatters.delete(n);
	}
}
var Ur = (e) => e, Wr = (e) => "", Gr = "text", Kr = (e) => e.length === 0 ? "" : Tt(e), qr = wt;
function Jr(e, t) {
	return e = Math.abs(e), t === 2 ? e === 1 ? 0 : 1 : Math.min(e, 2);
}
function Yr(e) {
	let t = H(e.pluralIndex) ? e.pluralIndex : -1;
	return H(e.named?.count) ? e.named.count : H(e.named?.n) ? e.named.n : t;
}
function Xr(e = {}) {
	let t = e.locale, n = Yr(e), r = q(t) && K(e.pluralRules?.[t]) ? e.pluralRules[t] : Jr, i = r === Jr ? void 0 : Jr, a = (e) => e[r(n, e.length, i)], o = e.list || [], s = (e) => o[e], c = e.named || W();
	H(e.pluralIndex) && (c.count ||= e.pluralIndex, c.n ||= e.pluralIndex);
	let l = (e) => c[e];
	function u(t, n) {
		return (K(e.messages) ? e.messages(t, !!n) : Y(e.messages) ? e.messages[t] : !1) || (e.parent ? e.parent.message(t) : Wr);
	}
	let d = (t) => e.modifiers ? e.modifiers[t] : Ur, f = K(e.processor?.normalize) ? e.processor.normalize : Kr, p = K(e.processor?.interpolate) ? e.processor.interpolate : qr, m = {
		list: s,
		named: l,
		plural: a,
		linked: (e, ...t) => {
			let [n, r] = t, i = "text", a = "";
			t.length === 1 ? Y(n) ? (a = n.modifier || a, i = n.type || i) : q(n) && (a = n || a) : t.length === 2 && (q(n) && (a = n || a), q(r) && (i = r || i));
			let o = u(e, !0)(m), s = o === "" || o === void 0 ? e : o, c = i === "vnode" && G(s) && a ? s[0] : s;
			return a ? d(a)(c, i) : c;
		},
		message: u,
		type: q(e.processor?.type) ? e.processor.type : Gr,
		interpolate: p,
		normalize: f,
		values: U(W(), o, c)
	};
	return m;
}
var Zr = () => "", Qr = (e) => K(e);
function $r(e, ...t) {
	let { fallbackFormat: n, postTranslation: r, unresolving: i, messageCompiler: a, fallbackLocale: o, messages: s } = e, [c, l] = ii(...t), u = J(l.missingWarn) ? l.missingWarn : e.missingWarn, d = J(l.fallbackWarn) ? l.fallbackWarn : e.fallbackWarn, f = J(l.escapeParameter) ? l.escapeParameter : e.escapeParameter, p = !!l.resolvedMessage, m = q(l.default) || J(l.default) ? J(l.default) ? a ? c : () => c : l.default : n ? a ? c : () => c : null, h = n || m != null && (q(m) || K(m)), g = qn(e, l);
	f && ei(l);
	let [_, v, y] = p ? [
		c,
		g,
		s[g] || W()
	] : ti(e, c, g, o, d, u), b = _, x = c;
	if (!p && !(q(b) || fn(b) || Qr(b)) && h && (b = m, x = b), !p && (!(q(b) || fn(b) || Qr(b)) || !q(v))) return i ? -1 : c;
	let S = !1, C = Qr(b) ? b : ni(e, c, v, b, x, () => {
		S = !0;
	});
	if (S) return b;
	let w = ri(e, C, Xr(oi(e, v, y, l))), T = r ? r(w, c) : w;
	if (f && q(T) && (T = vt(T)), __INTLIFY_PROD_DEVTOOLS__) {
		let t = {
			timestamp: Date.now(),
			key: q(c) ? c : Qr(b) ? b.key : "",
			locale: v || (Qr(b) ? b.locale : ""),
			format: q(b) ? b : Qr(b) ? b.source : "",
			message: T
		};
		t.meta = U({}, e.__meta, /* @__PURE__ */ Cr() || {}), Un(t);
	}
	return T;
}
function ei(e) {
	G(e.list) ? e.list = e.list.map((e) => q(e) ? dt(e) : e) : Y(e.named) && Object.keys(e.named).forEach((t) => {
		q(e.named[t]) && (e.named[t] = dt(e.named[t]));
	});
}
function ti(e, t, n, r, i, a) {
	let { messages: o, onWarn: s, messageResolver: c, localeFallbacker: l } = e, u = l(e, r, n), d = W(), f, p = null;
	for (let n = 0; n < u.length && (f = u[n], d = o[f] || W(), (p = c(d, t)) === null && (p = d[t]), !(q(p) || fn(p) || Qr(p))); n++) if (!Nr(f, u)) {
		let n = Ar(e, t, f, a, "translate");
		n !== t && (p = n);
	}
	return [
		p,
		f,
		d
	];
}
function ni(e, t, n, r, i, a) {
	let { messageCompiler: o, warnHtmlMessage: s } = e;
	if (Qr(r)) {
		let e = r;
		return e.locale = e.locale || n, e.key = e.key || t, e;
	}
	if (o == null) {
		let e = (() => r);
		return e.locale = n, e.key = t, e;
	}
	let c = o(r, ai(e, n, i, r, s, a));
	return c.locale = n, c.key = t, c.source = r, c;
}
function ri(e, t, n) {
	return t(n);
}
function ii(...e) {
	let [t, n, r] = e, i = W();
	if (!q(t) && !H(t) && !Qr(t) && !fn(t)) throw Kn(Gn.INVALID_ARGUMENT);
	let a = H(t) ? String(t) : (Qr(t), t);
	return H(n) ? i.plural = n : q(n) ? i.default = n : X(n) && !st(n) ? i.named = n : G(n) && (i.list = n), H(r) ? i.plural = r : q(r) ? i.default = r : X(r) && U(i, r), [a, i];
}
function ai(e, t, n, r, i, a) {
	return {
		locale: t,
		key: n,
		warnHtmlMessage: i,
		onError: (e) => {
			throw a && a(e), e;
		},
		onCacheKey: (e) => rt(t, n, e)
	};
}
function oi(e, t, n, r) {
	let { modifiers: i, pluralRules: a, messageResolver: o, fallbackLocale: s, fallbackWarn: c, missingWarn: l, fallbackContext: u } = e, d = {
		locale: t,
		modifiers: i,
		pluralRules: a,
		messages: (r, i) => {
			let a = o(n, r);
			if (a == null && (u || i)) {
				let [n, , i] = ti(u || e, r, t, s, c, l);
				a = n ?? o(i, r);
			}
			if (q(a) || fn(a)) {
				let n = !1, i = ni(e, r, t, a, r, () => {
					n = !0;
				});
				return n ? Zr : i;
			} else if (Qr(a)) return a;
			else return Zr;
		}
	};
	return e.processor && (d.processor = e.processor), r.list && (d.list = r.list), r.named && (d.named = r.named), H(r.plural) && (d.pluralIndex = r.plural), d;
}
dn();
//#endregion
//#region node_modules/vue-i18n/dist/vue-i18n.mjs
var si = "11.4.5";
function ci() {
	typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (ut().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (ut().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (ut().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (ut().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
var Q = {
	UNEXPECTED_RETURN_TYPE: 24,
	INVALID_ARGUMENT: 25,
	MUST_BE_CALL_SETUP_TOP: 26,
	NOT_INSTALLED: 27,
	REQUIRED_VALUE: 28,
	INVALID_VALUE: 29,
	CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: 30,
	NOT_INSTALLED_WITH_PROVIDE: 31,
	UNEXPECTED_ERROR: 32,
	NOT_COMPATIBLE_LEGACY_VUE_I18N: 33,
	NOT_AVAILABLE_COMPOSITION_IN_LEGACY: 34
};
function li(e, ...t) {
	return At(e, null, void 0);
}
Q.UNEXPECTED_RETURN_TYPE, Q.INVALID_ARGUMENT, Q.MUST_BE_CALL_SETUP_TOP, Q.NOT_INSTALLED, Q.UNEXPECTED_ERROR, Q.REQUIRED_VALUE, Q.INVALID_VALUE, Q.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN, Q.NOT_INSTALLED_WITH_PROVIDE, Q.NOT_COMPATIBLE_LEGACY_VUE_I18N, Q.NOT_AVAILABLE_COMPOSITION_IN_LEGACY;
var ui = /* #__PURE__*/ nt("__translateVNode"), di = /* #__PURE__*/ nt("__datetimeParts"), fi = /* #__PURE__*/ nt("__numberParts"), pi = nt("__setPluralRules");
nt("__intlifyMeta");
var mi = /* #__PURE__*/ nt("__injectWithOption"), hi = /* #__PURE__*/ nt("__dispose"), gi = {
	FALLBACK_TO_ROOT: 10,
	NOT_FOUND_PARENT_SCOPE: 11,
	IGNORE_OBJ_FLATTEN: 12,
	DEPRECATE_LEGACY_MODE: 13,
	DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE: 14,
	DUPLICATE_USE_I18N_CALLING: 15
};
gi.FALLBACK_TO_ROOT, gi.NOT_FOUND_PARENT_SCOPE, gi.IGNORE_OBJ_FLATTEN, gi.DEPRECATE_LEGACY_MODE, gi.DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE, gi.DUPLICATE_USE_I18N_CALLING;
function _i(e) {
	if (!Y(e) || fn(e)) return e;
	for (let t in e) if (bt(e, t)) if (!t.includes(".")) Y(e[t]) && _i(e[t]);
	else {
		let n = t.split("."), r = n.length - 1, i = e, a = !1;
		for (let e = 0; e < r; e++) {
			if (n[e] === "__proto__") throw Error(`unsafe key: ${n[e]}`);
			if (n[e] in i || (i[n[e]] = W()), !Y(i[n[e]])) {
				a = !0;
				break;
			}
			i = i[n[e]];
		}
		if (a || (fn(i) ? An.includes(n[r]) || delete e[t] : (i[n[r]] = e[t], delete e[t])), !fn(i)) {
			let e = i[n[r]];
			Y(e) && _i(e);
		}
	}
	return e;
}
function vi(e, t) {
	let { messages: n, __i18n: r, messageResolver: i, flatJson: a } = t, o = X(n) ? n : G(r) ? W() : { [e]: W() };
	if (G(r) && r.forEach((e) => {
		if ("locale" in e && "resource" in e) {
			let { locale: t, resource: n } = e;
			t ? (o[t] = o[t] || W(), Dt(n, o[t])) : Dt(n, o);
		} else q(e) && Dt(JSON.parse(e), o);
	}), i == null && a) for (let e in o) bt(o, e) && _i(o[e]);
	return o;
}
function yi(e) {
	return e.type;
}
function bi(e, t, n) {
	let r = Y(t.messages) ? t.messages : W();
	"__i18nGlobal" in n && (r = vi(e.locale.value, {
		messages: r,
		__i18n: n.__i18nGlobal
	}));
	let i = Object.keys(r);
	if (i.length && i.forEach((t) => {
		e.mergeLocaleMessage(t, r[t]);
	}), Y(t.datetimeFormats)) {
		let n = Object.keys(t.datetimeFormats);
		n.length && n.forEach((n) => {
			e.mergeDateTimeFormat(n, t.datetimeFormats[n]);
		});
	}
	if (Y(t.numberFormats)) {
		let n = Object.keys(t.numberFormats);
		n.length && n.forEach((n) => {
			e.mergeNumberFormat(n, t.numberFormats[n]);
		});
	}
}
function xi(e) {
	return c(n, null, e, 0);
}
function Si() {
	let t = "currentInstance";
	return t in e ? e[t] : e.getCurrentInstance();
}
var Ci = () => [], wi = () => !1, Ti = 0;
function Ei(e) {
	return ((t, n, r, i) => e(n, r, Si() || void 0, i));
}
function Di(e = {}) {
	let { __root: t, __injectWithOption: n } = e, i = t === void 0, a = e.flatJson, o = tt ? w : E, s = J(e.inheritLocale) ? e.inheritLocale : !0, c = o(t && s ? t.locale.value : q(e.locale) ? e.locale : pr), l = o(t && s ? t.fallbackLocale.value : q(e.fallbackLocale) || G(e.fallbackLocale) || X(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : c.value), u = o(vi(c.value, e)), d = o(X(e.datetimeFormats) ? e.datetimeFormats : { [c.value]: {} }), f = o(X(e.numberFormats) ? e.numberFormats : { [c.value]: {} }), p = t ? t.missingWarn : J(e.missingWarn) || ot(e.missingWarn) ? e.missingWarn : !0, m = t ? t.fallbackWarn : J(e.fallbackWarn) || ot(e.fallbackWarn) ? e.fallbackWarn : !0, h = t ? t.fallbackRoot : J(e.fallbackRoot) ? e.fallbackRoot : !0, g = !!e.fallbackFormat, _ = K(e.missing) ? e.missing : null, v = K(e.missing) ? Ei(e.missing) : null, y = K(e.postTranslation) ? e.postTranslation : null, b = t ? t.warnHtmlMessage : J(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, x = !!e.escapeParameter, S = t ? t.modifiers : X(e.modifiers) ? e.modifiers : {}, C = e.pluralRules || t && t.pluralRules, T;
	T = (() => {
		i && Tr(null);
		let t = {
			version: si,
			locale: c.value,
			fallbackLocale: l.value,
			messages: u.value,
			modifiers: S,
			pluralRules: C,
			missing: v === null ? void 0 : v,
			missingWarn: p,
			fallbackWarn: m,
			fallbackFormat: g,
			unresolving: !0,
			postTranslation: y === null ? void 0 : y,
			warnHtmlMessage: b,
			escapeParameter: x,
			messageResolver: e.messageResolver,
			messageCompiler: e.messageCompiler,
			__meta: { framework: "vue" }
		};
		t.datetimeFormats = d.value, t.numberFormats = f.value, t.__datetimeFormatters = X(T) ? T.__datetimeFormatters : void 0, t.__numberFormatters = X(T) ? T.__numberFormatters : void 0;
		let n = Or(t);
		return i && Tr(n), n;
	})(), jr(T, c.value, l.value);
	function D() {
		return [
			c.value,
			l.value,
			u.value,
			d.value,
			f.value
		];
	}
	let O = r({
		get: () => c.value,
		set: (e) => {
			T.locale = e, c.value = e;
		}
	}), k = r({
		get: () => l.value,
		set: (e) => {
			T.fallbackLocale = e, l.value = e, jr(T, c.value, e);
		}
	}), j = r(() => u.value), M = /* #__PURE__*/ r(() => d.value), N = /* #__PURE__*/ r(() => f.value);
	function P() {
		return K(y) ? y : null;
	}
	function F(e) {
		y = e, T.postTranslation = e;
	}
	function ee() {
		return _;
	}
	function I(e) {
		e !== null && (v = Ei(e)), _ = e, T.missing = v;
	}
	let te = (e, n, r, a, o, s) => {
		D();
		let c;
		try {
			__INTLIFY_PROD_DEVTOOLS__, i || (T.fallbackContext = t ? Er() : void 0), c = e(T);
		} finally {
			__INTLIFY_PROD_DEVTOOLS__, i || (T.fallbackContext = void 0);
		}
		if (r !== "translate exists" && H(c) && c === -1 || r === "translate exists" && !c) {
			let [e, r] = n();
			return t && h ? a(t) : o(e);
		} else if (s(c)) return c;
		else
 /* istanbul ignore next */
		throw li(Q.UNEXPECTED_RETURN_TYPE);
	};
	function ne(...e) {
		return te((t) => Reflect.apply($r, null, [t, ...e]), () => ii(...e), "translate", (t) => Reflect.apply(t.t, t, [...e]), (e) => e, (e) => q(e));
	}
	function re(...e) {
		let [t, n, r] = e;
		if (r && !Y(r)) throw li(Q.INVALID_ARGUMENT);
		return ne(t, n, U({ resolvedMessage: !0 }, r || {}));
	}
	function ie(...e) {
		return te((t) => Reflect.apply(Fr, null, [t, ...e]), () => Lr(...e), "datetime format", (t) => Reflect.apply(t.d, t, [...e]), () => "", (e) => q(e) || G(e));
	}
	function ae(...e) {
		return te((t) => Reflect.apply(zr, null, [t, ...e]), () => Vr(...e), "number format", (t) => Reflect.apply(t.n, t, [...e]), () => "", (e) => q(e) || G(e));
	}
	function oe(e) {
		return e.map((e) => q(e) || H(e) || J(e) ? xi(String(e)) : e);
	}
	let L = {
		normalize: oe,
		interpolate: (e) => e,
		type: "vnode"
	};
	function se(...e) {
		return te((t) => {
			let n, r = t;
			try {
				r.processor = L, n = Reflect.apply($r, null, [r, ...e]);
			} finally {
				r.processor = null;
			}
			return n;
		}, () => ii(...e), "translate", (t) => t[ui](...e), (e) => [xi(e)], (e) => G(e));
	}
	function ce(...e) {
		return te((t) => Reflect.apply(zr, null, [t, ...e]), () => Vr(...e), "number format", (t) => t[fi](...e), Ci, (e) => q(e) || G(e));
	}
	function le(...e) {
		return te((t) => Reflect.apply(Fr, null, [t, ...e]), () => Lr(...e), "datetime format", (t) => t[di](...e), Ci, (e) => q(e) || G(e));
	}
	function ue(e) {
		C = e, T.pluralRules = C;
	}
	function R(e, t) {
		return te(() => {
			if (!e) return !1;
			let n = q(t) ? t : c.value, r = q(t) ? [n] : Zn(T, l.value, n);
			for (let t = 0; t < r.length; t++) {
				let n = pe(r[t]), i = T.messageResolver(n, e);
				if (i === null && (i = n[e]), fn(i) || Qr(i) || q(i)) return !0;
			}
			return !1;
		}, () => [e], "translate exists", (n) => Reflect.apply(n.te, n, [e, t]), wi, (e) => J(e));
	}
	function de(e) {
		let t = null, n = Zn(T, l.value, c.value);
		for (let r = 0; r < n.length; r++) {
			let i = u.value[n[r]] || {}, a = T.messageResolver(i, e);
			if (a != null) {
				t = a;
				break;
			}
		}
		return t;
	}
	function fe(e) {
		return de(e) ?? (t && t.tm(e) || {});
	}
	function pe(e) {
		return u.value[e] || {};
	}
	function me(e, t) {
		if (a) {
			let n = { [e]: t };
			for (let e in n) bt(n, e) && _i(n[e]);
			t = n[e];
		}
		u.value[e] = t, T.messages = u.value;
	}
	function he(e, t) {
		u.value[e] = u.value[e] || {};
		let n = { [e]: t };
		if (a) for (let e in n) bt(n, e) && _i(n[e]);
		t = n[e], Dt(t, u.value[e]), T.messages = u.value;
	}
	function ge(e) {
		return d.value[e] || {};
	}
	function _e(e, t) {
		d.value[e] = t, T.datetimeFormats = d.value, Rr(T, e, t);
	}
	function ve(e, t) {
		d.value[e] = U(d.value[e] || {}, t), T.datetimeFormats = d.value, Rr(T, e, t);
	}
	function ye(e) {
		return f.value[e] || {};
	}
	function be(e, t) {
		f.value[e] = t, T.numberFormats = f.value, Hr(T, e, t);
	}
	function z(e, t) {
		f.value[e] = U(f.value[e] || {}, t), T.numberFormats = f.value, Hr(T, e, t);
	}
	Ti++, t && tt && (A(t.locale, (e) => {
		s && (c.value = e, T.locale = e, jr(T, c.value, l.value));
	}), A(t.fallbackLocale, (e) => {
		s && (l.value = e, T.fallbackLocale = e, jr(T, c.value, l.value));
	}));
	let B = {
		id: Ti,
		locale: O,
		fallbackLocale: k,
		get inheritLocale() {
			return s;
		},
		set inheritLocale(e) {
			s = e, e && t && (c.value = t.locale.value, l.value = t.fallbackLocale.value, jr(T, c.value, l.value));
		},
		get availableLocales() {
			return Object.keys(u.value).sort();
		},
		messages: j,
		get modifiers() {
			return S;
		},
		get pluralRules() {
			return C || {};
		},
		get isGlobal() {
			return i;
		},
		get missingWarn() {
			return p;
		},
		set missingWarn(e) {
			p = e, T.missingWarn = p;
		},
		get fallbackWarn() {
			return m;
		},
		set fallbackWarn(e) {
			m = e, T.fallbackWarn = m;
		},
		get fallbackRoot() {
			return h;
		},
		set fallbackRoot(e) {
			h = e;
		},
		get fallbackFormat() {
			return g;
		},
		set fallbackFormat(e) {
			g = e, T.fallbackFormat = g;
		},
		get warnHtmlMessage() {
			return b;
		},
		set warnHtmlMessage(e) {
			b = e, T.warnHtmlMessage = e;
		},
		get escapeParameter() {
			return x;
		},
		set escapeParameter(e) {
			x = e, T.escapeParameter = e;
		},
		t: ne,
		getLocaleMessage: pe,
		setLocaleMessage: me,
		mergeLocaleMessage: he,
		getPostTranslationHandler: P,
		setPostTranslationHandler: F,
		getMissingHandler: ee,
		setMissingHandler: I,
		[pi]: ue
	};
	return B.datetimeFormats = M, B.numberFormats = N, B.rt = re, B.te = R, B.tm = fe, B.d = ie, B.n = ae, B.getDateTimeFormat = ge, B.setDateTimeFormat = _e, B.mergeDateTimeFormat = ve, B.getNumberFormat = ye, B.setNumberFormat = be, B.mergeNumberFormat = z, B[mi] = n, B[ui] = se, B[di] = le, B[fi] = ce, B;
}
function Oi(e) {
	let t = q(e.locale) ? e.locale : pr, n = q(e.fallbackLocale) || G(e.fallbackLocale) || X(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, r = K(e.missing) ? e.missing : void 0, i = J(e.silentTranslationWarn) || ot(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0, a = J(e.silentFallbackWarn) || ot(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0, o = J(e.fallbackRoot) ? e.fallbackRoot : !0, s = !!e.formatFallbackMessages, c = X(e.modifiers) ? e.modifiers : {}, l = e.pluralizationRules, u = K(e.postTranslation) ? e.postTranslation : void 0, d = q(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0, f = !!e.escapeParameterHtml, p = J(e.sync) ? e.sync : !0, m = e.messages;
	if (X(e.sharedMessages)) {
		let t = e.sharedMessages;
		m = Object.keys(t).reduce((e, n) => (U(e[n] || (e[n] = {}), t[n]), e), m || {});
	}
	let { __i18n: h, __root: g, __injectWithOption: _ } = e, v = e.datetimeFormats, y = e.numberFormats, b = e.flatJson;
	return {
		locale: t,
		fallbackLocale: n,
		messages: m,
		flatJson: b,
		datetimeFormats: v,
		numberFormats: y,
		missing: r,
		missingWarn: i,
		fallbackWarn: a,
		fallbackRoot: o,
		fallbackFormat: s,
		modifiers: c,
		pluralRules: l,
		postTranslation: u,
		warnHtmlMessage: d,
		escapeParameter: f,
		messageResolver: e.messageResolver,
		inheritLocale: p,
		__i18n: h,
		__root: g,
		__injectWithOption: _
	};
}
function ki(e = {}) {
	let t = Di(Oi(e)), { __extender: n } = e, r = {
		id: t.id,
		get locale() {
			return t.locale.value;
		},
		set locale(e) {
			t.locale.value = e;
		},
		get fallbackLocale() {
			return t.fallbackLocale.value;
		},
		set fallbackLocale(e) {
			t.fallbackLocale.value = e;
		},
		get messages() {
			return t.messages.value;
		},
		get datetimeFormats() {
			return t.datetimeFormats.value;
		},
		get numberFormats() {
			return t.numberFormats.value;
		},
		get availableLocales() {
			return t.availableLocales;
		},
		get missing() {
			return t.getMissingHandler();
		},
		set missing(e) {
			t.setMissingHandler(e);
		},
		get silentTranslationWarn() {
			return J(t.missingWarn) ? !t.missingWarn : t.missingWarn;
		},
		set silentTranslationWarn(e) {
			t.missingWarn = J(e) ? !e : e;
		},
		get silentFallbackWarn() {
			return J(t.fallbackWarn) ? !t.fallbackWarn : t.fallbackWarn;
		},
		set silentFallbackWarn(e) {
			t.fallbackWarn = J(e) ? !e : e;
		},
		get modifiers() {
			return t.modifiers;
		},
		get formatFallbackMessages() {
			return t.fallbackFormat;
		},
		set formatFallbackMessages(e) {
			t.fallbackFormat = e;
		},
		get postTranslation() {
			return t.getPostTranslationHandler();
		},
		set postTranslation(e) {
			t.setPostTranslationHandler(e);
		},
		get sync() {
			return t.inheritLocale;
		},
		set sync(e) {
			t.inheritLocale = e;
		},
		get warnHtmlInMessage() {
			return t.warnHtmlMessage ? "warn" : "off";
		},
		set warnHtmlInMessage(e) {
			t.warnHtmlMessage = e !== "off";
		},
		get escapeParameterHtml() {
			return t.escapeParameter;
		},
		set escapeParameterHtml(e) {
			t.escapeParameter = e;
		},
		get pluralizationRules() {
			return t.pluralRules || {};
		},
		__composer: t,
		t(...e) {
			return Reflect.apply(t.t, t, [...e]);
		},
		rt(...e) {
			return Reflect.apply(t.rt, t, [...e]);
		},
		te(e, n) {
			return t.te(e, n);
		},
		tm(e) {
			return t.tm(e);
		},
		getLocaleMessage(e) {
			return t.getLocaleMessage(e);
		},
		setLocaleMessage(e, n) {
			t.setLocaleMessage(e, n);
		},
		mergeLocaleMessage(e, n) {
			t.mergeLocaleMessage(e, n);
		},
		d(...e) {
			return Reflect.apply(t.d, t, [...e]);
		},
		getDateTimeFormat(e) {
			return t.getDateTimeFormat(e);
		},
		setDateTimeFormat(e, n) {
			t.setDateTimeFormat(e, n);
		},
		mergeDateTimeFormat(e, n) {
			t.mergeDateTimeFormat(e, n);
		},
		n(...e) {
			return Reflect.apply(t.n, t, [...e]);
		},
		getNumberFormat(e) {
			return t.getNumberFormat(e);
		},
		setNumberFormat(e, n) {
			t.setNumberFormat(e, n);
		},
		mergeNumberFormat(e, n) {
			t.mergeNumberFormat(e, n);
		}
	};
	return r.__extender = n, r;
}
function Ai(e, t, n) {
	return {
		beforeCreate() {
			let r = Si();
			/* istanbul ignore if */
			if (!r) throw li(Q.UNEXPECTED_ERROR);
			let i = this.$options;
			if (i.i18n) {
				let r = i.i18n;
				if (i.__i18n && (r.__i18n = i.__i18n), r.__root = t, this === this.$root) this.$i18n = ji(e, r);
				else {
					r.__injectWithOption = !0, r.__extender = n.__vueI18nExtend, this.$i18n = ki(r);
					let e = this.$i18n;
					e.__extender && (e.__disposer = e.__extender(this.$i18n));
				}
			} else if (i.__i18n) if (this === this.$root) this.$i18n = ji(e, i);
			else {
				this.$i18n = ki({
					__i18n: i.__i18n,
					__injectWithOption: !0,
					__extender: n.__vueI18nExtend,
					__root: t
				});
				let e = this.$i18n;
				e.__extender && (e.__disposer = e.__extender(this.$i18n));
			}
			else this.$i18n = e;
			i.__i18nGlobal && bi(t, i, i), this.$t = (...e) => this.$i18n.t(...e), this.$rt = (...e) => this.$i18n.rt(...e), this.$te = (e, t) => this.$i18n.te(e, t), this.$d = (...e) => this.$i18n.d(...e), this.$n = (...e) => this.$i18n.n(...e), this.$tm = (e) => this.$i18n.tm(e), n.__setInstance(r, this.$i18n);
		},
		mounted() {},
		unmounted() {
			let e = Si();
			/* istanbul ignore if */
			if (!e) throw li(Q.UNEXPECTED_ERROR);
			let t = this.$i18n;
			delete this.$t, delete this.$rt, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, t.__disposer && (t.__disposer(), delete t.__disposer, delete t.__extender), n.__deleteInstance(e), delete this.$i18n;
		}
	};
}
function ji(e, t) {
	e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[pi](t.pluralizationRules || e.pluralizationRules);
	let n = vi(e.locale, {
		messages: t.messages,
		__i18n: t.__i18n
	});
	return Object.keys(n).forEach((t) => e.mergeLocaleMessage(t, n[t])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((n) => e.mergeDateTimeFormat(n, t.datetimeFormats[n])), t.numberFormats && Object.keys(t.numberFormats).forEach((n) => e.mergeNumberFormat(n, t.numberFormats[n])), e;
}
var Mi = {
	tag: { type: [String, Object] },
	locale: { type: String },
	scope: {
		type: String,
		validator: (e) => e === "parent" || e === "global",
		default: "parent"
	},
	i18n: { type: Object }
};
function Ni({ slots: e }, n) {
	return n.length === 1 && n[0] === "default" ? (e.default ? e.default() : []).reduce((e, n) => [...e, ...n.type === t ? n.children : [n]], []) : n.reduce((t, n) => {
		let r = e[n];
		return r && (t[n] = r()), t;
	}, W());
}
function Pi() {
	return t;
}
var Fi = /* @__PURE__ */ l({
	name: "i18n-t",
	props: U({
		keypath: {
			type: String,
			required: !0
		},
		plural: {
			type: [Number, String],
			validator: (e) => H(e) || !isNaN(e)
		}
	}, Mi),
	setup(e, t) {
		let { slots: n, attrs: r } = t, i = e.i18n || Ki({
			useScope: e.scope,
			__useComponent: !0
		});
		return () => {
			let a = () => {
				let r = Object.keys(n).filter((e) => e[0] !== "_"), a = W();
				e.locale && (a.locale = e.locale), e.plural !== void 0 && (a.plural = q(e.plural) ? +e.plural : e.plural);
				let o = Ni(t, r);
				return i[ui](e.keypath, o, a);
			}, o = U(W(), r), s = q(e.tag) || Y(e.tag) ? e.tag : Pi();
			return Y(s) ? p(s, o, { default: a }) : p(s, o, a());
		};
	}
});
function Ii(e) {
	return G(e) && !q(e[0]);
}
function Li(e, t, n, r) {
	let { slots: i, attrs: a } = t;
	return () => {
		let t = () => {
			let t = { part: !0 }, a = W();
			e.locale && (t.locale = e.locale), q(e.format) ? t.key = e.format : Y(e.format) && (q(e.format.key) && (t.key = e.format.key), a = Object.keys(e.format).reduce((t, r) => n.includes(r) ? U(W(), t, { [r]: e.format[r] }) : t, W()));
			let o = r(e.value, t, a), s = [t.key];
			return G(o) ? s = o.map((e, t) => {
				let n = i[e.type], r = n ? n({
					[e.type]: e.value,
					index: t,
					parts: o
				}) : [e.value];
				return Ii(r) && (r[0].key = `${e.type}-${t}`), r;
			}) : q(o) && (s = [o]), s;
		}, o = U(W(), a), s = q(e.tag) || Y(e.tag) ? e.tag : Pi();
		return Y(s) ? p(s, o, { default: t }) : p(s, o, t());
	};
}
var Ri = /* @__PURE__ */ l({
	name: "i18n-n",
	props: U({
		value: {
			type: Number,
			required: !0
		},
		format: { type: [String, Object] }
	}, Mi),
	setup(e, t) {
		let n = e.i18n || Ki({
			useScope: e.scope,
			__useComponent: !0
		});
		return Li(e, t, Br, (...e) => n[fi](...e));
	}
});
function zi(e, t) {
	let n = e;
	if (e.mode === "composition") return n.__getInstance(t) || e.global;
	{
		let r = n.__getInstance(t);
		return r == null ? e.global.__composer : r.__composer;
	}
}
function Bi(e) {
	let t = (t) => {
		let { instance: n, value: r } = t;
		/* istanbul ignore if */
		if (!n || !n.$) throw li(Q.UNEXPECTED_ERROR);
		let i = zi(e, n.$), a = Vi(r);
		return [Reflect.apply(i.t, i, [...Hi(a)]), i];
	};
	return {
		created: (e, n) => {
			let [r, i] = t(n);
			tt && (e.__i18nWatcher = A(i.locale, () => {
				n.instance && n.instance.$forceUpdate();
			})), e.__composer = i, e.textContent = r;
		},
		unmounted: (e) => {
			tt && e.__i18nWatcher && (e.__i18nWatcher(), e.__i18nWatcher = void 0, delete e.__i18nWatcher), e.__composer && (e.__composer = void 0, delete e.__composer);
		},
		beforeUpdate: (e, { value: t }) => {
			if (e.__composer) {
				let n = e.__composer, r = Vi(t);
				e.textContent = Reflect.apply(n.t, n, [...Hi(r)]);
			}
		},
		getSSRProps: (e) => {
			let [n] = t(e);
			return { textContent: n };
		}
	};
}
function Vi(e) {
	if (q(e)) return { path: e };
	if (X(e)) {
		if (!("path" in e)) throw li(Q.REQUIRED_VALUE, "path");
		return e;
	} else throw li(Q.INVALID_VALUE);
}
function Hi(e) {
	let { path: t, locale: n, args: r, choice: i, plural: a } = e, o = {}, s = r || {};
	return q(n) && (o.locale = n), H(i) && (o.plural = i), H(a) && (o.plural = a), [
		t,
		s,
		o
	];
}
function Ui(e, t, ...n) {
	let r = X(n[0]) ? n[0] : {};
	(!J(r.globalInstall) || r.globalInstall) && ([Fi.name, "I18nT"].forEach((t) => e.component(t, Fi)), [Ri.name, "I18nN"].forEach((t) => e.component(t, Ri)), [ra.name, "I18nD"].forEach((t) => e.component(t, ra))), e.directive("t", Bi(t));
}
var Wi = /* #__PURE__*/ nt("global-vue-i18n");
function Gi(e = {}) {
	let t = __VUE_I18N_LEGACY_API__ && J(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__, n = J(e.globalInjection) ? e.globalInjection : !0, r = /* @__PURE__ */ new Map(), [i, a] = qi(e, t), o = /* #__PURE__*/ nt("");
	function s(e) {
		return r.get(e) || null;
	}
	function c(e, t) {
		r.set(e, t);
	}
	function l(e) {
		r.delete(e);
	}
	let u = {
		get mode() {
			return __VUE_I18N_LEGACY_API__ && t ? "legacy" : "composition";
		},
		async install(e, ...r) {
			if (e.__VUE_I18N_SYMBOL__ = o, e.provide(e.__VUE_I18N_SYMBOL__, u), X(r[0])) {
				let e = r[0];
				u.__composerExtend = e.__composerExtend, u.__vueI18nExtend = e.__vueI18nExtend;
			}
			let i = null;
			!t && n && (i = na(e, u.global)), __VUE_I18N_FULL_INSTALL__ && Ui(e, u, ...r), __VUE_I18N_LEGACY_API__ && t && e.mixin(Ai(a, a.__composer, u));
			let s = e.unmount;
			e.unmount = () => {
				i && i(), u.dispose(), s();
			};
		},
		get global() {
			return a;
		},
		dispose() {
			i.stop();
		},
		__instances: r,
		__getInstance: s,
		__setInstance: c,
		__deleteInstance: l
	};
	return u;
}
function Ki(e = {}) {
	let t = Si();
	if (t == null) throw li(Q.MUST_BE_CALL_SETUP_TOP);
	if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__) throw li(Q.NOT_INSTALLED);
	let n = Ji(t), r = Xi(n), i = yi(t), a = Yi(e, i);
	if (a === "global") return bi(r, e, i), r;
	if (a === "parent") {
		let i = Zi(n, t, e.__useComponent);
		return i ??= r, i;
	}
	if (a === "isolated") {
		if (n.mode !== "composition") throw li(Q.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
		let i = n, a = U({}, e);
		a.__root = Zi(n, t) || r;
		let o = Di(a);
		return i.__composerExtend && (o[hi] = i.__composerExtend(o)), f() && b(() => {
			let e = o[hi];
			e && (e(), delete o[hi]);
		}), o;
	}
	let o = n, s = o.__getInstance(t);
	if (s == null) {
		let n = U({}, e);
		"__i18n" in i && (n.__i18n = i.__i18n), r && (n.__root = r), s = Di(n), o.__composerExtend && (s[hi] = o.__composerExtend(s)), $i(o, t, s), o.__setInstance(t, s);
	}
	return s;
}
function qi(e, t) {
	let n = u(), r = __VUE_I18N_LEGACY_API__ && t ? n.run(() => ki(e)) : n.run(() => Di(e));
	if (r == null) throw li(Q.UNEXPECTED_ERROR);
	return [n, r];
}
function Ji(e) {
	let t = m(e.isCE ? Wi : e.appContext.app.__VUE_I18N_SYMBOL__);
	/* istanbul ignore if */
	if (!t) throw li(e.isCE ? Q.NOT_INSTALLED_WITH_PROVIDE : Q.UNEXPECTED_ERROR);
	return t;
}
function Yi(e, t) {
	return st(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Xi(e) {
	return e.mode === "composition" ? e.global : e.global.__composer;
}
function Zi(e, t, n = !1) {
	let r = null, i = t.root, a = Qi(t, n);
	for (; a != null;) {
		let t = e;
		if (e.mode === "composition") r = t.__getInstance(a);
		else if (__VUE_I18N_LEGACY_API__) {
			let e = t.__getInstance(a);
			e != null && (r = e.__composer, n && r && !r[mi] && (r = null));
		}
		if (r != null || i === a) break;
		a = a.parent;
	}
	return r;
}
function Qi(e, t = !1) {
	return e == null ? null : t && e.vnode.ctx || e.parent;
}
function $i(e, t, n) {
	y(() => {}, t), x(() => {
		let r = n;
		e.__deleteInstance(t);
		let i = r[hi];
		i && (i(), delete r[hi]);
	}, t);
}
var ea = [
	"locale",
	"fallbackLocale",
	"availableLocales"
], ta = [
	"t",
	"rt",
	"d",
	"n",
	"tm",
	"te"
];
function na(e, t) {
	let n = Object.create(null);
	return ea.forEach((e) => {
		let r = Object.getOwnPropertyDescriptor(t, e);
		if (!r) throw li(Q.UNEXPECTED_ERROR);
		let i = g(r.value) ? {
			get() {
				return r.value.value;
			},
			set(e) {
				r.value.value = e;
			}
		} : { get() {
			return r.get && r.get();
		} };
		Object.defineProperty(n, e, i);
	}), e.config.globalProperties.$i18n = n, ta.forEach((n) => {
		let r = Object.getOwnPropertyDescriptor(t, n);
		if (!r || !r.value) throw li(Q.UNEXPECTED_ERROR);
		Object.defineProperty(e.config.globalProperties, `$${n}`, r);
	}), () => {
		delete e.config.globalProperties.$i18n, ta.forEach((t) => {
			delete e.config.globalProperties[`$${t}`];
		});
	};
}
var ra = /* @__PURE__ */ l({
	name: "i18n-d",
	props: U({
		value: {
			type: [Number, Date],
			required: !0
		},
		format: { type: [String, Object] }
	}, Mi),
	setup(e, t) {
		let n = e.i18n || Ki({
			useScope: e.scope,
			__useComponent: !0
		});
		return Li(e, t, Ir, (...e) => n[di](...e));
	}
});
if (ci(), _r(zn), yr(ur), xr(Zn), __INTLIFY_PROD_DEVTOOLS__) {
	let e = ut();
	e.__INTLIFY__ = !0, Vn(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
//#endregion
//#region node_modules/es-toolkit/dist/function/debounce.mjs
function ia(e, t, { signal: n, edges: r } = {}) {
	let i, a = null, o = r != null && r.includes("leading"), s = r == null || r.includes("trailing"), c = () => {
		a !== null && (e.apply(i, a), i = void 0, a = null);
	}, l = () => {
		s && c(), p();
	}, u = null, d = () => {
		u != null && clearTimeout(u), u = setTimeout(() => {
			u = null, l();
		}, t);
	}, f = () => {
		u !== null && (clearTimeout(u), u = null);
	}, p = () => {
		f(), i = void 0, a = null;
	}, m = () => {
		c();
	}, h = function(...e) {
		if (n?.aborted) return;
		i = this, a = e;
		let t = u == null;
		d(), o && t && c();
	};
	return h.schedule = d, h.cancel = p, h.flush = m, n?.addEventListener("abort", p, { once: !0 }), h;
}
//#endregion
//#region src/App.vue?vue&type=script&setup=true&lang.ts
var aa = { class: "time-slider-header h-44 w-full grid grid-cols-3" }, oa = { class: "flex items-center" }, sa = ["content", "aria-label"], ca = {
	key: 0,
	xmlns: "http://www.w3.org/2000/svg",
	height: "24px",
	viewBox: "0 0 24 24",
	width: "24px",
	fill: "#595959"
}, la = {
	key: 1,
	xmlns: "http://www.w3.org/2000/svg",
	height: "24px",
	viewBox: "0 0 24 24",
	width: "24px",
	fill: "#595959"
}, ua = { class: "my-2.5 text-base range-display justify-self-center" }, da = { class: "" }, fa = {
	key: 0,
	class: ""
}, pa = { class: "flex items-center" }, ma = ["content", "aria-label"], ha = {
	key: 0,
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "6 6 36 36",
	height: "24",
	width: "24",
	fill: "#595959"
}, ga = {
	key: 1,
	xmlns: "http://www.w3.org/2000/svg",
	height: "24",
	width: "24",
	viewBox: "6 6 36 36",
	fill: "#595959"
}, _a = ["content", "aria-label"], va = /* @__PURE__ */ l({
	__name: "App",
	props: {
		config: {
			type: Object,
			required: !0
		},
		rInstance: { type: Object }
	},
	setup(e) {
		let { t } = Ki(), n = e, r = w(!1), i = w(), c = w(), l = w(), u = w(), d = w(["", ""]), f = w(-1), p = w(!0), m = w(), h, g;
		y(() => {
			n.config.formatters && (Array.isArray(n.config.formatters) ? O(n.config.formatters) : O([n.config.formatters]));
			let e = {
				start: n.config.start,
				range: {
					min: n.config.range[0],
					max: n.config.range[1]
				},
				connect: !0,
				step: 1,
				format: h,
				ariaFormat: g,
				pips: {
					mode: P.Steps,
					density: 100,
					filter: (e) => 1
				},
				...n.config.sliderConfig
			};
			e.pips.format = g, l.value = c.value, u.value = $e.create(l.value, e), u.value.on("update", _), n.rInstance.event.on("layer/layerstatechange", () => {
				n.rInstance.geo.layer.allLayers().every((e) => e.isLoaded) && _();
			}), n.rInstance.event.on("timeslider/toggle", () => {
				p.value = !p.value;
			});
		});
		let _ = ia(() => {
			let e = u.value.get();
			Array.isArray(e) ? d.value = e.map((e) => e.split(".")[0]) : d.value = [e.split(".")[0]];
			let t;
			switch (d.value.length) {
				case 1:
					t = n.config.arcgisDate ? `${n.config.attribute} = ${v(d.value[0])}` : `${n.config.attribute} = ${d.value[0]}`;
					break;
				default:
					t = n.config.arcgisDate ? `${n.config.attribute} >= ${v(d.value[0])} AND ${n.config.attribute} <= ${v(d.value[1])}` : `${n.config.attribute} >= ${d.value[0]} AND ${n.config.attribute} <= ${d.value[1]}`;
					break;
			}
			!n.config.layers || n.config.layers.length === 0 ? n.rInstance.geo.layer.allLayers().filter((e) => e.supportsFeatures && !e.isCosmetic).forEach((e) => {
				e.setSqlFilter("time_slider", t);
			}) : n.config.layers.forEach((e) => {
				n.rInstance.geo.layer.getLayer(e)?.setSqlFilter("time_slider", t);
			});
		}, 250, { edges: ["trailing"] }), v = (e) => {
			let t = new Date(parseInt(e));
			return `timestamp '${t.getUTCFullYear()}-${t.getUTCMonth().toString().padStart(2, "0")}-${t.getUTCDay().toString().padStart(2, "0")} ${t.getUTCHours().toString().padStart(2, "0")}:${t.getUTCMinutes().toString().padStart(2, "0")}:${t.getUTCSeconds().toString().padStart(2, "0")}'`;
		}, b = () => {
			let e = u.value.get(!0);
			Array.isArray(e) && u.value.set(e.map(() => e[0])), f.value = window.setInterval(x, n.config.animation?.interval || 1400);
		}, x = () => {
			let e = u.value.get(!0), t;
			if (Array.isArray(e)) {
				let r = u.value.steps()[e.length - 1][1];
				switch (n.config.animation?.playMode) {
					case N.Append:
						t = e.with(e.length - 1, r ? e[e.length - 1] + r : n.config.range[0]);
						break;
					case N.Distinct:
					default:
						t = e.map(() => r ? e[e.length - 1] + r : n.config.range[0]);
						break;
				}
			} else t = [e === n.config.range[1] ? n.config.range[0] : e + 1];
			u.value.set(t);
		}, C = () => {
			clearInterval(f.value), f.value = -1;
		}, E = () => {
			r.value = !r.value, r.value ? i.value.parentElement.classList.add("minimized") : i.value.parentElement.classList.remove("minimized");
		}, O = (e) => {
			m.value = A(e.find((e) => e.display === !0) || e.find((e) => e.display === void 0)), h = A(e.find((e) => e.internal === !0)), g = A(e.find((e) => e.pips === !0) || e.find((e) => e.pips === void 0));
		}, A = (e) => {
			if (e !== void 0) switch (e.mode) {
				case M.Values:
					let n = e;
					return {
						to: (e, t) => isNaN(e) ? "" : n.values[e - 1],
						from: (e) => n.values.indexOf(e)
					};
				case M.Ranges:
					let r = e;
					return {
						to: (e, t) => isNaN(e) ? "" : t === void 0 ? r.ranges[e - 1].join(r.separator || "-") : r.ranges[e - 1][t],
						from: (e) => r.ranges.indexOf(e.split(r.separator || "-"))
					};
				case M.Date:
					let i = e;
					return {
						to: (e, n) => {
							if (isNaN(e)) return "";
							let r = new Date(e), a = [
								"jan",
								"feb",
								"mar",
								"apr",
								"may",
								"jun",
								"jul",
								"aug",
								"sep",
								"oct",
								"nov",
								"dec"
							], o = {
								"(Y+)": r.getFullYear(),
								"(D+)": r.getDate(),
								"(h+)": r.getHours(),
								"(m+)": r.getMinutes(),
								"(s+)": r.getSeconds()
							}, s = i.format;
							return Object.entries(o).forEach(([e, t]) => {
								s = s.replace(new RegExp(e, "g"), (e) => t.toString().padStart(2, "0").slice(-1 * e.length));
							}), s = s.replace(/* @__PURE__ */ RegExp("(M+)"), (e) => e.length === 1 ? (r.getUTCMonth() + 1).toString().padStart(2, "0") : t(`month.${a[r.getUTCMonth()]}`)), s;
						},
						from: (e) => Date.parse(e)
					};
				default: return;
			}
		};
		return (e, t) => {
			let n = T("tippy");
			return j((S(), o("div", {
				ref_key: "el",
				ref: i,
				class: "time-slider shadow-tm absolute w-full h-full left-0 flex flex-col items-center bg-white"
			}, [
				s("div", aa, [
					s("div", oa, [j((S(), o("button", {
						class: "ml-10",
						onClick: t[0] ||= (e) => f.value >= 0 ? C() : b(),
						content: e.$t(f.value >= 0 ? "timeslider.pause" : "timeslider.play"),
						"aria-label": e.$t(f.value >= 0 ? "timeslider.pause" : "timeslider.play")
					}, [f.value === -1 ? (S(), o("svg", ca, [...t[3] ||= [s("path", {
						d: "M0 0h24v24H0z",
						fill: "none"
					}, null, -1), s("path", { d: "M8 5v14l11-7z" }, null, -1)]])) : (S(), o("svg", la, [...t[4] ||= [s("path", {
						d: "M0 0h24v24H0z",
						fill: "none"
					}, null, -1), s("path", { d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z" }, null, -1)]]))], 8, sa)), [[n, {
						placement: "top",
						hideOnClick: !1,
						animateFill: !0,
						theme: "ramp4"
					}]])]),
					s("span", ua, [s("span", da, D(m.value ? m.value.to(parseInt(d.value[0]), 0) : d.value[0]), 1), d.value[1] ? (S(), o("span", fa, " - " + D(m.value ? m.value.to(parseInt(d.value[1]), 1) : d.value[1]), 1)) : a("", !0)]),
					s("div", pa, [j((S(), o("button", {
						class: "ml-auto",
						onClick: t[1] ||= (e) => E(),
						content: e.$t(r.value ? "timeslider.expand" : "timeslider.minimize"),
						"aria-label": e.$t(r.value ? "timeslider.expand" : "timeslider.minimize")
					}, [r.value ? (S(), o("svg", ga, [...t[6] ||= [s("path", { d: "M14.15 30.75 12 28.6l12-12 12 11.95-2.15 2.15L24 20.85Z" }, null, -1)]])) : (S(), o("svg", ha, [...t[5] ||= [s("path", { d: "m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z" }, null, -1)]]))], 8, ma)), [[n, {
						placement: "top",
						hideOnClick: !1,
						animateFill: !0,
						theme: "ramp4"
					}]]), j((S(), o("button", {
						class: "ml-6 mr-10",
						onClick: t[2] ||= (e) => p.value = !1,
						content: e.$t("timeslider.close"),
						"aria-label": e.$t("timeslider.close")
					}, [...t[7] ||= [s("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						height: "24px",
						viewBox: "0 -960 960 960",
						width: "24px",
						fill: "#595959"
					}, [s("path", { d: "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" })], -1)]], 8, _a)), [[n, {
						placement: "top",
						hideOnClick: !0,
						animateFill: !0,
						theme: "ramp4",
						appendTo: "parent"
					}]])])
				]),
				t[8] ||= s("div", { class: "time-slider-backdrop" }, null, -1),
				j(s("div", {
					ref_key: "sliderTarget",
					ref: c,
					class: "noUi-target noUiSlider"
				}, null, 512), [[k, !r.value]])
			], 512)), [[k, p.value]]);
		};
	}
}), ya = "top", ba = "bottom", xa = "right", Sa = "left", Ca = "auto", wa = [
	ya,
	ba,
	xa,
	Sa
], Ta = "start", Ea = "end", Da = "clippingParents", Oa = "viewport", ka = "popper", Aa = "reference", ja = /*#__PURE__*/ wa.reduce(function(e, t) {
	return e.concat([t + "-" + Ta, t + "-" + Ea]);
}, []), Ma = /*#__PURE__*/ [].concat(wa, [Ca]).reduce(function(e, t) {
	return e.concat([
		t,
		t + "-" + Ta,
		t + "-" + Ea
	]);
}, []), Na = [
	"beforeRead",
	"read",
	"afterRead",
	"beforeMain",
	"main",
	"afterMain",
	"beforeWrite",
	"write",
	"afterWrite"
];
function Pa(e) {
	return e ? (e.nodeName || "").toLowerCase() : null;
}
function Fa(e) {
	if (e == null) return window;
	if (e.toString() !== "[object Window]") {
		var t = e.ownerDocument;
		return t && t.defaultView || window;
	}
	return e;
}
function Ia(e) {
	return e instanceof Fa(e).Element || e instanceof Element;
}
function La(e) {
	return e instanceof Fa(e).HTMLElement || e instanceof HTMLElement;
}
function Ra(e) {
	return typeof ShadowRoot > "u" ? !1 : e instanceof Fa(e).ShadowRoot || e instanceof ShadowRoot;
}
function za(e) {
	var t = e.state;
	Object.keys(t.elements).forEach(function(e) {
		var n = t.styles[e] || {}, r = t.attributes[e] || {}, i = t.elements[e];
		!La(i) || !Pa(i) || (Object.assign(i.style, n), Object.keys(r).forEach(function(e) {
			var t = r[e];
			t === !1 ? i.removeAttribute(e) : i.setAttribute(e, t === !0 ? "" : t);
		}));
	});
}
function Ba(e) {
	var t = e.state, n = {
		popper: {
			position: t.options.strategy,
			left: "0",
			top: "0",
			margin: "0"
		},
		arrow: { position: "absolute" },
		reference: {}
	};
	return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
		Object.keys(t.elements).forEach(function(e) {
			var r = t.elements[e], i = t.attributes[e] || {}, a = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(function(e, t) {
				return e[t] = "", e;
			}, {});
			!La(r) || !Pa(r) || (Object.assign(r.style, a), Object.keys(i).forEach(function(e) {
				r.removeAttribute(e);
			}));
		});
	};
}
var Va = {
	name: "applyStyles",
	enabled: !0,
	phase: "write",
	fn: za,
	effect: Ba,
	requires: ["computeStyles"]
};
function Ha(e) {
	return e.split("-")[0];
}
var Ua = Math.max, Wa = Math.min, Ga = Math.round;
function Ka(e, t) {
	t === void 0 && (t = !1);
	var n = e.getBoundingClientRect(), r = 1, i = 1;
	if (La(e) && t) {
		var a = e.offsetHeight, o = e.offsetWidth;
		o > 0 && (r = Ga(n.width) / o || 1), a > 0 && (i = Ga(n.height) / a || 1);
	}
	return {
		width: n.width / r,
		height: n.height / i,
		top: n.top / i,
		right: n.right / r,
		bottom: n.bottom / i,
		left: n.left / r,
		x: n.left / r,
		y: n.top / i
	};
}
function qa(e) {
	var t = Ka(e), n = e.offsetWidth, r = e.offsetHeight;
	return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
		x: e.offsetLeft,
		y: e.offsetTop,
		width: n,
		height: r
	};
}
function Ja(e, t) {
	var n = t.getRootNode && t.getRootNode();
	if (e.contains(t)) return !0;
	if (n && Ra(n)) {
		var r = t;
		do {
			if (r && e.isSameNode(r)) return !0;
			r = r.parentNode || r.host;
		} while (r);
	}
	return !1;
}
function Ya(e) {
	return Fa(e).getComputedStyle(e);
}
function Xa(e) {
	return [
		"table",
		"td",
		"th"
	].indexOf(Pa(e)) >= 0;
}
function Za(e) {
	return ((Ia(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Qa(e) {
	return Pa(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ra(e) ? e.host : null) || Za(e);
}
function $a(e) {
	return !La(e) || Ya(e).position === "fixed" ? null : e.offsetParent;
}
function eo(e) {
	var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
	if (navigator.userAgent.indexOf("Trident") !== -1 && La(e) && Ya(e).position === "fixed") return null;
	for (var n = Qa(e); La(n) && ["html", "body"].indexOf(Pa(n)) < 0;) {
		var r = Ya(n);
		if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none") return n;
		n = n.parentNode;
	}
	return null;
}
function to(e) {
	for (var t = Fa(e), n = $a(e); n && Xa(n) && Ya(n).position === "static";) n = $a(n);
	return n && (Pa(n) === "html" || Pa(n) === "body" && Ya(n).position === "static") ? t : n || eo(e) || t;
}
function no(e) {
	return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ro(e, t, n) {
	return Ua(e, Wa(t, n));
}
function io(e, t, n) {
	var r = ro(e, t, n);
	return r > n ? n : r;
}
function ao() {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	};
}
function oo(e) {
	return Object.assign({}, ao(), e);
}
function so(e, t) {
	return t.reduce(function(t, n) {
		return t[n] = e, t;
	}, {});
}
var co = function(e, t) {
	return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, oo(typeof e == "number" ? so(e, wa) : e);
};
function lo(e) {
	var t, n = e.state, r = e.name, i = e.options, a = n.elements.arrow, o = n.modifiersData.popperOffsets, s = Ha(n.placement), c = no(s), l = [Sa, xa].indexOf(s) >= 0 ? "height" : "width";
	if (!(!a || !o)) {
		var u = co(i.padding, n), d = qa(a), f = c === "y" ? ya : Sa, p = c === "y" ? ba : xa, m = n.rects.reference[l] + n.rects.reference[c] - o[c] - n.rects.popper[l], h = o[c] - n.rects.reference[c], g = to(a), _ = g ? c === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, v = m / 2 - h / 2, y = u[f], b = _ - d[l] - u[p], x = _ / 2 - d[l] / 2 + v, S = ro(y, x, b), C = c;
		n.modifiersData[r] = (t = {}, t[C] = S, t.centerOffset = S - x, t);
	}
}
function uo(e) {
	var t = e.state, n = e.options.element, r = n === void 0 ? "[data-popper-arrow]" : n;
	r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || Ja(t.elements.popper, r) && (t.elements.arrow = r));
}
var fo = {
	name: "arrow",
	enabled: !0,
	phase: "main",
	fn: lo,
	effect: uo,
	requires: ["popperOffsets"],
	requiresIfExists: ["preventOverflow"]
};
function po(e) {
	return e.split("-")[1];
}
var mo = {
	top: "auto",
	right: "auto",
	bottom: "auto",
	left: "auto"
};
function ho(e) {
	var t = e.x, n = e.y, r = window.devicePixelRatio || 1;
	return {
		x: Ga(t * r) / r || 0,
		y: Ga(n * r) / r || 0
	};
}
function go(e) {
	var t, n = e.popper, r = e.popperRect, i = e.placement, a = e.variation, o = e.offsets, s = e.position, c = e.gpuAcceleration, l = e.adaptive, u = e.roundOffsets, d = e.isFixed, f = u === !0 ? ho(o) : typeof u == "function" ? u(o) : o, p = f.x, m = p === void 0 ? 0 : p, h = f.y, g = h === void 0 ? 0 : h, _ = o.hasOwnProperty("x"), v = o.hasOwnProperty("y"), y = Sa, b = ya, x = window;
	if (l) {
		var S = to(n), C = "clientHeight", w = "clientWidth";
		if (S === Fa(n) && (S = Za(n), Ya(S).position !== "static" && s === "absolute" && (C = "scrollHeight", w = "scrollWidth")), S = S, i === ya || (i === Sa || i === xa) && a === Ea) {
			b = ba;
			var T = d && x.visualViewport ? x.visualViewport.height : S[C];
			g -= T - r.height, g *= c ? 1 : -1;
		}
		if (i === Sa || (i === ya || i === ba) && a === Ea) {
			y = xa;
			var E = d && x.visualViewport ? x.visualViewport.width : S[w];
			m -= E - r.width, m *= c ? 1 : -1;
		}
	}
	var D = Object.assign({ position: s }, l && mo);
	if (c) {
		var O;
		return Object.assign({}, D, (O = {}, O[b] = v ? "0" : "", O[y] = _ ? "0" : "", O.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + g + "px)" : "translate3d(" + m + "px, " + g + "px, 0)", O));
	}
	return Object.assign({}, D, (t = {}, t[b] = v ? g + "px" : "", t[y] = _ ? m + "px" : "", t.transform = "", t));
}
function _o(e) {
	var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, a = n.adaptive, o = a === void 0 ? !0 : a, s = n.roundOffsets, c = s === void 0 ? !0 : s, l = {
		placement: Ha(t.placement),
		variation: po(t.placement),
		popper: t.elements.popper,
		popperRect: t.rects.popper,
		gpuAcceleration: i,
		isFixed: t.options.strategy === "fixed"
	};
	t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, go(Object.assign({}, l, {
		offsets: t.modifiersData.popperOffsets,
		position: t.options.strategy,
		adaptive: o,
		roundOffsets: c
	})))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, go(Object.assign({}, l, {
		offsets: t.modifiersData.arrow,
		position: "absolute",
		adaptive: !1,
		roundOffsets: c
	})))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var vo = {
	name: "computeStyles",
	enabled: !0,
	phase: "beforeWrite",
	fn: _o,
	data: {}
}, yo = { passive: !0 };
function bo(e) {
	var t = e.state, n = e.instance, r = e.options, i = r.scroll, a = i === void 0 ? !0 : i, o = r.resize, s = o === void 0 ? !0 : o, c = Fa(t.elements.popper), l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
	return a && l.forEach(function(e) {
		e.addEventListener("scroll", n.update, yo);
	}), s && c.addEventListener("resize", n.update, yo), function() {
		a && l.forEach(function(e) {
			e.removeEventListener("scroll", n.update, yo);
		}), s && c.removeEventListener("resize", n.update, yo);
	};
}
var xo = {
	name: "eventListeners",
	enabled: !0,
	phase: "write",
	fn: function() {},
	effect: bo,
	data: {}
}, So = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function Co(e) {
	return e.replace(/left|right|bottom|top/g, function(e) {
		return So[e];
	});
}
var wo = {
	start: "end",
	end: "start"
};
function To(e) {
	return e.replace(/start|end/g, function(e) {
		return wo[e];
	});
}
function Eo(e) {
	var t = Fa(e);
	return {
		scrollLeft: t.pageXOffset,
		scrollTop: t.pageYOffset
	};
}
function Do(e) {
	return Ka(Za(e)).left + Eo(e).scrollLeft;
}
function Oo(e) {
	var t = Fa(e), n = Za(e), r = t.visualViewport, i = n.clientWidth, a = n.clientHeight, o = 0, s = 0;
	return r && (i = r.width, a = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (o = r.offsetLeft, s = r.offsetTop)), {
		width: i,
		height: a,
		x: o + Do(e),
		y: s
	};
}
function ko(e) {
	var t = Za(e), n = Eo(e), r = e.ownerDocument?.body, i = Ua(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), a = Ua(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), o = -n.scrollLeft + Do(e), s = -n.scrollTop;
	return Ya(r || t).direction === "rtl" && (o += Ua(t.clientWidth, r ? r.clientWidth : 0) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
function Ao(e) {
	var t = Ya(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
	return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function jo(e) {
	return [
		"html",
		"body",
		"#document"
	].indexOf(Pa(e)) >= 0 ? e.ownerDocument.body : La(e) && Ao(e) ? e : jo(Qa(e));
}
function Mo(e, t) {
	t === void 0 && (t = []);
	var n = jo(e), r = n === e.ownerDocument?.body, i = Fa(n), a = r ? [i].concat(i.visualViewport || [], Ao(n) ? n : []) : n, o = t.concat(a);
	return r ? o : o.concat(Mo(Qa(a)));
}
function No(e) {
	return Object.assign({}, e, {
		left: e.x,
		top: e.y,
		right: e.x + e.width,
		bottom: e.y + e.height
	});
}
function Po(e) {
	var t = Ka(e);
	return t.top += e.clientTop, t.left += e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function Fo(e, t) {
	return t === Oa ? No(Oo(e)) : Ia(t) ? Po(t) : No(ko(Za(e)));
}
function Io(e) {
	var t = Mo(Qa(e)), n = ["absolute", "fixed"].indexOf(Ya(e).position) >= 0, r = n && La(e) ? to(e) : e;
	return Ia(r) ? t.filter(function(e) {
		return Ia(e) && Ja(e, r) && Pa(e) !== "body" && (n ? Ya(e).position !== "static" : !0);
	}) : [];
}
function Lo(e, t, n) {
	var r = t === "clippingParents" ? Io(e) : [].concat(t), i = [].concat(r, [n]), a = i[0], o = i.reduce(function(t, n) {
		var r = Fo(e, n);
		return t.top = Ua(r.top, t.top), t.right = Wa(r.right, t.right), t.bottom = Wa(r.bottom, t.bottom), t.left = Ua(r.left, t.left), t;
	}, Fo(e, a));
	return o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o;
}
function Ro(e) {
	var t = e.reference, n = e.element, r = e.placement, i = r ? Ha(r) : null, a = r ? po(r) : null, o = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, c;
	switch (i) {
		case ya:
			c = {
				x: o,
				y: t.y - n.height
			};
			break;
		case ba:
			c = {
				x: o,
				y: t.y + t.height
			};
			break;
		case xa:
			c = {
				x: t.x + t.width,
				y: s
			};
			break;
		case Sa:
			c = {
				x: t.x - n.width,
				y: s
			};
			break;
		default: c = {
			x: t.x,
			y: t.y
		};
	}
	var l = i ? no(i) : null;
	if (l != null) {
		var u = l === "y" ? "height" : "width";
		switch (a) {
			case Ta:
				c[l] = c[l] - (t[u] / 2 - n[u] / 2);
				break;
			case Ea:
				c[l] = c[l] + (t[u] / 2 - n[u] / 2);
				break;
		}
	}
	return c;
}
function zo(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.placement, i = r === void 0 ? e.placement : r, a = n.boundary, o = a === void 0 ? Da : a, s = n.rootBoundary, c = s === void 0 ? Oa : s, l = n.elementContext, u = l === void 0 ? ka : l, d = n.altBoundary, f = d === void 0 ? !1 : d, p = n.padding, m = p === void 0 ? 0 : p, h = oo(typeof m == "number" ? so(m, wa) : m), g = u === ka ? Aa : ka, _ = e.rects.popper, v = e.elements[f ? g : u], y = Lo(Ia(v) ? v : v.contextElement || Za(e.elements.popper), o, c), b = Ka(e.elements.reference), x = Ro({
		reference: b,
		element: _,
		strategy: "absolute",
		placement: i
	}), S = No(Object.assign({}, _, x)), C = u === ka ? S : b, w = {
		top: y.top - C.top + h.top,
		bottom: C.bottom - y.bottom + h.bottom,
		left: y.left - C.left + h.left,
		right: C.right - y.right + h.right
	}, T = e.modifiersData.offset;
	if (u === ka && T) {
		var E = T[i];
		Object.keys(w).forEach(function(e) {
			var t = [xa, ba].indexOf(e) >= 0 ? 1 : -1, n = [ya, ba].indexOf(e) >= 0 ? "y" : "x";
			w[e] += E[n] * t;
		});
	}
	return w;
}
function Bo(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.placement, i = n.boundary, a = n.rootBoundary, o = n.padding, s = n.flipVariations, c = n.allowedAutoPlacements, l = c === void 0 ? Ma : c, u = po(r), d = u ? s ? ja : ja.filter(function(e) {
		return po(e) === u;
	}) : wa, f = d.filter(function(e) {
		return l.indexOf(e) >= 0;
	});
	f.length === 0 && (f = d);
	var p = f.reduce(function(t, n) {
		return t[n] = zo(e, {
			placement: n,
			boundary: i,
			rootBoundary: a,
			padding: o
		})[Ha(n)], t;
	}, {});
	return Object.keys(p).sort(function(e, t) {
		return p[e] - p[t];
	});
}
function Vo(e) {
	if (Ha(e) === Ca) return [];
	var t = Co(e);
	return [
		To(e),
		t,
		To(t)
	];
}
function Ho(e) {
	var t = e.state, n = e.options, r = e.name;
	if (!t.modifiersData[r]._skip) {
		for (var i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !0 : o, c = n.fallbackPlacements, l = n.padding, u = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, m = p === void 0 ? !0 : p, h = n.allowedAutoPlacements, g = t.options.placement, _ = Ha(g) === g, v = c || (_ || !m ? [Co(g)] : Vo(g)), y = [g].concat(v).reduce(function(e, n) {
			return e.concat(Ha(n) === Ca ? Bo(t, {
				placement: n,
				boundary: u,
				rootBoundary: d,
				padding: l,
				flipVariations: m,
				allowedAutoPlacements: h
			}) : n);
		}, []), b = t.rects.reference, x = t.rects.popper, S = /* @__PURE__ */ new Map(), C = !0, w = y[0], T = 0; T < y.length; T++) {
			var E = y[T], D = Ha(E), O = po(E) === Ta, k = [ya, ba].indexOf(D) >= 0, A = k ? "width" : "height", j = zo(t, {
				placement: E,
				boundary: u,
				rootBoundary: d,
				altBoundary: f,
				padding: l
			}), M = k ? O ? xa : Sa : O ? ba : ya;
			b[A] > x[A] && (M = Co(M));
			var N = Co(M), P = [];
			if (a && P.push(j[D] <= 0), s && P.push(j[M] <= 0, j[N] <= 0), P.every(function(e) {
				return e;
			})) {
				w = E, C = !1;
				break;
			}
			S.set(E, P);
		}
		if (C) for (var F = m ? 3 : 1, ee = function(e) {
			var t = y.find(function(t) {
				var n = S.get(t);
				if (n) return n.slice(0, e).every(function(e) {
					return e;
				});
			});
			if (t) return w = t, "break";
		}, I = F; I > 0 && ee(I) !== "break"; I--);
		t.placement !== w && (t.modifiersData[r]._skip = !0, t.placement = w, t.reset = !0);
	}
}
var Uo = {
	name: "flip",
	enabled: !0,
	phase: "main",
	fn: Ho,
	requiresIfExists: ["offset"],
	data: { _skip: !1 }
};
function Wo(e, t, n) {
	return n === void 0 && (n = {
		x: 0,
		y: 0
	}), {
		top: e.top - t.height - n.y,
		right: e.right - t.width + n.x,
		bottom: e.bottom - t.height + n.y,
		left: e.left - t.width - n.x
	};
}
function Go(e) {
	return [
		ya,
		xa,
		ba,
		Sa
	].some(function(t) {
		return e[t] >= 0;
	});
}
function Ko(e) {
	var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, o = zo(t, { elementContext: "reference" }), s = zo(t, { altBoundary: !0 }), c = Wo(o, r), l = Wo(s, i, a), u = Go(c), d = Go(l);
	t.modifiersData[n] = {
		referenceClippingOffsets: c,
		popperEscapeOffsets: l,
		isReferenceHidden: u,
		hasPopperEscaped: d
	}, t.attributes.popper = Object.assign({}, t.attributes.popper, {
		"data-popper-reference-hidden": u,
		"data-popper-escaped": d
	});
}
var qo = {
	name: "hide",
	enabled: !0,
	phase: "main",
	requiresIfExists: ["preventOverflow"],
	fn: Ko
};
function Jo(e, t, n) {
	var r = Ha(e), i = [Sa, ya].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, o = a[0], s = a[1];
	return o ||= 0, s = (s || 0) * i, [Sa, xa].indexOf(r) >= 0 ? {
		x: s,
		y: o
	} : {
		x: o,
		y: s
	};
}
function Yo(e) {
	var t = e.state, n = e.options, r = e.name, i = n.offset, a = i === void 0 ? [0, 0] : i, o = Ma.reduce(function(e, n) {
		return e[n] = Jo(n, t.rects, a), e;
	}, {}), s = o[t.placement], c = s.x, l = s.y;
	t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += l), t.modifiersData[r] = o;
}
var Xo = {
	name: "offset",
	enabled: !0,
	phase: "main",
	requires: ["popperOffsets"],
	fn: Yo
};
function Zo(e) {
	var t = e.state, n = e.name;
	t.modifiersData[n] = Ro({
		reference: t.rects.reference,
		element: t.rects.popper,
		strategy: "absolute",
		placement: t.placement
	});
}
var Qo = {
	name: "popperOffsets",
	enabled: !0,
	phase: "read",
	fn: Zo,
	data: {}
};
function $o(e) {
	return e === "x" ? "y" : "x";
}
function es(e) {
	var t = e.state, n = e.options, r = e.name, i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !1 : o, c = n.boundary, l = n.rootBoundary, u = n.altBoundary, d = n.padding, f = n.tether, p = f === void 0 ? !0 : f, m = n.tetherOffset, h = m === void 0 ? 0 : m, g = zo(t, {
		boundary: c,
		rootBoundary: l,
		padding: d,
		altBoundary: u
	}), _ = Ha(t.placement), v = po(t.placement), y = !v, b = no(_), x = $o(b), S = t.modifiersData.popperOffsets, C = t.rects.reference, w = t.rects.popper, T = typeof h == "function" ? h(Object.assign({}, t.rects, { placement: t.placement })) : h, E = typeof T == "number" ? {
		mainAxis: T,
		altAxis: T
	} : Object.assign({
		mainAxis: 0,
		altAxis: 0
	}, T), D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, O = {
		x: 0,
		y: 0
	};
	if (S) {
		if (a) {
			var k = b === "y" ? ya : Sa, A = b === "y" ? ba : xa, j = b === "y" ? "height" : "width", M = S[b], N = M + g[k], P = M - g[A], F = p ? -w[j] / 2 : 0, ee = v === Ta ? C[j] : w[j], I = v === Ta ? -w[j] : -C[j], te = t.elements.arrow, ne = p && te ? qa(te) : {
				width: 0,
				height: 0
			}, re = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ao(), ie = re[k], ae = re[A], oe = ro(0, C[j], ne[j]), L = y ? C[j] / 2 - F - oe - ie - E.mainAxis : ee - oe - ie - E.mainAxis, se = y ? -C[j] / 2 + F + oe + ae + E.mainAxis : I + oe + ae + E.mainAxis, ce = t.elements.arrow && to(t.elements.arrow), le = ce ? b === "y" ? ce.clientTop || 0 : ce.clientLeft || 0 : 0, ue = D?.[b] ?? 0, R = M + L - ue - le, de = M + se - ue, fe = ro(p ? Wa(N, R) : N, M, p ? Ua(P, de) : P);
			S[b] = fe, O[b] = fe - M;
		}
		if (s) {
			var pe = b === "x" ? ya : Sa, me = b === "x" ? ba : xa, he = S[x], ge = x === "y" ? "height" : "width", _e = he + g[pe], ve = he - g[me], ye = [ya, Sa].indexOf(_) !== -1, be = D?.[x] ?? 0, z = ye ? _e : he - C[ge] - w[ge] - be + E.altAxis, B = ye ? he + C[ge] + w[ge] - be - E.altAxis : ve, xe = p && ye ? io(z, he, B) : ro(p ? z : _e, he, p ? B : ve);
			S[x] = xe, O[x] = xe - he;
		}
		t.modifiersData[r] = O;
	}
}
var ts = {
	name: "preventOverflow",
	enabled: !0,
	phase: "main",
	fn: es,
	requiresIfExists: ["offset"]
};
function ns(e) {
	return {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	};
}
function rs(e) {
	return e === Fa(e) || !La(e) ? Eo(e) : ns(e);
}
function is(e) {
	var t = e.getBoundingClientRect(), n = Ga(t.width) / e.offsetWidth || 1, r = Ga(t.height) / e.offsetHeight || 1;
	return n !== 1 || r !== 1;
}
function as(e, t, n) {
	n === void 0 && (n = !1);
	var r = La(t), i = La(t) && is(t), a = Za(t), o = Ka(e, i), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = {
		x: 0,
		y: 0
	};
	return (r || !r && !n) && ((Pa(t) !== "body" || Ao(a)) && (s = rs(t)), La(t) ? (c = Ka(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : a && (c.x = Do(a))), {
		x: o.left + s.scrollLeft - c.x,
		y: o.top + s.scrollTop - c.y,
		width: o.width,
		height: o.height
	};
}
function os(e) {
	var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
	e.forEach(function(e) {
		t.set(e.name, e);
	});
	function i(e) {
		n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach(function(e) {
			if (!n.has(e)) {
				var r = t.get(e);
				r && i(r);
			}
		}), r.push(e);
	}
	return e.forEach(function(e) {
		n.has(e.name) || i(e);
	}), r;
}
function ss(e) {
	var t = os(e);
	return Na.reduce(function(e, n) {
		return e.concat(t.filter(function(e) {
			return e.phase === n;
		}));
	}, []);
}
function cs(e) {
	var t;
	return function() {
		return t ||= new Promise(function(n) {
			Promise.resolve().then(function() {
				t = void 0, n(e());
			});
		}), t;
	};
}
function ls(e) {
	var t = e.reduce(function(e, t) {
		var n = e[t.name];
		return e[t.name] = n ? Object.assign({}, n, t, {
			options: Object.assign({}, n.options, t.options),
			data: Object.assign({}, n.data, t.data)
		}) : t, e;
	}, {});
	return Object.keys(t).map(function(e) {
		return t[e];
	});
}
var us = {
	placement: "bottom",
	modifiers: [],
	strategy: "absolute"
};
function ds() {
	return ![...arguments].some(function(e) {
		return !(e && typeof e.getBoundingClientRect == "function");
	});
}
function fs(e) {
	e === void 0 && (e = {});
	var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, a = i === void 0 ? us : i;
	return function(e, t, n) {
		n === void 0 && (n = a);
		var i = {
			placement: "bottom",
			orderedModifiers: [],
			options: Object.assign({}, us, a),
			modifiersData: {},
			elements: {
				reference: e,
				popper: t
			},
			attributes: {},
			styles: {}
		}, o = [], s = !1, c = {
			state: i,
			setOptions: function(n) {
				var o = typeof n == "function" ? n(i.options) : n;
				u(), i.options = Object.assign({}, a, i.options, o), i.scrollParents = {
					reference: Ia(e) ? Mo(e) : e.contextElement ? Mo(e.contextElement) : [],
					popper: Mo(t)
				};
				var s = ss(ls([].concat(r, i.options.modifiers)));
				return i.orderedModifiers = s.filter(function(e) {
					return e.enabled;
				}), l(), c.update();
			},
			forceUpdate: function() {
				if (!s) {
					var e = i.elements, t = e.reference, n = e.popper;
					if (ds(t, n)) {
						i.rects = {
							reference: as(t, to(n), i.options.strategy === "fixed"),
							popper: qa(n)
						}, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function(e) {
							return i.modifiersData[e.name] = Object.assign({}, e.data);
						});
						for (var r = 0; r < i.orderedModifiers.length; r++) {
							if (i.reset === !0) {
								i.reset = !1, r = -1;
								continue;
							}
							var a = i.orderedModifiers[r], o = a.fn, l = a.options, u = l === void 0 ? {} : l, d = a.name;
							typeof o == "function" && (i = o({
								state: i,
								options: u,
								name: d,
								instance: c
							}) || i);
						}
					}
				}
			},
			update: cs(function() {
				return new Promise(function(e) {
					c.forceUpdate(), e(i);
				});
			}),
			destroy: function() {
				u(), s = !0;
			}
		};
		if (!ds(e, t)) return c;
		c.setOptions(n).then(function(e) {
			!s && n.onFirstUpdate && n.onFirstUpdate(e);
		});
		function l() {
			i.orderedModifiers.forEach(function(e) {
				var t = e.name, n = e.options, r = n === void 0 ? {} : n, a = e.effect;
				if (typeof a == "function") {
					var s = a({
						state: i,
						name: t,
						instance: c,
						options: r
					});
					o.push(s || function() {});
				}
			});
		}
		function u() {
			o.forEach(function(e) {
				return e();
			}), o = [];
		}
		return c;
	};
}
var ps = /*#__PURE__*/ fs({ defaultModifiers: [
	xo,
	Qo,
	vo,
	Va,
	Xo,
	Uo,
	ts,
	fo,
	qo
] }), ms = "tippy-box", hs = "tippy-content", gs = "tippy-backdrop", _s = "tippy-arrow", vs = "tippy-svg-arrow", ys = {
	passive: !0,
	capture: !0
}, bs = function() {
	return document.body;
};
function xs(e, t, n) {
	return Array.isArray(e) ? e[t] ?? (Array.isArray(n) ? n[t] : n) : e;
}
function Ss(e, t) {
	var n = {}.toString.call(e);
	return n.indexOf("[object") === 0 && n.indexOf(t + "]") > -1;
}
function Cs(e, t) {
	return typeof e == "function" ? e.apply(void 0, t) : e;
}
function ws(e, t) {
	if (t === 0) return e;
	var n;
	return function(r) {
		clearTimeout(n), n = setTimeout(function() {
			e(r);
		}, t);
	};
}
function Ts(e, t) {
	var n = Object.assign({}, e);
	return t.forEach(function(e) {
		delete n[e];
	}), n;
}
function Es(e) {
	return e.split(/\s+/).filter(Boolean);
}
function Ds(e) {
	return [].concat(e);
}
function Os(e, t) {
	e.indexOf(t) === -1 && e.push(t);
}
function ks(e) {
	return e.filter(function(t, n) {
		return e.indexOf(t) === n;
	});
}
function As(e) {
	return e.split("-")[0];
}
function js(e) {
	return [].slice.call(e);
}
function Ms(e) {
	return Object.keys(e).reduce(function(t, n) {
		return e[n] !== void 0 && (t[n] = e[n]), t;
	}, {});
}
function Ns() {
	return document.createElement("div");
}
function Ps(e) {
	return ["Element", "Fragment"].some(function(t) {
		return Ss(e, t);
	});
}
function Fs(e) {
	return Ss(e, "NodeList");
}
function Is(e) {
	return Ss(e, "MouseEvent");
}
function Ls(e) {
	return !!(e && e._tippy && e._tippy.reference === e);
}
function Rs(e) {
	return Ps(e) ? [e] : Fs(e) ? js(e) : Array.isArray(e) ? e : js(document.querySelectorAll(e));
}
function zs(e, t) {
	e.forEach(function(e) {
		e && (e.style.transitionDuration = t + "ms");
	});
}
function Bs(e, t) {
	e.forEach(function(e) {
		e && e.setAttribute("data-state", t);
	});
}
function Vs(e) {
	var t, n = Ds(e)[0];
	return n != null && (t = n.ownerDocument) != null && t.body ? n.ownerDocument : document;
}
function Hs(e, t) {
	var n = t.clientX, r = t.clientY;
	return e.every(function(e) {
		var t = e.popperRect, i = e.popperState, a = e.props.interactiveBorder, o = As(i.placement), s = i.modifiersData.offset;
		if (!s) return !0;
		var c = o === "bottom" ? s.top.y : 0, l = o === "top" ? s.bottom.y : 0, u = o === "right" ? s.left.x : 0, d = o === "left" ? s.right.x : 0, f = t.top - r + c > a, p = r - t.bottom - l > a, m = t.left - n + u > a, h = n - t.right - d > a;
		return f || p || m || h;
	});
}
function Us(e, t, n) {
	var r = t + "EventListener";
	["transitionend", "webkitTransitionEnd"].forEach(function(t) {
		e[r](t, n);
	});
}
function Ws(e, t) {
	for (var n = t; n;) {
		if (e.contains(n)) return !0;
		n = n.getRootNode == null ? void 0 : n.getRootNode()?.host;
	}
	return !1;
}
var Gs = { isTouch: !1 }, Ks = 0;
function qs() {
	Gs.isTouch || (Gs.isTouch = !0, window.performance && document.addEventListener("mousemove", Js));
}
function Js() {
	var e = performance.now();
	e - Ks < 20 && (Gs.isTouch = !1, document.removeEventListener("mousemove", Js)), Ks = e;
}
function Ys() {
	var e = document.activeElement;
	if (Ls(e)) {
		var t = e._tippy;
		e.blur && !t.state.isVisible && e.blur();
	}
}
function Xs() {
	document.addEventListener("touchstart", qs, ys), window.addEventListener("blur", Ys);
}
var Zs = typeof window < "u" && typeof document < "u" ? !!window.msCrypto : !1, Qs = Object.assign({
	appendTo: bs,
	aria: {
		content: "auto",
		expanded: "auto"
	},
	delay: 0,
	duration: [300, 250],
	getReferenceClientRect: null,
	hideOnClick: !0,
	ignoreAttributes: !1,
	interactive: !1,
	interactiveBorder: 2,
	interactiveDebounce: 0,
	moveTransition: "",
	offset: [0, 10],
	onAfterUpdate: function() {},
	onBeforeUpdate: function() {},
	onCreate: function() {},
	onDestroy: function() {},
	onHidden: function() {},
	onHide: function() {},
	onMount: function() {},
	onShow: function() {},
	onShown: function() {},
	onTrigger: function() {},
	onUntrigger: function() {},
	onClickOutside: function() {},
	placement: "top",
	plugins: [],
	popperOptions: {},
	render: null,
	showOnCreate: !1,
	touch: !0,
	trigger: "mouseenter focus",
	triggerTarget: null
}, {
	animateFill: !1,
	followCursor: !1,
	inlinePositioning: !1,
	sticky: !1
}, {
	allowHTML: !1,
	animation: "fade",
	arrow: !0,
	content: "",
	inertia: !1,
	maxWidth: 350,
	role: "tooltip",
	theme: "",
	zIndex: 9999
}), $s = Object.keys(Qs), ec = function(e) {
	Object.keys(e).forEach(function(t) {
		Qs[t] = e[t];
	});
};
function tc(e) {
	var t = (e.plugins || []).reduce(function(t, n) {
		var r = n.name, i = n.defaultValue;
		return r && (t[r] = e[r] === void 0 ? Qs[r] ?? i : e[r]), t;
	}, {});
	return Object.assign({}, e, t);
}
function nc(e, t) {
	return (t ? Object.keys(tc(Object.assign({}, Qs, { plugins: t }))) : $s).reduce(function(t, n) {
		var r = (e.getAttribute("data-tippy-" + n) || "").trim();
		if (!r) return t;
		if (n === "content") t[n] = r;
		else try {
			t[n] = JSON.parse(r);
		} catch {
			t[n] = r;
		}
		return t;
	}, {});
}
function rc(e, t) {
	var n = Object.assign({}, t, { content: Cs(t.content, [e]) }, t.ignoreAttributes ? {} : nc(e, t.plugins));
	return n.aria = Object.assign({}, Qs.aria, n.aria), n.aria = {
		expanded: n.aria.expanded === "auto" ? t.interactive : n.aria.expanded,
		content: n.aria.content === "auto" ? t.interactive ? null : "describedby" : n.aria.content
	}, n;
}
var ic = function() {
	return "innerHTML";
};
function ac(e, t) {
	e[ic()] = t;
}
function oc(e) {
	var t = Ns();
	return e === !0 ? t.className = _s : (t.className = vs, Ps(e) ? t.appendChild(e) : ac(t, e)), t;
}
function sc(e, t) {
	Ps(t.content) ? (ac(e, ""), e.appendChild(t.content)) : typeof t.content != "function" && (t.allowHTML ? ac(e, t.content) : e.textContent = t.content);
}
function cc(e) {
	var t = e.firstElementChild, n = js(t.children);
	return {
		box: t,
		content: n.find(function(e) {
			return e.classList.contains(hs);
		}),
		arrow: n.find(function(e) {
			return e.classList.contains(_s) || e.classList.contains(vs);
		}),
		backdrop: n.find(function(e) {
			return e.classList.contains(gs);
		})
	};
}
function lc(e) {
	var t = Ns(), n = Ns();
	n.className = ms, n.setAttribute("data-state", "hidden"), n.setAttribute("tabindex", "-1");
	var r = Ns();
	r.className = hs, r.setAttribute("data-state", "hidden"), sc(r, e.props), t.appendChild(n), n.appendChild(r), i(e.props, e.props);
	function i(n, r) {
		var i = cc(t), a = i.box, o = i.content, s = i.arrow;
		r.theme ? a.setAttribute("data-theme", r.theme) : a.removeAttribute("data-theme"), typeof r.animation == "string" ? a.setAttribute("data-animation", r.animation) : a.removeAttribute("data-animation"), r.inertia ? a.setAttribute("data-inertia", "") : a.removeAttribute("data-inertia"), a.style.maxWidth = typeof r.maxWidth == "number" ? r.maxWidth + "px" : r.maxWidth, r.role ? a.setAttribute("role", r.role) : a.removeAttribute("role"), (n.content !== r.content || n.allowHTML !== r.allowHTML) && sc(o, e.props), r.arrow ? s ? n.arrow !== r.arrow && (a.removeChild(s), a.appendChild(oc(r.arrow))) : a.appendChild(oc(r.arrow)) : s && a.removeChild(s);
	}
	return {
		popper: t,
		onUpdate: i
	};
}
lc.$$tippy = !0;
var uc = 1, dc = [], fc = [];
function pc(e, t) {
	var n = rc(e, Object.assign({}, Qs, tc(Ms(t)))), r, i, a, o = !1, s = !1, c = !1, l = !1, u, d, f, p = [], m = ws(R, n.interactiveDebounce), h, g = uc++, _ = null, v = ks(n.plugins), y = {
		id: g,
		reference: e,
		popper: Ns(),
		popperInstance: _,
		props: n,
		state: {
			isEnabled: !0,
			isVisible: !1,
			isDestroyed: !1,
			isMounted: !1,
			isShown: !1
		},
		plugins: v,
		clearDelayTimeouts: B,
		setProps: xe,
		setContent: Se,
		show: Ce,
		hide: we,
		hideWithInteractivity: Te,
		enable: be,
		disable: z,
		unmount: Ee,
		destroy: De
	};
	/* istanbul ignore if */
	if (!n.render) return y;
	var b = n.render(y), x = b.popper, S = b.onUpdate;
	x.setAttribute("data-tippy-root", ""), x.id = "tippy-" + y.id, y.popper = x, e._tippy = y, x._tippy = y;
	var C = v.map(function(e) {
		return e.fn(y);
	}), w = e.hasAttribute("aria-expanded");
	return ce(), F(), M(), N("onCreate", [y]), n.showOnCreate && ve(), x.addEventListener("mouseenter", function() {
		y.props.interactive && y.state.isVisible && y.clearDelayTimeouts();
	}), x.addEventListener("mouseleave", function() {
		y.props.interactive && y.props.trigger.indexOf("mouseenter") >= 0 && k().addEventListener("mousemove", m);
	}), y;
	function T() {
		var e = y.props.touch;
		return Array.isArray(e) ? e : [e, 0];
	}
	function E() {
		return T()[0] === "hold";
	}
	function D() {
		var e;
		return !!((e = y.props.render) != null && e.$$tippy);
	}
	function O() {
		return h || e;
	}
	function k() {
		var e = O().parentNode;
		return e ? Vs(e) : document;
	}
	function A() {
		return cc(x);
	}
	function j(e) {
		return y.state.isMounted && !y.state.isVisible || Gs.isTouch || u && u.type === "focus" ? 0 : xs(y.props.delay, +!e, Qs.delay);
	}
	function M(e) {
		e === void 0 && (e = !1), x.style.pointerEvents = y.props.interactive && !e ? "" : "none", x.style.zIndex = "" + y.props.zIndex;
	}
	function N(e, t, n) {
		if (n === void 0 && (n = !0), C.forEach(function(n) {
			n[e] && n[e].apply(n, t);
		}), n) {
			var r;
			(r = y.props)[e].apply(r, t);
		}
	}
	function P() {
		var t = y.props.aria;
		if (t.content) {
			var n = "aria-" + t.content, r = x.id;
			Ds(y.props.triggerTarget || e).forEach(function(e) {
				var t = e.getAttribute(n);
				if (y.state.isVisible) e.setAttribute(n, t ? t + " " + r : r);
				else {
					var i = t && t.replace(r, "").trim();
					i ? e.setAttribute(n, i) : e.removeAttribute(n);
				}
			});
		}
	}
	function F() {
		w || !y.props.aria.expanded || Ds(y.props.triggerTarget || e).forEach(function(e) {
			y.props.interactive ? e.setAttribute("aria-expanded", y.state.isVisible && e === O() ? "true" : "false") : e.removeAttribute("aria-expanded");
		});
	}
	function ee() {
		k().removeEventListener("mousemove", m), dc = dc.filter(function(e) {
			return e !== m;
		});
	}
	function I(t) {
		if (!(Gs.isTouch && (c || t.type === "mousedown"))) {
			var n = t.composedPath && t.composedPath()[0] || t.target;
			if (!(y.props.interactive && Ws(x, n))) {
				if (Ds(y.props.triggerTarget || e).some(function(e) {
					return Ws(e, n);
				})) {
					if (Gs.isTouch || y.state.isVisible && y.props.trigger.indexOf("click") >= 0) return;
				} else N("onClickOutside", [y, t]);
				y.props.hideOnClick === !0 && (y.clearDelayTimeouts(), y.hide(), s = !0, setTimeout(function() {
					s = !1;
				}), y.state.isMounted || ie());
			}
		}
	}
	function te() {
		c = !0;
	}
	function ne() {
		c = !1;
	}
	function re() {
		var e = k();
		e.addEventListener("mousedown", I, !0), e.addEventListener("touchend", I, ys), e.addEventListener("touchstart", ne, ys), e.addEventListener("touchmove", te, ys);
	}
	function ie() {
		var e = k();
		e.removeEventListener("mousedown", I, !0), e.removeEventListener("touchend", I, ys), e.removeEventListener("touchstart", ne, ys), e.removeEventListener("touchmove", te, ys);
	}
	function ae(e, t) {
		L(e, function() {
			!y.state.isVisible && x.parentNode && x.parentNode.contains(x) && t();
		});
	}
	function oe(e, t) {
		L(e, t);
	}
	function L(e, t) {
		var n = A().box;
		function r(e) {
			e.target === n && (Us(n, "remove", r), t());
		}
		if (e === 0) return t();
		Us(n, "remove", d), Us(n, "add", r), d = r;
	}
	function se(t, n, r) {
		r === void 0 && (r = !1), Ds(y.props.triggerTarget || e).forEach(function(e) {
			e.addEventListener(t, n, r), p.push({
				node: e,
				eventType: t,
				handler: n,
				options: r
			});
		});
	}
	function ce() {
		E() && (se("touchstart", ue, { passive: !0 }), se("touchend", de, { passive: !0 })), Es(y.props.trigger).forEach(function(e) {
			if (e !== "manual") switch (se(e, ue), e) {
				case "mouseenter":
					se("mouseleave", de);
					break;
				case "focus":
					se(Zs ? "focusout" : "blur", fe);
					break;
				case "focusin":
					se("focusout", fe);
					break;
			}
		});
	}
	function le() {
		p.forEach(function(e) {
			var t = e.node, n = e.eventType, r = e.handler, i = e.options;
			t.removeEventListener(n, r, i);
		}), p = [];
	}
	function ue(e) {
		var t = !1;
		if (!(!y.state.isEnabled || pe(e) || s)) {
			var n = u?.type === "focus";
			u = e, h = e.currentTarget, F(), !y.state.isVisible && Is(e) && dc.forEach(function(t) {
				return t(e);
			}), e.type === "click" && (y.props.trigger.indexOf("mouseenter") < 0 || o) && y.props.hideOnClick !== !1 && y.state.isVisible ? t = !0 : ve(e), e.type === "click" && (o = !t), t && !n && ye(e);
		}
	}
	function R(e) {
		var t = e.target, r = O().contains(t) || x.contains(t);
		e.type === "mousemove" && r || Hs(_e().concat(x).map(function(e) {
			var t = e._tippy.popperInstance?.state;
			return t ? {
				popperRect: e.getBoundingClientRect(),
				popperState: t,
				props: n
			} : null;
		}).filter(Boolean), e) && (ee(), ye(e));
	}
	function de(e) {
		if (!(pe(e) || y.props.trigger.indexOf("click") >= 0 && o)) {
			if (y.props.interactive) {
				y.hideWithInteractivity(e);
				return;
			}
			ye(e);
		}
	}
	function fe(e) {
		y.props.trigger.indexOf("focusin") < 0 && e.target !== O() || y.props.interactive && e.relatedTarget && x.contains(e.relatedTarget) || ye(e);
	}
	function pe(e) {
		return Gs.isTouch ? E() !== e.type.indexOf("touch") >= 0 : !1;
	}
	function me() {
		he();
		var t = y.props, n = t.popperOptions, r = t.placement, i = t.offset, a = t.getReferenceClientRect, o = t.moveTransition, s = D() ? cc(x).arrow : null, c = a ? {
			getBoundingClientRect: a,
			contextElement: a.contextElement || O()
		} : e, l = [
			{
				name: "offset",
				options: { offset: i }
			},
			{
				name: "preventOverflow",
				options: { padding: {
					top: 2,
					bottom: 2,
					left: 5,
					right: 5
				} }
			},
			{
				name: "flip",
				options: { padding: 5 }
			},
			{
				name: "computeStyles",
				options: { adaptive: !o }
			},
			{
				name: "$$tippy",
				enabled: !0,
				phase: "beforeWrite",
				requires: ["computeStyles"],
				fn: function(e) {
					var t = e.state;
					if (D()) {
						var n = A().box;
						[
							"placement",
							"reference-hidden",
							"escaped"
						].forEach(function(e) {
							e === "placement" ? n.setAttribute("data-placement", t.placement) : t.attributes.popper["data-popper-" + e] ? n.setAttribute("data-" + e, "") : n.removeAttribute("data-" + e);
						}), t.attributes.popper = {};
					}
				}
			}
		];
		D() && s && l.push({
			name: "arrow",
			options: {
				element: s,
				padding: 3
			}
		}), l.push.apply(l, n?.modifiers || []), y.popperInstance = ps(c, x, Object.assign({}, n, {
			placement: r,
			onFirstUpdate: f,
			modifiers: l
		}));
	}
	function he() {
		y.popperInstance &&= (y.popperInstance.destroy(), null);
	}
	function ge() {
		var e = y.props.appendTo, t, n = O();
		t = y.props.interactive && e === bs || e === "parent" ? n.parentNode : Cs(e, [n]), t.contains(x) || t.appendChild(x), y.state.isMounted = !0, me();
	}
	function _e() {
		return js(x.querySelectorAll("[data-tippy-root]"));
	}
	function ve(e) {
		y.clearDelayTimeouts(), e && N("onTrigger", [y, e]), re();
		var t = j(!0), n = T(), i = n[0], a = n[1];
		Gs.isTouch && i === "hold" && a && (t = a), t ? r = setTimeout(function() {
			y.show();
		}, t) : y.show();
	}
	function ye(e) {
		if (y.clearDelayTimeouts(), N("onUntrigger", [y, e]), !y.state.isVisible) {
			ie();
			return;
		}
		if (!(y.props.trigger.indexOf("mouseenter") >= 0 && y.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(e.type) >= 0 && o)) {
			var t = j(!1);
			t ? i = setTimeout(function() {
				y.state.isVisible && y.hide();
			}, t) : a = requestAnimationFrame(function() {
				y.hide();
			});
		}
	}
	function be() {
		y.state.isEnabled = !0;
	}
	function z() {
		y.hide(), y.state.isEnabled = !1;
	}
	function B() {
		clearTimeout(r), clearTimeout(i), cancelAnimationFrame(a);
	}
	function xe(t) {
		if (!y.state.isDestroyed) {
			N("onBeforeUpdate", [y, t]), le();
			var n = y.props, r = rc(e, Object.assign({}, n, Ms(t), { ignoreAttributes: !0 }));
			y.props = r, ce(), n.interactiveDebounce !== r.interactiveDebounce && (ee(), m = ws(R, r.interactiveDebounce)), n.triggerTarget && !r.triggerTarget ? Ds(n.triggerTarget).forEach(function(e) {
				e.removeAttribute("aria-expanded");
			}) : r.triggerTarget && e.removeAttribute("aria-expanded"), F(), M(), S && S(n, r), y.popperInstance && (me(), _e().forEach(function(e) {
				requestAnimationFrame(e._tippy.popperInstance.forceUpdate);
			})), N("onAfterUpdate", [y, t]);
		}
	}
	function Se(e) {
		y.setProps({ content: e });
	}
	function Ce() {
		var e = y.state.isVisible, t = y.state.isDestroyed, n = !y.state.isEnabled, r = Gs.isTouch && !y.props.touch, i = xs(y.props.duration, 0, Qs.duration);
		if (!(e || t || n || r) && !O().hasAttribute("disabled") && (N("onShow", [y], !1), y.props.onShow(y) !== !1)) {
			if (y.state.isVisible = !0, D() && (x.style.visibility = "visible"), M(), re(), y.state.isMounted || (x.style.transition = "none"), D()) {
				var a = A(), o = a.box, s = a.content;
				zs([o, s], 0);
			}
			f = function() {
				var e;
				if (!(!y.state.isVisible || l)) {
					if (l = !0, x.offsetHeight, x.style.transition = y.props.moveTransition, D() && y.props.animation) {
						var t = A(), n = t.box, r = t.content;
						zs([n, r], i), Bs([n, r], "visible");
					}
					P(), F(), Os(fc, y), (e = y.popperInstance) == null || e.forceUpdate(), N("onMount", [y]), y.props.animation && D() && oe(i, function() {
						y.state.isShown = !0, N("onShown", [y]);
					});
				}
			}, ge();
		}
	}
	function we() {
		var e = !y.state.isVisible, t = y.state.isDestroyed, n = !y.state.isEnabled, r = xs(y.props.duration, 1, Qs.duration);
		if (!(e || t || n) && (N("onHide", [y], !1), y.props.onHide(y) !== !1)) {
			if (y.state.isVisible = !1, y.state.isShown = !1, l = !1, o = !1, D() && (x.style.visibility = "hidden"), ee(), ie(), M(!0), D()) {
				var i = A(), a = i.box, s = i.content;
				y.props.animation && (zs([a, s], r), Bs([a, s], "hidden"));
			}
			P(), F(), y.props.animation ? D() && ae(r, y.unmount) : y.unmount();
		}
	}
	function Te(e) {
		k().addEventListener("mousemove", m), Os(dc, m), m(e);
	}
	function Ee() {
		y.state.isVisible && y.hide(), y.state.isMounted && (he(), _e().forEach(function(e) {
			e._tippy.unmount();
		}), x.parentNode && x.parentNode.removeChild(x), fc = fc.filter(function(e) {
			return e !== y;
		}), y.state.isMounted = !1, N("onHidden", [y]));
	}
	function De() {
		y.state.isDestroyed || (y.clearDelayTimeouts(), y.unmount(), le(), delete e._tippy, y.state.isDestroyed = !0, N("onDestroy", [y]));
	}
}
function $(e, t) {
	t === void 0 && (t = {});
	var n = Qs.plugins.concat(t.plugins || []);
	Xs();
	var r = Object.assign({}, t, { plugins: n }), i = Rs(e).reduce(function(e, t) {
		var n = t && pc(t, r);
		return n && e.push(n), e;
	}, []);
	return Ps(e) ? i[0] : i;
}
$.defaultProps = Qs, $.setDefaultProps = ec, $.currentInput = Gs;
var mc = Object.assign({}, Va, { effect: function(e) {
	var t = e.state, n = {
		popper: {
			position: t.options.strategy,
			left: "0",
			top: "0",
			margin: "0"
		},
		arrow: { position: "absolute" },
		reference: {}
	};
	Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow);
} }), hc = function(e, t) {
	t === void 0 && (t = {});
	var n = e, r = [], i = [], a, o = t.overrides, s = [], c = !1;
	function l() {
		i = n.map(function(e) {
			return Ds(e.props.triggerTarget || e.reference);
		}).reduce(function(e, t) {
			return e.concat(t);
		}, []);
	}
	function u() {
		r = n.map(function(e) {
			return e.reference;
		});
	}
	function d(e) {
		n.forEach(function(t) {
			e ? t.enable() : t.disable();
		});
	}
	function f(e) {
		return n.map(function(t) {
			var n = t.setProps;
			return t.setProps = function(r) {
				n(r), t.reference === a && e.setProps(r);
			}, function() {
				t.setProps = n;
			};
		});
	}
	function p(e, t) {
		var s = i.indexOf(t);
		if (t !== a) {
			a = t;
			var c = (o || []).concat("content").reduce(function(e, t) {
				return e[t] = n[s].props[t], e;
			}, {});
			e.setProps(Object.assign({}, c, { getReferenceClientRect: typeof c.getReferenceClientRect == "function" ? c.getReferenceClientRect : function() {
				return r[s]?.getBoundingClientRect();
			} }));
		}
	}
	d(!1), u(), l();
	var m = $(Ns(), Object.assign({}, Ts(t, ["overrides"]), {
		plugins: [{ fn: function() {
			return {
				onDestroy: function() {
					d(!0);
				},
				onHidden: function() {
					a = null;
				},
				onClickOutside: function(e) {
					e.props.showOnCreate && !c && (c = !0, a = null);
				},
				onShow: function(e) {
					e.props.showOnCreate && !c && (c = !0, p(e, r[0]));
				},
				onTrigger: function(e, t) {
					p(e, t.currentTarget);
				}
			};
		} }].concat(t.plugins || []),
		triggerTarget: i,
		popperOptions: Object.assign({}, t.popperOptions, { modifiers: [].concat(t.popperOptions?.modifiers || [], [mc]) })
	})), h = m.show;
	m.show = function(e) {
		if (h(), !a && e == null) return p(m, r[0]);
		if (!(a && e == null)) {
			if (typeof e == "number") return r[e] && p(m, r[e]);
			if (n.indexOf(e) >= 0) {
				var t = e.reference;
				return p(m, t);
			}
			if (r.indexOf(e) >= 0) return p(m, e);
		}
	}, m.showNext = function() {
		var e = r[0];
		if (!a) return m.show(0);
		var t = r.indexOf(a);
		m.show(r[t + 1] || e);
	}, m.showPrevious = function() {
		var e = r[r.length - 1];
		if (!a) return m.show(e);
		var t = r.indexOf(a), n = r[t - 1] || e;
		m.show(n);
	};
	var g = m.setProps;
	return m.setProps = function(e) {
		o = e.overrides || o, g(e);
	}, m.setInstances = function(e) {
		d(!0), s.forEach(function(e) {
			return e();
		}), n = e, d(!1), u(), l(), s = f(m), m.setProps({ triggerTarget: i });
	}, s = f(m), m;
}, gc = {
	name: "animateFill",
	defaultValue: !1,
	fn: function(e) {
		var t;
		if (!((t = e.props.render) != null && t.$$tippy)) return {};
		var n = cc(e.popper), r = n.box, i = n.content, a = e.props.animateFill ? _c() : null;
		return {
			onCreate: function() {
				a && (r.insertBefore(a, r.firstElementChild), r.setAttribute("data-animatefill", ""), r.style.overflow = "hidden", e.setProps({
					arrow: !1,
					animation: "shift-away"
				}));
			},
			onMount: function() {
				if (a) {
					var e = r.style.transitionDuration, t = Number(e.replace("ms", ""));
					i.style.transitionDelay = Math.round(t / 10) + "ms", a.style.transitionDuration = e, Bs([a], "visible");
				}
			},
			onShow: function() {
				a && (a.style.transitionDuration = "0ms");
			},
			onHide: function() {
				a && Bs([a], "hidden");
			}
		};
	}
};
function _c() {
	var e = Ns();
	return e.className = gs, Bs([e], "hidden"), e;
}
var vc = {
	clientX: 0,
	clientY: 0
}, yc = [];
function bc(e) {
	vc = {
		clientX: e.clientX,
		clientY: e.clientY
	};
}
function xc(e) {
	e.addEventListener("mousemove", bc);
}
function Sc(e) {
	e.removeEventListener("mousemove", bc);
}
var Cc = {
	name: "followCursor",
	defaultValue: !1,
	fn: function(e) {
		var t = e.reference, n = Vs(e.props.triggerTarget || t), r = !1, i = !1, a = !0, o = e.props;
		function s() {
			return e.props.followCursor === "initial" && e.state.isVisible;
		}
		function c() {
			n.addEventListener("mousemove", d);
		}
		function l() {
			n.removeEventListener("mousemove", d);
		}
		function u() {
			r = !0, e.setProps({ getReferenceClientRect: null }), r = !1;
		}
		function d(n) {
			var r = n.target ? t.contains(n.target) : !0, i = e.props.followCursor, a = n.clientX, o = n.clientY, s = t.getBoundingClientRect(), c = a - s.left, l = o - s.top;
			(r || !e.props.interactive) && e.setProps({ getReferenceClientRect: function() {
				var e = t.getBoundingClientRect(), n = a, r = o;
				i === "initial" && (n = e.left + c, r = e.top + l);
				var s = i === "horizontal" ? e.top : r, u = i === "vertical" ? e.right : n, d = i === "horizontal" ? e.bottom : r, f = i === "vertical" ? e.left : n;
				return {
					width: u - f,
					height: d - s,
					top: s,
					right: u,
					bottom: d,
					left: f
				};
			} });
		}
		function f() {
			e.props.followCursor && (yc.push({
				instance: e,
				doc: n
			}), xc(n));
		}
		function p() {
			yc = yc.filter(function(t) {
				return t.instance !== e;
			}), yc.filter(function(e) {
				return e.doc === n;
			}).length === 0 && Sc(n);
		}
		return {
			onCreate: f,
			onDestroy: p,
			onBeforeUpdate: function() {
				o = e.props;
			},
			onAfterUpdate: function(t, n) {
				var a = n.followCursor;
				r || a !== void 0 && o.followCursor !== a && (p(), a ? (f(), e.state.isMounted && !i && !s() && c()) : (l(), u()));
			},
			onMount: function() {
				e.props.followCursor && !i && (a &&= (d(vc), !1), s() || c());
			},
			onTrigger: function(e, t) {
				Is(t) && (vc = {
					clientX: t.clientX,
					clientY: t.clientY
				}), i = t.type === "focus";
			},
			onHidden: function() {
				e.props.followCursor && (u(), l(), a = !0);
			}
		};
	}
};
function wc(e, t) {
	return { popperOptions: Object.assign({}, e.popperOptions, { modifiers: [].concat((e.popperOptions?.modifiers || []).filter(function(e) {
		return e.name !== t.name;
	}), [t]) }) };
}
var Tc = {
	name: "inlinePositioning",
	defaultValue: !1,
	fn: function(e) {
		var t = e.reference;
		function n() {
			return !!e.props.inlinePositioning;
		}
		var r, i = -1, a = !1, o = [], s = {
			name: "tippyInlinePositioning",
			enabled: !0,
			phase: "afterWrite",
			fn: function(t) {
				var i = t.state;
				n() && (o.indexOf(i.placement) !== -1 && (o = []), r !== i.placement && o.indexOf(i.placement) === -1 && (o.push(i.placement), e.setProps({ getReferenceClientRect: function() {
					return c(i.placement);
				} })), r = i.placement);
			}
		};
		function c(e) {
			return Ec(As(e), t.getBoundingClientRect(), js(t.getClientRects()), i);
		}
		function l(t) {
			a = !0, e.setProps(t), a = !1;
		}
		function u() {
			a || l(wc(e.props, s));
		}
		return {
			onCreate: u,
			onAfterUpdate: u,
			onTrigger: function(t, n) {
				if (Is(n)) {
					var r = js(e.reference.getClientRects()), a = r.find(function(e) {
						return e.left - 2 <= n.clientX && e.right + 2 >= n.clientX && e.top - 2 <= n.clientY && e.bottom + 2 >= n.clientY;
					}), o = r.indexOf(a);
					i = o > -1 ? o : i;
				}
			},
			onHidden: function() {
				i = -1;
			}
		};
	}
};
function Ec(e, t, n, r) {
	if (n.length < 2 || e === null) return t;
	if (n.length === 2 && r >= 0 && n[0].left > n[1].right) return n[r] || t;
	switch (e) {
		case "top":
		case "bottom":
			var i = n[0], a = n[n.length - 1], o = e === "top", s = i.top, c = a.bottom, l = o ? i.left : a.left, u = o ? i.right : a.right;
			return {
				top: s,
				bottom: c,
				left: l,
				right: u,
				width: u - l,
				height: c - s
			};
		case "left":
		case "right":
			var d = Math.min.apply(Math, n.map(function(e) {
				return e.left;
			})), f = Math.max.apply(Math, n.map(function(e) {
				return e.right;
			})), p = n.filter(function(t) {
				return e === "left" ? t.left === d : t.right === f;
			}), m = p[0].top, h = p[p.length - 1].bottom, g = d, _ = f;
			return {
				top: m,
				bottom: h,
				left: g,
				right: _,
				width: _ - g,
				height: h - m
			};
		default: return t;
	}
}
var Dc = {
	name: "sticky",
	defaultValue: !1,
	fn: function(e) {
		var t = e.reference, n = e.popper;
		function r() {
			return e.popperInstance ? e.popperInstance.state.elements.reference : t;
		}
		function i(t) {
			return e.props.sticky === !0 || e.props.sticky === t;
		}
		var a = null, o = null;
		function s() {
			var t = i("reference") ? r().getBoundingClientRect() : null, c = i("popper") ? n.getBoundingClientRect() : null;
			(t && Oc(a, t) || c && Oc(o, c)) && e.popperInstance && e.popperInstance.update(), a = t, o = c, e.state.isMounted && requestAnimationFrame(s);
		}
		return { onMount: function() {
			e.props.sticky && s();
		} };
	}
};
function Oc(e, t) {
	return e && t ? e.top !== t.top || e.right !== t.right || e.bottom !== t.bottom || e.left !== t.left : !0;
}
$.setDefaultProps({ render: lc }), $.setDefaultProps({ onShow: (e) => {
	if (!e.props.content) return !1;
} });
var kc = (e) => e instanceof Object && "$" in e && "$el" in e;
function Ac(e, t = {}, n = {
	mount: !0,
	appName: "Tippy"
}) {
	n = Object.assign({
		mount: !0,
		appName: "Tippy"
	}, n);
	let r = d(), a = w(), o = w({
		isEnabled: !1,
		isVisible: !1,
		isDestroyed: !1,
		isMounted: !1,
		isShown: !1
	}), s = E(), c = null, l = () => c || (c = document.createDocumentFragment(), c), u = (e) => {
		let t, a = g(e) ? e.value : e;
		return _(a) ? (s.value || (s.value = i({
			name: n.appName,
			setup: () => () => g(e) ? e.value : e
		}), r && Object.assign(s.value._context, r.appContext), s.value.mount(l())), t = () => l()) : typeof a == "object" ? (s.value || (s.value = i({
			name: n.appName,
			setup: () => () => p(g(e) ? e.value : e)
		}), r && Object.assign(s.value._context, r.appContext), s.value.mount(l())), t = () => l()) : t = a, t;
	}, f = (e) => {
		let t = {};
		return t = g(e) ? e.value || {} : (h(e), { ...e }), t.content &&= u(t.content), t.triggerTarget &&= g(t.triggerTarget) ? t.triggerTarget.value : t.triggerTarget, (!t.plugins || !Array.isArray(t.plugins)) && (t.plugins = []), t.plugins = t.plugins.filter((e) => e.name !== "vueTippyReactiveState"), t.plugins.push({
			name: "vueTippyReactiveState",
			fn: () => ({
				onCreate() {
					o.value.isEnabled = !0;
				},
				onMount() {
					o.value.isMounted = !0;
				},
				onShow() {
					o.value.isMounted = !0, o.value.isVisible = !0;
				},
				onShown() {
					o.value.isShown = !0;
				},
				onHide() {
					o.value.isMounted = !1, o.value.isVisible = !1;
				},
				onHidden() {
					o.value.isShown = !1;
				},
				onUnmounted() {
					o.value.isMounted = !1;
				},
				onDestroy() {
					o.value.isDestroyed = !0;
				}
			})
		}), t;
	}, m = () => {
		a.value && a.value.setProps(f(t));
	}, v = () => {
		!a.value || !t.content || a.value.setContent(u(t.content));
	}, b = (e) => {
		var t;
		(t = a.value) == null || t.setContent(u(e));
	}, S = (e) => {
		var t;
		(t = a.value) == null || t.setProps(f(e));
	}, C = () => {
		var e;
		a.value &&= (a.value.destroy(), void 0), c = null, (e = s.value) == null || e.unmount(), s.value = void 0;
	}, T = () => {
		var e;
		(e = a.value) == null || e.show();
	}, D = () => {
		var e;
		(e = a.value) == null || e.hide();
	}, O = () => {
		var e;
		(e = a.value) == null || e.disable(), o.value.isEnabled = !1;
	}, k = () => {
		var e;
		(e = a.value) == null || e.enable(), o.value.isEnabled = !0;
	}, j = () => {
		var e;
		(e = a.value) == null || e.unmount();
	}, M = () => {
		if (!e) return;
		let n = g(e) ? e.value : e;
		typeof n == "function" && (n = n()), kc(n) && (n = n.$el), n && (a.value = $(n, f(t)), n.$tippy = N);
	}, N = {
		tippy: a,
		refresh: m,
		refreshContent: v,
		setContent: b,
		setProps: S,
		destroy: C,
		hide: D,
		show: T,
		disable: O,
		enable: k,
		unmount: j,
		mount: M,
		state: o
	};
	return n.mount && (r ? r.isMounted ? M() : y(M) : M()), r && x(() => {
		C();
	}), g(t) || h(t) ? A(t, m, { immediate: !1 }) : g(t.content) && A(t.content, v, { immediate: !1 }), N;
}
function jc(e, t) {
	let n = w();
	return y(() => {
		n.value = hc((Array.isArray(e) ? e.map((e) => e.value) : typeof e == "function" ? e() : e.value).map((e) => e instanceof Element ? e._tippy : e).filter(Boolean), t ? {
			allowHTML: !0,
			...t
		} : { allowHTML: !0 });
	}), { singleton: n };
}
function Mc(e) {
	return typeof e == "function" ? e() : O(e);
}
function Nc(e) {
	let t = Mc(e);
	return t?.$el ?? t;
}
var Pc = l({
	props: {
		to: { type: [String, Function] },
		tag: {
			type: [String, Object],
			default: "span"
		},
		contentTag: {
			type: [String, Object],
			default: "span"
		},
		contentClass: {
			type: String,
			default: null
		},
		appendTo: { default: () => $.defaultProps.appendTo },
		aria: { default: () => $.defaultProps.aria },
		delay: { default: () => $.defaultProps.delay },
		duration: { default: () => $.defaultProps.duration },
		getReferenceClientRect: { default: () => $.defaultProps.getReferenceClientRect },
		hideOnClick: {
			type: [Boolean, String],
			default: () => $.defaultProps.hideOnClick
		},
		ignoreAttributes: {
			type: Boolean,
			default: () => $.defaultProps.ignoreAttributes
		},
		interactive: {
			type: Boolean,
			default: () => $.defaultProps.interactive
		},
		interactiveBorder: { default: () => $.defaultProps.interactiveBorder },
		interactiveDebounce: { default: () => $.defaultProps.interactiveDebounce },
		moveTransition: { default: () => $.defaultProps.moveTransition },
		offset: { default: () => $.defaultProps.offset },
		onAfterUpdate: { default: () => $.defaultProps.onAfterUpdate },
		onBeforeUpdate: { default: () => $.defaultProps.onBeforeUpdate },
		onCreate: { default: () => $.defaultProps.onCreate },
		onDestroy: { default: () => $.defaultProps.onDestroy },
		onHidden: { default: () => $.defaultProps.onHidden },
		onHide: { default: () => $.defaultProps.onHide },
		onMount: { default: () => $.defaultProps.onMount },
		onShow: { default: () => $.defaultProps.onShow },
		onShown: { default: () => $.defaultProps.onShown },
		onTrigger: { default: () => $.defaultProps.onTrigger },
		onUntrigger: { default: () => $.defaultProps.onUntrigger },
		onClickOutside: { default: () => $.defaultProps.onClickOutside },
		placement: { default: () => $.defaultProps.placement },
		plugins: { default: () => $.defaultProps.plugins },
		popperOptions: { default: () => $.defaultProps.popperOptions },
		render: { default: () => $.defaultProps.render },
		showOnCreate: {
			type: Boolean,
			default: () => $.defaultProps.showOnCreate
		},
		touch: {
			type: [
				Boolean,
				String,
				Array
			],
			default: () => $.defaultProps.touch
		},
		trigger: { default: () => $.defaultProps.trigger },
		triggerTarget: { default: () => $.defaultProps.triggerTarget },
		animateFill: {
			type: Boolean,
			default: () => $.defaultProps.animateFill
		},
		followCursor: {
			type: [Boolean, String],
			default: () => $.defaultProps.followCursor
		},
		inlinePositioning: {
			type: Boolean,
			default: () => $.defaultProps.inlinePositioning
		},
		sticky: {
			type: [Boolean, String],
			default: () => $.defaultProps.sticky
		},
		allowHTML: {
			type: Boolean,
			default: () => $.defaultProps.allowHTML
		},
		animation: { default: () => $.defaultProps.animation },
		arrow: { default: () => $.defaultProps.arrow },
		content: { default: () => $.defaultProps.content },
		inertia: { default: () => $.defaultProps.inertia },
		maxWidth: { default: () => $.defaultProps.maxWidth },
		role: { default: () => $.defaultProps.role },
		theme: { default: () => $.defaultProps.theme },
		zIndex: { default: () => $.defaultProps.zIndex }
	},
	emits: ["state"],
	setup(e, { slots: t, emit: n, expose: r }) {
		let i = w(), a = w(), o = w(), s = w(!1), c = () => {
			let t = { ...e };
			for (let e of [
				"to",
				"tag",
				"contentTag",
				"contentClass"
			]) t.hasOwnProperty(e) && delete t[e];
			return t;
		}, l = () => Nc(i);
		e.to && (typeof Element < "u" && e.to instanceof Element ? l = () => e.to : e.to === "parent" ? l = () => {
			let e = i.value;
			return e ||= i.value = a.value.parentElement, e;
		} : (typeof e.to == "string" || e.to instanceof String) && (l = () => document.querySelector(e.to)));
		let u = Ac(l, c()), d = t.content;
		!d && e.to === "parent" && (d = t.default), y(() => {
			s.value = !0, v(() => {
				d && u.setContent(() => o.value);
			});
		}), A(u.state, () => {
			n("state", O(u.state));
		}, {
			immediate: !0,
			deep: !0
		}), A(() => e, () => {
			u.setProps(c()), d && u.setContent(() => o.value);
		}, { deep: !0 });
		let f = C({
			elem: i,
			contentElem: o,
			mounted: s,
			...u
		});
		return r(f), () => {
			let n = (e.contentTag, e.contentTag), r = d ? p(n, {
				ref: o,
				style: { display: s.value ? "inherit" : "none" },
				class: e.contentClass
			}, d(f)) : null;
			if (e.to === "parent") {
				let e = [];
				if (!i.value) {
					let t = p("span", {
						ref: a,
						"data-v-tippy": "",
						style: { display: "none" }
					});
					e.push(t);
				}
				return r && e.push(r), e;
			}
			let c = t.default ? t.default(f) : [];
			if (!e.tag) {
				let e = p(c[0], {
					ref: i,
					"data-v-tippy": ""
				});
				return r ? [e, r] : e;
			}
			return p((e.tag, e.tag), {
				ref: i,
				"data-v-tippy": ""
			}, r ? [c, r] : c);
		};
	}
}), Fc = [
	"a11y",
	"allowHTML",
	"arrow",
	"flip",
	"flipOnUpdate",
	"hideOnClick",
	"ignoreAttributes",
	"inertia",
	"interactive",
	"lazy",
	"multiple",
	"showOnInit",
	"touch",
	"touchHold"
], Ic = {};
Object.keys($.defaultProps).forEach((e) => {
	Fc.includes(e) ? Ic[e] = {
		type: Boolean,
		default: function() {
			return $.defaultProps[e];
		}
	} : Ic[e] = { default: function() {
		return $.defaultProps[e];
	} };
});
var Lc = l({
	props: Ic,
	setup(e) {
		let t = w([]), { singleton: n } = jc(t, e);
		return {
			instances: t,
			singleton: n
		};
	},
	mounted() {
		var e;
		let t = this.$el.parentElement.querySelectorAll("[data-v-tippy]");
		this.instances = Array.from(t).map((e) => e._tippy).filter(Boolean), (e = this.singleton) == null || e.setInstances(this.instances);
	},
	render() {
		let e = this.$slots.default ? this.$slots.default() : [];
		return p(() => e);
	}
}), Rc = {
	mounted(e, t, n) {
		let r = typeof t.value == "string" ? { content: t.value } : t.value || {}, i = Object.keys(t.modifiers || {}), a = i.find((e) => e !== "arrow"), o = i.findIndex((e) => e === "arrow") !== -1;
		a && (r.placement = r.placement || a), o && (r.arrow = r.arrow === void 0 ? !0 : r.arrow), n.props && n.props.onTippyShow && (r.onShow = function(...e) {
			return n.props?.onTippyShow(...e);
		}), n.props && n.props.onTippyShown && (r.onShown = function(...e) {
			return n.props?.onTippyShown(...e);
		}), n.props && n.props.onTippyHidden && (r.onHidden = function(...e) {
			return n.props?.onTippyHidden(...e);
		}), n.props && n.props.onTippyHide && (r.onHide = function(...e) {
			return n.props?.onTippyHide(...e);
		}), n.props && n.props.onTippyMount && (r.onMount = function(...e) {
			return n.props?.onTippyMount(...e);
		}), e.getAttribute("title") && !r.content && (r.content = e.getAttribute("title"), e.removeAttribute("title")), e.getAttribute("content") && !r.content && (r.content = e.getAttribute("content")), Ac(e, r);
	},
	unmounted(e) {
		e.$tippy ? e.$tippy.destroy() : e._tippy && e._tippy.destroy();
	},
	updated(e, t) {
		let n = typeof t.value == "string" ? { content: t.value } : t.value || {};
		n.content ||= null, e.getAttribute("title") && !n.content && (n.content = e.getAttribute("title"), e.removeAttribute("title")), e.getAttribute("content") && !n.content && (n.content = e.getAttribute("content")), e.$tippy ? e.$tippy.setProps(n || {}) : e._tippy && e._tippy.setProps(n || {});
	}
}, zc = { install(e, t = {}) {
	$.setDefaultProps(t.defaultProps || {}), e.directive(t.directive || "tippy", Rc), e.component(t.component || "tippy", Pc), e.component(t.componentSingleton || "tippy-singleton", Lc);
} }, Bc = $.setDefaultProps;
Bc({
	ignoreAttributes: !0,
	plugins: [
		Dc,
		Tc,
		Cc,
		gc
	]
});
//#endregion
//#region src/lang/lang.csv
var Vc = [
	{
		key: "timeslider.expand",
		enValue: "Expand",
		enValid: "1",
		frValue: "Développer",
		frValid: "1"
	},
	{
		key: "timeslider.minimize",
		enValue: "Minimize",
		enValid: "1",
		frValue: "Réduire",
		frValid: "1"
	},
	{
		key: "timeslider.play",
		enValue: "Play",
		enValid: "1",
		frValue: "Lire",
		frValid: "1"
	},
	{
		key: "timeslider.pause",
		enValue: "Pause",
		enValid: "1",
		frValue: "Pause",
		frValid: "1"
	},
	{
		key: "timeslider.close",
		enValue: "Close",
		enValid: "1",
		frValue: "Fermer",
		frValid: "1"
	},
	{
		key: "appbarbutton.tooltip",
		enValue: "Timeslider",
		enValid: "1",
		frValue: "Curseur temporel",
		frValid: "1"
	},
	{
		key: "month.jan",
		enValue: "January",
		enValid: "1",
		frValue: "Janvier",
		frValid: "1"
	},
	{
		key: "month.feb",
		enValue: "February",
		enValid: "1",
		frValue: "Février",
		frValid: "1"
	},
	{
		key: "month.mar",
		enValue: "March",
		enValid: "1",
		frValue: "Mars",
		frValid: "1"
	},
	{
		key: "month.apr",
		enValue: "April",
		enValid: "1",
		frValue: "Avril",
		frValid: "1"
	},
	{
		key: "month.may",
		enValue: "May",
		enValid: "1",
		frValue: "Mai",
		frValid: "1"
	},
	{
		key: "month.jun",
		enValue: "June",
		enValid: "1",
		frValue: "Juin",
		frValid: "1"
	},
	{
		key: "month.jul",
		enValue: "July",
		enValid: "1",
		frValue: "Juillet",
		frValid: "1"
	},
	{
		key: "month.aug",
		enValue: "August",
		enValid: "1",
		frValue: "Août",
		frValid: "1"
	},
	{
		key: "month.sep",
		enValue: "September",
		enValid: "1",
		frValue: "Septembre",
		frValid: "1"
	},
	{
		key: "month.oct",
		enValue: "October",
		enValid: "1",
		frValue: "Octobre",
		frValid: "1"
	},
	{
		key: "month.nov",
		enValue: "November",
		enValid: "1",
		frValue: "Novembre",
		frValid: "1"
	},
	{
		key: "month.dec",
		enValue: "December",
		enValid: "1",
		frValue: "Décembre",
		frValid: "1"
	}
], Hc = document.documentElement.getAttribute("lang");
function Uc(e) {
	return e.reduce((e, t) => (e.en[t.key] = t.enValue, e.fr[t.key] = t.frValue, e), {
		en: {},
		fr: {}
	});
}
var Wc = Gi({
	legacy: !1,
	locale: Hc || void 0,
	fallbackLocale: "en",
	globalInjection: !0,
	messages: Uc(Vc)
}), Gc = class {
	timeSliderPanel;
	removed() {
		this.$vApp.$el.querySelector(".inner-shell")?.removeChild(this.timeSliderPanel);
	}
	added() {
		let e = this.$iApi, t = e.getConfig().fixtures?.timeslider;
		t && this.initTimeSlider(t), e.$element.component("timeslider-appbar-button", {
			props: ["options"],
			template: `<appbar-button :onClickFunction="onClick" tooltip="${Wc.global.t("appbarbutton.tooltip")}">
                            <svg xmlns="http://www.w3.org/2000/svg" class="fill-current justify-self-center" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                        </appbar-button>`,
			methods: { onClick() {
				e.event.emit("timeslider/toggle");
			} }
		});
	}
	initTimeSlider(e) {
		let t = this.$iApi;
		this.timeSliderPanel = document.createElement("div"), i({ setup(e) {
			return () => p(va, { props: {
				config: e.config,
				rInstance: e.rInt
			} });
		} }, {
			config: e,
			rInstance: t
		}).use(Wc).use(zc, {
			directive: "tippy",
			component: "tippy"
		}).mount(this.timeSliderPanel), this.timeSliderPanel.classList.add("time-slider-container"), this.$vApp.$el.querySelector(".inner-shell")?.appendChild(this.timeSliderPanel);
	}
};
//#endregion
//#region src/main.ts
window.TimeSliderFixture = Gc;
//#endregion
export { Gc as TimeSliderFixture };

//# sourceMappingURL=timeslider.browser.es.js.map