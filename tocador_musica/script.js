const songName = document.getElementById('song-name');
const artistName = document.getElementById('band-name');
const song = document.getElementById('audio');
const cover = document.getElementById('cover');
const play = document.getElementById('play');
const next = document.getElementById('next');
const previous = document.getElementById('previous');

const FearOfTheDark = {
    songName: 'Fear of the Dark (2015 Remaster)',
    artist: 'Iron Maiden',
    file: 'capa_fear_of_the_dark',
};
const HeartsOnFire = {
    songName: 'Hearts On Fire',
    artist: 'Hammerfall',
    file: 'hearts_on_fire',
};
const WheelsOfTheSteel = {
    songName: '747 (Strangers in the Night)',
    artist: 'Saxon',
    file: 'capa_wheels_of_steel',
};
let isPlaying = false;
const playlist = [FearOfTheDark, HeartsOnFire, WheelsOfTheSteel]
let index = 0;



function playSong() {
    play.querySelector('.bi').classList.remove('bi-play-circle-fill');
    play.querySelector('.bi').classList.add('bi-pause-circle-fill');
    song.play();
    isPlaying = true;
}

function pauseSong() {
    play.querySelector('.bi').classList.add('bi-play-circle-fill');
    play.querySelector('.bi').classList.remove('bi-pause-circle-fill');
    song.pause();
    isPlaying = false;
}

function playPauseDecider() {
    if (isPlaying === true) {
        pauseSong();
    } else {
        playSong();
    }
}

function initializeSong() {
    cover.src = `imagens/${playlist[index].file}.jpg`;
    song.src = `songs/${playlist[index].songName}.mp3`;
    songName.innerText = playlist[index].songName;
    artistName.innerText = playlist[index].artist;   
}

song.load();
    if (isPlaying) {
        song.oncanplaythrough = () => {
            song.play();
        };
    }

function previousSong() {
    if (index === 0) {
        index = playlist.length - 1;
    } else {
        index -= 1;
    }
    initializeSong();
    playSong();
}

function nextSong() {
    if (index === playlist.length - 1) {
        index = 0;
    } else {
        index += 1;
    }
    initializeSong();
    playSong();
}

play.addEventListener('click', playPauseDecider);
previous.addEventListener('click', previousSong);
next.addEventListener('click', nextSong);
song.addEventListener('ended', nextSong);

initializeSong();


