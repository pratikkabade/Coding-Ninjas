document.addEventListener("DOMContentLoaded", () => {
    const audioPlayer = document.getElementById('audio-player');
    const audioSource = document.getElementById('audio-source');
    const cover = document.getElementById('cover');
    const songTitle = document.getElementById('song-title');
    const songArtist = document.getElementById('song-artist');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const addToPlaylistBtn = document.getElementById('add-to-playlist-btn');
    const songListElement = document.getElementById('song-list');
    const genreFilter = document.getElementById('genre-filter');
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const playlistNameInput = document.getElementById('playlist-name');
    const createPlaylistBtn = document.getElementById('create-playlist');
    const allPlaylistsElement = document.getElementById('all-playlists');
    const currentPlaylistElement = document.getElementById('current-playlist');
    let currentSongIndex = 0;
    let currentPlaylist = [];

    const songs = [
        { id: 1, name: "Wildest Dreams", artist: "Taylor Swift", src: "./songs/Wildest Dreams.mp3", img: "https://cn-musify.netlify.app/assets/1989.jpg", genre: "Pop" },
        { id: 2, name: "Sparks Fly", artist: "Taylor Swift", src: "./songs/Sparks Fly.mp3", img: "https://cn-musify.netlify.app/assets/Speak%20Now%20TV.jpg", genre: "Pop" },
        { id: 3, name: "Paper Rings", artist: "Taylor Swift", src: "./songs/Paper Rings.mp3", img: "https://cn-musify.netlify.app/assets/Lover.jpg", genre: "Pop" },
        { id: 4, name: "Red", artist: "Taylor Swift", src: "./songs/Red.mp3", img: "https://cn-musify.netlify.app/assets/Red%20TV.jpg", genre: "Rock" },
        { id: 5, name: "Ready For It", artist: "Taylor Swift", src: "./songs/Ready For It.mp3", img: "https://cn-musify.netlify.app/assets/Reputation.jpg", genre: "Pop" },
        { id: 6, name: "Anti-Hero", artist: "Taylor Swift", src: "./songs/Anti-Hero.mp3", img: "https://cn-musify.netlify.app/assets/Midnights.jpg", genre: "Pop" }
    ];

    const playlists = {};

    function loadSongs(genre = 'all') {
        songListElement.innerHTML = '';
        const filteredSongs = genre === 'all' ? songs : songs.filter(song => song.genre === genre);
        filteredSongs.forEach((song, index) => {
            const songElement = document.createElement('button');
            songElement.classList.add('song');
            songElement.textContent = `${song.name} - ${song.artist}`;
            songElement.dataset.index = index;
            songElement.addEventListener('click', () => playSong(index));
            songListElement.appendChild(songElement);
        });
    }

    function playSong(index) {
        currentSongIndex = index;
        const song = songs[index];
        audioSource.src = song.src;
        audioPlayer.load();
        audioPlayer.play();
        cover.src = song.img;
        songTitle.textContent = song.name;
        songArtist.textContent = song.artist;
        playPauseBtn.textContent = 'Pause';
    }

    function togglePlayPause() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            audioPlayer.pause();
            playPauseBtn.textContent = 'Play';
        }
    }

    function playPrev() {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        playSong(currentSongIndex);
    }

    function playNext() {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        playSong(currentSongIndex);
    }

    function addToPlaylist() {
        const song = songs[currentSongIndex];
        if (!currentPlaylist.includes(song)) {
            currentPlaylist.push(song);
            updatePlaylist();
        }
    }

    function updatePlaylist() {
        currentPlaylistElement.innerHTML = '';
        currentPlaylist.forEach(song => {
            const songElement = document.createElement('div');
            songElement.textContent = `${song.name} - ${song.artist}`;
            currentPlaylistElement.appendChild(songElement);
        });
    }

    function createPlaylist() {
        const playlistName = playlistNameInput.value;
        if (playlistName && !playlists[playlistName]) {
            playlists[playlistName] = [];
            const playlistElement = document.createElement('div');
            playlistElement.textContent = playlistName;
            playlistElement.classList.add('playlist');
            playlistElement.addEventListener('click', () => {
                currentPlaylist = playlists[playlistName];
                renderPlaylistSongs(currentPlaylist);
            });
            allPlaylistsElement.appendChild(playlistElement);
            playlistNameInput.value = '';
        }
    }

    function renderPlaylistSongs(playlist) {
        currentPlaylistElement.innerHTML = '';
        playlist.forEach(song => {
            const songElement = document.createElement('div');
            songElement.textContent = `${song.name} - ${song.artist}`;
            currentPlaylistElement.appendChild(songElement);
        });
    }

    function toggleTheme() {
        document.body.classList.toggle('dark');
    }

    playPauseBtn.addEventListener('click', togglePlayPause);
    prevBtn.addEventListener('click', playPrev);
    nextBtn.addEventListener('click', playNext);
    addToPlaylistBtn.addEventListener('click', () => {
        const currentPlaylistName = Object.keys(playlists).find(name => playlists[name] === currentPlaylist);
        if (currentPlaylistName) {
            playlists[currentPlaylistName].push(songs[currentSongIndex]);
            renderPlaylistSongs(playlists[currentPlaylistName]);
        }
    });
    createPlaylistBtn.addEventListener('click', createPlaylist);
    genreFilter.addEventListener('change', () => loadSongs(genreFilter.value));
    themeToggleBtn.addEventListener('click', toggleTheme);

    loadSongs();
});

document.addEventListener("DOMContentLoaded", () => {
    const audioPlayer = document.getElementById('audio-player');
    const seekBar = document.getElementById('seek-bar');

    // Update the seek bar as the audio plays
    audioPlayer.addEventListener('timeupdate', () => {
        const value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        seekBar.value = value;
    });

    // Seek the audio when the seek bar value changes
    seekBar.addEventListener('input', () => {
        const time = (seekBar.value / 100) * audioPlayer.duration;
        audioPlayer.currentTime = time;
    });
});
