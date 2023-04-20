// let data = JSON.parse(localStorage.getItem("movie"))
// console.log(data);
// document.getElementById('app').innerHTML = `<img src=${data.Poster} alt="movie poster"/>`
const movies = document.querySelector('.movies')
const searchMovie = document.querySelector('.search')
const searchBtn = document.querySelector('.search-btn')
const movieSection = document.querySelector('.movies');
let searchedMovieHTML = ''
const moviesArray = []

const getSearchedMovie = () => {
  fetch(`http://www.omdbapi.com/?s=${searchMovie.value}&apikey=80010bb0`)
    .then((res) => res.json())
    .then((data) => data.Search.forEach((movie) => {
      fetch(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=80010bb0`)
        .then(res => res.json())
        .then(data => moviesArray.push({
          title: data.Title,
          poster: data.Poster,
          rating: data.imdbRating,
          runtime: data.Runtime,
          genre: data.Genre,
          plot: data.Plot
        }));
    }
  ))
  console.log(moviesArray)
}




searchBtn.addEventListener('click', getSearchedMovie);
