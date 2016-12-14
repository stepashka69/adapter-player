# Adapter JS Video Player

## Overview
Demo project to illustrate idea of creating JS video player that can play various video formats (MPEG-DASH, Smooth Streaming, MP4 etc.) with a single interface. Created to support article [Making web browser play streaming video (such as MPEG-DASH, Smooth Streaming, HLS) with one player.](https://medium.com/@stepashka69/making-web-browser-play-streaming-video-mpeg-dash-smooth-streaming-hls-with-one-player-c5f4dd445b91#.nl6cz9yic).

## Documentation

Ready to use built sample project is located in `/www` folder.

Source code is in `/src` folder.

Project uses ES6 compiled with [Babel](https://babeljs.io/) and packaged with [Webpack](https://webpack.github.io/). Dependencies are managed with [Bower](https://bower.io/) with [grunt-bower-task](https://www.npmjs.com/package/grunt-bower-task).

## Development
* Install Core Dependencies
    * [install nodejs](http://nodejs.org/)
    * [install grunt](http://gruntjs.com/getting-started)
        * `npm install -g grunt-cli`

* Build on command line:
    * `npm run build`
* While making changes run. It will start webpack in `--watch` mode
    * `npm run dev`









