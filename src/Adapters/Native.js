import AbstractAdapter from "./Abstract";

export default class Native extends AbstractAdapter {
    init(url) {
        return new Promise(function (resolve, reject) {
            this.videoElement.src = url;
            this.player = this.videoElement;
            resolve(this);
        }.bind(this));
    }

    canPlay(url) {
        return /\.mp4$/i.test(url);
    }

    isPaused() {
        return this.player.paused;
    }

    getCurrentTime() {
        return this.player.currentTime;
    }
}

Object.defineProperty(Native, AbstractAdapter.EVENT_TIMEUPDATE, {value: "timeupdate"});
Object.defineProperty(Native, AbstractAdapter.EVENT_PLAYED, {value: "play"});
Object.defineProperty(Native, AbstractAdapter.EVENT_PAUSED, {value: "pause"});
