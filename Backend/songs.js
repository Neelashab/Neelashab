const { default: axios } = require('axios');
const csv = require('csvtojson');

const API_KEY = "3edfa2ef08acfedc0011a5ce8f65f8b8";

const TAYLOR_ID = "259675";

const MUSIXMATCH_AD = "https://api.musixmatch.com/ws/1.1/"

const Path = require('path');

const csvFilePath = Path.join(__dirname, "taylor_swift_lyrics.csv");

const csvToJson = async () => {
    // will wait for this line to execute before moving forward 
    const songsArray = await csv().fromFile(csvFilePath);

    for (var i = 0; i < 10; i++) {
        console.log(songsArray[i]);
    }
}


const getLyrics = async () => {
    const albums = await axios.get(`https://api.musixmatch.com/ws/1.1/artist.albums.get?apikey=3edfa2ef08acfedc0011a5ce8f65f8b8&artist_id=${TAYLOR_ID}`);
    console.log(albums)
    console.log(albums.data.message.body)
    var tracks = [];
    var lyrics = [];
    for (var i = 0; i < albums.length; i++) {
        var album_id = albums[i].album_id;
        tracks.push(`${MUSIXMATCH_AD}album.tracks.get?apikey=${API_KEY}&album_id=${album_id}`);
    }

    for (var i = 0; i < tracks.length; i++) {
        var track_id = lyrics[i].track_id;
        lyrics.push(`${MUSIXMATCH_AD}track.lyrics.get?apikey=${API_KEY}&track_id=${track_id}}`);
    }

    return lyrics;
}


const randomLyrics = (lyrics) => {
    const randomIndex = Math.random(0, lyrics.length - 1);
    const lyric = lyrics[randomIndex];

    return lyric
}


const playGame = (lyrics) => {
    console.log("Hello and welcome to the lyric guessing game!\nThe rules are as follows:")
    console.log("You will be presented with a random Taylor Swift lyric on the screen and your job is to guess what song it is from.")
    console.log("You can double your points by guessing which album it is from as well! You will be given 5 songs to guess and 3 attempts per each song.")
    
}


getLyrics();
playGame();

// notes: maybe add a kanye west vs taylor swift option for creativity and funny
// You probably should add something to see that the same number is not generated twice for the random lyric? Idk 
