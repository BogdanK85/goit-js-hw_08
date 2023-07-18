import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

function playerSaveTimeInStorage(data) {
    const currentTime = data.seconds;
    localStorage.setItem("videoplayer-current-time", currentTime);
}

const trottlePlayerSaveTime = throttle(playerSaveTimeInStorage, 1000);
const savedPlayerCurrentTime = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(savedPlayerCurrentTime || 0);
player.on('timeupdate', trottlePlayerSaveTime);
    







// player.on('timeupdate', onTimeupdate() {
        
     //console.log('played the video!');
    // });

    // player.getVideoTitle().then(function(title) {
    //     console.log('title:', title);
    // });

