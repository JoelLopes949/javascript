const songName = document.getElementById('song-name');
const artistName = document.getElementById('band-name');
const song = document.getElementById('audio');
const cover = document.getElementById('cover');
const play = document.getElementById('play');
const next = document.getElementById('next');
const previous = document.getElementById('previous');
const currentProgress = document.getElementById('current-progress');
const progressContainer = document.getElementById('progress-container');
const shuffleButtom = document.getElementById('shuffle');
const repeatButton = document.getElementById('repeat');
const songTime = document.getElementById('song-time');
const totalTime = document.getElementById('total-time');


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
let isShuffled = false;
let repeatOn = false;
const originalPlaylist = [FearOfTheDark, HeartsOnFire, WheelsOfTheSteel]
let sortedPlaylist = [...originalPlaylist];
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
    cover.src = `imagens/${sortedPlaylist[index].file}.jpg`;
    song.src = `songs/${sortedPlaylist[index].songName}.mp3`;
    songName.innerText = sortedPlaylist[index].songName;
    artistName.innerText = sortedPlaylist[index].artist;   
}

function previousSong() {
    if (index === 0) {
        index = sortedPlaylist.length - 1;
    } else {
        index -= 1;
    }
    initializeSong();
    playSong();
}

function nextSong() {
    if (index === sortedPlaylist.length - 1) {
        index = 0;
    } else {
        index += 1;
    }
    initializeSong();
    playSong();
}

function updateProgress() {
    const barWidth = song.currentTime / song.duration * 100;
    currentProgress.style.setProperty('--progress', `${barWidth}%`);
    songTime.innerText = toHHMMSS(song.currentTime);
}

function jumpTo(event) {
    const width = progressContainer.clientWidth;
    const clickPosition = event.offsetX;
    const jumpToTime = (clickPosition/width) * song.duration;
    song.currentTime = jumpToTime;
}

function shuffleArray(preShuffleArray) {
    const size = preShuffleArray.length;
    let currentIndex = size - 1;
    while(currentIndex > 0) {
        let randomIndex = Math.floor(Math.random() * size);
        let aux = preShuffleArray[currentIndex];
        preShuffleArray[currentIndex] = preShuffleArray[randomIndex];
        preShuffleArray[randomIndex] = aux;
        currentIndex -= 1;
    }
}

function shuffleButtomClicked() {
    if (isShuffled === false) {
        isShuffled = true;
        shuffleArray(sortedPlaylist);
        shuffleButtom.classList.add('button-active')
    }
    else {
        isShuffled = false
        sortedPlaylist = [...originalPlaylist]
        shuffleButtom.classList.remove('button-active')
    }
}

function repeatButtonClicked() {
    if (repeatOn === false) {
        repeatOn = true;
        repeatButton.classList.add('button-active')
    } else {
        repeatOn == false
        repeatButton.classList.remove('button-active')
    }
}

function nextOrRepeat() {
    if (repeatOn === false) {
        nextSong();
    } else {
        playSong();
    }
}

function toHHMMSS(originalNumber) {
    let hours = Math.floor(originalNumber/3600)
    let min = Math.floor((originalNumber - hours * 3600) / 60);
    let secs = Math.floor(originalNumber - hours * 3600 - min * 60)

    return `${hours.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}


function updateTotalTime() {
    totalTime.innerText = toHHMMSS(song.duration);
}


play.addEventListener('click', playPauseDecider);
previous.addEventListener('click', previousSong);
next.addEventListener('click', nextSong);
song.addEventListener('timeupdate', updateProgress);
song.addEventListener('ended', nextOrRepeat);
song.addEventListener('loadedmetadata', updateTotalTime);
progressContainer.addEventListener('click', jumpTo);
shuffleButtom.addEventListener('click', shuffleButtomClicked);
repeatButton.addEventListener('click', repeatButtonClicked);

initializeSong();


