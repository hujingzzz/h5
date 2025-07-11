!function(t, i, e) {
    e.un, e.uns;
    var a = e.static, r = e.class, n = e.getset, s = (e.__newvec, laya.webgl.canvas.BlendMode), o = (laya.resource.Context, 
    laya.display.cmd.DrawParticleCmd), l = (laya.events.Event, laya.display.Graphics, 
    laya.resource.HTMLCanvas), h = laya.utils.Handler, c = (laya.net.Loader, laya.maths.MathUtil), u = laya.maths.Matrix, m = laya.webgl.utils.MeshParticle2D, d = laya.renders.Render, _ = (laya.renders.RenderSprite, 
    laya.webgl.utils.RenderState2D), p = laya.webgl.shader.Shader, f = laya.display.Sprite, v = laya.utils.Stat, y = laya.resource.Texture, g = laya.utils.Utils, C = laya.webgl.shader.d2.value.Value2D, x = laya.webgl.WebGL, P = (laya.webgl.WebGLContext, 
    function() {
        function t() {
            this.textureName = null, this.textureCount = 1, this.maxPartices = 100, this.duration = 1, 
            this.ageAddScale = 0, this.emitterVelocitySensitivity = 1, this.minStartSize = 100, 
            this.maxStartSize = 100, this.minEndSize = 100, this.maxEndSize = 100, this.minHorizontalVelocity = 0, 
            this.maxHorizontalVelocity = 0, this.minVerticalVelocity = 0, this.maxVerticalVelocity = 0, 
            this.endVelocity = 1, this.minRotateSpeed = 0, this.maxRotateSpeed = 0, this.minStartRadius = 0, 
            this.maxStartRadius = 0, this.minEndRadius = 0, this.maxEndRadius = 0, this.minHorizontalStartRadian = 0, 
            this.maxHorizontalStartRadian = 0, this.minVerticalStartRadian = 0, this.maxVerticalStartRadian = 0, 
            this.useEndRadian = !0, this.minHorizontalEndRadian = 0, this.maxHorizontalEndRadian = 0, 
            this.minVerticalEndRadian = 0, this.maxVerticalEndRadian = 0, this.colorComponentInter = !1, 
            this.disableColor = !1, this.blendState = 0, this.emitterType = "null", this.emissionRate = 0, 
            this.sphereEmitterRadius = 1, this.sphereEmitterVelocity = 0, this.sphereEmitterVelocityAddVariance = 0, 
            this.ringEmitterRadius = 30, this.ringEmitterVelocity = 0, this.ringEmitterVelocityAddVariance = 0, 
            this.ringEmitterUp = 2, this.gravity = new Float32Array([ 0, 0, 0 ]), this.minStartColor = new Float32Array([ 1, 1, 1, 1 ]), 
            this.maxStartColor = new Float32Array([ 1, 1, 1, 1 ]), this.minEndColor = new Float32Array([ 1, 1, 1, 1 ]), 
            this.maxEndColor = new Float32Array([ 1, 1, 1, 1 ]), this.pointEmitterPosition = new Float32Array([ 0, 0, 0 ]), 
            this.pointEmitterPositionVariance = new Float32Array([ 0, 0, 0 ]), this.pointEmitterVelocity = new Float32Array([ 0, 0, 0 ]), 
            this.pointEmitterVelocityAddVariance = new Float32Array([ 0, 0, 0 ]), this.boxEmitterCenterPosition = new Float32Array([ 0, 0, 0 ]), 
            this.boxEmitterSize = new Float32Array([ 0, 0, 0 ]), this.boxEmitterVelocity = new Float32Array([ 0, 0, 0 ]), 
            this.boxEmitterVelocityAddVariance = new Float32Array([ 0, 0, 0 ]), this.sphereEmitterCenterPosition = new Float32Array([ 0, 0, 0 ]), 
            this.ringEmitterCenterPosition = new Float32Array([ 0, 0, 0 ]), this.positionVariance = new Float32Array([ 0, 0, 0 ]);
        }
        return r(t, "laya.particle.ParticleSetting"), t.checkSetting = function(i) {
            var e;
            for (e in t._defaultSetting) i.hasOwnProperty(e) || (i[e] = t._defaultSetting[e]);
            i.endVelocity = +i.endVelocity, i.gravity[0] = +i.gravity[0], i.gravity[1] = +i.gravity[1], 
            i.gravity[2] = +i.gravity[2];
        }, a(t, [ "_defaultSetting", function() {
            return this._defaultSetting = new t();
        } ]), t;
    }()), E = function() {
        function t() {
            this.position = null, this.velocity = null, this.startColor = null, this.endColor = null, 
            this.sizeRotation = null, this.radius = null, this.radian = null, this.durationAddScale = NaN, 
            this.time = NaN;
        }
        return r(t, "laya.particle.ParticleData"), t.Create = function(i, e, a, r) {
            var n = new t();
            n.position = e, c.scaleVector3(a, i.emitterVelocitySensitivity, t._tempVelocity);
            var s = c.lerp(i.minHorizontalVelocity, i.maxHorizontalVelocity, Math.random()), o = Math.random() * Math.PI * 2;
            t._tempVelocity[0] += s * Math.cos(o), t._tempVelocity[2] += s * Math.sin(o), t._tempVelocity[1] += c.lerp(i.minVerticalVelocity, i.maxVerticalVelocity, Math.random()), 
            n.velocity = t._tempVelocity, n.startColor = t._tempStartColor, n.endColor = t._tempEndColor;
            var l = 0;
            if (i.disableColor) {
                for (l = 0; l < 3; l++) n.startColor[l] = 1, n.endColor[l] = 1;
                n.startColor[l] = c.lerp(i.minStartColor[l], i.maxStartColor[l], Math.random()), 
                n.endColor[l] = c.lerp(i.minEndColor[l], i.maxEndColor[l], Math.random());
            } else if (i.colorComponentInter) for (l = 0; l < 4; l++) n.startColor[l] = c.lerp(i.minStartColor[l], i.maxStartColor[l], Math.random()), 
            n.endColor[l] = c.lerp(i.minEndColor[l], i.maxEndColor[l], Math.random()); else c.lerpVector4(i.minStartColor, i.maxStartColor, Math.random(), n.startColor), 
            c.lerpVector4(i.minEndColor, i.maxEndColor, Math.random(), n.endColor);
            n.sizeRotation = t._tempSizeRotation;
            var h = Math.random();
            n.sizeRotation[0] = c.lerp(i.minStartSize, i.maxStartSize, h), n.sizeRotation[1] = c.lerp(i.minEndSize, i.maxEndSize, h), 
            n.sizeRotation[2] = c.lerp(i.minRotateSpeed, i.maxRotateSpeed, Math.random()), n.radius = t._tempRadius;
            var u = Math.random();
            n.radius[0] = c.lerp(i.minStartRadius, i.maxStartRadius, u), n.radius[1] = c.lerp(i.minEndRadius, i.maxEndRadius, u), 
            n.radian = t._tempRadian, n.radian[0] = c.lerp(i.minHorizontalStartRadian, i.maxHorizontalStartRadian, Math.random()), 
            n.radian[1] = c.lerp(i.minVerticalStartRadian, i.maxVerticalStartRadian, Math.random());
            var m = i.useEndRadian;
            return n.radian[2] = m ? c.lerp(i.minHorizontalEndRadian, i.maxHorizontalEndRadian, Math.random()) : n.radian[0], 
            n.radian[3] = m ? c.lerp(i.minVerticalEndRadian, i.maxVerticalEndRadian, Math.random()) : n.radian[1], 
            n.durationAddScale = i.ageAddScale * Math.random(), n.time = r, n;
        }, a(t, [ "_tempVelocity", function() {
            return this._tempVelocity = new Float32Array(3);
        }, "_tempStartColor", function() {
            return this._tempStartColor = new Float32Array(4);
        }, "_tempEndColor", function() {
            return this._tempEndColor = new Float32Array(4);
        }, "_tempSizeRotation", function() {
            return this._tempSizeRotation = new Float32Array(3);
        }, "_tempRadius", function() {
            return this._tempRadius = new Float32Array(2);
        }, "_tempRadian", function() {
            return this._tempRadian = new Float32Array(4);
        } ]), t;
    }(), R = function() {
        function t() {
            this.settings = null, this.texture = null;
        }
        r(t, "laya.particle.ParticleTemplateBase");
        return t.prototype.addParticleArray = function(t, i) {}, t;
    }(), S = function() {
        function t() {}
        return r(t, "laya.particle.particleUtils.PicTool"), t.getCanvasPic = function(t, i) {
            t = t.bitmap;
            var e = new l(), a = e.getContext("2d");
            e.size(t.width, t.height);
            var r = i >> 16 & 255, n = i >> 8 & 255, s = 255 & i;
            if (d.isConchApp && a.setFilter(r / 255, n / 255, s / 255, 0), a.drawImage(t.source || t._source, 0, 0), 
            !d.isConchApp) {
                for (var o = a.getImageData(0, 0, e.width, e.height), h = o.data, c = 0, u = h.length; c < u; c += 4) 0 != h[c + 3] && (h[c] = r, 
                h[c + 1] = n, h[c + 2] = s);
                a.putImageData(o, 0, 0);
            }
            return e;
        }, t.getRGBPic = function(i) {
            return [ new y(t.getCanvasPic(i, 16711680)), new y(t.getCanvasPic(i, 65280)), new y(t.getCanvasPic(i, 255)) ];
        }, t;
    }(), A = function() {
        function t() {
            this._frameTime = 0, this._emissionRate = 60, this._emissionTime = 0, this.minEmissionTime = 1 / 60, 
            this._particleTemplate = null;
        }
        r(t, "laya.particle.emitter.EmitterBase");
        var i = t.prototype;
        return i.start = function(t) {
            void 0 === t && (t = Number.MAX_VALUE), 0 != this._emissionRate && (this._emissionTime = t);
        }, i.stop = function() {
            this._emissionTime = 0;
        }, i.clear = function() {
            this._emissionTime = 0;
        }, i.emit = function() {}, i.advanceTime = function(t) {
            if (void 0 === t && (t = 1), this._emissionTime -= t, !(this._emissionTime < 0 || (this._frameTime += t, 
            this._frameTime < this.minEmissionTime))) for (;this._frameTime > this.minEmissionTime; ) this._frameTime -= this.minEmissionTime, 
            this.emit();
        }, n(0, i, "particleTemplate", null, function(t) {
            this._particleTemplate = t;
        }), n(0, i, "emissionRate", function() {
            return this._emissionRate;
        }, function(t) {
            t <= 0 || (this._emissionRate = t, t > 0 && (this.minEmissionTime = 1 / t));
        }), t;
    }(), w = function() {
        function t() {
            this.maxIndex = 0, this.cmds = null, this.id = 0;
        }
        r(t, "laya.particle.particleUtils.CMDParticle");
        return t.prototype.setCmds = function(t) {
            this.cmds = t, this.maxIndex = t.length - 1;
        }, t;
    }(), V = (function() {
        function t(t, i, e) {
            this._templet = null, this._timeBetweenParticles = NaN, this._previousPosition = null, 
            this._timeLeftOver = 0, this._tempVelocity = new Float32Array([ 0, 0, 0 ]), this._tempPosition = new Float32Array([ 0, 0, 0 ]), 
            this._templet = t, this._timeBetweenParticles = 1 / i, this._previousPosition = e;
        }
        r(t, "laya.particle.ParticleEmitter");
        t.prototype.update = function(t, i) {
            if ((t /= 1e3) > 0) {
                c.subtractVector3(i, this._previousPosition, this._tempVelocity), c.scaleVector3(this._tempVelocity, 1 / t, this._tempVelocity);
                for (var e = this._timeLeftOver + t, a = -this._timeLeftOver; e > this._timeBetweenParticles; ) a += this._timeBetweenParticles, 
                e -= this._timeBetweenParticles, c.lerpVector3(this._previousPosition, i, a / t, this._tempPosition), 
                this._templet.addParticleArray(this._tempPosition, this._tempVelocity);
                this._timeLeftOver = e;
            }
            this._previousPosition[0] = i[0], this._previousPosition[1] = i[1], this._previousPosition[2] = i[2];
        };
    }(), function() {
        function t() {
            this.u_Duration = NaN, this.u_EndVelocity = NaN, this.u_Gravity = null, this.a_Position = null, 
            this.a_Velocity = null, this.a_StartColor = null, this.a_EndColor = null, this.a_SizeRotation = null, 
            this.a_Radius = null, this.a_Radian = null, this.a_AgeAddScale = NaN, this.gl_Position = null, 
            this.v_Color = null, this.oSize = NaN, this._color = new Float32Array(4), this._position = new Float32Array(3);
        }
        r(t, "laya.particle.particleUtils.CanvasShader");
        var i = t.prototype;
        return i.getLen = function(t) {
            return Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
        }, i.ComputeParticlePosition = function(t, i, e, a) {
            this._position[0] = t[0], this._position[1] = t[1], this._position[2] = t[2];
            var r = this.getLen(i), n = r * a + (r * this.u_EndVelocity - r) * a * a / 2, s = NaN;
            s = this.getLen(i);
            var o = 0;
            for (3, o = 0; o < 3; o++) this._position[o] = this._position[o] + i[o] / s * n * this.u_Duration, 
            this._position[o] += this.u_Gravity[o] * e * a;
            var l = c.lerp(this.a_Radius[0], this.a_Radius[1], a), h = c.lerp(this.a_Radian[0], this.a_Radian[2], a), u = c.lerp(this.a_Radian[1], this.a_Radian[3], a), m = Math.cos(u) * l;
            return this._position[1] += Math.sin(u) * l, this._position[0] += Math.cos(h) * m, 
            this._position[2] += Math.sin(h) * m, new Float32Array([ this._position[0], this._position[1], 0, 1 ]);
        }, i.ComputeParticleSize = function(t, i, e) {
            return c.lerp(t, i, e);
        }, i.ComputeParticleRotation = function(t, i) {
            return t * i;
        }, i.ComputeParticleColor = function(t, i, e) {
            var a = this._color;
            return c.lerpVector4(t, i, e, a), a[3] = a[3] * e * (1 - e) * (1 - e) * 6.7, a;
        }, i.clamp = function(t, i, e) {
            return t < i ? i : t > e ? e : t;
        }, i.getData = function(t) {
            t *= 1 + this.a_AgeAddScale;
            var i = this.clamp(t / this.u_Duration, 0, 1);
            this.gl_Position = this.ComputeParticlePosition(this.a_Position, this.a_Velocity, t, i);
            var e = this.ComputeParticleSize(this.a_SizeRotation[0], this.a_SizeRotation[1], i), a = this.ComputeParticleRotation(this.a_SizeRotation[2], t);
            this.v_Color = this.ComputeParticleColor(this.a_StartColor, this.a_EndColor, i);
            var r = new u(), n = NaN;
            n = e / this.oSize * 2, r.scale(n, n), r.rotate(a), r.setTranslate(this.gl_Position[0], -this.gl_Position[1]);
            var s = NaN;
            return s = this.v_Color[3], [ this.v_Color, s, r, this.v_Color[0] * s, this.v_Color[1] * s, this.v_Color[2] * s ];
        }, t;
    }()), T = function(t) {
        function i() {
            this.u_CurrentTime = NaN, this.u_Duration = NaN, this.u_Gravity = null, this.u_EndVelocity = NaN, 
            this.u_texture = null, i.__super.call(this, 0, 0);
        }
        r(i, "laya.particle.shader.value.ParticleShaderValue", C);
        return i.prototype.upload = function() {
            var t = this.size;
            t[0] = _.width, t[1] = _.height, this.alpha = this.ALPHA * _.worldAlpha, i.pShader.upload(this);
        }, a(i, [ "pShader", function() {
            return this.pShader = new M();
        } ]), i;
    }(), z = function(t) {
        function i(t) {
            this.setting = null, this._posRange = null, this._canvasTemplate = null, this._emitFun = null, 
            i.__super.call(this), this.template = t;
        }
        r(i, "laya.particle.emitter.Emitter2D", t);
        var e = i.prototype;
        return e.emit = function() {
            t.prototype.emit.call(this), null != this._emitFun && this._emitFun();
        }, e.getRandom = function(t) {
            return (2 * Math.random() - 1) * t;
        }, e.webGLEmit = function() {
            var t = new Float32Array(3);
            t[0] = this.getRandom(this._posRange[0]), t[1] = this.getRandom(this._posRange[1]), 
            t[2] = this.getRandom(this._posRange[2]);
            var i = new Float32Array(3);
            i[0] = 0, i[1] = 0, i[2] = 0, this._particleTemplate.addParticleArray(t, i);
        }, e.canvasEmit = function() {
            var t = new Float32Array(3);
            t[0] = this.getRandom(this._posRange[0]), t[1] = this.getRandom(this._posRange[1]), 
            t[2] = this.getRandom(this._posRange[2]);
            var i = new Float32Array(3);
            i[0] = 0, i[1] = 0, i[2] = 0, this._particleTemplate.addParticleArray(t, i);
        }, n(0, e, "template", function() {
            return this._particleTemplate;
        }, function(t) {
            this._particleTemplate = t, t || (this._emitFun = null, this.setting = null, this._posRange = null), 
            this.setting = t.settings, this._posRange = this.setting.positionVariance, this._particleTemplate instanceof laya.particle.ParticleTemplate2D ? this._emitFun = this.webGLEmit : this._particleTemplate instanceof laya.particle.ParticleTemplateCanvas && (this._canvasTemplate = t, 
            this._emitFun = this.canvasEmit);
        }), i;
    }(A), F = function(t) {
        function i(t) {
            this._vertices = null, this._mesh = null, this._conchMesh = null, this._floatCountPerVertex = 29, 
            this._firstActiveElement = 0, this._firstNewElement = 0, this._firstFreeElement = 0, 
            this._firstRetiredElement = 0, this._currentTime = 0, this._drawCounter = 0, i.__super.call(this), 
            this.settings = t;
        }
        r(i, "laya.particle.ParticleTemplateWebGL", R);
        var e = i.prototype;
        return e.reUse = function(t, i) {
            return 0;
        }, e.initialize = function() {
            var t = 0;
            d.isConchApp ? (this._vertices = this._conchMesh._float32Data, t = m.const_stride / 4) : (this._vertices = this._mesh._vb.getFloat32Array(), 
            t = this._mesh._stride / 4);
            for (var i = 0, e = 0, a = 0; a < this.settings.maxPartices; a++) {
                var r = Math.random(), n = this.settings.textureCount ? 1 / this.settings.textureCount : 1, s = NaN;
                for (s = 0; s < this.settings.textureCount && !(r < s + n); s += n) ;
                this._vertices[i++] = -1, this._vertices[i++] = -1, this._vertices[i++] = 0, this._vertices[i++] = s, 
                i = e += t, this._vertices[i++] = 1, this._vertices[i++] = -1, this._vertices[i++] = 1, 
                this._vertices[i++] = s, i = e += t, this._vertices[i++] = 1, this._vertices[i++] = 1, 
                this._vertices[i++] = 1, this._vertices[i++] = s + n, i = e += t, this._vertices[i++] = -1, 
                this._vertices[i++] = 1, this._vertices[i++] = 0, this._vertices[i++] = s + n, i = e += t;
            }
        }, e.update = function(t) {
            this._currentTime += t / 1e3, this.retireActiveParticles(), this.freeRetiredParticles(), 
            this._firstActiveElement == this._firstFreeElement && (this._currentTime = 0), this._firstRetiredElement == this._firstActiveElement && (this._drawCounter = 0);
        }, e.retireActiveParticles = function() {
            for (var t = this.settings.duration; this._firstActiveElement != this._firstNewElement; ) {
                var i = this._firstActiveElement * this._floatCountPerVertex * 4, e = i + 28, a = this._currentTime - this._vertices[e];
                if ((a *= 1 + this._vertices[i + 27]) + 1e-4 < t) break;
                this._vertices[e] = this._drawCounter, this._firstActiveElement++, this._firstActiveElement >= this.settings.maxPartices && (this._firstActiveElement = 0);
            }
        }, e.freeRetiredParticles = function() {
            for (;this._firstRetiredElement != this._firstActiveElement; ) {
                if (this._drawCounter - this._vertices[this._firstRetiredElement * this._floatCountPerVertex * 4 + 28] < 3) break;
                this._firstRetiredElement++, this._firstRetiredElement >= this.settings.maxPartices && (this._firstRetiredElement = 0);
            }
        }, e.addNewParticlesToVertexBuffer = function() {}, e.addParticleArray = function(t, i) {
            var e = this._firstFreeElement + 1;
            if (e >= this.settings.maxPartices && (e = 0), e !== this._firstRetiredElement) {
                for (var a = E.Create(this.settings, t, i, this._currentTime), r = this._firstFreeElement * this._floatCountPerVertex * 4, n = 0; n < 4; n++) {
                    var s = 0, o = 0;
                    for (s = 0, o = 4; s < 3; s++) this._vertices[r + n * this._floatCountPerVertex + o + s] = a.position[s];
                    for (s = 0, o = 7; s < 3; s++) this._vertices[r + n * this._floatCountPerVertex + o + s] = a.velocity[s];
                    for (s = 0, o = 10; s < 4; s++) this._vertices[r + n * this._floatCountPerVertex + o + s] = a.startColor[s];
                    for (s = 0, o = 14; s < 4; s++) this._vertices[r + n * this._floatCountPerVertex + o + s] = a.endColor[s];
                    for (s = 0, o = 18; s < 3; s++) this._vertices[r + n * this._floatCountPerVertex + o + s] = a.sizeRotation[s];
                    for (s = 0, o = 21; s < 2; s++) this._vertices[r + n * this._floatCountPerVertex + o + s] = a.radius[s];
                    for (s = 0, o = 23; s < 4; s++) this._vertices[r + n * this._floatCountPerVertex + o + s] = a.radian[s];
                    this._vertices[r + n * this._floatCountPerVertex + 27] = a.durationAddScale, this._vertices[r + n * this._floatCountPerVertex + 28] = a.time;
                }
                this._firstFreeElement = e;
            }
        }, i;
    }(), b = function(t) {
        function i(t) {
            this._ready = !1, this.textureList = [], this.particleList = [], this.pX = 0, this.pY = 0, 
            this.activeParticles = [], this.deadParticles = [], this.iList = [], this._maxNumParticles = 0, 
            this.textureWidth = NaN, this.dTextureWidth = NaN, this.colorChange = !0, this.step = 1 / 60, 
            this.canvasShader = new V(), i.__super.call(this), this.settings = t, this._maxNumParticles = t.maxPartices, 
            this.texture = new y(), this.texture.on("ready", this, this._textureLoaded), this.texture.load(t.textureName);
        }
        r(i, "laya.particle.ParticleTemplateCanvas", R);
        var e = i.prototype;
        return e._textureLoaded = function(t) {
            this.setTexture(this.texture), this._ready = !0;
        }, e.clear = function(t) {
            void 0 === t && (t = !0), this.deadParticles.length = 0, this.activeParticles.length = 0, 
            this.textureList.length = 0;
        }, e.setTexture = function(t) {
            this.texture = t, this.textureWidth = t.width, this.dTextureWidth = 1 / this.textureWidth, 
            this.pX = .5 * -t.width, this.pY = .5 * -t.height, this.textureList = i.changeTexture(t, this.textureList), 
            this.particleList.length = 0, this.deadParticles.length = 0, this.activeParticles.length = 0;
        }, e._createAParticleData = function(t, i) {
            this.canvasShader.u_EndVelocity = this.settings.endVelocity, this.canvasShader.u_Gravity = this.settings.gravity, 
            this.canvasShader.u_Duration = this.settings.duration;
            var e;
            e = E.Create(this.settings, t, i, 0), this.canvasShader.a_Position = e.position, 
            this.canvasShader.a_Velocity = e.velocity, this.canvasShader.a_StartColor = e.startColor, 
            this.canvasShader.a_EndColor = e.endColor, this.canvasShader.a_SizeRotation = e.sizeRotation, 
            this.canvasShader.a_Radius = e.radius, this.canvasShader.a_Radian = e.radian, this.canvasShader.a_AgeAddScale = e.durationAddScale, 
            this.canvasShader.oSize = this.textureWidth;
            var a = new w(), r = 0, n = this.settings.duration / (1 + e.durationAddScale), s = [];
            for (r = 0; r < n; r += this.step) s.push(this.canvasShader.getData(r));
            return a.id = this.particleList.length, this.particleList.push(a), a.setCmds(s), 
            a;
        }, e.addParticleArray = function(t, i) {
            if (this._ready) {
                var e;
                this.particleList.length < this._maxNumParticles ? (e = this._createAParticleData(t, i), 
                this.iList[e.id] = 0, this.activeParticles.push(e)) : this.deadParticles.length > 0 && (e = this.deadParticles.pop(), 
                this.iList[e.id] = 0, this.activeParticles.push(e));
            }
        }, e.advanceTime = function(t) {
            if (void 0 === t && (t = 1), this._ready) {
                var i, e = this.activeParticles, a = this.deadParticles, r = 0, n = e.length, s = 0, o = this.iList;
                for (r = n - 1; r > -1; r--) (s = o[(i = e[r]).id]) >= i.maxIndex ? (s = 0, e.splice(r, 1), 
                a.push(i)) : s += 1, o[i.id] = s;
            }
        }, e.render = function(t, i, e) {
            this._ready && (this.activeParticles.length < 1 || this.textureList.length < 2 || (this.settings.disableColor ? this.noColorRender(t, i, e) : this.canvasRender(t, i, e)));
        }, e.noColorRender = function(t, i, e) {
            var a, r, n = this.activeParticles, s = 0, o = n.length, l = NaN, h = this.pX, c = this.pY, u = 2 * -h, m = 2 * -c, d = 0, _ = (this.textureList, 
            this.iList), p = NaN;
            for (t.translate(i, e), p = t.globalAlpha, s = 0; s < o; s++) d = _[(a = n[s]).id], 
            (r = a.cmds[d]) && ((l = r[1]) <= .01 || (t.globalAlpha = p * l, t.drawTextureWithTransform(this.texture, h, c, u, m, r[2], 0, 0, 1, null)));
            t.globalAlpha = p, t.translate(-i, -e);
        }, e.canvasRender = function(t, i, e) {
            var a, r, n, s = this.activeParticles, o = 0, l = s.length, h = this.pX, c = this.pY, u = 2 * -h, m = 2 * -c, d = 0, _ = this.textureList, p = this.iList, f = NaN;
            for (t.translate(i, e), f = t.globalAlpha, n = t.globalCompositeOperation, t.globalCompositeOperation = "lighter", 
            o = 0; o < l; o++) d = p[(a = s[o]).id], (r = a.cmds[d]) && (r[1] <= .01 || (t.save(), 
            t.transformByMatrix(r[2], 0, 0), r[3] > .01 && (t.globalAlpha = f * r[3], t.drawTexture(_[0], h, c, u, m)), 
            r[4] > .01 && (t.globalAlpha = f * r[4], t.drawTexture(_[1], h, c, u, m)), r[5] > .01 && (t.globalAlpha = f * r[5], 
            t.drawTexture(_[2], h, c, u, m)), t.restore()));
            t.globalAlpha = f, t.translate(-i, -e), t.globalCompositeOperation = n;
        }, i.changeTexture = function(t, i, e) {
            return i || (i = []), i.length = 0, e && e.disableColor ? i.push(t, t, t) : g.copyArray(i, S.getRGBPic(t)), 
            i;
        }, i;
    }(), N = function(t) {
        function i(t) {
            this.x = 0, this.y = 0, this._blendFn = null, this._startTime = 0, this._key = {}, 
            this.sv = new T(), i.__super.call(this, t);
            var a = this;
            if (e.loader.load(this.settings.textureName, h.create(null, function(t) {
                a.texture = t;
            })), this.sv.u_Duration = this.settings.duration, this.sv.u_Gravity = this.settings.gravity, 
            this.sv.u_EndVelocity = this.settings.endVelocity, this._blendFn = s.fns[t.blendState], 
            d.isConchApp) {
                var r = m.const_stride * this.settings.maxPartices * 4 * 4;
                this._conchMesh = new ParamData(r, !0);
            } else this._mesh = m.getAMesh(this.settings.maxPartices);
            this.initialize();
        }
        r(i, "laya.particle.ParticleTemplate2D", t);
        var a = i.prototype;
        return e.imps(a, {
            "laya.webgl.submit.ISubmit": !0
        }), a.getRenderType = function() {
            return -111;
        }, a.releaseRender = function() {}, a.addParticleArray = function(i, e) {
            i[0] += this.x, i[1] += this.y, t.prototype.addParticleArray.call(this, i, e);
        }, a.addNewParticlesToVertexBuffer = function() {
            var t = this._mesh._vb;
            t.clear(), t.append(this._vertices);
            var i = 0;
            this._firstNewElement < this._firstFreeElement ? (i = 4 * this._firstNewElement * this._floatCountPerVertex * 4, 
            t.subUpload(i, i, i + 4 * (this._firstFreeElement - this._firstNewElement) * this._floatCountPerVertex * 4)) : (i = 4 * this._firstNewElement * this._floatCountPerVertex * 4, 
            t.subUpload(i, i, i + 4 * (this.settings.maxPartices - this._firstNewElement) * this._floatCountPerVertex * 4), 
            this._firstFreeElement > 0 && (t.setNeedUpload(), t.subUpload(0, 0, 4 * this._firstFreeElement * this._floatCountPerVertex * 4))), 
            this._firstNewElement = this._firstFreeElement;
        }, a.renderSubmit = function() {
            if (this.texture && this.texture.getIsReady()) {
                if (this.update(e.timer._delta), this.sv.u_CurrentTime = this._currentTime, this._firstNewElement != this._firstFreeElement && this.addNewParticlesToVertexBuffer(), 
                this.blend(), this._firstActiveElement != this._firstFreeElement) {
                    var t = x.mainContext;
                    this._mesh.useMesh(t), this.sv.u_texture = this.texture._getSource(), this.sv.upload(), 
                    this._firstActiveElement < this._firstFreeElement ? x.mainContext.drawElements(4, 6 * (this._firstFreeElement - this._firstActiveElement), 5123, 6 * this._firstActiveElement * 2) : (x.mainContext.drawElements(4, 6 * (this.settings.maxPartices - this._firstActiveElement), 5123, 6 * this._firstActiveElement * 2), 
                    this._firstFreeElement > 0 && x.mainContext.drawElements(4, 6 * this._firstFreeElement, 5123, 0)), 
                    v.drawCall++;
                }
                this._drawCounter++;
            }
            return 1;
        }, a.updateParticleForNative = function() {
            this.texture && this.texture.getIsReady() && (this.update(e.timer._delta), this.sv.u_CurrentTime = this._currentTime, 
            this._firstNewElement != this._firstFreeElement && (this._firstNewElement = this._firstFreeElement));
        }, a.getMesh = function() {
            return this._mesh;
        }, a.getConchMesh = function() {
            return this._conchMesh;
        }, a.getFirstNewElement = function() {
            return this._firstNewElement;
        }, a.getFirstFreeElement = function() {
            return this._firstFreeElement;
        }, a.getFirstActiveElement = function() {
            return this._firstActiveElement;
        }, a.getFirstRetiredElement = function() {
            return this._firstRetiredElement;
        }, a.setFirstFreeElement = function(t) {
            this._firstFreeElement = t;
        }, a.setFirstNewElement = function(t) {
            this._firstNewElement = t;
        }, a.addDrawCounter = function() {
            this._drawCounter++;
        }, a.blend = function() {
            if (s.activeBlendFunction !== this._blendFn) {
                var t = x.mainContext;
                t.enable(3042), this._blendFn(t), s.activeBlendFunction = this._blendFn;
            }
        }, a.dispose = function() {
            d.isConchApp || this._mesh.releaseMesh();
        }, i.activeBlendType = -1, i;
    }(F), M = (function(t) {
        function i(t) {
            this._matrix4 = [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ], this._particleTemplate = null, 
            this._canvasTemplate = null, this._emitter = null, this.autoPlay = !0, this.tempCmd = null, 
            i.__super.call(this), this.customRenderEnable = !0, t && this.setParticleSetting(t);
        }
        r(i, "laya.particle.Particle2D", t);
        var a = i.prototype;
        a.load = function(t) {
            e.loader.load(t, h.create(this, this.setParticleSetting), null, "json");
        }, a.setParticleSetting = function(t) {
            if (!t) return this.stop();
            if (P.checkSetting(t), d.isConchApp) {
                this._particleTemplate = new N(t);
                var i = s.NAMES[t.blendState];
                this.blendMode = i, this.tempCmd = this.graphics._saveToCmd(null, o.create.call(this.graphics, this._particleTemplate)), 
                this._setGraphicsCallBack();
            } else d.isWebGL ? (this.customRenderEnable = !0, this._particleTemplate = new N(t), 
            this.graphics._saveToCmd(null, o.create(this._particleTemplate))) : this._particleTemplate = this._canvasTemplate = new b(t);
            this._emitter ? this._emitter.template = this._particleTemplate : this._emitter = new z(this._particleTemplate), 
            this.autoPlay && (this.emitter.start(), this.play());
        }, a.play = function() {
            e.timer.frameLoop(1, this, this._loop);
        }, a.stop = function() {
            e.timer.clear(this, this._loop);
        }, a._loop = function() {
            this.advanceTime(1 / 60);
        }, a.advanceTime = function(t) {
            void 0 === t && (t = 1), this._canvasTemplate && this._canvasTemplate.advanceTime(t), 
            this._emitter && this._emitter.advanceTime(t);
        }, a.customRender = function(t, i, e) {
            if (d.isWebGL) {
                this._matrix4[0] = t._curMat.a, this._matrix4[1] = t._curMat.b, this._matrix4[4] = t._curMat.c, 
                this._matrix4[5] = t._curMat.d, this._matrix4[12] = t._curMat.tx, this._matrix4[13] = t._curMat.ty;
                this._particleTemplate.sv.u_mmat = this._matrix4;
            }
            this._canvasTemplate && this._canvasTemplate.render(t, i, e);
        }, a.destroy = function(i) {
            void 0 === i && (i = !0), this._particleTemplate instanceof laya.particle.ParticleTemplate2D && this._particleTemplate.dispose(), 
            t.prototype.destroy.call(this, i);
        }, n(0, a, "url", null, function(t) {
            this.load(t);
        }), n(0, a, "emitter", function() {
            return this._emitter;
        });
    }(f), function(t) {
        function i() {
            i.__super.call(this, i.vs, i.ps, "ParticleShader", null, [ "a_CornerTextureCoordinate", 0, "a_Position", 1, "a_Velocity", 2, "a_StartColor", 3, "a_EndColor", 4, "a_SizeRotation", 5, "a_Radius", 6, "a_Radian", 7, "a_AgeAddScale", 8, "a_Time", 9 ]);
        }
        return r(i, "laya.particle.shader.ParticleShader", p), a(i, [ "vs", function() {
            return this.vs = "attribute vec4 a_CornerTextureCoordinate;\nattribute vec3 a_Position;\nattribute vec3 a_Velocity;\nattribute vec4 a_StartColor;\nattribute vec4 a_EndColor;\nattribute vec3 a_SizeRotation;\nattribute vec2 a_Radius;\nattribute vec4 a_Radian;\nattribute float a_AgeAddScale;\nattribute float a_Time;\n\nvarying vec4 v_Color;\nvarying vec2 v_TextureCoordinate;\n\nuniform float u_CurrentTime;\nuniform float u_Duration;\nuniform float u_EndVelocity;\nuniform vec3 u_Gravity;\n\nuniform vec2 size;\nuniform mat4 u_mmat;\n\nvec4 ComputeParticlePosition(in vec3 position, in vec3 velocity,in float age,in float normalizedAge)\n{\n\n   float startVelocity = length(velocity);//起始标量速度\n   float endVelocity = startVelocity * u_EndVelocity;//结束标量速度\n\n   float velocityIntegral = startVelocity * normalizedAge +(endVelocity - startVelocity) * normalizedAge *normalizedAge/2.0;//计算当前速度的标量（单位空间），vt=v0*t+(1/2)*a*(t^2)\n   \n   vec3 addPosition = normalize(velocity) * velocityIntegral * u_Duration;//计算受自身速度影响的位置，转换标量到矢量    \n   addPosition += u_Gravity * age * normalizedAge;//计算受重力影响的位置\n   \n   float radius=mix(a_Radius.x, a_Radius.y, normalizedAge); //计算粒子受半径和角度影响（无需计算角度和半径时，可用宏定义优化屏蔽此计算）\n   float radianHorizontal =mix(a_Radian.x,a_Radian.z,normalizedAge);\n   float radianVertical =mix(a_Radian.y,a_Radian.w,normalizedAge);\n   \n   float r =cos(radianVertical)* radius;\n   addPosition.y += sin(radianVertical) * radius;\n\t\n   addPosition.x += cos(radianHorizontal) *r;\n   addPosition.z += sin(radianHorizontal) *r;\n  \n   addPosition.y=-addPosition.y;//2D粒子位置更新需要取负，2D粒子坐标系Y轴正向朝上\n   position+=addPosition;\n   return  vec4(position,1.0);\n}\n\nfloat ComputeParticleSize(in float startSize,in float endSize, in float normalizedAge)\n{    \n    float size = mix(startSize, endSize, normalizedAge);\n    return size;\n}\n\nmat2 ComputeParticleRotation(in float rot,in float age)\n{    \n    float rotation =rot * age;\n    //计算2x2旋转矩阵.\n    float c = cos(rotation);\n    float s = sin(rotation);\n    return mat2(c, -s, s, c);\n}\n\nvec4 ComputeParticleColor(in vec4 startColor,in vec4 endColor,in float normalizedAge)\n{\n\tvec4 color=mix(startColor,endColor,normalizedAge);\n    //硬编码设置，使粒子淡入很快，淡出很慢,6.7的缩放因子把置归一在0到1之间，可以谷歌x*(1-x)*(1-x)*6.7的制图表\n    color.a *= normalizedAge * (1.0-normalizedAge) * (1.0-normalizedAge) * 6.7;\n   \n    return color;\n}\n\nvoid main()\n{\n   float age = u_CurrentTime - a_Time;\n   age *= 1.0 + a_AgeAddScale;\n   float normalizedAge = clamp(age / u_Duration,0.0,1.0);\n   gl_Position = ComputeParticlePosition(a_Position, a_Velocity, age, normalizedAge);//计算粒子位置\n   float pSize = ComputeParticleSize(a_SizeRotation.x,a_SizeRotation.y, normalizedAge);\n   mat2 rotation = ComputeParticleRotation(a_SizeRotation.z, age);\n\t\n    mat4 mat=u_mmat;\n    gl_Position=vec4((mat*gl_Position).xy,0.0,1.0);\n    gl_Position.xy += (rotation*a_CornerTextureCoordinate.xy) * pSize*vec2(mat[0][0],mat[1][1]);\n    gl_Position=vec4((gl_Position.x/size.x-0.5)*2.0,(0.5-gl_Position.y/size.y)*2.0,0.0,1.0);\n   \n   v_Color = ComputeParticleColor(a_StartColor,a_EndColor, normalizedAge);\n   v_TextureCoordinate =a_CornerTextureCoordinate.zw;\n}\n\n";
        }, "ps", function() {
            return this.ps = "#ifdef FSHIGHPRECISION\nprecision highp float;\n#else\nprecision mediump float;\n#endif\n\nvarying vec4 v_Color;\nvarying vec2 v_TextureCoordinate;\nuniform sampler2D u_texture;\n\nvoid main()\n{\t\n\tgl_FragColor=texture2D(u_texture,v_TextureCoordinate)*v_Color;\n\tgl_FragColor.xyz *= v_Color.w;\n}";
        } ]), i;
    }());
}(window, document, Laya);