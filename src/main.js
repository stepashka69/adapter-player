import Native from "./Adapters/Native.js";
import Dash from "./Adapters/Dash.js";
import Hasplayer from "./Adapters/Hasplayer.js";
import Factory from "./AdapterFactory.js";
import PlayButton from "./Controls/Play.js";
import TimeControl from "./Controls/Time.js";

const factory = new Factory();
const videoElement = document.getElementById("videoPlayer");

factory.registerAdapter(new Native({
    'videoElement': videoElement,
    "autoplay": false
}));

factory.registerAdapter(new Dash({
    'videoElement': videoElement,
    'src': 'vendor/dashjs/js/dash.all.min.js',
    'autoplay': false
}));

factory.registerAdapter(new Hasplayer({
    'videoElement': videoElement,
    'src': 'vendor/hasplayer/index.js',
    'autoplay': false
}));

const urlMp4 = "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4";
const urlMpd = "http://dash.edgesuite.net/envivio/EnvivioDash3/manifest.mpd";
const urlManifest = "http://playready.directtaps.net/smoothstreaming/SSWSS720H264/SuperSpeedway_720.ism/Manifest";

factory.getPlayer(urlMpd).then(function (player) {
        const playControl = new PlayButton(player);
        const timeControl = new TimeControl(player);

        document.getElementById("controlsContainer").appendChild(playControl.getElement());
        document.getElementById("timeContainer").appendChild(timeControl.getElement());
    },
    function (reason) {
        alert(reason);
    }
);

