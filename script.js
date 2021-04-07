console.log("hello");

var Airtable = require("airtable");
console.log("Airtable");

var base = new Airtable({ apiKey:"keyyZwdvTUhLlyjUs" }).base(
  "appA9HloC8qD3H9Om"
);

// Get your table from the base, select ALL the records, and specify the callback functions that will receive each page of data
base("movies").select({}).eachPage(gotPageOfMovies, gotAllMovies);

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

    const moviesContainer =document.createElement

    const movieImage = document.createElement("img");
    movieImage.src = movie.fields.images[0].url;
    moviesContainer.appendChild(movieImage);

    const movieTitle = document.createElement("h2");
    movieTitle.innerText = movie.fields.title;
    moviesContainer.appendChild(movieTitle);

    const movieDate = document.createElement("p");
    movieDate.innerText = movie.fields.date;
    moviesContainer.appendChild(movieDate);

    const movieDuration = document.createElement("p");
    movieDuration.innerText = movie.fields.duration;
    moviesContainer.appendChild(movieDuration);

    const movieGenre = document.createElement("p");
    movieGenre.innerText = movie.fields.genre;
    moviesContainer.appendChild(movieGenre);

    const moviePrice = document.createElement("p");
    moviePrice.innerText = movie.fields.price;
    moviesContainer.appendChild(moviePrice);

    const movieTheatre = document.createElement("p");
    movieTheatre.innerText = movie.fields.theatre;
    moviesContainer.appendChild(movieTheatre);

    const movieSelect = document.createElement("p");
    movieSelect.innerText = movie.fields.select;
    moviesContainer.appendChild(movieSelect);

  });
}











