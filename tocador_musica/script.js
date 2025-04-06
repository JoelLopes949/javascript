const songName = document.getElementById('song-name');
const artistName = document.getElementById('band-name');
const song = document.getElementById('audio');
const play = document.getElementById('play')

songName.innerText = 'Iron Maiden - Fear of the dark'
artistName.innerText = 'Iron Maiden'

function playSong() {
    song.play();
}

play.addEventListener('click', playSong()):