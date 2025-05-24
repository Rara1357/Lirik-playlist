const songs = [
  {
    title: "Lagu 1",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    lyrics: [
      { time: 2, lyric: "Ini lirik pertama" },
      { time: 5, lyric: "Ini lirik kedua" },
      { time: 8, lyric: "Ini lirik ketiga" }
    ]
  }
];

let currentSongIndex = 0;
let audio = document.getElementById('audio');
let lyricBox = document.getElementById('lyricBox');
let lyricTimer;

function loadSong(index) {
  currentSongIndex = index;
  audio.src = songs[index].audio;
  lyricBox.innerText = "[Siap untuk memutar]";
  clearInterval(lyricTimer);
}

function playAudio() {
  audio.play();
  startLyrics();
}

function pauseAudio() {
  audio.pause();
  clearInterval(lyricTimer);
}

function startLyrics() {
  let lyrics = songs[currentSongIndex].lyrics;
  let index = 0;
  clearInterval(lyricTimer);
  lyricTimer = setInterval(() => {
    if (index < lyrics.length && audio.currentTime >= lyrics[index].time) {
      lyricBox.innerText = lyrics[index].lyric;
      index++;
    }
  }, 300);
}
