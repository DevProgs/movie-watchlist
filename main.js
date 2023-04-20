// let data = JSON.parse(localStorage.getItem("movie"))
// console.log(data);
// document.getElementById('app').innerHTML = `<img src=${data.Poster} alt="movie poster"/>`
const movies = document.querySelector('.movies')
const searchMovie = document.querySelector('.search')
const searchBtn = document.querySelector('.search-btn')

const getSearchedMovie = () => {
  fetch(`http://www.omdbapi.com/?s=${searchMovie.value}&apikey=80010bb0`)
    .then((res) => res.json())
    .then((data) => 
    data.Search.map((movie) => console.log(movie.Title))
    );
}
searchBtn.addEventListener('click', getSearchedMovie);
