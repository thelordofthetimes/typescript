var biology;
(function (biology) {
    (function (Gender) {
        Gender[Gender["Male"] = 0] = "Male";
        Gender[Gender["Female"] = 1] = "Female";
    })(biology.Gender || (biology.Gender = {}));
    var Gender = biology.Gender;
})(biology || (biology = {}));

///<reference path="human.ts"/>
///<reference path="intelligent-human.ts"/>
module.exports = biology;

///<reference path="animal.ts"/>
var biology;
(function (biology) {
    var Human = (function () {
        function Human(name, gender) {
            if (name === void 0) { name = 'new human'; }
            if (gender === void 0) { gender = biology.Gender.Female; }
            this.name = name;
            this.gender = gender;
            this._id = Math.random();
        }
        Object.defineProperty(Human.prototype, "id", {
            get: function () {
                return this._id;
            },
            enumerable: true,
            configurable: true
        });
        Human.prototype.rename = function (name) {
            this.name = name;
            return true;
        };
        Human.prototype.whoAreYou = function () {
            return 'I am ' + this.name + ', (' + this.gender + ')';
        };
        return Human;
    })();
    biology.Human = Human;
})(biology || (biology = {}));

///<reference path="human.ts"/>
var biology;
(function (biology) {
    var IntelligentHuman = (function () {
        function IntelligentHuman(name, gender, intelligent) {
            this.name = name;
            this.gender = gender;
            this.intelligent = intelligent;
        }
        IntelligentHuman.prototype.rename = function (name) {
            this.name = name;
            return true;
        };
        IntelligentHuman.prototype.whoAreYou = function () {
            return 'I am ' + this.name + '(' + this.gender + ') (' + this.intelligent + ')';
        };
        return IntelligentHuman;
    })();
    biology.IntelligentHuman = IntelligentHuman;
})(biology || (biology = {}));

///<reference path="biology.ts"/>
var biology = require('./biology');
var humanOne = new biology.Human();
console.log(humanOne.whoAreYou());
humanOne.rename('bui anh');
console.log(humanOne.whoAreYou());
console.log('id', humanOne.id);
var intelligentHuman = new biology.IntelligentHuman('bui anh', biology.Gender.Male, 10);
console.log(intelligentHuman.whoAreYou());

/**
 * Created by Bui on 7/25/2015.
 */
