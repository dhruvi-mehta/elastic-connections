console.log("hello");

var Airtable = require("airtable");
console.log("Airtable");

var base = new Airtable({ apiKey:"keyyZwdvTUhLlyjUs" }).base(
  "appA9HloC8qD3H9Om"
);

// Get your table from the base, select ALL the records, and specify the callback functions that will receive each page of data
base("movies").select({sort:[{field:"date", direction:"desc"}]
}).eachPage(gotPageOfMovies, gotAllMovies);



// // an empty array to hold our people data
const movies = [];

// // callback function that receives each page of data (considered here as records) and adds them to our list of people
function gotPageOfMovies(records, fetchNextPage) {
  console.log("gotPageOfMovies()");
  console.log("There are "+records.length+" items in records");
//   // This takes the list of records and add them to the people array
  movies.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when ALL pages are loaded
// You don't need to edit this function.
function gotAllMovies(err) {
  console.log("gotAllMovies()");

   // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading movies");
    console.error(err);
    return;
  }

   showMovies();
}

// Show people based off the data that is retrieved
function showMovies() {
  console.log("showMovies()");

  // find the container
  const moviesContainer = document.querySelector("#container");

  // loop through all the people listed in the Airtable data. Inside is the code we are applying for EACH person in the list of people.
  movies.forEach((movie) => {

    // Print out what a single person's data looks like by printing out its fields
    console.log("SHOWING THE MOVIE")
    console.log(movie.fields);

    const movieContainer = document.createElement("div")
    // movieContainer.appendChild(movieImage);


    const movieImage = document.createElement("img");
    movieImage.src = movie.fields.images[0].url;
    movieImage.classList.add("image-container")
    movieContainer.appendChild(movieImage);

    const movieTitle = document.createElement("h2");
    movieTitle.classList.add("movie-title")
    movieTitle.innerText = movie.fields.title;
    movieContainer.appendChild(movieTitle);

    const movieDate = document.createElement("p");
    movieDate.classList.add("movie-info")
    movieDate.innerText = movie.fields.date;
    movieContainer.appendChild(movieDate);

    const moviePrice = document.createElement("p");
    moviePrice.classList.add("movie-info")
    moviePrice.innerText = movie.fields.price;
    movieContainer.appendChild(moviePrice);

    const movieSelect = document.createElement("p");
    movieSelect.classList.add("movie-info")
    movieSelect.innerText = movie.fields.select;
    movieContainer.appendChild(movieSelect);


    const movieTheatre = document.createElement("p");
    movieTheatre.classList.add("movie-info")
    movieTheatre.innerText = movie.fields.theatre;
    movieContainer.appendChild(movieTheatre);

    // const movieGenre = document.createElement("p");
    // movieGenre.classList.add("movie-info")
    // movieGenre.innerText = movie.fields.genre;
    // movieContainer.appendChild(movieGenre);

    const movieDuration = document.createElement("p");
    movieDuration.classList.add("movie-info")
    let duration = movie.fields.duration 

    var hrs = ~~(duration/ 3600);
    var mins = ~~((duration % 3600) / 60);
    var secs = ~~ duration % 60;

    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;

    console.log(ret)


    movieDuration.innerText = ret;
    movieContainer.appendChild(movieDuration);

    //genre feild from airtable 
    //look through the array

    let movieGenre = movie.fields.genre;

    movieGenre.forEach(function(genre){
    // movieGenre.innerText = genre;
    // moviesContainer.appendChild(genreElement);
     movieContainer.classList.add(genre);

 });
    // add event listener to our filter 
    //to add an active class to our song

    var filterAction = document.querySelector('#action');
    filterAction.addEventListener("click", function(){

        if (movieContainer.classList.contains("action")){
            movieContainer.style.display = "block";
      } else {
        movieContainer.style.display = "none";
      }
     });

    var filterAdventure = document.querySelector('#adventure');
    filterAdventure.addEventListener("click", function(){

        if (movieContainer.classList.contains("adventure")){
            songContainer.style.display = "block";
      } else {
        movieContainer.style.display = "none";
      }
     });

    var filterAnimation = document.querySelector('#animation');
    filterAnimation.addEventListener("click", function(){

        if (movieContainer.classList.contains("animation")){
            movieContainer.style.display = "block";
      } else {
        movieContainer.style.display = "none";
      }
     });

    var filterBiography = document.querySelector('#biography');
    filterBiography.addEventListener("click", function(){

        if (movieContainer.classList.contains("biography")){
            movieContainer.style.display = "block";
      } else {
        movieContainer.style.display = "none";
      }
     });

    var filterCrime = document.querySelector('#crime');
    filterCrime.addEventListener("click", function(){

        if (movieContainer.classList.contains("crime")){
            movieContainer.style.display = "block";
      } else {
        movieContainer.style.display = "none";
      }
     });

    var filterDrama = document.querySelector('#drama');
    filterDrama.addEventListener("click", function(){

        if (movieContainer.classList.contains("drama")){
            movieContainer.style.display = "block";
      } else {
        movieContainer.style.display = "none";
      }
     });

    var filterFamily = document.querySelector('#family');
    filterFamily.addEventListener("click", function(){

        if (movieContainer.classList.contains("family")){
            movieContainer.style.display = "block";
      } else {
        movieContainer.style.display = "none";
      }
     });

      var filterFantasy = document.querySelector('#fantasy');
    filterFantasy.addEventListener("click", function(){

        if (movieContainer.classList.contains("fantasy")){
            movieContainer.style.display = "block";
      } else {
        movieContainer.style.display = "none";
      }
     });

     var filterHistory = document.querySelector('#history');
    filterHistory.addEventListener("click", function(){

        if (movieContainer.classList.contains("history")){
            movieContainer.style.display = "block";
      } else {
        movieContainer.style.display = "none";
      }
     });    

     var filterHorror = document.querySelector('#horror');
    filterHorror.addEventListener("click", function(){

        if (movieContainer.classList.contains("horror")){
            movieContainer.style.display = "block";
      } else {
        movieContainer.style.display = "none";
      }
     });   

     var filterMusic = document.querySelector('#music');
    filterMusic.addEventListener("click", function(){

        if (movieContainer.classList.contains("music")){
            movieContainer.style.display = "block";
      } else {
        movieContainer.style.display = "none";
      }
     });

    var filterMystery = document.querySelector('#mystery');
    filterMystery.addEventListener("click", function(){

        if (movieContainer.classList.contains("mystery")){
            movieContainer.style.display = "block";
      } else {
        movieContainer.style.display = "none";
      }
     });

    var filterRomance = document.querySelector('#romance');
    filterRomance.addEventListener("click", function(){

        if (movieContainer.classList.contains("romance")){
            movieContainer.style.display = "block";
      } else {
        movieContainer.style.display = "none";
      }
     });


    var filterScifi = document.querySelector('#scifi');
    filterScifi.addEventListener("click", function(){

        if (movieContainer.classList.contains("scifi")){
            movieContainer.style.display = "block";
      } else {
        movieContainer.style.display = "none";
      }
     });
    
    var filterThriller = document.querySelector('#thriller');
    filterThriller.addEventListener("click", function(){

        if (movieContainer.classList.contains("mystery")){
            movieContainer.style.display = "block";
      } else {
        movieContainer.style.display = "none";
      }
     });



    moviesContainer.appendChild(movieContainer);









  });
}













