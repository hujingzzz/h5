!function(t, e, i) {
    i.un, i.uns;
    var r = i.static, _ = i.class, a = i.getset, n = (i.__newvec, laya.maths.Bezier), s = laya.resource.Bitmap, o = laya.utils.Browser, h = (laya.display.css.CacheStyle, 
    laya.filters.ColorFilter), l = laya.utils.ColorUtils, u = i.Config, c = laya.resource.Context, f = laya.display.cmd.DrawCanvasCmd, d = laya.display.cmd.DrawImageCmd, A = (laya.events.Event, 
    laya.display.cmd.FillTextCmd), E = laya.filters.Filter, m = laya.utils.FontInfo, R = laya.display.Graphics, p = laya.resource.HTMLCanvas, T = (laya.utils.HTMLChar, 
    laya.resource.HTMLImage), v = (laya.utils.Handler, laya.net.Loader, laya.maths.Matrix), D = laya.display.Node, P = laya.maths.Point, C = laya.utils.Pool, g = laya.maths.Rectangle, M = laya.renders.Render, y = laya.renders.RenderSprite, O = laya.resource.Resource, S = laya.display.cmd.RestoreCmd, b = laya.display.cmd.RotateCmd, L = laya.utils.RunDriver, x = laya.display.cmd.SaveCmd, B = laya.display.cmd.ScaleCmd, I = laya.display.Sprite, N = (laya.display.SpriteConst, 
    laya.display.css.SpriteStyle, laya.display.Stage), F = laya.utils.Stat, w = laya.utils.StringKey, V = laya.system.System, U = laya.display.Text, W = laya.resource.Texture, G = laya.display.cmd.TransformCmd, X = laya.display.cmd.TranslateCmd, k = laya.utils.VectorGraphManager;
    laya.utils.WordText;
    i.interface("laya.webgl.submit.ISubmit"), i.interface("laya.webgl.canvas.save.ISaveData");
    var z = function() {
        function t() {}
        _(t, "laya.webgl.canvas.save.SaveBase");
        var e = t.prototype;
        return i.imps(e, {
            "laya.webgl.canvas.save.ISaveData": !0
        }), e.isSaveMark = function() {
            return !1;
        }, e.restore = function(e) {
            this._dataObj[this._valueName] = this._value, t.POOL[t.POOL._length++] = this, this._newSubmit && (e._curSubmit = At.RENDERBASE);
        }, t._createArray = function() {
            var t = [];
            return t._length = 0, t;
        }, t._init = function() {
            var e = t._namemap = {};
            return e[1] = "ALPHA", e[2] = "fillStyle", e[8] = "font", e[256] = "lineWidth", 
            e[512] = "strokeStyle", e[8192] = "_mergeID", e[1024] = e[2048] = e[4096] = [], 
            e[16384] = "textBaseline", e[32768] = "textAlign", e[65536] = "_nBlendType", e[1048576] = "shader", 
            e[2097152] = "filters", e[8388608] = "_colorFiler", e;
        }, t.save = function(e, i, r, _) {
            if ((e._saveMark._saveuse & i) !== i) {
                e._saveMark._saveuse |= i;
                var a = t.POOL, n = a._length > 0 ? a[--a._length] : new t();
                n._value = r[n._valueName = t._namemap[i]], n._dataObj = r, n._newSubmit = _;
                var s = e._save;
                s[s._length++] = n;
            }
        }, t.POOL = laya.webgl.canvas.save.SaveBase._createArray(), t._namemap = t._init(), 
        t;
    }(), Y = function() {
        function t(e, i) {
            this.size = [ 0, 0 ], this.alpha = 1, this.ALPHA = 1, this.subID = 0, this.ref = 1, 
            this._cacheID = 0, this.clipMatDir = [ 99999999, 0, 0, 99999999 ], this.clipMatPos = [ 0, 0 ], 
            this.defines = new jt(), this.mainID = e, this.subID = i, this.textureHost = null, 
            this.texture = null, this.color = null, this.colorAdd = null, this.u_mmat2 = null, 
            this._cacheID = e | i, this._inClassCache = t._cache[this._cacheID], e > 0 && !this._inClassCache && (this._inClassCache = t._cache[this._cacheID] = [], 
            this._inClassCache._length = 0), this.clear();
        }
        _(t, "laya.webgl.shader.d2.value.Value2D");
        var e = t.prototype;
        return e.setValue = function(t) {}, e._ShaderWithCompile = function() {
            return he.withCompile2D(0, this.mainID, this.defines.toNameDic(), this.mainID | this.defines._value, ce.create, this._attribLocation);
        }, e.upload = function() {
            var t = bt;
            bt.worldMatrix4 === bt.TEMPMAT4_ARRAY || this.defines.addInt(128), this.mmat = t.worldMatrix4, 
            bt.matWVP && (this.defines.addInt(2048), this.u_MvpMatrix = bt.matWVP.elements);
            var e = he.sharders[this.mainID | this.defines._value] || this._ShaderWithCompile();
            e._shaderValueWidth !== t.width || e._shaderValueHeight !== t.height ? (this.size[0] = t.width, 
            this.size[1] = t.height, e._shaderValueWidth = t.width, e._shaderValueHeight = t.height, 
            e.upload(this, null)) : e.upload(this, e._params2dQuick2 || e._make2dQuick2());
        }, e.setFilters = function(t) {
            if (this.filters = t, t) for (var e, i = t.length, r = 0; r < i; r++) (e = t[r]) && (this.defines.add(e.type), 
            e.action.setValue(this));
        }, e.clear = function() {
            this.defines._value = this.subID + (mt.shaderHighPrecision ? 1024 : 0);
        }, e.release = function() {
            --this.ref < 1 && (this._inClassCache && (this._inClassCache[this._inClassCache._length++] = this), 
            this.clear(), this.filters = null, this.ref = 1);
        }, t._initone = function(e, i) {
            t._typeClass[e] = i, t._cache[e] = [], t._cache[e]._length = 0;
        }, t.__init__ = function() {
            t._initone(4, zt), t._initone(512, Xt), t._initone(1, kt), t._initone(9, kt);
        }, t.create = function(e, i) {
            var r = t._cache[e | i];
            return r._length ? r[--r._length] : new t._typeClass[e | i](i);
        }, t._cache = [], t._typeClass = [], t.TEMPMAT4_ARRAY = [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ], 
        t;
    }(), H = function() {
        function t() {
            this.ib = null, this.vb = null;
            mt.mainContext;
            this.ib = ae.create(35048), this.vb = ne.create(8);
        }
        _(t, "laya.webgl.shader.d2.skinAnishader.SkinMeshBuffer");
        var e = t.prototype;
        return e.addSkinMesh = function(t) {
            t.getData2(this.vb, this.ib, this.vb._byteLength / 32);
        }, e.reset = function() {
            this.vb.clear(), this.ib.clear();
        }, t.getInstance = function() {
            return t.instance = t.instance || new t();
        }, t.instance = null, t;
    }(), Z = (function() {
        function t() {
            this._graphicsCmdEncoder = null, this._paramData = new ParamData(16, !0);
        }
        _(t, "laya.layagl.cmdNative.ScaleCmdNative");
        var e = t.prototype;
        e.recover = function() {
            C.recover("ScaleCmd", this);
        }, a(0, e, "cmdID", function() {
            return "Scale";
        }), a(0, e, "scaleX", function() {
            return this._paramData._float32Data[0];
        }, function(t) {
            this._paramData._float32Data[0] = t, j.syncBufferToRenderThread(this._paramData);
        }), a(0, e, "scaleY", function() {
            return this._paramData._float32Data[1];
        }, function(t) {
            this._paramData._float32Data[1] = t, j.syncBufferToRenderThread(this._paramData);
        }), a(0, e, "pivotX", function() {
            return this._paramData._float32Data[2];
        }, function(t) {
            this._paramData._float32Data[2] = t, j.syncBufferToRenderThread(this._paramData);
        }), a(0, e, "pivotY", function() {
            return this._paramData._float32Data[3];
        }, function(t) {
            this._paramData._float32Data[3] = t, j.syncBufferToRenderThread(this._paramData);
        }), t.create = function(e, i, r, _) {
            var a = C.getItemByClass("ScaleCmd", t), n = a._graphicsCmdEncoder = this._commandEncoder, s = a._paramData._float32Data;
            s[0] = e, s[1] = i, s[2] = r, s[3] = _;
            var o = a._paramData.getPtrID();
            return j.syncBufferToRenderThread(a._paramData), n.setGlobalValueEx(Nt.GLOBALVALUE_MATRIX32, 12, o, 0), 
            j.syncBufferToRenderThread(n), a;
        }, t.ID = "Scale";
    }(), function() {
        function t() {
            this._clipInfoID = -1, this._globalClipMatrix = new v(), this._clipRect = new g();
        }
        _(t, "laya.webgl.canvas.save.SaveClipRect");
        var e = t.prototype;
        return i.imps(e, {
            "laya.webgl.canvas.save.ISaveData": !0
        }), e.isSaveMark = function() {
            return !1;
        }, e.restore = function(e) {
            this._globalClipMatrix.copyTo(e._globalClipMatrix), this._clipRect.clone(e._clipRect), 
            e._clipInfoID = this._clipInfoID, t.POOL[t.POOL._length++] = this;
        }, t.save = function(e) {
            if (131072 != (131072 & e._saveMark._saveuse)) {
                e._saveMark._saveuse |= 131072;
                var i = t.POOL, r = i._length > 0 ? i[--i._length] : new t();
                e._globalClipMatrix.copyTo(r._globalClipMatrix), e._clipRect.clone(r._clipRect), 
                r._clipInfoID = e._clipInfoID;
                var _ = e._save;
                _[_._length++] = r;
            }
        }, t.POOL = z._createArray(), t;
    }()), j = (function() {
        function t() {
            this._graphicsCmdEncoder = null, this._paramData = new ParamData(8, !0);
        }
        _(t, "laya.layagl.cmdNative.TranslateCmdNative");
        var e = t.prototype;
        e.recover = function() {
            C.recover("TranslateCmd", this);
        }, a(0, e, "ty", function() {
            return this._paramData._float32Data[1];
        }, function(t) {
            this._paramData._float32Data[1] = t, j.syncBufferToRenderThread(this._paramData);
        }), a(0, e, "cmdID", function() {
            return "Translate";
        }), a(0, e, "tx", function() {
            return this._paramData._float32Data[0];
        }, function(t) {
            this._paramData._float32Data[0] = t, j.syncBufferToRenderThread(this._paramData);
        }), t.create = function(e, i) {
            var r = C.getItemByClass("TranslateCmd", t), _ = r._graphicsCmdEncoder = this._commandEncoder, a = r._paramData._float32Data;
            a[0] = e, a[1] = i;
            var n = r._paramData.getPtrID();
            return j.syncBufferToRenderThread(r._paramData), _.setGlobalValueEx(Nt.GLOBALVALUE_MATRIX32, 9, n, 0), 
            j.syncBufferToRenderThread(_), r;
        }, t.ID = "Translate";
    }(), function() {
        function t() {}
        _(t, "laya.layagl.LayaGL");
        var e = t.prototype;
        return e.createCommandEncoder = function(t, e, i) {
            return void 0 === t && (t = 128), void 0 === e && (e = 64), void 0 === i && (i = !1), 
            new Ct(this, t, e, i);
        }, e.beginCommandEncoding = function(t) {}, e.endCommandEncoding = function() {}, 
        e.calcMatrixFromScaleSkewRotation = function(t, e, i, r, _, a, n, s, o, h, l, u) {}, 
        e.setGLTemplate = function(t, e) {}, e.setEndGLTemplate = function(t, e) {}, e.matrix4x4Multiply = function(t, e, i) {}, 
        e.evaluateClipDatasRealTime = function(t, e, i, r) {}, t.getFrameCount = function() {
            return 0;
        }, t.syncBufferToRenderThread = function(t, e) {
            void 0 === e && (e = 0);
        }, t.createArrayBufferRef = function(t, e, i) {}, t.createArrayBufferRefs = function(t, e, i, r) {}, 
        t.EXECUTE_JS_THREAD_BUFFER = 0, t.EXECUTE_RENDER_THREAD_BUFFER = 1, t.EXECUTE_COPY_TO_RENDER = 2, 
        t.EXECUTE_COPY_TO_RENDER3D = 3, t.VALUE_OPERATE_ADD = 0, t.VALUE_OPERATE_SUB = 1, 
        t.VALUE_OPERATE_MUL = 2, t.VALUE_OPERATE_DIV = 3, t.VALUE_OPERATE_M2_MUL = 4, t.VALUE_OPERATE_M3_MUL = 5, 
        t.VALUE_OPERATE_M4_MUL = 6, t.VALUE_OPERATE_M32_MUL = 7, t.VALUE_OPERATE_SET = 8, 
        t.VALUE_OPERATE_M32_TRANSLATE = 9, t.VALUE_OPERATE_M32_SCALE = 10, t.VALUE_OPERATE_M32_ROTATE = 11, 
        t.VALUE_OPERATE_M32_SCALE_PIVOT = 12, t.VALUE_OPERATE_M32_ROTATE_PIVOT = 13, t.VALUE_OPERATE_M32_TRANSFORM_PIVOT = 14, 
        t.VALUE_OPERATE_BYTE4_COLOR_MUL = 15, t.ARRAY_BUFFER_TYPE_DATA = 0, t.ARRAY_BUFFER_TYPE_CMD = 1, 
        t.ARRAY_BUFFER_REF_REFERENCE = 0, t.ARRAY_BUFFER_REF_COPY = 1, t.UPLOAD_SHADER_UNIFORM_TYPE_ID = 0, 
        t.UPLOAD_SHADER_UNIFORM_TYPE_DATA = 1, t.instance = null, t;
    }()), Q = function() {
        function t(t, e, i) {
            this.atlasID = 0, this._width = 0, this._height = 0, this._texCount = 0, this._rowInfo = null, 
            this._cells = null, this._used = 0, void 0 === t && (t = 0), void 0 === e && (e = 0), 
            void 0 === i && (i = 0), this._cells = null, this._rowInfo = null, this.atlasID = i, 
            this._init(t, e);
        }
        _(t, "laya.webgl.text.AtlasGrid");
        var e = t.prototype;
        return e.addRect = function(t, e, i, r) {
            return !!this._get(e, i, r) && (this._fill(r.x, r.y, e, i, t), this._texCount++, 
            !0);
        }, e._release = function() {
            this._cells = null, this._rowInfo = null;
        }, e._init = function(t, e) {
            return this._width = t, this._height = e, this._release(), 0 != this._width && (this._cells = new Uint8Array(this._width * this._height * 3), 
            this._rowInfo = new Uint8Array(this._height), this._used = 0, this._clear(), !0);
        }, e._get = function(t, e, i) {
            if (t > this._width || e > this._height) return !1;
            for (var r = -1, _ = -1, a = this._width, n = this._height, s = this._cells, o = 0; o < n; o++) if (!(this._rowInfo[o] < t)) for (var h = 0; h < a; ) {
                var l = 3 * (o * a + h);
                if (0 != s[l] || s[l + 1] < t || s[l + 2] < e) h += s[l + 1]; else {
                    r = h, _ = o;
                    for (var u = 0; u < t; u++) if (s[3 * u + l + 2] < e) {
                        r = -1;
                        break;
                    }
                    if (!(r < 0)) return i.x = r, i.y = _, !0;
                    h += s[l + 1];
                }
            }
            return !1;
        }, e._fill = function(t, e, i, r, _) {
            var a = this._width, n = this._height;
            this._check(t + i <= a && e + r <= n);
            for (var s = e; s < r + e; ++s) {
                this._check(this._rowInfo[s] >= i), this._rowInfo[s] -= i;
                for (var o = 0; o < i; o++) {
                    var h = 3 * (t + s * a + o);
                    this._check(0 == this._cells[h]), this._cells[h] = _, this._cells[h + 1] = i, this._cells[h + 2] = r;
                }
            }
            if (t > 0) for (s = 0; s < r; ++s) {
                var l = 0;
                for (o = t - 1; o >= 0 && 0 == this._cells[3 * ((e + s) * a + o)]; --o, ++l) ;
                for (o = l; o > 0; --o) this._cells[3 * ((e + s) * a + t - o) + 1] = o, this._check(o > 0);
            }
            if (e > 0) for (o = t; o < t + i; ++o) {
                for (l = 0, s = e - 1; s >= 0 && 0 == this._cells[3 * (o + s * a)]; --s, l++) ;
                for (s = l; s > 0; --s) this._cells[3 * (o + (e - s) * a) + 2] = s, this._check(s > 0);
            }
            this._used += i * r / (this._width * this._height);
        }, e._check = function(t) {
            0 == t && console.log("xtexMerger 错误啦");
        }, e._clear = function() {
            this._texCount = 0;
            for (var t = 0; t < this._height; t++) this._rowInfo[t] = this._width;
            for (var e = 0; e < this._height; e++) for (var i = 0; i < this._width; i++) {
                var r = 3 * (e * this._width + i);
                this._cells[r] = 0, this._cells[r + 1] = this._width - i, this._cells[r + 2] = this._width - e;
            }
        }, t;
    }(), K = function() {
        function t(t, e, i) {
            this._stride = 0, this.vertNum = 0, this.indexNum = 0, this._applied = !1, this._vb = null, 
            this._ib = null, this._vao = null, this._attribInfo = null, this._quadNum = 0, this.canReuse = !1, 
            this._stride = t, this._vb = new ne(t, 35048), e ? this._vb._resizeBuffer(e, !1) : u.webGL2D_MeshAllocMaxMem && this._vb._resizeBuffer(65536 * t, !1), 
            this._ib = new ae(), i && this._ib._resizeBuffer(i, !1);
        }
        _(t, "laya.webgl.utils.Mesh2D");
        var e = t.prototype;
        return e.cloneWithNewVB = function() {
            var e = new t(this._stride, 0, 0);
            return e._ib = this._ib, e._quadNum = this._quadNum, e._attribInfo = this._attribInfo, 
            e;
        }, e.cloneWithNewVBIB = function() {
            var e = new t(this._stride, 0, 0);
            return e._attribInfo = this._attribInfo, e;
        }, e.getVBW = function() {
            return this._vb.setNeedUpload(), this._vb;
        }, e.getVBR = function() {
            return this._vb;
        }, e.getIBR = function() {
            return this._ib;
        }, e.getIBW = function() {
            return this._ib.setNeedUpload(), this._ib;
        }, e.createQuadIB = function(t) {
            this._quadNum = t, this._ib._resizeBuffer(6 * t * 2, !1), this._ib.byteLength = this._ib.bufferLength;
            for (var e = this._ib.getUint16Array(), i = 0, r = 0, _ = 0; _ < t; _++) e[i++] = r, 
            e[i++] = r + 2, e[i++] = r + 1, e[i++] = r, e[i++] = r + 3, e[i++] = r + 2, r += 4;
            this._ib.setNeedUpload();
        }, e.setAttributes = function(t) {
            if (this._attribInfo = t, this._attribInfo.length % 3 != 0) throw "Mesh2D setAttributes error!";
        }, e.configVAO = function(t) {
            if (!this._applied) {
                this._applied = !0, this._vao || (this._vao = new Kt()), this._vao.bind(), this._vb._bindForVAO(), 
                this._ib.setNeedUpload(), this._ib._bind_uploadForVAO();
                for (var e = this._attribInfo.length / 3, i = 0, r = 0; r < e; r++) {
                    var _ = this._attribInfo[i + 1], a = this._attribInfo[i], n = this._attribInfo[i + 2];
                    t.enableVertexAttribArray(r), t.vertexAttribPointer(r, _, a, !1, this._stride, n), 
                    i += 3;
                }
                this._vao.unBind();
            }
        }, e.useMesh = function(t) {
            this._applied || this.configVAO(t), this._vao.bind(), this._vb.bind(), this._ib._bind_upload() || this._ib.bind(), 
            this._vb._bind_upload() || this._vb.bind();
        }, e.getEleNum = function() {
            return this._ib.getBuffer().byteLength / 2;
        }, e.releaseMesh = function() {}, e.destroy = function() {}, e.clearVB = function() {
            this._vb.clear();
        }, t._gvaoid = 0, t;
    }(), q = function() {
        function t(t) {
            this._color = null, this.setValue(t);
        }
        _(t, "laya.webgl.canvas.DrawStyle");
        var e = t.prototype;
        return e.setValue = function(t) {
            this._color = t ? t instanceof laya.utils.ColorUtils ? t : l.create(t) : l.create("#000000");
        }, e.reset = function() {
            this._color = l.create("#000000");
        }, e.toInt = function() {
            return this._color.numColor;
        }, e.equal = function(t) {
            return "string" == typeof t ? this._color.strColor === t : t instanceof laya.utils.ColorUtils && this._color.numColor === t.numColor;
        }, e.toColorStr = function() {
            return this._color.strColor;
        }, t.create = function(e) {
            if (e) {
                var i = e instanceof laya.utils.ColorUtils ? e : l.create(e);
                return i._drawStyle || (i._drawStyle = new t(e));
            }
            return t.DEFAULT;
        }, r(t, [ "DEFAULT", function() {
            return this.DEFAULT = new t("#000000");
        } ]), t;
    }(), J = function() {
        function t() {
            this.fontSizeInfo = {}, this.charRender = null, this.mapFont = {}, this.fontID = 0, 
            this.mapColor = [], this.colorID = 0, this.fontScaleX = 1, this.fontScaleY = 1, 
            this._curStrPos = 0, this.bmpData32 = null, this.lastFont = null, this.fontSizeW = 0, 
            this.fontSizeH = 0, this.fontSizeOffX = 0, this.fontSizeOffY = 0, this.renderPerChar = !0, 
            this.textureMem = 0, this.fontStr = null, this.textAtlases = [], this.isoTextures = [], 
            this.tmpAtlasPos = new P();
            var e = !1, r = i.MiniAdpter;
            r && r.systemInfo && r.systemInfo.system && (e = "ios 10.1.1" === r.systemInfo.system.toLowerCase()), 
            o.onMiniGame && !e && (t.isWan1Wan = !0), o.onLimixiu && (t.isWan1Wan = !0), this.charRender = M.isConchApp ? new qt() : new Qt(t.atlasWidth, t.atlasWidth, t.scaleFontWithCtx, !t.isWan1Wan, !1), 
            t.textRenderInst = this, i.textRender = this, t.atlasWidth2 = t.atlasWidth * t.atlasWidth;
        }
        _(t, "laya.webgl.text.TextRender");
        var e = t.prototype;
        return e.setFont = function(e) {
            if (this.lastFont != e) {
                this.lastFont = e;
                var i = this.getFontSizeInfo(e._family), r = i >> 24, _ = i >> 16 & 255, a = i >> 8 & 255, n = 255 & i, s = e._size / t.standardFontSize;
                this.fontSizeOffX = Math.ceil(r * s), this.fontSizeOffY = Math.ceil(_ * s), this.fontSizeW = Math.ceil(a * s), 
                this.fontSizeH = Math.ceil(n * s), this.fontStr = e._font.replace("italic", "");
            }
        }, e.getNextChar = function(t) {
            var e = t.length, i = this._curStrPos;
            if (i >= e) return null;
            for (var r = i, _ = 0; r < e; r++) {
                var a = t.charCodeAt(r);
                if (a >>> 11 == 27) {
                    if (1 == _) break;
                    _ = 1, r++;
                } else if (65038 === a || 65039 === a) ; else if (8205 == a) _ = 2; else if (0 == _) _ = 1; else if (1 == _) break;
            }
            return this._curStrPos = r, t.substring(i, r);
        }, e.filltext = function(t, e, i, r, _, a, n, s, o, h) {
            if (void 0 === h && (h = 0), !(e.length <= 0)) {
                var l = m.Parse(_), u = 0;
                switch (o) {
                  case "center":
                    u = c.ENUM_TEXTALIGN_CENTER;
                    break;

                  case "right":
                    u = c.ENUM_TEXTALIGN_RIGHT;
                }
                this._fast_filltext(t, e, null, i, r, l, a, n, s, u, h);
            }
        }, e.fillWords = function(t, e, i, r, _, a, n, s) {
            if (e && !(e.length <= 0)) {
                var o = m.Parse(_);
                this._fast_filltext(t, null, e, i, r, o, a, n, s, 0, 0);
            }
        }, e._fast_filltext = function(e, i, r, _, a, n, s, o, h, l, u) {
            if (void 0 === u && (u = 0), !(i && i.length < 1 || r && r.length < 1)) {
                if (h < 0 && (h = 0), this.setFont(n), this.fontScaleX = this.fontScaleY = 1, t.scaleFontWithCtx) {
                    var f = 1, d = 1;
                    if (M.isConchApp ? (f = e._curMat.getScaleX(), d = e._curMat.getScaleY()) : (f = e.getMatScaleX(), 
                    d = e.getMatScaleY()), f < 1e-4 || d < .1) return;
                    f > 1 && (this.fontScaleX = f), d > 1 && (this.fontScaleY = d);
                }
                n._italic && (e._italicDeg = 13);
                var A = i, E = !r && i instanceof laya.utils.WordText, m = i, R = !!r, p = E ? A.pageChars : [], T = 0;
                switch (E ? (m = A._text, (T = A.width) < 0 && (T = A.width = this.charRender.getWidth(this.fontStr, m))) : T = m ? this.charRender.getWidth(this.fontStr, m) : 0, 
                l) {
                  case c.ENUM_TEXTALIGN_CENTER:
                    _ -= T / 2;
                    break;

                  case c.ENUM_TEXTALIGN_RIGHT:
                    _ -= T;
                }
                A && p && this.hasFreedText(p) && (p = A.pageChars = []);
                var v = null, D = this.renderPerChar = !E || t.forceSplitRender || R;
                if (!p || p.length < 1) if (D) {
                    var P = 0, C = 0;
                    this._curStrPos = 0;
                    for (var g; ;) {
                        if (R) {
                            var y = r[this._curStrPos++];
                            y ? (g = y.char, P = y.x, C = y.y) : g = null;
                        } else g = this.getNextChar(m);
                        if (!g) break;
                        if (!(v = this.getCharRenderInfo(g, n, s, o, h, !1))) break;
                        if (v.isSpace) ; else {
                            var O = p[v.tex.id];
                            O || (p[v.tex.id] = O = []), M.isConchApp ? O.push({
                                ri: v,
                                x: P,
                                y: C,
                                w: v.bmpWidth / this.fontScaleX,
                                h: v.bmpHeight / this.fontScaleY
                            }) : O.push({
                                ri: v,
                                x: P + 1 / this.fontScaleX,
                                y: C + 1 / this.fontScaleY,
                                w: (v.bmpWidth - 2) / this.fontScaleX,
                                h: (v.bmpHeight - 2) / this.fontScaleY
                            }), P += v.width;
                        }
                    }
                } else {
                    var S = t.noAtlas || T * this.fontScaleX > t.atlasWidth;
                    v = this.getCharRenderInfo(m, n, s, o, h, S), M.isConchApp ? p[0] = [ {
                        ri: v,
                        x: 0,
                        y: 0,
                        w: v.bmpWidth / this.fontScaleX,
                        h: v.bmpHeight / this.fontScaleY
                    } ] : p[0] = [ {
                        ri: v,
                        x: 1 / this.fontScaleX,
                        y: 1 / this.fontScaleY,
                        w: (v.bmpWidth - 2) / this.fontScaleX,
                        h: (v.bmpHeight - 2) / this.fontScaleY
                    } ];
                }
                this._drawResortedWords(e, _, a, p), e._italicDeg = 0;
            }
        }, e._drawResortedWords = function(t, e, i, r) {
            var _ = t._charSubmitCache && t._charSubmitCache._enbale;
            for (var a in r) {
                var n = r[a], s = n.length;
                if (!(s <= 0)) for (var o = 0; o < s; o++) {
                    var h = n[o], l = h.ri;
                    l.isSpace || (l.touch(), t.drawTexAlign = !0, M.isConchApp ? t._drawTextureM(l.tex.texture, e + h.x - l.orix, i + h.y - l.oriy, h.w, h.h, null, 1, l.uv) : t._inner_drawTexture(l.tex.texture, l.tex.texture.bitmap.id, e + h.x - l.orix, i + h.y - l.oriy, h.w, h.h, null, l.uv, 1, _), 
                    t.touches && t.touches.push(l));
                }
            }
        }, e.hasFreedText = function(t) {
            for (var e in t) for (var i = t[e], r = 0, _ = i.length; r < _; r++) {
                var a = i[r].ri;
                if (a.deleted || a.tex.__destroyed) return !0;
            }
            return !1;
        }, e.getCharRenderInfo = function(e, i, r, _, a, n) {
            void 0 === n && (n = !1);
            var s = this.mapFont[i._family];
            void 0 == s && (this.mapFont[i._family] = s = this.fontID++);
            var o = e + "_" + s + "_" + i._size + "_" + r;
            a > 0 && (o += "_" + _ + a), i._bold && (o += "P"), 1 == this.fontScaleX && 1 == this.fontScaleY || (o += (20 * this.fontScaleX | 0) + "_" + (20 * this.fontScaleY | 0));
            var h = 0, l = this.textAtlases.length, u = null, c = null;
            if (!n) for (h = 0; h < l; h++) if (c = this.textAtlases[h], u = c.charMaps[o]) return u.touch(), 
            u;
            u = new ht(), this.charRender.scale(this.fontScaleX, this.fontScaleY), u.char = e, 
            u.height = i._size;
            var f = i._size / 3 | 0, d = null, A = Math.ceil(this.charRender.getWidth(this.fontStr, e) * this.fontScaleX);
            if (A > this.charRender.canvasWidth && (this.charRender.canvasWidth = Math.min(2048, A + 2 * f)), 
            n) {
                d = this.charRender.getCharBmp(e, this.fontStr, a, r, _, u, f, f, f, f, null);
                var E = _e.getTextTexture(d.width, d.height);
                E.addChar(d, 0, 0, u.uv), u.tex = E, u.orix = f, u.oriy = f, E.ri = u, this.isoTextures.push(E);
            } else {
                var m = e.length, R = 1 * a, p = Math.ceil((this.fontSizeW + 2 * R) * this.fontScaleX), T = Math.ceil((this.fontSizeH + 2 * R) * this.fontScaleY);
                t.imgdtRect[0] = (f - this.fontSizeOffX - R) * this.fontScaleX | 0, t.imgdtRect[1] = (f - this.fontSizeOffY - R) * this.fontScaleY | 0, 
                this.renderPerChar || 1 == m ? (t.imgdtRect[2] = Math.max(A, p), t.imgdtRect[3] = Math.max(A, T)) : (t.imgdtRect[2] = -1, 
                t.imgdtRect[3] = T), d = this.charRender.getCharBmp(e, this.fontStr, a, r, _, u, f, f, f, f, t.imgdtRect), 
                c = this.addBmpData(d, u), t.isWan1Wan ? (u.orix = f, u.oriy = f) : (u.orix = this.fontSizeOffX + R, 
                u.oriy = this.fontSizeOffY + R), c.charMaps[o] = u;
            }
            return u;
        }, e.addBmpData = function(t, e) {
            for (var i = t.width, r = t.height, _ = this.textAtlases.length, a = null, n = !1, s = 0; s < _ && (a = this.textAtlases[s], 
            !(n = a.getAEmpty(i, r, this.tmpAtlasPos))); s++) ;
            if (!n) {
                if (a = new Ut(), this.textAtlases.push(a), !(n = a.getAEmpty(i, r, this.tmpAtlasPos))) throw "err1";
                this.cleanAtlases();
            }
            return n && (a.texture.addChar(t, this.tmpAtlasPos.x, this.tmpAtlasPos.y, e.uv), 
            e.tex = a.texture), a;
        }, e.GC = function(e) {
            for (var i = 0, r = this.textAtlases.length, _ = t.destroyAtlasDt, a = 0, n = -1, s = 0, o = null, h = null; i < r; i++) {
                if (h = this.textAtlases[i], o = h.texture) {
                    o.curUsedCovRate, a += o.curUsedCovRateAtlas;
                    var l = h.usedRate - o.curUsedCovRateAtlas;
                    s < l && (s = l, n = i);
                }
                F.loopCount - h.texture.lastTouchTm > _ && (t.showLog && console.log(h.texture.id), 
                h.destroy(), this.textAtlases[i] = this.textAtlases[r - 1], r--, i--);
            }
            for (this.textAtlases.length = r, r = this.isoTextures.length, i = 0; i < r; i++) o = this.isoTextures[i], 
            F.loopCount - o.lastTouchTm > t.destroyUnusedTextureDt && (o.ri.deleted = !0, o.ri.tex = null, 
            o.destroy(), this.isoTextures[i] = this.isoTextures[r - 1], r--, i--);
            var u = this.textAtlases.length > 1 && this.textAtlases.length - a >= 2;
            (t.atlasWidth * t.atlasWidth * 4 * this.textAtlases.length > t.cleanMem || u || t.simClean) && (t.simClean = !1, 
            t.showLog && console.log("清理使用率低的贴图。总使用率:", a, ":", this.textAtlases.length, "最差贴图:" + n), 
            n >= 0 && ((h = this.textAtlases[n]).destroy(), this.textAtlases[n] = this.textAtlases[this.textAtlases.length - 1], 
            this.textAtlases.length = this.textAtlases.length - 1)), _e.clean();
        }, e.cleanAtlases = function() {}, e.getCharBmp = function(t) {}, e.checkBmpLine = function(t, e, i, r) {
            this.bmpData32.buffer != t.data.buffer && (this.bmpData32 = new Uint32Array(t.data.buffer));
            for (var _ = t.width * e + i, a = i; a < r; a++) if (0 != this.bmpData32[_++]) return !0;
            return !1;
        }, e.updateBbx = function(t, e, i) {
            void 0 === i && (i = !1);
            var r = t.width, _ = t.height, a = 0, n = e[1], s = 0, o = n;
            if (this.checkBmpLine(t, n, 0, r)) for (;;) {
                if ((o = (n + s) / 2 | 0) + 1 >= n) {
                    e[1] = o;
                    break;
                }
                this.checkBmpLine(t, o, 0, r) ? n = o : s = o;
            }
            if (e[3] > _) e[3] = _; else if (o = n = e[3], s = _, this.checkBmpLine(t, n, 0, r)) for (;;) {
                if ((o = (n + s) / 2 | 0) - 1 <= n) {
                    e[3] = o;
                    break;
                }
                this.checkBmpLine(t, o, 0, r) ? n = o : s = o;
            }
            if (!i) {
                var h = e[0], l = r * e[1];
                for (o = e[1]; o < e[3]; o++) {
                    for (a = 0; a < h; a++) if (0 != this.bmpData32[l + a]) {
                        h = a;
                        break;
                    }
                    l += r;
                }
                e[0] = h;
                var u = e[2];
                for (l = r * e[1], o = e[1]; o < e[3]; o++) {
                    for (a = u; a < r; a++) if (0 != this.bmpData32[l + a]) {
                        u = a;
                        break;
                    }
                    l += r;
                }
                e[2] = u;
            }
        }, e.getFontSizeInfo = function(e) {
            var i = this.fontSizeInfo[e];
            if (void 0 != i) return i;
            var r = "bold " + t.standardFontSize + "px " + e;
            if (t.isWan1Wan) {
                this.fontSizeW = 1.5 * this.charRender.getWidth(r, "国"), this.fontSizeH = 1.5 * t.standardFontSize;
                var _ = this.fontSizeW << 8 | this.fontSizeH;
                return this.fontSizeInfo[e] = _, _;
            }
            t.pixelBBX[0] = t.standardFontSize / 2, t.pixelBBX[1] = t.standardFontSize / 2, 
            t.pixelBBX[2] = t.standardFontSize, t.pixelBBX[3] = t.standardFontSize;
            var a = 16, n = 16;
            this.charRender.scale(1, 1), t.tmpRI.height = t.standardFontSize;
            var s = this.charRender.getCharBmp("g", r, 0, "red", null, t.tmpRI, a, n, 16, 16);
            M.isConchApp && (s.data = new Uint8ClampedArray(s.data)), this.bmpData32 = new Uint32Array(s.data.buffer), 
            this.updateBbx(s, t.pixelBBX, !1), s = this.charRender.getCharBmp("国", r, 0, "red", null, t.tmpRI, n, n, 16, 16), 
            M.isConchApp && (s.data = new Uint8ClampedArray(s.data)), this.bmpData32 = new Uint32Array(s.data.buffer), 
            t.pixelBBX[2] < a + t.tmpRI.width && (t.pixelBBX[2] = a + t.tmpRI.width), this.updateBbx(s, t.pixelBBX, !1), 
            M.isConchApp && (a = 0, n = 0);
            var o = Math.max(a - t.pixelBBX[0], 0) << 24 | Math.max(n - t.pixelBBX[1], 0) << 16 | t.pixelBBX[2] - t.pixelBBX[0] << 8 | t.pixelBBX[3] - t.pixelBBX[1];
            return this.fontSizeInfo[e] = o, o;
        }, e.printDbgInfo = function() {
            console.log("图集个数:" + this.textAtlases.length + ",每个图集大小:" + t.atlasWidth + "x" + t.atlasWidth, " 用canvas:", t.isWan1Wan), 
            console.log("图集占用空间:" + t.atlasWidth * t.atlasWidth * 4 / 1024 / 1024 * this.textAtlases.length + "M"), 
            console.log("缓存用到的字体:");
            for (var e in this.mapFont) {
                var i = this.getFontSizeInfo(e), r = i >> 24, _ = i >> 16 & 255, a = i >> 8 & 255, n = 255 & i;
                console.log("    " + e, " off:", r, _, " size:", a, n);
            }
            var s = 0;
            console.log("缓存数据:");
            var o = 0, h = 0;
            this.textAtlases.forEach(function(e) {
                var i = e.texture.id, r = F.loopCount - e.texture.lastTouchTm, _ = r > 0 ? r + "帧以前" : "当前帧";
                o += e.texture.curUsedCovRate, h += e.texture.curUsedCovRateAtlas, console.log("--图集(id:" + i + ",当前使用率:" + (1e3 * e.texture.curUsedCovRate | 0) + "‰", "当前图集使用率:", (100 * e.texture.curUsedCovRateAtlas | 0) + "%", "图集使用率:", 100 * e.usedRate | 0, "%, 使用于:" + _ + ")--:");
                for (var a in e.charMaps) {
                    var n = e.charMaps[a];
                    console.log("     off:", n.orix, n.oriy, " bmp宽高:", n.bmpWidth, n.bmpHeight, "无效:", n.deleted, "touchdt:", F.loopCount - n.touchTick, "位置:", n.uv[0] * t.atlasWidth | 0, n.uv[1] * t.atlasWidth | 0, "字符:", n.char, "key:", a), 
                    s++;
                }
            }), console.log("独立贴图文字(" + this.isoTextures.length + "个):"), this.isoTextures.forEach(function(t) {
                console.log("    size:", t._texW, t._texH, "touch间隔:", F.loopCount - t.lastTouchTm, "char:", t.ri.char);
            }), console.log("总缓存:", s, "总使用率:", o, "总当前图集使用率:", h);
        }, e.showAtlas = function(e, r, _, a, n, s) {
            if (!this.textAtlases[e]) return console.log("没有这个图集"), null;
            var o = new I(), h = this.textAtlases[e].texture, l = {
                width: t.atlasWidth,
                height: t.atlasWidth,
                sourceWidth: t.atlasWidth,
                sourceHeight: t.atlasWidth,
                offsetX: 0,
                offsetY: 0,
                getIsReady: function() {
                    return !0;
                },
                _addReference: function() {},
                _removeReference: function() {},
                _getSource: function() {
                    return h._getSource();
                },
                bitmap: {
                    id: h.id
                },
                _uv: W.DEF_UV
            };
            return o.size = function(t, e) {
                return this.width = t, this.height = e, o.graphics.clear(), o.graphics.drawRect(0, 0, o.width, o.height, r), 
                o.graphics.drawTexture(l, 0, 0, o.width, o.height), this;
            }, o.graphics.drawRect(0, 0, n, s, r), o.graphics.drawTexture(l, 0, 0, n, s), o.pos(_, a), 
            i.stage.addChild(o), o;
        }, e.filltext_native = function(t, e, i, r, _, a, n, s, o, h, l) {
            if (void 0 === l && (l = 0), !(e && e.length <= 0 || i && i.length < 1)) {
                var u = m.Parse(a), f = 0;
                switch (h) {
                  case "center":
                    f = c.ENUM_TEXTALIGN_CENTER;
                    break;

                  case "right":
                    f = c.ENUM_TEXTALIGN_RIGHT;
                }
                return this._fast_filltext(t, e, i, r, _, u, n, s, o, f, l);
            }
        }, t.useOldCharBook = !1, t.atlasWidth = 2048, t.noAtlas = !1, t.forceSplitRender = !1, 
        t.forceWholeRender = !1, t.scaleFontWithCtx = !0, t.standardFontSize = 32, t.destroyAtlasDt = 10, 
        t.checkCleanTextureDt = 2e3, t.destroyUnusedTextureDt = 3e3, t.cleanMem = 104857600, 
        t.isWan1Wan = !1, t.showLog = !1, t.debugUV = !1, t.atlasWidth2 = 4194304, t.textRenderInst = null, 
        t.simClean = !1, r(t, [ "tmpRI", function() {
            return this.tmpRI = new ht();
        }, "pixelBBX", function() {
            return this.pixelBBX = [ 0, 0, 0, 0 ];
        }, "imgdtRect", function() {
            return this.imgdtRect = [ 0, 0, 0, 0 ];
        } ]), t;
    }(), $ = function() {
        function t() {
            this._commandEncoder = null;
        }
        _(t, "laya.layagl.ConchGraphicsAdpt");
        var e = t.prototype;
        return e._createData = function() {
            this._commandEncoder = j.instance.createCommandEncoder(128, 64, !0);
        }, e._clearData = function() {
            this._commandEncoder && this._commandEncoder.clearEncoding();
        }, e._destroyData = function() {
            this._commandEncoder && (this._commandEncoder.clearEncoding(), this._commandEncoder = null);
        }, t.__init__ = function() {
            var e = R.prototype, i = t.prototype, r = [ "_createData", "_clearData", "_destroyData" ], _ = 0, a = 0;
            a = r.length;
            var n;
            for (_ = 0; _ < a; _++) e[n = r[_]] = i[n];
        }, t;
    }(), tt = (function() {
        function t() {}
        _(t, "laya.webgl.utils.MatirxArray"), t.ArrayMul = function(e, i, r) {
            if (e) if (i) for (var _ = NaN, a = NaN, n = NaN, s = NaN, o = 0; o < 4; o++) _ = e[o], 
            a = e[o + 4], n = e[o + 8], s = e[o + 12], r[o] = _ * i[0] + a * i[1] + n * i[2] + s * i[3], 
            r[o + 4] = _ * i[4] + a * i[5] + n * i[6] + s * i[7], r[o + 8] = _ * i[8] + a * i[9] + n * i[10] + s * i[11], 
            r[o + 12] = _ * i[12] + a * i[13] + n * i[14] + s * i[15]; else t.copyArray(e, r); else t.copyArray(i, r);
        }, t.copyArray = function(t, e) {
            if (t && e) for (var i = 0; i < t.length; i++) e[i] = t[i];
        };
    }(), function() {
        function t() {
            this._graphicsCmdEncoder = null, this._paramData = new ParamData(12, !0);
        }
        _(t, "laya.layagl.cmdNative.RotateCmdNative");
        var e = t.prototype;
        e.recover = function() {
            C.recover("RotateCmd", this);
        }, a(0, e, "cmdID", function() {
            return "Rotate";
        }), a(0, e, "angle", function() {
            return this._paramData._float32Data[0];
        }, function(t) {
            this._paramData._float32Data[0] = t, j.syncBufferToRenderThread(this._paramData);
        }), a(0, e, "pivotX", function() {
            return this._paramData._float32Data[1];
        }, function(t) {
            this._paramData._float32Data[1] = t, j.syncBufferToRenderThread(this._paramData);
        }), a(0, e, "pivotY", function() {
            return this._paramData._float32Data[2];
        }, function(t) {
            this._paramData._float32Data[2] = t, j.syncBufferToRenderThread(this._paramData);
        }), t.create = function(e, i, r) {
            var _ = C.getItemByClass("RotateCmd", t), a = _._graphicsCmdEncoder = this._commandEncoder, n = _._paramData._float32Data;
            n[0] = e, n[1] = i, n[2] = r;
            var s = _._paramData.getPtrID();
            return j.syncBufferToRenderThread(_._paramData), a.setGlobalValueEx(Nt.GLOBALVALUE_MATRIX32, 13, s, 0), 
            j.syncBufferToRenderThread(a), _;
        }, t.ID = "Rotate";
    }(), function() {
        function t() {
            this._graphicsCmdEncoder = null;
        }
        _(t, "laya.layagl.cmdNative.SaveCmdNative");
        var e = t.prototype;
        e.recover = function() {
            C.recover("SaveCmd", this);
        }, a(0, e, "cmdID", function() {
            return "Save";
        }), t.create = function() {
            var e = C.getItemByClass("SaveCmd", t), i = e._graphicsCmdEncoder = this._commandEncoder;
            return i.save(), j.syncBufferToRenderThread(i), e;
        }, t.ID = "Save";
    }(), function() {
        function t() {}
        return _(t, "laya.webgl.VertexArrayObject"), t;
    }()(function() {
        function e(e, r) {
            i[e] = !0, void 0 !== r && function(e) {
                t.console && t.console.error && t.console.error(e);
            }(r);
        }
        var i = {}, r = function t(e) {
            var i = e.gl;
            this.ext = e, this.isAlive = !0, this.hasBeenBound = !1, this.elementArrayBuffer = null, 
            this.attribs = new Array(e.maxVertexAttribs);
            for (var r = 0; r < this.attribs.length; r++) {
                var _ = new t.VertexAttrib(i);
                this.attribs[r] = _;
            }
            this.maxAttrib = 0;
        };
        (r.VertexAttrib = function(t) {
            this.enabled = !1, this.buffer = null, this.size = 4, this.type = t.FLOAT, this.normalized = !1, 
            this.stride = 16, this.offset = 0, this.cached = "", this.recache();
        }).prototype.recache = function() {
            this.cached = [ this.size, this.type, this.normalized, this.stride, this.offset ].join(":");
        };
        var _ = function(e) {
            var r = this;
            this.gl = e, function(t) {
                var e = t.getError;
                t.getError = function() {
                    do {
                        (r = e.apply(t)) != t.NO_ERROR && (i[r] = !0);
                    } while (r != t.NO_ERROR);
                    for (var r in i) if (i[r]) return delete i[r], parseInt(r);
                    return t.NO_ERROR;
                };
            }(e);
            var _ = this.original = {
                getParameter: e.getParameter,
                enableVertexAttribArray: e.enableVertexAttribArray,
                disableVertexAttribArray: e.disableVertexAttribArray,
                bindBuffer: e.bindBuffer,
                getVertexAttrib: e.getVertexAttrib,
                vertexAttribPointer: e.vertexAttribPointer
            };
            e.getParameter = function(t) {
                return t == r.VERTEX_ARRAY_BINDING_OES ? r.currentVertexArrayObject == r.defaultVertexArrayObject ? null : r.currentVertexArrayObject : _.getParameter.apply(this, arguments);
            }, e.enableVertexAttribArray = function(t) {
                var e = r.currentVertexArrayObject;
                e.maxAttrib = Math.max(e.maxAttrib, t);
                return e.attribs[t].enabled = !0, _.enableVertexAttribArray.apply(this, arguments);
            }, e.disableVertexAttribArray = function(t) {
                var e = r.currentVertexArrayObject;
                e.maxAttrib = Math.max(e.maxAttrib, t);
                return e.attribs[t].enabled = !1, _.disableVertexAttribArray.apply(this, arguments);
            }, e.bindBuffer = function(t, i) {
                switch (t) {
                  case e.ARRAY_BUFFER:
                    r.currentArrayBuffer = i;
                    break;

                  case e.ELEMENT_ARRAY_BUFFER:
                    r.currentVertexArrayObject.elementArrayBuffer = i;
                }
                return _.bindBuffer.apply(this, arguments);
            }, e.getVertexAttrib = function(t, i) {
                var a = r.currentVertexArrayObject.attribs[t];
                switch (i) {
                  case e.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING:
                    return a.buffer;

                  case e.VERTEX_ATTRIB_ARRAY_ENABLED:
                    return a.enabled;

                  case e.VERTEX_ATTRIB_ARRAY_SIZE:
                    return a.size;

                  case e.VERTEX_ATTRIB_ARRAY_STRIDE:
                    return a.stride;

                  case e.VERTEX_ATTRIB_ARRAY_TYPE:
                    return a.type;

                  case e.VERTEX_ATTRIB_ARRAY_NORMALIZED:
                    return a.normalized;

                  default:
                    return _.getVertexAttrib.apply(this, arguments);
                }
            }, e.vertexAttribPointer = function(t, e, i, a, n, s) {
                var o = r.currentVertexArrayObject;
                o.maxAttrib = Math.max(o.maxAttrib, t);
                var h = o.attribs[t];
                return h.buffer = r.currentArrayBuffer, h.size = e, h.type = i, h.normalized = a, 
                h.stride = n, h.offset = s, h.recache(), _.vertexAttribPointer.apply(this, arguments);
            }, e.instrumentExtension && e.instrumentExtension(this, "OES_vertex_array_object"), 
            e.canvas && e.canvas.addEventListener && e.canvas.addEventListener("webglcontextrestored", function() {
                !function(e) {
                    t.console && t.console.log && t.console.log(e);
                }("OESVertexArrayObject emulation library context restored"), r.reset_();
            }, !0), this.reset_();
        };
        _.prototype.VERTEX_ARRAY_BINDING_OES = 34229, _.prototype.reset_ = function() {
            if (void 0 !== this.vertexArrayObjects) for (var t = 0; t < this.vertexArrayObjects.length; ++t) this.vertexArrayObjects.isAlive = !1;
            var e = this.gl;
            this.maxVertexAttribs = e.getParameter(e.MAX_VERTEX_ATTRIBS), this.defaultVertexArrayObject = new r(this), 
            this.currentVertexArrayObject = null, this.currentArrayBuffer = null, this.vertexArrayObjects = [ this.defaultVertexArrayObject ], 
            this.bindVertexArrayOES(null);
        }, _.prototype.createVertexArrayOES = function() {
            var t = new r(this);
            return this.vertexArrayObjects.push(t), t;
        }, _.prototype.deleteVertexArrayOES = function(t) {
            t.isAlive = !1, this.vertexArrayObjects.splice(this.vertexArrayObjects.indexOf(t), 1), 
            this.currentVertexArrayObject == t && this.bindVertexArrayOES(null);
        }, _.prototype.isVertexArrayOES = function(t) {
            return !!(t && t instanceof r && t.hasBeenBound && t.ext == this);
        }, _.prototype.bindVertexArrayOES = function(t) {
            var i = this.gl;
            if (!t || t.isAlive) {
                var r = this.original, _ = this.currentVertexArrayObject;
                this.currentVertexArrayObject = t || this.defaultVertexArrayObject, this.currentVertexArrayObject.hasBeenBound = !0;
                var a = this.currentVertexArrayObject;
                if (_ != a) {
                    _ && a.elementArrayBuffer == _.elementArrayBuffer || r.bindBuffer.call(i, i.ELEMENT_ARRAY_BUFFER, a.elementArrayBuffer);
                    for (var n = this.currentArrayBuffer, s = Math.max(_ ? _.maxAttrib : 0, a.maxAttrib), o = 0; o <= s; o++) {
                        var h = a.attribs[o], l = _ ? _.attribs[o] : null;
                        if (_ && h.enabled == l.enabled || (h.enabled ? r.enableVertexAttribArray.call(i, o) : r.disableVertexAttribArray.call(i, o)), 
                        h.enabled) {
                            var u = !1;
                            _ && h.buffer == l.buffer || (n != h.buffer && (r.bindBuffer.call(i, i.ARRAY_BUFFER, h.buffer), 
                            n = h.buffer), u = !0), (u || h.cached != l.cached) && r.vertexAttribPointer.call(i, o, h.size, h.type, h.normalized, h.stride, h.offset);
                        }
                    }
                    this.currentArrayBuffer != n && r.bindBuffer.call(i, i.ARRAY_BUFFER, this.currentArrayBuffer);
                }
            } else e(i.INVALID_OPERATION, "bindVertexArrayOES: attempt to bind deleted arrayObject");
        }, t._setupVertexArrayObject = function(t) {
            var e = t.getSupportedExtensions;
            t.getSupportedExtensions = function() {
                var t = e.call(this) || [];
                return t.indexOf("OES_vertex_array_object") < 0 && t.push("OES_vertex_array_object"), 
                t;
            };
            var i = t.getExtension;
            t.getExtension = function(t) {
                var e = i.call(this, t);
                return e || ("OES_vertex_array_object" !== t ? null : (this.__OESVertexArrayObject || (console.log("Setup OES_vertex_array_object polyfill"), 
                this.__OESVertexArrayObject = new _(this)), this.__OESVertexArrayObject));
            };
        }, t._forceSetupVertexArrayObject = function(t) {
            var e = t.getSupportedExtensions;
            t.getSupportedExtensions = function() {
                var t = e.call(this) || [];
                return t.indexOf("OES_vertex_array_object") < 0 && t.push("OES_vertex_array_object"), 
                t;
            };
            var i = t.getExtension;
            t.getExtension = function(t) {
                if ("OES_vertex_array_object" === t) return this.__OESVertexArrayObject || (console.log("Setup OES_vertex_array_object polyfill"), 
                this.__OESVertexArrayObject = new _(this)), this.__OESVertexArrayObject;
                var e = i.call(this, t);
                return e || null;
            };
        };
    }()), function() {
        function t() {}
        _(t, "laya.webgl.text.ArabicReshaper");
        var e = t.prototype;
        e.characterMapContains = function(e) {
            for (var i = 0; i < t.charsMap.length; ++i) if (t.charsMap[i][0] === e) return !0;
            return !1;
        }, e.getCharRep = function(e) {
            for (var i = 0; i < t.charsMap.length; ++i) if (t.charsMap[i][0] === e) return t.charsMap[i];
            return !1;
        }, e.getCombCharRep = function(e, i) {
            for (var r = 0; r < t.combCharsMap.length; ++r) if (t.combCharsMap[r][0][0] === e && t.combCharsMap[r][0][1] === i) return t.combCharsMap[r];
            return !1;
        }, e.isTransparent = function(e) {
            for (var i = 0; i < t.transChars.length; ++i) if (t.transChars[i] === e) return !0;
            return !1;
        }, e.getOriginalCharsFromCode = function(e) {
            var i = 0;
            for (i = 0; i < t.charsMap.length; ++i) if (t.charsMap[i].indexOf(e) > -1) return String.fromCharCode(t.charsMap[i][0]);
            for (i = 0; i < t.combCharsMap.length; ++i) if (t.combCharsMap[i].indexOf(e) > -1) return String.fromCharCode(t.combCharsMap[i][0][0]) + String.fromCharCode(t.combCharsMap[i][0][1]);
            return String.fromCharCode(e);
        }, e.convertArabic = function(t) {
            for (var e, i, r = "", _ = 0; _ < t.length; ++_) {
                var a = t.charCodeAt(_);
                if (this.characterMapContains(a)) {
                    for (var n = null, s = null, o = _ - 1, h = _ + 1; o >= 0 && this.isTransparent(t.charCodeAt(o)); --o) ;
                    for ((!(e = !!(n = o >= 0 ? t.charCodeAt(o) : null) && this.getCharRep(n)) || null == e[2] && null == e[3]) && (n = null); h < t.length && this.isTransparent(t.charCodeAt(h)); ++h) ;
                    if (s = h < t.length ? t.charCodeAt(h) : null, (!(e = !!s && this.getCharRep(s)) || null == e[3] && null == e[4]) && (s = null), 
                    1604 === a && null != s && (1570 === s || 1571 === s || 1573 === s || 1575 === s)) {
                        i = this.getCombCharRep(a, s), r += null != n ? String.fromCharCode(i[4]) : String.fromCharCode(i[1]), 
                        ++_;
                        continue;
                    }
                    if (e = this.getCharRep(a), null != n && null != s && null != e[3]) {
                        r += String.fromCharCode(e[3]);
                        continue;
                    }
                    if (null != n && null != e[4]) {
                        r += String.fromCharCode(e[4]);
                        continue;
                    }
                    if (null != s && null != e[2]) {
                        r += String.fromCharCode(e[2]);
                        continue;
                    }
                    r += String.fromCharCode(e[1]);
                } else r += String.fromCharCode(a);
            }
            return r;
        }, e.convertArabicBack = function(t) {
            var e = "", i = 0, r = 0;
            for (r = 0; r < t.length; ++r) i = t.charCodeAt(r), e += this.getOriginalCharsFromCode(i);
            return e;
        }, r(t, [ "charsMap", function() {
            return this.charsMap = [ [ 1569, 65152, null, null, null ], [ 1570, 65153, null, null, 65154 ], [ 1571, 65155, null, null, 65156 ], [ 1572, 65157, null, null, 65158 ], [ 1573, 65159, null, null, 65160 ], [ 1574, 65161, 65163, 65164, 65162 ], [ 1575, 65165, null, null, 65166 ], [ 1576, 65167, 65169, 65170, 65168 ], [ 1577, 65171, null, null, 65172 ], [ 1578, 65173, 65175, 65176, 65174 ], [ 1579, 65177, 65179, 65180, 65178 ], [ 1580, 65181, 65183, 65184, 65182 ], [ 1581, 65185, 65187, 65188, 65186 ], [ 1582, 65189, 65191, 65192, 65190 ], [ 1583, 65193, null, null, 65194 ], [ 1584, 65195, null, null, 65196 ], [ 1585, 65197, null, null, 65198 ], [ 1586, 65199, null, null, 65200 ], [ 1587, 65201, 65203, 65204, 65202 ], [ 1588, 65205, 65207, 65208, 65206 ], [ 1589, 65209, 65211, 65212, 65210 ], [ 1590, 65213, 65215, 65216, 65214 ], [ 1591, 65217, 65219, 65220, 65218 ], [ 1592, 65221, 65223, 65224, 65222 ], [ 1593, 65225, 65227, 65228, 65226 ], [ 1594, 65229, 65231, 65232, 65230 ], [ 1600, 1600, 1600, 1600, 1600 ], [ 1601, 65233, 65235, 65236, 65234 ], [ 1602, 65237, 65239, 65240, 65238 ], [ 1603, 65241, 65243, 65244, 65242 ], [ 1604, 65245, 65247, 65248, 65246 ], [ 1605, 65249, 65251, 65252, 65250 ], [ 1606, 65253, 65255, 65256, 65254 ], [ 1607, 65257, 65259, 65260, 65258 ], [ 1608, 65261, null, null, 65262 ], [ 1609, 65263, null, null, 65264 ], [ 1610, 65265, 65267, 65268, 65266 ], [ 1662, 64342, 64344, 64345, 64343 ], [ 1740, 64508, 64510, 64511, 64509 ], [ 1670, 64378, 64380, 64381, 64379 ], [ 1705, 64398, 64400, 64401, 64399 ], [ 1711, 64402, 64404, 64405, 64403 ], [ 1688, 64394, null, null, 64395 ] ];
        }, "combCharsMap", function() {
            return this.combCharsMap = [ [ [ 1604, 1570 ], 65269, null, null, 65270 ], [ [ 1604, 1571 ], 65271, null, null, 65272 ], [ [ 1604, 1573 ], 65273, null, null, 65274 ], [ [ 1604, 1575 ], 65275, null, null, 65276 ] ];
        }, "transChars", function() {
            return this.transChars = [ 1552, 1554, 1555, 1556, 1557, 1611, 1612, 1613, 1614, 1615, 1616, 1617, 1618, 1619, 1620, 1621, 1622, 1623, 1624, 1648, 1750, 1751, 1752, 1753, 1754, 1755, 1756, 1759, 1760, 1761, 1762, 1763, 1764, 1767, 1768, 1770, 1771, 1772, 1773 ];
        } ]);
    }(), function() {
        function t() {
            this._graphicsCmdEncoder = null, this._index = 0, this._paramData = null, this._texture = null, 
            this._pos = null, this._rectNum = 0, this._vbSize = 0, this.vbBuffer = null;
        }
        _(t, "laya.layagl.cmdNative.DrawTexturesCmdNative");
        var e = t.prototype;
        e.recover = function() {
            this._texture = null, this._pos = null, C.recover("DrawTexturesCmd", this);
        }, a(0, e, "cmdID", function() {
            return "DrawTextures";
        }), a(0, e, "texture", function() {
            return this._texture;
        }, function(e) {
            this._texture = e;
            for (var i = this._texture.bitmap.width, r = this._texture.bitmap.height, _ = this._texture.uv, a = this.vbBuffer._float32Data, n = this.vbBuffer._int32Data, s = 0, o = 0; o < this._rectNum; o++) {
                var h = this.pos[2 * o], l = this.pos[2 * o + 1];
                a[s++] = h, a[s++] = l, a[s++] = _[0], a[s++] = _[1], n[s++] = 4294967295, n[s++] = 4294967295, 
                a[s++] = h + i, a[s++] = l, a[s++] = _[2], a[s++] = _[3], n[s++] = 4294967295, n[s++] = 4294967295, 
                a[s++] = h + i, a[s++] = l + r, a[s++] = _[4], a[s++] = _[5], n[s++] = 4294967295, 
                n[s++] = 4294967295, a[s++] = h, a[s++] = l + r, a[s++] = _[6], a[s++] = _[7], n[s++] = 4294967295, 
                n[s++] = 4294967295;
            }
            var u = this._paramData._int32Data;
            u[t._PARAM_TEXLOCATION_POS_] = 33984, u[t._PARAM_TEXTURE_POS_] = this._texture.bitmap._glTexture.id, 
            j.syncBufferToRenderThread(this.vbBuffer), j.syncBufferToRenderThread(this._paramData);
        }), a(0, e, "pos", function() {
            return this._pos;
        }, function(e) {
            this._pos = e;
            var i = this._pos.length / 2, r = this._texture.bitmap.width, _ = this._texture.bitmap.height, a = this._texture.uv;
            (!this.vbBuffer || this.vbBuffer.getByteLength() < 24 * i * 4) && (this.vbBuffer = new ParamData(24 * i * 4, !0)), 
            this._vbSize = 24 * i * 4, this._rectNum = i;
            for (var n = this.vbBuffer._float32Data, s = this.vbBuffer._int32Data, o = 0, h = 0; h < i; h++) {
                var l = this.pos[2 * h], u = this.pos[2 * h + 1];
                n[o++] = l, n[o++] = u, n[o++] = a[0], n[o++] = a[1], s[o++] = 4294967295, s[o++] = 4294967295, 
                n[o++] = l + r, n[o++] = u, n[o++] = a[2], n[o++] = a[3], s[o++] = 4294967295, s[o++] = 4294967295, 
                n[o++] = l + r, n[o++] = u + _, n[o++] = a[4], n[o++] = a[5], s[o++] = 4294967295, 
                s[o++] = 4294967295, n[o++] = l, n[o++] = u + _, n[o++] = a[6], n[o++] = a[7], s[o++] = 4294967295, 
                s[o++] = 4294967295;
            }
            this._paramData._float32Data;
            var c = this._paramData._int32Data;
            c[t._PARAM_RECT_NUM_POS_] = this._rectNum, c[t._PARAM_VB_POS_] = this.vbBuffer.getPtrID(), 
            c[t._PARAM_VB_SIZE_POS_] = this._vbSize, j.syncBufferToRenderThread(this.vbBuffer), 
            j.syncBufferToRenderThread(this._paramData);
        }), t.create = function(e, i) {
            var r = C.getItemByClass("DrawTexturesCmd", t);
            r._graphicsCmdEncoder = this._commandEncoder, t._DRAW_TEXTURES_CMD_ENCODER_ || ((t._DRAW_TEXTURES_CMD_ENCODER_ = j.instance.createCommandEncoder(124, 32, !0)).blendFuncByGlobalValue(Nt.GLOBALVALUE_BLENDFUNC_SRC, Nt.GLOBALVALUE_BLENDFUNC_DEST), 
            t._DRAW_TEXTURES_CMD_ENCODER_.useProgramEx(Nt.PROGRAMEX_DRAWTEXTURE), t._DRAW_TEXTURES_CMD_ENCODER_.useVDO(Nt.VDO_MESHQUADTEXTURE), 
            t._DRAW_TEXTURES_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_VIEWS, 0), t._DRAW_TEXTURES_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_DIR, 1), 
            t._DRAW_TEXTURES_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_POS, 2), t._DRAW_TEXTURES_CMD_ENCODER_.uniformTextureByParamData(t._PARAM_UNIFORMLOCATION_POS_, 4 * t._PARAM_TEXLOCATION_POS_, 4 * t._PARAM_TEXTURE_POS_), 
            t._DRAW_TEXTURES_CMD_ENCODER_.setRectMeshExByParamData(4 * t._PARAM_RECT_NUM_POS_, 4 * t._PARAM_VB_POS_, 4 * t._PARAM_VB_SIZE_POS_, 4 * t._PARAM_VB_OFFSET_POS_), 
            t._DRAW_TEXTURES_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_MATRIX32, 0, 7), t._DRAW_TEXTURES_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_DRAWTEXTURE_COLOR, 1, 15), 
            j.syncBufferToRenderThread(t._DRAW_TEXTURES_CMD_ENCODER_)), r._paramData || (r._paramData = new ParamData(28, !0)), 
            r._texture = e, r._pos = i;
            var _ = e.bitmap.width, a = e.bitmap.height, n = e.uv, s = i.length / 2;
            (!r.vbBuffer || r.vbBuffer.getByteLength() < 24 * s * 4) && (r.vbBuffer = new ParamData(24 * s * 4, !0)), 
            r._vbSize = 24 * s * 4, r._rectNum = s;
            for (var o = r.vbBuffer._float32Data, h = r.vbBuffer._int32Data, l = 0, u = 0; u < s; u++) {
                var c = i[2 * u], f = i[2 * u + 1];
                o[l++] = c, o[l++] = f, o[l++] = n[0], o[l++] = n[1], h[l++] = 4294967295, h[l++] = 4294967295, 
                o[l++] = c + _, o[l++] = f, o[l++] = n[2], o[l++] = n[3], h[l++] = 4294967295, h[l++] = 4294967295, 
                o[l++] = c + _, o[l++] = f + a, o[l++] = n[4], o[l++] = n[5], h[l++] = 4294967295, 
                h[l++] = 4294967295, o[l++] = c, o[l++] = f + a, o[l++] = n[6], o[l++] = n[7], h[l++] = 4294967295, 
                h[l++] = 4294967295;
            }
            r._paramData._float32Data;
            var d = r._paramData._int32Data;
            return d[t._PARAM_UNIFORMLOCATION_POS_] = 3, d[t._PARAM_TEXLOCATION_POS_] = 33984, 
            d[t._PARAM_TEXTURE_POS_] = e.bitmap._glTexture.id, d[t._PARAM_RECT_NUM_POS_] = r._rectNum, 
            d[t._PARAM_VB_POS_] = r.vbBuffer.getPtrID(), d[t._PARAM_VB_SIZE_POS_] = r._vbSize, 
            d[t._PARAM_VB_OFFSET_POS_] = 0, j.syncBufferToRenderThread(r.vbBuffer), j.syncBufferToRenderThread(r._paramData), 
            r._graphicsCmdEncoder.useCommandEncoder(t._DRAW_TEXTURES_CMD_ENCODER_.getPtrID(), r._paramData.getPtrID(), -1), 
            j.syncBufferToRenderThread(r._graphicsCmdEncoder), r;
        }, t.ID = "DrawTextures", t._DRAW_TEXTURES_CMD_ENCODER_ = null, t._PARAM_UNIFORMLOCATION_POS_ = 0, 
        t._PARAM_TEXLOCATION_POS_ = 1, t._PARAM_TEXTURE_POS_ = 2, t._PARAM_RECT_NUM_POS_ = 3, 
        t._PARAM_VB_POS_ = 4, t._PARAM_VB_SIZE_POS_ = 5, t._PARAM_VB_OFFSET_POS_ = 6;
    }(), function() {
        function t() {
            this._saveuse = 0;
        }
        _(t, "laya.webgl.canvas.save.SaveMark");
        var e = t.prototype;
        return i.imps(e, {
            "laya.webgl.canvas.save.ISaveData": !0
        }), e.isSaveMark = function() {
            return !0;
        }, e.restore = function(e) {
            e._saveMark = this._preSaveMark, t.POOL[t.POOL._length++] = this;
        }, t.Create = function(e) {
            var i = t.POOL, r = i._length > 0 ? i[--i._length] : new t();
            return r._saveuse = 0, r._preSaveMark = e._saveMark, e._saveMark = r, r;
        }, t.POOL = z._createArray(), t;
    }()), et = (function() {
        function t() {
            this._graphicsCmdEncoder = null, this._paramData = null, this._texture = null, this._x = NaN, 
            this._y = NaN, this._vertices = null, this._uvs = null, this._indices = null, this._matrix = null, 
            this._alpha = NaN, this._color = null, this._blendMode = null, this.vbBuffer = null, 
            this._vbSize = NaN, this.ibBuffer = null, this._ibSize = NaN, this._verticesNum = NaN, 
            this._ibNum = NaN, this._blend_src = 0, this._blend_dest = 0;
        }
        _(t, "laya.layagl.cmdNative.DrawTrianglesCmdNative");
        var e = t.prototype;
        e.recover = function() {
            this._texture = null, this._vertices = null, this._uvs = null, this._indices = null, 
            this._matrix = null, C.recover("DrawTrianglesCmd", this);
        }, e._setBlendMode = function(t) {
            switch (t) {
              case "normal":
                this._blend_src = 1, this._blend_dest = 771;
                break;

              case "add":
                this._blend_src = 1, this._blend_dest = 772;
                break;

              case "multiply":
                this._blend_src = 774, this._blend_dest = 771;
                break;

              case "screen":
              case "light":
                this._blend_src = 1, this._blend_dest = 1;
                break;

              case "overlay":
                this._blend_src = 1, this._blend_dest = 769;
                break;

              case "destination-out":
                this._blend_src = 0, this._blend_dest = 0;
                break;

              case "mask":
                this._blend_src = 0, this._blend_dest = 770;
                break;

              default:
                alert("_setBlendMode Unknown type");
            }
        }, e._mixRGBandAlpha = function(t, e) {
            var i = (4278190080 & t) >>> 24;
            return 0 != i ? i *= e : i = 255 * e, 16777215 & t | i << 24;
        }, a(0, e, "vertices", function() {
            return this._vertices;
        }, function(t) {
            this._vertices = t;
            for (var e = this.vbBuffer._float32Data, i = 0, r = 0; r < this._verticesNum; r++) e[i++] = this._x + t[2 * r], 
            e[i++] = this._y + t[2 * r + 1], i++, i++, i++, i++;
            j.syncBufferToRenderThread(this.vbBuffer);
        }), a(0, e, "cmdID", function() {
            return "DrawTriangles";
        }), a(0, e, "matrix", function() {
            return this._matrix;
        }, function(e) {
            this._matrix = e;
            var i = this._paramData._float32Data;
            i[t._PARAM_MATRIX_POS_] = e.a, i[t._PARAM_MATRIX_POS_ + 1] = e.b, i[t._PARAM_MATRIX_POS_ + 2] = e.c, 
            i[t._PARAM_MATRIX_POS_ + 3] = e.d, i[t._PARAM_MATRIX_POS_ + 4] = e.tx, i[t._PARAM_MATRIX_POS_ + 5] = e.ty, 
            j.syncBufferToRenderThread(this._paramData);
        }), a(0, e, "texture", function() {
            return this._texture;
        }, function(e) {
            if (e && e.url) {
                this._texture = e;
                this._paramData._int32Data[t._PARAM_TEXTURE_POS_] = this._texture.bitmap._glTexture.id, 
                j.syncBufferToRenderThread(this._paramData);
            }
        }), a(0, e, "y", function() {
            return this._y;
        }, function(t) {
            this._y = t;
            for (var e = this.vbBuffer._float32Data, i = 0, r = 0; r < this._verticesNum; r++) i++, 
            e[i++] = t + this.vertices[2 * r + 1], i++, i++, i++, i++;
            j.syncBufferToRenderThread(this.vbBuffer);
        }), a(0, e, "x", function() {
            return this._x;
        }, function(t) {
            this._x = t;
            for (var e = this.vbBuffer._float32Data, i = 0, r = 0; r < this._verticesNum; r++) e[i++] = t + this.vertices[2 * r], 
            i++, i++, i++, i++, i++;
            j.syncBufferToRenderThread(this.vbBuffer);
        }), a(0, e, "alpha", function() {
            return this._alpha;
        }, function(t) {
            this._alpha = t;
        }), a(0, e, "uvs", function() {
            return this._uvs;
        }, function(t) {
            this._uvs = t;
            for (var e = this.vbBuffer._float32Data, i = 0, r = 0; r < this._verticesNum; r++) i++, 
            i++, e[i++] = t[2 * r], e[i++] = t[2 * r + 1], i++, i++;
            j.syncBufferToRenderThread(this.vbBuffer);
        }), a(0, e, "indices", function() {
            return this._indices;
        }, function(t) {
            this._indices = t;
            for (var e = this.ibBuffer._int16Data, i = 0, r = 0; r < this._ibNum; r++) e[i++] = t[r];
            j.syncBufferToRenderThread(this.ibBuffer);
        }), a(0, e, "color", function() {
            return this._color;
        }, function(t) {
            this._color = t;
        }), a(0, e, "blendMode", function() {
            return this._blendMode;
        }, function(t) {
            this._blendMode = t;
        }), t.create = function(e, i, r, _, a, n, s, o, u, c) {
            var f = C.getItemByClass("DrawTrianglesCmd", t);
            f._graphicsCmdEncoder = this._commandEncoder, t._DRAW_TRIANGLES_CMD_ENCODER_ || ((t._DRAW_TRIANGLES_CMD_ENCODER_ = j.instance.createCommandEncoder(152, 32, !0)).save(), 
            t._DRAW_TRIANGLES_CMD_ENCODER_.blendFuncByGlobalValue(Nt.GLOBALVALUE_BLENDFUNC_SRC, Nt.GLOBALVALUE_BLENDFUNC_DEST), 
            t._DRAW_TRIANGLES_CMD_ENCODER_.blendFuncByParamData(4 * t._PARAM_BLEND_SRC_POS_, 4 * t._PARAM_BLEND_DEST_POS_), 
            t._DRAW_TRIANGLES_CMD_ENCODER_.useProgramEx(Nt.PROGRAMEX_DRAWTEXTURE), t._DRAW_TRIANGLES_CMD_ENCODER_.useVDO(Nt.VDO_MESHQUADTEXTURE), 
            t._DRAW_TRIANGLES_CMD_ENCODER_.setGlobalValueByParamData(Nt.GLOBALVALUE_MATRIX32, 7, 4 * t._PARAM_MATRIX_POS_), 
            t._DRAW_TRIANGLES_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_VIEWS, 0), t._DRAW_TRIANGLES_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_DIR, 1), 
            t._DRAW_TRIANGLES_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_POS, 2), t._DRAW_TRIANGLES_CMD_ENCODER_.uniformTextureByParamData(4 * t._PARAM_UNIFORMLOCATION_POS_, 4 * t._PARAM_TEXLOCATION_POS_, 4 * t._PARAM_TEXTURE_POS_), 
            t._DRAW_TRIANGLES_CMD_ENCODER_.setMeshExByParamData(4 * t._PARAM_VB_POS_, 4 * t._PARAM_VB_OFFSET_POS_, 4 * t._PARAM_VB_SIZE_POS_, 4 * t._PARAM_IB_POS_, 4 * t._PARAM_IB_OFFSET_POS_, 4 * t._PARAM_IB_SIZE_POS_, 4 * t._PARAM_INDEX_ELEMENT_OFFSET_POS_), 
            t._DRAW_TRIANGLES_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_MATRIX32, 0, 7), t._DRAW_TRIANGLES_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_DRAWTEXTURE_COLOR, 1, 15), 
            t._DRAW_TRIANGLES_CMD_ENCODER_.restore(), j.syncBufferToRenderThread(t._DRAW_TRIANGLES_CMD_ENCODER_)), 
            t._DRAW_TRIANGLES_COLORFILTER_CMD_ENCODER_ || ((t._DRAW_TRIANGLES_COLORFILTER_CMD_ENCODER_ = j.instance.createCommandEncoder(152, 32, !0)).save(), 
            t._DRAW_TRIANGLES_COLORFILTER_CMD_ENCODER_.blendFuncByGlobalValue(Nt.GLOBALVALUE_BLENDFUNC_SRC, Nt.GLOBALVALUE_BLENDFUNC_DEST), 
            t._DRAW_TRIANGLES_COLORFILTER_CMD_ENCODER_.blendFuncByParamData(4 * t._PARAM_BLEND_SRC_POS_, 4 * t._PARAM_BLEND_DEST_POS_), 
            t._DRAW_TRIANGLES_COLORFILTER_CMD_ENCODER_.addShaderMacro(Nt.SHADER_MACRO_COLOR_FILTER), 
            t._DRAW_TRIANGLES_COLORFILTER_CMD_ENCODER_.setGlobalValueByParamData(Nt.GLOBALVALUE_COLORFILTER_COLOR, 8, 4 * t._PARAM_FILTER_COLOR_POS_), 
            t._DRAW_TRIANGLES_COLORFILTER_CMD_ENCODER_.setGlobalValueByParamData(Nt.GLOBALVALUE_COLORFILTER_ALPHA, 8, 4 * t._PARAM_FILTER_ALPHA_POS_), 
            t._DRAW_TRIANGLES_COLORFILTER_CMD_ENCODER_.useProgramEx(Nt.PROGRAMEX_DRAWTEXTURE), 
            t._DRAW_TRIANGLES_COLORFILTER_CMD_ENCODER_.useVDO(Nt.VDO_MESHQUADTEXTURE), t._DRAW_TRIANGLES_COLORFILTER_CMD_ENCODER_.setGlobalValueByParamData(Nt.GLOBALVALUE_MATRIX32, 7, 4 * t._PARAM_MATRIX_POS_), 
            t._DRAW_TRIANGLES_COLORFILTER_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_VIEWS, 0), t._DRAW_TRIANGLES_COLORFILTER_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_DIR, 1), 
            t._DRAW_TRIANGLES_COLORFILTER_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_POS, 2), 
            t._DRAW_TRIANGLES_COLORFILTER_CMD_ENCODER_.uniformTextureByParamData(4 * t._PARAM_UNIFORMLOCATION_POS_, 4 * t._PARAM_TEXLOCATION_POS_, 4 * t._PARAM_TEXTURE_POS_), 
            t._DRAW_TRIANGLES_COLORFILTER_CMD_ENCODER_.setMeshExByParamData(4 * t._PARAM_VB_POS_, 4 * t._PARAM_VB_OFFSET_POS_, 4 * t._PARAM_VB_SIZE_POS_, 4 * t._PARAM_IB_POS_, 4 * t._PARAM_IB_OFFSET_POS_, 4 * t._PARAM_IB_SIZE_POS_, 4 * t._PARAM_INDEX_ELEMENT_OFFSET_POS_), 
            t._DRAW_TRIANGLES_COLORFILTER_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_MATRIX32, 0, 7), 
            t._DRAW_TRIANGLES_COLORFILTER_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_DRAWTEXTURE_COLOR, 1, 15), 
            t._DRAW_TRIANGLES_COLORFILTER_CMD_ENCODER_.restore(), j.syncBufferToRenderThread(t._DRAW_TRIANGLES_COLORFILTER_CMD_ENCODER_)), 
            f._paramData || (f._paramData = new ParamData(152, !0)), f._texture = e, f._x = i, 
            f._y = r, f._vertices = _, f._uvs = a, f._indices = n, f._matrix = s || new v(), 
            f._alpha = o, f._color = u, f._blendMode = c;
            var d = new h(), A = l.create(u);
            d.color(A.arrColor[0], A.arrColor[1], A.arrColor[2], A.arrColor[3]), f._verticesNum = f._vertices.length / 2;
            var E = f._verticesNum;
            (!f.vbBuffer || f.vbBuffer.getByteLength() < 24 * E * 3) && (f.vbBuffer = new ParamData(24 * E * 3, !0)), 
            f._vbSize = 24 * E * 3;
            var m = f.vbBuffer._float32Data, R = f.vbBuffer._int32Data, p = 4294967295;
            o && (p = f._mixRGBandAlpha(p, o));
            for (var T = 0, D = 0; D < f._verticesNum; D++) m[T++] = i / f._matrix.a + _[2 * D], 
            m[T++] = r / f._matrix.d + _[2 * D + 1], m[T++] = a[2 * D], m[T++] = a[2 * D + 1], 
            R[T++] = p, R[T++] = 4294967295;
            f._ibNum = n.length;
            var P = f._ibNum;
            (!f.ibBuffer || f.ibBuffer.getByteLength() < 2 * P) && (f.ibBuffer = new ParamData(2 * P, !0, !0)), 
            f._ibSize = 2 * P;
            for (var g = f.ibBuffer._int16Data, M = 0, y = 0; y < f._ibNum; y++) g[M++] = n[y];
            var O = f._paramData._float32Data, S = f._paramData._int32Data;
            if (S[t._PARAM_UNIFORMLOCATION_POS_] = 3, S[t._PARAM_TEXLOCATION_POS_] = 33984, 
            S[t._PARAM_TEXTURE_POS_] = e.bitmap._glTexture.id, S[t._PARAM_VB_POS_] = f.vbBuffer.getPtrID(), 
            S[t._PARAM_VB_SIZE_POS_] = f._vbSize, S[t._PARAM_IB_POS_] = f.ibBuffer.getPtrID(), 
            S[t._PARAM_IB_SIZE_POS_] = f._ibSize, S[t._PARAM_VB_OFFSET_POS_] = 0, S[t._PARAM_IB_OFFSET_POS_] = 0, 
            S[t._PARAM_INDEX_ELEMENT_OFFSET_POS_] = 0, O[t._PARAM_MATRIX_POS_] = f._matrix.a, 
            O[t._PARAM_MATRIX_POS_ + 1] = f._matrix.b, O[t._PARAM_MATRIX_POS_ + 2] = f._matrix.c, 
            O[t._PARAM_MATRIX_POS_ + 3] = f._matrix.d, O[t._PARAM_MATRIX_POS_ + 4] = f._matrix.tx, 
            O[t._PARAM_MATRIX_POS_ + 5] = f._matrix.ty, c ? (f._setBlendMode(c), S[t._PARAM_BLEND_SRC_POS_] = f._blend_src, 
            S[t._PARAM_BLEND_DEST_POS_] = f._blend_dest) : (S[t._PARAM_BLEND_SRC_POS_] = -1, 
            S[t._PARAM_BLEND_DEST_POS_] = -1), u) {
                T = t._PARAM_FILTER_COLOR_POS_;
                var b = d._mat;
                O[T++] = b[0], O[T++] = b[1], O[T++] = b[2], O[T++] = b[3], O[T++] = b[4], O[T++] = b[5], 
                O[T++] = b[6], O[T++] = b[7], O[T++] = b[8], O[T++] = b[9], O[T++] = b[10], O[T++] = b[11], 
                O[T++] = b[12], O[T++] = b[13], O[T++] = b[14], O[T++] = b[15], T = t._PARAM_FILTER_ALPHA_POS_;
                var L = d._alpha;
                O[T++] = 255 * L[0], O[T++] = 255 * L[1], O[T++] = 255 * L[2], O[T++] = 255 * L[3];
            }
            return j.syncBufferToRenderThread(f.vbBuffer), j.syncBufferToRenderThread(f.ibBuffer), 
            j.syncBufferToRenderThread(f._paramData), u ? f._graphicsCmdEncoder.useCommandEncoder(t._DRAW_TRIANGLES_COLORFILTER_CMD_ENCODER_.getPtrID(), f._paramData.getPtrID(), -1) : f._graphicsCmdEncoder.useCommandEncoder(t._DRAW_TRIANGLES_CMD_ENCODER_.getPtrID(), f._paramData.getPtrID(), -1), 
            j.syncBufferToRenderThread(f._graphicsCmdEncoder), f;
        }, t.ID = "DrawTriangles", t._DRAW_TRIANGLES_CMD_ENCODER_ = null, t._DRAW_TRIANGLES_COLORFILTER_CMD_ENCODER_ = null, 
        t._PARAM_UNIFORMLOCATION_POS_ = 0, t._PARAM_TEXLOCATION_POS_ = 1, t._PARAM_TEXTURE_POS_ = 2, 
        t._PARAM_VB_POS_ = 3, t._PARAM_VB_SIZE_POS_ = 4, t._PARAM_IB_POS_ = 5, t._PARAM_IB_SIZE_POS_ = 6, 
        t._PARAM_VB_OFFSET_POS_ = 7, t._PARAM_IB_OFFSET_POS_ = 8, t._PARAM_INDEX_ELEMENT_OFFSET_POS_ = 9, 
        t._PARAM_BLEND_SRC_POS_ = 10, t._PARAM_BLEND_DEST_POS_ = 11, t._PARAM_MATRIX_POS_ = 12, 
        t._PARAM_FILTER_COLOR_POS_ = 18, t._PARAM_FILTER_ALPHA_POS_ = 34;
    }(), function() {
        function t(t, e, i) {
            this._value = 0, this._name2int = t, this._int2name = e, this._int2nameMap = i;
        }
        _(t, "laya.webgl.shader.ShaderDefinesBase");
        var e = t.prototype;
        return e.add = function(t) {
            return "string" == typeof t && (t = this._name2int[t]), this._value |= t, this._value;
        }, e.addInt = function(t) {
            return this._value |= t, this._value;
        }, e.remove = function(t) {
            return "string" == typeof t && (t = this._name2int[t]), this._value &= ~t, this._value;
        }, e.isDefine = function(t) {
            return (this._value & t) === t;
        }, e.getValue = function() {
            return this._value;
        }, e.setValue = function(t) {
            this._value = t;
        }, e.toNameDic = function() {
            var e = this._int2nameMap[this._value];
            return e || t._toText(this._value, this._int2name, this._int2nameMap);
        }, t._reg = function(t, e, i, r) {
            i[t] = e, r[e] = t;
        }, t._toText = function(t, e, i) {
            var r = i[t];
            if (r) return r;
            for (var _ = {}, a = 1, n = 0; n < 32 && !((a = 1 << n) > t); n++) if (t & a) {
                var s = e[a];
                s && (_[s] = "");
            }
            return i[t] = _, _;
        }, t._toInt = function(t, e) {
            for (var i = t.split("."), r = 0, _ = 0, a = i.length; _ < a; _++) {
                var n = e[i[_]];
                if (!n) throw new Error("Defines to int err:" + t + "/" + i[_]);
                r |= n;
            }
            return r;
        }, t;
    }()), it = function() {
        function t(t) {
            this.childs = [], this.text = "", this.parent = null, this.name = null, this.noCompile = !1, 
            this.includefiles = null, this.condition = null, this.conditionType = 0, this.useFuns = "", 
            this.z = 0, this.src = null, this.includefiles = t;
        }
        _(t, "laya.webgl.utils.ShaderNode");
        var e = t.prototype;
        return e.setParent = function(t) {
            t.childs.push(this), this.z = t.z + 1, this.parent = t;
        }, e.setCondition = function(t, e) {
            t && (this.conditionType = e, t = t.replace(/(\s*$)/g, ""), this.condition = function() {
                return this[t];
            }, this.condition.__condition = t);
        }, e.toscript = function(e, i) {
            return this._toscript(e, i, ++t.__id);
        }, e._toscript = function(t, e, i) {
            if (this.childs.length < 1 && !this.text) return e;
            e.length;
            if (this.condition) {
                var r = !!this.condition.call(t);
                if (2 === this.conditionType && (r = !r), !r) return e;
            }
            if (this.text && e.push(this.text), this.childs.length > 0 && this.childs.forEach(function(r, _, a) {
                r._toscript(t, e, i);
            }), this.includefiles.length > 0 && this.useFuns.length > 0) for (var _, a = 0, n = this.includefiles.length; a < n; a++) this.includefiles[a].curUseID != i && (_ = this.includefiles[a].file.getFunsScript(this.useFuns)).length > 0 && (this.includefiles[a].curUseID = i, 
            e[0] = _ + e[0]);
            return e;
        }, t.__id = 1, t;
    }(), rt = (function() {
        function t() {
            this._graphicsCmdEncoder = null, this._graphicsCmdEncoder_lines = null, this._paramData = null, 
            this._x = NaN, this._y = NaN, this._points = null, this._fillColor = null, this._lineColor = null, 
            this._lineWidth = NaN, this._isConvexPolygon = !1, this._vid = 0, this._vertNum = 0, 
            this._line_vertNum = 0, this.ibBuffer = null, this.vbBuffer = null, this.line_ibBuffer = null, 
            this.line_vbBuffer = null, this._ibSize = 0, this._vbSize = 0, this._line_ibSize = 0, 
            this._line_vbSize = 0, this._cmdCurrentPos = 0, this._linePoints = [], this._line_vbArray = [], 
            this._line_ibArray = [];
        }
        _(t, "laya.layagl.cmdNative.DrawPolyCmdNative");
        var e = t.prototype;
        e.recover = function() {
            this._points = null, this._fillColor = null, this._lineColor = null, this._linePoints.length = 0, 
            this._line_vbArray.length = 0, this._line_ibArray.length = 0, C.recover("DrawPolyCmd", this);
        }, a(0, e, "lineColor", function() {
            return this._lineColor;
        }, function(e) {
            if (this._graphicsCmdEncoder._idata[this._cmdCurrentPos + 1] = t._DRAW_POLY_LINES_CMD_ENCODER_.getPtrID(), 
            j.syncBufferToRenderThread(this._graphicsCmdEncoder), this._lineColor = e, this._lineColor && this.line_vbBuffer) {
                for (var i = l.create(this._lineColor).numColor, r = this.line_vbBuffer._int32Data, _ = 0, a = 0; a < this._line_vertNum; a++) _++, 
                _++, r[_++] = i;
                j.syncBufferToRenderThread(this.line_vbBuffer);
            }
        }), a(0, e, "points", function() {
            return this._points;
        }, function(e) {
            this._points = e, this._vertNum = e.length / 2;
            var i = this._vertNum, r = dt.earcut(e, null, 2);
            if (r.length > 0) {
                (!this.ibBuffer || this.ibBuffer.getByteLength() < 2 * r.length) && (this.ibBuffer = new ParamData(2 * r.length, !0, !0)), 
                this._ibSize = 2 * r.length;
                for (var _ = this.ibBuffer._int16Data, a = 0, n = 0; n < r.length; n++) _[a++] = r[n];
            }
            (!this.vbBuffer || this.vbBuffer.getByteLength() < 3 * this._vertNum * 4) && (this.vbBuffer = new ParamData(3 * i * 4, !0)), 
            this._vbSize = 3 * this._vertNum * 4;
            for (var s = l.create(this._fillColor).numColor, o = this.vbBuffer._float32Data, h = this.vbBuffer._int32Data, u = 0, c = 0; c < this._vertNum; c++) o[u++] = this._points[2 * c] + this._x, 
            o[u++] = this._points[2 * c + 1] + this._y, h[u++] = s;
            var f = this._paramData._int32Data;
            if (f[t._PARAM_VB_POS_] = this.vbBuffer.getPtrID(), f[t._PARAM_IB_POS_] = this.ibBuffer.getPtrID(), 
            f[t._PARAM_VB_SIZE_POS_] = this._vbSize, f[t._PARAM_IB_SIZE_POS_] = this._ibSize, 
            j.syncBufferToRenderThread(this.vbBuffer), j.syncBufferToRenderThread(this.ibBuffer), 
            j.syncBufferToRenderThread(this._paramData), this.lineColor) {
                var d = 0;
                for (this._linePoints.length = 0, this._line_ibArray.length = 0, this._line_vbArray.length = 0, 
                c = 0; c < e.length; c++) this._linePoints.push(e[c]);
                this._linePoints.push(e[0]), this._linePoints.push(e[1]), yt.createLine2(this._linePoints, this._line_ibArray, this._lineWidth, 0, this._line_vbArray, !1), 
                this._line_vertNum = this._linePoints.length, d = this._line_vertNum, (!this.line_ibBuffer || this.line_ibBuffer.getByteLength() < 3 * (this._line_vertNum - 2) * 2) && (this.line_ibBuffer = new ParamData(3 * (d - 2) * 2, !0, !0)), 
                this._line_ibSize = 3 * (this._line_vertNum - 2) * 2;
                var A = this.line_ibBuffer._int16Data;
                for (a = 0, n = 0; n < 3 * (this._line_vertNum - 2); n++) A[a++] = this._line_ibArray[n];
                (!this.line_vbBuffer || this.line_vbBuffer.getByteLength() < 3 * this._line_vertNum * 4) && (this.line_vbBuffer = new ParamData(3 * d * 4, !0)), 
                this._line_vbSize = 3 * this._line_vertNum * 4;
                var E = l.create(this._lineColor).numColor, m = this.line_vbBuffer._float32Data, R = this.line_vbBuffer._int32Data;
                for (u = 0, c = 0; c < this._line_vertNum; c++) m[u++] = this._line_vbArray[2 * c] + this._x, 
                m[u++] = this._line_vbArray[2 * c + 1] + this._y, R[u++] = E;
                (f = this._paramData._int32Data)[t._PARAM_LINE_VB_POS_] = this.line_vbBuffer.getPtrID(), 
                f[t._PARAM_LINE_IB_POS_] = this.line_ibBuffer.getPtrID(), f[t._PARAM_LINE_VB_SIZE_POS_] = this._line_vbSize, 
                f[t._PARAM_LINE_IB_SIZE_POS_] = this._line_ibSize, j.syncBufferToRenderThread(this.line_vbBuffer), 
                j.syncBufferToRenderThread(this.line_ibBuffer);
            }
        }), a(0, e, "cmdID", function() {
            return "DrawPoly";
        }), a(0, e, "fillColor", function() {
            return this._fillColor;
        }, function(t) {
            this._fillColor = t;
            for (var e = l.create(this._fillColor).numColor, i = this.vbBuffer._int32Data, r = 0, _ = 0; _ < this._vertNum; _++) r++, 
            r++, i[r++] = e;
            j.syncBufferToRenderThread(this.vbBuffer);
        }), a(0, e, "x", function() {
            return this._x;
        }, function(t) {
            this._x = t;
            for (var e = this.vbBuffer._float32Data, i = 0, r = 0; r < this._vertNum; r++) e[i++] = this._points[2 * r] + this._x, 
            i++, i++;
            if (this._lineColor) {
                var _ = this.line_vbBuffer._float32Data;
                for (i = 0, r = 0; r < this._line_vertNum; r++) _[i++] = this._line_vbArray[2 * r] + this._x, 
                i++, i++;
                j.syncBufferToRenderThread(this.line_vbBuffer);
            }
            j.syncBufferToRenderThread(this.vbBuffer);
        }), a(0, e, "isConvexPolygon", function() {
            return this._isConvexPolygon;
        }, function(t) {
            this._isConvexPolygon = t;
        }), a(0, e, "vid", function() {
            return this._vid;
        }, function(t) {
            this._vid = t;
        }), a(0, e, "y", function() {
            return this._y;
        }, function(t) {
            this._y = t;
            for (var e = this.vbBuffer._float32Data, i = 0, r = 0; r < this._vertNum; r++) i++, 
            e[i++] = this._points[2 * r + 1] + this._y, i++;
            if (this._lineColor) {
                var _ = this.line_vbBuffer._float32Data;
                for (i = 0, r = 0; r < this._line_vertNum; r++) i++, _[i++] = this._line_vbArray[2 * r + 1] + this._y, 
                i++;
                j.syncBufferToRenderThread(this.line_vbBuffer);
            }
            j.syncBufferToRenderThread(this.vbBuffer);
        }), a(0, e, "lineWidth", function() {
            return this._lineWidth;
        }, function(e) {
            this.lineColor && (this._graphicsCmdEncoder._idata[this._cmdCurrentPos + 1] = t._DRAW_POLY_LINES_CMD_ENCODER_.getPtrID(), 
            j.syncBufferToRenderThread(this._graphicsCmdEncoder)), this._lineWidth = e, this._linePoints.length = 0, 
            this._line_ibArray.length = 0, this._line_vbArray.length = 0;
            for (var i = 0; i < this._points.length; i++) this._linePoints.push(this._points[i]);
            this._linePoints.push(this._points[0]), this._linePoints.push(this._points[1]), 
            yt.createLine2(this._linePoints, this._line_ibArray, this._lineWidth, 0, this._line_vbArray, !1);
            var r = this.line_vbBuffer._float32Data, _ = 0;
            for (i = 0; i < this._line_vertNum; i++) r[_++] = this._line_vbArray[2 * i] + this._x, 
            r[_++] = this._line_vbArray[2 * i + 1] + this._y, _++;
            j.syncBufferToRenderThread(this.line_vbBuffer);
        }), t.create = function(e, i, r, _, a, n, s, o) {
            var h = C.getItemByClass("DrawPolyCmd", t);
            h._graphicsCmdEncoder = this._commandEncoder, t._DRAW_POLY_CMD_ENCODER_ || ((t._DRAW_POLY_CMD_ENCODER_ = j.instance.createCommandEncoder(168, 32, !0)).blendFuncByGlobalValue(Nt.GLOBALVALUE_BLENDFUNC_SRC, Nt.GLOBALVALUE_BLENDFUNC_DEST), 
            t._DRAW_POLY_CMD_ENCODER_.useProgramEx(Nt.PROGRAMEX_DRAWVG), t._DRAW_POLY_CMD_ENCODER_.useVDO(Nt.VDO_MESHVG), 
            t._DRAW_POLY_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_VIEWS, 0), t._DRAW_POLY_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_DIR, 1), 
            t._DRAW_POLY_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_POS, 2), t._DRAW_POLY_CMD_ENCODER_.setMeshExByParamData(4 * t._PARAM_VB_POS_, 4 * t._PARAM_VB_OFFSET_POS_, 4 * t._PARAM_VB_SIZE_POS_, 4 * t._PARAM_IB_POS_, 4 * t._PARAM_IB_OFFSET_POS_, 4 * t._PARAM_IB_SIZE_POS_, 4 * t._PARAM_INDEX_ELEMENT_OFFSET_POS_), 
            t._DRAW_POLY_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_MATRIX32, 0, 7), t._DRAW_POLY_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_DRAWTEXTURE_COLOR, 1, 15), 
            j.syncBufferToRenderThread(t._DRAW_POLY_CMD_ENCODER_)), t._DRAW_POLY_LINES_CMD_ENCODER_ || ((t._DRAW_POLY_LINES_CMD_ENCODER_ = j.instance.createCommandEncoder(244, 32, !0)).blendFuncByGlobalValue(Nt.GLOBALVALUE_BLENDFUNC_SRC, Nt.GLOBALVALUE_BLENDFUNC_DEST), 
            t._DRAW_POLY_LINES_CMD_ENCODER_.useProgramEx(Nt.PROGRAMEX_DRAWVG), t._DRAW_POLY_LINES_CMD_ENCODER_.useVDO(Nt.VDO_MESHVG), 
            t._DRAW_POLY_LINES_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_VIEWS, 0), t._DRAW_POLY_LINES_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_DIR, 1), 
            t._DRAW_POLY_LINES_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_POS, 2), t._DRAW_POLY_LINES_CMD_ENCODER_.setMeshExByParamData(4 * t._PARAM_VB_POS_, 4 * t._PARAM_VB_OFFSET_POS_, 4 * t._PARAM_VB_SIZE_POS_, 4 * t._PARAM_IB_POS_, 4 * t._PARAM_IB_OFFSET_POS_, 4 * t._PARAM_IB_SIZE_POS_, 4 * t._PARAM_INDEX_ELEMENT_OFFSET_POS_), 
            t._DRAW_POLY_LINES_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_MATRIX32, 0, 7), t._DRAW_POLY_LINES_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_DRAWTEXTURE_COLOR, 1, 15), 
            t._DRAW_POLY_LINES_CMD_ENCODER_.setMeshExByParamData(4 * t._PARAM_LINE_VB_POS_, 4 * t._PARAM_LINE_VB_OFFSET_POS_, 4 * t._PARAM_LINE_VB_SIZE_POS_, 4 * t._PARAM_LINE_IB_POS_, 4 * t._PARAM_LINE_VB_OFFSET_POS_, 4 * t._PARAM_LINE_IB_SIZE_POS_, 4 * t._PARAM_LINE_INDEX_ELEMENT_OFFSET_POS_), 
            t._DRAW_POLY_LINES_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_MATRIX32, 0, 7), t._DRAW_POLY_LINES_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_DRAWTEXTURE_COLOR, 1, 15), 
            j.syncBufferToRenderThread(t._DRAW_POLY_LINES_CMD_ENCODER_)), h._paramData || (h._paramData = new ParamData(68, !0)), 
            h._x = e, h._y = i, h._points = r, h._fillColor = _, h._lineColor = a, h._lineWidth = n, 
            h._isConvexPolygon = s, h._vertNum = r.length / 2;
            var u = h._vertNum, c = dt.earcut(r, null, 2);
            if (c.length > 0) {
                (!h.ibBuffer || h.ibBuffer.getByteLength() < 2 * c.length) && (h.ibBuffer = new ParamData(2 * c.length, !0, !0)), 
                h._ibSize = 2 * c.length;
                for (var f = h.ibBuffer._int16Data, d = 0, A = 0; A < c.length; A++) f[d++] = c[A];
            }
            var E = l.create(_).numColor;
            (!h.vbBuffer || h.vbBuffer.getByteLength() < 3 * h._vertNum * 4) && (h.vbBuffer = new ParamData(3 * u * 4, !0)), 
            h._vbSize = 3 * h._vertNum * 4;
            for (var m = h.vbBuffer._float32Data, R = h.vbBuffer._int32Data, p = 0, T = 0; T < h._vertNum; T++) m[p++] = r[2 * T] + e, 
            m[p++] = r[2 * T + 1] + i, R[p++] = E;
            for (T = 0; T < r.length; T++) h._linePoints.push(r[T]);
            if (h._linePoints.push(r[0]), h._linePoints.push(r[1]), a) {
                yt.createLine2(h._linePoints, h._line_ibArray, n, 0, h._line_vbArray, !1), h._line_vertNum = h._linePoints.length;
                var v = h._line_vertNum;
                (!h.line_ibBuffer || h.line_ibBuffer.getByteLength() < 3 * (h._line_vertNum - 2) * 2) && (h.line_ibBuffer = new ParamData(3 * (v - 2) * 2, !0, !0)), 
                h._line_ibSize = 3 * (h._line_vertNum - 2) * 2;
                var D = h.line_ibBuffer._int16Data;
                for (d = 0, A = 0; A < 3 * (h._line_vertNum - 2); A++) D[d++] = h._line_ibArray[A];
                (!h.line_vbBuffer || h.line_vbBuffer.getByteLength() < 3 * h._line_vertNum * 4) && (h.line_vbBuffer = new ParamData(3 * v * 4, !0)), 
                h._line_vbSize = 3 * h._line_vertNum * 4;
                var P = l.create(a), g = P.numColor, M = h.line_vbBuffer._float32Data, y = h.line_vbBuffer._int32Data;
                for (p = 0, T = 0; T < h._line_vertNum; T++) M[p++] = h._line_vbArray[2 * T] + e, 
                M[p++] = h._line_vbArray[2 * T + 1] + i, y[p++] = g;
            } else {
                h._lineWidth = 1;
                for (yt.createLine2(h._linePoints, h._line_ibArray, h._lineWidth, 0, h._line_vbArray, !1), 
                h._line_vertNum = h._linePoints.length, v = h._line_vertNum, (!h.line_ibBuffer || h.line_ibBuffer.getByteLength() < 3 * (h._line_vertNum - 2) * 2) && (h.line_ibBuffer = new ParamData(3 * (v - 2) * 2, !0, !0)), 
                h._line_ibSize = 3 * (h._line_vertNum - 2) * 2, D = h.line_ibBuffer._int16Data, 
                d = 0, A = 0; A < 3 * (h._line_vertNum - 2); A++) D[d++] = h._line_ibArray[A];
                for ((!h.line_vbBuffer || h.line_vbBuffer.getByteLength() < 3 * h._line_vertNum * 4) && (h.line_vbBuffer = new ParamData(3 * v * 4, !0)), 
                h._line_vbSize = 3 * h._line_vertNum * 4, g = (P = l.create("#ffffff")).numColor, 
                M = h.line_vbBuffer._float32Data, y = h.line_vbBuffer._int32Data, p = 0, T = 0; T < h._line_vertNum; T++) M[p++] = h._line_vbArray[2 * T] + e, 
                M[p++] = h._line_vbArray[2 * T + 1] + i, y[p++] = g;
            }
            var O = h._paramData._float32Data, S = h._paramData._int32Data;
            return S[0] = 1, S[1] = 32, null == h.ibBuffer ? null : (S[t._PARAM_VB_POS_] = h.vbBuffer.getPtrID(), 
            S[t._PARAM_IB_POS_] = h.ibBuffer.getPtrID(), S[t._PARAM_VB_SIZE_POS_] = h._vbSize, 
            S[t._PARAM_IB_SIZE_POS_] = h._ibSize, S[t._PARAM_VB_OFFSET_POS_] = 0, S[t._PARAM_IB_OFFSET_POS_] = 0, 
            S[t._PARAM_INDEX_ELEMENT_OFFSET_POS_] = 0, O[t._PARAM_ISCONVEXT_POS_] = s, j.syncBufferToRenderThread(h.vbBuffer), 
            j.syncBufferToRenderThread(h.ibBuffer), S[t._PARAM_LINE_VB_POS_] = h.line_vbBuffer.getPtrID(), 
            S[t._PARAM_LINE_IB_POS_] = h.line_ibBuffer.getPtrID(), S[t._PARAM_LINE_VB_SIZE_POS_] = h._line_vbSize, 
            S[t._PARAM_LINE_IB_SIZE_POS_] = h._line_ibSize, S[t._PARAM_LINE_VB_OFFSET_POS_] = 0, 
            S[t._PARAM_LINE_IB_OFFSET_POS_] = 0, S[t._PARAM_LINE_INDEX_ELEMENT_OFFSET_POS_] = 0, 
            j.syncBufferToRenderThread(h.line_vbBuffer), j.syncBufferToRenderThread(h.line_ibBuffer), 
            j.syncBufferToRenderThread(h._paramData), h._cmdCurrentPos = a ? h._graphicsCmdEncoder.useCommandEncoder(t._DRAW_POLY_LINES_CMD_ENCODER_.getPtrID(), h._paramData.getPtrID(), -1) : h._graphicsCmdEncoder.useCommandEncoder(t._DRAW_POLY_CMD_ENCODER_.getPtrID(), h._paramData.getPtrID(), -1), 
            j.syncBufferToRenderThread(h._graphicsCmdEncoder), h);
        }, t.ID = "DrawPoly", t._DRAW_POLY_CMD_ENCODER_ = null, t._DRAW_POLY_LINES_CMD_ENCODER_ = null, 
        t._PARAM_VB_POS_ = 2, t._PARAM_IB_POS_ = 3, t._PARAM_VB_SIZE_POS_ = 4, t._PARAM_IB_SIZE_POS_ = 5, 
        t._PARAM_LINE_VB_POS_ = 6, t._PARAM_LINE_IB_POS_ = 7, t._PARAM_LINE_VB_SIZE_POS_ = 8, 
        t._PARAM_LINE_IB_SIZE_POS_ = 9, t._PARAM_ISCONVEXT_POS_ = 10, t._PARAM_VB_OFFSET_POS_ = 11, 
        t._PARAM_IB_OFFSET_POS_ = 12, t._PARAM_LINE_VB_OFFSET_POS_ = 13, t._PARAM_LINE_IB_OFFSET_POS_ = 14, 
        t._PARAM_INDEX_ELEMENT_OFFSET_POS_ = 15, t._PARAM_LINE_INDEX_ELEMENT_OFFSET_POS_ = 16;
    }(), function() {
        function t() {}
        _(t, "laya.webgl.shader.ShaderValue");
    }(), function() {
        function t() {}
        _(t, "laya.webgl.resource.ICharRender");
        var e = t.prototype;
        return e.getWidth = function(t, e) {
            return 0;
        }, e.scale = function(t, e) {}, e.getCharBmp = function(t, e, i, r, _, a, n, s, o, h, l) {
            return null;
        }, a(0, e, "canvasWidth", function() {
            return 0;
        }, function(t) {}), t;
    }()), _t = function() {
        function t() {}
        return _(t, "laya.layagl.LayaGLRunner"), t.uploadShaderUniforms = function(t, e, i, r) {
            for (var _ = i._data, a = e.getArrayData(), n = 0, s = 0, o = a.length; s < o; s++) {
                var h = a[s];
                if (r || -1 !== h.textureID) {
                    var l = _[h.dataOffset];
                    null != l && (n += h.fun.call(h.caller, h, l));
                }
            }
            return n;
        }, t.uploadCustomUniform = function(t, e, i, r) {
            var _ = 0, a = e[i];
            return a && null != r && (_ += a.fun.call(a.caller, a, r)), _;
        }, t.uploadShaderUniformsForNative = function(t, e, i) {
            var r = 0;
            i._runtimeCopyValues.length >= 0 && (r = 1);
            var _ = i._data;
            return t.uploadShaderUniforms(e, _, r);
        }, t;
    }(), at = function() {
        function t(t, e, i) {
            this.pages = [], this.fontFamily = null, this._slotW = 0, this._gridW = 0, this._gridNum = 0, 
            this._baseSize = 0, this._lastSz = 0, this._spaceWidthMap = [], this._minScoreID = -1, 
            this._selectedSizeIdx = 0, this.margin_left = 0, this.margin_top = 0, this.margin_bottom = 0, 
            this.margin_right = 0, this.gcCnt = 0, this._textureWidth = wt.textureWidth, this.fontFamily = t, 
            this.margin_top = this.margin_left = this.margin_right = this.margin_bottom = i, 
            this._baseSize = Math.floor(e / wt.gridSize) * wt.gridSize, this._selectedSizeIdx = e - this._baseSize | 0, 
            this._slotW = Math.ceil(e / wt.gridSize) * wt.gridSize, this._gridW = Math.floor(this._textureWidth / this._slotW), 
            this._gridW <= 0 && (console.error("文字太大,需要修改texture大小"), this._gridW = 1), this._gridNum = this._gridW * this._gridW, 
            console.log("gridInfo:slotW=" + this._slotW + ",gridw=" + this._gridW + ",gridNum=" + this._gridNum + ",textureW=" + this._textureWidth);
        }
        _(t, "laya.webgl.resource.CharPages");
        var e = t.prototype;
        return e.getWidth = function(e) {
            return t.charRender.getWidth(wt._curFont, e);
        }, e.selectSize = function(t, e) {
            this._selectedSizeIdx = e - this._baseSize | 0;
        }, e.getSpaceChar = function(t) {
            if (this._spaceWidthMap[this._selectedSizeIdx]) return this._spaceWidthMap[this._selectedSizeIdx];
            var e = new ht();
            return this._spaceWidthMap[this._selectedSizeIdx] = e, e.width = this.getWidth(" "), 
            e.isSpace = !0, e;
        }, e.getChar = function(t, e, i, r, _, a, n, s) {
            if (" " === t) return this.getSpaceChar(n);
            var o, h = e > 0 ? t + "_" + e + _ : t;
            h += r, a && (h += "B"), s && (h += s);
            for (var l = 0, u = this.pages.length; l < u; l++) {
                var c = this.pages[l].charMaps[this._selectedSizeIdx];
                if (c && (o = c.get(h))) return n && o.touch(), o;
            }
            if (!(o = this._getASlot())) return null;
            var f = o.tex.charMaps[this._selectedSizeIdx];
            !f && (f = o.tex.charMaps[this._selectedSizeIdx] = new Map()), f.set(h, o), n && o.touch(), 
            o.height = i;
            var d = this.getCharBmp(t, wt._curFont, e, r, _, o), A = Math.floor(o.pos / this._gridW), E = o.pos % this._gridW * this._slotW, m = A * this._slotW, R = this._textureWidth, p = E / R, T = m / R, v = (E + d.width) / R, D = (m + d.height) / R, P = o.uv;
            return P[0] = p, P[1] = T, P[2] = v, P[3] = T, P[4] = v, P[5] = D, P[6] = p, P[7] = D, 
            o.tex.addChar(d, E, m), o;
        }, e._getASlot = function() {
            for (var t, e, i = this.pages.length, r = 0; r < i; r++) if (t = this.pages[r], 
            e = t.findAGrid()) return e;
            return t = wt.trash.getAPage(this._gridNum), this.pages.push(t), (e = t.findAGrid()) || console.error("_getASlot error!"), 
            e;
        }, e.getAllPageScore = function() {
            for (var t = 0, e = this.pages.length, i = F.loopCount, r = 0, _ = 1e4; t < e; t++) {
                var a = this.pages[t];
                a._scoreTick == i ? r += a._score : a._score = 0, a._score < _ && (_ = a._score, 
                this._minScoreID = t);
            }
            return r;
        }, e.removeLRU = function() {
            if (this._gridNum * this.pages.length - this.getAllPageScore() >= this._gridNum) {
                if (this._minScoreID >= 0) {
                    var t = this.pages[this._minScoreID];
                    console.log("remove fontpage: delpageid=" + this._minScoreID + ", total=" + this.pages.length + ",gcCnt:" + (this.gcCnt + 1));
                    var e = t._score;
                    t.printDebugInfo(), wt.trash.discardPage(t), this.pages[this._minScoreID] = this.pages[this.pages.length - 1], 
                    this.pages.pop();
                    for (var i = F.loopCount, r = 0, _ = this.pages.length; r < _ && e > 0; r++) {
                        t = this.pages[r], console.log("clean page " + r);
                        e -= t.removeOld(i);
                    }
                }
                return this.gcCnt++, !0;
            }
            return !1;
        }, e.getCharBmp = function(e, i, r, _, a, n) {
            return t.charRender.getCharBmp(e, i, r, _, a, n, this.margin_left, this.margin_top, this.margin_right, this.margin_bottom);
        }, e.printPagesInfo = function() {
            console.log("拥有页数: ", this.pages.length), console.log("基本大小:", this._baseSize), 
            console.log("格子宽度:", this._slotW), console.log("每行格子数:", this._gridW), console.log("贴图大小:", this._textureWidth), 
            console.log("    边界:", this.margin_left, this.margin_top), console.log("得分最少页:", this._minScoreID), 
            console.log("  GC次数:", this.gcCnt), console.log(" -------页信息-------"), this.pages.forEach(function(t) {
                t.printDebugInfo(!0);
            }), console.log(" -----页信息结束-------");
        }, t.getBmpSize = function(t) {
            return 1.5 * t;
        }, t.charRender = null, t;
    }(), nt = (function() {
        function t() {
            this._graphicsCmdEncoder = null, this._paramData = null, this._paramID = null, this._x = NaN, 
            this._y = NaN, this._radius = NaN, this._startAngle = NaN, this._endAngle = NaN, 
            this._fillColor = null, this._lineColor = null, this._lineWidth = NaN, this._vertNum = 0, 
            this._line_vertNum = 0, this.ibBuffer = null, this.vbBuffer = null, this.line_ibBuffer = null, 
            this.line_vbBuffer = null, this._ibSize = 0, this._vbSize = 0, this._line_ibSize = 0, 
            this._line_vbSize = 0, this._cmdCurrentPos = 0, this._points = [], this._linePoints = [], 
            this._line_vbArray = [], this._line_ibArray = [];
        }
        _(t, "laya.layagl.cmdNative.DrawPieCmdNative");
        var e = t.prototype;
        e._arc = function(t, e, i, r, _, a, n) {
            void 0 === a && (a = !1), void 0 === n && (n = !0);
            var s = [];
            s.push(0), s.push(0);
            var o = 0, h = 0, l = 0, u = 0, c = 0, f = 0, d = 0, A = 0, E = 0, m = 0;
            if (h = _ - r, a) if (Math.abs(h) >= 2 * Math.PI) h = 2 * -Math.PI; else for (;h > 0; ) h -= 2 * Math.PI; else if (Math.abs(h) >= 2 * Math.PI) h = 2 * Math.PI; else for (;h < 0; ) h += 2 * Math.PI;
            l = h / (m = i < 101 ? Math.max(10, h * i / 5) : i < 201 ? Math.max(10, h * i / 20) : Math.max(10, h * i / 40)) / 2, 
            u = Math.abs(4 / 3 * (1 - Math.cos(l)) / Math.sin(l)), a && (u = -u);
            var R = 0, p = 0;
            for (E = 0; E <= m; E++) o = r + h * (E / m), c = Math.cos(o), A = e + (f = Math.sin(o)) * i, 
            (d = t + c * i) == R && A == p || (s.push(d), s.push(A)), R = d, p = A;
            return c = Math.cos(_), f = Math.sin(_), d = t + c * i, A = e + f * i, d == R && A == p || (s.push(d), 
            s.push(A)), s;
        }, e._setData = function(t, e, i, r, _, a) {
            this._vertNum = r.length / 2;
            var n = this._vertNum, s = this._vertNum - 2;
            (!this.ibBuffer || this.ibBuffer.getByteLength() < 3 * s * 2) && (this.ibBuffer = new ParamData(3 * s * 2, !0, !0)), 
            this._ibSize = 3 * s * 2;
            for (var o = this.ibBuffer._int16Data, h = 0, u = 0; u < s; u++) o[h++] = 0, o[h++] = u + 1 + 0, 
            o[h++] = u + 2 + 0;
            (!this.vbBuffer || this.vbBuffer.getByteLength() < 3 * this._vertNum * 4) && (this.vbBuffer = new ParamData(3 * n * 4, !0)), 
            this._vbSize = 3 * this._vertNum * 4;
            for (var c = l.create(i).numColor, f = this.vbBuffer._float32Data, d = this.vbBuffer._int32Data, A = 0, E = 0; E < this._vertNum; E++) f[A++] = r[2 * E] + t, 
            f[A++] = r[2 * E + 1] + e, d[A++] = c;
            var m = 0;
            for (this._linePoints.length = 0, this._line_ibArray.length = 0, this._line_vbArray.length = 0, 
            E = 0; E < r.length; E++) this._linePoints.push(r[E]);
            if (this._linePoints.push(r[0]), this._linePoints.push(r[1]), _) {
                yt.createLine2(this._linePoints, this._line_ibArray, a, 0, this._line_vbArray, !1), 
                this._line_vertNum = this._linePoints.length, m = this._line_vertNum, (!this.line_ibBuffer || this.line_ibBuffer.getByteLength() < 3 * (this._line_vertNum - 2) * 2) && (this.line_ibBuffer = new ParamData(3 * (m - 2) * 2, !0, !0)), 
                this._line_ibSize = 3 * (this._line_vertNum - 2) * 2;
                var R = this.line_ibBuffer._int16Data;
                h = 0;
                for (var p = 0; p < 3 * (this._line_vertNum - 2); p++) R[h++] = this._line_ibArray[p];
                (!this.line_vbBuffer || this.line_vbBuffer.getByteLength() < 3 * this._line_vertNum * 4) && (this.line_vbBuffer = new ParamData(3 * m * 4, !0)), 
                this._line_vbSize = 3 * this._line_vertNum * 4;
                var T = l.create(_), v = T.numColor, D = this.line_vbBuffer._float32Data, P = this.line_vbBuffer._int32Data;
                for (A = 0, E = 0; E < this._line_vertNum; E++) D[A++] = this._line_vbArray[2 * E] + this._x, 
                D[A++] = this._line_vbArray[2 * E + 1] + this._y, P[A++] = v;
            } else {
                this._lineWidth = 1;
                for (yt.createLine2(this._linePoints, this._line_ibArray, this._lineWidth, 0, this._line_vbArray, !1), 
                this._line_vertNum = this._linePoints.length, m = this._line_vertNum, (!this.line_ibBuffer || this.line_ibBuffer.getByteLength() < 3 * (this._line_vertNum - 2) * 2) && (this.line_ibBuffer = new ParamData(3 * (m - 2) * 2, !0, !0)), 
                this._line_ibSize = 3 * (this._line_vertNum - 2) * 2, R = this.line_ibBuffer._int16Data, 
                h = 0, p = 0; p < 3 * (this._line_vertNum - 2); p++) R[h++] = this._line_ibArray[p];
                for ((!this.line_vbBuffer || this.line_vbBuffer.getByteLength() < 3 * this._line_vertNum * 4) && (this.line_vbBuffer = new ParamData(3 * m * 4, !0)), 
                this._line_vbSize = 3 * this._line_vertNum * 4, v = (T = l.create("#FFFFFF")).numColor, 
                D = this.line_vbBuffer._float32Data, P = this.line_vbBuffer._int32Data, A = 0, E = 0; E < this._line_vertNum; E++) D[A++] = this._line_vbArray[2 * E] + this._x, 
                D[A++] = this._line_vbArray[2 * E + 1] + this._y, P[A++] = v;
            }
        }, e._saveToParamData = function() {
            this._paramData._float32Data;
            var e = this._paramData._int32Data;
            e[0] = 1, e[1] = 32, e[t._PARAM_VB_POS_] = this.vbBuffer.getPtrID(), e[t._PARAM_IB_POS_] = this.ibBuffer.getPtrID(), 
            e[t._PARAM_VB_SIZE_POS_] = this._vbSize, e[t._PARAM_IB_SIZE_POS_] = this._ibSize, 
            e[t._PARAM_VB_OFFSET_POS_] = 0, e[t._PARAM_IB_OFFSET_POS_] = 0, e[t._PARAM_INDEX_ELEMENT_OFFSET_POS_] = 0, 
            j.syncBufferToRenderThread(this.vbBuffer), j.syncBufferToRenderThread(this.ibBuffer), 
            e[t._PARAM_LINE_VB_POS_] = this.line_vbBuffer.getPtrID(), e[t._PARAM_LINE_IB_POS_] = this.line_ibBuffer.getPtrID(), 
            e[t._PARAM_LINE_VB_SIZE_POS_] = this._line_vbSize, e[t._PARAM_LINE_IB_SIZE_POS_] = this._line_ibSize, 
            e[t._PARAM_LINE_VB_OFFSET_POS_] = 0, e[t._PARAM_LINE_IB_OFFSET_POS_] = 0, e[t._PARAM_LINE_INDEX_ELEMENT_OFFSET_POS_] = 0, 
            j.syncBufferToRenderThread(this.line_vbBuffer), j.syncBufferToRenderThread(this.line_ibBuffer);
        }, e.recover = function() {
            this._fillColor = null, this._lineColor = null, this._points.length = 0, this._linePoints.length = 0, 
            this._line_vbArray.length = 0, this._line_ibArray.length = 0, C.recover("DrawPieCmd", this);
        }, a(0, e, "lineColor", function() {
            return this._lineColor;
        }, function(e) {
            !this._lineColor && this._lineWidth && (this._graphicsCmdEncoder._idata[this._cmdCurrentPos + 1] = t._DRAW_PIE_LINES_CMD_ENCODER_.getPtrID(), 
            j.syncBufferToRenderThread(this._graphicsCmdEncoder)), this._lineColor = e, this._linePoints.length = 0, 
            this._line_ibArray.length = 0, this._line_vbArray.length = 0;
            for (var i = 0; i < this._points.length; i++) this._linePoints.push(this._points[i]);
            this._linePoints.push(this._points[0]), this._linePoints.push(this._points[1]), 
            yt.createLine2(this._linePoints, this._line_ibArray, this._lineWidth, 0, this._line_vbArray, !1), 
            this._line_vertNum = this._linePoints.length;
            var r = this._line_vertNum;
            (!this.line_ibBuffer || this.line_ibBuffer.getByteLength() < 3 * (this._line_vertNum - 2) * 2) && (this.line_ibBuffer = new ParamData(3 * (r - 2) * 2, !0, !0)), 
            this._line_ibSize = 3 * (this._line_vertNum - 2) * 2;
            for (var _ = this.line_ibBuffer._int16Data, a = 0, n = 0; n < 3 * (this._line_vertNum - 2); n++) _[a++] = this._line_ibArray[n];
            (!this.line_vbBuffer || this.line_vbBuffer.getByteLength() < 3 * this._line_vertNum * 4) && (this.line_vbBuffer = new ParamData(3 * r * 4, !0)), 
            this._line_vbSize = 3 * this._line_vertNum * 4;
            var s = l.create(e).numColor, o = this.line_vbBuffer._float32Data, h = this.line_vbBuffer._int32Data, u = 0;
            for (i = 0; i < this._line_vertNum; i++) o[u++] = this._line_vbArray[2 * i] + this._x, 
            o[u++] = this._line_vbArray[2 * i + 1] + this._y, h[u++] = s;
            j.syncBufferToRenderThread(this.line_ibBuffer), j.syncBufferToRenderThread(this.line_vbBuffer);
        }), a(0, e, "startAngle", function() {
            return 180 * this._startAngle / Math.PI;
        }, function(t) {
            this._startAngle = t * Math.PI / 180, this._points = this._arc(0, 0, this._radius, t * Math.PI / 180, this._endAngle), 
            this._setData(this._x, this._y, this._fillColor, this._points, this._lineColor, this._lineWidth), 
            this._saveToParamData(), j.syncBufferToRenderThread(this._paramData);
        }), a(0, e, "cmdID", function() {
            return "DrawPie";
        }), a(0, e, "fillColor", function() {
            return this._fillColor;
        }, function(t) {
            this._fillColor = t;
            for (var e = l.create(this._fillColor).numColor, i = this.vbBuffer._int32Data, r = 0, _ = 0; _ < this._vertNum; _++) r++, 
            r++, i[r++] = e;
            j.syncBufferToRenderThread(this.vbBuffer);
        }), a(0, e, "x", function() {
            return this._x;
        }, function(t) {
            this._x = t;
            for (var e = this.vbBuffer._float32Data, i = 0, r = 0; r < this._vertNum; r++) e[i++] = this._points[2 * r] + this._x, 
            i++, i++;
            if (this._lineColor) {
                var _ = this.line_vbBuffer._float32Data;
                for (i = 0, r = 0; r < this._line_vertNum; r++) _[i++] = this._line_vbArray[2 * r] + this._x, 
                i++, i++;
                j.syncBufferToRenderThread(this.line_vbBuffer);
            }
            j.syncBufferToRenderThread(this.vbBuffer);
        }), a(0, e, "y", function() {
            return this._y;
        }, function(t) {
            this._y = t;
            for (var e = this.vbBuffer._float32Data, i = 0, r = 0; r < this._vertNum; r++) i++, 
            e[i++] = this._points[2 * r + 1] + this._y, i++;
            if (this._lineColor) {
                var _ = this.line_vbBuffer._float32Data;
                for (i = 0, r = 0; r < this._line_vertNum; r++) i++, _[i++] = this._line_vbArray[2 * r + 1] + this._y, 
                i++;
                j.syncBufferToRenderThread(this.line_vbBuffer);
            }
            j.syncBufferToRenderThread(this.vbBuffer);
        }), a(0, e, "radius", function() {
            return this._radius;
        }, function(t) {
            this._points = this._arc(0, 0, t, this._startAngle, this._endAngle), this._setData(this._x, this._y, this._fillColor, this._points, this._lineColor, this._lineWidth), 
            this._saveToParamData(), j.syncBufferToRenderThread(this._paramData);
        }), a(0, e, "endAngle", function() {
            return 180 * this._endAngle / Math.PI;
        }, function(t) {
            this._endAngle = t * Math.PI / 180, this._points = this._arc(0, 0, this._radius, this._startAngle, t * Math.PI / 180), 
            this._setData(this._x, this._y, this._fillColor, this._points, this._lineColor, this._lineWidth), 
            this._saveToParamData(), j.syncBufferToRenderThread(this._paramData);
        }), a(0, e, "lineWidth", function() {
            return this._lineWidth;
        }, function(e) {
            this.lineColor && (this._graphicsCmdEncoder._idata[this._cmdCurrentPos + 1] = t._DRAW_PIE_LINES_CMD_ENCODER_.getPtrID(), 
            j.syncBufferToRenderThread(this._graphicsCmdEncoder)), this._lineWidth = e, this._linePoints.length = 0, 
            this._line_ibArray.length = 0, this._line_vbArray.length = 0;
            for (var i = 0; i < this._points.length; i++) this._linePoints.push(this._points[i]);
            this._linePoints.push(this._points[0]), this._linePoints.push(this._points[1]), 
            yt.createLine2(this._linePoints, this._line_ibArray, e, 0, this._line_vbArray, !1), 
            this._line_vertNum = this._linePoints.length;
            var r = this._line_vertNum;
            (!this.line_ibBuffer || this.line_ibBuffer.getByteLength() < 3 * (this._line_vertNum - 2) * 2) && (this.line_ibBuffer = new ParamData(3 * (r - 2) * 2, !0, !0)), 
            this._line_ibSize = 3 * (this._line_vertNum - 2) * 2;
            for (var _ = this.line_ibBuffer._int16Data, a = 0, n = 0; n < 3 * (this._line_vertNum - 2); n++) _[a++] = this._line_ibArray[n];
            (!this.line_vbBuffer || this.line_vbBuffer.getByteLength() < 3 * this._line_vertNum * 4) && (this.line_vbBuffer = new ParamData(3 * r * 4, !0)), 
            this._line_vbSize = 3 * this._line_vertNum * 4;
            var s = l.create(this.lineColor).numColor, o = this.line_vbBuffer._float32Data, h = this.line_vbBuffer._int32Data, u = 0;
            for (i = 0; i < this._line_vertNum; i++) o[u++] = this._line_vbArray[2 * i] + this._x, 
            o[u++] = this._line_vbArray[2 * i + 1] + this._y, h[u++] = s;
            j.syncBufferToRenderThread(this.line_ibBuffer), j.syncBufferToRenderThread(this.line_vbBuffer);
        }), t.create = function(e, i, r, _, a, n, s, o, h) {
            var l = C.getItemByClass("DrawPieCmd", t);
            return l._graphicsCmdEncoder = this._commandEncoder, t._DRAW_PIE_LINES_CMD_ENCODER_ || ((t._DRAW_PIE_LINES_CMD_ENCODER_ = j.instance.createCommandEncoder(244, 32, !0)).blendFuncByGlobalValue(Nt.GLOBALVALUE_BLENDFUNC_SRC, Nt.GLOBALVALUE_BLENDFUNC_DEST), 
            t._DRAW_PIE_LINES_CMD_ENCODER_.useProgramEx(Nt.PROGRAMEX_DRAWVG), t._DRAW_PIE_LINES_CMD_ENCODER_.useVDO(Nt.VDO_MESHVG), 
            t._DRAW_PIE_LINES_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_VIEWS, 0), t._DRAW_PIE_LINES_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_DIR, 1), 
            t._DRAW_PIE_LINES_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_POS, 2), t._DRAW_PIE_LINES_CMD_ENCODER_.setMeshExByParamData(4 * t._PARAM_VB_POS_, 4 * t._PARAM_VB_OFFSET_POS_, 4 * t._PARAM_VB_SIZE_POS_, 4 * t._PARAM_IB_POS_, 4 * t._PARAM_IB_OFFSET_POS_, 4 * t._PARAM_IB_SIZE_POS_, 4 * t._PARAM_INDEX_ELEMENT_OFFSET_POS_), 
            t._DRAW_PIE_LINES_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_MATRIX32, 0, 7), t._DRAW_PIE_LINES_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_DRAWTEXTURE_COLOR, 1, 15), 
            t._DRAW_PIE_LINES_CMD_ENCODER_.setMeshExByParamData(4 * t._PARAM_LINE_VB_POS_, 4 * t._PARAM_LINE_VB_OFFSET_POS_, 4 * t._PARAM_LINE_VB_SIZE_POS_, 4 * t._PARAM_LINE_IB_POS_, 4 * t._PARAM_LINE_IB_OFFSET_POS_, 4 * t._PARAM_LINE_IB_SIZE_POS_, 4 * t._PARAM_LINE_INDEX_ELEMENT_OFFSET_POS_), 
            t._DRAW_PIE_LINES_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_MATRIX32, 0, 7), t._DRAW_PIE_LINES_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_DRAWTEXTURE_COLOR, 1, 15), 
            j.syncBufferToRenderThread(t._DRAW_PIE_LINES_CMD_ENCODER_)), t._DRAW_PIE_CMD_ENCODER_ || ((t._DRAW_PIE_CMD_ENCODER_ = j.instance.createCommandEncoder(168, 32, !0)).blendFuncByGlobalValue(Nt.GLOBALVALUE_BLENDFUNC_SRC, Nt.GLOBALVALUE_BLENDFUNC_DEST), 
            t._DRAW_PIE_CMD_ENCODER_.useProgramEx(Nt.PROGRAMEX_DRAWVG), t._DRAW_PIE_CMD_ENCODER_.useVDO(Nt.VDO_MESHVG), 
            t._DRAW_PIE_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_VIEWS, 0), t._DRAW_PIE_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_DIR, 1), 
            t._DRAW_PIE_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_POS, 2), t._DRAW_PIE_CMD_ENCODER_.setMeshExByParamData(4 * t._PARAM_VB_POS_, 4 * t._PARAM_VB_OFFSET_POS_, 4 * t._PARAM_VB_SIZE_POS_, 4 * t._PARAM_IB_POS_, 4 * t._PARAM_IB_OFFSET_POS_, 4 * t._PARAM_IB_SIZE_POS_, 4 * t._PARAM_INDEX_ELEMENT_OFFSET_POS_), 
            t._DRAW_PIE_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_MATRIX32, 0, 7), t._DRAW_PIE_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_DRAWTEXTURE_COLOR, 1, 15), 
            j.syncBufferToRenderThread(t._DRAW_PIE_CMD_ENCODER_)), l._paramData || (l._paramData = new ParamData(64, !0)), 
            l._x = e, l._y = i, l._radius = r, l._startAngle = _, l._endAngle = a, l._fillColor = n, 
            l._lineColor = s, l._lineWidth = o, l._points = l._arc(0, 0, r, _, a), l._setData(e, i, n, l._points, s, o), 
            l._saveToParamData(), j.syncBufferToRenderThread(l._paramData), l._cmdCurrentPos = s ? l._graphicsCmdEncoder.useCommandEncoder(t._DRAW_PIE_LINES_CMD_ENCODER_.getPtrID(), l._paramData.getPtrID(), -1) : l._graphicsCmdEncoder.useCommandEncoder(t._DRAW_PIE_CMD_ENCODER_.getPtrID(), l._paramData.getPtrID(), -1), 
            j.syncBufferToRenderThread(l._graphicsCmdEncoder), l;
        }, t.ID = "DrawPie", t._DRAW_PIE_CMD_ENCODER_ = null, t._DRAW_PIE_LINES_CMD_ENCODER_ = null, 
        t._PARAM_VB_POS_ = 2, t._PARAM_IB_POS_ = 3, t._PARAM_LINE_VB_POS_ = 4, t._PARAM_LINE_IB_POS_ = 5, 
        t._PARAM_VB_SIZE_POS_ = 6, t._PARAM_IB_SIZE_POS_ = 7, t._PARAM_LINE_VB_SIZE_POS_ = 8, 
        t._PARAM_LINE_IB_SIZE_POS_ = 9, t._PARAM_VB_OFFSET_POS_ = 10, t._PARAM_IB_OFFSET_POS_ = 11, 
        t._PARAM_LINE_VB_OFFSET_POS_ = 12, t._PARAM_LINE_IB_OFFSET_POS_ = 13, t._PARAM_INDEX_ELEMENT_OFFSET_POS_ = 14, 
        t._PARAM_LINE_INDEX_ELEMENT_OFFSET_POS_ = 15;
    }(), function() {
        function t() {
            this._nativeVertexArrayObject = null, this._bindedIndexBuffer = null, this._nativeVertexArrayObject = j.instance.createVertexArray();
        }
        _(t, "laya.webgl.BufferStateBase");
        var e = t.prototype;
        return e.bind = function() {
            t._curBindedBufferState !== this && (j.instance.bindVertexArray(this._nativeVertexArrayObject), 
            t._curBindedBufferState = this);
        }, e.unBind = function() {
            if (t._curBindedBufferState !== this) throw "BufferState: must call bind() function first.";
            j.instance.bindVertexArray(null), t._curBindedBufferState = null;
        }, e.bindForNative = function() {
            j.instance.bindVertexArray(this._nativeVertexArrayObject), t._curBindedBufferState = this;
        }, e.unBindForNative = function() {
            j.instance.bindVertexArray(null), t._curBindedBufferState = null;
        }, e.destroy = function() {
            j.instance.deleteVertexArray(this._nativeVertexArrayObject);
        }, t._curBindedBufferState = null, t;
    }()), st = (function() {
        function t() {
            this._graphicsCmdEncoder = null, this._index = 0, this._paramData = null, this._x = NaN, 
            this._y = NaN, this._width = NaN, this._height = NaN, this._fillColor = null, this._lineColor = null, 
            this._lineWidth = NaN, this._line_vertNum = 0, this._cmdCurrentPos = 0, this._linePoints = [], 
            this._line_ibArray = [], this._line_vbArray = [];
        }
        _(t, "laya.layagl.cmdNative.DrawRectCmdNative");
        var e = t.prototype;
        e.recover = function() {
            this._linePoints.length = 0, this._line_ibArray.length = 0, this._line_vbArray.length = 0, 
            this._graphicsCmdEncoder = null, C.recover("DrawRectCmd", this);
        }, a(0, e, "lineColor", function() {
            return this._lineColor;
        }, function(e) {
            this._graphicsCmdEncoder._idata[this._cmdCurrentPos + 1] = t._DRAW_RECT_LINE_CMD_ENCODER_.getPtrID(), 
            j.syncBufferToRenderThread(this._graphicsCmdEncoder), this._lineColor = e;
            for (var i = this._paramData._int32Data, r = l.create(e).numColor, _ = t._PARAM_LINE_VB_POS_, a = 0; a < this._line_vertNum; a++) _++, 
            _++, i[_++] = r;
            j.syncBufferToRenderThread(this._paramData);
        }), a(0, e, "cmdID", function() {
            return "DrawRect";
        }), a(0, e, "fillColor", function() {
            return this._fillColor;
        }, function(e) {
            if (this._fillColor = e, "string" == typeof e) {
                var i = l.create(this._fillColor).numColor, r = this._paramData._int32Data;
                r[t._PARAM_VB_POS_ + 4] = i, r[t._PARAM_VB_POS_ + 10] = i, r[t._PARAM_VB_POS_ + 16] = i, 
                r[t._PARAM_VB_POS_ + 22] = i;
            } else (r = this._paramData._int32Data)[t._PARAM_VB_POS_ + 4] = e, r[t._PARAM_VB_POS_ + 10] = e, 
            r[t._PARAM_VB_POS_ + 16] = e, r[t._PARAM_VB_POS_ + 22] = e;
            j.syncBufferToRenderThread(this._paramData);
        }), a(0, e, "width", function() {
            return this._width;
        }, function(e) {
            this._width = e;
            var i = this._paramData._float32Data;
            if (i[t._PARAM_VB_POS_ + 6] = this._x + this._width, i[t._PARAM_VB_POS_ + 12] = this._x + this._width, 
            this.lineColor) {
                this._line_ibArray.length = 0, this._line_vbArray.length = 0, this._linePoints[2] = this._x + this._width, 
                this._linePoints[4] = this._x + this._width, yt.createLine2(this._linePoints, this._line_ibArray, this._lineWidth, 0, this._line_vbArray, !1), 
                this._line_vertNum = this._linePoints.length;
                for (var r = t._PARAM_LINE_VB_POS_, _ = 0; _ < this._line_vertNum; _++) i[r++] = this._line_vbArray[2 * _], 
                i[r++] = this._line_vbArray[2 * _ + 1], r++;
            }
            j.syncBufferToRenderThread(this._paramData);
        }), a(0, e, "x", function() {
            return this._x;
        }, function(e) {
            this._x = e;
            var i = this._paramData._float32Data;
            if (i[t._PARAM_VB_POS_] = this._x, i[t._PARAM_VB_POS_ + 6] = this._x + this._width, 
            i[t._PARAM_VB_POS_ + 12] = this._x + this._width, i[t._PARAM_VB_POS_ + 18] = this._x, 
            this.lineColor) {
                this._line_ibArray.length = 0, this._line_vbArray.length = 0, this._linePoints[0] = this._x, 
                this._linePoints[2] = this._x + this._width, this._linePoints[4] = this._x + this._width, 
                this._linePoints[6] = this._x, this._linePoints[8] = this._x, yt.createLine2(this._linePoints, this._line_ibArray, this._lineWidth, 0, this._line_vbArray, !1);
                for (var r = t._PARAM_LINE_VB_POS_, _ = 0; _ < this._line_vertNum; _++) i[r++] = this._line_vbArray[2 * _], 
                i[r++] = this._line_vbArray[2 * _ + 1], r++;
            }
            j.syncBufferToRenderThread(this._paramData);
        }), a(0, e, "y", function() {
            return this._y;
        }, function(e) {
            this._y = e;
            var i = this._paramData._float32Data;
            if (i[t._PARAM_VB_POS_ + 1] = this._y, i[t._PARAM_VB_POS_ + 7] = this._y, i[t._PARAM_VB_POS_ + 13] = this._y + this._height, 
            i[t._PARAM_VB_POS_ + 19] = this._y + this._height, this.lineColor) {
                this._line_ibArray.length = 0, this._line_vbArray.length = 0, this._linePoints[1] = this._y, 
                this._linePoints[3] = this._y, this._linePoints[5] = this._y + this._height, this._linePoints[7] = this._y + this._height, 
                this._linePoints[9] = this._y - this._lineWidth / 2, yt.createLine2(this._linePoints, this._line_ibArray, this._lineWidth, 0, this._line_vbArray, !1);
                for (var r = t._PARAM_LINE_VB_POS_, _ = 0; _ < this._line_vertNum; _++) i[r++] = this._line_vbArray[2 * _], 
                i[r++] = this._line_vbArray[2 * _ + 1], r++;
            }
            j.syncBufferToRenderThread(this._paramData);
        }), a(0, e, "height", function() {
            return this._height;
        }, function(e) {
            this._height = e;
            var i = this._paramData._float32Data;
            if (i[t._PARAM_VB_POS_ + 13] = this._y + this._height, i[t._PARAM_VB_POS_ + 19] = this._y + this._height, 
            this.lineColor) {
                this._line_ibArray.length = 0, this._line_vbArray.length = 0, this._linePoints[5] = this._y + this._height, 
                this._linePoints[7] = this._y + this._height, yt.createLine2(this._linePoints, this._line_ibArray, this._lineWidth, 0, this._line_vbArray, !1);
                for (var r = t._PARAM_LINE_VB_POS_, _ = 0; _ < this._line_vertNum; _++) i[r++] = this._line_vbArray[2 * _], 
                i[r++] = this._line_vbArray[2 * _ + 1], r++;
            }
            j.syncBufferToRenderThread(this._paramData);
        }), a(0, e, "lineWidth", function() {
            return this._lineWidth;
        }, function(e) {
            this.lineColor && (this._graphicsCmdEncoder._idata[this._cmdCurrentPos + 1] = t._DRAW_RECT_LINE_CMD_ENCODER_.getPtrID(), 
            j.syncBufferToRenderThread(this._graphicsCmdEncoder)), this._lineWidth = e, this._line_ibArray.length = 0, 
            this._line_vbArray.length = 0, this._linePoints[9] = this._y - this._lineWidth / 2, 
            yt.createLine2(this._linePoints, this._line_ibArray, this._lineWidth, 0, this._line_vbArray, !1), 
            this._line_vertNum = this._linePoints.length;
            for (var i = this._paramData._float32Data, r = t._PARAM_LINE_VB_POS_, _ = 0; _ < this._line_vertNum; _++) i[r++] = this._line_vbArray[2 * _], 
            i[r++] = this._line_vbArray[2 * _ + 1], r++;
            j.syncBufferToRenderThread(this._paramData);
        }), t.create = function(e, i, r, _, a, n, s) {
            var o = C.getItemByClass("DrawRectCmd", t);
            o._graphicsCmdEncoder = this._commandEncoder, t._DRAW_RECT_LINE_CMD_ENCODER_ || ((t._DRAW_RECT_LINE_CMD_ENCODER_ = j.instance.createCommandEncoder(300, 32, !0)).blendFuncByGlobalValue(Nt.GLOBALVALUE_BLENDFUNC_SRC, Nt.GLOBALVALUE_BLENDFUNC_DEST), 
            t._DRAW_RECT_LINE_CMD_ENCODER_.useProgramEx(Nt.PROGRAMEX_DRAWTEXTURE), t._DRAW_RECT_LINE_CMD_ENCODER_.useVDO(Nt.VDO_MESHQUADTEXTURE), 
            t._DRAW_RECT_LINE_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_VIEWS, 0), t._DRAW_RECT_LINE_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_DIR, 1), 
            t._DRAW_RECT_LINE_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_POS, 2), t._DRAW_RECT_LINE_CMD_ENCODER_.setRectMeshByParamData(4 * t._PARAM_RECT_NUM_POS_, 4 * t._PARAM_VB_POS_, 4 * t._PARAM_VB_SIZE_POS_), 
            t._DRAW_RECT_LINE_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_MATRIX32, 0, 7), t._DRAW_RECT_LINE_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_DRAWTEXTURE_COLOR, 1, 15), 
            t._DRAW_RECT_LINE_CMD_ENCODER_.useProgramEx(Nt.PROGRAMEX_DRAWVG), t._DRAW_RECT_LINE_CMD_ENCODER_.useVDO(Nt.VDO_MESHVG), 
            t._DRAW_RECT_LINE_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_VIEWS, 0), t._DRAW_RECT_LINE_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_DIR, 1), 
            t._DRAW_RECT_LINE_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_POS, 2), t._DRAW_RECT_LINE_CMD_ENCODER_.setMeshByParamData(4 * t._PARAM_LINE_VB_POS_, 4 * t._PARAM_LINE_VB_OFFSET_POS_, 4 * t._PARAM_LINE_VB_SIZE_POS_, 4 * t._PARAM_LINE_IB_POS_, 4 * t._PARAM_LINE_IB_OFFSET_POS_, 4 * t._PARAM_LINE_IB_SIZE_POS_, 4 * t._PARAM_LINE_IBELEMENT_OFFSET_POS_), 
            t._DRAW_RECT_LINE_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_MATRIX32, 0, 7), t._DRAW_RECT_LINE_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_DRAWTEXTURE_COLOR, 1, 15), 
            j.syncBufferToRenderThread(t._DRAW_RECT_LINE_CMD_ENCODER_)), t._DRAW_RECT_CMD_ENCODER_ || ((t._DRAW_RECT_CMD_ENCODER_ = j.instance.createCommandEncoder(152, 32, !0)).blendFuncByGlobalValue(Nt.GLOBALVALUE_BLENDFUNC_SRC, Nt.GLOBALVALUE_BLENDFUNC_DEST), 
            t._DRAW_RECT_CMD_ENCODER_.useProgramEx(Nt.PROGRAMEX_DRAWTEXTURE), t._DRAW_RECT_CMD_ENCODER_.useVDO(Nt.VDO_MESHQUADTEXTURE), 
            t._DRAW_RECT_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_VIEWS, 0), t._DRAW_RECT_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_DIR, 1), 
            t._DRAW_RECT_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_POS, 2), t._DRAW_RECT_CMD_ENCODER_.setRectMeshByParamData(4 * t._PARAM_RECT_NUM_POS_, 4 * t._PARAM_VB_POS_, 4 * t._PARAM_VB_SIZE_POS_), 
            t._DRAW_RECT_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_MATRIX32, 0, 7), t._DRAW_RECT_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_DRAWTEXTURE_COLOR, 1, 15), 
            j.syncBufferToRenderThread(t._DRAW_RECT_CMD_ENCODER_)), o._paramData || (o._paramData = new ParamData(292, !0)), 
            o._x = e, o._y = i, o._width = r, o._height = _, o._fillColor = a, o._lineColor = n, 
            o._lineWidth = s;
            var h = l.create(a).numColor, u = o._paramData._float32Data, c = o._paramData._int32Data;
            c[t._PARAM_RECT_NUM_POS_] = 1, c[t._PARAM_VB_SIZE_POS_] = 96;
            var f = t._PARAM_VB_POS_;
            if (u[f++] = e, u[f++] = i, u[f++] = 0, u[f++] = 0, c[f++] = h, u[f++] = 4294967295, 
            u[f++] = e + r, u[f++] = i, u[f++] = 0, u[f++] = 0, c[f++] = h, u[f++] = 4294967295, 
            u[f++] = e + r, u[f++] = i + _, u[f++] = 0, u[f++] = 0, c[f++] = h, u[f++] = 4294967295, 
            u[f++] = e, u[f++] = i + _, u[f++] = 0, u[f++] = 0, c[f++] = h, u[f++] = 4294967295, 
            o._linePoints.push(e), o._linePoints.push(i), o._linePoints.push(e + r), o._linePoints.push(i), 
            o._linePoints.push(e + r), o._linePoints.push(i + _), o._linePoints.push(e), o._linePoints.push(i + _), 
            o._linePoints.push(e), o._linePoints.push(i - s / 2), n) {
                yt.createLine2(o._linePoints, o._line_ibArray, s, 0, o._line_vbArray, !1), o._line_vertNum = o._linePoints.length, 
                c[t._PARAM_LINE_VB_SIZE_POS_] = 120;
                var d = l.create(n), A = d.numColor;
                f = t._PARAM_LINE_VB_POS_;
                for (var E = 0; E < o._line_vertNum; E++) u[f++] = o._line_vbArray[2 * E], u[f++] = o._line_vbArray[2 * E + 1], 
                c[f++] = A;
                c[t._PARAM_LINE_IB_SIZE_POS_] = 2 * o._line_ibArray.length;
                var m = o._paramData._int16Data;
                f = 2 * t._PARAM_LINE_IB_POS_;
                for (var R = 0; R < o._line_ibArray.length; R++) m[f++] = o._line_ibArray[R];
            } else {
                o._lineWidth = 1;
                for (yt.createLine2(o._linePoints, o._line_ibArray, o._lineWidth, 0, o._line_vbArray, !1), 
                o._line_vertNum = o._linePoints.length, c[t._PARAM_LINE_VB_SIZE_POS_] = 120, A = (d = l.create("#ffffff")).numColor, 
                f = t._PARAM_LINE_VB_POS_, E = 0; E < o._line_vertNum; E++) u[f++] = o._line_vbArray[2 * E], 
                u[f++] = o._line_vbArray[2 * E + 1], c[f++] = A;
                for (c[t._PARAM_LINE_IB_SIZE_POS_] = 2 * o._line_ibArray.length, m = o._paramData._int16Data, 
                f = 2 * t._PARAM_LINE_IB_POS_, R = 0; R < o._line_ibArray.length; R++) m[f++] = o._line_ibArray[R];
            }
            return c[t._PARAM_LINE_VB_OFFSET_POS_] = 0, c[t._PARAM_LINE_IB_OFFSET_POS_] = 0, 
            c[t._PARAM_LINE_IBELEMENT_OFFSET_POS_] = 0, j.syncBufferToRenderThread(o._paramData), 
            o._cmdCurrentPos = n ? o._graphicsCmdEncoder.useCommandEncoder(t._DRAW_RECT_LINE_CMD_ENCODER_.getPtrID(), o._paramData.getPtrID(), -1) : o._graphicsCmdEncoder.useCommandEncoder(t._DRAW_RECT_CMD_ENCODER_.getPtrID(), o._paramData.getPtrID(), -1), 
            j.syncBufferToRenderThread(o._graphicsCmdEncoder), o;
        }, t.ID = "DrawRect", t._DRAW_RECT_CMD_ENCODER_ = null, t._DRAW_RECT_LINE_CMD_ENCODER_ = null, 
        t._PARAM_RECT_NUM_POS_ = 0, t._PARAM_VB_SIZE_POS_ = 1, t._PARAM_VB_POS_ = 2, t._PARAM_LINE_VB_SIZE_POS_ = 26, 
        t._PARAM_LINE_VB_POS_ = 27, t._PARAM_LINE_IB_SIZE_POS_ = 57, t._PARAM_LINE_IB_POS_ = 58, 
        t._PARAM_LINE_VB_OFFSET_POS_ = 70, t._PARAM_LINE_IB_OFFSET_POS_ = 71, t._PARAM_LINE_IBELEMENT_OFFSET_POS_ = 72;
    }(), function() {
        function t(t, e, i, r) {
            function _(t) {
                var e = [], i = new it(e);
                return a._compileToTree(i, t.split("\n"), 0, e, r), i;
            }
            var a = this, n = o.now();
            this._VS = _(t), this._PS = _(e), this._nameMap = i, o.now() - n > 2 && console.log("ShaderCompile use time:" + (o.now() - n) + "  size:" + t.length + "/" + e.length);
        }
        _(t, "laya.webgl.utils.ShaderCompile");
        var e = t.prototype;
        return e._compileToTree = function(e, i, r, _, a) {
            var n, s, o, h, l, u, c, f = 0, d = 0, A = 0, E = 0;
            for (d = r; d < i.length; d++) if (!((o = i[d]).length < 1) && 0 !== (f = o.indexOf("//"))) {
                if (f >= 0 && (o = o.substr(0, f)), n = c || new it(_), c = null, n.text = o, n.noCompile = !0, 
                (f = o.indexOf("#")) >= 0) {
                    for (h = "#", E = f + 1, A = o.length; E < A; E++) {
                        var m = o.charAt(E);
                        if (" " === m || "\t" === m || "?" === m) break;
                        h += m;
                    }
                    switch (n.name = h, h) {
                      case "#ifdef":
                      case "#ifndef":
                        if (n.src = o, n.noCompile = null != o.match(/[!&|()=<>]/), n.noCompile ? console.log("function():Boolean{return " + o.substr(f + n.name.length) + "}") : (u = o.replace(/^\s*/, "").split(/\s+/), 
                        n.setCondition(u[1], "#ifdef" === h ? 1 : 2), n.text = "//" + n.text), n.setParent(e), 
                        e = n, a) for (u = o.substr(E).split(t._splitToWordExps3), E = 0; E < u.length; E++) (o = u[E]).length && (a[o] = !0);
                        continue;

                      case "#if":
                        if (n.src = o, n.noCompile = !0, n.setParent(e), e = n, a) for (u = o.substr(E).split(t._splitToWordExps3), 
                        E = 0; E < u.length; E++) (o = u[E]).length && "defined" != o && (a[o] = !0);
                        continue;

                      case "#else":
                        n.src = o, s = (e = e.parent).childs[e.childs.length - 1], n.noCompile = s.noCompile, 
                        n.noCompile || (n.condition = s.condition, n.conditionType = 1 == s.conditionType ? 2 : 1, 
                        n.text = "//" + n.text + " " + s.text + " " + n.conditionType), n.setParent(e), 
                        e = n;
                        continue;

                      case "#endif":
                        s = (e = e.parent).childs[e.childs.length - 1], n.noCompile = s.noCompile, n.noCompile || (n.text = "//" + n.text), 
                        n.setParent(e);
                        continue;

                      case "#include":
                        u = t.splitToWords(o, null);
                        var R = t.includes[u[1]];
                        if (!R) throw "ShaderCompile error no this include file:" + u[1];
                        if ((f = u[0].indexOf("?")) < 0) {
                            n.setParent(e), o = R.getWith("with" == u[2] ? u[3] : null), this._compileToTree(n, o.split("\n"), 0, _, a), 
                            n.text = "";
                            continue;
                        }
                        n.setCondition(u[0].substr(f + 1), 1), n.text = R.getWith("with" == u[2] ? u[3] : null);
                        break;

                      case "#import":
                        l = (u = t.splitToWords(o, null))[1], _.push({
                            node: n,
                            file: t.includes[l],
                            ofs: n.text.length
                        });
                        continue;
                    }
                } else {
                    if ((s = e.childs[e.childs.length - 1]) && !s.name) {
                        _.length > 0 && t.splitToWords(o, s), c = n, s.text += "\n" + o;
                        continue;
                    }
                    _.length > 0 && t.splitToWords(o, n);
                }
                n.setParent(e);
            }
        }, e.createShader = function(t, e, i, r) {
            var _ = {}, a = "";
            if (t) for (var n in t) a += "#define " + n + "\n", _[n] = !0;
            var s = this._VS.toscript(_, []), o = this._PS.toscript(_, []);
            return (i || he.create)(a + s.join("\n"), a + o.join("\n"), e, this._nameMap, r);
        }, t._parseOne = function(e, i, r, _, a, n) {
            var s = {
                type: t.shaderParamsMap[r[_ + 1]],
                name: r[_ + 2],
                size: isNaN(parseInt(r[_ + 3])) ? 1 : parseInt(r[_ + 3])
            };
            return n && ("attribute" == a ? e.push(s) : i.push(s)), ":" == r[_ + 3] && (s.type = r[_ + 4], 
            _ += 2), _ += 2;
        }, t.addInclude = function(e, i) {
            if (!i || 0 === i.length) throw new Error("add shader include file err:" + e);
            if (t.includes[e]) throw new Error("add shader include file err, has add:" + e);
            t.includes[e] = new gt(i);
        }, t.preGetParams = function(e, i) {
            var r = [ e, i ], _ = {}, a = [], n = [], s = {}, o = [];
            _.attributes = a, _.uniforms = n, _.defines = s;
            for (var h = 0, l = 0, u = 0; u < 2; u++) {
                r[u] = r[u].replace(t._removeAnnotation, "");
                var c, f = r[u].match(t._reg);
                for (h = 0, l = f.length; h < l; h++) {
                    var d = f[h];
                    if ("attribute" == d || "uniform" == d) h = t._parseOne(a, n, f, h, d, !0); else {
                        if ("#define" == d) {
                            o[d = f[++h]] = 1;
                            continue;
                        }
                        if ("#ifdef" == d) {
                            s[c = f[++h]] = s[c] || [];
                            for (h++; h < l; h++) if ("attribute" == (d = f[h]) || "uniform" == d) h = t._parseOne(a, n, f, h, d, o[c]); else if ("#else" == d) for (h++; h < l; h++) if ("attribute" == (d = f[h]) || "uniform" == d) h = t._parseOne(a, n, f, h, d, !o[c]); else if ("#endif" == d) break;
                        }
                    }
                }
            }
            return _;
        }, t.splitToWords = function(t, e) {
            for (var i, r, _ = [], a = -1, n = 0, s = t.length; n < s; n++) if (i = t.charAt(n), 
            " \t=+-*/&%!<>()'\",;".indexOf(i) >= 0) {
                if (a >= 0 && n - a > 1 && (r = t.substr(a, n - a), _.push(r)), '"' == i || "'" == i) {
                    var o = t.indexOf(i, n + 1);
                    if (o < 0) throw "Sharder err:" + t;
                    _.push(t.substr(n + 1, o - n - 1)), n = o, a = -1;
                    continue;
                }
                "(" == i && e && _.length > 0 && (r = _[_.length - 1] + ";", "vec4;main;".indexOf(r) < 0 && (e.useFuns += r)), 
                a = -1;
            } else a < 0 && (a = n);
            return a < s && s - a > 1 && (r = t.substr(a, s - a), _.push(r)), _;
        }, t.IFDEF_NO = 0, t.IFDEF_YES = 1, t.IFDEF_ELSE = 2, t.IFDEF_PARENT = 3, t._removeAnnotation = new RegExp("(/\\*([^*]|[\\r\\\n]|(\\*+([^*/]|[\\r\\n])))*\\*+/)|(//.*)", "g"), 
        t._reg = new RegExp("(\".*\")|('.*')|([#\\w\\*-\\.+/()=<>{}\\\\]+)|([,;:\\\\])", "g"), 
        t._splitToWordExps = new RegExp("[(\".*\")]+|[('.*')]+|([ \\t=\\+\\-*/&%!<>!%(),;])", "g"), 
        t.includes = {}, r(t, [ "shaderParamsMap", function() {
            return this.shaderParamsMap = {
                float: 5126,
                int: 5124,
                bool: 35670,
                vec2: 35664,
                vec3: 35665,
                vec4: 35666,
                ivec2: 35667,
                ivec3: 35668,
                ivec4: 35669,
                bvec2: 35671,
                bvec3: 35672,
                bvec4: 35673,
                mat2: 35674,
                mat3: 35675,
                mat4: 35676,
                sampler2D: 35678,
                samplerCube: 35680
            };
        }, "_splitToWordExps3", function() {
            return this._splitToWordExps3 = new RegExp("[ \\t=\\+\\-*/&%!<>!%(),;\\|]", "g");
        } ]), t;
    }()), ot = (function() {
        function t() {
            this._graphicsCmdEncoder = null, this._index = 0, this._text = null, this._x = NaN, 
            this._y = NaN, this._font = null, this._color = null, this._textAlign = null, this._draw_texture_cmd_encoder_ = j.instance.createCommandEncoder(64, 32, !0);
        }
        _(t, "laya.layagl.cmdNative.FillTextCmdNative");
        var e = t.prototype;
        e.createFillText = function(e, i, r, _, a, n, s) {
            l.create(n).numColor;
            var o = {};
            o._curMat = new v(), o._italicDeg = 0, o._drawTextureUseColor = 4294967295, o.fillStyle = n, 
            o._fillColor = 4294967295, o.setFillColor = function(t) {
                o._fillColor = t;
            }, o.getFillColor = function() {
                return o._fillColor;
            }, o.mixRGBandAlpha = function(t) {
                return t;
            }, o._drawTextureM = function(t, i, r, _, a, n, s, o) {
                e.blendFuncByGlobalValue(Nt.GLOBALVALUE_BLENDFUNC_SRC, Nt.GLOBALVALUE_BLENDFUNC_DEST), 
                e.useProgramEx(Nt.PROGRAMEX_DRAWTEXTURE), e.useVDO(Nt.VDO_MESHQUADTEXTURE), e.uniformEx(Nt.GLOBALVALUE_VIEWS, 0), 
                e.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_DIR, 1), e.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_POS, 2), 
                e.uniformTexture(3, 33984, t.bitmap._glTexture);
                var h = new Float32Array([ i, r, o[0], o[1], 0, 0, i + _, r, o[2], o[3], 0, 0, i + _, r + a, o[4], o[5], 0, 0, i, r + a, o[6], o[7], 0, 0 ]), l = new Int32Array(h.buffer);
                l[4] = l[10] = l[16] = l[22] = 4294967295, l[5] = l[11] = l[17] = l[23] = 4294967295, 
                e.setRectMesh(1, h, h.length), e.modifyMesh(Nt.GLOBALVALUE_MATRIX32, 0, 7), e.modifyMesh(Nt.GLOBALVALUE_DRAWTEXTURE_COLOR, 1, 15), 
                j.syncBufferToRenderThread(e);
            }, t.cbook.filltext_native(o, i, null, r, _, a, n, null, 0, s);
        }, e.recover = function() {
            this._graphicsCmdEncoder = null, C.recover("FillTextCmd", this);
        }, a(0, e, "text", function() {
            return this._text;
        }, function(t) {
            var e = this._draw_texture_cmd_encoder_;
            e.clearEncoding(), this._text = t, this.createFillText(e, this._text, this._x, this._y, this._font, this._color, this._textAlign), 
            j.syncBufferToRenderThread(e);
        }), a(0, e, "cmdID", function() {
            return "FillText";
        }), a(0, e, "font", function() {
            return this._font;
        }, function(t) {
            var e = this._draw_texture_cmd_encoder_;
            e.clearEncoding(), this._font = t, this.createFillText(e, this._text, this._x, this._y, this._font, this._color, this._textAlign), 
            j.syncBufferToRenderThread(e);
        }), a(0, e, "color", function() {
            return this._color;
        }, function(t) {
            var e = this._draw_texture_cmd_encoder_;
            e.clearEncoding(), this._color = t, this.createFillText(e, this._text, this._x, this._y, this._font, this._color, this._textAlign), 
            j.syncBufferToRenderThread(e);
        }), a(0, e, "textAlign", function() {
            return this._textAlign;
        }, function(t) {
            var e = this._draw_texture_cmd_encoder_;
            e.clearEncoding(), this._textAlign = t, this.createFillText(e, this._text, this._x, this._y, this._font, this._color, this._textAlign), 
            j.syncBufferToRenderThread(e);
        }), a(0, e, "x", function() {
            return this._x;
        }, function(t) {
            var e = this._draw_texture_cmd_encoder_;
            e.clearEncoding(), this._x = t, this.createFillText(e, this._text, this._x, this._y, this._font, this._color, this._textAlign), 
            j.syncBufferToRenderThread(e);
        }), a(0, e, "y", function() {
            return this._y;
        }, function(t) {
            var e = this._draw_texture_cmd_encoder_;
            e.clearEncoding(), this._y = t, this.createFillText(e, this._text, this._x, this._y, this._font, this._color, this._textAlign), 
            j.syncBufferToRenderThread(e);
        }), t.create = function(e, i, r, _, a, n) {
            t.cbook || new Error("Error:charbook not create!");
            var s = C.getItemByClass("FillTextCmd", t), o = s._graphicsCmdEncoder = this._commandEncoder;
            return s._text = e, s._x = i, s._y = r, s._font = _, s._color = a, s._textAlign = n, 
            s._draw_texture_cmd_encoder_.clearEncoding(), s.createFillText(s._draw_texture_cmd_encoder_, e, i, r, _, a, n), 
            j.syncBufferToRenderThread(s._draw_texture_cmd_encoder_), o.useCommandEncoder(s._draw_texture_cmd_encoder_.getPtrID(), -1, -1), 
            j.syncBufferToRenderThread(o), s;
        }, t.ID = "FillText", r(t, [ "cbook", function() {
            return this.cbook = i.textRender;
        } ]);
    }(), function() {
        function e() {}
        _(e, "laya.webgl.WebGLContext");
        var i = e.prototype;
        return i.getContextAttributes = function() {
            return null;
        }, i.isContextLost = function() {}, i.getSupportedExtensions = function() {
            return null;
        }, i.getExtension = function(t) {
            return null;
        }, i.activeTexture = function(t) {}, i.attachShader = function(t, e) {}, i.bindAttribLocation = function(t, e, i) {}, 
        i.bindBuffer = function(t, e) {}, i.bindFramebuffer = function(t, e) {}, i.bindRenderbuffer = function(t, e) {}, 
        i.bindTexture = function(t, e) {}, i.useTexture = function(t) {}, i.blendColor = function(t, e, i, r) {}, 
        i.blendEquation = function(t) {}, i.blendEquationSeparate = function(t, e) {}, i.blendFunc = function(t, e) {}, 
        i.blendFuncSeparate = function(t, e, i, r) {}, i.bufferData = function(t, e, i) {}, 
        i.bufferSubData = function(t, e, i) {}, i.checkFramebufferStatus = function(t) {
            return null;
        }, i.clear = function(t) {}, i.clearColor = function(t, e, i, r) {}, i.clearDepth = function(t) {}, 
        i.clearStencil = function(t) {}, i.colorMask = function(t, e, i, r) {}, i.compileShader = function(t) {}, 
        i.copyTexImage2D = function(t, e, i, r, _, a, n, s) {}, i.copyTexSubImage2D = function(t, e, i, r, _, a, n, s) {}, 
        i.createBuffer = function() {}, i.createFramebuffer = function() {}, i.createProgram = function() {}, 
        i.createRenderbuffer = function() {}, i.createShader = function(t) {}, i.createTexture = function() {
            return null;
        }, i.cullFace = function(t) {}, i.deleteBuffer = function(t) {}, i.deleteFramebuffer = function(t) {}, 
        i.deleteProgram = function(t) {}, i.deleteRenderbuffer = function(t) {}, i.deleteShader = function(t) {}, 
        i.deleteTexture = function(t) {}, i.depthFunc = function(t) {}, i.depthMask = function(t) {}, 
        i.depthRange = function(t, e) {}, i.detachShader = function(t, e) {}, i.disable = function(t) {}, 
        i.disableVertexAttribArray = function(t) {}, i.drawArrays = function(t, e, i) {}, 
        i.drawElements = function(t, e, i, r) {}, i.enable = function(t) {}, i.enableVertexAttribArray = function(t) {}, 
        i.finish = function() {}, i.flush = function() {}, i.framebufferRenderbuffer = function(t, e, i, r) {}, 
        i.framebufferTexture2D = function(t, e, i, r, _) {}, i.frontFace = function(t) {
            return null;
        }, i.generateMipmap = function(t) {
            return null;
        }, i.getActiveAttrib = function(t, e) {
            return null;
        }, i.getActiveUniform = function(t, e) {
            return null;
        }, i.getAttribLocation = function(t, e) {
            return 0;
        }, i.getParameter = function(t) {
            return null;
        }, i.getBufferParameter = function(t, e) {
            return null;
        }, i.getError = function() {
            return null;
        }, i.getFramebufferAttachmentParameter = function(t, e, i) {}, i.getProgramParameter = function(t, e) {
            return 0;
        }, i.getProgramInfoLog = function(t) {
            return null;
        }, i.getRenderbufferParameter = function(t, e) {
            return null;
        }, i.getShaderPrecisionFormat = function(t) {
            return null;
        }, i.getShaderParameter = function(t, e) {}, i.getShaderInfoLog = function(t) {
            return null;
        }, i.getShaderSource = function(t) {
            return null;
        }, i.getTexParameter = function(t, e) {}, i.getUniform = function(t, e) {}, i.getUniformLocation = function(t, e) {
            return null;
        }, i.getVertexAttrib = function(t, e) {
            return null;
        }, i.getVertexAttribOffset = function(t, e) {
            return null;
        }, i.hint = function(t, e) {}, i.isBuffer = function(t) {}, i.isEnabled = function(t) {}, 
        i.isFramebuffer = function(t) {}, i.isProgram = function(t) {}, i.isRenderbuffer = function(t) {}, 
        i.isShader = function(t) {}, i.isTexture = function(t) {}, i.lineWidth = function(t) {}, 
        i.linkProgram = function(t) {}, i.pixelStorei = function(t, e) {}, i.polygonOffset = function(t, e) {}, 
        i.readPixels = function(t, e, i, r, _, a, n) {}, i.renderbufferStorage = function(t, e, i, r) {}, 
        i.sampleCoverage = function(t, e) {}, i.scissor = function(t, e, i, r) {}, i.shaderSource = function(t, e) {}, 
        i.stencilFunc = function(t, e, i) {}, i.stencilFuncSeparate = function(t, e, i, r) {}, 
        i.stencilMask = function(t) {}, i.stencilMaskSeparate = function(t, e) {}, i.stencilOp = function(t, e, i) {}, 
        i.stencilOpSeparate = function(t, e, i, r) {}, i.texImage2D = function(t) {}, i.texParameterf = function(t, e, i) {}, 
        i.texParameteri = function(t, e, i) {}, i.texSubImage2D = function(t) {}, i.uniform1f = function(t, e) {}, 
        i.uniform1fv = function(t, e) {}, i.uniform1i = function(t, e) {}, i.uniform1iv = function(t, e) {}, 
        i.uniform2f = function(t, e, i) {}, i.uniform2fv = function(t, e) {}, i.uniform2i = function(t, e, i) {}, 
        i.uniform2iv = function(t, e) {}, i.uniform3f = function(t, e, i, r) {}, i.uniform3fv = function(t, e) {}, 
        i.uniform3i = function(t, e, i, r) {}, i.uniform3iv = function(t, e) {}, i.uniform4f = function(t, e, i, r, _) {}, 
        i.uniform4fv = function(t, e) {}, i.uniform4i = function(t, e, i, r, _) {}, i.uniform4iv = function(t, e) {}, 
        i.uniformMatrix2fv = function(t, e, i) {}, i.uniformMatrix3fv = function(t, e, i) {}, 
        i.uniformMatrix4fv = function(t, e, i) {}, i.useProgram = function(t) {}, i.validateProgram = function(t) {}, 
        i.vertexAttrib1f = function(t, e) {}, i.vertexAttrib1fv = function(t, e) {}, i.vertexAttrib2f = function(t, e, i) {}, 
        i.vertexAttrib2fv = function(t, e) {}, i.vertexAttrib3f = function(t, e, i, r) {}, 
        i.vertexAttrib3fv = function(t, e) {}, i.vertexAttrib4f = function(t, e, i, r, _) {}, 
        i.vertexAttrib4fv = function(t, e) {}, i.vertexAttribPointer = function(t, e, i, r, _, a) {}, 
        i.viewport = function(t, e, i, r) {}, i.configureBackBuffer = function(t, e, i, r, _) {
            void 0 === r && (r = !0), void 0 === _ && (_ = !1);
        }, i.compressedTexImage2D = function(t) {}, i.createVertexArray = function() {
            throw "not implemented";
        }, i.bindVertexArray = function(t) {
            throw "not implemented";
        }, i.deleteVertexArray = function(t) {
            throw "not implemented";
        }, i.isVertexArray = function(t) {
            throw "not implemented";
        }, e.__init__ = function(i) {
            if (e.__init_native(), laya.webgl.WebGLContext._checkExtensions(i), !mt._isWebGL2) {
                t._setupVertexArrayObject && (o.onMiniGame || o.onLimixiu ? t._forceSetupVertexArrayObject(i) : t._setupVertexArrayObject(i));
                var r = (i.rawgl || i).getExtension("OES_vertex_array_object");
                if (r) {
                    console.log("EXT:webgl support OES_vertex_array_object！");
                    var _ = i;
                    _.createVertexArray = function() {
                        return r.createVertexArrayOES();
                    }, _.bindVertexArray = function(t) {
                        r.bindVertexArrayOES(t);
                    }, _.deleteVertexArray = function(t) {
                        r.deleteVertexArrayOES(t);
                    }, _.isVertexArray = function(t) {
                        r.isVertexArrayOES(t);
                    };
                }
            }
        }, e._getExtension = function(t, i) {
            var r = e._extentionVendorPrefixes;
            for (var _ in r) {
                var a = t.getExtension(r[_] + i);
                if (a) return a;
            }
            return null;
        }, e._checkExtensions = function(t) {
            return e._extTextureFilterAnisotropic = e._getExtension(t, "EXT_texture_filter_anisotropic"), 
            e._compressedTextureS3tc = e._getExtension(t, "WEBGL_compressed_texture_s3tc"), 
            e._compressedTexturePvrtc = e._getExtension(t, "WEBGL_compressed_texture_pvrtc"), 
            e._compressedTextureEtc1 = e._getExtension(t, "WEBGL_compressed_texture_etc1"), 
            null;
        }, e.__init_native = function() {
            if (M.isConchApp) {
                var t = e;
                t.useProgram = t.useProgramForNative, t.activeTexture = t.activeTextureForNative, 
                t.bindTexture = t.bindTextureForNative, t.bindVertexArray = t.bindVertexArrayForNative, 
                t.setDepthTest = t.setDepthTestForNative, t.setDepthMask = t.setDepthMaskForNative, 
                t.setDepthFunc = t.setDepthFuncForNative, t.setBlend = t.setBlendForNative, t.setBlendFunc = t.setBlendFuncForNative, 
                t.setCullFace = t.setCullFaceForNative, t.setFrontFace = t.setFrontFaceForNative, 
                t._checkExtensions(o.window.LayaGLContext.instance);
            }
        }, e.useProgram = function(t, i) {
            return e._useProgram !== i && (t.useProgram(i), e._useProgram = i, !0);
        }, e.setDepthTest = function(t, i) {
            i !== e._depthTest && (e._depthTest = i, i ? t.enable(2929) : t.disable(2929));
        }, e.setDepthMask = function(t, i) {
            i !== e._depthMask && (e._depthMask = i, t.depthMask(i));
        }, e.setDepthFunc = function(t, i) {
            i !== e._depthFunc && (e._depthFunc = i, t.depthFunc(i));
        }, e.setBlend = function(t, i) {
            i !== e._blend && (e._blend = i, i ? t.enable(3042) : t.disable(3042));
        }, e.setBlendFunc = function(t, i, r) {
            (i !== e._sFactor || r !== e._dFactor) && (e._sFactor = i, e._dFactor = r, t.blendFunc(i, r));
        }, e.setCullFace = function(t, i) {
            i !== e._cullFace && (e._cullFace = i, i ? t.enable(2884) : t.disable(2884));
        }, e.setFrontFace = function(t, i) {
            i !== e._frontFace && (e._frontFace = i, t.frontFace(i));
        }, e.activeTexture = function(t, i) {
            e._activedTextureID !== i && (t.activeTexture(i), e._activedTextureID = i);
        }, e.bindTexture = function(t, i, r) {
            e._activeTextures[e._activedTextureID - 33984] !== r && (t.bindTexture(i, r), e._activeTextures[e._activedTextureID - 33984] = r);
        }, e.useProgramForNative = function(t, e) {
            return t.useProgram(e), !0;
        }, e.setDepthTestForNative = function(t, e) {
            e ? t.enable(2929) : t.disable(2929);
        }, e.setDepthMaskForNative = function(t, e) {
            t.depthMask(e);
        }, e.setDepthFuncForNative = function(t, e) {
            t.depthFunc(e);
        }, e.setBlendForNative = function(t, e) {
            e ? t.enable(3042) : t.disable(3042);
        }, e.setBlendFuncForNative = function(t, e, i) {
            t.blendFunc(e, i);
        }, e.setCullFaceForNative = function(t, e) {
            e ? t.enable(2884) : t.disable(2884);
        }, e.setFrontFaceForNative = function(t, e) {
            t.frontFace(e);
        }, e.activeTextureForNative = function(t, e) {
            t.activeTexture(e);
        }, e.bindTextureForNative = function(t, e, i) {
            t.bindTexture(e, i);
        }, e.bindVertexArrayForNative = function(t, e) {
            t.bindVertexArray(e);
        }, e.DEPTH_BUFFER_BIT = 256, e.STENCIL_BUFFER_BIT = 1024, e.COLOR_BUFFER_BIT = 16384, 
        e.POINTS = 0, e.LINES = 1, e.LINE_LOOP = 2, e.LINE_STRIP = 3, e.TRIANGLES = 4, e.TRIANGLE_STRIP = 5, 
        e.TRIANGLE_FAN = 6, e.ZERO = 0, e.ONE = 1, e.SRC_COLOR = 768, e.ONE_MINUS_SRC_COLOR = 769, 
        e.SRC_ALPHA = 770, e.ONE_MINUS_SRC_ALPHA = 771, e.DST_ALPHA = 772, e.ONE_MINUS_DST_ALPHA = 773, 
        e.DST_COLOR = 774, e.ONE_MINUS_DST_COLOR = 775, e.SRC_ALPHA_SATURATE = 776, e.FUNC_ADD = 32774, 
        e.BLEND_EQUATION = 32777, e.BLEND_EQUATION_RGB = 32777, e.BLEND_EQUATION_ALPHA = 34877, 
        e.FUNC_SUBTRACT = 32778, e.FUNC_REVERSE_SUBTRACT = 32779, e.BLEND_DST_RGB = 32968, 
        e.BLEND_SRC_RGB = 32969, e.BLEND_DST_ALPHA = 32970, e.BLEND_SRC_ALPHA = 32971, e.CONSTANT_COLOR = 32769, 
        e.ONE_MINUS_CONSTANT_COLOR = 32770, e.CONSTANT_ALPHA = 32771, e.ONE_MINUS_CONSTANT_ALPHA = 32772, 
        e.BLEND_COLOR = 32773, e.ARRAY_BUFFER = 34962, e.ELEMENT_ARRAY_BUFFER = 34963, e.ARRAY_BUFFER_BINDING = 34964, 
        e.ELEMENT_ARRAY_BUFFER_BINDING = 34965, e.STREAM_DRAW = 35040, e.STATIC_DRAW = 35044, 
        e.DYNAMIC_DRAW = 35048, e.BUFFER_SIZE = 34660, e.BUFFER_USAGE = 34661, e.CURRENT_VERTEX_ATTRIB = 34342, 
        e.FRONT = 1028, e.BACK = 1029, e.CULL_FACE = 2884, e.FRONT_AND_BACK = 1032, e.BLEND = 3042, 
        e.DITHER = 3024, e.STENCIL_TEST = 2960, e.DEPTH_TEST = 2929, e.SCISSOR_TEST = 3089, 
        e.POLYGON_OFFSET_FILL = 32823, e.SAMPLE_ALPHA_TO_COVERAGE = 32926, e.SAMPLE_COVERAGE = 32928, 
        e.NO_ERROR = 0, e.INVALID_ENUM = 1280, e.INVALID_VALUE = 1281, e.INVALID_OPERATION = 1282, 
        e.OUT_OF_MEMORY = 1285, e.CW = 2304, e.CCW = 2305, e.LINE_WIDTH = 2849, e.ALIASED_POINT_SIZE_RANGE = 33901, 
        e.ALIASED_LINE_WIDTH_RANGE = 33902, e.CULL_FACE_MODE = 2885, e.FRONT_FACE = 2886, 
        e.DEPTH_RANGE = 2928, e.DEPTH_WRITEMASK = 2930, e.DEPTH_CLEAR_VALUE = 2931, e.DEPTH_FUNC = 2932, 
        e.STENCIL_CLEAR_VALUE = 2961, e.STENCIL_FUNC = 2962, e.STENCIL_FAIL = 2964, e.STENCIL_PASS_DEPTH_FAIL = 2965, 
        e.STENCIL_PASS_DEPTH_PASS = 2966, e.STENCIL_REF = 2967, e.STENCIL_VALUE_MASK = 2963, 
        e.STENCIL_WRITEMASK = 2968, e.STENCIL_BACK_FUNC = 34816, e.STENCIL_BACK_FAIL = 34817, 
        e.STENCIL_BACK_PASS_DEPTH_FAIL = 34818, e.STENCIL_BACK_PASS_DEPTH_PASS = 34819, 
        e.STENCIL_BACK_REF = 36003, e.STENCIL_BACK_VALUE_MASK = 36004, e.STENCIL_BACK_WRITEMASK = 36005, 
        e.VIEWPORT = 2978, e.SCISSOR_BOX = 3088, e.COLOR_CLEAR_VALUE = 3106, e.COLOR_WRITEMASK = 3107, 
        e.UNPACK_ALIGNMENT = 3317, e.PACK_ALIGNMENT = 3333, e.MAX_TEXTURE_SIZE = 3379, e.MAX_VIEWPORT_DIMS = 3386, 
        e.SUBPIXEL_BITS = 3408, e.RED_BITS = 3410, e.GREEN_BITS = 3411, e.BLUE_BITS = 3412, 
        e.ALPHA_BITS = 3413, e.DEPTH_BITS = 3414, e.STENCIL_BITS = 3415, e.POLYGON_OFFSET_UNITS = 10752, 
        e.POLYGON_OFFSET_FACTOR = 32824, e.TEXTURE_BINDING_2D = 32873, e.SAMPLE_BUFFERS = 32936, 
        e.SAMPLES = 32937, e.SAMPLE_COVERAGE_VALUE = 32938, e.SAMPLE_COVERAGE_INVERT = 32939, 
        e.NUM_COMPRESSED_TEXTURE_FORMATS = 34466, e.COMPRESSED_TEXTURE_FORMATS = 34467, 
        e.DONT_CARE = 4352, e.FASTEST = 4353, e.NICEST = 4354, e.GENERATE_MIPMAP_HINT = 33170, 
        e.BYTE = 5120, e.UNSIGNED_BYTE = 5121, e.SHORT = 5122, e.UNSIGNED_SHORT = 5123, 
        e.INT = 5124, e.UNSIGNED_INT = 5125, e.FLOAT = 5126, e.DEPTH_COMPONENT = 6402, e.ALPHA = 6406, 
        e.RGB = 6407, e.RGBA = 6408, e.LUMINANCE = 6409, e.LUMINANCE_ALPHA = 6410, e.UNSIGNED_SHORT_4_4_4_4 = 32819, 
        e.UNSIGNED_SHORT_5_5_5_1 = 32820, e.UNSIGNED_SHORT_5_6_5 = 33635, e.FRAGMENT_SHADER = 35632, 
        e.VERTEX_SHADER = 35633, e.MAX_VERTEX_ATTRIBS = 34921, e.MAX_VERTEX_UNIFORM_VECTORS = 36347, 
        e.MAX_VARYING_VECTORS = 36348, e.MAX_COMBINED_TEXTURE_IMAGE_UNITS = 35661, e.MAX_VERTEX_TEXTURE_IMAGE_UNITS = 35660, 
        e.MAX_TEXTURE_IMAGE_UNITS = 34930, e.MAX_FRAGMENT_UNIFORM_VECTORS = 36349, e.SHADER_TYPE = 35663, 
        e.DELETE_STATUS = 35712, e.LINK_STATUS = 35714, e.VALIDATE_STATUS = 35715, e.ATTACHED_SHADERS = 35717, 
        e.ACTIVE_UNIFORMS = 35718, e.ACTIVE_ATTRIBUTES = 35721, e.SHADING_LANGUAGE_VERSION = 35724, 
        e.CURRENT_PROGRAM = 35725, e.NEVER = 512, e.LESS = 513, e.EQUAL = 514, e.LEQUAL = 515, 
        e.GREATER = 516, e.NOTEQUAL = 517, e.GEQUAL = 518, e.ALWAYS = 519, e.KEEP = 7680, 
        e.REPLACE = 7681, e.INCR = 7682, e.DECR = 7683, e.INVERT = 5386, e.INCR_WRAP = 34055, 
        e.DECR_WRAP = 34056, e.VENDOR = 7936, e.RENDERER = 7937, e.VERSION = 7938, e.NEAREST = 9728, 
        e.LINEAR = 9729, e.NEAREST_MIPMAP_NEAREST = 9984, e.LINEAR_MIPMAP_NEAREST = 9985, 
        e.NEAREST_MIPMAP_LINEAR = 9986, e.LINEAR_MIPMAP_LINEAR = 9987, e.TEXTURE_MAG_FILTER = 10240, 
        e.TEXTURE_MIN_FILTER = 10241, e.TEXTURE_WRAP_S = 10242, e.TEXTURE_WRAP_T = 10243, 
        e.TEXTURE_2D = 3553, e.TEXTURE_3D = 32879, e.TEXTURE = 5890, e.TEXTURE_CUBE_MAP = 34067, 
        e.TEXTURE_BINDING_CUBE_MAP = 34068, e.TEXTURE_CUBE_MAP_POSITIVE_X = 34069, e.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070, 
        e.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071, e.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072, e.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073, 
        e.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074, e.MAX_CUBE_MAP_TEXTURE_SIZE = 34076, e.TEXTURE0 = 33984, 
        e.TEXTURE1 = 33985, e.TEXTURE2 = 33986, e.TEXTURE3 = 33987, e.TEXTURE4 = 33988, 
        e.TEXTURE5 = 33989, e.TEXTURE6 = 33990, e.TEXTURE7 = 33991, e.TEXTURE8 = 33992, 
        e.TEXTURE9 = 33993, e.TEXTURE10 = 33994, e.TEXTURE11 = 33995, e.TEXTURE12 = 33996, 
        e.TEXTURE13 = 33997, e.TEXTURE14 = 33998, e.TEXTURE15 = 33999, e.TEXTURE16 = 34e3, 
        e.TEXTURE17 = 34001, e.TEXTURE18 = 34002, e.TEXTURE19 = 34003, e.TEXTURE20 = 34004, 
        e.TEXTURE21 = 34005, e.TEXTURE22 = 34006, e.TEXTURE23 = 34007, e.TEXTURE24 = 34008, 
        e.TEXTURE25 = 34009, e.TEXTURE26 = 34010, e.TEXTURE27 = 34011, e.TEXTURE28 = 34012, 
        e.TEXTURE29 = 34013, e.TEXTURE30 = 34014, e.TEXTURE31 = 34015, e.ACTIVE_TEXTURE = 34016, 
        e.REPEAT = 10497, e.CLAMP_TO_EDGE = 33071, e.MIRRORED_REPEAT = 33648, e.FLOAT_VEC2 = 35664, 
        e.FLOAT_VEC3 = 35665, e.FLOAT_VEC4 = 35666, e.INT_VEC2 = 35667, e.INT_VEC3 = 35668, 
        e.INT_VEC4 = 35669, e.BOOL = 35670, e.BOOL_VEC2 = 35671, e.BOOL_VEC3 = 35672, e.BOOL_VEC4 = 35673, 
        e.FLOAT_MAT2 = 35674, e.FLOAT_MAT3 = 35675, e.FLOAT_MAT4 = 35676, e.SAMPLER_2D = 35678, 
        e.SAMPLER_CUBE = 35680, e.VERTEX_ATTRIB_ARRAY_ENABLED = 34338, e.VERTEX_ATTRIB_ARRAY_SIZE = 34339, 
        e.VERTEX_ATTRIB_ARRAY_STRIDE = 34340, e.VERTEX_ATTRIB_ARRAY_TYPE = 34341, e.VERTEX_ATTRIB_ARRAY_NORMALIZED = 34922, 
        e.VERTEX_ATTRIB_ARRAY_POINTER = 34373, e.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 34975, 
        e.COMPILE_STATUS = 35713, e.LOW_FLOAT = 36336, e.MEDIUM_FLOAT = 36337, e.HIGH_FLOAT = 36338, 
        e.LOW_INT = 36339, e.MEDIUM_INT = 36340, e.HIGH_INT = 36341, e.FRAMEBUFFER = 36160, 
        e.RENDERBUFFER = 36161, e.RGBA4 = 32854, e.RGB5_A1 = 32855, e.RGB565 = 36194, e.DEPTH_COMPONENT16 = 33189, 
        e.STENCIL_INDEX = 6401, e.STENCIL_INDEX8 = 36168, e.DEPTH_STENCIL = 34041, e.RENDERBUFFER_WIDTH = 36162, 
        e.RENDERBUFFER_HEIGHT = 36163, e.RENDERBUFFER_INTERNAL_FORMAT = 36164, e.RENDERBUFFER_RED_SIZE = 36176, 
        e.RENDERBUFFER_GREEN_SIZE = 36177, e.RENDERBUFFER_BLUE_SIZE = 36178, e.RENDERBUFFER_ALPHA_SIZE = 36179, 
        e.RENDERBUFFER_DEPTH_SIZE = 36180, e.RENDERBUFFER_STENCIL_SIZE = 36181, e.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 36048, 
        e.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 36049, e.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 36050, 
        e.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 36051, e.COLOR_ATTACHMENT0 = 36064, 
        e.DEPTH_ATTACHMENT = 36096, e.STENCIL_ATTACHMENT = 36128, e.DEPTH_STENCIL_ATTACHMENT = 33306, 
        e.NONE = 0, e.FRAMEBUFFER_COMPLETE = 36053, e.FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 36054, 
        e.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 36055, e.FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 36057, 
        e.FRAMEBUFFER_UNSUPPORTED = 36061, e.FRAMEBUFFER_BINDING = 36006, e.RENDERBUFFER_BINDING = 36007, 
        e.MAX_RENDERBUFFER_SIZE = 34024, e.INVALID_FRAMEBUFFER_OPERATION = 1286, e.UNPACK_FLIP_Y_WEBGL = 37440, 
        e.UNPACK_PREMULTIPLY_ALPHA_WEBGL = 37441, e.CONTEXT_LOST_WEBGL = 37442, e.UNPACK_COLORSPACE_CONVERSION_WEBGL = 37443, 
        e.BROWSER_DEFAULT_WEBGL = 37444, e._extTextureFilterAnisotropic = null, e._compressedTextureS3tc = null, 
        e._compressedTexturePvrtc = null, e._compressedTextureEtc1 = null, e._glTextureIDs = [ 33984, 33985, 33986, 33987, 33988, 33989, 33990, 33991 ], 
        e._useProgram = null, e._depthTest = !0, e._depthMask = !0, e._blend = !1, e._cullFace = !1, 
        e._activedTextureID = 33984, r(e, [ "_extentionVendorPrefixes", function() {
            return this._extentionVendorPrefixes = [ "", "WEBKIT_", "MOZ_" ];
        }, "_activeTextures", function() {
            return this._activeTextures = new Array(8);
        }, "_depthFunc", function() {
            return this._depthFunc = 513;
        }, "_sFactor", function() {
            return this._sFactor = 1;
        }, "_dFactor", function() {
            return this._dFactor = 0;
        }, "_frontFace", function() {
            return this._frontFace = 2305;
        } ]), e;
    }()), ht = (function() {
        function t() {
            this._graphicsCmdEncoder = null, this._paramData = new ParamData(16, !0);
        }
        _(t, "laya.layagl.cmdNative.ClipRectCmdNative");
        var e = t.prototype;
        e.recover = function() {
            C.recover("ClipRectCmd", this);
        }, a(0, e, "cmdID", function() {
            return "ClipRect";
        }), a(0, e, "width", function() {
            return 0;
        }, function(t) {}), a(0, e, "x", function() {
            return 0;
        }, function(t) {}), a(0, e, "y", function() {
            return 0;
        }, function(t) {}), a(0, e, "height", function() {
            return 0;
        }, function(t) {}), t.create = function(e, i, r, _) {
            var a = C.getItemByClass("ClipRectCmd", t);
            a._graphicsCmdEncoder = this._commandEncoder;
            var n = a._graphicsCmdEncoder, s = a._paramData._float32Data;
            s[0] = e, s[1] = i, s[2] = r, s[3] = _;
            var o = a._paramData.getPtrID();
            return j.syncBufferToRenderThread(a._paramData), n.setClipValueEx(Nt.GLOBALVALUE_CLIP_MAT_DIR, Nt.GLOBALVALUE_CLIP_MAT_POS, Nt.GLOBALVALUE_MATRIX32, o), 
            j.syncBufferToRenderThread(n), a;
        }, t.ID = "ClipRect";
    }(), function() {
        function t() {
            this._graphicsCmdEncoder = null, this._paramData = null, this._x = 0, this._y = 0, 
            this._points = [], this._lineColor = null, this._lineWidth = NaN, this.lastOriX = 0, 
            this.lastOriY = 0, this.tArray = [], this._vertNum = 0, this.ibBuffer = null, this.vbBuffer = null, 
            this._ibSize = 0, this._vbSize = 0, this._ibArray = [], this._vbArray = [];
        }
        _(t, "laya.layagl.cmdNative.DrawCurvesCmdNative");
        var e = t.prototype;
        e._getPoints = function(t) {
            var e = [];
            this._points.push(t[0]), this._points.push(t[1]);
            for (var i = 2, r = t.length; i < r; ) this._quadraticCurveTo(e, t[i++], t[i++], t[i++], t[i++]);
            return e;
        }, e._quadraticCurveTo = function(t, e, i, r, _) {
            var a = n.I;
            0 == this.tArray.length ? (this.lastOriX = this._points[0], this.lastOriY = this._points[1]) : (this.lastOriX = this.tArray[this.tArray.length - 2], 
            this.lastOriY = this.tArray[this.tArray.length - 1]), this.tArray = a.getBezierPoints([ this.lastOriX, this.lastOriY, e, i, r, _ ], 30, 2);
            for (var s = 2, o = this.tArray.length; s < o; s++) t.push(this.tArray[s]);
        }, e.recover = function() {
            this._lineColor = null, this._points.length = 0, this.tArray.length = 0, this._ibArray.length = 0, 
            this._vbArray.length = 0, C.recover("DrawCurvesCmd", this);
        }, a(0, e, "lineColor", function() {
            return this._lineColor;
        }, function(t) {
            this._lineColor = t;
            for (var e = l.create(this._lineColor).numColor, i = this.vbBuffer._int32Data, r = 0, _ = 0; _ < this._vertNum; _++) r++, 
            r++, i[r++] = e;
            j.syncBufferToRenderThread(this.vbBuffer);
        }), a(0, e, "points", function() {
            return this._points;
        }, function(e) {
            this._points.length = 0, this.lastOriX = 0, this.lastOriY = 0, this._points = this._getPoints(e), 
            this._ibArray.length = 0, this._vbArray.length = 0, yt.createLine2(this._points, this._ibArray, this.lineWidth, 0, this._vbArray, !1);
            var i = l.create(this._lineColor).numColor;
            this._vertNum = this._points.length;
            var r = this._vertNum;
            (!this.vbBuffer || this.vbBuffer.getByteLength() < 3 * this._vertNum * 4) && (this.vbBuffer = new ParamData(3 * r * 4, !0)), 
            this._vbSize = 3 * this._vertNum * 4;
            for (var _ = this.vbBuffer._float32Data, a = this.vbBuffer._int32Data, n = 0, s = 0; s < this._vertNum; s++) _[n++] = this._vbArray[2 * s] + this.x, 
            _[n++] = this._vbArray[2 * s + 1] + this.y, a[n++] = i;
            (!this.ibBuffer || this.ibBuffer.getByteLength() < 3 * (this._vertNum - 2) * 2) && (this.ibBuffer = new ParamData(3 * (r - 2) * 2, !0, !0)), 
            this._ibSize = 3 * (this._vertNum - 2) * 2;
            for (var o = this.ibBuffer._int16Data, h = 0; h < 3 * (this._vertNum - 2); h++) o[h] = this._ibArray[h];
            (a = this._paramData._int32Data)[t._PARAM_VB_SIZE_POS_] = this._vbSize, a[t._PARAM_IB_SIZE_POS_] = this._ibSize, 
            j.syncBufferToRenderThread(this.ibBuffer), j.syncBufferToRenderThread(this.vbBuffer), 
            j.syncBufferToRenderThread(this._paramData);
        }), a(0, e, "cmdID", function() {
            return "DrawCurves";
        }), a(0, e, "x", function() {
            return this._x;
        }, function(t) {
            this._x = t;
            for (var e = this.vbBuffer._float32Data, i = 0, r = 0; r < this._vertNum; r++) e[i++] = this._vbArray[2 * r] + this._x, 
            i++, i++;
            j.syncBufferToRenderThread(this.vbBuffer);
        }), a(0, e, "y", function() {
            return this._y;
        }, function(t) {
            this._y = t;
            for (var e = this.vbBuffer._float32Data, i = 0, r = 0; r < this._vertNum; r++) i++, 
            e[i++] = this._vbArray[2 * r + 1] + this._y, i++;
            j.syncBufferToRenderThread(this.vbBuffer);
        }), a(0, e, "lineWidth", function() {
            return this._lineWidth;
        }, function(t) {
            this._lineWidth = t, this._ibArray.length = 0, this._vbArray.length = 0, yt.createLine2(this._points, this._ibArray, this._lineWidth, 0, this._vbArray, !1);
            for (var e = this.vbBuffer._float32Data, i = 0, r = 0; r < this._vertNum; r++) e[i++] = this._vbArray[2 * r] + this.x, 
            e[i++] = this._vbArray[2 * r + 1] + this.y, i++;
            j.syncBufferToRenderThread(this.vbBuffer);
        }), t.create = function(e, i, r, _, a) {
            var n = C.getItemByClass("DrawCurvesCmd", t);
            n._graphicsCmdEncoder = this._commandEncoder, t._DRAW_CURVES_CMD_ENCODER_ || ((t._DRAW_CURVES_CMD_ENCODER_ = j.instance.createCommandEncoder(152, 32, !0)).useProgramEx(Nt.PROGRAMEX_DRAWVG), 
            t._DRAW_CURVES_CMD_ENCODER_.useVDO(Nt.VDO_MESHVG), t._DRAW_CURVES_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_VIEWS, 0), 
            t._DRAW_CURVES_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_DIR, 1), t._DRAW_CURVES_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_POS, 2), 
            t._DRAW_CURVES_CMD_ENCODER_.setMeshExByParamData(4 * t._PARAM_VB_POS_, 4 * t._PARAM_VB_OFFSET_POS_, 4 * t._PARAM_VB_SIZE_POS_, 4 * t._PARAM_IB_POS_, 4 * t._PARAM_IB_OFFSET_POS_, 4 * t._PARAM_IB_SIZE_POS_, 4 * t._PARAM_INDEX_ELEMENT_OFFSET_POS_), 
            t._DRAW_CURVES_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_MATRIX32, 0, 7), t._DRAW_CURVES_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_DRAWTEXTURE_COLOR, 1, 15), 
            j.syncBufferToRenderThread(t._DRAW_CURVES_CMD_ENCODER_)), n._paramData || (n._paramData = new ParamData(32, !0)), 
            n._x = e, n._y = i, n._lineColor = _, n._lineWidth = a, n._points = n._getPoints(r), 
            yt.createLine2(n._points, n._ibArray, a, 0, n._vbArray, !1);
            var s = l.create(_).numColor;
            n._vertNum = n._points.length;
            var o = n._vertNum;
            (!n.vbBuffer || n.vbBuffer.getByteLength() < 3 * n._vertNum * 4) && (n.vbBuffer = new ParamData(3 * o * 4, !0)), 
            n._vbSize = 3 * n._vertNum * 4;
            for (var h = n.vbBuffer._float32Data, u = n.vbBuffer._int32Data, c = 0, f = 0; f < n._vertNum; f++) h[c++] = n._vbArray[2 * f] + e, 
            h[c++] = n._vbArray[2 * f + 1] + i, u[c++] = s;
            (!n.ibBuffer || n.ibBuffer.getByteLength() < 3 * (n._vertNum - 2) * 2) && (n.ibBuffer = new ParamData(3 * (o - 2) * 2, !0, !0)), 
            n._ibSize = 3 * (n._vertNum - 2) * 2;
            for (var d = n.ibBuffer._int16Data, A = 0; A < 3 * (n._vertNum - 2); A++) d[A] = n._ibArray[A];
            n._paramData._float32Data;
            return u = n._paramData._int32Data, u[0] = 1, u[t._PARAM_VB_POS_] = n.vbBuffer.getPtrID(), 
            u[t._PARAM_IB_POS_] = n.ibBuffer.getPtrID(), u[t._PARAM_VB_SIZE_POS_] = n._vbSize, 
            u[t._PARAM_IB_SIZE_POS_] = n._ibSize, u[t._PARAM_VB_OFFSET_POS_] = 0, u[t._PARAM_IB_OFFSET_POS_] = 0, 
            u[t._PARAM_INDEX_ELEMENT_OFFSET_POS_] = 0, j.syncBufferToRenderThread(n.vbBuffer), 
            j.syncBufferToRenderThread(n.ibBuffer), j.syncBufferToRenderThread(n._paramData), 
            n._graphicsCmdEncoder.useCommandEncoder(t._DRAW_CURVES_CMD_ENCODER_.getPtrID(), n._paramData.getPtrID(), -1), 
            j.syncBufferToRenderThread(n._graphicsCmdEncoder), n;
        }, t.ID = "DrawCurves", t._DRAW_CURVES_CMD_ENCODER_ = null, t._PARAM_VB_POS_ = 1, 
        t._PARAM_IB_POS_ = 2, t._PARAM_VB_SIZE_POS_ = 3, t._PARAM_IB_SIZE_POS_ = 4, t._PARAM_VB_OFFSET_POS_ = 5, 
        t._PARAM_IB_OFFSET_POS_ = 6, t._PARAM_INDEX_ELEMENT_OFFSET_POS_ = 7;
    }(), function() {
        function t() {
            this.char = "", this.tex = null, this.deleted = !1, this.pos = 0, this.width = 0, 
            this.height = 0, this.bmpWidth = 0, this.bmpHeight = 0, this.orix = 0, this.oriy = 0, 
            this.touchTick = 0, this.isSpace = !1, this.uv = new Array(8);
        }
        _(t, "laya.webgl.resource.CharRenderInfo");
        return t.prototype.touch = function() {
            var t = F.loopCount;
            this.touchTick != t && this.tex.touchRect(this, t), this.touchTick = t;
        }, t;
    }()), lt = function() {
        function t() {
            this._graphicsCmdEncoder = null, this._index = 0, this._paramData = null, this._texture = null, 
            this._x = NaN, this._y = NaN, this._width = NaN, this._height = NaN;
        }
        _(t, "laya.layagl.cmdNative.DrawCanvasCmdNative");
        var e = t.prototype;
        return e.recover = function() {
            this._graphicsCmdEncoder = null, C.recover("DrawCanvasCmd", this);
        }, a(0, e, "cmdID", function() {
            return "DrawCanvas";
        }), a(0, e, "y", function() {
            return this._y;
        }, function(e) {
            this._y = e;
            var i = this._paramData._float32Data;
            i[t._PARAM_VB_POS_ + 1] = this._y, i[t._PARAM_VB_POS_ + 7] = this._y, i[t._PARAM_VB_POS_ + 13] = this._y + this._height, 
            i[t._PARAM_VB_POS_ + 19] = this._y + this._height, i[t._PARAM_CLIP_SIZE + 1] = e + 16, 
            j.syncBufferToRenderThread(this._paramData);
        }), a(0, e, "texture", function() {
            return this._texture;
        }, function(e) {
            this._texture = e, this._paramData._int32Data[t._PARAM_TEXTURE_POS_] = this._texture._getSource().id;
            var i = this._paramData._float32Data, r = le.flipyuv;
            i[t._PARAM_VB_POS_ + 2] = r[0], i[t._PARAM_VB_POS_ + 3] = r[1], i[t._PARAM_VB_POS_ + 8] = r[2], 
            i[t._PARAM_VB_POS_ + 9] = r[3], i[t._PARAM_VB_POS_ + 14] = r[4], i[t._PARAM_VB_POS_ + 15] = r[5], 
            i[t._PARAM_VB_POS_ + 20] = r[6], i[t._PARAM_VB_POS_ + 21] = r[7], j.syncBufferToRenderThread(this._paramData);
        }), a(0, e, "width", function() {
            return this._width;
        }, function(e) {
            this._width = e;
            var i = this._paramData._float32Data;
            i[t._PARAM_VB_POS_] = this._x, i[t._PARAM_VB_POS_ + 6] = this._x + this._width, 
            i[t._PARAM_VB_POS_ + 12] = this._x + this._width, i[t._PARAM_VB_POS_ + 18] = this._x, 
            i[t._PARAM_CLIP_SIZE + 2] = e - 32, j.syncBufferToRenderThread(this._paramData);
        }), a(0, e, "x", function() {
            return this._x;
        }, function(e) {
            this._x = e;
            var i = this._paramData._float32Data;
            i[t._PARAM_VB_POS_] = this._x, i[t._PARAM_VB_POS_ + 6] = this._x + this._width, 
            i[t._PARAM_VB_POS_ + 12] = this._x + this._width, i[t._PARAM_VB_POS_ + 18] = this._x, 
            i[t._PARAM_CLIP_SIZE] = e + 16, j.syncBufferToRenderThread(this._paramData);
        }), a(0, e, "height", function() {
            return this._height;
        }, function(e) {
            this._height = e;
            var i = this._paramData._float32Data;
            i[t._PARAM_VB_POS_ + 1] = this._y, i[t._PARAM_VB_POS_ + 7] = this._y, i[t._PARAM_VB_POS_ + 13] = this._y + this._height, 
            i[t._PARAM_VB_POS_ + 19] = this._y + this._height, i[t._PARAM_CLIP_SIZE + 3] = e - 32, 
            j.syncBufferToRenderThread(this._paramData);
        }), t.create = function(e, i, r, _, a) {
            var n = C.getItemByClass("DrawCanvasCmd", t);
            n._graphicsCmdEncoder = this._commandEncoder, t.createCommandEncoder(), n._paramData || (n._paramData = new ParamData(132, !0)), 
            n._texture = e, n._x = i, n._y = r, n._width = _, n._height = a, t.setParamData(n._paramData, e, i, r, _, a);
            var s = t._DRAW_CANVAS_CMD_ENCODER_.getPtrID(), o = n._paramData.getPtrID();
            return n._graphicsCmdEncoder.useCommandEncoder(s, o, -1), j.syncBufferToRenderThread(n._graphicsCmdEncoder), 
            n;
        }, t.createCommandEncoder = function() {
            t._DRAW_CANVAS_CMD_ENCODER_ || ((t._DRAW_CANVAS_CMD_ENCODER_ = j.instance.createCommandEncoder(172, 32, !0)).blendFuncByGlobalValue(Nt.GLOBALVALUE_BLENDFUNC_SRC, Nt.GLOBALVALUE_BLENDFUNC_DEST), 
            t._DRAW_CANVAS_CMD_ENCODER_.useProgramEx(Nt.PROGRAMEX_DRAWTEXTURE), t._DRAW_CANVAS_CMD_ENCODER_.useVDO(Nt.VDO_MESHQUADTEXTURE), 
            t._DRAW_CANVAS_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_VIEWS, 0), t._DRAW_CANVAS_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_DIR, 1), 
            t._DRAW_CANVAS_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_POS, 2), t._DRAW_CANVAS_CMD_ENCODER_.uniformTextureByParamData(0, 4, 4 * t._PARAM_TEXTURE_POS_), 
            t._DRAW_CANVAS_CMD_ENCODER_.setRectMeshByParamData(12, 4 * t._PARAM_VB_POS_, 16), 
            t._DRAW_CANVAS_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_MATRIX32, 0, 7), t._DRAW_CANVAS_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_DRAWTEXTURE_COLOR, 1, 15), 
            j.syncBufferToRenderThread(t._DRAW_CANVAS_CMD_ENCODER_));
        }, t.setParamData = function(e, i, r, _, a, n) {
            var s = e._float32Data, o = e._int32Data;
            o[0] = 3, o[1] = 33984, o[t._PARAM_TEXTURE_POS_] = i._getSource().id, o[3] = 1, 
            o[4] = 96;
            var h = 0 != a ? a : i.width, l = 0 != n ? n : i.height, u = le.flipyuv, c = t._PARAM_VB_POS_;
            s[c++] = r, s[c++] = _, s[c++] = u[0], s[c++] = u[1], o[c++] = 4294967295, o[c++] = 4294967295, 
            s[c++] = r + h, s[c++] = _, s[c++] = u[2], s[c++] = u[3], o[c++] = 4294967295, o[c++] = 4294967295, 
            s[c++] = r + h, s[c++] = _ + l, s[c++] = u[4], s[c++] = u[5], o[c++] = 4294967295, 
            o[c++] = 4294967295, s[c++] = r, s[c++] = _ + l, s[c++] = u[6], s[c++] = u[7], o[c++] = 4294967295, 
            o[c++] = 4294967295, s[t._PARAM_CLIP_SIZE] = r + 16, s[t._PARAM_CLIP_SIZE + 1] = _ + 16, 
            s[t._PARAM_CLIP_SIZE + 2] = a - 32, s[t._PARAM_CLIP_SIZE + 3] = n - 32, j.syncBufferToRenderThread(e);
        }, t.ID = "DrawCanvas", t._DRAW_CANVAS_CMD_ENCODER_ = null, t._PARAM_TEXTURE_POS_ = 2, 
        t._PARAM_VB_POS_ = 5, t._PARAM_CLIP_SIZE = 29, t;
    }(), ut = function() {
        function t() {
            this._mat = new v();
        }
        _(t, "laya.webgl.canvas.save.SaveTranslate");
        var e = t.prototype;
        return i.imps(e, {
            "laya.webgl.canvas.save.ISaveData": !0
        }), e.isSaveMark = function() {
            return !1;
        }, e.restore = function(e) {
            this._mat.copyTo(e._curMat), t.POOL[t.POOL._length++] = this;
        }, t.save = function(e) {
            var i = t.POOL, r = i._length > 0 ? i[--i._length] : new t();
            e._curMat.copyTo(r._mat);
            var _ = e._save;
            _[_._length++] = r;
        }, t.POOL = z._createArray(), t;
    }(), ct = (function() {
        function t() {
            this._graphicsCmdEncoder = null, this._matrix = null, this._paramData = new ParamData(32, !0);
        }
        _(t, "laya.layagl.cmdNative.TransformCmdNative");
        var e = t.prototype;
        e.recover = function() {
            this._matrix = null, C.recover("TransformCmd", this);
        }, a(0, e, "cmdID", function() {
            return "Transform";
        }), a(0, e, "matrix", function() {
            return this._matrix;
        }, function(t) {
            this._matrix = t;
            var e = this._paramData._float32Data;
            e[0] = this._matrix.a, e[1] = this._matrix.b, e[2] = this._matrix.c, e[3] = this._matrix.d, 
            e[4] = this._matrix.tx, e[5] = this._matrix.ty, j.syncBufferToRenderThread(this._paramData);
        }), a(0, e, "pivotX", function() {
            return this._paramData._float32Data[6];
        }, function(t) {
            this._paramData._float32Data[6] = t, j.syncBufferToRenderThread(this._paramData);
        }), a(0, e, "pivotY", function() {
            return this._paramData._float32Data[7];
        }, function(t) {
            this._paramData._float32Data[7] = t, j.syncBufferToRenderThread(this._paramData);
        }), t.create = function(e, i, r) {
            var _ = C.getItemByClass("TransformCmd", t), a = _._graphicsCmdEncoder = this._commandEncoder, n = _._paramData._float32Data;
            n[0] = e.a, n[1] = e.b, n[2] = e.c, n[3] = e.d, n[4] = e.tx, n[5] = e.ty, n[6] = i, 
            n[7] = r, _._matrix = e;
            var s = _._paramData.getPtrID();
            return j.syncBufferToRenderThread(_._paramData), a.setGlobalValueEx(Nt.GLOBALVALUE_MATRIX32, 14, s, 0), 
            j.syncBufferToRenderThread(a), _;
        }, t.ID = "Transform";
    }(), function() {
        function t() {}
        return _(t, "laya.layagl.ConchCmdReplace"), t.__init__ = function() {
            var t, e = laya.display.cmd, i = laya.layagl.cmdNative;
            for (t in e) i[t + "Native"] && (e[t].create = i[t + "Native"].create);
        }, t;
    }()), ft = function() {
        function t() {
            this._mesh = null, this._startIdx = 0, this._numEle = 0, this.shaderValue = null, 
            this.blendType = 0, this._ref = 1, this.srcRT = null, this._key = new Lt();
        }
        _(t, "laya.webgl.submit.SubmitTarget");
        var e = t.prototype;
        return i.imps(e, {
            "laya.webgl.submit.ISubmit": !0
        }), e.renderSubmit = function() {
            var t = mt.mainContext;
            this._mesh.useMesh(t);
            var e = this.srcRT;
            return e && (this.shaderValue.texture = e._getSource(), this.shaderValue.upload(), 
            this.blend(), F.renderBatch++, F.trianglesFaces += this._numEle / 3, mt.mainContext.drawElements(4, this._numEle, 5123, this._startIdx)), 
            1;
        }, e.blend = function() {
            if (Rt.activeBlendFunction !== Rt.fns[this.blendType]) {
                var t = mt.mainContext;
                t.enable(3042), Rt.fns[this.blendType](t), Rt.activeBlendFunction = Rt.fns[this.blendType];
            }
        }, e.getRenderType = function() {
            return 0;
        }, e.releaseRender = function() {
            if (--this._ref < 1) {
                var e = t.POOL;
                e[e._length++] = this;
            }
        }, e.reUse = function(t, e) {
            return this._startIdx = e, this._ref++, e;
        }, t.create = function(e, i, r, _) {
            var a = t.POOL._length ? t.POOL[--t.POOL._length] : new t();
            if (a._mesh = i, a.srcRT = _, a._startIdx = i.indexNum * Et.BYTES_PIDX, a._ref = 1, 
            a._key.clear(), a._numEle = 0, a.blendType = e._nBlendType, a._key.blendShader = a.blendType, 
            a.shaderValue = r, a.shaderValue.setValue(e._shader2D), e._colorFiler) {
                var n = e._colorFiler;
                r.defines.add(n.type), r.colorMat = n._mat, r.colorAlpha = n._alpha;
            }
            return a;
        }, t.POOL = (t.POOL = [], t.POOL._length = 0, t.POOL), t;
    }(), dt = function() {
        function t() {}
        return _(t, "laya.webgl.shapes.Earcut"), t.earcut = function(e, i, r) {
            r = r || 2;
            var _ = i && i.length, a = _ ? i[0] * r : e.length, n = t.linkedList(e, 0, a, r, !0), s = [];
            if (!n) return s;
            var o, h, l, u, c, f, d;
            if (_ && (n = t.eliminateHoles(e, i, n, r)), e.length > 80 * r) {
                o = l = e[0], h = u = e[1];
                for (var A = r; A < a; A += r) c = e[A], f = e[A + 1], c < o && (o = c), f < h && (h = f), 
                c > l && (l = c), f > u && (u = f);
                d = 0 !== (d = Math.max(l - o, u - h)) ? 1 / d : 0;
            }
            return t.earcutLinked(n, s, r, o, h, d), s;
        }, t.linkedList = function(e, i, r, _, a) {
            var n, s;
            if (a === t.signedArea(e, i, r, _) > 0) for (n = i; n < r; n += _) s = t.insertNode(n, e[n], e[n + 1], s); else for (n = r - _; n >= i; n -= _) s = t.insertNode(n, e[n], e[n + 1], s);
            return s && t.equals(s, s.next) && (t.removeNode(s), s = s.next), s;
        }, t.filterPoints = function(e, i) {
            if (!e) return e;
            i || (i = e);
            var r, _ = e;
            do {
                if (r = !1, _.steiner || !t.equals(_, _.next) && 0 !== t.area(_.prev, _, _.next)) _ = _.next; else {
                    if (t.removeNode(_), (_ = i = _.prev) === _.next) break;
                    r = !0;
                }
            } while (r || _ !== i);
            return i;
        }, t.earcutLinked = function(e, i, r, _, a, n, s) {
            if (e) {
                !s && n && t.indexCurve(e, _, a, n);
                for (var o, h, l = e; e.prev !== e.next; ) if (o = e.prev, h = e.next, n ? t.isEarHashed(e, _, a, n) : t.isEar(e)) i.push(o.i / r), 
                i.push(e.i / r), i.push(h.i / r), t.removeNode(e), e = h.next, l = h.next; else if ((e = h) === l) {
                    s ? 1 === s ? (e = t.cureLocalIntersections(e, i, r), t.earcutLinked(e, i, r, _, a, n, 2)) : 2 === s && t.splitEarcut(e, i, r, _, a, n) : t.earcutLinked(t.filterPoints(e, null), i, r, _, a, n, 1);
                    break;
                }
            }
        }, t.isEar = function(e) {
            var i = e.prev, r = e, _ = e.next;
            if (t.area(i, r, _) >= 0) return !1;
            for (var a = e.next.next; a !== e.prev; ) {
                if (t.pointInTriangle(i.x, i.y, r.x, r.y, _.x, _.y, a.x, a.y) && t.area(a.prev, a, a.next) >= 0) return !1;
                a = a.next;
            }
            return !0;
        }, t.isEarHashed = function(e, i, r, _) {
            var a = e.prev, n = e, s = e.next;
            if (t.area(a, n, s) >= 0) return !1;
            for (var o = a.x < n.x ? a.x < s.x ? a.x : s.x : n.x < s.x ? n.x : s.x, h = a.y < n.y ? a.y < s.y ? a.y : s.y : n.y < s.y ? n.y : s.y, l = a.x > n.x ? a.x > s.x ? a.x : s.x : n.x > s.x ? n.x : s.x, u = a.y > n.y ? a.y > s.y ? a.y : s.y : n.y > s.y ? n.y : s.y, c = t.zOrder(o, h, i, r, _), f = t.zOrder(l, u, i, r, _), d = e.nextZ; d && d.z <= f; ) {
                if (d !== e.prev && d !== e.next && t.pointInTriangle(a.x, a.y, n.x, n.y, s.x, s.y, d.x, d.y) && t.area(d.prev, d, d.next) >= 0) return !1;
                d = d.nextZ;
            }
            for (d = e.prevZ; d && d.z >= c; ) {
                if (d !== e.prev && d !== e.next && t.pointInTriangle(a.x, a.y, n.x, n.y, s.x, s.y, d.x, d.y) && t.area(d.prev, d, d.next) >= 0) return !1;
                d = d.prevZ;
            }
            return !0;
        }, t.cureLocalIntersections = function(e, i, r) {
            var _ = e;
            do {
                var a = _.prev, n = _.next.next;
                !t.equals(a, n) && t.intersects(a, _, _.next, n) && t.locallyInside(a, n) && t.locallyInside(n, a) && (i.push(a.i / r), 
                i.push(_.i / r), i.push(n.i / r), t.removeNode(_), t.removeNode(_.next), _ = e = n), 
                _ = _.next;
            } while (_ !== e);
            return _;
        }, t.splitEarcut = function(e, i, r, _, a, n) {
            var s = e;
            do {
                for (var o = s.next.next; o !== s.prev; ) {
                    if (s.i !== o.i && t.isValidDiagonal(s, o)) {
                        var h = t.splitPolygon(s, o);
                        return s = t.filterPoints(s, s.next), h = t.filterPoints(h, h.next), t.earcutLinked(s, i, r, _, a, n), 
                        void t.earcutLinked(h, i, r, _, a, n);
                    }
                    o = o.next;
                }
                s = s.next;
            } while (s !== e);
        }, t.eliminateHoles = function(e, i, r, _) {
            var a, n, s, o, h, l = [];
            for (a = 0, n = i.length; a < n; a++) s = i[a] * _, o = a < n - 1 ? i[a + 1] * _ : e.length, 
            (h = t.linkedList(e, s, o, _, !1)) === h.next && (h.steiner = !0), l.push(t.getLeftmost(h));
            for (l.sort(t.compareX), a = 0; a < l.length; a++) t.eliminateHole(l[a], r), r = t.filterPoints(r, r.next);
            return r;
        }, t.compareX = function(t, e) {
            return t.x - e.x;
        }, t.eliminateHole = function(e, i) {
            if (i = t.findHoleBridge(e, i)) {
                var r = t.splitPolygon(i, e);
                t.filterPoints(r, r.next);
            }
        }, t.findHoleBridge = function(e, i) {
            var r, _ = i, a = e.x, n = e.y, s = -1 / 0;
            do {
                if (n <= _.y && n >= _.next.y && _.next.y !== _.y) {
                    var o = _.x + (n - _.y) * (_.next.x - _.x) / (_.next.y - _.y);
                    if (o <= a && o > s) {
                        if (s = o, o === a) {
                            if (n === _.y) return _;
                            if (n === _.next.y) return _.next;
                        }
                        r = _.x < _.next.x ? _ : _.next;
                    }
                }
                _ = _.next;
            } while (_ !== i);
            if (!r) return null;
            if (a === s) return r.prev;
            var h, l = r, u = r.x, c = r.y, f = 1 / 0;
            for (_ = r.next; _ !== l; ) a >= _.x && _.x >= u && a !== _.x && t.pointInTriangle(n < c ? a : s, n, u, c, n < c ? s : a, n, _.x, _.y) && ((h = Math.abs(n - _.y) / (a - _.x)) < f || h === f && _.x > r.x) && t.locallyInside(_, e) && (r = _, 
            f = h), _ = _.next;
            return r;
        }, t.indexCurve = function(e, i, r, _) {
            var a = e;
            do {
                null === a.z && (a.z = t.zOrder(a.x, a.y, i, r, _)), a.prevZ = a.prev, a.nextZ = a.next, 
                a = a.next;
            } while (a !== e);
            a.prevZ.nextZ = null, a.prevZ = null, t.sortLinked(a);
        }, t.sortLinked = function(t) {
            var e, i, r, _, a, n, s, o, h = 1;
            do {
                for (i = t, t = null, a = null, n = 0; i; ) {
                    for (n++, r = i, s = 0, e = 0; e < h && (s++, r = r.nextZ); e++) ;
                    for (o = h; s > 0 || o > 0 && r; ) 0 !== s && (0 === o || !r || i.z <= r.z) ? (_ = i, 
                    i = i.nextZ, s--) : (_ = r, r = r.nextZ, o--), a ? a.nextZ = _ : t = _, _.prevZ = a, 
                    a = _;
                    i = r;
                }
                a.nextZ = null, h *= 2;
            } while (n > 1);
            return t;
        }, t.zOrder = function(t, e, i, r, _) {
            return t = 32767 * (t - i) * _, e = 32767 * (e - r) * _, t = 16711935 & (t | t << 8), 
            t = 252645135 & (t | t << 4), t = 858993459 & (t | t << 2), t = 1431655765 & (t | t << 1), 
            e = 16711935 & (e | e << 8), e = 252645135 & (e | e << 4), e = 858993459 & (e | e << 2), 
            e = 1431655765 & (e | e << 1), t | e << 1;
        }, t.getLeftmost = function(t) {
            var e = t, i = t;
            do {
                e.x < i.x && (i = e), e = e.next;
            } while (e !== t);
            return i;
        }, t.pointInTriangle = function(t, e, i, r, _, a, n, s) {
            return (_ - n) * (e - s) - (t - n) * (a - s) >= 0 && (t - n) * (r - s) - (i - n) * (e - s) >= 0 && (i - n) * (a - s) - (_ - n) * (r - s) >= 0;
        }, t.isValidDiagonal = function(e, i) {
            return e.next.i !== i.i && e.prev.i !== i.i && !t.intersectsPolygon(e, i) && t.locallyInside(e, i) && t.locallyInside(i, e) && t.middleInside(e, i);
        }, t.area = function(t, e, i) {
            return (e.y - t.y) * (i.x - e.x) - (e.x - t.x) * (i.y - e.y);
        }, t.equals = function(t, e) {
            return t.x === e.x && t.y === e.y;
        }, t.intersects = function(e, i, r, _) {
            return !!(t.equals(e, i) && t.equals(r, _) || t.equals(e, _) && t.equals(r, i)) || t.area(e, i, r) > 0 != t.area(e, i, _) > 0 && t.area(r, _, e) > 0 != t.area(r, _, i) > 0;
        }, t.intersectsPolygon = function(e, i) {
            var r = e;
            do {
                if (r.i !== e.i && r.next.i !== e.i && r.i !== i.i && r.next.i !== i.i && t.intersects(r, r.next, e, i)) return !0;
                r = r.next;
            } while (r !== e);
            return !1;
        }, t.locallyInside = function(e, i) {
            return t.area(e.prev, e, e.next) < 0 ? t.area(e, i, e.next) >= 0 && t.area(e, e.prev, i) >= 0 : t.area(e, i, e.prev) < 0 || t.area(e, e.next, i) < 0;
        }, t.middleInside = function(t, e) {
            var i = t, r = !1, _ = (t.x + e.x) / 2, a = (t.y + e.y) / 2;
            do {
                i.y > a != i.next.y > a && i.next.y !== i.y && _ < (i.next.x - i.x) * (a - i.y) / (i.next.y - i.y) + i.x && (r = !r), 
                i = i.next;
            } while (i !== t);
            return r;
        }, t.splitPolygon = function(t, e) {
            var i = new Mt(t.i, t.x, t.y), r = new Mt(e.i, e.x, e.y), _ = t.next, a = e.prev;
            return t.next = e, e.prev = t, i.next = _, _.prev = i, r.next = i, i.prev = r, a.next = r, 
            r.prev = a, r;
        }, t.insertNode = function(t, e, i, r) {
            var _ = new Mt(t, e, i);
            return r ? (_.next = r.next, _.prev = r, r.next.prev = _, r.next = _) : (_.prev = _, 
            _.next = _), _;
        }, t.removeNode = function(t) {
            t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), 
            t.nextZ && (t.nextZ.prevZ = t.prevZ);
        }, t.signedArea = function(t, e, i, r) {
            for (var _ = 0, a = e, n = i - r; a < i; a += r) _ += (t[n] - t[a]) * (t[a + 1] + t[n + 1]), 
            n = a;
            return _;
        }, t;
    }(), At = (function() {
        function t() {
            this._paramData = new ParamData(4, !0);
        }
        _(t, "laya.layagl.cmdNative.AlphaCmdNative");
        var e = t.prototype;
        e.recover = function() {
            C.recover("AlphaCmd", this);
        }, e.run = function(t, e, i) {
            t.alpha(this._alpha);
        }, a(0, e, "cmdID", function() {
            return "Alpha";
        }), a(0, e, "alpha", function() {
            return this._alpha;
        }, function(t) {
            t = (t = t > 1 ? 1 : t) < 0 ? 0 : t, this._alpha = t;
            var e = 16777215;
            e |= 255 * t << 24, this._paramData._int32Data[0] = e, j.syncBufferToRenderThread(this._paramData);
        }), t.create = function(e) {
            var i = C.getItemByClass("AlphaCmd", t), r = i._graphicsCmdEncoder = this._commandEncoder;
            return i.alpha = e, r.setGlobalValueEx(Nt.GLOBALVALUE_DRAWTEXTURE_COLOR, 15, i._paramData.getPtrID(), 0), 
            j.syncBufferToRenderThread(r), i;
        }, t.ID = "Alpha";
    }(), function() {
        function t(e) {
            this.clipInfoID = -1, this._numEle = 0, this._ref = 1, this._key = new Lt(), void 0 === e && (e = 1e4), 
            this._renderType = e, this._id = ++t.ID;
        }
        _(t, "laya.webgl.submit.Submit");
        var e = t.prototype;
        return i.imps(e, {
            "laya.webgl.submit.ISubmit": !0
        }), e.getID = function() {
            return this._id;
        }, e.releaseRender = function() {
            t.RENDERBASE != this && --this._ref < 1 && (t.POOL[t._poolSize++] = this, this.shaderValue.release(), 
            this.shaderValue = null, this._mesh = null, this._parent && (this._parent.releaseRender(), 
            this._parent = null));
        }, e.getRenderType = function() {
            return this._renderType;
        }, e.renderSubmit = function() {
            if (0 === this._numEle || !this._mesh || 0 == this._numEle) return 1;
            var t = this.shaderValue.textureHost;
            if (t) {
                var e = t._getSource();
                if (!e) return 1;
                this.shaderValue.texture = e;
            }
            var i = mt.mainContext;
            return this._mesh.useMesh(i), this.shaderValue.upload(), Rt.activeBlendFunction !== this._blendFn && (ot.setBlend(i, !0), 
            this._blendFn(i), Rt.activeBlendFunction = this._blendFn), i.drawElements(4, this._numEle, 5123, this._startIdx), 
            F.renderBatch++, F.trianglesFaces += this._numEle / 3, 1;
        }, e._cloneInit = function(t, e, i, r) {
            t._ref = 1, t._mesh = i, t._id = this._id, t._key.copyFrom(this._key), t._parent = this, 
            t._blendFn = this._blendFn, t._renderType = this._renderType, t._startIdx = r * Et.BYTES_PIDX, 
            t._numEle = this._numEle, t.shaderValue = this.shaderValue, this.shaderValue.ref++, 
            this._ref++;
        }, e.clone = function(t, e, i) {
            return null;
        }, e.reUse = function(t, e) {
            return 0;
        }, e.toString = function() {
            return "ibindex:" + this._startIdx + " num:" + this._numEle + " key=" + this._key;
        }, t.__init__ = function() {
            var e = t.RENDERBASE = new t(-1);
            e.shaderValue = new Y(0, 0), e.shaderValue.ALPHA = 1, e._ref = 4294967295;
        }, t.create = function(e, i, r) {
            var _ = t._poolSize ? t.POOL[--t._poolSize] : new t();
            _._ref = 1, _._mesh = i, _._key.clear(), _._startIdx = i.indexNum * Et.BYTES_PIDX, 
            _._numEle = 0;
            var a = e._nBlendType;
            _._blendFn = e._targets ? Rt.targetFns[a] : Rt.fns[a], _.shaderValue = r, _.shaderValue.setValue(e._shader2D);
            var n = e._shader2D.filters;
            return n && _.shaderValue.setFilters(n), _;
        }, t.createShape = function(e, i, r, _) {
            var a = t._poolSize ? t.POOL[--t._poolSize] : new t();
            a._mesh = i, a._numEle = r, a._startIdx = 2 * i.indexNum, a._ref = 1, a.shaderValue = _, 
            a.shaderValue.setValue(e._shader2D);
            var n = e._nBlendType;
            return a._key.blendShader = n, a._blendFn = e._targets ? Rt.targetFns[n] : Rt.fns[n], 
            a;
        }, t.TYPE_2D = 1e4, t.TYPE_CANVAS = 10003, t.TYPE_CMDSETRT = 10004, t.TYPE_CUSTOM = 10005, 
        t.TYPE_BLURRT = 10006, t.TYPE_CMDDESTORYPRERT = 10007, t.TYPE_DISABLESTENCIL = 10008, 
        t.TYPE_OTHERIBVB = 10009, t.TYPE_PRIMITIVE = 10010, t.TYPE_RT = 10011, t.TYPE_BLUR_RT = 10012, 
        t.TYPE_TARGET = 10013, t.TYPE_CHANGE_VALUE = 10014, t.TYPE_SHAPE = 10015, t.TYPE_TEXTURE = 10016, 
        t.TYPE_FILLTEXTURE = 10017, t.KEY_ONCE = -1, t.KEY_FILLRECT = 1, t.KEY_DRAWTEXTURE = 2, 
        t.KEY_VG = 3, t.KEY_TRIANGLES = 4, t.RENDERBASE = null, t.ID = 1, t.preRender = null, 
        t._poolSize = 0, t.POOL = [], t;
    }()), Et = function() {
        function t() {}
        return _(t, "laya.webgl.utils.CONST3D2D"), t.BYTES_PE = 4, t.BYTES_PIDX = 2, t.defaultMatrix4 = [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ], 
        t.defaultMinusYMatrix4 = [ 1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ], t.uniformMatrix3 = [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0 ], 
        t._TMPARRAY = [], t._OFFSETX = 0, t._OFFSETY = 0, t;
    }(), mt = function() {
        function e() {}
        return _(e, "laya.webgl.WebGL"), e._uint8ArraySlice = function() {
            for (var t = this.length, e = new Uint8Array(this.length), i = 0; i < t; i++) e[i] = this[i];
            return e;
        }, e._float32ArraySlice = function() {
            for (var t = this.length, e = new Float32Array(this.length), i = 0; i < t; i++) e[i] = this[i];
            return e;
        }, e._uint16ArraySlice = function(t) {
            var e, i = arguments, r = 0, _ = 0;
            if (0 === i.length) for (r = this.length, e = new Uint16Array(r), _ = 0; _ < r; _++) e[_] = this[_]; else if (2 === i.length) {
                var a = i[0], n = i[1];
                if (n > a) for (r = n - a, e = new Uint16Array(r), _ = a; _ < n; _++) e[_ - a] = this[_]; else e = new Uint16Array(0);
            }
            return e;
        }, e._nativeRender_enable = function() {
            e.isNativeRender_enable || (e.isNativeRender_enable = !0, T.create = function(t, e) {
                var i = new ue(t, e, 1, !1, !1);
                return i.wrapModeU = 1, i.wrapModeV = 1, i;
            }, ot.__init_native(), bt.width = o.window.innerWidth, bt.height = o.window.innerHeight, 
            L.measureText = function(e, i) {
                return t.conchTextCanvas.font = i, t.conchTextCanvas.measureText(e);
            }, L.enableNative = function() {
                _t.uploadShaderUniforms = _t.uploadShaderUniformsForNative;
                var e = N;
                e.prototype.repaint = e.prototype.repaintForNative, e.prototype.render = e.prototype.renderToNative;
                var i = nt;
                if (i.prototype.bind = nt.prototype.bindForNative, i.prototype.unBind = nt.prototype.unBindForNative, 
                M.isConchApp) {
                    Ct = t.GLCommandEncoder, j = t.LayaGLContext;
                    var r = t.CanvasRenderingContext.prototype, _ = vt.prototype;
                    vt = t.CanvasRenderingContext, r.drawImage = _.drawImage, r.drawTexture = _.drawTexture, 
                    r.fillText = _.fillText, r.save = _.save, r.restore = _.restore, r.translate = _.translate, 
                    r.scale = _.scale, r.rotate = _.rotate, r.transform = _.transform, r.beginRT = _.beginRT, 
                    r.endRT = _.endRT, r.drawCanvas = _.drawCanvas, r.drawTarget = _.drawTarget, r._$get_asBitmap = _._$get_asBitmap, 
                    r._$set_asBitmap = _._$set_asBitmap, r.toBase64 = _.toBase64, r.getImageData = _.getImageData, 
                    a(0, r, "asBitmap", r._$get_asBitmap, r._$set_asBitmap), xt.rewriteProperties();
                }
                re.init(), Nt.__init__();
            }, L.clear = function(t) {
                var e = l.create(t).arrColor, i = j.instance;
                e && i.clearColor(e[0], e[1], e[2], e[3]), i.clear(17664);
            }, L.drawToCanvas = function(t, e, i, r, _, a) {
                var n = new p(!0);
                n.size(i, r);
                var s = n.getContext("2d");
                s.asBitmap = !0;
                var o = j.instance.createCommandEncoder(128, 64, !1);
                o.beginEncoding(), o.clearEncoding();
                var h = j.instance, l = h.getCurrentContext();
                h.setCurrentContext(s), s.beginRT(), h.save();
                var u = re._tempFloatArrayMatrix;
                return u[0] = 1, u[1] = 0, u[2] = 0, u[3] = 1, u[4] = _, u[5] = a, h.setGlobalValue(Nt.GLOBALVALUE_MATRIX32, 8, u), 
                t.writeBlockToNative(), h.restore(), h.setCurrentContext(l), h.commitContextToGPU(s), 
                s.endRT(), o.endEncoding(), h.useCommandEncoder(o.getPtrID(), -1, 0), n;
            }, p.prototype.getTexture = function() {
                return this._texture || (this._texture = this.context._targets, this._texture.uv = le.flipyuv, 
                this._texture.bitmap = this._texture), this._texture;
            });
        }, e._webglRender_enable = function() {
            M.isWebGL || (M.isWebGL = !0, L.initRender = function(t, i, r) {
                var _ = j.instance = laya.webgl.WebGL.mainContext = function(t) {
                    var e, i = [ "webgl2", "webgl", "experimental-webgl", "webkit-3d", "moz-webgl" ];
                    u.useWebGL2 || i.shift();
                    for (var r = 0; r < i.length; r++) {
                        try {
                            e = t.getContext(i[r], {
                                stencil: u.isStencil,
                                alpha: u.isAlpha,
                                antialias: u.isAntialias,
                                premultipliedAlpha: u.premultipliedAlpha,
                                preserveDrawingBuffer: u.preserveDrawingBuffer
                            });
                        } catch (t) {}
                        if (e) return "webgl2" === i[r] && (laya.webgl.WebGL._isWebGL2 = !0), new j(), e;
                    }
                    return null;
                }(M._mainCanvas.source);
                if (!_) return !1;
                t.size(i, r), ot.__init__(_), Gt.__init__(), At.__init__();
                var a = new Gt();
                M._context = a, t._setContext(a), laya.webgl.WebGL.shaderHighPrecision = !1;
                try {
                    var n = _.getShaderPrecisionFormat(35632, 36338);
                    e.shaderHighPrecision = !!n.precision;
                } catch (t) {}
                return j.instance = _, V.__init__(), jt.__init__(), Y.__init__(), Pt.__init__(), 
                $t.__int__(_), Rt._init_(_), !0;
            }, T.create = function(t, e) {
                var i = new ue(t, e, 1, !1, !1);
                return i.wrapModeU = 1, i.wrapModeV = 1, i;
            }, L.createRenderSprite = function(t, e) {
                return new Wt(t, e);
            }, L.changeWebGLSize = function(t, e) {
                laya.webgl.WebGL.onStageResize(t, e);
            }, L.clear = function(t) {
                Gt.set2DRenderConfig(), bt.worldScissorTest && laya.webgl.WebGL.mainContext.disable(3089);
                var e = M.context, r = 0 == e._submits._length || u.preserveDrawingBuffer ? l.create(t).arrColor : i.stage._wgColor;
                r && e.clearBG(r[0], r[1], r[2], r[3]), bt.clear();
            }, L.drawToCanvas = function(t, e, i, r, _, a) {
                _ -= t.x, a -= t.y, _ |= 0, a |= 0, i |= 0, r |= 0;
                var n = new Gt();
                n.size(i, r), n.asBitmap = !0, n._targets.start(), y.renders[e]._fun(t, n, _, a), 
                n.flush(), n._targets.end(), n._targets.restore();
                var s = n._targets.getData(0, 0, i, r);
                n.destroy();
                for (var o = new ImageData(i, r), h = 4 * i, l = (new Uint8Array(h), o.data), u = r - 1, c = u * h, f = 0; u >= 0; u--) l.set(s.subarray(f, f + h), c), 
                c -= h, f += h;
                var d = new p(!0);
                d.size(i, r);
                return d.getContext("2d").putImageData(o, 0, 0), d;
            }, L.getTexturePixels = function(t, e, i, r, _) {
                var a = 0, n = 0, s = 0, o = t.bitmap, h = o.width, l = o.height;
                if (e + r > h && (r -= e + r - h), i + _ > l && (_ -= i + _ - l), r <= 0 || _ <= 0) return null;
                var u = 4 * r, c = null;
                try {
                    c = o.getPixels();
                } catch (t) {}
                if (c) {
                    if (0 == e && 0 == i && r == h && _ == l) return c;
                    var f = new Uint8Array(r * _ * 4);
                    for (a = 4 * e, n = (i + _ - 1) * (u = 4 * h) + 4 * e, s = _ - 1; s >= 0; s--) f.set(T.slice(n, n + 4 * r), a), 
                    a += u, n -= u;
                    return f;
                }
                var d = new Gt();
                d.size(r, _), d.asBitmap = !0;
                var A = null;
                if (0 != e || 0 != i || r != h || _ != l) {
                    var E = (A = t.uv.concat())[0], m = A[1], R = (A[2] - E) / h, p = (A[7] - m) / l;
                    A = [ E + e * R, m + i * p, E + (e + r) * R, m + i * p, E + (e + r) * R, m + (i + _) * p, E + e * R, m + (i + _) * p ];
                }
                d._drawTextureM(t, 0, 0, r, _, null, 1, A), d._targets.start(), d.flush(), d._targets.end(), 
                d._targets.restore();
                var T = d._targets.getData(0, 0, r, _);
                for (d.destroy(), f = new Uint8Array(r * _ * 4), a = 0, n = (_ - 1) * u, s = _ - 1; s >= 0; s--) f.set(T.slice(n, n + u), a), 
                a += u, n -= u;
                return f;
            }, E._filter = function(t, e, i, r) {
                var _ = e, a = this._next;
                if (a) {
                    var n = t.filters, s = n.length;
                    if (1 == s && 32 == n[0].type) return e.save(), e.setColorFilter(n[0]), a._fun.call(a, t, e, i, r), 
                    void e.restore();
                    var o, h = Y.create(1, 0), l = P.TEMP, u = _._curMat, c = v.create();
                    u.copyTo(c);
                    var f = 0, d = 0, A = null, E = t._cacheStyle.filterCache || null;
                    if (E && 0 == t.getRepaint()) {
                        if ((t._cacheStyle.hasGlowFilter || !1) && (f = 50, d = 25), (o = t.getBounds()).width <= 0 || o.height <= 0) return;
                        o.width += f, o.height += f, l.x = o.x * c.a + o.y * c.c, l.y = o.y * c.d + o.x * c.b, 
                        o.x = l.x, o.y = l.y, l.x = o.width * c.a + o.height * c.c, l.y = o.height * c.d + o.width * c.b, 
                        o.width = l.x, o.height = l.y;
                    } else {
                        t._isHaveGlowFilter() && (f = 50, d = 25), (o = new g()).copyFrom(t.getSelfBounds()), 
                        o.x += t.x, o.y += t.y, o.x -= t.pivotX + 4, o.y -= t.pivotY + 4;
                        var m = o.x, R = o.y;
                        if (o.width += f + 8, o.height += f + 8, l.x = o.x * c.a + o.y * c.c, l.y = o.y * c.d + o.x * c.b, 
                        o.x = l.x, o.y = l.y, l.x = o.width * c.a + o.height * c.c, l.y = o.height * c.d + o.width * c.b, 
                        o.width = l.x, o.height = l.y, o.width <= 0 || o.height <= 0) return;
                        E && St.releaseRT(E), A = St.getRT(o.width, o.height);
                        var p = E = St.getRT(o.width, o.height);
                        t._getCacheStyle().filterCache = E, _.pushRT(), _.useRT(A);
                        var T = t.x - m + d, D = t.y - R + d;
                        a._fun.call(a, t, e, T, D), _.useRT(p);
                        for (var C = 0; C < s; C++) {
                            0 != C && (_.useRT(A), _.drawTarget(p, 0, 0, o.width, o.height, v.TEMP.identity(), h, null, Rt.TOINT.overlay), 
                            _.useRT(p));
                            var M = n[C];
                            switch (M.type) {
                              case 16:
                              case 8:
                                M._glRender && M._glRender.render(A, e, o.width, o.height, M);
                                break;

                              case 32:
                                _.setColorFilter(M), _.drawTarget(A, 0, 0, o.width, o.height, v.EMPTY.identity(), Y.create(1, 0)), 
                                _.setColorFilter(null);
                            }
                        }
                        _.popRT();
                    }
                    if (i = i - d - t.x, r = r - d - t.y, l.setTo(i, r), c.transformPoint(l), i = l.x + o.x, 
                    r = l.y + o.y, _._drawRenderTexture(E, i, r, o.width, o.height, v.TEMP.identity(), 1, le.defuv), 
                    A) {
                        var y = Vt.create([ A ], function(t) {
                            t.destroy();
                        }, this);
                        A = null, e.addRenderObject(y);
                    }
                    c.destroy();
                }
            }, p.prototype.getTexture = function() {
                if (!this._texture) {
                    var t = new ue();
                    t.loadImageSource(this.source), this._texture = new W(t);
                }
                return this._texture;
            }, Float32Array.prototype.slice || (Float32Array.prototype.slice = e._float32ArraySlice), 
            Uint16Array.prototype.slice || (Uint16Array.prototype.slice = e._uint16ArraySlice), 
            Uint8Array.prototype.slice || (Uint8Array.prototype.slice = e._uint8ArraySlice));
        }, e.enable = function() {
            return o.__init__(), !!o._supportWebGL && (M.isConchApp ? e._nativeRender_enable() : e._webglRender_enable(), 
            !0);
        }, e.onStageResize = function(t, i) {
            null != e.mainContext && (e.mainContext.viewport(0, 0, t, i), bt.width = t, bt.height = i);
        }, e.mainContext = null, e.shaderHighPrecision = !1, e._isWebGL2 = !1, e.isNativeRender_enable = !1, 
        e;
    }(), Rt = function() {
        function t() {}
        return _(t, "laya.webgl.canvas.BlendMode"), t._init_ = function(e) {
            t.fns = [ t.BlendNormal, t.BlendAdd, t.BlendMultiply, t.BlendScreen, t.BlendOverlay, t.BlendLight, t.BlendMask, t.BlendDestinationOut ], 
            t.targetFns = [ t.BlendNormalTarget, t.BlendAddTarget, t.BlendMultiplyTarget, t.BlendScreenTarget, t.BlendOverlayTarget, t.BlendLightTarget, t.BlendMask, t.BlendDestinationOut ];
        }, t.BlendNormal = function(t) {
            ot.setBlendFunc(t, 1, 771);
        }, t.BlendAdd = function(t) {
            ot.setBlendFunc(t, 1, 772);
        }, t.BlendMultiply = function(t) {
            ot.setBlendFunc(t, 774, 771);
        }, t.BlendScreen = function(t) {
            ot.setBlendFunc(t, 1, 1);
        }, t.BlendOverlay = function(t) {
            ot.setBlendFunc(t, 1, 769);
        }, t.BlendLight = function(t) {
            ot.setBlendFunc(t, 1, 1);
        }, t.BlendNormalTarget = function(t) {
            ot.setBlendFunc(t, 1, 771);
        }, t.BlendAddTarget = function(t) {
            ot.setBlendFunc(t, 1, 772);
        }, t.BlendMultiplyTarget = function(t) {
            ot.setBlendFunc(t, 774, 771);
        }, t.BlendScreenTarget = function(t) {
            ot.setBlendFunc(t, 1, 1);
        }, t.BlendOverlayTarget = function(t) {
            ot.setBlendFunc(t, 1, 769);
        }, t.BlendLightTarget = function(t) {
            ot.setBlendFunc(t, 1, 1);
        }, t.BlendMask = function(t) {
            ot.setBlendFunc(t, 0, 770);
        }, t.BlendDestinationOut = function(t) {
            ot.setBlendFunc(t, 0, 0);
        }, t.activeBlendFunction = null, t.NAMES = [ "normal", "add", "multiply", "screen", "overlay", "light", "mask", "destination-out" ], 
        t.TOINT = {
            normal: 0,
            add: 1,
            multiply: 2,
            screen: 3,
            overlay: 4,
            light: 5,
            mask: 6,
            "destination-out": 7,
            lighter: 1
        }, t.NORMAL = "normal", t.ADD = "add", t.MULTIPLY = "multiply", t.SCREEN = "screen", 
        t.OVERLAY = "overlay", t.LIGHT = "light", t.MASK = "mask", t.DESTINATIONOUT = "destination-out", 
        t.LIGHTER = "lighter", t.fns = [], t.targetFns = [], t;
    }(), pt = function() {
        function t() {
            this._lastOriX = 0, this._lastOriY = 0, this.paths = [], this._curPath = null;
        }
        var e;
        _(t, "laya.webgl.canvas.Path");
        var i = t.prototype;
        return i.beginPath = function(t) {
            this.paths.length = 1, this._curPath = this.paths[0] = new e(), this._curPath.convex = t;
        }, i.closePath = function() {
            this._curPath.loop = !0;
        }, i.newPath = function() {
            this._curPath = new e(), this.paths.push(this._curPath);
        }, i.addPoint = function(t, e) {
            this._curPath.path.push(t, e);
        }, i.push = function(t, i) {
            this._curPath ? this._curPath.path.length > 0 && (this._curPath = new e(), this.paths.push(this._curPath)) : (this._curPath = new e(), 
            this.paths.push(this._curPath));
            var r = this._curPath;
            r.path = t.slice(), r.convex = i;
        }, i.reset = function() {
            this.paths.length = 0;
        }, t.__init$ = function() {
            e = function() {
                function t() {
                    this.path = [], this.loop = !1, this.convex = !1;
                }
                return _(t, ""), t;
            }();
        }, t;
    }(), Tt = function() {
        function t() {
            this._glBuffer = null, this._buffer = null, this._bufferType = 0, this._bufferUsage = 0, 
            this._byteLength = 0, this._glBuffer = j.instance.createBuffer();
        }
        _(t, "laya.webgl.utils.Buffer");
        var e = t.prototype;
        return e._bindForVAO = function() {}, e.bind = function() {
            return !1;
        }, e.destroy = function() {
            this._glBuffer && (j.instance.deleteBuffer(this._glBuffer), this._glBuffer = null);
        }, a(0, e, "bufferUsage", function() {
            return this._bufferUsage;
        }), t._bindedVertexBuffer = null, t._bindedIndexBuffer = null, t;
    }(), vt = function() {
        function t() {
            this._customCmds = null, this._targets = null, this._width = 0, this._height = 0, 
            this._cmdEncoder = null;
        }
        _(t, "laya.layagl.LayaGLRenderingContext");
        var e = t.prototype;
        return e.drawTexture = function(t, e, i, r, _) {
            void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === r && (r = 0), void 0 === _ && (_ = 0), 
            this.drawImage(t, e, i, r, _);
        }, e.drawImage = function(t, e, i, r, _) {
            void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === r && (r = 0), void 0 === _ && (_ = 0), 
            this._customCmds.push(d.create.call(this, t, e, i, r, _));
        }, e.fillText = function(t, e, i, r, _, a) {
            this._customCmds.push(A.create.call(this, t, e, i, r || U.defaultFontStr(), _, a));
        }, e.save = function() {
            this._customCmds.push(x.create.call(this));
        }, e.restore = function() {
            this._customCmds.push(S.create.call(this));
        }, e.translate = function(t, e) {
            this._customCmds.push(X.create.call(this, t, e));
        }, e.rotate = function(t, e, i) {
            void 0 === e && (e = 0), void 0 === i && (i = 0), this._customCmds.push(b.create.call(this, t, e, i));
        }, e.scale = function(t, e, i, r) {
            void 0 === i && (i = 0), void 0 === r && (r = 0), this._customCmds.push(B.create.call(this, t, e, i, r));
        }, e.transform = function(t, e, i) {
            void 0 === e && (e = 0), void 0 === i && (i = 0), this._customCmds.push(G.create.call(this, t, e, i));
        }, e.beginRT = function() {
            le.pushRT(), this._targets.start(), this.clear();
        }, e.clear = function() {}, e.endRT = function() {
            le.popRT();
        }, e.drawCanvas = function(t, e, i) {
            var r = t.context._targets;
            this._customCmds.push(f.create.call(this, r, e, i, r.width, r.height));
        }, e.drawTarget = function(t, e, i, r, _, a) {
            var n = new ArrayBuffer(96), s = new Int32Array(n), o = new Float32Array(n), h = 0 != _ ? _ : e.width, l = 0 != a ? a : e.height, u = le.flipyuv, c = 0;
            o[c++] = i, o[c++] = r, o[c++] = u[0], o[c++] = u[1], s[c++] = 4294967295, s[c++] = 4294967295, 
            o[c++] = i + h, o[c++] = r, o[c++] = u[2], o[c++] = u[3], s[c++] = 4294967295, s[c++] = 4294967295, 
            o[c++] = i + h, o[c++] = r + l, o[c++] = u[4], o[c++] = u[5], s[c++] = 4294967295, 
            s[c++] = 4294967295, o[c++] = i, o[c++] = r + l, o[c++] = u[6], o[c++] = u[7], s[c++] = 4294967295, 
            s[c++] = 4294967295, t.useProgramEx(Nt.PROGRAMEX_DRAWTEXTURE), t.useVDO(Nt.VDO_MESHQUADTEXTURE), 
            t.uniformEx(Nt.GLOBALVALUE_VIEWS, 0), t.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_DIR, 1), 
            t.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_POS, 2), t.uniformTexture(0, 33984, e._getSource()), 
            t.setRectMesh(1, n), t.modifyMesh(Nt.GLOBALVALUE_MATRIX32, 0, 7), t.modifyMesh(Nt.GLOBALVALUE_DRAWTEXTURE_COLOR, 1, 15);
        }, e.getImageData = function(t, e, i, r, _) {
            var a = this._targets.sourceWidth, n = this._targets.sourceHeight;
            if (!(t < 0 || e < 0 || i < 0 || r < 0 || i > a || r > n)) {
                this._cmdEncoder || (this._cmdEncoder = j.instance.createCommandEncoder(128, 64, !1));
                var s = j.instance;
                this._cmdEncoder.beginEncoding(), this._cmdEncoder.clearEncoding(), le.pushRT(), 
                this._targets.start(), s.readPixelsAsync(t, e, i, r, 6408, 5121, function(t) {
                    _(t);
                }), this.endRT(), this._cmdEncoder.endEncoding(), s.useCommandEncoder(this._cmdEncoder.getPtrID(), -1, 0);
            }
        }, e.toBase64 = function(t, e, i) {
            var r = this._targets.sourceWidth, _ = this._targets.sourceHeight;
            this.getImageData(0, 0, r, _, function(a) {
                var n = conchToBase64(t, e, a, r, _);
                i(n);
            });
        }, a(0, e, "asBitmap", function() {
            return !this._targets;
        }, function(t) {
            if (t) {
                if (this._targets || (this._targets = new le(this._width, this._height, 1, -1)), 
                !this._width || !this._height) throw Error("asBitmap no size!");
            } else this._targets = null;
        }), t;
    }(), Dt = (function() {
        function t() {
            this._draw_texture_cmd_encoder_ = j.instance.createCommandEncoder(64, 32, !0);
        }
        _(t, "laya.layagl.cmdNative.FillWordsCmdNative");
        var e = t.prototype;
        e.createFillText = function(e, i, r, _, a, n) {
            l.create(n).numColor;
            var s = {};
            s._curMat = new v(), s._italicDeg = 0, s._drawTextureUseColor = 4294967295, s.fillStyle = n, 
            s._fillColor = 4294967295, s.setFillColor = function(t) {
                s._fillColor = t;
            }, s.getFillColor = function() {
                return s._fillColor;
            }, s.mixRGBandAlpha = function(t) {
                return t;
            }, s._drawTextureM = function(t, i, r, _, a, n, s, o) {
                e.blendFuncByGlobalValue(Nt.GLOBALVALUE_BLENDFUNC_SRC, Nt.GLOBALVALUE_BLENDFUNC_DEST), 
                e.useProgramEx(Nt.PROGRAMEX_DRAWTEXTURE), e.useVDO(Nt.VDO_MESHQUADTEXTURE), e.uniformEx(Nt.GLOBALVALUE_VIEWS, 0), 
                e.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_DIR, 1), e.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_POS, 2), 
                e.uniformTexture(3, 33984, t.bitmap._glTexture);
                var h = new Float32Array([ i, r, o[0], o[1], 0, 0, i + _, r, o[2], o[3], 0, 0, i + _, r + a, o[4], o[5], 0, 0, i, r + a, o[6], o[7], 0, 0 ]), l = new Int32Array(h.buffer);
                l[4] = l[10] = l[16] = l[22] = 4294967295, l[5] = l[11] = l[17] = l[23] = 4294967295, 
                e.setRectMesh(1, h, h.length), e.modifyMesh(Nt.GLOBALVALUE_MATRIX32, 0, 7), e.modifyMesh(Nt.GLOBALVALUE_DRAWTEXTURE_COLOR, 1, 15), 
                j.syncBufferToRenderThread(e);
            }, t.cbook.filltext_native(s, null, i, r, _, a, n, null, 0, null);
        }, e.recover = function() {
            this._graphicsCmdEncoder = null, this.words = null, C.recover("FillWordsCmd", this);
        }, a(0, e, "cmdID", function() {
            return "FillWords";
        }), t.create = function(e, i, r, _, a) {
            t.cbook || new Error("Error:charbook not create!");
            var n = C.getItemByClass("FillWordsCmd", t), s = n._graphicsCmdEncoder = this._commandEncoder;
            return n.words = e, n.x = i, n.y = r, n.font = _, n.color = a, n._draw_texture_cmd_encoder_.clearEncoding(), 
            n.createFillText(n._draw_texture_cmd_encoder_, e, i, r, _, a), j.syncBufferToRenderThread(n._draw_texture_cmd_encoder_), 
            s.useCommandEncoder(n._draw_texture_cmd_encoder_.getPtrID(), -1, -1), j.syncBufferToRenderThread(s), 
            n;
        }, t.ID = "FillWords", r(t, [ "cbook", function() {
            return this.cbook = i.textRender;
        } ]);
    }(), function() {
        function t() {
            this._matrix = new v();
        }
        _(t, "laya.webgl.canvas.save.SaveTransform");
        var e = t.prototype;
        return i.imps(e, {
            "laya.webgl.canvas.save.ISaveData": !0
        }), e.isSaveMark = function() {
            return !1;
        }, e.restore = function(e) {
            e._curMat = this._savematrix, t.POOL[t.POOL._length++] = this;
        }, t.save = function(e) {
            var i = e._saveMark;
            if (2048 != (2048 & i._saveuse)) {
                i._saveuse |= 2048;
                var r = t.POOL, _ = r._length > 0 ? r[--r._length] : new t();
                _._savematrix = e._curMat, e._curMat = e._curMat.copyTo(_._matrix);
                var a = e._save;
                a[a._length++] = _;
            }
        }, t.POOL = z._createArray(), t;
    }()), Pt = (function() {
        function t() {
            this._graphicsCmdEncoder = null, this._paramData = null, this._graphicsCmdEncoder_fill = null, 
            this._paramData_fill = null, this._x = NaN, this._y = NaN, this._paths = null, this._brush = null, 
            this._pen = null, this._vertNum = 0, this._startOriX = 0, this._startOriY = 0, this._lastOriX = 0, 
            this._lastOriY = 0, this.SEGNUM = 32, this.lines_ibBuffer = null, this.lines_vbBuffer = null, 
            this._lines_ibSize = 0, this._lines_vbSize = 0, this.fill_ibBuffer = null, this.fill_vbBuffer = null, 
            this._fill_ibSize = 0, this._fill_vbSize = 0, this._cmdCurrentPos = 0, this._points = [], 
            this._lines_ibArray = [], this._lines_vbArray = [], this._fill_ibArray = [], this._fill_vbArray = [];
        }
        _(t, "laya.layagl.cmdNative.DrawPathCmdNative");
        var e = t.prototype;
        e._arcTo = function(t) {
            var e = t[1], i = t[2], r = t[3], _ = t[4], a = t[5], n = 0, s = 0, o = 0, h = this._lastOriX - e, l = this._lastOriY - i, u = Math.sqrt(h * h + l * l);
            if (!(u <= 1e-6)) {
                var c = h / u, f = l / u, d = r - e, A = _ - i, E = d * d + A * A, m = Math.sqrt(E);
                if (!(m <= 1e-6)) {
                    var R = d / m, p = A / m, T = c + R, v = f + p, D = Math.sqrt(T * T + v * v);
                    if (!(D <= 1e-6)) {
                        var P = T / D, C = v / D, g = Math.acos(P * c + C * f), M = Math.PI / 2 - g, y = (u = a / Math.tan(M)) * c + e, O = u * f + i, S = Math.sqrt(u * u + a * a), b = e + P * S, L = i + C * S, x = 0, B = 0, I = 0;
                        if (c * p - f * R >= 0) {
                            var N = (x = 2 * M) / this.SEGNUM;
                            B = Math.sin(N), I = Math.cos(N);
                        } else N = (x = 2 * -M) / this.SEGNUM, B = Math.sin(N), I = Math.cos(N);
                        var F = this._lastOriX, w = this._lastOriY, V = y - b, U = O - L;
                        for (n = 0; n < this.SEGNUM; n++) {
                            var W = V * I + U * B, G = -V * B + U * I;
                            s = W + b, o = G + L, (Math.abs(F - s) > .1 || Math.abs(w - o) > .1) && (this._points.push(s), 
                            this._points.push(o)), V = W, U = G;
                        }
                    }
                }
            }
        }, e.recover = function() {
            this._paths = null, this._brush = null, this._pen = null, this._points.length = 0, 
            this._lines_ibArray.length = 0, this._lines_vbArray.length = 0, this._fill_ibArray.length = 0, 
            this._fill_vbArray.length = 0, C.recover("DrawPathCmd", this);
        }, a(0, e, "cmdID", function() {
            return "DrawPath";
        }), a(0, e, "paths", function() {
            return this._paths;
        }, function(t) {
            this._paths = t;
        }), a(0, e, "x", function() {
            return this._x;
        }, function(t) {
            this._x = t;
            for (var e = this.lines_vbBuffer._float32Data, i = 0, r = 0; r < this._vertNum; r++) e[i++] = this._lines_vbArray[2 * r] + t, 
            i++, i++;
            j.syncBufferToRenderThread(this.lines_vbBuffer);
        }), a(0, e, "y", function() {
            return this._y;
        }, function(t) {
            this._y = t;
            for (var e = this.lines_vbBuffer._float32Data, i = 0, r = 0; r < this._vertNum; r++) i++, 
            e[i++] = this._lines_vbArray[2 * r + 1] + t, i++;
            j.syncBufferToRenderThread(this.lines_vbBuffer);
        }), a(0, e, "brush", function() {
            return this._brush;
        }, function(e) {
            this._brush || (this._graphicsCmdEncoder._idata[this._cmdCurrentPos + 1] = t._DRAW_LINES_FILL_CMD_ENCODER_.getPtrID(), 
            j.syncBufferToRenderThread(this._graphicsCmdEncoder)), this._brush = e;
            var i = this._vertNum, r = dt.earcut(this._points, null, 2);
            if (r.length > 0) {
                (!this.fill_ibBuffer || this.fill_ibBuffer.getByteLength() < 2 * r.length) && (this.fill_ibBuffer = new ParamData(2 * r.length, !0, !0)), 
                this._fill_ibSize = 2 * r.length;
                for (var _ = this.fill_ibBuffer._int16Data, a = 0, n = 0; n < r.length; n++) _[a++] = r[n];
            }
            var s = l.create(e.fillStyle).numColor;
            (!this.fill_vbBuffer || this.fill_vbBuffer.getByteLength() < 3 * this._vertNum * 4) && (this.fill_vbBuffer = new ParamData(3 * i * 4, !0)), 
            this._fill_vbSize = 3 * this._vertNum * 4;
            for (var o = this.fill_vbBuffer._float32Data, h = this.fill_vbBuffer._int32Data, u = 0, c = 0; c < this._vertNum; c++) o[u++] = this._points[2 * c] + this.x, 
            o[u++] = this._points[2 * c + 1] + this.y, h[u++] = s;
            var f = this._paramData._int32Data;
            f[t._PARAM_FILL_VB_POS_] = this.fill_vbBuffer.getPtrID(), f[t._PARAM_FILL_IB_POS_] = this.fill_ibBuffer.getPtrID(), 
            f[t._PARAM_FILL_VB_SIZE_POS_] = this._fill_vbSize, f[t._PARAM_FILL_IB_SIZE_POS_] = this._fill_ibSize, 
            j.syncBufferToRenderThread(this.fill_vbBuffer), j.syncBufferToRenderThread(this.fill_ibBuffer), 
            j.syncBufferToRenderThread(this._paramData);
        }), a(0, e, "pen", function() {
            return this._pen;
        }, function(e) {
            this._pen = e, this._lines_ibArray.length = 0, this._lines_vbArray.length = 0, yt.createLine2(this._points, this._lines_ibArray, e.lineWidth, 0, this._lines_vbArray, !1);
            var i = l.create(e.strokeStyle).numColor, r = this._vertNum;
            (!this.lines_vbBuffer || this.lines_vbBuffer.getByteLength() < 3 * this._vertNum * 4) && (this.lines_vbBuffer = new ParamData(3 * r * 4, !0)), 
            this._lines_vbSize = 3 * this._vertNum * 4;
            for (var _ = this.lines_vbBuffer._float32Data, a = this.lines_vbBuffer._int32Data, n = 0, s = 0; s < this._vertNum; s++) _[n++] = this._lines_vbArray[2 * s] + this.x, 
            _[n++] = this._lines_vbArray[2 * s + 1] + this.y, a[n++] = i;
            (!this.lines_ibBuffer || this.lines_ibBuffer.getByteLength() < 3 * (this._vertNum - 2) * 2) && (this.lines_ibBuffer = new ParamData(3 * (r - 2) * 2, !0, !0)), 
            this._lines_ibSize = 3 * (this._vertNum - 2) * 2;
            for (var o = this.lines_ibBuffer._int16Data, h = 0; h < 3 * (this._vertNum - 2); h++) o[h] = this._lines_ibArray[h];
            (a = this._paramData._int32Data)[t._PARAM_LINES_VB_POS_] = this.lines_vbBuffer.getPtrID(), 
            a[t._PARAM_LINES_IB_POS_] = this.lines_ibBuffer.getPtrID(), a[t._PARAM_LINES_VB_SIZE_POS_] = this._lines_vbSize, 
            a[t._PARAM_LINES_IB_SIZE_POS_] = this._lines_ibSize, j.syncBufferToRenderThread(this.lines_vbBuffer), 
            j.syncBufferToRenderThread(this.lines_ibBuffer), j.syncBufferToRenderThread(this._paramData);
        }), t.create = function(e, i, r, _, a) {
            var n = C.getItemByClass("DrawPathCmd", t);
            n._graphicsCmdEncoder = this._commandEncoder, t._DRAW_LINES_CMD_ENCODER_ || ((t._DRAW_LINES_CMD_ENCODER_ = j.instance.createCommandEncoder(188, 32, !0)).blendFuncByGlobalValue(Nt.GLOBALVALUE_BLENDFUNC_SRC, Nt.GLOBALVALUE_BLENDFUNC_DEST), 
            t._DRAW_LINES_CMD_ENCODER_.useProgramEx(Nt.PROGRAMEX_DRAWVG), t._DRAW_LINES_CMD_ENCODER_.useVDO(Nt.VDO_MESHVG), 
            t._DRAW_LINES_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_VIEWS, 0), t._DRAW_LINES_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_DIR, 1), 
            t._DRAW_LINES_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_POS, 2), t._DRAW_LINES_CMD_ENCODER_.setMeshExByParamData(4 * t._PARAM_LINES_VB_POS_, 4 * t._PARAM_LINE_VB_OFFSET_POS_, 4 * t._PARAM_LINES_VB_SIZE_POS_, 4 * t._PARAM_LINES_IB_POS_, 4 * t._PARAM_LINE_IB_OFFSET_POS_, 4 * t._PARAM_LINES_IB_SIZE_POS_, 4 * t._PARAM_FILL_INDEX_ELEMENT_OFFSET_POS_), 
            t._DRAW_LINES_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_MATRIX32, 0, 7), t._DRAW_LINES_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_DRAWTEXTURE_COLOR, 1, 15), 
            j.syncBufferToRenderThread(t._DRAW_LINES_CMD_ENCODER_)), t._DRAW_FILL_CMD_ENCODER_ || ((t._DRAW_FILL_CMD_ENCODER_ = j.instance.createCommandEncoder(168, 32, !0)).blendFuncByGlobalValue(Nt.GLOBALVALUE_BLENDFUNC_SRC, Nt.GLOBALVALUE_BLENDFUNC_DEST), 
            t._DRAW_FILL_CMD_ENCODER_.useProgramEx(Nt.PROGRAMEX_DRAWVG), t._DRAW_FILL_CMD_ENCODER_.useVDO(Nt.VDO_MESHVG), 
            t._DRAW_FILL_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_VIEWS, 0), t._DRAW_FILL_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_DIR, 1), 
            t._DRAW_FILL_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_POS, 2), t._DRAW_FILL_CMD_ENCODER_.setMeshExByParamData(4 * t._PARAM_FILL_VB_POS_, 4 * t._PARAM_FILL_VB_OFFSET_POS_, 4 * t._PARAM_FILL_VB_SIZE_POS_, 4 * t._PARAM_FILL_IB_POS_, 4 * t._PARAM_FILL_IB_OFFSET_POS_, 4 * t._PARAM_FILL_IB_SIZE_POS_, 4 * t._PARAM_FILL_INDEX_ELEMENT_OFFSET_POS_), 
            t._DRAW_FILL_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_MATRIX32, 0, 7), t._DRAW_FILL_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_DRAWTEXTURE_COLOR, 1, 15), 
            j.syncBufferToRenderThread(t._DRAW_FILL_CMD_ENCODER_)), t._DRAW_LINES_FILL_CMD_ENCODER_ || ((t._DRAW_LINES_FILL_CMD_ENCODER_ = j.instance.createCommandEncoder(244, 32, !0)).blendFuncByGlobalValue(Nt.GLOBALVALUE_BLENDFUNC_SRC, Nt.GLOBALVALUE_BLENDFUNC_DEST), 
            t._DRAW_LINES_FILL_CMD_ENCODER_.useProgramEx(Nt.PROGRAMEX_DRAWVG), t._DRAW_LINES_FILL_CMD_ENCODER_.useVDO(Nt.VDO_MESHVG), 
            t._DRAW_LINES_FILL_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_VIEWS, 0), t._DRAW_LINES_FILL_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_DIR, 1), 
            t._DRAW_LINES_FILL_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_POS, 2), t._DRAW_LINES_FILL_CMD_ENCODER_.setMeshExByParamData(4 * t._PARAM_FILL_VB_POS_, 4 * t._PARAM_FILL_VB_OFFSET_POS_, 4 * t._PARAM_FILL_VB_SIZE_POS_, 4 * t._PARAM_FILL_IB_POS_, 4 * t._PARAM_FILL_IB_OFFSET_POS_, 4 * t._PARAM_FILL_IB_SIZE_POS_, 4 * t._PARAM_FILL_INDEX_ELEMENT_OFFSET_POS_), 
            t._DRAW_LINES_FILL_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_MATRIX32, 0, 7), t._DRAW_LINES_FILL_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_DRAWTEXTURE_COLOR, 1, 15), 
            t._DRAW_LINES_FILL_CMD_ENCODER_.setMeshExByParamData(4 * t._PARAM_LINES_VB_POS_, 4 * t._PARAM_LINE_VB_OFFSET_POS_, 4 * t._PARAM_LINES_VB_SIZE_POS_, 4 * t._PARAM_LINES_IB_POS_, 4 * t._PARAM_LINE_IB_OFFSET_POS_, 4 * t._PARAM_LINES_IB_SIZE_POS_, 4 * t._PARAM_LINE_INDEX_ELEMENT_OFFSET_POS_), 
            t._DRAW_LINES_FILL_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_MATRIX32, 0, 7), t._DRAW_LINES_FILL_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_DRAWTEXTURE_COLOR, 1, 15), 
            j.syncBufferToRenderThread(t._DRAW_LINES_FILL_CMD_ENCODER_)), n._paramData || (n._paramData = new ParamData(60, !0)), 
            n._x = e, n._y = i, n._paths = r, n._brush = _, n._pen = a;
            for (var s = 0, o = r.length; s < o; s++) {
                var h = r[s];
                switch (0 == s && (n._startOriX = h[1], n._startOriY = h[2]), h[0]) {
                  case "moveTo":
                  case "lineTo":
                    n._lastOriX = h[1], n._lastOriY = h[2], n._points.push(h[1]), n._points.push(h[2]);
                    break;

                  case "arcTo":
                    n._arcTo(h);
                    break;

                  case "closePath":
                    n._points.push(n._startOriX), n._points.push(n._startOriY);
                }
            }
            if (n._vertNum = n._points.length, a) {
                yt.createLine2(n._points, n._lines_ibArray, a.lineWidth, 0, n._lines_vbArray, !1);
                var u = l.create(a.strokeStyle), c = u.numColor, f = n._vertNum;
                (!n.lines_vbBuffer || n.lines_vbBuffer.getByteLength() < 3 * n._vertNum * 4) && (n.lines_vbBuffer = new ParamData(3 * f * 4, !0)), 
                n._lines_vbSize = 3 * n._vertNum * 4;
                var d = n.lines_vbBuffer._float32Data, A = n.lines_vbBuffer._int32Data, E = 0;
                for (s = 0; s < n._vertNum; s++) d[E++] = n._lines_vbArray[2 * s] + e, d[E++] = n._lines_vbArray[2 * s + 1] + i, 
                A[E++] = c;
                (!n.lines_ibBuffer || n.lines_ibBuffer.getByteLength() < 3 * (n._vertNum - 2) * 2) && (n.lines_ibBuffer = new ParamData(3 * (f - 2) * 2, !0, !0)), 
                n._lines_ibSize = 3 * (n._vertNum - 2) * 2;
                for (var m = n.lines_ibBuffer._int16Data, R = 0; R < 3 * (n._vertNum - 2); R++) m[R] = n._lines_ibArray[R];
            }
            if (_) {
                f = n._vertNum;
                var p = dt.earcut(n._points, null, 2);
                if (p.length > 0) {
                    (!n.fill_ibBuffer || n.fill_ibBuffer.getByteLength() < 2 * p.length) && (n.fill_ibBuffer = new ParamData(2 * p.length, !0, !0)), 
                    n._fill_ibSize = 2 * p.length, m = n.fill_ibBuffer._int16Data;
                    var T = 0;
                    for (R = 0; R < p.length; R++) m[T++] = p[R];
                }
                c = (u = l.create(_.fillStyle)).numColor, (!n.fill_vbBuffer || n.fill_vbBuffer.getByteLength() < 3 * n._vertNum * 4) && (n.fill_vbBuffer = new ParamData(3 * f * 4, !0)), 
                n._fill_vbSize = 3 * n._vertNum * 4, d = n.fill_vbBuffer._float32Data;
                var v = n.fill_vbBuffer._int32Data;
                for (v = n.fill_vbBuffer._int32Data, E = 0, s = 0; s < n._vertNum; s++) d[E++] = n._points[2 * s] + e, 
                d[E++] = n._points[2 * s + 1] + i, v[E++] = c;
            }
            n._paramData._float32Data;
            return A = n._paramData._int32Data, A[0] = 1, a && (A[t._PARAM_LINES_VB_POS_] = n.lines_vbBuffer.getPtrID(), 
            A[t._PARAM_LINES_IB_POS_] = n.lines_ibBuffer.getPtrID(), A[t._PARAM_LINES_VB_SIZE_POS_] = n._lines_vbSize, 
            A[t._PARAM_LINES_IB_SIZE_POS_] = n._lines_ibSize, A[t._PARAM_LINE_VB_OFFSET_POS_] = 0, 
            A[t._PARAM_LINE_IB_OFFSET_POS_] = 0, A[t._PARAM_LINE_INDEX_ELEMENT_OFFSET_POS_] = 0, 
            j.syncBufferToRenderThread(n.lines_vbBuffer), j.syncBufferToRenderThread(n.lines_ibBuffer)), 
            _ && (A[t._PARAM_FILL_VB_POS_] = n.fill_vbBuffer.getPtrID(), A[t._PARAM_FILL_IB_POS_] = n.fill_ibBuffer.getPtrID(), 
            A[t._PARAM_FILL_VB_SIZE_POS_] = n._fill_vbSize, A[t._PARAM_FILL_IB_SIZE_POS_] = n._fill_ibSize, 
            A[t._PARAM_FILL_VB_OFFSET_POS_] = 0, A[t._PARAM_FILL_IB_OFFSET_POS_] = 0, A[t._PARAM_FILL_INDEX_ELEMENT_OFFSET_POS_] = 0, 
            j.syncBufferToRenderThread(n.fill_vbBuffer), j.syncBufferToRenderThread(n.fill_ibBuffer)), 
            j.syncBufferToRenderThread(n._paramData), _ && a ? n._cmdCurrentPos = n._graphicsCmdEncoder.useCommandEncoder(t._DRAW_LINES_FILL_CMD_ENCODER_.getPtrID(), n._paramData.getPtrID(), -1) : _ && !a ? n._cmdCurrentPos = n._graphicsCmdEncoder.useCommandEncoder(t._DRAW_FILL_CMD_ENCODER_.getPtrID(), n._paramData.getPtrID(), -1) : !_ && a && (n._cmdCurrentPos = n._graphicsCmdEncoder.useCommandEncoder(t._DRAW_LINES_CMD_ENCODER_.getPtrID(), n._paramData.getPtrID(), -1)), 
            j.syncBufferToRenderThread(n._graphicsCmdEncoder), n;
        }, t.ID = "DrawPath", t._DRAW_LINES_CMD_ENCODER_ = null, t._DRAW_LINES_FILL_CMD_ENCODER_ = null, 
        t._DRAW_FILL_CMD_ENCODER_ = null, t._PARAM_LINES_VB_POS_ = 1, t._PARAM_LINES_IB_POS_ = 2, 
        t._PARAM_LINES_VB_SIZE_POS_ = 3, t._PARAM_LINES_IB_SIZE_POS_ = 4, t._PARAM_FILL_VB_POS_ = 5, 
        t._PARAM_FILL_IB_POS_ = 6, t._PARAM_FILL_VB_SIZE_POS_ = 7, t._PARAM_FILL_IB_SIZE_POS_ = 8, 
        t._PARAM_FILL_VB_OFFSET_POS_ = 9, t._PARAM_FILL_IB_OFFSET_POS_ = 10, t._PARAM_LINE_VB_OFFSET_POS_ = 11, 
        t._PARAM_LINE_IB_OFFSET_POS_ = 12, t._PARAM_FILL_INDEX_ELEMENT_OFFSET_POS_ = 13, 
        t._PARAM_LINE_INDEX_ELEMENT_OFFSET_POS_ = 14;
    }(), function() {
        function t() {
            this.ALPHA = 1, this.shaderType = 0, this.defines = new jt(), this.fillStyle = q.DEFAULT, 
            this.strokeStyle = q.DEFAULT;
        }
        _(t, "laya.webgl.shader.d2.Shader2D");
        return t.prototype.destroy = function() {
            this.defines = null, this.filters = null;
        }, t.__init__ = function() {
            var t, e;
            t = "/*\n\ttexture和fillrect使用的。\n*/\nattribute vec4 posuv;\nattribute vec4 attribColor;\nattribute vec4 attribFlags;\n//attribute vec4 clipDir;\n//attribute vec2 clipRect;\nuniform vec4 clipMatDir;\nuniform vec2 clipMatPos;\t\t// 这个是全局的，不用再应用矩阵了。\nvarying vec2 cliped;\nuniform vec2 size;\n\n#ifdef WORLDMAT\n\tuniform mat4 mmat;\n#endif\nuniform mat4 u_MvpMatrix;\n\nvarying vec4 v_texcoordAlpha;\nvarying vec4 v_color;\nvarying float v_useTex;\n\nvoid main() {\n\n\tvec4 pos = vec4(posuv.xy,0.,1.);\n#ifdef WORLDMAT\n\tpos=mmat*pos;\n#endif\n\tvec4 pos1  =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,0.,1.0);\n#ifdef MVP3D\n\tgl_Position=u_MvpMatrix*pos1;\n#else\n\tgl_Position=pos1;\n#endif\n\tv_texcoordAlpha.xy = posuv.zw;\n\t//v_texcoordAlpha.z = attribColor.a/255.0;\n\tv_color = attribColor/255.0;\n\tv_color.xyz*=v_color.w;//反正后面也要预乘\n\t\n\tv_useTex = attribFlags.r/255.0;\n\tfloat clipw = length(clipMatDir.xy);\n\tfloat cliph = length(clipMatDir.zw);\n\tvec2 clippos = pos.xy - clipMatPos.xy;\t//pos已经应用矩阵了，为了减的有意义，clip的位置也要缩放\n\tif(clipw>20000. && cliph>20000.)\n\t\tcliped = vec2(0.5,0.5);\n\telse {\n\t\t//转成0到1之间。/clipw/clipw 表示clippos与normalize之后的clip朝向点积之后，再除以clipw\n\t\tcliped=vec2( dot(clippos,clipMatDir.xy)/clipw/clipw, dot(clippos,clipMatDir.zw)/cliph/cliph);\n\t}\n\n}", 
            e = "/*\n\ttexture和fillrect使用的。\n*/\n\nprecision mediump float;\n//precision highp float;\nvarying vec4 v_texcoordAlpha;\nvarying vec4 v_color;\nvarying float v_useTex;\nuniform sampler2D texture;\nvarying vec2 cliped;\n\n#ifdef BLUR_FILTER\nuniform vec4 strength_sig2_2sig2_gauss1;\nuniform vec2 blurInfo;\n\n#define PI 3.141593\n\nfloat getGaussian(float x, float y){\n    return strength_sig2_2sig2_gauss1.w*exp(-(x*x+y*y)/strength_sig2_2sig2_gauss1.z);\n}\n\nvec4 blur(){\n    const float blurw = 9.0;\n    vec4 vec4Color = vec4(0.0,0.0,0.0,0.0);\n    vec2 halfsz=vec2(blurw,blurw)/2.0/blurInfo;    \n    vec2 startpos=v_texcoordAlpha.xy-halfsz;\n    vec2 ctexcoord = startpos;\n    vec2 step = 1.0/blurInfo;  //每个像素      \n    \n    for(float y = 0.0;y<=blurw; ++y){\n        ctexcoord.x=startpos.x;\n        for(float x = 0.0;x<=blurw; ++x){\n            //TODO 纹理坐标的固定偏移应该在vs中处理\n            vec4Color += texture2D(texture, ctexcoord)*getGaussian(x-blurw/2.0,y-blurw/2.0);\n            ctexcoord.x+=step.x;\n        }\n        ctexcoord.y+=step.y;\n    }\n    return vec4Color;\n}\n#endif\n\n#ifdef COLOR_FILTER\nuniform vec4 colorAlpha;\nuniform mat4 colorMat;\n#endif\n\n#ifdef GLOW_FILTER\nuniform vec4 u_color;\nuniform vec4 u_blurInfo1;\nuniform vec4 u_blurInfo2;\n#endif\n\n#ifdef COLOR_ADD\nuniform vec4 colorAdd;\n#endif\n\n//FILLTEXTURE\nuniform vec4 u_TexRange;//startu,startv,urange, vrange\n\nvoid main() {\n\tif(cliped.x<0.) discard;\n\tif(cliped.x>1.) discard;\n\tif(cliped.y<0.) discard;\n\tif(cliped.y>1.) discard;\n\t\n#ifdef FILLTEXTURE\t\n   vec4 color= texture2D(texture, fract(v_texcoordAlpha.xy)*u_TexRange.zw + u_TexRange.xy);\n#else\n   vec4 color= texture2D(texture, v_texcoordAlpha.xy);\n#endif\n\n   if(v_useTex<=0.)color = vec4(1.,1.,1.,1.);\n   color.a*=v_color.w;\n   //color.rgb*=v_color.w;\n   color.rgb*=v_color.rgb;\n   gl_FragColor=color;\n   \n   #ifdef COLOR_ADD\n\tgl_FragColor = vec4(colorAdd.rgb,colorAdd.a*gl_FragColor.a);\n\tgl_FragColor.xyz *= colorAdd.a;\n   #endif\n   \n   #ifdef BLUR_FILTER\n\tgl_FragColor =   blur();\n\tgl_FragColor.w*=v_color.w;   \n   #endif\n   \n   #ifdef COLOR_FILTER\n\tmat4 alphaMat =colorMat;\n\n\talphaMat[0][3] *= gl_FragColor.a;\n\talphaMat[1][3] *= gl_FragColor.a;\n\talphaMat[2][3] *= gl_FragColor.a;\n\n\tgl_FragColor = gl_FragColor * alphaMat;\n\tgl_FragColor += colorAlpha/255.0*gl_FragColor.a;\n   #endif\n   \n   #ifdef GLOW_FILTER\n\tconst float c_IterationTime = 10.0;\n\tfloat floatIterationTotalTime = c_IterationTime * c_IterationTime;\n\tvec4 vec4Color = vec4(0.0,0.0,0.0,0.0);\n\tvec2 vec2FilterDir = vec2(-(u_blurInfo1.z)/u_blurInfo2.x,-(u_blurInfo1.w)/u_blurInfo2.y);\n\tvec2 vec2FilterOff = vec2(u_blurInfo1.x/u_blurInfo2.x/c_IterationTime * 2.0,u_blurInfo1.y/u_blurInfo2.y/c_IterationTime * 2.0);\n\tfloat maxNum = u_blurInfo1.x * u_blurInfo1.y;\n\tvec2 vec2Off = vec2(0.0,0.0);\n\tfloat floatOff = c_IterationTime/2.0;\n\tfor(float i = 0.0;i<=c_IterationTime; ++i){\n\t\tfor(float j = 0.0;j<=c_IterationTime; ++j){\n\t\t\tvec2Off = vec2(vec2FilterOff.x * (i - floatOff),vec2FilterOff.y * (j - floatOff));\n\t\t\tvec4Color += texture2D(texture, v_texcoordAlpha.xy + vec2FilterDir + vec2Off)/floatIterationTotalTime;\n\t\t}\n\t}\n\tgl_FragColor = vec4(u_color.rgb,vec4Color.a * u_blurInfo2.z);\n\tgl_FragColor.rgb *= gl_FragColor.a;   \n   #endif\n   \n}", 
            he.preCompile2D(0, 1, t, e, null), t = "attribute vec4 position;\nattribute vec4 attribColor;\n//attribute vec4 clipDir;\n//attribute vec2 clipRect;\nuniform vec4 clipMatDir;\nuniform vec2 clipMatPos;\n#ifdef WORLDMAT\n\tuniform mat4 mmat;\n#endif\nuniform mat4 u_mmat2;\n//uniform vec2 u_pos;\nuniform vec2 size;\nvarying vec4 color;\n//vec4 dirxy=vec4(0.9,0.1, -0.1,0.9);\n//vec4 clip=vec4(100.,30.,300.,600.);\nvarying vec2 cliped;\nvoid main(){\n\t\n#ifdef WORLDMAT\n\tvec4 pos=mmat*vec4(position.xy,0.,1.);\n\tgl_Position =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n#else\n\tgl_Position =vec4((position.x/size.x-0.5)*2.0,(0.5-position.y/size.y)*2.0,position.z,1.0);\n#endif\t\n\tfloat clipw = length(clipMatDir.xy);\n\tfloat cliph = length(clipMatDir.zw);\n\tvec2 clippos = position.xy - clipMatPos.xy;\t//pos已经应用矩阵了，为了减的有意义，clip的位置也要缩放\n\tif(clipw>20000. && cliph>20000.)\n\t\tcliped = vec2(0.5,0.5);\n\telse {\n\t\t//clipdir是带缩放的方向，由于上面clippos是在缩放后的空间计算的，所以需要把方向先normalize一下\n\t\tcliped=vec2( dot(clippos,clipMatDir.xy)/clipw/clipw, dot(clippos,clipMatDir.zw)/cliph/cliph);\n\t}\n  //pos2d.x = dot(clippos,dirx);\n  color=attribColor/255.;\n}", 
            e = "precision mediump float;\n//precision mediump float;\nvarying vec4 color;\n//uniform float alpha;\nvarying vec2 cliped;\nvoid main(){\n\t//vec4 a=vec4(color.r, color.g, color.b, 1);\n\t//a.a*=alpha;\n    gl_FragColor= color;// vec4(color.r, color.g, color.b, alpha);\n\tgl_FragColor.rgb*=color.a;\n\tif(cliped.x<0.) discard;\n\tif(cliped.x>1.) discard;\n\tif(cliped.y<0.) discard;\n\tif(cliped.y>1.) discard;\n}", 
            he.preCompile2D(0, 4, t, e, null), t = "/*\n\ttexture和fillrect使用的。\n*/\nattribute vec4 posuv;\nattribute vec4 attribColor;\nattribute vec4 attribFlags;\n//attribute vec4 clipDir;\n//attribute vec2 clipRect;\nuniform vec4 clipMatDir;\nuniform vec2 clipMatPos;\t\t// 这个是全局的，不用再应用矩阵了。\nvarying vec2 cliped;\nuniform vec2 size;\n\n#ifdef WORLDMAT\n\tuniform mat4 mmat;\n#endif\nuniform mat4 u_MvpMatrix;\n\nvarying vec4 v_texcoordAlpha;\nvarying vec4 v_color;\nvarying float v_useTex;\n\nvoid main() {\n\n\tvec4 pos = vec4(posuv.xy,0.,1.);\n#ifdef WORLDMAT\n\tpos=mmat*pos;\n#endif\n\tvec4 pos1  =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,0.,1.0);\n#ifdef MVP3D\n\tgl_Position=u_MvpMatrix*pos1;\n#else\n\tgl_Position=pos1;\n#endif\n\tv_texcoordAlpha.xy = posuv.zw;\n\t//v_texcoordAlpha.z = attribColor.a/255.0;\n\tv_color = attribColor/255.0;\n\tv_color.xyz*=v_color.w;//反正后面也要预乘\n\t\n\tv_useTex = attribFlags.r/255.0;\n\tfloat clipw = length(clipMatDir.xy);\n\tfloat cliph = length(clipMatDir.zw);\n\tvec2 clippos = pos.xy - clipMatPos.xy;\t//pos已经应用矩阵了，为了减的有意义，clip的位置也要缩放\n\tif(clipw>20000. && cliph>20000.)\n\t\tcliped = vec2(0.5,0.5);\n\telse {\n\t\t//转成0到1之间。/clipw/clipw 表示clippos与normalize之后的clip朝向点积之后，再除以clipw\n\t\tcliped=vec2( dot(clippos,clipMatDir.xy)/clipw/clipw, dot(clippos,clipMatDir.zw)/cliph/cliph);\n\t}\n\n}", 
            e = '#ifdef FSHIGHPRECISION\n\tprecision highp float;\n#else\n\tprecision mediump float;\n#endif\n\n//precision highp float;\nvarying vec2 v_texcoord;\nuniform sampler2D texture;\nuniform float alpha;\nuniform vec4 u_TexRange;\nuniform vec2 u_offset;\n\n#import?BLUR_FILTER  "parts/BlurFilter_ps_uniform.glsl";\n\n#import?COLOR_FILTER "parts/ColorFilter.glsl" with ColorFilter_ps_uniform;\n\n#import?GLOW_FILTER "parts/GlowFilter_ps_uniform.glsl";\n\n#import?COLOR_ADD "parts/ColorAdd.glsl" with ColorAdd_ps_uniform;\n\nvoid main() {\n   vec2 newTexCoord;\n   newTexCoord.x = mod(u_offset.x + v_texcoord.x,u_TexRange.y) + u_TexRange.x;\n   newTexCoord.y = mod(u_offset.y + v_texcoord.y,u_TexRange.w) + u_TexRange.z;\n   vec4 color= texture2D(texture, newTexCoord);\n   color.a*=alpha;\n   gl_FragColor=color;\n   \n   #import?COLOR_ADD "parts/ColorAdd.glsl" with ColorAdd_ps_logic;\n   \n   #import?BLUR_FILTER  "parts/BlurFilter_ps_logic.glsl";\n   \n   #import?COLOR_FILTER "parts/ColorFilter.glsl" with ColorFilter_ps_logic;\n   \n   #import?GLOW_FILTER "parts/GlowFilter_ps_logic.glsl";\n}', 
            he.preCompile2D(0, 256, t, e, null), t = "attribute vec2 position;\nattribute vec2 texcoord;\nattribute vec4 color;\nuniform vec2 size;\nuniform float offsetX;\nuniform float offsetY;\nuniform mat4 mmat;\nuniform mat4 u_mmat2;\nvarying vec2 v_texcoord;\nvarying vec4 v_color;\nvoid main() {\n  vec4 pos=mmat*u_mmat2*vec4(offsetX+position.x,offsetY+position.y,0,1 );\n  gl_Position = vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n  v_color = color;\n  v_color.rgb *= v_color.a;\n  v_texcoord = texcoord;  \n}", 
            e = "precision mediump float;\nvarying vec2 v_texcoord;\nvarying vec4 v_color;\nuniform sampler2D texture;\nuniform float alpha;\nvoid main() {\n\tvec4 t_color = texture2D(texture, v_texcoord);\n\tgl_FragColor = t_color.rgba * v_color;\n\tgl_FragColor *= alpha;\n}", 
            he.preCompile2D(0, 512, t, e, null);
        }, t;
    }()), Ct = function() {
        function t(t, e, i, r) {
            this._idata = [];
        }
        _(t, "laya.layagl.CommandEncoder");
        var e = t.prototype;
        return e.getArrayData = function() {
            return this._idata;
        }, e.getPtrID = function() {
            return 0;
        }, e.beginEncoding = function() {}, e.endEncoding = function() {}, e.clearEncoding = function() {
            this._idata.length = 0;
        }, e.getCount = function() {
            return this._idata.length;
        }, e.add_ShaderValue = function(t) {
            this._idata.push(t);
        }, e.addShaderUniform = function(t) {
            this.add_ShaderValue(t);
        }, t;
    }(), gt = function() {
        function t(t) {
            this.script = null, this.codes = {}, this.funs = {}, this.curUseID = -1, this.funnames = "", 
            this.script = t;
            for (var e = 0, i = 0, r = 0; ;) {
                if ((e = t.indexOf("#begin", e)) < 0) break;
                for (r = e + 5; ;) {
                    if ((r = t.indexOf("#end", r)) < 0) break;
                    if ("i" !== t.charAt(r + 4)) break;
                    r += 5;
                }
                if (r < 0) throw "add include err,no #end:" + t;
                i = t.indexOf("\n", e);
                var _ = st.splitToWords(t.substr(e, i - e), null);
                "code" == _[1] ? this.codes[_[2]] = t.substr(i + 1, r - i - 1) : "function" == _[1] && (i = t.indexOf("function", e), 
                i += "function".length, this.funs[_[3]] = t.substr(i + 1, r - i - 1), this.funnames += _[3] + ";"), 
                e = r + 1;
            }
        }
        _(t, "laya.webgl.utils.InlcudeFile");
        var e = t.prototype;
        return e.getWith = function(t) {
            var e = t ? this.codes[t] : this.script;
            if (!e) throw "get with error:" + t;
            return e;
        }, e.getFunsScript = function(t) {
            var e = "";
            for (var i in this.funs) t.indexOf(i + ";") >= 0 && (e += this.funs[i]);
            return e;
        }, t;
    }(), Mt = (function() {
        function t() {
            this._graphicsCmdEncoder = null, this._paramData = null, this._fromX = NaN, this._fromY = NaN, 
            this._toX = NaN, this._toY = NaN, this._lineColor = null, this._lineWidth = NaN, 
            this._vid = 0;
        }
        _(t, "laya.layagl.cmdNative.DrawLineCmdNative");
        var e = t.prototype;
        e.recover = function() {
            C.recover("DrawLineCmd", this);
        }, a(0, e, "lineColor", function() {
            return this._lineColor;
        }, function(e) {
            this._lineColor = e;
            var i = l.create(this.lineColor).numColor, r = this._paramData._int32Data, _ = t._PARAM_VB_POS_;
            _++, _++, r[_++] = i, _++, _++, r[_++] = i, _++, _++, r[_++] = i, _++, _++, r[_++] = i, 
            j.syncBufferToRenderThread(this._paramData);
        }), a(0, e, "cmdID", function() {
            return "DrawLine";
        }), a(0, e, "toY", function() {
            return this._toY;
        }, function(e) {
            this._toY = e;
            var i = [ this._fromX, this._fromY, this._toX, this._toY ], r = [], _ = [];
            yt.createLine2(i, _, this._lineWidth, 0, r, !1);
            var a = this._paramData._float32Data, n = (this._paramData._int32Data, this._paramData._int16Data), s = t._PARAM_VB_POS_;
            a[s++] = r[0], a[s++] = r[1], s++, a[s++] = r[2], a[s++] = r[3], s++, a[s++] = r[4], 
            a[s++] = r[5], s++, a[s++] = r[6], a[s++] = r[7], s++;
            var o = 2 * t._PARAM_IB_POS_;
            n[o++] = _[0], n[o++] = _[1], n[o++] = _[2], n[o++] = _[3], n[o++] = _[4], n[o++] = _[5], 
            j.syncBufferToRenderThread(this._paramData);
        }), a(0, e, "fromX", function() {
            return this._fromX;
        }, function(e) {
            this._fromX = e;
            var i = [ this._fromX, this._fromY, this._toX, this._toY ], r = [], _ = [];
            yt.createLine2(i, _, this._lineWidth, 0, r, !1);
            var a = this._paramData._float32Data, n = (this._paramData._int32Data, this._paramData._int16Data), s = t._PARAM_VB_POS_;
            a[s++] = r[0], a[s++] = r[1], s++, a[s++] = r[2], a[s++] = r[3], s++, a[s++] = r[4], 
            a[s++] = r[5], s++, a[s++] = r[6], a[s++] = r[7], s++;
            var o = 2 * t._PARAM_IB_POS_;
            n[o++] = _[0], n[o++] = _[1], n[o++] = _[2], n[o++] = _[3], n[o++] = _[4], n[o++] = _[5], 
            j.syncBufferToRenderThread(this._paramData);
        }), a(0, e, "vid", function() {
            return this._vid;
        }, function(t) {
            this._vid = t;
        }), a(0, e, "toX", function() {
            return this._toX;
        }, function(e) {
            this._toX = e;
            var i = [ this._fromX, this._fromY, this._toX, this._toY ], r = [], _ = [];
            yt.createLine2(i, _, this._lineWidth, 0, r, !1);
            var a = this._paramData._float32Data, n = (this._paramData._int32Data, this._paramData._int16Data), s = t._PARAM_VB_POS_;
            a[s++] = r[0], a[s++] = r[1], s++, a[s++] = r[2], a[s++] = r[3], s++, a[s++] = r[4], 
            a[s++] = r[5], s++, a[s++] = r[6], a[s++] = r[7], s++;
            var o = 2 * t._PARAM_IB_POS_;
            n[o++] = _[0], n[o++] = _[1], n[o++] = _[2], n[o++] = _[3], n[o++] = _[4], n[o++] = _[5], 
            j.syncBufferToRenderThread(this._paramData);
        }), a(0, e, "fromY", function() {
            return this._fromY;
        }, function(e) {
            this._fromY = e;
            var i = [ this._fromX, this._fromY, this._toX, this._toY ], r = [], _ = [];
            yt.createLine2(i, _, this._lineWidth, 0, r, !1);
            var a = this._paramData._float32Data, n = (this._paramData._int32Data, this._paramData._int16Data), s = t._PARAM_VB_POS_;
            a[s++] = r[0], a[s++] = r[1], s++, a[s++] = r[2], a[s++] = r[3], s++, a[s++] = r[4], 
            a[s++] = r[5], s++, a[s++] = r[6], a[s++] = r[7], s++;
            var o = 2 * t._PARAM_IB_POS_;
            n[o++] = _[0], n[o++] = _[1], n[o++] = _[2], n[o++] = _[3], n[o++] = _[4], n[o++] = _[5], 
            j.syncBufferToRenderThread(this._paramData);
        }), a(0, e, "lineWidth", function() {
            return this._lineWidth;
        }, function(e) {
            this._lineWidth = e;
            var i = [ this._fromX, this._fromY, this._toX, this._toY ], r = [], _ = [];
            yt.createLine2(i, _, this.lineWidth, 0, r, !1);
            var a = this._paramData._float32Data, n = (this._paramData._int32Data, this._paramData._int16Data), s = t._PARAM_VB_POS_;
            a[s++] = r[0], a[s++] = r[1], s++, a[s++] = r[2], a[s++] = r[3], s++, a[s++] = r[4], 
            a[s++] = r[5], s++, a[s++] = r[6], a[s++] = r[7], s++;
            var o = 2 * t._PARAM_IB_POS_;
            n[o++] = _[0], n[o++] = _[1], n[o++] = _[2], n[o++] = _[3], n[o++] = _[4], n[o++] = _[5], 
            j.syncBufferToRenderThread(this._paramData);
        }), t.create = function(e, i, r, _, a, n, s) {
            var o = C.getItemByClass("DrawLineCmd", t);
            o._graphicsCmdEncoder = this._commandEncoder, t._DRAW_LINE_CMD_ENCODER_ || ((t._DRAW_LINE_CMD_ENCODER_ = j.instance.createCommandEncoder(152, 32, !0)).useProgramEx(Nt.PROGRAMEX_DRAWVG), 
            t._DRAW_LINE_CMD_ENCODER_.useVDO(Nt.VDO_MESHVG), t._DRAW_LINE_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_VIEWS, 0), 
            t._DRAW_LINE_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_DIR, 1), t._DRAW_LINE_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_POS, 2), 
            t._DRAW_LINE_CMD_ENCODER_.setMeshByParamData(4 * t._PARAM_VB_POS_, 4 * t._PARAM_VB_OFFSET_POS_, 4, 4 * t._PARAM_IB_POS_, 4 * t._PARAM_IB_OFFSET_POS_, 8, 4 * t._PARAM_INDEX_ELEMENT_OFFSET_POS_), 
            t._DRAW_LINE_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_MATRIX32, 0, 7), t._DRAW_LINE_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_DRAWTEXTURE_COLOR, 1, 15), 
            j.syncBufferToRenderThread(t._DRAW_LINE_CMD_ENCODER_)), o._paramData || (o._paramData = new ParamData(96, !0)), 
            o._fromX = e, o._fromY = i, o._toX = r, o._toY = _, o._lineColor = a, o._lineWidth = n, 
            o._vid = s;
            var h = l.create(a).numColor, u = [ e, i, r, _ ], c = [], f = [];
            yt.createLine2(u, f, n, 0, c, !1);
            var d = o._paramData._float32Data, A = o._paramData._int32Data, E = o._paramData._int16Data;
            A[0] = 1, A[1] = 48, A[2] = 12, A[t._PARAM_VB_OFFSET_POS_] = 0, A[t._PARAM_IB_OFFSET_POS_] = 0, 
            A[t._PARAM_INDEX_ELEMENT_OFFSET_POS_] = 0;
            var m = t._PARAM_VB_POS_;
            d[m++] = c[0], d[m++] = c[1], A[m++] = h, d[m++] = c[2], d[m++] = c[3], A[m++] = h, 
            d[m++] = c[4], d[m++] = c[5], A[m++] = h, d[m++] = c[6], d[m++] = c[7], A[m++] = h;
            var R = 2 * t._PARAM_IB_POS_;
            return E[R++] = f[0], E[R++] = f[1], E[R++] = f[2], E[R++] = f[3], E[R++] = f[4], 
            E[R++] = f[5], d[t._PARAM_LINECOLOR_POS_] = a || 4278190335, d[t._PARAM_LINEWIDTH_POS_] = n, 
            d[t._PARAM_VID_POS_] = s, j.syncBufferToRenderThread(o._paramData), o._graphicsCmdEncoder.useCommandEncoder(t._DRAW_LINE_CMD_ENCODER_.getPtrID(), o._paramData.getPtrID(), -1), 
            j.syncBufferToRenderThread(o._graphicsCmdEncoder), o;
        }, t.ID = "DrawLine", t._DRAW_LINE_CMD_ENCODER_ = null, t._PARAM_VB_POS_ = 3, t._PARAM_IB_POS_ = 15, 
        t._PARAM_LINECOLOR_POS_ = 18, t._PARAM_LINEWIDTH_POS_ = 19, t._PARAM_VID_POS_ = 20, 
        t._PARAM_VB_OFFSET_POS_ = 21, t._PARAM_IB_OFFSET_POS_ = 22, t._PARAM_INDEX_ELEMENT_OFFSET_POS_ = 23;
    }(), function() {
        function t() {
            this._draw_texture_cmd_encoder_ = j.instance.createCommandEncoder(64, 32, !0);
        }
        _(t, "laya.layagl.cmdNative.FillBorderWordsCmdNative");
        var e = t.prototype;
        e.createFillBorderText = function(e, i, r, _, a, n, s, o) {
            l.create(n).numColor;
            var h = {};
            h._curMat = new v(), h._italicDeg = 0, h._drawTextureUseColor = 4294967295, h.fillStyle = n, 
            h._fillColor = 4294967295, h.setFillColor = function(t) {
                h._fillColor = t;
            }, h.getFillColor = function() {
                return h._fillColor;
            }, h.mixRGBandAlpha = function(t) {
                return t;
            }, h._drawTextureM = function(t, i, r, _, a, n, s, o) {
                e.blendFuncByGlobalValue(Nt.GLOBALVALUE_BLENDFUNC_SRC, Nt.GLOBALVALUE_BLENDFUNC_DEST), 
                e.useProgramEx(Nt.PROGRAMEX_DRAWTEXTURE), e.useVDO(Nt.VDO_MESHQUADTEXTURE), e.uniformEx(Nt.GLOBALVALUE_VIEWS, 0), 
                e.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_DIR, 1), e.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_POS, 2), 
                e.uniformTexture(3, 33984, t.bitmap._glTexture);
                var h = new Float32Array([ i, r, o[0], o[1], 0, 0, i + _, r, o[2], o[3], 0, 0, i + _, r + a, o[4], o[5], 0, 0, i, r + a, o[6], o[7], 0, 0 ]), l = new Int32Array(h.buffer);
                l[4] = l[10] = l[16] = l[22] = 4294967295, l[5] = l[11] = l[17] = l[23] = 4294967295, 
                e.setRectMesh(1, h, h.length), e.modifyMesh(Nt.GLOBALVALUE_MATRIX32, 0, 7), e.modifyMesh(Nt.GLOBALVALUE_DRAWTEXTURE_COLOR, 1, 15), 
                j.syncBufferToRenderThread(e);
            }, t.cbook.filltext_native(h, null, i, r, _, a, n, s, o, null, 0);
        }, e.recover = function() {
            this._graphicsCmdEncoder = null, this.words = null, C.recover("FillBorderWordsCmd", this);
        }, a(0, e, "cmdID", function() {
            return "FillBorderWords";
        }), t.create = function(e, i, r, _, a, n, s) {
            t.cbook || new Error("Error:charbook not create!");
            var o = C.getItemByClass("FillBorderWordsCmd", t), h = o._graphicsCmdEncoder = this._commandEncoder;
            return o.words = e, o.x = i, o.y = r, o.font = _, o.color = a, o.strokeColor = n, 
            o.strokeWidth = s, o._draw_texture_cmd_encoder_.clearEncoding(), o.createFillBorderText(o._draw_texture_cmd_encoder_, e, i, r, _, a, n, s), 
            j.syncBufferToRenderThread(o._draw_texture_cmd_encoder_), h.useCommandEncoder(o._draw_texture_cmd_encoder_.getPtrID(), -1, -1), 
            j.syncBufferToRenderThread(h), o;
        }, t.ID = "FillBorderWords", r(t, [ "cbook", function() {
            return this.cbook = i.textRender;
        } ]);
    }(), function() {
        function t(t, e) {
            this.submitStartPos = 0, this.submitEndPos = 0, this.context = null, this.touches = [], 
            this.submits = [], this.sprite = null, this._mesh = null, this._pathMesh = null, 
            this._triangleMesh = null, this.meshlist = [], this._oldMesh = null, this._oldPathMesh = null, 
            this._oldTriMesh = null, this._oldMeshList = null, this.oldTx = 0, this.oldTy = 0, 
            this.cachedClipInfo = new v(), this.invMat = new v(), this.context = t, this.sprite = e, 
            t._globalClipMatrix.copyTo(this.cachedClipInfo);
        }
        _(t, "laya.webgl.canvas.WebGLCacheAsNormalCanvas");
        var e = t.prototype;
        e.startRec = function() {
            this.context._charSubmitCache._enbale && (this.context._charSubmitCache.enable(!1, this.context), 
            this.context._charSubmitCache.enable(!0, this.context)), this.touches.length = 0, 
            this.context.touches = this.touches, this.context._globalClipMatrix.copyTo(this.cachedClipInfo), 
            this.submits.length = 0, this.submitStartPos = this.context._submits._length;
            for (var t = 0, e = this.meshlist.length; t < e; t++) {
                var i = this.meshlist[t];
                i.canReuse ? i.releaseMesh() : i.destroy();
            }
            this.meshlist.length = 0, this._mesh = Yt.getAMesh(), this._pathMesh = Ht.getAMesh(), 
            this._triangleMesh = Zt.getAMesh(), this.meshlist.push(this._mesh), this.meshlist.push(this._pathMesh), 
            this.meshlist.push(this._triangleMesh), this.context._curSubmit = At.RENDERBASE, 
            this._oldMesh = this.context._mesh, this._oldPathMesh = this.context._pathMesh, 
            this._oldTriMesh = this.context._triangleMesh, this._oldMeshList = this.context.meshlist, 
            this.context._mesh = this._mesh, this.context._pathMesh = this._pathMesh, this.context._triangleMesh = this._triangleMesh, 
            this.context.meshlist = this.meshlist, this.oldTx = this.context._curMat.tx, this.oldTy = this.context._curMat.ty, 
            this.context._curMat.tx = 0, this.context._curMat.ty = 0, this.context._curMat.copyTo(this.invMat), 
            this.invMat.invert();
        }, e.endRec = function() {
            this.context._charSubmitCache._enbale && (this.context._charSubmitCache.enable(!1, this.context), 
            this.context._charSubmitCache.enable(!0, this.context));
            var t = this.context._submits;
            this.submitEndPos = t._length;
            for (var e = this.submitEndPos - this.submitStartPos, i = 0; i < e; i++) this.submits.push(t[this.submitStartPos + i]);
            t._length -= e, this.context._mesh = this._oldMesh, this.context._pathMesh = this._oldPathMesh, 
            this.context._triangleMesh = this._oldTriMesh, this.context.meshlist = this._oldMeshList, 
            this.context._curSubmit = At.RENDERBASE, this.context._curMat.tx = this.oldTx, this.context._curMat.ty = this.oldTy, 
            this.context.touches = null;
        }, e.isCacheValid = function() {
            var t = this.context._globalClipMatrix;
            return t.a == this.cachedClipInfo.a && t.b == this.cachedClipInfo.b && t.c == this.cachedClipInfo.c && t.d == this.cachedClipInfo.d && t.tx == this.cachedClipInfo.tx && t.ty == this.cachedClipInfo.ty;
        }, e.flushsubmit = function() {
            var t = At.RENDERBASE;
            this.submits.forEach(function(e) {
                e != At.RENDERBASE && (At.preRender = t, t = e, e.renderSubmit());
            });
        }, e.releaseMem = function() {}, r(t, [ "matI", function() {
            return this.matI = new v();
        } ]);
    }(), function() {
        function t(t, e, i) {
            this.i = null, this.x = null, this.y = null, this.prev = null, this.next = null, 
            this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = null, this.i = t, 
            this.x = e, this.y = i, this.prev = null, this.next = null, this.z = null, this.prevZ = null, 
            this.nextZ = null, this.steiner = !1;
        }
        return _(t, "laya.webgl.shapes.EarcutNode"), t;
    }()), yt = function() {
        function t() {}
        return _(t, "laya.webgl.shapes.BasePoly"), t.createLine2 = function(e, i, r, _, a, n) {
            if (e.length < 4) return null;
            var s = t.tempData.length > e.length + 2 ? t.tempData : new Array(e.length + 2);
            s[0] = e[0], s[1] = e[1];
            var o = 2, h = 0, l = e.length;
            for (h = 2; h < l; h += 2) Math.abs(e[h] - e[h - 2]) + Math.abs(e[h + 1] - e[h - 1]) > .01 && (s[o++] = e[h], 
            s[o++] = e[h + 1]);
            n && Math.abs(e[0] - s[o - 2]) + Math.abs(e[1] - s[o - 1]) > .01 && (s[o++] = e[0], 
            s[o++] = e[1]);
            var u = a;
            l = o / 2;
            var c, f, d, A, E, m, R, p, T, v, D, P, C, g, M, y, O, S, b, L, x = r / 2;
            d = s[0], A = s[1], v = d - (E = s[2]);
            T = (T = -(A - (m = s[3]))) / (L = Math.sqrt(T * T + v * v)) * x, v = v / L * x;
            for (u.push(d - T, A - v, d + T, A + v), h = 1; h < l - 1; h++) d = s[2 * (h - 1)], 
            A = s[2 * (h - 1) + 1], E = s[2 * h], m = s[2 * h + 1], R = s[2 * (h + 1)], p = s[2 * (h + 1) + 1], 
            v = d - E, P = E - R, M = (-(T = (T = -(A - m)) / (L = Math.sqrt(T * T + v * v)) * x) + d) * (-(v = v / L * x) + m) - (-T + E) * (-v + A), 
            S = (-(D = (D = -(m - p)) / (L = Math.sqrt(D * D + P * P)) * x) + R) * (-(P = P / L * x) + m) - (-D + E) * (-P + p), 
            b = (C = -v + A - (-v + m)) * (O = -D + E - (-D + R)) - (y = -P + p - (-P + m)) * (g = -T + E - (-T + d)), 
            Math.abs(b) < .1 ? (b += 10.1, u.push(E - T, m - v, E + T, m + v)) : (((c = (g * S - O * M) / b) - E) * (c - E) + ((f = (y * M - C * S) / b) - m) + (f - m), 
            u.push(c, f, E - (c - E), m - (f - m)));
            for (d = s[o - 4], A = s[o - 3], v = d - (E = s[o - 2]), T = (T = -(A - (m = s[o - 1]))) / (L = Math.sqrt(T * T + v * v)) * x, 
            v = v / L * x, u.push(E - T, m - v, E + T, m + v), h = 1; h < l; h++) i.push(_ + 2 * (h - 1), _ + 2 * (h - 1) + 1, _ + 2 * h + 1, _ + 2 * h + 1, _ + 2 * h, _ + 2 * (h - 1));
            return u;
        }, t.createLineTriangle = function(t, e, i, r, _, a, n) {
            var s = t.slice(), o = s.length, h = s[0], l = s[1], u = s[2], c = (s[2], 0), f = 0, d = 0, A = 0, E = o / 2;
            if (!(E <= 1) && 2 != E) {
                for (var m = new Array(4 * E), R = 0, p = 0, T = 0; T < E - 1; T++) h = s[p++], 
                l = s[p++], u = s[p++], A = s[p++] - l, 0 != (d = u - h) && 0 != A && (c = Math.sqrt(d * d + A * A)) > .001 && (m[f = 4 * R] = h, 
                m[f + 1] = l, m[f + 2] = d / c, m[f + 3] = A / c, R++);
                for (r ? (h = s[o - 2], l = s[o - 1], u = s[0], A = s[1] - l, 0 != (d = u - h) && 0 != A && (c = Math.sqrt(d * d + A * A)) > .001 && (m[f = 4 * R] = h, 
                m[f + 1] = l, m[f + 2] = d / c, m[f + 3] = A / c, R++)) : (m[f = 4 * R] = h, m[f + 1] = l, 
                m[f + 2] = d / c, m[f + 3] = A / c, R++), p = 0, T = 0; T < E; T++) {
                    h = s[p], l = s[p + 1], u = s[p + 2], s[p + 3];
                    s[p + 4], s[p + 5];
                }
            }
        }, r(t, [ "tempData", function() {
            return this.tempData = new Array(256);
        } ]), t;
    }(), Ot = function() {
        function t() {
            this._data = [], this._ndata = 0, this._tex = null, this._imgId = 0, this._clipid = -1, 
            this._enbale = !1, this._colorFiler = null, this._clipMatrix = new v();
        }
        _(t, "laya.webgl.text.CharSubmitCache");
        var e = t.prototype;
        return e.clear = function() {
            this._tex = null, this._imgId = -1, this._ndata = 0, this._enbale = !1, this._colorFiler = null;
        }, e.destroy = function() {
            this.clear(), this._data.length = 0, this._data = null;
        }, e.add = function(t, e, i, r, _, a) {
            this._ndata > 0 && (this._tex != e || this._imgId != i || this._clipid >= 0 && this._clipid != t._clipInfoID) && this.submit(t), 
            this._clipid = t._clipInfoID, t._globalClipMatrix.copyTo(this._clipMatrix), this._tex = e, 
            this._imgId = i, this._colorFiler = t._colorFiler, this._data[this._ndata] = r, 
            this._data[this._ndata + 1] = _, this._data[this._ndata + 2] = a, this._ndata += 3;
        }, e.getPos = function() {
            return 0 == t.__nPosPool ? new Array(8) : t.__posPool[--t.__nPosPool];
        }, e.enable = function(t, e) {
            t !== this._enbale && (this._enbale = t, this._enbale || this.submit(e));
        }, e.submit = function(e) {
            var i = this._ndata;
            if (i) {
                var r = e._mesh, _ = e._colorFiler;
                e._colorFiler = this._colorFiler;
                var a = te.create(e, r, Y.create(1, 0));
                e._submits[e._submits._length++] = e._curSubmit = a, a.shaderValue.textureHost = this._tex, 
                a._key.other = this._imgId, e._colorFiler = _, e._copyClipInfo(a, this._clipMatrix), 
                a.clipInfoID = this._clipid;
                for (var n = 0; n < i; n += 3) r.addQuad(this._data[n], this._data[n + 1], this._data[n + 2], !0), 
                t.__posPool[t.__nPosPool++] = this._data[n];
                i /= 3, a._numEle += 6 * i, r.indexNum += 6 * i, r.vertNum += 4 * i, e._drawCount += i, 
                this._ndata = 0, F.loopCount % 100 == 0 && (this._data.length = 0);
            }
        }, t.__posPool = [], t.__nPosPool = 0, t;
    }(), St = (function() {
        function t() {
            this._graphicsCmdEncoder = null, this._index = 0, this._paramData = null, this._texture = null, 
            this._x = NaN, this._y = NaN, this._width = NaN, this._height = NaN, this._matrix = null, 
            this._alpha = NaN, this._color = null, this._blendMode = null, this._cmdCurrentPos = 0, 
            this._blend_src = 0, this._blend_dest = 0;
        }
        _(t, "laya.layagl.cmdNative.DrawTextureCmdNative");
        var e = t.prototype;
        e.recover = function() {
            this._texture = null, C.recover("DrawTextureCmd", this);
        }, e._setBlendMode = function(t) {
            switch (t) {
              case "normal":
                this._blend_src = 1, this._blend_dest = 771;
                break;

              case "add":
                this._blend_src = 1, this._blend_dest = 772;
                break;

              case "multiply":
                this._blend_src = 774, this._blend_dest = 771;
                break;

              case "screen":
              case "light":
                this._blend_src = 1, this._blend_dest = 1;
                break;

              case "overlay":
                this._blend_src = 1, this._blend_dest = 769;
                break;

              case "destination-out":
                this._blend_src = 0, this._blend_dest = 0;
                break;

              case "mask":
                this._blend_src = 0, this._blend_dest = 770;
                break;

              default:
                alert("_setBlendMode Unknown type");
            }
        }, e._mixRGBandAlpha = function(t, e) {
            var i = (4278190080 & t) >>> 24;
            return 0 != i ? i *= e : i = 255 * e, 16777215 & t | i << 24;
        }, a(0, e, "cmdID", function() {
            return "DrawTexture";
        }), a(0, e, "matrix", function() {
            return this._matrix;
        }, function(e) {
            this._matrix || (this._graphicsCmdEncoder._idata[this._cmdCurrentPos + 1] = t._DRAW_TEXTURE_CMD_ENCODER_MATRIX_.getPtrID(), 
            j.syncBufferToRenderThread(this._graphicsCmdEncoder)), this._matrix = e;
            var i = this._paramData._float32Data;
            i[t._PARAM_MATRIX_POS_] = e.a, i[t._PARAM_MATRIX_POS_ + 1] = e.b, i[t._PARAM_MATRIX_POS_ + 2] = e.c, 
            i[t._PARAM_MATRIX_POS_ + 3] = e.d, i[t._PARAM_MATRIX_POS_ + 4] = e.tx, i[t._PARAM_MATRIX_POS_ + 5] = e.ty, 
            j.syncBufferToRenderThread(this._paramData);
        }), a(0, e, "y", function() {
            return this._y;
        }, function(e) {
            this._y = e;
            var i = this._paramData._float32Data;
            i[t._PARAM_VB_POS_ + 1] = this._y, i[t._PARAM_VB_POS_ + 7] = this._y, i[t._PARAM_VB_POS_ + 13] = this._y + this._height, 
            i[t._PARAM_VB_POS_ + 19] = this._y + this._height, j.syncBufferToRenderThread(this._paramData);
        }), a(0, e, "texture", function() {
            return this._texture;
        }, function(e) {
            if (e && e.url) {
                this._texture = e, this._paramData._int32Data[t._PARAM_TEXTURE_POS_] = this._texture.bitmap._glTexture.id;
                var i = this._paramData._float32Data, r = this.texture.uv;
                i[t._PARAM_VB_POS_ + 2] = r[0], i[t._PARAM_VB_POS_ + 3] = r[1], i[t._PARAM_VB_POS_ + 8] = r[2], 
                i[t._PARAM_VB_POS_ + 9] = r[3], i[t._PARAM_VB_POS_ + 14] = r[4], i[t._PARAM_VB_POS_ + 15] = r[5], 
                i[t._PARAM_VB_POS_ + 20] = r[6], i[t._PARAM_VB_POS_ + 21] = r[7], j.syncBufferToRenderThread(this._paramData);
            }
        }), a(0, e, "width", function() {
            return this._width;
        }, function(e) {
            this._width = e;
            var i = this._paramData._float32Data;
            i[t._PARAM_VB_POS_] = this._x, i[t._PARAM_VB_POS_ + 6] = this._x + this._width, 
            i[t._PARAM_VB_POS_ + 12] = this._x + this._width, i[t._PARAM_VB_POS_ + 18] = this._x, 
            j.syncBufferToRenderThread(this._paramData);
        }), a(0, e, "x", function() {
            return this._x;
        }, function(e) {
            this._x = e;
            var i = this._paramData._float32Data;
            i[t._PARAM_VB_POS_] = this._x, i[t._PARAM_VB_POS_ + 6] = this._x + this._width, 
            i[t._PARAM_VB_POS_ + 12] = this._x + this._width, i[t._PARAM_VB_POS_ + 18] = this._x, 
            j.syncBufferToRenderThread(this._paramData);
        }), a(0, e, "height", function() {
            return this._height;
        }, function(e) {
            this._height = e;
            var i = this._paramData._float32Data;
            i[t._PARAM_VB_POS_ + 1] = this._y, i[t._PARAM_VB_POS_ + 7] = this._y, i[t._PARAM_VB_POS_ + 13] = this._y + this._height, 
            i[t._PARAM_VB_POS_ + 19] = this._y + this._height, j.syncBufferToRenderThread(this._paramData);
        }), a(0, e, "alpha", function() {
            return this._alpha;
        }, function(t) {
            this._alpha = t;
        }), t.create = function(e, i, r, _, a, n, s, o, h) {
            var l = C.getItemByClass("DrawTextureCmd", t);
            l._graphicsCmdEncoder = this._commandEncoder, t._DRAW_TEXTURE_CMD_ENCODER_ || ((t._DRAW_TEXTURE_CMD_ENCODER_ = j.instance.createCommandEncoder(188, 32, !0)).blendFuncByGlobalValue(Nt.GLOBALVALUE_BLENDFUNC_SRC, Nt.GLOBALVALUE_BLENDFUNC_DEST), 
            t._DRAW_TEXTURE_CMD_ENCODER_.blendFuncByParamData(4 * t._PARAM_BLEND_SRC_POS_, 4 * t._PARAM_BLEND_DEST_POS_), 
            t._DRAW_TEXTURE_CMD_ENCODER_.useProgramEx(Nt.PROGRAMEX_DRAWTEXTURE), t._DRAW_TEXTURE_CMD_ENCODER_.useVDO(Nt.VDO_MESHQUADTEXTURE), 
            t._DRAW_TEXTURE_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_VIEWS, 0), t._DRAW_TEXTURE_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_DIR, 1), 
            t._DRAW_TEXTURE_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_POS, 2), t._DRAW_TEXTURE_CMD_ENCODER_.uniformTextureByParamData(4 * t._PARAM_UNIFORM_LOCATION_POS_, 4 * t._PARAM_TEX_LOCATION_POS_, 4 * t._PARAM_TEXTURE_POS_), 
            t._DRAW_TEXTURE_CMD_ENCODER_.setRectMeshByParamData(4 * t._PARAM_RECT_NUM_POS_, 4 * t._PARAM_VB_POS_, 4 * t._PARAM_VB_SIZE_POS_), 
            t._DRAW_TEXTURE_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_MATRIX32, 0, 7), t._DRAW_TEXTURE_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_DRAWTEXTURE_COLOR, 1, 15), 
            j.syncBufferToRenderThread(t._DRAW_TEXTURE_CMD_ENCODER_)), t._DRAW_TEXTURE_CMD_ENCODER_MATRIX_ || ((t._DRAW_TEXTURE_CMD_ENCODER_MATRIX_ = j.instance.createCommandEncoder(224, 32, !0)).blendFuncByGlobalValue(Nt.GLOBALVALUE_BLENDFUNC_SRC, Nt.GLOBALVALUE_BLENDFUNC_DEST), 
            t._DRAW_TEXTURE_CMD_ENCODER_MATRIX_.blendFuncByParamData(4 * t._PARAM_BLEND_SRC_POS_, 4 * t._PARAM_BLEND_DEST_POS_), 
            t._DRAW_TEXTURE_CMD_ENCODER_MATRIX_.useProgramEx(Nt.PROGRAMEX_DRAWTEXTURE), t._DRAW_TEXTURE_CMD_ENCODER_MATRIX_.useVDO(Nt.VDO_MESHQUADTEXTURE), 
            t._DRAW_TEXTURE_CMD_ENCODER_MATRIX_.save(), t._DRAW_TEXTURE_CMD_ENCODER_MATRIX_.setGlobalValueByParamData(Nt.GLOBALVALUE_MATRIX32, 7, 4 * t._PARAM_MATRIX_POS_), 
            t._DRAW_TEXTURE_CMD_ENCODER_MATRIX_.uniformEx(Nt.GLOBALVALUE_VIEWS, 0), t._DRAW_TEXTURE_CMD_ENCODER_MATRIX_.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_DIR, 1), 
            t._DRAW_TEXTURE_CMD_ENCODER_MATRIX_.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_POS, 2), t._DRAW_TEXTURE_CMD_ENCODER_MATRIX_.uniformTextureByParamData(4 * t._PARAM_UNIFORM_LOCATION_POS_, 4 * t._PARAM_TEX_LOCATION_POS_, 4 * t._PARAM_TEXTURE_POS_), 
            t._DRAW_TEXTURE_CMD_ENCODER_MATRIX_.setRectMeshByParamData(4 * t._PARAM_RECT_NUM_POS_, 4 * t._PARAM_VB_POS_, 4 * t._PARAM_VB_SIZE_POS_), 
            t._DRAW_TEXTURE_CMD_ENCODER_MATRIX_.modifyMesh(Nt.GLOBALVALUE_MATRIX32, 0, 7), t._DRAW_TEXTURE_CMD_ENCODER_MATRIX_.modifyMesh(Nt.GLOBALVALUE_DRAWTEXTURE_COLOR, 1, 15), 
            t._DRAW_TEXTURE_CMD_ENCODER_MATRIX_.restore(), j.syncBufferToRenderThread(t._DRAW_TEXTURE_CMD_ENCODER_MATRIX_)), 
            l._paramData || (l._paramData = new ParamData(148, !0)), l._texture = e, l._x = i, 
            l._y = r, l._width = _, l._height = a, l._matrix = n, l._alpha = s, l._color = o, 
            l._blendMode = h;
            var u = 0 != _ ? _ : e.bitmap.width, c = 0 != a ? a : e.bitmap.height, f = e.uv, d = l._paramData._float32Data, A = l._paramData._int32Data;
            A[t._PARAM_UNIFORM_LOCATION_POS_] = 3, A[t._PARAM_TEX_LOCATION_POS_] = 33984, A[t._PARAM_TEXTURE_POS_] = e.bitmap._glTexture.id, 
            A[t._PARAM_RECT_NUM_POS_] = 1, A[t._PARAM_VB_SIZE_POS_] = 96, h ? (l._setBlendMode(h), 
            A[t._PARAM_BLEND_SRC_POS_] = l._blend_src, A[t._PARAM_BLEND_DEST_POS_] = l._blend_dest) : (A[t._PARAM_BLEND_SRC_POS_] = -1, 
            A[t._PARAM_BLEND_DEST_POS_] = -1);
            var E = 4294967295;
            s && (E = l._mixRGBandAlpha(E, s));
            var m = t._PARAM_VB_POS_;
            return d[m++] = i, d[m++] = r, d[m++] = f[0], d[m++] = f[1], A[m++] = E, A[m++] = 4294967295, 
            d[m++] = i + u, d[m++] = r, d[m++] = f[2], d[m++] = f[3], A[m++] = E, A[m++] = 4294967295, 
            d[m++] = i + u, d[m++] = r + c, d[m++] = f[4], d[m++] = f[5], A[m++] = E, A[m++] = 4294967295, 
            d[m++] = i, d[m++] = r + c, d[m++] = f[6], d[m++] = f[7], A[m++] = E, A[m++] = 4294967295, 
            n && (d[t._PARAM_MATRIX_POS_] = n.a, d[t._PARAM_MATRIX_POS_ + 1] = n.b, d[t._PARAM_MATRIX_POS_ + 2] = n.c, 
            d[t._PARAM_MATRIX_POS_ + 3] = n.d, d[t._PARAM_MATRIX_POS_ + 4] = n.tx, d[t._PARAM_MATRIX_POS_ + 5] = n.ty), 
            j.syncBufferToRenderThread(l._paramData), l._cmdCurrentPos = n ? l._graphicsCmdEncoder.useCommandEncoder(t._DRAW_TEXTURE_CMD_ENCODER_MATRIX_.getPtrID(), l._paramData.getPtrID(), -1) : l._graphicsCmdEncoder.useCommandEncoder(t._DRAW_TEXTURE_CMD_ENCODER_.getPtrID(), l._paramData.getPtrID(), -1), 
            j.syncBufferToRenderThread(l._graphicsCmdEncoder), l;
        }, t.ID = "DrawTexture", t._DRAW_TEXTURE_CMD_ENCODER_ = null, t._DRAW_TEXTURE_CMD_ENCODER_MATRIX_ = null, 
        t._PARAM_UNIFORM_LOCATION_POS_ = 0, t._PARAM_TEX_LOCATION_POS_ = 1, t._PARAM_TEXTURE_POS_ = 2, 
        t._PARAM_RECT_NUM_POS_ = 3, t._PARAM_VB_SIZE_POS_ = 4, t._PARAM_VB_POS_ = 5, t._PARAM_MATRIX_POS_ = 29, 
        t._PARAM_BLEND_SRC_POS_ = 35, t._PARAM_BLEND_DEST_POS_ = 36;
    }(), function() {
        function t() {
            this._graphicsCmdEncoder = null;
        }
        _(t, "laya.layagl.cmdNative.RestoreCmdNative");
        var e = t.prototype;
        e.recover = function() {
            C.recover("RestoreCmd", this);
        }, a(0, e, "cmdID", function() {
            return "Restore";
        }), t.create = function() {
            var e = C.getItemByClass("RestoreCmd", t), i = e._graphicsCmdEncoder = this._commandEncoder;
            return i.restore(), j.syncBufferToRenderThread(i), e;
        }, t.ID = "Restore";
    }(), function() {
        function t() {}
        return _(t, "laya.webgl.resource.WebGLRTMgr"), t.getRT = function(e, i) {
            i |= 0, (e |= 0) >= 1e4 && console.error("getRT error! w too big");
            var r, _ = 1e4 * i + e, a = t.dict[_];
            return a && a.length > 0 ? (r = a.pop(), r._mgrKey = _, r) : (r = new le(e, i, 1, -1), 
            r._mgrKey = _, r);
        }, t.releaseRT = function(e) {
            if (!(e._mgrKey <= 0)) {
                var i = t.dict[e._mgrKey];
                !i && (i = [], t.dict[e._mgrKey] = i), e._mgrKey = 0, i.push(e);
            }
        }, t.dict = {}, t;
    }()), bt = (function() {
        function t() {
            this._graphicsCmdEncoder = null, this._paramData = null, this.vbBuffer = null, this._template = null, 
            this._floatCountPerVertex = 29, this._firstNewElement = 0, this._firstFreeElement = 0, 
            this._firstActiveElement = 0, this._firstRetiredElement = 0, this._maxParticleNum = 0;
        }
        _(t, "laya.layagl.cmdNative.DrawParticleCmdNative");
        var e = t.prototype;
        e.updateParticle = function() {
            if (this._template.texture) {
                this._template.updateParticleForNative();
                var e = this._template.sv, i = this._paramData._int32Data, r = this._paramData._float32Data;
                r[t._PARAM_CURRENTTIME_POS_] = e.u_CurrentTime, r[t._PARAM_DURATION_POS_] = e.u_Duration, 
                r[t._PARAM_ENDVEL_POS_] = e.u_EndVelocity, r[t._PARAM_GRAVITY_POS_] = e.u_Gravity[0], 
                r[t._PARAM_GRAVITY_POS_ + 1] = e.u_Gravity[1], r[t._PARAM_GRAVITY_POS_ + 2] = e.u_Gravity[2], 
                e.size[0] = bt.width, e.size[1] = bt.height, r[t._PARAM_SIZE_POS_] = e.size[0], 
                r[t._PARAM_SIZE_POS_ + 1] = e.size[1], r[t._PARAM_MAT_POS_] = 1, r[t._PARAM_MAT_POS_ + 1] = 0, 
                r[t._PARAM_MAT_POS_ + 2] = 0, r[t._PARAM_MAT_POS_ + 3] = 0, r[t._PARAM_MAT_POS_ + 4] = 0, 
                r[t._PARAM_MAT_POS_ + 5] = 1, r[t._PARAM_MAT_POS_ + 6] = 0, r[t._PARAM_MAT_POS_ + 7] = 0, 
                r[t._PARAM_MAT_POS_ + 8] = 0, r[t._PARAM_MAT_POS_ + 9] = 0, r[t._PARAM_MAT_POS_ + 10] = 1, 
                r[t._PARAM_MAT_POS_ + 11] = 0, r[t._PARAM_MAT_POS_ + 12] = 0, r[t._PARAM_MAT_POS_ + 13] = 0, 
                r[t._PARAM_MAT_POS_ + 14] = 0, r[t._PARAM_MAT_POS_ + 15] = 1, i[t._PARAM_TEXTURE_LOC_POS_] = 33984, 
                i[t._PARAM_TEXTURE_POS_] = this._template.texture.bitmap._glTexture.id, this.vbBuffer = this._template.getConchMesh(), 
                this._firstNewElement = this._template.getFirstNewElement(), this._firstFreeElement = this._template.getFirstFreeElement(), 
                this._firstActiveElement = this._template.getFirstActiveElement(), this._firstRetiredElement = this._template.getFirstRetiredElement();
                var _ = 0, a = 0, n = 0, s = 0, o = 0, h = 0;
                this._firstActiveElement != this._firstFreeElement && (this._firstActiveElement < this._firstFreeElement ? (i[t._PARAM_REGDATA_POS_] = 1, 
                o = this._firstFreeElement - this._firstActiveElement, _ = (this._firstFreeElement - this._firstActiveElement) * this._floatCountPerVertex * 4 * 4, 
                n = this._firstActiveElement * this._floatCountPerVertex * 4 * 4) : (i[t._PARAM_REGDATA_POS_] = 0, 
                o = this._maxParticleNum - this._firstActiveElement, _ = (this._maxParticleNum - this._firstActiveElement) * this._floatCountPerVertex * 4 * 4, 
                n = this._firstActiveElement * this._floatCountPerVertex * 4 * 4, this._firstFreeElement > 0 ? (h = this._firstFreeElement, 
                a = this._firstFreeElement * this._floatCountPerVertex * 4 * 4, s = 0) : i[t._PARAM_REGDATA_POS_] = 1)), 
                i[t._PARAM_VB1_POS_] = this.vbBuffer.getPtrID(), i[t._PARAM_RECT1_NUM_POS_] = o, 
                i[t._PARAM_VB1_SIZE_POS_] = _, i[t._PARAM_VB1_OFFSET_POS_] = n, j.syncBufferToRenderThread(this.vbBuffer), 
                a > 0 && (i[t._PARAM_VB2_POS_] = this.vbBuffer.getPtrID(), i[t._PARAM_RECT2_NUM_POS_] = h, 
                i[t._PARAM_VB2_SIZE_POS_] = a, i[t._PARAM_VB2_OFFSET_POS_] = s), j.syncBufferToRenderThread(this._paramData), 
                this._template.addDrawCounter();
            }
        }, e.recover = function() {
            this._template = null, C.recover("DrawParticleCmd", this);
        }, a(0, e, "cmdID", function() {
            return "DrawParticleCmd";
        }), t.create = function(e) {
            var i = C.getItemByClass("DrawParticleCmd", t);
            i._graphicsCmdEncoder = this._commandEncoder, t._DRAW_PARTICLE_CMD_ENCODER_ || ((t._DRAW_PARTICLE_CMD_ENCODER_ = j.instance.createCommandEncoder(284, 32, !0)).blendFuncByGlobalValue(Nt.GLOBALVALUE_BLENDFUNC_SRC, Nt.GLOBALVALUE_BLENDFUNC_DEST), 
            t._DRAW_PARTICLE_CMD_ENCODER_.useProgramEx(Nt.PROGRAMEX_DRAWPARTICLE), t._DRAW_PARTICLE_CMD_ENCODER_.useVDO(Nt.VDO_MESHPARTICLE), 
            t._DRAW_PARTICLE_CMD_ENCODER_.uniformByParamData(0, 4 * t._PARAM_CURRENTTIME_POS_), 
            t._DRAW_PARTICLE_CMD_ENCODER_.uniformByParamData(1, 4 * t._PARAM_DURATION_POS_), 
            t._DRAW_PARTICLE_CMD_ENCODER_.uniformByParamData(2, 4 * t._PARAM_ENDVEL_POS_), t._DRAW_PARTICLE_CMD_ENCODER_.uniformByParamData(3, 4 * t._PARAM_GRAVITY_POS_), 
            t._DRAW_PARTICLE_CMD_ENCODER_.uniformByParamData(4, 4 * t._PARAM_SIZE_POS_), t._DRAW_PARTICLE_CMD_ENCODER_.uniformByParamData(5, 4 * t._PARAM_MAT_POS_), 
            t._DRAW_PARTICLE_CMD_ENCODER_.uniformTextureByParamData(4 * t._PARAM_TEXTURE_UNIFORMLOC_POS_, 4 * t._PARAM_TEXTURE_LOC_POS_, 4 * t._PARAM_TEXTURE_POS_), 
            t._DRAW_PARTICLE_CMD_ENCODER_.setRectMeshExByParamData(4 * t._PARAM_RECT1_NUM_POS_, 4 * t._PARAM_VB1_POS_, 4 * t._PARAM_VB1_SIZE_POS_, 4 * t._PARAM_VB1_OFFSET_POS_), 
            t._DRAW_PARTICLE_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_MATRIX32, 1, 7), t._DRAW_PARTICLE_CMD_ENCODER_.loadDataToRegByParamData(0, 4 * t._PARAM_REGDATA_POS_, 4), 
            t._DRAW_PARTICLE_CMD_ENCODER_.ifGreater0(0, 2), t._DRAW_PARTICLE_CMD_ENCODER_.setRectMeshExByParamData(4 * t._PARAM_RECT2_NUM_POS_, 4 * t._PARAM_VB2_POS_, 4 * t._PARAM_VB2_SIZE_POS_, 4 * t._PARAM_VB2_OFFSET_POS_), 
            t._DRAW_PARTICLE_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_MATRIX32, 1, 7), j.syncBufferToRenderThread(t._DRAW_PARTICLE_CMD_ENCODER_)), 
            i._paramData || (i._paramData = new ParamData(144, !0)), i._template = e, i._maxParticleNum = e.settings.maxPartices;
            var r = i._paramData._int32Data, _ = (e._sv, i._paramData._float32Data), a = 0;
            for (_[t._PARAM_CURRENTTIME_POS_] = -1, _[t._PARAM_DURATION_POS_] = -1, _[t._PARAM_ENDVEL_POS_] = -1, 
            _[t._PARAM_GRAVITY_POS_] = -1, _[t._PARAM_GRAVITY_POS_ + 1] = -1, _[t._PARAM_GRAVITY_POS_ + 2] = -1, 
            _[t._PARAM_SIZE_POS_] = -1, _[t._PARAM_SIZE_POS_ + 1] = -1, a = 0; a < 16; a++) _[t._PARAM_MAT_POS_ + a] = -1;
            return r[t._PARAM_TEXTURE_LOC_POS_] = -1, r[t._PARAM_TEXTURE_POS_] = -1, r[t._PARAM_TEXTURE_UNIFORMLOC_POS_] = 6, 
            r[t._PARAM_REGDATA_POS_] = 0, r[t._PARAM_VB1_POS_] = -1, r[t._PARAM_VB2_POS_] = -1, 
            r[t._PARAM_VB1_SIZE_POS_] = -1, r[t._PARAM_VB2_SIZE_POS_] = -1, r[t._PARAM_RECT1_NUM_POS_] = -1, 
            r[t._PARAM_RECT2_NUM_POS_] = -1, j.syncBufferToRenderThread(i._paramData), i._graphicsCmdEncoder.useCommandEncoder(t._DRAW_PARTICLE_CMD_ENCODER_.getPtrID(), i._paramData.getPtrID(), -1), 
            j.syncBufferToRenderThread(i._graphicsCmdEncoder), i;
        }, t.ID = "DrawParticleCmd", t._DRAW_PARTICLE_CMD_ENCODER_ = null, t._PARAM_VB1_POS_ = 0, 
        t._PARAM_VB2_POS_ = 1, t._PARAM_VB1_SIZE_POS_ = 2, t._PARAM_VB2_SIZE_POS_ = 3, t._PARAM_CURRENTTIME_POS_ = 4, 
        t._PARAM_DURATION_POS_ = 5, t._PARAM_ENDVEL_POS_ = 6, t._PARAM_GRAVITY_POS_ = 7, 
        t._PARAM_SIZE_POS_ = 10, t._PARAM_MAT_POS_ = 12, t._PARAM_TEXTURE_LOC_POS_ = 28, 
        t._PARAM_TEXTURE_POS_ = 29, t._PARAM_REGDATA_POS_ = 30, t._PARAM_TEXTURE_UNIFORMLOC_POS_ = 31, 
        t._PARAM_RECT1_NUM_POS_ = 32, t._PARAM_RECT2_NUM_POS_ = 33, t._PARAM_VB1_OFFSET_POS_ = 34, 
        t._PARAM_VB2_OFFSET_POS_ = 35;
    }(), function() {
        function t() {}
        return _(t, "laya.webgl.utils.RenderState2D"), t.mat2MatArray = function(e, i) {
            var r = e, _ = i;
            return _[0] = r.a, _[1] = r.b, _[2] = t.EMPTYMAT4_ARRAY[2], _[3] = t.EMPTYMAT4_ARRAY[3], 
            _[4] = r.c, _[5] = r.d, _[6] = t.EMPTYMAT4_ARRAY[6], _[7] = t.EMPTYMAT4_ARRAY[7], 
            _[8] = t.EMPTYMAT4_ARRAY[8], _[9] = t.EMPTYMAT4_ARRAY[9], _[10] = t.EMPTYMAT4_ARRAY[10], 
            _[11] = t.EMPTYMAT4_ARRAY[11], _[12] = r.tx, _[13] = r.ty, _[14] = t.EMPTYMAT4_ARRAY[14], 
            _[15] = t.EMPTYMAT4_ARRAY[15], i;
        }, t.restoreTempArray = function() {
            t.TEMPMAT4_ARRAY[0] = 1, t.TEMPMAT4_ARRAY[1] = 0, t.TEMPMAT4_ARRAY[4] = 0, t.TEMPMAT4_ARRAY[5] = 1, 
            t.TEMPMAT4_ARRAY[12] = 0, t.TEMPMAT4_ARRAY[13] = 0;
        }, t.clear = function() {
            t.worldScissorTest = !1, t.worldAlpha = 1;
        }, t._MAXSIZE = 99999999, t.EMPTYMAT4_ARRAY = [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ], 
        t.TEMPMAT4_ARRAY = [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ], t.worldMatrix4 = t.TEMPMAT4_ARRAY, 
        t.matWVP = null, t.worldAlpha = 1, t.worldScissorTest = !1, t.worldShaderDefines = null, 
        t.worldFilters = null, t.width = 0, t.height = 0, r(t, [ "worldMatrix", function() {
            return this.worldMatrix = new v();
        } ]), t;
    }()), Lt = (function() {
        function t() {
            this._renderType = 0, this._repaint = 0, this._x = NaN, this._y = NaN;
        }
        _(t, "laya.layagl.QuickTestTool");
        var e = t.prototype;
        e.render = function(e, i, r) {
            F.spriteCount++, t._addType(this._renderType), t.showRenderTypeInfo(this._renderType), 
            y.renders[this._renderType]._fun(this, e, i + this._x, r + this._y), this._repaint = 0;
        }, e._stageRender = function(e, r, _) {
            t._countStart(), t._PreStageRender.call(i.stage, e, r, _), t._countEnd();
        }, t.getMCDName = function(e) {
            return t._typeToNameDic[e];
        }, t.showRenderTypeInfo = function(e, i) {
            if (void 0 === i && (i = !1), i || !t.showedDic[e]) {
                if (t.showedDic[e] = !0, !t._rendertypeToStrDic[e]) {
                    var r = [], _ = 0;
                    for (_ = 1; _ <= e; ) _ & e && r.push(t.getMCDName(_ & e)), _ <<= 1;
                    t._rendertypeToStrDic[e] = r.join(",");
                }
                console.log("cmd:", t._rendertypeToStrDic[e]);
            }
        }, t.__init__ = function() {
            t._typeToNameDic[1] = "ALPHA", t._typeToNameDic[2] = "TRANSFORM", t._typeToNameDic[256] = "TEXTURE", 
            t._typeToNameDic[512] = "GRAPHICS", t._typeToNameDic[4096] = "ONECHILD", t._typeToNameDic[8192] = "CHILDS", 
            t._typeToNameDic[3] = "TRANSFORM|ALPHA", t._typeToNameDic[8] = "CANVAS", t._typeToNameDic[4] = "BLEND", 
            t._typeToNameDic[16] = "FILTERS", t._typeToNameDic[32] = "MASK", t._typeToNameDic[64] = "CLIP", 
            t._typeToNameDic[1024] = "LAYAGL3D";
        }, t._countStart = function() {
            var e;
            for (e in t._countDic) t._countDic[e] = 0;
        }, t._countEnd = function() {
            ++t._i > 60 && (t.showCountInfo(), t._i = 0);
        }, t._addType = function(e) {
            t._countDic[e] ? t._countDic[e] += 1 : t._countDic[e] = 1;
        }, t.showCountInfo = function() {
            console.log("===================");
            var e;
            for (e in t._countDic) console.log("count:" + t._countDic[e]), t.showRenderTypeInfo(e, !0);
        }, t.enableQuickTest = function() {
            t.__init__(), I.prototype.render = t.prototype.render, t._PreStageRender = N.prototype.render, 
            N.prototype.render = t.prototype._stageRender;
        }, t.showedDic = {}, t._rendertypeToStrDic = {}, t._typeToNameDic = {}, t._PreStageRender = null, 
        t._countDic = {}, t._i = 0;
    }(), function() {
        function t() {
            this.blendShader = 0, this.submitType = 0, this.other = 0, this.clear();
        }
        _(t, "laya.webgl.submit.SubmitKey");
        var e = t.prototype;
        return e.clear = function() {
            this.submitType = -1, this.blendShader = this.other = 0;
        }, e.copyFrom = function(t) {
            this.other = t.other, this.blendShader = t.blendShader, this.submitType = t.submitType;
        }, e.copyFrom2 = function(t, e, i) {
            this.other = i, this.submitType = e;
        }, e.equal3_2 = function(t, e, i) {
            return this.submitType === e && this.other === i && this.blendShader === t.blendShader;
        }, e.equal4_2 = function(t, e, i) {
            return this.submitType === e && this.other === i && this.blendShader === t.blendShader;
        }, e.equal_3 = function(t) {
            return this.submitType === t.submitType && this.blendShader === t.blendShader;
        }, e.equal = function(t) {
            return this.other === t.other && this.submitType === t.submitType && this.blendShader === t.blendShader;
        }, t;
    }()), xt = (function() {
        function t() {
            this._graphicsCmdEncoder = null, this._index = 0, this._text = null, this._x = NaN, 
            this._y = NaN, this._font = null, this._color = null, this._strokeColor = null, 
            this._strokeWidth = 0, this._textAlign = null, this._draw_texture_cmd_encoder_ = j.instance.createCommandEncoder(64, 32, !0);
        }
        _(t, "laya.layagl.cmdNative.FillBorderTextCmdNative");
        var e = t.prototype;
        e.createFillBorderText = function(e, i, r, _, a, n, s, o, h) {
            l.create(n).numColor;
            var u = {};
            u._curMat = new v(), u._italicDeg = 0, u._drawTextureUseColor = 4294967295, u.fillStyle = n, 
            u._fillColor = 4294967295, u.setFillColor = function(t) {
                u._fillColor = t;
            }, u.getFillColor = function() {
                return u._fillColor;
            }, u.mixRGBandAlpha = function(t) {
                return t;
            }, u._drawTextureM = function(t, i, r, _, a, n, s, o) {
                e.blendFuncByGlobalValue(Nt.GLOBALVALUE_BLENDFUNC_SRC, Nt.GLOBALVALUE_BLENDFUNC_DEST), 
                e.useProgramEx(Nt.PROGRAMEX_DRAWTEXTURE), e.useVDO(Nt.VDO_MESHQUADTEXTURE), e.uniformEx(Nt.GLOBALVALUE_VIEWS, 0), 
                e.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_DIR, 1), e.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_POS, 2), 
                e.uniformTexture(3, 33984, t.bitmap._glTexture);
                var h = new Float32Array([ i, r, o[0], o[1], 0, 0, i + _, r, o[2], o[3], 0, 0, i + _, r + a, o[4], o[5], 0, 0, i, r + a, o[6], o[7], 0, 0 ]), l = new Int32Array(h.buffer);
                l[4] = l[10] = l[16] = l[22] = 4294967295, l[5] = l[11] = l[17] = l[23] = 4294967295, 
                e.setRectMesh(1, h, h.length), e.modifyMesh(Nt.GLOBALVALUE_MATRIX32, 0, 7), e.modifyMesh(Nt.GLOBALVALUE_DRAWTEXTURE_COLOR, 1, 15), 
                j.syncBufferToRenderThread(e);
            }, t.cbook.filltext_native(u, i, null, r, _, a, n, s, o, h);
        }, e.recover = function() {
            this._graphicsCmdEncoder = null, C.recover("FillBorderTextCmd", this);
        }, a(0, e, "text", function() {
            return this._text;
        }, function(t) {
            var e = this._draw_texture_cmd_encoder_;
            e.clearEncoding(), this._text = t, this.createFillBorderText(e, this._text, this._x, this._y, this._font, this._color, this._strokeColor, this._strokeWidth, this._textAlign), 
            j.syncBufferToRenderThread(e);
        }), a(0, e, "cmdID", function() {
            return "FillBorderText";
        }), a(0, e, "font", function() {
            return this._font;
        }, function(t) {
            var e = this._draw_texture_cmd_encoder_;
            e.clearEncoding(), this._font = t, this.createFillBorderText(e, this._text, this._x, this._y, this._font, this._color, this._strokeColor, this._strokeWidth, this._textAlign), 
            j.syncBufferToRenderThread(e);
        }), a(0, e, "color", function() {
            return this._color;
        }, function(t) {
            var e = this._draw_texture_cmd_encoder_;
            e.clearEncoding(), this._color = t, this.createFillBorderText(e, this._text, this._x, this._y, this._font, this._color, this._strokeColor, this._strokeWidth, this._textAlign), 
            j.syncBufferToRenderThread(e);
        }), a(0, e, "textAlign", function() {
            return this._textAlign;
        }, function(t) {
            var e = this._draw_texture_cmd_encoder_;
            e.clearEncoding(), this._textAlign = t, this.createFillBorderText(e, this._text, this._x, this._y, this._font, this._color, this._strokeColor, this._strokeWidth, this._textAlign), 
            j.syncBufferToRenderThread(e);
        }), a(0, e, "x", function() {
            return this._x;
        }, function(t) {
            var e = this._draw_texture_cmd_encoder_;
            e.clearEncoding(), this._x = t, this.createFillBorderText(e, this._text, this._x, this._y, this._font, this._color, this._strokeColor, this._strokeWidth, this._textAlign), 
            j.syncBufferToRenderThread(e);
        }), a(0, e, "y", function() {
            return this._y;
        }, function(t) {
            var e = this._draw_texture_cmd_encoder_;
            e.clearEncoding(), this._y = t, this.createFillBorderText(e, this._text, this._x, this._y, this._font, this._color, this._strokeColor, this._strokeWidth, this._textAlign), 
            j.syncBufferToRenderThread(e);
        }), t.create = function(e, i, r, _, a, n, s, o) {
            t.cbook || new Error("Error:charbook not create!");
            var h = C.getItemByClass("FillBorderTextCmd", t), l = h._graphicsCmdEncoder = this._commandEncoder;
            return h._text = e, h._x = i, h._y = r, h._font = _, h._color = a, h._strokeColor = n, 
            h._strokeWidth = s, h._textAlign = o, h._draw_texture_cmd_encoder_.clearEncoding(), 
            h.createFillBorderText(h._draw_texture_cmd_encoder_, e, i, r, _, a, n, s, o), j.syncBufferToRenderThread(h._draw_texture_cmd_encoder_), 
            l.useCommandEncoder(h._draw_texture_cmd_encoder_.getPtrID(), -1, -1), j.syncBufferToRenderThread(l), 
            h;
        }, t.ID = "FillBorderText", r(t, [ "cbook", function() {
            return this.cbook = i.textRender;
        } ]);
    }(), function() {
        function t() {}
        return _(t, "laya.layagl.ConchPropertyAdpt"), t.rewriteProperties = function() {
            laya.layagl.ConchPropertyAdpt.rewriteNumProperty(g.prototype, "x"), laya.layagl.ConchPropertyAdpt.rewriteNumProperty(g.prototype, "y"), 
            laya.layagl.ConchPropertyAdpt.rewriteNumProperty(g.prototype, "width"), laya.layagl.ConchPropertyAdpt.rewriteNumProperty(g.prototype, "height"), 
            laya.layagl.ConchPropertyAdpt.rewriteFunc(g.prototype, "recover");
        }, t.rewriteNumProperty = function(t, e) {
            Object.defineProperty(t, e, {
                get: function() {
                    return this["_" + e] || 0;
                },
                set: function(t) {
                    this["_" + e] = t, this.onPropertyChanged && this.onPropertyChanged(this);
                }
            });
        }, t.rewriteFunc = function(t, e) {
            t["__" + e] = t[e], t[e] = function() {
                t["__" + e].call(this), this.onPropertyChanged && (this.onPropertyChanged = null);
            };
        }, t;
    }()), Bt = function() {
        function t(t, e, i, r, _, a, n) {
            void 0 === t && (t = 1), void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === r && (r = 1), 
            void 0 === _ && (_ = 0), void 0 === a && (a = 0), this._nums = n = n || new Float32Array(6), 
            n[0] = t, n[1] = e, n[2] = i, n[3] = r, n[4] = _, n[5] = a, this._checkTransform();
        }
        _(t, "laya.layagl.MatrixConch");
        var e = t.prototype;
        return e.identity = function() {
            var t = this._nums;
            return t[0] = t[3] = 1, t[1] = t[4] = t[5] = t[2] = 0, this._bTransform = !1, this;
        }, e._checkTransform = function() {
            var t = this._nums;
            return this._bTransform = 1 !== t[0] || 0 !== t[1] || 0 !== t[2] || 1 !== t[3];
        }, e.setTranslate = function(t, e) {
            return this._nums[4] = t, this._nums[5] = e, this;
        }, e.translate = function(t, e) {
            return this._nums[4] += t, this._nums[5] += e, this;
        }, e.scale = function(t, e) {
            var i = this._nums;
            return i[0] *= t, i[3] *= e, i[2] *= t, i[1] *= e, i[4] *= t, i[5] *= e, this._bTransform = !0, 
            this;
        }, e.rotate = function(t) {
            var e = this._nums, i = Math.cos(t), r = Math.sin(t), _ = e[0], a = e[2], n = e[4];
            return e[0] = _ * i - e[1] * r, e[1] = _ * r + e[1] * i, e[2] = a * i - e[3] * r, 
            e[3] = a * r + e[3] * i, e[4] = n * i - e[5] * r, e[5] = n * r + e[5] * i, this._bTransform = !0, 
            this;
        }, e.skew = function(t, e) {
            var i = this._nums, r = Math.tan(t), _ = Math.tan(e), a = i[0], n = i[1];
            return i[0] += _ * i[2], i[1] += _ * i[3], i[2] += r * a, i[3] += r * n, this;
        }, e.invertTransformPoint = function(t) {
            var e = this._nums, i = e[0], r = e[1], _ = e[2], a = e[3], n = e[4], s = i * a - r * _, o = a / s, h = -r / s, l = -_ / s, u = i / s, c = (_ * e[5] - a * n) / s, f = -(i * e[5] - r * n) / s;
            return t.setTo(o * t.x + l * t.y + c, h * t.x + u * t.y + f);
        }, e.transformPoint = function(t) {
            var e = this._nums;
            return t.setTo(e[0] * t.x + e[2] * t.y + e[4], e[1] * t.x + e[3] * t.y + e[5]);
        }, e.transformPointN = function(t) {
            var e = this._nums;
            return t.setTo(e[0] * t.x + e[2] * t.y, e[1] * t.x + e[3] * t.y);
        }, e.getScaleX = function() {
            var t = this._nums;
            return 0 === t[1] ? this.a : Math.sqrt(t[0] * t[0] + t[1] * t[1]);
        }, e.getScaleY = function() {
            var t = this._nums;
            return 0 === t[2] ? t[3] : Math.sqrt(t[2] * t[2] + t[3] * t[3]);
        }, e.invert = function() {
            var t = this._nums, e = t[0], i = t[1], r = t[2], _ = t[3], a = t[4], n = e * _ - i * r;
            return t[0] = _ / n, t[1] = -i / n, t[2] = -r / n, t[3] = e / n, t[4] = (r * this.ty - _ * a) / n, 
            t[5] = -(e * this.ty - i * a) / n, this;
        }, e.setTo = function(t, e, i, r, _, a) {
            var n = this._nums;
            return n[0] = t, n[1] = e, n[2] = i, n[3] = r, n[4] = _, n[5] = a, this;
        }, e.concat = function(t) {
            var e = this._nums, i = t._nums, r = e[0], _ = e[2], a = e[4];
            return e[0] = r * i[0] + e[1] * i[2], e[1] = r * i[1] + e[1] * i[3], e[2] = _ * i[0] + e[3] * i[2], 
            e[3] = _ * i[1] + e[3] * i[3], e[4] = a * i[0] + e[5] * i[2] + i[4], e[5] = a * i[1] + e[5] * i[3] + i[5], 
            this;
        }, e.scaleEx = function(t, e) {
            var i = this._nums, r = i[0], _ = i[1], a = i[2], n = i[3];
            0 !== _ || 0 !== a ? (i[0] = t * r, i[1] = t * _, i[2] = e * a, i[3] = e * n) : (i[0] = t * r, 
            i[1] = 0 * n, i[2] = 0 * r, i[3] = e * n), this._bTransform = !0;
        }, e.rotateEx = function(t) {
            var e = this._nums, i = Math.cos(t), r = Math.sin(t), _ = e[0], a = e[1], n = e[2], s = e[3];
            0 !== a || 0 !== n ? (e[0] = i * _ + r * n, e[1] = i * a + r * s, e[2] = -r * _ + i * n, 
            e[3] = -r * a + i * s) : (e[0] = i * _, e[1] = r * s, e[2] = -r * _, e[3] = i * s), 
            this._bTransform = !0;
        }, e.clone = function() {
            var e = this._nums, i = t.create(), r = i._nums;
            return r[0] = e[0], r[1] = e[1], r[2] = e[2], r[3] = e[3], r[4] = e[4], r[5] = e[5], 
            i._bTransform = this._bTransform, i;
        }, e.copyTo = function(t) {
            var e = this._nums, i = t._nums;
            return i[0] = e[0], i[1] = e[1], i[2] = e[2], i[3] = e[3], i[4] = e[4], i[5] = e[5], 
            t._bTransform = this._bTransform, t;
        }, e.toString = function() {
            return this.a + "," + this.b + "," + this.c + "," + this.d + "," + this.tx + "," + this.ty;
        }, e.destroy = function() {
            this.recover();
        }, e.recover = function() {
            t._pool.push(this);
        }, a(0, e, "a", function() {
            return this._nums[0];
        }, function(t) {
            this._nums[0] = t;
        }), a(0, e, "b", function() {
            return this._nums[1];
        }, function(t) {
            this._nums[1] = t;
        }), a(0, e, "c", function() {
            return this._nums[2];
        }, function(t) {
            this._nums[2] = t;
        }), a(0, e, "d", function() {
            return this._nums[3];
        }, function(t) {
            this._nums[3] = t;
        }), a(0, e, "tx", function() {
            return this._nums[4];
        }, function(t) {
            this._nums[4] = t;
        }), a(0, e, "ty", function() {
            return this._nums[5];
        }, function(t) {
            this._nums[5] = t;
        }), t.mul = function(t, e, i) {
            var r = t._nums, _ = e._nums, a = i._nums, n = r[0], s = r[1], o = r[2], h = r[3], l = r[4], u = r[5], c = _[0], f = _[1], d = _[2], A = _[3], E = _[4], m = _[5];
            return 0 !== f || 0 !== d ? (a[0] = n * c + s * d, a[1] = n * f + s * A, a[2] = o * c + h * d, 
            a[3] = o * f + h * A, a[4] = c * l + d * u + E, a[5] = f * l + A * u + m) : (a[0] = n * c, 
            a[1] = s * A, a[2] = o * c, a[3] = h * A, a[4] = c * l + E, a[5] = A * u + m), i;
        }, t.mul16 = function(t, e, i) {
            var r = t._nums, _ = e._nums, a = r[0], n = r[1], s = r[2], o = r[3], h = r[4], l = r[5], u = _[0], c = _[1], f = _[2], d = _[3], A = _[4], E = _[5];
            return 0 !== c || 0 !== f ? (i[0] = a * u + n * f, i[1] = a * c + n * d, i[4] = s * u + o * f, 
            i[5] = s * c + o * d, i[12] = u * h + f * l + A, i[13] = c * h + d * l + E) : (i[0] = a * u, 
            i[1] = n * d, i[4] = s * u, i[5] = o * d, i[12] = u * h + A, i[13] = d * l + E), 
            i;
        }, t.create = function(e) {
            var i;
            return t._pool.length ? (i = t._pool.pop(), e && (i._nums = e), i.identity(), i) : new t(1, 0, 0, 1, 0, 0, e);
        }, t.A = 0, t.B = 1, t.C = 2, t.D = 3, t.TX = 4, t.TY = 5, t.EMPTY = new t(), t.TEMP = new t(), 
        t._pool = [], t;
    }(), It = function() {
        function t(t) {
            this._par = null, this._loaded = !0, this.bitmap = {}, this.bitmap.id = t.id, this._par = t;
        }
        _(t, "laya.webgl.resource.CharInternalTexture");
        return t.prototype._getSource = function() {
            return this._par._source;
        }, t;
    }(), Nt = function() {
        function t() {}
        return _(t, "laya.layagl.LayaNative2D"), t._init_simple_texture_cmdEncoder_ = function() {
            (t._SIMPLE_TEXTURE_CMDENCODER_ = j.instance.createCommandEncoder(172, 32, !0)).useProgramEx(laya.layagl.LayaNative2D.PROGRAMEX_DRAWTEXTURE), 
            t._SIMPLE_TEXTURE_CMDENCODER_.useVDO(laya.layagl.LayaNative2D.VDO_MESHQUADTEXTURE), 
            t._SIMPLE_TEXTURE_CMDENCODER_.uniformEx(laya.layagl.LayaNative2D.GLOBALVALUE_VIEWS, 0), 
            t._SIMPLE_TEXTURE_CMDENCODER_.uniformEx(laya.layagl.LayaNative2D.GLOBALVALUE_CLIP_MAT_DIR, 1), 
            t._SIMPLE_TEXTURE_CMDENCODER_.uniformEx(laya.layagl.LayaNative2D.GLOBALVALUE_CLIP_MAT_POS, 2), 
            t._SIMPLE_TEXTURE_CMDENCODER_.uniformTextureByParamData(0, 4, 8), t._SIMPLE_TEXTURE_CMDENCODER_.blendFuncByGlobalValue(laya.layagl.LayaNative2D.GLOBALVALUE_BLENDFUNC_SRC, laya.layagl.LayaNative2D.GLOBALVALUE_BLENDFUNC_DEST), 
            t._SIMPLE_TEXTURE_CMDENCODER_.setRectMeshByParamData(12, 20, 16), t._SIMPLE_TEXTURE_CMDENCODER_.modifyMesh(laya.layagl.LayaNative2D.GLOBALVALUE_MATRIX32, 0, 7), 
            t._SIMPLE_TEXTURE_CMDENCODER_.modifyMesh(laya.layagl.LayaNative2D.GLOBALVALUE_DRAWTEXTURE_COLOR, 1, 15), 
            j.syncBufferToRenderThread(t._SIMPLE_TEXTURE_CMDENCODER_);
        }, t._init_simple_rect_cmdEncoder_ = function() {
            (t._SIMPLE_RECT_CMDENCODER_ = j.instance.createCommandEncoder(136, 32, !0)).useProgramEx(laya.layagl.LayaNative2D.PROGRAMEX_DRAWTEXTURE), 
            t._SIMPLE_RECT_CMDENCODER_.useVDO(laya.layagl.LayaNative2D.VDO_MESHQUADTEXTURE), 
            t._SIMPLE_RECT_CMDENCODER_.uniformEx(laya.layagl.LayaNative2D.GLOBALVALUE_VIEWS, 0), 
            t._SIMPLE_RECT_CMDENCODER_.uniformEx(laya.layagl.LayaNative2D.GLOBALVALUE_CLIP_MAT_DIR, 1), 
            t._SIMPLE_RECT_CMDENCODER_.uniformEx(laya.layagl.LayaNative2D.GLOBALVALUE_CLIP_MAT_POS, 2), 
            t._SIMPLE_RECT_CMDENCODER_.setRectMeshByParamData(0, 8, 4), t._SIMPLE_RECT_CMDENCODER_.modifyMesh(laya.layagl.LayaNative2D.GLOBALVALUE_MATRIX32, 0, 7), 
            t._SIMPLE_RECT_CMDENCODER_.modifyMesh(laya.layagl.LayaNative2D.GLOBALVALUE_DRAWTEXTURE_COLOR, 1, 15), 
            j.syncBufferToRenderThread(t._SIMPLE_RECT_CMDENCODER_);
        }, t._init_rect_border_cmdEncoder_ = function() {
            (t._RECT_BORDER_CMD_ENCODER_ = j.instance.createCommandEncoder(152, 32, !0)).useProgramEx(laya.layagl.LayaNative2D.PROGRAMEX_DRAWVG), 
            t._RECT_BORDER_CMD_ENCODER_.useVDO(laya.layagl.LayaNative2D.VDO_MESHVG), t._RECT_BORDER_CMD_ENCODER_.uniformEx(laya.layagl.LayaNative2D.GLOBALVALUE_VIEWS, 0), 
            t._RECT_BORDER_CMD_ENCODER_.uniformEx(laya.layagl.LayaNative2D.GLOBALVALUE_CLIP_MAT_DIR, 1), 
            t._RECT_BORDER_CMD_ENCODER_.uniformEx(laya.layagl.LayaNative2D.GLOBALVALUE_CLIP_MAT_POS, 2), 
            t._RECT_BORDER_CMD_ENCODER_.setMeshByParamData(20, 0, 4, 140, 8, 12, 16), t._RECT_BORDER_CMD_ENCODER_.modifyMesh(laya.layagl.LayaNative2D.GLOBALVALUE_MATRIX32, 0, 7), 
            t._RECT_BORDER_CMD_ENCODER_.modifyMesh(laya.layagl.LayaNative2D.GLOBALVALUE_DRAWTEXTURE_COLOR, 1, 15), 
            j.syncBufferToRenderThread(t._RECT_BORDER_CMD_ENCODER_);
        }, t.__init__ = function() {
            if (M.isConchApp) {
                var e = j.instance;
                t.GLOBALVALUE_MATRIX32 = e.addGlobalValueDefine(0, 5126, 6, new Float32Array([ 1, 0, 0, 1, 0, 0 ])), 
                t.GLOBALVALUE_DRAWTEXTURE_COLOR = e.addGlobalValueDefine(0, 5124, 1, new Uint32Array([ 4294967295 ])), 
                t.GLOBALVALUE_ITALICDEG = e.addGlobalValueDefine(0, 5126, 1, new Float32Array([ 0 ])), 
                t.GLOBALVALUE_CLIP_MAT_DIR = e.addGlobalValueDefine(0, 5126, 4, new Float32Array([ 1e6, 0, 0, 1e6 ])), 
                t.GLOBALVALUE_CLIP_MAT_POS = e.addGlobalValueDefine(0, 5126, 2, new Float32Array([ 0, 0 ])), 
                t.GLOBALVALUE_BLENDFUNC_SRC = e.addGlobalValueDefine(0, 5124, 1, new Int32Array([ 1 ])), 
                t.GLOBALVALUE_BLENDFUNC_DEST = e.addGlobalValueDefine(0, 5124, 1, new Int32Array([ 771 ])), 
                t.GLOBALVALUE_COLORFILTER_COLOR = e.addGlobalValueDefine(0, 5126, 16, new Float32Array([ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ])), 
                t.GLOBALVALUE_COLORFILTER_ALPHA = e.addGlobalValueDefine(0, 5126, 4, new Float32Array([ 0, 0, 0, 1 ])), 
                t.GLOBALVALUE_BLURFILTER_STRENGTH = e.addGlobalValueDefine(0, 5126, 4, new Float32Array([ 0, 0, 0, 0 ])), 
                t.GLOBALVALUE_BLURFILTER_BLURINFO = e.addGlobalValueDefine(0, 5126, 2, new Float32Array([ 0, 0 ])), 
                t.GLOBALVALUE_GLOWFILTER_COLOR = e.addGlobalValueDefine(0, 5126, 4, new Float32Array([ 0, 0, 0, 0 ])), 
                t.GLOBALVALUE_GLOWFILTER_BLURINFO1 = e.addGlobalValueDefine(0, 5126, 4, new Float32Array([ 0, 0, 0, 0 ])), 
                t.GLOBALVALUE_GLOWFILTER_BLURINFO2 = e.addGlobalValueDefine(0, 5126, 4, new Float32Array([ 0, 0, 0, 0 ])), 
                e.endGlobalValueDefine(), t.PROGRAMEX_DRAWTEXTURE = j.instance.createProgramEx("/*\n\ttexture和fillrect使用的。\n*/\nattribute vec4 posuv;\nattribute vec4 attribColor;\nattribute vec4 attribFlags;\n//attribute vec4 clipDir;\n//attribute vec2 clipRect;\nuniform vec4 clipMatDir;\nuniform vec2 clipMatPos;\t\t// 这个是全局的，不用再应用矩阵了。\nvarying vec2 cliped;\nuniform vec2 size;\n\n#ifdef WORLDMAT\n\tuniform mat4 mmat;\n#endif\nuniform mat4 u_MvpMatrix;\n\nvarying vec4 v_texcoordAlpha;\nvarying vec4 v_color;\nvarying float v_useTex;\n\nvoid main() {\n\n\tvec4 pos = vec4(posuv.xy,0.,1.);\n#ifdef WORLDMAT\n\tpos=mmat*pos;\n#endif\n\tvec4 pos1  =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,0.,1.0);\n#ifdef MVP3D\n\tgl_Position=u_MvpMatrix*pos1;\n#else\n\tgl_Position=pos1;\n#endif\n\tv_texcoordAlpha.xy = posuv.zw;\n\t//v_texcoordAlpha.z = attribColor.a/255.0;\n\tv_color = attribColor/255.0;\n\tv_color.xyz*=v_color.w;//反正后面也要预乘\n\t\n\tv_useTex = attribFlags.r/255.0;\n\tfloat clipw = length(clipMatDir.xy);\n\tfloat cliph = length(clipMatDir.zw);\n\tvec2 clippos = pos.xy - clipMatPos.xy;\t//pos已经应用矩阵了，为了减的有意义，clip的位置也要缩放\n\tif(clipw>20000. && cliph>20000.)\n\t\tcliped = vec2(0.5,0.5);\n\telse {\n\t\t//转成0到1之间。/clipw/clipw 表示clippos与normalize之后的clip朝向点积之后，再除以clipw\n\t\tcliped=vec2( dot(clippos,clipMatDir.xy)/clipw/clipw, dot(clippos,clipMatDir.zw)/cliph/cliph);\n\t}\n\n}", "/*\n\ttexture和fillrect使用的。\n*/\n\nprecision mediump float;\n//precision highp float;\nvarying vec4 v_texcoordAlpha;\nvarying vec4 v_color;\nvarying float v_useTex;\nuniform sampler2D texture;\nvarying vec2 cliped;\n\n#ifdef BLUR_FILTER\nuniform vec4 strength_sig2_2sig2_gauss1;\nuniform vec2 blurInfo;\n\n#define PI 3.141593\n\nfloat getGaussian(float x, float y){\n    return strength_sig2_2sig2_gauss1.w*exp(-(x*x+y*y)/strength_sig2_2sig2_gauss1.z);\n}\n\nvec4 blur(){\n    const float blurw = 9.0;\n    vec4 vec4Color = vec4(0.0,0.0,0.0,0.0);\n    vec2 halfsz=vec2(blurw,blurw)/2.0/blurInfo;    \n    vec2 startpos=v_texcoordAlpha.xy-halfsz;\n    vec2 ctexcoord = startpos;\n    vec2 step = 1.0/blurInfo;  //每个像素      \n    \n    for(float y = 0.0;y<=blurw; ++y){\n        ctexcoord.x=startpos.x;\n        for(float x = 0.0;x<=blurw; ++x){\n            //TODO 纹理坐标的固定偏移应该在vs中处理\n            vec4Color += texture2D(texture, ctexcoord)*getGaussian(x-blurw/2.0,y-blurw/2.0);\n            ctexcoord.x+=step.x;\n        }\n        ctexcoord.y+=step.y;\n    }\n    return vec4Color;\n}\n#endif\n\n#ifdef COLOR_FILTER\nuniform vec4 colorAlpha;\nuniform mat4 colorMat;\n#endif\n\n#ifdef GLOW_FILTER\nuniform vec4 u_color;\nuniform vec4 u_blurInfo1;\nuniform vec4 u_blurInfo2;\n#endif\n\n#ifdef COLOR_ADD\nuniform vec4 colorAdd;\n#endif\n\n//FILLTEXTURE\nuniform vec4 u_TexRange;//startu,startv,urange, vrange\n\nvoid main() {\n\tif(cliped.x<0.) discard;\n\tif(cliped.x>1.) discard;\n\tif(cliped.y<0.) discard;\n\tif(cliped.y>1.) discard;\n\t\n#ifdef FILLTEXTURE\t\n   vec4 color= texture2D(texture, fract(v_texcoordAlpha.xy)*u_TexRange.zw + u_TexRange.xy);\n#else\n   vec4 color= texture2D(texture, v_texcoordAlpha.xy);\n#endif\n\n   if(v_useTex<=0.)color = vec4(1.,1.,1.,1.);\n   color.a*=v_color.w;\n   //color.rgb*=v_color.w;\n   color.rgb*=v_color.rgb;\n   gl_FragColor=color;\n   \n   #ifdef COLOR_ADD\n\tgl_FragColor = vec4(colorAdd.rgb,colorAdd.a*gl_FragColor.a);\n\tgl_FragColor.xyz *= colorAdd.a;\n   #endif\n   \n   #ifdef BLUR_FILTER\n\tgl_FragColor =   blur();\n\tgl_FragColor.w*=v_color.w;   \n   #endif\n   \n   #ifdef COLOR_FILTER\n\tmat4 alphaMat =colorMat;\n\n\talphaMat[0][3] *= gl_FragColor.a;\n\talphaMat[1][3] *= gl_FragColor.a;\n\talphaMat[2][3] *= gl_FragColor.a;\n\n\tgl_FragColor = gl_FragColor * alphaMat;\n\tgl_FragColor += colorAlpha/255.0*gl_FragColor.a;\n   #endif\n   \n   #ifdef GLOW_FILTER\n\tconst float c_IterationTime = 10.0;\n\tfloat floatIterationTotalTime = c_IterationTime * c_IterationTime;\n\tvec4 vec4Color = vec4(0.0,0.0,0.0,0.0);\n\tvec2 vec2FilterDir = vec2(-(u_blurInfo1.z)/u_blurInfo2.x,-(u_blurInfo1.w)/u_blurInfo2.y);\n\tvec2 vec2FilterOff = vec2(u_blurInfo1.x/u_blurInfo2.x/c_IterationTime * 2.0,u_blurInfo1.y/u_blurInfo2.y/c_IterationTime * 2.0);\n\tfloat maxNum = u_blurInfo1.x * u_blurInfo1.y;\n\tvec2 vec2Off = vec2(0.0,0.0);\n\tfloat floatOff = c_IterationTime/2.0;\n\tfor(float i = 0.0;i<=c_IterationTime; ++i){\n\t\tfor(float j = 0.0;j<=c_IterationTime; ++j){\n\t\t\tvec2Off = vec2(vec2FilterOff.x * (i - floatOff),vec2FilterOff.y * (j - floatOff));\n\t\t\tvec4Color += texture2D(texture, v_texcoordAlpha.xy + vec2FilterDir + vec2Off)/floatIterationTotalTime;\n\t\t}\n\t}\n\tgl_FragColor = vec4(u_color.rgb,vec4Color.a * u_blurInfo2.z);\n\tgl_FragColor.rgb *= gl_FragColor.a;   \n   #endif\n   \n}", "posuv,attribColor,attribFlags", "size,clipMatDir,clipMatPos,texture,colorMat,colorAlpha,strength_sig2_2sig2_gauss1,blurInfo,u_color,u_blurInfo1,u_blurInfo2"), 
                t.PROGRAMEX_DRAWVG = j.instance.createProgramEx("attribute vec4 position;\nattribute vec4 attribColor;\n//attribute vec4 clipDir;\n//attribute vec2 clipRect;\nuniform vec4 clipMatDir;\nuniform vec2 clipMatPos;\n#ifdef WORLDMAT\n\tuniform mat4 mmat;\n#endif\nuniform mat4 u_mmat2;\n//uniform vec2 u_pos;\nuniform vec2 size;\nvarying vec4 color;\n//vec4 dirxy=vec4(0.9,0.1, -0.1,0.9);\n//vec4 clip=vec4(100.,30.,300.,600.);\nvarying vec2 cliped;\nvoid main(){\n\t\n#ifdef WORLDMAT\n\tvec4 pos=mmat*vec4(position.xy,0.,1.);\n\tgl_Position =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n#else\n\tgl_Position =vec4((position.x/size.x-0.5)*2.0,(0.5-position.y/size.y)*2.0,position.z,1.0);\n#endif\t\n\tfloat clipw = length(clipMatDir.xy);\n\tfloat cliph = length(clipMatDir.zw);\n\tvec2 clippos = position.xy - clipMatPos.xy;\t//pos已经应用矩阵了，为了减的有意义，clip的位置也要缩放\n\tif(clipw>20000. && cliph>20000.)\n\t\tcliped = vec2(0.5,0.5);\n\telse {\n\t\t//clipdir是带缩放的方向，由于上面clippos是在缩放后的空间计算的，所以需要把方向先normalize一下\n\t\tcliped=vec2( dot(clippos,clipMatDir.xy)/clipw/clipw, dot(clippos,clipMatDir.zw)/cliph/cliph);\n\t}\n  //pos2d.x = dot(clippos,dirx);\n  color=attribColor/255.;\n}", "precision mediump float;\n//precision mediump float;\nvarying vec4 color;\n//uniform float alpha;\nvarying vec2 cliped;\nvoid main(){\n\t//vec4 a=vec4(color.r, color.g, color.b, 1);\n\t//a.a*=alpha;\n    gl_FragColor= color;// vec4(color.r, color.g, color.b, alpha);\n\tgl_FragColor.rgb*=color.a;\n\tif(cliped.x<0.) discard;\n\tif(cliped.x>1.) discard;\n\tif(cliped.y<0.) discard;\n\tif(cliped.y>1.) discard;\n}", "position,attribColor", "size,clipMatDir,clipMatPos"), 
                t.PROGRAMEX_DRAWPARTICLE = j.instance.createProgramEx("attribute vec4 a_CornerTextureCoordinate;\nattribute vec3 a_Position;\nattribute vec3 a_Velocity;\nattribute vec4 a_StartColor;\nattribute vec4 a_EndColor;\nattribute vec3 a_SizeRotation;\nattribute vec2 a_Radius;\nattribute vec4 a_Radian;\nattribute float a_AgeAddScale;\nattribute float a_Time;\n\nvarying vec4 v_Color;\nvarying vec2 v_TextureCoordinate;\n\nuniform float u_CurrentTime;\nuniform float u_Duration;\nuniform float u_EndVelocity;\nuniform vec3 u_Gravity;\n\nuniform vec2 size;\nuniform mat4 u_mmat;\n\nvec4 ComputeParticlePosition(in vec3 position, in vec3 velocity,in float age,in float normalizedAge)\n{\n\n   float startVelocity = length(velocity);//起始标量速度\n   float endVelocity = startVelocity * u_EndVelocity;//结束标量速度\n\n   float velocityIntegral = startVelocity * normalizedAge +(endVelocity - startVelocity) * normalizedAge *normalizedAge/2.0;//计算当前速度的标量（单位空间），vt=v0*t+(1/2)*a*(t^2)\n   \n   vec3 addPosition = normalize(velocity) * velocityIntegral * u_Duration;//计算受自身速度影响的位置，转换标量到矢量    \n   addPosition += u_Gravity * age * normalizedAge;//计算受重力影响的位置\n   \n   float radius=mix(a_Radius.x, a_Radius.y, normalizedAge); //计算粒子受半径和角度影响（无需计算角度和半径时，可用宏定义优化屏蔽此计算）\n   float radianHorizontal =mix(a_Radian.x,a_Radian.z,normalizedAge);\n   float radianVertical =mix(a_Radian.y,a_Radian.w,normalizedAge);\n   \n   float r =cos(radianVertical)* radius;\n   addPosition.y += sin(radianVertical) * radius;\n\t\n   addPosition.x += cos(radianHorizontal) *r;\n   addPosition.z += sin(radianHorizontal) *r;\n  \n   addPosition.y=-addPosition.y;//2D粒子位置更新需要取负，2D粒子坐标系Y轴正向朝上\n   position+=addPosition;\n   return  vec4(position,1.0);\n}\n\nfloat ComputeParticleSize(in float startSize,in float endSize, in float normalizedAge)\n{    \n    float size = mix(startSize, endSize, normalizedAge);\n    return size;\n}\n\nmat2 ComputeParticleRotation(in float rot,in float age)\n{    \n    float rotation =rot * age;\n    //计算2x2旋转矩阵.\n    float c = cos(rotation);\n    float s = sin(rotation);\n    return mat2(c, -s, s, c);\n}\n\nvec4 ComputeParticleColor(in vec4 startColor,in vec4 endColor,in float normalizedAge)\n{\n\tvec4 color=mix(startColor,endColor,normalizedAge);\n    //硬编码设置，使粒子淡入很快，淡出很慢,6.7的缩放因子把置归一在0到1之间，可以谷歌x*(1-x)*(1-x)*6.7的制图表\n    color.a *= normalizedAge * (1.0-normalizedAge) * (1.0-normalizedAge) * 6.7;\n   \n    return color;\n}\n\nvoid main()\n{\n   float age = u_CurrentTime - a_Time;\n   age *= 1.0 + a_AgeAddScale;\n   float normalizedAge = clamp(age / u_Duration,0.0,1.0);\n   gl_Position = ComputeParticlePosition(a_Position, a_Velocity, age, normalizedAge);//计算粒子位置\n   float pSize = ComputeParticleSize(a_SizeRotation.x,a_SizeRotation.y, normalizedAge);\n   mat2 rotation = ComputeParticleRotation(a_SizeRotation.z, age);\n\t\n    mat4 mat=u_mmat;\n    gl_Position=vec4((mat*gl_Position).xy,0.0,1.0);\n    gl_Position.xy += (rotation*a_CornerTextureCoordinate.xy) * pSize*vec2(mat[0][0],mat[1][1]);\n    gl_Position=vec4((gl_Position.x/size.x-0.5)*2.0,(0.5-gl_Position.y/size.y)*2.0,0.0,1.0);\n   \n   v_Color = ComputeParticleColor(a_StartColor,a_EndColor, normalizedAge);\n   v_TextureCoordinate =a_CornerTextureCoordinate.zw;\n}\n\n", "#ifdef FSHIGHPRECISION\nprecision highp float;\n#else\nprecision mediump float;\n#endif\n\nvarying vec4 v_Color;\nvarying vec2 v_TextureCoordinate;\nuniform sampler2D u_texture;\n\nvoid main()\n{\t\n\tgl_FragColor=texture2D(u_texture,v_TextureCoordinate)*v_Color;\n\tgl_FragColor.xyz *= v_Color.w;\n}", "a_CornerTextureCoordinate,a_Position,a_Velocity,a_StartColor,a_EndColor,a_SizeRotation,a_Radius,a_Radian,a_AgeAddScale,a_Time", "u_CurrentTime,u_Duration,u_EndVelocity,u_Gravity,size,u_mmat,u_texture"), 
                t.VDO_MESHQUADTEXTURE = e.createVDO(new Int32Array([ 5126, 0, 4, 24, 5121, 16, 4, 24, 5121, 20, 4, 24 ])), 
                t.VDO_MESHVG = e.createVDO(new Int32Array([ 5126, 0, 2, 12, 5121, 8, 4, 12 ])), 
                t.VDO_MESHPARTICLE = e.createVDO(new Int32Array([ 5126, 0, 4, 116, 5126, 16, 3, 116, 5126, 28, 3, 116, 5126, 40, 4, 116, 5126, 56, 4, 116, 5126, 72, 3, 116, 5126, 84, 2, 116, 5126, 92, 4, 116, 5126, 108, 1, 116, 5126, 112, 1, 116 ])), 
                t._init_simple_texture_cmdEncoder_(), t._init_simple_rect_cmdEncoder_(), t._init_rect_border_cmdEncoder_(), 
                t.SHADER_MACRO_COLOR_FILTER = j.instance.defineShaderMacro("#define COLOR_FILTER", [ {
                    uname: 4,
                    id: t.GLOBALVALUE_COLORFILTER_COLOR
                }, {
                    uname: 5,
                    id: t.GLOBALVALUE_COLORFILTER_ALPHA
                } ]), t.SHADER_MACRO_BLUR_FILTER = j.instance.defineShaderMacro("#define BLUR_FILTER", [ {
                    uname: 6,
                    id: t.GLOBALVALUE_BLURFILTER_STRENGTH
                }, {
                    uname: 7,
                    id: t.GLOBALVALUE_BLURFILTER_BLURINFO
                } ]), t.SHADER_MACRO_GLOW_FILTER = j.instance.defineShaderMacro("#define GLOW_FILTER", [ {
                    uname: 8,
                    id: t.GLOBALVALUE_GLOWFILTER_COLOR
                }, {
                    uname: 9,
                    id: t.GLOBALVALUE_GLOWFILTER_BLURINFO1
                }, {
                    uname: 10,
                    id: t.GLOBALVALUE_GLOWFILTER_BLURINFO2
                } ]), Ft.__init__(), Ft.__init_END_(), J.useOldCharBook ? new wt() : new J(), at.charRender = new qt();
            }
        }, t._SIMPLE_TEXTURE_CMDENCODER_ = null, t._SIMPLE_RECT_CMDENCODER_ = null, t._RECT_BORDER_CMD_ENCODER_ = null, 
        t.PROGRAMEX_DRAWTEXTURE = 0, t.PROGRAMEX_DRAWVG = 0, t.PROGRAMEX_DRAWRECT = 0, t.PROGRAMEX_DRAWPARTICLE = 0, 
        t.VDO_MESHQUADTEXTURE = 0, t.VDO_MESHVG = 0, t.VDO_MESHPARTICLE = 0, t.GLOBALVALUE_VIEWS = 0, 
        t.GLOBALVALUE_MATRIX32 = 0, t.GLOBALVALUE_DRAWTEXTURE_COLOR = 0, t.GLOBALVALUE_ITALICDEG = 0, 
        t.GLOBALVALUE_CLIP_MAT_DIR = 0, t.GLOBALVALUE_CLIP_MAT_POS = 0, t.GLOBALVALUE_BLENDFUNC_SRC = 0, 
        t.GLOBALVALUE_BLENDFUNC_DEST = 0, t.GLOBALVALUE_COLORFILTER_COLOR = 0, t.GLOBALVALUE_COLORFILTER_ALPHA = 0, 
        t.GLOBALVALUE_BLURFILTER_STRENGTH = 0, t.GLOBALVALUE_BLURFILTER_BLURINFO = 0, t.SHADER_MACRO_COLOR_FILTER = 0, 
        t.SHADER_MACRO_BLUR_FILTER = 0, t.SHADER_MACRO_GLOW_FILTER = 0, t.GLOBALVALUE_GLOWFILTER_COLOR = 0, 
        t.GLOBALVALUE_GLOWFILTER_BLURINFO1 = 0, t.GLOBALVALUE_GLOWFILTER_BLURINFO2 = 0, 
        t;
    }(), Ft = function() {
        function t() {
            this._commStr = "", this._commandEncoder = null, this._id = 0, this._commandEncoder = j.instance.createCommandEncoder(64, 16, !1);
        }
        _(t, "laya.layagl.LayaGLTemplate");
        return t.prototype.addComd = function(t, e) {
            this._commStr += t + "(" + e + ");", this._commandEncoder[t].apply(this._commandEncoder, e);
        }, t.createByRenderType = function(e) {
            var i = t.GLS[e] = new t();
            M.isConchApp && j.instance.setGLTemplate(e, i._commandEncoder.getPtrID());
            for (var r = 1; r <= 8192; ) {
                if (e & r && t.__FUN_PARAM__[r]) for (var _ = t.__FUN_PARAM__[r], a = 0, n = _.length; a < n; a++) {
                    var s = _[a];
                    i.addComd(s.func, s.args);
                }
                r <<= 1;
            }
            return i._id = e, console.log("template=" + i._commStr), i;
        }, t.createByRenderTypeEnd = function(e) {
            var i = t.GLSE[e] = new t();
            M.isConchApp && j.instance.setEndGLTemplate(e, i._commandEncoder.getPtrID());
            for (var r = 8192; r > 1; ) {
                if (e & r && t.__FUN_PARAM_END_[r]) for (var _ = t.__FUN_PARAM_END_[r], a = 0, n = _.length; a < n; a++) {
                    var s = _[a];
                    i.addComd(s.func, s.args);
                }
                r >>= 1;
            }
            return i._id = e, console.log("templateEnd=" + i._commStr), i;
        }, t.__init__ = function() {
            t.__FUN_PARAM__[1] = [ {
                func: "setGlobalValueByParamData",
                args: [ Nt.GLOBALVALUE_DRAWTEXTURE_COLOR, 15, 88 ]
            } ], t.__FUN_PARAM__[2] = [ {
                func: "calcLocalMatrix32",
                args: [ 60, 64, 24, 28, 32, 36, 40, 44, 48, 52, 56 ]
            }, {
                func: "setGlobalValueByParamData",
                args: [ Nt.GLOBALVALUE_MATRIX32, 7, 64 ]
            } ], t.__FUN_PARAM__[4] = [ {
                func: "setGlobalValueByParamData",
                args: [ Nt.GLOBALVALUE_BLENDFUNC_SRC, 8, 284 ]
            }, {
                func: "setGlobalValueByParamData",
                args: [ Nt.GLOBALVALUE_BLENDFUNC_DEST, 8, 288 ]
            } ], t.__FUN_PARAM__[256] = [ {
                func: "useCommandEncoderByParamData",
                args: [ 96, 100, 1 ]
            } ], t.__FUN_PARAM__[512] = [ {
                func: "callbackJSByParamData",
                args: [ 216, 272 ]
            }, {
                func: "useCommandEncoderByParamData",
                args: [ 92, -1, 1 ]
            } ], t.__FUN_PARAM__[1024] = [ {
                func: "callbackJSByParamData",
                args: [ 216, 248 ]
            }, {
                func: "useCommandEncoderByParamData",
                args: [ 104, -1, 3 ]
            } ], t.__FUN_PARAM__[2048] = [ {
                func: "callbackJSByParamData",
                args: [ 216, 220 ]
            }, {
                func: "useCommandEncoderByParamData",
                args: [ 108, -1, 1 ]
            } ], t.__FUN_PARAM__[64] = [ {
                func: "setClipByParamData",
                args: [ Nt.GLOBALVALUE_CLIP_MAT_DIR, Nt.GLOBALVALUE_CLIP_MAT_POS, Nt.GLOBALVALUE_MATRIX32, 112 ]
            }, {
                func: "setGlobalValueByParamData",
                args: [ Nt.GLOBALVALUE_MATRIX32, 9, 128 ]
            } ], t.__FUN_PARAM__[16] = [ {
                func: "callbackJSByParamData",
                args: [ 216, 260 ]
            }, {
                func: "useCommandEncoderByParamData",
                args: [ 256, -1, 0 ]
            } ], t.__FUN_PARAM__[32] = [ {
                func: "callbackJSByParamData",
                args: [ 216, 276 ]
            }, {
                func: "useCommandEncoderByParamData",
                args: [ 280, -1, 0 ]
            } ], t.__FUN_PARAM__[8] = [ {
                func: "callbackJSByParamData",
                args: [ 216, 224 ]
            }, {
                func: "loadDataToRegByParamData",
                args: [ 0, 252, 4 ]
            }, {
                func: "ifGreater0",
                args: [ 0, 2147483647 ]
            }, {
                func: "useCommandEncoderByParamData",
                args: [ 232, -1, 0 ]
            } ], t.__FUN_PARAM__[128] = [ {
                func: "useCommandEncoderByParamData",
                args: [ 292, 296, 1 ]
            }, {
                func: "useCommandEncoderByParamData",
                args: [ 300, 304, 1 ]
            } ];
        }, t.__init_END_ = function() {
            t.__FUN_PARAM_END_[16] = [ {
                func: "loadDataToRegByParamData",
                args: [ 0, 252, 4 ]
            }, {
                func: "ifGreater0",
                args: [ 0, 2 ]
            }, {
                func: "callbackJSByParamData",
                args: [ 216, 268 ]
            }, {
                func: "useCommandEncoderByParamData",
                args: [ 264, -1, 1 ]
            } ], t.__FUN_PARAM_END_[8] = [ {
                func: "callbackJSByParamData",
                args: [ 216, 228 ]
            }, {
                func: "useCommandEncoderByParamData",
                args: [ 236, -1, 0 ]
            }, {
                func: "useCommandEncoderByParamData",
                args: [ 240, 244, 1 ]
            } ];
        }, t.GLS = [], t.GLSE = [], t.__FUN_PARAM__ = [], t.__FUN_PARAM_END_ = [], t;
    }(), wt = function() {
        function t() {
            this.fontPages = [], this.fontPagesName = [], this._curPage = null, this.tempUV = [ 0, 0, 1, 0, 1, 1, 0, 1 ], 
            this.fontScaleX = 1, this.fontScaleY = 1, this._curStrPos = 0, this.tempMat = new v();
            var e = !1, r = i.MiniAdpter;
            r && r.systemInfo && r.systemInfo.system && (e = "ios 10.1.1" === r.systemInfo.system.toLowerCase()), 
            o.onMiniGame && !e && (t.isWan1Wan = !0), t.charbookInst = this, i.textRender = this, 
            at.charRender = M.isConchApp ? new qt() : new Qt(t.textureWidth, t.textureWidth, t.scaleFontWithCtx, !t.isWan1Wan, t.debug);
        }
        var e;
        _(t, "laya.webgl.resource.CharBook");
        var a = t.prototype;
        return a.selectFont = function(e, i) {
            var r, _ = Math.max(this.fontScaleX, this.fontScaleY), a = i * _;
            if (e === t._lastFont && a === t._lastFontSz) r = t._lastCharPage; else {
                var n = at.getBmpSize(i) * _, s = e + Math.floor(n / t.gridSize), o = this.fontPagesName.indexOf(s);
                if (o < 0) {
                    var h = new at(e, n, M.isConchApp ? 0 : Math.ceil(i / 4));
                    this.fontPages.push(h), this.fontPagesName.push(s), r = h;
                } else r = this.fontPages[o];
                r.selectSize(i, n), t._lastFont = e, t._lastFontSz = a, t._lastCharPage = r;
            }
            return r;
        }, a.getNextChar = function(t) {
            var e = t.length, i = this._curStrPos;
            if (i >= e) return null;
            for (var r = i, _ = 0; r < e; r++) {
                var a = t.charCodeAt(r);
                if (a >>> 11 == 27) {
                    if (1 == _) break;
                    _ = 1, r++;
                } else if (65038 === a || 65039 === a) ; else if (8205 == a) _ = 2; else if (0 == _) _ = 1; else if (1 == _) break;
            }
            return this._curStrPos = r, t.substring(i, r);
        }, a.hasFreedText = function(t, e) {
            if (t && t.length > 0) for (var i = e, r = t.length; i < r; i++) {
                var _ = t[i];
                if (_) for (var a = 0, n = _.length; a < n; a++) {
                    var s = _[a].ri;
                    if (s.deleted || s.tex.__destroyed) return !0;
                }
            }
            return !1;
        }, a._fast_filltext = function(e, i, r, _, a, n, s, o, h, l, u) {
            if (void 0 === u && (u = 0), !(i && i.length < 1 || r && r.length < 1)) {
                if (t._curFont = n._font, this.fontScaleX = this.fontScaleY = 1, t.scaleFontWithCtx) {
                    var f = e.getMatScaleX(), d = e.getMatScaleY();
                    if (f < 1e-4 || d < .1) return;
                    f > 1 && (this.fontScaleX = f), d > 1 && (this.fontScaleY = d);
                }
                n._italic && (e._italicDeg = 12), this._curPage = this.selectFont(n._family, n._size);
                var A = _, E = i, m = i, R = 0, p = !r && i instanceof laya.utils.WordText, T = !!r, v = t.cacheRenderInfoInWordText && p ? E.pageChars : [];
                switch (p ? (m = E._text, (R = E.width) < 0 && (R = E.width = this._curPage.getWidth(m))) : R = m ? this._curPage.getWidth(m) : 0, 
                l) {
                  case c.ENUM_TEXTALIGN_CENTER:
                    A = _ - R / 2;
                    break;

                  case c.ENUM_TEXTALIGN_RIGHT:
                    A = _ - R;
                    break;

                  default:
                    A = _;
                }
                E && E.lastGCCnt != this._curPage.gcCnt && (E.lastGCCnt = this._curPage.gcCnt, this.hasFreedText(v, E.startID) && (v = E.pageChars = []));
                var D = p ? E.startID : 0, P = p ? E.startIDStroke : 0;
                if (!v || v.length < 1) {
                    var C = null;
                    t.scaleFontWithCtx && (at.charRender.scale(Math.max(this.fontScaleX, 1), Math.max(this.fontScaleY, 1)), 
                    (this.fontScaleX > 1 || this.fontScaleY > 1) && (C = "" + (10 * this.fontScaleX | 0) + (10 * this.fontScaleY | 0))), 
                    D = -1, P = -1;
                    var g = 0, M = 0;
                    this._curStrPos = 0;
                    var y;
                    if (T) {
                        var O = r[this._curStrPos++];
                        y = O.char, g = O.x, M = O.y;
                    } else y = this.getNextChar(m);
                    for (var S = n._bold; y; ) {
                        var b;
                        if (!(b = this._curPage.getChar(y, h, n._size, s, o, S, !1, C))) break;
                        if (b.char = y, b.isSpace) ; else {
                            var L = v[b.tex.id];
                            L || (v[b.tex.id] = L = [], (D < 0 || D > b.tex.id) && (D = b.tex.id)), L.push({
                                ri: b,
                                x: g,
                                y: M,
                                w: b.bmpWidth / this.fontScaleX,
                                h: b.bmpHeight / this.fontScaleY
                            });
                        }
                        T ? (O = r[this._curStrPos++]) ? (y = O.char, g = O.x, M = O.y) : y = null : (y = this.getNextChar(m), 
                        g += b.width);
                    }
                    p && (E.startID = D, E.startIDStroke = P);
                }
                this._drawResortedWords(e, A, v, D, a), e._italicDeg = 0;
            }
        }, a.fillWords = function(e, i, r, _, a, n, s, o) {
            if (i && !(i.length <= 0)) {
                l.create(n).numColor, s && l.create(s).numColor;
                t._curFont = a;
                var h = m.Parse(a);
                this._fast_filltext(e, null, i, r, _, h, n, s, o, 0, 0);
            }
        }, a.filltext = function(e, i, r, _, a, n, s, o, h, u) {
            if (void 0 === u && (u = 0), !(i.length <= 0)) {
                l.create(n).numColor, s && l.create(s).numColor;
                t._curFont = a;
                var f = m.Parse(a), d = 0;
                switch (h) {
                  case "center":
                    d = c.ENUM_TEXTALIGN_CENTER;
                    break;

                  case "right":
                    d = c.ENUM_TEXTALIGN_RIGHT;
                }
                this._fast_filltext(e, i, null, r, _, f, n, s, o, d, u);
            }
        }, a.filltext_native = function(e, i, r, _, a, n, s, o, h, u, c) {
            if (void 0 === c && (c = 0), !(i && i.length <= 0)) {
                var f = l.create(s).numColor;
                o && l.create(o).numColor;
                if (t._curFont = n, this.fontScaleX = this.fontScaleY = 1, t.scaleFontWithCtx) {
                    var d = e._curMat.getScaleX(), A = e._curMat.getScaleY();
                    if (d < 1e-4 || A < .1) return;
                    this.fontScaleX = d, this.fontScaleY = A, at.charRender.scale(this.fontScaleX, this.fontScaleY);
                }
                var E = m.Parse(n), R = E._family, p = E._bold;
                E._italic && (e._italicDeg = 12), this._curPage = this.selectFont(R, E._size * this.fontScaleX);
                var T = _, v = i, D = i, P = 0, C = !r && D instanceof laya.utils.WordText, g = !!r, M = t.cacheRenderInfoInWordText && C ? v.pageChars : [];
                switch (C ? (D = v.toString(), (P = v.width) < 0 && (P = v.width = this._curPage.getWidth(D))) : P = this._curPage.getWidth(D), 
                u) {
                  case "center":
                    T = _ - P / 2;
                    break;

                  case "right":
                    T = _ - P;
                    break;

                  default:
                    T = _;
                }
                if (M) {
                    for (var y = !1, O = 0, S = M.length; O < S; O++) {
                        var b = M[O];
                        if (b) {
                            for (var L = 0, x = b.length; L < x; L++) {
                                if (b[L].ri.tex.__destroyed) {
                                    y = !0;
                                    break;
                                }
                            }
                            if (y) break;
                        }
                    }
                    y && (M = v.pageChars = []);
                }
                if (!M || M.length <= 0) {
                    var B = null;
                    t.scaleFontWithCtx && (at.charRender.scale(Math.max(this.fontScaleX, 1), Math.max(this.fontScaleY, 1)), 
                    (this.fontScaleX > 1 || this.fontScaleY > 1) && (B = "" + (10 * this.fontScaleX | 0) + (10 * this.fontScaleY | 0)));
                    var I = 0, N = 0;
                    this._curStrPos = 0;
                    var F;
                    if (g) {
                        var w = r[this._curStrPos++];
                        F = w.char, I = w.x, N = w.y;
                    } else F = this.getNextChar(D);
                    for (p = E._bold; F; ) {
                        var V;
                        if ((V = this._curPage.getChar(F, h, E._size, s, o, p, !1, B)).isSpace) ; else {
                            var U = M[V.tex.id];
                            U || (M[V.tex.id] = U = []), U.push({
                                ri: V,
                                x: I,
                                y: N,
                                color: s,
                                nColor: f
                            });
                        }
                        g ? (w = r[this._curStrPos++]) ? (F = w.char, I = w.x, N = w.y) : F = null : (I += V.width, 
                        F = this.getNextChar(D));
                    }
                }
                var W = e._drawTextureUseColor;
                this._drawResortedWords_native(e, T, M, a), e._drawTextureUseColor = W, e._italicDeg = 0;
            }
        }, a._drawResortedWords = function(t, e, i, r, _) {
            var a = t.getFillColor();
            t.setFillColor(t.mixRGBandAlpha(16777215)), e -= this._curPage.margin_left, _ -= this._curPage.margin_top;
            for (var n = t._charSubmitCache._enbale, s = r, o = i.length; s < o; s++) {
                var h = i[s];
                if (h) {
                    var l = h.length;
                    if (!(l <= 0)) for (var u = 0; u < l; u++) {
                        var c = h[u], f = c.ri;
                        f.isSpace || (f.touch(), t.drawTexAlign = !0, t._inner_drawTexture(f.tex.texture, f.tex.texture.bitmap.id, e + c.x, _ + c.y, c.w, c.h, null, f.uv, 1, n), 
                        t.touches && t.touches.push(f));
                    }
                }
            }
            t.setFillColor(a);
        }, a._drawResortedWords_native = function(t, e, i, r) {
            for (var _ = 0, a = 0, n = i.length; a < n; a++) {
                var s = i[a];
                if (s) for (var o = 0, h = s.length; o < h; o++) {
                    var l = s[o], u = l.ri;
                    u.isSpace || (t._drawTextureUseColor = !1, _ != l.nColor && (t.fillStyle = l.color, 
                    _ = l.nColor), u.touch(), this._drawCharRenderInfo(t, l.ri, e + l.x, l.y + r));
                }
            }
        }, a._drawCharRenderInfo = function(t, e, i, r) {
            t._drawTextureM(e.tex.texture, i - this._curPage.margin_left, r - this._curPage.margin_top, e.bmpWidth, e.bmpHeight, null, 1, e.uv), 
            t.touches && t.touches.push(e);
        }, a.listPages = function() {
            var e = this;
            console.log("打印所有页的信息:"), this.fontPages.forEach(function(i, r) {
                var _ = e.fontPagesName[r], a = parseInt(_.substr(i.fontFamily.length)) * t.gridSize;
                console.log("==================================="), console.log("名字:", e.fontPagesName[r], "大小范围:", a, a + t.gridSize), 
                i.printPagesInfo();
            });
        }, a.GC = function(t) {
            this.fontPages.length;
            this.fontPages.forEach(function(t) {
                t.removeLRU();
            });
        }, t.textureWidth = 512, t.cacheRenderInfoInWordText = !0, t.scaleFontWithCtx = !0, 
        t.gridSize = 16, t.debug = !1, t._curFont = null, t.charbookInst = null, t._fontMem = 0, 
        t._lastFont = null, t._lastFontSz = 0, t._lastCharPage = null, t.isWan1Wan = !1, 
        r(t, [ "_uint32", function() {
            return this._uint32 = new Uint32Array(1);
        }, "trash", function() {
            return this.trash = new e(t.textureWidth);
        } ]), t.__init$ = function() {
            e = function() {
                function t(t) {
                    this.poolLen = 0, this.cleanTm = 0, this.texW = 0, this.pool = new Array(10), this.texW = t;
                }
                _(t, "");
                var e = t.prototype;
                return e.getAPage = function(t) {
                    if (this.poolLen > 0) {
                        var e = this.pool[--this.poolLen];
                        return e.setGridNum(t), this.poolLen > 0 && this.clean(), e;
                    }
                    return new ie(this.texW, this.texW, t);
                }, e.discardPage = function(t) {
                    this.clean(), t && (t.genID++, this.poolLen >= this.pool.length && (this.pool = this.pool.concat(new Array(10))), 
                    t.reset(), this.pool[this.poolLen++] = t);
                }, e.clean = function() {
                    var t = i.stage.getFrameTm();
                    if (0 === this.cleanTm && (this.cleanTm = t), t - this.cleanTm > 3e4) {
                        for (var e = 0; e < this.poolLen; e++) {
                            var r = this.pool[e];
                            t - r._discardTm > 2e4 && (r.destroy(), this.pool[e] = this.pool[this.poolLen - 1], 
                            this.poolLen--, e--);
                        }
                        this.cleanTm = t;
                    }
                }, t;
            }();
        }, t;
    }(), Vt = function() {
        function t() {
            this.fun = null, this._this = null, this.args = null, this._ref = 1, this._key = new Lt();
        }
        _(t, "laya.webgl.submit.SubmitCMD");
        var e = t.prototype;
        return i.imps(e, {
            "laya.webgl.submit.ISubmit": !0
        }), e.renderSubmit = function() {
            return this.fun.apply(this._this, this.args), 1;
        }, e.getRenderType = function() {
            return 0;
        }, e.reUse = function(t, e) {
            return this._ref++, e;
        }, e.releaseRender = function() {
            if (--this._ref < 1) {
                var e = t.POOL;
                e[e._length++] = this;
            }
        }, e.clone = function(t, e, i) {
            return null;
        }, t.create = function(e, i, r) {
            var _ = t.POOL._length ? t.POOL[--t.POOL._length] : new t();
            return _.fun = i, _.args = e, _._this = r, _._ref = 1, _._key.clear(), _;
        }, t.POOL = (t.POOL = [], t.POOL._length = 0, t.POOL), t;
    }(), Ut = (function() {
        function t() {
            this._graphicsCmdEncoder = null, this._paramData = null, this._x = NaN, this._y = NaN, 
            this._points = null, this._lineColor = null, this._lineWidth = NaN, this._vid = 0, 
            this._vertNum = 0, this.ibBuffer = null, this.vbBuffer = null, this._ibSize = 0, 
            this._vbSize = 0, this._ibArray = [], this._vbArray = [];
        }
        _(t, "laya.layagl.cmdNative.DrawLinesCmdNative");
        var e = t.prototype;
        e.recover = function() {
            this._points = null, this._lineColor = null, this._ibArray.length = 0, this._vbArray.length = 0, 
            C.recover("DrawLinesCmd", this);
        }, a(0, e, "lineColor", function() {
            return this._lineColor;
        }, function(t) {
            this._lineColor = t;
            for (var e = l.create(this._lineColor).numColor, i = this.vbBuffer._int32Data, r = 0, _ = 0; _ < this._vertNum; _++) r++, 
            r++, i[r++] = e;
            j.syncBufferToRenderThread(this.vbBuffer);
        }), a(0, e, "points", function() {
            return this._points;
        }, function(e) {
            this._points = e, this._ibArray.length = 0, this._vbArray.length = 0, yt.createLine2(this._points, this._ibArray, this._lineWidth, 0, this._vbArray, !1);
            var i = l.create(this._lineColor).numColor;
            this._vertNum = this._points.length;
            var r = this._vertNum;
            (!this.vbBuffer || this.vbBuffer.getByteLength() < 3 * this._vertNum * 4) && (this.vbBuffer = new ParamData(3 * r * 4, !0)), 
            this._vbSize = 3 * this._vertNum * 4;
            for (var _ = this.vbBuffer._float32Data, a = this.vbBuffer._int32Data, n = 0, s = 0; s < this._vertNum; s++) _[n++] = this._vbArray[2 * s] + this.x, 
            _[n++] = this._vbArray[2 * s + 1] + this.y, a[n++] = i;
            (!this.ibBuffer || this.ibBuffer.getByteLength() < 3 * (this._vertNum - 2) * 2) && (this.ibBuffer = new ParamData(3 * (r - 2) * 2, !0, !0)), 
            this._ibSize = 3 * (this._vertNum - 2) * 2;
            for (var o = this.ibBuffer._int16Data, h = 0; h < 3 * (this._vertNum - 2); h++) o[h] = this._ibArray[h];
            (a = this._paramData._int32Data)[t._PARAM_VB_SIZE_POS_] = this._vbSize, a[t._PARAM_IB_SIZE_POS_] = this._ibSize, 
            j.syncBufferToRenderThread(this.ibBuffer), j.syncBufferToRenderThread(this.vbBuffer), 
            j.syncBufferToRenderThread(this._paramData);
        }), a(0, e, "cmdID", function() {
            return "DrawLines";
        }), a(0, e, "x", function() {
            return this._x;
        }, function(t) {
            this._x = t;
            for (var e = this.vbBuffer._float32Data, i = 0, r = 0; r < this._vertNum; r++) e[i++] = this._vbArray[2 * r] + this._x, 
            i++, i++;
            j.syncBufferToRenderThread(this.vbBuffer);
        }), a(0, e, "vid", function() {
            return this._vid;
        }, function(t) {
            this._vid = t;
        }), a(0, e, "y", function() {
            return this._y;
        }, function(t) {
            this._y = t;
            for (var e = this.vbBuffer._float32Data, i = 0, r = 0; r < this._vertNum; r++) i++, 
            e[i++] = this._vbArray[2 * r + 1] + this._y, i++;
            j.syncBufferToRenderThread(this.vbBuffer);
        }), a(0, e, "lineWidth", function() {
            return this._lineWidth;
        }, function(t) {
            this._lineWidth = t, this._ibArray.length = 0, this._vbArray.length = 0, yt.createLine2(this._points, this._ibArray, this._lineWidth, 0, this._vbArray, !1);
            for (var e = this.vbBuffer._float32Data, i = 0, r = 0; r < this._vertNum; r++) e[i++] = this._vbArray[2 * r] + this.x, 
            e[i++] = this._vbArray[2 * r + 1] + this.y, i++;
            j.syncBufferToRenderThread(this.vbBuffer);
        }), t.create = function(e, i, r, _, a, n) {
            var s = C.getItemByClass("DrawLinesCmd", t);
            s._graphicsCmdEncoder = this._commandEncoder, t._DRAW_LINES_CMD_ENCODER_ || ((t._DRAW_LINES_CMD_ENCODER_ = j.instance.createCommandEncoder(152, 32, !0)).useProgramEx(Nt.PROGRAMEX_DRAWVG), 
            t._DRAW_LINES_CMD_ENCODER_.useVDO(Nt.VDO_MESHVG), t._DRAW_LINES_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_VIEWS, 0), 
            t._DRAW_LINES_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_DIR, 1), t._DRAW_LINES_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_POS, 2), 
            t._DRAW_LINES_CMD_ENCODER_.setMeshExByParamData(4 * t._PARAM_VB_POS_, 4 * t._PARAM_VB_OFFSET_POS_, 4 * t._PARAM_VB_SIZE_POS_, 4 * t._PARAM_IB_POS_, 4 * t._PARAM_IB_OFFSET_POS_, 4 * t._PARAM_IB_SIZE_POS_, 4 * t._PARAM_INDEX_ELEMENT_OFFSET_POS_), 
            t._DRAW_LINES_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_MATRIX32, 0, 7), t._DRAW_LINES_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_DRAWTEXTURE_COLOR, 1, 15), 
            j.syncBufferToRenderThread(t._DRAW_LINES_CMD_ENCODER_)), s._paramData || (s._paramData = new ParamData(44, !0)), 
            s._x = e, s._y = i, s._points = r, s._lineColor = _, s._lineWidth = a, s._vid = n, 
            yt.createLine2(r, s._ibArray, a, 0, s._vbArray, !1);
            var o = l.create(_).numColor;
            s._vertNum = r.length;
            var h = s._vertNum;
            (!s.vbBuffer || s.vbBuffer.getByteLength() < 3 * s._vertNum * 4) && (s.vbBuffer = new ParamData(3 * h * 4, !0)), 
            s._vbSize = 3 * s._vertNum * 4;
            for (var u = s.vbBuffer._float32Data, c = s.vbBuffer._int32Data, f = 0, d = 0; d < s._vertNum; d++) u[f++] = s._vbArray[2 * d] + e, 
            u[f++] = s._vbArray[2 * d + 1] + i, c[f++] = o;
            (!s.ibBuffer || s.ibBuffer.getByteLength() < 3 * (s._vertNum - 2) * 2) && (s.ibBuffer = new ParamData(3 * (h - 2) * 2, !0, !0)), 
            s._ibSize = 3 * (s._vertNum - 2) * 2;
            for (var A = s.ibBuffer._int16Data, E = 0; E < 3 * (s._vertNum - 2); E++) A[E] = s._ibArray[E];
            var m = s._paramData._float32Data;
            return c = s._paramData._int32Data, c[0] = 1, c[t._PARAM_VB_POS_] = s.vbBuffer.getPtrID(), 
            c[t._PARAM_IB_POS_] = s.ibBuffer.getPtrID(), m[t._PARAM_LINECOLOR_POS_] = _ || 4278190335, 
            m[t._PARAM_LINEWIDTH_POS_] = a, m[t._PARAM_VID_POS_] = n, c[t._PARAM_VB_SIZE_POS_] = s._vbSize, 
            c[t._PARAM_IB_SIZE_POS_] = s._ibSize, c[t._PARAM_VB_OFFSET_POS_] = 0, c[t._PARAM_IB_OFFSET_POS_] = 0, 
            c[t._PARAM_INDEX_ELEMENT_OFFSET_POS_] = 0, j.syncBufferToRenderThread(s.vbBuffer), 
            j.syncBufferToRenderThread(s.ibBuffer), j.syncBufferToRenderThread(s._paramData), 
            s._graphicsCmdEncoder.useCommandEncoder(t._DRAW_LINES_CMD_ENCODER_.getPtrID(), s._paramData.getPtrID(), -1), 
            j.syncBufferToRenderThread(s._graphicsCmdEncoder), s;
        }, t.ID = "DrawLines", t._DRAW_LINES_CMD_ENCODER_ = null, t._PARAM_VB_POS_ = 1, 
        t._PARAM_IB_POS_ = 2, t._PARAM_LINECOLOR_POS_ = 3, t._PARAM_LINEWIDTH_POS_ = 4, 
        t._PARAM_VID_POS_ = 5, t._PARAM_VB_SIZE_POS_ = 6, t._PARAM_IB_SIZE_POS_ = 7, t._PARAM_VB_OFFSET_POS_ = 8, 
        t._PARAM_IB_OFFSET_POS_ = 9, t._PARAM_INDEX_ELEMENT_OFFSET_POS_ = 10;
    }(), function() {
        function t() {
            this._graphicsCmdEncoder = null, this._index = 0, this._paramData = null, this._texture = null, 
            this._x = NaN, this._y = NaN, this._width = NaN, this._height = NaN;
        }
        _(t, "laya.layagl.cmdNative.DrawImageCmdNative");
        var e = t.prototype;
        e.recover = function() {
            this._texture._removeReference(), this._texture = null, this._graphicsCmdEncoder = null, 
            C.recover("DrawImageCmd", this);
        }, a(0, e, "cmdID", function() {
            return "DrawImage";
        }), a(0, e, "y", function() {
            return this._y;
        }, function(e) {
            this._y = e;
            var i = this._paramData._float32Data;
            i[t._PARAM_VB_POS_ + 1] = this._y, i[t._PARAM_VB_POS_ + 7] = this._y, i[t._PARAM_VB_POS_ + 13] = this._y + this._height, 
            i[t._PARAM_VB_POS_ + 19] = this._y + this._height, j.syncBufferToRenderThread(this._paramData);
        }), a(0, e, "texture", function() {
            return this._texture;
        }, function(e) {
            this._texture = e, this._paramData._int32Data[t._PARAM_TEXTURE_POS_] = this._texture.bitmap._glTexture.id;
            var i = this._paramData._float32Data, r = this._texture.uv;
            i[t._PARAM_VB_POS_ + 2] = r[0], i[t._PARAM_VB_POS_ + 3] = r[1], i[t._PARAM_VB_POS_ + 8] = r[2], 
            i[t._PARAM_VB_POS_ + 9] = r[3], i[t._PARAM_VB_POS_ + 14] = r[4], i[t._PARAM_VB_POS_ + 15] = r[5], 
            i[t._PARAM_VB_POS_ + 20] = r[6], i[t._PARAM_VB_POS_ + 21] = r[7], j.syncBufferToRenderThread(this._paramData);
        }), a(0, e, "width", function() {
            return this._width;
        }, function(e) {
            this._width = e;
            var i = this._paramData._float32Data;
            i[t._PARAM_VB_POS_] = this._x, i[t._PARAM_VB_POS_ + 6] = this._x + this._width, 
            i[t._PARAM_VB_POS_ + 12] = this._x + this._width, i[t._PARAM_VB_POS_ + 18] = this._x, 
            j.syncBufferToRenderThread(this._paramData);
        }), a(0, e, "x", function() {
            return this._x;
        }, function(e) {
            this._x = e;
            var i = this._paramData._float32Data;
            i[t._PARAM_VB_POS_] = this._x, i[t._PARAM_VB_POS_ + 6] = this._x + this._width, 
            i[t._PARAM_VB_POS_ + 12] = this._x + this._width, i[t._PARAM_VB_POS_ + 18] = this._x, 
            j.syncBufferToRenderThread(this._paramData);
        }), a(0, e, "height", function() {
            return this._height;
        }, function(e) {
            this._height = e;
            var i = this._paramData._float32Data;
            i[t._PARAM_VB_POS_ + 1] = this._y, i[t._PARAM_VB_POS_ + 7] = this._y, i[t._PARAM_VB_POS_ + 13] = this._y + this._height, 
            i[t._PARAM_VB_POS_ + 19] = this._y + this._height, j.syncBufferToRenderThread(this._paramData);
        }), t.create = function(e, i, r, _, a) {
            var n = C.getItemByClass("DrawImageCmd", t);
            n._graphicsCmdEncoder = this._commandEncoder, t._DRAW_IMAGE_CMD_ENCODER_ || ((t._DRAW_IMAGE_CMD_ENCODER_ = j.instance.createCommandEncoder(172, 32, !0)).blendFuncByGlobalValue(Nt.GLOBALVALUE_BLENDFUNC_SRC, Nt.GLOBALVALUE_BLENDFUNC_DEST), 
            t._DRAW_IMAGE_CMD_ENCODER_.useProgramEx(Nt.PROGRAMEX_DRAWTEXTURE), t._DRAW_IMAGE_CMD_ENCODER_.useVDO(Nt.VDO_MESHQUADTEXTURE), 
            t._DRAW_IMAGE_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_VIEWS, 0), t._DRAW_IMAGE_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_DIR, 1), 
            t._DRAW_IMAGE_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_POS, 2), t._DRAW_IMAGE_CMD_ENCODER_.uniformTextureByParamData(0, 4, 4 * t._PARAM_TEXTURE_POS_), 
            t._DRAW_IMAGE_CMD_ENCODER_.setRectMeshByParamData(12, 4 * t._PARAM_VB_POS_, 16), 
            t._DRAW_IMAGE_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_MATRIX32, 0, 7), t._DRAW_IMAGE_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_DRAWTEXTURE_COLOR, 1, 15), 
            j.syncBufferToRenderThread(t._DRAW_IMAGE_CMD_ENCODER_)), n._paramData || (n._paramData = new ParamData(116, !0)), 
            n._texture = e, e._addReference(), n._x = i, n._y = r, n._width = _, n._height = a;
            var s = n._paramData._float32Data, o = n._paramData._int32Data;
            o[0] = 3, o[1] = 33984, o[t._PARAM_TEXTURE_POS_] = e.getIsReady() ? e.bitmap._glTexture.id : 0, 
            o[3] = 1, o[4] = 96;
            var h = 0 != _ ? _ : e.bitmap.width, l = 0 != a ? a : e.bitmap.height, u = e.uv, c = t._PARAM_VB_POS_;
            return s[c++] = i, s[c++] = r, s[c++] = u[0], s[c++] = u[1], o[c++] = 4294967295, 
            o[c++] = 4294967295, s[c++] = i + h, s[c++] = r, s[c++] = u[2], s[c++] = u[3], o[c++] = 4294967295, 
            o[c++] = 4294967295, s[c++] = i + h, s[c++] = r + l, s[c++] = u[4], s[c++] = u[5], 
            o[c++] = 4294967295, o[c++] = 4294967295, s[c++] = i, s[c++] = r + l, s[c++] = u[6], 
            s[c++] = u[7], o[c++] = 4294967295, o[c++] = 4294967295, j.syncBufferToRenderThread(n._paramData), 
            n._graphicsCmdEncoder.useCommandEncoder(t._DRAW_IMAGE_CMD_ENCODER_.getPtrID(), n._paramData.getPtrID(), -1), 
            j.syncBufferToRenderThread(n._graphicsCmdEncoder), n;
        }, t.ID = "DrawImage", t._DRAW_IMAGE_CMD_ENCODER_ = null, t._PARAM_TEXTURE_POS_ = 2, 
        t._PARAM_VB_POS_ = 5;
    }(), function() {
        function t() {
            this._graphicsCmdEncoder = null, this._paramData = null, this._paramID = null, this._x = NaN, 
            this._y = NaN, this._radius = NaN, this._fillColor = null, this._lineColor = null, 
            this._lineWidth = NaN, this._vertNum = 0, this._line_vertNum = 0, this.ibBuffer = null, 
            this.vbBuffer = null, this.line_ibBuffer = null, this.line_vbBuffer = null, this._ibSize = 0, 
            this._vbSize = 0, this._line_ibSize = 0, this._line_vbSize = 0, this._cmdCurrentPos = 0, 
            this._points = [], this._linePoints = [], this._line_vbArray = [], this._line_ibArray = [];
        }
        _(t, "laya.layagl.cmdNative.DrawCircleCmdNative");
        var e = t.prototype;
        e._arc = function(t, e, i, r, _) {
            void 0 === r && (r = !1), void 0 === _ && (_ = !0);
            var a = [], n = 0, s = 0, o = 0, h = 0, l = 0, u = 0, c = 0, f = 0;
            if (s = 2 * Math.PI - 0, r) if (Math.abs(s) >= 2 * Math.PI) s = 2 * -Math.PI; else for (;s > 0; ) s -= 2 * Math.PI; else if (Math.abs(s) >= 2 * Math.PI) s = 2 * Math.PI; else for (;s < 0; ) s += 2 * Math.PI;
            o = s / (f = i < 101 ? Math.max(10, s * i / 5) : i < 201 ? Math.max(10, s * i / 20) : Math.max(10, s * i / 40)) / 2, 
            h = Math.abs(4 / 3 * (1 - Math.cos(o)) / Math.sin(o)), r && (h = -h);
            for (c = 0; c <= f; c++) n = 0 + s * (c / f), l = t + Math.cos(n) * i, u = e + Math.sin(n) * i, 
            a.push(l), a.push(u);
            return a;
        }, e.recover = function() {
            this._fillColor = null, this._lineColor = null, this._points.length = 0, this._linePoints.length = 0, 
            this._line_vbArray.length = 0, this._line_ibArray.length = 0, C.recover("DrawCircleCmd", this);
        }, a(0, e, "lineColor", function() {
            return this._lineColor;
        }, function(e) {
            !this._lineColor && this._lineWidth && (this._graphicsCmdEncoder._idata[this._cmdCurrentPos + 1] = t._DRAW_CIRCLE_LINES_CMD_ENCODER_.getPtrID(), 
            j.syncBufferToRenderThread(this._graphicsCmdEncoder)), this._lineColor = e, this._linePoints.length = 0, 
            this._line_ibArray.length = 0, this._line_vbArray.length = 0;
            for (var i = 0; i < this._points.length; i++) this._linePoints.push(this._points[i]);
            this._linePoints.push(this._points[0]), this._linePoints.push(this._points[1]), 
            yt.createLine2(this._linePoints, this._line_ibArray, this._lineWidth, 0, this._line_vbArray, !1), 
            this._line_vertNum = this._linePoints.length;
            var r = this._line_vertNum;
            (!this.line_ibBuffer || this.line_ibBuffer.getByteLength() < 3 * (this._line_vertNum - 2) * 2) && (this.line_ibBuffer = new ParamData(3 * (r - 2) * 2, !0, !0)), 
            this._line_ibSize = 3 * (this._line_vertNum - 2) * 2;
            for (var _ = this.line_ibBuffer._int16Data, a = 0, n = 0; n < 3 * (this._line_vertNum - 2); n++) _[a++] = this._line_ibArray[n];
            (!this.line_vbBuffer || this.line_vbBuffer.getByteLength() < 3 * this._line_vertNum * 4) && (this.line_vbBuffer = new ParamData(3 * r * 4, !0)), 
            this._line_vbSize = 3 * this._line_vertNum * 4;
            var s = l.create(e).numColor, o = this.line_vbBuffer._float32Data, h = this.line_vbBuffer._int32Data, u = 0;
            for (i = 0; i < this._line_vertNum; i++) o[u++] = this._line_vbArray[2 * i] + this.x, 
            o[u++] = this._line_vbArray[2 * i + 1] + this.y, h[u++] = s;
            var c = this._paramData._int32Data;
            c[t._PARAM_LINE_VB_POS_] = this.line_vbBuffer.getPtrID(), c[t._PARAM_LINE_IB_POS_] = this.line_ibBuffer.getPtrID(), 
            c[t._PARAM_LINE_VB_SIZE_POS_] = this._line_vbSize, c[t._PARAM_LINE_IB_SIZE_POS_] = this._line_ibSize, 
            j.syncBufferToRenderThread(this.line_vbBuffer), j.syncBufferToRenderThread(this.line_ibBuffer), 
            j.syncBufferToRenderThread(this._paramData);
        }), a(0, e, "cmdID", function() {
            return "DrawCircle";
        }), a(0, e, "fillColor", function() {
            return this._fillColor;
        }, function(t) {
            this._fillColor = t;
            for (var e = l.create(this._fillColor).numColor, i = this.vbBuffer._int32Data, r = 0, _ = 0; _ < this._vertNum; _++) r++, 
            r++, i[r++] = e;
            j.syncBufferToRenderThread(this.vbBuffer);
        }), a(0, e, "x", function() {
            return this._x;
        }, function(t) {
            this._x = t;
            for (var e = this.vbBuffer._float32Data, i = 0, r = 0; r < this._vertNum; r++) e[i++] = this._points[2 * r] + this._x, 
            i++, i++;
            if (this._lineColor) {
                var _ = this.line_vbBuffer._float32Data;
                for (i = 0, r = 0; r < this._line_vertNum; r++) _[i++] = this._line_vbArray[2 * r] + this._x, 
                i++, i++;
                j.syncBufferToRenderThread(this.line_vbBuffer);
            }
            j.syncBufferToRenderThread(this.vbBuffer);
        }), a(0, e, "y", function() {
            return this._y;
        }, function(t) {
            this._y = t;
            for (var e = this.vbBuffer._float32Data, i = 0, r = 0; r < this._vertNum; r++) i++, 
            e[i++] = this._points[2 * r + 1] + this._y, i++;
            if (this._lineColor) {
                var _ = this.line_vbBuffer._float32Data;
                for (i = 0, r = 0; r < this._line_vertNum; r++) i++, _[i++] = this._line_vbArray[2 * r + 1] + this._y, 
                i++;
                j.syncBufferToRenderThread(this.line_vbBuffer);
            }
            j.syncBufferToRenderThread(this.vbBuffer);
        }), a(0, e, "radius", function() {
            return this._radius;
        }, function(e) {
            this._points = this._arc(0, 0, e), this._vertNum = this._points.length / 2;
            var i = this._vertNum, r = 0;
            this._linePoints.length = 0, this._line_ibArray.length = 0, this._line_vbArray.length = 0;
            var _ = this._vertNum - 2;
            (!this.ibBuffer || this.ibBuffer.getByteLength() < 3 * _ * 2) && (this.ibBuffer = new ParamData(3 * _ * 2, !0, !0)), 
            this._ibSize = 3 * _ * 2;
            for (var a = this.ibBuffer._int16Data, n = 0, s = 0; s < _; s++) a[n++] = 0, a[n++] = s + 1 + 0, 
            a[n++] = s + 2 + 0;
            (!this.vbBuffer || this.vbBuffer.getByteLength() < 3 * this._vertNum * 4) && (this.vbBuffer = new ParamData(3 * i * 4, !0)), 
            this._vbSize = 3 * this._vertNum * 4;
            for (var o = l.create(this._fillColor).numColor, h = this.vbBuffer._float32Data, u = this.vbBuffer._int32Data, c = 0, f = 0; f < this._vertNum; f++) h[c++] = this._points[2 * f] + this._x, 
            h[c++] = this._points[2 * f + 1] + this._y, u[c++] = o;
            if (this._lineColor) {
                for (f = 0; f < this._points.length; f++) this._linePoints.push(this._points[f]);
                this._linePoints.push(this._points[0]), this._linePoints.push(this._points[1]), 
                yt.createLine2(this._linePoints, this._line_ibArray, this._lineWidth, 0, this._line_vbArray, !1), 
                this._line_vertNum = this._linePoints.length, r = this._line_vertNum, (!this.line_ibBuffer || this.line_ibBuffer.getByteLength() < 3 * (this._line_vertNum - 2) * 2) && (this.line_ibBuffer = new ParamData(3 * (r - 2) * 2, !0, !0)), 
                this._line_ibSize = 3 * (this._line_vertNum - 2) * 2;
                var d = this.line_ibBuffer._int16Data;
                n = 0;
                for (var A = 0; A < 3 * (this._line_vertNum - 2); A++) d[n++] = this._line_ibArray[A];
                (!this.line_vbBuffer || this.line_vbBuffer.getByteLength() < 3 * this._line_vertNum * 4) && (this.line_vbBuffer = new ParamData(3 * r * 4, !0)), 
                this._line_vbSize = 3 * this._line_vertNum * 4;
                var E = l.create(this._lineColor).numColor, m = this.line_vbBuffer._float32Data, R = this.line_vbBuffer._int32Data;
                for (c = 0, f = 0; f < this._line_vertNum; f++) m[c++] = this._line_vbArray[2 * f] + this._x, 
                m[c++] = this._line_vbArray[2 * f + 1] + this._y, R[c++] = E;
            }
            var p = this._paramData._int32Data;
            p[t._PARAM_VB_POS_] = this.vbBuffer.getPtrID(), p[t._PARAM_IB_POS_] = this.ibBuffer.getPtrID(), 
            p[t._PARAM_VB_SIZE_POS_] = this._vbSize, p[t._PARAM_IB_SIZE_POS_] = this._ibSize, 
            j.syncBufferToRenderThread(this.vbBuffer), j.syncBufferToRenderThread(this.ibBuffer), 
            this._lineColor && (p[t._PARAM_LINE_VB_POS_] = this.line_vbBuffer.getPtrID(), p[t._PARAM_LINE_IB_POS_] = this.line_ibBuffer.getPtrID(), 
            p[t._PARAM_LINE_VB_SIZE_POS_] = this._line_vbSize, p[t._PARAM_LINE_IB_SIZE_POS_] = this._line_ibSize, 
            j.syncBufferToRenderThread(this.line_vbBuffer), j.syncBufferToRenderThread(this.line_ibBuffer)), 
            j.syncBufferToRenderThread(this._paramData);
        }), a(0, e, "lineWidth", function() {
            return this._lineWidth;
        }, function(e) {
            !this._lineWidth && this._lineColor && (this._graphicsCmdEncoder._idata[this._cmdCurrentPos + 1] = t._DRAW_CIRCLE_LINES_CMD_ENCODER_.getPtrID(), 
            j.syncBufferToRenderThread(this._graphicsCmdEncoder)), this._lineWidth = e, this._linePoints.length = 0, 
            this._line_ibArray.length = 0, this._line_vbArray.length = 0;
            for (var i = 0; i < this._points.length; i++) this._linePoints.push(this._points[i]);
            this._linePoints.push(this._points[0]), this._linePoints.push(this._points[1]), 
            yt.createLine2(this._linePoints, this._line_ibArray, e, 0, this._line_vbArray, !1), 
            this._line_vertNum = this._linePoints.length;
            var r = this._line_vertNum;
            (!this.line_ibBuffer || this.line_ibBuffer.getByteLength() < 3 * (this._line_vertNum - 2) * 2) && (this.line_ibBuffer = new ParamData(3 * (r - 2) * 2, !0, !0)), 
            this._line_ibSize = 3 * (this._line_vertNum - 2) * 2;
            for (var _ = this.line_ibBuffer._int16Data, a = 0, n = 0; n < 3 * (this._line_vertNum - 2); n++) _[a++] = this._line_ibArray[n];
            (!this.line_vbBuffer || this.line_vbBuffer.getByteLength() < 3 * this._line_vertNum * 4) && (this.line_vbBuffer = new ParamData(3 * r * 4, !0)), 
            this._line_vbSize = 3 * this._line_vertNum * 4;
            var s = l.create(this._lineColor).numColor, o = this.line_vbBuffer._float32Data, h = this.line_vbBuffer._int32Data, u = 0;
            for (i = 0; i < this._line_vertNum; i++) o[u++] = this._line_vbArray[2 * i] + this.x, 
            o[u++] = this._line_vbArray[2 * i + 1] + this.y, h[u++] = s;
            var c = this._paramData._int32Data;
            c[t._PARAM_LINE_VB_POS_] = this.line_vbBuffer.getPtrID(), c[t._PARAM_LINE_IB_POS_] = this.line_ibBuffer.getPtrID(), 
            c[t._PARAM_LINE_VB_SIZE_POS_] = this._line_vbSize, c[t._PARAM_LINE_IB_SIZE_POS_] = this._line_ibSize, 
            j.syncBufferToRenderThread(this.line_vbBuffer), j.syncBufferToRenderThread(this.line_ibBuffer), 
            j.syncBufferToRenderThread(this._paramData);
        }), t.create = function(e, i, r, _, a, n, s) {
            var o = C.getItemByClass("DrawCircleCmd", t);
            o._graphicsCmdEncoder = this._commandEncoder, t._DRAW_CIRCLE_LINES_CMD_ENCODER_ || ((t._DRAW_CIRCLE_LINES_CMD_ENCODER_ = j.instance.createCommandEncoder(244, 32, !0)).blendFuncByGlobalValue(Nt.GLOBALVALUE_BLENDFUNC_SRC, Nt.GLOBALVALUE_BLENDFUNC_DEST), 
            t._DRAW_CIRCLE_LINES_CMD_ENCODER_.useProgramEx(Nt.PROGRAMEX_DRAWVG), t._DRAW_CIRCLE_LINES_CMD_ENCODER_.useVDO(Nt.VDO_MESHVG), 
            t._DRAW_CIRCLE_LINES_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_VIEWS, 0), t._DRAW_CIRCLE_LINES_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_DIR, 1), 
            t._DRAW_CIRCLE_LINES_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_POS, 2), t._DRAW_CIRCLE_LINES_CMD_ENCODER_.setMeshExByParamData(4 * t._PARAM_VB_POS_, 4 * t._PARAM_VB_OFFSET_POS_, 4 * t._PARAM_VB_SIZE_POS_, 4 * t._PARAM_IB_POS_, 4 * t._PARAM_IB_OFFSET_POS_, 4 * t._PARAM_IB_SIZE_POS_, 4 * t._PARAM_INDEX_ELEMENT_OFFSET_POS_), 
            t._DRAW_CIRCLE_LINES_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_MATRIX32, 0, 7), t._DRAW_CIRCLE_LINES_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_DRAWTEXTURE_COLOR, 1, 15), 
            t._DRAW_CIRCLE_LINES_CMD_ENCODER_.setMeshExByParamData(4 * t._PARAM_LINE_VB_POS_, 4 * t._PARAM_LINE_VB_OFFSET_POS_, 4 * t._PARAM_LINE_VB_SIZE_POS_, 4 * t._PARAM_LINE_IB_POS_, 4 * t._PARAM_LINE_IB_OFFSET_POS_, 4 * t._PARAM_LINE_IB_SIZE_POS_, 4 * t._PARAM_LINE_INDEX_ELEMENT_OFFSET_POS_), 
            t._DRAW_CIRCLE_LINES_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_MATRIX32, 0, 7), t._DRAW_CIRCLE_LINES_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_DRAWTEXTURE_COLOR, 1, 15), 
            j.syncBufferToRenderThread(t._DRAW_CIRCLE_LINES_CMD_ENCODER_)), t._DRAW_CIRCLE_CMD_ENCODER_ || ((t._DRAW_CIRCLE_CMD_ENCODER_ = j.instance.createCommandEncoder(168, 32, !0)).blendFuncByGlobalValue(Nt.GLOBALVALUE_BLENDFUNC_SRC, Nt.GLOBALVALUE_BLENDFUNC_DEST), 
            t._DRAW_CIRCLE_CMD_ENCODER_.useProgramEx(Nt.PROGRAMEX_DRAWVG), t._DRAW_CIRCLE_CMD_ENCODER_.useVDO(Nt.VDO_MESHVG), 
            t._DRAW_CIRCLE_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_VIEWS, 0), t._DRAW_CIRCLE_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_DIR, 1), 
            t._DRAW_CIRCLE_CMD_ENCODER_.uniformEx(Nt.GLOBALVALUE_CLIP_MAT_POS, 2), t._DRAW_CIRCLE_CMD_ENCODER_.setMeshExByParamData(4 * t._PARAM_VB_POS_, 4 * t._PARAM_VB_OFFSET_POS_, 4 * t._PARAM_VB_SIZE_POS_, 4 * t._PARAM_IB_POS_, 4 * t._PARAM_IB_OFFSET_POS_, 4 * t._PARAM_IB_SIZE_POS_, 4 * t._PARAM_INDEX_ELEMENT_OFFSET_POS_), 
            t._DRAW_CIRCLE_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_MATRIX32, 0, 7), t._DRAW_CIRCLE_CMD_ENCODER_.modifyMesh(Nt.GLOBALVALUE_DRAWTEXTURE_COLOR, 1, 15), 
            j.syncBufferToRenderThread(t._DRAW_CIRCLE_CMD_ENCODER_)), o._paramData || (o._paramData = new ParamData(72, !0)), 
            o._x = e, o._y = i, o._radius = r, o._fillColor = _, o._lineColor = a, o._lineWidth = n, 
            o._points = o._arc(0, 0, r), o._vertNum = o._points.length / 2;
            var h = o._vertNum, u = o._vertNum - 2;
            (!o.ibBuffer || o.ibBuffer.getByteLength() < 3 * u * 2) && (o.ibBuffer = new ParamData(3 * u * 2, !0, !0)), 
            o._ibSize = 3 * u * 2;
            for (var c = o.ibBuffer._int16Data, f = 0, d = 0; d < u; d++) c[f++] = 0, c[f++] = d + 1 + 0, 
            c[f++] = d + 2 + 0;
            var A = l.create(_).numColor;
            (!o.vbBuffer || o.vbBuffer.getByteLength() < 3 * o._vertNum * 4) && (o.vbBuffer = new ParamData(3 * h * 4, !0)), 
            o._vbSize = 3 * o._vertNum * 4;
            for (var E = o.vbBuffer._float32Data, m = o.vbBuffer._int32Data, R = 0, p = 0; p < o._vertNum; p++) E[R++] = o._points[2 * p] + e, 
            E[R++] = o._points[2 * p + 1] + i, m[R++] = A;
            var T = 0;
            for (p = 0; p < o._points.length; p++) o._linePoints.push(o._points[p]);
            if (o._linePoints.push(o._points[0]), o._linePoints.push(o._points[1]), a) {
                yt.createLine2(o._linePoints, o._line_ibArray, n, 0, o._line_vbArray, !1), o._line_vertNum = o._linePoints.length, 
                T = o._line_vertNum, (!o.line_ibBuffer || o.line_ibBuffer.getByteLength() < 3 * (o._line_vertNum - 2) * 2) && (o.line_ibBuffer = new ParamData(3 * (T - 2) * 2, !0, !0)), 
                o._line_ibSize = 3 * (o._line_vertNum - 2) * 2;
                var v = o.line_ibBuffer._int16Data;
                f = 0;
                for (var D = 0; D < 3 * (o._line_vertNum - 2); D++) v[f++] = o._line_ibArray[D];
                (!o.line_vbBuffer || o.line_vbBuffer.getByteLength() < 3 * o._line_vertNum * 4) && (o.line_vbBuffer = new ParamData(3 * T * 4, !0)), 
                o._line_vbSize = 3 * o._line_vertNum * 4;
                var P = l.create(a), g = P.numColor, M = o.line_vbBuffer._float32Data, y = o.line_vbBuffer._int32Data;
                for (R = 0, p = 0; p < o._line_vertNum; p++) M[R++] = o._line_vbArray[2 * p] + e, 
                M[R++] = o._line_vbArray[2 * p + 1] + i, y[R++] = g;
            } else {
                o._lineWidth = 1;
                for (yt.createLine2(o._linePoints, o._line_ibArray, o._lineWidth, 0, o._line_vbArray, !1), 
                o._line_vertNum = o._linePoints.length, T = o._line_vertNum, (!o.line_ibBuffer || o.line_ibBuffer.getByteLength() < 3 * (o._line_vertNum - 2) * 2) && (o.line_ibBuffer = new ParamData(3 * (T - 2) * 2, !0, !0)), 
                o._line_ibSize = 3 * (o._line_vertNum - 2) * 2, v = o.line_ibBuffer._int16Data, 
                f = 0, D = 0; D < 3 * (o._line_vertNum - 2); D++) v[f++] = o._line_ibArray[D];
                for ((!o.line_vbBuffer || o.line_vbBuffer.getByteLength() < 3 * o._line_vertNum * 4) && (o.line_vbBuffer = new ParamData(3 * T * 4, !0)), 
                o._line_vbSize = 3 * o._line_vertNum * 4, g = (P = l.create("#FFFFFF")).numColor, 
                M = o.line_vbBuffer._float32Data, y = o.line_vbBuffer._int32Data, R = 0, p = 0; p < o._line_vertNum; p++) M[R++] = o._line_vbArray[2 * p] + e, 
                M[R++] = o._line_vbArray[2 * p + 1] + i, y[R++] = g;
            }
            var O = o._paramData._float32Data, S = o._paramData._int32Data;
            return S[0] = 1, S[1] = 32, S[t._PARAM_VB_POS_] = o.vbBuffer.getPtrID(), S[t._PARAM_IB_POS_] = o.ibBuffer.getPtrID(), 
            S[t._PARAM_VB_SIZE_POS_] = o._vbSize, S[t._PARAM_IB_SIZE_POS_] = o._ibSize, S[t._PARAM_VB_OFFSET_POS_] = 0, 
            S[t._PARAM_IB_OFFSET_POS_] = 0, S[t._PARAM_INDEX_ELEMENT_OFFSET_POS_] = 0, j.syncBufferToRenderThread(o.vbBuffer), 
            j.syncBufferToRenderThread(o.ibBuffer), S[t._PARAM_LINE_VB_POS_] = o.line_vbBuffer.getPtrID(), 
            S[t._PARAM_LINE_IB_POS_] = o.line_ibBuffer.getPtrID(), O[t._PARAM_LINECOLOR_POS_] = a, 
            O[t._PARAM_LINEWIDTH_POS_] = n, S[t._PARAM_LINE_VB_SIZE_POS_] = o._line_vbSize, 
            S[t._PARAM_LINE_IB_SIZE_POS_] = o._line_ibSize, S[t._PARAM_LINE_VB_OFFSET_POS_] = 0, 
            S[t._PARAM_LINE_IB_OFFSET_POS_] = 0, S[t._PARAM_LINE_INDEX_ELEMENT_OFFSET_POS_] = 0, 
            j.syncBufferToRenderThread(o.line_vbBuffer), j.syncBufferToRenderThread(o.line_ibBuffer), 
            j.syncBufferToRenderThread(o._paramData), o._cmdCurrentPos = a ? o._graphicsCmdEncoder.useCommandEncoder(t._DRAW_CIRCLE_LINES_CMD_ENCODER_.getPtrID(), o._paramData.getPtrID(), -1) : o._graphicsCmdEncoder.useCommandEncoder(t._DRAW_CIRCLE_CMD_ENCODER_.getPtrID(), o._paramData.getPtrID(), -1), 
            j.syncBufferToRenderThread(o._graphicsCmdEncoder), o;
        }, t.ID = "DrawCircle", t._DRAW_CIRCLE_CMD_ENCODER_ = null, t._DRAW_CIRCLE_LINES_CMD_ENCODER_ = null, 
        t._PARAM_VB_POS_ = 2, t._PARAM_IB_POS_ = 3, t._PARAM_LINE_VB_POS_ = 4, t._PARAM_LINE_IB_POS_ = 5, 
        t._PARAM_LINECOLOR_POS_ = 6, t._PARAM_LINEWIDTH_POS_ = 7, t._PARAM_VB_SIZE_POS_ = 8, 
        t._PARAM_IB_SIZE_POS_ = 9, t._PARAM_LINE_VB_SIZE_POS_ = 10, t._PARAM_LINE_IB_SIZE_POS_ = 11, 
        t._PARAM_VB_OFFSET_POS_ = 12, t._PARAM_IB_OFFSET_POS_ = 13, t._PARAM_LINE_VB_OFFSET_POS_ = 14, 
        t._PARAM_LINE_IB_OFFSET_POS_ = 15, t._PARAM_INDEX_ELEMENT_OFFSET_POS_ = 16, t._PARAM_LINE_INDEX_ELEMENT_OFFSET_POS_ = 17;
    }(), function() {
        function t() {
            this.texWidth = 1024, this.texHeight = 1024, this.atlasgrid = null, this.protectDist = 1, 
            this.texture = null, this.charMaps = {}, this.texHeight = this.texWidth = J.atlasWidth, 
            this.texture = _e.getTextTexture(this.texWidth, this.texHeight), this.texWidth / t.atlasGridW > 256 && (t.atlasGridW = Math.ceil(this.texWidth / 256)), 
            this.atlasgrid = new Q(this.texWidth / t.atlasGridW, this.texHeight / t.atlasGridW, this.texture.id);
        }
        _(t, "laya.webgl.text.TextAtlas");
        var e = t.prototype;
        return e.setProtecteDist = function(t) {
            this.protectDist = t;
        }, e.getAEmpty = function(e, i, r) {
            var _ = this.atlasgrid.addRect(1, Math.ceil(e / t.atlasGridW), Math.ceil(i / t.atlasGridW), r);
            return _ && (r.x *= t.atlasGridW, r.y *= t.atlasGridW), _;
        }, e.destroy = function() {
            for (var t in this.charMaps) {
                this.charMaps[t].deleted = !0;
            }
            this.texture.discard();
        }, e.printDebugInfo = function() {}, a(0, e, "usedRate", function() {
            return this.atlasgrid._used;
        }), t.atlasGridW = 16, t;
    }()), Wt = function(t) {
        function e(t, i) {
            e.__super.call(this, t, i);
        }
        _(e, "laya.webgl.utils.RenderSprite3D", y);
        var i = e.prototype;
        return i.onCreate = function(t) {
            switch (t) {
              case 4:
                return void (this._fun = this._blend);
            }
        }, i._mask = function(t, e, i, r) {
            var _ = this._next, a = t.mask, n = e;
            if (a) {
                n.save();
                var s = n.globalCompositeOperation, o = new g();
                if (o.copyFrom(a.getBounds()), o.width = Math.round(o.width), o.height = Math.round(o.height), 
                o.x = Math.round(o.x), o.y = Math.round(o.y), o.width > 0 && o.height > 0) {
                    var h = o.width, l = o.height, u = St.getRT(h, l);
                    n.breakNextMerge(), n.pushRT(), n.addRenderObject(Vt.create([ n, u, h, l ], laya.webgl.utils.RenderSprite3D.tmpTarget, this)), 
                    a.render(n, -o.x, -o.y), n.breakNextMerge(), n.popRT(), n.save(), n.clipRect(i + o.x - t.getStyle().pivotX, r + o.y - t.getStyle().pivotY, h, l), 
                    _._fun.call(_, t, n, i, r), n.restore(), s = n.globalCompositeOperation, n.addRenderObject(Vt.create([ "mask" ], laya.webgl.utils.RenderSprite3D.setBlendMode, this));
                    var c = Y.create(1, 0), f = W.INV_UV;
                    n.drawTarget(u, i + o.x - t.getStyle().pivotX, r + o.y - t.getStyle().pivotY, h, l, v.TEMP.identity(), c, f, 6), 
                    n.addRenderObject(Vt.create([ u ], laya.webgl.utils.RenderSprite3D.recycleTarget, this)), 
                    n.addRenderObject(Vt.create([ s ], laya.webgl.utils.RenderSprite3D.setBlendMode, this));
                }
                n.restore();
            } else _._fun.call(_, t, e, i, r);
        }, i._blend = function(t, e, i, r) {
            var _ = t._style, a = this._next;
            _.blendMode ? (e.save(), e.globalCompositeOperation = _.blendMode, a._fun.call(a, t, e, i, r), 
            e.restore()) : a._fun.call(a, t, e, i, r);
        }, e.tmpTarget = function(t, e, i, r) {
            e.start(), e.clear(0, 0, 0, 0);
        }, e.recycleTarget = function(t) {
            St.releaseRT(t);
        }, e.setBlendMode = function(t) {
            var e = mt.mainContext;
            Rt.targetFns[Rt.TOINT[t]](e);
        }, r(e, [ "tempUV", function() {
            return this.tempUV = new Array(8);
        } ]), e;
    }(), Gt = function(t) {
        function e() {
            if (this._drawTriUseAbsMatrix = !1, this._id = ++e._COUNT, this._path = null, this._drawCount = 1, 
            this._maxNumEle = 0, this._renderCount = 0, this._isConvexCmd = !0, this._submits = null, 
            this._curSubmit = null, this.meshlist = [], this._clipInfoID = 0, this._lastMatScaleX = 1, 
            this._lastMatScaleY = 1, this._lastMat_a = 1, this._lastMat_b = 0, this._lastMat_c = 0, 
            this._lastMat_d = 1, this._nBlendType = 0, this._saveMark = null, this._drawTextureUseColor = !1, 
            this._italicDeg = 0, this._lastTex = null, this._fillColor = 0, this._flushCnt = 0, 
            this.drawTexAlign = !1, this.mId = -1, this.mHaveKey = !1, this.mHaveLineKey = !1, 
            e.__super.call(this), this._width = 99999999, this._height = 99999999, this._submitKey = new Lt(), 
            this._transedPoints = new Array(8), this._temp4Points = new Array(8), this._clipRect = e.MAXCLIPRECT, 
            this._globalClipMatrix = new v(99999999, 0, 0, 99999999, 0, 0), this._shader2D = new Pt(), 
            this.mOutPoint, e._contextcount++, !e.defTexture) {
                var t = new ue(2, 2);
                t.setPixels(new Uint8Array(16)), e.defTexture = new W(t);
            }
            this._lastTex = e.defTexture, this.clear();
        }
        var s;
        _(e, "laya.webgl.canvas.WebGLContext2D", c);
        var o = e.prototype;
        return o.clearBG = function(t, e, i, r) {
            var _ = mt.mainContext;
            _.clearColor(t, e, i, r), _.clear(16384);
        }, o._getSubmits = function() {
            return this._submits;
        }, o._releaseMem = function() {
            if (this._submits) {
                this._curMat.destroy(), this._curMat = null, this._shader2D.destroy(), this._shader2D = null, 
                this._charSubmitCache.clear();
                for (var t = 0, e = this._submits._length; t < e; t++) this._submits[t].releaseRender();
                this._submits.length = 0, this._submits._length = 0, this._submits = null, this._curSubmit = null, 
                this._path = null, this._save = null;
                var i = 0;
                for (t = 0, i = this.meshlist.length; t < i; t++) {
                    this.meshlist[t].destroy();
                }
                this.meshlist.length = 0, this.sprite = null, this._targets && this._targets.destroy(), 
                this._targets = null;
            }
        }, o.destroy = function() {
            --e._contextcount, this.sprite = null, this._releaseMem(), this._charSubmitCache.destroy(), 
            this._targets && this._targets.destroy(), this._targets = null, this._mesh.destroy();
        }, o.clear = function() {
            this._submits || (this._other = s.DEFAULT, this._curMat = v.create(), this._charSubmitCache = new Ot(), 
            this._mesh = Yt.getAMesh(), this.meshlist.push(this._mesh), this._pathMesh = Ht.getAMesh(), 
            this.meshlist.push(this._pathMesh), this._triangleMesh = Zt.getAMesh(), this.meshlist.push(this._triangleMesh), 
            this._submits = [], this._save = [ tt.Create(this) ], this._save.length = 10, this._shader2D = new Pt()), 
            this._submitKey.clear(), this._mesh.clearVB(), this._renderCount++, this._drawCount = 1, 
            this._other = s.DEFAULT, this._other.lineWidth = this._shader2D.ALPHA = 1, this._nBlendType = 0, 
            this._clipRect = e.MAXCLIPRECT, this._curSubmit = At.RENDERBASE, At.RENDERBASE._ref = 16777215, 
            At.RENDERBASE._numEle = 0, this._shader2D.fillStyle = this._shader2D.strokeStyle = q.DEFAULT;
            for (var t = 0, i = this._submits._length; t < i; t++) this._submits[t].releaseRender();
            this._submits._length = 0, this._curMat.identity(), this._other.clear(), this._saveMark = this._save[0], 
            this._save._length = 1;
        }, o.size = function(t, e) {
            this._width == t && this._height == e || (this._width = t, this._height = e, this._targets && (this._targets.destroy(), 
            this._targets = new le(t, e, 1, -1)), M._context == this && (mt.mainContext.viewport(0, 0, t, e), 
            bt.width = t, bt.height = e)), 0 === t && 0 === e && this._releaseMem();
        }, o.getMatScaleX = function() {
            return this._lastMat_a == this._curMat.a && this._lastMat_b == this._curMat.b ? this._lastMatScaleX : (this._lastMatScaleX = this._curMat.getScaleX(), 
            this._lastMat_a = this._curMat.a, this._lastMat_b = this._curMat.b, this._lastMatScaleX);
        }, o.getMatScaleY = function() {
            return this._lastMat_c == this._curMat.c && this._lastMat_d == this._curMat.d ? this._lastMatScaleY : (this._lastMatScaleY = this._curMat.getScaleY(), 
            this._lastMat_c = this._curMat.c, this._lastMat_d = this._curMat.d, this._lastMatScaleY);
        }, o.setFillColor = function(t) {
            this._fillColor = t;
        }, o.getFillColor = function() {
            return this._fillColor;
        }, o.translate = function(t, e) {
            0 === t && 0 === e || (ut.save(this), this._curMat._bTransform ? (Dt.save(this), 
            this._curMat.tx += t * this._curMat.a + e * this._curMat.c, this._curMat.ty += t * this._curMat.b + e * this._curMat.d) : (this._curMat.tx = t, 
            this._curMat.ty = e));
        }, o.save = function() {
            this._save[this._save._length++] = tt.Create(this);
        }, o.restore = function() {
            var t = this._save._length, e = this._nBlendType;
            if (!(t < 1)) {
                for (var i = t - 1; i >= 0; i--) {
                    var r = this._save[i];
                    if (r.restore(this), r.isSaveMark()) return void (this._save._length = i);
                }
                e != this._nBlendType && (this._curSubmit = At.RENDERBASE);
            }
        }, o.fillText = function(t, e, i, r, _, a) {
            this._fillText(t, null, e, i, r, _, null, 0, null);
        }, o._fillText = function(t, i, r, _, a, n, s, o, h, l) {
            void 0 === l && (l = 0), t ? e._textRender.filltext(this, t, r, _, a, n, s, o, h, l) : i && e._textRender.fillWords(this, i, r, _, a, n, s, o);
        }, o._fast_filltext = function(t, i, r, _, a, n, s, o, h) {
            void 0 === h && (h = 0), e._textRender._fast_filltext(this, t, null, i, r, _, a, n, s, o, h);
        }, o.fillWords = function(t, e, i, r, _) {
            this._fillText(null, t, e, i, r, _, null, -1, null, 0);
        }, o.fillBorderWords = function(t, e, i, r, _, a, n) {
            this._fillBorderText(null, t, e, i, r, _, a, n, null);
        }, o.drawText = function(t, e, i, r, _, a) {
            this._fillText(t, null, e, i, r, l.create(_).strColor, null, -1, a);
        }, o.strokeWord = function(t, e, i, r, _, a, n) {
            this._fillText(t, null, e, i, r, null, l.create(_).strColor, a || 1, n);
        }, o.fillBorderText = function(t, e, i, r, _, a, n, s) {
            this._fillBorderText(t, null, e, i, r, l.create(_).strColor, l.create(a).strColor, n, s);
        }, o._fillBorderText = function(t, e, i, r, _, a, n, s, o) {
            this._fillText(t, e, i, r, _, a, n, s || 1, o);
        }, o._fillRect = function(t, e, i, r, _) {
            var a = this._curSubmit, n = a && 2 === a._key.submitType && a._key.blendShader === this._nBlendType;
            this._mesh.vertNum + 4 > 65535 && (this._mesh = Yt.getAMesh(), this.meshlist.push(this._mesh), 
            n = !1), n && (n = n && this.isSameClipInfo(a)), this.transformQuad(t, e, i, r, 0, this._curMat, this._transedPoints), 
            this.clipedOff(this._transedPoints) || (this._mesh.addQuad(this._transedPoints, W.NO_UV, _, !1), 
            n || (a = this._curSubmit = te.create(this, this._mesh, Y.create(1, 0)), this._submits[this._submits._length++] = a, 
            this._copyClipInfo(a, this._globalClipMatrix), a.shaderValue.textureHost = this._lastTex, 
            a._key.other = this._lastTex && this._lastTex.bitmap ? this._lastTex.bitmap.id : -1, 
            a._renderType = 10016), this._curSubmit._numEle += 6, this._mesh.indexNum += 6, 
            this._mesh.vertNum += 4);
        }, o.fillRect = function(t, e, i, r, _) {
            var a = _ ? q.create(_) : this._shader2D.fillStyle, n = this.mixRGBandAlpha(a.toInt());
            this._fillRect(t, e, i, r, n);
        }, o.fillTexture = function(t, e, r, _, a, n, s, o) {
            if (t._getSource()) {
                var h = this._curSubmit;
                this._mesh.vertNum + 4 > 65535 && (this._mesh = Yt.getAMesh(), this.meshlist.push(this._mesh), 
                !1);
                t.bitmap;
                var l = !0, u = !0;
                switch (n) {
                  case "repeat":
                    break;

                  case "repeat-x":
                    u = !1;
                    break;

                  case "repeat-y":
                    l = !1;
                    break;

                  case "no-repeat":
                    l = u = !1;
                }
                var c = this._temp4Points, f = 0, d = 0, A = 0, E = 0, m = 0, R = 0;
                if (s.x < 0 ? (A = e, f = -s.x % t.width / t.width) : A = e + s.x, s.y < 0 ? (E = r, 
                d = -s.y % t.height / t.height) : E = r + s.y, m = e + _, R = r + a, !l && (m = Math.min(m, e + s.x + t.width)), 
                !u && (R = Math.min(R, r + s.y + t.height)), !(m < e || R < r || A > m || E > R)) {
                    var p = (m - e - s.x) / t.width, T = (R - r - s.y) / t.height;
                    if (this.transformQuad(A, E, m - A, R - E, 0, this._curMat, this._transedPoints), 
                    c[0] = f, c[1] = d, c[2] = p, c[3] = d, c[4] = p, c[5] = T, c[6] = f, c[7] = T, 
                    !this.clipedOff(this._transedPoints)) {
                        var v = this._mixRGBandAlpha(4294967295, this._shader2D.ALPHA);
                        this._mesh.addQuad(this._transedPoints, c, v, !0);
                        var D = Y.create(1, 0);
                        D.defines.add(256), D.u_TexRange = t.uvrect, h = this._curSubmit = te.create(this, this._mesh, D), 
                        this._submits[this._submits._length++] = h, this._copyClipInfo(h, this._globalClipMatrix), 
                        h.shaderValue.textureHost = t, h._renderType = 10016, this._curSubmit._numEle += 6, 
                        this._mesh.indexNum += 6, this._mesh.vertNum += 4;
                    }
                    this.breakNextMerge();
                }
            } else this.sprite && i.systemTimer.callLater(this, this._repaintSprite);
        }, o.setColorFilter = function(t) {
            z.save(this, 8388608, this, !0), this._colorFiler = t, this._curSubmit = At.RENDERBASE;
        }, o.drawTexture = function(t, e, i, r, _) {
            this._drawTextureM(t, e, i, r, _, null, 1, null);
        }, o.drawTextures = function(t, e, r, _) {
            if (t._getSource()) for (var a = e.length / 2, n = 0, s = 0; s < a; s++) this._inner_drawTexture(t, t.bitmap.id, e[n++] + r, e[n++] + _, 0, 0, null, null, 1, !1); else this.sprite && i.systemTimer.callLater(this, this._repaintSprite);
        }, o._drawTextureAddSubmit = function(t, e) {
            var i = null;
            i = te.create(this, this._mesh, Y.create(1, 0)), this._submits[this._submits._length++] = i, 
            i.shaderValue.textureHost = e, i._key.other = t, i._renderType = 10016, this._curSubmit = i;
        }, o._drawTextureM = function(t, e, r, _, a, n, s, o) {
            return t._getSource() ? this._inner_drawTexture(t, t.bitmap.id, e, r, _, a, n, o, s, !1) : (this.sprite && i.systemTimer.callLater(this, this._repaintSprite), 
            !1);
        }, o._drawRenderTexture = function(t, e, i, r, _, a, n, s) {
            return this._inner_drawTexture(t, -1, e, i, r, _, a, s, 1, !1);
        }, o.submitDebugger = function() {
            this._submits[this._submits._length++] = Vt.create([], function() {}, this);
        }, o._copyClipInfo = function(t, e) {
            var i = t.shaderValue.clipMatDir;
            i[0] = e.a, i[1] = e.b, i[2] = e.c, i[3] = e.d;
            var r = t.shaderValue.clipMatPos;
            r[0] = e.tx, r[1] = e.ty, t.clipInfoID = this._clipInfoID;
        }, o.isSameClipInfo = function(t) {
            return t.clipInfoID === this._clipInfoID;
        }, o._useNewTex2DSubmit = function(t, e) {
            this._mesh.vertNum + e > 65535 && (this._mesh = Yt.getAMesh(), this.meshlist.push(this._mesh));
            var i = te.create(this, this._mesh, Y.create(1, 0));
            this._submits[this._submits._length++] = this._curSubmit = i, i.shaderValue.textureHost = t, 
            this._copyClipInfo(i, this._globalClipMatrix);
        }, o._drawTexRect = function(t, e, i, r, _) {
            this.transformQuad(t, e, i, r, this._italicDeg, this._curMat, this._transedPoints);
            var a = this._transedPoints;
            a[0] = a[0] + .5 | 0, a[1] = a[1] + .5 | 0, a[2] = a[2] + .5 | 0, a[3] = a[3] + .5 | 0, 
            a[4] = a[4] + .5 | 0, a[5] = a[5] + .5 | 0, a[6] = a[6] + .5 | 0, a[7] = a[7] + .5 | 0, 
            this.clipedOff(this._transedPoints) || (this._mesh.addQuad(this._transedPoints, _, this._fillColor, !0), 
            this._curSubmit._numEle += 6, this._mesh.indexNum += 6, this._mesh.vertNum += 4);
        }, o.drawCallOptimize = function(t) {
            return this._charSubmitCache.enable(t, this), t;
        }, o._inner_drawTexture = function(t, i, r, _, a, n, s, o, h, l) {
            var u = this._curSubmit._key;
            if (o = o || t._uv, 4 === u.submitType && u.other === i) {
                var c = e._drawTexToDrawTri_Vert;
                return c[0] = r, c[1] = _, c[2] = r + a, c[3] = _, c[4] = r + a, c[5] = _ + n, c[6] = r, 
                c[7] = _ + n, this._drawTriUseAbsMatrix = !0, this.drawTriangles(t, 0, 0, c, o, e._drawTexToDrawTri_Index, s, h, null, "normal"), 
                this._drawTriUseAbsMatrix = !1, !0;
            }
            var f = l ? this._charSubmitCache.getPos() : this._transedPoints;
            this.transformQuad(r, _, a || t.width, n || t.height, this._italicDeg, s || this._curMat, f), 
            this.drawTexAlign && (f[0] = f[0] + .5 | 0, f[1] = f[1] + .5 | 0, f[2] = f[2] + .5 | 0, 
            f[3] = f[3] + .5 | 0, f[4] = f[4] + .5 | 0, f[5] = f[5] + .5 | 0, f[6] = f[6] + .5 | 0, 
            f[7] = f[7] + .5 | 0, this.drawTexAlign = !1);
            var d = this._mixRGBandAlpha(4294967295, this._shader2D.ALPHA * h);
            if (l) return this._charSubmitCache.add(this, t, i, f, o, d), !0;
            this._drawCount++;
            var A = i >= 0 && 2 === u.submitType && u.other === i;
            if (A && (A = A && this.isSameClipInfo(this._curSubmit)), this._lastTex = t, this._mesh.vertNum + 4 > 65535 && (this._mesh = Yt.getAMesh(), 
            this.meshlist.push(this._mesh), A = !1), !this.clipedOff(this._transedPoints)) {
                if (this._mesh.addQuad(f, o, d, !0), !A) {
                    var E = te.create(this, this._mesh, Y.create(1, 0));
                    this._submits[this._submits._length++] = this._curSubmit = E, E.shaderValue.textureHost = t, 
                    E._key.other = i, this._copyClipInfo(E, this._globalClipMatrix);
                }
                return this._curSubmit._numEle += 6, this._mesh.indexNum += 6, this._mesh.vertNum += 4, 
                !0;
            }
            return !1;
        }, o.transform4Points = function(t, e, i) {
            var r = e.tx, _ = e.ty;
            e._bTransform ? (i[0] = t[0] * e.a + t[1] * e.c + r, i[1] = t[0] * e.b + t[1] * e.d + _, 
            i[2] = t[2] * e.a + t[3] * e.c + r, i[3] = t[2] * e.b + t[3] * e.d + _, i[4] = t[4] * e.a + t[5] * e.c + r, 
            i[5] = t[4] * e.b + t[5] * e.d + _, i[6] = t[6] * e.a + t[7] * e.c + r, i[7] = t[6] * e.b + t[7] * e.d + _) : (i[0] = t[0] + r, 
            i[1] = t[1] + _, i[2] = t[2] + r, i[3] = t[3] + _, i[4] = t[4] + r, i[5] = t[5] + _, 
            i[6] = t[6] + r, i[7] = t[7] + _);
        }, o.clipedOff = function(t) {
            return this._clipRect.width <= 0 || this._clipRect.height <= 0;
        }, o.transformQuad = function(t, e, i, r, _, a, n) {
            var s = 0;
            0 != _ && (s = Math.tan(_ * Math.PI / 180) * r);
            var o = t + i, h = e + r;
            this._temp4Points[0] = t + s, this._temp4Points[1] = e, this._temp4Points[2] = o + s, 
            this._temp4Points[3] = e, this._temp4Points[4] = o, this._temp4Points[5] = h, this._temp4Points[6] = t, 
            this._temp4Points[7] = h, this.transform4Points(this._temp4Points, a, n);
        }, o.pushRT = function() {
            this.addRenderObject(Vt.create(null, le.pushRT, this));
        }, o.popRT = function() {
            this.addRenderObject(Vt.create(null, le.popRT, this)), this.breakNextMerge();
        }, o.useRT = function(t) {
            this.addRenderObject(Vt.create([ t ], function(t) {
                if (!t) throw "error useRT";
                t.start(), t.clear(0, 0, 0, 0);
            }, this)), this.breakNextMerge();
        }, o.RTRestore = function(t) {
            this.addRenderObject(Vt.create([ t ], function(t) {
                t.restore();
            }, this)), this.breakNextMerge();
        }, o.breakNextMerge = function() {
            this._curSubmit = At.RENDERBASE;
        }, o._repaintSprite = function() {
            this.sprite && this.sprite.repaint();
        }, o.drawTextureWithTransform = function(t, i, r, _, a, n, s, o, h, l, u) {
            var c = null;
            l && (c = this.globalCompositeOperation, this.globalCompositeOperation = l);
            var f = this._colorFiler;
            if (u && this.setColorFilter(u), !n) return this._drawTextureM(t, i + s, r + o, _, a, null, h, null), 
            l && (this.globalCompositeOperation = c), void (u && this.setColorFilter(f));
            var d = this._curMat;
            e._tmpMatrix.a = n.a, e._tmpMatrix.b = n.b, e._tmpMatrix.c = n.c, e._tmpMatrix.d = n.d, 
            e._tmpMatrix.tx = n.tx + s, e._tmpMatrix.ty = n.ty + o, e._tmpMatrix._bTransform = n._bTransform, 
            n && d._bTransform ? (v.mul(e._tmpMatrix, d, e._tmpMatrix), (n = e._tmpMatrix)._bTransform = !0) : n = e._tmpMatrix, 
            this._drawTextureM(t, i, r, _, a, n, h, null), l && (this.globalCompositeOperation = c), 
            u && this.setColorFilter(f);
        }, o._flushToTarget = function(t, e) {
            bt.worldScissorTest = !1, mt.mainContext.disable(3089);
            var i = bt.worldAlpha, r = bt.worldMatrix4, _ = bt.worldMatrix;
            bt.worldShaderDefines;
            bt.worldMatrix = v.EMPTY, bt.restoreTempArray(), bt.worldMatrix4 = bt.TEMPMAT4_ARRAY, 
            bt.worldAlpha = 1, ee.activeShader = null, e.start(), t._submits._length > 0 && e.clear(0, 0, 0, 0), 
            t._curSubmit = At.RENDERBASE, t.flush(), t.clear(), e.restore(), t._curSubmit = At.RENDERBASE, 
            ee.activeShader = null, bt.worldAlpha = i, bt.worldMatrix4 = r, bt.worldMatrix = _;
        }, o.drawCanvas = function(t, e, i, r, _) {
            var a, n = t.context;
            if (n._targets) n._submits._length > 0 && (a = Vt.create([ n, n._targets ], this._flushToTarget, this), 
            this._submits[this._submits._length++] = a), this._drawRenderTexture(n._targets, e, i, r, _, null, 1, le.flipyuv), 
            this._curSubmit = At.RENDERBASE; else {
                var s = t;
                s.touches && s.touches.forEach(function(t) {
                    t.touch();
                }), a = Jt.create(t, this._shader2D.ALPHA, this._shader2D.filters), this._submits[this._submits._length++] = a, 
                a._key.clear();
                var o = a._matrix;
                this._curMat.copyTo(o);
                var h = o.tx, l = o.ty;
                o.tx = o.ty = 0, o.transformPoint(P.TEMP.setTo(e, i)), o.translate(P.TEMP.x + h, P.TEMP.y + l), 
                v.mul(s.invMat, o, o), this._curSubmit = At.RENDERBASE;
            }
        }, o.drawTarget = function(t, e, i, r, _, a, n, s, o) {
            void 0 === o && (o = -1), this._drawCount++;
            this.mixRGBandAlpha(this._drawTextureUseColor ? this.fillStyle ? this.fillStyle.toInt() : 0 : 4294967295);
            if (this._mesh.vertNum + 4 > 65535 && (this._mesh = Yt.getAMesh(), this.meshlist.push(this._mesh)), 
            this.transformQuad(e, i, r, _, 0, a || this._curMat, this._transedPoints), !this.clipedOff(this._transedPoints)) {
                this._mesh.addQuad(this._transedPoints, s || W.DEF_UV, 4294967295, !0);
                var h = this._curSubmit = ft.create(this, this._mesh, n, t);
                return h.blendType = -1 == o ? this._nBlendType : o, this._copyClipInfo(h, this._globalClipMatrix), 
                h._numEle = 6, this._mesh.indexNum += 6, this._mesh.vertNum += 4, this._maxNumEle = Math.max(this._maxNumEle, h._numEle), 
                this._submits[this._submits._length++] = h, this._curSubmit = At.RENDERBASE, !0;
            }
            return this._curSubmit = At.RENDERBASE, !1;
        }, o.drawTriangles = function(t, r, _, a, n, s, o, h, l, u) {
            if (t._getSource()) {
                this._drawCount++;
                var c = null, f = !1;
                l && (c = this._colorFiler, this._colorFiler = l, this._curSubmit = At.RENDERBASE, 
                f = c != l);
                var d = t.bitmap, A = this._curSubmit._key, E = 4 === A.submitType && A.other === d.id && A.blendShader == this._nBlendType, m = this._mixRGBandAlpha(4294967295, this._shader2D.ALPHA * h), R = a.length / 2, p = s.length;
                if (this._triangleMesh.vertNum + R > 65535 && (this._triangleMesh = Zt.getAMesh(), 
                this.meshlist.push(this._triangleMesh), E = !1), !E) {
                    var T = this._curSubmit = te.create(this, this._triangleMesh, Y.create(1, 0));
                    T.shaderValue.textureHost = t, T._renderType = 10016, T._key.submitType = 4, T._key.other = d.id, 
                    this._copyClipInfo(T, this._globalClipMatrix), this._submits[this._submits._length++] = T;
                }
                o ? (e._tmpMatrix.a = o.a, e._tmpMatrix.b = o.b, e._tmpMatrix.c = o.c, e._tmpMatrix.d = o.d, 
                e._tmpMatrix.tx = o.tx + r, e._tmpMatrix.ty = o.ty + _) : (e._tmpMatrix.a = 1, e._tmpMatrix.b = 0, 
                e._tmpMatrix.c = 0, e._tmpMatrix.d = 1, e._tmpMatrix.tx = r, e._tmpMatrix.ty = _), 
                this._drawTriUseAbsMatrix || v.mul(e._tmpMatrix, this._curMat, e._tmpMatrix), this._triangleMesh.addData(a, n, s, e._tmpMatrix, m, this), 
                this._curSubmit._numEle += p, this._maxNumEle = Math.max(this._maxNumEle, this._curSubmit._numEle), 
                f && (this._colorFiler = c, this._curSubmit = At.RENDERBASE);
            } else this.sprite && i.systemTimer.callLater(this, this._repaintSprite);
        }, o.transform = function(t, e, i, r, _, a) {
            Dt.save(this), v.mul(v.TEMP.setTo(t, e, i, r, _, a), this._curMat, this._curMat), 
            this._curMat._checkTransform();
        }, o._transformByMatrix = function(t, e, i) {
            t.setTranslate(e, i), v.mul(t, this._curMat, this._curMat), t.setTranslate(0, 0), 
            this._curMat._bTransform = !0;
        }, o.setTransformByMatrix = function(t) {
            t.copyTo(this._curMat);
        }, o.rotate = function(t) {
            Dt.save(this), this._curMat.rotateEx(t);
        }, o.scale = function(t, e) {
            Dt.save(this), this._curMat.scaleEx(t, e);
        }, o.clipRect = function(t, i, r, _) {
            Z.save(this), this._clipRect == e.MAXCLIPRECT ? this._clipRect = new g(t, i, r, _) : (this._clipRect.width = r, 
            this._clipRect.height = _, this._clipRect.x = t, this._clipRect.y = i), e._clipID_Gen++, 
            e._clipID_Gen %= 1e4, this._clipInfoID = e._clipID_Gen;
            var a = this._globalClipMatrix, n = a.tx, s = a.ty, o = n + a.a, h = s + a.d;
            if (this._clipRect.width >= 99999999 ? (a.a = a.d = 99999999, a.b = a.c = a.tx = a.ty = 0) : this._curMat._bTransform ? (a.tx = this._clipRect.x * this._curMat.a + this._clipRect.y * this._curMat.c + this._curMat.tx, 
            a.ty = this._clipRect.x * this._curMat.b + this._clipRect.y * this._curMat.d + this._curMat.ty, 
            a.a = this._clipRect.width * this._curMat.a, a.b = this._clipRect.width * this._curMat.b, 
            a.c = this._clipRect.height * this._curMat.c, a.d = this._clipRect.height * this._curMat.d) : (a.tx = this._clipRect.x + this._curMat.tx, 
            a.ty = this._clipRect.y + this._curMat.ty, a.a = this._clipRect.width, a.b = a.c = 0, 
            a.d = this._clipRect.height), a.a > 0 && a.d > 0) {
                var l = a.tx + a.a, u = a.ty + a.d;
                l <= n || u <= s || a.tx >= o || a.ty >= h ? (a.a = -.1, a.d = -.1) : (a.tx < n && (a.a -= n - a.tx, 
                a.tx = n), l > o && (a.a -= l - o), a.ty < s && (a.d -= s - a.ty, a.ty = s), u > h && (a.d -= u - h), 
                a.a <= 0 && (a.a = -.1), a.d <= 0 && (a.d = -.1));
            }
        }, o.drawMesh = function(t, e, i, r, _, a, n, s, o) {
            void 0 === o && (o = 0);
        }, o.addRenderObject = function(t) {
            this._submits[this._submits._length++] = t;
        }, o.submitElement = function(t, e) {
            M._context;
            var i = this._submits, r = i._length;
            e < 0 && (e = i._length);
            for (var _ = At.RENDERBASE; t < e; ) this._renderNextSubmitIndex = t + 1, i[t] !== At.RENDERBASE ? (At.preRender = _, 
            t += (_ = i[t]).renderSubmit()) : t++;
            return r;
        }, o.flush = function() {
            var t = this.submitElement(0, this._submits._length);
            this._path && this._path.reset(), H.instance && H.getInstance().reset(), this._curSubmit = At.RENDERBASE;
            for (var e = 0, r = this.meshlist.length; e < r; e++) {
                var _ = this.meshlist[e];
                _.canReuse ? _.releaseMesh() : _.destroy();
            }
            if (this.meshlist.length = 0, this._mesh = Yt.getAMesh(), this._pathMesh = Ht.getAMesh(), 
            this._triangleMesh = Zt.getAMesh(), this.meshlist.push(this._mesh, this._pathMesh, this._triangleMesh), 
            this._flushCnt++, this._flushCnt % 60 == 0 && M._context == this) {
                var a = i.textRender;
                a && a.GC(!1);
            }
            return t;
        }, o.setPathId = function(t) {
            if (this.mId = t, -1 != this.mId) {
                this.mHaveKey = !1;
                var e = k.getInstance();
                e.shapeDic[this.mId] && (this.mHaveKey = !0), this.mHaveLineKey = !1, e.shapeLineDic[this.mId] && (this.mHaveLineKey = !0);
            }
        }, o.beginPath = function(t) {
            void 0 === t && (t = !1);
            this._getPath().beginPath(t);
        }, o.closePath = function() {
            this._path.closePath();
        }, o.addPath = function(t, e, i, r, _) {
            for (var a = 0, n = 0, s = t.length / 2; n < s; n++) {
                var o = t[a] + r, h = t[a + 1] + _;
                t[a] = o, t[a + 1] = h, a += 2;
            }
            this._getPath().push(t, i);
        }, o.fill = function() {
            var t = this._curMat, e = this._getPath(), i = this._curSubmit, r = 3 === i._key.submitType && i._key.blendShader === this._nBlendType;
            r && (r = r && this.isSameClipInfo(i)), r || (this._curSubmit = this.addVGSubmit(this._pathMesh));
            for (var _, a = this.mixRGBandAlpha(this.fillStyle.toInt()), n = 0, s = 0, o = e.paths.length; s < o; s++) {
                var h = e.paths[s], l = h.path.length / 2;
                if (!(l < 3 || 3 == l && !h.convex)) {
                    var u = h.path.concat(), c = 0, f = 0, d = 0, A = NaN, E = NaN;
                    if (t._bTransform) for (c = 0; c < l; c++) d = (f = c << 1) + 1, A = u[f], E = u[d], 
                    u[f] = t.a * A + t.c * E + t.tx, u[d] = t.b * A + t.d * E + t.ty; else for (c = 0; c < l; c++) d = (f = c << 1) + 1, 
                    A = u[f], E = u[d], u[f] = A + t.tx, u[d] = E + t.ty;
                    this._pathMesh.vertNum + l > 65535 && (this._curSubmit._numEle += n, n = 0, this._pathMesh = Ht.getAMesh(), 
                    this._curSubmit = this.addVGSubmit(this._pathMesh));
                    var m = this._pathMesh.vertNum;
                    if (h.convex) {
                        var R = l - 2;
                        _ = new Array(3 * R);
                        for (var p = 0, T = 0; T < R; T++) _[p++] = m, _[p++] = T + 1 + m, _[p++] = T + 2 + m;
                    } else if (_ = dt.earcut(u, null, 2), m > 0) for (var v = 0; v < _.length; v++) _[v] += m;
                    this._pathMesh.addVertAndIBToMesh(this, u, a, _), n += _.length;
                }
            }
            this._curSubmit._numEle += n;
        }, o.addVGSubmit = function(t) {
            var e = At.createShape(this, t, 0, Y.create(4, 0));
            return e._key.submitType = 3, this._submits[this._submits._length++] = e, this._copyClipInfo(e, this._globalClipMatrix), 
            e;
        }, o.stroke = function() {
            if (this.lineWidth > 0) {
                var t = this.mixRGBandAlpha(this.strokeStyle._color.numColor), e = this._getPath(), i = this._curSubmit, r = 3 === i._key.submitType && i._key.blendShader === this._nBlendType;
                r && (r = r && this.isSameClipInfo(i)), r || (this._curSubmit = this.addVGSubmit(this._pathMesh));
                for (var _ = 0, a = 0, n = e.paths.length; a < n; a++) {
                    var s = e.paths[a];
                    if (!(s.path.length <= 0)) {
                        var o = [], h = [], l = 2 * s.path.length;
                        if (!(l < 2)) {
                            this._pathMesh.vertNum + l > 65535 && (this._curSubmit._numEle += _, _ = 0, this._pathMesh = Ht.getAMesh(), 
                            this.meshlist.push(this._pathMesh), this._curSubmit = this.addVGSubmit(this._pathMesh)), 
                            yt.createLine2(s.path, o, this.lineWidth, this._pathMesh.vertNum, h, s.loop);
                            var u = h.length / 2, c = this._curMat, f = 0, d = 0, A = 0, E = NaN, m = NaN;
                            if (c._bTransform) for (f = 0; f < u; f++) A = (d = f << 1) + 1, E = h[d], m = h[A], 
                            h[d] = c.a * E + c.c * m + c.tx, h[A] = c.b * E + c.d * m + c.ty; else for (f = 0; f < u; f++) A = (d = f << 1) + 1, 
                            E = h[d], m = h[A], h[d] = E + c.tx, h[A] = m + c.ty;
                            this._pathMesh.addVertAndIBToMesh(this, h, t, o), _ += o.length;
                        }
                    }
                }
                this._curSubmit._numEle += _;
            }
        }, o.moveTo = function(t, e) {
            var i = this._getPath();
            i.newPath(), i._lastOriX = t, i._lastOriY = e, i.addPoint(t, e);
        }, o.lineTo = function(t, e) {
            var i = this._getPath();
            Math.abs(t - i._lastOriX) < .001 && Math.abs(e - i._lastOriY) < .001 || (i._lastOriX = t, 
            i._lastOriY = e, i.addPoint(t, e));
        }, o.arcTo = function(t, i, r, _, a) {
            var n = 0, s = 0, o = 0, h = this._path._lastOriX - t, l = this._path._lastOriY - i, u = Math.sqrt(h * h + l * l);
            if (!(u <= 1e-6)) {
                var c = h / u, f = l / u, d = r - t, A = _ - i, E = d * d + A * A, m = Math.sqrt(E);
                if (!(m <= 1e-6)) {
                    var R = d / m, p = A / m, T = c + R, v = f + p, D = Math.sqrt(T * T + v * v);
                    if (!(D <= 1e-6)) {
                        var P = T / D, C = v / D, g = Math.acos(P * c + C * f), M = Math.PI / 2 - g, y = (u = a / Math.tan(M)) * c + t, O = u * f + i, S = Math.sqrt(u * u + a * a), b = t + P * S, L = i + C * S, x = 0, B = 0, I = 0;
                        if (c * p - f * R >= 0) {
                            var N = (x = 2 * M) / e.SEGNUM;
                            B = Math.sin(N), I = Math.cos(N);
                        } else N = (x = 2 * -M) / e.SEGNUM, B = Math.sin(N), I = Math.cos(N);
                        var F = this._path._lastOriX, w = this._path._lastOriY, V = y, U = O;
                        (Math.abs(V - this._path._lastOriX) > .1 || Math.abs(U - this._path._lastOriY) > .1) && (s = V, 
                        o = U, F = V, w = U, this._path.addPoint(s, o));
                        var W = y - b, G = O - L;
                        for (n = 0; n < e.SEGNUM; n++) {
                            var X = W * I + G * B, k = -W * B + G * I;
                            s = X + b, o = k + L, (Math.abs(F - s) > .1 || Math.abs(w - o) > .1) && (this._path.addPoint(s, o), 
                            F = s, w = o), W = X, G = k;
                        }
                    }
                }
            }
        }, o.arc = function(t, e, i, r, _, a, n) {
            void 0 === a && (a = !1), void 0 === n && (n = !0);
            var s = 0, o = 0, h = 0, l = 0, u = 0, c = 0, f = 0, d = 0, A = 0;
            if (o = _ - r, a) if (Math.abs(o) >= 2 * Math.PI) o = 2 * -Math.PI; else for (;o > 0; ) o -= 2 * Math.PI; else if (Math.abs(o) >= 2 * Math.PI) o = 2 * Math.PI; else for (;o < 0; ) o += 2 * Math.PI;
            var E = this.getMatScaleX(), m = this.getMatScaleY(), R = i * (E > m ? E : m), p = 2 * Math.PI * R;
            h = o / (A = 0 | Math.max(p / 10, 10)) / 2, l = Math.abs(4 / 3 * (1 - Math.cos(h)) / Math.sin(h)), 
            a && (l = -l);
            var T = this._getPath();
            for (d = 0; d <= A; d++) s = r + o * (d / A), u = Math.cos(s), f = e + Math.sin(s) * i, 
            (c = t + u * i) == this._path._lastOriX && f == this._path._lastOriY || T.addPoint(c, f);
            u = Math.cos(_), f = e + Math.sin(_) * i, (c = t + u * i) == this._path._lastOriX && f == this._path._lastOriY || T.addPoint(c, f);
        }, o.quadraticCurveTo = function(t, e, i, r) {
            for (var _ = n.I.getBezierPoints([ this._path._lastOriX, this._path._lastOriY, t, e, i, r ], 30, 2), a = 0, s = _.length / 2; a < s; a++) this.lineTo(_[2 * a], _[2 * a + 1]);
            this.lineTo(i, r);
        }, o.rect = function(t, e, i, r) {
            this._other = this._other.make(), this._other.path || (this._other.path = new pt()), 
            this._other.path.rect(t, e, i, r);
        }, o.mixRGBandAlpha = function(t) {
            return this._mixRGBandAlpha(t, this._shader2D.ALPHA);
        }, o._mixRGBandAlpha = function(t, e) {
            var i = (4278190080 & t) >>> 24;
            return 0 != i ? i *= e : i = 255 * e, 16777215 & t | i << 24;
        }, o.strokeRect = function(t, e, i, r, _) {
            if (this.lineWidth > 0) {
                var a = this.mixRGBandAlpha(this.strokeStyle._color.numColor), n = this.lineWidth / 2;
                this._fillRect(t - n, e - n, i + this.lineWidth, this.lineWidth, a), this._fillRect(t - n, e - n + r, i + this.lineWidth, this.lineWidth, a), 
                this._fillRect(t - n, e + n, this.lineWidth, r - this.lineWidth, a), this._fillRect(t - n + i, e + n, this.lineWidth, r - this.lineWidth, a);
            }
        }, o.clip = function() {}, o.drawParticle = function(t, e, i) {
            i.x = t, i.y = e, this._submits[this._submits._length++] = i;
        }, o._getPath = function() {
            return this._path || (this._path = new pt());
        }, a(0, o, "globalCompositeOperation", function() {
            return Rt.NAMES[this._nBlendType];
        }, function(t) {
            var e = Rt.TOINT[t];
            null == e || this._nBlendType === e || (z.save(this, 65536, this, !0), this._curSubmit = At.RENDERBASE, 
            this._nBlendType = e);
        }), a(0, o, "strokeStyle", function() {
            return this._shader2D.strokeStyle;
        }, function(t) {
            this._shader2D.strokeStyle.equal(t) || (z.save(this, 512, this._shader2D, !1), this._shader2D.strokeStyle = q.create(t), 
            this._submitKey.other = -this._shader2D.strokeStyle.toInt());
        }), a(0, o, "globalAlpha", function() {
            return this._shader2D.ALPHA;
        }, function(t) {
            (t = Math.floor(1e3 * t) / 1e3) != this._shader2D.ALPHA && (z.save(this, 1, this._shader2D, !1), 
            this._shader2D.ALPHA = t);
        }), a(0, o, "asBitmap", null, function(t) {
            if (t) {
                if (this._targets || (this._targets = new le(this._width, this._height, 1, -1)), 
                !this._width || !this._height) throw Error("asBitmap no size!");
            } else this._targets && this._targets.destroy(), this._targets = null;
        }), a(0, o, "fillStyle", function() {
            return this._shader2D.fillStyle;
        }, function(t) {
            this._shader2D.fillStyle.equal(t) || (z.save(this, 2, this._shader2D, !1), this._shader2D.fillStyle = q.create(t), 
            this._submitKey.other = -this._shader2D.fillStyle.toInt());
        }), a(0, o, "textAlign", function() {
            return this._other.textAlign;
        }, function(t) {
            this._other.textAlign === t || (this._other = this._other.make(), z.save(this, 32768, this._other, !1), 
            this._other.textAlign = t);
        }), a(0, o, "lineWidth", function() {
            return this._other.lineWidth;
        }, function(t) {
            this._other.lineWidth === t || (this._other = this._other.make(), z.save(this, 256, this._other, !1), 
            this._other.lineWidth = t);
        }), a(0, o, "textBaseline", function() {
            return this._other.textBaseline;
        }, function(t) {
            this._other.textBaseline === t || (this._other = this._other.make(), z.save(this, 16384, this._other, !1), 
            this._other.textBaseline = t);
        }), a(0, o, "font", null, function(t) {
            this._other = this._other.make(), z.save(this, 8, this._other, !1);
        }), a(0, o, "canvas", function() {
            return this._canvas;
        }), e.__init__ = function() {
            s.DEFAULT = new s();
        }, e.set2DRenderConfig = function() {
            var t = j.instance;
            ot.setBlend(t, !0), ot.setBlendFunc(t, 1, 771), ot.setDepthTest(t, !1), ot.setCullFace(t, !1), 
            ot.setDepthMask(t, !0), ot.setFrontFace(t, 2305), t.viewport(0, 0, bt.width, bt.height);
        }, e._tempPoint = new P(), e._SUBMITVBSIZE = 32e3, e._MAXSIZE = 99999999, e._MAXVERTNUM = 65535, 
        e.MAXCLIPRECT = new g(0, 0, 99999999, 99999999), e._COUNT = 0, e._tmpMatrix = new v(), 
        e.SEGNUM = 32, e._contextcount = 0, e._clipID_Gen = 0, e.defTexture = null, r(e, [ "_drawStyleTemp", function() {
            return this._drawStyleTemp = new q(null);
        }, "_keyMap", function() {
            return this._keyMap = new w();
        }, "_drawTexToDrawTri_Vert", function() {
            return this._drawTexToDrawTri_Vert = new Float32Array(8);
        }, "_drawTexToDrawTri_Index", function() {
            return this._drawTexToDrawTri_Index = new Uint16Array([ 0, 1, 2, 0, 2, 3 ]);
        }, "_textRender", function() {
            return this._textRender = J.useOldCharBook ? new wt() : new J();
        } ]), e.__init$ = function() {
            s = function() {
                function t() {
                    this.lineWidth = 1, this.path = null, this.textAlign = null, this.textBaseline = null;
                }
                _(t, "");
                var e = t.prototype;
                return e.clear = function() {
                    this.lineWidth = 1, this.path && this.path.clear(), this.textAlign = this.textBaseline = null;
                }, e.make = function() {
                    return this === t.DEFAULT ? new t() : this;
                }, t.DEFAULT = null, t;
            }();
        }, e;
    }(), Xt = function(t) {
        function e(t) {
            this.texcoord = null, this.position = null, this.offsetX = 300, this.offsetY = 0, 
            e.__super.call(this, 512, 0);
            var i = 8 * Et.BYTES_PE;
            this.position = [ 2, 5126, !1, i, 0 ], this.texcoord = [ 2, 5126, !1, i, 2 * Et.BYTES_PE ], 
            this.color = [ 4, 5126, !1, i, 4 * Et.BYTES_PE ];
        }
        return _(e, "laya.webgl.shader.d2.skinAnishader.SkinSV", Y), e;
    }(), kt = function(t) {
        function e(t) {
            this.u_colorMatrix = null, this.strength = 0, this.blurInfo = null, this.colorMat = null, 
            this.colorAlpha = null, void 0 === t && (t = 0), e.__super.call(this, 1, t), this._attribLocation = [ "posuv", 0, "attribColor", 1, "attribFlags", 2 ];
        }
        _(e, "laya.webgl.shader.d2.value.TextureSV", Y);
        return e.prototype.clear = function() {
            this.texture = null, this.shader = null, this.defines._value = this.subID + (mt.shaderHighPrecision ? 1024 : 0);
        }, e;
    }(), zt = function(t) {
        function e(t) {
            e.__super.call(this, 4, 0), this._attribLocation = [ "position", 0, "attribColor", 1 ];
        }
        return _(e, "laya.webgl.shader.d2.value.PrimitiveSV", Y), e;
    }(), Yt = function(t) {
        function e() {
            e.__super.call(this, laya.webgl.utils.MeshQuadTexture.const_stride, 4, 4), this.canReuse = !0, 
            this.setAttributes(laya.webgl.utils.MeshQuadTexture._fixattriInfo), laya.webgl.utils.MeshQuadTexture._fixib ? (this._ib = laya.webgl.utils.MeshQuadTexture._fixib, 
            this._quadNum = e._maxIB) : (this.createQuadIB(e._maxIB), laya.webgl.utils.MeshQuadTexture._fixib = this._ib);
        }
        _(e, "laya.webgl.utils.MeshQuadTexture", K);
        var i = e.prototype;
        return i.releaseMesh = function() {
            this._vb.setByteLength(0), this.vertNum = 0, this.indexNum = 0, laya.webgl.utils.MeshQuadTexture._POOL.push(this);
        }, i.destroy = function() {
            this._vb.destroy(), this._vb.deleteBuffer();
        }, i.addQuad = function(t, e, i, r) {
            var _ = this._vb, a = _._byteLength >> 2;
            _.setByteLength(a + laya.webgl.utils.MeshQuadTexture.const_stride << 2);
            var n = _._floatArray32 || _.getFloat32Array(), s = _._uint32Array, o = a, h = r ? 255 : 0;
            n[o++] = t[0], n[o++] = t[1], n[o++] = e[0], n[o++] = e[1], s[o++] = i, s[o++] = h, 
            n[o++] = t[2], n[o++] = t[3], n[o++] = e[2], n[o++] = e[3], s[o++] = i, s[o++] = h, 
            n[o++] = t[4], n[o++] = t[5], n[o++] = e[4], n[o++] = e[5], s[o++] = i, s[o++] = h, 
            n[o++] = t[6], n[o++] = t[7], n[o++] = e[6], n[o++] = e[7], s[o++] = i, s[o++] = h, 
            _._upload = !0;
        }, e.getAMesh = function() {
            return laya.webgl.utils.MeshQuadTexture._POOL.length ? laya.webgl.utils.MeshQuadTexture._POOL.pop() : new e();
        }, e.const_stride = 24, e._fixib = null, e._maxIB = 16384, e._POOL = [], r(e, [ "_fixattriInfo", function() {
            return this._fixattriInfo = [ 5126, 4, 0, 5121, 4, 16, 5121, 4, 20 ];
        } ]), e;
    }(), Ht = function(t) {
        function e() {
            e.__super.call(this, laya.webgl.utils.MeshVG.const_stride, 4, 4), this.canReuse = !0, 
            this.setAttributes(laya.webgl.utils.MeshVG._fixattriInfo);
        }
        _(e, "laya.webgl.utils.MeshVG", K);
        var i = e.prototype;
        return i.addVertAndIBToMesh = function(t, i, r, _) {
            for (var a = this._vb.needSize(i.length / 2 * e.const_stride) >> 2, n = this._vb._floatArray32 || this._vb.getFloat32Array(), s = this._vb._uint32Array, o = 0, h = i.length / 2, l = 0; l < h; l++) n[a++] = i[o], 
            n[a++] = i[o + 1], o += 2, s[a++] = r;
            this._vb.setNeedUpload(), this._ib.append(new Uint16Array(_)), this._ib.setNeedUpload(), 
            this.vertNum += h, this.indexNum += _.length;
        }, i.releaseMesh = function() {
            this._vb.setByteLength(0), this._ib.setByteLength(0), this.vertNum = 0, this.indexNum = 0, 
            laya.webgl.utils.MeshVG._POOL.push(this);
        }, i.destroy = function() {
            this._ib.destroy(), this._vb.destroy(), this._ib.disposeResource(), this._vb.deleteBuffer();
        }, e.getAMesh = function() {
            return laya.webgl.utils.MeshVG._POOL.length ? laya.webgl.utils.MeshVG._POOL.pop() : new e();
        }, e.const_stride = 12, e._POOL = [], r(e, [ "_fixattriInfo", function() {
            return this._fixattriInfo = [ 5126, 2, 0, 5121, 4, 8 ];
        } ]), e;
    }(), Zt = function(t) {
        function e() {
            e.__super.call(this, laya.webgl.utils.MeshTexture.const_stride, 4, 4), this.canReuse = !0, 
            this.setAttributes(laya.webgl.utils.MeshTexture._fixattriInfo);
        }
        _(e, "laya.webgl.utils.MeshTexture", K);
        var i = e.prototype;
        return i.addData = function(t, i, r, _, a, n) {
            for (var s = t.length / 2, o = this._vb.needSize(s * e.const_stride) >> 2, h = this._vb._floatArray32 || this._vb.getFloat32Array(), l = this._vb._uint32Array, u = 0, c = 0; c < s; c++) {
                var f = t[u], d = t[u + 1], A = f * _.a + d * _.c + _.tx, E = f * _.b + d * _.d + _.ty;
                h[o++] = A, h[o++] = E, h[o++] = i[u], h[o++] = i[u + 1], u += 2, l[o++] = a, l[o++] = 255;
            }
            this._vb.setNeedUpload();
            var m = this.vertNum;
            if (m > 0) {
                var R = r.length;
                R > e.tmpIdx.length && (e.tmpIdx = new Uint16Array(R));
                for (var p = 0; p < R; p++) e.tmpIdx[p] = r[p] + m;
                this._ib.appendU16Array(e.tmpIdx, r.length);
            } else this._ib.append(r);
            this._ib.setNeedUpload(), this.vertNum += s, this.indexNum += r.length;
        }, i.releaseMesh = function() {
            this._vb.setByteLength(0), this._ib.setByteLength(0), this.vertNum = 0, this.indexNum = 0, 
            laya.webgl.utils.MeshTexture._POOL.push(this);
        }, i.destroy = function() {
            this._ib.destroy(), this._vb.destroy(), this._ib.disposeResource(), this._vb.deleteBuffer();
        }, e.getAMesh = function() {
            return laya.webgl.utils.MeshTexture._POOL.length ? laya.webgl.utils.MeshTexture._POOL.pop() : new e();
        }, e.const_stride = 24, e._POOL = [], r(e, [ "_fixattriInfo", function() {
            return this._fixattriInfo = [ 5126, 4, 0, 5121, 4, 16, 5121, 4, 20 ];
        }, "tmpIdx", function() {
            return this.tmpIdx = new Uint16Array(4);
        } ]), e;
    }(), jt = function(t) {
        function e() {
            e.__super.call(this, e.__name2int, e.__int2name, e.__int2nameMap);
        }
        return _(e, "laya.webgl.shader.d2.ShaderDefines2D", et), e.__init__ = function() {
            e.reg("TEXTURE2D", 1), e.reg("PRIMITIVE", 4), e.reg("GLOW_FILTER", 8), e.reg("BLUR_FILTER", 16), 
            e.reg("COLOR_FILTER", 32), e.reg("COLOR_ADD", 64), e.reg("WORLDMAT", 128), e.reg("FILLTEXTURE", 256), 
            e.reg("FSHIGHPRECISION", 1024), e.reg("MVP3D", 2048);
        }, e.reg = function(t, i) {
            et._reg(t, i, e.__name2int, e.__int2name);
        }, e.toText = function(t, e, i) {
            return et._toText(t, e, i);
        }, e.toInt = function(t) {
            return et._toInt(t, e.__name2int);
        }, e.TEXTURE2D = 1, e.PRIMITIVE = 4, e.FILTERGLOW = 8, e.FILTERBLUR = 16, e.FILTERCOLOR = 32, 
        e.COLORADD = 64, e.WORLDMAT = 128, e.FILLTEXTURE = 256, e.SKINMESH = 512, e.SHADERDEFINE_FSHIGHPRECISION = 1024, 
        e.MVP3D = 2048, e.NOOPTMASK = 312, e.__name2int = {}, e.__int2name = [], e.__int2nameMap = [], 
        e;
    }(), Qt = function(i) {
        function r(i, _, a, n, s) {
            this.lastScaleX = 1, this.lastScaleY = 1, this.needResetScale = !1, this.maxTexW = 0, 
            this.maxTexH = 0, this.scaleFontSize = !0, this.showDbgInfo = !1, this.supportImageData = !0, 
            r.__super.call(this), void 0 === a && (a = !0), void 0 === n && (n = !0), void 0 === s && (s = !1), 
            this.maxTexW = i, this.maxTexH = _, this.scaleFontSize = a, this.supportImageData = n, 
            this.showDbgInfo = s, r.canvas || ((r.canvas = t.document.createElement("canvas")).width = 1024, 
            r.canvas.height = 512, r.canvas.style.left = "-10000px", r.canvas.style.position = "absolute", 
            e.body.appendChild(r.canvas), r.ctx = r.canvas.getContext("2d"));
        }
        _(r, "laya.webgl.resource.CharRender_Canvas", rt);
        var n = r.prototype;
        return n.getWidth = function(t, e) {
            return r.ctx ? (r.ctx._lastFont != t && (r.ctx.font = t, r.ctx._lastFont = t), r.ctx.measureText(e).width) : 0;
        }, n.scale = function(t, e) {
            if (!this.supportImageData) return this.lastScaleX = t, void (this.lastScaleY = e);
            this.lastScaleX == t && this.lastScaleY == e || (r.ctx.setTransform(t, 0, 0, e, 0, 0), 
            this.lastScaleX = t, this.lastScaleY = e);
        }, n.getCharBmp = function(t, e, i, _, a, n, s, o, h, l, u) {
            if (!this.supportImageData) return this.getCharCanvas(t, e, i, _, a, n, s, o, h, l);
            r.ctx.font != e && (r.ctx.font = e, r.ctx._lastFont = e), n.width = r.ctx.measureText(t).width;
            var c = n.width * this.lastScaleX, f = n.height * this.lastScaleY;
            c += (s + h) * this.lastScaleX, f += (o + l) * this.lastScaleY, c = Math.ceil(c), 
            f = Math.ceil(f);
            var d = (c = Math.min(c, laya.webgl.resource.CharRender_Canvas.canvas.width)) + 2 * i + 1, A = (f = Math.min(f, laya.webgl.resource.CharRender_Canvas.canvas.height)) + 2 * i + 1;
            u && (d = Math.max(d, u[0] + u[2] + 1), A = Math.max(A, u[1] + u[3] + 1)), r.ctx.clearRect(0, 0, d, A), 
            r.ctx.save(), r.ctx.textBaseline = "top", i > 0 && (r.ctx.strokeStyle = a, r.ctx.lineWidth = i, 
            r.ctx.strokeText(t, s, o)), r.ctx.fillStyle = _, r.ctx.fillText(t, s, o), this.showDbgInfo && (r.ctx.strokeStyle = "#ff0000", 
            r.ctx.strokeRect(0, 0, c, f), r.ctx.strokeStyle = "#00ff00", r.ctx.strokeRect(s, o, n.width, n.height)), 
            u && -1 == u[2] && (u[2] = Math.ceil((n.width + i) * this.lastScaleX));
            var E = u ? r.ctx.getImageData(u[0], u[1], u[2], u[3]) : r.ctx.getImageData(0, 0, c, f);
            return r.ctx.restore(), n.bmpWidth = E.width, n.bmpHeight = E.height, E;
        }, n.getCharCanvas = function(t, e, i, _, a, n, s, o, h, l) {
            r.ctx.font != e && (r.ctx.font = e, r.ctx._lastFont = e), n.width = r.ctx.measureText(t).width;
            var u = n.width * this.lastScaleX, c = n.height * this.lastScaleY;
            return u += (s + h) * this.lastScaleX, c += (o + l) * this.lastScaleY + 1, u = Math.min(u, this.maxTexW), 
            c = Math.min(c, this.maxTexH), r.canvas.width = Math.min(u + 1, this.maxTexW), r.canvas.height = Math.min(c + 1, this.maxTexH), 
            r.ctx.font = e, r.ctx.clearRect(0, 0, u + 1 + i, c + 1 + i), r.ctx.setTransform(1, 0, 0, 1, 0, 0), 
            r.ctx.save(), this.scaleFontSize && r.ctx.scale(this.lastScaleX, this.lastScaleY), 
            r.ctx.translate(s, o), r.ctx.textAlign = "left", r.ctx.textBaseline = "top", i > 0 ? (r.ctx.strokeStyle = a, 
            r.ctx.fillStyle = _, r.ctx.lineWidth = i, r.ctx.fillAndStrokeText ? r.ctx.fillAndStrokeText(t, 0, 0) : (r.ctx.strokeText(t, 0, 0), 
            r.ctx.fillText(t, 0, 0))) : (r.ctx.fillStyle = _, r.ctx.fillText(t, 0, 0)), this.showDbgInfo && (r.ctx.strokeStyle = "#ff0000", 
            r.ctx.strokeRect(0, 0, u, c), r.ctx.strokeStyle = "#00ff00", r.ctx.strokeRect(0, 0, n.width, n.height)), 
            r.ctx.restore(), n.bmpWidth = r.canvas.width, n.bmpHeight = r.canvas.height, r.canvas;
        }, a(0, n, "canvasWidth", function() {
            return r.canvas.width;
        }, function(t) {
            r.canvas.width != t && (r.canvas.width = t, t > 2048 && console.warn("画文字设置的宽度太大，超过2048了"), 
            r.ctx.setTransform(1, 0, 0, 1, 0, 0), r.ctx.scale(this.lastScaleX, this.lastScaleY));
        }), r.canvas = null, r.ctx = null, r;
    }(), Kt = function(t) {
        function e() {
            e.__super.call(this);
        }
        return _(e, "laya.webgl.BufferState2D", nt), e;
    }(), qt = function(e) {
        function i() {
            this.lastFont = "", i.__super.call(this);
        }
        _(i, "laya.webgl.resource.CharRender_Native", rt);
        var r = i.prototype;
        return r.getWidth = function(e, i) {
            return t.conchTextCanvas ? (this.lastFont != e && (t.conchTextCanvas.font = e, this.lastFont = e), 
            t.conchTextCanvas.measureText(i).width) : 0;
        }, r.scale = function(t, e) {}, r.getCharBmp = function(e, i, r, _, a, n, s, o, h, u, c) {
            if (!t.conchTextCanvas) return null;
            this.lastFont != i && (t.conchTextCanvas.font = i, this.lastFont = i);
            n.width = t.conchTextCanvas.measureText(e).width, n.height;
            var f = l.create(a).numColor, d = l.create(_).numColor, A = t.conchTextCanvas.getTextBitmapData(e, d, r > 2 ? 2 : r, f);
            return n.bmpWidth = A.width, n.bmpHeight = A.height, A;
        }, i;
    }(), Jt = function(t) {
        function e() {
            this._matrix = new v(), this._matrix4 = Et.defaultMatrix4.concat(), e.__super.call(this, 1e4), 
            this.shaderValue = new Y(0, 0);
        }
        _(e, "laya.webgl.submit.SubmitCanvas", At);
        var i = e.prototype;
        return i.renderSubmit = function() {
            var t = bt.worldAlpha, e = bt.worldMatrix4, i = bt.worldMatrix, r = bt.worldFilters, _ = bt.worldShaderDefines, a = this.shaderValue, n = this._matrix, s = this._matrix4, o = v.TEMP;
            return v.mul(n, i, o), s[0] = o.a, s[1] = o.b, s[4] = o.c, s[5] = o.d, s[12] = o.tx, 
            s[13] = o.ty, bt.worldMatrix = o.clone(), bt.worldMatrix4 = s, bt.worldAlpha = bt.worldAlpha * a.alpha, 
            a.filters && a.filters.length && (bt.worldFilters = a.filters, bt.worldShaderDefines = a.defines), 
            this.canv.flushsubmit(), bt.worldAlpha = t, bt.worldMatrix4 = e, bt.worldMatrix.destroy(), 
            bt.worldMatrix = i, bt.worldFilters = r, bt.worldShaderDefines = _, 1;
        }, i.releaseRender = function() {
            if (--this._ref < 1) {
                var t = e.POOL;
                this._mesh = null, t[t._length++] = this;
            }
        }, i.clone = function(t, e, i) {
            return null;
        }, i.getRenderType = function() {
            return 10003;
        }, e.create = function(t, i, r) {
            var _ = e.POOL._length ? e.POOL[--e.POOL._length] : new e();
            _.canv = t, _._ref = 1, _._numEle = 0;
            var a = _.shaderValue;
            return a.alpha = i, a.defines.setValue(0), r && r.length && a.setFilters(r), _;
        }, e.POOL = (e.POOL = [], e.POOL._length = 0, e.POOL), e;
    }(), $t = (function(t) {
        function e(t) {
            e.__super.call(this, laya.webgl.utils.MeshParticle2D.const_stride, 4 * t * e.const_stride, 4), 
            this.canReuse = !0, this.setAttributes(laya.webgl.utils.MeshParticle2D._fixattriInfo), 
            this.createQuadIB(t), this._quadNum = t;
        }
        _(e, "laya.webgl.utils.MeshParticle2D", K);
        var i = e.prototype;
        i.setMaxParticleNum = function(t) {
            this._vb._resizeBuffer(4 * t * e.const_stride, !1), this.createQuadIB(t);
        }, i.releaseMesh = function() {
            this._vb.setByteLength(0), this.vertNum = 0, this.indexNum = 0, laya.webgl.utils.MeshParticle2D._POOL.push(this);
        }, i.destroy = function() {
            this._ib.destroy(), this._vb.destroy(), this._vb.deleteBuffer();
        }, e.getAMesh = function(t) {
            if (laya.webgl.utils.MeshParticle2D._POOL.length) {
                var i = laya.webgl.utils.MeshParticle2D._POOL.pop();
                return i.setMaxParticleNum(t), i;
            }
            return new e(t);
        }, e.const_stride = 116, e._POOL = [], r(e, [ "_fixattriInfo", function() {
            return this._fixattriInfo = [ 5126, 4, 0, 5126, 3, 16, 5126, 3, 28, 5126, 4, 40, 5126, 4, 56, 5126, 3, 72, 5126, 2, 84, 5126, 4, 92, 5126, 1, 108, 5126, 1, 112 ];
        } ]);
    }(), function(t) {
        function e() {
            this._maxsize = 0, this._upload = !0, this._uploadSize = 0, this._bufferSize = 0, 
            this._u8Array = null, e.__super.call(this);
        }
        _(e, "laya.webgl.utils.Buffer2D", Tt);
        var i = e.prototype;
        return i.setByteLength = function(t) {
            this._byteLength !== t && (t <= this._bufferSize || this._resizeBuffer(2 * t + 256, !0), 
            this._byteLength = t);
        }, i.needSize = function(t) {
            var e = this._byteLength;
            if (t) {
                var i = this._byteLength + t;
                i <= this._bufferSize || this._resizeBuffer(i << 1, !0), this._byteLength = i;
            }
            return e;
        }, i._bufferData = function() {
            this._maxsize = Math.max(this._maxsize, this._byteLength), F.loopCount % 30 == 0 && (this._buffer.byteLength > this._maxsize + 64 && (this._buffer = this._buffer.slice(0, this._maxsize + 64), 
            this._bufferSize = this._buffer.byteLength, this._checkArrayUse()), this._maxsize = this._byteLength), 
            this._uploadSize < this._buffer.byteLength && (this._uploadSize = this._buffer.byteLength, 
            j.instance.bufferData(this._bufferType, this._uploadSize, this._bufferUsage)), j.instance.bufferSubData(this._bufferType, 0, this._buffer);
        }, i._bufferSubData = function(t, e, i) {
            if (void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), this._maxsize = Math.max(this._maxsize, this._byteLength), 
            F.loopCount % 30 == 0 && (this._buffer.byteLength > this._maxsize + 64 && (this._buffer = this._buffer.slice(0, this._maxsize + 64), 
            this._bufferSize = this._buffer.byteLength, this._checkArrayUse()), this._maxsize = this._byteLength), 
            this._uploadSize < this._buffer.byteLength && (this._uploadSize = this._buffer.byteLength, 
            j.instance.bufferData(this._bufferType, this._uploadSize, this._bufferUsage)), e || i) {
                var r = this._buffer.slice(e, i);
                j.instance.bufferSubData(this._bufferType, t, r);
            } else j.instance.bufferSubData(this._bufferType, t, this._buffer);
        }, i._checkArrayUse = function() {}, i._bind_uploadForVAO = function() {
            return !!this._upload && (this._upload = !1, this._bindForVAO(), this._bufferData(), 
            !0);
        }, i._bind_upload = function() {
            return !!this._upload && (this._upload = !1, this.bind(), this._bufferData(), !0);
        }, i._bind_subUpload = function(t, e, i) {
            return void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), 
            !!this._upload && (this._upload = !1, this.bind(), this._bufferSubData(t, e, i), 
            !0);
        }, i._resizeBuffer = function(t, e) {
            if (t < this._buffer.byteLength) return this;
            if (e && this._buffer && this._buffer.byteLength > 0) {
                var i = new ArrayBuffer(t), r = this._u8Array && this._u8Array.buffer == this._buffer ? this._u8Array : new Uint8Array(this._buffer);
                this._u8Array = new Uint8Array(i), this._u8Array.set(r, 0), this._buffer = i;
            } else this._buffer = new ArrayBuffer(t);
            return this._checkArrayUse(), this._upload = !0, this._bufferSize = this._buffer.byteLength, 
            this;
        }, i.append = function(t) {
            this._upload = !0;
            var e, i = 0;
            i = t.byteLength, t instanceof Uint8Array ? (this._resizeBuffer(this._byteLength + i, !0), 
            e = new Uint8Array(this._buffer, this._byteLength)) : t instanceof Uint16Array ? (this._resizeBuffer(this._byteLength + i, !0), 
            e = new Uint16Array(this._buffer, this._byteLength)) : t instanceof Float32Array && (this._resizeBuffer(this._byteLength + i, !0), 
            e = new Float32Array(this._buffer, this._byteLength)), e.set(t, 0), this._byteLength += i, 
            this._checkArrayUse();
        }, i.appendU16Array = function(t, e) {
            this._resizeBuffer(this._byteLength + 2 * e, !0);
            for (var i = new Uint16Array(this._buffer, this._byteLength, e), r = 0; r < e; r++) i[r] = t[r];
            this._byteLength += 2 * e, this._checkArrayUse();
        }, i.appendEx = function(t, e) {
            this._upload = !0;
            var i = 0;
            i = t.byteLength, this._resizeBuffer(this._byteLength + i, !0), new e(this._buffer, this._byteLength).set(t, 0), 
            this._byteLength += i, this._checkArrayUse();
        }, i.appendEx2 = function(t, e, i, r) {
            void 0 === r && (r = 1), this._upload = !0;
            var _, a = 0;
            a = i * r, this._resizeBuffer(this._byteLength + a, !0), _ = new e(this._buffer, this._byteLength);
            var n = 0;
            for (n = 0; n < i; n++) _[n] = t[n];
            this._byteLength += a, this._checkArrayUse();
        }, i.getBuffer = function() {
            return this._buffer;
        }, i.setNeedUpload = function() {
            this._upload = !0;
        }, i.getNeedUpload = function() {
            return this._upload;
        }, i.upload = function() {
            var t = this._bind_upload();
            return j.instance.bindBuffer(this._bufferType, null), 34962 == this._bufferType && (Tt._bindedVertexBuffer = null), 
            34963 == this._bufferType && (Tt._bindedIndexBuffer = null), ee.activeShader = null, 
            t;
        }, i.subUpload = function(t, e, i) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0);
            var r = this._bind_subUpload();
            return j.instance.bindBuffer(this._bufferType, null), 34962 == this._bufferType && (Tt._bindedVertexBuffer = null), 
            34963 == this._bufferType && (Tt._bindedIndexBuffer = null), ee.activeShader = null, 
            r;
        }, i._disposeResource = function() {
            this._upload = !0, this._uploadSize = 0;
        }, i.clear = function() {
            this._byteLength = 0, this._upload = !0;
        }, a(0, i, "bufferLength", function() {
            return this._buffer.byteLength;
        }), a(0, i, "byteLength", null, function(t) {
            this.setByteLength(t);
        }), e.__int__ = function(t) {}, e.FLOAT32 = 4, e.SHORT = 2, e;
    }()), te = function(t) {
        function e(t) {
            void 0 === t && (t = 1e4), e.__super.call(this, t);
        }
        _(e, "laya.webgl.submit.SubmitTexture", At);
        var i = e.prototype;
        return i.clone = function(t, i, r) {
            var _ = e._poolSize ? e.POOL[--e._poolSize] : new e();
            return this._cloneInit(_, t, i, r), _;
        }, i.releaseRender = function() {
            --this._ref < 1 && (e.POOL[e._poolSize++] = this, this.shaderValue.release(), this._mesh = null, 
            this._parent && (this._parent.releaseRender(), this._parent = null));
        }, i.renderSubmit = function() {
            if (0 === this._numEle) return 1;
            var t = this.shaderValue.textureHost;
            if (t) {
                var e = t ? t._getSource() : null;
                if (!e) return 1;
            }
            var i = mt.mainContext;
            this._mesh.useMesh(i);
            var r = At.preRender, _ = At.preRender._key;
            return 0 === this._key.blendShader && this._key.submitType === _.submitType && this._key.blendShader === _.blendShader && ee.activeShader && At.preRender.clipInfoID == this.clipInfoID && r.shaderValue.defines._value === this.shaderValue.defines._value && 0 == (this.shaderValue.defines._value & jt.NOOPTMASK) ? ee.activeShader.uploadTexture2D(e) : (Rt.activeBlendFunction !== this._blendFn && (ot.setBlend(i, !0), 
            this._blendFn(i), Rt.activeBlendFunction = this._blendFn), this.shaderValue.texture = e, 
            this.shaderValue.upload()), i.drawElements(4, this._numEle, 5123, this._startIdx), 
            F.renderBatch++, F.trianglesFaces += this._numEle / 3, 1;
        }, e.create = function(t, i, r) {
            var _ = e._poolSize ? e.POOL[--e._poolSize] : new e(10016);
            _._mesh = i, _._key.clear(), _._key.submitType = 2, _._ref = 1, _._startIdx = i.indexNum * Et.BYTES_PIDX, 
            _._numEle = 0;
            var a = t._nBlendType;
            if (_._key.blendShader = a, _._blendFn = t._targets ? Rt.targetFns[a] : Rt.fns[a], 
            _.shaderValue = r, t._colorFiler) {
                var n = t._colorFiler;
                r.defines.add(n.type), r.colorMat = n._mat, r.colorAlpha = n._alpha;
            }
            return _;
        }, e._poolSize = 0, e.POOL = [], e;
    }(), ee = function(t) {
        function e() {
            e.__super.call(this);
        }
        return _(e, "laya.webgl.shader.BaseShader", O), e.activeShader = null, e.bindShader = null, 
        e;
    }(), ie = function(t) {
        function e(t, i, r) {
            this.texture = null, this._source = null, this._used = null, this._startFindPos = 0, 
            this._texW = 0, this._texH = 0, this._gridNum = 0, this.charMaps = [], this._score = 0, 
            this._scoreTick = 0, this.__destroyed = !1, this._discardTm = 0, this.genID = 0, 
            this.ArrCharRenderInfo = [], e.__super.call(this), this._texW = t, this._texH = i, 
            this._gridNum = r, this.texture = new It(this), this.setGridNum(r), this.lock = !0;
        }
        _(e, "laya.webgl.resource.CharPageTexture", O);
        var r = e.prototype;
        return r.findAGrid = function() {
            for (var t = this._startFindPos; t < this._gridNum; t++) if (0 == this._used[t]) {
                this._startFindPos = t + 1, this._used[t] = 1;
                var e = this.ArrCharRenderInfo[t] = new ht();
                return e.tex = this, e.pos = t, e;
            }
            return null;
        }, r.removeGrid = function(t) {
            this.ArrCharRenderInfo[t] && (this.ArrCharRenderInfo[t].deleted = !0), this._used[t] = 0, 
            t < this._startFindPos && (this._startFindPos = t);
        }, r.removeOld = function(t) {
            for (var e = 0, i = null, r = 0, _ = this.charMaps.length; r < _; r++) if (i = this.charMaps[r]) {
                var a = this;
                i.forEach(function(i, r, _) {
                    i && i.touchTick < t && (console.log("remove char " + r), a.removeGrid(i.pos), _.delete(r), 
                    e++);
                });
            }
            return e;
        }, r.reset = function() {
            this._discardTm = i.stage.getFrameTm(), this._startFindPos = 0, this.charMaps = [], 
            this._score = 0, this._scoreTick = 0, this.__destroyed = !0, this.ArrCharRenderInfo.forEach(function(t) {
                t.deleted = !0;
            });
        }, r.setGridNum = function(t) {
            if (this._gridNum = t, this._used && this._used.length == this._gridNum) if (this._used.fill) this._used.fill(0); else for (var e = 0; e < this._used.length; e++) this._used[e] = 0; else this._used = new Uint8Array(t);
        }, r.recreateResource = function() {
            if (!this._source) {
                var t = M.isConchApp ? j.instance.getDefaultCommandEncoder() : mt.mainContext, e = this._source = t.createTexture();
                this.texture.bitmap._glTexture = this._source, ot.bindTexture(t, 3553, e), t.texImage2D(3553, 0, 6408, this._texW, this._texH, 0, 6408, 5121, null), 
                t.texParameteri(3553, 10241, 9729), t.texParameteri(3553, 10240, 9729), t.texParameteri(3553, 10242, 33071), 
                t.texParameteri(3553, 10243, 33071);
            }
        }, r.addChar = function(t, e, i) {
            if (wt.isWan1Wan) this.addCharCanvas(t, e, i); else {
                !this._source && this.recreateResource();
                var r = M.isConchApp ? j.instance.getDefaultCommandEncoder() : mt.mainContext;
                ot.bindTexture(r, 3553, this._source), !M.isConchApp && r.pixelStorei(37441, !0);
                var _ = t.data;
                t.data instanceof Uint8ClampedArray && (_ = new Uint8Array(_.buffer)), r.texSubImage2D(3553, 0, e, i, t.width, t.height, 6408, 5121, _), 
                !M.isConchApp && r.pixelStorei(37441, !1);
            }
        }, r.addCharCanvas = function(t, e, i) {
            !this._source && this.recreateResource();
            var r = M.isConchApp ? j.instance.getDefaultCommandEncoder() : mt.mainContext;
            ot.bindTexture(r, 3553, this._source), !M.isConchApp && r.pixelStorei(37441, !0), 
            r.texSubImage2D(3553, 0, e, i, 6408, 5121, t), !M.isConchApp && r.pixelStorei(37441, !1);
        }, r.destroy = function() {
            console.log("destroy CharPageTexture"), this.__destroyed = !0;
            var t = M.isConchApp ? j.instance.getDefaultCommandEncoder() : mt.mainContext;
            this._source && t.deleteTexture(this._source), this._source = null, this.ArrCharRenderInfo.forEach(function(t) {
                t.deleted = !0;
            });
        }, r.touchRect = function(t, e) {
            this._scoreTick != e && (this._score = 0, this._scoreTick = e), this._score++;
        }, r.printDebugInfo = function(t) {
            void 0 === t && (t = !1), console.log("。得分:", this._score, ", 算分时间:", this._scoreTick, ",格子数:", this._gridNum);
            for (var e = Math.sqrt(this._gridNum), i = 0, r = this.charMaps.length; i < r; i++) {
                var _ = this.charMaps[i];
                if (_) {
                    var a = "";
                    t && console.log("   与基本大小差" + i + "的map信息:"), _.forEach(function(i, r, _) {
                        i && (t ? console.log("      key:", r, " 位置:", i.pos / e | 0, i.pos % e | 0, " 宽高:", i.bmpWidth, i.bmpHeight, " 是否删除:", i.deleted, " touch时间:", i.touchTick) : a += r);
                    }), t || console.log("data[", i, "]:", a);
                }
            }
        }, e;
    }(), re = function(t) {
        function e() {
            this._customRenderCmd = null, this._customCmds = null, this._x = 0, this._y = 0, 
            this._renderType = 0, this._bRepaintCanvas = !1, this._lastContext = null, e.__super.call(this);
        }
        _(e, "laya.layagl.ConchSpriteAdpt", D);
        var a = e.prototype;
        return a.createData = function() {
            this._conchData = new ParamData(308, !1), this._datai32 = this._conchData._int32Data, 
            this._dataf32 = this._conchData._float32Data, this._dataf32[4] = 1, this._datai32[3] = -1, 
            this._datai32[1] = 0, this._datai32[2] = 0, this._datai32[22] = 4294967295, this._datai32[5] = 1, 
            this._dataf32[8] = 0, this._dataf32[9] = 0, this._dataf32[10] = 1, this._dataf32[11] = 1, 
            this._dataf32[16] = 1, this._dataf32[17] = 0, this._dataf32[18] = 0, this._dataf32[19] = 1, 
            this._dataf32[20] = 0, this._dataf32[21] = 0, this._datai32[24] = -1, this._datai32[25] = -1, 
            this._datai32[27] = -1, this._datai32[28] = 0, this._datai32[29] = 0, this._datai32[30] = 1e6, 
            this._datai32[31] = 1e6, this._datai32[63] = 0, this._datai32[71] = 1, this._datai32[72] = 771, 
            this._datai32[68] = -1, this._renderType |= 2, this._setRenderType(this._renderType);
        }, a._createTransform = function() {
            return Bt.create(new Float32Array(6));
        }, a._setTransform = function(t) {
            var e = this._conchData._float32Data;
            e[15] = 0, e[16] = t.a, e[17] = t.b, e[18] = t.c, e[19] = t.d, e[20] = t.tx, e[21] = t.ty;
        }, a._setTranformChange = function() {
            this._tfChanged = !0, this.parentRepaint(2);
        }, a._setGraphics = function(t) {
            this._datai32[23] = t._commandEncoder.getPtrID();
        }, a._setGraphicsCallBack = function() {
            this._callbackFuncObj || (this._callbackFuncObj = new CallbackFuncObj()), this._datai32[54] = this._callbackFuncObj.id, 
            this._callbackFuncObj.addCallbackFunc(5, this.updateParticleFromNative.bind(this)), 
            this._datai32[68] = 5;
        }, a._setCacheAs = function(t) {
            lt.createCommandEncoder(), this._drawCanvasParamData || (this._drawCanvasParamData = new ParamData(132, !0)), 
            this._callbackFuncObj || (this._callbackFuncObj = new CallbackFuncObj()), this._canvasBeginCmd || (this._canvasBeginCmd = j.instance.createCommandEncoder(128, 64, !1)), 
            this._canvasEndCmd || (this._canvasEndCmd = j.instance.createCommandEncoder(128, 64, !1)), 
            this._datai32[54] = this._callbackFuncObj.id, this._callbackFuncObj.addCallbackFunc(1, this.canvasBeginRenderFromNative.bind(this)), 
            this._callbackFuncObj.addCallbackFunc(2, this.canvasEndRenderFromNative.bind(this)), 
            this._datai32[56] = 1, this._datai32[57] = 2, this._datai32[58] = this._canvasBeginCmd.getPtrID(), 
            this._datai32[59] = this._canvasEndCmd.getPtrID(), this._datai32[60] = lt._DRAW_CANVAS_CMD_ENCODER_.getPtrID(), 
            this._datai32[61] = this._drawCanvasParamData.getPtrID();
        }, a._setX = function(t) {
            this._x = this._dataf32[6] = t, this._dataf32[15] = 1;
        }, a._setY = function(t) {
            this._y = this._dataf32[7] = t, this._dataf32[15] = 1;
        }, a._setWidth = function(t, e) {
            t && t.getIsReady() && this._setTextureEx(t, !0);
        }, a._setHeight = function(t, e) {
            t && t.getIsReady() && this._setTextureEx(t, !0);
        }, a._setPivotX = function(t) {
            this._renderType |= 2, this._dataf32[8] = t, this._dataf32[15] = 1;
        }, a._getPivotX = function() {
            return this._dataf32[8];
        }, a._setPivotY = function(t) {
            this._renderType |= 2, this._dataf32[9] = t, this._dataf32[15] = 1;
        }, a._getPivotY = function() {
            return this._dataf32[9];
        }, a._setAlpha = function(t) {
            this.getStyle().alpha = t, t = (t = t > 1 ? 1 : t) < 0 ? 0 : t;
            var e = this._datai32[22];
            e = 16777215 & e | 255 * t << 24, this._datai32[22] = e, 1 !== t ? this._renderType |= 1 : this._renderType &= -2, 
            this._setRenderType(this._renderType), this.parentRepaint();
        }, a._setRenderType = function(t) {
            this._datai32[0] = t, Ft.GLS[t] || (Ft.createByRenderType(t), Ft.createByRenderTypeEnd(t));
        }, a.parentRepaint = function() {}, a._getAlpha = function() {
            return (this._datai32[22] >>> 24) / 255;
        }, a._setScaleX = function(t) {
            this._style.scaleX = this._dataf32[10] = t, this._dataf32[15] = 1;
        }, a._setScaleY = function(t) {
            this._style.scaleY = this._dataf32[11] = t, this._dataf32[15] = 1;
        }, a._setSkewX = function(t) {
            this._style.skewX = this._dataf32[12] = t, this._dataf32[15] = 1;
        }, a._setSkewY = function(t) {
            this._style.skewY = this._dataf32[13] = t, this._dataf32[15] = 1;
        }, a._setRotation = function(t) {
            this._style.rotation = this._dataf32[14] = t, this._dataf32[15] = 1;
        }, a._setBgStyleColor = function(t, e, i, r, _) {
            var a = null, n = null;
            this._drawSimpleRectParamData || (this._drawSimpleRectParamData = new ParamData(104, !0)), 
            a = this._drawSimpleRectParamData._float32Data, n = this._drawSimpleRectParamData._int32Data;
            var s = l.create(_).numColor;
            n[0] = 1, n[1] = 96;
            var o = 2;
            a[o++] = t, a[o++] = e, a[o++] = 0, a[o++] = 0, n[o++] = s, a[o++] = 4294967295, 
            a[o++] = t + i, a[o++] = e, a[o++] = 0, a[o++] = 0, n[o++] = s, a[o++] = 4294967295, 
            a[o++] = t + i, a[o++] = e + r, a[o++] = 0, a[o++] = 0, n[o++] = s, a[o++] = 4294967295, 
            a[o++] = t, a[o++] = e + r, a[o++] = 0, a[o++] = 0, n[o++] = s, a[o++] = 4294967295, 
            this._datai32[74] = this._drawSimpleRectParamData.getPtrID(), j.syncBufferToRenderThread(this._drawSimpleRectParamData), 
            this._datai32[73] = Nt._SIMPLE_RECT_CMDENCODER_.getPtrID();
        }, a._setBorderStyleColor = function(t, e, i, r, _, a) {
            var n = null, s = null;
            this._drawRectBorderParamData || (this._drawRectBorderParamData = new ParamData(236, !0)), 
            n = this._drawRectBorderParamData._float32Data, s = this._drawRectBorderParamData._int32Data;
            var o = [], h = [], u = [];
            o.push(t), o.push(e), o.push(t + i), o.push(e), o.push(t + i), o.push(e + r), o.push(t), 
            o.push(e + r), o.push(t), o.push(e - a / 2), yt.createLine2(o, h, a, 0, u, !1);
            var c = o.length;
            n = this._drawRectBorderParamData._float32Data, s = this._drawRectBorderParamData._int32Data;
            var f = this._drawRectBorderParamData._int16Data, d = l.create(_).numColor;
            s[0] = 0, s[1] = 120, s[2] = 0, s[3] = 2 * h.length, s[4] = 0;
            for (var A = 5, E = 0; E < c; E++) n[A++] = u[2 * E], n[A++] = u[2 * E + 1], s[A++] = d;
            A = 70;
            for (var m = 0; m < h.length; m++) f[A++] = h[m];
            this._datai32[76] = this._drawRectBorderParamData.getPtrID(), j.syncBufferToRenderThread(this._drawRectBorderParamData), 
            this._datai32[75] = Nt._RECT_BORDER_CMD_ENCODER_.getPtrID();
        }, a._setTextureEx = function(t, e) {
            var i = null, r = null;
            if (!this._drawSimpleImageData) {
                this._drawSimpleImageData = new ParamData(116, !0), i = this._drawSimpleImageData._float32Data, 
                (r = this._drawSimpleImageData._int32Data)[0] = 3, r[1] = 33984, r[2] = e ? t.bitmap._glTexture.id : 0, 
                r[3] = 1, r[4] = 96;
                var _ = t.uv;
                i[5] = 0, i[6] = 0, i[7] = _[0], i[8] = _[1], r[9] = 4294967295, r[10] = 4294967295, 
                i[11] = 0, i[12] = 0, i[13] = _[2], i[14] = _[3], r[15] = 4294967295, r[16] = 4294967295, 
                i[17] = 0, i[18] = 0, i[19] = _[4], i[20] = _[5], r[21] = 4294967295, r[22] = 4294967295, 
                i[23] = 0, i[24] = 0, i[25] = _[6], i[26] = _[7], r[27] = 4294967295, r[28] = 4294967295;
            }
            i = this._drawSimpleImageData._float32Data, (r = this._drawSimpleImageData._int32Data)[2] = e ? t.bitmap._glTexture.id : 0;
            var a = e ? t.width : 0, n = e ? t.height : 0, s = this._width, o = this._height;
            a = s > 0 ? s : a, n = o > 0 ? o : n, i[11] = i[17] = a, i[18] = i[24] = n;
            var h = this._drawSimpleImageData.getPtrID();
            this._datai32[25] = h, j.syncBufferToRenderThread(this._drawSimpleImageData), this._datai32[24] = Nt._SIMPLE_TEXTURE_CMDENCODER_.getPtrID();
        }, a._setTexture = function(t) {
            t && (t.getIsReady() ? this._setTextureEx(t, !0) : (this._setTextureEx(t, !1), t.on("ready", this, this._setTextureEx, [ t, !0 ])));
        }, a._setCustomRender = function() {
            this._callbackFuncObj || (this._callbackFuncObj = new CallbackFuncObj()), this._customCmds = [], 
            this._callbackFuncObj.addCallbackFunc(0, this.customRenderFromNative.bind(this)), 
            this._customRenderCmd = j.instance.createCommandEncoder(128, 64, !0), this._datai32[54] = this._callbackFuncObj.id, 
            this._datai32[55] = 0, this._datai32[27] = this._customRenderCmd.getPtrID();
        }, a._setScrollRect = function(t) {
            this._dataf32[28] = 0, this._dataf32[29] = 0, this._dataf32[30] = t.width, this._dataf32[31] = t.height, 
            this._dataf32[32] = -t.x, this._dataf32[33] = -t.y, t.onPropertyChanged = this._setScrollRect.bind(this);
        }, a._setColorFilter = function(t) {
            this._callbackFuncObj || (this._callbackFuncObj = new CallbackFuncObj()), this._filterBeginCmd || (this._filterBeginCmd = j.instance.createCommandEncoder(128, 64, !1)), 
            this._filterEndCmd || (this._filterEndCmd = j.instance.createCommandEncoder(128, 64, !0)), 
            this._datai32[54] = this._callbackFuncObj.id, this._callbackFuncObj.addCallbackFunc(3, this.filterBeginRenderFromNative.bind(this)), 
            this._callbackFuncObj.addCallbackFunc(4, this.filterEndRenderFromNative.bind(this)), 
            this._datai32[65] = 3, this._datai32[64] = this._filterBeginCmd.getPtrID(), this._datai32[67] = 4, 
            this._datai32[66] = this._filterEndCmd.getPtrID();
        }, a._setMask = function(t) {
            t.cacheAs = "bitmap", this._callbackFuncObj || (this._callbackFuncObj = new CallbackFuncObj()), 
            this._maskCmd || (this._maskCmd = j.instance.createCommandEncoder(128, 64, !1)), 
            this._datai32[54] = this._callbackFuncObj.id, this._callbackFuncObj.addCallbackFunc(6, this.maskRenderFromNative.bind(this)), 
            this._datai32[69] = 6, this._datai32[70] = this._maskCmd.getPtrID();
        }, a._adjustTransform = function() {
            var t = this._transform || (this._transform = this._createTransform());
            t._bTransform = !0, j.instance.calcMatrixFromScaleSkewRotation(this._conchData._data._ptrID, 60, 64, 24, 28, 32, 36, 40, 44, 48, 52, 56);
            var e = this._conchData._float32Data;
            return t.a = e[16], t.b = e[17], t.c = e[18], t.d = e[19], t.tx = 0, t.ty = 0, t;
        }, a._setBlendMode = function(t) {
            switch (t) {
              case "normal":
                this._datai32[71] = 1, this._datai32[72] = 771;
                break;

              case "add":
              case "lighter":
                this._datai32[71] = 1, this._datai32[72] = 772;
                break;

              case "multiply":
                this._datai32[71] = 774, this._datai32[72] = 771;
                break;

              case "screen":
                this._datai32[71] = 1, this._datai32[72] = 1;
                break;

              case "overlay":
                this._datai32[71] = 1, this._datai32[72] = 769;
                break;

              case "light":
                this._datai32[71] = 1, this._datai32[72] = 1;
                break;

              case "mask":
                this._datai32[71] = 0, this._datai32[72] = 770;
                break;

              case "destination-out":
                this._datai32[71] = 0, this._datai32[72] = 0;
                break;

              default:
                alert("_setBlendMode Unknown type");
            }
        }, a.customRenderFromNative = function() {
            var t = j.instance.getCurrentContext();
            this._customRenderCmd.beginEncoding(), this._customRenderCmd.clearEncoding(), t._commandEncoder = this._customRenderCmd, 
            t._customCmds = this._customCmds;
            for (var e = 0, i = this._customCmds.length; e < i; e++) this._customCmds[e].recover();
            this._customCmds.length = 0, this.customRender(t, 0, 0), this._customRenderCmd.endEncoding();
        }, a.canvasBeginRenderFromNative = function() {
            var t = j.instance, i = null, r = null, _ = this._cacheStyle;
            if (_.canvas && 0 == this._datai32[4]) i = _.canvas, 0 != this._bRepaintCanvas && (this.setChildrenNativeVisible(!1), 
            this._bRepaintCanvas = !1), this._datai32[63] = 1; else {
                if (this._canvasBeginCmd.beginEncoding(), this._canvasBeginCmd.clearEncoding(), 
                i = laya.layagl.ConchSpriteAdpt.buildCanvas(this, 0, 0)) {
                    this._datai32[63] = 0, this._lastContext = t.getCurrentContext();
                    var a = (r = i.context)._targets;
                    lt.setParamData(this._drawCanvasParamData, a, -16, -16, a.width, a.height), t.setCurrentContext(r), 
                    r.beginRT(), t.save(), e._tempFloatArrayMatrix[0] = 1, e._tempFloatArrayMatrix[1] = 0, 
                    e._tempFloatArrayMatrix[2] = 0, e._tempFloatArrayMatrix[3] = 1, e._tempFloatArrayMatrix[4] = 16, 
                    e._tempFloatArrayMatrix[5] = 16, t.setGlobalValue(Nt.GLOBALVALUE_MATRIX32, 8, e._tempFloatArrayMatrix), 
                    1 != this._bRepaintCanvas && (this.setChildrenNativeVisible(!0), this._bRepaintCanvas = !0);
                }
                this._canvasBeginCmd.endEncoding();
            }
        }, a.setChildrenNativeVisible = function(t) {
            for (var e, i = this._children, r = i.length, _ = 0; _ < r; ++_) (e = i[_])._datai32[5] = t ? 1 : 0, 
            e.setChildrenNativeVisible(t);
        }, a.canvasEndRenderFromNative = function() {
            var t = j.instance;
            if (this._canvasEndCmd.beginEncoding(), this._canvasEndCmd.clearEncoding(), this._bRepaintCanvas) {
                var e = j.instance.getCurrentContext();
                t.restore(), t.setCurrentContext(this._lastContext), t.commitContextToGPU(e), e.endRT(), 
                t.blendFunc(1, 771);
            }
            this._canvasEndCmd.endEncoding();
        }, a.filterBeginRenderFromNative = function() {
            var t = j.instance;
            this._filterBeginCmd.beginEncoding(), this._filterBeginCmd.clearEncoding();
            var i = this._getCacheStyle().filters;
            i.length;
            if (i[0] instanceof laya.filters.ColorFilter) {
                t.addShaderMacro(Nt.SHADER_MACRO_COLOR_FILTER);
                var r = i[0];
                t.setGlobalValue(Nt.GLOBALVALUE_COLORFILTER_COLOR, 8, r._mat), t.setGlobalValue(Nt.GLOBALVALUE_COLORFILTER_ALPHA, 8, r._alpha);
            } else {
                var _ = P.TEMP, a = v.create(), n = 0, s = 0;
                this._isHaveGlowFilter() && (n = 50, s = 25);
                var o = new g();
                o.copyFrom(this.getSelfBounds()), o.x += this.x, o.y += this.y, o.x -= this.pivotX + 4, 
                o.y -= this.pivotY + 4;
                var h = o.x, l = o.y;
                if (o.width += n + 8, o.height += n + 8, _.x = o.x * a.a + o.y * a.c, _.y = o.y * a.d + o.x * a.b, 
                o.x = _.x, o.y = _.y, _.x = o.width * a.a + o.height * a.c, _.y = o.height * a.d + o.width * a.b, 
                o.width = _.x, o.height = _.y, o.width <= 0 || o.height <= 0) return;
                var u = this._getCacheStyle().filterCache;
                u && St.releaseRT(u), u = St.getRT(o.width, o.height), this._getCacheStyle().filterCache = u, 
                e.useRenderTarget(u), e._tempFloatArrayMatrix[0] = 1, e._tempFloatArrayMatrix[1] = 0, 
                e._tempFloatArrayMatrix[2] = 0, e._tempFloatArrayMatrix[3] = 1, e._tempFloatArrayMatrix[4] = this.x - h + s, 
                e._tempFloatArrayMatrix[5] = this.y - l + s, t.setGlobalValue(Nt.GLOBALVALUE_MATRIX32, 8, e._tempFloatArrayMatrix);
            }
            this._filterBeginCmd.endEncoding();
        }, a.filterEndRenderFromNative = function() {
            this._filterEndCmd.beginEncoding(), this._filterEndCmd.clearEncoding();
            var t = j.instance, r = this._getCacheStyle().filters;
            if (r[0] instanceof laya.filters.ColorFilter) ; else {
                t.restore();
                var _ = j.instance.getCurrentContext(), a = le.currentActive;
                if (le.popRT(), r[0] instanceof i.BlurFilter) {
                    t.addShaderMacro(Nt.SHADER_MACRO_BLUR_FILTER);
                    var n = r[0];
                    e._tempFloatArrayBuffer2[0] = a.width, e._tempFloatArrayBuffer2[1] = a.height, t.setGlobalValue(Nt.GLOBALVALUE_BLURFILTER_BLURINFO, 8, e._tempFloatArrayBuffer2), 
                    t.setGlobalValue(Nt.GLOBALVALUE_BLURFILTER_STRENGTH, 8, n.getStrenth_sig2_2sig2_native()), 
                    _.drawTarget(this._filterEndCmd, a, -4, -4, 0, 0);
                } else if (r[0] instanceof i.GlowFilter) {
                    var s = a.width, o = a.height, h = St.getRT(s, o);
                    e.useRenderTarget(h), t.addShaderMacro(Nt.SHADER_MACRO_GLOW_FILTER);
                    var l = r[0], u = l.getBlurInfo2Native();
                    u[0] = s, u[1] = o, t.setGlobalValue(Nt.GLOBALVALUE_GLOWFILTER_COLOR, 8, l.getColorNative()), 
                    t.setGlobalValue(Nt.GLOBALVALUE_GLOWFILTER_BLURINFO1, 8, l.getBlurInfo1Native()), 
                    t.setGlobalValue(Nt.GLOBALVALUE_GLOWFILTER_BLURINFO2, 8, u), _.drawTarget(this._filterEndCmd, a, -16, -16, 0, 0), 
                    t.restore(), le.popRT(), _.drawTarget(this._filterEndCmd, h, -29, -29, 0, 0), _.drawTarget(this._filterEndCmd, a, -29, -29, 0, 0);
                }
            }
            this._filterEndCmd.endEncoding(), j.syncBufferToRenderThread(this._filterEndCmd);
        }, a.maskRenderFromNative = function() {
            this._maskCmd.beginEncoding(), this._maskCmd.clearEncoding();
            var t = j.instance, i = t.getCurrentContext(), r = this.mask;
            r && (r._children.length > 0 ? (t.blockStart(r._conchData), r._renderChilds(i), 
            t.blockEnd(r._conchData)) : t.block(r._conchData)), e._tempInt1[0] = 772, t.setGlobalValue(Nt.GLOBALVALUE_BLENDFUNC_SRC, 8, e._tempInt1), 
            e._tempInt1[0] = 0, t.setGlobalValue(Nt.GLOBALVALUE_BLENDFUNC_DEST, 8, e._tempInt1), 
            this._maskCmd.endEncoding();
        }, a.updateParticleFromNative = function() {
            this.tempCmd.updateParticle();
        }, e.createMatrix = function(t, e, i, r, _, a, n) {
            return void 0 === t && (t = 1), void 0 === e && (e = 0), void 0 === i && (i = 0), 
            void 0 === r && (r = 1), void 0 === _ && (_ = 0), void 0 === a && (a = 0), new Bt(t, e, i, r, _, a, n);
        }, e.init = function() {
            ct.__init__(), $.__init__();
            var t = I.prototype, i = e.prototype, r = [ "_createTransform", "_setTransform", "_setGraphics", "_setGraphicsCallBack", "_setCacheAs", "_setX", "_setY", "_setPivotX", "_getPivotX", "_setPivotY", "_getPivotY", "_setAlpha", "_getAlpha", "_setScaleX", "_setScaleY", "_setSkewX", "_setSkewY", "_setRotation", "_adjustTransform", "_setRenderType", "_setTexture", "_setTextureEx", "_setCustomRender", "_setScrollRect", "_setColorFilter", "customRenderFromNative", "canvasBeginRenderFromNative", "canvasEndRenderFromNative", "setChildrenNativeVisible", "filterBeginRenderFromNative", "filterEndRenderFromNative", "updateParticleFromNative", "_setMask", "maskRenderFromNative", "_setBlendMode", "_setBgStyleColor", "_setBorderStyleColor", "_setWidth", "_setHeight", "_setTranformChange" ], _ = 0, a = 0;
            a = r.length;
            var n;
            for (_ = 0; _ < a; _++) t[n = r[_]] = i[n];
            t.createGLBuffer = i.createData, v._createFun = e.createMatrix;
            t.render = t.renderToNative = oe.prototype.renderToNative, t.repaint = t.repaintForNative = oe.prototype.repaintForNative, 
            t.parentRepaint = t.parentRepaintForNative = oe.prototype.parentRepaintForNative, 
            t._renderChilds = oe.prototype._renderChilds, t.writeBlockToNative = oe.prototype.writeBlockToNative, 
            t._writeBlockChilds = oe.prototype._writeBlockChilds;
        }, e.useRenderTarget = function(t) {
            var i = j.instance;
            le.pushRT(), t.start(), i.clearColor(0, 0, 0, 0), i.clear(17664), i.save(), e._tempFloatArrayBuffer2[0] = t.width, 
            e._tempFloatArrayBuffer2[1] = t.height, i.setGlobalValue(Nt.GLOBALVALUE_VIEWS, 8, e._tempFloatArrayBuffer2);
        }, e.buildCanvas = function(t, e, i) {
            var r, _, a, n, s, o, h, l = t._cacheStyle, u = l.canvas, c = l.cacheAs;
            return h = l._calculateCacheRect(t, c, e, i), s = h.x, o = h.y, _ = l.cacheRect, 
            a = _.width * s, n = _.height * o, _.x, _.y, "bitmap" === c && (a > 2048 || n > 2048) ? (alert("cache bitmap size larger than 2048,cache ignored"), 
            l.releaseContext(), null) : (u || (l.createContext(), u = l.canvas), r = u.context, 
            u.context.sprite = t, u.width == a && u.height == n || (u.size(a, n), r._targets && (r._targets.destroy(), 
            r._targets = null)), "bitmap" === c ? u.context.asBitmap = !0 : "normal" === c && (u.context.asBitmap = !1), 
            "normal" === c && (r.touches = []), u);
        }, r(e, [ "_tempFloatArrayBuffer2", function() {
            return this._tempFloatArrayBuffer2 = new Float32Array(2);
        }, "_tempFloatArrayMatrix", function() {
            return this._tempFloatArrayMatrix = new Float32Array(6);
        }, "_tempInt1", function() {
            return this._tempInt1 = new Int32Array(1);
        } ]), e;
    }(), _e = function(t) {
        function e(t, i) {
            this._source = null, this._texW = 0, this._texH = 0, this.__destroyed = !1, this._discardTm = 0, 
            this.genID = 0, this.bitmap = {
                id: 0,
                _glTexture: null
            }, this.curUsedCovRate = 0, this.curUsedCovRateAtlas = 0, this.lastTouchTm = 0, 
            this.ri = null, e.__super.call(this), this._texW = t || J.atlasWidth, this._texH = i || J.atlasWidth, 
            this.bitmap.id = this.id, this.lock = !0;
        }
        _(e, "laya.webgl.text.TextTexture", O);
        var n = e.prototype;
        return n.recreateResource = function() {
            if (!this._source) {
                var t = M.isConchApp ? j.instance.getDefaultCommandEncoder() : mt.mainContext, e = this._source = t.createTexture();
                this.bitmap._glTexture = e, ot.bindTexture(t, 3553, e), t.texImage2D(3553, 0, 6408, this._texW, this._texH, 0, 6408, 5121, null), 
                t.texParameteri(3553, 10241, 9729), t.texParameteri(3553, 10240, 9729), t.texParameteri(3553, 10242, 33071), 
                t.texParameteri(3553, 10243, 33071), J.debugUV && this.fillWhite();
            }
        }, n.addChar = function(t, e, i, r) {
            if (J.isWan1Wan) return this.addCharCanvas(t, e, i, r);
            !this._source && this.recreateResource();
            var _ = M.isConchApp ? j.instance.getDefaultCommandEncoder() : mt.mainContext;
            ot.bindTexture(_, 3553, this._source), !M.isConchApp && _.pixelStorei(37441, !0);
            var a = t.data;
            t.data instanceof Uint8ClampedArray && (a = new Uint8Array(a.buffer)), _.texSubImage2D(3553, 0, e, i, t.width, t.height, 6408, 5121, a), 
            !M.isConchApp && _.pixelStorei(37441, !1);
            var n = NaN, s = NaN, o = NaN, h = NaN;
            return M.isConchApp ? (n = e / this._texW, s = i / this._texH, o = (e + t.width) / this._texW, 
            h = (i + t.height) / this._texH) : (n = (e + 1) / this._texW, s = (i + 1) / this._texH, 
            o = (e + t.width - 1) / this._texW, h = (i + t.height - 1) / this._texH), r = r || new Array(8), 
            r[0] = n, r[1] = s, r[2] = o, r[3] = s, r[4] = o, r[5] = h, r[6] = n, r[7] = h, 
            r;
        }, n.addCharCanvas = function(t, e, i, r) {
            !this._source && this.recreateResource();
            var _ = M.isConchApp ? j.instance.getDefaultCommandEncoder() : mt.mainContext;
            ot.bindTexture(_, 3553, this._source), !M.isConchApp && _.pixelStorei(37441, !0), 
            _.texSubImage2D(3553, 0, e, i, 6408, 5121, t), !M.isConchApp && _.pixelStorei(37441, !1);
            var a = NaN, n = NaN, s = NaN, o = NaN;
            return M.isConchApp ? (a = e / this._texW, n = i / this._texH, s = (e + t.width) / this._texW, 
            o = (i + t.height) / this._texH) : (a = (e + 1) / this._texW, n = (i + 1) / this._texH, 
            s = (e + t.width - 1) / this._texW, o = (i + t.height - 1) / this._texH), r = r || new Array(8), 
            r[0] = a, r[1] = n, r[2] = s, r[3] = n, r[4] = s, r[5] = o, r[6] = a, r[7] = o, 
            r;
        }, n.fillWhite = function() {
            !this._source && this.recreateResource();
            var t = M.isConchApp ? j.instance.getDefaultCommandEncoder() : mt.mainContext, e = new Uint8Array(this._texW * this._texH * 4);
            e.fill(255), t.texSubImage2D(3553, 0, 0, 0, this._texW, this._texH, 6408, 5121, e);
        }, n.discard = function() {
            this._texW == J.atlasWidth && this._texH == J.atlasWidth ? (this.genID++, e.poolLen >= e.pool.length && (e.pool = e.pool.concat(new Array(10))), 
            this._discardTm = i.stage.getFrameTm(), e.pool[e.poolLen++] = this) : this.destroy();
        }, n.destroy = function() {
            console.log("destroy TextTexture"), this.__destroyed = !0;
            var t = M.isConchApp ? j.instance.getDefaultCommandEncoder() : mt.mainContext;
            this._source && t.deleteTexture(this._source), this._source = null;
        }, n.touchRect = function(t, e) {
            this.lastTouchTm != e && (this.curUsedCovRate = 0, this.curUsedCovRateAtlas = 0, 
            this.lastTouchTm = e);
            var i = J.atlasWidth * J.atlasWidth, r = Ut.atlasGridW * Ut.atlasGridW;
            this.curUsedCovRate += t.bmpWidth * t.bmpHeight / i, this.curUsedCovRateAtlas += Math.ceil(t.bmpWidth / Ut.atlasGridW) * Math.ceil(t.bmpHeight / Ut.atlasGridW) / (i / r);
        }, n._getSource = function() {
            return this._source;
        }, n.drawOnScreen = function(t, e) {}, a(0, n, "texture", function() {
            return this;
        }), e.getTextTexture = function(t, i) {
            if (t != J.atlasWidth || t != J.atlasWidth) return new e(t, i);
            if (e.poolLen > 0) {
                var r = e.pool[--e.poolLen];
                return e.poolLen > 0 && e.clean(), r;
            }
            return new e(t, i);
        }, e.clean = function() {
            var t = i.stage.getFrameTm();
            if (0 === e.cleanTm && (e.cleanTm = t), t - e.cleanTm >= J.checkCleanTextureDt) {
                for (var r = 0; r < e.poolLen; r++) {
                    var _ = e.pool[r];
                    t - _._discardTm >= J.destroyUnusedTextureDt && (_.destroy(), e.pool[r] = e.pool[e.poolLen - 1], 
                    e.poolLen--, r--);
                }
                e.cleanTm = t;
            }
        }, e.poolLen = 0, e.cleanTm = 0, r(e, [ "pool", function() {
            return this.pool = new Array(10);
        } ]), e;
    }(), ae = function(t) {
        function e(t) {
            this._uint16Array = null, void 0 === t && (t = 35044), e.__super.call(this), this._bufferUsage = t, 
            this._bufferType = 34963, this._buffer = new ArrayBuffer(8);
        }
        _(e, "laya.webgl.utils.IndexBuffer2D", $t);
        var i = e.prototype;
        return i._checkArrayUse = function() {
            this._uint16Array && (this._uint16Array = new Uint16Array(this._buffer));
        }, i.getUint16Array = function() {
            return this._uint16Array || (this._uint16Array = new Uint16Array(this._buffer));
        }, i._bindForVAO = function() {
            j.instance.bindBuffer(34963, this._glBuffer);
        }, i.bind = function() {
            return Tt._bindedIndexBuffer !== this._glBuffer && (j.instance.bindBuffer(34963, this._glBuffer), 
            Tt._bindedIndexBuffer = this._glBuffer, !0);
        }, i.destory = function() {
            this._uint16Array = null, this._buffer = null;
        }, i.disposeResource = function() {
            this._disposeResource();
        }, e.create = function(t) {
            return void 0 === t && (t = 35044), new e(t);
        }, e;
    }(), ne = function(t) {
        function e(t, i) {
            this._floatArray32 = null, this._uint32Array = null, this._vertexStride = 0, e.__super.call(this), 
            this._vertexStride = t, this._bufferUsage = i, this._bufferType = 34962, this._buffer = new ArrayBuffer(8), 
            this._floatArray32 = new Float32Array(this._buffer), this._uint32Array = new Uint32Array(this._buffer);
        }
        _(e, "laya.webgl.utils.VertexBuffer2D", $t);
        var i = e.prototype;
        return i.getFloat32Array = function() {
            return this._floatArray32;
        }, i.appendArray = function(t) {
            var e = this._byteLength >> 2;
            this.setByteLength(this._byteLength + 4 * t.length);
            this.getFloat32Array().set(t, e), this._upload = !0;
        }, i._checkArrayUse = function() {
            this._floatArray32 && (this._floatArray32 = new Float32Array(this._buffer)), this._uint32Array && (this._uint32Array = new Uint32Array(this._buffer));
        }, i.deleteBuffer = function() {
            this._disposeResource();
        }, i._bindForVAO = function() {
            j.instance.bindBuffer(34962, this._glBuffer);
        }, i.bind = function() {
            return Tt._bindedVertexBuffer !== this._glBuffer && (j.instance.bindBuffer(34962, this._glBuffer), 
            Tt._bindedVertexBuffer = this._glBuffer, !0);
        }, i.destroy = function() {
            laya.webgl.utils.Buffer.prototype.destroy.call(this), this._byteLength = 0, this._upload = !0, 
            this._buffer = null, this._floatArray32 = null;
        }, a(0, i, "vertexStride", function() {
            return this._vertexStride;
        }), e.create = function(t, i) {
            return void 0 === i && (i = 35048), new e(t, i);
        }, e;
    }(), se = function(t) {
        function e(t, i) {
            e.__super.call(this), this._wrapModeU = 0, this._wrapModeV = 0, this._filterMode = 1, 
            this._readyed = !1, this._width = -1, this._height = -1, this._format = t, this._mipmap = i, 
            this._anisoLevel = 1, this._glTexture = j.instance.createTexture();
        }
        _(e, "laya.webgl.resource.BaseTexture", s);
        var i = e.prototype;
        return i._isPot = function(t) {
            return 0 == (t & t - 1);
        }, i._getGLFormat = function() {
            var t = 0;
            switch (this._format) {
              case 0:
                t = 6407;
                break;

              case 1:
                t = 6408;
                break;

              case 2:
                t = 6406;
                break;

              case 3:
                if (!ot._compressedTextureS3tc) throw "BaseTexture: not support DXT1 format.";
                t = ot._compressedTextureS3tc.COMPRESSED_RGB_S3TC_DXT1_EXT;
                break;

              case 4:
                if (!ot._compressedTextureS3tc) throw "BaseTexture: not support DXT5 format.";
                t = ot._compressedTextureS3tc.COMPRESSED_RGBA_S3TC_DXT5_EXT;
                break;

              case 5:
                if (!ot._compressedTextureEtc1) throw "BaseTexture: not support ETC1RGB format.";
                t = ot._compressedTextureEtc1.COMPRESSED_RGB_ETC1_WEBGL;
                break;

              case 9:
                if (!ot._compressedTexturePvrtc) throw "BaseTexture: not support PVRTCRGB_2BPPV format.";
                t = ot._compressedTexturePvrtc.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                break;

              case 10:
                if (!ot._compressedTexturePvrtc) throw "BaseTexture: not support PVRTCRGBA_2BPPV format.";
                t = ot._compressedTexturePvrtc.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
                break;

              case 11:
                if (!ot._compressedTexturePvrtc) throw "BaseTexture: not support PVRTCRGB_4BPPV format.";
                t = ot._compressedTexturePvrtc.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                break;

              case 12:
                if (!ot._compressedTexturePvrtc) throw "BaseTexture: not support PVRTCRGBA_4BPPV format.";
                t = ot._compressedTexturePvrtc.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                break;

              default:
                throw "BaseTexture: unknown texture format.";
            }
            return t;
        }, i._setFilterMode = function(t) {
            var e = j.instance;
            switch (ot.bindTexture(e, this._glTextureType, this._glTexture), t) {
              case 0:
                this._mipmap && this._isPot(this._width) && this._isPot(this._height) ? e.texParameteri(this._glTextureType, 10241, 9984) : e.texParameteri(this._glTextureType, 10241, 9728), 
                e.texParameteri(this._glTextureType, 10240, 9728);
                break;

              case 1:
                this._mipmap && this._isPot(this._width) && this._isPot(this._height) ? e.texParameteri(this._glTextureType, 10241, 9985) : e.texParameteri(this._glTextureType, 10241, 9729), 
                e.texParameteri(this._glTextureType, 10240, 9729);
                break;

              case 2:
                this._mipmap && this._isPot(this._width) && this._isPot(this._height) ? e.texParameteri(this._glTextureType, 10241, 9987) : e.texParameteri(this._glTextureType, 10241, 9729), 
                e.texParameteri(this._glTextureType, 10240, 9729);
                break;

              default:
                throw new Error("BaseTexture:unknown filterMode value.");
            }
        }, i._setWarpMode = function(t, e) {
            var i = j.instance;
            if (ot.bindTexture(i, this._glTextureType, this._glTexture), this._isPot(this._width) && this._isPot(this._height)) switch (e) {
              case 0:
                i.texParameteri(this._glTextureType, t, 10497);
                break;

              case 1:
                i.texParameteri(this._glTextureType, t, 33071);
            } else i.texParameteri(this._glTextureType, t, 33071);
        }, i._setAnisotropy = function(t) {
            var e = ot._extTextureFilterAnisotropic;
            if (e && !o.onLimixiu) {
                t = Math.max(t, 1);
                var i = j.instance;
                ot.bindTexture(i, this._glTextureType, this._glTexture), t = Math.min(i.getParameter(e.MAX_TEXTURE_MAX_ANISOTROPY_EXT), t), 
                i.texParameterf(this._glTextureType, e.TEXTURE_MAX_ANISOTROPY_EXT, t);
            }
        }, i._disposeResource = function() {
            this._glTexture && (j.instance.deleteTexture(this._glTexture), this._glTexture = null, 
            this._setGPUMemory(0));
        }, i._getSource = function() {
            return this._readyed ? this._glTexture : null;
        }, a(0, i, "wrapModeU", function() {
            return this._wrapModeU;
        }, function(t) {
            this._wrapModeU !== t && (this._wrapModeU = t, -1 !== this._width && this._setWarpMode(10242, t));
        }), a(0, i, "mipmap", function() {
            return this._mipmap;
        }), a(0, i, "format", function() {
            return this._format;
        }), a(0, i, "wrapModeV", function() {
            return this._wrapModeV;
        }, function(t) {
            this._wrapModeV !== t && (this._wrapModeV = t, -1 !== this._height && this._setWarpMode(10243, t));
        }), a(0, i, "defaulteTexture", function() {
            throw "BaseTexture:must override it.";
        }), a(0, i, "filterMode", function() {
            return this._filterMode;
        }, function(t) {
            t !== this._filterMode && (this._filterMode = t, -1 !== this._width && -1 !== this._height && this._setFilterMode(t));
        }), a(0, i, "anisoLevel", function() {
            return this._anisoLevel;
        }, function(t) {
            t !== this._anisoLevel && (this._anisoLevel = Math.max(1, Math.min(16, t)), -1 !== this._width && -1 !== this._height && this._setAnisotropy(t));
        }), e.WARPMODE_REPEAT = 0, e.WARPMODE_CLAMP = 1, e.FILTERMODE_POINT = 0, e.FILTERMODE_BILINEAR = 1, 
        e.FILTERMODE_TRILINEAR = 2, e.FORMAT_R8G8B8 = 0, e.FORMAT_R8G8B8A8 = 1, e.FORMAT_ALPHA8 = 2, 
        e.FORMAT_DXT1 = 3, e.FORMAT_DXT5 = 4, e.FORMAT_ETC1RGB = 5, e.FORMAT_PVRTCRGB_2BPPV = 9, 
        e.FORMAT_PVRTCRGBA_2BPPV = 10, e.FORMAT_PVRTCRGB_4BPPV = 11, e.FORMAT_PVRTCRGBA_4BPPV = 12, 
        e.FORMAT_DEPTH_16 = 0, e.FORMAT_STENCIL_8 = 1, e.FORMAT_DEPTHSTENCIL_16_8 = 2, e.FORMAT_DEPTHSTENCIL_NONE = 3, 
        e;
    }(), oe = function(t) {
        function e() {
            e.__super.call(this);
        }
        _(e, "laya.layagl.ConchSprite", I);
        var i = e.prototype;
        return i.parentRepaintForNative = function(t) {
            void 0 === t && (t = 2);
            var e = this._parent;
            e && (e._conchData._int32Data[4] & t) != t && (e._conchData._int32Data[4] |= t, 
            e.parentRepaintForNative(t));
        }, i.renderToNative = function(t, e, i) {
            var r = t.gl, _ = j.getFrameCount() - 1, a = this._conchData._int32Data, n = a[4];
            this._children.length > 0 ? _ != a[3] || n > 0 && 1 == (1 & n) ? (r.blockStart(this._conchData), 
            this._renderChilds(t), r.blockEnd(this._conchData)) : r.copyCmdBuffer(this._conchData._int32Data[1], this._conchData._int32Data[2]) : r.block(this._conchData);
        }, i.writeBlockToNative = function() {
            var t = j.instance;
            this._children.length > 0 ? (t.blockStart(this._conchData), this._writeBlockChilds(), 
            t.blockEnd(this._conchData)) : t.block(this._conchData);
        }, i._renderChilds = function(t) {
            var e, i = this._children, r = 0, _ = i.length, a = this._style;
            if (a.viewport) for (var n = a.viewport, s = n.x, o = n.y, h = n.right, l = n.bottom, u = NaN, c = NaN; r < _; ++r) (e = i[r])._visible && (u = e._x) < h && u + e.width > s && (c = e._y) < l && c + e.height > o && e.renderToNative(t); else for (;r < _; ++r) (e = i[r])._visible && e.renderToNative(t);
        }, i._writeBlockChilds = function() {
            var t, e = this._children, i = 0, r = e.length, _ = this._style;
            if (_.viewport) for (var a = _.viewport, n = a.x, s = a.y, o = a.right, h = a.bottom, l = NaN, u = NaN; i < r; ++i) (t = e[i])._visible && (l = t._x) < o && l + t.width > n && (u = t._y) < h && u + t.height > s && t.writeBlockToNative(); else for (;i < r; ++i) (t = e[i])._visible && t.writeBlockToNative();
        }, i.repaintForNative = function(t) {
            void 0 === t && (t = 2), (this._conchData._int32Data[4] & t) != t && (this._conchData._int32Data[4] |= t, 
            this.parentRepaintForNative(t));
        }, e;
    }(), he = function(t) {
        function e(t, i, r, _, a) {
            if (this._attribInfo = null, this.customCompile = !1, this._curActTexIndex = 0, 
            this.tag = {}, this._program = null, this._params = null, this._paramsMap = {}, 
            e.__super.call(this), !t || !i) throw "Shader Error";
            this._attribInfo = a, M.isConchApp && (this.customCompile = !0), this._id = ++e._count, 
            this._vs = t, this._ps = i, this._nameMap = _ || {}, null != r && (e.sharders[r] = this), 
            this.recreateResource(), this.lock = !0;
        }
        _(e, "laya.webgl.shader.Shader", ee);
        var i = e.prototype;
        return i.recreateResource = function() {
            this._compile(), this._setGPUMemory(0);
        }, i._disposeResource = function() {
            mt.mainContext.deleteShader(this._vshader), mt.mainContext.deleteShader(this._pshader), 
            mt.mainContext.deleteProgram(this._program), this._vshader = this._pshader = this._program = null, 
            this._params = null, this._paramsMap = {}, this._setGPUMemory(0), this._curActTexIndex = 0;
        }, i._compile = function() {
            if (this._vs && this._ps && !this._params) {
                this._reCompile = !0, this._params = [];
                var t;
                this.customCompile && (t = st.preGetParams(this._vs, this._ps));
                var i = mt.mainContext;
                this._program = i.createProgram(), this._vshader = e._createShader(i, this._vs, 35633), 
                this._pshader = e._createShader(i, this._ps, 35632), i.attachShader(this._program, this._vshader), 
                i.attachShader(this._program, this._pshader);
                var r, _ = 0, a = 0, n = this._attribInfo ? this._attribInfo.length : 0;
                for (_ = 0; _ < n; _ += 2) i.bindAttribLocation(this._program, this._attribInfo[_ + 1], this._attribInfo[_]);
                if (i.linkProgram(this._program), !this.customCompile && !i.getProgramParameter(this._program, 35714)) throw i.getProgramInfoLog(this._program);
                var s = this.customCompile ? t.uniforms.length : i.getProgramParameter(this._program, 35718);
                for (_ = 0; _ < s; _++) {
                    var o = this.customCompile ? t.uniforms[_] : i.getActiveUniform(this._program, _);
                    (r = {
                        vartype: "uniform",
                        glfun: null,
                        ivartype: 1,
                        location: i.getUniformLocation(this._program, o.name),
                        name: o.name,
                        type: o.type,
                        isArray: !1,
                        isSame: !1,
                        preValue: null,
                        indexOfParams: 0
                    }).name.indexOf("[0]") > 0 && (r.name = r.name.substr(0, r.name.length - 3), r.isArray = !0, 
                    r.location = i.getUniformLocation(this._program, r.name)), this._params.push(r);
                }
                for (_ = 0, a = this._params.length; _ < a; _++) switch (r = this._params[_], r.indexOfParams = _, 
                r.index = 1, r.value = [ r.location, null ], r.codename = r.name, r.name = this._nameMap[r.codename] ? this._nameMap[r.codename] : r.codename, 
                this._paramsMap[r.name] = r, r._this = this, r.uploadedValue = [], r.type) {
                  case 5124:
                    r.fun = r.isArray ? this._uniform1iv : this._uniform1i;
                    break;

                  case 5126:
                    r.fun = r.isArray ? this._uniform1fv : this._uniform1f;
                    break;

                  case 35664:
                    r.fun = r.isArray ? this._uniform_vec2v : this._uniform_vec2;
                    break;

                  case 35665:
                    r.fun = r.isArray ? this._uniform_vec3v : this._uniform_vec3;
                    break;

                  case 35666:
                    r.fun = r.isArray ? this._uniform_vec4v : this._uniform_vec4;
                    break;

                  case 35678:
                    r.fun = this._uniform_sampler2D;
                    break;

                  case 35680:
                    r.fun = this._uniform_samplerCube;
                    break;

                  case 35676:
                    r.glfun = i.uniformMatrix4fv, r.fun = this._uniformMatrix4fv;
                    break;

                  case 35670:
                    r.fun = this._uniform1i;
                    break;

                  case 35674:
                  case 35675:
                  default:
                    throw new Error("compile shader err!");
                }
            }
        }, i.getUniform = function(t) {
            return this._paramsMap[t];
        }, i._uniform1f = function(t, e) {
            var i = t.uploadedValue;
            return i[0] !== e ? (mt.mainContext.uniform1f(t.location, i[0] = e), 1) : 0;
        }, i._uniform1fv = function(t, e) {
            if (e.length < 4) {
                var i = t.uploadedValue;
                return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] || i[3] !== e[3] ? (mt.mainContext.uniform1fv(t.location, e), 
                i[0] = e[0], i[1] = e[1], i[2] = e[2], i[3] = e[3], 1) : 0;
            }
            return mt.mainContext.uniform1fv(t.location, e), 1;
        }, i._uniform_vec2 = function(t, e) {
            var i = t.uploadedValue;
            return i[0] !== e[0] || i[1] !== e[1] ? (mt.mainContext.uniform2f(t.location, i[0] = e[0], i[1] = e[1]), 
            1) : 0;
        }, i._uniform_vec2v = function(t, e) {
            if (e.length < 2) {
                var i = t.uploadedValue;
                return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] || i[3] !== e[3] ? (mt.mainContext.uniform2fv(t.location, e), 
                i[0] = e[0], i[1] = e[1], i[2] = e[2], i[3] = e[3], 1) : 0;
            }
            return mt.mainContext.uniform2fv(t.location, e), 1;
        }, i._uniform_vec3 = function(t, e) {
            var i = t.uploadedValue;
            return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] ? (mt.mainContext.uniform3f(t.location, i[0] = e[0], i[1] = e[1], i[2] = e[2]), 
            1) : 0;
        }, i._uniform_vec3v = function(t, e) {
            return mt.mainContext.uniform3fv(t.location, e), 1;
        }, i._uniform_vec4 = function(t, e) {
            var i = t.uploadedValue;
            return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] || i[3] !== e[3] ? (mt.mainContext.uniform4f(t.location, i[0] = e[0], i[1] = e[1], i[2] = e[2], i[3] = e[3]), 
            1) : 0;
        }, i._uniform_vec4v = function(t, e) {
            return mt.mainContext.uniform4fv(t.location, e), 1;
        }, i._uniformMatrix2fv = function(t, e) {
            return mt.mainContext.uniformMatrix2fv(t.location, !1, e), 1;
        }, i._uniformMatrix3fv = function(t, e) {
            return mt.mainContext.uniformMatrix3fv(t.location, !1, e), 1;
        }, i._uniformMatrix4fv = function(t, e) {
            return mt.mainContext.uniformMatrix4fv(t.location, !1, e), 1;
        }, i._uniform1i = function(t, e) {
            var i = t.uploadedValue;
            return i[0] !== e ? (mt.mainContext.uniform1i(t.location, i[0] = e), 1) : 0;
        }, i._uniform1iv = function(t, e) {
            return mt.mainContext.uniform1iv(t.location, e), 1;
        }, i._uniform_ivec2 = function(t, e) {
            var i = t.uploadedValue;
            return i[0] !== e[0] || i[1] !== e[1] ? (mt.mainContext.uniform2i(t.location, i[0] = e[0], i[1] = e[1]), 
            1) : 0;
        }, i._uniform_ivec2v = function(t, e) {
            return mt.mainContext.uniform2iv(t.location, e), 1;
        }, i._uniform_vec3i = function(t, e) {
            var i = t.uploadedValue;
            return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] ? (mt.mainContext.uniform3i(t.location, i[0] = e[0], i[1] = e[1], i[2] = e[2]), 
            1) : 0;
        }, i._uniform_vec3vi = function(t, e) {
            return mt.mainContext.uniform3iv(t.location, e), 1;
        }, i._uniform_vec4i = function(t, e) {
            var i = t.uploadedValue;
            return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] || i[3] !== e[3] ? (mt.mainContext.uniform4i(t.location, i[0] = e[0], i[1] = e[1], i[2] = e[2], i[3] = e[3]), 
            1) : 0;
        }, i._uniform_vec4vi = function(t, e) {
            return mt.mainContext.uniform4iv(t.location, e), 1;
        }, i._uniform_sampler2D = function(t, e) {
            var i = mt.mainContext, r = t.uploadedValue;
            return null == r[0] ? (r[0] = this._curActTexIndex, i.uniform1i(t.location, this._curActTexIndex), 
            ot.activeTexture(i, 33984 + this._curActTexIndex), ot.bindTexture(i, 3553, e), this._curActTexIndex++, 
            1) : (ot.activeTexture(i, 33984 + r[0]), ot.bindTexture(i, 3553, e), 0);
        }, i._uniform_samplerCube = function(t, e) {
            var i = mt.mainContext, r = t.uploadedValue;
            return null == r[0] ? (r[0] = this._curActTexIndex, i.uniform1i(t.location, this._curActTexIndex), 
            ot.activeTexture(i, 33984 + this._curActTexIndex), ot.bindTexture(i, 34067, e), 
            this._curActTexIndex++, 1) : (ot.activeTexture(i, 33984 + r[0]), ot.bindTexture(i, 34067, e), 
            0);
        }, i._noSetValue = function(t) {
            console.log("no....:" + t.name);
        }, i.uploadOne = function(t, e) {
            ot.useProgram(mt.mainContext, this._program);
            var i = this._paramsMap[t];
            i.fun.call(this, i, e);
        }, i.uploadTexture2D = function(t) {
            var e = ot;
            e._activeTextures[0] !== t && (e.bindTexture(mt.mainContext, e.TEXTURE_2D, t), e._activeTextures[0] = t);
        }, i.upload = function(t, e) {
            ee.activeShader = ee.bindShader = this;
            var i = mt.mainContext;
            ot.useProgram(i, this._program), this._reCompile ? (e = this._params, this._reCompile = !1) : e = e || this._params;
            for (var r, _, a = e.length, n = 0, s = 0; s < a; s++) null !== (_ = t[(r = e[s]).name]) && (n += r.fun.call(this, r, _));
            F.shaderCall += n;
        }, i.uploadArray = function(t, e, i) {
            ee.activeShader = this, ee.bindShader = this, ot.useProgram(mt.mainContext, this._program);
            this._params;
            for (var r, _, a = 0, n = e - 2; n >= 0; n -= 2) (_ = this._paramsMap[t[n]]) && null != (r = t[n + 1]) && (i && i[_.name] && i[_.name].bind(), 
            a += _.fun.call(this, _, r));
            F.shaderCall += a;
        }, i.getParams = function() {
            return this._params;
        }, i.setAttributesLocation = function(t) {
            this._attribInfo = t;
        }, e.getShader = function(t) {
            return e.sharders[t];
        }, e.create = function(t, i, r, _, a) {
            return new e(t, i, r, _, a);
        }, e.withCompile = function(t, i, r, _) {
            if (r && e.sharders[r]) return e.sharders[r];
            var a = e._preCompileShader[2e-4 * t];
            if (!a) throw new Error("withCompile shader err!" + t);
            return a.createShader(i, r, _, null);
        }, e.withCompile2D = function(t, i, r, _, a, n) {
            if (_ && e.sharders[_]) return e.sharders[_];
            var s = e._preCompileShader[2e-4 * t + i];
            if (!s) throw new Error("withCompile shader err!" + t + " " + i);
            return s.createShader(r, _, a, n);
        }, e.addInclude = function(t, e) {
            st.addInclude(t, e);
        }, e.preCompile = function(t, i, r, _) {
            e._preCompileShader[2e-4 * t] = new st(i, r, _);
        }, e.preCompile2D = function(t, i, r, _, a) {
            e._preCompileShader[2e-4 * t + i] = new st(r, _, a);
        }, e._createShader = function(t, e, i) {
            var r = t.createShader(i);
            return t.shaderSource(r, e), t.compileShader(r), t.getShaderParameter(r, 35713) ? r : (console.log(t.getShaderInfoLog(r)), 
            null);
        }, e._count = 0, e._preCompileShader = {}, e.SHADERNAME2ID = 2e-4, e.sharders = new Array(32), 
        r(e, [ "nameKey", function() {
            return this.nameKey = new w();
        } ]), e;
    }(), le = function(t) {
        function e(t, i, r, _) {
            this._mgrKey = 0, void 0 === r && (r = 0), void 0 === _ && (_ = 0), e.__super.call(this, r, !1), 
            this._glTextureType = 3553, this._width = t, this._height = i, this._depthStencilFormat = _, 
            this._create(t, i);
        }
        _(e, "laya.webgl.resource.RenderTexture2D", se);
        var i = e.prototype;
        return i.getIsReady = function() {
            return !0;
        }, i._create = function(t, e) {
            var i = j.instance;
            this._frameBuffer = i.createFramebuffer(), ot.bindTexture(i, this._glTextureType, this._glTexture);
            var r = this._getGLFormat();
            if (i.texImage2D(this._glTextureType, 0, r, t, e, 0, r, 5121, null), this._setGPUMemory(t * e * 4), 
            i.bindFramebuffer(36160, this._frameBuffer), i.framebufferTexture2D(36160, 36064, 3553, this._glTexture, 0), 
            3 !== this._depthStencilFormat) switch (this._depthStencilBuffer = i.createRenderbuffer(), 
            i.bindRenderbuffer(36161, this._depthStencilBuffer), this._depthStencilFormat) {
              case 0:
                i.renderbufferStorage(36161, 33189, t, e), i.framebufferRenderbuffer(36160, 36096, 36161, this._depthStencilBuffer);
                break;

              case 1:
                i.renderbufferStorage(36161, 36168, t, e), i.framebufferRenderbuffer(36160, 36128, 36161, this._depthStencilBuffer);
                break;

              case 2:
                i.renderbufferStorage(36161, 34041, t, e), i.framebufferRenderbuffer(36160, 33306, 36161, this._depthStencilBuffer);
            }
            i.bindFramebuffer(36160, null), i.bindRenderbuffer(36161, null), this._setWarpMode(10242, this._wrapModeU), 
            this._setWarpMode(10243, this._wrapModeV), this._setFilterMode(this._filterMode), 
            this._setAnisotropy(this._anisoLevel), this._readyed = !0, this._activeResource();
        }, i.generateMipmap = function() {
            this._isPot(this.width) && this._isPot(this.height) ? (this._mipmap = !0, j.instance.generateMipmap(this._glTextureType), 
            this._setFilterMode(this._filterMode), this._setGPUMemory(this.width * this.height * 4 * (1 + 1 / 3))) : (this._mipmap = !1, 
            this._setGPUMemory(this.width * this.height * 4));
        }, i.start = function() {
            var t = j.instance;
            j.instance.bindFramebuffer(36160, this._frameBuffer), e._currentActive = this, this._readyed = !0, 
            t.viewport(0, 0, this._width, this._height), this._lastWidth = bt.width, this._lastHeight = bt.height, 
            bt.width = this._width, bt.height = this._height, ee.activeShader = null;
        }, i.end = function() {
            j.instance.bindFramebuffer(36160, null), e._currentActive = null, this._readyed = !0;
        }, i.restore = function() {
            var t = j.instance;
            this._lastRT != e._currentActive && (j.instance.bindFramebuffer(36160, this._lastRT ? this._lastRT._frameBuffer : null), 
            e._currentActive = this._lastRT), this._readyed = !0, t.viewport(0, 0, this._lastWidth, this._lastHeight), 
            bt.width = this._lastWidth, bt.height = this._lastHeight, ee.activeShader = null;
        }, i.clear = function(t, e, i, r) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === r && (r = 1);
            var _ = j.instance;
            _.clearColor(t, e, i, r);
            var a = 16384;
            switch (this._depthStencilFormat) {
              case 33189:
                a |= 256;
                break;

              case 36168:
                a |= 1024;
                break;

              case 34041:
                a |= 256, a |= 1024;
            }
            _.clear(a);
        }, i.getData = function(t, e, i, r) {
            var _ = j.instance;
            _.bindFramebuffer(36160, this._frameBuffer);
            if (!(36053 === _.checkFramebufferStatus(36160))) return _.bindFramebuffer(36160, null), 
            null;
            var a = new Uint8Array(this._width * this._height * 4), n = this._getGLFormat();
            return _.readPixels(t, e, i, r, n, 5121, a), _.bindFramebuffer(36160, null), a;
        }, i.recycle = function() {}, i._disposeResource = function() {
            if (this._frameBuffer) {
                var t = j.instance;
                t.deleteTexture(this._glTexture), t.deleteFramebuffer(this._frameBuffer), t.deleteRenderbuffer(this._depthStencilBuffer), 
                this._glTexture = null, this._frameBuffer = null, this._depthStencilBuffer = null, 
                this._setGPUMemory(0);
            }
        }, a(0, i, "depthStencilFormat", function() {
            return this._depthStencilFormat;
        }), a(0, i, "defaulteTexture", function() {
            return ue.grayTexture;
        }), a(0, i, "sourceWidth", function() {
            return this._width;
        }), a(0, i, "sourceHeight", function() {
            return this._height;
        }), a(0, i, "offsetX", function() {
            return 0;
        }), a(0, i, "offsetY", function() {
            return 0;
        }), a(1, e, "currentActive", function() {
            return e._currentActive;
        }, laya.webgl.resource.BaseTexture._$SET_currentActive), e.pushRT = function() {
            e.rtStack.push({
                rt: e._currentActive,
                w: bt.width,
                h: bt.height
            });
        }, e.popRT = function() {
            var t = j.instance, i = e.rtStack.pop();
            i && (e._currentActive != i.rt && (j.instance.bindFramebuffer(36160, i.rt ? i.rt._frameBuffer : null), 
            e._currentActive = i.rt), t.viewport(0, 0, i.w, i.h), bt.width = i.w, bt.height = i.h);
        }, e._currentActive = null, e.rtStack = [], r(e, [ "defuv", function() {
            return this.defuv = [ 0, 0, 1, 0, 1, 1, 0, 1 ];
        }, "flipyuv", function() {
            return this.flipyuv = [ 0, 1, 1, 1, 1, 0, 0, 0 ];
        } ]), e;
    }(), ue = function(t) {
        function e(t, i, r, _, a) {
            void 0 === t && (t = 0), void 0 === i && (i = 0), void 0 === r && (r = 1), void 0 === _ && (_ = !0), 
            void 0 === a && (a = !1), e.__super.call(this, r, _), this._glTextureType = 3553, 
            this._width = t, this._height = i, this._canRead = a, this._setWarpMode(10242, this._wrapModeU), 
            this._setWarpMode(10243, this._wrapModeV), u.is2DPixelArtGame && (this._filterMode = 0), 
            this._setFilterMode(this._filterMode), this._setAnisotropy(this._anisoLevel);
        }
        _(e, "laya.webgl.resource.Texture2D", se);
        var r = e.prototype;
        return r._calcualatesCompressedDataSize = function(t, e, i) {
            switch (t) {
              case 3:
              case 5:
                return (e + 3 >> 2) * (i + 3 >> 2) * 8;

              case 4:
                return (e + 3 >> 2) * (i + 3 >> 2) * 16;

              case 11:
              case 12:
                return Math.floor((Math.max(e, 8) * Math.max(i, 8) * 4 + 7) / 8);

              case 9:
              case 10:
                return Math.floor((Math.max(e, 16) * Math.max(i, 8) * 2 + 7) / 8);

              default:
                return 0;
            }
        }, r._pharseDDS = function(t) {
            var e = new Int32Array(t, 0, 31);
            if (542327876 != e[0]) throw "Invalid magic number in DDS header";
            if (!(4 & e[20])) throw "Unsupported format, must contain a FourCC code";
            var i = e[21];
            switch (this._format) {
              case 3:
                if (827611204 !== i) throw "the FourCC code is not same with texture format.";
                break;

              case 4:
                if (894720068 !== i) throw "the FourCC code is not same with texture format.";
                break;

              default:
                throw "unknown texture format.";
            }
            var r = 1;
            if (131072 & e[2]) {
                if (r = Math.max(1, e[7]), !this._mipmap) throw "the mipmap is not same with Texture2D.";
            } else if (this._mipmap) throw "the mipmap is not same with Texture2D.";
            var _ = e[4], a = e[3];
            this._width = _, this._height = a;
            var n = e[1] + 4;
            this._upLoadCompressedTexImage2D(t, _, a, r, n, 0);
        }, r._pharseKTX = function(t) {
            var e = new Uint8Array(t, 0, 12);
            if (171 != e[0] || 75 != e[1] || 84 != e[2] || 88 != e[3] || 32 != e[4] || 49 != e[5] || 49 != e[6] || 187 != e[7] || 13 != e[8] || 10 != e[9] || 26 != e[10] || 10 != e[11]) throw "Invalid fileIdentifier in KTX header";
            var i = new Int32Array(e.buffer, e.length, 13), r = i[4], _ = this._getGLFormat();
            switch (this._format) {
              case 5:
                if (r !== _) throw "the format  is not same with texture format FORMAT_ETC1RGB.";
                break;

              default:
                throw "unknown texture format.";
            }
            var a = i[11], n = i[6], s = i[7];
            this._width = n, this._height = s;
            var o = 64 + i[12];
            this._upLoadCompressedTexImage2D(t, n, s, a, o, 4);
        }, r._pharsePVR = function(t) {
            var e = new Int32Array(t, 0, 13);
            if (55727696 != e[0]) throw "Invalid magic number in PVR header";
            var i = e[2];
            switch (this._format) {
              case 5:
                if (6 !== i) throw "the format  is not same with texture format FORMAT_ETC1RGB.";
                break;

              case 9:
                if (0 !== i) throw "the format  is not same with texture format FORMAT_PVRTCRGB_2BPPV.";
                break;

              case 11:
                if (2 !== i) throw "the format  is not same with texture format FORMAT_PVRTCRGB_4BPPV.";
                break;

              case 10:
                if (1 !== i) throw "the format  is not same with texture format FORMAT_PVRTCRGBA_2BPPV.";
                break;

              case 12:
                if (3 !== i) throw "the format  is not same with texture format FORMAT_PVRTCRGBA_4BPPV.";
                break;

              default:
                throw "unknown texture format.";
            }
            var r = e[11], _ = e[7], a = e[6];
            this._width = _, this._height = a;
            var n = e[12] + 52;
            this._upLoadCompressedTexImage2D(t, _, a, r, n, 0);
        }, r._upLoadCompressedTexImage2D = function(t, e, i, r, _, a) {
            var n = j.instance, s = this._glTextureType;
            ot.bindTexture(n, s, this._glTexture);
            for (var o = this._getGLFormat(), h = _, l = 0; l < r; l++) {
                h += a;
                var u = this._calcualatesCompressedDataSize(this._format, e, i), c = new Uint8Array(t, h, u);
                n.compressedTexImage2D(s, l, o, e, i, 0, c), e >>= 1, i >>= 1, h += u;
            }
            var f = h;
            this._setGPUMemory(f), this._readyed = !0, this._activeResource();
        }, r.loadImageSource = function(t, e) {
            void 0 === e && (e = !1);
            var i = t.width, r = t.height;
            this._width = i, this._height = r, this._setWarpMode(10242, this._wrapModeU), this._setWarpMode(10243, this._wrapModeV), 
            this._setFilterMode(this._filterMode);
            var _ = j.instance;
            ot.bindTexture(_, this._glTextureType, this._glTexture);
            var a = this._getGLFormat();
            M.isConchApp ? (t.setPremultiplyAlpha(e), _.texImage2D(this._glTextureType, 0, 6408, 6408, 5121, t)) : (e && _.pixelStorei(37441, !0), 
            _.texImage2D(this._glTextureType, 0, a, a, 5121, t), e && _.pixelStorei(37441, !1)), 
            this._mipmap && this._isPot(i) && this._isPot(r) ? (_.generateMipmap(this._glTextureType), 
            this._setGPUMemory(i * r * 4 * (1 + 1 / 3))) : this._setGPUMemory(i * r * 4), this._canRead && (M.isConchApp ? this._pixels = new Uint8Array(t._nativeObj.getImageData(0, 0, i, r)) : (o.canvas.size(i, r), 
            o.canvas.clear(), o.context.drawImage(t, 0, 0, i, r), this._pixels = new Uint8Array(o.context.getImageData(0, 0, i, r).data.buffer))), 
            this._readyed = !0, this._activeResource();
        }, r.setPixels = function(t, e) {
            if (void 0 === e && (e = 0), !t) throw "Texture2D:pixels can't be null.";
            var i = this._width, r = this._height, _ = j.instance, a = this._glTextureType;
            ot.bindTexture(_, a, this._glTexture);
            var n = this._getGLFormat();
            _.texImage2D(a, e, n, i, r, 0, n, 5121, t), this._mipmap && this._isPot(i) && this._isPot(r) ? (_.generateMipmap(a), 
            this._setGPUMemory(i * r * 4 * (1 + 1 / 3))) : this._setGPUMemory(i * r * 4), this._canRead && (this._pixels = t), 
            this._readyed = !0, this._activeResource();
        }, r.setCompressData = function(t) {
            switch (this._format) {
              case 3:
              case 4:
                this._pharseDDS(t);
                break;

              case 5:
                this._pharseKTX(t);
                break;

              case 9:
              case 10:
              case 11:
              case 12:
                this._pharsePVR(t);
                break;

              default:
                throw "Texture2D:unkonwn format.";
            }
        }, r._recoverResource = function() {}, r.getPixels = function() {
            if (this._canRead) return this._pixels;
            throw new Error("Texture2D: must set texture canRead is true.");
        }, a(0, r, "defaulteTexture", function() {
            return laya.webgl.resource.Texture2D.grayTexture;
        }), e.__init__ = function() {
            var t = new Uint8Array(3);
            t[0] = 128, t[1] = 128, t[2] = 128, (e.grayTexture = new e(1, 1, 0, !1, !1)).setPixels(t), 
            e.grayTexture.lock = !0;
        }, e._parse = function(t, i, r) {
            var _ = r ? new e(r[0], r[1], r[2], r[3], r[4]) : new e(0, 0);
            switch (i && (_.wrapModeU = i.wrapModeU, _.wrapModeV = i.wrapModeV, _.filterMode = i.filterMode, 
            _.anisoLevel = i.anisoLevel), _._format) {
              case 0:
              case 1:
                _.loadImageSource(t);
                break;

              case 3:
              case 4:
              case 5:
              case 9:
              case 10:
              case 11:
              case 12:
                _.setCompressData(t);
                break;

              default:
                throw "Texture2D:unkonwn format.";
            }
            return _;
        }, e.load = function(t, e) {
            i.loader.create(t, e, null, "TEXTURE2D");
        }, e.grayTexture = null, e;
    }(), ce = function(t) {
        function e(t, i, r, _, a) {
            this._params2dQuick2 = null, this._shaderValueWidth = 0, this._shaderValueHeight = 0, 
            e.__super.call(this, t, i, r, _, a);
        }
        _(e, "laya.webgl.shader.d2.Shader2X", t);
        var i = e.prototype;
        return i._disposeResource = function() {
            t.prototype._disposeResource.call(this), this._params2dQuick2 = null;
        }, i.upload2dQuick2 = function(t) {
            this.upload(t, this._params2dQuick2 || this._make2dQuick2());
        }, i._make2dQuick2 = function() {
            if (!this._params2dQuick2) {
                this._params2dQuick2 = [];
                for (var t, e = this._params, i = 0, r = e.length; i < r; i++) "size" !== (t = e[i]).name && this._params2dQuick2.push(t);
            }
            return this._params2dQuick2;
        }, e.create = function(t, i, r, _, a) {
            return new e(t, i, r, _, a);
        }, e;
    }(he);
    i.__init([ wt, pt, Gt ]);
}(window, document, Laya);