///<reference path="i-media.ts"/>


module web.media {

    export interface IPlayer {
        play(media:IMedia):boolean;
    }
}