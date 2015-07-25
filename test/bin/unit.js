///<reference path="../src/script/module.ts"/>
var player = new web.media.Player();
var media = new web.media.Media();
player.play(media);


///<reference path="i-media.ts"/>

///<reference path="i-media.ts"/>
var web;
(function (web) {
    var media;
    (function (media) {
        var Media = (function () {
            function Media() {
            }
            return Media;
        })();
        media.Media = Media;
    })(media = web.media || (web.media = {}));
})(web || (web = {}));

///<reference path="media.ts"/>
///<reference path="player.ts"/>

///<reference path="i-player.ts"/>
var web;
(function (web) {
    var media;
    (function (media_1) {
        var Player = (function () {
            function Player() {
            }
            Player.prototype.play = function (media) {
                // play
                console.log('player is playing...');
                return true;
            };
            return Player;
        })();
        media_1.Player = Player;
    })(media = web.media || (web.media = {}));
})(web || (web = {}));
