(function() {
    return function t(e, i, o) {
        function n(s, a) {
            if (!i[s]) {
                if (!e[s]) {
                    var l = "function" == typeof require && require;
                    if (!a && l) return l(s, !0);
                    if (r) return r(s, !0);
                    var h = new Error("Cannot find module '" + s + "'");
                    throw h.code = "MODULE_NOT_FOUND", h
                }
                var c = i[s] = {
                    exports: {}
                };
                e[s][0].call(c.exports, function(t) {
                    return n(e[s][1][t] || t)
                }, c, c.exports, t, e, i, o)
            }
            return i[s].exports
        }
        for (var r = "function" == typeof require && require, s = 0; s < o.length; s++) n(o[s]);
        return n
    }
})()({
    1: [function(t, e, i) {
        "use strict";
        i.__esModule = !0, i.CannonRigidBody = void 0;
        var o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(t("../../../../../external/cannon/cannon"));

        function n(t, e) {
            for (var i = 0; i < e.length; i++) {
                var o = e[i];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
            }
        }

        function r(t, e, i) {
            return e && n(t.prototype, e), i && n(t, i), t
        }
        var s = new o.default.Vec3,
            a = new o.default.Vec3,
            l = cc.Vec3,
            h = function() {
                function t() {
                    this._rigidBody = void 0, this._sharedBody = void 0, this._isEnabled = !1
                }
                var e = t.prototype;
                return e.__preload = function(t) {
                    this._rigidBody = t, this._sharedBody = cc.director.getPhysics3DManager().physicsWorld.getSharedBody(this._rigidBody.node), this._sharedBody.reference = !0, this._sharedBody.wrappedBody = this
                }, e.onLoad = function() {}, e.onEnable = function() {
                    this._isEnabled = !0, this.mass = this._rigidBody.mass, this.allowSleep = this._rigidBody.allowSleep, this.linearDamping = this._rigidBody.linearDamping, this.angularDamping = this._rigidBody.angularDamping, this.useGravity = this._rigidBody.useGravity, this.isKinematic = this._rigidBody.isKinematic, this.fixedRotation = this._rigidBody.fixedRotation, this.linearFactor = this._rigidBody.linearFactor, this.angularFactor = this._rigidBody.angularFactor, this._sharedBody.enabled = !0
                }, e.onDisable = function() {
                    this._isEnabled = !1, this._sharedBody.enabled = !1
                }, e.onDestroy = function() {
                    this._sharedBody.reference = !1, this._rigidBody = null, this._sharedBody = null
                }, e.wakeUp = function() {
                    return this._sharedBody.body.wakeUp()
                }, e.sleep = function() {
                    return this._sharedBody.body.sleep()
                }, e.getLinearVelocity = function(t) {
                    return l.copy(t, this._sharedBody.body.velocity), t
                }, e.setLinearVelocity = function(t) {
                    var e = this._sharedBody.body;
                    e.isSleeping() && e.wakeUp(), l.copy(e.velocity, t)
                }, e.getAngularVelocity = function(t) {
                    return l.copy(t, this._sharedBody.body.angularVelocity), t
                }, e.setAngularVelocity = function(t) {
                    var e = this._sharedBody.body;
                    e.isSleeping() && e.wakeUp(), l.copy(e.angularVelocity, t)
                }, e.applyForce = function(t, e) {
                    null == e && (e = l.ZERO);
                    var i = this._sharedBody.body;
                    i.isSleeping() && i.wakeUp(), i.applyForce(l.copy(s, t), l.copy(a, e))
                }, e.applyImpulse = function(t, e) {
                    null == e && (e = l.ZERO);
                    var i = this._sharedBody.body;
                    i.isSleeping() && i.wakeUp(), i.applyImpulse(l.copy(s, t), l.copy(a, e))
                }, e.applyLocalForce = function(t, e) {
                    null == e && (e = l.ZERO);
                    var i = this._sharedBody.body;
                    i.isSleeping() && i.wakeUp(), i.applyLocalForce(l.copy(s, t), l.copy(a, e))
                }, e.applyLocalImpulse = function(t, e) {
                    null == e && (e = l.ZERO);
                    var i = this._sharedBody.body;
                    i.isSleeping() && i.wakeUp(), i.applyLocalImpulse(l.copy(s, t), l.copy(a, e))
                }, e.applyTorque = function(t) {
                    var e = this._sharedBody.body;
                    e.isSleeping() && e.wakeUp(), e.torque.x += t.x, e.torque.y += t.y, e.torque.z += t.z
                }, e.applyLocalTorque = function(t) {
                    var e = this._sharedBody.body;
                    e.isSleeping() && e.wakeUp(), l.copy(s, t), e.vectorToWorldFrame(s, s), e.torque.x += s.x, e.torque.y += s.y, e.torque.z += s.z
                }, r(t, [{
                    key: "isAwake",
                    get: function() {
                        return this._sharedBody.body.isAwake()
                    }
                }, {
                    key: "isSleepy",
                    get: function() {
                        return this._sharedBody.body.isSleepy()
                    }
                }, {
                    key: "isSleeping",
                    get: function() {
                        return this._sharedBody.body.isSleeping()
                    }
                }, {
                    key: "allowSleep",
                    set: function(t) {
                        var e = this._sharedBody.body;
                        e.isSleeping() && e.wakeUp(), e.allowSleep = t
                    }
                }, {
                    key: "mass",
                    set: function(t) {
                        var e = this._sharedBody.body;
                        e.mass = t, 0 == e.mass && (e.type = o.default.Body.STATIC), e.updateMassProperties(), e.isSleeping() && e.wakeUp()
                    }
                }, {
                    key: "isKinematic",
                    set: function(t) {
                        var e = this._sharedBody.body;
                        0 == e.mass ? e.type = o.default.Body.STATIC : e.type = t ? o.default.Body.KINEMATIC : o.default.Body.DYNAMIC
                    }
                }, {
                    key: "fixedRotation",
                    set: function(t) {
                        var e = this._sharedBody.body;
                        e.isSleeping() && e.wakeUp(), e.fixedRotation = t, e.updateMassProperties()
                    }
                }, {
                    key: "linearDamping",
                    set: function(t) {
                        this._sharedBody.body.linearDamping = t
                    }
                }, {
                    key: "angularDamping",
                    set: function(t) {
                        this._sharedBody.body.angularDamping = t
                    }
                }, {
                    key: "useGravity",
                    set: function(t) {
                        var e = this._sharedBody.body;
                        e.isSleeping() && e.wakeUp(), e.useGravity = t
                    }
                }, {
                    key: "linearFactor",
                    set: function(t) {
                        var e = this._sharedBody.body;
                        e.isSleeping() && e.wakeUp(), l.copy(e.linearFactor, t)
                    }
                }, {
                    key: "angularFactor",
                    set: function(t) {
                        var e = this._sharedBody.body;
                        e.isSleeping() && e.wakeUp(), l.copy(e.angularFactor, t)
                    }
                }, {
                    key: "rigidBody",
                    get: function() {
                        return this._rigidBody
                    }
                }, {
                    key: "sharedBody",
                    get: function() {
                        return this._sharedBody
                    }
                }, {
                    key: "isEnabled",
                    get: function() {
                        return this._isEnabled
                    }
                }]), t
            }();
        i.CannonRigidBody = h
    }, {
        "../../../../../external/cannon/cannon": 24
    }],
    2: [function(t, e, i) {
        "use strict";
        i.__esModule = !0, i.CannonSharedBody = void 0;
        var o = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(t("../../../../../external/cannon/cannon")),
            n = t("../framework/physics-enum"),
            r = t("../framework/util"),
            s = t("./cannon-util");

        function a(t, e) {
            for (var i = 0; i < e.length; i++) {
                var o = e[i];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
            }
        }

        function l(t, e, i) {
            return e && a(t.prototype, e), i && a(t, i), t
        }
        var h = cc.Node._LocalDirtyFlag.PHYSICS_SCALE,
            c = cc.Quat,
            u = cc.Vec3,
            p = cc.js.array.fastRemoveAt,
            d = new u,
            y = new c,
            f = [],
            v = {
                type: "collision-enter",
                selfCollider: null,
                otherCollider: null,
                contacts: []
            },
            m = function() {
                function t(t, e) {
                    this.node = void 0, this.wrappedWorld = void 0, this.body = new o.default.Body, this.shapes = [], this.wrappedBody = null, this.index = -1, this.ref = 0, this.onCollidedListener = this.onCollided.bind(this), this.wrappedWorld = e, this.node = t, this.body.material = this.wrappedWorld.world.defaultMaterial, this.body.addEventListener("collide", this.onCollidedListener), this._updateGroup(), this.node.on(cc.Node.EventType.GROUP_CHANGED, this._updateGroup, this)
                }
                t.getSharedBody = function(e, i) {
                    var o = e._id;
                    if (t.sharedBodiesMap.has(o)) return t.sharedBodiesMap.get(o);
                    var n = new t(e, i);
                    return t.sharedBodiesMap.set(e._id, n), n
                }, l(t, [{
                    key: "enabled",
                    set: function(t) {
                        t ? this.index < 0 && (this.index = this.wrappedWorld.bodies.length, this.wrappedWorld.addSharedBody(this), this.syncSceneToPhysics(!0)) : this.index >= 0 && (0 == this.shapes.length && null == this.wrappedBody || 0 == this.shapes.length && null != this.wrappedBody && !this.wrappedBody.rigidBody.enabledInHierarchy || 0 == this.shapes.length && null != this.wrappedBody && !this.wrappedBody.isEnabled) && (this.body.sleep(), this.index = -1, this.wrappedWorld.removeSharedBody(this))
                    }
                }, {
                    key: "reference",
                    set: function(t) {
                        t ? this.ref++ : this.ref--, 0 == this.ref && this.destroy()
                    }
                }]);
                var e = t.prototype;
                return e._updateGroup = function() {
                    (0, s.groupIndexToBitMask)(this.node.groupIndex, this.body)
                }, e.addShape = function(t) {
                    if (this.shapes.indexOf(t) < 0) {
                        var e = this.body.shapes.length;
                        this.body.addShape(t.shape), this.shapes.push(t), t.setIndex(e);
                        var i = this.body.shapeOffsets[e],
                            o = this.body.shapeOrientations[e];
                        t.setOffsetAndOrient(i, o)
                    }
                }, e.removeShape = function(t) {
                    var e = this.shapes.indexOf(t);
                    e >= 0 && (p(this.shapes, e), this.body.removeShape(t.shape), t.setIndex(-1))
                }, e.syncSceneToPhysics = function(t) {
                    void 0 === t && (t = !1);
                    var e = this.node,
                        i = (0, r.updateWorldTransform)(e, t);
                    if (t || i) {
                        if (u.copy(this.body.position, e.__wpos), c.copy(this.body.quaternion, e.__wrot), e._localMatDirty & h)
                            for (var o = e.__wscale, n = 0; n < this.shapes.length; n++) this.shapes[n].setScale(o);
                        this.body.isSleeping() && this.body.wakeUp(), this.body.aabbNeedsUpdate = !0
                    }
                }, e.syncPhysicsToScene = function() {
                    this.body.type != n.ERigidBodyType.STATIC && (u.copy(d, this.body.position), c.copy(y, this.body.quaternion), (0, r.updateWorldRT)(this.node, d, y))
                }, e.destroy = function() {
                    this.node.off(cc.Node.EventType.GROUP_CHANGED, this._updateGroup, this), t.sharedBodiesMap.delete(this.node._id), this.node = null, this.wrappedWorld = null, this.body = null, this.shapes = null, this.onCollidedListener = null
                }, e.onCollided = function(t) {
                    v.type = t.event;
                    var e = (0, r.getWrap)(t.selfShape),
                        i = (0, r.getWrap)(t.otherShape);
                    if (e) {
                        v.selfCollider = e.collider, v.otherCollider = i ? i.collider : null;
                        var o = 0;
                        for (o = v.contacts.length; o--;) f.push(v.contacts.pop());
                        for (o = 0; o < t.contacts.length; o++) {
                            var n = t.contacts[o];
                            if (f.length > 0) {
                                var s = f.pop();
                                u.copy(s.contactA, n.ri), u.copy(s.contactB, n.rj), u.copy(s.normal, n.ni), v.contacts.push(s)
                            } else {
                                var a = {
                                    contactA: u.copy(new u, n.ri),
                                    contactB: u.copy(new u, n.rj),
                                    normal: u.copy(new u, n.ni)
                                };
                                v.contacts.push(a)
                            }
                        }
                        for (o = 0; o < this.shapes.length; o++) {
                            this.shapes[o].collider.emit(v.type, v)
                        }
                    }
                }, t
            }();
        i.CannonSharedBody = m, m.sharedBodiesMap = new Map
    }, {
        "../../../../../external/cannon/cannon": 24,
        "../framework/physics-enum": 19,
        "../framework/util": 23,
        "./cannon-util": 3
    }],
    3: [function(t, e, i) {
        "use strict";
        i.__esModule = !0, i.groupIndexToBitMask = r, i.toCannonRaycastOptions = function(t, e) {
            t.checkCollisionResponse = !e.queryTrigger, r(e.groupIndex, t), t.skipBackFaces = !1
        }, i.fillRaycastResult = function(t, e) {
            t._assign(n.copy(new n, e.hitPointWorld), e.distance, (0, o.getWrap)(e.shape).collider)
        }, i.commitShapeUpdates = function(t) {
            t.updateMassProperties(), t.updateBoundingRadius(), t.aabbNeedsUpdate = !0
        };
        var o = t("../framework/util"),
            n = cc.Vec3;

        function r(t, e) {
            var i = 1 << t,
                o = 0,
                n = cc.game.collisionMatrix[t];
            if (n) {
                for (var r = 0; r < n.length; r++) n[r] && (o |= 1 << r);
                e.collisionFilterGroup = i, e.collisionFilterMask = o
            } else cc.error("cannon-utils: group is not exist", t)
        }
    }, {
        "../framework/util": 23
    }],
    4: [function(t, e, i) {
        "use strict";
        i.__esModule = !0, i.CannonWorld = void 0;
        var o = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(t("../../../../../external/cannon/cannon")),
            n = t("./cannon-util"),
            r = t("./shapes/cannon-shape"),
            s = t("./cannon-shared-body"),
            a = t("../framework/util");

        function l(t, e) {
            for (var i = 0; i < e.length; i++) {
                var o = e[i];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
            }
        }

        function h(t, e, i) {
            return e && l(t.prototype, e), i && l(t, i), t
        }
        var c = cc.Vec3,
            u = cc.js.array.fastRemoveAt,
            p = function() {
                function t() {
                    this.bodies = [], this._world = void 0, this._raycastResult = new o.default.RaycastResult, this._world = new o.default.World, this._world.broadphase = new o.default.NaiveBroadphase
                }
                h(t, [{
                    key: "world",
                    get: function() {
                        return this._world
                    }
                }, {
                    key: "defaultMaterial",
                    set: function(t) {
                        this._world.defaultMaterial.friction = t.friction, this._world.defaultMaterial.restitution = t.restitution, null != r.CannonShape.idToMaterial[t._uuid] && (r.CannonShape.idToMaterial[t._uuid] = this._world.defaultMaterial)
                    }
                }, {
                    key: "allowSleep",
                    set: function(t) {
                        this._world.allowSleep = t
                    }
                }, {
                    key: "gravity",
                    set: function(t) {
                        c.copy(this._world.gravity, t)
                    }
                }]);
                var e = t.prototype;
                return e.step = function(t, e, i) {
                    (0, a.clearNodeTransformRecord)();
                    for (var o = 0; o < this.bodies.length; o++) this.bodies[o].syncSceneToPhysics();
                    (0, a.clearNodeTransformDirtyFlag)(), this._world.step(t, e, i);
                    for (var n = 0; n < this.bodies.length; n++) this.bodies[n].syncPhysicsToScene();
                    this._world.emitTriggeredEvents(), this._world.emitCollisionEvents()
                }, e.raycastClosest = function(t, e, i) {
                    f(t, e.maxDistance), (0, n.toCannonRaycastOptions)(v, e);
                    var o = this._world.raycastClosest(d, y, v, this._raycastResult);
                    return o && (0, n.fillRaycastResult)(i, this._raycastResult), o
                }, e.raycast = function(t, e, i, o) {
                    return f(t, e.maxDistance), (0, n.toCannonRaycastOptions)(v, e), this._world.raycastAll(d, y, v, function(t) {
                        var e = i.add();
                        (0, n.fillRaycastResult)(e, t), o.push(e)
                    })
                }, e.getSharedBody = function(t) {
                    return s.CannonSharedBody.getSharedBody(t, this)
                }, e.addSharedBody = function(t) {
                    this.bodies.indexOf(t) < 0 && (this.bodies.push(t), this._world.addBody(t.body))
                }, e.removeSharedBody = function(t) {
                    var e = this.bodies.indexOf(t);
                    e >= 0 && (u(this.bodies, e), this._world.remove(t.body))
                }, t
            }();
        i.CannonWorld = p;
        var d = new o.default.Vec3,
            y = new o.default.Vec3;

        function f(t, e) {
            c.copy(d, t.o), t.computeHit(y, e)
        }
        var v = {
            checkCollisionResponse: !1,
            collisionFilterGroup: -1,
            collisionFilterMask: -1,
            skipBackFaces: !1
        }
    }, {
        "../../../../../external/cannon/cannon": 24,
        "../framework/util": 23,
        "./cannon-shared-body": 2,
        "./cannon-util": 3,
        "./shapes/cannon-shape": 7
    }],
    5: [function(t, e, i) {
        "use strict";
        var o = t("../framework/physics-selector"),
            n = t("./cannon-rigid-body"),
            r = t("./cannon-world"),
            s = t("./shapes/cannon-box-shape"),
            a = t("./shapes/cannon-sphere-shape");
        (0, o.instantiate)(s.CannonBoxShape, a.CannonSphereShape, n.CannonRigidBody, r.CannonWorld)
    }, {
        "../framework/physics-selector": 22,
        "./cannon-rigid-body": 1,
        "./cannon-world": 4,
        "./shapes/cannon-box-shape": 6,
        "./shapes/cannon-sphere-shape": 8
    }],
    6: [function(t, e, i) {
        "use strict";
        i.__esModule = !0, i.CannonBoxShape = void 0;
        var o = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(t("../../../../../../external/cannon/cannon")),
            n = t("../cannon-util"),
            r = t("./cannon-shape");

        function s(t, e) {
            for (var i = 0; i < e.length; i++) {
                var o = e[i];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
            }
        }

        function a(t, e, i) {
            return e && s(t.prototype, e), i && s(t, i), t
        }

        function l(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
        }
        var h = cc.Vec3,
            c = new h,
            u = function(t) {
                function e(e) {
                    var i;
                    return (i = t.call(this) || this).halfExtent = new o.default.Vec3, h.multiplyScalar(i.halfExtent, e, .5), i._shape = new o.default.Box(i.halfExtent.clone()), i
                }
                l(e, t), a(e, [{
                    key: "boxCollider",
                    get: function() {
                        return this.collider
                    }
                }, {
                    key: "box",
                    get: function() {
                        return this._shape
                    }
                }]);
                var i = e.prototype;
                return i.onLoad = function() {
                    t.prototype.onLoad.call(this), this.size = this.boxCollider.size
                }, i.setScale = function(e) {
                    t.prototype.setScale.call(this, e), this.size = this.boxCollider.size
                }, a(e, [{
                    key: "size",
                    set: function(t) {
                        this.collider.node.getWorldScale(c), h.multiplyScalar(this.halfExtent, t, .5), h.multiply(this.box.halfExtents, this.halfExtent, c), this.box.updateConvexPolyhedronRepresentation(), -1 != this._index && (0, n.commitShapeUpdates)(this._body)
                    }
                }]), e
            }(r.CannonShape);
        i.CannonBoxShape = u
    }, {
        "../../../../../../external/cannon/cannon": 24,
        "../cannon-util": 3,
        "./cannon-shape": 7
    }],
    7: [function(t, e, i) {
        "use strict";
        i.__esModule = !0, i.CannonShape = void 0;
        var o = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(t("../../../../../../external/cannon/cannon")),
            n = t("../../framework/util"),
            r = t("../cannon-util");

        function s(t, e) {
            for (var i = 0; i < e.length; i++) {
                var o = e[i];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
            }
        }

        function a(t, e, i) {
            return e && s(t.prototype, e), i && s(t, i), t
        }
        var l = {
                type: "trigger-enter",
                selfCollider: null,
                otherCollider: null
            },
            h = cc.Vec3,
            c = new h,
            u = function() {
                function t() {
                    this._collider = void 0, this._shape = void 0, this._offset = new o.default.Vec3, this._orient = new o.default.Quaternion, this._index = -1, this._sharedBody = void 0, this.onTriggerListener = this.onTrigger.bind(this)
                }
                var e = t.prototype;
                return e.__preload = function(t) {
                    this._collider = t, (0, n.setWrap)(this._shape, this), this._shape.addEventListener("triggered", this.onTriggerListener), this._sharedBody = cc.director.getPhysics3DManager().physicsWorld.getSharedBody(this._collider.node), this._sharedBody.reference = !0
                }, e.onLoad = function() {
                    this.center = this._collider.center, this.isTrigger = this._collider.isTrigger
                }, e.onEnable = function() {
                    this._sharedBody.addShape(this), this._sharedBody.enabled = !0
                }, e.onDisable = function() {
                    this._sharedBody.removeShape(this), this._sharedBody.enabled = !1
                }, e.onDestroy = function() {
                    this._sharedBody.reference = !1, this._sharedBody = null, (0, n.setWrap)(this._shape, null), this._offset = null, this._orient = null, this._shape = null, this._collider = null, this.onTriggerListener = null
                }, e.setScale = function(t) {
                    this.center = this._collider.center
                }, e.setIndex = function(t) {
                    this._index = t
                }, e.setOffsetAndOrient = function(t, e) {
                    this._offset = t, this._orient = e
                }, e.onTrigger = function(t) {
                    l.type = t.event;
                    var e = (0, n.getWrap)(t.selfShape),
                        i = (0, n.getWrap)(t.otherShape);
                    e && (l.selfCollider = e.collider, l.otherCollider = i ? i.collider : null, this._collider.emit(l.type, l))
                }, a(t, [{
                    key: "shape",
                    get: function() {
                        return this._shape
                    }
                }, {
                    key: "collider",
                    get: function() {
                        return this._collider
                    }
                }, {
                    key: "attachedRigidBody",
                    get: function() {
                        return this._sharedBody.wrappedBody ? this._sharedBody.wrappedBody.rigidBody : null
                    }
                }, {
                    key: "sharedBody",
                    get: function() {
                        return this._sharedBody
                    }
                }, {
                    key: "material",
                    set: function(e) {
                        null == e ? this._shape.material = null : (null == t.idToMaterial[e._uuid] && (t.idToMaterial[e._uuid] = new o.default.Material(e._uuid)), this._shape.material = t.idToMaterial[e._uuid], this._shape.material.friction = e.friction, this._shape.material.restitution = e.restitution)
                    }
                }, {
                    key: "isTrigger",
                    set: function(t) {
                        this._shape.collisionResponse = !t, this._index >= 0 && this._body.updateHasTrigger()
                    }
                }, {
                    key: "center",
                    set: function(t) {
                        var e = this._offset;
                        h.copy(e, t), this._collider.node.getWorldScale(c), h.multiply(e, e, c), this._index >= 0 && (0, r.commitShapeUpdates)(this._body)
                    }
                }, {
                    key: "_body",
                    get: function() {
                        return this._sharedBody.body
                    }
                }]), t
            }();
        i.CannonShape = u, u.idToMaterial = {}
    }, {
        "../../../../../../external/cannon/cannon": 24,
        "../../framework/util": 23,
        "../cannon-util": 3
    }],
    8: [function(t, e, i) {
        "use strict";
        i.__esModule = !0, i.CannonSphereShape = void 0;
        var o = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(t("../../../../../../external/cannon/cannon")),
            n = t("../cannon-util"),
            r = t("./cannon-shape");

        function s(t, e) {
            for (var i = 0; i < e.length; i++) {
                var o = e[i];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
            }
        }

        function a(t, e, i) {
            return e && s(t.prototype, e), i && s(t, i), t
        }

        function l(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
        }
        var h = new cc.Vec3,
            c = function(t) {
                function e(e) {
                    var i;
                    return (i = t.call(this) || this)._radius = void 0, i._radius = e, i._shape = new o.default.Sphere(i._radius), i
                }
                l(e, t), a(e, [{
                    key: "sphereCollider",
                    get: function() {
                        return this.collider
                    }
                }, {
                    key: "sphere",
                    get: function() {
                        return this._shape
                    }
                }, {
                    key: "radius",
                    get: function() {
                        return this._radius
                    },
                    set: function(t) {
                        this.collider.node.getWorldScale(h);
                        var e = h.maxAxis();
                        this.sphere.radius = t * Math.abs(e), this.sphere.updateBoundingSphereRadius(), -1 != this._index && (0, n.commitShapeUpdates)(this._body)
                    }
                }]);
                var i = e.prototype;
                return i.onLoad = function() {
                    t.prototype.onLoad.call(this), this.radius = this.sphereCollider.radius
                }, i.setScale = function(e) {
                    t.prototype.setScale.call(this, e), this.radius = this.sphereCollider.radius
                }, e
            }(r.CannonShape);
        i.CannonSphereShape = c
    }, {
        "../../../../../../external/cannon/cannon": 24,
        "../cannon-util": 3,
        "./cannon-shape": 7
    }],
    9: [function(t, e, i) {
        "use strict";
        t("../cannon/instantiate");
        var o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(t("../../../../../external/cannon/cannon"));
        window && (window.CANNON = o.default)
    }, {
        "../../../../../external/cannon/cannon": 24,
        "../cannon/instantiate": 5
    }],
    10: [function(t, e, i) {
        "use strict";
        i.__esModule = !0;
        var o = t("../framework");
        Object.keys(o).forEach(function(t) {
            "default" !== t && "__esModule" !== t && (i[t] = o[t])
        })
    }, {
        "../framework": 17
    }],
    11: [function(t, e, i) {
        "use strict";
        var o, n, r, s, a, l;

        function h(t, e, i, o) {
            i && Object.defineProperty(t, e, {
                enumerable: i.enumerable,
                configurable: i.configurable,
                writable: i.writable,
                value: i.initializer ? i.initializer.call(o) : void 0
            })
        }

        function c(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }

        function u(t, e) {
            for (var i = 0; i < e.length; i++) {
                var o = e[i];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
            }
        }

        function p(t, e, i) {
            return e && u(t.prototype, e), i && u(t, i), t
        }

        function d(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
        }

        function y(t, e, i, o, n) {
            var r = {};
            return Object.keys(o).forEach(function(t) {
                r[t] = o[t]
            }), r.enumerable = !!r.enumerable, r.configurable = !!r.configurable, ("value" in r || r.initializer) && (r.writable = !0), r = i.slice().reverse().reduce(function(i, o) {
                return o(t, e, i) || i
            }, r), n && void 0 !== r.initializer && (r.value = r.initializer ? r.initializer.call(n) : void 0, r.initializer = void 0), void 0 === r.initializer && (Object.defineProperty(t, e, r), r = null), r
        }
        i.__esModule = !0, i.PhysicsMaterial = void 0;
        var f = cc._decorator,
            v = f.ccclass,
            m = f.property,
            g = cc.js.array.fastRemove,
            w = cc.math.equals,
            b = v("cc.PhysicsMaterial")((l = a = function(t) {
                function e() {
                    var i;
                    return h(i = t.call(this) || this, "_friction", r, c(i)), h(i, "_restitution", s, c(i)), cc.EventTarget.call(c(i)), e.allMaterials.push(c(i)), "" == i._uuid && (i._uuid = "pm_" + e._idCounter++), i
                }
                d(e, t), p(e, [{
                    key: "friction",
                    get: function() {
                        return this._friction
                    },
                    set: function(t) {
                        w(this._friction, t) || (this._friction = t, this.emit("physics_material_update"))
                    }
                }, {
                    key: "restitution",
                    get: function() {
                        return this._restitution
                    },
                    set: function(t) {
                        w(this._restitution, t) || (this._restitution = t, this.emit("physics_material_update"))
                    }
                }]);
                var i = e.prototype;
                return i.clone = function() {
                    var t = new e;
                    return t._friction = this._friction, t._restitution = this._restitution, t
                }, i.destroy = function() {
                    return !!t.prototype.destroy.call(this) && (g(e.allMaterials, this), !0)
                }, e
            }(cc.Asset), a.allMaterials = [], a._idCounter = 0, r = y((n = l).prototype, "_friction", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .1
                }
            }), s = y(n.prototype, "_restitution", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .1
                }
            }), y(n.prototype, "friction", [m], Object.getOwnPropertyDescriptor(n.prototype, "friction"), n.prototype), y(n.prototype, "restitution", [m], Object.getOwnPropertyDescriptor(n.prototype, "restitution"), n.prototype), o = n)) || o;
        i.PhysicsMaterial = b, cc.js.mixin(b.prototype, cc.EventTarget.prototype), cc.PhysicsMaterial = b
    }, {}],
    12: [function(t, e, i) {
        "use strict";
        i.__esModule = !0, i.BoxCollider3D = void 0;
        var o, n, r, s, a, l, h, c = t("../../instance"),
            u = t("./collider-component");

        function p(t, e, i, o) {
            i && Object.defineProperty(t, e, {
                enumerable: i.enumerable,
                configurable: i.configurable,
                writable: i.writable,
                value: i.initializer ? i.initializer.call(o) : void 0
            })
        }

        function d(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }

        function y(t, e) {
            for (var i = 0; i < e.length; i++) {
                var o = e[i];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
            }
        }

        function f(t, e, i) {
            return e && y(t.prototype, e), i && y(t, i), t
        }

        function v(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
        }

        function m(t, e, i, o, n) {
            var r = {};
            return Object.keys(o).forEach(function(t) {
                r[t] = o[t]
            }), r.enumerable = !!r.enumerable, r.configurable = !!r.configurable, ("value" in r || r.initializer) && (r.writable = !0), r = i.slice().reverse().reduce(function(i, o) {
                return o(t, e, i) || i
            }, r), n && void 0 !== r.initializer && (r.value = r.initializer ? r.initializer.call(n) : void 0, r.initializer = void 0), void 0 === r.initializer && (Object.defineProperty(t, e, r), r = null), r
        }
        var g = cc._decorator,
            w = g.ccclass,
            b = g.executeInEditMode,
            x = g.executionOrder,
            _ = g.menu,
            B = g.property,
            S = cc.Vec3,
            E = (o = w("cc.BoxCollider3D"), n = x(98), r = _("i18n:MAIN_MENU.component.physics/Collider/Box 3D"), s = B({
                type: cc.Vec3
            }), o(a = n(a = r(a = b((m((l = function(t) {
                function e() {
                    var e;
                    return p(e = t.call(this) || this, "_size", h, d(e)), e._shape = (0, c.createBoxShape)(e._size), e
                }
                return v(e, t), f(e, [{
                    key: "size",
                    get: function() {
                        return this._size
                    },
                    set: function(t) {
                        S.copy(this._size, t), this.boxShape.size = this._size
                    }
                }, {
                    key: "boxShape",
                    get: function() {
                        return this._shape
                    }
                }]), e
            }(u.Collider3D)).prototype, "size", [s], Object.getOwnPropertyDescriptor(l.prototype, "size"), l.prototype), h = m(l.prototype, "_size", [B], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new S(1, 1, 1)
                }
            }), a = l)) || a) || a) || a) || a);
        i.BoxCollider3D = E
    }, {
        "../../instance": 18,
        "./collider-component": 13
    }],
    13: [function(t, e, i) {
        "use strict";
        i.__esModule = !0, i.Collider3D = void 0;
        var o, n, r, s, a, l, h, c, u, p, d = t("../../assets/physics-material");

        function y(t, e, i, o) {
            i && Object.defineProperty(t, e, {
                enumerable: i.enumerable,
                configurable: i.configurable,
                writable: i.writable,
                value: i.initializer ? i.initializer.call(o) : void 0
            })
        }

        function f(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }

        function v(t, e) {
            for (var i = 0; i < e.length; i++) {
                var o = e[i];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
            }
        }

        function m(t, e, i) {
            return e && v(t.prototype, e), i && v(t, i), t
        }

        function g(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
        }

        function w(t, e, i, o, n) {
            var r = {};
            return Object.keys(o).forEach(function(t) {
                r[t] = o[t]
            }), r.enumerable = !!r.enumerable, r.configurable = !!r.configurable, ("value" in r || r.initializer) && (r.writable = !0), r = i.slice().reverse().reduce(function(i, o) {
                return o(t, e, i) || i
            }, r), n && void 0 !== r.initializer && (r.value = r.initializer ? r.initializer.call(n) : void 0, r.initializer = void 0), void 0 === r.initializer && (Object.defineProperty(t, e, r), r = null), r
        }
        var b = cc._decorator,
            x = b.ccclass,
            _ = b.property,
            B = cc.Vec3,
            S = (o = x("cc.Collider3D"), n = _({
                type: d.PhysicsMaterial,
                displayName: "Material",
                displayOrder: -1
            }), r = _({
                displayOrder: 0
            }), s = _({
                type: cc.Vec3,
                displayOrder: 1
            }), a = _({
                type: d.PhysicsMaterial
            }), o((w((h = function(t) {
                function e() {
                    var e;
                    return (e = t.call(this) || this)._shape = void 0, e._isSharedMaterial = !0, y(e, "_material", c, f(e)), y(e, "_isTrigger", u, f(e)), y(e, "_center", p, f(e)), cc.EventTarget.call(f(e)), e
                }
                g(e, t), m(e, [{
                    key: "sharedMaterial",
                    get: function() {
                        return this._material
                    },
                    set: function(t) {
                        this.material = t
                    }
                }, {
                    key: "material",
                    get: function() {
                        return this._isSharedMaterial && null != this._material && (this._material.off("physics_material_update", this._updateMaterial, this), this._material = this._material.clone(), this._material.on("physics_material_update", this._updateMaterial, this), this._isSharedMaterial = !1), this._material
                    },
                    set: function(t) {
                        null != t && null != this._material ? this._material._uuid != t._uuid && (this._material.off("physics_material_update", this._updateMaterial, this), t.on("physics_material_update", this._updateMaterial, this), this._isSharedMaterial = !1, this._material = t) : null != t && null == this._material ? (t.on("physics_material_update", this._updateMaterial, this), this._material = t) : null == t && null != this._material && (this._material.off("physics_material_update", this._updateMaterial, this), this._material = t), this._updateMaterial()
                    }
                }, {
                    key: "isTrigger",
                    get: function() {
                        return this._isTrigger
                    },
                    set: function(t) {
                        this._isTrigger = t, this._shape.isTrigger = this._isTrigger
                    }
                }, {
                    key: "center",
                    get: function() {
                        return this._center
                    },
                    set: function(t) {
                        B.copy(this._center, t), this._shape.center = this._center
                    }
                }, {
                    key: "attachedRigidbody",
                    get: function() {
                        return this.shape.attachedRigidBody
                    }
                }, {
                    key: "shape",
                    get: function() {
                        return this._shape
                    }
                }, {
                    key: "_assertOnload",
                    get: function() {
                        var t = 0 == this._isOnLoadCalled;
                        return t && cc.error("Physics Error: Please make sure that the node has been added to the scene"), !t
                    }
                }]);
                var i = e.prototype;
                return i.on = function(t, e, i, o) {}, i.off = function(t, e, i) {}, i.once = function(t, e, i) {}, i.emit = function(t) {}, i.__preload = function() {
                    this._shape.__preload(this)
                }, i.onLoad = function() {
                    this.sharedMaterial = null == this._material ? cc.director.getPhysics3DManager().defaultMaterial : this._material, this._shape.onLoad()
                }, i.onEnable = function() {
                    this._shape.onEnable()
                }, i.onDisable = function() {
                    this._shape.onDisable()
                }, i.onDestroy = function() {
                    this._shape.onDestroy()
                }, i._updateMaterial = function() {
                    this._shape.material = this._material
                }, e
            }(cc.Component)).prototype, "sharedMaterial", [n], Object.getOwnPropertyDescriptor(h.prototype, "sharedMaterial"), h.prototype), w(h.prototype, "isTrigger", [r], Object.getOwnPropertyDescriptor(h.prototype, "isTrigger"), h.prototype), w(h.prototype, "center", [s], Object.getOwnPropertyDescriptor(h.prototype, "center"), h.prototype), c = w(h.prototype, "_material", [a], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), u = w(h.prototype, "_isTrigger", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }), p = w(h.prototype, "_center", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new B
                }
            }), l = h)) || l);
        i.Collider3D = S, cc.js.mixin(S.prototype, cc.EventTarget.prototype)
    }, {
        "../../assets/physics-material": 11
    }],
    14: [function(t, e, i) {
        "use strict";
        i.__esModule = !0, i.SphereCollider3D = void 0;
        var o, n, r, s = t("../../instance"),
            a = t("./collider-component");

        function l(t, e, i, o) {
            i && Object.defineProperty(t, e, {
                enumerable: i.enumerable,
                configurable: i.configurable,
                writable: i.writable,
                value: i.initializer ? i.initializer.call(o) : void 0
            })
        }

        function h(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }

        function c(t, e) {
            for (var i = 0; i < e.length; i++) {
                var o = e[i];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
            }
        }

        function u(t, e, i) {
            return e && c(t.prototype, e), i && c(t, i), t
        }

        function p(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
        }

        function d(t, e, i, o, n) {
            var r = {};
            return Object.keys(o).forEach(function(t) {
                r[t] = o[t]
            }), r.enumerable = !!r.enumerable, r.configurable = !!r.configurable, ("value" in r || r.initializer) && (r.writable = !0), r = i.slice().reverse().reduce(function(i, o) {
                return o(t, e, i) || i
            }, r), n && void 0 !== r.initializer && (r.value = r.initializer ? r.initializer.call(n) : void 0, r.initializer = void 0), void 0 === r.initializer && (Object.defineProperty(t, e, r), r = null), r
        }
        var y = cc._decorator,
            f = y.ccclass,
            v = y.executeInEditMode,
            m = y.executionOrder,
            g = y.menu,
            w = y.property,
            b = f("cc.SphereCollider3D")(o = m(98)(o = g("i18n:MAIN_MENU.component.physics/Collider/Sphere 3D")(o = v((d((n = function(t) {
                function e() {
                    var e;
                    return l(e = t.call(this) || this, "_radius", r, h(e)), e._shape = (0, s.createSphereShape)(e._radius), e
                }
                return p(e, t), u(e, [{
                    key: "radius",
                    get: function() {
                        return this._radius
                    },
                    set: function(t) {
                        this._radius = t, this.sphereShape.radius = this._radius
                    }
                }, {
                    key: "sphereShape",
                    get: function() {
                        return this._shape
                    }
                }]), e
            }(a.Collider3D)).prototype, "radius", [w], Object.getOwnPropertyDescriptor(n.prototype, "radius"), n.prototype), r = d(n.prototype, "_radius", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .5
                }
            }), o = n)) || o) || o) || o) || o;
        i.SphereCollider3D = b
    }, {
        "../../instance": 18,
        "./collider-component": 13
    }],
    15: [function(t, e, i) {
        "use strict";
        i.__esModule = !0, i.ConstantForce = void 0;
        var o, n, r, s, a, l, h, c, u, p, d, y, f, v, m, g = t("./rigid-body-component");

        function w(t, e, i, o) {
            i && Object.defineProperty(t, e, {
                enumerable: i.enumerable,
                configurable: i.configurable,
                writable: i.writable,
                value: i.initializer ? i.initializer.call(o) : void 0
            })
        }

        function b(t, e) {
            for (var i = 0; i < e.length; i++) {
                var o = e[i];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
            }
        }

        function x(t, e, i) {
            return e && b(t.prototype, e), i && b(t, i), t
        }

        function _(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }

        function B(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
        }

        function S(t, e, i, o, n) {
            var r = {};
            return Object.keys(o).forEach(function(t) {
                r[t] = o[t]
            }), r.enumerable = !!r.enumerable, r.configurable = !!r.configurable, ("value" in r || r.initializer) && (r.writable = !0), r = i.slice().reverse().reduce(function(i, o) {
                return o(t, e, i) || i
            }, r), n && void 0 !== r.initializer && (r.value = r.initializer ? r.initializer.call(n) : void 0, r.initializer = void 0), void 0 === r.initializer && (Object.defineProperty(t, e, r), r = null), r
        }
        var E = cc._decorator,
            M = E.ccclass,
            A = E.executeInEditMode,
            C = E.executionOrder,
            z = E.menu,
            R = E.property,
            P = E.requireComponent,
            T = E.disallowMultiple,
            F = cc.Vec3,
            q = (o = M("cc.ConstantForce"), n = C(98), r = P(g.RigidBody3D), s = z("i18n:MAIN_MENU.component.physics/Constant Force 3D"), a = R({
                displayOrder: 0
            }), l = R({
                displayOrder: 1
            }), h = R({
                displayOrder: 2
            }), c = R({
                displayOrder: 3
            }), o(u = n(u = r(u = s(u = T(u = A((m = function(t) {
                function e() {
                    for (var e, i = arguments.length, o = new Array(i), n = 0; n < i; n++) o[n] = arguments[n];
                    return (e = t.call.apply(t, [this].concat(o)) || this)._rigidbody = null, w(e, "_force", d, _(e)), w(e, "_localForce", y, _(e)), w(e, "_torque", f, _(e)), w(e, "_localTorque", v, _(e)), e._mask = 0, e
                }
                B(e, t);
                var i = e.prototype;
                return i.onLoad = function() {
                    this._rigidbody = this.node.getComponent(g.RigidBody3D), this._maskUpdate(this._force, 1), this._maskUpdate(this._localForce, 2), this._maskUpdate(this._torque, 4), this._maskUpdate(this._localTorque, 8)
                }, i.lateUpdate = function(t) {
                    null != this._rigidbody && 0 != this._mask && (1 & this._mask && this._rigidbody.applyForce(this._force), 2 & this._mask && this._rigidbody.applyLocalForce(this.localForce), 4 & this._mask && this._rigidbody.applyTorque(this._torque), 8 & this._mask && this._rigidbody.applyLocalTorque(this._localTorque))
                }, i._maskUpdate = function(t, e) {
                    F.strictEquals(t, F.ZERO) ? this._mask &= ~e : this._mask |= e
                }, x(e, [{
                    key: "force",
                    get: function() {
                        return this._force
                    },
                    set: function(t) {
                        F.copy(this._force, t), this._maskUpdate(this._force, 1)
                    }
                }, {
                    key: "localForce",
                    get: function() {
                        return this._localForce
                    },
                    set: function(t) {
                        F.copy(this._localForce, t), this._maskUpdate(this.localForce, 2)
                    }
                }, {
                    key: "torque",
                    get: function() {
                        return this._torque
                    },
                    set: function(t) {
                        F.copy(this._torque, t), this._maskUpdate(this._torque, 4)
                    }
                }, {
                    key: "localTorque",
                    get: function() {
                        return this._localTorque
                    },
                    set: function(t) {
                        F.copy(this._localTorque, t), this._maskUpdate(this._localTorque, 8)
                    }
                }]), e
            }(cc.Component), d = S((p = m).prototype, "_force", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new F
                }
            }), y = S(p.prototype, "_localForce", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new F
                }
            }), f = S(p.prototype, "_torque", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new F
                }
            }), v = S(p.prototype, "_localTorque", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new F
                }
            }), S(p.prototype, "force", [a], Object.getOwnPropertyDescriptor(p.prototype, "force"), p.prototype), S(p.prototype, "localForce", [l], Object.getOwnPropertyDescriptor(p.prototype, "localForce"), p.prototype), S(p.prototype, "torque", [h], Object.getOwnPropertyDescriptor(p.prototype, "torque"), p.prototype), S(p.prototype, "localTorque", [c], Object.getOwnPropertyDescriptor(p.prototype, "localTorque"), p.prototype), u = p)) || u) || u) || u) || u) || u) || u);
        i.ConstantForce = q
    }, {
        "./rigid-body-component": 16
    }],
    16: [function(t, e, i) {
        "use strict";
        i.__esModule = !0, i.RigidBody3D = void 0;
        var o, n, r, s, a, l, h, c, u, p, d, y, f, v, m, g, w, b, x, _, B, S = t("../instance");

        function E(t, e, i, o) {
            i && Object.defineProperty(t, e, {
                enumerable: i.enumerable,
                configurable: i.configurable,
                writable: i.writable,
                value: i.initializer ? i.initializer.call(o) : void 0
            })
        }

        function M(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }

        function A(t, e) {
            for (var i = 0; i < e.length; i++) {
                var o = e[i];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
            }
        }

        function C(t, e, i) {
            return e && A(t.prototype, e), i && A(t, i), t
        }

        function z(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
        }

        function R(t, e, i, o, n) {
            var r = {};
            return Object.keys(o).forEach(function(t) {
                r[t] = o[t]
            }), r.enumerable = !!r.enumerable, r.configurable = !!r.configurable, ("value" in r || r.initializer) && (r.writable = !0), r = i.slice().reverse().reduce(function(i, o) {
                return o(t, e, i) || i
            }, r), n && void 0 !== r.initializer && (r.value = r.initializer ? r.initializer.call(n) : void 0, r.initializer = void 0), void 0 === r.initializer && (Object.defineProperty(t, e, r), r = null), r
        }
        var P = cc._decorator,
            T = P.ccclass,
            F = P.disallowMultiple,
            q = P.executeInEditMode,
            V = P.executionOrder,
            O = P.menu,
            I = P.property,
            k = cc.Vec3,
            j = (o = T("cc.RigidBody3D"), n = V(99), r = O("i18n:MAIN_MENU.component.physics/Rigid Body 3D"), s = I({
                displayOrder: 0
            }), a = I({
                displayOrder: 1
            }), l = I({
                displayOrder: 2
            }), h = I({
                displayOrder: 3
            }), c = I({
                displayOrder: 4
            }), u = I({
                displayOrder: 5
            }), p = I({
                displayOrder: 6
            }), d = I({
                displayOrder: 7
            }), o(y = n(y = r(y = q(y = F((R((f = function(t) {
                function e() {
                    var e;
                    return (e = t.call(this) || this)._body = void 0, e._allowSleep = !0, E(e, "_mass", v, M(e)), E(e, "_linearDamping", m, M(e)), E(e, "_angularDamping", g, M(e)), E(e, "_fixedRotation", w, M(e)), E(e, "_isKinematic", b, M(e)), E(e, "_useGravity", x, M(e)), E(e, "_linearFactor", _, M(e)), E(e, "_angularFactor", B, M(e)), e._body = (0, S.createRigidBody)(), e
                }
                z(e, t), C(e, [{
                    key: "allowSleep",
                    get: function() {
                        return this._allowSleep
                    },
                    set: function(t) {
                        this._allowSleep = t, this._body.allowSleep = t
                    }
                }, {
                    key: "mass",
                    get: function() {
                        return this._mass
                    },
                    set: function(t) {
                        this._mass = t, this._body.mass = t
                    }
                }, {
                    key: "linearDamping",
                    get: function() {
                        return this._linearDamping
                    },
                    set: function(t) {
                        this._linearDamping = t, this._body.linearDamping = t
                    }
                }, {
                    key: "angularDamping",
                    get: function() {
                        return this._angularDamping
                    },
                    set: function(t) {
                        this._angularDamping = t, this._body.angularDamping = t
                    }
                }, {
                    key: "isKinematic",
                    get: function() {
                        return this._isKinematic
                    },
                    set: function(t) {
                        this._isKinematic = t, this._body.isKinematic = t
                    }
                }, {
                    key: "useGravity",
                    get: function() {
                        return this._useGravity
                    },
                    set: function(t) {
                        this._useGravity = t, this._body.useGravity = t
                    }
                }, {
                    key: "fixedRotation",
                    get: function() {
                        return this._fixedRotation
                    },
                    set: function(t) {
                        this._fixedRotation = t, this._body.fixedRotation = t
                    }
                }, {
                    key: "linearFactor",
                    get: function() {
                        return this._linearFactor
                    },
                    set: function(t) {
                        k.copy(this._linearFactor, t), this._body.linearFactor = this._linearFactor
                    }
                }, {
                    key: "angularFactor",
                    get: function() {
                        return this._angularFactor
                    },
                    set: function(t) {
                        k.copy(this._angularFactor, t), this._body.angularFactor = this._angularFactor
                    }
                }, {
                    key: "isAwake",
                    get: function() {
                        return !!this._assertOnload && this._body.isAwake
                    }
                }, {
                    key: "isSleepy",
                    get: function() {
                        return !!this._assertOnload && this._body.isSleepy
                    }
                }, {
                    key: "isSleeping",
                    get: function() {
                        return !!this._assertOnload && this._body.isSleeping
                    }
                }, {
                    key: "rigidBody",
                    get: function() {
                        return this._body
                    }
                }, {
                    key: "_assertOnload",
                    get: function() {
                        var t = 0 == this._isOnLoadCalled;
                        return t && cc.error("Physics Error: Please make sure that the node has been added to the scene"), !t
                    }
                }]);
                var i = e.prototype;
                return i.__preload = function() {
                    this._body.__preload(this)
                }, i.onEnable = function() {
                    this._body.onEnable()
                }, i.onDisable = function() {
                    this._body.onDisable()
                }, i.onDestroy = function() {
                    this._body.onDestroy()
                }, i.applyForce = function(t, e) {
                    this._assertOnload && this._body.applyForce(t, e)
                }, i.applyLocalForce = function(t, e) {
                    this._assertOnload && this._body.applyLocalForce(t, e)
                }, i.applyImpulse = function(t, e) {
                    this._assertOnload && this._body.applyImpulse(t, e)
                }, i.applyLocalImpulse = function(t, e) {
                    this._assertOnload && this._body.applyLocalImpulse(t, e)
                }, i.applyTorque = function(t) {
                    this._assertOnload && this._body.applyTorque(t)
                }, i.applyLocalTorque = function(t) {
                    this._assertOnload && this._body.applyLocalTorque(t)
                }, i.wakeUp = function() {
                    this._assertOnload && this._body.wakeUp()
                }, i.sleep = function() {
                    this._assertOnload && this._body.sleep()
                }, i.getLinearVelocity = function(t) {
                    this._assertOnload && this._body.getLinearVelocity(t)
                }, i.setLinearVelocity = function(t) {
                    this._assertOnload && this._body.setLinearVelocity(t)
                }, i.getAngularVelocity = function(t) {
                    this._assertOnload && this._body.getAngularVelocity(t)
                }, i.setAngularVelocity = function(t) {
                    this._assertOnload && this._body.setAngularVelocity(t)
                }, e
            }(cc.Component)).prototype, "mass", [s], Object.getOwnPropertyDescriptor(f.prototype, "mass"), f.prototype), R(f.prototype, "linearDamping", [a], Object.getOwnPropertyDescriptor(f.prototype, "linearDamping"), f.prototype), R(f.prototype, "angularDamping", [l], Object.getOwnPropertyDescriptor(f.prototype, "angularDamping"), f.prototype), R(f.prototype, "isKinematic", [h], Object.getOwnPropertyDescriptor(f.prototype, "isKinematic"), f.prototype), R(f.prototype, "useGravity", [c], Object.getOwnPropertyDescriptor(f.prototype, "useGravity"), f.prototype), R(f.prototype, "fixedRotation", [u], Object.getOwnPropertyDescriptor(f.prototype, "fixedRotation"), f.prototype), R(f.prototype, "linearFactor", [p], Object.getOwnPropertyDescriptor(f.prototype, "linearFactor"), f.prototype), R(f.prototype, "angularFactor", [d], Object.getOwnPropertyDescriptor(f.prototype, "angularFactor"), f.prototype), v = R(f.prototype, "_mass", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 10
                }
            }), m = R(f.prototype, "_linearDamping", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .1
                }
            }), g = R(f.prototype, "_angularDamping", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .1
                }
            }), w = R(f.prototype, "_fixedRotation", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }), b = R(f.prototype, "_isKinematic", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }), x = R(f.prototype, "_useGravity", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0
                }
            }), _ = R(f.prototype, "_linearFactor", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new k(1, 1, 1)
                }
            }), B = R(f.prototype, "_angularFactor", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new k(1, 1, 1)
                }
            }), y = f)) || y) || y) || y) || y) || y);
        i.RigidBody3D = j
    }, {
        "../instance": 18
    }],
    17: [function(t, e, i) {
        "use strict";
        i.__esModule = !0;
        var o = t("./physics-manager");
        i.Physics3DManager = o.Physics3DManager;
        var n = t("./physics-ray-result");
        i.PhysicsRayResult = n.PhysicsRayResult;
        var r = t("./components/collider/box-collider-component");
        i.BoxCollider3D = r.BoxCollider3D;
        var s = t("./components/collider/collider-component");
        i.Collider3D = s.Collider3D;
        var a = t("./components/collider/sphere-collider-component");
        i.SphereCollider3D = a.SphereCollider3D;
        var l = t("./components/rigid-body-component");
        i.RigidBody3D = l.RigidBody3D;
        var h = t("./components/constant-force"),
            c = t("./assets/physics-material");
        i.PhysicsMaterial = c.PhysicsMaterial, cc.Physics3DManager = o.Physics3DManager, cc.Collider3D = s.Collider3D, cc.BoxCollider3D = r.BoxCollider3D, cc.SphereCollider3D = a.SphereCollider3D, cc.RigidBody3D = l.RigidBody3D, cc.PhysicsRayResult = n.PhysicsRayResult, cc.ConstantForce = h.ConstantForce
    }, {
        "./assets/physics-material": 11,
        "./components/collider/box-collider-component": 12,
        "./components/collider/collider-component": 13,
        "./components/collider/sphere-collider-component": 14,
        "./components/constant-force": 15,
        "./components/rigid-body-component": 16,
        "./physics-manager": 20,
        "./physics-ray-result": 21
    }],
    18: [function(t, e, i) {
        "use strict";
        i.__esModule = !0, i.createPhysicsWorld = function() {
            return new o.PhysicsWorld
        }, i.createRigidBody = function() {
            return new o.RigidBody
        }, i.createBoxShape = function(t) {
            return new o.BoxShape(t)
        }, i.createSphereShape = function(t) {
            return new o.SphereShape(t)
        };
        var o = t("./physics-selector")
    }, {
        "./physics-selector": 22
    }],
    19: [function(t, e, i) {
        "use strict";
        var o;
        i.__esModule = !0, i.ERigidBodyType = void 0, i.ERigidBodyType = o,
            function(t) {
                t[t.DYNAMIC = 1] = "DYNAMIC", t[t.STATIC = 2] = "STATIC", t[t.KINEMATIC = 4] = "KINEMATIC"
            }(o || (i.ERigidBodyType = o = {}))
    }, {}],
    20: [function(t, e, i) {
        "use strict";
        i.__esModule = !0, i.Physics3DManager = void 0;
        var o, n, r, s, a, l, h, c, u = t("./instance"),
            p = t("./assets/physics-material"),
            d = t("./physics-ray-result");

        function y(t, e, i, o) {
            i && Object.defineProperty(t, e, {
                enumerable: i.enumerable,
                configurable: i.configurable,
                writable: i.writable,
                value: i.initializer ? i.initializer.call(o) : void 0
            })
        }

        function f(t, e) {
            for (var i = 0; i < e.length; i++) {
                var o = e[i];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
            }
        }

        function v(t, e, i) {
            return e && f(t.prototype, e), i && f(t, i), t
        }

        function m(t, e, i, o, n) {
            var r = {};
            return Object.keys(o).forEach(function(t) {
                r[t] = o[t]
            }), r.enumerable = !!r.enumerable, r.configurable = !!r.configurable, ("value" in r || r.initializer) && (r.writable = !0), r = i.slice().reverse().reduce(function(i, o) {
                return o(t, e, i) || i
            }, r), n && void 0 !== r.initializer && (r.value = r.initializer ? r.initializer.call(n) : void 0, r.initializer = void 0), void 0 === r.initializer && (Object.defineProperty(t, e, r), r = null), r
        }
        var g = cc._decorator,
            w = g.property,
            b = (0, g.ccclass)("cc.Physics3DManager")((r = m((n = function() {
                function t() {
                    this.physicsWorld = void 0, this.raycastClosestResult = new d.PhysicsRayResult, this.raycastResults = [], y(this, "_enabled", r, this), y(this, "_allowSleep", s, this), y(this, "_gravity", a, this), y(this, "_maxSubStep", l, this), y(this, "_deltaTime", h, this), y(this, "_useFixedTime", c, this), this._material = null, this.raycastOptions = {
                        groupIndex: -1,
                        queryTrigger: !0,
                        maxDistance: 1 / 0
                    }, this.raycastResultPool = new cc.RecyclePool(function() {
                        return new d.PhysicsRayResult
                    }, 1), cc.director._scheduler && cc.director._scheduler.enableForTarget(this), this.physicsWorld = (0, u.createPhysicsWorld)(), this.gravity = this._gravity, this.allowSleep = this._allowSleep, this._material = new p.PhysicsMaterial, this._material.friction = .1, this._material.restitution = .1, this._material.on("physics_material_update", this._updateMaterial, this), this.physicsWorld.defaultMaterial = this._material
                }
                v(t, [{
                    key: "enabled",
                    get: function() {
                        return this._enabled
                    },
                    set: function(t) {
                        this._enabled = t
                    }
                }, {
                    key: "allowSleep",
                    get: function() {
                        return this._allowSleep
                    },
                    set: function(t) {
                        this._allowSleep = t, this.physicsWorld.allowSleep = this._allowSleep
                    }
                }, {
                    key: "maxSubStep",
                    get: function() {
                        return this._maxSubStep
                    },
                    set: function(t) {
                        this._maxSubStep = t
                    }
                }, {
                    key: "deltaTime",
                    get: function() {
                        return this._deltaTime
                    },
                    set: function(t) {
                        this._deltaTime = t
                    }
                }, {
                    key: "useFixedTime",
                    get: function() {
                        return this._useFixedTime
                    },
                    set: function(t) {
                        this._useFixedTime = t
                    }
                }, {
                    key: "gravity",
                    get: function() {
                        return this._gravity
                    },
                    set: function(t) {
                        this._gravity.set(t), this.physicsWorld.gravity = t
                    }
                }, {
                    key: "defaultMaterial",
                    get: function() {
                        return this._material
                    }
                }]);
                var e = t.prototype;
                return e.update = function(t) {
                    this._enabled && (cc.director.emit(cc.Director.EVENT_BEFORE_PHYSICS), this._useFixedTime ? this.physicsWorld.step(this._deltaTime) : this.physicsWorld.step(this._deltaTime, t, this._maxSubStep), cc.director.emit(cc.Director.EVENT_AFTER_PHYSICS))
                }, e.raycast = function(t, e, i, o) {
                    if (void 0 === e && (e = 0), void 0 === i && (i = 1 / 0), void 0 === o && (o = !0), this.raycastResultPool.reset(), this.raycastResults.length = 0, "string" == typeof e) {
                        var n = cc.game.groupList.indexOf(e); - 1 == n && (n = 0), this.raycastOptions.groupIndex = n
                    } else this.raycastOptions.groupIndex = e;
                    return this.raycastOptions.maxDistance = i, this.raycastOptions.queryTrigger = o, this.physicsWorld.raycast(t, this.raycastOptions, this.raycastResultPool, this.raycastResults) ? this.raycastResults : null
                }, e.raycastClosest = function(t, e, i, o) {
                    if (void 0 === e && (e = 0), void 0 === i && (i = 1 / 0), void 0 === o && (o = !0), "string" == typeof e) {
                        var n = cc.game.groupList.indexOf(e); - 1 == n && (n = 0), this.raycastOptions.groupIndex = n
                    } else this.raycastOptions.groupIndex = e;
                    return this.raycastOptions.maxDistance = i, this.raycastOptions.queryTrigger = o, this.physicsWorld.raycastClosest(t, this.raycastOptions, this.raycastClosestResult) ? this.raycastClosestResult : null
                }, e._updateMaterial = function() {
                    this.physicsWorld.defaultMaterial = this._material
                }, t
            }()).prototype, "_enabled", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }), s = m(n.prototype, "_allowSleep", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0
                }
            }), a = m(n.prototype, "_gravity", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new cc.Vec3(0, -10, 0)
                }
            }), l = m(n.prototype, "_maxSubStep", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1
                }
            }), h = m(n.prototype, "_deltaTime", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1 / 60
                }
            }), c = m(n.prototype, "_useFixedTime", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0
                }
            }), o = n)) || o;
        i.Physics3DManager = b
    }, {
        "./assets/physics-material": 11,
        "./instance": 18,
        "./physics-ray-result": 21
    }],
    21: [function(t, e, i) {
        "use strict";

        function o(t, e) {
            for (var i = 0; i < e.length; i++) {
                var o = e[i];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
            }
        }

        function n(t, e, i) {
            return e && o(t.prototype, e), i && o(t, i), t
        }
        i.__esModule = !0, i.PhysicsRayResult = void 0;
        var r = cc.Vec3,
            s = function() {
                function t() {
                    this._hitPoint = new r, this._distance = 0, this._collidier = null
                }
                var e = t.prototype;
                return e._assign = function(t, e, i) {
                    r.copy(this._hitPoint, t), this._distance = e, this._collidier = i
                }, e.clone = function() {
                    var e = new t;
                    return r.copy(e._hitPoint, this._hitPoint), e._distance = this._distance, e._collidier = this._collidier, e
                }, n(t, [{
                    key: "hitPoint",
                    get: function() {
                        return this._hitPoint
                    }
                }, {
                    key: "distance",
                    get: function() {
                        return this._distance
                    }
                }, {
                    key: "collider",
                    get: function() {
                        return this._collidier
                    }
                }]), t
            }();
        i.PhysicsRayResult = s
    }, {}],
    22: [function(t, e, i) {
        "use strict";
        var o, n, r, s;
        i.__esModule = !0, i.instantiate = function(t, e, a, l) {
            i.BoxShape = o = t, i.SphereShape = n = e, i.RigidBody = r = a, i.PhysicsWorld = s = l
        }, i.PhysicsWorld = i.RigidBody = i.SphereShape = i.BoxShape = void 0, i.BoxShape = o, i.SphereShape = n, i.RigidBody = r, i.PhysicsWorld = s
    }, {}],
    23: [function(t, e, i) {
        "use strict";
        i.__esModule = !0, i.stringfyVec3 = function(t) {
            return "(x: " + t.x + ", y: " + t.y + ", z: " + t.z + ")"
        }, i.stringfyQuat = function(t) {
            return "(x: " + t.x + ", y: " + t.y + ", z: " + t.z + ", w: " + t.w + ")"
        }, i.setWrap = function(t, e) {
            t.__cc_wrapper__ = e
        }, i.getWrap = function(t) {
            return t.__cc_wrapper__
        }, i.clearNodeTransformDirtyFlag = function() {
            for (var t in b) {
                var e = b[t];
                e._localMatDirty &= ~r, e._localMatDirty & s || (e._worldMatDirty = !1, e._renderFlag &= ~a)
            }
            b = {}, d.length = 0
        }, i.clearNodeTransformRecord = function() {
            b = {}, d.length = 0
        }, i.updateWorldTransform = x, i.updateWorldRT = function(t, e, i) {
            var o = t.parent;
            o ? (x(o, !0), c.transformMat4(y, e, h.invert(w, o._worldMatrix)), u.multiply(g, u.conjugate(g, o.__wrot), i), t.setPosition(y), t.setRotation(g)) : (t.setPosition(e), t.setRotation(i))
        };
        var o = cc.Node._LocalDirtyFlag,
            n = o.PHYSICS_TRS,
            r = o.ALL_TRS,
            s = o.SKEW,
            a = cc.RenderFlow.FLAG_TRANSFORM,
            l = cc.Mat3,
            h = cc.Mat4,
            c = cc.Vec3,
            u = cc.Quat,
            p = cc.Trs,
            d = [],
            y = cc.v3(),
            f = cc.quat(),
            v = new l,
            m = v.m,
            g = cc.quat(),
            w = cc.mat4(),
            b = {};

        function x(t, e) {
            void 0 === e && (e = !1);
            for (var i, o, r, s, a, w, x, _, B = t, S = 0, E = !1, M = 0; B;) {
                if (!e && b[B._id]) {
                    M |= B._localMatDirty & n, E = E || !!M;
                    break
                }
                d[S++] = B, B._localMatDirty & n && (E = !0), B = B._parent
            }
            if (!E) return !1;
            for (d.length = S; S;) i = d[--S], !e && (b[i._id] = i), o = i._worldMatrix, a = i._matrix, s = i._trs, w = i.__wpos = i.__wpos || cc.v3(), x = i.__wrot = i.__wrot || cc.quat(), _ = i.__wscale = i.__wscale || cc.v3(), i._localMatDirty & n && p.toMat4(a, s), i._localMatDirty |= M, (M |= i._localMatDirty & n) & n ? (B ? (r = B._worldMatrix, p.toPosition(y, s), c.transformMat4(w, y, r), h.multiply(o, r, a), p.toRotation(f, s), u.multiply(x, B.__wrot, f), l.fromQuat(v, u.conjugate(g, x)), l.multiplyMat4(v, v, o), _.x = m[0], _.y = m[4], _.z = m[8]) : (p.toPosition(w, s), p.toRotation(x, s), p.toScale(_, s), h.copy(o, a)), B = i) : B = i;
            return !0
        }
    }, {}],
    24: [function(t, e, i) {
        (function(o) {
            "use strict";
            ! function(t) {
                if ("object" == typeof i && void 0 !== e) e.exports = t();
                else if ("function" == typeof define && define.amd) define([], t);
                else {
                    var n;
                    "undefined" != typeof window ? n = window : void 0 !== o ? n = o : "undefined" != typeof self && (n = self), n.CANNON = t()
                }
            }(function() {
                return function e(i, o, n) {
                    function r(a, l) {
                        if (!o[a]) {
                            if (!i[a]) {
                                var h = "function" == typeof t && t;
                                if (!l && h) return h(a, !0);
                                if (s) return s(a, !0);
                                throw new Error("Cannot find module '" + a + "'")
                            }
                            var c = o[a] = {
                                exports: {}
                            };
                            i[a][0].call(c.exports, function(t) {
                                var e = i[a][1][t];
                                return r(e || t)
                            }, c, c.exports, e, i, o, n)
                        }
                        return o[a].exports
                    }
                    for (var s = "function" == typeof t && t, a = 0; a < n.length; a++) r(n[a]);
                    return r
                }({
                    1: [function(t, e, i) {
                        e.exports = {
                            name: "@cocos/cannon",
                            version: "1.0.3",
                            description: "A lightweight 3D physics engine written in JavaScript.",
                            homepage: "",
                            author: "",
                            keywords: ["cannon", "cocos", "creator", "physics", "engine", "3d"],
                            scripts: {
                                build: "grunt && npm run preprocess && grunt addLicense && grunt addDate",
                                preprocess: "node node_modules/uglify-js/bin/uglifyjs build/cannon.js -o build/cannon.min.js -d doProfiling=false,DEBUG=false -c -m"
                            },
                            main: "./build/cannon.min.js",
                            engines: {
                                node: "*"
                            },
                            repository: {
                                type: "git",
                                url: ""
                            },
                            bugs: {
                                url: ""
                            },
                            licenses: [{
                                type: "MIT"
                            }],
                            devDependencies: {
                                jshint: "latest",
                                "uglify-js": "latest",
                                nodeunit: "^0.9.0",
                                grunt: "~0.4.0",
                                "grunt-contrib-jshint": "~0.1.1",
                                "grunt-contrib-nodeunit": "^0.4.1",
                                "grunt-contrib-concat": "~0.1.3",
                                "grunt-contrib-uglify": "^0.5.1",
                                "grunt-browserify": "^2.1.4",
                                "grunt-contrib-yuidoc": "^0.5.2",
                                browserify: "*"
                            },
                            dependencies: {}
                        }
                    }, {}],
                    2: [function(t, e, i) {
                        e.exports = {
                            version: t("../package.json").version,
                            AABB: t("./collision/AABB"),
                            ArrayCollisionMatrix: t("./collision/ArrayCollisionMatrix"),
                            Body: t("./objects/Body"),
                            Box: t("./shapes/Box"),
                            Broadphase: t("./collision/Broadphase"),
                            Constraint: t("./constraints/Constraint"),
                            ContactEquation: t("./equations/ContactEquation"),
                            Narrowphase: t("./world/Narrowphase"),
                            ConeTwistConstraint: t("./constraints/ConeTwistConstraint"),
                            ContactMaterial: t("./material/ContactMaterial"),
                            ConvexPolyhedron: t("./shapes/ConvexPolyhedron"),
                            Cylinder: t("./shapes/Cylinder"),
                            DistanceConstraint: t("./constraints/DistanceConstraint"),
                            Equation: t("./equations/Equation"),
                            EventTarget: t("./utils/EventTarget"),
                            FrictionEquation: t("./equations/FrictionEquation"),
                            GSSolver: t("./solver/GSSolver"),
                            GridBroadphase: t("./collision/GridBroadphase"),
                            Heightfield: t("./shapes/Heightfield"),
                            HingeConstraint: t("./constraints/HingeConstraint"),
                            LockConstraint: t("./constraints/LockConstraint"),
                            Mat3: t("./math/Mat3"),
                            Material: t("./material/Material"),
                            NaiveBroadphase: t("./collision/NaiveBroadphase"),
                            ObjectCollisionMatrix: t("./collision/ObjectCollisionMatrix"),
                            Pool: t("./utils/Pool"),
                            Particle: t("./shapes/Particle"),
                            Plane: t("./shapes/Plane"),
                            PointToPointConstraint: t("./constraints/PointToPointConstraint"),
                            Quaternion: t("./math/Quaternion"),
                            Ray: t("./collision/Ray"),
                            RaycastVehicle: t("./objects/RaycastVehicle"),
                            RaycastResult: t("./collision/RaycastResult"),
                            RigidVehicle: t("./objects/RigidVehicle"),
                            RotationalEquation: t("./equations/RotationalEquation"),
                            RotationalMotorEquation: t("./equations/RotationalMotorEquation"),
                            SAPBroadphase: t("./collision/SAPBroadphase"),
                            SPHSystem: t("./objects/SPHSystem"),
                            Shape: t("./shapes/Shape"),
                            Solver: t("./solver/Solver"),
                            Sphere: t("./shapes/Sphere"),
                            SplitSolver: t("./solver/SplitSolver"),
                            Spring: t("./objects/Spring"),
                            Transform: t("./math/Transform"),
                            Trimesh: t("./shapes/Trimesh"),
                            Vec3: t("./math/Vec3"),
                            Vec3Pool: t("./utils/Vec3Pool"),
                            World: t("./world/World")
                        }
                    }, {
                        "../package.json": 1,
                        "./collision/AABB": 3,
                        "./collision/ArrayCollisionMatrix": 4,
                        "./collision/Broadphase": 5,
                        "./collision/GridBroadphase": 6,
                        "./collision/NaiveBroadphase": 7,
                        "./collision/ObjectCollisionMatrix": 8,
                        "./collision/Ray": 10,
                        "./collision/RaycastResult": 11,
                        "./collision/SAPBroadphase": 12,
                        "./constraints/ConeTwistConstraint": 13,
                        "./constraints/Constraint": 14,
                        "./constraints/DistanceConstraint": 15,
                        "./constraints/HingeConstraint": 16,
                        "./constraints/LockConstraint": 17,
                        "./constraints/PointToPointConstraint": 18,
                        "./equations/ContactEquation": 20,
                        "./equations/Equation": 21,
                        "./equations/FrictionEquation": 22,
                        "./equations/RotationalEquation": 23,
                        "./equations/RotationalMotorEquation": 24,
                        "./material/ContactMaterial": 25,
                        "./material/Material": 26,
                        "./math/Mat3": 28,
                        "./math/Quaternion": 29,
                        "./math/Transform": 30,
                        "./math/Vec3": 31,
                        "./objects/Body": 32,
                        "./objects/RaycastVehicle": 33,
                        "./objects/RigidVehicle": 34,
                        "./objects/SPHSystem": 35,
                        "./objects/Spring": 36,
                        "./shapes/Box": 38,
                        "./shapes/ConvexPolyhedron": 39,
                        "./shapes/Cylinder": 40,
                        "./shapes/Heightfield": 41,
                        "./shapes/Particle": 42,
                        "./shapes/Plane": 43,
                        "./shapes/Shape": 44,
                        "./shapes/Sphere": 45,
                        "./shapes/Trimesh": 46,
                        "./solver/GSSolver": 47,
                        "./solver/Solver": 48,
                        "./solver/SplitSolver": 49,
                        "./utils/EventTarget": 50,
                        "./utils/Pool": 52,
                        "./utils/Vec3Pool": 55,
                        "./world/Narrowphase": 56,
                        "./world/World": 57
                    }],
                    3: [function(t, e, i) {
                        var o = t("../math/Vec3");
                        t("../utils/Utils");

                        function n(t) {
                            t = t || {}, this.lowerBound = new o, t.lowerBound && this.lowerBound.copy(t.lowerBound), this.upperBound = new o, t.upperBound && this.upperBound.copy(t.upperBound)
                        }
                        e.exports = n;
                        var r = new o;
                        n.prototype.setFromPoints = function(t, e, i, o) {
                            var n = this.lowerBound,
                                s = this.upperBound,
                                a = i;
                            n.copy(t[0]), a && a.vmult(n, n), s.copy(n);
                            for (var l = 1; l < t.length; l++) {
                                var h = t[l];
                                a && (a.vmult(h, r), h = r), h.x > s.x && (s.x = h.x), h.x < n.x && (n.x = h.x), h.y > s.y && (s.y = h.y), h.y < n.y && (n.y = h.y), h.z > s.z && (s.z = h.z), h.z < n.z && (n.z = h.z)
                            }
                            return e && (e.vadd(n, n), e.vadd(s, s)), o && (n.x -= o, n.y -= o, n.z -= o, s.x += o, s.y += o, s.z += o), this
                        }, n.prototype.copy = function(t) {
                            return this.lowerBound.copy(t.lowerBound), this.upperBound.copy(t.upperBound), this
                        }, n.prototype.clone = function() {
                            return (new n).copy(this)
                        }, n.prototype.extend = function(t) {
                            this.lowerBound.x = Math.min(this.lowerBound.x, t.lowerBound.x), this.upperBound.x = Math.max(this.upperBound.x, t.upperBound.x), this.lowerBound.y = Math.min(this.lowerBound.y, t.lowerBound.y), this.upperBound.y = Math.max(this.upperBound.y, t.upperBound.y), this.lowerBound.z = Math.min(this.lowerBound.z, t.lowerBound.z), this.upperBound.z = Math.max(this.upperBound.z, t.upperBound.z)
                        }, n.prototype.overlaps = function(t) {
                            var e = this.lowerBound,
                                i = this.upperBound,
                                o = t.lowerBound,
                                n = t.upperBound,
                                r = o.x <= i.x && e.x <= n.x,
                                s = o.y <= i.y && e.y <= n.y,
                                a = o.z <= i.z && e.z <= n.z;
                            return r && s && a
                        }, n.prototype.volume = function() {
                            var t = this.lowerBound,
                                e = this.upperBound;
                            return (e.x - t.x) * (e.y - t.y) * (e.z - t.z)
                        }, n.prototype.contains = function(t) {
                            var e = this.lowerBound,
                                i = this.upperBound,
                                o = t.lowerBound,
                                n = t.upperBound;
                            return e.x <= o.x && i.x >= n.x && e.y <= o.y && i.y >= n.y && e.z <= o.z && i.z >= n.z
                        }, n.prototype.getCorners = function(t, e, i, o, n, r, s, a) {
                            var l = this.lowerBound,
                                h = this.upperBound;
                            t.copy(l), e.set(h.x, l.y, l.z), i.set(h.x, h.y, l.z), o.set(l.x, h.y, h.z), n.set(h.x, l.y, h.z), r.set(l.x, h.y, l.z), s.set(l.x, l.y, h.z), a.copy(h)
                        };
                        var s = [new o, new o, new o, new o, new o, new o, new o, new o];
                        n.prototype.toLocalFrame = function(t, e) {
                            var i = s,
                                o = i[0],
                                n = i[1],
                                r = i[2],
                                a = i[3],
                                l = i[4],
                                h = i[5],
                                c = i[6],
                                u = i[7];
                            this.getCorners(o, n, r, a, l, h, c, u);
                            for (var p = 0; 8 !== p; p++) {
                                var d = i[p];
                                t.pointToLocal(d, d)
                            }
                            return e.setFromPoints(i)
                        }, n.prototype.toWorldFrame = function(t, e) {
                            var i = s,
                                o = i[0],
                                n = i[1],
                                r = i[2],
                                a = i[3],
                                l = i[4],
                                h = i[5],
                                c = i[6],
                                u = i[7];
                            this.getCorners(o, n, r, a, l, h, c, u);
                            for (var p = 0; 8 !== p; p++) {
                                var d = i[p];
                                t.pointToWorld(d, d)
                            }
                            return e.setFromPoints(i)
                        }, n.prototype.overlapsRay = function(t) {
                            var e = 1 / t._direction.x,
                                i = 1 / t._direction.y,
                                o = 1 / t._direction.z,
                                n = (this.lowerBound.x - t.from.x) * e,
                                r = (this.upperBound.x - t.from.x) * e,
                                s = (this.lowerBound.y - t.from.y) * i,
                                a = (this.upperBound.y - t.from.y) * i,
                                l = (this.lowerBound.z - t.from.z) * o,
                                h = (this.upperBound.z - t.from.z) * o,
                                c = Math.max(Math.max(Math.min(n, r), Math.min(s, a)), Math.min(l, h)),
                                u = Math.min(Math.min(Math.max(n, r), Math.max(s, a)), Math.max(l, h));
                            return !(u < 0) && !(c > u)
                        }
                    }, {
                        "../math/Vec3": 31,
                        "../utils/Utils": 54
                    }],
                    4: [function(t, e, i) {
                        function o() {
                            this.matrix = []
                        }
                        e.exports = o, o.prototype.get = function(t, e) {
                            if (t = t.index, (e = e.index) > t) {
                                var i = e;
                                e = t, t = i
                            }
                            return this.matrix[(t * (t + 1) >> 1) + e - 1]
                        }, o.prototype.set = function(t, e, i) {
                            if (t = t.index, (e = e.index) > t) {
                                var o = e;
                                e = t, t = o
                            }
                            this.matrix[(t * (t + 1) >> 1) + e - 1] = i ? 1 : 0
                        }, o.prototype.reset = function() {
                            for (var t = 0, e = this.matrix.length; t !== e; t++) this.matrix[t] = 0
                        }, o.prototype.setNumObjects = function(t) {
                            this.matrix.length = t * (t - 1) >> 1
                        }
                    }, {}],
                    5: [function(t, e, i) {
                        var o = t("../objects/Body"),
                            n = t("../math/Vec3"),
                            r = t("../math/Quaternion");
                        t("../shapes/Shape"), t("../shapes/Plane");

                        function s() {
                            this.world = null, this.useBoundingBoxes = !1, this.dirty = !0
                        }
                        e.exports = s, s.prototype.collisionPairs = function(t, e, i) {
                            throw new Error("collisionPairs not implemented for this BroadPhase class!")
                        }, s.prototype.needBroadphaseCollision = function(t, e) {
                            return 0 != (t.collisionFilterGroup & e.collisionFilterMask) && 0 != (e.collisionFilterGroup & t.collisionFilterMask) && (!(!t.hasTrigger && !e.hasTrigger) || (0 == (t.type & o.STATIC) && t.sleepState !== o.SLEEPING || 0 == (e.type & o.STATIC) && e.sleepState !== o.SLEEPING))
                        }, s.prototype.intersectionTest = function(t, e, i, o) {
                            this.useBoundingBoxes ? this.doBoundingBoxBroadphase(t, e, i, o) : this.doBoundingSphereBroadphase(t, e, i, o)
                        };
                        var a = new n;
                        new n, new r, new n;
                        s.prototype.doBoundingSphereBroadphase = function(t, e, i, o) {
                            var n = a;
                            e.position.vsub(t.position, n);
                            var r = Math.pow(t.boundingRadius + e.boundingRadius, 2);
                            n.norm2() < r && (i.push(t), o.push(e))
                        }, s.prototype.doBoundingBoxBroadphase = function(t, e, i, o) {
                            t.aabbNeedsUpdate && t.computeAABB(), e.aabbNeedsUpdate && e.computeAABB(), t.aabb.overlaps(e.aabb) && (i.push(t), o.push(e))
                        };
                        var l = {
                                keys: []
                            },
                            h = [],
                            c = [];
                        s.prototype.makePairsUnique = function(t, e) {
                            for (var i = l, o = h, n = c, r = t.length, s = 0; s !== r; s++) o[s] = t[s], n[s] = e[s];
                            t.length = 0, e.length = 0;
                            for (s = 0; s !== r; s++) {
                                var a = o[s].id,
                                    u = n[s].id;
                                i[p = a < u ? a + "," + u : u + "," + a] = s, i.keys.push(p)
                            }
                            for (s = 0; s !== i.keys.length; s++) {
                                var p, d = i[p = i.keys.pop()];
                                t.push(o[d]), e.push(n[d]), delete i[p]
                            }
                        }, s.prototype.setWorld = function(t) {};
                        var u = new n;
                        s.boundingSphereCheck = function(t, e) {
                            var i = u;
                            return t.position.vsub(e.position, i), Math.pow(t.shape.boundingSphereRadius + e.shape.boundingSphereRadius, 2) > i.norm2()
                        }, s.prototype.aabbQuery = function(t, e, i) {
                            return console.warn(".aabbQuery is not implemented in this Broadphase subclass."), []
                        }
                    }, {
                        "../math/Quaternion": 29,
                        "../math/Vec3": 31,
                        "../objects/Body": 32,
                        "../shapes/Plane": 43,
                        "../shapes/Shape": 44
                    }],
                    6: [function(t, e, i) {
                        e.exports = s;
                        var o = t("./Broadphase"),
                            n = t("../math/Vec3"),
                            r = t("../shapes/Shape");

                        function s(t, e, i, r, s) {
                            o.apply(this), this.nx = i || 10, this.ny = r || 10, this.nz = s || 10, this.aabbMin = t || new n(100, 100, 100), this.aabbMax = e || new n(-100, -100, -100);
                            var a = this.nx * this.ny * this.nz;
                            if (a <= 0) throw "GridBroadphase: Each dimension's n must be >0";
                            this.bins = [], this.binLengths = [], this.bins.length = a, this.binLengths.length = a;
                            for (var l = 0; l < a; l++) this.bins[l] = [], this.binLengths[l] = 0
                        }
                        s.prototype = new o, s.prototype.constructor = s;
                        var a = new n;
                        new n;
                        s.prototype.collisionPairs = function(t, e, i) {
                            for (var o = t.numObjects(), n = t.bodies, s = this.aabbMax, l = this.aabbMin, h = this.nx, c = this.ny, u = this.nz, p = c * u, d = u, y = 1, f = s.x, v = s.y, m = s.z, g = l.x, w = l.y, b = l.z, x = h / (f - g), _ = c / (v - w), B = u / (m - b), S = (f - g) / h, E = (v - w) / c, M = (m - b) / u, A = .5 * Math.sqrt(S * S + E * E + M * M), C = r.types, z = C.SPHERE, R = C.PLANE, P = (C.BOX, C.COMPOUND, C.CONVEXPOLYHEDRON, this.bins), T = this.binLengths, F = this.bins.length, q = 0; q !== F; q++) T[q] = 0;
                            var V = Math.ceil;
                            l = Math.min, s = Math.max;

                            function O(t, e, i, o, n, r, s) {
                                var a = (t - g) * x | 0,
                                    l = (e - w) * _ | 0,
                                    f = (i - b) * B | 0,
                                    v = V((o - g) * x),
                                    m = V((n - w) * _),
                                    S = V((r - b) * B);
                                a < 0 ? a = 0 : a >= h && (a = h - 1), l < 0 ? l = 0 : l >= c && (l = c - 1), f < 0 ? f = 0 : f >= u && (f = u - 1), v < 0 ? v = 0 : v >= h && (v = h - 1), m < 0 ? m = 0 : m >= c && (m = c - 1), S < 0 ? S = 0 : S >= u && (S = u - 1), l *= d, f *= y, v *= p, m *= d, S *= y;
                                for (var E = a *= p; E <= v; E += p)
                                    for (var M = l; M <= m; M += d)
                                        for (var A = f; A <= S; A += y) {
                                            var C = E + M + A;
                                            P[C][T[C]++] = s
                                        }
                            }
                            for (q = 0; q !== o; q++) {
                                var I = (it = n[q]).shape;
                                switch (I.type) {
                                    case z:
                                        var k = it.position.x,
                                            j = it.position.y,
                                            N = it.position.z,
                                            L = I.radius;
                                        O(k - L, j - L, N - L, k + L, j + L, N + L, it);
                                        break;
                                    case R:
                                        I.worldNormalNeedsUpdate && I.computeWorldNormal(it.quaternion);
                                        var W = I.worldNormal,
                                            D = g + .5 * S - it.position.x,
                                            U = w + .5 * E - it.position.y,
                                            G = b + .5 * M - it.position.z,
                                            H = a;
                                        H.set(D, U, G);
                                        for (var Q = 0, X = 0; Q !== h; Q++, X += p, H.y = U, H.x += S)
                                            for (var Y = 0, K = 0; Y !== c; Y++, K += d, H.z = G, H.y += E)
                                                for (var Z = 0, J = 0; Z !== u; Z++, J += y, H.z += M)
                                                    if (H.dot(W) < A) {
                                                        var $ = X + K + J;
                                                        P[$][T[$]++] = it
                                                    }
                                        break;
                                    default:
                                        it.aabbNeedsUpdate && it.computeAABB(), O(it.aabb.lowerBound.x, it.aabb.lowerBound.y, it.aabb.lowerBound.z, it.aabb.upperBound.x, it.aabb.upperBound.y, it.aabb.upperBound.z, it)
                                }
                            }
                            for (q = 0; q !== F; q++) {
                                var tt = T[q];
                                if (tt > 1) {
                                    var et = P[q];
                                    for (Q = 0; Q !== tt; Q++) {
                                        var it = et[Q];
                                        for (Y = 0; Y !== Q; Y++) {
                                            var ot = et[Y];
                                            this.needBroadphaseCollision(it, ot) && this.intersectionTest(it, ot, e, i)
                                        }
                                    }
                                }
                            }
                            this.makePairsUnique(e, i)
                        }
                    }, {
                        "../math/Vec3": 31,
                        "../shapes/Shape": 44,
                        "./Broadphase": 5
                    }],
                    7: [function(t, e, i) {
                        e.exports = r;
                        var o = t("./Broadphase"),
                            n = t("./AABB");

                        function r() {
                            o.apply(this)
                        }
                        r.prototype = new o, r.prototype.constructor = r, r.prototype.collisionPairs = function(t, e, i) {
                            var o, n, r, s, a = t.bodies,
                                l = a.length;
                            for (o = 0; o !== l; o++)
                                for (n = 0; n !== o; n++) r = a[o], s = a[n], this.needBroadphaseCollision(r, s) && this.intersectionTest(r, s, e, i)
                        };
                        new n;
                        r.prototype.aabbQuery = function(t, e, i) {
                            i = i || [];
                            for (var o = 0; o < t.bodies.length; o++) {
                                var n = t.bodies[o];
                                n.aabbNeedsUpdate && n.computeAABB(), n.aabb.overlaps(e) && i.push(n)
                            }
                            return i
                        }
                    }, {
                        "./AABB": 3,
                        "./Broadphase": 5
                    }],
                    8: [function(t, e, i) {
                        function o() {
                            this.matrix = {}
                        }
                        e.exports = o, o.prototype.get = function(t, e) {
                            if (t = t.id, (e = e.id) > t) {
                                var i = e;
                                e = t, t = i
                            }
                            return t + "-" + e in this.matrix
                        }, o.prototype.set = function(t, e, i) {
                            if (t = t.id, (e = e.id) > t) {
                                var o = e;
                                e = t, t = o
                            }
                            i ? this.matrix[t + "-" + e] = !0 : delete this.matrix[t + "-" + e]
                        }, o.prototype.reset = function() {
                            this.matrix = {}
                        }, o.prototype.setNumObjects = function(t) {}
                    }, {}],
                    9: [function(t, e, i) {
                        function o() {
                            this.current = [], this.previous = []
                        }

                        function n(t, e) {
                            t.push((4294901760 & e) >> 16, 65535 & e)
                        }
                        e.exports = o, o.prototype.getKey = function(t, e) {
                            if (e < t) {
                                var i = e;
                                e = t, t = i
                            }
                            return t << 16 | e
                        }, o.prototype.set = function(t, e) {
                            for (var i = this.getKey(t, e), o = this.current, n = 0; i > o[n];) n++;
                            if (i !== o[n]) {
                                for (e = o.length - 1; e >= n; e--) o[e + 1] = o[e];
                                o[n] = i
                            }
                        }, o.prototype.tick = function() {
                            var t = this.current;
                            this.current = this.previous, this.previous = t, this.current.length = 0
                        }, o.prototype.reset = function() {
                            this.previous.length = 0, this.current.length = 0
                        }, o.prototype.getDiff = function(t, e) {
                            for (var i = this.current, o = this.previous, r = i.length, s = o.length, a = 0, l = 0; l < r; l++) {
                                for (var h = i[l]; h > o[a];) a++;
                                h === o[a] || n(t, h)
                            }
                            a = 0;
                            for (l = 0; l < s; l++) {
                                for (var c = o[l]; c > i[a];) a++;
                                i[a] === c || n(e, c)
                            }
                        }, o.prototype.copy = function(t) {
                            this.current.length = 0, this.previous.length = 0, this.current = t.current.slice(), this.previous = t.previous.slice()
                        }
                    }, {}],
                    10: [function(t, e, i) {
                        e.exports = h;
                        var o = t("../math/Vec3"),
                            n = t("../math/Quaternion"),
                            r = t("../math/Transform"),
                            s = (t("../shapes/ConvexPolyhedron"), t("../shapes/Box"), t("../collision/RaycastResult")),
                            a = t("../shapes/Shape"),
                            l = t("../collision/AABB");

                        function h(t, e) {
                            this.from = t ? t.clone() : new o, this.to = e ? e.clone() : new o, this._direction = new o, this.precision = 1e-4, this.checkCollisionResponse = !0, this.skipBackfaces = !1, this.collisionFilterMask = -1, this.collisionFilterGroup = -1, this.mode = h.ANY, this.result = new s, this.hasHit = !1, this.callback = function(t) {}
                        }
                        h.prototype.constructor = h, h.CLOSEST = 1, h.ANY = 2, h.ALL = 4;
                        var c = new l,
                            u = [];
                        h.prototype.intersectWorld = function(t, e) {
                            return this.mode = e.mode || h.ANY, this.result = e.result || new s, this.skipBackfaces = !!e.skipBackfaces, this.collisionFilterMask = void 0 !== e.collisionFilterMask ? e.collisionFilterMask : -1, this.collisionFilterGroup = void 0 !== e.collisionFilterGroup ? e.collisionFilterGroup : -1, e.from && this.from.copy(e.from), e.to && this.to.copy(e.to), this.callback = e.callback || function() {}, this.hasHit = !1, this.result.reset(), this._updateDirection(), this.getAABB(c), u.length = 0, t.broadphase.aabbQuery(t, c, u), this.intersectBodies(u), this.hasHit
                        };
                        var p = new o,
                            d = new o;

                        function y(t, e, i, o) {
                            o.vsub(e, I), i.vsub(e, p), t.vsub(e, d);
                            var n, r, s = I.dot(I),
                                a = I.dot(p),
                                l = I.dot(d),
                                h = p.dot(p),
                                c = p.dot(d);
                            return (n = h * l - a * c) >= 0 && (r = s * c - a * l) >= 0 && n + r < s * h - a * a
                        }
                        h.pointInTriangle = y;
                        var f = new o,
                            v = new n;
                        h.prototype.intersectBody = function(t, e) {
                            e && (this.result = e, this._updateDirection());
                            var i = this.checkCollisionResponse;
                            if ((!i || t.collisionResponse) && 0 != (this.collisionFilterGroup & t.collisionFilterMask) && 0 != (t.collisionFilterGroup & this.collisionFilterMask))
                                for (var o = f, n = v, r = 0, s = t.shapes.length; r < s; r++) {
                                    var a = t.shapes[r];
                                    if ((!i || a.collisionResponse) && (t.quaternion.mult(t.shapeOrientations[r], n), t.quaternion.vmult(t.shapeOffsets[r], o), o.vadd(t.position, o), this.intersectShape(a, n, o, t), this.result._shouldStop)) break
                                }
                        }, h.prototype.intersectBodies = function(t, e) {
                            e && (this.result = e, this._updateDirection());
                            for (var i = 0, o = t.length; !this.result._shouldStop && i < o; i++) this.intersectBody(t[i])
                        }, h.prototype._updateDirection = function() {
                            this.to.vsub(this.from, this._direction), this._direction.normalize()
                        }, h.prototype.intersectShape = function(t, e, i, o) {
                            if (!(j(this.from, this._direction, i) > t.boundingSphereRadius)) {
                                var n = this[t.type];
                                n && n.call(this, t, e, i, o, t)
                            }
                        };
                        new o, new o;
                        var m = new o,
                            g = new o,
                            w = new o,
                            b = new o;
                        new o, new s;
                        h.prototype.intersectBox = function(t, e, i, o, n) {
                            return this.intersectConvex(t.convexPolyhedronRepresentation, e, i, o, n)
                        }, h.prototype[a.types.BOX] = h.prototype.intersectBox, h.prototype.intersectPlane = function(t, e, i, n, r) {
                            var s = this.from,
                                a = this.to,
                                l = this._direction,
                                h = new o(0, 0, 1);
                            e.vmult(h, h);
                            var c = new o;
                            s.vsub(i, c);
                            var u = c.dot(h);
                            if (a.vsub(i, c), !(u * c.dot(h) > 0 || s.distanceTo(a) < u)) {
                                var p = h.dot(l);
                                if (!(Math.abs(p) < this.precision)) {
                                    var d = new o,
                                        y = new o,
                                        f = new o;
                                    s.vsub(i, d);
                                    var v = -h.dot(d) / p;
                                    l.scale(v, y), s.vadd(y, f), this.reportIntersection(h, f, r, n, -1)
                                }
                            }
                        }, h.prototype[a.types.PLANE] = h.prototype.intersectPlane, h.prototype.getAABB = function(t) {
                            var e = this.to,
                                i = this.from;
                            t.lowerBound.x = Math.min(e.x, i.x), t.lowerBound.y = Math.min(e.y, i.y), t.lowerBound.z = Math.min(e.z, i.z), t.upperBound.x = Math.max(e.x, i.x), t.upperBound.y = Math.max(e.y, i.y), t.upperBound.z = Math.max(e.z, i.z)
                        };
                        var x = {
                                faceList: [0]
                            },
                            _ = new o,
                            B = new h,
                            S = [];
                        h.prototype.intersectHeightfield = function(t, e, i, o, n) {
                            t.data, t.elementSize;
                            var s = B;
                            s.from.copy(this.from), s.to.copy(this.to), r.pointToLocalFrame(i, e, s.from, s.from), r.pointToLocalFrame(i, e, s.to, s.to), s._updateDirection();
                            var a, h, c, u, p = S;
                            a = h = 0, c = u = t.data.length - 1;
                            var d = new l;
                            s.getAABB(d), t.getIndexOfPosition(d.lowerBound.x, d.lowerBound.y, p, !0), a = Math.max(a, p[0]), h = Math.max(h, p[1]), t.getIndexOfPosition(d.upperBound.x, d.upperBound.y, p, !0), c = Math.min(c, p[0] + 1), u = Math.min(u, p[1] + 1);
                            for (var y = a; y < c; y++)
                                for (var f = h; f < u; f++) {
                                    if (this.result._shouldStop) return;
                                    if (t.getAabbAtIndex(y, f, d), d.overlapsRay(s)) {
                                        if (t.getConvexTrianglePillar(y, f, !1), r.pointToWorldFrame(i, e, t.pillarOffset, _), this.intersectConvex(t.pillarConvex, e, _, o, n, x), this.result._shouldStop) return;
                                        t.getConvexTrianglePillar(y, f, !0), r.pointToWorldFrame(i, e, t.pillarOffset, _), this.intersectConvex(t.pillarConvex, e, _, o, n, x)
                                    }
                                }
                        }, h.prototype[a.types.HEIGHTFIELD] = h.prototype.intersectHeightfield;
                        var E = new o,
                            M = new o;
                        h.prototype.intersectSphere = function(t, e, i, o, n) {
                            var r = this.from,
                                s = this.to,
                                a = t.radius,
                                l = Math.pow(s.x - r.x, 2) + Math.pow(s.y - r.y, 2) + Math.pow(s.z - r.z, 2),
                                h = 2 * ((s.x - r.x) * (r.x - i.x) + (s.y - r.y) * (r.y - i.y) + (s.z - r.z) * (r.z - i.z)),
                                c = Math.pow(r.x - i.x, 2) + Math.pow(r.y - i.y, 2) + Math.pow(r.z - i.z, 2) - Math.pow(a, 2),
                                u = Math.pow(h, 2) - 4 * l * c,
                                p = E,
                                d = M;
                            if (!(u < 0))
                                if (0 === u) r.lerp(s, u, p), p.vsub(i, d), d.normalize(), this.reportIntersection(d, p, n, o, -1);
                                else {
                                    var y = (-h - Math.sqrt(u)) / (2 * l),
                                        f = (-h + Math.sqrt(u)) / (2 * l);
                                    if (y >= 0 && y <= 1 && (r.lerp(s, y, p), p.vsub(i, d), d.normalize(), this.reportIntersection(d, p, n, o, -1)), this.result._shouldStop) return;
                                    f >= 0 && f <= 1 && (r.lerp(s, f, p), p.vsub(i, d), d.normalize(), this.reportIntersection(d, p, n, o, -1))
                                }
                        }, h.prototype[a.types.SPHERE] = h.prototype.intersectSphere;
                        var A = new o,
                            C = (new o, new o, new o);
                        h.prototype.intersectConvex = function(t, e, i, o, n, r) {
                            for (var s = A, a = C, l = r && r.faceList || null, h = t.faces, c = t.vertices, u = t.faceNormals, p = this._direction, d = this.from, f = this.to, v = d.distanceTo(f), x = l ? l.length : h.length, _ = this.result, B = 0; !_._shouldStop && B < x; B++) {
                                var S = l ? l[B] : B,
                                    E = h[S],
                                    M = u[S],
                                    z = e,
                                    R = i;
                                a.copy(c[E[0]]), z.vmult(a, a), a.vadd(R, a), a.vsub(d, a), z.vmult(M, s);
                                var P = p.dot(s);
                                if (!(Math.abs(P) < this.precision)) {
                                    var T = s.dot(a) / P;
                                    if (!(T < 0)) {
                                        p.mult(T, m), m.vadd(d, m), g.copy(c[E[0]]), z.vmult(g, g), R.vadd(g, g);
                                        for (var F = 1; !_._shouldStop && F < E.length - 1; F++) {
                                            w.copy(c[E[F]]), b.copy(c[E[F + 1]]), z.vmult(w, w), z.vmult(b, b), R.vadd(w, w), R.vadd(b, b);
                                            var q = m.distanceTo(d);
                                            !y(m, g, w, b) && !y(m, w, g, b) || q > v || this.reportIntersection(s, m, n, o, S)
                                        }
                                    }
                                }
                            }
                        }, h.prototype[a.types.CONVEXPOLYHEDRON] = h.prototype.intersectConvex;
                        var z = new o,
                            R = new o,
                            P = new o,
                            T = new o,
                            F = new o,
                            q = new o,
                            V = (new l, []),
                            O = new r;
                        h.prototype.intersectTrimesh = function(t, e, i, o, n, s) {
                            var a = z,
                                l = V,
                                h = O,
                                c = C,
                                u = R,
                                p = P,
                                d = T,
                                f = q,
                                v = F,
                                x = (s && s.faceList, t.indices),
                                _ = (t.vertices, t.faceNormals, this.from),
                                B = this.to,
                                S = this._direction;
                            h.position.copy(i), h.quaternion.copy(e), r.vectorToLocalFrame(i, e, S, u), r.pointToLocalFrame(i, e, _, p), r.pointToLocalFrame(i, e, B, d), d.x *= t.scale.x, d.y *= t.scale.y, d.z *= t.scale.z, p.x *= t.scale.x, p.y *= t.scale.y, p.z *= t.scale.z, d.vsub(p, u), u.normalize();
                            var E = p.distanceSquared(d);
                            t.tree.rayQuery(this, h, l);
                            for (var M = 0, A = l.length; !this.result._shouldStop && M !== A; M++) {
                                var I = l[M];
                                t.getNormal(I, a), t.getVertex(x[3 * I], g), g.vsub(p, c);
                                var k = u.dot(a),
                                    j = a.dot(c) / k;
                                if (!(j < 0)) {
                                    u.scale(j, m), m.vadd(p, m), t.getVertex(x[3 * I + 1], w), t.getVertex(x[3 * I + 2], b);
                                    var N = m.distanceSquared(p);
                                    !y(m, w, g, b) && !y(m, g, w, b) || N > E || (r.vectorToWorldFrame(e, a, v), r.pointToWorldFrame(i, e, m, f), this.reportIntersection(v, f, n, o, I))
                                }
                            }
                            l.length = 0
                        }, h.prototype[a.types.TRIMESH] = h.prototype.intersectTrimesh, h.prototype.reportIntersection = function(t, e, i, o, n) {
                            var r = this.from,
                                s = this.to,
                                a = r.distanceTo(e),
                                l = this.result;
                            if (!(this.skipBackfaces && t.dot(this._direction) > 0)) switch (l.hitFaceIndex = void 0 !== n ? n : -1, this.mode) {
                                case h.ALL:
                                    this.hasHit = !0, l.set(r, s, t, e, i, o, a), l.hasHit = !0, this.callback(l);
                                    break;
                                case h.CLOSEST:
                                    (a < l.distance || !l.hasHit) && (this.hasHit = !0, l.hasHit = !0, l.set(r, s, t, e, i, o, a));
                                    break;
                                case h.ANY:
                                    this.hasHit = !0, l.hasHit = !0, l.set(r, s, t, e, i, o, a), l._shouldStop = !0
                            }
                        };
                        var I = new o,
                            k = new o;

                        function j(t, e, i) {
                            i.vsub(t, I);
                            var o = I.dot(e);
                            return e.mult(o, k), k.vadd(t, k), i.distanceTo(k)
                        }
                    }, {
                        "../collision/AABB": 3,
                        "../collision/RaycastResult": 11,
                        "../math/Quaternion": 29,
                        "../math/Transform": 30,
                        "../math/Vec3": 31,
                        "../shapes/Box": 38,
                        "../shapes/ConvexPolyhedron": 39,
                        "../shapes/Shape": 44
                    }],
                    11: [function(t, e, i) {
                        var o = t("../math/Vec3");

                        function n() {
                            this.rayFromWorld = new o, this.rayToWorld = new o, this.hitNormalWorld = new o, this.hitPointWorld = new o, this.hasHit = !1, this.shape = null, this.body = null, this.hitFaceIndex = -1, this.distance = -1, this._shouldStop = !1
                        }
                        e.exports = n, n.prototype.reset = function() {
                            this.rayFromWorld.setZero(), this.rayToWorld.setZero(), this.hitNormalWorld.setZero(), this.hitPointWorld.setZero(), this.hasHit = !1, this.shape = null, this.body = null, this.hitFaceIndex = -1, this.distance = -1, this._shouldStop = !1
                        }, n.prototype.abort = function() {
                            this._shouldStop = !0
                        }, n.prototype.set = function(t, e, i, o, n, r, s) {
                            this.rayFromWorld.copy(t), this.rayToWorld.copy(e), this.hitNormalWorld.copy(i), this.hitPointWorld.copy(o), this.shape = n, this.body = r, this.distance = s
                        }
                    }, {
                        "../math/Vec3": 31
                    }],
                    12: [function(t, e, i) {
                        t("../shapes/Shape");
                        var o = t("../collision/Broadphase");

                        function n(t) {
                            o.apply(this), this.axisList = [], this.world = null, this.axisIndex = 0;
                            var e = this.axisList;
                            this._addBodyHandler = function(t) {
                                e.push(t.body)
                            }, this._removeBodyHandler = function(t) {
                                var i = e.indexOf(t.body); - 1 !== i && e.splice(i, 1)
                            }, t && this.setWorld(t)
                        }
                        e.exports = n, n.prototype = new o, n.prototype.setWorld = function(t) {
                            this.axisList.length = 0;
                            for (var e = 0; e < t.bodies.length; e++) this.axisList.push(t.bodies[e]);
                            t.removeEventListener("addBody", this._addBodyHandler), t.removeEventListener("removeBody", this._removeBodyHandler), t.addEventListener("addBody", this._addBodyHandler), t.addEventListener("removeBody", this._removeBodyHandler), this.world = t, this.dirty = !0
                        }, n.insertionSortX = function(t) {
                            for (var e = 1, i = t.length; e < i; e++) {
                                for (var o = t[e], n = e - 1; n >= 0 && !(t[n].aabb.lowerBound.x <= o.aabb.lowerBound.x); n--) t[n + 1] = t[n];
                                t[n + 1] = o
                            }
                            return t
                        }, n.insertionSortY = function(t) {
                            for (var e = 1, i = t.length; e < i; e++) {
                                for (var o = t[e], n = e - 1; n >= 0 && !(t[n].aabb.lowerBound.y <= o.aabb.lowerBound.y); n--) t[n + 1] = t[n];
                                t[n + 1] = o
                            }
                            return t
                        }, n.insertionSortZ = function(t) {
                            for (var e = 1, i = t.length; e < i; e++) {
                                for (var o = t[e], n = e - 1; n >= 0 && !(t[n].aabb.lowerBound.z <= o.aabb.lowerBound.z); n--) t[n + 1] = t[n];
                                t[n + 1] = o
                            }
                            return t
                        }, n.prototype.collisionPairs = function(t, e, i) {
                            var o, r, s = this.axisList,
                                a = s.length,
                                l = this.axisIndex;
                            for (this.dirty && (this.sortList(), this.dirty = !1), o = 0; o !== a; o++) {
                                var h = s[o];
                                for (r = o + 1; r < a; r++) {
                                    var c = s[r];
                                    if (this.needBroadphaseCollision(h, c)) {
                                        if (!n.checkBounds(h, c, l)) break;
                                        this.intersectionTest(h, c, e, i)
                                    }
                                }
                            }
                        }, n.prototype.sortList = function() {
                            for (var t = this.axisList, e = this.axisIndex, i = t.length, o = 0; o !== i; o++) {
                                var r = t[o];
                                r.aabbNeedsUpdate && r.computeAABB()
                            }
                            0 === e ? n.insertionSortX(t) : 1 === e ? n.insertionSortY(t) : 2 === e && n.insertionSortZ(t)
                        }, n.checkBounds = function(t, e, i) {
                            var o, n;
                            0 === i ? (o = t.position.x, n = e.position.x) : 1 === i ? (o = t.position.y, n = e.position.y) : 2 === i && (o = t.position.z, n = e.position.z);
                            var r = t.boundingRadius,
                                s = e.boundingRadius;
                            return n - s < o + r
                        }, n.prototype.autoDetectAxis = function() {
                            for (var t = 0, e = 0, i = 0, o = 0, n = 0, r = 0, s = this.axisList, a = s.length, l = 1 / a, h = 0; h !== a; h++) {
                                var c = s[h],
                                    u = c.position.x;
                                t += u, e += u * u;
                                var p = c.position.y;
                                i += p, o += p * p;
                                var d = c.position.z;
                                n += d, r += d * d
                            }
                            var y = e - t * t * l,
                                f = o - i * i * l,
                                v = r - n * n * l;
                            this.axisIndex = y > f ? y > v ? 0 : 2 : f > v ? 1 : 2
                        }, n.prototype.aabbQuery = function(t, e, i) {
                            i = i || [], this.dirty && (this.sortList(), this.dirty = !1);
                            var o = this.axisIndex,
                                n = "x";
                            1 === o && (n = "y"), 2 === o && (n = "z");
                            for (var r = this.axisList, s = (e.lowerBound[n], e.upperBound[n], 0); s < r.length; s++) {
                                var a = r[s];
                                a.aabbNeedsUpdate && a.computeAABB(), a.aabb.overlaps(e) && i.push(a)
                            }
                            return i
                        }
                    }, {
                        "../collision/Broadphase": 5,
                        "../shapes/Shape": 44
                    }],
                    13: [function(t, e, i) {
                        e.exports = a;
                        t("./Constraint");
                        var o = t("./PointToPointConstraint"),
                            n = t("../equations/ConeEquation"),
                            r = t("../equations/RotationalEquation"),
                            s = (t("../equations/ContactEquation"), t("../math/Vec3"));

                        function a(t, e, i) {
                            var a = void 0 !== (i = i || {}).maxForce ? i.maxForce : 1e6,
                                l = i.pivotA ? i.pivotA.clone() : new s,
                                h = i.pivotB ? i.pivotB.clone() : new s;
                            this.axisA = i.axisA ? i.axisA.clone() : new s, this.axisB = i.axisB ? i.axisB.clone() : new s, o.call(this, t, l, e, h, a), this.collideConnected = !!i.collideConnected, this.angle = void 0 !== i.angle ? i.angle : 0;
                            var c = this.coneEquation = new n(t, e, i),
                                u = this.twistEquation = new r(t, e, i);
                            this.twistAngle = void 0 !== i.twistAngle ? i.twistAngle : 0, c.maxForce = 0, c.minForce = -a, u.maxForce = 0, u.minForce = -a, this.equations.push(c, u)
                        }
                        a.prototype = new o, a.constructor = a;
                        new s, new s;
                        a.prototype.update = function() {
                            var t = this.bodyA,
                                e = this.bodyB,
                                i = this.coneEquation,
                                n = this.twistEquation;
                            o.prototype.update.call(this), t.vectorToWorldFrame(this.axisA, i.axisA), e.vectorToWorldFrame(this.axisB, i.axisB), this.axisA.tangents(n.axisA, n.axisA), t.vectorToWorldFrame(n.axisA, n.axisA), this.axisB.tangents(n.axisB, n.axisB), e.vectorToWorldFrame(n.axisB, n.axisB), i.angle = this.angle, n.maxAngle = this.twistAngle
                        }
                    }, {
                        "../equations/ConeEquation": 19,
                        "../equations/ContactEquation": 20,
                        "../equations/RotationalEquation": 23,
                        "../math/Vec3": 31,
                        "./Constraint": 14,
                        "./PointToPointConstraint": 18
                    }],
                    14: [function(t, e, i) {
                        e.exports = n;
                        var o = t("../utils/Utils");

                        function n(t, e, i) {
                            i = o.defaults(i, {
                                collideConnected: !0,
                                wakeUpBodies: !0
                            }), this.equations = [], this.bodyA = t, this.bodyB = e, this.id = n.idCounter++, this.collideConnected = i.collideConnected, i.wakeUpBodies && (t && t.wakeUp(), e && e.wakeUp())
                        }
                        n.prototype.update = function() {
                            throw new Error("method update() not implmemented in this Constraint subclass!")
                        }, n.prototype.enable = function() {
                            for (var t = this.equations, e = 0; e < t.length; e++) t[e].enabled = !0
                        }, n.prototype.disable = function() {
                            for (var t = this.equations, e = 0; e < t.length; e++) t[e].enabled = !1
                        }, n.idCounter = 0
                    }, {
                        "../utils/Utils": 54
                    }],
                    15: [function(t, e, i) {
                        e.exports = r;
                        var o = t("./Constraint"),
                            n = t("../equations/ContactEquation");

                        function r(t, e, i, r) {
                            o.call(this, t, e), void 0 === i && (i = t.position.distanceTo(e.position)), void 0 === r && (r = 1e6), this.distance = i;
                            var s = this.distanceEquation = new n(t, e);
                            this.equations.push(s), s.minForce = -r, s.maxForce = r
                        }
                        r.prototype = new o, r.prototype.update = function() {
                            var t = this.bodyA,
                                e = this.bodyB,
                                i = this.distanceEquation,
                                o = .5 * this.distance,
                                n = i.ni;
                            e.position.vsub(t.position, n), n.normalize(), n.mult(o, i.ri), n.mult(-o, i.rj)
                        }
                    }, {
                        "../equations/ContactEquation": 20,
                        "./Constraint": 14
                    }],
                    16: [function(t, e, i) {
                        e.exports = a;
                        t("./Constraint");
                        var o = t("./PointToPointConstraint"),
                            n = t("../equations/RotationalEquation"),
                            r = t("../equations/RotationalMotorEquation"),
                            s = (t("../equations/ContactEquation"), t("../math/Vec3"));

                        function a(t, e, i) {
                            var a = void 0 !== (i = i || {}).maxForce ? i.maxForce : 1e6,
                                l = i.pivotA ? i.pivotA.clone() : new s,
                                h = i.pivotB ? i.pivotB.clone() : new s;
                            o.call(this, t, l, e, h, a), (this.axisA = i.axisA ? i.axisA.clone() : new s(1, 0, 0)).normalize(), (this.axisB = i.axisB ? i.axisB.clone() : new s(1, 0, 0)).normalize();
                            var c = this.rotationalEquation1 = new n(t, e, i),
                                u = this.rotationalEquation2 = new n(t, e, i),
                                p = this.motorEquation = new r(t, e, a);
                            p.enabled = !1, this.equations.push(c, u, p)
                        }
                        a.prototype = new o, a.constructor = a, a.prototype.enableMotor = function() {
                            this.motorEquation.enabled = !0
                        }, a.prototype.disableMotor = function() {
                            this.motorEquation.enabled = !1
                        }, a.prototype.setMotorSpeed = function(t) {
                            this.motorEquation.targetVelocity = t
                        }, a.prototype.setMotorMaxForce = function(t) {
                            this.motorEquation.maxForce = t, this.motorEquation.minForce = -t
                        };
                        var l = new s,
                            h = new s;
                        a.prototype.update = function() {
                            var t = this.bodyA,
                                e = this.bodyB,
                                i = this.motorEquation,
                                n = this.rotationalEquation1,
                                r = this.rotationalEquation2,
                                s = l,
                                a = h,
                                c = this.axisA,
                                u = this.axisB;
                            o.prototype.update.call(this), t.quaternion.vmult(c, s), e.quaternion.vmult(u, a), s.tangents(n.axisA, r.axisA), n.axisB.copy(a), r.axisB.copy(a), this.motorEquation.enabled && (t.quaternion.vmult(this.axisA, i.axisA), e.quaternion.vmult(this.axisB, i.axisB))
                        }
                    }, {
                        "../equations/ContactEquation": 20,
                        "../equations/RotationalEquation": 23,
                        "../equations/RotationalMotorEquation": 24,
                        "../math/Vec3": 31,
                        "./Constraint": 14,
                        "./PointToPointConstraint": 18
                    }],
                    17: [function(t, e, i) {
                        e.exports = s;
                        t("./Constraint");
                        var o = t("./PointToPointConstraint"),
                            n = t("../equations/RotationalEquation"),
                            r = (t("../equations/RotationalMotorEquation"), t("../equations/ContactEquation"), t("../math/Vec3"));

                        function s(t, e, i) {
                            var s = void 0 !== (i = i || {}).maxForce ? i.maxForce : 1e6,
                                a = new r,
                                l = new r,
                                h = new r;
                            t.position.vadd(e.position, h), h.scale(.5, h), e.pointToLocalFrame(h, l), t.pointToLocalFrame(h, a), o.call(this, t, a, e, l, s), this.xA = t.vectorToLocalFrame(r.UNIT_X), this.xB = e.vectorToLocalFrame(r.UNIT_X), this.yA = t.vectorToLocalFrame(r.UNIT_Y), this.yB = e.vectorToLocalFrame(r.UNIT_Y), this.zA = t.vectorToLocalFrame(r.UNIT_Z), this.zB = e.vectorToLocalFrame(r.UNIT_Z);
                            var c = this.rotationalEquation1 = new n(t, e, i),
                                u = this.rotationalEquation2 = new n(t, e, i),
                                p = this.rotationalEquation3 = new n(t, e, i);
                            this.equations.push(c, u, p)
                        }
                        s.prototype = new o, s.constructor = s;
                        new r, new r;
                        s.prototype.update = function() {
                            var t = this.bodyA,
                                e = this.bodyB,
                                i = (this.motorEquation, this.rotationalEquation1),
                                n = this.rotationalEquation2,
                                r = this.rotationalEquation3;
                            o.prototype.update.call(this), t.vectorToWorldFrame(this.xA, i.axisA), e.vectorToWorldFrame(this.yB, i.axisB), t.vectorToWorldFrame(this.yA, n.axisA), e.vectorToWorldFrame(this.zB, n.axisB), t.vectorToWorldFrame(this.zA, r.axisA), e.vectorToWorldFrame(this.xB, r.axisB)
                        }
                    }, {
                        "../equations/ContactEquation": 20,
                        "../equations/RotationalEquation": 23,
                        "../equations/RotationalMotorEquation": 24,
                        "../math/Vec3": 31,
                        "./Constraint": 14,
                        "./PointToPointConstraint": 18
                    }],
                    18: [function(t, e, i) {
                        e.exports = s;
                        var o = t("./Constraint"),
                            n = t("../equations/ContactEquation"),
                            r = t("../math/Vec3");

                        function s(t, e, i, s, a) {
                            o.call(this, t, i), a = void 0 !== a ? a : 1e6, this.pivotA = e ? e.clone() : new r, this.pivotB = s ? s.clone() : new r;
                            var l = this.equationX = new n(t, i),
                                h = this.equationY = new n(t, i),
                                c = this.equationZ = new n(t, i);
                            this.equations.push(l, h, c), l.minForce = h.minForce = c.minForce = -a, l.maxForce = h.maxForce = c.maxForce = a, l.ni.set(1, 0, 0), h.ni.set(0, 1, 0), c.ni.set(0, 0, 1)
                        }
                        s.prototype = new o, s.prototype.update = function() {
                            var t = this.bodyA,
                                e = this.bodyB,
                                i = this.equationX,
                                o = this.equationY,
                                n = this.equationZ;
                            t.quaternion.vmult(this.pivotA, i.ri), e.quaternion.vmult(this.pivotB, i.rj), o.ri.copy(i.ri), o.rj.copy(i.rj), n.ri.copy(i.ri), n.rj.copy(i.rj)
                        }
                    }, {
                        "../equations/ContactEquation": 20,
                        "../math/Vec3": 31,
                        "./Constraint": 14
                    }],
                    19: [function(t, e, i) {
                        e.exports = r;
                        var o = t("../math/Vec3"),
                            n = (t("../math/Mat3"), t("./Equation"));

                        function r(t, e, i) {
                            var r = void 0 !== (i = i || {}).maxForce ? i.maxForce : 1e6;
                            n.call(this, t, e, -r, r), this.axisA = i.axisA ? i.axisA.clone() : new o(1, 0, 0), this.axisB = i.axisB ? i.axisB.clone() : new o(0, 1, 0), this.angle = void 0 !== i.angle ? i.angle : 0
                        }
                        r.prototype = new n, r.prototype.constructor = r;
                        var s = new o,
                            a = new o;
                        r.prototype.computeB = function(t) {
                            var e = this.a,
                                i = this.b,
                                o = this.axisA,
                                n = this.axisB,
                                r = s,
                                l = a,
                                h = this.jacobianElementA,
                                c = this.jacobianElementB;
                            return o.cross(n, r), n.cross(o, l), h.rotational.copy(l), c.rotational.copy(r), -(Math.cos(this.angle) - o.dot(n)) * e - this.computeGW() * i - t * this.computeGiMf()
                        }
                    }, {
                        "../math/Mat3": 28,
                        "../math/Vec3": 31,
                        "./Equation": 21
                    }],
                    20: [function(t, e, i) {
                        e.exports = r;
                        var o = t("./Equation"),
                            n = t("../math/Vec3");
                        t("../math/Mat3");

                        function r(t, e, i) {
                            i = void 0 !== i ? i : 1e6, o.call(this, t, e, 0, i), this.si = null, this.sj = null, this.restitution = 0, this.ri = new n, this.rj = new n, this.ni = new n
                        }
                        r.prototype = new o, r.prototype.constructor = r;
                        var s = new n,
                            a = new n,
                            l = new n;
                        r.prototype.computeB = function(t) {
                            var e = this.a,
                                i = this.b,
                                o = this.bi,
                                n = this.bj,
                                r = this.ri,
                                h = this.rj,
                                c = s,
                                u = a,
                                p = o.velocity,
                                d = o.angularVelocity,
                                y = (o.force, o.torque, n.velocity),
                                f = n.angularVelocity,
                                v = (n.force, n.torque, l),
                                m = this.jacobianElementA,
                                g = this.jacobianElementB,
                                w = this.ni;
                            r.cross(w, c), h.cross(w, u), w.negate(m.spatial), c.negate(m.rotational), g.spatial.copy(w), g.rotational.copy(u), v.copy(n.position), v.vadd(h, v), v.vsub(o.position, v), v.vsub(r, v);
                            var b = w.dot(v),
                                x = this.restitution + 1;
                            return -b * e - (x * y.dot(w) - x * p.dot(w) + f.dot(u) - d.dot(c)) * i - t * this.computeGiMf()
                        };
                        var h = new n,
                            c = new n,
                            u = new n,
                            p = new n,
                            d = new n;
                        r.prototype.getImpactVelocityAlongNormal = function() {
                            var t = h,
                                e = c,
                                i = u,
                                o = p,
                                n = d;
                            return this.bi.position.vadd(this.ri, i), this.bj.position.vadd(this.rj, o), this.bi.getVelocityAtWorldPoint(i, t), this.bj.getVelocityAtWorldPoint(o, e), t.vsub(e, n), this.ni.dot(n)
                        }
                    }, {
                        "../math/Mat3": 28,
                        "../math/Vec3": 31,
                        "./Equation": 21
                    }],
                    21: [function(t, e, i) {
                        e.exports = r;
                        var o = t("../math/JacobianElement"),
                            n = t("../math/Vec3");

                        function r(t, e, i, n) {
                            this.id = r.id++, this.minForce = void 0 === i ? -1e6 : i, this.maxForce = void 0 === n ? 1e6 : n, this.bi = t, this.bj = e, this.a = 0, this.b = 0, this.eps = 0, this.jacobianElementA = new o, this.jacobianElementB = new o, this.enabled = !0, this.multiplier = 0, this.setSpookParams(1e7, 4, 1 / 60)
                        }
                        r.prototype.constructor = r, r.id = 0, r.prototype.setSpookParams = function(t, e, i) {
                            var o = e,
                                n = t,
                                r = i;
                            this.a = 4 / (r * (1 + 4 * o)), this.b = 4 * o / (1 + 4 * o), this.eps = 4 / (r * r * n * (1 + 4 * o))
                        }, r.prototype.computeB = function(t, e, i) {
                            var o = this.computeGW();
                            return -this.computeGq() * t - o * e - this.computeGiMf() * i
                        }, r.prototype.computeGq = function() {
                            var t = this.jacobianElementA,
                                e = this.jacobianElementB,
                                i = this.bi,
                                o = this.bj,
                                n = i.position,
                                r = o.position;
                            return t.spatial.dot(n) + e.spatial.dot(r)
                        };
                        new n;
                        r.prototype.computeGW = function() {
                            var t = this.jacobianElementA,
                                e = this.jacobianElementB,
                                i = this.bi,
                                o = this.bj,
                                n = i.velocity,
                                r = o.velocity,
                                s = i.angularVelocity,
                                a = o.angularVelocity;
                            return t.multiplyVectors(n, s) + e.multiplyVectors(r, a)
                        }, r.prototype.computeGWlambda = function() {
                            var t = this.jacobianElementA,
                                e = this.jacobianElementB,
                                i = this.bi,
                                o = this.bj,
                                n = i.vlambda,
                                r = o.vlambda,
                                s = i.wlambda,
                                a = o.wlambda;
                            return t.multiplyVectors(n, s) + e.multiplyVectors(r, a)
                        };
                        var s = new n,
                            a = new n,
                            l = new n,
                            h = new n;
                        r.prototype.computeGiMf = function() {
                            var t = this.jacobianElementA,
                                e = this.jacobianElementB,
                                i = this.bi,
                                o = this.bj,
                                n = i.force,
                                r = i.torque,
                                c = o.force,
                                u = o.torque,
                                p = i.invMassSolve,
                                d = o.invMassSolve;
                            return n.scale(p, s), c.scale(d, a), i.invInertiaWorldSolve.vmult(r, l), o.invInertiaWorldSolve.vmult(u, h), t.multiplyVectors(s, l) + e.multiplyVectors(a, h)
                        };
                        var c = new n;
                        r.prototype.computeGiMGt = function() {
                            var t = this.jacobianElementA,
                                e = this.jacobianElementB,
                                i = this.bi,
                                o = this.bj,
                                n = i.invMassSolve,
                                r = o.invMassSolve,
                                s = i.invInertiaWorldSolve,
                                a = o.invInertiaWorldSolve,
                                l = n + r;
                            return s.vmult(t.rotational, c), l += c.dot(t.rotational), a.vmult(e.rotational, c), l += c.dot(e.rotational)
                        };
                        var u = new n;
                        new n, new n, new n, new n, new n;
                        r.prototype.addToWlambda = function(t) {
                            var e = this.jacobianElementA,
                                i = this.jacobianElementB,
                                o = this.bi,
                                n = this.bj,
                                r = u;
                            o.vlambda.addScaledVector(o.invMassSolve * t, e.spatial, o.vlambda), n.vlambda.addScaledVector(n.invMassSolve * t, i.spatial, n.vlambda), o.invInertiaWorldSolve.vmult(e.rotational, r), o.wlambda.addScaledVector(t, r, o.wlambda), n.invInertiaWorldSolve.vmult(i.rotational, r), n.wlambda.addScaledVector(t, r, n.wlambda)
                        }, r.prototype.computeC = function() {
                            return this.computeGiMGt() + this.eps
                        }
                    }, {
                        "../math/JacobianElement": 27,
                        "../math/Vec3": 31
                    }],
                    22: [function(t, e, i) {
                        e.exports = r;
                        var o = t("./Equation"),
                            n = t("../math/Vec3");
                        t("../math/Mat3");

                        function r(t, e, i) {
                            o.call(this, t, e, -i, i), this.ri = new n, this.rj = new n, this.t = new n
                        }
                        r.prototype = new o, r.prototype.constructor = r;
                        var s = new n,
                            a = new n;
                        r.prototype.computeB = function(t) {
                            this.a;
                            var e = this.b,
                                i = (this.bi, this.bj, this.ri),
                                o = this.rj,
                                n = s,
                                r = a,
                                l = this.t;
                            i.cross(l, n), o.cross(l, r);
                            var h = this.jacobianElementA,
                                c = this.jacobianElementB;
                            return l.negate(h.spatial), n.negate(h.rotational), c.spatial.copy(l), c.rotational.copy(r), -this.computeGW() * e - t * this.computeGiMf()
                        }
                    }, {
                        "../math/Mat3": 28,
                        "../math/Vec3": 31,
                        "./Equation": 21
                    }],
                    23: [function(t, e, i) {
                        e.exports = r;
                        var o = t("../math/Vec3"),
                            n = (t("../math/Mat3"), t("./Equation"));

                        function r(t, e, i) {
                            var r = void 0 !== (i = i || {}).maxForce ? i.maxForce : 1e6;
                            n.call(this, t, e, -r, r), this.axisA = i.axisA ? i.axisA.clone() : new o(1, 0, 0), this.axisB = i.axisB ? i.axisB.clone() : new o(0, 1, 0), this.maxAngle = Math.PI / 2
                        }
                        r.prototype = new n, r.prototype.constructor = r;
                        var s = new o,
                            a = new o;
                        r.prototype.computeB = function(t) {
                            var e = this.a,
                                i = this.b,
                                o = this.axisA,
                                n = this.axisB,
                                r = s,
                                l = a,
                                h = this.jacobianElementA,
                                c = this.jacobianElementB;
                            return o.cross(n, r), n.cross(o, l), h.rotational.copy(l), c.rotational.copy(r), -(Math.cos(this.maxAngle) - o.dot(n)) * e - this.computeGW() * i - t * this.computeGiMf()
                        }
                    }, {
                        "../math/Mat3": 28,
                        "../math/Vec3": 31,
                        "./Equation": 21
                    }],
                    24: [function(t, e, i) {
                        e.exports = r;
                        var o = t("../math/Vec3"),
                            n = (t("../math/Mat3"), t("./Equation"));

                        function r(t, e, i) {
                            i = void 0 !== i ? i : 1e6, n.call(this, t, e, -i, i), this.axisA = new o, this.axisB = new o, this.targetVelocity = 0
                        }
                        r.prototype = new n, r.prototype.constructor = r, r.prototype.computeB = function(t) {
                            this.a;
                            var e = this.b,
                                i = (this.bi, this.bj, this.axisA),
                                o = this.axisB,
                                n = this.jacobianElementA,
                                r = this.jacobianElementB;
                            return n.rotational.copy(i), o.negate(r.rotational), -(this.computeGW() - this.targetVelocity) * e - t * this.computeGiMf()
                        }
                    }, {
                        "../math/Mat3": 28,
                        "../math/Vec3": 31,
                        "./Equation": 21
                    }],
                    25: [function(t, e, i) {
                        var o = t("../utils/Utils");

                        function n(t, e, i) {
                            i = o.defaults(i, {
                                friction: .3,
                                restitution: .3,
                                contactEquationStiffness: 1e7,
                                contactEquationRelaxation: 3,
                                frictionEquationStiffness: 1e7,
                                frictionEquationRelaxation: 3
                            }), this.id = n.idCounter++, this.materials = [t, e], this.friction = i.friction, this.restitution = i.restitution, this.contactEquationStiffness = i.contactEquationStiffness, this.contactEquationRelaxation = i.contactEquationRelaxation, this.frictionEquationStiffness = i.frictionEquationStiffness, this.frictionEquationRelaxation = i.frictionEquationRelaxation
                        }
                        e.exports = n, n.idCounter = 0
                    }, {
                        "../utils/Utils": 54
                    }],
                    26: [function(t, e, i) {
                        function o(t) {
                            var e = "";
                            "string" == typeof(t = t || {}) ? (e = t, t = {}) : "object" == typeof t && (e = ""), this.name = e, this.id = o.idCounter++, this.friction = void 0 !== t.friction ? t.friction : -1, this.restitution = void 0 !== t.restitution ? t.restitution : -1
                        }
                        e.exports = o, o.idCounter = 0
                    }, {}],
                    27: [function(t, e, i) {
                        e.exports = n;
                        var o = t("./Vec3");

                        function n() {
                            this.spatial = new o, this.rotational = new o
                        }
                        n.prototype.multiplyElement = function(t) {
                            return t.spatial.dot(this.spatial) + t.rotational.dot(this.rotational)
                        }, n.prototype.multiplyVectors = function(t, e) {
                            return t.dot(this.spatial) + e.dot(this.rotational)
                        }
                    }, {
                        "./Vec3": 31
                    }],
                    28: [function(t, e, i) {
                        e.exports = n;
                        var o = t("./Vec3");

                        function n(t) {
                            this.elements = t || [0, 0, 0, 0, 0, 0, 0, 0, 0]
                        }
                        n.prototype.identity = function() {
                            var t = this.elements;
                            t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1
                        }, n.prototype.setZero = function() {
                            var t = this.elements;
                            t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 0
                        }, n.prototype.setTrace = function(t) {
                            var e = this.elements;
                            e[0] = t.x, e[4] = t.y, e[8] = t.z
                        }, n.prototype.getTrace = function(t) {
                            t = t || new o;
                            var e = this.elements;
                            t.x = e[0], t.y = e[4], t.z = e[8]
                        }, n.prototype.vmult = function(t, e) {
                            e = e || new o;
                            var i = this.elements,
                                n = t.x,
                                r = t.y,
                                s = t.z;
                            return e.x = i[0] * n + i[1] * r + i[2] * s, e.y = i[3] * n + i[4] * r + i[5] * s, e.z = i[6] * n + i[7] * r + i[8] * s, e
                        }, n.prototype.smult = function(t) {
                            for (var e = 0; e < this.elements.length; e++) this.elements[e] *= t
                        }, n.prototype.mmult = function(t, e) {
                            for (var i = e || new n, o = 0; o < 3; o++)
                                for (var r = 0; r < 3; r++) {
                                    for (var s = 0, a = 0; a < 3; a++) s += t.elements[o + 3 * a] * this.elements[a + 3 * r];
                                    i.elements[o + 3 * r] = s
                                }
                            return i
                        }, n.prototype.scale = function(t, e) {
                            e = e || new n;
                            for (var i = this.elements, o = e.elements, r = 0; 3 !== r; r++) o[3 * r + 0] = t.x * i[3 * r + 0], o[3 * r + 1] = t.y * i[3 * r + 1], o[3 * r + 2] = t.z * i[3 * r + 2];
                            return e
                        }, n.prototype.solve = function(t, e) {
                            e = e || new o;
                            for (var i, n = [], r = 0; r < 12; r++) n.push(0);
                            for (r = 0; r < 3; r++)
                                for (i = 0; i < 3; i++) n[r + 4 * i] = this.elements[r + 3 * i];
                            n[3] = t.x, n[7] = t.y, n[11] = t.z;
                            var s, a, l = 3,
                                h = l;
                            do {
                                if (0 === n[(r = h - l) + 4 * r])
                                    for (i = r + 1; i < h; i++)
                                        if (0 !== n[r + 4 * i]) {
                                            s = 4;
                                            do {
                                                n[(a = 4 - s) + 4 * r] += n[a + 4 * i]
                                            } while (--s);
                                            break
                                        }
                                if (0 !== n[r + 4 * r])
                                    for (i = r + 1; i < h; i++) {
                                        var c = n[r + 4 * i] / n[r + 4 * r];
                                        s = 4;
                                        do {
                                            n[(a = 4 - s) + 4 * i] = a <= r ? 0 : n[a + 4 * i] - n[a + 4 * r] * c
                                        } while (--s)
                                    }
                            } while (--l);
                            if (e.z = n[11] / n[10], e.y = (n[7] - n[6] * e.z) / n[5], e.x = (n[3] - n[2] * e.z - n[1] * e.y) / n[0], isNaN(e.x) || isNaN(e.y) || isNaN(e.z) || e.x === 1 / 0 || e.y === 1 / 0 || e.z === 1 / 0) throw "Could not solve equation! Got x=[" + e.toString() + "], b=[" + t.toString() + "], A=[" + this.toString() + "]";
                            return e
                        }, n.prototype.e = function(t, e, i) {
                            if (void 0 === i) return this.elements[e + 3 * t];
                            this.elements[e + 3 * t] = i
                        }, n.prototype.copy = function(t) {
                            for (var e = 0; e < t.elements.length; e++) this.elements[e] = t.elements[e];
                            return this
                        }, n.prototype.toString = function() {
                            for (var t = "", e = 0; e < 9; e++) t += this.elements[e] + ",";
                            return t
                        }, n.prototype.reverse = function(t) {
                            t = t || new n;
                            for (var e, i = [], o = 0; o < 18; o++) i.push(0);
                            for (o = 0; o < 3; o++)
                                for (e = 0; e < 3; e++) i[o + 6 * e] = this.elements[o + 3 * e];
                            i[3] = 1, i[9] = 0, i[15] = 0, i[4] = 0, i[10] = 1, i[16] = 0, i[5] = 0, i[11] = 0, i[17] = 1;
                            var r, s, a = 3,
                                l = a;
                            do {
                                if (0 === i[(o = l - a) + 6 * o])
                                    for (e = o + 1; e < l; e++)
                                        if (0 !== i[o + 6 * e]) {
                                            r = 6;
                                            do {
                                                i[(s = 6 - r) + 6 * o] += i[s + 6 * e]
                                            } while (--r);
                                            break
                                        }
                                if (0 !== i[o + 6 * o])
                                    for (e = o + 1; e < l; e++) {
                                        var h = i[o + 6 * e] / i[o + 6 * o];
                                        r = 6;
                                        do {
                                            i[(s = 6 - r) + 6 * e] = s <= o ? 0 : i[s + 6 * e] - i[s + 6 * o] * h
                                        } while (--r)
                                    }
                            } while (--a);
                            o = 2;
                            do {
                                e = o - 1;
                                do {
                                    h = i[o + 6 * e] / i[o + 6 * o];
                                    r = 6;
                                    do {
                                        i[(s = 6 - r) + 6 * e] = i[s + 6 * e] - i[s + 6 * o] * h
                                    } while (--r)
                                } while (e--)
                            } while (--o);
                            o = 2;
                            do {
                                h = 1 / i[o + 6 * o];
                                r = 6;
                                do {
                                    i[(s = 6 - r) + 6 * o] = i[s + 6 * o] * h
                                } while (--r)
                            } while (o--);
                            o = 2;
                            do {
                                e = 2;
                                do {
                                    if (s = i[3 + e + 6 * o], isNaN(s) || s === 1 / 0) throw "Could not reverse! A=[" + this.toString() + "]";
                                    t.e(o, e, s)
                                } while (e--)
                            } while (o--);
                            return t
                        }, n.prototype.setRotationFromQuaternion = function(t) {
                            var e = t.x,
                                i = t.y,
                                o = t.z,
                                n = t.w,
                                r = e + e,
                                s = i + i,
                                a = o + o,
                                l = e * r,
                                h = e * s,
                                c = e * a,
                                u = i * s,
                                p = i * a,
                                d = o * a,
                                y = n * r,
                                f = n * s,
                                v = n * a,
                                m = this.elements;
                            return m[0] = 1 - (u + d), m[1] = h - v, m[2] = c + f, m[3] = h + v, m[4] = 1 - (l + d), m[5] = p - y, m[6] = c - f, m[7] = p + y, m[8] = 1 - (l + u), this
                        }, n.prototype.transpose = function(t) {
                            for (var e = (t = t || new n).elements, i = this.elements, o = 0; 3 !== o; o++)
                                for (var r = 0; 3 !== r; r++) e[3 * o + r] = i[3 * r + o];
                            return t
                        }
                    }, {
                        "./Vec3": 31
                    }],
                    29: [function(t, e, i) {
                        e.exports = n;
                        var o = t("./Vec3");

                        function n(t, e, i, o) {
                            this.x = void 0 !== t ? t : 0, this.y = void 0 !== e ? e : 0, this.z = void 0 !== i ? i : 0, this.w = void 0 !== o ? o : 1
                        }
                        n.prototype.set = function(t, e, i, o) {
                            return this.x = t, this.y = e, this.z = i, this.w = o, this
                        }, n.prototype.toString = function() {
                            return this.x + "," + this.y + "," + this.z + "," + this.w
                        }, n.prototype.toArray = function() {
                            return [this.x, this.y, this.z, this.w]
                        }, n.prototype.setFromAxisAngle = function(t, e) {
                            var i = Math.sin(.5 * e);
                            return this.x = t.x * i, this.y = t.y * i, this.z = t.z * i, this.w = Math.cos(.5 * e), this
                        }, n.prototype.toAxisAngle = function(t) {
                            t = t || new o, this.normalize();
                            var e = 2 * Math.acos(this.w),
                                i = Math.sqrt(1 - this.w * this.w);
                            return i < .001 ? (t.x = this.x, t.y = this.y, t.z = this.z) : (t.x = this.x / i, t.y = this.y / i, t.z = this.z / i), [t, e]
                        };
                        var r = new o,
                            s = new o;
                        n.prototype.setFromVectors = function(t, e) {
                            if (t.isAntiparallelTo(e)) {
                                var i = r,
                                    o = s;
                                t.tangents(i, o), this.setFromAxisAngle(i, Math.PI)
                            } else {
                                var n = t.cross(e);
                                this.x = n.x, this.y = n.y, this.z = n.z, this.w = Math.sqrt(Math.pow(t.norm(), 2) * Math.pow(e.norm(), 2)) + t.dot(e), this.normalize()
                            }
                            return this
                        };
                        new o, new o, new o;
                        n.prototype.mult = function(t, e) {
                            e = e || new n;
                            var i = this.x,
                                o = this.y,
                                r = this.z,
                                s = this.w,
                                a = t.x,
                                l = t.y,
                                h = t.z,
                                c = t.w;
                            return e.x = i * c + s * a + o * h - r * l, e.y = o * c + s * l + r * a - i * h, e.z = r * c + s * h + i * l - o * a, e.w = s * c - i * a - o * l - r * h, e
                        }, n.prototype.inverse = function(t) {
                            var e = this.x,
                                i = this.y,
                                o = this.z,
                                r = this.w;
                            t = t || new n, this.conjugate(t);
                            var s = 1 / (e * e + i * i + o * o + r * r);
                            return t.x *= s, t.y *= s, t.z *= s, t.w *= s, t
                        }, n.prototype.conjugate = function(t) {
                            return (t = t || new n).x = -this.x, t.y = -this.y, t.z = -this.z, t.w = this.w, t
                        }, n.prototype.normalize = function() {
                            var t = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
                            return 0 === t ? (this.x = 0, this.y = 0, this.z = 0, this.w = 0) : (t = 1 / t, this.x *= t, this.y *= t, this.z *= t, this.w *= t), this
                        }, n.prototype.normalizeFast = function() {
                            var t = (3 - (this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)) / 2;
                            return 0 === t ? (this.x = 0, this.y = 0, this.z = 0, this.w = 0) : (this.x *= t, this.y *= t, this.z *= t, this.w *= t), this
                        }, n.prototype.vmult = function(t, e) {
                            e = e || new o;
                            var i = t.x,
                                n = t.y,
                                r = t.z,
                                s = this.x,
                                a = this.y,
                                l = this.z,
                                h = this.w,
                                c = h * i + a * r - l * n,
                                u = h * n + l * i - s * r,
                                p = h * r + s * n - a * i,
                                d = -s * i - a * n - l * r;
                            return e.x = c * h + d * -s + u * -l - p * -a, e.y = u * h + d * -a + p * -s - c * -l, e.z = p * h + d * -l + c * -a - u * -s, e
                        }, n.prototype.copy = function(t) {
                            return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w, this
                        }, n.prototype.toEuler = function(t, e) {
                            var i, o, n;
                            e = e || "YZX";
                            var r = this.x,
                                s = this.y,
                                a = this.z,
                                l = this.w;
                            switch (e) {
                                case "YZX":
                                    var h = r * s + a * l;
                                    if (h > .499 && (i = 2 * Math.atan2(r, l), o = Math.PI / 2, n = 0), h < -.499 && (i = -2 * Math.atan2(r, l), o = -Math.PI / 2, n = 0), isNaN(i)) {
                                        var c = r * r,
                                            u = s * s,
                                            p = a * a;
                                        i = Math.atan2(2 * s * l - 2 * r * a, 1 - 2 * u - 2 * p), o = Math.asin(2 * h), n = Math.atan2(2 * r * l - 2 * s * a, 1 - 2 * c - 2 * p)
                                    }
                                    break;
                                default:
                                    throw new Error("Euler order " + e + " not supported yet.")
                            }
                            t.y = i, t.z = o, t.x = n
                        }, n.prototype.setFromEuler = function(t, e, i, o) {
                            o = o || "XYZ";
                            var n = Math.cos(t / 2),
                                r = Math.cos(e / 2),
                                s = Math.cos(i / 2),
                                a = Math.sin(t / 2),
                                l = Math.sin(e / 2),
                                h = Math.sin(i / 2);
                            return "XYZ" === o ? (this.x = a * r * s + n * l * h, this.y = n * l * s - a * r * h, this.z = n * r * h + a * l * s, this.w = n * r * s - a * l * h) : "YXZ" === o ? (this.x = a * r * s + n * l * h, this.y = n * l * s - a * r * h, this.z = n * r * h - a * l * s, this.w = n * r * s + a * l * h) : "ZXY" === o ? (this.x = a * r * s - n * l * h, this.y = n * l * s + a * r * h, this.z = n * r * h + a * l * s, this.w = n * r * s - a * l * h) : "ZYX" === o ? (this.x = a * r * s - n * l * h, this.y = n * l * s + a * r * h, this.z = n * r * h - a * l * s, this.w = n * r * s + a * l * h) : "YZX" === o ? (this.x = a * r * s + n * l * h, this.y = n * l * s + a * r * h, this.z = n * r * h - a * l * s, this.w = n * r * s - a * l * h) : "XZY" === o && (this.x = a * r * s - n * l * h, this.y = n * l * s - a * r * h, this.z = n * r * h + a * l * s, this.w = n * r * s + a * l * h), this
                        }, n.prototype.clone = function() {
                            return new n(this.x, this.y, this.z, this.w)
                        }, n.prototype.slerp = function(t, e, i) {
                            i = i || new n;
                            var o, r, s, a, l, h = this.x,
                                c = this.y,
                                u = this.z,
                                p = this.w,
                                d = t.x,
                                y = t.y,
                                f = t.z,
                                v = t.w;
                            return (r = h * d + c * y + u * f + p * v) < 0 && (r = -r, d = -d, y = -y, f = -f, v = -v), 1 - r > 1e-6 ? (o = Math.acos(r), s = Math.sin(o), a = Math.sin((1 - e) * o) / s, l = Math.sin(e * o) / s) : (a = 1 - e, l = e), i.x = a * h + l * d, i.y = a * c + l * y, i.z = a * u + l * f, i.w = a * p + l * v, i
                        }, n.prototype.integrate = function(t, e, i, o) {
                            o = o || new n;
                            var r = t.x * i.x,
                                s = t.y * i.y,
                                a = t.z * i.z,
                                l = this.x,
                                h = this.y,
                                c = this.z,
                                u = this.w,
                                p = .5 * e;
                            return o.x += p * (r * u + s * c - a * h), o.y += p * (s * u + a * l - r * c), o.z += p * (a * u + r * h - s * l), o.w += p * (-r * l - s * h - a * c), o
                        }
                    }, {
                        "./Vec3": 31
                    }],
                    30: [function(t, e, i) {
                        var o = t("./Vec3"),
                            n = t("./Quaternion");

                        function r(t) {
                            t = t || {}, this.position = new o, t.position && this.position.copy(t.position), this.quaternion = new n, t.quaternion && this.quaternion.copy(t.quaternion)
                        }
                        e.exports = r;
                        var s = new n;
                        r.pointToLocalFrame = function(t, e, i, n) {
                            n = n || new o;
                            return i.vsub(t, n), e.conjugate(s), s.vmult(n, n), n
                        }, r.prototype.pointToLocal = function(t, e) {
                            return r.pointToLocalFrame(this.position, this.quaternion, t, e)
                        }, r.pointToWorldFrame = function(t, e, i, n) {
                            n = n || new o;
                            return e.vmult(i, n), n.vadd(t, n), n
                        }, r.prototype.pointToWorld = function(t, e) {
                            return r.pointToWorldFrame(this.position, this.quaternion, t, e)
                        }, r.prototype.vectorToWorldFrame = function(t, e) {
                            e = e || new o;
                            return this.quaternion.vmult(t, e), e
                        }, r.vectorToWorldFrame = function(t, e, i) {
                            return t.vmult(e, i), i
                        }, r.vectorToLocalFrame = function(t, e, i, n) {
                            n = n || new o;
                            return e.w *= -1, e.vmult(i, n), e.w *= -1, n
                        }
                    }, {
                        "./Quaternion": 29,
                        "./Vec3": 31
                    }],
                    31: [function(t, e, i) {
                        e.exports = n;
                        var o = t("./Mat3");

                        function n(t, e, i) {
                            this.x = t || 0, this.y = e || 0, this.z = i || 0
                        }
                        n.ZERO = new n(0, 0, 0), n.UNIT_X = new n(1, 0, 0), n.UNIT_Y = new n(0, 1, 0), n.UNIT_Z = new n(0, 0, 1), n.prototype.cross = function(t, e) {
                            var i = t.x,
                                o = t.y,
                                r = t.z,
                                s = this.x,
                                a = this.y,
                                l = this.z;
                            return (e = e || new n).x = a * r - l * o, e.y = l * i - s * r, e.z = s * o - a * i, e
                        }, n.prototype.set = function(t, e, i) {
                            return this.x = t, this.y = e, this.z = i, this
                        }, n.prototype.setZero = function() {
                            this.x = this.y = this.z = 0
                        }, n.prototype.vadd = function(t, e) {
                            if (!e) return new n(this.x + t.x, this.y + t.y, this.z + t.z);
                            e.x = t.x + this.x, e.y = t.y + this.y, e.z = t.z + this.z
                        }, n.prototype.vsub = function(t, e) {
                            if (!e) return new n(this.x - t.x, this.y - t.y, this.z - t.z);
                            e.x = this.x - t.x, e.y = this.y - t.y, e.z = this.z - t.z
                        }, n.prototype.crossmat = function() {
                            return new o([0, -this.z, this.y, this.z, 0, -this.x, -this.y, this.x, 0])
                        }, n.prototype.normalize = function() {
                            var t = this.x,
                                e = this.y,
                                i = this.z,
                                o = Math.sqrt(t * t + e * e + i * i);
                            if (o > 0) {
                                var n = 1 / o;
                                this.x *= n, this.y *= n, this.z *= n
                            } else this.x = 0, this.y = 0, this.z = 0;
                            return o
                        }, n.prototype.unit = function(t) {
                            t = t || new n;
                            var e = this.x,
                                i = this.y,
                                o = this.z,
                                r = Math.sqrt(e * e + i * i + o * o);
                            return r > 0 ? (r = 1 / r, t.x = e * r, t.y = i * r, t.z = o * r) : (t.x = 1, t.y = 0, t.z = 0), t
                        }, n.prototype.norm = function() {
                            var t = this.x,
                                e = this.y,
                                i = this.z;
                            return Math.sqrt(t * t + e * e + i * i)
                        }, n.prototype.length = n.prototype.norm, n.prototype.norm2 = function() {
                            return this.dot(this)
                        }, n.prototype.lengthSquared = n.prototype.norm2, n.prototype.distanceTo = function(t) {
                            var e = this.x,
                                i = this.y,
                                o = this.z,
                                n = t.x,
                                r = t.y,
                                s = t.z;
                            return Math.sqrt((n - e) * (n - e) + (r - i) * (r - i) + (s - o) * (s - o))
                        }, n.prototype.distanceSquared = function(t) {
                            var e = this.x,
                                i = this.y,
                                o = this.z,
                                n = t.x,
                                r = t.y,
                                s = t.z;
                            return (n - e) * (n - e) + (r - i) * (r - i) + (s - o) * (s - o)
                        }, n.prototype.mult = function(t, e) {
                            e = e || new n;
                            var i = this.x,
                                o = this.y,
                                r = this.z;
                            return e.x = t * i, e.y = t * o, e.z = t * r, e
                        }, n.prototype.vmul = function(t, e) {
                            return (e = e || new n).x = t.x * this.x, e.y = t.y * this.y, e.z = t.z * this.z, e
                        }, n.prototype.scale = n.prototype.mult, n.prototype.addScaledVector = function(t, e, i) {
                            return (i = i || new n).x = this.x + t * e.x, i.y = this.y + t * e.y, i.z = this.z + t * e.z, i
                        }, n.prototype.dot = function(t) {
                            return this.x * t.x + this.y * t.y + this.z * t.z
                        }, n.prototype.isZero = function() {
                            return 0 === this.x && 0 === this.y && 0 === this.z
                        }, n.prototype.negate = function(t) {
                            return (t = t || new n).x = -this.x, t.y = -this.y, t.z = -this.z, t
                        };
                        var r = new n,
                            s = new n;
                        n.prototype.tangents = function(t, e) {
                            var i = this.norm();
                            if (i > 0) {
                                var o = r,
                                    n = 1 / i;
                                o.set(this.x * n, this.y * n, this.z * n);
                                var a = s;
                                Math.abs(o.x) < .9 ? (a.set(1, 0, 0), o.cross(a, t)) : (a.set(0, 1, 0), o.cross(a, t)), o.cross(t, e)
                            } else t.set(1, 0, 0), e.set(0, 1, 0)
                        }, n.prototype.toString = function() {
                            return this.x + "," + this.y + "," + this.z
                        }, n.prototype.toArray = function() {
                            return [this.x, this.y, this.z]
                        }, n.prototype.copy = function(t) {
                            return this.x = t.x, this.y = t.y, this.z = t.z, this
                        }, n.prototype.lerp = function(t, e, i) {
                            var o = this.x,
                                n = this.y,
                                r = this.z;
                            i.x = o + (t.x - o) * e, i.y = n + (t.y - n) * e, i.z = r + (t.z - r) * e
                        }, n.prototype.almostEquals = function(t, e) {
                            return void 0 === e && (e = 1e-6), !(Math.abs(this.x - t.x) > e || Math.abs(this.y - t.y) > e || Math.abs(this.z - t.z) > e)
                        }, n.prototype.almostZero = function(t) {
                            return void 0 === t && (t = 1e-6), !(Math.abs(this.x) > t || Math.abs(this.y) > t || Math.abs(this.z) > t)
                        };
                        var a = new n;
                        n.prototype.isAntiparallelTo = function(t, e) {
                            return this.negate(a), a.almostEquals(t, e)
                        }, n.prototype.clone = function() {
                            return new n(this.x, this.y, this.z)
                        }
                    }, {
                        "./Mat3": 28
                    }],
                    32: [function(t, e, i) {
                        e.exports = c;
                        var o = t("../utils/EventTarget"),
                            n = (t("../shapes/Shape"), t("../math/Vec3")),
                            r = t("../math/Mat3"),
                            s = t("../math/Quaternion"),
                            a = (t("../material/Material"), t("../collision/AABB")),
                            l = t("../shapes/Box"),
                            h = t("../world/World");

                        function c(t) {
                            t = t || {}, o.apply(this), this.id = c.idCounter++, this.world = null, this.preStep = null, this.postStep = null, this.vlambda = new n, this.collisionFilterGroup = "number" == typeof t.collisionFilterGroup ? t.collisionFilterGroup : 1, this.collisionFilterMask = "number" == typeof t.collisionFilterMask ? t.collisionFilterMask : -1, this.collisionResponse = !0, this.position = new n, this.previousPosition = new n, this.interpolatedPosition = new n, this.initPosition = new n, t.position && (this.position.copy(t.position), this.previousPosition.copy(t.position), this.interpolatedPosition.copy(t.position), this.initPosition.copy(t.position)), this.velocity = new n, t.velocity && this.velocity.copy(t.velocity), this.initVelocity = new n, this.force = new n;
                            var e = "number" == typeof t.mass ? t.mass : 0;
                            this.mass = e, this.invMass = e > 0 ? 1 / e : 0, this.material = t.material || null, this.linearDamping = "number" == typeof t.linearDamping ? t.linearDamping : .01, this.type = e <= 0 ? c.STATIC : c.DYNAMIC, typeof t.type == typeof c.STATIC && (this.type = t.type), this.allowSleep = void 0 === t.allowSleep || t.allowSleep, this.sleepState = 0, this.sleepSpeedLimit = void 0 !== t.sleepSpeedLimit ? t.sleepSpeedLimit : .1, this.sleepTimeLimit = void 0 !== t.sleepTimeLimit ? t.sleepTimeLimit : 1, this.timeLastSleepy = 0, this._wakeUpAfterNarrowphase = !1, this.torque = new n, this.quaternion = new s, this.initQuaternion = new s, this.previousQuaternion = new s, this.interpolatedQuaternion = new s, t.quaternion && (this.quaternion.copy(t.quaternion), this.initQuaternion.copy(t.quaternion), this.previousQuaternion.copy(t.quaternion), this.interpolatedQuaternion.copy(t.quaternion)), this.angularVelocity = new n, t.angularVelocity && this.angularVelocity.copy(t.angularVelocity), this.initAngularVelocity = new n, this.shapes = [], this.shapeOffsets = [], this.shapeOrientations = [], this.inertia = new n, this.invInertia = new n, this.invInertiaWorld = new r, this.invMassSolve = 0, this.invInertiaSolve = new n, this.invInertiaWorldSolve = new r, this.fixedRotation = void 0 !== t.fixedRotation && t.fixedRotation, this.useGravity = !0, this.angularDamping = void 0 !== t.angularDamping ? t.angularDamping : .01, this.linearFactor = new n(1, 1, 1), t.linearFactor && this.linearFactor.copy(t.linearFactor), this.angularFactor = new n(1, 1, 1), t.angularFactor && this.angularFactor.copy(t.angularFactor), this.aabb = new a, this.aabbNeedsUpdate = !0, this.boundingRadius = 0, this.wlambda = new n, t.shape && this.addShape(t.shape), this.hasTrigger = !0, this.updateMassProperties()
                        }
                        c.prototype = new o, c.prototype.constructor = c, c.COLLIDE_EVENT_NAME = "collide", c.DYNAMIC = 1, c.STATIC = 2, c.KINEMATIC = 4, c.AWAKE = 0, c.SLEEPY = 1, c.SLEEPING = 2, c.idCounter = 0, c.wakeupEvent = {
                            type: "wakeup"
                        }, c.prototype.wakeUp = function() {
                            var t = this.sleepState;
                            this.sleepState = 0, this._wakeUpAfterNarrowphase = !1, t === c.SLEEPING && this.dispatchEvent(c.wakeupEvent)
                        }, c.prototype.sleep = function() {
                            this.sleepState = c.SLEEPING, this.velocity.set(0, 0, 0), this.angularVelocity.set(0, 0, 0), this._wakeUpAfterNarrowphase = !1
                        }, c.sleepyEvent = {
                            type: "sleepy"
                        }, c.sleepEvent = {
                            type: "sleep"
                        }, c.prototype.sleepTick = function(t) {
                            if (this.allowSleep) {
                                var e = this.sleepState,
                                    i = this.velocity.norm2() + this.angularVelocity.norm2(),
                                    o = Math.pow(this.sleepSpeedLimit, 2);
                                e === c.AWAKE && i < o ? (this.sleepState = c.SLEEPY, this.timeLastSleepy = t, this.dispatchEvent(c.sleepyEvent)) : e === c.SLEEPY && i > o ? this.wakeUp() : e === c.SLEEPY && t - this.timeLastSleepy > this.sleepTimeLimit && (this.sleep(), this.dispatchEvent(c.sleepEvent))
                            }
                        }, c.prototype.updateSolveMassProperties = function() {
                            this.sleepState === c.SLEEPING || this.type === c.KINEMATIC ? (this.invMassSolve = 0, this.invInertiaSolve.setZero(), this.invInertiaWorldSolve.setZero()) : (this.invMassSolve = this.invMass, this.invInertiaSolve.copy(this.invInertia), this.invInertiaWorldSolve.copy(this.invInertiaWorld))
                        }, c.prototype.pointToLocalFrame = function(t, e) {
                            e = e || new n;
                            return t.vsub(this.position, e), this.quaternion.conjugate().vmult(e, e), e
                        }, c.prototype.vectorToLocalFrame = function(t, e) {
                            e = e || new n;
                            return this.quaternion.conjugate().vmult(t, e), e
                        }, c.prototype.pointToWorldFrame = function(t, e) {
                            e = e || new n;
                            return this.quaternion.vmult(t, e), e.vadd(this.position, e), e
                        }, c.prototype.vectorToWorldFrame = function(t, e) {
                            e = e || new n;
                            return this.quaternion.vmult(t, e), e
                        };
                        var u = new n,
                            p = new s;
                        c.prototype.addShape = function(t, e, i) {
                            var o, r;
                            return DEBUG ? (o = new n, r = new s, e && o.copy(e), i && r.copy(i)) : (r = i, (o = e) || (o = new n), r || (r = new s)), h.idToShapeMap[t.id] = t, this.shapes.push(t), this.shapeOffsets.push(o), this.shapeOrientations.push(r), this.updateMassProperties(), this.updateBoundingRadius(), this.aabbNeedsUpdate = !0, this.updateHasTrigger(), t.body = this, this
                        }, c.prototype.removeShape = function(t) {
                            var e = this.shapes.indexOf(t); - 1 !== e && (this.shapes.splice(e, 1), this.shapeOffsets.splice(e, 1), this.shapeOrientations.splice(e, 1), this.updateMassProperties(), this.updateBoundingRadius(), this.aabbNeedsUpdate = !0, this.updateHasTrigger())
                        }, c.prototype.updateBoundingRadius = function() {
                            for (var t = this.shapes, e = this.shapeOffsets, i = t.length, o = 0, n = 0; n !== i; n++) {
                                var r = t[n];
                                r.updateBoundingSphereRadius();
                                var s = e[n].norm(),
                                    a = r.boundingSphereRadius;
                                s + a > o && (o = s + a)
                            }
                            this.boundingRadius = o
                        };
                        var d = new a;
                        c.prototype.computeAABB = function() {
                            for (var t = this.shapes, e = this.shapeOffsets, i = this.shapeOrientations, o = t.length, n = u, r = p, s = this.quaternion, a = this.aabb, l = d, h = 0; h !== o; h++) {
                                var c = t[h];
                                s.vmult(e[h], n), n.vadd(this.position, n), i[h].mult(s, r), c.calculateWorldAABB(n, r, l.lowerBound, l.upperBound), 0 === h ? a.copy(l) : a.extend(l)
                            }
                            this.aabbNeedsUpdate = !1
                        };
                        var y = new r,
                            f = new r;
                        new r;
                        c.prototype.updateInertiaWorld = function(t) {
                            var e = this.invInertia;
                            if (e.x !== e.y || e.y !== e.z || t) {
                                var i = y,
                                    o = f;
                                i.setRotationFromQuaternion(this.quaternion), i.transpose(o), i.scale(e, i), i.mmult(o, this.invInertiaWorld)
                            } else;
                        };
                        var v = new n;
                        c.prototype.applyForce = function(t, e) {
                            if (this.type === c.DYNAMIC) {
                                var i = v;
                                e.cross(t, i), this.force.vadd(t, this.force), this.torque.vadd(i, this.torque)
                            }
                        };
                        var m = new n,
                            g = new n;
                        c.prototype.applyLocalForce = function(t, e) {
                            if (this.type === c.DYNAMIC) {
                                var i = m,
                                    o = g;
                                this.vectorToWorldFrame(t, i), this.vectorToWorldFrame(e, o), this.applyForce(i, o)
                            }
                        };
                        var w = new n,
                            b = new n;
                        c.prototype.applyImpulse = function(t, e) {
                            if (this.type === c.DYNAMIC) {
                                var i = e,
                                    o = w;
                                o.copy(t), o.mult(this.invMass, o), this.velocity.vadd(o, this.velocity);
                                var n = b;
                                i.cross(t, n), this.invInertiaWorld.vmult(n, n), this.angularVelocity.vadd(n, this.angularVelocity)
                            }
                        };
                        var x = new n,
                            _ = new n;
                        c.prototype.applyLocalImpulse = function(t, e) {
                            if (this.type === c.DYNAMIC) {
                                var i = x,
                                    o = _;
                                this.vectorToWorldFrame(t, i), this.vectorToWorldFrame(e, o), this.applyImpulse(i, o)
                            }
                        };
                        var B = new n;
                        c.prototype.updateMassProperties = function() {
                            var t = B;
                            this.invMass = this.mass > 0 ? 1 / this.mass : 0;
                            var e = this.inertia,
                                i = this.fixedRotation;
                            this.computeAABB(), t.set((this.aabb.upperBound.x - this.aabb.lowerBound.x) / 2, (this.aabb.upperBound.y - this.aabb.lowerBound.y) / 2, (this.aabb.upperBound.z - this.aabb.lowerBound.z) / 2), l.calculateInertia(t, this.mass, e), this.invInertia.set(e.x > 0 && !i ? 1 / e.x : 0, e.y > 0 && !i ? 1 / e.y : 0, e.z > 0 && !i ? 1 / e.z : 0), this.updateInertiaWorld(!0)
                        }, c.prototype.getVelocityAtWorldPoint = function(t, e) {
                            var i = new n;
                            return t.vsub(this.position, i), this.angularVelocity.cross(i, e), this.velocity.vadd(e, e), e
                        }, c.prototype.integrate = function(t, e, i) {
                            if (this.previousPosition.copy(this.position), this.previousQuaternion.copy(this.quaternion), (this.type === c.DYNAMIC || this.type === c.KINEMATIC) && this.sleepState !== c.SLEEPING) {
                                var o = this.velocity,
                                    n = this.angularVelocity,
                                    r = this.position,
                                    s = this.force,
                                    a = this.torque,
                                    l = this.quaternion,
                                    h = this.invMass,
                                    u = this.invInertiaWorld,
                                    p = this.linearFactor,
                                    d = h * t;
                                o.x += s.x * d * p.x, o.y += s.y * d * p.y, o.z += s.z * d * p.z;
                                var y = u.elements,
                                    f = this.angularFactor,
                                    v = a.x * f.x,
                                    m = a.y * f.y,
                                    g = a.z * f.z;
                                n.x += t * (y[0] * v + y[1] * m + y[2] * g), n.y += t * (y[3] * v + y[4] * m + y[5] * g), n.z += t * (y[6] * v + y[7] * m + y[8] * g), r.x += o.x * t, r.y += o.y * t, r.z += o.z * t, l.integrate(this.angularVelocity, t, this.angularFactor, l), e && (i ? l.normalizeFast() : l.normalize()), this.aabbNeedsUpdate = !0, this.updateInertiaWorld()
                            }
                        }, c.prototype.isSleeping = function() {
                            return this.sleepState === c.SLEEPING
                        }, c.prototype.isSleepy = function() {
                            return this.sleepState === c.SLEEPY
                        }, c.prototype.isAwake = function() {
                            return this.sleepState === c.AWAKE
                        }, c.prototype.updateHasTrigger = function() {
                            for (var t = this.shapes.length; t-- && (this.hasTrigger = !this.shapes[t].collisionResponse, !this.hasTrigger););
                        }
                    }, {
                        "../collision/AABB": 3,
                        "../material/Material": 26,
                        "../math/Mat3": 28,
                        "../math/Quaternion": 29,
                        "../math/Vec3": 31,
                        "../shapes/Box": 38,
                        "../shapes/Shape": 44,
                        "../utils/EventTarget": 50,
                        "../world/World": 57
                    }],
                    33: [function(t, e, i) {
                        t("./Body");
                        var o = t("../math/Vec3"),
                            n = t("../math/Quaternion"),
                            r = (t("../collision/RaycastResult"), t("../collision/Ray")),
                            s = t("../objects/WheelInfo");

                        function a(t) {
                            this.chassisBody = t.chassisBody, this.wheelInfos = [], this.sliding = !1, this.world = null, this.indexRightAxis = void 0 !== t.indexRightAxis ? t.indexRightAxis : 1, this.indexForwardAxis = void 0 !== t.indexForwardAxis ? t.indexForwardAxis : 0, this.indexUpAxis = void 0 !== t.indexUpAxis ? t.indexUpAxis : 2
                        }
                        e.exports = a;
                        new o, new o, new o;
                        var l = new o,
                            h = new o,
                            c = new o;
                        new r;
                        a.prototype.addWheel = function(t) {
                            var e = new s(t = t || {}),
                                i = this.wheelInfos.length;
                            return this.wheelInfos.push(e), i
                        }, a.prototype.setSteeringValue = function(t, e) {
                            this.wheelInfos[e].steering = t
                        };
                        new o;
                        a.prototype.applyEngineForce = function(t, e) {
                            this.wheelInfos[e].engineForce = t
                        }, a.prototype.setBrake = function(t, e) {
                            this.wheelInfos[e].brake = t
                        }, a.prototype.addToWorld = function(t) {
                            this.constraints;
                            t.addBody(this.chassisBody);
                            var e = this;
                            this.preStepCallback = function() {
                                e.updateVehicle(t.dt)
                            }, t.addEventListener("preStep", this.preStepCallback), this.world = t
                        }, a.prototype.getVehicleAxisWorld = function(t, e) {
                            e.set(0 === t ? 1 : 0, 1 === t ? 1 : 0, 2 === t ? 1 : 0), this.chassisBody.vectorToWorldFrame(e, e)
                        }, a.prototype.updateVehicle = function(t) {
                            for (var e = this.wheelInfos, i = e.length, n = this.chassisBody, r = 0; r < i; r++) this.updateWheelTransform(r);
                            this.currentVehicleSpeedKmHour = 3.6 * n.velocity.norm();
                            var s = new o;
                            this.getVehicleAxisWorld(this.indexForwardAxis, s), s.dot(n.velocity) < 0 && (this.currentVehicleSpeedKmHour *= -1);
                            for (r = 0; r < i; r++) this.castRay(e[r]);
                            this.updateSuspension(t);
                            var a = new o,
                                l = new o;
                            for (r = 0; r < i; r++) {
                                var h = (d = e[r]).suspensionForce;
                                h > d.maxSuspensionForce && (h = d.maxSuspensionForce), d.raycastResult.hitNormalWorld.scale(h * t, a), d.raycastResult.hitPointWorld.vsub(n.position, l), n.applyImpulse(a, l)
                            }
                            this.updateFriction(t);
                            var c = new o,
                                u = new o,
                                p = new o;
                            for (r = 0; r < i; r++) {
                                var d = e[r];
                                n.getVelocityAtWorldPoint(d.chassisConnectionPointWorld, p);
                                var y = 1;
                                switch (this.indexUpAxis) {
                                    case 1:
                                        y = -1
                                }
                                if (d.isInContact) {
                                    this.getVehicleAxisWorld(this.indexForwardAxis, u);
                                    var f = u.dot(d.raycastResult.hitNormalWorld);
                                    d.raycastResult.hitNormalWorld.scale(f, c), u.vsub(c, u);
                                    var v = u.dot(p);
                                    d.deltaRotation = y * v * t / d.radius
                                }!d.sliding && d.isInContact || 0 === d.engineForce || !d.useCustomSlidingRotationalSpeed || (d.deltaRotation = (d.engineForce > 0 ? 1 : -1) * d.customSlidingRotationalSpeed * t), Math.abs(d.brake) > Math.abs(d.engineForce) && (d.deltaRotation = 0), d.rotation += d.deltaRotation, d.deltaRotation *= .99
                            }
                        }, a.prototype.updateSuspension = function(t) {
                            for (var e = this.chassisBody.mass, i = this.wheelInfos, o = i.length, n = 0; n < o; n++) {
                                var r = i[n];
                                if (r.isInContact) {
                                    var s, a = r.suspensionRestLength - r.suspensionLength;
                                    s = r.suspensionStiffness * a * r.clippedInvContactDotSuspension;
                                    var l = r.suspensionRelativeVelocity;
                                    s -= (l < 0 ? r.dampingCompression : r.dampingRelaxation) * l, r.suspensionForce = s * e, r.suspensionForce < 0 && (r.suspensionForce = 0)
                                } else r.suspensionForce = 0
                            }
                        }, a.prototype.removeFromWorld = function(t) {
                            this.constraints;
                            t.remove(this.chassisBody), t.removeEventListener("preStep", this.preStepCallback), this.world = null
                        };
                        var u = new o,
                            p = new o;
                        a.prototype.castRay = function(t) {
                            var e = u,
                                i = p;
                            this.updateWheelTransformWorld(t);
                            var n = this.chassisBody,
                                r = -1,
                                s = t.suspensionRestLength + t.radius;
                            t.directionWorld.scale(s, e);
                            var a = t.chassisConnectionPointWorld;
                            a.vadd(e, i);
                            var l = t.raycastResult;
                            l.reset();
                            var h = n.collisionResponse;
                            n.collisionResponse = !1, this.world.rayTest(a, i, l), n.collisionResponse = h;
                            var c = l.body;
                            if (t.raycastResult.groundObject = 0, c) {
                                r = l.distance, t.raycastResult.hitNormalWorld = l.hitNormalWorld, t.isInContact = !0;
                                var d = l.distance;
                                t.suspensionLength = d - t.radius;
                                var y = t.suspensionRestLength - t.maxSuspensionTravel,
                                    f = t.suspensionRestLength + t.maxSuspensionTravel;
                                t.suspensionLength < y && (t.suspensionLength = y), t.suspensionLength > f && (t.suspensionLength = f, t.raycastResult.reset());
                                var v = t.raycastResult.hitNormalWorld.dot(t.directionWorld),
                                    m = new o;
                                n.getVelocityAtWorldPoint(t.raycastResult.hitPointWorld, m);
                                var g = t.raycastResult.hitNormalWorld.dot(m);
                                if (v >= -.1) t.suspensionRelativeVelocity = 0, t.clippedInvContactDotSuspension = 10;
                                else {
                                    var w = -1 / v;
                                    t.suspensionRelativeVelocity = g * w, t.clippedInvContactDotSuspension = w
                                }
                            } else t.suspensionLength = t.suspensionRestLength + 0 * t.maxSuspensionTravel, t.suspensionRelativeVelocity = 0, t.directionWorld.scale(-1, t.raycastResult.hitNormalWorld), t.clippedInvContactDotSuspension = 1;
                            return r
                        }, a.prototype.updateWheelTransformWorld = function(t) {
                            t.isInContact = !1;
                            var e = this.chassisBody;
                            e.pointToWorldFrame(t.chassisConnectionPointLocal, t.chassisConnectionPointWorld), e.vectorToWorldFrame(t.directionLocal, t.directionWorld), e.vectorToWorldFrame(t.axleLocal, t.axleWorld)
                        }, a.prototype.updateWheelTransform = function(t) {
                            var e = l,
                                i = h,
                                o = c,
                                r = this.wheelInfos[t];
                            this.updateWheelTransformWorld(r), r.directionLocal.scale(-1, e), i.copy(r.axleLocal), e.cross(i, o), o.normalize(), i.normalize();
                            var s = r.steering,
                                a = new n;
                            a.setFromAxisAngle(e, s);
                            var u = new n;
                            u.setFromAxisAngle(i, r.rotation);
                            var p = r.worldTransform.quaternion;
                            this.chassisBody.quaternion.mult(a, p), p.mult(u, p), p.normalize();
                            var d = r.worldTransform.position;
                            d.copy(r.directionWorld), d.scale(r.suspensionLength, d), d.vadd(r.chassisConnectionPointWorld, d)
                        };
                        var d = [new o(1, 0, 0), new o(0, 1, 0), new o(0, 0, 1)];
                        a.prototype.getWheelTransformWorld = function(t) {
                            return this.wheelInfos[t].worldTransform
                        };
                        var y = new o,
                            f = [],
                            v = [];
                        a.prototype.updateFriction = function(t) {
                            for (var e = y, i = this.wheelInfos, n = i.length, r = this.chassisBody, s = v, a = f, l = 0; l < n; l++) {
                                (p = (M = i[l]).raycastResult.body) && 0, M.sideImpulse = 0, M.forwardImpulse = 0, s[l] || (s[l] = new o), a[l] || (a[l] = new o)
                            }
                            for (l = 0; l < n; l++) {
                                if (p = (M = i[l]).raycastResult.body) {
                                    var h = a[l];
                                    this.getWheelTransformWorld(l).vectorToWorldFrame(d[this.indexRightAxis], h);
                                    var c = M.raycastResult.hitNormalWorld,
                                        u = h.dot(c);
                                    c.scale(u, e), h.vsub(e, h), h.normalize(), c.cross(h, s[l]), s[l].normalize(), M.sideImpulse = z(r, M.raycastResult.hitPointWorld, p, M.raycastResult.hitPointWorld, h), M.sideImpulse *= 1
                                }
                            }
                            this.sliding = !1;
                            for (l = 0; l < n; l++) {
                                var p = (M = i[l]).raycastResult.body,
                                    m = 0;
                                if (M.slipInfo = 1, p) {
                                    var g = M.brake ? M.brake : 0;
                                    m = b(r, p, M.raycastResult.hitPointWorld, s[l], g);
                                    var w = g / (m += M.engineForce * t);
                                    M.slipInfo *= w
                                }
                                if (M.forwardImpulse = 0, M.skidInfo = 1, p) {
                                    M.skidInfo = 1;
                                    var x = M.suspensionForce * t * M.frictionSlip,
                                        _ = x * x;
                                    M.forwardImpulse = m;
                                    var B = .5 * M.forwardImpulse,
                                        S = 1 * M.sideImpulse,
                                        E = B * B + S * S;
                                    if (M.sliding = !1, E > _) {
                                        this.sliding = !0, M.sliding = !0;
                                        w = x / Math.sqrt(E);
                                        M.skidInfo *= w
                                    }
                                }
                            }
                            if (this.sliding)
                                for (l = 0; l < n; l++) {
                                    0 !== (M = i[l]).sideImpulse && M.skidInfo < 1 && (M.forwardImpulse *= M.skidInfo, M.sideImpulse *= M.skidInfo)
                                }
                            for (l = 0; l < n; l++) {
                                var M = i[l],
                                    A = new o;
                                if (M.raycastResult.hitPointWorld.vsub(r.position, A), 0 !== M.forwardImpulse) {
                                    var C = new o;
                                    s[l].scale(M.forwardImpulse, C), r.applyImpulse(C, A)
                                }
                                if (0 !== M.sideImpulse) {
                                    p = M.raycastResult.body;
                                    var R = new o;
                                    M.raycastResult.hitPointWorld.vsub(p.position, R);
                                    var P = new o;
                                    a[l].scale(M.sideImpulse, P), r.vectorToLocalFrame(A, A), A["xyz" [this.indexUpAxis]] *= M.rollInfluence, r.vectorToWorldFrame(A, A), r.applyImpulse(P, A), P.scale(-1, P), p.applyImpulse(P, R)
                                }
                            }
                        };
                        var m = new o,
                            g = new o,
                            w = new o;

                        function b(t, e, i, o, n) {
                            var r = 0,
                                s = i,
                                a = m,
                                l = g,
                                h = w;
                            t.getVelocityAtWorldPoint(s, a), e.getVelocityAtWorldPoint(s, l), a.vsub(l, h);
                            return n < (r = -o.dot(h) * (1 / (E(t, i, o) + E(e, i, o)))) && (r = n), r < -n && (r = -n), r
                        }
                        var x = new o,
                            _ = new o,
                            B = new o,
                            S = new o;

                        function E(t, e, i) {
                            var o = x,
                                n = _,
                                r = B,
                                s = S;
                            return e.vsub(t.position, o), o.cross(i, n), t.invInertiaWorld.vmult(n, s), s.cross(o, r), t.invMass + i.dot(r)
                        }
                        var M = new o,
                            A = new o,
                            C = new o;

                        function z(t, e, i, o, n, r) {
                            if (n.norm2() > 1.1) return 0;
                            var s = M,
                                a = A,
                                l = C;
                            t.getVelocityAtWorldPoint(e, s), i.getVelocityAtWorldPoint(o, a), s.vsub(a, l);
                            return -.2 * n.dot(l) * (1 / (t.invMass + i.invMass))
                        }
                    }, {
                        "../collision/Ray": 10,
                        "../collision/RaycastResult": 11,
                        "../math/Quaternion": 29,
                        "../math/Vec3": 31,
                        "../objects/WheelInfo": 37,
                        "./Body": 32
                    }],
                    34: [function(t, e, i) {
                        var o = t("./Body"),
                            n = t("../shapes/Sphere"),
                            r = t("../shapes/Box"),
                            s = t("../math/Vec3"),
                            a = t("../constraints/HingeConstraint");

                        function l(t) {
                            if (this.wheelBodies = [], this.coordinateSystem = void 0 === t.coordinateSystem ? new s(1, 2, 3) : t.coordinateSystem.clone(), this.chassisBody = t.chassisBody, !this.chassisBody) {
                                var e = new r(new s(5, 2, .5));
                                this.chassisBody = new o(1, e)
                            }
                            this.constraints = [], this.wheelAxes = [], this.wheelForces = []
                        }
                        e.exports = l, l.prototype.addWheel = function(t) {
                            var e = (t = t || {}).body;
                            e || (e = new o(1, new n(1.2))), this.wheelBodies.push(e), this.wheelForces.push(0);
                            new s;
                            var i = void 0 !== t.position ? t.position.clone() : new s,
                                r = new s;
                            this.chassisBody.pointToWorldFrame(i, r), e.position.set(r.x, r.y, r.z);
                            var l = void 0 !== t.axis ? t.axis.clone() : new s(0, 1, 0);
                            this.wheelAxes.push(l);
                            var h = new a(this.chassisBody, e, {
                                pivotA: i,
                                axisA: l,
                                pivotB: s.ZERO,
                                axisB: l,
                                collideConnected: !1
                            });
                            return this.constraints.push(h), this.wheelBodies.length - 1
                        }, l.prototype.setSteeringValue = function(t, e) {
                            var i = this.wheelAxes[e],
                                o = Math.cos(t),
                                n = Math.sin(t),
                                r = i.x,
                                s = i.y;
                            this.constraints[e].axisA.set(o * r - n * s, n * r + o * s, 0)
                        }, l.prototype.setMotorSpeed = function(t, e) {
                            var i = this.constraints[e];
                            i.enableMotor(), i.motorTargetVelocity = t
                        }, l.prototype.disableMotor = function(t) {
                            this.constraints[t].disableMotor()
                        };
                        var h = new s;
                        l.prototype.setWheelForce = function(t, e) {
                            this.wheelForces[e] = t
                        }, l.prototype.applyWheelForce = function(t, e) {
                            var i = this.wheelAxes[e],
                                o = this.wheelBodies[e],
                                n = o.torque;
                            i.scale(t, h), o.vectorToWorldFrame(h, h), n.vadd(h, n)
                        }, l.prototype.addToWorld = function(t) {
                            for (var e = this.constraints, i = this.wheelBodies.concat([this.chassisBody]), o = 0; o < i.length; o++) t.addBody(i[o]);
                            for (o = 0; o < e.length; o++) t.addConstraint(e[o]);
                            t.addEventListener("preStep", this._update.bind(this))
                        }, l.prototype._update = function() {
                            for (var t = this.wheelForces, e = 0; e < t.length; e++) this.applyWheelForce(t[e], e)
                        }, l.prototype.removeFromWorld = function(t) {
                            for (var e = this.constraints, i = this.wheelBodies.concat([this.chassisBody]), o = 0; o < i.length; o++) t.remove(i[o]);
                            for (o = 0; o < e.length; o++) t.removeConstraint(e[o])
                        };
                        var c = new s;
                        l.prototype.getWheelSpeed = function(t) {
                            var e = this.wheelAxes[t],
                                i = this.wheelBodies[t].angularVelocity;
                            return this.chassisBody.vectorToWorldFrame(e, c), i.dot(c)
                        }
                    }, {
                        "../constraints/HingeConstraint": 16,
                        "../math/Vec3": 31,
                        "../shapes/Box": 38,
                        "../shapes/Sphere": 45,
                        "./Body": 32
                    }],
                    35: [function(t, e, i) {
                        e.exports = n;
                        t("../shapes/Shape");
                        var o = t("../math/Vec3");
                        t("../math/Quaternion"), t("../shapes/Particle"), t("../objects/Body"), t("../material/Material");

                        function n() {
                            this.particles = [], this.density = 1, this.smoothingRadius = 1, this.speedOfSound = 1, this.viscosity = .01, this.eps = 1e-6, this.pressures = [], this.densities = [], this.neighbors = []
                        }
                        n.prototype.add = function(t) {
                            this.particles.push(t), this.neighbors.length < this.particles.length && this.neighbors.push([])
                        }, n.prototype.remove = function(t) {
                            var e = this.particles.indexOf(t); - 1 !== e && (this.particles.splice(e, 1), this.neighbors.length > this.particles.length && this.neighbors.pop())
                        };
                        var r = new o;
                        n.prototype.getNeighbors = function(t, e) {
                            for (var i = this.particles.length, o = t.id, n = this.smoothingRadius * this.smoothingRadius, s = r, a = 0; a !== i; a++) {
                                var l = this.particles[a];
                                l.position.vsub(t.position, s), o !== l.id && s.norm2() < n && e.push(l)
                            }
                        };
                        var s = new o,
                            a = new o,
                            l = new o,
                            h = new o,
                            c = new o,
                            u = new o;
                        n.prototype.update = function() {
                            for (var t = this.particles.length, e = s, i = this.speedOfSound, o = this.eps, n = 0; n !== t; n++) {
                                var r = this.particles[n];
                                (E = this.neighbors[n]).length = 0, this.getNeighbors(r, E), E.push(this.particles[n]);
                                for (var p = E.length, d = 0, y = 0; y !== p; y++) {
                                    r.position.vsub(E[y].position, e);
                                    var f = e.norm(),
                                        v = this.w(f);
                                    d += E[y].mass * v
                                }
                                this.densities[n] = d, this.pressures[n] = i * i * (this.densities[n] - this.density)
                            }
                            var m = a,
                                g = l,
                                w = h,
                                b = c,
                                x = u;
                            for (n = 0; n !== t; n++) {
                                var _, B, S = this.particles[n];
                                m.set(0, 0, 0), g.set(0, 0, 0);
                                var E;
                                for (p = (E = this.neighbors[n]).length, y = 0; y !== p; y++) {
                                    var M = E[y];
                                    S.position.vsub(M.position, b);
                                    var A = b.norm();
                                    _ = -M.mass * (this.pressures[n] / (this.densities[n] * this.densities[n] + o) + this.pressures[y] / (this.densities[y] * this.densities[y] + o)), this.gradw(b, w), w.mult(_, w), m.vadd(w, m), M.velocity.vsub(S.velocity, x), x.mult(1 / (1e-4 + this.densities[n] * this.densities[y]) * this.viscosity * M.mass, x), B = this.nablaw(A), x.mult(B, x), g.vadd(x, g)
                                }
                                g.mult(S.mass, g), m.mult(S.mass, m), S.force.vadd(g, S.force), S.force.vadd(m, S.force)
                            }
                        }, n.prototype.w = function(t) {
                            var e = this.smoothingRadius;
                            return 315 / (64 * Math.PI * Math.pow(e, 9)) * Math.pow(e * e - t * t, 3)
                        }, n.prototype.gradw = function(t, e) {
                            var i = t.norm(),
                                o = this.smoothingRadius;
                            t.mult(945 / (32 * Math.PI * Math.pow(o, 9)) * Math.pow(o * o - i * i, 2), e)
                        }, n.prototype.nablaw = function(t) {
                            var e = this.smoothingRadius;
                            return 945 / (32 * Math.PI * Math.pow(e, 9)) * (e * e - t * t) * (7 * t * t - 3 * e * e)
                        }
                    }, {
                        "../material/Material": 26,
                        "../math/Quaternion": 29,
                        "../math/Vec3": 31,
                        "../objects/Body": 32,
                        "../shapes/Particle": 42,
                        "../shapes/Shape": 44
                    }],
                    36: [function(t, e, i) {
                        var o = t("../math/Vec3");

                        function n(t, e, i) {
                            i = i || {}, this.restLength = "number" == typeof i.restLength ? i.restLength : 1, this.stiffness = i.stiffness || 100, this.damping = i.damping || 1, this.bodyA = t, this.bodyB = e, this.localAnchorA = new o, this.localAnchorB = new o, i.localAnchorA && this.localAnchorA.copy(i.localAnchorA), i.localAnchorB && this.localAnchorB.copy(i.localAnchorB), i.worldAnchorA && this.setWorldAnchorA(i.worldAnchorA), i.worldAnchorB && this.setWorldAnchorB(i.worldAnchorB)
                        }
                        e.exports = n, n.prototype.setWorldAnchorA = function(t) {
                            this.bodyA.pointToLocalFrame(t, this.localAnchorA)
                        }, n.prototype.setWorldAnchorB = function(t) {
                            this.bodyB.pointToLocalFrame(t, this.localAnchorB)
                        }, n.prototype.getWorldAnchorA = function(t) {
                            this.bodyA.pointToWorldFrame(this.localAnchorA, t)
                        }, n.prototype.getWorldAnchorB = function(t) {
                            this.bodyB.pointToWorldFrame(this.localAnchorB, t)
                        };
                        var r = new o,
                            s = new o,
                            a = new o,
                            l = new o,
                            h = new o,
                            c = new o,
                            u = new o,
                            p = new o,
                            d = new o,
                            y = new o,
                            f = new o;
                        n.prototype.applyForce = function() {
                            var t = this.stiffness,
                                e = this.damping,
                                i = this.restLength,
                                o = this.bodyA,
                                n = this.bodyB,
                                v = r,
                                m = s,
                                g = a,
                                w = l,
                                b = f,
                                x = h,
                                _ = c,
                                B = u,
                                S = p,
                                E = d,
                                M = y;
                            this.getWorldAnchorA(x), this.getWorldAnchorB(_), x.vsub(o.position, B), _.vsub(n.position, S), _.vsub(x, v);
                            var A = v.norm();
                            m.copy(v), m.normalize(), n.velocity.vsub(o.velocity, g), n.angularVelocity.cross(S, b), g.vadd(b, g), o.angularVelocity.cross(B, b), g.vsub(b, g), m.mult(-t * (A - i) - e * g.dot(m), w), o.force.vsub(w, o.force), n.force.vadd(w, n.force), B.cross(w, E), S.cross(w, M), o.torque.vsub(E, o.torque), n.torque.vadd(M, n.torque)
                        }
                    }, {
                        "../math/Vec3": 31
                    }],
                    37: [function(t, e, i) {
                        var o = t("../math/Vec3"),
                            n = t("../math/Transform"),
                            r = t("../collision/RaycastResult"),
                            s = t("../utils/Utils");

                        function a(t) {
                            t = s.defaults(t, {
                                chassisConnectionPointLocal: new o,
                                chassisConnectionPointWorld: new o,
                                directionLocal: new o,
                                directionWorld: new o,
                                axleLocal: new o,
                                axleWorld: new o,
                                suspensionRestLength: 1,
                                suspensionMaxLength: 2,
                                radius: 1,
                                suspensionStiffness: 100,
                                dampingCompression: 10,
                                dampingRelaxation: 10,
                                frictionSlip: 1e4,
                                steering: 0,
                                rotation: 0,
                                deltaRotation: 0,
                                rollInfluence: .01,
                                maxSuspensionForce: Number.MAX_VALUE,
                                isFrontWheel: !0,
                                clippedInvContactDotSuspension: 1,
                                suspensionRelativeVelocity: 0,
                                suspensionForce: 0,
                                skidInfo: 0,
                                suspensionLength: 0,
                                maxSuspensionTravel: 1,
                                useCustomSlidingRotationalSpeed: !1,
                                customSlidingRotationalSpeed: -.1
                            }), this.maxSuspensionTravel = t.maxSuspensionTravel, this.customSlidingRotationalSpeed = t.customSlidingRotationalSpeed, this.useCustomSlidingRotationalSpeed = t.useCustomSlidingRotationalSpeed, this.sliding = !1, this.chassisConnectionPointLocal = t.chassisConnectionPointLocal.clone(), this.chassisConnectionPointWorld = t.chassisConnectionPointWorld.clone(), this.directionLocal = t.directionLocal.clone(), this.directionWorld = t.directionWorld.clone(), this.axleLocal = t.axleLocal.clone(), this.axleWorld = t.axleWorld.clone(), this.suspensionRestLength = t.suspensionRestLength, this.suspensionMaxLength = t.suspensionMaxLength, this.radius = t.radius, this.suspensionStiffness = t.suspensionStiffness, this.dampingCompression = t.dampingCompression, this.dampingRelaxation = t.dampingRelaxation, this.frictionSlip = t.frictionSlip, this.steering = 0, this.rotation = 0, this.deltaRotation = 0, this.rollInfluence = t.rollInfluence, this.maxSuspensionForce = t.maxSuspensionForce, this.engineForce = 0, this.brake = 0, this.isFrontWheel = t.isFrontWheel, this.clippedInvContactDotSuspension = 1, this.suspensionRelativeVelocity = 0, this.suspensionForce = 0, this.skidInfo = 0, this.suspensionLength = 0, this.sideImpulse = 0, this.forwardImpulse = 0, this.raycastResult = new r, this.worldTransform = new n, this.isInContact = !1
                        }
                        e.exports = a;
                        var l = new o,
                            h = new o;
                        l = new o;
                        a.prototype.updateWheel = function(t) {
                            var e = this.raycastResult;
                            if (this.isInContact) {
                                var i = e.hitNormalWorld.dot(e.directionWorld);
                                e.hitPointWorld.vsub(t.position, h), t.getVelocityAtWorldPoint(h, l);
                                var o = e.hitNormalWorld.dot(l);
                                if (i >= -.1) this.suspensionRelativeVelocity = 0, this.clippedInvContactDotSuspension = 10;
                                else {
                                    var n = -1 / i;
                                    this.suspensionRelativeVelocity = o * n, this.clippedInvContactDotSuspension = n
                                }
                            } else e.suspensionLength = this.suspensionRestLength, this.suspensionRelativeVelocity = 0, e.directionWorld.scale(-1, e.hitNormalWorld), this.clippedInvContactDotSuspension = 1
                        }
                    }, {
                        "../collision/RaycastResult": 11,
                        "../math/Transform": 30,
                        "../math/Vec3": 31,
                        "../utils/Utils": 54
                    }],
                    38: [function(t, e, i) {
                        e.exports = s;
                        var o = t("./Shape"),
                            n = t("../math/Vec3"),
                            r = t("./ConvexPolyhedron");

                        function s(t) {
                            o.call(this, {
                                type: o.types.BOX
                            }), this.halfExtents = t, this.convexPolyhedronRepresentation = null, this.updateConvexPolyhedronRepresentation(), this.updateBoundingSphereRadius()
                        }
                        s.prototype = new o, s.prototype.constructor = s, s.prototype.updateConvexPolyhedronRepresentation = function() {
                            var t = this.halfExtents.x,
                                e = this.halfExtents.y,
                                i = this.halfExtents.z,
                                o = n,
                                s = [new o(-t, -e, -i), new o(t, -e, -i), new o(t, e, -i), new o(-t, e, -i), new o(-t, -e, i), new o(t, -e, i), new o(t, e, i), new o(-t, e, i)],
                                a = (new o(0, 0, 1), new o(0, 1, 0), new o(1, 0, 0), new r(s, [
                                    [3, 2, 1, 0],
                                    [4, 5, 6, 7],
                                    [5, 4, 0, 1],
                                    [2, 3, 7, 6],
                                    [0, 4, 7, 3],
                                    [1, 2, 6, 5]
                                ]));
                            this.convexPolyhedronRepresentation = a, a.material = this.material
                        }, s.prototype.calculateLocalInertia = function(t, e) {
                            return e = e || new n, s.calculateInertia(this.halfExtents, t, e), e
                        }, s.calculateInertia = function(t, e, i) {
                            var o = t;
                            o.isZero() ? (i.x = 2 / 12 * e, i.y = 2 / 12 * e, i.z = 2 / 12 * e) : (i.x = 1 / 12 * e * (2 * o.y * 2 * o.y + 2 * o.z * 2 * o.z), i.y = 1 / 12 * e * (2 * o.x * 2 * o.x + 2 * o.z * 2 * o.z), i.z = 1 / 12 * e * (2 * o.y * 2 * o.y + 2 * o.x * 2 * o.x))
                        }, s.prototype.getSideNormals = function(t, e) {
                            var i = t,
                                o = this.halfExtents;
                            if (i[0].set(o.x, 0, 0), i[1].set(0, o.y, 0), i[2].set(0, 0, o.z), i[3].set(-o.x, 0, 0), i[4].set(0, -o.y, 0), i[5].set(0, 0, -o.z), void 0 !== e)
                                for (var n = 0; n !== i.length; n++) e.vmult(i[n], i[n]);
                            return i
                        }, s.prototype.volume = function() {
                            return 8 * this.halfExtents.x * this.halfExtents.y * this.halfExtents.z
                        }, s.prototype.updateBoundingSphereRadius = function() {
                            this.boundingSphereRadius = this.halfExtents.norm()
                        };
                        var a = new n;
                        new n;
                        s.prototype.forEachWorldCorner = function(t, e, i) {
                            for (var o = this.halfExtents, n = [
                                    [o.x, o.y, o.z],
                                    [-o.x, o.y, o.z],
                                    [-o.x, -o.y, o.z],
                                    [-o.x, -o.y, -o.z],
                                    [o.x, -o.y, -o.z],
                                    [o.x, o.y, -o.z],
                                    [-o.x, o.y, -o.z],
                                    [o.x, -o.y, o.z]
                                ], r = 0; r < n.length; r++) a.set(n[r][0], n[r][1], n[r][2]), e.vmult(a, a), t.vadd(a, a), i(a.x, a.y, a.z)
                        };
                        var l = [new n, new n, new n, new n, new n, new n, new n, new n];
                        s.prototype.calculateWorldAABB = function(t, e, i, o) {
                            var n = this.halfExtents;
                            l[0].set(n.x, n.y, n.z), l[1].set(-n.x, n.y, n.z), l[2].set(-n.x, -n.y, n.z), l[3].set(-n.x, -n.y, -n.z), l[4].set(n.x, -n.y, -n.z), l[5].set(n.x, n.y, -n.z), l[6].set(-n.x, n.y, -n.z), l[7].set(n.x, -n.y, n.z);
                            var r = l[0];
                            e.vmult(r, r), t.vadd(r, r), o.copy(r), i.copy(r);
                            for (var s = 1; s < 8; s++) {
                                r = l[s];
                                e.vmult(r, r), t.vadd(r, r);
                                var a = r.x,
                                    h = r.y,
                                    c = r.z;
                                a > o.x && (o.x = a), h > o.y && (o.y = h), c > o.z && (o.z = c), a < i.x && (i.x = a), h < i.y && (i.y = h), c < i.z && (i.z = c)
                            }
                        }
                    }, {
                        "../math/Vec3": 31,
                        "./ConvexPolyhedron": 39,
                        "./Shape": 44
                    }],
                    39: [function(t, e, i) {
                        e.exports = s;
                        var o = t("./Shape"),
                            n = t("../math/Vec3"),
                            r = (t("../math/Quaternion"), t("../math/Transform"));

                        function s(t, e, i) {
                            o.call(this, {
                                type: o.types.CONVEXPOLYHEDRON
                            }), this.vertices = t || [], this.worldVertices = [], this.worldVerticesNeedsUpdate = !0, this.faces = e || [], this.faceNormals = [], this.computeNormals(), this.worldFaceNormalsNeedsUpdate = !0, this.worldFaceNormals = [], this.uniqueEdges = [], this.uniqueAxes = i ? i.slice() : null, this.computeEdges(), this.updateBoundingSphereRadius()
                        }
                        s.prototype = new o, s.prototype.constructor = s;
                        var a = new n;
                        s.prototype.computeEdges = function() {
                            var t = this.faces,
                                e = this.vertices,
                                i = (e.length, this.uniqueEdges);
                            i.length = 0;
                            for (var o = a, n = 0; n !== t.length; n++)
                                for (var r = t[n], s = r.length, l = 0; l !== s; l++) {
                                    var h = (l + 1) % s;
                                    e[r[l]].vsub(e[r[h]], o), o.normalize();
                                    for (var c = !1, u = 0; u !== i.length; u++)
                                        if (i[u].almostEquals(o) || i[u].almostEquals(o)) {
                                            c = !0;
                                            break
                                        }
                                    c || i.push(o.clone())
                                }
                        }, s.prototype.computeNormals = function() {
                            this.faceNormals.length = this.faces.length;
                            for (var t = 0; t < this.faces.length; t++) {
                                for (var e = 0; e < this.faces[t].length; e++)
                                    if (!this.vertices[this.faces[t][e]]) throw new Error("Vertex " + this.faces[t][e] + " not found!");
                                var i = this.faceNormals[t] || new n;
                                this.getFaceNormal(t, i), i.negate(i), this.faceNormals[t] = i;
                                var o = this.vertices[this.faces[t][0]];
                                if (i.dot(o) < 0) {
                                    console.error(".faceNormals[" + t + "] = Vec3(" + i.toString() + ") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");
                                    for (e = 0; e < this.faces[t].length; e++) console.warn(".vertices[" + this.faces[t][e] + "] = Vec3(" + this.vertices[this.faces[t][e]].toString() + ")")
                                }
                            }
                        };
                        var l = new n,
                            h = new n;
                        s.computeNormal = function(t, e, i, o) {
                            e.vsub(t, h), i.vsub(e, l), l.cross(h, o), o.isZero() || o.normalize()
                        }, s.prototype.getFaceNormal = function(t, e) {
                            var i = this.faces[t],
                                o = this.vertices[i[0]],
                                n = this.vertices[i[1]],
                                r = this.vertices[i[2]];
                            return s.computeNormal(o, n, r, e)
                        };
                        var c = new n;
                        s.prototype.clipAgainstHull = function(t, e, i, o, r, s, a, l, h) {
                            for (var u = c, p = -1, d = -Number.MAX_VALUE, y = 0; y < i.faces.length; y++) {
                                u.copy(i.faceNormals[y]), r.vmult(u, u);
                                var f = u.dot(s);
                                f > d && (d = f, p = y)
                            }
                            for (var v = [], m = i.faces[p], g = m.length, w = 0; w < g; w++) {
                                var b = i.vertices[m[w]],
                                    x = new n;
                                x.copy(b), r.vmult(x, x), o.vadd(x, x), v.push(x)
                            }
                            p >= 0 && this.clipFaceAgainstHull(s, t, e, v, a, l, h)
                        };
                        var u = new n,
                            p = new n,
                            d = new n,
                            y = new n,
                            f = new n,
                            v = new n;
                        s.prototype.findSeparatingAxis = function(t, e, i, o, n, r, s, a) {
                            var l = u,
                                h = p,
                                c = d,
                                m = y,
                                g = f,
                                w = v,
                                b = Number.MAX_VALUE;
                            if (this.uniqueAxes)
                                for (_ = 0; _ !== this.uniqueAxes.length; _++) {
                                    if (i.vmult(this.uniqueAxes[_], l), !1 === (E = this.testSepAxis(l, t, e, i, o, n))) return !1;
                                    E < b && (b = E, r.copy(l))
                                } else
                                    for (var x = s ? s.length : this.faces.length, _ = 0; _ < x; _++) {
                                        var B = s ? s[_] : _;
                                        if (l.copy(this.faceNormals[B]), i.vmult(l, l), !1 === (E = this.testSepAxis(l, t, e, i, o, n))) return !1;
                                        E < b && (b = E, r.copy(l))
                                    }
                            if (t.uniqueAxes)
                                for (_ = 0; _ !== t.uniqueAxes.length; _++) {
                                    if (n.vmult(t.uniqueAxes[_], h), 0, !1 === (E = this.testSepAxis(h, t, e, i, o, n))) return !1;
                                    E < b && (b = E, r.copy(h))
                                } else
                                    for (var S = a ? a.length : t.faces.length, _ = 0; _ < S; _++) {
                                        var E;
                                        B = a ? a[_] : _;
                                        if (h.copy(t.faceNormals[B]), n.vmult(h, h), 0, !1 === (E = this.testSepAxis(h, t, e, i, o, n))) return !1;
                                        E < b && (b = E, r.copy(h))
                                    }
                            for (var M = 0; M !== this.uniqueEdges.length; M++) {
                                i.vmult(this.uniqueEdges[M], m);
                                for (var A = 0; A !== t.uniqueEdges.length; A++)
                                    if (n.vmult(t.uniqueEdges[A], g), m.cross(g, w), !w.almostZero()) {
                                        w.normalize();
                                        var C = this.testSepAxis(w, t, e, i, o, n);
                                        if (!1 === C) return !1;
                                        C < b && (b = C, r.copy(w))
                                    }
                            }
                            return o.vsub(e, c), c.dot(r) > 0 && r.negate(r), !0
                        };
                        var m = [],
                            g = [];
                        s.prototype.testSepAxis = function(t, e, i, o, n, r) {
                            s.project(this, t, i, o, m), s.project(e, t, n, r, g);
                            var a = m[0],
                                l = m[1],
                                h = g[0],
                                c = g[1];
                            if (a < c || h < l) return !1;
                            var u = a - c,
                                p = h - l;
                            return u < p ? u : p
                        };
                        var w = new n,
                            b = new n;
                        s.prototype.calculateLocalInertia = function(t, e) {
                            this.computeLocalAABB(w, b);
                            var i = b.x - w.x,
                                o = b.y - w.y,
                                n = b.z - w.z;
                            e.x = 1 / 12 * t * (2 * o * 2 * o + 2 * n * 2 * n), e.y = 1 / 12 * t * (2 * i * 2 * i + 2 * n * 2 * n), e.z = 1 / 12 * t * (2 * o * 2 * o + 2 * i * 2 * i)
                        }, s.prototype.getPlaneConstantOfFace = function(t) {
                            var e = this.faces[t],
                                i = this.faceNormals[t],
                                o = this.vertices[e[0]];
                            return -i.dot(o)
                        };
                        var x = new n,
                            _ = new n,
                            B = new n,
                            S = new n,
                            E = new n,
                            M = new n,
                            A = new n,
                            C = new n;
                        s.prototype.clipFaceAgainstHull = function(t, e, i, o, n, r, s) {
                            for (var a = x, l = _, h = B, c = S, u = E, p = M, d = A, y = C, f = o, v = [], m = -1, g = Number.MAX_VALUE, w = 0; w < this.faces.length; w++) {
                                a.copy(this.faceNormals[w]), i.vmult(a, a);
                                var b = a.dot(t);
                                b < g && (g = b, m = w)
                            }
                            if (!(m < 0)) {
                                var z = this.faces[m];
                                z.connectedFaces = [];
                                for (var R = 0; R < this.faces.length; R++)
                                    for (var P = 0; P < this.faces[R].length; P++) - 1 !== z.indexOf(this.faces[R][P]) && R !== m && -1 === z.connectedFaces.indexOf(R) && z.connectedFaces.push(R);
                                f.length;
                                for (var T = z.length, F = 0; F < T; F++) {
                                    var q = this.vertices[z[F]],
                                        V = this.vertices[z[(F + 1) % T]];
                                    q.vsub(V, l), h.copy(l), i.vmult(h, h), e.vadd(h, h), c.copy(this.faceNormals[m]), i.vmult(c, c), e.vadd(c, c), h.cross(c, u), u.negate(u), p.copy(q), i.vmult(p, p), e.vadd(p, p);
                                    p.dot(u);
                                    var O = z.connectedFaces[F];
                                    d.copy(this.faceNormals[O]);
                                    var I = this.getPlaneConstantOfFace(O);
                                    y.copy(d), i.vmult(y, y);
                                    var k = I - y.dot(e);
                                    for (this.clipFaceAgainstPlane(f, v, y, k); f.length;) f.shift();
                                    for (; v.length;) f.push(v.shift())
                                }
                                d.copy(this.faceNormals[m]);
                                I = this.getPlaneConstantOfFace(m);
                                y.copy(d), i.vmult(y, y);
                                for (k = I - y.dot(e), R = 0; R < f.length; R++) {
                                    var j = y.dot(f[R]) + k;
                                    if (j <= n && (j = n), j <= r) {
                                        var N = f[R];
                                        if (j <= 0) {
                                            var L = {
                                                point: N,
                                                normal: y,
                                                depth: j
                                            };
                                            s.push(L)
                                        }
                                    }
                                }
                            }
                        }, s.prototype.clipFaceAgainstPlane = function(t, e, i, o) {
                            var r, s, a = t.length;
                            if (a < 2) return e;
                            var l = t[t.length - 1],
                                h = t[0];
                            r = i.dot(l) + o;
                            for (var c = 0; c < a; c++) {
                                if (h = t[c], s = i.dot(h) + o, r < 0)
                                    if (s < 0) {
                                        (u = new n).copy(h), e.push(u)
                                    } else {
                                        var u = new n;
                                        l.lerp(h, r / (r - s), u), e.push(u)
                                    }
                                else if (s < 0) {
                                    u = new n;
                                    l.lerp(h, r / (r - s), u), e.push(u), e.push(h)
                                }
                                l = h, r = s
                            }
                            return e
                        }, s.prototype.computeWorldVertices = function(t, e) {
                            for (var i = this.vertices.length; this.worldVertices.length < i;) this.worldVertices.push(new n);
                            for (var o = this.vertices, r = this.worldVertices, s = 0; s !== i; s++) e.vmult(o[s], r[s]), t.vadd(r[s], r[s]);
                            this.worldVerticesNeedsUpdate = !1
                        };
                        new n;
                        s.prototype.computeLocalAABB = function(t, e) {
                            var i = this.vertices.length,
                                o = this.vertices;
                            t.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), e.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
                            for (var n = 0; n < i; n++) {
                                var r = o[n];
                                r.x < t.x ? t.x = r.x : r.x > e.x && (e.x = r.x), r.y < t.y ? t.y = r.y : r.y > e.y && (e.y = r.y), r.z < t.z ? t.z = r.z : r.z > e.z && (e.z = r.z)
                            }
                        }, s.prototype.computeWorldFaceNormals = function(t) {
                            for (var e = this.faceNormals.length; this.worldFaceNormals.length < e;) this.worldFaceNormals.push(new n);
                            for (var i = this.faceNormals, o = this.worldFaceNormals, r = 0; r !== e; r++) t.vmult(i[r], o[r]);
                            this.worldFaceNormalsNeedsUpdate = !1
                        }, s.prototype.updateBoundingSphereRadius = function() {
                            for (var t = 0, e = this.vertices, i = 0, o = e.length; i !== o; i++) {
                                var n = e[i].norm2();
                                n > t && (t = n)
                            }
                            this.boundingSphereRadius = Math.sqrt(t)
                        };
                        var z = new n;
                        s.prototype.calculateWorldAABB = function(t, e, i, o) {
                            for (var n, r, s, a, l, h, c = this.vertices.length, u = this.vertices, p = 0; p < c; p++) {
                                z.copy(u[p]), e.vmult(z, z), t.vadd(z, z);
                                var d = z;
                                (d.x < n || void 0 === n) && (n = d.x), (d.x > a || void 0 === a) && (a = d.x), (d.y < r || void 0 === r) && (r = d.y), (d.y > l || void 0 === l) && (l = d.y), (d.z < s || void 0 === s) && (s = d.z), (d.z > h || void 0 === h) && (h = d.z)
                            }
                            i.set(n, r, s), o.set(a, l, h)
                        }, s.prototype.volume = function() {
                            return 4 * Math.PI * this.boundingSphereRadius / 3
                        }, s.prototype.getAveragePointLocal = function(t) {
                            t = t || new n;
                            for (var e = this.vertices.length, i = this.vertices, o = 0; o < e; o++) t.vadd(i[o], t);
                            return t.mult(1 / e, t), t
                        }, s.prototype.transformAllPoints = function(t, e) {
                            var i = this.vertices.length,
                                o = this.vertices;
                            if (e) {
                                for (var n = 0; n < i; n++) {
                                    var r = o[n];
                                    e.vmult(r, r)
                                }
                                for (n = 0; n < this.faceNormals.length; n++) {
                                    r = this.faceNormals[n];
                                    e.vmult(r, r)
                                }
                            }
                            if (t)
                                for (n = 0; n < i; n++) {
                                    (r = o[n]).vadd(t, r)
                                }
                        };
                        var R = new n,
                            P = new n,
                            T = new n;
                        s.prototype.pointIsInside = function(t) {
                            var e = this.vertices.length,
                                i = this.vertices,
                                o = this.faces,
                                n = this.faceNormals,
                                r = this.faces.length,
                                s = R;
                            this.getAveragePointLocal(s);
                            for (var a = 0; a < r; a++) {
                                this.faces[a].length, e = n[a];
                                var l = i[o[a][0]],
                                    h = P;
                                t.vsub(l, h);
                                var c = e.dot(h),
                                    u = T;
                                s.vsub(l, u);
                                var p = e.dot(u);
                                if (c < 0 && p > 0 || c > 0 && p < 0) return !1
                            }
                            return -1
                        };
                        new n;
                        var F = new n,
                            q = new n;
                        s.project = function(t, e, i, o, n) {
                            var s = t.vertices.length,
                                a = F,
                                l = 0,
                                h = 0,
                                c = q,
                                u = t.vertices;
                            c.setZero(), r.vectorToLocalFrame(i, o, e, a), r.pointToLocalFrame(i, o, c, c);
                            var p = c.dot(a);
                            h = l = u[0].dot(a);
                            for (var d = 1; d < s; d++) {
                                var y = u[d].dot(a);
                                y > l && (l = y), y < h && (h = y)
                            }
                            if ((h -= p) > (l -= p)) {
                                var f = h;
                                h = l, l = f
                            }
                            n[0] = l, n[1] = h
                        }
                    }, {
                        "../math/Quaternion": 29,
                        "../math/Transform": 30,
                        "../math/Vec3": 31,
                        "./Shape": 44
                    }],
                    40: [function(t, e, i) {
                        e.exports = r;
                        t("./Shape");
                        var o = t("../math/Vec3"),
                            n = (t("../math/Quaternion"), t("./ConvexPolyhedron"));

                        function r(t, e, i, r) {
                            var s = r,
                                a = [],
                                l = [],
                                h = [],
                                c = [],
                                u = [],
                                p = Math.cos,
                                d = Math.sin;
                            a.push(new o(e * p(0), e * d(0), .5 * -i)), c.push(0), a.push(new o(t * p(0), t * d(0), .5 * i)), u.push(1);
                            for (var y = 0; y < s; y++) {
                                var f = 2 * Math.PI / s * (y + 1),
                                    v = 2 * Math.PI / s * (y + .5);
                                y < s - 1 ? (a.push(new o(e * p(f), e * d(f), .5 * -i)), c.push(2 * y + 2), a.push(new o(t * p(f), t * d(f), .5 * i)), u.push(2 * y + 3), h.push([2 * y + 2, 2 * y + 3, 2 * y + 1, 2 * y])) : h.push([0, 1, 2 * y + 1, 2 * y]), (s % 2 == 1 || y < s / 2) && l.push(new o(p(v), d(v), 0))
                            }
                            h.push(u), l.push(new o(0, 0, 1));
                            var m = [];
                            for (y = 0; y < c.length; y++) m.push(c[c.length - y - 1]);
                            h.push(m), n.call(this, a, h, l)
                        }
                        r.prototype = new n
                    }, {
                        "../math/Quaternion": 29,
                        "../math/Vec3": 31,
                        "./ConvexPolyhedron": 39,
                        "./Shape": 44
                    }],
                    41: [function(t, e, i) {
                        var o = t("./Shape"),
                            n = t("./ConvexPolyhedron"),
                            r = t("../math/Vec3"),
                            s = t("../utils/Utils");

                        function a(t, e) {
                            e = s.defaults(e, {
                                maxValue: null,
                                minValue: null,
                                elementSize: 1
                            }), this.data = t, this.maxValue = e.maxValue, this.minValue = e.minValue, this.elementSize = e.elementSize, null === e.minValue && this.updateMinValue(), null === e.maxValue && this.updateMaxValue(), this.cacheEnabled = !0, o.call(this, {
                                type: o.types.HEIGHTFIELD
                            }), this.pillarConvex = new n, this.pillarOffset = new r, this.updateBoundingSphereRadius(), this._cachedPillars = {}
                        }
                        e.exports = a, a.prototype = new o, a.prototype.update = function() {
                            this._cachedPillars = {}
                        }, a.prototype.updateMinValue = function() {
                            for (var t = this.data, e = t[0][0], i = 0; i !== t.length; i++)
                                for (var o = 0; o !== t[i].length; o++) {
                                    var n = t[i][o];
                                    n < e && (e = n)
                                }
                            this.minValue = e
                        }, a.prototype.updateMaxValue = function() {
                            for (var t = this.data, e = t[0][0], i = 0; i !== t.length; i++)
                                for (var o = 0; o !== t[i].length; o++) {
                                    var n = t[i][o];
                                    n > e && (e = n)
                                }
                            this.maxValue = e
                        }, a.prototype.setHeightValueAtIndex = function(t, e, i) {
                            this.data[t][e] = i, this.clearCachedConvexTrianglePillar(t, e, !1), t > 0 && (this.clearCachedConvexTrianglePillar(t - 1, e, !0), this.clearCachedConvexTrianglePillar(t - 1, e, !1)), e > 0 && (this.clearCachedConvexTrianglePillar(t, e - 1, !0), this.clearCachedConvexTrianglePillar(t, e - 1, !1)), e > 0 && t > 0 && this.clearCachedConvexTrianglePillar(t - 1, e - 1, !0)
                        }, a.prototype.getRectMinMax = function(t, e, i, o, n) {
                            n = n || [];
                            for (var r = this.data, s = this.minValue, a = t; a <= i; a++)
                                for (var l = e; l <= o; l++) {
                                    var h = r[a][l];
                                    h > s && (s = h)
                                }
                            n[0] = this.minValue, n[1] = s
                        }, a.prototype.getIndexOfPosition = function(t, e, i, o) {
                            var n = this.elementSize,
                                r = this.data,
                                s = Math.floor(t / n),
                                a = Math.floor(e / n);
                            return i[0] = s, i[1] = a, o && (s < 0 && (s = 0), a < 0 && (a = 0), s >= r.length - 1 && (s = r.length - 1), a >= r[0].length - 1 && (a = r[0].length - 1)), !(s < 0 || a < 0 || s >= r.length - 1 || a >= r[0].length - 1)
                        };
                        var l = [],
                            h = new r,
                            c = new r,
                            u = new r,
                            p = new r;
                        a.prototype.getTriangleAt = function(t, e, i, o, n, r) {
                            var s = l;
                            this.getIndexOfPosition(t, e, s, i);
                            var a = s[0],
                                h = s[1],
                                c = this.data;
                            i && (a = Math.min(c.length - 2, Math.max(0, a)), h = Math.min(c[0].length - 2, Math.max(0, h)));
                            var u = this.elementSize,
                                p = Math.pow(t / u - a, 2) + Math.pow(e / u - h, 2) > Math.pow(t / u - (a + 1), 2) + Math.pow(e / u - (h + 1), 2);
                            return this.getTriangle(a, h, p, o, n, r), p
                        };
                        var d = new r,
                            y = new r,
                            f = new r,
                            v = new r,
                            m = new r;

                        function g(t, e, i, o, n, r, s, a, l) {
                            l.x = ((r - a) * (t - s) + (s - n) * (e - a)) / ((r - a) * (i - s) + (s - n) * (o - a)), l.y = ((a - o) * (t - s) + (i - s) * (e - a)) / ((r - a) * (i - s) + (s - n) * (o - a)), l.z = 1 - l.x - l.y
                        }
                        a.prototype.getNormalAt = function(t, e, i, o) {
                            var n = d,
                                r = y,
                                s = f,
                                a = v,
                                l = m;
                            this.getTriangleAt(t, e, i, n, r, s), r.vsub(n, a), s.vsub(n, l), a.cross(l, o), o.normalize()
                        }, a.prototype.getAabbAtIndex = function(t, e, i) {
                            var o = this.data,
                                n = this.elementSize;
                            i.lowerBound.set(t * n, e * n, o[t][e]), i.upperBound.set((t + 1) * n, (e + 1) * n, o[t + 1][e + 1])
                        }, a.prototype.getHeightAt = function(t, e, i) {
                            var o = this.data,
                                n = c,
                                r = u,
                                s = p,
                                a = l;
                            this.getIndexOfPosition(t, e, a, i);
                            var d = a[0],
                                y = a[1];
                            i && (d = Math.min(o.length - 2, Math.max(0, d)), y = Math.min(o[0].length - 2, Math.max(0, y)));
                            var f = this.getTriangleAt(t, e, i, n, r, s);
                            g(t, e, n.x, n.y, r.x, r.y, s.x, s.y, h);
                            var v = h;
                            return f ? o[d + 1][y + 1] * v.x + o[d][y + 1] * v.y + o[d + 1][y] * v.z : o[d][y] * v.x + o[d + 1][y] * v.y + o[d][y + 1] * v.z
                        }, a.prototype.getCacheConvexTrianglePillarKey = function(t, e, i) {
                            return t + "_" + e + "_" + (i ? 1 : 0)
                        }, a.prototype.getCachedConvexTrianglePillar = function(t, e, i) {
                            return this._cachedPillars[this.getCacheConvexTrianglePillarKey(t, e, i)]
                        }, a.prototype.setCachedConvexTrianglePillar = function(t, e, i, o, n) {
                            this._cachedPillars[this.getCacheConvexTrianglePillarKey(t, e, i)] = {
                                convex: o,
                                offset: n
                            }
                        }, a.prototype.clearCachedConvexTrianglePillar = function(t, e, i) {
                            delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(t, e, i)]
                        }, a.prototype.getTriangle = function(t, e, i, o, n, r) {
                            var s = this.data,
                                a = this.elementSize;
                            i ? (o.set((t + 1) * a, (e + 1) * a, s[t + 1][e + 1]), n.set(t * a, (e + 1) * a, s[t][e + 1]), r.set((t + 1) * a, e * a, s[t + 1][e])) : (o.set(t * a, e * a, s[t][e]), n.set((t + 1) * a, e * a, s[t + 1][e]), r.set(t * a, (e + 1) * a, s[t][e + 1]))
                        }, a.prototype.getConvexTrianglePillar = function(t, e, i) {
                            var o = this.pillarConvex,
                                s = this.pillarOffset;
                            if (this.cacheEnabled) {
                                if (a = this.getCachedConvexTrianglePillar(t, e, i)) return this.pillarConvex = a.convex, void(this.pillarOffset = a.offset);
                                o = new n, s = new r, this.pillarConvex = o, this.pillarOffset = s
                            }
                            var a = this.data,
                                l = this.elementSize,
                                h = o.faces;
                            o.vertices.length = 6;
                            for (var c = 0; c < 6; c++) o.vertices[c] || (o.vertices[c] = new r);
                            h.length = 5;
                            for (c = 0; c < 5; c++) h[c] || (h[c] = []);
                            var u = o.vertices,
                                p = (Math.min(a[t][e], a[t + 1][e], a[t][e + 1], a[t + 1][e + 1]) - this.minValue) / 2 + this.minValue;
                            i ? (s.set((t + .75) * l, (e + .75) * l, p), u[0].set(.25 * l, .25 * l, a[t + 1][e + 1] - p), u[1].set(-.75 * l, .25 * l, a[t][e + 1] - p), u[2].set(.25 * l, -.75 * l, a[t + 1][e] - p), u[3].set(.25 * l, .25 * l, -p - 1), u[4].set(-.75 * l, .25 * l, -p - 1), u[5].set(.25 * l, -.75 * l, -p - 1), h[0][0] = 0, h[0][1] = 1, h[0][2] = 2, h[1][0] = 5, h[1][1] = 4, h[1][2] = 3, h[2][0] = 2, h[2][1] = 5, h[2][2] = 3, h[2][3] = 0, h[3][0] = 3, h[3][1] = 4, h[3][2] = 1, h[3][3] = 0, h[4][0] = 1, h[4][1] = 4, h[4][2] = 5, h[4][3] = 2) : (s.set((t + .25) * l, (e + .25) * l, p), u[0].set(-.25 * l, -.25 * l, a[t][e] - p), u[1].set(.75 * l, -.25 * l, a[t + 1][e] - p), u[2].set(-.25 * l, .75 * l, a[t][e + 1] - p), u[3].set(-.25 * l, -.25 * l, -p - 1), u[4].set(.75 * l, -.25 * l, -p - 1), u[5].set(-.25 * l, .75 * l, -p - 1), h[0][0] = 0, h[0][1] = 1, h[0][2] = 2, h[1][0] = 5, h[1][1] = 4, h[1][2] = 3, h[2][0] = 0, h[2][1] = 2, h[2][2] = 5, h[2][3] = 3, h[3][0] = 1, h[3][1] = 0, h[3][2] = 3, h[3][3] = 4, h[4][0] = 4, h[4][1] = 5, h[4][2] = 2, h[4][3] = 1), o.computeNormals(), o.computeEdges(), o.updateBoundingSphereRadius(), this.setCachedConvexTrianglePillar(t, e, i, o, s)
                        }, a.prototype.calculateLocalInertia = function(t, e) {
                            return (e = e || new r).set(0, 0, 0), e
                        }, a.prototype.volume = function() {
                            return Number.MAX_VALUE
                        }, a.prototype.calculateWorldAABB = function(t, e, i, o) {
                            i.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE), o.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
                        }, a.prototype.updateBoundingSphereRadius = function() {
                            var t = this.data,
                                e = this.elementSize;
                            this.boundingSphereRadius = new r(t.length * e, t[0].length * e, Math.max(Math.abs(this.maxValue), Math.abs(this.minValue))).norm()
                        }, a.prototype.setHeightsFromImage = function(t, e) {
                            var i = document.createElement("canvas");
                            i.width = t.width, i.height = t.height;
                            var o = i.getContext("2d");
                            o.drawImage(t, 0, 0);
                            var n = o.getImageData(0, 0, t.width, t.height),
                                r = this.data;
                            r.length = 0, this.elementSize = Math.abs(e.x) / n.width;
                            for (var s = 0; s < n.height; s++) {
                                for (var a = [], l = 0; l < n.width; l++) {
                                    var h = (n.data[4 * (s * n.height + l)] + n.data[4 * (s * n.height + l) + 1] + n.data[4 * (s * n.height + l) + 2]) / 4 / 255 * e.z;
                                    e.x < 0 ? a.push(h) : a.unshift(h)
                                }
                                e.y < 0 ? r.unshift(a) : r.push(a)
                            }
                            this.updateMaxValue(), this.updateMinValue(), this.update()
                        }
                    }, {
                        "../math/Vec3": 31,
                        "../utils/Utils": 54,
                        "./ConvexPolyhedron": 39,
                        "./Shape": 44
                    }],
                    42: [function(t, e, i) {
                        e.exports = r;
                        var o = t("./Shape"),
                            n = t("../math/Vec3");

                        function r() {
                            o.call(this, {
                                type: o.types.PARTICLE
                            })
                        }
                        r.prototype = new o, r.prototype.constructor = r, r.prototype.calculateLocalInertia = function(t, e) {
                            return (e = e || new n).set(0, 0, 0), e
                        }, r.prototype.volume = function() {
                            return 0
                        }, r.prototype.updateBoundingSphereRadius = function() {
                            this.boundingSphereRadius = 0
                        }, r.prototype.calculateWorldAABB = function(t, e, i, o) {
                            i.copy(t), o.copy(t)
                        }
                    }, {
                        "../math/Vec3": 31,
                        "./Shape": 44
                    }],
                    43: [function(t, e, i) {
                        e.exports = r;
                        var o = t("./Shape"),
                            n = t("../math/Vec3");

                        function r() {
                            o.call(this, {
                                type: o.types.PLANE
                            }), this.worldNormal = new n, this.worldNormalNeedsUpdate = !0, this.boundingSphereRadius = Number.MAX_VALUE
                        }
                        r.prototype = new o, r.prototype.constructor = r, r.prototype.computeWorldNormal = function(t) {
                            var e = this.worldNormal;
                            e.set(0, 0, 1), t.vmult(e, e), this.worldNormalNeedsUpdate = !1
                        }, r.prototype.calculateLocalInertia = function(t, e) {
                            return e = e || new n
                        }, r.prototype.volume = function() {
                            return Number.MAX_VALUE
                        };
                        var s = new n;
                        r.prototype.calculateWorldAABB = function(t, e, i, o) {
                            s.set(0, 0, 1), e.vmult(s, s);
                            var n = Number.MAX_VALUE;
                            i.set(-n, -n, -n), o.set(n, n, n), 1 === s.x && (o.x = t.x), 1 === s.y && (o.y = t.y), 1 === s.z && (o.z = t.z), -1 === s.x && (i.x = t.x), -1 === s.y && (i.y = t.y), -1 === s.z && (i.z = t.z)
                        }, r.prototype.updateBoundingSphereRadius = function() {
                            this.boundingSphereRadius = Number.MAX_VALUE
                        }
                    }, {
                        "../math/Vec3": 31,
                        "./Shape": 44
                    }],
                    44: [function(t, e, i) {
                        e.exports = n;
                        var o = t("../utils/EventTarget"),
                            n = t("./Shape");
                        t("../math/Vec3"), t("../math/Quaternion"), t("../material/Material");

                        function n(t) {
                            t = t || {}, o.apply(this), this.id = n.idCounter++, this.type = t.type || 0, this.boundingSphereRadius = 0, this.collisionResponse = !t.collisionResponse || t.collisionResponse, this.collisionFilterGroup = void 0 !== t.collisionFilterGroup ? t.collisionFilterGroup : 1, this.collisionFilterMask = void 0 !== t.collisionFilterMask ? t.collisionFilterMask : -1, this.material = t.material ? t.material : null, this.body = null
                        }
                        n.prototype = new o, n.prototype.constructor = n, n.prototype.updateBoundingSphereRadius = function() {
                            throw "computeBoundingSphereRadius() not implemented for shape type " + this.type
                        }, n.prototype.volume = function() {
                            throw "volume() not implemented for shape type " + this.type
                        }, n.prototype.calculateLocalInertia = function(t, e) {
                            throw "calculateLocalInertia() not implemented for shape type " + this.type
                        }, n.idCounter = 0, n.types = {
                            SPHERE: 1,
                            PLANE: 2,
                            BOX: 4,
                            COMPOUND: 8,
                            CONVEXPOLYHEDRON: 16,
                            HEIGHTFIELD: 32,
                            PARTICLE: 64,
                            CYLINDER: 128,
                            TRIMESH: 256
                        }
                    }, {
                        "../material/Material": 26,
                        "../math/Quaternion": 29,
                        "../math/Vec3": 31,
                        "../utils/EventTarget": 50,
                        "./Shape": 44
                    }],
                    45: [function(t, e, i) {
                        e.exports = r;
                        var o = t("./Shape"),
                            n = t("../math/Vec3");

                        function r(t) {
                            if (o.call(this, {
                                    type: o.types.SPHERE
                                }), this.radius = void 0 !== t ? t : 1, this.radius < 0) throw new Error("The sphere radius cannot be negative.");
                            this.updateBoundingSphereRadius()
                        }
                        r.prototype = new o, r.prototype.constructor = r, r.prototype.calculateLocalInertia = function(t, e) {
                            e = e || new n;
                            var i = 2 * t * this.radius * this.radius / 5;
                            return e.x = i, e.y = i, e.z = i, e
                        }, r.prototype.volume = function() {
                            return 4 * Math.PI * this.radius / 3
                        }, r.prototype.updateBoundingSphereRadius = function() {
                            this.boundingSphereRadius = this.radius
                        }, r.prototype.calculateWorldAABB = function(t, e, i, o) {
                            for (var n = this.radius, r = ["x", "y", "z"], s = 0; s < r.length; s++) {
                                var a = r[s];
                                i[a] = t[a] - n, o[a] = t[a] + n
                            }
                        }
                    }, {
                        "../math/Vec3": 31,
                        "./Shape": 44
                    }],
                    46: [function(t, e, i) {
                        e.exports = l;
                        var o = t("./Shape"),
                            n = t("../math/Vec3"),
                            r = (t("../math/Quaternion"), t("../math/Transform")),
                            s = t("../collision/AABB"),
                            a = t("../utils/Octree");

                        function l(t, e) {
                            o.call(this, {
                                type: o.types.TRIMESH
                            }), this.vertices = new Float32Array(t), this.indices = new Int16Array(e), this.normals = new Float32Array(e.length), this.aabb = new s, this.edges = null, this.scale = new n(1, 1, 1), this.tree = new a, this.updateEdges(), this.updateNormals(), this.updateAABB(), this.updateBoundingSphereRadius(), this.updateTree()
                        }
                        l.prototype = new o, l.prototype.constructor = l;
                        var h = new n;
                        l.prototype.updateTree = function() {
                            var t = this.tree;
                            t.reset(), t.aabb.copy(this.aabb);
                            var e = this.scale;
                            t.aabb.lowerBound.x *= 1 / e.x, t.aabb.lowerBound.y *= 1 / e.y, t.aabb.lowerBound.z *= 1 / e.z, t.aabb.upperBound.x *= 1 / e.x, t.aabb.upperBound.y *= 1 / e.y, t.aabb.upperBound.z *= 1 / e.z;
                            for (var i = new s, o = new n, r = new n, a = new n, l = [o, r, a], h = 0; h < this.indices.length / 3; h++) {
                                var c = 3 * h;
                                this._getUnscaledVertex(this.indices[c], o), this._getUnscaledVertex(this.indices[c + 1], r), this._getUnscaledVertex(this.indices[c + 2], a), i.setFromPoints(l), t.insert(i, h)
                            }
                            t.removeEmptyNodes()
                        };
                        var c = new s;
                        l.prototype.getTrianglesInAABB = function(t, e) {
                            c.copy(t);
                            var i = this.scale,
                                o = i.x,
                                n = i.y,
                                r = i.z,
                                s = c.lowerBound,
                                a = c.upperBound;
                            return s.x /= o, s.y /= n, s.z /= r, a.x /= o, a.y /= n, a.z /= r, this.tree.aabbQuery(c, e)
                        }, l.prototype.setScale = function(t) {
                            var e = this.scale.x === this.scale.y === this.scale.z,
                                i = t.x === t.y === t.z;
                            e && i || this.updateNormals(), this.scale.copy(t), this.updateAABB(), this.updateBoundingSphereRadius()
                        }, l.prototype.updateNormals = function() {
                            for (var t = h, e = this.normals, i = 0; i < this.indices.length / 3; i++) {
                                var o = 3 * i,
                                    n = this.indices[o],
                                    r = this.indices[o + 1],
                                    s = this.indices[o + 2];
                                this.getVertex(n, f), this.getVertex(r, v), this.getVertex(s, m), l.computeNormal(v, f, m, t), e[o] = t.x, e[o + 1] = t.y, e[o + 2] = t.z
                            }
                        }, l.prototype.updateEdges = function() {
                            for (var t = {}, e = function(e, i) {
                                    t[n < r ? n + "_" + r : r + "_" + n] = !0
                                }, i = 0; i < this.indices.length / 3; i++) {
                                var o = 3 * i,
                                    n = this.indices[o],
                                    r = this.indices[o + 1];
                                this.indices[o + 2];
                                e(), e(), e()
                            }
                            var s = Object.keys(t);
                            this.edges = new Int16Array(2 * s.length);
                            for (i = 0; i < s.length; i++) {
                                var a = s[i].split("_");
                                this.edges[2 * i] = parseInt(a[0], 10), this.edges[2 * i + 1] = parseInt(a[1], 10)
                            }
                        }, l.prototype.getEdgeVertex = function(t, e, i) {
                            var o = this.edges[2 * t + (e ? 1 : 0)];
                            this.getVertex(o, i)
                        };
                        var u = new n,
                            p = new n;
                        l.prototype.getEdgeVector = function(t, e) {
                            var i = u,
                                o = p;
                            this.getEdgeVertex(t, 0, i), this.getEdgeVertex(t, 1, o), o.vsub(i, e)
                        };
                        var d = new n,
                            y = new n;
                        l.computeNormal = function(t, e, i, o) {
                            e.vsub(t, y), i.vsub(e, d), d.cross(y, o), o.isZero() || o.normalize()
                        };
                        var f = new n,
                            v = new n,
                            m = new n;
                        l.prototype.getVertex = function(t, e) {
                            var i = this.scale;
                            return this._getUnscaledVertex(t, e), e.x *= i.x, e.y *= i.y, e.z *= i.z, e
                        }, l.prototype._getUnscaledVertex = function(t, e) {
                            var i = 3 * t,
                                o = this.vertices;
                            return e.set(o[i], o[i + 1], o[i + 2])
                        }, l.prototype.getWorldVertex = function(t, e, i, o) {
                            return this.getVertex(t, o), r.pointToWorldFrame(e, i, o, o), o
                        }, l.prototype.getTriangleVertices = function(t, e, i, o) {
                            var n = 3 * t;
                            this.getVertex(this.indices[n], e), this.getVertex(this.indices[n + 1], i), this.getVertex(this.indices[n + 2], o)
                        }, l.prototype.getNormal = function(t, e) {
                            var i = 3 * t;
                            return e.set(this.normals[i], this.normals[i + 1], this.normals[i + 2])
                        };
                        var g = new s;
                        l.prototype.calculateLocalInertia = function(t, e) {
                            this.computeLocalAABB(g);
                            var i = g.upperBound.x - g.lowerBound.x,
                                o = g.upperBound.y - g.lowerBound.y,
                                n = g.upperBound.z - g.lowerBound.z;
                            return e.set(1 / 12 * t * (2 * o * 2 * o + 2 * n * 2 * n), 1 / 12 * t * (2 * i * 2 * i + 2 * n * 2 * n), 1 / 12 * t * (2 * o * 2 * o + 2 * i * 2 * i))
                        };
                        var w = new n;
                        l.prototype.computeLocalAABB = function(t) {
                            var e = t.lowerBound,
                                i = t.upperBound,
                                o = this.vertices.length,
                                n = (this.vertices, w);
                            this.getVertex(0, n), e.copy(n), i.copy(n);
                            for (var r = 0; r !== o; r++) this.getVertex(r, n), n.x < e.x ? e.x = n.x : n.x > i.x && (i.x = n.x), n.y < e.y ? e.y = n.y : n.y > i.y && (i.y = n.y), n.z < e.z ? e.z = n.z : n.z > i.z && (i.z = n.z)
                        }, l.prototype.updateAABB = function() {
                            this.computeLocalAABB(this.aabb)
                        }, l.prototype.updateBoundingSphereRadius = function() {
                            for (var t = 0, e = this.vertices, i = new n, o = 0, r = e.length / 3; o !== r; o++) {
                                this.getVertex(o, i);
                                var s = i.norm2();
                                s > t && (t = s)
                            }
                            this.boundingSphereRadius = Math.sqrt(t)
                        };
                        new n;
                        var b = new r,
                            x = new s;
                        l.prototype.calculateWorldAABB = function(t, e, i, o) {
                            var n = b,
                                r = x;
                            n.position = t, n.quaternion = e, this.aabb.toWorldFrame(n, r), i.copy(r.lowerBound), o.copy(r.upperBound)
                        }, l.prototype.volume = function() {
                            return 4 * Math.PI * this.boundingSphereRadius / 3
                        }, l.createTorus = function(t, e, i, o, n) {
                            t = t || 1, e = e || .5, i = i || 8, o = o || 6, n = n || 2 * Math.PI;
                            for (var r = [], s = [], a = 0; a <= i; a++)
                                for (var h = 0; h <= o; h++) {
                                    var c = h / o * n,
                                        u = a / i * Math.PI * 2,
                                        p = (t + e * Math.cos(u)) * Math.cos(c),
                                        d = (t + e * Math.cos(u)) * Math.sin(c),
                                        y = e * Math.sin(u);
                                    r.push(p, d, y)
                                }
                            for (a = 1; a <= i; a++)
                                for (h = 1; h <= o; h++) {
                                    var f = (o + 1) * a + h - 1,
                                        v = (o + 1) * (a - 1) + h - 1,
                                        m = (o + 1) * (a - 1) + h,
                                        g = (o + 1) * a + h;
                                    s.push(f, v, g), s.push(v, m, g)
                                }
                            return new l(r, s)
                        }
                    }, {
                        "../collision/AABB": 3,
                        "../math/Quaternion": 29,
                        "../math/Transform": 30,
                        "../math/Vec3": 31,
                        "../utils/Octree": 51,
                        "./Shape": 44
                    }],
                    47: [function(t, e, i) {
                        e.exports = n;
                        t("../math/Vec3"), t("../math/Quaternion");
                        var o = t("./Solver");

                        function n() {
                            o.call(this), this.iterations = 10, this.tolerance = 1e-7
                        }
                        n.prototype = new o;
                        var r = [],
                            s = [],
                            a = [];
                        n.prototype.solve = function(t, e) {
                            var i, o, n, l, h, c = 0,
                                u = this.iterations,
                                p = this.tolerance * this.tolerance,
                                d = this.equations,
                                y = d.length,
                                f = e.bodies,
                                v = f.length,
                                m = t;
                            if (0 !== y)
                                for (var g = 0; g !== v; g++) f[g].updateSolveMassProperties();
                            var w = s,
                                b = a,
                                x = r;
                            w.length = y, b.length = y, x.length = y;
                            for (g = 0; g !== y; g++) {
                                var _ = d[g];
                                x[g] = 0, b[g] = _.computeB(m), w[g] = 1 / _.computeC()
                            }
                            if (0 !== y) {
                                for (g = 0; g !== v; g++) {
                                    var B = (M = f[g]).vlambda,
                                        S = M.wlambda;
                                    B.set(0, 0, 0), S.set(0, 0, 0)
                                }
                                for (c = 0; c !== u; c++) {
                                    l = 0;
                                    for (var E = 0; E !== y; E++) {
                                        _ = d[E];
                                        i = b[E], o = w[E], (h = x[E]) + (n = o * (i - _.computeGWlambda() - _.eps * h)) < _.minForce ? n = _.minForce - h : h + n > _.maxForce && (n = _.maxForce - h), x[E] += n, l += n > 0 ? n : -n, _.addToWlambda(n)
                                    }
                                    if (l * l < p) break
                                }
                                for (g = 0; g !== v; g++) {
                                    var M, A = (M = f[g]).velocity,
                                        C = M.angularVelocity;
                                    M.vlambda.vmul(M.linearFactor, M.vlambda), A.vadd(M.vlambda, A), M.wlambda.vmul(M.angularFactor, M.wlambda), C.vadd(M.wlambda, C)
                                }
                                for (var z = d.length, R = 1 / m; z--;) d[z].multiplier = x[z] * R
                            }
                            return c
                        }
                    }, {
                        "../math/Quaternion": 29,
                        "../math/Vec3": 31,
                        "./Solver": 48
                    }],
                    48: [function(t, e, i) {
                        function o() {
                            this.equations = []
                        }
                        e.exports = o, o.prototype.solve = function(t, e) {
                            return 0
                        }, o.prototype.addEquation = function(t) {
                            t.enabled && this.equations.push(t)
                        }, o.prototype.removeEquation = function(t) {
                            var e = this.equations,
                                i = e.indexOf(t); - 1 !== i && e.splice(i, 1)
                        }, o.prototype.removeAllEquations = function() {
                            this.equations.length = 0
                        }
                    }, {}],
                    49: [function(t, e, i) {
                        e.exports = r;
                        t("../math/Vec3"), t("../math/Quaternion");
                        var o = t("./Solver"),
                            n = t("../objects/Body");

                        function r(t) {
                            for (o.call(this), this.iterations = 10, this.tolerance = 1e-7, this.subsolver = t, this.nodes = [], this.nodePool = []; this.nodePool.length < 128;) this.nodePool.push(this.createNode())
                        }
                        r.prototype = new o;
                        var s = [],
                            a = [],
                            l = {
                                bodies: []
                            },
                            h = n.STATIC;

                        function c(t) {
                            for (var e = t.length, i = 0; i !== e; i++) {
                                var o = t[i];
                                if (!(o.visited || o.body.type & h)) return o
                            }
                            return !1
                        }
                        var u = [];

                        function p(t, e, i, o) {
                            for (u.push(t), t.visited = !0, e(t, i, o); u.length;)
                                for (var n, r = u.pop(); n = c(r.children);) n.visited = !0, e(n, i, o), u.push(n)
                        }

                        function d(t, e, i) {
                            e.push(t.body);
                            for (var o = t.eqs.length, n = 0; n !== o; n++) {
                                var r = t.eqs[n]; - 1 === i.indexOf(r) && i.push(r)
                            }
                        }

                        function y(t, e) {
                            return e.id - t.id
                        }
                        r.prototype.createNode = function() {
                            return {
                                body: null,
                                children: [],
                                eqs: [],
                                visited: !1
                            }
                        }, r.prototype.solve = function(t, e) {
                            for (var i = s, o = this.nodePool, n = e.bodies, r = this.equations, h = r.length, u = n.length, f = this.subsolver; o.length < u;) o.push(this.createNode());
                            i.length = u;
                            for (var v = 0; v < u; v++) i[v] = o[v];
                            for (v = 0; v !== u; v++) {
                                var m = i[v];
                                m.body = n[v], m.children.length = 0, m.eqs.length = 0, m.visited = !1
                            }
                            for (var g = 0; g !== h; g++) {
                                var w = r[g],
                                    b = (v = n.indexOf(w.bi), n.indexOf(w.bj)),
                                    x = i[v],
                                    _ = i[b];
                                x.children.push(_), x.eqs.push(w), _.children.push(x), _.eqs.push(w)
                            }
                            var B, S = 0,
                                E = a;
                            f.tolerance = this.tolerance, f.iterations = this.iterations;
                            for (var M = l; B = c(i);) {
                                E.length = 0, M.bodies.length = 0, p(B, d, M.bodies, E);
                                var A = E.length;
                                E = E.sort(y);
                                for (v = 0; v !== A; v++) f.addEquation(E[v]);
                                f.solve(t, M);
                                f.removeAllEquations(), S++
                            }
                            return S
                        }
                    }, {
                        "../math/Quaternion": 29,
                        "../math/Vec3": 31,
                        "../objects/Body": 32,
                        "./Solver": 48
                    }],
                    50: [function(t, e, i) {
                        var o = function() {};
                        e.exports = o, o.prototype = {
                            constructor: o,
                            addEventListener: function(t, e) {
                                void 0 === this._listeners && (this._listeners = {});
                                var i = this._listeners;
                                return void 0 === i[t] && (i[t] = []), -1 === i[t].indexOf(e) && i[t].push(e), this
                            },
                            hasEventListener: function(t, e) {
                                if (void 0 === this._listeners) return !1;
                                var i = this._listeners;
                                return void 0 !== i[t] && -1 !== i[t].indexOf(e)
                            },
                            hasAnyEventListener: function(t) {
                                return void 0 !== this._listeners && void 0 !== this._listeners[t]
                            },
                            removeEventListener: function(t, e) {
                                if (void 0 === this._listeners) return this;
                                var i = this._listeners;
                                if (void 0 === i[t]) return this;
                                var o = i[t].indexOf(e);
                                return -1 !== o && i[t].splice(o, 1), this
                            },
                            dispatchEvent: function(t) {
                                if (void 0 === this._listeners) return this;
                                var e = this._listeners[t.type];
                                if (void 0 !== e) {
                                    t.target = this;
                                    for (var i = 0, o = e.length; i < o; i++) e[i].call(this, t)
                                }
                                return this
                            }
                        }
                    }, {}],
                    51: [function(t, e, i) {
                        var o = t("../collision/AABB"),
                            n = t("../math/Vec3");

                        function r(t) {
                            t = t || {}, this.root = t.root || null, this.aabb = t.aabb ? t.aabb.clone() : new o, this.data = [], this.children = []
                        }

                        function s(t, e) {
                            (e = e || {}).root = null, e.aabb = t, r.call(this, e), this.maxDepth = void 0 !== e.maxDepth ? e.maxDepth : 8
                        }
                        e.exports = s, s.prototype = new r, r.prototype.reset = function(t, e) {
                            this.children.length = this.data.length = 0
                        }, r.prototype.insert = function(t, e, i) {
                            var o = this.data;
                            if (i = i || 0, !this.aabb.contains(t)) return !1;
                            var n = this.children;
                            if (i < (this.maxDepth || this.root.maxDepth)) {
                                var r = !1;
                                n.length || (this.subdivide(), r = !0);
                                for (var s = 0; 8 !== s; s++)
                                    if (n[s].insert(t, e, i + 1)) return !0;
                                r && (n.length = 0)
                            }
                            return o.push(e), !0
                        };
                        var a = new n;
                        r.prototype.subdivide = function() {
                            var t = this.aabb,
                                e = t.lowerBound,
                                i = t.upperBound,
                                s = this.children;
                            s.push(new r({
                                aabb: new o({
                                    lowerBound: new n(0, 0, 0)
                                })
                            }), new r({
                                aabb: new o({
                                    lowerBound: new n(1, 0, 0)
                                })
                            }), new r({
                                aabb: new o({
                                    lowerBound: new n(1, 1, 0)
                                })
                            }), new r({
                                aabb: new o({
                                    lowerBound: new n(1, 1, 1)
                                })
                            }), new r({
                                aabb: new o({
                                    lowerBound: new n(0, 1, 1)
                                })
                            }), new r({
                                aabb: new o({
                                    lowerBound: new n(0, 0, 1)
                                })
                            }), new r({
                                aabb: new o({
                                    lowerBound: new n(1, 0, 1)
                                })
                            }), new r({
                                aabb: new o({
                                    lowerBound: new n(0, 1, 0)
                                })
                            })), i.vsub(e, a), a.scale(.5, a);
                            for (var l = this.root || this, h = 0; 8 !== h; h++) {
                                var c = s[h];
                                c.root = l;
                                var u = c.aabb.lowerBound;
                                u.x *= a.x, u.y *= a.y, u.z *= a.z, u.vadd(e, u), u.vadd(a, c.aabb.upperBound)
                            }
                        }, r.prototype.aabbQuery = function(t, e) {
                            this.data, this.children;
                            for (var i = [this]; i.length;) {
                                var o = i.pop();
                                o.aabb.overlaps(t) && Array.prototype.push.apply(e, o.data), Array.prototype.push.apply(i, o.children)
                            }
                            return e
                        };
                        var l = new o;
                        r.prototype.rayQuery = function(t, e, i) {
                            return t.getAABB(l), l.toLocalFrame(e, l), this.aabbQuery(l, i), i
                        }, r.prototype.removeEmptyNodes = function() {
                            for (var t = this.children.length - 1; t >= 0; t--) this.children[t].removeEmptyNodes(), this.children[t].children.length || this.children[t].data.length || this.children.splice(t, 1)
                        }
                    }, {
                        "../collision/AABB": 3,
                        "../math/Vec3": 31
                    }],
                    52: [function(t, e, i) {
                        function o() {
                            this.objects = [], this.type = Object
                        }
                        e.exports = o, o.prototype.release = function() {
                            for (var t = arguments.length, e = 0; e !== t; e++) this.objects.push(arguments[e]);
                            return this
                        }, o.prototype.get = function() {
                            return 0 === this.objects.length ? this.constructObject() : this.objects.pop()
                        }, o.prototype.constructObject = function() {
                            throw new Error("constructObject() not implemented in this Pool subclass yet!")
                        }, o.prototype.resize = function(t) {
                            for (var e = this.objects; e.length > t;) e.pop();
                            for (; e.length < t;) e.push(this.constructObject());
                            return this
                        }
                    }, {}],
                    53: [function(t, e, i) {
                        function o() {
                            this.data = {
                                keys: []
                            }
                        }
                        e.exports = o, o.prototype.get = function(t, e) {
                            if (t > e) {
                                var i = e;
                                e = t, t = i
                            }
                            return this.data[t + "-" + e]
                        }, o.prototype.set = function(t, e, i) {
                            if (t > e) {
                                var o = e;
                                e = t, t = o
                            }
                            var n = t + "-" + e;
                            return this.get(t, e) || this.data.keys.push(n), this.data[n] = i, this.data[n]
                        }, o.prototype.reset = function() {
                            for (var t = this.data, e = t.keys; e.length > 0;) {
                                delete t[e.pop()]
                            }
                        }, o.prototype.getLength = function() {
                            return this.data.keys.length
                        }, o.prototype.getKeyByIndex = function(t) {
                            return this.data.keys[t]
                        }, o.prototype.getDataByKey = function(t) {
                            return this.data[t]
                        }
                    }, {}],
                    54: [function(t, e, i) {
                        function o() {}
                        e.exports = o, o.defaults = function(t, e) {
                            for (var i in t = t || {}, e) i in t || (t[i] = e[i]);
                            return t
                        }
                    }, {}],
                    55: [function(t, e, i) {
                        e.exports = r;
                        var o = t("../math/Vec3"),
                            n = t("./Pool");

                        function r() {
                            n.call(this), this.type = o
                        }
                        r.prototype = new n, r.prototype.constructObject = function() {
                            return new o
                        }
                    }, {
                        "../math/Vec3": 31,
                        "./Pool": 52
                    }],
                    56: [function(t, e, i) {
                        e.exports = d;
                        var o = t("../collision/AABB"),
                            n = t("../objects/Body"),
                            r = t("../shapes/Shape"),
                            s = t("../collision/Ray"),
                            a = t("../math/Vec3"),
                            l = t("../math/Transform"),
                            h = (t("../shapes/ConvexPolyhedron"), t("../math/Quaternion")),
                            c = (t("../solver/Solver"), t("../utils/Vec3Pool")),
                            u = t("../equations/ContactEquation"),
                            p = t("../equations/FrictionEquation");

                        function d(t) {
                            this.contactPointPool = [], this.frictionEquationPool = [], this.result = [], this.frictionResult = [], this.v3pool = new c, this.world = t, this.currentContactMaterial = null, this.enableFrictionReduction = !1
                        }
                        d.prototype.createContactEquation = function(t, e, i, o, n, r) {
                            var s;
                            this.contactPointPool.length ? ((s = this.contactPointPool.pop()).bi = t, s.bj = e) : s = new u(t, e);
                            var a = this.currentContactMaterial;
                            s.restitution = a.restitution, s.setSpookParams(a.contactEquationStiffness, a.contactEquationRelaxation, this.world.dt);
                            var l = i.material || t.material,
                                h = o.material || e.material;
                            return l && h && l.restitution >= 0 && h.restitution >= 0 && (s.restitution = l.restitution * h.restitution), s.si = n || i, s.sj = r || o, s
                        }, d.prototype.createFrictionEquationsFromContact = function(t, e) {
                            var i = t.bi,
                                o = t.bj,
                                n = t.si,
                                r = t.sj,
                                s = this.world,
                                a = this.currentContactMaterial,
                                l = a.friction,
                                h = n.material || i.material,
                                c = r.material || o.material;
                            if (h && c && h.friction >= 0 && c.friction >= 0 && (l = h.friction * c.friction), l > 0) {
                                var u = l * s.gravity.length(),
                                    d = i.invMass + o.invMass;
                                d > 0 && (d = 1 / d);
                                var y = this.frictionEquationPool,
                                    f = y.length ? y.pop() : new p(i, o, u * d),
                                    v = y.length ? y.pop() : new p(i, o, u * d);
                                return f.bi = v.bi = i, f.bj = v.bj = o, f.minForce = v.minForce = -u * d, f.maxForce = v.maxForce = u * d, f.ri.copy(t.ri), f.rj.copy(t.rj), v.ri.copy(t.ri), v.rj.copy(t.rj), t.ni.tangents(f.t, v.t), f.setSpookParams(a.frictionEquationStiffness, a.frictionEquationRelaxation, s.dt), v.setSpookParams(a.frictionEquationStiffness, a.frictionEquationRelaxation, s.dt), f.enabled = v.enabled = t.enabled, e.push(f, v), !0
                            }
                            return !1
                        };
                        var y = new a,
                            f = new a,
                            v = new a;
                        d.prototype.createFrictionFromAverage = function(t) {
                            var e = this.result[this.result.length - 1];
                            if (this.createFrictionEquationsFromContact(e, this.frictionResult) && 1 !== t) {
                                var i = this.frictionResult[this.frictionResult.length - 2],
                                    o = this.frictionResult[this.frictionResult.length - 1];
                                y.setZero(), f.setZero(), v.setZero();
                                for (var n = e.bi, r = (e.bj, 0); r !== t; r++)(e = this.result[this.result.length - 1 - r]).bodyA !== n ? (y.vadd(e.ni, y), f.vadd(e.ri, f), v.vadd(e.rj, v)) : (y.vsub(e.ni, y), f.vadd(e.rj, f), v.vadd(e.ri, v));
                                var s = 1 / t;
                                f.scale(s, i.ri), v.scale(s, i.rj), o.ri.copy(i.ri), o.rj.copy(i.rj), y.normalize(), y.tangents(i.t, o.t)
                            }
                        };
                        var m = new a,
                            g = new a,
                            w = new h,
                            b = new h;
                        d.prototype.getContacts = function(t, e, i, o, r, s, a) {
                            this.frictionEquationPool = a, this.result = o, this.frictionResult = s;
                            for (var l = w, h = b, c = m, u = g, p = 0, d = t.length; p !== d; p++) {
                                var y = t[p],
                                    f = e[p],
                                    v = null;
                                y.material && f.material && (v = i.getContactMaterial(y.material, f.material) || null);
                                for (var x = 0 == y.collisionResponse || 0 == f.collisionResponse || y.type & n.KINEMATIC && f.type & n.STATIC || y.type & n.STATIC && f.type & n.KINEMATIC || y.type & n.KINEMATIC && f.type & n.KINEMATIC, _ = 0; _ < y.shapes.length; _++) {
                                    y.quaternion.mult(y.shapeOrientations[_], l), y.quaternion.vmult(y.shapeOffsets[_], c), c.vadd(y.position, c);
                                    for (var B = y.shapes[_], S = 0; S < f.shapes.length; S++) {
                                        f.quaternion.mult(f.shapeOrientations[S], h), f.quaternion.vmult(f.shapeOffsets[S], u), u.vadd(f.position, u);
                                        var E = f.shapes[S];
                                        if (B.collisionFilterMask & E.collisionFilterGroup && E.collisionFilterMask & B.collisionFilterGroup && !(c.distanceTo(u) > B.boundingSphereRadius + E.boundingSphereRadius)) {
                                            x |= 0 == B.collisionResponse || 0 == E.collisionResponse;
                                            var M = null;
                                            B.material && E.material && (M = i.getContactMaterial(B.material, E.material) || null), this.currentContactMaterial = M || v || i.defaultContactMaterial;
                                            var A = this[B.type | E.type];
                                            if (A) {
                                                (B.type < E.type ? A.call(this, B, E, c, u, l, h, y, f, B, E, x) : A.call(this, E, B, u, c, h, l, f, y, B, E, x)) && x && (i.shapeOverlapKeeper.set(B.id, E.id), i.shapeOverlapKeeperExit.set(B.id, E.id))
                                            }
                                        }
                                    }
                                }
                            }
                        };
                        d.prototype[r.types.BOX | r.types.BOX] = d.prototype.boxBox = function(t, e, i, o, n, r, s, a, l, h, c) {
                            return t.convexPolyhedronRepresentation.material = t.material, e.convexPolyhedronRepresentation.material = e.material, t.convexPolyhedronRepresentation.collisionResponse = t.collisionResponse, e.convexPolyhedronRepresentation.collisionResponse = e.collisionResponse, this.convexConvex(t.convexPolyhedronRepresentation, e.convexPolyhedronRepresentation, i, o, n, r, s, a, t, e, c)
                        }, d.prototype[r.types.BOX | r.types.CONVEXPOLYHEDRON] = d.prototype.boxConvex = function(t, e, i, o, n, r, s, a, l, h, c) {
                            return t.convexPolyhedronRepresentation.material = t.material, t.convexPolyhedronRepresentation.collisionResponse = t.collisionResponse, this.convexConvex(t.convexPolyhedronRepresentation, e, i, o, n, r, s, a, t, e, c)
                        }, d.prototype[r.types.BOX | r.types.PARTICLE] = d.prototype.boxParticle = function(t, e, i, o, n, r, s, a, l, h, c) {
                            return t.convexPolyhedronRepresentation.material = t.material, t.convexPolyhedronRepresentation.collisionResponse = t.collisionResponse, this.convexParticle(t.convexPolyhedronRepresentation, e, i, o, n, r, s, a, t, e, c)
                        }, d.prototype[r.types.SPHERE] = d.prototype.sphereSphere = function(t, e, i, o, n, r, s, a, l, h, c) {
                            if (c) return i.distanceSquared(o) < Math.pow(t.radius + e.radius, 2);
                            var u = this.createContactEquation(s, a, t, e, l, h);
                            o.vsub(i, u.ni), u.ni.normalize(), u.ri.copy(u.ni), u.rj.copy(u.ni), u.ri.mult(t.radius, u.ri), u.rj.mult(-e.radius, u.rj), u.ri.vadd(i, u.ri), u.ri.vsub(s.position, u.ri), u.rj.vadd(o, u.rj), u.rj.vsub(a.position, u.rj), this.result.push(u), this.createFrictionEquationsFromContact(u, this.frictionResult)
                        };
                        var x = new a,
                            _ = new a,
                            B = new a;
                        d.prototype[r.types.PLANE | r.types.TRIMESH] = d.prototype.planeTrimesh = function(t, e, i, o, n, r, s, h, c, u, p) {
                            var d = new a,
                                y = x;
                            y.set(0, 0, 1), n.vmult(y, y);
                            for (var f = 0; f < e.vertices.length / 3; f++) {
                                e.getVertex(f, d);
                                var v = new a;
                                v.copy(d), l.pointToWorldFrame(o, r, v, d);
                                var m = _;
                                if (d.vsub(i, m), y.dot(m) <= 0) {
                                    if (p) return !0;
                                    var g = this.createContactEquation(s, h, t, e, c, u);
                                    g.ni.copy(y);
                                    var w = B;
                                    y.scale(m.dot(y), w), d.vsub(w, w), g.ri.copy(w), g.ri.vsub(s.position, g.ri), g.rj.copy(d), g.rj.vsub(h.position, g.rj), this.result.push(g), this.createFrictionEquationsFromContact(g, this.frictionResult)
                                }
                            }
                        };
                        var S = new a,
                            E = new a,
                            M = (new a, new a),
                            A = new a,
                            C = new a,
                            z = new a,
                            R = new a,
                            P = new a,
                            T = new a,
                            F = new a,
                            q = new a,
                            V = new a,
                            O = new a,
                            I = new o,
                            k = [];
                        d.prototype[r.types.SPHERE | r.types.TRIMESH] = d.prototype.sphereTrimesh = function(t, e, i, o, n, r, a, h, c, u, p) {
                            var d = C,
                                y = z,
                                f = R,
                                v = P,
                                m = T,
                                g = F,
                                w = I,
                                b = A,
                                x = E,
                                _ = k;
                            l.pointToLocalFrame(o, r, i, m);
                            var B = t.radius;
                            w.lowerBound.set(m.x - B, m.y - B, m.z - B), w.upperBound.set(m.x + B, m.y + B, m.z + B), e.getTrianglesInAABB(w, _);
                            for (var j = M, N = t.radius * t.radius, L = 0; L < _.length; L++)
                                for (var W = 0; W < 3; W++)
                                    if (e.getVertex(e.indices[3 * _[L] + W], j), j.vsub(m, x), x.norm2() <= N) {
                                        if (b.copy(j), l.pointToWorldFrame(o, r, b, j), j.vsub(i, x), p) return !0;
                                        (G = this.createContactEquation(a, h, t, e, c, u)).ni.copy(x), G.ni.normalize(), G.ri.copy(G.ni), G.ri.scale(t.radius, G.ri), G.ri.vadd(i, G.ri), G.ri.vsub(a.position, G.ri), G.rj.copy(j), G.rj.vsub(h.position, G.rj), this.result.push(G), this.createFrictionEquationsFromContact(G, this.frictionResult)
                                    }
                            for (L = 0; L < _.length; L++)
                                for (W = 0; W < 3; W++) {
                                    e.getVertex(e.indices[3 * _[L] + W], d), e.getVertex(e.indices[3 * _[L] + (W + 1) % 3], y), y.vsub(d, f), m.vsub(y, g);
                                    var D = g.dot(f);
                                    m.vsub(d, g);
                                    var U = g.dot(f);
                                    if (U > 0 && D < 0)
                                        if (m.vsub(d, g), v.copy(f), v.normalize(), U = g.dot(v), v.scale(U, g), g.vadd(d, g), (Z = g.distanceTo(m)) < t.radius) {
                                            if (p) return !0;
                                            var G = this.createContactEquation(a, h, t, e, c, u);
                                            g.vsub(m, G.ni), G.ni.normalize(), G.ni.scale(t.radius, G.ri), l.pointToWorldFrame(o, r, g, g), g.vsub(h.position, G.rj), l.vectorToWorldFrame(r, G.ni, G.ni), l.vectorToWorldFrame(r, G.ri, G.ri), this.result.push(G), this.createFrictionEquationsFromContact(G, this.frictionResult)
                                        }
                                }
                            for (var H = q, Q = V, X = O, Y = S, K = (L = 0, _.length); L !== K; L++) {
                                e.getTriangleVertices(_[L], H, Q, X), e.getNormal(_[L], Y), m.vsub(H, g);
                                var Z = g.dot(Y);
                                if (Y.scale(Z, g), m.vsub(g, g), Z = g.distanceTo(m), s.pointInTriangle(g, H, Q, X) && Z < t.radius) {
                                    if (p) return !0;
                                    G = this.createContactEquation(a, h, t, e, c, u);
                                    g.vsub(m, G.ni), G.ni.normalize(), G.ni.scale(t.radius, G.ri), l.pointToWorldFrame(o, r, g, g), g.vsub(h.position, G.rj), l.vectorToWorldFrame(r, G.ni, G.ni), l.vectorToWorldFrame(r, G.ri, G.ri), this.result.push(G), this.createFrictionEquationsFromContact(G, this.frictionResult)
                                }
                            }
                            _.length = 0
                        };
                        var j = new a,
                            N = new a,
                            L = new a,
                            W = new a,
                            D = new a;
                        d.prototype[r.types.SPHERE | r.types.PLANE] = d.prototype.spherePlane = function(t, e, i, o, n, r, s, a, l, h, c) {
                            if (L.set(0, 0, 1), r.vmult(L, L), L.negate(L), L.normalize(), L.mult(t.radius, W), i.vsub(o, j), L.mult(L.dot(j), N), j.vsub(N, D), -j.dot(L) <= t.radius) {
                                if (c) return !0;
                                var u = this.createContactEquation(s, a, t, e, l, h);
                                u.ni.copy(L), u.ri.copy(W), u.rj.copy(D);
                                var p = u.ri,
                                    d = u.rj;
                                p.vadd(i, p), p.vsub(s.position, p), d.vadd(o, d), d.vsub(a.position, d), this.result.push(u), this.createFrictionEquationsFromContact(u, this.frictionResult)
                            }
                        };
                        var U = new a,
                            G = new a,
                            H = new a;

                        function Q(t, e, i) {
                            for (var o = null, n = t.length, r = 0; r !== n; r++) {
                                var s = t[r],
                                    a = U;
                                t[(r + 1) % n].vsub(s, a);
                                var l = G;
                                a.cross(e, l);
                                var h = H;
                                i.vsub(s, h);
                                var c = l.dot(h);
                                if (!(null === o || c > 0 && !0 === o || c <= 0 && !1 === o)) return !1;
                                null === o && (o = c > 0)
                            }
                            return !0
                        }
                        var X = new a,
                            Y = new a,
                            K = new a,
                            Z = new a,
                            J = [new a, new a, new a, new a, new a, new a],
                            $ = new a,
                            tt = new a,
                            et = new a,
                            it = new a;
                        d.prototype[r.types.SPHERE | r.types.BOX] = d.prototype.sphereBox = function(t, e, i, o, n, r, s, a, l, h, c) {
                            var u = this.v3pool,
                                p = J;
                            i.vsub(o, X), e.getSideNormals(p, r);
                            for (var d = t.radius, y = !1, f = tt, v = et, m = it, g = null, w = 0, b = 0, x = 0, _ = null, B = 0, S = p.length; B !== S && !1 === y; B++) {
                                var E = Y;
                                E.copy(p[B]);
                                var M = E.norm();
                                E.normalize();
                                var A = X.dot(E);
                                if (A < M + d && A > 0) {
                                    var C = K,
                                        z = Z;
                                    C.copy(p[(B + 1) % 3]), z.copy(p[(B + 2) % 3]);
                                    var R = C.norm(),
                                        P = z.norm();
                                    C.normalize(), z.normalize();
                                    var T = X.dot(C),
                                        F = X.dot(z);
                                    if (T < R && T > -R && F < P && F > -P) {
                                        var q = Math.abs(A - M - d);
                                        if ((null === _ || q < _) && (_ = q, b = T, x = F, g = M, f.copy(E), v.copy(C), m.copy(z), w++, c)) return !0
                                    }
                                }
                            }
                            if (w) {
                                y = !0;
                                var V = this.createContactEquation(s, a, t, e, l, h);
                                f.mult(-d, V.ri), V.ni.copy(f), V.ni.negate(V.ni), f.mult(g, f), v.mult(b, v), f.vadd(v, f), m.mult(x, m), f.vadd(m, V.rj), V.ri.vadd(i, V.ri), V.ri.vsub(s.position, V.ri), V.rj.vadd(o, V.rj), V.rj.vsub(a.position, V.rj), this.result.push(V), this.createFrictionEquationsFromContact(V, this.frictionResult)
                            }
                            for (var O = u.get(), I = $, k = 0; 2 !== k && !y; k++)
                                for (var j = 0; 2 !== j && !y; j++)
                                    for (var N = 0; 2 !== N && !y; N++)
                                        if (O.set(0, 0, 0), k ? O.vadd(p[0], O) : O.vsub(p[0], O), j ? O.vadd(p[1], O) : O.vsub(p[1], O), N ? O.vadd(p[2], O) : O.vsub(p[2], O), o.vadd(O, I), I.vsub(i, I), I.norm2() < d * d) {
                                            if (c) return !0;
                                            y = !0, (V = this.createContactEquation(s, a, t, e, l, h)).ri.copy(I), V.ri.normalize(), V.ni.copy(V.ri), V.ri.mult(d, V.ri), V.rj.copy(O), V.ri.vadd(i, V.ri), V.ri.vsub(s.position, V.ri), V.rj.vadd(o, V.rj), V.rj.vsub(a.position, V.rj), this.result.push(V), this.createFrictionEquationsFromContact(V, this.frictionResult)
                                        }
                            u.release(O), O = null;
                            var L = u.get(),
                                W = u.get(),
                                D = (V = u.get(), u.get()),
                                U = (q = u.get(), p.length);
                            for (k = 0; k !== U && !y; k++)
                                for (j = 0; j !== U && !y; j++)
                                    if (k % 3 != j % 3) {
                                        p[j].cross(p[k], L), L.normalize(), p[k].vadd(p[j], W), V.copy(i), V.vsub(W, V), V.vsub(o, V);
                                        var G = V.dot(L);
                                        L.mult(G, D);
                                        for (N = 0; N === k % 3 || N === j % 3;) N++;
                                        q.copy(i), q.vsub(D, q), q.vsub(W, q), q.vsub(o, q);
                                        var H = Math.abs(G),
                                            Q = q.norm();
                                        if (H < p[N].norm() && Q < d) {
                                            if (c) return !0;
                                            y = !0;
                                            var ot = this.createContactEquation(s, a, t, e, l, h);
                                            W.vadd(D, ot.rj), ot.rj.copy(ot.rj), q.negate(ot.ni), ot.ni.normalize(), ot.ri.copy(ot.rj), ot.ri.vadd(o, ot.ri), ot.ri.vsub(i, ot.ri), ot.ri.normalize(), ot.ri.mult(d, ot.ri), ot.ri.vadd(i, ot.ri), ot.ri.vsub(s.position, ot.ri), ot.rj.vadd(o, ot.rj), ot.rj.vsub(a.position, ot.rj), this.result.push(ot), this.createFrictionEquationsFromContact(ot, this.frictionResult)
                                        }
                                    }
                            u.release(L, W, V, D, q)
                        };
                        var ot = new a,
                            nt = new a,
                            rt = new a,
                            st = new a,
                            at = new a,
                            lt = new a,
                            ht = new a,
                            ct = new a,
                            ut = new a,
                            pt = new a;
                        d.prototype[r.types.SPHERE | r.types.CONVEXPOLYHEDRON] = d.prototype.sphereConvex = function(t, e, i, o, n, r, s, a, l, h, c) {
                            var u = this.v3pool;
                            i.vsub(o, ot);
                            for (var p = e.faceNormals, d = e.faces, y = e.vertices, f = t.radius, v = 0; v !== y.length; v++) {
                                var m = y[v],
                                    g = at;
                                r.vmult(m, g), o.vadd(g, g);
                                var w = st;
                                if (g.vsub(i, w), w.norm2() < f * f) return !!c || (b = !0, (q = this.createContactEquation(s, a, t, e, l, h)).ri.copy(w), q.ri.normalize(), q.ni.copy(q.ri), q.ri.mult(f, q.ri), g.vsub(o, q.rj), q.ri.vadd(i, q.ri), q.ri.vsub(s.position, q.ri), q.rj.vadd(o, q.rj), q.rj.vsub(a.position, q.rj), this.result.push(q), void this.createFrictionEquationsFromContact(q, this.frictionResult))
                            }
                            for (var b = !1, x = (v = 0, d.length); v !== x && !1 === b; v++) {
                                var _ = p[v],
                                    B = d[v],
                                    S = lt;
                                r.vmult(_, S);
                                var E = ht;
                                r.vmult(y[B[0]], E), E.vadd(o, E);
                                var M = ct;
                                S.mult(-f, M), i.vadd(M, M);
                                var A = ut;
                                M.vsub(E, A);
                                var C = A.dot(S),
                                    z = pt;
                                if (i.vsub(E, z), C < 0 && z.dot(S) > 0) {
                                    for (var R = [], P = 0, T = B.length; P !== T; P++) {
                                        var F = u.get();
                                        r.vmult(y[B[P]], F), o.vadd(F, F), R.push(F)
                                    }
                                    if (Q(R, S, i)) {
                                        if (c) return !0;
                                        b = !0;
                                        var q = this.createContactEquation(s, a, t, e, l, h);
                                        S.mult(-f, q.ri), S.negate(q.ni);
                                        var V = u.get();
                                        S.mult(-C, V);
                                        var O = u.get();
                                        S.mult(-f, O), i.vsub(o, q.rj), q.rj.vadd(O, q.rj), q.rj.vadd(V, q.rj), q.rj.vadd(o, q.rj), q.rj.vsub(a.position, q.rj), q.ri.vadd(i, q.ri), q.ri.vsub(s.position, q.ri), u.release(V), u.release(O), this.result.push(q), this.createFrictionEquationsFromContact(q, this.frictionResult);
                                        P = 0;
                                        for (var I = R.length; P !== I; P++) u.release(R[P]);
                                        return
                                    }
                                    for (P = 0; P !== B.length; P++) {
                                        var k = u.get(),
                                            j = u.get();
                                        r.vmult(y[B[(P + 1) % B.length]], k), r.vmult(y[B[(P + 2) % B.length]], j), o.vadd(k, k), o.vadd(j, j);
                                        var N = nt;
                                        j.vsub(k, N);
                                        var L = rt;
                                        N.unit(L);
                                        var W = u.get(),
                                            D = u.get();
                                        i.vsub(k, D);
                                        var U = D.dot(L);
                                        L.mult(U, W), W.vadd(k, W);
                                        var G = u.get();
                                        if (W.vsub(i, G), U > 0 && U * U < N.norm2() && G.norm2() < f * f) {
                                            if (c) return !0;
                                            q = this.createContactEquation(s, a, t, e, l, h);
                                            W.vsub(o, q.rj), W.vsub(i, q.ni), q.ni.normalize(), q.ni.mult(f, q.ri), q.rj.vadd(o, q.rj), q.rj.vsub(a.position, q.rj), q.ri.vadd(i, q.ri), q.ri.vsub(s.position, q.ri), this.result.push(q), this.createFrictionEquationsFromContact(q, this.frictionResult);
                                            for (P = 0, I = R.length; P !== I; P++) u.release(R[P]);
                                            return u.release(k), u.release(j), u.release(W), u.release(G), void u.release(D)
                                        }
                                        u.release(k), u.release(j), u.release(W), u.release(G), u.release(D)
                                    }
                                    for (P = 0, I = R.length; P !== I; P++) u.release(R[P])
                                }
                            }
                        };
                        new a, new a;
                        d.prototype[r.types.PLANE | r.types.BOX] = d.prototype.planeBox = function(t, e, i, o, n, r, s, a, l, h, c) {
                            return e.convexPolyhedronRepresentation.material = e.material, e.convexPolyhedronRepresentation.collisionResponse = e.collisionResponse, e.convexPolyhedronRepresentation.id = e.id, this.planeConvex(t, e.convexPolyhedronRepresentation, i, o, n, r, s, a, t, e, c)
                        };
                        var dt = new a,
                            yt = new a,
                            ft = new a,
                            vt = new a;
                        d.prototype[r.types.PLANE | r.types.CONVEXPOLYHEDRON] = d.prototype.planeConvex = function(t, e, i, o, n, r, s, a, l, h, c) {
                            var u = dt,
                                p = yt;
                            p.set(0, 0, 1), n.vmult(p, p);
                            for (var d = 0, y = ft, f = 0; f !== e.vertices.length; f++) {
                                if (u.copy(e.vertices[f]), r.vmult(u, u), o.vadd(u, u), u.vsub(i, y), p.dot(y) <= 0) {
                                    if (c) return !0;
                                    var v = this.createContactEquation(s, a, t, e, l, h),
                                        m = vt;
                                    p.mult(p.dot(y), m), u.vsub(m, m), m.vsub(i, v.ri), v.ni.copy(p), u.vsub(o, v.rj), v.ri.vadd(i, v.ri), v.ri.vsub(s.position, v.ri), v.rj.vadd(o, v.rj), v.rj.vsub(a.position, v.rj), this.result.push(v), d++, this.enableFrictionReduction || this.createFrictionEquationsFromContact(v, this.frictionResult)
                                }
                            }
                            this.enableFrictionReduction && d && this.createFrictionFromAverage(d)
                        };
                        var mt = new a,
                            gt = new a;
                        d.prototype[r.types.CONVEXPOLYHEDRON] = d.prototype.convexConvex = function(t, e, i, o, n, r, s, a, l, h, c, u, p) {
                            var d = mt;
                            if (!(i.distanceTo(o) > t.boundingSphereRadius + e.boundingSphereRadius) && t.findSeparatingAxis(e, i, n, o, r, d, u, p)) {
                                var y = [],
                                    f = gt;
                                t.clipAgainstHull(i, n, e, o, r, d, -100, 100, y);
                                for (var v = 0, m = 0; m !== y.length; m++) {
                                    if (c) return !0;
                                    var g = this.createContactEquation(s, a, t, e, l, h),
                                        w = g.ri,
                                        b = g.rj;
                                    d.negate(g.ni), y[m].normal.negate(f), f.mult(y[m].depth, f), y[m].point.vadd(f, w), b.copy(y[m].point), w.vsub(i, w), b.vsub(o, b), w.vadd(i, w), w.vsub(s.position, w), b.vadd(o, b), b.vsub(a.position, b), this.result.push(g), v++, this.enableFrictionReduction || this.createFrictionEquationsFromContact(g, this.frictionResult)
                                }
                                this.enableFrictionReduction && v && this.createFrictionFromAverage(v)
                            }
                        };
                        var wt = new a,
                            bt = new a,
                            xt = new a;
                        d.prototype[r.types.PLANE | r.types.PARTICLE] = d.prototype.planeParticle = function(t, e, i, o, n, r, s, a, l, h, c) {
                            var u = wt;
                            u.set(0, 0, 1), s.quaternion.vmult(u, u);
                            var p = bt;
                            if (o.vsub(s.position, p), u.dot(p) <= 0) {
                                if (c) return !0;
                                var d = this.createContactEquation(a, s, e, t, l, h);
                                d.ni.copy(u), d.ni.negate(d.ni), d.ri.set(0, 0, 0);
                                var y = xt;
                                u.mult(u.dot(o), y), o.vsub(y, y), d.rj.copy(y), this.result.push(d), this.createFrictionEquationsFromContact(d, this.frictionResult)
                            }
                        };
                        var _t = new a;
                        d.prototype[r.types.PARTICLE | r.types.SPHERE] = d.prototype.sphereParticle = function(t, e, i, o, n, r, s, a, l, h, c) {
                            var u = _t;
                            if (u.set(0, 0, 1), o.vsub(i, u), u.norm2() <= t.radius * t.radius) {
                                if (c) return !0;
                                var p = this.createContactEquation(a, s, e, t, l, h);
                                u.normalize(), p.rj.copy(u), p.rj.mult(t.radius, p.rj), p.ni.copy(u), p.ni.negate(p.ni), p.ri.set(0, 0, 0), this.result.push(p), this.createFrictionEquationsFromContact(p, this.frictionResult)
                            }
                        };
                        var Bt = new h,
                            St = new a,
                            Et = (new a, new a),
                            Mt = new a,
                            At = new a;
                        d.prototype[r.types.PARTICLE | r.types.CONVEXPOLYHEDRON] = d.prototype.convexParticle = function(t, e, i, o, n, r, s, a, l, h, c) {
                            var u = -1,
                                p = Et,
                                d = At,
                                y = null,
                                f = St;
                            if (f.copy(o), f.vsub(i, f), n.conjugate(Bt), Bt.vmult(f, f), t.pointIsInside(f)) {
                                t.worldVerticesNeedsUpdate && t.computeWorldVertices(i, n), t.worldFaceNormalsNeedsUpdate && t.computeWorldFaceNormals(n);
                                for (var v = 0, m = t.faces.length; v !== m; v++) {
                                    var g = [t.worldVertices[t.faces[v][0]]],
                                        w = t.worldFaceNormals[v];
                                    o.vsub(g[0], Mt);
                                    var b = -w.dot(Mt);
                                    if (null === y || Math.abs(b) < Math.abs(y)) {
                                        if (c) return !0;
                                        y = b, u = v, p.copy(w), 0
                                    }
                                }
                                if (-1 !== u) {
                                    var x = this.createContactEquation(a, s, e, t, l, h);
                                    p.mult(y, d), d.vadd(o, d), d.vsub(i, d), x.rj.copy(d), p.negate(x.ni), x.ri.set(0, 0, 0);
                                    var _ = x.ri,
                                        B = x.rj;
                                    _.vadd(o, _), _.vsub(a.position, _), B.vadd(i, B), B.vsub(s.position, B), this.result.push(x), this.createFrictionEquationsFromContact(x, this.frictionResult)
                                } else console.warn("Point found inside convex, but did not find penetrating face!")
                            }
                        }, d.prototype[r.types.BOX | r.types.HEIGHTFIELD] = d.prototype.boxHeightfield = function(t, e, i, o, n, r, s, a, l, h, c) {
                            return t.convexPolyhedronRepresentation.material = t.material, t.convexPolyhedronRepresentation.collisionResponse = t.collisionResponse, this.convexHeightfield(t.convexPolyhedronRepresentation, e, i, o, n, r, s, a, t, e, c)
                        };
                        var Ct = new a,
                            zt = new a,
                            Rt = [0];
                        d.prototype[r.types.CONVEXPOLYHEDRON | r.types.HEIGHTFIELD] = d.prototype.convexHeightfield = function(t, e, i, o, n, r, s, a, h, c, u) {
                            var p = e.data,
                                d = e.elementSize,
                                y = t.boundingSphereRadius,
                                f = zt,
                                v = Rt,
                                m = Ct;
                            l.pointToLocalFrame(o, r, i, m);
                            var g = Math.floor((m.x - y) / d) - 1,
                                w = Math.ceil((m.x + y) / d) + 1,
                                b = Math.floor((m.y - y) / d) - 1,
                                x = Math.ceil((m.y + y) / d) + 1;
                            if (!(w < 0 || x < 0 || g > p.length || b > p[0].length)) {
                                g < 0 && (g = 0), w < 0 && (w = 0), b < 0 && (b = 0), x < 0 && (x = 0), g >= p.length && (g = p.length - 1), w >= p.length && (w = p.length - 1), x >= p[0].length && (x = p[0].length - 1), b >= p[0].length && (b = p[0].length - 1);
                                var _ = [];
                                e.getRectMinMax(g, b, w, x, _);
                                var B = _[0],
                                    S = _[1];
                                if (!(m.z - y > S || m.z + y < B))
                                    for (var E = g; E < w; E++)
                                        for (var M = b; M < x; M++) {
                                            var A = !1;
                                            if (e.getConvexTrianglePillar(E, M, !1), l.pointToWorldFrame(o, r, e.pillarOffset, f), i.distanceTo(f) < e.pillarConvex.boundingSphereRadius + t.boundingSphereRadius && (A = this.convexConvex(t, e.pillarConvex, i, f, n, r, s, a, null, null, u, v, null)), u && A) return !0;
                                            if (e.getConvexTrianglePillar(E, M, !0), l.pointToWorldFrame(o, r, e.pillarOffset, f), i.distanceTo(f) < e.pillarConvex.boundingSphereRadius + t.boundingSphereRadius && (A = this.convexConvex(t, e.pillarConvex, i, f, n, r, s, a, null, null, u, v, null)), u && A) return !0
                                        }
                            }
                        };
                        var Pt = new a,
                            Tt = new a;
                        d.prototype[r.types.SPHERE | r.types.HEIGHTFIELD] = d.prototype.sphereHeightfield = function(t, e, i, o, n, r, s, a, h, c, u) {
                            var p = e.data,
                                d = t.radius,
                                y = e.elementSize,
                                f = Tt,
                                v = Pt;
                            l.pointToLocalFrame(o, r, i, v);
                            var m = Math.floor((v.x - d) / y) - 1,
                                g = Math.ceil((v.x + d) / y) + 1,
                                w = Math.floor((v.y - d) / y) - 1,
                                b = Math.ceil((v.y + d) / y) + 1;
                            if (!(g < 0 || b < 0 || m > p.length || w > p[0].length)) {
                                m < 0 && (m = 0), g < 0 && (g = 0), w < 0 && (w = 0), b < 0 && (b = 0), m >= p.length && (m = p.length - 1), g >= p.length && (g = p.length - 1), b >= p[0].length && (b = p[0].length - 1), w >= p[0].length && (w = p[0].length - 1);
                                var x = [];
                                e.getRectMinMax(m, w, g, b, x);
                                var _ = x[0],
                                    B = x[1];
                                if (!(v.z - d > B || v.z + d < _))
                                    for (var S = this.result, E = m; E < g; E++)
                                        for (var M = w; M < b; M++) {
                                            var A = S.length,
                                                C = !1;
                                            if (e.getConvexTrianglePillar(E, M, !1), l.pointToWorldFrame(o, r, e.pillarOffset, f), i.distanceTo(f) < e.pillarConvex.boundingSphereRadius + t.boundingSphereRadius && (C = this.sphereConvex(t, e.pillarConvex, i, f, n, r, s, a, t, e, u)), u && C) return !0;
                                            if (e.getConvexTrianglePillar(E, M, !0), l.pointToWorldFrame(o, r, e.pillarOffset, f), i.distanceTo(f) < e.pillarConvex.boundingSphereRadius + t.boundingSphereRadius && (C = this.sphereConvex(t, e.pillarConvex, i, f, n, r, s, a, t, e, u)), u && C) return !0;
                                            if (S.length - A > 2) return
                                        }
                            }
                        }
                    }, {
                        "../collision/AABB": 3,
                        "../collision/Ray": 10,
                        "../equations/ContactEquation": 20,
                        "../equations/FrictionEquation": 22,
                        "../math/Quaternion": 29,
                        "../math/Transform": 30,
                        "../math/Vec3": 31,
                        "../objects/Body": 32,
                        "../shapes/ConvexPolyhedron": 39,
                        "../shapes/Shape": 44,
                        "../solver/Solver": 48,
                        "../utils/Vec3Pool": 55
                    }],
                    57: [function(t, e, i) {
                        (function(i) {
                            e.exports = v;
                            t("../shapes/Shape");
                            var o = t("../math/Vec3"),
                                n = (t("../math/Quaternion"), t("../solver/GSSolver")),
                                r = (t("../equations/ContactEquation"), t("../equations/FrictionEquation"), t("./Narrowphase")),
                                s = t("../utils/EventTarget"),
                                a = (t("../collision/ArrayCollisionMatrix"), t("../collision/ObjectCollisionMatrix")),
                                l = t("../collision/OverlapKeeper"),
                                h = t("../material/Material"),
                                c = t("../material/ContactMaterial"),
                                u = t("../objects/Body"),
                                p = t("../utils/TupleDictionary"),
                                d = t("../collision/RaycastResult"),
                                y = (t("../collision/AABB"), t("../collision/Ray")),
                                f = t("../collision/NaiveBroadphase");

                            function v(t) {
                                t = t || {}, s.apply(this), this.dt = -1, this.allowSleep = !!t.allowSleep, this.contacts = [], this.frictionEquations = [], this.contactsDic = new p, this.oldContactsDic = new p, this.quatNormalizeSkip = void 0 !== t.quatNormalizeSkip ? t.quatNormalizeSkip : 0, this.quatNormalizeFast = void 0 !== t.quatNormalizeFast && t.quatNormalizeFast, this.time = 0, this.stepnumber = 0, this.substeps = 0, this.default_dt = 1 / 60, this.nextId = 0, this.gravity = new o, t.gravity && this.gravity.copy(t.gravity), this.broadphase = void 0 !== t.broadphase ? t.broadphase : new f, this.bodies = [], this.solver = void 0 !== t.solver ? t.solver : new n, this.constraints = [], this.narrowphase = new r(this), this.collisionMatrix = new a, this.triggerMatrix = new a, this.shapeOverlapKeeper = new l, this.shapeOverlapKeeperExit = new l, this.materials = [], this.contactmaterials = [], this.contactMaterialTable = new p, this.defaultMaterial = new h("default"), this.defaultContactMaterial = new c(this.defaultMaterial, this.defaultMaterial, {
                                    friction: .3,
                                    restitution: 0
                                }), this.profile = {
                                    solve: 0,
                                    makeContactConstraints: 0,
                                    broadphase: 0,
                                    integrate: 0,
                                    narrowphase: 0
                                }, this.accumulator = 0, this.subsystems = [], this.addBodyEvent = {
                                    type: "addBody",
                                    body: null
                                }, this.removeBodyEvent = {
                                    type: "removeBody",
                                    body: null
                                }, this.broadphase.setWorld(this)
                            }
                            i ? (i.doProfiling = !1, i.DEBUG = !0) : window && (window.doProfiling = !1, window.DEBUG = !0), v.idToBodyMap = {}, v.idToShapeMap = {}, v.prototype = new s;
                            var m = new y;
                            if (v.prototype.getContactMaterial = function(t, e) {
                                    return this.contactMaterialTable.get(t.id, e.id)
                                }, v.prototype.numObjects = function() {
                                    return this.bodies.length
                                }, v.prototype.collisionMatrixTick = function() {}, v.prototype.add = v.prototype.addBody = function(t) {
                                    -1 === this.bodies.indexOf(t) && (t.index = this.bodies.length, this.bodies.push(t), t.world = this, t.initPosition.copy(t.position), t.initVelocity.copy(t.velocity), t.timeLastSleepy = this.time, t instanceof u && (t.initAngularVelocity.copy(t.angularVelocity), t.initQuaternion.copy(t.quaternion)), this.collisionMatrix.setNumObjects(this.bodies.length), this.addBodyEvent.body = t, v.idToBodyMap[t.id] = t, this.dispatchEvent(this.addBodyEvent))
                                }, v.prototype.addConstraint = function(t) {
                                    this.constraints.push(t)
                                }, v.prototype.removeConstraint = function(t) {
                                    var e = this.constraints.indexOf(t); - 1 !== e && this.constraints.splice(e, 1)
                                }, v.prototype.rayTest = function(t, e, i) {
                                    i instanceof d ? this.raycastClosest(t, e, {
                                        skipBackfaces: !0
                                    }, i) : this.raycastAll(t, e, {
                                        skipBackfaces: !0
                                    }, i)
                                }, v.prototype.raycastAll = function(t, e, i, o) {
                                    return i.mode = y.ALL, i.from = t, i.to = e, i.callback = o, m.intersectWorld(this, i)
                                }, v.prototype.raycastAny = function(t, e, i, o) {
                                    return i.mode = y.ANY, i.from = t, i.to = e, i.result = o, m.intersectWorld(this, i)
                                }, v.prototype.raycastClosest = function(t, e, i, o) {
                                    return i.mode = y.CLOSEST, i.from = t, i.to = e, i.result = o, m.intersectWorld(this, i)
                                }, v.prototype.remove = function(t) {
                                    t.world = null;
                                    var e = this.bodies.length - 1,
                                        i = this.bodies,
                                        o = i.indexOf(t);
                                    if (-1 !== o) {
                                        i.splice(o, 1);
                                        for (var n = 0; n !== i.length; n++) i[n].index = n;
                                        this.collisionMatrix.setNumObjects(e), this.removeBodyEvent.body = t, delete v.idToBodyMap[t.id], this.dispatchEvent(this.removeBodyEvent)
                                    }
                                }, v.prototype.removeBody = v.prototype.remove, v.prototype.getBodyById = function(t) {
                                    return v.idToBodyMap[t]
                                }, v.prototype.getShapeById = function(t) {
                                    return v.idToShapeMap[t]
                                }, v.prototype.addMaterial = function(t) {
                                    this.materials.push(t)
                                }, v.prototype.addContactMaterial = function(t) {
                                    this.contactmaterials.push(t), this.contactMaterialTable.set(t.materials[0].id, t.materials[1].id, t)
                                }, DEBUG && ("undefined" == typeof performance && (performance = {}), !performance.now)) {
                                var g = Date.now();
                                performance.timing && performance.timing.navigationStart && (g = performance.timing.navigationStart), performance.now = function() {
                                    return Date.now() - g
                                }
                            }
                            v.prototype.step = function(t, e, i) {
                                if (i = i || 10, e = e || 0, 0 != this.substeps && (b = this.contacts.slice()), 0 === e) this.internalStep(t), this.time += t, this.substeps = 1;
                                else {
                                    for (this.accumulator += e, this.substeps = 0; this.accumulator >= t && this.substeps < i;) this.internalStep(t), this.accumulator -= t, this.substeps++;
                                    for (var o = this.accumulator % t / t, n = 0; n !== this.bodies.length; n++) {
                                        var r = this.bodies[n];
                                        r.previousPosition.lerp(r.position, o, r.interpolatedPosition), r.previousQuaternion.slerp(r.quaternion, o, r.interpolatedQuaternion), r.previousQuaternion.normalize()
                                    }
                                    this.time += e
                                }
                            };
                            var w = {
                                    type: "collide",
                                    event: "",
                                    body: null,
                                    selfShape: null,
                                    otherShape: null,
                                    contacts: null
                                },
                                b = [],
                                x = [],
                                _ = [],
                                B = [];
                            v.prototype.internalStep = function(t) {
                                this.dt = t;
                                var e, i = this.contacts,
                                    o = _,
                                    n = B,
                                    r = this.numObjects(),
                                    s = this.bodies,
                                    a = this.solver,
                                    l = this.gravity,
                                    h = this.profile,
                                    c = u.DYNAMIC,
                                    p = this.constraints,
                                    d = x,
                                    y = l.x,
                                    f = l.y,
                                    v = l.z,
                                    m = 0;
                                for (doProfiling && (e = performance.now()), m = 0; m !== r; m++) {
                                    if ((T = s[m]).useGravity && T.type === c) {
                                        var g = T.force,
                                            w = T.mass;
                                        g.x += w * y, g.y += w * f, g.z += w * v
                                    }
                                }
                                m = 0;
                                for (var b = this.subsystems.length; m !== b; m++) this.subsystems[m].update();
                                doProfiling && (e = performance.now()), o.length = 0, n.length = 0, this.broadphase.collisionPairs(this, o, n), doProfiling && (h.broadphase = performance.now() - e);
                                var S = p.length;
                                for (m = 0; m !== S; m++) {
                                    if (!(C = p[m]).collideConnected)
                                        for (var E = o.length - 1; E >= 0; E -= 1)(C.bodyA === o[E] && C.bodyB === n[E] || C.bodyB === o[E] && C.bodyA === n[E]) && (o.splice(E, 1), n.splice(E, 1))
                                }
                                doProfiling && (e = performance.now()), i.length = 0;
                                var M = this.frictionEquations.length;
                                for (m = 0; m !== M; m++) d.push(this.frictionEquations[m]);
                                for (this.frictionEquations.length = 0, this.narrowphase.getContacts(o, n, this, i, null, this.frictionEquations, d), doProfiling && (h.narrowphase = performance.now() - e), doProfiling && (e = performance.now()), m = 0; m < this.frictionEquations.length; m++) a.addEquation(this.frictionEquations[m]);
                                var A = i.length;
                                for (m = 0; m !== A; m++) a.addEquation(i[m]);
                                doProfiling && (h.makeContactConstraints = performance.now() - e, e = performance.now());
                                S = p.length;
                                for (m = 0; m !== S; m++) {
                                    var C;
                                    (C = p[m]).update();
                                    E = 0;
                                    for (var z = C.equations.length; E !== z; E++) {
                                        var R = C.equations[E];
                                        a.addEquation(R)
                                    }
                                }
                                a.solve(t, this), doProfiling && (h.solve = performance.now() - e), a.removeAllEquations();
                                var P = Math.pow;
                                for (r = this.numObjects(), m = 0; m !== r; m++) {
                                    var T;
                                    if ((T = s[m]).type & c) {
                                        var F = P(1 - T.linearDamping, t),
                                            q = T.velocity;
                                        q.mult(F, q);
                                        var V = T.angularVelocity;
                                        if (V) {
                                            var O = P(1 - T.angularDamping, t);
                                            V.mult(O, V)
                                        }
                                    }
                                }
                                doProfiling && (e = performance.now());
                                var I = this.stepnumber % (this.quatNormalizeSkip + 1) == 0,
                                    k = this.quatNormalizeFast;
                                for (m = 0; m !== r; m++) s[m].integrate(t, I, k);
                                if (this.clearForces(), this.broadphase.dirty = !0, doProfiling && (h.integrate = performance.now() - e), this.time += t, this.stepnumber += 1, this.allowSleep)
                                    for (m = 0; m !== r; m++) s[m].sleepTick(this.time)
                            };
                            var S = [],
                                E = [],
                                M = {
                                    type: "triggered",
                                    event: "",
                                    selfBody: null,
                                    otherBody: null,
                                    selfShape: null,
                                    otherShape: null
                                };
                            v.prototype.emitTriggeredEvents = function() {
                                if (0 != this.substeps) {
                                    S.length = E.length = 0, this.shapeOverlapKeeperExit.getDiff(S, E);
                                    for (var t = 0, e = E.length; t < e; t += 2) {
                                        M.event = "trigger-exit";
                                        var i = this.getShapeById(E[t]),
                                            o = this.getShapeById(E[t + 1]);
                                        this.triggerMatrix.set(i, o, !1), M.selfShape = i, M.otherShape = o, M.selfBody = i.body, M.otherBody = o.body, i.dispatchEvent(M), M.selfShape = o, M.otherShape = i, M.selfBody = o.body, M.otherBody = i.body, o.dispatchEvent(M)
                                    }
                                    S.length = E.length = 0, this.shapeOverlapKeeper.getDiff(S, E);
                                    for (t = 0, e = S.length; t < e; t += 2) {
                                        var n = S[t],
                                            r = S[t + 1];
                                        i = this.getShapeById(n), o = this.getShapeById(r);
                                        i && o && (this.triggerMatrix.get(i, o) ? M.event = "trigger-stay" : (this.triggerMatrix.set(i, o, !0), M.event = "trigger-enter"), M.selfShape = i, M.otherShape = o, M.selfBody = i.body, M.otherBody = o.body, i.dispatchEvent(M), M.selfShape = o, M.otherShape = i, M.selfBody = o.body, M.otherBody = i.body, o.dispatchEvent(M))
                                    }
                                    this.shapeOverlapKeeper.reset(), this.shapeOverlapKeeperExit.tick()
                                }
                            }, v.prototype.emitCollisionEvents = function() {
                                if (0 != this.substeps) {
                                    for (var t, e, i = this.contacts, o = this.contacts.length; o--;) {
                                        var n = (c = i[o]).si,
                                            r = c.sj,
                                            s = this.contactsDic.get(n.id, r.id);
                                        null == s && (s = this.contactsDic.set(n.id, r.id, [])), s.push(c)
                                    }
                                    for (o = this.contactsDic.getLength(); o--;)
                                        if (t = this.contactsDic.getKeyByIndex(o), null != (e = this.contactsDic.getDataByKey(t))) {
                                            var a = e[0].bi,
                                                l = e[0].bj;
                                            n = e[0].si, r = e[0].sj;
                                            if (a.allowSleep && a.type === u.DYNAMIC && a.sleepState === u.SLEEPING && l.sleepState === u.AWAKE && l.type !== u.STATIC) l.velocity.norm2() + l.angularVelocity.norm2() >= 2 * Math.pow(l.sleepSpeedLimit, 2) && a.wakeUp();
                                            if (l.allowSleep && l.type === u.DYNAMIC && l.sleepState === u.SLEEPING && a.sleepState === u.AWAKE && a.type !== u.STATIC) a.velocity.norm2() + a.angularVelocity.norm2() >= 2 * Math.pow(a.sleepSpeedLimit, 2) && l.wakeUp();
                                            this.collisionMatrix.get(a, l) ? w.event = "collision-stay" : (this.collisionMatrix.set(a, l, !0), w.event = "collision-enter"), DEBUG && (w.bi = a, w.contact = e[0]), w.contacts = e, w.body = r.body, w.selfShape = n, w.otherShape = r, n.body.dispatchEvent(w), w.body = n.body, w.selfShape = r, w.otherShape = n, r.body.dispatchEvent(w)
                                        }
                                    var h = b;
                                    for (o = h.length; o--;) {
                                        var c;
                                        n = (c = h[o]).si, r = c.sj;
                                        null == this.oldContactsDic.get(n.id, r.id) && this.oldContactsDic.set(n.id, r.id, c)
                                    }
                                    for (o = this.oldContactsDic.getLength(); o--;)
                                        if (t = this.oldContactsDic.getKeyByIndex(o), null == this.contactsDic.getDataByKey(t)) {
                                            a = (e = this.oldContactsDic.getDataByKey(t)).bi, l = e.bj, n = e.si, r = e.sj;
                                            this.collisionMatrix.get(a, l) && (a.isSleeping() && l.isSleeping() || (this.collisionMatrix.set(a, l, !1), DEBUG && (w.bi = a, w.contact = e), w.event = "collision-exit", w.body = r.body, w.selfShape = n, w.otherShape = r, w.contacts.length = 0, w.contacts.push(e), n.body.dispatchEvent(w), w.body = n.body, w.selfShape = r, w.otherShape = n, r.body.dispatchEvent(w)))
                                        }
                                    this.contactsDic.reset(), this.oldContactsDic.reset()
                                }
                            }, v.prototype.clearForces = function() {
                                for (var t = this.bodies, e = t.length, i = 0; i !== e; i++) {
                                    var o = t[i];
                                    o.force.set(0, 0, 0), o.torque.set(0, 0, 0)
                                }
                            }
                        }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {
                        "../collision/AABB": 3,
                        "../collision/ArrayCollisionMatrix": 4,
                        "../collision/NaiveBroadphase": 7,
                        "../collision/ObjectCollisionMatrix": 8,
                        "../collision/OverlapKeeper": 9,
                        "../collision/Ray": 10,
                        "../collision/RaycastResult": 11,
                        "../equations/ContactEquation": 20,
                        "../equations/FrictionEquation": 22,
                        "../material/ContactMaterial": 25,
                        "../material/Material": 26,
                        "../math/Quaternion": 29,
                        "../math/Vec3": 31,
                        "../objects/Body": 32,
                        "../shapes/Shape": 44,
                        "../solver/GSSolver": 47,
                        "../utils/EventTarget": 50,
                        "../utils/TupleDictionary": 53,
                        "./Narrowphase": 56
                    }]
                }, {}, [2])(2)
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}]
}, {}, [9, 10]);