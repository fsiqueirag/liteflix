import React, { useContext, useEffect, useState } from 'react';
import { MoviesContext } from '../../context/MoviesContext';
import { DropdownMenu } from './DropdownMenu';
import { MovieCard } from './MovieCard';

export const MoviesList = ({ myMovies }) => {

    const { popularMovies } = useContext(MoviesContext);

    const [selectedCategory, setSelectedCategory] = useState('top');
    const [showDropdown, setShowDropdown] = useState(false);
    const [cardsFirstLoad, setCardsFirstLoad] = useState(true);

    useEffect(() => {
        setShowDropdown(false);
    }, [selectedCategory])

    return (
        <aside className="movies__list-container">
            <div className="movies__filter-button-container">
                <span>Ver: </span>
                <button
                    className={`movies__filter-button ${showDropdown ? 'dropdown-active' : ''}`}
                    onClick={() => setShowDropdown(!showDropdown)}
                >
                    {selectedCategory === 'top' ? 'Populares' : 'Mis películas'}
                    <span
                        className="fas fa-chevron-down"
                    />
                </button>
            </div>

            {
                showDropdown
                &&
                <DropdownMenu
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    myMovies={myMovies}
                />
            }
            {
                selectedCategory === 'myMovies'
                    ?
                    myMovies.slice(Math.max(myMovies.length - 4, 0)).map((movie, index) => (
                        <MovieCard
                            imageUrl={movie.imageUrl}
                            title={movie.title}
                            index={index}
                            cardsFirstLoad={cardsFirstLoad}
                            setCardsFirstLoad={setCardsFirstLoad}
                            key={index}
                        />
                    ))
                    :
                    popularMovies.map((movie, index) => (
                        <MovieCard
                            imageUrl={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                            title={movie.title}
                            index={index}
                            cardsFirstLoad={cardsFirstLoad}
                            setCardsFirstLoad={setCardsFirstLoad}
                            key={movie.id}
                        />
                    ))
            }
        </aside >
    )
}
