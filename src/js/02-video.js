import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

//help
const log = console.log;

//DOM
const vimeoPlayer = document.querySelector('#vimeo-player');
const vPlayer = new Player(vimeoPlayer);
log(vPlayer);

//callback
const onPlay = () => {
  vPlayer
    .getCurrentTime()
    .then(function (seconds) {
      log(seconds);
      localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
    })
    .catch(function (error) {
      console.log(`shit went south:${error}`);
    });
};
const storageTimeStamp = () => {try {
  return localStorage.getItem('videoplayer-current-time') === null
    ? undefined
    : JSON.parse(localStorage.getItem('videoplayer-current-time'));
} catch (error) {
  // seconds = the actual time that the player seeked to
  console.error('Get state error: ', error.message);
}}

const reLoad = () => {
  vPlayer
    .setCurrentTime(storageTimeStamp())
    .then(function (seconds) {})
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          // the time was less than 0 or greater than the video’s duration
          break;

        default:
          // some other error occurred
          break;
      }
    });
};

//EVENT
reLoad();
vPlayer.on(
  'timeupdate',
  // onPlay
  throttle(onPlay, 940),
);
