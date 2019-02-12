require ("dotenv").config();

var keys = require("./keys.js");

//var spotify = new spotify(keys.spotify);

var axios = require("axios");

var searchThis = process.argv[2];

var searchName = process.argv[3];

var movieUrl = "http://www.omdbapi.com/?t=" + searchName + "&y=&plot=short&apikey=trilogy";

var musicUrl ;

var concertUrl = "https://rest.bandsintown.com/artists/" + searchName + "/events?app_id=codingbootcamp";

function getMovie(){
axios.get(movieUrl)

.then(
    function(movieData){
        if (searchThis === "movie-this") {
        // console.log(movieData.data);
        
        console.log("Title: " + movieData.data.Title);
        console.log("Year: " + movieData.data.Year);
        console.log("imdbRating: " + movieData.data.imdbRating);
        console.log(movieData.data.Ratings[1]);
        console.log("Country: " + movieData.data.Country);
        console.log("Plot: " + movieData.data.Plot);
        console.log("Language: " + movieData.data.Language);
        console.log("Actors: " + movieData.data.Actors);
        }
    })
};

function getConcert() {

axios.get(concertUrl)
.then(
    function(concertData){
        if (searchThis === "concert-this") {
            console.log(concertData.data);
        }

    })
};

getMovie();
//getConcert();