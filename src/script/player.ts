///<reference path="i-player.ts"/>

module web.media {

    export class Player implements IPlayer {

        play(media:web.media.IMedia):boolean {
            // play
            console.log('player is playing...');

            return true;
        }

    }
}