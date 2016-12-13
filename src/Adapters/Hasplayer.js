import AbstractAdapter from "./Abstract";

export default class Hasplayer extends AbstractAdapter {
    init(url) {
        return new Promise((resolve, reject) => {
            const stream = { url: url };

            requirejs([this.options.src], () => {

                this.player = new MediaPlayer();
                this.player.init(this.videoElement);
                this.player.load(stream);

                resolve(this);

                Object.defineProperty(Hasplayer, AbstractAdapter.EVENT_TIMEUPDATE, {value: 'timeupdate'});
                Object.defineProperty(Hasplayer, AbstractAdapter.EVENT_PLAYED, {value: 'play'});
                Object.defineProperty(Hasplayer, AbstractAdapter.EVENT_PAUSED, {value: 'pause'});
            });

        });
    }

    canPlay(url) {
        return /\/manifest$/i.test(url);
    }

    isPaused() {
        return this.videoElement.paused;
    }

    getCurrentTime() {
        return this.player.getPosition();
    }
}

