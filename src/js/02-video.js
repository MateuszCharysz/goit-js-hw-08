import * as vimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';
const throttle = require('lodash.throttle');

//help
const log = console.log;

//DOM
const windowPlayer = document.querySelector('#vimeo-player');
log(windowPlayer);

//callback
const onPlay = () => {}