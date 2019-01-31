$(document).ready(function () {
    
    var $btnPlayer = $(".player__open");
    var $btnClosePlayer = $(".player__close");
    var $playerInfo = $(".player__info");
    var $playerImgWrapper = $(".player__img-wrapper");
    var $playerControls = $(".player__controls");
    var $backdrop = $(".backdrop");
    var $player = $(".player");
    var $playerWrapper = $(".player__wrapper");
    
    var $window = $(window);
    
    $btnPlayer.click(function () {
        $backdrop.addClass("backdrop--active");
        $player.addClass("player--active");
        $playerWrapper.addClass("player__wrapper--active");
        refreshPlayer();
    });
    
    $btnClosePlayer.click(function () {
        $backdrop.removeClass("backdrop--active");
        $player.removeClass("player--active");
        $playerWrapper.removeClass("player__wrapper--active");
    });
    
    function checkPlayer(width) {
        if (width > 768) {
            $playerInfo.appendTo($playerImgWrapper);
        } else {
            $playerInfo.insertAfter($playerControls);
        }
    }
    
    $window.resize(function () {
        var width = $window.width();
        checkPlayer(width);
    });
    
    checkPlayer($window.width());
    
    var $audio = $(".player__audio");
    var $playerPlay = $(".player__controls-play");
    var $playerRefresh = $(".player__refresh");
    var $playerMantraLabel = $(".player__title-mantra");
    
    var sources = {
        aum: {
            label: "aum",
            path: "audio/aum.mp3"
        },
        lam: {
            label: "lam",
            path: "audio/lam.mp3"
        },
        rama: {
            label: "rama",
            path: "audio/rama.mp3"
        },
        shrim: {
            label: "shrim",
            path: "audio/shrim.mp3"
        }
    }
    
    $playerPlay.click(function () {
        $audio[0].play();
    });
    
    $playerRefresh.click(function () {
        refreshPlayer();
    });
    
    function refreshPlayer() {
        var keys = Object.keys(sources);
        var selected = sources[keys[ keys.length * Math.random() << 0]];
        $audio.attr("src", selected.path);
        $audio.load();
        $playerMantraLabel.text(selected.label);
    }
    
});