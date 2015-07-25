///<reference path="i-media.ts"/>

namespace web.media {
    export interface IPlayer {
        play(media:IMedia):boolean;
    }
}