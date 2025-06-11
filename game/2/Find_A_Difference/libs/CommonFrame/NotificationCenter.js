console.log("NotificationCenter loaded"), tywx.NotificationCenter = {
    events: {},
    listen: function(e, t, n) {
        this.events[e] = this.events[e] || [], this.events[e].push({
            scope: n || this,
            handler: t
        });
    },
    ignore: function(e, t, n) {
        n = n || this;
        var i = this.events[e];
        i && (this.events[e] = i.filter(function(e) {
            return e.scope != n || e.handler != t;
        }));
    },
    ignoreScope: function(e) {
        for (var t in this.events) {
            var n = this.events[t];
            n && (this.events[t] = n.filter(function(n) {
                return n.scope != e || (tywx.LOGD("tywx.NotificationCenter", "ty.NotificationCenter : remove listener by Scope: " + t), 
                !1);
            }));
        }
    },
    trigger: function(e, t) {
        tywx.LOGD("EventTrigger", e);
        var n = this.events[e];
        if (n) for (var i, o = 0; o < n.length; o++) (i = n[o]).handler.call(i.scope, t);
    }
};