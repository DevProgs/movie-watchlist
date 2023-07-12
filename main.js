const movies = document.querySelector('.movies')
const searchMovie = document.querySelector('.search')
const searchBtn = document.querySelector('.search-btn')
const movieSection = document.querySelector('.movies');
const exploreImage = document.querySelector('.start-exploring')
const errorMSG = document.querySelector('.error-msg')
const searchedMoviesArray = []
let watchlistArray = JSON.parse(localStorage.getItem('watchlist') || '[]');


movieSection.addEventListener('click', (e) => {
  if (e.target.dataset.id) {
    const selectedMovie = searchedMoviesArray.filter(movie => movie.imdbID === e.target.dataset.id)[0]
    if (!watchlistArray.includes(selectedMovie)) {
      watchlistArray.push(selectedMovie);
    }
    localStorage.setItem('watchlist', JSON.stringify(watchlistArray));
  }
});


const getSearchedMovie = async () => {
  const res = await fetch(`https://www.omdbapi.com/?s=${searchMovie.value}&apikey=80010bb0`)
  const data = await res.json()
      if (data.Response === "False") {
        errorMSG.innerHTML = renderErrorHTML()
      } else {
        data.Search.forEach((movie) => {
          getMovieID(movie.imdbID)
        })
    };
}

const getMovieID = async (id) => {
  exploreImage.style.display = 'none';
  errorMSG.style.display = 'none'
  movieSection.innerHTML = ''
  const res = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=80010bb0`)
  const data = await res.json()
  searchedMoviesArray.push(data);
    movieSection.innerHTML += `
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
              <button data-id=${data.imdbID} class="add-btn">
                <img class="plus-icon" src="/images/plus.svg" alt="plus"></img>
              </button>
              <p>Watchlist</p>
            </div>
          </div>
          <p class="movie-description">${data.Plot}</p>
        </div>
      </div>
      <div class="container divider"></div>
    </div>
    `;
};


const renderErrorHTML = () => {
  exploreImage.style.display = 'none';
  return (
    '<h3 class="error-msg">Unable to find what you’re looking for. Please try another search.</h3>'
  )
}


searchBtn.addEventListener('click', getSearchedMovie);
