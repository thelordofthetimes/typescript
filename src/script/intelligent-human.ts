///<reference path="human.ts"/>

namespace biology {

    export interface IIntelligentHuman extends IHuman {
        intelligent: number;
    }


    export class IntelligentHuman implements IIntelligentHuman {
        name:string;
        gender:Gender;
        intelligent:number;

        constructor(name:string, gender:Gender, intelligent:number) {
            this.name = name;
            this.gender = gender;
            this.intelligent = intelligent;
        }

        rename(name:string):boolean {
            this.name = name;

            return true;
        }

        whoAreYou():string {
            return 'I am ' + this.name + '(' + this.gender + ') (' + this.intelligent + ')';
        }

    }
}
