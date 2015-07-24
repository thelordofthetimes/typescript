var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var Human = (function () {
    function Human(name, gender) {
        if (name === void 0) { name = 'new human'; }
        if (gender === void 0) { gender = Gender.Female; }
        this.name = name;
        this.gender = gender;
    }
    Human.prototype.rename = function (name) {
        this.name = name;
        return true;
    };
    Human.prototype.whoAreYou = function () {
        return 'I am ' + this.name + ', (' + this.gender + ')';
    };
    return Human;
})();
var Translator = (function (_super) {
    __extends(Translator, _super);
    function Translator(name, language) {
        if (language === void 0) { language = 'en'; }
        _super.call(this, name);
        this.language = language;
    }
    Translator.prototype.whoAreYou = function () {
        return _super.prototype.whoAreYou.call(this) + '(' + this.language + ')';
    };
    Translator.prototype.translate = function (word) {
        return word + ' translated';
    };
    return Translator;
})(Human);
var Linked = (function () {
    function Linked(value) {
        this.value = null;
        this.next = null;
        this.value = value;
    }
    return Linked;
})();
var web;
(function (web) {
    var CONTROL_TIME;
    var media;
    (function (media) {
        var MediaPlayer = (function () {
            function MediaPlayer() {
            }
            MediaPlayer.prototype.play = function () {
                return false;
            };
            return MediaPlayer;
        })();
        media.MediaPlayer = MediaPlayer;
    })(media = web.media || (web.media = {}));
})(web || (web = {}));
var humanOne = new Human();
console.log(humanOne.whoAreYou());
humanOne.rename('bui anh');
console.log(humanOne.whoAreYou());
var translatorOne = new Translator('bui anh', 'en');
console.log(translatorOne.whoAreYou());
console.log(translatorOne.translate('I am fine'));
var nodeOne = new Linked(humanOne);
var humanTwo = new Human('human two');
nodeOne.next = new Linked(humanTwo);
var linked = nodeOne;
do {
    console.log(linked.value.whoAreYou());
    linked = linked.next;
} while (linked != null);
console.log(web.media.MediaPlayer);
