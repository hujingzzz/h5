(function () {

    'use strict';

    function boot () {

        var RESOURCES = cc.AssetManager.BuiltinBundleName.RESOURCES;
        var INTERNAL = cc.AssetManager.BuiltinBundleName.INTERNAL;
        var MAIN = cc.AssetManager.BuiltinBundleName.MAIN;

        var settings = window._CCSettings;
        window._CCSettings = undefined;

        // init engine
        var canvas;

        if (cc.sys.isBrowser) {
            canvas = document.getElementById('GameCanvas');
        }

        var onStart = function () {
            cc.view.resizeWithBrowserSize(true);
            cc.view.enableRetina(true);

            if (cc.sys.isMobile) {
                if (settings.orientation === 'landscape') {
                    cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
                }
                else if (settings.orientation === 'portrait') {
                    cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
                }
                // qq, wechat, baidu
                cc.view.enableAutoFullScreen(
                    cc.sys.browserType !== cc.sys.BROWSER_TYPE_BAIDU &&
                    cc.sys.browserType !== cc.sys.BROWSER_TYPE_WECHAT &&
                    cc.sys.browserType !== cc.sys.BROWSER_TYPE_MOBILE_QQ
                );
            }

            // Limit downloading max concurrent task to 2,
            // more tasks simultaneously may cause performance draw back on some android system / brwosers.
            // You can adjust the number based on your own test result, you have to set it before any loading process to take effect.
            if (cc.sys.isBrowser && cc.sys.os === cc.sys.OS_ANDROID) {
                cc.assetManager.downloader.maxConcurrency = 2;
            }

            var launchScene = settings.launchScene;

            var bundle = cc.assetManager.bundles.find(function (b) {
                return b.getSceneInfo(launchScene);
            });

            var splash = document.getElementById('splash');
            var progressBar = splash.querySelector('.progress-bar span');

            bundle.loadScene(launchScene, 
                cc.sys.isBrowser ? function (completedCount, totalCount) {
                    var progress = 100 * completedCount / totalCount;
                    // Loading splash scene
                    if (progressBar) {
                        progressBar.style.width = progress + '%';
                    }
                    splash.style.display = 'block';

                    cc.director.once(cc.Director.EVENT_AFTER_SCENE_LAUNCH, function() {
                        splash.style.display = 'none';
                    });
                } : null,
                function (err, scene) {
                    console.log('Success to load scene: ' + launchScene);
                    cc.director.runSceneImmediate(scene);
                }
            );
            
        };

        var option = {
            //width: width,
            //height: height,
            id: 'GameCanvas',
            debugMode: settings.debug ? cc.debug.DebugMode.INFO : cc.debug.DebugMode.ERROR,
            showFPS: settings.debug,
            frameRate: 60,
            groupList: settings.groupList,
            collisionMatrix: settings.collisionMatrix,
        };
        
        cc.assetManager.init({ bundleVers: settings.bundleVers });
        var bundleRoot = [INTERNAL];
        settings.hasResourcesBundle && bundleRoot.push(RESOURCES);

        var count = 0;
        function cb (err) {
            if (err) return console.error(err.message, err.stack);
            count++;
            if (count === bundleRoot.length + 1) {
                cc.assetManager.loadBundle(MAIN, function (err) {
                    if (!err) cc.game.run(option, onStart);
                });
            }
        }

        // load plugins
        cc.assetManager.loadScript(settings.jsList.map(function (x) { return 'src/' + x; }), cb);

        // load bundles
        for (var i = 0; i < bundleRoot.length; i++) {
            cc.assetManager.loadBundle(bundleRoot[i], cb);
        }
    }

    if (window.document) {
        var debug = window._CCSettings.debug;
        function loadScript (moduleName, cb) {
            function scriptLoaded () {
                document.body.removeChild(domScript);
                domScript.removeEventListener('load', scriptLoaded, false);
                cb && cb();
            };
            var domScript = document.createElement('script');
            domScript.async = true;
            domScript.src = moduleName;
            domScript.addEventListener('load', scriptLoaded, false);
            document.body.appendChild(domScript);
        }

        loadScript(debug ? 'cocos2d-js.js' : 'cocos2d-js-min.js', function () {
            if (CC_PHYSICS_BUILTIN || CC_PHYSICS_CANNON) {
                loadScript(debug ? 'physics.js' : 'physics-min.js', function () {
                    if (typeof VConsole !== 'undefined') {
                        window.vConsole = new VConsole();
                    }
                    boot();
                });
            }
            else {
                if (typeof VConsole !== 'undefined') {
                    window.vConsole = new VConsole();
                }
                boot();
            }
        });
    }

})();
