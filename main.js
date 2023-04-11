let data = JSON.parse(localStorage.getItem("movie"))
console.log(data);
// seachMovie()
document.getElementById('app').innerHTML = `<img src=${data.Poster} alt="movie poster"/>`
