// spotify 
require ("dotenv").config();


// file share
var fs = require("fs");
// axios
var axios = require("axios");
//moment
var moment = require('moment');
moment().format();

var searchThis = process.argv[2];

var movie, artist, song = process.argv[3];
    movie = artist = song

function callLiri() {
    switch (searchThis) {
        case "movie-this":

            if (!movie) {
                movie = "Mr.Nobody";
            }

            var movieUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

            axios.get(movieUrl)
            .then(function(movieData){
                console.log("Title: " + movieData.data.Title);
                console.log("Year: " + movieData.data.Year);
                console.log("imdbRating: " + movieData.data.imdbRating);
                console.log("Rotten Tomatoes Rating: " + movieData.data.Ratings[1].Value);
                console.log("Country: " + movieData.data.Country);
                console.log("Plot: " + movieData.data.Plot);
                console.log("Language: " + movieData.data.Language);
                console.log("Actors: " + movieData.data.Actors);
            });
            break;

        case "concert-this":
            
            var concertUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

            axios.get(concertUrl)
            .then(function(concertData){
            
                for (var i = 0; i < 10; i++) {

                console.log("Venue: " + concertData.data[i].venue.name);
                console.log("City: " + concertData.data[i].venue.city);
                console.log("Region: " + concertData.data[i].venue.region);
                console.log("Country: " + concertData.data[i].venue.country);

               var date = concertData.data[i].datetime = moment(date).format("MM/DD/YYYY");
                console.log("Date of Event: " + date);

                console.log("-------------------------------------------------");

                }
            });
            break;
            
        case "spotify-this-song":
            var Spotify = require('node-spotify-api');
            var keys = require("./keys.js");
            var spotifySongs = new Spotify(keys.spotify);
         
            if (!song) {
                song = "The Sign Ace of Base";

            }
            
            spotifySongs.search({
                type: "track",
                query: song

            }, function (err, musicData) {
                    if (err) {
                        console.log("Error: " + err);
                    }

                    console.log("Song Name: " + musicData.tracks.items[4].album.name);
                    console.log("Artist(s): " + musicData.tracks.items[4].artists[0].name);
                    console.log("Album: " + musicData.tracks.items[4].name);
                    console.log("Preview: " + musicData.tracks.items[4].preview_url);
            });
            break;
    };
}

if (searchThis === "do-what-it-says") {
    fs.readFile("random.txt", "utf8", function(err, said){
        if (err) {
            console.log("Error: " + err);
        }

        var txt = said.split(",");

            searchThis = txt[0];
            song = txt[1];

        callLiri();
        
    });
}

callLiri();