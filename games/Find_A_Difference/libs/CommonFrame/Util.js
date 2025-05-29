tywx.Util = {
    isSceneQrCode: function(t) {
        return [ 1047, 1048, 1049 ].indexOf(t) > -1;
    },
    createUUID: function() {
        for (var t = [], e = 0; e < 36; e++) t[e] = "0123456789abcdef".substr(Math.floor(16 * Math.random()), 1);
        t[14] = "4", t[19] = "0123456789abcdef".substr(3 & t[19] | 8, 1), t[8] = t[13] = t[18] = t[23] = "";
        return t.join("");
    },
    checkLocalUUID: function() {
        return "" != tywx.Util.getItemFromLocalStorage("LOCAL_UUID_KEY", "");
    },
    getLocalUUID: function() {
        var t = tywx.Util.getItemFromLocalStorage("LOCAL_UUID_KEY", "");
        return t || (t = tywx.Util.createUUID(), tywx.Util.setItemToLocalStorage("LOCAL_UUID_KEY", t)), 
        t;
    },
    getItemFromLocalStorage: function(t, e) {
        try {
            if (wx && wx.getStorageSync) {
                var r = wx.getStorageSync(t);
                if (r) return r;
            } else {
                var o = cc.sys.localStorage.getItem(t);
                if (o) return o;
            }
            return e;
        } catch (t) {
            return e;
        }
    },
    setItemToLocalStorage: function(t, e) {
        try {
            wx && wx.getStorageSync ? wx.setStorage({
                key: t,
                data: e + ""
            }) : cc.sys.localStorage.setItem(t, e + "");
        } catch (t) {
            tywx.LOGE("tywx.Util", "setItemToLocalStorage fail");
        }
    },
    isNullOrEmpty: function(t) {
        return null == t || void 0 == t;
    }
};