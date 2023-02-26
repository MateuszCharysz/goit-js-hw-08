import * as player from '@vimeo/player';
import throttle from 'lodash.throttle';
const throttle = require('lodash.throttle');

//help
const log = console.log;
// const _.throttle(() => {func}, 1000)
//DOM
const windowPlayer = document.querySelector('#vimeo-player');
log(windowPlayer);

//callback
const onPlay = event => {
  player
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

windowPlayer.player.on(
  'timeupdate',
  _.throttle(() => {
    onPlay;
  }, 1000),
);
