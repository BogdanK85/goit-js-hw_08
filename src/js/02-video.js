import Player from '@vimeo/player';

const iframeElem = document.querySelector('iframe');
    const player = new Player(iframeElem);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

