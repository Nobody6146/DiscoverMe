let options = new HydrateAppOptions();
options.debug.dispatchTimer = true;
let hydrate = new HydrateApp(options);

interface SongListItem {
    id:string;
    name:string;
    artists:string;
    albumCover:string;
}

let songs:SongListItem[] = [];
for(let i = 0; i < 20; i++)
    songs.push({
        id: `s${i}`,
        name: `Song ${i}`,
        artists: `Artist ${i}`,
        albumCover: "https://www.amazon.com/Love-Death-Used/dp/B0009J2SBG",
    });
let model = hydrate.bind("model");
model.songs = songs;