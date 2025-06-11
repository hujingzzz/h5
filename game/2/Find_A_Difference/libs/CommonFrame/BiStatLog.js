tywx.BiStatLog = {
    BiStatInfo: null,
    init: function() {
        this.BiStatInfo = {}, this.getStaticInfo(), this.getTyInfo(), this.getLocationInfo(), 
        this.getSystemInfo();
    },
    getStaticInfo: function() {
        this.BiStatInfo.IP = "#IP", this.BiStatInfo.receiveTime = "#receiveTime";
    },
    getTyInfo: function() {
        this.BiStatInfo.cloudId = tywx.SystemInfo.cloudId, this.BiStatInfo.gameId = tywx.SystemInfo.gameId, 
        this.BiStatInfo.appId = tywx.SystemInfo.appId, this.BiStatInfo.clientId = tywx.SystemInfo.clientId, 
        this.BiStatInfo.intClientId = tywx.SystemInfo.intClientId, this.BiStatInfo.userId = tywx.UserInfo.userId, 
        this.BiStatInfo.uuid = tywx.Util.getLocalUUID(), this.BiStatInfo.gameVersion = tywx.SystemInfo.version, 
        this.BiStatInfo.wxAppId = tywx.SystemInfo.wxAppId;
    },
    getUserId: function() {
        this.BiStatInfo.userId = tywx.UserInfo.userId;
    },
    getNetworkType: function() {
        this.BiStatInfo.networkType = tywx.StateInfo.networkType;
    },
    getLocationInfo: function(t) {
        var i = this;
        wx.getLocation({
            type: "wgs84",
            success: function(t) {
                i.BiStatInfo.latitude = t.latitude, i.BiStatInfo.longitude = t.longitude, i.BiStatInfo.speed = t.speed, 
                i.BiStatInfo.accuracy = t.accuracy;
            },
            complete: function() {
                t();
            }
        });
    },
    getSystemInfo: function() {
        var t = this;
        wx.getSystemInfo({
            success: function(i) {
                t.BiStatInfo.brand = i.brand, t.BiStatInfo.model = i.model, t.BiStatInfo.pixelRatio = i.pixelRatio, 
                t.BiStatInfo.screenWidth = i.screenWidth, t.BiStatInfo.screenHeight = i.screenHeight, 
                t.BiStatInfo.windowWidth = i.windowWidth, t.BiStatInfo.windowHeight = i.windowHeight, 
                t.BiStatInfo.language = i.language, t.BiStatInfo.wxVersion = i.version, t.BiStatInfo.systemVersion = i.system, 
                t.BiStatInfo.platform = i.platform, t.BiStatInfo.wxSDKVersion = i.SDKVersion, t.BiStatInfo.fontSizeSetting = i.fontSizeSetting;
            }
        });
    },
    sendEvent: function(t, i) {
        "object" != typeof i && (i = {}), this.getNetworkType(), this.getUserId(), this.BiStatInfo.eventId = t, 
        this.BiStatInfo.eventParams = i, this.BiStatInfo.eventTime = Date.now().valueOf();
        this.getLocationInfo(function() {
            var t = JSON.stringify(tywx.BiStatLog.BiStatInfo), i = {
                url: tywx.SystemInfo.biLogServer,
                headers: [ "Content-Type:text/plain" ],
                postData: t
            };
            tywx.HttpUtil.httpPost(i);
        });
    }
};