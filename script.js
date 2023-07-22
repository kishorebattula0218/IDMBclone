const apiBaseUrl = "https://api.themoviedb.org/3";
const apiKey = "49e3be45df1c1a483b5eb9560e3c73ab";
const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";

const moviesGrid = document.getElementById("movies-grid");
console.log(moviesGrid);

const fetchMoviesNowPlaying = async () => {
  const respone = await fetch(
    `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`
  );
  const jsonResponse = await respone.json();
  const movies = jsonResponse.results;
  console.log(movies);
  displayMovies(movies);
};

const displayMovies = async (movies) => {
  console.log(movies[0]);
  moviesGrid.innerHTML = movies
    .map(
      (movie) =>
        `<img src="${imageBaseUrl}/${movie.poster_path} alt="movie-poster""`
    )
    .join("");
};

fetchMoviesNowPlaying();
