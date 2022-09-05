let options = new HydrateAppOptions();
options.debug.dispatchTimer = false;
let hydrate = new HydrateApp(options);
let songs = [];
for (let i = 0; i < 20; i++)
    songs.push({
        id: `s${i}`,
        name: `Song ${i}`,
        artists: `Artist ${i}`,
        albumCover: "https://upload.wikimedia.org/wikipedia/en/1/1b/Issues_Headspace.jpg",
    });
let model = hydrate.bind("model");
model.songs = songs;
model.playback = {
    song: null //songs[0]
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
}
