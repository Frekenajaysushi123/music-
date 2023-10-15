const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const volumeSlider = document.getElementById('volumeSlider');
const playlistItems = document.querySelectorAll('.playlist li');

const audio = new Audio(); // Create a new audio element

let currentTrack = 0; // Index of the current track

const playlist = ['songs/song1.mp3', 'songs/song2.mp3', 'songs/song3.mp3'];

function playTrack() {
  audio.src = playlist[currentTrack];
  audio.play();
}

function playNextTrack() {
  currentTrack = (currentTrack + 1) % playlist.length;
  playTrack();
}

audio.addEventListener('ended', () => {
  playNextTrack();
});

playButton.addEventListener('click', () => {
  playTrack();
});

pauseButton.addEventListener('click', () => {
  audio.pause();
});

prevButton.addEventListener('click', () => {
  currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
  playTrack();
});

nextButton.addEventListener('click', () => {
  playNextTrack();
});

volumeSlider.addEventListener('input', () => {
  audio.volume = volumeSlider.value;
});

playlistItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    currentTrack = index;
    playTrack();
  });
});
