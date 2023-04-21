// let data = JSON.parse(localStorage.getItem("movie"))
// console.log(data);
// document.getElementById('app').innerHTML = `<img src=${data.Poster} alt="movie poster"/>`
const movies = document.querySelector('.movies')
const searchMovie = document.querySelector('.search')
const searchBtn = document.querySelector('.search-btn')
const movieSection = document.querySelector('.movies');
const exploreImage = document.querySelector('.start-exploring')
// let searchedMovieHTML = ''
const moviesArray = []

const getSearchedMovie = () => {
  fetch(`http://www.omdbapi.com/?s=${searchMovie.value}&apikey=80010bb0`)
    .then(res => res.json())
    .then(data => data.Search.forEach((movie) => {
      getMovieID(movie.imdbID)
    }));
}

const getMovieID = (ID) => {
  exploreImage.style.display = 'none';
  fetch(`http://www.omdbapi.com/?i=${ID}&apikey=80010bb0`)
    .then((res) => res.json())
    .then(
      (data) =>
        (movieSection.innerHTML += `
    <div class="movie">
      <img class="poster" src="${data.Poster}" alt="${data.Title}">
      <div class="movie-info">
          <div class="title-container">
            <h3>${data.Title}</h3>
            <img class="star" src="/images/star.png" alt="star">
            <p class="movie-rating">${data.imdbRating}</p>
          </div>
          <div class="genre-container">
            <p>${data.Runtime}</p>
            <p>${data.Genre}</p>
            <div class="watchlist-btn-container">
              <button class="add-btn">
                <img class="plus-icon" src="/images/plus.svg" alt="plus">
              </button>
              <p>Watchlist</p>
            </div>
          </div>
          <p class="movie-description">${data.Plot}</p>
        </div>
      </div>
      <div class="container divider"></div>
    </div>
    `)
    );
};


searchBtn.addEventListener('click', getSearchedMovie);
