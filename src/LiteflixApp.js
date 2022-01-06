import React, { useEffect, useState } from 'react';
import { HomeScreen } from './components/home/HomeScreen';
import { MoviesContext } from './context/MoviesContext';
import { MoviesLoader } from './components/ui/MoviesLoader';
import { Navbar } from './components/ui/Navbar';
import { fetchMovies } from './helpers/fetchMovies';

export const LiteflixApp = () => {

    const [loadingMovies, setLoadingMovies] = useState(true);
    const [minLoadingTime, setMinLoadingTime] = useState(true);
    const [topMovie, setTopMovie] = useState(null);
    const [popularMovies, setPopularMovies] = useState(null);
    const [showAddMovie, setShowAddMovie] = useState(false);

    useEffect(() => {
        (
            async () => {
                setTimeout(() => {
                    setMinLoadingTime(false);
                }, 2000);

                setLoadingMovies(true);
                const [topMovie, popularMovies] = await fetchMovies(setTopMovie, setPopularMovies);
                setTopMovie(topMovie);
                setPopularMovies(popularMovies);
                setLoadingMovies(false);
            }
        )();
    }, []);

    return (
        <MoviesContext.Provider value={{setShowAddMovie, popularMovies}}
        >
            {
                loadingMovies || minLoadingTime
                ?
                <MoviesLoader />
                :
                <div className={showAddMovie ? 'modal-open' : null}>
                    <Navbar setShowAddMovie={setShowAddMovie} />
                    <HomeScreen topMovie={topMovie} showAddMovie={showAddMovie} />
                </div>
            }
        </MoviesContext.Provider>
    )
}
