const watchlistSection = document.querySelector('.watchlist')
const startExploring = document.querySelector('.start-exploring');
let watchlistArray = JSON.parse(localStorage.getItem('watchlist') || '[]');

const renderWatchlist = () => {
  watchlistSection.style.padding = '0'
  let watchlistHTML
  watchlistArray.forEach((movie) => {
    const {Poster, Title, imdbRating, Runtime, Genre, imdbID, Plot} = movie
    watchlistHTML += `
    <div class="movie">
      <img class="poster" src="${Poster}" alt="${Title}">
      <div class="movie-info">
          <div class="title-container">
            <h3>${Title}</h3>
            <img class="star" src="/images/star.png" alt="star">
            <p class="movie-rating">${imdbRating}</p>
          </div>
          <div class="genre-container">
            <p>${Runtime}</p>
            <p>${Genre}</p>
            <div class="watchlist-btn-container">
              <button data-id=${imdbID} class="add-btn">
                <img class="remove-icon" src="/images/remove.svg" alt="remove"></img>
              </button>
              <p>Remove</p>
            </div>
          </div>
          <p class="movie-description">${Plot}</p>
        </div>
      </div>
      <div class="container divider"></div>
    </div>
    `;
  })
  watchlistSection.innerHTML = watchlistHTML
}

renderWatchlist()