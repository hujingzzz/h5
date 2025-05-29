console.log("v1.0.0");

const isDebug = false;
const timeoutInterstitialAd = 50;
const timeoutRewardedAd = 50;
const useMockObject = false;

window["GD_OPTIONS"] = {
    "gameId": "2fa176414cb44886ab3fe12a5a0546c2",
    "onEvent": function(event) {
        switch (event.name) {
            case "SDK_READY":
                
                onSDKReady();
                console.error("SDK_READY")
                break;
            case "SDK_GAME_START":
                // advertisement done, resume game logic and unmute audio
                isDebug && console.log("[SDK] GAME_START");
                _resumeGame();
                break;
            case "SDK_GAME_PAUSE":
                // pause game logic / mute audio
                isDebug && console.log("[SDK] GAME_PAUSE");
                _pauseGame();
                break;
            case "SDK_GDPR_TRACKING":
                // this event is triggered when your user doesn't want to be tracked
                break;
            case "SDK_GDPR_TARGETING":
                // this event is triggered when your user doesn't want personalised targeting of ads and such
                break;
            case "AD_ERROR":
                isDebug && console.log("[AD] ERROR");
                showAd_onAdError();
                break;
            case "AD_IS_ALREADY_RUNNING":
                isDebug && console.log("[AD] IS_ALREADY_RUNNING");
                showAd_onAdError();
                break;
        }
    }
};

const _pauseGame = function(isInternal) {
    window.ggmgr.xsi();
    isDebug && console.log("[CALL] pauseGame");
    window.famobi.game.pause();
    console.error("xsi")
};

const _resumeGame = function(isInternal) {
    isDebug && console.log("[CALL] resumeGame");
    window.famobi.game.resume();
};

let showAd_onAdError = function() {};

const gdsdk_showAd = function(callback) {

    window.ggmgr.xsi();

    console.error("xsi")
}

if(useMockObject) {
    window.gdsdk = {
        showAd: function() {

            _pauseGame();

            return new Promise(function(resolve, reject) {
                alert("This is an ad");
                _resumeGame();
                return resolve();
            });
        }
    }
    onSDKReady();
} else {
    (function(d, s, id) {
        // var js, fjs = d.getElementsByTagName(s)[0];
        // if (d.getElementById(id)) return;
        // js = d.createElement(s);
        // js.id = id;
        // js.src = 'https://html5.api.gamedistribution.com/main.min.js';
        // fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'gamedistribution-jssdk'));
}