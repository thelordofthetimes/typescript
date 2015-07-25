///<reference path="i-player.ts"/>


namespace web.media {

    export class Player implements IPlayer {

        play(media:IMedia):boolean {
            // play
            console.log('player is playing...');

            return true;
        }

    }
}