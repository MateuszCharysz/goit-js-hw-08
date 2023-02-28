import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import { save, load, remove } from './localstorage';
// const throttle = require('lodash.throttle');

//help
const log = console.log;
// const _.throttle(() => {func}, 1000)
// log(Player)
//DOM
const vimeoPlayer = document.querySelector('#vimeo-player');
const vPlayer = new Player(vimeoPlayer);
log(vPlayer);

const testLocal = () => save('videoplayer-current-time', 5);
log(testLocal())
//callback
const onPlay = () => {
  vPlayer
    .getCurrentTime()
    .then(function (seconds) {
      log(seconds);
      save('videoplayer-current-time', seconds);
      // seconds = the current playback position
    })
    .catch(function (error) {
      console.log('shit went south');
      // an error occurred
    });
};

vPlayer.on(
  'play',
  onPlay,
  // throttle(() => {
  //   onPlay;
  // }, 1000),
);
