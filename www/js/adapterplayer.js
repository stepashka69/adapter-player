/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Native = __webpack_require__(1);
	
	var _Native2 = _interopRequireDefault(_Native);
	
	var _Dash = __webpack_require__(3);
	
	var _Dash2 = _interopRequireDefault(_Dash);
	
	var _Hasplayer = __webpack_require__(4);
	
	var _Hasplayer2 = _interopRequireDefault(_Hasplayer);
	
	var _AdapterFactory = __webpack_require__(5);
	
	var _AdapterFactory2 = _interopRequireDefault(_AdapterFactory);
	
	var _Play = __webpack_require__(6);
	
	var _Play2 = _interopRequireDefault(_Play);
	
	var _Time = __webpack_require__(7);
	
	var _Time2 = _interopRequireDefault(_Time);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var factory = new _AdapterFactory2.default();
	var videoElement = document.getElementById("videoPlayer");
	
	factory.registerAdapter(new _Native2.default({
	    'videoElement': videoElement,
	    "autoplay": false
	}));
	
	factory.registerAdapter(new _Dash2.default({
	    'videoElement': videoElement,
	    'src': 'vendor/dashjs/js/dash.all.min.js',
	    'autoplay': false
	}));
	
	factory.registerAdapter(new _Hasplayer2.default({
	    'videoElement': videoElement,
	    'src': 'vendor/hasplayer/index.js',
	    'autoplay': false
	}));
	
	var urlMp4 = "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4";
	var urlMpd = "http://dash.edgesuite.net/envivio/EnvivioDash3/manifest.mpd";
	var urlManifest = "http://playready.directtaps.net/smoothstreaming/SSWSS720H264/SuperSpeedway_720.ism/Manifest";
	
	factory.getPlayer(urlMpd).then(function (player) {
	    var playControl = new _Play2.default(player);
	    var timeControl = new _Time2.default(player);
	
	    document.getElementById("controlsContainer").appendChild(playControl.getElement());
	    document.getElementById("timeContainer").appendChild(timeControl.getElement());
	}, function (reason) {
	    alert(reason);
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Abstract = __webpack_require__(2);
	
	var _Abstract2 = _interopRequireDefault(_Abstract);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Native = function (_AbstractAdapter) {
	    _inherits(Native, _AbstractAdapter);
	
	    function Native() {
	        _classCallCheck(this, Native);
	
	        return _possibleConstructorReturn(this, (Native.__proto__ || Object.getPrototypeOf(Native)).apply(this, arguments));
	    }
	
	    _createClass(Native, [{
	        key: "init",
	        value: function init(url) {
	            return new Promise(function (resolve, reject) {
	                this.videoElement.src = url;
	                this.player = this.videoElement;
	                resolve(this);
	            }.bind(this));
	        }
	    }, {
	        key: "canPlay",
	        value: function canPlay(url) {
	            return (/\.mp4$/i.test(url)
	            );
	        }
	    }, {
	        key: "isPaused",
	        value: function isPaused() {
	            return this.player.paused;
	        }
	    }, {
	        key: "getCurrentTime",
	        value: function getCurrentTime() {
	            return this.player.currentTime;
	        }
	    }]);
	
	    return Native;
	}(_Abstract2.default);
	
	exports.default = Native;
	
	
	Object.defineProperty(Native, _Abstract2.default.EVENT_TIMEUPDATE, { value: "timeupdate" });
	Object.defineProperty(Native, _Abstract2.default.EVENT_PLAYED, { value: "play" });
	Object.defineProperty(Native, _Abstract2.default.EVENT_PAUSED, { value: "pause" });

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var AbstractAdapter = function () {
	    function AbstractAdapter(options) {
	        _classCallCheck(this, AbstractAdapter);
	
	        this.options = options || {};
	        this.videoElement = this.options.videoElement;
	    }
	
	    _createClass(AbstractAdapter, [{
	        key: "canPlay",
	        value: function canPlay(url) {
	            return false;
	        }
	    }, {
	        key: "play",
	        value: function play() {
	            this.player.play();
	        }
	    }, {
	        key: "pause",
	        value: function pause() {
	            this.player.pause();
	        }
	    }, {
	        key: "isEventSupported",
	        value: function isEventSupported(type) {
	            return !!this.constructor[type];
	        }
	    }, {
	        key: "addEventListener",
	        value: function addEventListener(type, listener) {
	            if (!this.isEventSupported(type)) {
	                throw Error('Event is not supported');
	            }
	            this.player.addEventListener(this.constructor[type], listener);
	        }
	    }]);
	
	    return AbstractAdapter;
	}();
	
	exports.default = AbstractAdapter;
	
	
	Object.defineProperty(AbstractAdapter, "EVENT_TIMEUPDATE", { value: "EVENT_TIMEUPDATE" });
	Object.defineProperty(AbstractAdapter, "EVENT_PLAYED", { value: "EVENT_PLAYED" });
	Object.defineProperty(AbstractAdapter, "EVENT_PAUSED", { value: "EVENT_PAUSED" });

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Abstract = __webpack_require__(2);
	
	var _Abstract2 = _interopRequireDefault(_Abstract);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Dash = function (_AbstractAdapter) {
	    _inherits(Dash, _AbstractAdapter);
	
	    function Dash() {
	        _classCallCheck(this, Dash);
	
	        return _possibleConstructorReturn(this, (Dash.__proto__ || Object.getPrototypeOf(Dash)).apply(this, arguments));
	    }
	
	    _createClass(Dash, [{
	        key: "init",
	        value: function init(url) {
	            var _this2 = this;
	
	            return new Promise(function (resolve, reject) {
	                requirejs([_this2.options.src], function () {
	                    _this2.player = dashjs.MediaPlayer().create();
	
	                    _this2.player.on(dashjs.MediaPlayer.events.STREAM_INITIALIZED, resolve.bind(null, _this2));
	
	                    _this2.player.initialize(_this2.videoElement, url, _this2.options.autoplay);
	
	                    Object.defineProperty(Dash, _Abstract2.default.EVENT_TIMEUPDATE, { value: dashjs.MediaPlayer.events.PLAYBACK_TIME_UPDATED });
	                    Object.defineProperty(Dash, _Abstract2.default.EVENT_PLAYED, { value: dashjs.MediaPlayer.events.PLAYBACK_PLAYING });
	                    Object.defineProperty(Dash, _Abstract2.default.EVENT_PAUSED, { value: dashjs.MediaPlayer.events.PLAYBACK_PAUSED });
	                });
	            });
	        }
	    }, {
	        key: "canPlay",
	        value: function canPlay(url) {
	            return (/\.mpd$/i.test(url)
	            );
	        }
	    }, {
	        key: "isPaused",
	        value: function isPaused() {
	            return this.player.isPaused();
	        }
	    }, {
	        key: "getCurrentTime",
	        value: function getCurrentTime() {
	            return this.player.time();
	        }
	    }, {
	        key: "addEventListener",
	        value: function addEventListener(type, listener) {
	            if (!this.isEventSupported(type)) {
	                throw Error('Event is not supported');
	            }
	            this.player.on(Dash[type], listener);
	        }
	    }]);
	
	    return Dash;
	}(_Abstract2.default);
	
	exports.default = Dash;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Abstract = __webpack_require__(2);
	
	var _Abstract2 = _interopRequireDefault(_Abstract);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Hasplayer = function (_AbstractAdapter) {
	    _inherits(Hasplayer, _AbstractAdapter);
	
	    function Hasplayer() {
	        _classCallCheck(this, Hasplayer);
	
	        return _possibleConstructorReturn(this, (Hasplayer.__proto__ || Object.getPrototypeOf(Hasplayer)).apply(this, arguments));
	    }
	
	    _createClass(Hasplayer, [{
	        key: 'init',
	        value: function init(url) {
	            var _this2 = this;
	
	            return new Promise(function (resolve, reject) {
	                var stream = { url: url };
	
	                requirejs([_this2.options.src], function () {
	
	                    _this2.player = new MediaPlayer();
	                    _this2.player.init(_this2.videoElement);
	                    _this2.player.load(stream);
	
	                    resolve(_this2);
	
	                    Object.defineProperty(Hasplayer, _Abstract2.default.EVENT_TIMEUPDATE, { value: 'timeupdate' });
	                    Object.defineProperty(Hasplayer, _Abstract2.default.EVENT_PLAYED, { value: 'play' });
	                    Object.defineProperty(Hasplayer, _Abstract2.default.EVENT_PAUSED, { value: 'pause' });
	                });
	            });
	        }
	    }, {
	        key: 'canPlay',
	        value: function canPlay(url) {
	            return (/\/manifest$/i.test(url)
	            );
	        }
	    }, {
	        key: 'isPaused',
	        value: function isPaused() {
	            return this.videoElement.paused;
	        }
	    }, {
	        key: 'getCurrentTime',
	        value: function getCurrentTime() {
	            return this.player.getPosition();
	        }
	    }]);
	
	    return Hasplayer;
	}(_Abstract2.default);
	
	exports.default = Hasplayer;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Abstract = __webpack_require__(2);
	
	var _Abstract2 = _interopRequireDefault(_Abstract);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var AdapterFactory = function () {
	    function AdapterFactory() {
	        _classCallCheck(this, AdapterFactory);
	
	        this.adapters = [];
	    }
	
	    _createClass(AdapterFactory, [{
	        key: 'registerAdapter',
	        value: function registerAdapter(adapter) {
	            if (!adapter instanceof _Abstract2.default) {
	                throw Error('Only classes extending Abstract adapter can be registered.');
	            }
	            this.adapters.push(adapter);
	        }
	    }, {
	        key: 'getPlayer',
	        value: function getPlayer(url) {
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = this.adapters[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var adapter = _step.value;
	
	                    if (adapter.canPlay(url)) {
	                        return adapter.init(url);
	                    }
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	
	            return Promise.reject('Cannot find player to play.');
	        }
	    }]);
	
	    return AdapterFactory;
	}();
	
	exports.default = AdapterFactory;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Abstract = __webpack_require__(2);
	
	var _Abstract2 = _interopRequireDefault(_Abstract);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Play = function () {
	    function Play(playerAdapter) {
	        _classCallCheck(this, Play);
	
	        this.player = playerAdapter;
	    }
	
	    _createClass(Play, [{
	        key: 'getElement',
	        value: function getElement() {
	            var _this = this;
	
	            if (this.element) {
	                return this.element;
	            }
	
	            this.element = document.createElement('i');
	
	            updateClass(this.element, this.player.isPaused());
	
	            this.element.onclick = function (e) {
	                if (_this.player.isPaused()) {
	                    _this.player.play();
	                } else {
	                    _this.player.pause();
	                }
	            };
	
	            this.player.addEventListener(_Abstract2.default.EVENT_PAUSED, function () {
	                updateClass(_this.element, _this.player.isPaused());
	            });
	
	            this.player.addEventListener(_Abstract2.default.EVENT_PLAYED, function () {
	                updateClass(_this.element, _this.player.isPaused());
	            });
	
	            return this.element;
	        }
	    }]);
	
	    return Play;
	}();
	
	exports.default = Play;
	
	
	function updateClass(element, isPaused) {
	    "use strict";
	
	    if (isPaused) {
	        element.setAttribute("class", "glyphicon glyphicon-play");
	    } else {
	        element.setAttribute("class", "glyphicon glyphicon-pause");
	    }
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Abstract = __webpack_require__(2);
	
	var _Abstract2 = _interopRequireDefault(_Abstract);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Time = function () {
	    function Time(playerAdapter) {
	        _classCallCheck(this, Time);
	
	        this.player = playerAdapter;
	    }
	
	    _createClass(Time, [{
	        key: 'getElement',
	        value: function getElement() {
	            var _this = this;
	
	            if (this.element) {
	                return this.element;
	            }
	
	            this.element = document.createTextNode('00:00:00');
	            this.player.addEventListener(_Abstract2.default.EVENT_TIMEUPDATE, function (e) {
	                _this.element.textContent = toHHMMSS(_this.player.getCurrentTime());
	            });
	
	            return this.element;
	        }
	    }]);
	
	    return Time;
	}();
	
	exports.default = Time;
	
	
	function toHHMMSS(seconds) {
	    var sec_num = parseInt(seconds, 10); // don't forget the second param
	    var hours = Math.floor(sec_num / 3600);
	    var minutes = Math.floor((sec_num - hours * 3600) / 60);
	    var sec = sec_num - hours * 3600 - minutes * 60;
	
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

/***/ }
/******/ ]);
//# sourceMappingURL=adapterplayer.js.map