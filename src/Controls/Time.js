import AbstractPlayer from '../Adapters/Abstract.js';
export default class Time {
    constructor(playerAdapter) {
        this.player = playerAdapter;
    }

    getElement() {
        if (this.element) {
            return this.element;
        }

        this.element = document.createTextNode('00:00:00');
        this.player.addEventListener(AbstractPlayer.EVENT_TIMEUPDATE, (e) => {
            this.element.textContent = toHHMMSS(this.player.getCurrentTime());
        });

        return this.element;
    }
}

function toHHMMSS(seconds) {
    const sec_num = parseInt(seconds, 10); // don't forget the second param
    let hours = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    let sec = sec_num - (hours * 3600) - (minutes * 60);

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    return hours + ':' + minutes + ':' + sec;
}
