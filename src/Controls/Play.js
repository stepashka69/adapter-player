import AbstractAdapter from '../Adapters/Abstract.js';

export default class Play {
    constructor(playerAdapter) {
        this.player = playerAdapter;
    }

    getElement() {
        if (this.element) {
            return this.element;
        }

        this.element = document.createElement('i');

        updateClass(this.element, this.player.isPaused());

        this.element.onclick = (e) => {
            if (this.player.isPaused()) {
                this.player.play();
            } else {
                this.player.pause();
            }
        };

        this.player.addEventListener(AbstractAdapter.EVENT_PAUSED, () => {
            updateClass(this.element, this.player.isPaused());
        });

        this.player.addEventListener(AbstractAdapter.EVENT_PLAYED, () => {
            updateClass(this.element, this.player.isPaused());
        });

        return this.element;
    }
}

function updateClass(element, isPaused) {
    "use strict";
    if (isPaused) {
        element.setAttribute("class", "glyphicon glyphicon-play");
    } else {
        element.setAttribute("class", "glyphicon glyphicon-pause");
    }
}
