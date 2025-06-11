tywx.Timer = {
    setTimer: function(e, c, r, i, T) {
        e && e._TAG && tywx.LOGD("tywx.Timer", "----------in setTimer----------" + (e._TAG ? e._TAG : ""));
        var t = cc.director.getScheduler();
        null != i || cc.macro.REPEAT_FOREVER;
        t.schedule(c, e, r, i, T, !1);
    },
    cancelTimer: function(e, c) {
        e && e._TAG && tywx.LOGD("tywx.Timer", "----------in cancelTimer ---------" + (e._TAG ? e._TAG : ""));
        cc.director.getScheduler().unschedule(c, e);
    },
    isScheduledTimer: function(e, c) {
        e && e._TAG && tywx.LOGD("tywx.Timer", "----------in isScheduledTimer ---------" + (e._TAG ? e._TAG : ""));
        return cc.director.getScheduler().isScheduled(c, e);
    }
};