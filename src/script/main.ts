///<reference path="biology.ts"/>

import biology = require('./biology');

var humanOne = new biology.Human();
console.log(humanOne.whoAreYou());
humanOne.rename('bui anh');
console.log(humanOne.whoAreYou());
console.log('id', humanOne.id);

var intelligentHuman = new biology.IntelligentHuman('bui anh', biology.Gender.Male, 10);
console.log(intelligentHuman.whoAreYou());