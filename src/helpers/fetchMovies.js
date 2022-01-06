const endpoint = 'https://api.themoviedb.org/3/movie/';
const apiKey = '6f26fd536dd6192ec8a57e94141f8b20';

export const fetchMovies = async () => {
    const topMovie = await getTopMovie();
    const popularMovies = await getPopularMovies();

    return [topMovie, popularMovies];
}

const getTopMovie = async () => {
    const res = await fetch(`${endpoint}now_playing?api_key=${apiKey}`);
    const topMovie = await res.json();
    return topMovie.results[0];
}

const getPopularMovies = async () => {
    const res = await fetch(`${endpoint}popular?api_key=${apiKey}`);
    const popularMovies = await res.json();
    return popularMovies.results.slice(0, 4);
}