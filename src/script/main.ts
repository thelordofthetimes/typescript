enum Gender {
    Male,
    Female
}

interface IHuman {
    name: string;
    gender: Gender;

    rename(name:string):boolean;
    whoAreYou():string;
}

class Human implements IHuman {
    name:string;
    gender:Gender;

    constructor(name:string = 'new human', gender:Gender = Gender.Female) {
        this.name = name;
        this.gender = gender;
    }

    rename(name:string):boolean {
        this.name = name;
        return true;
    }

    whoAreYou():string {
        return 'I am ' + this.name + ', (' + this.gender + ')';
    }
}

class Translator extends Human {
    language:string;

    constructor(name:string, language:string = 'en') {
        super(name);
        this.language = language;
    }

    whoAreYou():string {
        return super.whoAreYou() + '(' + this.language + ')';
    }

    translate(word:string):string {
        return word + ' translated';
    }
}

class Linked<T> {
    value:T = null;
    next:Linked<T> = null;

    constructor(value:T) {
        this.value = value;
    }
}

module web {
    var CONTROL_TIME;

    export module media {
        export class MediaPlayer {
            play():boolean {
                return false;
            }
        }
    }
}

var humanOne = new Human();
console.log(humanOne.whoAreYou());
humanOne.rename('bui anh');
console.log(humanOne.whoAreYou());

var translatorOne = new Translator('bui anh', 'en');
console.log(translatorOne.whoAreYou());
console.log(translatorOne.translate('I am fine'));

var nodeOne = new Linked<Human>(humanOne);
var humanTwo = new Human('human two');
nodeOne.next = new Linked<Human>(humanTwo);
var linked:Linked<Human> = nodeOne;
do {
    console.log(linked.value.whoAreYou());

    linked = linked.next;
} while (linked != null);

console.log(web.media.MediaPlayer);