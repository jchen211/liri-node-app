// spotify 
require ("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var spotifySongs = new Spotify(keys.spotify);

// file share
var fs = require("fs");
// axios
var axios = require("axios");

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
                console.log("Venue: " + concertData.data[1].venue.name);
                console.log("City: " + concertData.data[1].venue.city);
                console.log("Region: " + concertData.data[1].venue.region);
                console.log("Country: " + concertData.data[1].venue.country);
                console.log("Date of Event: " + concertData.data[1].datetime);
            });
            
            

    };



}

callLiri();