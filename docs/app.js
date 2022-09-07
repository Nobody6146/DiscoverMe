let options = new HydrateAppOptions();
options.debug.dispatchTimer = false;
let hydrate = new HydrateApp(options);
let appState = {
    playback: null,
    songs: null,
    tabs: null
};
let model = hydrate.bind("model", appState);
let songs = [];
for (let i = 0; i < 20; i++)
    songs.push({
        id: `s${i}`,
        name: `Song ${i}`,
        artists: `Artist ${i}`,
        albumCover: "https://upload.wikimedia.org/wikipedia/en/1/1b/Issues_Headspace.jpg",
        rating: 3
    });
model.songs = songs;
model.playback = {
    song: null,
    modal: false,
    playing: false,
};
let tabs = [
    {
        name: "Discover",
        link: "#discover",
        icon: "search"
    },
    {
        name: "Listen",
        link: "#listen",
        icon: "play_circle"
    },
    {
        name: "Ratings",
        link: "#ratings",
        icon: "star_rate_half"
    },
    {
        name: "Recent",
        link: "#recent",
        icon: "queue_music"
    },
    {
        name: "Settings",
        link: "#settings",
        icon: "settings"
    }
];
model.tabs = tabs;
hydrate.route();
function playSong(song) {
    model.playback.song = song;
    togglePlay(true);
}
function togglePlay(toggle) {
    if (toggle == null)
        toggle = !model.playback.playing;
    model.playback.playing = toggle;
    model.playback.playing = toggle;
}
function nextSong() {
    let index = appState.songs.indexOf(appState.playback.song);
    if (index < 0)
        return;
    index = (index + 1) % appState.songs.length;
    playSong(appState.songs[index]);
}
function previousSong() {
    let index = appState.songs.indexOf(appState.playback.song);
    if (index < 0)
        return;
    index = (index - 1 + appState.songs.length) % appState.songs.length;
    playSong(appState.songs[index]);
}
function rankSong(songModel, ranking) {
    songModel.rating = ranking;
}
function viewNowPlaying(toggle) {
    model.playback.modal = toggle ?? !model.playback.modal;
}
