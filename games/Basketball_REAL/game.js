function replaceContextData() {;
    // return SAMAL.context.getPlayersAsync().then(function(players) {;
    //     for (const user in users) {
    //         for (const player in players) {;
    //             if (users[user].uid === players[player].getID()) {;
    //                 users[user].name = players[player].getName();
    //                 users[user].photo = players[player].getPhoto()
    //             }
    //         }
    //     };
    //     return Promise.resolve()
    // }).catch((err) => {;
        // SAMAL.Logger.logWarning('replaceContextData', err.message);
        console.log('replaceContextData');
        return Promise.resolve()
    // })
};

function replaceConnectedPlayers() {;
    // return SAMAL.player.getConnectedPlayersAsync().then(function(players) {;
    //     for (const user in users) {
    //         for (const player in players) {;
    //             if (users[user].uid === players[player].id) {
    //                 users[user].name = players[player].name;
    //                 users[user].photo = players[player].photo
    //             }
    //         }
    //     };
    //     return Promise.resolve()
    // }).catch(() => {;
        return Promise.resolve()
    // })
};
window.onerror = function(e1, e2, e3, e4, e5) {};

function lng_nvg() {
    stg_lng = 1;
    if (navigator.language) {
        var nvlg = navigator.language.toLowerCase();
        if (nvlg.indexOf("en") > -1 || nvlg.indexOf("EN") > -1) {
            stg_lng = 1
        } else if (nvlg.indexOf("pt") > -1 || nvlg.indexOf("PT") > -1) {
            stg_lng = 2
        } else if (nvlg.indexOf("es") > -1 || nvlg.indexOf("ES") > -1) {
            stg_lng = 3
        } else if (nvlg.indexOf("ja") > -1 || nvlg.indexOf("JA") > -1 || nvlg.indexOf("JP") > -1) {
            stg_lng = 0
        } else if (nvlg.indexOf("zh_CN") > -1 || nvlg.indexOf("zh_cn") > -1 || nvlg.indexOf("zh-cn") > -1) {
            stg_lng = 4
        } else if (nvlg.indexOf("zh") > -1) {
            stg_lng = 5
        } else if (nvlg.indexOf("tl") > -1) {
            stg_lng = 6
        } else if (nvlg.indexOf("th") > -1) {
            stg_lng = 7
        } else if (nvlg.indexOf("hi") > -1) {
            stg_lng = 8
        } else if (nvlg.indexOf("vi") > -1) {
            stg_lng = 9
        } else if (nvlg.indexOf("fr") > -1) {
            stg_lng = 10
        } else if (nvlg.indexOf("it") > -1) {
            stg_lng = 11
        } else if (nvlg.indexOf("nl") > -1) {
            stg_lng = 12
        } else if (nvlg.indexOf("de") > -1) {
            stg_lng = 13
        } else if (nvlg.indexOf("ms") > -1) {
            stg_lng = 14
        } else if (nvlg.indexOf("tr") > -1) {
            stg_lng = 15
        } else if (nvlg.indexOf("ar") > -1) {
            stg_lng = 16
        } else if (nvlg.indexOf("id") > -1) {
            stg_lng = 17
        } else {
            stg_lng = 1
        }
    }
};

function swgm_cl() {
    // if (SAMAL.canSwitchGame()) {
    //     SAMAL.getReciprocalDataList([SAMAL.SAReciprocalImageType.Round_120x120]).then(function(obj) {;
    //         link_pickup = new Image();
    //         link_pickup.src = obj.data.pickupImageURL;
    //         o_d_reci = obj.data.reciprocalDataList;
    //         swgm_list = new Array();
    //         if (obj.data.reciprocalDataList.length > 0) {
    //             var mx_lst_c = obj.data.reciprocalDataList.length;
    //             if (mx_lst_c > 5) {
    //                 mx_lst_c = 5
    //             };
    //             for (var i = 0; i < mx_lst_c; i++) {
    //                 swgm_list.push({
    //                     nm: obj.data.reciprocalDataList[i].name.default,
    //                     appId: obj.data.reciprocalDataList[i].appId,
    //                     isPickup: obj.data.reciprocalDataList[i].isPickup,
    //                     pho_img: -1,
    //                     url: obj.data.reciprocalDataList[i].reciprocalImageInfoAry[0].url
    //                 });
    //                 swgm_list[i].pho_img = new Image();
    //                 swgm_list[i].pho_img.src = obj.data.reciprocalDataList[i].reciprocalImageInfoAry[0].url
    //             }
    //         };
            swgm_l = 1;
            lby3_b = -120;
            console.log(swgm_l,lby3_b);
    //     }).catch(function(e) {})
    // }
};

function slovrst() {
    slty = -1;
    slwy = 500 - Math.floor(st_my_avt / 3) * 270;
    if (slwy < -2852 + wh / ltl + 500) {
        slwy = -2852 + wh / ltl + 500
    };
    slay = -50;
    slrk = 0;
    aslwy = slwy
};

function crc32(str) {
    var table = '00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D';
    var crc = 0;
    var x = 0;
    var y = 0;
    crc = crc ^ (-1);
    for (var i = 0, iTop = str.length; i < iTop; i++) {
        y = (crc ^ str.charCodeAt(i)) & 0xFF;
        x = '0x' + table.substr(y * 9, 8);
        crc = (crc >>> 8) ^ x
    };
    return (crc ^ (-1)) >>> 0
};

function makeHash(key, paramKeyAry, param) {
    var seed = key;
    for (var i = 0, len = paramKeyAry.length; i < len; i++) {
        if (null != param[paramKeyAry[i]]) {
            seed += String(param[paramKeyAry[i]])
        }
    };
    return crc32(seed)
};

function spt_pho2(sph, lcx, lcy, rs) {
    try {
        ctx.drawImage(sph, 0, 0, sph.naturalWidth, sph.naturalHeight, lcx * ltl, lcy * ltl, rs * ltl, rs * ltl)
    } catch (e) {
        ctx.fillStyle = "#999";
        ctx.fillRect(lcx * ltl, lcy * ltl, rs * ltl, rs * ltl)
    }
};

function nplr_cll2() {
    snd_bk_st();
    snd_bk();
    sys_wt_ct = 0
    // SAMAL.context.chooseAsync().then(function(result) {;
    //     var one_do = 0;
    //     if (null == result || "same" == result) {;
    //         var playerId = null;
    //         SAMAL.context.getPlayersAsync().then(function(players) {
    //             var myPlayerId = SAMAL.player.getID();
    //             for (var i = 0, len = players.length; i < len; i++) {
    //                 var player = players[i];
    //                 if (player.getID() != myPlayerId) {
    //                     playerId = player.getID();
    //                     break
    //                 }
    //             };
    //             var vs_usr_i = -1;
    //             if (null != playerId && vs_friend_list.length > 0) {
    //                 for (var i = 0; i < vs_friend_list.length; i++) {
    //                     if (vs_friend_list[i].uid == playerId) {
    //                         vs_usr_i = i
    //                     }
    //                 }
    //             };
    //             if (vs_usr_i != -1) {
    //                 if (one_do == 0) {
    //                     one_do = 1;
    //                     ctmudt_send()
    //                 }
    //             } else {
    //                 if (one_do == 0) {
    //                     one_do = 1;
    //                     ctmudt_send()
    //                 }
    //             };
    //             snd_bk()
    //         }).then(function() {
    //             snd_bk();
    //             if (one_do == 0) {
    //                 one_do = 1;
    //                 r_stt()
    //             }
    //         }).then(function(obj) {
    //             snd_bk();
    //             if (one_do == 0) {
    //                 one_do = 1;
    //                 r_stt()
    //             }
    //         }).catch(function() {
    //             snd_bk();
    //             if (one_do == 0) {
    //                 one_do = 1;
    //                 r_stt()
    //             }
    //         });
    //         snd_bk()
    //     } else if ("cancel" == result) {
    //         snd_bk();
    //         sys_wt_ct = 0
    //     } else {;
    //         snd_bk();
    //         sys_wt_ct = 0
    //     }
    // }).catch(function() {;
    //     snd_bk();
    //     sys_wt_ct = 0
    // })
};

function snd_bk_st() {
    video_lp_stop = 1;
    adj_chk_mode = 0;
    if (snd == 1) {
        st_stsnd = aud.createBufferSource();
        var gnd = aud.createGain();
        st_stsnd.buffer = sndbf;
        st_stsnd.connect(gnd);
        gnd.gain.value = .0001;
        gnd.connect(aud.destination);
        st_stsnd.loopStart = 0.1;
        st_stsnd.loopEnd = 0.12;
        st_stsnd.loop = true;
        st_stsnd.start(0, 8.33, .01)
    }
};

function snd_bk() {
    video_lp_stop = 0;
    adj_chk_mode = 1;
    if (snd == 1) {
        st_stsnd.stop()
    }
};

function adload_v() {
    fb_ad_v = 0;
    // const adManager = SAMAL.SAAdManager.getInstance();
    // adManager.loadRewardedVideo(ad_idv, true).then((response) => {;
        console.log("loadRewardedVideo")
        fb_ad_v = 1;
        return Promise.resolve()
    // }).catch((reason) => {
        // fb_ad_v = 0
    // })
};

function adload_v2() {
    console.log("loadRewardedVideo")
    fb_ad_v2 = 0;
    // const adManager = SAMAL.SAAdManager.getInstance();
    // adManager.loadRewardedVideo(ad_idv2, true).then((response) => {;
        fb_ad_v2 = 1;
        if (vd1_ld == 0) {
            vd1_ld = 1;
            adload_v()
        };
        return Promise.resolve()
    // }).catch((reason) => {
    //     fb_ad_v2 = 0;
    //     if (vd1_ld == 0) {
    //         vd1_ld = 1;
    //         adload_v()
    //     }
    // })
};

function adload_i1() {
    console.log("loadInterstitialAd")
    fb_ad_i1 = 0;
    // const adManager = SAMAL.SAAdManager.getInstance();
    // adManager.loadInterstitialAd(ad_id1, true).then((response) => {;
        fb_ad_i1 = 1;
        return Promise.resolve()
    // }).catch((reason) => {
        // fb_ad_i1 = -1
    // })
};

function adload_i2() {
    console.log("loadInterstitialAd")
    fb_ad_i2 = 0;
    // const adManager = SAMAL.SAAdManager.getInstance();
    // adManager.loadInterstitialAd(ad_id2, true).then((response) => {;
        fb_ad_i2 = 1;
        return Promise.resolve()
    // }).catch((reason) => {
        // fb_ad_i2 = -1
    // })
};

function send_rslt() {
    // dly_rank = -1;
    // dly_rank_up = -1;
    // var url = spsv + "game/put.json";
    // var param = {
    //     uid: SAMAL.player.getID(),
    //     o_uid: o_uid,
    //     score: ttl_sht_scr,
    //     is_win: is_win,
    //     is_fri: is_frd,
    //     win_pt: Math.floor(ttl_sht_scr / 10),
    //     coin: sd_st_get_coin
    // };
    // var key = hashKey;
    // var paramKeyAry = ["uid", "score", "is_win", "win_pt", "coin"];
    // var hash = makeHash(key, paramKeyAry, param);
    // param['hash'] = hash;
    // SAMAL.post(url, param).then(function(obj) {;
    //     dly_rank = Math.floor(obj.data.rank);
    //     dly_rank_up = Math.floor(obj.data.is_rank_up)
    // }).catch(function(e) {})
};

function makeCustomUpdateImage() {
    var workCanvas = document.createElement('canvas');
    try {
        workCanvas.width = 780;
        workCanvas.height = 410;
        var workCtx = workCanvas.getContext('2d');
        if (Math.random() > .5) {
            workCtx.drawImage(img_cs2, 640, 0, 780, 410, 0, 0, 780, 410)
        } else {
            workCtx.drawImage(img_cs2, 640, 410, 780, 410, 0, 0, 780, 410)
        };

        function c_spt_t3(spi, lcx, lcy) {
            var sptx = ixt3[spi];
            var spty = iyt3[spi];
            var sptw = iwt3[spi];
            var spth = iht3[spi];
            workCtx.drawImage(img_cs3, sptx, spty, sptw, spth, lcx, lcy, sptw, spth)
        };
        workCtx.globalAlpha = .5;
        workCtx.fillStyle = "#fff";
        workCtx.fillRect(103, 122, 200, 200);
        workCtx.globalAlpha = 1;
        var sph = my_pho;
        if (sph.complete) {
            workCtx.drawImage(sph, 0, 0, sph.naturalWidth, sph.naturalHeight, 103, 122, 200, 200)
        } else {
            c_spt_t3(8, 129, 148)
        };
        c_spt_t3(5, 50, 62);
        c_spt_t3(25, 12, 45);
        workCtx.fillStyle = "#fff";
        workCtx.font = "23px sans-serif";
        var inptxt = mynm;
        var txsn = workCtx.measureText(inptxt);
        workCtx.fillText(inptxt, 222 - txsn.width / 2, 91);
        if (cstm_scr > 0) {
            workCtx.fillStyle = "#ce1338";
            workCtx.fillRect(103, 321, 200, 46);
            workCtx.fillStyle = "#feb0c0";
            workCtx.font = "20px sans-serif";
            workCtx.fillText("Score", 117, 351);
            workCtx.fillStyle = "#fff";
            workCtx.font = "bold 34px sans-serif";
            inptxt = cstm_scr;
            var txsn = workCtx.measureText(inptxt);
            workCtx.fillText(inptxt, 295 - txsn.width, 356)
        }
    } catch (e) {};
    return workCanvas
};

function makeCustomUpdateImage2() {
    var workCanvas = document.createElement('canvas');
    try {
        workCanvas.width = 780;
        workCanvas.height = 410;
        var workCtx = workCanvas.getContext('2d');
        if (Math.random() > .5) {
            workCtx.drawImage(img_cs2, 640, 0, 780, 410, 0, 0, 780, 410)
        } else {
            workCtx.drawImage(img_cs2, 640, 410, 780, 410, 0, 0, 780, 410)
        };
        ctx.drawImage(workCtx.canvas, 0, 0, 780, 410, 0, wh - 800 * .5, 780 * .5, 410 * .5)
    } catch (e) {};
    return workCanvas
};

function share_send() {
    var csImage = makeCustomUpdateImage2();
    var param = {
        intent: 'SHARE',
        image: csImage,
        text: "Basketball REAL",
        data: {
            situation: "share"
        }
    };
    console.log("currentSendName: Reslut");
    // SAMAL.shareAsync(param).then(function() {}).catch(function() {});
    // SAMAL.logEvent("share_send", 0, {
    //     "currentSendName": "Reslut"
    // })
};

function ctmudt_send() {
    var ctm_sd_s1 = "";
    var ctm_sd_s2 = "";
    var cuImage = makeCustomUpdateImage();
    switch (stg_lng) {
        case 0:
            ctm_sd_s1 = "プレイ!";
            ctm_sd_s2 = "<playerName>さんから「Basketball REAL」の挑戦状が届きました。挑戦しますか？";
            break;
        case 1:
            ctm_sd_s1 = "PLAY!";
            ctm_sd_s2 = "<playerName> sent us a challenge for Basketball REAL. Do you want to take the challenge?";
            break;
        case 2:
            ctm_sd_s1 = "JOGAR!";
            ctm_sd_s2 = "<playerName> enviou-nos um desafio para o Basketball REAL. Quer aceitar o desafio?";
            break;
        case 3:
            ctm_sd_s1 = "JUGAR!";
            ctm_sd_s2 = "<playerName> nos envió un desafío para el Baloncesto REAL. ¿Quieres aceptar el desafío?";
            break;
        case 4:
            ctm_sd_s1 = "开始游戏!";
            ctm_sd_s2 = '<playerName>给我们发来了一个篮球REAL的挑战。 你想接受挑战吗？';
            break;
        case 5:
            ctm_sd_s1 = "開始遊戲!";
            ctm_sd_s2 = '我收到了<playerName>的“ Basketball REAL”挑戰信。 你想挑戰嗎？';
            break;
        case 6:
            ctm_sd_s1 = "Maglaro!";
            ctm_sd_s2 = 'Nakatanggap ako ng isang sulat ng hamon para sa "Basketball REAL" mula sa <playerName>. Nais mo bang hamunin?';
            break;
        case 7:
            ctm_sd_s1 = "เล่น!";
            ctm_sd_s2 = 'ฉันได้รับจดหมายท้าทาย "Basketball REAL" จาก <playerName> คุณต้องการที่จะท้าทาย?';
            break;
        case 8:
            ctm_sd_s1 = "खेलें!";
            ctm_sd_s2 = 'मुझे <playerName> से "बास्केटबॉल REAL" के लिए एक चुनौती पत्र मिला। क्या आप चुनौती देना चाहते हैं?';
            break;
        case 9:
            ctm_sd_s1 = "Đấu!";
            ctm_sd_s2 = '<friend_name> đã đánh bại!';
            break;
        case 10:
            ctm_sd_s1 = "Jouez!";
            ctm_sd_s2 = '<playerName> nous a envoyé un défi pour Basketball REAL. Vous voulez relever le défi ?';
            break;
        case 11:
            ctm_sd_s1 = "Gioca!";
            ctm_sd_s2 = '<playerName> ci ha mandato una sfida per Basketball REAL. Vuoi accettare la sfida?';
            break;
        case 12:
            ctm_sd_s1 = "Spelen!";
            ctm_sd_s2 = '<playerName> stuurde ons een uitdaging voor Basketbal REAL. Wil je de uitdaging aangaan?';
            break;
        case 13:
            ctm_sd_s1 = "Spielen!";
            ctm_sd_s2 = '<playerName> hat uns eine Herausforderung für Basketball REAL geschickt. Wollen Sie die Herausforderung annehmen?';
            break;
        case 14:
            ctm_sd_s1 = "Main!";
            ctm_sd_s2 = 'Saya menerima surat cabaran untuk "Bola Keranjang SEBENAR" dari <playerName>. Adakah anda ingin mencabar?';
            break;
        case 15:
            ctm_sd_s1 = "Oyna!";
            ctm_sd_s2 = '<playerName> den "Basketball REAL" için bir yarışma mektubu aldım. Meydan okumak ister misin?';
            break;
        case 16:
            ctm_sd_s1 = "لعب!";
            ctm_sd_s2 = 'تلقيت رسالة تحدي بخصوص "Basketball REAL" من <playerName>. هل تريد التحدي؟';
            break;
        case 17:
            ctm_sd_s1 = "Mainkan!";
            ctm_sd_s2 = 'Saya menerima surat tantangan untuk "Basketball REAL" dari <playerName>. Apakah Anda ingin menantang?';
            break;
        default:
    };
    ctm_sd_s2 = ctm_sd_s2.split("<playerName>").join(mynm);
    // var cuParam = {
    //     action: 'CUSTOM',
    //     template: '',
    //     cta: ctm_sd_s1,
    //     image: cuImage,
    //     text: ctm_sd_s2,
    //     data: {
    //         kind: SAMAL.SAEntryPointDataKind.CustomUpdate,
    //         transition: SAMAL.SAEntryPointDataTransition.StartGameWithContextPlayer,
    //         acLogName: SAMAL.SAEventLogName.CuAcceptRecommendFriend
    //     },
    //     strategy: 'IMMEDIATE_CLEAR'
    // };
    // var logName = "cu_send_new_friend";
    // SAMAL.updateAsync(cuParam, logName).then(function() {
        r_stt();
        console.log("currentSendName : Reslut");
        // SAMAL.logEvent("cu_send", 0, {
        //     "currentSendName": "Reslut"
        // })
    // }).catch(function(e) {
    //     r_stt()
    // })
};

function frd_ctxt(i) {
    var friendPlayerId = i;
    // SAMAL.context.createAsync(friendPlayerId).then(function(result) {
    //     if (null == result || "same" == result) {;
    //         ctmudt_send()
    //     } else if ("cancel" == result) {;
            sys_wt_ct = 0
        // } else {;
            // sys_wt_ct = 0
        // }
    // }).catch(function(e) {
        // sys_wt_ct = 0
    // })
};

function shop_buy(shp_b_icd, shp_b_mtd) {
    // var url = spsv + "shop/buy.json";
    // var param = {
    //     uid: SAMAL.player.getID(),
    //     i_cd: shp_b_icd,
    //     method: shp_b_mtd
    // };
    // var key = hashKey;
    // var paramKeyAry = ["uid", "i_cd", "method"];
    // var hash = makeHash(key, paramKeyAry, param);
    // param['hash'] = hash;
    // SAMAL.post(url, param).then(function(obj) {
        if (boost_buy == 0) {
            if (bns_flg == 0) {
                avt_gt[shp_b_icd - 2000001] = 1;
                my_coin -= avt_pr[st_my_sla];
                my_coin_a = my_coin;
                pt_f = {};
                pt_fi = 0;
                ptc_chx = 0;
                ptc_chy = 0;
                pt_ui("32/100/0/0#1#" + "320#300#500#500#100#0#0#0#0|" + "20#2#0#0#10#10#0#0#0#0#0|");
                pt_ui("32/100/0/0#1#" + "320#300#650#500#0#0#0#0#0|" + "4#0#0#0#500#500#0#0#0#0#0|" + "1#0#0#0#500#500#50#0#0#0#0|" + "20#2#0#0#10#10#0#0#0#0#0|");
                for (var ptc_i = 0; ptc_i < 2; ptc_i++) {
                    pt_ui("60/110/0/0#1#" + "320#300#150#150#100#0#0#0#600|" + "55#2#320#300#20#20#0#0#0#0#0#A|");
                    pt_ui("60/110/0/0#1#" + "320#300#150#150#100#0#0#0#600|" + "20#2#320#300#20#20#0#0#0#0#0#A|");
                    pt_ui("61/110/0/0#1#" + "320#300#150#150#100#0#0#0#600|" + "55#2#320#300#20#20#0#0#0#0#0#A|");
                    pt_ui("61/110/0/0#1#" + "320#300#150#150#100#0#0#0#600|" + "12#2#320#300#20#20#0#0#0#0#0#A|");
                    pt_ui("34/110/0/0#1#" + "320#300#150#150#100#0#0#0#600|" + "40#2#320#300#20#20#0#0#0#0#0#A|");
                    pt_ui("34/110/0/0#1#" + "320#300#150#150#100#0#0#0#600|" + "20#2#320#300#20#20#0#0#0#0#0#A|")
                };
                uni_buy_anm = 1;
                sndf(14, .06)
            } else {
                bns_tim = Math.floor(obj.data.remain_time);
                bns_tm = Math.floor(+new Date() / 1000);
                bns_mt = bns_tm
            }
        } else {
            boost_buy = 0
        };
        s = 2;
        shop_dlg = 0
    // })
    // .catch(function(e) {
    //     er_anm_alt();
    //     s = 2;
    //     shop_dlg = 0
    // })
};

function avatar_set(avt_s_i) {
    if (avt_s_i == 2000000) {
        avt_s_i = 0
    };
    var url = spsv + "avatar/set.json";
    // var param = {
    //     uid: SAMAL.player.getID(),
    //     i_cd: avt_s_i,
    //     type: 1
    // };
    // SAMAL.post(url, param).then(function(obj) {}).catch(function() {})
};

function rst_ad_e() {
    r_stt()
};

function showInterstitial() {
    snd_bk_st();
    fb_ad_i1 = 0;
    console.log('showInterstitial');
    // const adManager = SAMAL.SAAdManager.getInstance();
    // if (adManager.isEnableInterstitial()) {
        // let param = {
        //     adPlace: 'interstitial_nothanks_tap'
        // };
        // adManager.showInterstitialAd(ad_id1, param).then((response) => {;
            show_vtr_time = +new Date() - 15000;
            snd_bk();
            if (show_int1 == 0) {
                scd_gmov();
                show_int1 = 1
            };
            return Promise.resolve()
        // }).catch((reason) => {;
        //     snd_bk();
        //     if (show_int1 == 0) {
        //         scd_gmov();
        //         show_int1 = 1
        //     }
        // })
    // }
};

function showInterstitial2() {
    console.log('showInterstitial');
    snd_bk_st();
    fb_ad_i2 = 0;
    // const adManager = SAMAL.SAAdManager.getInstance();
    // if (adManager.isEnableInterstitial()) {
        // let param = {
        //     adPlace: 'interstitial_restart'
        // };
        // adManager.showInterstitialAd(ad_id2, param).then((response) => {;
            snd_bk();
            if (show_int2 == 0) {
                rst_ad_e();
                show_int2 = 1
            };
            return Promise.resolve()
        // }).catch((reason) => {;
        //     snd_bk();
        //     if (show_int2 == 0) {
        //         rst_ad_e();
        //         show_int2 = 1
        //     }
        // })
    // }
};

function showRewardedVideo() {
    snd_bk_st();
    fb_ad_v = 0;
    console.log('showRewardedVideo')
    // const adManager = SAMAL.SAAdManager.getInstance();
    // if (adManager.isEnableRewardVideo()) {;
        // adManager.disableErrorEventLog();
        // let param = {
        //     adPlace: 'video_main'
        // };
        // adManager.showRewardedVideo(ad_idv, param).then((response) => {;
            show_vtr_time = +new Date();
            snd_bk();
            if (show_vtr_mode == 1) {
                if (show_vtr1 == 0) {
                    cont_st();
                    show_vtr1 = 1
                }
            } else {
                if (show_vtr2 == 0) {
                    dly_rank_up = 0;
                    pt_f = {};
                    pt_fi = 0;
                    sndf(14, .06);
                    var cnt_y = wh / ltl / 2 - 75;
                    ptc_chy = 0;
                    pt_ui("32/130/0/0#1#" + "320#" + cnt_y + "#150#150#100#0#0#0#0|" + "360#0#0#0#150#150#100#359#0#0#0|");
                    pt_ui("32/130/0/0#1#" + "320#" + cnt_y + "#150#150#15#0#0#0#0|" + "360#0#0#0#150#150#15#-359#0#0#0|");
                    rs_get_coin = 0;
                    rs_stk_coin = 0;
                    rs_as = 3;
                    rs_ac = 0;
                    rs_anm = 1;
                    dly_alt = 2;
                    if (fchk) {
                        bns_flg = 1;
                        shop_buy(5000001, 1)
                    };
                    show_vtr2 = 1
                }
            };
            if (fb_ad_v != 1) {
                adload_v()
            };
            return Promise.resolve()
        // })
        // .catch((reason) => {;
        //     snd_bk();
        //     if (show_vtr_mode == 1) {
        //         if (show_vtr1 == 0) {
        //             scd_gmov();
        //             show_vtr1 = 1
        //         };
        //         er_anm_alt()
        //     } else {
        //         if (show_vtr2 == 0) {
        //             dly_alt = 0;
        //             bns_tim = 60;
        //             show_vtr2 = 1
        //         };
        //         er_anm_alt()
        //     };
        //     if (fb_ad_v != 1) {
        //         adload_v()
        //     }
        // }).then(() => {
        //     adManager.enableErrorEventLog()
        // })
    // }
};

function showRewardedVideo2() {
    snd_bk_st();
    fb_ad_v2 = 0;
    // const adManager = SAMAL.SAAdManager.getInstance();
    // if (adManager.isEnableRewardVideo()) {;
        // adManager.disableErrorEventLog();
        // let param = {
        //     adPlace: 'video_sub'
        // };
        // adManager.showRewardedVideo(ad_idv2, param).then((response) => {;
            show_vtr_time = +new Date();
            snd_bk();
            if (show_vtr_mode == 1) {
                if (show_vtr1 == 0) {
                    cont_st();
                    show_vtr1 = 1
                }
            } else {
                if (show_vtr2 == 0) {
                    dly_rank_up = 0;
                    pt_f = {};
                    pt_fi = 0;
                    sndf(14, .06);
                    var cnt_y = wh / ltl / 2 - 75;
                    ptc_chy = 0;
                    pt_ui("32/130/0/0#1#" + "320#" + cnt_y + "#150#150#100#0#0#0#0|" + "360#0#0#0#150#150#100#359#0#0#0|");
                    pt_ui("32/130/0/0#1#" + "320#" + cnt_y + "#150#150#15#0#0#0#0|" + "360#0#0#0#150#150#15#-359#0#0#0|");
                    rs_get_coin = 0;
                    rs_stk_coin = 0;
                    rs_as = 3;
                    rs_ac = 0;
                    rs_anm = 1;
                    dly_alt = 2;
                    if (fchk) {
                        bns_flg = 1;
                        shop_buy(5000001, 1)
                    };
                    show_vtr2 = 1
                }
            };
            if (fb_ad_v2 != 1) {
                adload_v2()
            };
            return Promise.resolve()
        // })
    //     .catch((reason) => {;
    //         snd_bk();
    //         if (show_vtr_mode == 1) {
    //             if (show_vtr1 == 0) {
    //                 scd_gmov();
    //                 show_vtr1 = 1
    //             };
    //             er_anm_alt()
    //         } else {
    //             if (show_vtr2 == 0) {
    //                 dly_alt = 0;
    //                 bns_tim = 60;
    //                 show_vtr2 = 1
    //             };
    //             er_anm_alt()
    //         };
    //         if (fb_ad_v2 != 1) {
    //             adload_v2()
    //         }
    //     }).then(() => {
    //         adManager.enableErrorEventLog()
    //     })
    // }
};

function d_box(dbx_c, dbx_x, dbx_y, dbx_w, dbx_h, dbx_a) {
    ctx.globalAlpha = dbx_a;
    ctx.fillStyle = dbx_c;
    ctx.fillRect(dbx_x * ltl, dbx_y * ltl, dbx_w * ltl, dbx_h * ltl);
    ctx.globalAlpha = 1
};

function d_box2(dbx_c, dbx_x, dbx_y, dbx_w, dbx_h, dbx_a) {
    dbx_x += absl_x;
    dbx_y += absl_y;
    ctx.globalAlpha = dbx_a;
    ctx.fillStyle = dbx_c;
    ctx.fillRect(dbx_x * ltl, dbx_y * ltl, dbx_w * ltl, dbx_h * ltl);
    ctx.globalAlpha = 1
};

function avt_cd(i) {
    var i2 = i - 2000000;
    if (i2 < 0) {
        i2 = 0
    };
    if (i2 > avt_shp_max) {
        i2 = avt_shp_max
    };
    return i2
};

function unf_hnt(u1, u2) {
    switch (u1) {
        case 0:
            dupl_color = new Array(2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1);
            break;
        case 1:
            dupl_color = new Array(0, 1, 0, 0, 1, 0, 3, 3, 0, 0, 1, 0, 2, 0, 0, 0, 3, 0, 0, 0, 1, 3, 0, 0, 3, 0, 0, 2, 0, 0);
            break;
        case 2:
            dupl_color = new Array(0, 0, 2, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0);
            break;
        case 3:
            dupl_color = new Array(0, 0, 2, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0);
            break;
        case 4:
            dupl_color = new Array(0, 1, 0, 0, 1, 0, 3, 3, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 2, 0, 0, 3, 0, 0, 2, 0, 0);
            break;
        case 5:
            dupl_color = new Array(2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1);
            break;
        case 6:
            dupl_color = new Array(0, 1, 0, 0, 1, 0, 3, 3, 0, 3, 3, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0);
            break;
        case 7:
            dupl_color = new Array(0, 1, 0, 0, 1, 0, 3, 3, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 2, 0, 0, 3, 0, 0, 3, 0, 0);
            break;
        case 8:
            dupl_color = new Array(0, 0, 2, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0);
            break;
        case 9:
            dupl_color = new Array(0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0);
            break;
        case 10:
            dupl_color = new Array(0, 1, 0, 0, 1, 0, 3, 3, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 2, 0, 0, 3, 0, 0, 3, 0, 0);
            break;
        case 11:
            dupl_color = new Array(2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1);
            break;
        case 12:
            dupl_color = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0);
            break;
        case 13:
            dupl_color = new Array(2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1);
            break;
        case 14:
            dupl_color = new Array(0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0);
            break;
        case 15:
            dupl_color = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
            break;
        case 16:
            dupl_color = new Array(0, 1, 0, 0, 1, 0, 0, 3, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 2, 0, 0, 3, 0, 0, 3, 0, 0);
            break;
        case 17:
            dupl_color = new Array(2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1);
            break;
        case 18:
            dupl_color = new Array(0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0);
            break;
        case 19:
            dupl_color = new Array(2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1);
            break;
        case 20:
            dupl_color = new Array(0, 1, 0, 0, 1, 0, 3, 3, 0, 0, 1, 0, 2, 0, 0, 0, 3, 0, 0, 0, 1, 3, 0, 0, 3, 0, 0, 2, 0, 0);
            break;
        case 21:
            dupl_color = new Array(0, 1, 0, 0, 1, 0, 0, 3, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 2, 0, 0, 3, 0, 0, 3, 0, 0);
            break;
        case 22:
            dupl_color = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0);
            break;
        case 23:
            dupl_color = new Array(0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0);
            break;
        case 24:
            dupl_color = new Array(0, 1, 0, 0, 1, 0, 0, 3, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 2, 0, 0, 3, 0, 0, 3, 0, 0);
            break;
        case 25:
            dupl_color = new Array(2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1);
            break;
        case 26:
            dupl_color = new Array(2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1);
            break;
        case 27:
            dupl_color = new Array(0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            break;
        case 28:
            dupl_color = new Array(0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0);
            break;
        case 29:
            dupl_color = new Array(2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1);
            break;
        default:
    };
    if (dupl_color[u2] != 0) {
        var unfm2_tm = Math.floor(u2 / 3) * 3;
        unfm2 = unfm2_tm + dupl_color[u2] - 1
    }
};

function yn_shop(i) {
    switch (i) {
        case 0:
            yn_name_color = "#20428b";
            yn_number_color = "#20428b";
            d_box2("#eeeeee", 0, 0, 120, 150, 1);
            d_box2("#f7b738", 0, 44, 18, 150, 1);
            d_box2("#f7b738", 102, 44, 18, 150, 1);
            d_box2("#20428b", 12, 0, 10, 46, 1);
            d_box2("#20428b", 98, 0, 10, 46, 1);
            break;
        case 1:
            yn_name_color = "#f7b738";
            yn_number_color = "#f7b738";
            d_box2("#20428b", 0, 0, 120, 150, 1);
            d_box2("#eeeeee", 16, 44, 6, 106, 1);
            d_box2("#eeeeee", 98, 44, 6, 106, 1);
            d_box2("#20428b", 0, 44, 18, 150, 1);
            d_box2("#20428b", 102, 44, 18, 150, 1);
            d_box2("#f7b738", 12, 0, 10, 46, 1);
            d_box2("#f7b738", 98, 0, 10, 46, 1);
            break;
        case 2:
            yn_name_color = "#20428b";
            yn_number_color = "#20428b";
            d_box2("#f7b738", 0, 0, 120, 150, 1);
            d_box2("#20428b", 16, 44, 6, 106, 1);
            d_box2("#20428b", 98, 44, 6, 106, 1);
            d_box2("#eeeeee", 0, 44, 18, 150, 1);
            d_box2("#eeeeee", 102, 44, 18, 150, 1);
            d_box2("#20428b", 12, 0, 10, 46, 1);
            d_box2("#20428b", 98, 0, 10, 46, 1);
            d_box2("#eeeeee", 12, 0, 6, 46, 1);
            d_box2("#eeeeee", 102, 0, 6, 46, 1);
            break;
        case 3:
            yn_name_color = "#623586";
            yn_number_color = "#623586";
            d_box2("#ffce37", 0, 0, 120, 150, 1);
            d_box2("#eeeeee", 16, 44, 6, 106, 1);
            d_box2("#eeeeee", 98, 44, 6, 106, 1);
            d_box2("#623586", 0, 44, 18, 150, 1);
            d_box2("#623586", 102, 44, 18, 150, 1);
            d_box2("#623586", 12, 0, 10, 46, 1);
            d_box2("#623586", 98, 0, 10, 46, 1);
            d_box2("#eeeeee", 12, 0, 6, 46, 1);
            d_box2("#eeeeee", 102, 0, 6, 46, 1);
            d_box2("#623586", 0, 140, 120, 10, 1);
            break;
        case 4:
            yn_name_color = "#ffce37";
            yn_number_color = "#ffce37";
            d_box2("#623586", 0, 0, 120, 150, 1);
            d_box2("#ffce37", 16, 44, 6, 106, 1);
            d_box2("#ffce37", 98, 44, 6, 106, 1);
            d_box2("#333333", 0, 44, 18, 150, 1);
            d_box2("#333333", 102, 44, 18, 150, 1);
            d_box2("#ffce37", 12, 0, 6, 46, 1);
            d_box2("#ffce37", 102, 0, 6, 46, 1);
            break;
        case 5:
            yn_name_color = "#623586";
            yn_number_color = "#623586";
            d_box2("#eeeeee", 0, 0, 120, 150, 1);
            d_box2("#623586", 16, 44, 6, 106, 1);
            d_box2("#623586", 98, 44, 6, 106, 1);
            d_box2("#ffce37", 0, 44, 18, 150, 1);
            d_box2("#ffce37", 102, 44, 18, 150, 1);
            d_box2("#cccccc", 12, 0, 10, 46, 1);
            d_box2("#cccccc", 98, 0, 10, 46, 1);
            break;
        case 6:
            yn_name_color = "#f7e521";
            yn_number_color = "#1d2844";
            d_box2("#9e263f", 0, 0, 120, 150, 1);
            d_box2("#ffbe33", 16, 44, 6, 106, 1);
            d_box2("#ffbe33", 98, 44, 6, 106, 1);
            d_box2("#9e263f", 0, 44, 18, 150, 1);
            d_box2("#9e263f", 102, 44, 18, 150, 1);
            d_box2("#1d2844", 12, 0, 10, 46, 1);
            d_box2("#1d2844", 98, 0, 10, 46, 1);
            d_box2("#1d2844", 0, 140, 120, 10, 1);
            break;
        case 7:
            yn_name_color = "#9e263f";
            yn_number_color = "#9e263f";
            d_box2("#333333", 0, 0, 120, 150, 1);
            d_box2("#ffbe33", 16, 44, 6, 106, 1);
            d_box2("#ffbe33", 98, 44, 6, 106, 1);
            d_box2("#333333", 0, 44, 18, 150, 1);
            d_box2("#333333", 102, 44, 18, 150, 1);
            d_box2("#9e263f", 12, 0, 10, 46, 1);
            d_box2("#9e263f", 98, 0, 10, 46, 1);
            d_box2("#9e263f", 0, 140, 120, 10, 1);
            break;
        case 8:
            yn_name_color = "#9e263f";
            yn_number_color = "#9e263f";
            d_box2("#ecb90e", 0, 0, 120, 150, 1);
            d_box2("#9e263f", 12, 0, 10, 46, 1);
            d_box2("#9e263f", 98, 0, 10, 46, 1);
            d_box2("#9e263f", 0, 140, 120, 10, 1);
            break;
        case 9:
            yn_name_color = "#20140a";
            yn_number_color = "#20140a";
            d_box2("#dc2227", 0, 0, 120, 150, 1);
            d_box2("#eeeeee", 12, 0, 10, 46, 1);
            d_box2("#eeeeee", 98, 0, 10, 46, 1);
            d_box2("#dc2227", 12, 0, 6, 46, 1);
            d_box2("#dc2227", 102, 0, 6, 46, 1);
            d_box2("#eeeeee", 0, 140, 120, 10, 1);
            break;
        case 10:
            yn_name_color = "#dc2227";
            yn_number_color = "#dc2227";
            d_box2("#292e34", 0, 0, 120, 150, 1);
            d_box2("#4a4e58", 11, 0, 2, 150, 1);
            d_box2("#4a4e58", 27, 0, 2, 150, 1);
            d_box2("#4a4e58", 43, 0, 2, 150, 1);
            d_box2("#4a4e58", 59, 0, 2, 150, 1);
            d_box2("#4a4e58", 75, 0, 2, 150, 1);
            d_box2("#4a4e58", 91, 0, 2, 150, 1);
            d_box2("#4a4e58", 107, 0, 2, 150, 1);
            d_box2("#dc2227", 12, 0, 10, 46, 1);
            d_box2("#dc2227", 98, 0, 10, 46, 1);
            d_box2("#292e34", 12, 0, 6, 46, 1);
            d_box2("#292e34", 102, 0, 6, 46, 1);
            d_box2("#dc2227", 0, 140, 120, 10, 1);
            break;
        case 11:
            yn_name_color = "#dc2227";
            yn_number_color = "#dc2227";
            d_box2("#eeeeee", 0, 0, 120, 150, 1);
            d_box2("#dc2227", 12, 0, 10, 46, 1);
            d_box2("#dc2227", 98, 0, 10, 46, 1);
            d_box2("#eeeeee", 12, 0, 6, 46, 1);
            d_box2("#eeeeee", 102, 0, 6, 46, 1);
            d_box2("#dc2227", 0, 140, 120, 10, 1);
            break;
        case 12:
            yn_name_color = "#eeeeee";
            yn_number_color = "#eeeeee";
            d_box2("#3d87c6", 0, 0, 120, 150, 1);
            d_box2("#e8563c", 16, 44, 6, 106, 1);
            d_box2("#e8563c", 98, 44, 6, 106, 1);
            d_box2("#303030", 0, 44, 18, 150, 1);
            d_box2("#303030", 102, 44, 18, 150, 1);
            d_box2("#e8563c", 12, 0, 10, 46, 1);
            d_box2("#e8563c", 98, 0, 10, 46, 1);
            d_box2("#303030", 12, 0, 6, 46, 1);
            d_box2("#303030", 102, 0, 6, 46, 1);
            break;
        case 13:
            yn_name_color = "#3d87c6";
            yn_number_color = "#3d87c6";
            d_box2("#eeeeee", 0, 0, 120, 150, 1);
            d_box2("#f05033", 16, 44, 6, 106, 1);
            d_box2("#f05033", 98, 44, 6, 106, 1);
            d_box2("#3d87c6", 0, 44, 18, 150, 1);
            d_box2("#3d87c6", 102, 44, 18, 150, 1);
            d_box2("#f05033", 12, 0, 10, 46, 1);
            d_box2("#f05033", 98, 0, 10, 46, 1);
            d_box2("#173460", 12, 0, 6, 46, 1);
            d_box2("#173460", 102, 0, 6, 46, 1);
            break;
        case 14:
            yn_name_color = "#19498f";
            yn_number_color = "#19498f";
            d_box2("#f05033", 0, 0, 120, 150, 1);
            d_box2("#3d87c6", 12, 0, 10, 46, 1);
            d_box2("#3d87c6", 98, 0, 10, 46, 1);
            d_box2("#eeeeee", 12, 0, 6, 46, 1);
            d_box2("#eeeeee", 102, 0, 6, 46, 1);
            break;
        case 15:
            yn_name_color = "#eeeeee";
            yn_number_color = "#eeeeee";
            d_box2("#099355", 0, 0, 120, 150, 1);
            d_box2("#eeeeee", 12, 0, 10, 46, 1);
            d_box2("#eeeeee", 98, 0, 10, 46, 1);
            d_box2("#099355", 12, 0, 6, 46, 1);
            d_box2("#099355", 102, 0, 6, 46, 1);
            d_box2("#eeeeee", 0, 140, 120, 10, 1);
            break;
        case 16:
            yn_name_color = "#099355";
            yn_number_color = "#099355";
            d_box2("#333333", 0, 0, 120, 150, 1);
            d_box2("#099355", 0, 44, 18, 150, 1);
            d_box2("#099355", 102, 44, 18, 150, 1);
            d_box2("#099355", 12, 0, 10, 46, 1);
            d_box2("#099355", 98, 0, 10, 46, 1);
            d_box2("#099355", 0, 140, 120, 10, 1);
            break;
        case 17:
            yn_name_color = "#099355";
            yn_number_color = "#099355";
            d_box2("#eeeeee", 0, 0, 120, 150, 1);
            d_box2("#099355", 12, 0, 10, 46, 1);
            d_box2("#099355", 98, 0, 10, 46, 1);
            d_box2("#099355", 0, 140, 120, 10, 1);
            break;
        case 18:
            yn_name_color = "#eeeeee";
            yn_number_color = "#eeeeee";
            d_box2("#c9132c", 0, 0, 120, 150, 1);
            d_box2("#eeeeee", 16, 44, 6, 106, 1);
            d_box2("#eeeeee", 98, 44, 6, 106, 1);
            d_box2("#c9132c", 0, 44, 18, 150, 1);
            d_box2("#c9132c", 102, 44, 18, 150, 1);
            d_box2("#eeeeee", 12, 0, 10, 46, 1);
            d_box2("#eeeeee", 98, 0, 10, 46, 1);
            break;
        case 19:
            yn_name_color = "#c9132c";
            yn_number_color = "#c9132c";
            d_box2("#eeeeee", 0, 0, 120, 150, 1);
            d_box2("#c9132c", 16, 44, 6, 106, 1);
            d_box2("#c9132c", 98, 44, 6, 106, 1);
            d_box2("#eeeeee", 0, 44, 18, 150, 1);
            d_box2("#eeeeee", 102, 44, 18, 150, 1);
            d_box2("#c9132c", 12, 0, 10, 46, 1);
            d_box2("#c9132c", 98, 0, 10, 46, 1);
            break;
        case 20:
            yn_name_color = "#eeeeee";
            yn_number_color = "#eeeeee";
            d_box2("#252a5c", 0, 0, 120, 150, 1);
            d_box2("#646999", 11, 0, 2, 150, 1);
            d_box2("#646999", 27, 0, 2, 150, 1);
            d_box2("#646999", 43, 0, 2, 150, 1);
            d_box2("#646999", 59, 0, 2, 150, 1);
            d_box2("#646999", 75, 0, 2, 150, 1);
            d_box2("#646999", 91, 0, 2, 150, 1);
            d_box2("#646999", 107, 0, 2, 150, 1);
            d_box2("#cf1837", 12, 0, 10, 46, 1);
            d_box2("#cf1837", 98, 0, 10, 46, 1);
            d_box2("#099355", 12, 0, 6, 46, 1);
            d_box2("#099355", 102, 0, 6, 46, 1);
            break;
        case 21:
            yn_name_color = "#58c0db";
            yn_number_color = "#58c0db";
            d_box2("#333333", 0, 0, 120, 150, 1);
            d_box2("#dc3c83", 12, 0, 10, 46, 1);
            d_box2("#dc3c83", 98, 0, 10, 46, 1);
            d_box2("#58c0db", 12, 0, 6, 46, 1);
            d_box2("#58c0db", 102, 0, 6, 46, 1);
            d_box2("#dc3c83", 0, 140, 120, 10, 1);
            break;
        case 22:
            yn_name_color = "#dc3c83";
            yn_number_color = "#dc3c83";
            d_box2("#58c0db", 0, 0, 120, 150, 1);
            d_box2("#dc3c83", 12, 0, 10, 46, 1);
            d_box2("#dc3c83", 98, 0, 10, 46, 1);
            d_box2("#333333", 12, 0, 6, 46, 1);
            d_box2("#333333", 102, 0, 6, 46, 1);
            d_box2("#dc3c83", 0, 140, 120, 10, 1);
            break;
        case 23:
            yn_name_color = "#eeeeee";
            yn_number_color = "#eeeeee";
            d_box2("#dc3c83", 0, 0, 120, 150, 1);
            d_box2("#58c0db", 12, 0, 10, 46, 1);
            d_box2("#58c0db", 98, 0, 10, 46, 1);
            d_box2("#333333", 12, 0, 6, 46, 1);
            d_box2("#333333", 102, 0, 6, 46, 1);
            d_box2("#58c0db", 0, 140, 120, 10, 1);
            break;
        case 24:
            yn_name_color = "#eeeeee";
            yn_number_color = "#eeeeee";
            d_box2("#333333", 0, 0, 120, 150, 1);
            d_box2("#eeeeee", 16, 44, 6, 106, 1);
            d_box2("#eeeeee", 98, 44, 6, 106, 1);
            d_box2("#bbbbbb", 0, 44, 18, 150, 1);
            d_box2("#bbbbbb", 102, 44, 18, 150, 1);
            d_box2("#eeeeee", 12, 0, 10, 46, 1);
            d_box2("#eeeeee", 98, 0, 10, 46, 1);
            d_box2("#bbbbbb", 12, 0, 6, 46, 1);
            d_box2("#bbbbbb", 102, 0, 6, 46, 1);
            break;
        case 25:
            yn_name_color = "#333333";
            yn_number_color = "#333333";
            d_box2("#bbbbbb", 0, 0, 120, 150, 1);
            d_box2("#eeeeee", 16, 44, 6, 106, 1);
            d_box2("#eeeeee", 98, 44, 6, 106, 1);
            d_box2("#333333", 0, 44, 18, 150, 1);
            d_box2("#333333", 102, 44, 18, 150, 1);
            d_box2("#eeeeee", 12, 0, 10, 46, 1);
            d_box2("#eeeeee", 98, 0, 10, 46, 1);
            d_box2("#333333", 12, 0, 6, 46, 1);
            d_box2("#333333", 102, 0, 6, 46, 1);
            d_box2("#333333", 0, 140, 120, 10, 1);
            break;
        case 26:
            yn_name_color = "#333333";
            yn_number_color = "#333333";
            d_box2("#eeeeee", 0, 0, 120, 150, 1);
            d_box2("#bbbbbb", 16, 44, 6, 106, 1);
            d_box2("#bbbbbb", 98, 44, 6, 106, 1);
            d_box2("#333333", 0, 44, 18, 150, 1);
            d_box2("#333333", 102, 44, 18, 150, 1);
            d_box2("#333333", 12, 0, 10, 46, 1);
            d_box2("#333333", 98, 0, 10, 46, 1);
            d_box2("#bbbbbb", 12, 0, 6, 46, 1);
            d_box2("#bbbbbb", 102, 0, 6, 46, 1);
            break;
        case 27:
            yn_name_color = "#eeeeee";
            yn_number_color = "#eeeeee";
            d_box2("#0c38a6", 0, 0, 120, 150, 1);
            d_box2("#4266c2", 11, 0, 2, 150, 1);
            d_box2("#4266c2", 27, 0, 2, 150, 1);
            d_box2("#4266c2", 43, 0, 2, 150, 1);
            d_box2("#4266c2", 59, 0, 2, 150, 1);
            d_box2("#4266c2", 75, 0, 2, 150, 1);
            d_box2("#4266c2", 91, 0, 2, 150, 1);
            d_box2("#4266c2", 107, 0, 2, 150, 1);
            d_box2("#eeeeee", 12, 0, 10, 46, 1);
            d_box2("#eeeeee", 98, 0, 10, 46, 1);
            d_box2("#bd282e", 12, 0, 6, 46, 1);
            d_box2("#bd282e", 102, 0, 6, 46, 1);
            d_box2("#bd282e", 0, 140, 120, 10, 1);
            break;
        case 28:
            yn_name_color = "#eeeeee";
            yn_number_color = "#eeeeee";
            d_box2("#dc192d", 0, 0, 120, 150, 1);
            d_box2("#f17784", 11, 0, 2, 150, 1);
            d_box2("#f17784", 27, 0, 2, 150, 1);
            d_box2("#f17784", 43, 0, 2, 150, 1);
            d_box2("#f17784", 59, 0, 2, 150, 1);
            d_box2("#f17784", 75, 0, 2, 150, 1);
            d_box2("#f17784", 91, 0, 2, 150, 1);
            d_box2("#f17784", 107, 0, 2, 150, 1);
            d_box2("#0c38a6", 12, 0, 10, 46, 1);
            d_box2("#0c38a6", 98, 0, 10, 46, 1);
            d_box2("#eeeeee", 12, 0, 6, 46, 1);
            d_box2("#eeeeee", 102, 0, 6, 46, 1);
            break;
        case 29:
            yn_name_color = "#333333";
            yn_number_color = "#333333";
            d_box2("#eeeeee", 0, 0, 120, 150, 1);
            d_box2("#a1a4b8", 11, 0, 2, 150, 1);
            d_box2("#a1a4b8", 27, 0, 2, 150, 1);
            d_box2("#a1a4b8", 43, 0, 2, 150, 1);
            d_box2("#a1a4b8", 59, 0, 2, 150, 1);
            d_box2("#a1a4b8", 75, 0, 2, 150, 1);
            d_box2("#a1a4b8", 91, 0, 2, 150, 1);
            d_box2("#a1a4b8", 107, 0, 2, 150, 1);
            d_box2("#0068b7", 12, 0, 10, 46, 1);
            d_box2("#0068b7", 98, 0, 10, 46, 1);
            d_box2("#bd282e", 12, 0, 6, 46, 1);
            d_box2("#bd282e", 102, 0, 6, 46, 1);
            break;
        default:
    }
};

function cir(x, y, u, i) {
    var radius = 30;
    var sAngle = 0;
    var eAngle = 0;
    var ra = -90 * rad;
    var rb = i - 90 * rad;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.arc(x, y, u, ra, rb, false);
    ctx.closePath();
    ctx.fill()
};

function lcir(lrstx, lrsty) {
    var i = 0;
    var ri = 0;
    var Rr = 0;
    for (i = 0; i < 12; i++) {
        ri = (ldri | 0) + i;
        if (ri > 12) {
            ri -= 12
        };
        ctx.beginPath();
        ctx.lineWidth = 3 * ltl;
        ctx.strokeStyle = "#fff";
        ctx.globalAlpha = ri / 10;
        var ci_a = 10 * ltl;
        var ci_b = 20 * ltl;
        ctx.moveTo(lrstx + Math.cos(Rr) * ci_a, lrsty + Math.sin(Rr) * ci_a);
        ctx.lineTo(lrstx + Math.cos(Rr) * ci_b, lrsty + Math.sin(Rr) * ci_b);
        ctx.stroke();
        Rr += 4.18 / 8
    };
    ctx.globalAlpha = 1;
    ldri -= .25;
    if (ldri < 1) {
        ldri = 12
    }
};

function lding() {
    lcir(ww / 2, 495 * ltl)
};

function lding2() {
    lcir(ww / 2, wh / 2.3)
};

function gst() {
    run_lp();
    s = 80
};

function gsts() {
    gldt++;
    ld_fl_ct()
};

function gsts2() {
    setTimeout("gst();", 200);
    var imgurl = mtdtr;
    img_cs1 = new Image();
    img_cs1.src = mtdtr2 + "cs1.png";
    img_cs1.onload = function() {
        gsts()
    };
    gldt_mx++;
    aft_gldt_mx = 0;
    aft_gldt_ld = 0;
    img_cs2 = new Image();
    img_cs2.src = mtdtr2 + "cs2.jpg";
    img_cs2.onload = function() {
        aft_gldt_ld++
    };
    aft_gldt_mx++;
    img_cs3 = new Image();
    img_cs3.src = mtdtr2 + "cs3.2.png";
    img_cs3.onload = function() {
        aft_gldt_ld++
    };
    aft_gldt_mx++;
    img_sk1 = new Image();
    img_sk1.src = mtdtr2 + "skin_parts1.jpg";
    img_sk1.onload = function() {
        gsts()
    };
    gldt_mx++;
    img_sk2 = new Image();
    img_sk2.src = mtdtr2 + "skin_parts2_n1.png";
    img_sk2.onload = function() {
        gsts()
    };
    gldt_mx++;
    img_flr = new Image();
    img_flr.src = mtdtr2 + "floor1024x2048.jpg";
    img_flr.onload = function() {
        gsts()
    };
    gldt_mx++
};
onorientationchange = function() {
    if (rttct == 0) {
        setTimeout("cvini();", 500);
        rttct = 200
    }
};

function rsz() {
    if (rttct == 0) {
        setTimeout("cvini();", 400);
        rttct = 200;
        setTimeout("thr_rsz();", 500)
    }
};

function thr_rsz() {
    width = Math.floor(jw);
    height = Math.floor(jh);
    lll = ww / width;
    renderer.setSize(width, height);
    camera = new THREE.PerspectiveCamera(40, width / height, 1, 900)
};

function cvini2(ii) {
    var ua = navigator.userAgent;
    jw = window.innerWidth;
    jh = window.innerHeight;
    if (dmd == 2) {
        window.onresize = rsz
    };
    if (ua.indexOf("Android") > -1 && ua.indexOf("Chrome") > -1) {};
    // if (jw / jh > .788) {
    //     jw = 640 * (jh / 815)
    // };
    // if (jw / jh < .51) {
    //     jh = jw / .51
    // };
    lt = .5;
    if (ua.indexOf("iPad") > -1 || (ua.indexOf("Android") > -1 && ua.indexOf("Mobile") == -1)) {
        lt = 1
    };
    if (dmd == 2) {
        lt = 1
    };
    ww = (jw / lt | 0);
    wh = (jh / lt | 0);
    ltl = (ww / 640);
    ptc_chx = 0;
    ptc_chy = ((wh / ltl) - 935) / 2.5 - 30;
    if (ww / wh > .76) {
        scr_mode = 1
    } else {
        scr_mode = 0
    };
    wdpr = lt
};

function btnst() {
    s_bty = wh / ltl - 180;
    if (dmd == 1) {
        s_bty = wh / ltl - 220;
        if (s_bty > 800) {
            s_bty = 800
        }
    };
    u_wh = s_bty * ltl;
    l_btx = 170;
    l_bty = s_bty + 92;
    pl_btx = l_btx;
    pl_bty = l_bty;
    r_btx = 640 - 170;
    r_bty = s_bty + 92
};

function cvini(ii) {
    rttct = 0;
    cvini2();
    spww = ww;
    spwh = wh;
    var stcv = '<canvas id="gcvs" width="' + spww + '" height="' + spwh + '" style="width:' + (spww * lt | 0) + 'px;height:' + (spwh * lt | 0) + 'px;"></canvas>';
    chf2.innerHTML = stcv;
    canvas = document.getElementById('gcvs');
    ctx = canvas.getContext('2d')
};

function sndf(i, vl) {
    if (imsd == 1) {
        try {} catch (e) {}
    } else {
        if (snd == 1) {
            try {
                var stsnd = aud.createBufferSource();
                var gnd = aud.createGain();
                stsnd.buffer = sndbf;
                stsnd.connect(gnd);
                gnd.gain.value = vl * vlm;
                gnd.connect(aud.destination);
                stsnd.start(0, snd_s[i], snd_l[i])
            } catch (e) {}
        }
    }
};

function er_anm_alt() {
    setTimeout("sndf(12,.5)", 800);
    er_anm = 200
};

function guid_s() {
    if (cont_flg == 0) {
        ptc_chy = ((wh / ltl) - 730) / 2.5;
        pt_ui("1/100/0/0#0#" + "320#550#10#10#0#0#0#0#0|" + "10#0#0#0#0#0#0#0#0#0#0|" + "12#2#0#-115#115#115#100#0#0#0#0|" + "5#2#0#20#100#90#90#0#0#0#0|" + "5#2#0#-12#105#105#100#0#0#0#0|" + "5#2#0#5#100#100#100#0#0#0#0|" + "63#0#0#0#100#100#100#0#0#0#0|");
        pt_ui("4/115/0/0#0#" + "365#250#100#100#0#0#0#0#0|" + "18#0#0#0#100#100#0#0#0#0#0|" + "4#0#0#-30#100#100#100#0#0#0#0|" + "77#0#0#0#100#100#100#0#0#0#0|");
        pt_ui("3/110/0/0#0#" + "355#550#100#100#0#0#0#0#0|" + "10#0#0#0#100#100#100#0#0#0#0|" + "9#2#0#-280#100#100#100#0#0#0#0|" + "4#0#0#-30#100#100#0#0#0#0#0|");
        pt_ui("6/120/0/0#0#" + "320#120#10#10#0#0#0#0#0|" + "13#0#0#0#10#10#0#0#0#0#0|" + "8#2#0#0#140#140#100#0#0#0#0|" + "3#2#0#0#80#80#100#0#0#0#0|" + "3#5#0#0#110#110#100#0#0#0#0|" + "3#5#0#0#100#100#100#0#0#0#0|" + "70#0#0#0#100#100#100#0#0#0#0|");
        ptc_chy = ((wh / ltl) - 680) / 2.5
    }
};

function guid_p() {
    if (cont_flg == 0) {
        var scr_pos = new THREE.Vector3();
        scr_pos.x = 35;
        scr_pos.y = 25;
        scr_pos.z = 157;
        scr_pos.project(camera);
        ptc_chx = (width / 2 * (scr_pos.x + 1)) * lll / ltl - 90;
        ptc_chy = (height / 2 * (-scr_pos.y + 1)) * lll / ltl - 390;
        pt_ui("2/100/0/0#0#" + "90#440#40#40#0#0#0#0#0|" + "10#0#0#0#40#40#0#0#0#0#0|" + "1#0#0#0#40#40#100#0#0#0#0|" + "15#2#0#0#200#200#0#0#0#0#0|");
        pt_ui("2/100/0/0#0#" + "90#440#40#40#0#0#0#0#0|" + "18#0#0#0#40#40#0#0#0#0#0|" + "1#0#0#0#40#40#100#0#0#0#0|" + "15#2#0#0#200#200#0#0#0#0#0|");
        pt_ui("4/110/0/0#0#" + "140#340#100#100#0#0#0#0#0|" + "10#0#0#60#100#100#100#0#0#0#0|");
        pt_ui("3/115/0/0#0#" + "130#400#100#100#0#0#0#0#0|" + "10#0#0#0#100#100#0#0#0#0#0|" + "1#0#0#0#100#100#100#0#0#0#0|" + "59#0#0#0#100#100#100#0#0#0#0|");
        pt_ui("7/120/0/0#0#" + "140#280#10#10#0#0#0#0#0|" + "13#0#0#0#10#10#0#0#0#0#0|" + "8#2#0#0#140#140#100#0#0#0#0|" + "3#2#0#0#80#80#100#0#0#0#0|" + "3#5#0#0#110#110#100#0#0#0#0|" + "3#5#0#0#100#100#100#0#0#0#0|" + "40#0#0#0#100#100#100#0#0#0#0|");
        ptc_chx = 0;
        ptc_chy = 0
    }
};

function init() {
    nwad_ct = 0;
    nwad_md = 0;
    tm = 0;
    mt = -1;
    flt = 60;
    flt_t = 60;
    flt_cl = 60;
    flt_c = 1;
    flt_r = 0;
    flt_scrn = 0;
    flt_erc = 0;
    u_ntm = 0;
    lnkurl = "http://splax.net";
    omd = 0;
    dmd = 1;
    gmwdl = 35;
    imsd = 0;
    chrmsh = 0;
    var nvua = navigator.userAgent;
    vzl_y = 0;
    ply_ap_md = 0;
    if (nvua.indexOf("Line") > -1 || nvua.indexOf("line") > -1 || nvua.indexOf("LINE") > -1) {
        var chktg = document.getElementById('tlk');
        if (chktg) {
            ply_ap_md = 1
        }
    };
    var touch_device = false;
    try {
        touch_device = 'ontouchend' in document
    } catch (e) {};
    if (touch_device || nvua.indexOf("iPhone") > -1 || nvua.indexOf("iPad") > -1 || nvua.indexOf("iPod") > -1 || nvua.indexOf("Android") > -1 || nvua.indexOf("Mobile") > -1 || nvua.indexOf("mobile") > -1 || nvua.indexOf("Kindle") > -1 || nvua.indexOf("Phone") > -1 || nvua.indexOf("BlackBerry") > -1 || nvua.indexOf("Symbian") > -1 || nvua.indexOf("iPod") > -1 || nvua.indexOf("Tizen") > -1) {
        dmd = 1;
        gmwdl = 35
    } else {
        dmd = 2;
        vzl_y = 10;
        gmwdl = 75;
        fsz = 11;
        nvua = navigator.userAgent.toLowerCase();
        if (nvua.indexOf("msie") > -1 || nvua.indexOf("trident") > -1) {
            fsz = 12;
            chrmsh = 1;
            imsd = 1
        };
        if (nvua.indexOf("firefox") > -1) {
            fsz = 12
        };
        if (nvua.indexOf("chrome") > -1) {
            fsz = 11
        }
    };
    dvid = 2;
    if (dmd == 2) {
        dvid = 3
    } else if (nvua.indexOf("iPhone") > -1 || nvua.indexOf("iPad") > -1 || nvua.indexOf("iPod") > -1) {
        dvid = 1
    };
    mtdtr = "images/";
    mtdtr2 = "images/";
    snd_mtdtr = "images/";
    snd_s = new Array(0, .5, .5, .5, .9, 1.3, 1.3, 1.68, 2.04, 2.4, 3.2, 3.4, 3.64, 4.38, 4.56, 7.48, 8.74, 10.36, 11.18, 11.46, 14.1);
    snd_l = new Array(.5, 0, 0, .4, .4, 0, .38, .36, .36, .8, .2, .24, .74, .18, 2.92, 1.26, 1.62, .82, .28, 2.64, 1.16);
    snd = 0;
    svlm = 1;
    vlm = 1.6;
    fsndpl = 0;
    try {
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        if (typeof window.AudioContext != "undefined") {
            aud = new AudioContext();
            sndbf = -1;
            xhrq = new XMLHttpRequest();
            xhrq.open("GET", snd_mtdtr + "sound_bsk.mp3", true);
            xhrq.responseType = "arraybuffer";
            xhrq.onload = function() {
                snd = 1;
                aud.decodeAudioData(xhrq.response, function(bf) {
                    sndbf = bf
                }, function() {
                    snd = 0
                })
            };
            xhrq.send()
        } else {}
    } catch (e) {};
    zmlv = 80;
    isw = 760;
    ish = 760;
    mwl = 1.6;
    s = -1;
    sork = 0;
    cvini();
    ldri = 0;
    if (dmd == 1) {
        document.addEventListener("touchstart", tev1, {
            passive: false
        });
        document.addEventListener("touchend", tev2, {
            passive: false
        });
        document.addEventListener("touchmove", tev3, {
            passive: false
        });
        document.addEventListener("touchcancel", tev4, {
            passive: false
        });
        document.addEventListener("gesturestart", tev4, {
            passive: false
        });
        document.addEventListener("gesturechange", tev4, {
            passive: false
        });
        document.addEventListener("gestureend", tev4, {
            passive: false
        })
    } else {;
        document.onmousedown = function(event) {
            if (imsd == 0 && fsndpl == 0) {
                aud.resume();
                fsndpl = 1
            };
            var mbth = event.buttons;
            var msbt_l = ((mbth & 0x0001) ? 1 : 0);
            var msbt_r = ((mbth & 0x0002) ? 1 : 0);
            var msbt_c = ((mbth & 0x0004) ? 1 : 0);
            lbtn = msbt_l;
            rbtn = msbt_r;
            tc_f["c" + 0] = {
                i: -1,
                f: tc_fi,
                s: -1,
                l: 1
            };
            omd = 1;
            var tchx = (event.pageX / wdpr | 0);
            var tchy = (event.pageY / wdpr | 0);
            pdo1(tchx, tchy, 0);
            var a_dcf = document.hasFocus();
            if (a_dcf) {
                event.preventDefault()
            };
            if (s == 1 && tchy < 100) {
                if (tchx < 320) {} else {}
            }
        };
        document.onmouseup = function(event) {
            var mbth = event.buttons;
            var msbt_l = ((mbth & 0x0001) ? 1 : 0);
            var msbt_r = ((mbth & 0x0002) ? 1 : 0);
            var msbt_c = ((mbth & 0x0004) ? 1 : 0);
            var ulbt = lbtn;
            var urbt = rbtn;
            lbtn = msbt_l;
            rbtn = msbt_r;
            omd = 0;
            var tchx = (event.pageX / wdpr | 0);
            var tchy = (event.pageY / wdpr | 0);
            pdo2(tchx, tchy, 0);
            event.preventDefault()
        };
        document.onmousemove = function(event) {
            var tchx = (event.pageX / wdpr | 0);
            var tchy = (event.pageY / wdpr | 0);
            musx = tchx;
            musy = tchy;
            if (omd == 1) {
                pdo3(tchx, tchy, 0)
            };
            event.preventDefault()
        };
        document.oncontextmenu = function(event) {
            event.preventDefault()
        }
    };
    ixta = new Array(0, 1357, 1758, 832, 502, 1556, 1559, 894, 667, 502, 1155, 1356, 2, 963, 745, 745, 252, 1160, 950, 854, 1687, 1775);
    iyta = new Array(0, 200, 2, 277, 292, 2, 118, 277, 292, 2, 2, 2, 2, 201, 2, 201, 2, 201, 2, 201, 167, 167);
    iwta = new Array(0, 200, 126, 60, 163, 200, 126, 60, 163, 241, 199, 198, 248, 195, 203, 107, 248, 195, 203, 107, 86, 86);
    ihta = new Array(0, 114, 163, 68, 33, 114, 163, 68, 33, 288, 197, 196, 336, 136, 197, 74, 336, 136, 197, 74, 171, 171);
    ixt = new Array(0, 2, 501, 780, 370, 571, 174, 571, 64, 232, 232, 910, 732, 721, 922, 922, 922, 583, 905, 651, 699, 490, 477, 878, 700, 774, 848, 774, 848, 551, 559, 64, 2, 370, 807, 656, 252, 2, 2, 194, 564, 632, 631, 625, 633, 693, 699, 700, 701, 768, 836, 904, 761, 767, 835, 903, 769, 829, 897, 837, 841, 875, 575, 364, 790, 580, 232, 232, 569, 252, 237, 580, 481, 769, 252, 2, 484, 571, 571, 194, 580, 252, 232, 232, 571, 237, 583, 526, 575, 2, 2, 633, 701);
    iyt = new Array(0, 714, 616, 152, 832, 197, 865, 131, 714, 506, 572, 83, 131, 206, 268, 343, 418, 596, 802, 385, 391, 506, 722, 158, 281, 253, 268, 363, 378, 698, 808, 844, 50, 722, 905, 2, 129, 2, 26, 722, 493, 493, 596, 699, 802, 699, 596, 493, 802, 473, 488, 493, 699, 596, 591, 596, 802, 699, 699, 802, 905, 905, 278, 912, 83, 316, 434, 470, 385, 50, 638, 50, 832, 905, 210, 644, 910, 197, 197, 825, 83, 280, 323, 381, 197, 675, 671, 381, 197, 300, 474, 905, 905);
    iwt = new Array(0, 60, 80, 96, 109, 2, 188, 159, 128, 256, 256, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 108, 248, 105, 32, 317, 317, 652, 652, 174, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 32, 32, 118, 118, 118, 118, 302, 302, 80, 326, 262, 32, 76, 36, 321, 233, 52, 2, 2, 174, 208, 321, 346, 292, 2, 240, 26, 41, 144, 228, 228, 66, 66);
    iht = new Array(0, 233, 80, 99, 78, 2, 64, 64, 128, 64, 64, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 100, 248, 108, 32, 79, 79, 22, 22, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 32, 32, 36, 36, 67, 67, 34, 34, 58, 77, 35, 23, 76, 38, 68, 68, 39, 2, 2, 38, 46, 41, 56, 51, 2, 45, 21, 40, 79, 172, 168, 44, 44);
    ixt3 = new Array(0, 792, 2, 829, 719, 719, 682, 499, 2, 1041, 251, 327, 2, 192, 382, 719, 934, 905, 152, 714, 719, 824, 401, 1031, 382, 168, 1094, 494, 572, 572, 604, 609, 682);
    iyt3 = new Array(0, 98, 416, 312, 2, 50, 2, 387, 266, 2, 415, 415, 2, 2, 2, 439, 202, 414, 266, 219, 329, 202, 408, 267, 266, 415, 2, 266, 2, 123, 244, 365, 98);
    iwt3 = new Array(0, 314, 164, 200, 320, 320, 32, 108, 148, 51, 74, 72, 188, 188, 188, 184, 184, 164, 228, 108, 108, 108, 96, 96, 110, 81, 36, 108, 108, 108, 108, 108, 108);
    iht3 = new Array(0, 102, 79, 100, 46, 46, 23, 108, 148, 51, 74, 72, 262, 262, 262, 63, 63, 53, 147, 108, 108, 108, 96, 96, 140, 76, 38, 119, 119, 119, 119, 119, 119);
    ts1_ix = new Array(0, 1089, 1225, 694, 1123, 1069, 751, 1157, 1099, 808, 1191, 1129, 865, 2, 472, 1159, 2, 694, 1255, 754, 96, 583, 1194, 2, 773, 1255, 894, 190, 922, 1229, 203, 852, 1255, 1034, 284, 1033, 1264, 203, 931, 931, 1174, 378, 1144, 1229, 404, 1010, 1000, 553, 605, 404);
    ts1_iy = new Array(0, 334, 334, 143, 334, 427, 143, 334, 427, 143, 334, 427, 143, 316, 300, 427, 2, 388, 143, 2, 316, 300, 427, 159, 388, 233, 2, 316, 143, 413, 2, 388, 323, 2, 316, 143, 413, 159, 334, 416, 2, 316, 143, 457, 2, 334, 416, 159, 2, 159);
    ts1_iw = new Array(0, 32, 28, 55, 32, 28, 55, 32, 28, 55, 32, 28, 55, 92, 109, 33, 199, 77, 67, 138, 92, 109, 33, 199, 77, 67, 138, 92, 109, 33, 199, 77, 67, 138, 92, 109, 33, 199, 77, 67, 138, 92, 109, 33, 199, 77, 67, 138, 147, 147);
    ts1_ih = new Array(0, 91, 72, 243, 91, 72, 243, 91, 72, 243, 91, 72, 243, 188, 189, 42, 155, 80, 88, 139, 188, 189, 42, 155, 80, 88, 139, 188, 189, 42, 155, 80, 88, 139, 188, 189, 42, 155, 80, 88, 139, 188, 189, 42, 155, 80, 88, 139, 139, 139);
    ts2_ix = new Array(0, 406, 464, 522, 580, 2, 208, 733, 555, 597, 555, 624, 639, 681, 723, 666, 708, 406, 406, 515, 624);
    ts2_iy = new Array(0, 193, 193, 193, 193, 2, 2, 2, 2, 52, 70, 120, 52, 52, 70, 120, 138, 2, 143, 143, 2);
    ts2_iw = new Array(0, 56, 56, 56, 56, 204, 196, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 147, 107, 107, 107);
    ts2_ih = new Array(0, 25, 25, 25, 25, 227, 225, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 139, 48, 48, 48);
    jix = new Array(0, 2, 2, 211, 420);
    jiy = new Array(0, 2, 726, 726, 726);
    jiw = new Array(0, 640, 207, 207, 207);
    jih = new Array(0, 722, 86, 86, 86);
    ixte = new Array(0, 2, 132, 262);
    iyte = new Array(0, 2, 2, 2);
    iwte = new Array(0, 128, 128, 128);
    ihte = new Array(0, 128, 128, 128);
    rm_f = {};
    rm_fi = 0;
    bf = new Array(2, 4);
    hntr = new Array(0, 1, 2, 3, 4, 3, 2, 1);
    var imld_stlg = "";
    if (navigator.language) {
        if (navigator.language.indexOf("ja") > -1) {
            lg = "ja"
        } else {
            lg = "en";
            imld_stlg = "en_"
        }
    };
    var nvua = navigator.userAgent.toLowerCase();
    var pgdu = document.URL;
    pllt = 1 / .74;
    var imgurl = mtdtr;
    gldt = 0;
    gldt_mx = 0;
    khfe = "";
    khfi = 0;
    khfe = "7a8";
    gldt++;
    inhn();
    rttct = 0;
    s = -1;
    gsts2()
};

function move_set(i, t, b, c, d) {
    c -= b;
    return ani_al(i, t, b, c, d)
};

function ani_al(i, t, b, c, d) {
    switch (i) {
        case 0:
            return b + c * t;
            break;
        case 1:
            return ani_i1(t, b, c, d);
            break;
        case 2:
            return ani_o1(t, b, c, d);
            break;
        case 3:
            return ani_io1(t, b, c, d);
            break;
        case 4:
            return ani_i7(t, b, c, d);
            break;
        case 5:
            return ani_o7(t, b, c, d);
            break;
        case 6:
            return ani_io7(t, b, c, d);
            break;
        default:
            break
    }
};

function ani_i1(t, b, c, d) {
    t /= d;
    return c * t * t + b
};

function ani_o1(t, b, c, d) {
    t /= d;
    return -c * t * (t - 2) + b
};

function ani_io1(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b
};

function ani_i2(t, b, c, d) {
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b
};

function ani_o2(t, b, c, d) {
    return c * Math.sin(t / d * (Math.PI / 2)) + b
};

function ani_io2(t, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b
};

function ani_i7(t, b, c, d) {
    t /= d;
    return -c * (Math.sqrt(1 - t * t) - 1) + b
};

function ani_o7(t, b, c, d) {
    t /= d;
    t--;
    return c * Math.sqrt(1 - t * t) + b
};

function ani_io7(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    t -= 2;
    return c / 2 * (Math.sqrt(1 - t * t) + 1) + b
};

function spt_anm_p(spi, lcx, lcy, rsw, rsh, tgr) {
    var sptx = ixt[spi];
    var spty = iyt[spi];
    var sptw = iwt[spi];
    var spth = iht[spi];
    var sptw2 = sptw * rsw;
    var spth2 = spth * rsh;
    if (tgr == 0) {
        ctx.drawImage(img_cs1, sptx, spty, sptw, spth, (lcx - sptw2 / 2) * ltl, (lcy - spth2 / 2) * ltl, sptw2 * ltl, spth2 * ltl)
    } else {
        ctx.save();
        tr(lcx, lcy);
        ctx.rotate(tgr * rad);
        ctx.drawImage(img_cs1, sptx, spty, sptw, spth, (0 - sptw2 / 2) * ltl, (0 - spth2 / 2) * ltl, sptw2 * ltl, spth2 * ltl);
        ctx.restore()
    }
};

function ani_al(i, t, b, c, d) {
    switch (i) {
        case 0:
            return b + c * t;
            break;
        case 1:
            return ani_i1(t, b, c, d);
            break;
        case 2:
            return ani_o1(t, b, c, d);
            break;
        case 3:
            return ani_io1(t, b, c, d);
            break;
        case 4:
            return ani_i7(t, b, c, d);
            break;
        case 5:
            return ani_o7(t, b, c, d);
            break;
        case 6:
            return ani_io7(t, b, c, d);
            break;
        default:
    }
};

function ttl_rnd(t_rx, t_ry, t_rr) {
    ttl_rx = 0;
    ttl_ry = 0;
    if (t_rx != 0) {
        ttl_rx = t_rx * 2 * Math.random() - t_rx
    };
    if (t_ry != 0) {
        ttl_ry = t_ry * 2 * Math.random() - t_ry
    };
    if (t_rr != 0) {
        var rd = t_rr * Math.random();
        var rdr = pi_cir * Math.random();
        ttl_rx += Math.cos(rdr) * rd;
        ttl_ry += Math.sin(rdr) * rd
    }
};

function pt_ui(st_dt) {
    var st_st_dt = "";
    var af_ar = st_dt.split("|");
    for (var i = 0; i < af_ar.length - 1; i++) {
        var st_af = af_ar[i].split("#");
        var rd = Math.floor(st_af[10]) * Math.random();
        var rdr = pi_cir * Math.random();
        var rx = Math.cos(rdr) * rd;
        var ry = Math.sin(rdr) * rd;
        var ttl_chx = ttl_rx;
        var ttl_chy = ttl_ry;
        if (i != 0) {
            ttl_chx = 0;
            ttl_chy = 0
        };
        for (var ii = 0; ii < 8; ii++) {
            switch (ii) {
                case 2:
                    var rr = Math.floor(st_af[8]);
                    st_st_dt += Math.floor((Math.floor(st_af[ii]) + (rr * 2 * Math.random() - rr)) + rx + ttl_chx) + "#";
                    break;
                case 3:
                    var rr = Math.floor(st_af[9]);
                    st_st_dt += Math.floor((Math.floor(st_af[ii]) + (rr * 2 * Math.random() - rr)) + ry + ttl_chy) + "#";
                    break;
                default:
                    st_st_dt += st_af[ii] + "#"
            }
        };
        if (st_af.length > 11) {
            st_st_dt += st_af[11]
        } else {
            st_st_dt += "N"
        };
        st_st_dt += "|"
    };
    pt_st(st_st_dt)
};

function pt_st(st_dt) {
    pt_f["c" + pt_fi] = {
        d: 0,
        j: 0,
        g: 0,
        gy: 0,
        x: 0,
        y: 0,
        w: 1,
        h: 1,
        f: 1,
        a: 1,
        r: 0,
        l: 1,
        c: 0,
        lt: 0,
        ac: 0,
        aac: 1,
        es: 0,
        tc: 0,
        tx: 0,
        ty: 0,
        tw: 0,
        th: 0,
        ta: 0,
        af: st_dt
    };
    var tg = pt_f["c" + pt_fi];
    var af_ar = tg.af.split("|");
    tg.aac = af_ar.length - 1;
    var st_af = af_ar[0].split("#");
    var st_df = st_af[0].split("/");
    tg.f = Math.floor(st_df[0]);
    tg.d = Math.floor(st_df[1]);
    tg.j = Math.floor(st_df[2]);
    tg.g = Math.floor(st_df[3]);
    tg.lt = Math.floor(st_af[1]);
    tg.x = Math.floor(st_af[2]) + ptc_chx;
    tg.y = Math.floor(st_af[3]) + ptc_chy;
    tg.w = Math.floor(st_af[4]);
    tg.h = Math.floor(st_af[5]);
    tg.a = Math.floor(st_af[6]);
    tg.r = Math.floor(st_af[7]);
    var st_af = af_ar[1].split("#");
    tg.tc = Math.floor(st_af[0]);
    tg.es = Math.floor(st_af[1]);
    if (st_af[8] != "N") {
        tg.tx = Math.floor(st_af[2]) - tg.x;
        tg.ty = Math.floor(st_af[3]) - tg.y
    } else {
        tg.tx = Math.floor(st_af[2]);
        tg.ty = Math.floor(st_af[3])
    };
    tg.tw = Math.floor(st_af[4]) - tg.w;
    tg.th = Math.floor(st_af[5]) - tg.h;
    tg.ta = Math.floor(st_af[6]) - tg.a;
    tg.tr = Math.floor(st_af[7]) - tg.r;
    pt_fi++
};

function ld_fl_ct() {
    ttl_ld_c++;
    if (fchk) {

    }
};
onload = function() {
    fchk = 1;
    ttl_ld_c = 1;
    thr_ch_ld = 0;
    if (fchk) {

            setTimeout("ainit();", 2)
     
    } else {
        setTimeout("ainit();", 2)
    }
};

function frd_cl() {;
    // var entryPoint = SAMAL.getEntryPointData();
    // if (null != entryPoint && SAMAL.SAEntryPointDataTransition.StartGameWithContextPlayer == entryPoint.transition) {;
    //     SAMAL.pickUpOpponentFromContextPlayer().then(function(obj) {}).catch(function(obj) {})
    // };
    // if (fchk) {
    //     SAMAL.getFriendUserIdListAsync().then(function(obj) {
    //         var url = spsv + "game/list.json";
    //         var param = {
    //             uid: SAMAL.player.getID(),
    //             f_uids: obj.data
    //         };
    //         return SAMAL.post(url, param)
    //     }).then(function(obj) {
    //         bns_tim = Math.floor(obj.data.bonus_remain_time);
    //         vs_friend_list = new Array();
    //         vs_recommend_list = new Array();
    //         var lst_st_lv = 1;
    //         users = obj.data.friend_list;
    //         if (obj.data.recommend_list && obj.data.recommend_list.length > 0) {
    //             var mx_lst_c = obj.data.recommend_list.length;
    //             if (mx_lst_c > 29) {
    //                 mx_lst_c = 29
    //             };
    //             for (var i = 0; i < mx_lst_c; i++) {
    //                 vs_recommend_list.push({
    //                     avt: avt_cd(obj.data.recommend_list[i].avatar_cd),
    //                     crw: obj.data.recommend_list[i].crown_id,
    //                     scr: obj.data.recommend_list[i].score,
    //                     lv: lst_st_lv,
    //                     nm: obj.data.recommend_list[i].name,
    //                     uid: obj.data.recommend_list[i].uid,
    //                     tm: obj.data.recommend_list[i].country,
    //                     pt: obj.data.recommend_list[i].win_pt,
    //                     pho_img: -1
    //                 });
    //                 vs_recommend_list[i].pho_img = new Image();
    //                 vs_recommend_list[i].pho_img.crossOrigin = 'anonymous';
    //                 vs_recommend_list[i].pho_img.src = obj.data.recommend_list[i].photo
    //             }
    //         };
    //         return replaceContextData()
    //     }).then(function() {
    //         return replaceConnectedPlayers()
    //     }).then(function() {
    //         var lst_st_lv = 1;
    //         if (users && users.length > 0) {
    //             var mx_lst_c = users.length;
    //             if (mx_lst_c > 29) {
    //                 mx_lst_c = 29
    //             };
    //             for (var i = 0; i < mx_lst_c; i++) {
    //                 vs_friend_list.push({
    //                     avt: avt_cd(users[i].avatar_cd),
    //                     crw: users[i].crown_id,
    //                     scr: users[i].score,
    //                     lv: lst_st_lv,
    //                     nm: users[i].name,
    //                     uid: users[i].uid,
    //                     tm: users[i].country,
    //                     pt: users[i].win_pt,
    //                     pho_img: -1
    //                 });
    //                 vs_friend_list[i].pho_img = new Image();
    //                 vs_friend_list[i].pho_img.crossOrigin = 'anonymous';
    //                 vs_friend_list[i].pho_img.src = users[i].photo
    //             }
    //         };
    //         vs_match_set();
    //         spsv_bk = 2
    //     }).catch(function(e) {
    //         console.log(e);
    //         console.log(e.message)
    //     })
    // }
};

function stt_sv() {
    ttr_ok = 0;
    ttr_ok_gd = 0;
    ttr_lv = 0;
    u_ttr_lv = 0;
    st_my_avt = 0;
    var rndm = Math.floor(Math.random() * 3);
    switch (rndm) {
        case 0:
            st_my_avt = 0;
            break;
        case 1:
            st_my_avt = 3;
            break;
        case 2:
            st_my_avt = 6;
            break;
        default:
    };
    un_dt_ld = 1;

};

function fb_spsv_ini() {;
    
};

function ainit() {
    bestSessionScore = 0;
    is_win = 0;
    is_frd = 0;
    o_uid = "";
    sd_st_get_coin = 0;
    bns_tim = -1;
    avt_shp_max = 30;
    avt_gt = new Array(avt_shp_max);
    avt_pr = new Array(avt_shp_max);
    var avt_pr_c = 0;
    for (var i = 0; i < avt_shp_max; i++) {
        switch (avt_pr_c) {
            case 0:
                avt_pr[i] = 30;
                break;
            case 1:
                avt_pr[i] = 100;
                break;
            case 2:
                avt_pr[i] = 300;
                break;
            default:
        };
        avt_pr_c++;
        if (avt_pr_c > 2) {
            avt_pr_c = 0
        }
    };
    for (var i = 1; i < avt_shp_max; i++) {
        avt_gt[i] = 0
    };
    dly_rank = -1;
    dly_rank_up = -1;
    video_lp_stop = 0;
    boost_shop_dlg = 0;
    boost_3p = 0;
    boost_dk = 0;
    boost_buy = 0;
    shop_dlg = 0;
    st_my_sla = 0;
    st_my_avt = 0;
    my_avt = st_my_avt;
    vs_nm = "CPU";
    vs_avt = 0;
    vs_id = -1;
    vs_pho_u = new Image();
    mypho = 0;
    mynm = "You";
    myid = "-";
    my_coin = 0;
    my_coin_a = 0;
    my_pho = new Image();
    unfm1 = Math.floor(Math.random() * avt_shp_max);
    u_unfm1 = unfm1;
    unfm2 = Math.floor(Math.random() * avt_shp_max);
    u_unfm2 = unfm2;
    ttr_ok = 0;
    ttr_ok_gd = 0;
    ttr_lv = 0;
    u_ttr_lv = 0;
    un_dt_ld = 0;
    hashKey = -1;
    bns_tim = 28800;
    bns_tm = Math.floor(+new Date() / 1000);
    bns_mt = bns_tm;
    dly_alt = 0;
    ad_id1 = "668857974026211_683232672588741";
    ad_id2 = "668857974026211_683233182588690";
    ad_idv = "668857974026211_669566603955348";
    ad_idv2 = "668857974026211_669566393955369";
    fb_ad_v = 0;
    fb_ad_v2 = 0;
    fb_ad_i1 = 0;
    fb_ad_i2 = 0;
    show_int1 = 0;
    show_int2 = 0;
    show_vtr1 = 0;
    show_vtr2 = 0;
    show_vtr_mode = 0;
    show_vtr_time = 0;
    vs_ply_wth_frd = 0;
    swgm_l = 0;
    mtch_ct = 0;
    sht_ct_ok = 0;
    spsv_bk = 0;
    menu_skip = 0;
    er_anm = 0;
    is_first = 0;
    lng_nvg();
    if (fchk) {
        stt_sv()
      
    } else {
        un_dt_ld = 1
    };
    init();
    adj_chk_mode = 0;
    adj_utm = 0;
    adj_ct = 0;
    adj_utm2 = 0;
    adj_lt = 8;
    flt_cnt = 0;
    flt_tim = +new Date();
    flt_low = 0;
    hd_tg_tm = 0;
    hd_tg_at = 0;
    hd_tg_am = 0;
    pose_set = new Array(16);
    pose_set[0] = {
        nm: "SHOOT_jump",
        f_pks: .00001,
        f_spd: .005,
        f_aft: .15,
        f_dmg: 0,
        s_b: 1,
        e_b: .1,
        e_idl: 1
    };
    pose_set[1] = {
        nm: "SHOOT_layup",
        f_pks: .00001,
        f_spd: .006,
        f_aft: .2,
        f_dmg: 0,
        s_b: 1,
        e_b: .1,
        e_idl: 1
    };
    pose_set[2] = {
        nm: "PASS_normal_right",
        f_pks: .00005,
        f_spd: .007,
        f_aft: .1,
        f_dmg: 0,
        s_b: 1,
        e_b: .1,
        e_idl: 1
    };
    pose_set[3] = {
        nm: "PASS_normal_left",
        f_pks: .00005,
        f_spd: .007,
        f_aft: .1,
        f_dmg: 0,
        s_b: 1,
        e_b: .1,
        e_idl: 1
    };
    pose_set[4] = {
        nm: "PASS_normal_center",
        f_pks: .00005,
        f_spd: .008,
        f_aft: .1,
        f_dmg: 0,
        s_b: 1,
        e_b: .1,
        e_idl: 1
    };
    pose_set[5] = {
        nm: "PASS_run_right",
        f_pks: .000001,
        f_spd: .005,
        f_aft: .15,
        f_dmg: 1,
        s_b: 1,
        e_b: .1,
        e_idl: 0
    };
    pose_set[6] = {
        nm: "PASS_run_left",
        f_pks: .000001,
        f_spd: .005,
        f_aft: .15,
        f_dmg: 0,
        s_b: 1,
        e_b: .1,
        e_idl: 0
    };
    pose_set[7] = {
        nm: "PASS_receive_center",
        f_pks: .00001,
        f_spd: .004,
        f_aft: .35,
        f_dmg: 0,
        s_b: 1,
        e_b: .1,
        e_idl: 1
    };
    pose_set[8] = {
        nm: "PASS_receive_center2",
        f_pks: .00001,
        f_spd: .004,
        f_aft: .3,
        f_dmg: 0,
        s_b: 1,
        e_b: .1,
        e_idl: 1
    };
    pose_set[9] = {
        nm: "PASS_receive_run_left",
        f_pks: .00001,
        f_spd: .007,
        f_aft: .05,
        f_dmg: 0,
        s_b: 1,
        e_b: .1,
        e_idl: 1
    };
    pose_set[10] = {
        nm: "PASS_receive_run",
        f_pks: .00001,
        f_spd: .007,
        f_aft: .05,
        f_dmg: 0,
        s_b: 1,
        e_b: .1,
        e_idl: 1
    };
    pose_set[11] = {
        nm: "TURN_left",
        f_pks: .00001,
        f_spd: .006,
        f_aft: .15,
        f_dmg: 1,
        s_b: 1,
        e_b: 1,
        e_idl: 0
    };
    pose_set[12] = {
        nm: "TURN_right",
        f_pks: .00001,
        f_spd: .006,
        f_aft: .15,
        f_dmg: 1,
        s_b: 1,
        e_b: 1,
        e_idl: 0
    };
    pose_set[13] = {
        nm: "DRIBBLE_V_right",
        f_pks: .000001,
        f_spd: .005,
        f_aft: .2,
        f_dmg: 0,
        s_b: .1,
        e_b: 1,
        e_idl: 1
    };
    pose_set[14] = {
        nm: "SHOOT_dunk1",
        f_pks: .000001,
        f_spd: .006,
        f_aft: .35,
        f_dmg: 0,
        s_b: 1,
        e_b: .1,
        e_idl: 1
    };
    pose_set[15] = {
        nm: "PASS_bound_right",
        f_pks: .000001,
        f_spd: .008,
        f_aft: .1,
        f_dmg: 0,
        s_b: 1,
        e_b: .1,
        e_idl: 1
    };
    pose_set[16] = {
        nm: "PASS_bound_left",
        f_pks: .000001,
        f_spd: .008,
        f_aft: .1,
        f_dmg: 0,
        s_b: 1,
        e_b: .1,
        e_idl: 1
    };
    pose_set[17] = {
        nm: "DEFENCE_block1",
        f_pks: .000001,
        f_spd: .006,
        f_aft: .25,
        f_dmg: 0,
        s_b: 1,
        e_b: .1,
        e_idl: 1
    };
    pose_set[18] = {
        nm: "DEFENCE_mark1",
        f_pks: .00005,
        f_spd: .003,
        f_aft: .25,
        f_dmg: 0,
        s_b: .1,
        e_b: .1,
        e_idl: 1
    };
    pose_set[19] = {
        nm: "DEFENCE_mark2",
        f_pks: .00005,
        f_spd: .003,
        f_aft: .15,
        f_dmg: 1,
        s_b: .1,
        e_b: .1,
        e_idl: 1
    };
    pose_set[20] = {
        nm: "DEFENCE_mark3",
        f_pks: .00005,
        f_spd: .003,
        f_aft: .15,
        f_dmg: 0,
        s_b: .1,
        e_b: .1,
        e_idl: 1
    };
    pose_set[21] = {
        nm: "SHOOT_dunk2",
        f_pks: .000001,
        f_spd: .0055,
        f_aft: 5.45,
        f_dmg: 0,
        s_b: 1,
        e_b: .1,
        e_idl: 1
    };
    pose_set[22] = {
        nm: "REBOUND1",
        f_pks: .00005,
        f_spd: .005,
        f_aft: .2,
        f_dmg: 0,
        s_b: 1,
        e_b: .1,
        e_idl: 1
    };
    pose_set[23] = {
        nm: "CROSS",
        f_pks: .000001,
        f_spd: .005,
        f_aft: .05,
        f_dmg: 0,
        s_b: 1,
        e_b: .1,
        e_idl: 1
    };
    pose_set[24] = {
        nm: "PASS_receive_center2",
        f_pks: .00001,
        f_spd: .004,
        f_aft: .05,
        f_dmg: 0,
        s_b: 1,
        e_b: .1,
        e_idl: 1
    };
    tch_l = 0;
    tp = 0;
    p2 = Math.PI / 2;
    time = .5416;
    st_tcx = -1;
    st_tcy = -1;
    st_mcx = -1;
    st_mcy = -1;
    cmr_d = -60;
    width = Math.floor(jw);
    height = Math.floor(jh);
    lll = ww / width;
    renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#myCanvas'),
        antialias: true
    });
    var pixl_rt = 1.5;
    var nvua = navigator.userAgent;
    if (nvua.indexOf("Android") > -1) {
        pixl_rt = 1
    };
    if (nvua.indexOf("iPad") > -1 || (nvua.indexOf("Android") > -1 && nvua.indexOf("Mobile") == -1)) {
        pixl_rt = .7
    };
    renderer.setPixelRatio(pixl_rt);
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.gammaOutput = true;
    renderer.gammaFactor = 2.2;
    mx_anst = renderer.getMaxAnisotropy();
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    scene.fog = new THREE.Fog(0xcce0ff, 1000, 1001);
    camera = new THREE.PerspectiveCamera(40, width / height, 1, 850);
    camera.position.set(0, 20, 0);
    scene.add(new THREE.AmbientLight(0xffffff));
    var light = new THREE.DirectionalLight(0xdfebff, 1);
    light.position.set(50, 200, 100);
    light.position.multiplyScalar(1.3);
    light.castShadow = true;
    light.shadow.mapSize.width = 512 * 1;
    light.shadow.mapSize.height = 512 * 1;
    var d = 400;
    light.shadow.camera.left = -d;
    light.shadow.camera.right = d;
    light.shadow.camera.top = d;
    light.shadow.camera.bottom = -d;
    light.shadow.camera.far = 1000;
    ring = 256 / 2;
    scene.add(light);;
    var flr_siz = 333.5;
    floor = new THREE.Mesh(new THREE.PlaneBufferGeometry(flr_siz, flr_siz * 1.6636, 2, 2), new THREE.MeshStandardMaterial({
        roughness: 1,
        emissive: 0x000000
    }));
    floor.rotation.x = -Math.PI / 2;
    scene.add(floor);
    loader = new THREE.GLTFLoader();
    loader.load(mtdtr2 + 'parts1.glb', function(gltf) {
        parts = gltf.scene;
        animations_net = gltf.animations;
        var chpt = parts.getObjectByName("BALL");
        ball = chpt;
        var bl_siz = 8 * .92;
        ball.scale.set(bl_siz, bl_siz, bl_siz);
        ball.position.set(0, 0, -230);
        ball.rotation.set(0, 0, 0);
        scene.add(ball);
        var chpt = parts.getObjectByName("GOAL");
        chpt.material.side = 2;
        goal = chpt;
        goal.scale.set(16, 16, 16);
        goal.position.set(0, 1, ring * 2 - 65);
        goal.rotation.set(0, m_pi, 0);
        scene.add(goal);
        var chpt = parts.getObjectByName("NET");
        goal_r = chpt;
        goal_r.scale.set(16, 16, 16);
        goal_r.position.set(0, 1, ring * 2 - 65 - 0.375193 * 16);
        goal_r.rotation.set(0, m_pi, 0);
        scene.add(goal_r);
        var chpt = goal_r.getObjectByName("GOAL_ring");
        chpt.material.side = 2;
        chpt.material.map.anisotropy = mx_anst;
        var chpt = parts.getObjectByName("GOAL_board");
        var chpt2 = parts.getObjectByName("GOAL_board");
        chpt.material = chpt2.material.clone();
        chpt.material.transparent = true;
        chpt.material.map.anisotropy = mx_anst;
        goal_b = chpt;
        goal_b.scale.set(16, 16, 16);
        goal_b.position.set(0, 1, ring * 2 - 65);
        goal_b.rotation.set(0, m_pi, 0);
        scene.add(goal_b);
        net_anm = new THREE.AnimationMixer(goal_r);
        net_anm_act = net_anm.clipAction(animations_net[anim_name_net(animations_net, "BASIC")]);
        net_anm_act.setLoop(THREE.LoopOnce);
        net_anm_act.clampWhenFinished = true;
        net_anm_act.play();
        net_anm_act.time = 0;
        net_anm.update(0);
        net_anm_c = 0;
        m_ld();
        rad = Math.PI / 180;
        pi_cir = Math.PI * 2;
        ttl_rx = 0;
        ttl_ry = 0;
        pft = 1;
        ptf = 0;
        ptch = 0;
        pt_f = {};
        pt_fi = 0;
        slty = -1;
        slwy = 0;
        aslwy = 0;
        slay = 0;
        slwh = 0;
        slrk = 0;
        uni_buy_anm = 0;
        sys_wt_ct = 0;
        rst_ct = 0;
        bns_flg = 0;
        bout_ct = 0;
        cstm_scr = 0;
        ldng_ct = 0;
        absl_x = 0;
        absl_y = 0;
        cont_use = 0;
        cont_flg = 0;
        cont_anm = 0;
        sht_rr = -99;
        rs_get_coin = 0;
        rs_stk_coin = 0;
        rs_flg = 0;
        rs_flg_s = 0;
        rs_as = 0;
        rs_ac = 0;
        rs_anm = 0;
        dnk_cm_x = 0;
        bz_gv_c = 0;
        rslt_a = 0;
        one_bnd = 0;
        sk_fc = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        shoes = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        for (var i = 1; i < 10; i++) {
            shoes[i] = Math.floor(Math.random() * 4) + 1
        };
        for (var i = 1; i < 6; i++) {
            sk_fc[i] = i;
            sk_fc[i + 5] = i
        };
        var sk_fc_es = 0;
        var sk_fc_i1 = 0;
        var sk_fc_i2 = 0;
        for (var i = 1; i < 25; i++) {
            sk_fc_i1 = Math.floor(Math.random() * 5) + 1;
            sk_fc_i2 = Math.floor(Math.random() * 5) + 1;
            sk_fc_es = sk_fc[sk_fc_i1];
            sk_fc[sk_fc_i1] = sk_fc[sk_fc_i2];
            sk_fc[sk_fc_i2] = sk_fc_es;
            sk_fc_i1 = Math.floor(Math.random() * 5) + 6;
            sk_fc_i2 = Math.floor(Math.random() * 5) + 6;
            sk_fc_es = sk_fc[sk_fc_i1];
            sk_fc[sk_fc_i1] = sk_fc[sk_fc_i2];
            sk_fc[sk_fc_i2] = sk_fc_es
        };
        u_pt_fi = 0;
        scr_eft_c = 0;
        lng_sht_p = 0;
        sht_tim_r = 0;
        sht_qlk = 0;
        sht_aft_tm = 0;
        sht_qlk_tm = 0;
        sht_qlk_al = 0;
        sht_qlk_stp = -1;
        blk_lv = 0;
        blk_hit = 0;
        def_rsp = 0;
        def_spd = .7;
        bll_bnd = 0;
        fst_lng = 0;
        gt_sht_scr = 0;
        gt_sht_scr2 = 0;
        ttl_sht_scr = 0;
        ttl_sht_scr_a = 0;
        sht_blk = 0;
        sht_blk_i = -1;
        pss_ct = 0;
        lst_ps = 0;
        mis_stg = 0;
        gd_anm_a = 1;
        pg_bl_kp = 0;
        sht_def = 0;
        bsk_gd1 = 0;
        bsk_gd2 = 0;
        ofc_mgn = 0;
        stt_tim = 0;
        dnk_sht = 0;
        dnk_lst = 0;
        dnk_x = 0;
        dnk_z = 0;
        ps_tp_y = -99;
        th_set_i = -1;
        fm_chg_c = 0;
        sht_lt = new Array(90, 45.25139664804469, 30.335816237360078, 22.878491532935648, 18.40446907847381, 15.422097714131542, 13.292098364769789, 11.694831487016327, 10.452719551620522, 9.459216036395638, 8.646518604829353, 7.969425695389355, 7.396643915765145, 6.9058208395779195, 6.480564684406784, 6.108581610555378, 5.780470443783476, 5.48891915712827, 5.228155095308619, 4.9935601318082306, 4.781395781078123, 4.588603280138597, 4.412655822806956, 4.25144773536846, 4.1032102500864145, 3.9664467155946914, 3.839882204980955, 3.722423922137901, 3.613129799904034, 3.5111833785764146, 3.4158735466468753, 3.326578080150314, 3.242750174858867, 3.1639073551478116, 3.0896222841988505, 3.019515105836289, 2.953247028227711, 2.8905149206846534, 2.831046741724805, 2.774597652924965, 2.7209467014785456, 2.6698939766735044, 2.62125816314089, 2.574874427751394, 2.5305925882591, 2.4882755208178735, 2.447797770793599, 2.4090443372249633, 2.37190960612584, 2.3362964117914617, 2.302115208539223, 2.2692833380179143, 2.237724379463147, 2.2073675721466772, 2.1781473008313155, 2.1500026363557296, 2.1228769245787924, 2.0967174178469836, 2.0714749439397355, 2.0471036081202962, 2.0235605244931123, 2.0008055733589343, 1.9788011816790056, 1.957512124120779, 1.9369053424686893, 1.91694978145217, 1.897616239275682, 1.8788772313373077, 1.860706865797943, 1.8430807298160259, 1.8259757853962673, 1.8093702739176916, 1.7932436285087219, 1.777576393527024, 1.7623501504809924, 1.747547449799577, 1.733151747918773, 1.7191473492076452, 1.7055193523050616, 1.6922536004812014, 1.6793366356760158, 1.6667556559007537, 1.654498475718923, 1.6425534895500638, 1.6309096375638694, 1.6195563739538088, 1.6084836373987996, 1.5976818235388786, 1.5871417593064676, 1.576854678968907, 1.5668122017506247, 1.5570063109147445, 1.547429334194291, 1.5380739254724798, 1.5289330476200629, 1.5199999564053535, 1.5112681853995253, 1.5027315318060903, 1.4943840431492126, 1.4862200047607366);
        pss_lt = new Array(1.1111111111111112, 2.2098765432098766, 3.2964334705075444, 4.370917543057461, 5.433462903690156, 6.484202204760265, 7.523266624707373, 8.550785884432846, 9.566888263494704, 10.571700616122541, 11.565348387054513, 12.547955627198352, 13.51964500911837, 14.480537842350389, 15.430754088546495, 16.370412376451533, 17.299630016713184, 18.21852301652748, 19.127206094121618, 20.02579269307582, 20.91439499648609, 21.79312394096958, 22.66208923051436, 23.52139935017531, 24.37116157961781, 25.211482006510945, 26.042465539771936, 26.86421592266336, 27.676835745744878, 28.480426459681045, 29.275088387906813, 30.060920739152294, 30.83802161982838, 31.60648804627473, 32.36641595687168, 33.117900224017546, 33.86103466597291, 34.59591205857321, 35.322624146811286, 36.04126165629116, 36.751914304554596, 37.45467081228177, 38.14961891436753, 38.836845370874556, 39.51643597786484, 40.18847557811078, 40.85304807168733, 41.51023642644636, 42.160122688374734, 42.802787991837235, 43.43831256970571, 44.066775763375645, 44.68825603267147, 45.30283096564178, 45.91057728824576, 46.51157087393192, 47.105886753110454, 47.69359912252034, 48.27478135449233, 48.84950600610909, 49.41784482826343, 49.979868774616065, 50.53564801045366, 51.085251921448624, 51.628749122321416, 52.166207465406735, 52.697694049124436, 53.223275226356385, 53.7430166127302, 54.25698309481098, 54.76523883820197, 55.26784729555528, 55.76487121449355, 56.256372645443626, 56.742412949383144, 57.22305280550111, 57.69835221877332, 58.16837052745362, 58.63316641048191, 59.09279789480989, 59.54732236264534, 59.99679655861595, 60.44127659685355, 60.88081796799962, 61.31547554613296, 61.74530359562037, 62.17035577789125, 62.59068515813691, 63.006344211935385, 63.41738483180277, 63.82385833367163, 64.22581546329751, 64.6233064025942, 65.01638077589871, 65.4050876561665, 65.78947557109798, 66.16959250919689, 66.54548592576137, 66.91720274880846, 67.28478938493281, 67.64829172510022, 68.00775515037688, 68.36322453759492, 68.71474426495497, 69.06235821756658, 69.40610979292696, 69.74604190633887, 70.08219699626844, 70.41461702964322, 70.74334350709164, 71.06841746812395, 71.38987949625592, 71.70776972407529, 72.02212783825223, 72.33299308449388, 72.64040427244394, 72.9443997805279, 73.24501756074426, 73.54229514340265, 73.8362696418093, 74.1269777569003, 74.41445578182363, 74.69873960647004, 74.9798647219537, 75.2578662250431, 75.53277882254262, 75.80463683562549, 76.07347420411854, 76.33932449073944, 76.60222088528678, 76.8621962087836, 77.11928291757489, 77.37351310737962, 77.62491851729763, 77.8735305337721, 78.11938019450797, 78.36249819234676, 78.60291487909846, 78.8406602693307, 79.07576404411591, 79.30825555473685, 79.53816382635088, 79.76551756161365, 79.99034514426239, 80.21267464265948, 80.4325338132966, 80.64995010425997, 80.86495065865708, 81.07756231800533, 81.28781162558305, 81.49572482974324, 81.70132788719053, 81.90464646622175, 82.1057059499304, 82.30453143937561, 82.50114775671588, 82.69557944830792, 82.88785078777117, 83.07798577901816, 83.2660081592513, 83.45194140192629, 83.63580871968267, 83.81763306724176, 83.99743714427241, 84.17524339822494, 84.35107402713355, 84.52495098238762, 84.6968959714722, 84.86693046067806, 85.03507567778163, 85.20135261469517, 85.36578203008744, 85.52838445197536, 85.68918018028674, 85.84818928939467, 86.00543163062362, 86.1609268347278, 86.31469431434193, 86.46675326640481, 86.61712267455587, 86.76582131150525, 86.91286774137741, 87.05828032202878, 87.20207720733957, 87.34427634948024, 87.48489550115268, 87.62395221780653, 87.76146385983091, 87.89744759472168, 88.03192039922477, 88.16489906145561, 88.296400182995, 88.42644018096172, 88.55503529006215, 88.68220156461702, 88.80795488056572, 88.93231093744832, 89.05528526036557, 89.17689320191705, 89.29714994411798, 89.41607050029444, 89.53366971695783, 89.6499622756583, 89.76496269481765, 89.8786853315419, 89.99114438341365, 90.10235389026461, 90.21232773592834, 90.32107964997358, 90.42862320941832, 90.53497184042479, 90.64013881997562, 90.74413727753145, 90.84698019666999, 90.94868041670699, 91.04925063429914, 91.14870340502915, 91.24705114497327, 91.34430613225135, 91.44048050855966, 91.53558628068677, 91.62963532201248, 91.72263937399012, 91.81461004761245, 91.9055588248612, 91.99549706014052, 92.08443598169451, 92.17238669300902, 92.25936017419781, 92.34536728337339, 92.43041875800257, 92.514525216247, 92.5976971582887, 92.67994496764105, 92.76127891244504, 92.8417091467512, 92.9212457117873, 92.99989853721188, 93.07767744235397, 93.15459213743893, 93.23065222480072, 93.30586720008071, 93.38024645341315, 93.45379927059744, 93.52653483425748, 93.59846222498794, 93.66959042248807, 93.73992830668264, 93.80948465883061, 93.87826816262138, 93.94628740525893, 94.01355087853383, 94.08006697988345, 94.14584401344031, 94.21089019106876, 94.27521363339021, 94.33882237079699, 94.4017243444548, 94.4639274072942, 94.52543932499093, 94.58626777693547, 94.64642035719174, 94.70590457544517, 94.76472785794023, 94.82289754840755, 94.88042090898081, 94.93730512110325, 94.99355728642432, 95.04918442768627, 95.10419348960087, 95.15859133971642, 95.21238476927513, 95.26558049406097, 95.31818515523807, 95.37020532017986, 95.42164748328898, 95.472518066808, 95.52282342162124, 95.57256982804768, 95.62176349662492, 95.67041056888465, 95.71851711811927, 95.76608915014016, 95.81313260402749, 95.85965335287163, 95.9056572045064, 95.9511499022341, 95.99613712554262, 96.04062449081437, 96.08461755202754, 96.12812180144945, 96.17114267032224, 96.21368552954088, 96.25575569032377, 96.29735840487572, 96.33849886704377, 96.3791822129655, 96.41941352171033, 96.45919781591354, 96.49854006240339, 96.53744517282114, 96.57591800423424, 96.61396335974275, 96.65158598907895, 96.6887905892003, 96.72558180487584, 96.76196422926611, 96.7979424044965, 96.83352082222432, 96.86870392419961, 96.90349610281962, 96.93790170167718, 96.97192501610299, 97.00557029370184, 97.03884173488292, 97.07174349338422, 97.10427967679107, 97.13645434704894, 97.16827152097062, 97.19973517073761, 97.23084922439608, 97.26161756634724, 97.29204403783227, 97.32213243741191, 97.35188652144066, 97.38131000453576, 97.41040656004093, 97.43917982048491, 97.46763337803507, 97.49577078494579, 97.52359555400194, 97.55111115895748, 97.57832103496906, 97.60522857902497, 97.63183715036914, 97.65815007092058, 97.68417062568814, 97.7099020631805, 97.73534759581182, 97.76051040030279, 97.78539361807721, 97.81000035565413, 97.83433368503574, 97.8583966440909, 97.88219223693433, 97.90572343430172, 97.92899317392059, 97.95200436087703, 97.97475986797839, 97.99726253611196, 98.0195151745996, 98.0415205615485, 98.06328144419795, 98.08480053926242, 98.10608053327061, 98.12712408290093, 98.14793381531315, 98.16851232847634, 98.18886219149327, 98.20898594492112, 98.22888610108866, 98.2485651444099, 98.26802553169424, 98.2872696924532, 98.30630002920371, 98.32511891776811, 98.34372870757069, 98.36213172193102, 98.38033025835401, 98.39832658881674, 98.4161229600521, 98.4337215938293, 98.4511246872312, 98.46833441292863, 98.48535291945164, 98.50218233145773, 98.5188247499971, 98.5352822527749, 98.55155689441074, 98.56765070669506, 98.58356569884289, 98.59930385774463, 98.61486714821413, 98.63025751323397, 98.64547687419804, 98.6605271311514, 98.6754101630275, 98.69012782788275, 98.7046819631285, 98.7190743857604, 98.73330689258528, 98.74738126044544, 98.76129924644049, 98.77506258814671, 98.78867300383396, 98.80213219268025, 98.8154418349838, 98.82860359237287, 98.84161910801318, 98.85449000681302, 98.86721789562621, 98.87980436345259, 98.89225098163645, 98.90455930406272, 98.9167308673509, 98.928767191047, 98.94066977781314, 98.95244011361521, 98.96407966790838, 98.97558989382051, 98.98697222833361, 98.99822809246324, 99.00935889143587, 99.02036601486435);
        psj_lt = new Array(0.2, 0.23, 0.25, 0.28, 0.31, 0.34, 0.36, 0.39, 0.42, 0.45, 0.47, 0.5, 0.53, 0.56, 0.58, 0.61, 0.64, 0.67, 0.69, 0.72, 0.75, 0.78, 0.8, 0.83, 0.86, 0.89, 0.91, 0.94, 0.97, 1, 1.02, 1.05, 1.08, 1.11, 1.13, 1.16, 1.19, 1.22, 1.24, 1.27, 1.3, 1.32, 1.35, 1.38, 1.41, 1.44, 1.46, 1.49, 1.52, 1.54, 1.57, 1.6, 1.63, 1.65, 1.68, 1.71, 1.74, 1.76, 1.79, 1.82, 1.85, 1.87, 1.9, 1.93, 1.96, 1.98, 2.01, 2.04, 2.07, 2.09, 2.12, 2.15, 2.18, 2.2, 2.23, 2.26, 2.29, 2.32, 2.34, 2.37, 2.4, 2.43, 2.45, 2.48, 2.51, 2.54, 2.56, 2.59, 2.62, 2.65, 2.67, 2.7, 2.73);
        psb_lt = new Array(-60, -17.59, -8.77, -5.81, -4.31, -3.4, -2.79, -2.34, -2, -1.73, -1.51, -1.32, -1.16, -1.02, -0.89, -0.78, -0.68, -0.59, -0.51, -0.43, -0.37, -0.32, -0.29, -0.28, -0.26, -0.23, -0.22, -0.21, -0.18, -0.16, -0.15, -0.12, -0.07, -0.01, 0.01, 0.02, 0.04, 0.06);
        v_dbl = 0;
        cm_cnt = 0;
        sht_typ = 0;
        bx = 0;
        by = 0;
        bz = 0;
        b_j = -99;
        b_s = 0;
        b_ti = -1;
        b_tx = -1;
        b_tz = -1;
        b_c = 0;
        b_cx = 0;
        b_cz = 0;
        b_gl = 0;
        b_lt = 1;
        b_fst = 0;
        b_brd = 0;
        b_cmy = 0;
        b_snd_t = 0;
        sht_q = 0;
        sht_r = 0;
        gl_x = 0;
        gl_y = 48;
        gl_z = ring * 2 - 71;
        cmr_h_zm = 80;
        ld_fl_ct()
    })
};

function m_ld() {
    loader.load(mtdtr2 + 'player10.glb', function(gltf) {
        mms = gltf.scene;
        animations = gltf.animations;
        mms.position.set(50, 10000, 10000);
        mms.visible = false;
        thr_ch_ld = 1;
        ld_fl_ct()
    })
};

function ofc_stt(tg) {
    tg.act[0].setEffectiveWeight(1);
    tg.act[1].setEffectiveWeight(0);
    tg.act[2].setEffectiveWeight(0);
    tg.act_t = 0;
    tg.dsp = .2;
    tg.msp = 1;
    tg.s = 1;
    trn_set(tg)
};

function ofc_chg(tg) {
    pl_pst[tg.pst] = -1;
    switch (tg.pst) {
        case 1:
            var st_rdp = new Array(2, 7);
            break;
        case 2:
            var st_rdp = new Array(1, 7, 8, 3);
            break;
        case 3:
            var st_rdp = new Array(2, 4, 8, 9, 1, 5, 7, 6);
            break;
        case 4:
            var st_rdp = new Array(5, 6, 9, 3);
            break;
        case 5:
            var st_rdp = new Array(6, 4);
            break;
        case 6:
            var st_rdp = new Array(5, 4, 7, 3);
            break;
        case 7:
            var st_rdp = new Array(1, 2, 6, 3);
            break;
        case 8:
            var st_rdp = new Array(1, 2, 3, 9);
            break;
        case 9:
            var st_rdp = new Array(5, 4, 3, 8);
            break;
        default:
    };
    var ec = 0;
    var e = 0;
    while (e == 0) {
        var st_pi = st_rdp[Math.floor(Math.random() * st_rdp.length)];
        if (pl_pst[st_pi] == -1) {
            tg.pst = st_pi;
            set_pst(tg);
            e = 1
        };
        ec++;
        if (ec > 130) {
            e = 1
        }
    };
    tg.act[0].setEffectiveWeight(1);
    tg.act[1].setEffectiveWeight(0);
    tg.act[2].setEffectiveWeight(0);
    tg.act_t = 0;
    tg.dsp = .2;
    tg.msp = 1;
    tg.s = 1;
    trn_set(tg)
};

function def_chg(i, tg) {
    var d_Rds = 99999;
    var d_i = 6;
    var ttg;
    for (var i2 = 1; i2 < 6; i2++) {
        ttg = bp_f["c" + i2];
        if (tg.z > -250) {
            var Rx = ttg.x - tg.x;
            var Ry = ttg.z - tg.z;
            var Rds = Math.sqrt(Math.pow(Rx, 2) + Math.pow(Ry, 2));
            if (d_Rds > Rds && mk_num[i2] == -1 && ttg != pg && ttg.z > -210) {
                d_Rds = Rds;
                d_i = i2;
                var Rx = gl_x - ttg.tgx;
                var Ry = gl_z - ttg.tgz;
                var Rr = Math.atan2(Ry, Rx);
                var Rd = 35;
                tg.tgx = ttg.tgx + Math.cos(Rr) * Rd;
                tg.tgz = ttg.tgz + Math.sin(Rr) * Rd;
                if (tg.tgz > 180) {
                    tg.tgz = 180
                }
            }
        }
    };
    mk_num[d_i] = i;
    tg.pst = d_i
};

function thr_pnt_hnt(tg) {
    var thr_pnt_h = 0;
    if (tg.z > 140) {
        if (Math.abs(tg.x) > 96) {
            thr_pnt_h = 1
        }
    } else {
        var Rx = 0 - tg.x;
        var Ry = 170 - tg.z;
        var Rds = Math.sqrt(Math.pow(Rx, 2) * 1.17 + Math.pow(Ry, 2));
        if (Rds > 93) {
            thr_pnt_h = 1
        }
    };
    return thr_pnt_h
};

function mrk_r(tg, tnhn, hn_pgn) {
    mk_num[tg.pst] = -1;
    var d_Rds = 999999;
    var d_i = 1;
    var ttg;
    for (var i2 = 1; i2 < 6; i2++) {
        ttg = bp_f["c" + i2];
        if (tg.z > -250 && (hn_pgn == 1 || i2 > 1)) {
            var Rx = ttg.x - tg.x;
            var Ry = ttg.z - tg.z;
            var Rds = Math.sqrt(Math.pow(Rx, 2) + Math.pow(Ry, 2));
            if (d_Rds > Rds && mk_num[i2] == -1 && ttg.z > -210) {
                d_Rds = Rds;
                d_i = i2
            }
        }
    };
    var ttg2 = bp_f["c" + d_i];
    mk_num[d_i] = tg.i;
    tg.pst = d_i;
    ttg = bp_f["c" + d_i];
    var Rx = gl_x - ttg.tgx;
    var Ry = gl_z - ttg.tgz;
    var Rr = Math.atan2(Ry, Rx);
    var Rd = 35;
    var st_tgx = ttg.tgx + Math.cos(Rr) * Rd;
    var st_tgz = ttg.tgz + Math.sin(Rr) * Rd;
    if (st_tgz > 180) {
        st_tgz = 180
    };
    var Rx = tg.tgx - tg.x;
    var Ry = tg.tgz - tg.z;
    var Rds = Math.sqrt(Math.pow(Rx, 2) + Math.pow(Ry, 2));
    if (tg.pst == pg.i) {
        epg = tg
    } else if (sht_blk == 0) {
        tg.tgx = st_tgx;
        tg.tgz = st_tgz;
        if (Rds > 25) {
            if (tg.tnt == 0) {
                lp_act_set(tg, 1);
                tg.act[0].setEffectiveWeight(1);
                tg.act[1].setEffectiveWeight(0);
                tg.act[2].setEffectiveWeight(0);
                tg.act[3].setEffectiveWeight(0);
                tg.act_t = 0;
                tg.dsp = .2;
                tg.msp = def_spd;
                tg.s = 1;
                if (tnhn == 0) {
                    trn_set(tg)
                }
            }
        } else {
            tg.dsp = .2;
            tg.msp = .5;
            tg.s = 3
        }
    };
    tg.rct = 50;
    var ttg2 = bp_f["c" + tg.pst];
    if (trn_stg > 4 && ((ofc_mgn > 0 && (ttg2.pst == 7 || ttg2.pst == 6)) || ttg2.i == 1) && tg.on_st == 1 && stt_tim > 60) {
        tg.tgx = (tg.tgx + tg.x * 5) / 6;
        tg.tgz = (tg.tgz + tg.z * 5) / 6;
        tg.rct = 20;
        tg.msp = .5;
        tg.s = 0
    }
};

function mrk_chg(i, df_x, df_z, ctch_tg) {
    var uegp = epg.i;
    var nepg_i = i;
    mk_num[epg.pst] = -1;
    epg = bp_f["c" + i];
    tg = bp_f["c" + i];
    mk_num[tg.pst] = -1;
    tg.pst = b_ti;
    mk_num[b_ti] = tg.i;
    var Rx = gl_x - df_x;
    var Ry = gl_z - df_z;
    var Rr = Math.atan2(Ry, Rx) + .1;
    var Rd = 35;
    var st_tgx = df_x + Math.cos(Rr) * Rd;
    var st_tgz = df_z + Math.sin(Rr) * Rd;
    if (st_tgz > 180) {
        st_tgz = 180
    };
    tg.tgx = st_tgx;
    tg.tgz = st_tgz;
    tg.act[0].setEffectiveWeight(1);
    tg.act[1].setEffectiveWeight(0);
    tg.act[2].setEffectiveWeight(0);
    tg.act_t = 0;
    tg.dsp = .2;
    tg.msp = def_spd;
    var ttg2 = bp_f["c" + tg.pst];
    if (trn_stg > 4 && def_rsp < Math.random() && tg.on_st == 1 && stt_tim > 60 && ttg2.pst != 1 && ttg2.pst != 5) {
        tg.tgx = (tg.tgx + tg.x * 5) / 6;
        tg.tgz = (tg.tgz + tg.z * 5) / 6;
        tg.rct = 20;
        tg.msp = .5;
        tg.s = 0
    };
    tg.s = 1;
    trn_set(tg);
    tg.rct = 50;
    for (var i1 = 6; i1 < 11; i1++) {
        var tg = bp_f["c" + i1];
        if (tg.pst == b_ti && tg.i != nepg_i) {
            tg.pst = 0;
            mrk_r(tg, 0, 1)
        }
    }
};

function mrk_pos(df_x, df_z, n_tg, d_act) {
    var tg;
    var uegp = epg.i;
    var e_tg;
    var d_Rds = 99999;
    var d_i = 6;
    tg = epg;
    var Rx = pg.x - tg.x;
    var Ry = pg.z - tg.z;
    var pd_Rds = Math.sqrt(Math.pow(Rx, 2) + Math.pow(Ry, 2));
    var Rx = gl_x - df_x;
    var Ry = gl_z - df_z;
    var Rr = Math.atan2(Ry, Rx) + .1;
    var Rd = 35;
    var st_tgx = df_x + Math.cos(Rr) * Rd;
    var st_tgz = df_z + Math.sin(Rr) * Rd;
    if (st_tgz > 180) {
        st_tgz = 180
    };
    var Rx = st_tgx - tg.tgx;
    var Ry = st_tgz - tg.tgz;
    var Rds = Math.sqrt(Math.pow(Rx, 2) + Math.pow(Ry, 2));
    var Rx1 = st_tgx - pg.tgx;
    var Ry1 = st_tgz - pg.tgz;
    var Rds1 = Math.sqrt(Math.pow(Rx1, 2) + Math.pow(Ry1, 2));
    var Rx2 = pg.tgx - tg.x;
    var Ry2 = pg.tgz - tg.z;
    var Rds2 = Math.sqrt(Math.pow(Rx2, 2) + Math.pow(Ry2, 2));
    if (tg.rct == 0) {
        if (Rds > 5 && (tg.rct == 0 || Rds > 15) && Rds2 > Rds1) {
            tg.tgx = st_tgx;
            tg.tgz = st_tgz;
            if (Rds < 30) {
                tg.dsp = .2;
                tg.msp = .5;
                tg.s = 3;
                tg.rct = 0
            } else {
                tg.dsp = .2;
                tg.msp = def_spd;
                tg.s = 1;
                trn_set(tg);
                tg.rct = 50
            }
        } else if (tg.s == 0 && b_s != 3) {
            tg.tgx = st_tgx;
            tg.tgz = st_tgz;
            if (tg.rct === 0 && Rds < 30) {
                tg.x += (tg.tgx - tg.x) / 40;
                tg.z += (tg.tgz - tg.z) / 40
            };
            var Rx1 = pg.x - gl_x;
            var Ry1 = pg.z - gl_z;
            var Rds1 = Math.sqrt(Math.pow(Rx1, 2) + Math.pow(Ry1, 2));
            var Rx2 = epg.x - gl_x;
            var Ry2 = epg.z - gl_z;
            var Rds2 = Math.sqrt(Math.pow(Rx2, 2) + Math.pow(Ry2, 2));
            if (tg.act_t == 0 && pd_Rds < 80 && b_s == 0 && Rds1 > Rds2 && sht_blk == 0) {
                if (Math.random() > .5) {
                    atk_set(19, tg.i)
                } else {
                    atk_set(18, tg.i)
                }
            };
            if (pg.s == 0 && tp == 0) {
                pg_bl_kp++
            }
        }
    };
    var ttg2 = bp_f["c" + tg.pst];
    if (ofc_mgn > 0 && (ttg2.pst == 7 || ttg2.pst == 6) && stt_tim > 200) {}
};

function mrk_df_ps() {
    var tg = epg;
    var ttg = bp_f["c" + epg.pst];
    var Rx = pg.x - tg.x;
    var Ry = pg.z - tg.z;
    var pd_Rds = Math.sqrt(Math.pow(Rx, 2) + Math.pow(Ry, 2));
    var Rx1 = pg.x - gl_x;
    var Ry1 = pg.z - gl_z;
    var Rds1 = Math.sqrt(Math.pow(Rx1, 2) + Math.pow(Ry1, 2));
    var Rx2 = epg.x - gl_x;
    var Ry2 = epg.z - gl_z;
    var Rds2 = Math.sqrt(Math.pow(Rx2, 2) + Math.pow(Ry2, 2));
    if (pd_Rds < 90 && pg.i == tg.st_mk && ttg.s == 0) {
        if (tg.act_t == 0 && pd_Rds < 20) {
            var Rx = gl_x - ttg.x;
            var Ry = gl_z - ttg.z;
            var Rr = Math.atan2(Ry, Rx) + .1;
            var Rd = 35;
            var st_tgx = ttg.x + Math.cos(Rr) * Rd;
            var st_tgz = ttg.z + Math.sin(Rr) * Rd;
            tg.x += (st_tgx - tg.x) / 20;
            tg.z += (st_tgz - tg.z) / 20
        };
        if (tg.act_t == 0 && Rds1 > Rds2 && b_s == 0 && pd_Rds < 80) {
            if (Math.random() > .2) {
                atk_set(19, tg.i)
            } else {
                atk_set(18, tg.i)
            }
        }
    }
};

function trn_set(tg) {
    if (b_s < 3 && sht_qlk_tm == 0) {
        var Rr1 = -tg.mms.rotation.y + pi2;
        var Rx = tg.tgx - tg.x;
        var Ry = tg.tgz - tg.z;
        var Rr2 = Math.atan2(Ry, Rx);
        var mch = Rr2 - Rr1;
        if (Math.abs(mch) >= m_pi) {
            if (mch <= 0) {
                mch += m_pi2
            } else {
                mch -= m_pi2
            }
        };
        if (Math.abs(mch) > .7) {
            if (mch > 0) {
                atk_set(12, tg.i)
            } else {
                atk_set(11, tg.i)
            };
            tg.dsp = .2;
            tg.fc = 0;
            tg.s = 4;
            if (fsndpl == 1) {
                sndf(Math.floor(Math.random() * 3) + 6, .008)
            };
            tg.tnt = 20
        }
    }
};

function stt_rst() {
    for (var i = 1; i < 11; i++) {
        tg = bp_f["c" + i];
        tg.pst = -1;
        tg.z = -300;
        tg.tgz = -300;
        tg.s = 0;
        tg.on_st = 0;
        tg.mms.visible = false;
        tg.shd.visible = false;
        tg.msp = 0;
        tg.dsp = 0;
        tg.act_t = 0;
        tg.act[2].stop();
        lp_act_set(tg, 1);
        tg.rct = 0
    };
    gt_sht_scr = 0;
    gt_sht_scr2 = 0;
    fst_lng = 0;
    sht_qlk = +new Date();
    sht_qlk_stp = -1;
    sht_qlk_tm = 0;
    sht_qlk_al = 0;
    gt_sht_scr = 0;
    gt_sht_scr2 = 0;
    sht_aft_tm = 0;
    st_tcx = -1;
    st_tcy = -1;
    st_mcx = -1;
    st_mcy = -1;
    th_set_i = -1;
    one_bnd = 0;
    scr_eft_c = 0;
    dnk_cm_x = 0;
    sht_rr = -99
};

function set_st_ps(tg, st_x, st_z, st_tgx, st_tgz, st_msp, st_dsp, st_s, st_lkx, st_lkz) {
    tg.mms.visible = true;
    tg.shd.visible = true;
    tg.x = st_x;
    tg.z = st_z;
    tg.msp = st_msp;
    tg.dsp = st_dsp;
    tg.tgx = st_tgx;
    tg.tgz = st_tgz;
    tg.s = st_s;
    switch (st_s) {
        case 0:
            break;
        case 1:
            tg.run_lt = 1;
            tg.dsh_lt = 1;
            tg.idl_lt = 0;
            break;
        case 3:
            tg.run_lt = 1;
            tg.dsh_lt = 0;
            tg.idl_lt = 0;
            break;
        default:
    };
    var Rx = tg.x - st_lkx;
    var Ry = tg.z - st_lkz;
    var Rr = Math.atan2(Ry, Rx);
    tg.thr = -Rr - pi2;
    tg.mms.rotation.y = tg.thr
};

function gl_fr_hnt(tg) {
    var Rx = gl_x - tg.x;
    var Ry = gl_z - tg.z;
    var Rds = Math.sqrt(Math.pow(Rx, 2) + Math.pow(Ry, 2));
    var gl_nr = 1;
    var ttg;
    for (var i = 6; i < 11; i++) {
        ttg = bp_f["c" + i];
        if (ttg.z > -250) {
            var Rx1 = gl_x - ttg.x;
            var Ry1 = gl_z - ttg.z;
            var Rds1 = Math.sqrt(Math.pow(Rx1, 2) + Math.pow(Ry1, 2));
            if (Rds > Rds1) {
                gl_nr = 0
            }
        }
    };
    return gl_nr
};

function scr_mng() {
    if (gt_sht_scr < 65) {
        gt_sht_scr = 65
    };
    if (gt_sht_scr > 99) {
        rs_get_coin += 2;
        pft = 2
    } else if (gt_sht_scr > 89) {
        if (gt_sht_scr == 99) {
            rs_get_coin++
        };
        pft = 1
    } else {
        pft = 0
    };
    scr_eft_c = 4;
    sht_aft_tm = 75;
    ptc_chy = ((wh / ltl) - 935) / 2.5 - 32;
    if (gt_sht_scr2 == 30) {
        ptc_chy = ((wh / ltl) - 935) / 2.5 - 75;
        if (pg.i < 4) {
            ptc_chy = ((wh / ltl) - 935) / 2.5 - 91.7
        };
        scr_eft_c = 15;
        sht_aft_tm = 80
    }
};

function fm_set_lst() {
    lp_act_set(pg, 4);
    b_cx = pg.x;
    b_cz = pg.z;
    cmr_h_zm = 80
};

function fm_set_fst() {
    var tg;
    var ttg;
    pl_pst = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1);
    mk_num = new Array(-1, -1, -1, -1, -1, -1);
    stt_rst();
    bx = 0;
    by = 0;
    bz = -250;
    ofc_mgn = 0;
    stt_tim = 0;
    fm_chg_c = 0;
    pg_bl_kp = 0;
    gd_anm_a = 1;
    bsk_gd1 = 0;
    bsk_gd2 = 0;
    pss_ct = 0;
    sht_blk = 0;
    sht_blk_i = -1;
    var set_trn_stg = trn_stg;
    if (set_trn_stg > 6) {
        set_trn_stg = 6
    };
    if (cont_flg == 1) {
        set_trn_stg = 9
    };
    switch (set_trn_stg) {
        case 0:
            pg = bp_f["c" + 1];
            epg = bp_f["c" + 6];
            var Rr = -pi2 - pi2 / 4 + Math.random() * pi2 / 2;
            var Rd = 150;
            var st_pg_x = gl_x + Math.cos(Rr) * Rd;
            var st_pg_z = gl_z + Math.sin(Rr) * Rd;
            if (mis_stg > 0) {
                st_pg_x = 0;
                st_pg_z = 110;
                var st_pg_tgx = st_pg_x;
                var st_pg_tgz = st_pg_z
            } else {
                var Rx = st_pg_x - gl_x;
                var Ry = st_pg_z - gl_z;
                var Rr = Math.atan2(Ry, Rx);
                var Rd = -75;
                var st_pg_tgx = st_pg_x + Math.cos(Rr) * Rd;
                var st_pg_tgz = st_pg_z + Math.sin(Rr) * Rd
            };
            set_st_ps(pg, st_pg_x, st_pg_z, st_pg_tgx, st_pg_tgz, .9, .1, 1, gl_x, gl_z);
            fm_set_lst();
            break;
        case 1:
            pg = bp_f["c" + 1];
            epg = bp_f["c" + 6];
            epg.pst = 1;
            var dnkr_i = Math.floor(Math.random() * 4) + 2;
            if (Math.random() > .5 && ttr_ok_gd == 1) {
                set_st_ps(pg, 80, 80, 80, 80, .9, .1, 0, gl_x, gl_z);
                set_st_ps(epg, 56, 105, 56, 105, .1, .1, 0, pg.x, pg.z);
                tg = bp_f["c" + dnkr_i];
                set_st_ps(tg, -70, 100, -40, 150, .9, .1, 1, -40, 150)
            } else {
                set_st_ps(pg, -80, 80, -80, 80, .9, .1, 0, gl_x, gl_z);
                set_st_ps(epg, -61, 110, -61, 110, .1, .1, 0, pg.x, pg.z);
                tg = bp_f["c" + dnkr_i];
                set_st_ps(tg, 70, 100, 40, 150, .9, .1, 1, 40, 150)
            };
            fm_set_lst();
            break;
        case 2:
            stt_rst();
            pg = bp_f["c" + 1];
            tg = bp_f["c" + 1];
            var st_pg_x = Math.floor(Math.random() * 180) - 90;
            if (ttr_ok == 1 && Math.random() > .58) {
                if (Math.random() > .5) {
                    st_pg_x = 85 - Math.floor(Math.random() * 20)
                } else {
                    st_pg_x = -85 + Math.floor(Math.random() * 20)
                }
            };
            var st_pg_z = -100;
            set_st_ps(pg, st_pg_x, st_pg_z, 0, 0, .7, .1, 1, gl_x, gl_z);
            tg.pst = 3;
            if (ttr_ok == 1 && Math.random() > .58) {
                if (Math.random() > .5) {
                    tg.pst = 4
                } else {
                    tg.pst = 2
                }
            };
            set_pst(tg);
            tg = bp_f["c" + 6];
            st_pg_x = Math.floor(Math.random() * 120) - 60;
            st_pg_z = 10 + Math.floor(Math.random() * 30);
            set_st_ps(tg, st_pg_x, st_pg_z, pg.tgx, 100, 1.1, .1, 1, gl_x, gl_z);
            tg.s = 3;
            tg.msp = .5;
            var Rx = tg.x - pg.x;
            var Ry = tg.z - pg.z;
            var Rr = Math.atan2(Ry, Rx);
            tg.thr = -Rr - pi2;
            tg.mms.rotation.y = tg.thr;
            epg = tg;
            tg.pst = 1;
            var m_st_pt_pi = -1;
            var rnd_p_x = 30;
            var rnd_p_x2 = 25;
            if (ttr_ok == 1) {
                rnd_p_x = 90;
                rnd_p_x2 = 5
            };
            var st_pt_lr = 0;
            var st_pt_pi = 2 + Math.floor(Math.random() * 2);
            tg = bp_f["c" + st_pt_pi];
            if (pg.x < 0) {
                st_pt_lr = 1;
                var st_pg_x = Math.floor(Math.random() * rnd_p_x) + rnd_p_x2;
                tg.pst = 7
            } else {
                var st_pg_x = -(Math.floor(Math.random() * rnd_p_x) + rnd_p_x2);
                set_st_ps(tg, st_pg_x, st_pg_z, 0, 0, 1.1, .1, 1, gl_x, gl_z);
                tg.pst = 6
            };
            var st_pg_z = -20 + Math.floor(Math.random() * 60);
            set_st_ps(tg, st_pg_x, st_pg_z, 0, 0, 1.1, .1, 1, gl_x, gl_z);
            set_pst(tg);
            if (Math.random() > .5 || trn_stg == 2) {
                m_st_pt_pi = st_pt_pi
            };
            if (st_pt_pi == 2) {
                st_pt_pi = 3 + Math.floor(Math.random() * 3)
            } else {
                st_pt_pi = 4 + Math.floor(Math.random() * 1)
            };
            tg = bp_f["c" + st_pt_pi];
            if (st_pt_lr == 0) {
                var st_pg_x = Math.floor(Math.random() * rnd_p_x) + rnd_p_x2;
                var st_pg_z = -30 + Math.floor(Math.random() * 30);
                tg.pst = 2;
                if (pg.pst == 2) {
                    tg.pst = 1
                }
            } else {
                var st_pg_x = -(Math.floor(Math.random() * rnd_p_x) + rnd_p_x2);
                var st_pg_z = -20 + Math.floor(Math.random() * 60);
                tg.pst = 4;
                if (pg.pst == 4) {
                    tg.pst = 5
                }
            };
            st_pg_z = -50 + Math.floor(Math.random() * 30);
            set_st_ps(tg, st_pg_x, st_pg_z, 0, 0, 1.1, .1, 1, gl_x, gl_z);
            set_pst(tg);
            fm_set_lst();
            break;
        case 9:
            pg = bp_f["c" + 1];
            var Rr = -pi2 - pi2 / 4 + Math.random() * pi2 / 2;
            var Rd = 150;
            var st_pg_x = gl_x + Math.cos(Rr) * Rd;
            var st_pg_z = gl_z + Math.sin(Rr) * Rd;
            var Rx = st_pg_x - gl_x;
            var Ry = st_pg_z - gl_z;
            var Rr = Math.atan2(Ry, Rx);
            var Rd = -75;
            var st_pg_tgx = st_pg_x;
            var st_pg_tgz = st_pg_z;
            pg.pst = 3;
            set_st_ps(pg, st_pg_x, st_pg_z, st_pg_tgx, st_pg_tgz, .9, .1, 1, gl_x, gl_z);
            fm_set_lst();
            break;
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        default:
            stt_rst();
            pg = bp_f["c" + 1];
            tg = bp_f["c" + 1];
            var st_pg_x = Math.floor(Math.random() * 100) - 50;
            if (ttr_ok == 1 && Math.random() > .52) {
                if (Math.random() > .5) {
                    st_pg_x = 85 - Math.floor(Math.random() * 20)
                } else {
                    st_pg_x = -85 + Math.floor(Math.random() * 20)
                }
            };
            var st_pg_z = -160;
            if (trn_stg > 4) {
                st_pg_z = -60
            };
            if (trn_stg > 6 && Math.random() > .85) {
                st_pg_z = -150
            };
            set_st_ps(pg, st_pg_x, st_pg_z, 0, 0, .7, .1, 1, gl_x, gl_z);
            tg.pst = 3;
            var ofc_1st = Math.random();
            if ((trn_stg >= 6 || ttr_ok == 1) && Math.random() > .58) {
                if (Math.random() > .5) {
                    tg.pst = 4;
                    ofc_1st = 1
                } else {
                    tg.pst = 2;
                    ofc_1st = 0
                }
            };
            set_pst(tg);
            var m_st_pt_pi = -1;
            var m_st_pt_pi2 = -1;
            var rnd_p_x = 30;
            var rnd_p_x2 = 25;
            if (ttr_ok == 1) {
                rnd_p_x = 90;
                rnd_p_x2 = 5
            };
            var st_pt_lr = 0;
            var st_pt_pi = 2 + Math.floor(Math.random() * 2);
            tg = bp_f["c" + st_pt_pi];
            if (ofc_1st > .5) {
                st_pt_lr = 1;
                var st_pg_x = Math.floor(Math.random() * rnd_p_x) + rnd_p_x2;
                switch (tg.i) {
                    case 2:
                        tg.pst = 2;
                        break;
                    case 3:
                        var st_rdp = new Array(2, 2, 2, 2, 2, 2, 2, 2);
                        st_pi = st_rdp[Math.floor(Math.random() * st_rdp.length)];
                        tg.pst = st_pi;
                        break;
                    default:
                }
            } else {
                var st_pg_x = -(Math.floor(Math.random() * rnd_p_x) + rnd_p_x2);
                set_st_ps(tg, st_pg_x, st_pg_z, 0, 0, 1.1, .1, 1, gl_x, gl_z);
                switch (tg.i) {
                    case 2:
                        tg.pst = 4;
                        break;
                    case 3:
                        var st_rdp = new Array(4, 4, 4, 4, 4, 4, 4, 4);
                        st_pi = st_rdp[Math.floor(Math.random() * st_rdp.length)];
                        tg.pst = st_pi;
                        break;
                    default:
                }
            };
            var st_pg_z = -20 + Math.floor(Math.random() * 60);
            set_st_ps(tg, st_pg_x, st_pg_z, 0, 0, 1.1, .1, 1, gl_x, gl_z);
            set_pst(tg);
            if (Math.random() > .5 || trn_stg == 4) {
                m_st_pt_pi = st_pt_pi
            } else {
                m_st_pt_pi2 = st_pt_pi
            };
            if (st_pt_pi == 2) {
                st_pt_pi = 3 + Math.floor(Math.random() * 3)
            } else {
                st_pt_pi = 4 + Math.floor(Math.random() * 1)
            };
            tg = bp_f["c" + st_pt_pi];
            if (st_pt_lr == 0) {
                var st_pg_x = Math.floor(Math.random() * rnd_p_x) + rnd_p_x2;
                var st_pg_z = -30 + Math.floor(Math.random() * 30);
                switch (tg.i) {
                    case 2:
                        tg.pst = 2;
                        break;
                    case 3:
                        var st_rdp = new Array(2, 2, 2, 2, 2, 2, 2, 2);
                        st_pi = st_rdp[Math.floor(Math.random() * st_rdp.length)];
                        tg.pst = st_pi;
                        break;
                    case 4:
                        var st_rdp = new Array(2, 7, 2, 7, 2, 7, 2, 7);
                        st_pi = st_rdp[Math.floor(Math.random() * st_rdp.length)];
                        tg.pst = st_pi;
                        break;
                    case 5:
                        var st_rdp = new Array(7, 7, 7, 7, 2);
                        st_pi = st_rdp[Math.floor(Math.random() * st_rdp.length)];
                        tg.pst = st_pi;
                        break;
                    default:
                };
                if (pg.pst == 2 && tg.pst == 2) {
                    tg.pst = 1
                }
            } else {
                var st_pg_x = -(Math.floor(Math.random() * rnd_p_x) + rnd_p_x2);
                var st_pg_z = -20 + Math.floor(Math.random() * 60);
                switch (tg.i) {
                    case 2:
                        tg.pst = 4;
                        break;
                    case 3:
                        var st_rdp = new Array(4, 4, 4, 4, 4, 4, 4, 4);
                        st_pi = st_rdp[Math.floor(Math.random() * st_rdp.length)];
                        tg.pst = st_pi;
                        break;
                    case 4:
                        var st_rdp = new Array(4, 6, 4, 6, 4, 6, 4, 6);
                        st_pi = st_rdp[Math.floor(Math.random() * st_rdp.length)];
                        tg.pst = st_pi;
                        break;
                    case 5:
                        var st_rdp = new Array(6, 6, 6, 6, 4);
                        st_pi = st_rdp[Math.floor(Math.random() * st_rdp.length)];
                        tg.pst = st_pi;
                        break;
                    default:
                };
                if (pg.pst == 4 && tg.pst == 4) {
                    tg.pst = 5
                }
            };
            st_pg_z = -50 + Math.floor(Math.random() * 30);
            if (trn_stg == 2) {
                if (st_pt_lr == 0) {
                    tg.pst = 7
                } else {
                    tg.pst = 6
                }
            };
            set_st_ps(tg, st_pg_x, st_pg_z, 0, 0, 1.1, .1, 1, gl_x, gl_z);
            set_pst(tg);
            if (m_st_pt_pi == -1) {
                m_st_pt_pi = st_pt_pi
            } else {
                m_st_pt_pi2 = st_pt_pi
            };
            st_pt_pi = Math.floor(Math.random() * 4) + 7;
            tg = bp_f["c" + st_pt_pi];
            var ttg = bp_f["c" + m_st_pt_pi];
            st_pg_x = ttg.x + Math.random() * 30 - 15;
            st_pg_z = ttg.z + 20 + Math.random() * 30;
            set_st_ps(tg, st_pg_x, st_pg_z, 0, 0, 1.1, .1, 1, gl_x, gl_z);
            mrk_r(tg, 1, 0);
            tg.rct = 50;
            var utg = tg;
            if (tg.pst == 1) {
                epg = tg
            };
            if (trn_stg > 4) {
                var st_pt_pi2 = Math.floor(Math.random() * 4) + 7;
                if (st_pt_pi == st_pt_pi2) {
                    st_pt_pi2++;
                    if (st_pt_pi2 > 10) {
                        st_pt_pi2 = 7
                    }
                };
                tg = bp_f["c" + st_pt_pi2];
                if (Math.random() > .5) {
                    st_pg_x = 40 + Math.random() * 30
                } else {
                    st_pg_x = -40 - Math.random() * 30
                };
                st_pg_z = 100;
                if (trn_stg > 6) {
                    var ttg = bp_f["c" + m_st_pt_pi2];
                    st_pg_x = ttg.x + Math.random() * 30 - 15;
                    st_pg_z = ttg.z + 20 + Math.random() * 30
                };
                set_st_ps(tg, st_pg_x, st_pg_z, 0, 0, 1.1, .1, 1, gl_x, gl_z);
                mrk_r(tg, 1, 0);
                tg.rct = 50;
                var utg = tg;
                if (tg.pst == 1) {
                    epg = tg
                }
            };
            st_pt_pi = Math.floor(Math.random() * 4) + 7;
            tg = bp_f["c" + 6];
            switch (pg.pst) {
                case 3:
                    st_pg_x = Math.floor(Math.random() * 60) - 30;
                    st_pg_z = 50 + Math.floor(Math.random() * 30);
                    set_st_ps(tg, st_pg_x, st_pg_z, 0, 100, 1.1, .1, 1, gl_x, gl_z);
                    break;
                case 2:
                    st_pg_x = 30 + Math.floor(Math.random() * 20);
                    st_pg_z = 20 + Math.floor(Math.random() * 30);
                    set_st_ps(tg, st_pg_x, st_pg_z, pg.tgx, 100, 1.1, .1, 1, gl_x, gl_z);
                    break;
                case 4:
                    st_pg_x = -30 - Math.floor(Math.random() * 20);
                    st_pg_z = 20 + Math.floor(Math.random() * 30);
                    set_st_ps(tg, st_pg_x, st_pg_z, pg.tgx, 100, 1.1, .1, 1, gl_x, gl_z);
                    break;
                default:
            };
            tp.pst = 1;
            mk_num[1] = 6;
            tg.s = 3;
            var Rx = tg.x - pg.x;
            var Ry = tg.z - pg.z;
            var Rr = Math.atan2(Ry, Rx);
            tg.thr = -Rr - pi2;
            tg.mms.rotation.y = tg.thr;
            if (utg.pst != 1) {
                epg = tg;
                tg.pst = 1
            } else {
                mrk_r(tg, 1, 0);
                tg.rct = 50
            };
            fm_set_lst();
            break
    };
    for (var i = 6; i < 11; i++) {
        tg = bp_f["c" + i];
        tg.st_mk = tg.pst
    }
};

function lp_act_set(tg, i) {
    if (tg.ps != i) {
        switch (i) {
            case 1:
                tg.act[0].stop();
                tg.act[0] = tg.mxr.clipAction(animations[anim_name(animations, "IDLE_normal")]);
                tg.act[0].play();
                tg.act[1].stop();
                tg.act[1] = tg.mxr.clipAction(animations[anim_name(animations, "RUN_dash")]);
                tg.act[1].play();
                tg.act[3].stop();
                tg.act[3] = tg.mxr.clipAction(animations[anim_name(animations, "WALK_back")]);
                tg.act[3].play();
                break;
            case 2:
                break;
            case 3:
                tg.act[0].stop();
                tg.act[0] = tg.mxr.clipAction(animations[anim_name(animations, "IDLE_normal")]);
                tg.act[0].play();
                tg.act[1].stop();
                tg.act[1] = tg.mxr.clipAction(animations[anim_name(animations, "RUN_jog")]);
                tg.act[1].play();
                tg.act[3].stop();
                tg.act[3] = tg.mxr.clipAction(animations[anim_name(animations, "WALK_back")]);
                tg.act[3].play();
                break;
            case 4:
                tg.act[0].stop();
                tg.act[0] = tg.mxr.clipAction(animations[anim_name(animations, "DRIBBLE_IDLE_right")]);
                tg.act[0].play();
                tg.act[1].stop();
                tg.act[1] = tg.mxr.clipAction(animations[anim_name(animations, "DRIBBLE_dash_right")]);
                tg.act[1].play();
                tg.act[3].stop();
                tg.act[3] = tg.mxr.clipAction(animations[anim_name(animations, "DRIBBLE_short_right")]);
                tg.act[3].play();
                break;
            case 5:
                break;
            case 6:
                tg.act[0].stop();
                tg.act[0] = tg.mxr.clipAction(animations[anim_name(animations, "IDLE_normal")]);
                tg.act[0].play();
                tg.act[1].stop();
                tg.act[1] = tg.mxr.clipAction(animations[anim_name(animations, "DEFENCE_mark3")]);
                tg.act[1].play();
                tg.act[3].stop();
                tg.act[3] = tg.mxr.clipAction(animations[anim_name(animations, "WALK_back")]);
                tg.act[3].play();
                break;
            default:
        }
    };
    tg.ps = i
};

function pst_lne(pi, tg) {
    if (pl_pst[pi] == -1) {
        var ps_x = rn_pst[pi * 2];
        var ps_z = rn_pst[pi * 2 + 1];
        var Rx = ps_x - tg.x;
        var Ry = ps_z - tg.z;
        var Rr = Math.atan2(Ry, Rx);
        var ttg;
        var ln_p_i = -1;
        for (var i = 6; i < 11; i++) {
            ttg = bp_f["c" + i];
            if (ttg.z > -250) {
                var Rx1 = ttg.x - tg.x;
                var Ry1 = ttg.z - tg.z;
                var Rr1 = Math.atan2(Ry1, Rx1);
                var mch = Rr - Rr1;
                if (Math.abs(mch) >= m_pi) {
                    if (mch <= 0) {
                        mch += m_pi2
                    } else {
                        mch -= m_pi2
                    }
                };
                var hnt_r = .5;
                if (trn_stg < 5) {
                    hnt_r = .2
                };
                if (Math.abs(mch) < hnt_r) {
                    ln_p_i = i
                }
            }
        };
        if (ln_p_i == -1 || tg.pst == 1 || tg.pst == 5) {
            pl_pst[tg.pst] = -1;
            tg.pst = pi;
            set_pst(tg);
            ofc_stt(tg)
        }
    }
};

function pst_frr(pi, tg) {
    if (pl_pst[pi] == -1) {
        pl_pst[tg.pst] = -1;
        tg.pst = pi;
        set_pst(tg);
        ofc_stt(tg)
    }
};

function mtm_mve(tg, u) {
    var Rx = tg.x - pg.x;
    var Ry = tg.z - pg.z;
    var tp_Rds = Math.sqrt(Math.pow(Rx, 2) + Math.pow(Ry, 2));
    var ofc_ps_sp = -1;
    if (b_s == 0 && (u != 0 || trn_stg < 4 || (pg != tg && tg.z > -250 && tg.s == 0))) {
        var nw_ps = tg.pst + "#";
        var nw_bt = pg.pst + "#";
        var u_tg_pst = tg.pst;
        if (tg.i == 1 && lst_ps == 1 && pss_ct > 3 && pl_pst[2] != -1 && pl_pst[4] != -1) {
            if (bx < 0) {
                pst_frr(1, tg)
            } else {
                pst_frr(5, tg)
            }
        } else if (tg.i == 1 && pl_pst[3] == -1) {
            pst_frr(3, tg)
        } else if (tg.i < 2 && tg.pst != 7 && tg.pst != 6) {
            if ("5#6#".indexOf(nw_bt) > -1) {
                pst_frr(4, tg)
            } else if ("1#7#".indexOf(nw_bt) > -1) {
                pst_frr(2, tg)
            } else if ("2#4#".indexOf(nw_bt) > -1) {
                pst_frr(3, tg)
            }
        } else if ("3#".indexOf(nw_ps) > -1 && tg.i > 2) {
            if (Math.random() > .5) {
                pst_frr(7, tg)
            } else {
                pst_frr(6, tg)
            }
        } else if ("7#".indexOf(nw_ps) > -1 && gl_fr_hnt(tg) == 0 && u == 0) {
            if (Math.random() > .9) {
                pst_frr(3, tg)
            } else if (Math.random() > .8) {
                pst_frr(1, tg)
            } else {
                pst_frr(2, tg)
            }
        } else if ("6#".indexOf(nw_ps) > -1 && gl_fr_hnt(tg) == 0 && u == 0) {
            if (Math.random() > .9) {
                pst_frr(3, tg)
            } else if (Math.random() > .8) {
                pst_frr(5, tg)
            } else {
                pst_frr(4, tg)
            }
        } else if ("9#4#5#".indexOf(nw_ps) > -1) {
            if (pl_pst[7] == -1 && pl_pst[6] == -1) {
                pst_lne(6, tg)
            };
            if (u_tg_pst == tg.pst) {
                if (pl_pst[1] != -1 && pl_pst[2] != -1) {
                    pst_frr(6, tg)
                } else if (fm_chg_c > 2) {
                    if ("4#".indexOf(nw_ps) > -1) {
                        if (pl_pst[7] == -1 && pl_pst[6] == -1) {
                            pst_frr(6, tg)
                        } else {
                            pst_frr(5, tg)
                        }
                    } else {
                        pst_frr(4, tg)
                    }
                }
            }
        } else if ("8#2#1#".indexOf(nw_ps) > -1) {
            if (pl_pst[7] == -1 && pl_pst[6] == -1) {
                pst_lne(7, tg)
            };
            if (u_tg_pst == tg.pst) {
                if (pl_pst[5] != -1 && pl_pst[4] != -1) {
                    pst_frr(7, tg)
                } else if (fm_chg_c > 2) {
                    if ("2#".indexOf(nw_ps) > -1) {
                        if (pl_pst[7] == -1 && pl_pst[6] == -1) {
                            pst_frr(7, tg)
                        } else {
                            pst_frr(1, tg)
                        }
                    } else {
                        pst_frr(2, tg)
                    }
                }
            }
        };
        if (u_tg_pst != tg.pst) {
            fm_chg_c = 0
        }
    } else {
        if (pg.s == 0) {
            fm_chg_c++
        }
    }
};

function ttl_coin() {
    d_box("#34577C", 20, 20, 220, 50, .8);
    spt_t1_s(72, 26, 27, .5);
    ctx.fillStyle = "#fff696";
    ctx.font = "bold " + (28 * ltl) + "px sans-serif";
    if (spsv_bk == 0) {
        stset_r("Loading...", 227, 55)
    } else {
        stset_r(my_coin, 227, 55)
    }
};

function gam(rend_flg) {;
    var tg;
    ctx.clearRect(0, 0, ww, wh);
    if (v_dbl > 0) {
        v_dbl--
    };
    if (ofc_mgn > 0) {
        ofc_mgn--
    };
    stt_tim++;
    if (scr_eft_c > 0) {
        scr_eft_c++;
        if (scr_eft_c == 16) {
            gd_anm_a = 1;
            ptf = 1;
            ttl_sht_scr += gt_sht_scr + gt_sht_scr2;
            if (gt_sht_scr2 == 30) {
                if (boost_dk == 1) {
                    ttl_sht_scr += 30
                }
            } else if (gt_sht_scr2 == 10) {
                if (boost_3p == 1) {
                    ttl_sht_scr += 20
                }
            }
        }
    };
    var tg;
    var bp_fc = 0;
    for (var pi in bp_f) {
        tg = bp_f[pi];
        if (tg.tnt > 0) {
            tg.tnt--
        };
        if (tg.phc > 0) {
            tg.phc--
        };
        if (tg.l == 1) {
            if (tg.i < 6 && tg.z > -250 && trn_stg > 1 && b_s < 2 && stt_tim > 10 && sht_qlk_tm == 0) {
                var scr_pos = new THREE.Vector3();
                scr_pos.copy(tg.mms.position);
                scr_pos.y += tg.mms.scale.x * 2.6;
                if (tg.rk > 0 && tg.rk < 51) {
                    scr_pos.y += 3
                };
                scr_pos.project(camera);
                var inptxt = tg.i;
                var txsn = ctx.measureText(inptxt);
                var st_txt_x = (width / 2 * (scr_pos.x + 1)) * lll - txsn.width / 2;
                var st_txt_y = (height / 2 * (-scr_pos.y + 1)) * lll;
                var plt_ap = 0;
                var edg_lg = 23 * ltl;
                if (tg.i < 6) {
                    if (st_txt_x < edg_lg) {
                        st_txt_x = edg_lg;
                        plt_ap = 1
                    };
                    if (st_txt_x > ww - edg_lg) {
                        st_txt_x = ww - edg_lg;
                        plt_ap = 1
                    }
                };
                if (plt_ap == 1) {
                    ctx.fillStyle = ps_ps_cl;
                    ctx.beginPath();
                    ctx.arc(st_txt_x, st_txt_y, 15 * ltl, 0, Math.PI * 2, false);
                    ctx.fill();
                    ctx.font = "bold " + (13 * ltl) + "px sans-serif";
                    ctx.fillStyle = "#fff";
                    ctx.fillStyle = ps_ps_nm;
                    ctx.fillText(inptxt, st_txt_x - txsn.width / 2, st_txt_y + 4 * ltl)
                }
            };
            if (b_s == 1 && tg.i < 6 && tg.i == b_ti) {
                var Rx = tg.x - bx;
                var Ry = tg.z - bz;
                var Rds = Math.sqrt(Math.pow(Rx, 2) + Math.pow(Ry, 2));
                if (Rds < 10) {
                    if (ttr_ok_gd == 0 && trn_stg == 1 && tg.i != 1) {
                        fanc1 = 1;
                        guid_s();
                        if (gd_anm_a != 1) {
                            fanc2 = 0
                        };
                        gd_anm_a = 1
                    };
                    pg_bl_kp = 0;
                    pg = tg;
                    b_s = 0;
                    if (pg.s != 0) {
                        pg.s = 1
                    };
                    lp_act_set(pg, 4);
                    pg.msp = pg.m_msp;
                    var Rx = pg.x - epg.x;
                    var Ry = pg.z - epg.z;
                    var Rds = Math.sqrt(Math.pow(Rx, 2) + Math.pow(Ry, 2));
                    var Rx1 = pg.x - gl_x;
                    var Ry1 = pg.z - gl_z;
                    var Rds1 = Math.sqrt(Math.pow(Rx1, 2) + Math.pow(Ry1, 2));
                    var Rx2 = epg.x - gl_x;
                    var Ry2 = epg.z - gl_z;
                    var Rds2 = Math.sqrt(Math.pow(Rx2, 2) + Math.pow(Ry2, 2));
                    if (tg.s == 0) {
                        if (Rds1 > Rds2 && Rds < 61 && tg.pst != 6 && tg.pst != 7) {
                            if (Math.random() > .5) {
                                atk_set(7, pg.i)
                            } else {
                                atk_set(8, pg.i)
                            }
                        } else {
                            atk_set(24, pg.i)
                        }
                    } else {
                        atk_set(10, pg.i)
                    };
                    if (Math.random() > 1.5) {
                        pg.tgx = Math.random() * 100 - 50;
                        pg.tgz = Math.random() * 50 + 121;
                        pg.s = 1
                    } else {};
                    sndf(11, .05)
                }
            };
            if (tg.z > -250) {
                tg = bp_f["c" + tg.i];
                mv_d(tg);
                tg.mms.position.x = tg.x;
                tg.mms.position.z = tg.z;
                if (tg.rct > 0) {
                    tg.rct--
                };
                if (b_s > 2 && tg.act_t == 0) {
                    tg.s = 0
                };
                switch (tg.s) {
                    case 0:
                        if (tg == pg) {
                            var Rx = tg.x - 0;
                            var Ry = tg.z - 175
                        } else {
                            if (b_s == 0) {
                                var Rx = tg.x - pg.x;
                                var Ry = tg.z - pg.z
                            } else {
                                var Rx = tg.x - bx;
                                var Ry = tg.z - bz
                            }
                        };
                        var Rr = Math.atan2(Ry, Rx);
                        tg.thr = -Rr - pi2;
                        var chg_lt = .03;
                        tg.idl_lt += chg_lt;
                        tg.run_lt += -chg_lt;
                        if (tg.idl_lt > 1) {
                            tg.idl_lt = 1
                        };
                        if (tg.run_lt < 0) {
                            tg.run_lt = 0
                        };
                        break;
                    case 1:
                        var chg_lt = .05;
                        tg.idl_lt += -chg_lt;
                        tg.run_lt += chg_lt;
                        if (tg.idl_lt < 0) {
                            tg.idl_lt = 0
                        };
                        if (tg.run_lt > 1) {
                            tg.run_lt = 1
                        };
                        tg.dsh_lt += .05;
                        if (tg.dsh_lt > 1) {
                            tg.dsh_lt = 1
                        };
                        var Rx = tg.x - tg.tgx;
                        var Ry = tg.z - tg.tgz;
                        var Rr = Math.atan2(Ry, Rx);
                        tg.thr = -Rr - pi2;
                        break;
                    case 2:
                        var chg_lt = .05;
                        tg.idl_lt += -chg_lt;
                        tg.run_lt += chg_lt;
                        if (tg.idl_lt < .7) {
                            tg.idl_lt = .7
                        };
                        if (tg.run_lt > .7) {
                            tg.run_lt = .7
                        };
                        var Rx = tg.x - 0;
                        var Ry = tg.z - 175;
                        if (tg.i > 5) {
                            var Rx = tg.x - pg.x;
                            var Ry = tg.z - pg.z
                        };
                        var Rr = Math.atan2(Ry, Rx);
                        tg.thr = -Rr - pi2;
                        break;
                    case 3:
                        var chg_lt = .05;
                        tg.idl_lt += -chg_lt;
                        tg.run_lt += chg_lt;
                        if (tg.idl_lt < 0) {
                            tg.idl_lt = 0
                        };
                        if (tg.run_lt > 1) {
                            tg.run_lt = 1
                        };
                        tg.dsh_lt -= .05;
                        if (tg.dsh_lt < 0) {
                            tg.dsh_lt = 0
                        };
                        var Rx = tg.x - bx;
                        var Ry = tg.z - bz;
                        var Rr = Math.atan2(Ry, Rx);
                        tg.thr = -Rr - pi2;
                        break;
                    case 4:
                        var Rx = tg.x - tg.tgx;
                        var Ry = tg.z - tg.tgz;
                        var Rr = Math.atan2(Ry, Rx);
                        tg.thr = -Rr - pi2;
                        var chg_lt = .03;
                        tg.idl_lt += chg_lt;
                        tg.run_lt += -chg_lt;
                        if (tg.idl_lt > 1) {
                            tg.idl_lt = 1
                        };
                        if (tg.run_lt < 0) {
                            tg.run_lt = 0
                        };
                        break;
                    case 5:
                        var chg_lt = .05;
                        tg.idl_lt += -chg_lt;
                        tg.run_lt += chg_lt;
                        if (tg.idl_lt < 0) {
                            tg.idl_lt = 0
                        };
                        if (tg.run_lt > 1) {
                            tg.run_lt = 1
                        };
                        tg.dsh_lt -= .05;
                        if (tg.dsh_lt < 0) {
                            tg.dsh_lt = 0
                        };
                        var Rx = tg.x - tg.tgx;
                        var Ry = tg.z - tg.tgz;
                        var Rr = Math.atan2(Ry, Rx);
                        tg.thr = -Rr - pi2;
                        break;
                    default:
                };
                if (tg.dmg_c > 0) {
                    if (tg.atf == 0) {
                        tg.mxr.update(0)
                    } else {
                        tg.mxr.update(.006)
                    };
                    tg.dmg_c--
                } else if (tg.act_t == 0) {
                    var set_run1 = tg.run_lt * tg.dsh_lt;
                    var set_run3 = tg.run_lt * (1 - tg.dsh_lt);
                    tg.act[0].setEffectiveWeight(tg.idl_lt);
                    tg.act[1].setEffectiveWeight(set_run1);
                    tg.act[3].setEffectiveWeight(set_run3);
                    tg.mxr.update(.015)
                } else {
                    if (tg.act[tg.act_t].time < tg.f_pks) {
                        tg.mxr.update(.00001)
                    } else {
                        tg.mxr.update(tg.f_spd)
                    };
                    if (tg.lg == 0 && tg.act[tg.act_t].time > .095) {
                        tg.act[tg.act_t].time = .095;
                        tg.lg = 2
                    };
                    var lst_frm = tg.f_aft;
                    if (tg.act[tg.act_t].time >= lst_frm) {
                        tg.act[tg.act_t].time = lst_frm;
                        tg.idl_lt = tg.e_idl;
                        tg.run_lt = 1 - tg.e_idl;
                        var act_lt = (1 - tg.act_l);
                        var set_run1 = tg.run_lt * tg.dsh_lt;
                        var set_run3 = tg.run_lt * (1 - tg.dsh_lt);
                        tg.act[0].setEffectiveWeight(tg.idl_lt * act_lt);
                        tg.act[1].setEffectiveWeight(set_run1 * act_lt);
                        tg.act[3].setEffectiveWeight(set_run3 * act_lt);
                        var st_ps_lt = 1 - tg.idl_lt * act_lt - tg.run_lt * act_lt;
                        tg.act[tg.act_t].setEffectiveWeight(st_ps_lt);
                        tg.act_l -= tg.e_b;
                        if (tg.act_l <= 0) {
                            if (tg.e_b == 1) {
                                tg.act[0].time = 0;
                                tg.act[1].time = 0
                            };
                            tg.act_l = 0;
                            tg.act[tg.act_t].stop();
                            tg.act_t = 0
                        }
                    } else {
                        if (tg.s_b != 1) {
                            tg.act_l += tg.s_b;
                            if (tg.act_l >= 1) {
                                tg.act_l = 1;
                                tg.act[0].setEffectiveWeight(0);
                                tg.act[1].setEffectiveWeight(0);
                                tg.act[3].setEffectiveWeight(0);
                                tg.act[tg.act_t].setEffectiveWeight(1)
                            } else {;
                                var act_lt = (1 - tg.act_l);
                                var set_run1 = tg.run_lt * tg.dsh_lt;
                                var set_run3 = tg.run_lt * (1 - tg.dsh_lt);
                                tg.act[0].setEffectiveWeight(tg.idl_lt * act_lt);
                                tg.act[1].setEffectiveWeight(set_run1 * act_lt);
                                tg.act[3].setEffectiveWeight(set_run3 * act_lt);
                                var st_ps_lt = 1 - tg.idl_lt * act_lt - tg.run_lt * act_lt;
                                tg.act[tg.act_t].setEffectiveWeight(st_ps_lt);
                                if (tg.act[0].time == 0.00001 && tg.act[1].time == 0.00001 && tg.act[2].time == 0.00001) {
                                    tg.act[0].setEffectiveWeight(0);
                                    tg.act[1].setEffectiveWeight(0);
                                    tg.act[2].setEffectiveWeight(1);
                                    tg.act[0].time = .01;
                                    tg.act[1].time = .01;
                                    tg.act[2].time = .05
                                };
                                if (tg == pg && pg.act_p == 13 && pg.act[0].time == 0.00001 && pg.act[1].time == 0.00001 && pg.act[2].time == 0.00001) {;
                                    tg.act[0].setEffectiveWeight(0);
                                    tg.act[1].setEffectiveWeight(0);
                                    tg.act[2].setEffectiveWeight(1);
                                    tg.act[0].time = .01;
                                    tg.act[1].time = .01;
                                    tg.act[2].time = .05
                                }
                            }
                        }
                    }
                };
                tg.ux = tg.mms.position.x;
                tg.uy = tg.mms.position.z;
                var mch = tg.thr - tg.mms.rotation.y;
                if (Math.abs(mch) >= m_pi) {
                    if (mch <= 0) {
                        mch += m_pi2;
                        tg.mms.rotation.y -= m_pi2
                    } else {
                        mch -= m_pi2;
                        tg.mms.rotation.y += m_pi2
                    }
                };
                if ((tg != pg || dnk_sht == 0) && sht_blk_i != tg.i) {
                    tg.mms.rotation.y += mch / 12
                };
                if (dnk_sht == 0 || tg != pg) {
                    tg.shd.position.x = tg.mms.position.x;
                    tg.shd.position.z = tg.mms.position.z
                } else {
                    var chpt = tg.mms.getObjectByName("Armature_belly");
                    var hnd_pos = new THREE.Vector3();
                    var hnd_pos_ch = new THREE.Vector3();
                    hnd_pos.copy(chpt.localToWorld(hnd_pos_ch));
                    tg.shd.position.x = hnd_pos.x;
                    tg.shd.position.z = hnd_pos.z
                };
                bp_fc++
            }
        }
    };
    var e_gl_z = ring + 55;
    switch (b_s) {
        case 0:
            if (b_c == 0) {
                b_cx += (pg.mms.position.x - b_cx) / 15;
                b_cz += (pg.mms.position.z - b_cz) / 15
            };
            break;
        case 1:
            b_cx += (ball.position.x - b_cx) / 8;
            b_cz += (ball.position.z - b_cz) / 8;
            break;
        case 2:
            break;
        case 3:
            b_cmy += (60 - b_cmy) / 30;
            if (b_fst == 1) {
                b_cx += (gl_x - b_cx) / 168;
                b_cz += (gl_z - 50 - b_cz) / 168
            };
            switch (sht_typ) {
                case 0:
                    cmr_d += (-10 - cmr_d) / 38;
                    b_c++;
                    break;
                case 1:
                    cmr_d += (-15 - cmr_d) / 58;
                    b_c++;
                    break;
                case 2:
                    cmr_d += (-15 - cmr_d) / 58;
                    b_c++;
                    break;
                default:
            };
            break;
        default:
    };
    var plx = b_cx;
    var plz = b_cz;
    var Rx = 0 - plx;
    var Ry = e_gl_z - plz;
    var st_a_cr = Math.atan2(Ry, Rx);
    camera.position.y = 45 + b_cmy + cmr_h_zm;
    if (dnk_sht > 0) {
        cmr_h_zm += (-20 - cmr_h_zm) / 60;
        pg.x += (dnk_x - pg.x) / 20;
        pg.z += (dnk_z - pg.z) / 20;
        pg.tgx = gl_x;
        pg.tgz = gl_z;
        cmr_d += (-35 - cmr_d) / 18;
        dnk_sht++;
        if (dnk_sht == dnk_lst) {
            if (dnk_lst == 37) {
                msi = 38;
                msg = .91
            } else {
                msi = 50;
                msg = .91
            };
            scr_mng();
            by = 46.8;
            b_j = .1;
            b_gl = 2;
            bx = gl_x;
            bz = gl_z;
            sndf(9, .24);
            net_anm_act.stop();
            net_anm_act = net_anm.clipAction(animations_net[anim_name_net(animations_net, "Shoot_normal")]);
            net_anm_act.setLoop(THREE.LoopOnce);
            net_anm_act.clampWhenFinished = true;
            net_anm_c = 1;
            net_anm_act.time = 0;
            net_anm_act.play();
            b_tx = gl_x;
            b_tz = gl_z;
            b_lt = 20;
            b_s = 3
        };
        var cmr_lt = 3 + cmr_h_zm / 50
    } else {
        cmr_h_zm += (0 - cmr_h_zm) / 80;
        if (cmr_h_zm < .1) {
            cmr_h_zm = 0
        };
        var cmr_lt = 3 + cmr_h_zm / 50
    };
    camera.position.x = plx + Math.cos(st_a_cr) * cmr_d * cmr_lt + msx;
    camera.position.z = plz + Math.sin(st_a_cr) * cmr_d * cmr_lt + msy;
    var dp_cm = 0;
    vzl_y = 30;
    if (b_gl == 2 && (gt_sht_scr2 == 30 || pg.pst == 1 || pg.pst == 5)) {;
        dnk_cm_x += (camera.position.x / 40 - dnk_cm_x) / 45
    };
    camera.lookAt(new THREE.Vector3(dnk_cm_x, 30, e_gl_z - dp_cm));
    if (rend_flg == 1) {
        renderer.render(scene, camera)
    };
    if (sht_qlk_tm == 0) {
        if (b_s == 0 && trn_stg > 2) {
            var tg = bp_f["c" + (Math.floor(Math.random() * 5) + 1)];
            if (trn_stg > 4) {
                mtm_mve(tg, 0)
            }
        };
        var edf_tg = bp_f["c" + (Math.floor(Math.random() * 5) + 6)];
        if (trn_stg > 4 && edf_tg != epg && edf_tg.rct == 0 && edf_tg.z > -250 && Math.random() > -.9) {
            mrk_r(edf_tg, 0, 1)
        };
        if (epg.z > -250) {
            if (trn_stg < 2) {
                mrk_df_ps()
            } else if (sht_blk == 0) {
                mrk_pos(pg.tgx, pg.tgz, pg)
            }
        }
    };
    switch (b_s) {
        case 0:
        case 2:
            var chpt = pg.mms.getObjectByName("Armature_BALL");
            var hnd_pos = new THREE.Vector3();
            var hnd_pos_ch = new THREE.Vector3();
            hnd_pos.copy(chpt.localToWorld(hnd_pos_ch));
            bx = hnd_pos.x;
            by = hnd_pos.y;
            bz = hnd_pos.z;
            if (b_s == 0 && by > 30 && dnk_sht == 0) {};
            if (pg.act[0].time > .34 && pg.act[0].time < .36 && b_snd_t == 0 && fsndpl == 1 && trn_stg > 0 && rs_anm == 0) {
                sndf(3, .03);
                b_snd_t = 30
            };
            if (b_snd_t > 0) {
                b_snd_t--
            };
            ball.rotation.z += .02;
            ball.rotation.y += .001;
            if (b_c > 0) {
                b_c++;
                if (b_c > 6) {
                    b_s = 3;
                    var Rx = gl_x - bx;
                    var Ry = gl_z - bz;
                    var Rds = Math.sqrt(Math.pow(Rx, 2) + Math.pow(Ry, 2));
                    var sht_Rds = Rds;
                    b_lt = 90;
                    var Rr = Math.atan2(Ry, Rx);
                    var sblt = 1.897616153;
                    switch (sht_typ) {
                        case 0:
                            b_j = 1.8 + Rds / 1800;
                            break;
                        case 1:
                            sblt = 2.447798;
                            b_j = 1.8;
                            b_fst = 1;
                            sht_q *= .3;
                            break;
                        case 2:
                            b_j = 1.8 * .85 + Rds / 1800;
                            var Rx1 = pg.x - gl_x;
                            var Ry1 = pg.z - gl_z;
                            var Rr1 = Math.atan2(Ry1, Rx1);
                            pg.sx = Math.cos(Rr1) * .7;
                            pg.sz = Math.sin(Rr1) * .7;
                            sht_q *= .3;
                            break;
                        case 3:
                            b_j = 2.4 + Rds / 1800;
                            if (Math.abs(sht_q) < .3) {
                                if (sht_q > 0) {
                                    sht_q += Math.random() * (.25 + lng_sht_p)
                                } else {
                                    sht_q -= Math.random() * (.25 + lng_sht_p)
                                }
                            };
                            if (Math.random() > .5 + lng_sht_p) {
                                sht_q *= (4 + Math.random() * 6)
                            };
                            lng_sht_p = 1;
                            break;
                        default:
                    };
                    var ec = 0;
                    var e = 0;
                    var c_by = by;
                    var c_b_j = b_j;
                    while (e == 0) {
                        c_by += c_b_j;
                        c_b_j -= .055;
                        if (c_b_j < 0 && c_by < 52) {
                            e = 1
                        };
                        ec++;
                        if (ec > 100) {
                            e = 1
                        }
                    };
                    if (sht_Rds > 120 && pg.s != 0) {
                        sht_q += Math.random() * 2 - 1
                    };
                    if (pg.i != 1 && pg.i != 2) {
                        var th_Rr1 = sht_tim_r;
                        var th_Rx2 = gl_x - pg.x;
                        var th_Ry2 = gl_z - pg.z;
                        var th_Rr2 = Math.atan2(th_Ry2, th_Rx2);
                        var mch = th_Rr2 - th_Rr1;
                        if (Math.abs(mch) >= m_pi) {
                            if (mch <= 0) {
                                mch += m_pi2
                            } else {
                                mch -= m_pi2
                            }
                        };
                        if (Math.abs(mch) > 2 && sht_typ == 0) {
                            sht_q *= 5
                        }
                    };
                    var Rx_blk = 0 - 300;
                    var Ry_blk = 110 - 30;
                    var Rds_blk = Math.sqrt(Math.pow(Rx_blk, 2) + Math.pow(Ry_blk, 2));
                    if (sht_blk > 0 && Rds_blk < 55) {
                        var blk_def = 3 + blk_lv;
                        sht_q *= blk_def
                    };
                    var sht_lng = .5;
                    if (sht_q > sht_lng) {
                        sht_q = sht_lng
                    };
                    if (sht_q < -sht_lng) {
                        sht_q = -sht_lng
                    };
                    sblt = sht_lt[ec - 1];
                    Rds += Math.abs(sht_q * 10);
                    b_tx = bx + Math.cos(Rr) * Rds * sblt;
                    b_tz = bz + Math.sin(Rr) * Rds * sblt;
                    if (ttl_sht_scr > 2000) {
                        if (Math.abs(sht_q) < .3) {
                            if (sht_q > 0) {
                                sht_q += Math.random() * (.1)
                            } else {
                                sht_q -= Math.random() * (.1)
                            }
                        }
                    };
                    sht_r -= pi2;
                    var Rd = sht_q * 30;
                    b_tx += Math.cos(sht_r) * Rd;
                    b_tz += Math.sin(sht_r) * Rd;
                    gt_sht_scr = Math.round(100 - (Math.abs(sht_q)) * 150) + 1;
                    if (gt_sht_scr > 100) {
                        gt_sht_scr = 100
                    };
                    if (sht_typ == 0 || sht_typ == 3) {
                        gt_sht_scr2 = 10
                    };
                    sht_rr = sht_q
                }
            };
            break;
        case 1:
            bx += (b_tx - bx) / 90;
            bz += (b_tz - bz) / 90;
            if (bll_bnd > 1) {
                if (bx > 130) {
                    bx = 130
                };
                if (bx < -130) {
                    bx = -130
                };
                if (by < -220) {
                    by = -220
                };
                if (by > 220) {
                    by = 220
                }
            };
            if (b_j != -99) {
                by += b_j;
                b_j -= .055;
                if (by < 2.4) {
                    sndf(3, .03);
                    by = 2.4;
                    b_j = Math.abs(b_j);
                    if (bll_bnd > 1) {
                        b_j /= 1.3;
                        if (bll_bnd > 2) {
                            b_s = 3
                        }
                    };
                    if (b_j > 1.5) {
                        b_j = 1.5
                    };
                    bll_bnd++
                }
            };
            ball.rotation.z += .2;
            ball.rotation.x += (b_tx - bx);
            break;
        case 3:
            var b_pw_x = (b_tx - bx) / b_lt;
            var b_pw_z = (b_tz - bz) / b_lt;
            bx += b_pw_x;
            bz += b_pw_z;
            if (bz > 274) {
                bz = 274
            };
            if (sht_blk > 0) {
                sht_blk++;
                if (((sht_typ == 1 && sht_blk == 18) || (sht_typ != 1 && sht_blk == 10)) && blk_hit == 1) {
                    var Rx = bx - epg.x;
                    var Ry = bz - epg.z;
                    var Rds = Math.sqrt(Math.pow(Rx, 2) + Math.pow(Ry, 2));
                    if (Rds < 20) {
                        sndf(4, .1);
                        var blk_tg = bp_f["c" + sht_blk_i];
                        var blk_r = -blk_tg.mms.rotation.y + p2;
                        b_tx = bx + Math.cos(blk_r) * 240;
                        b_tz = bz + Math.sin(blk_r) * 240;
                        b_j = 0;
                        b_fst = 1
                    }
                };
                if (sht_blk < 50) {
                    var blk_spd = 10;
                    if (blk_hit == 0) {
                        blk_spd = 30
                    };
                    epg.x += (epg.tgx - epg.x) / blk_spd;
                    epg.z += (epg.tgz - epg.z) / blk_spd
                }
            };
            if (b_j != -99) {
                by += b_j;
                b_j -= .055;
                if (by < 2.4) {
                    one_bnd++;
                    if (sht_aft_tm == 0) {
                        sndf(3, .02)
                    };
                    by = 2.4;
                    b_j = Math.abs(b_j) / 2;
                    if (b_j > 2) {
                        b_j = 2
                    };
                    if (b_j < .8) {
                        if (sht_aft_tm == 0 && b_gl != 2) {
                            sht_aft_tm = 198
                        }
                    };
                    if (one_bnd > 6) {
                        b_j = -99
                    }
                };
                if (Math.abs(bx) < 16 && by < gl_y + 17 && by > gl_y && bz > gl_z + 3 && bz < gl_z + 8) {
                    b_fst = 1;
                    b_tz = gl_z - (b_tz - gl_z);
                    if (b_brd == 0) {
                        sndf(10, .12)
                    };
                    if (by > gl_y + 15) {
                        by = gl_y + 17;
                        b_j = 1;
                        b_tz -= 30
                    } else {
                        bz = gl_z + 3
                    };
                    b_brd = 1
                };
                if (net_anm_c != 0) {
                    net_anm.update(.006)
                };
                if (b_gl == 0 && b_j < 0 && by < 52) {
                    b_fst = 1;
                    var Rx = gl_x - bx;
                    var Ry = gl_z - bz;
                    var Rds = Math.sqrt(Math.pow(Rx, 2) + Math.pow(Ry, 2));
                    if (Rds < 1.4) {
                        var u_b_gl = b_gl;
                        b_gl = 1;
                        if (u_b_gl != 1) {
                            scr_mng()
                        }
                    } else if (Rds < 5.5 && by > 48) {
                        var rg_lt = Rds - 3.5;
                        var Rr = Math.atan2(Ry, Rx);
                        var Rd = -rg_lt * 18;
                        b_j = -b_j / 3;
                        if (Math.abs(b_j) > .3) {
                            sndf(12, .054);
                            net_anm_act.stop();
                            net_anm_act = net_anm.clipAction(animations_net[anim_name_net(animations_net, "Shoot_ring")]);
                            net_anm_act.setLoop(THREE.LoopOnce);
                            net_anm_act.clampWhenFinished = true;
                            net_anm_c = 1;
                            net_anm_act.time = 0;
                            net_anm_act.play()
                        } else {
                            if (Rd > 15) {
                                Rd = 15
                            };
                            if (Rd < -15) {
                                Rd = -15
                            }
                        };
                        b_tx = bx + Math.cos(Rr) * Rd + b_pw_x * 15;
                        b_tz = bz + Math.sin(Rr) * Rd + b_pw_z * 15
                    }
                };
                if (b_gl == 1 && b_j < 0 && by < 52 && by > 20 && dnk_sht == 0) {
                    var Rx = bx - gl_x;
                    var Ry = bz - gl_z;
                    var Rds = Math.sqrt(Math.pow(Rx, 2) + Math.pow(Ry, 2));
                    var Rr = Math.atan2(Ry, Rx);
                    if (Rds > 3) {
                        Rds = 3
                    };
                    bx = gl_x + Math.cos(Rr) * Rds;
                    bz = gl_z + Math.sin(Rr) * Rds;
                    if (by < 46.8) {
                        by = 46.8;
                        b_j = .1;
                        b_gl = 2;
                        sndf(0, .12);
                        if (Rds < 1.5) {
                            net_anm_act.stop();
                            net_anm_act = net_anm.clipAction(animations_net[anim_name_net(animations_net, "Shoot_normal")]);
                            net_anm_act.setLoop(THREE.LoopOnce);
                            net_anm_act.clampWhenFinished = true;
                            net_anm_c = 1;
                            net_anm_act.time = 0;
                            net_anm_act.play()
                        } else {
                            var Rx = b_tx - gl_x;
                            var Ry = b_tz - gl_z;
                            var Rr = Math.atan2(Ry, Rx);
                            goal_r.rotation.y = -Rr - pi2;
                            net_anm_act.stop();
                            net_anm_act = net_anm.clipAction(animations_net[anim_name_net(animations_net, "Shoot_rotation")]);
                            net_anm_act.setLoop(THREE.LoopOnce);
                            net_anm_act.clampWhenFinished = true;
                            net_anm_c = 1;
                            net_anm_act.time = 0;
                            net_anm_act.play()
                        };
                        b_tx = gl_x;
                        b_tz = gl_z;
                        b_lt = 20
                    }
                };
                var bl_rl = 1;
                if (scr_eft_c != 0) {
                    bl_rl = scr_eft_c / 10
                } else if (one_bnd > 0) {};
                if (b_tx > bx) {
                    var bl_rl_x = .2
                } else {
                    var bl_rl_x = -.2
                };
                if (b_tz > bz) {
                    var bl_rl_z = .19
                } else {
                    var bl_rl_z = -.19
                };
                if ((b_fst == 0 && b_gl == 0) || one_bnd == 0) {
                    ball.rotation.z += bl_rl_z / bl_rl / (one_bnd / 3 + 1);
                    ball.rotation.x += bl_rl_x / bl_rl / (one_bnd / 3 + 1)
                } else {
                    var bl_rt_x = -(b_tx - bx) / 182;
                    var bl_rt_z = (b_tz - bz) / 182;
                    if (bl_rt_x > .12) {
                        bl_rt_x = .12
                    };
                    if (bl_rt_x < -.12) {
                        bl_rt_x = -.12
                    };
                    if (bl_rt_z > .12) {
                        bl_rt_z = .12
                    };
                    if (bl_rt_z < -.12) {
                        bl_rt_z = -.12
                    };
                    if (b_tz > bz && b_tx > bx) {
                        bl_rt_x = -bl_rt_x;
                        bl_rt_z = -bl_rt_z
                    } else if (b_tz < bz && b_tx < bx) {
                        bl_rt_x = -bl_rt_x;
                        bl_rt_z = -bl_rt_z
                    };
                    ball.rotation.x += bl_rt_x;
                    ball.rotation.z += bl_rt_z
                }
            } else if (one_bnd > 0) {
                var bl_rt_x = -(b_tx - bx) / 182;
                var bl_rt_z = (b_tz - bz) / 182;
                if (bl_rt_x > .12) {
                    bl_rt_x = .12
                };
                if (bl_rt_x < -.12) {
                    bl_rt_x = -.12
                };
                if (bl_rt_z > .12) {
                    bl_rt_z = .12
                };
                if (bl_rt_z < -.12) {
                    bl_rt_z = -.12
                };
                ball.rotation.x += bl_rt_x;
                ball.rotation.z += bl_rt_z
            };
            break;
        default:
    };
    if (sht_aft_tm > 0) {
        sht_aft_tm++;
        if (sht_aft_tm > 150 && u_pt_fi == 0) {
            if (b_gl == 2) {
                cont_flg = 0;
                trn_stg++;
                if (trn_stg == 3) {
                    trn_stg = 4
                };
                if (trn_stg == 6) {
                    def_spd = .9
                };
                if (trn_stg > 6) {
                    blk_lv++;
                    def_rsp += .15;
                    def_spd += .05;
                    if (def_spd > 1.5) {
                        def_spd = 1.5
                    }
                };
                if (trn_stg > 7) {
                    trn_stg = 7
                };
                gm_rst()
            } else {
                if (mis_stg < 4 && (trn_stg < 1 || cont_flg == 1)) {
                    mis_stg++;
                    sht_qlk_stp = -1;
                    gm_rst();
                    ptc_chy = 0;
                    pt_ui("74/150/0/0#0#" + "320#300#100#100#0#0#0#0#0|" + "10#2#0#-60#100#100#100#0#0#0#0|" + "60#2#0#0#100#100#100#0#0#0#0|" + "20#1#0#-300#100#100#0#0#0#0#0|");
                    if (cont_flg == 1) {
                        pg_bl_kp = 80
                    }
                } else if (rs_anm == 0 && cont_anm == 0) {
                    fst_gmov()
                }
            }
        }
    };
    ball.position.set(bx, by, bz);
    b_shd.position.set(bx, .1, bz);
    if (b_s == 0 && pg_bl_kp > 75 && sht_qlk_tm == 0 && pg.rct == 0 && (((pg.pst == 2 || pg.pst == 3 || pg.pst == 4 || pg.pst == 8 || pg.pst == 9) && trn_stg > 4) || cont_flg == 1)) {
        var dr_tgx = rn_pst[pg.pst * 2];
        var dr_tgz = rn_pst[pg.pst * 2 + 1];
        var Rx = pg.x - gl_x;
        var Ry = pg.z - gl_z;
        var Rr = Math.atan2(Ry, Rx);
        var Rd = 15;
        if (cont_flg == 1) {
            Rd = 40;
            if (Math.random() > .5) {
                Rr += pi2 * 1.4
            } else {
                Rr -= pi2 * 1.4
            };
            pg.tgx = pg.x + Math.cos(Rr) * Rd;
            pg.tgz = pg.z + Math.sin(Rr) * Rd
        } else {
            if (Math.random() > .5) {
                Rr += pi2
            } else {
                Rr -= pi2
            };
            pg.tgx = dr_tgx + Math.cos(Rr) * Rd;
            pg.tgz = dr_tgz + Math.sin(Rr) * Rd
        };
        if (pg.tgz < 18) {
            pg.tgz = 10;
            pg_bl_kp = -25
        };
        if (pg.tgx > 90) {
            pg.tgx = 90;
            pg_bl_kp = -25
        };
        if (pg.tgx < -90) {
            pg.tgx = -90;
            pg_bl_kp = -25
        };
        pg.rct = 65;
        if (cont_flg == 1) {
            pg.rct = 180
        };
        atk_set(13, pg.i);
        pg.s = 2;
        if (fsndpl == 1) {
            sndf(Math.floor(Math.random() * 3) + 6, .008)
        }
    };
    if (sht_rr != -99 && blk_hit == 0) {
        spt_t1(85, 200, 9);
        spt_t1(86, 307 - sht_rr * (120 / .5), 40)
    };
    if (ttr_ok_gd == 0 && trn_stg < 2) {
        if (gd_anm_a != 1) {
            gd_anm_a -= .1;
            if (gd_anm_a < 0) {
                pt_f = {};
                pt_fi = 0;
                gd_anm_a = 1
            }
        };
        if (fanc1 > 0) {
            fanc1++;
            if (fanc1 == 130) {
                fanc1 = 1;
                guid_s()
            }
        };
        if (fanc2 > 0) {
            if (fanc2 > 0) {
                fanc2++;
                if (fanc2 == 130) {
                    fanc2 = 1;
                    guid_p()
                }
            }
        };
        switch (trn_stg) {
            case 0:
                if (stt_tim == 135 && bsk_gd1 == 0 && b_s == 0) {
                    fanc1 = 1;
                    guid_s()
                };
                break;
            case 1:
                if (stt_tim == 52 && bsk_gd2 == 0 && b_s == 0) {
                    fanc2 = 1;
                    guid_p()
                };
                break;
            default:
        }
    };
    if (cont_anm > 0) {
        d_box("#000", 0, 0, ww / ltl, wh / ltl, .5);
        var cnt_y = wh / ltl / 2 - 230;
        var ntm = +new Date();
        var cnt_anm_tim = (ntm - cont_tim);
        if (cont_tim_stp == 1) {
            cnt_anm_tim = cnt_anm_tim_f
        } else {
            cnt_anm_tim_f = cnt_anm_tim
        };
        ctx.fillStyle = "#e5004f";
        cir(320 * ltl, (129 + cnt_y) * ltl, 107 * ltl, m_pi2 * (cnt_anm_tim / 5500));
        ctx.fillStyle = "#000";
        ctx.beginPath();
        ctx.arc(320 * ltl, (129 + cnt_y) * ltl, 97 * ltl, 0, m_pi2, false);
        ctx.fill();
        ctx.fillStyle = "#fff";
        ctx.font = "bold " + (38 * ltl) + "px sans-serif";
        stset_c("CONTINUE?", 320, 0 + cnt_y);
        spt_t3(10, 283, 90 + cnt_y);
        var udr_y = wh / ltl - 250;
        spt_t3(1, 163, 0 + udr_y);
        spt_t3(9, 187, 21 + udr_y);
        ctx.fillStyle = "#362e2b";
        ctx.font = "bold " + (32 * ltl) + "px sans-serif";
        stset_c("CONTINUE", 352, 58 + udr_y);
        if (cnt_anm_tim >= 5500) {
            ctx.fillStyle = "#fff";
            ctx.font = "bold " + (26 * ltl) + "px sans-serif";
            stset_c("NO THANKS", 320, 165 + udr_y);
            d_box("#fff", 235, 172 + udr_y, 170, 2, 1)
        };
        if (onflg != -99) {
            switch (onflg) {
                case 1:
                    ctx.fillStyle = "#330";
                    ctx.beginPath();
                    ctx.arc(320 * ltl, (129 + cnt_y) * ltl, 97 * ltl, 0, m_pi2, false);
                    ctx.fill();
                    spt_t3(10, 283, 90 + cnt_y);
                    break;
                case 2:
                    ctx.globalCompositeOperation = "lighter";
                    ctx.globalAlpha = .65;
                    spt_t3(1, 163, 0 + udr_y);
                    spt_t3(9, 187, 21 + udr_y);
                    ctx.globalAlpha = 1;
                    ctx.globalCompositeOperation = "source-over";
                    break;
                case 3:
                    ctx.globalAlpha = 1;
                    ctx.fillStyle = "#ff0";
                    stset_c("NO THANKS", 320, 165 + udr_y);
                    d_box("#ff0", 235, 172 + udr_y, 170, 2, 1);
                    break;
                default:
            }
        };
        cont_anm++;
        if (cont_anm > 55) {
            cont_anm = 1;
            scs3(ttl_sht_scr)
        };
        if (cnt_anm_tim > 5500 && cont_tim_stp == 0) {
            cont_tim_stp = 1
        }; /*;if(cnt_anm_tim>7200 && cont_tim_stp==0){cont_tim_stp=1;pt_f={};pt_fi=0;if(fchk){;scd_gmov()}else{scd_gmov()}};*/
    } else if (rs_anm == 1) {
        ctx.globalAlpha = rslt_a;
        ctx.fillStyle = "#14477C";
        ctx.fillRect(0, 0, ww + 1, wh + 1);
        rslt_a += .05;
        if (rslt_a > .6) {
            rslt_a = .6
        };
        d_box("#FFF", 20, 20, 220, 50, .15);
        spt_t1_s(72, 26, 27, .5);
        ctx.fillStyle = "#fff696";
        ctx.font = "bold " + (28 * ltl) + "px sans-serif";
        if (spsv_bk == 0) {
            stset_r("Loading...", 227, 55)
        } else {
            stset_r(my_coin_a, 227, 55)
        };
        if (scr_mode == 1) {
            ctx.save();
            ctx.translate(0, -80 * ltl)
        };
        d_box("#1e1e1e", 145, 300, 350, 336, 1);
        d_box("#cacaca", 145, 300, 350, 39, 1);
        d_box("#fff", 145, 300, 350, 2, 1);
        d_box("#fcbe17", 145, 543, 350, 3, 1);
        ctx.fillStyle = "#000";
        ctx.font = "bold " + (22 * ltl) + "px sans-serif";
        stset_c("SCORE", 320, 327);
        scs2(ttl_sht_scr, 102, 355);
        spt_t1_s(72, 238, 558, .8);
        ctx.fillStyle = "#e8b343";
        ctx.font = (36 * ltl) + "px sans-serif";
        stset_c("x", 320, 599);
        ctx.font = "bold " + (45 * ltl) + "px sans-serif";
        stset_c(rs_stk_coin, 369, 604);
        switch (rs_as) {
            case 0:
                switch (rs_ac) {
                    case 0:
                        var coin_ds;
                        for (var ic1 = 0; ic1 < rs_get_coin; ic1++) {
                            coin_ds = 187 + ic1 * 45;
                            if (rs_get_coin > 7) {
                                coin_ds = 187 + ic1 * (285 / rs_get_coin)
                            };
                            if (scr_mode == 1) {
                                ptc_chy = -80
                            } else {
                                ptc_chy = 0
                            };
                            pt_ui("72/100/0/0#0#" + String(coin_ds) + "#496#50#50#100#0#0#0#0|" + String(50 + ic1 * 6) + "#0#0#0#50#50#100#0#0#0#0|" + "15#2#370#" + (589 + ptc_chy) + "#50#50#100#0#0#0#5#A|" + "10#0#0#0#50#50#0#0#0#0#0|")
                        };
                        rs_flg = rs_get_coin;
                        break;
                    default:
                };
                rs_ac++;
                if (rs_get_coin == 0 && rs_ac == 60) {
                    rs_ac = 0;
                    rs_as = 1
                };
                break;
            case 1:
                if ((rs_flg < (ttl_sht_scr / 100 | 0) || rs_flg < 1) && rs_ac == 3) {
                    if (scr_mode == 1) {
                        ptc_chy = -80
                    } else {
                        ptc_chy = 0
                    };
                    pt_ui("72/100/0/0#0#" + "320#410#50#50#0#0#0#0#0|" + "30#2#0#0#50#50#100#0#0#0#200|" + "30#2#370#" + (589 + ptc_chy) + "#53#50#100#0#0#0#20#A|");
                    sndf(13, .04);
                    rs_flg++;
                    rs_ac = 0
                };
                rs_ac++;
                break;
            case 2:
                if (rs_flg < rs_stk_coin && rs_ac == 3) {
                    pt_ui("72/100/0/0#0#" + "370#589#50#50#100#0#0#0#20|" + "30#2#180#52#50#50#100#0#0#0#10#A|");
                    sndf(13, .04);
                    rs_flg++;
                    rs_ac = 0
                };
                rs_ac++;
                break;
            case 3:
                rs_ac++;
                if (rs_ac > 52) {
                    if (aft_gldt_ld >= aft_gldt_mx) {
                        sndf(14, .03);
                        if (dly_rank_up == 1) {
                            ptc_chy = 0;
                            pt_ui("87/120/0/0#0#" + "452#45#100#100#0#0#0#0#0|" + "12#2#0#-20#100#100#100#0#0#0#0|" + "8#1#0#20#100#100#100#0#0#0#0|" + "8#2#0#-10#100#100#100#0#0#0#0|" + "8#1#0#10#100#100#100#0#0#0#0|" + "20#0#0#0#100#100#100#0#0#0#0|" + "12#2#0#-20#100#100#100#0#0#0#0|" + "8#1#0#20#100#100#100#0#0#0#0|" + "8#2#0#-10#100#100#100#0#0#0#0|" + "8#1#0#10#100#100#100#0#0#0#0|" + "20#0#0#0#100#100#100#0#0#0#0|" + "10#0#0#0#10#10#0#0#0#0#0|");
                            pt_ui("2/110/0/0#1#" + "452#45#10#10#100#0#0#0#0|" + "20#0#0#0#200#200#0#0#0#0#0|" + "35#0#0#0#0#0#0#0#0#0#0|" + "1#0#0#0#10#10#100#0#0#0#0|" + "20#0#0#0#200#200#0#0#0#0#0|");
                            pt_ui("2/110/0/0#1#" + "452#45#10#10#0#0#0#0#0|" + "10#0#0#0#10#10#100#0#0#0#0|" + "20#0#0#0#200#200#0#0#0#0#0|" + "25#0#0#0#0#0#0#0#0#0#0|" + "1#0#0#0#10#10#100#0#0#0#0|" + "10#0#0#0#10#10#100#0#0#0#0|" + "20#0#0#0#200#200#0#0#0#0#0|")
                        };
                        to_s2()
                    } else {
                        lding()
                    }
                };
                break;
            default:
        };
        if (scr_mode == 1) {
            ctx.restore()
        };
        if (er_anm > 0) {
            var er_anm_y = -79 + (200 - er_anm) * 6;
            if (er_anm_y > 15) {
                er_anm_y = 15
            };
            spt_t1(88, 248, er_anm_y);
            er_anm--
        }
    } else {
        if (ttl_sht_scr_a < ttl_sht_scr) {
            ttl_sht_scr_a++
        };
        scs1(ttl_sht_scr_a, 440, 8);
        if (boost_3p + boost_dk == 2) {
            spt_t1(91, 562, 68);
            spt_t1(92, 489, 68)
        } else if (boost_3p == 1) {
            spt_t1(92, 562, 68)
        } else if (boost_dk == 1) {
            spt_t1(91, 562, 68)
        }
    };
    p_sys();
    if (trn_stg > 1 && b_fst == 0 && b_gl == 0 && rs_anm == 0 && cont_flg == 0) {
        var ntm = +new Date();
        if (sht_qlk_stp != -1) {
            ntm = sht_qlk_stp
        };
        var gm_ps_tm = ntm - sht_qlk;
        gm_ps_tm *= 1.6;
        var gm_ps_tm2 = ((25000 - gm_ps_tm) / 1000 | 0);
        if (gm_ps_tm2 < 0) {
            gm_ps_tm2 = 0;
            bz_gv_c++;
            if (bz_gv_c == 190) {
                fst_gmov()
            };
            if (stt_tim > 100 && sht_qlk_tm == 0 && gm_ps_tm2 == 0) {
                ptc_chy = 0;
                pft = 3;
                ptf = 1;
                sht_qlk_tm = 1;
                sndf(16, .075);
                if (b_s == 0) {
                    pg.tgx = pg.x;
                    pg.tgz = pg.z
                }
            }
        };
        spt_t1(31, 15, 15);
        if (gm_ps_tm2 > 9) {
            var sht_ql_t = (gm_ps_tm2 / 10 | 0);
            var sht_ql_o = gm_ps_tm2 - sht_ql_t * 10;
            spt_t1(11 + sht_ql_t, 22, 36);
            spt_t1(11 + sht_ql_o, 68, 36)
        } else {
            spt_t1(11, 22, 36);
            spt_t1(11 + gm_ps_tm2, 68, 36);
            if (gm_ps_tm2 < 4 && sht_qlk_al != gm_ps_tm2) {
                sndf(18, .075);
                sht_qlk_al = gm_ps_tm2
            }
        }
    } else if (trn_stg == 0 && b_s == 0) {
        if (menu_skip == 0) {
            spt_t1(76, 28, 28);
            ctx.fillStyle = "#fff";
            ctx.font = "bold " + (18 * ltl) + "px sans-serif";
            stset_c("MENU", 53, 90)
        } else {
            lcir(54 * ltl, 54 * ltl);
            if (aft_gldt_ld >= aft_gldt_mx) {
                menu_skip = 0;
                to_s2()
            }
        }
    }
};

function scs1(i, lcx, lcy) {
    var nms = (i | 0);
    var mtsg = String(nms);
    var nmk = mtsg.length - 1;
    for (scx = 0; scx <= nmk; scx++) {
        mtsgb = Math.floor(mtsg.substr(scx, 1));
        spt_t1_s(mtsgb + 21, lcx + (5 - nmk + scx) * 31, lcy, .5)
    };
    if (nmk < 4) {
        for (scx = 1; scx <= 5; scx++) {
            mtsgb = Math.floor(mtsg.substr(scx, 1));
            if (5 - scx > nmk) {
                spt_t1_s(21, lcx + scx * 31, lcy, .5)
            }
        }
    }
};

function scs2(i, lcx, lcy) {
    var nms = (i | 0);
    var mtsg = String(nms);
    var nmk = mtsg.length - 1;
    for (scx = 0; scx <= nmk; scx++) {
        mtsgb = Math.floor(mtsg.substr(scx, 1));
        spt_t1_s(mtsgb + 21, lcx + (5 - nmk + scx) * 61, lcy, 1)
    };
    if (nmk < 4) {
        for (scx = 1; scx <= 5; scx++) {
            mtsgb = Math.floor(mtsg.substr(scx, 1));
            if (5 - scx > nmk) {
                spt_t1_s(21, lcx + scx * 61, lcy, 1)
            }
        }
    }
};

function scs3(i) {
    var st_anm_num = "00000" + String(i);
    st_anm_num = st_anm_num.substr(st_anm_num.length - 5, 5);
    pt_ui(String(21 + Math.floor(st_anm_num.substr(0, 1))) + "/160/0/0#0#" + "489#35#50#50#100#0#0#0#0|" + "10#2#0#0#40#40#100#0#0#0#0|" + "8#2#-155#28#130#130#100#0#0#0#0|" + "5#2#0#0#115#115#100#0#0#0#0|" + "5#2#0#0#120#120#100#0#0#0#0|" + "5#2#0#0#115#115#100#0#0#0#0|" + "5#0#0#0#115#115#100#0#0#0#0|" + "8#2#155#-28#50#50#100#0#0#0#0|" + "10#0#0#0#50#50#100#0#0#0#0|");
    pt_ui(String(21 + Math.floor(st_anm_num.substr(1, 1))) + "/160/0/0#0#" + "520#35#50#50#100#0#0#0#0|" + "10#2#0#0#40#40#100#0#0#0#0|" + "8#2#-120#28#130#130#100#0#0#0#0|" + "5#2#0#0#115#115#100#0#0#0#0|" + "5#2#0#0#120#120#100#0#0#0#0|" + "5#2#0#0#115#115#100#0#0#0#0|" + "5#0#0#0#115#115#100#0#0#0#0|" + "8#2#120#-28#50#50#100#0#0#0#0|" + "10#0#0#0#50#50#100#0#0#0#0|");
    pt_ui(String(21 + Math.floor(st_anm_num.substr(2, 1))) + "/160/0/0#0#" + "551#35#50#50#100#0#0#0#0|" + "10#2#0#0#40#40#100#0#0#0#0|" + "8#2#-85#28#130#130#100#0#0#0#0|" + "5#2#0#0#115#115#100#0#0#0#0|" + "5#2#0#0#120#120#100#0#0#0#0|" + "5#2#0#0#115#115#100#0#0#0#0|" + "5#0#0#0#115#115#100#0#0#0#0|" + "8#2#85#-28#50#50#100#0#0#0#0|" + "10#0#0#0#50#50#100#0#0#0#0|");
    pt_ui(String(21 + Math.floor(st_anm_num.substr(3, 1))) + "/160/0/0#0#" + "582#35#50#50#100#0#0#0#0|" + "10#2#0#0#40#40#100#0#0#0#0|" + "8#2#-50#28#130#130#100#0#0#0#0|" + "5#2#0#0#115#115#100#0#0#0#0|" + "5#2#0#0#120#120#100#0#0#0#0|" + "5#2#0#0#115#115#100#0#0#0#0|" + "5#0#0#0#115#115#100#0#0#0#0|" + "8#2#50#-28#50#50#100#0#0#0#0|" + "10#0#0#0#50#50#100#0#0#0#0|");
    pt_ui(String(21 + Math.floor(st_anm_num.substr(4, 1))) + "/160/0/0#0#" + "613#35#50#50#100#0#0#0#0|" + "10#2#0#0#40#40#100#0#0#0#0|" + "8#2#-15#28#130#130#100#0#0#0#0|" + "5#2#0#0#115#115#100#0#0#0#0|" + "5#2#0#0#120#120#100#0#0#0#0|" + "5#2#0#0#115#115#100#0#0#0#0|" + "5#0#0#0#115#115#100#0#0#0#0|" + "8#2#15#-28#50#50#100#0#0#0#0|" + "10#0#0#0#50#50#100#0#0#0#0|")
};

function gm_rst() {
    b_j = -99;
    b_s = 0;
    b_c = 0;
    b_gl = 0;
    dnk_sht = 0;
    cmr_d = -60;
    b_cmy = 0;
    b_brd = 0;
    b_fst = 0;
    b_lt = 90;
    net_anm_c = 0;
    fm_set_fst();
    for (var i = 1; i < 11; i++) {
        tg = bp_f["c" + i];
        if (tg.z < -250) {
            tg.x = -500
        }
    }
};

function cont_st() {
    mis_stg = 0;
    bout_ct = 0;
    cont_anm = 0;
    cont_tim = 0;
    cont_tim_stp = 0;
    cont_use = 1;
    cont_flg = 1;
    gm_rst();
    pg_bl_kp = 80;
    sndf(14, .06);
    pt_ui("83/150/0/0#0#" + "320#210#10#10#0#0#0#0#0|" + "8#1#0#0#120#120#100#0#0#0#0|" + "3#5#0#0#85#85#100#0#0#0#0|" + "3#5#0#0#110#110#100#0#0#0#0|" + "3#5#0#0#100#100#100#0#0#0#0|" + "40#0#0#0#100#100#100#0#0#0#0|" + "20#5#0#0#100#100#0#0#0#0#0|");
    for (var ptc_i = 0; ptc_i < 8; ptc_i++) {
        pt_ui("34/160/0/0#1#" + "320#210#150#150#100#0#0#0#0|" + "55#2#0#0#150#150#0#0#300#0#300|");
        pt_ui("60/160/0/0#1#" + "320#210#150#150#100#0#0#0#0|" + "55#2#0#0#150#150#0#0#300#0#300|");
        pt_ui("61/160/0/0#1#" + "320#210#150#150#100#0#0#0#0|" + "55#2#0#0#150#150#0#0#300#0#300|")
    };
    pt_ui("32/130/0/0#1#" + "320#210#50#50#100#0#0#0#0|" + "10#1#0#0#120#120#100#0#0#0#0|" + "20#5#0#0#175#175#0#0#0#0#0|");
    pt_ui("33/130/0/0#1#" + "320#210#20#20#0#0#0#0#0|" + "5#1#0#0#150#150#100#0#0#0#0|" + "20#5#0#0#350#350#0#0#0#0#0|")
};

function fst_gmov() {
    if (bout_ct == 0) {
        bout_ct = 1;
        sht_rr = -99;
        ptc_chy = 0;
        var ntm = +new Date();
        var sbn_show_vtr_time = ntm - show_vtr_time;
        if (is_first == 1 && mtch_ct < 2) {
            if (mtch_ct == 0) {
                SAMAL.player.canSubscribeBotAsync().then((can_subscribe) => {
                    if (can_subscribe) {} else {
                        return Promise.reject()
                    };
                    return SAMAL.player.subscribeBotAsync()
                }).then(() => {
                    btn_snd();
                    scd_gmov()
                }).catch((err) => {;
                    if (err != null) {
                        if (err.code === 'USER_INPUT') {
                            btn_snd()
                        }
                    };
                    if (trn_stg < 2 || (fb_ad_v != 1 && fb_ad_v2 != 1)) {
                        if (fb_ad_i1 == 1) {
                            show_int1 = 0;
                            showInterstitial()
                        } else {
                            scd_gmov()
                        }
                    } else {
                        sndf(19, .14);
                        cont_anm = 1;
                        cont_tim = +new Date();
                        cont_tim_stp = 0;
                        scs3(ttl_sht_scr)
                    }
                })
            } else {
                if (trn_stg < 2 || (fb_ad_v != 1 && fb_ad_v2 != 1)) {
                    if (fb_ad_i1 == 1) {
                        show_int1 = 0;
                        showInterstitial()
                    } else {
                        scd_gmov()
                    }
                } else {
                    sndf(19, .14);
                    cont_anm = 1;
                    cont_tim = +new Date();
                    cont_tim_stp = 0;
                    scs3(ttl_sht_scr)
                }
            }
        } else if (cont_use == 1 || (fb_ad_v != 1 && fb_ad_v2 != 1) || sbn_show_vtr_time < 32000) {
            if (fchk) {;
                scd_gmov()
            } else {
                scd_gmov()
            }
        } else {
            if (trn_stg < 2) {
                if (fb_ad_i1 == 1) {
                    show_int1 = 0;
                    showInterstitial()
                } else {
                    scd_gmov()
                }
            } else {
                sndf(19, .14);
                cont_anm = 1;
                cont_tim = +new Date();
                cont_tim_stp = 0;
                scs3(ttl_sht_scr)
            }
        }
    };
    console.log("gameover_first");
    // SAMAL.logEvent("gameover_first", 0, null)
};

function scd_gmov() {
    cont_anm = 0;
    cont_use = 0;
    cont_flg = 0;
    rs_anm = 1;
    sd_st_get_coin = rs_get_coin + Math.floor(ttl_sht_scr / 100);
    if (sd_st_get_coin < 1) {
        sd_st_get_coin = 1
    };
    my_coin += sd_st_get_coin;
    if (fchk) {
        if (fb_ad_i1 != 1) {
            adload_i1()
        }
    };
    if (fchk) {
        if (hashKey != -1) {
            // send_rslt()
        };
        if (bestSessionScore < ttl_sht_scr) {
            bestSessionScore = ttl_sht_scr;
            // SAMAL.postSessionScore(bestSessionScore)
        }
    };
    sgl_adi2()
};

function sgl_adi2() {
    mtch_ct++;
    console.log("BSKR_first_play_record:");
    if (fchk) {;
        if (mtch_ct == 1 && spsv_bk > 0) {
            swgm_cl()
        };
        console.log("Score"+ttl_sht_scr);
        console.log("Coin"+sd_st_get_coin);
        if (is_first == 1) {
            // console.log("Score"+ttl_sht_scr);
            // console.log("Coin"+sd_st_get_coin);
            // SAMAL.logEvent("BSKR_first_play_record", 0, {
            //     "Score": ttl_sht_scr,
            //     "Coin": sd_st_get_coin
            // })
        } else {
            // SAMAL.logEvent("BSKR_user_record", 0, {
            //     "Score": ttl_sht_scr,
            //     "Coin": sd_st_get_coin
            // })
        }
    }
};

function ttr_lv_set() {
    switch (ttr_lv) {
        case 0:
            ttr_ok = 0;
            ttr_ok_gd = 0;
            break;
        case 1:
            ttr_ok = 1;
            ttr_ok_gd = 0;
            break;
        case 2:
            ttr_ok = 1;
            ttr_ok_gd = 1;
            break;
        default:
            ttr_ok = 1;
            ttr_ok_gd = 1;
            break
    }
};

function to_s2() {
    rst_ct = 0;
    cstm_scr = ttl_sht_scr;
    my_coin_a = my_coin;
    var ntm = +new Date();
    var sbn_show_vtr_time = ntm - show_vtr_time;
    if (sbn_show_vtr_time < 32000) {
        var set_sbn_show_vtr_time = Math.floor((32000 - sbn_show_vtr_time) / 1000) + 1;
        if (bns_tim < set_sbn_show_vtr_time) {
            bns_tim = set_sbn_show_vtr_time;
            bns_tm = Math.floor(+new Date() / 1000);
            bns_mt = bns_tm
        }
    };
    var set_ttr_lv = 0;
    if (ttl_sht_scr > 1000) {
        set_ttr_lv = 2
    } else if (ttl_sht_scr > 400) {
        set_ttr_lv = 1
    };
    if (set_ttr_lv > ttr_lv) {
        ttr_lv = set_ttr_lv
    };
    if (ttr_lv != u_ttr_lv) {
        if (fchk) {
        
        }
    };
    ttr_lv_set();
    u_ttr_lv = ttr_lv;
    s = 2;
    if (trn_stg > 0) {
        boost_3p = 0;
        boost_dk = 0
    };
    hd_tg_tm = 0;
    hd_tg_at = 0;
    hd_tg_am = 0
};

function vs_match_set() {
    if (fchk) {
        is_frd = 0;
        var vs_match_set_i = 0;
        var u_vs_nm = vs_nm;
        if (mtch_ct == 2) {
            if (vs_recommend_list.length > 0) {
                vs_match_set_i = 2
            } else if (vs_friend_list.length > 0) {
                vs_match_set_i = 1
            }
        } else {
            if (vs_friend_list.length > 0) {
                vs_match_set_i = 1
            } else if (vs_recommend_list.length > 0) {
                vs_match_set_i = 2
            }
        };
        if (vs_match_set_i == 1) {
            var i = Math.floor(Math.random() * vs_friend_list.length);
            vs_pho_u = vs_friend_list[i].pho_img;
            vs_nm = vs_friend_list[i].nm;
            vs_id = vs_friend_list[i].uid;
            if (u_vs_nm == vs_nm) {
                i = Math.floor(Math.random() * vs_friend_list.length);
                vs_pho_u = vs_friend_list[i].pho_img;
                vs_nm = vs_friend_list[i].nm;
                vs_id = vs_friend_list[i].uid;
                if (u_vs_nm == vs_nm) {
                    i = Math.floor(Math.random() * vs_friend_list.length);
                    vs_pho_u = vs_friend_list[i].pho_img;
                    vs_nm = vs_friend_list[i].nm;
                    vs_id = vs_friend_list[i].uid
                }
            };
            is_frd = 1
        } else if (vs_match_set_i == 2) {
            var i = Math.floor(Math.random() * vs_recommend_list.length);
            vs_pho_u = vs_recommend_list[i].pho_img;
            vs_nm = vs_recommend_list[i].nm;
            vs_id = vs_recommend_list[i].uid;
            if (u_vs_nm == vs_nm) {
                i = Math.floor(Math.random() * vs_recommend_list.length);
                vs_pho_u = vs_recommend_list[i].pho_img;
                vs_nm = vs_recommend_list[i].nm;
                vs_id = vs_recommend_list[i].uid;
                if (u_vs_nm == vs_nm) {
                    i = Math.floor(Math.random() * vs_recommend_list.length);
                    vs_pho_u = vs_recommend_list[i].pho_img;
                    vs_nm = vs_recommend_list[i].nm;
                    vs_id = vs_recommend_list[i].uid
                }
            }
        }
    }
};

function inhn() {
    tm = 0;
    mt = -1;
    flt = 0;
    pi2 = Math.PI / 2;
    pi_d_l = Math.PI - Math.PI / 16;
    pi_d_r = Math.PI / 16;
    fanc1 = 0;
    fanc2 = 0;
    msx = 0;
    msy = 0;
    msi = 0;
    mss = 1;
    mst = -1;
    msg = .9;
    m_pi = Math.PI;
    m_pi2 = m_pi * 2;
    tc_f = {};
    tc_fi = 0;
    bp_f = {};
    bp_fi = 0;
    onflg = 0;
    unflg = 0;
    uarx1 = 0;
    uary1 = 0;
    uarx2 = 0;
    uary2 = 0
};

function onflg_rst() {
    onflg = -99;
    uarx1 = 0;
    uary1 = 0;
    uarx2 = 0;
    uary2 = 0
};

function p_sys() {
    if (ptf > 0) {
        ptf++;
        switch (ptf) {
            case 2:
                gl_efc_x = 0;
                gl_efc_y = 0;
                if (pft == 3) {
                    for (var ptc_i = 0; ptc_i < 2; ptc_i++) {
                        pt_ui("66/100/0/0#1#" + "320#300#30#30#0#-8#0#15#20|" + "24#1#0#0#200#200#100#-6#0#15#0|" + "100#5#0#0#150#100#0#0#0#15#0|");
                        pt_ui("67/100/0/0#1#" + "320#300#30#30#0#8#0#15#20|" + "10#1#0#0#100#150#100#6#0#15#0|" + "100#5#0#0#100#25#0#0#0#15#0|");
                        pt_ui("67/100/0/0#1#" + "320#300#30#30#0#-6#0#15#20|" + "15#1#0#0#200#200#100#-4#0#15#0|" + "100#5#0#0#150#100#0#2#0#15#0|");
                        pt_ui("66/100/0/0#1#" + "320#300#30#30#0#6#0#15#20|" + "24#1#0#0#100#150#100#4#0#15#0|" + "100#5#0#0#100#100#0#-2#0#15#0|");
                        pt_ui("67/100/0/0#1#" + "320#350#30#30#0#-6#0#15#20|" + "24#1#0#0#100#100#100#-4#0#15#0|" + "100#5#0#0#100#100#0#2#0#15#0|");
                        pt_ui("68/100/0/0#1#" + "320#350#30#30#0#6#80#0#40|" + "18#1#0#0#100#150#100#4#0#15#0|" + "100#5#0#0#100#100#0#-2#0#15#0|")
                    };
                    pt_ui("69/150/0/0#0#" + "320#300#400#400#0#0#0#0#0|" + "8#2#0#0#80#80#100#0#0#0#0|" + "3#2#0#0#115#115#100#0#0#0#0|" + "3#2#0#0#90#90#100#0#0#0#0|" + "3#2#0#0#100#100#100#0#0#0#0|" + "150#2#0#0#90#90#100#0#0#0#0|" + "20#5#0#0#80#80#0#0#0#0#0|");
                    pt_ui("70/100/0/0#0#" + "320#350#400#400#0#0#0#0#0|" + "8#2#0#0#80#80#100#0#0#0#0|" + "3#2#0#0#115#115#100#0#0#0#0|" + "3#2#0#0#90#90#100#0#0#0#0|" + "3#2#0#0#100#100#100#0#0#0#0|" + "150#2#0#0#92#92#100#0#0#0#0|" + "20#5#0#0#84#84#0#0#0#0#0|")
                } else if (gt_sht_scr > 98) {
                    sndf(17, .045);
                    var lst_efc_t1 = "30";
                    if (gt_sht_scr2 == 0) {
                        lst_efc_t1 = "60"
                    };
                    if (gt_sht_scr < 100) {
                        pt_ui("72/170/0/0#0#" + "320#489#100#100#100#0#0#0#0|" + "18#5#0#-270#100#100#100#0#0#0#0|" + "40#0#0#0#100#100#100#0#0#0#0|" + "15#0#0#0#100#100#0#0#0#0#0|")
                    } else {
                        pt_ui("72/170/0/0#0#" + "320#489#100#100#100#0#0#0#0|" + "18#5#0#-290#100#100#100#0#0#0#0|" + "40#0#0#0#100#100#100#0#0#0#0|" + "15#0#0#0#100#100#0#0#0#0#0|");
                        pt_ui("72/170/0/0#0#" + "320#489#100#100#0#0#0#0#0|" + "5#0#0#00#100#100#100#0#0#0#0|" + "18#5#0#-255#100#100#100#0#0#0#0|" + "40#0#0#0#100#100#100#0#0#0#0|" + "15#0#0#0#100#100#0#0#0#0#0|")
                    }
                };
                break;
            case 3:
                if (pft == 3) {
                    ptf = 0
                };
                break;
            case 15:
                if (gt_sht_scr > 79) {
                    var evlt = "79";
                    if (gt_sht_scr == 100) {
                        evlt = "82"
                    } else if (gt_sht_scr == 99) {
                        evlt = "81"
                    } else if (gt_sht_scr > 89) {
                        evlt = "80"
                    };
                    var lst_efc_t1 = "20";
                    if (gt_sht_scr2 == 0) {
                        lst_efc_t1 = "57"
                    };
                    pt_ui(evlt + "/130/0/0#1#" + "330#425#5#5#0#-6#0#0#0|" + "6#0#0#0#5#5#0#-6#0#0#0|" + "8#1#0#0#130#130#80#-6#0#0#0|" + "30#0#0#0#140#140#80#-6#0#0#0|" + lst_efc_t1 + "#0#0#0#150#150#0#-6#0#0#0|")
                };
                break;
            case 20:
                var gt_sht_scr_t = (gt_sht_scr / 10 | 0);
                var gt_sht_scr_o = gt_sht_scr - gt_sht_scr_t * 10;
                var lst_efc_t1 = "30";
                var lst_efc_t2 = "10";
                if (gt_sht_scr2 == 0) {
                    lst_efc_t1 = "60";
                    lst_efc_t2 = "20"
                };
                switch (pft) {
                    case 0:
                        sndf(14, .055);
                        pt_ui("32/130/0/0#1#" + "320#489#50#50#100#0#0#0#0|" + "10#0#0#0#200#200#100#0#0#0#0|" + "20#2#0#0#500#500#0#0#0#0#0|");
                        pt_ui(String(40 + gt_sht_scr_t) + "/150/0/0#0#" + "288#489#400#400#0#0#0#0#0|" + "8#5#0#0#80#80#100#0#0#0#0|" + "3#5#0#0#115#115#100#0#0#0#0|" + "3#5#0#0#90#90#100#0#0#0#0|" + "3#5#0#0#100#100#100#0#0#0#0|" + lst_efc_t1 + "#5#0#0#100#100#100#0#0#0#0|" + lst_efc_t2 + "#5#0#0#100#100#0#0#0#0#0|");
                        pt_ui(String(40 + gt_sht_scr_o) + "/150/0/0#0#" + "352#489#400#400#0#0#0#0#0|" + "8#5#0#0#80#80#100#0#0#0#0|" + "3#5#0#0#115#115#100#0#0#0#0|" + "3#5#0#0#90#90#100#0#0#0#0|" + "3#5#0#0#100#100#100#0#0#0#0|" + lst_efc_t1 + "#5#0#0#100#100#100#0#0#0#0|" + lst_efc_t2 + "#5#0#0#100#100#0#0#0#0#0|");
                        for (var ptc_i = 0; ptc_i < 2; ptc_i++) {
                            pt_ui("37/100/0/0#1#" + "320#486#100#200#0#-8#0#40#0|" + "25#1#0#0#100#200#100#-8#0#15#0|" + "65#5#0#0#100#150#0#-8#0#15#0|");
                            pt_ui("38/100/0/0#1#" + "320#486#100#50#0#-8#0#40#0|" + "25#1#0#0#100#150#100#-8#0#15#0|" + "65#5#0#0#100#25#0#-8#0#15#0|");
                            pt_ui("37/100/0/0#1#" + "320#486#100#50#0#-4#0#40#0|" + "25#1#0#0#100#100#100#-2#0#15#0|" + "65#5#0#0#100#50#0#0#0#15#0|");
                            pt_ui("38/100/0/0#1#" + "320#486#100#50#0#-4#0#40#0|" + "25#1#0#0#100#200#100#-4#0#15#0|" + "65#5#0#0#100#25#0#-4#0#15#0|")
                        };
                        pt_ui("35/100/0/0#1#" + "500#486#100#50#0#-8#0#40#0|" + "25#1#0#0#100#100#100#-10#0#15#0|" + "65#5#0#0#100#150#0#-12#0#15#0|");
                        pt_ui("36/100/0/0#1#" + "500#486#100#50#0#-8#0#40#0|" + "25#1#0#0#100#100#100#-10#0#15#0|" + "65#5#0#0#100#25#0#-12#0#15#0|");
                        pt_ui("35/100/0/0#1#" + "100#506#100#50#0#160#0#40#0|" + "25#1#0#0#100#100#100#158#0#15#0|" + "65#5#0#0#100#150#0#156#0#15#0|");
                        break;
                    case 1:
                        sndf(14, .07);
                        pt_ui("32/130/0/0#1#" + "320#489#50#50#100#0#0#0#0|" + "10#3#0#0#200#200#100#0#0#0#0|" + "20#2#0#0#500#500#0#0#0#0#0|");
                        pt_ui("32/130/0/0#1#" + "320#489#500#500#100#180#0#0#0|" + "10#3#0#0#200#200#100#180#0#0#0|" + "20#2#0#0#50#50#0#180#0#0#0|");
                        pt_ui(String(50 + gt_sht_scr_t) + "/150/0/0#0#" + "288#489#400#400#0#0#0#0#0|" + "8#5#0#0#80#80#100#0#0#0#0|" + "3#5#0#0#115#115#100#0#0#0#0|" + "3#5#0#0#90#90#100#0#0#0#0|" + "3#5#0#0#100#100#100#0#0#0#0|" + lst_efc_t1 + "#5#0#0#100#100#100#0#0#0#0|" + lst_efc_t2 + "#5#0#0#100#100#0#0#0#0#0|");
                        pt_ui(String(50 + gt_sht_scr_o) + "/150/0/0#0#" + "352#489#400#400#0#0#0#0#0|" + "8#5#0#0#80#80#100#0#0#0#0|" + "3#5#0#0#115#115#100#0#0#0#0|" + "3#5#0#0#90#90#100#0#0#0#0|" + "3#5#0#0#100#100#100#0#0#0#0|" + lst_efc_t1 + "#5#0#0#100#100#100#0#0#0#0|" + lst_efc_t2 + "#5#0#0#100#100#0#0#0#0#0|");
                        for (var ptc_i = 0; ptc_i < 12; ptc_i++) {
                            pt_ui("61/160/0/0#1#" + "320#489#150#150#100#0#0#0#30|" + "55#2#0#0#400#400#0#0#100#0#600|")
                        };
                        for (var ptc_i = 0; ptc_i < 2; ptc_i++) {
                            pt_ui("37/100/0/0#1#" + "320#486#100#200#0#-8#0#40#0|" + "25#1#0#0#100#200#100#-8#0#15#0|" + "65#5#0#0#100#150#0#-8#0#15#0|");
                            pt_ui("38/100/0/0#1#" + "320#486#100#50#0#-8#0#40#0|" + "25#1#0#0#100#150#100#-8#0#15#0|" + "65#5#0#0#100#25#0#-8#0#15#0|");
                            pt_ui("37/100/0/0#1#" + "320#486#100#50#0#-4#0#40#0|" + "25#1#0#0#100#100#100#-2#0#15#0|" + "65#5#0#0#100#50#0#0#0#15#0|");
                            pt_ui("38/100/0/0#1#" + "320#486#100#50#0#-4#0#40#0|" + "25#1#0#0#100#200#100#-4#0#15#0|" + "65#5#0#0#100#25#0#-4#0#15#0|")
                        };
                        pt_ui("35/100/0/0#1#" + "500#486#100#50#0#-8#0#40#0|" + "25#1#0#0#100#100#100#-10#0#15#0|" + "65#5#0#0#100#150#0#-12#0#15#0|");
                        pt_ui("36/100/0/0#1#" + "500#486#100#50#0#-8#0#40#0|" + "25#1#0#0#100#100#100#-10#0#15#0|" + "65#5#0#0#100#25#0#-12#0#15#0|");
                        pt_ui("35/100/0/0#1#" + "100#506#100#50#0#160#0#40#0|" + "25#1#0#0#100#100#100#158#0#15#0|" + "65#5#0#0#100#150#0#156#0#15#0|");
                        break;
                    case 2:
                        sndf(14, .08);
                        pt_ui("32/130/0/0#1#" + "320#489#50#50#100#0#0#0#0|" + "10#3#0#0#200#200#100#0#0#0#0|" + "20#2#0#0#500#500#0#0#0#0#0|");
                        pt_ui("32/130/0/0#1#" + "320#489#500#500#100#180#0#0#0|" + "10#3#0#0#200#200#100#180#0#0#0|" + "20#2#0#0#50#50#0#180#0#0#0|");
                        pt_ui("39/150/0/0#0#" + "320#489#400#400#0#0#0#0#0|" + "8#5#0#0#80#80#100#0#0#0#0|" + "3#5#0#0#115#115#100#0#0#0#0|" + "3#5#0#0#90#90#100#0#0#0#0|" + "3#5#0#0#100#100#100#0#0#0#0|" + lst_efc_t1 + "#5#0#0#100#100#100#0#0#0#0|" + lst_efc_t2 + "#5#0#0#100#100#0#0#0#0#0|");
                        for (var ptc_i = 0; ptc_i < 8; ptc_i++) {
                            pt_ui("34/160/0/0#1#" + "320#489#150#150#100#0#0#0#30|" + "55#2#0#0#400#400#0#0#100#0#600|");
                            pt_ui("60/160/0/0#1#" + "320#489#150#150#100#0#0#0#30|" + "55#2#0#0#400#400#0#0#100#0#600|");
                            pt_ui("61/160/0/0#1#" + "320#489#150#150#100#0#0#0#30|" + "55#2#0#0#400#400#0#0#100#0#600|")
                        };
                        for (var ptc_i = 0; ptc_i < 2; ptc_i++) {
                            pt_ui("37/100/0/0#1#" + "320#486#100#200#0#-8#0#40#0|" + "25#1#0#0#100#200#100#-8#0#15#0|" + "65#5#0#0#100#150#0#-8#0#15#0|");
                            pt_ui("38/100/0/0#1#" + "320#486#100#50#0#-8#0#40#0|" + "25#1#0#0#100#150#100#-8#0#15#0|" + "65#5#0#0#100#25#0#-8#0#15#0|");
                            pt_ui("37/100/0/0#1#" + "320#486#100#50#0#-4#0#40#0|" + "25#1#0#0#100#100#100#-2#0#15#0|" + "65#5#0#0#100#50#0#0#0#15#0|");
                            pt_ui("38/100/0/0#1#" + "320#486#100#50#0#-4#0#40#0|" + "25#1#0#0#100#200#100#-4#0#15#0|" + "65#5#0#0#100#25#0#-4#0#15#0|")
                        };
                        pt_ui("35/100/0/0#1#" + "500#486#100#50#0#-8#0#40#0|" + "25#1#0#0#100#100#100#-10#0#15#0|" + "65#5#0#0#100#150#0#-12#0#15#0|");
                        pt_ui("36/100/0/0#1#" + "500#486#100#50#0#-8#0#40#0|" + "25#1#0#0#100#100#100#-10#0#15#0|" + "65#5#0#0#100#25#0#-12#0#15#0|");
                        pt_ui("35/100/0/0#1#" + "100#506#100#50#0#160#0#40#0|" + "25#1#0#0#100#100#100#158#0#15#0|" + "65#5#0#0#100#150#0#156#0#15#0|");
                        break;
                    default:
                };
                break;
            case 67:
                var bns_efc = "";
                if (gt_sht_scr2 == 30) {
                    bns_efc = "63";
                    if (boost_dk == 1) {
                        ptc_chx = 50;
                        ptc_chy = 110;
                        pt_ui("89/160/0/0#0#" + "320#320#5#5#0#0#0#0#0|" + "8#0#0#0#5#5#0#0#0#0#0|" + "10#1#80#-55#120#120#100#0#0#0#0|" + "5#2#0#0#85#85#100#0#0#0#0|" + "3#2#0#0#110#110#100#0#0#0#0|" + "3#2#0#0#100#100#100#0#0#0#0|" + "38#0#0#0#100#100#100#0#0#0#0|" + "20#0#0#0#100#100#0#0#0#0#0|");
                        ptc_chx = 0;
                        ptc_chy = 0;
                        sndf(20, .07)
                    }
                } else if (gt_sht_scr2 == 10) {
                    bns_efc = "62";
                    if (boost_3p == 1) {
                        ptc_chx = 50;
                        ptc_chy = 110;
                        pt_ui("90/160/0/0#0#" + "320#320#5#5#0#0#0#0#0|" + "8#0#0#0#5#5#0#0#0#0#0|" + "10#1#80#-55#120#120#100#0#0#0#0|" + "5#2#0#0#85#85#100#0#0#0#0|" + "3#2#0#0#110#110#100#0#0#0#0|" + "3#2#0#0#100#100#100#0#0#0#0|" + "38#0#0#0#100#100#100#0#0#0#0|" + "20#0#0#0#100#100#0#0#0#0#0|");
                        ptc_chx = 0;
                        ptc_chy = 0;
                        sndf(20, .07)
                    }
                };
                if (bns_efc != "") {
                    sndf(15, .07);
                    for (var ptc_i = 0; ptc_i < 12; ptc_i++) {
                        pt_ui("60/140/0/0#1#" + "320#480#150#150#100#0#0#0#30|" + "55#2#0#0#300#300#0#0#100#0#400|")
                    };
                    pt_ui("32/130/0/0#1#" + "320#480#50#50#100#0#0#0#0|" + "10#1#0#0#120#120#100#0#0#0#0|" + "20#5#0#0#175#175#0#0#0#0#0|");
                    pt_ui("33/130/0/0#1#" + "320#480#20#20#0#0#0#0#0|" + "5#1#0#0#150#150#100#0#0#0#0|" + "20#5#0#0#350#350#0#0#0#0#0|");
                    pt_ui(bns_efc + "/150/0/0#0#" + "320#450#400#400#0#0#0#0#0|" + "8#5#0#0#80#80#100#0#0#0#0|" + "3#5#0#0#115#115#100#0#0#0#0|" + "3#5#0#0#90#90#100#0#0#0#0|" + "3#5#0#0#100#100#100#0#0#0#0|" + "50#5#0#0#100#100#100#0#0#0#0|" + "20#5#0#0#100#100#0#0#0#0#0|")
                };
                break;
            case 71:
                var bns_efc = "";
                if (gt_sht_scr2 == 30) {
                    bns_efc = "65"
                } else if (gt_sht_scr2 == 10) {
                    bns_efc = "64"
                };
                if (bns_efc != "") {
                    pt_ui(bns_efc + "/150/0/0#0#" + "320#508#400#400#0#0#0#0#0|" + "8#5#0#0#80#80#100#0#0#0#0|" + "3#5#0#0#115#115#100#0#0#0#0|" + "3#5#0#0#90#90#100#0#0#0#0|" + "3#5#0#0#100#100#100#0#0#0#0|" + "46#5#0#0#100#100#100#0#0#0#0|" + "20#5#0#0#100#100#0#0#0#0#0|")
                };
                break;
            case 72:
                if (trn_stg == 0) {
                    if (boost_3p != 0 || boost_dk != 0) {
                        
                    }
                };
                ptf = 0;
                break;
            default:
        }
    };
    var pdp = new Array();
    for (var i in pt_f) {
        tg = pt_f[i];
        var chsy = tg.d;
        pdp.push([i, chsy])
    };
    srt(pdp, 1);
    if (pt_fi > 0) {
        var pt_fc = 0;
        for (var pi in pdp) {
            tg = pt_f[pdp[pi][0]];
            if (tg.l == 1) {
                tg.c++;
                if (tg.c >= tg.tc) {
                    tg.c = tg.tc
                };
                var st_pst = tg.c / tg.tc;
                var tgx = ani_al(tg.es, st_pst, tg.x, tg.tx, 1);
                var tgy = ani_al(tg.es, st_pst, tg.y, tg.ty, 1);
                var tgw = ani_al(tg.es, st_pst, tg.w, tg.tw, 1);
                var tgh = ani_al(tg.es, st_pst, tg.h, tg.th, 1);
                var tga = ani_al(tg.es, st_pst, tg.a, tg.ta, 1);
                var tgr = ani_al(tg.es, st_pst, tg.r, tg.tr, 1);
                if (tg.g != 0) {
                    tg.gy += tg.j / 10;
                    tg.j += tg.g / 10;
                    tgy += tg.gy
                };
                ctx.globalAlpha = tga / 100 * gd_anm_a;
                if (tg.lt == 1) {
                    ctx.globalCompositeOperation = "lighter";
                    spt_anm_p(tg.f, tgx, tgy, tgw / 100, tgh / 100, tgr);
                    ctx.globalCompositeOperation = "source-over"
                } else {
                    spt_anm_p(tg.f, tgx, tgy, tgw / 100, tgh / 100, tgr)
                };
                ctx.globalAlpha = 1;
                if (tg.c >= tg.tc) {
                    tg.c = 0;
                    tg.ac++;
                    if (tg.ac + 1 >= tg.aac) {
                        tg.l = 0;
                        delete tg;
                        if (rs_anm == 1 && uni_buy_anm == 0) {
                            switch (rs_as) {
                                case 0:
                                    rs_stk_coin++;
                                    rs_flg--;
                                    if (rs_flg == 0) {
                                        rs_ac = 0;
                                        rs_as = 1
                                    };
                                    break;
                                case 1:
                                    rs_stk_coin++;
                                    rs_flg_s++;
                                    if (rs_flg <= rs_flg_s) {
                                        rs_ac = 0;
                                        rs_as = 2;
                                        rs_flg = 0;
                                        rs_flg_s = 0
                                    };
                                    break;
                                case 2:
                                    my_coin_a++;
                                    sndf(17, .05);
                                    rs_flg_s++;
                                    if (rs_flg <= rs_flg_s) {
                                        rs_ac = 0;
                                        rs_as = 3;
                                        rs_flg = 0;
                                        rs_flg_s = 0
                                    };
                                    break;
                                case 3:
                                    if (dly_rank_up == 0) {
                                        sndf(17, .05);
                                        rs_stk_coin++;
                                        my_coin += 2;
                                        if (rs_stk_coin == 50) {
                                            dly_alt = 0;
                                            sndf(14, .06);
                                            rs_get_coin = 0;
                                            rs_stk_coin = 0;
                                            rs_as = 0;
                                            rs_ac = 0;
                                            rs_anm = 0
                                        }
                                    };
                                    break;
                                default:
                            }
                        }
                    } else {
                        var af_ar = tg.af.split("|");
                        tg.x += tg.tx;
                        tg.y += tg.ty;
                        tg.w += tg.tw;
                        tg.h += tg.th;
                        tg.a += tg.ta;
                        tg.r += tg.tr;
                        var st_af = af_ar[tg.ac + 1].split("#");
                        tg.tc = Math.floor(st_af[0]);
                        tg.es = Math.floor(st_af[1]);
                        if (st_af[8] == "A") {
                            tg.tx = Math.floor(st_af[2]) - tg.x;
                            tg.ty = Math.floor(st_af[3]) - tg.y;
                            if (rs_anm == 1 && rs_as == 0) {
                                sndf(13, .04)
                            }
                        } else {
                            tg.tx = Math.floor(st_af[2]);
                            tg.ty = Math.floor(st_af[3])
                        };
                        tg.tw = Math.floor(st_af[4]) - tg.w;
                        tg.th = Math.floor(st_af[5]) - tg.h;
                        tg.ta = Math.floor(st_af[6]) - tg.a;
                        tg.tr = Math.floor(st_af[7]) - tg.r
                    }
                };
                pt_fc++
            }
        };
        if (pt_fc == 0) {
            pt_f = {};
            pt_fi = 0
        }
    };
    u_pt_fi = pt_fi
};

function spt_t1(spi, lcx, lcy) {
    var sptx = ixt[spi];
    var spty = iyt[spi];
    var sptw = iwt[spi];
    var spth = iht[spi];
    ctx.drawImage(img_cs1, sptx, spty, sptw, spth, lcx * ltl, lcy * ltl, sptw * ltl, spth * ltl)
};

function spt_t1_s(spi, lcx, lcy, sz) {
    var sptx = ixt[spi];
    var spty = iyt[spi];
    var sptw = iwt[spi];
    var spth = iht[spi];
    var sptw2 = (sptw * sz * ltl | 0);
    var spth2 = (spth * sz * ltl | 0);
    ctx.drawImage(img_cs1, sptx, spty, sptw, spth, lcx * ltl, lcy * ltl, sptw2, spth2)
};

function spt_t3(spi, lcx, lcy) {
    var sptx = ixt3[spi];
    var spty = iyt3[spi];
    var sptw = iwt3[spi];
    var spth = iht3[spi];
    ctx.drawImage(img_cs3, sptx, spty, sptw, spth, lcx * ltl, lcy * ltl, sptw * ltl, spth * ltl)
};

function spt_t3_s(spi, lcx, lcy, sz) {
    var sptx = ixt3[spi];
    var spty = iyt3[spi];
    var sptw = iwt3[spi];
    var spth = iht3[spi];
    var sptw2 = (sptw * sz * ltl | 0);
    var spth2 = (spth * sz * ltl | 0);
    ctx.drawImage(img_cs3, sptx, spty, sptw, spth, lcx * ltl, lcy * ltl, sptw2, spth2)
};

function spt_t3_s_c(spi, lcx, lcy, sz) {
    var sptx = ixt3[spi];
    var spty = iyt3[spi];
    var sptw = iwt3[spi];
    var spth = iht3[spi];
    var sptw2 = sptw * sz;
    var spth2 = spth * sz;
    ctx.drawImage(img_cs3, sptx, spty, sptw, spth, (lcx - sptw2 / 2) * ltl, (lcy - spth2 / 2) * ltl, sptw2 * ltl, spth2 * ltl)
};

function btht_l(ctchx, ctchy, yywh, lcx, lcy, sptw, spth, i) {
    btht(ctchx, ctchy, lcx - yywh, lcy - yywh, lcx + sptw + yywh, lcy + spth + yywh, i)
};

function tr(ltx, lty) {
    ctx.translate(ltx * ltl, lty * ltl);
    stx = ltx;
    sty = lty
};

function rr() {
    ctx.translate(-stx * ltl, -sty * ltl)
};

function set_txtr(i, spi) {
    var lcx = 0;
    var lcy = 0;
    var sptx = ixt[spi];
    var spty = iyt[spi];
    var sptw = iwt[spi];
    var spth = iht[spi];
    var sptw2 = sptw;
    var spth2 = spth;
    var ccvs2 = document.createElement('canvas');
    ccvs2.width = sptw2;
    ccvs2.height = spth2;
    var bcv2 = ccvs2.getContext('2d');
    bcv2.drawImage(img_cs1, sptx, spty, sptw, spth, (lcx | 0), (lcy | 0), (sptw2 | 0), (spth2 | 0));
    txtr_cv[i] = new THREE.CanvasTexture(ccvs2)
};

function set_chr_txtr(tr_s_sh, tr_s_fs, tr_s_yn, tr_s_nm, pl_or_cp) {
    var ccvs2 = document.createElement('canvas');
    ccvs2.width = 512;
    ccvs2.height = 512;
    var bcv2 = ccvs2.getContext('2d');

    function set_chr_txtr_p(spi, lcx, lcy) {
        var sptx = ts1_ix[spi];
        var spty = ts1_iy[spi];
        var sptw = ts1_iw[spi];
        var spth = ts1_ih[spi];
        bcv2.drawImage(img_sk1, sptx, spty, sptw, spth, lcx, lcy, sptw, spth)
    };

    function set_chr_txtr_p2(spi, lcx, lcy, rs) {
        var sptx = ts2_ix[spi];
        var spty = ts2_iy[spi];
        var sptw = ts2_iw[spi];
        var spth = ts2_ih[spi];
        bcv2.drawImage(img_sk2, sptx, spty, sptw, spth, lcx, lcy, sptw * rs, spth * rs)
    };
    switch (tr_s_fs) {
        case 1:
            bcv2.fillStyle = "#bb8f7a";
            bcv2.fillRect(0, 0, 512, 512);
            set_chr_txtr_p(13, 280, 3);
            set_chr_txtr_p(14, 403, 0);
            set_chr_txtr_p(15, 383, 71);
            set_chr_txtr_p(16, 3, 4);
            set_chr_txtr_p(17, 10, 408);
            set_chr_txtr_p(18, 97, 404);
            set_chr_txtr_p(19, 369, 338);
            break;
        case 2:
            bcv2.fillStyle = "#c89b8c";
            bcv2.fillRect(0, 0, 512, 512);
            set_chr_txtr_p(20, 280, 3);
            set_chr_txtr_p(21, 403, 0);
            set_chr_txtr_p(22, 383, 71);
            set_chr_txtr_p(23, 3, 4);
            set_chr_txtr_p(24, 10, 408);
            set_chr_txtr_p(25, 97, 404);
            set_chr_txtr_p(26, 369, 338);
            break;
        case 3:
            bcv2.fillStyle = "#663f2d";
            bcv2.fillRect(0, 0, 512, 512);
            set_chr_txtr_p(27, 280, 3);
            set_chr_txtr_p(28, 403, 0);
            set_chr_txtr_p(29, 383, 71);
            set_chr_txtr_p(30, 3, 4);
            set_chr_txtr_p(31, 10, 408);
            set_chr_txtr_p(32, 97, 404);
            set_chr_txtr_p(33, 369, 338);
            break;
        case 4:
            bcv2.fillStyle = "#8e614f";
            bcv2.fillRect(0, 0, 512, 512);
            set_chr_txtr_p(34, 280, 3);
            set_chr_txtr_p(35, 403, 0);
            set_chr_txtr_p(36, 383, 71);
            set_chr_txtr_p(37, 3, 4);
            set_chr_txtr_p(38, 10, 408);
            set_chr_txtr_p(39, 97, 404);
            set_chr_txtr_p(40, 369, 338);
            break;
        case 5:
            bcv2.fillStyle = "#764b37";
            bcv2.fillRect(0, 0, 512, 512);
            set_chr_txtr_p(41, 280, 3);
            set_chr_txtr_p(42, 403, 0);
            set_chr_txtr_p(43, 383, 71);
            set_chr_txtr_p(44, 3, 4);
            set_chr_txtr_p(45, 10, 408);
            set_chr_txtr_p(46, 97, 404);
            set_chr_txtr_p(47, 369, 338);
            break;
        default:
    };
    switch (tr_s_yn) {
        case 0:
            var un_color = new Array("", "eee", "-", "-", "20428b", "-", "-", "f7b738", "20428b", "-", "-", "-", "f7b738", "20428b", "-", "eee", "20428b", "20428b");
            break;
        case 1:
            var un_color = new Array("", "20428b", "-", "-", "f7b738", "-", "eee", "20428b", "f7b738", "-", "eee", "-", "20428b", "f7b738", "-", "20428b", "f7b738", "f7b738");
            break;
        case 2:
            var un_color = new Array("", "f7b738", "-", "-", "20428b", "eee", "20428b", "eee", "20428b", "eee", "20428b", "-", "eee", "20428b", "-", "20428b", "20428b", "20428b");
            break;
        case 3:
            var un_color = new Array("", "ffce37", "-", "-", "623586", "eee", "eee", "623586", "623586", "eee", "eee", "-", "623586", "623586", "623586", "eee", "623586", "623586");
            break;
        case 4:
            var un_color = new Array("", "623586", "-", "-", "-", "ffce37", "ffce37", "333", "-", "ffce37", "ffce37", "-", "333", "-", "-", "623586", "ffce37", "ffce37");
            break;
        case 5:
            var un_color = new Array("", "eee", "-", "-", "-", "-", "623586", "ffce37", "-", "-", "623586", "-", "ffce37", "-", "-", "eee", "623586", "623586");
            break;
        case 6:
            var un_color = new Array("", "9e263f", "-", "-", "1d2844", "-", "ffbe33", "9e263f", "1d2844", "-", "ffbe33", "-", "9e263f", "-", "1d2844", "9e263f", "f7e521", "1d2844");
            break;
        case 7:
            var un_color = new Array("", "333", "-", "-", "9e263f", "-", "ffbe33", "333", "9e263f", "-", "ffbe33", "-", "333", "-", "9e263f", "9e263f", "9e263f", "9e263f");
            break;
        case 8:
            var un_color = new Array("", "ecb90e", "-", "-", "9e263f", "-", "-", "-", "9e263f", "-", "-", "-", "-", "9e263f", "9e263f", "eee", "9e263f", "9e263f");
            break;
        case 9:
            var un_color = new Array("", "dc2227", "-", "-", "eee", "dc2227", "-", "-", "eee", "dc2227", "-", "eee", "-", "dc2227", "eee", "20140a", "20140a", "20140a");
            break;
        case 10:
            var un_color = new Array("", "292e34", "797e89", "-", "dc2227", "292e34", "-", "-", "dc2227", "292e34", "-", "dc2227", "-", "292e34", "dc2227", "eee", "dc2227", "dc2227");
            break;
        case 11:
            var un_color = new Array("", "eee", "-", "-", "dc2227", "eee", "-", "-", "dc2227", "eee", "-", "-", "-", "dc2227", "dc2227", "eee", "dc2227", "dc2227");
            break;
        case 12:
            var un_color = new Array("", "3d87c6", "-", "-", "e8563c", "303030", "e8563c", "303030", "e8563c", "303030", "e8563c", "-", "303030", "-", "-", "4c70b6", "eee", "eee");
            break;
        case 13:
            var un_color = new Array("", "eee", "-", "-", "f05033", "173460", "f05033", "3d87c6", "f05033", "173460", "f05033", "-", "3d87c6", "-", "-", "eee", "3d87c6", "3d87c6");
            break;
        case 14:
            var un_color = new Array("", "f05033", "-", "-", "3d87c6", "eee", "-", "-", "3d87c6", "eee", "-", "-", "-", "-", "-", "3d87c6", "19498f", "19498f");
            break;
        case 15:
            var un_color = new Array("", "099355", "-", "-", "eee", "099355", "-", "-", "eee", "099355", "-", "-", "-", "eee", "eee", "eee", "eee", "eee");
            break;
        case 16:
            var un_color = new Array("", "333", "-", "-", "099355", "-", "-", "099355", "099355", "-", "-", "-", "099355", "-", "099355", "eee", "099355", "099355");
            break;
        case 17:
            var un_color = new Array("", "eee", "-", "-", "099355", "-", "-", "-", "099355", "-", "-", "-", "-", "099355", "099355", "eee", "099355", "099355");
            break;
        case 18:
            var un_color = new Array("", "c9132c", "-", "-", "eee", "-", "eee", "c9132c", "eee", "-", "eee", "-", "c9132c", "-", "-", "eee", "eee", "eee");
            break;
        case 19:
            var un_color = new Array("", "eee", "-", "-", "c9132c", "-", "c9132c", "eee", "c9132c", "-", "c9132c", "-", "eee", "-", "-", "eee", "c9132c", "c9132c");
            break;
        case 20:
            var un_color = new Array("", "252a5c", "646999", "-", "cf1837", "eee", "-", "-", "cf1837", "eee", "eee", "-", "cf1837", "-", "-", "333", "eee", "eee");
            break;
        case 21:
            var un_color = new Array("", "333", "-", "-", "dc3c83", "58c0db", "-", "-", "dc3c83", "58c0db", "-", "dc3c83", "-", "58c0db", "dc3c83", "333", "58c0db", "58c0db");
            break;
        case 22:
            var un_color = new Array("", "58c0db", "-", "-", "dc3c83", "333", "-", "-", "dc3c83", "333", "-", "-", "-", "-", "dc3c83", "eee", "dc3c83", "dc3c83");
            break;
        case 23:
            var un_color = new Array("", "dc3c83", "-", "-", "58c0db", "333", "-", "-", "58c0db", "333", "-", "-", "-", "-", "58c0db", "333", "eee", "eee");
            break;
        case 24:
            var un_color = new Array("", "333", "-", "-", "eee", "bbb", "eee", "bbb", "eee", "bbb", "eee", "-", "bbb", "-", "-", "333", "eee", "eee");
            break;
        case 25:
            var un_color = new Array("", "bbb", "-", "-", "eee", "333", "eee", "333", "eee", "333", "eee", "-", "333", "-", "333", "eee", "333", "333");
            break;
        case 26:
            var un_color = new Array("", "eee", "-", "-", "333", "bbb", "bbb", "333", "333", "bbb", "bbb", "-", "333", "-", "-", "333", "333", "333");
            break;
        case 27:
            var un_color = new Array("", "0c38a6", "4266c2", "-", "eee", "bd282e", "-", "-", "eee", "bd282e", "-", "-", "-", "bd282e", "bd282e", "eee", "eee", "eee");
            break;
        case 28:
            var un_color = new Array("", "dc192d", "f17784", "-", "0c38a6", "eee", "-", "-", "0c38a6", "eee", "-", "-", "-", "eee", "eee", "eee", "eee", "eee");
            break;
        case 29:
            var un_color = new Array("", "eee", "a1a4b8", "-", "0068b7", "bd282e", "-", "-", "0068b7", "bd282e", "-", "-", "-", "bd282e", "bd282e", "eee", "333", "333");
            break;
        default:
    };
    if (tr_s_nm == 1 && pl_or_cp == 0) {
        ps_ps_cl = "#" + un_color[1];
        ps_ps_nm = "#" + un_color[17]
    };
    if (un_color[1] != "-") {
        bcv2.fillStyle = "#" + un_color[1];
        bcv2.beginPath();
        bcv2.moveTo(0, 222);
        bcv2.lineTo(0, 383);
        bcv2.lineTo(162, 383);
        bcv2.lineTo(180, 512);
        bcv2.lineTo(360, 512);
        bcv2.lineTo(371, 405);
        bcv2.lineTo(333, 284);
        bcv2.lineTo(222, 284);
        bcv2.lineTo(210, 244);
        bcv2.lineTo(178, 236);
        bcv2.lineTo(178, 140);
        bcv2.lineTo(84, 140);
        bcv2.lineTo(38, 151);
        bcv2.closePath();
        bcv2.fill();
        bcv2.beginPath();
        bcv2.moveTo(343, 195);
        bcv2.lineTo(343, 338);
        bcv2.lineTo(509, 338);
        bcv2.lineTo(509, 180);
        bcv2.lineTo(421, 195);
        bcv2.closePath();
        bcv2.fill()
    };
    if (un_color[2] != "-") {
        bcv2.fillStyle = "#" + un_color[2];
        bcv2.beginPath();
        bcv2.moveTo(15, 140);
        bcv2.lineTo(15, 376);
        bcv2.lineTo(17, 376);
        bcv2.lineTo(17, 140);
        bcv2.closePath();
        bcv2.fill();
        bcv2.beginPath();
        bcv2.moveTo(30, 140);
        bcv2.lineTo(30, 376);
        bcv2.lineTo(32, 376);
        bcv2.lineTo(32, 140);
        bcv2.closePath();
        bcv2.fill();
        bcv2.beginPath();
        bcv2.moveTo(45, 140);
        bcv2.lineTo(45, 376);
        bcv2.lineTo(47, 376);
        bcv2.lineTo(47, 140);
        bcv2.closePath();
        bcv2.fill();
        bcv2.beginPath();
        bcv2.moveTo(60, 140);
        bcv2.lineTo(60, 376);
        bcv2.lineTo(62, 376);
        bcv2.lineTo(62, 140);
        bcv2.closePath();
        bcv2.fill();
        bcv2.beginPath();
        bcv2.moveTo(75, 140);
        bcv2.lineTo(75, 376);
        bcv2.lineTo(77, 376);
        bcv2.lineTo(77, 140);
        bcv2.closePath();
        bcv2.fill();
        bcv2.beginPath();
        bcv2.moveTo(90, 140);
        bcv2.lineTo(90, 376);
        bcv2.lineTo(92, 376);
        bcv2.lineTo(92, 140);
        bcv2.closePath();
        bcv2.fill();
        bcv2.beginPath();
        bcv2.moveTo(105, 140);
        bcv2.lineTo(105, 376);
        bcv2.lineTo(107, 376);
        bcv2.lineTo(107, 140);
        bcv2.closePath();
        bcv2.fill();
        bcv2.beginPath();
        bcv2.moveTo(120, 140);
        bcv2.lineTo(120, 376);
        bcv2.lineTo(122, 376);
        bcv2.lineTo(122, 140);
        bcv2.closePath();
        bcv2.fill();
        bcv2.beginPath();
        bcv2.moveTo(135, 140);
        bcv2.lineTo(135, 376);
        bcv2.lineTo(137, 376);
        bcv2.lineTo(137, 140);
        bcv2.closePath();
        bcv2.fill();
        bcv2.beginPath();
        bcv2.moveTo(150, 140);
        bcv2.lineTo(150, 376);
        bcv2.lineTo(152, 376);
        bcv2.lineTo(152, 140);
        bcv2.closePath();
        bcv2.fill();
        bcv2.beginPath();
        bcv2.moveTo(165, 140);
        bcv2.lineTo(165, 376);
        bcv2.lineTo(167, 376);
        bcv2.lineTo(167, 140);
        bcv2.closePath();
        bcv2.fill();
        bcv2.beginPath();
        bcv2.moveTo(180, 140);
        bcv2.lineTo(180, 376);
        bcv2.lineTo(182, 376);
        bcv2.lineTo(182, 140);
        bcv2.closePath();
        bcv2.fill();
        bcv2.beginPath();
        bcv2.moveTo(179, 281);
        bcv2.lineTo(179, 496);
        bcv2.lineTo(181, 496);
        bcv2.lineTo(181, 281);
        bcv2.closePath();
        bcv2.fill();
        bcv2.beginPath();
        bcv2.moveTo(194, 281);
        bcv2.lineTo(194, 496);
        bcv2.lineTo(196, 496);
        bcv2.lineTo(196, 281);
        bcv2.closePath();
        bcv2.fill();
        bcv2.beginPath();
        bcv2.moveTo(209, 281);
        bcv2.lineTo(209, 496);
        bcv2.lineTo(211, 496);
        bcv2.lineTo(211, 281);
        bcv2.closePath();
        bcv2.fill();
        bcv2.beginPath();
        bcv2.moveTo(224, 281);
        bcv2.lineTo(224, 496);
        bcv2.lineTo(226, 496);
        bcv2.lineTo(226, 281);
        bcv2.closePath();
        bcv2.fill();
        bcv2.beginPath();
        bcv2.moveTo(239, 281);
        bcv2.lineTo(239, 496);
        bcv2.lineTo(241, 496);
        bcv2.lineTo(241, 281);
        bcv2.closePath();
        bcv2.fill();
        bcv2.beginPath();
        bcv2.moveTo(254, 281);
        bcv2.lineTo(254, 496);
        bcv2.lineTo(256, 496);
        bcv2.lineTo(256, 281);
        bcv2.closePath();
        bcv2.fill();
        bcv2.beginPath();
        bcv2.moveTo(269, 281);
        bcv2.lineTo(269, 496);
        bcv2.lineTo(271, 496);
        bcv2.lineTo(271, 281);
        bcv2.closePath();
        bcv2.fill();
        bcv2.beginPath();
        bcv2.moveTo(284, 281);
        bcv2.lineTo(284, 496);
        bcv2.lineTo(286, 496);
        bcv2.lineTo(286, 281);
        bcv2.closePath();
        bcv2.fill();
        bcv2.beginPath();
        bcv2.moveTo(299, 281);
        bcv2.lineTo(299, 496);
        bcv2.lineTo(301, 496);
        bcv2.lineTo(301, 281);
        bcv2.closePath();
        bcv2.fill();
        bcv2.beginPath();
        bcv2.moveTo(314, 281);
        bcv2.lineTo(314, 496);
        bcv2.lineTo(316, 496);
        bcv2.lineTo(316, 281);
        bcv2.closePath();
        bcv2.fill();
        bcv2.beginPath();
        bcv2.moveTo(329, 281);
        bcv2.lineTo(329, 496);
        bcv2.lineTo(331, 496);
        bcv2.lineTo(331, 281);
        bcv2.closePath();
        bcv2.fill();
        bcv2.beginPath();
        bcv2.moveTo(344, 281);
        bcv2.lineTo(344, 496);
        bcv2.lineTo(346, 496);
        bcv2.lineTo(346, 281);
        bcv2.closePath();
        bcv2.fill();
        bcv2.beginPath();
        bcv2.moveTo(365, 194);
        bcv2.lineTo(365, 335);
        bcv2.lineTo(367, 335);
        bcv2.lineTo(367, 194);
        bcv2.closePath();
        bcv2.fill();
        bcv2.beginPath();
        bcv2.moveTo(380, 194);
        bcv2.lineTo(380, 335);
        bcv2.lineTo(382, 335);
        bcv2.lineTo(382, 194);
        bcv2.closePath();
        bcv2.fill();
        bcv2.beginPath();
        bcv2.moveTo(395, 194);
        bcv2.lineTo(395, 335);
        bcv2.lineTo(397, 335);
        bcv2.lineTo(397, 194);
        bcv2.closePath();
        bcv2.fill();
        bcv2.beginPath();
        bcv2.moveTo(410, 194);
        bcv2.lineTo(410, 335);
        bcv2.lineTo(412, 335);
        bcv2.lineTo(412, 194);
        bcv2.closePath();
        bcv2.fill();
        bcv2.beginPath();
        bcv2.moveTo(425, 194);
        bcv2.lineTo(425, 335);
        bcv2.lineTo(427, 335);
        bcv2.lineTo(427, 194);
        bcv2.closePath();
        bcv2.fill();
        bcv2.beginPath();
        bcv2.moveTo(440, 194);
        bcv2.lineTo(440, 335);
        bcv2.lineTo(442, 335);
        bcv2.lineTo(442, 194);
        bcv2.closePath();
        bcv2.fill();
        bcv2.beginPath();
        bcv2.moveTo(455, 194);
        bcv2.lineTo(455, 335);
        bcv2.lineTo(457, 335);
        bcv2.lineTo(457, 194);
        bcv2.closePath();
        bcv2.fill();
        bcv2.beginPath();
        bcv2.moveTo(464, 194);
        bcv2.lineTo(470, 262);
        bcv2.lineTo(470, 335);
        bcv2.lineTo(472, 335);
        bcv2.lineTo(472, 261);
        bcv2.lineTo(466, 194);
        bcv2.closePath();
        bcv2.fill();
        bcv2.beginPath();
        bcv2.moveTo(477, 194);
        bcv2.lineTo(485, 267);
        bcv2.lineTo(485, 335);
        bcv2.lineTo(487, 335);
        bcv2.lineTo(487, 266);
        bcv2.lineTo(479, 194);
        bcv2.closePath();
        bcv2.fill()
    };
    if (un_color[3] != "-") {
        bcv2.fillStyle = "#" + un_color[3];
        bcv2.beginPath();
        bcv2.moveTo(35, 152);
        bcv2.lineTo(32, 200);
        bcv2.lineTo(106, 206);
        bcv2.lineTo(178, 200);
        bcv2.lineTo(178, 142);
        bcv2.lineTo(77, 142);
        bcv2.closePath();
        bcv2.fill();
        bcv2.beginPath();
        bcv2.moveTo(209, 281);
        bcv2.lineTo(205, 321);
        bcv2.lineTo(242, 325);
        bcv2.lineTo(270, 323);
        bcv2.lineTo(299, 325);
        bcv2.lineTo(337, 321);
        bcv2.lineTo(336, 281);
        bcv2.closePath();
        bcv2.fill()
    };
    if (un_color[4] != "-") {
        bcv2.fillStyle = "#" + un_color[4];
        bcv2.beginPath();
        bcv2.moveTo(62, 142);
        bcv2.lineTo(75, 181);
        bcv2.lineTo(105, 201);
        bcv2.lineTo(136, 180);
        bcv2.lineTo(150, 142);
        bcv2.closePath();
        bcv2.fill();
        bcv2.beginPath();
        bcv2.moveTo(224, 281);
        bcv2.lineTo(239, 296);
        bcv2.lineTo(270, 301);
        bcv2.lineTo(301, 297);
        bcv2.lineTo(316, 281);
        bcv2.closePath();
        bcv2.fill()
    };
    if (un_color[5] != "-") {
        bcv2.fillStyle = "#" + un_color[5];
        bcv2.beginPath();
        bcv2.moveTo(67, 142);
        bcv2.lineTo(79, 177);
        bcv2.lineTo(105, 195);
        bcv2.lineTo(132, 177);
        bcv2.lineTo(145, 142);
        bcv2.closePath();
        bcv2.fill();
        bcv2.beginPath();
        bcv2.moveTo(230, 281);
        bcv2.lineTo(242, 292);
        bcv2.lineTo(270, 297);
        bcv2.lineTo(298, 293);
        bcv2.lineTo(310, 281);
        bcv2.closePath();
        bcv2.fill()
    };
    if (un_color[6] != "-") {
        bcv2.fillStyle = "#" + un_color[6];
        bcv2.beginPath();
        bcv2.moveTo(0, 262);
        bcv2.lineTo(16, 380);
        bcv2.lineTo(44, 377);
        bcv2.lineTo(40, 363);
        bcv2.lineTo(29, 271);
        bcv2.lineTo(20, 248);
        bcv2.closePath();
        bcv2.fill();
        bcv2.beginPath();
        bcv2.moveTo(192, 248);
        bcv2.lineTo(183, 271);
        bcv2.lineTo(172, 363);
        bcv2.lineTo(168, 377);
        bcv2.lineTo(189, 377);
        bcv2.lineTo(196, 360);
        bcv2.lineTo(206, 261);
        bcv2.closePath();
        bcv2.fill();
        bcv2.beginPath();
        bcv2.moveTo(170, 403);
        bcv2.lineTo(181, 512);
        bcv2.lineTo(215, 512);
        bcv2.lineTo(208, 491);
        bcv2.lineTo(195, 405);
        bcv2.lineTo(196, 380);
        bcv2.closePath();
        bcv2.fill();
        bcv2.beginPath();
        bcv2.moveTo(347, 380);
        bcv2.lineTo(346, 405);
        bcv2.lineTo(333, 491);
        bcv2.lineTo(326, 512);
        bcv2.lineTo(360, 512);
        bcv2.lineTo(371, 403);
        bcv2.closePath();
        bcv2.fill()
    };
    if (un_color[7] != "-") {
        bcv2.fillStyle = "#" + un_color[7];
        bcv2.beginPath();
        bcv2.moveTo(0, 262);
        bcv2.lineTo(12, 380);
        bcv2.lineTo(38, 377);
        bcv2.lineTo(34, 364);
        bcv2.lineTo(23, 271);
        bcv2.lineTo(14, 248);
        bcv2.closePath();
        bcv2.fill();
        bcv2.beginPath();
        bcv2.moveTo(198, 248);
        bcv2.lineTo(189, 271);
        bcv2.lineTo(178, 364);
        bcv2.lineTo(174, 377);
        bcv2.lineTo(195, 377);
        bcv2.lineTo(202, 360);
        bcv2.lineTo(212, 261);
        bcv2.closePath();
        bcv2.fill();
        bcv2.beginPath();
        bcv2.moveTo(170, 403);
        bcv2.lineTo(175, 512);
        bcv2.lineTo(209, 512);
        bcv2.lineTo(202, 493);
        bcv2.lineTo(189, 405);
        bcv2.lineTo(188, 383);
        bcv2.closePath();
        bcv2.fill();
        bcv2.beginPath();
        bcv2.moveTo(353, 383);
        bcv2.lineTo(352, 405);
        bcv2.lineTo(339, 493);
        bcv2.lineTo(332, 512);
        bcv2.lineTo(366, 512);
        bcv2.lineTo(371, 403);
        bcv2.closePath();
        bcv2.fill()
    };
    if (un_color[8] != "-") {
        bcv2.fillStyle = "#" + un_color[8];
        bcv2.beginPath();
        bcv2.moveTo(4, 246);
        bcv2.lineTo(4, 279);
        bcv2.lineTo(16, 271);
        bcv2.lineTo(44, 246);
        bcv2.lineTo(46, 242);
        bcv2.lineTo(54, 202);
        bcv2.lineTo(54, 197);
        bcv2.lineTo(48, 148);
        bcv2.lineTo(39, 149);
        bcv2.closePath();
        bcv2.fill();
        bcv2.beginPath();
        bcv2.moveTo(163, 148);
        bcv2.lineTo(157, 197);
        bcv2.lineTo(157, 202);
        bcv2.lineTo(165, 242);
        bcv2.lineTo(167, 246);
        bcv2.lineTo(195, 271);
        bcv2.lineTo(207, 279);
        bcv2.lineTo(207, 245);
        bcv2.lineTo(172, 149);
        bcv2.closePath();
        bcv2.fill();
        bcv2.beginPath();
        bcv2.moveTo(210, 295);
        bcv2.lineTo(203, 367);
        bcv2.lineTo(170, 402);
        bcv2.lineTo(171, 418);
        bcv2.lineTo(206, 385);
        bcv2.lineTo(218, 362);
        bcv2.lineTo(222, 322);
        bcv2.lineTo(218, 290);
        bcv2.closePath();
        bcv2.fill();
        bcv2.beginPath();
        bcv2.moveTo(323, 290);
        bcv2.lineTo(318, 322);
        bcv2.lineTo(322, 362);
        bcv2.lineTo(334, 386);
        bcv2.lineTo(368, 416);
        bcv2.lineTo(370, 402);
        bcv2.lineTo(337, 367);
        bcv2.lineTo(330, 295);
        bcv2.closePath();
        bcv2.fill()
    };
    if (un_color[9] != "-") {
        bcv2.fillStyle = "#" + un_color[9];
        bcv2.beginPath();
        bcv2.moveTo(0, 246);
        bcv2.lineTo(0, 279);
        bcv2.lineTo(12, 271);
        bcv2.lineTo(40, 246);
        bcv2.lineTo(42, 242);
        bcv2.lineTo(50, 202);
        bcv2.lineTo(50, 197);
        bcv2.lineTo(44, 148);
        bcv2.lineTo(35, 149);
        bcv2.closePath();
        bcv2.fill();
        bcv2.beginPath();
        bcv2.moveTo(167, 148);
        bcv2.lineTo(161, 197);
        bcv2.lineTo(161, 202);
        bcv2.lineTo(169, 242);
        bcv2.lineTo(171, 246);
        bcv2.lineTo(199, 271);
        bcv2.lineTo(211, 279);
        bcv2.lineTo(211, 245);
        bcv2.lineTo(176, 149);
        bcv2.closePath();
        bcv2.fill();
        bcv2.beginPath();
        bcv2.moveTo(206, 295);
        bcv2.lineTo(199, 367);
        bcv2.lineTo(166, 402);
        bcv2.lineTo(167, 416);
        bcv2.lineTo(180, 405);
        bcv2.lineTo(205, 381);
        bcv2.lineTo(214, 361);
        bcv2.lineTo(218, 322);
        bcv2.lineTo(214, 290);
        bcv2.closePath();
        bcv2.fill();
        bcv2.beginPath();
        bcv2.moveTo(327, 290);
        bcv2.lineTo(322, 322);
        bcv2.lineTo(326, 362);
        bcv2.lineTo(336, 382);
        bcv2.lineTo(360, 405);
        bcv2.lineTo(372, 416);
        bcv2.lineTo(374, 402);
        bcv2.lineTo(341, 367);
        bcv2.lineTo(334, 295);
        bcv2.closePath();
        bcv2.fill()
    };
    if (un_color[10] != "-") {
        bcv2.fillStyle = "#" + un_color[10];
        bcv2.beginPath();
        bcv2.moveTo(405, 193);
        bcv2.lineTo(407, 246);
        bcv2.lineTo(408, 335);
        bcv2.lineTo(442, 335);
        bcv2.lineTo(443, 251);
        bcv2.lineTo(442, 238);
        bcv2.lineTo(439, 193);
        bcv2.closePath();
        bcv2.fill()
    };
    if (un_color[11] != "-") {
        bcv2.fillStyle = "#" + un_color[11];
        bcv2.beginPath();
        bcv2.moveTo(348, 314);
        bcv2.lineTo(348, 329);
        bcv2.lineTo(495, 329);
        bcv2.lineTo(495, 312);
        bcv2.lineTo(395, 312);
        bcv2.closePath();
        bcv2.fill()
    };
    if (un_color[12] != "-") {
        bcv2.fillStyle = "#" + un_color[12];
        bcv2.beginPath();
        bcv2.moveTo(411, 193);
        bcv2.lineTo(413, 244);
        bcv2.lineTo(414, 335);
        bcv2.lineTo(436, 335);
        bcv2.lineTo(437, 248);
        bcv2.lineTo(436, 239);
        bcv2.lineTo(433, 193);
        bcv2.closePath();
        bcv2.fill()
    };
    if (un_color[13] != "-") {
        bcv2.fillStyle = "#" + un_color[13];
        bcv2.beginPath();
        bcv2.moveTo(348, 320);
        bcv2.lineTo(348, 335);
        bcv2.lineTo(495, 335);
        bcv2.lineTo(495, 318);
        bcv2.lineTo(395, 318);
        bcv2.closePath();
        bcv2.fill()
    };
    if (un_color[14] != "-") {
        bcv2.fillStyle = "#" + un_color[14];
        bcv2.beginPath();
        bcv2.moveTo(352, 195);
        bcv2.lineTo(352, 212);
        bcv2.lineTo(391, 212);
        bcv2.lineTo(422, 210);
        bcv2.lineTo(451, 208);
        bcv2.lineTo(498, 202);
        bcv2.lineTo(495, 186);
        bcv2.lineTo(420, 194);
        bcv2.closePath();
        bcv2.fill()
    };
    if (un_color[15] != "-") {
        bcv2.fillStyle = "#" + un_color[15];
        bcv2.beginPath();
        bcv2.moveTo(389, 476);
        bcv2.lineTo(399, 511);
        bcv2.lineTo(493, 511);
        bcv2.lineTo(499, 467);
        bcv2.lineTo(473, 468);
        bcv2.lineTo(451, 465);
        bcv2.lineTo(431, 465);
        bcv2.lineTo(412, 468);
        bcv2.closePath();
        bcv2.fill()
    };
    set_chr_txtr_p2(17, 350, 195, 1);
    set_chr_txtr_p2(5, 4, 146, 1);
    set_chr_txtr_p2(6, 172, 281, 1);;
    set_chr_txtr_p2(18, 390, 463, 1);
    switch (tr_s_sh) {
        case 1:
            set_chr_txtr_p(1, 182, 138);
            set_chr_txtr_p(2, 292, 203);
            set_chr_txtr_p(3, 222, 16);
            break;
        case 2:
            set_chr_txtr_p(4, 182, 138);
            set_chr_txtr_p(5, 292, 203);
            set_chr_txtr_p(6, 222, 16);
            break;
        case 3:
            set_chr_txtr_p(7, 182, 138);
            set_chr_txtr_p(8, 292, 203);
            set_chr_txtr_p(9, 222, 16);
            break;
        case 4:
            set_chr_txtr_p(10, 182, 138);
            set_chr_txtr_p(11, 292, 203);
            set_chr_txtr_p(12, 222, 16);
            break;
        default:
    };
    switch (tr_s_sh) {
        case 1:
            set_chr_txtr_p2(1, 398, 484, 1);
            break;
        case 2:
            set_chr_txtr_p2(2, 398, 484, 1);
            break;
        case 3:
            set_chr_txtr_p2(3, 398, 484, 1);
            break;
        case 4:
            set_chr_txtr_p2(4, 398, 484, 1);
            break;
        default:
    };
    var set_position_num = new Array("POINTG", "SHOOTING", "SMALLFW", "POWERFW", "CENTER");
    var set_number = tr_s_nm;
    if (set_number > 5) {
        set_number -= 5
    };
    bcv2.fillStyle = "#" + un_color[16];
    bcv2.font = "bold 14px sans-serif";
    var inptxt = set_position_num[set_number - 1];
    var txsn = bcv2.measureText(inptxt);
    bcv2.fillText(inptxt, 270 - txsn.width / 2, 360);
    bcv2.fillStyle = "#" + un_color[17];
    bcv2.font = "bold 80px sans-serif";
    var inptxt = set_number;
    var txsn = bcv2.measureText(inptxt);
    bcv2.fillText(inptxt, 270 - txsn.width / 2, 440);
    bcv2.fillStyle = "#" + un_color[16];
    bcv2.font = "bold 18px sans-serif";
    var inptxt = set_position_num[set_number - 1];
    var txsn = bcv2.measureText(inptxt);
    bcv2.fillText(inptxt, 106 - txsn.width / 2, 240);
    bcv2.fillStyle = "#" + un_color[17];
    bcv2.font = "bold 40px sans-serif";
    var inptxt = set_number;
    var txsn = bcv2.measureText(inptxt);
    bcv2.fillText(inptxt, 130 - txsn.width / 2, 280);
    return new THREE.CanvasTexture(ccvs2)
};

function set_pst(tg) {
    tg.tgx = rn_pst[tg.pst * 2];
    tg.tgz = rn_pst[tg.pst * 2 + 1];
    if (ttr_ok == 1 && (tg.pst == 6 || tg.pst == 7 || tg.pst == 2 || tg.pst == 3 || tg.pst == 4) && trn_stg > 1 && Math.random() > .7) {
        switch (tg.pst) {
            case 7:
                tg.tgx -= Math.random() * 30;
                break;
            case 6:
                tg.tgx += Math.random() * 30;
                break;
            default:
                tg.tgx += Math.random() * 60 - 30
        }
    };
    pl_pst[tg.pst] = tg.i;
    if (tg.pst == 7 || tg.pst == 6) {
        if (def_rsp < Math.random()) {
            ofc_mgn = 150
        }
    }
};

function mv_d(tg) {
    var u_tg_x = tg.x;
    var u_tg_z = tg.z;
    if (tg.z > -250) {
        switch (tg.s) {
            case 0:
                tg.x += tg.sx;
                tg.z += tg.sz;
                tg.sx *= .95;
                tg.sz *= .95;
                tg.sp -= .3;
                if (tg.sp < 0) {
                    tg.sp = 0
                };
                tg.on_st = 1;
                break;
            case 1:
                var Rx = tg.tgx - tg.x;
                var Ry = tg.tgz - tg.z;
                var Rds = Math.sqrt(Math.pow(Rx, 2) + Math.pow(Ry, 2));
                var Rr = Math.atan2(Ry, Rx);
                if (Rds < tg.msp) {
                    tg.on_st = 1;
                    tg.s = 0;
                    if (fst_lng == 0 && tg == pg) {
                        fst_lng = 1
                    };
                    tg.sx *= .5;
                    tg.sz *= .5;
                    tg.sp = 0
                } else {
                    tg.sx = Math.cos(Rr) * tg.sp;
                    tg.sz = Math.sin(Rr) * tg.sp;
                    tg.x += tg.sx;
                    tg.z += tg.sz;
                    tg.sp += tg.dsp;
                    if (tg.sp > tg.msp) {
                        tg.sp = tg.msp
                    }
                };
                break;
            case 2:
                var Rx = tg.tgx - tg.x;
                var Ry = tg.tgz - tg.z;
                var Rds = Math.sqrt(Math.pow(Rx, 2) + Math.pow(Ry, 2));
                var Rr = Math.atan2(Ry, Rx);
                if (Rds < tg.msp) {
                    tg.s = 0;
                    tg.sx *= .5;
                    tg.sz *= .5;
                    tg.sp = 0
                } else {
                    tg.sx = Math.cos(Rr) * tg.sp;
                    tg.sz = Math.sin(Rr) * tg.sp;
                    tg.x += tg.sx;
                    tg.z += tg.sz;
                    tg.sp += tg.dsp;
                    if (tg.sp > tg.msp) {
                        tg.sp = tg.msp
                    }
                };
                break;
            case 3:
                var Rx = tg.tgx - tg.x;
                var Ry = tg.tgz - tg.z;
                var Rds = Math.sqrt(Math.pow(Rx, 2) + Math.pow(Ry, 2));
                var Rr = Math.atan2(Ry, Rx);
                if (Rds < tg.msp) {
                    tg.s = 0;
                    tg.sx *= .5;
                    tg.sz *= .5;
                    tg.sp = 0
                } else {
                    tg.sx = Math.cos(Rr) * tg.sp;
                    tg.sz = Math.sin(Rr) * tg.sp;
                    tg.x += tg.sx;
                    tg.z += tg.sz;
                    tg.sp += tg.dsp;
                    if (tg.sp > tg.msp) {
                        tg.sp = tg.msp
                    }
                };
                break;
            case 4:
                tg.x += tg.sx;
                tg.z += tg.sz;
                tg.sx *= .99;
                tg.sz *= .99;
                tg.sp = 0;
                tg.fc++;
                if (tg.fc > 18) {
                    tg.s = 1;
                    tg.fc = 0
                };
                break;
            case 5:
                var Rx = tg.tgx - tg.x;
                var Ry = tg.tgz - tg.z;
                var Rds = Math.sqrt(Math.pow(Rx, 2) + Math.pow(Ry, 2));
                var Rr = Math.atan2(Ry, Rx);
                if (Rds < tg.msp) {
                    tg.s = 0;
                    tg.sx *= .5;
                    tg.sz *= .5;
                    tg.sp = 0
                } else {
                    tg.sx = Math.cos(Rr) * tg.sp;
                    tg.sz = Math.sin(Rr) * tg.sp;
                    tg.x += tg.sx;
                    tg.z += tg.sz;
                    tg.sp += tg.dsp;
                    if (tg.sp > tg.msp) {
                        tg.sp = tg.msp
                    }
                };
                break;
            default:
        }
    };
    var ttg;
    if (tg.i > 5 && tg.z > -250) {
        for (var i = 1; i < mxp + 1; i++) {
            ttg = bp_f["c" + i];
            if (tg != ttg && tg != pg) {
                var Rx = tg.x - ttg.x;
                var Ry = tg.z - ttg.z;
                var Rr = Math.atan2(Ry, Rx);
                var Rds = Math.sqrt(Math.pow(Rx, 2) + Math.pow(Ry, 2));
                var Rd = 12;
                if (Rds < Rd) {
                    if (b_s == 3) {
                        Rd = 12
                    };
                    if (ttg == pg && b_s == 3) {
                        tg.z += Math.sin(Rr) * 1;
                        if (ttg.x > tg.x) {
                            tg.x -= 1
                        } else {
                            tg.x += 1
                        }
                    } else {
                        tg.x = ttg.x + Math.cos(Rr) * Rd;
                        tg.z = ttg.z + Math.sin(Rr) * Rd
                    };
                    if (sht_qlk_tm == 1 || b_gl == 2) {
                        tg.s = 0
                    }
                }
            }
        }
    }
};

function bk_scr() {
    ctx.fillStyle = "#14477C";
    ctx.fillRect(0, 0, ww, wh);
    ctx.drawImage(img_cs2, 0, 0, 640, 1199, 0, 0, 640 * ltl, 1199 * ltl)
};

function set_flr_txtr(i) {
    var ccvs2 = document.createElement('canvas');
    var cc_lt = 1;
    var mtj_w = 1024;
    var mtj_h = 2048;
    ccvs2.width = mtj_w * cc_lt;
    ccvs2.height = mtj_h * cc_lt;
    var bcv2 = ccvs2.getContext('2d');
    bcv2.drawImage(img_flr, 0, 0, mtj_w, mtj_h, 0, 0, mtj_w * cc_lt, mtj_h * cc_lt);
    floor.material.map = new THREE.CanvasTexture(ccvs2);
    floor.material.map.format = THREE.RGBFormat;
    floor.material.map.anisotropy = mx_anst;
    floor.material.map.encoding = 3001
};

function thr_txr() {
    txtr_cv = new Array();
    set_txtr(0, 8);
    set_txtr(1, 9);
    set_txtr(2, 10);
    set_txtr(3, 9);
    set_txtr(4, 10);
    set_txtr(5, 9);
    set_txtr(6, 10);
    set_txtr(7, 9);
    set_txtr(8, 10);
    set_txtr(9, 9);
    set_txtr(10, 10);
    set_txtr(11, 9);
    set_txtr(12, 10);
    bd_geometry = new THREE.PlaneGeometry(1, 1);
    bd_material = new THREE.MeshBasicMaterial({
        map: txtr_cv[0],
        depthWrite: false,
        transparent: true,
        opacity: .4,
        color: 0x000000
    });
    b_shd = new THREE.Mesh(bd_geometry, bd_material);
    b_shd.visible = true;
    b_shd.rotation.x = -pi2;
    b_shd.position.set(0, .1, 0);
    b_shd.scale.set(8, 8, 1);
    scene.add(b_shd);
    loader = new THREE.TextureLoader();
    var map = new Array(0, 0, 0, 0, 0, 0);
    for (var i = 0; i < 6; i++) {
        map[i] = txtr_cv[i + 1];
        map[i].wrapS = map[i].wrapT = THREE.RepeatWrapping;
        map[i].offset.x = 0;
        map[i].repeat.set(4, 1);
        map[i].encoding = 3001
    };
    for (var i = 7; i < 13; i++) {
        map[i] = txtr_cv[i];
        map[i].wrapS = map[i].wrapT = THREE.RepeatWrapping;
        map[i].offset.x = 0;
        map[i].repeat.set(3, 1);
        map[i].encoding = 3001
    };
    var flr_lt = 3;
    floor1a = new Array();
    var light_cl = new Array(0xffffff, 0x999999, 0x666666, 0x333333, 0x222222, 0x111111);
    for (var i = 0; i < 6; i++) {
        var floor1 = new THREE.Mesh(new THREE.PlaneGeometry(256 / flr_lt * 4, 64 / flr_lt), new THREE.MeshStandardMaterial({
            map: map[i],
            color: light_cl[i],
            transparent: true,
            displacementBias: 1
        }));
        floor1.position.set(0, 10 + i * 10 * 1.1, 256 + 20 + i * 10 * 1.5);
        floor1.rotation.y = Math.PI;
        scene.add(floor1)
    };
    var sht_set_z = 185;
    for (var i = 0; i < 6; i++) {
        var floor1 = new THREE.Mesh(new THREE.PlaneGeometry(256 / flr_lt * 3, 64 / flr_lt), new THREE.MeshStandardMaterial({
            map: map[i + 7],
            color: light_cl[i],
            transparent: true,
            displacementBias: 1
        }));
        floor1.position.set(165 + i * 10 * 1.5, 10 + i * 10 * 1.1, sht_set_z);
        floor1.rotation.y = Math.PI + Math.PI * .5;
        scene.add(floor1)
    };
    for (var i = 0; i < 6; i++) {
        var floor1 = new THREE.Mesh(new THREE.PlaneGeometry(256 / flr_lt * 3, 64 / flr_lt), new THREE.MeshStandardMaterial({
            map: map[i + 7],
            color: light_cl[i],
            transparent: true,
            displacementBias: 1
        }));
        floor1.position.set(-(165 + i * 10 * 1.5), 10 + i * 10 * 1.1, sht_set_z);
        floor1.rotation.y = Math.PI - Math.PI * .5;
        scene.add(floor1)
    };
    txtr_cv = [];
    txtr_cv.length = 0
};

function r_stt() {
    if (rst_ct == 0) {
        uni_buy_anm = 0;
        sys_wt_ct = 0;
        rst_ct = 1;
        my_coin_a = my_coin;
        er_anm = 0;
        bout_ct = 0;
        if (spsv_bk == 2) {
            vs_match_set()
        };
        pt_f = {};
        pt_fi = 0;
        sndf(14, .06);
        unfm1 = st_my_avt;
        for (var i = 1; i < 6; i++) {
            var tg = bp_f["c" + i];
            var chpt = tg.mms.getObjectByName("body");
            var tr_s_sh = shoes[tg.i];
            var tr_s_fs = sk_fc[tg.i];
            var tr_s_yn = unfm1;
            var tr_s_nm = tg.i;
            chpt.material.map = set_chr_txtr(tr_s_sh, tr_s_fs, tr_s_yn, tr_s_nm, 0);
            chpt.material.map.encoding = 3001;
            chpt.material.map.flipY = false;
            chpt.material.map.magFilter = THREE.NearestFilter
        };
        unfm2 = Math.floor(Math.random() * avt_shp_max);
        unf_hnt(unfm1, unfm2);
        for (var i = 6; i < 11; i++) {
            var tg = bp_f["c" + i];
            var chpt = tg.mms.getObjectByName("body");
            var tr_s_sh = shoes[tg.i];
            var tr_s_fs = sk_fc[tg.i];
            var tr_s_yn = unfm2;
            var tr_s_nm = tg.i;
            chpt.material.map = set_chr_txtr(tr_s_sh, tr_s_fs, tr_s_yn, tr_s_nm, 1);
            chpt.material.map.encoding = 3001;
            chpt.material.map.flipY = false;
            chpt.material.map.magFilter = THREE.NearestFilter
        };
        rslt_a = 0;
        bz_gv_c = 0;
        ttl_sht_scr = 0;
        ttl_sht_scr_a = 0;
        sht_qlk_stp = -1;
        blk_lv = 0;
        blk_hit = 0;
        def_rsp = 0;
        def_spd = .7;
        trn_stg = 0;
        mis_stg = 0;
        lng_sht_p = 0;
        rs_get_coin = 0;
        rs_stk_coin = 0;
        rs_flg = 0;
        rs_as = 0;
        rs_ac = 0;
        rs_anm = 0;
        gm_rst();
        fanc1 = 0;
        adj_chk_mode = 1;
        s = 1
    }
};

function run_lp() {
    requestAnimationFrame(run_lp);
    if (adj_chk_mode == 1) {
        var ntm = +new Date();
        flt_cnt++;
        if (flt_cnt == 60) {
            flt_cnt = 0;
            var flt_time_c = ntm - flt_tim;
            flt_tim = ntm
        };
        var ntm = +new Date();
        run_lp2();
        adj_ct += (ntm - adj_utm) - 17;
        if (adj_ct > adj_lt) {
            lp();
            adj_ct = 0;
            adj_utm2 = ntm
        };
        adj_utm = ntm
    } else {
        lp(1)
    }
};

function run_lp2(i) {
    var ntm = +new Date();
    if (ntm - adj_utm2 > adj_lt) {
        lp(1);
        adj_utm2 = ntm
    }
};

function lp(rend_flg) {;
    var ntm = +new Date();
    u_ntm = ntm;
    tm = Math.floor(ntm / 1000);
    if (tm != mt && tm > 1) {
        flt = 0
    };
    flt++;
    mt = tm;
    var tg;
    var i;
    var eg;
    var shon = 0;
    if (msi > .1) {
        if (mss == 1) {
            shon = 1;
            ctx.save();
            ctx.translate((msx | 0), (msy | 0))
        };
        msx = Math.random() * msi * 2 - msi;
        msy = Math.random() * msi * 2 - msi;
        mss *= mst;
        msi *= msg
    } else {
        msx = 0;
        msy = 0;
        msi = 0
    };
    switch (s) {
        case -1:
            break;
        case 79:
            lding();
            break;
        case 80:
            if (gldt > gldt_mx && thr_ch_ld == 1 && un_dt_ld == 1) {
                unfm1 = st_my_avt;
                u_unfm1 = unfm1;
                unfm2 = Math.floor(Math.random() * avt_shp_max);
                unf_hnt(unfm1, unfm2);
                s = 79;
                if (fchk) {
                    thr_txr();
                    gmst_f()
                } else {
                    thr_txr();
                    gmst_f()
                }
            };
            break;
        case 1:
            if (video_lp_stop == 0) {
                gam(rend_flg)
            };
            break;
        case 2:
            bk_scr();
            bns_tm = Math.floor(+new Date() / 1000);
            if (bns_tm != bns_mt && bns_tm > 1) {
                if (bns_tim > 0) {
                    bns_tim -= bns_tm - bns_mt;
                    if (bns_tim < 0) {
                        bns_tim = 0
                    }
                }
            };
            bns_mt = bns_tm;
            if (scr_mode == 0) {;
                ctx.fillStyle = "#fff";
                ctx.font = "bold " + (18 * ltl) + "px sans-serif";
                stset_c("SCORE", 320, 37);
                ctx.font = "bold " + (50 * ltl) + "px sans-serif";
                stset_c(ttl_sht_scr, 320, 85);
                ttl_coin();
                d_box("#FFF", 400, 20, 220, 50, .15);
                ctx.fillStyle = "#ffc752";
                ctx.font = "bold " + (16 * ltl) + "px sans-serif";
                stset_l("Today", 410, 50);
                ctx.fillStyle = "#fff";
                ctx.font = "bold " + (22 * ltl) + "px sans-serif";
                if (dly_rank > 0) {
                    var inptxt = dly_rank;
                    var txsn = ctx.measureText(inptxt);
                    ctx.fillText(inptxt, (609 * ltl) - txsn.width, 53 * ltl);
                    spt_t1(71, 609 - 35 - txsn.width / ltl, 31)
                } else {
                    stset_c("-", 543, 53)
                };
                var cnt_y = wh / ltl / 2 - 324;
                d_box("#00a0e9", 0, 0 + cnt_y, 640, 318, .25);
                d_box("#0491ec", 0, 73 + cnt_y, 221, 100, 1);
                d_box("#ed0938", 418, 73 + cnt_y, 222, 100, 1);
                spt_t3(1, 163, 209 + cnt_y);
                ctx.fillStyle = "#362e2b";
                ctx.font = "bold " + (40 * ltl) + "px sans-serif";
                // stset_c("PLAY", 320, 262 + cnt_y);
                ctx.font = "bold " + (18 * ltl) + "px sans-serif";
                // stset_c("with Friend", 320, 282 + cnt_y);
                spt_t3(3, 220, 73 + cnt_y);
                spt_t3(4, -10, 12 + cnt_y);
                spt_t3(5, 330, 12 + cnt_y);
                ctx.fillStyle = "#fff";
                ctx.font = (18 * ltl) + "px sans-serif";
                stset_c(mynm, 150, 38 + cnt_y);
                stset_c(vs_nm, 490, 38 + cnt_y);
                spt_t3(8, 76, 49 + cnt_y);
                spt_t3(8, 416, 49 + cnt_y);
                if (fchk) {
                    if (mypho == 1) {
                        spt_pho2(my_pho, 75, 48 + cnt_y, 150)
                    };
                    if (vs_pho_u.complete && vs_id != -1) {
                        spt_pho2(vs_pho_u, 415, 48 + cnt_y, 150)
                    }
                };
                ctx.fillStyle = "#fff";
                spt_t3(7, 21, 354 + cnt_y);
                // stset_c("Play with Friend", 75, 481 + cnt_y);
                spt_t3(19, 154, 354 + cnt_y);
                // stset_c("Shop", 208, 481 + cnt_y);
                if (boost_3p == 1) {
                    spt_t3(29, 266, 343 + cnt_y)
                } else if (my_coin < 50) {
                    spt_t3(31, 266, 343 + cnt_y)
                } else if (boost_3p == 0) {
                    spt_t3(27, 266, 343 + cnt_y)
                };
                // stset_c("Boost 3pt", 320, 481 + cnt_y);
                if (boost_dk == 1) {
                    spt_t3(30, 378, 343 + cnt_y)
                } else if (my_coin < 100) {
                    spt_t3(32, 378, 343 + cnt_y)
                } else if (boost_dk == 0) {
                    spt_t3(28, 378, 343 + cnt_y)
                };
                // stset_c("Boost Dunk", 432, 481 + cnt_y);
                if (bns_tim > 0 || (fb_ad_v2 != 1) || spsv_bk < 2) {;
                    spt_t3(21, 511, 354 + cnt_y);
                    ctx.fillStyle = "#fff";
                    ctx.font = (18 * ltl) + "px sans-serif";
                    if (bns_tim <= 86400) {
                        var bns_tim_h = (bns_tim / 60 / 60 | 0);
                        var bns_tim_m = (bns_tim / 60 | 0) - bns_tim_h * 60;
                        var bns_tim_s = bns_tim - bns_tim_m * 60 - bns_tim_h * 60 * 60;
                        var bns_tim_m_s = "" + bns_tim_m;
                        if (bns_tim_m < 10) {
                            bns_tim_m_s = "0" + bns_tim_m
                        };
                        var bns_tim_s_s = "" + bns_tim_s;
                        if (bns_tim_s < 10) {
                            bns_tim_s_s = "0" + bns_tim_s
                        };
                        if ((fb_ad_v2 != 1) || spsv_bk < 2) {;
                            // stset_c("Loading...", 565, 380 + cnt_y)
                        } else {
                            stset_c(bns_tim_h + ":" + bns_tim_m_s + ":" + bns_tim_s_s, 565, 380 + cnt_y)
                        }
                    } else {
                        stset_c("-", 65, 161)
                    }
                } else {
                    spt_t3(20, 511, 354 + cnt_y);
                    spt_t1(73, 596, 348 + cnt_y)
                };
                // stset_c("Time Bonus", 565, 481 + cnt_y);
                spt_t3(2, 238, 522 + cnt_y);
                ctx.fillStyle = "#362e2b";
                ctx.font = "bold " + (26 * ltl) + "px sans-serif";
                stset_c("PLAY", 320, 565 + cnt_y);
                spt_t3(22, 516, 511 + cnt_y);
                if (sht_ct_ok == 1) {
                    spt_t3(23, 28, 511 + cnt_y)
                };
                btch_anm(cnt_y);
                if (onflg != -99) {
                    ctx.globalCompositeOperation = "lighter";
                    switch (onflg) {
                        case 1:
                            ctx.globalAlpha = .6;
                            spt_t3(1, 163, 209 + cnt_y);
                            break;
                        case 2:
                            ctx.globalAlpha = .6;
                            spt_t3(7, 21, 354 + cnt_y);
                            break;
                        case 3:
                            ctx.globalAlpha = .6;
                            spt_t3(19, 154, 354 + cnt_y);
                            break;
                        case 104:
                            ctx.globalAlpha = .6;
                            spt_t3(27, 266, 343 + cnt_y);
                            break;
                        case 105:
                            ctx.globalAlpha = .6;
                            spt_t3(28, 378, 343 + cnt_y);
                            break;
                        case 4:
                            ctx.globalAlpha = .6;
                            spt_t3(20, 511, 354 + cnt_y);
                            spt_t1(73, 596, 348 + cnt_y);
                            break;
                        case 5:
                            ctx.globalAlpha = .4;
                            spt_t3(2, 238, 522 + cnt_y);
                            break;
                        case 6:
                            ctx.globalAlpha = .6;
                            spt_t3(22, 516, 511 + cnt_y);
                            break;
                        case 7:
                            ctx.globalAlpha = .6;
                            spt_t3(23, 28, 511 + cnt_y);
                            break;
                        default:
                    };
                    ctx.globalAlpha = 1;
                    ctx.globalCompositeOperation = "source-over"
                };
                if (spsv_bk < 2) {
                    if (spsv_bk < 1) {
                        spt_t3(24, 153, 348 + cnt_y);
                        spt_t3(24, 153 + 112, 348 + cnt_y);
                        spt_t3(24, 153 + 224, 348 + cnt_y)
                    };
                    spt_t3(24, 510, 348 + cnt_y)
                }
            } else {;
                ctx.fillStyle = "#fff";
                ctx.font = "bold " + (18 * ltl) + "px sans-serif";
                stset_c("SCORE", 320, 37);
                ctx.font = "bold " + (50 * ltl) + "px sans-serif";
                stset_c(ttl_sht_scr, 320, 85);
                ttl_coin();
                d_box("#FFF", 400, 20, 220, 50, .15);
                ctx.fillStyle = "#ffc752";
                ctx.font = "bold " + (16 * ltl) + "px sans-serif";
                stset_l("Today", 410, 50);
                ctx.fillStyle = "#fff";
                ctx.font = "bold " + (22 * ltl) + "px sans-serif";
                if (dly_rank > 0) {
                    var inptxt = dly_rank;
                    var txsn = ctx.measureText(inptxt);
                    ctx.fillText(inptxt, (609 * ltl) - txsn.width, 53 * ltl);
                    spt_t1(71, 609 - 35 - txsn.width / ltl, 31)
                } else {
                    stset_c("-", 543, 53)
                };
                var cnt_y = wh / ltl / 2 - 275;
                d_box("#00a0e9", 0, 0 + cnt_y, 640, 318, .25);
                d_box("#0491ec", 0, 73 + cnt_y, 221, 100, 1);
                d_box("#ed0938", 418, 73 + cnt_y, 222, 100, 1);
                spt_t3(1, 163, 209 + cnt_y);
                ctx.fillStyle = "#362e2b";
                ctx.font = "bold " + (40 * ltl) + "px sans-serif";
                stset_c("PLAY", 320, 262 + cnt_y);
                ctx.font = "bold " + (18 * ltl) + "px sans-serif";
                // stset_c("with Friend", 320, 282 + cnt_y);
                spt_t3(3, 220, 73 + cnt_y);
                spt_t3(4, -10, 12 + cnt_y);
                spt_t3(5, 330, 12 + cnt_y);
                ctx.fillStyle = "#fff";
                ctx.font = (18 * ltl) + "px sans-serif";
                stset_c(mynm, 150, 38 + cnt_y);
                stset_c(vs_nm, 490, 38 + cnt_y);
                spt_t3(8, 76, 49 + cnt_y);
                spt_t3(8, 416, 49 + cnt_y);
                if (fchk) {
                    if (mypho == 1) {
                        spt_pho2(my_pho, 75, 48 + cnt_y, 150)
                    };
                    if (vs_pho_u.complete && vs_id != -1) {
                        spt_pho2(vs_pho_u, 415, 48 + cnt_y, 150)
                    }
                };
                ctx.fillStyle = "#fff";
                spt_t3_s(7, 80, 338 + cnt_y, .6);
                ctx.font = (14 * ltl) + "px sans-serif";
                // stset_c("Play with Friend", 110, 418 + cnt_y);
                spt_t3_s(19, 200, 338 + cnt_y, .6);
                // stset_c("Shop", 232, 418 + cnt_y);
                // stset_c("Boost 3pt", 320, 418 + cnt_y);
                // stset_c("Boost Dunk", 408, 418 + cnt_y);
                if (boost_3p == 1) {
                    spt_t3_s(29, 288, 332 + cnt_y, .6)
                } else if (my_coin < 50) {
                    spt_t3_s(31, 288, 332 + cnt_y, .6)
                } else if (boost_3p == 0) {
                    spt_t3_s(27, 288, 332 + cnt_y, .6)
                };
                // stset_c("Boost 3pt", 320, 481 + cnt_y);
                if (boost_dk == 1) {
                    spt_t3_s(30, 376, 332 + cnt_y, .6)
                } else if (my_coin < 100) {
                    spt_t3_s(32, 376, 332 + cnt_y, .6)
                } else if (boost_dk == 0) {
                    spt_t3_s(28, 376, 332 + cnt_y, .6)
                };
                if (bns_tim > 0 || (fb_ad_v2 != 1) || spsv_bk < 2) {;
                    spt_t3_s(21, 496, 338 + cnt_y, .6);
                    ctx.fillStyle = "#fff";
                    ctx.font = (12 * ltl) + "px sans-serif";
                    if (bns_tim <= 86400) {
                        var bns_tim_h = (bns_tim / 60 / 60 | 0);
                        var bns_tim_m = (bns_tim / 60 | 0) - bns_tim_h * 60;
                        var bns_tim_s = bns_tim - bns_tim_m * 60 - bns_tim_h * 60 * 60;
                        var bns_tim_m_s = "" + bns_tim_m;
                        if (bns_tim_m < 10) {
                            bns_tim_m_s = "0" + bns_tim_m
                        };
                        var bns_tim_s_s = "" + bns_tim_s;
                        if (bns_tim_s < 10) {
                            bns_tim_s_s = "0" + bns_tim_s
                        };
                        if ((fb_ad_v2 != 1) || spsv_bk < 2) {;
                            stset_c("Loading...", 528, 354 + cnt_y)
                        } else {
                            stset_c(bns_tim_h + ":" + bns_tim_m_s + ":" + bns_tim_s_s, 528, 354 + cnt_y)
                        }
                    } else {
                        stset_c("-", 65, 161)
                    }
                } else {
                    spt_t3_s(20, 496, 338 + cnt_y, .6);
                    spt_t1(73, 544, 326 + cnt_y, .8)
                };
                // stset_c("Time Bonus", 528, 418 + cnt_y);
                spt_t3_s(2, 254, 456 + cnt_y, .8);
                ctx.fillStyle = "#362e2b";
                ctx.font = "bold " + (20 * ltl) + "px sans-serif";
                stset_c("PLAY", 320, 490 + cnt_y);
                spt_t3_s(22, 524, 455 + cnt_y, .6);
                if (sht_ct_ok == 1) {
                    spt_t3_s(23, 57, 455 + cnt_y, .6)
                };
                btch_anm(cnt_y + 2);
                if (onflg != -99) {
                    ctx.globalCompositeOperation = "lighter";
                    switch (onflg) {
                        case 1:
                            ctx.globalAlpha = .6;
                            spt_t3(1, 163, 209 + cnt_y);
                            break;
                        case 2:
                            ctx.globalAlpha = .6;
                            spt_t3_s(7, 80, 338 + cnt_y, .6);
                            break;
                        case 3:
                            ctx.globalAlpha = .6;
                            spt_t3_s(19, 200, 338 + cnt_y, .6);
                            break;
                        case 104:
                            ctx.globalAlpha = .6;
                            spt_t3_s(27, 288, 332 + cnt_y, .6);
                            break;
                        case 105:
                            ctx.globalAlpha = .6;
                            spt_t3_s(28, 376, 332 + cnt_y, .6);
                            break;
                        case 4:
                            ctx.globalAlpha = .6;
                            spt_t3_s(20, 496, 338 + cnt_y, .6);
                            spt_t1(73, 544, 326 + cnt_y, .8);
                            break;
                        case 5:
                            ctx.globalAlpha = .4;
                            spt_t3_s(2, 254, 456 + cnt_y, .8);
                            break;
                        case 6:
                            ctx.globalAlpha = .6;
                            spt_t3_s(22, 524, 455 + cnt_y, .6);
                            break;
                        case 7:
                            ctx.globalAlpha = .6;
                            spt_t3_s(23, 57, 455 + cnt_y, .6);
                            break;
                        default:
                    };
                    ctx.globalAlpha = 1;
                    ctx.globalCompositeOperation = "source-over"
                };
                if (spsv_bk < 2) {
                    if (spsv_bk < 1) {
                        spt_t3_s(24, 191, 325 + cnt_y, .75);
                        spt_t3_s(24, 191 + 88, 325 + cnt_y, .75);
                        spt_t3_s(24, 191 + 88 * 2, 325 + cnt_y, .75)
                    };
                    spt_t3_s(24, 487, 325 + cnt_y, .75)
                };
            };
            if (uni_buy_anm == 1) {
                p_sys()
            };
            switch (dly_alt) {
                case 0:
                    if (dly_rank_up == 1) {
                        p_sys()
                    };
                    break;
                case 1:
                    d_box("#000", 0, 0, ww / ltl, wh / ltl, .7);
                    var cnt_y = wh / ltl / 2 - (600 / 2);
                    d_box("#FFF", 90, 35 + cnt_y, 460, 308, 1);
                    d_box("#787544", 90, 343 + cnt_y, 460, 187, 1);
                    spt_t3(18, 206, 172 + cnt_y);
                    ctx.fillStyle = "#362e2b";
                    ctx.font = "bold " + (36 * ltl) + "px sans-serif";
                    stset_c("FREE COINS", 320, 105 + cnt_y);
                    ctx.font = "bold " + (24 * ltl) + "px sans-serif";
                    stset_c("You got the reward!!", 320, 143 + cnt_y);
                    ctx.fillStyle = "#fff";
                    ctx.font = "bold " + (24 * ltl) + "px sans-serif";
                    stset_c("+100", 320, 298 + cnt_y);
                    spt_t3(1, 162, 382 + cnt_y);
                    spt_t3(9, 187, 403 + cnt_y);
                    ctx.fillStyle = "#362e2b";
                    ctx.font = "bold " + (36 * ltl) + "px sans-serif";
                    stset_c("CLAIM", 353, 441 + cnt_y);
                    spt_t3(11, 513, 0 + cnt_y);
                    if (onflg != -99) {
                        ctx.globalCompositeOperation = "lighter";
                        switch (onflg) {
                            case 31:
                                ctx.globalAlpha = .6;
                                spt_t3(11, 513, 0 + cnt_y);
                                break;
                            case 32:
                                ctx.globalAlpha = .6;
                                spt_t3(1, 162, 382 + cnt_y);
                                break;
                            default:
                        };
                        ctx.globalAlpha = 1;
                        ctx.globalCompositeOperation = "source-over"
                    };
                    break;
                case 2:
                    d_box("#000", 0, 0, ww / ltl, wh / ltl, .7);
                    var cnt_y = wh / ltl / 2 - 164;
                    spt_t3(18, 206, cnt_y);
                    ctx.fillStyle = "#ffdd50";
                    ctx.font = "bold " + (36 * ltl) + "px sans-serif";
                    stset_c("+100", 320, cnt_y + 130);
                    p_sys();
                    if (rs_ac == 2 && rs_get_coin < 50) {
                        ptc_chy = 0;
                        pt_ui("72/100/0/0#0#" + "320#" + (cnt_y + 119) + "#75#75#0#0#0#0#0|" + "30#2#0#0#75#75#100#0#0#0#300|" + "30#2#180#52#50#50#100#0#0#0#10#A|");
                        sndf(13, .04);
                        rs_flg++;
                        rs_get_coin++;
                        rs_ac = 0
                    };
                    rs_ac++;
                    break;
                default:
            };
            if (swgm_l == 1) {
                ctx.globalAlpha = .6;
                ctx.fillStyle = "#fff";
                ctx.fillRect(0, wh - 130 * ltl, ww, 130 * ltl);
                ctx.globalAlpha = 1;
                for (var i = 0; i < swgm_list.length; i++) {
                    if (swgm_list[i].pho_img.complete) {
                        spt_pho2(swgm_list[i].pho_img, 40 + i * 116, wh / ltl - 121, 96)
                    };
                    if (link_pickup.complete && swgm_list[i].isPickup) {
                        spt_pho2(link_pickup, 40 + i * 116, wh / ltl - 121, 38)
                    };
                    if (onflg == 200 + i) {
                        ctx.globalCompositeOperation = "lighter";
                        ctx.globalAlpha = .75;
                        spt_pho2(swgm_list[i].pho_img, 40 + i * 116, wh / ltl - 121, 96);
                        ctx.globalAlpha = 1;
                        ctx.globalCompositeOperation = "source-over"
                    };
                    ctx.fillStyle = "#fff";
                    ctx.font = (18 * ltl | 0) + "px HelveticaNeue-Bold";
                    stset_c(swgm_list[i].nm, 88 + i * 116, wh / ltl - 8)
                }
            };
            if (er_anm > 0) {
                var er_anm_y = -79 + (200 - er_anm) * 6;
                if (er_anm_y > 15) {
                    er_anm_y = 15
                };
                spt_t1(88, 248, er_anm_y);
                er_anm--
            };
            if (sys_wt_ct > 0) {
                ctx.globalAlpha = .5;
                ctx.fillStyle = "#000";
                ctx.fillRect(0, 0, ww, wh);
                ctx.globalAlpha = 1;
                sys_wt_ct++;
                if (sys_wt_ct > 70) {
                    lding2()
                }
            };
            if (boost_shop_dlg != 0) {
                d_box("#000", 0, 0, ww / ltl, wh / ltl, .7);
                var cnt_y = wh / ltl / 2 - (300 / 2);
                d_box("#d2d2d2", 90, 0 + cnt_y, 460, 60, 1);
                d_box("#eeeeee", 90, 58 + cnt_y, 460, 197, 1);
                ctx.fillStyle = "#000";
                ctx.font = (20 * ltl) + "px sans-serif";
                if (boost_shop_dlg == 1) {
                    stset_c('"Boost 3pt" for one-time play only.', 320, 34 + cnt_y)
                } else {
                    stset_c('"Boost Dunk" for one-time play only.', 320, 34 + cnt_y)
                };
                spt_t1_s(72, 234, 81 + cnt_y, .75);
                ctx.fillStyle = "#000";
                ctx.font = "bold " + (48 * ltl) + "px sans-serif";
                if (boost_shop_dlg == 1) {
                    stset_r(50, 403, 126 + cnt_y)
                } else {
                    stset_r(100, 403, 126 + cnt_y)
                };
                d_box("#569370", 330, 220 + cnt_y, 190, 6, 1);
                if (onflg != 21) {
                    d_box("#51bd7f", 330, 165 + cnt_y, 190, 58, 1)
                } else {
                    d_box("#62da95", 330, 165 + cnt_y, 190, 58, 1)
                };
                ctx.fillStyle = "#fff";
                ctx.font = "bold " + (24 * ltl) + "px sans-serif";
                stset_c("YES", 425, 203 + cnt_y);
                d_box("#9d5451", 120, 220 + cnt_y, 190, 6, 1);
                if (onflg != 22) {
                    d_box("#da605b", 120, 165 + cnt_y, 190, 58, 1)
                } else {;
                    d_box("#f47570", 120, 165 + cnt_y, 190, 58, 1)
                };
                ctx.fillStyle = "#fff";
                ctx.font = "bold " + (24 * ltl) + "px sans-serif";
                stset_c("CANCEL", 215, 203 + cnt_y)
            };
            break;
        case 27:
            bk_scr();
            bk_s = 24;
            if (slty == -1) {
                slwy += slay;
                slay *= .9;
                if (slrk == 1) {
                    if (slwy > 0) {
                        slwy += (0 - slwy) / 3
                    };
                    if (slwy < slwh) {
                        slwy += (slwh - slwy) / 3;
                        if (slwy > 0) {
                            slwy = 0
                        }
                    }
                }
            } else {};
            aslwy += (slwy - aslwy) / 2;
            var sty = aslwy;
            var lstx = 5;
            var lsty = 5;
            var lsti = 1;
            var lstbg = new Array(81, 81, 82);
            var vslsx = 26;
            var vslsy = 96;
            var avt_shp_st_f = 0;
            yn_name_color = "#eeeeee";
            yn_number_color = "#eeeeee";
            for (var i = 0; i < 30; i++) {
                absl_x = vslsx + 33;
                absl_y = vslsy + 27 + sty;
                if (absl_y < wh / ltl && absl_y > -150) {
                    yn_shop(i)
                };
                var set_vslsx = vslsx - 26;
                var set_vslsy = vslsy - 96 + sty;
                if (i == st_my_avt) {
                    avt_shp_st_f = 1;
                    spt_t3(13, vslsx, vslsy + sty);
                    ctx.fillStyle = yn_name_color;
                    ctx.font = (14 * ltl) + "px sans-serif";
                    stset_c("Name", 120 + set_vslsx, 168 + set_vslsy);
                    ctx.fillStyle = yn_number_color;
                    ctx.font = "bold " + (57 * ltl) + "px sans-serif";
                    stset_c("4", 120 + set_vslsx, 220 + set_vslsy);
                    ctx.fillStyle = "#aaa";
                    ctx.font = "bold " + (20 * ltl) + "px sans-serif";
                    stset_c("Selected", 120 + set_vslsx, 325 + set_vslsy)
                } else if (i > avt_shp_max) {
                    avt_shp_st_f = 4
                } else if (avt_gt[i] == 1) {
                    avt_shp_st_f = 3;
                    spt_t3(14, vslsx, vslsy + sty);
                    ctx.fillStyle = yn_name_color;
                    ctx.font = (14 * ltl) + "px sans-serif";
                    stset_c("Name", 120 + set_vslsx, 168 + set_vslsy);
                    ctx.fillStyle = yn_number_color;
                    ctx.font = "bold " + (57 * ltl) + "px sans-serif";
                    stset_c("4", 120 + set_vslsx, 220 + set_vslsy);
                    spt_t3(17, 38 + set_vslsx, 296 + set_vslsy);
                    ctx.fillStyle = "#fff";
                    ctx.font = "bold " + (20 * ltl) + "px sans-serif";
                    stset_c("Select", 120 + set_vslsx, 325 + set_vslsy);
                    if (onflg == i + 500) {
                        ctx.globalCompositeOperation = "lighter";
                        spt_t3(14, vslsx, vslsy + sty);
                        ctx.globalCompositeOperation = "source-over"
                    }
                } else {
                    avt_shp_st_f = 2;
                    spt_t3(12, vslsx, vslsy + sty);
                    ctx.fillStyle = yn_name_color;
                    ctx.font = (14 * ltl) + "px sans-serif";
                    stset_c("Name", 120 + set_vslsx, 168 + set_vslsy);
                    ctx.fillStyle = yn_number_color;
                    ctx.font = "bold " + (57 * ltl) + "px sans-serif";
                    stset_c("4", 120 + set_vslsx, 220 + set_vslsy);
                    if (my_coin >= avt_pr[i]) {
                        spt_t3(15, 28 + set_vslsx, 296 + set_vslsy)
                    } else {
                        spt_t3(16, 28 + set_vslsx, 296 + set_vslsy)
                    };
                    ctx.fillStyle = "#362e2b";
                    ctx.font = "bold " + (26 * ltl) + "px sans-serif";
                    stset_c(avt_pr[i], 134 + set_vslsx, 331 + set_vslsy);
                    if (onflg == i + 500) {
                        ctx.globalCompositeOperation = "lighter";
                        spt_t3(12, vslsx, vslsy + sty);
                        ctx.globalCompositeOperation = "source-over"
                    }
                };
                vslsx += 200;
                if (vslsx > 430) {
                    vslsx = 26;
                    vslsy += 270
                }
            };
            spt_t3(11, 556, 12);
            if (onflg == 1) {
                ctx.globalCompositeOperation = "lighter";
                spt_t3(11, 556, 12);
                ctx.globalCompositeOperation = "source-over"
            };
            ttl_coin();
            slwh = -2852 + wh / ltl;
            if (shop_dlg == 1) {
                d_box("#000", 0, 0, ww / ltl, wh / ltl, .7);
                var cnt_y = wh / ltl / 2 - (300 / 2);
                d_box("#d2d2d2", 90, 0 + cnt_y, 460, 60, 1);
                d_box("#eeeeee", 90, 58 + cnt_y, 460, 197, 1);
                ctx.fillStyle = "#000";
                ctx.font = (20 * ltl) + "px sans-serif";
                stset_c("Are you sure you want to buy this jersey?", 320, 34 + cnt_y);
                spt_t1_s(72, 234, 81 + cnt_y, .75);
                ctx.fillStyle = "#000";
                ctx.font = "bold " + (48 * ltl) + "px sans-serif";
                stset_r(avt_pr[st_my_sla], 403, 126 + cnt_y);
                d_box("#569370", 330, 220 + cnt_y, 190, 6, 1);
                if (onflg != 21) {
                    d_box("#51bd7f", 330, 165 + cnt_y, 190, 58, 1)
                } else {
                    d_box("#62da95", 330, 165 + cnt_y, 190, 58, 1)
                };
                ctx.fillStyle = "#fff";
                ctx.font = "bold " + (24 * ltl) + "px sans-serif";
                stset_c("YES", 425, 203 + cnt_y);
                d_box("#9d5451", 120, 220 + cnt_y, 190, 6, 1);
                if (onflg != 22) {
                    d_box("#da605b", 120, 165 + cnt_y, 190, 58, 1)
                } else {;
                    d_box("#f47570", 120, 165 + cnt_y, 190, 58, 1)
                };
                ctx.fillStyle = "#fff";
                ctx.font = "bold " + (24 * ltl) + "px sans-serif";
                stset_c("CANCEL", 215, 203 + cnt_y)
            };
            break;
        case 28:
            bk_scr();
            d_box("#000", 0, 0, ww / ltl, wh / ltl, .3);
            ldng_ct++;
            if (ldng_ct > 16) {
                lding2()
            };
            break;
        default:
    };
    if (shon == 1) {
        ctx.restore()
    }
};

function btch_anm(cnt_y) {
    switch (hd_tg_am) {
        case 0:
            var start_v = 0;
            var end_v = 1.8;
            var emt_sz = move_set(2, hd_tg_at, start_v, end_v, 1);
            spt_t3_s_c(26, 452 + 18, 201 + 18 + cnt_y, emt_sz);
            hd_tg_at += .1;
            if (hd_tg_at > 1) {
                hd_tg_at = 0;
                hd_tg_am = 1
            };
            break;
        case 1:
            var start_v = 1.8;
            var end_v = 1;
            var emt_sz = move_set(1, hd_tg_at, start_v, end_v, 1);
            spt_t3_s_c(26, 452 + 18, 201 + 18 + cnt_y, emt_sz);
            hd_tg_at += .1;
            if (hd_tg_at > 1) {
                hd_tg_at = 1
            };
            hd_tg_tm++;
            if (hd_tg_tm > 80) {
                hd_tg_tm = 0;
                hd_tg_at = 0;
                hd_tg_am = 2
            };
            break;
        case 2:
            var start_v = 1;
            var end_v = 1.4;
            var emt_sz = move_set(1, hd_tg_at, start_v, end_v, 1);
            spt_t3_s_c(26, 452 + 18, 201 + 18 + cnt_y, emt_sz);
            hd_tg_at += .075;
            if (hd_tg_at > 1) {
                hd_tg_at = 0;
                hd_tg_am = 3
            };
            break;
        case 3:
            var start_v = 1.4;
            var end_v = 1;
            var emt_sz = move_set(2, hd_tg_at, start_v, end_v, 1);
            spt_t3_s_c(26, 452 + 18, 201 + 18 + cnt_y, emt_sz);
            hd_tg_at += .075;
            if (hd_tg_at > 1) {
                hd_tg_at = 1;
                hd_tg_am = 1
            };
            break;
        default:
    }
};

function stset_r(inptxt, s_stx, s_sty) {
    var txsn = ctx.measureText(inptxt);
    ctx.fillText(inptxt, (s_stx * ltl) - txsn.width, s_sty * ltl)
};

function stset_c(inptxt, s_stx, s_sty) {
    var txsn = ctx.measureText(inptxt);
    ctx.fillText(inptxt, (s_stx * ltl) - txsn.width / 2, s_sty * ltl)
};

function stset_l(inptxt, s_stx, s_sty) {
    ctx.fillText(inptxt, s_stx * ltl, s_sty * ltl)
};

function tchlx(tchx) {
    return tchx
};

function tchly(tchy) {
    return tchy
};

function tchlx2(tchx) {
    return (tchx / ltl | 0)
};

function tchly2(tchy) {
    return (tchy / ltl | 0)
};

function btht(ctchx, ctchy, bh_x1, bh_y1, bh_x2, bh_y2, bti) {
    if (ctchx > bh_x1 && ctchx < bh_x2 && ctchy > bh_y1 && ctchy < bh_y2) {
        onflg = bti;
        unflg = bti;
        uarx1 = bh_x1 - 10;
        uary1 = bh_y1 - 10;
        uarx2 = bh_x2 + 10;
        uary2 = bh_y2 + 10;
        btn_snd()
    }
};

function btht_box(ctchx, ctchy, bh_x1, bh_y1, bh_x2, bh_y2, bti) {
    bh_x1 *= ltl;
    bh_y1 *= ltl;
    bh_x2 *= ltl;
    bh_y2 *= ltl;
    if (ctchx > bh_x1 && ctchx < bh_x2 + bh_x1 && ctchy > bh_y1 && ctchy < bh_y2 + bh_y1) {
        onflg = bti;
        unflg = bti;
        uarx1 = bh_x1 - 10;
        uary1 = bh_y1 - 10;
        uarx2 = bh_x2 + 10 + bh_x1;
        uary2 = bh_y2 + 10 + bh_y1;
        btn_snd()
    }
};

function btn_snd() {
    sndf(3, .05)
};

function btht2(ctchx, ctchy, bh_x1, bh_y1, bh_x2, bh_y2, bti, yhb) {
    btht(ctchx, ctchy, bh_x1 - yhb, bh_y1 - yhb, bh_x1 + bh_x2 + yhb, bh_y1 + bh_y2 + yhb, bti)
};

function btht_mv(ctchx, ctchy) {
    if (ctchx > uarx1 && ctchx < uarx2 && ctchy > uary1 && ctchy < uary2) {
        onflg = unflg
    } else {
        onflg = -99
    }
};

function pdo1(tchx, tchy, tci) {
    var ctchx = tchlx(tchx);
    var ctchy = tchly(tchy);
    switch (s) {
        case 80:
            break;
        case 1:
            var ctchx = tchlx(tchx);
            var ctchy = tchly(tchy);
            var tg = tc_f["c" + tci];
            tp = 1;
            pg_bl_kp = 0;
            st_tcx = ctchx;
            st_tcy = ctchy;
            st_mcx = -1;
            st_mcy = -1;
            if (cont_anm > 0) {
                var cnt_y = wh / ltl / 2 - 230;
                var udr_y = wh / ltl - 250;
                btht_box(ctchx, ctchy, 153, -50 + cnt_y, 334, 310, 1);
                btht_box(ctchx, ctchy, 153, -10 + udr_y, 334, 122, 2);
                if (cont_tim_stp == 1) {
                    btht_box(ctchx, ctchy, 153, 130 + udr_y, 334, 200, 3)
                }
            };
            if (trn_stg == 0 && b_s == 0 && ctchx < 150 && ctchy < 170) {
                sgl_adi2();
                btn_snd();
                if (aft_gldt_ld >= aft_gldt_mx) {
                    to_s2()
                } else {
                    menu_skip = 1
                };
                if (fchk) {
                    console.log("currentButtonName: Skip");
                    // SAMAL.logEvent("do_button_push", 0, {
                    //     "currentButtonName": "Skip"
                    // })
                }
            };
            break;
        case 2:
            if (boost_shop_dlg != 0) {
                var cnt_y = wh / ltl / 2 - (300 / 2);
                btht_box(ctchx, ctchy, 120 - 10, 165 + cnt_y - 10, 190 + 20, 58 + 20, 22);
                btht_box(ctchx, ctchy, 330 - 10, 165 + cnt_y - 10, 190 + 20, 58 + 20, 21)
            } else {
                if (dly_alt == 0 && sys_wt_ct == 0) {
                    if (scr_mode == 0) {
                        var cnt_y = wh / ltl / 2 - 304;
                        btht_box(ctchx, ctchy, 160, 204 + cnt_y, 320, 110, 1);
                        btht_box(ctchx, ctchy, 19, 331 + cnt_y, 112, 160, 2);
                        if (spsv_bk > 0) {
                            if (boost_buy == 0) {
                                btht_box(ctchx, ctchy, 152, 331 + cnt_y, 112, 160, 3)
                            };
                            if (my_coin >= 50 && boost_3p == 0) {
                                btht_box(ctchx, ctchy, 264, 331 + cnt_y, 112, 160, 104)
                            };
                            if (my_coin >= 100 && boost_dk == 0) {
                                btht_box(ctchx, ctchy, 376, 331 + cnt_y, 112, 160, 105)
                            }
                        };
                        if (bns_tim == 0 && (fb_ad_v2 == 1) && spsv_bk == 2) {
                            btht_box(ctchx, ctchy, 509, 331 + cnt_y, 112, 160, 4)
                        };
                        btht_box(ctchx, ctchy, 220, 496 + cnt_y, 200, 130, 5);
                        btht_box(ctchx, ctchy, 501, 496 + cnt_y, 125, 130, 6);
                        if (sht_ct_ok == 1) {
                            btht_box(ctchx, ctchy, 13, 496 + cnt_y, 125, 130, 7)
                        }
                    } else {
                        var cnt_y = wh / ltl / 2 - 275;
                        btht_box(ctchx, ctchy, 160, 204 + cnt_y, 320, 110, 1);
                        btht_box(ctchx, ctchy, 70, 320 + cnt_y, 88, 110, 2);
                        if (spsv_bk > 0) {
                            if (boost_buy == 0) {
                                btht_box(ctchx, ctchy, 190, 320 + cnt_y, 88, 110, 3)
                            };
                            if (my_coin >= 50 && boost_3p == 0) {
                                btht_box(ctchx, ctchy, 278, 320 + cnt_y, 88, 110, 104)
                            };
                            if (my_coin >= 100 && boost_dk == 0) {
                                btht_box(ctchx, ctchy, 366, 320 + cnt_y, 88, 110, 105)
                            }
                        };
                        if (bns_tim == 0 && (fb_ad_v2 == 1) && spsv_bk == 2) {
                            btht_box(ctchx, ctchy, 486, 320 + cnt_y, 88, 110, 4)
                        };
                        btht_box(ctchx, ctchy, 150, 440 + cnt_y, 340, 90, 5);
                        btht_box(ctchx, ctchy, 491, 440 + cnt_y, 125, 90, 6);
                        if (sht_ct_ok == 1) {
                            btht_box(ctchx, ctchy, 24, 440 + cnt_y, 125, 90, 7)
                        }
                    }
                } else if (dly_alt == 1) {
                    var cnt_y = wh / ltl / 2 - (600 / 2);
                    btht_box(ctchx, ctchy, 513 - 20, -20 + cnt_y, 72 + 40, 72 + 40, 31);
                    btht_box(ctchx, ctchy, 162 - 30, 382 + cnt_y - 30, 314 + 60, 102 + 60, 32)
                };
                if (swgm_l == 1 && sys_wt_ct == 0) {
                    var ctchx = tchlx2(tchx);
                    var ctchy = tchly2(tchy);
                    var yywh = 15;
                    for (var i = 0; i < swgm_list.length; i++) {
                        var swgml_x = 40 + i * 116;
                        var swgml_y = wh / ltl - 121;
                        btht(ctchx, ctchy, swgml_x - yywh, swgml_y - yywh, swgml_x + 96 + yywh, swgml_y + 96 + yywh, 200 + i)
                    };
                    if (onflg >= 200 && onflg <= 205) {
                        var st_swgm_id = swgm_list[onflg - 200].appId;
                        o_d_reci[onflg - 200].execAction(function(resultFlag) {
                            sys_wt_ct = 0
                        });
                        sys_wt_ct = 1;
                        console.log("currentButtonName: SwitchGame");
                        // SAMAL.logEvent("do_button_push", 0, {
                        //     "currentButtonName": "SwitchGame"
                        // })
                    }
                }
            };
            break;
        case 27:
            lst_tx = tchx;
            lst_ty = tchy;
            lst_fl = 0;
            var ctchx = tchlx(tchx);
            var ctchy = tchly(tchy);
            onflg = -99;
            if (shop_dlg == 0) {
                if (onflg != 5) {
                    scr_sn_sl = 1;
                    var vslsx = 26;
                    var vslsy = 96;
                    for (var i = 0; i < avt_shp_max; i++) {
                        if (st_my_avt != i && avt_shp_max >= i && (avt_pr[i] <= my_coin || avt_gt[i] == 1)) {
                            btht_l(ctchx / ltl, ctchy / ltl, 0, vslsx, vslsy + aslwy, 188, 262, i + 500)
                        };
                        vslsx += 200;
                        if (vslsx > 430) {
                            vslsx = 26;
                            vslsy += 270
                        }
                    };
                    tctim = +new Date();
                    slty = tchy;
                    slrk = 1
                } else {
                    scr_sn_sl = 0
                };
                btht_box(ctchx, ctchy, 546, 0, 100, 100, 1)
            } else {;
                var cnt_y = wh / ltl / 2 - (300 / 2);
                btht_box(ctchx, ctchy, 120 - 10, 165 + cnt_y - 10, 190 + 20, 58 + 20, 22);
                btht_box(ctchx, ctchy, 330 - 10, 165 + cnt_y - 10, 190 + 20, 58 + 20, 21)
            };
            break;
        default:
    }
};

function atk_set(i, sni) {
    if (sht_blk == 0) {
        var tg = bp_f["c" + sni];
        var blk_aft_d = 0;
        if (sht_blk > 0 && i == epg.i) {
            blk_aft_d = 1
        };
        if (tg && blk_aft_d == 0) {
            tg.act_p = i;
            tg.f_pks = pose_set[i].f_pks;
            tg.f_spd = pose_set[i].f_spd;
            tg.f_aft = pose_set[i].f_aft;
            tg.s_b = pose_set[i].s_b;
            if (tg.act_t == 2) {
                tg.s_b = 1
            };
            tg.e_b = pose_set[i].e_b;
            tg.e_idl = pose_set[i].e_idl;
            tg.act_t = 2;
            tg.act_l = 1;
            tg.act[2].stop();
            tg.act[2] = tg.mxr.clipAction(animations[anim_name(animations, pose_set[i].nm)]);
            tg.act[2].play();
            tg.act[2].time = 0;
            tg.act[2].setLoop(THREE.LoopOnce);
            tg.act[2].clampWhenFinished = true;
            if (tg.s_b == 1) {
                tg.act_l = 1;
                tg.act[0].setEffectiveWeight(0);
                tg.act[1].setEffectiveWeight(0);
                tg.act[2].setEffectiveWeight(1);
                tg.act[3].setEffectiveWeight(0);
                tg.idl_lt = 1;
                tg.run_lt = 0
            } else {
                tg.act_l = 0;
                tg.act[2].setEffectiveWeight(0)
            }
        }
    }
};

function st_chr(sni, x, y, st_nm, st_pw, st_r, st_hp, st_dvid, st_rank, st_tm, p_typ, gt_scr, tgx, tgz) {
    if (st_nm.charCodeAt(0) == 8203 || st_nm.charCodeAt(0) == 12644 || st_nm == "．") {
        st_nm = "guest"
    };
    p_typ = Math.floor(p_typ);
    if (st_tm) {} else {
        st_tm = 0
    };
    if (st_rank) {
        if (st_rank > 99) {
            st_rank = 0
        } else if (st_rank > -1) {} else {
            st_rank = 0
        }
    } else {
        st_rank = 0
    };
    bp_f["c" + sni] = {
        mms: THREE.SkeletonUtils.clone(mms),
        shd: new THREE.Mesh(bd_geometry, bd_material),
        dmg_c: 0,
        act_t: 0,
        act_l: 0,
        run_lt: 0,
        idl_lt: 1,
        thr: 0,
        ux: x,
        uy: y,
        nm: st_nm,
        x: x,
        z: y,
        i: sni,
        l: 1,
        tgx: tgx,
        tgz: tgz,
        sx: 0,
        sz: 0,
        sp: 0,
        dsp: .5,
        msp: 1.3,
        m_msp: 1.3,
        rct: 0,
        s_b: 0,
        e_b: 0,
        fc: 0,
        e_idl: 1,
        pst: 0,
        act_p: -1,
        tnt: 0,
        dsh_lt: 1,
        st_mk: -1,
        phc: 0,
        on_st: 0
    };
    var tg = bp_f["c" + sni];
    scene.add(tg.mms);
    var chpt = tg.mms.getObjectByName("body");
    var chpt2 = mms.getObjectByName("body");
    chpt.material = chpt2.material.clone();
    var rnd_siz = 5 * 1.5 * .9;
    tg.mms.scale.set(rnd_siz, rnd_siz, rnd_siz);
    var tgi = tg.i;
    if (tgi > 5) {
        tgi -= 5
    };
    if (tgi > 1) {
        var scl_siz = 1;
        var scl_siz_s = 1;
        switch (tgi) {
            case 2:
                scl_siz = 1.02;
                scl_siz_s = 1;
                break;
            case 3:
                scl_siz = 1.058;
                scl_siz_s = 1.01;
                break;
            case 4:
                scl_siz = 1.084;
                scl_siz_s = 1.05;
                break;
            case 5:
                scl_siz = 1.11;
                scl_siz_s = 1.08;
                break;
            default:
        };
        rnd_siz *= scl_siz;
        tg.mms.scale.set(rnd_siz, rnd_siz, rnd_siz);
        var chpt = tg.mms.getObjectByName("Armature_head");
        var rvs_scl = 1 / scl_siz;
        chpt.scale.set(rvs_scl, rvs_scl, rvs_scl);
        var chpt = tg.mms.getObjectByName("Armature_Shoulder_L");
        var rvs_scl = scl_siz_s;
        chpt.scale.set(rvs_scl, rvs_scl, rvs_scl);
        var chpt = tg.mms.getObjectByName("Armature_Shoulder_R");
        var rvs_scl = scl_siz_s;
        chpt.scale.set(rvs_scl, rvs_scl, rvs_scl)
    };
    tg.x = x;
    tg.z = y;
    tg.mms.position.set(tg.x, 0, tg.z);
    tg.mms.visible = false;
    tg.shd.visible = true;
    tg.shd.rotation.x = -pi2;
    tg.shd.position.set(x, .1, y);
    tg.shd.scale.set(20, 20, 1);
    scene.add(tg.shd);
    var Rx = tg.tgx - tg.mms.position.x;
    var Ry = tg.tgz - tg.mms.position.z;
    var Rr = Math.atan2(Ry, Rx);
    var t_cr = -Rr + p2;
    tg.thr = t_cr;
    tg.mms.rotation.y = t_cr;
    if (sni < 6) {
        chr_set(tg, 0)
    } else {
        chr_set(tg, 1)
    }
};

function chr_set(tg, p_typ) {
    var chpt = tg.mms.getObjectByName("body");
    var tr_s_sh = shoes[tg.i];
    var tr_s_fs = sk_fc[tg.i];
    var tr_s_yn = unfm1;
    var tr_s_nm = tg.i;
    var pl_or_cp = 0;
    if (tg.i > 5) {
        tr_s_nm = tg.i - 5;
        tr_s_yn = unfm2;
        pl_or_cp = 1
    };
    tg.nm = tr_s_nm;
    chpt.material.map = set_chr_txtr(tr_s_sh, tr_s_fs, tr_s_yn, tr_s_nm, pl_or_cp);
    chpt.material.map.encoding = 3001;
    chpt.material.map.flipY = false;
    chpt.material.map.magFilter = THREE.NearestFilter;
    tg.f_pks = 0;
    tg.f_spd = 0;
    tg.f_aft = 0;
    var idl_ps = "IDLE_normal";
    var idl_ps2 = "RUN_dash";
    var idl_ps3 = "WALK_back";
    if (p_typ == 1) {
        idl_ps = "IDLE_normal";
        idl_ps2 = "RUN_dash";
        idl_ps3 = "WALK_back"
    };
    tg.mxr = new THREE.AnimationMixer(tg.mms);
    tg.act = new Array(0, 0, 0, 0, 0, 0);
    tg.act[0] = tg.mxr.clipAction(animations[anim_name(animations, idl_ps)]);
    tg.act[1] = tg.mxr.clipAction(animations[anim_name(animations, idl_ps2)]);
    tg.act[2] = tg.mxr.clipAction(animations[anim_name(animations, "DRIBBLE_V_right")]);
    tg.act[3] = tg.mxr.clipAction(animations[anim_name(animations, idl_ps3)]);
    tg.act[0].play();
    tg.act[1].play();
    tg.act[2].stop();
    tg.act[3].play();
    tg.act[0].setEffectiveWeight(1);
    tg.act[1].setEffectiveWeight(0);
    tg.act[2].setEffectiveWeight(0);
    tg.act[3].setEffectiveWeight(0);
    tg.act[2].setLoop(THREE.LoopOnce);
    tg.act[2].clampWhenFinished = true
};

function anim_name(a_ary, d_nm) {
    for (var i = 0; i < a_ary.length; i++) {
        if (animations[i].name == d_nm) {
            break
        }
    };
    if (a_ary.length - 1 < i) {
        i = 0
    };
    return i
};

function anim_name_net(a_ary, d_nm) {
    for (var i = 0; i < a_ary.length; i++) {
        if (animations_net[i].name == d_nm) {
            break
        }
    };
    if (a_ary.length - 1 < i) {
        i = 0
    };
    return i
};

function srt(sa, sb) {
    sa.sort(function(a, b) {
        return ((a[sb] - b[sb]))
    });
    return (sa)
};

function tev1(event) {
    if (fsndpl == 0) {
        sndf(3, 0);
        fsndpl = 1
    };
    var tchx;
    var tchy;
    var i = event.touches.length - 1;
    tch_l = event.touches.length;
    tc_f["c" + tc_fi] = {
        i: event.changedTouches[0].identifier,
        f: tc_fi,
        s: -1,
        l: 1
    };
    tchx = (event.touches[i].pageX / wdpr | 0);
    tchy = (event.touches[i].pageY / wdpr | 0);
    pdo1(tchx, tchy, tc_fi);
    tc_fi++;
    event.preventDefault()
};

function tev2(event) {
    if (fsndpl == 0) {
        sndf(3, 0);
        fsndpl = 1
    };
    var tchx;
    var tchy;
    tch_l = event.touches.length;
    if (tc_fi > 0) {
        var tc_fc = 0;
        for (var pi in tc_f) {
            var tg = tc_f[pi];
            if (tg.l == 1) {
                for (var i = 0; i < event.changedTouches.length; i++) {
                    if (tg.i == event.changedTouches[i].identifier) {
                        tchx = (event.changedTouches[i].pageX / wdpr | 0);
                        tchy = (event.changedTouches[i].pageY / wdpr | 0);
                        pdo2(tchx, tchy, tg.f)
                    }
                };
                tc_fc++
            }
        };
        if (tc_fc == 0) {
            tc_f = {};
            tc_fi = 0
        }
    };
    if (event.touches.length < 1) {
        tc_f = {};
        tc_fi = 0
    };
    event.preventDefault()
};

function tev3(event) {
    var tchx;
    var tchy;
    if (tc_fi > 0) {
        var tc_fc = 0;
        for (var pi in tc_f) {
            var tg = tc_f[pi];
            var tchk = 0;
            if (tg.l == 1) {
                for (var i = 0; i < event.touches.length; i++) {
                    if (tg.i == event.touches[i].identifier) {
                        tchx = (event.touches[i].pageX / wdpr | 0);
                        tchy = (event.touches[i].pageY / wdpr | 0);
                        pdo3(tchx, tchy, tg.f);
                        tchk = 1
                    }
                };
                if (tchk == 0) {
                    tg.l = 0;
                    delete tc_f["c" + tg.f]
                };
                tc_fc++
            }
        };
        if (tc_fc == 0) {
            tc_f = {};
            tc_fi = 0
        }
    };
    event.preventDefault()
};

function gmst_f() {
    stt_ac();
    set_flr_txtr(0);
    cs = 0;
    px = -550;
    pz = -ring * 2 + 30;
    st_chr(1, Math.random() * 160 - 80, Math.random() * -120, "", 0, "", 0, 0, 0, 0, 6, 0, 109, 149);
    st_chr(2, Math.random() * 160 - 80, Math.random() * -120, "", 0, "", 0, 0, 0, 0, 6, 0, -109, 149);
    st_chr(3, Math.random() * 160 - 80, Math.random() * -120, "", 0, "", 0, 0, 0, 0, 6, 0, 53, 78);
    st_chr(4, Math.random() * 160 - 80, Math.random() * -120, "", 0, "", 0, 0, 0, 0, 6, 0, 0, 65);
    st_chr(5, Math.random() * 160 - 80, Math.random() * -120, "", 0, "", 0, 0, 0, 0, 6, 0, -53, 78);
    rn_pst = new Array(0, 0, 102, 169, 73, 78, 0, 55, -73, 78, -102, 169, -33, 150, 33, 150, 40, 25, -40, 25);
    st_chr(6, 0, 161, "", 0, "", 0, 0, 0, 0, 6, 0, 0, 161);
    st_chr(7, 0, 161, "", 0, "", 0, 0, 0, 0, 6, 0, -70, 176);
    st_chr(8, 0, 161, "", 0, "", 0, 0, 0, 0, 6, 0, 70, 176);
    st_chr(9, 0, 161, "", 0, "", 0, 0, 0, 0, 6, 0, -53, 128);
    st_chr(10, 0, 161, "", 0, "", 0, 0, 0, 0, 6, 0, 53, 128);
    mxp = 10;
    trn_stg = 0;
    fm_set_fst()
};

function stt_ac() {
    if (fchk) {
        // fb_spsv_ini();
        // SAMAL.startGameAsync().then(function() {});
        adj_chk_mode = 1;
        s = 1
    } else {
        adj_chk_mode = 1;
        s = 1
    }
};

function pdo2(tchx, tchy, tci) {
    switch (s) {
        case 27:
            var ntim = +new Date();
            if (onflg == -99) {} else if (shop_dlg == 1) {
                if (onflg == 22) {
                    shop_dlg = 0
                } else if (onflg == 21) {
                    st_my_avt = st_my_sla;
                    if (fchk) {
                      
                        bns_flg = 0;
                        shop_buy(st_my_sla + 2000001, 0)
                    };
                    s = 28
                }
            } else if (onflg >= 500) {
                st_my_sla = onflg - 500;
                if (avt_gt[st_my_sla] == 1) {
                    st_my_avt = onflg - 500;
                    onflg = -99;
                    s = 2;
                    if (fchk) {
                     
                        avatar_set(st_my_avt + 2000001)
                    }
                } else {
                    shop_dlg = 1
                }
            } else {
                switch (onflg) {
                    case 1:
                        s = 2;
                        break;
                    default:
                }
            };
            onflg = -99;
            slty = -1;
            break;
        case 2:
            if (onflg >= 200 && onflg <= 205) {
                onflg = -99
            };
            switch (onflg) {
                case 21:
                    if (boost_shop_dlg == 1) {
                        boost_3p = 1;
                        my_coin -= 50;
                        my_coin_a -= my_coin;
                        if (fchk) {
                          
                            boost_buy = 1;
                            shop_buy(8000001, 0);
                            console.log("currentButtonName：Boost 3pt_yes");
                            
                        }
                    } else {
                        boost_dk = 1;
                        my_coin -= 100;
                        my_coin_a -= my_coin;
                        if (fchk) {
                          
                            boost_buy = 2;
                            shop_buy(8000002, 0);
                            console.log("currentButtonName: Boost Dunk_yes");
                           
                        }
                    };
                    boost_shop_dlg = 0;
                    pt_f = {};
                    pt_fi = 0;
                    ptc_chx = 0;
                    ptc_chy = 0;
                    pt_ui("32/100/0/0#1#" + "320#300#500#500#100#0#0#0#0|" + "20#2#0#0#10#10#0#0#0#0#0|");
                    pt_ui("32/100/0/0#1#" + "320#300#650#500#0#0#0#0#0|" + "4#0#0#0#500#500#0#0#0#0#0|" + "1#0#0#0#500#500#50#0#0#0#0|" + "20#2#0#0#10#10#0#0#0#0#0|");
                    for (var ptc_i = 0; ptc_i < 2; ptc_i++) {
                        pt_ui("60/110/0/0#1#" + "320#300#150#150#100#0#0#0#600|" + "55#2#320#300#20#20#0#0#0#0#0#A|");
                        pt_ui("60/110/0/0#1#" + "320#300#150#150#100#0#0#0#600|" + "20#2#320#300#20#20#0#0#0#0#0#A|");
                        pt_ui("61/110/0/0#1#" + "320#300#150#150#100#0#0#0#600|" + "55#2#320#300#20#20#0#0#0#0#0#A|");
                        pt_ui("61/110/0/0#1#" + "320#300#150#150#100#0#0#0#600|" + "12#2#320#300#20#20#0#0#0#0#0#A|");
                        pt_ui("34/110/0/0#1#" + "320#300#150#150#100#0#0#0#600|" + "40#2#320#300#20#20#0#0#0#0#0#A|");
                        pt_ui("34/110/0/0#1#" + "320#300#150#150#100#0#0#0#600|" + "20#2#320#300#20#20#0#0#0#0#0#A|")
                    };
                    uni_buy_anm = 1;
                    sndf(14, .06);
                    break;
                case 22:
                    if (boost_shop_dlg == 1) {
                        if (fchk) {
                            console.log("currentButtonName :Boost 3pt_cancel");
                            // SAMAL.logEvent("do_button_push", 0, {
                            //     "currentButtonName": "Boost 3pt_cancel"
                            // })
                        }
                    } else {
                        if (fchk) {
                            console.log("currentButtonName :Boost Dunk_cancel");
                            // SAMAL.logEvent("do_button_push", 0, {
                            //     "currentButtonName": "Boost Dunk_cancel"
                            // })
                        }
                    };
                    boost_shop_dlg = 0;
                    break;
                case 104:
                    boost_shop_dlg = 1;
                    break;
                case 105:
                    boost_shop_dlg = 2;
                    break;
                case 31:
                    dly_alt = 0;
                    break;
                case 32:
                    if (fchk) {;
                        show_vtr_mode = 2;
                        if (fb_ad_v2 == 1) {
                            show_vtr2 = 0;
                            showRewardedVideo2()
                        } else {
                            er_anm_alt()
                        }
                    } else {
                        er_anm_alt()
                    };
                    console.log("currentButtonName: Bonus");
                    // SAMAL.logEvent("do_button_push", 0, {
                    //     "currentButtonName": "Bonus"
                    // });
                    break;
                case 1:
                    // sys_wt_ct = 1;
                    // if (is_frd == 0) {
                    //     cstm_scr = ttl_sht_scr;
                    //     vs_ply_wth_frd = 1;
                    //     nplr_cll2()
                    // } else {
                    //     cstm_scr = ttl_sht_scr;
                    //     frd_ctxt(vs_id)
                    // };
                    console.log("currentButtonName: VS_Match");
                    // SAMAL.logEvent("do_button_push", 0, {
                    //     "currentButtonName": "VS_Match"
                    // });
                    break;
                case 2:
                    vs_ply_wth_frd = 0;
                    sys_wt_ct = 1;
                    nplr_cll2();
                    break;
                case 3:
                    uni_buy_anm = 0;
                    slovrst();
                    s = 27;
                    console.log("currentButtonName: Shop");
                    // SAMAL.logEvent("do_button_push", 0, {
                    //     "currentButtonName": "Shop"
                    // });
                    break;
                case 4:
                    uni_buy_anm = 0;
                    dly_alt = 1;
                    break;
                case 5:
                    if (fchk) {
                        if (fb_ad_i2 == 1 && (is_first == 0 || mtch_ct > 2)) {
                            rst_ad_e()
                        } else {
                            rst_ad_e()
                        }
                    } else {
                        rst_ad_e()
                    };
                    if (fchk) {
                        console.log("currentButtonName: Restart");
                        // SAMAL.logEvent("do_button_push", 0, {
                        //     "currentButtonName": "Restart"
                        // })
                    };
                    break;
                case 6:
                    share_send();
                    break;
                case 7:
                    console.log("currentButtonName: Shortcut");
                    // SAMAL.checkAndCreateShortcutAsync().then(function(obj) {}).catch(function(obj) {});
                    // SAMAL.logEvent("do_button_push", 0, {
                    //     "currentButtonName": "Shortcut"
                    // });
                    break;
                default:
            };
            onflg_rst();
            break;
        case 1:
            tp = 0;
            var ctchx = tchlx(tchx);
            var ctchy = tchly(tchy);
            st_mcx = ctchx;
            st_mcy = ctchy;
            var Rx = st_mcx - st_tcx;
            var Ry = st_mcy - st_tcy;
            var Rds = Math.sqrt(Math.pow(Rx, 2) + Math.pow(Ry, 2));
            if (b_s == 0 && dnk_sht == 0 && sht_qlk_tm == 0) {
                var scr_pos = new THREE.Vector3();
                scr_pos.copy(pg.mms.position);
                scr_pos.y += pg.mms.scale.x * 2.6;
                scr_pos.project(camera);
                var pg_lx = (width / 2 * (scr_pos.x + 1)) * lll;
                var pg_ly = (height / 2 * (-scr_pos.y + 1)) * lll;
                var Rx = pg_lx - st_mcx;
                var Ry = pg_ly - st_mcy;
                var lin_Rr = Math.atan2(Ry, Rx);
                var lin_i = -1;
                var lin_hr = 99;
                var scr_pos = new THREE.Vector3();
                scr_pos.x = gl_x;
                scr_pos.y = gl_y;
                scr_pos.z = gl_z;
                scr_pos.project(camera);
                var st_txt_x = (width / 2 * (scr_pos.x + 1)) * lll;
                var st_txt_y = (height / 2 * (-scr_pos.y + 1)) * lll;
                var Rx = pg_lx - st_txt_x;
                var Ry = pg_ly - st_txt_y;
                var Rr = Math.atan2(Ry, Rx);
                var mch = Rr - lin_Rr;
                if (Math.abs(mch) >= m_pi) {
                    if (mch <= 0) {
                        mch += m_pi2
                    } else {
                        mch -= m_pi2
                    }
                };
                var sht_ok = 0;
                if (lin_hr > Math.abs(mch) && Math.abs(mch) < 1) {
                    sht_ok = 1
                };
                bll_bnd = 0;
                if (Rds < 90 * ltl || sht_ok == 0) {
                    var tg;
                    var p_Rds = 9999999;
                    var p_i = -1;
                    for (var i = 1; i < 6; i++) {
                        tg = bp_f["c" + i];
                        if (tg != pg && tg.tgz > 0 && tg.z > -250) {
                            var scr_pos = new THREE.Vector3();
                            scr_pos.copy(tg.mms.position);
                            scr_pos.y += tg.mms.scale.x * 2.6;
                            scr_pos.project(camera);
                            var st_txt_x = (width / 2 * (scr_pos.x + 1)) * lll;
                            var st_txt_y = (height / 2 * (-scr_pos.y + 1)) * lll;
                            if (st_txt_x < 0) {
                                st_txt_x = 0
                            };
                            if (st_txt_x > ww) {
                                st_txt_x = ww
                            };
                            var Rx1 = st_txt_x - st_mcx;
                            var Ry1 = st_txt_y - st_mcy;
                            var Rds1 = Math.sqrt(Math.pow(Rx1, 2) + Math.pow(Ry1, 2));
                            if (p_Rds > Rds1) {
                                if ((pg.pst == 1 && tg.pst == 5) || (pg.pst == 5 && tg.pst == 1)) {} else {
                                    p_Rds = Rds1;
                                    p_i = i;
                                    ps_tp_y = Ry1 / ltl / ltl
                                }
                            }
                        }
                    };
                    if (p_i != -1) {
                        var tg = bp_f["c" + p_i];
                        if (p_i != -1) {
                            if (trn_stg > 1) {
                                if (pg.pst == 3 && stt_tim > 100 && Math.random() > .5) {
                                    if (tg.pst == 2) {
                                        pst_frr(5, pg)
                                    } else if (tg.pst == 5) {
                                        pst_frr(1, pg)
                                    } else {
                                        pst_frr(pg.pst, pg)
                                    }
                                } else if (pg.z < 25) {}
                            };
                            th_set_i = p_i;
                            if (tg.s == 0 || trn_stg < 5) {
                                mtm_mve(tg, 1)
                            };
                            if (gd_anm_a == 1) {
                                gd_anm_a = .99;
                                fanc1 = 0;
                                fanc2 = 0
                            };
                            bsk_gd2 = 1;
                            pg_bl_kp = 0
                        };
                        lin_i = th_set_i;
                        tg = bp_f["c" + th_set_i];
                        sndf(13, .06);
                        if (tg.s == 1 || tg.s == 5) {
                            tg.s = 3
                        };
                        b_s = 1;
                        b_ti = lin_i;
                        by = 20;
                        bx = pg.x;
                        bz = pg.z;
                        var Rx = tg.tgx - bx;
                        var Ry = tg.tgz - bz;
                        var Rds = Math.sqrt(Math.pow(Rx, 2) + Math.pow(Ry, 2));
                        var Rr = Math.atan2(Ry, Rx);
                        if (ps_tp_y > -40) {
                            var Rd = Rds * 3;
                            if (Rd > 580) {
                                Rd = 580
                            };
                            if (Rd < 280) {
                                Rd = 280
                            }
                        } else {
                            var Rd = Rds * 2.8;
                            if (Rd > 580) {
                                Rd = 580
                            };
                            if (Rd < 240) {
                                Rd = 240
                            }
                        };
                        var s_bp_f = {};
                        var s_tg;
                        var i = tg.i;
                        s_bp_f["c" + i] = {
                            x: tg.x,
                            z: tg.z,
                            tgx: tg.tgx,
                            tgz: tg.tgz,
                            sx: tg.sx,
                            sz: tg.sz,
                            sp: tg.sp,
                            dsp: tg.dsp,
                            msp: tg.msp,
                            s: tg.s,
                            fc: tg.fc
                        };
                        s_tg = s_bp_f["c" + i];
                        var e_tg;
                        for (var i2 = 6; i2 < 11; i2++) {
                            e_tg = bp_f["c" + i2];
                            s_bp_f["c" + i2] = {
                                x: e_tg.x,
                                z: e_tg.z,
                                tgx: e_tg.tgx,
                                tgz: e_tg.tgz,
                                sx: e_tg.sx,
                                sz: e_tg.sz,
                                sp: e_tg.sp,
                                dsp: e_tg.dsp,
                                msp: e_tg.msp,
                                s: e_tg.s,
                                fc: e_tg.fc
                            }
                        };
                        var d_sch_b_tx = -1;
                        var d_sch_b_tz = -1;
                        var ec = 0;
                        var e = 0;
                        var c_by = by;
                        var c_b_j = b_j;
                        while (e == 0) {
                            mv_d(s_tg);
                            for (var i2 = 6; i2 < 11; i2++) {
                                e_tg = s_bp_f["c" + i2];
                                if (e_tg.z > -250) {
                                    mv_d(e_tg)
                                }
                            };
                            var Rx = s_tg.x - bx;
                            var Ry = s_tg.z - bz;
                            var Rr = Math.atan2(Ry, Rx);
                            var sch_b_tx = bx + Math.cos(Rr) * Rd * pss_lt[ec] / 100;
                            var sch_b_tz = bz + Math.sin(Rr) * Rd * pss_lt[ec] / 100;
                            var Rx = sch_b_tx - s_tg.x;
                            var Ry = sch_b_tz - s_tg.z;
                            var sch_Rds = Math.sqrt(Math.pow(Rx, 2) + Math.pow(Ry, 2));
                            if (sch_Rds <= 10) {;
                                d_sch_b_tx = s_tg.x;
                                d_sch_b_tz = s_tg.z;
                                e = 1
                            };
                            ec++;
                            if (ec > 100) {
                                e = 1
                            }
                        };
                        var Rx = s_tg.x - bx;
                        var Ry = s_tg.z - bz;
                        var Rr = Math.atan2(Ry, Rx);
                        var sch_Rds = Math.sqrt(Math.pow(Rx, 2) + Math.pow(Ry, 2));
                        b_j = .5 + sch_Rds / 240;
                        var d_Rds = 99999;
                        var d_i = 6;
                        var ctch_mn = bp_f["c" + b_ti];
                        d_sch_b_tx = ctch_mn.tgx;
                        d_sch_b_tz = ctch_mn.tgz;
                        for (var i = 6; i < 11; i++) {
                            e_tg = s_bp_f["c" + i];
                            var Rx = d_sch_b_tx - e_tg.x;
                            var Ry = d_sch_b_tz - e_tg.z;
                            var Rds = Math.sqrt(Math.pow(Rx, 2) + Math.pow(Ry, 2));
                            var Rx2 = gl_x - e_tg.x;
                            var Ry2 = gl_z - e_tg.z;
                            var Rds2 = Math.sqrt(Math.pow(Rx2, 2) + Math.pow(Ry2, 2));
                            var Rx3 = gl_x - d_sch_b_tx;
                            var Ry3 = gl_z - d_sch_b_tz;
                            var Rds3 = Math.sqrt(Math.pow(Rx3, 2) + Math.pow(Ry3, 2));
                            if (Rds2 > Rds3) {
                                Rds += 100
                            };
                            if (d_Rds > Rds) {
                                d_Rds = Rds;
                                d_i = i
                            }
                        };
                        var ctch_tg = s_bp_f["c" + b_ti];
                        if (trn_stg > 4) {
                            mrk_chg(d_i, ctch_tg.tgx, ctch_tg.tgz, ctch_tg)
                        } else {
                            epg = bp_f["c" + d_i]
                        };
                        if (ps_tp_y > -40) {
                            var ps_ec = ec - 8;
                            if (ps_ec < 0) {
                                ps_ec = 0
                            };
                            if (ps_ec > psj_lt.length - 1) {
                                ps_ec = psj_lt.length - 1
                            };
                            b_j = psj_lt[ps_ec]
                        } else {
                            var ps_ec = ec - 18;
                            if (ps_ec < 0) {
                                ps_ec = 0
                            };
                            if (ps_ec > psb_lt.length - 1) {
                                ps_ec = psb_lt.length - 1
                            };
                            b_j = psb_lt[ps_ec];
                            if (b_j < -6) {
                                b_j = -6
                            }
                        };
                        b_tx = bx + Math.cos(Rr) * Rd;
                        b_tz = bz + Math.sin(Rr) * Rd;
                        lp_act_set(pg, 1);
                        pg.msp = pg.m_msp;
                        var th_Rr1 = -pg.mms.rotation.y + pi2;
                        var th_Rx2 = b_tx - pg.x;
                        var th_Ry2 = b_tz - pg.z;
                        var th_Rr2 = Math.atan2(th_Ry2, th_Rx2);
                        var mch = th_Rr2 - th_Rr1;
                        if (Math.abs(mch) >= m_pi) {
                            if (mch <= 0) {
                                mch += m_pi2
                            } else {
                                mch -= m_pi2
                            }
                        };
                        if (Math.abs(mch) < .2) {
                            mch = pg.x - b_tx
                        };
                        if (pg.s == 0 || pg.s == 2) {
                            if (ps_tp_y > -40) {
                                if (mch > 0) {
                                    atk_set(2, pg.i)
                                } else {
                                    atk_set(3, pg.i)
                                }
                            } else {
                                if (mch > 0) {
                                    atk_set(15, pg.i)
                                } else {
                                    atk_set(16, pg.i)
                                }
                            }
                        } else {
                            if (mch > 0) {
                                atk_set(5, pg.i)
                            } else {
                                atk_set(6, pg.i)
                            }
                        };
                        by = 20;
                        pss_ct++;
                        lst_ps = pg.i;
                        var df_x = s_tg.x;
                        var df_z = s_tg.z;
                        pg = bp_f["c" + b_ti]
                    }
                } else {
                    sht_q = mch;
                    var Rx = gl_x - pg.mms.position.x;
                    var Ry = gl_z - pg.mms.position.z;
                    sht_r = Math.atan2(Ry, Rx);
                    pg_bl_kp = 0;
                    if (gd_anm_a == 1) {
                        gd_anm_a = .99;
                        fanc1 = 0;
                        fanc2 = 0
                    };
                    bsk_gd1 = 1;
                    th_set_i = 99;
                    var Rx = pg.x - epg.x;
                    var Ry = pg.z - epg.z;
                    var Rds = Math.sqrt(Math.pow(Rx, 2) + Math.pow(Ry, 2));
                    var Rx1 = pg.x - gl_x;
                    var Ry1 = pg.z - gl_z;
                    var Rds1 = Math.sqrt(Math.pow(Rx1, 2) + Math.pow(Ry1, 2));
                    var Rx2 = epg.x - gl_x;
                    var Ry2 = epg.z - gl_z;
                    var Rds2 = Math.sqrt(Math.pow(Rx2, 2) + Math.pow(Ry2, 2));
                    sht_def = Rds;
                    if (Rds2 > Rds1) {
                        sht_def = 99999
                    };
                    sht_tim_r = -pg.mms.rotation.y + pi2;
                    if (trn_stg == 0) {
                        fanc1 = 0
                    };
                    var ntm = +new Date();
                    sht_qlk_stp = ntm;
                    tg = pg;
                    var Rx = gl_x - tg.x;
                    var Ry = gl_z - tg.z;
                    var Rds = Math.sqrt(Math.pow(Rx, 2) + Math.pow(Ry, 2));
                    var mkr_df = pg.i - (epg.i - 5);
                    if ((pg.i == 5 || pg.i == 4 || pg.i == 3 || pg.i == 2) && Rds < 90 && (gl_fr_hnt(tg) == 1 || mkr_df > 2) && Math.abs(sht_q) < .25) {
                        sndf(8, .008);
                        lp_act_set(pg, 1);
                        var dnk_lng = 12;
                        if (pg.i == 3 || pg.i == 2) {
                            dnk_lst = 37;
                            atk_set(14, pg.i);
                            dnk_lng = 12
                        } else {
                            dnk_lst = 41;
                            atk_set(21, pg.i);
                            dnk_lng = 18
                        };
                        dnk_sht = 1;
                        var Rx = pg.x - gl_x;
                        var Ry = pg.z - gl_z;
                        var Rr = Math.atan2(Ry, Rx);
                        var Rd = dnk_lng;
                        tg.thr = -Rr - pi2;
                        tg.mms.rotation.y = tg.thr;
                        dnk_x = gl_x + Math.cos(Rr) * Rd;
                        dnk_z = gl_z + Math.sin(Rr) * Rd;
                        tg.tgx = dnk_x;
                        tg.tgz = dnk_z;
                        tg.s = 0;
                        tg.sx = 0;
                        tg.sz = 0;
                        gt_sht_scr = Math.round(100 - (Math.abs(sht_q)) * 150) + 1;
                        if (gt_sht_scr > 100) {
                            gt_sht_scr = 100
                        };
                        if (gt_sht_scr < 70) {
                            gt_sht_scr = 70
                        };
                        gt_sht_scr2 = 30;
                        sht_rr = sht_q
                    } else {
                        sndf(13, .08);
                        b_fst = 0;
                        b_gl = 0;
                        tg = pg;
                        var Rx = 0 - tg.mms.position.x;
                        var Ry = 175 - tg.mms.position.z;
                        var Rds = Math.sqrt(Math.pow(Rx, 2) + Math.pow(Ry, 2));
                        var Rr = Math.atan2(Ry, Rx);
                        var t_cr = -Rr + p2;
                        tg.thr = t_cr;
                        tg.mms.rotation.y = t_cr;
                        lp_act_set(pg, 3);
                        var Rx = gl_x - tg.mms.position.x;
                        var Ry = gl_z - tg.mms.position.z;
                        var Rds = Math.sqrt(Math.pow(Rx, 2) + Math.pow(Ry, 2));
                        if (thr_pnt_hnt(pg) == 0) {
                            if ((pg.s == 0 && Math.abs(tg.sx) + Math.abs(tg.sz) < .1) || (pg.pst != 7 && pg.pst != 6)) {
                                atk_set(0, pg.i);
                                sht_typ = 2;
                                pg.sx *= 1.0;
                                pg.sz *= 1.0;
                                pg.s = 0
                            } else {
                                atk_set(1, pg.i);
                                sht_typ = 1;
                                pg.sx *= 1.5;
                                pg.sz *= 1.5;
                                pg.s = 0
                            }
                        } else if (pg.s == 0 || Rds < 128 || trn_stg < 2 || stt_tim > 300 || pg.on_st == 1 || cont_flg == 1) {
                            atk_set(0, pg.i);
                            sht_typ = 0;
                            pg.sx *= .5;
                            pg.sz *= .5;
                            pg.s = 0
                        } else {
                            atk_set(0, pg.i);
                            sht_typ = 3;
                            pg.tgx = pg.mms.position.x;
                            pg.tgz = pg.mms.position.z;
                            ptc_chy = 0;
                            pt_ui("75/150/0/0#0#" + "320#240#200#200#0#0#0#0#0|" + "8#2#0#0#90#90#100#0#0#0#0|" + "3#2#0#0#108#108#100#0#0#0#0|" + "3#2#0#0#95#95#100#0#0#0#0|" + "3#2#0#0#100#100#100#0#0#0#0|" + "60#2#0#0#100#100#100#0#0#0#0|" + "20#5#0#0#100#100#0#0#0#0#0|")
                        };
                        b_c = 1;
                        b_s = 2;
                        var Rx = pg.x - epg.x;
                        var Ry = pg.z - epg.z;
                        var Rds = Math.sqrt(Math.pow(Rx, 2) + Math.pow(Ry, 2));
                        var Rx1 = pg.x - gl_x;
                        var Ry1 = pg.z - gl_z;
                        var Rds1 = Math.sqrt(Math.pow(Rx1, 2) + Math.pow(Ry1, 2));
                        var Rx2 = epg.x - gl_x;
                        var Ry2 = epg.z - gl_z;
                        var Rds2 = Math.sqrt(Math.pow(Rx2, 2) + Math.pow(Ry2, 2));
                        var blk_lng = 35 + blk_lv * 10;
                        if (sht_typ == 1) {
                            blk_lng *= 2
                        };
                        var blk_lng2 = 0;
                        if (blk_lv > 5) {
                            blk_lng2 = 70 + blk_lv * 10
                        };
                        if (cont_flg == 0 && ((Rds1 > Rds2 && (Rds < 41 || ((sht_typ == 1 || sht_typ == 2) && Rds < blk_lng))) || Rds < blk_lng2)) {
                            epg.s = 0;
                            atk_set(17, epg.i);
                            if (sht_typ == 2) {
                                epg.act[2].time = .03
                            };
                            var Rx = gl_x - pg.x;
                            var Ry = gl_z - pg.z;
                            var Rr = Math.atan2(Ry, Rx) + .1;
                            var Rd = 35;
                            epg.tgx = pg.x + Math.cos(Rr) * Rd;
                            epg.tgz = pg.z + Math.sin(Rr) * Rd;
                            var Rx = epg.x - pg.x;
                            var Ry = epg.z - pg.z;
                            var Rr = Math.atan2(Ry, Rx);
                            epg.thr = -Rr - pi2;
                            epg.mms.rotation.y = epg.thr;
                            sht_blk_i = epg.i;
                            sht_blk = 1;
                            var blk_hnt = 1 - blk_lv * .3;
                            if (blk_hnt < .1) {
                                blk_hnt = .1
                            };
                            if (Math.random() > blk_hnt || sht_def < 20) {
                                blk_hit = 1
                            }
                        }
                    }
                }
            } else {
                st_tcx = -1;
                st_tcy = -1;
                st_mcx = -1;
                st_mcy = -1
            };
            if (cont_anm > 0) {
                switch (onflg) {
                    case 1:
                    case 2:
                        cont_tim_stp = 1;
                        pt_f = {};
                        pt_fi = 0;
                        if (fchk) {
                            show_vtr_mode = 1;
                            if (fb_ad_v == 1) {
                                show_vtr1 = 0;
                                showRewardedVideo()
                            } else if (fb_ad_v2 == 1) {
                                show_vtr1 = 0;
                                showRewardedVideo2()
                            } else {
                                er_anm_alt();
                                cont_st()
                            }
                        } else {
                            er_anm_alt();
                            cont_st()
                        };
                        break;
                    case 3:
                        cont_tim_stp = 1;
                        pt_f = {};
                        pt_fi = 0;
                        if (fchk) {
                            if (fb_ad_i1 == 1) {
                                show_int1 = 0;
                                showInterstitial()
                            } else {
                                scd_gmov()
                            }
                        } else {
                            scd_gmov()
                        };
                        break;
                    default:
                };
                onflg_rst()
            };
            break;
        default:
    }
};

function pdo3(tchx, tchy, tci) {
    switch (s) {
        case 1:
            var ctchx = tchlx(tchx);
            var ctchy = tchly(tchy);
            var tg = tc_f["c" + tci];
            if (cont_anm > 0) {
                btht_mv(ctchx, ctchy)
            };
            break;
        case 27:
            if (scr_sn_sl == 1 && shop_dlg == 0) {
                tctim = +new Date();
                if (Math.abs(lst_tx - tchx) > 30 || Math.abs(lst_ty - tchy) > 30) {
                    onflg = -99
                };
                if (slty != -1) {
                    slay = -(slty - tchy) * .72;
                    if (slwy > 0) {
                        slay *= (1000 - slwy) / 5000
                    };
                    if (slwy < slwh) {
                        slay *= (1000 - slwh - slwy) / 12000
                    };
                    slwy += slay;
                    slty = tchy
                }
            } else {
                var ctchx = tchlx(tchx);
                var ctchy = tchly(tchy);
                btht_mv(ctchx, ctchy)
            };
            break;
        default:
            var ctchx = tchlx(tchx);
            var ctchy = tchly(tchy);
            btht_mv(ctchx, ctchy)
    }
};

function tev4(event) {
    event.preventDefault()
};