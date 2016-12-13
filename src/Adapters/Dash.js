import AbstractAdapter from "./Abstract";

export default class Dash extends AbstractAdapter {

    init(url) {
        return new Promise((resolve, reject) => {
            requirejs([this.options.src], () => {
                this.player = dashjs.MediaPlayer().create();

                this.player.on(
                    dashjs.MediaPlayer.events.STREAM_INITIALIZED,
                    resolve.bind(null, this)
                );

                this.player.initialize(this.videoElement, url, this.options.autoplay);

                Object.defineProperty(Dash, AbstractAdapter.EVENT_TIMEUPDATE, {value: dashjs.MediaPlayer.events.PLAYBACK_TIME_UPDATED});
                Object.defineProperty(Dash, AbstractAdapter.EVENT_PLAYED, {value: dashjs.MediaPlayer.events.PLAYBACK_PLAYING});
                Object.defineProperty(Dash, AbstractAdapter.EVENT_PAUSED, {value: dashjs.MediaPlayer.events.PLAYBACK_PAUSED});
            });
        });
    }

    canPlay(url) {
        return /\.mpd$/i.test(url);
    }

    isPaused() {
        return this.player.isPaused();
    }

    getCurrentTime() {
        return this.player.time();
    }

    addEventListener(type, listener) {
        if (!this.isEventSupported(type)) {
            throw Error('Event is not supported');
        }
        this.player.on(Dash[type], listener);
    }
}

