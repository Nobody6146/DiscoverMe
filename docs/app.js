let options = new HydrateAppOptions();
options.debug.dispatchTimer = true;
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
