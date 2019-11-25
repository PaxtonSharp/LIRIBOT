var axios = require("axios");

var command = process.argv[2];
var item = process.argv.slice(3).join(" ")
console.log(item)


switch (command) {
    case "movie-this":
    movie()
        break;

    case "spotify-this":
    console.log("did a song thing")
        break;

    default:
    console.log("try a different command")
        break;
}

function movie(){
    axios.get("http://www.omdbapi.com/?t=" + item + "&y=&plot=short&apikey=trilogy")
    .then(function(response) {
    console.log(response.data);
    console.log(response.data.Year)
    console.log("title: " + response.data.Title)
    //FINISH REST OF DATA!!!!
    })
}

function songSpotify(){
    
}