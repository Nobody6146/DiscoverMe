let options = new HydrateAppOptions();
options.debug.dispatchTimer = false;
let hydrate = new HydrateApp(options);
interface AppState {
    songs:SongListItem[];
    playback:PlayerPlayback;
    tabs:AppNavbarTab[];
}
let appState:AppState = {
    playback: null,
    songs: null,
    tabs: null
};
let model:AppState = hydrate.bind("model", appState);

interface SongListItem {
    id:string;
    name:string;
    artists:string;
    albumCover:string;
    rating:number;
}

let songs:SongListItem[] = [];
for(let i = 0; i < 20; i++)
    songs.push({
        id: `s${i}`,
        name: `Song ${i}`,
        artists: `Artist ${i}`,
        albumCover: "https://upload.wikimedia.org/wikipedia/en/1/1b/Issues_Headspace.jpg",
        rating: 3
    });
model.songs = songs;
interface PlayerPlayback {
    song:SongListItem;
    modal:boolean;
    playing:boolean;
}
model.playback = {
    song: null,//songs[0],
    modal: false,//false
    playing: false,
}

interface AppNavbarTab {
    name:string;
    link:string;
    icon:string;
}
let tabs:AppNavbarTab[] = [
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

function playSong(song:SongListItem) {
    model.playback.song = song;
    togglePlay(true);
}
function togglePlay(toggle?:boolean) {
    if(toggle == null)
        toggle = !model.playback.playing;
    model.playback.playing = toggle;
    model.playback.playing = toggle;
}
function nextSong() {
    let index = appState.songs.indexOf(appState.playback.song);
    if(index < 0)
        return;
    index = (index + 1) % appState.songs.length;
    playSong(appState.songs[index]);
}
function previousSong() {
    let index = appState.songs.indexOf(appState.playback.song);
    if(index < 0)
        return;
    index = (index - 1 + appState.songs.length) % appState.songs.length;
    playSong(appState.songs[index]);
}
function rankSong(songModel:SongListItem, ranking:number) {
    songModel.rating = ranking;
}

function viewNowPlaying(toggle?:boolean) {
    model.playback.modal = toggle ?? !model.playback.modal;
}