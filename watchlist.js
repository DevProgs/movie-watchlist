const watchlistSection = document.querySelector('.watchlist')
const startExploring = document.querySelector('.start-exploring');
let watchlistArray = JSON.parse(localStorage.getItem('watchlist') || '[]');

  watchlistSection.addEventListener('click', (e) => {
    if (e.target.dataset.id) {
      watchlistArray = watchlistArray.filter(movie => movie.imdbID !== e.target.dataset.id)
    }
    localStorage.setItem('watchlist', JSON.stringify(watchlistArray))
    renderWatchlist()
  })


const renderWatchlist = () => {
  let watchlistHTML = ''
  if (watchlistArray.length > 0) {
    watchlistSection.style.padding = '0'
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
        <div class="container watchlist-divider"></div>
      </div>
      `;
    })
    watchlistSection.innerHTML = watchlistHTML
  } else {
    watchlistSection.innerHTML = `
    <h3 class="empty-list">Your watchlist is a little empty...</h3>
      <div class="btn-container">
        <a class="add-btn" href="/index.html"><img class="plus-icon" src="/images/plus.svg" alt="plus icon"></a>
        <h4 class="add-movie-txt">Let's add some movies!</h4>
      </div>
    `;
  }
}

renderWatchlist()