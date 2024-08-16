const movies = [
  { id: 1, title: 'Movie 1', genre: 'action' },
  { id: 2, title: 'Movie 2', genre: 'comedy' },
  { id: 3, title: 'Movie 3', genre: 'drama' },
  { id: 4, title: 'Movie 4', genre: 'action' },
  { id: 5, title: 'Movie 5', genre: 'comedy' },
];

const movieListContainer = document.querySelector('#movieList');
const radioBtns = document.getElementsByName('genre');

function renderMovies(selectedGenre) {
  const filteredMovies =
    selectedGenre === 'all'
      ? movies
      : movies.filter((movie) => movie.genre === selectedGenre);

  const movieListHTML = filteredMovies.map(
    (movie) => `
  <li>
    <strong>ID: </strong>${movie.id}<br>
    <strong>Title: </strong>${movie.title}<br>
    <strong>Genre: </strong>${movie.genre}
    <hr>
  </li>
  `
  );

  movieListContainer.innerHTML = movieListHTML.join('');
}

renderMovies('all');

//attaching each radio btn to event listener, before used for loop, here forEach loop, why not map(), map returns new array, we don't want to return new array, just just want to iterate over each element, attching to event listener and do operation so use forEach, it takes callback function

radioBtns.forEach((radioBtn) => {
  radioBtn.addEventListener('change', function () {
    // renderMovies(radioBtn.value)
    renderMovies(this.value);
  });
});
