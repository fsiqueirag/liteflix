import React, { useEffect, useState } from 'react';
import { AddMovieModal } from './addMovie/AddMovieModal';
import { HomeButtons } from './addMovie/HomeButtons';
import { MoviesList } from './MoviesList';
import { MovieTitle } from './MovieTitle';

export const HomeScreen = ({ topMovie, showAddMovie }) => {

    const [myMovies, setMyMovies] = useState([]);
    const { title } = topMovie;

    useEffect(() => {
        const storedMovies = JSON.parse(localStorage.getItem("myMovies"));

        if (storedMovies) {
            setMyMovies(storedMovies.slice(Math.max(storedMovies.length - 4, 0)));
        }
    }, []);

    return (
        <>
            <div className="home__container">
                <div className="home__background-container" >
                    <div className="home__background" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${topMovie?.backdrop_path})` }} />

                </div>
                <main style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${topMovie?.backdrop_path})` }}>
                    <div>
                        <span className="home__movie-producer">Original de <span>Liteflix</span></span>
                        <MovieTitle title={title} />
                        <HomeButtons />
                    </div>
                </main>
                <MoviesList myMovies={myMovies} />

                {
                    showAddMovie
                    &&
                    <AddMovieModal
                        myMovies={myMovies}
                        setMyMovies={setMyMovies}
                    />
                }
            </div>
        </>

    )
}
