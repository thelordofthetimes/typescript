///<reference path="animal.ts"/>

namespace biology {

    export interface IHuman {
        name: string;
        gender: Gender;

        rename(name:string):boolean;
        whoAreYou():string;
    }

    export class Human implements IHuman {
        name:string;
        gender:Gender;
        private _id:number;
        get id():number {
            return this._id;
        }

        constructor(name:string = 'new human', gender:Gender = Gender.Female) {
            this.name = name;
            this.gender = gender;
            this._id = Math.random();
        }

        rename(name:string):boolean {
            this.name = name;
            return true;
        }

        whoAreYou():string {
            return 'I am ' + this.name + ', (' + this.gender + ')';
        }
    }
}