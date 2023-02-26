import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
// const throttle = require('lodash.throttle');

//help
const log = console.log;
// const _.throttle(() => {func}, 1000)
//DOM
const vimeoPlayer = document.querySelector('#vimeo-player');
const vPlayer = new Vimeo.player(vimeoPlayer);
log(windowPlayer);

//callback
const onPlay = event => {
  vPlayer
    .getCurrentTime()
    .then(function (seconds) {
      localStorage.setItem('videoplayer-current-time', seconds);
      // seconds = the current playback position
    })
    .catch(function (error) {
      console.log('shit went south');
      // an error occurred
    });
};

vPlayer.on(
  'timeupdate',
  throttle(() => {
    onPlay;
  }, 1000),
);
