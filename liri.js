require ("dotenv").config();

var keys = require("./keys.js");

//var spotify = new spotify(keys.spotify);

var axios = require("axios");

var searchThis = process.argv[2];

var movie, artist= process.argv[3];

movie = artist

var artist = process.argv[3];

var movieUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

var musicUrl ;

var concertUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"


axios.get(movieUrl)
.then(
    function(movieData){
        if (searchThis === "movie-this") {
        // console.log(movieData.data);
        
        console.log("Title: " + movieData.data.Title);
        console.log("Year: " + movieData.data.Year);
        console.log("imdbRating: " + movieData.data.imdbRating);
        console.log("Rotten Tomatoes Rating: " + movieData.data.Ratings[1]);
        console.log("Country: " + movieData.data.Country);
        console.log("Plot: " + movieData.data.Plot);
        console.log("Language: " + movieData.data.Language);
        console.log("Actors: " + movieData.data.Actors);
        }
    });

axios.get(concertUrl)
.then(
    function(concertData){
        if (searchThis === "concert-this") {
            //console.log(concertData.data);

            console.log("Venue: " + concertData.data[1].venue.name);
            console.log("City: " + concertData.data[1].venue.city);
            console.log("Region: " + concertData.data[1].venue.region);
            console.log("Country: " + concertData.data[1].venue.country);
            console.log("Date of Event: " + concertData.data[1].datetime);

        }

    });
